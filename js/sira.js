/* ============================================================
   СИРА · интерактивная карта (техническая часть + заглушки контента)
   Переиспользует из js/app.js: T, showToast, currentUser, getProgress,
   recordProgress, isPro, activatePro, openAuthModal.
   ============================================================ */
(function (window, document) {
    'use strict';

    var NS = 'http://www.w3.org/2000/svg';
    var TOTAL = 25;
    var STORE_KEY = 'sira';

    var activeIndex = 0;
    var mode = 'read';
    var accessKind = 'premium';
    var lastLen = 0;

    function t(key, vars, fallback) {
        return (typeof window.T === 'function') ? window.T(key, vars, fallback)
            : (fallback != null ? fallback : key);
    }

    function isGuest() {
        return !(typeof currentUser !== 'undefined' && currentUser);
    }

    function hasPro() {
        return typeof window.isPro === 'function' && window.isPro();
    }

    function getDone() {
        try {
            if (typeof window.getProgress !== 'function') return [];
            var p = window.getProgress();
            var entry = p && p[STORE_KEY];
            if (!entry || !Array.isArray(entry.done)) return [];
            return entry.done.map(String);
        } catch (e) { return []; }
    }

    function svg(tag, attrs) {
        var el = document.createElementNS(NS, tag);
        if (attrs) Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
        return el;
    }

    /* ---------- Построение маркеров по длине пути ---------- */
    function buildMarkers() {
        var layer = document.getElementById('sira-markers');
        var path = document.getElementById('sira-route-path');
        if (!layer || !path) return;

        var len = 0;
        try { len = path.getTotalLength(); } catch (e) { return; }
        if (!len) return;
        lastLen = len;

        var done = getDone();
        var step = len / (TOTAL - 1);
        var r = Math.max(8, Math.min(13, step * 0.29));
        layer.textContent = '';

        for (var i = 0; i < TOTAL; i++) {
            var p = path.getPointAtLength(step * i);
            var isDone = done.indexOf(String(i)) !== -1;
            var state = isDone ? 'done'
                : (i === 0 ? 'free' : (hasPro() ? 'unlocked' : 'locked'));

            var outer = svg('g', { transform: 'translate(' + p.x.toFixed(2) + ' ' + p.y.toFixed(2) + ')' });
            var g = svg('g', {
                'class': 'sira-marker is-' + state,
                'data-index': i,
                role: 'button',
                tabindex: '0',
                'aria-label': t('sira.event', null, 'Событие') + ' ' + (i + 1)
            });

            g.appendChild(svg('circle', { 'class': 'sira-marker__halo', r: (r + 6).toFixed(1) }));
            g.appendChild(svg('circle', { 'class': 'sira-marker__circle', r: r.toFixed(1) }));

            var num = svg('text', { 'class': 'sira-marker__num', x: 0, y: 1 });
            num.textContent = String(i + 1);
            g.appendChild(num);

            if (state === 'locked') {
                g.appendChild(svg('path', {
                    'class': 'sira-marker__lock',
                    d: 'M -3.1 0.4 h6.2 v4.8 h-6.2 z M -2.1 0.4 v-1.9 a2.1 2.1 0 0 1 4.2 0 v1.9'
                }));
            }
            if (state === 'done') {
                g.appendChild(svg('path', {
                    'class': 'sira-marker__check',
                    d: 'M -4.2 0 l2.7 2.8 L 4.2 -3.2'
                }));
            }

            outer.appendChild(g);
            layer.appendChild(outer);
        }

        // Подсветка пройденной части маршрута
        var progressPath = document.getElementById('sira-route-progress');
        if (progressPath) {
            var maxDone = -1;
            done.forEach(function (d) { var n = Number(d); if (!isNaN(n) && n > maxDone) maxDone = n; });
            progressPath.style.strokeDasharray = maxDone >= 0
                ? ((step * (maxDone + 1)).toFixed(1) + ' ' + len.toFixed(1))
                : ('0 ' + len.toFixed(1));
        }
    }

    /* ---------- Отрисовка счётчика и подписей ---------- */
    function render() {
        buildMarkers();
        var doneCount = getDone().length;
        var badge = document.getElementById('sira-progress-value');
        if (badge) badge.textContent = t('sira.progress', { done: doneCount }, 'Изучено: ' + doneCount + ' из 25');

        // Динамические строки в открытых модалках тоже обновляются при смене языка
        var title = document.getElementById('sira-lesson-title');
        if (title) title.textContent = t('sira.event', null, 'Событие') + ' №' + (activeIndex + 1);
        var readText = document.getElementById('sira-read-text');
        if (readText) readText.textContent = t('sira.placeholder', { n: activeIndex + 1 });
        var accessTitle = document.getElementById('sira-access-title');
        if (accessTitle) {
            accessTitle.textContent = accessKind === 'guest'
                ? t('sira.login.title', null, 'Войдите в профиль')
                : t('sira.premium.title', null, 'Откройте всю Сиру');
        }
        var accessBadge = document.getElementById('sira-access-badge');
        if (accessBadge) accessBadge.hidden = accessKind === 'guest';
    }

    /* ---------- Размытие карты под модалкой ---------- */
    function setBlur(on) {
        var stage = document.getElementById('sira-map-stage');
        if (stage) stage.classList.toggle('is-blurred', !!on);
    }

    function anyModalOpen() {
        return ['sira-lesson-modal', 'sira-access-modal'].some(function (id) {
            var m = document.getElementById(id);
            return m && m.classList.contains('active');
        });
    }

    function closeAll() {
        ['sira-lesson-modal', 'sira-access-modal'].forEach(function (id) {
            var m = document.getElementById(id);
            if (m) m.classList.remove('active');
        });
        setBlur(false);
    }

    /* ---------- Модалка урока ---------- */
    function setMode(next) {
        mode = next;
        var tabs = document.querySelectorAll('#sira-lesson-modal .sira-tab');
        tabs.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-mode') === mode); });
        var watch = document.getElementById('sira-panel-watch');
        var read = document.getElementById('sira-panel-read');
        if (watch) watch.hidden = mode !== 'watch';
        if (read) read.hidden = mode !== 'read';
    }

    function openLesson(i) {
        activeIndex = i;
        var num = document.getElementById('sira-lesson-num');
        if (num) num.textContent = String(i + 1);
        var title = document.getElementById('sira-lesson-title');
        if (title) title.textContent = t('sira.event', null, 'Событие') + ' №' + (i + 1);
        var readText = document.getElementById('sira-read-text');
        if (readText) readText.textContent = t('sira.placeholder', { n: i + 1 });

        var done = getDone().indexOf(String(i)) !== -1;
        var btn = document.getElementById('sira-studied-btn');
        if (btn) {
            btn.classList.toggle('is-done', done);
            btn.textContent = done ? t('sira.doneBadge', null, 'Изучено') : t('sira.studied', null, 'Я изучил это');
        }
        var note = document.getElementById('sira-studied-note');
        if (note) note.textContent = isGuest() ? t('sira.guestSave', null, '') : '';

        setMode('read');
        var modal = document.getElementById('sira-lesson-modal');
        if (modal) modal.classList.add('active');
        setBlur(true);
    }

    function markStudied() {
        if (isGuest()) {
            if (typeof window.showToast === 'function') {
                window.showToast(t('sira.guestSave', null, 'Войдите, чтобы сохранить прогресс'), 'error');
            }
            closeAll();
            return;
        }
        if (typeof window.recordProgress === 'function') {
            window.recordProgress(STORE_KEY, [activeIndex], activeIndex);
        }
        closeAll();
        render();
        if (typeof window.showToast === 'function') {
            window.showToast(t('sira.doneBadge', null, 'Изучено'), 'success');
        }
    }

    /* ---------- Модалка доступа: Премиум / Вход ---------- */
    function openAccess(kind) {
        accessKind = kind;
        var premium = document.getElementById('sira-access-premium');
        var guest = document.getElementById('sira-access-guest');
        if (premium) premium.hidden = kind !== 'premium';
        if (guest) guest.hidden = kind !== 'guest';
        var accessTitle = document.getElementById('sira-access-title');
        if (accessTitle) {
            accessTitle.textContent = kind === 'guest'
                ? t('sira.login.title', null, 'Войдите в профиль')
                : t('sira.premium.title', null, 'Откройте всю Сиру');
        }
        var badge = document.getElementById('sira-access-badge');
        if (badge) badge.hidden = kind === 'guest';
        var modal = document.getElementById('sira-access-modal');
        if (modal) modal.classList.add('active');
        setBlur(true);
    }

    function openPoint(i) {
        var done = getDone().indexOf(String(i)) !== -1;
        if (done || i === 0 || hasPro()) { openLesson(i); return; }
        openAccess(isGuest() ? 'guest' : 'premium');
    }

    function activatePremium() {
        if (typeof window.activatePro === 'function') {
            var result = window.activatePro();
            // activatePro() может дождаться готовности аккаунта — перерисуем и после промиса
            if (result && typeof result.then === 'function') {
                result.then(render).catch(function () {});
            }
        } else if (!isGuest() && typeof window.lsSet === 'function') {
            window.lsSet('amanah_pro_' + currentUser.uid, 'true');
        }
        closeAll();
        render();
    }

    function goLogin() {
        closeAll();
        if (typeof window.openAuthModal === 'function') window.openAuthModal();
        else window.location.href = 'profile.html';
    }

    /* ---------- Привязка событий ---------- */
    function bind() {
        var layer = document.getElementById('sira-markers');
        if (layer) {
            layer.addEventListener('click', function (e) {
                var g = e.target.closest ? e.target.closest('.sira-marker') : null;
                if (!g) return;
                openPoint(Number(g.getAttribute('data-index')));
            });
            layer.addEventListener('keydown', function (e) {
                if (e.key !== 'Enter' && e.key !== ' ') return;
                var g = e.target.closest ? e.target.closest('.sira-marker') : null;
                if (!g) return;
                e.preventDefault();
                openPoint(Number(g.getAttribute('data-index')));
            });
        }

        document.querySelectorAll('#sira-lesson-modal .sira-tab').forEach(function (b) {
            b.addEventListener('click', function () { setMode(b.getAttribute('data-mode')); });
        });

        var studied = document.getElementById('sira-studied-btn');
        if (studied) studied.addEventListener('click', markStudied);

        var play = document.getElementById('sira-play-btn');
        if (play) play.addEventListener('click', function () {
            if (typeof window.showToast === 'function') {
                window.showToast(t('sira.videoStub', null, 'Видео появится позже'), 'success');
            }
        });

        var premiumCta = document.getElementById('sira-premium-cta');
        if (premiumCta) premiumCta.addEventListener('click', activatePremium);
        var loginCta = document.getElementById('sira-login-cta');
        if (loginCta) loginCta.addEventListener('click', goLogin);

        ['sira-lesson-modal', 'sira-access-modal'].forEach(function (id) {
            var m = document.getElementById(id);
            if (!m) return;
            m.addEventListener('click', function (e) { if (e.target === m) closeAll(); });
        });

        document.querySelectorAll('.sira-card__close, .sira-access-later').forEach(function (b) {
            b.addEventListener('click', closeAll);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && anyModalOpen()) closeAll();
        });

        document.addEventListener('amanah:languagechange', render);
        document.addEventListener('amanah:authchange', render);
    }

    function init() {
        bind();
        render();
    }

    window.Sira = { render: render, openPoint: openPoint, closeAll: closeAll, total: TOTAL };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})(window, document);
