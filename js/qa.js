/* ============================================================
   AMANAH · «Вопрос-Ответ» (Premium)
   - вопросы хранятся в localStorage в привязке к профилю:
     amanah_qa_<uid> (getActiveUid() из js/app.js, гость -> 'guest')
   - авто-ответ через 3 секунды после отправки (для теста без сервера)
   - таймеры возобновляются после перезагрузки страницы
   - статус Премиума: isPro() из js/app.js (вкл. демо-переключатель)
   - все строки локализованы ключами qa.* в js/translations.js
   ============================================================ */
(function (window, document) {
    'use strict';

    var PREFIX = 'amanah_qa_';
    var DEMO_KEY = 'amanah_premium_demo';
    var DELAY = 3000;          // 3 секунды до авто-ответа
    var MIN_LEN = 10;
    var MAX_LEN = 1000;

    var timers = {};           // id -> timeout (чтобы не дублировать)

    /* ---------- Утилиты ---------- */
    function t(key, vars, fallback) {
        if (typeof window.T === 'function') return window.T(key, vars, fallback);
        if (window.I18N && typeof window.I18N.t === 'function') return window.I18N.t(key, vars, fallback);
        return fallback != null ? fallback : key;
    }

    function lang() {
        return (window.I18N && typeof window.I18N.getLang === 'function')
            ? window.I18N.getLang() : 'ru';
    }

    function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
    function lsSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* private mode */ } }

    function $(id) { return document.getElementById(id); }

    function toast(msg, type) {
        if (typeof window.showToast === 'function') window.showToast(msg, type || 'success');
    }

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    /* uid профиля: сначала кэш app.js, затем глобальная привязка currentUser */
    function activeUid() {
        try {
            if (typeof window.getActiveUid === 'function') {
                var uid = window.getActiveUid();
                if (uid) return String(uid);
            }
        } catch (e) { /* ignore */ }
        try {
            /* currentUser — глобальная let-привязка из app.js (не свойство window) */
            if (typeof currentUser !== 'undefined' && currentUser && currentUser.uid) {
                return String(currentUser.uid);
            }
        } catch (e) { /* ignore */ }
        return 'guest';
    }

    function storeKey() { return PREFIX + activeUid(); }

    function hasPro() {
        if (typeof window.isPro === 'function' && window.isPro()) return true;
        if (lsGet(DEMO_KEY) === 'true') return true;
        if (window.Premium && typeof window.Premium.hasPro === 'function' && window.Premium.hasPro()) return true;
        var uid = activeUid();
        return uid !== 'guest' && lsGet('amanah_pro_' + uid) === 'true';
    }

    function readItems() {
        var raw = lsGet(storeKey());
        if (raw == null) return null;              // null = первый визит
        try {
            var arr = JSON.parse(raw);
            return Array.isArray(arr) ? arr : [];
        } catch (e) { return []; }
    }

    function writeItems(items) { lsSet(storeKey(), JSON.stringify(items)); }

    /* Два примера истории при первом заходе: один с ответом, один «В обработке».
       Помечены demo + auto:false — авто-ответ к ним не применяется, поэтому
       статус «В обработке» остаётся видимым на экране. */
    function seedItems() {
        var now = Date.now();
        return [
            {
                id: 'demo-answered', demo: true, auto: false,
                textKey: 'qa.demo.q1', answerKey: 'qa.demo.a1',
                createdAt: now - 2 * 86400000,
                status: 'answered', answeredAt: now - 86400000
            },
            {
                id: 'demo-pending', demo: true, auto: false,
                textKey: 'qa.demo.q2', answerKey: null,
                createdAt: now - 3 * 3600000,
                status: 'pending'
            }
        ];
    }

    function ensureSeed() {
        if (lsGet(storeKey()) == null) writeItems(seedItems());
    }

    function fmtDate(ts) {
        var map = { ru: 'ru-RU', en: 'en-GB', ar: 'ar-EG' };
        try {
            return new Intl.DateTimeFormat(map[lang()] || 'ru-RU', {
                day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
            }).format(new Date(ts));
        } catch (e) {
            return new Date(ts).toLocaleString();
        }
    }

    /* ---------- Иконки ---------- */
    var ICON_CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
    var ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
    var ICON_BOOK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6.5C10.5 5.2 8.2 4.6 5 4.6v13c3.2 0 5.5.6 7 1.9 1.5-1.3 3.8-1.9 7-1.9v-13c-3.2 0-5.5.6-7 1.9z"/><path d="M12 6.5v13"/></svg>';
    var ICON_EMPTY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.3 9.3 0 0 1-3.6-.6L3 21l1.7-4.9A8.2 8.2 0 0 1 4 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8 8.4z"/><path d="M8.5 11.5h7"/></svg>';

    /* ---------- Отрисовка списка ---------- */
    function itemHtml(it) {
        var answered = it.status === 'answered';
        var text = it.demo ? t(it.textKey, null, it.textKey) : (it.text || '');
        var answer = answered
            ? (it.answerKey ? t(it.answerKey, null, it.answerKey) : (it.answer || ''))
            : '';
        var chip = answered
            ? '<span class="qa-chip qa-chip--answered">' + ICON_CHECK + esc(t('qa.status.answered', null, 'Ответ получен')) + '</span>'
            : '<span class="qa-chip qa-chip--pending">' + ICON_CLOCK + esc(t('qa.status.pending', null, 'В обработке')) + '</span>';
        var demoTag = it.demo
            ? '<span class="qa-item__demo">' + esc(t('qa.demoTag', null, 'Пример')) + '</span>'
            : '';
        var answerBlock = answered ? [
            '<div class="qa-answer">',
                '<div class="qa-answer__head">',
                    '<span class="qa-answer__avatar" aria-hidden="true">' + ICON_BOOK + '</span>',
                    '<span class="qa-answer__who">',
                        '<strong class="qa-answer__name">' + esc(t('qa.answerLabel', null, 'Ответ специалиста')) + '</strong>',
                        '<span class="qa-answer__role">' + esc(fmtDate(it.answeredAt || it.createdAt || Date.now())) + '</span>',
                    '</span>',
                '</div>',
                '<p class="qa-answer__body" dir="auto">' + esc(answer) + '</p>',
            '</div>'
        ].join('') : '';

        return [
            '<article class="qa-item ' + (answered ? 'qa-item--answered' : 'qa-item--pending') + '" data-qa-id="' + esc(it.id) + '">',
                '<div class="qa-item__top">',
                    '<span class="qa-item__date">' + esc(fmtDate(it.createdAt || Date.now())) + demoTag + '</span>',
                    chip,
                '</div>',
                '<p class="qa-item__label">' + esc(t('qa.questionLabel', null, 'Вопрос')) + '</p>',
                '<p class="qa-item__question" dir="auto">' + esc(text) + '</p>',
                answerBlock,
            '</article>'
        ].join('');
    }

    function renderList() {
        var list = $('qa-list');
        if (!list) return;
        var items = readItems() || [];
        var count = $('qa-count');
        if (count) count.textContent = String(items.length);

        if (!items.length) {
            list.innerHTML = [
                '<div class="qa-empty">',
                    '<div class="qa-empty__icon">' + ICON_EMPTY + '</div>',
                    '<h3>' + esc(t('qa.emptyTitle', null, 'Здесь пока нет вопросов')) + '</h3>',
                    '<p>' + esc(t('qa.emptyDesc', null, 'Задайте первый вопрос — он появится в этом списке вместе с ответом.')) + '</p>',
                '</div>'
            ].join('');
            return;
        }
        list.innerHTML = items.map(itemHtml).join('');
    }

    function updateCounter() {
        var input = $('qa-input');
        var counter = $('qa-counter');
        if (input && counter) counter.textContent = input.value.length + ' / ' + MAX_LEN;
    }

    function updateAriaDir() {
        var input = $('qa-input');
        if (!input) return;
        var l = lang();
        input.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
        input.style.textAlign = l === 'ar' ? 'right' : 'left';
    }

    /* ---------- Авто-ответ ---------- */
    function flash(id) {
        var el = document.querySelector('[data-qa-id="' + id + '"]');
        if (!el) return;
        el.classList.add('qa-item--fresh');
        setTimeout(function () { el.classList.remove('qa-item--fresh'); }, 1800);
    }

    function resolveAnswer(id, quiet) {
        var items = readItems() || [];
        var changed = false;
        items.forEach(function (it) {
            if (it.id === id && it.status === 'pending') {
                it.status = 'answered';
                it.answeredAt = Date.now();
                changed = true;
            }
        });
        if (!changed) return;
        writeItems(items);
        renderList();
        if (!quiet) {
            flash(id);
            toast(t('qa.toast.answered', null, 'Ответ специалиста получен'), 'success');
        }
    }

    function scheduleAnswer(id, wait, quiet) {
        if (timers[id]) clearTimeout(timers[id]);
        timers[id] = setTimeout(function () {
            delete timers[id];
            resolveAnswer(id, quiet);
        }, Math.max(0, wait));
    }

    /* При загрузке: досылаем ответы по вопросам, отправленным перед перезагрузкой */
    function resumePending() {
        var items = readItems() || [];
        var now = Date.now();
        var changed = false;
        items.forEach(function (it) {
            if (it.status !== 'pending' || it.auto !== true) return;
            var elapsed = now - (it.createdAt || now);
            if (elapsed >= DELAY) {
                it.status = 'answered';
                it.answeredAt = now;
                changed = true;
            } else {
                scheduleAnswer(it.id, DELAY - elapsed, true);
            }
        });
        if (changed) writeItems(items);
    }

    /* ---------- Отправка вопроса ---------- */
    function send() {
        var input = $('qa-input');
        if (!input) return;
        var text = (input.value || '').trim();

        if (!text) {
            toast(t('qa.validation.empty', null, 'Напишите вопрос перед отправкой'), 'error');
            input.focus();
            return;
        }
        if (text.length < MIN_LEN) {
            toast(t('qa.validation.short', null, 'Добавьте немного подробностей — минимум 10 символов'), 'error');
            input.focus();
            return;
        }
        if (text.length > MAX_LEN) text = text.slice(0, MAX_LEN);

        var items = readItems() || [];
        var item = {
            id: 'q-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
            text: text,
            createdAt: Date.now(),
            status: 'pending',
            answerKey: 'qa.autoAnswer',
            auto: true
        };
        items.unshift(item);
        writeItems(items);

        input.value = '';
        updateCounter();
        renderList();
        toast(t('qa.toast.sent', null, 'Вопрос отправлен'), 'success');
        scheduleAnswer(item.id, DELAY, false);
    }

    /* ---------- Доступ: заглушка на qa.html ---------- */
    function enableDemo() {
        lsSet(DEMO_KEY, 'true');
        try { document.dispatchEvent(new CustomEvent('amanah:premiumchange')); } catch (e) { /* ignore */ }
        renderGate();
        toast(t('premium.activeTitle', null, 'Премиум активен'), 'success');
    }

    function renderGate() {
        var gate = $('qa-gate');
        var main = $('qa-main');
        if (!gate || !main) return;
        var pro = hasPro();
        gate.hidden = pro;
        main.hidden = !pro;
        if (pro) {
            ensureSeed();
            resumePending();
            renderList();
        }
        updateAriaDir();
    }

    /* ---------- Кнопка «Вопрос-Ответ» в профиле ---------- */
    function renderEntry() {
        var entries = document.querySelectorAll('[data-qa-entry]');
        if (!entries.length) return;
        var pro = hasPro();
        Array.prototype.forEach.call(entries, function (el) {
            el.classList.toggle('is-locked', !pro);
            el.classList.toggle('is-premium', pro);
            el.setAttribute('href', pro ? 'qa.html' : 'settings.html?premium=1&qa=locked');

            var desc = el.querySelector('[data-qa-desc]');
            var cta = el.querySelector('[data-qa-cta]');
            var badge = el.querySelector('[data-qa-badge]');
            var lock = el.querySelector('[data-qa-lock]');

            if (desc) desc.textContent = t(pro ? 'qa.entry.descPro' : 'qa.entry.descLocked');
            if (cta) cta.textContent = t(pro ? 'qa.entry.cta' : 'qa.entry.ctaLocked');
            if (badge) badge.textContent = t(pro ? 'qa.entry.badgePro' : 'qa.entry.badge');
            if (lock) {
                /* SVGElement не поддерживает свойство .hidden — ставим атрибут */
                if (pro) lock.setAttribute('hidden', '');
                else lock.removeAttribute('hidden');
            }
            el.setAttribute('aria-label', t('qa.entry.title') + ' — ' +
                (pro ? t('qa.entry.cta') : t('qa.lockedMsg')));
        });
    }

    /* ---------- Сообщение на экране тарифов (settings.html?qa=locked) ---------- */
    function renderGateNote() {
        if (!window.__qaLocked) return;
        var note = $('qa-gate-note');
        if (!note) return;
        if (hasPro()) return;      // подписка уже есть — сообщение не нужно
        note.hidden = false;
        toast(t('qa.lockedMsg', null, 'Задавать вопросы могут только премиум-пользователи'), 'error');
    }

    /* ---------- Инициализация ---------- */
    function initPage() {
        if (!$('qa-page')) return;
        document.title = t('page.qaTitle', null, 'AMANAH — Вопрос-Ответ');

        var sendBtn = $('qa-send');
        if (sendBtn) sendBtn.addEventListener('click', send);

        var input = $('qa-input');
        if (input) {
            input.addEventListener('input', updateCounter);
            input.addEventListener('keydown', function (e) {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); send(); }
            });
        }

        var gateCta = $('qa-gate-cta');
        if (gateCta) gateCta.addEventListener('click', function () {
            window.location.href = 'settings.html?premium=1&qa=locked';
        });
        var gateDemo = $('qa-gate-demo');
        if (gateDemo) gateDemo.addEventListener('click', enableDemo);

        renderGate();
        updateCounter();
    }

    function bind() {
        document.addEventListener('amanah:languagechange', function () {
            if ($('qa-page')) {
                document.title = t('page.qaTitle', null, 'AMANAH — Вопрос-Ответ');
                updateAriaDir();
                renderList();
            }
            renderEntry();
        });
        document.addEventListener('amanah:premiumchange', function () {
            renderGate();
            renderEntry();
        });
        document.addEventListener('amanah:authchange', function () {
            renderGate();
            renderEntry();
        });
    }

    function init() {
        bind();
        initPage();
        renderEntry();
        renderGateNote();
    }

    window.Qa = {
        send: send,
        render: renderGate,
        renderList: renderList,
        hasPro: hasPro,
        enableDemo: enableDemo,
        items: function () { return readItems() || []; },
        storeKey: storeKey
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})(window, document);
