/* ============================================================
   СИРА · интерактивная карта
   • Адаптивный вид урока: в рамке карты (широкий экран) / на весь
     экран телефона (узкий экран), кнопка «Назад» возвращает карту.
   • Фильм главы 1 строится из ВСЕГО лонгрида: титры идут от начала
     до конца текста, длительность кадра зависит от его длины.
   • Fullscreen для видео-плеера (нативный API + CSS-fallback).
   • Премиум / вход и сохранение прогресса не зависят от раскладки.

   Переиспользует из js/app.js: T, showToast, currentUser, getProgress,
   recordProgress, isPro, activatePro, openAuthModal.
   Контент: js/sira-content.js (SIRA_POINTS, SIRA_CHAPTERS, SIRA_CINEMA).
   ============================================================ */
(function (window, document) {
    'use strict';

    var NS = 'http://www.w3.org/2000/svg';
    var TOTAL = 25;
    var STORE_KEY = 'sira';

    /* Настройки фильма: сколько символов «озвучивается» за секунду и
       границы длительности одного кадра. Итоговая длительность равна
       времени, нужному для полного прочтения всего лонгрида. */
    var FILM_CPS = 22;
    var MIN_FRAME_MS = 2600;
    var MAX_FRAME_MS = 11000;
    var CHUNK_CHARS = 150;
    var NARROW_MAX = 768;

    var activeIndex = 0;
    var accessIndex = 0;
    var mode = 'read';
    var accessKind = 'premium';
    var lastLen = 0;

    /* Состояние адаптивного вида урока */
    var lessonOpen = false;
    var lastNarrow = null;
    var openTimer = null;
    var closeTimer = null;

    /* Состояние фильма */
    var filmScript = [];
    var filmTotalMs = 0;
    var cinemaTimer = null;
    var cinemaPlayed = false;
    var frameIndex = 0;

    /* Состояние полноэкранного видео */
    var fsOriginalParent = null;
    var fsNextSibling = null;
    var fsPending = false;
    var fsWatchdog = null;
    var lastFsExitTs = 0;

    function t(key, vars, fallback) {
        return (typeof window.T === 'function') ? window.T(key, vars, fallback)
            : (fallback != null ? fallback : key);
    }

    function lang() {
        return (window.I18N && typeof window.I18N.getLang === 'function')
            ? window.I18N.getLang() : 'ru';
    }

    // Подставляет язык из объекта { ru, en, ar } (как L() в app.js)
    function pick(value) {
        if (value == null) return '';
        if (typeof value === 'string') return value;
        return value[lang()] || value.ru || value.en || Object.keys(value).map(function (k) { return value[k]; })[0] || '';
    }

    function pointName(i) {
        var points = window.SIRA_POINTS;
        return (points && points[i]) ? pick(points[i]) : (t('sira.event', null, 'Событие') + ' ' + (i + 1));
    }

    function chapter(n) {
        return window.SIRA_CHAPTERS ? window.SIRA_CHAPTERS[n] : null;
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

    function pad(n) { return n < 10 ? '0' + n : String(n); }
    function isNarrow() { return window.innerWidth <= NARROW_MAX; }
    function lessonView() { return document.getElementById('sira-lesson-view'); }
    function mapCard() { return document.getElementById('sira-map-card'); }

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
                'aria-label': t('sira.event', null, 'Событие') + ' ' + (i + 1) + ' · ' + pointName(i)
            });

            var tip = svg('title');
            tip.textContent = pad(i + 1) + ' · ' + pointName(i);
            g.appendChild(tip);

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

        var progressPath = document.getElementById('sira-route-progress');
        if (progressPath) {
            var maxDone = -1;
            done.forEach(function (d) { var n = Number(d); if (!isNaN(n) && n > maxDone) maxDone = n; });
            progressPath.style.strokeDasharray = maxDone >= 0
                ? ((step * (maxDone + 1)).toFixed(1) + ' ' + len.toFixed(1))
                : ('0 ' + len.toFixed(1));
        }
    }

    /* ---------- Отрисовка подписей (в т.ч. при смене языка) ---------- */
    function render() {
        buildMarkers();
        var doneCount = getDone().length;
        var badge = document.getElementById('sira-progress-value');
        if (badge) badge.textContent = t('sira.progress', { done: doneCount }, 'Изучено: ' + doneCount + ' из 25');

        var title = document.getElementById('sira-lesson-title');
        if (title) title.textContent = pad(activeIndex + 1) + ' · ' + pointName(activeIndex);
        var num = document.getElementById('sira-lesson-num');
        if (num) num.textContent = String(activeIndex + 1);
        var readText = document.getElementById('sira-read-text');
        if (readText) readText.innerHTML = readHtml(activeIndex);
        var btn = document.getElementById('sira-studied-btn');
        if (btn) {
            var done = getDone().indexOf(String(activeIndex)) !== -1;
            btn.classList.toggle('is-done', done);
            btn.textContent = done ? t('sira.doneBadge', null, 'Изучено') : t('sira.studied', null, 'Я изучил это');
        }

        var accessTitle = document.getElementById('sira-access-title');
        if (accessTitle) {
            accessTitle.textContent = accessKind === 'guest'
                ? t('sira.login.title', null, 'Войдите в профиль')
                : t('sira.premium.title', null, 'Откройте всю Сиру');
        }
        var accessBadge = document.getElementById('sira-access-badge');
        if (accessBadge) accessBadge.hidden = accessKind === 'guest';
        var accessPoint = document.getElementById('sira-access-point');
        if (accessPoint) accessPoint.textContent = pad(accessIndex + 1) + ' · ' + pointName(accessIndex);

        var film = document.getElementById('sira-cinema-film');
        if (film) film.textContent = t('sira.cinema.film', null, 'Кинопрезентация · Год Слона');

        // Смена языка меняет и сам лонгрид — пересобираем фильм заново.
        if (lessonOpen && isFilmChapter()) prepareCinema();
        updatePlayLabel();
        updateAudioNote();
        updateFsButtons();
    }

    function readHtml(i) {
        var ch = chapter(i + 1);
        if (ch && ch.read) return pick(ch.read);
        return '<p class="sira-lead">' + t('sira.placeholder', { n: i + 1 }, 'Здесь будет история события №' + (i + 1)) + '</p>';
    }

    function isFilmChapter() {
        var ch = chapter(activeIndex + 1);
        return !!(ch && ch.cinema);
    }

    /* ============================================================
       АДАПТИВНЫЙ ВИД УРОКА
       ============================================================ */
    function mountLesson(narrow) {
        var view = lessonView();
        var home = mapCard();
        if (!view) return;
        if (narrow) {
            // Телефон: отдельный полноэкранный вид на весь экран.
            if (view.parentNode !== document.body) document.body.appendChild(view);
            view.classList.add('is-fullscreen');
            document.documentElement.classList.add('sira-scroll-lock');
        } else {
            // Компьютер / планшет: урок в тех же границах, что и карта.
            if (home && view.parentNode !== home) home.appendChild(view);
            view.classList.remove('is-fullscreen');
            document.documentElement.classList.remove('sira-scroll-lock');
        }
    }

    function syncMount() {
        if (!lessonOpen) return;
        var n = isNarrow();
        if (n === lastNarrow) return;
        // Перед переносом узла корректно закрываем полноэкранное видео.
        if (isFsActive()) exitFs(true);
        lastNarrow = n;
        mountLesson(n);
    }

    function openLessonFlow(i) {
        // На широком экране карта плавно исчезает ВНУТРИ рамки; на телефоне
        // полноэкранный вид открывается почти сразу (рамка всё равно не видна).
        var card = mapCard();
        if (card && !isNarrow()) card.classList.add('is-lesson');
        clearTimeout(openTimer);
        openTimer = setTimeout(function () { openLessonNow(i); }, isNarrow() ? 120 : 360);
    }

    function openLessonNow(i) {
        clearTimeout(closeTimer);
        fillLesson(i);
        setMode('read');
        lessonOpen = true;
        lastNarrow = isNarrow();
        mountLesson(lastNarrow);
        var view = lessonView();
        if (view) {
            view.classList.remove('is-closing');
            view.classList.add('is-open');
        }
        var scroll = document.getElementById('sira-lesson-scroll');
        if (scroll) scroll.scrollTop = 0;
    }

    function closeLesson() {
        if (!lessonOpen) return;
        lessonOpen = false;
        clearTimeout(openTimer);
        stopCinema();
        pauseAudio();
        if (isFsActive()) exitFs(true);

        var card = mapCard();
        if (card) card.classList.remove('is-lesson'); // карта проявляется обратно
        document.documentElement.classList.remove('sira-scroll-lock');

        var view = lessonView();
        if (view) view.classList.add('is-closing');
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function () {
            if (!view) return;
            view.classList.remove('is-open', 'is-closing', 'is-fullscreen');
            var home = mapCard();
            if (home && view.parentNode !== home) home.appendChild(view);
        }, 300);
    }

    function anyOverlayOpen() {
        if (lessonOpen) return true;
        var m = document.getElementById('sira-access-modal');
        return !!(m && m.classList.contains('active'));
    }

    function closeAll() {
        closeLesson();
        var m = document.getElementById('sira-access-modal');
        if (m && m.classList.contains('active') && !m.classList.contains('is-closing')) {
            m.classList.add('is-closing');
            setTimeout(function () { m.classList.remove('active', 'is-closing'); }, 230);
        }
    }

    /* ============================================================
       НАПОЛНЕНИЕ УРОКА
       ============================================================ */
    function fillLesson(i) {
        activeIndex = i;

        var num = document.getElementById('sira-lesson-num');
        if (num) num.textContent = String(i + 1);
        var title = document.getElementById('sira-lesson-title');
        if (title) title.textContent = pad(i + 1) + ' · ' + pointName(i);
        var readText = document.getElementById('sira-read-text');
        if (readText) readText.innerHTML = readHtml(i);

        var done = getDone().indexOf(String(i)) !== -1;
        var btn = document.getElementById('sira-studied-btn');
        if (btn) {
            btn.classList.toggle('is-done', done);
            btn.textContent = done ? t('sira.doneBadge', null, 'Изучено') : t('sira.studied', null, 'Я изучил это');
        }
        var note = document.getElementById('sira-studied-note');
        if (note) note.textContent = isGuest() ? t('sira.guestSave', null, '') : '';

        setupAudio(i);
        applyWatchMode();
    }

    function setMode(next) {
        mode = next;
        var tabs = document.querySelectorAll('#sira-lesson-view .sira-tab');
        tabs.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-mode') === mode); });
        var watch = document.getElementById('sira-panel-watch');
        var read = document.getElementById('sira-panel-read');
        if (watch) watch.hidden = mode !== 'watch';
        if (read) read.hidden = mode !== 'read';
        if (mode !== 'watch') {
            pauseAudio();
            var cinema = document.getElementById('sira-cinema');
            if (cinema && cinema.classList.contains('is-playing')) stopCinema();
        }
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

    /* ============================================================
       ФИЛЬМ ГЛАВЫ 1 · сценарий из ВСЕГО лонгрида
       ============================================================ */

    /* 13 сюжетных сцен. У каждой — своё «настроение» неба (mood) и
       собственный набор силуэтов (см. SCENE_ART ниже). */
    var SCENE_MOOD = {
        night: 'night', desert: 'dawn', caravan: 'dawn', sana: 'day',
        army: 'dusk', elephant: 'day', kaaba: 'golden', pray: 'golden',
        halt: 'dusk', storm: 'storm', light: 'golden', birth: 'night',
        calendar: 'dawn'
    };

    var FALLBACK_SCENES = [
        'night', 'desert', 'caravan', 'sana', 'army', 'elephant',
        'kaaba', 'pray', 'halt', 'storm', 'light', 'birth', 'calendar'
    ];

    /* Порядок сцен ВНУТРИ каждого раздела лонгрида (7 заголовков h4 +
       вступление). Индекс раздела считается по количеству h4, поэтому
       работает одинаково для RU / EN / AR. */
    var SECTION_SCENES = [
        ['night', 'desert'],                              // 0 — вступление
        ['desert', 'caravan', 'kaaba', 'night'],          // 1 — Аравия на пороге события
        ['sana', 'army', 'elephant', 'caravan'],          // 2 — Абраха и церковь аль-Каллис
        ['pray', 'kaaba', 'caravan', 'halt'],             // 3 — «У Дома есть Господь»
        ['halt', 'elephant', 'storm', 'storm'],           // 4 — Слоны, которые не пошли
        ['pray', 'kaaba', 'calendar', 'night'],           // 5 — Что читает в этом событии Сира
        ['birth', 'birth', 'night', 'caravan'],           // 6 — Рождение
        ['calendar', 'kaaba', 'night']                    // 7 — Родословная и место в истории
    ];

    /* Ключевые слова (RU / EN / AR) уточняют сцену под конкретный титр.
       Слова подобраны достаточно специфичными, чтобы не перебивать
       плавный ряд раздела на каждом кадре. */
    var SCENE_KEYWORDS = [
        { name: 'storm', kw: ['абабиль', 'сиджжиль', 'камнями', 'обожжённой глины', 'буря', 'вихрь', 'аль-филь', 'листве', 'изъеденной', 'ababil', 'sijjil', 'baked clay', 'storm', 'surah al-fil', 'eaten straw', 'أبابيل', 'سجيل', 'عصف مأكول', 'عاصفة', 'سورة الفيل'] },
        { name: 'birth', kw: ['родился', 'рождение', 'понедельник', 'амина', 'замзам', 'акик', 'младенец', 'был рождён', 'born', 'birth', 'monday', 'aminah', 'zamzam', 'newborn', 'وُلد', 'الميلاد', 'الاثنين', 'آمنة', 'زمزم', 'مولود'] },
        { name: 'sana', kw: ['сана', 'абраха', 'каллис', 'церковь', 'негус', 'зу нувас', 'sana', 'abraha', 'qullays', 'church', 'negus', 'صنعاء', 'أبرهة', 'القليس', 'كنيسة', 'النجاشي'] },
        { name: 'pray', kw: ['абдуль-мутталиб', 'мольб', 'дуа', 'молит', 'таваккуль', 'привяжи верблюдицу', 'abdul-muttalib', 'prayer', 'supplication', 'tawakkul', 'tie your camel', 'عبد المطلب', 'الدعاء', 'التوكل', 'اعقلها'] },
        { name: 'halt', kw: ['мухассар', 'остановились', 'не пошли', 'отказался идти', 'пятился', 'muhassar', 'halted', 'would not advance', 'refused', 'kneel', 'محسر', 'وقفت الأفيلة', 'لم تتقدم', 'برك'] },
        { name: 'light', kw: ['вспышк', 'озар', 'свет, озаривший', 'луч', 'во свете', 'flash of light', 'radiance', 'rays of light', 'النور', 'أضاء', 'الشعاع'] },
        { name: 'calendar', kw: ['летоисчислен', 'хиджр', 'умар', 'календар', 'родослов', 'аднан', 'ахмад', 'печать пророков', 'источники и примечания', 'hijri', 'calendar', 'umar', 'lineage', 'adnan', 'ahmad', 'seal of the prophets', 'sources and notes', 'التأريخ', 'التاريخ الهجري', 'عمر', 'النسب', 'عدنان', 'أحمد', 'خاتم النبيين', 'المصادر'] },
        { name: 'army', kw: ['войско', 'копь', 'знамён', 'отряд', 'выступил', 'army', 'troops', 'spears', 'banners', 'marched', 'جيش', 'الرماح', 'الرايات', 'تحرك الجيش'] },
        { name: 'elephant', kw: ['боевых слон', 'слоны', 'махмуд', 'хобот', 'бивн', 'war elephants', 'elephants', 'mahmud', 'trunk', 'أفيال', 'الفيلة', 'محمود', 'الخرطوم'] },
        { name: 'caravan', kw: ['караван', 'верблюд', 'торгов', 'вьюк', 'caravan', 'camel', 'trade route', 'القافلة', 'الإبل', 'التجارة'] },
        { name: 'kaaba', kw: ['кааба', 'аль-байт', 'кибл', 'завес', 'чёрный камень', 'kaaba', 'qiblah', 'curtain', 'الكعبة', 'البيت الحرام', 'القبلة', 'أستار'] },
        { name: 'desert', kw: ['пустын', 'песк', 'бедуин', 'дюн', 'племён', 'desert', 'sand dunes', 'bedouin', 'tribes', 'الصحراء', 'الرمال', 'البدو', 'الكثبان'] },
        { name: 'night', kw: ['звёзд', 'ноч', 'шестой век', 'джахилий', 'тьме', 'night sky', 'stars', 'sixth century', 'jahiliyyah', 'النجوم', 'الليل', 'القرن السادس', 'الجاهلية'] }
    ];

    function sceneForText(text, base) {
        var low = String(text).toLowerCase();
        var best = base, bestScore = 0;
        SCENE_KEYWORDS.forEach(function (g) {
            var score = g.name === base ? 0.5 : 0; // премия за плавность ряда раздела
            g.kw.forEach(function (k) { if (low.indexOf(k) !== -1) score++; });
            if (score > bestScore) { bestScore = score; best = g.name; }
        });
        // Одиночное упоминание («рождение», «слон») не должно дёргать кадр:
        // перебиваем сцену раздела только при уверенном совпадении (2+ слова).
        return bestScore >= 1.5 ? best : base;
    }

    /* Композиции сцен: s — спрайт, x/y — позиция, w — размер,
       a — тип движения, d — задержка, o — прозрачность, c — модификатор. */
    var SCENE_ART = {
        night: [
            { s: 'person', x: '22%', y: '72%', w: 72, a: 'bob', d: '-0.4s' },
            { s: 'palm', x: '84%', y: '68%', w: 118, a: 'sway', d: '-1.1s', o: .72 },
            { s: 'tent', x: '62%', y: '80%', w: 150, a: 'fade', d: '-2s', o: .55 }
        ],
        desert: [
            { s: 'walk', x: '18%', y: '72%', w: 64, a: 'walk', d: '0s' },
            { s: 'walk', x: '30%', y: '75%', w: 56, a: 'walk', d: '-1.4s', o: .85 },
            { s: 'person', x: '43%', y: '70%', w: 60, a: 'bob', d: '-0.8s', o: .8 },
            { s: 'walk', x: '58%', y: '76%', w: 52, a: 'walk', d: '-2.3s', o: .7 },
            { s: 'palm', x: '88%', y: '66%', w: 108, a: 'sway', d: '-0.6s', o: .6 }
        ],
        caravan: [
            { s: 'camel', x: '24%', y: '70%', w: 122, a: 'drift', d: '0s' },
            { s: 'camel', x: '46%', y: '73%', w: 100, a: 'drift', d: '-2.5s', o: .9 },
            { s: 'camel', x: '66%', y: '76%', w: 86, a: 'drift', d: '-4.5s', o: .8 },
            { s: 'walk', x: '14%', y: '76%', w: 54, a: 'walk', d: '-1s' },
            { s: 'person', x: '82%', y: '74%', w: 52, a: 'bob', d: '-1.8s', o: .7 }
        ],
        sana: [
            { s: 'church', x: '50%', y: '58%', w: 240, a: 'rise', d: '0s' },
            { s: 'person', x: '20%', y: '78%', w: 58, a: 'bob', d: '-0.7s' },
            { s: 'person', x: '78%', y: '79%', w: 56, a: 'bob', d: '-1.9s', o: .85 },
            { s: 'bird', x: '72%', y: '20%', w: 46, a: 'flap', d: '0s', o: .65, c: 'stroke' },
            { s: 'bird', x: '80%', y: '27%', w: 36, a: 'flap', d: '-0.7s', o: .5, c: 'stroke' }
        ],
        army: [
            { s: 'spear', x: '14%', y: '56%', w: 100, a: 'sway', d: '0s' },
            { s: 'spear', x: '28%', y: '54%', w: 100, a: 'sway', d: '-0.8s' },
            { s: 'spear', x: '42%', y: '56%', w: 100, a: 'sway', d: '-1.6s' },
            { s: 'spear', x: '58%', y: '54%', w: 100, a: 'sway', d: '-2.4s' },
            { s: 'spear', x: '74%', y: '56%', w: 100, a: 'sway', d: '-3.2s' },
            { s: 'walk', x: '20%', y: '78%', w: 58, a: 'walk', d: '-0.5s' },
            { s: 'walk', x: '50%', y: '79%', w: 54, a: 'walk', d: '-1.7s', o: .85 },
            { s: 'walk', x: '82%', y: '78%', w: 56, a: 'walk', d: '-2.9s', o: .8 }
        ],
        elephant: [
            { s: 'elephant', x: '40%', y: '60%', w: 230, a: 'sway', d: '0s' },
            { s: 'elephant', x: '70%', y: '70%', w: 150, a: 'sway', d: '-1.6s', o: .8 },
            { s: 'elephant', x: '88%', y: '74%', w: 110, a: 'sway', d: '-2.8s', o: .6 },
            { s: 'walk', x: '18%', y: '76%', w: 52, a: 'walk', d: '-0.9s' },
            { s: 'bird', x: '76%', y: '16%', w: 40, a: 'flap', d: '-0.4s', o: .45, c: 'stroke' }
        ],
        kaaba: [
            { s: 'kaaba', x: '50%', y: '55%', w: 190, a: 'rise', d: '0s', c: 'accent' },
            { s: 'person', x: '20%', y: '76%', w: 58, a: 'bob', d: '-0.3s' },
            { s: 'person', x: '32%', y: '79%', w: 54, a: 'bob', d: '-1.3s', o: .9 },
            { s: 'walk', x: '68%', y: '78%', w: 56, a: 'walk', d: '-0.9s' },
            { s: 'person', x: '82%', y: '76%', w: 58, a: 'bob', d: '-2.1s', o: .85 }
        ],
        pray: [
            { s: 'kaaba', x: '72%', y: '53%', w: 150, a: 'rise', d: '0s', c: 'accent', o: .8 },
            { s: 'pray', x: '30%', y: '70%', w: 110, a: 'pray', d: '0s' },
            { s: 'pray', x: '50%', y: '73%', w: 96, a: 'pray', d: '-1.1s', o: .85 },
            { s: 'person', x: '16%', y: '72%', w: 56, a: 'bob', d: '-0.6s', o: .7 }
        ],
        halt: [
            { s: 'elephant', x: '56%', y: '59%', w: 220, a: 'sway', d: '0s' },
            { s: 'person', x: '28%', y: '72%', w: 70, a: 'bob', d: '-0.4s' },
            { s: 'camel', x: '84%', y: '76%', w: 96, a: 'bob', d: '-1.2s', o: .7 },
            { s: 'palm', x: '12%', y: '66%', w: 100, a: 'sway', d: '-0.8s', o: .55 }
        ],
        storm: [
            { s: 'bird', x: '18%', y: '18%', w: 54, a: 'flap', d: '0s', o: .9, c: 'stroke' },
            { s: 'bird', x: '34%', y: '12%', w: 46, a: 'flap', d: '-0.5s', o: .8, c: 'stroke' },
            { s: 'bird', x: '52%', y: '22%', w: 58, a: 'flap', d: '-1.1s', o: .85, c: 'stroke' },
            { s: 'bird', x: '70%', y: '14%', w: 44, a: 'flap', d: '-1.7s', o: .75, c: 'stroke' },
            { s: 'bird', x: '86%', y: '24%', w: 50, a: 'flap', d: '-2.3s', o: .7, c: 'stroke' },
            { s: 'elephant', x: '30%', y: '72%', w: 180, a: 'fade', d: '-1s', o: .55 },
            { s: 'person', x: '66%', y: '74%', w: 60, a: 'fade', d: '-2s', o: .5 }
        ],
        light: [
            { s: 'kaaba', x: '50%', y: '57%', w: 170, a: 'fade', d: '-1s', o: .7, c: 'accent' },
            { s: 'person', x: '24%', y: '76%', w: 58, a: 'rise', d: '-0.4s', o: .8 },
            { s: 'person', x: '76%', y: '77%', w: 58, a: 'rise', d: '-1.2s', o: .8 }
        ],
        birth: [
            { s: 'house', x: '50%', y: '61%', w: 200, a: 'rise', d: '0s', c: 'accent' },
            { s: 'person', x: '30%', y: '72%', w: 70, a: 'bob', d: '-0.5s', o: .9 },
            { s: 'person', x: '70%', y: '73%', w: 66, a: 'bob', d: '-1.5s', o: .85 },
            { s: 'palm', x: '88%', y: '66%', w: 100, a: 'sway', d: '-0.9s', o: .5 }
        ],
        calendar: [
            { s: 'scroll', x: '50%', y: '51%', w: 180, a: 'rise', d: '0s', c: 'accent' },
            { s: 'kaaba', x: '20%', y: '68%', w: 100, a: 'fade', d: '-1.2s', o: .55, c: 'accent' },
            { s: 'camel', x: '78%', y: '76%', w: 104, a: 'drift', d: '-2s', o: .7 },
            { s: 'walk', x: '88%', y: '78%', w: 50, a: 'walk', d: '-1s', o: .6 }
        ]
    };

    /* Один раз строим DOM всех сцен из таблицы выше. */
    function buildSceneLayers() {
        var host = document.getElementById('sira-scenes');
        if (!host || host.getAttribute('data-built')) return;
        var html = '';
        Object.keys(SCENE_ART).forEach(function (name) {
            html += '<div class="sira-scene" data-scene="' + name + '"><div class="sira-scene__art">';
            SCENE_ART[name].forEach(function (f) {
                var cls = 'sira-figure sira-figure--' + (f.a || 'bob') +
                    (f.c === 'stroke' ? ' sira-figure--stroke' : '') +
                    (f.c === 'accent' ? ' sira-figure--accent' : '');
                var st = '--x:' + f.x + ';--y:' + f.y + ';--w:' + f.w + 'px;--o:' +
                    (f.o == null ? 1 : f.o) + ';';
                if (f.d) st += 'animation-delay:' + f.d + ';';
                html += '<div class="' + cls + '" style="' + st + '">' +
                    '<svg viewBox="-60 -60 120 120" aria-hidden="true"><use href="#sp-' + f.s + '"></use></svg>' +
                    '</div>';
            });
            html += '</div></div>';
        });
        host.innerHTML = html;
        host.setAttribute('data-built', '1');
    }

    /* Плавная смена сцен: кроссфейд обеспечивает CSS (transition opacity). */
    function activateScene(name) {
        var host = document.getElementById('sira-scenes');
        if (!host) return;
        var layers = host.querySelectorAll('.sira-scene');
        for (var i = 0; i < layers.length; i++) {
            layers[i].classList.toggle('is-active', layers[i].getAttribute('data-scene') === name);
        }
    }

    // Резервный сценарий (если DOMParser недоступен / лонгрид пуст)
    function fallbackFrames() {
        var arr = window.SIRA_CINEMA || [];
        return arr.map(function (s, k) {
            var text = pick(s);
            var scene = FALLBACK_SCENES[Math.min(FALLBACK_SCENES.length - 1, k)];
            return {
                text: text,
                kind: 'text',
                scene: scene,
                mood: SCENE_MOOD[scene],
                ms: Math.max(MIN_FRAME_MS, Math.min(MAX_FRAME_MS, Math.round(text.length / FILM_CPS * 1000)))
            };
        });
    }

    function bestCut(rest, max) {
        var w = rest.slice(0, max);
        var marks = ['. ', '! ', '? ', '; ', ': ', '؟ ', '۔ '];
        var p = -1;
        marks.forEach(function (mk) { var i = w.lastIndexOf(mk); if (i > p) p = i; });
        if (p > max * 0.5) return p + 2; // режем после знака конца предложения
        var sp = w.lastIndexOf(' ');
        return sp > max * 0.55 ? sp : max;
    }

    function splitText(text, max) {
        var out = [], rest = String(text).replace(/\s+/g, ' ').trim();
        while (rest.length > max) {
            var cut = bestCut(rest, max);
            var piece = rest.slice(0, cut).trim();
            if (piece) out.push(piece);
            rest = rest.slice(cut).trim();
        }
        if (rest) out.push(rest);
        // Не оставляем «хвостик» из пары слов — склеиваем с предыдущим
        if (out.length > 1 && out[out.length - 1].length < 35) {
            out[out.length - 2] += ' ' + out.pop();
        }
        return out.length ? out : [String(text).trim()];
    }

    function buildFilmScript() {
        var ch = chapter(1);
        var html = (ch && ch.read) ? pick(ch.read) : '';
        if (!html || typeof DOMParser === 'undefined') return fallbackFrames();

        var frames = [];
        var section = 0;
        try {
            var doc = new DOMParser().parseFromString('<div id="sira-root">' + html + '</div>', 'text/html');
            var root = doc.getElementById('sira-root') || doc.body;
            var blocks = root.querySelectorAll('p, h4, li, blockquote');
            Array.prototype.forEach.call(blocks, function (el) {
                var tag = el.tagName.toLowerCase();
                if (tag === 'h4') section++;   // язык не важен: считаем заголовки
                var text = (el.textContent || '').replace(/\s+/g, ' ').trim();
                if (!text) return;
                var kind = el.classList.contains('sira-sources') ? 'sources'
                    : tag === 'h4' ? 'head'
                    : tag === 'blockquote' ? 'quote' : 'text';
                var group = kind === 'sources' ? 'sources'
                    : kind === 'quote' ? 'quote' : ('s' + section);
                var chunks = splitText(text, kind === 'head' ? 160 : CHUNK_CHARS);
                chunks.forEach(function (c) {
                    frames.push({ text: c, kind: kind, group: group });
                });
            });
        } catch (e) { return fallbackFrames(); }

        if (!frames.length) return fallbackFrames();

        // Сцена следует за РАЗДЕЛОМ текста: внутри раздела идём по своему
        // списку сцен, а ключевые слова уточняют картинку под конкретный титр.
        var groups = {};
        frames.forEach(function (f, k) { (groups[f.group] = groups[f.group] || []).push(k); });
        Object.keys(groups).forEach(function (g) {
            var list;
            if (g === 'sources') list = ['calendar', 'night'];
            else if (g === 'quote') list = ['light', 'kaaba'];
            else list = SECTION_SCENES[Number(g.slice(1))] || ['night', 'desert'];
            var idxs = groups[g];
            idxs.forEach(function (k, pos) {
                var base = list[Math.min(list.length - 1, Math.floor(pos * list.length / idxs.length))];
                frames[k].scene = sceneForText(frames[k].text, base);
            });
        });

        frames.forEach(function (f) {
            f.mood = SCENE_MOOD[f.scene] || 'day';
            var ms = Math.round(f.text.length / FILM_CPS * 1000);
            if (f.kind === 'head') ms += 900;      // чуть дольше держим заголовок раздела
            if (f.kind === 'sources') ms += 500;
            f.ms = Math.max(MIN_FRAME_MS, Math.min(MAX_FRAME_MS, ms));
        });
        if (frames.length) {
            frames[0].scene = 'night';                       // начинаем с ночной Аравии
            frames[0].mood = 'night';
            frames[frames.length - 1].scene = 'calendar';    // завершаем итогом
            frames[frames.length - 1].mood = SCENE_MOOD.calendar;
        }
        return frames;
    }

    function applyWatchMode() {
        var film = isFilmChapter();
        var cinema = document.getElementById('sira-cinema');
        var stub = document.getElementById('sira-video-stub');
        if (cinema) cinema.hidden = !film;
        if (stub) stub.hidden = film;
        if (film) prepareCinema();
        updateFsButtons();
    }

    function prepareCinema() {
        stopCinema();
        filmScript = buildFilmScript();
        filmTotalMs = filmScript.reduce(function (s, f) { return s + f.ms; }, 0);
        var cinema = document.getElementById('sira-cinema');
        if (cinema) cinema.style.setProperty('--film-duration', filmTotalMs + 'ms');
        stopCinema();
    }

    function updatePlayLabel() {
        var label = document.getElementById('sira-cinema-play-label');
        if (label) label.textContent = cinemaPlayed
            ? t('sira.cinema.replay', null, 'Смотреть снова')
            : t('sira.cinema.play', null, 'Смотреть фильм');
    }

    function setFrame(k) {
        var f = filmScript[k];
        if (!f) return;
        frameIndex = k;
        var cinema = document.getElementById('sira-cinema');
        if (cinema) {
            cinema.setAttribute('data-scene', f.scene);
            cinema.setAttribute('data-mood', f.mood || SCENE_MOOD[f.scene] || 'day');
        }
        activateScene(f.scene);   // плавный кроссфейд к нужной сюжетной сцене

        var cap = document.getElementById('sira-cinema-caption');
        if (cap) {
            cap.textContent = f.text;
            cap.className = 'sira-cinema__caption' +
                (f.kind === 'head' ? ' is-head' : '') +
                (f.kind === 'quote' ? ' is-quote' : '') +
                (f.kind === 'sources' ? ' is-sources' : '');
            void cap.offsetWidth;             // перезапуск анимации титра
            cap.classList.add('is-in');
        }

        var counter = document.getElementById('sira-cinema-counter');
        if (counter) counter.textContent = pad(k + 1) + ' / ' + pad(filmScript.length);

        // Прогресс заполняется плавно ровно за длительность текущего кадра
        var bar = document.getElementById('sira-cinema-bar');
        if (bar) {
            var startPct = (k / filmScript.length) * 100;
            var endPct = ((k + 1) / filmScript.length) * 100;
            bar.style.transition = 'none';
            bar.style.width = startPct.toFixed(2) + '%';
            void bar.offsetWidth;
            bar.style.transition = 'width ' + f.ms + 'ms linear';
            bar.style.width = endPct.toFixed(2) + '%';
        }
    }

    function finishCinema() {
        clearTimeout(cinemaTimer);
        cinemaTimer = null;
        var cinema = document.getElementById('sira-cinema');
        if (cinema) cinema.classList.remove('is-playing');
        var overlay = document.getElementById('sira-cinema-overlay');
        if (overlay) overlay.classList.remove('is-hidden');
        var bar = document.getElementById('sira-cinema-bar');
        if (bar) { bar.style.transition = 'width .4s linear'; bar.style.width = '100%'; }
        updatePlayLabel(); // «Смотреть снова»
    }

    // Цепочка setTimeout: у каждого кадра своя длительность по длине текста
    function runFrame(k) {
        if (!lessonOpen || mode !== 'watch' || k >= filmScript.length) {
            finishCinema();
            return;
        }
        setFrame(k);
        cinemaTimer = setTimeout(function () { runFrame(k + 1); }, filmScript[k].ms);
    }

    function playCinema() {
        if (!filmScript.length) prepareCinema();
        if (!filmScript.length) return;
        clearTimeout(cinemaTimer);
        cinemaPlayed = true;
        var cinema = document.getElementById('sira-cinema');
        if (cinema) {
            cinema.classList.add('is-playing');
            cinema.style.setProperty('--film-duration', filmTotalMs + 'ms');
        }
        var overlay = document.getElementById('sira-cinema-overlay');
        if (overlay) overlay.classList.add('is-hidden');
        updatePlayLabel();
        runFrame(0);
    }

    function stopCinema() {
        clearTimeout(cinemaTimer);
        cinemaTimer = null;
        frameIndex = 0;
        var cinema = document.getElementById('sira-cinema');
        var firstScene = filmScript[0] ? filmScript[0].scene : 'night';
        if (cinema) {
            cinema.classList.remove('is-playing');
            cinema.setAttribute('data-scene', firstScene);
            cinema.setAttribute('data-mood', SCENE_MOOD[firstScene] || 'night');
        }
        activateScene(firstScene);
        var overlay = document.getElementById('sira-cinema-overlay');
        if (overlay) overlay.classList.remove('is-hidden');
        var bar = document.getElementById('sira-cinema-bar');
        if (bar) { bar.style.transition = 'none'; bar.style.width = '0%'; }
        var counter = document.getElementById('sira-cinema-counter');
        if (counter) counter.textContent = pad(1) + ' / ' + pad(filmScript.length || 9);
        var cap = document.getElementById('sira-cinema-caption');
        if (cap) {
            cap.className = 'sira-cinema__caption';
            cap.textContent = filmScript.length
                ? filmScript[0].text
                : pick((window.SIRA_CINEMA || [])[0] || '');
        }
        cinemaPlayed = false;
        updatePlayLabel();
    }

    /* ============================================================
       FULLSCREEN ВИДЕО-ПЛЕЕРА
       ============================================================ */
    function activePlayer() {
        var cinema = document.getElementById('sira-cinema');
        var stub = document.getElementById('sira-video-stub');
        if (cinema && !cinema.hidden) return cinema;
        if (stub && !stub.hidden) return stub;
        return cinema || stub;
    }

    function fsElement() {
        return document.fullscreenElement || document.webkitFullscreenElement || null;
    }
    function fallbackActive() {
        var el = activePlayer();
        return !!(el && el.classList.contains('is-fs-fallback'));
    }
    function isFsActive() { return !!fsElement() || fallbackActive(); }

    function updateFsButtons() {
        var active = isFsActive();
        var label = active
            ? t('sira.exitFullscreen', null, 'Выйти из полноэкранного режима')
            : t('sira.fullscreen', null, 'На весь экран');
        document.querySelectorAll('.sira-fs-btn').forEach(function (b) {
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-label', label);
            b.setAttribute('title', label);
        });
    }

    function setFallback(on) {
        var el = activePlayer();
        if (!el) return;
        if (on) {
            // Переносим плеер в <body>: position:fixed гарантированно
            // разворачивается на весь экран даже внутри overflow-контейнеров.
            if (fsOriginalParent !== el.parentNode) {
                fsOriginalParent = el.parentNode;
                fsNextSibling = el.nextSibling;
                document.body.appendChild(el);
            }
            el.classList.add('is-fs-fallback');
            document.documentElement.classList.add('sira-fs-lock');
        } else {
            el.classList.remove('is-fs-fallback');
            if (fsOriginalParent && el.parentNode === document.body) {
                if (fsNextSibling && fsNextSibling.parentNode === fsOriginalParent) {
                    fsOriginalParent.insertBefore(el, fsNextSibling);
                } else {
                    fsOriginalParent.appendChild(el);
                }
            }
            fsOriginalParent = null;
            fsNextSibling = null;
            document.documentElement.classList.remove('sira-fs-lock');
        }
        updateFsButtons();
    }

    function clearFsWatchdog() {
        if (fsWatchdog) { clearTimeout(fsWatchdog); fsWatchdog = null; }
    }

    function enterFs() {
        if (fsPending || isFsActive()) return;
        var el = activePlayer();
        if (!el) return;
        var fn = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
        if (!fn) { setFallback(true); return; } // iPhone: сразу CSS-fallback
        fsPending = true;
        try {
            var p = fn.call(el);
            var settle = function (ok) {
                fsPending = false;
                clearFsWatchdog();
                if (ok === false && !fsElement() && !fallbackActive()) setFallback(true);
                else updateFsButtons();
            };
            if (p && typeof p.then === 'function') {
                p.then(function () { settle(true); }, function () { settle(false); });
            }
            // Если браузер не дал ни события, ни ответа — не оставляем кнопку «мёртвой».
            fsWatchdog = setTimeout(function () {
                fsWatchdog = null;
                if (fsPending) {
                    fsPending = false;
                    if (!fsElement() && !fallbackActive()) setFallback(true);
                }
            }, 500);
        } catch (e) {
            fsPending = false;
            clearFsWatchdog();
            setFallback(true);
        }
        updateFsButtons();
    }

    function exitFs(silent) {
        fsPending = false;
        clearFsWatchdog();
        var fe = fsElement();
        if (fe) {
            var fn = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
            try { if (fn) fn.call(document); } catch (e) {}
        }
        setFallback(false);
        if (!silent) updateFsButtons();
    }

    function toggleFs() {
        if (isFsActive()) exitFs();
        else enterFs();
    }

    function onFsChange() {
        fsPending = false;
        clearFsWatchdog();
        if (fsElement()) {
            lastFsExitTs = 0;
            var el0 = activePlayer();
            if (el0) el0.classList.remove('is-fs-fallback');
        } else {
            // Запоминаем момент выхода: Esc не должен закрыть сам урок.
            lastFsExitTs = Date.now();
            var el = activePlayer();
            if (el) el.classList.remove('is-fs-fallback');
            document.documentElement.classList.remove('sira-fs-lock');
        }
        updateFsButtons();
    }

    /* ============================================================
       АУДИО (слот под файл)
       ============================================================ */
    function setupAudio(i) {
        var ch = chapter(i + 1);
        var url = (ch && ch.audio) ? String(ch.audio) : '';
        var audio = document.getElementById('sira-audio-player');
        var btn = document.getElementById('sira-audio-btn');
        pauseAudio();
        if (!audio || !btn) return;
        if (url) {
            audio.setAttribute('src', url);
            audio.dataset.audioPlaceholder = '';
            btn.disabled = false;
        } else {
            audio.removeAttribute('src');
            audio.dataset.audioPlaceholder = '';
            btn.disabled = true;
        }
        try { audio.load(); } catch (e) { /* нет файла — это нормально */ }
        updateAudioNote();
    }

    function updateAudioNote() {
        var note = document.getElementById('sira-audio-note');
        if (!note) return;
        var ch = chapter(activeIndex + 1);
        var url = (ch && ch.audio) ? String(ch.audio) : '';
        note.textContent = url ? url.split('/').pop() : t('sira.audio.soon', null, 'Аудиофайл будет добавлен позже');
    }

    function pauseAudio() {
        var audio = document.getElementById('sira-audio-player');
        if (audio && !audio.paused) { try { audio.pause(); } catch (e) {} }
    }

    function bindAudio() {
        var audio = document.getElementById('sira-audio-player');
        var btn = document.getElementById('sira-audio-btn');
        if (!audio || !btn) return;
        btn.addEventListener('click', function () {
            if (btn.disabled) return;
            if (audio.paused) {
                audio.play().catch(function () {
                    if (typeof window.showToast === 'function') {
                        window.showToast(t('sira.audio.soon', null, 'Аудио появится позже'), 'error');
                    }
                });
            } else {
                audio.pause();
            }
        });
        audio.addEventListener('timeupdate', function () {
            var bar = document.getElementById('sira-audio-progress');
            var time = document.getElementById('sira-audio-time');
            if (bar && audio.duration) bar.style.width = ((audio.currentTime / audio.duration) * 100).toFixed(1) + '%';
            if (time) {
                var s = Math.floor(audio.currentTime || 0);
                time.textContent = pad(Math.floor(s / 60)) + ':' + pad(s % 60);
            }
        });
        audio.addEventListener('ended', function () {
            var bar = document.getElementById('sira-audio-progress');
            if (bar) bar.style.width = '0%';
        });
    }

    /* ============================================================
       ДОСТУП: Премиум / Вход
       ============================================================ */
    function openAccessNow(kind) {
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
        var accessPoint = document.getElementById('sira-access-point');
        if (accessPoint) accessPoint.textContent = pad(accessIndex + 1) + ' · ' + pointName(accessIndex);
        var modal = document.getElementById('sira-access-modal');
        if (modal) modal.classList.add('active');
    }

    function openPoint(i) {
        accessIndex = i;
        var done = getDone().indexOf(String(i)) !== -1;
        if (done || i === 0 || hasPro()) {
            openLessonFlow(i);
        } else {
            // Закрытая точка → полноценный экран «Премиум» в Настройках.
            // Если app.js по какой-то причине не загрузился — старая модалка доступа.
            if (typeof window.goPremiumScreen === 'function') {
                window.goPremiumScreen('sira', accessIndex);
            } else {
                openAccessNow(isGuest() ? 'guest' : 'premium');
            }
        }
    }

    function activatePremium() {
        if (typeof window.activatePro === 'function') {
            var result = window.activatePro();
            if (result && typeof result.then === 'function') result.then(render).catch(function () {});
        } else if (!isGuest() && typeof window.lsSet === 'function') {
            window.lsSet('amanah_pro_' + currentUser.uid, 'true');
        }
        closeAll();
        render();
    }

    function goLogin() {
        closeAll();
        setTimeout(function () {
            if (typeof window.openAuthModal === 'function') window.openAuthModal();
            else window.location.href = 'profile.html';
        }, 240);
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

        document.querySelectorAll('#sira-lesson-view .sira-tab').forEach(function (b) {
            b.addEventListener('click', function () { setMode(b.getAttribute('data-mode')); });
        });

        var back = document.getElementById('sira-lesson-back');
        if (back) back.addEventListener('click', closeAll);

        var studied = document.getElementById('sira-studied-btn');
        if (studied) studied.addEventListener('click', markStudied);

        var cinemaPlay = document.getElementById('sira-cinema-play');
        if (cinemaPlay) cinemaPlay.addEventListener('click', playCinema);
        var play = document.getElementById('sira-play-btn');
        if (play) play.addEventListener('click', function () {
            if (typeof window.showToast === 'function') {
                window.showToast(t('sira.videoStub', null, 'Видео появится позже'), 'success');
            }
        });

        document.querySelectorAll('.sira-fs-btn').forEach(function (b) {
            b.addEventListener('click', toggleFs);
        });

        bindAudio();

        var premiumCta = document.getElementById('sira-premium-cta');
        if (premiumCta) premiumCta.addEventListener('click', activatePremium);
        var loginCta = document.getElementById('sira-login-cta');
        if (loginCta) loginCta.addEventListener('click', goLogin);

        var accessModal = document.getElementById('sira-access-modal');
        if (accessModal) {
            accessModal.addEventListener('click', function (e) { if (e.target === accessModal) closeAll(); });
        }

        document.querySelectorAll('.sira-card__close, .sira-access-later').forEach(function (b) {
            b.addEventListener('click', closeAll);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key !== 'Escape') return;
            if (isFsActive()) {
                // Сначала выходим из полноэкранного видео, урок не трогаем.
                if (fallbackActive()) { e.preventDefault(); exitFs(); }
                return;
            }
            // Esc сразу после выхода из нативного FS не должен закрывать урок
            if (Date.now() - lastFsExitTs < 600) { lastFsExitTs = 0; return; }
            if (anyOverlayOpen()) closeAll();
        });

        document.addEventListener('fullscreenchange', onFsChange);
        document.addEventListener('webkitfullscreenchange', onFsChange);

        window.addEventListener('resize', syncMount);
        window.addEventListener('orientationchange', syncMount);

        document.addEventListener('amanah:languagechange', render);
        document.addEventListener('amanah:authchange', render);
    }

    function init() {
        buildSceneLayers();   // силуэты и слои сцен — один раз на страницу
        bind();
        render();
    }

    window.Sira = {
        render: render,
        openPoint: openPoint,
        closeAll: closeAll,
        playCinema: playCinema,
        setAudio: function (n, url) {
            return window.SiraSetAudio ? window.SiraSetAudio(n, url) : false;
        },
        film: function () {
            return filmScript.map(function (f) {
                return { text: f.text, scene: f.scene, mood: f.mood, ms: f.ms, kind: f.kind };
            });
        },
        scenes: function () { return Object.keys(SCENE_ART); },
        // Позволяет ускорить/замедлить фильм (символов в секунду) и сразу
        // пересобрать сценарий, не перезагружая страницу.
        setFilmSpeed: function (cps) {
            if (cps > 0) FILM_CPS = cps;
            if (lessonOpen && isFilmChapter()) prepareCinema();
            return FILM_CPS;
        },
        isOpen: function () { return lessonOpen; },
        isNarrow: isNarrow,
        toggleFullscreen: toggleFs,
        total: TOTAL
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})(window, document);
