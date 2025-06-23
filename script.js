document.addEventListener('DOMContentLoaded', () => {
    const localTexts = {
        arabic: [
            "في عالم متغير وسريع الخطى، يصبح التعلم المستمر ضرورة لا غنى عنها لتحقيق النجاح والتفوق في مختلف مجالات الحياة. فالعلم يفتح أمامنا آفاقاً جديدة ويمنحنا القدرة على مواجهة التحديات بثقة وإبداع، ويجعلنا أكثر قدرة على التكيف مع المتغيرات المتسارعة في هذا العصر الرقمي.",
            "الصداقة الحقيقية هي تلك التي تمنحنا القوة في أوقات الضعف، وتضيء لنا الطريق عندما تشتد الظلمات. فالأصدقاء الحقيقيون هم من يقفون إلى جانبنا دون مقابل، ويشجعوننا على تحقيق أحلامنا مهما كانت الصعوبات، ويشاركوننا لحظات الفرح والحزن على حد سواء.",
            "الوقت هو أثمن ما نملك في هذه الحياة، فهو المورد الوحيد الذي لا يمكن تعويضه أو استرجاعه. لذلك يجب علينا أن نستثمر كل لحظة في تطوير أنفسنا وتحقيق أهدافنا، وأن نبتعد عن التسويف والتأجيل، لأن النجاح لا يأتي إلا لمن يستغل وقته بحكمة وذكاء.",
            "الأمل هو الشعلة التي تضيء دروبنا في أحلك الظروف، ويمنحنا القوة للاستمرار رغم الصعوبات. فمهما اشتدت الأزمات وتكاثرت التحديات، يبقى الأمل هو الدافع الذي يدفعنا للمضي قدماً وتحقيق الإنجازات التي نحلم بها.",
            "النجاح ليس نهاية الطريق، بل هو بداية لرحلة جديدة من التحديات والطموحات. فكل إنجاز نحققه يجب أن يكون دافعاً لنا لمواصلة العمل والاجتهاد، وعدم الاكتفاء بما وصلنا إليه، لأن الطموح لا حدود له.",
            "القراءة هي المفتاح الذي يفتح لنا أبواب المعرفة والحكمة، ويمنحنا القدرة على فهم العالم من حولنا بشكل أعمق. فكل كتاب نقرأه يضيف إلى رصيدنا المعرفي ويجعلنا أكثر قدرة على التفكير النقدي واتخاذ القرارات الصائبة.",
            "لا تخف من الفشل، فهو جزء لا يتجزأ من طريق النجاح. فكل تجربة فاشلة تحمل في طياتها درساً جديداً وخبرة تضاف إلى رصيدك، والمهم هو أن تتعلم من أخطائك وتواصل المحاولة حتى تحقق أهدافك.",
            "السعادة الحقيقية لا تأتي من المال أو الشهرة، بل من الشعور بالرضا الداخلي والسلام النفسي. فحينما نساعد الآخرين وننشر الخير من حولنا، نشعر بسعادة لا توصف وراحة ضمير لا تقدر بثمن.",
            "كن أنت التغيير الذي تريد أن تراه في العالم، ولا تنتظر من الآخرين أن يبدأوا. فكل تغيير كبير يبدأ بخطوة صغيرة، ومع الإصرار والعزيمة يمكننا أن نصنع فرقاً حقيقياً في حياتنا وحياة من حولنا.",
            "العقل البشري يمتلك قدرات هائلة لا حدود لها، وكلما سعينا لتطويره وتنمية مهاراتنا الذهنية، أصبحنا أكثر قدرة على الإبداع والابتكار وتحقيق الإنجازات العظيمة.",
            "في كل صباح جديد، يمنحنا الأمل فرصة لنبدأ من جديد ونصحح أخطاء الأمس. الحياة مليئة بالتحديات، لكن بالإصرار والعمل الجاد يمكننا تحقيق أحلامنا مهما بدت بعيدة. لا تدع الخوف يمنعك من المحاولة، فكل تجربة تقربك أكثر من هدفك.",
            "العائلة هي الحضن الدافئ الذي نلجأ إليه في أوقات الفرح والحزن. وجود الأهل والأحبة حولنا يمنحنا شعوراً بالأمان والانتماء، ويجعلنا أكثر قدرة على مواجهة صعوبات الحياة بثقة وطمأنينة.",
            "النجاح لا يأتي صدفة، بل هو نتيجة للتخطيط الجيد والعمل المستمر والتعلم من الأخطاء. كل خطوة صغيرة نحو هدفك تساهم في بناء مستقبل أفضل، فلا تستهين بأي إنجاز مهما كان بسيطاً.",
            "الطموح هو الوقود الذي يدفعنا للمضي قدماً وتحقيق المزيد من الإنجازات. لا تضع حدوداً لأحلامك، فالإرادة القوية قادرة على تجاوز كل العقبات وتحويل المستحيل إلى ممكن.",
            "الصحة تاج على رؤوس الأصحاء لا يراه إلا المرضى. حافظ على صحتك بالغذاء السليم وممارسة الرياضة والابتعاد عن العادات السيئة، فالجسم السليم أساس الحياة السعيدة.",
            "التسامح قوة وليس ضعفاً، فهو يحرر القلب من الأحقاد ويمنحنا راحة البال. عندما نسامح الآخرين، نمنح أنفسنا فرصة للسلام الداخلي ونفتح أبواباً جديدة للعلاقات الإنسانية.",
            "التعليم هو السلاح الأقوى الذي يمكننا من تغيير العالم. بالعلم والمعرفة نصبح أكثر قدرة على فهم الواقع واتخاذ القرارات الصحيحة التي تؤثر إيجاباً على حياتنا وحياة من حولنا.",
            "العمل التطوعي يعزز روح التعاون والانتماء للمجتمع، ويمنحنا شعوراً بالرضا والسعادة. عندما نساعد الآخرين دون انتظار مقابل، نكتشف أن العطاء هو أعظم أشكال السعادة.",
            "الذكريات الجميلة تبقى محفورة في قلوبنا مهما مرت السنوات. استمتع بكل لحظة تعيشها مع من تحب، فالحياة قصيرة ولا تستحق أن نضيعها في الحزن أو الندم.",
            "النجاح الحقيقي هو أن تظل متمسكاً بقيمك ومبادئك مهما كانت المغريات. كن صادقاً مع نفسك ومع الآخرين، فالأمانة والصدق هما أساس الثقة والاحترام المتبادل.",
            "الطبيعة تعلمنا الصبر والتأمل، فكل زهرة تحتاج إلى وقت لتنمو وتزدهر. لا تتعجل النتائج، فكل شيء جميل يحتاج إلى جهد ووقت ليكتمل.",
            "الابتكار هو القدرة على رؤية الأشياء من منظور مختلف وإيجاد حلول جديدة للمشكلات القديمة. لا تخف من التجربة، فكل فكرة جديدة قد تكون بداية لاكتشاف عظيم.",
            "النجاح لا يقاس بما تحققه لنفسك فقط، بل بما تقدمه للآخرين من دعم ومساعدة. كن سبباً في سعادة غيرك، فالعطاء يضاعف الفرح ويمنح الحياة معنى أعمق.",
            "القراءة توسع آفاق العقل وتغذي الروح، فهي نافذتك إلى عوالم جديدة وتجارب متنوعة. اجعل من القراءة عادة يومية، وستلاحظ الفرق في طريقة تفكيرك ونظرتك للحياة.",
            "الهدوء في مواجهة الأزمات دليل على قوة الشخصية ونضج العقل. لا تدع الغضب يسيطر عليك، بل حاول دائماً أن تتعامل مع المواقف الصعبة بحكمة وروية.",
            "النجاح يبدأ بفكرة، ويتحقق بالإرادة والعمل. لا تنتظر الظروف المثالية، بل اصنع فرصتك بنفسك وابدأ من حيث أنت بما تملك من إمكانيات.",
            "الاحترام المتبادل أساس العلاقات الإنسانية الناجحة. عامل الآخرين كما تحب أن يعاملوك، وستجد أن الاحترام يجلب المحبة والثقة.",
            "كل يوم جديد هو فرصة لتصحيح الأخطاء وتحقيق الأهداف. لا تيأس من الفشل، فكل محاولة تقربك خطوة من النجاح.",
            "العمل بروح الفريق يحقق نتائج أفضل من العمل الفردي. التعاون وتبادل الأفكار والخبرات يفتحان آفاقاً جديدة للإبداع والتميز.",
            "الحياة قصيرة، فلا تضع وقتك في القلق على ما لا تستطيع تغييره. ركز على ما يمكنك فعله اليوم، وكن ممتناً لكل نعمة لديك."
        ],
        english: [
            "In a rapidly changing world, continuous learning has become an essential key to success and excellence in all areas of life. Knowledge opens new horizons and gives us the ability to face challenges with confidence and creativity, making us more adaptable to the fast-paced changes of the digital age.",
            "True friendship is the kind that gives us strength in times of weakness and lights our way when darkness falls. Real friends stand by us without expecting anything in return, encourage us to pursue our dreams despite difficulties, and share both our joyful and sad moments.",
            "Time is the most precious thing we possess in this life, as it is the only resource that cannot be replaced or recovered. Therefore, we must invest every moment in developing ourselves and achieving our goals, avoiding procrastination and delay, because success only comes to those who use their time wisely.",
            "Hope is the flame that lights our paths in the darkest of times, giving us the strength to continue despite difficulties. No matter how severe the crises or how many challenges we face, hope remains the driving force that pushes us forward to achieve the accomplishments we dream of.",
            "Success is not the end of the road, but the beginning of a new journey filled with challenges and ambitions. Every achievement should motivate us to keep working and striving, never settling for what we have reached, because ambition knows no bounds.",
            "Reading is the key that opens the doors of knowledge and wisdom, giving us the ability to understand the world around us more deeply. Every book we read adds to our knowledge and makes us more capable of critical thinking and making sound decisions.",
            "Do not fear failure, for it is an inseparable part of the path to success. Every failed experience carries a new lesson and adds to your experience; what matters is to learn from your mistakes and keep trying until you achieve your goals.",
            "True happiness does not come from money or fame, but from inner satisfaction and peace of mind. When we help others and spread goodness around us, we feel indescribable happiness and a priceless sense of peace.",
            "Be the change you wish to see in the world, and do not wait for others to start. Every great change begins with a small step, and with determination and perseverance, we can make a real difference in our lives and the lives of those around us.",
            "The human mind possesses limitless abilities, and the more we strive to develop it and enhance our mental skills, the more capable we become of creativity, innovation, and achieving great accomplishments.",
            "Every new morning brings hope and a chance to start over, to correct yesterday's mistakes. Life is full of challenges, but with determination and hard work, we can achieve our dreams no matter how distant they seem. Don't let fear stop you from trying; every experience brings you closer to your goal.",
            "Family is the warm embrace we turn to in times of joy and sorrow. Having loved ones around gives us a sense of security and belonging, making us more capable of facing life's difficulties with confidence and peace.",
            "Success does not come by chance, but is the result of good planning, continuous effort, and learning from mistakes. Every small step toward your goal helps build a better future, so never underestimate any achievement, no matter how simple.",
            "Ambition is the fuel that drives us forward and inspires us to achieve more. Don't set limits on your dreams, for strong willpower can overcome any obstacle and turn the impossible into possible.",
            "Health is a crown on the heads of the healthy that only the sick can see. Take care of your health with proper nutrition, exercise, and avoiding bad habits, for a sound body is the foundation of a happy life.",
            "Forgiveness is strength, not weakness; it frees the heart from grudges and brings peace of mind. When we forgive others, we give ourselves a chance for inner peace and open new doors for human relationships.",
            "Education is the most powerful weapon we can use to change the world. With knowledge and learning, we become more capable of understanding reality and making the right decisions that positively affect our lives and those around us.",
            "Volunteering enhances the spirit of cooperation and belonging to the community, giving us a sense of satisfaction and happiness. When we help others without expecting anything in return, we discover that giving is the greatest form of joy.",
            "Beautiful memories remain engraved in our hearts no matter how many years pass. Enjoy every moment you live with those you love, for life is short and not worth wasting on sadness or regret.",
            "True success is holding on to your values and principles no matter the temptations. Be honest with yourself and others, for honesty and integrity are the foundation of trust and mutual respect.",
            "Nature teaches us patience and reflection, for every flower needs time to grow and bloom. Don't rush results; everything beautiful takes effort and time to be complete.",
            "Innovation is the ability to see things from a different perspective and find new solutions to old problems. Don't be afraid to experiment, for every new idea could be the start of a great discovery.",
            "Success is not measured only by what you achieve for yourself, but by what you give to others in support and help. Be the reason for someone else's happiness, for giving multiplies joy and gives life deeper meaning.",
            "Reading broadens the mind and nourishes the soul; it is your window to new worlds and diverse experiences. Make reading a daily habit, and you'll notice the difference in your thinking and outlook on life.",
            "Calmness in the face of crises is a sign of strong character and mature thinking. Don't let anger control you; always try to handle difficult situations with wisdom and composure.",
            "Success begins with an idea and is achieved through will and action. Don't wait for perfect circumstances; create your own opportunity and start where you are with what you have.",
            "Mutual respect is the foundation of successful human relationships. Treat others as you would like to be treated, and you'll find that respect brings love and trust.",
            "Every new day is a chance to correct mistakes and achieve goals. Don't despair from failure; every attempt brings you a step closer to success.",
            "Working as a team achieves better results than working alone. Cooperation and sharing ideas and experiences open new horizons for creativity and excellence.",
            "Life is short, so don't waste your time worrying about what you can't change. Focus on what you can do today, and be grateful for every blessing you have."
        ],
        french: [
            "Dans un monde en constante évolution, l'apprentissage continu est devenu une clé essentielle du succès et de l'excellence dans tous les domaines de la vie. Le savoir ouvre de nouveaux horizons et nous donne la capacité de relever les défis avec confiance et créativité, nous rendant plus adaptables aux changements rapides de l'ère numérique.",
            "La véritable amitié est celle qui nous donne de la force dans les moments de faiblesse et éclaire notre chemin lorsque l'obscurité tombe. Les vrais amis restent à nos côtés sans rien attendre en retour, nous encouragent à poursuivre nos rêves malgré les difficultés et partagent nos moments de joie et de tristesse.",
            "Le temps est la chose la plus précieuse que nous possédons dans cette vie, car c'est la seule ressource qui ne peut être remplacée ou récupérée. Nous devons donc investir chaque instant à nous développer et à atteindre nos objectifs, en évitant la procrastination et le retard, car le succès ne vient qu'à ceux qui utilisent leur temps avec sagesse.",
            "L'espoir est la flamme qui éclaire nos chemins dans les moments les plus sombres, nous donnant la force de continuer malgré les difficultés. Peu importe la gravité des crises ou le nombre de défis auxquels nous sommes confrontés, l'espoir reste la force motrice qui nous pousse à avancer pour réaliser les accomplissements dont nous rêvons.",
            "Le succès n'est pas la fin du chemin, mais le début d'un nouveau voyage rempli de défis et d'ambitions. Chaque réussite doit nous motiver à continuer à travailler et à nous efforcer, sans jamais nous contenter de ce que nous avons atteint, car l'ambition n'a pas de limites.",
            "La lecture est la clé qui ouvre les portes de la connaissance et de la sagesse, dándonos la capacité de comprendre le monde qui nous entoure plus profondément. Chaque livre que nous lisons enrichit notre savoir et nous rend plus aptes à penser de manière critique et à prendre des décisions éclairées.",
            "N'ayez pas peur de l'échec, car il fait partie intégrante du chemin vers le succès. Chaque expérience ratée apporte une nouvelle leçon et enrichit votre expérience ; l'important est d'apprendre de vos erreurs et de continuer à essayer jusqu'à atteindre vos objectifs.",
            "Le vrai bonheur ne vient pas de l'argent ou de la célébrité, mais de la satisfaction intérieure et la paix de l'esprit. Lorsque nous aidons les autres et répandons la bonté autour de nous, nous ressentons un bonheur indescriptible et une tranquillité d'esprit inestimable.",
            "Soyez le changement que vous souhaitez voir dans le monde, et n'attendez pas que les autres commencent. Tout grand changement commence par un petit pas, et avec de la détermination et de la persévérance, nous pouvons faire une réelle différence dans nos vies et celles de notre entourage.",
            "Chaque nouveau matin apporte l'espoir et la possibilité de recommencer, de corriger les erreurs d'hier. La vie est pleine de défis, mais avec de la détermination et du travail, nous pouvons réaliser nos rêves, aussi lointains soient-ils. N'ayez pas peur d'essayer, chaque expérience vous rapproche de votre objectif.",
            "La famille est l'étreinte chaleureuse vers laquelle nous nous tournons dans la joie comme dans la tristesse. Être entouré de proches nous donne un sentiment de sécurité et d'appartenance, nous rendant plus aptes à affronter les difficultés de la vie avec confiance et sérénité.",
            "Le succès n'arrive pas par hasard, mais est le résultat d'une bonne planification, d'un effort continu et de l'apprentissage de ses erreurs. Chaque petit pas vers votre but contribue à bâtir un avenir meilleur, alors ne sous-estimez jamais un accomplissement, aussi simple soit-il.",
            "L'ambition est le carburant qui nous pousse à avancer et à accomplir davantage. Ne limitez pas vos rêves, car une volonté forte peut surmonter tous les obstacles et transformer l'impossible en possible.",
            "La santé est une couronne sur la tête des bien-portants que seuls les malades peuvent voir. Prenez soin de votre santé par une alimentation saine, de l'exercice et en évitant les mauvaises habitudes, car un corps sain est la base d'une vie heureuse.",
            "Le pardon est une force, non une faiblesse ; il libère le cœur des rancunes et apporte la paix intérieure. En pardonnant aux autres, nous nous offrons une chance de paix intérieure et ouvrons de nouvelles portes aux relations humaines.",
            "L'éducation est l'arme la plus puissante pour changer le monde. Grâce au savoir, nous sommes plus aptes à comprendre la réalité et à prendre les bonnes décisions qui influencent positivement notre vie et celle des autres.",
            "Le bénévolat renforce l'esprit de coopération et d'appartenance à la communauté, nous procurant satisfaction et bonheur. Aider les autres sans rien attendre en retour nous fait découvrir que donner est la plus grande forme de joie.",
            "Les beaux souvenirs restent gravés dans nos cœurs, peu importe les années qui passent. Profitez de chaque moment avec ceux que vous aimez, car la vie est courte et ne mérite pas d'être gâchée par la tristesse ou le regret.",
            "Le vrai succès, c'est de rester fidèle à ses valeurs et principes, quelles que soient les tentations. Soyez honnête avec vous-même et avec les autres, car l'honnêteté et l'intégrité sont la base de la confiance et du respect mutuel.",
            "La nature nous enseigne la patience et la réflexion, chaque fleur ayant besoin de temps pour pousser et s'épanouir. Ne précipitez pas les résultats; tout lo bello demande du temps et des efforts pour être complète.",
            "L'innovation, c'est la capacité de voir les choses sous un angle différent et de trouver de nouvelles solutions à de vieux problèmes. N'ayez pas peur d'expérimenter, chaque idée nouvelle peut être le début d'une grande découverte.",
            "Le succès ne se mesure pas seulement à ce que vous accomplissez pour vous-même, mais aussi à ce que vous apportez aux autres en soutien et en aide. Soyez la raison du bonheur de quelqu'un, car donner multiplie la joie et donne à la vie un sens plus profond.",
            "La lecture élargit l'esprit et nourrit l'âme ; c'est votre fenêtre sur de nouveaux mondes et des expériences variées. Faites-en une habitude quotidienne et vous verrez la différence dans votre façon de penser et de voir la vie.",
            "La sérénité face aux crises est le signe d'un caractère fort et d'une pensée mûre. Ne laissez pas la colère vous dominer ; essayez toujours d'aborder les situations difficiles avec sagesse et calme.",
            "Le succès commence par une idée et se réalise par la volonté et l'action. N'attendez pas les circonstances idéales ; créez votre propre opportunité et commencez là où vous êtes avec ce que vous avez.",
            "Le respect mutuel est la base des relations humaines réussies. Traitez les autres comme vous aimeriez être traité, et vous verrez que le respect engendre l'amour et la confiance.",
            "Chaque nouveau jour est une chance de corriger ses erreurs et d'atteindre ses objectifs. Ne désespérez pas de l'échec ; chaque tentative vous rapproche du succès.",
            "Travailler en équipe donne de meilleurs résultats que de travailler seul. La coopération et le partage des idées abren de nouveaux horizons à la créativité et à l'excellence.",
            "La vie est courte, alors ne perdez pas votre temps à vous inquiéter de ce que vous ne pouvez pas changer. Concentrez-vous sur ce que vous pouvez faire aujourd'hui et soyez reconnaissant pour chaque bénédiction."
        ],
        spanish: [
            "En un mundo que cambia rápidamente, el aprendizaje continuo se ha convertido en una clave esencial para el éxito y la excelencia en todas las áreas de la vida. El conocimiento abre nuevos horizontes y nos da la capacidad de enfrentar los desafíos con confianza y creatividad, haciéndonos más adaptables a los cambios acelerados de la era digital.",
            "La verdadera amistad es la que nos da fuerza en los momentos de debilidad y nos ilumina el camino cuando cae la oscuridad. Los verdaderos amigos están a nuestro lado sin esperar nada a cambio, nos animan a perseguir nuestros sueños a pesar de las dificultades y comparten tanto nuestros momentos de alegría como de tristeza.",
            "El tiempo es lo más valioso que poseemos en esta vida, ya que es el único recurso que no se puede reemplazar ni recuperar. Por eso debemos invertir cada momento en desarrollarnos y alcanzar nuestras metas, evitando la procrastinación y el retraso, porque el éxito solo llega a quienes usan su tiempo sabiamente.",
            "La esperanza es la llama que ilumina nuestros caminos en los momentos más oscuros, dándonos la fuerza para continuar a pesar de las dificultades. No importa cuán graves sean las crisis o cuántos desafíos enfrentemos, la esperanza sigue siendo la fuerza que nos impulsa a avanzar para lograr los logros que soñamos.",
            "El éxito no es el final del camino, sino el comienzo de un nuevo viaje lleno de desafíos y ambiciones. Cada logro debe motivarnos a seguir trabajando y esforzándonos, sin conformarnos nunca con lo que hemos alcanzado, porque la ambición no tiene límites.",
            "La lectura es la llave que abre las puertas del conocimiento y la sabiduría, dándonos la capacidad de comprender el mundo que nos rodea más profundamente. Cada libro que leemos suma a nuestro conocimiento y nos hace más capaces de pensar críticamente y tomar decisiones acertadas.",
            "No temas al fracaso, porque es una parte inseparable del camino hacia el éxito. Cada experiencia fallida trae una nueva lección y suma a tu experiencia; lo importante es aprender de tus errores y seguir intentándolo hasta alcanzar tus objetivos.",
            "La verdadera felicidad no proviene del dinero ni de la fama, sino de la satisfacción interior y la paz mental. Cuando ayudamos a los demás y difundimos la bondad a nuestro alrededor, sentimos una felicidad indescriptible y una tranquilidad invaluable.",
            "Sé el cambio que deseas ver en el mundo y no esperes a que otros comiencen. Todo gran cambio comienza con un pequeño paso, y con determinación y perseverancia podemos hacer una verdadera diferencia en nuestras vidas y en las de quienes nos rodean.",
            "Cada nuevo amanecer nos brinda esperanza y la oportunidad de empezar de nuevo, de corregir los errores de ayer. La vida está llena de desafíos, pero con determinación y trabajo duro podemos alcanzar nuestros sueños, por lejanos que parezcan. No dejes que el miedo te impida intentarlo; cada experiencia te acerca más a tu meta.",
            "La familia es el abrazo cálido al que recurrimos en momentos de alegría y tristeza. Tener seres queridos cerca nos da seguridad y sentido de pertenencia, haciéndonos más capaces de enfrentar las dificultades de la vida con confianza y tranquilidad.",
            "El éxito no llega por casualidad, sino como resultado de una buena planificación, esfuerzo continuo y aprendizaje de los errores. Cada pequeño paso hacia tu objetivo ayuda a construir un futuro mejor, así que nunca subestimes ningún logro, por sencillo que sea.",
            "La ambición es el combustible que nos impulsa a avanzar y lograr más. No pongas límites a tus sueños, porque la voluntad fuerte puede superar cualquier obstáculo y convertir lo imposible en posible.",
            "La salud es una corona en la cabeza de los sanos que solo los enfermos pueden ver. Cuida tu salud con buena alimentación, ejercicio y evitando malos hábitos, porque un cuerpo sano es la base de una vida feliz.",
            "El perdón es fortaleza, no debilidad; libera el corazón de rencores y trae paz interior. Cuando perdonamos a otros, nos damos la oportunidad de tener paz interna y abrir nuevas puertas a las relaciones humanas.",
            "La educación es el arma más poderosa para cambiar el mundo. Con conocimiento y aprendizaje, somos más capaces de entender la realidad y tomar las decisiones correctas que afectan positivamente nuestra vida y la de quienes nos rodean.",
            "El voluntariado refuerza el espíritu de cooperación y pertenencia a la comunidad, dándonos satisfacción y felicidad. Cuando ayudamos a otros sin esperar nada a cambio, descubrimos que dar es la mayor forma de alegría.",
            "Los recuerdos hermosos permanecen grabados en nuestros corazones sin importar cuántos años pasen. Disfruta cada momento con quienes amas, porque la vida es corta y no vale la pena desperdiciarla en tristeza o arrepentimiento.",
            "El verdadero éxito es mantener tus valores y principios sin importar las tentaciones. Sé honesto contigo mismo y con los demás, porque la honestidad y la integridad son la base de la confianza y el respeto mutuo.",
            "La naturaleza nos enseña paciencia y reflexión, porque cada flor necesita tiempo para crecer y florecer. No apresures los resultados; todo lo bello requiere esfuerzo y tiempo para completarse.",
            "La innovación es la capacidad de ver las cosas desde una perspectiva diferente y encontrar nuevas soluciones a viejos problemas. No temas experimentar, porque cada idea nueva puede ser el inicio de un gran descubrimiento.",
            "El éxito no se mide solo por lo que logras para ti, sino por lo que das a los demás en apoyo y ayuda. Sé la razón de la felicidad de alguien más, porque dar multiplica la alegría y da a la vida un sentido más profundo.",
            "La lectura amplía la mente y nutre el alma; es tu ventana a nuevos mundos y experiencias diversas. Haz de la lectura un hábito diario y notarás la diferencia en tu forma de pensar y ver la vida.",
            "La calma ante las crisis es señal de carácter fuerte y pensamiento maduro. No dejes que la ira te controle; intenta siempre manejar las situaciones difíciles con sabiduría y serenidad.",
            "El éxito comienza con una idea y se logra con voluntad y acción. No esperes las circunstancias perfectas; crea tu propia oportunidad y comienza donde estás con lo que tienes.",
            "El respeto mutuo es la base de las relaciones humanas exitosas. Trata a los demás como te gustaría ser tratado y verás que el respeto genera amor y confianza.",
            "Cada nuevo día es una oportunidad para corregir errores y alcanzar metas. No te desesperes por el fracaso; cada intento te acerca un paso más al éxito.",
            "Trabajar en equipo logra mejores resultados que trabajar solo. La cooperación y el intercambio de ideas abren nuevos horizontes para la creatividad y la excelencia.",
            "La vida es corta, así que no pierdas tu tiempo preocupándote por lo que no puedes cambiar. Concéntrate en lo que puedes hacer hoy y agradece cada bendición que tienes."
        ]
    };
    let recentPassages = new Set();
    const MAX_RECENT_PASSAGES = 100;
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
    let nextPrefetchedPassageLang = null;
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
        // Clear any prefetched passages to ensure we get content in the new language
        nextPrefetchedPassage = null;
        nextPrefetchedPassageLang = null;
        if (!gameStarted) {
            displayWelcomeMessage();
            // Start prefetching immediately in the new language
            prefetchNextPassage();
        } else {
            // If game is running, we might want to let the current passage finish
            // or you could force a new passage immediately
            console.log(`Language changed to ${language} during game`);
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
        
        // Function to get a unique passage from an array
        function getUniquePassage(passages) {
            if (!passages || passages.length === 0) return null;
            
            // Filter out recently used passages
            let availablePassages = passages.filter(p => !recentPassages.has(p));
            
            // If we've used all passages, clear the recent list and start over
            if (availablePassages.length === 0) {
                console.log('All passages used, clearing recent list');
                recentPassages.clear();
                availablePassages = passages;
            }
            
            return pick(availablePassages);
        }
        
        // Function to add passage to recent list
        function addToRecentPassages(passage) {
            recentPassages.add(passage);
            // Keep only the most recent passages
            if (recentPassages.size > MAX_RECENT_PASSAGES) {
                const oldestPassage = recentPassages.values().next().value;
                recentPassages.delete(oldestPassage);
            }
        }
        
        let passage = null;
        let success = false;
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject('timeout'), 3000));
        
        const fetchPromise = (async () => {
            let attempts = 0;
            const maxAttempts = 5;
            
            while (attempts < maxAttempts && !success) {
                attempts++;
                
                if (language === 'arabic') {
                    const apis = [
                        async () => {
                            const response = await fetch('https://raw.githubusercontent.com/r-spacex/source-code/main/arabic-quotes/db.json');
                            if (!response.ok) throw new Error('Arabic Quotes failed');
                            const data = await response.json();
                            const quotes = data.quotes.filter(q => isGoodLength(q.quote));
                            const uniqueQuote = getUniquePassage(quotes.map(q => q.quote));
                            if (uniqueQuote) return uniqueQuote;
                            throw new Error('No unique Arabic quote available');
                        },
                        async () => {
                            // Try multiple random surahs and ayahs to get variety
                            const surah = Math.floor(Math.random() * 114) + 1;
                            const maxAyah = surah === 1 ? 7 : Math.min(20, Math.floor(Math.random() * 10) + 1);
                            const ayah = Math.floor(Math.random() * maxAyah) + 1;
                            const response = await fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`);
                            if (!response.ok) throw new Error('Quran API failed');
                            const data = await response.json();
                            if (isGoodLength(data.data.text) && !recentPassages.has(data.data.text)) {
                                return data.data.text;
                            }
                            throw new Error('Ayah already used or not good length');
                        },
                        async () => {
                            const response = await fetch('https://quotes.rest/qod?language=ar');
                            if (!response.ok) throw new Error('They Said So AR failed');
                            const data = await response.json();
                            if (data && data.contents && data.contents.quotes && data.contents.quotes[0]) {
                                let text = data.contents.quotes[0].quote;
                                if (isGoodLength(text) && !recentPassages.has(text)) return text;
                            }
                            throw new Error('No unique quote from They Said So AR');
                        },
                        async () => await fetchWikipediaIntro('ar'),
                        async () => await fetchWikiquote('ar')
                    ];
                    
                    const shuffled = apis.sort(() => Math.random() - 0.5);
                    for (let api of shuffled) {
                        try {
                            let text = await api();
                            // For Arabic, remove diacritics
                            if (language === 'arabic') text = removeArabicDiacritics(text);
                            if (!recentPassages.has(text)) {
                                passage = text;
                                success = true;
                                break;
                            }
                        } catch (e) {
                            console.log(language.charAt(0).toUpperCase() + language.slice(1) + ' API failed:', e.message);
                        }
                    }
                    
                } else if (language === 'french') {
                    const apis = [
                        async () => {
                            // Try different authors and tags to get variety
                            const tags = ['wisdom', 'motivational', 'life', 'success', 'inspirational'];
                            const randomTag = tags[Math.floor(Math.random() * tags.length)];
                            const response = await fetch(`https://api.quotable.io/random?lang=fr&tags=${randomTag}&minLength=100&maxLength=1000`);
                            if (!response.ok) throw new Error('Quotable FR with tags failed');
                            const data = await response.json();
                            if (isGoodLength(data.content) && !recentPassages.has(data.content)) {
                                return data.content;
                            }
                            throw new Error('French quote already used');
                        },
                        async () => {
                            const response = await fetch('https://api.quotable.io/random?lang=fr');
                            if (!response.ok) throw new Error('Quotable FR failed');
                            const data = await response.json();
                            if (isGoodLength(data.content) && !recentPassages.has(data.content)) {
                                return data.content;
                            }
                            throw new Error('French quote already used or bad length');
                        },
                        async () => await fetchWikipediaIntro('fr'),
                        async () => await fetchWikiquote('fr')
                    ];
                    
                    const shuffled = apis.sort(() => Math.random() - 0.5);
                    for (let api of shuffled) {
                        try {
                            let text = await api();
                            if (!recentPassages.has(text)) {
                                passage = text;
                                success = true;
                                break;
                            }
                        } catch (e) {
                            console.log(language.charAt(0).toUpperCase() + language.slice(1) + ' API failed:', e.message);
                        }
                    }
                    
                } else if (language === 'spanish') {
                    const apis = [
                        async () => {
                            const tags = ['wisdom', 'motivational', 'life', 'success', 'inspirational'];
                            const randomTag = tags[Math.floor(Math.random() * tags.length)];
                            const response = await fetch(`https://api.quotable.io/random?lang=es&tags=${randomTag}&minLength=100&maxLength=1000`);
                            if (!response.ok) throw new Error('Quotable ES with tags failed');
                            const data = await response.json();
                            if (isGoodLength(data.content) && !recentPassages.has(data.content)) {
                                return data.content;
                            }
                            throw new Error('Spanish quote already used');
                        },
                        async () => {
                            const response = await fetch('https://api.quotable.io/random?lang=es');
                            if (!response.ok) throw new Error('Quotable ES failed');
                            const data = await response.json();
                            if (isGoodLength(data.content) && !recentPassages.has(data.content)) {
                                return data.content;
                            }
                            throw new Error('Spanish quote already used or bad length');
                        },
                        async () => await fetchWikipediaIntro('es'),
                        async () => await fetchWikiquote('es')
                    ];
                    
                    const shuffled = apis.sort(() => Math.random() - 0.5);
                    for (let api of shuffled) {
                        try {
                            let text = await api();
                            if (!recentPassages.has(text)) {
                                passage = text;
                                success = true;
                                break;
                            }
                        } catch (e) {
                            console.log(language.charAt(0).toUpperCase() + language.slice(1) + ' API failed:', e.message);
                        }
                    }
                    
                } else { // English
                    const apis = [
                        async () => {
                            // Use different tags and authors for variety
                            const tags = ['wisdom', 'motivational', 'life', 'success', 'inspirational', 'famous-quotes'];
                            const randomTag = tags[Math.floor(Math.random() * tags.length)];
                            const response = await fetch(`https://api.quotable.io/random?tags=${randomTag}&minLength=100&maxLength=1000`);
                            if (!response.ok) throw new Error('Quotable with tags failed');
                            const data = await response.json();
                            if (isGoodLength(data.content) && !recentPassages.has(data.content)) {
                                return data.content;
                            }
                            throw new Error('Quote already used');
                        },
                        async () => {
                            const response = await fetch('https://api.quotable.io/random?minLength=100&maxLength=1000');
                            if (!response.ok) throw new Error('Quotable failed');
                            const data = await response.json();
                            if (isGoodLength(data.content) && !recentPassages.has(data.content)) {
                                return data.content;
                            }
                            throw new Error('Quote already used or bad length');
                        },
                        async () => {
                            // Use different types of bacon ipsum for variety
                            const types = ['all-meat', 'meat-and-filler'];
                            const randomType = types[Math.floor(Math.random() * types.length)];
                            const sentences = Math.floor(Math.random() * 3) + 3; // 3-5 sentences
                            const response = await fetch(`https://baconipsum.com/api/?type=${randomType}&sentences=${sentences}`);
                            if (!response.ok) throw new Error('Bacon Ipsum failed');
                            const data = await response.json();
                            let text = Array.isArray(data) ? data[0] : data;
                            if (isGoodLength(text) && !recentPassages.has(text)) {
                                return text;
                            }
                            throw new Error('Bacon ipsum already used or bad length');
                        },
                        async () => {
                            const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
                            if (!response.ok) throw new Error('Useless Facts failed');
                            const data = await response.json();
                            if (isGoodLength(data.text) && !recentPassages.has(data.text)) {
                                return data.text;
                            }
                            throw new Error('Fact already used or bad length');
                        },
                        async () => await fetchWikipediaIntro('en'),
                        async () => await fetchWikiquote('en')
                    ];
                    
                    const shuffled = apis.sort(() => Math.random() - 0.5);
                    for (let api of shuffled) {
                        try {
                            let text = await api();
                            if (!recentPassages.has(text)) {
                                passage = text;
                                success = true;
                                break;
                            }
                        } catch (e) {
                            console.log(language.charAt(0).toUpperCase() + language.slice(1) + ' API failed:', e.message);
                        }
                    }
                }
                
                // If we got a passage, break out of the attempts loop
                if (success) break;
                
                // Wait a bit before next attempt
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            
            // If no API succeeded after all attempts, use local fallback
            if (!success) {
                console.log(`All APIs failed for ${language}, using local fallback`);
                const fallbackTexts = localTexts[language] && localTexts[language].filter(isGoodLength);
                const uniqueLocal = getUniquePassage(fallbackTexts);
                
                if (uniqueLocal) {
                    let text = uniqueLocal;
                    if (language === 'arabic') text = removeArabicDiacritics(text);
                    passage = text;
                    success = true;
                } else {
                    // If no unique local passage, create a default message
                    const defaultMessages = {
                        arabic: `النص غير متاح حالياً ${Date.now()}. يرجى المحاولة مرة أخرى.`,
                        english: `Text not available at the moment ${Date.now()}. Please try again.`,
                        french: `Texte non disponible pour le moment ${Date.now()}. Veuillez réessayer.`,
                        spanish: `Texto no disponible en este momento ${Date.now()}. Por favor, inténtelo de nuevo.`
                    };
                    passage = defaultMessages[language] || defaultMessages.english;
                }
            }
            
            // Add the passage to recent list
            if (passage) {
                addToRecentPassages(passage);
            }
            
            return passage;
        })();
        
        try {
            return await Promise.race([fetchPromise, timeoutPromise]);
        } catch (e) {
            console.log(`Timeout or error for ${language}:`, e);
            // On timeout or error, use local fallback with uniqueness check
            const fallbackTexts = localTexts[language] && localTexts[language].filter(isGoodLength);
            const uniqueLocal = getUniquePassage(fallbackTexts);
            
            if (uniqueLocal) {
                let text = uniqueLocal;
                if (language === 'arabic') text = removeArabicDiacritics(text);
                addToRecentPassages(text);
                return text;
            } else {
                // Create a unique default message using timestamp
                const defaultMessages = {
                    arabic: `النص غير متاح حالياً ${Date.now()}. يرجى المحاولة مرة أخرى.`,
                    english: `Text not available at the moment ${Date.now()}. Please try again.`,
                    french: `Texte non disponible pour le moment ${Date.now()}. Veuillez réessayer.`,
                    spanish: `Texto no disponible en este momento ${Date.now()}. Por favor, inténtelo de nuevo.`
                };
                const message = defaultMessages[language] || defaultMessages.english;
                addToRecentPassages(message);
                return message;
            }
        }
    }
    async function prefetchNextPassage() {
        if (prefetching) return;
        prefetching = true;
        const lang = currentLanguage;
        const passage = await fetchSinglePassage(lang);
        // Only set if language hasn't changed during fetch
        if (lang === currentLanguage) {
            nextPrefetchedPassage = passage;
            nextPrefetchedPassageLang = lang;
        }
        prefetching = false;
    }

    async function getNextPassage() {
        let passage;
        if (nextPrefetchedPassage && nextPrefetchedPassageLang === currentLanguage) {
            passage = nextPrefetchedPassage;
            nextPrefetchedPassage = null;
            nextPrefetchedPassageLang = null;
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
        
        // Clear passage history to allow fresh passages
        resetPassageHistory();
        
        updateUIText(currentLanguage);
        displayWelcomeMessage();
        prefetchNextPassage();
    }
    function resetPassageHistory() {
        recentPassages.clear();
        console.log('Passage history cleared');
    }

    // Initial setup
    selectLanguage('english');
}); 
