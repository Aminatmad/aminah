/* ============================================================
   AMANAH · экран «О приложении» (Настройки)
   Открытие/закрытие секции через showPage() из js/app.js.
   Весь текст локализован ключами data-i18n в js/translations.js.
   ============================================================ */
(function (window, document) {
    'use strict';

    function t(key, fallback) {
        return (typeof window.T === 'function') ? window.T(key, null, fallback) : fallback;
    }

    function open() {
        if (typeof window.showPage === 'function') window.showPage('about-page');
        document.title = t('page.aboutTitle', 'AMANAH — О приложении');
        try { window.history.replaceState(null, '', 'settings.html?about=1'); } catch (e) {}
    }

    function close() {
        if (typeof window.showPage === 'function') window.showPage('settings-page');
        document.title = t('page.settingsTitle', 'AMANAH — Настройки');
        try { window.history.replaceState(null, '', 'settings.html'); } catch (e) {}
    }

    function init() {
        var params = new URLSearchParams(window.location.search);
        if (params.get('about') === '1' && document.getElementById('about-page')) open();

        // I18N.apply() уже обновил data-i18n; здесь только заголовок вкладки
        document.addEventListener('amanah:languagechange', function () {
            var page = document.getElementById('about-page');
            if (page && page.classList.contains('active')) {
                document.title = t('page.aboutTitle', 'AMANAH — О приложении');
            }
        });
    }

    window.About = { open: open, close: close };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})(window, document);
