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

let auth = null;
let db = null;
let currentUser = null;

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

// Инициализируем Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();

    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch((error) => console.error("Ошибка persistence:", error));

       db = firebase.firestore();
    
    // Включаем кэширование для быстрой загрузки
    db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
        console.warn("Кэш Firestore не включен:", err.code);
    });

    // Следим за состоянием входа
    // Следим за состоянием входа
    auth.onAuthStateChanged((user) => {
        if (user) {
            currentUser = user;
            localStorage.removeItem('pendingEmailChange'); 
            localStorage.removeItem('pendingPassword');    
            
            // Загружаем данные ИЗ ОБЛАКА перед тем, как показать
            loadProgressFromCloud().then(() => {
                // Досинхронизация, если были изменения
                if (localStorage.getItem('amanah_progress_dirty') === '1') {
                    const local = getProgress();
                    saveProgress(local).then(() => {
                        localStorage.removeItem('amanah_progress_dirty');
                    });
                }
                
                // РИСУЕМ ПРОФИЛЬ ТОЛЬКО ПОСЛЕ ЗАГРУЗКИ ИЗ ОБЛАКА
                if (typeof renderProfile === 'function') renderProfile();
            });
            
            const accountView = document.getElementById('settings-account-view');
            if (accountView && accountView.style.display === 'block') {
                const emailEl = document.getElementById('set-user-email');
                const nameEl = document.getElementById('set-user-name-display');
                if (emailEl) emailEl.innerText = user.email;
                if (nameEl) nameEl.innerText = user.displayName || "Не задано";
            }
        } else {
            currentUser = null;
            
            localStorage.removeItem('amanah_pro');
            localStorage.removeItem('amanah_progress_guest');
            
            const pendingEmail = localStorage.getItem('pendingEmailChange');
            const pendingPass = localStorage.getItem('pendingPassword');
            
            if (pendingEmail && pendingPass) {
                auth.signInWithEmailAndPassword(pendingEmail, pendingPass)
                    .then(() => {
                        localStorage.removeItem('pendingEmailChange');
                        localStorage.removeItem('pendingPassword');
                        showToast('Почта успешно подтверждена! Добро пожаловать.', 'success');
                    })
                    .catch((err) => {
                        console.error("Не удалось автоматически войти:", err);
                        localStorage.removeItem('pendingEmailChange');
                        localStorage.removeItem('pendingPassword');
                    });
                return; 
            }

            if (typeof renderProfile === 'function') renderProfile();
        }
    });
}

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

// ===== ЛОГИКА ПРОГРЕССА И PRO =====
// Гость прогресс НЕ сохраняет и НЕ читает (п.3 задания)
function getProgress() {
    if (!currentUser) return {};
    const key = `amanah_progress_${currentUser.uid}`;
    const p = localStorage.getItem(key);
    return p ? JSON.parse(p) : {};
}

async function saveProgress(data) {
    if (!currentUser) return;

    const key = `amanah_progress_${currentUser.uid}`;
    // 1. Сначала сохраняем в память телефона (это происходит мгновенно и не зависит от интернета)
    localStorage.setItem(key, JSON.stringify(data));

    // 2. Затем отправляем в облако Firebase
    if (db) {
        try {
            // Ждем, пока сервер подтвердит запись
            await db.collection('users').doc(currentUser.uid).set(
                {
                    progress: data,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                },
                { merge: true }
            );
        } catch (err) {
            console.error("Ошибка сохранения в облако:", err);
            // Если интернет плохой, ставим флаг, что надо синхронизировать позже
            localStorage.setItem('amanah_progress_dirty', '1');
            throw err; // Пробрасываем ошибку, чтобы кнопка "Завершить" знала о проблеме
        }
    }
}

async function loadProgressFromCloud() {
    if (!currentUser || !db) return;
    try {
        // Убираем старый глобальный флаг, если остался от предыдущей версии
        localStorage.removeItem('amanah_pro');
        localStorage.removeItem('amanah_progress_guest');

        const doc = await db.collection('users').doc(currentUser.uid).get();

        if (doc.exists) {
            const data = doc.data();

            // Прогресс
            if (data.progress) {
                localStorage.setItem(
                    `amanah_progress_${currentUser.uid}`,
                    JSON.stringify(data.progress)
                );
            }

            // PRO-статус — привязан к uid
            if (data.isPro) {
                localStorage.setItem(`amanah_pro_${currentUser.uid}`, 'true');
            } else {
                localStorage.removeItem(`amanah_pro_${currentUser.uid}`);
            }
        } else {
            // Документа ещё нет — значит PRO нет
            localStorage.removeItem(`amanah_pro_${currentUser.uid}`);
        }
    } catch (error) {
        console.error("Ошибка загрузки:", error);
    }
}

