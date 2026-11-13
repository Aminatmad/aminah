// ===== НАСТРОЙКА FIREBASE =====
const firebaseConfig = {
  apiKey: "AIzaSyBIJ_vYodBTHob1fdqT4DvkRyEepsrhdDE",
  authDomain: "amanah-f1d36.firebaseapp.com",
  projectId: "amanah-f1d36",
  storageBucket: "amanah-f1d36.firebasestorage.app",
  messagingSenderId: "22483051323",
  appId: "1:22483051323:web:d61bd32e5002cc4e5e8d1e",
  measurementId: "G-M088TFP53N"
};

const FIREBASE_VERSION = '8.10.1';

let auth = null;
let db = null;            // появляется после ensureDb() (Firestore грузится лениво)
let currentUser = null;

// Firebase восстанавливает вход асинхронно. Пока authReady === false,
// мы НЕ знаем, гость это или вошедший пользователь (поэтому раньше и
// мелькало «Войти в аккаунт» у авторизованных).
let authReady = false;
let resolveAuthReady = null;
const authReadyPromise = new Promise((resolve) => { resolveAuthReady = resolve; });

// true, когда документ users/{uid} получен хотя бы один раз (из кэша или с сервера)
let cloudReady = false;

function markAuthReady() {
    if (authReady) return;
    authReady = true;
    if (resolveAuthReady) resolveAuthReady();
    // Страницы (например «Настройки») обновляют карточки сразу, без таймеров.
    document.dispatchEvent(new CustomEvent('amanah:authchange'));
}

// ===== Безопасные обёртки над localStorage (в PWA/приватном режиме он может падать) =====
function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }

// ===== i18n / тема =====
// T() — безопасная обёртка: если translations.js ещё не загрузился, вернёт fallback.
function T(key, vars, fallback) {
    if (window.I18N && typeof window.I18N.t === 'function') {
        return window.I18N.t(key, vars, fallback);
    }
    return fallback != null ? fallback : key;
}

// L() — выбор текста контента из data.js по текущему языку.
// Принимает либо обычную строку (ещё не переведённый текст), либо
// объект { ru: "...", en: "...", ar: "..." }. Непереведённые строки
// остаются русскими — это позволяет переводить материалы постепенно.
function currentContentLang() {
    if (window.I18N && typeof window.I18N.getLang === 'function') {
        return window.I18N.getLang();
    }
    try { return localStorage.getItem('amanah_lang') || 'ru'; } catch (e) { return 'ru'; }
}

function L(value) {
    if (value == null) return '';
    const lang = currentContentLang();
    if (typeof value === 'object') {
        return value[lang] || value.ru || value.en || Object.values(value)[0] || '';
    }
    const str = String(value);
    // Массовый словарь переводов контента из data.js (ключ — русская строка).
    // Если перевода ещё нет, строка остаётся русской — переводим постепенно.
    if (lang !== 'ru' && typeof CONTENT_I18N !== 'undefined') {
        const tr = CONTENT_I18N[str];
        if (tr) return tr[lang] || tr.ru || str;
    }
    return str;
}
window.L = L;

/* ============================================================
   Арабские фразы внутри уроков: RU / EN / AR.
   RU  — арабский + транскрипция + перевод (как есть в data.js)
   EN  — арабский + латинская транскрипция + английский перевод
   AR  — только арабский текст (транскрипция и перевод убираются)
   Работает и с обычными блоками .arabic-text, и с таблицами
   .prayer-table (азан / икама в уроке «Рождение ребёнка»).
   Функция идемпотентна: меняет только русский текст.
   ============================================================ */
const ARABIC_LABELS = {
    'Азан':            { en: 'Adhan',            ar: 'الأذان' },
    'Икама':           { en: 'Iqamah',           ar: 'الإقامة' },
    'Транскрипция':    { en: 'Transliteration',  ar: null },
    'Перевод':         { en: 'Translation',      ar: null },
    'На арабском':     { en: 'In Arabic',        ar: null },
    'Арабский текст':  { en: 'Arabic text',      ar: 'النص العربي' }
};

function localizeArabicHtml(html, lang) {
    if (!html || lang === 'ru') return html || '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const body = doc.body;
    const hasRu = (el) => !!el && /[А-Яа-яЁё]/.test(el.textContent || '');
    const phrases = (typeof arabicPhrases !== 'undefined') ? arabicPhrases : {};
    const labelKey = (el) => (el && el.tagName === 'P')
        ? el.textContent.trim().replace(/[:\s]+$/, '') : '';
    const isLabel = (el) => Object.prototype.hasOwnProperty.call(ARABIC_LABELS, labelKey(el));

    // 1) Таблицы: № | Арабский текст | Транскрипция | Перевод
    body.querySelectorAll('table.prayer-table tr').forEach(tr => {
        const cells = Array.from(tr.querySelectorAll('th, td'));
        if (cells.length !== 4) return;
        if (lang === 'ar') {
            if (cells[2].tagName === 'TH' || hasRu(cells[2]) || hasRu(cells[3])) {
                cells[3].remove();
                cells[2].remove();
            }
            if (hasRu(cells[1])) cells[1].textContent = ARABIC_LABELS['Арабский текст'].ar;
        } else if (lang === 'en') {
            if (cells[0].tagName === 'TH') {
                cells[1].textContent = 'Arabic text';
                cells[2].textContent = 'Transliteration';
                cells[3].textContent = 'Translation';
            } else {
                const phrase = phrases[(cells[1].textContent || '').trim()];
                if (phrase && (hasRu(cells[2]) || hasRu(cells[3]))) {
                    cells[2].textContent = phrase.translit;
                    cells[3].textContent = phrase.translate;
                }
            }
        }
    });

    // 2) Блоки .arabic-text + соседние транскрипция / перевод
    body.querySelectorAll('div.arabic-text').forEach(ar => {
        const phrase = phrases[(ar.textContent || '').trim()];
        let node = ar.nextElementSibling;
        let steps = 0;
        while (node && steps < 6) {
            const next = node.nextElementSibling;
            if (node.classList.contains('arabic-text')) break;
            if (node.tagName === 'P' && !isLabel(node)) break;

            if (node.classList.contains('transliteration')) {
                if (lang === 'ar') node.remove();
                else if (phrase && hasRu(node)) node.textContent = phrase.translit;
            } else if (node.classList.contains('translation')) {
                if (lang === 'ar') node.remove();
                else if (phrase && hasRu(node)) node.textContent = phrase.translate;
            }
            node = next;
            steps++;
        }
    });

    // 3) Подписи: «Транскрипция:», «Перевод:», «На арабском:», «Азан», «Икама»
    body.querySelectorAll('p').forEach(p => {
        const key = labelKey(p);
        if (!Object.prototype.hasOwnProperty.call(ARABIC_LABELS, key)) return;
        const value = ARABIC_LABELS[key][lang];
        if (!value) { p.remove(); return; }
        const colon = p.textContent.trim().endsWith(':') ? ':' : '';
        p.textContent = value + colon;
    });

    return body.innerHTML;
}

function getTheme() {
    return lsGet('amanah_theme') === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme) {
    const next = theme === 'dark' ? 'dark' : 'light';
    const root = document.documentElement;
    if (next === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    lsSet('amanah_theme', next);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#0f1913' : '#f5f3ec');

    document.dispatchEvent(new CustomEvent('amanah:themechange', { detail: { theme: next } }));
}

function toggleTheme() {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

function isDarkTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
}

function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== ЛЕНИВАЯ ЗАГРУЗКА FIRESTORE =====
// Гостям Firestore не нужен (прогресс и PRO только для аккаунтов), поэтому его SDK
// (самый тяжёлый из трёх) скачивается только когда пользователь вошёл.
// Если на странице тег firebase-firestore.js уже есть — он просто используется.
let dbPromise = null;

function loadScriptOnce(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        s.onerror = () => reject(new Error('Не удалось загрузить ' + src));
        document.head.appendChild(s);
    });
}

