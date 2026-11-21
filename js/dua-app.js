/* ============================================================
   AMANAH · Дуа и азкары
   Тексты — только Коран и достоверные хадисы (аль-Бухари, Муслим,
   ат-Тирмизи, Абу Давуд, ан-Насаи, Ибн Маджа, Муснад Ахмад).
   Ключевые арабские тексты сверены по sunnah.com.
   Формат карточки сохранён: арабский / транскрипция / перевод /
   история / польза / источник, всё на RU / EN / AR.
   ============================================================ */
(function (window, document) {
    'use strict';

    // Локализованная строка
    function L(ru, en, ar) { return { ru: ru, en: en, ar: ar }; }

    // Сборка карточки из компактной записи.
    // tr[0] — кириллическая транскрипция, tr[1] — латинская,
    // для AR транскрипция не выводится (см. renderDuaSection).
    function D(o) {
        return {
            title: L(o.t[0], o.t[1], o.t[2]),
            benefitTitle: L(o.b[0], o.b[1], o.b[2]),
            arabic: o.a,
            translit: L(o.tr[0], o.tr[1], o.a),
            translate: L(o.tn[0], o.tn[1], o.tn[2] || o.a),
            story: L(o.s[0], o.s[1], o.s[2] || o.s[0]),
            benefit: L(o.bf[0], o.bf[1], o.bf[2] || o.bf[0]),
            source: L(o.src[0], o.src[1], o.src[2] || o.src[0])
        };
    }

    const duasData = {};
    function section(id, title, desc, items) {
        duasData[id] = {
            title: L(title[0], title[1], title[2]),
            desc: L(desc[0], desc[1], desc[2]),
            items: items.map(D)
        };
    }

    /* ============================================================
       1. УТРЕННИЕ АЗКАРЫ
       ============================================================ */
    section('morning',
        ['Утренние азкары', 'Morning adhkar', 'أذكار الصباح'],
        ['Дуа для благословенного начала дня', 'Duas for a blessed start to the day', 'أدعية لبداية يوم مباركة'],
        [
            {
                t: ['Аят аль-Курси', 'Ayat al-Kursi', 'آية الكرسي'],
                b: ['Для защиты в течение дня', 'For protection through the day', 'للحماية طوال اليوم'],
                a: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
                tr: ['Аллаху ля иляха илля хува-ль-Хаййу-ль-Каййум. Ля та\'хузуху синатун ва ля наум. Ляху ма фи-с-самавати ва ма фи-ль-ард. Ман за-ль-лязи яшфа\'у \'индаху илля би-изнихи. Я\'ляму ма байна айдихим ва ма хальфахум, ва ля юхитуна би-шай\'ин мин \'ильмихи илля бима ша\'а. Васи\'а курсиййуху-с-самавати ва-ль-арда, ва ля я\'удуху хифзухума, ва хува-ль-\'Алиййу-ль-\'Азым', 'Allahu la ilaha illa huwa al-Hayyul-Qayyum. La ta\'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa\'u \'indahu illa bi-idhnihi. Ya\'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi-shay\'in min \'ilmihi illa bima sha\'a. Wasi\'a kursiyyuhus-samawati wal-arda, wa la ya\'uduhu hifzuhuma, wa huwa al-\'Aliyyul-\'Azim'],
                tn: ['«Аллах — нет божества, кроме Него, Живого, Поддерживающего всё. Не овладевает Им ни дремота, ни сон. Ему принадлежит то, что на небесах и на земле. Кто заступится перед Ним иначе как с Его дозволения? Он знает то, что было до них и что будет после них; они не объемлют ничего из Его знания, кроме того, что Он пожелал. Престол Его объемлет небеса и землю, и не тяготит Его охрана их. Он — Возвышенный, Великий».', '«Allah — there is no deity except Him, the Ever-Living, the Sustainer of all. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and the earth. Who can intercede with Him except by His permission? He knows what is before them and what is behind them, and they encompass nothing of His knowledge except what He wills. His Footstool extends over the heavens and the earth, and preserving them does not burden Him. He is the Most High, the Most Great».', '«الله لا إله إلا هو الحيّ القيّوم، لا تأخذه سنة ولا نوم، له ما في السماوات وما في الأرض، من ذا الذي يشفع عنده إلا بإذنه، يعلم ما بين أيديهم وما خلفهم، ولا يحيطون بشيء من علمه إلا بما شاء، وسع كرسيه السماوات والأرض ولا يئوده حفظهما، وهو العليّ العظيم».'],
                s: ['Величайший аят Корана. Пророк ﷺ подтвердил, что чтение его перед сном даёт защиту до утра.', 'The greatest verse of the Quran. The Prophet ﷺ confirmed that reciting it brings protection until morning.', 'أعظم آية في القرآن، وقد أقرّ النبي ﷺ أن قراءتها توجب الحفظ حتى الصباح.'],
                bf: ['Читают утром и вечером как главный зикр защиты.', 'Recited morning and evening as the foremost dhikr of protection.', 'يُقرأ صباحًا ومساءً كأعظم ذكرٍ للحفظ.'],
                src: ['Коран, сура 2 «Аль-Бакара», аят 255; аль-Бухари, 5010', 'Quran, Surah 2 «Al-Baqarah», verse 255; Sahih al-Bukhari 5010', 'القرآن، البقرة (2): 255؛ صحيح البخاري 5010']
            },
            {
                t: ['«Асбахна…» — утреннее дуа', '«Asbahna…» — the morning dua', '«أصبحنا…» دعاء الصباح'],
                b: ['Начало дня с благодарностью и защитой', 'Beginning the day with gratitude and protection', 'بداية اليوم بالحمد والاستعاذة'],
                a: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ',
                tr: ['Асбахна ва асбаха-ль-мульку лиллях, ва-ль-хамду лиллях, ля иляха илля-Ллаху вахдаху ля шарика лях, ляху-ль-мульку ва ляху-ль-хамду ва хува \'аля кулли шай\'ин кадир. Рабби ас\'алюка хайра ма фи хаза-ль-йауми ва хайра ма ба\'даху, ва а\'узу бика мин шарри ма фи хаза-ль-йауми ва шарри ма ба\'даху. Рабби а\'узу бика мин аль-касали ва су\'и-ль-кибари, рабби а\'узу бика мин \'азабин фи-н-нари ва \'азабин фи-ль-кабри', 'Asbahna wa asbahal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa \'ala kulli shay\'in qadir. Rabbi as\'aluka khayra ma fi hadhal-yawmi wa khayra ma ba\'dahu, wa a\'udhu bika min sharri ma fi hadhal-yawmi wa sharri ma ba\'dahu. Rabbi a\'udhu bika minal-kasali wa su\'il-kibari, rabbi a\'udhu bika min \'adhabin fin-nari wa \'adhabin fil-qabr'],
                tn: ['«Мы вступили в утро, и власть Аллаха вступила в утро; вся хвала Аллаху. Нет божества, кроме одного лишь Аллаха, нет у Него сотоварища; Ему принадлежит власть и Ему хвала, и Он над всякой вещью мощен. Господь мой! Прошу у Тебя блага этого дня и блага после него и прибегаю к Тебе от зла этого дня и зла после него. Господь мой! Прибегаю к Тебе от лени и дурной старости, от наказания в огне и наказания в могиле».', '«We have entered the morning and the dominion of Allah has entered the morning; all praise is due to Allah. There is no god but Allah alone, without partner; His is the dominion and His is the praise, and He has power over all things. My Lord, I ask You for the good of this day and the good after it, and I seek refuge in You from its evil and the evil after it. My Lord, I seek refuge in You from laziness and the evil of old age, from punishment in the Fire and punishment in the grave».', '«أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير. ربّ أسألك خير هذا اليوم وخير ما بعده، وأعوذ بك من شرّه وشرّ ما بعده، وأعوذ بك من الكسل وسوء الكبر وعذاب النار والقبر».'],
                s: ['Передаёт \'Абдуллах ибн Мас\'уд: Пророк ﷺ говорил это вечером, а утром повторял то же, начиная словами «Асбахна ва асбахаль-мульку лиллях».', 'Narrated by \'Abdullah ibn Mas\'ud: the Prophet ﷺ said this in the evening, and in the morning repeated the same, beginning with «Asbahna wa asbahal-mulku lillah».', 'عن عبد الله بن مسعود: كان النبي ﷺ يقوله إذا أمسى، وإذا أصبح قال مثله: «أصبحنا وأصبح الملك لله».'],
                bf: ['Именно утренняя формула «Асбахна…»; вечерняя «Амсайна…» — отдельное дуа.', 'This is the morning «Asbahna…» wording; the evening «Amsayna…» is a separate dua.', 'هذه صيغة الصباح «أصبحنا»، أمّا «أمسينا» فدعاء المساء.'],
                src: ['Сахих Муслим, 2723 (b); вечерняя версия — 2723 (a)', 'Sahih Muslim 2723b; evening wording — 2723a', 'صحيح مسلم 2723ب؛ وصيغة المساء 2723أ']
            },
            {
                t: ['«Аллахумма бика асбахна…»', '«Allahumma bika asbahna…»', '«اللهم بكَ أصبحنا…»'],
                b: ['Жизнь и смерть — только по воле Аллаха', 'Life and death are only by Allah\'s will', 'الحياة والموت بيد الله وحده'],
                a: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ',
                tr: ['Аллахумма бика асбахна, ва бика амсайна, ва бика нахйа, ва бика намуту, ва иляйка-ль-масир', 'Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaykal-masir'],
                tn: ['«О Аллах, благодаря Тебе мы вступили в утро и благодаря Тебе вступили в вечер, благодаря Тебе мы живём и благодаря Тебе умираем, и к Тебе — возвращение».', '«O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the return».', '«اللهم بكَ أصبحنا وبكَ أمسينا، وبكَ نحيا وبكَ نموت، وإليك المصير».'],
                s: ['Пророк ﷺ учил сподвижников говорить это утром; вечерняя версия оканчивается словами «ва иляйка-н-нушур» (воскрешение).', 'The Prophet ﷺ taught his Companions to say this in the morning; the evening version ends with «wa ilaykan-nushur» (resurrection).', 'كان النبي ﷺ يعلّم أصحابه هذا الدعاء صباحًا، وتنتهي صيغة المساء بـ«وإليك النشور».'],
                bf: ['Утренняя версия заканчивается «аль-масир» — не путать с вечерней.', 'The morning version ends with «al-masir» — not to be mixed with the evening one.', 'تنتهي صيغة الصباح بـ«المصير» ولا تخلط بصيغة المساء.'],
                src: ['Джами\' ат-Тирмизи, 3391 (хасан сахих)', 'Jami\' at-Tirmidhi 3391 (hasan sahih)', 'جامع الترمذي 3391 (حسن صحيح)']
            },
            {
                t: ['Саййид аль-Истигфар — господин мольб о прощении', 'Sayyid al-Istighfar — the master of forgiveness prayers', 'سيد الاستغفار'],
                b: ['Лучшая формула покаяния', 'The best wording of repentance', 'أفضل صيغ الاستغفار'],
                a: 'اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
                tr: ['Аллахумма анта рабби, ля иляха илля анта, халяктани ва ана \'абдука, ва ана \'аля \'ахдика ва ва\'дика ма-стата\'ту, а\'узу бика мин шарри ма сана\'ту, абу\'у ляка би-ни\'матика \'аляййа, ва абу\'у ляка би-занби, фа-гфир ли, фа-иннаху ля ягфиру-з-зунуба илля анта', 'Allahumma anta rabbi, la ilaha illa anta, khalaqtani wa ana \'abduka, wa ana \'ala \'ahdika wa wa\'dika mastata\'tu, a\'udhu bika min sharri ma sana\'tu, abu\'u laka bini\'matika \'alayya, wa abu\'u laka bidhanbi, faghfir li, fa innahu la yaghfirudh-dhunuba illa anta'],
                tn: ['«О Аллах, Ты — мой Господь, нет божества, кроме Тебя. Ты создал меня, а я — Твой раб; я верен Твоему завету и обещанию, насколько могу. Прибегаю к Тебе от зла того, что я сделал. Признаю Твою милость ко мне и признаю свой грех — прости же меня, ведь никто не прощает грехов, кроме Тебя».', '«O Allah, You are my Lord, there is no god but You. You created me and I am Your servant; I am faithful to Your covenant and promise as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your blessing upon me and I admit my sin — so forgive me, for none forgives sins except You».', '«اللهم أنت ربّي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شرّ ما صنعت، أبوء لك بنعمتك عليّ وأبوء لك بذنبي، فاغفر لي فإنه لا يغفر الذنوب إلا أنت».'],
                s: ['Передаёт Шаддад ибн Аус: Пророк ﷺ назвал эту мольбу «господином истигфара» и сообщил о великой награде тому, кто произнесёт её с убеждённостью.', 'Narrated by Shaddad ibn Aws: the Prophet ﷺ called this «the master of seeking forgiveness» and promised a great reward to whoever says it with conviction.', 'عن شدّاد بن أوس: سمّاه النبي ﷺ «سيد الاستغفار» وبشّر من قاله موقنًا به.'],
                bf: ['Пророк ﷺ велел говорить её днём и ночью; читают и в утренних, и в вечерних азкарах.', 'The Prophet ﷺ prescribed it by day and night; it is recited among the morning and evening adhkar.', 'يُقال ليلًا ونهارًا، ويُقرأ في أذكار الصباح والمساء.'],
                src: ['Сахих аль-Бухари, 6306', 'Sahih al-Bukhari 6306', 'صحيح البخاري 6306']
            },
            {
                t: ['Дуа Абу Бакра (да будет доволен им Аллах)', 'The dua of Abu Bakr (may Allah be pleased with him)', 'دعاء أبي بكر رضي الله عنه'],
                b: ['Утром, вечером и перед сном', 'Morning, evening and before sleep', 'صباحًا ومساءً وعند النوم'],
                a: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ',
                tr: ['Аллахумма \'алима-ль-гайби ва-ш-шахадати, фатира-с-самавати ва-ль-арди, рабба кулли шай\'ин ва маликаху, ашхаду ан ля иляха илля анта, а\'узу бика мин шарри нафси, ва мин шарри-ш-шайтани ва ширкихи', 'Allahumma \'alimal-ghaybi wash-shahadati, fatiras-samawati wal-ardi, rabba kulli shay\'in wa malikahu, ash-hadu an la ilaha illa anta, a\'udhu bika min sharri nafsi, wa min sharrish-shaytani wa shirkih'],
                tn: ['«О Аллах, Знающий скрытое и явное, Творец небес и земли, Господь и Владыка всякой вещи! Свидетельствую, что нет божества, кроме Тебя. Прибегаю к Тебе от зла моей души, от зла шайтана и от придания им сотоварищей».', '«O Allah, Knower of the unseen and the seen, Originator of the heavens and the earth, Lord and Owner of everything! I bear witness that there is no god but You. I seek refuge in You from the evil of my soul and from the evil of Satan and his associating partners with You».', '«اللهم عالم الغيب والشهادة، فاطر السماوات والأرض، ربّ كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شرّ نفسي وشرّ الشيطان وشركه».'],
                s: ['Абу Бакр попросил Пророка ﷺ научить его словам для утра и вечера, и он велел говорить это также перед сном.', 'Abu Bakr asked the Prophet ﷺ for words to say morning and evening, and he told him to say it also before sleeping.', 'سأل أبو بكر النبي ﷺ ما يقوله إذا أصبح وإذا أمسى، فأمره به أيضًا عند المضجع.'],
                bf: ['Защита от зла собственной души и шайтана.', 'Protection from the evil of one\'s own soul and from Satan.', 'حماية من شرّ النفس والشيطان.'],
                src: ['Джами\' ат-Тирмизи, 3392 (хасан сахих); Сунан Абу Давуд', 'Jami\' at-Tirmidhi 3392 (hasan sahih); Sunan Abi Dawud', 'جامع الترمذي 3392 (حسن صحيح)؛ سنن أبي داود']
            },
            {
                t: ['«Бисми-Лляхи-ллязи…» — трижды', '«Bismillahil-ladhi…» — three times', '«بسم الله الذي…» ثلاثًا'],
                b: ['Ничего не повредит в этот день', 'Nothing will harm that day', 'لا يضرّه شيء في يومه'],
                a: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ',
                tr: ['Бисми-Лляхи-ль-лязи ля йадурру ма\'а-смихи шай\'ун фи-ль-арди ва ля фи-с-сама\'и, ва хува-с-Сами\'у-ль-\'Алим', 'Bismillahil-ladhi la yadurru ma\'as-mihi shay\'un fil-ardi wa la fis-sama\'i, wa huwas-Sami\'ul-\'Alim'],
                tn: ['«С именем Аллаха, с которым ничто не причинит вреда ни на земле, ни на небе; Он — Слышащий, Знающий».', '«In the Name of Allah, with whose Name nothing on earth or in the heaven can cause harm; He is the Hearing, the Knowing».', '«بسم الله الذي لا يضرّ مع اسمه شيء في الأرض ولا في السماء، وهو السميع العليم».'],
                s: ['Передаёт \'Усман ибн \'Аффан: кто произнесёт это трижды утром и трижды вечером, тому ничто не повредит.', 'Narrated by \'Uthman ibn \'Affan: whoever says it three times in the morning and three in the evening, nothing will harm him.', 'عن عثمان بن عفّان: من قاله ثلاثًا صباحًا وثلاثًا مساءً لم يضرّه شيء.'],
                bf: ['Читается ровно три раза утром и три раза вечером.', 'Recited exactly three times in the morning and three in the evening.', 'يُقال ثلاث مرّات صباحًا وثلاثًا مساءً.'],
                src: ['Джами\' ат-Тирмизи, 3388 (хасан сахих); Сунан Абу Давуд', 'Jami\' at-Tirmidhi 3388 (hasan sahih); Sunan Abi Dawud', 'جامع الترمذي 3388 (حسن صحيح)؛ سنن أبي داود']
            },
            {
                t: ['«Радииту би-Лляхи раббан…» — трижды', '«Raditu billahi rabban…» — three times', '«رضيت بالله ربًا…» ثلاثًا'],
                b: ['Довольство Аллахом, Исламом и Пророком ﷺ', 'Contentment with Allah, Islam and the Prophet ﷺ', 'الرضا بالله والإسلام والنبي ﷺ'],
                a: 'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا',
                tr: ['Радийту би-Лляхи раббан, ва би-ль-Ислями динан, ва би-Мухаммадин набиййан', 'Raditu billahi rabban, wa bil-Islami dinan, wa bi-Muhammadin nabiyyan'],
                tn: ['«Я доволен Аллахом как Господом, Исламом как религией и Мухаммадом ﷺ как пророком».', '«I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad ﷺ as my prophet».', '«رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد ﷺ نبيًا».'],
                s: ['Передаёт Саубан: тому, кто скажет это утром или вечером, Аллах непременно дарует Своё довольство.', 'Narrated by Thawban: whoever says it in the morning or evening, Allah will surely please him.', 'عن ثوبان: من قاله حين يمسي أو يصبح كان حقًا على الله أن يرضيه.'],
                bf: ['Произносится трижды утром и вечером.', 'Said three times in the morning and evening.', 'يُقال ثلاثًا صباحًا ومساءً.'],
                src: ['Джами\' ат-Тирмизи, 3389 (хасан); Сунан Абу Давуд', 'Jami\' at-Tirmidhi 3389 (hasan); Sunan Abi Dawud', 'جامع الترمذي 3389 (حسن)؛ سنن أبي داود']
            },
            {
                t: ['«Аль-\'афв ва-ль-\'афийа» — просьба о благополучии', '«Al-\'afw wal-\'afiyah» — asking for well-being', '«العفو والعافية»'],
                b: ['Утром и вечером не пропускал Пророк ﷺ', 'The Prophet ﷺ never omitted it, morning and evening', 'لم يكن النبي ﷺ يدعها صباحًا ومساءً'],
                a: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي. اللَّهُمَّ اسْتُرْ عَوْرَتِي وَآمِنْ رَوْعَاتِي. اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي',
                tr: ['Аллахумма инни ас\'алюка-ль-\'афийата фи-д-дунья ва-ль-ахира. Аллахумма инни ас\'алюка-ль-\'афва ва-ль-\'афийата фи дини ва дуньяя ва ахли ва мали. Аллахумма-стур \'аурати ва амин рау\'ати. Аллахумма-хфазни мин байни ядаййа ва мин хальфи ва \'ан ямини ва \'ан шимали ва мин фауки, ва а\'узу би-\'азаматика ан угталя мин тахти', 'Allahumma inni as\'alukal-\'afiyata fid-dunya wal-akhirah. Allahumma inni as\'alukal-\'afwa wal-\'afiyata fi dini wa dunyaya wa ahli wa mali. Allahummas-tur \'awrati wa amin raw\'ati. Allahumma-hfazni min bayni yadayya wa min khalfi wa \'an yamini wa \'an shimali wa min fawqi, wa a\'udhu bi-\'azamatika an ughtala min tahti'],
                tn: ['«О Аллах, прошу у Тебя благополучия в этом мире и в будущем. О Аллах, прошу у Тебя прощения и благополучия в моей религии, моих мирских делах, моей семье и моём имуществе. О Аллах, скрой мои недостатки и избавь меня от страхов. О Аллах, храни меня спереди, сзади, справа, слева и сверху, и прибегаю к Твоему величию от внезапной гибели снизу».', '«O Allah, I ask You for well-being in this world and the Hereafter. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family and my wealth. O Allah, conceal my faults and calm my fears. O Allah, guard me from before me, behind me, on my right, on my left and from above, and I seek refuge in Your greatness from being destroyed from below».', '«اللهم إني أسألك العافية في الدنيا والآخرة، وأسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عورتي وآمن روعاتي، واحفظني من بين يديّ ومن خلفي وعن يميني وعن شمالي ومن فوقي، وأعوذ بعظمتك أن أغتال من تحتي».'],
                s: ['Передаёт \'Абдуллах ибн \'Умар: Посланник Аллаха ﷺ не оставлял эти мольбы ни вечером, ни утром.', 'Narrated by \'Abdullah ibn \'Umar: the Messenger of Allah ﷺ never omitted these supplications in the evening or the morning.', 'عن عبد الله بن عمر: لم يكن رسول الله ﷺ يدع هذه الدعوات حين يمسي وحين يصبح.'],
                bf: ['Просьба о защите со всех сторон и о сокрытии недостатков.', 'A plea for protection from every direction and for one\'s faults to be concealed.', 'دعاء بالحفظ من كل جهة وستر العيوب.'],
                src: ['Сунан Абу Давуд, 5074 (сахих)', 'Sunan Abi Dawud 5074 (sahih)', 'سنن أبي داود 5074 (صحيح)']
            },
            {
                t: ['Три защитные суры (аль-Му\'аввизат)', 'The three protecting surahs (al-Mu\'awwidhat)', 'المعوّذات الثلاث'],
                b: ['Достаточны от всякого зла', 'Sufficient against every evil', 'تكفي من كل شيء'],
                a: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ',
                tr: ['Къуль хува-Ллаху ахад. Аллаху-с-Самад. Лям ялид ва лям юляд. Ва лям якун ляху куфуван ахад. Къуль а\'узу би-Рабби-ль-фалякъи мин шарри ма халякъа, ва мин шарри гасикъин иза вакаба, ва мин шарри-н-наффасати фи-ль-\'укъади, ва мин шарри хасидин иза хасада. Къуль а\'узу би-Рабби-н-наси, малики-н-наси, иляхи-н-наси, мин шарри-ль-васваси-ль-ханнаси-ль-лязи ювасвису фи судури-н-наси мина-ль-джиннати ва-н-нас', 'Qul huwallahu ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad. Qul a\'udhu bi-Rabbil-falaqi min sharri ma khalaqa, wa min sharri ghasiqin idha waqaba, wa min sharrin-naffathati fil-\'uqadi, wa min sharri hasidin idha hasada. Qul a\'udhu bi-Rabbin-nasi, malikin-nasi, ilahin-nasi, min sharril-waswasil-khannasi-lladhi yuwaswisu fi sudurin-nasi minal-jinnati wan-nas'],
                tn: ['Суры «Аль-Ихляс» (112), «Аль-Фаляк» (113) и «Ан-Нас» (114): «Скажи: Он — Аллах Единый…», «Скажи: прибегаю к Господу рассвета…», «Скажи: прибегаю к Господу людей…».', 'Surahs al-Ikhlas (112), al-Falaq (113) and an-Nas (114): «Say: He is Allah, the One…», «Say: I seek refuge in the Lord of the daybreak…», «Say: I seek refuge in the Lord of mankind…».', 'سور الإخلاص والفلق والناس: «قل هو الله أحد…»، «قل أعوذ بربّ الفلق…»، «قل أعوذ بربّ الناس…».'],
                s: ['\'Абдуллах ибн Хубайб передал: Пророк ﷺ велел читать «Къуль хува-Ллаху ахад» и две защитные суры трижды утром и вечером: «Они избавят тебя от всякого зла».', '\'Abdullah ibn Khubayb reported: the Prophet ﷺ told him to recite «Qul huwallahu ahad» and the two refuge-seeking surahs three times morning and evening: «They will suffice you against everything».', 'عن عبد الله بن خبيب: أمره النبي ﷺ بـ«قل هو الله أحد» والمعوّذتين حين يمسي وحين يصبح ثلاثًا: «تكفيك من كل شيء».'],
                bf: ['Читаются по три раза утром и вечером.', 'Recited three times each morning and evening.', 'تُقرأ ثلاث مرّات صباحًا ومساءً.'],
                src: ['Сунан Абу Давуд, 5082 (хасан); Коран, суры 112–114', 'Sunan Abi Dawud 5082 (hasan); Quran, surahs 112–114', 'سنن أبي داود 5082 (حسن)؛ القرآن، السور 112–114']
            },
            {
                t: ['«Субхана-Ллахи ва бихамдихи» — 100 раз', '«Subhanallahi wa bihamdihi» — 100 times', '«سبحان الله وبحمده» مائة مرّة'],
                b: ['Стираются грехи', 'Sins are erased', 'تحُطّ الخطايا'],
                a: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
                tr: ['Субхана-Ллахи ва бихамдихи', 'Subhanallahi wa bihamdihi'],
                tn: ['«Пречист Аллах и вся хвала Ему».', '«Glory be to Allah and all praise is His».', '«سبحان الله وبحمده».'],
                s: ['Пророк ﷺ сказал: кто произнесёт это сто раз за день, тому будут прощены грехи, даже если они подобны пене морской.', 'The Prophet ﷺ said: whoever says it a hundred times a day, his sins are erased even if they are like the foam of the sea.', 'قال النبي ﷺ: من قالها في يوم مائة مرّة حُطّت خطاياه ولو كانت مثل زبد البحر.'],
                bf: ['Лёгкий зикр с огромной наградой; входит в утренние азкары.', 'A light dhikr with an immense reward; part of the morning adhkar.', 'ذكر يسير عظيم الأجر، وهو من أذكار الصباح.'],
                src: ['Сахих Муслим, 2691', 'Sahih Muslim 2691', 'صحيح مسلم 2691']
            },
            {
                t: ['«Ля иляха илля-Ллаху вахдаху…» — 100 раз', '«La ilaha illallahu wahdahu…» — 100 times', '«لا إله إلا الله وحده…» مائة مرّة'],
                b: ['Защита от шайтана до вечера', 'Protection from Satan until evening', 'حرز من الشيطان حتى المساء'],
                a: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
                tr: ['Ля иляха илля-Ллаху вахдаху ля шарика лях, ляху-ль-мульку ва ляху-ль-хамду, ва хува \'аля кулли шай\'ин кадир', 'La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu, wa huwa \'ala kulli shay\'in qadir'],
                tn: ['«Нет божества, кроме одного лишь Аллаха, нет у Него сотоварища. Ему принадлежит власть, и Ему хвала, и Он над всякой вещью мощен».', '«There is no god but Allah alone, without partner. His is the dominion and His is the praise, and He has power over all things».', '«لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير».'],
                s: ['Пророк ﷺ сообщил: стакратное повторение даёт награду освобождения десяти рабов, сто добрых дел и защиту от шайтана до вечера.', 'The Prophet ﷺ said: saying it a hundred times brings the reward of freeing ten slaves, a hundred good deeds, and protection from Satan until evening.', 'أخبر النبي ﷺ أن من قالها مائة مرّة كانت له عدل عشر رقاب ومائة حسنة وحرزًا من الشيطان حتى يمسي.'],
                bf: ['Читается сто раз в течение дня.', 'Recited a hundred times during the day.', 'تُقال مائة مرّة في اليوم.'],
                src: ['Сахих Муслим, 2691; Сахих аль-Бухари', 'Sahih Muslim 2691; Sahih al-Bukhari', 'صحيح مسلم 2691؛ صحيح البخاري']
            }
        ]);

    /* ============================================================
       2. ВЕЧЕРНИЕ АЗКАРЫ
       ============================================================ */
    section('evening',
        ['Вечерние азкары', 'Evening adhkar', 'أذكار المساء'],
        ['Дуа для защиты и спокойствия перед сном', 'Duas for protection and calm before sleep', 'أدعية للحفظ والسكينة قبل النوم'],
        [
            {
                t: ['«Амсайна…» — вечернее дуа', '«Amsayna…» — the evening dua', '«أمسينا…» دعاء المساء'],
                b: ['Встреча вечера с благодарностью', 'Welcoming the evening with gratitude', 'استقبال المساء بالحمد'],
                a: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ',
                tr: ['Амсайна ва амса-ль-мульку лиллях, ва-ль-хамду лиллях, ля иляха илля-Ллаху вахдаху ля шарика лях, ляху-ль-мульку ва ляху-ль-хамду ва хува \'аля кулли шай\'ин кадир. Рабби ас\'алюка хайра ма фи хазихи-ль-ляйляти ва хайра ма ба\'даха, ва а\'узу бика мин шарри ма фи хазихи-ль-ляйляти ва шарри ма ба\'даха. Рабби а\'узу бика мин аль-касали ва су\'и-ль-кибари, рабби а\'узу бика мин \'азабин фи-н-нари ва \'азабин фи-ль-кабри', 'Amsayna wa amsal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa \'ala kulli shay\'in qadir. Rabbi as\'aluka khayra ma fi hadhihil-laylati wa khayra ma ba\'daha, wa a\'udhu bika min sharri ma fi hadhihil-laylati wa sharri ma ba\'daha. Rabbi a\'udhu bika minal-kasali wa su\'il-kibari, rabbi a\'udhu bika min \'adhabin fin-nari wa \'adhabin fil-qabr'],
                tn: ['«Мы вступили в вечер, и власть Аллаха вступила в вечер; вся хвала Аллаху. Нет божества, кроме одного лишь Аллаха, нет у Него сотоварища; Ему власть и Ему хвала, и Он над всякой вещью мощен. Господь мой! Прошу у Тебя блага этой ночи и блага после неё и прибегаю к Тебе от зла этой ночи и зла после неё. Господь мой! Прибегаю к Тебе от лени и дурной старости, от наказания в огне и наказания в могиле».', '«We have entered the evening and the dominion of Allah has entered the evening; all praise is due to Allah. There is no god but Allah alone, without partner; His is the dominion and His is the praise, and He has power over all things. My Lord, I ask You for the good of this night and the good after it, and I seek refuge in You from its evil and the evil after it. My Lord, I seek refuge in You from laziness and the evil of old age, from punishment in the Fire and punishment in the grave».', '«أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير. ربّ أسألك خير هذه الليلة وخير ما بعدها وأعوذ بك من شرّها وشرّ ما بعدها، ومن الكسل وسوء الكبر وعذاب النار والقبر».'],
                s: ['Передаёт \'Абдуллах ибн Мас\'уд: именно эти слова Пророк ﷺ говорил по вечерам.', 'Narrated by \'Abdullah ibn Mas\'ud: these are the very words the Prophet ﷺ used to say in the evening.', 'عن عبد الله بن مسعود: كان النبي ﷺ يقولها إذا أمسى.'],
                bf: ['Вечерняя формула «Амсайна…»; утренняя «Асбахна…» — отдельное дуа.', 'The evening «Amsayna…» wording; the morning «Asbahna…» is a separate dua.', 'صيغة المساء «أمسينا»، أمّا «أصبحنا» فدعاء الصباح.'],
                src: ['Сахих Муслим, 2723 (a)', 'Sahih Muslim 2723a', 'صحيح مسلم 2723أ']
            },
            {
                t: ['«Аллахумма бика амсайна…»', '«Allahumma bika amsayna…»', '«اللهم بكَ أمسينا…»'],
                b: ['Возвращение к Аллаху', 'The return to Allah', 'النشور والمرجع إلى الله'],
                a: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
                tr: ['Аллахумма бика амсайна, ва бика асбахна, ва бика нахйа, ва бика намуту, ва иляйка-н-нушур', 'Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namutu, wa ilaykan-nushur'],
                tn: ['«О Аллах, благодаря Тебе мы вступили в вечер и благодаря Тебе вступили в утро, благодаря Тебе живём и благодаря Тебе умираем, и к Тебе — воскрешение».', '«O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the resurrection».', '«اللهم بكَ أمسينا وبكَ أصبحنا، وبكَ نحيا وبكَ نموت، وإليك النشور».'],
                s: ['Пророк ﷺ учил этой вечерней формуле сподвижников; утренняя оканчивается «ва иляйка-ль-масир».', 'The Prophet ﷺ taught his Companions this evening wording; the morning one ends with «wa ilaykal-masir».', 'علّم النبي ﷺ أصحابه هذه الصيغة للمساء، وتنتهي صيغة الصباح بـ«وإليك المصير».'],
                bf: ['Вечерняя версия заканчивается «ан-нушур» — не путать с утренней.', 'The evening version ends with «an-nushur» — not to be mixed with the morning one.', 'تنتهي صيغة المساء بـ«النشور» ولا تخلط بصيغة الصباح.'],
                src: ['Джами\' ат-Тирмизи, 3391 (хасан сахих)', 'Jami\' at-Tirmidhi 3391 (hasan sahih)', 'جامع الترمذي 3391 (حسن صحيح)']
            },
            {
                t: ['«А\'узу бикалимати-Лляхи-т-таммати…» — трижды', '«A\'udhu bi-kalimatillahit-tammati…» — three times', '«أعوذ بكلمات الله التامّات…» ثلاثًا'],
                b: ['Защита на ночь и в пути', 'Protection at night and while travelling', 'حفظ في الليل والسفر'],
                a: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
                tr: ['А\'узу би-калимати-Лляхи-т-таммати мин шарри ма халякъ', 'A\'udhu bi-kalimatillahit-tammati min sharri ma khalaq'],
                tn: ['«Прибегаю к совершенным словам Аллаха от зла того, что Он сотворил».', '«I seek refuge in the perfect words of Allah from the evil of what He has created».', '«أعوذ بكلمات الله التامّات من شرّ ما خلق».'],
                s: ['Передаёт Хауля бинт Хаким: кто скажет это, остановившись в каком-либо месте, тому ничто не повредит, пока он не покинет его.', 'Narrated by Khawla bint Hakim: whoever says it when stopping at a place, nothing will harm him until he departs.', 'عن خولة بنت حكيم: من نزل منزلًا فقالها لم يضرّه شيء حتى يرتحل.'],
                bf: ['Читается вечером трижды в сборниках азкаров и при остановке в пути.', 'Recited three times in the evening in the adhkar collections, and when stopping on a journey.', 'تُقال ثلاثًا في المساء وعند نزول المنزل في السفر.'],
                src: ['Сахих Муслим, 2708; Сунан Абу Давуд', 'Sahih Muslim 2708; Sunan Abi Dawud', 'صحيح مسلم 2708؛ سنن أبي داود']
            },
            {
                t: ['Аят аль-Курси перед сном', 'Ayat al-Kursi before sleep', 'آية الكرسي قبل النوم'],
                b: ['Хранитель от Аллаха до утра', 'A guardian from Allah until morning', 'حافظ من الله حتى الصباح'],
                a: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
                tr: ['Аллаху ля иляха илля хува-ль-Хаййу-ль-Каййум. Ля та\'хузуху синатун ва ля наум… ва хува-ль-\'Алиййу-ль-\'Азым', 'Allahu la ilaha illa huwa al-Hayyul-Qayyum. La ta\'khudhuhu sinatun wa la nawm… wa huwa al-\'Aliyyul-\'Azim'],
                tn: ['«Аллах — нет божества, кроме Него, Живого, Поддерживающего всё… Он — Возвышенный, Великий» (полный аят 2:255).', '«Allah — there is no deity except Him, the Ever-Living, the Sustainer of all… He is the Most High, the Most Great» (full verse 2:255).', '«الله لا إله إلا هو الحيّ القيّوم… وهو العليّ العظيم» (الآية 2:255 كاملة).'],
                s: ['Абу Хурайра передал историю с вором, который посоветовал читать аят перед сном; Пророк ﷺ подтвердил: «Он сказал тебе правду, хотя он лжец».', 'Abu Hurayrah narrated the story of the thief who advised reciting it before bed; the Prophet ﷺ confirmed: «He told you the truth, though he is a liar».', 'حديث أبي هريرة مع السارق، فقال النبي ﷺ: «صدقك وهو كذوب».'],
                bf: ['При чтении перед сном Аллах ставит хранителя до утра.', 'Reciting it before sleep appoints a guardian until morning.', 'من قرأها عند النوم وكّل الله به حافظًا حتى يصبح.'],
                src: ['Коран, 2:255; Сахих аль-Бухари, 5010', 'Quran 2:255; Sahih al-Bukhari 5010', 'القرآن 2:255؛ صحيح البخاري 5010']
            },
            {
                t: ['Три защитные суры перед сном', 'The three protecting surahs before sleep', 'المعوّذات قبل النوم'],
                b: ['Достаточны от всякого зла', 'Sufficient against every evil', 'تكفي من كل شيء'],
                a: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ',
                tr: ['Къуль хува-Ллаху ахад… Къуль а\'узу би-Рабби-ль-фалякъ… Къуль а\'узу би-Рабби-н-нас', 'Qul huwallahu ahad… Qul a\'udhu bi-Rabbil-falaq… Qul a\'udhu bi-Rabbin-nas'],
                tn: ['Суры 112, 113 и 114 — трижды вечером.', 'Surahs 112, 113 and 114 — three times in the evening.', 'السور 112 و113 و114 ثلاث مرّات في المساء.'],
                s: ['Пророк ﷺ велел читать их трижды вечером и утром; также читал их перед сном, подув на ладони и проведя ими по телу.', 'The Prophet ﷺ prescribed them three times evening and morning, and recited them before sleep, blowing into his palms and wiping over his body.', 'كان النبي ﷺ يقرأها ثلاثًا مساءً وصباحًا، وعند النوم ينفث في كفّيه ويمسح بهما جسده.'],
                bf: ['Завершает вечерние азкары.', 'Completes the evening adhkar.', 'تُختم بها أذكار المساء.'],
                src: ['Сунан Абу Давуд, 5082; Сахих аль-Бухари', 'Sunan Abi Dawud 5082; Sahih al-Bukhari', 'سنن أبي داود 5082؛ صحيح البخاري']
            },
            {
                t: ['«Бисми-Лляхи-ллязи…» вечером — трижды', '«Bismillahil-ladhi…» in the evening — three times', '«بسم الله الذي…» مساءً ثلاثًا'],
                b: ['Ничего не повредит этой ночью', 'Nothing will harm that night', 'لا يضرّه شيء في ليلته'],
                a: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ',
                tr: ['Бисми-Лляхи-ль-лязи ля йадурру ма\'а-смихи шай\'ун фи-ль-арди ва ля фи-с-сама\'и, ва хува-с-Сами\'у-ль-\'Алим', 'Bismillahil-ladhi la yadurru ma\'as-mihi shay\'un fil-ardi wa la fis-sama\'i, wa huwas-Sami\'ul-\'Alim'],
                tn: ['«С именем Аллаха, с которым ничто не причинит вреда ни на земле, ни на небе; Он — Слышащий, Знающий».', '«In the Name of Allah, with whose Name nothing on earth or in the heaven can cause harm; He is the Hearing, the Knowing».', '«بسم الله الذي لا يضرّ مع اسمه شيء في الأرض ولا في السماء، وهو السميع العليم».'],
                s: ['Хадис \'Усмана ибн \'Аффана explicitly называет и утро, и вечер каждого дня и ночи.', 'The hadith of \'Uthman ibn \'Affan explicitly mentions the morning of every day and the evening of every night.', 'حديث عثمان بن عفّان يذكر «صباح كل يوم ومساء كل ليلة».'],
                bf: ['Трижды вечером — защита на ночь.', 'Three times in the evening — protection for the night.', 'ثلاث مرّات في المساء حفظًا لليل.'],
                src: ['Джами\' ат-Тирмизи, 3388 (хасан сахих)', 'Jami\' at-Tirmidhi 3388 (hasan sahih)', 'جامع الترمذي 3388 (حسن صحيح)']
            },
            {
                t: ['Саййид аль-Истигфар перед сном', 'Sayyid al-Istighfar before sleep', 'سيد الاستغفار قبل النوم'],
                b: ['Завершить день покаянием', 'Ending the day with repentance', 'ختم اليوم بالتوبة'],
                a: 'اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
                tr: ['Аллахумма анта рабби, ля иляха илля анта… фа-гфир ли, фа-иннаху ля ягфиру-з-зунуба илля анта', 'Allahumma anta rabbi, la ilaha illa anta… faghfir li, fa innahu la yaghfirudh-dhunuba illa anta'],
                tn: ['«О Аллах, Ты — мой Господь… прости же меня, ведь никто не прощает грехов, кроме Тебя» (полный текст).', '«O Allah, You are my Lord… so forgive me, for none forgives sins except You» (full text).', '«اللهم أنت ربّي… فاغفر لي فإنه لا يغفر الذنوب إلا أنت» (النص كاملًا).'],
                s: ['Пророк ﷺ особо выделил произнесение этой мольбы ночью с убеждённостью.', 'The Prophet ﷺ singled out saying this supplication at night with conviction.', 'خصّ النبي ﷺ من قالها من الليل موقنًا بها.'],
                bf: ['Лучшее завершение дня.', 'The best way to end the day.', 'أفضل ما يُختم به اليوم.'],
                src: ['Сахих аль-Бухари, 6306', 'Sahih al-Bukhari 6306', 'صحيح البخاري 6306']
            },
            {
                t: ['«Аль-\'афв ва-ль-\'афийа» вечером', '«Al-\'afw wal-\'afiyah» in the evening', '«العفو والعافية» في المساء'],
                b: ['Пророк ﷺ не пропускал её', 'The Prophet ﷺ never omitted it', 'لم يكن النبي ﷺ يدعها'],
                a: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي. اللَّهُمَّ اسْتُرْ عَوْرَتِي وَآمِنْ رَوْعَاتِي. اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي',
                tr: ['Аллахумма инни ас\'алюка-ль-\'афийата фи-д-дунья ва-ль-ахира… ва а\'узу би-\'азаматика ан угталя мин тахти', 'Allahumma inni as\'alukal-\'afiyata fid-dunya wal-akhirah… wa a\'udhu bi-\'azamatika an ughtala min tahti'],
                tn: ['«О Аллах, прошу у Тебя благополучия в этом мире и в будущем… и прибегаю к Твоему величию от внезапной гибели снизу» (полный текст).', '«O Allah, I ask You for well-being in this world and the Hereafter… and I seek refuge in Your greatness from being destroyed from below» (full text).', '«اللهم إني أسألك العافية في الدنيا والآخرة… وأعوذ بعظمتك أن أغتال من تحتي» (النص كاملًا).'],
                s: ['Ибн \'Умар передал, что Пророк ﷺ говорил это «хин йумси ва хин йусбих» — и вечером, и утром.', 'Ibn \'Umar reported that the Prophet ﷺ said it «when entering the evening and when entering the morning».', 'عن ابن عمر: كان النبي ﷺ لا يدعها «حين يمسي وحين يصبح».'],
                bf: ['Хранение со всех сторон на ночь.', 'Protection from every direction through the night.', 'حفظ من كل جانب طوال الليل.'],
                src: ['Сунан Абу Давуд, 5074 (сахих)', 'Sunan Abi Dawud 5074 (sahih)', 'سنن أبي داود 5074 (صحيح)']
            }
        ]);

    /* ============================================================
       3. ДУА ПОСЛЕ ОБЯЗАТЕЛЬНЫХ МОЛИТВ
       ============================================================ */
    section('afterPrayer',
        ['Дуа после обязательных молитв', 'Duas after the obligatory prayers', 'الأدعية بعد الصلوات المكتوبة'],
        ['Поминание Аллаха после намаза', 'Remembrance of Allah after the prayer', 'أذكار ما بعد الصلاة'],
        [
            {
                t: ['Истигфар и «Аллахумма анта-с-Салям…»', 'Istighfar and «Allahumma antas-Salam…»', 'الاستغفار و«اللهم أنت السلام»'],
                b: ['Первые слова после таслима', 'The first words after the taslim', 'أوّل ما يُقال بعد التسليم'],
                a: 'أَسْتَغْفِرُ اللَّهَ (ثَلَاثًا) · اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ ذَا الْجَلَالِ وَالْإِكْرَامِ',
                tr: ['Астагфиру-Ллах (3 раза). Аллахумма анта-с-Саляму ва минка-с-Саляму, табаракта за-ль-джаляли ва-ль-икрам', 'Astaghfirullah (3 times). Allahumma antas-Salamu wa minkas-Salamu, tabarakta dhal-jalali wal-ikram'],
                tn: ['«Прошу прощения у Аллаха» (трижды). «О Аллах, Ты — Мир, и от Тебя мир. Благословен Ты, Обладатель величия и почёта».', '«I seek forgiveness from Allah» (three times). «O Allah, You are Peace and from You comes peace. Blessed are You, Owner of Glory and Honour».', '«أستغفر الله» ثلاثًا، ثم «اللهم أنت السلام ومنك السلام، تباركت ذا الجلال والإكرام».'],
                s: ['Передаёт Саубан: закончив молитву, Пророк ﷺ трижды просил прощения и произносил эти слова.', 'Narrated by Thawban: after finishing the prayer, the Prophet ﷺ sought forgiveness three times and said these words.', 'عن ثوبان: كان النبي ﷺ إذا انصرف من صلاته استغفر ثلاثًا وقالها.'],
                bf: ['Начинается сразу после завершения намаза.', 'Said immediately after completing the prayer.', 'تُقال عقب التسليم مباشرة.'],
                src: ['Сахих Муслим, 591', 'Sahih Muslim 591', 'صحيح مسلم 591']
            },
            {
                t: ['Тасбих 33 + 33 + 33 и замыкающий тахлиль', 'Tasbih 33 + 33 + 33 and the closing tahlil', 'التسبيح والتحميد والتكبير 33)، وختم المائة'],
                b: ['Прощаются грехи', 'Sins are forgiven', 'تُغفر الخطايا'],
                a: 'سُبْحَانَ اللَّهِ (٣٣) · الْحَمْدُ لِلَّهِ (٣٣) · اللَّهُ أَكْبَرُ (٣٣) · لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
                tr: ['Субхана-Ллах (33), аль-хамду лиллях (33), Аллаху Акбар (33), ля иляха илля-Ллаху вахдаху ля шарика лях, ляху-ль-мульку ва ляху-ль-хамду ва хува \'аля кулли шай\'ин кадир', 'Subhanallah (33), alhamdulillah (33), Allahu Akbar (33), la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa \'ala kulli shay\'in qadir'],
                tn: ['«Пречист Аллах» 33 раза, «Хвала Аллаху» 33 раза, «Аллах Велик» 33 раза, и в завершение сотни: «Нет божества, кроме Аллаха одного, без сотоварища; Ему власть и Ему хвала, и Он над всякой вещью мощен».', '«Glory be to Allah» 33 times, «Praise be to Allah» 33 times, «Allah is Most Great» 33 times, and to complete a hundred: «There is no god but Allah alone, without partner; His is the dominion and His is the praise, and He has power over all things».', '«سبحان الله» 33، «الحمد لله» 33، «الله أكبر» 33، ثم تمام المائة: «لا إله إلا الله وحده لا شريك له…».'],
                s: ['Передаёт Абу Хурайра: грехи будут прощены, даже если их множество подобно пене морской.', 'Narrated by Abu Hurayrah: sins are forgiven even if they are as abundant as the foam of the sea.', 'عن أبي هريرة: تُغفر الخطايا ولو كانت مثل زبد البحر.'],
                bf: ['Читается после каждой обязательной молитвы.', 'Recited after every obligatory prayer.', 'تُقال دُبر كل صلاة مكتوبة.'],
                src: ['Сахих Муслим, 597 (a)', 'Sahih Muslim 597a', 'صحيح مسلم 597أ']
            },
            {
                t: ['«Ля иляха илля-Ллаху вахдаху…» после намаза', '«La ilaha illallahu wahdahu…» after prayer', '«لا إله إلا الله وحده…» بعد الصلاة'],
                b: ['Зикр после каждой молитвы', 'Dhikr after every prayer', 'ذكر دُبر كل صلاة'],
                a: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
                tr: ['Ля иляха илля-Ллаху вахдаху ля шарика лях, ляху-ль-мульку ва ляху-ль-хамду ва хува \'аля кулли шай\'ин кадир', 'La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa \'ala kulli shay\'in qadir'],
                tn: ['«Нет божества, кроме одного лишь Аллаха, нет у Него сотоварища. Ему власть, Ему хвала, и Он над всякой вещью мощен».', '«There is no god but Allah alone, without partner. His is the dominion, His is the praise, and He has power over all things».', '«لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير».'],
                s: ['Ибн аз-Зубайр передал, что Пророк ﷺ произносил этот тахлиль после каждой обязательной молитвы.', 'Ibn az-Zubayr reported that the Prophet ﷺ used to say this tahlil after every obligatory prayer.', 'عن ابن الزبير: كان النبي ﷺ يهلّ به دُبر كل صلاة مكتوبة.'],
                bf: ['Утверждение единобожия после намаза.', 'Affirming tawhid after the prayer.', 'تجديد التوحيد عقب الصلاة.'],
                src: ['Сахих Муслим, 593; Сахих аль-Бухари', 'Sahih Muslim 593; Sahih al-Bukhari', 'صحيح مسلم 593؛ صحيح البخاري']
            },
            {
                t: ['«Аллахумма ля мани\'а лима а\'тайта…»', '«Allahumma la mani\'a lima a\'tayta…»', '«اللهم لا مانع لما أعطيت…»'],
                b: ['Всё даёт и удерживает Аллах', 'Allah alone gives and withholds', 'العطاء والمنع بيد الله'],
                a: 'اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ',
                tr: ['Аллахумма ля мани\'а лима а\'тайта, ва ля му\'тыйа лима мана\'та, ва ля йанфа\'у за-ль-джадди минка-ль-джадд', 'Allahumma la mani\'a lima a\'tayta, wa la mu\'tiya lima mana\'ta, wa la yanfa\'u dhal-jaddi minkal-jadd'],
                tn: ['«О Аллах, никто не удержит того, что Ты дал, и никто не даст того, что Ты удержал; не поможет обладателю богатства его богатство перед Тобой».', '«O Allah, none can withhold what You have given, and none can give what You have withheld; the wealth of the wealthy will not avail them before You».', '«اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجدّ منك الجدّ».'],
                s: ['Передают аль-Мугира ибн Шу\'ба и другие: Пророк ﷺ говорил это после намаза.', 'Narrated by al-Mughirah ibn Shu\'bah and others: the Prophet ﷺ said it after the prayer.', 'عن المغيرة بن شعبة وغيره: كان النبي ﷺ يقوله بعد الصلاة.'],
                bf: ['Напоминание, что удел — только от Аллаха.', 'A reminder that provision comes only from Allah.', 'تذكير بأن الرزق بيد الله وحده.'],
                src: ['Сахих аль-Бухари; Сахих Муслим', 'Sahih al-Bukhari; Sahih Muslim', 'صحيح البخاري؛ صحيح مسلم']
            },
            {
                t: ['«Рабби а\'инни \'аля зикрика…»', '«Rabbi a\'inni \'ala dhikrika…»', '«ربّ أعِنّي على ذكرك…»'],
                b: ['Помощь в поминании, благодарности и поклонении', 'Help in remembrance, gratitude and worship', 'العون على الذكر والشكر وحسن العبادة'],
                a: 'رَبِّ أَعِنِّي عَلَىٰ ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
                tr: ['Рабби а\'инни \'аля зикрика ва шукрика ва хусни \'ибадатика', 'Rabbi a\'inni \'ala dhikrika wa shukrika wa husni \'ibadatika'],
                tn: ['«Господь мой, помоги мне поминать Тебя, благодарить Тебя и прекрасно поклоняться Тебе».', '«My Lord, help me to remember You, to thank You, and to worship You beautifully».', '«ربّ أعِنّي على ذكرك وشكرك وحسن عبادتك».'],
                s: ['Пророк ﷺ велел Му\'азу ибн Джабалю не оставлять эти слова после каждой молитвы.', 'The Prophet ﷺ told Mu\'adh ibn Jabal never to omit these words after every prayer.', 'أوصى النبي ﷺ معاذ بن جبل ألا يدعها دُبر كل صلاة.'],
                bf: ['Просьба о качестве поклонения, а не только о количестве.', 'A plea for the quality of worship, not only its quantity.', 'دعاء بإحسان العبادة لا بمجرّد كثرتها.'],
                src: ['Сунан Абу Давуд; Сунан ан-Насаи', 'Sunan Abi Dawud; Sunan an-Nasa\'i', 'سنن أبي داود؛ سنن النسائي']
            },
            {
                t: ['Тасбих «\'адада халькихи…»', 'The tasbih «\'adada khalqihi…»', 'تسبيح «عدد خلقه…»'],
                b: ['Краткие слова с огромной наградой', 'Few words with an immense reward', 'كلمات يسيرة عظيمة الأجر'],
                a: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ',
                tr: ['Субхана-Ллахи ва бихамдихи, \'адада халькихи, ва рида нафсихи, ва зината \'аршихи, ва мидада калиматихи', 'Subhanallahi wa bihamdihi, \'adada khalqihi, wa rida nafsihi, wa zinata \'arshihi, wa midada kalimatih'],
                tn: ['«Пречист Аллах и хвала Ему — числом Его творений, по довольству Его Самого, весом Его Трона и чернилами для Его слов».', '«Glory be to Allah and praise be to Him — as many as His creations, as much as pleases Him, as heavy as His Throne, and as much ink as His words».', '«سبحان الله وبحمده، عدد خلقه، ورضا نفسه، وزنة عرشه، ومداد كلماته».'],
                s: ['Передаёт Джувайрийа бинт аль-Харис: Пророк ﷺ застал её за этим зикром после утреннего намаза и сообщил о его достоинстве.', 'Narrated by Juwayriyah bint al-Harith: the Prophet ﷺ found her saying this dhikr after the dawn prayer and told her of its merit.', 'عن جويرية بنت الحارث: وجدها النبي ﷺ تسبّح بعد صلاة الفجر فأخبرها بفضلها.'],
                bf: ['Читается трижды после утренней молитвы.', 'Recited three times after the dawn prayer.', 'تُقال ثلاثًا بعد صلاة الفجر.'],
                src: ['Сахих Муслим, 2726', 'Sahih Muslim 2726', 'صحيح مسلم 2726']
            }
        ]);

    /* ============================================================
       4. ДУА НА ВСЕ СЛУЧАИ ЖИЗНИ
       ============================================================ */
    section('everyday',
        ['Дуа на все случаи жизни', 'Duas for everyday life', 'أدعية لكل يوم'],
        ['Повседневные просьбы и благодарности', 'Daily requests and words of gratitude', 'طلبات وشكر في كل يوم'],
        [
            {
                t: ['«Бисми-Ллях» перед едой', '«Bismillah» before eating', '«بسم الله» قبل الطعام'],
                b: ['Благословение в пище', 'Blessing in the food', 'البركة في الطعام'],
                a: 'بِسْمِ اللَّهِ',
                tr: ['Бисми-Ллях', 'Bismillah'],
                tn: ['«С именем Аллаха» (а если забыл в начале — «Бисми-Лляхи фи аввалихи ва ахирихи»).', '«In the Name of Allah» (if forgotten at the start: «Bismillahi fi awwalihi wa akhirihi»).', '«بسم الله»، ومن نسي فليقل «بسم الله في أوّله وآخره».'],
                s: ['Пророк ﷺ велел произносить имя Аллаха перед едой и объяснил, что шайтан не участвует в трапезе, над которой оно произнесено.', 'The Prophet ﷺ commanded saying Allah\'s Name before eating and taught that Satan does not share a meal over which it is said.', 'أمر النبي ﷺ بالتسمية على الطعام، وأخبر أن الشيطان لا يشارك فيما ذُكر اسم الله عليه.'],
                bf: ['Самая короткая и частая сунна дня.', 'The shortest and most frequent sunnah of the day.', 'أقصر سنّة وأكثرها تكرارًا في اليوم.'],
                src: ['Сахих аль-Бухари; Сахих Муслим', 'Sahih al-Bukhari; Sahih Muslim', 'صحيح البخاري؛ صحيح مسلم']
            },
            {
                t: ['Хвала после еды', 'Praise after eating', 'الحمد بعد الطعام'],
                b: ['Благодарность за пропитание', 'Gratitude for provision', 'شكر على الرزق'],
                a: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ، مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
                tr: ['Аль-хамду лиллях-ль-лязи ат\'амани хаза ва разакъанихи, мин гайри хаулин минни ва ля кувва', 'Alhamdulillahil-ladhi at\'amani hadha wa razaqanihi, min ghayri hawlin minni wa la quwwah'],
                tn: ['«Хвала Аллаху, который накормил меня этим и наделил меня этим безо всякой моей силы и мощи».', '«Praise be to Allah who fed me this and provided it for me, without any power or might of my own».', '«الحمد لله الذي أطعمني هذا ورزقنيه، من غير حول منّي ولا قوّة».'],
                s: ['Пророк ﷺ произносил эту хвалу, завершая трапезу.', 'The Prophet ﷺ used to say this praise when finishing a meal.', 'كان النبي ﷺ يقول هذا الحمد عند فراغه من الطعام.'],
                bf: ['Прощаются прежние грехи тому, кто искренне произнёс её.', 'Whoever says it sincerely has his previous sins forgiven.', 'من قالها صادقًا غُفر له ما تقدّم من ذنبه.'],
                src: ['Джами\' ат-Тирмизи; Сунан Абу Давуд', 'Jami\' at-Tirmidhi; Sunan Abi Dawud', 'جامع الترمذي؛ سنن أبي داود']
            },
            {
                t: ['При выходе из дома', 'When leaving the house', 'عند الخروج من البيت'],
                b: ['Упование на Аллаха в дороге', 'Reliance on Allah on the way', 'التوكّل على الله في الخروج'],
                a: 'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
                tr: ['Бисми-Ллях, таваккальту \'аля-Ллях, ля хауля ва ля куввата илля би-Ллях', 'Bismillah, tawakkaltu \'alallah, la hawla wa la quwwata illa billah'],
                tn: ['«С именем Аллаха; я уповаю на Аллаха. Нет силы и мощи ни у кого, кроме как у Аллаха».', '«In the Name of Allah; I place my trust in Allah. There is no power and no might except with Allah».', '«بسم الله، توكّلت على الله، لا حول ولا قوّة إلا بالله».'],
                s: ['Пророк ﷺ сказал: произнёсшему эти слова говорится: «Ты будет ведом, защищён и избавлен», и шайтан отстраняется от него.', 'The Prophet ﷺ said: whoever says it is told «You will be guided, defended and protected», and Satan withdraws from him.', 'قال النبي ﷺ: من قالها قيل له «هُديتَ وكُفيتَ ووُقيتَ» وتنحّى عنه الشيطان.'],
                bf: ['Защита и достаточность на весь выход.', 'Protection and sufficiency for the whole outing.', 'هداية وكفاية وحفظ في الخروج.'],
                src: ['Джами\' ат-Тирмизи; Сунан Абу Давуд', 'Jami\' at-Tirmidhi; Sunan Abi Dawud', 'جامع الترمذي؛ سنن أبي داود']
            },
            {
                t: ['При входе в дом', 'When entering the house', 'عند دخول البيت'],
                b: ['Благословение для дома', 'Blessing for the home', 'البركة في البيت'],
                a: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
                tr: ['Бисми-Лляхи валаджна, ва бисми-Лляхи хараджна, ва \'аля-Лляхи раббина таваккальна', 'Bismillahi walajna, wa bismillahi kharajna, wa \'alallahi rabbina tawakkalna'],
                tn: ['«С именем Аллаха мы вошли и с именем Аллаха вышли, и на Аллаха, нашего Господа, мы уповаем».', '«In the Name of Allah we enter and in the Name of Allah we leave, and upon Allah our Lord we rely».', '«بسم الله ولجنا، وبسم الله خرجنا، وعلى الله ربّنا توكّلنا».'],
                s: ['Из наставления Пророка ﷺ о поминании Аллаха при входе в жилище.', 'From the Prophet\'s ﷺ instruction to remember Allah when entering a dwelling.', 'من هدي النبي ﷺ في ذكر الله عند دخول المنزل.'],
                bf: ['После этих слов желают дому благословения.', 'After it one greets the household with salam.', 'يُسنّ بعدها السلام على أهل البيت.'],
                src: ['Сунан Абу Давуд', 'Sunan Abi Dawud', 'سنن أبي داود']
            },
            {
                t: ['Перед входом в отхожее место', 'Before entering the toilet', 'قبل دخول الخلاء'],
                b: ['Защита от нечистого', 'Protection from impurity', 'الاستعاذة من الخبث'],
                a: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
                tr: ['Аллахумма инни а\'узу бика мин аль-хубуси ва-ль-хаба\'ис', 'Allahumma inni a\'udhu bika minal-khubuthi wal-khaba\'ith'],
                tn: ['«О Аллах, я прибегаю к Тебе от скверны и скверных [духов]».', '«O Allah, I seek refuge in You from impurity and impure beings»', '«اللهم إني أعوذ بك من الخُبُث والخبائث».'],
                s: ['Передаёт Анас ибн Малик: так говорил Пророк ﷺ перед входом.', 'Narrated by Anas ibn Malik: this is what the Prophet ﷺ said before entering.', 'عن أنس بن مالك: كان النبي ﷺ يقوله عند الدخول.'],
                bf: ['Сунна при каждом входе в отхожее место.', 'A sunnah on every such occasion.', 'سنّة عند كل دخول.'],
                src: ['Сахих аль-Бухари; Сахих Муслим', 'Sahih al-Bukhari; Sahih Muslim', 'صحيح البخاري؛ صحيح مسلم']
            },
            {
                t: ['«Гуфранака» при выходе', '«Ghufranaka» on leaving', '«غفرانك» عند الخروج'],
                b: ['Просьба о прощении после облегчения', 'Asking forgiveness after relief', 'طلب المغفرة بعد القضاء'],
                a: 'غُفْرَانَكَ',
                tr: ['Гуфранака', 'Ghufranaka'],
                tn: ['«Прощения у Тебя [прошу]».', '«I ask Your forgiveness»', '«غفرانك» أي أطلب مغفرتك.'],
                s: ['Пророк ﷺ, выходя из отхожего места, говорил «Гуфранака».', 'On leaving, the Prophet ﷺ would say «Ghufranaka».', 'كان النبي ﷺ إذا خرج قال «غفرانك».'],
                bf: ['Напоминание о благодарности за здоровье и облегчение.', 'A reminder to be grateful for health and relief.', 'تذكير بشكر نعمة العافية.'],
                src: ['Сунан Абу Давуд; Джами\' ат-Тирмизи', 'Sunan Abi Dawud; Jami\' at-Tirmidhi', 'سنن أبي داود؛ جامع الترمذي']
            },
            {
                t: ['При чихании', 'When sneezing', 'عند العطسة'],
                b: ['Хвала Аллаху и мольба о милости', 'Praising Allah and asking for mercy', 'حمد الله وطلب الرحمة'],
                a: 'الْحَمْدُ لِلَّهِ · يَرْحَمُكَ اللَّهُ · يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ',
                tr: ['Аль-хамду лиллях. Йархамука-Ллах. Йахдикуму-Ллаху ва юслиху балякум', 'Alhamdulillah. Yarhamukallah. Yahdikumullahu wa yuslihu balakum'],
                tn: ['Чихнувший говорит: «Хвала Аллаху»; услышавший отвечает: «Да помилует тебя Аллах»; чихнувший отвечает: «Да наставит вас Аллах и исправит ваше состояние».', 'The sneezer says «Praise be to Allah»; the one who hears replies «May Allah have mercy on you»; the sneezer answers «May Allah guide you and set your affairs right».', 'العاطس: «الحمد لله»، والمشمّت: «يرحمك الله»، والردّ: «يهديكم الله ويصلح بالكم».'],
                s: ['Хадис Абу Хурайры устанавливает эти три формулы и право чихнувшего на ответ.', 'The hadith of Abu Hurayrah establishes these three wordings and the sneezer\'s right to a response.', 'حديث أبي هريرة يثبّت هذه الصيغ الثلاث وحقّ العاطس في التشميت.'],
                bf: ['Живая сунна взаимной доброжелательности.', 'A living sunnah of mutual goodwill.', 'سنّة حيّة في التراحم بين المسلمين.'],
                src: ['Сахих аль-Бухари; Джами\' ат-Тирмизи', 'Sahih al-Bukhari; Jami\' at-Tirmidhi', 'صحيح البخاري؛ جامع الترمذي']
            }
        ]);

    /* ============================================================
       5. ДУА ДЛЯ ПОКАЯНИЯ (ИСТИГФАР)
       ============================================================ */
    section('istighfar',
        ['Дуа для покаяния (истигфар)', 'Duas for repentance (istighfar)', 'أدعية التوبة والاستغفار'],
        ['Просьбы о прощении грехов', 'Prayers for the forgiveness of sins', 'طلب المغفرة من الذنوب'],
        [
            {
                t: ['Саййид аль-Истигфар', 'Sayyid al-Istighfar', 'سيد الاستغفار'],
                b: ['Лучшая мольба о прощении', 'The best prayer of forgiveness', 'أفضل دعاء للمغفرة'],
                a: 'اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
                tr: ['Аллахумма анта рабби, ля иляха илля анта, халяктани ва ана \'абдука, ва ана \'аля \'ахдика ва ва\'дика ма-стата\'ту, а\'узу бика мин шарри ма сана\'ту, абу\'у ляка би-ни\'матика \'аляййа, ва абу\'у ляка би-занби, фа-гфир ли, фа-иннаху ля ягфиру-з-зунуба илля анта', 'Allahumma anta rabbi, la ilaha illa anta, khalaqtani wa ana \'abduka, wa ana \'ala \'ahdika wa wa\'dika mastata\'tu, a\'udhu bika min sharri ma sana\'tu, abu\'u laka bini\'matika \'alayya, wa abu\'u laka bidhanbi, faghfir li, fa innahu la yaghfirudh-dhunuba illa anta'],
                tn: ['«О Аллах, Ты — мой Господь… признаю Твою милость и свой грех, прости же меня, ибо никто не прощает грехов, кроме Тебя».', '«O Allah, You are my Lord… I acknowledge Your blessing and admit my sin, so forgive me, for none forgives sins except You».', '«اللهم أنت ربّي… أبوء لك بنعمتك وبذنبي، فاغفر لي فإنه لا يغفر الذنوب إلا أنت».'],
                s: ['Пророк ﷺ назвал эту мольбу «господином истигфара» (Сахих аль-Бухари).', 'The Prophet ﷺ called it «the master of seeking forgiveness».', 'سمّاها النبي ﷺ «سيد الاستغفار».'],
                bf: ['Соединяет признание господства Аллаха, благодарность и признание греха.', 'Combines acknowledging Allah\'s lordship, gratitude, and admission of sin.', 'تجمع الإقرار بالربوبية والاعتراف بالنعمة والذنب.'],
                src: ['Сахих аль-Бухари, 6306', 'Sahih al-Bukhari 6306', 'صحيح البخاري 6306']
            },
            {
                t: ['«Раббана золямна анфусана…»', '«Rabbana zalamna anfusana…»', '«ربّنا ظلمنا أنفسنا…»'],
                b: ['Мольба Адама и Хаввы', 'The prayer of Adam and Eve', 'دعاء آدم وحوّاء'],
                a: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
                tr: ['Раббана золямна анфусана ва иллям тагфир ляна ва тархамна лянакунанна миналь-хасирин', 'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal-khasirin'],
                tn: ['«Господь наш! Мы поступили несправедливо к самим себе. Если Ты не простишь нас и не помилуешь, мы непременно окажемся среди потерпевших убыток».', '«Our Lord! We have wronged ourselves. If You do not forgive us and have mercy on us, we will surely be among the losers».', '«ربّنا ظلمنا أنفسنا، وإن لم تغفر لنا وترحمنا لنكوننّ من الخاسرين».'],
                s: ['Первое покаяние людей; приведено в Коране.', 'The first repentance of humankind, recorded in the Quran.', 'أوّل توبة للبشر، مذكورة في القرآن.'],
                bf: ['Учит не оправдываться, а сразу обращаться к Аллаху.', 'Teaches not to make excuses but to turn to Allah at once.', 'تعلّم عدم الاعتذار بل المبادرة إلى الله.'],
                src: ['Коран, сура 7 «Аль-А\'раф», аят 23', 'Quran, Surah 7 «Al-A\'raf», verse 23', 'القرآن، الأعراف (7): 23']
            },
            {
                t: ['«Астагфиру-Ллаха-ль-\'Азыма…»', '«Astaghfirullaha al-\'Azima…»', '«أستغفر الله العظيم…»'],
                b: ['Краткая формула покаяния', 'A concise formula of repentance', 'صيغة مختصرة للتوبة'],
                a: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ',
                tr: ['Астагфиру-Ллаха-ль-\'Азыма-ль-лязи ля иляха илля хува-ль-Хаййа-ль-Каййума, ва атубу иляйхи', 'Astaghfirullaha al-\'Azima alladhi la ilaha illa huwa al-Hayy al-Qayyum, wa atubu ilayh'],
                tn: ['«Прошу прощения у Аллаха Великого, кроме которого нет божества, Живого, Поддерживающего всё, и обращаюсь к Нему с покаянием».', '«I seek forgiveness from Allah the Mighty, besides whom there is no god, the Ever-Living, the Sustainer, and I turn to Him in repentance».', '«أستغفر الله العظيم الذي لا إله إلا هو الحيّ القيّوم، وأتوب إليه».'],
                s: ['Пророк ﷺ сообщил о прощении тому, кто искренне произнесёт эту формулу.', 'The Prophet ﷺ taught that whoever says it sincerely is forgiven.', 'أخبر النبي ﷺ بمغفرة من قالها صادقًا.'],
                bf: ['Произносится многократно в течение дня.', 'Repeated many times throughout the day.', 'تُكرَّر في اليوم مرّات كثيرة.'],
                src: ['Джами\' ат-Тирмизи; Сунан Абу Давуд; Муснад Ахмад', 'Jami\' at-Tirmidhi; Sunan Abi Dawud; Musnad Ahmad', 'جامع الترمذي؛ سنن أبي داود؛ مسند أحمد']
            },
            {
                t: ['«Рабби-гфир ли ва туб \'аляййа…»', '«Rabbi-ghfir li wa tub \'alayya…»', '«ربّ اغفر لي وتُب عليّ…»'],
                b: ['Покаяние в собрании', 'Repentance in a gathering', 'توبة في المجلس'],
                a: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ، إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
                tr: ['Рабби-гфир ли ва туб \'аляййа, иннака анта-т-Таввабу-р-Рахим', 'Rabbi-ghfir li wa tub \'alayya, innaka anta at-Tawwabur-Rahim'],
                tn: ['«Господь мой, прости меня и прими моё покаяние, ведь Ты — Принимающий покаяние, Милосердный».', '«My Lord, forgive me and accept my repentance, for You are the Ever-Relenting, the Most Merciful».', '«ربّ اغفر لي وتُب عليّ، إنك أنت التوّاب الرحيم».'],
                s: ['Передаёт Ибн \'Умар: Пророк ﷺ повторял эти слова сто раз в одном собрании.', 'Narrated by Ibn \'Umar: the Prophet ﷺ would repeat these words a hundred times in a single sitting.', 'عن ابن عمر: كان النبي ﷺ يردّدها مائة مرّة في المجلس.'],
                bf: ['Произносится перед тем, как встать с собрания.', 'Said before rising from a gathering.', 'تُقال قبل القيام من المجلس.'],
                src: ['Джами\' ат-Тирмизи; Сунан Ибн Маджа; Сунан Абу Давуд', 'Jami\' at-Tirmidhi; Sunan Ibn Majah; Sunan Abi Dawud', 'جامع الترمذي؛ سنن ابن ماجه؛ سنن أبي داود']
            },
            {
                t: ['«Йа \'ибади-Ллязина асрафу…»', '«Ya \'ibadiyal-ladhina asrafu…»', '«يا عبادي الذين أسرفوا…»'],
                b: ['Надежда на милость Аллаха', 'Hope in Allah\'s mercy', 'الرجاء في رحمة الله'],
                a: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ',
                tr: ['Къуль йа \'ибадийа-ль-лязина асрафу \'аля анфусихим ля такънату мин рахмати-Ллях. Инна-Ллаха ягфиру-з-зунуба джами\'ан, иннаху хува-ль-Гафуру-р-Рахим', 'Qul ya \'ibadiyal-ladhina asrafu \'ala anfusihim la taqnatu min rahmatillah. Innallaha yaghfirudh-dhunuba jami\'an, innahu huwal-Ghafurur-Rahim'],
                tn: ['«Скажи: "О рабы Мои, которые излишествовали во вред себе! Не отчаивайтесь в милости Аллаха: ведь Аллах прощает все грехи, ибо Он — Прощающий, Милосердный"».', '«Say: "O My servants who have transgressed against themselves! Do not despair of the mercy of Allah: indeed Allah forgives all sins, for He is the Forgiving, the Most Merciful"».', '«قل يا عبادي الذين أسرفوا على أنفسهم لا تقنطوا من رحمة الله، إن الله يغفر الذنوب جميعًا، إنه هو الغفور الرحيم».'],
                s: ['Аят ниспослан как утешение для тех, кто боится, что его грехи слишком велики.', 'Revealed as consolation for those who fear their sins are too great.', 'نزلت تسليةً لمن خاف أن تُغلق أبواب التوبة دونه.'],
                bf: ['Не отчаиваться, сколько бы ни было грехов.', 'Never to despair, however many the sins.', 'عدم اليأس مهما كثرت الذنوب.'],
                src: ['Коран, сура 39 «Аз-Зумар», аят 53', 'Quran, Surah 39 «Az-Zumar», verse 53', 'القرآن، الزمر (39): 53']
            },
            {
                t: ['«Аллахумма-гфир ли ма каддамту…»', '«Allahumma-ghfir li ma qaddamtu…»', '«اللهم اغفر لي ما قدّمت…»'],
                b: ['Прошение поклоняющегося', 'The supplication of the worshipper', 'دعاء المصلي في ركوعه وسجوده'],
                a: 'اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي. أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَٰهَ إِلَّا أَنْتَ',
                tr: ['Аллахумма-гфир ли ма къаддамту ва ма аххарту, ва ма асрарту ва ма а\'лянту, ва ма асрафту, ва ма анта а\'ляму бихи минни. Анта-ль-Мукъаддиму ва анта-ль-Му\'аххиру, ля иляха илля анта', 'Allahumma-ghfir li ma qaddamtu wa ma akhkhartu, wa ma asrartu wa ma a\'lantu, wa ma asraftu, wa ma anta a\'lamu bihi minni. Antal-Muqaddimu wa antal-Mu\'akhkhiru, la ilaha illa anta'],
                tn: ['«О Аллах, прости мне то, что я совершил прежде и что отложил, что сделал тайно и явно, и в чём преступил меру, и что Ты знаешь лучше меня. Ты — Приближающий и Ты — Отдаляющий; нет божества, кроме Тебя».', '«O Allah, forgive me what I have done before and after, in secret and openly, what I have exceeded in, and what You know better than I. You are the One who brings forward and the One who puts back; there is no god but You».', '«اللهم اغفر لي ما قدّمت وما أخّرت، وما أسررت وما أعلنت، وما أسرفت، وما أنت أعلم به منّي، أنت المقدّم وأنت المؤخّر، لا إله إلا أنت».'],
                s: ['Пророк ﷺ произносил это в молитве — в поясном и земном поклонах.', 'The Prophet ﷺ said it in prayer, in bowing and prostration.', 'كان النبي ﷺ يقوله في ركوعه وسجوده.'],
                bf: ['Объемлет все грехи — явные, скрытые и неосознанные.', 'It covers all sins — open, hidden and unnoticed.', 'يستغرق الذنوب كلّها: العلن والسرّ وما خفي.'],
                src: ['Сахих Муслим; Сахих аль-Бухари', 'Sahih Muslim; Sahih al-Bukhari', 'صحيح مسلم؛ صحيح البخاري']
            }
        ]);

    /* ============================================================
       6. ОТ ТРЕВОГИ, ГРУСТИ И ДОЛГОВ
       ============================================================ */
    section('anxiety',
        ['От тревоги, грусти и долгов', 'For anxiety, sorrow and debt', 'للهمّ والحزن والدَّيْن'],
        ['Дуа для успокоения души и облегчения', 'Duas for calm and relief', 'أدعية لطمأنينة النفس وتفريج الكرب'],
        [
            {
                t: ['«Аллахумма инни а\'узу бика мин аль-хамми…»', '«Allahumma inni a\'udhu bika minal-hammi…»', '«اللهم إني أعوذ بك من الهمّ…»'],
                b: ['Главное дуа от тревоги и долгов', 'The main dua for anxiety and debt', 'أمّ الدعاء للهمّ والدَّيْن'],
                a: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ',
                tr: ['Аллахумма инни а\'узу бика мин аль-хамми ва-ль-хазани, ва-ль-\'аджзи ва-ль-касали, ва-ль-джубни ва-ль-бухли, ва даля\'и-д-дайни, ва галябати-р-риджали', 'Allahumma inni a\'udhu bika minal-hammi wal-hazani, wal-\'ajzi wal-kasali, wal-jubni wal-bukhli, wa dala\'id-dayni, wa ghalabatir-rijal'],
                tn: ['«О Аллах, я прибегаю к Тебе от тревоги и печали, от бессилия и лени, от трусости и скупости, от тяжести долга и от притеснения людей».', '«O Allah, I seek refuge in You from worry and grief, from incapacity and laziness, from cowardice and miserliness, from the burden of debt and from being overpowered by men».', '«اللهم إني أعوذ بك من الهمّ والحزن، والعجز والكسل، والجبن والبخل، وضلع الدَّيْن، وغلبة الرجال».'],
                s: ['Передаёт Анас ибн Малик: это была постоянная мольба Пророка ﷺ.', 'Narrated by Anas ibn Malik: this was the Prophet\'s ﷺ constant supplication.', 'عن أنس بن مالك: كان النبي ﷺ يُكثر من هذا الدعاء.'],
                bf: ['Соединяет просьбу о душевном покое, деятельностью и избавлении от долга.', 'Combines calm of heart, strength to act, and relief from debt.', 'يجمع سكينة النفس والقدرة على العمل وفكّ الدَّيْن.'],
                src: ['Сахих аль-Бухари, 6369', 'Sahih al-Bukhari 6369', 'صحيح البخاري 6369']
            },
            {
                t: ['Дуа Юнуса (мир ему)', 'The dua of Yunus (peace be upon him)', 'دعاء يونس عليه السلام'],
                b: ['При беде, из которой нет выхода', 'In a hardship with no way out', 'عند الكرب الذي لا مخرج منه'],
                a: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
                tr: ['Ля иляха илля анта субханака инни кунту миназ-залимин', 'La ilaha illa anta subhanaka inni kuntu minaz-zalimin'],
                tn: ['«Нет божества, кроме Тебя! Пречист Ты! Поистине, я был одним из несправедливых!»', '«There is no god but You! Glory be to You! Indeed, I was among the wrongdoers»', '«لا إله إلا أنت، سبحانك، إني كنت من الظالمين».'],
                s: ['Юнус (мир ему) воззвал так из трёх мраков; Пророк ﷺ сообщил, что Аллах отвечает всякому, кто обратится с ней.', 'Yunus (peace be upon him) called out from three darknesses; the Prophet ﷺ taught that Allah answers whoever supplicates with it.', 'نادى بها يونس من الظلمات الثلاث، وأخبر النبي ﷺ أن الله يستجيب لمن دعا بها.'],
                bf: ['Утешает и выводит из отчаяния.', 'Consoles and lifts one out of despair.', 'تُذهب القنوط وتُفرّج الكرب.'],
                src: ['Коран, сура 21 «Аль-Анбия», аят 87; Джами\' ат-Тирмизи', 'Quran, Surah 21 «Al-Anbiya», verse 87; Jami\' at-Tirmidhi', 'القرآن، الأنبياء (21): 87؛ جامع الترمذي']
            },
            {
                t: ['«Хасби-Лляху ля иляха илля ху…»', '«Hasbiyallahu la ilaha illa hu…»', '«حسبي الله لا إله إلا هو…»'],
                b: ['Упование на Аллаха', 'Reliance upon Allah', 'التوكّل على الله'],
                a: 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
                tr: ['Хасбия-Ллаху ля иляха илля ху, \'аляйхи таваккальту, ва хува Раббу-ль-\'арши-ль-\'азым', 'Hasbiyallahu la ilaha illa huwa, \'alayhi tawakkaltu, wa huwa Rabbul-\'arshil-\'azim'],
                tn: ['«Достаточно мне Аллаха! Нет божества, кроме Него; на Него я уповаю, и Он — Господь великого Трона».', '«Allah is sufficient for me! There is no god but He; in Him I place my trust, and He is the Lord of the Mighty Throne».', '«حسبي الله لا إله إلا هو، عليه توكّلت، وهو ربّ العرش العظيم».'],
                s: ['Слова, которыми Аллах повелел Своему Пророку ﷺ отвечать отворачивающимся; читаются и как зикр упования.', 'Words Allah commanded His Prophet ﷺ to say to those who turn away; also recited as a dhikr of reliance.', 'أمر الله نبيّه ﷺ بها، وتُقرأ كذكرٍ للتوكّل.'],
                bf: ['Укрепляет уверенность, что всех дел достаточно Аллаху.', 'Strengthens the certainty that Allah suffices in all affairs.', 'تُرسّخ اليقين بكفاية الله لعبده.'],
                src: ['Коран, сура 9 «Ат-Тауба», аят 129', 'Quran, Surah 9 «At-Tawbah», verse 129', 'القرآن، التوبة (9): 129']
            },
            {
                t: ['«Аллахумма-кфини бихалялика…»', '«Allahumma-kfini bihalalika…»', '«اللهم اكفني بحلالك…»'],
                b: ['При долге и нужде', 'In debt and need', 'عند الدَّيْن والحاجة'],
                a: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
                tr: ['Аллахумма-кфини би-халялика \'ан харамика, ва-агнини би-фадлика \'амман сивака', 'Allahumma-kfini bihalalika \'an haramika, wa aghnini bifadlika \'amman siwaka'],
                tn: ['«О Аллах, избавь меня Твоим дозволенным от запретного и обогати меня Твоей щедростью, избавив от всех, кроме Тебя».', '«O Allah, suffice me with what is lawful against what is unlawful, and enrich me with Your bounty so that I need no one but You».', '«اللهم اكفني بحلالك عن حرامك، وأغنني بفضلك عمّن سواك».'],
                s: ['Пророк ﷺ велел эту мольбу человеку, которого одолел долг.', 'The Prophet ﷺ taught this supplication to a man overwhelmed by debt.', 'علّم النبي ﷺ هذا الدعاء رجلًا أثقله الدَّيْن.'],
                bf: ['Просьба о дозволенном уделе и независимости от людей.', 'A plea for lawful provision and freedom from depending on people.', 'سؤال الرزق الحلال والاستغناء عن الخلق.'],
                src: ['Джами\' ат-Тирмизи', 'Jami\' at-Tirmidhi', 'جامع الترمذي']
            },
            {
                t: ['«Йа Хаййу йа Каййум…»', '«Ya Hayyu ya Qayyum…»', '«يا حيّ يا قيّوم…»'],
                b: ['Когда всё выходит из-под контроля', 'When everything feels out of control', 'عند اضطراب الأمور'],
                a: 'يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ',
                tr: ['Йа Хаййу йа Каййум, би-рахматика астагис, аслих ли ша\'ни куллях, ва ля такильни иля нафси тарфата \'айн', 'Ya Hayyu ya Qayyum, bi-rahmatika astaghith, aslih li sha\'ni kullahu, wa la takilni ila nafsi tarfata \'ayn'],
                tn: ['«О Живой, о Поддерживающий всё! К Твоей милости взываю о помощи: исправь все мои дела и не доверяй меня моей душе даже на мгновение ока».', '«O Ever-Living, O Sustainer! By Your mercy I seek help: set all my affairs right and do not leave me to myself even for the blink of an eye».', '«يا حيّ يا قيّوم، برحمتك أستغيث، أصلح لي شأني كلّه، ولا تكلني إلى نفسي طرفة عين».'],
                s: ['Передаётся от Анаса ибн Малика: Пророк ﷺ велел повторять это при тревоге.', 'Narrated from Anas ibn Malik: the Prophet ﷺ instructed repeating it in distress.', 'يُروى عن أنس بن مالك: كان النبي ﷺ يأمر بها عند الكرب.'],
                bf: ['Просьба о помощи именно через милость Аллаха.', 'A plea for help specifically through Allah\'s mercy.', 'استغاثة برحمة الله لا بحول العبد.'],
                src: ['Сунан ан-Насаи (аль-Кубра); Ибн ас-Сунни; аль-Хаким', 'Sunan an-Nasa\'i al-Kubra; Ibn as-Sunni; al-Hakim', 'سنن النسائي الكبرى؛ ابن السنّي؛ الحاكم']
            },
            {
                t: ['«Ля хауля ва ля куввата илля би-Ллях»', '«La hawla wa la quwwata illa billah»', '«لا حول ولا قوّة إلا بالله»'],
                b: ['Сокровище из сокровищ Рая', 'A treasure from the treasures of Paradise', 'كنز من كنوز الجنّة'],
                a: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
                tr: ['Ля хауля ва ля куввата илля би-Ллях', 'La hawla wa la quwwata illa billah'],
                tn: ['«Нет способности изменить положение и нет силы, кроме как от Аллаха».', '«There is no power to change and no strength except through Allah»', '«لا حول ولا قوّة إلا بالله».'],
                s: ['Пророк ﷺ сказал Абу Мусе: «Не указать ли тебе на слово, которое — сокровище из сокровищ Рая?»', 'The Prophet ﷺ said to Abu Musa: «Shall I not guide you to a phrase that is a treasure from the treasures of Paradise?»', 'قال النبي ﷺ لأبي موسى: «ألا أدلّك على كلمة هي كنز من كنوز الجنّة؟»'],
                bf: ['Произносится при любой тяжести и бессилии.', 'Said in every hardship and moment of helplessness.', 'تُقال عند كل ضيق وعجز.'],
                src: ['Сахих аль-Бухари; Сахих Муслим', 'Sahih al-Bukhari; Sahih Muslim', 'صحيح البخاري؛ صحيح مسلم']
            },
            {
                t: ['Дуа «Аллахумма инни \'абдука…»', 'The dua «Allahumma inni \'abduka…»', 'دعاء «اللهم إني عبدك…»'],
                b: ['Когда сжимается сердце', 'When the heart feels constricted', 'عند ضيق الصدر'],
                a: 'اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجِلَاءَ حُزْنِي، وَذَهَابَ هَمِّي',
                tr: ['Аллахумма инни \'абдука, ибну \'абдика, ибну аматика, насыйати би-йадика, мадын фиййа хукмука, \'адлюн фиййа къада\'ука. Ас\'алюка би-кулли-смин хува ляка, саммайта бихи нафсака, ав \'аллямтаху ахадан мин халькъика, ав анзальтаху фи китабика, ав-ста\'сарта бихи фи \'ильми-ль-гайби \'индака, ан тадж\'аля-ль-Къур\'ана раби\'а къальби, ва нура садри, ва джиля\'а хузни, ва захаба хамми', 'Allahumma inni \'abduka, ibnu \'abdika, ibnu amatika, nasiyati biyadika, madin fiyya hukmuka, \'adlun fiyya qada\'uka. As\'aluka bikulli-smin huwa laka, sammayta bihi nafsaka, aw \'allamtahu ahadan min khalqika, aw anzaltahu fi kitabika, aw ista\'tharta bihi fi \'ilmil-ghaybi \'indaka, an taj\'alal-Qur\'ana rabi\'a qalbi, wa nura sadri, wa jila\'a huzni, wa dhahaba hammi'],
                tn: ['«О Аллах, я — Твой раб, сын Твоего раба и Твоей рабыни; моя судьба в Твоей руке, Твоё решение обо мне исполнено, Твой приговор справедлив. Прошу Тебя каждым именем, которым Ты назвал Себя, или которому научил кого-либо из творений, или ниспослал в Твоей Книге, или оставил при Себе в сокровенном знании: сделай Коран весной моего сердца, светом моей груди, удалением моей печали и уходом моей тревоги».', '«O Allah, I am Your servant, son of Your servant and Your maidservant; my forelock is in Your hand, Your decree concerning me is executed, Your judgement upon me is just. I ask You by every name by which You named Yourself, taught to any of Your creation, revealed in Your Book, or kept to Yourself in the unseen knowledge: make the Quran the spring of my heart, the light of my chest, the removal of my sorrow and the departure of my worry».', '«اللهم إني عبدك ابن عبدك ابن أمتك، ناصيتي بيدك، ماضٍ فيّ حكمك، عدلٌ فيّ قضاؤك… اجعل القرآن ربيع قلبي ونور صدري وجلاء حزني وذهاب همّي».'],
                s: ['Передаёт \'Абдуллах ибн Мас\'уд: Пророк ﷺ сказал, что Аллах непременно удалит тревогу и печаль того, кто произнесёт эту мольбу.', 'Narrated by \'Abdullah ibn Mas\'ud: the Prophet ﷺ said Allah will surely remove the worry and grief of whoever says this dua.', 'عن عبد الله بن مسعود: ما قالها أحد إلا أذهب الله همّه وحزنه.'],
                bf: ['Обращение к Аллаху через все Его имена и через Коран.', 'Turning to Allah through all His names and through the Quran.', 'توسّل إلى الله بأسمائه وبالقرآن.'],
                src: ['Муснад Ахмад; аль-Хаким (сахих)', 'Musnad Ahmad; al-Hakim (sahih)', 'مسند أحمد؛ المستدرك للحاكم (صحيح)']
            }
        ]);

    /* ============================================================
       7. ЗАЩИТА ОТ ЗЛА И СГЛАЗА
       ============================================================ */
    section('protection',
        ['Защита от зла и сглаза', 'Protection from evil and the evil eye', 'الحماية من الشرّ والعين'],
        ['Дуа от шайтана, зависти и порчи', 'Duas against Satan, envy and harm', 'أدعية من الشيطان والحسد والأذى'],
        [
            {
                t: ['Аят аль-Курси', 'Ayat al-Kursi', 'آية الكرسي'],
                b: ['Хранитель от Аллаха', 'A guardian from Allah', 'حافظ من الله'],
                a: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
                tr: ['Аллаху ля иляха илля хува-ль-Хаййу-ль-Каййум… ва хува-ль-\'Алиййу-ль-\'Азым', 'Allahu la ilaha illa huwa al-Hayyul-Qayyum… wa huwa al-\'Aliyyul-\'Azim'],
                tn: ['«Аллах — нет божества, кроме Него, Живого, Поддерживающего всё… Он — Возвышенный, Великий» (2:255).', '«Allah — there is no deity except Him, the Ever-Living, the Sustainer of all… He is the Most High, the Most Great» (2:255).', '«الله لا إله إلا هو الحيّ القيّوم… وهو العليّ العظيم» (2:255).'],
                s: ['Пророк ﷺ подтвердил достоверность слов о том, что чтение аята ставит хранителя от Аллаха и отгоняет шайтана.', 'The Prophet ﷺ confirmed that reciting it appoints a guardian from Allah and keeps Satan away.', 'أقرّ النبي ﷺ أنّ قراءتها توجب حافظًا من الله وتبعد الشيطان.'],
                bf: ['Главный аят защиты, читается утром, вечером и перед сном.', 'The foremost verse of protection, recited morning, evening and before sleep.', 'أعظم آية للحفظ، تُقرأ صباحًا ومساءً وعند النوم.'],
                src: ['Коран, 2:255; Сахих аль-Бухари, 5010', 'Quran 2:255; Sahih al-Bukhari 5010', 'القرآن 2:255؛ صحيح البخاري 5010']
            },
            {
                t: ['Три защитные суры', 'The three protecting surahs', 'المعوّذات الثلاث'],
                b: ['От зависти, колдовства и наущений', 'Against envy, magic and whispering', 'من الحسد والسحر والوسوسة'],
                a: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ',
                tr: ['Къуль хува-Ллаху ахад… Къуль а\'узу би-Рабби-ль-фалякъ… Къуль а\'узу би-Рабби-н-нас', 'Qul huwallahu ahad… Qul a\'udhu bi-Rabbil-falaq… Qul a\'udhu bi-Rabbin-nas'],
                tn: ['Суры «Аль-Ихляс», «Аль-Фаляк» и «Ан-Нас» — трижды утром и вечером.', 'Surahs al-Ikhlas, al-Falaq and an-Nas — three times morning and evening.', 'سور الإخلاص والفلق والناس ثلاثًا صباحًا ومساءً.'],
                s: ['Пророк ﷺ сказал \'Абдуллаху ибн Хубайбу: «Они избавят тебя от всякого зла».', 'The Prophet ﷺ told \'Abdullah ibn Khubayb: «They will suffice you against everything».', 'قال النبي ﷺ لعبد الله بن خبيب: «تكفيك من كل شيء».'],
                bf: ['Прямая защита от сглаза и наущений шайтана.', 'Direct protection from the evil eye and Satan\'s whispering.', 'حماية صريحة من العين ووسوسة الشيطان.'],
                src: ['Сунан Абу Давуд, 5082; Коран, суры 112–114', 'Sunan Abi Dawud 5082; Quran, surahs 112–114', 'سنن أبي داود 5082؛ القرآن 112–114']
            },
            {
                t: ['«А\'узу бикалимати-Лляхи-т-таммати…»', '«A\'udhu bi-kalimatillahit-tammati…»', '«أعوذ بكلمات الله التامّات…»'],
                b: ['От зла всех творений', 'From the evil of all creation', 'من شرّ كل مخلوق'],
                a: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
                tr: ['А\'узу би-калимати-Лляхи-т-таммати мин шарри ма халякъ', 'A\'udhu bi-kalimatillahit-tammati min sharri ma khalaq'],
                tn: ['«Прибегаю к совершенным словам Аллаха от зла того, что Он сотворил».', '«I seek refuge in the perfect words of Allah from the evil of what He has created».', '«أعوذ بكلمات الله التامّات من شرّ ما خلق».'],
                s: ['Хадис Хаули бинт Хаким: ничто не повредит произнёсшему её до ухода с этого места.', 'Hadith of Khawla bint Hakim: nothing harms the one who says it until he leaves that place.', 'حديث خولة بنت حكيم: لا يضرّ قائلها شيء حتى يرتحل.'],
                bf: ['Самая общая формула защиты от любого зла.', 'The most comprehensive formula of protection.', 'أجمع صيغ الاستعاذة من الشرّ.'],
                src: ['Сахих Муслим, 2708', 'Sahih Muslim 2708', 'صحيح مسلم 2708']
            },
            {
                t: ['«Бисми-Лляхи-ллязи ля йадурру…»', '«Bismillahil-ladhi la yadurru…»', '«بسم الله الذي لا يضرّ…»'],
                b: ['Трижды утром и вечером', 'Three times morning and evening', 'ثلاثًا صباحًا ومساءً'],
                a: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ',
                tr: ['Бисми-Лляхи-ль-лязи ля йадурру ма\'а-смихи шай\'ун фи-ль-арди ва ля фи-с-сама\'и, ва хува-с-Сами\'у-ль-\'Алим', 'Bismillahil-ladhi la yadurru ma\'as-mihi shay\'un fil-ardi wa la fis-sama\'i, wa huwas-Sami\'ul-\'Alim'],
                tn: ['«С именем Аллаха, с которым ничто не причинит вреда ни на земле, ни на небе; Он — Слышащий, Знающий».', '«In the Name of Allah, with whose Name nothing on earth or in the heaven can cause harm; He is the Hearing, the Knowing».', '«بسم الله الذي لا يضرّ مع اسمه شيء في الأرض ولا في السماء، وهو السميع العليم».'],
                s: ['Хадис \'Усмана ибн \'Аффана (да будет доволен им Аллах).', 'The hadith of \'Uthman ibn \'Affan (may Allah be pleased with him).', 'حديث عثمان بن عفّان رضي الله عنه.'],
                bf: ['Имя Аллаха — щит от всякого вреда.', 'Allah\'s Name is a shield against every harm.', 'اسم الله وقاية من كل ضرر.'],
                src: ['Джами\' ат-Тирмизи, 3388; Сунан Абу Давуд', 'Jami\' at-Tirmidhi 3388; Sunan Abi Dawud', 'جامع الترمذي 3388؛ سنن أبي داود']
            },
            {
                t: ['Защита детей: «У\'изукума…»', 'Protecting children: «U\'idhukuma…»', 'تحصين الأبناء: «أعيذكما…»'],
                b: ['Родителям о своих детях', 'For parents over their children', 'للوالدين مع أبنائهما'],
                a: 'أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
                tr: ['У\'изукума би-калимати-Лляхи-т-таммати, мин кулли шайтанин ва хамматин, ва мин кулли \'айнин лямматин', 'U\'idhukuma bi-kalimatillahit-tammati, min kulli shaytanin wa hammatin, wa min kulli \'aynin lammatin'],
                tn: ['«Прибегаю за вас двоих к совершенным словам Аллаха от всякого шайтана, от всякой ядовитой твари и от всякого дурного глаза».', '«I seek refuge for you both in the perfect words of Allah from every devil, every venomous creature and every harmful eye».', '«أعيذكما بكلمات الله التامّة، من كل شيطان وهامّة، ومن كل عين لامّة».'],
                s: ['Пророк ﷺ произносил эти слова над аль-Хасаном и аль-Хусайном и сказал, что так поступали Ибрахим и Исмаил (мир им).', 'The Prophet ﷺ said this over al-Hasan and al-Husayn, noting that Ibrahim and Isma\'il (peace be upon them) did the same.', 'كان النبي ﷺ يعوّذ بها الحسن والحسين، وأخبر أن إبراهيم وإسماعيل كانا يفعلان ذلك.'],
                bf: ['Сунна защиты детей от сглаза.', 'The sunnah of protecting children from the evil eye.', 'سنّة تحصين الأبناء من العين.'],
                src: ['Сахих аль-Бухари', 'Sahih al-Bukhari', 'صحيح البخاري']
            },
            {
                t: ['«А\'узу би-Лляхи мина-ш-шайтани-р-раджим»', '«A\'udhu billahi minash-shaytanir-rajim»', '«أعوذ بالله من الشيطان الرجيم»'],
                b: ['При чтении Корана и наущениях', 'When reciting the Quran and at whisperings', 'عند قراءة القرآن والوسوسة'],
                a: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
                tr: ['А\'узу би-Лляхи мина-ш-шайтани-р-раджим', 'A\'udhu billahi minash-shaytanir-rajim'],
                tn: ['«Прибегаю к Аллаху от шайтана, побиваемого камнями [отверженного]».', '«I seek refuge with Allah from Satan, the accursed»', '«أعوذ بالله من الشيطان الرجيم».'],
                s: ['Повеление Корана: «Когда ты читаешь Коран, то прибегай к Аллаху от шайтана отверженного».', 'The Quran commands: «When you recite the Quran, seek refuge with Allah from Satan, the accursed».', 'أمر القرآن: «فإذا قرأت القرآن فاستعذ بالله من الشيطان الرجيم».'],
                bf: ['Первое слово защиты перед чтением Корана и при наущении.', 'The first word of protection before Quran recitation and at whispering.', 'أوّل الاستعاذة قبل التلاوة وعند الوسوسة.'],
                src: ['Коран, сура 16 «Ан-Нахль», аят 98', 'Quran, Surah 16 «An-Nahl», verse 98', 'القرآن، النحل (16): 98']
            }
        ]);

    /* ============================================================
       8. ЗНАНИЯ И ОБЛЕГЧЕНИЕ В ДЕЛАХ
       ============================================================ */
    section('knowledge',
        ['Знания и облегчение в делах', 'Knowledge and ease in affairs', 'العلم وتيسير الأمور'],
        ['Дуа для успеха и мудрости', 'Duas for success and wisdom', 'أدعية للتوفيق والحكمة'],
        [
            {
                t: ['«Рабби зидни \'ильман»', '«Rabbi zidni \'ilman»', '«ربّ زدني علمًا»'],
                b: ['Просьба о прибавлении знания', 'Asking for increase in knowledge', 'طلب الزيادة في العلم'],
                a: 'رَبِّ زِدْنِي عِلْمًا',
                tr: ['Рабби зидни \'ильман', 'Rabbi zidni \'ilman'],
                tn: ['«Господь мой, прибавь мне знания!»', '«My Lord, increase me in knowledge!»', '«ربّ زدني علمًا».'],
                s: ['Аллах повелел Своему Пророку ﷺ произнести эти слова в суре «Та Ха».', 'Allah commanded His Prophet ﷺ to say these words in Surah Ta-Ha.', 'أمر الله نبيّه ﷺ بهذه الكلمة في سورة طه.'],
                bf: ['Даже обладателю откровения велено просить ещё знания.', 'Even the recipient of revelation was told to ask for more knowledge.', 'حتى صاحب الوحي أُمر بطلب المزيد من العلم.'],
                src: ['Коран, сура 20 «Та Ха», аят 114', 'Quran, Surah 20 «Ta-Ha», verse 114', 'القرآن، طه (20): 114']
            },
            {
                t: ['Дуа Мусы (мир ему): «Рабби-шрах ли садри…»', 'The dua of Musa (peace be upon him)', 'دعاء موسى عليه السلام'],
                b: ['Перед важным делом и речью', 'Before an important task or speech', 'قبل المهمّات والبيان'],
                a: 'رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي',
                tr: ['Рабби-шрах ли садри, ва йассир ли амри, ва-хлюль \'укъдатан мин лисани, йафкъаху къаули', 'Rabbi-shrah li sadri, wa yassir li amri, wa-hlul \'uqdatan min lisani, yafqahu qawli'],
                tn: ['«Господь мой! Раскрой для меня мою грудь, облегчи моё дело, развяжи узел на моём языке, чтобы они поняли мою речь».', '«My Lord! Expand for me my breast, ease my task for me, untie the knot from my tongue so that they may understand my speech».', '«ربّ اشرح لي صدري، ويسّر لي أمري، واحلل عقدة من لساني، يفقهوا قولي».'],
                s: ['Мольба пророка Мусы (мир ему) перед отправлением к Фараону.', 'The prayer of the Prophet Musa (peace be upon him) before going to Pharaoh.', 'دعاء موسى عليه السلام قبل الذهاب إلى فرعون.'],
                bf: ['Просьба о ясности сердца, речи и лёгкости дела.', 'A plea for clarity of heart and speech and ease in the task.', 'سؤال انشراح الصدر وبيان اللسان وتيسير الأمر.'],
                src: ['Коран, сура 20 «Та Ха», аяты 25–28', 'Quran, Surah 20 «Ta-Ha», verses 25–28', 'القرآن، طه (20): 25–28']
            },
            {
                t: ['«Аллахумма инни ас\'алюка \'ильман нафи\'ан…»', '«Allahumma inni as\'aluka \'ilman nafi\'an…»', '«اللهم إني أسألك علمًا نافعًا…»'],
                b: ['Полезное знание, чистый удел, принятое дело', 'Beneficial knowledge, good provision, accepted deeds', 'علم نافع ورزق طيّب وعمل مقبول'],
                a: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
                tr: ['Аллахумма инни ас\'алюка \'ильман нафи\'ан, ва ризкъан таййибан, ва \'амалян мутакъаббалян', 'Allahumma inni as\'aluka \'ilman nafi\'an, wa rizqan tayyiban, wa \'amalan mutaqabbalan'],
                tn: ['«О Аллах, прошу у Тебя знания полезного, удела благого и дела принятого».', '«O Allah, I ask You for beneficial knowledge, goodly provision and an accepted deed».', '«اللهم إني أسألك علمًا نافعًا، ورزقًا طيّبًا، وعملًا متقبّلًا».'],
                s: ['Пророк ﷺ произносил эту мольбу после утренней молитвы.', 'The Prophet ﷺ used to say this supplication after the dawn prayer.', 'كان النبي ﷺ يقوله بعد صلاة الصبح.'],
                bf: ['Соединяет знание, пропитание и искренность дел.', 'Combines knowledge, provision and sincerity of deeds.', 'تجمع العلم والرزق وقبول العمل.'],
                src: ['Сунан Ибн Маджа; Муснад Ахмад', 'Sunan Ibn Majah; Musnad Ahmad', 'سنن ابن ماجه؛ مسند أحمد']
            },
            {
                t: ['«Аллахумма-нфа\'ни бима \'аллямтани…»', '«Allahumma-nfa\'ni bima \'allamtani…»', '«اللهم انفعني بما علّمتني…»'],
                b: ['Чтобы знание принесло пользу', 'That knowledge may benefit', 'أن ينفع العلم صاحبه'],
                a: 'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا',
                tr: ['Аллахумма-нфа\'ни бима \'аллямтани, ва \'аллимни ма йанфа\'уни, ва зидни \'ильман', 'Allahumma-nfa\'ni bima \'allamtani, wa \'allimni ma yanfa\'uni, wa zidni \'ilman'],
                tn: ['«О Аллах, дай мне пользу от того, чему Ты меня научил, научи меня тому, что принесёт мне пользу, и прибавь мне знания».', '«O Allah, benefit me by what You have taught me, teach me what benefits me, and increase me in knowledge».', '«اللهم انفعني بما علّمتني، وعلّمني ما ينفعني، وزدني علمًا».'],
                s: ['Из мольб Пророка ﷺ о знании; приводит ат-Тирмизи.', 'Among the Prophet\'s ﷺ supplications for knowledge, narrated by at-Tirmidhi.', 'من أدعية النبي ﷺ في طلب العلم، رواها الترمذي.'],
                bf: ['Просьба не просто о знании, а о пользе от него.', 'Not merely knowledge, but benefit from it.', 'ليس مجرّد العلم بل الانتفاع به.'],
                src: ['Джами\' ат-Тирмизи; Сунан Ибн Маджа', 'Jami\' at-Tirmidhi; Sunan Ibn Majah', 'جامع الترمذي؛ سنن ابن ماجه']
            },
            {
                t: ['«Аллахумма ля сахла илля ма джа\'альтаху сахлян…»', '«Allahumma la sahla illa ma ja\'altahu sahlan…»', '«اللهم لا سهل إلا ما جعلته سهلًا…»'],
                b: ['Когда дело кажется трудным', 'When a task seems difficult', 'عند صعوبة الأمر'],
                a: 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا',
                tr: ['Аллахумма ля сахля илля ма джа\'альтаху сахлян, ва анта тадж\'алю-ль-хазна иза ши\'та сахлян', 'Allahumma la sahla illa ma ja\'altahu sahlan, wa anta taj\'alul-hazna idha shi\'ta sahlan'],
                tn: ['«О Аллах, нет лёгкого, кроме того, что Ты сделал лёгким; и Ты делаешь трудное лёгким, когда пожелаешь».', '«O Allah, there is nothing easy except what You make easy, and You make difficulty easy when You will».', '«اللهم لا سهل إلا ما جعلته سهلًا، وأنت تجعل الحَزْن إذا شئت سهلًا».'],
                s: ['Из мольбы Пророка ﷺ в пути и при затруднении.', 'From the supplication of the Prophet ﷺ while travelling and in difficulty.', 'من دعاء النبي ﷺ في السفر وعند المشقّة.'],
                bf: ['Напоминание: облегчение — от Аллаха, а не от наших усилий.', 'A reminder that ease comes from Allah, not from our own effort.', 'تذكير بأن التيسير من الله لا من حول العبد.'],
                src: ['Сахих Ибн Хиббан; Ибн ас-Сунни', 'Sahih Ibn Hibban; Ibn as-Sunni', 'صحيح ابن حبّان؛ ابن السنّي']
            },
            {
                t: ['«Аллахумма инни а\'узу бика мин \'ильмин ля йанфа\'у…»', '«…from knowledge that does not benefit»', '«…من علم لا ينفع»'],
                b: ['От бесполезного знания и неотвеченной мольбы', 'From useless knowledge and unanswered dua', 'من علم لا ينفع ودعوة لا يُستجاب لها'],
                a: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا',
                tr: ['Аллахумма инни а\'узу бика мин \'ильмин ля йанфа\'у, ва мин къальбин ля йахша\'у, ва мин нафсин ля ташба\'у, ва мин да\'ватин ля юстаджабу ляха', 'Allahumma inni a\'udhu bika min \'ilmin la yanfa\'u, wa min qalbin la yakhsha\'u, wa min nafsin la tashba\'u, wa min da\'watin la yustajabu laha'],
                tn: ['«О Аллах, прибегаю к Тебе от знания, которое не приносит пользы, от сердца, которое не смиряется, от души, которая не насыщается, и от мольбы, на которую не отвечают».', '«O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that does not humble itself, from a soul that is never satisfied, and from a supplication that is not answered».', '«اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يُستجاب لها».'],
                s: ['Передаёт Зайд ибн Аркъам: «Я говорю вам только то, что говорил Посланник Аллаха ﷺ».', 'Narrated by Zayd ibn Arqam: «I tell you only what the Messenger of Allah ﷺ used to say».', 'عن زيد بن أرقم: «لا أقول لكم إلا كما كان رسول الله ﷺ يقول».'],
                bf: ['Оберегает от формального, бесплодного знания.', 'Guards against formal, fruitless knowledge.', 'تحمي من العلم الصوري الذي لا ثمرة له.'],
                src: ['Сахих Муслим, 2722', 'Sahih Muslim 2722', 'صحيح مسلم 2722']
            }
        ]);

    /* ============================================================
       9. О СЕМЬЕ, РОДИТЕЛЯХ И ПОТОМСТВЕ
       ============================================================ */
    section('family',
        ['О семье, родителях и потомстве', 'For family, parents and offspring', 'للأسرة والوالدين والذرية'],
        ['Молитвы за близких и детей', 'Prayers for loved ones and children', 'أدعية للأهل والأبناء'],
        [
            {
                t: ['«Рабби-рхамхума кама раббайани сагиран»', '«Rabbi-rhamhuma kama rabbayani saghiran»', '«ربّ ارحمهما كما ربّياني صغيرًا»'],
                b: ['Мольба за родителей', 'A prayer for one\'s parents', 'الدعاء للوالدين'],
                a: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
                tr: ['Рабби-рхамхума кама раббайани сагиран', 'Rabbi-rhamhuma kama rabbayani saghiran'],
                tn: ['«Господь мой! Помилуй их [родителей], ведь они растили меня ребёнком».', '«My Lord! Have mercy upon them [my parents], as they raised me when I was small».', '«ربّ ارحمهما كما ربّياني صغيرًا».'],
                s: ['Аят приводит слова мольбы сразу после повеления проявлять доброту к родителям.', 'The verse follows directly upon the command to be kind to one\'s parents.', 'جاءت الآية عقب الأمر بالإحسان إلى الوالدين مباشرة.'],
                bf: ['Самая известная кораническая мольба за отца и мать.', 'The best-known Quranic prayer for father and mother.', 'أشهر دعاء قرآني للوالدين.'],
                src: ['Коран, сура 17 «Аль-Исра», аят 24', 'Quran, Surah 17 «Al-Isra», verse 24', 'القرآن، الإسراء (17): 24']
            },
            {
                t: ['«Раббана хаб ляна мин азваджина…»', '«Rabbana hab lana min azwajina…»', '«ربّنا هب لنا من أزواجنا…»'],
                b: ['Просьба о праведной семье', 'Asking for a righteous family', 'سؤال الأسرة الصالحة'],
                a: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ، وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
                tr: ['Раббана хаб ляна мин азваджина ва зурриййатина къуррата а\'йунин, ва-дж\'альна ли-ль-муттакъина имаман', 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a\'yunin, waj\'alna lil-muttaqina imaman'],
                tn: ['«Господь наш! Даруй нам от наших супругов и потомства отраду для глаз и сделай нас примером для богобоязненных».', '«Our Lord! Grant us from our spouses and offspring a joy to our eyes, and make us an example for the righteous».', '«ربّنا هب لنا من أزواجنا وذرّيّاتنا قرّة أعين، واجعلنا للمتّقين إمامًا».'],
                s: ['Мольба «рабов Милостивого» в конце суры «Аль-Фуркъан».', 'The prayer of the «servants of the Most Merciful» at the end of Surah al-Furqan.', 'دعاء «عباد الرحمن» في ختام سورة الفرقان.'],
                bf: ['Просит не просто детей, а праведности всей семьи.', 'Asks not merely for children, but for the righteousness of the whole family.', 'لا يسأل الذرية وحدها بل صلاح الأسرة كلّها.'],
                src: ['Коран, сура 25 «Аль-Фуркъан», аят 74', 'Quran, Surah 25 «Al-Furqan», verse 74', 'القرآن، الفرقان (25): 74']
            },
            {
                t: ['«Рабби хаб ли мина-с-салихин»', '«Rabbi hab li minas-salihin»', '«ربّ هب لي من الصالحين»'],
                b: ['Мольба о праведном потомстве', 'A prayer for righteous offspring', 'طلب الذرية الصالحة'],
                a: 'رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ',
                tr: ['Рабби хаб ли мина-с-салихин', 'Rabbi hab li minas-salihin'],
                tn: ['«Господь мой! Даруй мне [потомство] из числа праведных».', '«My Lord! Grant me [offspring] from among the righteous».', '«ربّ هب لي من الصالحين».'],
                s: ['Мольба пророка Ибрахима (мир ему) перед благой вестью о сыне.', 'The prayer of the Prophet Ibrahim (peace be upon him) before the glad tidings of a son.', 'دعاء إبراهيم عليه السلام قبل البشارة بالولد.'],
                bf: ['Просит не количества детей, а их праведности.', 'Asks not for many children, but for their righteousness.', 'المراد صلاح الذرية لا كثرتها.'],
                src: ['Коран, сура 37 «Ас-Саффат», аят 100', 'Quran, Surah 37 «As-Saffat», verse 100', 'القرآن، الصافات (37): 100']
            },
            {
                t: ['«Рабби ля тазарни фардан…»', '«Rabbi la tadarni fardan…»', '«ربّ لا تذرني فردًا…»'],
                b: ['Мольба пророка Закарии (мир ему)', 'The prayer of Zakariyya (peace be upon him)', 'دعاء زكريّا عليه السلام'],
                a: 'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ',
                tr: ['Рабби ля тазарни фардан ва анта хайру-ль-варисин', 'Rabbi la tadarni fardan wa anta khayrul-warithin'],
                tn: ['«Господь мой! Не оставляй меня одиноким [без наследника], ведь Ты — лучший из наследующих».', '«My Lord! Do not leave me alone [without an heir], for You are the best of inheritors».', '«ربّ لا تذرني فردًا وأنت خير الوارثين».'],
                s: ['Воззвание Закарии (мир ему), за которым последовала весть о Йахйе (мир ему).', 'The call of Zakariyya (peace be upon him), after which came the tidings of Yahya (peace be upon him).', 'نداء زكريّا عليه السلام، فجاءته البشرى بيحيى عليه السلام.'],
                bf: ['Учит обращаться к Аллаху даже в самой личной просьбе.', 'Teaches turning to Allah even in the most personal of requests.', 'تعلّم الدعاء في أخصّ الحاجات.'],
                src: ['Коран, сура 21 «Аль-Анбия», аят 89', 'Quran, Surah 21 «Al-Anbiya», verse 89', 'القرآن، الأنبياء (21): 89']
            },
            {
                t: ['«Рабби-гфир ли ва ли-валидаййа…»', '«Rabbi-ghfir li wa li-walidayya…»', '«ربّ اغفر لي ولوالديّ…»'],
                b: ['Мольба пророка Нуха (мир ему)', 'The prayer of Nuh (peace be upon him)', 'دعاء نوح عليه السلام'],
                a: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
                tr: ['Рабби-гфир ли ва ли-валидаййа ва лиман дахаля байтийа му\'минан ва ли-ль-му\'минина ва-ль-му\'минат', 'Rabbi-ghfir li wa li-walidayya wa liman dakhala baytiya mu\'minan wa lil-mu\'minina wal-mu\'minat'],
                tn: ['«Господь мой! Прости меня, моих родителей, того, кто вошёл в мой дом верующим, а также всех верующих мужчин и женщин».', '«My Lord! Forgive me, my parents, whoever enters my house as a believer, and all believing men and women».', '«ربّ اغفر لي ولوالديّ ولمن دخل بيتي مؤمنًا وللمؤمنين والمؤمنات».'],
                s: ['Мольба пророка Нуха (мир ему); охватывает семью и всю общину.', 'The prayer of the Prophet Nuh (peace be upon him), embracing family and the whole community.', 'دعاء نوح عليه السلام، يعمّ أهله والمؤمنين جميعًا.'],
                bf: ['Просьба о прощении выходит за пределы собственной семьи.', 'The plea for forgiveness extends beyond one\'s own family.', 'يتجاوز الدعاء الأسرة إلى عموم المؤمنين.'],
                src: ['Коран, сура 71 «Нух», аят 28', 'Quran, Surah 71 «Nuh», verse 28', 'القرآن، نوح (71): 28']
            },
            {
                t: ['«Рабби аузи\'ни ан ашкура ни\'матака…»', '«Rabbi awzi\'ni an ashkura ni\'mataka…»', '«ربّ أوزعني أن أشكر نعمتك…»'],
                b: ['Благодарность и забота о потомстве', 'Gratitude and care for one\'s descendants', 'شكر النعمة وصلاح الذرية'],
                a: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ، وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ، وَأَصْلِحْ لِي فِي ذُرِّيَّتِي ۖ إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ',
                tr: ['Рабби аузи\'ни ан ашкура ни\'матака-ль-ляти ан\'амта \'аляййа ва \'аля валидаййа, ва ан а\'маля салихан тардаху, ва аслих ли фи зурриййати, инни тубту иляйка ва инни мина-ль-муслимин', 'Rabbi awzi\'ni an ashkura ni\'mataka-llati an\'amta \'alayya wa \'ala walidayya, wa an a\'mala salihan tardahu, wa aslih li fi dhurriyyati, inni tubtu ilayka wa inni minal-muslimin'],
                tn: ['«Господь мой! Внуши мне благодарить за милость, которой Ты облагодетельствовал меня и моих родителей, и совершать праведное дело, которым Ты доволен; исправь ради меня моё потомство. Я обратился к Тебе с покаянием и я — из числа мусульман».', '«My Lord! Inspire me to be grateful for the favour You bestowed on me and my parents, and to do righteous deeds that please You; set right for me my descendants. I have turned to You in repentance and I am among the Muslims».', '«ربّ أوزعني أن أشكر نعمتك التي أنعمت عليّ وعلى والديّ، وأن أعمل صالحًا ترضاه، وأصلح لي في ذرّيّتي، إني تبُت إليك وإني من المسلمين».'],
                s: ['Мольба, которую Коран приводит как слова праведного человека о своих родителях и детях.', 'A prayer the Quran cites as the words of a righteous person concerning his parents and children.', 'دعاء حكاه القرآن عن عبد صالح في برّ والديه وصلاح ذرّيته.'],
                bf: ['Соединяет благодарность Аллаху, покаяние и заботу о детях.', 'Combines gratitude to Allah, repentance and concern for one\'s children.', 'يجمع شكر الله والتوبة والحرص على الذرية.'],
                src: ['Коран, сура 46 «Аль-Ахкъаф», аят 15', 'Quran, Surah 46 «Al-Ahqaf», verse 15', 'القرآن، الأحقاف (46): 15']
            }
        ]);

    /* ============================================================
       10. ЗДОРОВЬЕ И ИСЦЕЛЕНИЕ
       ============================================================ */
    section('health',
        ['Здоровье и исцеление', 'Health and healing', 'الصحة والشفاء'],
        ['Дуа от болезней и для укрепления тела', 'Duas against illness and for strength', 'أدعية من المرض وللعافية'],
        [
            {
                t: ['«Азхиби-ль-ба\'са рабба-н-наси…»', '«Adhhibil-ba\'sa Rabban-nasi…»', '«أذهب الباس ربّ الناس…»'],
                b: ['Мольба Пророка ﷺ за больного', 'The Prophet\'s ﷺ prayer for the sick', 'دعاء النبي ﷺ للمريض'],
                a: 'أَذْهِبِ الْبَاسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا',
                tr: ['Азхиби-ль-ба\'са рабба-н-наси, ишфи ва анта-ш-Шафи, ля шифа\'а илля шифа\'ука, шифа\'ан ля югадиру сакаман', 'Adhhibil-ba\'sa Rabban-nasi, ishfi wa antash-Shafi, la shifa\'a illa shifa\'uka, shifa\'an la yughadiru saqaman'],
                tn: ['«Удали недуг, о Господь людей! Исцели — ведь Ты Исцеляющий; нет исцеления, кроме Твоего исцеления, исцеления, после которого не останется болезни».', '«Remove the affliction, O Lord of mankind! Heal, for You are the Healer; there is no cure but Yours — a cure that leaves no illness behind».', '«أذهب الباس ربّ الناس، اشفِ وأنت الشافي، لا شفاء إلا شفاؤك، شفاءً لا يغادر سقمًا».'],
                s: ['\'Аиша (да будет доволен ею Аллах) передала, что Пророк ﷺ говорил это, навещая больного.', '\'Aishah (may Allah be pleased with her) reported that the Prophet ﷺ said this when visiting a sick person.', 'عن عائشة رضي الله عنها: كان النبي ﷺ يقوله إذا أتى مريضًا.'],
                bf: ['Утверждает, что исцеление — только от Аллаха.', 'Affirms that healing comes from Allah alone.', 'يُقرّ بأن الشفاء من الله وحده.'],
                src: ['Сахих аль-Бухари, 5675; Сахих Муслим', 'Sahih al-Bukhari 5675; Sahih Muslim', 'صحيح البخاري 5675؛ صحيح مسلم']
            },
            {
                t: ['«Аллахумма \'афини фи бадани…»', '«Allahumma \'afini fi badani…»', '«اللهم عافني في بدني…»'],
                b: ['Утром и вечером — трижды', 'Morning and evening — three times', 'صباحًا ومساءً ثلاثًا'],
                a: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ',
                tr: ['Аллахумма \'афини фи бадани, Аллахумма \'афини фи сам\'и, Аллахумма \'афини фи басари, ля иляха илля анта. Аллахумма инни а\'узу бика мин аль-куфри ва-ль-факъри, Аллахумма инни а\'узу бика мин \'азаби-ль-къабри, ля иляха илля анта', 'Allahumma \'afini fi badani, Allahumma \'afini fi sam\'i, Allahumma \'afini fi basari, la ilaha illa anta. Allahumma inni a\'udhu bika minal-kufri wal-faqri, Allahumma inni a\'udhu bika min \'adhabil-qabri, la ilaha illa anta'],
                tn: ['«О Аллах, даруй мне здоровье в теле, в слухе и в зрении; нет божества, кроме Тебя. О Аллах, прибегаю к Тебе от неверия и бедности и от наказания могилы; нет божества, кроме Тебя».', '«O Allah, grant me well-being in my body, my hearing and my sight; there is no god but You. O Allah, I seek refuge in You from disbelief and poverty and from the punishment of the grave; there is no god but You».', '«اللهم عافني في بدني، وفي سمعي، وفي بصري، لا إله إلا أنت، وأعوذ بك من الكفر والفقر وعذاب القبر، لا إله إلا أنت».'],
                s: ['Из утренних и вечерних азкаров; передаётся в Сунане Абу Давуда.', 'Among the morning and evening adhkar, narrated in Sunan Abi Dawud.', 'من أذكار الصباح والمساء، رواه أبو داود.'],
                bf: ['Просьба о сохранении тела, слуха и зрения.', 'A plea for the preservation of body, hearing and sight.', 'سؤال حفظ البدن والسمع والبصر.'],
                src: ['Сунан Абу Давуд; Муснад Ахмад', 'Sunan Abi Dawud; Musnad Ahmad', 'سنن أبي داود؛ مسند أحمد']
            },
            {
                t: ['«Аллахумма инни ас\'алюка-ль-\'афва ва-ль-\'афийата…»', '«Al-\'afw wal-\'afiyah» for health', '«العفو والعافية» للصحة'],
                b: ['Благополучие в религии, семье и имуществе', 'Well-being in faith, family and wealth', 'العافية في الدين والأهل والمال'],
                a: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي. اللَّهُمَّ اسْتُرْ عَوْرَتِي وَآمِنْ رَوْعَاتِي',
                tr: ['Аллахумма инни ас\'алюка-ль-\'афийата фи-д-дунья ва-ль-ахира. Аллахумма инни ас\'алюка-ль-\'афва ва-ль-\'афийата фи дини ва дуньяя ва ахли ва мали. Аллахумма-стур \'аурати ва амин рау\'ати', 'Allahumma inni as\'alukal-\'afiyata fid-dunya wal-akhirah. Allahumma inni as\'alukal-\'afwa wal-\'afiyata fi dini wa dunyaya wa ahli wa mali. Allahummas-tur \'awrati wa amin raw\'ati'],
                tn: ['«О Аллах, прошу у Тебя благополучия в этом мире и в будущем… О Аллах, скрой мои недостатки и избавь от страхов» (начало полной мольбы).', '«O Allah, I ask You for well-being in this world and the Hereafter… O Allah, conceal my faults and calm my fears» (opening of the full dua).', '«اللهم إني أسألك العافية في الدنيا والآخرة… اللهم استر عورتي وآمن روعاتي» (أوّل الدعاء).'],
                s: ['Ибн \'Умар передал, что Пророк ﷺ не оставлял эту мольбу ни утром, ни вечером.', 'Ibn \'Umar reported that the Prophet ﷺ never omitted it morning or evening.', 'عن ابن عمر: لم يكن النبي ﷺ يدعها حين يمسي وحين يصبح.'],
                bf: ['«Аль-\'афийа» — здоровье и защита ото всех бед сразу.', '«Al-\'afiyah» means health and protection from every affliction at once.', '«العافية» تجمع الصحة والسلامة من كل بلاء.'],
                src: ['Сунан Абу Давуд, 5074 (сахих)', 'Sunan Abi Dawud 5074 (sahih)', 'سنن أبي داود 5074 (صحيح)']
            },
            {
                t: ['Дуа Айюба (мир ему)', 'The dua of Ayyub (peace be upon him)', 'دعاء أيّوب عليه السلام'],
                b: ['При длительной болезни', 'During prolonged illness', 'عند طول المرض'],
                a: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
                tr: ['Инни массанийа-д-дурру ва анта архаму-р-рахимин', 'Inni massaniyad-durru wa anta arhamur-rahimin'],
                tn: ['«Поистине, меня коснулось страдание, а Ты — Милосерднейший из милосердных!»', '«Indeed, affliction has touched me, and You are the Most Merciful of the merciful!»', '«أنّي مسّني الضرّ وأنت أرحم الراحمين».'],
                s: ['Воззвание пророка Айюба (мир ему); Аллах ответил и снял с него страдание.', 'The call of the Prophet Ayyub (peace be upon him); Allah answered and removed his affliction.', 'نداء أيّوب عليه السلام، فاستجاب الله له وكشف ضرّه.'],
                bf: ['В кратких словах — жалоба только Аллаху и упование на Его милость.', 'A complaint to Allah alone and reliance on His mercy, in very few words.', 'شكوى إلى الله وحده مع حسن الظنّ برحمته.'],
                src: ['Коран, сура 21 «Аль-Анбия», аят 83', 'Quran, Surah 21 «Al-Anbiya», verse 83', 'القرآن، الأنبياء (21): 83']
            },
            {
                t: ['«Ас\'алю-Ллаха-ль-\'Азыма…» — семь раз', '«As\'alullaha al-\'Azima…» — seven times', '«أسأل الله العظيم…» سبعًا'],
                b: ['При посещении больного', 'When visiting a sick person', 'عند عيادة المريض'],
                a: 'أَسْأَلُ اللَّهَ الْعَظِيمَ، رَبَّ الْعَرْشِ الْعَظِيمِ، أَنْ يَشْفِيَكَ',
                tr: ['Ас\'алю-Ллаха-ль-\'Азыма, Рабба-ль-\'арши-ль-\'азыми, ан йашфийака', 'As\'alullaha al-\'Azima, Rabbal-\'arshil-\'azimi, an yashfiyaka'],
                tn: ['«Прошу Аллаха Великого, Господа великого Трона, чтобы Он исцелил тебя» (семь раз).', '«I ask Allah the Mighty, Lord of the Mighty Throne, to heal you» (seven times).', '«أسأل الله العظيم ربّ العرش العظيم أن يشفيك» (سبع مرّات).'],
                s: ['Передаёт Ибн \'Аббас: Пророк ﷺ сказал, что если больному не назначен смертный час, он непременно выздоровеет после семикратного повторения.', 'Narrated by Ibn \'Abbas: the Prophet ﷺ said that if one\'s death is not decreed, he will surely recover after it is said seven times.', 'عن ابن عباس: من عاد مريضًا لم يحضر أجله فقالها سبعًا إلا عوفي.'],
                bf: ['Мольба за другого человека, а не за себя.', 'A supplication on behalf of someone else.', 'دعاء للغير لا للنفس.'],
                src: ['Сунан Абу Давуд; Джами\' ат-Тирмизи', 'Sunan Abi Dawud; Jami\' at-Tirmidhi', 'سنن أبي داود؛ جامع الترمذي']
            },
            {
                t: ['«Ля ба\'са, тахурун…» — слова утешения', '«La ba\'sa, tahurun…» — words of comfort', '«لا بأس، طهور…» كلمات مواساة'],
                b: ['Что сказать болящему', 'What to say to the afflicted', 'ما يُقال للمريض'],
                a: 'لَا بَأْسَ، طَهُورٌ إِنْ شَاءَ اللَّهُ',
                tr: ['Ля ба\'са, тахурун ин ша\'а-Ллах', 'La ba\'sa, tahurun in sha\'allah'],
                tn: ['«Не беда! Это очищение, если пожелает Аллах».', '«No harm! It is a purification, if Allah wills».', '«لا بأس، طهور إن شاء الله».'],
                s: ['Пророк ﷺ говорил эти слова, утешая больного.', 'The Prophet ﷺ said these words when comforting the sick.', 'كان النبي ﷺ يواسي المريض بهذه الكلمات.'],
                bf: ['Напоминает, что болезнь может быть очищением от грехов.', 'Reminds that illness may be a purification from sins.', 'تذكير بأن المرض قد يكون طهارة من الذنوب.'],
                src: ['Сахих аль-Бухари', 'Sahih al-Bukhari', 'صحيح البخاري']
            }
        ]);

    /* ============================================================
       11. УКРЕПЛЕНИЕ ИМАНА
       ============================================================ */
    section('iman',
        ['Укрепление имана', 'Strengthening faith', 'تقوية الإيمان'],
        ['Дуа для укрепления веры в сердце', 'Duas to strengthen faith in the heart', 'أدعية لترسيخ الإيمان في القلب'],
        [
            {
                t: ['«Йа мукаллиба-ль-кулюби…»', '«Ya muqallibal-qulubi…»', '«يا مقلّب القلوب…»'],
                b: ['Самая частая мольба Пророка ﷺ', 'The Prophet\'s ﷺ most frequent dua', 'أكثر دعاء النبي ﷺ'],
                a: 'يَا مُقَلِّبَ الْقُلُوبِ، ثَبِّتْ قَلْبِي عَلَىٰ دِينِكَ',
                tr: ['Йа мукаллиба-ль-кулюби, саббит къальби \'аля диника', 'Ya muqallibal-qulubi, thabbit qalbi \'ala dinika'],
                tn: ['«О Переворачивающий сердца, утверди моё сердце на Твоей религии!»', '«O Turner of the hearts, make my heart firm upon Your religion!»', '«يا مقلّب القلوب، ثبّت قلبي على دينك».'],
                s: ['Умм Саляма спросила, почему Пророк ﷺ чаще всего повторяет именно эти слова; он ответил, что сердца — между двумя пальцами Аллаха.', 'Umm Salamah asked why the Prophet ﷺ repeated this most often; he replied that hearts are between two of Allah\'s fingers.', 'سألت أم سلمة عن أكثر دعائه، فأخبر أن القلوب بين أصبعين من أصابع الله.'],
                bf: ['Просьба о стойкости, а не о новых знаниях или благах.', 'A plea for steadfastness rather than new knowledge or favours.', 'سؤال الثبات لا زيادة العلم أو الرزق.'],
                src: ['Джами\' ат-Тирмизи, 3522 (хасан); Муснад Ахмад', 'Jami\' at-Tirmidhi 3522 (hasan); Musnad Ahmad', 'جامع الترمذي 3522 (حسن)؛ مسند أحمد']
            },
            {
                t: ['«Раббана ля тузиг кулюбана…»', '«Rabbana la tuzigh qulubana…»', '«ربّنا لا تُزغ قلوبنا…»'],
                b: ['После того как Аллах наставил', 'After Allah has guided', 'بعد إذ هدى الله'],
                a: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا، وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ',
                tr: ['Раббана ля тузигъ кулюбана ба\'да из хадайтана, ва хаб ляна мин лядунка рахматан, иннака анта-ль-Ваххаб', 'Rabbana la tuzigh qulubana ba\'da idh hadaytana, wa hab lana min ladunka rahmatan, innaka antal-Wahhab'],
                tn: ['«Господь наш! Не отклоняй наши сердца после того, как Ты наставил нас, и даруй нам от Себя милость: ведь Ты — Дарующий».', '«Our Lord! Do not let our hearts deviate after You have guided us, and grant us mercy from Yourself: indeed You are the Bestower».', '«ربّنا لا تُزغ قلوبنا بعد إذ هديتنا، وهب لنا من لدنك رحمة، إنك أنت الوهّاب».'],
                s: ['Мольба «твердых в знании» в суре «Аль \'Имран».', 'The prayer of «those firm in knowledge» in Surah Al \'Imran.', 'دعاء «الراسخين في العلم» في سورة آل عمران.'],
                bf: ['Просьба сохранить уже дарованное наставление.', 'A plea to preserve the guidance already granted.', 'سؤال حفظ الهدى بعد حصوله.'],
                src: ['Коран, сура 3 «Аль \'Имран», аят 8', 'Quran, Surah 3 «Al \'Imran», verse 8', 'القرآن، آل عمران (3): 8']
            },
            {
                t: ['«Аллахумма инни ас\'алюка-ль-худа…»', '«Allahumma inni as\'alukal-huda…»', '«اللهم إني أسألك الهدى…»'],
                b: ['Прямой путь, богобоязненность, целомудрие, достаток', 'Guidance, piety, chastity and sufficiency', 'الهدى والتقى والعفاف والغنى'],
                a: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَىٰ وَالتُّقَىٰ وَالْعَفَافَ وَالْغِنَىٰ',
                tr: ['Аллахумма инни ас\'алюка-ль-худа ва-т-тукъа ва-ль-\'афафа ва-ль-гина', 'Allahumma inni as\'alukal-huda wat-tuqa wal-\'afafa wal-ghina'],
                tn: ['«О Аллах, я прошу у Тебя наставления, богобоязненности, целомудрия и достаточности».', '«O Allah, I ask You for guidance, piety, chastity and sufficiency».', '«اللهم إني أسألك الهدى والتقى والعفاف والغنى».'],
                s: ['Из мольб Пророка ﷺ, которые он произносил регулярно.', 'Among the supplications the Prophet ﷺ said regularly.', 'من أدعية النبي ﷺ التي كان يداوم عليها.'],
                bf: ['Собирает в одной фразе всё главное для веры и достоинства.', 'Gathers in one phrase everything essential for faith and dignity.', 'تجمع أصول الدين والكرامة في كلمات يسيرة.'],
                src: ['Сахих Муслим; Джами\' ат-Тирмизи', 'Sahih Muslim; Jami\' at-Tirmidhi', 'صحيح مسلم؛ جامع الترمذي']
            },
            {
                t: ['«Аллахумма а\'инни \'аля зикрика…»', '«Allahumma a\'inni \'ala dhikrika…»', '«اللهم أعِنّي على ذكرك…»'],
                b: ['Помощь в постоянстве поклонения', 'Help in consistency of worship', 'العون على دوام العبادة'],
                a: 'اللَّهُمَّ أَعِنِّي عَلَىٰ ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
                tr: ['Аллахумма а\'инни \'аля зикрика ва шукрика ва хусни \'ибадатика', 'Allahumma a\'inni \'ala dhikrika wa shukrika wa husni \'ibadatika'],
                tn: ['«О Аллах, помоги мне поминать Тебя, благодарить Тебя и прекрасно поклоняться Тебе».', '«O Allah, help me to remember You, to thank You, and to worship You beautifully».', '«اللهم أعِنّي على ذكرك وشكرك وحسن عبادتك».'],
                s: ['Пророк ﷺ завещал Му\'азу ибн Джабалю повторять это после каждой молитвы.', 'The Prophet ﷺ enjoined Mu\'adh ibn Jabal to repeat it after every prayer.', 'أوصى النبي ﷺ معاذًا أن يقولها دُبر كل صلاة.'],
                bf: ['Признание, что постоянство — тоже дар Аллаха.', 'Acknowledges that consistency itself is a gift from Allah.', 'إقرار بأن الدوام على الطاعة من فضل الله.'],
                src: ['Сунан Абу Давуд; Сунан ан-Насаи', 'Sunan Abi Dawud; Sunan an-Nasa\'i', 'سنن أبي داود؛ سنن النسائي']
            },
            {
                t: ['«Раббана атина фи-д-дунья хасанатан…»', '«Rabbana atina fid-dunya hasanatan…»', '«ربّنا آتنا في الدنيا حسنة…»'],
                b: ['Самая всеобъемлющая мольба', 'The most comprehensive dua', 'أجمع الأدعية'],
                a: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
                tr: ['Раббана атина фи-д-дунья хасанатан ва фи-ль-ахирати хасанатан ва къина \'азаба-н-нар', 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina \'adhaban-nar'],
                tn: ['«Господь наш! Даруй нам благо в этом мире и благо в мире будущем и защити нас от наказания огнём».', '«Our Lord! Give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire».', '«ربّنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار».'],
                s: ['Анас ибн Малик передал, что Пророк ﷺ чаще всего обращался к Аллаху именно с этой мольбой.', 'Anas ibn Malik reported that this was the supplication the Prophet ﷺ made most often.', 'عن أنس: كان أكثر دعاء النبي ﷺ بهذه الآية.'],
                bf: ['Вбирает в себя все мирские и религиозные нужды.', 'Encompasses every worldly and religious need.', 'تستوعب كل حاجات الدنيا والدين.'],
                src: ['Коран, сура 2 «Аль-Бакара», аят 201; Сахих аль-Бухари', 'Quran, Surah 2 «Al-Baqarah», verse 201; Sahih al-Bukhari', 'القرآن، البقرة (2): 201؛ صحيح البخاري']
            },
            {
                t: ['«Субхана-Ллахи ва-ль-хамду лиллях…»', '«Subhanallahi wal-hamdu lillah…»', '«سبحان الله والحمد لله…»'],
                b: ['Любимые Аллахом слова', 'The words most beloved to Allah', 'أحبّ الكلام إلى الله'],
                a: 'سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَٰهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ',
                tr: ['Субхана-Ллах, ва-ль-хамду лиллях, ва ля иляха илля-Ллах, ва-Ллаху Акбар', 'Subhanallah, wal-hamdu lillah, wa la ilaha illallah, wallahu Akbar'],
                tn: ['«Пречист Аллах, хвала Аллаху, нет божества, кроме Аллаха, и Аллах Велик».', '«Glory be to Allah, praise be to Allah, there is no god but Allah, and Allah is Most Great».', '«سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر».'],
                s: ['Пророк ﷺ назвал эти четыре слова любимейшими у Аллаха и сказал, что ради них стоило бы просить чего угодно.', 'The Prophet ﷺ called these four phrases the dearest to Allah.', 'سمّاهنّ النبي ﷺ أحبّ الكلام إلى الله.'],
                bf: ['Обновляет иман в течение дня без всяких условий.', 'Renews faith throughout the day with no conditions.', 'تجدّد الإيمان في اليوم بلا تكلّف.'],
                src: ['Сахих Муслим; Джами\' ат-Тирмизи', 'Sahih Muslim; Jami\' at-Tirmidhi', 'صحيح مسلم؛ جامع الترمذي']
            }
        ]);

    /* ===== Подробные «История» и «Польза» (js/dua-details.js) =====
       Каждый блок — массив абзацев для RU / EN / AR. Ключ: раздел:номер.
       Если файл деталей не загружен, остаются короткие строки из карточек. */
    function paragraphs(pack) {
        function wrap(lang) {
            return (pack[lang] || []).map(function (p) { return '<p>' + p + '</p>'; }).join('');
        }
        return { ru: wrap('ru'), en: wrap('en'), ar: wrap('ar') };
    }

    function applyDetails() {
        const details = window.DUA_DETAILS || {};
        Object.keys(duasData).forEach(function (sid) {
            duasData[sid].items.forEach(function (item, i) {
                const d = details[sid + ':' + i];
                if (!d) return;
                if (d.s) item.story = paragraphs(d.s);
                if (d.bf) item.benefit = paragraphs(d.bf);
            });
        });
    }

    applyDetails();
    window.duasData = duasData;

    // ===== Выбор языка =====
    function duaLang() {
        return (window.I18N && typeof window.I18N.getLang === 'function')
            ? window.I18N.getLang()
            : (localStorage.getItem('amanah_lang') || 'ru');
    }

    function duaL(value) {
        if (value == null) return '';
        if (typeof value === 'string') return value;
        if (typeof value === 'object') {
            return value[duaLang()] || value.ru || value.en || Object.values(value)[0] || '';
        }
        return String(value);
    }

    function duaT(key, vars, fallback) {
        if (window.I18N && typeof window.I18N.t === 'function') {
            return window.I18N.t(key, vars, fallback);
        }
        return fallback != null ? fallback : key;
    }

    let currentDuaSectionId = null;

    function showDuaSoon() {
        alert(duaT('dua.inDevelopment', null, 'Раздел в разработке'));
    }

    function renderDuaSection(sectionId) {
        const section = duasData[sectionId];
        if (!section) return;

        const titleEl = document.getElementById('dua-section-title');
        const descEl = document.getElementById('dua-section-desc');
        const listEl = document.getElementById('dua-list-container');
        if (!titleEl || !descEl || !listEl) return;

        titleEl.innerText = duaL(section.title);
        descEl.innerText = duaL(section.desc);

        const lang = duaLang();
        // ar: только арабский текст (транскрипция и перевод не выводятся)
        const showExtras = lang !== 'ar';

        const historyLabel = duaT('dua.history', null, 'История');
        const benefitLabel = duaT('dua.benefit', null, 'Польза');
        const sourcePrefix = duaT('dua.source', null, 'Источник: {{source}}');

        let html = '';
        section.items.forEach(dua => {
            const sourceLine = sourcePrefix.split('{{source}}').join(duaL(dua.source));
            const extrasHtml = showExtras ? `
                            <div class="transliteration">${duaL(dua.translit)}</div>
                            <div class="translation">${duaL(dua.translate)}</div>` : '';
            html += `
                    <div class="dua-item">
                        <div class="dua-header" onclick="toggleDua(this)">
                            <div class="dua-header-text">
                                <span class="dua-title">${duaL(dua.title)}</span>
                                <span class="dua-subtitle">${duaL(dua.benefitTitle)}</span>
                            </div>
                            <span class="arrow">▼</span>
                        </div>
                        <div class="dua-content" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
                            <div class="arabic-text">${dua.arabic}</div>${extrasHtml}

                            <div class="dua-info-block">
                                <strong>${historyLabel}</strong>
                                ${duaL(dua.story)}
                            </div>
                            <div class="dua-info-block dua-info-block--benefit">
                                <strong>${benefitLabel}</strong>
                                ${duaL(dua.benefit)}
                            </div>

                            <div class="source">${sourceLine}</div>
                        </div>
                    </div>
                `;
        });

        listEl.innerHTML = html;
    }

    function openDuaSection(sectionId) {
        if (!duasData[sectionId]) {
            showDuaSoon();
            return;
        }

        currentDuaSectionId = sectionId;
        renderDuaSection(sectionId);

        document.getElementById('dua-main-page').classList.remove('active');
        document.getElementById('dua-inner-page').classList.add('active');
        window.scrollTo(0, 0);
    }

    function closeDuaSection() {
        document.getElementById('dua-inner-page').classList.remove('active');
        document.getElementById('dua-main-page').classList.add('active');
        window.scrollTo(0, 0);
    }

    function toggleDua(element) {
        const parentItem = element.parentElement;
        parentItem.classList.toggle('active');
    }

    // Функции доступны из onclick в HTML
    window.openDuaSection = openDuaSection;
    window.closeDuaSection = closeDuaSection;
    window.toggleDua = toggleDua;
    window.showDuaSoon = showDuaSoon;

    document.addEventListener('amanah:languagechange', () => {
        if (currentDuaSectionId && document.getElementById('dua-inner-page').classList.contains('active')) {
            renderDuaSection(currentDuaSectionId);
        }
    });
})(window, document);