// PRO читается из аккаунта, а не глобально (п.4 задания)
function isPro() {
    if (!currentUser) return false;
    return localStorage.getItem(`amanah_pro_${currentUser.uid}`) === 'true';
}

function activatePro() {
    if (!currentUser) {
        showToast('Войдите в аккаунт, чтобы активировать PRO', 'error');
        closeProModal();
        if (typeof openAuthModal === 'function') openAuthModal();
        return;
    }

    localStorage.setItem(`amanah_pro_${currentUser.uid}`, 'true');
    closeProModal();
    if (currentBookId) openBook(currentBookId);
    showToast('PRO активирован!', 'success');

    if (db) {
        db.collection('users').doc(currentUser.uid).set(
            {
                isPro: true,
                proActivatedAt: firebase.firestore.FieldValue.serverTimestamp()
            },
            { merge: true }
        ).catch(err => console.error("Ошибка сохранения PRO:", err));
    }
}

function showProModal() {
    const modal = document.getElementById('pro-modal');
    if (!modal) return;
    modal.classList.add('active');

    const btn = modal.querySelector('.modal-btn');
    if (!btn) return;

    // Проверяем в реальном времени
    if (typeof currentUser === 'undefined' || !currentUser) {
        btn.innerText = 'Войти в аккаунт';
        btn.onclick = () => {
            closeProModal();
            if (typeof openAuthModal === 'function') openAuthModal();
        };
    } else if (isPro()) {
        btn.innerText = 'У вас есть PRO (Продолжить)';
        btn.onclick = () => {
            closeProModal();
            // Если урок выбран, открываем его
            const urlParams = new URLSearchParams(window.location.search);
            const bId = urlParams.get('book');
            const lId = urlParams.get('lesson');
            if (bId && lId) openLesson('book', bId, lId);
            else if (currentBookId) openBook(currentBookId);
        };
    } else {
        btn.innerText = 'Активировать демо-PRO';
        btn.onclick = activatePro;
    }
}
function closeProModal() {
    const modal = document.getElementById('pro-modal');
    if (modal) modal.classList.remove('active');
}

async function markLessonDone(bookId, lessonId) {
    if (!currentUser) return; // гость — не сохраняем
    let progress = getProgress();
    if (!progress[bookId]) progress[bookId] = { done: [], last: null };
    if (!progress[bookId].done.includes(lessonId)) {
        progress[bookId].done.push(lessonId);
    }
    progress[bookId].last = lessonId;
    await saveProgress(progress);
}

// ===== ОТКРЫТИЕ КНИГ =====
function openBook(id) {
    currentBookId = id;
    const book = booksData[id];
    if (!book) return;

    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-author').innerText = book.author;

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('from') === 'profile' || window.isFromProfile) {
        sessionStorage.setItem('amanah_from_profile', 'true');
    }

    const isFromProfile = sessionStorage.getItem('amanah_from_profile') === 'true';
    const backBtn = document.querySelector('#book-page .back-btn');

    if (backBtn) {
        if (isFromProfile) {
            backBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Назад в профиль';
            backBtn.onclick = () => {
                sessionStorage.removeItem('amanah_from_profile');
                window.location.href = 'profile.html';
            };
        } else {
            backBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Назад к знаниям';
            backBtn.onclick = () => {
                sessionStorage.removeItem('amanah_from_profile');
                showPage('knowledge-page');
            };
        }
    }

    let html = `
        <p><strong>О книге:</strong> ${book.desc}</p>
        <div class="important-block">
            <strong>Преимущества изучения:</strong><br>
            ${book.benefits}
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
        if (isLocked) action = `onclick="showProModal()"`;
        else action = `onclick="openLesson('book', ${id}, '${lesson.id}')"`;

        // Замок показываем ТОЛЬКО если урок Pro и Pro не куплен (п.4)
        const statusIcon = isLocked ? '🔒' : (isDone ? '✓' : '▶');

        lessonsHtml += `
            <div class="lesson-item" ${action}>
                <div class="lesson-item-info">
                    <h4>${index + 1}. ${lesson.title}</h4>
                    <p>${lesson.desc}</p>
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
        <p style="font-size: 14px; margin-bottom: 15px; color: var(--text-muted-dark);">Пройдено: ${doneCount} из ${total} (${percent}%)</p>
    ` + lessonsHtml;

    document.getElementById('book-lessons-list').innerHTML = lessonsHtml;
    showPage('book-page');
}

// ===== ФУНКЦИИ ДЛЯ РАЗДЕЛОВ ЗНАНИЙ =====
function openSection(id) {
    const section = sectionsData[id];
    if (!section) return;

    document.getElementById('section-title').innerText = section.title;
    document.getElementById('section-desc').innerText = section.desc;

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
                <div class="square-title">${topic.title}</div>
            </div>
        `;
    });

    document.getElementById('section-topics').innerHTML = topicsHtml;
    showPage('section-page');
}