function ensureDb() {
    if (db) return Promise.resolve(db);
    if (dbPromise) return dbPromise;

    dbPromise = (async () => {
        await ensureFirebase();
        if (typeof firebase === 'undefined') throw new Error('Firebase не загружен');
        if (!firebase.firestore) {
            await loadScriptOnce(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore.js`);
        }
        const instance = firebase.firestore();
        // Офлайн-кэш: данные открываются мгновенно, записи не теряются без интернета
        try {
            await instance.enablePersistence({ synchronizeTabs: true });
        } catch (err) {
            console.warn("Кэш Firestore не включен:", err && err.code);
        }
        db = instance;
        return db;
    })().catch((err) => {
        dbPromise = null; // позволяем повторить попытку позже
        throw err;
    });

    return dbPromise;
}

// ===== АВТОРИЗАЦИЯ: СОСТОЯНИЕ ВХОДА =====
// SDK Firebase загружается в ФОНЕ и больше не блокирует первую отрисовку.
// Интерфейс рисуется сразу; вход восстанавливается, когда SDK будет готов.
let firebasePromise = null;

function setupAuthListener() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            currentUser = user;
            lsSet('amanah_last_uid', user.uid);
            lsDel('pendingEmailChange');
            lsDel('pendingPassword');

            // Не блокирует интерфейс: прогресс/PRO подтягиваются в фоне
            startCloudSync(user);

            const accountView = document.getElementById('settings-account-view');
            if (accountView && accountView.style.display === 'block') {
                const emailEl = document.getElementById('set-user-email');
                const nameEl = document.getElementById('set-user-name-display');
                if (emailEl) emailEl.innerText = user.email;
                if (nameEl) nameEl.innerText = user.displayName || T('settings.account.notSet');
            }
        } else {
            currentUser = null;
            stopCloudSync();

            lsDel('amanah_pro');
            lsDel('amanah_progress_guest');

            const pendingEmail = lsGet('pendingEmailChange');
            const pendingPass = lsGet('pendingPassword');

            if (pendingEmail && pendingPass) {
                auth.signInWithEmailAndPassword(pendingEmail, pendingPass)
                    .then(() => {
                        lsDel('pendingEmailChange');
                        lsDel('pendingPassword');
                        showToast(T('auth.emailConfirmed'), 'success');
                    })
                    .catch((err) => {
                        console.error("Не удалось автоматически войти:", err);
                        lsDel('pendingEmailChange');
                        lsDel('pendingPassword');
                        markAuthReady();
                        refreshUiAfterSync();
                    });
                return;
            }

            lsDel('amanah_last_uid');
            markAuthReady();
            refreshUiAfterSync();
        }
    });

    // Страховка: если SDK не ответил, не оставляем интерфейс в «ожидании»
    setTimeout(() => {
        if (!authReady) {
            markAuthReady();
            refreshUiAfterSync();
        }
    }, 2500);
}

function ensureFirebase() {
    if (auth) return Promise.resolve(auth);
    if (firebasePromise) return firebasePromise;

    firebasePromise = (async () => {
        if (typeof firebase === 'undefined' || !firebase.initializeApp) {
            await loadScriptOnce(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js`);
        }
        if (typeof firebase === 'undefined' || !firebase.auth) {
            await loadScriptOnce(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-auth.js`);
        }
        if (!firebase.apps || !firebase.apps.length) firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        setupAuthListener();
        return auth;
    })().catch((err) => {
        console.warn('Firebase недоступен — работаем как гость:', err);
        markAuthReady();
        refreshUiAfterSync();
        firebasePromise = null;
        throw err;
    });

    return firebasePromise;
}

// Выполнить действие, когда Firebase готов. Не блокирует интерфейс.
function withFirebase(fn) {
    if (auth) { fn(); return; }
    ensureFirebase().then(fn).catch(() => showToast(T('auth.firebaseError'), 'error'));
}

// Стартуем загрузку сразу, но НЕ ждём её.
ensureFirebase().catch(() => {});

const sectionOrders = {
    'islam-start-page': [1,2,3,4,5,6,7,8,9,10,11,12,13],
    'family-page':      [14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
    'birth-page':       [41,42,43,44,45,46,47,48,49,50,51,52,53],
    'loss-page':        [54,55,56,57]
};

let currentLessonId = 1;
let currentSectionId = 'islam-start-page';
let currentBookId = null;
let lessonType = 'old';
let parentId = null;
let autoSaveTimer = null;

let currentTopicId = null;
let currentCatalogSectionId = null;
let pendingAutoSave = null;

// ===== ЛОГИКА ПРОГРЕССА И PRO =====
// Источник правды — аккаунт в Firebase (Firestore: users/{uid}).
//   users/{uid}.progress = { [bookId]: { done: [lessonId,...], last: lessonId, ts: <ms> } }
//   users/{uid}.isPro    = true/false
// localStorage — только быстрый кэш на этом устройстве (и офлайн-режим).
// Гость прогресс НЕ сохраняет и НЕ читает.

// uid, по которому читаем локальный кэш. Пока Firebase не восстановил вход,
// используем последний известный uid, чтобы интерфейс не мигал.
function getActiveUid() {
    if (currentUser) return currentUser.uid;
    if (!authReady) return lsGet('amanah_last_uid');
    return null;
}

function readLocalProgress(uid) {
    if (!uid) return {};
    try {
        const raw = lsGet(`amanah_progress_${uid}`);
        const parsed = raw ? JSON.parse(raw) : {};
        return (parsed && typeof parsed === 'object') ? parsed : {};
    } catch (e) {
        return {};
    }
}

function writeLocalProgress(uid, data) {
    if (!uid) return;
    lsSet(`amanah_progress_${uid}`, JSON.stringify(data || {}));
}

function getProgress() {
    return readLocalProgress(getActiveUid());
}

// Объединение прогресса: пройденные уроки — объединение множеств (ничего не теряется
// при работе с двух устройств), «последний урок» — от более свежей записи.
function mergeProgress(a, b) {
    const out = {};
    const keys = new Set([...Object.keys(a || {}), ...Object.keys(b || {})]);
    keys.forEach((k) => {
        const x = (a && a[k]) || {};
        const y = (b && b[k]) || {};
        const done = Array.from(new Set([...(x.done || []), ...(y.done || [])]));
        const tx = x.ts || 0;
        const ty = y.ts || 0;
        const newer = tx >= ty ? x : y;
        const older = tx >= ty ? y : x;
        let last = newer.last != null ? newer.last : (older.last != null ? older.last : null);
        out[k] = { done: done, last: last, ts: Math.max(tx, ty) };
    });
    return out;
}

function sameProgress(a, b) {
    const ka = Object.keys(a || {});
    const kb = Object.keys(b || {});
    if (ka.length !== kb.length) return false;
    return ka.every((k) => {
        const x = a[k] || {};
        const y = b[k];
        if (!y) return false;
        return (x.done || []).length === (y.done || []).length &&
               (x.last === y.last || (x.last == null && y.last == null)) &&
               (x.ts || 0) === (y.ts || 0);
    });
}

// Запись прогресса: мгновенно в локальный кэш, в облако — в фоне (с задержкой)
function recordProgress(key, ids, lastId) {
    if (!currentUser) return false;
    const uid = currentUser.uid;
    const progress = readLocalProgress(uid);
    const entry = progress[key] || { done: [], last: null, ts: 0 };
    if (!Array.isArray(entry.done)) entry.done = [];

    let changed = false;
    ids.forEach((id) => {
        if (!entry.done.includes(id)) { entry.done.push(id); changed = true; }
    });
    if (entry.last !== lastId) { entry.last = lastId; changed = true; }

    if (changed) {
        entry.ts = Date.now();
        progress[key] = entry;
        writeLocalProgress(uid, progress);
        scheduleCloudSync();
    }
    return changed;
}

// ----- Отправка в облако (в фоне, без await в интерфейсе) -----
let cloudTimer = null;
let cloudDirty = false;

function dirtyKey(uid) { return `amanah_progress_dirty_${uid}`; }

function scheduleCloudSync(delay = 1200) {
    if (!currentUser) return;
    cloudDirty = true;
    lsSet(dirtyKey(currentUser.uid), '1');
    if (cloudTimer) clearTimeout(cloudTimer);
    cloudTimer = setTimeout(() => { flushCloudSync(false); }, delay);
}

async function flushCloudSync(immediate) {
    if (cloudTimer) { clearTimeout(cloudTimer); cloudTimer = null; }
    if (!currentUser || !cloudDirty) return;
    const user = currentUser;

    try {
        // Не пишем «вслепую» до первой загрузки данных из облака (до 4 сек),
        // кроме момента закрытия вкладки — тогда пишем сразу.
        if (!immediate && !cloudReady) await whenAccountKnown(1500);
        if (!currentUser || currentUser.uid !== user.uid) return;

        const _db = await ensureDb();
        cloudDirty = false;

        const local = readLocalProgress(user.uid);
        const payload = {};
        Object.keys(local).forEach((k) => {
            const e = local[k] || {};
            const item = { last: e.last == null ? null : e.last, ts: e.ts || 0 };
            // arrayUnion — «добавить недостающее»: два устройства не затрут друг друга
            if (Array.isArray(e.done) && e.done.length > 0) {
                item.done = firebase.firestore.FieldValue.arrayUnion(...e.done);
            }
            payload[k] = item;
        });

        await _db.collection('users').doc(user.uid).set(
            { progress: payload, updatedAt: firebase.firestore.FieldValue.serverTimestamp() },
            { merge: true }
        );
        lsDel(dirtyKey(user.uid));
    } catch (err) {
        console.error("Ошибка сохранения в облако:", err);
        cloudDirty = true; // останется флаг в localStorage — досинхронизируем позже
        if (!immediate) {
            if (cloudTimer) clearTimeout(cloudTimer);
            cloudTimer = setTimeout(() => { flushCloudSync(false); }, 15000);
        }
    }
}

// ----- Получение из облака в реальном времени (ПК <-> телефон) -----
let cloudUnsub = null;
let syncedUid = null;

function startCloudSync(user) {
    if (syncedUid === user.uid) return;
    stopCloudSync();
    syncedUid = user.uid;
    cloudReady = false;

    // Сразу показываем локальный кэш — облако подтянется в фоне
    markAuthReady();
    refreshUiAfterSync();

    ensureDb().then((_db) => {
        if (!currentUser || currentUser.uid !== user.uid) return;
        cloudUnsub = _db.collection('users').doc(user.uid).onSnapshot(
            (doc) => applyCloudDoc(user.uid, doc),
            (err) => {
                console.error("Ошибка чтения из облака:", err);
                cloudReady = true;          // не вешаем интерфейс «в ожидании»
                refreshUiAfterSync();
            }
        );
    }).catch((err) => {
        console.error("Firestore недоступен:", err);
        cloudReady = true;
        refreshUiAfterSync();
    });
}

function stopCloudSync() {
    if (cloudUnsub) { try { cloudUnsub(); } catch (e) { /* ignore */ } cloudUnsub = null; }
    syncedUid = null;
    cloudReady = false;
}

function applyCloudDoc(uid, doc) {
    if (!currentUser || currentUser.uid !== uid) return;
    const data = doc.exists ? (doc.data() || {}) : {};

    // PRO: статус аккаунта лежит в облаке, локально — только копия
    if (data.isPro === true) lsSet(`amanah_pro_${uid}`, 'true');
    else lsDel(`amanah_pro_${uid}`);

    // Прогресс: сливаем облако и локальный кэш (ничего не теряем)
    const cloudProgress = (data.progress && typeof data.progress === 'object') ? data.progress : {};
    const local = readLocalProgress(uid);
    const merged = mergeProgress(local, cloudProgress);
    if (!sameProgress(merged, local)) writeLocalProgress(uid, merged);

    // Старый глобальный флаг -> флаг для этого аккаунта
    if (lsGet('amanah_progress_dirty') === '1') {
        lsDel('amanah_progress_dirty');
        lsSet(dirtyKey(uid), '1');
    }

    const firstTime = !cloudReady;
    cloudReady = true;

    // В облаке чего-то не хватает (работали офлайн / с другого устройства)? Досинхронизируем
    if (!sameProgress(merged, cloudProgress) || lsGet(dirtyKey(uid)) === '1') {
        cloudDirty = true;
        scheduleCloudSync(firstTime ? 300 : 1200);
    }

    refreshUiAfterSync();
}

// Ждём, пока станет известно, вошёл ли пользователь и получен ли его PRO-статус
function whenAccountKnown(timeoutMs = 1500) {
    return new Promise((resolve) => {
        const t0 = Date.now();
        (function check() {
            if (authReady && (!currentUser || cloudReady)) return resolve(true);
            if (Date.now() - t0 >= timeoutMs) return resolve(false);
            setTimeout(check, 16);   // один кадр вместо 100 мс — без «ступенек» в UI
        })();
    });
}

// Перерисовать то, что зависит от входа / PRO / прогресса
function refreshUiAfterSync() {
    try {
        if (typeof renderProfile === 'function') renderProfile();

        const bookPage = document.getElementById('book-page');
        if (bookPage && bookPage.classList.contains('active') && currentBookId) {
            openBook(currentBookId, true);
        }
        const contentPage = document.getElementById('content-page');
        if (contentPage && contentPage.classList.contains('active') && currentTopicId != null) {
            openTopic(currentTopicId, true);
        }
        const proModal = document.getElementById('pro-modal');
        if (proModal && proModal.classList.contains('active')) renderProModal();
    } catch (e) {
        console.error("refreshUiAfterSync:", e);
    }
}

// ===== PRO =====
// Статус хранится в Firestore (users/{uid}.isPro); локальная копия — для скорости/офлайна.
function isPro() {
    const uid = getActiveUid();
    if (!uid) return false;
    return lsGet(`amanah_pro_${uid}`) === 'true';
}

let proTarget = null; // что открыть после «Продолжить»: { type, parent, id }

async function activatePro() {
    // Если вход ещё восстанавливается — короткая проверка, без ожидания сети
    if (!authReady) await whenAccountKnown(1200);

    if (!currentUser) {
        showToast(T('pro.loginToActivate'), 'error');
        closeProModal();
        if (typeof openAuthModal === 'function') openAuthModal();
        return;
    }

    const uid = currentUser.uid;
    lsSet(`amanah_pro_${uid}`, 'true');   // мгновенно для интерфейса
    closeProModal();
    showToast(T('pro.activated'), 'success');
    continueAfterPro();

    // Запись в облако — в фоне; при офлайне Firestore сам доставит позже
    ensureDb().then((_db) =>
        _db.collection('users').doc(uid).set(
            { isPro: true, proActivatedAt: firebase.firestore.FieldValue.serverTimestamp() },
            { merge: true }
        )
    ).catch((err) => {
        console.error("Ошибка сохранения PRO:", err);
        lsDel(`amanah_pro_${uid}`);
        showToast(T('pro.saveError'), 'error');
        refreshUiAfterSync();
    });
}

function continueAfterPro() {
    const target = proTarget;
    proTarget = null;

    if (target && target.type) {
        openLesson(target.type, target.parent, target.id);
        return;
    }
    // Запасной вариант: параметры адреса или текущая книга
    const urlParams = new URLSearchParams(window.location.search);
    const bId = urlParams.get('book');
    const lId = urlParams.get('lesson');
    if (bId && lId) openLesson('book', bId, lId);
    else if (currentBookId) openBook(currentBookId);
}

// showProModal() можно вызывать без аргументов или с целью: showProModal('book', bookId, lessonId)
function showProModal(type, parent, id) {
    const modal = document.getElementById('pro-modal');
    if (!modal) return;

    proTarget = (type && parent != null && id != null) ? { type: type, parent: parent, id: id } : null;
    modal.classList.add('active');
    renderProModal();

    // Если вход/PRO ещё определяются — подождём и перерисуем кнопку
    if (!authReady || (currentUser && !cloudReady)) {
        whenAccountKnown(1500).then((ok) => {
            if (modal.classList.contains('active')) renderProModal(!ok);
        });
    }
}

// force = true: ждать больше нельзя (таймаут), показываем лучший из возможных вариантов
function renderProModal(force) {
    const modal = document.getElementById('pro-modal');
    if (!modal) return;
    const btn = modal.querySelector('.modal-btn');
    if (!btn) return;

    btn.disabled = false;
    btn.style.opacity = '';

    const known = authReady && (!currentUser || cloudReady);
    const hasUser = !!currentUser || (!authReady && !!getActiveUid());

    // 1) Уже есть PRO (в облаке или в кэше этого аккаунта) — «Продолжить»
    if (hasUser && isPro()) {
        btn.innerText = T('pro.continue');
        btn.onclick = () => { closeProModal(); continueAfterPro(); };
        return;
    }

    // 2) Статус аккаунта ещё определяется — не предлагаем «Войти» преждевременно
    if (!known && !force) {
        btn.innerText = T('pro.checking');
        btn.disabled = true;
        btn.style.opacity = '0.6';
        btn.onclick = null;
        return;
    }

    // 3) Точно гость
    if (!currentUser) {
        btn.innerText = T('pro.login');
        btn.onclick = () => {
            closeProModal();
            if (typeof openAuthModal === 'function') openAuthModal();
        };
        return;
    }

    // 4) Вошёл, PRO ещё нет
    btn.innerText = T('pro.activate');
    btn.onclick = activatePro;
}

function closeProModal() {
    const modal = document.getElementById('pro-modal');
    if (modal) modal.classList.remove('active');
}

function markLessonDone(bookId, lessonId) {
    if (!currentUser) return; // гость — не сохраняем
    recordProgress(bookId, [lessonId], lessonId);
}

// ===== ОТКРЫТИЕ КНИГ =====
function openBook(id, silent = false) {
    currentBookId = id;
    const book = booksData[id];
    if (!book) return;

    document.getElementById('book-title').innerText = L(book.title);
    document.getElementById('book-author').innerText = L(book.author);

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('from') === 'profile' || window.isFromProfile) {
        sessionStorage.setItem('amanah_from_profile', 'true');
    }

    const isFromProfile = sessionStorage.getItem('amanah_from_profile') === 'true';
    const backBtn = document.querySelector('#book-page .back-btn');

    if (backBtn) {
        if (isFromProfile) {
            backBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> <span>${T('common.backToProfile')}</span>`;
            backBtn.onclick = () => {
                sessionStorage.removeItem('amanah_from_profile');
                window.location.href = 'profile.html';
            };
        } else {
            backBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> <span>${T('common.backToKnowledge')}</span>`;
            backBtn.onclick = () => {
                sessionStorage.removeItem('amanah_from_profile');
                showPage('knowledge-page');
            };
        }
    }

    let html = `
        <p><strong>${T('catalog.about')}:</strong> ${L(book.desc)}</p>
        <div class="important-block">
            <strong>${T('catalog.benefits')}:</strong><br>
            ${L(book.benefits)}
        </div>
    `;
    document.getElementById('book-content').innerHTML = html;

    let lessonsHtml = '';
    let progress = getProgress()[id] || { done: [] };
    let proStatus = isPro();

    book.lessons.forEach((lesson, index) => {
        const isDone = progress.done.includes(lesson.id);
        const isLocked = lesson.isPro && !proStatus;

        let action = '';
        if (isLocked) action = `onclick="showProModal('book', ${id}, '${lesson.id}')"`;
        else action = `onclick="openLesson('book', ${id}, '${lesson.id}')"`;

        // Замок показываем ТОЛЬКО если урок Pro и Pro не куплен (п.4)
        const statusIcon = isLocked ? '🔒' : (isDone ? '✓' : '▶');

        lessonsHtml += `
            <div class="lesson-item" ${action}>
                <div class="lesson-item-info">
                    <h4>${index + 1}. ${L(lesson.title)}</h4>
                    <p>${L(lesson.desc)}</p>
                    ${lesson.isPro ? '<span class="lesson-badge badge-pro">PRO</span>' : '<span class="lesson-badge badge-free">FREE</span>'}
                </div>
                <div class="lesson-status ${isDone ? 'done' : ''}">
                    ${statusIcon}
                </div>
            </div>
        `;
    });

    const total = book.lessons.length;
    const doneCount = progress.done.filter(id => book.lessons.some(l => l.id === id)).length;
    const percent = total ? Math.round((doneCount / total) * 100) : 0;

    lessonsHtml = `
        <div class="progress-container" style="margin-bottom: 20px;">
            <div class="progress-bar" style="width: ${percent}%"></div>
        </div>
        <p style="font-size: 14px; margin-bottom: 15px; color: var(--text-muted-dark);">${T('common.completed', { done: doneCount, total: total, percent: percent })}</p>
    ` + lessonsHtml;

    document.getElementById('book-lessons-list').innerHTML = lessonsHtml;
    if (!silent) showPage('book-page');
}

// ===== ФУНКЦИИ ДЛЯ РАЗДЕЛОВ ЗНАНИЙ =====
function openSection(id) {
    const section = sectionsData[id];
    if (!section) return;

    currentCatalogSectionId = id;
    document.getElementById('section-title').innerText = L(section.title);
    document.getElementById('section-desc').innerText = L(section.desc);

    let topicsHtml = '';
    section.topics.forEach(topic => {
        topicsHtml += `
            <div class="square-card" onclick="openTopic(${topic.id})">
                <div class="square-icon">
                    <svg viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="20" stroke="#d4af37" stroke-width="2.5"/>
                        <path d="M32 20V44M20 32H44" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="square-title">${L(topic.title)}</div>
            </div>
        `;
    });

    document.getElementById('section-topics').innerHTML = topicsHtml;
    showPage('section-page');
}

function openTopic(topicId, silent = false) {
    const topic = findTopic(topicId);
    if (!topic) return;
    currentTopicId = topicId;

    document.getElementById('content-title').innerText = L(topic.title);
    document.getElementById('content-author').innerText = T('catalog.sectionFree');
    document.getElementById('content-body').innerHTML = "";

    let lessonsHtml = '';
    let progress = getProgress()[topicId] || { done: [] };

    topic.lessons.forEach((lesson, index) => {
        const isDone = progress.done.includes(lesson.id);

        lessonsHtml += `
            <div class="lesson-item" onclick="openLesson('topic', ${topicId}, '${lesson.id}')">
                <div class="lesson-item-info">
                    <h4>${index + 1}. ${L(lesson.title)}</h4>
                    <p>${L(lesson.desc)}</p>
                    <span class="lesson-badge badge-free">FREE</span>
                </div>
                <div class="lesson-status ${isDone ? 'done' : ''}">
                    ${isDone ? '✓' : '▶'}
                </div>
            </div>
        `;
    });

    const total = topic.lessons.length;
    const doneCount = progress.done.filter(id => topic.lessons.some(l => l.id === id)).length;
    const percent = total ? Math.round((doneCount / total) * 100) : 0;

    lessonsHtml = `
        <div class="progress-container" style="margin-bottom: 20px;">
            <div class="progress-bar" style="width: ${percent}%"></div>
        </div>
        <p style="font-size: 14px; margin-bottom: 15px; color: var(--text-muted-dark);">${T('common.completed', { done: doneCount, total: total, percent: percent })}</p>
    ` + lessonsHtml;

    document.getElementById('content-lessons-list').innerHTML = lessonsHtml;
    if (!silent) showPage('content-page');
}

function findTopic(topicId) {
    for (const sec of Object.values(sectionsData)) {
        const t = sec.topics.find(x => String(x.id) === String(topicId));
        if(t) return t;
    }
    return null;
}

function goBackFromContent() { showPage('section-page'); }

// ===== УРОКИ =====
function showPage(pageId) {
    const page = document.getElementById(pageId);
    if (!page) return;

    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    page.classList.add('active');

    if (pageId === 'knowledge-page') {
        restoreScroll();
    }
    else if (['islam-start-page', 'family-page', 'birth-page', 'loss-page'].includes(pageId)) {
        // скролл восстанавливается в goBackFromLesson
    }
    else {
        window.scrollTo(0, 0); // мгновенно: плавная прокрутка «съедала» первый тап на iOS/PWA
    }
}

function getSectionByLessonId(id) {
    for (const [section, ids] of Object.entries(sectionOrders)) {
        if (ids.includes(id)) return section;
    }
    return null;
}

// Сохранение прогресса «до текущего урока». Выполняется мгновенно (маленький JSON в
// localStorage), а отправка в облако — в фоне и с задержкой (см. scheduleCloudSync).
function saveProgressUpToCurrent(type, parent, currentId, allLessons) {
    if (!currentUser) return;

    const key = (type === 'book' || type === 'topic') ? parent : currentSectionId;
    let ids = [];

    if (type === 'book' || type === 'topic') {
        const idx = allLessons.findIndex(l => l.id === currentId);
        if (idx !== -1) ids = allLessons.slice(0, idx + 1).map(l => l.id);
    } else {
        ids = [currentId];
    }
    recordProgress(key, ids, currentId);
}

function flushPendingAutoSave() {
    if (autoSaveTimer) { clearTimeout(autoSaveTimer); autoSaveTimer = null; }
    const p = pendingAutoSave;
    pendingAutoSave = null;
    if (p) saveProgressUpToCurrent(p.type, p.parent, p.id, p.allLessons);
}

function openLesson(type, parent, id) {
    if (type === 'old') {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        sessionStorage.setItem(`scroll_${parent}`, scrollPos);
    }

    // Проверка PRO для книг
    if (type === 'book') {
        const book = booksData[parent];
        if (book) {
            const targetLesson = book.lessons.find(l => l.id === id);
            if (targetLesson && targetLesson.isPro && !isPro()) {
                showProModal('book', parent, id);
                return;
            }
        }
    }

    let allLessons = [];
    if (type === 'old') {
        allLessons = oldLessonsData[parent] || [];
    } else if (type === 'book') {
        allLessons = (booksData[parent] && booksData[parent].lessons) || [];
    } else if (type === 'topic') {
        const topic = findTopic(parent);
        if (topic) allLessons = topic.lessons;
    }

    const currentIndex = allLessons.findIndex(l => l.id == id);
    const lesson = allLessons[currentIndex];
    if (!lesson) return;
    const totalLessons = allLessons.length;

    // Состояние меняем только когда урок точно найден
    lessonType = type;
    parentId = parent;
    currentLessonId = id;
    if (type === 'old') currentSectionId = parent + '-page';
    if (type === 'book') currentBookId = parent;

    document.getElementById('lesson-title').innerText = L(lesson.title);
    document.getElementById('lesson-intro').innerText = L(lesson.desc || lesson.intro);
    document.getElementById('lesson-content').innerHTML =
        localizeArabicHtml(L(lesson.content), currentContentLang());

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const completeBtn = document.getElementById('complete-btn');

    if (completeBtn) completeBtn.style.display = (type === 'old') ? 'none' : 'block';

    prevBtn.disabled = (currentIndex <= 0);
    prevBtn.onclick = currentIndex > 0
        ? () => openLesson(type, parent, allLessons[currentIndex - 1].id)
        : null;

    if (currentIndex >= totalLessons - 1) {
        nextBtn.disabled = true;
        nextBtn.onclick = null;
    } else {
        const nextLesson = allLessons[currentIndex + 1];
        const isNextLocked = (type === 'book') && nextLesson.isPro && !isPro();

        nextBtn.disabled = false;
        if (isNextLocked) {
            nextBtn.onclick = () => showProModal(type, parent, nextLesson.id);
        } else {
            nextBtn.onclick = () => openLesson(type, parent, nextLesson.id);
        }
    }

    // Прогресс пишем СРАЗУ (синхронно в localStorage), без таймера:
    // галочка появится мгновенно, а облако синхронизируется в фоне.
    if (autoSaveTimer) { clearTimeout(autoSaveTimer); autoSaveTimer = null; }
    pendingAutoSave = null;
    saveProgressUpToCurrent(type, parent, id, allLessons);

    showPage('lesson-page');
}

// Карточки уроков на главной берут подписи из oldLessonsData.
// Так их не нужно дублировать в translations.js.
function renderLessonCards() {
    if (typeof oldLessonsData === 'undefined') return;
    const pageMap = {
        'islam-start-page': 'islam',
        'family-page': 'family',
        'birth-page': 'birth',
        'loss-page': 'loss'
    };
    for (const [pageId, key] of Object.entries(pageMap)) {
        const page = document.getElementById(pageId);
        const lessons = oldLessonsData[key];
        if (!page || !lessons) continue;
        page.querySelectorAll('.lesson-card').forEach((card, index) => {
            const lesson = lessons[index];
            if (!lesson) return;
            const titleEl = card.querySelector('h4');
            const descEl = card.querySelector('p');
            if (titleEl) titleEl.textContent = String(L(lesson.title)).replace(/^\s*[\d\u0660-\u0669]+\.\s*/, '');
            if (descEl) descEl.textContent = L(lesson.desc);
        });
    }
}

// ===== КНОПКА «НАЗАД К УРОКАМ» =====
// Защита от двойного срабатывания считается по времени (а не по флагу со сбросом через
// setTimeout: в PWA таймеры могут «замораживаться», и флаг оставался навсегда включённым).
let lastBackTs = 0;

function leaveLessonPage() {
    if (lessonType === 'topic' && parentId != null) {
        openTopic(parentId);
        return;
    }
    if (lessonType === 'book') {
        const bookId = currentBookId || parentId;
        if (bookId != null && document.getElementById('book-page')) {
            openBook(bookId);
            return;
        }
    }
    if (lessonType === 'old') {
        if (parentId === 'islam') showPage('islam-start-page');
        else if (parentId === 'family') showPage('family-page');
        else if (parentId === 'birth') showPage('birth-page');
        else if (parentId === 'loss') showPage('loss-page');
        else {
            const section = getSectionByLessonId(currentLessonId);
            if (section) showPage(section);
        }
        const savedScroll = sessionStorage.getItem(`scroll_${parentId}`);
        if (savedScroll !== null) {
            const top = parseInt(savedScroll, 10) || 0;
            requestAnimationFrame(() => window.scrollTo(0, top));
        }
        return;
    }

    // Запасной выход — кнопка никогда не должна «молчать»
    if (document.getElementById('knowledge-page')) showPage('knowledge-page');
    else if (document.getElementById('main-page')) showPage('main-page');
    else window.history.back();
}

function goBackFromLesson(ev) {
    if (ev && ev.preventDefault) ev.preventDefault();

    const now = Date.now();
    if (now - lastBackTs < 350) return;   // двойной тап / touchend + click
    lastBackTs = now;

    // 1. МГНОВЕННО переключаем экран
    try {
        leaveLessonPage();
    } catch (err) {
        console.error("Ошибка возврата из урока:", err);
        try {
            if (document.getElementById('knowledge-page')) showPage('knowledge-page');
            else if (document.getElementById('main-page')) showPage('main-page');
        } catch (e2) { /* ignore */ }
    }

    // Прогресс уже сохранён при открытии урока — дополнительных таймеров нет.
}

// «Быстрый тап»: на iOS в режиме PWA click по div иногда теряется (после прокрутки/инерции).
// Реагируем на touchend, если палец почти не сдвинулся; обычный click остаётся как запасной.
function bindFastTap(el, handler) {
    let startX = 0, startY = 0, moved = false;

    el.addEventListener('touchstart', (e) => {
        const t = e.touches[0];
        startX = t.clientX;
        startY = t.clientY;
        moved = false;
    }, { passive: true });

    el.addEventListener('touchmove', (e) => {
        const t = e.touches[0];
        if (Math.abs(t.clientX - startX) > 10 || Math.abs(t.clientY - startY) > 10) moved = true;
    }, { passive: true });

    el.addEventListener('touchend', (e) => {
        if (moved) return;
        e.preventDefault();      // чтобы не пришёл второй, «синтетический» click
        handler(e);
    }, { passive: false });

    el.addEventListener('click', (e) => handler(e));
}

function changeLesson(direction) {
    if (!currentLessonId) return;
    const order = sectionOrders[currentSectionId] || [];
    const idx = order.indexOf(currentLessonId);
    if (idx === -1) return;
    const newIdx = idx + direction;
    if (newIdx >= 0 && newIdx < order.length) {
        openLesson('old', currentSectionId.replace('-page', ''), order[newIdx]);
    }
}

function completeCurrentLesson() {
    if (!currentLessonId) return;
    flushPendingAutoSave();   // быстро: запись в локальный кэш, облако — в фоне
    goBackFromLesson();
}

// ===== РЕНДЕР ПРОФИЛЯ =====
function renderProfile() {
    const profileEl = document.getElementById('profile-content');
    if (!profileEl) return;

    // Вывод имени в заголовок
    const titleEl = document.getElementById('profile-page-title');
    if (titleEl) {
        if (currentUser) {
            titleEl.innerText = T('profile.withName', { name: currentUser.displayName || currentUser.email.split('@')[0] });
        } else {
            titleEl.innerText = T('profile.title');
        }
    }

    // Если гость
    if (!currentUser) {
        // Пока Firebase восстанавливает вход, не пугаем авторизованных надписью «Войдите»
        if (!authReady) {
            profileEl.innerHTML = `<div class="important-block" style="text-align: center;">${T('profile.loading')}</div>`;
            return;
        }
        profileEl.innerHTML = `
            <div class="important-block" style="text-align: center;">
                ${T('profile.loginPrompt')}
                <br><br>
                <button onclick="openAuthModal()" style="background: var(--gold); color: #ffffff; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; font-family: inherit;">
                    ${T('profile.login')}
                </button>
            </div>
        `;
        return;
    }

    let html = '';
    let progress = getProgress();
    let totalDone = 0;
    let startedBooks = 0;

    // Перебираем все книги
    for (const [bookId, book] of Object.entries(booksData)) {
        const bProgress = progress[bookId] || { done: [], last: null };
        const validDoneIds = book.lessons.map(l => l.id);
        
        // Считаем пройденные
        const doneCount = bProgress.done ? bProgress.done.filter(id => validDoneIds.includes(id)).length : 0;

        // Показываем только начатые книги
        if (doneCount === 0) continue;

        startedBooks++;
        totalDone += doneCount;
        const percent = Math.round((doneCount / book.lessons.length) * 100);

        // Ищем последний урок
        const lastValid = bProgress.last && validDoneIds.includes(bProgress.last);
        const lastLesson = lastValid ? book.lessons.find(l => l.id === bProgress.last) : null;

        const targetAction = lastValid
            ? `window.location.href='catalog.html?book=${bookId}&lesson=${bProgress.last}&from=profile'`
            : `window.location.href='catalog.html?book=${bookId}&from=profile'`;

        html += `
            <div class="block-card" style="margin-bottom: 15px; padding: 15px; display: flex; flex-direction: column; gap: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="color: var(--text-dark); margin: 0;">${L(book.title)}</h4>
                    <span style="font-size: 13px; color: var(--text-muted-dark); font-weight: bold;">${doneCount}/${book.lessons.length}</span>
                </div>
                <div class="progress-container" style="margin-top: 0;">
                    <div class="progress-bar" style="width: ${percent}%"></div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px; gap: 10px;">
                    <span style="font-size: 12px; color: var(--text-muted-dark); flex: 1; min-width: 0;">
                        ${lastLesson ? T('profile.stoppedAt', { title: L(lastLesson.title) }) : T('profile.saved')}
                    </span>
                    <button onclick="${targetAction}" style="background: var(--bg-color); color: var(--gold); border: none; padding: 8px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; font-family: inherit; white-space: nowrap;">
                        ${T('common.continue')}
                    </button>
                </div>
            </div>
        `;
    }

    // Если ничего не начато
    if (startedBooks === 0) {
        html = `<div class="important-block" style="text-align: center;">${T('profile.notStarted')}</div>`;
    }

    profileEl.innerHTML = html;
}

const originalShowPage = showPage;
showPage = function(pageId) {
    if(pageId === 'profile-page') renderProfile();
    originalShowPage(pageId);
};

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('quiz-option')) {
        let parent = e.target.parentElement;
        parent.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});

function saveScrollAndOpenBook(bookId) {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    sessionStorage.setItem('catalog_scroll_pos', scrollPos);
    openBook(bookId);
}

function restoreScroll() {
    const savedPos = sessionStorage.getItem('catalog_scroll_pos');
    if (savedPos !== null) {
        const top = parseInt(savedPos, 10) || 0;
        sessionStorage.removeItem('catalog_scroll_pos');
        // Один кадр — чтобы браузер успел показать новую страницу.
        requestAnimationFrame(() => window.scrollTo(0, top));
    }
}

// ===== АВТОРИЗАЦИЯ (Firebase) =====
function openAuthModal() {
    if (currentUser) {
        if(confirm(T('auth.loggedInAs', { name: currentUser.displayName || currentUser.email }))) {
            withFirebase(() => auth.signOut().then(() => refreshUiAfterSync()));
        }
    } else {
        const modal = document.getElementById('auth-modal');
        if (modal) {
            modal.classList.add('active');
            toggleAuthForms(false);
        }
    }
}

function toggleAuthForms(showReg = null) {
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');
    if (!loginForm || !regForm) return;
    if (showReg === null) showReg = loginForm.style.display !== 'none';
    if (showReg) {
        loginForm.style.display = 'none'; regForm.style.display = 'block';
    } else {
        loginForm.style.display = 'block'; regForm.style.display = 'none';
    }
}

function loginUser() {
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-pass').value.trim();
    if (!email || !pass) { showToast(T('auth.fillFields'), 'error'); return; }

    // UI обновится сам через onAuthStateChanged — перезагрузка страницы не нужна.
    withFirebase(() => auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
            document.getElementById('auth-modal').classList.remove('active');
            showToast(T('auth.welcome'), 'success');
            refreshUiAfterSync();
        })
        .catch(() => showToast(T('auth.wrongCredentials'), 'error')));
}

function registerUser() {
    const email = document.getElementById('reg-email').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();
    if (!email || !pass) { showToast(T('auth.fillFields'), 'error'); return; }
    if (pass.length < 6) { showToast(T('auth.passLength'), 'error'); return; }

    withFirebase(() => auth.createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
            userCredential.user.sendEmailVerification();
            document.getElementById('auth-modal').classList.remove('active');
            showToast(T('auth.registerSuccess'), 'success');
            refreshUiAfterSync();
        })
        .catch((error) => showToast(T('auth.error', { message: error.message }), 'error')));
}

function togglePassword(inputId, iconContainer) {
    const input = document.getElementById(inputId);
    const eyeOff = iconContainer.querySelector('.eye-off');
    const eyeOn = iconContainer.querySelector('.eye-on');

    if (input.type === "password") {
        input.type = "text";
        iconContainer.style.color = "var(--gold)";
        if(eyeOff) eyeOff.style.display = "none";
        if(eyeOn) eyeOn.style.display = "block";
    } else {
        input.type = "password";
        iconContainer.style.color = "var(--muted)";
        if(eyeOff) eyeOff.style.display = "block";
        if(eyeOn) eyeOn.style.display = "none";
    }
}

// ===== УПРАВЛЕНИЕ АККАУНТОМ ИЗ НАСТРОЕК =====
function openAccountSettings() {
    const modal = document.getElementById('account-settings-modal');
    const loginView = document.getElementById('settings-login-view');
    const accountView = document.getElementById('settings-account-view');

    if (!modal) return;
    modal.classList.add('active');

    if (currentUser) {
        loginView.style.display = 'none';
        accountView.style.display = 'block';

        // Сразу показываем то, что уже есть в памяти; сеть не задерживает открытие.
        document.getElementById('set-user-email').innerText = currentUser.email;
        document.getElementById('set-user-name-display').innerText = currentUser.displayName || T('settings.account.notSet');

        // Свежие данные подтянутся в фоне, если соединение есть.
        currentUser.reload().then(() => {
            const freshUser = firebase.auth().currentUser;
            if (freshUser) {
                document.getElementById('set-user-email').innerText = freshUser.email;
                document.getElementById('set-user-name-display').innerText = freshUser.displayName || T('settings.account.notSet');
            }
        }).catch(() => { /* уже показали кэшированные значения */ });
    } else {
        loginView.style.display = 'block';
        accountView.style.display = 'none';
    }
}

function loginFromSettings() {
    const email = document.getElementById('set-login-email').value.trim();
    const pass = document.getElementById('set-login-pass').value.trim();

    if (!email || !pass) { showToast(T('auth.fillFields'), 'error'); return; }

    withFirebase(() => auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
            showToast(T('auth.welcome'), 'success');
            document.getElementById('account-settings-modal').classList.remove('active');
            refreshUiAfterSync();
        })
        .catch(() => showToast(T('auth.wrongCredentials'), 'error')));
}

function logoutFromSettings() {
    if (confirm(T('auth.logoutConfirm'))) {
        withFirebase(() => auth.signOut().then(() => {
            document.getElementById('account-settings-modal').classList.remove('active');
            refreshUiAfterSync();
        }));
    }
}

function saveNewName() {
    const newName = document.getElementById('set-new-name').value.trim();
    if (!newName) { showToast(T('auth.enterName'), 'error'); return; }
    if (!currentUser) return;

    currentUser.updateProfile({ displayName: newName })
        .then(() => {
            showToast(T('auth.nameChanged'), 'success');
            document.getElementById('set-user-name-display').innerText = newName;
            document.getElementById('set-new-name').value = '';

            const greetingEl = document.getElementById('profile-page-title');
            if (greetingEl) greetingEl.innerText = T('profile.withName', { name: newName });
        })
        .catch((error) => showToast(T('auth.error', { message: error.message }), 'error'));
}

function saveNewEmail() {
    const newEmail = document.getElementById('set-new-email').value.trim();
    const pass = document.getElementById('set-email-pass').value.trim();

    if (!newEmail || !pass) { showToast(T('auth.fillEmailPass'), 'error'); return; }
    if (!currentUser) return;

    withFirebase(() => {
        const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, pass);

        currentUser.reauthenticateWithCredential(credential)
            .then(() => currentUser.verifyBeforeUpdateEmail(newEmail))
            .then(() => {
                showToast(T('auth.emailSent'), 'success');
                document.getElementById('set-new-email').value = '';
                document.getElementById('set-email-pass').value = '';

                localStorage.setItem('pendingEmailChange', newEmail);
                localStorage.setItem('pendingPassword', pass);
                document.getElementById('account-settings-modal').classList.remove('active');
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') showToast(T('auth.wrongCurrentPass'), 'error');
                else showToast(T('auth.error', { message: error.message }), 'error');
            });
    });
}

function saveNewPass() {
    const oldPass = document.getElementById('set-old-pass').value.trim();
    const newPass = document.getElementById('set-new-pass').value.trim();

    if (!oldPass || !newPass) { showToast(T('auth.fillFields'), 'error'); return; }
    if (newPass.length < 6) { showToast(T('auth.newPassLength'), 'error'); return; }
    if (!currentUser) return;

    withFirebase(() => {
        const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, oldPass);

        currentUser.reauthenticateWithCredential(credential)
            .then(() => currentUser.updatePassword(newPass))
            .then(() => {
                showToast(T('auth.passChanged'), 'success');
                document.getElementById('set-old-pass').value = '';
                document.getElementById('set-new-pass').value = '';
            })
            .catch(() => showToast(T('auth.passError'), 'error'));
    });
}

// ===== НАМАЗ И КИБЛА =====
// Настройка: пока пользователь не разрешил геолокацию, показывать время для города по умолчанию,
// чтобы в шапке не висело «--:--». Поставьте false, если лучше ничего не показывать до разрешения GPS.
const SHOW_DEFAULT_CITY_UNTIL_GPS = true;
const DEFAULT_COORDS = { lat: 55.7558, lng: 37.6173 }; // Москва

const PRAYER_CACHE_KEY = 'amanah_prayer_cache_v2';
const COORDS_KEY = 'amanah_coords_v1';
const PRAYER_KEYS = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
const PRAYER_NAMES = [
    ['Fajr', 'fajr'],
    ['Dhuhr', 'dhuhr'],
    ['Asr', 'asr'],
    ['Maghrib', 'maghrib'],
    ['Isha', 'isha']
];

let qiblaAngle = 0;
let todayPrayers = [];          // список для окна «Намазы» (может быть на любую дату)
let headerPrayers = [];         // список на СЕГОДНЯ — для шапки
let headerDateKey = null;
let isGeolocationRequested = false;
let usingDefaultCoords = false;
let geoPending = false;
let geoGestureArmed = false;
let headerRetryCount = 0;
let headerTickStarted = false;
let prayerFetchSeq = 0;

let currentPrayerDate = new Date();
let userCoordinates = null;

// ----- вспомогательное -----
function pad2(n) { return String(n).padStart(2, '0'); }
function dateKey(d) { return `${pad2(d.getDate())}-${pad2(d.getMonth() + 1)}-${d.getFullYear()}`; } // DD-MM-YYYY
function coordsKey(c) { return `${c.lat.toFixed(2)},${c.lng.toFixed(2)}`; }
function normTime(t) { return String(t || '').slice(0, 5); } // "05:12 (MSK)" -> "05:12"

function computeQiblaAngle(lat, lng) {
    // Азимут на Каабу считаем сами — без запроса в сеть
    const rad = (d) => d * Math.PI / 180;
    const deg = (r) => r * 180 / Math.PI;
    const phi1 = rad(lat), phi2 = rad(21.4225), dl = rad(39.8262 - lng);
    const y = Math.sin(dl) * Math.cos(phi2);
    const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(dl);
    return (deg(Math.atan2(y, x)) + 360) % 360;
}

// ----- кэш (чтобы шапка заполнялась мгновенно и без сети) -----
function readPrayerCache() {
    try { return JSON.parse(lsGet(PRAYER_CACHE_KEY)) || {}; } catch (e) { return {}; }
}

function normalizePrayerList(list) {
    return (list || []).map((p, i) => {
        const key = (p && p.key) || PRAYER_KEYS[i] || 'fajr';
        return {
            key: key,
            name: (p && p.name) || T('prayer.' + key + '.short'),
            time: p && p.time
        };
    });
}

function getCachedPrayers(dateObj, coords) {
    const entry = readPrayerCache()[`${dateKey(dateObj)}|${coordsKey(coords)}`];
    return entry && Array.isArray(entry.list) && entry.list.length ? normalizePrayerList(entry.list) : null;
}

function setCachedPrayers(dateObj, coords, list) {
    const map = readPrayerCache();
    map[`${dateKey(dateObj)}|${coordsKey(coords)}`] = { t: Date.now(), list: list };
    const keys = Object.keys(map).sort((a, b) => (map[b].t || 0) - (map[a].t || 0));
    keys.slice(14).forEach((k) => delete map[k]);   // храним не больше 14 записей
    lsSet(PRAYER_CACHE_KEY, JSON.stringify(map));
}

function readSavedCoords() {
    try {
        const c = JSON.parse(lsGet(COORDS_KEY));
        if (c && typeof c.lat === 'number' && typeof c.lng === 'number') return { lat: c.lat, lng: c.lng };
    } catch (e) { /* ignore */ }
    return null;
}

function saveCoords(c) { lsSet(COORDS_KEY, JSON.stringify({ lat: c.lat, lng: c.lng })); }

// ----- получение времени намаза (кэш -> сеть) -----
async function getPrayersForDate(dateObj, coords) {
    const cached = getCachedPrayers(dateObj, coords);
    if (cached) return cached;

    const ctrl = ('AbortController' in window) ? new AbortController() : null;
    const timer = ctrl ? setTimeout(() => ctrl.abort(), 9000) : null;
    try {
        let tz = '';
        try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* ignore */ }
        const url = `https://api.aladhan.com/v1/timings/${dateKey(dateObj)}` +
            `?latitude=${coords.lat}&longitude=${coords.lng}&method=3` +
            (tz ? `&timezonestring=${encodeURIComponent(tz)}` : '');

        const res = await fetch(url, ctrl ? { signal: ctrl.signal } : undefined);
        const data = await res.json();
        if (data && data.code === 200 && data.data && data.data.timings) {
            const t = data.data.timings;
            const list = PRAYER_NAMES.map(([apiKey, nameKey]) => ({
                key: nameKey,
                name: T('prayer.' + nameKey + '.short'),
                time: normTime(t[apiKey])
            }));
            setCachedPrayers(dateObj, coords, list);
            return list;
        }
    } catch (error) {
        console.warn("Ошибка загрузки намазов:", error && error.message);
    } finally {
        if (timer) clearTimeout(timer);
    }
    return null;
}

// ----- шапка: ближайший намаз -----
function updateHeaderPrayer() {
    const nameEl = document.getElementById('next-prayer-name');
    const timeEl = document.getElementById('next-prayer-time');
    if (!nameEl || !timeEl || !headerPrayers.length) return;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    let next = headerPrayers.find((p) => {
        const [h, m] = p.time.split(':').map(Number);
        return (h * 60 + m) > currentMinutes;
    });
    if (!next) next = { key: 'fajr', time: headerPrayers[0].time };

    nameEl.innerText = T('prayer.' + next.key + '.short', null, next.name || '');
    timeEl.innerText = next.time;
}

async function loadHeaderPrayers() {
    if (!userCoordinates) return;
    const today = new Date();
    const coords = userCoordinates;
    const list = await getPrayersForDate(today, coords);
    // Координаты могли смениться, пока шёл запрос (город по умолчанию -> реальный GPS)
    if (!userCoordinates || coordsKey(coords) !== coordsKey(userCoordinates)) return;
    if (list) {
        headerPrayers = list;
        headerDateKey = dateKey(today);
        headerRetryCount = 0;
        updateHeaderPrayer();
    } else if (headerRetryCount < 5) {
        headerRetryCount++;
        setTimeout(loadHeaderPrayers, 20000);   // сеть недоступна — повторим позже
    }
}

function tickHeaderPrayer() {
    if (document.hidden) return;
    if (headerDateKey && headerDateKey !== dateKey(new Date()) && userCoordinates) {
        loadHeaderPrayers();   // наступил новый день
        return;
    }
    updateHeaderPrayer();
}

// ----- координаты -----
function applyCoords(c, real) {
    const prevKey = userCoordinates ? coordsKey(userCoordinates) : null;
    userCoordinates = c;
    usingDefaultCoords = !real;
    if (real) {
        isGeolocationRequested = true;
        saveCoords(c);
    }

    const debugText = document.getElementById('gps-debug-text');
    if (debugText) {
        debugText.innerText = real
            ? T('qibla.coords', { lat: c.lat.toFixed(4), lng: c.lng.toFixed(4) })
            : T('qibla.gpsUnavailable');
    }

    qiblaAngle = computeQiblaAngle(c.lat, c.lng);
    renderQiblaStatic();

    if (prevKey !== coordsKey(c) || !headerPrayers.length) loadHeaderPrayers();

    const prayerModal = document.getElementById('prayer-modal');
    if (prayerModal && prayerModal.classList.contains('active')) {
        fetchPrayerTimesForDate(currentPrayerDate);
    }
}

function requestPosition() {
    if (geoPending) return;
    if (!navigator.geolocation) {
        if (!userCoordinates) applyCoords(DEFAULT_COORDS, false);
        return;
    }
    geoPending = true;
    const debugText = document.getElementById('gps-debug-text');
    if (debugText && !userCoordinates) debugText.innerText = T('qibla.requesting');

    navigator.geolocation.getCurrentPosition(
        (position) => {
            geoPending = false;
            applyCoords({ lat: position.coords.latitude, lng: position.coords.longitude }, true);
        },
        (error) => {
            geoPending = false;
            console.warn("GPS Ошибка:", error && error.message);
            if (!userCoordinates) applyCoords(DEFAULT_COORDS, false);
        },
        // Грубой точности достаточно для времени намаза и Киблы — так быстрее и экономнее
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 10 * 60 * 1000 }
    );
}

// Оставлено для совместимости со старым кодом/страницами
function initPrayerAndQibla() { requestPosition(); }

async function getGeoPermissionState() {
    try {
        if (navigator.permissions && navigator.permissions.query) {
            const status = await navigator.permissions.query({ name: 'geolocation' });
            return status.state; // 'granted' | 'prompt' | 'denied'
        }
    } catch (e) { /* ignore */ }
    return 'unknown';
}

// Запрос геолокации по первому касанию: без жеста браузеры часто молча игнорируют запрос
// (из-за этого время появлялось только после нажатия на «Киблу»)
function armGeoOnFirstGesture() {
    if (geoGestureArmed || isGeolocationRequested) return;
    geoGestureArmed = true;
    document.addEventListener('click', () => {
        if (!isGeolocationRequested) requestPosition();
    }, { capture: true, once: true });
}

// ----- запуск при открытии страницы -----
function initPrayerHeader() {
    if (!document.getElementById('next-prayer-time')) return;

    // 1) МГНОВЕННО и без сети: сохранённые координаты + закэшированное время на сегодня
    const saved = readSavedCoords();
    if (saved) {
        userCoordinates = saved;
        usingDefaultCoords = false;
        isGeolocationRequested = true;
        qiblaAngle = computeQiblaAngle(saved.lat, saved.lng);
        const cached = getCachedPrayers(new Date(), saved);
        if (cached) {
            headerPrayers = cached;
            headerDateKey = dateKey(new Date());
            updateHeaderPrayer();
        }
    }

    // Обновление текста шапки раз в 30 сек (дёшево, сети не использует)
    if (!headerTickStarted) {
        headerTickStarted = true;
        setInterval(tickHeaderPrayer, 30000);
    }

    // 2) Всё остальное — после того, как страница отрисована, чтобы не тормозить загрузку
    const boot = () => {
        if (userCoordinates) loadHeaderPrayers();

        getGeoPermissionState().then((state) => {
            if (state === 'granted') {
                requestPosition();                       // тихо уточняем координаты
            } else if (state === 'denied') {
                if (!userCoordinates) applyCoords(DEFAULT_COORDS, false);
            } else {
                // 'prompt' / неизвестно: не ждём ответа пользователя — сразу город по умолчанию
                if (!userCoordinates && SHOW_DEFAULT_CITY_UNTIL_GPS) {
                    applyCoords(DEFAULT_COORDS, false);
                }
                armGeoOnFirstGesture();
            }
        });
    };

    // Запускаем сразу: кэш шапки уже показан, сеть идёт в фоне и UI не блокирует.
    boot();
}

// ----- окна -----
function openQiblaModal() {
    const m = document.getElementById('qibla-modal');
    if (!m) return;
    m.classList.add('active');
    if (!isGeolocationRequested) requestPosition();   // это нажатие пользователя — запрос сработает
    startCompass();
}

function closeQiblaModal() {
    const m = document.getElementById('qibla-modal');
    if (m) m.classList.remove('active');
    stopCompass();   // датчики не должны работать, когда компас закрыт
}

function openPrayerModal() {
    const m = document.getElementById('prayer-modal');
    if (!m) return;
    m.classList.add('active');
    currentPrayerDate = new Date();
    if (userCoordinates) fetchPrayerTimesForDate(currentPrayerDate);
    else if (!isGeolocationRequested) requestPosition();
}

async function fetchPrayerTimesForDate(dateObj) {
    if (!userCoordinates) return;

    currentPrayerDate = dateObj;
    const seq = ++prayerFetchSeq;
    const container = document.getElementById('prayer-list-container');

    updatePrayerModalTitle();

    if (container && !getCachedPrayers(dateObj, userCoordinates)) {
        container.innerHTML = `<div class="prayer-loading">${T('prayer.loading')}</div>`;
    }

    const list = await getPrayersForDate(dateObj, userCoordinates);
    if (seq !== prayerFetchSeq) return;   // пользователь уже выбрал другую дату

    if (!list) {
        if (container) container.innerHTML = `<div class="prayer-loading">${T('prayer.loadError')}</div>`;
        return;
    }

    todayPrayers = list;
    renderPrayerList();

    const today = new Date();
    const isToday = dateObj.getDate() === today.getDate() && dateObj.getMonth() === today.getMonth() && dateObj.getFullYear() === today.getFullYear();

    if (isToday) {
        headerPrayers = list;
        headerDateKey = dateKey(dateObj);
        updateHeaderPrayer();
    }
}

function formatPrayerDate(dateObj) {
    try {
        const loc = (window.I18N && typeof window.I18N.getLocale === 'function') ? window.I18N.getLocale() : 'ru-RU';
        return new Intl.DateTimeFormat(loc, { day: 'numeric', month: 'long' }).format(dateObj);
    } catch (e) {
        return `${dateObj.getDate()}.${pad2(dateObj.getMonth() + 1)}`;
    }
}

function updatePrayerModalTitle() {
    const titleEl = document.getElementById('prayer-date-title');
    if (!titleEl) return;
    const today = new Date();
    const isToday = currentPrayerDate.getDate() === today.getDate() &&
        currentPrayerDate.getMonth() === today.getMonth() &&
        currentPrayerDate.getFullYear() === today.getFullYear();
    titleEl.innerText = isToday ? T('prayer.today') : T('prayer.onDate', { date: formatPrayerDate(currentPrayerDate) });
}

function changePrayerDate(days) {
    const newDate = new Date(currentPrayerDate);
    newDate.setDate(newDate.getDate() + days);
    fetchPrayerTimesForDate(newDate);
}

function openCalendar() {
    const picker = document.getElementById('prayer-date-picker');
    if (!picker) return;
    const yyyy = currentPrayerDate.getFullYear();
    const mm = pad2(currentPrayerDate.getMonth() + 1);
    const dd = pad2(currentPrayerDate.getDate());
    picker.value = `${yyyy}-${mm}-${dd}`;
    if (typeof picker.showPicker === 'function') picker.showPicker();
    else picker.click();
}

function setPrayerDateFromPicker(dateString) {
    if (!dateString) return;
    const [y, m, d] = dateString.split('-');
    const newDate = new Date(y, m - 1, d);
    fetchPrayerTimesForDate(newDate);
}

function renderPrayerList() {
    const container = document.getElementById('prayer-list-container');
    if (!container) return;

    let html = '';
    todayPrayers.forEach((p, i) => {
        const key = p.key || PRAYER_KEYS[i] || 'fajr';
        const name = T('prayer.' + key, null, p.name || '');
        html += `
            <div class="prayer-row">
                <span class="prayer-row-name">${name}</span>
                <span class="prayer-time">${p.time}</span>
            </div>
        `;
    });
    container.innerHTML = html;
}

// ----- компас -----
let compassHandler = null;
let compassEventName = null;

function isQiblaModalOpen() {
    const m = document.getElementById('qibla-modal');
    return !!(m && m.classList.contains('active'));
}

function renderQiblaStatic() {
    const compassDial = document.getElementById('compass-dial');
    const angleText = document.getElementById('qibla-angle-text');
    if (angleText) angleText.innerText = Math.round(qiblaAngle);
    if (compassDial && !compassHandler) compassDial.style.transform = `rotate(${qiblaAngle}deg)`;
}

function stopCompass() {
    if (compassHandler && compassEventName) {
        window.removeEventListener(compassEventName, compassHandler, true);
    }
    compassHandler = null;
    compassEventName = null;
}

function createOrientationHandler() {
    const compassDial = document.getElementById('compass-dial');
    const dirText = document.getElementById('qibla-direction-text');
    let heading = null;
    let ticking = false;

    function paint() {
        ticking = false;
        if (heading === null) return;

        if (compassDial) {
            let rotation = qiblaAngle - heading;
            if (rotation > 360) rotation -= 360;
            if (rotation < 0) rotation += 360;
            compassDial.style.transform = `rotate(${rotation}deg)`;
        }

        if (dirText) {
            const diff = ((qiblaAngle - heading + 540) % 360) - 180;
            if (Math.abs(diff) < 10) {
                dirText.innerText = T('qibla.aligned');
                dirText.style.color = 'var(--success)';
            } else {
                dirText.innerText = T('qibla.turn');
                dirText.style.color = 'var(--muted)';
            }
        }
    }

    return function (event) {
        if (event.webkitCompassHeading !== undefined && event.webkitCompassHeading !== null) {
            heading = event.webkitCompassHeading;
        } else if (event.alpha !== null && event.alpha !== undefined) {
            heading = 360 - event.alpha;
        } else {
            return;
        }
        // Не чаще одного обновления на кадр — иначе датчик (60 Гц) нагружает телефон
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(paint);
        }
    };
}

function startCompass() {
    const dirText = document.getElementById('qibla-direction-text');
    renderQiblaStatic();

    if (window.DeviceOrientationEvent === undefined) {
        if (dirText) dirText.innerText = T('qibla.phoneOnly');
        return;
    }

    stopCompass();   // никаких дублирующихся слушателей

    const attach = () => {
        if (!isQiblaModalOpen()) return;
        compassHandler = createOrientationHandler();
        compassEventName = ('ondeviceorientationabsolute' in window) ? 'deviceorientationabsolute' : 'deviceorientation';
        window.addEventListener(compassEventName, compassHandler, true);
    };

    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then((permissionState) => { if (permissionState === 'granted') attach(); })
            .catch(console.error);
    } else {
        attach();
    }
}

