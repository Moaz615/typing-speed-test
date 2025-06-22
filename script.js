document.addEventListener('DOMContentLoaded', () => {
    const localTexts = {
        arabic: [
            "في عالم مليء بالتحديات والفرص، نسعى جميعاً لتحقيق أهدافنا وطموحاتنا من خلال العمل الجاد والمثابرة.",
            "التعلم المستمر هو مفتاح النجاح في الحياة، فالعلم نور يضيء دروب المستقبل ويفتح آفاق جديدة للإبداع والابتكار.",
            "الصداقة الحقيقية كنز ثمين لا يقدر بثمن، فهي تجعل الحياة أكثر جمالاً وتضفي عليها معنى وقيمة حقيقية.",
            "الوقت هو أغلى ما نملك في هذه الحياة، لذا يجب أن نستثمره بحكمة ونقضيه فيما ينفعنا ويفيد الآخرين.",
            "الأمل شعاع نور في ظلمات الحياة، يدفعنا للمضي قدماً رغم الصعوبات ويمنحنا القوة لمواجهة التحديات.",
            "النجاح ليس وجهة نهائية، بل هو رحلة مستمرة من التطور والتحسين الذاتي.",
            "القراءة غذاء العقل، تفتح أمامك أبواباً جديدة نحو المعرفة وتوسع مداركك.",
            "لا تخف من الفشل، بل اعتبره فرصة للتعلم والنمو والمحاولة من جديد بقوة أكبر.",
            "السعادة الحقيقية تكمن في العطاء ومساعدة الآخرين دون انتظار مقابل.",
            "كن أنت التغيير الذي تريد أن تراه في العالم، فكل تغيير كبير يبدأ من الداخل.",
            "العقل البشري مثل المظلة، لا يعمل إلا إذا كان مفتوحاً.",
            "لا يمكنك عبور المحيط بمجرد الوقوف والتحديق في الماء.",
            "الماضي صفحة، والحاضر ورقة، والمستقبل كتاب مفتوح.",
            "التفاصيل الصغيرة هي التي تصنع الأشياء الكبيرة.",
            "الحياة قصيرة، لكنها واسعة بما يكفي لتكون مغامرة عظيمة.",
            "العلم في الصغر كالنقش على الحجر.",
            "من جد وجد ومن زرع حصد.",
            "الاتحاد قوة والتفرق ضعف.",
            "الصبر مفتاح الفرج.",
            "خير الكلام ما قل ودل.",
            "إذا هبت رياحك فاغتنمها.",
            "لا تؤجل عمل اليوم إلى الغد.",
            "اليد العليا خير من اليد السفلى.",
            "العقل السليم في الجسم السليم.",
            "الوقت كالسيف إن لم تقطعه قطعك.",
            "تجربة واحدة تعلمك أكثر من ألف نصيحة.",
            "الجمال الحقيقي ينبع من جمال الروح.",
            "الطريق إلى النجاح يبدأ بخطوة.",
            "لا شيء مستحيل مع الإرادة القوية.",
            "المعرفة قوة، والجهل ضعف.",
            "الابتسامة هي أقصر مسافة بين شخصين.",
            "الأفعال أبلغ من الأقوال.",
            "النظافة من الإيمان.",
            "من سار على الدرب وصل.",
            "اطلبوا العلم من المهد إلى اللحد.",
            "الصدق منجاة والكذب مهواة.",
            "لكل مجتهد نصيب.",
            "قطرة المطر تحفر في الصخر، ليس بالعنف ولكن بالتكرار.",
            "إذا أردت أن تطاع فأمر بما يستطاع.",
            "الأمانة كنز لا يفنى."
        ],
        english: [
            "The quick brown fox jumps over the lazy dog near the beautiful garden where colorful flowers bloom in spring.",
            "Technology has revolutionized the way we communicate, work, and live, creating new opportunities for growth and innovation.",
            "Reading books opens doors to new worlds of knowledge and imagination, enriching our minds with wisdom and creativity.",
            "Success comes to those who work hard, stay focused, and never give up on their dreams despite facing challenges.",
            "Nature provides us with endless beauty and inspiration, reminding us to appreciate the simple joys of life.",
            "The sun always shines brightest after the rain, a reminder that even after the darkest times, there is light and hope to be found.",
            "To travel is to discover that everyone is wrong about other countries. It broadens the mind and enriches the soul.",
            "The future belongs to those who believe in the beauty of their dreams. Dream big, work hard, and make it happen.",
            "Creativity is intelligence having fun. Don't be afraid to think outside the box and explore new ideas.",
            "A journey of a thousand miles begins with a single step. Every great achievement starts with a small, simple action.",
            "In three words I can sum up everything I've learned about life: it goes on.",
            "The only way to do great work is to love what you do.",
            "Life is what happens when you're busy making other plans.",
            "Whether you think you can, or you think you can't – you're right.",
            "The best time to plant a tree was 20 years ago. The second best time is now.",
            "That which does not kill us makes us stronger.",
            "Fortune favors the bold.",
            "I think, therefore I am.",
            "Time is money.",
            "Knowledge is power.",
            "The only thing we have to fear is fear itself.",
            "To be, or not to be: that is the question.",
            "The pen is mightier than the sword.",
            "Where there's a will, there's a way.",
            "All that glitters is not gold.",
            "A picture is worth a thousand words.",
            "Actions speak louder than words.",
            "Practice makes perfect.",
            "Easy come, easy go.",
            "Don't count your chickens before they hatch.",
            "The early bird catches the worm.",
            "Every cloud has a silver lining.",
            "Hope for the best, but prepare for the worst.",
            "If you want something done right, do it yourself.",
            "Keep your friends close and your enemies closer.",
            "Laughter is the best medicine.",
            "No man is an island.",
            "There's no place like home.",
            "Two heads are better than one."
        ],
        french: [
            "La technologie a révolutionné notre façon de communiquer, de travailler et de vivre, créant de nouvelles opportunités de croissance et d'innovation.",
            "Lire des livres ouvre les portes de nouveaux mondes de connaissance et d'imagination, enrichissant notre esprit de sagesse et de créativité.",
            "Le succès vient à ceux qui travaillent dur, restent concentrés et n'abandonnent jamais leurs rêves malgré les défis.",
            "La nature nous offre une beauté et une inspiration infinies, nous rappelant d'apprécier les joies simples de la vie.",
            "L'amitié véritable est un trésor précieux qui donne à la vie plus de sens et de valeur.",
            "Le seul vrai voyage, ce n'est pas de chercher de nouveaux paysages, mais d'avoir de nouveaux yeux.",
            "L'éducation est l'arme la plus puissante que l'on puisse utiliser pour changer le monde.",
            "La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre à danser sous la pluie.",
            "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.",
            "Chaque jour est une nouvelle chance de changer votre vie. Saisissez-la avec détermination et optimisme.",
            "La seule chose que l'on est sûr de ne pas réussir est celle que l'on ne tente pas.",
            "Le bonheur n'est pas une destination à atteindre, mais une manière de voyager.",
            "Il n'est jamais trop tard pour devenir ce que nous aurions pu être.",
            "Soyez vous-même, tous les autres sont déjà pris.",
            "La créativité demande du courage pour se défaire des certitudes.",
            "L'union fait la force.",
            "Mieux vaut tard que jamais.",
            "Il n'y a pas de fumée sans feu.",
            "Qui ne risque rien n'a rien.",
            "Après la pluie, le beau temps.",
            "Vouloir, c'est pouvoir.",
            "L'habitude est une seconde nature.",
            "Petit à petit, l'oiseau fait son nid.",
            "L'argent ne fait pas le bonheur.",
            "Tout est bien qui finit bien.",
            "La nuit porte conseil.",
            "Loin des yeux, loin du cœur.",
            "Les murs ont des oreilles.",
            "Rien ne sert de courir, il faut partir à point.",
            "On ne fait pas d'omelette sans casser des œufs.",
            "Il faut battre le fer tant qu'il est chaud.",
            "La fortune sourit aux audacieux.",
            "L'appétit vient en mangeant.",
            "Chose promise, chose due.",
            "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.",
            "La parole est d'argent, mais le silence est d'or.",
            "Mieux vaut prévenir que guérir.",
            "Aux grands maux les grands remèdes.",
            "Pierre qui roule n'amasse pas mousse.",
            "C'est en forgeant qu'on devient forgeron."
        ],
        spanish: [
            "La tecnología ha revolucionado la forma en que nos comunicamos, trabajamos y vivimos, creando nuevas opportunidades de crecimiento e innovación.",
            "Leer libros abre las puertas a nuevos mundos de conocimiento e imaginación, enriqueciendo nuestra mente con sabiduría y creatividad.",
            "El éxito llega a quienes trabajan duro, se mantienen enfocados y nunca renuncian a sus sueños a pesar de los desafíos.",
            "La naturaleza nos brinda una belleza e inspiración infinitas, recordándonos apreciar las alegrías simples de la vida.",
            "La verdadera amistad es un tesoro invaluable que da a la vida más sentido y valor.",
            "El único viaje verdadero no es buscar nuevos paisajes, sino tener nuevos ojos.",
            "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
            "La vida no es esperar a que pase la tormenta, es aprender a bailar bajo la lluvia.",
            "El coraje no es la ausencia de miedo, sino la capacidad de vencer lo que se teme.",
            "Cada día es una nueva oportunidad para cambiar tu vida. Aprovéchala con determinación y optimismo.",
            "La única cosa de la que estamos seguros de no tener éxito es la que no intentamos.",
            "La felicidad no es un destino al que llegar, sino una forma de viajar.",
            "Nunca es demasiado tarde para ser lo que podrías haber sido.",
            "Sé tú mismo, todos los demás ya están ocupados.",
            "La creatividad requiere el coraje de desprenderse de las certezas.",
            "La unión hace la fuerza.",
            "Más vale tarde que nunca.",
            "No hay humo sin fuego.",
            "Quien no arriesga, no gana.",
            "Después de la tormenta, viene la calma.",
            "Querer es poder.",
            "La costumbre es una segunda naturaleza.",
            "Poco a poco se llega lejos.",
            "El dinero no da la felicidad.",
            "Bien está lo que bien acaba.",
            "La noche es buena consejera.",
            "Ojos que no ven, corazón que no siente.",
            "Las paredes oyen.",
            "No por mucho madrugar amanece más temprano.",
            "No se puede hacer una tortilla sin romper huevos.",
            "Al hierro caliente, batir de repente.",
            "La fortuna favorece a los audaces.",
            "El apetito se abre comiendo.",
            "Lo prometido es deuda.",
            "No vendas la piel del oso antes de cazarlo.",
            "La palabra es plata, el silencio es oro.",
            "Más vale prevenir que curar.",
            "A grandes males, grandes remedios.",
            "Piedra que rueda no cría moho.",
            "La práctica hace al maestro."
        ]
    };

    let currentLanguage = 'arabic';
    let currentText = '';
    let currentIndex = 0;
    let startTime = 0;
    let timer = null;
    let gameStarted = false;
    let totalErrors = 0;
    const modeSelector = document.getElementById('modeSelector');
    const timeSelector = document.getElementById('timeSelector');
    let mode = 'passage';
    let timeLimit = 60;
    let timeLeft = 60;
    let timerInterval = null;
    let passagesCompleted = 0;
    let totalTypedChars = 0;
    let totalErrorsAll = 0;
    let wordsTypedSoFar = 0;
    let isFetchingNewPassage = false;
    let arabicCache = [];
    let isFetchingArabicBatch = false;
    let englishCache = [];
    let isFetchingEnglishBatch = false;
    let nextPrefetchedPassage = null;
    let prefetching = false;
    const punctuationToggle = document.getElementById('punctuationToggle');
    let punctuationEnabled = punctuationToggle.checked;
    const wordCountSelector = document.getElementById('wordCountSelector');
    let wordLimit = 10;

    // DOM Elements
    const textDisplay = document.getElementById('textDisplay');
    const inputArea = document.getElementById('inputArea');
    const startBtn = document.getElementById('startBtn');
    const arabicBtn = document.getElementById('arabicBtn');
    const englishBtn = document.getElementById('englishBtn');
    const frenchBtn = document.getElementById('frenchBtn');
    const spanishBtn = document.getElementById('spanishBtn');
    const gameOver = document.getElementById('gameOver');
    const resetBtn = document.getElementById('resetBtn');
    
    // Stat Displays
    const timeValue = document.getElementById('timeValue');
    const wpmValue = document.getElementById('wpmValue');
    const accuracyValue = document.getElementById('accuracyValue');
    const errorsValue = document.getElementById('errorsValue');
    const toggleStatsBtn = document.getElementById('toggleStatsBtn');
    const statsSection = document.querySelector('.stats');
    let statsHidden = false;

    function updateUIText(language) {
        const langTranslations = translations[language];
        document.documentElement.lang = language === 'arabic' ? 'ar' : 'en';
        document.documentElement.dir = language === 'arabic' ? 'rtl' : 'ltr';
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langTranslations[key]) {
                element.textContent = langTranslations[key];
            }
        });
        // Translate mode selector
        document.querySelectorAll('#modeSelector option').forEach(option => {
            const key = option.getAttribute('data-translate');
            if (langTranslations[key]) {
                option.textContent = langTranslations[key];
            }
        });
        // Translate time selector
        document.querySelectorAll('#timeSelector option').forEach(option => {
            const key = option.getAttribute('data-translate');
            if (langTranslations[key]) {
                option.textContent = langTranslations[key];
            }
        });
        if (!gameStarted) {
            inputArea.placeholder = langTranslations.placeholder;
        }
        // Update stats toggle button text
        toggleStatsBtn.textContent = statsHidden ? langTranslations.showStats : langTranslations.hideStats;
    }

    function selectLanguage(language) {
        currentLanguage = language;
        arabicBtn.classList.toggle('active', language === 'arabic');
        englishBtn.classList.toggle('active', language === 'english');
        frenchBtn.classList.toggle('active', language === 'french');
        spanishBtn.classList.toggle('active', language === 'spanish');
        updateUIText(language);
        // Clear prefetched passage and fetch a new one in the selected language
        nextPrefetchedPassage = null;
        if (!gameStarted) {
            displayWelcomeMessage();
            // Start prefetching immediately
            prefetchNextPassage();
        }
    }
    
    arabicBtn.addEventListener('click', () => selectLanguage('arabic'));
    englishBtn.addEventListener('click', () => selectLanguage('english'));
    frenchBtn.addEventListener('click', () => selectLanguage('french'));
    spanishBtn.addEventListener('click', () => selectLanguage('spanish'));
    resetBtn.addEventListener('click', resetGame);

    // Stats toggle
    toggleStatsBtn.addEventListener('click', () => {
        statsHidden = !statsHidden;
        document.body.classList.toggle('hide-stats', statsHidden);
        toggleStatsBtn.textContent = statsHidden ? translations[currentLanguage].showStats : translations[currentLanguage].hideStats;
    });

    function displayWelcomeMessage() {
        textDisplay.textContent = translations[currentLanguage].welcomeMessage;
        textDisplay.className = `text-display ${currentLanguage}`;
    }

    function isGoodLength(text) {
        return text && text.length >= 100 && text.length <= 1000;
    }

    function removeArabicDiacritics(text) {
        // Remove Arabic diacritics (tashkeel)
        return text.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
    }

    function normalizeArabic(text) {
        // Replace ٱ (U+0671) with ا (U+0627)
        return text.replace(/\u0671/g, '\u0627');
    }

    async function fetchSinglePassage(language) {
        function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
        let passage = null;
        let success = false;
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject('timeout'), 2000));
        const fetchPromise = (async () => {
            if (language === 'arabic') {
                const apis = [
                    async () => {
                        const response = await fetch('https://raw.githubusercontent.com/r-spacex/source-code/main/arabic-quotes/db.json');
                        if (!response.ok) throw new Error('Arabic Quotes failed');
                        const data = await response.json();
                        const quotes = data.quotes.filter(q => isGoodLength(q.quote));
                        if (quotes.length > 0) return pick(quotes).quote;
                        throw new Error('No good Arabic quote');
                    },
                    async () => {
                        const surah = Math.floor(Math.random() * 114) + 1;
                        const ayah = Math.floor(Math.random() * 7) + 1;
                        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`);
                        if (!response.ok) throw new Error('Quran API failed');
                        const data = await response.json();
                        if (isGoodLength(data.data.text)) return data.data.text;
                        throw new Error('No good ayah from Quran API');
                    },
                    async () => {
                        const response = await fetch('https://quotes.rest/qod?language=ar');
                        if (!response.ok) throw new Error('They Said So AR failed');
                        const data = await response.json();
                        if (data && data.contents && data.contents.quotes && data.contents.quotes[0]) {
                            let text = data.contents.quotes[0].quote;
                            if (isGoodLength(text)) return text;
                        }
                        throw new Error('No good quote from They Said So AR');
                    }
                ];
                const shuffled = apis.sort(() => Math.random() - 0.5);
                for (let api of shuffled) {
                    try {
                        let t = await api();
                        t = removeArabicDiacritics(t);
                        passage = t;
                        success = true;
                        break;
                    } catch (e) { /* try next */ }
                }
            } else if (language === 'french') {
                const apis = [
                    async () => {
                        // Quotable.io supports French
                        const response = await fetch('https://api.quotable.io/random?lang=fr');
                        if (!response.ok) throw new Error('Quotable FR failed');
                        const data = await response.json();
                        if (isGoodLength(data.content)) return data.content;
                        throw new Error('No good French quote');
                    },
                    async () => {
                        // Local fallback for French
                        throw new Error('No French API');
                    }
                ];
                const shuffled = apis.sort(() => Math.random() - 0.5);
                for (let api of shuffled) {
                    try {
                        let t = await api();
                        passage = t;
                        success = true;
                        break;
                    } catch (e) { /* try next */ }
                }
            } else if (language === 'spanish') {
                const apis = [
                    async () => {
                        // Quotable.io supports Spanish
                        const response = await fetch('https://api.quotable.io/random?lang=es');
                        if (!response.ok) throw new Error('Quotable ES failed');
                        const data = await response.json();
                        if (isGoodLength(data.content)) return data.content;
                        throw new Error('No good Spanish quote');
                    },
                    async () => {
                        // Local fallback for Spanish
                        throw new Error('No Spanish API');
                    }
                ];
                const shuffled = apis.sort(() => Math.random() - 0.5);
                for (let api of shuffled) {
                    try {
                        let t = await api();
                        passage = t;
                        success = true;
                        break;
                    } catch (e) { /* try next */ }
                }
            } else {
                const apis = [
                    async () => {
                        let tries = 0;
                        while (tries < 5) {
                            const response = await fetch('https://api.quotable.io/random');
                            if (!response.ok) throw new Error('Quotable failed');
                            const data = await response.json();
                            if (isGoodLength(data.content)) return data.content;
                            tries++;
                        }
                        throw new Error('No good quote from Quotable');
                    },
                    async () => {
                        let tries = 0;
                        while (tries < 5) {
                            const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&sentences=3');
                            if (!response.ok) throw new Error('Bacon Ipsum failed');
                            const data = await response.json();
                            let text = Array.isArray(data) ? data[0] : data;
                            if (isGoodLength(text)) return text;
                            tries++;
                        }
                        throw new Error('No good passage from Bacon Ipsum');
                    },
                    async () => {
                        let tries = 0;
                        while (tries < 5) {
                            const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
                            if (!response.ok) throw new Error('Useless Facts failed');
                            const data = await response.json();
                            if (isGoodLength(data.text)) return data.text;
                            tries++;
                        }
                        throw new Error('No good fact from Useless Facts');
                    },
                    async () => {
                        let tries = 0;
                        while (tries < 5) {
                            const response = await fetch('https://quotes.rest/qod?language=en');
                            if (!response.ok) throw new Error('They Said So failed');
                            const data = await response.json();
                            if (data && data.contents && data.contents.quotes && data.contents.quotes[0]) {
                                let text = data.contents.quotes[0].quote;
                                if (isGoodLength(text)) return text;
                            }
                            tries++;
                        }
                        throw new Error('No good quote from They Said So');
                    }
                ];
                const shuffled = apis.sort(() => Math.random() - 0.5);
                for (let api of shuffled) {
                    try {
                        let t = await api();
                        passage = t;
                        success = true;
                        break;
                    } catch (e) { /* try next */ }
                }
            }
            if (!success) {
                // Fallback to local
                const fallbackTexts = localTexts[language] && localTexts[language].filter(isGoodLength);
                let t = fallbackTexts && fallbackTexts.length > 0 ? fallbackTexts[Math.floor(Math.random() * fallbackTexts.length)] : 'No passage available.';
                if (language === 'arabic') t = removeArabicDiacritics(t);
                passage = t;
            }
            return passage;
        })();
        try {
            return await Promise.race([fetchPromise, timeoutPromise]);
        } catch (e) {
            // On timeout or error, fallback to local
            const fallbackTexts = localTexts[language] && localTexts[language].filter(isGoodLength);
            let t = fallbackTexts && fallbackTexts.length > 0 ? fallbackTexts[Math.floor(Math.random() * fallbackTexts.length)] : 'No passage available.';
            if (language === 'arabic') t = removeArabicDiacritics(t);
            return t;
        }
    }

    async function prefetchNextPassage() {
        if (prefetching) return;
        prefetching = true;
        nextPrefetchedPassage = await fetchSinglePassage(currentLanguage);
        prefetching = false;
    }

    async function getNextPassage() {
        let passage;
        if (nextPrefetchedPassage) {
            passage = nextPrefetchedPassage;
            nextPrefetchedPassage = null;
            // Start prefetching the next one immediately
            prefetchNextPassage();
        } else {
            // If prefetch isn't ready (e.g., first load), fetch one directly
            // and then start prefetching the next one.
            passage = await fetchSinglePassage(currentLanguage);
            prefetchNextPassage();
        }
        return passage;
    }

    async function fetchText() {
        textDisplay.textContent = translations[currentLanguage].fetchingText;
        currentText = await getNextPassage();
    }

    // Mode selection logic
    modeSelector.addEventListener('change', () => {
        mode = modeSelector.value;
        const customTextInput = document.getElementById('customTextInput');
        if (mode === 'timed') {
            timeSelector.style.display = '';
            wordCountSelector.style.display = 'none';
            customTextInput.style.display = 'none';
        } else if (mode === 'words') {
            timeSelector.style.display = 'none';
            wordCountSelector.style.display = '';
            customTextInput.style.display = 'none';
        } else if (mode === 'custom') {
            timeSelector.style.display = 'none';
            wordCountSelector.style.display = 'none';
            customTextInput.style.display = '';
        } else {
            timeSelector.style.display = 'none';
            wordCountSelector.style.display = 'none';
            customTextInput.style.display = 'none';
        }
    });

    timeSelector.addEventListener('change', () => {
        timeLimit = parseInt(timeSelector.value, 10);
    });

    wordCountSelector.addEventListener('change', () => {
        wordLimit = parseInt(wordCountSelector.value, 10);
    });

    // Sudden death logic
    const suddenDeathToggle = document.getElementById('suddenDeathToggle');
    let suddenDeathEnabled = suddenDeathToggle.checked;
    suddenDeathToggle.addEventListener('change', () => {
        suddenDeathEnabled = suddenDeathToggle.checked;
    });

    async function startGame() {
        if (gameStarted) return;
        gameStarted = true;
        // Disable mode and time selectors
        modeSelector.disabled = true;
        timeSelector.disabled = true;
        currentIndex = 0;
        totalErrors = 0;
        passagesCompleted = 0;
        totalTypedChars = 0;
        totalErrorsAll = 0;
        wordsTypedSoFar = 0;
        gameOver.style.display = 'none';
        startBtn.disabled = true;
        startBtn.textContent = translations[currentLanguage].fetchingText;
        // If custom mode, use user's text
        if (mode === 'custom') {
            const customTextInput = document.getElementById('customTextInput');
            currentText = customTextInput.value.trim();
            if (!currentText) {
                currentText = 'Please paste some text to start.';
            }
        } else {
            startBtn.disabled = true;
            startBtn.textContent = translations[currentLanguage].fetchingText;
            await fetchText();
            startBtn.disabled = false;
        }
        displayText();
        inputArea.disabled = false;
        inputArea.classList.remove('disabled');
        inputArea.value = '';
        textDisplay.className = `text-display ${currentLanguage}`;
        inputArea.className = `input-area ${currentLanguage}`;
        startTime = Date.now();
        if (mode === 'timed') {
            timeLimit = parseInt(timeSelector.value, 10);
            timeLeft = timeLimit;
            timerInterval = setInterval(() => {
                const elapsed = (Date.now() - startTime) / 1000;
                timeLeft = Math.max(0, timeLimit - elapsed);
                timeValue.textContent = timeLeft.toFixed(1);
                updateStats();
                if (timeLeft <= 0) {
                    endGame();
                }
            }, 100);
        } else {
            timer = setInterval(updateStats, 100);
        }
        startBtn.textContent = translations[currentLanguage].playing;
    }
    startBtn.addEventListener('click', startGame);

    function displayText() {
        textDisplay.innerHTML = '';
        if (!punctuationEnabled) {
            // Show passage, but only non-punctuation chars are highlighted
            for (let i = 0; i < currentText.length; i++) {
                const char = currentText[i];
                const span = document.createElement('span');
                span.textContent = char;
                if (!/\p{P}|\p{S}/u.test(char)) {
                    span.classList.add('char');
                }
                textDisplay.appendChild(span);
            }
        } else {
            for (let i = 0; i < currentText.length; i++) {
                const span = document.createElement('span');
                span.textContent = currentText[i];
                span.classList.add('char');
                textDisplay.appendChild(span);
            }
        }
    }

    inputArea.addEventListener('input', handleInput);

    async function nextPassageTimedMode() {
        passagesCompleted++;
        totalTypedChars += inputArea.value.length;
        totalErrorsAll += totalErrors;
        currentText = await getNextPassage();
        displayText();
        inputArea.value = '';
        currentIndex = 0;
        totalErrors = 0;
    }

    async function nextPassageWordMode() {
        if (isFetchingNewPassage) return;
        isFetchingNewPassage = true;

        // Add words from finished passage to total
        const wordsInPassage = inputArea.value.trim().split(/\s+/).filter(Boolean).length;
        wordsTypedSoFar += wordsInPassage;

        // Keep track of total chars and errors for stats
        passagesCompleted++;
        totalTypedChars += inputArea.value.length;
        totalErrorsAll += totalErrors;

        inputArea.disabled = true;

        try {
            // Fetch and display new passage
            currentText = await getNextPassage();
            displayText();

            // Reset for new passage
            inputArea.value = '';
            currentIndex = 0;
            totalErrors = 0;
        } finally {
            isFetchingNewPassage = false;
            inputArea.disabled = false;
            inputArea.focus();
        }
    }

    punctuationToggle.addEventListener('change', () => {
        punctuationEnabled = punctuationToggle.checked;
    });

    function stripPunctuation(text) {
        // Remove all Unicode punctuation
        return text.replace(/[\p{P}\p{S}]/gu, '');
    }

    function handleInput() {
        const typedText = inputArea.value;
        const chars = textDisplay.querySelectorAll('.char');
        const refText = currentText;
        let compareTyped = typedText;
        let compareRef = refText;
        if (currentLanguage === 'arabic') {
            compareTyped = normalizeArabic(typedText);
            compareRef = normalizeArabic(refText);
        }
        if (!punctuationEnabled) {
            compareTyped = stripPunctuation(compareTyped);
            compareRef = stripPunctuation(compareRef);
        }
        // Sudden death check
        if (suddenDeathEnabled && totalErrors > 0) {
            endGame();
            return;
        }
        if (mode === 'words') {
            // End test when word limit is reached
            const currentWordsTypedArr = compareTyped.trim().split(/\s+/).filter(Boolean);
            const totalWords = wordsTypedSoFar + currentWordsTypedArr.length;
            if (totalWords >= wordLimit) {
                // To make sure stats are accurate, trim user input to word limit
                const wordsToTake = wordLimit - wordsTypedSoFar;
                const typedWords = inputArea.value.trim().split(/\s+/);
                inputArea.value = typedWords.slice(0, wordsToTake).join(' ');
                endGame();
                return;
            }
        }
        if (compareTyped.length >= compareRef.length) {
            if (mode === 'passage') {
                endGame();
                return;
            }
            if (mode === 'timed' && timeLeft > 0) {
                nextPassageTimedMode();
                return;
            }
            if (mode === 'words') {
                nextPassageWordMode();
                return;
            }
        }
        currentIndex = typedText.length;
        totalErrors = 0;
        let visibleChars = Array.from(chars);
        let currentPosInCompare = 0;
        let currentPosInTyped = 0;

        for (let i = 0; i < visibleChars.length; i++) {
            const charSpan = visibleChars[i];
            charSpan.classList.remove('correct', 'incorrect', 'current');
            
            const originalChar = charSpan.textContent;
            const isPunct = punctuationEnabled ? false : (/\p{P}|\p{S}/u.test(originalChar));

            if (currentPosInTyped < typedText.length) {
                if (!isPunct) {
                    if (currentPosInCompare < compareRef.length && currentPosInCompare < compareTyped.length) {
                         if (compareTyped[currentPosInCompare].toLowerCase() === compareRef[currentPosInCompare].toLowerCase()) {
                            charSpan.classList.add('correct');
                        } else {
                            charSpan.classList.add('incorrect');
                            totalErrors++;
                        }
                    }
                    currentPosInCompare++;
                }
                currentPosInTyped++;
            }
        }
        
        if (currentPosInTyped === typedText.length && currentPosInTyped < visibleChars.length) {
            let nextCharSpan = visibleChars[currentPosInTyped];
            // Skip over punctuation to find the next real character for the cursor
            if (!punctuationEnabled) {
                while(nextCharSpan && (/\p{P}|\p{S}/u.test(nextCharSpan.textContent))) {
                    currentPosInTyped++;
                    nextCharSpan = visibleChars[currentPosInTyped];
                }
            }
            if(nextCharSpan) {
                nextCharSpan.classList.add('current');
            }
        }

        const accuracy = currentIndex > 0 ? Math.round(((currentIndex - totalErrors) / currentIndex) * 100) : 100;
        accuracyValue.textContent = accuracy + '%';
        errorsValue.textContent = totalErrors;
    }

    function updateStats() {
        let elapsedSeconds;
        let charsTyped;
        let errors;
        if (mode === 'timed') {
            elapsedSeconds = timeLimit - timeLeft;
            charsTyped = totalTypedChars + inputArea.value.length;
            errors = totalErrorsAll + totalErrors;
        } else if (mode === 'words') {
            elapsedSeconds = (Date.now() - startTime) / 1000;
            charsTyped = inputArea.value.length;
            errors = totalErrors;
        } else {
            elapsedSeconds = (Date.now() - startTime) / 1000;
            charsTyped = inputArea.value.length;
            errors = totalErrors;
        }
        let wpm = elapsedSeconds > 0 ? Math.round((charsTyped / 5) / (elapsedSeconds / 60)) : 0;
        wpm = Math.max(0, wpm - errors * 2);
        wpmValue.textContent = wpm;
        if (mode === 'passage') {
            timeValue.textContent = elapsedSeconds.toFixed(1);
        }
    }

    function endGame() {
        clearInterval(timer);
        clearInterval(timerInterval);
        gameStarted = false;
        // Re-enable mode and time selectors
        modeSelector.disabled = false;
        timeSelector.disabled = false;
        let elapsedSeconds;
        let charsTyped;
        let errors;
        if (mode === 'timed' || mode === 'words') {
            elapsedSeconds = (mode === 'timed') ? timeLimit : (Date.now() - startTime) / 1000;
            charsTyped = totalTypedChars + inputArea.value.length;
            errors = totalErrorsAll + totalErrors;
        } else {
            elapsedSeconds = (Date.now() - startTime) / 1000;
            charsTyped = inputArea.value.length;
            errors = totalErrors;
        }
        let finalWpm = elapsedSeconds > 0 ? Math.round((charsTyped / 5) / (elapsedSeconds / 60)) : 0;
        finalWpm = Math.max(0, finalWpm - errors * 2);
        const finalAccuracy = charsTyped > 0 ? Math.round(((charsTyped - errors) / charsTyped) * 100) : 100;
        document.getElementById('finalTime').textContent = elapsedSeconds.toFixed(1) + 's';
        document.getElementById('finalWpm').textContent = finalWpm;
        document.getElementById('finalAccuracy').textContent = finalAccuracy + '%';
        document.getElementById('finalErrors').textContent = errors;
        gameOver.style.display = 'block';
        inputArea.disabled = true;
        inputArea.classList.add('disabled');
        startBtn.disabled = false;
        startBtn.textContent = translations[currentLanguage].startGame;

        // Add after endGame function
        function getResultsText() {
            const time = document.getElementById('finalTime').textContent;
            const wpm = document.getElementById('finalWpm').textContent;
            const accuracy = document.getElementById('finalAccuracy').textContent;
            const errors = document.getElementById('finalErrors').textContent;
            return `Typing Test Results:\nTime: ${time}\nWPM: ${wpm}\nAccuracy: ${accuracy}\nErrors: ${errors}`;
        }

        function showTempMessage(btn, msg) {
            const old = btn.textContent;
            btn.textContent = msg;
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = old;
                btn.disabled = false;
            }, 1500);
        }

        document.getElementById('copyResultsBtn').addEventListener('click', function() {
            const text = getResultsText();
            navigator.clipboard.writeText(text).then(() => {
                showTempMessage(this, 'Copied!');
            });
        });

        document.getElementById('shareResultsBtn').addEventListener('click', function() {
            const text = getResultsText();
            if (navigator.share) {
                navigator.share({ text }).then(() => {
                    showTempMessage(this, 'Shared!');
                }).catch(() => {});
            } else {
                navigator.clipboard.writeText(text).then(() => {
                    showTempMessage(this, 'Copied!');
                });
            }
        });

        // Reset game variables
        currentIndex = 0;
        totalErrors = 0;
        inputArea.value = '';
        inputArea.disabled = true;
        wpmValue.textContent = '0';
        accuracyValue.textContent = '100%';
        errorsValue.textContent = '0';
        wordsTypedSoFar = 0;
        updateUIText(currentLanguage);
        displayWelcomeMessage();
        prefetchNextPassage();
    }

    function resetGame() {
        clearInterval(timer);
        clearInterval(timerInterval);
        gameStarted = false;
        // Re-enable mode and time selectors
        modeSelector.disabled = false;
        timeSelector.disabled = false;
        currentIndex = 0;
        totalErrors = 0;
        inputArea.value = '';
        inputArea.disabled = true;
        inputArea.classList.add('disabled');
        startBtn.disabled = false;
        startBtn.textContent = translations[currentLanguage].startGame;
        gameOver.style.display = 'none';
        timeValue.textContent = '0';
        wpmValue.textContent = '0';
        accuracyValue.textContent = '100%';
        errorsValue.textContent = '0';
        wordsTypedSoFar = 0;
        updateUIText(currentLanguage);
        displayWelcomeMessage();
        prefetchNextPassage();
    }

    // Initial setup
    selectLanguage('english');
}); 