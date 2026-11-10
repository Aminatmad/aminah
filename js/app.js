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
function getProgress() {
    let p = localStorage.getItem('amanah_progress');
    return p ? JSON.parse(p) : {};
}

function saveProgress(data) {
    localStorage.setItem('amanah_progress', JSON.stringify(data));
}

function isPro() {
    return localStorage.getItem('amanah_pro') === 'true';
}

function activatePro() {
    localStorage.setItem('amanah_pro', 'true');
    closeProModal();
    if(currentBookId) {
        openBook(currentBookId);
    }
    alert('PRO активирован! Все уроки теперь доступны.');
}

function showProModal() {
    document.getElementById('pro-modal').classList.add('active');
}

function closeProModal() {
    document.getElementById('pro-modal').classList.remove('active');
}

function markLessonDone(bookId, lessonId) {
    let progress = getProgress();
    if(!progress[bookId]) progress[bookId] = { done: [], last: null };
    if(!progress[bookId].done.includes(lessonId)) {
        progress[bookId].done.push(lessonId);
    }
    progress[bookId].last = lessonId;
    saveProgress(progress);
}

// ===== ОТКРЫТИЕ КНИГ =====
function openBook(id) {
    currentBookId = id;
    const book = booksData[id];
    if(!book) return;

    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-author').innerText = book.author;
   
    // ПРОВЕРКА: ОТКУДА МЫ ПРИШЛИ
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
        if(isLocked) {
            action = `onclick="showProModal()"`;
        } else {
            action = `onclick="openLesson('book', ${id}, '${lesson.id}')"`;
        }

        lessonsHtml += `
            <div class="lesson-item" ${action}>
                <div class="lesson-item-info">
                    <h4>${index + 1}. ${lesson.title}</h4>
                    <p>${lesson.desc}</p>
                    ${lesson.isPro ? '<span class="lesson-badge badge-pro">PRO</span>' : '<span class="lesson-badge badge-free">FREE</span>'}
                </div>
                <div class="lesson-status ${isDone ? 'done' : ''}">
                    ${lesson.isPro ? '🔒' : (isDone ? '✓' : '▶')}
                </div>
            </div>
        `;
    });

    const total = book.lessons.length;
    const doneCount = progress.done.filter(id => book.lessons.some(l => l.id === id)).length;
    const percent = Math.round((doneCount / total) * 100);
   
    lessonsHtml = `
        <div class="progress-container" style="margin-bottom: 20px;">
            <div class="progress-bar" style="width: ${percent}%"></div>
        </div>
        <p style="font-size: 14px; margin-bottom: 15px; color: var(--text-muted-dark);">Пройдено: ${doneCount} из ${total} (${percent}%)</p>
    ` + lessonsHtml;

    document.getElementById('book-lessons-list').innerHTML = lessonsHtml;
    showPage('book-page');
}

// ===== ФУНКЦИИ ДЛЯ РАЗДЕЛОВ ЗНАНИЙ (Акыда, Фикх, Сира) =====
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
    const percent = Math.round((doneCount / total) * 100);
   
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

function goBackFromContent() {
    showPage('section-page');
}