// ===== ИНИЦИАЛИЗАЦИЯ СТРАНИЦЫ =====
// Скрипты подключены с defer, поэтому DOM уже готов: не ждём DOMContentLoaded.
function initPage() {
    // 0. Тема: синхронизируем атрибут и цвет системной панели
    applyTheme(getTheme());
    renderLessonCards();

    // 1. Кнопка «Назад к урокам» — быстрый тап для телефонов и PWA
    const lessonBackBtn = document.getElementById('lesson-back-btn');
    if (lessonBackBtn) {
        lessonBackBtn.setAttribute('role', 'button');
        bindFastTap(lessonBackBtn, goBackFromLesson);
    }

    // 2. Профиль: сразу показываем то, что есть, затем обновится после синхронизации
    if (document.getElementById('profile-content')) renderProfile();

    // 3. Возврат прокрутки в каталоге
    const knowledgePage = document.getElementById('knowledge-page');
    if (knowledgePage && knowledgePage.classList.contains('active')) restoreScroll();

    // 4. Переход по ссылке catalog.html?book=..&lesson=.. (из профиля) — ОДИН раз
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    const lessonId = urlParams.get('lesson');
    if (bookId && typeof booksData !== 'undefined' && booksData[bookId] && document.getElementById('book-page')) {
        if (urlParams.get('from') === 'profile') window.isFromProfile = true;
        openBook(bookId);   // сразу показываем книгу — без пустого экрана
        if (lessonId) {
            // Открываем урок сразу; PRO-статус из локального кэша уже доступен.
            openLesson('book', bookId, lessonId);
        }
    }

    // 5. Время намаза в шапке (кэш — мгновенно, остальное — в фоне)
    initPrayerHeader();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}

