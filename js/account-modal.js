/* ============================================================
   AccountModal — переиспользуемая модалка «Мой аккаунт».
   Ранее разметка была продублирована внутри settings.html.
   Компонент сам встраивается в любую страницу, поэтому его
   можно открыть и из настроек, и из шапки профиля.
   Вся бизнес-логика (сохранение имени/почты/пароля, вход,
   выход, переключение пароля) остаётся в js/app.js.
   ============================================================ */
(function (window, document) {
    'use strict';

    var MODAL_ID = 'account-settings-modal';
    var root = null;

    var EYE_OFF = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
    var EYE_ON = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-on" style="display: none;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';

    function eye(inputId) {
        return '<span class="password-toggle" onclick="togglePassword(\'' + inputId + '\', this)" role="button" tabindex="0" aria-label="Показать пароль" data-i18n-aria-label="auth.showPassword">' +
            EYE_OFF + EYE_ON + '</span>';
    }

    var HTML =
        '<div class="modal-overlay" id="' + MODAL_ID + '">' +
        '  <div class="modal-content modal-content--auth" role="dialog" aria-modal="true" aria-labelledby="account-modal-heading">' +
        '' +
        /* ---------- Гость: вход ---------- */
        '    <div id="settings-login-view">' +
        '      <h3 data-i18n="settings.account.login">Вход в аккаунт</h3>' +
        '      <p data-i18n="settings.account.loginDesc">Войдите, чтобы сохранять прогресс</p>' +
        '      <input class="form-input" type="email" id="set-login-email" placeholder="Почта (Email)" data-i18n-placeholder="auth.email">' +
        '      <div class="password-wrap">' +
        '        <input class="form-input" type="password" id="set-login-pass" placeholder="Пароль" data-i18n-placeholder="auth.password">' +
        eye('set-login-pass') +
        '      </div>' +
        '      <button class="modal-btn" onclick="loginFromSettings()" data-i18n="settings.account.loginBtn">Войти</button>' +
        '      <button class="modal-btn modal-btn--ghost" onclick="window.location.href=\'profile.html\'" data-i18n="settings.account.register">Зарегистрироваться</button>' +
        '      <button class="modal-btn modal-btn--muted" onclick="AccountModal.close()" data-i18n="common.cancel">Отмена</button>' +
        '    </div>' +
        '' +
        /* ---------- Пользователь: Мой аккаунт ---------- */
        '    <div id="settings-account-view" style="display: none;">' +
        '      <h3 id="account-modal-heading" data-i18n="settings.account.title">Мой аккаунт</h3>' +

        '      <div class="form-card">' +
        '        <label class="form-label" data-i18n="settings.account.userName">Имя пользователя</label>' +
        '        <span id="set-user-name-display" class="account-value">Не задано</span>' +
        '        <input class="form-input" type="text" id="set-new-name" placeholder="Введите новое имя" data-i18n-placeholder="settings.account.newName">' +
        '        <button class="modal-btn modal-btn--gold" onclick="saveNewName()" data-i18n="settings.account.saveName">Сохранить имя</button>' +
        '      </div>' +

        '      <div class="form-card">' +
        '        <label class="form-label" data-i18n="settings.account.email">Электронная почта</label>' +
        '        <span id="set-user-email" class="account-value">email</span>' +
        '        <input class="form-input" type="email" id="set-new-email" placeholder="Новая почта" data-i18n-placeholder="settings.account.newEmail">' +
        '        <div class="password-wrap">' +
        '          <input class="form-input" type="password" id="set-email-pass" placeholder="Текущий пароль" data-i18n-placeholder="settings.account.currentPass">' +
        eye('set-email-pass') +
        '        </div>' +
        '        <button class="modal-btn modal-btn--gold" onclick="saveNewEmail()" data-i18n="settings.account.changeEmail">Изменить почту</button>' +
        '      </div>' +

        '      <div class="form-card">' +
        '        <label class="form-label" data-i18n="settings.account.password">Пароль</label>' +
        '        <span class="account-value">********</span>' +
        '        <div class="password-wrap">' +
        '          <input class="form-input" type="password" id="set-old-pass" placeholder="Текущий пароль" data-i18n-placeholder="settings.account.currentPass">' +
        eye('set-old-pass') +
        '        </div>' +
        '        <div class="password-wrap">' +
        '          <input class="form-input" type="password" id="set-new-pass" placeholder="Новый пароль (мин. 6 симв.)" data-i18n-placeholder="settings.account.newPass">' +
        eye('set-new-pass') +
        '        </div>' +
        '        <button class="modal-btn modal-btn--gold" onclick="saveNewPass()" data-i18n="settings.account.changePass">Изменить пароль</button>' +
        '      </div>' +

        '      <button class="modal-btn modal-btn--danger" onclick="logout()" data-i18n="settings.account.logout">Выйти из аккаунта</button>' +
        '      <button class="modal-btn modal-btn--muted" style="margin-top: 10px;" onclick="AccountModal.close()" data-i18n="common.close">Закрыть</button>' +
        '    </div>' +
        '  </div>' +
        '</div>';

    function mount() {
        if (root && document.getElementById(MODAL_ID) === root) return root;
        var existing = document.getElementById(MODAL_ID);
        if (existing) { root = existing; }
        else {
            var wrap = document.createElement('div');
            wrap.innerHTML = HTML;
            root = wrap.firstElementChild;
            document.body.appendChild(root);
        }

        // Свежевставленная разметка не попала под первый проход translations.js
        if (window.I18N && typeof window.I18N.apply === 'function') {
            window.I18N.apply(root);
        }

        // Клик по затемнению (вне карточки) закрывает модалку
        root.addEventListener('click', function (e) {
            if (e.target === root) close();
        });

        // Глазок пароля доступен и с клавиатуры
        root.querySelectorAll('.password-toggle').forEach(function (el) {
            el.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    el.click();
                }
            });
        });

        // Иконка профиля в шапке — открытие по Enter / Space
        var trigger = document.getElementById('profile-account-trigger');
        if (trigger) {
            trigger.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    open();
                }
            });
        }
        return root;
    }

    function open() {
        mount();
        // Переиспользуем существующую логику из app.js: выбор вида,
        // подстановка имени/почты и обновление данных в фоне.
        if (typeof window.openAccountSettings === 'function') {
            window.openAccountSettings();
        } else {
            root.classList.add('active');
        }
    }

    function close() {
        var m = document.getElementById(MODAL_ID);
        if (m) m.classList.remove('active');
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') close();
    });

    // Страховка: если браузер держит закешированную старую версию app.js
    // (в ней ещё не было logout()), кнопка «Выйти из аккаунта» всё равно работает.
    if (typeof window.logout !== 'function') {
        window.logout = function () {
            if (typeof window.logoutFromSettings === 'function') return window.logoutFromSettings();
            if (typeof window.refreshUiAfterSync === 'function') window.refreshUiAfterSync();
        };
    }

    window.AccountModal = {
        open: open,
        close: close,
        mount: mount,
        isOpen: function () {
            var m = document.getElementById(MODAL_ID);
            return !!m && m.classList.contains('active');
        }
    };

    // defer-скрипты выполняются после парсинга DOM — встраиваемся сразу,
    // чтобы openAccountSettings() из настроек находил разметку в любой момент.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mount);
    } else {
        mount();
    }
})(window, document);
