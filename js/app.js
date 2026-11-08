// ===== НАВИГАЦИЯ =====
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
            // ВАЖНО: передаем 'book'
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
    const doneCount = progress.done.length;
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
                    <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="20" stroke="#d4af37" stroke-width="2.5"/><path d="M32 20V44M20 32H44" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round"/></svg>
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
        
        // ВАЖНО: передаем 'topic'
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
    const doneCount = progress.done.length;
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
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getSectionByLessonId(id) {
    for (const [section, ids] of Object.entries(sectionOrders)) {
        if (ids.includes(id)) return section;
    }
    return null;
}

function openLesson(type, parent, id) {
    let lesson = null;
    let totalLessons = 0;
    let currentIndex = 0;
    let allLessons = [];

    // ЖЕСТКАЯ ПРОВЕРКА НА PRO (только для книг)
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

    // ЗАПОМИНАЕМ КОНТЕКСТ
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

    // Выводим контент
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

    // --- НАСТРОЙКА КНОПОК НАВИГАЦИИ ---
    
    // 1. Кнопка "Назад" (внутри урока)
    prevBtn.disabled = (currentIndex <= 0);
    prevBtn.onclick = () => openLesson(type, parent, allLessons[currentIndex - 1].id);
    
    // 2. Кнопка "Далее" (внутри урока)
    if (currentIndex >= totalLessons - 1) {
        // Если это последний урок, отключаем кнопку
        nextBtn.disabled = true;
        nextBtn.onclick = null;
    } else {
        // Если есть следующий урок
        const nextLesson = allLessons[currentIndex + 1];
        const isNextLocked = (type === 'book') && nextLesson.isPro && !isPro();
        
        nextBtn.disabled = false;
        if (isNextLocked) {
            nextBtn.onclick = () => showProModal();
        } else {
            // ВОТ ЗДЕСЬ РАБОТАЕТ КНОПКА "ДАЛЕЕ"
            nextBtn.onclick = () => openLesson(type, parent, nextLesson.id);
        }
    }

    // --- АВТОСОХРАНЕНИЕ ---
    if (typeof autoSaveTimer !== 'undefined' && autoSaveTimer) clearTimeout(autoSaveTimer);

    autoSaveTimer = setTimeout(() => {
        let idForProgress = (type === 'book') ? currentBookId : (type === 'topic' ? parentId : currentSectionId);
        
        if (type === 'book' || type === 'topic') {
            const idx = allLessons.findIndex(l => l.id === currentLessonId);
            if (idx !== -1) {
                for (let i = 0; i <= idx; i++) {
                    markLessonDone(idForProgress, allLessons[i].id);
                }
            }
        } else {
            markLessonDone(idForProgress, currentLessonId);
        }
    }, 1500);

    showPage('lesson-page');
}



// ЭТА ФУНКЦИЯ ТЕПЕРЬ РАБОТАЕТ ИДЕАЛЬНО (ВОЗВРАЩАЕТ ВСЕГДА ТУДА, ОТКУДА ПРИШЛИ)
function goBackFromLesson() {
    // 1. Отменяем таймер
    if (autoSaveTimer) clearTimeout(autoSaveTimer);

    // 2. ПРИНУДИТЕЛЬНО СОХРАНЯЕМ ПРОГРЕСС, если мы были в уроке
    if (currentLessonId && lessonType !== 'old') {
        let idForProgress = (lessonType === 'book') ? currentBookId : parentId;
        let allLessons = [];

        if (lessonType === 'book') {
            allLessons = booksData[currentBookId].lessons;
        } else if (lessonType === 'topic') {
            const topic = findTopic(parentId);
            if (topic) allLessons = topic.lessons;
        }

        // Сохраняем все уроки до текущего включительно
        if (allLessons.length > 0) {
            const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
            if (currentIndex !== -1) {
                for (let i = 0; i <= currentIndex; i++) {
                    markLessonDone(idForProgress, allLessons[i].id);
                }
            }
        }
    }

    // 3. Возвращаемся назад (и интерфейс обновится с новыми галочками)
    if (lessonType === 'topic') {
        openTopic(parentId); 
    } 
    else if (lessonType === 'book' && currentBookId) {
        openBook(currentBookId);
    } 
    else if (lessonType === 'old') {
        showPage(currentSectionId);
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
    
    // Отменяем таймер (чтобы не сработал дважды)
    if (autoSaveTimer) clearTimeout(autoSaveTimer);

    // Мгновенно сохраняем всё, что до текущего
    let allLessons = [];
    let idForProgress = (lessonType === 'book') ? currentBookId : parentId;

    if (lessonType === 'book') {
        allLessons = booksData[currentBookId].lessons;
    } else if (lessonType === 'topic') {
        const topic = findTopic(parentId);
        if (topic) allLessons = topic.lessons;
    }

    if (allLessons.length > 0) {
        const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
        if (currentIndex !== -1) {
            for (let i = 0; i <= currentIndex; i++) {
                markLessonDone(idForProgress, allLessons[i].id);
            }
        }
    }

    // Возвращаемся назад
    goBackFromLesson();
}



// ===== РЕНДЕР ПРОФИЛЯ =====
function renderProfile() {
    let html = '';
    let progress = getProgress();
    let totalDone = 0;

    for (const [bookId, book] of Object.entries(booksData)) {
        const bProgress = progress[bookId] || { done: [], last: null };
        const doneCount = bProgress.done.length;
        totalDone += doneCount;
        const percent = Math.round((doneCount / book.lessons.length) * 100);

        html += `
            <div class="block-card" style="margin-bottom: 15px; padding: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <h4 style="color: var(--text-dark); margin: 0;">${book.title}</h4>
                    <span style="font-size: 13px; color: var(--text-muted-dark);">${doneCount}/${book.lessons.length}</span>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${percent}%"></div>
                </div>
                ${bProgress.last ? `<p style="font-size: 12px; margin-top: 8px; color: var(--text-muted-dark);">Последний урок: ${bProgress.last}</p>` : ''}
            </div>
        `;
    }

    if(totalDone === 0) {
        html = `<div class="important-block" style="text-align: center;">Вы еще не начали обучение. Перейдите в раздел "Знания" и выберите книгу!</div>` + html;
    }

    document.getElementById('profile-content').innerHTML = html;
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
