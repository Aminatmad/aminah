/* ============================================================
   AMANAH PREMIUM · экран подписки (Настройки) и баннер профиля
   Использует из js/app.js: T, isPro, lsGet/lsSet, showPage, openAuthModal.
   Статус подписки: isPro() + локальный демо-переключатель настроек.
   Оплата пока — заглушка (модалка «Перенаправление…»).
   ============================================================ */
(function (window, document) {
    'use strict';

    var UNTIL_KEY = 'amanah_premium_until';
    var DEMO_KEY = 'amanah_premium_demo';
    var TARGET_KEY = 'amanah_premium_target';
    var selectedPlan = 'year';

    function t(key, vars, fallback) {
        return (typeof window.T === 'function') ? window.T(key, vars, fallback)
            : (fallback != null ? fallback : key);
    }

    function lang() {
        return (window.I18N && typeof window.I18N.getLang === 'function')
            ? window.I18N.getLang() : 'ru';
    }

    function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
    function lsSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }

    function demoEnabled() { return lsGet(DEMO_KEY) === 'true'; }

    function hasPro() {
        if (typeof window.isPro === 'function' && window.isPro()) return true;
        return demoEnabled();
    }

    function isGuest() {
        return !(typeof window.currentUser !== 'undefined' && window.currentUser);
    }

    /* Дата окончания: для уже активной подписки без даты ставим +1 год,
       при демо-активации — по выбранному тарифу (+30 / +365 дней). */
    function ensureUntil() {
        var raw = lsGet(UNTIL_KEY);
        if (raw) {
            var d = new Date(raw);
            if (!isNaN(d.getTime())) return d;
        }
        var d2 = new Date(Date.now() + 365 * 86400000);
        lsSet(UNTIL_KEY, d2.toISOString());
        return d2;
    }

    function setUntilForPlan(plan) {
        var days = plan === 'year' ? 365 : 30;
        var d = new Date(Date.now() + days * 86400000);
        lsSet(UNTIL_KEY, d.toISOString());
        return d;
    }

    function formatDate(d) {
        var locales = { ru: 'ru-RU', en: 'en-GB', ar: 'ar-EG' };
        try {
            return new Intl.DateTimeFormat(locales[lang()] || 'ru-RU', {
                day: 'numeric', month: 'long', year: 'numeric'
            }).format(d);
        } catch (e) {
            return d.toLocaleDateString();
        }
    }

    function planLabel(plan) {
        return plan === 'year'
            ? t('premium.plan2.name', null, '12 месяцев') + ' · ' + t('premium.plan2.price', null, '1799 ₽')
            : t('premium.plan1.name', null, '1 месяц') + ' · ' + t('premium.plan1.price', null, '199 ₽');
    }

    function $(id) { return document.getElementById(id); }

    /* ---------- Переключение секции ---------- */
    function open() {
        if (typeof window.showPage === 'function') window.showPage('premium-page');
        document.title = t('page.premiumTitle', null, 'AMANAH — Премиум');
        try { window.history.replaceState(null, '', 'settings.html?premium=1'); } catch (e) {}
        render();
    }

    function close() {
        if (typeof window.showPage === 'function') window.showPage('settings-page');
        document.title = t('page.settingsTitle', null, 'AMANAH — Настройки');
        try { window.history.replaceState(null, '', 'settings.html'); } catch (e) {}
    }

    /* ---------- Тарифы ---------- */
    function selectPlan(plan) {
        selectedPlan = plan === 'month' ? 'month' : 'year';
        ['month', 'year'].forEach(function (p) {
            var el = $('premium-plan-' + p);
            if (!el) return;
            el.classList.toggle('is-selected', p === selectedPlan);
            el.setAttribute('aria-pressed', p === selectedPlan ? 'true' : 'false');
        });
    }

    /* ---------- Модалка-заглушка оплаты ---------- */
    function openPay() {
        var planEl = $('premium-pay-plan');
        if (planEl) planEl.textContent = t('premium.payPlan', { plan: planLabel(selectedPlan) },
            'Тариф: ' + planLabel(selectedPlan));
        var m = $('premium-pay-modal');
        if (m) m.classList.add('active');
    }

    function closePay() {
        var m = $('premium-pay-modal');
        if (m) m.classList.remove('active');
    }

    /* ---------- Демо-переключатель ---------- */
    function toggleDemo() {
        var on = !demoEnabled();
        if (on) {
            lsSet(DEMO_KEY, 'true');
            setUntilForPlan(selectedPlan);
        } else {
            lsSet(DEMO_KEY, 'false');
        }
        render();
        document.dispatchEvent(new CustomEvent('amanah:premiumchange'));
        if (typeof window.showToast === 'function') {
            window.showToast(on ? t('premium.activeTitle', null, 'Премиум активен')
                : t('premium.demoOn', null, 'Премиум выключен'), on ? 'success' : 'error');
        }
    }

    /* ---------- Возврат к материалу, с которого пришли ---------- */
    function targetLink() {
        var raw = null;
        try { raw = window.sessionStorage.getItem(TARGET_KEY); } catch (e) {}
        if (!raw) return null;
        try {
            var target = JSON.parse(raw);
            if (target && target.type === 'book' && target.id != null) {
                return 'catalog.html?book=' + encodeURIComponent(target.parent) +
                    '&lesson=' + encodeURIComponent(target.id) + '&from=profile';
            }
            if (target && target.type === 'sira') return 'sira.html';
        } catch (e) {}
        return null;
    }

    /* ---------- Отрисовка экрана ---------- */
    function renderScreen() {
        var active = hasPro();
        var actions = $('premium-actions');
        var status = $('premium-status');
        var guest = $('premium-guest');

        if (actions) actions.hidden = active;
        if (status) {
            status.hidden = !active;
            var until = $('premium-active-until');
            if (until) until.textContent = t('premium.activeUntil', { date: formatDate(ensureUntil()) },
                'У вас активна подписка до ' + formatDate(ensureUntil()));
        }
        if (guest) guest.hidden = active || !isGuest() || !$('premium-page');

        var demoBtn = $('premium-demo-btn');
        if (demoBtn) demoBtn.textContent = demoEnabled()
            ? t('premium.demoOff', null, 'Выключить Премиум')
            : t('premium.demoOn', null, 'Включить Премиум');

        var back = $('premium-return');
        if (back) {
            var link = targetLink();
            back.hidden = !link;
            back.textContent = t('premium.returnToLesson', null, 'Вернуться к материалу');
        }
        selectPlan(selectedPlan);
    }

    /* ---------- Отрисовка баннера в профиле ---------- */
    function renderBanner() {
        var banner = $('premium-banner');
        if (!banner) return;
        var active = hasPro();
        banner.classList.toggle('is-active', active);

        var title = $('premium-banner-title');
        var desc = $('premium-banner-desc');
        var cta = $('premium-banner-cta');
        if (active) {
            var date = formatDate(ensureUntil());
            if (title) title.textContent = t('premium.activeTitle', null, 'Премиум активен');
            if (desc) desc.textContent = t('profile.premium.active', { date: date },
                'Премиум активен до ' + date);
            if (cta) cta.textContent = t('premium.activeDesc', null, 'Все разделы открыты');
            banner.setAttribute('href', 'settings.html?premium=1');
        } else {
            if (title) title.textContent = t('profile.premium.title', null, 'Откройте весь AMANAH');
            if (desc) desc.textContent = t('profile.premium.desc', null,
                '25 точек Сиры, все книги, аудио и ответы учёных.');
            if (cta) cta.textContent = t('profile.premium.cta', null, 'Узнать о Премиум');
            banner.setAttribute('href', 'settings.html?premium=1');
        }
    }

    function render() {
        if ($('premium-page')) renderScreen();
        if ($('premium-banner')) renderBanner();
    }

    /* ---------- Привязка ---------- */
    function bind() {
        ['month', 'year'].forEach(function (p) {
            var el = $('premium-plan-' + p);
            if (el) el.addEventListener('click', function () { selectPlan(p); });
        });

        var cta = $('premium-cta');
        if (cta) cta.addEventListener('click', openPay);

        var payClose = $('premium-pay-ok');
        if (payClose) payClose.addEventListener('click', closePay);

        var payModal = $('premium-pay-modal');
        if (payModal) {
            payModal.addEventListener('click', function (e) { if (e.target === payModal) closePay(); });
        }

        var demoBtn = $('premium-demo-btn');
        if (demoBtn) demoBtn.addEventListener('click', toggleDemo);

        var guestLogin = $('premium-guest-login');
        if (guestLogin) guestLogin.addEventListener('click', function () {
            if (typeof window.openAuthModal === 'function' && $('auth-modal')) {
                window.openAuthModal();
            } else {
                window.location.href = 'profile.html?auth=1';
            }
        });

        var back = $('premium-return');
        if (back) back.addEventListener('click', function () {
            var link = targetLink();
            if (link) {
                try { window.sessionStorage.removeItem(TARGET_KEY); } catch (e) {}
                window.location.href = link;
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closePay();
        });
        document.addEventListener('amanah:languagechange', render);
        document.addEventListener('amanah:authchange', render);
        document.addEventListener('amanah:premiumchange', render);
    }

    function init() {
        bind();
        render();

        // Прямая ссылка на экран Премиум (из карты Сиры / закрытых книг / баннера)
        var params = new URLSearchParams(window.location.search);
        if ((params.get('premium') === '1' || window.location.hash === '#premium') && $('premium-page')) {
            open();
        }
    }

    window.Premium = {
        open: open,
        close: close,
        render: render,
        hasPro: hasPro,
        openPay: openPay,
        closePay: closePay,
        until: function () { return formatDate(ensureUntil()); }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})(window, document);
