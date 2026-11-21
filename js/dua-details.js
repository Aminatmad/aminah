/* ============================================================
   AMANAH · «История» и «Польза» для каждой дуа
   Контекст ниспослания / ситуация хадиса + конкретная награда
   или краткий тафсир Ибн Касира. Только достоверные источники.
   Ключ: '<раздел>:<номер карточки>'. Каждый блок — массив абзацев.
   ============================================================ */
(function (window) {
    'use strict';

    // s = «История», bf = «Польза»; ru/en/ar — массивы абзацев
    function E(s, bf) { return { s: s, bf: bf }; }
    function P(ru, en, ar) { return { ru: ru, en: en, ar: ar }; }

    const D = {};

    /* ---------- 1. УТРЕННИЕ АЗКАРЫ ---------- */
    D['morning:0'] = E(
        P([
            `Аят ниспослан в Медине, в суре «Аль-Бакара» — самой длинной суре Корана. Ибн Касир во вступлении к её тафсиру отмечает, что в ней собраны основы веры, установления и наставления, поэтому её называют «матерью Корана».`,
            `Пророк ﷺ спросил Убаййа ибн Ка'ба: «О Абу-ль-Мунзир, знаешь ли ты, какой аят в Книге Аллаха, по твоему мнению, величайший?» Тот ответил: «Аллах — нет божества, кроме Него, Живого, Поддерживающего...». Пророк ﷺ ударил его в грудь и сказал: «Да будет приятно тебе знание, о Абу-ль-Мунзир!» (Сахих Муслим, 810).`
        ], [
            `Revealed in Madinah within Surah al-Baqarah, the longest surah of the Quran. In the introduction to his tafsir Ibn Kathir notes that it gathers the foundations of faith, rulings and exhortation, which is why it is called the «mother of the Quran».`,
            `The Prophet ﷺ asked Ubayy ibn Ka'b: «O Abu'l-Mundhir, do you know which verse in the Book of Allah is, in your view, the greatest?» He replied: «Allah — there is no deity except Him, the Ever-Living, the Sustainer...». The Prophet ﷺ struck him on the chest and said: «May knowledge be pleasant to you, O Abu'l-Mundhir!» (Sahih Muslim 810).`
        ], [
            `نزلت الآية في المدينة ضمن سورة البقرة، أطول سور القرآن؛ ويذكر ابن كثير في مقدّمة تفسيرها أنها جمعت أصول الإيمان والأحكام والمواعظ، ولذلك تُسمّى «أمّ القرآن».`,
            `سأل النبي ﷺ أُبيّ بن كعب: «يا أبا المنذر، أتدري أيّ آية من كتاب الله معك أعظم؟» قال: «الله لا إله إلا هو الحيّ القيّوم»، فضرب في صدره وقال: «والله لِيهنك العلم أبا المنذر» (صحيح مسلم 810).`
        ]),
        P([
            `Ибн Касир пишет, что аят состоит из десяти предложений и каждое из них утверждает единственность Аллаха, совершенство Его жизни, знания, власти и имён; именно поэтому он — величайший аят Корана.`,
            `Абу Хурайра передал, что Пророк ﷺ подтвердил: прочитавшему Аят аль-Курси перед сном Аллах ставит хранителя, и шайтан не приблизится к нему до утра (аль-Бухари, 5010). Поэтому аят читают утром и вечером как главный зикр защиты.`
        ], [
            `Ibn Kathir writes that the verse comprises ten clauses, each affirming Allah's oneness and the perfection of His life, knowledge, dominion and names — which is why it is the greatest verse of the Quran.`,
            `Abu Hurayrah reported that the Prophet ﷺ confirmed: whoever recites Ayat al-Kursi before sleep will have a guardian appointed by Allah, and no Satan will come near him until morning (al-Bukhari 5010). It is therefore recited morning and evening as the foremost dhikr of protection.`
        ], [
            `يذكر ابن كثير أن الآية اشتملت على عشر جمل، كلّها تقرّ التوحيد وكمال حياته وعلمه وملكه وأسمائه، ولذلك كانت أعظم آية في القرآن.`,
            `وعن أبي هريرة أن النبي ﷺ أقرّ أن من قرأها عند النوم وكّل الله به حافظًا ولا يقربه شيطان حتى يصبح (البخاري 5010)، فتُقرأ صباحًا ومساءً كأعظم ذكر للحفظ.`
        ])
    );

    D['morning:1'] = E(
        P([
            `Передаёт 'Абдуллах ибн Мас'уд: «Когда наступал вечер, Посланник Аллаха ﷺ говорил: "Амсайна ва амса-ль-мульку лиллях..."» (Сахих Муслим, 2723а). В той же передаче прямо сказано: «А когда наступало утро, он говорил то же: "Асбахна ва асбахаль-мульку лиллях"» (2723б).`,
            `То есть утренняя формула — не отдельное нововведение, а зеркальная замена слов «вечер/ночь» на «утро/день» в достоверной мольбе Пророка ﷺ. Слабую версию Абу Давуда 5084 со словами «фатх, наср, нур» (да'иф) здесь не используют.`
        ], [
            `Narrated by 'Abdullah ibn Mas'ud: «When evening came, the Messenger of Allah ﷺ would say: "Amsayna wa amsal-mulku lillah..."» (Sahih Muslim 2723a). The same report states plainly: «And when morning came he said the same: "Asbahna wa asbahal-mulku lillah"» (2723b).`,
            `So the morning wording is not a separate invention but the authentic supplication of the Prophet ﷺ with «evening/night» replaced by «morning/day». The weak version in Abu Dawud 5084 containing «fath, nasr, nur» (da'if) is not used here.`
        ], [
            `عن عبد الله بن مسعود: «كان رسول الله ﷺ إذا أمسى قال: أمسينا وأمسى الملك لله...» (صحيح مسلم 2723أ)، وفي الرواية نفسها: «وإذا أصبح قال ذلك أيضًا: أصبحنا وأصبح الملك لله» (2723ب).`,
            `فصيغة الصباح ليست دعاءً مستقلًا، بل هي الدعاء الثابت مع إبدال «المساء/الليلة» بـ«الصباح/اليوم». ولا تُستعمل هنا رواية أبي داود 5084 الضعيفة التي فيها «فتحه ونصره ونوره».`
        ]),
        P([
            `Пророк ﷺ просил в ней блага наступившего дня и блага после него, а также защиты от зла дня, от лени, дурной старости, наказания в огне и мучения могилы.`,
            `Мольба ставит весь день под власть Аллаха: она начинается с таухида и хвалы, признаёт, что владычество и мощь принадлежат Ему, и лишь затем переходит к просьбам. Это не приветствие утру, а вверение дня Аллаху.`
        ], [
            `In it the Prophet ﷺ asked for the good of the coming day and what follows it, and refuge from its evil, from laziness, the evil of old age, punishment in the Fire and the torment of the grave.`,
            `The dua places the whole day under Allah's dominion: it opens with tawhid and praise, acknowledges that sovereignty and power belong to Him, and only then turns to requests. It is not a greeting to the morning but an entrusting of the day to Allah.`
        ], [
            `سأل النبي ﷺ فيها خير اليوم وخير ما بعده، واستعاذ من شرّه وشرّ ما بعده، ومن الكسل وسوء الكبر وعذاب النار وعذاب القبر.`,
            `وهي تضع اليوم كلّه تحت ملك الله: تبدأ بالتوحيد والحمد، وتقرّ بأن الملك والحمد والقدرة له، ثم تنتقل إلى المسألة؛ فليست تحيةً للصباح بل إيداعًا لليوم عند الله.`
        ])
    );

    D['morning:2'] = E(
        P([
            `Абу Хурайра передал: «Посланник Аллаха ﷺ учил своих сподвижников, говоря: "Когда кто-то из вас вступит в утро, пусть скажет..."» — и привёл эту формулу; для вечера он привёл другую (Джами' ат-Тирмизи, 3391, хасан сахих).`,
            `В хадисе две разные концовки: утренняя оканчивается «ва иляйка-ль-масир» (к Тебе возвращение), вечерняя — «ва иляйка-н-нушур» (к Тебе воскрешение). Смешивать их нельзя: это отдельные слова для отдельного времени.`
        ], [
            `Abu Hurayrah reported: «The Messenger of Allah ﷺ used to teach his Companions, saying: "When one of you reaches the morning, let him say..."» — and gave this wording, with a different one for the evening (Jami' at-Tirmidhi 3391, hasan sahih).`,
            `The hadith has two distinct endings: the morning one ends «wa ilaykal-masir» (to You is the return), the evening one «wa ilaykan-nushur» (to You is the resurrection). They must not be mixed: each is prescribed for its own time.`
        ], [
            `عن أبي هريرة: «كان رسول الله ﷺ يعلّم أصحابه يقول: إذا أصبح أحدكم فليقل...» وذكر هذه الصيغة، وللمساء صيغة أخرى (جامع الترمذي 3391، حسن صحيح).`,
            `وللحديث خاتمتان مختلفتان: خاتمة الصباح «وإليك المصير»، وخاتمة المساء «وإليك النشور»؛ فلا يُخلط بينهما، فلكل وقت كلماته.`
        ]),
        P([
            `Мольба связывает утро и вечер, жизнь и смерть с именем Аллаха: «благодаря Тебе мы вступили в утро... благодаря Тебе живём и умираем».`,
            `Она каждое утро обновляет таваккуль (упование) и напоминает о возвращении к Аллаху. В тафсире Ибн Касира (сура 40 «Гафир», аят 65) сказано: «Он — Живой, нет божества, кроме Него; взывайте же к Нему, искренне посвящая Ему религию» — та же опора, что и в этой мольбе.`
        ], [
            `The dua binds morning and evening, life and death to the Name of Allah: «by You we enter the morning... by You we live and by You we die».`,
            `It renews tawakkul (reliance) each morning and reminds of the return to Allah. In his tafsir of Surah Ghafir (40:65) Ibn Kathir explains: «He is the Ever-Living; there is no deity except Him, so call upon Him, sincere in religion» — the same grounding as this supplication.`
        ], [
            `تربط الدعوة الصباح والمساء والحياة والموت باسم الله: «بك أصبحنا... وبك نحيا وبك نموت».`,
            `وهي تجدّد التوكل كل صباح وتذكّر بالمرجع إلى الله. ويقول ابن كثير في تفسير غافر (40: 65): «هو الحيّ لا إله إلا هو فادعوه مخلصين له الدين»، وهو المعنى نفسه الذي تقوم عليه هذه الدعوة.`
        ])
    );

    D['morning:3'] = E(
        P([
            `Шаддад ибн Аус передал, что Пророк ﷺ сказал: «Господин мольб о прощении (саййид аль-истигфар) — чтобы раб говорил...» — и произнёс эти слова (Сахих аль-Бухари, 6306). Хадис помещён в главу «О достоинстве истигфара» книги «Мольбы».`,
            `Пророк ﷺ не приурочил формулу к одному событию: он велел произносить её днём и ночью, с убеждённостью в сердце.`
        ], [
            `Shaddad ibn Aws reported that the Prophet ﷺ said: «The master of the prayers for forgiveness (sayyid al-istighfar) is that a servant says...» — and recited these words (Sahih al-Bukhari 6306). The hadith appears in the chapter «The excellence of istighfar» of the Book of Supplications.`,
            `The Prophet ﷺ did not tie the formula to a single incident: he instructed that it be said by day and by night, with conviction in the heart.`
        ], [
            `عن شدّاد بن أوس أن النبي ﷺ قال: «سيد الاستغفار أن يقول العبد...» وذكر هذه الكلمات (صحيح البخاري 6306)، والحديث في باب «أفضل الاستغفار» من كتاب الدعوات.`,
            `ولم يخصّها النبي ﷺ بحادثة بعينها، بل أمر بقولها ليلًا ونهارًا مع اليقين بالقلب.`
        ]),
        P([
            `Пророк ﷺ обещал: «Кто произнесёт её днём, будучи убеждённым в ней, и умрёт в тот день до вечера — он из обитателей Рая; и кто произнесёт её ночью, будучи убеждённым, и умрёт до утра — он из обитателей Рая» (аль-Бухари, 6306).`,
            `Ибн Касир в тафсире аятов 3:135–136 перечисляет условия покаяния: прекратить грех, сожалеть о нём, твёрдо решить не возвращаться и признать вину перед Аллахом. Все четыре заключены в этой мольбе: признание господства Аллаха, признание Его милости, признание собственного греха и просьба о прощении.`
        ], [
            `The Prophet ﷺ promised: «Whoever says it during the day with firm faith and dies that day before evening will be among the people of Paradise; and whoever says it at night with firm faith and dies before morning will be among the people of Paradise» (al-Bukhari 6306).`,
            `In his tafsir of 3:135–136 Ibn Kathir lists the conditions of repentance: abandoning the sin, regretting it, resolving never to return, and admitting one's fault before Allah. All four are contained in this dua: acknowledging Allah's lordship, acknowledging His blessing, confessing one's sin, and asking forgiveness.`
        ], [
            `وعد النبي ﷺ: «من قالها من النهار موقنًا بها فمات من يومه قبل أن يمسي فهو من أهل الجنّة، ومن قالها من الليل وهو موقن بها فمات قبل أن يصبح فهو من أهل الجنّة» (البخاري 6306).`,
            `ويعدّد ابن كثير في تفسير آل عمران (3: 135–136) شروط التوبة: الإقلاع عن الذنب، والندم، والعزم على عدم العود، والاعتراف بالخطأ بين يدي الله. وهذه كلّها مجتمعة في الدعاء: الإقرار بالربوبية، والاعتراف بالنعمة، والاعتراف بالذنب، ثم طلب المغفرة.`
        ])
    );

    D['morning:4'] = E(
        P([
            `Абу Бакр ас-Сиддик (да будет доволен им Аллах) обратился к Пророку ﷺ: «О Посланник Аллаха, повели мне что-нибудь, что я буду говорить по утрам и вечерам». Пророк ﷺ ответил: «Говори: "О Аллах, Знающий сокровенное и явное..."» (Джами' ат-Тирмизи, 3392, хасан сахих; также Абу Давуд).`,
            `В конце хадиса Пророк ﷺ добавил: «Говори это утром, вечером и когда ложишься спать» — то есть формула дана по прямой просьбе сподвижника и установлена на три времени суток.`
        ], [
            `Abu Bakr as-Siddiq (may Allah be pleased with him) said to the Prophet ﷺ: «O Messenger of Allah, command me with something I may say morning and evening». He replied: «Say: "O Allah, Knower of the unseen and the seen..."» (Jami' at-Tirmidhi 3392, hasan sahih; also Abu Dawud).`,
            `The Prophet ﷺ added at the end: «Say it when you reach morning, when you reach evening, and when you go to bed» — the formula was given in direct response to a Companion's request and prescribed for three times of day.`
        ], [
            `قال أبو بكر الصدّيق رضي الله عنه: «يا رسول الله، مرني بشيء أقوله إذا أصبحتُ وإذا أمسيتُ»، فقال ﷺ: «قل: اللهم عالم الغيب والشهادة...» (جامع الترمذي 3392، حسن صحيح؛ وأبو داود).`,
            `وزاد في آخر الحديث: «قله إذا أصبحتَ وإذا أمسيتَ وإذا أخذتَ مضجعك»؛ فالدعاء جاء جوابًا لسؤال صحابي وثُبّت لثلاثة أوقات.`
        ]),
        P([
            `Мольба защищает от зла собственной души, от зла шайтана и от придания им Аллаху сотоварищей (ширк) — об этом прямо сказано в её тексте.`,
            `Она начинается со свидетельства «Ашхаду ан ля иляха илля анта» — «Свидетельствую, что нет божества, кроме Тебя». Ибн Касир в тафсире 3:18 поясняет, что это свидетельство Аллаха, ангелов и обладателей знания есть утверждение таухида и справедливости; каждое утро верующий обновляет его своими устами.`
        ], [
            `The dua seek refuge from the evil of one's own soul, from the evil of Satan and from his shirk (associating partners with Allah) — all stated explicitly in its text.`,
            `It opens with the testimony «Ashhadu an la ilaha illa anta» — «I bear witness that there is no deity but You». In his tafsir of 3:18 Ibn Kathir explains that this testimony of Allah, the angels and those endowed with knowledge affirms tawhid and justice; the believer renews it on his tongue each morning.`
        ], [
            `تستعيذ الدعوة من شرّ النفس، ومن شرّ الشيطان وشركه، كما هو منصوص في لفظها.`,
            `وتبدأ بشهادة «أشهد أن لا إله إلا أنت»؛ ويبيّن ابن كثير في تفسير آل عمران (3: 18) أن شهادة الله والملائكة وأولي العلم هي إقرار بالتوحيد والقسط، فيجدّدها المؤمن بلسانه كل صباح.`
        ])
    );

    D['morning:5'] = E(
        P([
            `Абан ибн 'Усман передал со слов своего отца 'Усмана ибн 'Аффана (да будет доволен им Аллах): «Посланник Аллаха ﷺ сказал: "Нет раба, который говорил бы утром каждого дня и вечером каждой ночи: ... трижды — и чтобы что-либо повредило ему"» (Джами' ат-Тирмизи, 3388, хасан сахих).`,
            `Сам Абан был поражён частичным параличом. Когда один человек стал пристально на него смотреть, он сказал: «Что ты смотришь? Хадис именно таков, как я передал его тебе, но в тот день я не произнёс эти слова — и Аллах привёл в исполнение Своё предопределение».`
        ], [
            `Aban ibn 'Uthman narrated from his father 'Uthman ibn 'Affan (may Allah be pleased with him): «The Messenger of Allah ﷺ said: "There is no servant who says, in the morning of every day and the evening of every night: ... three times, and then anything harms him"» (Jami' at-Tirmidhi 3388, hasan sahih).`,
            `Aban himself was struck with a form of paralysis. When a man stared at him, he said: «What are you looking at? The hadith is exactly as I reported it to you, but I did not say it that day — and Allah carried out His decree».`
        ], [
            `روى أبان بن عثمان عن أبيه عثمان بن عفّان رضي الله عنه: قال رسول الله ﷺ: «ما من عبد يقول في صباح كل يوم ومساء كل ليلة: ... ثلاث مرّات فيضرّه شيء» (جامع الترمذي 3388، حسن صحيح).`,
            `وكان أبان قد أصابه طرفُ فالج، فجعل رجل ينظر إليه فقال: «ما تنظر؟ أما إنّ الحديث كما حدّثتك، ولكني لم أقلها يومئذٍ ليمضي الله عليّ قدره».`
        ]),
        P([
            `Пророк ﷺ обещал: «Ничего не повредит тому, кто произнесёт их трижды утром и вечером» (ат-Тирмизи, 3388). В хадисе названо и точное число — трижды, а не «сколько придётся».`,
            `Мольба завершается именами «ас-Сами'у-ль-'Алим» — Слышащий, Знающий. Ибн Касир в тафсире Аят аль-Курси (2:255) поясняет, что знание Аллаха объемлет явное и сокрытое; поэтому защита распространяется и на тот вред, о котором человек даже не знает.`
        ], [
            `The Prophet ﷺ promised: «Nothing will harm whoever says them three times in the morning and evening» (at-Tirmidhi 3388). The hadith specifies the exact count — three times, not «as often as one likes».`,
            `The dua ends with the Names «as-Sami' al-'Alim» — the Hearing, the Knowing. In his tafsir of Ayat al-Kursi (2:255) Ibn Kathir explains that Allah's knowledge encompasses the manifest and the hidden; the protection therefore covers harm the person is not even aware of.`
        ], [
            `وعد النبي ﷺ: «...ثلاث مرّات فلا يضرّه شيء» (الترمذي 3388)، وحدّد العدد بثلاث لا بما يتيسّر.`,
            `وتُختم باسمَي «السميع العليم»؛ ويبيّن ابن كثير في تفسير آية الكرسي (2: 255) أن علم الله يحيط بالظاهر والخفيّ، فتشمل الحماية ضررًا لا يعلمه العبد أصلًا.`
        ])
    );

    D['morning:6'] = E(
        P([
            `Саубан (да будет доволен им Аллах) передал: «Посланник Аллаха ﷺ сказал: "Кто скажет, когда наступит вечер: 'Я доволен Аллахом как Господом, Исламом как религией и Мухаммадом ﷺ как пророком' — на Аллахе лежит непременно даровать ему Своё довольство"» (Джами' ат-Тирмизи, 3389, хасан).`,
            `Сборники азкаров (в том числе «Хисн аль-Муслим») предписывают произносить её трижды утром и вечером; хадис приведён в главе «О мольбе утром и вечером».`
        ], [
            `Thawban (may Allah be pleased with him) reported that the Messenger of Allah ﷺ said: «Whoever says when evening comes: "I am pleased with Allah as Lord, with Islam as religion and with Muhammad ﷺ as prophet" — it is a duty upon Allah to please him» (Jami' at-Tirmidhi 3389, hasan).`,
            `The collections of adhkar (including Hisn al-Muslim) prescribe saying it three times morning and evening; the hadith appears in the chapter on morning and evening supplications.`
        ], [
            `عن ثوبان رضي الله عنه: قال رسول الله ﷺ: «من قال حين يمسي: رضيت بالله ربًا وبالإسلام دينًا وبمحمد نبيًا كان حقًا على الله أن يرضيه» (جامع الترمذي 3389، حسن).`,
            `وتأمر كتب الأذكار (ومنها «حصن المسلم») بقولها ثلاثًا صباحًا ومساءً، والحديث في باب «الدعاء إذا أصبح وإذا أمسى».`
        ]),
        P([
            `Пророк ﷺ обещал довольство Аллаха — награду, которую Коран ставит выше всего: «А довольство от Аллаха — величайшее» (9:72).`,
            `Ибн Касир в тафсире 9:72 поясняет: довольство Аллаха больше, чем райские сады и жилища, ибо оно — причина вечного блаженства. Три кратких слова каждое утро ставят эту цель выше мирских просьб.`
        ], [
            `The Prophet ﷺ promised Allah's pleasure — the reward the Quran ranks above everything else: «And pleasure from Allah is greater» (9:72).`,
            `In his tafsir of 9:72 Ibn Kathir explains that Allah's pleasure is greater than gardens and dwellings, for it is the cause of eternal bliss. Three short words each morning place this goal above worldly requests.`
        ], [
            `وعد النبي ﷺ برضوان الله، وهو ما جعله القرآن فوق كل شيء: «ورضوان من الله أكبر» (التوبة 9: 72).`,
            `ويقول ابن كثير في تفسيرها: رضوان الله أكبر من الجنّات والمساكن لأنه سبب النعيم الدائم؛ فثلاث كلمات كل صباح تضع هذا المقصد فوق المطالب الدنيوية.`
        ])
    );

    D['morning:7'] = E(
        P([
            `Передаёт 'Абдуллах ибн 'Умар: «Не оставлял Посланник Аллаха ﷺ этих мольб ни вечером, ни утром» (Сунан Абу Давуд, 5074, сахих). Хадис приведён в книге «Адаб», в главе «Что говорить, когда наступит утро».`,
            `То есть это не слова, сказанные по частному поводу, а постоянная сунна Пророка ﷺ; Ибн 'Умар специально отметил, что он никогда не пропускал их.`
        ], [
            `Narrated by 'Abdullah ibn 'Umar: «The Messenger of Allah ﷺ never failed to utter these supplications in the evening and in the morning» (Sunan Abi Dawud 5074, sahih). The hadith is in the Book of Adab, chapter «What to say when one reaches morning».`,
            `These are not words occasioned by a particular event but the Prophet's ﷺ constant sunnah; Ibn 'Umar expressly noted that he never omitted them.`
        ], [
            `عن عبد الله بن عمر: «لم يكن رسول الله ﷺ يدع هؤلاء الدعوات حين يمسي وحين يصبح» (سنن أبي داود 5074، صحيح)، والحديث في كتاب الأدب، باب «ما يقول إذا أصبح».`,
            `فليست كلماتٍ قيلت في حادثة بعينها، بل سنّة دائمة؛ ونصّ ابن عمر على أنه ﷺ كان لا يتركها.`
        ]),
        P([
            `В мольбе Пророк ﷺ просил сокрытия недостатков, успокоения страхов и хранения спереди, сзади, справа, слева и сверху, а также прибегал к величию Аллаха от внезапной гибели снизу (провала под землю — так пояснил передатчик Ваки').`,
            `«Аль-'афийа» в понимании учёных — сохранность религии, тела, семьи и имущества сразу; поэтому это одна из самых всеобъемлющих просьб о защите. Ибн Касир в тафсире 2:201 объясняет «хасанату» этого мира как раз как здоровье, дозволенный удел и праведную семью.`
        ], [
            `In the dua the Prophet ﷺ asked for his faults to be concealed, his fears calmed, and protection from before, behind, right, left and above — seeking refuge in Allah's greatness from being destroyed from below (being swallowed by the earth, as the narrator Waki' explained).`,
            `«Al-'afiyah» is understood by the scholars as the soundness of one's religion, body, family and wealth all at once, making this one of the most comprehensive pleas for protection. In his tafsir of 2:201 Ibn Kathir likewise explains the «good» of this world as health, lawful provision and a righteous family.`
        ], [
            `سأل النبي ﷺ فيها ستر العورة، وأمن الروعات، والحفظ من بين يديه ومن خلفه وعن يمينه وعن شماله ومن فوقه، واستعاذ بعظمة الله أن يُغتال من تحته (قال وكيع: يعني الخسف).`,
            `و«العافية» عند العلماء سلامة الدين والبدن والأهل والمال جميعًا، ولذلك هي من أجمع دعوات الحفظ. ويفسّر ابن كثير «الحسنة» في الدنيا (البقرة 2: 201) بالصحة والرزق الحلال والأسرة الصالحة.`
        ])
    );

    D['morning:8'] = E(
        P([
            `'Абдуллах ибн Хубайб рассказывал: «Вышли мы в дождливую, кромешно тёмную ночь искать Посланника Аллаха ﷺ, чтобы он совершил с нами намаз. Он трижды сказал: "Говори", а когда я спросил: "Что мне говорить?", ответил: "Говори: «Къуль хува-Ллаху ахад» и две защитные суры — трижды по утрам и вечерам; они избавят тебя от всякого зла"» (Сунан Абу Давуд, 5082, хасан).`,
            `Две защитные суры ниспосланы и после истории с колдовством: Лабид ибн аль-А'сам из бану Зурайк околдовал Пророка ﷺ, спрятав гребень с волосами в колодце Дарван; Джибриль указал на место, и с каждым прочитанным аятом развязывался узел (аль-Бухари, 5763; Муслим).`
        ], [
            `'Abdullah ibn Khubayb said: «We went out on a rainy, intensely dark night looking for the Messenger of Allah ﷺ to lead us in prayer. He said "Say" three times; when I asked "What shall I say?", he replied: "Say: «Qul huwallahu ahad» and the two refuge-seeking surahs, three times morning and evening — they will suffice you against everything"» (Sunan Abi Dawud 5082, hasan).`,
            `The two refuge-seeking surahs were also revealed in connection with the magic worked on the Prophet ﷺ: Labid ibn al-A'sam of Banu Zurayq bewitched him using a comb and hair hidden in the well of Dharwan; Jibril showed the place, and with each verse recited a knot was untied (al-Bukhari 5763; Muslim).`
        ], [
            `عن عبد الله بن خبيب: «خرجنا في ليلة مطر وظلمة شديدة نطلب رسول الله ﷺ ليصلّي لنا، فقال: قل، قل، قل، فقلت: ما أقول؟ قال: قل: «قل هو الله أحد» والمعوّذتين حين تمسي وحين تصبح ثلاث مرّات تكفيك من كل شيء» (سنن أبي داود 5082، حسن).`,
            `ونزلت المعوّذتان كذلك في حادثة السحر: سحر النبيَّ ﷺ لَبيد بن الأعصم من بني زريق بمشط ومشاطة في بئر ذروان، فدلّ جبريل على المكان، وكانت كلّ آية تُقرأ تنحلّ معها عقدة (البخاري 5763؛ مسلم).`
        ]),
        P([
            `Пророк ﷺ обещал: «Они избавят тебя от всякого зла» (Абу Давуд, 5082). В другом достоверном хадисе он сказал, что сура «Аль-Ихляс» равна трети Корана (аль-Бухари, 5015, от Абу Са'ида аль-Худри).`,
            `Ибн Касир в тафсире сур 113–114 разделяет две защиты: «Аль-Фаляк» — от внешнего зла (тьмы, колдовства, зависти завистника), «Ан-Нас» — от внутреннего, от наущения шайтана в груди людей. Вместе с «Аль-Ихляс», утверждающей таухид, они закрывают все три стороны зла.`
        ], [
            `The Prophet ﷺ promised: «They will suffice you against everything» (Abu Dawud 5082). In another authentic hadith he said Surah al-Ikhlas equals one third of the Quran (al-Bukhari 5015, from Abu Sa'id al-Khudri).`,
            `In his tafsir of surahs 113–114 Ibn Kathir distinguishes two protections: al-Falaq against external evil (darkness, magic, the envy of the envious), and an-Nas against the inner whispering of Satan in people's breasts. Together with al-Ikhlas, which affirms tawhid, they cover all three dimensions of harm.`
        ], [
            `وعد النبي ﷺ: «تكفيك من كل شيء» (أبو داود 5082)، وقال في حديث صحيح آخر: «قل هو الله أحد تعدل ثلث القرآن» (البخاري 5015، عن أبي سعيد الخدري).`,
            `ويفرّق ابن كثير في تفسير المعوّذتين بين حفظين: «الفلق» من الشرّ الخارجي (الليل إذا وقب، والسحر، والحسد)، و«الناس» من الوسوسة الداخلية في صدور الناس؛ ومع «الإخلاص» المقرّرة للتوحيد تغطي السور الثلاث جهات الشرّ كلّها.`
        ])
    );

    D['morning:9'] = E(
        P([
            `Абу Хурайра передал слова Пророка ﷺ: «Кто скажет "Субхана-Ллахи ва бихамдихи" сто раз за день, сотрутся его грехи, даже если они подобны пене морской» (Сахих Муслим, 2691).`,
            `Хадис приведён в главе «Достоинство тахлиля, тасбиха и мольбы»; вместе с ним Пророк ﷺ упомянул и стакратный тахлиль, показав, что короткие слова бывают тяжелее длинных дел.`
        ], [
            `Abu Hurayrah narrated the words of the Prophet ﷺ: «Whoever says "Subhanallahi wa bihamdihi" a hundred times in a day, his sins are erased even if they are like the foam of the sea» (Sahih Muslim 2691).`,
            `The hadith appears in the chapter «The virtue of tahlil, tasbih and supplication»; alongside it the Prophet ﷺ mentioned the hundredfold tahlil, showing that short words can outweigh lengthy deeds.`
        ], [
            `عن أبي هريرة عن النبي ﷺ: «من قال سبحان الله وبحمده في يوم مائة مرّة حُطّت خطاياه ولو كانت مثل زبد البحر» (صحيح مسلم 2691).`,
            `والحديث في باب «فضل التهليل والتسبيح والدعاء»، وقرن به النبي ﷺ التهليل مائة مرّة، لبيان أن الكلمات اليسيرة قد ترجح على الأعمال الطويلة.`
        ]),
        P([
            `Обещание Пророка ﷺ конкретно: прощаются грехи, сколь бы многочисленны они ни были (Муслим, 2691). Награда не привязана к месту или омовению — только к искреннему повторению в течение дня.`,
            `Ибн Касир в тафсире 7:205 («...и поминай Господа твоего в душе, со смирением и страхом, не громко, по утрам и перед закатом, и не будь из числа беспечных») поясняет: утреннее поминание удерживает сердце от беспечности, с которой начинается большинство грехов.`
        ], [
            `The Prophet's ﷺ promise is specific: sins are forgiven, however many (Muslim 2691). The reward is not tied to a place or ablution — only to sincere repetition through the day.`,
            `In his tafsir of 7:205 («...and remember your Lord within yourself, humbly and with fear, without loudness of speech, in the mornings and late afternoons; and do not be among the heedless») Ibn Kathir explains that morning remembrance holds the heart back from heedlessness, where most sins begin.`
        ], [
            `وعد النبي ﷺ محدّد: تُحطّ الخطايا مهما كثرت (مسلم 2691)، ولا يتقيّد الأجر بمكان ولا وضوء، بل بالتكرار الصادق في اليوم.`,
            `ويقول ابن كثير في تفسير الأعراف (7: 205: «واذكر ربك في نفسك تضرعًا وخيفةً... بالغدوّ والآصال ولا تكن من الغافلين») إن ذكر الصباح يحفظ القلب من الغفلة التي منها تبدأ أكثر الذنوب.`
        ])
    );

    D['morning:10'] = E(
        P([
            `Хадис Абу Хурайры: «Кто скажет "Нет божества, кроме Аллаха одного, без сотоварища; Ему власть, Ему хвала, и Он над всякой вещью мощен" сто раз за день...» (Сахих Муслим, 2691; также аль-Бухари).`,
            `Пророк ﷺ назвал срок — «в течение дня» (фи йаум), поэтому эта формула вошла в утренние азкары: её начинают утром, чтобы набрать сто повторений до вечера.`
        ], [
            `Hadith of Abu Hurayrah: «Whoever says "There is no god but Allah alone, without partner; His is the dominion, His is the praise, and He has power over all things" a hundred times in a day...» (Sahih Muslim 2691; also al-Bukhari).`,
            `The Prophet ﷺ specified the span — «in a day» (fi yawm) — which is why this formula entered the morning adhkar: one begins it in the morning so as to complete a hundred repetitions before evening.`
        ], [
            `حديث أبي هريرة: «من قال لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، في يوم مائة مرّة...» (صحيح مسلم 2691؛ والبخاري).`,
            `وحدّد النبي ﷺ المدّة بـ«في يوم»، ولذلك دخلت الصيغة في أذكار الصباح: يُبدأ بها صباحًا لتُتمّ مائة قبل المساء.`
        ]),
        P([
            `Пророк ﷺ перечислил четыре награды сразу: это приравнивается к освобождению десяти рабов, записывается сто добрых дел, стирается сто грехов и служит защитой от шайтана в тот день до вечера.`,
            `И добавил: «Никто не придёт с лучшим, чем он, кроме человека, который сделал больше» (Муслим, 2691). Ибн Касир в тафсире 37:35–36 объясняет смысл «ля иляха илля-Ллах»: это отрицание всякого иного божества и утверждение поклонения одному Аллаху — то есть защита здесь начинается с исправления убеждения.`
        ], [
            `The Prophet ﷺ listed four rewards at once: it equals freeing ten slaves, a hundred good deeds are recorded, a hundred sins are blotted out, and it is a safeguard against Satan that day until evening.`,
            `He added: «No one brings anything more excellent than this except one who does more» (Muslim 2691). In his tafsir of 37:35–36 Ibn Kathir explains the meaning of «la ilaha illallah»: denial of every other deity and affirmation of worship to Allah alone — the protection here begins with correcting one's creed.`
        ], [
            `عدّد النبي ﷺ أربعة أجور دفعةً واحدة: عدل عشر رقاب، ومائة حسنة، ومحْو مائة سيّئة، وحرز من الشيطان يومه حتى يمسي.`,
            `وقال: «لم يأتِ أحد بأفضل ممّا جاء به إلا أحد عمل أكثر من ذلك» (مسلم 2691). ويبيّن ابن كثير في تفسير الصافات (37: 35–36) أن معنى «لا إله إلا الله» نفي كل معبود سواه وإثبات العبادة له وحده؛ فالحفظ هنا يبدأ بتصحيح الاعتقاد.`
        ])
    );

    /* ---------- 2. ВЕЧЕРНИЕ АЗКАРЫ ---------- */
    D['evening:0'] = E(
        P([
            `Передаёт 'Абдуллах ибн Мас'уд: «Когда наступал вечер, Посланник Аллаха ﷺ говорил: "Амсайна ва амса-ль-мульку лиллях, ва-ль-хамду лиллях..."» — и далее вся мольба (Сахих Муслим, 2723а).`,
            `Это исходная, вечерняя форма хадиса. Утренняя версия приведена в 2723б как повторение «того же» с заменой слов; вечерняя — не подстановка, а тот текст, с которого передатчик начал свой рассказ.`
        ], [
            `Narrated by 'Abdullah ibn Mas'ud: «When evening came, the Messenger of Allah ﷺ would say: "Amsayna wa amsal-mulku lillah, wal-hamdu lillah..."» — followed by the entire supplication (Sahih Muslim 2723a).`,
            `This is the original, evening form of the hadith. The morning version in 2723b is reported as a repetition of «the same» with the words changed; the evening wording is not a substitution but the very text with which the narrator began.`
        ], [
            `عن عبد الله بن مسعود: «كان رسول الله ﷺ إذا أمسى قال: أمسينا وأمسى الملك لله، والحمد لله...» ثم ساق الدعاء كاملًا (صحيح مسلم 2723أ).`,
            `وهي الصيغة الأصلية في الحديث؛ أمّا صيغة الصباح فجاءت في الرواية 2723ب على أنها «مثل ذلك» مع تبديل الألفاظ، فصيغة المساء ليست مقلوبة عنها بل هي التي بدأ بها الراوي.`
        ]),
        P([
            `Пророк ﷺ просил блага наступившей ночи и блага после неё, защиты от её зла, от лени, дурной старости, огня и мучения могилы.`,
            `В мольбе речь идёт именно о ночи («хазихи-ль-ляйля»), а не о дне. Ибн Касир в тафсире 25:47 («Он — Тот, Кто сделал для вас ночь одеянием, а сон отдыхом») напоминает, что ночь дана как покров и покой; мольба вверяет этот покой Аллаху, а не предполагает его сам собой.`
        ], [
            `The Prophet ﷺ asked for the good of the coming night and what follows it, refuge from its evil, from laziness, the evil of old age, the Fire and the punishment of the grave.`,
            `The dua speaks specifically of the night («hadhihil-laylah»), not the day. In his tafsir of 25:47 («He it is Who made the night a covering for you and sleep a rest») Ibn Kathir notes that night is given as a garment and repose; this supplication entrusts that repose to Allah rather than assuming it.`
        ], [
            `سأل النبي ﷺ خير هذه الليلة وخير ما بعدها، واستعاذ من شرّها وشرّ ما بعدها، ومن الكسل وسوء الكبر وعذاب النار والقبر.`,
            `والخطاب فيها عن «هذه الليلة» لا عن اليوم. ويذكّر ابن كثير في تفسير الفرقان (25: 47: «هو الذي جعل لكم الليل لباسًا والنوم سباتًا») بأن الليل جُعل سترًا وراحة؛ والدعاء يُودع هذه الراحة عند الله لا يفترضها من نفسها.`
        ])
    );

    D['evening:1'] = E(
        P([
            `Абу Хурайра передал обе формулы в одном хадисе: утреннюю и вечернюю. О вечерней Пророк ﷺ сказал: «Когда он доживёт до вечера, пусть говорит: "О Аллах, благодаря Тебе мы вступили в вечер..."» (Джами' ат-Тирмизи, 3391).`,
            `Именно вечерняя концовка — «ва иляйка-н-нушур», воскрешение; утренняя — «ва иляйка-ль-масир», возвращение. ат-Тирмизи оценил хадис как хасан.`
        ], [
            `Abu Hurayrah narrated both formulas in one hadith, morning and evening. Of the evening one the Prophet ﷺ said: «When he reaches evening let him say: "O Allah, by You we enter the evening..."» (Jami' at-Tirmidhi 3391).`,
            `The evening ending is precisely «wa ilaykan-nushur» (resurrection); the morning one is «wa ilaykal-masir» (the return). At-Tirmidhi graded the hadith hasan.`
        ], [
            `روى أبو هريرة الصيغتين في حديث واحد، صباحًا ومساءً؛ قال ﷺ في صيغة المساء: «وإذا أمسى فليقل: اللهم بك أمسينا...» (جامع الترمذي 3391).`,
            `وخاتمة المساء هي «وإليك النشور»، أمّا خاتمة الصباح فـ«وإليك المصير»؛ وقال الترمذي: حديث حسن.`
        ]),
        P([
            `Мольба связывает вечер, утро, жизнь и смерть с волей Аллаха и завершает день напоминанием о воскрешении.`,
            `Ибн Касир в тафсире 30:50 («Посмотри же на следы милости Аллаха: как Он оживляет землю после её смерти! Поистине, Он оживит и мёртвых») поясняет: Тот, Кто оживляет землю, оживит и людей — поэтому слово «нушур» в вечерней мольбе — это не отвлечённый догмат, а упование на ту же силу, что возвращает жизнь каждое утро.`
        ], [
            `The dua links evening, morning, life and death to Allah's will and closes the day with the reminder of resurrection.`,
            `In his tafsir of 30:50 («Look then at the effects of Allah's mercy: how He gives life to the earth after its death! Indeed, He will surely give life to the dead») Ibn Kathir explains: the One who revives the earth will revive people too — so «nushur» in the evening supplication is not an abstract dogma but reliance on the same power that restores life each morning.`
        ], [
            `تربط الدعوة المساء والصباح والحياة والموت بمشيئة الله، وتختم اليوم بتذكير النشور.`,
            `ويقول ابن كثير في تفسير الروم (30: 50: «فانظر إلى آثار رحمت الله كيف يحيي الأرض بعد موتها إنّ ذلك لمحيي الموتى»): الذي يحيي الأرض يحيي العباد؛ فلفظ «النشور» في دعاء المساء ليس عقيدة مجرّدة، بل توكّل على القدرة نفسها التي تعيد الحياة كل صباح.`
        ])
    );

    D['evening:2'] = E(
        P([
            `Хауля бинт Хаким ас-Суламиййа слышала, как Посланник Аллаха ﷺ сказал: «Кто остановится в каком-либо месте и затем скажет: "Прибегаю к совершенным словам Аллаха от зла того, что Он сотворил", — ничто не повредит ему, пока он не отправится из этого места» (Сахих Муслим, 2708).`,
            `Хадис приведён в главе «О прибегании от дурного предопределения и несчастья». Сборники азкаров предписывают читать формулу трижды вечером, а буквальный смысл хадиса — также при каждой остановке в пути.`
        ], [
            `Khawla bint Hakim as-Sulamiyyah heard the Messenger of Allah ﷺ say: «Whoever stops at a place and then says: "I seek refuge in the perfect words of Allah from the evil of what He has created" — nothing will harm him until he departs from that place» (Sahih Muslim 2708).`,
            `The hadith is in the chapter «Seeking refuge from an evil end and misery». The adhkar collections prescribe saying it three times in the evening, while the literal sense of the hadith also covers every stop on a journey.`
        ], [
            `سمعت خولة بنت حكيم السلمية رسول الله ﷺ يقول: «من نزل منزلًا ثم قال: أعوذ بكلمات الله التامّات من شرّ ما خلق، لم يضرّه شيء حتى يرتحل من منزله ذلك» (صحيح مسلم 2708).`,
            `والحديث في باب «التعوّذ من سوء القضاء ودرك الشقاء»؛ وتأمر كتب الأذكار بقولها ثلاثًا في المساء، ولفظ الحديث يشمل كل نزول في السفر.`
        ]),
        P([
            `Пророк ﷺ обещал защиту на всё время пребывания в этом месте — до самого отъезда (Муслим, 2708).`,
            `Ибн Касир, толкуя «слова Аллаха» в тафсире 37:171–173 («Наше слово уже предшествовало рабам Нашим посланным... и поистине, Наше воинство непременно победит»), поясняет, что слово и обещание Аллаха непременно превозмогают; прибегание к ним — опора на Творца, а не на тварь.`
        ], [
            `The Prophet ﷺ promised protection for the whole stay in that place, until departure (Muslim 2708).`,
            `Explaining «the words of Allah» in his tafsir of 37:171–173 («Our word has already preceded for Our servants, the messengers... and indeed Our host will surely be victorious»), Ibn Kathir notes that Allah's word and promise inevitably prevail; seeking refuge in them is reliance on the Creator, not on creation.`
        ], [
            `وعد النبي ﷺ بالحفظ طوال الإقامة في ذلك المنزل حتى الارتحال منه (مسلم 2708).`,
            `ويبيّن ابن كثير معنى «كلمات الله» في تفسير الصافات (37: 171–173: «ولقد سبقت كلمتنا لعبادنا المرسلين... وإنّ جندنا لهم الغالبون») أن كلمة الله ووعده لا تُغلب؛ فالاستعاذة بها تعلّق بالخالق لا بالمخلوق.`
        ])
    );

    D['evening:3'] = E(
        P([
            `Абу Хурайра рассказывал: Пророк ﷺ поручил ему стеречь закят Рамадана. Ночью пришёл человек и стал брать еду; Абу Хурайра схватил его, и тот попросил: «Не веди меня к Посланнику Аллаха — я научу тебя словам, которыми Аллах даст тебе пользу: когда ляжешь спать, прочитай Аят аль-Курси — с тобой будет хранитель от Аллаха, и шайтан не приблизится к тебе до утра» (аль-Бухари, 5010).`,
            `Утром Пророк ﷺ выслушал рассказ и сказал: «Он сказал тебе правду, хотя он лжец; знаешь, кто говорил с тобой эти три ночи? То был шайтан». Так достоверность обещания подтвердил сам Пророк ﷺ, несмотря на источник совета.`
        ], [
            `Abu Hurayrah said: the Prophet ﷺ put him in charge of the Ramadan zakat. A man came at night and began taking the food; Abu Hurayrah seized him, and the man pleaded: «Do not take me to the Messenger of Allah — I will teach you words by which Allah will benefit you: when you go to bed, recite Ayat al-Kursi, for then a guardian from Allah will remain with you and no Satan will come near you until morning» (al-Bukhari 5010).`,
            `In the morning the Prophet ﷺ heard the story and said: «He told you the truth, though he is a liar; do you know who spoke to you these three nights? It was a Satan». Thus the Prophet ﷺ himself confirmed the promise, despite its source.`
        ], [
            `وكّل النبي ﷺ أبا هريرة بحفظ زكاة رمضان، فأتاه آتٍ يجثو من الطعام فأخذه، فقال: «لا ترفعني إلى رسول الله وأخبرك بكلمات ينفعك الله بها: إذا أويت إلى فراشك فاقرأ آية الكرسي، لن يزال معك من الله حافظ ولا يقربك شيطان حتى تُصبح» (البخاري 5010).`,
            `فلمّا أصبح قصّ الخبر على النبي ﷺ فقال: «صدقك وهو كذوب؛ أتدري من كلّمك هذه الليالي الثلاث؟ ذاك شيطان». فأقرّ النبي ﷺ الوعد مع كون المخبر شيطانًا.`
        ]),
        P([
            `Обещание, подтверждённое Пророком ﷺ: хранитель от Аллаха и удаление шайтана до самого утра (аль-Бухари, 5010).`,
            `Ибн Касир в тафсире 2:255 поясняет, почему именно этот аят: в нём — величайшее имя Аллаха, полное утверждение Его единственности, жизни, знания и власти над небесами и землёй. Поэтому аят читают перед сном, утром и вечером как крепчайший щит.`
        ], [
            `The promise confirmed by the Prophet ﷺ: a guardian from Allah and Satan kept away until morning (al-Bukhari 5010).`,
            `In his tafsir of 2:255 Ibn Kathir explains why this verse: it contains Allah's greatest name and the complete affirmation of His oneness, life, knowledge and dominion over the heavens and the earth. That is why it is recited before sleep, in the morning and in the evening as the strongest shield.`
        ], [
            `الوعد الذي أقرّه النبي ﷺ: حافظ من الله، ولا يقربه شيطان حتى الصباح (البخاري 5010).`,
            `ويعلّل ابن كثير في تفسير البقرة (2: 255) خصوصية الآية: فيها اسم الله الأعظم، وتمام التوحيد، وإثبات الحياة والعلم والملك للسماوات والأرض؛ ولذلك تُقرأ عند النوم وصباحًا ومساءً كأوثق حصن.`
        ])
    );

    D['evening:4'] = E(
        P([
            `'Аиша (да будет доволен ею Аллах) передала историю колдовства, причинённого Пророку ﷺ Лабидом ибн аль-А'самом: колдовство было спрятано в колодце Дарван, и Пророк ﷺ велел засыпать его после того, как Аллах исцелил его (аль-Бухари, 5763). В сборниках хадисов две защитные суры связаны именно с этим событием.`,
            `Что до трёхкратного чтения, то 'Абдуллах ибн Хубайб передал повеление Пророка ﷺ читать «Къуль хува-Ллаху ахад» и аль-Му'аввизатайн трижды утром и вечером (Абу Давуд, 5082); перед сном Пророк ﷺ читал их, подув на ладони и проведя ими по телу.`
        ], [
            `'Aishah (may Allah be pleased with her) narrated the magic worked against the Prophet ﷺ by Labid ibn al-A'sam: it was hidden in the well of Dharwan, and after Allah cured him the Prophet ﷺ ordered the well filled in (al-Bukhari 5763). The two refuge-seeking surahs are connected in the hadith collections with this very event.`,
            `As for the threefold recitation, 'Abdullah ibn Khubayb transmitted the Prophet's ﷺ command to recite «Qul huwallahu ahad» and al-Mu'awwidhatayn three times morning and evening (Abu Dawud 5082); before sleep the Prophet ﷺ would recite them, blow into his palms and wipe them over his body.`
        ], [
            `روت عائشة رضي الله عنها خبر سحر لبيد بن الأعصم للنبي ﷺ، وكان في بئر ذروان، فأمر ﷺ بدفنها بعد أن عافاه الله (البخاري 5763)، وبها ارتبط نزول المعوّذتين في كتب الحديث.`,
            `أمّا التكرار ثلاثًا فرواه عبد الله بن خبيب عن النبي ﷺ: «قل هو الله أحد والمعوّذتين حين تمسي وحين تصبح ثلاث مرّات» (أبو داود 5082)؛ وكان ﷺ يقرأهما عند النوم وينفث في كفّيه ثم يمسح بهما جسده.`
        ]),
        P([
            `Пророк ﷺ сказал: «Они избавят тебя от всякого зла» (Абу Давуд, 5082); о суре «Аль-Ихляс» он сообщил, что она равна трети Корана (аль-Бухари, 5015).`,
            `Ибн Касир в тафсире 113:5 отдельно выделяет «зло завистника, когда он завидует»: дурной глаз реален, и защита от него — в словах Аллаха, а не в оберегах. «Ан-Нас» закрывает вторую сторону — наущения шайтана, которые приходят уже внутри груди человека.`
        ], [
            `The Prophet ﷺ said: «They will suffice you against everything» (Abu Dawud 5082), and of Surah al-Ikhlas he said it equals one third of the Quran (al-Bukhari 5015).`,
            `In his tafsir of 113:5 Ibn Kathir singles out «the evil of the envier when he envies»: the evil eye is real, and protection from it lies in the words of Allah, not in amulets. An-Nas covers the other side — the whispering of Satan that comes from within a person's own breast.`
        ], [
            `قال النبي ﷺ: «تكفيك من كل شيء» (أبو داود 5082)، وقال في «الإخلاص» إنها تعدل ثلث القرآن (البخاري 5015).`,
            `ويخصّ ابن كثير في تفسير الفلق (113: 5) «شرّ حاسد إذا حسد»: العين حقّ، والوقاية منها بكلمات الله لا بالتمائم؛ وتسدّ «الناس» الجهة الأخرى، وهي الوسوسة التي تأتي من داخل الصدر.`
        ])
    );

    D['evening:5'] = E(
        P([
            `В хадисе 'Усмана ибн 'Аффана (ат-Тирмизи, 3388) прямо названы оба времени: «...в утро каждого дня и вечер каждой ночи, трижды». Вечерняя половина повеления относится именно к ночи.`,
            `Передатчик Абан ибн 'Усман, поражённый параличом, подтверждал точность хадиса и сожалел, что в тот день не произнёс его, — так в самом тексте закреплено и число повторений, и важность не пропускать зикр.`
        ], [
            `In the hadith of 'Uthman ibn 'Affan (at-Tirmidhi 3388) both times are named explicitly: «...in the morning of every day and the evening of every night, three times». The evening half of the instruction pertains specifically to the night.`,
            `Its narrator Aban ibn 'Uthman, struck by paralysis, affirmed the hadith's accuracy and regretted not having said it that day — the text itself thus fixes both the number of repetitions and the importance of not omitting the dhikr.`
        ], [
            `نصّ حديث عثمان بن عفّان (الترمذي 3388) على الوقتين معًا: «في صباح كل يوم ومساء كل ليلة ثلاث مرّات»؛ فشطر المساء يتعلّق بالليل خاصةً.`,
            `وكان راويه أبان بن عثمان قد أصابه الفالج، فأكّد صحة الحديث وتأسّف على تركه يومئذٍ، فثبت في نفس الخبر عدد المرّات وفضل عدم إهمال الذكر.`
        ]),
        P([
            `Пророк ﷺ обещал: трижды вечером — и ничто не повредит в эту ночь (ат-Тирмизи, 3388).`,
            `Мольба завершается именами «Слышащий, Знающий». Ибн Касир в тафсире 2:255 поясняет, что Аллах знает и то, что было до творений, и то, что будет после них; поэтому вечерняя защита покрывает и скрытое от человека зло, которого он не видит и не слышит.`
        ], [
            `The Prophet ﷺ promised: three times in the evening — and nothing will harm that night (at-Tirmidhi 3388).`,
            `The dua closes with the Names «the Hearing, the Knowing». In his tafsir of 2:255 Ibn Kathir explains that Allah knows what was before creation and what comes after it; the evening protection therefore covers hidden evil that a person neither sees nor hears.`
        ], [
            `وعد النبي ﷺ: ثلاث مرّات في المساء فلا يضرّه شيء في ليلته (الترمذي 3388).`,
            `وتُختم باسمَي «السميع العليم»؛ ويبيّن ابن كثير في تفسير آية الكرسي (2: 255) أن الله يعلم ما بين أيدي الخلق وما خلفهم، فيشمل حفظ المساء شرًّا خفيًّا لا يراه العبد ولا يسمعه.`
        ])
    );

    D['evening:6'] = E(
        P([
            `Хадис Шаддада ибн Ауса (аль-Бухари, 6306) называет эту мольбу «господином истигфара» и отдельно оговаривает ночное произнесение: «Кто скажет её ночью, будучи убеждённым в ней, и умрёт до утра — он из обитателей Рая».`,
            `Так как сон — время, когда человек не владеет своими делами, сподвижники и сборники азкаров включали её в вечерний и предсонный зикр.`
        ], [
            `The hadith of Shaddad ibn Aws (al-Bukhari 6306) calls this dua «the master of istighfar» and specifically mentions the night: «Whoever says it at night with firm faith and dies before morning will be among the people of Paradise».`,
            `Since sleep is a time when a person has no control over his affairs, the Companions and the adhkar collections included it among the evening and pre-sleep remembrances.`
        ], [
            `يسمّي حديث شدّاد بن أوس (البخاري 6306) هذا الدعاء «سيد الاستغفار»، ويخصّ الليل بالذكر: «ومن قالها من الليل وهو موقن بها فمات قبل أن يصبح فهو من أهل الجنّة».`,
            `ولأن النوم وقتٌ لا يملك فيه العبد أمره، أدخله الصحابة وكتب الأذكار في أذكار المساء وعند المضجع.`
        ]),
        P([
            `Пророк ﷺ обещал Рай тому, кто произнесёт её ночью с убеждённостью и не доживёт до утра (аль-Бухари, 6306) — высшая из наград, названная в этом хадисе.`,
            `Ибн Касир в тафсире 51:17–18 («Они спали ночью лишь мало, и на рассвете они просили прощения») видит в соединении ночного поклонения и предрассветного истигфара черту богобоязненных; эта мольба завершает день тем же покаянием, с которым они встречали утро.`
        ], [
            `The Prophet ﷺ promised Paradise to whoever says it at night with conviction and does not live until morning (al-Bukhari 6306) — the highest reward named in this hadith.`,
            `In his tafsir of 51:17–18 («They used to sleep but little of the night, and at dawn they would seek forgiveness») Ibn Kathir sees in the joining of night worship and pre-dawn istighfar a mark of the God-fearing; this dua closes the day with the same repentance with which they met the morning.`
        ], [
            `وعد النبي ﷺ بالجنّة لمن قالها ليلًا موقنًا فمات قبل الصباح (البخاري 6306)، وهو أعلى ما ذُكر في هذا الحديث من الأجر.`,
            `ويرى ابن كثير في تفسير الذاريات (51: 17–18: «كانوا قليلًا من الليل ما يهجعون وبالأسحار هم يستغفرون») أن الجمع بين قيام الليل والاستغفار عند السحر من صفات المتّقين؛ وهذا الدعاء يختم اليوم بالتوبة نفسها التي استقبلوا بها الصباح.`
        ])
    );

    D['evening:7'] = E(
        P([
            `Ибн 'Умар передал: «Не оставлял Посланник Аллаха ﷺ этих мольб, когда наступал вечер и когда наступало утро» — «хин йумси ва хин йусбих» (Сунан Абу Давуд, 5074, сахих).`,
            `Хадис приведён в одноимённой главе «Что говорить, когда наступит утро»; слова передатчика прямо указывают на оба времени, так что вечерняя формула — не наше добавление, а сунна Пророка ﷺ.`
        ], [
            `Ibn 'Umar reported: «The Messenger of Allah ﷺ never omitted these supplications when evening came and when morning came» — «hina yumsii wa hina yusbih» (Sunan Abi Dawud 5074, sahih).`,
            `The hadith is in the chapter «What to say when one reaches morning»; the narrator's words explicitly name both times, so the evening formula is not our addition but the Prophet's ﷺ sunnah.`
        ], [
            `عن ابن عمر: «لم يكن رسول الله ﷺ يدع هؤلاء الدعوات حين يمسي وحين يصبح» (سنن أبي داود 5074، صحيح).`,
            `والحديث في باب «ما يقول إذا أصبح»، ولفظ الراوي ينصّ على الوقتين معًا؛ فصيغة المساء ليست من زيادتنا بل هي سنّته ﷺ.`
        ]),
        P([
            `Пророк ﷺ просил в ней хранения спереди, сзади, справа, слева и сверху и прибегал к величию Аллаха от внезапной гибели снизу; также просил сокрытия недостатков и избавления от страхов.`,
            `Ибн Касир, толкуя 13:11 («У него [у человека] есть ангелы-хранители спереди и позади, которые оберегают его по повелению Аллаха»), поясняет: хранение совершают ангелы по приказу Аллаха, а не сами по себе. Мольба просит этого хранения на всю ночь именно у Того, Кто его повелевает.`
        ], [
            `In it the Prophet ﷺ asked protection from before, behind, right, left and above, sought refuge in Allah's greatness from being destroyed from below, and asked for his faults to be concealed and his fears calmed.`,
            `Explaining 13:11 («For him are guardian angels before and behind, who protect him by Allah's command»), Ibn Kathir notes that protection is carried out by angels at Allah's command, not of themselves. This dua asks for that protection through the night from the One who commands it.`
        ], [
            `سأل النبي ﷺ فيها الحفظ من بين يديه ومن خلفه وعن يمينه وعن شماله ومن فوقه، واستعاذ بعظمته أن يُغتال من تحته، وسأل ستر العورة وأمن الروعات.`,
            `ويبيّن ابن كثير في تفسير الرعد (13: 11: «له معقّبات من بين يديه ومن خلفه يحفظونه من أمر الله») أن الحفظ بالملائكة بأمر الله لا من عند أنفسهم؛ والدعاء يطلب هذا الحفظ طوال الليل ممّن يأمر به.`
        ])
    );

    /* ---------- 3. ДУА ПОСЛЕ ОБЯЗАТЕЛЬНЫХ МОЛИТВ ---------- */
    D['afterPrayer:0'] = E(
        P([
            `Саубан (да будет доволен им Аллах) передал: «Когда Посланник Аллаха ﷺ заканчивал молитву, он трижды просил прощения и говорил: "О Аллах, Ты — Мир, и от Тебя мир; благословен Ты, Обладатель величия и почёта"» (Сахих Муслим, 591).`,
            `В том же хадисе аль-Валид ибн Муслим спросил аль-Ауза'и: «А как именно просить прощения?» Тот ответил: «Говори: "Астагфиру-Ллах, Астагфиру-Ллах"». Так в одном предании закреплены и трёхкратный истигфар, и следующая за ним формула.`
        ], [
            `Thawban (may Allah be pleased with him) reported: «When the Messenger of Allah ﷺ finished his prayer, he sought forgiveness three times and said: "O Allah, You are Peace and from You comes peace; Blessed are You, Owner of Glory and Honour"» (Sahih Muslim 591).`,
            `In the same hadith al-Walid ibn Muslim asked al-Awza'i: «And how is forgiveness sought?» He replied: «Say: "Astaghfirullah, Astaghfirullah"». One report thus fixes both the threefold istighfar and the formula that follows it.`
        ], [
            `عن ثوبان رضي الله عنه: «كان رسول الله ﷺ إذا انصرف من صلاته استغفر ثلاثًا وقال: اللهم أنت السلام ومنك السلام، تباركت ذا الجلال والإكرام» (صحيح مسلم 591).`,
            `وفي الحديث نفسه سأل الوليد بن مسلم الأوزاعي: «كيف الاستغفار؟» قال: «تقول: أستغفر الله، أستغفر الله»؛ فثبت في خبر واحد الاستغفار ثلاثًا والصيغة التي بعده.`
        ]),
        P([
            `Хадис устанавливает порядок сразу после таслима: сначала трёхкратное «Астагфиру-Ллах», затем «Аллахумма анта-с-Салям…». Отдельной мирской награды здесь не названо — это сунна завершения намаза, которой Пророк ﷺ придерживался постоянно.`,
            `Имя «ас-Салям» Ибн Касир толкует в тафсире 59:23 («Он — Аллах, нет божества, кроме Него, Владыка, Святой, Мир...»): Аллах свободен от всякого недостатка, и от Него исходит мир и безопасность для творений. Произнося эти слова после молитвы, верующий просит у Него же мира в делах, которые последуют за намазом.`
        ], [
            `The hadith establishes the order immediately after the taslim: first the threefold «Astaghfirullah», then «Allahumma antas-Salam...». No separate worldly reward is named — it is the sunnah of concluding the prayer which the Prophet ﷺ kept consistently.`,
            `Ibn Kathir explains the Name «as-Salam» in his tafsir of 59:23 («He is Allah, besides whom there is no deity, the King, the Holy, the Peace...»): Allah is free of every defect, and from Him comes peace and safety for creation. Saying it after prayer, the believer asks Him for peace in the affairs that follow.`
        ], [
            `يثبت الحديث الترتيب عقب التسليم مباشرة: «أستغفر الله» ثلاثًا ثم «اللهم أنت السلام...»، ولم يذكر له أجرًا دنيويًا بعينه، بل هو سنّة ختم الصلاة كان النبي ﷺ يداوم عليها.`,
            `ويفسّر ابن كثير اسم «السلام» في تفسير الحشر (59: 23: «هو الله الذي لا إله إلا هو الملك القدّوس السلام...»): الله منزّه عن كل نقص، ومنه السلام والأمن للخلق؛ فالمصلّي يسأله السلام فيما يلي صلاته من أعمال.`
        ])
    );

    D['afterPrayer:1'] = E(
        P([
            `Абу Хурайра передал, что Посланник Аллаха ﷺ сказал: «Кто после каждой молитвы тридцать три раза прославит Аллаха, тридцать три раза воздаст Ему хвалу и тридцать три раза возвеличит Его — всего девяносто девять, — а сотню завершит словами "Нет божества, кроме Аллаха одного..."» (Сахих Муслим, 597а).`,
            `Хадис приведён в главе «Желательность поминания после молитвы и разъяснение того, как его совершать»; числа 33 + 33 + 33 + 1 даны самим Пророком ﷺ, а не выведены позже.`
        ], [
            `Abu Hurayrah reported that the Messenger of Allah ﷺ said: «Whoever extols Allah thirty-three times after every prayer, praises Him thirty-three times and declares His greatness thirty-three times — ninety-nine in all — and completes the hundred with "There is no god but Allah alone..."» (Sahih Muslim 597a).`,
            `The hadith appears in the chapter «The recommendation of remembrance after prayer and how it is done»; the counts 33 + 33 + 33 + 1 were given by the Prophet ﷺ himself, not derived later.`
        ], [
            `عن أبي هريرة أن رسول الله ﷺ قال: «من سبّح الله في دُبر كل صلاة ثلاثًا وثلاثين، وحمد الله ثلاثًا وثلاثين، وكبّر الله ثلاثًا وثلاثين فتلك تسعة وتسعون، وقال تمام المائة: لا إله إلا الله وحده لا شريك له...» (صحيح مسلم 597أ).`,
            `والحديث في باب «استحباب الذكر بعد الصلاة وبيان صفته»، والأعداد 33 + 33 + 33 + 1 من نصّ النبي ﷺ لا من اجتهاد متأخّر.`
        ]),
        P([
            `Пророк ﷺ обещал: «Простятся его грехи, даже если они подобны пене морской» (Муслим, 597а).`,
            `Ибн Касир в тафсире 33:41–42 («О те, которые уверовали! Поминайте Аллаха многократно и прославляйте Его утром и перед закатом») поясняет, что частое поминание после обязательных дел — одно из лучших приближений к Аллаху; здесь оно следует сразу за фардом и потому особенно желанно.`
        ], [
            `The Prophet ﷺ promised: «His sins will be forgiven even if they are like the foam of the sea» (Muslim 597a).`,
            `In his tafsir of 33:41–42 («O you who believe! Remember Allah with much remembrance and glorify Him morning and late afternoon») Ibn Kathir explains that frequent remembrance after the obligatory acts is among the best means of drawing near to Allah; here it follows the fard immediately and is therefore especially recommended.`
        ], [
            `وعد النبي ﷺ: «غُفرت خطاياه وإن كانت مثل زبد البحر» (مسلم 597أ).`,
            `ويقول ابن كثير في تفسير الأحزاب (33: 41–42: «يا أيها الذين آمنوا اذكروا الله ذكرًا كثيرًا وسبّحوه بكرةً وأصيلًا») إن كثرة الذكر عقب الفرائض من أحبّ القربات إلى الله؛ وهو هنا يلي الفرض مباشرةً فيتأكّد استحبابه.`
        ])
    );

    D['afterPrayer:2'] = E(
        P([
            `Ибн аз-Зубайр передавал, что Посланник Аллаха ﷺ произносил этот тахлиль после каждой обязательной молитвы (Сахих Муслим, 593).`,
            `Ибн 'Аббас добавлял: «Мы узнавали о завершении молитвы Пророка ﷺ по этим словам» — зикр после намаза произносился громко, и по нему определяли конец молитвы (аль-Бухари).`
        ], [
            `Ibn az-Zubayr reported that the Messenger of Allah ﷺ used to say this tahlil after every obligatory prayer (Sahih Muslim 593).`,
            `Ibn 'Abbas added: «We used to know that the Prophet's ﷺ prayer had ended by these words» — the dhikr after prayer was said aloud, and by it the end of the prayer was recognised (al-Bukhari).`
        ], [
            `روى ابن الزبير أن رسول الله ﷺ كان يهلّ بهذا التهليل دُبر كل صلاة مكتوبة (صحيح مسلم 593).`,
            `وزاد ابن عباس: «كنّا نعرف انقضاء صلاة النبي ﷺ بهذا الذكر»، فكان الذكر بعد الصلاة يُجهر به ويُعلم به انتهاؤها (البخاري).`
        ]),
        P([
            `Отдельной награды в этом хадисе не названо: польза самого действия — сразу после поклонения утвердить таухид устами, прежде чем вернуться к мирским делам.`,
            `Ибн Касир в тафсире 37:35–36 («Поистине, когда им говорили: "Нет божества, кроме Аллаха", они превозносились [гордо отрицали]») объясняет смысл формулы: отрицание всякого иного божества и утверждение поклонения одному Аллаху. Произнесённое после намаза, это свидетельство как бы «запечатывает» совершенное поклонение.`
        ], [
            `No separate reward is named in this hadith: the benefit of the act itself is to affirm tawhid on the tongue immediately after worship, before returning to worldly affairs.`,
            `In his tafsir of 37:35–36 («Indeed, when it was said to them: "There is no god but Allah", they were arrogant») Ibn Kathir explains the meaning of the formula: denial of every other deity and affirmation of worship to Allah alone. Said after prayer, this testimony «seals» the worship just performed.`
        ], [
            `لم يرد في الحديث أجر مخصوص، وفائدة الفعل نفسه أن يقرّ المصلي التوحيد بلسانه عقب العبادة قبل الرجوع إلى شؤون الدنيا.`,
            `ويبيّن ابن كثير معنى الصيغة في تفسير الصافات (37: 35–36: «إنهم كانوا إذا قيل لهم لا إله إلا الله يستكبرون») أنها نفي كل معبود سواه وإثبات العبادة له وحده؛ فإذا قيلت بعد الصلاة ختمت العبادة التي أُدّيت.`
        ])
    );

    D['afterPrayer:3'] = E(
        P([
            `Аль-Мугира ибн Шу'ба передавал, что Посланник Аллаха ﷺ говорил эти слова после каждой обязательной молитвы (Сахих аль-Бухари; Сахих Муслим).`,
            `В версии Муслима хадис помещён в главу о поминании после намаза; формула произносилась сразу после таслима, до ухода с места молитвы.`
        ], [
            `Al-Mughirah ibn Shu'bah reported that the Messenger of Allah ﷺ said these words after every obligatory prayer (Sahih al-Bukhari; Sahih Muslim).`,
            `In Muslim's version the hadith is placed in the chapter on remembrance after prayer; the formula was said immediately after the taslim, before leaving the place of prayer.`
        ], [
            `روى المغيرة بن شعبة أن رسول الله ﷺ كان يقول هذه الكلمات دُبر كل صلاة مكتوبة (صحيح البخاري؛ صحيح مسلم).`,
            `ورواية مسلم في باب الذكر بعد الصلاة، وكانت الصيغة تُقال عقب التسليم قبل الانصراف من مصلّاه.`
        ]),
        P([
            `Отдельной награды хадис не называет; его польза — в исправлении убеждения: никто не может удержать то, что дал Аллах, и дать то, что Он удержал, а «богатство и знатность» не помогут перед Ним.`,
            `Ибн Касир в тафсире 35:2 («Что Аллах откроет людям из милости — никто не удержит; а что Он удержит — никто не ниспошлёт после Него») поясняет, что это всеобщий закон удела и помощи. Мольба Пророка ﷺ повторяет смысл аята в виде просьбы — сразу после намаза, когда сердце особенно расположено к таваккулю.`
        ], [
            `The hadith names no separate reward; its benefit is correcting one's creed: none can withhold what Allah has given or give what He has withheld, and «wealth or rank» will not avail before Him.`,
            `In his tafsir of 35:2 («Whatever mercy Allah opens to mankind, none can withhold; and whatever He withholds, none can release thereafter») Ibn Kathir explains this as a universal law of provision and aid. The Prophet's ﷺ supplication restates the verse as a plea — right after prayer, when the heart is most disposed to tawakkul.`
        ], [
            `لم يذكر الحديث أجرًا بعينه، وفائدته تصحيح الاعتقاد: لا مانع لما أعطى الله ولا معطي لما منع، ولا ينفع صاحب الجاه جاهُه عنده.`,
            `ويقول ابن كثير في تفسير فاطر (35: 2: «ما يفتح الله للناس من رحمة فلا ممسك لها وما يمسك فلا مرسل له من بعده») إن هذا قانون عامّ في الرزق والنصر؛ ودعاء النبي ﷺ يردّد معنى الآية بصيغة المسألة عقب الصلاة حين يكون القلب أقبل للتوكّل.`
        ])
    );

    D['afterPrayer:4'] = E(
        P([
            `Пророк ﷺ взял Му'аза ибн Джабаля за руку, сказал: «О Му'аз, клянусь Аллахом, я люблю тебя», затем завещал: «Не оставляй после каждой молитвы говорить: "Господь мой, помоги мне поминать Тебя, благодарить Тебя и прекрасно поклоняться Тебе"» (Сунан Абу Давуд; Сунан ан-Насаи).`,
            `Хадис передан в главе «Что говорить после намаза»; наставление дано как личная заповедь любимому сподвижнику, а не как общий совет всем сразу.`
        ], [
            `The Prophet ﷺ took Mu'adh ibn Jabal by the hand, said «O Mu'adh, by Allah I love you», then enjoined: «Do not omit after every prayer saying: "My Lord, help me to remember You, thank You and worship You beautifully"» (Sunan Abi Dawud; Sunan an-Nasa'i).`,
            `The hadith is in the chapter «What to say after prayer»; the instruction was given as a personal charge to a beloved Companion, not as a general address to everyone at once.`
        ], [
            `أخذ النبي ﷺ بيد معاذ بن جبل فقال: «يا معاذ، والله إني لأحبّك»، ثم أوصاه: «لا تدعنّ دُبر كل صلاة أن تقول: ربّ أعِنّي على ذكرك وشكرك وحسن عبادتك» (سنن أبي داود؛ سنن النسائي).`,
            `والحديث في باب «ما يقول بعد الصلاة»، والوصية خاصة بصحابي يحبّه النبي ﷺ لا خطاب عامّ للناس جميعًا.`
        ]),
        P([
            `Здесь не обещана мирская награда: Пророк ﷺ научил просить помощи в трёх вещах, которые составляют суть религии, — поминании, благодарности и качестве поклонения.`,
            `Ибн Касир в тафсире 2:152 («Так поминайте же Меня — Я помяну вас; благодарите Меня и не будьте неблагодарны Мне») объясняет: на поминание Аллах отвечает Своим поминанием, а благодарность — причина прибавления милости. Мольба просит у Него же сил на то, чего Он Сам потребовал.`
        ], [
            `No worldly reward is promised here: the Prophet ﷺ taught asking for help in three things that are the substance of the religion — remembrance, gratitude and excellence in worship.`,
            `In his tafsir of 2:152 («So remember Me; I will remember you; and be grateful to Me and do not deny Me») Ibn Kathir explains that Allah answers remembrance with His own remembrance, and gratitude is the cause of increased favour. The dua asks Him for the strength to do what He Himself commanded.`
        ], [
            `لم يرد فيه وعد دنيوي؛ بل علّم النبي ﷺ أن يُسأل العون على ثلاث هي لبّ الدين: الذكر والشكر وحسن العبادة.`,
            `ويقول ابن كثير في تفسير البقرة (2: 152: «فاذكروني أذكركم واشكروا لي ولا تكفرون») إن الله يقابل الذكر بذكره، والشكر سبب لزيادة النعم؛ والدعاء يطلب منه العون على ما أمر به هو سبحانه.`
        ])
    );

    D['afterPrayer:5'] = E(
        P([
            `Джувайрийа бинт аль-Харис (да будет доволен ею Аллах) рассказывала: Пророк ﷺ вышел от неё после утреннего намаза, а вернулся, когда она всё ещё сидела, поминая Аллаха. Он спросил: «Ты всё ещё в том же состоянии, в каком я оставил тебя?» — «Да», — ответила она (Сахих Муслим, 2726).`,
            `Пророк ﷺ сказал: «После тебя я произнёс четыре слова трижды; если их взвесить против всего, что ты произнесла с утра, они перевесят» — и назвал эту формулу.`
        ], [
            `Juwayriyah bint al-Harith (may Allah be pleased with her) reported: the Prophet ﷺ left her after the dawn prayer and returned while she was still sitting, remembering Allah. He asked: «Are you still in the state in which I left you?» — «Yes», she said (Sahih Muslim 2726).`,
            `He said: «After you I said four words three times; were they weighed against all you have said since morning, they would outweigh it» — and he named this formula.`
        ], [
            `عن جويرية بنت الحارث رضي الله عنها: خرج النبي ﷺ من عندها بعد صلاة الصبح ثم رجع وهي تسبّح، فقال: «ألم تزالي على الحال التي فارقتك عليها؟» قالت: بلى (صحيح مسلم 2726).`,
            `فقال ﷺ: «لقد قلتُ بعدك أربع كلمات ثلاث مرّات، لو وُزنت بما قلتِ منذ اليوم لوزنتهنّ»، وذكر هذه الصيغة.`
        ]),
        P([
            `Пророк ﷺ сообщил конкретное превосходство: три кратких повторения весят больше всего долгого зикра, произнесённого с утра (Муслим, 2726).`,
            `Ибн Касир в тафсире 33:41–42 объясняет достоинство поминания не числом повторений, а привязанностью языка к величию Аллаха: слова «числом Его творений, по довольству Его Самого, весом Трона и чернилами для слов Его» измеряют зикр не счётом, а безграничностью Того, Кого поминают.`
        ], [
            `The Prophet ﷺ stated a concrete superiority: three short repetitions outweigh the entire long dhikr said since morning (Muslim 2726).`,
            `In his tafsir of 33:41–42 Ibn Kathir explains that the merit of remembrance lies not in the count but in binding the tongue to Allah's greatness: «as many as His creation, as much as pleases Him, as heavy as His Throne, as much ink as His words» measures dhikr not by number but by the limitlessness of the One remembered.`
        ], [
            `أخبر النبي ﷺ برجحان محدّد: ثلاث مرّات من كلمات يسيرة ترجح كلّ ما قيل من الذكر منذ الصباح (مسلم 2726).`,
            `ويبيّن ابن كثير في تفسير الأحزاب (33: 41–42) أن فضل الذكر ليس بكثرة العدد بل بتعلّق اللسان بعظمة الله؛ فقول «عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته» يقيس الذكر لا بالحساب بل بلا نهاية من يُذكر.`
        ])
    );

    /* ---------- 4. ДУА НА ВСЕ СЛУЧАИ ЖИЗНИ ---------- */
    D['everyday:0'] = E(
        P([
            `'Умар ибн Абу Саляма рассказывал: «Я был мальчиком на попечении Посланника Аллаха ﷺ, и моя рука блуждала по блюду во время еды. Он сказал мне: "О мальчик, произнеси имя Аллаха, ешь правой рукой и ешь то, что ближе к тебе"» (Сахих аль-Бухари, 5376).`,
            `Передатчик добавил: «И после этого таким стал мой способ принимать пищу». Хадис открывает главу «Произнесение имени Аллаха над едой и еда правой рукой».`
        ], [
            `'Umar ibn Abi Salamah said: «I was a boy under the care of the Messenger of Allah ﷺ, and my hand used to wander around the dish while I ate. He said to me: "O boy, mention the Name of Allah, eat with your right hand, and eat of what is nearest to you"» (Sahih al-Bukhari 5376).`,
            `The narrator added: «And ever after that was my manner of eating». The hadith opens the chapter «Mentioning the Name of Allah over food and eating with the right hand».`
        ], [
            `قال عمر بن أبي سلمة: «كنت غلامًا في حجر رسول الله ﷺ وكانت يدي تطيش في الصحفة، فقال لي: يا غلام سمِّ الله، وكل بيمينك، وكل ممّا يليك» (صحيح البخاري 5376).`,
            `وزاد: «فما زالت تلك طعمتي بعدُ»؛ والحديث في باب «التسمية على الطعام والأكل باليمين».`
        ]),
        P([
            `Пророк ﷺ связал благодать пищи с произнесением имени Аллаха. В хадисе у Муслима он поясняет: шайтану не достаётся трапеза, над которой не произнесено имя Аллаха, — поэтому «Бисми-Ллях» называют печатью, отделяющей еду от его участия.`,
            `Если человек забыл в начале, Пророк ﷺ велел сказать «Бисми-Лляхи фи аввалихи ва ахирихи» — «С именем Аллаха в начале её и в конце» (ат-Тирмизи, Абу Давуд); то есть сунна восполнима и не превращается в упрёк.`
        ], [
            `The Prophet ﷺ tied the blessing of food to mentioning Allah's Name. In a hadith in Muslim he explains that Satan has no share in a meal over which Allah's Name was not said — which is why «Bismillah» is described as a seal separating the food from his participation.`,
            `If one forgets at the start, the Prophet ﷺ instructed saying «Bismillahi fi awwalihi wa akhirihi» — «In the Name of Allah at its beginning and its end» (at-Tirmidhi, Abu Dawud); the sunnah is recoverable and does not turn into blame.`
        ], [
            `قرن النبي ﷺ بركة الطعام بالتسمية؛ وفي حديث مسلم أن الشيطان لا ينال طعامًا لم يُذكر اسم الله عليه، فلذلك كانت «بسم الله» ختمًا يحول بينه وبين المائدة.`,
            `ومن نسي في أوّله فقال النبي ﷺ: «بسم الله في أوّله وآخره» (الترمذي، أبو داود)؛ فالسنّة تُستدرك ولا تتحوّل إلى لوم.`
        ])
    );

    D['everyday:1'] = E(
        P([
            `Сахль ибн Му'аз передал от своего отца Му'аза ибн Анаса: «Посланник Аллаха ﷺ сказал: "Кто съест пищу и затем скажет: 'Хвала Аллаху, который накормил меня этим и наделил меня этим безо всякой моей силы и мощи'..."» (Джами' ат-Тирмизи, 3458, хасан; также Абу Давуд).`,
            `Хадис помещён в главу «Что говорить, когда закончил еду». В конце формулы стоит «мин гайри хаулин минни ва ля кувва» — признание, что пропитание пришло не от усилий человека.`
        ], [
            `Sahl ibn Mu'adh narrated from his father Mu'adh ibn Anas: «The Messenger of Allah ﷺ said: "Whoever eats food and then says: 'All praise is due to Allah who fed me this and provided it for me without any effort or power of my own'..."» (Jami' at-Tirmidhi 3458, hasan; also Abu Dawud).`,
            `The hadith is in the chapter «What to say when one finishes food». The formula ends «min ghayri hawlin minni wa la quwwa» — an admission that the provision did not come from one's own effort.`
        ], [
            `روى سهل بن معاذ عن أبيه معاذ بن أنس: قال رسول الله ﷺ: «من أكل طعامًا فقال: الحمد لله الذي أطعمني هذا ورزقنيه من غير حول منّي ولا قوّة...» (جامع الترمذي 3458، حسن؛ وأبو داود).`,
            `والحديث في باب «ما يقول إذا فرغ من الطعام»، وختمه «من غير حول منّي ولا قوّة» إقرار بأن الرزق لم يأتِ من حول العبد.`
        ]),
        P([
            `Пророк ﷺ обещал: «...простятся ему прежние грехи» (ат-Тирмизи, 3458). Награда названа прямо и не зависит от количества съеденного.`,
            `Ибн Касир в тафсире 2:172 («О те, которые уверовали! Вкушайте из благ, которыми Мы наделили вас, и благодарите Аллаха, если Ему вы поклоняетесь») поясняет: благодарность за удел — поклонение, а не только слово; она связывает принятие пищи с таухидом, поэтому после еды произносят хвалу, а не просто встают из-за стола.`
        ], [
            `The Prophet ﷺ promised: «...his past sins shall be forgiven» (at-Tirmidhi 3458). The reward is stated plainly and does not depend on how much was eaten.`,
            `In his tafsir of 2:172 («O you who believe! Eat of the good things We have provided you and be grateful to Allah, if it is Him you worship») Ibn Kathir explains that gratitude for provision is worship, not merely a word; it joins eating to tawhid, which is why praise is said after the meal rather than simply rising from the table.`
        ], [
            `وعد النبي ﷺ: «...غُفر له ما تقدّم من ذنبه» (الترمذي 3458)، والأجر منصوص لا يتعلّق بقدر المأكول.`,
            `ويقول ابن كثير في تفسير البقرة (2: 172: «كلوا من طيّبات ما رزقناكم واشكروا لله إن كنتم إيّاه تعبدون») إن شكر الرزق عبادة لا مجرّد كلمة، وهو يصل الطعام بالتوحيد؛ ولذلك يُحمد الله بعد الفراغ ولا يُكتفى بالقيام عن المائدة.`
        ])
    );

    D['everyday:2'] = E(
        P([
            `Анас ибн Малик передал, что Посланник Аллаха ﷺ сказал: «Кто скажет, когда выходит из дома: "С именем Аллаха, я уповаю на Аллаха; нет силы и мощи ни у кого, кроме Аллаха"...» (Джами' ат-Тирмизи, 3426; также Абу Давуд).`,
            `Ат-Тирмизи оценил хадис как хасан-сахих; он помещён в главу «Что говорить, когда выходишь из своего дома».`
        ], [
            `Anas ibn Malik reported that the Messenger of Allah ﷺ said: «Whoever says, when leaving his house: "In the Name of Allah, I place my trust in Allah; there is no might or power except with Allah"...» (Jami' at-Tirmidhi 3426; also Abu Dawud).`,
            `At-Tirmidhi graded the hadith hasan-sahih; it is placed in the chapter «What to say when leaving one's house».`
        ], [
            `روى أنس بن مالك أن رسول الله ﷺ قال: «من قال — يعني إذا خرج من بيته — بسم الله توكّلت على الله، لا حول ولا قوّة إلا بالله...» (جامع الترمذي 3426؛ وأبو داود).`,
            `وقال الترمذي: حديث حسن صحيح، وهو في باب «ما يقول إذا خرج من بيته».`
        ]),
        P([
            `Пророк ﷺ сообщил: «...будет сказано ему: "Ты избавлен и защищён" — и отдалится от него шайтан» (ат-Тирмизи, 3426). Защита обещана именно на выход из дома.`,
            `Слова «ля хауля ва ля куввата илля би-Ллях» Ибн Касир разбирает в тафсире 18:39 («...сказал бы: "Как пожелал Аллах! Нет силы ни у кого, кроме Аллаха"»): это признание, что всякое благо — от Аллаха, и потому человек выходит из дома не на свою силу, а на Его сохранение.`
        ], [
            `The Prophet ﷺ said: «...it will be said to him: "You have been sufficed and protected" — and Satan will withdraw from him» (at-Tirmidhi 3426). The protection is promised specifically for leaving the house.`,
            `Ibn Kathir discusses «la hawla wa la quwwata illa billah» in his tafsir of 18:39 («...you should have said: "As Allah willed; there is no power except with Allah"»): it is the admission that every good is from Allah, so a person leaves home relying not on his own strength but on His preservation.`
        ], [
            `أخبر النبي ﷺ: «...يقال له: كُفيتَ ووُقيتَ، وتنحّى عنه الشيطان» (الترمذي 3426)، والحفظ مخصوص بالخروج من البيت.`,
            `ويشرح ابن كثير «لا حول ولا قوّة إلا بالله» في تفسير الكهف (18: 39: «لولا إذ دخلت جنتك قلت ما شاء الله لا قوّة إلا بالله») بأنها إقرار بأن الخير كلّه من الله، فلا يخرج المرء على حوله بل على حفظه.`
        ])
    );

    D['everyday:3'] = E(
        P([
            `Хадис приводит Абу Давуд в «Китаб аль-адаб», в главе о словах при входе в жилище: Пророк ﷺ установил произносить «Бисми-Лляхи валаджна, ва бисми-Лляхи хараджна, ва 'аля-Лляхи раббина таваккальна».`,
            `Формула парная: имя Аллаха названо и при входе, и при выходе, так что дом не остаётся без поминания ни в один из моментов перехода.`
        ], [
            `Abu Dawud transmits the hadith in the Book of Adab, in the chapter on what to say upon entering a dwelling: the Prophet ﷺ prescribed «Bismillahi walajna, wa bismillahi kharajna, wa 'alallahi rabbina tawakkalna».`,
            `The formula is paired: Allah's Name is invoked both on entering and on leaving, so the house is never without remembrance at either moment of transition.`
        ], [
            `روى أبو داود في كتاب الأدب، في باب ما يقول عند دخول المنزل، أن النبي ﷺ سنّ «بسم الله ولجنا، وبسم الله خرجنا، وعلى الله ربّنا توكّلنا».`,
            `والصيغة مزدوجة: ذكر اسم الله في الدخول والخروج معًا، فلا يخلو البيت من الذكر في حالتي الانتقال.`
        ]),
        P([
            `После этих слов Пророк ﷺ велел приветствовать домочадцев салямом. Ибн Касир в тафсире 24:61 («Когда входите в дома, то приветствуйте друг друга салямом — приветствием от Аллаха, благословенным и благим») поясняет, что такой салям — не обычай, а предписанное Аллахом приветствие, приносящее благодать дому.`,
            `Мольба помогает не «захлопнуть» дверь за собой: вход в дом становится поминанием Аллаха и упованием на Него, а не только бытовым действием.`
        ], [
            `After these words the Prophet ﷺ instructed greeting the household with salam. In his tafsir of 24:61 («When you enter houses, greet one another with a greeting from Allah, blessed and good») Ibn Kathir explains that such salam is not custom but a greeting prescribed by Allah, bringing blessing to the home.`,
            `The dua helps one not simply «shut the door behind»: entering the house becomes remembrance of Allah and reliance on Him, not merely a routine action.`
        ], [
            `وبعدها أمر النبي ﷺ بالسلام على أهل البيت. ويبيّن ابن كثير في تفسير النور (24: 61: «فإذا دخلتم بيوتًا فسلّموا على أنفسكم تحيّة من عند الله مباركة طيّبة») أن هذا السلام ليس عادةً بل تحيّة مشروعة من الله تُدخل البركة على البيت.`,
            `فالدعاء يجعل الدخول ذكرًا وتوكّلًا لا مجرّد فعل عادي يُغلق المرء به الباب خلفه.`
        ])
    );

    D['everyday:4'] = E(
        P([
            `Анас ибн Малик передал: «Когда Посланник Аллаха ﷺ входил в отхожее место, он говорил: "О Аллах, я прибегаю к Тебе от скверны и скверных"» (Сахих аль-Бухари; Сахих Муслим).`,
            `Хадис приведён в главах об адабе отправления нужды; слова произносятся до переступа порога, а не внутри помещения.`
        ], [
            `Anas ibn Malik reported: «When the Messenger of Allah ﷺ entered the privy, he would say: "O Allah, I seek refuge in You from impurity and impure beings"» (Sahih al-Bukhari; Sahih Muslim).`,
            `The hadith appears in the chapters on the etiquette of relieving oneself; the words are said before crossing the threshold, not inside.`
        ], [
            `عن أنس بن مالك: «كان رسول الله ﷺ إذا دخل الخلاء قال: اللهم إني أعوذ بك من الخُبُث والخبائث» (صحيح البخاري؛ صحيح مسلم).`,
            `والحديث في أبواب آداب قضاء الحاجة، وتُقال الكلمات قبل تجاوز العتبة لا داخل المكان.`
        ]),
        P([
            `Пророк ﷺ прибегал от «аль-хубус ва-ль-хаба'ис» — от скверных духов — от шайтанов мужского и женского пола (так разъяснили передатчики хадиса); Ибн Касир в тафсире 2:222 («Поистине, Аллах любит кающихся и любит очищающихся») связывает телесную нечистоту с состоянием сердца.`,
            `Конкретная польза — оградить место, где язык замолкает, от присутствия нечистого: мольба просит защиты на время, когда человек не занят поминанием Аллаха.`
        ], [
            `The Prophet ﷺ sought refuge from «al-khubuth wal-khaba'ith» — from impurity and from impure beings, male and female; in his tafsir of 2:222 («Indeed, Allah loves those who repent and loves those who purify themselves») Ibn Kathir links physical impurity to the state of the heart.`,
            `The specific benefit is to fence off a place where the tongue falls silent from the presence of the impure: the dua asks protection for the time when a person is not engaged in remembrance of Allah.`
        ], [
            `استعاذ النبي ﷺ من «الخُبُث والخبائث»: ذكور الشياطين وإناثها؛ ويصل ابن كثير في تفسير البقرة (2: 222: «إن الله يحبّ التوّابين ويحبّ المتطهّرين») بين النجاسة الحسّية وحال القلب.`,
            `وفائدتها المخصوصة تحصين الموضع الذي يسكت فيه اللسان عن حضور الخبيث؛ فالدعاء يطلب الحفظ في الوقت الذي لا يشتغل فيه العبد بذكر الله.`
        ])
    );

    D['everyday:5'] = E(
        P([
            `'Аиша (да будет доволен ею Аллах) передала: «Пророк ﷺ, выходя из отхожего места, говорил: "Гуфранака"» (Сунан Абу Давуд; Джами' ат-Тирмизи).`,
            `Хадис приведён в главах об очищении (тахара); одним словом Пророк ﷺ просил прощения сразу после облегчения, до возвращения к обычным делам.`
        ], [
            `'Aishah (may Allah be pleased with her) reported: «When the Prophet ﷺ came out of the privy he would say: "Ghufranaka"» (Sunan Abi Dawud; Jami' at-Tirmidhi).`,
            `The hadith appears in the chapters on purification; with one word the Prophet ﷺ asked forgiveness immediately after relief, before returning to ordinary affairs.`
        ], [
            `عن عائشة رضي الله عنها: «كان النبي ﷺ إذا خرج من الخلاء قال: غفرانك» (سنن أبي داود؛ جامع الترمذي).`,
            `والحديث في أبواب الطهارة؛ وبكلمة واحدة طلب النبي ﷺ المغفرة عقب القضاء قبل الرجوع إلى سائر الشأن.`
        ]),
        P([
            `Учёные поясняют смысл: человек просит прощения за те мгновения, когда он был вынужден оставить поминание Аллаха; слово «Гуфранака» буквально — «Твоего прощения [прошу]».`,
            `Ибн Касир в тафсире 2:222 («...и любит очищающихся») поясняет, что очищение телесное побуждает и к очищению сердца; поэтому вслед за омовением и выходом Пророк ﷺ тут же возвращался к Аллаху с покаянием, а не считал дело законченным.`
        ], [
            `The scholars explain the meaning: one asks forgiveness for the moments when he had to leave the remembrance of Allah; «Ghufranaka» literally means «I ask Your forgiveness».`,
            `In his tafsir of 2:222 («...and loves those who purify themselves») Ibn Kathir explains that bodily purification prompts purification of the heart; hence right after ablution and exiting, the Prophet ﷺ turned back to Allah in repentance instead of considering the matter finished.`
        ], [
            `يفسّر العلماء المعنى: يستغفر العبد عمّا اضطرّ فيه إلى ترك ذكر الله، و«غفرانك» أي أطلب مغفرتك.`,
            `ويقول ابن كثير في تفسير البقرة (2: 222: «ويحبّ المتطهّرين») إن الطهارة الحسّية تبعث على طهارة القلب؛ ولذلك عقب الوضوء والخروج رجع النبي ﷺ إلى الله بالتوبة لا اكتفى بانقضاء الأمر.`
        ])
    );

    D['everyday:6'] = E(
        P([
            `Абу Хурайра передал: «Посланник Аллаха ﷺ сказал: "Поистине, Аллах любит чиханье и не любит зевоту. Если кто-то чихнёт и восхвалит Аллаха, то на каждом мусульманине, который услышит его, лежит обязанность ответить: 'Да помилует тебя Аллах'"» (Сахих аль-Бухари, 6223).`,
            `Ответ самого чихнувшего «Да наставит вас Аллах и исправит ваше состояние» приведён в достоверных версиях у аль-Бухари и Абу Давуда; три формулы образуют законченный этикет.`
        ], [
            `Abu Hurayrah reported: «The Messenger of Allah ﷺ said: "Allah loves sneezing and dislikes yawning. If someone sneezes and praises Allah, it is obligatory on every Muslim who hears him to say: 'May Allah have mercy on you'"» (Sahih al-Bukhari 6223).`,
            `The sneezer's reply «May Allah guide you and set your affairs right» is given in authentic versions in al-Bukhari and Abu Dawud; the three formulas form a complete etiquette.`
        ], [
            `عن أبي هريرة: قال رسول الله ﷺ: «إن الله يحبّ العطسة ويكره التثاؤب، فإذا عطس فحمد الله فحقّ على كل مسلم سمعه أن يشمّته: يرحمك الله» (صحيح البخاري 6223).`,
            `وردّ العاطس «يهديكم الله ويصلح بالكم» في روايات صحيحة عند البخاري وأبي داود، فالصيغ الثلاث تُتمّ آدابًا واحدًا.`
        ]),
        P([
            `Пророк ﷺ сделал ответ на чиханье правом мусульманина (факк), а не просто вежливостью: услышавший обязан ответить, если чихнувший восхвалил Аллаха (аль-Бухари, 6223).`,
            `Ибн Касир в тафсире 4:86 («Когда вас приветствуют каким-либо приветствием, отвечайте лучшим или тем же») выводит общий принцип: на благое слово отвечают не меньшим. Здесь на «Аль-хамду лиллях» отвечают мольбой о милости, а на неё — мольбой о наставлении.`
        ], [
            `The Prophet ﷺ made responding to a sneeze a right (haqq) of the Muslim, not mere courtesy: the hearer is obliged to reply if the sneezer praised Allah (al-Bukhari 6223).`,
            `In his tafsir of 4:86 («When you are greeted with a greeting, respond with better or equal») Ibn Kathir derives a general principle: a good word is answered with no less. Here «Alhamdulillah» is answered with a plea for mercy, and that with a plea for guidance.`
        ], [
            `جعل النبي ﷺ التشميت حقًّا للمسلم لا مجرّد مجاملة: فمن سمع عاطسًا حمد الله وجب عليه أن يردّ (البخاري 6223).`,
            `ويستخرج ابن كثير من تفسير النساء (4: 86: «وإذا حُيّيتم بتحيّة فحيّوا بأحسن منها أو ردّوها») قاعدة عامّة: الكلمة الطيّبة يُجاب بمثلها أو أحسن؛ ف«الحمد لله» يُجاب بالرحمة، وتُجاب الرحمة بالهداية.`
        ])
    );

    /* ---------- 5. ДУА ДЛЯ ПОКАЯНИЯ (ИСТИГФАР) ---------- */
    D['istighfar:0'] = E(
        P([
            `Шаддад ибн Аус передал, что Пророк ﷺ назвал эти слова «саййид аль-истигфар» — «господином мольб о прощении» (Сахих аль-Бухари, 6306).`,
            `Хадис открывает главу «О достоинстве истигфара» в книге «Мольбы»; формула установлена как лучший образец покаяния, а не как ответ на отдельное событие.`
        ], [
            `Shaddad ibn Aws reported that the Prophet ﷺ called these words «sayyid al-istighfar», the master of the prayers for forgiveness (Sahih al-Bukhari 6306).`,
            `The hadith opens the chapter «The excellence of istighfar» in the Book of Supplications; the formula is established as the best model of repentance, not as a response to a particular event.`
        ], [
            `روى شدّاد بن أوس أن النبي ﷺ سمّى هذه الكلمات «سيد الاستغفار» (صحيح البخاري 6306).`,
            `والحديث في صدر باب «فضل الاستغفار» من كتاب الدعوات؛ فالصيغة أُثبتت كأفضل نموذج للتوبة لا كجواب عن حادثة بعينها.`
        ]),
        P([
            `Пророк ﷺ обещал: «Кто произнесёт её днём, будучи убеждённым, и умрёт до вечера — из обитателей Рая; кто произнесёт ночью и умрёт до утра — из обитателей Рая» (аль-Бухари, 6306).`,
            `Ибн Касир в тафсире 3:135–136 перечисляет условия принимаемого покаяния: оставить грех, сожалеть, твёрдо решить не возвращаться и признать вину. В мольбе они идут в том же порядке: признание завета с Аллахом, признание Его милости, признание греха, просьба о прощении.`
        ], [
            `The Prophet ﷺ promised: «Whoever says it during the day with conviction and dies before evening is among the people of Paradise; whoever says it at night and dies before morning is among the people of Paradise» (al-Bukhari 6306).`,
            `In his tafsir of 3:135–136 Ibn Kathir lists the conditions of accepted repentance: abandoning the sin, regretting it, firmly resolving not to return, and admitting guilt. The dua follows the same order: acknowledging the covenant with Allah, acknowledging His blessing, confessing the sin, asking forgiveness.`
        ], [
            `وعد النبي ﷺ: «من قالها من النهار موقنًا بها فمات قبل أن يمسي فمن أهل الجنّة، ومن قالها من الليل فمات قبل أن يصبح فمن أهل الجنّة» (البخاري 6306).`,
            `ويعدّد ابن كثير في تفسير آل عمران (3: 135–136) شروط التوبة المقبولة: الإقلاع، والندم، والعزم على عدم العود، والاعتراف بالذنب. وجاءت الدعوة على الترتيب نفسه: الإقرار بالعهد، ثم الاعتراف بالنعمة، ثم بالذنب، ثم طلب المغفرة.`
        ])
    );

    D['istighfar:1'] = E(
        P([
            `Аят ниспослан в мекканской суре «Аль-А'раф» (7), внутри рассказа об Адаме и Хавве (мир им). Ибн Касир поясняет контекст: после того как они вкусили с запретного дерева, у них открылась нагота, они принялись прикрываться листьями райских деревьев и Аллах воззвал к ним: «Разве Я не запретил вам это дерево и не говорил, что шайтан для вас — явный враг?» (7:22).`,
            `Ответом и стала эта мольба — «Господь наш! Мы поступили несправедливо по отношению к самим себе...» (7:23). Ибн Касир приводит, что Аллах принял её: «...и Он обратился к нему [Адаму] с милостью, ведь Он — Принимающий покаяние, Милосердный» (2:37).`
        ], [
            `Revealed in the Meccan surah al-A'raf (7), within the story of Adam and Hawwa (peace be upon them). Ibn Kathir sets the context: after they ate of the forbidden tree their nakedness became exposed, they began covering themselves with leaves of Paradise, and Allah called to them: «Did I not forbid you that tree and tell you that Satan is a clear enemy to you?» (7:22).`,
            `Their reply was this dua — «Our Lord! We have wronged ourselves...» (7:23). Ibn Kathir records that Allah accepted it: «...and He turned to him [Adam] in mercy; indeed He is the Ever-Relenting, the Most Merciful» (2:37).`
        ], [
            `نزلت الآية في سورة الأعراف المكّية ضمن قصّة آدم وحوّاء عليهما السلام. يبيّن ابن كثير السياق: لمّا أكلا من الشجرة بدت لهما سوآتهما فطفقا يخصفان عليهما من ورق الجنّة، وناداهما ربّهما: «ألم أنهكما عن تلكما الشجرة وأقل لكما إنّ الشيطان لكما عدوّ مبين» (7: 22).`,
            `فكان الجواب هذا الدعاء: «ربّنا ظلمنا أنفسنا...» (7: 23). ويذكر ابن كثير أن الله قبله: «فتلقّى آدم من ربّه كلمات فتاب عليه إنه هو التوّاب الرحيم» (2: 37).`
        ]),
        P([
            `Ибн Касир называет эту мольбу образцом покаяния: раб относит вину к самому себе («мы поступили несправедливо к себе»), а не к предопределению или к шайтану, и ставит условием спасения прощение и милость Аллаха, а не свои дела.`,
            `Это первая мольба о прощении в истории человечества — те самые «слова», которые Адам получил от Господа (2:37). Она помогает верующему после любой ошибки не оправдываться, не отчаиваться и сразу обращаться к Аллаху, как это сделали Адам и Хавва.`
        ], [
            `Ibn Kathir calls this dua the model of repentance: the servant attributes the fault to himself («we have wronged ourselves»), not to decree or to Satan, and makes salvation depend on Allah's forgiveness and mercy rather than on his own deeds.`,
            `It is the first prayer of forgiveness in human history — the very «words» Adam received from his Lord (2:37). It helps the believer after any mistake not to make excuses, not to despair, and to turn to Allah at once, as Adam and Hawwa did.`
        ], [
            `يسمّيها ابن كثير نموذج التوبة: يَنسب العبد الخطأ إلى نفسه («ظلمنا أنفسنا») لا إلى القدر ولا إلى إبليس، ويجعل النجاة معلّقة بمغفرة الله ورحمته لا بعمله.`,
            `وهي أول دعوة استغفار في تاريخ البشر، وهي «الكلمات» التي تلقّاها آدم من ربّه (2: 37)؛ تعين المؤمن بعد كل زلّة ألّا يعتذر ولا ييأس، بل يبادر إلى الله كما بادر آدم وحوّاء.`
        ])
    );

    D['istighfar:2'] = E(
        P([
            `Хадис с этой формулой приводят Абу Давуд и ат-Тирмизи в главах об истигфаре; Пророк ﷺ сообщил о награде за неё, не приурочивая к конкретному случаю.`,
            `Она построена на величайшем имени: «аль-Хаййу-ль-Каййум» — те же слова, с которых начинается Аят аль-Курси (2:255), и потому в тафсире Ибн Касира связываются с полнотою жизни и власти Аллаха.`
        ], [
            `The hadith with this formula is transmitted by Abu Dawud and at-Tirmidhi in their chapters on istighfar; the Prophet ﷺ announced its reward without tying it to a specific incident.`,
            `It is built on the greatest Name: «al-Hayy al-Qayyum» — the same words with which Ayat al-Kursi opens (2:255), and which Ibn Kathir's tafsir links to the perfection of Allah's life and authority.`
        ], [
            `روى الحديث بهذه الصيغة أبو داود والترمذي في أبواب الاستغفار، وأخبر النبي ﷺ بأجرها دون تقييدها بحادثة بعينها.`,
            `وهي مبنيّة على الاسم الأعظم «الحيّ القيّوم»، وهو مطلع آية الكرسي (2: 255) الذي يربطه ابن كثير بكمال حياة الله وقيّوميّته.`
        ]),
        P([
            `В достоверных версиях Пророк ﷺ сообщил, что произнёсшему её прощаются грехи — настолько, что в тексте хадиса упомянуто даже бегство с поля боя (один из тягчайших грехов).`,
            `Ибн Касир в тафсире 2:255 объясняет: «аль-Хайй» — Тот, Кто жив совершенной жизнью, «аль-Каййум» — Тот, Кто Сам поддерживает всё сущее. Покаяние обращено к Тому, Кто действительно может изменить положение раба и простить прошлое.`
        ], [
            `In the authentic versions the Prophet ﷺ taught that whoever says it is forgiven — so much so that the text of the hadith mentions even fleeing from the battlefield (one of the gravest sins).`,
            `In his tafsir of 2:255 Ibn Kathir explains: «al-Hayy» is the One who lives with perfect life; «al-Qayyum» is the One who Himself sustains all that exists. Repentance is addressed to the One who can truly change a servant's state and forgive the past.`
        ], [
            `أخبر النبي ﷺ في الروايات الصحيحة أن من قالها غُفر له، حتى ذُكر في لفظ الحديث الفرار من الزحف، وهو من كبائر الذنوب.`,
            `ويقول ابن كثير في تفسير آية الكرسي (2: 255): «الحيّ» كامل الحياة، و«القيّوم» القائم على كل شيء؛ فالتوبة تتوجّه إلى من يملك حقًّا تبديل حال العبد ومحو ما مضى.`
        ])
    );

    D['istighfar:3'] = E(
        P([
            `'Абдуллах ибн 'Умар передал: «Мы считали, что Посланник Аллаха ﷺ в одном собрании повторял сто раз: "Господь мой, прости меня и прими моё покаяние, ведь Ты — Принимающий покаяние, Милосердный"» (Сунан Абу Давуд, 1516, сахих).`,
            `Хадис помещён в «Книге о витре», в главе об истигфаре; сподвижники специально считали повторения — значит, это был заметный, постоянный зикр Пророка ﷺ, а не слова по отдельному поводу.`
        ], [
            `'Abdullah ibn 'Umar reported: «We used to count that the Messenger of Allah ﷺ would say a hundred times in a single sitting: "My Lord, forgive me and accept my repentance; You are the Ever-Relenting, the Most Merciful"» (Sunan Abi Dawud 1516, sahih).`,
            `The hadith is in the Book of Witr, chapter on istighfar; the Companions deliberately counted the repetitions — so it was a conspicuous, constant dhikr of the Prophet ﷺ, not words occasioned by a particular event.`
        ], [
            `عن عبد الله بن عمر: «إن كنّا لنعدّ لرسول الله ﷺ في المجلس الواحد مائة مرّة: ربّ اغفر لي وتُب عليّ إنك أنت التوّاب الرحيم» (سنن أبي داود 1516، صحيح).`,
            `والحديث في كتاب الوتر، باب الاستغفار؛ وقد كان الصحابة يعدّون التكرار، فدلّ على أنه ذكرٌ ظاهر دائم للنبي ﷺ لا كلمة قيلت في مناسبة.`
        ]),
        P([
            `Отдельной награды хадис не называет; его польза — в примере Пророка ﷺ: он просил прощения сто раз за одно собрание, хотя ему уже было прощено прежнее и будущее (Коран, 48:2).`,
            `Ибн Касир в тафсире 66:8 («О те, которые уверовали! Обращайтесь к Аллаху с искренним покаянием») поясняет «тавба насуха»: покаяние, за которым следует оставление греха и твёрдая решимость не возвращаться к нему. Частое повторение слов не заменяет этого решения, но приучает сердце не откладывать его.`
        ], [
            `The hadith names no separate reward; its benefit lies in the Prophet's ﷺ example: he asked forgiveness a hundred times in one sitting, although his past and future sins had already been forgiven (Quran 48:2).`,
            `In his tafsir of 66:8 («O you who believe! Turn to Allah in sincere repentance») Ibn Kathir explains «tawbah nasuhah»: repentance followed by abandoning the sin and firm resolve never to return. Repeating the words often does not replace that resolve, but trains the heart not to postpone it.`
        ], [
            `لم يذكر فيه أجر مخصوص، والفائدة في أسوة النبي ﷺ: كان يستغفر مائة مرّة في مجلس واحد مع أن الله قد غفر له ما تقدّم من ذنبه وما تأخّر (الفتح 48: 2).`,
            `ويبيّن ابن كثير «التوبة النصوح» في تفسير التحريم (66: 8) بأنها التي يعقبها الإقلاع والعزم على عدم العود؛ فتكرار اللفظ لا يقوم مقام العزم، لكنه يُعوّد القلب ألّا يسوّفه.`
        ])
    );

    D['istighfar:4'] = E(
        P([
            `Аят из мекканской суры «Аз-Зумар» (39). Ибн Касир приводит сообщения о причине ниспослания: люди, совершившие до принятия Ислама тяжкие грехи, боялись, что покаяние уже не будет принято, и говорили: «Как нам переселиться [к Пророку], когда мы убивали, прелюбодействовали и поклонялись идолам?»`,
            `В ответ был ниспослан аят: «Скажи: "О рабы Мои, которые излишествовали во вред себе! Не отчаивайтесь в милости Аллаха..."» — обращение идёт от имени Самого Аллаха и начинается со слова «О рабы Мои» (йа 'ибади).`
        ], [
            `A verse from the Meccan surah az-Zumar (39). Ibn Kathir cites reports on the occasion of revelation: people who had committed grave sins before embracing Islam feared their repentance would not be accepted, saying «How can we migrate [to the Prophet] when we have killed, fornicated and worshipped idols?»`,
            `In response the verse was revealed: «Say: "O My servants who have transgressed against themselves! Do not despair of the mercy of Allah..."» — the address comes from Allah Himself and opens with «O My servants» (ya 'ibadi).`
        ], [
            `آية من سورة الزمر المكّية (39). يورد ابن كثير في سبب النزول أن أناسًا أسرفوا في الذنوب قبل الإسلام فخافوا ألّا تُقبل توبتهم، وقالوا: «كيف نهاجر وقد قتلنا وزنينا وعبدنا الأصنام؟»`,
            `فنزلت: «قل يا عبادي الذين أسرفوا على أنفسهم لا تقنطوا من رحمة الله...»، والخطاب من الله نفسه ويبدأ بـ«يا عبادي».`
        ]),
        P([
            `Ибн Касир подчёркивает важную оговорку: «Аллах прощает все грехи» — при покаянии, а не без него; сразу после аята сказано: «И обратитесь к вашему Господу и покоритесь Ему, прежде чем придёт к вам наказание» (39:54).`,
            `Конкретная помощь аята — против отчаяния, которое Ибн Касир называет одним из дел шайтана: как бы ни были велики грехи, дверь таубы открыта до прихода наказания. Слово «йа 'ибади» добавляет к этому надежду: даже ослушавшийся назван рабом Аллаха.`
        ], [
            `Ibn Kathir stresses an important qualification: «Allah forgives all sins» — through repentance, not without it; the very next verse says «And turn to your Lord and submit to Him before the punishment comes upon you» (39:54).`,
            `The verse's specific help is against despair, which Ibn Kathir counts among the works of Satan: however great the sins, the door of repentance remains open until punishment arrives. The word «ya 'ibadi» adds hope: even the disobedient is called Allah's servant.`
        ], [
            `يؤكّد ابن كثير قيدًا مهمًّا: «إن الله يغفر الذنوب جميعًا» بالتوبة لا بدونها، فالآية التالية: «وأنيبوا إلى ربّكم وأسلموا له من قبل أن يأتيكم العذاب» (39: 54).`,
            `ونفعها المخصوص دفع القنوط الذي يعدّه ابن كثير من عمل الشيطان: مهما عظمت الذنوب فباب التوبة مفتوح قبل نزول العذاب؛ ونداء «يا عبادي» يزيد الرجاء إذ سمّى العاصي عبدًا لله.`
        ])
    );

    D['istighfar:5'] = E(
        P([
            `'Али ибн Абу Талиб передавал, что Посланник Аллаха ﷺ произносил эту мольбу в земном и поясном поклонах (Сахих Муслим); она приведена среди дуа намаза.`,
            `Формула охватывает прошлое и будущее, тайное и явное, а также то, в чём человек преступил меру, и то, о чём Аллах знает лучше него самого.`
        ], [
            `'Ali ibn Abi Talib reported that the Messenger of Allah ﷺ used to say this supplication in his prostration and bowing (Sahih Muslim); it is transmitted among the duas of the prayer.`,
            `The formula covers past and future, secret and open, what one exceeded in, and what Allah knows better than the servant himself.`
        ], [
            `روى علي بن أبي طالب أن رسول الله ﷺ كان يقول هذا الدعاء في سجوده وركوعه (صحيح مسلم)، وهو من أدعية الصلاة.`,
            `وتستوعب الصيغة ما قدّم العبد وما أخّر، وما أسرّ وما أعلن، وما أسرف فيه، وما هو سبحانه أعلم به منه.`
        ]),
        P([
            `Отдельной мирской награды хадис не называет: это просьба о полном прощении. Примечательно, что её повторял Пророк ﷺ, которому уже было прощено прежнее и будущее (48:2), — пример смирения, а не сомнения в прощении.`,
            `Ибн Касир в тафсире 48:2 поясняет, что полное прощение прошлого и будущего — достоинство, данное только Пророку ﷺ; община же просит прощения, следуя его примеру и признавая, что знание Аллаха о грехах полнее нашего.`
        ], [
            `The hadith names no separate worldly reward: it is a plea for complete forgiveness. Notably it was repeated by the Prophet ﷺ, whose past and future had already been forgiven (48:2) — an example of humility, not doubt about forgiveness.`,
            `In his tafsir of 48:2 Ibn Kathir explains that full forgiveness of past and future is a distinction granted only to the Prophet ﷺ; the community asks forgiveness by following his example and acknowledging that Allah's knowledge of sins is fuller than their own.`
        ], [
            `لم يذكر الحديث أجرًا دنيويًا، بل هو سؤال للمغفرة التامّة؛ ومع ذلك كان يردّده النبي ﷺ وقد غُفر له ما تقدّم وما تأخّر (48: 2)، فذلك تواضع لا شكّ في المغفرة.`,
            `ويبيّن ابن كثير في تفسير الفتح (48: 2) أن غفران المتقدّم والمتأخّر خصوصية للنبي ﷺ؛ أمّا الأمّة فتسأل المغفرة اقتداءً به وإقرارًا بأن علم الله بالذنوب أتمّ من علمها.`
        ])
    );

    /* ---------- 6. ОТ ТРЕВОГИ, ГРУСТИ И ДОЛГОВ ---------- */
    D['anxiety:0'] = E(
        P([
            `Передаёт Анас ибн Малик (да будет доволен им Аллах): Посланник Аллаха ﷺ часто говорил: «О Аллах, я прибегаю к Тебе от тревоги и печали, от бессилия и лени, от трусости и скупости, от тяжести долга и от притеснения людей» (Сахих аль-Бухари, 6369).`,
            `Хадис помещён в «Книге мольб», в главе «Прибегание от тревоги, печали, бессилия, лени, трусости, скупости, тяжести долга и притеснения людей». Пророк ﷺ не приурочил слова к отдельному случаю: он перечислил восемь состояний попарно — душевные (тревога/печаль), деятельные (бессилие/лень), нравственные (трусость/скупость) и жизненные (долг/притеснение).`
        ], [
            `Anas ibn Malik (may Allah be pleased with him) reported that the Messenger of Allah ﷺ often said: «O Allah, I seek refuge in You from worry and grief, from incapacity and laziness, from cowardice and miserliness, from the burden of debt and from being overpowered by men» (Sahih al-Bukhari 6369).`,
            `The hadith stands in the Book of Supplications, in the chapter on seeking refuge from worry, grief, incapacity, laziness, cowardice, miserliness, debt and being overpowered. The Prophet ﷺ did not tie it to one incident: he listed eight states in pairs — of the heart (worry/grief), of action (incapacity/laziness), of character (cowardice/miserliness) and of circumstance (debt/oppression).`
        ], [
            `عن أنس بن مالك رضي الله عنه أن رسول الله ﷺ كان يُكثر أن يقول: «اللهم إني أعوذ بك من الهمّ والحزن، والعجز والكسل، والجبن والبخل، وضلع الدَّيْن وغلبة الرجال» (صحيح البخاري 6369).`,
            `والحديث في كتاب الدعوات، باب «التعوّذ من الهمّ والحزن والعجز والكسل والجبن والبخل وضلع الدَّيْن وغلبة الرجال»؛ ولم يخصّه النبي ﷺ بحادثة، بل عدّد ثمانية أحوال أزواجًا: قلبيّة (الهمّ/الحزن)، وعملية (العجز/الكسل)، وخلقيّة (الجبن/البخل)، وظرفيّة (الدَّيْن/الغلبة).`
        ]),
        P([
            `Отдельной награды хадис не называет: испрашиваемая защита и есть сами восемь пунктов — Пророк ﷺ прибегал от тревоги и печали, от бессилия и лени, от трусости и скупости, от долга и от притеснения людей.`,
            `Ибн Касир в тафсире 65:2–3 («...тому, кто боится Аллаха, Он устроит выход и наделит его уделом, откуда тот не ждёт; а кто уповает на Аллаха — тому Его достаточно») поясняет, что выход из любого стеснения и незаслуженный удел — от Аллаха; поэтому мольба просит не облегчения «само собой», а у Того, Кто повелевает исходом.`
        ], [
            `The hadith names no separate reward: the protection sought is the eight items themselves — refuge from worry, grief, incapacity, laziness, cowardice, miserliness, debt and being overpowered.`,
            `In his tafsir of 65:2–3 («...whoever fears Allah — He will make for him a way out and provide for him from where he does not expect; and whoever relies upon Allah — He is sufficient for him») Ibn Kathir explains that a way out of every constraint and unlooked-for provision come from Allah; the dua therefore asks the One who decrees the outcome, not for relief «by itself».`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، والحفظ المطلوب هو هذه الثمانية نفسها: الاستعاذة من الهمّ والحزن، والعجز والكسل، والجبن والبخل، وضلع الدَّيْن وغلبة الرجال.`,
            `ويبيّن ابن كثير في تفسير الطلاق (65: 2–3: «ومن يتّق الله يجعل له مخرجًا ويرزقه من حيث لا يحتسب ومن يتوكّل على الله فهو حسبه») أن المخرج من كل ضيق والرزق بلا حساب من عند الله؛ فالدعاء يسأل من يقدّر العاقبة لا أن يزول الكرب من تلقاء نفسه.`
        ])
    );

    D['anxiety:1'] = E(
        P([
            `Аят ниспослан в мекканской суре «Аль-Анбия» (21:87) в рассказе о пророке Юнусе (мир ему). Он покинул свой народ в гневе, не дождавшись позволения Аллаха, сел на корабль, по жребию был брошен в море и проглочен китом; Коран и Ибн Касир говорят о трёх мраках — ночи, моря и чрева кита.`,
            `Из этой тьмы он воззвал: «Нет божества, кроме Тебя! Пречист Ты! Поистине, я был одним из несправедливых!» — и Аллах ответил: «И Мы ответили ему и спасли его от печали; так Мы спасаем верующих» (21:88). Са'д ибн Абу Ваккас передал, что Пророк ﷺ назвал эти слова «мольбой Зу-н-Нуна» и сообщил: не обратится с ней мусульманин ни о чём, чтобы Аллах не ответил ему (Джами' ат-Тирмизи, 3505).`
        ], [
            `Revealed in the Meccan surah al-Anbiya (21:87) within the story of the Prophet Yunus (peace be upon him). He left his people in anger before Allah permitted it, boarded a ship, was cast into the sea by lot and swallowed by a whale; the Quran and Ibn Kathir speak of three darknesses — of night, of the sea and of the whale's belly.`,
            `From that darkness he called: «There is no god but You! Glory be to You! Indeed, I was among the wrongdoers» — and Allah replied: «So We responded to him and saved him from the distress; and thus do We save the believers» (21:88). Sa'd ibn Abi Waqqas reported that the Prophet ﷺ called it «the supplication of Dhun-Nun» and taught that no Muslim supplicates with it concerning anything except that Allah answers him (Jami' at-Tirmidhi 3505).`
        ], [
            `نزلت الآية في سورة الأنبياء المكّية (21: 87) ضمن قصّة يونس عليه السلام: خرج من قومه مغاضبًا قبل إذن الله، فركب السفينة فأُلقِي في البحر فالتقمه الحوت، والقرآن وابن كثير يذكرون «الظلمات الثلاث»: ظلمة الليل والبحر وبطن الحوت.`,
            `فنادى من تلك الظلمات: «لا إله إلا أنت سبحانك إني كنت من الظالمين»، فأجاب الله: «فاستجبنا له ونجّيناه من الغمّ وكذلك ننجي المؤمنين» (21: 88). وروى سعد بن أبي وقّاص أن النبي ﷺ سمّاها «دعوة ذي النون» وقال: «ما دعا بها مسلم في شيء قطّ إلا استجاب الله له» (جامع الترمذي 3505).`
        ]),
        P([
            `Ибн Касир в тафсире 21:87–88 выделяет три ступени мольбы: таухид («нет божества, кроме Тебя»), объявление Аллаха пречистым от недостатков («субханака») и признание собственной вины («я был несправедливым»). Именно это признание, а не жалоба, стало причиной спасения.`,
            `Аллах обобщил ответ: «так Мы спасаем верующих» (21:88) — обещание не одному Юнусу, а всякому, кто обратится так же. Пророк ﷺ подтвердил его: мольба принимается, о чём бы ни просили (ат-Тирмизи, 3505); поэтому её читают при беде, из которой не видно выхода.`
        ], [
            `In his tafsir of 21:87–88 Ibn Kathir distinguishes three steps in the dua: tawhid («no god but You»), declaring Allah free of every defect («subhanaka»), and confessing one's own fault («I was among the wrongdoers»). It was this confession, not complaint, that brought deliverance.`,
            `Allah generalised the response: «and thus do We save the believers» (21:88) — a promise not to Yunus alone but to everyone who calls likewise. The Prophet ﷺ confirmed it: the supplication is answered, whatever one asks for (at-Tirmidhi 3505); hence it is recited in hardship with no visible way out.`
        ], [
            `يميّز ابن كثير في تفسير الأنبياء (21: 87–88) ثلاث درجات في الدعاء: التوحيد «لا إله إلا أنت»، والتنزيه «سبحانك»، والاعتراف بالتقصير «إني كنت من الظالمين»؛ فكان الاعتراف لا الشكوى سبب النجاة.`,
            `وعمّم الله الوعد: «وكذلك ننجي المؤمنين» (21: 88)، فليس ليونس وحده بل لكل من دعا بمثلها؛ وأقرّه النبي ﷺ بأن الدعوة مستجابة في أيّ شيء (الترمذي 3505)، ولذلك تُقال عند الكرب الذي لا مخرج منه.`
        ])
    );

    D['anxiety:2'] = E(
        P([
            `Аят завершает суру «Ат-Тауба» (9:129), одну из последних ниспосланных сур Корана. Ибн Касир поясняет: Аллах повелел Своему Пророку ﷺ сказать эти слова, если люди отвернутся от него, — не вступать с ними в спор, а объявить, что ему достаточно Самого Аллаха.`,
            `В тафсире Ибн Касир приводит сообщение Убаййа ибн Ка'ба, что два последних аята суры (9:128–129) были среди последнего, что ниспосылалось Пророку ﷺ; поэтому мольба звучит как итог всей его миссии: после отказа людей остаётся упование на Аллаха.`
        ], [
            `The verse closes Surah at-Tawbah (9:129), one of the last surahs revealed. Ibn Kathir explains: Allah commanded His Prophet ﷺ to say these words if people turned away from him — not to argue with them, but to declare that Allah alone suffices him.`,
            `In his tafsir Ibn Kathir cites the report of Ubayy ibn Ka'b that the final two verses of the surah (9:128–129) were among the last revelation sent down to the Prophet ﷺ; the dua thus reads as the conclusion of his whole mission: after people's rejection, reliance on Allah remains.`
        ], [
            `تختم الآية سورة التوبة (9: 129)، وهي من أواخر ما نزل من السور. يبيّن ابن كثير أن الله أمر نبيّه ﷺ أن يقولها إن أعرض عنه الناس: لا يُجادلهم، بل يُعلن أن حسبه الله وحده.`,
            `ويورد ابن كثير في تفسيره عن أُبيّ بن كعب أن الآيتين الأخيرتين من السورة (9: 128–129) كانتا من آخر ما نزل على النبي ﷺ؛ فالدعاء كخلاصة رسالته كلّها: بعد إعراض الخلق يبقى التوكّل على الله.`
        ]),
        P([
            `Ибн Касир толкует «Хасби-Ллях» («Достаточно мне Аллаха»): Тот, Кто владеет великим Троном и всем, что под Ним, Сам берёт на себя дела уповающего; слова «на Него я уповаю» названы средством этой достаточности.`,
            `Аят помогает при тревоге от людей — от их отказа, упрёков или угроз: верующий не спорит и не доказывает, а переносит тяжесть на Аллаха. Пророк ﷺ произносил его, когда отворачивались от него, и это же упование закреплено в 3:173 («Достаточно нам Аллаха, и Он — прекрасный Попечитель»).`
        ], [
            `Ibn Kathir explains «Hasbiyallah» («Allah is sufficient for me»): the One who owns the Mighty Throne and all beneath it Himself takes charge of the affairs of the one who relies on Him; «in Him I place my trust» is named as the means of that sufficiency.`,
            `The verse helps against anxiety caused by people — their rejection, blame or threats: the believer does not argue or justify himself but transfers the burden to Allah. The Prophet ﷺ said it when people turned away, and the same reliance is fixed in 3:173 («Sufficient for us is Allah, and He is the best Disposer of affairs»).`
        ], [
            `يفسّر ابن كثير «حسبي الله»: الذي يملك العرش العظيم وما دونه يتولّى بنفسه شأن المتوكّل، و«عليه توكّلت» هو سبب هذه الكفاية.`,
            `وتعين الآية على قلقٍ سببه الناس: إعراضهم أو لومهم أو وعيدهم، فلا يُجادل المؤمن ولا يبرّئ نفسه بل يُلقي الثقل على الله. قالها النبي ﷺ حين أعرضوا، وهو التوكّل نفسه في آل عمران (3: 173: «حسبنا الله ونعم الوكيل»).`
        ])
    );

    D['anxiety:3'] = E(
        P([
            `Хадис передаёт 'Али ибн Абу Талиб (да будет доволен им Аллах): к нему пришёл человек, которого одолел долг (в версии ат-Тирмизи — мукатаб, не сумевший внести очередной взнос за своё освобождение), и попросил помочь. 'Али ответил: «Не научить ли тебе словам, которым меня научил Посланник Аллаха ﷺ? Если бы на тебе был долг даже с гору, Аллах уплатил бы его за тебя» — и произнёс эту мольбу (Джами' ат-Тирмизи).`,
            `Формула дана как ответ на конкретную нужду, а не как общий зикр: Пророк ﷺ велел просить «би-халялика 'ан харамика» — дозволенного вместо запретного, и «би-фадлика 'амман сивака» — независимости от всех, кроме Аллаха.`
        ], [
            `'Ali ibn Abi Talib (may Allah be pleased with him) reported that a man overwhelmed by debt came to him for help (in at-Tirmidhi's version, a mukatab who could not pay the instalment for his freedom). 'Ali said: «Shall I not teach you words the Messenger of Allah ﷺ taught me? If you had a debt even as large as a mountain, Allah would pay it off for you» — and recited this dua (Jami' at-Tirmidhi).`,
            `The formula was given for a specific need, not as a general dhikr: the Prophet ﷺ taught asking «bihalalika 'an haramika» — lawful instead of unlawful — and «bifadlika 'amman siwaka» — freedom from dependence on anyone but Allah.`
        ], [
            `روى علي بن أبي طالب رضي الله عنه أن رجلًا أثقله الدَّيْن (وفي رواية الترمذي: مكاتب عجز عن نجوم كتابته) جاءه يستعينه، فقال: «ألا أعلّمك كلمات علّمنيهنّ رسول الله ﷺ؟ لو كان عليك مثل الجبل دينًا لأدّاه الله عنك»، ثم ذكر هذا الدعاء (جامع الترمذي).`,
            `فالصيغة جاءت جوابًا لحاجة بعينها لا ذكرًا عامًّا: علّم النبي ﷺ أن يُسأل «بحلالك عن حرامك» أي الحلال بدل الحرام، و«بفضلك عمّن سواك» أي الاستغناء عمّن عداه.`
        ]),
        P([
            `Пророк ﷺ обещал уплату долга, как бы тот ни был велик, — и независимость от людей через щедрость Аллаха (ат-Тирмизи); это конкретная награда, названная в самом хадисе.`,
            `Ибн Касир в тафсире 2:188 («...но не пожирайте имущества вашего между собою ложно») и 65:2–3 поясняет, что удел приходит только дозволенным путём и от Аллаха, а не через запретное; мольба соединяет просьбу о чистом уделе с просьбой не нуждаться ни в ком, кроме Него.`
        ], [
            `The Prophet ﷺ promised that the debt would be paid however great, and independence from people through Allah's bounty (at-Tirmidhi) — the specific reward named in the hadith itself.`,
            `In his tafsir of 2:188 («...do not consume one another's wealth unjustly») and 65:2–3 Ibn Kathir explains that provision comes only lawfully and from Allah, never through what is forbidden; the dua joins a plea for clean provision with a plea to need no one but Him.`
        ], [
            `وعد النبي ﷺ بقضاء الدَّيْن مهما عظم، وبالاستغناء عن الخلق بفضل الله (الترمذي)، وهو الأجر المنصوص في نفس الحديث.`,
            `ويبيّن ابن كثير في تفسير البقرة (2: 188: «ولا تأكلوا أموالكم بينكم بالباطل») والطلاق (65: 2–3) أن الرزق لا يأتي إلا حلالًا ومن عند الله لا بحرام؛ فالدعاء يجمع سؤال الرزق الطيّب وسؤال الاستغناء عمّن سواه.`
        ])
    );

    D['anxiety:4'] = E(
        P([
            `Анас ибн Малик (да будет доволен им Аллах) передал: когда Посланника Аллаха ﷺ постигала тревога или важное дело, он взывал: «О Живой, о Поддерживающий всё! К Твоей милости взываю о помощи...» (Сунан ан-Насаи аль-Кубра; «'Амаль аль-йаум ва-ль-ляйля» Ибн ас-Сунни; «Мустадрак» аль-Хакима, который назвал хадис достоверным).`,
            `Хадис приведён в разделах о мольбе при стеснении (да'ват аль-карб); в отличие от коротких зикров, здесь Пророк ﷺ просил не об одной беде, а обо всех своих делах сразу — «аслих ли ша'ни куллях» (исправь все мои дела).`
        ], [
            `Anas ibn Malik (may Allah be pleased with him) reported: when distress or a grave matter befell the Messenger of Allah ﷺ, he would call out: «O Ever-Living, O Sustainer! By Your mercy I seek help...» (Sunan an-Nasa'i al-Kubra; Ibn as-Sunni's 'Amal al-Yawm wal-Laylah; al-Hakim's Mustadrak, where he graded the hadith sahih).`,
            `The hadith is transmitted in the chapters on the supplication in distress (da'wat al-karb); unlike short adhkar, here the Prophet ﷺ asked not about one affliction but about all his affairs at once — «aslih li sha'ni kullahu» (set all my affairs right).`
        ], [
            `عن أنس بن مالك رضي الله عنه: كان رسول الله ﷺ إذا كربه أمر قال: «يا حيّ يا قيّوم برحمتك أستغيث...» (سنن النسائي الكبرى؛ «عمل اليوم والليلة» لابن السنّي؛ «المستدرك» للحاكم وصحّحه).`,
            `والحديث في أبواب «دعاء الكرب»؛ بخلاف الأذكار القصيرة سأل النبي ﷺ هنا لا عن بلاء واحد بل عن شأنه كلّه: «أصلح لي شأني كلّه».`
        ]),
        P([
            `Отдельной награды хадис не называет; защита заключена в просьбе: «не доверяй меня моей душе даже на мгновение ока» — Пророк ﷺ просил Аллаха Самому вести все дела, не оставляя раба на его собственную слабость.`,
            `Ибн Касир в тафсире 2:255 объясняет имена, с которых начинается мольба: «аль-Хайй» — Тот, Кто жив совершенной жизнью, «аль-Каййум» — Тот, Кто Сам поддерживает всё сущее и ни на миг не нуждается в помощи. Поэтому помощь просят «би-рахматика» — через Его милость, а не через своё усилие.`
        ], [
            `The hadith names no separate reward; the protection lies in the plea itself: «do not leave me to myself even for the blink of an eye» — the Prophet ﷺ asked Allah to conduct all affairs Himself rather than leave the servant to his own weakness.`,
            `In his tafsir of 2:255 Ibn Kathir explains the Names with which the dua opens: «al-Hayy» is the One who lives with perfect life; «al-Qayyum» is the One who Himself sustains everything and never for an instant needs help. Help is therefore sought «bi-rahmatika» — through His mercy, not through one's own effort.`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، والحفظ في نفس المسألة: «ولا تكلني إلى نفسي طرفة عين»؛ سأل النبي ﷺ الله أن يتولّى الشأن كلّه ولا يترك العبد لضعفه.`,
            `ويشرح ابن كثير في تفسير آية الكرسي (2: 255) الاسمين اللذين تبدأ بهما الدعوة: «الحيّ» كامل الحياة، و«القيّوم» القائم على كل شيء الذي لا يحتاج إلى معين لحظةً؛ ولذا كانت الاستغاثة «برحمتك» لا بحول العبد.`
        ])
    );

    D['anxiety:5'] = E(
        P([
            `Абу Муса аль-Аш'ари (да будет доволен им Аллах) передал: Пророк ﷺ сказал ему: «О 'Абдуллах ибн Кайс, не указать ли тебе на слово, которое — сокровище из сокровищ Рая?» — и назвал: «Ля хауля ва ля куввата илля би-Ллях» (Сахих Муслим, 2704; также Сахих аль-Бухари).`,
            `В версии аль-Бухари вопрос звучит: «Не указать ли тебе на одно из сокровищ Рая?» — и Абу Муса ответил: «Конечно, о Посланник Аллаха». Хадис открывает главу «Ля хауля ва ля куввата илля би-Ллях» в «Книге мольб».`
        ], [
            `Abu Musa al-Ash'ari (may Allah be pleased with him) reported: the Prophet ﷺ said to him, «O 'Abdullah ibn Qays, shall I not guide you to a phrase that is a treasure from the treasures of Paradise?» — and named «La hawla wa la quwwata illa billah» (Sahih Muslim 2704; also Sahih al-Bukhari).`,
            `In al-Bukhari's version the question is «Shall I not guide you to one of the treasures of Paradise?» and Abu Musa replied «Of course, O Messenger of Allah». The hadith opens the chapter «La hawla wa la quwwata illa billah» in the Book of Supplications.`
        ], [
            `عن أبي موسى الأشعري رضي الله عنه أن النبي ﷺ قال له: «يا عبد الله بن قيس، ألا أدلّك على كلمة من كنوز الجنّة؟ لا حول ولا قوّة إلا بالله» (صحيح مسلم 2704؛ وصحيح البخاري).`,
            `وفي رواية البخاري: «ألا أدلّك على كنز من كنوز الجنّة؟» قال: «بلى يا رسول الله»؛ والحديث في صدر باب «لا حول ولا قوّة إلا بالله» من كتاب الدعوات.`
        ]),
        P([
            `Пророк ﷺ обещал награду прямо: эти слова — «сокровище из сокровищ Рая» (Муслим, 2704; аль-Бухари). Никакого счёта, времени или места не оговорено — достоинство относится к самим словам.`,
            `Ибн Касир в тафсире 18:39 («...сказал бы: \"Как пожелал Аллах! Нет силы ни у кого, кроме Аллаха\"») поясняет смысл: раб не владеет ни отвращением беды («ля хауля»), ни приобретением блага («ля куввата») — всё это от Аллаха; поэтому слова произносят при любой тяжести и бессилии.`
        ], [
            `The Prophet ﷺ stated the reward plainly: these words are «a treasure from the treasures of Paradise» (Muslim 2704; al-Bukhari). No count, time or place is stipulated — the merit belongs to the words themselves.`,
            `In his tafsir of 18:39 («...you should have said: \"As Allah willed; there is no power except with Allah\"») Ibn Kathir explains the meaning: the servant owns neither the averting of harm («la hawla») nor the attaining of good («la quwwata») — all is from Allah; hence the words are said in every hardship and moment of helplessness.`
        ], [
            `نصّ النبي ﷺ على الأجر: هي «كنز من كنوز الجنّة» (مسلم 2704؛ البخاري)، ولم يقيّدها بعدد ولا وقت ولا مكان، فالفضل للكلام نفسه.`,
            `ويبيّن ابن كثير في تفسير الكهف (18: 39: «لولا إذ دخلت جنتك قلت ما شاء الله لا قوّة إلا بالله») أن العبد لا يملك دفع الشرّ «لا حول» ولا تحصيل الخير «لا قوّة»، بل ذلك كلّه من الله؛ ولذلك تُقال عند كل ضيق وعجز.`
        ])
    );

    D['anxiety:6'] = E(
        P([
            `'Абдуллах ибн Мас'уд (да будет доволен им Аллах) передал слова Посланника Аллаха ﷺ: «Не постигнет никого тревога или печаль, чтобы он произнёс [эту мольбу], без того чтобы Аллах не удалил его тревогу и печаль и не заменил их радостью» (Муснад Ахмад; «Мустадрак» аль-Хакима, назвавшего хадис достоверным).`,
            `Сподвижники спросили: «Не выучить ли нам эти слова?» Пророк ﷺ ответил: «Да — пусть выучит их всякий, кто услышит». Мольба начинается с признания полной зависимости от Аллаха («я Твой раб, сын Твоего раба и Твоей рабыни») и заканчивается просьбой сделать Коран «весной сердца».`
        ], [
            `'Abdullah ibn Mas'ud (may Allah be pleased with him) reported the words of the Messenger of Allah ﷺ: «No one is afflicted with worry or grief and says [this dua] except that Allah removes his worry and grief and replaces them with joy» (Musnad Ahmad; al-Hakim's Mustadrak, where he graded the hadith sahih).`,
            `The Companions asked «Shall we not learn these words?» and the Prophet ﷺ replied «Yes — let everyone who hears them learn them». The dua opens by confessing total dependence on Allah («I am Your servant, son of Your servant and Your maidservant») and closes by asking Him to make the Quran «the spring of my heart».`
        ], [
            `عن عبد الله بن مسعود رضي الله عنه عن رسول الله ﷺ: «ما أصاب أحدًا همّ ولا حزن فقال [هذا الدعاء] إلا أذهب الله همّه وحزنه وأبدله مكانها فرحًا» (مسند أحمد؛ «المستدرك» للحاكم وصحّحه).`,
            `قالوا: «أفلا نتعلّمهنّ؟» قال: «بلى، ينبغي لمن سمعهنّ أن يتعلّمهنّ». وتبدأ الدعوة بإقرار العبودية التامّة «أنا عبدك ابن عبدك ابن أمتك» وتُختم بسؤال أن يجعل القرآن «ربيع القلب».`
        ]),
        P([
            `Обещание Пророка ﷺ конкретно: Аллах удаляет тревогу и печаль и заменяет их радостью — и повелевает выучить слова каждому, кто их услышит (Ахмад; аль-Хаким).`,
            `Ибн Касир в тафсире 17:82 («Мы ниспосылаем в Коране то, что является исцелением и милостью для верующих») поясняет, что Коран исцеляет сердца от сомнений и печали; не случайно мольба просит сделать его «светом груди, удалением печали и уходом тревоги», а также взывает к Аллаху через все Его имена.`
        ], [
            `The Prophet's ﷺ promise is specific: Allah removes worry and grief and replaces them with joy — and He commands that everyone who hears the words learn them (Ahmad; al-Hakim).`,
            `In his tafsir of 17:82 («And We send down of the Quran that which is healing and mercy for the believers») Ibn Kathir explains that the Quran heals hearts of doubt and sorrow; fittingly, the dua asks to make it «the light of my chest, the removal of my sorrow and the departure of my worry», while calling on Allah through all His Names.`
        ], [
            `وعد النبي ﷺ محدّد: يُذهب الله الهمّ والحزن ويُبدلهما فرحًا، وأمر أن يتعلّمهنّ كل من سمعهنّ (أحمد؛ الحاكم).`,
            `ويقول ابن كثير في تفسير الإسراء (17: 82: «وننزّل من القرآن ما هو شفاء ورحمة للمؤمنين») إن القرآن يشفي القلوب من الشكّ والحزن؛ ولذلك سألت الدعوة أن يجعله «نور الصدر وجلاء الحزن وذهاب الهمّ»، مع التوسّل إلى الله بأسمائه كلّها.`
        ])
    );

    /* ---------- 7. ЗАЩИТА ОТ ЗЛА И СГЛАЗА ---------- */
    D['protection:0'] = E(
        P([
            `Аят ниспослан в Медине, в суре «Аль-Бакара» (2:255); Ибн Касир называет его величайшим аятом Корана и поясняет, что он состоит из десяти предложений, каждое из которых утверждает единственность Аллаха и совершенство Его жизни, знания и власти. Убайй ибн Ка'б на вопрос Пророка ﷺ о величайшем аяте назвал именно его, и Пророк ﷺ одобрил ответ (Сахих Муслим, 810).`,
            `Историю обещания защиты передал Абу Хурайра: Пророк ﷺ поручил ему стеречь закят Рамадана; ночью приходил человек и брал еду, и на третью ночь, схваченный, попросил отпустить его за слова: «Прочитай Аят аль-Курси перед сном — с тобой будет хранитель от Аллаха, и шайтан не приблизится к тебе до утра». Утром Пророк ﷺ сказал: «Он сказал тебе правду, хотя он лжец; то был шайтан» (аль-Бухари, 5010).`
        ], [
            `Revealed in Madinah within Surah al-Baqarah (2:255); Ibn Kathir calls it the greatest verse of the Quran and explains that it comprises ten clauses, each affirming Allah's oneness and the perfection of His life, knowledge and dominion. Asked by the Prophet ﷺ which verse is greatest, Ubayy ibn Ka'b named this one, and the Prophet ﷺ approved (Sahih Muslim 810).`,
            `The promise of protection came through Abu Hurayrah: the Prophet ﷺ put him in charge of the Ramadan zakat; a man came at night taking food, and on the third night, when seized, he begged for release in exchange for words: «Recite Ayat al-Kursi before sleep — a guardian from Allah will stay with you and no Satan will come near you until morning». In the morning the Prophet ﷺ said: «He told you the truth, though he is a liar; that was a Satan» (al-Bukhari 5010).`
        ], [
            `نزلت الآية في المدينة ضمن سورة البقرة (2: 255)، ويسمّيها ابن كثير أعظم آية في القرآن ويبيّن أنها عشر جمل كلّها تقرّ التوحيد وكمال الحياة والعلم والملك. وسأل النبي ﷺ أُبيّ بن كعب عن أعظم آية فسمّاها فأقرّه ﷺ (صحيح مسلم 810).`,
            `أمّا قصّة وعد الحفظ فرواها أبو هريرة: وكّله النبي ﷺ بحفظ زكاة رمضان، فكان آتٍ يأخذ الطعام ليلًا، فلمّا أخذه في الليلة الثالثة قال: «إذا أويت إلى فراشك فاقرأ آية الكرسي، لن يزال معك من الله حافظ ولا يقربك شيطان حتى تُصبح». فقال النبي ﷺ صباحًا: «صدقك وهو كذوب، ذاك شيطان» (البخاري 5010).`
        ]),
        P([
            `Пророк ﷺ подтвердил обещание: хранитель от Аллаха и удаление шайтана до самого утра (аль-Бухари, 5010); потому аят читают утром, вечером и перед сном как главный щит.`,
            `Ибн Касир в тафсире 2:255 объясняет, почему именно этот аят: в нём величайшее имя Аллаха, и ни дремота, ни сон не объемлют Его, Ему принадлежит всё на небесах и на земле, и «не тяготит Его хранение их». Защита просится у Того, Кому она не стоит труда.`
        ], [
            `The Prophet ﷺ confirmed the promise: a guardian from Allah and Satan kept away until morning (al-Bukhari 5010); that is why the verse is recited morning, evening and before sleep as the foremost shield.`,
            `In his tafsir of 2:255 Ibn Kathir explains why this verse: it contains Allah's greatest Name; neither slumber nor sleep overtakes Him; to Him belongs all in the heavens and the earth; and «preserving them does not burden Him». Protection is asked of the One for whom it costs no effort.`
        ], [
            `أقرّ النبي ﷺ الوعد: حافظ من الله، ولا يقربه شيطان حتى الصباح (البخاري 5010)؛ ولذلك تُقرأ صباحًا ومساءً وعند النوم كأوثق حصن.`,
            `ويعلّل ابن كثير في تفسير البقرة (2: 255) خصوصيّتها: فيها اسم الله الأعظم، لا تأخذه سِنة ولا نوم، له ما في السماوات وما في الأرض، «ولا يؤوده حفظهما»؛ فالحفظ يُطلب ممّن لا يثقله حفظٌ.`
        ])
    );

    D['protection:1'] = E(
        P([
            `'Абдуллах ибн Хубайб рассказывал: «Вышли мы в дождливую, кромешно тёмную ночь искать Посланника Аллаха ﷺ, чтобы он совершил с нами намаз. Он трижды сказал: \"Говори\", а когда я спросил: \"Что мне говорить?\", ответил: \"Говори: «Къуль хува-Ллаху ахад» и две защитные суры — трижды по утрам и вечерам; они избавят тебя от всякого зла\"» (Сунан Абу Давуд, 5082).`,
            `Две защитные суры связаны и с историей колдовства: Лабид ибн аль-А'сам из бану Зурайк околдовал Пророка ﷺ, спрятав гребень с волосами в колодце Дарван; Джибриль указал место, и с каждым прочитанным аятом развязывался узел, пока Аллах не исцелил его (аль-Бухари, 5763).`
        ], [
            `'Abdullah ibn Khubayb said: «We went out on a rainy, intensely dark night looking for the Messenger of Allah ﷺ to lead us in prayer. He said \"Say\" three times; when I asked \"What shall I say?\", he replied: \"Say: «Qul huwallahu ahad» and the two refuge-seeking surahs three times morning and evening — they will suffice you against everything\"» (Sunan Abi Dawud 5082).`,
            `The two refuge-seeking surahs are also connected with the magic worked on the Prophet ﷺ: Labid ibn al-A'sam of Banu Zurayq bewitched him with a comb and hair hidden in the well of Dharwan; Jibril showed the place, and with each verse recited a knot was untied until Allah cured him (al-Bukhari 5763).`
        ], [
            `عن عبد الله بن خبيب: «خرجنا في ليلة مطر وظلمة شديدة نطلب رسول الله ﷺ ليصلّي لنا، فقال: قل، قل، قل، فقلت: ما أقول؟ قال: قل: «قل هو الله أحد» والمعوّذتين حين تمسي وحين تصبح ثلاث مرّات تكفيك من كل شيء» (سنن أبي داود 5082).`,
            `وارتبطت المعوّذتان كذلك بحادثة السحر: سحر النبيّ ﷺ لَبيد بن الأعصم من بني زريق بمشط ومشاطة في بئر ذروان، فدلّ جبريل على المكان، وكانت كلّ آية تُقرأ تنحلّ معها عقدة حتى عافاه الله (البخاري 5763).`
        ]),
        P([
            `Пророк ﷺ обещал: «Они избавят тебя от всякого зла» (Абу Давуд, 5082), а о суре «Аль-Ихляс» сообщил, что она равна трети Корана (аль-Бухари, 5015).`,
            `Ибн Касир в тафсире сур 113–114 разделяет две защиты: «Аль-Фаляк» — от внешнего зла (тьмы, колдовства, зависти завистника), «Ан-Нас» — от внутреннего, от наущения шайтана в груди людей; вместе с «Аль-Ихляс», утверждающей таухид, они закрывают все три стороны зла, включая сглаз.`
        ], [
            `The Prophet ﷺ promised: «They will suffice you against everything» (Abu Dawud 5082), and of Surah al-Ikhlas he said it equals one third of the Quran (al-Bukhari 5015).`,
            `In his tafsir of surahs 113–114 Ibn Kathir distinguishes two protections: al-Falaq against external evil (darkness, magic, the envy of the envier) and an-Nas against the inner whispering of Satan in people's breasts; together with al-Ikhlas, which affirms tawhid, they cover all three dimensions of harm, the evil eye included.`
        ], [
            `وعد النبي ﷺ: «تكفيك من كل شيء» (أبو داود 5082)، وقال في «الإخلاص» إنها تعدل ثلث القرآن (البخاري 5015).`,
            `ويفرّق ابن كثير في تفسير المعوّذتين بين حفظين: «الفلق» من الشرّ الخارجي (الليل إذا وقب، والسحر، والحسد)، و«الناس» من الوسوسة الداخلية في صدور الناس؛ ومع «الإخلاص» المقرّرة للتوحيد تغطي السور الثلاث جهات الشرّ كلّها، ومنها العين.`
        ])
    );

    D['protection:2'] = E(
        P([
            `Хауля бинт Хаким ас-Суламиййа (да будет доволен ею Аллах) слышала, как Посланник Аллаха ﷺ сказал: «Кто остановится в каком-либо месте и затем скажет: \"Прибегаю к совершенным словам Аллаха от зла того, что Он сотворил\", — ничто не повредит ему, пока он не отправится из этого места» (Сахих Муслим, 2708).`,
            `Хадис приведён в главе «О прибегании от дурного предопределения и несчастья». Буквальный смысл шире одного вечера: формула защищает при каждой остановке в пути; сборники азкаров предписывают читать её и трижды вечером.`
        ], [
            `Khawla bint Hakim as-Sulamiyyah (may Allah be pleased with her) heard the Messenger of Allah ﷺ say: «Whoever stops at a place and then says: \"I seek refuge in the perfect words of Allah from the evil of what He has created\" — nothing will harm him until he departs from that place» (Sahih Muslim 2708).`,
            `The hadith is in the chapter «Seeking refuge from an evil end and misery». Its literal sense is broader than a single evening: the formula protects at every stop on a journey, while the adhkar collections also prescribe it three times in the evening.`
        ], [
            `سمعت خولة بنت حكيم السلمية رضي الله عنها رسول الله ﷺ يقول: «من نزل منزلًا ثم قال: أعوذ بكلمات الله التامّات من شرّ ما خلق، لم يضرّه شيء حتى يرتحل من منزله ذلك» (صحيح مسلم 2708).`,
            `والحديث في باب «التعوّذ من سوء القضاء ودرك الشقاء»؛ ولفظه أعمّ من مساء واحد، فهو يحفظ عند كل نزول في السفر، وتأمر كتب الأذكار بقوله ثلاثًا في المساء أيضًا.`
        ]),
        P([
            `Пророк ﷺ обещал защиту на всё время пребывания в этом месте — до самого отъезда (Муслим, 2708). Это самая общая формула: «от зла того, что Он сотворил» объемлет любое творение, а не один названный вред.`,
            `Ибн Касир, толкуя «слова Аллаха» в тафсире 37:171–173 («Наше слово уже предшествовало рабам Нашим посланным... и поистине, Наше воинство непременно победит»), поясняет, что слово и обещание Аллаха непременно превозмогают; прибегание к ним — опора на Творца, а не на тварь.`
        ], [
            `The Prophet ﷺ promised protection for the whole stay in that place, until departure (Muslim 2708). It is the most comprehensive formula: «the evil of what He has created» embraces every creature, not one named harm.`,
            `Explaining «the words of Allah» in his tafsir of 37:171–173 («Our word has already preceded for Our servants, the messengers... and indeed Our host will surely be victorious»), Ibn Kathir notes that Allah's word and promise inevitably prevail; seeking refuge in them is reliance on the Creator, not on creation.`
        ], [
            `وعد النبي ﷺ بالحفظ طوال الإقامة في ذلك المنزل حتى الارتحال منه (مسلم 2708)، وهي أجمع صيغ الاستعاذة: «من شرّ ما خلق» يشمل كل مخلوق لا ضررًا بعينه.`,
            `ويبيّن ابن كثير معنى «كلمات الله» في تفسير الصافات (37: 171–173: «ولقد سبقت كلمتنا لعبادنا المرسلين... وإنّ جندنا لهم الغالبون») أن كلمة الله ووعده لا تُغلب؛ فالاستعاذة بها تعلّق بالخالق لا بالمخلوق.`
        ])
    );

    D['protection:3'] = E(
        P([
            `Абан ибн 'Усман передал со слов своего отца 'Усмана ибн 'Аффана (да будет доволен им Аллах): «Нет раба, который говорил бы утром каждого дня и вечером каждой ночи: \"С именем Аллаха, с которым ничто не причинит вреда ни на земле, ни на небе; Он — Слышащий, Знающий\" трижды, — и чтобы что-либо повредило ему» (Джами' ат-Тирмизи, 3388; Сунан Абу Давуд).`,
            `Сам Абан был поражён частичным параличом; когда один человек стал пристально на него смотреть, он сказал: «Хадис именно таков, как я передал, но в тот день я не произнёс этих слов — и Аллах привёл в исполнение Своё предопределение». Так в тексте закреплены и точное число «трижды», и оба времени суток.`
        ], [
            `Aban ibn 'Uthman narrated from his father 'Uthman ibn 'Affan (may Allah be pleased with him): «There is no servant who says in the morning of every day and the evening of every night: \"In the Name of Allah, with whose Name nothing on earth or in the heaven can cause harm; He is the Hearing, the Knowing\" three times, and then anything harms him» (Jami' at-Tirmidhi 3388; Sunan Abi Dawud).`,
            `Aban himself was struck with partial paralysis; when a man stared at him he said: «The hadith is exactly as I reported it, but I did not say it that day — and Allah carried out His decree». The text thus fixes both the exact count «three times» and both times of day.`
        ], [
            `روى أبان بن عثمان عن أبيه عثمان بن عفّان رضي الله عنه: «ما من عبد يقول في صباح كل يوم ومساء كل ليلة: بسم الله الذي لا يضرّ مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم ثلاث مرّات فيضرّه شيء» (جامع الترمذي 3388؛ سنن أبي داود).`,
            `وكان أبان قد أصابه طرفُ فالج، فجعل رجل ينظر إليه فقال: «أما إنّ الحديث كما حدّثتك، ولكني لم أقلها يومئذٍ ليمضي الله عليّ قدره»؛ فثبت في الخبر عدد «ثلاثًا» والوقتان معًا.`
        ]),
        P([
            `Пророк ﷺ обещал: трижды утром и вечером — и ничто не повредит ни на земле, ни на небе (ат-Тирмизи, 3388). В хадисе названо и точное число, а не «сколько придётся».`,
            `Имя Аллаха здесь — щит: мольба завершается именами «ас-Сами'у-ль-'Алим». Ибн Касир в тафсире Аят аль-Курси (2:255) поясняет, что знание Аллаха объемлет явное и сокрытое, поэтому защита распространяется и на тот вред, о котором человек даже не знает.`
        ], [
            `The Prophet ﷺ promised: three times morning and evening — and nothing on earth or in the heaven will harm (at-Tirmidhi 3388). The hadith specifies the exact count, not «as often as one likes».`,
            `Allah's Name is the shield here: the dua closes with «as-Sami' al-'Alim». In his tafsir of Ayat al-Kursi (2:255) Ibn Kathir explains that Allah's knowledge encompasses the manifest and the hidden, so the protection covers harm the person is not even aware of.`
        ], [
            `وعد النبي ﷺ: ثلاثًا صباحًا ومساءً فلا يضرّه شيء في الأرض ولا في السماء (الترمذي 3388)، وحدّد العدد لا ما يتيسّر.`,
            `اسم الله هنا هو الوقاية، وتُختم بـ«السميع العليم»؛ ويبيّن ابن كثير في تفسير آية الكرسي (2: 255) أن علم الله يحيط بالظاهر والخفيّ، فيشمل الحفظ ضررًا لا يعلمه العبد أصلًا.`
        ])
    );

    D['protection:4'] = E(
        P([
            `Ибн 'Аббас (да будет доволен ими Аллах) передал: Пророк ﷺ прибегал к этим словам за аль-Хасана и аль-Хусайна, говоря: «Прибегаю за вас двоих к совершенным словам Аллаха от всякого шайтана, от всякой ядовитой твари и от всякого дурного глаза» — и добавлял, что так же Ибрахим (мир ему) прибегал за Исма'ила и Исхака (Сахих аль-Бухари, «Книга пророков», глава об Исма'иле).`,
            `То есть защита детей не нововведение, а сунна, возведённая к самому Ибрахиму (мир ему): Пророк ﷺ перенёс её на своих внуков и объяснил сподвижникам её происхождение.`
        ], [
            `Ibn 'Abbas (may Allah be pleased with them both) reported: the Prophet ﷺ used to seek refuge with these words for al-Hasan and al-Husayn, saying «I seek refuge for you both in the perfect words of Allah from every devil, every venomous creature and every harmful eye» — adding that Ibrahim (peace be upon him) had done the same for Isma'il and Ishaq (Sahih al-Bukhari, Book of the Prophets, chapter on Isma'il).`,
            `Protecting children is therefore no innovation but a sunnah traced back to Ibrahim himself: the Prophet ﷺ applied it to his own grandsons and explained its origin to the Companions.`
        ], [
            `عن ابن عباس رضي الله عنهما: كان النبي ﷺ يعوّذ الحسن والحسين: «أعيذكما بكلمات الله التامّة من كل شيطان وهامّة ومن كل عين لامّة»، ويقول: «كان إبراهيم يعوّذ بها إسماعيل وإسحاق» (صحيح البخاري، كتاب أحاديث الأنبياء، باب ذكر إسماعيل).`,
            `فليس تحصين الأبناء محدثًا، بل سنّة مرفوعة إلى إبراهيم عليه السلام: نقلها النبي ﷺ إلى سبطيه وبيّن للصحابة أصلها.`
        ]),
        P([
            `Отдельной награды хадис не называет; обещанная защита — в самих словах: от всякого шайтана, от всякой ядовитой твари («хамма») и от всякого дурного глаза («'айнин лямматин»).`,
            `Ибн Касир в тафсире 113:5 («...и от зла завистника, когда он завидует») отдельно подтверждает, что дурной глаз реален и что защита от него — в словах Аллаха, а не в оберегах; мольба Пророка ﷺ называет глаз именно «лямма» — поражающим, пристальным.`
        ], [
            `The hadith names no separate reward; the promised protection lies in the words themselves: from every devil, every venomous creature («hammah») and every harmful eye («'aynin lammatin»).`,
            `In his tafsir of 113:5 («...and from the evil of the envier when he envies») Ibn Kathir explicitly confirms that the evil eye is real and that protection from it lies in the words of Allah, not in amulets; the Prophet's ﷺ dua calls the eye «lammah» — the piercing, fixed gaze.`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، والحفظ الموعود في نفس اللفظ: من كل شيطان، ومن كل «هامّة» ذات سمّ، ومن كل «عين لامّة».`,
            `ويؤكّد ابن كثير في تفسير الفلق (113: 5: «ومن شرّ حاسد إذا حسد») أن العين حقّ وأن الوقاية بكلمات الله لا بالتمائم؛ وسمّى النبي ﷺ العين «لامّة» أي التي تلمّ وتصيب بنظرتها.`
        ])
    );

    D['protection:5'] = E(
        P([
            `Аят ниспослан в мекканской суре «Ан-Нахль» (16:98): «Когда ты читаешь Коран, то прибегай к Аллаху от шайтана, побиваемого камнями [отверженного]». Ибн Касир поясняет: прибегание предписано до начала чтения, ибо шайтан старается внести наущение именно тогда, когда раб обращается к Корану.`,
            `Ибн Касир разбирает и слово «ар-раджим»: это отверженный, отогнанный от небес и лишённый всякого блага, побиваемый звёздами-камнями (по его тафсиру 67:5). Поэтому мольба — не формула вежливости, а просьба оградить чтение от того, кто по природе враждебен ему.`
        ], [
            `Revealed in the Meccan surah an-Nahl (16:98): «When you recite the Quran, seek refuge with Allah from Satan, the accursed». Ibn Kathir explains that the refuge is prescribed before reciting begins, for Satan tries to cast whispering precisely when a servant turns to the Quran.`,
            `Ibn Kathir also analyses «ar-rajim»: the outcast, driven from the heavens and stripped of every good, pelted with stones (per his tafsir of 67:5). The dua is thus not a courtesy formula but a plea to fence off recitation from one who is by nature hostile to it.`
        ], [
            `نزلت الآية في سورة النحل المكّية (16: 98): «فإذا قرأت القرآن فاستعذ بالله من الشيطان الرجيم». ويبيّن ابن كثير أن الاستعاذة مشروعة قبل الشروع في القراءة، لأن الشيطان يحرص على الوسوسة حين يُقبل العبد على القرآن.`,
            `وفسّر ابن كثير «الرجيم»: المطرود من السماء، الممنوع من كل خير، المرجوم بالشهب (كما في تفسير الملك 67: 5)؛ فالدعاء ليس مجاملةً بل سؤال أن تُحصن التلاوة ممّن هو عدوّ لها بطبعه.`
        ]),
        P([
            `Ибн Касир в тафсире 16:99–100 поясняет границы власти шайтана: «Воистину, нет у него власти над теми, которые уверовали и уповают на своего Господа; власть его лишь над теми, кто берёт его себе в покровители и придаёт Аллаху сотоварищей». Произносящий «а'узу...» разрывает именно эту связь.`,
            `Тот же Пророк ﷺ велел говорить «А'узу би-Лляхи мина-ш-шайтани-р-раджим» и при гневе: человеку, которого обидели, он сказал, что если тот произнесёт эти слова, гнев уйдёт (Сахих аль-Бухари) — защита относится не только к чтению Корана, но и к наущению в сердце.`
        ], [
            `In his tafsir of 16:99–100 Ibn Kathir sets the limit of Satan's power: «Indeed, he has no authority over those who believe and rely upon their Lord; his authority is only over those who take him as an ally and associate partners with Allah». Saying «a'udhu...» severs precisely that tie.`,
            `The same Prophet ﷺ also prescribed «A'udhu billahi minash-shaytanir-rajim» in anger: to a man who had been insulted he said that if he said these words his anger would leave (Sahih al-Bukhari) — the protection covers not only Quran recitation but whispering in the heart.`
        ], [
            `يحدّد ابن كثير في تفسير النحل (16: 99–100) سلطان الشيطان: «إنه ليس له سلطان على الذين آمنوا وعلى ربّهم يتوكّلون، إنما سلطانه على الذين يتولّونه والذين هم به مشركون»؛ وقائل «أعوذ...» يقطع هذه الصلة بعينها.`,
            `وأمر النبي ﷺ بالكلمة نفسها عند الغضب: قال لرجل شُتم «لو قالها لذهب عنه ما يجد» (صحيح البخاري)؛ فالحفظ ليس للتلاوة وحدها بل للوسوسة في القلب أيضًا.`
        ])
    );

    /* ---------- 8. ЗНАНИЯ И ОБЛЕГЧЕНИЕ В ДЕЛАХ ---------- */
    D['knowledge:0'] = E(
        P([
            `Аят ниспослан в мекканской суре «Та Ха» (20:114): «...и не спеши с Кораном, пока не завершится тебе его откровение, и говори: \"Господь мой, прибавь мне знания!\"». Ибн Касир поясняет повод: Пророк ﷺ, когда Джибриль приносил откровение, торопился повторять аяты вместе с ним, опасаясь забыть, — и Аллах велел ему не опережать ниспослание, а просить прибавления знания.`,
            `Тот же смысл закреплён в суре «Аль-Кийама» (75:16–19): «Не шевели своим языком, [о Мухаммад], чтобы поскорее запомнить его...»; Ибн Касир сводит оба места: собрание Корана и его запоминание обеспечивает Сам Аллах, а от раба требуется внимание и мольба.`
        ], [
            `Revealed in the Meccan surah Ta-Ha (20:114): «...and do not hasten with the Quran before its revelation is completed to you, and say: \"My Lord, increase me in knowledge!\"». Ibn Kathir explains the occasion: when Jibril brought revelation the Prophet ﷺ would hurry to repeat the verses along with him, fearing to forget — so Allah commanded him not to outrun the revelation but to ask for increase in knowledge.`,
            `The same meaning is fixed in Surah al-Qiyamah (75:16–19): «Move not your tongue with it, [O Muhammad], to hasten with it...»; Ibn Kathir joins both passages: the collection and memorisation of the Quran are guaranteed by Allah Himself, while the servant owes attentiveness and supplication.`
        ], [
            `نزلت الآية في سورة طه المكّية (20: 114): «ولا تعجل بالقرآن من قبل أن يُقضى إليك وحيه وقل ربّ زدني علمًا». يبيّن ابن كثير السبب: كان النبي ﷺ إذا نزل عليه جبريل بالوحي يبادر بتحريك لسانه معه مخافة النسيان، فأمره الله ألّا يسبق الوحي بل يسأل الزيادة في العلم.`,
            `والمعنى نفسه في القيامة (75: 16–19: «لا تحرّك به لسانك لتعجل به»)؛ ويجمع ابن كثير بين الموضعين: جمع القرآن وحفظه على الله، وعلى العبد الإصغاء والدعاء.`
        ]),
        P([
            `Ибн Касир делает из аята прямой вывод: если сам Пророк ﷺ, которому ниспосылалось откровение, был повелен просить «прибавь мне знания», то тем более это подобает всякому верующему; знание не исчерпывается, и прибавление его — от Аллаха.`,
            `Мольба учит адабу искания знания: начинать учение не с уверенности «я уже знаю», а с просьбы. В тафсире 58:11 («Аллах возвышает тех из вас, которые уверовали, и тех, кому даровано знание, на ступени») Ибн Касир поясняет, что возвышение знанием даётся Аллахом, а не присваивается самим человеком.`
        ], [
            `Ibn Kathir draws a direct conclusion: if the Prophet ﷺ himself, to whom revelation was sent down, was commanded to ask «increase me in knowledge», how much more does this befit every believer; knowledge is never exhausted, and its increase is from Allah.`,
            `The dua teaches the etiquette of learning: to begin not with «I already know» but with a request. In his tafsir of 58:11 («Allah will raise those who have believed among you and those who were given knowledge, by degrees») Ibn Kathir explains that elevation through knowledge is granted by Allah, not seized by the person.`
        ], [
            `يستخرج ابن كثير من الآية: إذا كان النبي ﷺ نفسه، وهو الذي ينزل عليه الوحي، مأمورًا بـ«ربّ زدني علمًا»، فغيره أولى؛ فالعلم لا ينفد والزيادة منه سبحانه.`,
            `وتعلّم الدعوة أدب الطلب: أن يُبدأ لا بـ«قد علمتُ» بل بالمسألة؛ ويقول ابن كثير في تفسير المجادلة (58: 11: «يرفع الله الذين آمنوا منكم والذين أوتوا العلم درجات») إن الرفعة بالعلم عطاء من الله لا يدّعيها العبد لنفسه.`
        ])
    );

    D['knowledge:1'] = E(
        P([
            `Мекканская сура «Та Ха» (20:25–28) передаёт мольбу Мусы (мир ему) сразу после повеления: «Иди к Фараону, ибо он преступил [всякую меру]» (20:24). Ибн Касир поясняет: перед встречей с самым надменным из людей пророк просил не могущества, а раскрытия груди, облегчения дела и ясности речи.`,
            `Просьба «развяжи узел на моём языке» восходит к преданию, которое Ибн Касир приводит со слов Ибн 'Аббаса: в детстве, когда Фараон испытывал младенца Мусу, тот взял в рот раскалённый уголь, и после этого на языке осталась заминка. Полную мольбу (20:29–32) он завершил просьбой послать брата Харуна помощником.`
        ], [
            `The Meccan surah Ta-Ha (20:25–28) records the prayer of Musa (peace be upon him) immediately after the command: «Go to Pharaoh, for he has transgressed» (20:24). Ibn Kathir explains: before meeting the most arrogant of men, the prophet asked not for power but for an expanded breast, an easy task and clear speech.`,
            `The plea «untie the knot from my tongue» goes back to a report Ibn Kathir cites from Ibn 'Abbas: as a child, when Pharaoh tested the infant Musa, he put a live coal in his mouth, and a hesitation of speech remained. He completed the full dua (20:29–32) by asking for his brother Harun as a helper.`
        ], [
            `تحكي سورة طه المكّية (20: 25–28) دعاء موسى عليه السلام عقب الأمر مباشرة: «اذهب إلى فرعون إنه طغى» (20: 24). يبيّن ابن كثير أن النبيّ سأل قبل لقاء أعتى الناس لا القوّة بل انشراح الصدر وتيسير الأمر وبيان اللسان.`,
            `وسؤال «احلل عقدة من لساني» يرجع إلى أثر يورده ابن كثير عن ابن عباس: أن موسى وهو رضيع وضع في فيه جمرةً حين امتحنه فرعون فبقيت في لسانه عُقدة؛ وختم الدعاء كاملًا (20: 29–32) بطلب أخيه هارون وزيرًا.`
        ]),
        P([
            `Аллах ответил сразу: «Просьба твоя удовлетворена, о Муса» (20:36). Ибн Касир видит в трёх просьбах устройство любого важного дела: терпение и широта сердца («ишрах ли садри»), устранение препятствий («йассир ли амри») и речь, которую «они поймут».`,
            `Поэтому мольбу читают перед выступлением, экзаменом, переговорами и любым делом, где важны ясность и спокойствие; она помогает не просить «чтобы всё получилось само», а просить у Аллаха именно тех трёх качеств, которые Он даровал Мусе.`
        ], [
            `Allah answered at once: «Your request has been granted, O Musa» (20:36). Ibn Kathir sees in the three pleas the structure of any important task: patience and breadth of heart («ishrah li sadri»), removal of obstacles («yassir li amri») and speech «that they may understand».`,
            `Hence the dua is recited before a speech, an exam, a negotiation or any task demanding clarity and calm; it teaches one not to ask «that it all work out by itself» but to ask Allah for the very three qualities He granted Musa.`
        ], [
            `أجاب الله فورًا: «قد أوتيت سؤلك يا موسى» (20: 36). ويرى ابن كثير في المسائل الثلاث نظام كل أمر مهمّ: سعة الصدر والصبر «اشرح لي صدري»، وإزالة العوائق «يسّر لي أمري»، وبيانًا «يفقهوا قولي».`,
            `ولذلك تُقرأ قبل الخطابة والامتحان والمفاوضة وكل عمل يحتاج وضوحًا وسكينة؛ تعلّم ألّا يُسأل «أن يتمّ الأمر من نفسه» بل أن تُطلب من الله الصفات الثلاث التي وهبها لموسى.`
        ])
    );

    D['knowledge:2'] = E(
        P([
            `Умм Саляма (да будет доволен ею Аллах) передала: «Посланник Аллаха ﷺ, совершив утреннюю [фаджр] молитву, говорил: \"О Аллах, прошу у Тебя знания полезного, удела благого и дела принятого\"» (Сунан Ибн Маджа; Муснад Ахмад).`,
            `Хадис приведён среди мольб после намаза; Пророк ﷺ соединил в одной короткой фразе три просьбы — о знании, об уделе и о принятии дел, поставив их именно в этом порядке: знание переходит в дело, а дело нуждается в том, чтобы быть принятым.`
        ], [
            `Umm Salamah (may Allah be pleased with her) reported: «When the Messenger of Allah ﷺ had prayed the dawn [fajr] prayer he would say: \"O Allah, I ask You for beneficial knowledge, goodly provision and an accepted deed\"» (Sunan Ibn Majah; Musnad Ahmad).`,
            `The hadith stands among the supplications after prayer; in one short phrase the Prophet ﷺ joined three requests — knowledge, provision and acceptance of deeds — in that very order: knowledge passes into action, and action needs to be accepted.`
        ], [
            `عن أم سلمة رضي الله عنها: «كان رسول الله ﷺ إذا صلّى الصبح قال: اللهم إني أسألك علمًا نافعًا ورزقًا طيّبًا وعملًا متقبّلًا» (سنن ابن ماجه؛ مسند أحمد).`,
            `والحديث في أدعية ما بعد الصلاة؛ جمع النبي ﷺ في جملة يسيرة ثلاث مسائل: العلم والرزق وقبول العمل، بهذا الترتيب: العلم يصير عملًا، والعمل يحتاج أن يُتقبّل.`
        ]),
        P([
            `Отдельной награды хадис не называет; просьба «'ильман нафи'ан» — не просто о знании, а о таком, что приносит пользу. Пророк ﷺ сообщил, что после смерти человека дела его прекращаются, кроме трёх, и одно из них — «знание, которым пользуются» (Сахих Муслим, 1631): вот награда полезного знания.`,
            `Ибн Касир в тафсире 2:201 объясняет «хасану» этого мира как полезное знание, дозволенный удел и праведное дело; мольба Пророка ﷺ почти буквально перечисляет те же три дара и добавляет «мутакъаббалян» — принятым, ибо дело без принятия не приносит плода.`
        ], [
            `The hadith names no separate reward; the plea «'ilman nafi'an» asks not merely for knowledge but for such as benefits. The Prophet ﷺ taught that when a person dies his deeds end except three, one of them being «knowledge by which people benefit» (Sahih Muslim 1631) — that is the reward of useful knowledge.`,
            `In his tafsir of 2:201 Ibn Kathir explains the «good» of this world as beneficial knowledge, lawful provision and righteous deeds; the Prophet's ﷺ dua lists almost the same three gifts and adds «mutaqabbalan» — accepted, for a deed without acceptance bears no fruit.`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، و«علمًا نافعًا» ليس سؤال العلم بل سؤال ما ينفع منه. وقد أخبر النبي ﷺ أن عمل ابن آدم ينقطع بموته إلا من ثلاث، منها «علم يُنتفع به» (صحيح مسلم 1631)، فذاك أجر العلم النافع.`,
            `ويفسّر ابن كثير «الحسنة» في الدنيا (البقرة 2: 201) بالعلم النافع والرزق الحلال والعمل الصالح؛ فدعاء النبي ﷺ يعدّد العطايا الثلاث نفسها ويزيد «متقبّلًا»، إذ لا ثمرة لعملٍ لم يُتقبّل.`
        ])
    );

    D['knowledge:3'] = E(
        P([
            `Хадис приводят ат-Тирмизи и Ибн Маджа в главах о мольбах о знании: Пророк ﷺ обращался к Аллаху со словами «О Аллах, дай мне пользу от того, чему Ты меня научил, научи меня тому, что принесёт мне пользу, и прибавь мне знания».`,
            `В отличие от многих зикров, здесь три просьбы выстроены по кругу: сначала — польза от уже данного, затем — знание, которое пригодится, и наконец — прибавление. Это не слова по отдельному случаю, а одна из постоянных мольб Пророка ﷺ о знании.`
        ], [
            `At-Tirmidhi and Ibn Majah transmit the hadith in their chapters on supplications for knowledge: the Prophet ﷺ would call on Allah with the words «O Allah, benefit me by what You have taught me, teach me what benefits me, and increase me in knowledge».`,
            `Unlike many adhkar, the three requests form a circle: first benefit from what is already given, then knowledge that will be of use, and finally increase. These are not words for a single occasion but one of the Prophet's ﷺ constant prayers for knowledge.`
        ], [
            `روى الترمذي وابن ماجه في أبواب الدعاء في طلب العلم أن النبي ﷺ كان يقول: «اللهم انفعني بما علّمتني، وعلّمني ما ينفعني، وزدني علمًا».`,
            `وبخلاف كثير من الأذكار جاءت المسائل الثلاث على نسق دائري: الانتفاع بما حصل، ثم علمٌ ينفع، ثم الزيادة؛ فليست كلمةً لمناسبة بعينها بل من أدعيته ﷺ الدائمة في العلم.`
        ]),
        P([
            `Отдельной награды хадис не называет; польза — в том, что мольба отделяет знание от пользы: можно знать много и не извлечь из этого блага, и Пророк ﷺ просит защиты именно от такого знания.`,
            `Ибн Касир в тафсире 20:114 («...и говори: \"Господь мой, прибавь мне знания!\"») поясняет, что просить прибавления велено даже Пророку ﷺ; мольба завершается теми же словами «ва зидни 'ильман» и тем самым связывает две сунны — просьбу о пользе и просьбу о прибавлении.`
        ], [
            `The hadith names no separate reward; its benefit is that the dua separates knowledge from benefit: one may know much and draw no good from it, and the Prophet ﷺ seeks protection from precisely that knowledge.`,
            `In his tafsir of 20:114 («...and say: \"My Lord, increase me in knowledge!\"») Ibn Kathir explains that even the Prophet ﷺ was commanded to ask for increase; the dua ends with the same words «wa zidni 'ilman», thus joining two sunnahs — the plea for benefit and the plea for increase.`
        ], [
            `لم يذكر الحديث أجرًا بعينه، وفائدته أنه يفرق بين العلم والانتفاع: قد يعلم المرء كثيرًا ولا يجني خيرًا، والنبي ﷺ يستعيذ من مثل هذا العلم.`,
            `ويبيّن ابن كثير في تفسير طه (20: 114: «وقل ربّ زدني علمًا») أن النبي ﷺ نفسه أُمر بطلب الزيادة، وتُختم الدعوة باللفظ نفسه «وزدني علمًا»، فتصل سنّتين: سؤال النفع وسؤال الزيادة.`
        ])
    );

    D['knowledge:4'] = E(
        P([
            `Анас ибн Малик (да будет доволен им Аллах) передал, что Посланник Аллаха ﷺ произносил эту мольбу в пути и при затруднении: «О Аллах, нет лёгкого, кроме того, что Ты сделал лёгким; и Ты делаешь трудное лёгким, когда пожелаешь» (Сахих Ибн Хиббан; «'Амаль аль-йаум ва-ль-ляйля» Ибн ас-Сунни).`,
            `Слово «аль-хазн» в хадисе означает неровное, тяжёлое дело или трудную местность; Пророк ﷺ противопоставляет ему «сахль» — ровное, лёгкое. Мольба не привязана к одному событию: она дана как общее правило на любую трудность.`
        ], [
            `Anas ibn Malik (may Allah be pleased with him) reported that the Messenger of Allah ﷺ said this supplication while travelling and in difficulty: «O Allah, there is nothing easy except what You make easy, and You make what is rough easy when You will» (Sahih Ibn Hibban; Ibn as-Sunni's 'Amal al-Yawm wal-Laylah).`,
            `The word «al-hazn» in the hadith means an uneven, hard task or rough ground; the Prophet ﷺ sets against it «sahl» — level and easy. The dua is not tied to one incident: it is given as a general rule for every difficulty.`
        ], [
            `عن أنس بن مالك رضي الله عنه أن رسول الله ﷺ كان يقول في السفر وعند المشقّة: «اللهم لا سهل إلا ما جعلته سهلًا، وأنت تجعل الحَزْن إذا شئت سهلًا» (صحيح ابن حبّان؛ «عمل اليوم والليلة» لابن السنّي).`,
            `و«الحَزْن» في الحديث هو الأمر الوعر أو الأرض الصعبة، يقابله «السهل»؛ والدعاء لم يقيّد بحادثة، بل جاء قاعدةً عامّة لكل مشقّة.`
        ]),
        P([
            `Отдельной награды хадис не называет; обещание заключено в самих словах: «Ты делаешь трудное лёгким, когда пожелаешь» — облегчение не от нашего усердия, а от воли Аллаха.`,
            `Ибн Касир в тафсире 94:5–6 («Поистине, за трудностью — облегчение, поистине, за трудностью — облегчение») поясняет, что облегчение приходит от Аллаха вслед за стеснением, и повторение аята утверждает это наверняка; мольба Пророка ﷺ просит именно этого выхода, не отрицая самой трудности.`
        ], [
            `The hadith names no separate reward; the promise lies in the words: «You make what is rough easy when You will» — ease comes not from our effort but from Allah's will.`,
            `In his tafsir of 94:5–6 («For indeed, with hardship will be ease; indeed, with hardship will be ease») Ibn Kathir explains that relief comes from Allah on the heels of constraint, and the repetition of the verse makes it certain; the Prophet's ﷺ dua asks for that very outlet without denying the difficulty itself.`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، والوعد في لفظه: «وأنت تجعل الحَزْن إذا شئت سهلًا»؛ فالتيسير لا من حول العبد بل من مشيئة الله.`,
            `ويقول ابن كثير في تفسير الشرح (94: 5–6: «فإن مع العسر يسرًا إن مع العسر يسرًا») إن الفرج يأتي من الله عقب الضيق، وتكرار الآية يؤكّده؛ ودعاء النبي ﷺ يطلب هذا المخرج بعينه ولا ينكر المشقّة نفسها.`
        ])
    );

    D['knowledge:5'] = E(
        P([
            `Зайд ибн Аркъам (да будет доволен им Аллах) говорил: «Я говорю вам только то, что говорил Посланник Аллаха ﷺ» — и передавал эту мольбу: «О Аллах, прибегаю к Тебе от знания, которое не приносит пользы, от сердца, которое не смиряется, от души, которая не насыщается, и от мольбы, на которую не отвечают» (Сахих Муслим, 2722).`,
            `Хадис открывает главу «Прибегание от знания, которое не приносит пользы...» в «Книге поминания и мольбы»; Пророк ﷺ произносил его регулярно, а не в ответ на отдельное событие — четыре состояния перечислены как то, от чего следует просить защиты постоянно.`
        ], [
            `Zayd ibn Arqam (may Allah be pleased with him) used to say: «I tell you only what the Messenger of Allah ﷺ used to say» — and he transmitted this dua: «O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that does not humble itself, from a soul that is never satisfied, and from a supplication that is not answered» (Sahih Muslim 2722).`,
            `The hadith opens the chapter «Seeking refuge from knowledge that does not benefit...» in the Book of Remembrance and Supplication; the Prophet ﷺ said it regularly, not in response to an incident — the four states are listed as things from which protection should be sought constantly.`
        ], [
            `كان زيد بن أرقم رضي الله عنه يقول: «لا أقول لكم إلا كما كان رسول الله ﷺ يقول»، ثم يروي: «اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يُستجاب لها» (صحيح مسلم 2722).`,
            `والحديث في صدر باب «الاستعاذة من علم لا ينفع...» من كتاب الذكر والدعاء؛ وكان النبي ﷺ يداوم عليه لا في حادثة بعينها، فالأحوال الأربع ممّا يُستعاذ منه دائمًا.`
        ]),
        P([
            `Защита, о которой просил Пророк ﷺ, конкретна: от бесплодного знания, от сердца без смирения, от ненасытной души и от мольбы без ответа (Муслим, 2722) — то есть от того, чтобы дела и слова остались без принятия.`,
            `Ибн Касир в тафсире 2:44 («Неужели вы станете призывать людей к добродетели, забывая о самих себе, когда вы читаете Писание?») поясняет, что знание без дела становится доводом против человека, а не за него; мольба оберегает именно от такого, формального знания.`
        ], [
            `The protection the Prophet ﷺ sought is specific: from fruitless knowledge, a heart without humility, an insatiate soul and an unanswered supplication (Muslim 2722) — in short, from deeds and words left unaccepted.`,
            `In his tafsir of 2:44 («Do you order righteousness of the people and forget yourselves while you recite the Scripture?») Ibn Kathir explains that knowledge without action becomes an argument against a person rather than for him; the dua guards precisely against such formal knowledge.`
        ], [
            `الحفظ الذي سأله النبي ﷺ محدّد: من علم بلا ثمرة، وقلب لا يخشع، ونفس لا تشبع، ودعوة لا تُجاب (مسلم 2722)، أي أن يبقى العمل والقول بغير قبول.`,
            `ويبيّن ابن كثير في تفسير البقرة (2: 44: «أتأمرون الناس بالبرّ وتنسون أنفسكم وأنتم تتلون الكتاب») أن العلم بلا عمل يكون حجّةً على صاحبه لا له؛ والدعاء يحمي من هذا العلم الصوري خاصةً.`
        ])
    );

    /* ---------- 9. О СЕМЬЕ, РОДИТЕЛЯХ И ПОТОМСТВЕ ---------- */
    D['family:0'] = E(
        P([
            `Аят из мекканской суры «Аль-Исра» (17:23–24). Ибн Касир поясняет: сразу после повеления «Твой Господь предписал вам не поклоняться никому, кроме Него, и делать добро родителям» Аллах запрещает даже сказать им «уфф», не кричать на них и говорить им «благое слово», а затем приводит саму мольбу, которой эту доброту следует сопровождать.`,
            `То есть мольба ниспослана не как отдельная просьба о детях, а как завершение заповеди об ихсане к родителям: после запрета упрёка верующему велено активно просить за них милости — «и говори: \"Господь мой! Помилуй их...\"» (17:24).`
        ], [
            `A verse from the Meccan surah al-Isra (17:23–24). Ibn Kathir explains: immediately after the command «Your Lord has decreed that you worship none but Him and that you be kind to parents», Allah forbids even saying «uff» to them, rebuking them, and commands noble speech — then He gives the very supplication with which that kindness should be accompanied.`,
            `The dua was thus revealed not as an isolated request but as the completion of the command to excel toward parents: after the prohibition of reproach, the believer is told to actively ask mercy for them — «and say: \"My Lord! Have mercy upon them...\"» (17:24).`
        ], [
            `آية من سورة الإسراء المكّية (17: 23–24). يبيّن ابن كثير أنها جاءت عقب «وقضى ربّك ألّا تعبدوا إلا إيّاه وبالوالدين إحسانًا»، فنهى عن «أفّ» لهما والنهر وأمر بالقول الكريم، ثم ساق الدعاء الذي يُقرن به الإحسان.`,
            `فليست الدعوة طلبًا مستقلًّا، بل تمام وصيّة الإحسان: بعد النهي عن الزجر أُمر المؤمن أن يسأل لهما الرحمة فعلًا: «وقل ربّ ارحمهما...» (17: 24).`
        ]),
        P([
            `Ибн Касир толкует «кама раббайани сагиран» («ведь они растили меня ребёнком»): милость просят соразмерно заботе, которую родители оказали, когда ребёнок был совершенно беспомощен; аят напоминает о милости за милость и не позволяет забыть долга перед ними.`,
            `В тафсире 31:14 («Благодари Меня и своих родителей») Ибн Касир указывает, что благодарность родителям поставлена сразу после благодарности Аллаху; мольба — лучший её вид, особенно когда родители уже не могут принять помощь или ушли из этого мира.`
        ], [
            `Ibn Kathir explains «kama rabbayani saghiran» («as they raised me when I was small»): mercy is asked in proportion to the care parents showed when the child was utterly helpless; the verse repays mercy with mercy and forbids forgetting the debt owed them.`,
            `In his tafsir of 31:14 («Be grateful to Me and to your parents») Ibn Kathir notes that gratitude to parents is placed directly after gratitude to Allah; the dua is its finest form, especially when parents can no longer receive help or have passed away.`
        ], [
            `يفسّر ابن كثير «كما ربّياني صغيرًا»: تُسأل الرحمة بقدر العناية التي بذلاها حين كان الولد عاجزًا كلّ العجز؛ فالآية تردّ الجميل بالجميل ولا تُنسى الحقّ.`,
            `ويقول ابن كثير في تفسير لقمان (31: 14: «أن اشكر لي ولوالديك») إن شكر الوالدين جاء عقب شكر الله مباشرةً؛ والدعاء أفضل وجوهه، لا سيّما إذا كبرا أو فارقا الدنيا فلم يعُد ينفعهما إلا الدعاء.`
        ])
    );

    D['family:1'] = E(
        P([
            `Аят из мекканской суры «Аль-Фуркъан» (25:74), в конце перечисления качеств «рабов Милостивого», которое начинается с 25:63. Ибн Касир поясняет: после описания их смирения, ночного поклонения, умеренности в расходах и отказа от грехов Аллах приводит их мольбу о семье — и ею же завершает весь перечень (25:74–76).`,
            `«Къуррату а'йун» (отрада глаз), по Ибн Касиру, — это когда супруги и дети послушны Аллаху и радуют верующего своей праведностью, а не просто своим присутствием; поэтому просьба обращена к качеству семьи, а не к её численности.`
        ], [
            `A verse from the Meccan surah al-Furqan (25:74), at the close of the list of the «servants of the Most Merciful» that begins at 25:63. Ibn Kathir explains: after describing their humility, night worship, moderation in spending and avoidance of sin, Allah quotes their prayer for family — and with it concludes the whole catalogue (25:74–76).`,
            `«Qurrata a'yun» (joy of the eyes), according to Ibn Kathir, is when spouses and children obey Allah and gladden the believer by their righteousness, not merely by their presence; the request therefore concerns the family's quality, not its size.`
        ], [
            `آية من سورة الفرقان المكّية (25: 74) في ختام صفات «عباد الرحمن» التي تبدأ من (25: 63). يبيّن ابن كثير أن الله بعد ذكر هَونهم وقيام الليل واقتصادهم في النفقة واجتنابهم الكبائر ساق دعاءهم في الأهل والذرية، وبه ختم الصفات كلّها (25: 74–76).`,
            `و«قرّة أعين» عند ابن كثير أن يكون الزوج والولد طائعين لله يسرّون المؤمن بصلاحهم لا بمجرّد وجودهم؛ فالمسألة عن صلاح الأسرة لا عن كثرتها.`
        ]),
        P([
            `Ибн Касир толкует «ва-дж'альна ли-ль-муттакъина имаман» («сделай нас примером для богобоязненных»): они просят быть образцом в добре, чтобы и сами они, и их семьи указывали на наставление; просьба о потомстве тем самым соединена с просьбой о благочестии всего дома.`,
            `В тафсире 25:74 Ибн Касир приводит толкование Ибн 'Аббаса и аль-Хасана: «отрада глаз» — праведное потомство. Аят помогает верующему мерить семейное счастье не числом детей и не достатком, а тем, радуют ли они его перед Аллахом.`
        ], [
            `Ibn Kathir explains «waj'alna lil-muttaqina imaman» («make us an example for the righteous»): they ask to be a model in good, so that they and their families alike point to guidance; the plea for offspring is thus joined to a plea for the piety of the whole household.`,
            `In his tafsir of 25:74 Ibn Kathir cites the interpretation of Ibn 'Abbas and al-Hasan: «joy of the eyes» is righteous offspring. The verse teaches the believer to measure family happiness not by the number of children or by wealth, but by whether they please him before Allah.`
        ], [
            `يفسّر ابن كثير «واجعلنا للمتّقين إمامًا»: سألوا أن يكونوا قدوةً في الخير، فيدلّوا هم وأهلهم على الهدى؛ فاقترن سؤال الذرية بسؤال صلاح البيت كلّه.`,
            `ويورد ابن كثير في تفسير الفرقان (25: 74) عن ابن عباس والحسن أن «قرّة العين» هي الولد الصالح؛ فالآية تعلّم ألّا يُقاس سعد الأسرة بكثرة الولد ولا بالمال، بل بما يسرّ المؤمن عند الله.`
        ])
    );

    D['family:2'] = E(
        P([
            `Аят из мекканской суры «Ас-Саффат» (37:100), внутри рассказа об Ибрахиме (мир ему). Ибн Касир поясняет: после того как пророк оставил свой народ и сказал «Воистину, я ухожу к моему Господу, Который наставит меня» (37:99), он попросил у Аллаха не просто сына, а «потомство из числа праведных».`,
            `Ответ пришёл сразу: «И Мы обрадовали его кротким юношей» (37:101). Ибн Касир разбирает, о ком весть — об Исма'иле (по мнению большинства, которому следует контекст жертвоприношения) или об Исхаке, — и подчёркивает главное: Аллах даровал не просто ребёнка, а ребёнка с качеством «хильм» (кротость).`
        ], [
            `A verse from the Meccan surah as-Saffat (37:100), within the story of Ibrahim (peace be upon him). Ibn Kathir explains: after the prophet left his people saying «Indeed, I am going to my Lord; He will guide me» (37:99), he asked Allah not merely for a son but for «offspring from among the righteous».`,
            `The answer came at once: «So We gave him glad tidings of a forbearing youth» (37:101). Ibn Kathir discusses whether the tidings concern Isma'il (the majority view, followed by the context of the sacrifice) or Ishaq, and stresses the point: Allah granted not just a child but a child with the quality of «hilm» (forbearance).`
        ], [
            `آية من سورة الصافات المكّية (37: 100) ضمن قصّة إبراهيم عليه السلام. يبيّن ابن كثير أنه لمّا اعتزل قومه وقال «إني ذاهب إلى ربّي سيهدين» (37: 99) سأل الله لا مجرّد ولد بل «ذرية من الصالحين».`,
            `فجاءته البشرى فورًا: «فبشّرناه بغلام حليم» (37: 101). ويذكر ابن كثير الخلاف: أهو إسماعيل (قول الأكثر، ويؤيّده سياق الذبح) أم إسحاق، ويؤكّد المقصد: وهب الله لا ولدًا فقط بل ولدًا بصفة «الحلم».`
        ]),
        P([
            `Ибн Касир подчёркивает слово «мина-с-салихин»: пророк просил не количества потомства, а его праведности; мольба учит формулировать просьбу о детях точно так же — о благочестии ребёнка, а не только о его появлении.`,
            `В тафсире 37:100–101 Ибн Касир связывает это с тем, что праведное потомство продолжает дело родителя после него; аят помогает верующему вверить Аллаху и срок дара, и качества будущего ребёнка, как это сделал Ибрахим (мир ему).`
        ], [
            `Ibn Kathir stresses the word «minas-salihin»: the prophet asked not for numerous offspring but for their righteousness; the dua teaches one to frame a request for children the same way — for the child's piety, not merely for his arrival.`,
            `In his tafsir of 37:100–101 Ibn Kathir links this to righteous offspring continuing a parent's work after him; the verse helps the believer entrust to Allah both the timing of the gift and the qualities of the future child, as Ibrahim (peace be upon him) did.`
        ], [
            `يؤكّد ابن كثير لفظ «من الصالحين»: لم يسأل النبيّ كثرة الذرية بل صلاحها؛ فالدعاء يعلّم أن تُصاغ المسألة في الولد هكذا: في تقواه لا في مجيئه وحده.`,
            `ويربط ابن كثير في تفسير الصافات (37: 100–101) بين ذلك وبأن الولد الصالح يمتدّ به عمل والده بعده؛ فالآية تعين المؤمن أن يُسلّم لله أجل العطاء وصفات الولد كما فعل إبراهيم عليه السلام.`
        ])
    );

    D['family:3'] = E(
        P([
            `Аят из мекканской суры «Аль-Анбия» (21:89), в рассказе о Закарии (мир ему). Ибн Касир поясняет: пророк воззвал в старости, когда жена его была бесплодна, с просьбой не оставить его «фардан» — одиноким, без наследника, который продолжит призыв; и назвал Аллаха «лучшим из наследующих».`,
            `Ответ Коран ставит рядом: «И Мы ответили ему, и даровали ему Йахйу, и сделали для него жену его пригодной [к зачатию]» (21:90). Ибн Касир отмечает, что Аллах исправил бесплодие жены и наделил Йахйу мудростью ещё в детстве (19:12) — просьба была услышана целиком.`
        ], [
            `A verse from the Meccan surah al-Anbiya (21:89), in the story of Zakariyya (peace be upon him). Ibn Kathir explains: the prophet called out in old age, when his wife was barren, asking not to be left «fardan» — alone, without an heir to continue the call — and named Allah «the best of inheritors».`,
            `The Quran places the answer beside it: «So We responded to him, gave him Yahya, and made his wife fit [to conceive] for him» (21:90). Ibn Kathir notes that Allah remedied the wife's barrenness and endowed Yahya with wisdom while still a child (19:12) — the plea was answered in full.`
        ], [
            `آية من سورة الأنبياء المكّية (21: 89) في قصّة زكريّا عليه السلام. يبيّن ابن كثير أنه نادى بعد الكبر وامرأته عاقر، يسأل ألّا يُترك «فردًا» بلا وارث يحمل الدعوة، وسمّى الله «خير الوارثين».`,
            `وجعل القرآن الإجابة إلى جانبها: «فاستجبنا له ووهبنا له يحيى وأصلحنا له زوجه» (21: 90). ويذكر ابن كثير أن الله أزال عُقمها وآتى يحيى الحكم صبيًّا (19: 12)، فاستُجيب الدعاء كاملًا.`
        ]),
        P([
            `Ибн Касир толкует «ля тазарни фардан»: просьба не о богатстве и не о славе, а о том, чтобы после пророка остался кто-то, кто продолжит дело Аллаха; это одна из самых личных и вместе с тем самых бескорыстных мольб Корана.`,
            `Слова «анта хайру-ль-варисин» Ибн Касир объясняет так: всякое наследие в конечном счёте возвращается к Аллаху, поэтому просящий вверяет Ему и саму просьбу, и её срок; аят учит обращаться к Нему даже в том, в чём почти не осталось надежды.`
        ], [
            `Ibn Kathir explains «la tadarni fardan»: the request is not for wealth or fame but that someone remain after the prophet to continue Allah's work; it is among the most personal and at the same time most selfless prayers of the Quran.`,
            `Ibn Kathir explains «anta khayrul-warithin» thus: all inheritance ultimately returns to Allah, so the supplicant entrusts to Him both the request and its timing; the verse teaches turning to Him even in what seems almost hopeless.`
        ], [
            `يفسّر ابن كثير «لا تذرني فردًا»: ليست مسألة مال ولا جاه، بل أن يبقى بعده من يحمل أمر الله؛ فهي من أخصّ دعوات القرآن وأبعدها عن المنفعة.`,
            `و«أنت خير الوارثين» عند ابن كثير: كل ميراث يؤول إلى الله آخرًا، فيُسلّم إليه الداعي المسألة وأجلها معًا؛ والآية تعلّم الرجوع إليه فيما كاد اليأس يُطبق عليه.`
        ])
    );

    D['family:4'] = E(
        P([
            `Аят из мекканской суры «Нух» (71:28), в конце мольбы пророка Нуха (мир ему) после девятисот пятидесяти лет призыва (29:14). Ибн Касир поясняет: когда народ отверг его и он воззвал «Господь мой! Не оставляй на земле ни одного из неверующих...» (71:26–27), он переходит от просьбы о наказании к просьбе о прощении — для себя и для верующих.`,
            `Мольба устроена по кругу, который расширяется: сам Нух, его родители, «тот, кто вошёл в мой дом верующим», затем «все верующие мужчины и женщины», и в конце — «а нечестивцам не прибавляй, кроме погибели» (71:28). Ибн Касир видит здесь соединение строгости к упорствующему неверию и милости к верующим.`
        ], [
            `A verse from the Meccan surah Nuh (71:28), at the end of the prayer of the Prophet Nuh (peace be upon him) after nine hundred and fifty years of calling (29:14). Ibn Kathir explains: when his people rejected him and he cried «My Lord! Do not leave upon the earth a single disbeliever...» (71:26–27), he moves from a plea for punishment to a plea for forgiveness — for himself and the believers.`,
            `The dua is built as a widening circle: Nuh himself, his parents, «whoever enters my house as a believer», then «all believing men and women», and finally «and do not increase the wrongdoers except in ruin» (71:28). Ibn Kathir sees here severity toward obstinate disbelief joined with mercy toward the believers.`
        ], [
            `آية من سورة نوح المكّية (71: 28) في ختام دعاء نوح عليه السلام بعد «ألف سنة إلا خمسين عامًا» (29: 14). يبيّن ابن كثير أنه لمّا كذّبه قومه وقال «ربّ لا تذر على الأرض من الكافرين ديّارًا» (71: 26–27) انتقل من سؤال العذاب إلى سؤال المغفرة له وللمؤمنين.`,
            `وجاء الدعاء على دوائر تتّسع: نوح، ثم والداه، ثم «من دخل بيتي مؤمنًا»، ثم «المؤمنين والمؤمنات»، وخُتم بـ«ولا تزد الظالمين إلا تبارًا» (71: 28)؛ ويرى ابن كثير فيه الجمع بين الشدّة على الكفر المعاند والرحمة بالمؤمنين.`
        ]),
        P([
            `Ибн Касир толкует «дахаля байтийа му'минан» как всякого, кто вошёл в дом Нуха с верой — по ряду толкований, в его жилище или в его собрание; главное, что прощение просится не по кровному родству, а по вере.`,
            `Аят помогает верующему не замыкать мольбу на своей семье: Пророк ﷺ также учил, что мольба мусульманина за брата по вере в его отсутствие принимается, и ангел говорит: «Аминь, и тебе того же» (Сахих Муслим) — просьба Нуха объемлет всю общину.`
        ], [
            `Ibn Kathir explains «dakhala baytiya mu'minan» as everyone who entered Nuh's house in faith — according to some readings, his dwelling or his assembly; the point is that forgiveness is asked not by blood but by faith.`,
            `The verse helps the believer not confine his dua to his own family: the Prophet ﷺ also taught that a Muslim's supplication for his brother in his absence is answered, the angel saying «Amin, and the same for you» (Sahih Muslim) — Nuh's plea embraces the whole community.`
        ], [
            `يفسّر ابن كثير «من دخل بيتي مؤمنًا» بكل من دخل دار نوح على الإيمان، وقيل مجلسه؛ والمقصد أن المغفرة سُئلت بالإيمان لا بالنسب.`,
            `وتعين الآية على ألّا يحصر المؤمن دعاءه في أهله: فقد أخبر النبي ﷺ أن دعوة المسلم لأخيه بظهر الغيب مستجابة، ويقول المَلَك: «آمين ولك بمثل» (صحيح مسلم)؛ فدعاء نوح يعمّ الأمّة.`
        ])
    );

    D['family:5'] = E(
        P([
            `Аят из мекканской суры «Аль-Ахкъаф» (46:15), после наставления о матери, которая вынашивала и кормила ребёнка, и о тридцати месяцах до отнятия от груди; сказано, что когда человек достигает сорока лет, он просит: «Господь мой! Внуши мне благодарить за милость Твою...».`,
            `Ибн Касир приводит среди толкований и мнение, что аят ниспослан об Абу Бакре ас-Сиддике (да будет доволен им Аллах): он достиг сорока лет, оба его родителя были верующими, а потомство — праведным. Основной же смысл аята, по Ибн Касиру, общий: это мольба всякого праведного человека о своих родителях и детях.`
        ], [
            `A verse from the Meccan surah al-Ahqaf (46:15), following the reminder of the mother who bore and suckled the child and of the thirty months until weaning; when a person reaches forty, he asks: «My Lord! Inspire me to be grateful for Your favour...».`,
            `Among the interpretations Ibn Kathir cites the view that the verse was revealed concerning Abu Bakr as-Siddiq (may Allah be pleased with him): he reached forty, both his parents were believers, and his offspring were righteous. The verse's main sense, however, is general in Ibn Kathir's tafsir: it is the prayer of every righteous person for his parents and children.`
        ], [
            `آية من سورة الأحقاف المكّية (46: 15) بعد ذكر الأمّ حملته ووضعته و«ثلاثين شهرًا» حتى فطامه؛ فإذا بلغ أشدّه وبلغ أربعين سنة قال: «ربّ أوزعني أن أشكر نعمتك...».`,
            `ويورد ابن كثير من التفسير أنها نزلت في أبي بكر الصدّيق رضي الله عنه: بلغ الأربعين وأبواه مؤمنان وذرّيّته صالحة؛ أمّا المعنى العامّ فعنده أنها دعاء كل عبد صالح في والديه وولده.`
        ]),
        P([
            `Ибн Касир толкует «аузи'ни»: «внуши мне, наставь, сделай так, чтобы я благодарил» — благодарность здесь не просто слово, а дар Аллаха, о котором просят; не человек решает быть благодарным, а Аллах наделяет его этим.`,
            `Аят связывает три вещи: благодарность за милость к себе и родителям, праведное дело, которым Аллах доволен, и «исправь ради меня моё потомство». Ибн Касир поясняет, что достигший зрелости оглядывается на заботу родителей и просит передать эту милость дальше — своим детям; мольба заканчивается покаянием: «я обратился к Тебе и я — из числа мусульман».`
        ], [
            `Ibn Kathir explains «awzi'ni»: «inspire me, guide me, make me grateful» — gratitude here is not a mere word but a gift from Allah that one asks for; it is not the person who decides to be grateful but Allah who endows him with it.`,
            `The verse joins three things: gratitude for the favour shown to oneself and one's parents, a righteous deed pleasing to Allah, and «set right for me my descendants». Ibn Kathir explains that the mature person looks back on his parents' care and asks to pass that favour on to his own children; the dua closes with repentance: «I have turned to You and I am among the Muslims».`
        ], [
            `يفسّر ابن كثير «أوزعني»: ألهمني ووفّقني واجعلني شاكرًا؛ فالشكر هنا عطاء يُسأل لا كلمةٌ يقولها المرء، وليس العبد هو الذي يقرّر أن يشكر بل الله يهيّئه له.`,
            `وتجمع الآية ثلاثًا: شكر النعمة عليه وعلى والديه، وعملًا صالحًا يرضاه، و«أصلح لي في ذرّيّتي». ويبيّن ابن كثير أن البالغ أشدّه يلتفت إلى عناية أبويه فيسأل أن تُمدّ النعمة إلى ولده؛ وتُختم بالتوبة: «إني تبت إليك وإني من المسلمين».`
        ])
    );

    /* ---------- 10. ЗДОРОВЬЕ И ИСЦЕЛЕНИЕ ---------- */
    D['health:0'] = E(
        P([
            `'Аиша (да будет доволен ею Аллах) передала: «Когда Посланник Аллаха ﷺ навещал больного, он говорил: \"Удали недуг, о Господь людей! Исцели — ведь Ты Исцеляющий; нет исцеления, кроме Твоего исцеления, исцеления, после которого не останется болезни\"» (Сахих аль-Бухари, 5675; Сахих Муслим).`,
            `Хадис приведён в «Книге о больном» (аль-Бухари) и в «Книге приветствия» (Муслим), в главе о мольбе за больного. Пророк ﷺ называл Аллаха «Рабба-н-нас» («Господь людей») и тут же «аш-Шафи» («Исцеляющий»): просьба обращена к Тому, Кто властен и над людьми, и над болезнью.`
        ], [
            `'Aishah (may Allah be pleased with her) reported: «When the Messenger of Allah ﷺ visited a sick person he would say: \"Remove the affliction, O Lord of mankind! Heal, for You are the Healer; there is no cure but Yours — a cure that leaves no illness behind\"» (Sahih al-Bukhari 5675; Sahih Muslim).`,
            `The hadith is in the Book of the Sick (al-Bukhari) and the Book of Greetings (Muslim), in the chapter on supplicating for the sick. The Prophet ﷺ called Allah «Rabban-nas», Lord of mankind, and immediately «ash-Shafi», the Healer: the plea is addressed to the One who has authority over both people and illness.`
        ], [
            `عن عائشة رضي الله عنها: «كان رسول الله ﷺ إذا أتى مريضًا قال: أذهب الباس ربّ الناس، اشفِ وأنت الشافي، لا شفاء إلا شفاؤك، شفاءً لا يغادر سقمًا» (صحيح البخاري 5675؛ صحيح مسلم).`,
            `والحديث في «كتاب المرضى» عند البخاري و«كتاب السلام» عند مسلم، في باب الدعاء للمريض؛ سمّى النبي ﷺ الله «ربّ الناس» ثم «الشافي»، فالمسألة إلى من يملك العباد والداء معًا.`
        ]),
        P([
            `Отдельной награды хадис не называет; обещание заключено в самих словах: «Ты Исцеляющий; нет исцеления, кроме Твоего» — Пророк ﷺ просил не частичного облегчения, а «шифа'ан ля югадиру сакаман», исцеления, после которого болезнь не вернётся.`,
            `Ибн Касир в тафсире 26:80 («А когда я заболеваю, то Он исцеляет меня» — слова Ибрахима) поясняет, что исцеление приписывается одному Аллаху, хотя лечение дозволено и предписано; мольба Пророка ﷺ утверждает то же: «анта-ш-Шафи».`
        ], [
            `The hadith names no separate reward; the promise lies in the words: «You are the Healer; there is no cure but Yours» — the Prophet ﷺ asked not for partial relief but for «shifa'an la yughadiru saqaman», a cure after which no illness remains.`,
            `In his tafsir of 26:80 («And when I am ill, it is He who cures me» — the words of Ibrahim) Ibn Kathir explains that healing is attributed to Allah alone, although treatment is permitted and prescribed; the Prophet's ﷺ dua affirms the same: «antash-Shafi».`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، والوعد في لفظه: «وأنت الشافي لا شفاء إلا شفاؤك»؛ لم يسأل النبي ﷺ تخفيفًا جزئيًّا بل «شفاءً لا يغادر سقمًا».`,
            `ويقول ابن كثير في تفسير الشعراء (26: 80: «وإذا مرضت فهو يشفين» من كلام إبراهيم) إن الشفاء يُنسب إلى الله وحده وإن كان التداوي مشروعًا؛ ودعاء النبي ﷺ يقرّره: «أنت الشافي».`
        ])
    );

    D['health:1'] = E(
        P([
            `'Абду-р-Рахман ибн Абу Бакра (да будет доволен им Аллах) спросил своего отца Абу Бакру: «О отец мой, я слышу, как ты каждое утро повторяешь эту мольбу трижды и столько же вечером». Тот ответил: «Я слышал, как её произносил Посланник Аллаха ﷺ, и люблю следовать его сунне» (Сунан Абу Давуд; Муснад Ахмад).`,
            `Хадис приведён в главе «Что говорить, когда наступит утро» книги «Адаб». Формула двойная: сначала три просьбы о сохранности тела, слуха и зрения с «ля иляха илля анта», затем прибегание от неверия, бедности и наказания могилы.`
        ], [
            `'Abdur-Rahman ibn Abi Bakrah (may Allah be pleased with him) asked his father Abu Bakrah: «O my father, I hear you repeat this supplication three times every morning and as often every evening». He replied: «I heard the Messenger of Allah ﷺ say it, and I love to follow his sunnah» (Sunan Abi Dawud; Musnad Ahmad).`,
            `The hadith is in the chapter «What to say when one reaches morning» of the Book of Adab. The formula is twofold: first three pleas for the soundness of body, hearing and sight with «la ilaha illa anta», then refuge from disbelief, poverty and the punishment of the grave.`
        ], [
            `سأل عبد الرحمن بن أبي بكرة أباه أبا بكرة رضي الله عنهما: «يا أبتِ إني أسمعك تدعو بهذه الدعوة كل غداة ثلاثًا ومثلها عشيّة»، فقال: «سمعت رسول الله ﷺ يدعو بها فأحبّ أن أستنّ بسنّته» (سنن أبي داود؛ مسند أحمد).`,
            `والحديث في باب «ما يقول إذا أصبح» من كتاب الأدب؛ والصيغة شطران: ثلاث مسائل لحفظ البدن والسمع والبصر مع «لا إله إلا أنت»، ثم استعاذة من الكفر والفقر وعذاب القبر.`
        ]),
        P([
            `Отдельной награды хадис не называет; испрашиваемая защита — сохранность трёх даров: тела, слуха и зрения, а также ограждение от неверия, бедности и мучения могилы. Сподвижник повторял её трижды утром и вечером именно потому, что так делал Пророк ﷺ.`,
            `Ибн Касир в тафсире 16:78 («Аллах вывел вас из утроб ваших матерей, когда вы ничего не знали, и наделил вас слухом, зрением и сердцами — быть может, вы будете благодарны») поясняет, что слух и зрение — первые дары, за которые человек отвечает; мольба просит сохранить именно их, а не просто «здоровье вообще».`
        ], [
            `The hadith names no separate reward; the protection sought is the preservation of three gifts — body, hearing and sight — and shielding from disbelief, poverty and the torment of the grave. The Companion repeated it three times morning and evening precisely because the Prophet ﷺ did so.`,
            `In his tafsir of 16:78 («Allah brought you forth from the wombs of your mothers knowing nothing, and gave you hearing, sight and hearts that you might be grateful») Ibn Kathir explains that hearing and sight are the first gifts for which a person is answerable; the dua asks to preserve exactly these, not merely «health in general».`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، والحفظ المطلوب بقاءُ ثلاث نعم: البدن والسمع والبصر، مع الوقاية من الكفر والفقر وعذاب القبر؛ وكرّرها الصحابي ثلاثًا صباحًا ومساءً لأن النبي ﷺ كان يفعلها.`,
            `ويبيّن ابن كثير في تفسير النحل (16: 78: «أخرجكم من بطون أمّهاتكم لا تعلمون شيئًا وجعل لكم السمع والأبصار والأفئدة لعلّكم تشكرون») أن السمع والبصر أول ما يُسأل عنه العبد؛ والدعاء يطلب حفظهما بعينهما لا «الصحة» إجمالًا.`
        ])
    );

    D['health:2'] = E(
        P([
            `Ибн 'Умар (да будет доволен ими Аллах) передал: «Не оставлял Посланник Аллаха ﷺ этих мольб, когда наступал вечер и когда наступало утро» (Сунан Абу Давуд, 5074, сахих); хадис приведён в одноимённой главе книги «Адаб».`,
            `Пророк ﷺ просил «аль-'афийу» — благополучие — в этом мире и в будущем, затем «аль-'афва» и «аль-'афийу» в религии, мирских делах, семье и имуществе, и завершал: «скрой мои недостатки и избавь от страхов». Ибн 'Умар специально отметил, что Пророк ﷺ никогда не пропускал эти слова.`
        ], [
            `Ibn 'Umar (may Allah be pleased with them both) reported: «The Messenger of Allah ﷺ never omitted these supplications when evening came and when morning came» (Sunan Abi Dawud 5074, sahih); the hadith is in the chapter of the same name in the Book of Adab.`,
            `The Prophet ﷺ asked for «al-'afiyah» — well-being — in this world and the Hereafter, then for «al-'afw» and «al-'afiyah» in his religion, worldly affairs, family and wealth, closing with «conceal my faults and calm my fears». Ibn 'Umar expressly noted that the Prophet ﷺ never omitted them.`
        ], [
            `عن ابن عمر رضي الله عنهما: «لم يكن رسول الله ﷺ يدع هؤلاء الدعوات حين يمسي وحين يصبح» (سنن أبي داود 5074، صحيح)، والحديث في باب «ما يقول إذا أصبح» من كتاب الأدب.`,
            `سأل النبي ﷺ «العافية» في الدنيا والآخرة، ثم «العفو والعافية» في الدين والدنيا والأهل والمال، وختم «استر عورتي وآمن روعاتي»؛ ونصّ ابن عمر على أنه ﷺ كان لا يتركها.`
        ]),
        P([
            `Отдельной награды хадис не называет; «аль-'афийа» в понимании учёных — сохранность религии, тела, семьи и имущества сразу, поэтому это одна из самых всеобъемлющих просьб о защите: она не перечисляет беды, а просит отсутствия всякой беды.`,
            `В другом достоверном хадисе Пророк ﷺ велел своему дяде аль-'Аббасу ибн 'Абд аль-Мутталибу: «О 'Аббас, дядя Посланника Аллаха, проси у Аллаха благополучия в этом мире и в будущем» (Джами' ат-Тирмизи). Ибн Касир в тафсире 2:201 объясняет «хасану» этого мира как здоровье, дозволенный удел и праведную семью — то, что и объемлет «аль-'афийа».`
        ], [
            `The hadith names no separate reward; «al-'afiyah» is understood by the scholars as the soundness of religion, body, family and wealth all at once, making it one of the most comprehensive pleas for protection: it does not enumerate afflictions but asks for the absence of every affliction.`,
            `In another authentic hadith the Prophet ﷺ told his uncle al-'Abbas ibn 'Abd al-Muttalib: «O 'Abbas, uncle of the Messenger of Allah, ask Allah for well-being in this world and the Hereafter» (Jami' at-Tirmidhi). In his tafsir of 2:201 Ibn Kathir explains the «good» of this world as health, lawful provision and a righteous family — exactly what «al-'afiyah» comprises.`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، و«العافية» عند العلماء سلامة الدين والبدن والأهل والمال جميعًا، فهي من أجمع دعوات الحفظ: لا تعدّد البلاء بل تسأل ألّا يكون بلاءٌ أصلًا.`,
            `وقال النبي ﷺ لعمّه العباس بن عبد المطّلب في حديث صحيح آخر: «يا عباس يا عمّ رسول الله، سل الله العافية في الدنيا والآخرة» (جامع الترمذي). ويفسّر ابن كثير «الحسنة» في الدنيا (البقرة 2: 201) بالصحة والرزق الحلال والأسرة الصالحة، وهو ما تحيط به «العافية».`
        ])
    );

    D['health:3'] = E(
        P([
            `Аят из мекканской суры «Аль-Анбия» (21:83), в ряду рассказов о пророках. Ибн Касир поясняет: после долгой болезни, гибели имущества и детей Айюб (мир ему) не стал жаловаться людям и не произнёс упрёка Аллаху, а воззвал: «Поистине, меня коснулось страдание, а Ты — Милосерднейший из милосердных».`,
            `Ибн Касир приводит различные предания о сроке его испытания и отмечает главное: в жалобе пророка нет ни слова недовольства — только сообщение о беде и поминание милости Аллаха. Ответ следует сразу: «И Мы ответили ему, и устранили постигшее его страдание, и даровали ему его семью и столько же вместе с ними по Нашей милости» (21:84).`
        ], [
            `A verse from the Meccan surah al-Anbiya (21:83), among the accounts of the prophets. Ibn Kathir explains: after long illness, loss of wealth and children, Ayyub (peace be upon him) did not complain to people or utter a word of reproach against Allah, but called out: «Indeed, affliction has touched me, and You are the Most Merciful of the merciful».`,
            `Ibn Kathir cites various reports on the length of his trial and stresses the main point: the prophet's complaint contains no discontent — only a statement of affliction and remembrance of Allah's mercy. The answer follows at once: «So We responded to him, removed what afflicted him, and gave him his family and the like thereof with them, as a mercy from Us» (21:84).`
        ], [
            `آية من سورة الأنبياء المكّية (21: 83) في سرد قصص الأنبياء. يبيّن ابن كثير أن أيّوب عليه السلام بعد طول المرض وذهاب المال والولد لم يشكُ إلى الناس ولا نطق بسخط على الله، بل نادى: «أنّي مسّني الضرّ وأنت أرحم الراحمين».`,
            `ويورد ابن كثير أخبارًا مختلفة في مدّة البلاء ويؤكّد المقصد: ليس في شكواه تبرّم، بل إخبار بالضرّ وذكر للرحمة. وجاء الجواب فورًا: «فاستجبنا له فكشفنا ما به من ضرّ وآتيناه أهله ومثلهم معهم رحمةً من عندنا» (21: 84).`
        ]),
        P([
            `Ибн Касир видит в этих двух коротких предложениях адаб мольбы: раб описывает беду («массанийа-д-дурру»), но не предъявляет претензии, и сразу поминает милость Аллаха («анта архаму-р-рахимин») — просьба спрятана в этом поминании, а не в требовании.`,
            `Аллах не только снял страдание, но вернул семью «и столько же вместе с ними» (21:84) — поэтому мольбу читают при затяжной болезни как упование на то, что милость Аллаха способна вернуть и здоровье, и утраченное; она помогает не отчаиваться, когда лечение затянулось.`
        ], [
            `Ibn Kathir sees in these two short clauses the etiquette of supplication: the servant describes the affliction («massaniyad-durru») without presenting a claim, and at once remembers Allah's mercy («anta arhamur-rahimin») — the request is hidden in that remembrance, not in a demand.`,
            `Allah not only removed the suffering but restored the family «and the like thereof with them» (21:84) — hence the dua is recited in prolonged illness as reliance on Allah's mercy being able to restore both health and what was lost; it helps one not to despair when treatment drags on.`
        ], [
            `يرى ابن كثير في الجملتين اليسيرتين أدب الدعاء: يصف العبد الضرّ «مسّني الضرّ» ولا يطالب، ثم يذكر رحمة الله «أنت أرحم الراحمين»؛ فالمسألة مكنونة في الذكر لا في الطلب.`,
            `ولم يكشف الله الضرّ وحده بل ردّ الأهل «ومثلهم معهم» (21: 84)؛ ولذلك تُقرأ في المرض الطويل توكّلًا على أن رحمة الله تعيد الصحّة والفات معًا، وتعين على ألّا يقنط المرء إذا طال التداوي.`
        ])
    );

    D['health:4'] = E(
        P([
            `Ибн 'Аббас (да будет доволен ими Аллах) передал слова Посланника Аллаха ﷺ: «Кто навестит больного, чей смертный час ещё не наступил, и скажет семь раз: \"Прошу Аллаха Великого, Господа великого Трона, чтобы Он исцелил тебя\", — Аллах непременно исцелит его от этой болезни» (Сунан Абу Давуд; Джами' ат-Тирмизи).`,
            `Хадис приведён в главе «О посещении больного»; и число «семь», и оговорка «чей срок ещё не наступил» названы в самом тексте Пророка ﷺ, а не добавлены позже. Мольба обращена к Аллаху через величие Трона — «аль-'Азым, Раббу-ль-'арши-ль-'азым».`
        ], [
            `Ibn 'Abbas (may Allah be pleased with them both) reported the words of the Messenger of Allah ﷺ: «Whoever visits a sick person whose appointed time has not yet come and says seven times: \"I ask Allah the Mighty, Lord of the Mighty Throne, to heal you\" — Allah will surely heal him of that illness» (Sunan Abi Dawud; Jami' at-Tirmidhi).`,
            `The hadith is in the chapter on visiting the sick; both the number «seven» and the qualification «whose time has not yet come» are in the Prophet's ﷺ own wording, not added later. The dua addresses Allah through the majesty of the Throne — «al-'Azim, Rabbul-'arshil-'azim».`
        ], [
            `عن ابن عباس رضي الله عنهما عن رسول الله ﷺ: «من عاد مريضًا لم يحضر أجله فقال عنده سبع مرّات: أسأل الله العظيم ربّ العرش العظيم أن يشفيك، إلا عافاه الله من ذلك المرض» (سنن أبي داود؛ جامع الترمذي).`,
            `والحديث في باب «عيادة المريض»؛ وعدد «سبع» وقيد «لم يحضر أجله» من لفظ النبي ﷺ نفسه لا من زيادة متأخّرة، والدعاء يتوسّل بعظمة العرش: «العظيم ربّ العرش العظيم».`
        ]),
        P([
            `Обещание Пророка ﷺ конкретно: семь повторений — и Аллах исцелит больного, если смертный час ещё не назначен (Абу Давуд; ат-Тирмизи). Это мольба за другого человека, а не за себя.`,
            `Оговорка о сроке важна: дуа не отменяет предопределения, но просит исцеления в том, что Аллах предписал излечимым. Ибн Касир в тафсире 2:255 поясняет, что Трон — величайшее из творений и «не тяготит Аллаха хранение» небес и земли; Тот, Кто владеет Троном, властен и над болезнью.`
        ], [
            `The Prophet's ﷺ promise is specific: seven repetitions — and Allah heals the sick person if his appointed time has not come (Abu Dawud; at-Tirmidhi). It is a supplication on behalf of another, not for oneself.`,
            `The qualification about the appointed time matters: the dua does not cancel decree but asks healing in what Allah has appointed as curable. In his tafsir of 2:255 Ibn Kathir explains that the Throne is the greatest of creations and that «preserving the heavens and the earth does not burden Allah»; the One who owns the Throne has power over illness too.`
        ], [
            `وعد النبي ﷺ محدّد: سبع مرّات فيُعافى المريض إن لم يحضر أجله (أبو داود؛ الترمذي)، والدعاء للغير لا للنفس.`,
            `وقيد الأجل مهمّ: لا ينقض الدعاء القدر بل يسأل الشفاء فيما كتبه الله قابلًا له. ويبيّن ابن كثير في تفسير آية الكرسي (2: 255) أن العرش أعظم المخلوقات وأن «لا يؤوده حفظهما»؛ فمالك العرش يملك الداء والشفاء.`
        ])
    );

    D['health:5'] = E(
        P([
            `Ибн 'Аббас (да будет доволен ими Аллах) передал, что Посланник Аллаха ﷺ, навещая больного, говорил ему: «Ля ба'са, тахурун ин ша'а-Ллах» — «Не беда! Это очищение, если пожелает Аллах» (Сахих аль-Бухари, «Книга о больном», глава «Что говорить больному»).`,
            `В одной из версий хадиса у аль-Бухари бедуин, к которому Пророк ﷺ обратился с этими словами, возразил: «Какое очищение? Это лихорадка, бурлящая в старике, которая сведёт его в могилу» — и Пророк ﷺ ответил: «Тогда да будет так». Пророк ﷺ не спорил с больным, но и не отнимал у него надежды.`
        ], [
            `Ibn 'Abbas (may Allah be pleased with them both) reported that when the Messenger of Allah ﷺ visited a sick person he would say to him: «La ba'sa, tahurun in sha'allah» — «No harm! It is a purification, if Allah wills» (Sahih al-Bukhari, Book of the Sick, chapter «What to say to the sick»).`,
            `In one of al-Bukhari's versions the bedouin to whom the Prophet ﷺ said this objected: «Purification? No — it is a fever boiling in an old man that will bring him to the graves» — and the Prophet ﷺ replied: «Then let it be so». He did not argue with the sick man, yet did not strip him of hope.`
        ], [
            `عن ابن عباس رضي الله عنهما أن رسول الله ﷺ كان إذا دخل على مريض قال له: «لا بأس، طهور إن شاء الله» (صحيح البخاري، كتاب المرضى، باب «ما يقال للمريض»).`,
            `وفي رواية للبخاري أن أعرابيًّا قال له: «طهور؟ بل هي حمّى تفور على شيخ كبير تُزيره القبور»، فقال النبي ﷺ: «فنعم إذن»؛ لم يجادله ﷺ ولم يقطع رجاءه.`
        ]),
        P([
            `Отдельной награды хадис не называет, но Пророк ﷺ сообщил её в другом достоверном хадисе: «Не постигает мусульманина усталость, болезнь, забота, печаль, даже колючка, которая уколола его, без того чтобы Аллах не искупил этим часть его грехов» (аль-Бухари; Муслим). Слово «тахурун» — очищение — и есть эта награда.`,
            `Ибн Касир в тафсире 2:222 («Поистине, Аллах любит кающихся и любит очищающихся») связывает телесную нечистоту и болезнь с очищением сердца; поэтому утешение Пророка ﷺ не преуменьшает страдание, а напоминает, что оно может стать причиной прощения, если принято с терпением.`
        ], [
            `The hadith names no separate reward, but the Prophet ﷺ gave it in another authentic report: «No fatigue, illness, worry, grief — even the prick of a thorn — befalls a Muslim except that Allah expiates some of his sins thereby» (al-Bukhari; Muslim). The word «tahurun», purification, is that very reward.`,
            `In his tafsir of 2:222 («Indeed, Allah loves those who repent and loves those who purify themselves») Ibn Kathir links bodily impurity and illness to the purification of the heart; the Prophet's ﷺ comfort therefore does not belittle suffering but reminds that, borne with patience, it may be a cause of forgiveness.`
        ], [
            `لم يذكر الحديث أجرًا بعينه، لكن النبي ﷺ بيّنه في حديث صحيح آخر: «ما يصيب المسلم من نصب ولا وصب ولا همّ ولا حزن حتى الشوكة يُشاكها إلا كفّر الله بها من خطاياه» (البخاري؛ مسلم)؛ فلفظ «طهور» هو ذلك الأجر.`,
            `ويصل ابن كثير في تفسير البقرة (2: 222: «إن الله يحبّ التوّابين ويحبّ المتطهّرين») بين النجاسة والمرض وطهارة القلب؛ فمواساة النبي ﷺ لا تهوّن الوجع بل تذكّر أنه قد يكون سبب مغفرة إذا صُبر عليه.`
        ])
    );

    /* ---------- 11. УКРЕПЛЕНИЕ ИМАНА ---------- */
    D['iman:0'] = E(
        P([
            `Умм Саляма (да будет доволен ею Аллах) передала, что Пророк ﷺ чаще всего повторял: «О Переворачивающий сердца, утверди моё сердце на Твоей религии!» Она спросила, почему он так часто говорит это, и он ответил: «О Умм Саляма, нет сердца, которое не было бы между двумя пальцами из пальцев Милостивого: кого пожелает — утвердит, а кого пожелает — отклонит» (Джами' ат-Тирмизи, 3522; Муснад Ахмад).`,
            `Ат-Тирмизи оценил хадис как хасан; он же передаёт от Анаса, что Пророк ﷺ часто произносил эту мольбу. В ответе Пророка ﷺ — причина её частоты: сердце не закреплено раз и навсегда, оно нуждается в ежедневном утверждении.`
        ], [
            `Umm Salamah (may Allah be pleased with her) reported that the Prophet ﷺ most often repeated: «O Turner of the hearts, make my heart firm upon Your religion!» She asked why he said it so often, and he replied: «O Umm Salamah, there is no heart that is not between two of the fingers of the Most Merciful: whom He wills He makes steadfast, and whom He wills He causes to swerve» (Jami' at-Tirmidhi 3522; Musnad Ahmad).`,
            `At-Tirmidhi graded the hadith hasan; he also transmits from Anas that the Prophet ﷺ often said this dua. The Prophet's ﷺ answer gives the reason for its frequency: the heart is not fixed once and for all — it needs daily confirming.`
        ], [
            `عن أم سلمة رضي الله عنها أن أكثر دعاء النبي ﷺ: «يا مقلّب القلوب ثبّت قلبي على دينك»، فسألته، فقال: «يا أم سلمة، ما من قلب إلا بين أصبعين من أصابع الرحمن، إن شاء أقامه وإن شاء أزاغه» (جامع الترمذي 3522؛ مسند أحمد).`,
            `وقال الترمذي: حديث حسن، وروى عن أنس أن النبي ﷺ كان يُكثر منها؛ وفي جوابه ﷺ سبب الإكثار: القلب لا يثبت مرّةً واحدة بل يحتاج تثبيتًا كل يوم.`
        ]),
        P([
            `Отдельной награды хадис не называет; обещание — в ответе Пророка ﷺ: стойкость сердца не в самом человеке, а в руке Аллаха, поэтому просить «тасбит» следует у Него и просить постоянно.`,
            `Ибн Касир в тафсире 6:125 («Кого Аллах пожелает наставить, тому Он раскрывает грудь для Ислама, а кого пожелает сбить, тому делает грудь тесной, будто он поднимается на небо») поясняет, что и наставление, и отклонение — от Него; мольба просит не новых знаний или благ, а именно сохранения уже данной религии.`
        ], [
            `The hadith names no separate reward; the promise lies in the Prophet's ﷺ answer: steadfastness of the heart is not in the person himself but in Allah's hand, so «tathbit» must be asked of Him — and asked constantly.`,
            `In his tafsir of 6:125 («Whomever Allah wills to guide, He expands his breast to Islam; and whomever He wills to let stray, He makes his breast tight as though climbing into the sky») Ibn Kathir explains that both guidance and deviation are from Him; the dua asks not for new knowledge or favours but for the preservation of the religion already given.`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، والوعد في جواب النبي ﷺ: ثبات القلب ليس بيد العبد بل بيد الله، ف«التثبيت» يُسأل منه ويُسأل دائمًا.`,
            `ويبيّن ابن كثير في تفسير الأنعام (6: 125: «فمن يرد الله أن يهديه يشرح صدره للإسلام ومن يرد أن يضلّه يجعل صدره ضيّقًا حرجًا») أن الهدى والإزاغة منه سبحانه؛ والدعاء لا يسأل علمًا جديدًا ولا رزقًا بل حفظ الدين الذي أُعطي.`
        ])
    );

    D['iman:1'] = E(
        P([
            `Аят из мединской суры «Аль 'Имран» (3:8), сразу после аята 3:7 о ясных и неоднозначных (муташабих) аятах. Ибн Касир поясняет: Коран противопоставляет тех, «в чьих сердцах уклонение», которые гоняются за неоднозначным, и «твердых в знании», которые говорят: «Мы уверовали в него; всё — от нашего Господа» (3:7) и затем произносят эту мольбу.`,
            `Сура ниспослана в Медине, в том числе в связи с полемикой с христианами Наджрана и с иудеями; по Ибн Касиру, аят 3:7–8 учит, как верующему относиться к тому, чего он до конца не понимает: не спором, а признанием и просьбой о стойкости.`
        ], [
            `A verse from the Madinan surah Al 'Imran (3:8), directly after 3:7 on the clear and the ambiguous (mutashabih) verses. Ibn Kathir explains: the Quran contrasts those «in whose hearts is deviation», who chase after what is ambiguous, with «those firm in knowledge», who say «We have believed in it; all is from our Lord» (3:7) and then utter this dua.`,
            `The surah was revealed in Madinah, partly amid debate with the Christians of Najran and the Jews; in Ibn Kathir's reading, 3:7–8 teaches how a believer should treat what he does not fully grasp: not with argument, but with acknowledgement and a plea for steadfastness.`
        ], [
            `آية من سورة آل عمران المدنية (3: 8) عقب الآية (3: 7) في المحكم والمتشابه. يبيّن ابن كثير أن القرآن يقابل بين «الذين في قلوبهم زيغ» يتبعون المتشابه و«الراسخين في العلم» الذين قالوا «آمنّا به كلٌّ من عند ربّنا» ثم دعوا بهذا الدعاء.`,
            `ونزلت السورة في المدينة ومنها في مجادلة نصارى نجران واليهود؛ وعند ابن كثير تعلّم الآية (3: 7–8) المؤمنَ ألّا يقابل ما لم يفهمه بالجدال بل بالإقرار وسؤال الثبات.`
        ]),
        P([
            `Ибн Касир толкует «ля тузиг къулюбана ба'да из хадайтана»: просьба не о новом знании, а о сохранении уже дарованного наставления; верующий просит Аллаха не лишить его того, что Он Сам же дал.`,
            `«Ва хаб ляна мин лядунка рахматан» — милость «от Себя» (мин лядунк), то есть не заслуженная делами, а дарованная; Ибн Касир поясняет, что аят помогает бояться не явного неверия, а незаметного отклонения сердца после наставления — и потому заканчивает: «ведь Ты — Дарующий».`
        ], [
            `Ibn Kathir explains «la tuzigh qulubana ba'da idh hadaytana»: the plea is not for new knowledge but for the preservation of guidance already granted; the believer asks Allah not to take away what He Himself gave.`,
            `«Wa hab lana min ladunka rahmatan» — mercy «from Yourself» (min ladunk), i.e. not earned by deeds but bestowed; Ibn Kathir notes that the verse teaches fear not of open disbelief but of the heart's imperceptible swerving after guidance — and so it closes: «indeed You are the Bestower».`
        ], [
            `يفسّر ابن كثير «لا تُزغ قلوبنا بعد إذ هديتنا»: المسألة ليست طلب علم جديد بل حفظ الهدى الذي حصل؛ يسأل المؤمن ربّه ألّا يسلبه ما وهبه هو سبحانه.`,
            `و«هب لنا من لدنك رحمة» أي من عنده لا بعمل العبد بل تفضّلًا؛ ويبيّن ابن كثير أن الآية تعلّم الخوف لا من الكفر الظاهر بل من زيغ القلب الخفيّ بعد الهدى، ولذلك خُتمت «إنك أنت الوهّاب».`
        ])
    );

    D['iman:2'] = E(
        P([
            `'Абдуллах ибн Мас'уд (да будет доволен им Аллах) передал, что среди мольб Посланника Аллаха ﷺ была: «О Аллах, я прошу у Тебя наставления, богобоязненности, целомудрия и достаточности» (Сахих Муслим, 2721; также Джами' ат-Тирмизи).`,
            `Хадис открывает главу «О мольбе о наставлении, богобоязненности, целомудрии и достаточности» в «Книге поминания и мольбы»; Пророк ﷺ не приурочил его к отдельному событию — это одна из его регулярных, кратких и при этом всеобъемлющих просьб.`
        ], [
            `'Abdullah ibn Mas'ud (may Allah be pleased with him) reported that among the supplications of the Messenger of Allah ﷺ was: «O Allah, I ask You for guidance, piety, chastity and sufficiency» (Sahih Muslim 2721; also Jami' at-Tirmidhi).`,
            `The hadith opens the chapter «On supplicating for guidance, piety, chastity and sufficiency» in the Book of Remembrance and Supplication; the Prophet ﷺ did not tie it to an incident — it is one of his regular, brief yet all-embracing pleas.`
        ], [
            `عن عبد الله بن مسعود رضي الله عنه أن من دعاء رسول الله ﷺ: «اللهم إني أسألك الهدى والتقى والعفاف والغنى» (صحيح مسلم 2721؛ وجامع الترمذي).`,
            `والحديث في صدر باب «الدعاء بالهدى والتقى والعفاف والغنى» من كتاب الذكر والدعاء؛ لم يخصّه النبي ﷺ بمناسبة، بل هو من أدعيته الدائمة الوجيزة الجامعة.`
        ]),
        P([
            `Отдельной награды хадис не называет; польза — в четырёх словах, каждое из которых закрывает одну сторону жизни верующего: «аль-худа» (наставление), «ат-тукъа» (богобоязненность), «аль-'афаф» (воздержание от запретного) и «аль-гина» (достаточность, независимость от людей).`,
            `Ибн Касир в тафсире 65:2–3 связывает богобоязненность с выходом из стеснения и с уделом, а в тафсире 24:32 («...и пусть соблюдают целомудрие те, кто не находит возможности жениться») объясняет «аль-'афаф» как удержание от запретного; мольба Пророка ﷺ собирает оба смысла и добавляет достаток сердца, а не только имущества.`
        ], [
            `The hadith names no separate reward; its benefit lies in four words, each covering one side of the believer's life: «al-huda» (guidance), «at-tuqa» (God-consciousness), «al-'afaf» (refraining from what is forbidden) and «al-ghina» (sufficiency, independence from people).`,
            `In his tafsir of 65:2–3 Ibn Kathir links God-consciousness with a way out of constraint and with provision, while in his tafsir of 24:32 («...and let those who find not the means to marry keep chaste») he explains «al-'afaf» as holding back from the forbidden; the Prophet's ﷺ dua gathers both meanings and adds sufficiency of the heart, not merely of wealth.`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، والفائدة في أربع كلمات تغطي كلّ واحدة جانبًا من حياة المؤمن: «الهدى» و«التقى» و«العفاف» أي الكفّ عن الحرام، و«الغنى» أي الاستغناء عن الخلق.`,
            `يربط ابن كثير في تفسير الطلاق (65: 2–3) التقوى بالمخرج والرزق، ويفسّر «العفاف» في تفسير النور (24: 32: «وليستعفف الذين لا يجدون نكاحًا») بالامتناع عن الحرام؛ ودعاء النبي ﷺ يجمع المعنيين ويزيد غنى القلب لا غنى المال وحده.`
        ])
    );

    D['iman:3'] = E(
        P([
            `Пророк ﷺ взял Му'аза ибн Джабаля за руку, сказал: «О Му'аз, клянусь Аллахом, я люблю тебя» — и завещал: «Не оставляй после каждой молитвы говорить: \"О Аллах, помоги мне поминать Тебя, благодарить Тебя и прекрасно поклоняться Тебе\"» (Сунан Абу Давуд; Сунан ан-Насаи).`,
            `Хадис приведён в главе «Что говорить после намаза»; наставление дано как личная заповедь любимому сподвижнику, а не как общий совет сразу всем. Слова стоят сразу после обязательной молитвы — там, где человек особенно склонен считать поклонение законченным.`
        ], [
            `The Prophet ﷺ took Mu'adh ibn Jabal by the hand, said «O Mu'adh, by Allah I love you», and enjoined: «Do not omit after every prayer saying: \"O Allah, help me to remember You, to thank You and to worship You beautifully\"» (Sunan Abi Dawud; Sunan an-Nasa'i).`,
            `The hadith is in the chapter «What to say after prayer»; the instruction was given as a personal charge to a beloved Companion, not as a general address to everyone. The words come immediately after the obligatory prayer — where a person is most tempted to consider worship finished.`
        ], [
            `أخذ النبي ﷺ بيد معاذ بن جبل فقال: «يا معاذ، والله إني لأحبّك»، ثم أوصاه: «لا تدعنّ دُبر كل صلاة أن تقول: اللهم أعِنّي على ذكرك وشكرك وحسن عبادتك» (سنن أبي داود؛ سنن النسائي).`,
            `والحديث في باب «ما يقول بعد الصلاة»؛ والوصية خاصة بصحابي يحبّه ﷺ لا خطاب عامّ، والكلمات عقب الفرض مباشرةً حيث يظنّ المرء أن العبادة قد انتهت.`
        ]),
        P([
            `Отдельной награды хадис не называет; его польза — признание, что постоянство в поминании, благодарности и качестве («хусн») поклонения тоже даётся Аллахом, а не достигается только усилием.`,
            `Ибн Касир в тафсире 2:45 («Обратитесь за помощью к терпению и молитве») поясняет, что помощь в самом поклонении просят у Аллаха же; мольба не просит новых дел, а просит сил на уже предписанные — поминание, благодарность и красоту их исполнения.`
        ], [
            `The hadith names no separate reward; its benefit is the admission that consistency in remembrance, gratitude and excellence («husn») of worship is likewise granted by Allah, not attained by effort alone.`,
            `In his tafsir of 2:45 («Seek help through patience and prayer») Ibn Kathir explains that help in worship itself is sought from Allah; the dua asks not for new deeds but for strength to perform the prescribed ones — remembrance, gratitude and beauty in carrying them out.`
        ], [
            `لم يذكر الحديث أجرًا منفصلًا، وفائدته الإقرار بأن الدوام على الذكر والشكر و«حُسن» العبادة عطاء من الله أيضًا لا يُنال بالجهد وحده.`,
            `ويقول ابن كثير في تفسير البقرة (2: 45: «استعينوا بالصبر والصلاة») إن العون على العبادة نفسها يُطلب من الله؛ فالدعاء لا يسأل أعمالًا جديدة بل قوّةً على المفروض: الذكر والشكر وحسن أدائهما.`
        ])
    );

    D['iman:4'] = E(
        P([
            `Аят ниспослан в Медине в суре «Аль-Бакара» (2:201), сразу после аятов о хадже (2:196–203). Ибн Касир поясняет контекст: Коран сначала приводит просьбу тех, кто говорит «Господь наш, дай нам в этом мире» — таким нет доли в будущем (2:200), — и вместо неё даёт всеобъемлющую мольбу верующих.`,
            `Анас ибн Малик (да будет доволен им Аллах) передал, что Пророк ﷺ чаще всего обращался к Аллаху именно с этой мольбой (Сахих аль-Бухари); она же звучит в конце мольбы Ибрахима и в заповедях Корана о поминании после обрядов.`
        ], [
            `Revealed in Madinah within Surah al-Baqarah (2:201), directly after the verses on Hajj (2:196–203). Ibn Kathir sets the context: the Quran first quotes those who say «Our Lord, give us in this world» — they have no share in the Hereafter (2:200) — and in its place gives the all-embracing dua of the believers.`,
            `Anas ibn Malik (may Allah be pleased with him) reported that this was the supplication the Prophet ﷺ made most often (Sahih al-Bukhari); it also echoes the closing prayer of Ibrahim and the Quran's commands to remember Allah after the rites.`
        ], [
            `نزلت الآية في المدينة ضمن سورة البقرة (2: 201) عقب آيات الحجّ (2: 196–203). يبيّن ابن كثير السياق: ذكر القرآن أوّلًا قول من قال «ربّنا آتنا في الدنيا» فما له في الآخرة من خلاق (2: 200)، ثم أثبت مكانها الدعاء الجامع للمؤمنين.`,
            `وعن أنس بن مالك رضي الله عنه أن أكثر دعاء النبي ﷺ كان بها (صحيح البخاري)؛ وهي ترد في ختام دعاء إبراهيم وفي الأمر بذكر الله بعد المناسك.`
        ]),
        P([
            `Ибн Касир толкует «хасанату-д-дунья» как здоровье, дозволенный удел, праведную семью, полезное знание и праведное дело, а «хасанату-ль-ахира» — как Рай, спасение и довольство Аллаха; «къина 'азаба-н-нар» — просьба защитить от огня. Одна фраза объемлет оба мира.`,
            `Пророк ﷺ сделал её самой частой своей мольбой (аль-Бухари), потому что она не оставляет ни одной нужды за рамками просьбы; аят помогает верующему не делить заботы на «мирские» и «религиозные», а просить у Аллаха блага здесь и спасения там одновременно.`
        ], [
            `Ibn Kathir explains the «good» of this world as health, lawful provision, a righteous family, beneficial knowledge and righteous deeds, and the «good» of the Hereafter as Paradise, deliverance and Allah's pleasure; «qina 'adhaban-nar» is the plea to be shielded from the Fire. One phrase embraces both worlds.`,
            `The Prophet ﷺ made it his most frequent supplication (al-Bukhari) because it leaves no need outside the request; the verse helps the believer not split concerns into «worldly» and «religious» but ask Allah for good here and salvation there at once.`
        ], [
            `يفسّر ابن كثير «حسنة الدنيا» بالصحة والرزق الحلال والأسرة الصالحة والعلم النافع والعمل الصالح، و«حسنة الآخرة» بالجنّة والنجاة والرضوان، و«قنا عذاب النار» سؤال الوقاية من النار؛ فجملة واحدة تحيط الدارين.`,
            `وجعلها النبي ﷺ أكثر دعائه (البخاري) لأنها لا تُبقي حاجة خارج المسألة؛ والآية تعين المؤمن ألّا يقسم همومه إلى «دنيويّة» و«دينيّة» بل يسأل الله خير الدنيا والنجاة في الآخرة معًا.`
        ])
    );

    D['iman:5'] = E(
        P([
            `Пророк ﷺ сказал: «Четыре слова — любимейшие у Аллаха: \"Пречист Аллах, хвала Аллаху, нет божества, кроме Аллаха, и Аллах Велик\"; неважно, с которого из них ты начнёшь» (Сахих Муслим; Джами' ат-Тирмизи).`,
            `В другой достоверной передаче Пророк ﷺ добавил: «Произнести их дороже для меня, чем всё, над чем восходит солнце» (Сахих Муслим). Хадис приведён в главах о достоинстве поминания; слова даны не по частному случаю, а как постоянный, любимый Аллахом зикр.`
        ], [
            `The Prophet ﷺ said: «Four phrases are the dearest to Allah: \"Glory be to Allah, praise be to Allah, there is no god but Allah, and Allah is Most Great\" — it does not matter with which of them you begin» (Sahih Muslim; Jami' at-Tirmidhi).`,
            `In another authentic report the Prophet ﷺ added: «For me to say them is dearer than everything over which the sun rises» (Sahih Muslim). The hadith stands in the chapters on the merit of remembrance; the words were given not for a particular occasion but as a constant dhikr beloved to Allah.`
        ], [
            `قال النبي ﷺ: «أحبّ الكلام إلى الله أربع: سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر، لا يضرّك بأيّهنّ بدأت» (صحيح مسلم؛ جامع الترمذي).`,
            `وزاد في رواية صحيحة أخرى: «لأن أقولهنّ أحبّ إليّ ممّا طلعت عليه الشمس» (صحيح مسلم)؛ والحديث في أبواب فضل الذكر، والكلمات ليست لمناسبة بعينها بل ذكرٌ دائم حبيب إلى الله.`
        ]),
        P([
            `Пророк ﷺ назвал награду прямо: эти слова — любимейшие у Аллаха и дороже для него всего, над чем восходит солнце (Муслим). Ни счёта, ни времени, ни омовения не оговорено — достоинство относится к самим четырём фразам.`,
            `Ибн Касир, толкуя имена и совершенства Аллаха в тафсире 59:23 («Он — Аллах, нет божества, кроме Него, Владыка, Святой, Мир...»), поясняет смысл каждой фразы: «субхана-Ллах» отрицает всякий недостаток, «аль-хамду лиллях» утверждает всякое совершенство, «ля иляха илля-Ллах» — таухид, «Аллаху Акбар» — что Он выше всего. Вместе они обновляют иман в течение дня без всяких условий.`
        ], [
            `The Prophet ﷺ named the reward plainly: these words are the dearest to Allah and dearer to him than everything over which the sun rises (Muslim). No count, time or ablution is stipulated — the merit belongs to the four phrases themselves.`,
            `Explaining Allah's names and perfections in his tafsir of 59:23 («He is Allah, besides whom there is no deity, the King, the Holy, the Peace...»), Ibn Kathir unfolds each phrase: «subhanallah» denies every defect, «alhamdulillah» affirms every perfection, «la ilaha illallah» is tawhid, «Allahu Akbar» declares Him above all. Together they renew faith through the day with no conditions.`
        ], [
            `نصّ النبي ﷺ على الأجر: هي أحبّ الكلام إلى الله وأحبّ إليه ممّا طلعت عليه الشمس (مسلم)، ولم يقيّدها بعدد ولا وقت ولا وضوء، فالفضل للكلمات الأربع نفسها.`,
            `ويبيّن ابن كثير في تفسير الحشر (59: 23: «هو الله الذي لا إله إلا هو الملك القدّوس السلام...») معنى كل جملة: «سبحان الله» تنزيه عن كل نقص، و«الحمد لله» إثبات كل كمال، و«لا إله إلا الله» توحيد، و«الله أكبر» إعلان أنّه فوق كل شيء؛ فتجدّد الأربع الإيمان في اليوم بلا تكلّف.`
        ])
    );

    window.DUA_DETAILS = D;
})(window);
