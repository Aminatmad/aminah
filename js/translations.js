/* ============================================================
   AMANAH — lightweight i18n (RU / EN / AR)
   No dependencies. Loaded before js/app.js on every page.
   ============================================================ */
(function (window, document) {
    'use strict';

    var STORAGE_KEY = 'amanah_lang';
    var DEFAULT_LANG = 'ru';

    var LOCALES = {
        ru: { locale: 'ru-RU', code: 'RU' },
        en: { locale: 'en-GB', code: 'EN' },
        ar: { locale: 'ar-EG', code: 'AR' }
    };

    var translations = {
        ru: {
            'page.indexTitle': 'AMANAH — Твой путь',
            'page.catalogTitle': 'AMANAH — Знания',
            'page.duaTitle': 'AMANAH — Дуа',
            'page.profileTitle': 'AMANAH — Профиль',
            'page.settingsTitle': 'AMANAH — Настройки',

            'app.tagline': 'ТВОЯ РЕЛИГИЯ — ТВОЙ АМАНАТ',

            'nav.home': 'Главная',
            'nav.knowledge': 'Знания',
            'nav.dua': 'Дуа',
            'nav.profile': 'Профиль',

            'header.qibla': 'КИБЛА',
            'header.prayer': 'Намаз',
            'header.profile': 'ПРОФИЛЬ',
            'header.settings': 'НАСТРОЙКИ',

            'common.back': 'Назад',
            'common.home': 'На главную',
            'common.close': 'Закрыть',
            'common.cancel': 'Отмена',
            'common.loading': 'Загрузка…',
            'common.error': 'Ошибка',
            'common.backToLessons': 'Назад к урокам',
            'common.backToKnowledge': 'Назад к знаниям',
            'common.backToProfile': 'Назад в профиль',
            'common.backToSections': 'Назад ко всем разделам',
            'common.free': 'FREE',
            'common.pro': 'PRO',
            'common.completed': 'Пройдено: {{done}} из {{total}} ({{percent}}%)',
            'common.continue': 'Продолжить',
            'common.prev': 'Назад',
            'common.next': 'Далее',
            'common.prevDay': 'Предыдущий день',
            'common.nextDay': 'Следующий день',
            'common.settings': 'Настройки',
            'lesson.complete': 'Завершить урок',
            'lesson.title': 'Название урока',
            'lesson.intro': 'Вступление…',

            'home.greeting': 'Ассаляму алейкум!',
            'home.subtitle': 'Твой путеводитель в мире Ислама',
            'home.startTitle': 'Начало в исламе',
            'home.startDesc': 'Первые шаги, обучение и поддержка',
            'home.pathTitle': 'Путь в исламе',
            'home.pathDesc': 'Углубление знаний, лекции и наставления',
            'home.familyTitle': 'Семья и никах',
            'home.familyDesc': 'Подготовка, организация и семейные ценности',
            'home.birthTitle': 'Рождение ребёнка',
            'home.birthDesc': 'Поддержка родителей и необходимые обряды',
            'home.lossTitle': 'Потеря близкого человека',
            'home.lossDesc': 'Организация джаназа, погребение и помощь семье',

            'islam.title': 'Начало в исламе',
            'islam.subtitle': 'Твой путь начинается с малого. Изучай основы Ислама постепенно, в своём темпе, без спешки и страха.',
            'islam.epigraph': '«Поистине, твоя религия — твоя плоть и кровь, так оберегай её».',
            'islam.epigraphAuthor': '— Из наставлений Ибн Умара',
            'islam.block1': 'Блок 1. Самое первое и важное (Основы)',
            'islam.block2': 'Блок 2. Знакомство с Аллахом и Пророком ﷺ',
            'islam.block3': 'Блок 3. Практика для новичка',
            'islam.block4': 'Блок 4. Нравственность и адаптация',

            'family.title': 'Семья и Никах',
            'family.subtitle': 'Семья в Исламе — это не просто союз двух людей. Это ответственность, милосердие, доверие и совместный путь к довольству Аллаха. Изучай постепенно, чтобы строить отношения на знаниях, а не на предположениях.',
            'family.epigraph': '«Самыми совершенными верующими в вере являются те, у кого наилучший нрав, а лучшие из вас — те, кто лучше всех относится к своим жёнам».',
            'family.epigraphAuthor': '— Джами ат-Тирмизи, хадис 1162 (хасан сахих)',
            'family.block1': 'Блок 1. Создание семьи и выбор партнера (Фундамент)',
            'family.block1Desc': 'Как выбрать человека, с которым ты разделишь свою жизнь и религию.',
            'family.block2': 'Блок 2. Заключение брака (Практика и условия)',
            'family.block2Desc': 'Что нужно знать перед заключением исламского брака.',
            'family.block3': 'Блок 3. Семейная жизнь и права супругов (Быт и отношения)',
            'family.block3Desc': 'Как строить семью на любви, уважении и ответственности.',
            'family.block4': 'Блок 4. Испытания и развод (Талак)',
            'family.block4Desc': 'Серьёзная тема, о которой важно знать без страха и заблуждений.',

            'birth.title': 'Рождение ребёнка',
            'birth.subtitle': 'Ребёнок — это дар Аллаха, а не собственность. Он приходит в этот мир с правами, которые Всевышний доверил родителям. Изучай обряды и обязанности постепенно, чтобы встретить и воспитать его в согласии с Сунной.',
            'birth.epigraph': '«Господи! Даруй мне праведное потомство. Поистине, Ты — Слышащий мольбу».',
            'birth.epigraphAuthor': '— Коран, 3:38 (перевод смысла)',
            'birth.block1': 'Блок 1. Встреча новорожденного и первые обряды',
            'birth.block1Desc': 'Первые часы и дни: благодарность, азан, тахник, имя и акика.',
            'birth.block2': 'Блок 2. Забота, здоровье и воспитание',
            'birth.block2Desc': 'Как растить ребёнка телесно и духовно, чтобы забота стала ибадой.',

            'loss.title': 'Потеря близкого человека',
            'loss.subtitle': 'Смерть близкого — одно из самых тяжёлых испытаний. Ислам не требует от тебя быть без чувств. Он учит проходить через горе так, чтобы не потерять веру, сохранить достоинство и помочь умершему тем, что действительно приносит пользу.',
            'loss.epigraph': '«Поистине, мы принадлежим Аллаху, и к Нему мы возвращаемся».',
            'loss.epigraphAuthor': '— Коран, 2:156 (перевод смысла)',
            'loss.block1': 'Блок 1. Первые дни после утраты',
            'loss.block1Desc': 'Терпение, слёзы, первые действия, погребение и то, что помогает умершему.',

            'catalog.title': 'Знания',
            'catalog.subtitle': 'Изучай основы религии и классические труды.',
            'catalog.booksTitle': 'Разбор исламских книг',
            'catalog.booksSubtitle': 'Изучай классические труды с подробными уроками.',
            'catalog.groupAqida': 'Акыда и единобожие',
            'catalog.groupFiqh': 'Фикх и поклонение',
            'catalog.groupSira': 'Сира — жизнеописание Пророка Мухаммада ﷺ',
            'catalog.section.1': 'Акыда',
            'catalog.section.2': 'Фикх',
            'catalog.section.3': 'Сира',
            'catalog.book.1': 'Китаб ат-Таухид',
            'catalog.book.2': 'Аль-Акыда аль-Васитыйя',
            'catalog.book.3': 'Аль-Акыда ат-Тахавийя',
            'catalog.book.4': 'Важные уроки для всей уммы',
            'catalog.book.5': 'Умдат аль-Ахкам',
            'catalog.book.6': 'Рияд ас-Салихин',
            'catalog.book.7': 'Сорок хадисов',
            'catalog.book.8': 'Булюг аль-Марам',
            'catalog.book.9': 'Аль-Адаб аль-Муфрад',
            'catalog.book.10': 'Запечатанный нектар',
            'catalog.book.11': 'Жизнеописание Пророка',
            'catalog.book.12': 'Пророческая сира',
            'catalog.program': 'Программа обучения',
            'catalog.about': 'О книге',
            'catalog.benefits': 'Преимущества изучения',
            'catalog.sectionFree': 'Все уроки этого раздела доступны бесплатно',
            'catalog.bookTitle': 'Название книги',
            'catalog.bookAuthor': 'Автор',
            'catalog.sectionTitle': 'Раздел',
            'catalog.sectionDesc': 'Описание',

            'dua.title': 'Дуа и Азкары',
            'dua.subtitle': 'Обращение к Всевышнему в любых ситуациях',
            'dua.morning.title': 'Утренние азкары',
            'dua.morning.desc': 'Дуа для благословенного начала дня',
            'dua.evening.title': 'Вечерние азкары',
            'dua.evening.desc': 'Дуа для защиты и спокойствия перед сном',
            'dua.afterPrayer.title': 'Дуа после обязательных молитв',
            'dua.afterPrayer.desc': 'Поминание Аллаха после намаза',
            'dua.everyday.title': 'Дуа на все случаи жизни',
            'dua.everyday.desc': 'Повседневные просьбы и благодарности',
            'dua.istighfar.title': 'Дуа для покаяния (истигфар)',
            'dua.istighfar.desc': 'Просьбы о прощении грехов',
            'dua.anxiety.title': 'От тревоги, грусти и долгов',
            'dua.anxiety.desc': 'Дуа для успокоения души и облегчения',
            'dua.protection.title': 'Защита от зла и сглаза',
            'dua.protection.desc': 'Дуа от шайтана, зависти и порчи',
            'dua.knowledge.title': 'Знания и облегчение в делах',
            'dua.knowledge.desc': 'Дуа для успеха и мудрости',
            'dua.family.title': 'О семье, родителях и потомстве',
            'dua.family.desc': 'Молитвы за близких и детей',
            'dua.health.title': 'Здоровье и исцеление',
            'dua.health.desc': 'Дуа от болезней и для укрепления тела',
            'dua.iman.title': 'Укрепление имана',
            'dua.iman.desc': 'Дуа для укрепления веры в сердце',
            'dua.inDevelopment': 'Раздел в разработке',
            'dua.history': 'История',
            'dua.benefit': 'Польза',
            'dua.source': 'Источник: {{source}}',

            'settings.title': 'Настройки',
            'settings.subtitle': 'Настрой приложение под себя',
            'settings.account.login': 'Вход в аккаунт',
            'settings.account.loginDesc': 'Войдите, чтобы сохранять прогресс',
            'settings.account.profile': 'Мой профиль',
            'settings.theme': 'Тема оформления',
            'settings.themeLight': 'Светлая',
            'settings.themeDark': 'Тёмная',
            'settings.language': 'Язык приложения',
            'settings.about': 'О приложении',
            'settings.version': 'Версия 1.0.0 • AMANAH',
            'settings.account.title': 'Мой аккаунт',
            'settings.account.userName': 'Имя пользователя',
            'settings.account.notSet': 'Не задано',
            'settings.account.newName': 'Введите новое имя',
            'settings.account.saveName': 'Сохранить имя',
            'settings.account.email': 'Электронная почта',
            'settings.account.newEmail': 'Новая почта',
            'settings.account.currentPass': 'Текущий пароль',
            'settings.account.changeEmail': 'Изменить почту',
            'settings.account.password': 'Пароль',
            'settings.account.newPass': 'Новый пароль (мин. 6 симв.)',
            'settings.account.changePass': 'Изменить пароль',
            'settings.account.logout': 'Выйти из аккаунта',
            'settings.account.loginBtn': 'Войти',
            'settings.account.register': 'Зарегистрироваться',

            'profile.title': 'Мой прогресс',
            'profile.withName': 'Профиль: {{name}}',
            'profile.loginPrompt': 'Войдите в аккаунт, чтобы сохранять прогресс и видеть его здесь.',
            'profile.login': 'Войти',
            'profile.loading': 'Загрузка…',
            'profile.notStarted': 'Вы ещё не начали обучение. Перейдите в раздел «Знания» и выберите книгу!',
            'profile.stoppedAt': 'Остановились на: {{title}}',
            'profile.saved': 'Прогресс сохранён',
            'profile.settingsBtn': '⚙️ Настройки',

            'pro.title': 'PRO Подписка',
            'pro.desc': 'Этот урок доступен только с PRO-подпиской. Откройте все уроки всех книг.',
            'pro.activate': 'Активировать демо-PRO',
            'pro.continue': 'У вас есть PRO (Продолжить)',
            'pro.checking': 'Проверяем аккаунт…',
            'pro.login': 'Войти в аккаунт',
            'pro.activated': 'PRO активирован!',
            'pro.loginToActivate': 'Войдите в аккаунт, чтобы активировать PRO',
            'pro.saveError': 'Не удалось сохранить PRO в аккаунте. Попробуйте ещё раз.',

            'auth.loginTitle': 'Вход в профиль',
            'auth.loginDesc': 'Войдите, чтобы синхронизировать прогресс',
            'auth.registerTitle': 'Регистрация',
            'auth.registerDesc': 'Создайте аккаунт для сохранения данных',
            'auth.loginBtn': 'Войти',
            'auth.registerBtn': 'Зарегистрироваться',
            'auth.noAccount': 'Нет аккаунта? Зарегистрироваться',
            'auth.haveAccount': 'Есть аккаунт? Войти',
            'auth.email': 'Почта (Email)',
            'auth.password': 'Пароль',
            'auth.showPassword': 'Показать пароль',
            'auth.passwordMin': 'Пароль (мин. 6 символов)',
            'auth.fillFields': 'Заполните поля!',
            'auth.firebaseError': 'Ошибка Firebase',
            'auth.welcome': 'Добро пожаловать!',
            'auth.wrongCredentials': 'Неверная почта или пароль!',
            'auth.passLength': 'Пароль от 6 символов!',
            'auth.registerSuccess': 'Регистрация успешна! Проверьте почту для подтверждения.',
            'auth.error': 'Ошибка: {{message}}',
            'auth.emailConfirmed': 'Почта успешно подтверждена! Добро пожаловать.',
            'auth.loggedInAs': 'Вы вошли как {{name}}.\nХотите выйти?',
            'auth.logoutConfirm': 'Вы уверены, что хотите выйти?',
            'auth.enterName': 'Введите имя!',
            'auth.nameChanged': 'Имя успешно изменено!',
            'auth.fillEmailPass': 'Заполните новую почту и текущий пароль!',
            'auth.emailSent': 'Письмо с подтверждением отправлено на новую почту!',
            'auth.wrongCurrentPass': 'Неверный текущий пароль!',
            'auth.newPassLength': 'Новый пароль от 6 символов!',
            'auth.passChanged': 'Пароль успешно изменен!',
            'auth.passError': 'Ошибка: неверный текущий пароль!',

            'prayer.today': 'Намазы сегодня',
            'prayer.onDate': 'Намазы на {{date}}',
            'prayer.loading': 'Загрузка…',
            'prayer.loadError': 'Не удалось загрузить время намаза. Проверьте интернет.',
            'prayer.fajr': 'Фаджр (Рассвет)',
            'prayer.dhuhr': 'Зухр (Полдень)',
            'prayer.asr': 'Аср (После полудня)',
            'prayer.maghrib': 'Магриб (Закат)',
            'prayer.isha': 'Иша (Ночь)',
            'prayer.fajr.short': 'Фаджр',
            'prayer.dhuhr.short': 'Зухр',
            'prayer.asr.short': 'Аср',
            'prayer.maghrib.short': 'Магриб',
            'prayer.isha.short': 'Иша',

            'qibla.title': 'Направление Киблы',
            'qibla.hint': 'Поверните телефон...',
            'qibla.angle': 'Угол Киблы',
            'qibla.aligned': 'Вы смотрите прямо на Киблу!',
            'qibla.turn': 'Поворачивайтесь, пока Кааба не совпадет с зеленой меткой',
            'qibla.phoneOnly': 'Компас доступен только на телефоне. Ориентируйтесь на угол Киблы.',
            'qibla.coords': 'Координаты: {{lat}}, {{lng}}',
            'qibla.gpsUnavailable': 'GPS недоступен. Используем Москву.',
            'qibla.requesting': 'Запрос GPS...',
            'compass.n': 'С',
            'compass.e': 'В',
            'compass.s': 'Ю',
            'compass.w': 'З',

            'language.title': 'Язык приложения',
            'language.subtitle': 'Выберите язык интерфейса',
            'language.ru': 'Русский',
            'language.en': 'Английский',
            'language.ar': 'Арабский',
            'language.changed': 'Язык изменён'
        },

        en: {
            'page.indexTitle': 'AMANAH — Your path',
            'page.catalogTitle': 'AMANAH — Knowledge',
            'page.duaTitle': 'AMANAH — Duas',
            'page.profileTitle': 'AMANAH — Profile',
            'page.settingsTitle': 'AMANAH — Settings',

            'app.tagline': 'YOUR FAITH — YOUR TRUST',

            'nav.home': 'Home',
            'nav.knowledge': 'Knowledge',
            'nav.dua': 'Duas',
            'nav.profile': 'Profile',

            'header.qibla': 'QIBLA',
            'header.prayer': 'Prayer',
            'header.profile': 'PROFILE',
            'header.settings': 'SETTINGS',

            'common.back': 'Back',
            'common.home': 'Home',
            'common.close': 'Close',
            'common.cancel': 'Cancel',
            'common.loading': 'Loading…',
            'common.error': 'Error',
            'common.backToLessons': 'Back to lessons',
            'common.backToKnowledge': 'Back to knowledge',
            'common.backToProfile': 'Back to profile',
            'common.backToSections': 'Back to all sections',
            'common.free': 'FREE',
            'common.pro': 'PRO',
            'common.completed': 'Completed: {{done}} of {{total}} ({{percent}}%)',
            'common.continue': 'Continue',
            'common.prev': 'Back',
            'common.next': 'Next',
            'common.prevDay': 'Previous day',
            'common.nextDay': 'Next day',
            'common.settings': 'Settings',
            'lesson.complete': 'Complete lesson',
            'lesson.title': 'Lesson title',
            'lesson.intro': 'Introduction…',

            'home.greeting': 'Assalamu alaikum!',
            'home.subtitle': 'Your guide to the world of Islam',
            'home.startTitle': 'Starting in Islam',
            'home.startDesc': 'First steps, learning and support',
            'home.pathTitle': 'The path in Islam',
            'home.pathDesc': 'Deepen your knowledge with lectures and guidance',
            'home.familyTitle': 'Family and nikah',
            'home.familyDesc': 'Preparation, organisation and family values',
            'home.birthTitle': 'The birth of a child',
            'home.birthDesc': 'Support for parents and essential rites',
            'home.lossTitle': 'Losing a loved one',
            'home.lossDesc': 'Janazah arrangements, burial and helping the family',

            'islam.title': 'Starting in Islam',
            'islam.subtitle': 'Your path begins with small steps. Learn the foundations of Islam gradually, at your own pace, without rush or fear.',
            'islam.epigraph': '“Indeed, your religion is your flesh and blood, so protect it.”',
            'islam.epigraphAuthor': '— From the guidance of Ibn Umar',
            'islam.block1': 'Part 1. The first and most important (Foundations)',
            'islam.block2': 'Part 2. Getting to know Allah and the Prophet ﷺ',
            'islam.block3': 'Part 3. Practice for beginners',
            'islam.block4': 'Part 4. Character and adaptation',

            'family.title': 'Family and Nikah',
            'family.subtitle': 'Family in Islam is more than a union of two people. It is responsibility, mercy, trust and a shared path to the pleasure of Allah. Learn gradually so that your relationship is built on knowledge, not assumptions.',
            'family.epigraph': '“The most perfect believers in faith are those with the best character, and the best of you are those who treat their wives best.”',
            'family.epigraphAuthor': '— Jami at-Tirmidhi, hadith 1162 (hasan sahih)',
            'family.block1': 'Part 1. Building a family and choosing a partner (Foundation)',
            'family.block1Desc': 'How to choose the person with whom you will share your life and your faith.',
            'family.block2': 'Part 2. Marriage contract (Practice and conditions)',
            'family.block2Desc': 'What you need to know before an Islamic marriage.',
            'family.block3': 'Part 3. Family life and the rights of spouses (Daily life and relationships)',
            'family.block3Desc': 'How to build a family on love, respect and responsibility.',
            'family.block4': 'Part 4. Trials and divorce (Talaq)',
            'family.block4Desc': 'A serious topic worth knowing without fear or misconceptions.',

            'birth.title': 'The birth of a child',
            'birth.subtitle': 'A child is a gift from Allah, not a possession. They come into this world with rights that the Almighty has entrusted to parents. Learn the rites and duties gradually so that you can welcome and raise them in accordance with the Sunnah.',
            'birth.epigraph': '“My Lord, grant me righteous offspring. Indeed, You are the Hearer of supplication.”',
            'birth.epigraphAuthor': '— Quran, 3:38 (meaning)',
            'birth.block1': 'Part 1. Welcoming the newborn and the first rites',
            'birth.block1Desc': 'The first hours and days: gratitude, adhan, tahnik, the name and aqiqah.',
            'birth.block2': 'Part 2. Care, health and upbringing',
            'birth.block2Desc': 'How to raise a child physically and spiritually so that care becomes worship.',

            'loss.title': 'Losing a loved one',
            'loss.subtitle': 'The death of a loved one is one of the hardest trials. Islam does not ask you to be without feelings. It teaches you to pass through grief without losing faith, to preserve dignity and to help the deceased in ways that truly benefit them.',
            'loss.epigraph': '“Indeed, we belong to Allah, and to Him we return.”',
            'loss.epigraphAuthor': '— Quran, 2:156 (meaning)',
            'loss.block1': 'Part 1. The first days after loss',
            'loss.block1Desc': 'Patience, tears, the first steps, burial and what benefits the deceased.',

            'catalog.title': 'Knowledge',
            'catalog.subtitle': 'Study the foundations of the religion and classic works.',
            'catalog.booksTitle': 'Islamic book studies',
            'catalog.booksSubtitle': 'Study classic works through detailed lessons.',
            'catalog.groupAqida': 'Aqeedah and Tawheed',
            'catalog.groupFiqh': 'Fiqh and worship',
            'catalog.groupSira': 'Seerah — the life of Prophet Muhammad ﷺ',
            'catalog.section.1': 'Aqeedah',
            'catalog.section.2': 'Fiqh',
            'catalog.section.3': 'Seerah',
            'catalog.book.1': 'Kitab at-Tawheed',
            'catalog.book.2': 'Al-Aqeedah al-Wasitiyyah',
            'catalog.book.3': 'Al-Aqeedah at-Tahawiyyah',
            'catalog.book.4': 'Important Lessons for the Whole Ummah',
            'catalog.book.5': 'Umdat al-Ahkam',
            'catalog.book.6': 'Riyad as-Salihin',
            'catalog.book.7': 'Forty Hadiths',
            'catalog.book.8': 'Bulugh al-Maram',
            'catalog.book.9': 'Al-Adab al-Mufrad',
            'catalog.book.10': 'The Sealed Nectar',
            'catalog.book.11': 'Biography of the Prophet',
            'catalog.book.12': 'Prophetic Seerah',
            'catalog.program': 'Curriculum',
            'catalog.about': 'About the book',
            'catalog.benefits': 'Benefits of studying',
            'catalog.sectionFree': 'All lessons in this section are free',
            'catalog.bookTitle': 'Book title',
            'catalog.bookAuthor': 'Author',
            'catalog.sectionTitle': 'Section',
            'catalog.sectionDesc': 'Description',

            'dua.title': 'Duas and Adhkar',
            'dua.subtitle': 'Turning to the Almighty in every situation',
            'dua.morning.title': 'Morning adhkar',
            'dua.morning.desc': 'Duas for a blessed start to the day',
            'dua.evening.title': 'Evening adhkar',
            'dua.evening.desc': 'Duas for protection and calm before sleep',
            'dua.afterPrayer.title': 'Duas after obligatory prayers',
            'dua.afterPrayer.desc': 'Remembering Allah after prayer',
            'dua.everyday.title': 'Duas for everyday life',
            'dua.everyday.desc': 'Daily requests and expressions of gratitude',
            'dua.istighfar.title': 'Duas of repentance (istighfar)',
            'dua.istighfar.desc': 'Asking forgiveness for sins',
            'dua.anxiety.title': 'For anxiety, sadness and debt',
            'dua.anxiety.desc': 'Duas for calming the soul and finding relief',
            'dua.protection.title': 'Protection from evil and the evil eye',
            'dua.protection.desc': 'Duas against Shaytan, envy and harm',
            'dua.knowledge.title': 'Knowledge and ease in affairs',
            'dua.knowledge.desc': 'Duas for success and wisdom',
            'dua.family.title': 'For family, parents and offspring',
            'dua.family.desc': 'Prayers for loved ones and children',
            'dua.health.title': 'Health and healing',
            'dua.health.desc': 'Duas against illness and for strength',
            'dua.iman.title': 'Strengthening iman',
            'dua.iman.desc': 'Duas to strengthen faith in the heart',
            'dua.inDevelopment': 'This section is under development',
            'dua.history': 'History',
            'dua.benefit': 'Benefit',
            'dua.source': 'Source: {{source}}',

            'settings.title': 'Settings',
            'settings.subtitle': 'Personalise the app',
            'settings.account.login': 'Sign in',
            'settings.account.loginDesc': 'Sign in to save your progress',
            'settings.account.profile': 'My profile',
            'settings.theme': 'Appearance',
            'settings.themeLight': 'Light',
            'settings.themeDark': 'Dark',
            'settings.language': 'App language',
            'settings.about': 'About the app',
            'settings.version': 'Version 1.0.0 • AMANAH',
            'settings.account.title': 'My account',
            'settings.account.userName': 'Username',
            'settings.account.notSet': 'Not set',
            'settings.account.newName': 'Enter a new name',
            'settings.account.saveName': 'Save name',
            'settings.account.email': 'Email',
            'settings.account.newEmail': 'New email',
            'settings.account.currentPass': 'Current password',
            'settings.account.changeEmail': 'Change email',
            'settings.account.password': 'Password',
            'settings.account.newPass': 'New password (min. 6 characters)',
            'settings.account.changePass': 'Change password',
            'settings.account.logout': 'Sign out',
            'settings.account.loginBtn': 'Sign in',
            'settings.account.register': 'Create account',

            'profile.title': 'My progress',
            'profile.withName': 'Profile: {{name}}',
            'profile.loginPrompt': 'Sign in to save your progress and see it here.',
            'profile.login': 'Sign in',
            'profile.loading': 'Loading…',
            'profile.notStarted': 'You have not started learning yet. Go to “Knowledge” and choose a book!',
            'profile.stoppedAt': 'Last opened: {{title}}',
            'profile.saved': 'Progress saved',
            'profile.settingsBtn': '⚙️ Settings',

            'pro.title': 'PRO Subscription',
            'pro.desc': 'This lesson is available only with a PRO subscription. Unlock all lessons in all books.',
            'pro.activate': 'Activate demo PRO',
            'pro.continue': 'You have PRO (Continue)',
            'pro.checking': 'Checking your account…',
            'pro.login': 'Sign in',
            'pro.activated': 'PRO activated!',
            'pro.loginToActivate': 'Sign in to activate PRO',
            'pro.saveError': 'Could not save PRO to your account. Please try again.',

            'auth.loginTitle': 'Sign in to your profile',
            'auth.loginDesc': 'Sign in to sync your progress',
            'auth.registerTitle': 'Create an account',
            'auth.registerDesc': 'Create an account to save your data',
            'auth.loginBtn': 'Sign in',
            'auth.registerBtn': 'Create account',
            'auth.noAccount': 'No account? Create one',
            'auth.haveAccount': 'Already have an account? Sign in',
            'auth.email': 'Email',
            'auth.password': 'Password',
            'auth.showPassword': 'Show password',
            'auth.passwordMin': 'Password (min. 6 characters)',
            'auth.fillFields': 'Please fill in the fields!',
            'auth.firebaseError': 'Firebase error',
            'auth.welcome': 'Welcome!',
            'auth.wrongCredentials': 'Wrong email or password!',
            'auth.passLength': 'Password must be at least 6 characters!',
            'auth.registerSuccess': 'Registration successful! Check your email to confirm.',
            'auth.error': 'Error: {{message}}',
            'auth.emailConfirmed': 'Email confirmed! Welcome.',
            'auth.loggedInAs': 'Signed in as {{name}}.\nSign out?',
            'auth.logoutConfirm': 'Are you sure you want to sign out?',
            'auth.enterName': 'Please enter a name!',
            'auth.nameChanged': 'Name changed successfully!',
            'auth.fillEmailPass': 'Enter the new email and your current password!',
            'auth.emailSent': 'A confirmation email has been sent to your new address!',
            'auth.wrongCurrentPass': 'Wrong current password!',
            'auth.newPassLength': 'New password must be at least 6 characters!',
            'auth.passChanged': 'Password changed successfully!',
            'auth.passError': 'Error: wrong current password!',

            'prayer.today': "Today's prayers",
            'prayer.onDate': 'Prayers on {{date}}',
            'prayer.loading': 'Loading…',
            'prayer.loadError': 'Could not load prayer times. Check your internet connection.',
            'prayer.fajr': 'Fajr (Dawn)',
            'prayer.dhuhr': 'Dhuhr (Noon)',
            'prayer.asr': 'Asr (Afternoon)',
            'prayer.maghrib': 'Maghrib (Sunset)',
            'prayer.isha': 'Isha (Night)',
            'prayer.fajr.short': 'Fajr',
            'prayer.dhuhr.short': 'Dhuhr',
            'prayer.asr.short': 'Asr',
            'prayer.maghrib.short': 'Maghrib',
            'prayer.isha.short': 'Isha',

            'qibla.title': 'Qibla direction',
            'qibla.hint': 'Rotate your phone...',
            'qibla.angle': 'Qibla angle',
            'qibla.aligned': 'You are facing the Qibla!',
            'qibla.turn': 'Keep rotating until the Kaaba aligns with the green marker',
            'qibla.phoneOnly': 'The compass is available only on phones. Use the Qibla angle.',
            'qibla.coords': 'Coordinates: {{lat}}, {{lng}}',
            'qibla.gpsUnavailable': 'GPS unavailable. Using Moscow.',
            'qibla.requesting': 'Requesting GPS...',
            'compass.n': 'N',
            'compass.e': 'E',
            'compass.s': 'S',
            'compass.w': 'W',

            'language.title': 'App language',
            'language.subtitle': 'Choose the interface language',
            'language.ru': 'Russian',
            'language.en': 'English',
            'language.ar': 'Arabic',
            'language.changed': 'Language changed'
        },

        ar: {
            'page.indexTitle': 'أمانة — طريقك',
            'page.catalogTitle': 'أمانة — المعرفة',
            'page.duaTitle': 'أمانة — الأدعية',
            'page.profileTitle': 'أمانة — الملف الشخصي',
            'page.settingsTitle': 'أمانة — الإعدادات',

            'app.tagline': 'دِينُكَ أَمَانَتُك',

            'nav.home': 'الرئيسية',
            'nav.knowledge': 'المعرفة',
            'nav.dua': 'الأدعية',
            'nav.profile': 'الملف الشخصي',

            'header.qibla': 'القبلة',
            'header.prayer': 'الصلاة',
            'header.profile': 'الملف',
            'header.settings': 'الإعدادات',

            'common.back': 'رجوع',
            'common.home': 'الرئيسية',
            'common.close': 'إغلاق',
            'common.cancel': 'إلغاء',
            'common.loading': 'جارٍ التحميل…',
            'common.error': 'خطأ',
            'common.backToLessons': 'العودة إلى الدروس',
            'common.backToKnowledge': 'العودة إلى المعرفة',
            'common.backToProfile': 'العودة إلى الملف الشخصي',
            'common.backToSections': 'العودة إلى جميع الأقسام',
            'common.free': 'مجاني',
            'common.pro': 'PRO',
            'common.completed': 'أكملت {{done}} من {{total}} ({{percent}}%)',
            'common.continue': 'متابعة',
            'common.prev': 'رجوع',
            'common.next': 'التالي',
            'common.prevDay': 'اليوم السابق',
            'common.nextDay': 'اليوم التالي',
            'common.settings': 'الإعدادات',
            'lesson.complete': 'إنهاء الدرس',
            'lesson.title': 'عنوان الدرس',
            'lesson.intro': 'مقدمة…',

            'home.greeting': 'السلام عليكم!',
            'home.subtitle': 'دليلك في عالم الإسلام',
            'home.startTitle': 'البداية في الإسلام',
            'home.startDesc': 'خطواتك الأولى والتعلم والدعم',
            'home.pathTitle': 'الطريق في الإسلام',
            'home.pathDesc': 'تعميق المعرفة والدروس والإرشاد',
            'home.familyTitle': 'الأسرة والزواج',
            'home.familyDesc': 'التحضير والتنظيم والقيم الأسرية',
            'home.birthTitle': 'ولادة الطفل',
            'home.birthDesc': 'دعم الوالدين والمناسك الضرورية',
            'home.lossTitle': 'فقدان عزيز',
            'home.lossDesc': 'ترتيبات الجنازة والدفن ومساعدة الأسرة',

            'islam.title': 'البداية في الإسلام',
            'islam.subtitle': 'تبدأ طريقك بخطوات صغيرة. تعلّم أسس الإسلام تدريجيًا، وفق وتيرتك، دون عجلة أو خوف.',
            'islam.epigraph': '«إن دينك هو لحمك ودمك فاحفظه».',
            'islam.epigraphAuthor': '— من نصائح ابن عمر',
            'islam.block1': 'الجزء 1. الأهم والأول (الأساسيات)',
            'islam.block2': 'الجزء 2. التعرف على الله والنبي ﷺ',
            'islam.block3': 'الجزء 3. التطبيق العملي للمبتدئ',
            'islam.block4': 'الجزء 4. الأخلاق والتكيّف',

            'family.title': 'الأسرة والزواج',
            'family.subtitle': 'الأسرة في الإسلام ليست مجرد اتحاد بين شخصين، بل مسؤولية ورحمة وثقة وطريق مشترك إلى رضا الله. تعلّم تدريجيًا لتبني علاقتك على المعرفة لا على الظنون.',
            'family.epigraph': '«أكمل المؤمنين إيمانًا أحسنهم أخلاقًا، وخيركم خيركم لأهله».',
            'family.epigraphAuthor': '— جامع الترمذي، حديث 1162 (حسن صحيح)',
            'family.block1': 'الجزء 1. بناء الأسرة واختيار الشريك (الأساس)',
            'family.block1Desc': 'كيف تختار من تشاركه حياتك ودينك.',
            'family.block2': 'الجزء 2. عقد الزواج (التطبيق والشروط)',
            'family.block2Desc': 'ما تحتاج معرفته قبل الزواج الإسلامي.',
            'family.block3': 'الجزء 3. الحياة الأسرية وحقوق الزوجين (الحياة اليومية والعلاقات)',
            'family.block3Desc': 'كيف تبني أسرة على المحبة والاحترام والمسؤولية.',
            'family.block4': 'الجزء 4. الابتلاءات والطلاق',
            'family.block4Desc': 'موضوع جدي ينبغي معرفته دون خوف أو مفاهيم خاطئة.',

            'birth.title': 'ولادة الطفل',
            'birth.subtitle': 'الطفل هدية من الله وليس ملكًا. يأتي إلى هذه الدنيا بحقوق ائتمن الله الوالدين عليها. تعلّم المناسك والواجبات تدريجيًا لتستقبله وتربيه وفق السنة.',
            'birth.epigraph': '«رب هب لي من لدنك ذرية طيبة إنك سميع الدعاء».',
            'birth.epigraphAuthor': '— القرآن، 3:38',
            'birth.block1': 'الجزء 1. استقبال المولود والمناسك الأولى',
            'birth.block1Desc': 'الساعات والأيام الأولى: الشكر، الأذان، التحنيك، الاسم والعقيقة.',
            'birth.block2': 'الجزء 2. الرعاية والصحة والتربية',
            'birth.block2Desc': 'كيف تربي طفلك جسديًا وروحيًا لتكون الرعاية عبادة.',

            'loss.title': 'فقدان عزيز',
            'loss.subtitle': 'موت العزيز من أشد الابتلاءات. لا يطلب الإسلام منك أن تكون بلا مشاعر، بل يعلّمك أن تعبر الحزن دون أن تفقد إيمانك، وأن تحفظ كرامتك وتنفع الميت بما ينفعه حقًا.',
            'loss.epigraph': '«إنا لله وإنا إليه راجعون».',
            'loss.epigraphAuthor': '— القرآن، 2:156',
            'loss.block1': 'الجزء 1. الأيام الأولى بعد الفقد',
            'loss.block1Desc': 'الصبر والدموع والخطوات الأولى والدفن وما ينفع الميت.',

            'catalog.title': 'المعرفة',
            'catalog.subtitle': 'ادرس أسس الدين والأعمال الكلاسيكية.',
            'catalog.booksTitle': 'دراسة الكتب الإسلامية',
            'catalog.booksSubtitle': 'ادرس الأعمال الكلاسيكية عبر دروس مفصلة.',
            'catalog.groupAqida': 'العقيدة والتوحيد',
            'catalog.groupFiqh': 'الفقه والعبادة',
            'catalog.groupSira': 'السيرة — حياة النبي محمد ﷺ',
            'catalog.section.1': 'العقيدة',
            'catalog.section.2': 'الفقه',
            'catalog.section.3': 'السيرة',
            'catalog.book.1': 'كتاب التوحيد',
            'catalog.book.2': 'العقيدة الواسطية',
            'catalog.book.3': 'العقيدة الطحاوية',
            'catalog.book.4': 'دروس مهمة للأمة',
            'catalog.book.5': 'عمدة الأحكام',
            'catalog.book.6': 'رياض الصالحين',
            'catalog.book.7': 'الأربعون حديثًا',
            'catalog.book.8': 'بلوغ المرام',
            'catalog.book.9': 'الأدب المفرد',
            'catalog.book.10': 'الرحيق المختوم',
            'catalog.book.11': 'سيرة النبي',
            'catalog.book.12': 'السيرة النبوية',
            'catalog.program': 'المنهج',
            'catalog.about': 'عن الكتاب',
            'catalog.benefits': 'فوائد الدراسة',
            'catalog.sectionFree': 'جميع دروس هذا القسم مجانية',
            'catalog.bookTitle': 'اسم الكتاب',
            'catalog.bookAuthor': 'المؤلف',
            'catalog.sectionTitle': 'القسم',
            'catalog.sectionDesc': 'الوصف',

            'dua.title': 'الأدعية والأذكار',
            'dua.subtitle': 'التوجه إلى الله في كل حال',
            'dua.morning.title': 'أذكار الصباح',
            'dua.morning.desc': 'أدعية لبداية يوم مباركة',
            'dua.evening.title': 'أذكار المساء',
            'dua.evening.desc': 'أدعية للحماية والطمأنينة قبل النوم',
            'dua.afterPrayer.title': 'أدعية بعد الصلوات المفروضة',
            'dua.afterPrayer.desc': 'ذكر الله بعد الصلاة',
            'dua.everyday.title': 'أدعية لكل مناسبات الحياة',
            'dua.everyday.desc': 'طلبات يومية وشكر',
            'dua.istighfar.title': 'أدعية التوبة (الاستغفار)',
            'dua.istighfar.desc': 'طلب المغفرة للذنوب',
            'dua.anxiety.title': 'من القلق والحزن والديون',
            'dua.anxiety.desc': 'أدعية لطمأنينة النفس وتيسير الأمور',
            'dua.protection.title': 'الحماية من الشر والعين',
            'dua.protection.desc': 'أدعية من الشيطان والحسد والأذى',
            'dua.knowledge.title': 'العلم والتيسير في الأمور',
            'dua.knowledge.desc': 'أدعية للنجاح والحكمة',
            'dua.family.title': 'عن الأسرة والوالدين والذرية',
            'dua.family.desc': 'أدعية للأحباب والأطفال',
            'dua.health.title': 'الصحة والشفاء',
            'dua.health.desc': 'أدعية من الأمراض لتقوية البدن',
            'dua.iman.title': 'تقوية الإيمان',
            'dua.iman.desc': 'أدعية لتقوية الإيمان في القلب',
            'dua.inDevelopment': 'هذا القسم قيد التطوير',
            'dua.history': 'القصة',
            'dua.benefit': 'الفائدة',
            'dua.source': 'المصدر: {{source}}',

            'settings.title': 'الإعدادات',
            'settings.subtitle': 'خصّص التطبيق لنفسك',
            'settings.account.login': 'تسجيل الدخول',
            'settings.account.loginDesc': 'سجّل الدخول لحفظ تقدمك',
            'settings.account.profile': 'ملفي الشخصي',
            'settings.theme': 'المظهر',
            'settings.themeLight': 'فاتح',
            'settings.themeDark': 'داكن',
            'settings.language': 'لغة التطبيق',
            'settings.about': 'حول التطبيق',
            'settings.version': 'الإصدار 1.0.0 • أمانة',
            'settings.account.title': 'حسابي',
            'settings.account.userName': 'اسم المستخدم',
            'settings.account.notSet': 'غير محدد',
            'settings.account.newName': 'أدخل اسمًا جديدًا',
            'settings.account.saveName': 'حفظ الاسم',
            'settings.account.email': 'البريد الإلكتروني',
            'settings.account.newEmail': 'البريد الجديد',
            'settings.account.currentPass': 'كلمة المرور الحالية',
            'settings.account.changeEmail': 'تغيير البريد',
            'settings.account.password': 'كلمة المرور',
            'settings.account.newPass': 'كلمة مرور جديدة (6 أحرف على الأقل)',
            'settings.account.changePass': 'تغيير كلمة المرور',
            'settings.account.logout': 'تسجيل الخروج',
            'settings.account.loginBtn': 'تسجيل الدخول',
            'settings.account.register': 'إنشاء حساب',

            'profile.title': 'تقدمي',
            'profile.withName': 'الملف الشخصي: {{name}}',
            'profile.loginPrompt': 'سجّل الدخول لحفظ تقدمك ورؤيته هنا.',
            'profile.login': 'تسجيل الدخول',
            'profile.loading': 'جارٍ التحميل…',
            'profile.notStarted': 'لم تبدأ التعلم بعد. انتقل إلى «المعرفة» واختر كتابًا!',
            'profile.stoppedAt': 'آخر درس: {{title}}',
            'profile.saved': 'تم حفظ التقدم',
            'profile.settingsBtn': '⚙️ الإعدادات',

            'pro.title': 'اشتراك PRO',
            'pro.desc': 'هذا الدرس متاح فقط مع اشتراك PRO. افتح جميع دروس جميع الكتب.',
            'pro.activate': 'تفعيل PRO التجريبي',
            'pro.continue': 'لديك PRO (متابعة)',
            'pro.checking': 'جارٍ التحقق من الحساب…',
            'pro.login': 'تسجيل الدخول',
            'pro.activated': 'تم تفعيل PRO!',
            'pro.loginToActivate': 'سجّل الدخول لتفعيل PRO',
            'pro.saveError': 'تعذر حفظ PRO في حسابك. حاول مرة أخرى.',

            'auth.loginTitle': 'تسجيل الدخول إلى ملفك',
            'auth.loginDesc': 'سجّل الدخول لمزامنة تقدمك',
            'auth.registerTitle': 'إنشاء حساب',
            'auth.registerDesc': 'أنشئ حسابًا لحفظ بياناتك',
            'auth.loginBtn': 'تسجيل الدخول',
            'auth.registerBtn': 'إنشاء حساب',
            'auth.noAccount': 'ليس لديك حساب؟ أنشئ واحدًا',
            'auth.haveAccount': 'لديك حساب؟ سجّل الدخول',
            'auth.email': 'البريد الإلكتروني',
            'auth.password': 'كلمة المرور',
            'auth.showPassword': 'إظهار كلمة المرور',
            'auth.passwordMin': 'كلمة المرور (6 أحرف على الأقل)',
            'auth.fillFields': 'املأ الحقول!',
            'auth.firebaseError': 'خطأ في Firebase',
            'auth.welcome': 'مرحبًا بك!',
            'auth.wrongCredentials': 'البريد أو كلمة المرور غير صحيحة!',
            'auth.passLength': 'يجب أن تكون كلمة المرور 6 أحرف على الأقل!',
            'auth.registerSuccess': 'تم التسجيل بنجاح! تحقق من بريدك للتأكيد.',
            'auth.error': 'خطأ: {{message}}',
            'auth.emailConfirmed': 'تم تأكيد البريد! مرحبًا بك.',
            'auth.loggedInAs': 'مسجّل الدخول باسم {{name}}.\nهل تريد تسجيل الخروج؟',
            'auth.logoutConfirm': 'هل أنت متأكد من تسجيل الخروج؟',
            'auth.enterName': 'أدخل اسمًا!',
            'auth.nameChanged': 'تم تغيير الاسم بنجاح!',
            'auth.fillEmailPass': 'أدخل البريد الجديد وكلمة المرور الحالية!',
            'auth.emailSent': 'تم إرسال رسالة التأكيد إلى بريدك الجديد!',
            'auth.wrongCurrentPass': 'كلمة المرور الحالية غير صحيحة!',
            'auth.newPassLength': 'يجب أن تكون كلمة المرور الجديدة 6 أحرف على الأقل!',
            'auth.passChanged': 'تم تغيير كلمة المرور بنجاح!',
            'auth.passError': 'خطأ: كلمة المرور الحالية غير صحيحة!',

            'prayer.today': 'صلوات اليوم',
            'prayer.onDate': 'الصلوات في {{date}}',
            'prayer.loading': 'جارٍ التحميل…',
            'prayer.loadError': 'تعذر تحميل أوقات الصلاة. تحقق من اتصالك بالإنترنت.',
            'prayer.fajr': 'الفجر',
            'prayer.dhuhr': 'الظهر',
            'prayer.asr': 'العصر',
            'prayer.maghrib': 'المغرب',
            'prayer.isha': 'العشاء',
            'prayer.fajr.short': 'الفجر',
            'prayer.dhuhr.short': 'الظهر',
            'prayer.asr.short': 'العصر',
            'prayer.maghrib.short': 'المغرب',
            'prayer.isha.short': 'العشاء',

            'qibla.title': 'اتجاه القبلة',
            'qibla.hint': 'أدر هاتفك...',
            'qibla.angle': 'زاوية القبلة',
            'qibla.aligned': 'أنت تواجه القبلة!',
            'qibla.turn': 'استمر في الدوران حتى تنطبق الكعبة على العلامة الخضراء',
            'qibla.phoneOnly': 'البوصلة متاحة على الهاتف فقط. استخدم زاوية القبلة.',
            'qibla.coords': 'الإحداثيات: {{lat}}, {{lng}}',
            'qibla.gpsUnavailable': 'GPS غير متاح. نستخدم موسكو.',
            'qibla.requesting': 'جارٍ طلب GPS...',
            'compass.n': 'ش',
            'compass.e': 'ق',
            'compass.s': 'ج',
            'compass.w': 'غ',

            'language.title': 'لغة التطبيق',
            'language.subtitle': 'اختر لغة الواجهة',
            'language.ru': 'الروسية',
            'language.en': 'الإنجليزية',
            'language.ar': 'العربية',
            'language.changed': 'تم تغيير اللغة'
        }
    };

    var current = detectLanguage();

    function readStoredLanguage() {
        try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function writeStoredLanguage(lang) {
        try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    }

    function detectLanguage() {
        var saved = readStoredLanguage();
        if (saved && translations[saved]) return saved;

        var browser = '';
        try { browser = (navigator.language || '').toLowerCase(); } catch (e) { /* ignore */ }
        var base = browser.split('-')[0];
        if (translations[base]) return base;

        return DEFAULT_LANG;
    }

    function t(key, vars, fallback) {
        var dict = translations[current] || translations[DEFAULT_LANG];
        var value = dict[key];
        if (value == null) value = translations[DEFAULT_LANG][key];
        if (value == null) return fallback != null ? fallback : key;

        if (vars) {
            Object.keys(vars).forEach(function (name) {
                value = value.split('{{' + name + '}}').join(String(vars[name]));
            });
        }
        return value;
    }

    function apply(root) {
        var scope = root || document;
        var html = document.documentElement;

        html.lang = current;
        html.dir = current === 'ar' ? 'rtl' : 'ltr';
        html.setAttribute('data-lang', current);

        scope.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var value = t(key, null, null);
            if (value !== key) el.textContent = value;
        });

        scope.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            var value = t(key, null, null);
            if (value !== key) el.innerHTML = value;
        });

        scope.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
        });

        scope.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
            el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label')));
        });

        scope.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
        });

        updateSwitcher();
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;
        var changed = lang !== current;
        current = lang;
        writeStoredLanguage(lang);
        apply(document);

        document.dispatchEvent(new CustomEvent('amanah:languagechange', {
            detail: { lang: lang, changed: changed }
        }));

        closeSwitcher();
    }

    function locale() {
        return (LOCALES[current] || LOCALES.ru).locale;
    }

    function languageCode() {
        return (LOCALES[current] || LOCALES.ru).code;
    }

    function languageName(lang) {
        return t('language.' + (lang || current));
    }

    function buildSwitcher() {
        if (document.getElementById('language-fab')) return;

        var fab = document.createElement('button');
        fab.type = 'button';
        fab.id = 'language-fab';
        fab.className = 'lang-fab';
        fab.setAttribute('data-i18n-aria-label', 'language.title');
        fab.innerHTML =
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
            '<circle cx="12" cy="12" r="9"></circle>' +
            '<path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"></path>' +
            '</svg><span class="lang-fab-code"></span>';
        fab.addEventListener('click', openSwitcher);
        document.body.appendChild(fab);

        var overlay = document.createElement('div');
        overlay.id = 'language-modal';
        overlay.className = 'modal-overlay lang-overlay';
        overlay.innerHTML =
            '<div class="modal-content lang-modal-content" role="dialog" aria-modal="true" aria-labelledby="language-modal-title">' +
            '<h3 id="language-modal-title" data-i18n="language.title"></h3>' +
            '<p data-i18n="language.subtitle"></p>' +
            '<div class="lang-options">' +
            '<button type="button" class="lang-option" data-lang="ru">' +
            '<span class="lang-option-text"><span class="lang-option-name" data-i18n="language.ru"></span><span class="lang-option-native">Русский</span></span>' +
            '<span class="lang-check" aria-hidden="true">✓</span></button>' +
            '<button type="button" class="lang-option" data-lang="en">' +
            '<span class="lang-option-text"><span class="lang-option-name" data-i18n="language.en"></span><span class="lang-option-native">English</span></span>' +
            '<span class="lang-check" aria-hidden="true">✓</span></button>' +
            '<button type="button" class="lang-option" data-lang="ar">' +
            '<span class="lang-option-text"><span class="lang-option-name" data-i18n="language.ar"></span><span class="lang-option-native">العربية</span></span>' +
            '<span class="lang-check" aria-hidden="true">✓</span></button>' +
            '</div>' +
            '<button type="button" class="modal-btn modal-btn--secondary" data-i18n="common.close"></button>' +
            '</div>';
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) closeSwitcher();
        });

        overlay.querySelectorAll('.lang-option').forEach(function (button) {
            button.addEventListener('click', function () {
                setLanguage(button.getAttribute('data-lang'));
            });
        });

        var closeBtn = overlay.querySelector('.modal-btn');
        if (closeBtn) closeBtn.addEventListener('click', closeSwitcher);

        apply(overlay);
    }

    function updateSwitcher() {
        var code = document.querySelector('.lang-fab-code');
        if (code) code.textContent = languageCode();

        var fab = document.getElementById('language-fab');
        if (fab) fab.setAttribute('aria-label', t('language.title'));

        document.querySelectorAll('.lang-option').forEach(function (button) {
            var active = button.getAttribute('data-lang') === current;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    function openSwitcher() {
        buildSwitcher();
        var overlay = document.getElementById('language-modal');
        if (overlay) overlay.classList.add('active');
    }

    function closeSwitcher() {
        var overlay = document.getElementById('language-modal');
        if (overlay) overlay.classList.remove('active');
    }

    function onKeydown(event) {
        if (event.key === 'Escape') closeSwitcher();
    }

    function init() {
        buildSwitcher();
        apply(document);
        document.addEventListener('keydown', onKeydown);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.I18N = {
        t: t,
        apply: apply,
        setLang: setLanguage,
        getLang: function () { return current; },
        getLocale: locale,
        getCode: languageCode,
        getName: languageName,
        openSwitcher: openSwitcher,
        closeSwitcher: closeSwitcher,
        languages: ['ru', 'en', 'ar'],
        translations: translations
    };

    window.t = t;
})(window, document);