// Перерисовать локализуемые части после смены языка
document.addEventListener('amanah:languagechange', () => {
    try {
        if (document.getElementById('profile-content')) renderProfile();
        renderLessonCards();

        const lessonPage = document.getElementById('lesson-page');
        if (lessonPage && lessonPage.classList.contains('active') && lessonType && currentLessonId != null) {
            openLesson(lessonType, parentId, currentLessonId);
        }

        const bookPage = document.getElementById('book-page');
        if (bookPage && bookPage.classList.contains('active') && currentBookId != null) {
            openBook(currentBookId, true);
        }

        const contentPage = document.getElementById('content-page');
        if (contentPage && contentPage.classList.contains('active') && currentTopicId != null) {
            openTopic(currentTopicId, true);
        }

        const sectionPage = document.getElementById('section-page');
        if (sectionPage && sectionPage.classList.contains('active') && currentCatalogSectionId != null) {
            openSection(currentCatalogSectionId);
        }

        if (headerPrayers.length) updateHeaderPrayer();

        const prayerModal = document.getElementById('prayer-modal');
        if (prayerModal && prayerModal.classList.contains('active')) {
            updatePrayerModalTitle();
            if (todayPrayers.length) renderPrayerList();
        }

        const qiblaModal = document.getElementById('qibla-modal');
        if (qiblaModal && qiblaModal.classList.contains('active')) {
            const dirText = document.getElementById('qibla-direction-text');
            if (dirText) {
                dirText.innerText = T('qibla.hint');
                dirText.style.color = '';
            }
            renderQiblaStatic();
        }
    } catch (err) {
        console.error('languagechange:', err);
    }
});

// Сохраняем незавершённое и досинхронизируем при сворачивании/закрытии (важно для PWA на телефоне)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        flushPendingAutoSave();
        flushCloudSync(true);
    } else {
        tickHeaderPrayer();
    }
});

window.addEventListener('pagehide', () => {
    flushPendingAutoSave();
    flushCloudSync(true);
});