function openTopic(topicId) {
    const topic = findTopic(topicId);
    if (!topic) return;

    document.getElementById('content-title').innerText = topic.title;
    document.getElementById('content-author').innerText = "Все уроки этого раздела доступны бесплатно";
    document.getElementById('content-body').innerHTML = "";

    let lessonsHtml = '';
    let progress = getProgress()[topicId] || { done: [] };

    topic.lessons.forEach((lesson, index) => {
        const isDone = progress.done.includes(lesson.id);

        lessonsHtml += `
            <div class="lesson-item" onclick="openLesson('topic', ${topicId}, '${lesson.id}')">
                <div class="lesson-item-info">
                    <h4>${index + 1}. ${lesson.title}</h4>
                    <p>${lesson.desc}</p>
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
        <p style="font-size: 14px; margin-bottom: 15px; color: var(--text-muted-dark);">Пройдено: ${doneCount} из ${total} (${percent}%)</p>
    ` + lessonsHtml;

    document.getElementById('content-lessons-list').innerHTML = lessonsHtml;
    showPage('content-page');
}

function findTopic(topicId) {
    for (const sec of Object.values(sectionsData)) {
        const t = sec.topics.find(x => x.id === topicId);
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function getSectionByLessonId(id) {
    for (const [section, ids] of Object.entries(sectionOrders)) {
        if (ids.includes(id)) return section;
    }
    return null;
}

async function saveProgressUpToCurrent(type, parent, currentId, allLessons) {
    if (!currentUser) return;

    let idForProgress = (type === 'book') ? parent : (type === 'topic' ? parent : currentSectionId);
    let progress = getProgress();
    if (!progress[idForProgress]) progress[idForProgress] = { done: [], last: null };

    if (type === 'book' || type === 'topic') {
        const idx = allLessons.findIndex(l => l.id === currentId);
        if (idx !== -1) {
            for (let i = 0; i <= idx; i++) {
                const lid = allLessons[i].id;
                if (!progress[idForProgress].done.includes(lid)) {
                    progress[idForProgress].done.push(lid);
                }
            }
        }
    } else {
        if (!progress[idForProgress].done.includes(currentId)) {
            progress[idForProgress].done.push(currentId);
        }
    }
    progress[idForProgress].last = currentId;

    // Один раз синхронно пишем в память (мгновенно)
    localStorage.setItem(`amanah_progress_${currentUser.uid}`, JSON.stringify(progress));
    
    // И один раз отправляем в облако (в фоне)
    if (db) {
        db.collection('users').doc(currentUser.uid).set(
            { progress: progress },
            { merge: true }
        ).catch(err => console.error("Ошибка синхронизации:", err));
    }
}

function openLesson(type, parent, id) {
    let lesson = null;
    let totalLessons = 0;
    let currentIndex = 0;
    let allLessons = [];

    if (type === 'old') {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        sessionStorage.setItem(`scroll_${parent}`, scrollPos);
    }

    // Проверка Pro для книг
    if (type === 'book') {
        const book = booksData[parent];
        if (book) {
            const targetLesson = book.lessons.find(l => l.id === id);
            if (targetLesson && targetLesson.isPro && !isPro()) {
                showProModal();
                return;
            }
        }
    }

    lessonType = type;
    parentId = parent;
    currentLessonId = id;

    if (type === 'old') {
        allLessons = oldLessonsData[parent];
        currentIndex = allLessons.findIndex(l => l.id == id);
        lesson = allLessons[currentIndex];
        totalLessons = allLessons.length;
        currentSectionId = parent + '-page';
    }
    else if (type === 'book') {
        currentBookId = parent;
        allLessons = booksData[parent].lessons;
        currentIndex = allLessons.findIndex(l => l.id === id);
        lesson = allLessons[currentIndex];
        totalLessons = allLessons.length;
    }
    else if (type === 'topic') {
        const topic = findTopic(parent);
        if (topic) allLessons = topic.lessons;
        currentIndex = allLessons.findIndex(l => l.id === id);
        lesson = allLessons[currentIndex];
        totalLessons = allLessons.length;
    }

    if (!lesson) return;

    document.getElementById('lesson-title').innerText = lesson.title;
    document.getElementById('lesson-intro').innerText = lesson.desc || lesson.intro;
    document.getElementById('lesson-content').innerHTML = lesson.content;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const completeBtn = document.getElementById('complete-btn');

    if (type === 'old') {
        if(completeBtn) completeBtn.style.display = 'none';
    } else {
        if(completeBtn) completeBtn.style.display = 'block';
    }

    prevBtn.disabled = (currentIndex <= 0);
    prevBtn.onclick = () => openLesson(type, parent, allLessons[currentIndex - 1].id);

    if (currentIndex >= totalLessons - 1) {
        nextBtn.disabled = true;
        nextBtn.onclick = null;
    } else {
        const nextLesson = allLessons[currentIndex + 1];
        const isNextLocked = (type === 'book') && nextLesson.isPro && !isPro();

        nextBtn.disabled = false;
        if (isNextLocked) {
            nextBtn.onclick = () => showProModal();
        } else {
            nextBtn.onclick = () => openLesson(type, parent, nextLesson.id);
        }
    }

    if (autoSaveTimer) clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        saveProgressUpToCurrent(type, parent, id, allLessons);
    }, 1500);

    showPage('lesson-page');
}

async function goBackFromLesson() {
    const backBtn = document.getElementById('lesson-back-btn');
    if (backBtn && backBtn.dataset.clicked === 'true') return;
    if (backBtn) {
        backBtn.dataset.clicked = 'true';
        setTimeout(() => { backBtn.dataset.clicked = 'false'; }, 500);
    }
    if (autoSaveTimer) clearTimeout(autoSaveTimer);

    // 1. МГНОВЕННО переключаем экран
    if (lessonType === 'topic') {
        openTopic(parentId);
    }
    else if (lessonType === 'book' && currentBookId) {
        openBook(currentBookId);
    }
    else if (lessonType === 'old') {
        if (parentId === 'islam') showPage('islam-start-page');
        else if (parentId === 'family') showPage('family-page');
        else if (parentId === 'birth') showPage('birth-page');
        else if (parentId === 'loss') showPage('loss-page');
        else {
            const section = getSectionByLessonId(currentLessonId);
            if (section) showPage(section);
        }
        setTimeout(() => {
            const savedScroll = sessionStorage.getItem(`scroll_${parentId}`);
            if (savedScroll !== null) {
                window.scrollTo({ top: parseInt(savedScroll), behavior: 'instant' });
            }
        }, 50);
    }

    // 2. В ФОНЕ сохраняем прогресс (без await, чтобы не вешать кнопку)
    if (currentLessonId && currentUser) {
        let allLessons = [];
        if (lessonType === 'book' && currentBookId) allLessons = booksData[currentBookId].lessons;
        else if (lessonType === 'topic') {
            const topic = findTopic(parentId);
            if (topic) allLessons = topic.lessons;
        }
        if (allLessons.length > 0) {
            saveProgressUpToCurrent(lessonType, parentId, currentLessonId, allLessons);
        }
    }
}

function changeLesson(direction) {
    if(!currentLessonId) return;
    const order = sectionOrders[currentSectionId] || [];
    const idx = order.indexOf(currentLessonId);
    if (idx === -1) return;
    const newIdx = idx + direction;
    if (newIdx >= 0 && newIdx < order.length) {
        openLesson('old', currentSectionId.replace('-page', ''), order[newIdx]);
    }
}

function completeCurrentLesson() {
    if(!currentLessonId) return;
    if (autoSaveTimer) clearTimeout(autoSaveTimer);
    
    // Принудительно сохраняем текущий урок перед выходом
    if (currentUser) {
        let allLessons = [];
        if (lessonType === 'book' && currentBookId) allLessons = booksData[currentBookId].lessons;
        else if (lessonType === 'topic') {
            const topic = findTopic(parentId);
            if (topic) allLessons = topic.lessons;
        }
        if (allLessons.length > 0) {
            saveProgressUpToCurrent(lessonType, parentId, currentLessonId, allLessons);
        }
    }

    // Вызываем функцию возврата
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
            titleEl.innerText = `Профиль: ${currentUser.displayName || currentUser.email.split('@')[0]}`;
        } else {
            titleEl.innerText = 'Мой прогресс';
        }
    }

    // Если гость
    if (!currentUser) {
        profileEl.innerHTML = `
            <div class="important-block" style="text-align: center;">
                Войдите в аккаунт, чтобы сохранять прогресс и видеть его здесь.
                <br><br>
                <button onclick="openAuthModal()" style="background: var(--gold); color: var(--bg-color); border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; font-family: inherit;">
                    Войти
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
                    <h4 style="color: var(--text-dark); margin: 0;">${book.title}</h4>
                    <span style="font-size: 13px; color: var(--text-muted-dark); font-weight: bold;">${doneCount}/${book.lessons.length}</span>
                </div>
                <div class="progress-container" style="margin-top: 0;">
                    <div class="progress-bar" style="width: ${percent}%"></div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px; gap: 10px;">
                    <span style="font-size: 12px; color: var(--text-muted-dark); flex: 1; min-width: 0;">
                        ${lastLesson ? 'Остановились на: ' + lastLesson.title : 'Прогресс сохранён'}
                    </span>
                    <button onclick="${targetAction}" style="background: var(--bg-color); color: var(--gold); border: none; padding: 8px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; font-family: inherit; white-space: nowrap;">
                        Продолжить
                    </button>
                </div>
            </div>
        `;
    }

    // Если ничего не начато
    if (startedBooks === 0) {
        html = `<div class="important-block" style="text-align: center;">Вы ещё не начали обучение. Перейдите в раздел «Знания» и выберите книгу!</div>`;
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

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    const lessonId = urlParams.get('lesson');
    const fromProfile = urlParams.get('from') === 'profile';

    if (bookId) {
        if (fromProfile) window.isFromProfile = true;
        
        let attempts = 0;
        const checkAuth = setInterval(() => {
            attempts++;
            // Ждем, пока Firebase загрузит пользователя (до 3 секунд)
            if (typeof auth !== 'undefined' && auth !== null && auth.currentUser !== undefined) {
                clearInterval(checkAuth);
                if (lessonId) openLesson('book', bookId, lessonId);
                else openBook(bookId);
            } else if (attempts > 30) {
                clearInterval(checkAuth);
                if (lessonId) openLesson('book', bookId, lessonId);
                else openBook(bookId);
            }
        }, 100);
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
        setTimeout(() => {
            window.scrollTo({ top: parseInt(savedPos), behavior: 'instant' });
            sessionStorage.removeItem('catalog_scroll_pos');
        }, 50);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const knowledgePage = document.getElementById('knowledge-page');
    if (knowledgePage && knowledgePage.classList.contains('active')) restoreScroll();
});

// ===== АВТОРИЗАЦИЯ (Firebase) =====
function openAuthModal() {
    if (currentUser) {
        if(confirm(`Вы вошли как ${currentUser.displayName || currentUser.email}.\nХотите выйти?`)) {
            auth.signOut().then(() => { location.reload(); });
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
    if (!email || !pass) { showToast('Заполните поля!', 'error'); return; }
    if (!auth) { showToast('Ошибка Firebase', 'error'); return; }

    auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
            document.getElementById('auth-modal').classList.remove('active');
            showToast('Добро пожаловать!', 'success');
            setTimeout(() => location.reload(), 1000);
        })
        .catch(() => showToast('Неверная почта или пароль!', 'error'));
}

function registerUser() {
    const email = document.getElementById('reg-email').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();
    if (!email || !pass) { showToast('Заполните поля!', 'error'); return; }
    if (pass.length < 6) { showToast('Пароль от 6 символов!', 'error'); return; }
    if (!auth) { showToast('Ошибка Firebase', 'error'); return; }

    auth.createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
            userCredential.user.sendEmailVerification();
            document.getElementById('auth-modal').classList.remove('active');
            showToast('Регистрация успешна! Проверьте почту для подтверждения.', 'success');
            setTimeout(() => location.reload(), 2000);
        })
        .catch((error) => showToast('Ошибка: ' + error.message, 'error'));
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
        iconContainer.style.color = "#888";
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

        document.getElementById('set-user-email').innerText = "Загрузка...";
        document.getElementById('set-user-name-display').innerText = "Загрузка...";

        currentUser.reload().then(() => {
            const freshUser = firebase.auth().currentUser;
            if (freshUser) {
                document.getElementById('set-user-email').innerText = freshUser.email;
                document.getElementById('set-user-name-display').innerText = freshUser.displayName || "Не задано";
            }
        }).catch((error) => {
            console.error("Ошибка обновления:", error);
            document.getElementById('set-user-email').innerText = currentUser.email;
            document.getElementById('set-user-name-display').innerText = currentUser.displayName || "Не задано";
        });
    } else {
        loginView.style.display = 'block';
        accountView.style.display = 'none';
    }
}