// ===== УРОКИ =====
function showPage(pageId) {
    const page = document.getElementById(pageId);
    if (!page) return;

    document.querySelectorAll('.page-section').forEach(p => {
        p.classList.remove('active');
    });
    page.classList.add('active');

    if (pageId === 'knowledge-page') {
        restoreScroll();
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function getSectionByLessonId(id) {
    for (const [section, ids] of Object.entries(sectionOrders)) {
        if (ids.includes(id)) return section;
    }
    return null;
}

function saveProgressUpToCurrent(type, parent, currentId, allLessons) {
    let idForProgress = (type === 'book') ? parent : (type === 'topic' ? parent : currentSectionId);
   
    if (type === 'book' || type === 'topic') {
        const idx = allLessons.findIndex(l => l.id === currentId);
        if (idx !== -1) {
            for (let i = 0; i <= idx; i++) {
                markLessonDone(idForProgress, allLessons[i].id);
            }
        }
    } else {
        markLessonDone(idForProgress, currentId);
    }
}

function openLesson(type, parent, id) {
    let lesson = null;
    let totalLessons = 0;
    let currentIndex = 0;
    let allLessons = [];

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

function goBackFromLesson() {
    if (autoSaveTimer) clearTimeout(autoSaveTimer);

    if (currentLessonId) {
        let allLessons = [];
        if (lessonType === 'book') {
            allLessons = booksData[currentBookId].lessons;
        } else if (lessonType === 'topic') {
            const topic = findTopic(parentId);
            if (topic) allLessons = topic.lessons;
        }

        if (allLessons.length > 0) {
            saveProgressUpToCurrent(lessonType, parentId, currentLessonId, allLessons);
        }
    }

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
    goBackFromLesson();
}

// ===== РЕНДЕР ПРОФИЛЯ =====
function renderProfile() {
    let html = '';
    let progress = getProgress();
    let totalDone = 0;

    for (const [bookId, book] of Object.entries(booksData)) {
        const bProgress = progress[bookId] || { done: [], last: null };
       
        const validDoneIds = book.lessons.map(l => l.id);
        const doneCount = bProgress.done.filter(id => validDoneIds.includes(id)).length;
       
        totalDone += doneCount;
        const percent = Math.round((doneCount / book.lessons.length) * 100);

        let targetAction = `window.location.href='catalog.html?book=${bookId}&from=profile'`;
        let btnText = "Начать";
       
        if (bProgress.last && validDoneIds.includes(bProgress.last)) {
            targetAction = `window.location.href='catalog.html?book=${bookId}&lesson=${bProgress.last}&from=profile'`;
            btnText = "Продолжить";
        }

        html += `
            <div class="block-card" style="margin-bottom: 15px; padding: 15px; display: flex; flex-direction: column; gap: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="color: var(--text-dark); margin: 0;">${book.title}</h4>
                    <span style="font-size: 13px; color: var(--text-muted-dark); font-weight: bold;">${doneCount}/${book.lessons.length}</span>
                </div>
               
                <div class="progress-container" style="margin-top: 0;">
                    <div class="progress-bar" style="width: ${percent}%"></div>
                </div>
               
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
                    <span style="font-size: 12px; color: var(--text-muted-dark);">
                        ${bProgress.last && validDoneIds.includes(bProgress.last) ? 'Последний урок: ' + bProgress.last : ''}
                    </span>
                    <button onclick="${targetAction}" style="background: var(--bg-color); color: var(--gold); border: none; padding: 8px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; font-family: inherit;">
                        ${btnText}
                    </button>
                </div>
            </div>
        `;
    }

    if(totalDone === 0) {
        html = `<div class="important-block" style="text-align: center;">Вы еще не начали обучение. Перейдите в раздел "Знания" и выберите книгу!</div>` + html;
    }

    const profileEl = document.getElementById('profile-content');
    if (profileEl) {
        profileEl.innerHTML = html;
    }
}

const originalShowPage = showPage;
showPage = function(pageId) {
    if(pageId === 'profile-page') {
        renderProfile();
    }
    originalShowPage(pageId);
};

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('quiz-option')) {
        let parent = e.target.parentElement;
        parent.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});

// ===== АВТОЗАПУСК ИЗ ПРОФИЛЯ =====
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    const lessonId = urlParams.get('lesson');
    const fromProfile = urlParams.get('from') === 'profile';

    if (bookId) {
        if (fromProfile) {
            window.isFromProfile = true;
        }
       
        if (lessonId) {
            openLesson('book', bookId, lessonId);
        } else {
            openBook(bookId);
        }
    }
});

// ===== СОХРАНЕНИЕ И ВОССТАНОВЛЕНИЕ ПОЗИЦИИ СКРОЛЛА =====
function saveScrollAndOpenBook(bookId) {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    sessionStorage.setItem('catalog_scroll_pos', scrollPos);
    openBook(bookId);
}

function restoreScroll() {
    const savedPos = sessionStorage.getItem('catalog_scroll_pos');
    if (savedPos !== null) {
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(savedPos),
                behavior: 'instant'
            });
            sessionStorage.removeItem('catalog_scroll_pos');
        }, 50);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const knowledgePage = document.getElementById('knowledge-page');
    if (knowledgePage && knowledgePage.classList.contains('active')) {
        restoreScroll();
    }
});