function loginFromSettings() {
    const email = document.getElementById('set-login-email').value.trim();
    const pass = document.getElementById('set-login-pass').value.trim();

    if (!email || !pass) { showToast('Заполните поля!', 'error'); return; }
    if (!auth) { showToast('Ошибка Firebase', 'error'); return; }

    auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
            showToast('Добро пожаловать!', 'success');
            document.getElementById('account-settings-modal').classList.remove('active');
            setTimeout(() => location.reload(), 1000);
        })
        .catch(() => showToast('Неверная почта или пароль!', 'error'));
}

function logoutFromSettings() {
    if (confirm('Вы уверены, что хотите выйти?')) {
        auth.signOut().then(() => { location.reload(); });
    }
}

function saveNewName() {
    const newName = document.getElementById('set-new-name').value.trim();
    if (!newName) { showToast('Введите имя!', 'error'); return; }
    if (!currentUser) return;

    currentUser.updateProfile({ displayName: newName })
        .then(() => {
            showToast('Имя успешно изменено!', 'success');
            document.getElementById('set-user-name-display').innerText = newName;
            document.getElementById('set-new-name').value = '';

            const greetingEl = document.querySelector('.section-title');
            if (greetingEl && greetingEl.innerText.includes('Профиль:')) {
                greetingEl.innerText = `Профиль: ${newName}`;
            }
        })
        .catch((error) => showToast('Ошибка: ' + error.message, 'error'));
}

function saveNewEmail() {
    const newEmail = document.getElementById('set-new-email').value.trim();
    const pass = document.getElementById('set-email-pass').value.trim();

    if (!newEmail || !pass) { showToast('Заполните новую почту и текущий пароль!', 'error'); return; }
    if (!currentUser) return;

    const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, pass);

    currentUser.reauthenticateWithCredential(credential)
        .then(() => {
            return currentUser.verifyBeforeUpdateEmail(newEmail);
        })
        .then(() => {
            showToast('Письмо с подтверждением отправлено на новую почту!', 'success');
            document.getElementById('set-new-email').value = '';
            document.getElementById('set-email-pass').value = '';

            localStorage.setItem('pendingEmailChange', newEmail);
            localStorage.setItem('pendingPassword', pass);

            setTimeout(() => {
                document.getElementById('account-settings-modal').classList.remove('active');
            }, 2000);
        })
        .catch((error) => {
            if (error.code === 'auth/wrong-password') showToast('Неверный текущий пароль!', 'error');
            else showToast('Ошибка: ' + error.message, 'error');
        });
}

function saveNewPass() {
    const oldPass = document.getElementById('set-old-pass').value.trim();
    const newPass = document.getElementById('set-new-pass').value.trim();

    if (!oldPass || !newPass) { showToast('Заполните поля!', 'error'); return; }
    if (newPass.length < 6) { showToast('Новый пароль от 6 символов!', 'error'); return; }
    if (!currentUser) return;

    const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, oldPass);

    currentUser.reauthenticateWithCredential(credential)
        .then(() => currentUser.updatePassword(newPass))
        .then(() => {
            showToast('Пароль успешно изменен!', 'success');
            document.getElementById('set-old-pass').value = '';
            document.getElementById('set-new-pass').value = '';
        })
        .catch(() => showToast('Ошибка: неверный текущий пароль!', 'error'));
}