// ===== НАМАЗ И КИБЛА =====
let qiblaAngle = 0;
let deviceHeading = 0;

function openQiblaModal() { document.getElementById('qibla-modal').classList.add('active'); }
function closeQiblaModal() { document.getElementById('qibla-modal').classList.remove('active'); }

async function initPrayerAndQibla() {
    const nextNameEl = document.getElementById('next-prayer-name');
    const nextTimeEl = document.getElementById('next-prayer-time');
   
    // Функция для загрузки данных (чтобы не дублировать код)
    const fetchTimes = async (lat, lng) => {
        const today = new Date();
        const dateStr = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;

        try {
            const response = await fetch(`https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lng}&method=3`);
            const data = await response.json();
           
            if (data.code === 200) {
                const timings = data.data.timings;
                const now = new Date();
                const currentTime = now.getHours() * 60 + now.getMinutes();
               
                const prayers = [
                    { name: 'Фаджр', time: timings.Fajr },
                    { name: 'Зухр', time: timings.Dhuhr },
                    { name: 'Аср', time: timings.Asr },
                    { name: 'Магриб', time: timings.Maghrib },
                    { name: 'Иша', time: timings.Isha }
                ];

                let nextPrayer = prayers.find(p => {
                    const [h, m] = p.time.split(':').map(Number);
                    return (h * 60 + m) > currentTime;
                });

                if (!nextPrayer) nextPrayer = { name: 'Фаджр', time: timings.Fajr };

                if(nextNameEl) nextNameEl.innerText = nextPrayer.name;
                if(nextTimeEl) nextTimeEl.innerText = nextPrayer.time;
            }

            const qiblaRes = await fetch(`https://api.aladhan.com/v1/qibla/${lat}/${lng}`);
            const qiblaData = await qiblaRes.json();
            if (qiblaData.code === 200) {
                qiblaAngle = qiblaData.data.direction;
                startCompass();
            }
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    };

    // 1. Пытаемся получить GPS
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => fetchTimes(position.coords.latitude, position.coords.longitude),
            () => {
                // 2. ЕСЛИ GPS ЗАПРЕЩЕН ИЛИ НЕ РАБОТАЕТ (например, на ПК) - ставим координаты Москвы
                console.log("GPS недоступен, используем координаты по умолчанию (Москва)");
                fetchTimes(55.7558, 37.6173); 
            }
        );
    } else {
        // Если геолокация вообще не поддерживается
        fetchTimes(55.7558, 37.6173);
    }
}


function startCompass() {
    const compassDial = document.getElementById('compass-dial');
    const qiblaNeedle = document.getElementById('needle-qibla');
    const dirText = document.getElementById('qibla-direction-text');
    const angleText = document.getElementById('qibla-angle-text');

    if (angleText) angleText.innerText = Math.round(qiblaAngle);

    // 1. ФИКСИРУЕМ СТРЕЛКУ КИБЛЫ НА НУЖНОМ УГЛЕ
    if (qiblaNeedle) {
        qiblaNeedle.style.transform = `rotate(${qiblaAngle}deg)`;
    }

    // Если нет датчика (ПК)
    if (window.DeviceOrientationEvent === undefined) {
        if (dirText) dirText.innerText = "Компас доступен только на телефоне.";
        return;
    }

    window.addEventListener('deviceorientationabsolute', handleOrientation, true);
    window.addEventListener('deviceorientation', handleOrientation, true);

    function handleOrientation(event) {
        let heading = null;
        
        if (event.webkitCompassHeading) {
            heading = event.webkitCompassHeading;
        } else if (event.alpha !== null) {
            heading = 360 - event.alpha;
        }

        if (heading !== null) {
            // 2. ВРАЩАЕМ ТОЛЬКО ШКАЛУ
            // Если мы повернулись на Восток (heading = 90), шкала должна крутиться на -90
            if (compassDial) {
                compassDial.style.transform = `rotate(${-heading}deg)`;
            }

            // Текстовая подсказка
            if (dirText) {
                // Разница между направлением телефона и Киблой
                let diff = Math.abs(qiblaAngle - heading);
                // Если разница близка к 0 или 360
                if (diff < 10 || diff > 350) {
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