// ===== НАМАЗ И КИБЛА =====
let qiblaAngle = 0;
let todayPrayers = [];
let isGeolocationRequested = false;

let currentPrayerDate = new Date();
let userCoordinates = null;

function openQiblaModal() {
    const m = document.getElementById('qibla-modal');
    if (!m) return;
    m.classList.add('active');
    if (!isGeolocationRequested) {
        initPrayerAndQibla(true);
    } else {
        startCompass();
    }
}

function closeQiblaModal() {
    const m = document.getElementById('qibla-modal');
    if (m) m.classList.remove('active');
}

function openPrayerModal() {
    const m = document.getElementById('prayer-modal');
    if (!m) return;
    m.classList.add('active');
    currentPrayerDate = new Date();
    if (userCoordinates) fetchPrayerTimesForDate(currentPrayerDate);
}

async function initPrayerAndQibla(askGeo = false) {
    const nextNameEl = document.getElementById('next-prayer-name');
    const nextTimeEl = document.getElementById('next-prayer-time');
    const debugText = document.getElementById('gps-debug-text');

    if (debugText) debugText.innerText = "Запрос GPS...";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userCoordinates = { lat: position.coords.latitude, lng: position.coords.longitude };
                isGeolocationRequested = true;
                if (debugText) debugText.innerText = `Координаты: ${userCoordinates.lat.toFixed(4)}, ${userCoordinates.lng.toFixed(4)}`;

                fetchPrayerTimesForDate(new Date());
                fetchQibla(userCoordinates.lat, userCoordinates.lng);
            },
            (error) => {
                console.warn("GPS Ошибка:", error.message);
                if (debugText) debugText.innerText = "GPS заблокирован. Используем Москву.";
                userCoordinates = { lat: 55.7558, lng: 37.6173 };
                isGeolocationRequested = true;

                fetchPrayerTimesForDate(new Date());
                fetchQibla(userCoordinates.lat, userCoordinates.lng);
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        if (debugText) debugText.innerText = "Геолокация не поддерживается.";
        userCoordinates = { lat: 55.7558, lng: 37.6173 };
        fetchPrayerTimesForDate(new Date());
        fetchQibla(userCoordinates.lat, userCoordinates.lng);
    }
}

async function fetchPrayerTimesForDate(dateObj) {
    if (!userCoordinates) return;

    currentPrayerDate = dateObj;
    const nextNameEl = document.getElementById('next-prayer-name');
    const nextTimeEl = document.getElementById('next-prayer-time');
    const titleEl = document.getElementById('prayer-date-title');

    const dateStr = `${String(dateObj.getDate()).padStart(2, '0')}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${dateObj.getFullYear()}`;

    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const today = new Date();
    const isToday = dateObj.getDate() === today.getDate() && dateObj.getMonth() === today.getMonth() && dateObj.getFullYear() === today.getFullYear();

    if (titleEl) titleEl.innerText = isToday ? "Намазы сегодня" : `Намазы на ${dateObj.getDate()} ${months[dateObj.getMonth()]}`;

    try {
        const response = await fetch(`https://api.aladhan.com/v1/timings/${dateStr}?latitude=${userCoordinates.lat}&longitude=${userCoordinates.lng}&method=3`);
        const data = await response.json();

        if (data.code === 200) {
            const timings = data.data.timings;
            todayPrayers = [
                { name: 'Фаджр (Рассвет)', time: timings.Fajr },
                { name: 'Зухр (Полдень)', time: timings.Dhuhr },
                { name: 'Аср (После полудня)', time: timings.Asr },
                { name: 'Магриб (Закат)', time: timings.Maghrib },
                { name: 'Иша (Ночь)', time: timings.Isha }
            ];

            renderPrayerList();

            if (isToday) {
                const now = new Date();
                const currentTime = now.getHours() * 60 + now.getMinutes();
                let nextPrayer = todayPrayers.find(p => {
                    const [h, m] = p.time.split(':').map(Number);
                    return (h * 60 + m) > currentTime;
                });
                if (!nextPrayer) nextPrayer = { name: 'Фаджр', time: todayPrayers[0].time };

                if(nextNameEl) nextNameEl.innerText = nextPrayer.name.split(' ')[0];
                if(nextTimeEl) nextTimeEl.innerText = nextPrayer.time;
            }
        }
    } catch (error) {
        console.error("Ошибка загрузки намазов:", error);
    }
}

async function fetchQibla(lat, lng) {
    try {
        const qiblaRes = await fetch(`https://api.aladhan.com/v1/qibla/${lat}/${lng}`);
        const qiblaData = await qiblaRes.json();
        if (qiblaData.code === 200) {
            qiblaAngle = qiblaData.data.direction;
            startCompass();
        }
    } catch (error) {
        console.error("Ошибка загрузки Киблы:", error);
    }
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
    const mm = String(currentPrayerDate.getMonth() + 1).padStart(2, '0');
    const dd = String(currentPrayerDate.getDate()).padStart(2, '0');
    picker.value = `${yyyy}-${mm}-${dd}`;
    picker.showPicker();
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
    todayPrayers.forEach(p => {
        html += `
            <div style="display: flex; justify-content: space-between; background: rgba(255,255,255,0.1); padding: 10px 15px; border-radius: 8px; border: 1px solid rgba(212, 175, 55, 0.3);">
                <span style="color: #ddd; font-weight: 500;">${p.name}</span>
                <span style="color: var(--gold); font-weight: bold;">${p.time}</span>
            </div>
        `;
    });
    container.innerHTML = html;
}

function startCompass() {
    const compassDial = document.getElementById('compass-dial');
    const dirText = document.getElementById('qibla-direction-text');
    const angleText = document.getElementById('qibla-angle-text');

    if (angleText) angleText.innerText = Math.round(qiblaAngle);
    if (compassDial) compassDial.style.transform = `rotate(${qiblaAngle}deg)`;

    if (window.DeviceOrientationEvent === undefined) {
        if (dirText) dirText.innerText = "Компас доступен только на телефоне. Ориентируйтесь на угол Киблы.";
        return;
    }

    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', handleOrientation, true);
                }
            })
            .catch(console.error);
    } else {
        window.addEventListener('deviceorientationabsolute', handleOrientation, true);
        window.addEventListener('deviceorientation', handleOrientation, true);
    }

    function handleOrientation(event) {
        let heading = null;

        if (event.webkitCompassHeading) {
            heading = event.webkitCompassHeading;
        } else if (event.alpha !== null) {
            heading = 360 - event.alpha;
        }

        if (heading !== null) {
            if (compassDial) {
                let rotation = qiblaAngle - heading;
                if (rotation > 360) rotation -= 360;
                if (rotation < 0) rotation += 360;

                compassDial.style.transform = `rotate(${rotation}deg)`;
            }

            if (dirText) {
                let diff = ((qiblaAngle - heading + 540) % 360) - 180;
                if (Math.abs(diff) < 10) {
                    dirText.innerText = "Вы смотрите прямо на Киблу!";
                    dirText.style.color = "#4CAF50";
                } else {
                    dirText.innerText = "Поворачивайтесь, пока Кааба не совпадет с зеленой меткой";
                    dirText.style.color = "#ddd";
                }
            }
        }
    }
}

// Синхронное сохранение в localStorage при закрытии вкладки + флаг для досинхронизации
window.addEventListener('beforeunload', function () {
    if (!currentUser || !currentLessonId) return;

    let allLessons = [];
    if (lessonType === 'book' && currentBookId) allLessons = booksData[currentBookId].lessons;
    else if (lessonType === 'topic') {
        const topic = findTopic(parentId);
        if (topic) allLessons = topic.lessons;
    }

    if (allLessons.length === 0) return;

    try {
        const idForProgress = (lessonType === 'book' || lessonType === 'topic')
            ? parentId : currentSectionId;

        const idx = allLessons.findIndex(l => l.id === currentLessonId);
        if (idx === -1) return;

        let progress = getProgress();
        if (!progress[idForProgress]) progress[idForProgress] = { done: [], last: null };

        for (let i = 0; i <= idx; i++) {
            const lid = allLessons[i].id;
            if (!progress[idForProgress].done.includes(lid)) {
                progress[idForProgress].done.push(lid);
            }
        }
        progress[idForProgress].last = currentLessonId;

        localStorage.setItem(`amanah_progress_${currentUser.uid}`, JSON.stringify(progress));
        localStorage.setItem('amanah_progress_dirty', '1');
    } catch (e) {
        console.error("beforeunload save error:", e);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    const lessonId = urlParams.get('lesson');
    const fromProfile = urlParams.get('from') === 'profile';

    if (bookId) {
        if (fromProfile) window.isFromProfile = true;

        // Ждем, пока Firebase точно загрузит пользователя (до 3 секунд)
        let attempts = 0;
        const waitForAuth = setInterval(() => {
            attempts++;
            // Проверяем, что Firebase загружен и массив пользователей инициализирован
            if (typeof auth !== 'undefined' && auth !== null) {
                // Даем еще 300мс, чтобы local storage успел обновиться
                setTimeout(() => {
                    clearInterval(waitForAuth);
                    if (lessonId) openLesson('book', bookId, lessonId);
                    else openBook(bookId);
                }, 300);
            } else if (attempts > 30) {
                // Если через 3 секунды Firebase так и не ответил, все равно открываем
                clearInterval(waitForAuth);
                if (lessonId) openLesson('book', bookId, lessonId);
                else openBook(bookId);
            }
        }, 100);
    }
});
// Автоматическая загрузка намаза в шапку (с задержкой, чтобы не тормозило)
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('next-prayer-name')) {
        setTimeout(() => {
            // Запускаем загрузку, только если это не страница профиля/настроек (чтобы не тратить трафик зря)
            initPrayerAndQibla(false); 
        }, 1500); // Ждем 1.5 секунды после загрузки страницы
    }
});