// players-data.js
// مصفوفة بيانات اللاعبين (الأسماء، الأندية، الإنجازات، روابط ويكيبيديا)
//
// ---- حقول الربط مع clubs-data.js (بيتأكد منها validate-links.js) ----
// clubId  = id النادي المكتوب في clubEn داخل clubs-data.js (للنشط: ناديه الحالي، وللمعتزل/المتوفى: آخر نادي مذكور). null = النادي مش موجود في clubs-data.js، أو clubEn = Retired/Free agent.
// clubIds = ids الأندية الموجودة في clubs-data.js من clubsHistoryEn بالترتيب، من غير تكرار. مش قائمة كاملة بمشوار اللاعب: الأندية اللي مش في clubs-data.js، وفرق الشباب (youth) والفرق الثانية (B)، مش بتتحط هنا.
// الربط بالأسماء بيتم بتطابق تام أو بجدول aliases صريح (مفيش تطابق جزئي)، والربط هيكلي بس: وجود الحقل مش معناه إن كل معلومة في السيرة اتراجعت على مصدر.
// الهدافين والأرقام القياسية في records-scorers-data.js بتشاور على id اللاعب هنا بـ playerId / relatedPlayerIds.

const players = [
  {
    "id": "mohamed-salah",
    "nameAr": "محمد صلاح",
    "nameEn": "Mohamed Salah",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "تراب زون سبور (تركيا)",
    "clubEn": "Trabzonspor (Turkey)",
    "clubId": "trabzonspor",
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "2010-الآن",
    "active": true,
    "bioAr": "نجم مصري وقائد المنتخب، قضى تسعة مواسم مع ليفربول الإنجليزي أصبح خلالها الهداف الأجنبي الأكبر في تاريخ الدوري الإنجليزي الممتاز، قبل أن يرحل كلاعب حر في أغسطس 2026 وينضم إلى تراب زون سبور التركي.",
    "bioEn": "Egyptian star and national team captain who spent nine seasons at Liverpool, becoming the all-time top foreign goalscorer in Premier League history, before leaving as a free agent in August 2026 to join Turkish club Trabzonspor.",
    "achievementsAr": [
      "بطولة دوري أبطال أوروبا 2019 مع ليفربول",
      "لقب الدوري الإنجليزي الممتاز 2019-2020",
      "الحذاء الذهبي للدوري الإنجليزي (عدة مرات)",
      "جائزة أفضل لاعب في إفريقيا (عدة مرات)"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2019 with Liverpool",
      "Premier League title 2019-2020",
      "Premier League Golden Boot (multiple times)",
      "African Player of the Year (multiple times)"
    ],
    "clubsHistoryAr": [
      "المقاولون العرب",
      "بازل",
      "تشيلسي",
      "فيورنتينا (إعارة)",
      "روما",
      "ليفربول",
      "تراب زون سبور"
    ],
    "clubsHistoryEn": [
      "Al Mokawloon Al Arab",
      "Basel",
      "Chelsea",
      "Fiorentina (loan)",
      "Roma",
      "Liverpool",
      "Trabzonspor"
    ],
    "clubIds": [
      "al-mokawloon-al-arab",
      "chelsea",
      "fiorentina",
      "roma",
      "liverpool",
      "trabzonspor"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/محمد_صلاح",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mohamed_Salah"
  },
  {
    "id": "cristiano-ronaldo",
    "nameAr": "كريستيانو رونالدو",
    "nameEn": "Cristiano Ronaldo",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "النصر",
    "clubEn": "Al Nassr",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2002-الآن",
    "active": true,
    "bioAr": "أحد أعظم لاعبي كرة القدم في التاريخ، هداف تاريخي عالمي وحامل الرقم القياسي في عدد الأهداف الدولية. لعب لأندية كبرى مثل مانشستر يونايتد وريال مدريد ويوفنتوس قبل انتقاله إلى النصر السعودي.",
    "bioEn": "One of the greatest footballers of all time and the all-time top scorer in men's international football. He played for major clubs including Manchester United, Real Madrid and Juventus before moving to Saudi club Al Nassr.",
    "achievementsAr": [
      "5 ألقاب دوري أبطال أوروبا",
      "5 جوائز الكرة الذهبية (Ballon d'Or)",
      "بطولة أمم أوروبا 2016 مع البرتغال",
      "الهداف التاريخي لدوري أبطال أوروبا"
    ],
    "achievementsEn": [
      "5 UEFA Champions League titles",
      "5 Ballon d'Or awards",
      "UEFA Euro 2016 title with Portugal",
      "All-time top scorer in UEFA Champions League history"
    ],
    "clubsHistoryAr": [
      "سبورتينغ لشبونة",
      "مانشستر يونايتد",
      "ريال مدريد",
      "يوفنتوس",
      "مانشستر يونايتد",
      "النصر"
    ],
    "clubsHistoryEn": [
      "Sporting CP",
      "Manchester United",
      "Real Madrid",
      "Juventus",
      "Manchester United",
      "Al Nassr"
    ],
    "clubIds": [
      "sporting-cp",
      "manchester-united",
      "real-madrid",
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كريستيانو_رونالدو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Cristiano_Ronaldo"
  },
  {
    "id": "lionel-messi",
    "nameAr": "ليونيل ميسي",
    "nameEn": "Lionel Messi",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "إنتر ميامي",
    "clubEn": "Inter Miami",
    "clubId": null,
    "position": {
      "ar": "مهاجم / صانع ألعاب",
      "en": "Forward / Playmaker"
    },
    "era": "2004-الآن",
    "active": true,
    "bioAr": "أسطورة أرجنتينية يُعتبره كثيرون أفضل لاعب في تاريخ كرة القدم، صاحب الرقم القياسي في عدد جوائز الكرة الذهبية. قضى معظم مسيرته في برشلونة قبل الانتقال إلى باريس سان جيرمان ثم إنتر ميامي، وتوّج مسيرته الدولية بلقب كأس العالم 2022 مع الأرجنتين.",
    "bioEn": "An Argentine legend widely regarded by many as the greatest footballer of all time, holding the record for most Ballon d'Or awards. He spent most of his career at Barcelona before moving to Paris Saint-Germain and then Inter Miami, and capped his international career by winning the 2022 FIFA World Cup with Argentina.",
    "achievementsAr": [
      "8 جوائز الكرة الذهبية (رقم قياسي)",
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "4 ألقاب دوري أبطال أوروبا مع برشلونة",
      "بطولة كوبا أمريكا 2021 مع الأرجنتين"
    ],
    "achievementsEn": [
      "8 Ballon d'Or awards (record)",
      "2022 FIFA World Cup title with Argentina",
      "4 UEFA Champions League titles with Barcelona",
      "2021 Copa América title with Argentina"
    ],
    "clubsHistoryAr": [
      "برشلونة",
      "باريس سان جيرمان",
      "إنتر ميامي"
    ],
    "clubsHistoryEn": [
      "Barcelona",
      "Paris Saint-Germain",
      "Inter Miami"
    ],
    "clubIds": [
      "barcelona",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ليونيل_ميسي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Lionel_Messi"
  },
  {
    "id": "zinedine-zidane",
    "nameAr": "زين الدين زيدان",
    "nameEn": "Zinedine Zidane",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ريال مدريد (معتزل)",
    "clubEn": "Real Madrid (retired)",
    "clubId": "real-madrid",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder / Playmaker"
    },
    "era": "1989-2006",
    "active": false,
    "bioAr": "أسطورة فرنسية من أصول جزائرية، يُعد من أفضل صانعي الألعاب في تاريخ كرة القدم بفضل توازنه الفني ورؤيته. قاد فرنسا للفوز بكأس العالم 1998 ويورو 2000، ولاحقًا أصبح مدربًا ناجحًا مع ريال مدريد.",
    "bioEn": "A French legend of Algerian descent, regarded as one of the greatest playmakers in football history for his technique and vision. He led France to the 1998 World Cup and Euro 2000 titles, and later became a successful manager with Real Madrid.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة أمم أوروبا 2000 مع فرنسا",
      "الكرة الذهبية 1998",
      "دوري أبطال أوروبا 2002 مع ريال مدريد"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "1998 Ballon d'Or",
      "2002 UEFA Champions League title with Real Madrid"
    ],
    "clubsHistoryAr": [
      "كان",
      "بوردو",
      "يوفنتوس",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Cannes",
      "Bordeaux",
      "Juventus",
      "Real Madrid"
    ],
    "clubIds": [
      "bordeaux",
      "juventus",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/زين_الدين_زيدان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Zinedine_Zidane"
  },
  {
    "id": "diego-maradona",
    "nameAr": "دييغو مارادونا",
    "nameEn": "Diego Maradona",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "بوكا جونيورز (معتزل)",
    "clubEn": "Boca Juniors (retired)",
    "clubId": "boca-juniors",
    "position": {
      "ar": "صانع ألعاب / مهاجم",
      "en": "Playmaker / Forward"
    },
    "era": "1976-1997",
    "active": false,
    "bioAr": "واحد من أعظم لاعبي كرة القدم على الإطلاق، قاد الأرجنتين للفوز بكأس العالم 1986 بأداء فردي أسطوري تضمن هدف 'يد الإله' و'هدف القرن' في مباراة واحدة ضد إنجلترا. توفي عام 2020.",
    "bioEn": "One of the greatest footballers of all time, he led Argentina to the 1986 World Cup title with a legendary individual performance that included both the 'Hand of God' goal and the 'Goal of the Century' in the same match against England. He passed away in 2020.",
    "achievementsAr": [
      "بطولة كأس العالم 1986 مع الأرجنتين",
      "الكرة الذهبية الفخرية لأفضل لاعب في كأس العالم 1986",
      "بطولة الدوري الإيطالي مرتين مع نابولي",
      "كأس الاتحاد الأوروبي 1989 مع نابولي"
    ],
    "achievementsEn": [
      "1986 FIFA World Cup title with Argentina",
      "Golden Ball as best player of the 1986 World Cup",
      "Serie A title twice with Napoli",
      "1989 UEFA Cup with Napoli"
    ],
    "clubsHistoryAr": [
      "أرخنتينوس جونيورز",
      "بوكا جونيورز",
      "برشلونة",
      "نابولي",
      "إشبيلية",
      "نيويلز أولد بويز",
      "بوكا جونيورز"
    ],
    "clubsHistoryEn": [
      "Argentinos Juniors",
      "Boca Juniors",
      "Barcelona",
      "Napoli",
      "Sevilla",
      "Newell's Old Boys",
      "Boca Juniors"
    ],
    "clubIds": [
      "boca-juniors",
      "barcelona",
      "napoli",
      "sevilla"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دييغو_مارادونا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Diego_Maradona"
  },
  {
    "id": "pele",
    "nameAr": "بيليه",
    "nameEn": "Pelé",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "سانتوس (معتزل)",
    "clubEn": "Santos (retired)",
    "clubId": "santos-fc",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1956-1977",
    "active": false,
    "bioAr": "أسطورة برازيلية يُعتبره كثيرون أفضل لاعب كرة قدم في التاريخ، وهو اللاعب الوحيد الذي فاز بكأس العالم ثلاث مرات (1958، 1962، 1970). قضى معظم مسيرته مع نادي سانتوس البرازيلي. توفي عام 2022.",
    "bioEn": "A Brazilian legend widely regarded by many as the greatest footballer of all time, and the only player to win the World Cup three times (1958, 1962, 1970). He spent most of his career with Brazilian club Santos. He passed away in 2022.",
    "achievementsAr": [
      "3 بطولات كأس عالم مع البرازيل (1958، 1962، 1970)",
      "هداف تاريخي لنادي سانتوس",
      "لقب رياضي القرن من اللجنة الأولمبية الدولية",
      "أكثر من 1000 هدف في مسيرته (بحسب توثيق النادي)"
    ],
    "achievementsEn": [
      "3 FIFA World Cup titles with Brazil (1958, 1962, 1970)",
      "All-time top scorer for Santos FC",
      "IOC Athlete of the Century",
      "Over 1,000 career goals (per club records)"
    ],
    "clubsHistoryAr": [
      "سانتوس",
      "نيويورك كوزموس"
    ],
    "clubsHistoryEn": [
      "Santos",
      "New York Cosmos"
    ],
    "clubIds": [
      "santos-fc"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بيليه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pelé"
  },
  {
    "id": "ronaldinho",
    "nameAr": "رونالدينيو",
    "nameEn": "Ronaldinho",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "أتلتيكو مينيرو (معتزل)",
    "clubEn": "Atlético Mineiro (retired)",
    "clubId": null,
    "position": {
      "ar": "جناح / صانع ألعاب",
      "en": "Winger / Playmaker"
    },
    "era": "1998-2015",
    "active": false,
    "bioAr": "نجم برازيلي اشتهر بمهاراته الفنية الاستثنائية وأسلوبه الممتع في اللعب. توّج بكأس العالم 2002 مع البرازيل، وكان قطب رحى برشلونة في منتصف العقد الأول من الألفية الثانية قبل حصوله على الكرة الذهبية عام 2005.",
    "bioEn": "A Brazilian star known for his exceptional technical skill and entertaining style of play. He won the 2002 World Cup with Brazil and was the focal point of Barcelona in the mid-2000s before winning the Ballon d'Or in 2005.",
    "achievementsAr": [
      "بطولة كأس العالم 2002 مع البرازيل",
      "الكرة الذهبية 2005",
      "دوري أبطال أوروبا 2006 مع برشلونة",
      "أفضل لاعب في العالم من الفيفا مرتين"
    ],
    "achievementsEn": [
      "2002 FIFA World Cup title with Brazil",
      "2005 Ballon d'Or",
      "2006 UEFA Champions League with Barcelona",
      "FIFA World Player of the Year (twice)"
    ],
    "clubsHistoryAr": [
      "غريميو",
      "باريس سان جيرمان",
      "برشلونة",
      "ميلان",
      "فلامنغو",
      "أتلتيكو مينيرو"
    ],
    "clubsHistoryEn": [
      "Grêmio",
      "Paris Saint-Germain",
      "Barcelona",
      "Milan",
      "Flamengo",
      "Atlético Mineiro"
    ],
    "clubIds": [
      "paris-saint-germain",
      "barcelona",
      "ac-milan",
      "flamengo"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رونالدينيو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ronaldinho"
  },
  {
    "id": "david-beckham",
    "nameAr": "ديفيد بيكهام",
    "nameEn": "David Beckham",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "باريس سان جيرمان (معتزل)",
    "clubEn": "Paris Saint-Germain (retired)",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "جناح / وسط ميدان",
      "en": "Winger / Midfielder"
    },
    "era": "1992-2013",
    "active": false,
    "bioAr": "لاعب إنجليزي سابق اشتهر بعرضياته وتسديداته من الركلات الحرة، ولعب لأندية كبرى مثل مانشستر يونايتد وريال مدريد. كان أحد أشهر لاعبي كرة القدم عالميًا خارج الملعب أيضًا بفضل حضوره الإعلامي الواسع.",
    "bioEn": "A former English footballer known for his crossing ability and free-kick technique, who played for major clubs including Manchester United and Real Madrid. He was also one of the most globally recognizable footballers off the pitch due to his wide media presence.",
    "achievementsAr": [
      "دوري أبطال أوروبا 1999 مع مانشستر يونايتد",
      "6 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "لقب الدوري الإسباني مع ريال مدريد",
      "قائد المنتخب الإنجليزي لسنوات عديدة"
    ],
    "achievementsEn": [
      "1999 UEFA Champions League with Manchester United",
      "6 Premier League titles with Manchester United",
      "La Liga title with Real Madrid",
      "Captained the England national team for several years"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد",
      "ريال مدريد",
      "لوس أنجلوس غالاكسي",
      "ميلان (إعارة)",
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Manchester United",
      "Real Madrid",
      "LA Galaxy",
      "Milan (loan)",
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "manchester-united",
      "real-madrid",
      "ac-milan",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ديفيد_بيكهام",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/David_Beckham"
  },
  {
    "id": "kylian-mbappe",
    "nameAr": "كيليان مبابي",
    "nameEn": "Kylian Mbappé",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مهاجم فرنسي يُعد من أبرز نجوم الجيل الحالي، عُرف بسرعته الفائقة وقدرته التهديفية العالية. توّج بكأس العالم 2018 مع فرنسا وهو في التاسعة عشرة من عمره، وانتقل إلى ريال مدريد عام 2024 بعد سنوات قضاها مع باريس سان جيرمان.",
    "bioEn": "A French forward regarded as one of the standout stars of the current generation, known for his blistering pace and clinical finishing. He won the 2018 World Cup with France at just 19 years old, and moved to Real Madrid in 2024 after years at Paris Saint-Germain.",
    "achievementsAr": [
      "بطولة كأس العالم 2018 مع فرنسا",
      "هداف نهائي كأس العالم 2022 (هاتريك)",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان",
      "هداف الدوري الفرنسي لعدة مواسم متتالية"
    ],
    "achievementsEn": [
      "2018 FIFA World Cup title with France",
      "Hat-trick in the 2022 World Cup final",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "Ligue 1 top scorer for several consecutive seasons"
    ],
    "clubsHistoryAr": [
      "موناكو",
      "باريس سان جيرمان",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Monaco",
      "Paris Saint-Germain",
      "Real Madrid"
    ],
    "clubIds": [
      "monaco",
      "paris-saint-germain",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كيليان_مبابي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kylian_Mbappé"
  },
  {
    "id": "erling-haaland",
    "nameAr": "إيرلينغ هالاند",
    "nameEn": "Erling Haaland",
    "nationalityAr": "نرويجي",
    "nationalityEn": "Norwegian",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مهاجم نرويجي عملاق يُعرف بقوته البدنية وغزارته التهديفية غير المسبوقة، حطم أرقامًا قياسية في عدد الأهداف بموسم واحد في الدوري الإنجليزي الممتاز منذ انضمامه لمانشستر سيتي عام 2022.",
    "bioEn": "A towering Norwegian forward known for his physical power and record-breaking goalscoring output, having broken single-season Premier League scoring records since joining Manchester City in 2022.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "رقم قياسي لأكثر الأهداف في موسم واحد بالدوري الإنجليزي الممتاز (نظام 38 مباراة)",
      "الحذاء الذهبي الأوروبي أكثر من مرة",
      "لقب الدوري الإنجليزي الممتاز مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "2023 UEFA Champions League with Manchester City",
      "Premier League single-season scoring record (38-game format)",
      "European Golden Shoe on multiple occasions",
      "Premier League title with Manchester City"
    ],
    "clubsHistoryAr": [
      "مولده",
      "ردنا",
      "سالزبورغ",
      "بوروسيا دورتموند",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Bryne",
      "Molde",
      "Salzburg",
      "Borussia Dortmund",
      "Manchester City"
    ],
    "clubIds": [
      "borussia-dortmund",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إيرلينغ_هالاند",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Erling_Haaland"
  },
  {
    "id": "kevin-de-bruyne",
    "nameAr": "كيفن دي بروين",
    "nameEn": "Kevin De Bruyne",
    "nationalityAr": "بلجيكي",
    "nationalityEn": "Belgian",
    "clubAr": "نابولي",
    "clubEn": "Napoli",
    "clubId": "napoli",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Midfielder / Playmaker"
    },
    "era": "2008-الآن",
    "active": true,
    "bioAr": "وسط ملعب بلجيكي يُعد من أفضل صانعي الألعاب في جيله بفضل رؤيته وتمريراته الحاسمة الطويلة، كان اللاعب المحوري في مانشستر سيتي لأكثر من عقد قبل انتقاله إلى نابولي الإيطالي.",
    "bioEn": "A Belgian midfielder regarded as one of the finest playmakers of his generation for his vision and long-range decisive passing, he was the central figure at Manchester City for over a decade before moving to Italian club Napoli.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "جائزة أفضل لاعب في الدوري الإنجليزي الممتاز",
      "صاحب أكبر عدد تمريرات حاسمة في تاريخ الدوري الإنجليزي الممتاز لموسم واحد (رقم مشترك)"
    ],
    "achievementsEn": [
      "2023 UEFA Champions League with Manchester City",
      "Multiple Premier League titles with Manchester City",
      "PFA Players' Player of the Year award",
      "Holds the Premier League single-season assists record (shared)"
    ],
    "clubsHistoryAr": [
      "خنت",
      "تشيلسي",
      "فيردر بريمن (إعارة)",
      "فولفسبورغ",
      "مانشستر سيتي",
      "نابولي"
    ],
    "clubsHistoryEn": [
      "Genk",
      "Chelsea",
      "Werder Bremen (loan)",
      "Wolfsburg",
      "Manchester City",
      "Napoli"
    ],
    "clubIds": [
      "chelsea",
      "werder-bremen",
      "vfl-wolfsburg",
      "manchester-city",
      "napoli"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كيفن_دي_بروين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kevin_De_Bruyne"
  },
  {
    "id": "luka-modric",
    "nameAr": "لوكا مودريتش",
    "nameEn": "Luka Modrić",
    "nationalityAr": "كرواتي",
    "nationalityEn": "Croatian",
    "clubAr": "ميلان",
    "clubEn": "Milan",
    "clubId": "ac-milan",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2003-الآن",
    "active": true,
    "bioAr": "وسط ميدان كرواتي اشتهر بتحكمه في إيقاع اللعب وقدرته على الاستمرار في أعلى المستويات رغم تقدمه في العمر. قاد كرواتيا لنهائي كأس العالم 2018 وفاز بالكرة الذهبية في نفس العام، بعد سنوات من الهيمنة مع ريال مدريد.",
    "bioEn": "A Croatian midfielder known for controlling the tempo of play and sustaining top-level performances well into his later years. He led Croatia to the 2018 World Cup final and won the Ballon d'Or that same year, after years of dominance with Real Madrid.",
    "achievementsAr": [
      "الكرة الذهبية 2018",
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "الوصول لنهائي كأس العالم 2018 مع كرواتيا",
      "أفضل لاعب في كأس العالم 2018 (الكرة الذهبية للبطولة)"
    ],
    "achievementsEn": [
      "2018 Ballon d'Or",
      "5 UEFA Champions League titles with Real Madrid",
      "Runner-up at the 2018 World Cup with Croatia",
      "2018 World Cup Golden Ball (best player of the tournament)"
    ],
    "clubsHistoryAr": [
      "دينامو زغرب",
      "زريينسكي موستار (إعارة)",
      "توتنهام هوتسبير",
      "ريال مدريد",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Dinamo Zagreb",
      "Zrinjski Mostar (loan)",
      "Tottenham Hotspur",
      "Real Madrid",
      "Milan"
    ],
    "clubIds": [
      "tottenham",
      "real-madrid",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لوكا_مودريتش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Luka_Modrić"
  },
  {
    "id": "robert-lewandowski",
    "nameAr": "روبرت ليفاندوفسكي",
    "nameEn": "Robert Lewandowski",
    "nationalityAr": "بولندي",
    "nationalityEn": "Polish",
    "clubAr": "شيكاغو فاير (الدوري الأمريكي MLS)",
    "clubEn": "Chicago Fire (MLS)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2006-الآن",
    "active": true,
    "bioAr": "مهاجم بولندي يُعتبر من أعظم المهاجمين في تاريخ كرة القدم الأوروبية بفضل غزارته التهديفية المستمرة على مدى سنوات طويلة، كان اللاعب المحوري في بايرن ميونخ ثم في برشلونة، قبل أن يرحل كلاعب حر في صيف 2026 وينضم إلى شيكاغو فاير الأمريكي في الدوري الأمريكي (MLS) بعقد حتى نهاية موسم 2027-2028.",
    "bioEn": "A Polish forward regarded as one of the greatest strikers in European football history for his sustained goalscoring over many years. He was the central figure at Bayern Munich and then Barcelona, before leaving as a free agent in summer 2026 to join Chicago Fire in Major League Soccer (MLS) on a deal through the 2027-28 season.",
    "achievementsAr": [
      "8 ألقاب دوري ألماني متتالية تقريبًا مع بايرن ميونخ",
      "دوري أبطال أوروبا 2020 مع بايرن ميونخ",
      "جائزة أفضل لاعب في العالم من الفيفا",
      "هداف الدوري الإسباني عدة مرات مع برشلونة"
    ],
    "achievementsEn": [
      "Multiple consecutive Bundesliga titles with Bayern Munich",
      "2020 UEFA Champions League with Bayern Munich",
      "The Best FIFA Men's Player award",
      "La Liga top scorer multiple times with Barcelona"
    ],
    "clubsHistoryAr": [
      "زنيكس",
      "لخ بوزنان",
      "بروسيا دورتموند",
      "بايرن ميونخ",
      "برشلونة",
      "شيكاغو فاير"
    ],
    "clubsHistoryEn": [
      "Znicz",
      "Lech Poznań",
      "Borussia Dortmund",
      "Bayern Munich",
      "Barcelona",
      "Chicago Fire"
    ],
    "clubIds": [
      "borussia-dortmund",
      "bayern-munich",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روبرت_ليفاندوفسكي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Robert_Lewandowski"
  },
  {
    "id": "thierry-henry",
    "nameAr": "تييري هنري",
    "nameEn": "Thierry Henry",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "نيويورك ريد بولز (معتزل)",
    "clubEn": "New York Red Bulls (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1994-2014",
    "active": false,
    "bioAr": "مهاجم فرنسي أسطوري وهداف تاريخي لنادي أرسنال، اشتهر بسرعته وأناقته الفنية أمام المرمى. كان جزءًا أساسيًا من منتخب فرنسا الفائز بكأس العالم 1998 ويورو 2000.",
    "bioEn": "A legendary French forward and Arsenal's all-time top scorer, known for his pace and clinical finishing elegance in front of goal. He was a key part of the France squad that won the 1998 World Cup and Euro 2000.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة أمم أوروبا 2000 مع فرنسا",
      "هداف تاريخي لنادي أرسنال",
      "الحذاء الذهبي الأوروبي مرتين"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "Arsenal's all-time top goalscorer",
      "European Golden Shoe twice"
    ],
    "clubsHistoryAr": [
      "موناكو",
      "يوفنتوس",
      "أرسنال",
      "برشلونة",
      "نيويورك ريد بولز"
    ],
    "clubsHistoryEn": [
      "Monaco",
      "Juventus",
      "Arsenal",
      "Barcelona",
      "New York Red Bulls"
    ],
    "clubIds": [
      "monaco",
      "juventus",
      "arsenal",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/تييري_هنري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Thierry_Henry"
  },
  {
    "id": "didier-drogba",
    "nameAr": "ديديه دروغبا",
    "nameEn": "Didier Drogba",
    "nationalityAr": "إيفواري",
    "nationalityEn": "Ivorian",
    "clubAr": "فينيكس رايزينغ (معتزل)",
    "clubEn": "Phoenix Rising (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1998-2018",
    "active": false,
    "bioAr": "مهاجم إيفواري قوي البنية، يُعد أسطورة نادي تشيلسي الإنجليزي بفضل أهدافه الحاسمة في النهائيات الكبرى، وأبرزها الهدف الذي قاد فريقه للفوز بدوري أبطال أوروبا 2012.",
    "bioEn": "A powerfully built Ivorian forward considered a Chelsea legend for his decisive goals in major finals, most notably the goal that helped lead his side to the 2012 UEFA Champions League title.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2012 مع تشيلسي",
      "4 ألقاب دوري إنجليزي ممتاز مع تشيلسي",
      "هداف الدوري الإنجليزي الممتاز مرتين",
      "أفضل لاعب إفريقي مرتين"
    ],
    "achievementsEn": [
      "2012 UEFA Champions League with Chelsea",
      "4 Premier League titles with Chelsea",
      "Premier League top scorer twice",
      "African Footballer of the Year twice"
    ],
    "clubsHistoryAr": [
      "لومان",
      "غينغامب",
      "مارسيليا",
      "تشيلسي",
      "شنغهاي شينخوا",
      "غالطة سراي",
      "تشيلسي",
      "فينيكس رايزينغ"
    ],
    "clubsHistoryEn": [
      "Le Mans",
      "Guingamp",
      "Marseille",
      "Chelsea",
      "Shanghai Shenhua",
      "Galatasaray",
      "Chelsea",
      "Phoenix Rising"
    ],
    "clubIds": [
      "marseille",
      "chelsea",
      "galatasaray"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ديديه_دروغبا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Didier_Drogba"
  },
  {
    "id": "samuel-etoo",
    "nameAr": "صامويل إيتو",
    "nameEn": "Samuel Eto'o",
    "nationalityAr": "كاميروني",
    "nationalityEn": "Cameroonian",
    "clubAr": "أنطاليا سبور (معتزل)",
    "clubEn": "Antalyaspor (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1997-2019",
    "active": false,
    "bioAr": "أحد أعظم المهاجمين الأفارقة في التاريخ، فاز بدوري أبطال أوروبا ثلاث مرات مع ثلاثة أندية مختلفة (برشلونة مرتين وإنتر ميلان مرة)، وحصل على لقب أفضل لاعب إفريقي أربع مرات.",
    "bioEn": "One of the greatest African forwards in history, he won the UEFA Champions League three times with three different clubs (twice with Barcelona and once with Inter Milan), and won the African Footballer of the Year award four times.",
    "achievementsAr": [
      "3 ألقاب دوري أبطال أوروبا مع أندية مختلفة",
      "أفضل لاعب إفريقي 4 مرات (رقم قياسي مشترك)",
      "هداف الدوري الإسباني مرتين مع برشلونة",
      "بطولة كأس الأمم الإفريقية مرتين مع الكاميرون"
    ],
    "achievementsEn": [
      "3 UEFA Champions League titles with different clubs",
      "African Footballer of the Year 4 times (joint record)",
      "La Liga top scorer twice with Barcelona",
      "Africa Cup of Nations title twice with Cameroon"
    ],
    "clubsHistoryAr": [
      "ريال مدريد",
      "ليدا (إعارة)",
      "مايوركا",
      "برشلونة",
      "إنتر ميلان",
      "أنجي مخاتشكالا",
      "تشيلسي",
      "إيفرتون",
      "أنطاليا سبور"
    ],
    "clubsHistoryEn": [
      "Real Madrid",
      "Leganés (loan)",
      "Mallorca",
      "Barcelona",
      "Inter Milan",
      "Anzhi Makhachkala",
      "Chelsea",
      "Everton",
      "Antalyaspor"
    ],
    "clubIds": [
      "real-madrid",
      "mallorca",
      "barcelona",
      "inter-milan",
      "chelsea",
      "everton"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/صامويل_إيتو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Samuel_Eto'o"
  },
  {
    "id": "mahmoud-elkhatib",
    "nameAr": "محمود الخطيب",
    "nameEn": "Mahmoud El Khatib",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "الأهلي (معتزل)",
    "clubEn": "Al Ahly (retired)",
    "clubId": "al-ahly",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1973-1988",
    "active": false,
    "bioAr": "أسطورة كرة القدم المصرية ولاعب الأهلي الأشهر، يُلقب بـ'بيبو'، ويُعد أحد أفضل المهاجمين في تاريخ الكرة المصرية والإفريقية. بعد اعتزاله أصبح رئيسًا للنادي الأهلي لسنوات طويلة.",
    "bioEn": "An Egyptian football legend and the most famous Al Ahly player, nicknamed 'Bibo', regarded as one of the greatest forwards in Egyptian and African football history. After retiring, he became president of Al Ahly for many years.",
    "achievementsAr": [
      "أفضل لاعب إفريقي 1983",
      "عدة ألقاب دوري مصري وكأس مصر مع الأهلي",
      "بطولة دوري أبطال إفريقيا مع الأهلي",
      "رئيس نادي الأهلي لعدة دورات بعد الاعتزال"
    ],
    "achievementsEn": [
      "African Footballer of the Year 1983",
      "Multiple Egyptian league and cup titles with Al Ahly",
      "CAF Champions League title with Al Ahly",
      "President of Al Ahly for several terms after retirement"
    ],
    "clubsHistoryAr": [
      "الأهلي"
    ],
    "clubsHistoryEn": [
      "Al Ahly"
    ],
    "clubIds": [
      "al-ahly"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/محمود_الخطيب",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mahmoud_El_Khatib"
  },
  {
    "id": "ahmed-hassan",
    "nameAr": "أحمد حسن",
    "nameEn": "Ahmed Hassan",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "الزمالك (معتزل)",
    "clubEn": "Zamalek (retired)",
    "clubId": "zamalek",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1995-2013",
    "active": false,
    "bioAr": "لاعب وسط مصري سابق، صاحب 184 مباراة دولية مع منتخب مصر وهو ثامن أكثر لاعب مشاركة دوليًا في تاريخ كرة القدم الرجالية. بدأ مع أسوان ثم الإسماعيلي، ولعب في تركيا وبلجيكا قبل عودته للأهلي ثم الزمالك، وفاز مع مصر بأربع بطولات أمم إفريقيا.",
    "bioEn": "Former Egyptian midfielder with 184 caps for Egypt, the eighth-most capped men's international footballer in history. He began at Aswan and Ismaily, played in Turkey and Belgium, then returned to Egypt with Al Ahly and Zamalek, and won four Africa Cup of Nations titles with Egypt.",
    "achievementsAr": [
      "4 بطولات كأس أمم إفريقيا مع مصر (1998 و2006 و2008 و2010)",
      "184 مباراة دولية و33 هدفًا مع منتخب مصر"
    ],
    "achievementsEn": [
      "4 Africa Cup of Nations titles with Egypt (1998, 2006, 2008, 2010)",
      "184 international caps and 33 goals for Egypt"
    ],
    "clubsHistoryAr": [
      "أسوان",
      "الإسماعيلي",
      "كوجالي سبور",
      "دنيزلي سبور",
      "غنجلربيرليغي",
      "بشكتاش",
      "أندرلخت",
      "الأهلي",
      "الزمالك"
    ],
    "clubsHistoryEn": [
      "Aswan",
      "Ismaily",
      "Kocaelispor",
      "Denizlispor",
      "Gençlerbirliği",
      "Beşiktaş",
      "Anderlecht",
      "Al Ahly",
      "Zamalek"
    ],
    "clubIds": [
      "ismaily",
      "besiktas",
      "anderlecht",
      "al-ahly",
      "zamalek"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أحمد_حسن_(لاعب_كرة_قدم)",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ahmed_Hassan_(footballer,_born_1975)"
  },
  {
    "id": "essam-el-hadary",
    "nameAr": "عصام الحضري",
    "nameEn": "Essam El Hadary",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "وادي دجلة (معتزل)",
    "clubEn": "Wadi Degla (retired)",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1996-2018",
    "active": false,
    "bioAr": "حارس مرمى مصري أسطوري يُلقب بـ'السد العالي'، ويُعد من أفضل حراس المرمى في تاريخ إفريقيا. أصبح أكبر لاعب سنًا يشارك في نهائيات كأس العالم عندما لعب لمصر في مونديال 2018 عن عمر يناهز 45 عامًا.",
    "bioEn": "A legendary Egyptian goalkeeper nicknamed the 'High Dam', regarded as one of the greatest goalkeepers in African football history. He became the oldest player to appear at a FIFA World Cup finals when he played for Egypt at the 2018 World Cup, aged 45.",
    "achievementsAr": [
      "4 بطولات كأس الأمم الإفريقية مع مصر",
      "أكبر لاعب سنًا يشارك في نهائيات كأس العالم",
      "3 ألقاب دوري أبطال إفريقيا مع الأهلي",
      "7 ألقاب دوري مصري مع الأهلي"
    ],
    "achievementsEn": [
      "4 Africa Cup of Nations titles with Egypt",
      "Oldest player to appear at a FIFA World Cup finals",
      "3 CAF Champions League titles with Al Ahly",
      "7 Egyptian league titles with Al Ahly"
    ],
    "clubsHistoryAr": [
      "دمياط",
      "الأهلي",
      "سيون",
      "الأهلي",
      "الميريخ",
      "وادي دجلة"
    ],
    "clubsHistoryEn": [
      "Damietta",
      "Al Ahly",
      "Sion",
      "Al Ahly",
      "Al-Merrikh",
      "Wadi Degla"
    ],
    "clubIds": [
      "al-ahly"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/عصام_الحضري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Essam_El_Hadary"
  },
  {
    "id": "mohamed-aboutrika",
    "nameAr": "محمد أبو تريكة",
    "nameEn": "Mohamed Aboutrika",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "الأهلي (معتزل)",
    "clubEn": "Al Ahly (retired)",
    "clubId": "al-ahly",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder / Playmaker"
    },
    "era": "1999-2013",
    "active": false,
    "bioAr": "أحد أفضل صانعي الألعاب في تاريخ الكرة المصرية والإفريقية، قضى معظم مسيرته مع نادي الأهلي وحقق معه إنجازات محلية وقارية عديدة. عُرف بأناقته الفنية ورؤيته في تمرير الكرة.",
    "bioEn": "One of the finest playmakers in Egyptian and African football history, he spent most of his career with Al Ahly, achieving numerous domestic and continental honours. He was known for his elegant technique and passing vision.",
    "achievementsAr": [
      "أفضل لاعب إفريقي 2008",
      "4 ألقاب دوري أبطال إفريقيا مع الأهلي",
      "بطولتا كأس الأمم الإفريقية 2006 و2008 مع مصر",
      "عدة ألقاب دوري وكأس مصر مع الأهلي"
    ],
    "achievementsEn": [
      "African Footballer of the Year 2008",
      "4 CAF Champions League titles with Al Ahly",
      "2006 and 2008 Africa Cup of Nations titles with Egypt",
      "Multiple Egyptian league and cup titles with Al Ahly"
    ],
    "clubsHistoryAr": [
      "الترسانة",
      "الأهلي",
      "ويجان أتليتيك"
    ],
    "clubsHistoryEn": [
      "Tersana",
      "Al Ahly",
      "Wigan Athletic"
    ],
    "clubIds": [
      "tersana",
      "al-ahly",
      "wigan-athletic"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/محمد_أبو_تريكة",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mohamed_Aboutrika"
  },
  {
    "id": "riyad-mahrez",
    "nameAr": "رياض محرز",
    "nameEn": "Riyad Mahrez",
    "nationalityAr": "جزائري",
    "nationalityEn": "Algerian",
    "clubAr": "الأهلي (السعودية)",
    "clubEn": "Al Ahli (Saudi Arabia)",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2010-الآن",
    "active": true,
    "bioAr": "جناح جزائري يُعد أحد أفضل اللاعبين العرب والأفارقة في العصر الحديث، حصل على لقب أفضل لاعب إفريقي مرتين، وكان جزءًا أساسيًا من مانشستر سيتي في سنوات هيمنته على الدوري الإنجليزي الممتاز.",
    "bioEn": "An Algerian winger regarded as one of the finest Arab and African players of the modern era, twice named African Footballer of the Year, and a key part of Manchester City during its Premier League dominance.",
    "achievementsAr": [
      "أفضل لاعب إفريقي مرتين",
      "بطولة كأس الأمم الإفريقية 2019 مع الجزائر",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "African Footballer of the Year (twice)",
      "2019 Africa Cup of Nations title with Algeria",
      "Multiple Premier League titles with Manchester City",
      "2023 UEFA Champions League with Manchester City"
    ],
    "clubsHistoryAr": [
      "لوهافر",
      "لستر سيتي",
      "مانشستر سيتي",
      "الأهلي (السعودية)"
    ],
    "clubsHistoryEn": [
      "Le Havre",
      "Leicester City",
      "Manchester City",
      "Al Ahli (Saudi Arabia)"
    ],
    "clubIds": [
      "le-havre",
      "leicester-city",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رياض_محرز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Riyad_Mahrez"
  },
  {
    "id": "neymar",
    "nameAr": "نيمار",
    "nameEn": "Neymar",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "سانتوس",
    "clubEn": "Santos",
    "clubId": "santos-fc",
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "نجم برازيلي اشتهر بمهاراته الفردية الاستثنائية ومراوغاته، شكّل مع ميسي وسواريز ثلاثيًا هجوميًا مرعبًا في برشلونة، ثم انتقل بصفقة قياسية عالميًا إلى باريس سان جيرمان قبل أن يعود لاحقًا إلى ناديه الأم سانتوس.",
    "bioEn": "A Brazilian star known for his exceptional individual skill and dribbling, he formed a fearsome attacking trio with Messi and Suárez at Barcelona, before moving to Paris Saint-Germain in a then-world-record transfer, later returning to his boyhood club Santos.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2015 مع برشلونة",
      "بطولة الألعاب الأولمبية 2016 مع البرازيل",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان",
      "أحد أغلى الانتقالات في تاريخ كرة القدم"
    ],
    "achievementsEn": [
      "2015 UEFA Champions League with Barcelona",
      "2016 Olympic gold medal with Brazil",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "One of the most expensive transfers in football history"
    ],
    "clubsHistoryAr": [
      "سانتوس",
      "برشلونة",
      "باريس سان جيرمان",
      "الهلال",
      "سانتوس"
    ],
    "clubsHistoryEn": [
      "Santos",
      "Barcelona",
      "Paris Saint-Germain",
      "Al-Hilal",
      "Santos"
    ],
    "clubIds": [
      "santos-fc",
      "barcelona",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/نيمار",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Neymar"
  },
  {
    "id": "sadio-mane",
    "nameAr": "ساديو ماني",
    "nameEn": "Sadio Mané",
    "nationalityAr": "سنغالي",
    "nationalityEn": "Senegalese",
    "clubAr": "النصر",
    "clubEn": "Al Nassr",
    "clubId": null,
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "مهاجم سنغالي سريع وفعال، كان جزءًا من ثلاثي هجومي مرعب مع محمد صلاح وروبرتو فيرمينو في ليفربول، وقاد السنغال للفوز بأول لقب كأس أمم إفريقيا في تاريخها عام 2022.",
    "bioEn": "A fast and effective Senegalese forward who was part of a fearsome attacking trio alongside Mohamed Salah and Roberto Firmino at Liverpool, and led Senegal to their first-ever Africa Cup of Nations title in 2022.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2019 مع ليفربول",
      "بطولة كأس الأمم الإفريقية 2022 مع السنغال",
      "أفضل لاعب إفريقي 2019",
      "لقب الدوري الإنجليزي الممتاز 2019-2020 مع ليفربول"
    ],
    "achievementsEn": [
      "2019 UEFA Champions League with Liverpool",
      "2022 Africa Cup of Nations title with Senegal",
      "African Footballer of the Year 2019",
      "2019-2020 Premier League title with Liverpool"
    ],
    "clubsHistoryAr": [
      "ميتز",
      "ريد بول سالزبورغ",
      "ساوثهامبتون",
      "ليفربول",
      "بايرن ميونخ",
      "النصر"
    ],
    "clubsHistoryEn": [
      "Metz",
      "Red Bull Salzburg",
      "Southampton",
      "Liverpool",
      "Bayern Munich",
      "Al Nassr"
    ],
    "clubIds": [
      "metz",
      "southampton",
      "liverpool",
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ساديو_ماني",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sadio_Mané"
  },
  {
    "id": "gianluigi-buffon",
    "nameAr": "جانلويجي بوفون",
    "nameEn": "Gianluigi Buffon",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "بارما (معتزل)",
    "clubEn": "Parma (retired)",
    "clubId": "parma",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1995-2023",
    "active": false,
    "bioAr": "حارس مرمى إيطالي يُعد من أعظم حراس المرمى في تاريخ كرة القدم، قضى معظم مسيرته مع يوفنتوس، وتوّج بكأس العالم 2006 مع إيطاليا. استمر في اللعب على أعلى مستوى حتى أواخر الأربعينات من عمره تقريبًا.",
    "bioEn": "An Italian goalkeeper regarded as one of the greatest in football history, he spent most of his career with Juventus and won the 2006 World Cup with Italy. He continued playing at a high level into his mid-40s.",
    "achievementsAr": [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "عدة ألقاب دوري إيطالي مع يوفنتوس",
      "جائزة ياشين لأفضل حارس مرمى في العالم عدة مرات",
      "حارس مرمى الفريق المثالي لكأس العالم أكثر من مرة"
    ],
    "achievementsEn": [
      "2006 FIFA World Cup title with Italy",
      "Multiple Serie A titles with Juventus",
      "Yashin/IFFHS World's Best Goalkeeper award multiple times",
      "FIFA World Cup All-Star Team goalkeeper on multiple occasions"
    ],
    "clubsHistoryAr": [
      "بارما",
      "يوفنتوس",
      "باريس سان جيرمان",
      "يوفنتوس",
      "بارما"
    ],
    "clubsHistoryEn": [
      "Parma",
      "Juventus",
      "Paris Saint-Germain",
      "Juventus",
      "Parma"
    ],
    "clubIds": [
      "parma",
      "juventus",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جانلويجي_بوفون",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gianluigi_Buffon"
  },
  {
    "id": "andrea-pirlo",
    "nameAr": "أندريا بيرلو",
    "nameEn": "Andrea Pirlo",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "نيويورك سيتي (معتزل)",
    "clubEn": "New York City FC (retired)",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب",
      "en": "Deep-lying Playmaker"
    },
    "era": "1994-2017",
    "active": false,
    "bioAr": "وسط ميدان إيطالي اشتهر بتمريراته الطويلة الدقيقة ورؤيته الاستراتيجية من عمق الملعب، أعاد تعريف دور 'الريجيستا' الحديث. توّج بكأس العالم 2006 مع إيطاليا وحقق ألقابًا كبرى مع ميلان ويوفنتوس.",
    "bioEn": "An Italian midfielder known for his precise long passing and strategic vision from deep positions, redefining the modern 'regista' role. He won the 2006 World Cup with Italy and major honours with both Milan and Juventus.",
    "achievementsAr": [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "دوري أبطال أوروبا مرتين مع ميلان",
      "4 ألقاب دوري إيطالي متتالية مع يوفنتوس",
      "أفضل لاعب في نهائي كأس العالم 2006 (المركز الثاني في الكرة الذهبية للبطولة)"
    ],
    "achievementsEn": [
      "2006 FIFA World Cup title with Italy",
      "UEFA Champions League title twice with Milan",
      "4 consecutive Serie A titles with Juventus",
      "Runner-up for the 2006 World Cup Golden Ball"
    ],
    "clubsHistoryAr": [
      "برشيا",
      "إنتر ميلان",
      "ريجينا (إعارة)",
      "ميلان",
      "يوفنتوس",
      "نيويورك سيتي"
    ],
    "clubsHistoryEn": [
      "Brescia",
      "Inter Milan",
      "Reggina (loan)",
      "Milan",
      "Juventus",
      "New York City FC"
    ],
    "clubIds": [
      "inter-milan",
      "ac-milan",
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أندريا_بيرلو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Andrea_Pirlo"
  },
  {
    "id": "wayne-rooney",
    "nameAr": "واين روني",
    "nameEn": "Wayne Rooney",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "دربي كاونتي (معتزل كلاعب)",
    "clubEn": "Derby County (retired as player)",
    "clubId": "derby-county",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2002-2021",
    "active": false,
    "bioAr": "هداف إنجليزي تاريخي، يحمل الرقم القياسي لأكثر هداف في تاريخ مانشستر يونايتد ومنتخب إنجلترا (حتى تجاوزه لاحقًا في سجل المنتخب). عُرف بقوته البدنية وتنوع أسلوب لعبه الهجومي منذ ظهوره المبكر مع إيفرتون في سن السادسة عشرة.",
    "bioEn": "A historic English goalscorer who holds the all-time scoring record for Manchester United and was long the England national team's top scorer. Known for his physical power and versatile attacking style since his early breakthrough with Everton at age 16.",
    "achievementsAr": [
      "5 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد",
      "الهداف التاريخي لنادي مانشستر يونايتد",
      "كأس العالم للأندية 2008 مع مانشستر يونايتد"
    ],
    "achievementsEn": [
      "5 Premier League titles with Manchester United",
      "2008 UEFA Champions League with Manchester United",
      "Manchester United's all-time top goalscorer",
      "2008 FIFA Club World Cup with Manchester United"
    ],
    "clubsHistoryAr": [
      "إيفرتون",
      "مانشستر يونايتد",
      "دي سي يونايتد",
      "إيفرتون",
      "دربي كاونتي"
    ],
    "clubsHistoryEn": [
      "Everton",
      "Manchester United",
      "D.C. United",
      "Everton",
      "Derby County"
    ],
    "clubIds": [
      "everton",
      "manchester-united",
      "derby-county"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/واين_روني",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Wayne_Rooney"
  },
  {
    "id": "steven-gerrard",
    "nameAr": "ستيفن جيرارد",
    "nameEn": "Steven Gerrard",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "لوس أنجلوس غالاكسي (معتزل)",
    "clubEn": "LA Galaxy (retired)",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1998-2016",
    "active": false,
    "bioAr": "أيقونة نادي ليفربول وقائده لسنوات طويلة، اشتهر بقوته البدنية وتسديداته من مسافات بعيدة وقدرته على حسم المباريات بمفرده، وأبرزها نهائي دوري أبطال أوروبا 2005 الشهير أمام ميلان.",
    "bioEn": "A Liverpool icon and long-time captain, known for his physical power, long-range shooting, and ability to single-handedly decide matches, most famously in the legendary 2005 Champions League final comeback against Milan.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2005 مع ليفربول",
      "كأس الاتحاد الإنجليزي مع ليفربول عدة مرات",
      "قائد ليفربول لأكثر من عقد",
      "قائد منتخب إنجلترا"
    ],
    "achievementsEn": [
      "2005 UEFA Champions League with Liverpool",
      "FA Cup with Liverpool multiple times",
      "Liverpool captain for over a decade",
      "England national team captain"
    ],
    "clubsHistoryAr": [
      "ليفربول",
      "لوس أنجلوس غالاكسي"
    ],
    "clubsHistoryEn": [
      "Liverpool",
      "LA Galaxy"
    ],
    "clubIds": [
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ستيفن_جيرارد",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Steven_Gerrard"
  },
  {
    "id": "frank-lampard",
    "nameAr": "فرانك لامبارد",
    "nameEn": "Frank Lampard",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "نيويورك سيتي (معتزل)",
    "clubEn": "New York City FC (retired)",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1995-2017",
    "active": false,
    "bioAr": "وسط ميدان إنجليزي يحمل الرقم القياسي لأكثر هداف في تاريخ نادي تشيلسي، عُرف بقدرته الاستثنائية على الوصول للمنطقة والتهديف من الصف الثاني، وكان جزءًا أساسيًا من نجاحات تشيلسي المحلية والقارية.",
    "bioEn": "An English midfielder who holds the all-time scoring record for Chelsea, known for his exceptional ability to arrive in the box and score from midfield. He was a central figure in Chelsea's domestic and European success.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2012 مع تشيلسي",
      "3 ألقاب دوري إنجليزي ممتاز مع تشيلسي",
      "الهداف التاريخي لنادي تشيلسي",
      "4 ألقاب كأس الاتحاد الإنجليزي مع تشيلسي"
    ],
    "achievementsEn": [
      "2012 UEFA Champions League with Chelsea",
      "3 Premier League titles with Chelsea",
      "Chelsea's all-time top goalscorer",
      "4 FA Cup titles with Chelsea"
    ],
    "clubsHistoryAr": [
      "ويست هام يونايتد",
      "سوانزي سيتي (إعارة)",
      "تشيلسي",
      "مانشستر سيتي",
      "نيويورك سيتي"
    ],
    "clubsHistoryEn": [
      "West Ham United",
      "Swansea City (loan)",
      "Chelsea",
      "Manchester City",
      "New York City FC"
    ],
    "clubIds": [
      "west-ham-united",
      "swansea-city",
      "chelsea",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فرانك_لامبارد",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Frank_Lampard"
  },
  {
    "id": "ryan-giggs",
    "nameAr": "راين غيغز",
    "nameEn": "Ryan Giggs",
    "nationalityAr": "ويلزي",
    "nationalityEn": "Welsh",
    "clubAr": "مانشستر يونايتد (معتزل)",
    "clubEn": "Manchester United (retired)",
    "clubId": "manchester-united",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "1990-2014",
    "active": false,
    "bioAr": "جناح ويلزي قضى مسيرته بأكملها مع مانشستر يونايتد على مدى 24 موسمًا، ويحمل الرقم القياسي لأكثر الألقاب فوزًا في تاريخ الدوري الإنجليزي الممتاز، واشتهر بمراوغاته السريعة على الجناح الأيسر.",
    "bioEn": "A Welsh winger who spent his entire 24-season career at Manchester United, holding the record for most Premier League titles won by a player, and known for his rapid dribbling down the left flank.",
    "achievementsAr": [
      "13 لقب دوري إنجليزي ممتاز (رقم قياسي)",
      "دوري أبطال أوروبا مرتين مع مانشستر يونايتد",
      "أكثر لاعب مشاركة في تاريخ مانشستر يونايتد",
      "4 ألقاب كأس الاتحاد الإنجليزي"
    ],
    "achievementsEn": [
      "13 Premier League titles (record)",
      "UEFA Champions League twice with Manchester United",
      "Manchester United's all-time appearance record holder",
      "4 FA Cup titles"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Manchester United"
    ],
    "clubIds": [
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/راين_غيغز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ryan_Giggs"
  },
  {
    "id": "eric-cantona",
    "nameAr": "إريك كانتونا",
    "nameEn": "Eric Cantona",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "مانشستر يونايتد (معتزل)",
    "clubEn": "Manchester United (retired)",
    "clubId": "manchester-united",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1983-1997",
    "active": false,
    "bioAr": "مهاجم فرنسي كاريزمي يُعتبر الشرارة التي أشعلت عصر هيمنة مانشستر يونايتد في التسعينيات، اشتهر بشخصيته القوية وأسلوبه الفني المميز، واعتزل مبكرًا نسبيًا في قمة مستواه.",
    "bioEn": "A charismatic French forward credited as the spark that ignited Manchester United's dominant era in the 1990s, known for his strong personality and distinctive flair, who retired relatively early while still at the peak of his powers.",
    "achievementsAr": [
      "4 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "لقب أفضل لاعب في الدوري الإنجليزي الممتاز مرتين",
      "2 كأس اتحاد إنجليزي مع مانشستر يونايتد",
      "أيقونة ثقافية في تاريخ الدوري الإنجليزي"
    ],
    "achievementsEn": [
      "4 Premier League titles with Manchester United",
      "PFA Players' Player of the Year twice",
      "2 FA Cups with Manchester United",
      "Cultural icon of Premier League history"
    ],
    "clubsHistoryAr": [
      "أوكسير",
      "مارسيليا",
      "بوردو (إعارة)",
      "مونبلييه (إعارة)",
      "نيم (إعارة)",
      "ليدز يونايتد",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Auxerre",
      "Marseille",
      "Bordeaux (loan)",
      "Montpellier (loan)",
      "Nîmes (loan)",
      "Leeds United",
      "Manchester United"
    ],
    "clubIds": [
      "auxerre",
      "marseille",
      "bordeaux",
      "montpellier",
      "leeds-united",
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إريك_كانتونا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Eric_Cantona"
  },
  {
    "id": "alan-shearer",
    "nameAr": "آلان شيرر",
    "nameEn": "Alan Shearer",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "نيوكاسل يونايتد (معتزل)",
    "clubEn": "Newcastle United (retired)",
    "clubId": "newcastle-united",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1988-2006",
    "active": false,
    "bioAr": "مهاجم إنجليزي يحمل الرقم القياسي لأكثر هداف في تاريخ الدوري الإنجليزي الممتاز بأكثر من 260 هدفًا، اشتهر بقوته البدنية وتسديداته القوية، وكان قائد منتخب إنجلترا في يورو 96.",
    "bioEn": "An English forward who holds the all-time Premier League scoring record with over 260 goals, known for his physical power and powerful shooting, and captained England at Euro 96.",
    "achievementsAr": [
      "الهداف التاريخي للدوري الإنجليزي الممتاز",
      "لقب الدوري الإنجليزي الممتاز مع بلاكبيرن روفرز",
      "الحذاء الذهبي الأوروبي",
      "هداف الدوري الإنجليزي الممتاز 3 مرات"
    ],
    "achievementsEn": [
      "All-time Premier League top scorer",
      "Premier League title with Blackburn Rovers",
      "European Golden Boot",
      "Premier League top scorer 3 times"
    ],
    "clubsHistoryAr": [
      "ساوثهامبتون",
      "بلاكبيرن روفرز",
      "نيوكاسل يونايتد"
    ],
    "clubsHistoryEn": [
      "Southampton",
      "Blackburn Rovers",
      "Newcastle United"
    ],
    "clubIds": [
      "southampton",
      "blackburn-rovers",
      "newcastle-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/آلان_شيرر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alan_Shearer"
  },
  {
    "id": "dennis-bergkamp",
    "nameAr": "دينيس بيركامب",
    "nameEn": "Dennis Bergkamp",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "أرسنال (معتزل)",
    "clubEn": "Arsenal (retired)",
    "clubId": "arsenal",
    "position": {
      "ar": "مهاجم / صانع ألعاب",
      "en": "Forward / Playmaker"
    },
    "era": "1986-2006",
    "active": false,
    "bioAr": "مهاجم هولندي فني رفيع المستوى، يُعد أحد أفضل اللاعبين الأجانب في تاريخ الدوري الإنجليزي، اشتهر بلمساته الأولى الاستثنائية وأهدافه الفنية، وكان محور فريق أرسنال 'اللامهزوم' موسم 2003-2004.",
    "bioEn": "A highly technical Dutch forward regarded as one of the greatest foreign players in Premier League history, famed for his exceptional first touch and technical goals, and the focal point of Arsenal's 'Invincibles' team of 2003-04.",
    "achievementsAr": [
      "3 ألقاب دوري إنجليزي ممتاز مع أرسنال",
      "4 ألقاب كأس الاتحاد الإنجليزي مع أرسنال",
      "موسم اللامهزوم 2003-2004 مع أرسنال",
      "أفضل لاعب في هولندا عدة مرات"
    ],
    "achievementsEn": [
      "3 Premier League titles with Arsenal",
      "4 FA Cups with Arsenal",
      "Part of Arsenal's unbeaten 'Invincibles' season 2003-04",
      "Dutch Footballer of the Year multiple times"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "إنتر ميلان",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "Inter Milan",
      "Arsenal"
    ],
    "clubIds": [
      "ajax",
      "inter-milan",
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دينيس_بيركامب",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dennis_Bergkamp"
  },
  {
    "id": "marco-van-basten",
    "nameAr": "ماركو فان باستن",
    "nameEn": "Marco van Basten",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "ميلان (معتزل)",
    "clubEn": "Milan (retired)",
    "clubId": "ac-milan",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1981-1995",
    "active": false,
    "bioAr": "مهاجم هولندي يُعد من أفضل المهاجمين في تاريخ كرة القدم رغم اعتزاله المبكر بسبب إصابات الكاحل المزمنة، اشتهر بمهاراته الفنية وتوقيته المثالي في التسديد، وأبرز أهدافه 'هدف الفولي' الأسطوري في نهائي يورو 1988.",
    "bioEn": "A Dutch forward regarded as one of the greatest strikers in football history despite an early retirement due to chronic ankle injuries, known for his technical skill and perfect finishing, most famously his legendary volley in the Euro 1988 final.",
    "achievementsAr": [
      "بطولة أمم أوروبا 1988 مع هولندا",
      "3 جوائز الكرة الذهبية",
      "3 ألقاب دوري إيطالي مع ميلان",
      "دوري أبطال أوروبا مرتين مع ميلان"
    ],
    "achievementsEn": [
      "UEFA Euro 1988 title with Netherlands",
      "3 Ballon d'Or awards",
      "3 Serie A titles with Milan",
      "UEFA Champions League twice with Milan"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "Milan"
    ],
    "clubIds": [
      "ajax",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماركو_فان_باستن",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marco_van_Basten"
  },
  {
    "id": "johan-cruyff",
    "nameAr": "يوهان كرويف",
    "nameEn": "Johan Cruyff",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "فيينورد (معتزل)",
    "clubEn": "Feyenoord (retired)",
    "clubId": "feyenoord",
    "position": {
      "ar": "مهاجم / صانع ألعاب",
      "en": "Forward / Playmaker"
    },
    "era": "1964-1984",
    "active": false,
    "bioAr": "أسطورة هولندية يُعد صاحب الفكر الأساسي وراء فلسفة 'كرة القدم الشاملة'، أثّر في تطور اللعبة كلاعب ثم كمدرب أكثر من أي شخص تقريبًا. سُمّيت حركته الشهيرة 'دورة كرويف' نسبة إليه.",
    "bioEn": "A Dutch legend credited as the intellectual force behind 'Total Football', influencing the game's development as both a player and later as a manager more than almost anyone else. The famous 'Cruyff Turn' move is named after him.",
    "achievementsAr": [
      "3 جوائز الكرة الذهبية",
      "3 ألقاب دوري أبطال أوروبا مع أياكس",
      "الوصول لنهائي كأس العالم 1974 مع هولندا",
      "بنى فلسفة اللعب في برشلونة كمدرب لاحقًا"
    ],
    "achievementsEn": [
      "3 Ballon d'Or awards",
      "3 European Cup titles with Ajax",
      "Runner-up at the 1974 World Cup with Netherlands",
      "Later shaped Barcelona's playing philosophy as manager"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "برشلونة",
      "لوس أنجلوس أزتيكس",
      "واشنطن دبلوماتس",
      "فيينورد"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "Barcelona",
      "Los Angeles Aztecs",
      "Washington Diplomats",
      "Feyenoord"
    ],
    "clubIds": [
      "ajax",
      "barcelona",
      "feyenoord"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/يوهان_كرويف",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Johan_Cruyff"
  },
  {
    "id": "franz-beckenbauer",
    "nameAr": "فرانز بيكنباور",
    "nameEn": "Franz Beckenbauer",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "نيويورك كوزموس (معتزل)",
    "clubEn": "New York Cosmos (retired)",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender (Libero)"
    },
    "era": "1964-1983",
    "active": false,
    "bioAr": "أسطورة ألمانية ابتكر دور 'الليبرو' الهجومي الحديث، وهو أحد لاعبين اثنين فقط فازا بكأس العالم كلاعب وكمدرب. توفي عام 2024.",
    "bioEn": "A German legend who pioneered the modern attacking 'libero' (sweeper) role, and one of only two men to win the World Cup as both a player and a manager. He passed away in 2024.",
    "achievementsAr": [
      "بطولة كأس العالم 1974 مع ألمانيا الغربية كلاعب",
      "بطولة كأس العالم 1990 مع ألمانيا كمدرب",
      "جائزتا الكرة الذهبية",
      "3 ألقاب دوري أبطال أوروبا مع بايرن ميونخ"
    ],
    "achievementsEn": [
      "1974 World Cup title with West Germany as a player",
      "1990 World Cup title with Germany as a manager",
      "2 Ballon d'Or awards",
      "3 European Cup titles with Bayern Munich"
    ],
    "clubsHistoryAr": [
      "بايرن ميونخ",
      "نيويورك كوزموس",
      "هامبورغ",
      "نيويورك كوزموس"
    ],
    "clubsHistoryEn": [
      "Bayern Munich",
      "New York Cosmos",
      "Hamburger SV",
      "New York Cosmos"
    ],
    "clubIds": [
      "bayern-munich",
      "hamburger-sv"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فرانتس_بكنباور",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Franz_Beckenbauer"
  },
  {
    "id": "lothar-matthaus",
    "nameAr": "لوتار ماتيوس",
    "nameEn": "Lothar Matthäus",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بايرن ميونخ (معتزل)",
    "clubEn": "Bayern Munich (retired)",
    "clubId": "bayern-munich",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1979-2000",
    "active": false,
    "bioAr": "وسط ميدان ألماني يحمل الرقم القياسي لأكثر لاعب مشاركة في نهائيات كأس العالم، وقاد ألمانيا الغربية للفوز بكأس العالم 1990 كقائد للفريق، وفاز بالكرة الذهبية في نفس العام.",
    "bioEn": "A German midfielder who holds the record for most FIFA World Cup finals appearances, captained West Germany to the 1990 World Cup title, and won the Ballon d'Or the same year.",
    "achievementsAr": [
      "بطولة كأس العالم 1990 مع ألمانيا الغربية (كقائد)",
      "الكرة الذهبية 1990",
      "أفضل لاعب في العالم من الفيفا 1991",
      "7 ألقاب دوري ألماني مع بايرن ميونخ"
    ],
    "achievementsEn": [
      "1990 World Cup title with West Germany (as captain)",
      "1990 Ballon d'Or",
      "1991 FIFA World Player of the Year",
      "7 Bundesliga titles with Bayern Munich"
    ],
    "clubsHistoryAr": [
      "بوروسيا مونشنغلادباخ",
      "بايرن ميونخ",
      "إنتر ميلان",
      "بايرن ميونخ",
      "نيويورك ميتروستارز"
    ],
    "clubsHistoryEn": [
      "Borussia Mönchengladbach",
      "Bayern Munich",
      "Inter Milan",
      "Bayern Munich",
      "NY/NJ MetroStars"
    ],
    "clubIds": [
      "borussia-monchengladbach",
      "bayern-munich",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لوتار_ماتيوس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Lothar_Matthäus"
  },
  {
    "id": "michael-ballack",
    "nameAr": "ميشائيل بالاك",
    "nameEn": "Michael Ballack",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "باير ليفركوزن (معتزل)",
    "clubEn": "Bayer Leverkusen (retired)",
    "clubId": "bayer-leverkusen",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1995-2012",
    "active": false,
    "bioAr": "وسط ميدان ألماني قوي وشامل، كان قائد منتخب ألمانيا لسنوات طويلة وأحد أبرز لاعبي تشيلسي في عهد جوزيه مورينيو، عُرف بقدرته على الوصول للمنطقة والتهديف من مركز الوسط.",
    "bioEn": "A powerful and complete German midfielder who captained the German national team for many years and was one of Chelsea's key players under José Mourinho, known for his ability to arrive in the box and score from midfield.",
    "achievementsAr": [
      "الوصول لنهائي كأس العالم 2002 مع ألمانيا",
      "2 لقب دوري إنجليزي ممتاز مع تشيلسي",
      "لقب لاعب العام في ألمانيا 3 مرات",
      "4 ألقاب كأس اتحاد إنجليزي مع تشيلسي"
    ],
    "achievementsEn": [
      "Runner-up at the 2002 World Cup with Germany",
      "2 Premier League titles with Chelsea",
      "German Footballer of the Year 3 times",
      "4 FA Cups with Chelsea"
    ],
    "clubsHistoryAr": [
      "كايزرسلاوترن",
      "باير ليفركوزن",
      "بايرن ميونخ",
      "تشيلسي",
      "باير ليفركوزن"
    ],
    "clubsHistoryEn": [
      "Kaiserslautern",
      "Bayer Leverkusen",
      "Bayern Munich",
      "Chelsea",
      "Bayer Leverkusen"
    ],
    "clubIds": [
      "kaiserslautern",
      "bayer-leverkusen",
      "bayern-munich",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ميشائيل_بالاك",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Michael_Ballack"
  },
  {
    "id": "manuel-neuer",
    "nameAr": "مانويل نوير",
    "nameEn": "Manuel Neuer",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بايرن ميونخ",
    "clubEn": "Bayern Munich",
    "clubId": "bayern-munich",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2006-الآن",
    "active": true,
    "bioAr": "حارس مرمى ألماني يُعد من أعظم حراس المرمى في التاريخ ومبتكر مفهوم 'الحارس الليبرو' الحديث بقدرته على اللعب بالقدم خارج منطقة الجزاء. توّج بكأس العالم 2014 مع ألمانيا وحصل على القفاز الذهبي للبطولة.",
    "bioEn": "A German goalkeeper regarded as one of the greatest of all time and a pioneer of the modern 'sweeper-keeper' role thanks to his ball-playing ability outside the penalty area. He won the 2014 World Cup with Germany and the tournament's Golden Glove.",
    "achievementsAr": [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "القفاز الذهبي لكأس العالم 2014",
      "دوري أبطال أوروبا 2013 و2020 مع بايرن ميونخ",
      "عدة ألقاب دوري ألماني مع بايرن ميونخ"
    ],
    "achievementsEn": [
      "2014 FIFA World Cup title with Germany",
      "2014 World Cup Golden Glove",
      "UEFA Champions League 2013 and 2020 with Bayern Munich",
      "Multiple Bundesliga titles with Bayern Munich"
    ],
    "clubsHistoryAr": [
      "شالكه 04",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Schalke 04",
      "Bayern Munich"
    ],
    "clubIds": [
      "schalke-04",
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مانويل_نوير",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Manuel_Neuer"
  },
  {
    "id": "sergio-ramos",
    "nameAr": "سيرخيو راموس",
    "nameEn": "Sergio Ramos",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "لاعب حر (آخر أنديته مونتيري)",
    "clubEn": "Free agent (most recently Monterrey)",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "2003-الآن",
    "active": true,
    "bioAr": "مدافع إسباني قوي وقيادي، قضى معظم مسيرته مع ريال مدريد وكان قائده لسنوات طويلة، اشتهر بأهدافه الحاسمة في اللحظات الأخيرة، وأبرزها هدف التعادل في نهائي دوري الأبطال 2014 أمام أتلتيكو مدريد.",
    "bioEn": "A powerful and inspirational Spanish defender who spent most of his career at Real Madrid and captained the side for many years, known for his decisive last-minute goals, most notably the equalizer in the 2014 Champions League final against Atlético Madrid.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "أكثر لاعب مشاركة في تاريخ منتخب إسبانيا"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "5 UEFA Champions League titles with Real Madrid",
      "Spain's all-time most-capped player"
    ],
    "clubsHistoryAr": [
      "إشبيلية",
      "ريال مدريد",
      "باريس سان جيرمان",
      "إشبيلية",
      "مونتيري"
    ],
    "clubsHistoryEn": [
      "Sevilla",
      "Real Madrid",
      "Paris Saint-Germain",
      "Sevilla",
      "Monterrey"
    ],
    "clubIds": [
      "sevilla",
      "real-madrid",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سيرخيو_راموس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sergio_Ramos"
  },
  {
    "id": "fernando-torres",
    "nameAr": "فرناندو توريس",
    "nameEn": "Fernando Torres",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ساغان توسو (اليابان) - معتزل",
    "clubEn": "Sagan Tosu (Japan) (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2001-2019",
    "active": false,
    "bioAr": "مهاجم إسباني سريع وحاد التهديف، كان أحد أفضل المهاجمين في العالم خلال فترته مع ليفربول قبل انتقاله بصفقة قياسية إلى تشيلسي، وكان جزءًا من الجيل الذهبي لمنتخب إسبانيا.",
    "bioEn": "A fast and clinical Spanish forward who was among the world's best strikers during his Liverpool spell before a then-record transfer to Chelsea, and was part of Spain's golden generation.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "هداف بطولة يورو 2012",
      "دوري أبطال أوروبا 2012 مع تشيلسي"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "Euro 2012 top scorer",
      "2012 UEFA Champions League with Chelsea"
    ],
    "clubsHistoryAr": [
      "أتلتيكو مدريد",
      "ليفربول",
      "تشيلسي",
      "ميلان (إعارة)",
      "أتلتيكو مدريد",
      "ساغان توسو"
    ],
    "clubsHistoryEn": [
      "Atlético Madrid",
      "Liverpool",
      "Chelsea",
      "Milan (loan)",
      "Atlético Madrid",
      "Sagan Tosu"
    ],
    "clubIds": [
      "atletico-madrid",
      "liverpool",
      "chelsea",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فرناندو_توريس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Fernando_Torres"
  },
  {
    "id": "xabi-alonso",
    "nameAr": "تشابي ألونسو",
    "nameEn": "Xabi Alonso",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ريال مدريد (معتزل كلاعب)",
    "clubEn": "Real Madrid (retired as player)",
    "clubId": "real-madrid",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1999-2017",
    "active": false,
    "bioAr": "وسط ميدان إسباني عُرف بتمريراته الطويلة الدقيقة وقراءته الذكية للعب، فاز بدوري أبطال أوروبا مع ناديين مختلفين (ليفربول وريال مدريد)، وكان جزءًا أساسيًا من الجيل الذهبي لمنتخب إسبانيا.",
    "bioEn": "A Spanish midfielder known for his precise long passing and intelligent reading of the game, he won the UEFA Champions League with two different clubs (Liverpool and Real Madrid) and was a key part of Spain's golden generation.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "دوري أبطال أوروبا 2005 مع ليفربول و2014 مع ريال مدريد",
      "لقب الدوري الإسباني مرتين مع ريال مدريد"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "UEFA Champions League 2005 with Liverpool and 2014 with Real Madrid",
      "La Liga title twice with Real Madrid"
    ],
    "clubsHistoryAr": [
      "ريال سوسييداد",
      "ليفربول",
      "ريال مدريد",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Real Sociedad",
      "Liverpool",
      "Real Madrid",
      "Bayern Munich"
    ],
    "clubIds": [
      "real-sociedad",
      "liverpool",
      "real-madrid",
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/تشابي_ألونسو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Xabi_Alonso"
  },
  {
    "id": "raul-gonzalez",
    "nameAr": "راؤول غونزاليس",
    "nameEn": "Raúl González",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "الكوكاز (معتزل)",
    "clubEn": "Al Sadd (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1994-2015",
    "active": false,
    "bioAr": "مهاجم إسباني وأسطورة ريال مدريد، كان الهداف التاريخي للنادي والدوري الإسباني لسنوات طويلة قبل تجاوز الأرقام لاحقًا، ويُعد أحد أعظم لاعبي ريال مدريد في التاريخ.",
    "bioEn": "A Spanish forward and Real Madrid legend who was the club's and La Liga's all-time top scorer for many years before later being surpassed, and is regarded as one of the greatest Real Madrid players in history.",
    "achievementsAr": [
      "3 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "6 ألقاب دوري إسباني مع ريال مدريد",
      "الهداف التاريخي لدوري أبطال أوروبا لفترة طويلة",
      "قائد ريال مدريد لسنوات طويلة"
    ],
    "achievementsEn": [
      "3 UEFA Champions League titles with Real Madrid",
      "6 La Liga titles with Real Madrid",
      "UEFA Champions League all-time top scorer for many years",
      "Real Madrid captain for many years"
    ],
    "clubsHistoryAr": [
      "ريال مدريد",
      "شالكه 04",
      "الكوكاز"
    ],
    "clubsHistoryEn": [
      "Real Madrid",
      "Schalke 04",
      "Al Sadd"
    ],
    "clubIds": [
      "real-madrid",
      "schalke-04"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/راؤول_غونزاليس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Raúl_González"
  },
  {
    "id": "karim-benzema",
    "nameAr": "كريم بنزيما",
    "nameEn": "Karim Benzema",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "الهلال (السعودية)",
    "clubEn": "Al-Hilal (Saudi Arabia)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2004-الآن",
    "active": true,
    "bioAr": "مهاجم فرنسي يُعد أحد أفضل المهاجمين في جيله، قضى أكثر من عقد ونصف مع ريال مدريد وحقق معه إنجازات ضخمة، وتُوّج بالكرة الذهبية عام 2022 بعد موسم استثنائي. انتقل إلى الاتحاد السعودي عام 2023 ثم إلى الهلال في فبراير 2026.",
    "bioEn": "A French forward regarded as one of the finest strikers of his generation, he spent over a decade and a half at Real Madrid achieving major honours, and won the Ballon d'Or in 2022 after an exceptional season. He joined Saudi club Al-Ittihad in 2023 and moved to Al-Hilal in February 2026.",
    "achievementsAr": [
      "الكرة الذهبية 2022",
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "هداف دوري أبطال أوروبا في موسم واحد",
      "عدة ألقاب دوري إسباني مع ريال مدريد"
    ],
    "achievementsEn": [
      "2022 Ballon d'Or",
      "5 UEFA Champions League titles with Real Madrid",
      "UEFA Champions League top scorer in a single season",
      "Multiple La Liga titles with Real Madrid"
    ],
    "clubsHistoryAr": [
      "أولمبيك ليون",
      "ريال مدريد",
      "الاتحاد",
      "الهلال"
    ],
    "clubsHistoryEn": [
      "Olympique Lyonnais",
      "Real Madrid",
      "Al-Ittihad",
      "Al-Hilal"
    ],
    "clubIds": [
      "lyon",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كريم_بنزيما",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Karim_Benzema"
  },
  {
    "id": "toni-kroos",
    "nameAr": "توني كروس",
    "nameEn": "Toni Kroos",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "ريال مدريد (معتزل)",
    "clubEn": "Real Madrid (retired)",
    "clubId": "real-madrid",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2007-2024",
    "active": false,
    "bioAr": "وسط ميدان ألماني عُرف بدقته العالية في التمرير وهدوئه التام تحت الضغط، فاز بكأس العالم 2014 مع ألمانيا، وكان محور خط وسط ريال مدريد خلال سنوات هيمنته على دوري أبطال أوروبا.",
    "bioEn": "A German midfielder known for his exceptional passing accuracy and calmness under pressure, he won the 2014 World Cup with Germany and was the midfield fulcrum of Real Madrid during its Champions League-dominant years.",
    "achievementsAr": [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "6 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "بطولة أمم أوروبا 2024 مع ألمانيا",
      "عدة ألقاب دوري إسباني وألماني"
    ],
    "achievementsEn": [
      "2014 FIFA World Cup title with Germany",
      "6 UEFA Champions League titles with Real Madrid",
      "UEFA Euro 2024 title with Germany",
      "Multiple La Liga and Bundesliga titles"
    ],
    "clubsHistoryAr": [
      "بايرن ميونخ",
      "باير ليفركوزن (إعارة)",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Bayern Munich",
      "Bayer Leverkusen (loan)",
      "Real Madrid"
    ],
    "clubIds": [
      "bayern-munich",
      "bayer-leverkusen",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/توني_كروس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Toni_Kroos"
  },
  {
    "id": "sergio-aguero",
    "nameAr": "سيرخيو أغويرو",
    "nameEn": "Sergio Agüero",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "برشلونة (معتزل)",
    "clubEn": "Barcelona (retired)",
    "clubId": "barcelona",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2003-2021",
    "active": false,
    "bioAr": "مهاجم أرجنتيني وهداف تاريخي لنادي مانشستر سيتي، سجل أحد أشهر الأهداف في تاريخ الدوري الإنجليزي بهدف اللحظات الأخيرة الذي منح السيتي لقب 2012 بطريقة درامية.",
    "bioEn": "An Argentine forward and Manchester City's all-time top scorer, he scored one of the most famous goals in Premier League history with a last-minute strike that dramatically won City the 2012 title.",
    "achievementsAr": [
      "الهداف التاريخي لنادي مانشستر سيتي",
      "5 ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "بطولة كوبا أمريكا 2021 مع الأرجنتين",
      "هداف الدوري الإنجليزي الممتاز عدة مرات"
    ],
    "achievementsEn": [
      "Manchester City's all-time top scorer",
      "5 Premier League titles with Manchester City",
      "2021 Copa América title with Argentina",
      "Premier League top scorer multiple times"
    ],
    "clubsHistoryAr": [
      "إندبندنتي",
      "أتلتيكو مدريد",
      "مانشستر سيتي",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Independiente",
      "Atlético Madrid",
      "Manchester City",
      "Barcelona"
    ],
    "clubIds": [
      "independiente",
      "atletico-madrid",
      "manchester-city",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سيرخيو_أغويرو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sergio_Agüero"
  },
  {
    "id": "roberto-baggio",
    "nameAr": "روبرتو باجيو",
    "nameEn": "Roberto Baggio",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "برشيا (معتزل)",
    "clubEn": "Brescia (retired)",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب / مهاجم",
      "en": "Playmaker / Forward"
    },
    "era": "1982-2004",
    "active": false,
    "bioAr": "لاعب إيطالي يُلقب بـ'الذيل المقدس'، من أكثر اللاعبين فنية وشعبية في تاريخ الكرة الإيطالية، فاز بالكرة الذهبية عام 1993، وارتبط اسمه بضربة الجزاء الشهيرة التي أضاعها في نهائي كأس العالم 1994.",
    "bioEn": "An Italian player nicknamed the 'Divine Ponytail', one of the most technically gifted and popular players in Italian football history, who won the 1993 Ballon d'Or and is remembered for his missed penalty in the 1994 World Cup final.",
    "achievementsAr": [
      "الكرة الذهبية 1993",
      "أفضل لاعب في العالم من الفيفا 1993",
      "الوصول لنهائي كأس العالم 1994 مع إيطاليا",
      "كأس الاتحاد الأوروبي مع يوفنتوس"
    ],
    "achievementsEn": [
      "1993 Ballon d'Or",
      "1993 FIFA World Player of the Year",
      "Runner-up at the 1994 World Cup with Italy",
      "UEFA Cup with Juventus"
    ],
    "clubsHistoryAr": [
      "فيتشنزا",
      "فيورنتينا",
      "يوفنتوس",
      "ميلان",
      "بولونيا",
      "إنتر ميلان",
      "برشيا"
    ],
    "clubsHistoryEn": [
      "Vicenza",
      "Fiorentina",
      "Juventus",
      "Milan",
      "Bologna",
      "Inter Milan",
      "Brescia"
    ],
    "clubIds": [
      "fiorentina",
      "juventus",
      "ac-milan",
      "bologna",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روبرتو_باجيو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Roberto_Baggio"
  },
  {
    "id": "francesco-totti",
    "nameAr": "فرانشيسكو توتي",
    "nameEn": "Francesco Totti",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "روما (معتزل)",
    "clubEn": "Roma (retired)",
    "clubId": "roma",
    "position": {
      "ar": "صانع ألعاب / مهاجم",
      "en": "Playmaker / Forward"
    },
    "era": "1992-2017",
    "active": false,
    "bioAr": "أيقونة نادي روما الإيطالي الذي قضى مسيرته بأكملها مع ناديه المحلي، ويُعد الهداف التاريخي للنادي وأحد أعظم لاعبي الدوري الإيطالي، وفاز بكأس العالم 2006 مع إيطاليا.",
    "bioEn": "An icon of AS Roma who spent his entire career at his hometown club, he is Roma's all-time top scorer and one of the greatest players in Serie A history, and won the 2006 World Cup with Italy.",
    "achievementsAr": [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "لقب الدوري الإيطالي مع روما 2000-2001",
      "الهداف التاريخي لنادي روما",
      "هداف الدوري الإيطالي مرة واحدة"
    ],
    "achievementsEn": [
      "2006 FIFA World Cup title with Italy",
      "Serie A title with Roma 2000-01",
      "Roma's all-time top goalscorer",
      "Serie A top scorer once"
    ],
    "clubsHistoryAr": [
      "روما"
    ],
    "clubsHistoryEn": [
      "Roma"
    ],
    "clubIds": [
      "roma"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فرانشيسكو_توتي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Francesco_Totti"
  },
  {
    "id": "george-best",
    "nameAr": "جورج بيست",
    "nameEn": "George Best",
    "nationalityAr": "إيرلندي شمالي",
    "nationalityEn": "Northern Irish",
    "clubAr": "بورنموث (معتزل)",
    "clubEn": "Bournemouth (retired)",
    "clubId": "bournemouth",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "1963-1984",
    "active": false,
    "bioAr": "جناح إيرلندي شمالي يُعد أحد أفضل اللاعبين في تاريخ الدوري الإنجليزي، اشتهر بمراوغاته الاستثنائية وحياته الشخصية المثيرة للجدل، وكان نجم فريق مانشستر يونايتد الفائز بدوري أبطال أوروبا 1968. توفي عام 2005.",
    "bioEn": "A Northern Irish winger regarded as one of the greatest players in English football history, known for his extraordinary dribbling ability and controversial personal life, and the star of Manchester United's 1968 European Cup-winning team. He passed away in 2005.",
    "achievementsAr": [
      "دوري أبطال أوروبا 1968 مع مانشستر يونايتد",
      "الكرة الذهبية 1968",
      "لقبا دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "يُعد من أفضل 10 لاعبين في تاريخ الدوري الإنجليزي بحسب استطلاعات عديدة"
    ],
    "achievementsEn": [
      "1968 European Cup with Manchester United",
      "1968 Ballon d'Or",
      "2 English league titles with Manchester United",
      "Widely ranked among the top 10 English football players in history"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد",
      "لوس أنجلوس أزتيكس",
      "فولهام",
      "بورنموث"
    ],
    "clubsHistoryEn": [
      "Manchester United",
      "Los Angeles Aztecs",
      "Fulham",
      "Bournemouth"
    ],
    "clubIds": [
      "manchester-united",
      "fulham",
      "bournemouth"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جورج_بيست",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/George_Best"
  },
  {
    "id": "xavi-hernandez",
    "nameAr": "تشافي هيرنانديز",
    "nameEn": "Xavi Hernández",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة (معتزل)",
    "clubEn": "Barcelona (retired)",
    "clubId": "barcelona",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1998-2019",
    "active": false,
    "bioAr": "وسط ميدان إسباني يُعد عقل برشلونة في عصر التيكي-تاكا الذهبي، اشتهر بتمريراته القصيرة الدقيقة وتحكمه في إيقاع اللعب. قضى مسيرته بأكملها تقريبًا مع برشلونة قبل أن يختتمها في قطر، وعاد لاحقًا مدربًا للنادي.",
    "bioEn": "A Spanish midfielder regarded as the brain of Barcelona's golden tiki-taka era, known for his precise short passing and control of the tempo. He spent almost his entire career at Barcelona before finishing it in Qatar, and later returned as the club's head coach.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "4 ألقاب دوري أبطال أوروبا مع برشلونة",
      "8 ألقاب دوري إسباني مع برشلونة"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "4 UEFA Champions League titles with Barcelona",
      "8 La Liga titles with Barcelona"
    ],
    "clubsHistoryAr": [
      "برشلونة",
      "السد"
    ],
    "clubsHistoryEn": [
      "Barcelona",
      "Al Sadd"
    ],
    "clubIds": [
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/تشافي_هيرنانديز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Xavi"
  },
  {
    "id": "andres-iniesta",
    "nameAr": "أندريس إنييستا",
    "nameEn": "Andrés Iniesta",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "الإمارات (معتزل)",
    "clubEn": "Emirates Club (retired)",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2002-2023",
    "active": false,
    "bioAr": "وسط ميدان إسباني يُعد أحد أفضل صانعي الألعاب في جيله، سجل هدف الفوز في الوقت الإضافي بنهائي كأس العالم 2010 أمام هولندا ليمنح إسبانيا أعظم إنجاز في تاريخها، وكان جزءًا أساسيًا من عصر التيكي-تاكا في برشلونة.",
    "bioEn": "A Spanish midfielder regarded as one of the finest playmakers of his generation, he scored the extra-time winner in the 2010 World Cup final against the Netherlands, giving Spain the greatest achievement in its history, and was a key part of Barcelona's tiki-taka era.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا (هدف الفوز في النهائي)",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "4 ألقاب دوري أبطال أوروبا مع برشلونة",
      "9 ألقاب دوري إسباني مع برشلونة"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain (scored the final's winning goal)",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "4 UEFA Champions League titles with Barcelona",
      "9 La Liga titles with Barcelona"
    ],
    "clubsHistoryAr": [
      "برشلونة",
      "فيسل كوبي",
      "الإمارات"
    ],
    "clubsHistoryEn": [
      "Barcelona",
      "Vissel Kobe",
      "Emirates Club"
    ],
    "clubIds": [
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أندريس_إنييستا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Andrés_Iniesta"
  },
  {
    "id": "carles-puyol",
    "nameAr": "كارليس بويول",
    "nameEn": "Carles Puyol",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة (معتزل)",
    "clubEn": "Barcelona (retired)",
    "clubId": "barcelona",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1999-2014",
    "active": false,
    "bioAr": "مدافع إسباني قضى مسيرته بأكملها مع برشلونة وكان قائده لسنوات طويلة خلال أنجح فترة في تاريخ النادي، اشتهر بقوته البدنية وروحه القتالية العالية رغم بنيته الجسدية المتوسطة.",
    "bioEn": "A Spanish defender who spent his entire career at Barcelona and captained the club for many years during its most successful era, known for his physical strength and combative spirit despite his relatively modest build.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولة أمم أوروبا 2008 مع إسبانيا",
      "3 ألقاب دوري أبطال أوروبا مع برشلونة",
      "6 ألقاب دوري إسباني مع برشلونة"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 title with Spain",
      "3 UEFA Champions League titles with Barcelona",
      "6 La Liga titles with Barcelona"
    ],
    "clubsHistoryAr": [
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Barcelona"
    ],
    "clubIds": [
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كارليس_بويول",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Carles_Puyol"
  },
  {
    "id": "gerard-pique",
    "nameAr": "جيرارد بيكيه",
    "nameEn": "Gerard Piqué",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة (معتزل)",
    "clubEn": "Barcelona (retired)",
    "clubId": "barcelona",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "2004-2022",
    "active": false,
    "bioAr": "مدافع إسباني تدرج في أكاديمية مانشستر يونايتد قبل أن يعود لناديه الأم برشلونة ليصبح ركيزة دفاعية أساسية لسنوات طويلة، وسجل هدفًا في نهائي كأس العالم 2010 مع إسبانيا.",
    "bioEn": "A Spanish defender who came through Manchester United's academy before returning to his boyhood club Barcelona to become a key defensive pillar for many years, and scored in the 2010 World Cup final with Spain.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولة أمم أوروبا 2012 مع إسبانيا",
      "3 ألقاب دوري أبطال أوروبا مع برشلونة",
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2012 title with Spain",
      "3 UEFA Champions League titles with Barcelona",
      "2008 UEFA Champions League with Manchester United"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد",
      "ثاراغوثا (إعارة)",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Manchester United",
      "Zaragoza (loan)",
      "Barcelona"
    ],
    "clubIds": [
      "manchester-united",
      "real-zaragoza",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جيرارد_بيكيه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gerard_Piqué"
  },
  {
    "id": "luis-suarez",
    "nameAr": "لويس سواريز",
    "nameEn": "Luis Suárez",
    "nationalityAr": "أوروغوياني",
    "nationalityEn": "Uruguayan",
    "clubAr": "إنتر ميامي",
    "clubEn": "Inter Miami",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "مهاجم أوروغواياني غزير التهديف، شكّل مع ميسي ونيمار ثلاثيًا هجوميًا أسطوريًا في برشلونة سجّل معه مئات الأهداف، وهو معروف أيضًا بشخصيته النارية داخل الملعب وبعض الحوادث المثيرة للجدل في مسيرته.",
    "bioEn": "A prolific Uruguayan forward who formed a legendary attacking trio with Messi and Neymar at Barcelona, scoring hundreds of goals together, and also known for his fiery on-field personality and several controversial incidents in his career.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2015 مع برشلونة",
      "الحذاء الذهبي الأوروبي مرتين",
      "4 ألقاب دوري إسباني مع برشلونة",
      "بطولة كوبا أمريكا 2011 مع الأوروغواي"
    ],
    "achievementsEn": [
      "2015 UEFA Champions League with Barcelona",
      "European Golden Shoe twice",
      "4 La Liga titles with Barcelona",
      "2011 Copa América title with Uruguay"
    ],
    "clubsHistoryAr": [
      "ناسيونال مونتيفيديو",
      "خرونينغن",
      "أياكس",
      "ليفربول",
      "برشلونة",
      "أتلتيكو مدريد",
      "غريميو",
      "إنتر ميامي"
    ],
    "clubsHistoryEn": [
      "Nacional",
      "Groningen",
      "Ajax",
      "Liverpool",
      "Barcelona",
      "Atlético Madrid",
      "Grêmio",
      "Inter Miami"
    ],
    "clubIds": [
      "nacional",
      "ajax",
      "liverpool",
      "barcelona",
      "atletico-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لويس_سواريز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Luis_Suárez"
  },
  {
    "id": "rivaldo",
    "nameAr": "ريفالدو",
    "nameEn": "Rivaldo",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "موغي ميريم (معتزل)",
    "clubEn": "Mogi Mirim (retired)",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب / مهاجم",
      "en": "Playmaker / Forward"
    },
    "era": "1989-2015",
    "active": false,
    "bioAr": "لاعب برازيلي فني استثنائي اشتهر بتسديداته القوية بقدمه اليسرى ومهاراته الفردية، فاز بالكرة الذهبية عام 1999 وكان محورًا أساسيًا في تتويج برشلونة، ثم توّج بكأس العالم 2002 مع البرازيل.",
    "bioEn": "An exceptionally talented Brazilian player known for his powerful left-footed strikes and individual skill, he won the 1999 Ballon d'Or and was a key figure at Barcelona, before winning the 2002 World Cup with Brazil.",
    "achievementsAr": [
      "الكرة الذهبية 1999",
      "بطولة كأس العالم 2002 مع البرازيل",
      "أفضل لاعب في العالم من الفيفا 1999",
      "لقب الدوري الإسباني مع برشلونة"
    ],
    "achievementsEn": [
      "1999 Ballon d'Or",
      "2002 FIFA World Cup title with Brazil",
      "1999 FIFA World Player of the Year",
      "La Liga title with Barcelona"
    ],
    "clubsHistoryAr": [
      "سانتا كروز",
      "موغي ميريم",
      "كورينثيانز",
      "بالميراس",
      "ديبورتيفو لاكورنيا",
      "برشلونة",
      "ميلان",
      "كروزيرو",
      "أولمبياكوس",
      "الأهلي (الإمارات)"
    ],
    "clubsHistoryEn": [
      "Santa Cruz",
      "Mogi Mirim",
      "Corinthians",
      "Palmeiras",
      "Deportivo La Coruña",
      "Barcelona",
      "Milan",
      "Cruzeiro",
      "Olympiacos",
      "Al Ahli (UAE)"
    ],
    "clubIds": [
      "corinthians",
      "palmeiras",
      "deportivo-la-coruna",
      "barcelona",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ريفالدو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rivaldo"
  },
  {
    "id": "ronald-koeman",
    "nameAr": "رونالد كومان",
    "nameEn": "Ronald Koeman",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "فيينورد (معتزل كلاعب)",
    "clubEn": "Feyenoord (retired as player)",
    "clubId": "feyenoord",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1980-1997",
    "active": false,
    "bioAr": "مدافع هولندي عُرف بتسديداته القوية من الكرات الثابتة، وسجّل هدف الفوز في نهائي كأس أوروبا 1992 لبرشلونة أمام سامبدوريا في أول لقب دوري أبطال في تاريخ النادي. عمل لاحقًا مدربًا لبرشلونة نفسه.",
    "bioEn": "A Dutch defender known for his powerful shooting from set pieces, he scored the winning goal in the 1992 European Cup final for Barcelona against Sampdoria, the club's first ever European Cup title. He later became Barcelona's own head coach.",
    "achievementsAr": [
      "كأس أوروبا 1992 مع برشلونة (هدف الفوز في النهائي)",
      "بطولة أمم أوروبا 1988 مع هولندا",
      "دوري أبطال أوروبا 1988 مع بي إس في آيندهوفن",
      "4 ألقاب دوري إسباني مع برشلونة"
    ],
    "achievementsEn": [
      "1992 European Cup with Barcelona (scored the final's winning goal)",
      "UEFA Euro 1988 title with Netherlands",
      "1988 European Cup with PSV Eindhoven",
      "4 La Liga titles with Barcelona"
    ],
    "clubsHistoryAr": [
      "غرونينغن",
      "أياكس",
      "بي إس في آيندهوفن",
      "برشلونة",
      "فيينورد"
    ],
    "clubsHistoryEn": [
      "Groningen",
      "Ajax",
      "PSV Eindhoven",
      "Barcelona",
      "Feyenoord"
    ],
    "clubIds": [
      "ajax",
      "psv-eindhoven",
      "barcelona",
      "feyenoord"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رونالد_كومان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ronald_Koeman"
  },
  {
    "id": "sergio-busquets",
    "nameAr": "سيرجيو بوسكيتس",
    "nameEn": "Sergio Busquets",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "إنتر ميامي (معتزل)",
    "clubEn": "Inter Miami (retired)",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان دفاعي",
      "en": "Defensive Midfielder"
    },
    "era": "2008-2025",
    "active": false,
    "bioAr": "وسط ميدان دفاعي إسباني يُعد أحد أفضل لاعبي الارتكاز في تاريخ كرة القدم الحديثة، اشتهر بذكائه التكتيكي وقدرته على قراءة اللعب وحماية خط الدفاع رغم قلة أخطائه رغم عدم امتلاكه سرعة استثنائية. اعتزل اللعب بعد التتويج بكأس الدوري الأمريكي (MLS) مع إنتر ميامي في نهاية 2025.",
    "bioEn": "A Spanish defensive midfielder regarded as one of the finest holding midfielders in modern football history, known for his tactical intelligence and ability to read the game and shield the defense despite lacking exceptional pace. He retired after winning the MLS Cup with Inter Miami at the end of 2025.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولة أمم أوروبا 2012 مع إسبانيا",
      "3 ألقاب دوري أبطال أوروبا مع برشلونة",
      "8 ألقاب دوري إسباني مع برشلونة"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2012 title with Spain",
      "3 UEFA Champions League titles with Barcelona",
      "8 La Liga titles with Barcelona"
    ],
    "clubsHistoryAr": [
      "برشلونة",
      "إنتر ميامي"
    ],
    "clubsHistoryEn": [
      "Barcelona",
      "Inter Miami"
    ],
    "clubIds": [
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سيرجيو_بوسكيتس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sergio_Busquets"
  },
  {
    "id": "alfredo-di-stefano",
    "nameAr": "ألفريدو دي ستيفانو",
    "nameEn": "Alfredo Di Stéfano",
    "nationalityAr": "أرجنتيني إسباني",
    "nationalityEn": "Argentine-Spanish",
    "clubAr": "إسبانيول (معتزل)",
    "clubEn": "Espanyol (retired)",
    "clubId": "espanyol",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1944-1966",
    "active": false,
    "bioAr": "يُعتبره كثيرون أفضل لاعب في تاريخ ريال مدريد وأحد أعظم لاعبي كرة القدم على الإطلاق، قاد الفريق الملكي للفوز بأول خمس نسخ متتالية من كأس أوروبا (1956-1960)، وسجل في كل النهائيات الخمسة. توفي عام 2014.",
    "bioEn": "Widely regarded by many as the greatest player in Real Madrid's history and one of the greatest footballers of all time, he led the club to the first five consecutive European Cup titles (1956-1960), scoring in all five finals. He passed away in 2014.",
    "achievementsAr": [
      "5 ألقاب كأس أوروبا متتالية مع ريال مدريد",
      "جائزتا الكرة الذهبية (1957، 1959)",
      "8 ألقاب دوري إسباني مع ريال مدريد",
      "هداف الدوري الإسباني 5 مرات"
    ],
    "achievementsEn": [
      "5 consecutive European Cup titles with Real Madrid",
      "2 Ballon d'Or awards (1957, 1959)",
      "8 La Liga titles with Real Madrid",
      "La Liga top scorer 5 times"
    ],
    "clubsHistoryAr": [
      "ريفر بليت",
      "مليوناريوس",
      "ريال مدريد",
      "إسبانيول"
    ],
    "clubsHistoryEn": [
      "River Plate",
      "Millonarios",
      "Real Madrid",
      "Espanyol"
    ],
    "clubIds": [
      "river-plate",
      "real-madrid",
      "espanyol"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ألفريدو_دي_ستيفانو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alfredo_Di_Stéfano"
  },
  {
    "id": "ferenc-puskas",
    "nameAr": "فيرينك بوشكاش",
    "nameEn": "Ferenc Puskás",
    "nationalityAr": "مجري إسباني",
    "nationalityEn": "Hungarian-Spanish",
    "clubAr": "ريال مدريد (معتزل)",
    "clubEn": "Real Madrid (retired)",
    "clubId": "real-madrid",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1943-1966",
    "active": false,
    "bioAr": "مهاجم مجري يُعد أحد أعظم الهدافين في تاريخ كرة القدم، كان نجم منتخب المجر الأسطوري في الخمسينيات قبل أن ينتقل إلى ريال مدريد ويصبح جزءًا من العصر الذهبي للنادي، سجل هاتريك في نهائي كأس أوروبا 1960. توفي عام 2006، وسُمّيت جائزة أجمل هدف في العالم باسمه (جائزة بوشكاش).",
    "bioEn": "A Hungarian forward regarded as one of the greatest goalscorers in football history, he was the star of Hungary's legendary 1950s national team before moving to Real Madrid and becoming part of the club's golden era, scoring a hat-trick in the 1960 European Cup final. He passed away in 2006, and FIFA's award for the world's best goal is named after him (the Puskás Award).",
    "achievementsAr": [
      "3 ألقاب كأس أوروبا مع ريال مدريد",
      "5 ألقاب دوري إسباني مع ريال مدريد",
      "الوصول لنهائي كأس العالم 1954 مع المجر",
      "سُمّيت جائزة أجمل هدف في العالم باسمه"
    ],
    "achievementsEn": [
      "3 European Cup titles with Real Madrid",
      "5 La Liga titles with Real Madrid",
      "Runner-up at the 1954 World Cup with Hungary",
      "FIFA's best-goal award is named after him"
    ],
    "clubsHistoryAr": [
      "كيسبيست",
      "هونفيد",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Kispest",
      "Budapest Honvéd",
      "Real Madrid"
    ],
    "clubIds": [
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فيرينس_بوشكاش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ferenc_Puskás"
  },
  {
    "id": "iker-casillas",
    "nameAr": "إيكر كاسياس",
    "nameEn": "Iker Casillas",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "بورتو (معتزل)",
    "clubEn": "Porto (retired)",
    "clubId": "porto",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1999-2020",
    "active": false,
    "bioAr": "حارس مرمى إسباني يُعد من أعظم حراس المرمى في التاريخ، قاد إسبانيا لأول لقب كأس عالم في تاريخها عام 2010، وكان قائد ريال مدريد لسنوات طويلة خلال إحدى أنجح فترات النادي.",
    "bioEn": "A Spanish goalkeeper regarded as one of the greatest of all time, he captained Spain to their first-ever World Cup title in 2010, and captained Real Madrid for many years during one of the club's most successful eras.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا (كقائد)",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "3 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "القفاز الذهبي لكأس العالم 2010"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain (as captain)",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "3 UEFA Champions League titles with Real Madrid",
      "2010 World Cup Golden Glove"
    ],
    "clubsHistoryAr": [
      "ريال مدريد",
      "بورتو"
    ],
    "clubsHistoryEn": [
      "Real Madrid",
      "Porto"
    ],
    "clubIds": [
      "real-madrid",
      "porto"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إيكر_كاسياس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Iker_Casillas"
  },
  {
    "id": "roberto-carlos",
    "nameAr": "روبرتو كارلوس",
    "nameEn": "Roberto Carlos",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender (Left-back)"
    },
    "era": "1991-2015",
    "active": false,
    "bioAr": "ظهير أيسر برازيلي يُعد أحد أفضل لاعبي مركزه في تاريخ كرة القدم، اشتهر بسرعته الفائقة وقوة تسديداته الصاروخية من الكرات الثابتة، وأبرزها هدفه الشهير المنحني ضد فرنسا عام 1997.",
    "bioEn": "A Brazilian left-back regarded as one of the greatest players in his position in football history, known for his blistering pace and rocket-powered free-kick strikes, most famously his curling wonder-goal against France in 1997.",
    "achievementsAr": [
      "بطولة كأس العالم 2002 مع البرازيل",
      "3 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "4 ألقاب دوري إسباني مع ريال مدريد",
      "من أفضل الظهيرين الأيسرين في تاريخ اللعبة بحسب استطلاعات عديدة"
    ],
    "achievementsEn": [
      "2002 FIFA World Cup title with Brazil",
      "3 UEFA Champions League titles with Real Madrid",
      "4 La Liga titles with Real Madrid",
      "Widely ranked among the greatest left-backs in football history"
    ],
    "clubsHistoryAr": [
      "يونيون ساو جواو",
      "بالميراس",
      "إنترناسيونالي",
      "ريال مدريد",
      "فنربخشة",
      "قرنطينة (معتزل)"
    ],
    "clubsHistoryEn": [
      "União São João",
      "Palmeiras",
      "Inter Milan",
      "Real Madrid",
      "Fenerbahçe",
      "Retired"
    ],
    "clubIds": [
      "palmeiras",
      "inter-milan",
      "real-madrid",
      "fenerbahce"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روبرتو_كارلوس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Roberto_Carlos_(footballer,_born_1973)"
  },
  {
    "id": "gareth-bale",
    "nameAr": "غاريث بيل",
    "nameEn": "Gareth Bale",
    "nationalityAr": "ويلزي",
    "nationalityEn": "Welsh",
    "clubAr": "لوس أنجلوس إف سي (معتزل)",
    "clubEn": "Los Angeles FC (retired)",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2006-2023",
    "active": false,
    "bioAr": "جناح ويلزي سريع وقوي التسديد، انتقل إلى ريال مدريد بصفقة قياسية عالميًا آنذاك وحقق معه إنجازات ضخمة في دوري أبطال أوروبا، وسجل أهدافًا حاسمة في عدة نهائيات، وأبرزها الهدف الأشهر بالمقص في نهائي 2018.",
    "bioEn": "A fast and powerful-shooting Welsh winger who moved to Real Madrid in a then-world-record transfer, achieving major UEFA Champions League success, and scoring decisive goals in several finals, most famously his spectacular bicycle-kick goal in the 2018 final.",
    "achievementsAr": [
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "قائد منتخب ويلز التاريخي في عدد الأهداف والمشاركات",
      "قيادة ويلز إلى كأس العالم 2022 (أول مشاركة منذ 1958)",
      "الهداف التاريخي لمنتخب ويلز"
    ],
    "achievementsEn": [
      "5 UEFA Champions League titles with Real Madrid",
      "Wales' all-time record scorer and appearance holder",
      "Led Wales to the 2022 World Cup (first appearance since 1958)",
      "Wales' all-time top goalscorer"
    ],
    "clubsHistoryAr": [
      "ساوثهامبتون",
      "توتنهام هوتسبير",
      "ريال مدريد",
      "لوس أنجلوس إف سي"
    ],
    "clubsHistoryEn": [
      "Southampton",
      "Tottenham Hotspur",
      "Real Madrid",
      "Los Angeles FC"
    ],
    "clubIds": [
      "southampton",
      "tottenham",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غاريث_بيل",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gareth_Bale"
  },
  {
    "id": "vinicius-junior",
    "nameAr": "فينيسيوس جونيور",
    "nameEn": "Vinícius Júnior",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "جناح برازيلي سريع ومراوغ، أصبح أحد أبرز نجوم ريال مدريد والعالم في العقد الحالي، وكان صاحب الهدف الوحيد في نهائي دوري أبطال أوروبا 2022 أمام ليفربول.",
    "bioEn": "A fast and skillful Brazilian winger who has become one of Real Madrid's and the world's standout stars of the current decade, and scored the only goal in the 2022 UEFA Champions League final against Liverpool.",
    "achievementsAr": [
      "3 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "هدف نهائي دوري أبطال أوروبا 2022",
      "عدة ألقاب دوري إسباني مع ريال مدريد",
      "أفضل لاعب في نهائي دوري أبطال أوروبا 2024"
    ],
    "achievementsEn": [
      "3 UEFA Champions League titles with Real Madrid",
      "Scorer of the winning goal in the 2022 Champions League final",
      "Multiple La Liga titles with Real Madrid",
      "2024 UEFA Champions League final Player of the Match"
    ],
    "clubsHistoryAr": [
      "فلامنغو",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Flamengo",
      "Real Madrid"
    ],
    "clubIds": [
      "flamengo",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فينيسيوس_جونيور",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Vinícius_Júnior"
  },
  {
    "id": "lamine-yamal",
    "nameAr": "لامين يامال",
    "nameEn": "Lamine Yamal",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "جناح إسباني شاب يُعد أبرز المواهب الصاعدة في كرة القدم العالمية، تخرّج من أكاديمية لا ماسيا وأصبح أساسيًا في برشلونة وهو لم يتجاوز السادسة عشرة، وساهم في فوز إسبانيا بلقب يورو 2024 وهو في السابعة عشرة من عمره.",
    "bioEn": "A young Spanish winger regarded as one of the brightest emerging talents in world football, he graduated from La Masia academy and became a Barcelona regular before turning 17, and helped Spain win the Euro 2024 title at age 17.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "لقب الدوري الإسباني مع برشلونة",
      "جائزة كوبا تروفي لأفضل لاعب شاب في أوروبا",
      "أصغر لاعب يسجل ويصنع في نهائيات كأس أمم أوروبا"
    ],
    "achievementsEn": [
      "UEFA Euro 2024 title with Spain",
      "La Liga title with Barcelona",
      "Kopa Trophy for Europe's best young player",
      "Youngest player to score and assist at a UEFA Euro finals"
    ],
    "clubsHistoryAr": [
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Barcelona"
    ],
    "clubIds": [
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لامين_يامال",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Lamine_Yamal"
  },
  {
    "id": "pedri",
    "nameAr": "بيدري",
    "nameEn": "Pedri",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "وسط ميدان إسباني عُرف بأناقته الفنية وتحكمه في إيقاع اللعب منذ ظهوره المبكر مع برشلونة، يُقارن أسلوب لعبه بأساطير النادي مثل إنييستا، وأصبح أحد ركائز خط وسط برشلونة ومنتخب إسبانيا.",
    "bioEn": "A Spanish midfielder known for his technical elegance and control of the game's tempo since his early breakthrough at Barcelona, often compared in style to club legends like Iniesta, and now a key pillar of both Barcelona's and Spain's midfield.",
    "achievementsAr": [
      "الكرة الذهبية الفخرية لأفضل لاعب شاب (جائزة كوبا) 2021",
      "لقب الدوري الإسباني مع برشلونة",
      "بطولة دوري الأمم الأوروبية 2023 مع إسبانيا",
      "أفضل لاعب شاب في بطولة يورو 2020"
    ],
    "achievementsEn": [
      "2021 Kopa Trophy for best young player",
      "La Liga title with Barcelona",
      "2023 UEFA Nations League title with Spain",
      "Euro 2020 Young Player of the Tournament"
    ],
    "clubsHistoryAr": [
      "لاس بالماس",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Las Palmas",
      "Barcelona"
    ],
    "clubIds": [
      "las-palmas",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بيدري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pedri"
  },
  {
    "id": "raphinha",
    "nameAr": "رافينيا",
    "nameEn": "Raphinha",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "جناح برازيلي انضم إلى برشلونة قادمًا من ليدز يونايتد، وأصبح أحد أهم لاعبي الفريق الهجوميين تحت قيادة هانسي فليك، وكان من أبرز المرشحين للكرة الذهبية بعد موسم استثنائي حقق فيه أرقامًا تهديفية عالية.",
    "bioEn": "A Brazilian winger who joined Barcelona from Leeds United and became one of the team's key attacking players under Hansi Flick, emerging as a leading Ballon d'Or contender after an exceptional season with high goal and assist numbers.",
    "achievementsAr": [
      "لقب الدوري الإسباني مع برشلونة",
      "كأس ملك إسبانيا مع برشلونة",
      "من أبرز المرشحين للكرة الذهبية",
      "هداف ومصنع رئيسي في هجوم برشلونة"
    ],
    "achievementsEn": [
      "La Liga title with Barcelona",
      "Copa del Rey with Barcelona",
      "Leading Ballon d'Or contender",
      "Key scorer and creator in Barcelona's attack"
    ],
    "clubsHistoryAr": [
      "أفينيدا",
      "فيتوريا",
      "سبورتينغ لشبونة",
      "رين",
      "ليدز يونايتد",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Avaí",
      "Vitória",
      "Sporting CP",
      "Rennes",
      "Leeds United",
      "Barcelona"
    ],
    "clubIds": [
      "sporting-cp",
      "rennes",
      "leeds-united",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رافينيا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Raphinha"
  },
  {
    "id": "frenkie-de-jong",
    "nameAr": "فرينكي دي يونغ",
    "nameEn": "Frenkie de Jong",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "وسط ميدان هولندي عُرف بقدرته الفنية العالية على حمل الكرة والخروج من الضغط، انتقل إلى برشلونة قادمًا من أياكس بصفقة كبيرة، وأصبح أحد أهم لاعبي وسط الملعب في الفريق الكتالوني.",
    "bioEn": "A Dutch midfielder known for his exceptional technical ability to carry the ball and evade pressure, he joined Barcelona from Ajax in a major transfer and became one of the club's most important midfielders.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2019 (نهائي) مع أياكس (وصول للنصف النهائي)",
      "لقب الدوري الإسباني مع برشلونة",
      "كأس ملك إسبانيا مع برشلونة",
      "لاعب أساسي في منتخب هولندا"
    ],
    "achievementsEn": [
      "Reached the 2019 Champions League semi-final with Ajax",
      "La Liga title with Barcelona",
      "Copa del Rey with Barcelona",
      "Key player for the Netherlands national team"
    ],
    "clubsHistoryAr": [
      "ويلم الثاني",
      "أياكس",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Willem II",
      "Ajax",
      "Barcelona"
    ],
    "clubIds": [
      "ajax",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فرينكي_دي_يونغ",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Frenkie_de_Jong"
  },
  {
    "id": "pau-cubarsi",
    "nameAr": "باو كوبارسي",
    "nameEn": "Pau Cubarsí",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "مدافع إسباني شاب تخرّج من أكاديمية لا ماسيا وأصبح أساسيًا في قلب دفاع برشلونة رغم صغر سنه، عُرف بهدوئه ونضجه التكتيكي غير المعتاد لعمره منذ ظهوره الأول.",
    "bioEn": "A young Spanish defender who graduated from La Masia academy and became a Barcelona first-team regular in central defense despite his young age, known for his calmness and unusually mature tactical reading since his debut.",
    "achievementsAr": [
      "لقب الدوري الإسباني مع برشلونة",
      "كأس ملك إسبانيا مع برشلونة",
      "أحد أصغر المدافعين الأساسيين في تاريخ برشلونة الحديث",
      "لاعب أساسي في منتخب إسبانيا للشباب ثم الأول"
    ],
    "achievementsEn": [
      "La Liga title with Barcelona",
      "Copa del Rey with Barcelona",
      "One of the youngest ever regular starting defenders in Barcelona's modern history",
      "Regular for Spain's youth teams and now the senior national team"
    ],
    "clubsHistoryAr": [
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Barcelona"
    ],
    "clubIds": [
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/باو_كوبارسي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pau_Cubarsí"
  },
  {
    "id": "jude-bellingham",
    "nameAr": "جود بيلينغهام",
    "nameEn": "Jude Bellingham",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "وسط ميدان هجومي",
      "en": "Attacking Midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "وسط ميدان إنجليزي شاب أصبح أحد أهم نجوم ريال مدريد بعد انتقاله من بوروسيا دورتموند، عُرف بقدرته على الوصول للمنطقة والتهديف بغزارة رغم لعبه كوسط ميدان، وسجل أهدافًا حاسمة في موسمه الأول مع النادي الملكي.",
    "bioEn": "A young English midfielder who became one of Real Madrid's most important stars following his move from Borussia Dortmund, known for his ability to arrive in the box and score prolifically despite playing as a midfielder, and scored decisive goals in his debut season with the club.",
    "achievementsAr": [
      "دوري أبطال أوروبا مع ريال مدريد",
      "لقب الدوري الإسباني مع ريال مدريد",
      "أفضل لاعب شاب في الدوري الإسباني في موسمه الأول",
      "قائد جيل جديد من نجوم منتخب إنجلترا"
    ],
    "achievementsEn": [
      "UEFA Champions League title with Real Madrid",
      "La Liga title with Real Madrid",
      "La Liga Best Young Player in his debut season",
      "Leading figure of England's new generation of stars"
    ],
    "clubsHistoryAr": [
      "بيرمنغهام سيتي",
      "بوروسيا دورتموند",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Birmingham City",
      "Borussia Dortmund",
      "Real Madrid"
    ],
    "clubIds": [
      "birmingham-city",
      "borussia-dortmund",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جود_بيلينغهام",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jude_Bellingham"
  },
  {
    "id": "thibaut-courtois",
    "nameAr": "تيبو كورتوا",
    "nameEn": "Thibaut Courtois",
    "nationalityAr": "بلجيكي",
    "nationalityEn": "Belgian",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "حارس مرمى بلجيكي طويل القامة يُعد من أفضل حراس المرمى في العالم حاليًا، لعب لأتلتيكو مدريد وتشيلسي قبل انتقاله إلى ريال مدريد، وقدّم أداءً استثنائيًا في نهائي دوري أبطال أوروبا 2022 ساهم في فوز فريقه باللقب.",
    "bioEn": "A tall Belgian goalkeeper regarded as one of the world's best currently, having played for Atlético Madrid and Chelsea before joining Real Madrid, where he delivered an exceptional performance in the 2022 Champions League final that helped his side win the title.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2022 مع ريال مدريد (أفضل لاعب في النهائي)",
      "لقب الدوري الإنجليزي الممتاز مع تشيلسي",
      "لقب الدوري الإسباني مع أتلتيكو مدريد وريال مدريد",
      "القفاز الذهبي لكأس العالم 2018 مع بلجيكا"
    ],
    "achievementsEn": [
      "2022 UEFA Champions League with Real Madrid (final Player of the Match)",
      "Premier League title with Chelsea",
      "La Liga title with Atlético Madrid and Real Madrid",
      "2018 World Cup Golden Glove with Belgium"
    ],
    "clubsHistoryAr": [
      "خنت",
      "تشيلسي",
      "أتلتيكو مدريد (إعارة)",
      "تشيلسي",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Genk",
      "Chelsea",
      "Atlético Madrid (loan)",
      "Chelsea",
      "Real Madrid"
    ],
    "clubIds": [
      "chelsea",
      "atletico-madrid",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/تيبو_كورتوا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Thibaut_Courtois"
  },
  {
    "id": "rodrygo",
    "nameAr": "رودريغو غويس",
    "nameEn": "Rodrygo",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "جناح برازيلي شاب انضم إلى ريال مدريد قادمًا من سانتوس، وأصبح أحد أبرز المواهب البرازيلية في الفريق الملكي إلى جانب مواطنه فينيسيوس جونيور، وسجل أهدافًا حاسمة في مباريات كبرى بدوري أبطال أوروبا.",
    "bioEn": "A young Brazilian winger who joined Real Madrid from Santos and became one of the club's standout Brazilian talents alongside compatriot Vinícius Júnior, scoring decisive goals in major UEFA Champions League matches.",
    "achievementsAr": [
      "دوري أبطال أوروبا مع ريال مدريد (عدة مرات)",
      "لقب الدوري الإسباني مع ريال مدريد",
      "هدفان حاسمان في نصف نهائي دوري الأبطال 2022 أمام مانشستر سيتي",
      "لاعب أساسي في منتخب البرازيل"
    ],
    "achievementsEn": [
      "UEFA Champions League with Real Madrid (multiple times)",
      "La Liga title with Real Madrid",
      "Two decisive goals in the 2022 Champions League semi-final against Manchester City",
      "Regular for the Brazil national team"
    ],
    "clubsHistoryAr": [
      "سانتوس",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Santos",
      "Real Madrid"
    ],
    "clubIds": [
      "santos-fc",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رودريغو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rodrygo"
  },
  {
    "id": "federico-valverde",
    "nameAr": "فيديريكو فالفيردي",
    "nameEn": "Federico Valverde",
    "nationalityAr": "أوروغواياني",
    "nationalityEn": "Uruguayan",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "وسط ميدان أوروغواياني شامل يُعرف بقوته البدنية وقدرته على العمل الدفاعي والهجومي معًا وتسديداته القوية من خارج منطقة الجزاء، أصبح أحد أهم ركائز ريال مدريد ومنتخب الأوروغواي.",
    "bioEn": "A complete Uruguayan midfielder known for his physical power, ability to contribute both defensively and offensively, and powerful long-range shooting, he has become one of the key pillars for both Real Madrid and the Uruguay national team.",
    "achievementsAr": [
      "دوري أبطال أوروبا مع ريال مدريد (عدة مرات)",
      "لقب الدوري الإسباني مع ريال مدريد (عدة مرات)",
      "هدف حاسم في نهائي دوري أبطال أوروبا 2024",
      "لاعب أساسي في منتخب الأوروغواي"
    ],
    "achievementsEn": [
      "UEFA Champions League with Real Madrid (multiple times)",
      "La Liga title with Real Madrid (multiple times)",
      "Scored a decisive goal in the 2024 Champions League final",
      "Regular for the Uruguay national team"
    ],
    "clubsHistoryAr": [
      "بينارول",
      "ديبورتيفو لاكورنيا (إعارة)",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Peñarol",
      "Deportivo La Coruña (loan)",
      "Real Madrid"
    ],
    "clubIds": [
      "penarol",
      "deportivo-la-coruna",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فيديريكو_فالفيردي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Federico_Valverde"
  },
  {
    "id": "aurelien-tchouameni",
    "nameAr": "أوريليان تشوامني",
    "nameEn": "Aurélien Tchouaméni",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "وسط ميدان دفاعي",
      "en": "Defensive Midfielder"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "وسط ميدان دفاعي فرنسي انضم إلى ريال مدريد قادمًا من موناكو بصفقة كبيرة، عُرف بقدرته على استخلاص الكرات وتوزيعها بدقة، وأصبح خيارًا أساسيًا لخط وسط الفريق الملكي ومنتخب فرنسا.",
    "bioEn": "A French defensive midfielder who joined Real Madrid from Monaco in a major transfer, known for his ball-winning ability and accurate distribution, becoming a key option in the midfield for both the club and the France national team.",
    "achievementsAr": [
      "دوري أبطال أوروبا مع ريال مدريد (عدة مرات)",
      "لقب الدوري الإسباني مع ريال مدريد",
      "الوصول لنهائي كأس العالم 2022 مع فرنسا",
      "لاعب أساسي في خط وسط منتخب فرنسا"
    ],
    "achievementsEn": [
      "UEFA Champions League with Real Madrid (multiple times)",
      "La Liga title with Real Madrid",
      "Runner-up at the 2022 World Cup with France",
      "Regular in France's midfield"
    ],
    "clubsHistoryAr": [
      "بوردو",
      "موناكو",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Bordeaux",
      "Monaco",
      "Real Madrid"
    ],
    "clubIds": [
      "bordeaux",
      "monaco",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أوريلين_تشواميني",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Aurélien_Tchouaméni"
  },
  {
    "id": "eder-militao",
    "nameAr": "إيدير ميليتاو",
    "nameEn": "Éder Militão",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مدافع برازيلي سريع وقوي، أصبح أحد أعمدة دفاع ريال مدريد منذ انضمامه من بورتو، عُرف بقدرته على المواجهات الفردية وسرعته العالية في التعامل مع المهاجمين المنافسين.",
    "bioEn": "A fast and powerful Brazilian defender who has become one of the pillars of Real Madrid's defense since joining from Porto, known for his ability in individual duels and his pace in dealing with opposing forwards.",
    "achievementsAr": [
      "دوري أبطال أوروبا مع ريال مدريد (عدة مرات)",
      "لقب الدوري الإسباني مع ريال مدريد (عدة مرات)",
      "لاعب أساسي في دفاع منتخب البرازيل",
      "جزء من ثلاثي الدفاع الذي قاد ريال مدريد لموسم اللقبين 2021-2022"
    ],
    "achievementsEn": [
      "UEFA Champions League with Real Madrid (multiple times)",
      "La Liga title with Real Madrid (multiple times)",
      "Regular in Brazil's national team defense",
      "Part of the defensive unit that led Real Madrid's 2021-22 double-winning season"
    ],
    "clubsHistoryAr": [
      "ساو باولو",
      "بورتو",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "São Paulo",
      "Porto",
      "Real Madrid"
    ],
    "clubIds": [
      "porto",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إيدير_ميليتاو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Éder_Militão"
  },
  {
    "id": "bukayo-saka",
    "nameAr": "بوكايو ساكا",
    "nameEn": "Bukayo Saka",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "جناح إنجليزي تخرّج من أكاديمية أرسنال وأصبح أحد أهم نجوم الفريق، عُرف بمهاراته الفردية وتسديداته من الجناح الأيمن، وكان عنصرًا أساسيًا في تتويج أرسنال بلقب الدوري الإنجليزي الممتاز موسم 2025-2026 بعد غياب طويل عن المنافسة على اللقب.",
    "bioEn": "An English winger who graduated from Arsenal's academy and became one of the club's most important players, known for his individual skill and finishing from the right flank, and a key contributor to Arsenal's 2025-26 Premier League title after a long wait to compete for the championship.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي الممتاز 2025-2026 مع أرسنال",
      "الوصول لنهائي كأس العالم للأندية / بطولات أوروبية مع أرسنال",
      "بطولة أمم أوروبا 2020 (نهائي) مع إنجلترا",
      "لاعب أساسي في منتخب إنجلترا"
    ],
    "achievementsEn": [
      "2025-26 Premier League title with Arsenal",
      "Reached major European finals with Arsenal",
      "Runner-up at UEFA Euro 2020 with England",
      "Regular for the England national team"
    ],
    "clubsHistoryAr": [
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Arsenal"
    ],
    "clubIds": [
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بوكايو_ساكا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bukayo_Saka"
  },
  {
    "id": "phil-foden",
    "nameAr": "فيل فودين",
    "nameEn": "Phil Foden",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "جناح / وسط ميدان هجومي",
      "en": "Winger / Attacking Midfielder"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "لاعب إنجليزي تخرّج من أكاديمية مانشستر سيتي وأصبح أحد أهم نجومه، عُرف بمهاراته الفنية العالية وقدرته على اللعب في أكثر من مركز هجومي، وفاز بجائزة أفضل لاعب شاب في الدوري الإنجليزي الممتاز عدة مرات.",
    "bioEn": "An English player who graduated from Manchester City's academy and became one of its most important stars, known for his high technical skill and versatility in multiple attacking positions, winning the Premier League Young Player of the Season award multiple times.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "أفضل لاعب شاب في الدوري الإنجليزي الممتاز عدة مرات",
      "لاعب أساسي في منتخب إنجلترا"
    ],
    "achievementsEn": [
      "2023 UEFA Champions League with Manchester City",
      "Multiple Premier League titles with Manchester City",
      "Premier League Young Player of the Season multiple times",
      "Regular for the England national team"
    ],
    "clubsHistoryAr": [
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Manchester City"
    ],
    "clubIds": [
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فيل_فودين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Phil_Foden"
  },
  {
    "id": "cole-palmer",
    "nameAr": "كول بالمر",
    "nameEn": "Cole Palmer",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "وسط ميدان هجومي",
      "en": "Attacking Midfielder"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "لاعب إنجليزي انتقل من مانشستر سيتي إلى تشيلسي وأصبح النجم الأبرز في الفريق، عُرف بهدوئه أمام المرمى وقدرته على صناعة الفرص، وأصبح أحد أفضل صناعي الألعاب الشباب في الدوري الإنجليزي الممتاز.",
    "bioEn": "An English player who moved from Manchester City to Chelsea and became the club's standout star, known for his composure in front of goal and chance creation, emerging as one of the finest young playmakers in the Premier League.",
    "achievementsAr": [
      "دوري المؤتمر الأوروبي 2024-25 مع تشيلسي",
      "كأس العالم للأندية 2025 مع تشيلسي",
      "وصيف بطولة أوروبا 2024 مع إنجلترا"
    ],
    "achievementsEn": [
      "UEFA Conference League 2024-25 with Chelsea",
      "2025 FIFA Club World Cup with Chelsea",
      "UEFA Euro 2024 runner-up with England"
    ],
    "clubsHistoryAr": [
      "مانشستر سيتي",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Manchester City",
      "Chelsea"
    ],
    "clubIds": [
      "manchester-city",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كول_بالمر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Cole_Palmer"
  },
  {
    "id": "virgil-van-dijk",
    "nameAr": "فيرجيل فان دايك",
    "nameEn": "Virgil van Dijk",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "مدافع هولندي وقائد ليفربول، يُعد أحد أفضل قلوب الدفاع في العالم منذ انتقاله من ساوثهامبتون بصفقة قياسية لمدافع آنذاك، اشتهر بقراءته الذكية للعب وسيطرته الهوائية، وقاد ليفربول للفوز بدوري أبطال أوروبا والدوري الإنجليزي الممتاز.",
    "bioEn": "A Dutch defender and Liverpool captain, regarded as one of the world's best centre-backs since his then-record transfer from Southampton, known for his intelligent reading of the game and aerial dominance, and captained Liverpool to UEFA Champions League and Premier League glory.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2019 مع ليفربول",
      "عدة ألقاب دوري إنجليزي ممتاز مع ليفربول",
      "قائد منتخب هولندا",
      "المركز الثاني في الكرة الذهبية 2019"
    ],
    "achievementsEn": [
      "2019 UEFA Champions League with Liverpool",
      "Multiple Premier League titles with Liverpool",
      "Captain of the Netherlands national team",
      "Runner-up for the 2019 Ballon d'Or"
    ],
    "clubsHistoryAr": [
      "خرونينغن",
      "سلتيك",
      "ساوثهامبتون",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Groningen",
      "Celtic",
      "Southampton",
      "Liverpool"
    ],
    "clubIds": [
      "celtic",
      "southampton",
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فيرجيل_فان_دايك",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Virgil_van_Dijk"
  },
  {
    "id": "bruno-fernandes",
    "nameAr": "برونو فرنانديز",
    "nameEn": "Bruno Fernandes",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "مانشستر يونايتد",
    "clubEn": "Manchester United",
    "clubId": "manchester-united",
    "position": {
      "ar": "وسط ميدان هجومي",
      "en": "Attacking Midfielder"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "وسط ميدان برتغالي وقائد مانشستر يونايتد، عُرف بتمريراته الحاسمة الكثيرة وتسديداته من الكرات الثابتة، وأصبح صانع الألعاب الرئيسي للفريق منذ انتقاله من سبورتينغ لشبونة، رغم مرور الفريق بسنوات صعبة نسبيًا.",
    "bioEn": "A Portuguese midfielder and Manchester United captain, known for his prolific chance creation and set-piece delivery, having become the club's principal playmaker since joining from Sporting CP, despite the team going through relatively difficult years.",
    "achievementsAr": [
      "أكثر لاعب صناعة للفرص في الدوري الإنجليزي الممتاز لعدة مواسم",
      "كأس الاتحاد الأوروبي 2017 مع سبورتينغ",
      "دوري الأمم الأوروبية مع البرتغال",
      "قائد مانشستر يونايتد"
    ],
    "achievementsEn": [
      "Premier League chance-creation leader for multiple seasons",
      "2017 UEFA Europa League runner-up with Sporting CP era honours",
      "UEFA Nations League titles with Portugal",
      "Manchester United captain"
    ],
    "clubsHistoryAr": [
      "نوفارا (إعارة)",
      "أودينيزي",
      "سامبدوريا",
      "سبورتينغ لشبونة",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Novara (loan)",
      "Udinese",
      "Sampdoria",
      "Sporting CP",
      "Manchester United"
    ],
    "clubIds": [
      "udinese",
      "sampdoria",
      "sporting-cp",
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/برونو_فرنانديز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bruno_Fernandes"
  },
  {
    "id": "richarlison",
    "nameAr": "ريتشارليسون",
    "nameEn": "Richarlison",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "توتنهام هوتسبير",
    "clubEn": "Tottenham Hotspur",
    "clubId": "tottenham",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مهاجم برازيلي قوي ومتحرك، انتقل إلى توتنهام هوتسبير قادمًا من إيفرتون، ويُعرف بأهدافه الأكروباتية وأسلوبه الاحتفالي المميز بتقليد حركة القوس، وهو لاعب أساسي في هجوم توتنهام ومنتخب البرازيل.",
    "bioEn": "A powerful and mobile Brazilian forward who moved to Tottenham Hotspur from Everton, known for his acrobatic goals and his distinctive bow-and-arrow celebration, and a key player in Tottenham's attack and the Brazil national team.",
    "achievementsAr": [
      "بطولة الألعاب الأولمبية 2020 مع البرازيل",
      "أفضل لاعب في الأولمبياد 2020",
      "لاعب أساسي في هجوم توتنهام",
      "هدف أكروباتي شهير في كأس العالم 2022"
    ],
    "achievementsEn": [
      "2020 Olympic gold medal with Brazil",
      "2020 Olympics top scorer / MVP recognition",
      "Key player in Tottenham's attack",
      "Famous acrobatic goal at the 2022 World Cup"
    ],
    "clubsHistoryAr": [
      "أمريكا مينيرو",
      "فلوميننسي",
      "واتفورد",
      "إيفرتون",
      "توتنهام هوتسبير"
    ],
    "clubsHistoryEn": [
      "América Mineiro",
      "Fluminense",
      "Watford",
      "Everton",
      "Tottenham Hotspur"
    ],
    "clubIds": [
      "everton",
      "tottenham"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ريتشارليسون",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Richarlison"
  },
  {
    "id": "ronaldo-nazario",
    "nameAr": "رونالدو نازاريو",
    "nameEn": "Ronaldo Nazário",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "كورينثيانز (معتزل)",
    "clubEn": "Corinthians (retired)",
    "clubId": "corinthians",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1993-2011",
    "active": false,
    "bioAr": "مهاجم برازيلي يُلقب بـ'الظاهرة'، يُعتبره كثيرون من أعظم المهاجمين في تاريخ كرة القدم بفضل سرعته ومهاراته الفردية الاستثنائية قبل تعرضه لإصابات ركبة متكررة أثرت على مسيرته. توّج بكأس العالم مرتين مع البرازيل (1994، 2002) وفاز بالكرة الذهبية عام 1997.",
    "bioEn": "A Brazilian forward nicknamed 'The Phenomenon', widely regarded as one of the greatest strikers in football history for his exceptional pace and individual skill before recurring knee injuries affected his career. He won the World Cup twice with Brazil (1994, 2002) and the Ballon d'Or in 1997.",
    "achievementsAr": [
      "بطولتا كأس العالم مع البرازيل (1994، 2002)",
      "الكرة الذهبية 1997",
      "أفضل لاعب في العالم من الفيفا 3 مرات",
      "هداف نهائيات كأس العالم التاريخي (سابقًا) بـ 15 هدفًا"
    ],
    "achievementsEn": [
      "2 FIFA World Cup titles with Brazil (1994, 2002)",
      "1997 Ballon d'Or",
      "FIFA World Player of the Year 3 times",
      "Former all-time World Cup finals top scorer with 15 goals"
    ],
    "clubsHistoryAr": [
      "كروزيرو",
      "بي إس في آيندهوفن",
      "برشلونة",
      "إنتر ميلان",
      "ريال مدريد",
      "ميلان",
      "كورينثيانز"
    ],
    "clubsHistoryEn": [
      "Cruzeiro",
      "PSV Eindhoven",
      "Barcelona",
      "Inter Milan",
      "Real Madrid",
      "Milan",
      "Corinthians"
    ],
    "clubIds": [
      "psv-eindhoven",
      "barcelona",
      "inter-milan",
      "real-madrid",
      "ac-milan",
      "corinthians"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رونالدو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)"
  },
  {
    "id": "michel-platini",
    "nameAr": "ميشيل بلاتيني",
    "nameEn": "Michel Platini",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "يوفنتوس (معتزل)",
    "clubEn": "Juventus (retired)",
    "clubId": "juventus",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder / Playmaker"
    },
    "era": "1972-1987",
    "active": false,
    "bioAr": "صانع ألعاب فرنسي يحمل الرقم القياسي لأكثر عدد فوز بالكرة الذهبية بثلاث مرات متتالية (1983، 1984، 1985)، قاد فرنسا للفوز بأمم أوروبا 1984 مسجلاً 9 أهداف في البطولة، وكان نجم يوفنتوس في أوجه في منتصف الثمانينيات.",
    "bioEn": "A French playmaker who holds the record for most consecutive Ballon d'Or wins with three in a row (1983, 1984, 1985), he led France to the Euro 1984 title scoring 9 goals in the tournament, and was Juventus' star player during their mid-1980s peak.",
    "achievementsAr": [
      "3 جوائز كرة ذهبية متتالية (1983، 1984، 1985)",
      "بطولة أمم أوروبا 1984 مع فرنسا (هداف البطولة)",
      "كأس أوروبا 1985 مع يوفنتوس",
      "هداف الدوري الإيطالي 3 مرات"
    ],
    "achievementsEn": [
      "3 consecutive Ballon d'Or awards (1983, 1984, 1985)",
      "UEFA Euro 1984 title with France (tournament top scorer)",
      "1985 European Cup with Juventus",
      "Serie A top scorer 3 times"
    ],
    "clubsHistoryAr": [
      "نانسي",
      "سانت إيتيان",
      "يوفنتوس"
    ],
    "clubsHistoryEn": [
      "Nancy",
      "Saint-Étienne",
      "Juventus"
    ],
    "clubIds": [
      "nancy",
      "saint-etienne",
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ميشيل_بلاتيني",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Michel_Platini"
  },
  {
    "id": "george-weah",
    "nameAr": "جورج ويا",
    "nameEn": "George Weah",
    "nationalityAr": "ليبيري",
    "nationalityEn": "Liberian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1985-2003",
    "active": false,
    "bioAr": "مهاجم ليبيري يُعد أول وحيد لاعب إفريقي يفوز بالكرة الذهبية حتى الآن (1995)، وأول لاعب إفريقي يُتوَّج بجائزة أفضل لاعب في العالم من الفيفا في نفس العام. بعد اعتزاله انخرط في السياسة وأصبح رئيسًا لجمهورية ليبيريا عام 2018.",
    "bioEn": "A Liberian forward and the only African player to have won the Ballon d'Or to date (1995), and the first African to be named FIFA World Player of the Year the same year. After retiring, he entered politics and became President of Liberia in 2018.",
    "achievementsAr": [
      "الكرة الذهبية 1995 (أول وحيد إفريقي حتى الآن)",
      "أفضل لاعب في العالم من الفيفا 1995",
      "أفضل لاعب إفريقي في القرن العشرين",
      "أصبح رئيسًا لجمهورية ليبيريا بعد الاعتزال"
    ],
    "achievementsEn": [
      "1995 Ballon d'Or (the only African winner to date)",
      "1995 FIFA World Player of the Year",
      "African Footballer of the Century",
      "Became President of Liberia after retiring"
    ],
    "clubsHistoryAr": [
      "توناربا",
      "موناكو",
      "باريس سان جيرمان",
      "ميلان",
      "تشيلسي",
      "مانشستر سيتي",
      "مارسيليا",
      "الاتحاد"
    ],
    "clubsHistoryEn": [
      "Tonnerre Yaoundé",
      "Monaco",
      "Paris Saint-Germain",
      "Milan",
      "Chelsea",
      "Manchester City",
      "Marseille",
      "Al-Ittihad"
    ],
    "clubIds": [
      "monaco",
      "paris-saint-germain",
      "ac-milan",
      "chelsea",
      "manchester-city",
      "marseille"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جورج_ويا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/George_Weah"
  },
  {
    "id": "fabio-cannavaro",
    "nameAr": "فابيو كانافارو",
    "nameEn": "Fabio Cannavaro",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1992-2011",
    "active": false,
    "bioAr": "مدافع إيطالي وقائد المنتخب الفائز بكأس العالم 2006، يُعد أحد قلائل المدافعين الذين فازوا بالكرة الذهبية، اشتهر بذكائه الدفاعي وقدرته على المواجهات الفردية رغم قصر قامته نسبيًا لمركزه.",
    "bioEn": "An Italian defender and captain of the 2006 World Cup-winning squad, one of the few defenders to have won the Ballon d'Or, known for his defensive intelligence and ability in individual duels despite his relatively short stature for his position.",
    "achievementsAr": [
      "بطولة كأس العالم 2006 مع إيطاليا (كقائد)",
      "الكرة الذهبية 2006",
      "أفضل لاعب في العالم من الفيفا 2006",
      "لقب الدوري الإسباني مع ريال مدريد"
    ],
    "achievementsEn": [
      "2006 FIFA World Cup title with Italy (as captain)",
      "2006 Ballon d'Or",
      "2006 FIFA World Player of the Year",
      "La Liga title with Real Madrid"
    ],
    "clubsHistoryAr": [
      "نابولي",
      "بارما",
      "إنتر ميلان",
      "يوفنتوس",
      "ريال مدريد",
      "يوفنتوس"
    ],
    "clubsHistoryEn": [
      "Napoli",
      "Parma",
      "Inter Milan",
      "Juventus",
      "Real Madrid",
      "Juventus"
    ],
    "clubIds": [
      "napoli",
      "parma",
      "inter-milan",
      "juventus",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فابيو_كانافارو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Fabio_Cannavaro"
  },
  {
    "id": "kaka",
    "nameAr": "كاكا",
    "nameEn": "Kaká",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "أورلاندو سيتي (معتزل)",
    "clubEn": "Orlando City (retired)",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder / Playmaker"
    },
    "era": "2001-2017",
    "active": false,
    "bioAr": "صانع ألعاب برازيلي عُرف بأناقته الفنية وسرعته وابتعاده عن الجدل الشخصي داخل وخارج الملعب، فاز بالكرة الذهبية عام 2007 بعد موسم استثنائي قاد فيه ميلان للفوز بدوري أبطال أوروبا، قبل انتقاله بصفقة قياسية عالميًا إلى ريال مدريد.",
    "bioEn": "A Brazilian playmaker known for his technical elegance, pace, and low-key personal conduct on and off the pitch, he won the 2007 Ballon d'Or after an exceptional season leading Milan to the UEFA Champions League title, before a then-world-record transfer to Real Madrid.",
    "achievementsAr": [
      "الكرة الذهبية 2007",
      "دوري أبطال أوروبا 2007 مع ميلان",
      "أفضل لاعب في العالم من الفيفا 2007",
      "لقب الدوري الإيطالي مع ميلان"
    ],
    "achievementsEn": [
      "2007 Ballon d'Or",
      "2007 UEFA Champions League with Milan",
      "2007 FIFA World Player of the Year",
      "Serie A title with Milan"
    ],
    "clubsHistoryAr": [
      "ساو باولو",
      "ميلان",
      "ريال مدريد",
      "ميلان",
      "أورلاندو سيتي"
    ],
    "clubsHistoryEn": [
      "São Paulo",
      "Milan",
      "Real Madrid",
      "Milan",
      "Orlando City"
    ],
    "clubIds": [
      "ac-milan",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كاكا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kaká"
  },
  {
    "id": "luis-figo",
    "nameAr": "لويس فيغو",
    "nameEn": "Luís Figo",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "إنتر ميلان (معتزل)",
    "clubEn": "Inter Milan (retired)",
    "clubId": "inter-milan",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "1989-2009",
    "active": false,
    "bioAr": "جناح برتغالي فاز بالكرة الذهبية عام 2000، وأثار ضجة عالمية كبيرة بانتقاله المثير للجدل من برشلونة إلى غريمه التقليدي ريال مدريد بصفقة قياسية عالميًا آنذاك، واعتُبر أحد أفضل الأجنحة في جيله.",
    "bioEn": "A Portuguese winger who won the 2000 Ballon d'Or and caused a major global stir with his controversial transfer from Barcelona to bitter rival Real Madrid in a then-world-record deal, regarded as one of the finest wingers of his generation.",
    "achievementsAr": [
      "الكرة الذهبية 2000",
      "أفضل لاعب في العالم من الفيفا 2001",
      "دوري أبطال أوروبا مع ريال مدريد",
      "لقبا دوري إسباني مع برشلونة وريال مدريد"
    ],
    "achievementsEn": [
      "2000 Ballon d'Or",
      "2001 FIFA World Player of the Year",
      "UEFA Champions League with Real Madrid",
      "La Liga titles with both Barcelona and Real Madrid"
    ],
    "clubsHistoryAr": [
      "سبورتينغ لشبونة",
      "برشلونة",
      "ريال مدريد",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Sporting CP",
      "Barcelona",
      "Real Madrid",
      "Inter Milan"
    ],
    "clubIds": [
      "sporting-cp",
      "barcelona",
      "real-madrid",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لويس_فيغو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Luís_Figo"
  },
  {
    "id": "matthias-sammer",
    "nameAr": "ماتياس سامر",
    "nameEn": "Matthias Sammer",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بوروسيا دورتموند (معتزل)",
    "clubEn": "Borussia Dortmund (retired)",
    "clubId": "borussia-dortmund",
    "position": {
      "ar": "مدافع ليبرو",
      "en": "Defender (Sweeper)"
    },
    "era": "1985-1998",
    "active": false,
    "bioAr": "مدافع ألماني فاز بالكرة الذهبية عام 1996 وهو مدافع، قاد ألمانيا للفوز بأمم أوروبا 1996 من مركز الليبرو، ويُعد آخر مدافع ألماني يفوز بالجائزة، واعتزل مبكرًا نسبيًا بسبب إصابات في الركبة.",
    "bioEn": "A German defender who won the 1996 Ballon d'Or as a defender, leading Germany to the Euro 1996 title from the sweeper position, and is the last German defender to win the award, retiring relatively early due to knee injuries.",
    "achievementsAr": [
      "الكرة الذهبية 1996",
      "بطولة أمم أوروبا 1996 مع ألمانيا",
      "دوري أبطال أوروبا 1997 مع بوروسيا دورتموند",
      "لاعب الموسم في ألمانيا عدة مرات"
    ],
    "achievementsEn": [
      "1996 Ballon d'Or",
      "UEFA Euro 1996 title with Germany",
      "1997 UEFA Champions League with Borussia Dortmund",
      "German Footballer of the Year multiple times"
    ],
    "clubsHistoryAr": [
      "دينامو دريسدن",
      "شتوتغارت",
      "إنتر ميلان",
      "بوروسيا دورتموند"
    ],
    "clubsHistoryEn": [
      "Dynamo Dresden",
      "Stuttgart",
      "Inter Milan",
      "Borussia Dortmund"
    ],
    "clubIds": [
      "vfb-stuttgart",
      "inter-milan",
      "borussia-dortmund"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماتياس_سامر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Matthias_Sammer"
  },
  {
    "id": "bobby-charlton",
    "nameAr": "بوبي تشارلتون",
    "nameEn": "Bobby Charlton",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر يونايتد (معتزل)",
    "clubEn": "Manchester United (retired)",
    "clubId": "manchester-united",
    "position": {
      "ar": "وسط ميدان هجومي",
      "en": "Attacking Midfielder"
    },
    "era": "1954-1980",
    "active": false,
    "bioAr": "أسطورة إنجليزية نجا من كارثة طائرة ميونخ 1958 التي أودت بحياة العديد من زملائه، وقاد إنجلترا للفوز بكأس العالم 1966 على أرضها، وفاز بالكرة الذهبية في نفس العام. توفي عام 2023.",
    "bioEn": "An English legend who survived the 1958 Munich air disaster that claimed the lives of several of his teammates, led England to their 1966 home World Cup triumph, and won the Ballon d'Or the same year. He passed away in 2023.",
    "achievementsAr": [
      "بطولة كأس العالم 1966 مع إنجلترا",
      "الكرة الذهبية 1966",
      "كأس أوروبا 1968 مع مانشستر يونايتد",
      "الهداف التاريخي لمنتخب إنجلترا لفترة طويلة"
    ],
    "achievementsEn": [
      "1966 FIFA World Cup title with England",
      "1966 Ballon d'Or",
      "1968 European Cup with Manchester United",
      "England's all-time top scorer for many years"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد",
      "بريستون نورث إند",
      "ووترفورد"
    ],
    "clubsHistoryEn": [
      "Manchester United",
      "Preston North End",
      "Waterford"
    ],
    "clubIds": [
      "manchester-united",
      "preston-north-end"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بوبي_تشارلتون",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bobby_Charlton"
  },
  {
    "id": "denis-law",
    "nameAr": "دينيس لو",
    "nameEn": "Denis Law",
    "nationalityAr": "اسكتلندي",
    "nationalityEn": "Scottish",
    "clubAr": "مانشستر يونايتد (معتزل)",
    "clubEn": "Manchester United (retired)",
    "clubId": "manchester-united",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1956-1974",
    "active": false,
    "bioAr": "مهاجم اسكتلندي فاز بالكرة الذهبية عام 1964، وهو حتى الآن اللاعب الاسكتلندي الوحيد الذي حصل على هذا التكريم، وكان جزءًا من ثلاثي مانشستر يونايتد الهجومي الأسطوري مع جورج بيست وبوبي تشارلتون. توفي عام 2025.",
    "bioEn": "A Scottish forward who won the 1964 Ballon d'Or, remaining to date the only Scottish player to receive the honour, and was part of Manchester United's legendary attacking trio alongside George Best and Bobby Charlton. He passed away in 2025.",
    "achievementsAr": [
      "الكرة الذهبية 1964 (اللاعب الاسكتلندي الوحيد حتى الآن)",
      "لقبا دوري إنجليزي مع مانشستر يونايتد",
      "الهداف التاريخي المشترك لمنتخب اسكتلندا لفترة طويلة",
      "جزء من ثلاثي مانشستر يونايتد الهجومي الأسطوري"
    ],
    "achievementsEn": [
      "1964 Ballon d'Or (Scotland's only winner to date)",
      "English league titles with Manchester United",
      "Long-standing joint-record scorer for Scotland",
      "Part of Manchester United's legendary attacking trio"
    ],
    "clubsHistoryAr": [
      "هدرزفيلد تاون",
      "مانشستر سيتي",
      "تورينو",
      "مانشستر يونايتد",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Huddersfield Town",
      "Manchester City",
      "Torino",
      "Manchester United",
      "Manchester City"
    ],
    "clubIds": [
      "huddersfield-town",
      "manchester-city",
      "torino",
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دينيس_لو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Denis_Law"
  },
  {
    "id": "rodri",
    "nameAr": "رودري",
    "nameEn": "Rodri",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "وسط ميدان دفاعي",
      "en": "Defensive Midfielder"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "وسط ميدان دفاعي إسباني فاز بالكرة الذهبية عام 2024 بعد موسم استثنائي مع مانشستر سيتي ومنتخب إسبانيا الفائز بيورو 2024. انتقل إلى برشلونة صيف 2026 ويرتدي القميص رقم 16، وعُرف بذكائه التكتيكي وقدرته على التحكم في إيقاع اللعب من عمق الملعب.",
    "bioEn": "A Spanish defensive midfielder who won the 2024 Ballon d'Or after an exceptional season with Manchester City and the Spain national team, which won Euro 2024. He joined Barcelona in summer 2026 and wears the number 16 shirt, known for his tactical intelligence and ability to control the tempo of play from deep midfield.",
    "achievementsAr": [
      "الكرة الذهبية 2024",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "2024 Ballon d'Or",
      "UEFA Euro 2024 title with Spain",
      "2023 UEFA Champions League with Manchester City",
      "Multiple Premier League titles with Manchester City"
    ],
    "clubsHistoryAr": [
      "فياريال",
      "أتلتيكو مدريد",
      "مانشستر سيتي",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Villarreal",
      "Atlético Madrid",
      "Manchester City",
      "Barcelona"
    ],
    "clubIds": [
      "villarreal",
      "atletico-madrid",
      "manchester-city",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رودري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rodri"
  },
  {
    "id": "ousmane-dembele",
    "nameAr": "عثمان ديمبلي",
    "nameEn": "Ousmane Dembélé",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "جناح فرنسي فاز بالكرة الذهبية عام 2025 بعد موسم استثنائي قاد فيه باريس سان جيرمان للفوز برباعية تاريخية تضمنت أول لقب دوري أبطال أوروبا في تاريخ النادي، بعد سنوات من المعاناة مع الإصابات في برشلونة.",
    "bioEn": "A French winger who won the 2025 Ballon d'Or after an exceptional season leading Paris Saint-Germain to a historic quadruple that included the club's first-ever UEFA Champions League title, following years of injury struggles at Barcelona.",
    "achievementsAr": [
      "الكرة الذهبية 2025",
      "دوري أبطال أوروبا 2025 مع باريس سان جيرمان (أول لقب في تاريخ النادي)",
      "الرباعية المحلية والقارية مع باريس سان جيرمان",
      "لاعب أساسي في منتخب فرنسا"
    ],
    "achievementsEn": [
      "2025 Ballon d'Or",
      "2025 UEFA Champions League with Paris Saint-Germain (club's first-ever title)",
      "Domestic and European quadruple with Paris Saint-Germain",
      "Regular for the France national team"
    ],
    "clubsHistoryAr": [
      "رين",
      "بروسيا دورتموند",
      "برشلونة",
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Rennes",
      "Borussia Dortmund",
      "Barcelona",
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "rennes",
      "borussia-dortmund",
      "barcelona",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/عثمان_ديمبلي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ousmane_Dembélé"
  },
  {
    "id": "andriy-shevchenko",
    "nameAr": "أندريه شيفتشينكو",
    "nameEn": "Andriy Shevchenko",
    "nationalityAr": "أوكراني",
    "nationalityEn": "Ukrainian",
    "clubAr": "ديناموا كييف (معتزل)",
    "clubEn": "Dynamo Kyiv (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1994-2012",
    "active": false,
    "bioAr": "مهاجم أوكراني فاز بالكرة الذهبية عام 2004، وكان الهداف التاريخي لنادي ميلان لفترة طويلة، اشتهر بتوقيته المثالي في التسديد وقدرته على تسجيل مختلف أنواع الأهداف، وسجل ضربة الجزاء الفائزة في نهائي دوري الأبطال 2003.",
    "bioEn": "A Ukrainian forward who won the 2004 Ballon d'Or and was Milan's all-time top scorer for a long period, known for his perfect finishing timing and ability to score all types of goals, and scored the winning penalty in the 2003 Champions League final.",
    "achievementsAr": [
      "الكرة الذهبية 2004",
      "دوري أبطال أوروبا 2003 مع ميلان",
      "هداف الدوري الإيطالي مرتين",
      "الهداف التاريخي لنادي ديناموا كييف ومن أفضل هدافي ميلان"
    ],
    "achievementsEn": [
      "2004 Ballon d'Or",
      "2003 UEFA Champions League with Milan",
      "Serie A top scorer twice",
      "Dynamo Kyiv's all-time top scorer and among Milan's greatest scorers"
    ],
    "clubsHistoryAr": [
      "ديناموا كييف",
      "ميلان",
      "تشيلسي",
      "ميلان",
      "ديناموا كييف"
    ],
    "clubsHistoryEn": [
      "Dynamo Kyiv",
      "Milan",
      "Chelsea",
      "Milan",
      "Dynamo Kyiv"
    ],
    "clubIds": [
      "ac-milan",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أندريه_شيفتشينكو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Andriy_Shevchenko"
  },
  {
    "id": "pavel-nedved",
    "nameAr": "بافيل نيدفيد",
    "nameEn": "Pavel Nedvěd",
    "nationalityAr": "تشيكي",
    "nationalityEn": "Czech",
    "clubAr": "يوفنتوس (معتزل)",
    "clubEn": "Juventus (retired)",
    "clubId": "juventus",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1990-2009",
    "active": false,
    "bioAr": "وسط ميدان تشيكي فاز بالكرة الذهبية عام 2003، عُرف بطاقته البدنية العالية وقدرته على الجري لمسافات طويلة طوال المباراة، وكان لاعبًا أساسيًا في يوفنتوس خلال إحدى أنجح فتراته، وقاد التشيك لنصف نهائي يورو 1996 و2004.",
    "bioEn": "A Czech midfielder who won the 2003 Ballon d'Or, known for his exceptional stamina and ability to cover long distances throughout matches, he was a key player for Juventus during one of its most successful periods, and helped Czech Republic reach the semi-finals of Euro 1996 and 2004.",
    "achievementsAr": [
      "الكرة الذهبية 2003",
      "لقبا دوري إيطالي مع يوفنتوس",
      "الوصول لنهائي دوري أبطال أوروبا 2003 مع يوفنتوس",
      "الوصول لنصف نهائي يورو 1996 مع التشيك"
    ],
    "achievementsEn": [
      "2003 Ballon d'Or",
      "Serie A titles with Juventus",
      "Runner-up in the 2003 UEFA Champions League final with Juventus",
      "Semi-finalist at Euro 1996 with the Czech Republic"
    ],
    "clubsHistoryAr": [
      "دوكلا براغ",
      "سبارتا براغ",
      "لاتسيو",
      "يوفنتوس"
    ],
    "clubsHistoryEn": [
      "Dukla Prague",
      "Sparta Prague",
      "Lazio",
      "Juventus"
    ],
    "clubIds": [
      "lazio",
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بافيل_نيدفيد",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pavel_Nedvěd"
  },
  {
    "id": "hristo-stoichkov",
    "nameAr": "هريستو ستويتشكوف",
    "nameEn": "Hristo Stoichkov",
    "nationalityAr": "بلغاري",
    "nationalityEn": "Bulgarian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1986-2003",
    "active": false,
    "bioAr": "مهاجم بلغاري ناري الطباع فاز بالكرة الذهبية عام 1994 بعد موسم قاد فيه بلغاريا لمفاجأة الوصول للمركز الرابع في كأس العالم 1994 وتشارك في هدافية البطولة، وكان جزءًا من هجوم برشلونة 'دريم تيم' الأسطوري بقيادة كرويف.",
    "bioEn": "A fiery Bulgarian forward who won the 1994 Ballon d'Or after leading Bulgaria to a surprise fourth-place finish at the 1994 World Cup while sharing the tournament's top scorer award, and was part of Barcelona's legendary 'Dream Team' attack under Johan Cruyff.",
    "achievementsAr": [
      "الكرة الذهبية 1994",
      "الهداف المشارك لكأس العالم 1994",
      "دوري أبطال أوروبا 1992 مع برشلونة",
      "عدة ألقاب دوري إسباني مع برشلونة"
    ],
    "achievementsEn": [
      "1994 Ballon d'Or",
      "Joint top scorer at the 1994 World Cup",
      "1992 European Cup with Barcelona",
      "Multiple La Liga titles with Barcelona"
    ],
    "clubsHistoryAr": [
      "حسكوفو",
      "سي إس كا صوفيا",
      "برشلونة",
      "بارما",
      "الدوري الأمريكي",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Hebros Harmanli",
      "CSKA Sofia",
      "Barcelona",
      "Parma",
      "MLS clubs",
      "Barcelona"
    ],
    "clubIds": [
      "barcelona",
      "parma"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/هريستو_ستويتشكوف",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hristo_Stoichkov"
  },
  {
    "id": "jean-pierre-papin",
    "nameAr": "جان بيير بابان",
    "nameEn": "Jean-Pierre Papin",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1980-2004",
    "active": false,
    "bioAr": "مهاجم فرنسي فاز بالكرة الذهبية عام 1991، وكان هداف الدوري الفرنسي 5 مواسم متتالية مع مارسيليا، اشتهر بتسديداته الهوائية القوية المعروفة باسم 'بابانادا'، وقاد مارسيليا لنهائي كأس أوروبا 1991.",
    "bioEn": "A French forward who won the 1991 Ballon d'Or and was Ligue 1 top scorer for five consecutive seasons with Marseille, known for his powerful aerial strikes nicknamed the 'Papinade', and led Marseille to the 1991 European Cup final.",
    "achievementsAr": [
      "الكرة الذهبية 1991",
      "هداف الدوري الفرنسي 5 مواسم متتالية",
      "الوصول لنهائي كأس أوروبا 1991 مع مارسيليا",
      "عدة ألقاب دوري فرنسي مع مارسيليا"
    ],
    "achievementsEn": [
      "1991 Ballon d'Or",
      "Ligue 1 top scorer 5 consecutive seasons",
      "Runner-up in the 1991 European Cup final with Marseille",
      "Multiple Ligue 1 titles with Marseille"
    ],
    "clubsHistoryAr": [
      "فالنسيان",
      "بروج",
      "مارسيليا",
      "ميلان",
      "بايرن ميونخ",
      "بوردو"
    ],
    "clubsHistoryEn": [
      "Valenciennes",
      "Club Brugge",
      "Marseille",
      "Milan",
      "Bayern Munich",
      "Bordeaux"
    ],
    "clubIds": [
      "club-brugge",
      "marseille",
      "ac-milan",
      "bayern-munich",
      "bordeaux"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جان-بيير_بابان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jean-Pierre_Papin"
  },
  {
    "id": "karl-heinz-rummenigge",
    "nameAr": "كارل هاينتس رومينيجه",
    "nameEn": "Karl-Heinz Rummenigge",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1974-1989",
    "active": false,
    "bioAr": "مهاجم ألماني فاز بالكرة الذهبية مرتين متتاليتين (1980، 1981)، كان نجم بايرن ميونخ الأبرز في أواخر السبعينيات، وقاد ألمانيا الغربية لنهائيات كأس عالم 1982 و1986، وأصبح لاحقًا رئيسًا لنادي بايرن ميونخ.",
    "bioEn": "A German forward who won consecutive Ballon d'Or awards (1980, 1981), he was Bayern Munich's standout star in the late 1970s, led West Germany to the 1982 and 1986 World Cup finals, and later became president of Bayern Munich.",
    "achievementsAr": [
      "جائزتا كرة ذهبية متتاليتان (1980، 1981)",
      "الوصول لنهائي كأس العالم مرتين مع ألمانيا الغربية (1982، 1986)",
      "دوري أبطال أوروبا مرتين مع بايرن ميونخ",
      "أصبح رئيسًا لنادي بايرن ميونخ لاحقًا"
    ],
    "achievementsEn": [
      "2 consecutive Ballon d'Or awards (1980, 1981)",
      "Runner-up at the World Cup twice with West Germany (1982, 1986)",
      "European Cup twice with Bayern Munich",
      "Later became president of Bayern Munich"
    ],
    "clubsHistoryAr": [
      "بايرن ميونخ",
      "إنتر ميلان",
      "سرفيت"
    ],
    "clubsHistoryEn": [
      "Bayern Munich",
      "Inter Milan",
      "Servette"
    ],
    "clubIds": [
      "bayern-munich",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كارل-هاينتس_رومينيجه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Karl-Heinz_Rummenigge"
  },
  {
    "id": "kevin-keegan",
    "nameAr": "كيفن كيغان",
    "nameEn": "Kevin Keegan",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1968-1984",
    "active": false,
    "bioAr": "مهاجم إنجليزي فاز بالكرة الذهبية مرتين متتاليتين (1978، 1979) وهو أول إنجليزي يحقق ذلك، كان نجم ليفربول في السبعينيات قبل انتقاله إلى هامبورغ الألماني حيث واصل تألقه وفوزه بالجائزة.",
    "bioEn": "An English forward who won consecutive Ballon d'Or awards (1978, 1979), the first Englishman to do so, he was Liverpool's star player in the 1970s before moving to German club Hamburg where he continued his brilliant form and award-winning success.",
    "achievementsAr": [
      "جائزتا كرة ذهبية متتاليتان (1978، 1979)",
      "3 ألقاب دوري إنجليزي مع ليفربول",
      "كأس أوروبا مرتين مع ليفربول",
      "لقب الدوري الألماني مع هامبورغ"
    ],
    "achievementsEn": [
      "2 consecutive Ballon d'Or awards (1978, 1979)",
      "3 English league titles with Liverpool",
      "European Cup twice with Liverpool",
      "Bundesliga title with Hamburg"
    ],
    "clubsHistoryAr": [
      "سكانثورب يونايتد",
      "ليفربول",
      "هامبورغ",
      "ساوثهامبتون",
      "نيوكاسل يونايتد"
    ],
    "clubsHistoryEn": [
      "Scunthorpe United",
      "Liverpool",
      "Hamburg",
      "Southampton",
      "Newcastle United"
    ],
    "clubIds": [
      "liverpool",
      "southampton",
      "newcastle-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كيفن_كيغان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kevin_Keegan"
  },
  {
    "id": "paolo-rossi",
    "nameAr": "باولو روسي",
    "nameEn": "Paolo Rossi",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1973-1987",
    "active": false,
    "bioAr": "مهاجم إيطالي فاز بالكرة الذهبية عام 1982 بعد قيادته إيطاليا للفوز بكأس العالم 1982 بأداء أسطوري تُوّج بجائزة الحذاء الذهبي والكرة الذهبية للبطولة في نفس البطولة، بعد عودته من إيقاف بسبب فضيحة تلاعب في المباريات. توفي عام 2020.",
    "bioEn": "An Italian forward who won the 1982 Ballon d'Or after leading Italy to the 1982 World Cup title with a legendary performance that earned him both the tournament's Golden Boot and Golden Ball, following his return from a match-fixing suspension. He passed away in 2020.",
    "achievementsAr": [
      "بطولة كأس العالم 1982 مع إيطاليا",
      "الحذاء الذهبي والكرة الذهبية لبطولة كأس العالم 1982",
      "الكرة الذهبية 1982",
      "لقب الدوري الإيطالي مع يوفنتوس"
    ],
    "achievementsEn": [
      "1982 FIFA World Cup title with Italy",
      "Golden Boot and Golden Ball of the 1982 World Cup",
      "1982 Ballon d'Or",
      "Serie A title with Juventus"
    ],
    "clubsHistoryAr": [
      "يوفنتوس",
      "كومو (إعارة)",
      "فيتشنزا (إعارة)",
      "بيروجا",
      "يوفنتوس",
      "ميلان",
      "فيرونا"
    ],
    "clubsHistoryEn": [
      "Juventus",
      "Como (loan)",
      "Vicenza (loan)",
      "Perugia",
      "Juventus",
      "Milan",
      "Verona"
    ],
    "clubIds": [
      "juventus",
      "como",
      "ac-milan",
      "hellas-verona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/باولو_روسي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paolo_Rossi"
  },
  {
    "id": "gerd-muller",
    "nameAr": "غيرد مولر",
    "nameEn": "Gerd Müller",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1963-1981",
    "active": false,
    "bioAr": "مهاجم ألماني يُلقب بـ'القاصف الصغير'، يُعد أحد أعظم الهدافين في تاريخ كرة القدم بأرقام تهديفية استثنائية، فاز بالكرة الذهبية عام 1970، وسجل هدف الفوز في نهائي كأس العالم 1974 مع ألمانيا الغربية. توفي عام 2021.",
    "bioEn": "A German forward nicknamed 'Der Bomber', regarded as one of the greatest goalscorers in football history with extraordinary scoring records, he won the 1970 Ballon d'Or and scored the winning goal in the 1974 World Cup final for West Germany. He passed away in 2021.",
    "achievementsAr": [
      "بطولة كأس العالم 1974 مع ألمانيا الغربية (هدف الفوز في النهائي)",
      "الكرة الذهبية 1970",
      "بطولة أمم أوروبا 1972 مع ألمانيا الغربية",
      "3 ألقاب كأس أوروبا مع بايرن ميونخ"
    ],
    "achievementsEn": [
      "1974 World Cup title with West Germany (scored the final's winning goal)",
      "1970 Ballon d'Or",
      "UEFA Euro 1972 title with West Germany",
      "3 European Cup titles with Bayern Munich"
    ],
    "clubsHistoryAr": [
      "بايرن ميونخ",
      "فورت لاودرديل سترايكرز"
    ],
    "clubsHistoryEn": [
      "Bayern Munich",
      "Fort Lauderdale Strikers"
    ],
    "clubIds": [
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غيرد_مولر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gerd_Müller"
  },
  {
    "id": "lev-yashin",
    "nameAr": "ليف ياشين",
    "nameEn": "Lev Yashin",
    "nationalityAr": "سوفيتي",
    "nationalityEn": "Soviet",
    "clubAr": "دينامو موسكو (معتزل)",
    "clubEn": "Dynamo Moscow (retired)",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1950-1970",
    "active": false,
    "bioAr": "حارس مرمى سوفيتي يُلقب بـ'العنكبوت الأسود'، وهو الحارس الوحيد في التاريخ الذي فاز بالكرة الذهبية (1963)، ويُعد أحد أعظم حراس المرمى على الإطلاق، اشتهر بردوده الاستثنائية وقيادته لخط دفاع فريقه من عمق المرمى. توفي عام 1990.",
    "bioEn": "A Soviet goalkeeper nicknamed the 'Black Spider', the only goalkeeper in history to win the Ballon d'Or (1963), regarded as one of the greatest goalkeepers of all time, known for his extraordinary reflexes and for organizing his team's defense from deep. He passed away in 1990.",
    "achievementsAr": [
      "الكرة الذهبية 1963 (الحارس الوحيد الفائز بها في التاريخ)",
      "بطولة أمم أوروبا 1960 مع الاتحاد السوفيتي",
      "5 ألقاب دوري سوفيتي مع دينامو موسكو",
      "سُمّيت جائزة أفضل حارس مرمى في كأس العالم باسمه (جائزة ياشين)"
    ],
    "achievementsEn": [
      "1963 Ballon d'Or (the only goalkeeper ever to win it)",
      "1960 UEFA European Championship with the Soviet Union",
      "5 Soviet league titles with Dynamo Moscow",
      "FIFA's World Cup best goalkeeper award is named after him (the Yashin Award)"
    ],
    "clubsHistoryAr": [
      "دينامو موسكو"
    ],
    "clubsHistoryEn": [
      "Dynamo Moscow"
    ],
    "clubIds": [],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ليف_ياشين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Lev_Yashin"
  },
  {
    "id": "ruud-gullit",
    "nameAr": "رود خوليت",
    "nameEn": "Ruud Gullit",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان هجومي / مهاجم",
      "en": "Attacking Midfielder / Forward"
    },
    "era": "1978-1998",
    "active": false,
    "bioAr": "لاعب هولندي متعدد المراكز فاز بالكرة الذهبية عام 1987، اشتهر بشعره المجدول المميز وقدرته على اللعب كمهاجم أو وسط ميدان أو حتى مدافع، وكان قائد هولندا الفائزة بلقب أمم أوروبا 1988، وشكّل مع فان باستن وريكارد ثلاثيًا هولنديًا أسطوريًا في ميلان.",
    "bioEn": "A versatile Dutch player who won the 1987 Ballon d'Or, known for his distinctive dreadlocks and ability to play as a forward, midfielder, or even a defender, he captained the Netherlands to the Euro 1988 title, and formed a legendary Dutch trio with Van Basten and Rijkaard at Milan.",
    "achievementsAr": [
      "الكرة الذهبية 1987",
      "بطولة أمم أوروبا 1988 مع هولندا (كقائد)",
      "دوري أبطال أوروبا مرتين مع ميلان",
      "أفضل لاعب في العالم من الفيفا 1987 (أول فائز بالجائزة)"
    ],
    "achievementsEn": [
      "1987 Ballon d'Or",
      "UEFA Euro 1988 title with Netherlands (as captain)",
      "European Cup twice with Milan",
      "1987 FIFA World Player of the Year (inaugural winner)"
    ],
    "clubsHistoryAr": [
      "هارلم",
      "فيينورد",
      "بي إس في آيندهوفن",
      "ميلان",
      "سامبدوريا",
      "ميلان",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Haarlem",
      "Feyenoord",
      "PSV Eindhoven",
      "Milan",
      "Sampdoria",
      "Milan",
      "Chelsea"
    ],
    "clubIds": [
      "feyenoord",
      "psv-eindhoven",
      "ac-milan",
      "sampdoria",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رود_خوليت",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ruud_Gullit"
  },
  {
    "id": "michael-owen",
    "nameAr": "مايكل أوين",
    "nameEn": "Michael Owen",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "ستوك سيتي (معتزل)",
    "clubEn": "Stoke City (retired)",
    "clubId": "stoke-city",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1996-2013",
    "active": false,
    "bioAr": "مهاجم إنجليزي سريع فاز بالكرة الذهبية عام 2001، اشتهر بهدفه الفردي الشهير ضد الأرجنتين في كأس العالم 1998 وهو في الثامنة عشرة من عمره، وكان الهداف الأبرز لليفربول قبل انتقاله إلى ريال مدريد.",
    "bioEn": "A fast English forward who won the 2001 Ballon d'Or, famous for his stunning solo goal against Argentina at the 1998 World Cup at age 18, and was Liverpool's standout scorer before moving to Real Madrid.",
    "achievementsAr": [
      "الكرة الذهبية 2001",
      "الحذاء الذهبي الأوروبي 2001",
      "كأس الاتحاد الأوروبي 2001 مع ليفربول",
      "هداف الدوري الإنجليزي الممتاز مرتين"
    ],
    "achievementsEn": [
      "2001 Ballon d'Or",
      "2001 European Golden Shoe",
      "2001 UEFA Cup with Liverpool",
      "Premier League top scorer twice"
    ],
    "clubsHistoryAr": [
      "ليفربول",
      "ريال مدريد",
      "نيوكاسل يونايتد",
      "مانشستر يونايتد",
      "ستوك سيتي"
    ],
    "clubsHistoryEn": [
      "Liverpool",
      "Real Madrid",
      "Newcastle United",
      "Manchester United",
      "Stoke City"
    ],
    "clubIds": [
      "liverpool",
      "real-madrid",
      "newcastle-united",
      "manchester-united",
      "stoke-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مايكل_أوين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Michael_Owen"
  },
  {
    "id": "stanley-matthews",
    "nameAr": "ستانلي ماثيوز",
    "nameEn": "Stanley Matthews",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "ستوك سيتي (معتزل)",
    "clubEn": "Stoke City (retired)",
    "clubId": "stoke-city",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "1932-1965",
    "active": false,
    "bioAr": "جناح إنجليزي يُلقب بـ'الساحر السحري'، وهو أول فائز بجائزة الكرة الذهبية في تاريخها عام 1956، ويُعد أحد أوائل نجوم كرة القدم الحقيقيين، استمر في اللعب على أعلى مستوى حتى بلغ الخمسين من عمره تقريبًا. توفي عام 2000.",
    "bioEn": "An English winger nicknamed the 'Wizard of Dribble', the first-ever winner of the Ballon d'Or in 1956, and regarded as one of football's earliest true stars, he continued playing at the top level until nearly age 50. He passed away in 2000.",
    "achievementsAr": [
      "الكرة الذهبية 1956 (أول فائز في تاريخ الجائزة)",
      "كأس الاتحاد الإنجليزي 1953 مع بلاكبول (نهائي ماثيوز الشهير)",
      "أول لاعب يُمنح لقب فارس في كرة القدم الإنجليزية",
      "لاعب العام في إنجلترا مرتين"
    ],
    "achievementsEn": [
      "1956 Ballon d'Or (the award's inaugural winner)",
      "1953 FA Cup with Blackpool (the famous 'Matthews Final')",
      "First footballer to be knighted while still playing in England",
      "English Footballer of the Year twice"
    ],
    "clubsHistoryAr": [
      "ستوك سيتي",
      "بلاكبول",
      "ستوك سيتي"
    ],
    "clubsHistoryEn": [
      "Stoke City",
      "Blackpool",
      "Stoke City"
    ],
    "clubIds": [
      "stoke-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ستانلي_ماثيوز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Stanley_Matthews"
  },
  {
    "id": "omar-sivori",
    "nameAr": "أومار سيفوري",
    "nameEn": "Omar Sívori",
    "nationalityAr": "أرجنتيني إيطالي",
    "nationalityEn": "Argentine-Italian",
    "clubAr": "نابولي (معتزل)",
    "clubEn": "Napoli (retired)",
    "clubId": "napoli",
    "position": {
      "ar": "مهاجم / صانع ألعاب",
      "en": "Forward / Playmaker"
    },
    "era": "1952-1969",
    "active": false,
    "bioAr": "لاعب أرجنتيني الأصل حصل على الجنسية الإيطالية ليصبح أول لاعب من أصل غير أوروبي يفوز بالكرة الذهبية عام 1961، اشتهر بمهاراته الفردية ووقاحته الفنية، وكان نجم يوفنتوس الأبرز في نهاية الخمسينيات وبداية الستينيات. توفي عام 2005.",
    "bioEn": "An Argentine-born player who took Italian citizenship, becoming the first player of non-European origin to win the Ballon d'Or in 1961, known for his individual flair and technical audacity, and was Juventus' standout star in the late 1950s and early 1960s. He passed away in 2005.",
    "achievementsAr": [
      "الكرة الذهبية 1961",
      "3 ألقاب دوري إيطالي مع يوفنتوس",
      "هداف الدوري الإيطالي مرتين",
      "بطولة كوبا أمريكا 1957 مع الأرجنتين"
    ],
    "achievementsEn": [
      "1961 Ballon d'Or",
      "3 Serie A titles with Juventus",
      "Serie A top scorer twice",
      "1957 Copa América title with Argentina"
    ],
    "clubsHistoryAr": [
      "ريفر بليت",
      "يوفنتوس",
      "نابولي"
    ],
    "clubsHistoryEn": [
      "River Plate",
      "Juventus",
      "Napoli"
    ],
    "clubIds": [
      "river-plate",
      "juventus",
      "napoli"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أومار_سيفوري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Omar_Sívori"
  },
  {
    "id": "josef-masopust",
    "nameAr": "يوزيف ماسوبوست",
    "nameEn": "Josef Masopust",
    "nationalityAr": "تشيكوسلوفاكي",
    "nationalityEn": "Czechoslovak",
    "clubAr": "دوكلا براغ (معتزل)",
    "clubEn": "Dukla Prague (retired)",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1950-1968",
    "active": false,
    "bioAr": "وسط ميدان تشيكوسلوفاكي فاز بالكرة الذهبية عام 1962، وقاد منتخب بلاده للوصول إلى نهائي كأس العالم 1962 أمام البرازيل وسجل هدف التقدم في النهائي، ويُعد أحد أعظم لاعبي كرة القدم التشيكوسلوفاكية في التاريخ. توفي عام 2015.",
    "bioEn": "A Czechoslovak midfielder who won the 1962 Ballon d'Or, leading his national team to the 1962 World Cup final against Brazil where he scored the opening goal, and is regarded as one of the greatest Czechoslovak footballers in history. He passed away in 2015.",
    "achievementsAr": [
      "الكرة الذهبية 1962",
      "الوصول لنهائي كأس العالم 1962 مع تشيكوسلوفاكيا (هدف التقدم في النهائي)",
      "8 ألقاب دوري تشيكوسلوفاكي مع دوكلا براغ",
      "يُعد أفضل لاعب تشيكوسلوفاكي في القرن العشرين"
    ],
    "achievementsEn": [
      "1962 Ballon d'Or",
      "Runner-up at the 1962 World Cup with Czechoslovakia (scored the opening goal in the final)",
      "8 Czechoslovak league titles with Dukla Prague",
      "Regarded as Czechoslovakia's Golden Player of the 20th century"
    ],
    "clubsHistoryAr": [
      "دوكلا براغ",
      "كروسينغ مولينبيك"
    ],
    "clubsHistoryEn": [
      "Dukla Prague",
      "Crossing Molenbeek"
    ],
    "clubIds": [],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/يوزيف_ماسوبوست",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Josef_Masopust"
  },
  {
    "id": "florian-albert",
    "nameAr": "فلوريان ألبرت",
    "nameEn": "Flórián Albert",
    "nationalityAr": "مجري",
    "nationalityEn": "Hungarian",
    "clubAr": "فيرينتس فاروش (معتزل)",
    "clubEn": "Ferencváros (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1958-1974",
    "active": false,
    "bioAr": "مهاجم مجري فاز بالكرة الذهبية عام 1967، اشتهر بأناقته الفنية العالية وقدرته على المراوغة، وكان الهداف التاريخي لنادي فيرينتس فاروش المجري، ويُعد أحد أفضل لاعبي كرة القدم المجرية في التاريخ بعد بوشكاش. توفي عام 2011.",
    "bioEn": "A Hungarian forward who won the 1967 Ballon d'Or, known for his elegant technique and dribbling ability, he was the all-time top scorer for Hungarian club Ferencváros, and is regarded as one of Hungary's greatest footballers after Puskás. He passed away in 2011.",
    "achievementsAr": [
      "الكرة الذهبية 1967",
      "هداف كأس العالم 1962",
      "الهداف التاريخي لنادي فيرينتس فاروش",
      "كأس الاتحاد الأوروبي 1965 مع فيرينتس فاروش"
    ],
    "achievementsEn": [
      "1967 Ballon d'Or",
      "Top scorer at the 1962 World Cup",
      "Ferencváros' all-time top scorer",
      "1965 Inter-Cities Fairs Cup with Ferencváros"
    ],
    "clubsHistoryAr": [
      "فيرينتس فاروش"
    ],
    "clubsHistoryEn": [
      "Ferencváros"
    ],
    "clubIds": [],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فلوريان_ألبرت",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Flórián_Albert"
  },
  {
    "id": "gianni-rivera",
    "nameAr": "جياني ريفيرا",
    "nameEn": "Gianni Rivera",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "ميلان (معتزل)",
    "clubEn": "Milan (retired)",
    "clubId": "ac-milan",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Playmaker"
    },
    "era": "1959-1979",
    "active": false,
    "bioAr": "صانع ألعاب إيطالي فاز بالكرة الذهبية عام 1969، قضى مسيرته بأكملها تقريبًا مع نادي ميلان وقاده للفوز بلقبي دوري أبطال أوروبا، اشتهر برؤيته الفنية العالية ودقة تمريراته، ولُقّب بـ'الفتى الذهبي' لظهوره المبكر مع الفريق الأول.",
    "bioEn": "An Italian playmaker who won the 1969 Ballon d'Or, spending almost his entire career at Milan and leading the club to two European Cup titles, known for his exceptional vision and passing precision, nicknamed the 'Golden Boy' for his early first-team breakthrough.",
    "achievementsAr": [
      "الكرة الذهبية 1969",
      "2 لقب كأس أوروبا مع ميلان",
      "3 ألقاب دوري إيطالي مع ميلان",
      "الوصول لنهائي كأس العالم 1970 مع إيطاليا"
    ],
    "achievementsEn": [
      "1969 Ballon d'Or",
      "2 European Cup titles with Milan",
      "3 Serie A titles with Milan",
      "Runner-up at the 1970 World Cup with Italy"
    ],
    "clubsHistoryAr": [
      "ألساندريا",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Alessandria",
      "Milan"
    ],
    "clubIds": [
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جياني_ريفيرا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gianni_Rivera"
  },
  {
    "id": "oleg-blokhin",
    "nameAr": "أوليغ بلوخين",
    "nameEn": "Oleg Blokhin",
    "nationalityAr": "سوفيتي",
    "nationalityEn": "Soviet",
    "clubAr": "فورفيرتس شتاينفيلد (معتزل)",
    "clubEn": "Vorwärts Steyr (retired)",
    "clubId": null,
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "1969-1990",
    "active": false,
    "bioAr": "جناح سوفيتي سريع فاز بالكرة الذهبية عام 1975، وهو الهداف التاريخي لمنتخب الاتحاد السوفيتي ونادي ديناموا كييف، قاد ديناموا كييف للفوز بكأس الكؤوس الأوروبية في نفس العام الذي فاز فيه بالجائزة.",
    "bioEn": "A fast Soviet winger who won the 1975 Ballon d'Or, the all-time top scorer for both the Soviet Union national team and Dynamo Kyiv, he led Dynamo Kyiv to the European Cup Winners' Cup title the same year he won the award.",
    "achievementsAr": [
      "الكرة الذهبية 1975",
      "كأس الكؤوس الأوروبية 1975 مع ديناموا كييف",
      "الهداف التاريخي لمنتخب الاتحاد السوفيتي",
      "8 ألقاب دوري سوفيتي مع ديناموا كييف"
    ],
    "achievementsEn": [
      "1975 Ballon d'Or",
      "1975 European Cup Winners' Cup with Dynamo Kyiv",
      "All-time top scorer for the Soviet Union national team",
      "8 Soviet league titles with Dynamo Kyiv"
    ],
    "clubsHistoryAr": [
      "ديناموا كييف",
      "فورفيرتس شتاير"
    ],
    "clubsHistoryEn": [
      "Dynamo Kyiv",
      "Vorwärts Steyr"
    ],
    "clubIds": [],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أوليغ_بلوخين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Oleh_Blokhin"
  },
  {
    "id": "allan-simonsen",
    "nameAr": "ألان سيمونسن",
    "nameEn": "Allan Simonsen",
    "nationalityAr": "دنماركي",
    "nationalityEn": "Danish",
    "clubAr": "فيجله (معتزل)",
    "clubEn": "Vejle (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1970-1989",
    "active": false,
    "bioAr": "مهاجم دنماركي صغير الحجم لكن سريع وفعال، فاز بالكرة الذهبية عام 1977 وهو أول دنماركي يحقق ذلك، ساهم في فوز بوروسيا مونشنغلادباخ الألماني بعدة ألقاب دوري وكأس اتحاد أوروبي قبل انتقاله إلى برشلونة.",
    "bioEn": "A small but fast and effective Danish forward who won the 1977 Ballon d'Or, becoming the first Dane to do so, he helped Borussia Mönchengladbach win multiple Bundesliga titles and UEFA Cups before moving to Barcelona.",
    "achievementsAr": [
      "الكرة الذهبية 1977 (أول دنماركي يفوز بها)",
      "3 ألقاب دوري ألماني مع بوروسيا مونشنغلادباخ",
      "كأسا اتحاد أوروبي مع بوروسيا مونشنغلادباخ",
      "كأس ملك إسبانيا مع برشلونة"
    ],
    "achievementsEn": [
      "1977 Ballon d'Or (first Dane to win it)",
      "3 Bundesliga titles with Borussia Mönchengladbach",
      "2 UEFA Cups with Borussia Mönchengladbach",
      "Copa del Rey with Barcelona"
    ],
    "clubsHistoryAr": [
      "فيجله",
      "بوروسيا مونشنغلادباخ",
      "برشلونة",
      "بوروسيا مونشنغلادباخ",
      "فيجله"
    ],
    "clubsHistoryEn": [
      "Vejle",
      "Borussia Mönchengladbach",
      "Barcelona",
      "Borussia Mönchengladbach",
      "Vejle"
    ],
    "clubIds": [
      "borussia-monchengladbach",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ألان_سيمونسن",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Allan_Simonsen"
  },
  {
    "id": "igor-belanov",
    "nameAr": "إيغور بيلانوف",
    "nameEn": "Igor Belanov",
    "nationalityAr": "سوفيتي",
    "nationalityEn": "Soviet",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1978-1996",
    "active": false,
    "bioAr": "مهاجم سوفيتي فاز بالكرة الذهبية عام 1986 بعد أداء مميز مع ديناموا كييف ومنتخب الاتحاد السوفيتي في كأس العالم 1986، حيث سجل هاتريك أسطوريًا أمام بلجيكا في دور الستة عشر رغم خسارة فريقه.",
    "bioEn": "A Soviet forward who won the 1986 Ballon d'Or after a standout performance with Dynamo Kyiv and the Soviet Union at the 1986 World Cup, where he scored a legendary hat-trick against Belgium in the round of 16 despite his team's elimination.",
    "achievementsAr": [
      "الكرة الذهبية 1986",
      "كأس الكؤوس الأوروبية 1986 مع ديناموا كييف",
      "هاتريك أسطوري أمام بلجيكا في كأس العالم 1986",
      "لقبا دوري سوفيتي مع ديناموا كييف"
    ],
    "achievementsEn": [
      "1986 Ballon d'Or",
      "1986 European Cup Winners' Cup with Dynamo Kyiv",
      "Legendary hat-trick against Belgium at the 1986 World Cup",
      "Soviet league titles with Dynamo Kyiv"
    ],
    "clubsHistoryAr": [
      "تشيرنوموريتس أوديسا",
      "ديناموا كييف",
      "بوروسيا مونشنغلادباخ",
      "آينتراخت براونشفايغ"
    ],
    "clubsHistoryEn": [
      "Chornomorets Odesa",
      "Dynamo Kyiv",
      "Borussia Mönchengladbach",
      "Eintracht Braunschweig"
    ],
    "clubIds": [
      "borussia-monchengladbach"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إيغور_بيلانوف",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Igor_Belanov"
  },
  {
    "id": "oliver-kahn",
    "nameAr": "أوليفر كان",
    "nameEn": "Oliver Kahn",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بايرن ميونخ (معتزل)",
    "clubEn": "Bayern Munich (retired)",
    "clubId": "bayern-munich",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1987-2008",
    "active": false,
    "bioAr": "حارس مرمى ألماني يُلقب بـ'العملاق'، يُعد أحد أعظم حراس المرمى في التاريخ وأول وحيد حارس مرمى يفوز بجائزة الكرة الذهبية لأفضل لاعب في كأس العالم (2002) رغم خسارة فريقه بالنهائي، اشتهر بشخصيته القيادية القوية وردوده الاستثنائية.",
    "bioEn": "A German goalkeeper nicknamed 'Der Titan', regarded as one of the greatest goalkeepers in history and the only goalkeeper to win the World Cup Golden Ball (2002) despite his team losing the final, known for his powerful leadership personality and extraordinary reflexes.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2001 مع بايرن ميونخ",
      "الكرة الذهبية لأفضل لاعب في كأس العالم 2002 (حارس مرمى)",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "أفضل حارس مرمى في العالم من الفيفا 3 مرات"
    ],
    "achievementsEn": [
      "2001 UEFA Champions League with Bayern Munich",
      "2002 World Cup Golden Ball (as a goalkeeper)",
      "8 Bundesliga titles with Bayern Munich",
      "FIFA World Goalkeeper of the Year 3 times"
    ],
    "clubsHistoryAr": [
      "كارلسروه",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Karlsruher SC",
      "Bayern Munich"
    ],
    "clubIds": [
      "karlsruher-sc",
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أوليفر_كان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Oliver_Kahn"
  },
  {
    "id": "philipp-lahm",
    "nameAr": "فيليب لام",
    "nameEn": "Philipp Lahm",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بايرن ميونخ (معتزل)",
    "clubEn": "Bayern Munich (retired)",
    "clubId": "bayern-munich",
    "position": {
      "ar": "مدافع / وسط ميدان",
      "en": "Defender / Midfielder"
    },
    "era": "2002-2017",
    "active": false,
    "bioAr": "مدافع ألماني قضى مسيرته بأكملها مع بايرن ميونخ وكان قائده وقائد منتخب ألمانيا، عُرف بذكائه التكتيكي وقدرته على اللعب في أكثر من مركز بكفاءة عالية، قاد ألمانيا للفوز بكأس العالم 2014.",
    "bioEn": "A German defender who spent his entire career at Bayern Munich and captained both the club and the national team, known for his tactical intelligence and ability to play multiple positions at a high level, and captained Germany to the 2014 World Cup title.",
    "achievementsAr": [
      "بطولة كأس العالم 2014 مع ألمانيا (كقائد)",
      "دوري أبطال أوروبا 2013 مع بايرن ميونخ",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "قائد بايرن ميونخ لسنوات طويلة"
    ],
    "achievementsEn": [
      "2014 FIFA World Cup title with Germany (as captain)",
      "2013 UEFA Champions League with Bayern Munich",
      "8 Bundesliga titles with Bayern Munich",
      "Bayern Munich captain for many years"
    ],
    "clubsHistoryAr": [
      "بايرن ميونخ",
      "شتوتغارت (إعارة)",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Bayern Munich",
      "Stuttgart (loan)",
      "Bayern Munich"
    ],
    "clubIds": [
      "bayern-munich",
      "vfb-stuttgart"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فيليب_لام",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Philipp_Lahm"
  },
  {
    "id": "bastian-schweinsteiger",
    "nameAr": "باستيان شفاينشتايغر",
    "nameEn": "Bastian Schweinsteiger",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "شيكاغو فاير (معتزل)",
    "clubEn": "Chicago Fire (retired)",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1998-2019",
    "active": false,
    "bioAr": "وسط ميدان ألماني قضى معظم مسيرته مع بايرن ميونخ وكان قائده لسنوات، عُرف بروحه القتالية وقدرته على التحكم في إيقاع اللعب، وقاد ألمانيا للفوز بكأس العالم 2014 وحصل على جائزة أفضل لاعب في النهائي.",
    "bioEn": "A German midfielder who spent most of his career at Bayern Munich and captained the club for years, known for his combative spirit and ability to control the game's tempo, and helped Germany win the 2014 World Cup, earning Man of the Match honours in the final.",
    "achievementsAr": [
      "بطولة كأس العالم 2014 مع ألمانيا (أفضل لاعب في النهائي)",
      "دوري أبطال أوروبا 2013 مع بايرن ميونخ",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "قائد بايرن ميونخ ومنتخب ألمانيا"
    ],
    "achievementsEn": [
      "2014 FIFA World Cup title with Germany (final Man of the Match)",
      "2013 UEFA Champions League with Bayern Munich",
      "8 Bundesliga titles with Bayern Munich",
      "Captain of both Bayern Munich and the Germany national team"
    ],
    "clubsHistoryAr": [
      "بايرن ميونخ",
      "مانشستر يونايتد",
      "شيكاغو فاير"
    ],
    "clubsHistoryEn": [
      "Bayern Munich",
      "Manchester United",
      "Chicago Fire"
    ],
    "clubIds": [
      "bayern-munich",
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/باستيان_شفاينشتايغر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bastian_Schweinsteiger"
  },
  {
    "id": "thomas-muller",
    "nameAr": "توماس مولر",
    "nameEn": "Thomas Müller",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "فانكوفر وايت كابس",
    "clubEn": "Vancouver Whitecaps",
    "clubId": null,
    "position": {
      "ar": "مهاجم / صانع ألعاب",
      "en": "Forward / Playmaker"
    },
    "era": "2008-الآن",
    "active": true,
    "bioAr": "لاعب ألماني قضى معظم مسيرته مع بايرن ميونخ، ابتكر لنفسه مصطلح 'الفضائي' لوصف مركزه الفريد بين خط الوسط والهجوم، وكان هداف كأس العالم 2010 وهو في العشرين من عمره، وحصل على أكبر عدد ألقاب دوري ألماني في التاريخ.",
    "bioEn": "A German player who spent most of his career at Bayern Munich, coining the term 'Raumdeuter' (space investigator) to describe his unique role between midfield and attack, he was the top scorer at the 2010 World Cup at age 20, and holds the record for most Bundesliga titles.",
    "achievementsAr": [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "هداف كأس العالم 2010",
      "دوري أبطال أوروبا مرتين مع بايرن ميونخ",
      "أكثر لاعب فوزًا بلقب الدوري الألماني في التاريخ"
    ],
    "achievementsEn": [
      "2014 FIFA World Cup title with Germany",
      "2010 World Cup Golden Boot",
      "UEFA Champions League twice with Bayern Munich",
      "Record holder for most Bundesliga titles won"
    ],
    "clubsHistoryAr": [
      "بايرن ميونخ",
      "فانكوفر وايت كابس"
    ],
    "clubsHistoryEn": [
      "Bayern Munich",
      "Vancouver Whitecaps"
    ],
    "clubIds": [
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/توماس_مولر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Thomas_Müller"
  },
  {
    "id": "arjen-robben",
    "nameAr": "أرين روبن",
    "nameEn": "Arjen Robben",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "خرونينغن (معتزل)",
    "clubEn": "Groningen (retired)",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2000-2021",
    "active": false,
    "bioAr": "جناح هولندي سريع اشتهر بمراوغاته المتكررة من الجناح الأيمن نحو الداخل للتسديد بقدمه اليسرى، شكّل مع فرانك ريبيري ثنائيًا جناحيًا رهيبًا في بايرن ميونخ، وسجل هدف الفوز في نهائي دوري أبطال أوروبا 2013.",
    "bioEn": "A fast Dutch winger known for his repeated cut-ins from the right flank to shoot with his left foot, he formed a formidable wing duo with Franck Ribéry at Bayern Munich, and scored the winning goal in the 2013 Champions League final.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2013 مع بايرن ميونخ (هدف الفوز في النهائي)",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "وصافة كأس العالم 2010 والمركز الثالث 2014 مع هولندا",
      "لقب الدوري الإسباني مع ريال مدريد"
    ],
    "achievementsEn": [
      "2013 UEFA Champions League with Bayern Munich (scored the final's winning goal)",
      "8 Bundesliga titles with Bayern Munich",
      "Runner-up at the 2010 World Cup and third place in 2014 with Netherlands",
      "La Liga title with Real Madrid"
    ],
    "clubsHistoryAr": [
      "خرونينغن",
      "بي إس في آيندهوفن",
      "تشيلسي",
      "ريال مدريد",
      "بايرن ميونخ",
      "خرونينغن"
    ],
    "clubsHistoryEn": [
      "Groningen",
      "PSV Eindhoven",
      "Chelsea",
      "Real Madrid",
      "Bayern Munich",
      "Groningen"
    ],
    "clubIds": [
      "psv-eindhoven",
      "chelsea",
      "real-madrid",
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أرين_روبن",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Arjen_Robben"
  },
  {
    "id": "franck-ribery",
    "nameAr": "فرانك ريبيري",
    "nameEn": "Franck Ribéry",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "1999-2022",
    "active": false,
    "bioAr": "جناح فرنسي عُرف بمراوغاته السريعة وعدوانيته الهجومية من الجناح الأيسر، شكّل مع أرين روبن ثنائيًا جناحيًا رهيبًا في بايرن ميونخ لسنوات طويلة، وكان أحد أفضل الأجنحة في العالم خلال أوجه.",
    "bioEn": "A French winger known for his rapid dribbling and attacking aggression from the left flank, he formed a formidable wing duo with Arjen Robben at Bayern Munich for many years, and was one of the world's finest wingers during his peak.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2013 مع بايرن ميونخ",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "أفضل لاعب في أوروبا من الاتحاد الأوروبي 2013",
      "المركز الثاني في الكرة الذهبية 2013"
    ],
    "achievementsEn": [
      "2013 UEFA Champions League with Bayern Munich",
      "8 Bundesliga titles with Bayern Munich",
      "2013 UEFA Best Player in Europe Award",
      "Runner-up for the 2013 Ballon d'Or"
    ],
    "clubsHistoryAr": [
      "مرسيليا",
      "غالطة سراي (إعارة)",
      "برست (إعارة)",
      "مرسيليا",
      "بايرن ميونخ",
      "فيورنتينا",
      "سالرنيتانا"
    ],
    "clubsHistoryEn": [
      "Metz youth",
      "Galatasaray (loan)",
      "Brest (loan)",
      "Marseille",
      "Bayern Munich",
      "Fiorentina",
      "Salernitana"
    ],
    "clubIds": [
      "galatasaray",
      "brest",
      "marseille",
      "bayern-munich",
      "fiorentina"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فرانك_ريبيري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Franck_Ribéry"
  },
  {
    "id": "sepp-maier",
    "nameAr": "زيب ماير",
    "nameEn": "Sepp Maier",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بايرن ميونخ (معتزل)",
    "clubEn": "Bayern Munich (retired)",
    "clubId": "bayern-munich",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1958-1980",
    "active": false,
    "bioAr": "حارس مرمى ألماني أسطوري قضى مسيرته بأكملها مع بايرن ميونخ، ويُعد أحد أعظم حراس المرمى الألمان في التاريخ، لعب أكثر من 400 مباراة متتالية في الدوري الألماني دون انقطاع، وكان حارس مرمى ألمانيا الفائزة بكأس العالم 1974.",
    "bioEn": "A legendary German goalkeeper who spent his entire career at Bayern Munich, regarded as one of the greatest German goalkeepers in history, he played over 400 consecutive Bundesliga matches without missing one, and was Germany's goalkeeper when they won the 1974 World Cup.",
    "achievementsAr": [
      "بطولة كأس العالم 1974 مع ألمانيا الغربية",
      "3 ألقاب كأس أوروبا متتالية مع بايرن ميونخ",
      "بطولة أمم أوروبا 1972 مع ألمانيا الغربية",
      "أفضل حارس مرمى في أوروبا عدة مرات"
    ],
    "achievementsEn": [
      "1974 FIFA World Cup title with West Germany",
      "3 consecutive European Cup titles with Bayern Munich",
      "UEFA Euro 1972 title with West Germany",
      "Named Europe's best goalkeeper multiple times"
    ],
    "clubsHistoryAr": [
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Bayern Munich"
    ],
    "clubIds": [
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/زيب_ماير",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sepp_Maier"
  },
  {
    "id": "paul-breitner",
    "nameAr": "بول برايتنر",
    "nameEn": "Paul Breitner",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بايرن ميونخ (معتزل)",
    "clubEn": "Bayern Munich (retired)",
    "clubId": "bayern-munich",
    "position": {
      "ar": "مدافع / وسط ميدان",
      "en": "Defender / Midfielder"
    },
    "era": "1970-1983",
    "active": false,
    "bioAr": "لاعب ألماني متعدد المراكز، وأحد اللاعبين القلائل الذين سجلوا في أكثر من نهائي كأس عالم لمنتخبين مختلفين من حيث المركز (1974 كمدافع، 1982 كمهاجم)، عُرف بشخصيته الجدلية وآرائه السياسية الصريحة خارج الملعب.",
    "bioEn": "A versatile German player, one of the few to score in more than one World Cup final while playing different positions (1974 as a defender, 1982 as a forward), known for his controversial personality and outspoken political views off the pitch.",
    "achievementsAr": [
      "بطولة كأس العالم 1974 مع ألمانيا الغربية",
      "الوصول لنهائي كأس العالم 1982 مع ألمانيا الغربية (هدف في النهائي)",
      "كأس أوروبا 1974 مع بايرن ميونخ",
      "لقبا دوري إسباني مع ريال مدريد"
    ],
    "achievementsEn": [
      "1974 FIFA World Cup title with West Germany",
      "Runner-up at the 1982 World Cup with West Germany (scored in the final)",
      "1974 European Cup with Bayern Munich",
      "La Liga titles with Real Madrid"
    ],
    "clubsHistoryAr": [
      "بايرن ميونخ",
      "ريال مدريد",
      "آيندراخت براونشفايغ",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Bayern Munich",
      "Real Madrid",
      "Eintracht Braunschweig",
      "Bayern Munich"
    ],
    "clubIds": [
      "bayern-munich",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بول_برايتنر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paul_Breitner"
  },
  {
    "id": "roy-keane",
    "nameAr": "روي كين",
    "nameEn": "Roy Keane",
    "nationalityAr": "إيرلندي",
    "nationalityEn": "Irish",
    "clubAr": "سلتيك (معتزل)",
    "clubEn": "Celtic (retired)",
    "clubId": "celtic",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1989-2006",
    "active": false,
    "bioAr": "وسط ميدان إيرلندي عُرف بشخصيته القيادية الصارمة وروحه القتالية العالية، كان قائد مانشستر يونايتد خلال إحدى أنجح فتراته وأصبح رمزًا لعقلية الفوز في النادي، رغم أن إصابته حرمته من المشاركة في نهائي دوري الأبطال 1999.",
    "bioEn": "An Irish midfielder known for his fierce leadership personality and combative spirit, he captained Manchester United during one of its most successful eras and became a symbol of the club's winning mentality, though injury denied him a place in the 1999 Champions League final.",
    "achievementsAr": [
      "دوري أبطال أوروبا 1999 مع مانشستر يونايتد",
      "7 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "قائد مانشستر يونايتد لسنوات طويلة",
      "لاعب الموسم من رابطة اللاعبين المحترفين 2000"
    ],
    "achievementsEn": [
      "1999 UEFA Champions League with Manchester United",
      "7 Premier League titles with Manchester United",
      "Manchester United captain for many years",
      "2000 PFA Players' Player of the Year"
    ],
    "clubsHistoryAr": [
      "كوبه",
      "نوتنغهام فورست",
      "مانشستر يونايتد",
      "سلتيك"
    ],
    "clubsHistoryEn": [
      "Cobh Ramblers",
      "Nottingham Forest",
      "Manchester United",
      "Celtic"
    ],
    "clubIds": [
      "nottingham-forest",
      "manchester-united",
      "celtic"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روي_كين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Roy_Keane"
  },
  {
    "id": "paul-scholes",
    "nameAr": "بول سكولز",
    "nameEn": "Paul Scholes",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر يونايتد (معتزل)",
    "clubEn": "Manchester United (retired)",
    "clubId": "manchester-united",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1993-2013",
    "active": false,
    "bioAr": "وسط ميدان إنجليزي قضى مسيرته بأكملها مع مانشستر يونايتد، وُصف من قبل نجوم عالميين مثل زيدان وإنييستا بأنه أفضل وسط ميدان واجهوه، اشتهر بتمريراته الطويلة الدقيقة وتسديداته القوية من خارج منطقة الجزاء.",
    "bioEn": "An English midfielder who spent his entire career at Manchester United, described by global stars such as Zidane and Iniesta as the best midfielder they ever faced, known for his precise long passing and powerful long-range shooting.",
    "achievementsAr": [
      "دوري أبطال أوروبا مرتين مع مانشستر يونايتد (1999، 2008)",
      "11 لقب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "3 ألقاب كأس اتحاد إنجليزي",
      "أحد أفضل صانعي الألعاب في تاريخ الدوري الإنجليزي بحسب زملائه ومنافسيه"
    ],
    "achievementsEn": [
      "UEFA Champions League twice with Manchester United (1999, 2008)",
      "11 Premier League titles with Manchester United",
      "3 FA Cups",
      "Widely regarded by peers and rivals as one of the finest midfielders in Premier League history"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Manchester United"
    ],
    "clubIds": [
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بول_سكولز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paul_Scholes"
  },
  {
    "id": "peter-schmeichel",
    "nameAr": "بيتر شمايكل",
    "nameEn": "Peter Schmeichel",
    "nationalityAr": "دنماركي",
    "nationalityEn": "Danish",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1984-2003",
    "active": false,
    "bioAr": "حارس مرمى دنماركي يُعد أحد أعظم حراس المرمى في تاريخ الدوري الإنجليزي، كان حجر الأساس في دفاع مانشستر يونايتد خلال موسم الثلاثية التاريخي 1999، اشتهر بصراخه التحفيزي المرعب لزملائه وقدرته على إنقاذ الكرات الحاسمة.",
    "bioEn": "A Danish goalkeeper regarded as one of the greatest in Premier League history, he was the cornerstone of Manchester United's defense during the historic 1999 treble-winning season, known for his fearsome motivational shouting at teammates and ability to make decisive saves.",
    "achievementsAr": [
      "دوري أبطال أوروبا 1999 مع مانشستر يونايتد",
      "5 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "بطولة أمم أوروبا 1992 مع الدنمارك",
      "أفضل حارس مرمى في العالم من الفيفا 1992"
    ],
    "achievementsEn": [
      "1999 UEFA Champions League with Manchester United",
      "5 Premier League titles with Manchester United",
      "UEFA Euro 1992 title with Denmark",
      "1992 IFFHS World's Best Goalkeeper"
    ],
    "clubsHistoryAr": [
      "هفيدوفره",
      "برونديبي",
      "مانشستر يونايتد",
      "سبورتينغ لشبونة",
      "أستون فيلا",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Hvidovre",
      "Brøndby",
      "Manchester United",
      "Sporting CP",
      "Aston Villa",
      "Manchester City"
    ],
    "clubIds": [
      "manchester-united",
      "sporting-cp",
      "aston-villa",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بيتر_شمايكل",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Peter_Schmeichel"
  },
  {
    "id": "rio-ferdinand",
    "nameAr": "ريو فرديناند",
    "nameEn": "Rio Ferdinand",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1996-2015",
    "active": false,
    "bioAr": "مدافع إنجليزي عُرف بقدرته الفنية العالية على بناء اللعب من الخلف رغم كونه مدافعًا، شكّل مع نيمانيا فيديتش ثنائي دفاع مرعب في مانشستر يونايتد خلال إحدى أنجح فتراته، وانتقل بصفقة قياسية عالميًا لمدافع وقتها من ليدز يونايتد.",
    "bioEn": "An English defender known for his high technical ability to build play from the back despite being a defender, he formed a formidable centre-back partnership with Nemanja Vidić at Manchester United during one of its most successful eras, and moved in a then-world-record transfer for a defender from Leeds United.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد",
      "6 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "لاعب أساسي في منتخب إنجلترا لسنوات طويلة",
      "جزء من أفضل ثنائي دفاع في الدوري الإنجليزي بحسب استطلاعات عديدة"
    ],
    "achievementsEn": [
      "2008 UEFA Champions League with Manchester United",
      "6 Premier League titles with Manchester United",
      "Regular for the England national team for many years",
      "Part of what many rank among the Premier League's best-ever centre-back pairings"
    ],
    "clubsHistoryAr": [
      "ويست هام يونايتد",
      "بورنموث (إعارة)",
      "ليدز يونايتد",
      "مانشستر يونايتد",
      "كوينزبارك رينجرز"
    ],
    "clubsHistoryEn": [
      "West Ham United",
      "Bournemouth (loan)",
      "Leeds United",
      "Manchester United",
      "Queens Park Rangers"
    ],
    "clubIds": [
      "west-ham-united",
      "bournemouth",
      "leeds-united",
      "manchester-united",
      "queens-park-rangers"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ريو_فرديناند",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rio_Ferdinand"
  },
  {
    "id": "nemanja-vidic",
    "nameAr": "نيمانيا فيديتش",
    "nameEn": "Nemanja Vidić",
    "nationalityAr": "صربي",
    "nationalityEn": "Serbian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "2001-2016",
    "active": false,
    "bioAr": "مدافع صربي قوي وصلب، كان قائد مانشستر يونايتد وشكّل مع ريو فرديناند ثنائي دفاع مرعب خلال إحدى أنجح فترات النادي، اشتهر بقوته البدنية وقدرته الاستثنائية على المواجهات الهوائية والفردية.",
    "bioEn": "A powerful and tough Serbian defender who captained Manchester United and formed a formidable centre-back partnership with Rio Ferdinand during one of the club's most successful eras, known for his physical strength and exceptional ability in aerial and individual duels.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد",
      "5 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "أفضل مدافع في الدوري الإنجليزي الممتاز مرتين متتاليتين",
      "قائد مانشستر يونايتد"
    ],
    "achievementsEn": [
      "2008 UEFA Champions League with Manchester United",
      "5 Premier League titles with Manchester United",
      "Premier League Player of the Year twice",
      "Manchester United captain"
    ],
    "clubsHistoryAr": [
      "ريد ستار بلغراد",
      "شبارتاك موسكو",
      "مانشستر يونايتد",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Red Star Belgrade",
      "Spartak Moscow",
      "Manchester United",
      "Inter Milan"
    ],
    "clubIds": [
      "red-star-belgrade",
      "manchester-united",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/نيمانيا_فيديتش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Nemanja_Vidić"
  },
  {
    "id": "edwin-van-der-sar",
    "nameAr": "إدوين فان دير سار",
    "nameEn": "Edwin van der Sar",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1990-2011",
    "active": false,
    "bioAr": "حارس مرمى هولندي طويل القامة، يحمل الرقم القياسي لأطول فترة بدون استقبال هدف في تاريخ الدوري الإنجليزي الممتاز (أكثر من 14 ساعة)، كان حارس مرمى مانشستر يونايتد في موسم الفوز بدوري الأبطال 2008.",
    "bioEn": "A tall Dutch goalkeeper who holds the Premier League record for the longest time without conceding a goal (over 14 hours), he was Manchester United's goalkeeper during their 2008 Champions League-winning season.",
    "achievementsAr": [
      "دوري أبطال أوروبا مرتين (1995 مع أياكس، 2008 مع مانشستر يونايتد)",
      "4 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "الرقم القياسي لأطول فترة بدون استقبال هدف في الدوري الإنجليزي",
      "أفضل حارس مرمى في أوروبا من الاتحاد الأوروبي 2009"
    ],
    "achievementsEn": [
      "UEFA Champions League twice (1995 with Ajax, 2008 with Manchester United)",
      "4 Premier League titles with Manchester United",
      "Premier League record for longest time without conceding a goal",
      "2009 UEFA Goalkeeper of the Year"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "يوفنتوس",
      "فولهام",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "Juventus",
      "Fulham",
      "Manchester United"
    ],
    "clubIds": [
      "ajax",
      "juventus",
      "fulham",
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إدوين_فان_دير_سار",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Edwin_van_der_Sar"
  },
  {
    "id": "dwight-yorke",
    "nameAr": "دوايت يورك",
    "nameEn": "Dwight Yorke",
    "nationalityAr": "ترينيدادي",
    "nationalityEn": "Trinidadian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1989-2009",
    "active": false,
    "bioAr": "مهاجم من ترينيداد وتوباغو شكّل مع أندي كول ثنائيًا هجوميًا رهيبًا في مانشستر يونايتد خلال موسم الثلاثية التاريخي 1999، عُرف بابتسامته الدائمة وأسلوبه الهجومي الفعال.",
    "bioEn": "A forward from Trinidad and Tobago who formed a formidable attacking duo with Andy Cole at Manchester United during the historic 1999 treble-winning season, known for his ever-present smile and effective attacking style.",
    "achievementsAr": [
      "دوري أبطال أوروبا 1999 مع مانشستر يونايتد",
      "الثلاثية التاريخية 1999 مع مانشستر يونايتد",
      "هداف الدوري الإنجليزي الممتاز المشارك موسم 1998-1999",
      "أفضل لاعب كاريبي في التاريخ بحسب استطلاعات عديدة"
    ],
    "achievementsEn": [
      "1999 UEFA Champions League with Manchester United",
      "1999 historic treble with Manchester United",
      "Joint Premier League top scorer 1998-99",
      "Widely regarded as one of the greatest Caribbean footballers in history"
    ],
    "clubsHistoryAr": [
      "أستون فيلا",
      "مانشستر يونايتد",
      "بلاكبيرن روفرز",
      "برمنغهام سيتي",
      "سندرلاند"
    ],
    "clubsHistoryEn": [
      "Aston Villa",
      "Manchester United",
      "Blackburn Rovers",
      "Birmingham City",
      "Sunderland"
    ],
    "clubIds": [
      "aston-villa",
      "manchester-united",
      "blackburn-rovers",
      "birmingham-city",
      "sunderland"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دوايت_يورك",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dwight_Yorke"
  },
  {
    "id": "robin-van-persie",
    "nameAr": "روبين فان بيرسي",
    "nameEn": "Robin van Persie",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1999-2019",
    "active": false,
    "bioAr": "مهاجم هولندي فني عالي المستوى، انتقل من أرسنال إلى مانشستر يونايتد وسجل هاتريك حاسم في مباراة قاده فيها للفوز بلقب الدوري الإنجليزي الممتاز 2012-2013 مباشرة في موسمه الأول مع النادي.",
    "bioEn": "A highly technical Dutch forward who moved from Arsenal to Manchester United and scored a decisive hat-trick in a match that helped clinch the 2012-13 Premier League title in his very first season with the club.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي الممتاز 2012-2013 مع مانشستر يونايتد",
      "الحذاء الذهبي الأوروبي 2011-2012",
      "هداف الدوري الإنجليزي الممتاز مرتين",
      "الهداف التاريخي لمنتخب هولندا لفترة طويلة"
    ],
    "achievementsEn": [
      "2012-13 Premier League title with Manchester United",
      "2011-12 European Golden Shoe",
      "Premier League top scorer twice",
      "Long-time all-time top scorer for the Netherlands national team"
    ],
    "clubsHistoryAr": [
      "فيينورد",
      "أرسنال",
      "مانشستر يونايتد",
      "فنربخشة"
    ],
    "clubsHistoryEn": [
      "Feyenoord",
      "Arsenal",
      "Manchester United",
      "Fenerbahçe"
    ],
    "clubIds": [
      "feyenoord",
      "arsenal",
      "manchester-united",
      "fenerbahce"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روبين_فان_بيرسي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Robin_van_Persie"
  },
  {
    "id": "kenny-dalglish",
    "nameAr": "كيني دالغليش",
    "nameEn": "Kenny Dalglish",
    "nationalityAr": "اسكتلندي",
    "nationalityEn": "Scottish",
    "clubAr": "ليفربول (معتزل)",
    "clubEn": "Liverpool (retired)",
    "clubId": "liverpool",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1969-1990",
    "active": false,
    "bioAr": "لاعب اسكتلندي يُعد أسطورة نادي ليفربول اللاعب والمدرب على حد سواء، فاز كلاعب بثلاثة ألقاب كأس أوروبا، ثم أصبح مدربًا للنادي وحقق معه ألقابًا أخرى، ويُعد أحد أعظم اللاعبين في تاريخ الدوري الإنجليزي.",
    "bioEn": "A Scottish player regarded as a Liverpool legend both as a player and as a manager, he won three European Cups as a player, then became the club's manager and won further titles, and is considered one of the greatest players in English football history.",
    "achievementsAr": [
      "3 ألقاب كأس أوروبا مع ليفربول (كلاعب)",
      "6 ألقاب دوري إنجليزي مع ليفربول (كلاعب)",
      "لاعب العام في إنجلترا مرتين",
      "قاد ليفربول للألقاب لاحقًا كمدرب أيضًا"
    ],
    "achievementsEn": [
      "3 European Cups with Liverpool (as a player)",
      "6 English league titles with Liverpool (as a player)",
      "English Footballer of the Year twice",
      "Later led Liverpool to further titles as manager"
    ],
    "clubsHistoryAr": [
      "سلتيك",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Celtic",
      "Liverpool"
    ],
    "clubIds": [
      "celtic",
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كيني_دالغليش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kenny_Dalglish"
  },
  {
    "id": "ian-rush",
    "nameAr": "إيان راش",
    "nameEn": "Ian Rush",
    "nationalityAr": "ويلزي",
    "nationalityEn": "Welsh",
    "clubAr": "ليفربول (معتزل)",
    "clubEn": "Liverpool (retired)",
    "clubId": "liverpool",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1979-2000",
    "active": false,
    "bioAr": "مهاجم ويلزي يُعد الهداف التاريخي لنادي ليفربول بأكثر من 340 هدفًا، اشتهر بحسه التهديفي العالي وقدرته على استغلال أبسط الفرص، وكان جزءًا من إحدى أنجح فترات ليفربول في الثمانينيات.",
    "bioEn": "A Welsh forward who is Liverpool's all-time top scorer with over 340 goals, known for his lethal instincts and ability to convert the smallest of chances, and was part of one of Liverpool's most successful eras in the 1980s.",
    "achievementsAr": [
      "الهداف التاريخي لنادي ليفربول",
      "كأس أوروبا 1984 مع ليفربول",
      "5 ألقاب دوري إنجليزي مع ليفربول",
      "هداف الدوري الإنجليزي 3 مرات"
    ],
    "achievementsEn": [
      "Liverpool's all-time top goalscorer",
      "1984 European Cup with Liverpool",
      "5 English league titles with Liverpool",
      "English top-flight top scorer 3 times"
    ],
    "clubsHistoryAr": [
      "تشيستر سيتي",
      "ليفربول",
      "يوفنتوس",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Chester City",
      "Liverpool",
      "Juventus",
      "Liverpool"
    ],
    "clubIds": [
      "liverpool",
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إيان_راش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ian_Rush"
  },
  {
    "id": "jamie-carragher",
    "nameAr": "جيمي كاراغر",
    "nameEn": "Jamie Carragher",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "ليفربول (معتزل)",
    "clubEn": "Liverpool (retired)",
    "clubId": "liverpool",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1996-2013",
    "active": false,
    "bioAr": "مدافع إنجليزي قضى مسيرته بأكملها مع ليفربول، عُرف بولائه الكامل للنادي وقراءته الذكية للعب، كان جزءًا أساسيًا من فريق ليفربول الفائز بدوري أبطال أوروبا 2005 في المباراة الشهيرة بـ'معجزة إسطنبول'.",
    "bioEn": "An English defender who spent his entire career at Liverpool, known for his complete loyalty to the club and intelligent reading of the game, he was a key part of Liverpool's 2005 Champions League-winning team in the famous 'Miracle of Istanbul' final.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2005 مع ليفربول ('معجزة إسطنبول')",
      "كأسا الاتحاد الإنجليزي مع ليفربول",
      "أكثر من 700 مباراة لنادي واحد فقط",
      "من أفضل المدافعين الإنجليز في جيله"
    ],
    "achievementsEn": [
      "2005 UEFA Champions League with Liverpool ('Miracle of Istanbul')",
      "FA Cups with Liverpool",
      "Over 700 appearances for a single club",
      "Regarded as one of the finest English defenders of his generation"
    ],
    "clubsHistoryAr": [
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Liverpool"
    ],
    "clubIds": [
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جيمي_كاراغر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jamie_Carragher"
  },
  {
    "id": "sami-hyypia",
    "nameAr": "سامي هيبيا",
    "nameEn": "Sami Hyypiä",
    "nationalityAr": "فنلندي",
    "nationalityEn": "Finnish",
    "clubAr": "باير ليفركوزن (معتزل)",
    "clubEn": "Bayer Leverkusen (retired)",
    "clubId": "bayer-leverkusen",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1992-2011",
    "active": false,
    "bioAr": "مدافع فنلندي طويل القامة وقائد ليفربول لسنوات طويلة، عُرف بسيطرته الهوائية وقراءته الذكية للعب رغم افتقاره للسرعة العالية، وكان ركيزة دفاع ليفربول خلال فوزهم بدوري أبطال أوروبا 2005.",
    "bioEn": "A tall Finnish defender and long-time Liverpool captain, known for his aerial dominance and intelligent reading of the game despite lacking great pace, and was a pillar of Liverpool's defense during their 2005 Champions League triumph.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2005 مع ليفربول",
      "كأسا الاتحاد الإنجليزي مع ليفربول",
      "قائد ليفربول لسنوات طويلة",
      "أفضل لاعب فنلندي في التاريخ بحسب استطلاعات عديدة"
    ],
    "achievementsEn": [
      "2005 UEFA Champions League with Liverpool",
      "FA Cups with Liverpool",
      "Liverpool captain for many years",
      "Widely regarded as Finland's greatest-ever footballer"
    ],
    "clubsHistoryAr": [
      "إم إبي إس",
      "فيلينكي",
      "ليفربول",
      "باير ليفركوزن"
    ],
    "clubsHistoryEn": [
      "MyPa",
      "Willem II",
      "Liverpool",
      "Bayer Leverkusen"
    ],
    "clubIds": [
      "liverpool",
      "bayer-leverkusen"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سامي_هيبيا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sami_Hyypiä"
  },
  {
    "id": "robbie-fowler",
    "nameAr": "روبي فاولر",
    "nameEn": "Robbie Fowler",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1993-2012",
    "active": false,
    "bioAr": "مهاجم إنجليزي يُلقب بـ'الله' من جماهير ليفربول لغزارته التهديفية الاستثنائية في التسعينيات، سجل أسرع هاتريك في تاريخ الدوري الإنجليزي الممتاز (أربع دقائق و33 ثانية) أمام أرسنال عام 1994.",
    "bioEn": "An English forward nicknamed 'God' by Liverpool fans for his exceptional goalscoring in the 1990s, he scored the fastest hat-trick in Premier League history (four minutes and 33 seconds) against Arsenal in 1994.",
    "achievementsAr": [
      "أسرع هاتريك في تاريخ الدوري الإنجليزي الممتاز",
      "كأس الاتحاد الإنجليزي وكأس الرابطة مع ليفربول",
      "كأس الاتحاد الأوروبي 2001 مع ليفربول",
      "أحد أفضل هدافي جيله في الدوري الإنجليزي"
    ],
    "achievementsEn": [
      "Premier League's fastest-ever hat-trick",
      "FA Cup and League Cup with Liverpool",
      "2001 UEFA Cup with Liverpool",
      "One of his generation's finest Premier League goalscorers"
    ],
    "clubsHistoryAr": [
      "ليفربول",
      "ليدز يونايتد",
      "مانشستر سيتي",
      "ليفربول",
      "كارديف سيتي",
      "بلاكبيرن روفرز"
    ],
    "clubsHistoryEn": [
      "Liverpool",
      "Leeds United",
      "Manchester City",
      "Liverpool",
      "Cardiff City",
      "Blackburn Rovers"
    ],
    "clubIds": [
      "liverpool",
      "leeds-united",
      "manchester-city",
      "cardiff-city",
      "blackburn-rovers"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روبي_فاولر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Robbie_Fowler"
  },
  {
    "id": "john-barnes",
    "nameAr": "جون بارنز",
    "nameEn": "John Barnes",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "1981-1999",
    "active": false,
    "bioAr": "جناح إنجليزي يُعد أحد أفضل اللاعبين في تاريخ ليفربول، عُرف بمهاراته الفنية العالية ومراوغاته الاستثنائية، وحصل على جائزة لاعب العام في إنجلترا مرتين خلال فترته الذهبية مع ليفربول في أواخر الثمانينيات.",
    "bioEn": "An English winger regarded as one of the greatest players in Liverpool's history, known for his exceptional technical skill and dribbling, he won the English Footballer of the Year award twice during his golden period with Liverpool in the late 1980s.",
    "achievementsAr": [
      "لقبا دوري إنجليزي مع ليفربول",
      "كأس الاتحاد الإنجليزي مع ليفربول",
      "لاعب العام في إنجلترا مرتين",
      "من أفضل الأجانب... اللاعبين البريطانيين في تاريخ الدوري الإنجليزي"
    ],
    "achievementsEn": [
      "2 English league titles with Liverpool",
      "FA Cup with Liverpool",
      "English Footballer of the Year twice",
      "Widely regarded as one of the greatest British players in English football history"
    ],
    "clubsHistoryAr": [
      "واتفورد",
      "ليفربول",
      "نيوكاسل يونايتد",
      "تشارلتون أتلتيك"
    ],
    "clubsHistoryEn": [
      "Watford",
      "Liverpool",
      "Newcastle United",
      "Charlton Athletic"
    ],
    "clubIds": [
      "liverpool",
      "newcastle-united",
      "charlton-athletic"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جون_بارنز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/John_Barnes"
  },
  {
    "id": "alisson-becker",
    "nameAr": "أليسون بيكر",
    "nameEn": "Alisson Becker",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "حارس مرمى برازيلي يُعد أحد أفضل حراس المرمى في العالم منذ انتقاله إلى ليفربول من روما، عُرف بردوده الاستثنائية وقدرته على اللعب بالقدم، وكان ركيزة أساسية في فوز ليفربول بدوري أبطال أوروبا 2019 والدوري الإنجليزي الممتاز.",
    "bioEn": "A Brazilian goalkeeper regarded as one of the world's best since joining Liverpool from Roma, known for his exceptional shot-stopping and ball-playing ability, and a key pillar in Liverpool's 2019 UEFA Champions League and Premier League triumphs.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2019 مع ليفربول",
      "عدة ألقاب دوري إنجليزي ممتاز مع ليفربول",
      "القفاز الذهبي لكوبا أمريكا 2019 مع البرازيل",
      "أفضل حارس مرمى في العالم من الفيفا عدة مرات"
    ],
    "achievementsEn": [
      "2019 UEFA Champions League with Liverpool",
      "Multiple Premier League titles with Liverpool",
      "2019 Copa América Golden Glove with Brazil",
      "The Best FIFA Goalkeeper award multiple times"
    ],
    "clubsHistoryAr": [
      "إنترناسيونال",
      "روما",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Internacional",
      "Roma",
      "Liverpool"
    ],
    "clubIds": [
      "roma",
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أليسون_بيكر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alisson_Becker"
  },
  {
    "id": "jordan-henderson",
    "nameAr": "جوردان هندرسون",
    "nameEn": "Jordan Henderson",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "لاعب وسط إنجليزي قاد ليفربول كقائد للفوز بدوري أبطال أوروبا 2019 والدوري الإنجليزي 2019-20، ثم لعب لاتفاق وأياكس وبرينتفورد، وانضم إلى تشيلسي في 3 أغسطس 2026 بعقد لعامين، وشارك مع إنجلترا في كأس العالم 2026.",
    "bioEn": "English midfielder who captained Liverpool to the 2019 UEFA Champions League and the 2019-20 Premier League, then played for Al-Ettifaq, Ajax and Brentford, and joined Chelsea on 3 August 2026 on a two-year deal; he was in England's 2026 World Cup squad.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2019 مع ليفربول",
      "لقب الدوري الإنجليزي الممتاز 2019-2020 مع ليفربول (كقائد)",
      "جائزة أفضل لاعب في إنجلترا من رابطة الكتاب الرياضيين",
      "قائد ليفربول لسنوات طويلة"
    ],
    "achievementsEn": [
      "2019 UEFA Champions League with Liverpool",
      "2019-20 Premier League title with Liverpool (as captain)",
      "FWA Footballer of the Year",
      "Liverpool captain for many years"
    ],
    "clubsHistoryAr": [
      "سندرلاند",
      "كوفنتري سيتي (إعارة)",
      "ليفربول",
      "الاتفاق",
      "أياكس",
      "برينتفورد",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Sunderland",
      "Coventry City (loan)",
      "Liverpool",
      "Al-Ettifaq",
      "Ajax",
      "Brentford",
      "Chelsea"
    ],
    "clubIds": [
      "sunderland",
      "coventry-city",
      "liverpool",
      "ajax",
      "brentford",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جوردان_هندرسون",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jordan_Henderson"
  },
  {
    "id": "paolo-maldini",
    "nameAr": "باولو مالديني",
    "nameEn": "Paolo Maldini",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "ميلان (معتزل)",
    "clubEn": "Milan (retired)",
    "clubId": "ac-milan",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1984-2009",
    "active": false,
    "bioAr": "مدافع إيطالي أسطوري قضى مسيرته بأكملها مع نادي ميلان، ويُعد من أعظم المدافعين في تاريخ كرة القدم بفضل قراءته الذكية للعب وقلة أخطائه الدفاعية رغم طول مسيرته.",
    "bioEn": "A legendary Italian defender who spent his entire career at Milan, regarded as one of the greatest defenders in football history for his intelligent reading of the game and minimal defensive errors despite his long career.",
    "achievementsAr": [
      "5 ألقاب دوري أبطال أوروبا مع ميلان",
      "7 ألقاب دوري إيطالي مع ميلان",
      "أكثر لاعب مشاركة في تاريخ نادي ميلان",
      "قائد منتخب إيطاليا لسنوات طويلة"
    ],
    "achievementsEn": [
      "5 UEFA Champions League titles with Milan",
      "7 Serie A titles with Milan",
      "Milan's all-time appearance record holder",
      "Captained the Italy national team for many years"
    ],
    "clubsHistoryAr": [
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Milan"
    ],
    "clubIds": [
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/باولو_مالديني",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paolo_Maldini"
  },
  {
    "id": "rabah-madjer",
    "nameAr": "رابح ماجر",
    "nameEn": "Rabah Madjer",
    "nationalityAr": "جزائري",
    "nationalityEn": "Algerian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1978-1992",
    "active": false,
    "bioAr": "أسطورة جزائرية يُعد أحد أفضل اللاعبين الأفارقة والعرب في التاريخ، برز مع نادي بورتو البرتغالي في الثمانينيات وسجل هدفًا خالدًا بكعب القدم في نهائي كأس أوروبا للأندية البطلة 1987. قاد الجزائر لتحقيق فوز تاريخي على ألمانيا الغربية في مونديال 1982، وتُوّج بكأس أمم أفريقيا مع الجزائر عام 1990.",
    "bioEn": "An Algerian legend regarded as one of the greatest African and Arab players in history, he rose to stardom with FC Porto in the 1980s and scored an iconic backheel goal in the 1987 European Cup final. He helped Algeria to a historic win over West Germany at the 1982 World Cup and won the 1990 Africa Cup of Nations with Algeria.",
    "achievementsAr": [
      "كأس أوروبا للأندية البطلة 1987 مع بورتو (هدف 'الكعب' الشهير)",
      "كأس أمم أفريقيا 1990 مع الجزائر",
      "جائزة أفضل لاعب أفريقي عام 1987",
      "فوز تاريخي على ألمانيا الغربية في مونديال 1982"
    ],
    "achievementsEn": [
      "1987 European Cup title with Porto (famous backheel goal)",
      "1990 Africa Cup of Nations title with Algeria",
      "African Footballer of the Year 1987",
      "Historic 1982 World Cup win over West Germany"
    ],
    "clubsHistoryAr": [
      "اتحاد الحسين داي",
      "رياسينغ باريس",
      "بورتو",
      "فالنسيا (إعارة)",
      "نادي قطر"
    ],
    "clubsHistoryEn": [
      "NA Hussein Dey",
      "Racing Paris",
      "Porto",
      "Valencia (loan)",
      "Qatar SC"
    ],
    "clubIds": [
      "porto",
      "valencia"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رابح_ماجر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rabah_Madjer"
  },
  {
    "id": "majed-abdullah",
    "nameAr": "ماجد عبدالله",
    "nameEn": "Majed Abdullah",
    "nationalityAr": "سعودي",
    "nationalityEn": "Saudi Arabian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1977-1998",
    "active": false,
    "bioAr": "أسطورة كرة القدم السعودية، قضى مسيرته بأكملها مع نادي النصر ويُلقب بـ'بيليه العرب'. هو الهداف التاريخي لمنتخب السعودية والهداف التاريخي لنادي النصر ولدوري المحترفين السعودي، وقاد المنتخب السعودي للفوز بكأس آسيا مرتين والتأهل لمونديال 1994.",
    "bioEn": "A Saudi Arabian football legend who spent his entire career at Al-Nassr and was nicknamed the 'Arabian Pelé'. He is the all-time top scorer for both the Saudi national team and Al-Nassr, as well as the all-time top scorer of the Saudi Pro League, and led Saudi Arabia to two AFC Asian Cup titles and qualification for the 1994 World Cup.",
    "achievementsAr": [
      "الهداف التاريخي لمنتخب السعودية",
      "الهداف التاريخي لنادي النصر ولدوري المحترفين السعودي",
      "بطولة كأس آسيا مرتين مع السعودية",
      "التأهل إلى كأس العالم 1994 مع السعودية"
    ],
    "achievementsEn": [
      "All-time top goalscorer for the Saudi Arabia national team",
      "All-time top scorer for Al-Nassr and the Saudi Pro League",
      "AFC Asian Cup champion twice with Saudi Arabia",
      "Qualified for the 1994 FIFA World Cup with Saudi Arabia"
    ],
    "clubsHistoryAr": [
      "النصر"
    ],
    "clubsHistoryEn": [
      "Al-Nassr"
    ],
    "clubIds": [],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماجد_عبدالله",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Majed_Abdullah"
  },
  {
    "id": "hakim-ziyech",
    "nameAr": "حكيم زياش",
    "nameEn": "Hakim Ziyech",
    "nationalityAr": "مغربي",
    "nationalityEn": "Moroccan",
    "clubAr": "بوتافوغو (البرازيل)",
    "clubEn": "Botafogo (Brazil)",
    "clubId": null,
    "position": {
      "ar": "جناح أيمن / صانع ألعاب هجومي",
      "en": "Right Winger / Attacking Midfielder"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "لاعب مغربي وُلد في هولندا، يُلقب بـ'الساحر' لقب أطلقته عليه جماهير أياكس. كان عنصرًا أساسيًا في مشوار المغرب التاريخي إلى نصف نهائي كأس العالم 2022، وتوّج بدوري أبطال أوروبا مع تشيلسي.",
    "bioEn": "A Dutch-born Moroccan footballer nicknamed 'The Wizard' by Ajax supporters. He was a key player in Morocco's historic run to the semi-finals of the 2022 World Cup and won the UEFA Champions League with Chelsea.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2020-2021 مع تشيلسي",
      "السوبر الأوروبي وكأس العالم للأندية مع تشيلسي",
      "الوصول إلى نصف نهائي كأس العالم 2022 مع المغرب",
      "قائد منتخب المغرب"
    ],
    "achievementsEn": [
      "2020-21 UEFA Champions League with Chelsea",
      "UEFA Super Cup and FIFA Club World Cup with Chelsea",
      "2022 FIFA World Cup semi-finalist with Morocco",
      "Captain of the Morocco national team"
    ],
    "clubsHistoryAr": [
      "هيرنفين",
      "توينتي",
      "أياكس",
      "تشيلسي",
      "غلطة سراي",
      "الدحيل",
      "الوداد",
      "بوتافوغو"
    ],
    "clubsHistoryEn": [
      "Heerenveen",
      "Twente",
      "Ajax",
      "Chelsea",
      "Galatasaray",
      "Al-Duhail",
      "Wydad AC",
      "Botafogo"
    ],
    "clubIds": [
      "ajax",
      "chelsea",
      "galatasaray",
      "wydad"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/حكيم_زياش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hakim_Ziyech"
  },
  {
    "id": "achraf-hakimi",
    "nameAr": "أشرف حكيمي",
    "nameEn": "Achraf Hakimi",
    "nationalityAr": "مغربي",
    "nationalityEn": "Moroccan",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "ظهير أيمن",
      "en": "Right-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "قائد منتخب المغرب ويُعد أحد أفضل الظهرين الأيمنين في العالم، واللاعب الأفريقي الحائز على أكبر عدد من الألقاب الأوروبية. كان ركيزة أساسية في مشوار المغرب التاريخي لنصف نهائي كأس العالم 2022، وقاد المغرب للفوز بكأس أمم أفريقيا 2025.",
    "bioEn": "Captain of the Morocco national team and widely regarded as one of the best right-backs in the world, and the African player with the most European titles. He was a key figure in Morocco's historic run to the 2022 World Cup semi-finals and led Morocco to the 2025 Africa Cup of Nations title.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان",
      "عدة ألقاب دوري فرنسي ممتاز مع باريس سان جيرمان",
      "الدوري الإيطالي 2020-2021 مع إنتر ميلان",
      "كأس أمم أفريقيا 2025 مع المغرب (كقائد)"
    ],
    "achievementsEn": [
      "2024-25 UEFA Champions League with Paris Saint-Germain",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "2020-21 Serie A title with Inter Milan",
      "2025 Africa Cup of Nations champion with Morocco (as captain)"
    ],
    "clubsHistoryAr": [
      "ريال مدريد",
      "بوروسيا دورتموند (إعارة)",
      "إنتر ميلان",
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Real Madrid",
      "Borussia Dortmund (loan)",
      "Inter Milan",
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "real-madrid",
      "borussia-dortmund",
      "inter-milan",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أشرف_حكيمي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Achraf_Hakimi"
  },
  {
    "id": "son-heung-min",
    "nameAr": "سون هيونغ مين",
    "nameEn": "Son Heung-min",
    "nationalityAr": "كوري جنوبي",
    "nationalityEn": "South Korean",
    "clubAr": "لوس أنجلوس إف سي",
    "clubEn": "Los Angeles FC",
    "clubId": null,
    "position": {
      "ar": "جناح أيسر",
      "en": "Left Winger"
    },
    "era": "2010-الآن",
    "active": true,
    "bioAr": "قائد منتخب كوريا الجنوبية، ويُعد على نطاق واسع أعظم لاعب آسيوي في التاريخ. صاحب أكبر رصيد أهداف لآسيوي في تاريخ الدوري الإنجليزي الممتاز ودوري أبطال أوروبا، أمضى قرابة عشر سنوات مع توتنهام هوتسبير قبل انتقاله إلى لوس أنجلوس إف سي في الدوري الأمريكي عام 2026.",
    "bioEn": "Captain of the South Korea national team and widely regarded as the greatest Asian footballer of all time. He is the top Asian goalscorer in both Premier League and UEFA Champions League history, having spent nearly a decade at Tottenham Hotspur before joining Los Angeles FC in MLS in 2026.",
    "achievementsAr": [
      "الحذاء الذهبي للدوري الإنجليزي الممتاز 2021-2022 (مناصفة)",
      "أول لاعب آسيوي يفوز بالحذاء الذهبي للدوري الإنجليزي",
      "أعلى هداف آسيوي في تاريخ الدوري الإنجليزي ودوري أبطال أوروبا",
      "قائد منتخب كوريا الجنوبية"
    ],
    "achievementsEn": [
      "2021-22 Premier League Golden Boot (joint winner)",
      "First Asian player to win the Premier League Golden Boot",
      "Top Asian goalscorer in Premier League and UEFA Champions League history",
      "Captain of the South Korea national team"
    ],
    "clubsHistoryAr": [
      "هامبورغر إس في",
      "باير ليفركوزن",
      "توتنهام هوتسبير",
      "لوس أنجلوس إف سي"
    ],
    "clubsHistoryEn": [
      "Hamburger SV",
      "Bayer Leverkusen",
      "Tottenham Hotspur",
      "Los Angeles FC"
    ],
    "clubIds": [
      "hamburger-sv",
      "bayer-leverkusen",
      "tottenham"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سون_هيونغ_مين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Son_Heung-min"
  },
  {
    "id": "park-ji-sung",
    "nameAr": "بارك جي سونغ",
    "nameEn": "Park Ji-sung",
    "nationalityAr": "كوري جنوبي",
    "nationalityEn": "South Korean",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2000-2014",
    "active": false,
    "bioAr": "أول لاعب آسيوي يفوز بدوري أبطال أوروبا ويشارك في نهائي البطولة، ويُعد أنجح لاعب آسيوي في التاريخ. لُقّب بـ'صاحب الرئتين الثلاث' لقدرته البدنية الاستثنائية خلال سنواته مع مانشستر يونايتد.",
    "bioEn": "The first Asian player to win the UEFA Champions League and to play in a Champions League final, widely regarded as the most successful Asian footballer in history. Nicknamed 'Three-Lung Park' for his remarkable stamina during his years at Manchester United.",
    "achievementsAr": [
      "4 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد",
      "كأس العالم للأندية 2008 مع مانشستر يونايتد",
      "أول قائد آسيوي لمانشستر يونايتد"
    ],
    "achievementsEn": [
      "4 Premier League titles with Manchester United",
      "2008 UEFA Champions League with Manchester United",
      "2008 FIFA Club World Cup with Manchester United",
      "First Asian captain of Manchester United"
    ],
    "clubsHistoryAr": [
      "كيوتو بيربل سانغا",
      "بي إس في آيندهوفن",
      "مانشستر يونايتد",
      "كوينز بارك رينجرز",
      "بي إس في آيندهوفن (إعارة)"
    ],
    "clubsHistoryEn": [
      "Kyoto Purple Sanga",
      "PSV Eindhoven",
      "Manchester United",
      "Queens Park Rangers",
      "PSV Eindhoven (loan)"
    ],
    "clubIds": [
      "psv-eindhoven",
      "manchester-united",
      "queens-park-rangers"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بارك_جي_سونغ",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Park_Ji-sung"
  },
  {
    "id": "jay-jay-okocha",
    "nameAr": "جاي جاي أوكوتشا",
    "nameEn": "Jay-Jay Okocha",
    "nationalityAr": "نيجيري",
    "nationalityEn": "Nigerian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان هجومي",
      "en": "Attacking Midfielder"
    },
    "era": "1990-2008",
    "active": false,
    "bioAr": "أسطورة نيجيرية اشتهر بمهاراته الاستثنائية في المراوغة وخفة حركته، ويُعد أحد أفضل اللاعبين الأفارقة في التاريخ. فاز بالميدالية الذهبية الأولمبية مع نيجيريا عام 1996، ولعب لأندية كبرى مثل باريس سان جيرمان وبولتون واندررز.",
    "bioEn": "A Nigerian legend famed for his exceptional dribbling skills and flair, widely regarded as one of the greatest African players in history. He won an Olympic gold medal with Nigeria in 1996 and played for major clubs including Paris Saint-Germain and Bolton Wanderers.",
    "achievementsAr": [
      "الميدالية الذهبية الأولمبية 1996 مع نيجيريا",
      "جائزة أفضل لاعب أفريقي من بي بي سي (2003 و2004)",
      "ضمن قائمة أفضل 125 لاعبًا حيًا من بيليه (2004)",
      "المشاركة في 3 بطولات كأس عالم مع نيجيريا"
    ],
    "achievementsEn": [
      "1996 Olympic gold medal with Nigeria",
      "BBC African Footballer of the Year (2003 and 2004)",
      "Named among Pelé's FIFA 100 greatest living players (2004)",
      "Played in 3 FIFA World Cup squads with Nigeria"
    ],
    "clubsHistoryAr": [
      "رينجرز إنوغو",
      "بوروسيا نوينكيرشن",
      "آينتراخت فرانكفورت",
      "فنربخشة",
      "باريس سان جيرمان",
      "بولتون واندررز",
      "نادي قطري",
      "هال سيتي"
    ],
    "clubsHistoryEn": [
      "Enugu Rangers",
      "Borussia Neunkirchen",
      "Eintracht Frankfurt",
      "Fenerbahçe",
      "Paris Saint-Germain",
      "Bolton Wanderers",
      "Qatar Stars League club",
      "Hull City"
    ],
    "clubIds": [
      "eintracht-frankfurt",
      "fenerbahce",
      "paris-saint-germain",
      "bolton-wanderers"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جي-جي_أوكوتشا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jay-Jay_Okocha"
  },
  {
    "id": "abedi-pele",
    "nameAr": "أبيدي بيليه",
    "nameEn": "Abedi Pele",
    "nationalityAr": "غاني",
    "nationalityEn": "Ghanaian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان هجومي",
      "en": "Attacking Midfielder"
    },
    "era": "1978-1998",
    "active": false,
    "bioAr": "يُعد أحد أعظم اللاعبين الأفارقة في التاريخ، وهو اللاعب الوحيد الذي فاز بجائزة أفضل لاعب أفريقي ثلاث مرات متتالية. كان من أوائل اللاعبين الأفارقة الذين تركوا بصمة في الكرة الأوروبية، وتوّج بدوري أبطال أوروبا مع مارسيليا الفرنسي.",
    "bioEn": "Regarded as one of the greatest African footballers of all time, and the only player to win African Footballer of the Year three consecutive times. He was among the first African players to make an impact on European club football, and won the UEFA Champions League with Marseille.",
    "achievementsAr": [
      "جائزة أفضل لاعب أفريقي ثلاث سنوات متتالية (1991، 1992، 1993)",
      "دوري أبطال أوروبا 1993 مع مارسيليا",
      "كأس أمم أفريقيا 1982 مع غانا",
      "أب لثنائي المنتخب الغاني أندريه وجوردان أييو"
    ],
    "achievementsEn": [
      "African Footballer of the Year three consecutive times (1991, 1992, 1993)",
      "1993 UEFA Champions League with Marseille",
      "1982 Africa Cup of Nations with Ghana",
      "Father of Ghana internationals André and Jordan Ayew"
    ],
    "clubsHistoryAr": [
      "ريال تمالي يونايتد",
      "السد",
      "زيورخ",
      "نيور",
      "مولوز",
      "مارسيليا",
      "ليل (إعارة)",
      "ليون",
      "تورينو",
      "1860 ميونخ",
      "العين"
    ],
    "clubsHistoryEn": [
      "Real Tamale United",
      "Al Sadd",
      "Zürich",
      "Niort",
      "Mulhouse",
      "Marseille",
      "Lille (loan)",
      "Lyon",
      "Torino",
      "1860 Munich",
      "Al Ain"
    ],
    "clubIds": [
      "marseille",
      "lille",
      "lyon",
      "torino",
      "1860-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/عبيدي_بيليه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Abedi_Pele"
  },
  {
    "id": "hugo-sanchez",
    "nameAr": "هوغو سانشيز",
    "nameEn": "Hugo Sánchez",
    "nationalityAr": "مكسيكي",
    "nationalityEn": "Mexican",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1976-1997",
    "active": false,
    "bioAr": "يُعد أعظم لاعب مكسيكي في التاريخ وأحد أفضل الهدافين على الإطلاق، حصل على جائزة 'بيتشيتشي' هداف الدوري الإسباني خمس مرات مع ريال مدريد. اشتهر باحتفالاته البهلوانية وقفزته الخلفية الشهيرة بعد تسجيل الأهداف.",
    "bioEn": "Widely regarded as the greatest Mexican footballer of all time and one of the greatest strikers ever, he won the Pichichi Trophy as La Liga's top scorer five times with Real Madrid. He was famous for his acrobatic goal celebrations, including his signature backflip.",
    "achievementsAr": [
      "5 جوائز 'بيتشيتشي' هداف الدوري الإسباني",
      "5 ألقاب دوري إسباني متتالية مع ريال مدريد (1986-1990)",
      "ضمن قائمة FIFA 100 لأفضل اللاعبين الأحياء (2004)",
      "أفضل لاعب في منطقة الكونكاكاف في القرن العشرين وفق IFFHS"
    ],
    "achievementsEn": [
      "5 Pichichi Trophies as La Liga's top scorer",
      "5 consecutive La Liga titles with Real Madrid (1986-1990)",
      "Named in the FIFA 100 list of greatest living players (2004)",
      "Best CONCACAF player of the 20th century according to IFFHS"
    ],
    "clubsHistoryAr": [
      "بوماس الجامعة الوطنية المكسيكية",
      "أتلتيكو مدريد",
      "ريال مدريد",
      "أمريكا",
      "رايو فاليكانو",
      "أتلانتي",
      "لينز",
      "دالاس برن",
      "سيلايا"
    ],
    "clubsHistoryEn": [
      "UNAM Pumas",
      "Atlético Madrid",
      "Real Madrid",
      "América",
      "Rayo Vallecano",
      "Atlante",
      "Linz",
      "Dallas Burn",
      "Celaya"
    ],
    "clubIds": [
      "atletico-madrid",
      "real-madrid",
      "rayo-vallecano"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/هوغو_سانشيز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hugo_Sánchez"
  },
  {
    "id": "landon-donovan",
    "nameAr": "لاندون دونوفان",
    "nameEn": "Landon Donovan",
    "nationalityAr": "أمريكي",
    "nationalityEn": "American",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "2000-2014",
    "active": false,
    "bioAr": "يُعد على نطاق واسع أعظم لاعب في تاريخ منتخب الولايات المتحدة لكرة القدم، وكان صاحب الرقم القياسي العالمي في التمريرات الحاسمة الدولية حتى عام 2023. فاز بستة ألقاب في الدوري الأمريكي MLS مع لوس أنجلوس غالاكسي وهو صاحب الرقم القياسي في التمريرات الحاسمة بتاريخ الدوري.",
    "bioEn": "Widely regarded as the greatest men's player in United States national team history, and held the world record for most international assists until 2023. He won six MLS Cup titles with LA Galaxy and is the league's all-time assists leader.",
    "achievementsAr": [
      "الهداف التاريخي المشارك لمنتخب الولايات المتحدة (57 هدفًا)",
      "6 ألقاب MLS كأب مع لوس أنجلوس غالاكسي",
      "صاحب الرقم القياسي في التمريرات الحاسمة بتاريخ دوري MLS",
      "بطولة كأس الكونكاكاف الذهبية 4 مرات مع الولايات المتحدة"
    ],
    "achievementsEn": [
      "Joint all-time leading goalscorer for the United States national team (57 goals)",
      "6 MLS Cup titles with LA Galaxy",
      "MLS's all-time leading assist provider",
      "4-time CONCACAF Gold Cup champion with the United States"
    ],
    "clubsHistoryAr": [
      "باير ليفركوزن",
      "سان خوسيه إيرثكويكس (إعارة)",
      "لوس أنجلوس غالاكسي",
      "بايرن ميونخ (إعارة)",
      "إيفرتون (إعارة)"
    ],
    "clubsHistoryEn": [
      "Bayer Leverkusen",
      "San Jose Earthquakes (loan)",
      "LA Galaxy",
      "Bayern Munich (loan)",
      "Everton (loan)"
    ],
    "clubIds": [
      "bayer-leverkusen",
      "bayern-munich",
      "everton"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لاندون_دونوفان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Landon_Donovan"
  },
  {
    "id": "carlos-valderrama",
    "nameAr": "كارلوس فالديراما",
    "nameEn": "Carlos Valderrama",
    "nationalityAr": "كولومبي",
    "nationalityEn": "Colombian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب",
      "en": "Playmaker"
    },
    "era": "1985-2002",
    "active": false,
    "bioAr": "يُلقب بـ'البيبي'، ويُعد أعظم لاعب كولومبي في التاريخ لدى كثيرين، اشتهر بتسريحة شعره الأفرو الذهبية المميزة وتمريراته الدقيقة. قاد كولومبيا كقائد في ثلاث بطولات كأس عالم متتالية (1990، 1994، 1998).",
    "bioEn": "Nicknamed 'El Pibe', regarded by many as Colombia's greatest-ever player, known for his distinctive blond afro hairstyle and precise passing. He captained Colombia at three consecutive FIFA World Cups (1990, 1994, 1998).",
    "achievementsAr": [
      "جائزة أفضل لاعب في أمريكا الجنوبية مرتين (1987، 1993)",
      "قاد كولومبيا في ثلاث بطولات كأس عالم متتالية",
      "ضمن قائمة FIFA 100 لأفضل اللاعبين الأحياء",
      "أسطورة في تاريخ دوري MLS الأمريكي"
    ],
    "achievementsEn": [
      "South American Footballer of the Year twice (1987, 1993)",
      "Captained Colombia at three consecutive FIFA World Cups",
      "Named in the FIFA 100 list of greatest living players",
      "MLS legend and one of the league's most recognisable early stars"
    ],
    "clubsHistoryAr": [
      "أونيون مجدلينا",
      "ميلونариوس",
      "ديبورتيفو كالي",
      "مونبلييه",
      "خونيور دي بارانكيا",
      "تامبا باي ميوتيني",
      "ميامي فيوجن",
      "كولورادو رابيدز",
      "ريال بلد الوليد"
    ],
    "clubsHistoryEn": [
      "Unión Magdalena",
      "Millonarios",
      "Deportivo Cali",
      "Montpellier",
      "Junior de Barranquilla",
      "Tampa Bay Mutiny",
      "Miami Fusion",
      "Colorado Rapids",
      "Real Valladolid"
    ],
    "clubIds": [
      "montpellier",
      "real-valladolid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كارلوس_فالديراما",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Carlos_Valderrama"
  },
  {
    "id": "james-rodriguez",
    "nameAr": "خاميس رودريغيز",
    "nameEn": "James Rodríguez",
    "nationalityAr": "كولومبي",
    "nationalityEn": "Colombian",
    "clubAr": "أتلتيكو ناسيونال",
    "clubEn": "Atlético Nacional",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب هجومي",
      "en": "Attacking Midfielder"
    },
    "era": "2008-الآن",
    "active": true,
    "bioAr": "قائد منتخب كولومبيا ويُعتبره كثيرون خليفة كارلوس فالديراما في صناعة الألعاب الكولومبية. توّج بالحذاء الذهبي في كأس العالم 2014 وسجل أحد أجمل أهداف تاريخ البطولة، وفاز بدوري أبطال أوروبا مرتين مع ريال مدريد.",
    "bioEn": "Captain of the Colombia national team, often considered the successor to Carlos Valderrama as Colombia's playmaking icon. He won the Golden Boot at the 2014 World Cup, scoring one of the tournament's most celebrated goals, and won the UEFA Champions League twice with Real Madrid.",
    "achievementsAr": [
      "الحذاء الذهبي لكأس العالم 2014",
      "جائزة بوشكاش لأفضل هدف في العالم 2014",
      "لقبا دوري أبطال أوروبا مع ريال مدريد",
      "قائد منتخب كولومبيا"
    ],
    "achievementsEn": [
      "2014 FIFA World Cup Golden Boot",
      "2014 FIFA Puskás Award for the world's best goal",
      "2 UEFA Champions League titles with Real Madrid",
      "Captain of the Colombia national team"
    ],
    "clubsHistoryAr": [
      "إنفيغادو",
      "بانفيلد",
      "بورتو",
      "موناكو",
      "ريال مدريد",
      "بايرن ميونخ (إعارة)",
      "إيفرتون",
      "الريان",
      "أولمبياكوس",
      "ساو باولو",
      "رايو فاليكانو",
      "ليون المكسيكي",
      "مينيسوتا يونايتد",
      "أتلتيكو ناسيونال"
    ],
    "clubsHistoryEn": [
      "Envigado",
      "Banfield",
      "Porto",
      "Monaco",
      "Real Madrid",
      "Bayern Munich (loan)",
      "Everton",
      "Al-Rayyan",
      "Olympiacos",
      "São Paulo",
      "Rayo Vallecano",
      "Club León",
      "Minnesota United",
      "Atlético Nacional"
    ],
    "clubIds": [
      "porto",
      "monaco",
      "real-madrid",
      "bayern-munich",
      "everton",
      "rayo-vallecano"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/خاميس_رودريغيز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/James_Rodríguez"
  },
  {
    "id": "jose-luis-chilavert",
    "nameAr": "خوسيه لويس تشيلافيرت",
    "nameEn": "José Luis Chilavert",
    "nationalityAr": "باراغواياني",
    "nationalityEn": "Paraguayan",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1982-2004",
    "active": false,
    "bioAr": "حارس مرمى باراغواياني أسطوري اشتهر بقدرته الاستثنائية على تسجيل الأهداف من الركلات الحرة وركلات الجزاء، ويُعد ثاني أعلى حارس مرمى تسجيلًا للأهداف في تاريخ كرة القدم. فاز بجائزة أفضل حارس مرمى في العالم من IFFHS ثلاث مرات.",
    "bioEn": "A legendary Paraguayan goalkeeper renowned for his exceptional ability to score from free kicks and penalties, and the second-highest goalscoring goalkeeper in football history. He won the IFFHS World's Best Goalkeeper award three times.",
    "achievementsAr": [
      "أفضل حارس مرمى في العالم من IFFHS ثلاث مرات (1995، 1997، 1998)",
      "كوبا ليبرتادوريس 1994 مع فيليز سارسفيلد",
      "ثاني أعلى حارس مرمى تسجيلًا للأهداف في التاريخ",
      "المشاركة في 3 بطولات كأس عالم مع باراغواي"
    ],
    "achievementsEn": [
      "IFFHS World's Best Goalkeeper three times (1995, 1997, 1998)",
      "1994 Copa Libertadores with Vélez Sarsfield",
      "Second-highest goalscoring goalkeeper in football history",
      "Played in 3 FIFA World Cups with Paraguay"
    ],
    "clubsHistoryAr": [
      "سبورتيفو لوكينيو",
      "غواراني",
      "سان لورينزو",
      "ريال ثاراغوثا",
      "فيليز سارسفيلد",
      "ستراسبورغ",
      "بينارول"
    ],
    "clubsHistoryEn": [
      "Sportivo Luqueño",
      "Guaraní",
      "San Lorenzo",
      "Real Zaragoza",
      "Vélez Sarsfield",
      "Strasbourg",
      "Peñarol"
    ],
    "clubIds": [
      "real-zaragoza",
      "strasbourg",
      "penarol"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/خوسيه_لويس_تشيلافيرت",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/José_Luis_Chilavert"
  },
  {
    "id": "zbigniew-boniek",
    "nameAr": "زبيغنيف بونييك",
    "nameEn": "Zbigniew Boniek",
    "nationalityAr": "بولندي",
    "nationalityEn": "Polish",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان / جناح أيمن",
      "en": "Midfielder / Right Winger"
    },
    "era": "1973-1988",
    "active": false,
    "bioAr": "يُعد أحد أفضل اللاعبين البولنديين في التاريخ، برز مع يوفنتوس الإيطالي وتوّج بكأس أوروبا للأندية البطلة 1985. حل ثالثًا مع بولندا في مونديال 1982، وشغل لاحقًا منصب نائب رئيس الاتحاد الأوروبي لكرة القدم (يويفا) ورئيس الاتحاد البولندي لكرة القدم.",
    "bioEn": "Regarded as one of the greatest Polish players of all time, he starred for Italian club Juventus and won the 1985 European Cup. He helped Poland finish third at the 1982 World Cup, and later served as UEFA vice-president and president of the Polish Football Association.",
    "achievementsAr": [
      "كأس أوروبا للأندية البطلة 1985 مع يوفنتوس",
      "كأس الكؤوس الأوروبية والسوبر الأوروبي مع يوفنتوس",
      "المركز الثالث في كأس العالم 1982 مع بولندا",
      "ضمن قائمة FIFA 100 لأفضل اللاعبين الأحياء (2004)"
    ],
    "achievementsEn": [
      "1985 European Cup with Juventus",
      "European Cup Winners' Cup and European Super Cup with Juventus",
      "Third place at the 1982 FIFA World Cup with Poland",
      "Named in the FIFA 100 list of greatest living players (2004)"
    ],
    "clubsHistoryAr": [
      "زافيشا بيدغوشتش",
      "فيدزيو لودز",
      "يوفنتوس",
      "روما"
    ],
    "clubsHistoryEn": [
      "Zawisza Bydgoszcz",
      "Widzew Łódź",
      "Juventus",
      "Roma"
    ],
    "clubIds": [
      "juventus",
      "roma"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/زبيغنيو_بونيك",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Zbigniew_Boniek"
  },
  {
    "id": "gheorghe-hagi",
    "nameAr": "غيورغي هاجي",
    "nameEn": "Gheorghe Hagi",
    "nationalityAr": "روماني",
    "nationalityEn": "Romanian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب هجومي",
      "en": "Attacking Midfielder"
    },
    "era": "1982-2001",
    "active": false,
    "bioAr": "يُلقب بـ'مارادونا الكارباط'، ويُعد أعظم لاعب روماني في التاريخ. قاد رومانيا إلى ربع نهائي كأس العالم 1994، ولعب لأندية كبرى مثل ريال مدريد وبرشلونة قبل أن ينهي مسيرته مع غلطة سراي التركي.",
    "bioEn": "Nicknamed 'The Maradona of the Carpathians', he is regarded as the greatest Romanian footballer of all time. He led Romania to the quarter-finals of the 1994 World Cup and played for major clubs including Real Madrid and Barcelona before ending his career at Galatasaray.",
    "achievementsAr": [
      "لاعب العام في رومانيا 7 مرات (رقم قياسي)",
      "كأس الاتحاد الأوروبي والسوبر الأوروبي مع غلطة سراي",
      "الوصول إلى ربع نهائي كأس العالم 1994 مع رومانيا",
      "ضمن قائمة FIFA 100 لأفضل اللاعبين الأحياء (2004)"
    ],
    "achievementsEn": [
      "Romanian Footballer of the Year 7 times (record)",
      "UEFA Cup and UEFA Super Cup with Galatasaray",
      "1994 FIFA World Cup quarter-finalist with Romania",
      "Named in the FIFA 100 list of greatest living players (2004)"
    ],
    "clubsHistoryAr": [
      "فارول كونستانتسا",
      "سبورتول ستودنتشك",
      "شتياوا بوخارست",
      "ريال مدريد",
      "بريشيا",
      "برشلونة",
      "غلطة سراي"
    ],
    "clubsHistoryEn": [
      "Farul Constanța",
      "Sportul Studențesc",
      "Steaua București",
      "Real Madrid",
      "Brescia",
      "Barcelona",
      "Galatasaray"
    ],
    "clubIds": [
      "real-madrid",
      "barcelona",
      "galatasaray"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غورغي_هاجي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gheorghe_Hagi"
  },
  {
    "id": "tim-cahill",
    "nameAr": "تيم كاهيل",
    "nameEn": "Tim Cahill",
    "nationalityAr": "أسترالي",
    "nationalityEn": "Australian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان هجومي / مهاجم",
      "en": "Attacking Midfielder / Forward"
    },
    "era": "1997-2019",
    "active": false,
    "bioAr": "الهداف التاريخي لمنتخب أستراليا وأحد أعظم لاعبيه على الإطلاق، وأول أسترالي يسجل في كأس العالم. اشتهر بقدرته العالية في اللعب الهوائي واحتفاله المميز بالملاكمة عند علم الركنية، وبرز مع إيفرتون في الدوري الإنجليزي الممتاز.",
    "bioEn": "Australia's all-time record goalscorer and one of its greatest-ever players, and the first Australian to score at a FIFA World Cup. Renowned for his exceptional heading ability and trademark corner-flag boxing celebration, he starred for Everton in the Premier League.",
    "achievementsAr": [
      "الهداف التاريخي لمنتخب أستراليا (50 هدفًا)",
      "أول أسترالي يسجل في كأس العالم (2006)",
      "صاحب أكبر عدد أهداف لأسترالي في تاريخ كأس العالم (5 أهداف)",
      "بطولة كأس آسيا 2015 مع أستراليا"
    ],
    "achievementsEn": [
      "Australia's all-time top goalscorer (50 goals)",
      "First Australian to score at a FIFA World Cup (2006)",
      "Most World Cup goals by an Australian (5 goals)",
      "2015 AFC Asian Cup champion with Australia"
    ],
    "clubsHistoryAr": [
      "ميلوول",
      "إيفرتون",
      "نيويورك ريد بولز",
      "شنغهاي شنخوا",
      "هانغتشو غرينتاون",
      "ملبورن سيتي",
      "جامشيدبور"
    ],
    "clubsHistoryEn": [
      "Millwall",
      "Everton",
      "New York Red Bulls",
      "Shanghai Shenhua",
      "Hangzhou Greentown",
      "Melbourne City",
      "Jamshedpur"
    ],
    "clubIds": [
      "millwall",
      "everton"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/تيم_كاهيل",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Tim_Cahill"
  },
  {
    "id": "hakan-sukur",
    "nameAr": "حكان شكور",
    "nameEn": "Hakan Şükür",
    "nationalityAr": "تركي",
    "nationalityEn": "Turkish",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1987-2008",
    "active": false,
    "bioAr": "الهداف التاريخي لمنتخب تركيا ويُلقب بـ'ثور البوسفور'، سجّل أسرع هدف في تاريخ نهائيات كأس العالم (11 ثانية) أمام كوريا الجنوبية عام 2002. أمضى معظم مسيرته مع غلطة سراي وتوّج معه بكأس الاتحاد الأوروبي عام 2000.",
    "bioEn": "Turkey's all-time top goalscorer, nicknamed the 'Bull of the Bosphorus', he scored the fastest goal in FIFA World Cup finals history (11 seconds) against South Korea in 2002. He spent most of his career at Galatasaray, winning the UEFA Cup with them in 2000.",
    "achievementsAr": [
      "الهداف التاريخي لمنتخب تركيا (51 هدفًا)",
      "أسرع هدف في تاريخ نهائيات كأس العالم (11 ثانية، 2002)",
      "كأس الاتحاد الأوروبي والسوبر الأوروبي 2000 مع غلطة سراي",
      "المركز الثالث في كأس العالم 2002 مع تركيا"
    ],
    "achievementsEn": [
      "Turkey's all-time top goalscorer (51 goals)",
      "Fastest goal in FIFA World Cup finals history (11 seconds, 2002)",
      "2000 UEFA Cup and UEFA Super Cup with Galatasaray",
      "Third place at the 2002 FIFA World Cup with Turkey"
    ],
    "clubsHistoryAr": [
      "سكاريا سبور",
      "بورصة سبور",
      "غلطة سراي",
      "تورينو",
      "إنتر ميلان",
      "بارما",
      "بلاكبيرن روفرز",
      "غلطة سراي"
    ],
    "clubsHistoryEn": [
      "Sakaryaspor",
      "Bursaspor",
      "Galatasaray",
      "Torino",
      "Inter Milan",
      "Parma",
      "Blackburn Rovers",
      "Galatasaray"
    ],
    "clubIds": [
      "galatasaray",
      "torino",
      "inter-milan",
      "parma",
      "blackburn-rovers"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/هاكان_شوكور",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hakan_Şükür"
  },
  {
    "id": "zlatan-ibrahimovic",
    "nameAr": "زلاتان إبراهيموفيتش",
    "nameEn": "Zlatan Ibrahimović",
    "nationalityAr": "سويدي",
    "nationalityEn": "Swedish",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1999-2023",
    "active": false,
    "bioAr": "مهاجم سويدي أسطوري وهداف تاريخي للمنتخب السويدي، عُرف بقوته البدنية ومهاراته الفنية العالية وأهدافه الأكروباتية المميزة. لعب لأندية كبرى مثل أياكس وإنتر ميلان وبرشلونة وميلان ومانشستر يونايتد وباريس سان جيرمان ولوس أنجلوس غالاكسي.",
    "bioEn": "Legendary Swedish forward and his country's all-time top scorer, known for his physical power, technical skill and spectacular acrobatic goals. He played for major clubs including Ajax, Inter Milan, Barcelona, AC Milan, Manchester United, Paris Saint-Germain and LA Galaxy.",
    "achievementsAr": [
      "هداف تاريخي للمنتخب السويدي",
      "لقب الدوري الفرنسي عدة مرات مع باريس سان جيرمان",
      "لقب الدوري الإيطالي مع إنتر ميلان وميلان",
      "جائزة أفضل لاعب في الدوري الأمريكي (MLS MVP) 2019"
    ],
    "achievementsEn": [
      "Sweden's all-time record goalscorer",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "Serie A titles with Inter Milan and AC Milan",
      "MLS Most Valuable Player 2019"
    ],
    "clubsHistoryAr": [
      "مالمو",
      "أياكس",
      "يوفنتوس",
      "إنتر ميلان",
      "برشلونة",
      "ميلان",
      "باريس سان جيرمان",
      "مانشستر يونايتد",
      "لوس أنجلوس غالاكسي",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Malmö FF",
      "Ajax",
      "Juventus",
      "Inter Milan",
      "Barcelona",
      "AC Milan",
      "Paris Saint-Germain",
      "Manchester United",
      "LA Galaxy",
      "AC Milan"
    ],
    "clubIds": [
      "ajax",
      "juventus",
      "inter-milan",
      "barcelona",
      "ac-milan",
      "paris-saint-germain",
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/زلاتان_إبراهيموفيتش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Zlatan_Ibrahimović"
  },
  {
    "id": "xherdan-shaqiri",
    "nameAr": "شيردان شاكيري",
    "nameEn": "Xherdan Shaqiri",
    "nationalityAr": "سويسري",
    "nationalityEn": "Swiss",
    "clubAr": "بازل",
    "clubEn": "Basel",
    "clubId": null,
    "position": {
      "ar": "جناح / وسط مهاجم",
      "en": "Winger / Attacking Midfielder"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "لاعب سويسري من أصل كوسوفي، عُرف بمراوغاته السريعة وقدرته على تسجيل أهداف مميزة من خارج منطقة الجزاء. لعب لبازل وبايرن ميونخ وإنتر ميلان وستوك سيتي وليفربول وليون وشيكاغو فاير، ثم عاد إلى بازل. اعتزل اللعب الدولي بعد يورو 2024.",
    "bioEn": "Swiss footballer of Kosovo-Albanian descent, known for his quick dribbling and spectacular long-range goals. He played for Basel, Bayern Munich, Inter Milan, Stoke City, Liverpool, Lyon and Chicago Fire before returning to Basel. He retired from international football after Euro 2024.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2013 مع بايرن ميونخ",
      "لقب الدوري الألماني مع بايرن ميونخ",
      "لقب دوري أبطال أوروبا 2019 مع ليفربول",
      "لقبا الدوري السويسري وكأس سويسرا 2024-2025 مع بازل",
      "سجّل في آخر ثلاث نسخ من كأس العالم وأمم أوروبا حتى 2024 (125 مباراة و32 هدفًا مع سويسرا)"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2013 with Bayern Munich",
      "Bundesliga title with Bayern Munich",
      "UEFA Champions League title 2019 with Liverpool",
      "Swiss Super League and Swiss Cup 2024-25 with Basel",
      "Scored at the last three World Cups and Euros up to 2024 (125 caps, 32 goals for Switzerland)"
    ],
    "clubsHistoryAr": [
      "بازل",
      "بايرن ميونخ",
      "إنتر ميلان",
      "ستوك سيتي",
      "ليفربول",
      "ليون",
      "شيكاغو فاير",
      "بازل"
    ],
    "clubsHistoryEn": [
      "Basel",
      "Bayern Munich",
      "Inter Milan",
      "Stoke City",
      "Liverpool",
      "Lyon",
      "Chicago Fire",
      "Basel"
    ],
    "clubIds": [
      "bayern-munich",
      "inter-milan",
      "stoke-city",
      "liverpool",
      "lyon"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/شيردان_شاكيري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Xherdan_Shaqiri"
  },
  {
    "id": "david-alaba",
    "nameAr": "ديفيد ألابا",
    "nameEn": "David Alaba",
    "nationalityAr": "نمساوي",
    "nationalityEn": "Austrian",
    "clubAr": "بدون نادي",
    "clubEn": "Free agent",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "2008-الآن",
    "active": true,
    "bioAr": "مدافع نمساوي متعدد المراكز يمكنه اللعب في قلب الدفاع أو الظهير الأيسر أو خط الوسط، قضى معظم مسيرته في بايرن ميونخ قبل انتقاله إلى ريال مدريد عام 2021، وغادره في يوليو 2026 بعد انتهاء عقده. أفادت تقارير في سبتمبر 2026 بقرب انضمامه إلى أودينيزي الإيطالي.",
    "bioEn": "Versatile Austrian defender who can play at centre-back, left-back or midfield, spent most of his career at Bayern Munich before joining Real Madrid in 2021 and leaving in July 2026 when his contract expired. Reports in September 2026 said he is set to join Serie A side Udinese.",
    "achievementsAr": [
      "ثلاثة ألقاب دوري أبطال أوروبا مع بايرن ميونخ وريال مدريد (اثنان منها مع ريال)",
      "10 ألقاب دوري ألماني مع بايرن ميونخ",
      "لقبا الدوري الإسباني مع ريال مدريد",
      "قائد المنتخب النمساوي"
    ],
    "achievementsEn": [
      "Multiple UEFA Champions League titles with Bayern Munich and Real Madrid",
      "10 Bundesliga titles with Bayern Munich",
      "La Liga title with Real Madrid",
      "Austria national team captain"
    ],
    "clubsHistoryAr": [
      "أوستريا فيينا",
      "بايرن ميونخ",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Austria Wien",
      "Bayern Munich",
      "Real Madrid"
    ],
    "clubIds": [
      "bayern-munich",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ديفيد_ألابا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/David_Alaba"
  },
  {
    "id": "andrei-arshavin",
    "nameAr": "أندريه أرشافين",
    "nameEn": "Andrei Arshavin",
    "nationalityAr": "روسي",
    "nationalityEn": "Russian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم / مهاجم",
      "en": "Attacking Midfielder / Forward"
    },
    "era": "2000-2018",
    "active": false,
    "bioAr": "لاعب وسط مهاجم روسي، قاد منتخب بلاده للوصول إلى نصف نهائي يورو 2008، واشتهر دوليًا بعد انتقاله إلى آرسنال الإنجليزي حيث سجل أربعة أهداف في مباراة واحدة ضد ليفربول.",
    "bioEn": "Russian attacking midfielder who led his national team to the semi-finals of Euro 2008, and gained international fame after joining Arsenal, where he famously scored four goals in a single match against Liverpool.",
    "achievementsAr": [
      "الوصول لنصف نهائي يورو 2008 مع روسيا",
      "أفضل لاعب في يورو 2008 (ضمن فريق البطولة)",
      "لقب الدوري الروسي مع زينيت سان بطرسبرغ",
      "لقب كأس الاتحاد الأوروبي (يويفا) 2008 مع زينيت"
    ],
    "achievementsEn": [
      "Euro 2008 semi-finalist with Russia",
      "UEFA Euro 2008 Team of the Tournament",
      "Russian Premier League title with Zenit Saint Petersburg",
      "UEFA Cup title 2008 with Zenit"
    ],
    "clubsHistoryAr": [
      "زينيت سان بطرسبرغ",
      "آرسنال",
      "زينيت سان بطرسبرغ"
    ],
    "clubsHistoryEn": [
      "Zenit Saint Petersburg",
      "Arsenal",
      "Zenit Saint Petersburg"
    ],
    "clubIds": [
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أندريه_أرشافين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Andrei_Arshavin"
  },
  {
    "id": "hidetoshi-nakata",
    "nameAr": "هيديتوشي ناكاتا",
    "nameEn": "Hidetoshi Nakata",
    "nationalityAr": "ياباني",
    "nationalityEn": "Japanese",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم",
      "en": "Attacking Midfielder"
    },
    "era": "1995-2006",
    "active": false,
    "bioAr": "يُعتبر أحد أهم اللاعبين اليابانيين في تاريخ اللعبة، كان أول ياباني يحقق نجاحًا كبيرًا في الدوري الإيطالي حيث لعب لروما وبارما وبولونيا وفيورنتينا، وساهم في تعريف العالم بكرة القدم اليابانية.",
    "bioEn": "Widely regarded as one of the most important Japanese players in football history, he was the first Japanese player to achieve major success in Serie A, playing for Roma, Perugia, Parma, Bologna and Fiorentina.",
    "achievementsAr": [
      "لقب الدوري الإيطالي (سكوديتو) 2001 مع روما",
      "لاعب آسيا الأفضل لعام 1997",
      "قاد اليابان إلى دور الـ16 في كأس العالم 2002",
      "أدرج ضمن قائمة أعظم 125 لاعبًا حسب بيليه (FIFA 100)"
    ],
    "achievementsEn": [
      "Serie A title 2001 with Roma",
      "Asian Footballer of the Year 1997",
      "Led Japan to the Round of 16 at the 2002 World Cup",
      "Named among Pelé's FIFA 100 greatest living players"
    ],
    "clubsHistoryAr": [
      "بيلماري هيراتسوكا",
      "بيروجا",
      "روما",
      "بارما",
      "بولونيا",
      "فيورنتينا"
    ],
    "clubsHistoryEn": [
      "Bellmare Hiratsuka",
      "Perugia",
      "Roma",
      "Parma",
      "Bologna",
      "Fiorentina"
    ],
    "clubIds": [
      "roma",
      "parma",
      "bologna",
      "fiorentina"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/هيديتوشي_ناكاتا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hidetoshi_Nakata"
  },
  {
    "id": "shinji-kagawa",
    "nameAr": "شينجي كاجاوا",
    "nameEn": "Shinji Kagawa",
    "nationalityAr": "ياباني",
    "nationalityEn": "Japanese",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم",
      "en": "Attacking Midfielder"
    },
    "era": "2006-2024",
    "active": false,
    "bioAr": "لاعب وسط ياباني موهوب، لفت الأنظار مع بوروسيا دورتموند قبل أن ينتقل إلى مانشستر يونايتد الإنجليزي، عُرف برؤيته الفنية وقدرته على صناعة الأهداف.",
    "bioEn": "Talented Japanese playmaker who rose to prominence with Borussia Dortmund before moving to Manchester United, known for his vision and creativity in the final third.",
    "achievementsAr": [
      "لقبا الدوري الألماني مع بوروسيا دورتموند",
      "لاعب الموسم في الدوري الألماني 2011-2012",
      "لقب الدوري الإنجليزي 2012-2013 مع مانشستر يونايتد",
      "أفضل لاعب آسيوي في عدة مناسبات"
    ],
    "achievementsEn": [
      "Two Bundesliga titles with Borussia Dortmund",
      "Bundesliga Player of the Season 2011-2012",
      "Premier League title 2012-2013 with Manchester United",
      "Multiple-time Asian Footballer of the Year nominee"
    ],
    "clubsHistoryAr": [
      "سيرزو أوساكا",
      "بوروسيا دورتموند",
      "مانشستر يونايتد",
      "بوروسيا دورتموند",
      "بشكتاش",
      "ريال سرقسطة"
    ],
    "clubsHistoryEn": [
      "Cerezo Osaka",
      "Borussia Dortmund",
      "Manchester United",
      "Borussia Dortmund",
      "Beşiktaş",
      "Real Zaragoza"
    ],
    "clubIds": [
      "borussia-dortmund",
      "manchester-united",
      "besiktas",
      "real-zaragoza"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/شينجي_كاجاوا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Shinji_Kagawa"
  },
  {
    "id": "ali-daei",
    "nameAr": "علي دائي",
    "nameEn": "Ali Daei",
    "nationalityAr": "إيراني",
    "nationalityEn": "Iranian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1988-2007",
    "active": false,
    "bioAr": "هداف إيراني أسطوري، صاحب الرقم القياسي العالمي السابق لأكثر الأهداف الدولية تسجيلًا قبل أن يتجاوزه كريستيانو رونالدو، لعب في الدوري الألماني لأندية مثل بايرن ميونخ وهيرتا برلين.",
    "bioEn": "Legendary Iranian striker who formerly held the world record for most international goals scored, before being surpassed by Cristiano Ronaldo. He played in the Bundesliga for clubs including Bayern Munich and Hertha Berlin.",
    "achievementsAr": [
      "الهداف التاريخي لمنتخب إيران وقائده السابق",
      "صاحب الرقم القياسي العالمي السابق لعدد الأهداف الدولية (109 أهداف)",
      "هداف الدوري الآسيوي في مناسبات عدة",
      "أحد أعظم لاعبي آسيا في التاريخ"
    ],
    "achievementsEn": [
      "Iran's all-time top scorer and former captain",
      "Former world record holder for most international goals (109 goals)",
      "Multiple-time Asian top scorer",
      "Widely regarded as one of Asia's greatest-ever players"
    ],
    "clubsHistoryAr": [
      "استقلال طهران",
      "بيروزي",
      "آرمينيا بيليفيلد",
      "بايرن ميونخ",
      "هيرتا برلين",
      "السد"
    ],
    "clubsHistoryEn": [
      "Esteghlal",
      "Persepolis",
      "Arminia Bielefeld",
      "Bayern Munich",
      "Hertha Berlin",
      "Al Sadd"
    ],
    "clubIds": [
      "bayern-munich",
      "hertha-berlin"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/علي_دائي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ali_Daei"
  },
  {
    "id": "mehdi-taremi",
    "nameAr": "مهدي طارمي",
    "nameEn": "Mehdi Taremi",
    "nationalityAr": "إيراني",
    "nationalityEn": "Iranian",
    "clubAr": "إنتر ميلان",
    "clubEn": "Inter Milan",
    "clubId": "inter-milan",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "مهاجم إيراني حالي وقائد منتخب بلاده، لفت الأنظار بأدائه المميز مع بورتو البرتغالي قبل أن ينتقل صفقة حرة إلى إنتر ميلان الإيطالي، معروف بأهدافه العكسية المميزة (البايسكل).",
    "bioEn": "Current Iranian forward and national team captain who impressed at Porto before joining Inter Milan on a free transfer, known for his spectacular bicycle-kick goals.",
    "achievementsAr": [
      "لقب الدوري البرتغالي عدة مرات مع بورتو",
      "هداف الدوري البرتغالي في أحد المواسم",
      "قائد منتخب إيران",
      "الوصول لنهائي دوري أبطال أوروبا 2025 مع إنتر ميلان"
    ],
    "achievementsEn": [
      "Multiple Primeira Liga titles with Porto",
      "Primeira Liga top scorer in one season",
      "Iran national team captain",
      "UEFA Champions League finalist 2025 with Inter Milan"
    ],
    "clubsHistoryAr": [
      "شاهين بوشهر",
      "استقلال أهواز",
      "بيروزي",
      "الغرافة",
      "ريو آفي",
      "بورتو",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Shahin Bushehr",
      "Sanat Naft",
      "Persepolis",
      "Al Gharafa",
      "Rio Ave",
      "Porto",
      "Inter Milan"
    ],
    "clubIds": [
      "porto",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مهدي_طارمي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mehdi_Taremi"
  },
  {
    "id": "benni-mccarthy",
    "nameAr": "بيني مكارثي",
    "nameEn": "Benni McCarthy",
    "nationalityAr": "جنوب أفريقي",
    "nationalityEn": "South African",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1994-2013",
    "active": false,
    "bioAr": "مهاجم جنوب أفريقي، أحد أفضل الهدافين الأفارقة الذين لعبوا في أوروبا، فاز بدوري أبطال أوروبا مع بورتو البرتغالي قبل أن يلعب في الدوري الإنجليزي مع بلاكبيرن روفرز وويست هام يونايتد.",
    "bioEn": "South African striker and one of the most prolific African goalscorers to play in Europe, he won the UEFA Champions League with Porto before playing in the Premier League for Blackburn Rovers and West Ham United.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2004 مع بورتو",
      "لقب الدوري البرتغالي مع بورتو",
      "هداف تاريخي لمنتخب جنوب أفريقيا",
      "أول جنوب أفريقي يسجل في دوري أبطال أوروبا وكأس العالم"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2004 with Porto",
      "Primeira Liga title with Porto",
      "South Africa's all-time top scorer",
      "First South African to score in the Champions League and at a World Cup"
    ],
    "clubsHistoryAr": [
      "أياكس كيب تاون",
      "سلتا فيغو",
      "بورتو",
      "بلاكبيرن روفرز",
      "ويست هام يونايتد"
    ],
    "clubsHistoryEn": [
      "Ajax Cape Town",
      "Celta Vigo",
      "Porto",
      "Blackburn Rovers",
      "West Ham United"
    ],
    "clubIds": [
      "celta-vigo",
      "porto",
      "blackburn-rovers",
      "west-ham-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بيني_مكارثي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Benni_McCarthy"
  },
  {
    "id": "seydou-keita",
    "nameAr": "سيدو كيتا",
    "nameEn": "Seydou Keita",
    "nationalityAr": "مالي",
    "nationalityEn": "Malian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "1998-2017",
    "active": false,
    "bioAr": "لاعب وسط مالي، أحد أفضل لاعبي إفريقيا في جيله، قضى أربعة مواسم مميزة مع برشلونة الإسباني فاز خلالها بالعديد من الألقاب، عُرف بقوته وذكائه التكتيكي في خط الوسط.",
    "bioEn": "Malian midfielder and one of the finest African players of his generation, he spent four highly successful seasons at Barcelona, known for his strength and tactical intelligence in midfield.",
    "achievementsAr": [
      "لقبا دوري أبطال أوروبا مع برشلونة (2009، 2011)",
      "3 ألقاب دوري إسباني مع برشلونة",
      "أفضل لاعب أفريقي (المركز الثاني) عدة مرات",
      "قائد منتخب مالي"
    ],
    "achievementsEn": [
      "Two UEFA Champions League titles with Barcelona (2009, 2011)",
      "Three La Liga titles with Barcelona",
      "Multiple runner-up finishes for African Footballer of the Year",
      "Mali national team captain"
    ],
    "clubsHistoryAr": [
      "استقلال أوسيالو",
      "لينس",
      "إشبيلية",
      "برشلونة",
      "داليان أبيتيان",
      "بيتيس"
    ],
    "clubsHistoryEn": [
      "Stade Malien",
      "RC Lens",
      "Sevilla",
      "Barcelona",
      "Dalian Aerbin",
      "Real Betis"
    ],
    "clubIds": [
      "lens",
      "sevilla",
      "barcelona",
      "real-betis"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سيدو_كيتا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Seydou_Keita"
  },
  {
    "id": "edin-dzeko",
    "nameAr": "إدين دجيكو",
    "nameEn": "Edin Džeko",
    "nationalityAr": "بوسني",
    "nationalityEn": "Bosnian",
    "clubAr": "سراييفو",
    "clubEn": "FK Sarajevo",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "الهداف التاريخي لمنتخب البوسنة والهرسك، لعب لأندية أوروبية كبرى مثل فولفسبورغ ومانشستر سيتي وروما وإنتر ميلان، عُرف بقوته البدنية وحسه التهديفي العالي.",
    "bioEn": "Bosnia and Herzegovina's all-time top scorer, he played for major European clubs including Wolfsburg, Manchester City, Roma and Inter Milan, known for his physical strength and clinical finishing.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي مع مانشستر سيتي (عدة مرات)",
      "لقب الدوري الألماني مع فولفسبورغ 2008-2009",
      "هداف تاريخي لمنتخب البوسنة والهرسك",
      "الوصول لنهائي دوري أبطال أوروبا 2023 مع إنتر ميلان"
    ],
    "achievementsEn": [
      "Premier League titles with Manchester City",
      "Bundesliga title with Wolfsburg 2008-2009",
      "Bosnia and Herzegovina's all-time top scorer",
      "UEFA Champions League finalist 2023 with Inter Milan"
    ],
    "clubsHistoryAr": [
      "جيليزنيتشار",
      "أوسييك",
      "تيبليتسه",
      "فولفسبورغ",
      "مانشستر سيتي",
      "روما",
      "إنتر ميلان",
      "فنربخشة",
      "سراييفو"
    ],
    "clubsHistoryEn": [
      "Željezničar",
      "Slavia Prague (loan)",
      "Teplice",
      "Wolfsburg",
      "Manchester City",
      "Roma",
      "Inter Milan",
      "Fenerbahçe",
      "FK Sarajevo"
    ],
    "clubIds": [
      "vfl-wolfsburg",
      "manchester-city",
      "roma",
      "inter-milan",
      "fenerbahce"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إدين_جيكو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Edin_Džeko"
  },
  {
    "id": "marek-hamsik",
    "nameAr": "ماريك هامشيك",
    "nameEn": "Marek Hamšík",
    "nationalityAr": "سلوفاكي",
    "nationalityEn": "Slovak",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2004-2023",
    "active": false,
    "bioAr": "لاعب وسط سلوفاكي، هو صاحب الرقم القياسي في عدد المباريات والأهداف لنادي نابولي الإيطالي، وقاد منتخب بلاده للوصول إلى دور الـ16 في كأس العالم 2010.",
    "bioEn": "Slovak midfielder who holds Napoli's all-time appearance and goalscoring records, and captained his national team to the Round of 16 at the 2010 World Cup.",
    "achievementsAr": [
      "هداف تاريخي لنادي نابولي",
      "صاحب أكثر عدد مشاركات في تاريخ نابولي",
      "لقب كأس إيطاليا مع نابولي (عدة مرات)",
      "قائد منتخب سلوفاكيا"
    ],
    "achievementsEn": [
      "Napoli's all-time record goalscorer",
      "Napoli's all-time record appearance holder",
      "Multiple Coppa Italia titles with Napoli",
      "Slovakia national team captain"
    ],
    "clubsHistoryAr": [
      "سلوفان براتيسلافا",
      "بروجا",
      "نابولي",
      "داليان بروفيشنال",
      "غوتنبرغ",
      "تريفيزو"
    ],
    "clubsHistoryEn": [
      "Slovan Bratislava",
      "Brescia",
      "Napoli",
      "Dalian Professional",
      "Göteborg",
      "Trabzonspor"
    ],
    "clubIds": [
      "napoli",
      "trabzonspor"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماريك_هامشيك",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marek_Hamšík"
  },
  {
    "id": "gylfi-sigurdsson",
    "nameAr": "جيلفي سيجوردسون",
    "nameEn": "Gylfi Sigurðsson",
    "nationalityAr": "آيسلندي",
    "nationalityEn": "Icelandic",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم",
      "en": "Attacking Midfielder"
    },
    "era": "2005-2023",
    "active": false,
    "bioAr": "لاعب وسط آيسلندي، أحد أبرز نجوم منتخب آيسلندا في مشواره التاريخي بالتأهل لكأس العالم 2018 ويورو 2016، لعب في الدوري الإنجليزي لأندية مثل توتنهام وسوانزي وإيفرتون.",
    "bioEn": "Icelandic attacking midfielder and one of the biggest stars of Iceland's historic runs to Euro 2016 and the 2018 World Cup, he played in the Premier League for Tottenham, Swansea City and Everton.",
    "achievementsAr": [
      "الوصول لربع نهائي يورو 2016 مع آيسلندا",
      "أفضل لاعب في الدوري الإنجليزي الدرجة الأولى (تشامبيونشيب) في أحد المواسم",
      "قائد منتخب آيسلندا",
      "أحد أفضل هدافي آيسلندا التاريخيين"
    ],
    "achievementsEn": [
      "Euro 2016 quarter-finalist with Iceland",
      "Championship Player of the Season in one campaign",
      "Iceland national team captain",
      "One of Iceland's all-time leading scorers"
    ],
    "clubsHistoryAr": [
      "ريدينغ",
      "هوفنهايم",
      "توتنهام",
      "سوانزي سيتي",
      "إيفرتون"
    ],
    "clubsHistoryEn": [
      "Reading",
      "Hoffenheim",
      "Tottenham Hotspur",
      "Swansea City",
      "Everton"
    ],
    "clubIds": [
      "hoffenheim",
      "tottenham",
      "swansea-city",
      "everton"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جيلفي_سيجوردسون",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gylfi_Sigurðsson"
  },
  {
    "id": "alphonso-davies",
    "nameAr": "ألفونسو ديفيز",
    "nameEn": "Alphonso Davies",
    "nationalityAr": "كندي",
    "nationalityEn": "Canadian",
    "clubAr": "بايرن ميونخ",
    "clubEn": "Bayern Munich",
    "clubId": "bayern-munich",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "ظهير أيسر كندي من مواليد مخيم للاجئين في غانا، يُعد من أسرع لاعبي كرة القدم في العالم، انتقل من فانكوفر وايت كابس الكندي إلى بايرن ميونخ الألماني حيث أصبح من أفضل الظهيرة اليسرى في العالم.",
    "bioEn": "Canadian left-back born in a refugee camp in Ghana, regarded as one of the fastest players in world football. He moved from Vancouver Whitecaps to Bayern Munich, where he became one of the world's best left-backs.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2020 مع بايرن ميونخ",
      "عدة ألقاب دوري ألماني مع بايرن ميونخ",
      "قائد منتخب كندا",
      "المشاركة في كأس العالم 2022 مع كندا"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2020 with Bayern Munich",
      "Multiple Bundesliga titles with Bayern Munich",
      "Canada national team captain",
      "2022 FIFA World Cup participant with Canada"
    ],
    "clubsHistoryAr": [
      "فانكوفر وايت كابس",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Vancouver Whitecaps",
      "Bayern Munich"
    ],
    "clubIds": [
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ألفونسو_ديفيز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alphonso_Davies"
  },
  {
    "id": "alexis-sanchez",
    "nameAr": "أليكسيس سانشيز",
    "nameEn": "Alexis Sánchez",
    "nationalityAr": "تشيلي",
    "nationalityEn": "Chilean",
    "clubAr": "أودينيزي",
    "clubEn": "Udinese",
    "clubId": "udinese",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "مهاجم تشيلي، أحد أعظم لاعبي بلاده في التاريخ، فاز بلقبي كوبا أمريكا متتاليين مع منتخب تشيلي، ولعب في أوروبا لأندية بارزة مثل برشلونة وآرسنال ومانشستر يونايتد وإنتر ميلان.",
    "bioEn": "Chilean forward and one of his country's greatest-ever players, he won back-to-back Copa América titles with the national team and played in Europe for major clubs including Barcelona, Arsenal, Manchester United and Inter Milan.",
    "achievementsAr": [
      "لقبا كوبا أمريكا متتاليان مع تشيلي (2015، 2016)",
      "لقب الدوري الإسباني مع برشلونة",
      "هداف تاريخي مشارك لمنتخب تشيلي",
      "لقب الدوري الإيطالي مع إنتر ميلان"
    ],
    "achievementsEn": [
      "Back-to-back Copa América titles with Chile (2015, 2016)",
      "La Liga title with Barcelona",
      "Among Chile's all-time top scorers",
      "Serie A title with Inter Milan"
    ],
    "clubsHistoryAr": [
      "كوبكيرين",
      "كولو كولو",
      "ريفر بليت (إعارة)",
      "أودينيزي",
      "برشلونة",
      "آرسنال",
      "مانشستر يونايتد",
      "إنتر ميلان",
      "مارسيليا",
      "أودينيزي"
    ],
    "clubsHistoryEn": [
      "Cobreloa",
      "Colo-Colo",
      "River Plate (loan)",
      "Udinese",
      "Barcelona",
      "Arsenal",
      "Manchester United",
      "Inter Milan",
      "Marseille",
      "Udinese"
    ],
    "clubIds": [
      "river-plate",
      "udinese",
      "barcelona",
      "arsenal",
      "manchester-united",
      "inter-milan",
      "marseille"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أليكسيس_سانشيز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alexis_Sánchez"
  },
  {
    "id": "arturo-vidal",
    "nameAr": "أرتورو فيدال",
    "nameEn": "Arturo Vidal",
    "nationalityAr": "تشيلي",
    "nationalityEn": "Chilean",
    "clubAr": "كولو كولو",
    "clubEn": "Colo-Colo",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "لاعب وسط تشيلي عُرف بقوته البدنية وحماسه القتالي في الملعب، فاز بلقبي كوبا أمريكا مع منتخب بلاده، ولعب لأندية أوروبية كبرى مثل بايرن ميونخ ويوفنتوس وبرشلونة وإنتر ميلان.",
    "bioEn": "Chilean midfielder known for his physicality and combative spirit on the pitch, he won two Copa América titles with the national team and played for major European clubs including Bayern Munich, Juventus, Barcelona and Inter Milan.",
    "achievementsAr": [
      "لقبا كوبا أمريكا متتاليان مع تشيلي (2015، 2016)",
      "3 ألقاب متتالية في الدوري الألماني (2016 و2017 و2018) مع بايرن ميونخ",
      "عدة ألقاب دوري إيطالي مع يوفنتوس",
      "لقب الدوري الإسباني مع برشلونة"
    ],
    "achievementsEn": [
      "Back-to-back Copa América titles with Chile (2015, 2016)",
      "Bundesliga titles 2016, 2017 and 2018 with Bayern Munich",
      "Multiple Serie A titles with Juventus",
      "La Liga title with Barcelona"
    ],
    "clubsHistoryAr": [
      "كولو كولو",
      "باير ليفركوزن",
      "يوفنتوس",
      "بايرن ميونخ",
      "برشلونة",
      "إنتر ميلان",
      "فلامنغو",
      "أتلتيكو مينيرو",
      "كولو كولو"
    ],
    "clubsHistoryEn": [
      "Colo-Colo",
      "Bayer Leverkusen",
      "Juventus",
      "Bayern Munich",
      "Barcelona",
      "Inter Milan",
      "Flamengo",
      "Atlético Mineiro",
      "Colo-Colo"
    ],
    "clubIds": [
      "bayer-leverkusen",
      "juventus",
      "bayern-munich",
      "barcelona",
      "inter-milan",
      "flamengo"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أرتورو_فيدال",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Arturo_Vidal"
  },
  {
    "id": "paolo-guerrero",
    "nameAr": "باولو غيريرو",
    "nameEn": "Paolo Guerrero",
    "nationalityAr": "بيروفي",
    "nationalityEn": "Peruvian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2000-2024",
    "active": false,
    "bioAr": "الهداف التاريخي لمنتخب بيرو، قاد بلاده للتأهل إلى كأس العالم 2018 بعد غياب طويل، لعب في الدوري الألماني والبرازيلي لأندية مثل بايرن ميونخ وهامبورغ وكورينثيانس وفلامنغو.",
    "bioEn": "Peru's all-time top scorer, he led his country to the 2018 World Cup after a long absence from the tournament. He played in Germany and Brazil for clubs including Bayern Munich, Hamburg, Corinthians and Flamengo.",
    "achievementsAr": [
      "الهداف التاريخي لمنتخب بيرو",
      "هداف كوبا أمريكا 2011",
      "لقب الدوري البرازيلي مع كورينثيانس وفلامنغو",
      "قائد منتخب بيرو"
    ],
    "achievementsEn": [
      "Peru's all-time record goalscorer",
      "2011 Copa América top scorer",
      "Brazilian league titles with Corinthians and Flamengo",
      "Peru national team captain"
    ],
    "clubsHistoryAr": [
      "أليانزا ليما",
      "باير ليفركوزن",
      "هامبورغ",
      "بايرن ميونخ",
      "كورينثيانس",
      "فلامنغو",
      "إنترناسيونال"
    ],
    "clubsHistoryEn": [
      "Alianza Lima",
      "Bayer Leverkusen",
      "Hamburg",
      "Bayern Munich",
      "Corinthians",
      "Flamengo",
      "Internacional"
    ],
    "clubIds": [
      "bayer-leverkusen",
      "bayern-munich",
      "corinthians",
      "flamengo"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/باولو_غيريرو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paolo_Guerrero"
  },
  {
    "id": "keylor-navas",
    "nameAr": "كيلور نافاس",
    "nameEn": "Keylor Navas",
    "nationalityAr": "كوستاريكي",
    "nationalityEn": "Costa Rican",
    "clubAr": "بوماس يونام (المكسيك)",
    "clubEn": "Pumas UNAM (Mexico)",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "حارس مرمى كوستاريكي، كان نجم كأس العالم 2014 التي وصلت فيها كوستاريكا إلى ربع النهائي، وفاز بثلاثية دوري أبطال أوروبا متتالية مع ريال مدريد. لعب لاحقًا لباريس سان جيرمان ونوتنغهام فورست ونيولز أولد بويز الأرجنتيني، وانضم إلى بوماس يونام المكسيكي في يوليو 2025.",
    "bioEn": "Costa Rican goalkeeper who starred at the 2014 World Cup, where Costa Rica reached the quarter-finals, and won three consecutive UEFA Champions League titles with Real Madrid. He later played for Paris Saint-Germain, Nottingham Forest and Argentina's Newell's Old Boys, and joined Mexico's Pumas UNAM in July 2025.",
    "achievementsAr": [
      "3 ألقاب متتالية لدوري أبطال أوروبا مع ريال مدريد (2016-2018)",
      "الوصول لربع نهائي كأس العالم 2014 مع كوستاريكا",
      "لقب الدوري الإسباني 2016-2017 مع ريال مدريد",
      "قائد منتخب كوستاريكا"
    ],
    "achievementsEn": [
      "Three consecutive UEFA Champions League titles with Real Madrid (2016-2018)",
      "2014 FIFA World Cup quarter-finalist with Costa Rica",
      "La Liga title 2016-17 with Real Madrid",
      "Costa Rica national team captain"
    ],
    "clubsHistoryAr": [
      "سابريسا",
      "ألباسيتي",
      "ليفانتي",
      "ريال مدريد",
      "باريس سان جيرمان",
      "نوتنغهام فورست (إعارة)",
      "نيولز أولد بويز",
      "بوماس يونام"
    ],
    "clubsHistoryEn": [
      "Saprissa",
      "Albacete",
      "Levante",
      "Real Madrid",
      "Paris Saint-Germain",
      "Nottingham Forest (loan)",
      "Newell's Old Boys",
      "Pumas UNAM"
    ],
    "clubIds": [
      "levante",
      "real-madrid",
      "paris-saint-germain",
      "nottingham-forest"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كيلور_نافاس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Keylor_Navas"
  },
  {
    "id": "younis-mahmoud",
    "nameAr": "يونس محمود",
    "nameEn": "Younis Mahmoud",
    "nationalityAr": "عراقي",
    "nationalityEn": "Iraqi",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2000-2020",
    "active": false,
    "bioAr": "الهداف التاريخي ومهاجم وقائد منتخب العراق، قاد بلاده لتحقيق أول لقب لها في كأس آسيا عام 2007 وسجل هدف الفوز في المباراة النهائية أمام السعودية.",
    "bioEn": "Iraq's all-time top scorer, forward and captain, he led his country to their first-ever AFC Asian Cup title in 2007, scoring the winning goal in the final against Saudi Arabia.",
    "achievementsAr": [
      "بطولة كأس آسيا 2007 مع العراق",
      "أفضل لاعب في بطولة كأس آسيا 2007",
      "الهداف التاريخي لمنتخب العراق",
      "قائد منتخب العراق"
    ],
    "achievementsEn": [
      "AFC Asian Cup title 2007 with Iraq",
      "AFC Asian Cup 2007 Most Valuable Player",
      "Iraq's all-time record goalscorer",
      "Iraq national team captain"
    ],
    "clubsHistoryAr": [
      "الزوراء",
      "الكويت",
      "القطن الأخضر",
      "الغرافة",
      "الإسماعيلي",
      "الجيش الملكي"
    ],
    "clubsHistoryEn": [
      "Al-Zawraa",
      "Kuwait SC",
      "Al-Gharafa",
      "Ismaily",
      "AGMK",
      "Al-Shorta"
    ],
    "clubIds": [
      "ismaily"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/يونس_محمود",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Younis_Mahmoud"
  },
  {
    "id": "akram-afif",
    "nameAr": "أكرم عفيف",
    "nameEn": "Akram Afif",
    "nationalityAr": "قطري",
    "nationalityEn": "Qatari",
    "clubAr": "السد",
    "clubEn": "Al Sadd",
    "clubId": null,
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "نجم منتخب قطر وقائده، كان العنصر الأبرز في تتويج قطر بلقب كأس آسيا 2023 حيث سجل ثلاثية في النهائي أمام الأردن، ويُعد من أفضل اللاعبين في تاريخ الكرة القطرية.",
    "bioEn": "Qatar's national team star and captain, he was the standout player as Qatar won the 2023 AFC Asian Cup, scoring a hat-trick in the final against Jordan, and is regarded as one of the greatest players in Qatari football history.",
    "achievementsAr": [
      "بطولتا كأس آسيا مع قطر (2019، 2023)",
      "أفضل لاعب في نهائي كأس آسيا 2023",
      "هداف مشارك في عدة نسخ من كأس آسيا",
      "أفضل لاعب في القارة الآسيوية عدة مرات"
    ],
    "achievementsEn": [
      "Two AFC Asian Cup titles with Qatar (2019, 2023)",
      "Man of the Match in the 2023 Asian Cup final",
      "Among the top scorers in multiple Asian Cup editions",
      "Multiple-time Asian Footballer of the Year nominee"
    ],
    "clubsHistoryAr": [
      "السد",
      "فياريال (إعارة)",
      "سبورتينغ خيخون (إعارة)",
      "السد"
    ],
    "clubsHistoryEn": [
      "Al Sadd",
      "Villarreal (loan)",
      "Sporting Gijón (loan)",
      "Al Sadd"
    ],
    "clubIds": [
      "villarreal",
      "sporting-gijon"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أكرم_عفيف",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Akram_Afif"
  },
  {
    "id": "wahbi-khazri",
    "nameAr": "وهبي الخزري",
    "nameEn": "Wahbi Khazri",
    "nationalityAr": "تونسي",
    "nationalityEn": "Tunisian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم / مهاجم",
      "en": "Attacking Midfielder / Forward"
    },
    "era": "2010-2024",
    "active": false,
    "bioAr": "نجم منتخب تونس وقائده السابق، لعب في الدوري الفرنسي لأندية مثل بوردو ورين وسان إيتيان، عُرف بقوة تسديداته من خارج منطقة الجزاء وقيادته الهجومية لمنتخب بلاده في ثلاث بطولات كأس عالم متتالية.",
    "bioEn": "Tunisia national team star and former captain, he played in Ligue 1 for clubs including Bordeaux, Rennes and Saint-Étienne, known for his powerful long-range shooting and leading Tunisia's attack across three consecutive World Cups.",
    "achievementsAr": [
      "المشاركة في ثلاث نسخ متتالية من كأس العالم مع تونس (2018، 2022، وتصفيات لاحقة)",
      "هداف مشارك لمنتخب تونس",
      "قائد منتخب تونس",
      "هدف الفوز التاريخي على فرنسا في كأس العالم 2022"
    ],
    "achievementsEn": [
      "Participated in multiple FIFA World Cups with Tunisia (2018, 2022)",
      "Among Tunisia's top scorers",
      "Tunisia national team captain",
      "Scored Tunisia's historic winning goal against France at the 2022 World Cup"
    ],
    "clubsHistoryAr": [
      "النادي الصفاقسي",
      "أجاكسيو",
      "بستيا",
      "بوردو",
      "سندرلاند (إعارة)",
      "رين",
      "سان إيتيان",
      "مونبلييه"
    ],
    "clubsHistoryEn": [
      "CS Sfaxien",
      "Ajaccio",
      "Bastia",
      "Bordeaux",
      "Sunderland (loan)",
      "Rennes",
      "Saint-Étienne",
      "Montpellier"
    ],
    "clubIds": [
      "cs-sfaxien",
      "bordeaux",
      "sunderland",
      "rennes",
      "saint-etienne",
      "montpellier"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/وهبي_الخزري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Wahbi_Khazri"
  },
  {
    "id": "eusebio",
    "nameAr": "يوسيبيو",
    "nameEn": "Eusébio",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1957-1979",
    "active": false,
    "bioAr": "أسطورة برتغالية وموزمبيقية المولد، يُلقب بـ'الفهد الأسود'، أحد أعظم مهاجمي التاريخ وهداف تاريخي لنادي بنفيكا والمنتخب البرتغالي، قاد البرتغال للمركز الثالث في كأس العالم 1966 وكان هداف البطولة.",
    "bioEn": "Portuguese legend born in Mozambique, nicknamed the 'Black Panther', regarded as one of the greatest forwards of all time. Benfica and Portugal's all-time top scorer, he led Portugal to third place at the 1966 World Cup and was the tournament's top scorer.",
    "achievementsAr": [
      "الحذاء الذهبي وهداف كأس العالم 1966 (9 أهداف)",
      "الكرة الذهبية 1965",
      "لقب دوري أبطال أوروبا 1962 مع بنفيكا",
      "الهداف التاريخي لنادي بنفيكا والمنتخب البرتغالي"
    ],
    "achievementsEn": [
      "1966 FIFA World Cup Golden Boot and top scorer (9 goals)",
      "Ballon d'Or 1965",
      "European Cup title 1962 with Benfica",
      "All-time top scorer for both Benfica and Portugal"
    ],
    "clubsHistoryAr": [
      "سبورتينغ لورينسو ماركيش",
      "بنفيكا",
      "بوسطن مينوتمن",
      "لاس فيغاس كويكس",
      "طورونتو ميتروز-كرواتيا"
    ],
    "clubsHistoryEn": [
      "Sporting Lourenço Marques",
      "Benfica",
      "Boston Minutemen",
      "Las Vegas Quicksilvers",
      "Toronto Metros-Croatia"
    ],
    "clubIds": [
      "benfica"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/يوسيبيو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Eusébio"
  },
  {
    "id": "franco-baresi",
    "nameAr": "فرانكو باريزي",
    "nameEn": "Franco Baresi",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع (ليبرو)",
      "en": "Defender (Sweeper)"
    },
    "era": "1977-1997",
    "active": false,
    "bioAr": "يُعتبر أحد أعظم المدافعين في تاريخ كرة القدم، قضى مسيرته بأكملها مع ميلان الإيطالي وكان قائده لسنوات طويلة، شكّل مع نستا وباولو مالديني خط دفاع أسطوري، وقاد إيطاليا لنهائي كأس العالم 1994.",
    "bioEn": "Widely regarded as one of the greatest defenders in football history, he spent his entire career at AC Milan and captained the club for many years, forming a legendary defensive line, and led Italy to the 1994 World Cup final.",
    "achievementsAr": [
      "3 ألقاب دوري أبطال أوروبا مع ميلان",
      "6 ألقاب دوري إيطالي مع ميلان",
      "الوصول لنهائي كأس العالم 1994 مع إيطاليا (قائدًا)",
      "أدرج ضمن قائمة أعظم 125 لاعبًا حسب بيليه (FIFA 100)"
    ],
    "achievementsEn": [
      "3 European Cup/Champions League titles with Milan",
      "6 Serie A titles with Milan",
      "1994 FIFA World Cup finalist with Italy (as captain)",
      "Named among Pelé's FIFA 100 greatest living players"
    ],
    "clubsHistoryAr": [
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Milan"
    ],
    "clubIds": [
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فرانكو_باريزي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Franco_Baresi"
  },
  {
    "id": "paul-gascoigne",
    "nameAr": "بول غاسكوين",
    "nameEn": "Paul Gascoigne",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم",
      "en": "Attacking Midfielder"
    },
    "era": "1985-2004",
    "active": false,
    "bioAr": "لاعب وسط إنجليزي، يُعتبر من أكثر اللاعبين موهبة في جيله، اشتهر بأدائه المؤثر في كأس العالم 1990 وبكائه الشهير بعد الإنذار في نصف النهائي، لعب لتوتنهام ولاتسيو الإيطالي وريدجرز الاسكتلندي.",
    "bioEn": "English attacking midfielder regarded as one of the most naturally gifted players of his generation, famous for his emotional performance and iconic tears after being booked in the 1990 World Cup semi-final. He played for Tottenham, Lazio and Rangers.",
    "achievementsAr": [
      "الوصول لنصف نهائي كأس العالم 1990 مع إنجلترا",
      "لقب كأس الاتحاد الإنجليزي 1991 مع توتنهام",
      "3 ألقاب دوري اسكتلندي مع ريدجرز",
      "لاعب العام الشاب في إنجلترا 1988"
    ],
    "achievementsEn": [
      "1990 FIFA World Cup semi-finalist with England",
      "1991 FA Cup title with Tottenham Hotspur",
      "3 Scottish league titles with Rangers",
      "PFA Young Player of the Year 1988"
    ],
    "clubsHistoryAr": [
      "نيوكاسل يونايتد",
      "توتنهام",
      "لاتسيو",
      "ريدجرز",
      "ميدلزبره",
      "إيفرتون",
      "برنلي"
    ],
    "clubsHistoryEn": [
      "Newcastle United",
      "Tottenham Hotspur",
      "Lazio",
      "Rangers",
      "Middlesbrough",
      "Everton",
      "Burnley"
    ],
    "clubIds": [
      "newcastle-united",
      "tottenham",
      "lazio",
      "rangers",
      "middlesbrough",
      "everton",
      "burnley"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بول_غاسكوين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paul_Gascoigne"
  },
  {
    "id": "miroslav-klose",
    "nameAr": "ميروسلاف كلوزه",
    "nameEn": "Miroslav Klose",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1998-2016",
    "active": false,
    "bioAr": "مهاجم ألماني من مواليد بولندا، صاحب الرقم القياسي التاريخي لأكثر الأهداف تسجيلًا في تاريخ نهائيات كأس العالم (16 هدفًا)، تُوّج بلقب كأس العالم 2014 مع ألمانيا، ولعب لكايزرسلاوترن وفيردر بريمن وبايرن ميونخ ولاتسيو.",
    "bioEn": "German forward born in Poland, holder of the all-time record for most goals scored at FIFA World Cup finals (16 goals). He won the 2014 World Cup with Germany and played for Kaiserslautern, Werder Bremen, Bayern Munich and Lazio.",
    "achievementsAr": [
      "الرقم القياسي التاريخي لأكثر الأهداف في نهائيات كأس العالم (16 هدفًا)",
      "بطولة كأس العالم 2014 مع ألمانيا",
      "حذاء ذهبي كأس العالم 2006",
      "كأس إيطاليا 2013 مع لاتسيو"
    ],
    "achievementsEn": [
      "All-time record for most FIFA World Cup finals goals (16 goals)",
      "2014 FIFA World Cup title with Germany",
      "2006 FIFA World Cup Golden Boot",
      "Coppa Italia 2013 with Lazio"
    ],
    "clubsHistoryAr": [
      "كايزرسلاوترن",
      "فيردر بريمن",
      "بايرن ميونخ",
      "لاتسيو"
    ],
    "clubsHistoryEn": [
      "Kaiserslautern",
      "Werder Bremen",
      "Bayern Munich",
      "Lazio"
    ],
    "clubIds": [
      "kaiserslautern",
      "werder-bremen",
      "bayern-munich",
      "lazio"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ميروسلاف_كلوزه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Miroslav_Klose"
  },
  {
    "id": "gabriel-batistuta",
    "nameAr": "غابرييل باتيستوتا",
    "nameEn": "Gabriel Batistuta",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1988-2005",
    "active": false,
    "bioAr": "أحد أعظم المهاجمين الأرجنتينيين في التاريخ، يُلقب بـ'باتيغول'، هداف تاريخي لمنتخب الأرجنتين لسنوات طويلة، اشتهر مع فيورنتينا الإيطالي بتسديداته القوية وأهدافه الحاسمة قبل انتقاله إلى روما.",
    "bioEn": "One of the greatest Argentine strikers in history, nicknamed 'Batigol', he was Argentina's all-time top scorer for many years. He became a legend at Fiorentina, known for his powerful shooting and clinical finishing, before moving to Roma.",
    "achievementsAr": [
      "الهداف التاريخي السابق لمنتخب الأرجنتين",
      "لقب الدوري الإيطالي 2000-2001 مع روما",
      "هداف كوبا أمريكا 1991 و1995",
      "أسطورة نادي فيورنتينا"
    ],
    "achievementsEn": [
      "Former all-time top scorer for the Argentina national team",
      "Serie A title 2000-2001 with Roma",
      "Copa América top scorer 1991 and 1995",
      "Fiorentina club legend"
    ],
    "clubsHistoryAr": [
      "نيويلز أولد بويز",
      "ريفر بليت",
      "بوكا جونيورز",
      "فيورنتينا",
      "روما",
      "إنتر ميلان",
      "الدحيل"
    ],
    "clubsHistoryEn": [
      "Newell's Old Boys",
      "River Plate",
      "Boca Juniors",
      "Fiorentina",
      "Roma",
      "Inter Milan",
      "Al Arabi"
    ],
    "clubIds": [
      "river-plate",
      "boca-juniors",
      "fiorentina",
      "roma",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غابرييل_باتيستوتا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gabriel_Batistuta"
  },
  {
    "id": "davor-suker",
    "nameAr": "دافور شوكر",
    "nameEn": "Davor Šuker",
    "nationalityAr": "كرواتي",
    "nationalityEn": "Croatian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1986-2003",
    "active": false,
    "bioAr": "الهداف التاريخي لمنتخب كرواتيا، قاد بلاده للمركز الثالث في كأس العالم 1998 وكان الهداف الأول للبطولة بستة أهداف، لعب لديناموزغرب وسيفيا وريال مدريد وآرسنال.",
    "bioEn": "Croatia's all-time top scorer, he led his country to third place at the 1998 World Cup and was the tournament's top scorer with six goals. He played for Dinamo Zagreb, Sevilla, Real Madrid and Arsenal.",
    "achievementsAr": [
      "الحذاء الذهبي وهداف كأس العالم 1998 (6 أهداف)",
      "المركز الثالث في كأس العالم 1998 مع كرواتيا",
      "لقب دوري أبطال أوروبا 1998 مع ريال مدريد",
      "الهداف التاريخي لمنتخب كرواتيا"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup Golden Boot and top scorer (6 goals)",
      "Third place at the 1998 World Cup with Croatia",
      "UEFA Champions League title 1998 with Real Madrid",
      "Croatia's all-time record goalscorer"
    ],
    "clubsHistoryAr": [
      "ديناموزغرب",
      "سيفيا",
      "ريال مدريد",
      "آرسنال",
      "1899 هوفنهايم",
      "ويست هام يونايتد"
    ],
    "clubsHistoryEn": [
      "Dinamo Zagreb",
      "Sevilla",
      "Real Madrid",
      "Arsenal",
      "1899 Hoffenheim",
      "West Ham United"
    ],
    "clubIds": [
      "sevilla",
      "real-madrid",
      "arsenal",
      "hoffenheim",
      "west-ham-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دافور_شوكر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Davor_Šuker"
  },
  {
    "id": "roger-milla",
    "nameAr": "روجيه ميلا",
    "nameEn": "Roger Milla",
    "nationalityAr": "كاميروني",
    "nationalityEn": "Cameroonian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1968-1996",
    "active": false,
    "bioAr": "أسطورة كاميرونية وأحد أهم رموز كرة القدم الأفريقية، أذهل العالم بأدائه مع الكاميرون في كأس العالم 1990 وهو في التاسعة والثلاثين من عمره واحتفالاته الراقصة الشهيرة عند ركن الملعب، ليصبح أكبر هداف سنًا في تاريخ كأس العالم آنذاك.",
    "bioEn": "Cameroonian legend and one of the most iconic figures in African football history, he stunned the world with his performances for Cameroon at the 1990 World Cup at age 38, including his famous corner-flag dance celebrations, becoming the oldest goalscorer in World Cup history at the time.",
    "achievementsAr": [
      "الوصول لربع نهائي كأس العالم 1990 مع الكاميرون (أول أفريقي)",
      "لقبا كأس أمم أفريقيا مع الكاميرون (1984، 1988)",
      "أفضل لاعب أفريقي 1976 و1990",
      "أكبر هداف سنًا في تاريخ نهائيات كأس العالم عند تسجيله عام 1994"
    ],
    "achievementsEn": [
      "First African team to reach the World Cup quarter-finals, Cameroon 1990",
      "Two Africa Cup of Nations titles with Cameroon (1984, 1988)",
      "African Footballer of the Year 1976 and 1990",
      "Oldest goalscorer in FIFA World Cup history at the time (1994)"
    ],
    "clubsHistoryAr": [
      "ليوباردز دوالا",
      "تونير ياوندي",
      "فالنسيان",
      "موناكو",
      "باستيا",
      "سان إتيان",
      "مونبلييه",
      "جي إس ألاجاكوري (إعارة)"
    ],
    "clubsHistoryEn": [
      "Léopard Douala",
      "Tonnerre Yaoundé",
      "Valenciennes",
      "AS Monaco",
      "Bastia",
      "Saint-Étienne",
      "Montpellier",
      "JS Saint-Pierroise (loan)"
    ],
    "clubIds": [
      "monaco",
      "saint-etienne",
      "montpellier"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روجيه_ميلا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Roger_Milla"
  },
  {
    "id": "zico",
    "nameAr": "زيكو",
    "nameEn": "Zico",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم",
      "en": "Attacking Midfielder"
    },
    "era": "1971-1994",
    "active": false,
    "bioAr": "يُلقب بـ'الأبيض بيليه'، أحد أعظم لاعبي الوسط في تاريخ البرازيل، تألق مع فلامنغو وقاد المنتخب البرازيلي المميز في كأس العالم 1982 رغم عدم إحراز اللقب، اشتُهر بضرباته الحرة الرائعة.",
    "bioEn": "Nicknamed the 'White Pelé', one of the greatest midfielders in Brazilian history, he starred for Flamengo and led the celebrated Brazil side at the 1982 World Cup, renowned for his exceptional free-kick technique.",
    "achievementsAr": [
      "لقب كأس ليبرتادوريس والكأس العالمية للأندية 1981 مع فلامنغو",
      "المركز الثالث في مسابقة الكرة الذهبية 1983",
      "الهداف التاريخي لنادي فلامنغو",
      "أحد نجوم منتخب البرازيل الأسطوري في كأس العالم 1982"
    ],
    "achievementsEn": [
      "Copa Libertadores and Intercontinental Cup title 1981 with Flamengo",
      "Third place in the 1983 Ballon d'Or voting",
      "Flamengo's all-time top scorer",
      "Star of Brazil's celebrated 1982 World Cup squad"
    ],
    "clubsHistoryAr": [
      "فلامنغو",
      "أودينيزي",
      "كاشيما أنتلرز"
    ],
    "clubsHistoryEn": [
      "Flamengo",
      "Udinese",
      "Kashima Antlers"
    ],
    "clubIds": [
      "flamengo",
      "udinese"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/زيكو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Zico"
  },
  {
    "id": "romario",
    "nameAr": "روماريو",
    "nameEn": "Romário",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1985-2008",
    "active": false,
    "bioAr": "أحد أعظم الهدافين في تاريخ كرة القدم، تُوّج بكأس العالم 1994 مع البرازيل وحصل على الكرة الذهبية لأفضل لاعب في البطولة، تألق مع برشلونة الإسباني قبل ذلك بموسم استثنائي.",
    "bioEn": "One of the greatest goalscorers in football history, he won the 1994 World Cup with Brazil and was named the tournament's best player. He had an outstanding season at Barcelona before that title triumph.",
    "achievementsAr": [
      "بطولة كأس العالم 1994 مع البرازيل",
      "الكرة الذهبية لأفضل لاعب في كأس العالم 1994",
      "لقب الدوري الإسباني 1993-1994 مع برشلونة",
      "هداف تاريخي بأكثر من ألف هدف في مسيرته حسب تصريحاته الشخصية"
    ],
    "achievementsEn": [
      "1994 FIFA World Cup title with Brazil",
      "Golden Ball for the 1994 World Cup's best player",
      "La Liga title 1993-1994 with Barcelona",
      "Claimed over 1,000 career goals by his own personal count"
    ],
    "clubsHistoryAr": [
      "فاسكو دا غاما",
      "PSV آيندهوفن",
      "برشلونة",
      "فلامنغو",
      "فالنسيا",
      "فاسكو دا غاما"
    ],
    "clubsHistoryEn": [
      "Vasco da Gama",
      "PSV Eindhoven",
      "Barcelona",
      "Flamengo",
      "Valencia",
      "Vasco da Gama"
    ],
    "clubIds": [
      "psv-eindhoven",
      "barcelona",
      "flamengo",
      "valencia"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روماريو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Romário"
  },
  {
    "id": "garrincha",
    "nameAr": "غارينشا",
    "nameEn": "Garrincha",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "1953-1972",
    "active": false,
    "bioAr": "يُعتبر أحد أعظم الجناحين في تاريخ كرة القدم رغم تشوه خلقي في ساقيه، فاز بكأس العالم مرتين مع البرازيل (1958، 1962) وكان أفضل لاعب في بطولة 1962، اشتهر بمراوغاته الاستعراضية التي لا تُضاهى.",
    "bioEn": "Considered one of the greatest wingers in football history despite a congenital leg deformity, he won two World Cups with Brazil (1958, 1962) and was named the best player of the 1962 tournament, renowned for his unmatched dribbling skill.",
    "achievementsAr": [
      "بطولتا كأس العالم مع البرازيل (1958، 1962)",
      "أفضل لاعب في كأس العالم 1962",
      "هداف مشارك في كأس العالم 1962",
      "أحد أعظم الجناحين في تاريخ اللعبة"
    ],
    "achievementsEn": [
      "Two FIFA World Cup titles with Brazil (1958, 1962)",
      "Best player of the 1962 FIFA World Cup",
      "Joint top scorer at the 1962 World Cup",
      "Regarded as one of the greatest wingers in the history of the game"
    ],
    "clubsHistoryAr": [
      "بوتافوغو",
      "كورينثيانس",
      "فلامنغو",
      "أوليمبيا (باراغواي)"
    ],
    "clubsHistoryEn": [
      "Botafogo",
      "Corinthians",
      "Flamengo",
      "Olimpia (Paraguay)"
    ],
    "clubIds": [
      "corinthians",
      "flamengo"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غارينشا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Garrincha"
  },
  {
    "id": "socrates",
    "nameAr": "سقراط",
    "nameEn": "Sócrates",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان / صانع لعب",
      "en": "Midfielder / Playmaker"
    },
    "era": "1974-1989",
    "active": false,
    "bioAr": "لاعب وسط برازيلي وطبيب حاصل على شهادة الطب، يُعتبر عقل منتخب البرازيل المميز في كأس العالم 1982، اشتهر بأناقته الفنية وضرباته الرأسية الخلفية المدهشة، وكان قائد فريق كورينثيانس ورائد حركة 'الديمقراطية الكورنثية'.",
    "bioEn": "Brazilian midfielder and qualified medical doctor, regarded as the brains of Brazil's celebrated 1982 World Cup side, known for his elegant technique and spectacular back-heel finishes. He captained Corinthians and pioneered the 'Corinthians Democracy' movement.",
    "achievementsAr": [
      "قائد منتخب البرازيل المميز في كأس العالم 1982",
      "لاعب العام في أمريكا الجنوبية 1983",
      "أسطورة نادي كورينثيانس",
      "رائد حركة 'الديمقراطية الكورنثية' الاجتماعية"
    ],
    "achievementsEn": [
      "Captained Brazil's celebrated 1982 World Cup squad",
      "South American Footballer of the Year 1983",
      "Corinthians club legend",
      "Pioneer of the 'Corinthians Democracy' social movement"
    ],
    "clubsHistoryAr": [
      "بوتافوغو-ساو باولو",
      "كورينثيانس",
      "فيورنتينا",
      "فلامنغو",
      "سانتوس"
    ],
    "clubsHistoryEn": [
      "Botafogo-SP",
      "Corinthians",
      "Fiorentina",
      "Flamengo",
      "Santos"
    ],
    "clubIds": [
      "corinthians",
      "fiorentina",
      "flamengo",
      "santos-fc"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سقراط_(لاعب_كرة_قدم)",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sócrates_(footballer)"
  },
  {
    "id": "cafu",
    "nameAr": "كافو",
    "nameEn": "Cafu",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "ظهير أيمن",
      "en": "Right-back"
    },
    "era": "1989-2008",
    "active": false,
    "bioAr": "صاحب الرقم القياسي كأكثر لاعب مشاركة في نهائيات كأس العالم لمنتخب البرازيل، اللاعب الوحيد الذي شارك في ثلاث نهائيات متتالية لكأس العالم (1994، 1998، 2002)، تُوّج باللقب مرتين وكان قائد فريق 2002.",
    "bioEn": "Holder of the record for most FIFA World Cup final appearances for Brazil, the only player to feature in three consecutive World Cup finals (1994, 1998, 2002), winning the title twice and captaining the 2002 squad.",
    "achievementsAr": [
      "بطولتا كأس العالم مع البرازيل (1994، 2002) كقائد في 2002",
      "المشاركة في 3 نهائيات كأس عالم متتالية (رقم قياسي)",
      "لقب دوري أبطال أوروبا 2007 مع ميلان",
      "أسطورة نادي روما وميلان"
    ],
    "achievementsEn": [
      "Two FIFA World Cup titles with Brazil (1994, 2002), captaining the 2002 team",
      "Only player to appear in three consecutive World Cup finals",
      "UEFA Champions League title 2007 with Milan",
      "Legend at both Roma and Milan"
    ],
    "clubsHistoryAr": [
      "ساو باولو",
      "زاراغوزا",
      "روما",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "São Paulo",
      "Real Zaragoza",
      "Roma",
      "Milan"
    ],
    "clubIds": [
      "real-zaragoza",
      "roma",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كافو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Cafu"
  },
  {
    "id": "yaya-toure",
    "nameAr": "ياي توريه",
    "nameEn": "Yaya Touré",
    "nationalityAr": "إيفواري",
    "nationalityEn": "Ivorian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان",
      "en": "Midfielder"
    },
    "era": "2001-2019",
    "active": false,
    "bioAr": "لاعب وسط إيفواري قوي البنية، فاز بلقب أفضل لاعب أفريقي أربع مرات متتالية، كان محوريًا في نجاحات مانشستر سيتي الإنجليزي وفاز معه بلقبي الدوري الممتاز، وتُوّج بكأس أمم أفريقيا 2015 مع ساحل العاج.",
    "bioEn": "Powerful Ivorian midfielder who won the African Footballer of the Year award four consecutive times, was central to Manchester City's success in England, winning two Premier League titles, and won the 2015 Africa Cup of Nations with Ivory Coast.",
    "achievementsAr": [
      "أفضل لاعب أفريقي أربع مرات متتالية (2011-2014)",
      "لقبا الدوري الإنجليزي الممتاز مع مانشستر سيتي",
      "كأس أمم أفريقيا 2015 مع ساحل العاج",
      "لقب دوري أبطال أوروبا 2009 مع برشلونة"
    ],
    "achievementsEn": [
      "African Footballer of the Year four times in a row (2011-2014)",
      "Two Premier League titles with Manchester City",
      "2015 Africa Cup of Nations title with Ivory Coast",
      "UEFA Champions League title 2009 with Barcelona"
    ],
    "clubsHistoryAr": [
      "ASEC ميموزا",
      "بني ياس",
      "متالورغ دونيتسك",
      "موناكو",
      "أولمبياكوس",
      "برشلونة",
      "مانشستر سيتي",
      "أولمبياكوس"
    ],
    "clubsHistoryEn": [
      "ASEC Mimosas",
      "Beveren",
      "Metalurh Donetsk",
      "Monaco",
      "Olympiacos",
      "Barcelona",
      "Manchester City",
      "Olympiacos"
    ],
    "clubIds": [
      "monaco",
      "barcelona",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ياي_توريه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Yaya_Touré"
  },
  {
    "id": "hossam-hassan",
    "nameAr": "حسام حسن",
    "nameEn": "Hossam Hassan",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1985-2007",
    "active": false,
    "bioAr": "الهداف التاريخي لمنتخب مصر والنادي الأهلي، يُعتبر أحد أعظم المهاجمين في تاريخ الكرة المصرية والأفريقية، توأمه إبراهيم حسن لعب معه في خط الوسط والهجوم لسنوات طويلة.",
    "bioEn": "Egypt and Al Ahly's all-time top scorer, regarded as one of the greatest forwards in Egyptian and African football history. His twin brother Ibrahim Hassan played alongside him for years in midfield and attack.",
    "achievementsAr": [
      "الهداف التاريخي لمنتخب مصر",
      "الهداف التاريخي للنادي الأهلي",
      "لقب كأس أمم أفريقيا 1998 مع مصر",
      "عدة ألقاب دوري مصري وأفريقي مع الأهلي"
    ],
    "achievementsEn": [
      "Egypt's all-time record goalscorer",
      "Al Ahly's all-time record goalscorer",
      "Africa Cup of Nations title 1998 with Egypt",
      "Multiple Egyptian league and African club titles with Al Ahly"
    ],
    "clubsHistoryAr": [
      "الأهلي",
      "نويشاتل إكزيلسيور (سويسرا)",
      "الأهلي"
    ],
    "clubsHistoryEn": [
      "Al Ahly",
      "Neuchâtel Xamax (Switzerland)",
      "Al Ahly"
    ],
    "clubIds": [
      "al-ahly"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/حسام_حسن",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hossam_Hassan"
  },
  {
    "id": "alessandro-del-piero",
    "nameAr": "أليساندرو ديل بييرو",
    "nameEn": "Alessandro Del Piero",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم / وسط مهاجم",
      "en": "Forward / Attacking Midfielder"
    },
    "era": "1991-2014",
    "active": false,
    "bioAr": "الهداف التاريخي لنادي يوفنتوس وأحد أعظم لاعبيه على الإطلاق، تُوّج بكأس العالم 2006 مع إيطاليا، عُرف بضرباته المنحنية المميزة المعروفة بـ'زاوية ديل بييرو'.",
    "bioEn": "Juventus' all-time record goalscorer and one of the club's greatest-ever players, he won the 2006 World Cup with Italy, renowned for his trademark curling shots known as the 'Del Piero zone'.",
    "achievementsAr": [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "الهداف التاريخي لنادي يوفنتوس",
      "لقب دوري أبطال أوروبا 1996 مع يوفنتوس",
      "6 ألقاب دوري إيطالي مع يوفنتوس"
    ],
    "achievementsEn": [
      "2006 FIFA World Cup title with Italy",
      "Juventus' all-time record goalscorer",
      "UEFA Champions League title 1996 with Juventus",
      "6 Serie A titles with Juventus"
    ],
    "clubsHistoryAr": [
      "يوفنتوس",
      "سيدني إف سي",
      "دلهي دينامو"
    ],
    "clubsHistoryEn": [
      "Juventus",
      "Sydney FC",
      "Delhi Dynamos"
    ],
    "clubIds": [
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أليساندرو_ديل_بييرو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alessandro_Del_Piero"
  },
  {
    "id": "dino-zoff",
    "nameAr": "دينو زوف",
    "nameEn": "Dino Zoff",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1961-1983",
    "active": false,
    "bioAr": "أحد أعظم حراس المرمى في تاريخ كرة القدم، قاد إيطاليا للفوز بكأس العالم 1982 وهو في الأربعين من عمره ليصبح أكبر لاعب سنًا يفوز بالبطولة، لعب لنابولي ويوفنتوس لسنوات طويلة.",
    "bioEn": "One of the greatest goalkeepers in football history, he captained Italy to the 1982 World Cup title at age 40, becoming the oldest player to win the tournament. He had a long career with Napoli and Juventus.",
    "achievementsAr": [
      "بطولة كأس العالم 1982 مع إيطاليا (قائدًا)",
      "أكبر لاعب سنًا يفوز بكأس العالم",
      "6 ألقاب دوري إيطالي مع يوفنتوس",
      "لقب كأس الاتحاد الأوروبي 1977 مع يوفنتوس"
    ],
    "achievementsEn": [
      "1982 FIFA World Cup title with Italy (as captain)",
      "Oldest player to win a FIFA World Cup",
      "6 Serie A titles with Juventus",
      "UEFA Cup title 1977 with Juventus"
    ],
    "clubsHistoryAr": [
      "أودينيزي",
      "مانتوفا",
      "نابولي",
      "يوفنتوس"
    ],
    "clubsHistoryEn": [
      "Udinese",
      "Mantova",
      "Napoli",
      "Juventus"
    ],
    "clubIds": [
      "udinese",
      "napoli",
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دينو_زوف",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dino_Zoff"
  },
  {
    "id": "gary-lineker",
    "nameAr": "غاري لينيكر",
    "nameEn": "Gary Lineker",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1978-1994",
    "active": false,
    "bioAr": "مهاجم إنجليزي، هداف كأس العالم 1986 وأحد أفضل هدافي تاريخ منتخب إنجلترا، عُرف بلعبه النظيف حيث لم يُطرد أو يُنذر طوال مسيرته الاحترافية، لعب لليستر وإيفرتون وبرشلونة وتوتنهام.",
    "bioEn": "English forward, top scorer at the 1986 World Cup and one of England's greatest-ever goalscorers, renowned for his fair play as he was never booked or sent off during his professional career. He played for Leicester, Everton, Barcelona and Tottenham.",
    "achievementsAr": [
      "الحذاء الذهبي وهداف كأس العالم 1986 (6 أهداف)",
      "هداف تاريخي لمنتخب إنجلترا سابقًا",
      "لقب كأس الاتحاد الإنجليزي 1991 مع توتنهام",
      "جائزة أفضل لاعب في إنجلترا (PFA) 1986"
    ],
    "achievementsEn": [
      "1986 FIFA World Cup Golden Boot and top scorer (6 goals)",
      "Former England national team record goalscorer",
      "1991 FA Cup title with Tottenham Hotspur",
      "PFA Players' Player of the Year 1986"
    ],
    "clubsHistoryAr": [
      "ليستر سيتي",
      "إيفرتون",
      "برشلونة",
      "توتنهام",
      "ناغويا غرامبوس"
    ],
    "clubsHistoryEn": [
      "Leicester City",
      "Everton",
      "Barcelona",
      "Tottenham Hotspur",
      "Nagoya Grampus"
    ],
    "clubIds": [
      "leicester-city",
      "everton",
      "barcelona",
      "tottenham"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غاري_لينيكر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gary_Lineker"
  },
  {
    "id": "david-villa",
    "nameAr": "دافيد فيا",
    "nameEn": "David Villa",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1999-2019",
    "active": false,
    "bioAr": "الهداف التاريخي لمنتخب إسبانيا، كان محوريًا في الفوز بيورو 2008 وكأس العالم 2010 مع 'الجيل الذهبي' الإسباني، لعب لفالنسيا وبرشلونة وأتلتيكو مدريد ونيويورك سيتي.",
    "bioEn": "Spain's all-time record goalscorer, he was pivotal to Spain's 'golden generation' triumphs at Euro 2008 and the 2010 World Cup. He played for Valencia, Barcelona, Atlético Madrid and New York City FC.",
    "achievementsAr": [
      "بطولتا يورو 2008 وكأس العالم 2010 مع إسبانيا",
      "الهداف التاريخي لمنتخب إسبانيا",
      "لقب دوري أبطال أوروبا 2011 مع برشلونة",
      "الحذاء الذهبي المشترك في يورو 2008"
    ],
    "achievementsEn": [
      "UEFA Euro 2008 and 2010 FIFA World Cup titles with Spain",
      "Spain's all-time record goalscorer",
      "UEFA Champions League title 2011 with Barcelona",
      "Joint Golden Boot winner at Euro 2008"
    ],
    "clubsHistoryAr": [
      "سبورتينغ خيخون",
      "سرقسطة",
      "فالنسيا",
      "برشلونة",
      "أتلتيكو مدريد",
      "ملبورن سيتي",
      "نيويورك سيتي",
      "فيسل كوبي"
    ],
    "clubsHistoryEn": [
      "Sporting Gijón",
      "Real Zaragoza",
      "Valencia",
      "Barcelona",
      "Atlético Madrid",
      "Melbourne City",
      "New York City FC",
      "Vissel Kobe"
    ],
    "clubIds": [
      "sporting-gijon",
      "real-zaragoza",
      "valencia",
      "barcelona",
      "atletico-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دافيد_فيا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/David_Villa"
  },
  {
    "id": "frank-rijkaard",
    "nameAr": "فرانك ريكارد",
    "nameEn": "Frank Rijkaard",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط ميدان / مدافع",
      "en": "Midfielder / Defender"
    },
    "era": "1980-1995",
    "active": false,
    "bioAr": "لاعب وسط هولندي مميز، جزء أساسي من الجيل الذهبي الهولندي الذي فاز بيورو 1988، لعب لأياكس وميلان الإيطالي وفاز معهما بألقاب أوروبية عديدة قبل أن يتحول لاحقًا للتدريب وقيادة برشلونة للتتويج بدوري أبطال أوروبا.",
    "bioEn": "Outstanding Dutch midfielder, a key part of the golden Dutch generation that won Euro 1988. He played for Ajax and Milan, winning numerous European titles with both, before later becoming a coach and leading Barcelona to Champions League glory.",
    "achievementsAr": [
      "بطولة يورو 1988 مع هولندا",
      "لقبا دوري أبطال أوروبا مع ميلان (1989، 1990)",
      "لقب كأس الكؤوس الأوروبية مع أياكس 1987",
      "لقب الدوري الإيطالي مع ميلان"
    ],
    "achievementsEn": [
      "UEFA Euro 1988 title with the Netherlands",
      "Two European Cup titles with Milan (1989, 1990)",
      "European Cup Winners' Cup title with Ajax 1987",
      "Serie A title with Milan"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "سبورتينغ لشبونة",
      "ريال زرقوسة (إعارة)",
      "ميلان",
      "أياكس"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "Sporting CP",
      "Real Zaragoza (loan)",
      "Milan",
      "Ajax"
    ],
    "clubIds": [
      "ajax",
      "sporting-cp",
      "real-zaragoza",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فرانك_ريكارد",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Frank_Rijkaard"
  },
  {
    "id": "enzo-francescoli",
    "nameAr": "إنزو فرانشيسكولي",
    "nameEn": "Enzo Francescoli",
    "nationalityAr": "أوروغوياني",
    "nationalityEn": "Uruguayan",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم / صانع لعب",
      "en": "Attacking Midfielder / Playmaker"
    },
    "era": "1980-1997",
    "active": false,
    "bioAr": "يُعتبر أحد أعظم لاعبي أوروغواي في التاريخ، عُرف بأناقته الفنية ورؤيته الفريدة للملعب، لعب لريفر بليت الأرجنتيني ومارسيليا الفرنسي، وكان مصدر إلهام لزين الدين زيدان الذي سمّى ابنه إنزو تيمنًا به.",
    "bioEn": "Regarded as one of the greatest Uruguayan players in history, known for his elegant technique and vision. He played for River Plate and Marseille, and was a major inspiration to Zinedine Zidane, who named his son Enzo after him.",
    "achievementsAr": [
      "لقب كوبا أمريكا 1983 و1995 مع أوروغواي",
      "أفضل لاعب في أمريكا الجنوبية 1984 و1995",
      "عدة ألقاب دوري أرجنتيني مع ريفر بليت",
      "أسطورة نادي ريفر بليت"
    ],
    "achievementsEn": [
      "Copa América titles 1983 and 1995 with Uruguay",
      "South American Footballer of the Year 1984 and 1995",
      "Multiple Argentine league titles with River Plate",
      "River Plate club legend"
    ],
    "clubsHistoryAr": [
      "وندريرز مونتيفيديو",
      "ريفر بليت",
      "راسينغ باريس",
      "مارسيليا",
      "كالياري",
      "توري",
      "ريفر بليت"
    ],
    "clubsHistoryEn": [
      "Wanderers",
      "River Plate",
      "Racing Paris",
      "Marseille",
      "Cagliari",
      "Torino",
      "River Plate"
    ],
    "clubIds": [
      "river-plate",
      "marseille",
      "cagliari",
      "torino"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إنزو_فرانشيسكولي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Enzo_Francescoli"
  },
  {
    "id": "just-fontaine",
    "nameAr": "جوست فونتين",
    "nameEn": "Just Fontaine",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1950-1962",
    "active": false,
    "bioAr": "مهاجم فرنسي صاحب الرقم القياسي التاريخي الذي لم يُكسر بعد لأكثر عدد أهداف في نسخة واحدة من كأس العالم (13 هدفًا في كأس العالم 1958)، لعب معظم مسيرته مع نيس وستاد رانس.",
    "bioEn": "French forward who holds the still-unbroken record for most goals scored in a single FIFA World Cup tournament (13 goals at the 1958 World Cup). He spent most of his career with Nice and Stade de Reims.",
    "achievementsAr": [
      "الرقم القياسي التاريخي لأكثر أهداف في نسخة واحدة من كأس العالم (13 هدفًا، 1958)",
      "المركز الثالث في كأس العالم 1958 مع فرنسا",
      "عدة ألقاب دوري فرنسي مع ستاد رانس",
      "هداف تاريخي لنادي ستاد رانس"
    ],
    "achievementsEn": [
      "All-time record for most goals in a single FIFA World Cup (13 goals, 1958)",
      "Third place at the 1958 World Cup with France",
      "Multiple Ligue 1 titles with Stade de Reims",
      "Stade de Reims' all-time top scorer"
    ],
    "clubsHistoryAr": [
      "يو إس إم مراكش",
      "نيس",
      "ستاد رانس"
    ],
    "clubsHistoryEn": [
      "USM Casablanca",
      "Nice",
      "Stade de Reims"
    ],
    "clubIds": [
      "nice",
      "reims"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جوست_فونتين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Just_Fontaine"
  },
  {
    "id": "jurgen-klinsmann",
    "nameAr": "يورغن كلينسمان",
    "nameEn": "Jürgen Klinsmann",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1978-1998",
    "active": false,
    "bioAr": "مهاجم ألماني، تُوّج بكأس العالم 1990 وبطولة يورو 1996 (قائدًا) مع ألمانيا، لعب لأندية كبرى في عدة دوريات أوروبية مثل إنتر ميلان وموناكو وتوتنهام وبايرن ميونخ، عُرف بحسه التهديفي وانزلاقاته الاحتفالية الشهيرة.",
    "bioEn": "German forward who won the 1990 World Cup and captained Germany to the Euro 1996 title. He played for major clubs across several European leagues including Inter Milan, Monaco, Tottenham and Bayern Munich, known for his clinical finishing and trademark diving celebration.",
    "achievementsAr": [
      "بطولة كأس العالم 1990 مع ألمانيا",
      "بطولة يورو 1996 مع ألمانيا (قائدًا)",
      "لقب كأس الاتحاد الأوروبي مع إنتر ميلان وبايرن ميونخ",
      "هداف الدوري الإنجليزي المشارك في أحد المواسم مع توتنهام"
    ],
    "achievementsEn": [
      "1990 FIFA World Cup title with Germany",
      "UEFA Euro 1996 title with Germany (as captain)",
      "UEFA Cup titles with Inter Milan and Bayern Munich",
      "Joint Premier League top scorer in one season with Tottenham"
    ],
    "clubsHistoryAr": [
      "شتوتغارت كيكرز",
      "شتوتغارت",
      "إنتر ميلان",
      "موناكو",
      "توتنهام",
      "بايرن ميونخ",
      "سامبدوريا",
      "توتنهام"
    ],
    "clubsHistoryEn": [
      "Stuttgarter Kickers",
      "VfB Stuttgart",
      "Inter Milan",
      "Monaco",
      "Tottenham Hotspur",
      "Bayern Munich",
      "Sampdoria",
      "Tottenham Hotspur"
    ],
    "clubIds": [
      "vfb-stuttgart",
      "inter-milan",
      "monaco",
      "tottenham",
      "bayern-munich",
      "sampdoria"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/يورغن_كلينسمان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jürgen_Klinsmann"
  },
  {
    "id": "rashidi-yekini",
    "nameAr": "رشيدي يكيني",
    "nameEn": "Rashidi Yekini",
    "nationalityAr": "نيجيري",
    "nationalityEn": "Nigerian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1983-2001",
    "active": false,
    "bioAr": "الهداف التاريخي لمنتخب نيجيريا، سجّل أول هدف نيجيري في تاريخ كأس العالم عام 1994 واشتُهر باحتفاله الشهير بالإمساك بشباك المرمى، يُعتبر أحد أعظم المهاجمين في تاريخ الكرة الأفريقية.",
    "bioEn": "Nigeria's all-time top scorer, he scored Nigeria's first-ever World Cup goal in 1994 and became famous for his iconic celebration of grabbing the goal net. He is regarded as one of the greatest strikers in African football history.",
    "achievementsAr": [
      "الهداف التاريخي لمنتخب نيجيريا",
      "أول هدف نيجيري في تاريخ كأس العالم (1994)",
      "أفضل لاعب أفريقي 1993",
      "لقب كأس أمم أفريقيا 1994 مع نيجيريا"
    ],
    "achievementsEn": [
      "Nigeria's all-time record goalscorer",
      "Scored Nigeria's first-ever FIFA World Cup goal (1994)",
      "African Footballer of the Year 1993",
      "Africa Cup of Nations title 1994 with Nigeria"
    ],
    "clubsHistoryAr": [
      "شوتنغ ستارز",
      "إفريقيا سبورت (ساحل العاج)",
      "فيتوريا سيتوبال",
      "أولمبياكوس",
      "سبورتينغ خيخون"
    ],
    "clubsHistoryEn": [
      "Shooting Stars",
      "Africa Sports (Ivory Coast)",
      "Vitória de Setúbal",
      "Olympiacos",
      "Sporting Gijón"
    ],
    "clubIds": [
      "sporting-gijon"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رشيدي_يكيني",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rashidi_Yekini"
  },
  {
    "id": "cha-bum-kun",
    "nameAr": "تشا بوم-كون",
    "nameEn": "Cha Bum-kun",
    "nationalityAr": "كوري جنوبي",
    "nationalityEn": "South Korean",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1971-1991",
    "active": false,
    "bioAr": "يُعتبر أعظم لاعب كوري جنوبي في التاريخ، أول لاعب آسيوي يحقق نجاحًا كبيرًا في الدوري الألماني حيث لعب لآيندراخت فرانكفورت وباير ليفركوزن وفاز بلقبي كأس الاتحاد الأوروبي معهما.",
    "bioEn": "Widely regarded as the greatest South Korean player in history, he was the first Asian player to achieve major success in the Bundesliga, playing for Eintracht Frankfurt and Bayer Leverkusen, and winning two UEFA Cup titles with them.",
    "achievementsAr": [
      "لقبا كأس الاتحاد الأوروبي مع آيندراخت فرانكفورت (1980) وباير ليفركوزن (1988)",
      "أفضل هداف آسيوي في الدوري الألماني في تاريخه (لسنوات طويلة)",
      "قائد ومهاجم منتخب كوريا الجنوبية",
      "أدرج لاحقًا في قاعة مشاهير الاتحاد الآسيوي لكرة القدم"
    ],
    "achievementsEn": [
      "Two UEFA Cup titles with Eintracht Frankfurt (1980) and Bayer Leverkusen (1988)",
      "Long stood as the Bundesliga's all-time top-scoring Asian player",
      "South Korea national team captain and forward",
      "Later inducted into the AFC Hall of Fame"
    ],
    "clubsHistoryAr": [
      "ديكوهنغ تايجرز (كوريا الجنوبية)",
      "آيندراخت فرانكفورت",
      "باير ليفركوزن"
    ],
    "clubsHistoryEn": [
      "Korea Trust Bank (South Korea)",
      "Eintracht Frankfurt",
      "Bayer Leverkusen"
    ],
    "clubIds": [
      "eintracht-frankfurt",
      "bayer-leverkusen"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/تشا_بوم-كون",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Cha_Bum-kun"
  },
  {
    "id": "kazuyoshi-miura",
    "nameAr": "كازوشي ميورا",
    "nameEn": "Kazuyoshi Miura",
    "nationalityAr": "ياباني",
    "nationalityEn": "Japanese",
    "clubAr": "يوكوهاما إف سي",
    "clubEn": "Yokohama FC",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1986-الآن",
    "active": true,
    "bioAr": "يُلقب بـ'كينغ كازو'، أحد رواد كرة القدم اليابانية الحديثة وأقدم لاعب محترف نشط في العالم، لا يزال يلعب حتى بعد بلوغه الستين من عمره، لعب في البرازيل واليابان وإيطاليا وكرواتيا.",
    "bioEn": "Nicknamed 'King Kazu', a pioneer of modern Japanese football and the oldest active professional footballer in the world, still playing into his late fifties. He played in Brazil, Japan, Italy and Croatia over his career.",
    "achievementsAr": [
      "أفضل لاعب آسيوي 1993",
      "هداف تاريخي سابق للدوري الياباني (جيه ليغ)",
      "أقدم لاعب محترف نشط في العالم (رقم قياسي)",
      "رائد انتقال اللاعبين اليابانيين للاحتراف في الخارج"
    ],
    "achievementsEn": [
      "Asian Footballer of the Year 1993",
      "Former all-time top scorer of Japan's J.League",
      "World record holder as the oldest active professional footballer",
      "Pioneer for Japanese players moving abroad to play professionally"
    ],
    "clubsHistoryAr": [
      "سانتوس",
      "شيميزو إس-بولسي",
      "جنوة",
      "دينامو زغرب",
      "فيسل كوبي",
      "يوكوهاما إف سي"
    ],
    "clubsHistoryEn": [
      "Santos",
      "Shimizu S-Pulse",
      "Genoa",
      "Dinamo Zagreb",
      "Vissel Kobe",
      "Yokohama FC"
    ],
    "clubIds": [
      "santos-fc",
      "genoa"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كازوشي_ميورا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kazuyoshi_Miura"
  },
  {
    "id": "javier-zanetti",
    "nameAr": "خافيير زانيتي",
    "nameEn": "Javier Zanetti",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "ظهير أيمن / وسط ميدان",
      "en": "Right-back / Midfielder"
    },
    "era": "1992-2014",
    "active": false,
    "bioAr": "صاحب الرقم القياسي كأكثر لاعب مشاركة وقائد في تاريخ إنتر ميلان، قضى مسيرته بأكملها مع النادي الإيطالي بعد انتقاله من تاليريس الأرجنتيني، وفاز معه بثلاثية دوري أبطال أوروبا والدوري والكأس عام 2010.",
    "bioEn": "Holder of the record for most appearances and longest captaincy in Inter Milan's history, he spent his entire European career with the Italian club after moving from Talleres, winning the historic 2010 continental treble.",
    "achievementsAr": [
      "الثلاثية التاريخية (دوري أبطال أوروبا، الدوري، والكأس) مع إنتر ميلان 2010",
      "صاحب الرقم القياسي لأكثر مشاركة في تاريخ إنتر ميلان",
      "أطول فترة قيادة في تاريخ إنتر ميلان",
      "5 ألقاب دوري إيطالي مع إنتر ميلان"
    ],
    "achievementsEn": [
      "2010 Treble (Champions League, Serie A, Coppa Italia) with Inter Milan",
      "Inter Milan's all-time record appearance holder",
      "Longest-serving captain in Inter Milan history",
      "5 Serie A titles with Inter Milan"
    ],
    "clubsHistoryAr": [
      "تاليريس دي ريميديوس دي إسكالادا",
      "بانفيلد",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Talleres de Remedios de Escalada",
      "Banfield",
      "Inter Milan"
    ],
    "clubIds": [
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/خافيير_زانيتي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Javier_Zanetti"
  },
  {
    "id": "diego-forlan",
    "nameAr": "دييغو فورلان",
    "nameEn": "Diego Forlán",
    "nationalityAr": "أوروغوياني",
    "nationalityEn": "Uruguayan",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1997-2019",
    "active": false,
    "bioAr": "مهاجم أوروغواياني، حصل على الكرة الذهبية لأفضل لاعب في كأس العالم 2010 حين قاد أوروغواي للمركز الرابع، وفاز بالحذاء الذهبي الأوروبي مرتين مع فياريال وأتلتيكو مدريد الإسبانيين.",
    "bioEn": "Uruguayan forward who won the Golden Ball as the best player of the 2010 World Cup, leading Uruguay to fourth place, and won the European Golden Shoe twice with Villarreal and Atlético Madrid.",
    "achievementsAr": [
      "الكرة الذهبية لأفضل لاعب في كأس العالم 2010",
      "الحذاء الذهبي الأوروبي مرتين (2005، 2009)",
      "لقب الدوري الأوروبي (يوروبا ليغ) 2010 مع أتلتيكو مدريد",
      "المركز الرابع في كأس العالم 2010 مع أوروغواي"
    ],
    "achievementsEn": [
      "Golden Ball as the 2010 FIFA World Cup's best player",
      "European Golden Shoe twice (2005, 2009)",
      "UEFA Europa League title 2010 with Atlético Madrid",
      "Fourth place at the 2010 World Cup with Uruguay"
    ],
    "clubsHistoryAr": [
      "اندبندينتي",
      "مانشستر يونايتد",
      "فياريال",
      "أتلتيكو مدريد",
      "إنتر ميلان",
      "سيلتا فيغو",
      "كيتشي إنجين"
    ],
    "clubsHistoryEn": [
      "Independiente",
      "Manchester United",
      "Villarreal",
      "Atlético Madrid",
      "Inter Milan",
      "Celta Vigo",
      "Kitchee"
    ],
    "clubIds": [
      "independiente",
      "manchester-united",
      "villarreal",
      "atletico-madrid",
      "inter-milan",
      "celta-vigo"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دييغو_فورلان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Diego_Forlán"
  },
  {
    "id": "wesley-sneijder",
    "nameAr": "ويسلي سنايدر",
    "nameEn": "Wesley Sneijder",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم / صانع لعب",
      "en": "Attacking Midfielder / Playmaker"
    },
    "era": "2002-2019",
    "active": false,
    "bioAr": "لاعب وسط هولندي موهوب، كان محوريًا في تحقيق إنتر ميلان للثلاثية التاريخية عام 2010، وقاد هولندا للوصول إلى نهائي كأس العالم 2010 وكان مرشحًا قويًا للكرة الذهبية في تلك السنة.",
    "bioEn": "Gifted Dutch midfielder who was central to Inter Milan's historic 2010 treble, and led the Netherlands to the 2010 World Cup final, being a strong contender for the Ballon d'Or that year.",
    "achievementsAr": [
      "الثلاثية التاريخية مع إنتر ميلان 2010",
      "الوصول لنهائي كأس العالم 2010 مع هولندا",
      "الحذاء الذهبي المشارك في كأس العالم 2010",
      "لقب دوري أبطال أوروبا 2010 مع إنتر ميلان"
    ],
    "achievementsEn": [
      "2010 Treble with Inter Milan",
      "2010 FIFA World Cup finalist with the Netherlands",
      "Joint top scorer at the 2010 World Cup",
      "UEFA Champions League title 2010 with Inter Milan"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "ريال مدريد",
      "إنتر ميلان",
      "غلطة سراي",
      "نيس",
      "القادسية"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "Real Madrid",
      "Inter Milan",
      "Galatasaray",
      "Nice",
      "Al Gharafa"
    ],
    "clubIds": [
      "ajax",
      "real-madrid",
      "inter-milan",
      "galatasaray",
      "nice"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ويسلي_سنايدر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Wesley_Sneijder"
  },
  {
    "id": "rafael-marquez",
    "nameAr": "رافائيل ماركيز",
    "nameEn": "Rafael Márquez",
    "nationalityAr": "مكسيكي",
    "nationalityEn": "Mexican",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1996-2018",
    "active": false,
    "bioAr": "قائد منتخب المكسيك التاريخي وأول لاعب مكسيكي يقود فريقًا أوروبيًا كبيرًا، لعب لبرشلونة الإسباني لثمانية مواسم وفاز معه بعدة ألقاب، وشارك في خمس نسخ متتالية من كأس العالم مع المكسيك.",
    "bioEn": "Mexico's historic national team captain and the first Mexican player to captain a major European club, he played for Barcelona for eight seasons, winning multiple titles, and appeared at five consecutive FIFA World Cups with Mexico.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2006 مع برشلونة",
      "عدة ألقاب دوري إسباني مع برشلونة",
      "المشاركة في 5 نسخ متتالية من كأس العالم مع المكسيك",
      "قائد منتخب المكسيك لسنوات طويلة"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2006 with Barcelona",
      "Multiple La Liga titles with Barcelona",
      "Appeared at 5 consecutive FIFA World Cups with Mexico",
      "Long-time captain of the Mexico national team"
    ],
    "clubsHistoryAr": [
      "أتلاس",
      "موناكو",
      "برشلونة",
      "نيويورك ريد بولز (إعارة)",
      "هيلاس فيرونا",
      "أتلاس"
    ],
    "clubsHistoryEn": [
      "Atlas",
      "Monaco",
      "Barcelona",
      "New York Red Bulls (loan)",
      "Hellas Verona",
      "Atlas"
    ],
    "clubIds": [
      "monaco",
      "barcelona",
      "hellas-verona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رافائيل_ماركيز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rafael_Márquez"
  },
  {
    "id": "patrick-vieira",
    "nameAr": "باتريك فييرا",
    "nameEn": "Patrick Vieira",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "1993-2011",
    "active": false,
    "bioAr": "لاعب وسط فرنسي من أصول سنغالية، يُعد من أعظم لاعبي الوسط في تاريخ الدوري الإنجليزي، قاد أرسنال كقائد لسنوات طويلة وحقق معه ثلاثية ألقاب الدوري من دون خسارة موسم 2003-2004 (الفريق الذي لا يُقهر). فاز مع فرنسا بكأس العالم 1998 ويورو 2000.",
    "bioEn": "French midfielder of Senegalese descent, regarded as one of the greatest midfielders in Premier League history. He captained Arsenal for years, including the unbeaten 'Invincibles' title-winning season of 2003-04. He won the 1998 World Cup and Euro 2000 with France.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة أمم أوروبا 2000 مع فرنسا",
      "3 ألقاب دوري إنجليزي ممتاز مع أرسنال (منها موسم الفريق الذي لا يُقهر 2003-2004)",
      "4 كؤوس FA مع أرسنال"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "3 Premier League titles with Arsenal (including the unbeaten 2003-04 'Invincibles' season)",
      "4 FA Cups with Arsenal"
    ],
    "clubsHistoryAr": [
      "كان",
      "ميلان",
      "أرسنال",
      "يوفنتوس",
      "إنتر ميلان",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Cannes",
      "AC Milan",
      "Arsenal",
      "Juventus",
      "Inter Milan",
      "Manchester City"
    ],
    "clubIds": [
      "ac-milan",
      "arsenal",
      "juventus",
      "inter-milan",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/باتريك_فييرا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Patrick_Vieira"
  },
  {
    "id": "john-terry",
    "nameAr": "جون تيري",
    "nameEn": "John Terry",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1998-2018",
    "active": false,
    "bioAr": "قائد تشيلسي الأسطوري ويُعد من أفضل المدافعين في تاريخ الدوري الإنجليزي الممتاز، قضى 19 موسمًا مع النادي وقاده لخمسة ألقاب دوري إنجليزي ولقب دوري أبطال أوروبا 2012، وهو الهداف التاريخي بين المدافعين في تاريخ تشيلسي.",
    "bioEn": "Legendary Chelsea captain regarded as one of the greatest defenders in Premier League history. He spent 19 seasons at the club, leading it to five Premier League titles and the 2012 UEFA Champions League title, and is Chelsea's all-time highest-scoring defender.",
    "achievementsAr": [
      "5 ألقاب دوري إنجليزي ممتاز مع تشيلسي",
      "لقب دوري أبطال أوروبا 2012 مع تشيلسي",
      "لقب الدوري الأوروبي (يوروبا ليغ) 2013 مع تشيلسي",
      "جائزة أفضل مدافع في دوري أبطال أوروبا (عدة مرات)"
    ],
    "achievementsEn": [
      "5 Premier League titles with Chelsea",
      "2012 UEFA Champions League title with Chelsea",
      "2013 UEFA Europa League title with Chelsea",
      "UEFA Club Defender of the Year (multiple times)"
    ],
    "clubsHistoryAr": [
      "تشيلسي",
      "نوتينغهام فورست (إعارة)",
      "أستون فيلا"
    ],
    "clubsHistoryEn": [
      "Chelsea",
      "Nottingham Forest (loan)",
      "Aston Villa"
    ],
    "clubIds": [
      "chelsea",
      "nottingham-forest",
      "aston-villa"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جون_تيري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/John_Terry"
  },
  {
    "id": "gennaro-gattuso",
    "nameAr": "جينارو غاتوزو",
    "nameEn": "Gennaro Gattuso",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط دفاعي",
      "en": "Defensive Midfielder"
    },
    "era": "1994-2013",
    "active": false,
    "bioAr": "لاعب وسط دفاعي إيطالي اشتهر بشراسته القتالية ('غرينتا')، كان ركيزة أساسية في وسط ميدان ميلان لسنوات طويلة وفاز معه بلقبي دوري أبطال أوروبا، وتُوّج مع إيطاليا بكأس العالم 2006.",
    "bioEn": "Italian defensive midfielder known for his fierce fighting spirit ('grinta'), he was a key fixture in AC Milan's midfield for years, winning two UEFA Champions League titles with the club, and won the 2006 FIFA World Cup with Italy.",
    "achievementsAr": [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "لقبا دوري أبطال أوروبا مع ميلان (2003، 2007)",
      "لقب الدوري الإيطالي (سيري A) مع ميلان",
      "كأس العالم للأندية 2007 مع ميلان"
    ],
    "achievementsEn": [
      "2006 FIFA World Cup title with Italy",
      "2 UEFA Champions League titles with Milan (2003, 2007)",
      "Serie A title with Milan",
      "2007 FIFA Club World Cup with Milan"
    ],
    "clubsHistoryAr": [
      "بيروجيا",
      "رينجرز",
      "سالرنيتانا",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Perugia",
      "Rangers",
      "Salernitana",
      "AC Milan"
    ],
    "clubIds": [
      "rangers",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جينارو_غاتوزو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gennaro_Gattuso"
  },
  {
    "id": "alessandro-nesta",
    "nameAr": "أليساندرو نيستا",
    "nameEn": "Alessandro Nesta",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1993-2014",
    "active": false,
    "bioAr": "أحد أعظم المدافعين في تاريخ كرة القدم، قضى مسيرته بين لاتسيو وميلان الإيطاليين بأكثر من 400 مشاركة في الدوري الإيطالي، واشتهر بأناقته الدفاعية وقراءته الممتازة للعب. توّج بكأس العالم 2006 مع إيطاليا.",
    "bioEn": "One of the greatest defenders in football history, he spent his career between Lazio and Milan with over 400 Serie A appearances, renowned for his elegant defending and excellent reading of the game. He won the 2006 FIFA World Cup with Italy.",
    "achievementsAr": [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "لقبا دوري أبطال أوروبا مع ميلان (2003، 2007)",
      "لقب الدوري الإيطالي مع لاتسيو (2000) ومع ميلان",
      "أفضل مدافع في الدوري الإيطالي 4 مرات"
    ],
    "achievementsEn": [
      "2006 FIFA World Cup title with Italy",
      "2 UEFA Champions League titles with Milan (2003, 2007)",
      "Serie A title with Lazio (2000) and with Milan",
      "Serie A Defender of the Year 4 times"
    ],
    "clubsHistoryAr": [
      "لاتسيو",
      "ميلان",
      "مونتريال إمباكت",
      "تشيناينين"
    ],
    "clubsHistoryEn": [
      "Lazio",
      "AC Milan",
      "Montreal Impact",
      "Chennaiyin"
    ],
    "clubIds": [
      "lazio",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أليساندرو_نيستا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alessandro_Nesta"
  },
  {
    "id": "marcel-desailly",
    "nameAr": "مارسيل ديزايي",
    "nameEn": "Marcel Desailly",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع / وسط دفاعي",
      "en": "Defender / Defensive Midfielder"
    },
    "era": "1986-2006",
    "active": false,
    "bioAr": "مدافع فرنسي لُقّب بـ'الصخرة'، أول لاعب يفوز بلقب دوري أبطال أوروبا في موسمين متتاليين مع ناديين مختلفين (مارسيليا وميلان)، وكان قائدًا لتشيلسي الإنجليزي، وتُوّج مع فرنسا بكأس العالم 1998 ويورو 2000.",
    "bioEn": "French defender nicknamed 'The Rock', the first player to win the UEFA Champions League in consecutive seasons with two different clubs (Marseille and Milan). He captained Chelsea and won the 1998 World Cup and Euro 2000 with France.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة أمم أوروبا 2000 مع فرنسا",
      "لقب دوري أبطال أوروبا مع مارسيليا (1993) ومع ميلان (1994)",
      "لقبا الدوري الإيطالي مع ميلان (1994، 1996)"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "UEFA Champions League title with Marseille (1993) and with Milan (1994)",
      "2 Serie A titles with Milan (1994, 1996)"
    ],
    "clubsHistoryAr": [
      "نانت",
      "مارسيليا",
      "ميلان",
      "تشيلسي",
      "الغرافة",
      "قطر إس سي"
    ],
    "clubsHistoryEn": [
      "Nantes",
      "Marseille",
      "AC Milan",
      "Chelsea",
      "Al-Gharafa",
      "Qatar SC"
    ],
    "clubIds": [
      "nantes",
      "marseille",
      "ac-milan",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مارسيل_ديسايي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marcel_Desailly"
  },
  {
    "id": "julian-alvarez",
    "nameAr": "خوليان ألفاريز",
    "nameEn": "Julián Álvarez",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "مهاجم أرجنتيني، خريج أكاديمية ريفر بليت، وأول لاعب يفوز بكأس العالم وبثلاثية قارية في نفس الموسم (مع مانشستر سيتي 2022-2023). انتقل إلى أتلتيكو مدريد الإسباني عام 2024.",
    "bioEn": "Argentine forward and River Plate academy graduate, the first player to win the FIFA World Cup and a continental treble in the same season (with Manchester City 2022-23). He moved to Atlético Madrid in 2024.",
    "achievementsAr": [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "لقب دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "لقبا الدوري الإنجليزي الممتاز مع مانشستر سيتي",
      "بطولة كوبا أمريكا 2024 مع الأرجنتين",
      "وصافة كأس العالم 2026 مع الأرجنتين"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup title with Argentina",
      "2023 UEFA Champions League title with Manchester City",
      "2 Premier League titles with Manchester City",
      "2024 Copa América title with Argentina",
      "2026 FIFA World Cup runner-up with Argentina"
    ],
    "clubsHistoryAr": [
      "ريفر بليت",
      "مانشستر سيتي",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "River Plate",
      "Manchester City",
      "Atlético Madrid"
    ],
    "clubIds": [
      "river-plate",
      "manchester-city",
      "atletico-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/خوليان_ألفاريز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Julián_Alvarez"
  },
  {
    "id": "nico-williams",
    "nameAr": "نيكو ويليامز",
    "nameEn": "Nico Williams",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أتلتيك بيلباو",
    "clubEn": "Athletic Bilbao",
    "clubId": "athletic-bilbao",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "جناح إسباني من أصول غانية، صعد من أكاديمية أتلتيك بيلباو وارتبط بالنادي بعقد طويل الأمد حتى 2035. سجل هدف الافتتاح لإسبانيا في نهائي يورو 2024 أمام إنجلترا، وتُوّج لاحقًا بكأس العالم 2026.",
    "bioEn": "Spanish winger of Ghanaian descent who rose through Athletic Bilbao's academy and signed a long-term contract with the club through 2035. He scored Spain's opening goal in the Euro 2024 final against England, and later won the 2026 World Cup.",
    "achievementsAr": [
      "بطولة كأس العالم 2026 مع إسبانيا",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "كأس ملك إسبانيا 2024 مع أتلتيك بيلباو",
      "رجل مباراة نهائي يورو 2024"
    ],
    "achievementsEn": [
      "2026 FIFA World Cup title with Spain",
      "UEFA Euro 2024 title with Spain",
      "2024 Copa del Rey with Athletic Bilbao",
      "Player of the Match in the UEFA Euro 2024 final"
    ],
    "clubsHistoryAr": [
      "أتلتيك بيلباو"
    ],
    "clubsHistoryEn": [
      "Athletic Bilbao"
    ],
    "clubIds": [
      "athletic-bilbao"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/نيكو_ويليامز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Nico_Williams"
  },
  {
    "id": "declan-rice",
    "nameAr": "ديكلان رايس",
    "nameEn": "Declan Rice",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "وسط دفاعي",
      "en": "Defensive Midfielder"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "لاعب وسط إنجليزي، قاد وست هام يونايتد لقيادة الفريق للفوز بلقب الدوري الأوروبي للمؤتمرات 2023، قبل أن ينتقل إلى أرسنال في صفقة قياسية بريطانية آنذاك بقيمة 105 مليون جنيه إسترليني، وحقق المركز الثالث مع إنجلترا في كأس العالم 2026.",
    "bioEn": "English midfielder who captained West Ham United to the 2023 UEFA Europa Conference League title, before moving to Arsenal in a British-record deal worth £105 million. He helped England reach third place at the 2026 World Cup.",
    "achievementsAr": [
      "لقب الدوري الأوروبي للمؤتمرات (UEFA Conference League) 2023 مع وست هام (كقائد)",
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "الوصافة في بطولة أمم أوروبا 2020 و2024 مع إنجلترا",
      "أحد أغلى الصفقات في تاريخ أرسنال"
    ],
    "achievementsEn": [
      "2023 UEFA Europa Conference League title with West Ham (as captain)",
      "Third place at the 2026 World Cup with England",
      "Runner-up at UEFA Euro 2020 and Euro 2024 with England",
      "One of the most expensive transfers in Arsenal's history"
    ],
    "clubsHistoryAr": [
      "وست هام يونايتد",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "West Ham United",
      "Arsenal"
    ],
    "clubIds": [
      "west-ham-united",
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ديكلان_رايس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Declan_Rice"
  },
  {
    "id": "martin-odegaard",
    "nameAr": "مارتن أوديغارد",
    "nameEn": "Martin Ødegaard",
    "nationalityAr": "نرويجي",
    "nationalityEn": "Norwegian",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder / Playmaker"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "صانع ألعاب نرويجي وقائد أرسنال ومنتخب النرويج، انضم لريال مدريد وهو في السادسة عشرة قبل أن يخوض عدة إعارات ناجحة، ثم استقر في أرسنال منذ 2021 ليصبح قائدًا له عام 2022.",
    "bioEn": "Norwegian playmaker and captain of both Arsenal and the Norway national team. He joined Real Madrid at 16 before several successful loan spells, then settled at Arsenal from 2021 and was named club captain in 2022.",
    "achievementsAr": [
      "أصغر لاعب يشارك في تصفيات بطولة أمم أوروبا في تاريخها",
      "قائد أرسنال منذ 2022",
      "قائد منتخب النرويج",
      "لاعب أساسي في مشروع أرسنال للمنافسة على لقب الدوري الإنجليزي"
    ],
    "achievementsEn": [
      "Youngest player ever to feature in a UEFA European Championship qualifying match",
      "Arsenal captain since 2022",
      "Captain of the Norway national team",
      "Key player in Arsenal's Premier League title challenge"
    ],
    "clubsHistoryAr": [
      "ستروومسغودسيت",
      "ريال مدريد",
      "هيرينفين (إعارة)",
      "فيتيس (إعارة)",
      "ريال سوسيداد (إعارة)",
      "أرسنال (إعارة ثم انتقال دائم)"
    ],
    "clubsHistoryEn": [
      "Strømsgodset",
      "Real Madrid",
      "Heerenveen (loan)",
      "Vitesse (loan)",
      "Real Sociedad (loan)",
      "Arsenal (loan then permanent)"
    ],
    "clubIds": [
      "real-madrid",
      "real-sociedad",
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مارتن_أوديجارد",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Martin_Ødegaard"
  },
  {
    "id": "alexander-isak",
    "nameAr": "ألكسندر إيساك",
    "nameEn": "Alexander Isak",
    "nationalityAr": "سويدي",
    "nationalityEn": "Swedish",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مهاجم سويدي من أصول إريترية، لعب لنيوكاسل يونايتد وساهم في عودته لدوري أبطال أوروبا ولقب كأس الرابطة الإنجليزية 2025 (أول لقب للنادي منذ 70 عامًا)، قبل أن ينتقل إلى ليفربول صيف 2025 في صفقة قياسية بريطانية بقيمة 125 مليون جنيه إسترليني.",
    "bioEn": "Swedish striker of Eritrean descent. He played for Newcastle United, helping the club return to the Champions League and win the 2025 EFL Cup (their first trophy in 70 years), before moving to Liverpool in summer 2025 in a British-record £125 million deal.",
    "achievementsAr": [
      "لقب كأس الرابطة الإنجليزية (EFL Cup) 2025 مع نيوكاسل يونايتد",
      "أغلى صفقة في تاريخ الدوري الإنجليزي عند انتقاله لليفربول",
      "هداف الدوري الإنجليزي الأسبق مع نيوكاسل (54 هدفًا في 86 مباراة)",
      "هداف تاريخي لمنتخب السويد الشاب (أصغر هداف في تاريخ المنتخب)"
    ],
    "achievementsEn": [
      "2025 EFL Cup title with Newcastle United",
      "British transfer record upon his move to Liverpool",
      "Prolific Newcastle spell (54 goals in 86 Premier League appearances)",
      "Sweden's youngest-ever national team goalscorer"
    ],
    "clubsHistoryAr": [
      "ايه آي كيه",
      "بوروسيا دورتموند",
      "فيليم الثاني (إعارة)",
      "ريال سوسيداد",
      "نيوكاسل يونايتد",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "AIK",
      "Borussia Dortmund",
      "Willem II (loan)",
      "Real Sociedad",
      "Newcastle United",
      "Liverpool"
    ],
    "clubIds": [
      "borussia-dortmund",
      "real-sociedad",
      "newcastle-united",
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ألكسندر_إيساك",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alexander_Isak"
  },
  {
    "id": "william-saliba",
    "nameAr": "ويليام ساليبا",
    "nameEn": "William Saliba",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "مدافع فرنسي يُعد من أفضل قلوب الدفاع في العالم حاليًا، انضم لأرسنال عام 2019 قبل أن يخوض عدة إعارات ناجحة (سانت إيتيان، نيس، مارسيليا)، واستقر كركيزة أساسية في دفاع أرسنال منذ موسم 2022-2023، ووصل مع فرنسا لنهائي كأس العالم 2022.",
    "bioEn": "French defender regarded as one of the best centre-backs in the world today. He joined Arsenal in 2019 before several successful loan spells (Saint-Étienne, Nice, Marseille), then became a key fixture in Arsenal's defence from the 2022-23 season, and reached the 2022 World Cup final with France.",
    "achievementsAr": [
      "وصافة كأس العالم 2022 مع فرنسا",
      "لاعب أرسنال الوحيد الذي لعب كل دقائق الدوري الإنجليزي موسم 2023-2024 (منذ لي ديكسون 1989-90)",
      "ضمن التشكيلة المثالية لبطولة يورو 2024",
      "جدد عقده مع أرسنال حتى 2030"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup runner-up with France",
      "Only Arsenal outfield player to play every league minute in 2023-24 (since Lee Dixon in 1989-90)",
      "UEFA Euro 2024 Team of the Tournament",
      "Signed a new contract with Arsenal until 2030"
    ],
    "clubsHistoryAr": [
      "سانت إيتيان",
      "أرسنال",
      "سانت إيتيان (إعارة)",
      "نيس (إعارة)",
      "مارسيليا (إعارة)",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Saint-Étienne",
      "Arsenal",
      "Saint-Étienne (loan)",
      "Nice (loan)",
      "Marseille (loan)",
      "Arsenal"
    ],
    "clubIds": [
      "saint-etienne",
      "arsenal",
      "nice",
      "marseille"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ويليام_ساليبا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/William_Saliba"
  },
  {
    "id": "moises-caicedo",
    "nameAr": "مويسيس كايسيدو",
    "nameEn": "Moisés Caicedo",
    "nationalityAr": "إكوادوري",
    "nationalityEn": "Ecuadorian",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "وسط دفاعي",
      "en": "Defensive Midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "لاعب وسط إكوادوري، انتقل من برايتون إلى تشيلسي صيف 2023 في صفقة قياسية بريطانية آنذاك بقيمة 115 مليون جنيه إسترليني، وساهم في فوز تشيلسي بلقب الدوري الأوروبي للمؤتمرات 2024-2025.",
    "bioEn": "Ecuadorian midfielder who moved from Brighton to Chelsea in summer 2023 for a then British-record fee of £115 million, and helped Chelsea win the 2024-25 UEFA Conference League title.",
    "achievementsAr": [
      "لقب الدوري الأوروبي للمؤتمرات (UEFA Conference League) 2024-2025 مع تشيلسي",
      "أغلى صفقة في تاريخ الدوري الإنجليزي عند انتقاله (وقتها)",
      "المشاركة في نسختين من كأس العالم مع الإكوادور",
      "أكثر من 60 مشاركة دولية مع منتخب الإكوادور"
    ],
    "achievementsEn": [
      "2024-25 UEFA Conference League title with Chelsea",
      "British transfer record at the time of his move",
      "Appeared at two FIFA World Cups with Ecuador",
      "Over 60 caps for the Ecuador national team"
    ],
    "clubsHistoryAr": [
      "إندبندينتي ديل فالي",
      "برايتون آند هوف ألبيون",
      "بيرشوت (إعارة)",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Independiente del Valle",
      "Brighton & Hove Albion",
      "Beerschot (loan)",
      "Chelsea"
    ],
    "clubIds": [
      "brighton-hove-albion",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مويسيس_كايسيدو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Moisés_Caicedo"
  },
  {
    "id": "gavi",
    "nameAr": "غافي",
    "nameEn": "Gavi",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "وسط",
      "en": "Central Midfielder"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "لاعب وسط إسباني صعد من أكاديمية لا ماسيا وأصبح ركيزة أساسية في وسط برشلونة منذ ظهوره الأول عام 2021 وهو في السابعة عشرة، حصل على جائزة كوبا تروفي وجائزة الولد الذهبي عام 2022.",
    "bioEn": "Spanish midfielder who rose through Barcelona's La Masia academy to become a key fixture in the club's midfield since his debut in 2021 at age 17. He won the Kopa Trophy and the Golden Boy award in 2022.",
    "achievementsAr": [
      "جائزة كوبا تروفي 2022 (أفضل لاعب شاب في العالم وفق فرانس فوتبول)",
      "جائزة الولد الذهبي (Golden Boy) 2022",
      "لقب الدوري الإسباني وكأس السوبر الإسباني مع برشلونة",
      "لاعب أساسي في منتخب إسبانيا منذ 2021"
    ],
    "achievementsEn": [
      "2022 Kopa Trophy (world's best young player per France Football)",
      "2022 Golden Boy award",
      "La Liga title and Spanish Super Cup with Barcelona",
      "Regular for the Spain national team since 2021"
    ],
    "clubsHistoryAr": [
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Barcelona"
    ],
    "clubIds": [
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غافي_(لاعب_كرة_قدم)",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gavi_(footballer)"
  },
  {
    "id": "dean-huijsen",
    "nameAr": "دين هويسن",
    "nameEn": "Dean Huijsen",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "مدافع إسباني وُلد في هولندا، تدرج بين يوفنتوس وروما قبل أن يتألق مع بورنموث الإنجليزي، ليخطفه ريال مدريد صيف 2025 في صفقة بقيمة 50 مليون جنيه إسترليني. اختار تمثيل إسبانيا دوليًا رغم أصوله الهولندية.",
    "bioEn": "Spanish centre-back born in the Netherlands. He came through Juventus and Roma before impressing at Bournemouth, prompting Real Madrid to sign him in summer 2025 for £50 million. He chose to represent Spain internationally despite his Dutch roots.",
    "achievementsAr": [
      "انتقاله لريال مدريد في صفقة بقيمة 50 مليون جنيه إسترليني (2025)",
      "ترشيحه لجائزة أفضل لاعب شاب في الدوري الإنجليزي موسم 2024-2025",
      "المشاركة مع ريال مدريد في كأس العالم للأندية 2025",
      "لاعب دولي مع منتخب إسبانيا منذ 2025"
    ],
    "achievementsEn": [
      "Move to Real Madrid for £50 million (2025)",
      "Nominated for the Premier League Young Player of the Year 2024-25",
      "Featured for Real Madrid at the 2025 FIFA Club World Cup",
      "Spain international since 2025"
    ],
    "clubsHistoryAr": [
      "مالقة",
      "يوفنتوس",
      "روما (إعارة)",
      "بورنموث",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Málaga",
      "Juventus",
      "Roma (loan)",
      "Bournemouth",
      "Real Madrid"
    ],
    "clubIds": [
      "malaga",
      "juventus",
      "roma",
      "bournemouth",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دين_هويسن",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dean_Huijsen"
  },
  {
    "id": "antoine-griezmann",
    "nameAr": "أنطوان غريزمان",
    "nameEn": "Antoine Griezmann",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "أورلاندو سيتي (الدوري الأمريكي MLS)",
    "clubEn": "Orlando City (MLS)",
    "clubId": null,
    "position": {
      "ar": "مهاجم / صانع ألعاب",
      "en": "Forward / Attacking Midfielder"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "مهاجم فرنسي قضى معظم مسيرته الأوروبية بين ريال سوسيداد وأتلتيكو مدريد وبرشلونة، وكان ركيزة أساسية في تتويج فرنسا بكأس العالم 2018، قبل أن يعتزل اللعب الدولي مؤخرًا وينتقل إلى أورلاندو سيتي في الدوري الأمريكي (MLS) عام 2026.",
    "bioEn": "French forward who spent most of his European career between Real Sociedad, Atlético Madrid and Barcelona, and was a key figure in France's 2018 World Cup triumph, before retiring from international football and moving to Orlando City in Major League Soccer (MLS) in 2026.",
    "achievementsAr": [
      "بطولة كأس العالم 2018 مع فرنسا",
      "المركز الثالث في الكرة الذهبية 2016",
      "لقب الدوري الأوروبي 2017-2018 مع أتلتيكو مدريد",
      "لقب كأس السوبر الأوروبي 2018 مع أتلتيكو مدريد"
    ],
    "achievementsEn": [
      "2018 FIFA World Cup title with France",
      "Third place in the 2016 Ballon d'Or",
      "2017-18 UEFA Europa League title with Atlético Madrid",
      "2018 UEFA Super Cup with Atlético Madrid"
    ],
    "clubsHistoryAr": [
      "ماكون (شباب)",
      "ريال سوسيداد",
      "أتلتيكو مدريد",
      "برشلونة",
      "أتلتيكو مدريد",
      "أورلاندو سيتي"
    ],
    "clubsHistoryEn": [
      "Mâcon (youth)",
      "Real Sociedad",
      "Atlético Madrid",
      "Barcelona",
      "Atlético Madrid",
      "Orlando City"
    ],
    "clubIds": [
      "real-sociedad",
      "atletico-madrid",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أنطوان_غريزمان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Antoine_Griezmann"
  },
  {
    "id": "casemiro",
    "nameAr": "كاسيميرو",
    "nameEn": "Casemiro",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "إنتر ميامي (الدوري الأمريكي MLS)",
    "clubEn": "Inter Miami (MLS)",
    "clubId": null,
    "position": {
      "ar": "وسط دفاعي",
      "en": "Defensive Midfielder"
    },
    "era": "2010-الآن",
    "active": true,
    "bioAr": "لاعب وسط دفاعي برازيلي، كان ركيزة أساسية في خط وسط ريال مدريد لسنوات وفاز معه بخمسة ألقاب دوري أبطال أوروبا، ثم انتقل إلى مانشستر يونايتد الإنجليزي عام 2022، قبل أن ينضم إلى إنتر ميامي في الدوري الأمريكي (MLS) عام 2026.",
    "bioEn": "Brazilian defensive midfielder who was a key fixture in Real Madrid's midfield for years, winning five UEFA Champions League titles with the club, before moving to Manchester United in 2022 and later joining Inter Miami in Major League Soccer (MLS) in 2026.",
    "achievementsAr": [
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "بطولة كوبا أمريكا 2019 مع البرازيل",
      "لقب كأس رابطة الأندية الإنجليزية (كاراباو كاب) مع مانشستر يونايتد 2022-2023",
      "أكثر من 200 مباراة رسمية مع ريال مدريد"
    ],
    "achievementsEn": [
      "5 UEFA Champions League titles with Real Madrid",
      "2019 Copa América title with Brazil",
      "2022-23 EFL Cup (Carabao Cup) with Manchester United",
      "Over 200 official appearances for Real Madrid"
    ],
    "clubsHistoryAr": [
      "ساو باولو",
      "ريال مدريد كاستيا (إعارة)",
      "بورتو (إعارة)",
      "ريال مدريد",
      "مانشستر يونايتد",
      "إنتر ميامي"
    ],
    "clubsHistoryEn": [
      "São Paulo",
      "Real Madrid Castilla (loan)",
      "Porto (loan)",
      "Real Madrid",
      "Manchester United",
      "Inter Miami"
    ],
    "clubIds": [
      "porto",
      "real-madrid",
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كاسيميرو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Casemiro"
  },
  {
    "id": "marcus-rashford",
    "nameAr": "ماركوس راشفورد",
    "nameEn": "Marcus Rashford",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر يونايتد",
    "clubEn": "Manchester United",
    "clubId": "manchester-united",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مهاجم إنجليزي صعد من أكاديمية مانشستر يونايتد وأصبح أحد نجوم الفريق لسنوات طويلة، أُعير لأستون فيلا ثم لبرشلونة الإسباني موسم 2025-2026 حيث فاز معه بلقب الدوري الإسباني، وحقق مع إنجلترا المركز الثالث في كأس العالم 2026. عاد إلى مانشستر يونايتد في صيف 2026 بعد أن قرر برشلونة عدم تفعيل بند الشراء الإلزامي.",
    "bioEn": "English forward who rose through Manchester United's academy and became one of the club's stars for many years. He was loaned to Aston Villa and then to Barcelona for the 2025-26 season, winning the La Liga title with them, and helped England reach third place at the 2026 World Cup. He returned to Manchester United in summer 2026 after Barcelona chose not to trigger their option to sign him permanently.",
    "achievementsAr": [
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "لقب الدوري الإسباني 2025-2026 مع برشلونة (إعارة)",
      "لقبا كأس FA مع مانشستر يونايتد",
      "لقب الدوري الأوروبي (يوروبا ليغ) مع مانشستر يونايتد 2016-2017"
    ],
    "achievementsEn": [
      "Third place at the 2026 World Cup with England",
      "2025-26 La Liga title with Barcelona (on loan)",
      "2 FA Cups with Manchester United",
      "2016-17 UEFA Europa League with Manchester United"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد",
      "أستون فيلا (إعارة)",
      "برشلونة (إعارة)",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Manchester United",
      "Aston Villa (loan)",
      "Barcelona (loan)",
      "Manchester United"
    ],
    "clubIds": [
      "manchester-united",
      "aston-villa",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماركوس_راشفورد",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marcus_Rashford"
  },
  {
    "id": "diego-godin",
    "nameAr": "دييغو غودين",
    "nameEn": "Diego Godín",
    "nationalityAr": "أوروغواياني",
    "nationalityEn": "Uruguayan",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2003-2023",
    "active": false,
    "bioAr": "مدافع أوروغواياني وقائد أتلتيكو مدريد لسنوات طويلة، سجل هدف التتويج بلقب الدوري الإسباني موسم 2013-2014 أمام برشلونة، وهو أكثر لاعب مثّل منتخب أوروغواي في التاريخ.",
    "bioEn": "Uruguayan defender and long-time captain of Atlético Madrid. He scored the title-clinching goal in the 2013-14 La Liga triumph against Barcelona, and is Uruguay's all-time most-capped international.",
    "achievementsAr": [
      "لقب الدوري الإسباني 2013-2014 مع أتلتيكو مدريد (سجل هدف الحسم)",
      "بطولة كوبا أمريكا 2011 مع أوروغواي",
      "وصافة دوري أبطال أوروبا مرتين مع أتلتيكو مدريد (2014، 2016)",
      "أكثر لاعب مثّل أوروغواي في التاريخ (161 مباراة دولية)"
    ],
    "achievementsEn": [
      "2013-14 La Liga title with Atlético Madrid (scored the clinching goal)",
      "2011 Copa América title with Uruguay",
      "2 UEFA Champions League runner-up finishes with Atlético Madrid (2014, 2016)",
      "Uruguay's all-time most-capped player (161 caps)"
    ],
    "clubsHistoryAr": [
      "سيرو",
      "ناسيونال",
      "فياريال",
      "أتلتيكو مدريد",
      "إنتر ميلان",
      "كالياري",
      "أتلتيكو مينيرو",
      "فيليز سارسفيلد"
    ],
    "clubsHistoryEn": [
      "Cerro",
      "Nacional",
      "Villarreal",
      "Atlético Madrid",
      "Inter Milan",
      "Cagliari",
      "Atlético Mineiro",
      "Vélez Sarsfield"
    ],
    "clubIds": [
      "nacional",
      "villarreal",
      "atletico-madrid",
      "inter-milan",
      "cagliari"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دييغو_غودين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Diego_Godín"
  },
  {
    "id": "koke",
    "nameAr": "كوكي",
    "nameEn": "Koke",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "لاعب وسط إسباني وقائد أتلتيكو مدريد، خريج أكاديمية النادي وصاحب الرقم القياسي لأكثر عدد مشاركات في تاريخه (أكثر من 700 مباراة)، لُقّب بـ'صخرة' فريق دييغو سيميوني طوال أكثر من عقد ونصف.",
    "bioEn": "Spanish midfielder and captain of Atlético Madrid, a club academy graduate and the club's all-time record appearance-holder (over 700 matches). He has been described as the rock of Diego Simeone's side for more than a decade and a half.",
    "achievementsAr": [
      "لقبا الدوري الإسباني مع أتلتيكو مدريد (2014، 2021)",
      "لقبا الدوري الأوروبي (يوروبا ليغ) مع أتلتيكو مدريد",
      "الرقم القياسي لأكثر مشاركات في تاريخ أتلتيكو مدريد",
      "قائد أتلتيكو مدريد منذ 2019"
    ],
    "achievementsEn": [
      "2 La Liga titles with Atlético Madrid (2014, 2021)",
      "2 UEFA Europa League titles with Atlético Madrid",
      "Club record for most appearances in Atlético Madrid's history",
      "Atlético Madrid captain since 2019"
    ],
    "clubsHistoryAr": [
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Atlético Madrid"
    ],
    "clubIds": [
      "atletico-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كوكي_(لاعب_كرة_قدم_مواليد_1992)",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Koke_(footballer,_born_1992)"
  },
  {
    "id": "sergen-yalcin",
    "nameAr": "سرجن يالتشين",
    "nameEn": "Sergen Yalçın",
    "nationalityAr": "تركي",
    "nationalityEn": "Turkish",
    "clubAr": "معتزل (مدرب حاليًا لبشكتاش)",
    "clubEn": "Retired (current Beşiktaş head coach)",
    "clubId": null,
    "position": {
      "ar": "وسط مهاجم",
      "en": "Attacking Midfielder"
    },
    "era": "1991-2008",
    "active": false,
    "bioAr": "يُعد من أفضل اللاعبين الأتراك في التاريخ، صعد من أكاديمية بشكتاش وأصبح أحد أبرز نجومه، وهو الشخص الوحيد الذي فاز بالدوري التركي وكأس تركيا مع بشكتاش كلاعب ثم كمدرب. سجل هدفين تاريخيين في فوز بشكتاش 2-0 خارج أرضه على تشيلسي بدوري الأبطال موسم 2003-2004.",
    "bioEn": "Regarded as one of the greatest Turkish players in history, he rose through Beşiktaş's academy to become one of its biggest stars. He is the only person to have won the Süper Lig and Turkish Cup with Beşiktaş both as a player and as a manager, and scored twice in Beşiktaş's famous 2-0 away win over Chelsea in the 2003-04 Champions League.",
    "achievementsAr": [
      "3 ألقاب دوري تركي مع بشكتاش كلاعب",
      "لقب كأس تركيا مع بشكتاش كلاعب",
      "هدفان تاريخيان في فوز بشكتاش على تشيلسي بدوري أبطال أوروبا 2003-2004",
      "الشخص الوحيد الذي توّج بالدوري التركي وكأس تركيا مع بشكتاش كلاعب ومدرب"
    ],
    "achievementsEn": [
      "3 Süper Lig titles with Beşiktaş as a player",
      "Turkish Cup title with Beşiktaş as a player",
      "Two historic goals in Beşiktaş's win over Chelsea in the 2003-04 Champions League",
      "Only person to win the Süper Lig and Turkish Cup with Beşiktaş as both player and manager"
    ],
    "clubsHistoryAr": [
      "بشكتاش",
      "إسطنبول سبور",
      "فنربخشة (إعارة)",
      "طرابزون سبور (إعارة)",
      "غلطة سراي (إعارة)",
      "بشكتاش",
      "أسكي شهير سبور"
    ],
    "clubsHistoryEn": [
      "Beşiktaş",
      "İstanbulspor",
      "Fenerbahçe (loan)",
      "Trabzonspor (loan)",
      "Galatasaray (loan)",
      "Beşiktaş",
      "Eskişehirspor"
    ],
    "clubIds": [
      "besiktas",
      "fenerbahce",
      "trabzonspor",
      "galatasaray"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sergen_Yalçın"
  },
  {
    "id": "ricardo-quaresma",
    "nameAr": "ريكاردو كواريزما",
    "nameEn": "Ricardo Quaresma",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2001-2022",
    "active": false,
    "bioAr": "جناح برتغالي اشتهر بمهارته الفنية العالية وضربته الشهيرة 'الترايفيلا' (الكعب الخارجي)، لعب لبشكتاش التركي في فترتين حصد خلالهما لقبي الدوري التركي وكأس تركيا، وتُوّج مع البرتغال بلقب يورو 2016.",
    "bioEn": "Portuguese winger renowned for his exceptional skill and his signature 'trivela' (outside-of-the-foot) strike. He played for Beşiktaş across two spells, winning two Süper Lig titles and the Turkish Cup, and won UEFA Euro 2016 with Portugal.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2016 مع البرتغال",
      "لقبا الدوري التركي مع بشكتاش (2016، 2017)",
      "كأس تركيا مع بشكتاش (2011)",
      "لقب دوري أبطال أوروبا 2010 مع إنتر ميلان"
    ],
    "achievementsEn": [
      "UEFA Euro 2016 title with Portugal",
      "2 Süper Lig titles with Beşiktaş (2016, 2017)",
      "Turkish Cup with Beşiktaş (2011)",
      "2010 UEFA Champions League title with Inter Milan"
    ],
    "clubsHistoryAr": [
      "سبورتينغ لشبونة",
      "برشلونة",
      "بورتو",
      "إنتر ميلان",
      "تشيلسي (إعارة)",
      "بشكتاش",
      "الأهلي الإماراتي",
      "بورتو",
      "بشكتاش",
      "كاسيمبشا",
      "فيتوريا غيماريش"
    ],
    "clubsHistoryEn": [
      "Sporting CP",
      "Barcelona",
      "Porto",
      "Inter Milan",
      "Chelsea (loan)",
      "Beşiktaş",
      "Al Ahli",
      "Porto",
      "Beşiktaş",
      "Kasımpaşa",
      "Vitória Guimarães"
    ],
    "clubIds": [
      "sporting-cp",
      "barcelona",
      "porto",
      "inter-milan",
      "chelsea",
      "besiktas"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ريكاردو_كواريسما",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ricardo_Quaresma"
  },
  {
    "id": "harry-kane",
    "nameAr": "هاري كين",
    "nameEn": "Harry Kane",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "بايرن ميونخ",
    "clubEn": "Bayern Munich",
    "clubId": "bayern-munich",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "مهاجم إنجليزي وقائد منتخب بلاده، هداف تاريخي لتوتنهام هوتسبير ولمنتخب إنجلترا، انتقل إلى بايرن ميونخ الألماني صيف 2023 في صفقة قياسية لناديه الجديد، وحصد معه لقب الدوري الألماني بعد سنوات طويلة من دون ألقاب جماعية كبرى.",
    "bioEn": "English striker and captain of the England national team. He is Tottenham Hotspur's and England's all-time record goalscorer. He moved to Bayern Munich in summer 2023 in a club-record transfer, and won the Bundesliga title with them after many trophyless years.",
    "achievementsAr": [
      "هداف تاريخي لمنتخب إنجلترا",
      "هداف تاريخي لتوتنهام هوتسبير (280 هدفًا)",
      "ثاني أفضل هداف في تاريخ الدوري الإنجليزي الممتاز",
      "لقب الدوري الألماني مع بايرن ميونخ"
    ],
    "achievementsEn": [
      "England's all-time record goalscorer",
      "Tottenham Hotspur's all-time record goalscorer (280 goals)",
      "Second all-time top scorer in Premier League history",
      "Bundesliga title with Bayern Munich"
    ],
    "clubsHistoryAr": [
      "توتنهام هوتسبير",
      "ليتون أورينت (إعارة)",
      "ميلوول (إعارة)",
      "نورويتش سيتي (إعارة)",
      "ليستر سيتي (إعارة)",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Tottenham Hotspur",
      "Leyton Orient (loan)",
      "Millwall (loan)",
      "Norwich City (loan)",
      "Leicester City (loan)",
      "Bayern Munich"
    ],
    "clubIds": [
      "tottenham",
      "millwall",
      "norwich-city",
      "leicester-city",
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/هاري_كين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Harry_Kane"
  },
  {
    "id": "n-golo-kante",
    "nameAr": "نغولو كانتي",
    "nameEn": "N'Golo Kanté",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "فنربخشة (تركيا)",
    "clubEn": "Fenerbahçe (Turkey)",
    "clubId": "fenerbahce",
    "position": {
      "ar": "وسط دفاعي",
      "en": "Defensive Midfielder"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "لاعب وسط فرنسي يُعد أحد أعظم لاعبي الارتكاز في جيله بفضل حسه الدفاعي وقدرته على تغطية الملعب، فاز بالدوري الإنجليزي مع ناديين مختلفين في موسمين متتاليين (ليستر سيتي وتشيلسي)، وتُوّج مع فرنسا بكأس العالم 2018، قبل أن ينتقل إلى الاتحاد السعودي عام 2023 ثم إلى فنربخشة التركي في فبراير 2026.",
    "bioEn": "French midfielder regarded as one of the greatest defensive midfielders of his generation for his defensive instincts and ground coverage. He won the Premier League with two different clubs in consecutive seasons (Leicester City and Chelsea), won the 2018 World Cup with France, and moved to Saudi club Al-Ittihad in 2023 and to Turkey's Fenerbahçe in February 2026.",
    "achievementsAr": [
      "بطولة كأس العالم 2018 مع فرنسا",
      "لقب الدوري الإنجليزي مع ليستر سيتي (2016) ثم تشيلسي (2017)",
      "لقب دوري أبطال أوروبا 2021 مع تشيلسي",
      "جائزة أفضل لاعب في الدوري الإنجليزي الممتاز موسم 2016-2017"
    ],
    "achievementsEn": [
      "2018 FIFA World Cup title with France",
      "Premier League title with Leicester City (2016) then Chelsea (2017)",
      "2021 UEFA Champions League title with Chelsea",
      "Premier League Player of the Season 2016-17"
    ],
    "clubsHistoryAr": [
      "بولونيا",
      "كاين",
      "ليستر سيتي",
      "تشيلسي",
      "الاتحاد",
      "فنربخشة"
    ],
    "clubsHistoryEn": [
      "Boulogne",
      "Caen",
      "Leicester City",
      "Chelsea",
      "Al-Ittihad",
      "Fenerbahçe"
    ],
    "clubIds": [
      "leicester-city",
      "chelsea",
      "fenerbahce"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/نغولو_كانتي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/N%27Golo_Kant%C3%A9"
  },
  {
    "id": "eden-hazard",
    "nameAr": "إيدين هازار",
    "nameEn": "Eden Hazard",
    "nationalityAr": "بلجيكي",
    "nationalityEn": "Belgian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2007-2023",
    "active": false,
    "bioAr": "جناح بلجيكي وقائد الجيل الذهبي لمنتخب بلاده، كان نجم تشيلسي الأبرز لسنوات وفاز معه بلقبين للدوري الإنجليزي ولقبين للدوري الأوروبي، قبل أن ينتقل لريال مدريد عام 2019 حيث عانى من الإصابات، واعتزل اللعب رسميًا في أكتوبر 2023.",
    "bioEn": "Belgian winger and captain of his country's golden generation. He was Chelsea's standout star for years, winning two Premier League titles and two Europa League titles with the club, before moving to Real Madrid in 2019 where injuries hampered him. He officially retired in October 2023.",
    "achievementsAr": [
      "لقبا الدوري الإنجليزي الممتاز مع تشيلسي (2015، 2017)",
      "لقبا الدوري الأوروبي (يوروبا ليغ) مع تشيلسي (2013، 2019)",
      "لقب دوري أبطال أوروبا 2022 مع ريال مدريد",
      "المركز الثالث في كأس العالم 2018 مع بلجيكا (قائدًا)"
    ],
    "achievementsEn": [
      "2 Premier League titles with Chelsea (2015, 2017)",
      "2 UEFA Europa League titles with Chelsea (2013, 2019)",
      "2022 UEFA Champions League title with Real Madrid",
      "Third place at the 2018 World Cup with Belgium (as captain)"
    ],
    "clubsHistoryAr": [
      "ليل",
      "تشيلسي",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Lille",
      "Chelsea",
      "Real Madrid"
    ],
    "clubIds": [
      "lille",
      "chelsea",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إيدين_هازارد",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Eden_Hazard"
  },
  {
    "id": "paul-pogba",
    "nameAr": "بول بوغبا",
    "nameEn": "Paul Pogba",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "موناكو",
    "clubEn": "AS Monaco",
    "clubId": "monaco",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "لاعب وسط فرنسي وبطل عالم 2018، لعب لمانشستر يونايتد ويوفنتوس في فترتين لكل منهما، غاب طويلاً عن الملاعب بسبب إيقاف بتهمة تعاطي المنشطات بين 2023 و2025، قبل أن يعود ويوقّع لنادي موناكو الفرنسي عام 2025.",
    "bioEn": "French midfielder and 2018 World Cup winner. He played for Manchester United and Juventus across two spells each, before a lengthy absence due to a doping ban between 2023 and 2025, after which he returned to football and signed for AS Monaco in 2025.",
    "achievementsAr": [
      "بطولة كأس العالم 2018 مع فرنسا",
      "لقب الدوري الأوروبي (يوروبا ليغ) مع مانشستر يونايتد 2016-2017",
      "لقب كأس الاتحاد الإنجليزي مع مانشستر يونايتد",
      "ألقاب عديدة للدوري الإيطالي مع يوفنتوس"
    ],
    "achievementsEn": [
      "2018 FIFA World Cup title with France",
      "2016-17 UEFA Europa League title with Manchester United",
      "FA Cup title with Manchester United",
      "Multiple Serie A titles with Juventus"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد",
      "يوفنتوس",
      "مانشستر يونايتد",
      "يوفنتوس",
      "موناكو"
    ],
    "clubsHistoryEn": [
      "Manchester United",
      "Juventus",
      "Manchester United",
      "Juventus",
      "AS Monaco"
    ],
    "clubIds": [
      "manchester-united",
      "juventus",
      "monaco"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بول_بوغبا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paul_Pogba"
  },
  {
    "id": "raheem-sterling",
    "nameAr": "رحيم سترلينغ",
    "nameEn": "Raheem Sterling",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "لاعب حر (آخر أنديته فينورد)",
    "clubEn": "Free agent (most recently Feyenoord)",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "جناح إنجليزي كان أحد أعمدة مانشستر سيتي في عصره الذهبي مع بيب غوارديولا، وفاز معه بألقاب عديدة للدوري الإنجليزي، وحقق مع إنجلترا وصافة يورو 2020، قبل أن تتراجع مسيرته في تشيلسي وينتقل لاحقًا إلى فيينورد الهولندي.",
    "bioEn": "English winger who was a key figure at Manchester City during Pep Guardiola's golden era there, winning multiple Premier League titles with the club, and reached the Euro 2020 final with England, before a decline at Chelsea and a later move to Dutch club Feyenoord.",
    "achievementsAr": [
      "وصافة بطولة أمم أوروبا 2020 مع إنجلترا",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "أفضل صانع أهداف إنجليزي في تاريخ دوري أبطال أوروبا",
      "جائزة الولد الذهبي (Golden Boy) 2014"
    ],
    "achievementsEn": [
      "UEFA Euro 2020 runner-up with England",
      "Multiple Premier League titles with Manchester City",
      "England's all-time top assist provider in the UEFA Champions League",
      "2014 Golden Boy award"
    ],
    "clubsHistoryAr": [
      "كوينز بارك رينجرز",
      "ليفربول",
      "مانشستر سيتي",
      "تشيلسي",
      "أرسنال (إعارة)",
      "فيينورد"
    ],
    "clubsHistoryEn": [
      "Queens Park Rangers",
      "Liverpool",
      "Manchester City",
      "Chelsea",
      "Arsenal (loan)",
      "Feyenoord"
    ],
    "clubIds": [
      "queens-park-rangers",
      "liverpool",
      "manchester-city",
      "chelsea",
      "arsenal",
      "feyenoord"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رحيم_ستيرلينغ",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Raheem_Sterling"
  },
  {
    "id": "marco-verratti",
    "nameAr": "ماركو فيراتي",
    "nameEn": "Marco Verratti",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "الدحيل (قطر)",
    "clubEn": "Al Duhail (Qatar)",
    "clubId": null,
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2008-الآن",
    "active": true,
    "bioAr": "لاعب وسط إيطالي يُعد من أفضل صناع الألعاب في جيله، قضى 11 موسمًا مع باريس سان جيرمان وفاز معه بتسعة ألقاب للدوري الفرنسي، وتُوّج مع إيطاليا بيورو 2020، قبل أن ينتقل إلى الدوري القطري عام 2023.",
    "bioEn": "Italian midfielder regarded as one of the best playmakers of his generation. He spent 11 seasons at Paris Saint-Germain, winning nine Ligue 1 titles with the club, and won Euro 2020 with Italy, before moving to the Qatari league in 2023.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2020 مع إيطاليا",
      "9 ألقاب دوري فرنسي مع باريس سان جيرمان",
      "ثاني أكثر لاعب مشاركة في تاريخ باريس سان جيرمان",
      "جائزة برافو 2012 (أفضل لاعب شاب في أوروبا)"
    ],
    "achievementsEn": [
      "UEFA Euro 2020 title with Italy",
      "9 Ligue 1 titles with Paris Saint-Germain",
      "Second all-time most-capped player in PSG's history",
      "2012 Bravo Award (Europe's best young player)"
    ],
    "clubsHistoryAr": [
      "بيسكارا",
      "باريس سان جيرمان",
      "العربي",
      "الدحيل"
    ],
    "clubsHistoryEn": [
      "Pescara",
      "Paris Saint-Germain",
      "Al-Arabi",
      "Al Duhail"
    ],
    "clubIds": [
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماركو_فيراتي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marco_Verratti"
  },
  {
    "id": "jan-oblak",
    "nameAr": "يان أوبلاك",
    "nameEn": "Jan Oblak",
    "nationalityAr": "سلوفيني",
    "nationalityEn": "Slovenian",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "حارس مرمى سلوفيني يُعد أحد أفضل حراس المرمى في العالم خلال العقد الأخير، انضم لأتلتيكو مدريد عام 2014 وحصد معه جائزة القفاز الذهبي (أفضل حارس في الليغا) عدة مرات، محافظًا على رقم قياسي في عدد الشباك النظيفة بالدوري الإسباني.",
    "bioEn": "Slovenian goalkeeper regarded as one of the best in the world over the last decade. He joined Atlético Madrid in 2014 and has won the Zamora Trophy (La Liga's best goalkeeper award) multiple times, holding a record number of clean sheets in La Liga.",
    "achievementsAr": [
      "جائزة القفاز الذهبي (سامورا) أكثر من مرة كأفضل حارس في الدوري الإسباني",
      "لقب الدوري الإسباني 2020-2021 مع أتلتيكو مدريد",
      "لقب الدوري الأوروبي 2017-2018 والسوبر الأوروبي 2018 مع أتلتيكو مدريد",
      "وصافة دوري أبطال أوروبا 2016 مع أتلتيكو مدريد",
      "الثلاثية المحلية 2013-2014 مع بنفيكا (الدوري وكأس البرتغال وكأس الرابطة)"
    ],
    "achievementsEn": [
      "Multiple-time winner of the Zamora Trophy as La Liga's best goalkeeper",
      "2020-21 La Liga title with Atlético Madrid",
      "2017-18 UEFA Europa League and 2018 UEFA Super Cup with Atlético Madrid",
      "2016 UEFA Champions League runner-up with Atlético Madrid",
      "2013-14 domestic treble with Benfica (league, Taça de Portugal, Taça da Liga)"
    ],
    "clubsHistoryAr": [
      "أولمبيا ليوبليانا",
      "بنفيكا",
      "بيرا مار (إعارة)",
      "أولهانينسي (إعارة)",
      "ليريا (إعارة)",
      "ريو آفي (إعارة)",
      "بنفيكا",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Olimpija Ljubljana",
      "Benfica",
      "Beira-Mar (loan)",
      "Olhanense (loan)",
      "União de Leiria (loan)",
      "Rio Ave (loan)",
      "Benfica",
      "Atlético Madrid"
    ],
    "clubIds": [
      "benfica",
      "atletico-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/يان_أوبلاك",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jan_Oblak"
  },
  {
    "id": "gianluigi-donnarumma",
    "nameAr": "جانلويجي دوناروما",
    "nameEn": "Gianluigi Donnarumma",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "حارس مرمى إيطالي وقائد المنتخب الإيطالي، احترف مع ميلان في سن مبكرة جدًا وأصبح من أفضل حراس العالم، فاز بيورو 2020 مع إيطاليا وانتُخب أفضل لاعب في البطولة، لعب بعدها لباريس سان جيرمان قبل انتقاله لمانشستر سيتي عام 2025.",
    "bioEn": "Italian goalkeeper and captain of the Italy national team. He turned professional with Milan at a very young age and became one of the best goalkeepers in the world, winning Euro 2020 with Italy and being named player of the tournament, before playing for Paris Saint-Germain and later moving to Manchester City in 2025.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2020 مع إيطاليا",
      "جائزة أفضل لاعب في بطولة يورو 2020",
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان",
      "قائد منتخب إيطاليا"
    ],
    "achievementsEn": [
      "UEFA Euro 2020 title with Italy",
      "UEFA Euro 2020 Player of the Tournament",
      "2024-25 UEFA Champions League title with Paris Saint-Germain",
      "Captain of the Italy national team"
    ],
    "clubsHistoryAr": [
      "ميلان",
      "باريس سان جيرمان",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "AC Milan",
      "Paris Saint-Germain",
      "Manchester City"
    ],
    "clubIds": [
      "ac-milan",
      "paris-saint-germain",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جانلويجي_دوناروما",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gianluigi_Donnarumma"
  },
  {
    "id": "victor-osimhen",
    "nameAr": "فيكتور أوسيمين",
    "nameEn": "Victor Osimhen",
    "nationalityAr": "نيجيري",
    "nationalityEn": "Nigerian",
    "clubAr": "غلطة سراي",
    "clubEn": "Galatasaray",
    "clubId": "galatasaray",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "مهاجم نيجيري كان نجم نابولي الإيطالي الأبرز وساهم في تتويجه بلقب الدوري الإيطالي موسم 2022-2023 لأول مرة منذ عصر مارادونا، قبل أن ينتقل إلى غلطة سراي التركي حيث تُوّج هدافًا للدوري التركي وحقق الثنائية المحلية.",
    "bioEn": "Nigerian striker who was Napoli's standout star, helping the club win the 2022-23 Serie A title for the first time since the Maradona era, before moving to Turkish club Galatasaray, where he finished as the Süper Lig's top scorer and won the domestic double.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 2022-2023 مع نابولي",
      "هداف الدوري التركي مع غلطة سراي",
      "الثنائية المحلية (الدوري والكأس) مع غلطة سراي",
      "وصافة كأس الأمم الأفريقية 2023 مع نيجيريا"
    ],
    "achievementsEn": [
      "2022-23 Serie A title with Napoli",
      "Süper Lig top scorer with Galatasaray",
      "Domestic double (league and cup) with Galatasaray",
      "2023 Africa Cup of Nations runner-up with Nigeria"
    ],
    "clubsHistoryAr": [
      "فولفسبورغ",
      "شارلروا (إعارة)",
      "ليل",
      "نابولي",
      "غلطة سراي (إعارة ثم انتقال دائم)"
    ],
    "clubsHistoryEn": [
      "VfL Wolfsburg",
      "Charleroi (loan)",
      "Lille",
      "Napoli",
      "Galatasaray (loan then permanent)"
    ],
    "clubIds": [
      "vfl-wolfsburg",
      "lille",
      "napoli",
      "galatasaray"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فيكتور_أوسيمين",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Victor_Osimhen"
  },
  {
    "id": "marquinhos",
    "nameAr": "ماركينيوس",
    "nameEn": "Marquinhos",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "مدافع برازيلي وقائد باريس سان جيرمان منذ 2020 وصاحب الرقم القياسي لأكثر مشاركات في تاريخ النادي، قاد الفريق للفوز بأول لقب دوري أبطال أوروبا في تاريخه موسم 2024-2025 بفوز ساحق 5-0 على إنتر ميلان في النهائي.",
    "bioEn": "Brazilian defender and Paris Saint-Germain captain since 2020, holding the club's all-time appearance record. He led the team to its first-ever UEFA Champions League title in the 2024-25 season, a crushing 5-0 win over Inter Milan in the final.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان (قائدًا)",
      "10 ألقاب دوري فرنسي مع باريس سان جيرمان (رقم قياسي)",
      "بطولة كوبا أمريكا 2019 مع البرازيل",
      "الميدالية الذهبية الأولمبية 2016 مع البرازيل"
    ],
    "achievementsEn": [
      "2024-25 UEFA Champions League title with Paris Saint-Germain (as captain)",
      "10 Ligue 1 titles with Paris Saint-Germain (club record)",
      "2019 Copa América title with Brazil",
      "2016 Olympic gold medal with Brazil"
    ],
    "clubsHistoryAr": [
      "كورينثيانز",
      "روما",
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Corinthians",
      "Roma",
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "corinthians",
      "roma",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماركينيوس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marquinhos"
  },
  {
    "id": "thiago-silva",
    "nameAr": "تياغو سيلفا",
    "nameEn": "Thiago Silva",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "فلومينينسي",
    "clubEn": "Fluminense",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2002-الآن",
    "active": true,
    "bioAr": "مدافع برازيلي يُعد أحد أفضل قلوب الدفاع في جيله، كان قائد باريس سان جيرمان لسنوات طويلة وحقق معه 8 ألقاب دوري فرنسي، ثم توّج بدوري أبطال أوروبا مع تشيلسي عام 2021، قبل أن يعود إلى ناديه الأول فلومينينسي البرازيلي.",
    "bioEn": "Brazilian defender regarded as one of the best centre-backs of his generation. He captained Paris Saint-Germain for many years, winning 8 Ligue 1 titles with the club, then won the UEFA Champions League with Chelsea in 2021, before returning to his boyhood club Fluminense in Brazil.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2021 مع تشيلسي",
      "8 ألقاب دوري فرنسي مع باريس سان جيرمان",
      "بطولة كوبا أمريكا 2019 وكأس القارات 2013 مع البرازيل",
      "قائد باريس سان جيرمان لسنوات طويلة"
    ],
    "achievementsEn": [
      "2021 UEFA Champions League title with Chelsea",
      "8 Ligue 1 titles with Paris Saint-Germain",
      "2019 Copa América and 2013 Confederations Cup titles with Brazil",
      "Long-time captain of Paris Saint-Germain"
    ],
    "clubsHistoryAr": [
      "فلومينينسي",
      "بورتو",
      "ديناموموسكو (إعارة)",
      "فلومينينسي",
      "ميلان",
      "باريس سان جيرمان",
      "تشيلسي",
      "فلومينينسي",
      "بورتو",
      "فلومينينسي"
    ],
    "clubsHistoryEn": [
      "Fluminense",
      "Porto",
      "Dynamo Moscow (loan)",
      "Fluminense",
      "AC Milan",
      "Paris Saint-Germain",
      "Chelsea",
      "Fluminense",
      "Porto",
      "Fluminense"
    ],
    "clubIds": [
      "porto",
      "ac-milan",
      "paris-saint-germain",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/تياغو_سيلفا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Thiago_Silva"
  },
  {
    "id": "vitinha",
    "nameAr": "فيتينيا",
    "nameEn": "Vitinha",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "وسط",
      "en": "Central Midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "لاعب وسط برتغالي يُعد من أفضل صناع الألعاب في العالم حاليًا، صعد من أكاديمية بورتو وانضم لباريس سان جيرمان عام 2022، وكان لاعبًا محوريًا في تتويج الفريق بأول لقب دوري أبطال أوروبا في تاريخه موسم 2024-2025.",
    "bioEn": "Portuguese midfielder considered one of the best playmakers in the world today. He came through Porto's academy and joined Paris Saint-Germain in 2022, playing a pivotal role in the club winning its first-ever UEFA Champions League title in the 2024-25 season.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان",
      "عضو التشكيلة المثالية لدوري أبطال أوروبا موسم 2023-2024",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان",
      "لقب الدوري البرتغالي مع بورتو"
    ],
    "achievementsEn": [
      "2024-25 UEFA Champions League title with Paris Saint-Germain",
      "UEFA Champions League Team of the Season 2023-24",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "Primeira Liga title with Porto"
    ],
    "clubsHistoryAr": [
      "بورتو",
      "وولفرهامبتون (إعارة)",
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Porto",
      "Wolverhampton Wanderers (loan)",
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "porto",
      "wolverhampton-wanderers",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فيتينيا_(لاعب_كرة_قدم_مواليد_فبراير_2000)",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Vitinha_(footballer,_born_February_2000)"
  },
  {
    "id": "angel-di-maria",
    "nameAr": "أنخل دي ماريا",
    "nameEn": "Ángel Di María",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "روزاريو سنترال",
    "clubEn": "Rosario Central",
    "clubId": null,
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "جناح أرجنتيني يُلقّب بـ'فيديو'، لعب لباريس سان جيرمان أربعة مواسم وحصد معه عدة ألقاب للدوري الفرنسي، وسجل هدف التتويج بكأس العالم 2022 مع الأرجنتين في المباراة النهائية أمام فرنسا، قبل أن يعود إلى ناديه الأول روزاريو سنترال عام 2025.",
    "bioEn": "Argentine winger nicknamed 'Fideo'. He spent four seasons at Paris Saint-Germain, winning multiple Ligue 1 titles with the club, and scored in the 2022 World Cup final against France as Argentina won the title, before returning to his boyhood club Rosario Central in 2025.",
    "achievementsAr": [
      "بطولة كأس العالم 2022 مع الأرجنتين (سجل هدفًا في النهائي)",
      "بطولتا كوبا أمريكا مع الأرجنتين (2021، 2024)",
      "لقب دوري أبطال أوروبا 2014 مع ريال مدريد",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup title with Argentina (scored in the final)",
      "2 Copa América titles with Argentina (2021, 2024)",
      "2014 UEFA Champions League title with Real Madrid",
      "Multiple Ligue 1 titles with Paris Saint-Germain"
    ],
    "clubsHistoryAr": [
      "روزاريو سنترال",
      "بنفيكا",
      "ريال مدريد",
      "مانشستر يونايتد",
      "باريس سان جيرمان",
      "يوفنتوس",
      "بنفيكا",
      "روزاريو سنترال"
    ],
    "clubsHistoryEn": [
      "Rosario Central",
      "Benfica",
      "Real Madrid",
      "Manchester United",
      "Paris Saint-Germain",
      "Juventus",
      "Benfica",
      "Rosario Central"
    ],
    "clubIds": [
      "benfica",
      "real-madrid",
      "manchester-united",
      "paris-saint-germain",
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أنخل_دي_ماريا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ángel_Di_María"
  },
  {
    "id": "lautaro-martinez",
    "nameAr": "لاوتارو مارتينيز",
    "nameEn": "Lautaro Martínez",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "إنتر ميلان",
    "clubEn": "Inter Milan",
    "clubId": "inter-milan",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مهاجم أرجنتيني وقائد إنتر ميلان، فاز بكأس العالم 2022 مع الأرجنتين ووصل معها لنهائي نسخة 2026، وحقق بطولتي كوبا أمريكا (2021، 2024)، ويُعد أحد أفضل المهاجمين في العالم حاليًا.",
    "bioEn": "Argentine striker and captain of Inter Milan. He won the 2022 World Cup with Argentina and reached the 2026 final with them, also winning two Copa América titles (2021, 2024), and is regarded as one of the best strikers in the world today.",
    "achievementsAr": [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "وصافة كأس العالم 2026 مع الأرجنتين",
      "بطولتا كوبا أمريكا مع الأرجنتين (2021، 2024)",
      "لقب الدوري الإيطالي مع إنتر ميلان (قائدًا)"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup title with Argentina",
      "2026 FIFA World Cup runner-up with Argentina",
      "2 Copa América titles with Argentina (2021, 2024)",
      "Serie A title with Inter Milan (as captain)"
    ],
    "clubsHistoryAr": [
      "راسينغ كلوب",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Racing Club",
      "Inter Milan"
    ],
    "clubIds": [
      "racing-club",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لاوتارو_مارتينيز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Lautaro_Martínez"
  },
  {
    "id": "rafael-leao",
    "nameAr": "رافائيل لياو",
    "nameEn": "Rafael Leão",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "غلطة سراي",
    "clubEn": "Galatasaray",
    "clubId": "galatasaray",
    "position": {
      "ar": "جناح أيسر",
      "en": "Left Winger"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "جناح برتغالي كان نجم ميلان الإيطالي الأبرز لسنوات وساهم في فوزه بلقب الدوري الإيطالي 2021-2022، وفاز مع البرتغال بلقب دوري الأمم الأوروبية 2025، قبل أن ينتقل إلى غلطة سراي التركي عام 2026.",
    "bioEn": "Portuguese winger who was AC Milan's standout star for years, helping them win the 2021-22 Serie A title, and won the 2025 UEFA Nations League with Portugal, before moving to Turkish club Galatasaray in 2026.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 2021-2022 مع ميلان",
      "لقب دوري الأمم الأوروبية 2025 مع البرتغال",
      "جائزة أفضل لاعب في الدوري الإيطالي موسم فوزه بالبطولة",
      "كأس إيطاليا والسوبر الإيطالي مع ميلان"
    ],
    "achievementsEn": [
      "2021-22 Serie A title with AC Milan",
      "2025 UEFA Nations League title with Portugal",
      "Serie A MVP in his title-winning season",
      "Coppa Italia and Italian Super Cup with AC Milan"
    ],
    "clubsHistoryAr": [
      "سبورتينغ لشبونة",
      "ليل",
      "ميلان",
      "غلطة سراي"
    ],
    "clubsHistoryEn": [
      "Sporting CP",
      "Lille",
      "AC Milan",
      "Galatasaray"
    ],
    "clubIds": [
      "sporting-cp",
      "lille",
      "ac-milan",
      "galatasaray"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رفائيل_لياو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rafael_Leão"
  },
  {
    "id": "ruben-dias",
    "nameAr": "روبن دياش",
    "nameEn": "Rúben Dias",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مدافع برتغالي وأحد أعمدة مانشستر سيتي منذ انتقاله من بنفيكا عام 2020، فاز معه بعدة ألقاب دوري إنجليزي ودوري أبطال أوروبا، وهو القائد الطبيعي لدفاع منتخب البرتغال، وحقق معه لقبي دوري الأمم الأوروبية (2019، 2025).",
    "bioEn": "Portuguese defender and a defensive cornerstone of Manchester City since his move from Benfica in 2020, winning multiple Premier League titles and the UEFA Champions League with the club. He is the natural leader of Portugal's defence and has won two UEFA Nations League titles with them (2019, 2025).",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2022-2023 مع مانشستر سيتي",
      "4 ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "لقبا دوري الأمم الأوروبية مع البرتغال (2019، 2025)",
      "كأس العالم للأندية 2023 مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "2022-23 UEFA Champions League title with Manchester City",
      "4 Premier League titles with Manchester City",
      "2 UEFA Nations League titles with Portugal (2019, 2025)",
      "2023 FIFA Club World Cup with Manchester City"
    ],
    "clubsHistoryAr": [
      "بنفيكا",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Benfica",
      "Manchester City"
    ],
    "clubIds": [
      "benfica",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روبن_دياز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rúben_Dias"
  },
  {
    "id": "bernardo-silva",
    "nameAr": "برناردو سيلفا",
    "nameEn": "Bernardo Silva",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "لاعب وسط برتغالي قضى 9 مواسم مع مانشستر سيتي وكان ركيزة أساسية في ثلاثيته التاريخية موسم 2022-2023، قبل أن يرحل كلاعب حر وينضم إلى ريال مدريد الإسباني في يوليو 2026.",
    "bioEn": "Portuguese midfielder who spent nine seasons at Manchester City and was a key figure in their historic treble in the 2022-23 season, before leaving as a free agent and joining Real Madrid in July 2026.",
    "achievementsAr": [
      "الثلاثية التاريخية مع مانشستر سيتي موسم 2022-2023 (الدوري، الكأس، دوري الأبطال)",
      "6 ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "لقبا دوري الأمم الأوروبية مع البرتغال (2019، 2025)",
      "لاعب مانشستر سيتي المثالي لعام 2019"
    ],
    "achievementsEn": [
      "Historic treble with Manchester City in 2022-23 (league, FA Cup, Champions League)",
      "6 Premier League titles with Manchester City",
      "2 UEFA Nations League titles with Portugal (2019, 2025)",
      "Manchester City Player of the Year 2019"
    ],
    "clubsHistoryAr": [
      "بنفيكا",
      "موناكو (إعارة ثم انتقال دائم)",
      "مانشستر سيتي",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Benfica",
      "Monaco (loan then permanent)",
      "Manchester City",
      "Real Madrid"
    ],
    "clubIds": [
      "benfica",
      "monaco",
      "manchester-city",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/برناردو_سيلفا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bernardo_Silva"
  },
  {
    "id": "khvicha-kvaratskhelia",
    "nameAr": "خفيتشا كفاراتسخيليا",
    "nameEn": "Khvicha Kvaratskhelia",
    "nationalityAr": "جورجي",
    "nationalityEn": "Georgian",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "جناح أيسر",
      "en": "Left Winger"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "جناح جورجي وقائد منتخب بلاده، يُعد أعظم لاعب جورجي في التاريخ. تألق بشكل كبير مع نابولي الإيطالي وساهم في تتويجه بالدوري الإيطالي 2022-2023، قبل أن ينتقل إلى باريس سان جيرمان يناير 2025 وحقق معه لقب دوري أبطال أوروبا 2024-2025.",
    "bioEn": "Georgian winger and captain of his national team, regarded as the greatest Georgian player of all time. He shone brightly at Napoli, helping them win the 2022-23 Serie A title, before moving to Paris Saint-Germain in January 2025 and winning the 2024-25 UEFA Champions League with them.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان",
      "لقب الدوري الإيطالي 2022-2023 مع نابولي",
      "جائزة أفضل لاعب شاب في دوري أبطال أوروبا موسم 2022-2023",
      "قائد منتخب جورجيا الذي تأهل لأول مرة في تاريخه لبطولة كبرى (يورو 2024)"
    ],
    "achievementsEn": [
      "2024-25 UEFA Champions League title with Paris Saint-Germain",
      "2022-23 Serie A title with Napoli",
      "UEFA Champions League Young Player of the Season 2022-23",
      "Captain of Georgia during their first-ever qualification for a major tournament (Euro 2024)"
    ],
    "clubsHistoryAr": [
      "دينامو تبليسي",
      "روستافي",
      "لوكوموتيف موسكو (إعارة)",
      "روبين كازان",
      "دينامو باتومي",
      "نابولي",
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Dinamo Tbilisi",
      "Rustavi",
      "Lokomotiv Moscow (loan)",
      "Rubin Kazan",
      "Dinamo Batumi",
      "Napoli",
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "napoli",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/خفيتشا_كفاراتسخيليا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Khvicha_Kvaratskhelia"
  },
  {
    "id": "nicolo-barella",
    "nameAr": "نيكولو باريلا",
    "nameEn": "Nicolò Barella",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "إنتر ميلان",
    "clubEn": "Inter Milan",
    "clubId": "inter-milan",
    "position": {
      "ar": "وسط",
      "en": "Central Midfielder"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "لاعب وسط إيطالي وأحد أهم لاعبي خط وسط إنتر ميلان منذ انضمامه من كالياري عام 2019، فاز مع إيطاليا بلقب يورو 2020 وسجل هدفًا مهمًا في نصف النهائي أمام إسبانيا، وحقق عدة ألقاب دوري إيطالي مع إنتر.",
    "bioEn": "Italian midfielder and a key figure in Inter Milan's midfield since joining from Cagliari in 2019. He won Euro 2020 with Italy, scoring an important goal in the semi-final against Spain, and has won multiple Serie A titles with Inter.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2020 مع إيطاليا (سجل هدفًا في نصف النهائي أمام إسبانيا)",
      "عدة ألقاب دوري إيطالي مع إنتر ميلان",
      "وصافة دوري أبطال أوروبا مع إنتر ميلان (2023)",
      "أصغر قائد في تاريخ كالياري"
    ],
    "achievementsEn": [
      "UEFA Euro 2020 title with Italy (scored in the semi-final against Spain)",
      "Multiple Serie A titles with Inter Milan",
      "UEFA Champions League runner-up with Inter Milan (2023)",
      "Youngest captain in Cagliari's history"
    ],
    "clubsHistoryAr": [
      "كالياري",
      "كومو (إعارة)",
      "إنتر ميلان (إعارة ثم انتقال دائم)"
    ],
    "clubsHistoryEn": [
      "Cagliari",
      "Como (loan)",
      "Inter Milan (loan then permanent)"
    ],
    "clubIds": [
      "cagliari",
      "como",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/نيكولو_باريلا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Nicolò_Barella"
  },
  {
    "id": "joshua-kimmich",
    "nameAr": "جوشوا كيميش",
    "nameEn": "Joshua Kimmich",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بايرن ميونخ",
    "clubEn": "Bayern Munich",
    "clubId": "bayern-munich",
    "position": {
      "ar": "وسط / ظهير أيمن",
      "en": "Midfielder / Right-back"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "لاعب وسط ألماني متعدد المراكز وقائد المنتخب الألماني، يلعب لبايرن ميونخ منذ عام 2015 وجدد عقده معه حتى 2029. فاز مع بايرن بالثلاثية القارية موسم 2019-2020 (الدوري والكأس ودوري الأبطال)، ويُعد أحد أهم لاعبي خط الوسط في العالم بفضل رؤيته وتمريراته.",
    "bioEn": "Versatile German midfielder and captain of the Germany national team, playing for Bayern Munich since 2015 and having extended his contract there until 2029. He won the continental treble with Bayern in the 2019-20 season (Bundesliga, DFB-Pokal, Champions League) and is regarded as one of the world's finest midfielders for his vision and passing.",
    "achievementsAr": [
      "الثلاثية القارية 2019-2020 مع بايرن ميونخ (الدوري والكأس ودوري الأبطال)",
      "عدة ألقاب دوري ألماني (بوندسليغا) مع بايرن ميونخ",
      "قائد المنتخب الألماني",
      "عضو تشكيلة الموسم في يورو 2016"
    ],
    "achievementsEn": [
      "2019-20 continental treble with Bayern Munich (Bundesliga, DFB-Pokal, Champions League)",
      "Multiple Bundesliga titles with Bayern Munich",
      "Captain of the Germany national team",
      "UEFA Euro 2016 Team of the Tournament"
    ],
    "clubsHistoryAr": [
      "شتوتغارت",
      "لايبزيغ (إعارة)",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "VfB Stuttgart",
      "RB Leipzig (loan)",
      "Bayern Munich"
    ],
    "clubIds": [
      "vfb-stuttgart",
      "rb-leipzig",
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جوشوا_كيميش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Joshua_Kimmich"
  },
  {
    "id": "mesut-ozil",
    "nameAr": "مسعود أوزيل",
    "nameEn": "Mesut Özil",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder"
    },
    "era": "2006-2023",
    "active": false,
    "bioAr": "صانع ألعاب ألماني من أصول تركية، يُعد من أبرز صناع الألعاب في جيله بفضل رؤيته ودقة تمريراته. توّج مسيرته الدولية بلقب كأس العالم 2014 مع ألمانيا، ولعب لريال مدريد وآرسنال قبل أن يعتزل مع فنربخشة التركي عام 2023.",
    "bioEn": "German playmaker of Turkish descent, regarded as one of the finest creative midfielders of his generation for his vision and passing. He capped his international career by winning the 2014 FIFA World Cup with Germany, and played for Real Madrid and Arsenal before retiring at Turkish club Fenerbahçe in 2023.",
    "achievementsAr": [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "لقب الدوري الإسباني 2011-2012 مع ريال مدريد",
      "لقب كأس إنجلترا (عدة مرات) مع آرسنال",
      "أكبر رقم قياسي لصانع أهداف في الدوري الإنجليزي خلال فترة من مسيرته"
    ],
    "achievementsEn": [
      "2014 FIFA World Cup title with Germany",
      "2011-12 La Liga title with Real Madrid",
      "FA Cup titles (multiple times) with Arsenal",
      "Held the Premier League assists record for a single season for a period of his career"
    ],
    "clubsHistoryAr": [
      "شالكه 04",
      "فيردر بريمن",
      "ريال مدريد",
      "آرسنال",
      "فنربخشة",
      "إسطنبول باشاك شهير"
    ],
    "clubsHistoryEn": [
      "Schalke 04",
      "Werder Bremen",
      "Real Madrid",
      "Arsenal",
      "Fenerbahçe",
      "Istanbul Başakşehir"
    ],
    "clubIds": [
      "schalke-04",
      "werder-bremen",
      "real-madrid",
      "arsenal",
      "fenerbahce"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مسعود_أوزيل",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mesut_Özil"
  },
  {
    "id": "romelu-lukaku",
    "nameAr": "روميلو لوكاكو",
    "nameEn": "Romelu Lukaku",
    "nationalityAr": "بلجيكي",
    "nationalityEn": "Belgian",
    "clubAr": "نابولي",
    "clubEn": "Napoli",
    "clubId": "napoli",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "مهاجم بلجيكي وهداف منتخب بلجيكا التاريخي، لعب لتشيلسي وإيفرتون ومانشستر يونايتد وإنتر ميلان قبل أن يستقر في نابولي الإيطالي. حقق لقب الدوري الإيطالي مع إنتر ميلان موسم 2020-2021، وأصبح أكبر هداف لبلجيكا في تاريخ نهائيات كأس العالم.",
    "bioEn": "Belgian striker and his country's all-time leading goalscorer, he has played for Chelsea, Everton, Manchester United and Inter Milan before settling at Napoli. He won the Serie A title with Inter Milan in the 2020-21 season and became Belgium's all-time top scorer at the FIFA World Cup finals.",
    "achievementsAr": [
      "لقب الدوري الإيطالي (سيري A) 2020-2021 مع إنتر ميلان",
      "هداف منتخب بلجيكا التاريخي",
      "أكبر هداف لبلجيكا في تاريخ نهائيات كأس العالم",
      "وصافة دوري أبطال أوروبا مع إنتر ميلان (2023)"
    ],
    "achievementsEn": [
      "2020-21 Serie A title with Inter Milan",
      "Belgium's all-time top goalscorer",
      "Belgium's all-time leading scorer at the FIFA World Cup finals",
      "UEFA Champions League runner-up with Inter Milan (2023)"
    ],
    "clubsHistoryAr": [
      "أندرلخت",
      "تشيلسي",
      "ويست بروميتش (إعارة)",
      "إيفرتون",
      "مانشستر يونايتد",
      "إنتر ميلان (إعارة ثم انتقال دائم)",
      "تشيلسي",
      "روما (إعارة)",
      "نابولي"
    ],
    "clubsHistoryEn": [
      "Anderlecht",
      "Chelsea",
      "West Bromwich Albion (loan)",
      "Everton",
      "Manchester United",
      "Inter Milan (loan then permanent)",
      "Chelsea",
      "Roma (loan)",
      "Napoli"
    ],
    "clubIds": [
      "anderlecht",
      "chelsea",
      "west-bromwich-albion",
      "everton",
      "manchester-united",
      "inter-milan",
      "roma",
      "napoli"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روميلو_لوكاكو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Romelu_Lukaku"
  },
  {
    "id": "emiliano-martinez",
    "nameAr": "إميليانو مارتينيز",
    "nameEn": "Emiliano Martínez",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "حارس مرمى أرجنتيني تخرج من أكاديمية أرسنال وبرز مع أستون فيلا الذي انضم إليه عام 2020، وكان بطل الأرجنتين في نهائي كأس العالم 2022. انتقل إلى تشيلسي في 30 أغسطس 2026 بعقد لثلاث سنوات مقابل نحو 7.5 مليون جنيه إسترليني.",
    "bioEn": "Argentine goalkeeper who came through Arsenal's academy, became a star at Aston Villa after joining in 2020, and was Argentina's hero in the 2022 World Cup final. He moved to Chelsea on 30 August 2026 on a three-year contract for a reported £7.5 million.",
    "achievementsAr": [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "جائزة القفاز الذهبي لأفضل حارس في كأس العالم 2022",
      "بطولة كوبا أمريكا مرتين (2021 و2024) مع الأرجنتين",
      "بطولة فينالِسيما 2022 مع الأرجنتين",
      "جائزة ياشين لأفضل حارس مرمى في حفل الكرة الذهبية 2023 و2024",
      "الدوري الأوروبي 2025-26 مع أستون فيلا",
      "وصيف كأس العالم 2026 مع الأرجنتين"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup title with Argentina",
      "Golden Glove as best goalkeeper of the 2022 World Cup",
      "Copa América title twice (2021 and 2024) with Argentina",
      "2022 CONMEBOL–UEFA Finalissima title with Argentina",
      "Yashin Trophy (best goalkeeper) at the 2023 and 2024 Ballon d'Or ceremonies",
      "UEFA Europa League 2025-26 with Aston Villa",
      "2026 FIFA World Cup runner-up with Argentina"
    ],
    "clubsHistoryAr": [
      "أرسنال",
      "إعارات متعددة (أكسفورد يونايتد، شيفيلد وينزداي، روثرهام، خيتافي، ريدينغ)",
      "أستون فيلا",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Arsenal",
      "Multiple loan spells (Oxford United, Sheffield Wednesday, Rotherham, Getafe, Reading)",
      "Aston Villa",
      "Chelsea"
    ],
    "clubIds": [
      "arsenal",
      "aston-villa",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إميليانو_مارتينيز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Emiliano_Martínez"
  },
  {
    "id": "trent-alexander-arnold",
    "nameAr": "ترينت ألكسندر-أرنولد",
    "nameEn": "Trent Alexander-Arnold",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "ظهير أيمن",
      "en": "Right-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "ظهير أيمن إنجليزي، خرّيج أكاديمية ليفربول الذي دافع عن ألوانه لأكثر من عقد وفاز معه بدوري أبطال أوروبا والدوري الإنجليزي الممتاز مرتين، قبل أن ينتقل إلى ريال مدريد الإسباني في يونيو 2025 بعقد يمتد حتى 2031.",
    "bioEn": "English right-back and Liverpool academy graduate who represented the club for over a decade, winning the UEFA Champions League and the Premier League twice with them, before moving to Real Madrid in June 2025 on a deal until 2031.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2018-2019 مع ليفربول",
      "لقبا الدوري الإنجليزي الممتاز (2019-2020 و2024-2025) مع ليفربول",
      "لقب كأس الاتحاد الإنجليزي 2021-2022 مع ليفربول",
      "لقبا كأس الرابطة الإنجليزية مع ليفربول"
    ],
    "achievementsEn": [
      "2018-19 UEFA Champions League title with Liverpool",
      "Two Premier League titles (2019-20 and 2024-25) with Liverpool",
      "2021-22 FA Cup title with Liverpool",
      "Two EFL Cup titles with Liverpool"
    ],
    "clubsHistoryAr": [
      "ليفربول",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Liverpool",
      "Real Madrid"
    ],
    "clubIds": [
      "liverpool",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ترنت_ألكسندر-أرنولد",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Trent_Alexander-Arnold"
  },
  {
    "id": "cesc-fabregas",
    "nameAr": "سيسك فابريغاس",
    "nameEn": "Cesc Fàbregas",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "كومو (معتزل)",
    "clubEn": "Como (retired)",
    "clubId": "como",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Midfielder / Playmaker"
    },
    "era": "2003-2022",
    "active": false,
    "bioAr": "صانع ألعاب إسباني وقائد سابق لآرسنال، فاز بكأس العالم 2010 ولقبي أمم أوروبا 2008 و2012 مع إسبانيا. لعب لبرشلونة وتشيلسي بعد آرسنال، واعتزل مع نادي كومو الإيطالي عام 2022 قبل أن يصبح مدربًا له.",
    "bioEn": "Spanish playmaker and former Arsenal captain who won the 2010 World Cup and the 2008 and 2012 European Championships with Spain. He played for Barcelona and Chelsea after Arsenal, and retired at Italian club Como in 2022 before becoming its head coach.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "لقبا الدوري الإنجليزي الممتاز مع تشيلسي (2014-2015 و2016-2017)",
      "لقب الدوري الإسباني 2014-2015 مع برشلونة"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain",
      "UEFA European Championship titles in 2008 and 2012 with Spain",
      "Two Premier League titles with Chelsea (2014-15 and 2016-17)",
      "2014-15 La Liga title with Barcelona"
    ],
    "clubsHistoryAr": [
      "آرسنال",
      "برشلونة",
      "تشيلسي",
      "مونزا (إعارة)",
      "كومو"
    ],
    "clubsHistoryEn": [
      "Arsenal",
      "Barcelona",
      "Chelsea",
      "Monza (loan)",
      "Como"
    ],
    "clubIds": [
      "arsenal",
      "barcelona",
      "chelsea",
      "como"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سيسك_فابريغاس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Cesc_Fàbregas"
  },
  {
    "id": "david-silva",
    "nameAr": "ديفيد سيلفا",
    "nameEn": "David Silva",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ريال سوسيداد (معتزل)",
    "clubEn": "Real Sociedad (retired)",
    "clubId": "real-sociedad",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder"
    },
    "era": "2004-2023",
    "active": false,
    "bioAr": "صانع ألعاب إسباني وأحد أهم نجوم مانشستر سيتي في تاريخه، فاز معه بعدة ألقاب دوري إنجليزي ممتاز. توّج مع إسبانيا بكأس العالم 2010 ولقبي أمم أوروبا 2008 و2012، واعتزل مع ريال سوسيداد عام 2023.",
    "bioEn": "Spanish playmaker and one of Manchester City's greatest ever players, winning multiple Premier League titles with the club. He won the 2010 World Cup and the 2008 and 2012 European Championships with Spain, and retired at Real Sociedad in 2023.",
    "achievementsAr": [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "كأس ملك إسبانيا 2008 مع فالنسيا"
    ],
    "achievementsEn": [
      "2010 FIFA World Cup title with Spain",
      "UEFA European Championship titles in 2008 and 2012 with Spain",
      "Multiple Premier League titles with Manchester City",
      "Copa del Rey 2008 with Valencia"
    ],
    "clubsHistoryAr": [
      "فالنسيا",
      "إيبار (إعارة)",
      "سيلتا فيغو (إعارة)",
      "مانشستر سيتي",
      "ريال سوسيداد"
    ],
    "clubsHistoryEn": [
      "Valencia",
      "Eibar (loan)",
      "Celta Vigo (loan)",
      "Manchester City",
      "Real Sociedad"
    ],
    "clubIds": [
      "valencia",
      "celta-vigo",
      "manchester-city",
      "real-sociedad"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ديفيد_سيلفا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/David_Silva"
  },
  {
    "id": "christian-vieri",
    "nameAr": "كريستيان فييري",
    "nameEn": "Christian Vieri",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1991-2009",
    "active": false,
    "bioAr": "مهاجم إيطالي قوي البنية وأحد أخطر الهدافين في جيله، انتقاله إلى إنتر ميلان عام 1999 مثّل رقمًا قياسيًا عالميًا لقيمة الصفقات في حينها. لعب أيضًا ليوفنتوس وأتلتيكو مدريد ولاتسيو وميلان، وسجل عدة مرات في نهائيات كأس العالم مع منتخب إيطاليا.",
    "bioEn": "Powerfully built Italian striker and one of the most lethal goalscorers of his generation, whose 1999 transfer to Inter Milan set a world record transfer fee at the time. He also played for Juventus, Atlético Madrid, Lazio and Milan, and scored regularly at FIFA World Cup finals for Italy.",
    "achievementsAr": [
      "هداف الدوري الإيطالي (سيري A) أكثر من مرة",
      "لقب كأس إيطاليا مع لاتسيو",
      "من أبرز هدافي منتخب إيطاليا في نهائيات كأس العالم",
      "صفقة قياسية عالميًا عند انتقاله إلى إنتر ميلان 1999"
    ],
    "achievementsEn": [
      "Serie A top scorer (Capocannoniere) on multiple occasions",
      "Coppa Italia title with Lazio",
      "One of Italy's leading scorers at FIFA World Cup finals",
      "World record transfer fee when he joined Inter Milan in 1999"
    ],
    "clubsHistoryAr": [
      "تورينو",
      "بيزا",
      "رافينا",
      "فينتسيا",
      "يوفنتوس",
      "أتلتيكو مدريد",
      "لاتسيو",
      "إنتر ميلان",
      "ميلان",
      "مونتيري (المكسيك)"
    ],
    "clubsHistoryEn": [
      "Torino",
      "Pisa",
      "Ravenna",
      "Venezia",
      "Juventus",
      "Atlético Madrid",
      "Lazio",
      "Inter Milan",
      "Milan",
      "Monterrey (Mexico)"
    ],
    "clubIds": [
      "torino",
      "juventus",
      "atletico-madrid",
      "lazio",
      "inter-milan",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كريستيان_فييري",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Christian_Vieri"
  },
  {
    "id": "gianfranco-zola",
    "nameAr": "جانفرانكو زولا",
    "nameEn": "Gianfranco Zola",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب / مهاجم",
      "en": "Playmaker / Forward"
    },
    "era": "1984-2005",
    "active": false,
    "bioAr": "صانع ألعاب إيطالي موهوب، لعب تحت قيادة مارادونا في نابولي قبل أن يصبح أحد أعظم لاعبي تشيلسي في تاريخه، حيث انتُخب لاحقًا 'لاعب القرن' للنادي. فاز مع بارما بكأس الاتحاد الأوروبي وكأس الكؤوس الأوروبية.",
    "bioEn": "Gifted Italian playmaker who played alongside Maradona at Napoli before becoming one of Chelsea's greatest ever players, later voted the club's 'Player of the Century'. He won the UEFA Cup and the Cup Winners' Cup with Parma.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 1989-1990 مع نابولي",
      "كأس الكؤوس الأوروبية وكأس الاتحاد الأوروبي مع بارما",
      "لقب كأس إنجلترا مرتين مع تشيلسي",
      "انتُخب 'لاعب القرن' لنادي تشيلسي"
    ],
    "achievementsEn": [
      "1989-90 Serie A title with Napoli",
      "UEFA Cup Winners' Cup and UEFA Cup with Parma",
      "FA Cup title twice with Chelsea",
      "Voted Chelsea's 'Player of the Century'"
    ],
    "clubsHistoryAr": [
      "نابولي",
      "بارما",
      "تشيلسي",
      "كالياري"
    ],
    "clubsHistoryEn": [
      "Napoli",
      "Parma",
      "Chelsea",
      "Cagliari"
    ],
    "clubIds": [
      "napoli",
      "parma",
      "chelsea",
      "cagliari"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جيانفرانكو_زولا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gianfranco_Zola"
  },
  {
    "id": "mario-kempes",
    "nameAr": "ماريو كيمبيس",
    "nameEn": "Mario Kempes",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1973-1996",
    "active": false,
    "bioAr": "مهاجم أرجنتيني وبطل كأس العالم 1978 على أرضه، حيث كان هداف البطولة وأفضل لاعب فيها. قضى معظم مسيرته الأوروبية مع فالنسيا الإسباني الذي فاز معه بكأس الكؤوس الأوروبية وكأس السوبر الأوروبي.",
    "bioEn": "Argentine striker and hero of the 1978 World Cup on home soil, where he was the tournament's top scorer and best player. He spent most of his European career at Valencia, with whom he won the UEFA Cup Winners' Cup and the UEFA Super Cup.",
    "achievementsAr": [
      "بطولة كأس العالم 1978 مع الأرجنتين",
      "هداف وأفضل لاعب في كأس العالم 1978",
      "كأس الكؤوس الأوروبية 1979-1980 مع فالنسيا",
      "كأس السوبر الأوروبي 1980 مع فالنسيا"
    ],
    "achievementsEn": [
      "1978 FIFA World Cup title with Argentina",
      "Top scorer and best player of the 1978 World Cup",
      "1979-80 UEFA Cup Winners' Cup with Valencia",
      "1980 UEFA Super Cup with Valencia"
    ],
    "clubsHistoryAr": [
      "إنستيتوتو",
      "روزاريو سنترال",
      "فالنسيا",
      "ريفر بليت",
      "هركوليس",
      "فيرست فيينا (النمسا)"
    ],
    "clubsHistoryEn": [
      "Instituto",
      "Rosario Central",
      "Valencia",
      "River Plate",
      "Hércules",
      "First Vienna (Austria)"
    ],
    "clubIds": [
      "valencia",
      "river-plate"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماريو_كيمبس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mario_Kempes"
  },
  {
    "id": "rui-costa",
    "nameAr": "روي كوستا",
    "nameEn": "Rui Costa",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder / Playmaker"
    },
    "era": "1990-2006",
    "active": false,
    "bioAr": "صانع ألعاب برتغالي يُعد من أفضل لاعبي جيله، تألق مع فيورنتينا الإيطالي قبل أن ينتقل إلى ميلان ويفوز معه بلقبي الدوري الإيطالي ودوري أبطال أوروبا. شغل لاحقًا منصب الرئيس التنفيذي لبنفيكا، ناديه الأول.",
    "bioEn": "Portuguese playmaker regarded as one of the finest of his generation, who shone at Fiorentina before moving to Milan, winning the Serie A title and the UEFA Champions League with them. He later served as CEO of Benfica, the club where he started his career.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2002-2003 مع ميلان",
      "لقب الدوري الإيطالي 2003-2004 مع ميلان",
      "كأس السوبر الأوروبي 2003 مع ميلان",
      "وصافة بطولة أمم أوروبا 2004 مع البرتغال"
    ],
    "achievementsEn": [
      "2002-03 UEFA Champions League title with Milan",
      "2003-04 Serie A title with Milan",
      "2003 UEFA Super Cup with Milan",
      "UEFA Euro 2004 runner-up with Portugal"
    ],
    "clubsHistoryAr": [
      "بنفيكا",
      "فيورنتينا",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Benfica",
      "Fiorentina",
      "Milan"
    ],
    "clubIds": [
      "benfica",
      "fiorentina",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روي_كوستا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rui_Costa"
  },
  {
    "id": "federico-chiesa",
    "nameAr": "فيديريكو كييزا",
    "nameEn": "Federico Chiesa",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "جناح إيطالي انتقل من يوفنتوس إلى ليفربول الإنجليزي صيف 2024. كان أحد أبطال إيطاليا في الفوز بلقب يورو 2020، ولعب جميع مباريات إيطاليا في تلك البطولة، كما فاز بكأس إيطاليا مرتين مع يوفنتوس.",
    "bioEn": "Italian winger who moved from Juventus to Liverpool in the summer of 2024. He was a key part of Italy's Euro 2020 title-winning squad, playing in all of Italy's matches in that tournament, and won the Coppa Italia twice with Juventus.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2020 مع إيطاليا",
      "لقب الدوري الإنجليزي الممتاز 2024-2025 مع ليفربول",
      "لقب كأس إيطاليا مرتين مع يوفنتوس",
      "كأس السوبر الإيطالي مع يوفنتوس"
    ],
    "achievementsEn": [
      "UEFA Euro 2020 title with Italy",
      "2024-25 Premier League title with Liverpool",
      "Coppa Italia title twice with Juventus",
      "Italian Super Cup with Juventus"
    ],
    "clubsHistoryAr": [
      "فيورنتينا",
      "يوفنتوس (إعارة ثم انتقال دائم)",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Fiorentina",
      "Juventus (loan then permanent)",
      "Liverpool"
    ],
    "clubIds": [
      "fiorentina",
      "juventus",
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فيديريكو_كييزا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Federico_Chiesa"
  },
  {
    "id": "ilkay-gundogan",
    "nameAr": "إلكاي غوندوغان",
    "nameEn": "İlkay Gündoğan",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "غالطة سراي",
    "clubEn": "Galatasaray",
    "clubId": "galatasaray",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "لاعب وسط ألماني من أصول تركية وأحد أعظم لاعبي مانشستر سيتي في تاريخه، حيث قاد الفريق كقائد للفوز بالثلاثية التاريخية (الدوري والكأس ودوري الأبطال) موسم 2022-2023. غادر السيتي بشكل نهائي صيف 2025 لينضم إلى غالطة سراي التركي.",
    "bioEn": "German midfielder of Turkish descent and one of Manchester City's greatest ever players, captaining the club to the historic treble (Premier League, FA Cup, Champions League) in the 2022-23 season. He left City for good in the summer of 2025 to join Turkish club Galatasaray.",
    "achievementsAr": [
      "الثلاثية التاريخية 2022-2023 مع مانشستر سيتي (بصفته قائدًا)",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "لقب الدوري الألماني 2011-2012 مع بوروسيا دورتموند",
      "نائب قائد منتخب ألمانيا سابقًا"
    ],
    "achievementsEn": [
      "2022-23 historic treble with Manchester City (as club captain)",
      "Multiple Premier League titles with Manchester City",
      "2011-12 Bundesliga title with Borussia Dortmund",
      "Former vice-captain of the Germany national team"
    ],
    "clubsHistoryAr": [
      "نورمبرغ",
      "بوروسيا دورتموند",
      "مانشستر سيتي",
      "برشلونة",
      "مانشستر سيتي",
      "غالطة سراي"
    ],
    "clubsHistoryEn": [
      "1. FC Nürnberg",
      "Borussia Dortmund",
      "Manchester City",
      "Barcelona",
      "Manchester City",
      "Galatasaray"
    ],
    "clubIds": [
      "nurnberg",
      "borussia-dortmund",
      "manchester-city",
      "barcelona",
      "galatasaray"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إلكاي_غوندوغان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ilkay_Gündoğan"
  },
  {
    "id": "paulo-dybala",
    "nameAr": "باولو ديبالا",
    "nameEn": "Paulo Dybala",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "روما",
    "clubEn": "Roma",
    "clubId": "roma",
    "position": {
      "ar": "صانع ألعاب / مهاجم",
      "en": "Attacking Midfielder / Forward"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "صانع ألعاب أرجنتيني موهوب، أمضى سنوات مؤثرة مع يوفنتوس فاز خلالها بعدة ألقاب دوري إيطالي، قبل أن ينتقل حرًا إلى روما عام 2022 ويقودها لنهائي الدوري الأوروبي في موسمه الأول معها.",
    "bioEn": "Gifted Argentine playmaker who spent influential years at Juventus, winning multiple Serie A titles, before joining Roma as a free agent in 2022 and helping them reach the UEFA Europa League final in his first season there.",
    "achievementsAr": [
      "عدة ألقاب دوري إيطالي (سيري A) مع يوفنتوس",
      "وصافة الدوري الأوروبي 2022-2023 مع روما",
      "لقب كأس إيطاليا مع يوفنتوس",
      "بطولة كوبا أمريكا 2021 مع الأرجنتين (ضمن القائمة)"
    ],
    "achievementsEn": [
      "Multiple Serie A titles with Juventus",
      "2022-23 UEFA Europa League runner-up with Roma",
      "Coppa Italia title with Juventus",
      "2021 Copa América title with Argentina (squad member)"
    ],
    "clubsHistoryAr": [
      "إنستيتوتو",
      "بالرمو",
      "يوفنتوس",
      "روما"
    ],
    "clubsHistoryEn": [
      "Instituto",
      "Palermo",
      "Juventus",
      "Roma"
    ],
    "clubIds": [
      "palermo",
      "juventus",
      "roma"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/باولو_ديبالا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paulo_Dybala"
  },
  {
    "id": "dani-carvajal",
    "nameAr": "داني كارباخال",
    "nameEn": "Dani Carvajal",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "بدون نادي",
    "clubEn": "Free agent",
    "clubId": null,
    "position": {
      "ar": "ظهير أيمن",
      "en": "Right-back"
    },
    "era": "2010-الآن",
    "active": true,
    "bioAr": "ظهير أيمن إسباني وقائد ريال مدريد السابق، غادر النادي في يوليو 2026 بعد انتهاء عقده وترك خلفه 26 لقبًا كبيرًا بحسب تقارير، من بينها ست بطولات لدوري أبطال أوروبا. ما زال لاعبًا حرًا بدون نادٍ حتى الآن.",
    "bioEn": "Spanish right-back and former Real Madrid captain who left the club in July 2026 when his contract expired, having won 26 major trophies according to reports, including six Champions League titles. He remains a free agent without a club for now.",
    "achievementsAr": [
      "ست بطولات دوري أبطال أوروبا مع ريال مدريد",
      "أربعة ألقاب دوري إسباني وكأسا ملك إسبانيا مع ريال مدريد",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "دوري الأمم الأوروبية 2023 مع إسبانيا"
    ],
    "achievementsEn": [
      "Six UEFA Champions League titles with Real Madrid",
      "Four La Liga titles and two Copa del Rey titles with Real Madrid",
      "UEFA Euro 2024 with Spain",
      "UEFA Nations League 2023 with Spain"
    ],
    "clubsHistoryAr": [
      "ريال مدريد",
      "باير ليفركوزن (إعارة)",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Real Madrid",
      "Bayer Leverkusen (loan)",
      "Real Madrid"
    ],
    "clubIds": [
      "real-madrid",
      "bayer-leverkusen"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/داني_كارفاخال",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dani_Carvajal"
  },
  {
    "id": "antonio-rudiger",
    "nameAr": "أنطونيو روديغر",
    "nameEn": "Antonio Rüdiger",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "مدافع ألماني قوي، فاز بدوري أبطال أوروبا مع تشيلسي موسم 2020-2021، قبل أن ينتقل حرًا إلى ريال مدريد عام 2022 ويحقق معه عدة ألقاب دوري إسباني ودوري أبطال أوروبا إضافية.",
    "bioEn": "Powerful German defender who won the UEFA Champions League with Chelsea in the 2020-21 season, before joining Real Madrid as a free agent in 2022 and winning further La Liga and Champions League titles with them.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2020-2021 مع تشيلسي",
      "لقب دوري أبطال أوروبا 2023-2024 مع ريال مدريد",
      "عدة ألقاب دوري إسباني مع ريال مدريد",
      "لقب كأس السوبر الأوروبي مع تشيلسي وريال مدريد"
    ],
    "achievementsEn": [
      "2020-21 UEFA Champions League title with Chelsea",
      "2023-24 UEFA Champions League title with Real Madrid",
      "Multiple La Liga titles with Real Madrid",
      "UEFA Super Cup title with both Chelsea and Real Madrid"
    ],
    "clubsHistoryAr": [
      "شتوتغارت",
      "روما",
      "تشيلسي",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "VfB Stuttgart",
      "Roma",
      "Chelsea",
      "Real Madrid"
    ],
    "clubIds": [
      "vfb-stuttgart",
      "roma",
      "chelsea",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أنطونيو_روديغر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Antonio_Rüdiger"
  },
  {
    "id": "marco-materazzi",
    "nameAr": "ماركو ماتيرازي",
    "nameEn": "Marco Materazzi",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "1990-2011",
    "active": false,
    "bioAr": "مدافع إيطالي وبطل كأس العالم 2006 مع إيطاليا، حيث سجل هدف التعادل في المباراة النهائية أمام فرنسا. قضى معظم مسيرته مع إنتر ميلان وفاز معه بالثلاثية التاريخية موسم 2009-2010.",
    "bioEn": "Italian defender and 2006 World Cup winner with Italy, having scored the equalizing goal in the final against France. He spent most of his career at Inter Milan, winning the historic treble with them in the 2009-10 season.",
    "achievementsAr": [
      "بطولة كأس العالم 2006 مع إيطاليا (سجل هدفًا في النهائي أمام فرنسا)",
      "الثلاثية التاريخية 2009-2010 مع إنتر ميلان (الدوري والكأس ودوري الأبطال)",
      "عدة ألقاب دوري إيطالي مع إنتر ميلان",
      "لقب كأس إيطاليا عدة مرات مع إنتر ميلان"
    ],
    "achievementsEn": [
      "2006 FIFA World Cup title with Italy (scored in the final against France)",
      "2009-10 historic treble with Inter Milan (Serie A, Coppa Italia, Champions League)",
      "Multiple Serie A titles with Inter Milan",
      "Coppa Italia title multiple times with Inter Milan"
    ],
    "clubsHistoryAr": [
      "ميسينا",
      "بيروجيا",
      "فيرونا",
      "بيروجيا",
      "إيفرتون",
      "بيروجيا",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Messina",
      "Perugia",
      "Verona",
      "Perugia",
      "Everton",
      "Perugia",
      "Inter Milan"
    ],
    "clubIds": [
      "hellas-verona",
      "everton",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماركو_ماتيرازي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marco_Materazzi"
  },
  {
    "id": "deco",
    "nameAr": "ديكو",
    "nameEn": "Deco",
    "nationalityAr": "برتغالي (من مواليد البرازيل)",
    "nationalityEn": "Portuguese (Brazilian-born)",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder / Playmaker"
    },
    "era": "1994-2010",
    "active": false,
    "bioAr": "صانع ألعاب برازيلي المولد اختار تمثيل البرتغال دوليًا، تألق مع بورتو تحت قيادة جوزيه مورينيو وفاز معه بدوري أبطال أوروبا موسم 2003-2004، قبل أن ينتقل إلى برشلونة ويحقق معه لقب دوري الأبطال مجددًا موسم 2005-2006. شغل لاحقًا منصب مدير كرة القدم في برشلونة.",
    "bioEn": "Brazilian-born playmaker who chose to represent Portugal internationally, shining at Porto under José Mourinho and winning the UEFA Champions League with them in the 2003-04 season, before moving to Barcelona and winning the Champions League again in 2005-06. He later served as Barcelona's football director.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2003-2004 مع بورتو",
      "لقب دوري أبطال أوروبا 2005-2006 مع برشلونة",
      "الكرة الذهبية الأوروبية 2004",
      "لقب الدوري الإسباني مرتين مع برشلونة"
    ],
    "achievementsEn": [
      "2003-04 UEFA Champions League title with Porto",
      "2005-06 UEFA Champions League title with Barcelona",
      "2004 Ballon d'Or runner-up honours / UEFA Club Footballer of the Year",
      "Two La Liga titles with Barcelona"
    ],
    "clubsHistoryAr": [
      "كورينثيانز (البرازيل)",
      "بينفيكا",
      "أليانسا (البرتغال)",
      "سالغيروش (إعارة)",
      "بورتو",
      "برشلونة",
      "تشيلسي",
      "فلومينينسي"
    ],
    "clubsHistoryEn": [
      "Corinthians (Brazil)",
      "Benfica",
      "Alverca (loan)",
      "Salgueiros (loan)",
      "Porto",
      "Barcelona",
      "Chelsea",
      "Fluminense"
    ],
    "clubIds": [
      "corinthians",
      "benfica",
      "porto",
      "barcelona",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ديكو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Deco"
  },
  {
    "id": "rivelino",
    "nameAr": "ريفيلينو",
    "nameEn": "Rivellino",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "جناح أيسر / صانع ألعاب",
      "en": "Left Winger / Playmaker"
    },
    "era": "1965-1981",
    "active": false,
    "bioAr": "أسطورة برازيلية اشتهر بركلاته الحرة القوية وحركته الخداعية المعروفة بـ'إلاستيكو'، كان جزءًا أساسيًا من منتخب البرازيل الذي فاز بكأس العالم 1970، ولعب لاحقًا في السعودية مع نادي الهلال.",
    "bioEn": "Brazilian legend renowned for his powerful free kicks and the deceptive move known as the 'elástico', he was a key member of the Brazil side that won the 1970 World Cup, and later played in Saudi Arabia for Al-Hilal.",
    "achievementsAr": [
      "بطولة كأس العالم 1970 مع البرازيل",
      "لقب بطولة ولاية ريو دي جانيرو (الكاريوكا) مع فلومينينسي 1975 و1976",
      "يُعتبر مبتكر حركة 'إلاستيكو' الشهيرة",
      "شارك في 3 نهائيات كأس عالم مع البرازيل (1970، 1974، 1978)"
    ],
    "achievementsEn": [
      "1970 FIFA World Cup title with Brazil",
      "Campeonato Carioca titles with Fluminense (1975 and 1976)",
      "Widely credited as the originator of the 'elástico' move",
      "Played in three World Cup finals tournaments with Brazil (1970, 1974, 1978)"
    ],
    "clubsHistoryAr": [
      "كورينثيانز",
      "فلومينينسي",
      "الهلال (السعودية)"
    ],
    "clubsHistoryEn": [
      "Corinthians",
      "Fluminense",
      "Al-Hilal (Saudi Arabia)"
    ],
    "clubIds": [
      "corinthians"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ريفيلينو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rivellino"
  },
  {
    "id": "mike-maignan",
    "nameAr": "مايك مينيان",
    "nameEn": "Mike Maignan",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ميلان",
    "clubEn": "AC Milan",
    "clubId": "ac-milan",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "حارس مرمى فرنسي وقائد نادي ميلان، خلف جانلويجي دوناروما في حراسة مرمى الروسونيري عام 2021 وساهم في فوز الفريق بلقب الدوري الإيطالي موسم 2021-2022. جدد عقده مع ميلان حتى عام 2031، وهو الحارس الأساسي لمنتخب فرنسا.",
    "bioEn": "French goalkeeper and captain of AC Milan, who succeeded Gianluigi Donnarumma between the posts for the Rossoneri in 2021 and helped the club win the Serie A title in the 2021-22 season. He extended his contract with Milan until 2031 and is the first-choice goalkeeper for the France national team.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 2021-2022 مع ميلان",
      "أفضل حارس مرمى في الدوري الإيطالي موسم 2021-2022",
      "كأس السوبر الإيطالي 2024 مع ميلان",
      "لقب دوري الأمم الأوروبية 2021 مع فرنسا"
    ],
    "achievementsEn": [
      "2021-22 Serie A title with AC Milan",
      "Serie A Goalkeeper of the Season 2021-22",
      "2024 Italian Super Cup with AC Milan",
      "2021 UEFA Nations League title with France"
    ],
    "clubsHistoryAr": [
      "باريس سان جيرمان",
      "ليل",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Paris Saint-Germain",
      "Lille",
      "AC Milan"
    ],
    "clubIds": [
      "paris-saint-germain",
      "lille",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مايك_مينيان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mike_Maignan"
  },
  {
    "id": "theo-hernandez",
    "nameAr": "ثيو هيرنانديز",
    "nameEn": "Theo Hernández",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "الهلال (السعودية)",
    "clubEn": "Al-Hilal (Saudi Arabia)",
    "clubId": null,
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "ظهير أيسر فرنسي أمضى ست مواسم مؤثرة مع ميلان الإيطالي وتفوّق على رقم الأسطورة باولو مالديني للأهداف كمدافع، فاز خلالها بلقب الدوري الإيطالي وكأس السوبر، قبل أن ينتقل صيف 2025 إلى الهلال السعودي.",
    "bioEn": "French left-back who spent six influential seasons at AC Milan, surpassing club legend Paolo Maldini's goalscoring tally as a defender, winning the Serie A title and the Italian Super Cup, before moving to Saudi club Al-Hilal in the summer of 2025.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 2021-2022 مع ميلان",
      "كأس السوبر الإيطالي مع ميلان",
      "تجاوز الرقم القياسي التاريخي لباولو مالديني كأكثر مدافع تسجيلاً لأهداف مع ميلان",
      "لقب دوري الأمم الأوروبية 2021 مع فرنسا"
    ],
    "achievementsEn": [
      "2021-22 Serie A title with AC Milan",
      "Italian Super Cup with AC Milan",
      "Surpassed Paolo Maldini's historic tally as Milan's top-scoring defender",
      "2021 UEFA Nations League title with France"
    ],
    "clubsHistoryAr": [
      "أتلتيكو مدريد",
      "ديبورتيفو ألافيس (إعارة)",
      "ريال مدريد",
      "ريال سوسيداد (إعارة)",
      "ميلان",
      "الهلال"
    ],
    "clubsHistoryEn": [
      "Atlético Madrid",
      "Deportivo Alavés (loan)",
      "Real Madrid",
      "Real Sociedad (loan)",
      "AC Milan",
      "Al-Hilal"
    ],
    "clubIds": [
      "atletico-madrid",
      "alaves",
      "real-madrid",
      "real-sociedad",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ثيو_هيرنانديز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Theo_Hernández"
  },
  {
    "id": "gary-neville",
    "nameAr": "غاري نيفيل",
    "nameEn": "Gary Neville",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "ظهير أيمن",
      "en": "Right-back"
    },
    "era": "1992-2011",
    "active": false,
    "bioAr": "ظهير أيمن إنجليزي وأحد أبطال 'جيل 92' في مانشستر يونايتد، قضى مسيرته بأكملها مع النادي وقاده كقائد لسنوات، فاز معه بالثلاثية التاريخية 1998-1999 وعدة ألقاب دوري إنجليزي ممتاز. أصبح لاحقًا من أبرز المحللين الرياضيين في إنجلترا.",
    "bioEn": "English right-back and one of Manchester United's famous 'Class of '92', he spent his entire career at the club and captained it for years, winning the historic 1998-99 treble and multiple Premier League titles. He later became one of England's most prominent football pundits.",
    "achievementsAr": [
      "الثلاثية التاريخية 1998-1999 مع مانشستر يونايتد (الدوري والكأس ودوري الأبطال)",
      "لقب دوري أبطال أوروبا 2007-2008 مع مانشستر يونايتد",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "أكثر من 400 مباراة في الدوري الإنجليزي الممتاز مع مانشستر يونايتد"
    ],
    "achievementsEn": [
      "1998-99 historic treble with Manchester United (Premier League, FA Cup, Champions League)",
      "2007-08 UEFA Champions League title with Manchester United",
      "Multiple Premier League titles with Manchester United",
      "Over 400 Premier League appearances for Manchester United"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Manchester United"
    ],
    "clubIds": [
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غاري_نيفيل",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gary_Neville"
  },
  {
    "id": "ashley-cole",
    "nameAr": "أشلي كول",
    "nameEn": "Ashley Cole",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "1998-2019",
    "active": false,
    "bioAr": "ظهير أيسر إنجليزي يُعد أحد أفضل من لعب في مركزه في تاريخ الدوري الإنجليزي، فاز بألقاب عديدة مع آرسنال ثم تشيلسي، من بينها لقب دوري أبطال أوروبا 2011-2012 مع تشيلسي.",
    "bioEn": "English left-back regarded as one of the finest to ever play in his position in Premier League history, winning numerous titles with Arsenal and then Chelsea, including the 2011-12 UEFA Champions League with Chelsea.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2011-2012 مع تشيلسي",
      "لقب الدوري الإنجليزي الممتاز 'الإنفينسيبلز' 2003-2004 مع آرسنال دون خسارة",
      "لقب كأس إنجلترا عدة مرات (رقم قياسي مشترك) مع آرسنال وتشيلسي",
      "أكثر من 100 مباراة دولية مع منتخب إنجلترا"
    ],
    "achievementsEn": [
      "2011-12 UEFA Champions League title with Chelsea",
      "2003-04 'Invincibles' Premier League title with Arsenal, unbeaten all season",
      "FA Cup title multiple times (joint record) with Arsenal and Chelsea",
      "Over 100 caps for the England national team"
    ],
    "clubsHistoryAr": [
      "آرسنال",
      "كريستال بالاس (إعارة)",
      "تشيلسي",
      "روما",
      "لوس أنجلوس غالاكسي",
      "ديربي كاونتي"
    ],
    "clubsHistoryEn": [
      "Arsenal",
      "Crystal Palace (loan)",
      "Chelsea",
      "Roma",
      "LA Galaxy",
      "Derby County"
    ],
    "clubIds": [
      "arsenal",
      "crystal-palace",
      "chelsea",
      "roma",
      "derby-county"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أشلي_كول",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ashley_Cole"
  },
  {
    "id": "fernando-hierro",
    "nameAr": "فرناندو هييرو",
    "nameEn": "Fernando Hierro",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "1985-2003",
    "active": false,
    "bioAr": "مدافع إسباني وقائد سابق لريال مدريد، يُعد أحد أعظم من لعب لصالح النادي بفضل قوته الدفاعية وقدرته على تسجيل الأهداف من الكرات الثابتة. فاز مع ريال مدريد بعدة ألقاب دوري أبطال أوروبا ودوري إسباني.",
    "bioEn": "Spanish defender and former Real Madrid captain, regarded as one of the greatest players in the club's history for his defensive strength and ability to score from set-pieces. He won multiple UEFA Champions League and La Liga titles with Real Madrid.",
    "achievementsAr": [
      "ثلاثة ألقاب دوري أبطال أوروبا مع ريال مدريد (1997-1998، 1999-2000، 2001-2002)",
      "عدة ألقاب دوري إسباني مع ريال مدريد",
      "هداف ريال مدريد التاريخي بين المدافعين",
      "قائد سابق لمنتخب إسبانيا"
    ],
    "achievementsEn": [
      "Three UEFA Champions League titles with Real Madrid (1997-98, 1999-2000, 2001-02)",
      "Multiple La Liga titles with Real Madrid",
      "Real Madrid's all-time top-scoring defender",
      "Former captain of the Spain national team"
    ],
    "clubsHistoryAr": [
      "ريال بايادوليد",
      "ريال مدريد",
      "القادسية (قطر)",
      "بولتون واندررز"
    ],
    "clubsHistoryEn": [
      "Real Valladolid",
      "Real Madrid",
      "Al-Qadisiyah (Qatar)",
      "Bolton Wanderers"
    ],
    "clubIds": [
      "real-valladolid",
      "real-madrid",
      "bolton-wanderers"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فرناندو_هييرو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Fernando_Hierro"
  },
  {
    "id": "gigi-riva",
    "nameAr": "جيجي ريفا",
    "nameEn": "Gigi Riva",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1963-1976",
    "active": false,
    "bioAr": "مهاجم إيطالي وهداف منتخب إيطاليا التاريخي، قضى مسيرته بأكملها مع نادي كالياري الذي قاده للقب الدوري الإيطالي الوحيد في تاريخه موسم 1969-1970، وفاز مع إيطاليا ببطولة أمم أوروبا 1968.",
    "bioEn": "Italian forward and his country's all-time leading goalscorer, who spent his entire career at Cagliari, leading them to their only Serie A title in the 1969-70 season, and won the UEFA European Championship with Italy in 1968.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 1969-1970 مع كالياري (اللقب الوحيد لتاريخ النادي)",
      "بطولة أمم أوروبا 1968 مع إيطاليا",
      "وصافة كأس العالم 1970 مع إيطاليا",
      "هداف منتخب إيطاليا التاريخي لعقود طويلة"
    ],
    "achievementsEn": [
      "1969-70 Serie A title with Cagliari (the club's only ever league title)",
      "UEFA European Championship 1968 with Italy",
      "1970 FIFA World Cup runner-up with Italy",
      "Italy's all-time top goalscorer for decades"
    ],
    "clubsHistoryAr": [
      "ليجناغو",
      "كالياري"
    ],
    "clubsHistoryEn": [
      "Legnago",
      "Cagliari"
    ],
    "clubIds": [
      "cagliari"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لويجي_ريفا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gigi_Riva"
  },
  {
    "id": "nuno-mendes",
    "nameAr": "نونو مينديز",
    "nameEn": "Nuno Mendes",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "ظهير أيسر برتغالي انضم إلى باريس سان جيرمان قادمًا من سبورتينغ لشبونة عام 2021، وأصبح أحد ركائز الفريق الذي فاز بلقب دوري أبطال أوروبا موسم 2024-2025 لأول مرة في تاريخ النادي.",
    "bioEn": "Portuguese left-back who joined Paris Saint-Germain from Sporting Lisbon in 2021, becoming a key pillar of the side that won the club's first-ever UEFA Champions League title in the 2024-25 season.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان (أول لقب في تاريخ النادي)",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان",
      "لقب كأس فرنسا عدة مرات مع باريس سان جيرمان",
      "لقب الدوري البرتغالي 2020-2021 مع سبورتينغ لشبونة"
    ],
    "achievementsEn": [
      "2024-25 UEFA Champions League title with Paris Saint-Germain (the club's first ever)",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "Coupe de France title multiple times with Paris Saint-Germain",
      "2020-21 Primeira Liga title with Sporting Lisbon"
    ],
    "clubsHistoryAr": [
      "سبورتينغ لشبونة",
      "باريس سان جيرمان (إعارة ثم انتقال دائم)"
    ],
    "clubsHistoryEn": [
      "Sporting Lisbon",
      "Paris Saint-Germain (loan then permanent)"
    ],
    "clubIds": [
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/نونو_مينديش_(لاعب_كرة_قدم_مواليد_2002)",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Nuno_Mendes_(footballer,_born_2002)"
  },
  {
    "id": "marcus-thuram",
    "nameAr": "ماركوس تورام",
    "nameEn": "Marcus Thuram",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "إنتر ميلان",
    "clubEn": "Inter Milan",
    "clubId": "inter-milan",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مهاجم فرنسي ونجل بطل كأس العالم 1998 ليليان تورام، انضم إلى إنتر ميلان حرًا عام 2023 وشكّل مع لاوتارو مارتينيز ثنائيًا هجوميًا فعّالاً، وصل معه إلى نهائي دوري أبطال أوروبا 2023 ونهائي كأس العالم 2022 مع منتخب فرنسا.",
    "bioEn": "French striker and son of 1998 World Cup winner Lilian Thuram, he joined Inter Milan as a free agent in 2023, forming an effective attacking duo with Lautaro Martínez, reaching the 2023 UEFA Champions League final with them and the 2022 FIFA World Cup final with France.",
    "achievementsAr": [
      "وصافة كأس العالم 2022 مع فرنسا",
      "وصافة دوري أبطال أوروبا 2022-2023 مع إنتر ميلان",
      "لقب الدوري الإيطالي 2023-2024 مع إنتر ميلان",
      "بطولة أمم أوروبا تحت 19 عامًا 2016 مع فرنسا"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup runner-up with France",
      "2022-23 UEFA Champions League runner-up with Inter Milan",
      "2023-24 Serie A title with Inter Milan",
      "UEFA European Under-19 Championship 2016 with France"
    ],
    "clubsHistoryAr": [
      "سوشو",
      "غانغان",
      "بوروسيا مونشنغلادباخ",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Sochaux",
      "Guingamp",
      "Borussia Mönchengladbach",
      "Inter Milan"
    ],
    "clubIds": [
      "sochaux",
      "borussia-monchengladbach",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماركوس_تورام",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marcus_Thuram"
  },
  {
    "id": "christian-pulisic",
    "nameAr": "كريستيان بوليسيتش",
    "nameEn": "Christian Pulisic",
    "nationalityAr": "أمريكي",
    "nationalityEn": "American",
    "clubAr": "ميلان",
    "clubEn": "AC Milan",
    "clubId": "ac-milan",
    "position": {
      "ar": "جناح / صانع ألعاب",
      "en": "Winger / Attacking Midfielder"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "لاعب أمريكي يُلقب بـ'كابتن أمريكا' ويُعد أحد أفضل لاعبي كرة القدم في تاريخ الولايات المتحدة. فاز بدوري أبطال أوروبا مع تشيلسي موسم 2020-2021، وانتقل إلى ميلان الإيطالي عام 2023 حيث أصبح لاعبًا أساسيًا ومحوريًا في هجوم الفريق.",
    "bioEn": "American player nicknamed 'Captain America' and regarded as one of the greatest players in United States football history. He won the UEFA Champions League with Chelsea in the 2020-21 season, before moving to AC Milan in 2023, where he has become a key and central attacking player.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2020-2021 مع تشيلسي",
      "لقب كأس العالم للأندية 2021 مع تشيلسي",
      "ثلاثة ألقاب دوري الأمم الأمريكية الشمالية (كونكاكاف) مع منتخب الولايات المتحدة (2021، 2023، 2024)",
      "هداف تاريخي لمنتخب الولايات المتحدة"
    ],
    "achievementsEn": [
      "2020-21 UEFA Champions League title with Chelsea",
      "2021 FIFA Club World Cup title with Chelsea",
      "Three CONCACAF Nations League titles with the United States (2021, 2023, 2024)",
      "One of the United States national team's all-time leading scorers"
    ],
    "clubsHistoryAr": [
      "بوروسيا دورتموند",
      "تشيلسي",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Borussia Dortmund",
      "Chelsea",
      "AC Milan"
    ],
    "clubIds": [
      "borussia-dortmund",
      "chelsea",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كريستيان_بوليسيتش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Christian_Pulisic"
  },
  {
    "id": "viktor-gyokeres",
    "nameAr": "فيكتور غيوكيريش",
    "nameEn": "Viktor Gyökeres",
    "nationalityAr": "سويدي",
    "nationalityEn": "Swedish",
    "clubAr": "آرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مهاجم سويدي فرض نفسه هدافًا غزير التسجيل مع سبورتينغ لشبونة البرتغالي، حيث فاز بلقبي الدوري البرتغالي معه، قبل أن ينتقل إلى آرسنال الإنجليزي صيف 2025 بعقد طويل الأمد.",
    "bioEn": "Swedish striker who established himself as a prolific goalscorer at Sporting Lisbon, winning two Primeira Liga titles with them, before moving to Arsenal in the summer of 2025 on a long-term contract.",
    "achievementsAr": [
      "لقبا الدوري البرتغالي (2023-2024 و2024-2025) مع سبورتينغ لشبونة",
      "هداف الدوري البرتغالي عدة مرات",
      "لقب كأس السوبر البرتغالي مع سبورتينغ لشبونة",
      "أحد أعلى اللاعبين تسجيلاً للأهداف في أوروبا خلال موسم 2024-2025"
    ],
    "achievementsEn": [
      "Two Primeira Liga titles (2023-24 and 2024-25) with Sporting Lisbon",
      "Portuguese league top scorer multiple times",
      "Portuguese Super Cup title with Sporting Lisbon",
      "Among Europe's top goalscorers during the 2024-25 season"
    ],
    "clubsHistoryAr": [
      "برومابويكارنا",
      "برايتون",
      "سانت باولي (إعارة)",
      "سوانزي سيتي (إعارة)",
      "كوفنتري سيتي",
      "سبورتينغ لشبونة",
      "آرسنال"
    ],
    "clubsHistoryEn": [
      "Brommapojkarna",
      "Brighton & Hove Albion",
      "St. Pauli (loan)",
      "Swansea City (loan)",
      "Coventry City",
      "Sporting Lisbon",
      "Arsenal"
    ],
    "clubIds": [
      "brighton-hove-albion",
      "st-pauli",
      "swansea-city",
      "coventry-city",
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فكتور_غيوكيريس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Viktor_Gyökeres"
  },
  {
    "id": "sami-khedira",
    "nameAr": "سامي خضيرة",
    "nameEn": "Sami Khedira",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2006-2021",
    "active": false,
    "bioAr": "لاعب وسط ألماني من أصول تونسية، بطل كأس العالم 2014 مع ألمانيا، لعب لسنوات مؤثرة مع ريال مدريد وفاز معه بدوري أبطال أوروبا، ثم انتقل إلى يوفنتوس الإيطالي وحقق معه عدة ألقاب دوري إيطالي.",
    "bioEn": "German midfielder of Tunisian descent, a 2014 World Cup winner with Germany, who spent influential years at Real Madrid winning the UEFA Champions League with them, before moving to Juventus and winning multiple Serie A titles.",
    "achievementsAr": [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "لقب دوري أبطال أوروبا 2013-2014 مع ريال مدريد",
      "عدة ألقاب دوري إيطالي مع يوفنتوس",
      "لقب الدوري الإسباني مع ريال مدريد"
    ],
    "achievementsEn": [
      "2014 FIFA World Cup title with Germany",
      "2013-14 UEFA Champions League title with Real Madrid",
      "Multiple Serie A titles with Juventus",
      "La Liga title with Real Madrid"
    ],
    "clubsHistoryAr": [
      "شتوتغارت",
      "ريال مدريد",
      "يوفنتوس",
      "هيرتا برلين"
    ],
    "clubsHistoryEn": [
      "VfB Stuttgart",
      "Real Madrid",
      "Juventus",
      "Hertha Berlin"
    ],
    "clubIds": [
      "vfb-stuttgart",
      "real-madrid",
      "juventus",
      "hertha-berlin"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سامي_خضيرة",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sami_Khedira"
  },
  {
    "id": "bebeto",
    "nameAr": "بيبيتو",
    "nameEn": "Bebeto",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1983-2000",
    "active": false,
    "bioAr": "مهاجم برازيلي وبطل كأس العالم 1994، اشتهر باحتفاله المميز بتهديج طفل بعد تسجيله في تلك البطولة تكريمًا لابنه المولود حديثًا. شكّل مع روماريو ثنائيًا هجوميًا فتاكًا قاد البرازيل للتتويج بكأس العالم في الولايات المتحدة.",
    "bioEn": "Brazilian striker and 1994 World Cup winner, famed for his distinctive 'rocking the baby' goal celebration during that tournament in honor of his newborn son. He formed a lethal attacking partnership with Romário that led Brazil to the World Cup title in the United States.",
    "achievementsAr": [
      "بطولة كأس العالم 1994 مع البرازيل",
      "لقب كوبا أمريكا 1989 مع البرازيل",
      "لقب الدوري البرازيلي مع فلامنغو",
      "هداف الدوري الإسباني مع ديبورتيفو لاكورونيا"
    ],
    "achievementsEn": [
      "1994 FIFA World Cup title with Brazil",
      "1989 Copa América title with Brazil",
      "Brazilian league title with Flamengo",
      "La Liga top scorer with Deportivo La Coruña"
    ],
    "clubsHistoryAr": [
      "فلومينينسي",
      "فلامنغو",
      "ديبورتيفو لاكورونيا",
      "سيفيا",
      "فيتوريا (البرازيل)"
    ],
    "clubsHistoryEn": [
      "Fluminense",
      "Flamengo",
      "Deportivo La Coruña",
      "Sevilla",
      "Vitória (Brazil)"
    ],
    "clubIds": [
      "flamengo",
      "deportivo-la-coruna",
      "sevilla"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بيبيتو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bebeto"
  },
  {
    "id": "taffarel",
    "nameAr": "تافاريل",
    "nameEn": "Taffarel",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1984-2003",
    "active": false,
    "bioAr": "حارس مرمى برازيلي يُعد أحد أعظم حراس المرمى في تاريخ البرازيل، كان حارسًا أساسيًا في الفوز بكأس العالم 1994 وشارك في نهائي كأس العالم 1998، ولعب لسنوات مع الإنتر الإيطالي.",
    "bioEn": "Brazilian goalkeeper regarded as one of the greatest in his country's history, he was the first-choice goalkeeper in Brazil's 1994 World Cup triumph and played in the 1998 World Cup final, and spent years playing for Inter Milan in Italy.",
    "achievementsAr": [
      "بطولة كأس العالم 1994 مع البرازيل",
      "وصافة كأس العالم 1998 مع البرازيل",
      "لقب كوبا أمريكا مرتين مع البرازيل (1989 و1997)",
      "شارك في أربع نهائيات كأس عالم متتالية مع البرازيل (1990-2002)"
    ],
    "achievementsEn": [
      "1994 FIFA World Cup title with Brazil",
      "1998 FIFA World Cup runner-up with Brazil",
      "Copa América title twice with Brazil (1989 and 1997)",
      "Part of Brazil's squad at four consecutive World Cups (1990-2002)"
    ],
    "clubsHistoryAr": [
      "إنترناسيونال",
      "غريميو",
      "إنتر ميلان",
      "أتلتيكو مينيرو",
      "غالاتاسراي"
    ],
    "clubsHistoryEn": [
      "Internacional",
      "Grêmio",
      "Inter Milan",
      "Atlético Mineiro",
      "Galatasaray"
    ],
    "clubIds": [
      "inter-milan",
      "galatasaray"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كلاوديو_تافاريل",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Taffarel"
  },
  {
    "id": "hakan-calhanoglu",
    "nameAr": "هاكان تشالهان أوغلو",
    "nameEn": "Hakan Çalhanoğlu",
    "nationalityAr": "تركي",
    "nationalityEn": "Turkish",
    "clubAr": "إنتر ميلان",
    "clubEn": "Inter Milan",
    "clubId": "inter-milan",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "لاعب وسط تركي وقائد منتخب بلاده، وُلد في ألمانيا واختار تمثيل تركيا دوليًا. لعب لباير ليفركوزن وميلان قبل أن ينتقل لغريمه إنتر ميلان عام 2021، ليصبح أحد أهم صناع الألعاب في الدوري الإيطالي ويحقق معه عدة ألقاب دوري.",
    "bioEn": "Turkish midfielder and captain of his national team, born in Germany but chose to represent Turkey internationally. He played for Bayer Leverkusen and Milan before moving to rivals Inter Milan in 2021, becoming one of Serie A's most important playmakers and winning multiple league titles with the club.",
    "achievementsAr": [
      "عدة ألقاب دوري إيطالي (سيري A) مع إنتر ميلان",
      "قائد منتخب تركيا",
      "وصافة دوري أبطال أوروبا 2022-2023 مع إنتر ميلان",
      "لقب كأس إيطاليا مع إنتر ميلان"
    ],
    "achievementsEn": [
      "Multiple Serie A titles with Inter Milan",
      "Captain of the Turkey national team",
      "2022-23 UEFA Champions League runner-up with Inter Milan",
      "Coppa Italia title with Inter Milan"
    ],
    "clubsHistoryAr": [
      "هامبورغ",
      "باير ليفركوزن",
      "ميلان",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Hamburger SV",
      "Bayer Leverkusen",
      "AC Milan",
      "Inter Milan"
    ],
    "clubIds": [
      "hamburger-sv",
      "bayer-leverkusen",
      "ac-milan",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/خاقان_جال_خان_أوغلي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hakan_Çalhanoğlu"
  },
  {
    "id": "florian-wirtz",
    "nameAr": "فلوريان فيرتس",
    "nameEn": "Florian Wirtz",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "صانع ألعاب ألماني كان النجم الأبرز في تتويج باير ليفركوزن بلقب الدوري الألماني موسم 2023-2024 دون خسارة أي مباراة، وهو أصغر هداف في تاريخ البوندسليغا. انتقل إلى ليفربول صيف 2025 في صفقة قياسية بريطانية بقيمة 116.5 مليون جنيه إسترليني.",
    "bioEn": "German playmaker who was the standout star in Bayer Leverkusen's unbeaten 2023-24 Bundesliga title-winning season, and is the youngest-ever Bundesliga goalscorer. He moved to Liverpool in summer 2025 in a British transfer record deal worth £116.5 million.",
    "achievementsAr": [
      "لقب الدوري الألماني 2023-2024 مع باير ليفركوزن (موسم بلا خسارة)",
      "لقب كأس ألمانيا (الثنائية المحلية) 2023-2024 مع باير ليفركوزن",
      "أصغر هداف في تاريخ الدوري الألماني (البوندسليغا)",
      "أفضل لاعب في الدوري الألماني موسمين متتاليين"
    ],
    "achievementsEn": [
      "2023-24 Bundesliga title with Bayer Leverkusen (unbeaten season)",
      "2023-24 DFB-Pokal (domestic double) with Bayer Leverkusen",
      "Youngest-ever goalscorer in Bundesliga history",
      "Bundesliga Players' Player of the Year for two consecutive seasons"
    ],
    "clubsHistoryAr": [
      "كولن",
      "باير ليفركوزن",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "1. FC Köln",
      "Bayer Leverkusen",
      "Liverpool"
    ],
    "clubIds": [
      "koln",
      "bayer-leverkusen",
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فلوريان_فيرتز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Florian_Wirtz"
  },
  {
    "id": "jamal-musiala",
    "nameAr": "جمال موسيالا",
    "nameEn": "Jamal Musiala",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بايرن ميونخ",
    "clubEn": "Bayern Munich",
    "clubId": "bayern-munich",
    "position": {
      "ar": "صانع ألعاب",
      "en": "Attacking Midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "صانع ألعاب ألماني وُلد لأب نيجيري وأم ألمانية وترعرع في إنجلترا، خرّيج أكاديمية تشيلسي قبل أن ينتقل لبايرن ميونخ عام 2019 ويصبح أحد أهم نجومه، وسجل هدف الحسم في تتويج بايرن بلقب الدوري الألماني موسم 2021-2022.",
    "bioEn": "German playmaker, born to a Nigerian father and German mother and raised in England. A Chelsea academy graduate, he moved to Bayern Munich in 2019 and became one of the club's most important stars, scoring the title-clinching goal in the 2021-22 Bundesliga triumph.",
    "achievementsAr": [
      "عدة ألقاب دوري ألماني (بوندسليغا) مع بايرن ميونخ",
      "سجل هدف حسم لقب البوندسليغا موسم 2021-2022 أمام بوروسيا دورتموند",
      "جائزة أفضل لاعب شاب في الدوري الألماني",
      "أصغر هداف لبايرن ميونخ في تاريخ دوري أبطال أوروبا"
    ],
    "achievementsEn": [
      "Multiple Bundesliga titles with Bayern Munich",
      "Scored the title-clinching goal in the 2021-22 Bundesliga season against Borussia Dortmund",
      "Bundesliga Young Player of the Season award",
      "Bayern Munich's youngest-ever UEFA Champions League goalscorer"
    ],
    "clubsHistoryAr": [
      "تشيلسي",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Chelsea",
      "Bayern Munich"
    ],
    "clubIds": [
      "chelsea",
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جمال_موسيالا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jamal_Musiala"
  },
  {
    "id": "bobby-moore",
    "nameAr": "بوبي مور",
    "nameEn": "Bobby Moore",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "فولهام (معتزل)",
    "clubEn": "Fulham (retired)",
    "clubId": "fulham",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1958-1978",
    "active": false,
    "bioAr": "أسطورة إنجليزية وقائد منتخب بلاده الذي توّج بكأس العالم 1966 على أرضه، ويُعتبر أحد أعظم المدافعين في تاريخ اللعبة. قضى الجزء الأكبر من مسيرته مع نادي وست هام يونايتد. توفي عام 1993.",
    "bioEn": "English legend and captain of the national team that won the 1966 FIFA World Cup on home soil, widely regarded as one of the greatest defenders in the history of the game. He spent the bulk of his career with West Ham United. He passed away in 1993.",
    "achievementsAr": [
      "بطولة كأس العالم 1966 مع إنجلترا (قائدًا)",
      "لقب كأس الاتحاد الإنجليزي 1964 مع وست هام يونايتد",
      "لقب كأس الكؤوس الأوروبية 1965 مع وست هام يونايتد",
      "جائزة أفضل لاعب في إنجلترا (FWA) عام 1964"
    ],
    "achievementsEn": [
      "1966 FIFA World Cup title with England (as captain)",
      "FA Cup title 1964 with West Ham United",
      "European Cup Winners' Cup title 1965 with West Ham United",
      "FWA Footballer of the Year 1964"
    ],
    "clubsHistoryAr": [
      "وست هام يونايتد",
      "فولهام"
    ],
    "clubsHistoryEn": [
      "West Ham United",
      "Fulham"
    ],
    "clubIds": [
      "west-ham-united",
      "fulham"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بوبي_مور",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bobby_Moore"
  },
  {
    "id": "geoff-hurst",
    "nameAr": "جيف هيرست",
    "nameEn": "Geoff Hurst",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "وست بروميتش ألبيون (معتزل)",
    "clubEn": "West Bromwich Albion (retired)",
    "clubId": "west-bromwich-albion",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1959-1976",
    "active": false,
    "bioAr": "مهاجم إنجليزي سابق وأول لاعب في التاريخ يسجل هاتريك في نهائي كأس العالم، وذلك في فوز إنجلترا 4-2 على ألمانيا الغربية في نهائي 1966. قضى معظم مسيرته مع وست هام يونايتد.",
    "bioEn": "Former English forward and the first player in history to score a hat-trick in a World Cup final, in England's 4–2 win over West Germany in the 1966 final. He spent most of his career with West Ham United.",
    "achievementsAr": [
      "بطولة كأس العالم 1966 مع إنجلترا",
      "هاتريك تاريخي في نهائي كأس العالم 1966",
      "لقب كأس الاتحاد الإنجليزي 1964 مع وست هام يونايتد",
      "لقب كأس الكؤوس الأوروبية 1965 مع وست هام يونايتد"
    ],
    "achievementsEn": [
      "1966 FIFA World Cup title with England",
      "Historic hat-trick in the 1966 World Cup final",
      "FA Cup title 1964 with West Ham United",
      "European Cup Winners' Cup title 1965 with West Ham United"
    ],
    "clubsHistoryAr": [
      "وست هام يونايتد",
      "ستوك سيتي",
      "وست بروميتش ألبيون"
    ],
    "clubsHistoryEn": [
      "West Ham United",
      "Stoke City",
      "West Bromwich Albion"
    ],
    "clubIds": [
      "west-ham-united",
      "stoke-city",
      "west-bromwich-albion"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جيوف_هورست",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Geoff_Hurst"
  },
  {
    "id": "robert-pires",
    "nameAr": "روبرت بيريس",
    "nameEn": "Robert Pirès",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "أستون فيلا (معتزل)",
    "clubEn": "Aston Villa (retired)",
    "clubId": "aston-villa",
    "position": {
      "ar": "جناح / لاعب وسط هجومي",
      "en": "Winger / Attacking midfielder"
    },
    "era": "1992-2011",
    "active": false,
    "bioAr": "لاعب فرنسي سابق يُعد أحد أعظم لاعبي نادي أرسنال، وكان جزءًا أساسيًا من فريق \"اللامنهزمين\" في موسم 2003-2004. فاز مع منتخب فرنسا بكأس العالم 1998 ويورو 2000.",
    "bioEn": "Former French footballer regarded as one of Arsenal's greatest players, and a key part of the club's unbeaten 'Invincibles' squad of 2003-04. He won the 1998 FIFA World Cup and UEFA Euro 2000 with France.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة يورو 2000 مع فرنسا",
      "لقبا الدوري الإنجليزي الممتاز مع أرسنال (بينها موسم اللامنهزمين 2003-2004)",
      "جائزة أفضل لاعب في إنجلترا (FWA) موسم 2001-2002"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "Premier League titles with Arsenal (including the unbeaten 2003-04 Invincibles season)",
      "FWA Footballer of the Year 2001-02"
    ],
    "clubsHistoryAr": [
      "ميتز",
      "مارسيليا",
      "أرسنال",
      "فياريال",
      "أستون فيلا"
    ],
    "clubsHistoryEn": [
      "Metz",
      "Marseille",
      "Arsenal",
      "Villarreal",
      "Aston Villa"
    ],
    "clubIds": [
      "metz",
      "marseille",
      "arsenal",
      "villarreal",
      "aston-villa"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/روبير_بيريز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Robert_Pir%C3%A8s"
  },
  {
    "id": "petr-cech",
    "nameAr": "بيتر تشيك",
    "nameEn": "Petr Čech",
    "nationalityAr": "تشيكي",
    "nationalityEn": "Czech",
    "clubAr": "أرسنال (معتزل)",
    "clubEn": "Arsenal (retired)",
    "clubId": "arsenal",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1999-2019",
    "active": false,
    "bioAr": "حارس مرمى تشيكي سابق ويُعد من أعظم حراس المرمى في تاريخ الدوري الإنجليزي الممتاز. قضى 11 موسمًا مع تشيلسي حقق خلالها معظم ألقابه، قبل أن ينتقل إلى أرسنال. هو صاحب أكثر عدد مباريات دون استقبال أهداف (كلين شيت) في تاريخ الدوري الإنجليزي الممتاز.",
    "bioEn": "Former Czech goalkeeper regarded as one of the greatest in Premier League history. He spent 11 seasons at Chelsea, where he won most of his trophies, before moving to Arsenal. He holds the Premier League record for most career clean sheets.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2012 مع تشيلسي",
      "4 ألقاب للدوري الإنجليزي الممتاز مع تشيلسي",
      "4 ألقاب لكأس الاتحاد الإنجليزي (مع تشيلسي وأرسنال)",
      "صاحب الرقم القياسي لعدد مباريات الكلين شيت في تاريخ الدوري الإنجليزي الممتاز"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2012 with Chelsea",
      "4 Premier League titles with Chelsea",
      "4 FA Cup titles (with Chelsea and Arsenal)",
      "Premier League all-time record holder for clean sheets"
    ],
    "clubsHistoryAr": [
      "فيكتوريا بلزن",
      "سبارتا براغ",
      "رين",
      "تشيلسي",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Viktoria Plzeň",
      "Sparta Prague",
      "Rennes",
      "Chelsea",
      "Arsenal"
    ],
    "clubIds": [
      "rennes",
      "chelsea",
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بيتر_تشيك",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Petr_%C4%8Cech"
  },
  {
    "id": "vincent-kompany",
    "nameAr": "فينسنت كومباني",
    "nameEn": "Vincent Kompany",
    "nationalityAr": "بلجيكي",
    "nationalityEn": "Belgian",
    "clubAr": "مانشستر سيتي (معتزل كلاعب)",
    "clubEn": "Manchester City (retired as player)",
    "clubId": "manchester-city",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2003-2019",
    "active": false,
    "bioAr": "مدافع بلجيكي سابق وقائد مانشستر سيتي لثماني مواسم، قاد النادي لأول لقب دوري إنجليزي ممتاز له منذ 44 عامًا في موسم 2011-2012. يعمل حاليًا مدربًا وهو المدرب الحالي لبايرن ميونخ.",
    "bioEn": "Former Belgian centre-back and Manchester City captain for eight seasons, who led the club to its first Premier League title in 44 years in the 2011-12 season. He is currently a football manager, presently head coach of Bayern Munich.",
    "achievementsAr": [
      "4 ألقاب للدوري الإنجليزي الممتاز مع مانشستر سيتي",
      "جائزة أفضل لاعب في موسم 2011-2012 بالدوري الإنجليزي الممتاز",
      "قائد منتخب بلجيكا لسنوات عديدة",
      "أكثر من 350 مباراة مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "4 Premier League titles with Manchester City",
      "Premier League Player of the Season 2011-12",
      "Long-time captain of the Belgium national team",
      "Over 350 appearances for Manchester City"
    ],
    "clubsHistoryAr": [
      "أندرلخت",
      "هامبورغ",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Anderlecht",
      "Hamburg",
      "Manchester City"
    ],
    "clubIds": [
      "anderlecht",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فينسنت_كومباني",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Vincent_Kompany"
  },
  {
    "id": "clarence-seedorf",
    "nameAr": "كلارنس سيدورف",
    "nameEn": "Clarence Seedorf",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "بوتافوغو (معتزل)",
    "clubEn": "Botafogo (retired)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1992-2014",
    "active": false,
    "bioAr": "لاعب وسط هولندي سابق، وهو اللاعب الوحيد في التاريخ الذي فاز بدوري أبطال أوروبا مع ثلاثة أندية مختلفة: أياكس (1995)، ريال مدريد (1998)، وميلان (2003 و2007).",
    "bioEn": "Former Dutch midfielder, the only player in history to have won the UEFA Champions League with three different clubs: Ajax (1995), Real Madrid (1998), and AC Milan (2003 and 2007).",
    "achievementsAr": [
      "4 ألقاب لدوري أبطال أوروبا مع 3 أندية مختلفة (إنجاز فريد في التاريخ)",
      "لقب الدوري الهولندي مع أياكس",
      "لقب الدوري الإسباني مع ريال مدريد",
      "لقب الدوري الإيطالي مع ميلان"
    ],
    "achievementsEn": [
      "4 UEFA Champions League titles with 3 different clubs (a unique feat in history)",
      "Eredivisie title with Ajax",
      "La Liga title with Real Madrid",
      "Serie A title with AC Milan"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "سامبدوريا",
      "ريال مدريد",
      "إنتر ميلان",
      "ميلان",
      "بوتافوغو"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "Sampdoria",
      "Real Madrid",
      "Inter Milan",
      "AC Milan",
      "Botafogo"
    ],
    "clubIds": [
      "ajax",
      "sampdoria",
      "real-madrid",
      "inter-milan",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كلارنس_سيدورف",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Clarence_Seedorf"
  },
  {
    "id": "ruud-van-nistelrooy",
    "nameAr": "رود فان نيستلروي",
    "nameEn": "Ruud van Nistelrooy",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "مالقة (معتزل)",
    "clubEn": "Málaga (retired)",
    "clubId": "malaga",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1993-2012",
    "active": false,
    "bioAr": "مهاجم هولندي سابق اشتهر بغزارة تهديفه، وأحد أفضل هدافي دوري أبطال أوروبا في التاريخ. ترك بصمة كبيرة مع مانشستر يونايتد قبل انتقاله إلى ريال مدريد.",
    "bioEn": "Former Dutch striker renowned for his prolific goalscoring, and one of the all-time top scorers in UEFA Champions League history. He left a major mark at Manchester United before moving to Real Madrid.",
    "achievementsAr": [
      "الحذاء الذهبي للدوري الإنجليزي الممتاز موسم 2002-2003",
      "لقب الدوري الإنجليزي الممتاز مع مانشستر يونايتد",
      "لقبا الدوري الإسباني مع ريال مدريد",
      "من أعلى هدافي تاريخ دوري أبطال أوروبا"
    ],
    "achievementsEn": [
      "Premier League Golden Boot 2002-03",
      "Premier League title with Manchester United",
      "Two La Liga titles with Real Madrid",
      "One of the all-time top scorers in UEFA Champions League history"
    ],
    "clubsHistoryAr": [
      "دن بوش",
      "هيرنفين",
      "PSV آيندهوفن",
      "مانشستر يونايتد",
      "ريال مدريد",
      "هامبورغ",
      "مالقة"
    ],
    "clubsHistoryEn": [
      "Den Bosch",
      "Heerenveen",
      "PSV Eindhoven",
      "Manchester United",
      "Real Madrid",
      "Hamburg",
      "Málaga"
    ],
    "clubIds": [
      "psv-eindhoven",
      "manchester-united",
      "real-madrid",
      "malaga"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رود_فان_نيستلروي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ruud_van_Nistelrooy"
  },
  {
    "id": "filippo-inzaghi",
    "nameAr": "فيليبو إنزاغي",
    "nameEn": "Filippo Inzaghi",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "ميلان (معتزل)",
    "clubEn": "AC Milan (retired)",
    "clubId": "ac-milan",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1991-2012",
    "active": false,
    "bioAr": "مهاجم إيطالي سابق يُلقب بـ\"سوبر بيبو\"، وهو الهداف الإيطالي التاريخي في دوري أبطال أوروبا. حقق أبرز نجاحاته مع يوفنتوس وميلان.",
    "bioEn": "Former Italian forward nicknamed 'Superpippo', the all-time top Italian goalscorer in UEFA Champions League history. He achieved his greatest success with Juventus and AC Milan.",
    "achievementsAr": [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "لقبا دوري أبطال أوروبا مع ميلان (2003 و2007)",
      "3 ألقاب للدوري الإيطالي",
      "الهداف الإيطالي التاريخي في دوري أبطال أوروبا"
    ],
    "achievementsEn": [
      "2006 FIFA World Cup title with Italy",
      "Two UEFA Champions League titles with AC Milan (2003 and 2007)",
      "3 Serie A titles",
      "All-time top Italian goalscorer in UEFA Champions League history"
    ],
    "clubsHistoryAr": [
      "بياتشنزا",
      "أتالانتا",
      "يوفنتوس",
      "ميلان"
    ],
    "clubsHistoryEn": [
      "Piacenza",
      "Atalanta",
      "Juventus",
      "AC Milan"
    ],
    "clubIds": [
      "atalanta",
      "juventus",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/فيليبو_إنزاغي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Filippo_Inzaghi"
  },
  {
    "id": "gianluca-vialli",
    "nameAr": "جانلوكا فيالي",
    "nameEn": "Gianluca Vialli",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "تشيلسي (معتزل)",
    "clubEn": "Chelsea (retired)",
    "clubId": "chelsea",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1980-1999",
    "active": false,
    "bioAr": "مهاجم إيطالي سابق ولاعب-مدرب تشيلسي، وأحد قلة من اللاعبين الذين فازوا بالبطولات الأوروبية الثلاث الكبرى للأندية. توفي عام 2023 بعد صراع مع مرض السرطان.",
    "bioEn": "Former Italian striker and Chelsea player-manager, one of the few players to have won all three major European club competitions. He passed away in 2023 after a battle with cancer.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 1996 مع يوفنتوس",
      "لقب الدوري الإيطالي مع سامبدوريا ويوفنتوس",
      "لقب كأس الكؤوس الأوروبية مع سامبدوريا وتشيلسي",
      "المركز الثالث في كأس العالم 1990 مع إيطاليا"
    ],
    "achievementsEn": [
      "UEFA Champions League title 1996 with Juventus",
      "Serie A titles with Sampdoria and Juventus",
      "European Cup Winners' Cup titles with Sampdoria and Chelsea",
      "Third place at the 1990 FIFA World Cup with Italy"
    ],
    "clubsHistoryAr": [
      "كريمونيزي",
      "سامبدوريا",
      "يوفنتوس",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Cremonese",
      "Sampdoria",
      "Juventus",
      "Chelsea"
    ],
    "clubIds": [
      "sampdoria",
      "juventus",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جانلوكا_فيالي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gianluca_Vialli"
  },
  {
    "id": "raymond-kopa",
    "nameAr": "ريمون كوبا",
    "nameEn": "Raymond Kopa",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ستاد دو رانس (معتزل)",
    "clubEn": "Stade de Reims (retired)",
    "clubId": "reims",
    "position": {
      "ar": "لاعب وسط هجومي / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "1949-1967",
    "active": false,
    "bioAr": "أسطورة فرنسية وأحد أبرز نجوم ريال مدريد في الخمسينيات، أول لاعب فرنسي يفوز بالكرة الذهبية (1958) وأول فرنسي يفوز بدوري أبطال أوروبا. توفي عام 2017.",
    "bioEn": "French legend and one of the standout stars of Real Madrid in the 1950s, the first French player to win the Ballon d'Or (1958) and the first Frenchman to win the European Cup. He passed away in 2017.",
    "achievementsAr": [
      "الكرة الذهبية لعام 1958",
      "3 ألقاب متتالية لكأس أوروبا للأندية البطلة مع ريال مدريد (1957، 1958، 1959)",
      "لقبا الدوري الإسباني مع ريال مدريد",
      "المركز الثالث في كأس العالم 1958 مع فرنسا"
    ],
    "achievementsEn": [
      "1958 Ballon d'Or",
      "3 consecutive European Cup titles with Real Madrid (1957, 1958, 1959)",
      "Two La Liga titles with Real Madrid",
      "Third place at the 1958 FIFA World Cup with France"
    ],
    "clubsHistoryAr": [
      "أنجيه",
      "ستاد دو رانس",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Angers",
      "Stade de Reims",
      "Real Madrid"
    ],
    "clubIds": [
      "angers",
      "reims",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ريمون_كوبا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Raymond_Kopa"
  },
  {
    "id": "giuseppe-meazza",
    "nameAr": "جوزيبي ميازا",
    "nameEn": "Giuseppe Meazza",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "أتالانتا (معتزل)",
    "clubEn": "Atalanta (retired)",
    "clubId": "atalanta",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1927-1947",
    "active": false,
    "bioAr": "أسطورة إيطالية وأحد أعظم مهاجمي تاريخ اللعبة، فاز بكأس العالم مرتين مع إيطاليا. سُمّي ملعب سان سيرو في ميلانو باسمه (ستاديو جوزيبي ميازا) تكريمًا له. توفي عام 1979.",
    "bioEn": "Italian legend and one of the greatest forwards in the history of the game, who won the World Cup twice with Italy. Milan's San Siro stadium was renamed Stadio Giuseppe Meazza in his honour. He passed away in 1979.",
    "achievementsAr": [
      "بطولتا كأس العالم 1934 و1938 مع إيطاليا",
      "لقبان للدوري الإيطالي مع إنتر ميلان",
      "أصغر لاعب يسجل 100 هدف في الدوري الإيطالي (في زمنه)",
      "تسمية ملعب سان سيرو باسمه (ستاديو جوزيبي ميازا) منذ عام 1980"
    ],
    "achievementsEn": [
      "1934 and 1938 FIFA World Cup titles with Italy",
      "Two Serie A titles with Inter Milan",
      "Youngest player to score 100 Serie A goals (in his era)",
      "San Siro stadium renamed Stadio Giuseppe Meazza in his honour since 1980"
    ],
    "clubsHistoryAr": [
      "إنتر ميلان",
      "ميلان",
      "يوفنتوس",
      "أتالانتا"
    ],
    "clubsHistoryEn": [
      "Inter Milan",
      "AC Milan",
      "Juventus",
      "Atalanta"
    ],
    "clubIds": [
      "inter-milan",
      "ac-milan",
      "juventus",
      "atalanta"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جوزيبي_مياتزا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Giuseppe_Meazza"
  },
  {
    "id": "jens-lehmann",
    "nameAr": "ينس ليمان",
    "nameEn": "Jens Lehmann",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "أرسنال (معتزل)",
    "clubEn": "Arsenal (retired)",
    "clubId": "arsenal",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1987-2011",
    "active": false,
    "bioAr": "حارس مرمى ألماني سابق، كان الحارس الوحيد الذي شارك في جميع مباريات أرسنال خلال موسم \"اللامنهزمين\" 2003-2004. يحمل الرقم القياسي لدوري أبطال أوروبا في عدد المباريات المتتالية دون استقبال أهداف.",
    "bioEn": "Former German goalkeeper, the only player to feature in every match of Arsenal's unbeaten 'Invincibles' 2003-04 season. He holds the UEFA Champions League record for most consecutive clean sheets.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي الممتاز موسم اللامنهزمين 2003-2004 مع أرسنال",
      "الرقم القياسي لدوري أبطال أوروبا في عدد المباريات المتتالية دون استقبال أهداف",
      "الوصول لنهائي كأس العالم 2002 ونهائي يورو 2008 مع ألمانيا",
      "لقبا الدوري الألماني مع بوروسيا دورتموند"
    ],
    "achievementsEn": [
      "Premier League title in Arsenal's unbeaten 2003-04 Invincibles season",
      "UEFA Champions League record for most consecutive clean sheets",
      "Runner-up at the 2002 FIFA World Cup and UEFA Euro 2008 with Germany",
      "Bundesliga titles with Borussia Dortmund"
    ],
    "clubsHistoryAr": [
      "شالكه 04",
      "ميلان",
      "بوروسيا دورتموند",
      "أرسنال",
      "شتوتغارت"
    ],
    "clubsHistoryEn": [
      "Schalke 04",
      "AC Milan",
      "Borussia Dortmund",
      "Arsenal",
      "VfB Stuttgart"
    ],
    "clubIds": [
      "schalke-04",
      "ac-milan",
      "borussia-dortmund",
      "arsenal",
      "vfb-stuttgart"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ينس_ليمان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jens_Lehmann"
  },
  {
    "id": "michael-laudrup",
    "nameAr": "مايكل لاودروب",
    "nameEn": "Michael Laudrup",
    "nationalityAr": "دنماركي",
    "nationalityEn": "Danish",
    "clubAr": "أياكس (معتزل)",
    "clubEn": "Ajax (retired)",
    "clubId": "ajax",
    "position": {
      "ar": "لاعب وسط هجومي",
      "en": "Attacking midfielder"
    },
    "era": "1981-1998",
    "active": false,
    "bioAr": "أسطورة دنماركية ومن أعظم صناع اللعب في التاريخ، كان جزءًا أساسيًا من \"فريق الأحلام\" لبرشلونة بقيادة كرويف قبل انتقاله المثير للجدل إلى ريال مدريد. اختير أفضل لاعب دنماركي في التاريخ.",
    "bioEn": "Danish legend and one of the greatest playmakers in history, a key member of Johan Cruyff's Barcelona 'Dream Team' before his controversial move to arch-rivals Real Madrid. He was voted the best Danish footballer of all time.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 1992 مع برشلونة",
      "4 ألقاب متتالية للدوري الإسباني مع برشلونة (1991-1994)",
      "لقب الدوري الإسباني مع ريال مدريد 1995",
      "بطولة كأس القارات 1995 مع الدنمارك (قائدًا)"
    ],
    "achievementsEn": [
      "UEFA Champions League title 1992 with Barcelona",
      "4 consecutive La Liga titles with Barcelona (1991-1994)",
      "La Liga title with Real Madrid 1995",
      "1995 FIFA Confederations Cup with Denmark (as captain)"
    ],
    "clubsHistoryAr": [
      "لاتسيو",
      "يوفنتوس",
      "برشلونة",
      "ريال مدريد",
      "فيسل كوبي",
      "أياكس"
    ],
    "clubsHistoryEn": [
      "Lazio",
      "Juventus",
      "Barcelona",
      "Real Madrid",
      "Vissel Kobe",
      "Ajax"
    ],
    "clubIds": [
      "lazio",
      "juventus",
      "barcelona",
      "real-madrid",
      "ajax"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مايكل_لاودروب",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Michael_Laudrup"
  },
  {
    "id": "gunter-netzer",
    "nameAr": "غونتر نتزر",
    "nameEn": "Günter Netzer",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "غراسهوبرز زيورخ (معتزل)",
    "clubEn": "Grasshopper Zürich (retired)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1963-1977",
    "active": false,
    "bioAr": "أسطورة ألمانية ويُعتبر أحد أعظم صناع اللعب في تاريخ البوندسليغا، قاد بوروسيا مونشنغلادباخ في أوجها قبل الانتقال إلى ريال مدريد. فاز بكأس العالم 1974 ويورو 1972 مع ألمانيا الغربية.",
    "bioEn": "German legend considered one of the greatest playmakers in Bundesliga history, who led Borussia Mönchengladbach at their peak before moving to Real Madrid. He won the 1974 World Cup and Euro 1972 with West Germany.",
    "achievementsAr": [
      "بطولة كأس العالم 1974 مع ألمانيا الغربية",
      "بطولة يورو 1972 مع ألمانيا الغربية",
      "لقبا الدوري الألماني مع بوروسيا مونشنغلادباخ",
      "لقبا الدوري الإسباني مع ريال مدريد"
    ],
    "achievementsEn": [
      "1974 FIFA World Cup title with West Germany",
      "UEFA Euro 1972 title with West Germany",
      "Two Bundesliga titles with Borussia Mönchengladbach",
      "Two La Liga titles with Real Madrid"
    ],
    "clubsHistoryAr": [
      "بوروسيا مونشنغلادباخ",
      "ريال مدريد",
      "غراسهوبرز زيورخ"
    ],
    "clubsHistoryEn": [
      "Borussia Mönchengladbach",
      "Real Madrid",
      "Grasshopper Zürich"
    ],
    "clubIds": [
      "borussia-monchengladbach",
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غونتر_نيتزر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/G%C3%BCnter_Netzer"
  },
  {
    "id": "rudi-voller",
    "nameAr": "رودي فولر",
    "nameEn": "Rudi Völler",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "باير ليفركوزن (معتزل)",
    "clubEn": "Bayer Leverkusen (retired)",
    "clubId": "bayer-leverkusen",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1975-1996",
    "active": false,
    "bioAr": "مهاجم ألماني سابق وبطل كأس العالم 1990، ترك بصمة كبيرة مع نادي روما الإيطالي قبل أن يتوّج بدوري أبطال أوروبا مع مارسيليا. أحد ثلاثة أشخاص فقط وصلوا لنهائي كأس العالم كلاعب ومدرب.",
    "bioEn": "Former German forward and 1990 World Cup winner, who left a major mark at AS Roma before winning the UEFA Champions League with Marseille. One of only three people to reach a World Cup final as both player and manager.",
    "achievementsAr": [
      "بطولة كأس العالم 1990 مع ألمانيا الغربية",
      "لقب دوري أبطال أوروبا 1993 مع مارسيليا",
      "لقب الدوري الإيطالي (كأس إيطاليا) مع روما 1991",
      "ثاني أكثر هدافي ألمانيا تاريخيًا عند اعتزاله"
    ],
    "achievementsEn": [
      "1990 FIFA World Cup title with West Germany",
      "UEFA Champions League title 1993 with Marseille",
      "Coppa Italia title with Roma 1991",
      "Germany's second all-time top scorer at the time of his retirement"
    ],
    "clubsHistoryAr": [
      "1860 ميونخ",
      "فيردر بريمن",
      "روما",
      "مارسيليا",
      "باير ليفركوزن"
    ],
    "clubsHistoryEn": [
      "1860 Munich",
      "Werder Bremen",
      "Roma",
      "Marseille",
      "Bayer Leverkusen"
    ],
    "clubIds": [
      "1860-munich",
      "werder-bremen",
      "roma",
      "marseille",
      "bayer-leverkusen"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رودي_فولر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rudi_V%C3%B6ller"
  },
  {
    "id": "andreas-brehme",
    "nameAr": "أندرياس بريمه",
    "nameEn": "Andreas Brehme",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "كايزرسلاوترن (معتزل)",
    "clubEn": "Kaiserslautern (retired)",
    "clubId": "kaiserslautern",
    "position": {
      "ar": "مدافع",
      "en": "Full-back"
    },
    "era": "1978-1998",
    "active": false,
    "bioAr": "مدافع ألماني سابق يُعرف بتسجيله هدف الفوز بركلة جزاء في نهائي كأس العالم 1990 أمام الأرجنتين. لعب لإنتر ميلان وبايرن ميونخ من بين أندية أخرى. توفي عام 2024.",
    "bioEn": "Former German full-back best known for scoring the winning penalty in the 1990 World Cup final against Argentina. He played for Inter Milan and Bayern Munich among other clubs. He passed away in 2024.",
    "achievementsAr": [
      "بطولة كأس العالم 1990 مع ألمانيا الغربية (هدف الفوز في النهائي)",
      "لقب الدوري الإيطالي مع إنتر ميلان 1989",
      "لقب كأس الاتحاد الأوروبي مع إنتر ميلان",
      "لقب الدوري الألماني مع بايرن ميونخ وكايزرسلاوترن"
    ],
    "achievementsEn": [
      "1990 FIFA World Cup title with West Germany (scored the winning goal in the final)",
      "Serie A title with Inter Milan 1989",
      "UEFA Cup title with Inter Milan",
      "Bundesliga titles with Bayern Munich and Kaiserslautern"
    ],
    "clubsHistoryAr": [
      "كايزرسلاوترن",
      "بايرن ميونخ",
      "إنتر ميلان",
      "ريال سرقسطة",
      "كايزرسلاوترن"
    ],
    "clubsHistoryEn": [
      "Kaiserslautern",
      "Bayern Munich",
      "Inter Milan",
      "Real Zaragoza",
      "Kaiserslautern"
    ],
    "clubIds": [
      "kaiserslautern",
      "bayern-munich",
      "inter-milan",
      "real-zaragoza"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أندرياس_بريمه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Andreas_Brehme"
  },
  {
    "id": "stefan-effenberg",
    "nameAr": "شتيفان إيفنبرغ",
    "nameEn": "Stefan Effenberg",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "الأهلي القطري (معتزل)",
    "clubEn": "Al-Arabi (retired)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1987-2004",
    "active": false,
    "bioAr": "لاعب وسط ألماني سابق ولُقب بـ\"النمر\"، قاد بايرن ميونخ كقائد إلى لقب دوري أبطال أوروبا 2001 وسُجل هدف التعادل من ركلة جزاء في النهائي.",
    "bioEn": "Former German midfielder nicknamed 'Der Tiger', who captained Bayern Munich to the 2001 UEFA Champions League title, scoring the equalising penalty in the final.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2001 مع بايرن ميونخ (قائدًا)",
      "3 ألقاب متتالية للدوري الألماني مع بايرن ميونخ",
      "جائزة أفضل لاعب في دوري أبطال أوروبا موسم 2000-2001",
      "لقب كأس العالم للأندية 2001 مع بايرن ميونخ"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2001 with Bayern Munich (as captain)",
      "3 consecutive Bundesliga titles with Bayern Munich",
      "UEFA Champions League Most Valuable Player 2000-01",
      "Intercontinental Cup title 2001 with Bayern Munich"
    ],
    "clubsHistoryAr": [
      "بوروسيا مونشنغلادباخ",
      "فيورنتينا",
      "بايرن ميونخ",
      "فولفسبورغ",
      "العربي القطري"
    ],
    "clubsHistoryEn": [
      "Borussia Mönchengladbach",
      "Fiorentina",
      "Bayern Munich",
      "VfL Wolfsburg",
      "Al-Arabi"
    ],
    "clubIds": [
      "borussia-monchengladbach",
      "fiorentina",
      "bayern-munich",
      "vfl-wolfsburg"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/شتيفان_إيفنبرغ",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Stefan_Effenberg"
  },
  {
    "id": "emilio-butrageno",
    "nameAr": "إميليو بوتراغينيو",
    "nameEn": "Emilio Butragueño",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أتليتيكو سيلايا (معتزل)",
    "clubEn": "Celaya (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1982-1998",
    "active": false,
    "bioAr": "أسطورة إسبانية ولُقب بـ\"النسر\"، كان أبرز أعضاء جيل \"الخامسة الذهبية\" الشهير في ريال مدريد خلال الثمانينيات. هداف تاريخي لمنتخب إسبانيا في فترته.",
    "bioEn": "Spanish legend nicknamed 'El Buitre' (The Vulture), the most prominent member of Real Madrid's famous 'La Quinta del Buitre' generation of the 1980s. He was Spain's all-time top scorer during his era.",
    "achievementsAr": [
      "5 ألقاب متتالية للدوري الإسباني مع ريال مدريد (1986-1990)",
      "لقبا كأس الاتحاد الأوروبي مع ريال مدريد (1985، 1986)",
      "الهداف التاريخي لمنتخب إسبانيا في وقته",
      "4 أهداف في مباراة واحدة أمام الدنمارك بكأس العالم 1986"
    ],
    "achievementsEn": [
      "5 consecutive La Liga titles with Real Madrid (1986-1990)",
      "Two UEFA Cup titles with Real Madrid (1985, 1986)",
      "Spain's all-time top scorer at the time",
      "Scored 4 goals in a single match against Denmark at the 1986 World Cup"
    ],
    "clubsHistoryAr": [
      "ريال مدريد",
      "أتليتيكو سيلايا"
    ],
    "clubsHistoryEn": [
      "Real Madrid",
      "Celaya"
    ],
    "clubIds": [
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إيميليو_بوتراغينيو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Emilio_Butrague%C3%B1o"
  },
  {
    "id": "michel",
    "nameAr": "ميتشيل",
    "nameEn": "Míchel",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "سيلايا (معتزل)",
    "clubEn": "Celaya (retired)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1981-1997",
    "active": false,
    "bioAr": "لاعب وسط إسباني سابق وعضو في جيل \"الخامسة الذهبية\" لريال مدريد، اشتُهر بعرضياته الدقيقة وتمريراته الحاسمة. لعب أكثر من 500 مباراة مع ريال مدريد.",
    "bioEn": "Former Spanish midfielder and member of Real Madrid's 'La Quinta del Buitre' generation, renowned for his precise crossing and decisive passing. He made over 500 appearances for Real Madrid.",
    "achievementsAr": [
      "6 ألقاب للدوري الإسباني مع ريال مدريد",
      "لقبا كأس الاتحاد الأوروبي مع ريال مدريد",
      "المشاركة في كأسي عالم مع إسبانيا (1986، 1990)",
      "أحد أعضاء \"الخامسة الذهبية\" الأسطورية"
    ],
    "achievementsEn": [
      "6 La Liga titles with Real Madrid",
      "Two UEFA Cup titles with Real Madrid",
      "Appeared at two FIFA World Cups with Spain (1986, 1990)",
      "Member of the legendary 'La Quinta del Buitre' generation"
    ],
    "clubsHistoryAr": [
      "ريال مدريد",
      "سيلايا"
    ],
    "clubsHistoryEn": [
      "Real Madrid",
      "Celaya"
    ],
    "clubIds": [
      "real-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ميتشيل",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/M%C3%ADchel_(footballer,_born_1963)"
  },
  {
    "id": "bernd-schuster",
    "nameAr": "برند شوستر",
    "nameEn": "Bernd Schuster",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بوماس UNAM (معتزل)",
    "clubEn": "Pumas UNAM (retired)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1978-1997",
    "active": false,
    "bioAr": "لاعب وسط ألماني سابق يُلقب بـ\"الملاك الأشقر\"، لعب لكل من برشلونة وريال مدريد وأتلتيكو مدريد خلال مسيرته الطويلة في إسبانيا. فاز بيورو 1980 مع ألمانيا الغربية.",
    "bioEn": "Former German midfielder nicknamed 'der Blonde Engel' (the Blond Angel), who played for Barcelona, Real Madrid, and Atlético Madrid during a long career in Spain. He won Euro 1980 with West Germany.",
    "achievementsAr": [
      "بطولة يورو 1980 مع ألمانيا الغربية",
      "لقب الدوري الإسباني مع برشلونة",
      "لقب كأس الكؤوس الأوروبية مع برشلونة",
      "الوصافة على الكرة الذهبية عام 1980"
    ],
    "achievementsEn": [
      "UEFA Euro 1980 title with West Germany",
      "La Liga title with Barcelona",
      "European Cup Winners' Cup title with Barcelona",
      "Ballon d'Or runner-up in 1980"
    ],
    "clubsHistoryAr": [
      "كولن",
      "برشلونة",
      "ريال مدريد",
      "أتلتيكو مدريد",
      "باير ليفركوزن",
      "بوماس UNAM"
    ],
    "clubsHistoryEn": [
      "1. FC Köln",
      "Barcelona",
      "Real Madrid",
      "Atlético Madrid",
      "Bayer Leverkusen",
      "Pumas UNAM"
    ],
    "clubIds": [
      "koln",
      "barcelona",
      "real-madrid",
      "atletico-madrid",
      "bayer-leverkusen"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/برند_شوستر",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bernd_Schuster"
  },
  {
    "id": "laszlo-kubala",
    "nameAr": "لاسلو كوبالا",
    "nameEn": "László Kubala",
    "nationalityAr": "هنغاري",
    "nationalityEn": "Hungarian",
    "clubAr": "إسبانيول (معتزل)",
    "clubEn": "Espanyol (retired)",
    "clubId": "espanyol",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1943-1965",
    "active": false,
    "bioAr": "أسطورة هنغارية الأصل ويُعتبر أفضل لاعب في تاريخ نادي برشلونة بحسب استطلاع لجماهير النادي عام 1999. لعب لمنتخبات هنغاريا وتشيكوسلوفاكيا وإسبانيا الوطنية. توفي عام 2002.",
    "bioEn": "Hungarian-born legend regarded as the best player in FC Barcelona's history according to a 1999 club fan poll. He played for the national teams of Hungary, Czechoslovakia, and Spain. He passed away in 2002.",
    "achievementsAr": [
      "أفضل لاعب في تاريخ برشلونة بحسب استطلاع جماهيري عام 1999",
      "أكثر من 250 هدفًا مع برشلونة",
      "عدة ألقاب للدوري الإسباني وكأس ملك إسبانيا مع برشلونة",
      "تمثيل ثلاثة منتخبات وطنية مختلفة (هنغاريا، تشيكوسلوفاكيا، إسبانيا)"
    ],
    "achievementsEn": [
      "Voted the best player in FC Barcelona's history in a 1999 fan poll",
      "Over 250 goals for Barcelona",
      "Multiple La Liga and Copa del Rey titles with Barcelona",
      "Represented three different national teams (Hungary, Czechoslovakia, Spain)"
    ],
    "clubsHistoryAr": [
      "فيرينتسواروش",
      "سلوفان براتيسلافا",
      "فاشاش بودابست",
      "برشلونة",
      "إسبانيول"
    ],
    "clubsHistoryEn": [
      "Ferencváros",
      "Slovan Bratislava",
      "Vasas Budapest",
      "Barcelona",
      "Espanyol"
    ],
    "clubIds": [
      "barcelona",
      "espanyol"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لاسلو_كوبالا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Kubala"
  },
  {
    "id": "gaetano-scirea",
    "nameAr": "غايتانو شيريا",
    "nameEn": "Gaetano Scirea",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "يوفنتوس (معتزل)",
    "clubEn": "Juventus (retired)",
    "clubId": "juventus",
    "position": {
      "ar": "مدافع (ليبرو)",
      "en": "Sweeper"
    },
    "era": "1972-1988",
    "active": false,
    "bioAr": "أحد أعظم المدافعين في تاريخ اللعبة ويُعد نموذجًا للأناقة الدفاعية في مركز الليبرو. قضى معظم مسيرته مع يوفنتوس وفاز بكأس العالم 1982 مع إيطاليا. توفي في حادث سير عام 1989.",
    "bioEn": "One of the greatest defenders in the history of the game, a model of elegance in the sweeper role. He spent most of his career with Juventus and won the 1982 World Cup with Italy. He died in a car accident in 1989.",
    "achievementsAr": [
      "بطولة كأس العالم 1982 مع إيطاليا",
      "أحد قلة اللاعبين الفائزين بالبطولات الأوروبية الثلاث الكبرى للأندية",
      "7 ألقاب للدوري الإيطالي مع يوفنتوس",
      "لم يتلقَّ بطاقة حمراء واحدة طوال مسيرته الاحترافية"
    ],
    "achievementsEn": [
      "1982 FIFA World Cup title with Italy",
      "One of few players to win all three major European club competitions",
      "7 Serie A titles with Juventus",
      "Never received a single red card throughout his professional career"
    ],
    "clubsHistoryAr": [
      "أتالانتا",
      "يوفنتوس"
    ],
    "clubsHistoryEn": [
      "Atalanta",
      "Juventus"
    ],
    "clubIds": [
      "atalanta",
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غايتانو_شيريا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gaetano_Scirea"
  },
  {
    "id": "marco-tardelli",
    "nameAr": "ماركو تارديلي",
    "nameEn": "Marco Tardelli",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "سانت غالن (معتزل)",
    "clubEn": "St. Gallen (retired)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1972-1988",
    "active": false,
    "bioAr": "لاعب وسط إيطالي سابق يشتهر بهدفه الشهير وصرخته العاطفية الشهيرة (\"صرخة تارديلي\") في نهائي كأس العالم 1982 أمام ألمانيا الغربية. حقق نجاحات كبرى مع يوفنتوس.",
    "bioEn": "Former Italian midfielder famous for his goal and emotional celebration (the 'Tardelli Scream') in the 1982 World Cup final against West Germany. He achieved major success with Juventus.",
    "achievementsAr": [
      "بطولة كأس العالم 1982 مع إيطاليا",
      "5 ألقاب للدوري الإيطالي مع يوفنتوس",
      "أحد أوائل 3 لاعبين فازوا بالبطولات الأوروبية الثلاث الكبرى للأندية",
      "هدف تاريخي في نهائي كأس العالم 1982"
    ],
    "achievementsEn": [
      "1982 FIFA World Cup title with Italy",
      "5 Serie A titles with Juventus",
      "One of the first three players to win all three major European club competitions",
      "Iconic goal in the 1982 World Cup final"
    ],
    "clubsHistoryAr": [
      "بيزا",
      "كومو",
      "يوفنتوس",
      "إنتر ميلان",
      "سانت غالن"
    ],
    "clubsHistoryEn": [
      "Pisa",
      "Como",
      "Juventus",
      "Inter Milan",
      "St. Gallen"
    ],
    "clubIds": [
      "como",
      "juventus",
      "inter-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماركو_تارديلي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marco_Tardelli"
  },
  {
    "id": "youri-djorkaeff",
    "nameAr": "يوري دجوركايف",
    "nameEn": "Youri Djorkaeff",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "نيويورك ريد بولز (معتزل)",
    "clubEn": "New York Red Bulls (retired)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط هجومي / مهاجم",
      "en": "Attacking midfielder / Forward"
    },
    "era": "1984-2006",
    "active": false,
    "bioAr": "لاعب فرنسي سابق يُلقب بـ\"الأفعى\" لهدوئه أمام المرمى، فاز بكأس العالم 1998 ويورو 2000 مع فرنسا. ترك بصمة واضحة مع إنتر ميلان.",
    "bioEn": "Former French footballer nicknamed 'The Snake' for his composure in front of goal, who won the 1998 FIFA World Cup and Euro 2000 with France. He left a strong mark at Inter Milan.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة يورو 2000 مع فرنسا",
      "بطولة كأس القارات 2001 مع فرنسا",
      "لقب كأس الاتحاد الأوروبي 1998 مع إنتر ميلان"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "2001 FIFA Confederations Cup with France",
      "UEFA Cup title 1998 with Inter Milan"
    ],
    "clubsHistoryAr": [
      "غرونوبل",
      "ستراسبورغ",
      "موناكو",
      "باريس سان جيرمان",
      "إنتر ميلان",
      "كايزرسلاوترن",
      "بولتون واندررز",
      "بلاكبيرن روفرز",
      "نيويورك ريد بولز"
    ],
    "clubsHistoryEn": [
      "Grenoble",
      "Strasbourg",
      "Monaco",
      "Paris Saint-Germain",
      "Inter Milan",
      "Kaiserslautern",
      "Bolton Wanderers",
      "Blackburn Rovers",
      "New York Red Bulls"
    ],
    "clubIds": [
      "strasbourg",
      "monaco",
      "paris-saint-germain",
      "inter-milan",
      "kaiserslautern",
      "bolton-wanderers",
      "blackburn-rovers"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/يوري_دجوركاييف",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Youri_Djorkaeff"
  },
  {
    "id": "laurent-blanc",
    "nameAr": "لوران بلان",
    "nameEn": "Laurent Blanc",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "مانشستر يونايتد (معتزل)",
    "clubEn": "Manchester United (retired)",
    "clubId": "manchester-united",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "1983-2003",
    "active": false,
    "bioAr": "مدافع فرنسي سابق ولُقب بـ\"الرئيس\"، فاز بكأس العالم 1998 ويورو 2000 مع فرنسا. يُعتبر أحد أعظم المدافعين في التاريخ ولعب لأندية كبرى منها برشلونة وإنتر ميلان ومانشستر يونايتد.",
    "bioEn": "Former French centre-back nicknamed 'Le Président', who won the 1998 FIFA World Cup and Euro 2000 with France. Widely regarded as one of the greatest defenders of all time, he played for major clubs including Barcelona, Inter Milan and Manchester United.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة يورو 2000 مع فرنسا",
      "لقب الدوري الإنجليزي الممتاز مع مانشستر يونايتد",
      "بطولة يورو تحت 21 عامًا 1988 مع فرنسا"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "Premier League title with Manchester United",
      "UEFA Euro U-21 Championship 1988 with France"
    ],
    "clubsHistoryAr": [
      "مونبلييه",
      "نابولي",
      "نيم",
      "سانت إتيان",
      "أوكسير",
      "برشلونة",
      "مارسيليا",
      "إنتر ميلان",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Montpellier",
      "Napoli",
      "Nîmes",
      "Saint-Étienne",
      "Auxerre",
      "Barcelona",
      "Marseille",
      "Inter Milan",
      "Manchester United"
    ],
    "clubIds": [
      "montpellier",
      "napoli",
      "saint-etienne",
      "auxerre",
      "barcelona",
      "marseille",
      "inter-milan",
      "manchester-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/لوران_بلان",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Laurent_Blanc"
  },
  {
    "id": "didier-deschamps",
    "nameAr": "ديدييه ديشامب",
    "nameEn": "Didier Deschamps",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "فالنسيا (معتزل)",
    "clubEn": "Valencia (retired)",
    "clubId": "valencia",
    "position": {
      "ar": "لاعب وسط دفاعي",
      "en": "Defensive midfielder"
    },
    "era": "1983-2001",
    "active": false,
    "bioAr": "لاعب فرنسي سابق وقائد منتخب فرنسا الفائز بكأس العالم 1998 ويورو 2000. ثاني قائد في التاريخ يرفع كأس دوري الأبطال وكأس العالم وكأس الأمم الأوروبية. أصبح لاحقًا مدربًا ناجحًا لمنتخب فرنسا.",
    "bioEn": "Former French footballer and captain of the France team that won the 1998 World Cup and Euro 2000. Only the second captain in history to lift the Champions League, World Cup, and European Championship trophies. He later became a successful France national team manager.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا (قائدًا)",
      "بطولة يورو 2000 مع فرنسا (قائدًا)",
      "لقب دوري أبطال أوروبا 1993 مع مارسيليا",
      "3 ألقاب للدوري الإيطالي مع يوفنتوس"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France (as captain)",
      "UEFA Euro 2000 title with France (as captain)",
      "UEFA Champions League title 1993 with Marseille",
      "3 Serie A titles with Juventus"
    ],
    "clubsHistoryAr": [
      "نانت",
      "بوردو",
      "مارسيليا",
      "يوفنتوس",
      "تشيلسي",
      "فالنسيا"
    ],
    "clubsHistoryEn": [
      "Nantes",
      "Bordeaux",
      "Marseille",
      "Juventus",
      "Chelsea",
      "Valencia"
    ],
    "clubIds": [
      "nantes",
      "bordeaux",
      "marseille",
      "juventus",
      "chelsea",
      "valencia"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ديدييه_ديشامب",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Didier_Deschamps"
  },
  {
    "id": "david-trezeguet",
    "nameAr": "ديفيد تريزيغيه",
    "nameEn": "David Trezeguet",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "نيوإلز أولد بويز (معتزل)",
    "clubEn": "Newell's Old Boys (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1994-2013",
    "active": false,
    "bioAr": "مهاجم فرنسي سابق فاز بكأس العالم 1998 مع فرنسا، ويُذكر بشكل خاص بتسجيله هدف الفوز الذهبي في نهائي يورو 2000 أمام إيطاليا. هداف تاريخي بارز ليوفنتوس.",
    "bioEn": "Former French striker who won the 1998 World Cup with France, best remembered for scoring the golden goal in the Euro 2000 final against Italy. He is one of Juventus's all-time leading scorers.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة يورو 2000 مع فرنسا (هدف الفوز الذهبي في النهائي)",
      "الهداف المشارك للدوري الإيطالي موسم 2001-2002",
      "رابع أفضل هداف في تاريخ يوفنتوس"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France (scored the golden goal in the final)",
      "Joint Serie A top scorer 2001-02",
      "Fourth-highest goalscorer in Juventus's history"
    ],
    "clubsHistoryAr": [
      "بلاتنسي",
      "موناكو",
      "يوفنتوس",
      "هرقل",
      "ريفر بليت",
      "نيوإلز أولد بويز"
    ],
    "clubsHistoryEn": [
      "Platense",
      "Monaco",
      "Juventus",
      "Hercules",
      "River Plate",
      "Newell's Old Boys"
    ],
    "clubIds": [
      "monaco",
      "juventus",
      "river-plate"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/دافيد_تريزيغيه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/David_Trezeguet"
  },
  {
    "id": "careca",
    "nameAr": "كاريكا",
    "nameEn": "Careca",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "ساو خوسيه (معتزل)",
    "clubEn": "São José-RS (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1978-1999",
    "active": false,
    "bioAr": "مهاجم برازيلي سابق كوّن مع مارادونا ثنائيًا هجوميًا شهيرًا (\"ماجيكا\") في نادي نابولي الإيطالي خلال أواخر الثمانينيات، وساهم في فوز النادي بأول لقب دوري إيطالي في تاريخه.",
    "bioEn": "Former Brazilian striker who formed a famous attacking partnership with Diego Maradona (nicknamed 'Ma-Gi-Ca') at Italian club Napoli in the late 1980s, helping the club win its first-ever Serie A title.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 1990 مع نابولي",
      "لقب كأس الاتحاد الأوروبي مع نابولي",
      "المشاركة في كأسي عالم مع البرازيل (1986، 1990)",
      "أكثر من 60 مباراة دولية مع منتخب البرازيل"
    ],
    "achievementsEn": [
      "Serie A title 1990 with Napoli",
      "UEFA Cup title with Napoli",
      "Appeared at two FIFA World Cups with Brazil (1986, 1990)",
      "Over 60 international caps for Brazil"
    ],
    "clubsHistoryAr": [
      "غواراني",
      "ساو باولو",
      "نابولي",
      "كاشيوا ريسول",
      "سانتوس"
    ],
    "clubsHistoryEn": [
      "Guarani",
      "São Paulo",
      "Napoli",
      "Kashiwa Reysol",
      "Santos"
    ],
    "clubIds": [
      "napoli",
      "santos-fc"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كاريكا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Careca"
  },
  {
    "id": "falcao",
    "nameAr": "فالكاو (باولو روبرتو)",
    "nameEn": "Paulo Roberto Falcão",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "ساو باولو (معتزل)",
    "clubEn": "São Paulo (retired)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1972-1986",
    "active": false,
    "bioAr": "لاعب وسط برازيلي سابق يُعد أحد أعظم صناع اللعب في تاريخ البرازيل، لُقب في روما بـ\"الملك الثامن لروما\" لدوره الكبير في فوز النادي بلقب الدوري الإيطالي 1983.",
    "bioEn": "Former Brazilian midfielder considered one of the greatest playmakers in Brazilian history, nicknamed the 'Eighth King of Rome' at AS Roma for his key role in the club's 1983 Serie A title.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 1983 مع روما (أول لقب للنادي منذ عقود)",
      "لقبا كأس إيطاليا مع روما",
      "المركز الرابع مع منتخب البرازيل في كأس العالم 1978",
      "ضمن قائمة أفضل 125 لاعبًا في التاريخ (FIFA 100)"
    ],
    "achievementsEn": [
      "Serie A title 1983 with Roma (the club's first in decades)",
      "Two Coppa Italia titles with Roma",
      "Fourth place with Brazil at the 1978 World Cup",
      "Named in the FIFA 100 list of the greatest living footballers"
    ],
    "clubsHistoryAr": [
      "إنترناسيونال",
      "روما",
      "ساو باولو"
    ],
    "clubsHistoryEn": [
      "Internacional",
      "Roma",
      "São Paulo"
    ],
    "clubIds": [
      "roma"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/باولو_روبرتو_فالكاو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paulo_Roberto_Falc%C3%A3o"
  },
  {
    "id": "preben-elkjaer",
    "nameAr": "بريبن إلكيير",
    "nameEn": "Preben Elkjær",
    "nationalityAr": "دنماركي",
    "nationalityEn": "Danish",
    "clubAr": "فايله (معتزل)",
    "clubEn": "Vejle (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1976-1990",
    "active": false,
    "bioAr": "مهاجم دنماركي سابق وأحد نجوم جيل \"الديناميت الدنماركي\" في الثمانينيات، قاد نادي هيلاس فيرونا الإيطالي للفوز بلقبه الوحيد في تاريخه (الدوري الإيطالي 1985).",
    "bioEn": "Former Danish striker and one of the stars of the 1980s 'Danish Dynamite' generation, who led Italian club Hellas Verona to the only major title in its history (the 1985 Serie A).",
    "achievementsAr": [
      "لقب الدوري الإيطالي 1985 مع هيلاس فيرونا",
      "الكرة البرونزية في كأس العالم 1986",
      "الوصافة على الكرة الذهبية عام 1985",
      "المشاركة في يورو 1984 وكأس العالم 1986 مع الدنمارك"
    ],
    "achievementsEn": [
      "Serie A title 1985 with Hellas Verona",
      "Bronze Ball award at the 1986 World Cup",
      "Ballon d'Or runner-up in 1985",
      "Appeared at Euro 1984 and the 1986 World Cup with Denmark"
    ],
    "clubsHistoryAr": [
      "كولن",
      "لوكيرين",
      "هيلاس فيرونا",
      "فايله"
    ],
    "clubsHistoryEn": [
      "1. FC Köln",
      "Lokeren",
      "Hellas Verona",
      "Vejle"
    ],
    "clubIds": [
      "koln",
      "hellas-verona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بريبن_إلكيير_لارسن",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Preben_Elkj%C3%A6r"
  },
  {
    "id": "emmanuel-petit",
    "nameAr": "إيمانويل بوتي",
    "nameEn": "Emmanuel Petit",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "تشيلسي (معتزل)",
    "clubEn": "Chelsea (retired)",
    "clubId": "chelsea",
    "position": {
      "ar": "لاعب وسط دفاعي",
      "en": "Defensive midfielder"
    },
    "era": "1985-2004",
    "active": false,
    "bioAr": "لاعب وسط فرنسي سابق سجل الهدف الثالث في نهائي كأس العالم 1998 أمام البرازيل، وحقق الثنائية مع أرسنال في أول موسم له بالنادي إلى جانب زميله باتريك فييرا.",
    "bioEn": "Former French midfielder who scored the third goal in the 1998 World Cup final against Brazil, and won the double with Arsenal in his very first season at the club alongside compatriot Patrick Vieira.",
    "achievementsAr": [
      "بطولة كأس العالم 1998 مع فرنسا (سجل الهدف الثالث في النهائي)",
      "بطولة يورو 2000 مع فرنسا",
      "الثنائية (الدوري والكأس) مع أرسنال موسم 1997-1998",
      "لقب كأس أوروبا للناشئين 1988 مع فرنسا (تحت 21 عامًا)"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France (scored the third goal in the final)",
      "UEFA Euro 2000 title with France",
      "Premier League and FA Cup double with Arsenal in 1997-98",
      "UEFA European U-21 Championship 1988 with France"
    ],
    "clubsHistoryAr": [
      "موناكو",
      "أرسنال",
      "برشلونة",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Monaco",
      "Arsenal",
      "Barcelona",
      "Chelsea"
    ],
    "clubIds": [
      "monaco",
      "arsenal",
      "barcelona",
      "chelsea"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إيمانويل_بوتي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Emmanuel_Petit"
  },
  {
    "id": "sol-campbell",
    "nameAr": "سول كامبل",
    "nameEn": "Sol Campbell",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "نيوكاسل يونايتد (معتزل)",
    "clubEn": "Newcastle United (retired)",
    "clubId": "newcastle-united",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "1992-2011",
    "active": false,
    "bioAr": "مدافع إنجليزي سابق وركيزة أساسية في دفاع أرسنال \"اللامنهزم\" موسم 2003-2004، بعد انتقال مثير للجدل من توتنهام هوتسبير غريمه التقليدي.",
    "bioEn": "Former English centre-back and a key pillar of Arsenal's unbeaten 'Invincibles' defence in 2003-04, following a controversial move from bitter rivals Tottenham Hotspur.",
    "achievementsAr": [
      "لقبا الدوري الإنجليزي الممتاز مع أرسنال (بينها موسم اللامنهزمين)",
      "3 ألقاب لكأس الاتحاد الإنجليزي مع أرسنال",
      "أول لاعب يمثل إنجلترا في 6 بطولات كبرى متتالية",
      "المشاركة في نهائي دوري أبطال أوروبا 2006 مع أرسنال (سجل هدف الفريق الوحيد)"
    ],
    "achievementsEn": [
      "Two Premier League titles with Arsenal (including the Invincibles season)",
      "Three FA Cup titles with Arsenal",
      "First player to represent England in six consecutive major tournaments",
      "Appeared in the 2006 UEFA Champions League final with Arsenal (scored the club's only goal)"
    ],
    "clubsHistoryAr": [
      "توتنهام هوتسبير",
      "أرسنال",
      "بورتسموث",
      "نوتس كاونتي",
      "نيوكاسل يونايتد"
    ],
    "clubsHistoryEn": [
      "Tottenham Hotspur",
      "Arsenal",
      "Portsmouth",
      "Notts County",
      "Newcastle United"
    ],
    "clubIds": [
      "tottenham",
      "arsenal",
      "portsmouth",
      "notts-county",
      "newcastle-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/سول_كامبل",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sol_Campbell"
  },
  {
    "id": "jimmy-greaves",
    "nameAr": "جيمي غريفز",
    "nameEn": "Jimmy Greaves",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "وست هام يونايتد (معتزل)",
    "clubEn": "West Ham United (retired)",
    "clubId": "west-ham-united",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1957-1971",
    "active": false,
    "bioAr": "أسطورة إنجليزية ويُعد الهداف التاريخي لكل من توتنهام هوتسبير والدوري الإنجليزي الأول، وأحد أعظم الهدافين في تاريخ اللعبة. كان جزءًا من فريق إنجلترا الفائز بكأس العالم 1966 رغم عدم لعبه في النهائي. توفي عام 2021.",
    "bioEn": "English legend and the all-time record scorer for both Tottenham Hotspur and English top-flight football, regarded as one of the greatest goalscorers in history. He was part of England's 1966 World Cup-winning squad, though he did not play in the final. He passed away in 2021.",
    "achievementsAr": [
      "الهداف التاريخي لتوتنهام هوتسبير (266 هدفًا)",
      "الهداف التاريخي للدوري الإنجليزي الأول (357 هدفًا)",
      "لقب كأس الكؤوس الأوروبية 1963 مع توتنهام",
      "بطولة كأس العالم 1966 مع إنجلترا (ضمن التشكيلة الفائزة)"
    ],
    "achievementsEn": [
      "All-time top scorer for Tottenham Hotspur (266 goals)",
      "All-time top scorer in English top-flight football (357 goals)",
      "European Cup Winners' Cup title 1963 with Tottenham",
      "1966 FIFA World Cup title with England (part of the winning squad)"
    ],
    "clubsHistoryAr": [
      "تشيلسي",
      "ميلان",
      "توتنهام هوتسبير",
      "وست هام يونايتد"
    ],
    "clubsHistoryEn": [
      "Chelsea",
      "AC Milan",
      "Tottenham Hotspur",
      "West Ham United"
    ],
    "clubIds": [
      "chelsea",
      "ac-milan",
      "tottenham",
      "west-ham-united"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جيمي_غريفز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jimmy_Greaves"
  },
  {
    "id": "alexis-mac-allister",
    "nameAr": "أليكسيس ماك أليستر",
    "nameEn": "Alexis Mac Allister",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "لاعب وسط أرجنتيني كان جزءًا أساسيًا من منتخب الأرجنتين الفائز بكأس العالم 2022، وانتقل إلى ليفربول من برايتون صيف 2023 حيث أصبح لاعبًا محوريًا في وسط الملعب.",
    "bioEn": "Argentine midfielder who was a key part of Argentina's 2022 World Cup-winning squad, and moved to Liverpool from Brighton in the summer of 2023, becoming a pivotal midfield player.",
    "achievementsAr": [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "بطولة كوبا أمريكا 2024 مع الأرجنتين",
      "لقب الدوري الإنجليزي الممتاز 2024-2025 مع ليفربول",
      "لقب كأس رابطة المحترفين الإنجليزية مع ليفربول"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup title with Argentina",
      "2024 Copa América title with Argentina",
      "Premier League title 2024-25 with Liverpool",
      "EFL Cup title with Liverpool"
    ],
    "clubsHistoryAr": [
      "أرجنتينوس جونيورز",
      "برايتون",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Argentinos Juniors",
      "Brighton & Hove Albion",
      "Liverpool"
    ],
    "clubIds": [
      "brighton-hove-albion",
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ألكسيس_ماك_أليستير",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alexis_Mac_Allister"
  },
  {
    "id": "enzo-fernandez",
    "nameAr": "إنزو فيرنانديز",
    "nameEn": "Enzo Fernández",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "لاعب وسط أرجنتيني فاز بجائزة أفضل لاعب شاب في كأس العالم 2022 مع الأرجنتين، وانتقل إلى تشيلسي في صفقة قياسية إنجليزية قبل أن ينتقل لاحقًا إلى مانشستر سيتي.",
    "bioEn": "Argentine midfielder who won the Young Player Award at the 2022 World Cup with Argentina, and joined Chelsea in a British-record transfer before later moving to Manchester City.",
    "achievementsAr": [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "جائزة أفضل لاعب شاب في كأس العالم 2022",
      "بطولة كوبا أمريكا 2024 مع الأرجنتين",
      "صفقة قياسية إنجليزية مرتين في مسيرته"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup title with Argentina",
      "FIFA World Cup Young Player Award 2022",
      "2024 Copa América title with Argentina",
      "Set a British transfer record on two separate occasions in his career"
    ],
    "clubsHistoryAr": [
      "ريفر بليت",
      "بنفيكا",
      "تشيلسي",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "River Plate",
      "Benfica",
      "Chelsea",
      "Manchester City"
    ],
    "clubIds": [
      "river-plate",
      "benfica",
      "chelsea",
      "manchester-city"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إينزو_فرنانديز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Enzo_Fern%C3%A1ndez"
  },
  {
    "id": "bruno-guimaraes",
    "nameAr": "برونو غيماريش",
    "nameEn": "Bruno Guimarães",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "لاعب وسط",
      "en": "Central midfielder"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "لاعب وسط برازيلي انضم إلى نيوكاسل يونايتد من ليون في يناير 2022 وقاده كقائد للفريق للفوز بكأس الرابطة الإنجليزية 2025، ثم انتقل إلى أرسنال في 8 أغسطس 2026 مقابل نحو 75 مليون جنيه إسترليني بعقد لأربع سنوات.",
    "bioEn": "Brazilian central midfielder who joined Newcastle United from Lyon in January 2022 and captained the club to the 2025 League Cup, before moving to Arsenal on 8 August 2026 for a reported £75 million on a four-year contract.",
    "achievementsAr": [
      "الميدالية الذهبية الأولمبية 2020 مع منتخب البرازيل الأولمبي",
      "كأس الرابطة الإنجليزية 2024-25 مع نيوكاسل يونايتد (كقائد للفريق)",
      "المشاركة في كأس العالم 2026 مع البرازيل"
    ],
    "achievementsEn": [
      "2020 Olympic gold medal with Brazil's U-23 team",
      "EFL Cup 2024-25 with Newcastle United (as captain)",
      "Appeared at the 2026 FIFA World Cup with Brazil"
    ],
    "clubsHistoryAr": [
      "أتلتيكو بارانينسي",
      "ليون",
      "نيوكاسل يونايتد",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Athletico Paranaense",
      "Lyon",
      "Newcastle United",
      "Arsenal"
    ],
    "clubIds": [
      "lyon",
      "newcastle-united",
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/برونو_غيمارايش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bruno_Guimar%C3%A3es"
  },
  {
    "id": "gabriel-magalhaes",
    "nameAr": "غابرييل ماغالييس",
    "nameEn": "Gabriel Magalhães",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مدافع برازيلي انتقل إلى أرسنال من ليل الفرنسي عام 2020، وأصبح أحد أعمدة دفاع النادي المعروف بقوته البدنية وقدرته في الكرات الهوائية.",
    "bioEn": "Brazilian centre-back who joined Arsenal from French club Lille in 2020, and has become a defensive cornerstone for the club, known for his physical strength and aerial ability.",
    "achievementsAr": [
      "المشاركة في كأس العالم 2026 مع منتخب البرازيل",
      "أحد أبرز مدافعي الدوري الإنجليزي الممتاز في السنوات الأخيرة",
      "لقب الدوري الكرواتي مع دينامو زغرب (إعارة)",
      "ركيزة أساسية في دفاع أرسنال منذ انتقاله"
    ],
    "achievementsEn": [
      "Appeared at the 2026 FIFA World Cup with Brazil",
      "One of the standout Premier League defenders in recent seasons",
      "Croatian league title with Dinamo Zagreb (loan spell)",
      "A key defensive pillar for Arsenal since his arrival"
    ],
    "clubsHistoryAr": [
      "أفاي",
      "ليل",
      "تروا (إعارة)",
      "دينامو زغرب (إعارة)",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Avaí",
      "Lille",
      "Troyes (loan)",
      "Dinamo Zagreb (loan)",
      "Arsenal"
    ],
    "clubIds": [
      "lille",
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/غابرييل_ماغالهايس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gabriel_Magalh%C3%A3es"
  },
  {
    "id": "xavi-simons",
    "nameAr": "تشافي سيمونز",
    "nameEn": "Xavi Simons",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "توتنهام هوتسبير",
    "clubEn": "Tottenham Hotspur",
    "clubId": "tottenham",
    "position": {
      "ar": "لاعب وسط هجومي / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "لاعب وسط هجومي هولندي شاب تخرّج من أكاديمية لا ماسيا لبرشلونة، وحقق نجاحًا كبيرًا مع آر بي لايبزيغ الألماني قبل انتقاله إلى توتنهام هوتسبير.",
    "bioEn": "Young Dutch attacking midfielder who graduated from Barcelona's La Masia academy, and achieved great success with German club RB Leipzig before moving to Tottenham Hotspur.",
    "achievementsAr": [
      "هداف الدوري الهولندي موسم 2022-2023 مع PSV آيندهوفن",
      "لقب الدوري الفرنسي وكأس فرنسا مع باريس سان جيرمان",
      "لقب كأس هولندا ودرع كرويف مع PSV آيندهوفن",
      "لاعب أساسي في منتخب هولندا الشاب"
    ],
    "achievementsEn": [
      "Eredivisie top scorer 2022-23 with PSV Eindhoven",
      "Ligue 1 and Coupe de France titles with Paris Saint-Germain",
      "KNVB Cup and Johan Cruyff Shield with PSV Eindhoven",
      "Key player for the Netherlands national team"
    ],
    "clubsHistoryAr": [
      "باريس سان جيرمان",
      "PSV آيندهوفن",
      "آر بي لايبزيغ",
      "توتنهام هوتسبير"
    ],
    "clubsHistoryEn": [
      "Paris Saint-Germain",
      "PSV Eindhoven",
      "RB Leipzig",
      "Tottenham Hotspur"
    ],
    "clubIds": [
      "paris-saint-germain",
      "psv-eindhoven",
      "rb-leipzig",
      "tottenham"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/تشافي_سيمونز",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Xavi_Simons"
  },
  {
    "id": "michael-olise",
    "nameAr": "مايكل أوليزيه",
    "nameEn": "Michael Olise",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "بايرن ميونخ",
    "clubEn": "Bayern Munich",
    "clubId": "bayern-munich",
    "position": {
      "ar": "جناح / لاعب وسط هجومي",
      "en": "Winger / Attacking midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "جناح فرنسي وُلد في إنجلترا، انتقل إلى بايرن ميونخ من كريستال بالاس عام 2024 وأصبح بسرعة أحد أبرز لاعبي البوندسليغا.",
    "bioEn": "French winger born in England, who moved to Bayern Munich from Crystal Palace in 2024 and quickly became one of the standout players in the Bundesliga.",
    "achievementsAr": [
      "لقب الدوري الألماني مع بايرن ميونخ",
      "جائزة أفضل لاعب في البوندسليغا",
      "الميدالية الفضية الأولمبية 2024 مع فرنسا",
      "المركز الثالث في دوري الأمم الأوروبية 2025 مع فرنسا"
    ],
    "achievementsEn": [
      "Bundesliga title with Bayern Munich",
      "Bundesliga Player of the Season award",
      "2024 Olympic silver medal with France",
      "Third place at the 2025 UEFA Nations League with France"
    ],
    "clubsHistoryAr": [
      "ريدينغ",
      "كريستال بالاس",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Reading",
      "Crystal Palace",
      "Bayern Munich"
    ],
    "clubIds": [
      "crystal-palace",
      "bayern-munich"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/مايكل_أوليسه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Michael_Olise"
  },
  {
    "id": "joao-neves",
    "nameAr": "جواو نيفيش",
    "nameEn": "João Neves",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "لاعب وسط برتغالي شاب تخرّج من أكاديمية بنفيكا، وانتقل إلى باريس سان جيرمان صيف 2024 ليصبح أحد أعمدة وسط الملعب في الفريق.",
    "bioEn": "Young Portuguese midfielder who graduated from Benfica's academy, and moved to Paris Saint-Germain in the summer of 2024, becoming a key midfield presence for the club.",
    "achievementsAr": [
      "لقب الدوري البرتغالي مع بنفيكا",
      "لقب دوري الأمم الأوروبية 2025 مع البرتغال",
      "المشاركة في يورو 2024 مع البرتغال",
      "أحد أفضل لاعبي وسط الملعب الشباب في العالم"
    ],
    "achievementsEn": [
      "Primeira Liga title with Benfica",
      "UEFA Nations League title 2025 with Portugal",
      "Appeared at Euro 2024 with Portugal",
      "Regarded as one of the best young midfielders in the world"
    ],
    "clubsHistoryAr": [
      "بنفيكا",
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Benfica",
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "benfica",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جواو_نيفيز_(لاعب_كرة_قدم)",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jo%C3%A3o_Neves"
  },
  {
    "id": "giorgio-chiellini",
    "nameAr": "جورجيو كييليني",
    "nameEn": "Giorgio Chiellini",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "لوس أنجلوس إف سي (معتزل)",
    "clubEn": "Los Angeles FC (retired)",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2000-2023",
    "active": false,
    "bioAr": "مدافع إيطالي أسطوري وقائد سابق ليوفنتوس، يُعد من أفضل المدافعين في جيله بفضل قوته البدنية وقدرته على المراقبة الفردية. قاد إيطاليا للفوز بلقب بطولة أمم أوروبا 2020، وأنهى مسيرته مع نادي لوس أنجلوس إف سي الأمريكي عام 2023.",
    "bioEn": "Legendary Italian defender and former Juventus captain, regarded as one of the best defenders of his generation for his physical strength and man-marking ability. He captained Italy to the UEFA Euro 2020 title, and ended his career with Los Angeles FC in the United States in 2023.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2020 مع إيطاليا (بصفته قائد الفريق)",
      "9 ألقاب متتالية في الدوري الإيطالي مع يوفنتوس (2012-2020)",
      "5 ألقاب كأس إيطاليا و5 ألقاب كأس السوبر الإيطالي مع يوفنتوس",
      "الوصول إلى نهائي دوري أبطال أوروبا مرتين (2015 و2017) مع يوفنتوس"
    ],
    "achievementsEn": [
      "UEFA Euro 2020 title with Italy (as team captain)",
      "9 consecutive Serie A titles with Juventus (2012-2020)",
      "5 Coppa Italia and 5 Supercoppa Italiana titles with Juventus",
      "Reached the UEFA Champions League final twice (2015 and 2017) with Juventus"
    ],
    "clubsHistoryAr": [
      "ليفورنو",
      "فيورنتينا (إعارة)",
      "يوفنتوس",
      "لوس أنجلوس إف سي"
    ],
    "clubsHistoryEn": [
      "Livorno",
      "Fiorentina (loan)",
      "Juventus",
      "Los Angeles FC"
    ],
    "clubIds": [
      "fiorentina",
      "juventus"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جورجيو_كييليني",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Giorgio_Chiellini"
  },
  {
    "id": "leonardo-bonucci",
    "nameAr": "ليوناردو بونوتشي",
    "nameEn": "Leonardo Bonucci",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "فنربخشة (معتزل)",
    "clubEn": "Fenerbahçe (retired)",
    "clubId": "fenerbahce",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2005-2024",
    "active": false,
    "bioAr": "مدافع إيطالي، شكّل مع جورجيو كييليني وأندريا بارزالي ثلاثيًا دفاعيًا شهيرًا مع يوفنتوس. سجل هدف التعادل في نهائي بطولة أمم أوروبا 2020 التي توّجت بها إيطاليا باللقب، واعتزل كرة القدم في مايو 2024.",
    "bioEn": "Italian centre-back who formed a famous defensive trio with Giorgio Chiellini and Andrea Barzagli at Juventus. He scored the equalizing goal in the UEFA Euro 2020 final, which Italy went on to win, and retired from football in May 2024.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2020 مع إيطاليا (سجل هدف التعادل في النهائي)",
      "عدة ألقاب في الدوري الإيطالي مع يوفنتوس",
      "الوصول إلى نهائي دوري أبطال أوروبا مرتين مع يوفنتوس (2015 و2017)",
      "المركز الثالث في كأس القارات 2013 مع إيطاليا"
    ],
    "achievementsEn": [
      "UEFA Euro 2020 title with Italy (scored the equalizing goal in the final)",
      "Multiple Serie A titles with Juventus",
      "Reached the UEFA Champions League final twice with Juventus (2015 and 2017)",
      "Third place at the 2013 FIFA Confederations Cup with Italy"
    ],
    "clubsHistoryAr": [
      "إنتر ميلان",
      "تريفيزو (إعارة)",
      "بيزا (إعارة)",
      "باري",
      "يوفنتوس",
      "إيه سي ميلان",
      "يوفنتوس",
      "أونيون برلين",
      "فنربخشة"
    ],
    "clubsHistoryEn": [
      "Inter Milan",
      "Treviso (loan)",
      "Pisa (loan)",
      "Bari",
      "Juventus",
      "AC Milan",
      "Juventus",
      "Union Berlin",
      "Fenerbahçe"
    ],
    "clubIds": [
      "inter-milan",
      "juventus",
      "ac-milan",
      "union-berlin",
      "fenerbahce"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ليوناردو_بونوتشي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Leonardo_Bonucci"
  },
  {
    "id": "mario-gotze",
    "nameAr": "ماريو غوتزه",
    "nameEn": "Mario Götze",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "آينتراخت فرانكفورت",
    "clubEn": "Eintracht Frankfurt",
    "clubId": "eintracht-frankfurt",
    "position": {
      "ar": "صانع ألعاب هجومي",
      "en": "Attacking midfielder"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "لاعب وسط هجومي ألماني، اشتهر عالميًا بتسجيله هدف الفوز لألمانيا في الدقائق الأخيرة من الوقت الإضافي بنهائي كأس العالم 2014 أمام الأرجنتين، ليمنح بلاده اللقب الرابع في تاريخها.",
    "bioEn": "German attacking midfielder, best known worldwide for scoring Germany's winning goal in extra time of the 2014 FIFA World Cup final against Argentina, securing his country's fourth world title.",
    "achievementsAr": [
      "بطولة كأس العالم 2014 مع ألمانيا (سجل هدف الفوز في النهائي وحصل على جائزة أفضل لاعب في المباراة)",
      "لقب الدوري الألماني مع بوروسيا دورتموند وبايرن ميونخ",
      "لعب مع بوروسيا دورتموند خلال موسم الثنائية (الدوري وكأس ألمانيا) 2011-2012",
      "اعتزل اللعب الدولي مع منتخب ألمانيا عام 2023"
    ],
    "achievementsEn": [
      "2014 FIFA World Cup title with Germany (scored the winning goal in the final and was named man of the match)",
      "Bundesliga titles with both Borussia Dortmund and Bayern Munich",
      "Part of Borussia Dortmund's domestic double-winning squad (Bundesliga and DFB-Pokal) in 2011-12",
      "Retired from international football with Germany in 2023"
    ],
    "clubsHistoryAr": [
      "بوروسيا دورتموند",
      "بايرن ميونخ",
      "بوروسيا دورتموند",
      "PSV آيندهوفن",
      "آينتراخت فرانكفورت"
    ],
    "clubsHistoryEn": [
      "Borussia Dortmund",
      "Bayern Munich",
      "Borussia Dortmund",
      "PSV Eindhoven",
      "Eintracht Frankfurt"
    ],
    "clubIds": [
      "borussia-dortmund",
      "bayern-munich",
      "psv-eindhoven",
      "eintracht-frankfurt"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماريو_غوتزه",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mario_G%C3%B6tze"
  },
  {
    "id": "raphael-varane",
    "nameAr": "رافائيل فاران",
    "nameEn": "Raphaël Varane",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "مانشستر يونايتد (معتزل)",
    "clubEn": "Manchester United (retired)",
    "clubId": "manchester-united",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2010-2024",
    "active": false,
    "bioAr": "مدافع فرنسي قضى عشر سنوات مع ريال مدريد الإسباني فاز خلالها بأربعة ألقاب دوري أبطال أوروبا، قبل الانتقال إلى مانشستر يونايتد الإنجليزي. توّج مسيرته الدولية بالفوز بكأس العالم 2018 مع فرنسا، واعتزل اللعب في سبتمبر 2024.",
    "bioEn": "French centre-back who spent ten years at Spanish giants Real Madrid, winning four UEFA Champions League titles, before moving to Manchester United. He capped his international career by winning the 2018 FIFA World Cup with France, and retired from playing in September 2024.",
    "achievementsAr": [
      "بطولة كأس العالم 2018 مع فرنسا",
      "4 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "3 ألقاب الدوري الإسباني مع ريال مدريد",
      "لقب دوري الأمم الأوروبية 2021 مع فرنسا"
    ],
    "achievementsEn": [
      "2018 FIFA World Cup title with France",
      "4 UEFA Champions League titles with Real Madrid",
      "3 La Liga titles with Real Madrid",
      "2021 UEFA Nations League title with France"
    ],
    "clubsHistoryAr": [
      "لانس",
      "ريال مدريد",
      "مانشستر يونايتد",
      "كومو"
    ],
    "clubsHistoryEn": [
      "Lens",
      "Real Madrid",
      "Manchester United",
      "Como"
    ],
    "clubIds": [
      "lens",
      "real-madrid",
      "manchester-united",
      "como"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رافائيل_فاران",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rapha%C3%ABl_Varane"
  },
  {
    "id": "olivier-giroud",
    "nameAr": "أوليفييه جيرو",
    "nameEn": "Olivier Giroud",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ليل",
    "clubEn": "Lille",
    "clubId": "lille",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "مهاجم فرنسي فاز بكأس العالم 2018 مع فرنسا، وكان الهداف التاريخي للمنتخب الفرنسي حتى تجاوزه كيليان مبابي عام 2026. لعب لأندية كبرى منها أرسنال وتشيلسي وإيه سي ميلان قبل عودته إلى فرنسا مع نادي ليل.",
    "bioEn": "French striker who won the 2018 FIFA World Cup with France and was the national team's all-time top scorer until being overtaken by Kylian Mbappé in 2026. He played for major clubs including Arsenal, Chelsea and AC Milan before returning to France with Lille.",
    "achievementsAr": [
      "بطولة كأس العالم 2018 مع فرنسا",
      "الهداف التاريخي للمنتخب الفرنسي حتى تجاوزه كيليان مبابي في 2026",
      "دوري أبطال أوروبا 2021 والدوري الأوروبي مع تشيلسي",
      "لقب الدوري الإيطالي 2021-2022 مع إيه سي ميلان"
    ],
    "achievementsEn": [
      "2018 FIFA World Cup title with France",
      "France's all-time top scorer until surpassed by Kylian Mbappé in 2026",
      "UEFA Champions League 2021 and UEFA Europa League titles with Chelsea",
      "Serie A title 2021-22 with AC Milan"
    ],
    "clubsHistoryAr": [
      "غرونوبل",
      "تور",
      "مونبلييه",
      "أرسنال",
      "تشيلسي",
      "إيه سي ميلان",
      "لوس أنجلوس إف سي",
      "ليل"
    ],
    "clubsHistoryEn": [
      "Grenoble",
      "Tours",
      "Montpellier",
      "Arsenal",
      "Chelsea",
      "AC Milan",
      "Los Angeles FC",
      "Lille"
    ],
    "clubIds": [
      "montpellier",
      "arsenal",
      "chelsea",
      "ac-milan",
      "lille"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/أوليفييه_جيرو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Olivier_Giroud"
  },
  {
    "id": "hugo-lloris",
    "nameAr": "هوغو لوريس",
    "nameEn": "Hugo Lloris",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "لوس أنجلوس إف سي",
    "clubEn": "Los Angeles FC",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "حارس مرمى فرنسي وقائد منتخب بلاده، قضى أكثر من عشر سنوات مع توتنهام هوتسبير الإنجليزي. قاد فرنسا لرفع كأس العالم 2018، وهو صاحب الرقم القياسي لأكثر لاعب مشاركةً مع المنتخب الفرنسي.",
    "bioEn": "French goalkeeper and national team captain who spent over a decade at Tottenham Hotspur in England. He captained France to lift the 2018 FIFA World Cup, and holds the record for most appearances for the French national team.",
    "achievementsAr": [
      "بطولة كأس العالم 2018 مع فرنسا (بصفته قائد الفريق)",
      "صاحب الرقم القياسي لعدد المشاركات مع منتخب فرنسا (145 مباراة)",
      "لقب دوري الأمم الأوروبية 2021 مع فرنسا",
      "الوصول إلى نهائي بطولة أمم أوروبا 2016 مع فرنسا"
    ],
    "achievementsEn": [
      "2018 FIFA World Cup title with France (as team captain)",
      "France's all-time most-capped player (145 appearances)",
      "2021 UEFA Nations League title with France",
      "Runner-up at UEFA Euro 2016 with France"
    ],
    "clubsHistoryAr": [
      "نيس",
      "ليون",
      "توتنهام هوتسبير",
      "لوس أنجلوس إف سي"
    ],
    "clubsHistoryEn": [
      "Nice",
      "Lyon",
      "Tottenham Hotspur",
      "Los Angeles FC"
    ],
    "clubIds": [
      "nice",
      "lyon",
      "tottenham"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/هوغو_لوريس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hugo_Lloris"
  },
  {
    "id": "diogo-jota",
    "nameAr": "ديوغو جوتا",
    "nameEn": "Diogo Jota",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "ليفربول (متوفى)",
    "clubEn": "Liverpool (deceased)",
    "clubId": "liverpool",
    "position": {
      "ar": "مهاجم / جناح",
      "en": "Forward / Winger"
    },
    "era": "2013-2025",
    "active": false,
    "bioAr": "مهاجم برتغالي لعب لليفربول الإنجليزي منذ عام 2020، وساهم في فوز الفريق بألقاب عدة من بينها الدوري الإنجليزي الممتاز موسم 2024-2025. توفي في حادث سيارة مأساوي في إسبانيا بتاريخ 3 يوليو 2025 برفقة شقيقه أندريه سيلفا، بعد أيام قليلة فقط من زواجه.",
    "bioEn": "Portuguese forward who played for Liverpool from 2020, helping the club win several honours including the 2024-25 Premier League title. He died in a tragic car accident in Spain on 3 July 2025, along with his brother André Silva, just days after his wedding.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي الممتاز 2024-2025 مع ليفربول",
      "كأس رابطة المحترفين الإنجليزية وكأس الاتحاد الإنجليزي مع ليفربول",
      "لقب دوري الأمم الأوروبية 2019 مع البرتغال",
      "لاعب أساسي في هجوم ليفربول منذ انضمامه من وولفرهامبتون عام 2020"
    ],
    "achievementsEn": [
      "Premier League title 2024-25 with Liverpool",
      "EFL Cup and FA Cup titles with Liverpool",
      "UEFA Nations League title 2019 with Portugal",
      "Key attacking player for Liverpool since joining from Wolverhampton Wanderers in 2020"
    ],
    "clubsHistoryAr": [
      "باسوش دي فيريرا",
      "أتلتيكو مدريد",
      "بورتو (إعارة)",
      "وولفرهامبتون واندررز",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Paços de Ferreira",
      "Atlético Madrid",
      "Porto (loan)",
      "Wolverhampton Wanderers",
      "Liverpool"
    ],
    "clubIds": [
      "atletico-madrid",
      "porto",
      "wolverhampton-wanderers",
      "liverpool"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ديوغو_جوتا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Diogo_Jota"
  },
  {
    "id": "marco-reus",
    "nameAr": "ماركو رويس",
    "nameEn": "Marco Reus",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "لوس أنجلوس غالاكسي",
    "clubEn": "LA Galaxy",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط هجومي / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2006-الآن",
    "active": true,
    "bioAr": "لاعب وسط هجومي ألماني ارتبط اسمه طويلًا بنادي بوروسيا دورتموند الذي قاده كقائد لسنوات، قبل الانتقال إلى الدوري الأمريكي للمحترفين مع لوس أنجلوس غالاكسي عام 2024. يُعرف بتعدد مراكزه وسرعته ومهارته الفنية.",
    "bioEn": "German attacking midfielder long associated with Borussia Dortmund, whom he captained for several years, before moving to Major League Soccer with LA Galaxy in 2024. Known for his versatility, pace and technical ability.",
    "achievementsAr": [
      "المركز الثالث في بطولة أمم أوروبا 2012 مع ألمانيا",
      "قائد بوروسيا دورتموند لسنوات عديدة",
      "أحد أبرز لاعبي الدوري الألماني (البوندسليغا) خلال العقد الماضي",
      "الانتقال إلى الدوري الأمريكي مع لوس أنجلوس غالاكسي عام 2024"
    ],
    "achievementsEn": [
      "Third place at UEFA Euro 2012 with Germany",
      "Longtime captain of Borussia Dortmund",
      "One of the standout Bundesliga players of the past decade",
      "Moved to Major League Soccer with LA Galaxy in 2024"
    ],
    "clubsHistoryAr": [
      "روت فايس آلن",
      "بوروسيا مونشنغلادباخ",
      "بوروسيا دورتموند",
      "لوس أنجلوس غالاكسي"
    ],
    "clubsHistoryEn": [
      "Rot Weiss Ahlen",
      "Borussia Mönchengladbach",
      "Borussia Dortmund",
      "LA Galaxy"
    ],
    "clubIds": [
      "borussia-monchengladbach",
      "borussia-dortmund"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ماركو_رويس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marco_Reus"
  },
  {
    "id": "pepe",
    "nameAr": "بيبي",
    "nameEn": "Pepe",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "بورتو (معتزل)",
    "clubEn": "Porto (retired)",
    "clubId": "porto",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2001-2024",
    "active": false,
    "bioAr": "مدافع برتغالي من مواليد البرازيل، يُعد من أفضل المدافعين في جيله. قضى عشر سنوات مع ريال مدريد الإسباني فاز خلالها بثلاثة ألقاب دوري أبطال أوروبا، وتوّج مع البرتغال بلقب بطولة أمم أوروبا 2016. اعتزل اللعب عام 2024 بعد مشاركته في بطولة أمم أوروبا في العام نفسه كأكبر لاعب سنًا في تاريخ البطولة.",
    "bioEn": "Portuguese centre-back, born in Brazil, regarded as one of the best defenders of his generation. He spent ten years at Real Madrid, winning three UEFA Champions League titles, and won the UEFA Euro 2016 title with Portugal. He retired in 2024 after appearing at that year's European Championship as the oldest player in the tournament's history.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2016 مع البرتغال (أفضل لاعب في المباراة النهائية)",
      "3 ألقاب دوري أبطال أوروبا و3 ألقاب الدوري الإسباني مع ريال مدريد",
      "لقب دوري الأمم الأوروبية 2019 مع البرتغال",
      "4 ألقاب الدوري البرتغالي مع بورتو في فترتين مختلفتين"
    ],
    "achievementsEn": [
      "UEFA Euro 2016 title with Portugal (Man of the Match in the final)",
      "3 UEFA Champions League titles and 3 La Liga titles with Real Madrid",
      "2019 UEFA Nations League title with Portugal",
      "4 Primeira Liga titles with Porto across two spells"
    ],
    "clubsHistoryAr": [
      "ماريتيمو",
      "بورتو",
      "ريال مدريد",
      "بشكتاش",
      "بورتو"
    ],
    "clubsHistoryEn": [
      "Marítimo",
      "Porto",
      "Real Madrid",
      "Beşiktaş",
      "Porto"
    ],
    "clubIds": [
      "porto",
      "real-madrid",
      "besiktas"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/بيبي_(لاعب_كرة_قدم)",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pepe_(footballer,_born_1983)"
  },
  {
    "id": "ederson",
    "nameAr": "إيدرسون",
    "nameEn": "Ederson",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "فنربخشة",
    "clubEn": "Fenerbahçe",
    "clubId": "fenerbahce",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "حارس مرمى برازيلي يُعد من أبرز حراس المرمى في جيله بفضل مهاراته في توزيع الكرة من الخلف. أمضى ثماني سنوات مع مانشستر سيتي الإنجليزي فاز خلالها بألقاب عديدة من بينها دوري أبطال أوروبا 2023، قبل الانتقال إلى فنربخشة التركي عام 2025.",
    "bioEn": "Brazilian goalkeeper regarded as one of the finest of his generation for his distribution skills from the back. He spent eight years at Manchester City in England, winning numerous honours including the 2023 UEFA Champions League, before moving to Turkish club Fenerbahçe in 2025.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2023 مع مانشستر سيتي (ضمن ثلاثية تاريخية)",
      "6 ألقاب في الدوري الإنجليزي الممتاز مع مانشستر سيتي",
      "جائزة القفاز الذهبي في الدوري الإنجليزي 3 مرات متتالية (2020-2022)",
      "لقب كوبا أمريكا 2019 مع البرازيل"
    ],
    "achievementsEn": [
      "2023 UEFA Champions League title with Manchester City (part of a historic treble)",
      "6 Premier League titles with Manchester City",
      "Premier League Golden Glove three consecutive times (2020-2022)",
      "2019 Copa América title with Brazil"
    ],
    "clubsHistoryAr": [
      "ريبيراو",
      "ريو آفي",
      "بنفيكا",
      "مانشستر سيتي",
      "فنربخشة"
    ],
    "clubsHistoryEn": [
      "Ribeirão",
      "Rio Ave",
      "Benfica",
      "Manchester City",
      "Fenerbahçe"
    ],
    "clubIds": [
      "benfica",
      "manchester-city",
      "fenerbahce"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/إيدرسون_مورايس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ederson_(footballer,_born_1993)"
  },
  {
    "id": "omar-marmoush",
    "nameAr": "عمر مرموش",
    "nameEn": "Omar Marmoush",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "توتنهام هوتسبير (معار من مانشستر سيتي)",
    "clubEn": "Tottenham Hotspur (on loan from Manchester City)",
    "clubId": "tottenham",
    "position": {
      "ar": "مهاجم / جناح أيسر",
      "en": "Forward / Left winger"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مهاجم مصري بدأ مسيرته مع نادي وادي دجلة قبل انتقاله لألمانيا، وحقق طفرة كبيرة مع آينتراخت فرانكفورت في موسم 2024-2025 قبل أن ينتقل إلى مانشستر سيتي الإنجليزي في يناير 2025 مقابل مبلغ كبير، ليصبح أول لاعب مصري في تاريخ النادي.",
    "bioEn": "Egyptian forward who began his career with Wadi Degla before moving to Germany, and had a breakout 2024-25 season with Eintracht Frankfurt before joining Manchester City in January 2025 for a substantial fee, becoming the club's first-ever Egyptian player.",
    "achievementsAr": [
      "الانتقال إلى مانشستر سيتي في يناير 2025 مقابل صفقة كبيرة من آينتراخت فرانكفورت",
      "تسجيل 15 هدفًا في 17 مباراة بالدوري الألماني في النصف الأول من موسم 2024-2025 مع فرانكفورت",
      "أول لاعب مصري يمثل نادي مانشستر سيتي",
      "لاعب أساسي في منتخب مصر"
    ],
    "achievementsEn": [
      "Transferred to Manchester City in January 2025 in a big-money deal from Eintracht Frankfurt",
      "Scored 15 goals in 17 Bundesliga games in the first half of the 2024-25 season with Frankfurt",
      "First Egyptian player to represent Manchester City",
      "Key player for the Egypt national team"
    ],
    "clubsHistoryAr": [
      "وادي دجلة",
      "فولفسبورغ",
      "سانت باولي (إعارة)",
      "شتوتغارت (إعارة)",
      "آينتراخت فرانكفورت",
      "مانشستر سيتي",
      "توتنهام هوتسبير (إعارة)"
    ],
    "clubsHistoryEn": [
      "Wadi Degla",
      "VfL Wolfsburg",
      "St. Pauli (loan)",
      "Stuttgart (loan)",
      "Eintracht Frankfurt",
      "Manchester City",
      "Tottenham Hotspur (loan)"
    ],
    "clubIds": [
      "vfl-wolfsburg",
      "st-pauli",
      "vfb-stuttgart",
      "eintracht-frankfurt",
      "manchester-city",
      "tottenham"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/عمر_مرموش",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Omar_Marmoush"
  },
  {
    "id": "rodrigo-de-paul",
    "nameAr": "رودريغو دي بول",
    "nameEn": "Rodrigo De Paul",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "إنتر ميامي",
    "clubEn": "Inter Miami",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "لاعب وسط أرجنتيني يُعرف بأسلوبه القتالي وطاقته العالية، لعب دورًا محوريًا في منتصف ملعب الأرجنتين إلى جانب ليونيل ميسي، ولُقّب إعلاميًا بـ'حارس ميسي الشخصي'. انضم إلى إنتر ميامي الأمريكي عام 2025 ليلعب مجددًا إلى جانب ميسي.",
    "bioEn": "Argentine midfielder known for his combative style and high work rate, he played a pivotal role in Argentina's midfield alongside Lionel Messi and was dubbed Messi's 'bodyguard' by the media. He joined Inter Miami in the United States in 2025 to play alongside Messi once again.",
    "achievementsAr": [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "لقبا كوبا أمريكا 2021 و2024 مع الأرجنتين",
      "لقب الدوري الإسباني 2020-2021 مع أتلتيكو مدريد",
      "الوصول إلى نهائي كأس العالم 2026 مع الأرجنتين (وصيف البطل)"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup title with Argentina",
      "2021 and 2024 Copa América titles with Argentina",
      "2020-21 La Liga title with Atlético Madrid",
      "Runner-up at the 2026 FIFA World Cup with Argentina"
    ],
    "clubsHistoryAr": [
      "راسينغ كلوب",
      "فالنسيا",
      "راسينغ كلوب (إعارة)",
      "أودينيزي",
      "أتلتيكو مدريد",
      "إنتر ميامي"
    ],
    "clubsHistoryEn": [
      "Racing Club",
      "Valencia",
      "Racing Club (loan)",
      "Udinese",
      "Atlético Madrid",
      "Inter Miami"
    ],
    "clubIds": [
      "racing-club",
      "valencia",
      "udinese",
      "atletico-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/رودريغو_دي_بول",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rodrigo_De_Paul"
  },
  {
    "id": "cristian-romero",
    "nameAr": "كريستيان روميرو",
    "nameEn": "Cristian Romero",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مدافع أرجنتيني يُعرف بأسلوبه القتالي والهجومي في الدفاع، برز مع أتالانتا قبل انتقاله إلى توتنهام هوتسبير الذي قاده كقائد في موسم 2025-2026. انضم إلى أتلتيكو مدريد في 15 أغسطس 2026 بعقد حتى يونيو 2031. شكّل ركيزة في دفاع الأرجنتين الفائزة بكأس العالم 2022 والوصيفة في 2026.",
    "bioEn": "Argentine centre-back known for his aggressive, front-foot defending, who rose to prominence with Atalanta before moving to Tottenham Hotspur, whom he captained in 2025-26. He joined Atlético Madrid on 15 August 2026 on a contract until June 2031. He was a defensive cornerstone for Argentina, World Cup winners in 2022 and runners-up in 2026.",
    "achievementsAr": [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "لقبا كوبا أمريكا 2021 و2024 مع الأرجنتين",
      "جائزة أفضل مدافع في الدوري الإيطالي موسم 2020-2021 مع أتالانتا",
      "لقب الدوري الأوروبي 2024-2025 مع توتنهام هوتسبير",
      "وصافة كأس العالم 2026 مع الأرجنتين",
      "أفضل لاعب في نهائي الدوري الأوروبي 2025 مع توتنهام"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup title with Argentina",
      "2021 and 2024 Copa América titles with Argentina",
      "Serie A Best Defender award for the 2020-21 season with Atalanta",
      "2024-25 UEFA Europa League title with Tottenham Hotspur",
      "2026 FIFA World Cup runner-up with Argentina",
      "Player of the match in the 2025 Europa League final with Tottenham"
    ],
    "clubsHistoryAr": [
      "بلغرانو",
      "جنوى",
      "يوفنتوس",
      "جنوى (إعارة)",
      "أتالانتا (إعارة)",
      "توتنهام هوتسبير",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Belgrano",
      "Genoa",
      "Juventus",
      "Genoa (loan)",
      "Atalanta (loan)",
      "Tottenham Hotspur",
      "Atlético Madrid"
    ],
    "clubIds": [
      "genoa",
      "juventus",
      "atalanta",
      "tottenham",
      "atletico-madrid"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كريستيان_روميرو",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Cristian_Romero"
  },
  {
    "id": "jordi-alba",
    "nameAr": "خوردي ألبا",
    "nameEn": "Jordi Alba",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "إنتر ميامي (معتزل)",
    "clubEn": "Inter Miami (retired)",
    "clubId": null,
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2007-2025",
    "active": false,
    "bioAr": "ظهير أيسر إسباني، يُعد من أفضل الظهيرين في جيله. قضى أحد عشر عامًا مع برشلونة فاز خلالها بلقب دوري أبطال أوروبا وستة ألقاب في الدوري الإسباني، وشكّل ثنائيًا هجوميًا فعالًا مع ليونيل ميسي على الجهة اليسرى. اعتزل اللعب في ديسمبر 2025 بعد فوزه بكأس الدوري الأمريكي (MLS) مع إنتر ميامي في آخر مباراة له.",
    "bioEn": "Spanish left-back regarded as one of the best full-backs of his generation. He spent eleven years at Barcelona, winning the UEFA Champions League and six La Liga titles, and formed an effective attacking partnership with Lionel Messi down the left flank. He retired in December 2025 after winning the MLS Cup with Inter Miami in his final match.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2012 مع إسبانيا",
      "لقب دوري أبطال أوروبا 2014-2015 مع برشلونة",
      "6 ألقاب في الدوري الإسباني و5 ألقاب كأس ملك إسبانيا مع برشلونة",
      "لقب دوري الأمم الأوروبية 2023 مع إسبانيا"
    ],
    "achievementsEn": [
      "UEFA Euro 2012 title with Spain",
      "2014-15 UEFA Champions League title with Barcelona",
      "6 La Liga titles and 5 Copa del Rey titles with Barcelona",
      "2023 UEFA Nations League title with Spain"
    ],
    "clubsHistoryAr": [
      "كورنيا",
      "فالنسيا",
      "برشلونة",
      "إنتر ميامي"
    ],
    "clubsHistoryEn": [
      "Cornellà",
      "Valencia",
      "Barcelona",
      "Inter Miami"
    ],
    "clubIds": [
      "valencia",
      "barcelona"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/جوردي_ألبا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jordi_Alba"
  },
  {
    "id": "alvaro-morata",
    "nameAr": "ألفارو موراتا",
    "nameEn": "Álvaro Morata",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "إيه سي ميلان",
    "clubEn": "AC Milan",
    "clubId": "ac-milan",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2008-الآن",
    "active": true,
    "bioAr": "مهاجم إسباني وقائد منتخب بلاده، قاد إسبانيا للفوز بلقب بطولة أمم أوروبا 2024. لعب لأندية كبرى منها ريال مدريد ويوفنتوس وتشيلسي وأتلتيكو مدريد قبل انتقاله إلى إيه سي ميلان الإيطالي عام 2024.",
    "bioEn": "Spanish striker and national team captain who led Spain to the UEFA Euro 2024 title. He has played for major clubs including Real Madrid, Juventus, Chelsea and Atlético Madrid before joining AC Milan in 2024.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2024 مع إسبانيا (بصفته قائد الفريق)",
      "رابع أفضل هداف تاريخي لمنتخب إسبانيا",
      "لقب دوري الأمم الأوروبية 2023 مع إسبانيا",
      "ألقاب في الدوري الإسباني والإيطالي مع ريال مدريد ويوفنتوس وأتلتيكو مدريد"
    ],
    "achievementsEn": [
      "UEFA Euro 2024 title with Spain (as team captain)",
      "Spain's fourth-highest all-time goalscorer",
      "2023 UEFA Nations League title with Spain",
      "League titles in Spain and Italy with Real Madrid, Juventus, and Atlético Madrid"
    ],
    "clubsHistoryAr": [
      "ريال مدريد",
      "يوفنتوس",
      "تشيلسي",
      "أتلتيكو مدريد",
      "إيه سي ميلان"
    ],
    "clubsHistoryEn": [
      "Real Madrid",
      "Juventus",
      "Chelsea",
      "Atlético Madrid",
      "AC Milan"
    ],
    "clubIds": [
      "real-madrid",
      "juventus",
      "chelsea",
      "atletico-madrid",
      "ac-milan"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ألفارو_موراتا",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/%C3%81lvaro_Morata"
  },
  {
    "id": "ciro-immobile",
    "nameAr": "تشيرو إيموبيلي",
    "nameEn": "Ciro Immobile",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2009-2026",
    "active": false,
    "bioAr": "مهاجم إيطالي يُعد من أغزر الهدافين في جيله، وهو الهداف التاريخي لنادي لاتسيو. توّج مع إيطاليا بلقب بطولة أمم أوروبا 2020، وفاز بجائزة هداف الدوري الإيطالي أربع مرات وحذاء أوروبا الذهبي موسم 2019-2020. اعتزل اللعب عام 2026 بعد فترة قصيرة مع باريس إف سي الفرنسي.",
    "bioEn": "Italian striker regarded as one of the most prolific goalscorers of his generation, and the all-time top scorer for Lazio. He won the UEFA Euro 2020 title with Italy, and was Serie A's top scorer four times, also winning the European Golden Shoe in 2019-20. He retired in 2026 after a brief spell with French club Paris FC.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2020 مع إيطاليا",
      "هداف تاريخي لنادي لاتسيو",
      "هداف الدوري الإيطالي 4 مرات والحذاء الذهبي الأوروبي موسم 2019-2020 (36 هدفًا)",
      "كأس إيطاليا وكأسا السوبر الإيطالي مع لاتسيو"
    ],
    "achievementsEn": [
      "UEFA Euro 2020 title with Italy",
      "Lazio's all-time leading goalscorer",
      "Serie A top scorer four times and European Golden Shoe in 2019-20 (36 goals)",
      "Coppa Italia and two Supercoppa Italiana titles with Lazio"
    ],
    "clubsHistoryAr": [
      "يوفنتوس",
      "بيسكارا (إعارة)",
      "جنوى",
      "تورينو",
      "بوروسيا دورتموند",
      "إشبيلية (إعارة)",
      "تورينو (إعارة)",
      "لاتسيو",
      "باريس إف سي"
    ],
    "clubsHistoryEn": [
      "Juventus",
      "Pescara (loan)",
      "Genoa",
      "Torino",
      "Borussia Dortmund",
      "Sevilla (loan)",
      "Torino (loan)",
      "Lazio",
      "Paris FC"
    ],
    "clubIds": [
      "juventus",
      "genoa",
      "torino",
      "borussia-dortmund",
      "sevilla",
      "lazio",
      "paris-fc"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/تشيرو_إيموبيلي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ciro_Immobile"
  },
  {
    "id": "mikel-oyarzabal",
    "nameAr": "ميكل أويارزابال",
    "nameEn": "Mikel Oyarzabal",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ريال سوسيداد",
    "clubEn": "Real Sociedad",
    "clubId": "real-sociedad",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مهاجم إسباني وقائد نادي ريال سوسيداد الذي لم يغادره طوال مسيرته الاحترافية. سجل هدف الفوز في نهائي بطولة أمم أوروبا 2024 أمام إنجلترا، وتوّج مع إسبانيا بلقب كأس العالم 2026.",
    "bioEn": "Spanish forward and captain of Real Sociedad, whom he has never left throughout his professional career. He scored the winning goal in the UEFA Euro 2024 final against England, and won the 2026 FIFA World Cup with Spain.",
    "achievementsAr": [
      "بطولة كأس العالم 2026 مع إسبانيا",
      "بطولة أمم أوروبا 2024 مع إسبانيا (سجل هدف الفوز في النهائي)",
      "لقب دوري الأمم الأوروبية 2023 مع إسبانيا",
      "لقبا كأس ملك إسبانيا مع ريال سوسيداد (2019-2020 و2025-2026)"
    ],
    "achievementsEn": [
      "2026 FIFA World Cup title with Spain",
      "UEFA Euro 2024 title with Spain (scored the winning goal in the final)",
      "2023 UEFA Nations League title with Spain",
      "Copa del Rey titles with Real Sociedad (2019-20 and 2025-26)"
    ],
    "clubsHistoryAr": [
      "ريال سوسيداد"
    ],
    "clubsHistoryEn": [
      "Real Sociedad"
    ],
    "clubIds": [
      "real-sociedad"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/ميكيل_أويارزابال",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mikel_Oyarzabal"
  },
  {
    "id": "kai-havertz",
    "nameAr": "كاي هافرتس",
    "nameEn": "Kai Havertz",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "مهاجم / صانع ألعاب هجومي",
      "en": "Forward / Attacking midfielder"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "لاعب ألماني متعدد المراكز، سجل هدف الفوز الوحيد لتشيلسي في نهائي دوري أبطال أوروبا 2021 أمام مانشستر سيتي. انتقل إلى أرسنال الإنجليزي عام 2023 وفاز معه بلقب الدوري الإنجليزي الممتاز موسم 2025-2026.",
    "bioEn": "Versatile German player who scored Chelsea's only goal in the 2021 UEFA Champions League final against Manchester City. He moved to Arsenal in England in 2023 and won the Premier League title with the club in the 2025-26 season.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2021 مع تشيلسي (سجل هدف الفوز في النهائي)",
      "كأس السوبر الأوروبي وكأس العالم للأندية 2021 مع تشيلسي",
      "لقب الدوري الإنجليزي الممتاز 2025-2026 مع أرسنال",
      "أصغر لاعب يسجل ويصل إلى 100 مشاركة في الدوري الألماني، مع باير ليفركوزن"
    ],
    "achievementsEn": [
      "2021 UEFA Champions League title with Chelsea (scored the winning goal in the final)",
      "UEFA Super Cup and FIFA Club World Cup 2021 with Chelsea",
      "Premier League title 2025-26 with Arsenal",
      "Youngest player to score and to reach 100 Bundesliga appearances, with Bayer Leverkusen"
    ],
    "clubsHistoryAr": [
      "باير ليفركوزن",
      "تشيلسي",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Bayer Leverkusen",
      "Chelsea",
      "Arsenal"
    ],
    "clubIds": [
      "bayer-leverkusen",
      "chelsea",
      "arsenal"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/كاي_هافيرتس",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kai_Havertz"
  },
  {
    "id": "nicolas-otamendi",
    "nameAr": "نيكولاس أوتامندي",
    "nameEn": "Nicolás Otamendi",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "ريفر بليت",
    "clubEn": "River Plate",
    "clubId": "river-plate",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2008-الآن",
    "active": true,
    "bioAr": "مدافع أرجنتيني معروف بقوته البدنية وشراسته الدفاعية، لُقّب بـ'الجنرال'. لعب لأندية كبرى منها بورتو ومانشستر سيتي وبنفيكا، وشكّل ركيزة أساسية في دفاع الأرجنتين خلال فوزها بكأس العالم 2022، قبل أن يعتزل اللعب الدولي ويعود إلى بلاده لينضم إلى ريفر بليت.",
    "bioEn": "Argentine centre-back known for his physicality and combative defending, nicknamed 'El General'. He has played for major clubs including Porto, Manchester City and Benfica, and was a defensive cornerstone for Argentina during their 2022 World Cup triumph, before retiring from international football and returning home to join River Plate.",
    "achievementsAr": [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "لقبا كوبا أمريكا 2021 و2024 مع الأرجنتين",
      "لقبا الدوري الإنجليزي الممتاز مع مانشستر سيتي (2018 و2019)",
      "ألقاب في الدوري البرتغالي مع بورتو وبنفيكا، ولقب الدوري الأوروبي 2010-2011 مع بورتو"
    ],
    "achievementsEn": [
      "2022 FIFA World Cup title with Argentina",
      "2021 and 2024 Copa América titles with Argentina",
      "Premier League titles with Manchester City (2018 and 2019)",
      "Primeira Liga titles with Porto and Benfica, and the 2010-11 UEFA Europa League with Porto"
    ],
    "clubsHistoryAr": [
      "فيليز سارسفيلد",
      "بورتو",
      "فالنسيا",
      "أتلتيكو مينيرو (إعارة)",
      "مانشستر سيتي",
      "بنفيكا",
      "ريفر بليت"
    ],
    "clubsHistoryEn": [
      "Vélez Sarsfield",
      "Porto",
      "Valencia",
      "Atlético Mineiro (loan)",
      "Manchester City",
      "Benfica",
      "River Plate"
    ],
    "clubIds": [
      "porto",
      "valencia",
      "manchester-city",
      "benfica",
      "river-plate"
    ],
    "wikiUrlAr": "https://ar.wikipedia.org/wiki/نيكولاس_أوتامندي",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Nicol%C3%A1s_Otamendi"
  },
  {
    "id": "francisco-gento",
    "nameAr": "فرانسيسكو خينتو",
    "nameEn": "Francisco Gento",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ريال مدريد (معتزل)",
    "clubEn": "Real Madrid (retired)",
    "clubId": "real-madrid",
    "position": {
      "ar": "جناح أيسر",
      "en": "Outside left / Winger"
    },
    "era": "1952-1971",
    "active": false,
    "bioAr": "أسطورة إسبانية وجناح أيسر لريال مدريد، وهو اللاعب الوحيد في تاريخ كرة القدم الذي فاز بكأس أوروبا للأندية البطلة ست مرات. توفي عام 2022.",
    "bioEn": "Spanish legend and outside-left for Real Madrid, the only player in football history to win the European Cup six times. He passed away in 2022.",
    "achievementsAr": [
      "6 ألقاب كأس أوروبا للأندية البطلة مع ريال مدريد (رقم قياسي)",
      "12 لقبًا في الدوري الإسباني مع ريال مدريد",
      "لقب كأس إسبانيا مرتين مع ريال مدريد",
      "المشاركة في كأسي عالم مع إسبانيا (1962، 1966)"
    ],
    "achievementsEn": [
      "6 European Cup titles with Real Madrid (record)",
      "12 La Liga titles with Real Madrid",
      "Two Copa del Rey titles with Real Madrid",
      "Appeared at two FIFA World Cups with Spain (1962, 1966)"
    ],
    "clubsHistoryAr": [
      "راسينغ سانتاندير",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Racing Santander",
      "Real Madrid"
    ],
    "clubIds": [
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Paco_Gento"
  },
  {
    "id": "giacinto-facchetti",
    "nameAr": "جاتشينتو فاكيتي",
    "nameEn": "Giacinto Facchetti",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "إنتر ميلان (معتزل)",
    "clubEn": "Inter Milan (retired)",
    "clubId": "inter-milan",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "1960-1978",
    "active": false,
    "bioAr": "أسطورة إيطالية وظهير أيسر يُعد من أوائل المدافعين الهجوميين البارزين في تاريخ اللعبة، قضى كل مسيرته مع إنتر ميلان وكان قائد فريق 'الإنتر الكبير' الذي هيمن على الكالتشيو وأوروبا في الستينيات. توفي عام 2006.",
    "bioEn": "Italian legend and left-back regarded as one of the first prominent attacking full-backs in the history of the game. He spent his entire career at Inter Milan and captained the 'Grande Inter' side that dominated Italian and European football in the 1960s. He passed away in 2006.",
    "achievementsAr": [
      "لقب بطولة أمم أوروبا 1968 مع إيطاليا (قائدًا)",
      "لقبا كأس أوروبا للأندية البطلة مع إنتر ميلان (1964، 1965)",
      "4 ألقاب في الدوري الإيطالي مع إنتر ميلان",
      "الوصول إلى نهائي كأس العالم 1970 مع إيطاليا"
    ],
    "achievementsEn": [
      "UEFA European Championship title 1968 with Italy (as captain)",
      "Two European Cup titles with Inter Milan (1964, 1965)",
      "4 Serie A titles with Inter Milan",
      "Reached the 1970 FIFA World Cup final with Italy"
    ],
    "clubsHistoryAr": [
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Inter Milan"
    ],
    "clubIds": [
      "inter-milan"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Giacinto_Facchetti"
  },
  {
    "id": "uwe-seeler",
    "nameAr": "أوفه زيلر",
    "nameEn": "Uwe Seeler",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "هامبورغر إس في (معتزل)",
    "clubEn": "Hamburger SV (retired)",
    "clubId": "hamburger-sv",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1953-1972",
    "active": false,
    "bioAr": "أسطورة ألمانية ومهاجم ظل وفيًا لناديه هامبورغر إس في طوال مسيرته، ويُعد الهداف التاريخي للنادي، كما قاد ألمانيا الغربية إلى نهائي كأس العالم 1966. توفي عام 2022.",
    "bioEn": "German legend and striker who remained loyal to Hamburger SV throughout his career and is the club's all-time top scorer. He captained West Germany to the 1966 FIFA World Cup final. He passed away in 2022.",
    "achievementsAr": [
      "الوصول إلى نهائي كأس العالم 1966 مع ألمانيا الغربية (قائدًا)",
      "المركز الثالث في كأس العالم 1970 مع ألمانيا الغربية",
      "لقب الدوري الألماني 1960 مع هامبورغر إس في",
      "هداف الدوري الألماني في موسمه الأول 1963-1964"
    ],
    "achievementsEn": [
      "Reached the 1966 FIFA World Cup final with West Germany (as captain)",
      "Third place at the 1970 FIFA World Cup with West Germany",
      "German championship title 1960 with Hamburger SV",
      "Top scorer of the Bundesliga's inaugural 1963-64 season"
    ],
    "clubsHistoryAr": [
      "هامبورغر إس في"
    ],
    "clubsHistoryEn": [
      "Hamburger SV"
    ],
    "clubIds": [
      "hamburger-sv"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Uwe_Seeler"
  },
  {
    "id": "michael-essien",
    "nameAr": "مايكل إيسيان",
    "nameEn": "Michael Essien",
    "nationalityAr": "غاني",
    "nationalityEn": "Ghanaian",
    "clubAr": "نوردسيلاند (مدرب مساعد)",
    "clubEn": "Nordsjælland (assistant coach)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2000-2020",
    "active": false,
    "bioAr": "لاعب وسط غاني سابق عُرف بقوته البدنية وتغطيته الواسعة للملعب، أمضى أفضل سنوات مسيرته مع تشيلسي الإنجليزي وفاز معه بألقاب عديدة، وانتقل لاحقًا في إعارة إلى ريال مدريد.",
    "bioEn": "Former Ghanaian midfielder known for his physical strength and box-to-box energy, who spent the best years of his career at Chelsea, winning numerous honours, and later had a loan spell at Real Madrid.",
    "achievementsAr": [
      "لقبا دوري إنجليزي ممتاز مع تشيلسي (2005-2006 و2009-2010)",
      "دوري أبطال أوروبا 2011-2012 مع تشيلسي",
      "4 ألقاب كأس الاتحاد الإنجليزي مع تشيلسي (2007، 2009، 2010، 2012)",
      "لقبا دوري فرنسي مع ليون (2003-2004 و2004-2005)"
    ],
    "achievementsEn": [
      "2 Premier League titles with Chelsea (2005-06 and 2009-10)",
      "UEFA Champions League 2011-12 with Chelsea",
      "4 FA Cup titles with Chelsea (2007, 2009, 2010, 2012)",
      "2 Ligue 1 titles with Lyon (2003-04 and 2004-05)"
    ],
    "clubsHistoryAr": [
      "ليبرتي بروفيشنالز",
      "باستيا",
      "ليون",
      "تشيلسي",
      "ريال مدريد (إعارة)",
      "ميلان",
      "بانايثينايكوس",
      "بيرسيب باندونغ",
      "سابايل"
    ],
    "clubsHistoryEn": [
      "Liberty Professionals",
      "Bastia",
      "Lyon",
      "Chelsea",
      "Real Madrid (loan)",
      "AC Milan",
      "Panathinaikos",
      "Persib Bandung",
      "Sabail"
    ],
    "clubIds": [
      "lyon",
      "chelsea",
      "real-madrid",
      "ac-milan"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Michael_Essien"
  },
  {
    "id": "freddie-ljungberg",
    "nameAr": "فريدي يونغبرج",
    "nameEn": "Freddie Ljungberg",
    "nationalityAr": "سويدي",
    "nationalityEn": "Swedish",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط جناح",
      "en": "Winger / Wide midfielder"
    },
    "era": "1994-2009",
    "active": false,
    "bioAr": "لاعب وسط سويدي سابق أمضى معظم مسيرته مع آرسنال الإنجليزي، وكوّن ثنائيًا هجوميًا شهيرًا مع تييري هنري، وقاد منتخب السويد لسنوات.",
    "bioEn": "Former Swedish winger who spent most of his career at Arsenal, forming a celebrated attacking partnership with Thierry Henry, and captained the Sweden national team for several years.",
    "achievementsAr": [
      "لقبا الدوري الإنجليزي الممتاز مع آرسنال",
      "3 ألقاب كأس الاتحاد الإنجليزي مع آرسنال",
      "الفوز بكأس الاتحاد الإنجليزي 2002 (سجل في النهائي)",
      "المشاركة في 3 بطولات لكأس أوروبا مع السويد"
    ],
    "achievementsEn": [
      "Two Premier League titles with Arsenal",
      "3 FA Cup titles with Arsenal",
      "Scored in the 2002 FA Cup Final",
      "Appeared at three UEFA European Championships with Sweden"
    ],
    "clubsHistoryAr": [
      "هالمستادز",
      "آرسنال",
      "ويست هام يونايتد",
      "سلتيك"
    ],
    "clubsHistoryEn": [
      "Halmstad",
      "Arsenal",
      "West Ham United",
      "Celtic"
    ],
    "clubIds": [
      "arsenal",
      "west-ham-united",
      "celtic"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Freddie_Ljungberg"
  },
  {
    "id": "patrick-kluivert",
    "nameAr": "باتريك كلويفرت",
    "nameEn": "Patrick Kluivert",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1994-2008",
    "active": false,
    "bioAr": "مهاجم هولندي سابق كان جزءًا من 'الجيل الذهبي' لأياكس الذي توّج بدوري أبطال أوروبا 1995 مسجلًا هدف الفوز في النهائي، ثم انتقل إلى برشلونة حيث كوّن ثنائيًا هجوميًا فعالًا مع ريفالدو.",
    "bioEn": "Former Dutch striker who was part of Ajax's 'Golden Generation' that won the 1995 UEFA Champions League, scoring the winning goal in the final, before moving to Barcelona where he formed an effective attacking partnership with Rivaldo.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 1995 مع أياكس (سجل هدف الفوز في النهائي)",
      "لقب الدوري الإسباني 1999 مع برشلونة",
      "الهداف التاريخي المشترك لمنتخب هولندا سابقًا",
      "هداف مشارك في بطولة أمم أوروبا 2000"
    ],
    "achievementsEn": [
      "UEFA Champions League title 1995 with Ajax (scored the winning goal in the final)",
      "La Liga title 1999 with Barcelona",
      "Formerly one of the Netherlands' all-time top goalscorers",
      "Joint top scorer at UEFA Euro 2000"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "ميلان",
      "برشلونة",
      "نيوكاسل يونايتد",
      "فالنسيا",
      "PSV آيندهوفن",
      "ليل"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "AC Milan",
      "Barcelona",
      "Newcastle United",
      "Valencia",
      "PSV Eindhoven",
      "Lille"
    ],
    "clubIds": [
      "ajax",
      "ac-milan",
      "barcelona",
      "newcastle-united",
      "valencia",
      "psv-eindhoven",
      "lille"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Patrick_Kluivert"
  },
  {
    "id": "edgar-davids",
    "nameAr": "إدغار ديفيدز",
    "nameEn": "Edgar Davids",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط دفاعي",
      "en": "Defensive midfielder"
    },
    "era": "1991-2014",
    "active": false,
    "bioAr": "لاعب وسط هولندي سابق لُقّب بـ'البيتبول' لأسلوبه القتالي في الاستحواذ على الكرة، لعب مع أياكس ثم يوفنتوس حيث كوّن ثنائيًا مميزًا مع زين الدين زيدان في وسط الملعب.",
    "bioEn": "Former Dutch midfielder nicknamed 'The Pitbull' for his aggressive, hard-tackling style, who played for Ajax before moving to Juventus, where he formed a notable midfield partnership with Zinedine Zidane.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 1995 مع أياكس",
      "لقبان في الدوري الإيطالي مع يوفنتوس",
      "المركز الثالث في بطولتي أمم أوروبا (2000، 2004) مع هولندا",
      "المركز الرابع في كأس العالم 1998 مع هولندا"
    ],
    "achievementsEn": [
      "UEFA Champions League title 1995 with Ajax",
      "Two Serie A titles with Juventus",
      "Third place at UEFA Euro 2000 and Euro 2004 with the Netherlands",
      "Fourth place at the 1998 FIFA World Cup with the Netherlands"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "ميلان",
      "يوفنتوس",
      "برشلونة (إعارة)",
      "إنتر ميلان",
      "توتنهام هوتسبير",
      "كريستال بالاس"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "AC Milan",
      "Juventus",
      "Barcelona (loan)",
      "Inter Milan",
      "Tottenham Hotspur",
      "Crystal Palace"
    ],
    "clubIds": [
      "ajax",
      "ac-milan",
      "juventus",
      "barcelona",
      "inter-milan",
      "tottenham",
      "crystal-palace"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Edgar_Davids"
  },
  {
    "id": "jaap-stam",
    "nameAr": "ياب ستام",
    "nameEn": "Jaap Stam",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "قلب دفاع",
      "en": "Centre-back"
    },
    "era": "1992-2007",
    "active": false,
    "bioAr": "مدافع هولندي سابق يُعد أحد أفضل قلوب الدفاع في تاريخ اللعبة، كان ركيزة أساسية في مانشستر يونايتد الذي حقق الثلاثية التاريخية موسم 1998-1999.",
    "bioEn": "Former Dutch defender regarded as one of the greatest centre-backs in the history of the game, who was a key part of the Manchester United side that won the historic treble in the 1998-99 season.",
    "achievementsAr": [
      "الثلاثية التاريخية مع مانشستر يونايتد 1998-1999 (الدوري الإنجليزي، كأس الاتحاد، دوري أبطال أوروبا)",
      "3 ألقاب في الدوري الإنجليزي الممتاز مع مانشستر يونايتد",
      "لقب الدوري الإيطالي 2004 مع ميلان",
      "لقب الدوري الهولندي 1997 مع PSV آيندهوفن"
    ],
    "achievementsEn": [
      "Historic treble with Manchester United 1998-99 (Premier League, FA Cup, UEFA Champions League)",
      "3 Premier League titles with Manchester United",
      "Serie A title 2004 with AC Milan",
      "Eredivisie title 1997 with PSV Eindhoven"
    ],
    "clubsHistoryAr": [
      "PSV آيندهوفن",
      "مانشستر يونايتد",
      "لاتسيو",
      "ميلان",
      "أياكس"
    ],
    "clubsHistoryEn": [
      "PSV Eindhoven",
      "Manchester United",
      "Lazio",
      "AC Milan",
      "Ajax"
    ],
    "clubIds": [
      "psv-eindhoven",
      "manchester-united",
      "lazio",
      "ac-milan",
      "ajax"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jaap_Stam"
  },
  {
    "id": "lilian-thuram",
    "nameAr": "ليليان تورام",
    "nameEn": "Lilian Thuram",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "1991-2008",
    "active": false,
    "bioAr": "مدافع فرنسي سابق يحمل رقم المشاركات القياسي السابق لمنتخب فرنسا، فاز بكأس العالم 1998 وبطولة أمم أوروبا 2000، ولعب لأندية موناكو وبارما ويوفنتوس وبرشلونة.",
    "bioEn": "Former French defender who was for a long time the most-capped player in France's history, winning the 1998 FIFA World Cup and UEFA Euro 2000, and playing for Monaco, Parma, Juventus and Barcelona.",
    "achievementsAr": [
      "لقب كأس العالم 1998 مع فرنسا",
      "لقب بطولة أمم أوروبا 2000 مع فرنسا",
      "لقب كأس القارات 2003 مع فرنسا",
      "الوصول إلى نهائي كأس العالم 2006 مع فرنسا"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "2003 FIFA Confederations Cup title with France",
      "Reached the 2006 FIFA World Cup final with France"
    ],
    "clubsHistoryAr": [
      "موناكو",
      "بارما",
      "يوفنتوس",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Monaco",
      "Parma",
      "Juventus",
      "Barcelona"
    ],
    "clubIds": [
      "monaco",
      "parma",
      "juventus",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Lilian_Thuram"
  },
  {
    "id": "peter-shilton",
    "nameAr": "بيتر شيلتون",
    "nameEn": "Peter Shilton",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1966-1997",
    "active": false,
    "bioAr": "حارس مرمى إنجليزي سابق يحمل الرقم القياسي لعدد المشاركات مع منتخب إنجلترا (125 مباراة)، ولعب أكثر من 1000 مباراة في الدوري الإنجليزي عبر مسيرة امتدت لأحد عشر ناديًا، وفاز بلقبي كأس أوروبا مع نوتنغهام فورست.",
    "bioEn": "Former English goalkeeper who holds the record for most caps for the England national team (125), played over 1,000 English league games across an 11-club career, and won two European Cups with Nottingham Forest.",
    "achievementsAr": [
      "لقبا كأس أوروبا للأندية البطلة مع نوتنغهام فورست (1979، 1980)",
      "لقب الدوري الإنجليزي الأول 1978 مع نوتنغهام فورست",
      "الرقم القياسي لعدد المشاركات مع منتخب إنجلترا (125 مباراة)",
      "المشاركة في 3 بطولات كأس عالم مع إنجلترا"
    ],
    "achievementsEn": [
      "Two European Cup titles with Nottingham Forest (1979, 1980)",
      "First Division title 1978 with Nottingham Forest",
      "England's all-time record appearance holder (125 caps)",
      "Appeared at three FIFA World Cups with England"
    ],
    "clubsHistoryAr": [
      "ليستر سيتي",
      "ستوك سيتي",
      "نوتنغهام فورست",
      "ساوثهامبتون",
      "ديربي كاونتي",
      "بليموث أرجايل"
    ],
    "clubsHistoryEn": [
      "Leicester City",
      "Stoke City",
      "Nottingham Forest",
      "Southampton",
      "Derby County",
      "Plymouth Argyle"
    ],
    "clubIds": [
      "leicester-city",
      "stoke-city",
      "nottingham-forest",
      "southampton",
      "derby-county"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Peter_Shilton"
  },
  {
    "id": "leroy-sane",
    "nameAr": "ليروي ساني",
    "nameEn": "Leroy Sané",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "غلطة سراي",
    "clubEn": "Galatasaray",
    "clubId": "galatasaray",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "جناح ألماني سريع وموهوب فنيًا، أمضى خمسة مواسم مع بايرن ميونخ بعد قدومه من مانشستر سيتي، وانتقل صيف 2025 إلى غلطة سراي التركي بعد انتهاء عقده.",
    "bioEn": "Fast, technically gifted German winger who spent five seasons at Bayern Munich after arriving from Manchester City, before joining Turkish club Galatasaray in the summer of 2025 upon his contract expiry.",
    "achievementsAr": [
      "لقبان في الدوري الإنجليزي الممتاز مع مانشستر سيتي",
      "لقب الدوري الألماني مع بايرن ميونخ",
      "المشاركة في عدة بطولات كأس عالم وأمم أوروبا مع ألمانيا",
      "أحد أكثر لاعبي منتخب ألمانيا مشاركة دوليًا في جيله"
    ],
    "achievementsEn": [
      "Two Premier League titles with Manchester City",
      "Bundesliga title with Bayern Munich",
      "Appeared at multiple FIFA World Cups and UEFA European Championships with Germany",
      "One of the most-capped German internationals of his generation"
    ],
    "clubsHistoryAr": [
      "شالكه 04",
      "مانشستر سيتي",
      "بايرن ميونخ",
      "غلطة سراي"
    ],
    "clubsHistoryEn": [
      "Schalke 04",
      "Manchester City",
      "Bayern Munich",
      "Galatasaray"
    ],
    "clubIds": [
      "schalke-04",
      "manchester-city",
      "bayern-munich",
      "galatasaray"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Leroy_San%C3%A9"
  },
  {
    "id": "granit-xhaka",
    "nameAr": "غرانيت جاكا",
    "nameEn": "Granit Xhaka",
    "nationalityAr": "سويسري",
    "nationalityEn": "Swiss",
    "clubAr": "سندرلاند",
    "clubEn": "Sunderland",
    "clubId": "sunderland",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "لاعب وسط سويسري وقائد منتخب بلاده، أمضى سبع سنوات قائدًا لآرسنال الإنجليزي، ثم انتقل إلى باير ليفركوزن الألماني، وانضم صيف 2025 إلى سندرلاند الإنجليزي عائدًا للدوري الممتاز.",
    "bioEn": "Swiss midfielder and national team captain who spent seven years captaining Arsenal, before moving to Bayer Leverkusen in Germany, and joining Sunderland in the summer of 2025 upon their promotion to the Premier League.",
    "achievementsAr": [
      "3 ألقاب كأس الاتحاد الإنجليزي مع آرسنال",
      "لقب الدوري الألماني 2023-2024 مع باير ليفركوزن (موسم بلا هزيمة)",
      "قائد منتخب سويسرا",
      "المشاركة في عدة بطولات كأس عالم وأمم أوروبا مع سويسرا"
    ],
    "achievementsEn": [
      "3 FA Cup titles with Arsenal",
      "Bundesliga title 2023-24 with Bayer Leverkusen (unbeaten season)",
      "Captain of the Switzerland national team",
      "Appeared at multiple FIFA World Cups and UEFA European Championships with Switzerland"
    ],
    "clubsHistoryAr": [
      "بازل",
      "بوروسيا مونشنغلادباخ",
      "آرسنال",
      "باير ليفركوزن",
      "سندرلاند"
    ],
    "clubsHistoryEn": [
      "Basel",
      "Borussia Mönchengladbach",
      "Arsenal",
      "Bayer Leverkusen",
      "Sunderland"
    ],
    "clubIds": [
      "borussia-monchengladbach",
      "arsenal",
      "bayer-leverkusen",
      "sunderland"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Granit_Xhaka"
  },
  {
    "id": "bradley-barcola",
    "nameAr": "برادلي باركولا",
    "nameEn": "Bradley Barcola",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "جناح",
      "en": "Winger / Forward"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "جناح فرنسي سريع تخرّج من أكاديمية ليون، وانضم إلى باريس سان جيرمان صيف 2023 حيث فاز بلقبي دوري أبطال أوروبا متتاليين، قبل أن ينتقل إلى ليفربول الإنجليزي صيف 2026.",
    "bioEn": "Fast French winger who came through Lyon's academy, joined Paris Saint-Germain in the summer of 2023 where he won back-to-back UEFA Champions League titles, before moving to Liverpool in the summer of 2026.",
    "achievementsAr": [
      "لقبا دوري أبطال أوروبا متتاليان مع باريس سان جيرمان (2025، 2026)",
      "ألقاب الدوري الفرنسي وكأس فرنسا مع باريس سان جيرمان",
      "المشاركة في نهائيات كأس العالم مع فرنسا",
      "أحد أغلى الانتقالات في تاريخ الدوري الفرنسي عند رحيله لليفربول"
    ],
    "achievementsEn": [
      "Two consecutive UEFA Champions League titles with Paris Saint-Germain (2025, 2026)",
      "Ligue 1 and Coupe de France titles with Paris Saint-Germain",
      "Appeared at the FIFA World Cup with France",
      "One of the most expensive departures in Ligue 1 history when he moved to Liverpool"
    ],
    "clubsHistoryAr": [
      "ليون",
      "باريس سان جيرمان",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Lyon",
      "Paris Saint-Germain",
      "Liverpool"
    ],
    "clubIds": [
      "lyon",
      "paris-saint-germain",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bradley_Barcola"
  },
  {
    "id": "desire-doue",
    "nameAr": "ديزيريه دوي",
    "nameEn": "Désiré Doué",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "لاعب وسط هجومي / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "لاعب هجومي فرنسي شاب انتقل من رين إلى باريس سان جيرمان صيف 2024، وسجل هدفين في نهائي دوري أبطال أوروبا 2025، ويُعد أحد أبرز المواهب الشابة في العالم.",
    "bioEn": "Young French attacker who moved from Rennes to Paris Saint-Germain in the summer of 2024, scoring twice in the 2025 UEFA Champions League final, and is regarded as one of the best young players in the world.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2025 مع باريس سان جيرمان (هدفان في النهائي)",
      "جائزة أفضل لاعب شاب في دوري أبطال أوروبا 2024-2025",
      "جائزة Golden Boy",
      "لقب الدوري الفرنسي مع باريس سان جيرمان"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2025 with Paris Saint-Germain (scored twice in the final)",
      "UEFA Champions League Young Player of the Season 2024-25",
      "Golden Boy award",
      "Ligue 1 title with Paris Saint-Germain"
    ],
    "clubsHistoryAr": [
      "رين",
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Rennes",
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "rennes",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/D%C3%A9sir%C3%A9_Dou%C3%A9"
  },
  {
    "id": "warren-zaire-emery",
    "nameAr": "وارن زاير إيميري",
    "nameEn": "Warren Zaïre-Emery",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "لاعب وسط فرنسي شاب من إنتاج أكاديمية باريس سان جيرمان، أصبح أصغر لاعب في تاريخ النادي، وفاز بلقب دوري أبطال أوروبا 2025 معه وهو لا يزال في مطلع العشرينات من عمره.",
    "bioEn": "Young French midfielder produced by Paris Saint-Germain's academy, who became the club's youngest-ever player, and won the 2025 UEFA Champions League title with them while still in his early twenties.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2025 مع باريس سان جيرمان",
      "ألقاب الدوري الفرنسي مع باريس سان جيرمان",
      "أصغر لاعب في تاريخ باريس سان جيرمان",
      "المشاركة في كأس العالم 2026 مع فرنسا"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2025 with Paris Saint-Germain",
      "Ligue 1 titles with Paris Saint-Germain",
      "Youngest-ever player in Paris Saint-Germain's history",
      "Appeared at the 2026 FIFA World Cup with France"
    ],
    "clubsHistoryAr": [
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "paris-saint-germain"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Warren_Za%C3%AFre-Emery"
  },
  {
    "id": "alessandro-bastoni",
    "nameAr": "أليساندرو باستوني",
    "nameEn": "Alessandro Bastoni",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "إنتر ميلان",
    "clubEn": "Inter Milan",
    "clubId": "inter-milan",
    "position": {
      "ar": "قلب دفاع",
      "en": "Centre-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مدافع إيطالي يُعد من أفضل قلوب الدفاع في العالم حاليًا، قضى معظم مسيرته مع إنتر ميلان، وفاز مع منتخب إيطاليا ببطولة أمم أوروبا 2020.",
    "bioEn": "Italian defender regarded as one of the best centre-backs in the world today, having spent most of his career at Inter Milan, and won UEFA Euro 2020 with the Italy national team.",
    "achievementsAr": [
      "لقب بطولة أمم أوروبا 2020 مع إيطاليا",
      "لقب الدوري الإيطالي مع إنتر ميلان",
      "الوصول إلى نهائي دوري أبطال أوروبا مع إنتر ميلان",
      "عدة ألقاب كأس إيطاليا مع إنتر ميلان"
    ],
    "achievementsEn": [
      "UEFA Euro 2020 title with Italy",
      "Serie A title with Inter Milan",
      "Reached the UEFA Champions League final with Inter Milan",
      "Multiple Coppa Italia titles with Inter Milan"
    ],
    "clubsHistoryAr": [
      "أتالانتا",
      "إنتر ميلان",
      "بارما (إعارة)"
    ],
    "clubsHistoryEn": [
      "Atalanta",
      "Inter Milan",
      "Parma (loan)"
    ],
    "clubIds": [
      "atalanta",
      "inter-milan",
      "parma"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alessandro_Bastoni"
  },
  {
    "id": "james-maddison",
    "nameAr": "جيمس ماديسون",
    "nameEn": "James Maddison",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "توتنهام هوتسبير",
    "clubEn": "Tottenham Hotspur",
    "clubId": "tottenham",
    "position": {
      "ar": "لاعب وسط هجومي",
      "en": "Attacking midfielder"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "لاعب وسط هجومي إنجليزي معروف بتمريراته الحاسمة وركلاته الثابتة، لعب لليستر سيتي قبل انتقاله إلى توتنهام هوتسبير عام 2023، ومثّل منتخب إنجلترا في نهائيات كأس العالم.",
    "bioEn": "English attacking midfielder known for his creative passing and set-piece delivery, who played for Leicester City before moving to Tottenham Hotspur in 2023, and represented England at the FIFA World Cup finals.",
    "achievementsAr": [
      "لقب كأس الاتحاد الإنجليزي 2021 مع ليستر سيتي",
      "لقب الدوري الأوروبي 2024-2025 مع توتنهام هوتسبير",
      "المشاركة في كأس العالم 2022 مع إنجلترا",
      "عضو في فريق الموسم بالدوري الإنجليزي الممتاز"
    ],
    "achievementsEn": [
      "FA Cup title 2021 with Leicester City",
      "UEFA Europa League title 2024-25 with Tottenham Hotspur",
      "Appeared at the 2022 FIFA World Cup with England",
      "Named in the Premier League Team of the Season"
    ],
    "clubsHistoryAr": [
      "كوفنتري سيتي",
      "نورويتش سيتي",
      "أبردين (إعارة)",
      "ليستر سيتي",
      "توتنهام هوتسبير"
    ],
    "clubsHistoryEn": [
      "Coventry City",
      "Norwich City",
      "Aberdeen (loan)",
      "Leicester City",
      "Tottenham Hotspur"
    ],
    "clubIds": [
      "coventry-city",
      "norwich-city",
      "leicester-city",
      "tottenham"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/James_Maddison"
  },
  {
    "id": "sandro-tonali",
    "nameAr": "ساندرو تونالي",
    "nameEn": "Sandro Tonali",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "توتنهام هوتسبير",
    "clubEn": "Tottenham Hotspur",
    "clubId": "tottenham",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "لاعب وسط إيطالي انتقل من ميلان إلى نيوكاسل يونايتد عام 2023 وساهم في فوزها بكأس الرابطة الإنجليزية 2024-2025، قبل أن ينتقل صفقة قياسية إلى توتنهام هوتسبير صيف 2026.",
    "bioEn": "Italian midfielder who moved from AC Milan to Newcastle United in 2023 and helped them win the 2024-25 EFL Cup, before completing a club-record move to Tottenham Hotspur in the summer of 2026.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 2021-2022 مع ميلان",
      "لقب كأس الرابطة الإنجليزية 2024-2025 مع نيوكاسل يونايتد",
      "أغلى انتقال لاعب إيطالي في التاريخ عند توقيعه لتوتنهام",
      "المشاركة الدولية المستمرة مع منتخب إيطاليا"
    ],
    "achievementsEn": [
      "Serie A title 2021-22 with AC Milan",
      "EFL Cup title 2024-25 with Newcastle United",
      "Became the most expensive Italian player in history upon signing for Tottenham",
      "Regular international for the Italy national team"
    ],
    "clubsHistoryAr": [
      "بريشيا",
      "ميلان",
      "نيوكاسل يونايتد",
      "توتنهام هوتسبير"
    ],
    "clubsHistoryEn": [
      "Brescia",
      "AC Milan",
      "Newcastle United",
      "Tottenham Hotspur"
    ],
    "clubIds": [
      "ac-milan",
      "newcastle-united",
      "tottenham"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sandro_Tonali"
  },
  {
    "id": "serge-gnabry",
    "nameAr": "سيرج غنابري",
    "nameEn": "Serge Gnabry",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بايرن ميونيخ",
    "clubEn": "Bayern Munich",
    "clubId": "bayern-munich",
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "جناح ألماني بدأ مسيرته مع أرسنال الإنجليزي قبل أن يمر بفيردر بريمن وهوفنهايم (إعارة) وصولًا إلى بايرن ميونيخ عام 2017، حيث أصبح أحد ركائز الفريق وسجل أربعة أهداف في مباراة واحدة خارج ملعبه أمام توتنهام هوتسبير في دوري أبطال أوروبا 2019.",
    "bioEn": "German winger who began his career at Arsenal before spells at Werder Bremen and Hoffenheim (loan), joining Bayern Munich in 2017, where he became a key player and famously scored four goals in a single away Champions League match against Tottenham Hotspur in 2019.",
    "achievementsAr": [
      "لقب دوري أبطال أوروبا 2019-2020 مع بايرن ميونيخ",
      "عدة ألقاب للدوري الألماني (البوندسليجا) مع بايرن ميونيخ",
      "تسجيل أربعة أهداف في مباراة واحدة بدوري أبطال أوروبا أمام توتنهام هوتسبير 2019",
      "لقب كأس العالم للأندية 2020 مع بايرن ميونيخ"
    ],
    "achievementsEn": [
      "UEFA Champions League title 2019-20 with Bayern Munich",
      "Multiple Bundesliga titles with Bayern Munich",
      "Scored four goals in a single away Champions League match against Tottenham Hotspur in 2019",
      "FIFA Club World Cup title 2020 with Bayern Munich"
    ],
    "clubsHistoryAr": [
      "أرسنال",
      "وست بروميتش ألبيون (إعارة)",
      "فيردر بريمن",
      "هوفنهايم (إعارة)",
      "بايرن ميونيخ"
    ],
    "clubsHistoryEn": [
      "Arsenal",
      "West Bromwich Albion (loan)",
      "Werder Bremen",
      "Hoffenheim (loan)",
      "Bayern Munich"
    ],
    "clubIds": [
      "arsenal",
      "west-bromwich-albion",
      "werder-bremen",
      "hoffenheim",
      "bayern-munich"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Serge_Gnabry"
  },
  {
    "id": "dani-olmo",
    "nameAr": "داني أولمو",
    "nameEn": "Dani Olmo",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "لاعب وسط هجومي / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "لاعب إسباني من إنتاج أكاديمية لا ماسيا لبرشلونة، غادر إلى دينامو زغرب الكرواتي عام 2014 ثم إلى لايبزيغ الألماني قبل أن يعود إلى برشلونة صيف 2024. كان أحد نجوم إسبانيا في فوزها ببطولة أمم أوروبا 2024 كهداف مشارك للبطولة، وشارك مع المنتخب في التتويج بكأس العالم 2026.",
    "bioEn": "Spanish player produced by Barcelona's La Masia academy, who left for Croatian club Dinamo Zagreb in 2014 and later joined RB Leipzig, before returning to Barcelona in the summer of 2024. He was a key figure in Spain's UEFA Euro 2024 triumph, finishing as the tournament's joint top scorer, and was part of the squad that won the 2026 FIFA World Cup.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2024 مع إسبانيا (هداف مشارك للبطولة)",
      "بطولة كأس العالم 2026 مع إسبانيا",
      "لقبا كأس ألمانيا (DFB-Pokal) مع لايبزيغ",
      "لقب الدوري الإسباني وكأس ملك إسبانيا موسم 2024-2025 مع برشلونة"
    ],
    "achievementsEn": [
      "UEFA Euro 2024 title with Spain (joint top scorer of the tournament)",
      "2026 FIFA World Cup title with Spain",
      "Two DFB-Pokal titles with RB Leipzig",
      "La Liga and Copa del Rey titles 2024-25 with Barcelona"
    ],
    "clubsHistoryAr": [
      "برشلونة (فئات سنية)",
      "دينامو زغرب",
      "لايبزيغ",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Barcelona (youth)",
      "Dinamo Zagreb",
      "RB Leipzig",
      "Barcelona"
    ],
    "clubIds": [
      "rb-leipzig",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dani_Olmo"
  },
  {
    "id": "fermin-lopez",
    "nameAr": "فيرمين لوبيز",
    "nameEn": "Fermín López",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "لاعب وسط هجومي / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "لاعب هجومي إسباني من إنتاج أكاديمية لا ماسيا لبرشلونة، فرض نفسه على الفريق الأول منذ موسم 2023-2024. توّج مع إسبانيا ببطولة أمم أوروبا 2024 والميدالية الذهبية الأولمبية في باريس 2024، وفاز مع برشلونة بالدوري وكأس الملك موسم 2024-2025.",
    "bioEn": "Spanish attacking player produced by Barcelona's La Masia academy, who established himself in the first team from the 2023-24 season. He won UEFA Euro 2024 and Olympic gold at Paris 2024 with Spain, and claimed the La Liga and Copa del Rey titles with Barcelona in 2024-25.",
    "achievementsAr": [
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "الميدالية الذهبية الأولمبية في باريس 2024 مع إسبانيا",
      "لقب الدوري الإسباني وكأس ملك إسبانيا موسم 2024-2025 مع برشلونة",
      "السوبر الإسباني مع برشلونة"
    ],
    "achievementsEn": [
      "UEFA Euro 2024 title with Spain",
      "Olympic gold medal at Paris 2024 with Spain",
      "La Liga and Copa del Rey titles 2024-25 with Barcelona",
      "Spanish Super Cup with Barcelona"
    ],
    "clubsHistoryAr": [
      "ريال بيتيس (شباب)",
      "برشلونة (شباب)",
      "برشلونة أتلتيك",
      "لينارس (إعارة)",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Real Betis (youth)",
      "Barcelona (youth)",
      "Barcelona Atlètic",
      "Linares (loan)",
      "Barcelona"
    ],
    "clubIds": [
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ferm%C3%ADn_L%C3%B3pez"
  },
  {
    "id": "ollie-watkins",
    "nameAr": "أولي واتكينز",
    "nameEn": "Ollie Watkins",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "أستون فيلا",
    "clubEn": "Aston Villa",
    "clubId": "aston-villa",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "مهاجم إنجليزي صعد من دوريات الدرجات الدنيا مع إكستر سيتي وبرينتفورد قبل الانتقال إلى أستون فيلا عام 2020، حيث أصبح الهداف التاريخي للنادي في الدوري الإنجليزي الممتاز. اشتهر بتسجيله هدف الفوز في الدقيقة الأخيرة أمام هولندا في نصف نهائي بطولة أمم أوروبا 2024 ليقود إنجلترا إلى نهائي البطولة.",
    "bioEn": "English forward who rose through the lower leagues with Exeter City and Brentford before joining Aston Villa in 2020, where he became the club's all-time top scorer in the Premier League. He is best known for scoring a late winner against the Netherlands in the UEFA Euro 2024 semi-final, sending England through to the tournament's final.",
    "achievementsAr": [
      "تسجيل هدف الفوز في الدقيقة 90 أمام هولندا بنصف نهائي بطولة أمم أوروبا 2024 ليقود إنجلترا إلى النهائي",
      "جائزة صانع الألعاب في الدوري الإنجليزي الممتاز موسم 2023-2024",
      "الهداف التاريخي لنادي أستون فيلا في الدوري الإنجليزي الممتاز",
      "جائزة أفضل لاعب في دوري الدرجة الأولى الإنجليزي (Championship) موسم 2019-2020"
    ],
    "achievementsEn": [
      "Scored the 90th-minute winner against the Netherlands in the UEFA Euro 2024 semi-final, sending England to the final",
      "Premier League Playmaker of the Season 2023-24",
      "Aston Villa's all-time leading scorer in the Premier League",
      "EFL Championship Player of the Year 2019-20"
    ],
    "clubsHistoryAr": [
      "إكستر سيتي",
      "برينتفورد",
      "أستون فيلا"
    ],
    "clubsHistoryEn": [
      "Exeter City",
      "Brentford",
      "Aston Villa"
    ],
    "clubIds": [
      "brentford",
      "aston-villa"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ollie_Watkins"
  },
  {
    "id": "riccardo-calafiori",
    "nameAr": "ريكاردو كالافيوري",
    "nameEn": "Riccardo Calafiori",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "مدافع أيسر / قلب دفاع",
      "en": "Left-back / Centre-back"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "مدافع إيطالي من إنتاج أكاديمية روما تعافى من إصابة خطيرة في الركبة كادت تنهي مسيرته، ومر بتجارب في جنوى وبازل قبل أن يتألق مع بولونيا الذي قاده للتأهل إلى دوري أبطال أوروبا لأول مرة منذ ستينيات القرن الماضي. لفت الأنظار مع منتخب إيطاليا في بطولة أمم أوروبا 2024 قبل انتقاله إلى أرسنال الإنجليزي صيف 2024.",
    "bioEn": "Italian defender produced by Roma's academy who recovered from a serious knee injury that nearly ended his career, before spells at Genoa and Basel and a breakout campaign with Bologna, whom he helped qualify for the Champions League for the first time since the 1960s. He caught the eye with Italy at UEFA Euro 2024 before joining Arsenal in the summer of 2024.",
    "achievementsAr": [
      "المشاركة الأساسية مع منتخب إيطاليا في بطولة أمم أوروبا 2024",
      "المساهمة في تأهل بولونيا لدوري أبطال أوروبا للمرة الأولى منذ ستينيات القرن الماضي (موسم 2023-2024)",
      "الانتقال إلى أرسنال الإنجليزي في صفقة كبيرة صيف 2024",
      "ظهوره الدولي الأول مع منتخب إيطاليا عام 2024"
    ],
    "achievementsEn": [
      "Regular starter for Italy at UEFA Euro 2024",
      "Helped Bologna qualify for the UEFA Champions League for the first time since the 1960s (2023-24 season)",
      "Completed a big-money move to Arsenal in the summer of 2024",
      "Made his senior international debut for Italy in 2024"
    ],
    "clubsHistoryAr": [
      "روما",
      "جنوى (إعارة)",
      "بازل",
      "بولونيا",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Roma",
      "Genoa (loan)",
      "Basel",
      "Bologna",
      "Arsenal"
    ],
    "clubIds": [
      "roma",
      "genoa",
      "bologna",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Riccardo_Calafiori"
  },
  {
    "id": "joan-garcia",
    "nameAr": "خوان غارسيا",
    "nameEn": "Joan García",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "حارس مرمى إسباني من أكاديمية إسبانيول، تدرج حتى أصبح الحارس الأساسي للفريق عام 2024، ثم انتقل إلى برشلونة في يونيو 2025 بعد تفعيل شرطه الجزائي، وفرض نفسه حارسًا أول وساهم في تتويج الفريق بالدوري.",
    "bioEn": "Spanish goalkeeper from the Espanyol academy who became the club's first choice in 2024 before joining Barcelona in June 2025 via his release clause, immediately establishing himself as first-choice and helping the club win La Liga.",
    "achievementsAr": [
      "كأس العالم 2026 مع إسبانيا",
      "الميدالية الذهبية الأولمبية في باريس 2024 مع إسبانيا",
      "لقب الدوري الإسباني مع برشلونة",
      "المساهمة في صعود إسبانيول للدوري الممتاز موسم 2023-2024"
    ],
    "achievementsEn": [
      "2026 FIFA World Cup with Spain",
      "Olympic gold medal at Paris 2024 with Spain",
      "La Liga title with Barcelona",
      "Helped Espanyol win promotion to La Liga in 2023-24"
    ],
    "clubsHistoryAr": [
      "إسبانيول",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Espanyol",
      "Barcelona"
    ],
    "clubIds": [
      "espanyol",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Joan_Garcia"
  },
  {
    "id": "wojciech-szczesny",
    "nameAr": "فويتشيك تشيزني",
    "nameEn": "Wojciech Szczęsny",
    "nationalityAr": "بولندي",
    "nationalityEn": "Polish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "حارس مرمى بولندي بدأ مع ليجيا وارسو ثم أرسنال، وخاض تجارب مع برينتفورد (إعارة) وروما (إعارة) قبل أن يقضي سبعة مواسم مع يوفنتوس. أعلن اعتزاله ثم عاد في أكتوبر 2024 للانضمام إلى برشلونة بعد إصابة تير شتيجن.",
    "bioEn": "Polish goalkeeper who began at Legia Warsaw and Arsenal, had loan spells at Brentford and Roma, then spent seven seasons at Juventus. He announced his retirement but returned in October 2024 to join Barcelona after Ter Stegen's injury.",
    "achievementsAr": [
      "كأسا الاتحاد الإنجليزي مع أرسنال",
      "جائزة القفاز الذهبي للدوري الإنجليزي 2013-2014 (مناصفة مع بيتر تشيك)",
      "ثلاثة ألقاب دوري إيطالي وثلاثة كؤوس إيطالية مع يوفنتوس",
      "لقبا الدوري الإسباني 2024-2025 و2025-2026 وكأس الملك 2024-2025 مع برشلونة"
    ],
    "achievementsEn": [
      "Two FA Cups with Arsenal",
      "Premier League Golden Glove 2013-14 (joint with Petr Čech)",
      "Three Serie A titles and three Coppa Italia titles with Juventus",
      "La Liga titles 2024-25 and 2025-26 and Copa del Rey 2024-25 with Barcelona"
    ],
    "clubsHistoryAr": [
      "ليجيا وارسو",
      "أرسنال",
      "برينتفورد (إعارة)",
      "روما (إعارة)",
      "يوفنتوس",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Legia Warsaw",
      "Arsenal",
      "Brentford (loan)",
      "Roma (loan)",
      "Juventus",
      "Barcelona"
    ],
    "clubIds": [
      "arsenal",
      "brentford",
      "roma",
      "juventus",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Wojciech_Szcz%C4%99sny"
  },
  {
    "id": "dominik-livakovic",
    "nameAr": "دومينيك ليفاكوفيتش",
    "nameEn": "Dominik Livaković",
    "nationalityAr": "كرواتي",
    "nationalityEn": "Croatian",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "حارس مرمى كرواتي متخصص في التصدي لركلات الجزاء، تدرج مع نادي زغرب ثم دينامو زغرب، وخاض تجربة مع فنربخشة قبل أن ينضم إلى برشلونة صيف 2026. شارك مع كرواتيا في ثلاث نسخ من كأس العالم.",
    "bioEn": "Croatian goalkeeper known as a penalty-saving specialist, who came through NK Zagreb and Dinamo Zagreb, spent time at Fenerbahçe and joined Barcelona in the summer of 2026. He has been part of Croatia's squads at three World Cups.",
    "achievementsAr": [
      "وصيف كأس العالم 2018 مع كرواتيا",
      "المركز الثالث في كأس العالم 2022 مع كرواتيا",
      "وصيف دوري الأمم الأوروبية 2023 مع كرواتيا",
      "ألقاب دوري كرواتي متعددة مع دينامو زغرب"
    ],
    "achievementsEn": [
      "FIFA World Cup runner-up 2018 with Croatia",
      "FIFA World Cup third place 2022 with Croatia",
      "UEFA Nations League runner-up 2023 with Croatia",
      "Multiple Croatian league titles with Dinamo Zagreb"
    ],
    "clubsHistoryAr": [
      "نادي زغرب",
      "دينامو زغرب",
      "فنربخشة",
      "جيرونا (إعارة)",
      "دينامو زغرب (إعارة)",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "NK Zagreb",
      "Dinamo Zagreb",
      "Fenerbahçe",
      "Girona (loan)",
      "Dinamo Zagreb (loan)",
      "Barcelona"
    ],
    "clubIds": [
      "fenerbahce",
      "girona",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dominik_Livakovi%C4%87"
  },
  {
    "id": "joao-cancelo",
    "nameAr": "جواو كانسيلو",
    "nameEn": "João Cancelo",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "ظهير / جناح",
      "en": "Full-back / Winger"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "ظهير برتغالي متعدد المراكز مر بنادي بنفيكا وفالنسيا وإنتر وجوفنتوس ومانشستر سيتي، ثم خاض إعارتين مع بايرن ميونيخ وبرشلونة، وانتقل إلى الهلال السعودي قبل أن يعود إلى برشلونة (إعارة ثم انتقال دائم عام 2026).",
    "bioEn": "Versatile Portuguese full-back who played for Benfica, Valencia, Inter, Juventus and Manchester City, had loan spells at Bayern Munich and Barcelona, moved to Al Hilal, and returned to Barcelona (loan, then permanent in 2026).",
    "achievementsAr": [
      "ثلاثة ألقاب دوري إنجليزي وكأس الاتحاد ولقبا كأس الرابطة مع مانشستر سيتي",
      "دوري أبطال أوروبا 2022-2023 مع مانشستر سيتي (شارك في دور المجموعات قبل إعارته)",
      "لقب الدوري الألماني 2022-2023 مع بايرن ميونيخ (إعارة)",
      "لقب الدوري الإيطالي 2018-2019 مع جوفنتوس"
    ],
    "achievementsEn": [
      "Three Premier League titles, one FA Cup and two League Cups with Manchester City",
      "2022-23 UEFA Champions League with Manchester City (played in the group stage before his loan)",
      "Bundesliga title 2022-23 with Bayern Munich (loan)",
      "Serie A title 2018-19 with Juventus"
    ],
    "clubsHistoryAr": [
      "بنفيكا",
      "فالنسيا",
      "إنتر ميلان (إعارة)",
      "يوفنتوس",
      "مانشستر سيتي",
      "بايرن ميونيخ (إعارة)",
      "برشلونة (إعارة)",
      "الهلال",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Benfica",
      "Valencia",
      "Inter Milan (loan)",
      "Juventus",
      "Manchester City",
      "Bayern Munich (loan)",
      "Barcelona (loan)",
      "Al Hilal",
      "Barcelona"
    ],
    "clubIds": [
      "benfica",
      "valencia",
      "inter-milan",
      "juventus",
      "manchester-city",
      "bayern-munich",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jo%C3%A3o_Cancelo"
  },
  {
    "id": "jules-kounde",
    "nameAr": "جول كوندي",
    "nameEn": "Jules Koundé",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "ظهير أيمن / قلب دفاع",
      "en": "Right-back / Centre-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مدافع فرنسي من أصل بنيني، بدأ مع بوردو ثم انتقل إلى إشبيلية عام 2019 وتوج معه بالدوري الأوروبي، قبل أن ينضم إلى برشلونة عام 2022 ويصبح من أكثر لاعبي الفريق مشاركة.",
    "bioEn": "French defender of Beninese descent who started at Bordeaux, joined Sevilla in 2019 and won the Europa League there, before signing for Barcelona in 2022 and becoming one of their most-used players.",
    "achievementsAr": [
      "وصيف كأس العالم 2022 مع فرنسا",
      "دوري الأمم الأوروبية 2021 مع فرنسا",
      "الدوري الأوروبي 2019-2020 مع إشبيلية",
      "لقبا الدوري الإسباني 2022-2023 و2024-2025 وكأس الملك 2024-2025 مع برشلونة"
    ],
    "achievementsEn": [
      "FIFA World Cup runner-up 2022 with France",
      "UEFA Nations League 2021 with France",
      "UEFA Europa League 2019-20 with Sevilla",
      "La Liga titles 2022-23 and 2024-25 and Copa del Rey 2024-25 with Barcelona"
    ],
    "clubsHistoryAr": [
      "بوردو",
      "إشبيلية",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Bordeaux",
      "Sevilla",
      "Barcelona"
    ],
    "clubIds": [
      "bordeaux",
      "sevilla",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jules_Kound%C3%A9"
  },
  {
    "id": "alejandro-balde",
    "nameAr": "أليخاندرو بالدي",
    "nameEn": "Alejandro Balde",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "ظهير أيسر إسباني من مواليد برشلونة، تخرج من أكاديمية لا ماسيا وصعد للفريق الأول عام 2021، واختير ضمن التشكيلة المثالية للدوري الإسباني موسم 2022-2023.",
    "bioEn": "Left-back born in Barcelona who came through La Masia and broke into the first team in 2021, named in the La Liga Team of the Season for 2022-23.",
    "achievementsAr": [
      "لقبا الدوري الإسباني 2022-2023 و2024-2025 مع برشلونة",
      "كأس ملك إسبانيا 2024-2025 مع برشلونة",
      "دوري الأمم الأوروبية 2022-2023 مع إسبانيا",
      "التشكيلة المثالية للدوري الإسباني 2022-2023"
    ],
    "achievementsEn": [
      "La Liga titles 2022-23 and 2024-25 with Barcelona",
      "Copa del Rey 2024-25 with Barcelona",
      "UEFA Nations League 2022-23 with Spain",
      "La Liga Team of the Season 2022-23"
    ],
    "clubsHistoryAr": [
      "برشلونة (فئات سنية)",
      "برشلونة ب",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Barcelona (youth)",
      "Barcelona B",
      "Barcelona"
    ],
    "clubIds": [
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alejandro_Balde"
  },
  {
    "id": "andreas-christensen",
    "nameAr": "أندرياس كريستنسن",
    "nameEn": "Andreas Christensen",
    "nationalityAr": "دنماركي",
    "nationalityEn": "Danish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "قلب دفاع",
      "en": "Centre-back"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "مدافع دنماركي انضم لأكاديمية تشيلسي في سن 15 عامًا، وخاض إعارة مع بوروسيا مونشنجلادباخ، ثم توج مع تشيلسي بدوري أبطال أوروبا 2021 قبل أن ينتقل إلى برشلونة عام 2022.",
    "bioEn": "Danish defender who joined Chelsea's academy at 15, had a loan at Borussia Mönchengladbach, and won the 2021 Champions League with Chelsea before moving to Barcelona in 2022.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2020-2021 والدوري الأوروبي 2018-2019 وكأس الاتحاد الإنجليزي 2018 مع تشيلسي",
      "ثلاثة ألقاب دوري إسباني (2023، 2025، 2026) مع برشلونة",
      "الوصول لنصف نهائي يورو 2020 مع الدنمارك",
      "المشاركة في كأس العالم 2018 و2022 مع الدنمارك"
    ],
    "achievementsEn": [
      "UEFA Champions League 2020-21, Europa League 2018-19 and FA Cup 2018 with Chelsea",
      "Three La Liga titles (2023, 2025, 2026) with Barcelona",
      "Reached the UEFA Euro 2020 semi-finals with Denmark",
      "Played at the 2018 and 2022 World Cups with Denmark"
    ],
    "clubsHistoryAr": [
      "تشيلسي",
      "بوروسيا مونشنجلادباخ (إعارة)",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Chelsea",
      "Borussia Mönchengladbach (loan)",
      "Barcelona"
    ],
    "clubIds": [
      "chelsea",
      "borussia-monchengladbach",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Andreas_Christensen"
  },
  {
    "id": "eric-garcia",
    "nameAr": "إيريك غارسيا",
    "nameEn": "Eric García",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "مدافع / وسط دفاعي",
      "en": "Defender / Defensive midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "مدافع إسباني تخرج من لا ماسيا ثم انتقل إلى مانشستر سيتي، وعاد إلى برشلونة عام 2021 وأُعير إلى جيرونا موسم 2023-2024 قبل أن يعود ويصبح عنصرًا مهمًا في تشكيلة هانزي فليك.",
    "bioEn": "Spanish defender who came through La Masia, moved to Manchester City, returned to Barcelona in 2021, had a loan at Girona in 2023-24 and came back to become a key part of Hansi Flick's squad.",
    "achievementsAr": [
      "الميدالية الذهبية الأولمبية باريس 2024 مع إسبانيا",
      "ثلاثة ألقاب دوري إسباني (2023، 2025، 2026) وكأس الملك 2024-2025 مع برشلونة",
      "الدوري الإنجليزي 2020-2021 وثلاثة ألقاب كأس الرابطة مع مانشستر سيتي",
      "المركز الثالث في يورو 2020 مع إسبانيا"
    ],
    "achievementsEn": [
      "Olympic gold medal at Paris 2024 with Spain",
      "Three La Liga titles (2023, 2025, 2026) and Copa del Rey 2024-25 with Barcelona",
      "Premier League 2020-21 and three League Cups with Manchester City",
      "Third place at UEFA Euro 2020 with Spain"
    ],
    "clubsHistoryAr": [
      "برشلونة (فئات سنية)",
      "مانشستر سيتي",
      "برشلونة",
      "جيرونا (إعارة)",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Barcelona (youth)",
      "Manchester City",
      "Barcelona",
      "Girona (loan)",
      "Barcelona"
    ],
    "clubIds": [
      "manchester-city",
      "barcelona",
      "girona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Eric_Garc%C3%ADa_(footballer,_born_2001)"
  },
  {
    "id": "gabriel-jesus",
    "nameAr": "غابرييل جيسوس",
    "nameEn": "Gabriel Jesus",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "مهاجم برازيلي قضى ست سنوات مع مانشستر سيتي سجل خلالها 95 هدفًا، ثم انتقل إلى أرسنال عام 2022 وتوج معه بالدوري الإنجليزي 2025-2026، قبل أن ينضم إلى برشلونة في آخر أيام الميركاتو الصيفي (1 سبتمبر 2026) بعقد حتى 2029.",
    "bioEn": "Brazilian forward who scored 95 goals in six years at Manchester City, joined Arsenal in 2022 and won the 2025-26 Premier League with them, before signing for Barcelona on deadline day (1 September 2026) on a contract until 2029.",
    "achievementsAr": [
      "أربعة ألقاب دوري إنجليزي مع مانشستر سيتي",
      "لقب الدوري الإنجليزي 2025-2026 مع أرسنال",
      "تسجيل 95 هدفًا مع مانشستر سيتي",
      "الانتقال إلى برشلونة في 1 سبتمبر 2026"
    ],
    "achievementsEn": [
      "Four Premier League titles with Manchester City",
      "2025-26 Premier League title with Arsenal",
      "Scored 95 goals for Manchester City",
      "Joined Barcelona on 1 September 2026"
    ],
    "clubsHistoryAr": [
      "بالميراس",
      "مانشستر سيتي",
      "أرسنال",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Palmeiras",
      "Manchester City",
      "Arsenal",
      "Barcelona"
    ],
    "clubIds": [
      "palmeiras",
      "manchester-city",
      "arsenal",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gabriel_Jesus"
  },
  {
    "id": "karim-adeyemi",
    "nameAr": "كريم أديمي",
    "nameEn": "Karim Adeyemi",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "جناح ألماني من مواليد ميونيخ لأب نيجيري وأم رومانية، بدأ مع بايرن ثم أونترهاخينج، وتألق مع ريد بول سالزبورغ قبل الانتقال إلى دورتموند عام 2022، ثم إلى برشلونة صيف 2026. سجل رقمًا قياسيًا كأسرع لاعب في تاريخ البوندسليجا.",
    "bioEn": "German winger born in Munich to a Nigerian father and Romanian mother, who came through Bayern and Unterhaching, shone at Red Bull Salzburg, joined Dortmund in 2022 and then Barcelona in summer 2026. He set the record as the fastest player recorded in Bundesliga history.",
    "achievementsAr": [
      "بطولة أمم أوروبا تحت 21 سنة 2021 مع ألمانيا",
      "لقبا الدوري النمساوي (2019-2020 و2020-2021) وثلاثة ألقاب كأس النمسا مع سالزبورغ",
      "أفضل لاعب صاعد في البوندسليجا 2022-2023",
      "أسرع لاعب مسجل في تاريخ البوندسليجا بسرعة 36.65 كم/ساعة"
    ],
    "achievementsEn": [
      "UEFA European Under-21 Championship 2021 with Germany",
      "Two Austrian league titles (2019-20, 2020-21) and three Austrian Cups with Salzburg",
      "Bundesliga Rookie of the Season 2022-23",
      "Fastest player recorded in Bundesliga history at 36.65 km/h"
    ],
    "clubsHistoryAr": [
      "أونترهاخينج",
      "ريد بول سالزبورغ",
      "دورتموند",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Unterhaching",
      "Red Bull Salzburg",
      "Borussia Dortmund",
      "Barcelona"
    ],
    "clubIds": [
      "borussia-dortmund",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Karim_Adeyemi"
  },
  {
    "id": "anthony-gordon",
    "nameAr": "أنتوني جوردون",
    "nameEn": "Anthony Gordon",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "برشلونة",
    "clubEn": "Barcelona",
    "clubId": "barcelona",
    "position": {
      "ar": "جناح أيسر",
      "en": "Left winger"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "جناح إنجليزي من ليفربول بدأ مع إيفرتون ثم انضم لنيوكاسل في يناير 2023، وصار هداف الفريق موسم 2025-2026 (17 هدفًا) قبل أن ينتقل إلى برشلونة في مايو 2026 بعقد لخمس سنوات.",
    "bioEn": "English winger from Liverpool who started at Everton, joined Newcastle in January 2023, became their top scorer in 2025-26 (17 goals) and signed for Barcelona in May 2026 on a five-year deal.",
    "achievementsAr": [
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "وصيف يورو 2024 مع إنجلترا",
      "كأس الرابطة الإنجليزية 2025 مع نيوكاسل (أول لقب محلي بعد 70 عامًا)",
      "بطولة أمم أوروبا تحت 21 سنة 2023 وأفضل لاعب فيها"
    ],
    "achievementsEn": [
      "FIFA World Cup third place 2026 with England",
      "UEFA Euro 2024 runner-up with England",
      "2025 EFL Cup with Newcastle (first domestic trophy in 70 years)",
      "UEFA European Under-21 Championship 2023 and Player of the Tournament"
    ],
    "clubsHistoryAr": [
      "إيفرتون",
      "بريستون نورث إند (إعارة)",
      "نيوكاسل يونايتد",
      "برشلونة"
    ],
    "clubsHistoryEn": [
      "Everton",
      "Preston North End (loan)",
      "Newcastle United",
      "Barcelona"
    ],
    "clubIds": [
      "everton",
      "preston-north-end",
      "newcastle-united",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Anthony_Gordon_(footballer)"
  },
  {
    "id": "andriy-lunin",
    "nameAr": "أندري لونين",
    "nameEn": "Andriy Lunin",
    "nationalityAr": "أوكراني",
    "nationalityEn": "Ukrainian",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "حارس مرمى أوكراني انضم إلى ريال مدريد عام 2018 قادمًا من زوريا لوهانسك، وخاض إعارات مع ليغانيس وبلد الوليد وأوفييدو، ثم أصبح الحارس الثاني للفريق خلف كورتوا.",
    "bioEn": "Ukrainian goalkeeper who joined Real Madrid in 2018 from Zorya Luhansk, had loans at Leganés, Valladolid and Oviedo, and became the club's second-choice keeper behind Courtois.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2021-2022 و2023-2024 مع ريال مدريد",
      "لقبا الدوري الإسباني 2021-2022 و2023-2024",
      "لقبا كأس السوبر الأوروبي (2022، 2024)",
      "كأس العالم تحت 20 سنة 2019 مع أوكرانيا"
    ],
    "achievementsEn": [
      "UEFA Champions League 2021-22 and 2023-24 with Real Madrid",
      "La Liga titles 2021-22 and 2023-24",
      "Two UEFA Super Cups (2022, 2024)",
      "FIFA U-20 World Cup 2019 with Ukraine"
    ],
    "clubsHistoryAr": [
      "دنيبرو",
      "زوريا لوهانسك",
      "ريال مدريد",
      "ليغانيس (إعارة)",
      "بلد الوليد (إعارة)",
      "أوفييدو (إعارة)"
    ],
    "clubsHistoryEn": [
      "Dnipro",
      "Zorya Luhansk",
      "Real Madrid",
      "Leganés (loan)",
      "Valladolid (loan)",
      "Oviedo (loan)"
    ],
    "clubIds": [
      "real-madrid",
      "real-valladolid",
      "real-oviedo"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Andriy_Lunin"
  },
  {
    "id": "raul-asencio",
    "nameAr": "راؤول أسينسيو",
    "nameEn": "Raúl Asencio",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "قلب دفاع",
      "en": "Centre-back"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "مدافع إسباني من مواليد لاس بالماس، انضم لأكاديمية ريال مدريد عام 2017، ولعب مع كاستيا، وظهر لأول مرة مع الفريق الأول في نوفمبر 2024 وفرض نفسه سريعًا، ثم ارتدى القميص رقم 2 موسم 2026-2027.",
    "bioEn": "Spanish centre-back born in Las Palmas who joined Real Madrid's academy in 2017, played for Castilla, made his first-team debut in November 2024 and quickly established himself, taking the number 2 shirt for 2026-27.",
    "achievementsAr": [
      "كأس إنتركونتيننتال 2024 مع ريال مدريد",
      "الظهور الأول مع الفريق الأول عام 2024",
      "الظهور الدولي الأول مع منتخب إسبانيا عام 2025"
    ],
    "achievementsEn": [
      "FIFA Intercontinental Cup 2024 with Real Madrid",
      "First-team debut in 2024",
      "Senior Spain international debut in 2025"
    ],
    "clubsHistoryAr": [
      "لاس بالماس (فئات سنية)",
      "ريال مدريد (فئات سنية)",
      "إنتر نيشنال",
      "ريال مدريد كاستيا",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Las Palmas (youth)",
      "Real Madrid (youth)",
      "RSC Internacional",
      "Real Madrid Castilla",
      "Real Madrid"
    ],
    "clubIds": [
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ra%C3%BAl_Asencio_(footballer,_born_2003)"
  },
  {
    "id": "ibrahima-konate",
    "nameAr": "إبراهيما كوناتي",
    "nameEn": "Ibrahima Konaté",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "قلب دفاع",
      "en": "Centre-back"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "مدافع فرنسي انضم لليفربول من لايبزيغ عام 2021 وخاض 183 مباراة معه، ثم انتقل إلى ريال مدريد لاعبًا حرًا بعقد حتى 2030 بعد انتهاء عقده مع ليفربول في يونيو 2026.",
    "bioEn": "French centre-back who joined Liverpool from RB Leipzig in 2021 and made 183 appearances, before moving to Real Madrid as a free agent on a contract until 2030 after his Liverpool deal expired in June 2026.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي 2024-2025 مع ليفربول",
      "لقبا كأس الرابطة وكأس الاتحاد الإنجليزي مع ليفربول",
      "وصيف دوري أبطال أوروبا 2022 مع ليفربول",
      "أكثر لاعب مولود في فرنسا مشاركة مع ليفربول (183 مباراة)"
    ],
    "achievementsEn": [
      "2024-25 Premier League title with Liverpool",
      "Two League Cups and an FA Cup with Liverpool",
      "UEFA Champions League runner-up 2022 with Liverpool",
      "Most appearances by a French-born player for Liverpool (183)"
    ],
    "clubsHistoryAr": [
      "سوشو",
      "لايبزيغ",
      "ليفربول",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Sochaux",
      "RB Leipzig",
      "Liverpool",
      "Real Madrid"
    ],
    "clubIds": [
      "sochaux",
      "rb-leipzig",
      "liverpool",
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ibrahima_Konat%C3%A9"
  },
  {
    "id": "marc-cucurella",
    "nameAr": "مارك كوكوريا",
    "nameEn": "Marc Cucurella",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "ظهير أيسر إسباني تخرج من أكاديمية برشلونة ولعب لإيباار وخيتافي وبرايتون قبل الانتقال إلى تشيلسي عام 2022، وانضم إلى ريال مدريد في 15 يونيو 2026 بعقد لست سنوات.",
    "bioEn": "Spanish left-back who came through Barcelona's academy, played for Eibar, Getafe and Brighton before joining Chelsea in 2022, and signed for Real Madrid on 15 June 2026 on a six-year contract.",
    "achievementsAr": [
      "دوري المؤتمر الأوروبي 2025 مع تشيلسي",
      "كأس العالم للأندية 2025 مع تشيلسي",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "ضمن قائمة إسبانيا في كأس العالم 2026 التي توجت باللقب"
    ],
    "achievementsEn": [
      "UEFA Conference League 2025 with Chelsea",
      "FIFA Club World Cup 2025 with Chelsea",
      "UEFA Euro 2024 with Spain",
      "Part of Spain's squad at the 2026 World Cup, which won the title"
    ],
    "clubsHistoryAr": [
      "برشلونة (فئات سنية)",
      "برشلونة ب",
      "إيباار",
      "خيتافي",
      "برايتون",
      "تشيلسي",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Barcelona (youth)",
      "Barcelona B",
      "Eibar",
      "Getafe",
      "Brighton",
      "Chelsea",
      "Real Madrid"
    ],
    "clubIds": [
      "getafe",
      "brighton-hove-albion",
      "chelsea",
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marc_Cucurella"
  },
  {
    "id": "alvaro-carreras",
    "nameAr": "ألفارو كاريراس",
    "nameEn": "Álvaro Carreras",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "ظهير أيسر إسباني من مواليد فيرول، مر بأكاديمية ريال مدريد (2017-2020) ثم مانشستر يونايتد، وأُعير إلى بريستون وغرناطة وبنفيكا، وعاد إلى ريال مدريد في يوليو 2025 مقابل 50 مليون يورو.",
    "bioEn": "Spanish left-back born in Ferrol who passed through Real Madrid's academy (2017-2020) and Manchester United, had loans at Preston, Granada and Benfica, and returned to Real Madrid in July 2025 for €50 million.",
    "achievementsAr": [
      "كأس الرابطة البرتغالية 2024-2025 مع بنفيكا",
      "ضمن التشكيلة المثالية للدوري البرتغالي حسب المدربين والقادة",
      "العودة إلى ريال مدريد في صفقة 50 مليون يورو صيف 2025"
    ],
    "achievementsEn": [
      "Portuguese League Cup 2024-25 with Benfica",
      "Named in the Portuguese league team of the season by coaches and captains",
      "Returned to Real Madrid in a €50m deal in summer 2025"
    ],
    "clubsHistoryAr": [
      "ريال مدريد (فئات سنية)",
      "مانشستر يونايتد",
      "بريستون نورث إند (إعارة)",
      "غرناطة (إعارة)",
      "بنفيكا",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Real Madrid (youth)",
      "Manchester United",
      "Preston North End (loan)",
      "Granada (loan)",
      "Benfica",
      "Real Madrid"
    ],
    "clubIds": [
      "manchester-united",
      "preston-north-end",
      "benfica",
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": ""
  },
  {
    "id": "denzel-dumfries",
    "nameAr": "دينزل دمفريس",
    "nameEn": "Denzel Dumfries",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "ظهير أيمن",
      "en": "Right wing-back"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "ظهير أيمن هولندي بدأ مع سبارتا روتردام وهيرنفين وبي إس في، وانتقل إلى إنتر ميلان عام 2021 حيث لعب 207 مباريات، ثم انضم إلى ريال مدريد في 5 يوليو 2026 بعقد حتى 2030.",
    "bioEn": "Dutch right wing-back who started at Sparta Rotterdam, Heerenveen and PSV, joined Inter Milan in 2021 where he made 207 appearances, and signed for Real Madrid on 5 July 2026 on a contract until 2030.",
    "achievementsAr": [
      "لقبا الدوري الإيطالي وثلاثة كؤوس إيطالية مع إنتر ميلان",
      "ثلاثة ألقاب كأس السوبر الإيطالي مع إنتر",
      "وصيف دوري أبطال أوروبا مرتين مع إنتر",
      "76 مباراة دولية مع هولندا"
    ],
    "achievementsEn": [
      "Two Serie A titles and three Coppa Italia titles with Inter Milan",
      "Three Italian Super Cups with Inter",
      "Two-time UEFA Champions League runner-up with Inter",
      "76 caps for the Netherlands"
    ],
    "clubsHistoryAr": [
      "بي في في باريندريخت",
      "سبارتا روتردام",
      "هيرنفين",
      "بي إس في",
      "إنتر ميلان",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "BVV Barendrecht",
      "Sparta Rotterdam",
      "Heerenveen",
      "PSV",
      "Inter Milan",
      "Real Madrid"
    ],
    "clubIds": [
      "psv-eindhoven",
      "inter-milan",
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Denzel_Dumfries"
  },
  {
    "id": "eduardo-camavinga",
    "nameAr": "إدواردو كامافينغا",
    "nameEn": "Eduardo Camavinga",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "لاعب وسط فرنسي مولود في كابيندا بأنغولا، بدأ مع رين وانضم إلى ريال مدريد عام 2021، ويجيد اللعب في الوسط وكظهير أيسر.",
    "bioEn": "French midfielder born in Cabinda, Angola, who started at Rennes and joined Real Madrid in 2021, comfortable in midfield and at left-back.",
    "achievementsAr": [
      "وصيف كأس العالم 2022 مع فرنسا",
      "دوري أبطال أوروبا 2021-2022 و2023-2024 مع ريال مدريد",
      "لقبا الدوري الإسباني 2021-2022 و2023-2024",
      "كأس الملك 2022-2023 مع ريال مدريد"
    ],
    "achievementsEn": [
      "FIFA World Cup runner-up 2022 with France",
      "UEFA Champions League 2021-22 and 2023-24 with Real Madrid",
      "La Liga titles 2021-22 and 2023-24",
      "Copa del Rey 2022-23 with Real Madrid"
    ],
    "clubsHistoryAr": [
      "رين",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Rennes",
      "Real Madrid"
    ],
    "clubIds": [
      "rennes",
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Eduardo_Camavinga"
  },
  {
    "id": "arda-guler",
    "nameAr": "أردا غولر",
    "nameEn": "Arda Güler",
    "nationalityAr": "تركي",
    "nationalityEn": "Turkish",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "لاعب وسط هجومي",
      "en": "Attacking midfielder"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "لاعب وسط هجومي تركي بدأ مع فنربخشة وانضم إلى ريال مدريد عام 2023، وهو أصغر لاعب سجل هدفًا مع منتخب تركيا، وصنع الفارق مع منتخب بلاده في يورو 2024.",
    "bioEn": "Turkish attacking midfielder who started at Fenerbahçe and joined Real Madrid in 2023, the youngest player ever to score for Turkey's national team, and a key figure in Turkey's Euro 2024 run.",
    "achievementsAr": [
      "كأس تركيا 2023 مع فنربخشة وأفضل لاعب في النهائي",
      "الدوري الإسباني ودوري أبطال أوروبا 2023-2024 مع ريال مدريد",
      "الوصول لربع نهائي يورو 2024 مع تركيا",
      "أصغر هداف في تاريخ منتخب تركيا"
    ],
    "achievementsEn": [
      "Turkish Cup 2023 with Fenerbahçe and Man of the Match in the final",
      "La Liga and UEFA Champions League 2023-24 with Real Madrid",
      "Reached the UEFA Euro 2024 quarter-finals with Turkey",
      "Youngest goalscorer in Turkey national team history"
    ],
    "clubsHistoryAr": [
      "جنجلربيرليغي (فئات سنية)",
      "فنربخشة",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Gençlerbirliği (youth)",
      "Fenerbahçe",
      "Real Madrid"
    ],
    "clubIds": [
      "fenerbahce",
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Arda_G%C3%BCler"
  },
  {
    "id": "endrick",
    "nameAr": "إندريك",
    "nameEn": "Endrick",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "مهاجم برازيلي صعد من أكاديمية بالميراس، وانضم إلى ريال مدريد في يوليو 2024 بعد إتمام 18 عامًا، وخاض إعارة مع ليون في 2026 قبل أن يعود ويحمل القميص رقم 9.",
    "bioEn": "Brazilian striker who rose through Palmeiras' academy, joined Real Madrid in July 2024 after turning 18, had a loan spell at Lyon in 2026 and returned to wear the number 9 shirt.",
    "achievementsAr": [
      "الدوري البرازيلي الممتاز مع بالميراس",
      "هداف وأفضل لاعب في بطولة مونتيغو تحت 17 سنة 2022 مع البرازيل",
      "أصغر لاعب يسجل هدفًا دوليًا في ملعب ويمبلي",
      "المشاركة مع البرازيل في كأس العالم 2026"
    ],
    "achievementsEn": [
      "Brazilian Série A title with Palmeiras",
      "Top scorer and best player of the 2022 Montaigu Tournament with Brazil U17",
      "Youngest male player to score an international goal at Wembley",
      "Played for Brazil at the 2026 World Cup"
    ],
    "clubsHistoryAr": [
      "بالميراس",
      "ريال مدريد",
      "ليون (إعارة)"
    ],
    "clubsHistoryEn": [
      "Palmeiras",
      "Real Madrid",
      "Lyon (loan)"
    ],
    "clubIds": [
      "palmeiras",
      "real-madrid",
      "lyon"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Endrick_(footballer,_born_2006)"
  },
  {
    "id": "franco-mastantuono",
    "nameAr": "فرانكو ماستانتونو",
    "nameEn": "Franco Mastantuono",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "لاعب وسط هجومي / جناح أيمن",
      "en": "Attacking midfielder / Right winger"
    },
    "era": "2024-الآن",
    "active": true,
    "bioAr": "لاعب وسط هجومي أرجنتيني من أكاديمية ريفر بليت، أصبح أصغر لاعب في تاريخ منتخب الأرجنتين يشارك في مباراة رسمية، وانضم إلى ريال مدريد في 14 أغسطس 2025 بعد بلوغه 18 عامًا بعقد حتى 2031.",
    "bioEn": "Argentine attacking midfielder from River Plate's academy who became the youngest player in Argentina national team history to play an official match, and joined Real Madrid on 14 August 2025 after turning 18 on a contract until 2031.",
    "achievementsAr": [
      "كأس السوبر الأرجنتيني مع ريفر بليت",
      "أصغر لاعب يشارك رسميًا مع منتخب الأرجنتين",
      "أصغر هداف في تاريخ ريفر بليت وسجل هدفًا من ركلة حرة في السوبركلاسيكو ضد بوكا جونيورز",
      "أعلى صفقة بيع لنادٍ أرجنتيني إلى الخارج بقيمة 45 مليون يورو"
    ],
    "achievementsEn": [
      "Argentine Super Cup with River Plate",
      "Youngest player to feature officially for Argentina",
      "Youngest scorer in River Plate history, scoring a free kick in the Superclásico against Boca Juniors",
      "Highest-ever sale by an Argentine club abroad at €45m"
    ],
    "clubsHistoryAr": [
      "ريفر بليت",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "River Plate",
      "Real Madrid"
    ],
    "clubIds": [
      "river-plate",
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Franco_Mastantuono"
  },
  {
    "id": "brahim-diaz",
    "nameAr": "إبراهيم دياز",
    "nameEn": "Brahim Díaz",
    "nationalityAr": "مغربي",
    "nationalityEn": "Moroccan",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "لاعب وسط هجومي / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "لاعب وسط هجومي مولود في مالقة، مر بأكاديمية مانشستر سيتي ثم ريال مدريد، وأُعير إلى ميلان حيث توج بالدوري الإيطالي، وقرر تمثيل المغرب منذ 2024 وتوج معه بكأس أمم أفريقيا 2025.",
    "bioEn": "Attacking midfielder born in Málaga who came through Manchester City's academy and then Real Madrid, won Serie A on loan at AC Milan, and switched to represent Morocco in 2024, winning the 2025 Africa Cup of Nations.",
    "achievementsAr": [
      "كأس أمم أفريقيا 2025 مع المغرب",
      "الدوري الإيطالي 2021-2022 مع ميلان",
      "الدوري الإسباني 2019-2020 والسوبر الإسباني 2020 مع ريال مدريد",
      "الدوري الإنجليزي 2017-2018 وكأس الرابطة مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "Africa Cup of Nations 2025 with Morocco",
      "Serie A title 2021-22 with AC Milan",
      "La Liga 2019-20 and Spanish Super Cup 2020 with Real Madrid",
      "Premier League 2017-18 and League Cup with Manchester City"
    ],
    "clubsHistoryAr": [
      "مالقة (فئات سنية)",
      "مانشستر سيتي",
      "ريال مدريد",
      "ميلان (إعارة)",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Málaga (youth)",
      "Manchester City",
      "Real Madrid",
      "AC Milan (loan)",
      "Real Madrid"
    ],
    "clubIds": [
      "manchester-city",
      "real-madrid",
      "ac-milan"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Brahim_D%C3%ADaz"
  },
  {
    "id": "ferland-mendy",
    "nameAr": "فيرلاند ميندي",
    "nameEn": "Ferland Mendy",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ريال مدريد",
    "clubEn": "Real Madrid",
    "clubId": "real-madrid",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "ظهير أيسر فرنسي بدأ مع لوهافر ثم ليون، وانضم إلى ريال مدريد عام 2019 حيث أصبح ظهيرًا أيسر أساسيًا وتوج بألقاب محلية وأوروبية عديدة.",
    "bioEn": "French left-back who started at Le Havre and Lyon, joined Real Madrid in 2019 and became a regular left-back, winning numerous domestic and European honours.",
    "achievementsAr": [
      "ثلاثة ألقاب دوري إسباني (2019-2020، 2021-2022، 2023-2024)",
      "دوري أبطال أوروبا 2021-2022 و2023-2024",
      "كأس الملك 2022-2023 وكأس العالم للأندية 2022",
      "دوري الأمم الأوروبية 2021 مع فرنسا"
    ],
    "achievementsEn": [
      "Three La Liga titles (2019-20, 2021-22, 2023-24)",
      "UEFA Champions League 2021-22 and 2023-24",
      "Copa del Rey 2022-23 and FIFA Club World Cup 2022",
      "UEFA Nations League 2021 with France"
    ],
    "clubsHistoryAr": [
      "لوهافر",
      "ليون",
      "ريال مدريد"
    ],
    "clubsHistoryEn": [
      "Le Havre",
      "Lyon",
      "Real Madrid"
    ],
    "clubIds": [
      "le-havre",
      "lyon",
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ferland_Mendy"
  },
  {
    "id": "dominik-szoboszlai",
    "nameAr": "دومينيك سوبوسلاي",
    "nameEn": "Dominik Szoboszlai",
    "nationalityAr": "مجري",
    "nationalityEn": "Hungarian",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "لاعب وسط مجري وقائد منتخب المجر، بدأ مع ليفربول النمساوي (ليفيرينغ) وريد بول سالزبورغ ثم لايبزيغ قبل الانتقال إلى ليفربول عام 2023، وأصبح أول مجري يفوز بالدوري الإنجليزي. مدد عقده مع ليفربول قبل موسم 2026-2027.",
    "bioEn": "Hungarian midfielder and captain of the Hungary national team who came through FC Liefering and Red Bull Salzburg, then RB Leipzig, before joining Liverpool in 2023, becoming the first Hungarian to win the Premier League. He signed a new contract with Liverpool ahead of the 2026-27 season.",
    "achievementsAr": [
      "الدوري الإنجليزي الممتاز 2024-2025 مع ليفربول (أول مجري يحقق ذلك)",
      "كأس الرابطة الإنجليزية 2024 مع ليفربول",
      "أربعة ألقاب دوري نمساوي وثلاث كؤوس نمساوية مع سالزبورغ",
      "لقبا كأس ألمانيا (2022، 2023) مع لايبزيغ"
    ],
    "achievementsEn": [
      "2024-25 Premier League with Liverpool (first Hungarian to do so)",
      "2024 EFL Cup with Liverpool",
      "Four Austrian league titles and three Austrian Cups with Red Bull Salzburg",
      "Two DFB-Pokal titles (2022, 2023) with RB Leipzig"
    ],
    "clubsHistoryAr": [
      "ليفيرينغ",
      "ريد بول سالزبورغ",
      "لايبزيغ",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Liefering",
      "Red Bull Salzburg",
      "RB Leipzig",
      "Liverpool"
    ],
    "clubIds": [
      "rb-leipzig",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dominik_Szoboszlai"
  },
  {
    "id": "hugo-ekitike",
    "nameAr": "هوغو إيكيتيكي",
    "nameEn": "Hugo Ekitike",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "مهاجم فرنسي بدأ مع ريمس وخاض تجارب مع باريس سان جيرمان وأينتراخت فرانكفورت، وانضم إلى ليفربول في يوليو 2025 مقابل نحو 80 مليون يورو (حسب ويكيبيديا)، وسجل أهدافًا في أول ظهور له في الدوري الإنجليزي.",
    "bioEn": "French striker who started at Reims and had spells at Paris Saint-Germain and Eintracht Frankfurt, joining Liverpool in July 2025 for a reported €80 million (per Wikipedia) and scoring on his Premier League debut.",
    "achievementsAr": [
      "الدوري الفرنسي 2022-2023 مع باريس سان جيرمان",
      "كأس الأبطال الفرنسي 2022 و2023 مع باريس سان جيرمان",
      "تسجيل 15 هدفًا في البوندسليجا 2024-2025 مع فرانكفورت وضمه لتشكيلة الموسم",
      "بطولة تولون للشباب 2022 مع فرنسا تحت 20 سنة"
    ],
    "achievementsEn": [
      "Ligue 1 2022-23 with Paris Saint-Germain",
      "Trophée des Champions 2022 and 2023 with Paris Saint-Germain",
      "15 Bundesliga goals in 2024-25 with Frankfurt and named in the league's best XI",
      "Maurice Revello Tournament 2022 with France U20"
    ],
    "clubsHistoryAr": [
      "ريمس",
      "فيله (إعارة)",
      "باريس سان جيرمان",
      "أينتراخت فرانكفورت",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Reims",
      "Vejle (loan)",
      "Paris Saint-Germain",
      "Eintracht Frankfurt",
      "Liverpool"
    ],
    "clubIds": [
      "reims",
      "paris-saint-germain",
      "eintracht-frankfurt",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hugo_Ekitike"
  },
  {
    "id": "gabriel-martinelli",
    "nameAr": "غابرييل مارتينيلي",
    "nameEn": "Gabriel Martinelli",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "الهلال",
    "clubEn": "Al-Hilal",
    "clubId": null,
    "position": {
      "ar": "جناح أيسر / مهاجم",
      "en": "Left winger / Forward"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "جناح برازيلي بدأ مع إيتوانو وانضم إلى أرسنال عام 2019 مقابل 6 ملايين جنيه، وقضى سبعة مواسم في لندن قبل الانتقال إلى الهلال السعودي عام 2026 مقابل نحو 60 مليون جنيه.",
    "bioEn": "Brazilian winger who started at Ituano and joined Arsenal in 2019 for £6 million, spending seven seasons in London before moving to Saudi club Al-Hilal in 2026 for around £60 million.",
    "achievementsAr": [
      "الميدالية الذهبية الأولمبية طوكيو 2020 مع البرازيل",
      "لقب الدوري الإنجليزي الممتاز وكأس الاتحاد الإنجليزي ودرع المجتمع مع أرسنال",
      "وصيف دوري أبطال أوروبا 2025-2026 مع أرسنال",
      "المشاركة مع البرازيل في كأس العالم 2022 و2026 وكوبا أمريكا 2024"
    ],
    "achievementsEn": [
      "Olympic gold medal at Tokyo 2020 with Brazil",
      "Premier League, FA Cup and Community Shield with Arsenal",
      "UEFA Champions League runner-up 2025-26 with Arsenal",
      "Played for Brazil at the 2022 and 2026 World Cups and 2024 Copa América"
    ],
    "clubsHistoryAr": [
      "إيتوانو",
      "أرسنال",
      "الهلال"
    ],
    "clubsHistoryEn": [
      "Ituano",
      "Arsenal",
      "Al-Hilal"
    ],
    "clubIds": [
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gabriel_Martinelli"
  },
  {
    "id": "kenan-yildiz",
    "nameAr": "كنان يلدز",
    "nameEn": "Kenan Yıldız",
    "nationalityAr": "تركي",
    "nationalityEn": "Turkish",
    "clubAr": "يوفنتوس",
    "clubEn": "Juventus",
    "clubId": "juventus",
    "position": {
      "ar": "لاعب وسط هجومي / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "لاعب تركي مولود في ألمانيا، تدرج في أكاديمية بايرن ميونيخ لعشر سنوات ثم انضم إلى يوفنتوس عام 2022 وحمل القميص رقم 10. اختير أفضل لاعب تحت 23 سنة في الدوري الإيطالي موسم 2025-2026.",
    "bioEn": "Turkish player born in Germany who spent ten years in Bayern Munich's academy before joining Juventus in 2022 and taking the number 10 shirt. He was named Serie A's Best Under-23 Player for 2025-26.",
    "achievementsAr": [
      "كأس إيطاليا 2023-2024 مع يوفنتوس",
      "جائزة أفضل لاعب شاب في الدوري الإيطالي 2025-2026",
      "تمديد عقده مع يوفنتوس حتى 2030",
      "المشاركة مع تركيا في كأس العالم 2026"
    ],
    "achievementsEn": [
      "Coppa Italia 2023-24 with Juventus",
      "Serie A Best Under-23 Player 2025-26 (Rising Star)",
      "Extended his Juventus contract until 2030",
      "Played for Turkey at the 2026 World Cup"
    ],
    "clubsHistoryAr": [
      "بايرن ميونيخ (فئات سنية)",
      "يوفنتوس نكست جين",
      "يوفنتوس"
    ],
    "clubsHistoryEn": [
      "Bayern Munich (youth)",
      "Juventus Next Gen",
      "Juventus"
    ],
    "clubIds": [
      "juventus"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kenan_Y%C4%B1ld%C4%B1z"
  },
  {
    "id": "ademola-lookman",
    "nameAr": "أديمولا لوكمان",
    "nameEn": "Ademola Lookman",
    "nationalityAr": "نيجيري",
    "nationalityEn": "Nigerian",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "جناح / مهاجم ثانٍ",
      "en": "Winger / Second striker"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "جناح نيجيري مولود في لندن، بدأ مع تشارلتون وإيفرتون ولايبزيغ وخاض إعارتين مع فولهام وليستر، ثم تألق مع أتالانتا وسجل ثلاثية في نهائي الدوري الأوروبي 2024، وانتقل إلى أتلتيكو مدريد في فبراير 2026.",
    "bioEn": "Nigerian winger born in London who began at Charlton, Everton and RB Leipzig with loans at Fulham and Leicester, then shone at Atalanta, scoring a hat-trick in the 2024 Europa League final, before joining Atlético Madrid in February 2026.",
    "achievementsAr": [
      "الدوري الأوروبي 2023-2024 مع أتالانتا وثلاثية في النهائي أمام ليفركوزن",
      "أفضل لاعب في أفريقيا 2024 (الكرة الذهبية الأفريقية)",
      "وصيف كأس أمم أفريقيا 2023 والمركز الثالث في 2025 مع نيجيريا",
      "كأس العالم تحت 20 سنة 2017 مع إنجلترا"
    ],
    "achievementsEn": [
      "UEFA Europa League 2023-24 with Atalanta with a hat-trick in the final against Leverkusen",
      "African Footballer of the Year 2024",
      "Africa Cup of Nations runner-up 2023 and third place 2025 with Nigeria",
      "FIFA U-20 World Cup 2017 with England"
    ],
    "clubsHistoryAr": [
      "تشارلتون",
      "إيفرتون",
      "لايبزيغ",
      "فولهام (إعارة)",
      "ليستر سيتي (إعارة)",
      "أتالانتا",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Charlton Athletic",
      "Everton",
      "RB Leipzig",
      "Fulham (loan)",
      "Leicester City (loan)",
      "Atalanta",
      "Atlético Madrid"
    ],
    "clubIds": [
      "charlton-athletic",
      "everton",
      "rb-leipzig",
      "fulham",
      "leicester-city",
      "atalanta",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ademola_Lookman"
  },
  {
    "id": "mido",
    "nameAr": "ميدو",
    "nameEn": "Mido",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1999-2013",
    "active": false,
    "bioAr": "مهاجم مصري سابق واسمه الحقيقي أحمد حسام، بدأ مسيرته مع الزمالك ولعب في أوروبا لأندية منها أياكس ومارسيليا وروما وتوتنهام وميدلزبره، ثم اتجه للتدريب بعد الاعتزال.",
    "bioEn": "Former Egyptian striker, born Ahmed Hossam, who started at Zamalek and played in Europe for clubs including Ajax, Marseille, Roma, Tottenham Hotspur and Middlesbrough before moving into management.",
    "achievementsAr": [
      "كأس أمم أفريقيا 2006 مع مصر",
      "المركز الثالث في بطولة أمم أفريقيا للشباب 2001 مع منتخب مصر"
    ],
    "achievementsEn": [
      "Africa Cup of Nations 2006 with Egypt",
      "Third place at the 2001 African Youth Championship with Egypt"
    ],
    "clubsHistoryAr": [
      "الزمالك",
      "خنت",
      "أياكس",
      "سيلتا فيغو (إعارة)",
      "مارسيليا",
      "روما",
      "توتنهام هوتسبير",
      "ميدلزبره",
      "ويغان أتلتيك (إعارة)",
      "الزمالك (إعارة)",
      "وست هام يونايتد (إعارة)",
      "أياكس",
      "الزمالك",
      "بارنسلي"
    ],
    "clubsHistoryEn": [
      "Zamalek",
      "Gent",
      "Ajax",
      "Celta Vigo (loan)",
      "Marseille",
      "Roma",
      "Tottenham Hotspur",
      "Middlesbrough",
      "Wigan Athletic (loan)",
      "Zamalek (loan)",
      "West Ham United (loan)",
      "Ajax",
      "Zamalek",
      "Barnsley"
    ],
    "clubIds": [
      "zamalek",
      "ajax",
      "celta-vigo",
      "marseille",
      "roma",
      "tottenham",
      "middlesbrough",
      "wigan-athletic",
      "west-ham-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mido_(footballer)"
  },
  {
    "id": "ferran-torres",
    "nameAr": "فيران توريس",
    "nameEn": "Ferran Torres",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "باريس سان جيرمان",
    "clubEn": "Paris Saint-Germain",
    "clubId": "paris-saint-germain",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "مهاجم إسباني سجّل هدف الفوز لإسبانيا في الوقت الإضافي من نهائي كأس العالم 2026 أمام الأرجنتين. لعب لفالنسيا ومانشستر سيتي وبرشلونة، وانضم إلى باريس سان جيرمان في أغسطس 2026 بعقد حتى 2031.",
    "bioEn": "Spanish forward who scored the winning goal in extra time of the 2026 World Cup final against Argentina. He has played for Valencia, Manchester City and Barcelona, and joined Paris Saint-Germain in August 2026 on a contract until 2031.",
    "achievementsAr": [
      "كأس العالم 2026 مع إسبانيا (سجّل هدف الفوز في الوقت الإضافي بالنهائي أمام الأرجنتين)",
      "3 ألقاب دوري إسباني مع برشلونة"
    ],
    "achievementsEn": [
      "2026 FIFA World Cup with Spain (scored the extra-time winner in the final against Argentina)",
      "3 La Liga titles with Barcelona"
    ],
    "clubsHistoryAr": [
      "فالنسيا",
      "مانشستر سيتي",
      "برشلونة",
      "باريس سان جيرمان"
    ],
    "clubsHistoryEn": [
      "Valencia",
      "Manchester City",
      "Barcelona",
      "Paris Saint-Germain"
    ],
    "clubIds": [
      "valencia",
      "manchester-city",
      "barcelona",
      "paris-saint-germain"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ferran_Torres"
  },
  {
    "id": "gordon-banks",
    "nameAr": "غوردون بانكس",
    "nameEn": "Gordon Banks",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "فورت لودرديل سترايكرز (معتزل)",
    "clubEn": "Fort Lauderdale Strikers (retired)",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1958-1978",
    "active": false,
    "bioAr": "حارس مرمى إنجليزي أسطوري (1937-2019)، خاض كل مباريات إنجلترا في مونديال 1966 وتُوّج باللقب، واشتُهر بتصديه الشهير لرأسية بيليه في مونديال 1970. فقد بصر عينه اليمنى في حادث سيارة عام 1972 وهو لاعب في ستوك سيتي.",
    "bioEn": "Legendary English goalkeeper (1937-2019) who started every game of England's 1966 World Cup win and is remembered for his famous save from a Pelé header at the 1970 World Cup. He lost the sight in his right eye in a 1972 car crash while at Stoke City.",
    "achievementsAr": [
      "كأس العالم 1966 مع إنجلترا",
      "كأس الرابطة الإنجليزية 1964 مع ليستر سيتي",
      "كأس الرابطة الإنجليزية 1972 مع ستوك سيتي (اللقب الكبير الوحيد في تاريخ النادي)",
      "73 مباراة دولية مع منتخب إنجلترا",
      "أفضل حارس مرمى في الدوري الأمريكي الشمالي (NASL) عام 1977"
    ],
    "achievementsEn": [
      "1966 FIFA World Cup with England",
      "League Cup 1964 with Leicester City",
      "League Cup 1972 with Stoke City (the club's only major honour)",
      "73 caps for England",
      "NASL Goalkeeper of the Year 1977"
    ],
    "clubsHistoryAr": [
      "تشيسترفيلد",
      "ليستر سيتي",
      "ستوك سيتي",
      "فورت لودرديل سترايكرز"
    ],
    "clubsHistoryEn": [
      "Chesterfield",
      "Leicester City",
      "Stoke City",
      "Fort Lauderdale Strikers"
    ],
    "clubIds": [
      "leicester-city",
      "stoke-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gordon_Banks"
  },
  {
    "id": "wael-gomaa",
    "nameAr": "وائل جمعة",
    "nameEn": "Wael Gomaa",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "الأهلي (معتزل)",
    "clubEn": "Al Ahly (retired)",
    "clubId": "al-ahly",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "1993-2014",
    "active": false,
    "bioAr": "قلب دفاع مصري سابق يُعد من أفضل المدافعين الأفارقة في التاريخ، لعب لغزل المحلة ثم الأهلي (2001-2014) وأعلن اعتزاله في مايو 2014 وهو قائد الأهلي والمنتخب.",
    "bioEn": "Former Egyptian centre-back regarded as one of the best African defenders of all time. He played for Ghazl El Mahalla and then Al Ahly (2001-2014), retiring in May 2014.",
    "achievementsAr": [
      "3 ألقاب كأس أمم أفريقيا مع مصر (2006، 2008، 2010)",
      "26 لقبًا مع الأهلي بينها 6 ألقاب دوري أبطال أفريقيا",
      "6 ألقاب كأس السوبر الأفريقي مع الأهلي",
      "أفضل مدافع في أفريقيا 4 مرات (2006، 2008، 2009، 2010)",
      "114 مباراة دولية مع منتخب مصر"
    ],
    "achievementsEn": [
      "3 Africa Cup of Nations titles with Egypt (2006, 2008, 2010)",
      "26 trophies with Al Ahly including 6 CAF Champions League titles",
      "6 African Super Cups with Al Ahly",
      "Africa's best defender four times (2006, 2008, 2009, 2010)",
      "114 caps for Egypt"
    ],
    "clubsHistoryAr": [
      "غزل المحلة",
      "الأهلي",
      "السيلية (إعارة)"
    ],
    "clubsHistoryEn": [
      "Ghazl El Mahalla",
      "Al Ahly",
      "Al-Sailiya (loan)"
    ],
    "clubIds": [
      "ghazl-el-mahalla",
      "al-ahly"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Wael_Gomaa"
  },
  {
    "id": "marcelo",
    "nameAr": "مارسيلو",
    "nameEn": "Marcelo",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2005-2024",
    "active": false,
    "bioAr": "ظهير أيسر برازيلي يُعد أحد أفضل من لعب في مركزه بتاريخ الكرة، أمضى 16 موسمًا مع ريال مدريد (2007-2022) وفاز بـ25 لقبًا بينها 5 دوريات أبطال أوروبا و6 ألقاب دوري إسباني، وأصبح أول لاعب غير إسباني يقود الفريق كقائد. أنهى مسيرته مع فلومينينسي الذي بدأ معه، وأعلن اعتزاله في فبراير 2025.",
    "bioEn": "Brazilian left-back regarded as one of the greatest ever in his position. He spent 16 seasons at Real Madrid (2007-2022), winning 25 titles including 5 UEFA Champions League and 6 La Liga titles, and became the first non-Spanish club captain. He ended his career back at boyhood club Fluminense and announced his retirement in February 2025.",
    "achievementsAr": [
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "6 ألقاب دوري إسباني مع ريال مدريد",
      "كوبا ليبرتادوريس 2023 مع فلومينينسي",
      "بطولة كأس القارات 2013 مع البرازيل",
      "ميدالية فضية أولمبية 2012 وبرونزية 2008 مع البرازيل"
    ],
    "achievementsEn": [
      "5 UEFA Champions League titles with Real Madrid",
      "6 La Liga titles with Real Madrid",
      "2023 Copa Libertadores with Fluminense",
      "2013 FIFA Confederations Cup with Brazil",
      "Olympic silver medal 2012 and bronze 2008 with Brazil"
    ],
    "clubsHistoryAr": [
      "فلومينينسي",
      "ريال مدريد",
      "أوليمبياكوس",
      "فلومينينسي"
    ],
    "clubsHistoryEn": [
      "Fluminense",
      "Real Madrid",
      "Olympiacos",
      "Fluminense"
    ],
    "clubIds": [
      "real-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marcelo_(footballer,_born_1988)"
  },
  {
    "id": "thiago-alcantara",
    "nameAr": "تياغو ألكانتارا",
    "nameEn": "Thiago Alcântara",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2009-2024",
    "active": false,
    "bioAr": "لاعب وسط إسباني وُلد في إيطاليا وابن ماظينيو بطل كأس العالم 1994 مع البرازيل. تدرج في أكاديمية برشلونة وفاز بالثلاثية معه موسم 2010-2011، ثم انتقل لبايرن ميونخ وفاز بالثلاثية القارية 2019-2020، قبل أن يختتم مسيرته مع ليفربول وسط إصابات متكررة، وأعلن اعتزاله في يوليو 2024.",
    "bioEn": "Spanish midfielder born in Italy, son of Brazil's 1994 World Cup winner Mazinho. He rose through Barcelona's academy, winning the treble in 2010-11, before moving to Bayern Munich and winning the continental treble in 2019-20, then ended his career at Liverpool hampered by injuries, retiring in July 2024.",
    "achievementsAr": [
      "الثلاثية القارية 2019-2020 مع بايرن ميونخ (الدوري والكأس ودوري الأبطال)",
      "دوري أبطال أوروبا 2010-2011 مع برشلونة",
      "7 ألقاب دوري ألماني مع بايرن ميونخ",
      "لقب الدوري الإسباني 2010-2011 مع برشلونة"
    ],
    "achievementsEn": [
      "2019-20 continental treble with Bayern Munich (Bundesliga, DFB-Pokal, Champions League)",
      "2010-11 UEFA Champions League with Barcelona",
      "7 Bundesliga titles with Bayern Munich",
      "2010-11 La Liga title with Barcelona"
    ],
    "clubsHistoryAr": [
      "برشلونة",
      "بايرن ميونخ",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Barcelona",
      "Bayern Munich",
      "Liverpool"
    ],
    "clubIds": [
      "barcelona",
      "bayern-munich",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Thiago_Alc%C3%A2ntara"
  },
  {
    "id": "ivan-rakitic",
    "nameAr": "إيفان راكيتيتش",
    "nameEn": "Ivan Rakitić",
    "nationalityAr": "كرواتي",
    "nationalityEn": "Croatian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2005-2025",
    "active": false,
    "bioAr": "لاعب وسط كرواتي كان أحد ركائز الجيل الذهبي الكرواتي الذي وصل لنهائي كأس العالم 2018. فاز بالثلاثية مع برشلونة موسم 2014-2015، وسجل الهدف الأول في نهائي دوري الأبطال 2015. أنهى مسيرته مع هايدوك سبليت وأعلن اعتزاله في يوليو 2025.",
    "bioEn": "Croatian midfielder who was a pillar of Croatia's golden generation that reached the 2018 World Cup final. He won the treble with Barcelona in 2014-15, scoring the opening goal in the 2015 Champions League final. He ended his career at Hajduk Split, retiring in July 2025.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2014-2015 مع برشلونة (سجّل الهدف الأول في النهائي)",
      "4 ألقاب دوري إسباني مع برشلونة",
      "لقبا الدوري الأوروبي مع إشبيلية (2014، 2023)",
      "وصافة كأس العالم 2018 مع كرواتيا"
    ],
    "achievementsEn": [
      "2014-15 UEFA Champions League with Barcelona (scored the opening goal in the final)",
      "4 La Liga titles with Barcelona",
      "2 UEFA Europa League titles with Sevilla (2014, 2023)",
      "2018 World Cup runner-up with Croatia"
    ],
    "clubsHistoryAr": [
      "بازل",
      "شالكه 04",
      "إشبيلية",
      "برشلونة",
      "إشبيلية",
      "الشباب (السعودية)",
      "هايدوك سبليت"
    ],
    "clubsHistoryEn": [
      "Basel",
      "Schalke 04",
      "Sevilla",
      "Barcelona",
      "Sevilla",
      "Al-Shabab (Saudi Arabia)",
      "Hajduk Split"
    ],
    "clubIds": [
      "schalke-04",
      "sevilla",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ivan_Rakiti%C4%87"
  },
  {
    "id": "radamel-falcao",
    "nameAr": "راداميل فالكاو",
    "nameEn": "Radamel Falcao",
    "nationalityAr": "كولومبي",
    "nationalityEn": "Colombian",
    "clubAr": "ميلوناريوس",
    "clubEn": "Millonarios",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2005-الآن",
    "active": true,
    "bioAr": "مهاجم كولومبي وهداف منتخب بلاده التاريخي، لعب لريفر بليت وبورتو وأتلتيكو مدريد وموناكو وتشيلسي ومانشستر يونايتد وغلطة سراي وغيرها. عاد لناديه المفضل ميلوناريوس البوغوتي في عدة مراحل، آخرها في يناير 2026.",
    "bioEn": "Colombian striker and his country's all-time record goalscorer, who has played for River Plate, Porto, Atlético Madrid, Monaco, Chelsea, Manchester United, Galatasaray and others. He has returned to boyhood club Millonarios of Bogotá in several spells, most recently in January 2026.",
    "achievementsAr": [
      "هداف تاريخي لمنتخب كولومبيا",
      "لقبا الدوري الأوروبي (يوروبا ليغ) مع بورتو وأتلتيكو مدريد",
      "الدوري البرتغالي مع بورتو",
      "الدوري الإسباني 2013-2014 مع أتلتيكو مدريد"
    ],
    "achievementsEn": [
      "Colombia's all-time top goalscorer",
      "UEFA Europa League titles with Porto and Atlético Madrid",
      "Primeira Liga title with Porto",
      "2013-14 La Liga title with Atlético Madrid"
    ],
    "clubsHistoryAr": [
      "ريفر بليت",
      "بورتو",
      "أتلتيكو مدريد",
      "موناكو",
      "مانشستر يونايتد (إعارة)",
      "تشيلسي (إعارة)",
      "موناكو",
      "غلطة سراي",
      "رايو فاليكانو",
      "ميلوناريوس"
    ],
    "clubsHistoryEn": [
      "River Plate",
      "Porto",
      "Atlético Madrid",
      "Monaco",
      "Manchester United (loan)",
      "Chelsea (loan)",
      "Monaco",
      "Galatasaray",
      "Rayo Vallecano",
      "Millonarios"
    ],
    "clubIds": [
      "river-plate",
      "porto",
      "atletico-madrid",
      "monaco",
      "manchester-united",
      "chelsea",
      "galatasaray",
      "rayo-vallecano"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Radamel_Falcao"
  },
  {
    "id": "toni-schumacher",
    "nameAr": "توني شوماخر",
    "nameEn": "Toni Schumacher",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1972-1996",
    "active": false,
    "bioAr": "حارس مرمى ألماني غربي أسطوري، أمضى معظم مسيرته مع كولن (1972-1987) وفاز معه بالثنائية موسم 1977-1978. وصل لنهائي كأس العالم مرتين (1982، 1986) وفاز ببطولة أوروبا 1980 مع ألمانيا الغربية، وارتبط اسمه بحادثة تصادمه المثيرة للجدل مع الفرنسي باتيستون في مونديال 1982.",
    "bioEn": "Legendary West German goalkeeper who spent most of his career at 1. FC Köln (1972-1987), winning the double in 1977-78. He reached two World Cup finals (1982, 1986) and won Euro 1980 with West Germany, and is remembered for his controversial collision with France's Patrick Battiston at the 1982 World Cup.",
    "achievementsAr": [
      "بطولة أمم أوروبا 1980 مع ألمانيا الغربية",
      "وصافة كأس العالم مرتين مع ألمانيا الغربية (1982، 1986)",
      "لقب الدوري الألماني وكأس ألمانيا (الثنائية) 1977-1978 مع كولن",
      "3 ألقاب كأس ألمانيا مع كولن",
      "أفضل لاعب في ألمانيا مرتين (1984، 1986)"
    ],
    "achievementsEn": [
      "UEFA Euro 1980 with West Germany",
      "World Cup runner-up twice with West Germany (1982, 1986)",
      "1977-78 Bundesliga and DFB-Pokal double with 1. FC Köln",
      "3 DFB-Pokal titles with Köln",
      "German Footballer of the Year twice (1984, 1986)"
    ],
    "clubsHistoryAr": [
      "كولن",
      "شالكه 04",
      "فنربخشة",
      "بايرن ميونخ",
      "بوروسيا دورتموند"
    ],
    "clubsHistoryEn": [
      "1. FC Köln",
      "Schalke 04",
      "Fenerbahçe",
      "Bayern Munich",
      "Borussia Dortmund"
    ],
    "clubIds": [
      "koln",
      "schalke-04",
      "fenerbahce",
      "bayern-munich",
      "borussia-dortmund"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Toni_Schumacher"
  },
  {
    "id": "ivan-zamorano",
    "nameAr": "إيفان زامورانو",
    "nameEn": "Iván Zamorano",
    "nationalityAr": "تشيلي",
    "nationalityEn": "Chilean",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1985-2003",
    "active": false,
    "bioAr": "مهاجم تشيلي يُلقب بـ'بام بام'، يُعد أحد أشهر لاعبي بلاده في التاريخ. لعب لريال مدريد (1992-1996) وكان هدافًا للدوري الإسباني موسم 1994-1995، ثم انتقل لإنتر ميلان وفاز معه بالدوري الأوروبي 1998، وأنهى مسيرته في المكسيك وتشيلي.",
    "bioEn": "Chilean striker nicknamed 'Bam Bam', regarded as one of his country's most recognized footballers. He played for Real Madrid (1992-1996), finishing as La Liga top scorer in 1994-95, then moved to Inter Milan where he won the 1998 UEFA Cup, before finishing his career in Mexico and Chile.",
    "achievementsAr": [
      "هداف الدوري الإسباني 1994-1995 مع ريال مدريد",
      "لقب الدوري الإسباني 1994-1995 مع ريال مدريد",
      "الدوري الأوروبي (كأس الاتحاد) 1998 مع إنتر ميلان",
      "لقب الدوري المكسيكي 2002 مع أمريكا",
      "ميدالية برونزية أولمبية 2000 مع تشيلي (هداف البطولة)"
    ],
    "achievementsEn": [
      "1994-95 La Liga top scorer with Real Madrid",
      "1994-95 La Liga title with Real Madrid",
      "1998 UEFA Cup with Inter Milan",
      "2002 Mexican league title with América",
      "2000 Olympic bronze medal with Chile (tournament top scorer)"
    ],
    "clubsHistoryAr": [
      "كوبريسال",
      "سانت غالن",
      "إشبيلية",
      "ريال مدريد",
      "إنتر ميلان",
      "أمريكا (المكسيك)",
      "كولو كولو"
    ],
    "clubsHistoryEn": [
      "Cobresal",
      "St. Gallen",
      "Sevilla",
      "Real Madrid",
      "Inter Milan",
      "América (Mexico)",
      "Colo-Colo"
    ],
    "clubIds": [
      "sevilla",
      "real-madrid",
      "inter-milan"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Iv%C3%A1n_Zamorano"
  },
  {
    "id": "samir-nasri",
    "nameAr": "سمير نصري",
    "nameEn": "Samir Nasri",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط هجومي",
      "en": "Attacking midfielder"
    },
    "era": "2004-2020",
    "active": false,
    "bioAr": "لاعب وسط هجومي فرنسي بدأ مسيرته مع مارسيليا، ولعب لأرسنال قبل أن ينتقل لمانشستر سيتي وفاز معه بلقبي الدوري الإنجليزي. تعرض لإيقاف من الفيفا بسبب مخالفة مضادات المنشطات عام 2016، وأنهى مسيرته مع أندرلخت، وأعلن اعتزاله رسميًا في سبتمبر 2021.",
    "bioEn": "French attacking midfielder who started at Marseille and played for Arsenal before moving to Manchester City, where he won two Premier League titles. He served an anti-doping suspension in 2016-18, finished his career at Anderlecht, and officially announced his retirement in September 2021.",
    "achievementsAr": [
      "لقبا الدوري الإنجليزي الممتاز مع مانشستر سيتي (2011-2012، 2013-2014)",
      "لقب كأس الرابطة الإنجليزية 2013-2014 مع مانشستر سيتي",
      "جائزة أفضل لاعب فرنسي لعام 2010",
      "41 مباراة دولية مع فرنسا"
    ],
    "achievementsEn": [
      "2 Premier League titles with Manchester City (2011-12, 2013-14)",
      "2013-14 League Cup with Manchester City",
      "French Player of the Year 2010",
      "41 caps for France"
    ],
    "clubsHistoryAr": [
      "مارسيليا",
      "أرسنال",
      "مانشستر سيتي",
      "إشبيلية (إعارة)",
      "أنطاليا سبور",
      "وست هام يونايتد",
      "أندرلخت"
    ],
    "clubsHistoryEn": [
      "Marseille",
      "Arsenal",
      "Manchester City",
      "Sevilla (loan)",
      "Antalyaspor",
      "West Ham United",
      "Anderlecht"
    ],
    "clubIds": [
      "marseille",
      "arsenal",
      "manchester-city",
      "sevilla",
      "west-ham-united",
      "anderlecht"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Samir_Nasri"
  },
  {
    "id": "claudio-marchisio",
    "nameAr": "كلاوديو ماركيزيو",
    "nameEn": "Claudio Marchisio",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2005-2019",
    "active": false,
    "bioAr": "لاعب وسط إيطالي تدرج في أكاديمية يوفنتوس منذ سن السابعة، ولعب لناديه المفضل فقط (باستثناء إعارة قصيرة لإمبولي وموسم أخير في زينيت سان بطرسبرغ)، وفاز معه بـ7 ألقاب دوري متتالية بين 2012 و2018. وصل لنهائي بطولة أوروبا 2012 مع إيطاليا، وأعلن اعتزاله في أكتوبر 2019.",
    "bioEn": "Italian midfielder who came through Juventus's academy from the age of seven and played only for his boyhood club (aside from a loan at Empoli and a final season at Zenit Saint Petersburg), winning 7 consecutive Serie A titles between 2012 and 2018. He reached the Euro 2012 final with Italy and announced his retirement in October 2019.",
    "achievementsAr": [
      "7 ألقاب دوري إيطالي متتالية مع يوفنتوس (2012-2018)",
      "4 ألقاب كأس إيطاليا مع يوفنتوس",
      "3 ألقاب السوبر الإيطالي مع يوفنتوس",
      "وصافة بطولة أوروبا 2012 مع إيطاليا",
      "المركز الثالث في كأس القارات 2013 مع إيطاليا"
    ],
    "achievementsEn": [
      "7 consecutive Serie A titles with Juventus (2012-2018)",
      "4 Coppa Italia titles with Juventus",
      "3 Supercoppa Italiana titles with Juventus",
      "UEFA Euro 2012 runner-up with Italy",
      "Third place at the 2013 FIFA Confederations Cup with Italy"
    ],
    "clubsHistoryAr": [
      "يوفنتوس",
      "إمبولي (إعارة)",
      "زينيت سان بطرسبرغ"
    ],
    "clubsHistoryEn": [
      "Juventus",
      "Empoli (loan)",
      "Zenit Saint Petersburg"
    ],
    "clubIds": [
      "juventus",
      "empoli"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Claudio_Marchisio"
  },
  {
    "id": "zvonimir-boban",
    "nameAr": "زفونيمير بوبان",
    "nameEn": "Zvonimir Boban",
    "nationalityAr": "كرواتي",
    "nationalityEn": "Croatian",
    "clubAr": "دينامو زغرب (رئيس النادي)",
    "clubEn": "Dinamo Zagreb (club president)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1985-2001",
    "active": false,
    "bioAr": "لاعب وسط كرواتي أسطوري، أمضى 9 مواسم مع إيه سي ميلان وفاز معه بدوري أبطال أوروبا 1994 و4 ألقاب دوري إيطالي. قاد كرواتيا للمركز الثالث في كأس العالم 1998. شغل منصب نائب الأمين العام للفيفا (2016-2019)، ثم مديرًا فنيًا لميلان، وأصبح رئيسًا لنادي دينامو زغرب في سبتمبر 2025.",
    "bioEn": "Legendary Croatian midfielder who spent 9 seasons at AC Milan, winning the 1994 European Cup and 4 Serie A titles. He captained Croatia to third place at the 1998 World Cup. He served as FIFA Deputy Secretary General (2016-2019), then as AC Milan's Chief Football Officer, and became president of Dinamo Zagreb in September 2025.",
    "achievementsAr": [
      "دوري أبطال أوروبا 1994 مع إيه سي ميلان",
      "4 ألقاب دوري إيطالي مع ميلان",
      "المركز الثالث في كأس العالم 1998 مع كرواتيا (قائدًا)",
      "بطولة كأس العالم للشباب 1987 مع يوغوسلافيا"
    ],
    "achievementsEn": [
      "1994 European Cup with AC Milan",
      "4 Serie A titles with Milan",
      "Third place at the 1998 World Cup with Croatia (as captain)",
      "1987 FIFA U-20 World Cup with Yugoslavia"
    ],
    "clubsHistoryAr": [
      "دينامو زغرب",
      "باري (إعارة)",
      "إيه سي ميلان",
      "سيلتا فيغو (إعارة)"
    ],
    "clubsHistoryEn": [
      "Dinamo Zagreb",
      "Bari (loan)",
      "AC Milan",
      "Celta Vigo (loan)"
    ],
    "clubIds": [
      "ac-milan",
      "celta-vigo"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Zvonimir_Boban"
  },
  {
    "id": "predrag-mijatovic",
    "nameAr": "بريدراغ ميياتوفيتش",
    "nameEn": "Predrag Mijatović",
    "nationalityAr": "مونتنغري",
    "nationalityEn": "Montenegrin",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1987-2003",
    "active": false,
    "bioAr": "مهاجم مونتنغري (لعب ليوغوسلافيا) سجل هدف الفوز لريال مدريد في نهائي دوري أبطال أوروبا 1998 أمام يوفنتوس، وهو اللقب الأول للنادي بعد 32 عامًا. لعب أيضًا لفالنسيا وفيورنتينا، وشغل لاحقًا منصب المدير الرياضي لريال مدريد.",
    "bioEn": "Montenegrin striker (played for Yugoslavia) who scored the winning goal for Real Madrid in the 1998 UEFA Champions League final against Juventus, the club's first European Cup in 32 years. He also played for Valencia and Fiorentina, and later served as Real Madrid's sporting director.",
    "achievementsAr": [
      "دوري أبطال أوروبا 1997-1998 مع ريال مدريد (سجّل هدف الفوز في النهائي)",
      "بطولة كأس العالم للشباب 1987 مع يوغوسلافيا"
    ],
    "achievementsEn": [
      "1997-98 UEFA Champions League with Real Madrid (scored the winning goal in the final)",
      "1987 FIFA U-20 World Cup with Yugoslavia"
    ],
    "clubsHistoryAr": [
      "بودوتشنوست تيتوغراد",
      "بارتيزان",
      "فالنسيا",
      "ريال مدريد",
      "فيورنتينا",
      "ليفانتي"
    ],
    "clubsHistoryEn": [
      "Budućnost Titograd",
      "Partizan",
      "Valencia",
      "Real Madrid",
      "Fiorentina",
      "Levante"
    ],
    "clubIds": [
      "valencia",
      "real-madrid",
      "fiorentina",
      "levante"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Predrag_Mijatovi%C4%87"
  },
  {
    "id": "nicolas-anelka",
    "nameAr": "نيكولا أنيلكا",
    "nameEn": "Nicolas Anelka",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1995-2015",
    "active": false,
    "bioAr": "مهاجم فرنسي لعب لعدة أندية كبرى منها أرسنال وريال مدريد ومانشستر سيتي وتشيلسي، وفاز بلقب دوري أبطال أوروبا 2000 مع ريال مدريد وبطولة أوروبا 2000 وكأس القارات 2001 مع فرنسا. تسبب استبعاده من مونديال 2010 في أزمة كبرى بمنتخب فرنسا.",
    "bioEn": "French forward who played for several major clubs including Arsenal, Real Madrid, Manchester City and Chelsea. He won the 2000 UEFA Champions League with Real Madrid and Euro 2000 and the 2001 Confederations Cup with France. His expulsion from the 2010 World Cup squad caused a major crisis for the French team.",
    "achievementsAr": [
      "دوري أبطال أوروبا 1999-2000 مع ريال مدريد",
      "بطولة أمم أوروبا 2000 مع فرنسا",
      "كأس القارات 2001 مع فرنسا",
      "لقبا الدوري الإنجليزي (أرسنال 1997-1998، تشيلسي 2009-2010)",
      "لقبا كأس الاتحاد الإنجليزي مع أرسنال وتشيلسي"
    ],
    "achievementsEn": [
      "1999-2000 UEFA Champions League with Real Madrid",
      "UEFA Euro 2000 with France",
      "2001 FIFA Confederations Cup with France",
      "2 Premier League titles (Arsenal 1997-98, Chelsea 2009-10)",
      "FA Cup titles with both Arsenal and Chelsea"
    ],
    "clubsHistoryAr": [
      "باريس سان جيرمان",
      "أرسنال",
      "ريال مدريد",
      "باريس سان جيرمان",
      "ليفربول (إعارة)",
      "مانشستر سيتي",
      "فنربخشة",
      "بولتون واندررز (إعارة)",
      "تشيلسي",
      "شنغهاي شينخوا",
      "يوفنتوس (إعارة)",
      "وست بروميتش ألبيون",
      "مومباي سيتي"
    ],
    "clubsHistoryEn": [
      "Paris Saint-Germain",
      "Arsenal",
      "Real Madrid",
      "Paris Saint-Germain",
      "Liverpool (loan)",
      "Manchester City",
      "Fenerbahçe",
      "Bolton Wanderers (loan)",
      "Chelsea",
      "Shanghai Shenhua",
      "Juventus (loan)",
      "West Bromwich Albion",
      "Mumbai City"
    ],
    "clubIds": [
      "paris-saint-germain",
      "arsenal",
      "real-madrid",
      "liverpool",
      "manchester-city",
      "fenerbahce",
      "bolton-wanderers",
      "chelsea",
      "juventus",
      "west-bromwich-albion"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Nicolas_Anelka"
  },
  {
    "id": "kolo-toure",
    "nameAr": "كولو توريه",
    "nameEn": "Kolo Touré",
    "nationalityAr": "إيفواري",
    "nationalityEn": "Ivorian",
    "clubAr": "مانشستر سيتي (مدرب مساعد)",
    "clubEn": "Manchester City (assistant manager)",
    "clubId": "manchester-city",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "1999-2017",
    "active": false,
    "bioAr": "مدافع إيفواري كان جزءًا من فريق أرسنال 'اللامنهزم' موسم 2003-2004، ثم انتقل لمانشستر سيتي حيث فاز بأول لقب دوري إنجليزي للنادي منذ 44 عامًا موسم 2011-2012. لعب لاحقًا لليفربول وسلتيك، وأصبح مساعد مدرب في مانشستر سيتي.",
    "bioEn": "Ivorian defender who was part of Arsenal's 'Invincibles' unbeaten side of 2003-04, before moving to Manchester City, where he helped the club win its first league title in 44 years in 2011-12. He later played for Liverpool and Celtic, and became an assistant manager at Manchester City.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي الممتاز 2003-2004 مع أرسنال (موسم اللامنهزمين)",
      "لقب الدوري الإنجليزي الممتاز 2011-2012 مع مانشستر سيتي",
      "لقبا كأس الاتحاد الإنجليزي مع أرسنال",
      "لقب كأس أمم أفريقيا 2015 مع ساحل العاج",
      "وصافة كأس أمم أفريقيا مرتين مع ساحل العاج (2006، 2012)"
    ],
    "achievementsEn": [
      "2003-04 Premier League title with Arsenal ('Invincibles' unbeaten season)",
      "2011-12 Premier League title with Manchester City",
      "2 FA Cup titles with Arsenal",
      "2015 Africa Cup of Nations with Ivory Coast",
      "Africa Cup of Nations runner-up twice with Ivory Coast (2006, 2012)"
    ],
    "clubsHistoryAr": [
      "أسيك ميموزا",
      "أرسنال",
      "مانشستر سيتي",
      "ليفربول",
      "سلتيك"
    ],
    "clubsHistoryEn": [
      "ASEC Mimosas",
      "Arsenal",
      "Manchester City",
      "Liverpool",
      "Celtic"
    ],
    "clubIds": [
      "arsenal",
      "manchester-city",
      "liverpool",
      "celtic"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kolo_Tour%C3%A9"
  },
  {
    "id": "michael-carrick",
    "nameAr": "مايكل كاريك",
    "nameEn": "Michael Carrick",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر يونايتد (مدرب رئيسي)",
    "clubEn": "Manchester United (head coach)",
    "clubId": "manchester-united",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1999-2018",
    "active": false,
    "bioAr": "لاعب وسط إنجليزي أمضى 12 موسمًا مع مانشستر يونايتد وأصبح قائده، وفاز بـ5 ألقاب دوري إنجليزي ودوري أبطال أوروبا 2008. اعتزل عام 2018 وانضم للجهاز الفني، وتولى تدريب ميدلزبره، ثم عاد لمانشستر يونايتد كمدرب رئيسي في يناير 2026 وحصل على عقد دائم حتى 2028 في مايو 2026.",
    "bioEn": "English midfielder who spent 12 seasons at Manchester United and became club captain, winning 5 Premier League titles and the 2008 UEFA Champions League. He retired in 2018 and joined the coaching staff, later managed Middlesbrough, then returned to Manchester United as head coach in January 2026 and was given a permanent contract until 2028 in May 2026.",
    "achievementsAr": [
      "5 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "دوري أبطال أوروبا 2007-2008 مع مانشستر يونايتد",
      "الدوري الأوروبي 2016-2017 مع مانشستر يونايتد",
      "كأس الاتحاد الإنجليزي 2015-2016 مع مانشستر يونايتد",
      "3 ألقاب كأس الرابطة الإنجليزية"
    ],
    "achievementsEn": [
      "5 Premier League titles with Manchester United",
      "2007-08 UEFA Champions League with Manchester United",
      "2016-17 UEFA Europa League with Manchester United",
      "2015-16 FA Cup with Manchester United",
      "3 League Cup titles"
    ],
    "clubsHistoryAr": [
      "وست هام يونايتد",
      "سوينسي تاون (إعارة)",
      "برمنغهام سيتي (إعارة)",
      "توتنهام هوتسبير",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "West Ham United",
      "Swindon Town (loan)",
      "Birmingham City (loan)",
      "Tottenham Hotspur",
      "Manchester United"
    ],
    "clubIds": [
      "west-ham-united",
      "birmingham-city",
      "tottenham",
      "manchester-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Michael_Carrick"
  },
  {
    "id": "dirk-kuyt",
    "nameAr": "ديرك كويت",
    "nameEn": "Dirk Kuyt",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم / جناح",
      "en": "Forward / Winger"
    },
    "era": "1998-2017",
    "active": false,
    "bioAr": "مهاجم هولندي عُرف بالتزامه البدني الكبير، أمضى 6 مواسم مع ليفربول ووصل لنهائي دوري أبطال أوروبا 2007. عاد لفينورد وقادها كقائد للفوز بلقب الدوري الهولندي 2016-2017 بعد غياب 18 عامًا، وسجل ثلاثية في آخر مباراة له، وأعلن اعتزاله بعدها مباشرة في مايو 2017.",
    "bioEn": "Dutch forward known for his relentless work rate, who spent 6 seasons at Liverpool and reached the 2007 UEFA Champions League final. He returned to Feyenoord and captained them to the 2016-17 Eredivisie title after an 18-year wait, scoring a hat-trick in his final game before retiring immediately after in May 2017.",
    "achievementsAr": [
      "لقب الدوري الهولندي 2016-2017 مع فينورد (قائدًا)",
      "كأس هولندا 2003 مع أوتريخت",
      "كأس الرابطة الإنجليزية 2011-2012 مع ليفربول",
      "وصافة دوري أبطال أوروبا 2007 مع ليفربول",
      "وصافة كأس العالم 2010 مع هولندا"
    ],
    "achievementsEn": [
      "2016-17 Eredivisie title with Feyenoord (as captain)",
      "2003 KNVB Cup with Utrecht",
      "2011-12 League Cup with Liverpool",
      "2007 UEFA Champions League runner-up with Liverpool",
      "2010 World Cup runner-up with Netherlands"
    ],
    "clubsHistoryAr": [
      "أوتريخت",
      "فينورد",
      "ليفربول",
      "فنربخشة",
      "فينورد"
    ],
    "clubsHistoryEn": [
      "Utrecht",
      "Feyenoord",
      "Liverpool",
      "Fenerbahçe",
      "Feyenoord"
    ],
    "clubIds": [
      "feyenoord",
      "liverpool",
      "fenerbahce"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dirk_Kuyt"
  },
  {
    "id": "randal-kolo-muani",
    "nameAr": "راندال كولو مواني",
    "nameEn": "Randal Kolo Muani",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "يوفنتوس",
    "clubEn": "Juventus",
    "clubId": "juventus",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "مهاجم فرنسي بدأ مسيرته مع نانت، ثم أيندراخت فرانكفورت، قبل أن ينتقل لباريس سان جيرمان عام 2023. أُعير ليوفنتوس مطلع 2025 ثم لتوتنهام هوتسبير موسم 2025-2026، قبل أن ينتقل بصفة نهائية إلى يوفنتوس في أغسطس 2026 بعقد حتى 2031. وصل لنهائي كأس العالم 2022 مع فرنسا.",
    "bioEn": "French forward who started at Nantes and Eintracht Frankfurt before joining Paris Saint-Germain in 2023. He was loaned to Juventus in early 2025 and then to Tottenham Hotspur for 2025-26, before completing a permanent transfer to Juventus in August 2026 on a contract until 2031. He reached the 2022 World Cup final with France.",
    "achievementsAr": [
      "وصافة كأس العالم 2022 مع فرنسا",
      "لقب الدوري الفرنسي مع باريس سان جيرمان",
      "كأس فرنسا مع باريس سان جيرمان",
      "كأس فرنسا مع نانت 2022"
    ],
    "achievementsEn": [
      "2022 World Cup runner-up with France",
      "Ligue 1 title with Paris Saint-Germain",
      "Coupe de France with Paris Saint-Germain",
      "2022 Coupe de France with Nantes"
    ],
    "clubsHistoryAr": [
      "نانت",
      "أيندراخت فرانكفورت",
      "باريس سان جيرمان",
      "يوفنتوس (إعارة)",
      "توتنهام هوتسبير (إعارة)",
      "يوفنتوس"
    ],
    "clubsHistoryEn": [
      "Nantes",
      "Eintracht Frankfurt",
      "Paris Saint-Germain",
      "Juventus (loan)",
      "Tottenham Hotspur (loan)",
      "Juventus"
    ],
    "clubIds": [
      "nantes",
      "eintracht-frankfurt",
      "paris-saint-germain",
      "juventus",
      "tottenham"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Randal_Kolo_Muani"
  },
  {
    "id": "estevao",
    "nameAr": "إستيفاو",
    "nameEn": "Estêvão",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "جناح برازيلي شاب يُلقب بـ'ميسينيو' لأسلوب لعبه المميز، بدأ مسيرته مع بالميراس قبل أن ينضم لتشيلسي في صيف 2025 بعد اتفاق تم توقيعه قبل عام كامل. يُعتبر من أبرز المواهب البرازيلية الصاعدة منذ نيمار.",
    "bioEn": "Young Brazilian winger nicknamed 'Messinho' for his distinctive playing style, who started his career at Palmeiras before joining Chelsea in summer 2025 following a deal agreed a full year earlier. He is regarded as one of Brazil's brightest emerging talents since Neymar.",
    "achievementsAr": [
      "كأس العالم للأندية 2025 وصيفًا مع تشيلسي",
      "ظهور دولي مبكر مع منتخب البرازيل"
    ],
    "achievementsEn": [
      "2025 FIFA Club World Cup runner-up with Chelsea",
      "Early senior caps for the Brazil national team"
    ],
    "clubsHistoryAr": [
      "بالميراس",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Palmeiras",
      "Chelsea"
    ],
    "clubIds": [
      "palmeiras",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Est%C3%AAv%C3%A3o_(footballer)"
  },
  {
    "id": "scott-mctominay",
    "nameAr": "سكوت ماكتوميناي",
    "nameEn": "Scott McTominay",
    "nationalityAr": "اسكتلندي",
    "nationalityEn": "Scottish",
    "clubAr": "نابولي",
    "clubEn": "Napoli",
    "clubId": "napoli",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "لاعب وسط اسكتلندي تدرج في أكاديمية مانشستر يونايتد ولعب له لسنوات طويلة، قبل أن ينتقل لنابولي الإيطالي في 2024. كان لاعبًا محوريًا في فوز نابولي بلقب الدوري الإيطالي موسم 2024-2025، وانتُخب أفضل لاعب في الدوري ذلك الموسم.",
    "bioEn": "Scottish midfielder who came through Manchester United's academy and played for the club for many years, before moving to Napoli in 2024. He was a central figure in Napoli's 2024-25 Serie A title win and was named the league's Most Valuable Player that season.",
    "achievementsAr": [
      "لقب الدوري الإيطالي 2024-2025 مع نابولي (أفضل لاعب في الدوري)",
      "السوبر الإيطالي 2025-2026 مع نابولي",
      "كأس الاتحاد الإنجليزي 2023-2024 مع مانشستر يونايتد",
      "لقبا كأس الرابطة الإنجليزية مع مانشستر يونايتد"
    ],
    "achievementsEn": [
      "2024-25 Serie A title with Napoli (league MVP)",
      "2025-26 Italian Super Cup with Napoli",
      "2023-24 FA Cup with Manchester United",
      "2 EFL Cup titles with Manchester United"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد",
      "نابولي"
    ],
    "clubsHistoryEn": [
      "Manchester United",
      "Napoli"
    ],
    "clubIds": [
      "manchester-united",
      "napoli"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Scott_McTominay"
  },
  {
    "id": "ryan-gravenberch",
    "nameAr": "ريان غرافنبيرخ",
    "nameEn": "Ryan Gravenberch",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "لاعب وسط هولندي تدرج في أكاديمية أياكس وانتقل لبايرن ميونخ ثم ليفربول في 2023. أصبح ركيزة أساسية في وسط ملعب ليفربول تحت قيادة آرني سلوت وفاز معه بلقب الدوري الإنجليزي موسم 2024-2025، ووقّع عقدًا طويل الأمد مع النادي في مارس 2026.",
    "bioEn": "Dutch midfielder who came through Ajax's academy and moved to Bayern Munich before joining Liverpool in 2023. He became a key fixture in Liverpool's midfield under Arne Slot, winning the 2024-25 Premier League title, and signed a long-term contract extension with the club in March 2026.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي الممتاز 2024-2025 مع ليفربول",
      "كأس الرابطة الإنجليزية 2023-2024 مع ليفربول",
      "لقب الدوري الألماني 2022-2023 مع بايرن ميونخ",
      "3 ألقاب دوري هولندي مع أياكس"
    ],
    "achievementsEn": [
      "2024-25 Premier League title with Liverpool",
      "2023-24 League Cup with Liverpool",
      "2022-23 Bundesliga title with Bayern Munich",
      "3 Eredivisie titles with Ajax"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "بايرن ميونخ",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "Bayern Munich",
      "Liverpool"
    ],
    "clubIds": [
      "ajax",
      "bayern-munich",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ryan_Gravenberch"
  },
  {
    "id": "bryan-mbeumo",
    "nameAr": "براين مبومو",
    "nameEn": "Bryan Mbeumo",
    "nationalityAr": "كاميروني",
    "nationalityEn": "Cameroonian",
    "clubAr": "مانشستر يونايتد",
    "clubEn": "Manchester United",
    "clubId": "manchester-united",
    "position": {
      "ar": "جناح أيمن",
      "en": "Right winger"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "جناح كاميروني وُلد في فرنسا، صعد من أكاديمية تروا وأمضى 6 مواسم مع برينتفورد الإنجليزي وسجل رقمًا قياسيًا 20 هدفًا في موسمه الأخير معه. انتقل لمانشستر يونايتد في يوليو 2025 مقابل نحو 71 مليون جنيه إسترليني، ليصبح أغلى لاعب أفريقي في التاريخ آنذاك.",
    "bioEn": "Cameroonian winger born in France, who rose through the Troyes academy and spent 6 seasons at Brentford, scoring a career-high 20 goals in his final season there. He moved to Manchester United in July 2025 for around £71 million, making him briefly the most expensive African player in history.",
    "achievementsAr": [
      "الترقي للدوري الإنجليزي الممتاز 2021 مع برينتفورد",
      "جائزة لاعب الشهر في الدوري الإنجليزي",
      "المشاركة في كأس العالم 2022 مع الكاميرون"
    ],
    "achievementsEn": [
      "2021 Premier League promotion with Brentford",
      "Premier League Player of the Month award",
      "2022 World Cup appearance with Cameroon"
    ],
    "clubsHistoryAr": [
      "تروا",
      "برينتفورد",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Troyes",
      "Brentford",
      "Manchester United"
    ],
    "clubIds": [
      "brentford",
      "manchester-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bryan_Mbeumo"
  },
  {
    "id": "alexander-sorloth",
    "nameAr": "ألكسندر سورلوث",
    "nameEn": "Alexander Sørloth",
    "nationalityAr": "نرويجي",
    "nationalityEn": "Norwegian",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "مهاجم نرويجي طويل القامة تنقل بين عدة أندية أوروبية قبل أن يجد استقراره الحقيقي مع فياريال ثم أتلتيكو مدريد الذي انضم إليه في 2024. يُعتبر خيارًا هجوميًا بديلاً وقويًا في الكرات الهوائية.",
    "bioEn": "Tall Norwegian striker who moved between several European clubs before finding real stability at Villarreal and then Atlético Madrid, which he joined in 2024. He is regarded as a strong, physical attacking option, particularly in the air.",
    "achievementsAr": [
      "كأس تركيا 2019-2020 مع طرابزون سبور"
    ],
    "achievementsEn": [
      "2019-20 Turkish Cup with Trabzonspor"
    ],
    "clubsHistoryAr": [
      "روزنبورغ",
      "بودو/غليمت (إعارة)",
      "غرونينغن",
      "ميتيلاند",
      "كريستال بالاس",
      "غينت (إعارة)",
      "طرابزون سبور (إعارة)",
      "لايبزيغ",
      "ريال سوسيداد (إعارة)",
      "فياريال",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Rosenborg",
      "Bodø/Glimt (loan)",
      "Groningen",
      "Midtjylland",
      "Crystal Palace",
      "Gent (loan)",
      "Trabzonspor (loan)",
      "RB Leipzig",
      "Real Sociedad (loan)",
      "Villarreal",
      "Atlético Madrid"
    ],
    "clubIds": [
      "crystal-palace",
      "trabzonspor",
      "rb-leipzig",
      "real-sociedad",
      "villarreal",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Alexander_S%C3%B8rloth"
  },
  {
    "id": "benjamin-sesko",
    "nameAr": "بنجامين شيشكو",
    "nameEn": "Benjamin Šeško",
    "nationalityAr": "سلوفيني",
    "nationalityEn": "Slovenian",
    "clubAr": "مانشستر يونايتد",
    "clubEn": "Manchester United",
    "clubId": "manchester-united",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "مهاجم سلوفيني طويل القامة صعد من أكاديمية ريد بُل سالزبورغ وفاز معه بـ3 ألقاب دوري نمساوي، ثم انتقل للايبزيغ الألماني حيث كان أفضل هداف تحت سن 23 عامًا في الدوريات الأوروبية الكبرى. انضم لمانشستر يونايتد في أغسطس 2025 بعقد حتى 2030.",
    "bioEn": "Tall Slovenian striker who came through Red Bull Salzburg's academy, winning 3 Austrian league titles, before moving to RB Leipzig in Germany where he was the top-scoring under-23 player in Europe's major leagues. He joined Manchester United in August 2025 on a contract until 2030.",
    "achievementsAr": [
      "3 ألقاب دوري نمساوي مع ريد بُل سالزبورغ",
      "كأس النمسا مع ريد بُل سالزبورغ",
      "السوبر الألماني مع لايبزيغ",
      "أصغر هداف في تاريخ منتخب سلوفينيا"
    ],
    "achievementsEn": [
      "3 Austrian Bundesliga titles with Red Bull Salzburg",
      "Austrian Cup with Red Bull Salzburg",
      "DFL-Supercup with RB Leipzig",
      "Slovenia's youngest-ever goalscorer"
    ],
    "clubsHistoryAr": [
      "ريد بُل سالزبورغ",
      "ليفرينغ (إعارة)",
      "لايبزيغ",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Red Bull Salzburg",
      "FC Liefering (loan)",
      "RB Leipzig",
      "Manchester United"
    ],
    "clubIds": [
      "rb-leipzig",
      "manchester-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Benjamin_%C5%A0e%C5%A1ko"
  },
  {
    "id": "bryan-robson",
    "nameAr": "براين روبسون",
    "nameEn": "Bryan Robson",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "ميدلزبره (معتزل)",
    "clubEn": "Middlesbrough (retired)",
    "clubId": "middlesbrough",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "1974-1997",
    "active": false,
    "bioAr": "لاعب وسط إنجليزي لُقّب بـ\"الكابتن مارفل\"، بدأ مع وست بروميتش ألبيون وانتقل إلى مانشستر يونايتد عام 1981 حيث أصبح صاحب أطول فترة قيادة للفريق في تاريخه، وقاد منتخب إنجلترا في 65 مباراة.",
    "bioEn": "English midfielder nicknamed \"Captain Marvel\". He started at West Bromwich Albion and joined Manchester United in 1981, becoming the club's longest-serving captain, and captained England 65 times.",
    "achievementsAr": [
      "لقبا الدوري الإنجليزي الممتاز مع مانشستر يونايتد",
      "3 ألقاب كأس الاتحاد الإنجليزي (1983 و1985 و1990)",
      "كأس الكؤوس الأوروبية 1991",
      "90 مباراة و26 هدفًا مع إنجلترا (كأس العالم 1982 و1986 و1990 ويورو 1988)",
      "اختير أعظم لاعب في تاريخ مانشستر يونايتد باستفتاء للاعبين السابقين عام 2011"
    ],
    "achievementsEn": [
      "2 Premier League titles with Manchester United",
      "3 FA Cups (1983, 1985, 1990)",
      "1991 European Cup Winners' Cup",
      "90 caps and 26 goals for England (World Cups 1982, 1986, 1990 and Euro 1988)",
      "Voted Manchester United's greatest ever player in a 2011 poll of former players"
    ],
    "clubsHistoryAr": [
      "وست بروميتش ألبيون",
      "مانشستر يونايتد",
      "ميدلزبره"
    ],
    "clubsHistoryEn": [
      "West Bromwich Albion",
      "Manchester United",
      "Middlesbrough"
    ],
    "clubIds": [
      "west-bromwich-albion",
      "manchester-united",
      "middlesbrough"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bryan_Robson"
  },
  {
    "id": "fabien-barthez",
    "nameAr": "فابيان بارتيز",
    "nameEn": "Fabien Barthez",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "نانت (معتزل)",
    "clubEn": "Nantes (retired)",
    "clubId": "nantes",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1990-2007",
    "active": false,
    "bioAr": "حارس مرمى فرنسي شهير بشخصيته المميزة، تُوّج بكأس العالم 1998 وأمم أوروبا 2000 مع فرنسا، ولعب لتولوز ومارسيليا وموناكو ومانشستر يونايتد ونانت.",
    "bioEn": "Flamboyant French goalkeeper who won the 1998 World Cup and Euro 2000 with France, playing for Toulouse, Marseille, Monaco, Manchester United and Nantes.",
    "achievementsAr": [
      "كأس العالم 1998 مع فرنسا (ووصيف 2006)",
      "بطولة أمم أوروبا 2000",
      "كأس القارات 2003",
      "دوري أبطال أوروبا 1992-1993 مع مارسيليا",
      "لقب الدوري الإنجليزي الممتاز 2002-2003 مع مانشستر يونايتد",
      "الأكثر مشاركة لفرنسا في نهائيات كأس العالم (17 مباراة)"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup with France (runner-up in 2006)",
      "UEFA Euro 2000",
      "2003 FIFA Confederations Cup",
      "1992-93 UEFA Champions League with Marseille",
      "2002-03 Premier League title with Manchester United",
      "France's most capped player at the World Cup finals (17 appearances)"
    ],
    "clubsHistoryAr": [
      "تولوز",
      "مارسيليا",
      "موناكو",
      "مانشستر يونايتد",
      "مارسيليا",
      "نانت"
    ],
    "clubsHistoryEn": [
      "Toulouse",
      "Marseille",
      "Monaco",
      "Manchester United",
      "Marseille",
      "Nantes"
    ],
    "clubIds": [
      "toulouse",
      "marseille",
      "monaco",
      "manchester-united",
      "nantes"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Fabien_Barthez"
  },
  {
    "id": "bixente-lizarazu",
    "nameAr": "بيكسنتي ليزارازو",
    "nameEn": "Bixente Lizarazu",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "بايرن ميونخ (معتزل)",
    "clubEn": "Bayern Munich (retired)",
    "clubId": "bayern-munich",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "1988-2006",
    "active": false,
    "bioAr": "ظهير أيسر فرنسي من إقليم الباسك يُعد من أفضل الأظهرة في تاريخ اللعبة، لعب لبوردو وأتلتيك بيلباو وبايرن ميونخ ومارسيليا، وتُوّج بكأس العالم 1998 وأمم أوروبا 2000 مع فرنسا.",
    "bioEn": "French left-back from the Basque Country regarded as one of the greatest full-backs in football history. He played for Bordeaux, Athletic Bilbao, Bayern Munich and Marseille, and won the 1998 World Cup and Euro 2000 with France.",
    "achievementsAr": [
      "كأس العالم 1998 مع فرنسا",
      "بطولة أمم أوروبا 2000",
      "كأس القارات 2001 و2003",
      "دوري أبطال أوروبا 2000-2001 مع بايرن ميونخ",
      "كأس الإنتركونتيننتال 2001 مع بايرن ميونخ",
      "عدة ألقاب للدوري الألماني مع بايرن ميونخ"
    ],
    "achievementsEn": [
      "1998 FIFA World Cup with France",
      "UEFA Euro 2000",
      "FIFA Confederations Cup 2001 and 2003",
      "2000-01 UEFA Champions League with Bayern Munich",
      "2001 Intercontinental Cup with Bayern Munich",
      "Multiple Bundesliga titles with Bayern Munich"
    ],
    "clubsHistoryAr": [
      "بوردو",
      "أتلتيك بيلباو",
      "بايرن ميونخ",
      "مارسيليا",
      "بايرن ميونخ"
    ],
    "clubsHistoryEn": [
      "Bordeaux",
      "Athletic Bilbao",
      "Bayern Munich",
      "Marseille",
      "Bayern Munich"
    ],
    "clubIds": [
      "bordeaux",
      "athletic-bilbao",
      "bayern-munich",
      "marseille"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bixente_Lizarazu"
  },
  {
    "id": "sandro-mazzola",
    "nameAr": "ساندرو مازولا",
    "nameEn": "Sandro Mazzola",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "إنتر ميلان (معتزل)",
    "clubEn": "Inter Milan (retired)",
    "clubId": "inter-milan",
    "position": {
      "ar": "مهاجم / صانع ألعاب",
      "en": "Forward / Attacking Midfielder"
    },
    "era": "1961-1977",
    "active": false,
    "bioAr": "أسطورة إنتر ميلان وإيطاليا، قضى مسيرته الممتدة 17 موسمًا كاملة مع إنتر وقاده كقائد من 1970 حتى اعتزاله عام 1977. توفي في 19 سبتمبر 2026 عن 83 عامًا.",
    "bioEn": "Inter Milan and Italy legend who spent his entire 17-season career at Inter, captaining the club from 1970 until his retirement in 1977. He died on 19 September 2026 aged 83.",
    "achievementsAr": [
      "4 ألقاب دوري إيطالي (1963 و1965 و1966 و1971)",
      "كأس أوروبا للأندية 1964 و1965 (سجّل هدفين في نهائي 1964 أمام ريال مدريد)",
      "كأس الإنتركونتيننتال 1964 و1965",
      "هداف الدوري الإيطالي موسم 1964-1965",
      "بطولة أمم أوروبا 1968 مع إيطاليا ووصيف كأس العالم 1970",
      "المركز الثاني في الكرة الذهبية 1971"
    ],
    "achievementsEn": [
      "4 Serie A titles (1963, 1965, 1966, 1971)",
      "European Cup 1964 and 1965 (scored twice in the 1964 final against Real Madrid)",
      "Intercontinental Cup 1964 and 1965",
      "Serie A top scorer 1964-65",
      "UEFA Euro 1968 with Italy and 1970 World Cup runner-up",
      "Second in the 1971 Ballon d'Or"
    ],
    "clubsHistoryAr": [
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Inter Milan"
    ],
    "clubIds": [
      "inter-milan"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Sandro_Mazzola"
  },
  {
    "id": "rayan-cherki",
    "nameAr": "ريان شيركي",
    "nameEn": "Rayan Cherki",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "جناح / صانع ألعاب هجومي",
      "en": "Winger / Attacking Midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "لاعب فرنسي موهوب خرج من أكاديمية ليون، وانضم إلى مانشستر سيتي في يونيو 2025 بعقد لخمس سنوات مقابل 36.5 مليون يورو كمبلغ أولي.",
    "bioEn": "Talented French playmaker who came through the Lyon academy and joined Manchester City in June 2025 on a five-year contract for an initial €36.5m.",
    "achievementsAr": [
      "انتقل إلى مانشستر سيتي في يونيو 2025",
      "في موسم 2025-2026 الأول: 4 أهداف و12 تمريرة حاسمة في 33 مباراة بالدوري الإنجليزي"
    ],
    "achievementsEn": [
      "Joined Manchester City in June 2025",
      "2025-26 Premier League season: 4 goals and 12 assists in 33 appearances"
    ],
    "clubsHistoryAr": [
      "ليون",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Lyon",
      "Manchester City"
    ],
    "clubIds": [
      "lyon",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rayan_Cherki"
  },
  {
    "id": "jeremy-doku",
    "nameAr": "جيريمي دوكو",
    "nameEn": "Jérémy Doku",
    "nationalityAr": "بلجيكي",
    "nationalityEn": "Belgian",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "جناح بلجيكي سريع المراوغة، خرج من أندرلخت ولعب لرين ثم انضم إلى مانشستر سيتي في أغسطس 2023 مقابل 65 مليون يورو، وجدد عقده حتى 2031 في أغسطس 2026.",
    "bioEn": "Belgian winger known for his explosive dribbling. He came through Anderlecht, played for Rennes and joined Manchester City in August 2023 for €65m, signing a new contract until 2031 in August 2026.",
    "achievementsAr": [
      "الدوري الإنجليزي الممتاز 2023-2024",
      "كأس الاتحاد الإنجليزي وكأس الرابطة 2025-2026",
      "كأس العالم للأندية 2023",
      "الدرع الخيرية 2024-2025"
    ],
    "achievementsEn": [
      "Premier League 2023-24",
      "FA Cup and EFL Cup 2025-26",
      "FIFA Club World Cup 2023",
      "Community Shield 2024-25"
    ],
    "clubsHistoryAr": [
      "أندرلخت",
      "رين",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Anderlecht",
      "Rennes",
      "Manchester City"
    ],
    "clubIds": [
      "anderlecht",
      "rennes",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/J%C3%A9r%C3%A9my_Doku"
  },
  {
    "id": "antoine-semenyo",
    "nameAr": "أنطوان سيمينيو",
    "nameEn": "Antoine Semenyo",
    "nationalityAr": "غاني",
    "nationalityEn": "Ghanaian",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "جناح غاني وُلد في لندن، تدرج في بريستول سيتي ولعب لبورنموث، وانضم إلى مانشستر سيتي في يناير 2026 مقابل 64 مليون جنيه إسترليني.",
    "bioEn": "London-born Ghanaian winger who came through Bristol City, played for Bournemouth and joined Manchester City in January 2026 for £64m.",
    "achievementsAr": [
      "كأس الاتحاد الإنجليزي 2025-2026 مع مانشستر سيتي",
      "كأس الرابطة 2025-2026 مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "FA Cup 2025-26 with Manchester City",
      "EFL Cup 2025-26 with Manchester City"
    ],
    "clubsHistoryAr": [
      "بريستول سيتي",
      "باث سيتي (إعارة)",
      "نيوبورت كاونتي (إعارة)",
      "سندرلاند (إعارة)",
      "بورنموث",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Bristol City",
      "Bath City (loan)",
      "Newport County (loan)",
      "Sunderland (loan)",
      "Bournemouth",
      "Manchester City"
    ],
    "clubIds": [
      "bristol-city",
      "sunderland",
      "bournemouth",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Antoine_Semenyo"
  },
  {
    "id": "marc-guehi",
    "nameAr": "مارك غيهي",
    "nameEn": "Marc Guéhi",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "قلب دفاع",
      "en": "Centre-back"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "مدافع إنجليزي وُلد في أبيدجان، تخرج من أكاديمية تشيلسي وقاد كريستال بالاس كقائد لأول لقب كبير في تاريخه (كأس الاتحاد 2025)، ثم انتقل إلى مانشستر سيتي في يناير 2026 بعقد حتى 2031.",
    "bioEn": "English centre-back born in Abidjan who came through Chelsea's academy, captained Crystal Palace to the club's first major trophy (2025 FA Cup) and joined Manchester City in January 2026 on a contract until 2031.",
    "achievementsAr": [
      "كأس الاتحاد الإنجليزي 2024-2025 مع كريستال بالاس (كقائد)",
      "الدرع الخيرية 2025 مع كريستال بالاس",
      "كأس الاتحاد الإنجليزي وكأس الرابطة 2025-2026 مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "FA Cup 2024-25 with Crystal Palace (as captain)",
      "Community Shield 2025 with Crystal Palace",
      "FA Cup and EFL Cup 2025-26 with Manchester City"
    ],
    "clubsHistoryAr": [
      "تشيلسي",
      "سوانزي سيتي (إعارة)",
      "كريستال بالاس",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Chelsea",
      "Swansea City (loan)",
      "Crystal Palace",
      "Manchester City"
    ],
    "clubIds": [
      "chelsea",
      "swansea-city",
      "crystal-palace",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marc_Gu%C3%A9hi"
  },
  {
    "id": "josko-gvardiol",
    "nameAr": "يوشكو غفارديول",
    "nameEn": "Joško Gvardiol",
    "nationalityAr": "كرواتي",
    "nationalityEn": "Croatian",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "قلب دفاع / ظهير أيسر",
      "en": "Centre-back / Left-back"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "مدافع كرواتي متعدد المراكز، لعب لدينامو زغرب ولايبزيغ، وانضم إلى مانشستر سيتي عام 2023 مقابل نحو 77 مليون جنيه إسترليني ليصبح وقتها أغلى مدافع في التاريخ.",
    "bioEn": "Versatile Croatian defender who played for Dinamo Zagreb and RB Leipzig before joining Manchester City in 2023 for around £77m, at the time the most expensive defender in history.",
    "achievementsAr": [
      "المركز الثالث في كأس العالم 2022 مع كرواتيا",
      "كأس ألمانيا 2021-2022 و2022-2023 مع لايبزيغ",
      "الدوري الإنجليزي الممتاز 2023-2024 مع مانشستر سيتي",
      "كأس السوبر الأوروبي وكأس العالم للأندية 2023",
      "الدرع الخيرية 2024-2025",
      "كأس الاتحاد الإنجليزي وكأس الرابطة 2025-2026"
    ],
    "achievementsEn": [
      "Third place at the 2022 World Cup with Croatia",
      "DFB-Pokal 2021-22 and 2022-23 with RB Leipzig",
      "Premier League 2023-24 with Manchester City",
      "UEFA Super Cup and FIFA Club World Cup 2023",
      "Community Shield 2024-25",
      "FA Cup and EFL Cup 2025-26"
    ],
    "clubsHistoryAr": [
      "دينامو زغرب",
      "آر بي لايبزيغ",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Dinamo Zagreb",
      "RB Leipzig",
      "Manchester City"
    ],
    "clubIds": [
      "rb-leipzig",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jo%C5%A1ko_Gvardiol"
  },
  {
    "id": "cody-gakpo",
    "nameAr": "كودي غاكبو",
    "nameEn": "Cody Gakpo",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "جناح أيسر / مهاجم",
      "en": "Left Winger / Forward"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مهاجم هولندي تخرج من أكاديمية آيندهوفن، اختير أفضل لاعب هولندي عام 2022، وانضم إلى ليفربول في يناير 2023.",
    "bioEn": "Dutch forward who came through the PSV academy, was named Dutch Footballer of the Year in 2022 and joined Liverpool in January 2023.",
    "achievementsAr": [
      "كأس هولندا 2021-2022 مع آيندهوفن",
      "أفضل لاعب هولندي 2021-2022",
      "كأس الرابطة الإنجليزية 2023-2024 مع ليفربول",
      "الدوري الإنجليزي الممتاز 2024-2025 مع ليفربول",
      "المركز الثالث في أمم أوروبا 2024 مع هولندا"
    ],
    "achievementsEn": [
      "KNVB Cup 2021-22 with PSV",
      "Dutch Footballer of the Year 2021-22",
      "EFL Cup 2023-24 with Liverpool",
      "Premier League 2024-25 with Liverpool",
      "Third place at Euro 2024 with the Netherlands"
    ],
    "clubsHistoryAr": [
      "آيندهوفن",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "PSV Eindhoven",
      "Liverpool"
    ],
    "clubIds": [
      "psv-eindhoven",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Cody_Gakpo"
  },
  {
    "id": "martin-zubimendi",
    "nameAr": "مارتن ثوبيمندي",
    "nameEn": "Martín Zubimendi",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "لاعب وسط دفاعي",
      "en": "Defensive Midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "لاعب وسط إسباني من سان سيباستيان، خرج من ريال سوسييداد وانضم إلى أرسنال في يوليو 2025 بعقد لخمس سنوات.",
    "bioEn": "Spanish defensive midfielder from San Sebastián who came through Real Sociedad and joined Arsenal in July 2025 on a five-year contract.",
    "achievementsAr": [
      "كأس ملك إسبانيا 2019-2020 مع ريال سوسييداد",
      "دوري الأمم الأوروبية 2023 مع إسبانيا",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "كأس العالم 2026 مع إسبانيا"
    ],
    "achievementsEn": [
      "Copa del Rey 2019-20 with Real Sociedad",
      "UEFA Nations League 2023 with Spain",
      "UEFA Euro 2024 with Spain",
      "2026 FIFA World Cup with Spain"
    ],
    "clubsHistoryAr": [
      "ريال سوسييداد",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Real Sociedad",
      "Arsenal"
    ],
    "clubIds": [
      "real-sociedad",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mart%C3%ADn_Zubimendi"
  },
  {
    "id": "david-raya",
    "nameAr": "ديفيد رايا",
    "nameEn": "David Raya",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "حارس مرمى إسباني وُلد في برشلونة وبدأ مسيرته في إنجلترا مع بلاكبيرن روفرز ثم برينتفورد، وانضم إلى أرسنال إعارة في 2023 ثم بشكل دائم في 2024.",
    "bioEn": "Spanish goalkeeper born in Barcelona who began his career in England with Blackburn Rovers and Brentford, joining Arsenal on loan in 2023 and permanently in 2024.",
    "achievementsAr": [
      "القفاز الذهبي للدوري الإنجليزي 2023-2024",
      "الصعود للدوري الإنجليزي الممتاز مع برينتفورد 2021",
      "دوري الأمم الأوروبية 2023 مع إسبانيا",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "كأس العالم 2026 مع إسبانيا"
    ],
    "achievementsEn": [
      "Premier League Golden Glove 2023-24",
      "Promotion to the Premier League with Brentford in 2021",
      "UEFA Nations League 2023 with Spain",
      "UEFA Euro 2024 with Spain",
      "2026 FIFA World Cup with Spain"
    ],
    "clubsHistoryAr": [
      "بلاكبيرن روفرز",
      "ساوثبورت (إعارة)",
      "برينتفورد",
      "أرسنال (إعارة)",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Blackburn Rovers",
      "Southport (loan)",
      "Brentford",
      "Arsenal (loan)",
      "Arsenal"
    ],
    "clubIds": [
      "blackburn-rovers",
      "brentford",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/David_Raya"
  },
  {
    "id": "eberechi-eze",
    "nameAr": "إيبيريتشي إيزي",
    "nameEn": "Eberechi Eze",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "لاعب وسط مهاجم",
      "en": "Attacking Midfielder"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "لاعب وسط مهاجم إنجليزي بدأ مسيرته مع كوينز بارك رينجرز، وتألق مع كريستال بالاس قبل انضمامه إلى أرسنال في أغسطس 2025.",
    "bioEn": "English attacking midfielder who began at Queens Park Rangers, starred for Crystal Palace and joined Arsenal in August 2025.",
    "achievementsAr": [
      "كأس الاتحاد الإنجليزي 2024-2025 مع كريستال بالاس",
      "الدرع الخيرية 2025 مع كريستال بالاس",
      "وصيف بطولة أمم أوروبا 2024 مع إنجلترا",
      "المركز الثالث في كأس العالم 2026 مع إنجلترا"
    ],
    "achievementsEn": [
      "FA Cup 2024-25 with Crystal Palace",
      "Community Shield 2025 with Crystal Palace",
      "Euro 2024 runner-up with England",
      "Third place at the 2026 World Cup with England"
    ],
    "clubsHistoryAr": [
      "كوينز بارك رينجرز",
      "وايكومب واندررز (إعارة)",
      "كريستال بالاس",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Queens Park Rangers",
      "Wycombe Wanderers (loan)",
      "Crystal Palace",
      "Arsenal"
    ],
    "clubIds": [
      "queens-park-rangers",
      "crystal-palace",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Eberechi_Eze"
  },
  {
    "id": "mohamed-zidan",
    "nameAr": "محمد زيدان",
    "nameEn": "Mohamed Zidan",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1999-2015",
    "active": false,
    "bioAr": "مهاجم مصري سابق من بورسعيد، بدأ مسيرته في الدنمارك ثم لعب في الدوري الألماني لفيردر بريمن وماينز وهامبورغ وبوروسيا دورتموند، وفاز مع مصر بكأس أمم إفريقيا مرتين.",
    "bioEn": "Former Egyptian striker from Port Said who began his career in Denmark and played in the Bundesliga for Werder Bremen, Mainz, Hamburg and Borussia Dortmund, winning the Africa Cup of Nations twice with Egypt.",
    "achievementsAr": [
      "كأس أمم إفريقيا 2008 مع مصر",
      "كأس أمم إفريقيا 2010 مع مصر",
      "لقب الدوري الألماني 2010-2011 مع بوروسيا دورتموند"
    ],
    "achievementsEn": [
      "Africa Cup of Nations 2008 with Egypt",
      "Africa Cup of Nations 2010 with Egypt",
      "Bundesliga title 2010-11 with Borussia Dortmund"
    ],
    "clubsHistoryAr": [
      "إيه بي (الدنمارك)",
      "ميتييلاند",
      "فيردر بريمن",
      "ماينز 05",
      "هامبورغ",
      "بوروسيا دورتموند",
      "ماينز 05",
      "بني ياس",
      "الانتاج الحربي"
    ],
    "clubsHistoryEn": [
      "AB",
      "Midtjylland",
      "Werder Bremen",
      "Mainz 05",
      "Hamburger SV",
      "Borussia Dortmund",
      "Mainz 05",
      "Baniyas",
      "El Entag El Harby"
    ],
    "clubIds": [
      "werder-bremen",
      "mainz-05",
      "hamburger-sv",
      "borussia-dortmund"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mohamed_Zidan"
  },
  {
    "id": "juan-roman-riquelme",
    "nameAr": "خوان رومان ريكيلمي",
    "nameEn": "Juan Román Riquelme",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "أرجنتينوس جونيورز (معتزل)",
    "clubEn": "Argentinos Juniors (retired)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط مهاجم",
      "en": "Attacking midfielder"
    },
    "era": "1996-2015",
    "active": false,
    "bioAr": "صانع ألعاب أرجنتيني أسطوري ولد عام 1978، ارتبط اسمه ببوكا جونيورز الذي قضى معه معظم مسيرته، ولعب لبرشلونة وفياريال، واعتزل عام 2015 بعد فترة قصيرة مع أرجنتينوس جونيورز.",
    "bioEn": "Legendary Argentine playmaker born in 1978, best known for Boca Juniors, where he spent most of his career. He also played for Barcelona and Villarreal and retired in 2015 after a short spell at Argentinos Juniors.",
    "achievementsAr": [
      "3 ألقاب كوبا ليبرتادوريس مع بوكا جونيورز (2000 و2001 و2007)",
      "كأس إنتركونتيننتال 2000 مع بوكا جونيورز",
      "5 ألقاب دوري أرجنتيني مع بوكا جونيورز",
      "كأس ريكوبا سودأمريكانا 2008 وكأس الأرجنتين 2012 مع بوكا جونيورز",
      "كأس إنترتوتو 2004 مع فياريال",
      "الميدالية الذهبية في أولمبياد بكين 2008 مع الأرجنتين"
    ],
    "achievementsEn": [
      "3 Copa Libertadores titles with Boca Juniors (2000, 2001, 2007)",
      "2000 Intercontinental Cup with Boca Juniors",
      "5 Argentine Primera División titles with Boca Juniors",
      "2008 Recopa Sudamericana and 2012 Copa Argentina with Boca Juniors",
      "2004 UEFA Intertoto Cup with Villarreal",
      "Gold medal at the 2008 Beijing Olympics with Argentina"
    ],
    "clubsHistoryAr": [
      "بوكا جونيورز",
      "برشلونة",
      "فياريال (إعارة)",
      "فياريال",
      "بوكا جونيورز (إعارة)",
      "بوكا جونيورز",
      "أرجنتينوس جونيورز"
    ],
    "clubsHistoryEn": [
      "Boca Juniors",
      "Barcelona",
      "Villarreal (loan)",
      "Villarreal",
      "Boca Juniors (loan)",
      "Boca Juniors",
      "Argentinos Juniors"
    ],
    "clubIds": [
      "boca-juniors",
      "barcelona",
      "villarreal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": ""
  },
  {
    "id": "emam-ashour",
    "nameAr": "إمام عاشور",
    "nameEn": "Emam Ashour",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "الأهلي",
    "clubEn": "Al Ahly",
    "clubId": "al-ahly",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "",
    "active": true,
    "bioAr": "لاعب وسط مصري مواليد 1998، لعب للزمالك ثم ميتييلاند الدنماركي قبل انضمامه للأهلي في موسم 2022-2023، وشارك مع منتخب مصر في كأس العالم 2026.",
    "bioEn": "Egyptian midfielder born in 1998 who played for Zamalek and Danish side Midtjylland before joining Al Ahly in 2022-23, and was part of Egypt's squad at the 2026 World Cup.",
    "achievementsAr": [
      "دوري أبطال إفريقيا 2023-2024 مع الأهلي",
      "الدوري المصري 2023-2024 و2024-2025 مع الأهلي",
      "كأس السوبر المصري 2023-2024 مع الأهلي",
      "كأس مصر 2022-2023 مع الأهلي"
    ],
    "achievementsEn": [
      "CAF Champions League 2023-24 with Al Ahly",
      "Egyptian Premier League 2023-24 and 2024-25 with Al Ahly",
      "Egyptian Super Cup 2023-24 with Al Ahly",
      "Egypt Cup 2022-23 with Al Ahly"
    ],
    "clubsHistoryAr": [
      "الزمالك",
      "ميتييلاند",
      "الأهلي"
    ],
    "clubsHistoryEn": [
      "Zamalek",
      "Midtjylland",
      "Al Ahly"
    ],
    "clubIds": [
      "zamalek",
      "al-ahly"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Emam_Ashour"
  },
  {
    "id": "trezeguet",
    "nameAr": "تريزيغيه",
    "nameEn": "Trézéguet",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "الرياض (السعودية)",
    "clubEn": "Al-Riyadh (Saudi Arabia)",
    "clubId": null,
    "position": {
      "ar": "جناح أيسر",
      "en": "Left winger"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "جناح مصري واسمه الحقيقي محمود حسن، خرج من أكاديمية الأهلي ولعب في بلجيكا وتركيا وإنجلترا مع أستون فيلا وقطر، وانضم إلى نادي الرياض السعودي عام 2026. لقبه مأخوذ من المهاجم الفرنسي ديفيد تريزيغيه.",
    "bioEn": "Egyptian winger, real name Mahmoud Hassan, who came through Al Ahly's academy and played in Belgium, Turkey, England with Aston Villa, and Qatar before joining Saudi club Al-Riyadh in 2026. His nickname comes from French striker David Trezeguet.",
    "achievementsAr": [
      "دوري أبطال إفريقيا 2012 و2013 مع الأهلي",
      "المشاركة مع مصر في كأس العالم 2018 و2026"
    ],
    "achievementsEn": [
      "CAF Champions League 2012 and 2013 with Al Ahly",
      "Represented Egypt at the 2018 and 2026 World Cups"
    ],
    "clubsHistoryAr": [
      "الأهلي",
      "أندرلخت",
      "موسكرون (إعارة)",
      "قاسم باشا",
      "أستون فيلا",
      "إسطنبول باشاك شهير (إعارة)",
      "طرابزون سبور",
      "الريان (إعارة)",
      "الأهلي",
      "الرياض"
    ],
    "clubsHistoryEn": [
      "Al Ahly",
      "Anderlecht",
      "Mouscron (loan)",
      "Kasımpaşa",
      "Aston Villa",
      "İstanbul Başakşehir (loan)",
      "Trabzonspor",
      "Al-Rayyan (loan)",
      "Al Ahly",
      "Al-Riyadh"
    ],
    "clubIds": [
      "al-ahly",
      "anderlecht",
      "aston-villa",
      "trabzonspor"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Trézéguet_(Egyptian_footballer)"
  },
  {
    "id": "mohamed-elneny",
    "nameAr": "محمد النني",
    "nameEn": "Mohamed Elneny",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "ليفادياكوس (اليونان)",
    "clubEn": "Levadiakos (Greece)",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط دفاعي",
      "en": "Defensive midfielder"
    },
    "era": "2010-الآن",
    "active": true,
    "bioAr": "لاعب وسط دفاعي مصري من المحلة الكبرى، بدأ مع المقاولون العرب ثم بازل السويسري وأرسنال الإنجليزي، وانتقل إلى الجزيرة الإماراتي عام 2024، وانضم إلى ليفادياكوس اليوناني في سبتمبر 2026 بانتقال حر.",
    "bioEn": "Egyptian defensive midfielder from El Mahalla El Kubra who started at Al Mokawloon, then played for Swiss club Basel and Arsenal, moved to UAE side Al Jazira in 2024, and joined Greek club Levadiakos on a free transfer in September 2026.",
    "achievementsAr": [
      "4 ألقاب الدوري السويسري مع بازل",
      "كأس الاتحاد الإنجليزي 2016-2017 مع أرسنال",
      "الدرع الخيرية الإنجليزية 2017 و2020 مع أرسنال",
      "وصيف كأس أمم إفريقيا 2017 و2021 مع مصر"
    ],
    "achievementsEn": [
      "4 Swiss Super League titles with Basel",
      "FA Cup 2016-17 with Arsenal",
      "FA Community Shield 2017 and 2020 with Arsenal",
      "Africa Cup of Nations runner-up 2017 and 2021 with Egypt"
    ],
    "clubsHistoryAr": [
      "المقاولون العرب",
      "بازل",
      "أرسنال",
      "بشكتاش (إعارة)",
      "الجزيرة",
      "ليفادياكوس"
    ],
    "clubsHistoryEn": [
      "Al Mokawloon Al Arab",
      "Basel",
      "Arsenal",
      "Beşiktaş (loan)",
      "Al Jazira",
      "Levadiakos"
    ],
    "clubIds": [
      "al-mokawloon-al-arab",
      "arsenal",
      "besiktas"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mohamed_Elneny"
  },
  {
    "id": "javier-mascherano",
    "nameAr": "خافيير ماسكيرانو",
    "nameEn": "Javier Mascherano",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "لاعب وسط دفاعي / قلب دفاع",
      "en": "Defensive midfielder / Centre-back"
    },
    "era": "2003-2020",
    "active": false,
    "bioAr": "لاعب أرجنتيني سابق في مركزي وسط الملعب المدافع وقلب الدفاع، بدأ مع ريفر بليت ولعب لكورينثيانز ووست هام وليفربول وبرشلونة الذي قضى معه ثماني سنوات، وخاض 147 مباراة دولية مع الأرجنتين، واعتزل عام 2020 ثم اتجه إلى التدريب.",
    "bioEn": "Former Argentine defensive midfielder and centre-back who began at River Plate and played for Corinthians, West Ham, Liverpool and Barcelona, where he spent eight years. He won 147 caps for Argentina, retired in 2020 and moved into coaching.",
    "achievementsAr": [
      "لقبا دوري أبطال أوروبا 2010-2011 و2014-2015 مع برشلونة",
      "5 ألقاب الدوري الإسباني مع برشلونة",
      "الميدالية الذهبية في أولمبياد 2004 و2008 مع الأرجنتين",
      "وصيف كأس العالم 2014 مع الأرجنتين",
      "الدوري البرازيلي 2005 مع كورينثيانز",
      "147 مباراة دولية مع الأرجنتين"
    ],
    "achievementsEn": [
      "2 UEFA Champions League titles (2010-11, 2014-15) with Barcelona",
      "5 La Liga titles with Barcelona",
      "Olympic gold medals in 2004 and 2008 with Argentina",
      "2014 World Cup runner-up with Argentina",
      "2005 Brazilian Série A with Corinthians",
      "147 international caps for Argentina"
    ],
    "clubsHistoryAr": [
      "ريفر بليت",
      "كورينثيانز",
      "وست هام يونايتد",
      "ليفربول",
      "برشلونة",
      "خيبي تشاينا فورتشن",
      "إستوديانتس"
    ],
    "clubsHistoryEn": [
      "River Plate",
      "Corinthians",
      "West Ham United",
      "Liverpool",
      "Barcelona",
      "Hebei China Fortune",
      "Estudiantes"
    ],
    "clubIds": [
      "river-plate",
      "corinthians",
      "west-ham-united",
      "liverpool",
      "barcelona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Javier_Mascherano"
  },
  {
    "id": "kyle-walker",
    "nameAr": "كايل ووكر",
    "nameEn": "Kyle Walker",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "بيرنلي",
    "clubEn": "Burnley",
    "clubId": "burnley",
    "position": {
      "ar": "ظهير أيمن / قلب دفاع",
      "en": "Right-back / Centre-back"
    },
    "era": "2008-الآن",
    "active": true,
    "bioAr": "مدافع إنجليزي من شيفيلد، بدأ مع شيفيلد يونايتد ولعب لتوتنهام ومانشستر سيتي الذي حقق معه ست بطولات دوري ودوري أبطال أوروبا 2023، ثم أُعير إلى ميلان وانضم إلى بيرنلي عام 2025.",
    "bioEn": "English defender from Sheffield who started at Sheffield United and played for Tottenham and Manchester City, winning six Premier League titles and the 2023 Champions League, before a loan at AC Milan and a move to Burnley in 2025.",
    "achievementsAr": [
      "6 ألقاب الدوري الإنجليزي الممتاز مع مانشستر سيتي",
      "دوري أبطال أوروبا 2022-2023 مع مانشستر سيتي",
      "4 ألقاب كأس الرابطة الإنجليزية و2 كأس الاتحاد الإنجليزي مع مانشستر سيتي",
      "وصيف بطولة أمم أوروبا 2020 و2024 مع إنجلترا",
      "المركز الثالث في دوري الأمم الأوروبية 2019 مع إنجلترا"
    ],
    "achievementsEn": [
      "6 Premier League titles with Manchester City",
      "UEFA Champions League 2022-23 with Manchester City",
      "4 EFL Cups and 2 FA Cups with Manchester City",
      "Euro 2020 and Euro 2024 runner-up with England",
      "UEFA Nations League 2019 third place with England"
    ],
    "clubsHistoryAr": [
      "شيفيلد يونايتد",
      "نورثهامبتون تاون (إعارة)",
      "توتنهام هوتسبير",
      "شيفيلد يونايتد (إعارة)",
      "كوينز بارك رينجرز (إعارة)",
      "أستون فيلا (إعارة)",
      "مانشستر سيتي",
      "ميلان (إعارة)",
      "بيرنلي"
    ],
    "clubsHistoryEn": [
      "Sheffield United",
      "Northampton Town (loan)",
      "Tottenham Hotspur",
      "Sheffield United (loan)",
      "Queens Park Rangers (loan)",
      "Aston Villa (loan)",
      "Manchester City",
      "AC Milan (loan)",
      "Burnley"
    ],
    "clubIds": [
      "sheffield-united",
      "tottenham",
      "queens-park-rangers",
      "aston-villa",
      "manchester-city",
      "ac-milan",
      "burnley"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kyle_Walker"
  },
  {
    "id": "jordan-pickford",
    "nameAr": "جوردان بيكفورد",
    "nameEn": "Jordan Pickford",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "إيفرتون",
    "clubEn": "Everton",
    "clubId": "everton",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "حارس مرمى إنجليزي خرج من أكاديمية سندرلاند وأُعير لعدة أندية في الدرجات الدنيا، وانضم إلى إيفرتون عام 2017 وأصبح الحارس الأساسي لمنتخب إنجلترا.",
    "bioEn": "English goalkeeper who came through Sunderland's academy and had several loan spells in the lower leagues before joining Everton in 2017, becoming England's first-choice goalkeeper.",
    "achievementsAr": [
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "وصيف بطولة أمم أوروبا 2020 و2024 مع إنجلترا",
      "المركز الثالث في دوري الأمم الأوروبية 2019 مع إنجلترا",
      "جائزة أفضل تصدٍّ في الدوري الإنجليزي الممتاز موسم 2021-2022"
    ],
    "achievementsEn": [
      "Third place at the 2026 World Cup with England",
      "Euro 2020 and Euro 2024 runner-up with England",
      "UEFA Nations League 2019 third place with England",
      "Premier League Save of the Season 2021-22"
    ],
    "clubsHistoryAr": [
      "سندرلاند",
      "دارلينغتون (إعارة)",
      "ألفريتون تاون (إعارة)",
      "بيرتون ألبيون (إعارة)",
      "كارلايل يونايتد (إعارة)",
      "برادفورد سيتي (إعارة)",
      "بريستون نورث إند (إعارة)",
      "إيفرتون"
    ],
    "clubsHistoryEn": [
      "Sunderland",
      "Darlington (loan)",
      "Alfreton Town (loan)",
      "Burton Albion (loan)",
      "Carlisle United (loan)",
      "Bradford City (loan)",
      "Preston North End (loan)",
      "Everton"
    ],
    "clubIds": [
      "sunderland",
      "preston-north-end",
      "everton"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jordan_Pickford"
  },
  {
    "id": "harry-maguire",
    "nameAr": "هاري ماغواير",
    "nameEn": "Harry Maguire",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر يونايتد",
    "clubEn": "Manchester United",
    "clubId": "manchester-united",
    "position": {
      "ar": "قلب دفاع",
      "en": "Centre-back"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "قلب دفاع إنجليزي من شيفيلد، لعب لشيفيلد يونايتد وهال سيتي وليستر سيتي، وانضم إلى مانشستر يونايتد عام 2019 في صفقة قياسية لمدافع بلغت نحو 80 مليون جنيه إسترليني، وتولى قيادة الفريق حتى 2023.",
    "bioEn": "English centre-back from Sheffield who played for Sheffield United, Hull City and Leicester City before joining Manchester United in 2019 in a then world-record deal for a defender of around £80 million, and captained the club until 2023.",
    "achievementsAr": [
      "كأس الرابطة الإنجليزية 2022-2023 مع مانشستر يونايتد",
      "وصيف بطولة أمم أوروبا 2020 مع إنجلترا",
      "اختير ضمن تشكيلة بطولة أمم أوروبا 2020",
      "المركز الثالث في دوري الأمم الأوروبية 2019 مع إنجلترا",
      "لاعب الموسم في ليستر سيتي 2017-2018"
    ],
    "achievementsEn": [
      "EFL Cup 2022-23 with Manchester United",
      "Euro 2020 runner-up with England",
      "Named in the Euro 2020 Team of the Tournament",
      "UEFA Nations League 2019 third place with England",
      "Leicester City Player of the Season 2017-18"
    ],
    "clubsHistoryAr": [
      "شيفيلد يونايتد",
      "هال سيتي",
      "ويغان أتلتيك (إعارة)",
      "ليستر سيتي",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Sheffield United",
      "Hull City",
      "Wigan Athletic (loan)",
      "Leicester City",
      "Manchester United"
    ],
    "clubIds": [
      "sheffield-united",
      "wigan-athletic",
      "leicester-city",
      "manchester-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Harry_Maguire"
  },
  {
    "id": "morgan-rogers",
    "nameAr": "مورغان روجرز",
    "nameEn": "Morgan Rogers",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "لاعب وسط مهاجم / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "لاعب وسط مهاجم إنجليزي من هالسوين، خرج من أكاديمية وست بروميتش ثم مانشستر سيتي، وتألق مع ميدلزبره ثم أستون فيلا منذ 2024، وانضم إلى تشيلسي في يوليو 2026.",
    "bioEn": "English attacking midfielder from Halesowen who came through West Bromwich Albion and Manchester City's academies, broke through at Middlesbrough, then starred for Aston Villa from 2024 before joining Chelsea in July 2026.",
    "achievementsAr": [
      "المركز الثالث في كأس العالم 2026 مع إنجلترا"
    ],
    "achievementsEn": [
      "Third place at the 2026 World Cup with England"
    ],
    "clubsHistoryAr": [
      "وست بروميتش ألبيون",
      "مانشستر سيتي",
      "لينكولن سيتي (إعارة)",
      "بورنموث (إعارة)",
      "بلاكبول (إعارة)",
      "ميدلزبره",
      "أستون فيلا",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "West Bromwich Albion",
      "Manchester City",
      "Lincoln City (loan)",
      "Bournemouth (loan)",
      "Blackpool (loan)",
      "Middlesbrough",
      "Aston Villa",
      "Chelsea"
    ],
    "clubIds": [
      "west-bromwich-albion",
      "manchester-city",
      "bournemouth",
      "middlesbrough",
      "aston-villa",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Morgan_Rogers"
  },
  {
    "id": "jack-grealish",
    "nameAr": "جاك غريليش",
    "nameEn": "Jack Grealish",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "إيفرتون (إعارة من مانشستر سيتي)",
    "clubEn": "Everton (on loan from Manchester City)",
    "clubId": "everton",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "جناح إنجليزي من برمنغهام، قاد أستون فيلا كقائد للفريق، وانتقل إلى مانشستر سيتي عام 2021 مقابل 100 مليون جنيه إسترليني في حينها رقم قياسي للاعب بريطاني، وهو معار إلى إيفرتون.",
    "bioEn": "English winger from Birmingham who captained Aston Villa before joining Manchester City in 2021 for £100 million, then a British record, and is currently on loan at Everton.",
    "achievementsAr": [
      "الثلاثية التاريخية موسم 2022-2023 مع مانشستر سيتي (الدوري وكأس الاتحاد ودوري الأبطال)",
      "وصيف بطولة أمم أوروبا 2020 مع إنجلترا"
    ],
    "achievementsEn": [
      "2022-23 continental treble with Manchester City (Premier League, FA Cup, Champions League)",
      "Euro 2020 runner-up with England"
    ],
    "clubsHistoryAr": [
      "أستون فيلا",
      "نوتس كاونتي (إعارة)",
      "مانشستر سيتي",
      "إيفرتون (إعارة)"
    ],
    "clubsHistoryEn": [
      "Aston Villa",
      "Notts County (loan)",
      "Manchester City",
      "Everton (loan)"
    ],
    "clubIds": [
      "aston-villa",
      "notts-county",
      "manchester-city",
      "everton"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jack_Grealish"
  },
  {
    "id": "jurrien-timber",
    "nameAr": "جوريان تيمبر",
    "nameEn": "Jurriën Timber",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "مدافع",
      "en": "Defender"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "مدافع هولندي من أوتريخت، خرج من أكاديمية أياكس وفاز معه بلقبي الدوري وكأس هولندا، وانضم إلى أرسنال في يوليو 2023 مقابل 34 مليون جنيه إسترليني مبدئيًا.",
    "bioEn": "Dutch defender from Utrecht who came through Ajax's academy, winning two Eredivisie titles and a KNVB Cup before joining Arsenal in July 2023 for an initial £34 million.",
    "achievementsAr": [
      "الدوري الإنجليزي الممتاز 2025-2026 مع أرسنال",
      "لقبا الدوري الهولندي وكأس هولندا مع أياكس",
      "بطولة أمم أوروبا تحت 17 سنة 2018 مع هولندا",
      "جائزة ماركو فان باستن 2022"
    ],
    "achievementsEn": [
      "Premier League 2025-26 with Arsenal",
      "2 Eredivisie titles and 1 KNVB Cup with Ajax",
      "UEFA European Under-17 Championship 2018 with the Netherlands",
      "Marco van Basten Award 2022"
    ],
    "clubsHistoryAr": [
      "أياكس (فئات سنية)",
      "يونغ أياكس",
      "أياكس",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Ajax (youth)",
      "Jong Ajax",
      "Ajax",
      "Arsenal"
    ],
    "clubIds": [
      "ajax",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jurriën_Timber"
  },
  {
    "id": "ben-white",
    "nameAr": "بن وايت",
    "nameEn": "Ben White",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "ظهير أيمن / قلب دفاع",
      "en": "Right-back / Centre-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مدافع إنجليزي من بول، بدأ مع برايتون وخاض إعارات مع نيوبورت وبيتربره وليدز يونايتد، وانضم إلى أرسنال في يوليو 2021.",
    "bioEn": "English defender from Poole who began at Brighton, had loan spells at Newport, Peterborough and Leeds United, and joined Arsenal in July 2021.",
    "achievementsAr": [
      "الدوري الإنجليزي الممتاز 2025-2026 مع أرسنال",
      "لقب دوري الدرجة الأولى الإنجليزية (التشامبيونشيب) 2019-2020 مع ليدز يونايتد (إعارة)",
      "وصيف بطولة أمم أوروبا 2020 مع إنجلترا",
      "أفضل لاعب شاب في ليدز يونايتد 2019-2020"
    ],
    "achievementsEn": [
      "Premier League 2025-26 with Arsenal",
      "Championship title 2019-20 with Leeds United (on loan)",
      "Euro 2020 runner-up with England",
      "Leeds United Young Player of the Year 2019-20"
    ],
    "clubsHistoryAr": [
      "برايتون آند هوف ألبيون",
      "نيوبورت كاونتي (إعارة)",
      "بيتربره يونايتد (إعارة)",
      "ليدز يونايتد (إعارة)",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Brighton & Hove Albion",
      "Newport County (loan)",
      "Peterborough United (loan)",
      "Leeds United (loan)",
      "Arsenal"
    ],
    "clubIds": [
      "brighton-hove-albion",
      "leeds-united",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ben_White_(footballer)"
  },
  {
    "id": "reece-james",
    "nameAr": "ريس جيمس",
    "nameEn": "Reece James",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "ظهير أيمن / لاعب وسط",
      "en": "Right-back / Midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "ظهير أيمن إنجليزي خرج من أكاديمية تشيلسي وأُعير إلى ويغان أتلتيك موسم 2018-2019، وهو الآن قائد تشيلسي ولاعب أساسي في منتخب إنجلترا.",
    "bioEn": "English right-back who came through Chelsea's academy and was loaned to Wigan Athletic in 2018-19. He is now Chelsea's captain and a regular for England.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2020-2021 مع تشيلسي",
      "كأس العالم للأندية 2021 و2025 مع تشيلسي",
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "وصيف بطولة أمم أوروبا 2020 مع إنجلترا",
      "بطولة أمم أوروبا تحت 19 سنة 2017 مع إنجلترا"
    ],
    "achievementsEn": [
      "UEFA Champions League 2020-21 with Chelsea",
      "FIFA Club World Cup 2021 and 2025 with Chelsea",
      "Third place at the 2026 World Cup with England",
      "Euro 2020 runner-up with England",
      "UEFA European Under-19 Championship 2017 with England"
    ],
    "clubsHistoryAr": [
      "تشيلسي (فئات سنية)",
      "ويغان أتلتيك (إعارة)",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Chelsea (youth)",
      "Wigan Athletic (loan)",
      "Chelsea"
    ],
    "clubIds": [
      "wigan-athletic",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Reece_James"
  },
  {
    "id": "joao-pedro",
    "nameAr": "جواو بيدرو",
    "nameEn": "João Pedro",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "مهاجم برازيلي من ريبيراو بريتو، بدأ مع فلومينينسي ولعب لواتفورد وبرايتون، وانضم إلى تشيلسي في يوليو 2025 بعقد لثماني سنوات.",
    "bioEn": "Brazilian striker from Ribeirão Preto who started at Fluminense, played for Watford and Brighton, and joined Chelsea in July 2025 on an eight-year contract.",
    "achievementsAr": [
      "أفضل لاعب في تشيلسي في موسم 2025-26",
      "الظهور الأول مع منتخب البرازيل الأول عام 2023"
    ],
    "achievementsEn": [
      "Chelsea Player of the Year 2025-26",
      "Senior Brazil debut in 2023"
    ],
    "clubsHistoryAr": [
      "فلومينينسي",
      "واتفورد",
      "برايتون آند هوف ألبيون",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Fluminense",
      "Watford",
      "Brighton & Hove Albion",
      "Chelsea"
    ],
    "clubIds": [
      "brighton-hove-albion",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/João_Pedro_(footballer,_born_2001)"
  },
  {
    "id": "john-stones",
    "nameAr": "جون ستونز",
    "nameEn": "John Stones",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "إنتر ميلان",
    "clubEn": "Inter Milan",
    "clubId": "inter-milan",
    "position": {
      "ar": "قلب دفاع / لاعب وسط دفاعي",
      "en": "Centre-back / Defensive midfielder"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "مدافع إنجليزي من بارنسلي، لعب لبارنسلي وإيفرتون ثم مانشستر سيتي منذ 2016، وانضم إلى إنتر ميلان الإيطالي عام 2026.",
    "bioEn": "English defender from Barnsley who played for Barnsley and Everton, then Manchester City from 2016, before joining Italian club Inter Milan in 2026.",
    "achievementsAr": [
      "6 ألقاب الدوري الإنجليزي الممتاز مع مانشستر سيتي",
      "دوري أبطال أوروبا 2022-2023 مع مانشستر سيتي",
      "لقبان في كأس الاتحاد الإنجليزي مع مانشستر سيتي",
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "وصيف بطولة أمم أوروبا 2020 و2024 مع إنجلترا",
      "المركز الثالث في دوري الأمم الأوروبية 2019 مع إنجلترا"
    ],
    "achievementsEn": [
      "6 Premier League titles with Manchester City",
      "UEFA Champions League 2022-23 with Manchester City",
      "2 FA Cups with Manchester City",
      "Third place at the 2026 World Cup with England",
      "Euro 2020 and Euro 2024 runner-up with England",
      "UEFA Nations League 2019 third place with England"
    ],
    "clubsHistoryAr": [
      "بارنسلي",
      "إيفرتون",
      "مانشستر سيتي",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Barnsley",
      "Everton",
      "Manchester City",
      "Inter Milan"
    ],
    "clubIds": [
      "everton",
      "manchester-city",
      "inter-milan"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/John_Stones"
  },
  {
    "id": "leandro-trossard",
    "nameAr": "ليندرو تروسار",
    "nameEn": "Leandro Trossard",
    "nationalityAr": "بلجيكي",
    "nationalityEn": "Belgian",
    "clubAr": "بشكتاش",
    "clubEn": "Beşiktaş",
    "clubId": "besiktas",
    "position": {
      "ar": "جناح أيسر / مهاجم",
      "en": "Left winger / Forward"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "جناح بلجيكي من ماسميخيلين، خرج من أكاديمية خنك وخاض عدة إعارات، ولعب لبرايتون ثم أرسنال منذ 2023، وانضم إلى بشكتاش التركي عام 2026. شارك مع بلجيكا في كأس العالم 2022 و2026 وبطولتي أمم أوروبا 2020 و2024.",
    "bioEn": "Belgian winger from Maasmechelen who came through Genk's academy and had several loan spells, then played for Brighton and Arsenal from 2023 before joining Turkish club Beşiktaş in 2026. He has been part of Belgium's squads at the 2022 and 2026 World Cups and Euro 2020 and 2024.",
    "achievementsAr": [
      "الدوري الإنجليزي الممتاز 2025-2026 مع أرسنال",
      "الدرع الخيرية الإنجليزية 2023 مع أرسنال",
      "الدوري البلجيكي 2018-2019 مع خنك"
    ],
    "achievementsEn": [
      "Premier League 2025-26 with Arsenal",
      "FA Community Shield 2023 with Arsenal",
      "Belgian league title 2018-19 with Genk"
    ],
    "clubsHistoryAr": [
      "خنك",
      "لوميل يونايتد (إعارة)",
      "فيستيرلو (إعارة)",
      "لوميل يونايتد (إعارة)",
      "أو إتش لوفين (إعارة)",
      "برايتون آند هوف ألبيون",
      "أرسنال",
      "بشكتاش"
    ],
    "clubsHistoryEn": [
      "Genk",
      "Lommel United (loan)",
      "Westerlo (loan)",
      "Lommel United (loan)",
      "OH Leuven (loan)",
      "Brighton & Hove Albion",
      "Arsenal",
      "Beşiktaş"
    ],
    "clubIds": [
      "brighton-hove-albion",
      "arsenal",
      "besiktas"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Leandro_Trossard"
  },
  {
    "id": "cristhian-mosquera",
    "nameAr": "كريستيان موسكيرا",
    "nameEn": "Cristhian Mosquera",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "",
    "active": true,
    "bioAr": "مدافع إسباني وُلد في أليكانتي لأبوين كولومبيين، صعد إلى الفريق الأول لفالنسيا في أغسطس 2023 وانضم إلى أرسنال في 24 يوليو 2025 بعقد طويل الأمد، ويمثل منتخب إسبانيا.",
    "bioEn": "Spanish centre-back born in Alicante to Colombian parents, promoted to Valencia's first team in August 2023 before joining Arsenal on 24 July 2025 on a long-term contract; he plays for the Spain national team.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي الممتاز 2025-26 مع أرسنال"
    ],
    "achievementsEn": [
      "Premier League title 2025-26 with Arsenal"
    ],
    "clubsHistoryAr": [
      "فالنسيا",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Valencia",
      "Arsenal"
    ],
    "clubIds": [
      "valencia",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Cristhian_Mosquera"
  },
  {
    "id": "piero-hincapie",
    "nameAr": "بييرو هينكابييه",
    "nameEn": "Piero Hincapié",
    "nationalityAr": "إكوادوري",
    "nationalityEn": "Ecuadorian",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "مدافع (قلب دفاع / ظهير أيسر)",
      "en": "Centre-back / Left-back"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "مدافع إكوادوري كان من ركائز باير ليفركوزن الذي حقق الثنائية المحلية موسم 2023-24، انضم إلى أرسنال معاراً صيف 2025 ثم انتقل إليه نهائياً اعتباراً من 1 يوليو 2026.",
    "bioEn": "Ecuadorian defender who was a mainstay of the Bayer Leverkusen side that won the 2023-24 domestic double; he joined Arsenal on loan in summer 2025 and signed permanently from 1 July 2026.",
    "achievementsAr": [
      "الدوري الألماني 2023-24 مع باير ليفركوزن (الموسم بلا هزيمة)",
      "الثنائية المحلية 2023-24 مع باير ليفركوزن",
      "لقب الدوري الإنجليزي الممتاز 2025-26 مع أرسنال",
      "وصيف دوري أبطال أوروبا 2025-26 مع أرسنال"
    ],
    "achievementsEn": [
      "Bundesliga title 2023-24 with Bayer Leverkusen (unbeaten season)",
      "2023-24 domestic double with Bayer Leverkusen",
      "Premier League title 2025-26 with Arsenal",
      "UEFA Champions League runner-up 2025-26 with Arsenal"
    ],
    "clubsHistoryAr": [
      "إنديبندينتي ديل فالي",
      "تاليريس",
      "باير ليفركوزن",
      "أرسنال (إعارة)",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Independiente del Valle",
      "Talleres",
      "Bayer Leverkusen",
      "Arsenal (loan)",
      "Arsenal"
    ],
    "clubIds": [
      "bayer-leverkusen",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Piero_Hincapi%C3%A9"
  },
  {
    "id": "mikel-merino",
    "nameAr": "ميكيل ميرينو",
    "nameEn": "Mikel Merino",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "لاعب وسط إسباني من بامبلونا بدأ مع أوساسونا ثم مرّ بدورتموند ونيوكاسل قبل أن يستقر في ريال سوسيداد، وانضم إلى أرسنال في أغسطس 2024. توّج مع إسبانيا بيورو 2024 وكأس العالم 2026.",
    "bioEn": "Spanish midfielder from Pamplona who started at Osasuna, had spells at Borussia Dortmund and Newcastle United, established himself at Real Sociedad and joined Arsenal in August 2024. He won Euro 2024 and the 2026 World Cup with Spain.",
    "achievementsAr": [
      "كأس العالم 2026 مع إسبانيا",
      "كأس أمم أوروبا 2024 مع إسبانيا",
      "دوري الأمم الأوروبية 2022-23 مع إسبانيا",
      "لقب الدوري الإنجليزي الممتاز 2025-26 مع أرسنال",
      "كأس ملك إسبانيا 2019-20 مع ريال سوسيداد",
      "كأس ألمانيا 2016-17 مع بوروسيا دورتموند",
      "بطولة أوروبا للشباب تحت 21 سنة 2019 مع إسبانيا",
      "الميدالية الفضية الأولمبية 2020 مع إسبانيا"
    ],
    "achievementsEn": [
      "2026 FIFA World Cup with Spain",
      "UEFA Euro 2024 with Spain",
      "UEFA Nations League 2022-23 with Spain",
      "Premier League title 2025-26 with Arsenal",
      "Copa del Rey 2019-20 with Real Sociedad",
      "DFB-Pokal 2016-17 with Borussia Dortmund",
      "UEFA European Under-21 Championship 2019 with Spain",
      "Olympic silver medal 2020 with Spain U23"
    ],
    "clubsHistoryAr": [
      "أوساسونا",
      "بوروسيا دورتموند",
      "نيوكاسل يونايتد",
      "ريال سوسيداد",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Osasuna",
      "Borussia Dortmund",
      "Newcastle United",
      "Real Sociedad",
      "Arsenal"
    ],
    "clubIds": [
      "osasuna",
      "borussia-dortmund",
      "newcastle-united",
      "real-sociedad",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mikel_Merino"
  },
  {
    "id": "noni-madueke",
    "nameAr": "نوني مادويكي",
    "nameEn": "Noni Madueke",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "جناح إنجليزي وُلد في بارنت بلندن، بدأ مسيرته الاحترافية مع بي إس في أيندهوفن ثم انتقل إلى تشيلسي في يناير 2023، وانضم إلى أرسنال في يوليو 2025.",
    "bioEn": "English winger born in Barnet, London, who began his professional career at PSV Eindhoven, moved to Chelsea in January 2023 and joined Arsenal in July 2025.",
    "achievementsAr": [
      "كأس هولندا وكأس يوهان كرويف مع بي إس في أيندهوفن",
      "دوري المؤتمر الأوروبي وكأس العالم للأندية 2025 مع تشيلسي",
      "لقب الدوري الإنجليزي الممتاز 2025-26 مع أرسنال",
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "بطولة أوروبا تحت 21 سنة 2023 مع إنجلترا"
    ],
    "achievementsEn": [
      "KNVB Cup and Johan Cruyff Shield with PSV Eindhoven",
      "UEFA Conference League and 2025 FIFA Club World Cup with Chelsea",
      "Premier League title 2025-26 with Arsenal",
      "Third place at the 2026 World Cup with England",
      "UEFA European Under-21 Championship 2023 with England"
    ],
    "clubsHistoryAr": [
      "بي إس في أيندهوفن",
      "تشيلسي",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "PSV Eindhoven",
      "Chelsea",
      "Arsenal"
    ],
    "clubIds": [
      "psv-eindhoven",
      "chelsea",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Noni_Madueke"
  },
  {
    "id": "christos-tzolis",
    "nameAr": "كريستوس تزوليس",
    "nameEn": "Christos Tzolis",
    "nationalityAr": "يوناني",
    "nationalityEn": "Greek",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "جناح أيسر",
      "en": "Left winger"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "جناح يوناني من سالونيك، بدأ مع باوك ثم لعب لنورويتش سيتي وتفينتي (إعارة) وفورتونا دوسلدورف (إعارة) وكلوب بروج، وانضم إلى أرسنال في يوليو 2026.",
    "bioEn": "Greek winger from Thessaloniki who started at PAOK, played for Norwich City, Twente (loan), Fortuna Düsseldorf (loan) and Club Brugge, and joined Arsenal in July 2026.",
    "achievementsAr": [
      "كأس اليونان 2020-21 مع باوك (وهداف البطولة)",
      "هداف الدوري الألماني الثاني 2023-24 (مناصفة) بـ22 هدفاً مع فورتونا دوسلدورف",
      "كأس بلجيكا 2024-25 مع كلوب بروج",
      "الدوري البلجيكي 2025-26 مع كلوب بروج",
      "أفضل لاعب في الدوري البلجيكي 2025-26"
    ],
    "achievementsEn": [
      "Greek Cup 2020-21 with PAOK (tournament top scorer)",
      "2. Bundesliga 2023-24 joint top scorer (22 goals) with Fortuna Düsseldorf",
      "Belgian Cup 2024-25 with Club Brugge",
      "Belgian Pro League title 2025-26 with Club Brugge",
      "Belgian Pro League Player of the Season 2025-26"
    ],
    "clubsHistoryAr": [
      "باوك",
      "نورويتش سيتي",
      "تفينتي (إعارة)",
      "فورتونا دوسلدورف (إعارة)",
      "كلوب بروج",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "PAOK",
      "Norwich City",
      "Twente (loan)",
      "Fortuna Düsseldorf (loan)",
      "Club Brugge",
      "Arsenal"
    ],
    "clubIds": [
      "norwich-city",
      "fortuna-dusseldorf",
      "club-brugge",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Christos_Tzolis"
  },
  {
    "id": "kepa-arrizabalaga",
    "nameAr": "كيبا أريزابالاغا",
    "nameEn": "Kepa Arrizabalaga",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "حارس مرمى إسباني من أوندارويا، صعد من أكاديمية أتلتيك بيلباو وأصبح عام 2018 أغلى حارس في التاريخ بانتقاله إلى تشيلسي، ثم أُعير إلى ريال مدريد وبورنموث قبل أن ينضم إلى أرسنال في يوليو 2025.",
    "bioEn": "Spanish goalkeeper from Ondarroa who came through Athletic Bilbao's academy, became the world's most expensive goalkeeper with his 2018 move to Chelsea, was loaned to Real Madrid and Bournemouth, and joined Arsenal in July 2025.",
    "achievementsAr": [
      "الدوري الأوروبي 2018-19 مع تشيلسي",
      "دوري أبطال أوروبا 2020-21 مع تشيلسي",
      "كأس السوبر الأوروبي 2021 مع تشيلسي",
      "دوري أبطال أوروبا 2023-24 مع ريال مدريد",
      "دوري الأمم الأوروبية 2022-23 مع إسبانيا",
      "بطولة أوروبا تحت 19 سنة 2012 مع إسبانيا"
    ],
    "achievementsEn": [
      "UEFA Europa League 2018-19 with Chelsea",
      "UEFA Champions League 2020-21 with Chelsea",
      "UEFA Super Cup 2021 with Chelsea",
      "UEFA Champions League 2023-24 with Real Madrid",
      "UEFA Nations League 2022-23 with Spain",
      "UEFA European Under-19 Championship 2012 with Spain"
    ],
    "clubsHistoryAr": [
      "أتلتيك بيلباو",
      "بونفيرادينا (إعارة)",
      "بلد الوليد (إعارة)",
      "تشيلسي",
      "ريال مدريد (إعارة)",
      "بورنموث (إعارة)",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Athletic Bilbao",
      "Ponferradina (loan)",
      "Valladolid (loan)",
      "Chelsea",
      "Real Madrid (loan)",
      "Bournemouth (loan)",
      "Arsenal"
    ],
    "clubIds": [
      "athletic-bilbao",
      "real-valladolid",
      "chelsea",
      "real-madrid",
      "bournemouth",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kepa_Arrizabalaga"
  },
  {
    "id": "illan-meslier",
    "nameAr": "إيلان ميسلييه",
    "nameEn": "Illan Meslier",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "حارس مرمى فرنسي من لوريان، انضم إلى ليدز يونايتد معاراً عام 2019 ثم بشكل دائم عام 2020 وخاض معه 215 مباراة، قبل أن ينتقل إلى أرسنال حراً في 9 يوليو 2026.",
    "bioEn": "French goalkeeper from Lorient who joined Leeds United on loan in 2019 and permanently in 2020, making 215 appearances before signing for Arsenal on a free transfer on 9 July 2026.",
    "achievementsAr": [
      "بطولة التشامبيونشيب 2019-20 مع ليدز يونايتد",
      "بطولة التشامبيونشيب 2024-25 مع ليدز يونايتد"
    ],
    "achievementsEn": [
      "EFL Championship title 2019-20 with Leeds United",
      "EFL Championship title 2024-25 with Leeds United"
    ],
    "clubsHistoryAr": [
      "لوريان",
      "ليدز يونايتد (إعارة ثم انتقال دائم)",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Lorient",
      "Leeds United (loan then permanent)",
      "Arsenal"
    ],
    "clubIds": [
      "leeds-united",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Illan_Meslier"
  },
  {
    "id": "myles-lewis-skelly",
    "nameAr": "مايلز لويس-سكيلي",
    "nameEn": "Myles Lewis-Skelly",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "لاعب وسط / ظهير أيسر",
      "en": "Midfielder / Left-back"
    },
    "era": "2024-الآن",
    "active": true,
    "bioAr": "لاعب إنجليزي من خريجي أكاديمية أرسنال في لندن، ظهر لأول مرة مع الفريق الأول في سبتمبر 2024، وسجّل هدفاً في أول مباراة دولية له مع إنجلترا أمام ألبانيا في مارس 2025.",
    "bioEn": "English player from Arsenal's academy in London who made his first-team debut in September 2024 and scored on his England debut against Albania in March 2025.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي الممتاز 2025-26 مع أرسنال",
      "أصغر لاعب يسجل في أول مباراة دولية مع إنجلترا (18 سنة و176 يوماً) أمام ألبانيا 2025"
    ],
    "achievementsEn": [
      "Premier League title 2025-26 with Arsenal",
      "Youngest player to score on his England debut (aged 18 years 176 days) against Albania in 2025"
    ],
    "clubsHistoryAr": [
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Arsenal"
    ],
    "clubIds": [
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Myles_Lewis-Skelly"
  },
  {
    "id": "ethan-nwaneri",
    "nameAr": "إيثان نوانيري",
    "nameEn": "Ethan Nwaneri",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "بوروسيا دورتموند (إعارة من أرسنال)",
    "clubEn": "Borussia Dortmund (on loan from Arsenal)",
    "clubId": "borussia-dortmund",
    "position": {
      "ar": "صانع ألعاب / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "لاعب إنجليزي من أكاديمية أرسنال، أصبح في سبتمبر 2022 أصغر لاعب يشارك في الدوري الإنجليزي الممتاز عن عمر 15 عاماً و181 يوماً، وهو حالياً معار إلى بوروسيا دورتموند بعد فترة إعارة مع مرسيليا.",
    "bioEn": "English player from Arsenal's academy who became the youngest player in Premier League history in September 2022, aged 15 years 181 days; he is currently on loan at Borussia Dortmund after a loan spell at Marseille.",
    "achievementsAr": [
      "أصغر لاعب في تاريخ الدوري الإنجليزي الممتاز (15 سنة و181 يوماً)",
      "بطولة أوروبا تحت 21 سنة 2025 مع إنجلترا"
    ],
    "achievementsEn": [
      "Youngest player in Premier League history (15 years 181 days)",
      "UEFA European Under-21 Championship 2025 with England"
    ],
    "clubsHistoryAr": [
      "أرسنال",
      "مرسيليا (إعارة)",
      "بوروسيا دورتموند (إعارة)"
    ],
    "clubsHistoryEn": [
      "Arsenal",
      "Marseille (loan)",
      "Borussia Dortmund (loan)"
    ],
    "clubIds": [
      "arsenal",
      "marseille",
      "borussia-dortmund"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ethan_Nwaneri"
  },
  {
    "id": "ezri-konsa",
    "nameAr": "إيزري كونسا",
    "nameEn": "Ezri Konsa",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "أرسنال",
    "clubEn": "Arsenal",
    "clubId": "arsenal",
    "position": {
      "ar": "مدافع (قلب دفاع / ظهير أيمن)",
      "en": "Centre-back / Right-back"
    },
    "era": "",
    "active": true,
    "bioAr": "مدافع إنجليزي مرّ بتشارلتون وبرينتفورد ثم قضى سبع سنوات في أستون فيلا وخاض معه 286 مباراة، وانتقل إلى أرسنال في 21 أغسطس 2026 مقابل نحو 51 مليون جنيه إسترليني.",
    "bioEn": "English defender who came through Charlton and Brentford before spending seven years at Aston Villa (286 appearances), and joined Arsenal on 21 August 2026 for a reported £51 million.",
    "achievementsAr": [
      "الدوري الأوروبي 2025-26 مع أستون فيلا",
      "الوصول إلى نصف نهائي كأس العالم 2026 مع إنجلترا"
    ],
    "achievementsEn": [
      "UEFA Europa League 2025-26 with Aston Villa",
      "Reached the 2026 World Cup semi-final with England"
    ],
    "clubsHistoryAr": [
      "تشارلتون أثليتك",
      "برينتفورد",
      "أستون فيلا",
      "أرسنال"
    ],
    "clubsHistoryEn": [
      "Charlton Athletic",
      "Brentford",
      "Aston Villa",
      "Arsenal"
    ],
    "clubIds": [
      "charlton-athletic",
      "brentford",
      "aston-villa",
      "arsenal"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ezri_Konsa"
  },
  {
    "id": "reiss-nelson",
    "nameAr": "ريس نيلسون",
    "nameEn": "Reiss Nelson",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "فاينورد",
    "clubEn": "Feyenoord",
    "clubId": "feyenoord",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "جناح إنجليزي من خريجي أكاديمية أرسنال، ظهر لأول مرة مع الفريق الأول عام 2017 وخاض عدة إعارات (هوفنهايم وفاينورد وفولهام وبرينتفورد) قبل أن ينتقل إلى فاينورد في 2026.",
    "bioEn": "English winger and Arsenal academy graduate who made his first-team debut in 2017 and had several loan spells (Hoffenheim, Feyenoord, Fulham, Brentford) before moving to Feyenoord in 2026.",
    "achievementsAr": [],
    "achievementsEn": [],
    "clubsHistoryAr": [
      "أرسنال",
      "هوفنهايم (إعارة)",
      "فاينورد (إعارة)",
      "فولهام (إعارة)",
      "برينتفورد (إعارة)",
      "فاينورد"
    ],
    "clubsHistoryEn": [
      "Arsenal",
      "TSG Hoffenheim (loan)",
      "Feyenoord (loan)",
      "Fulham (loan)",
      "Brentford (loan)",
      "Feyenoord"
    ],
    "clubIds": [
      "arsenal",
      "hoffenheim",
      "feyenoord",
      "fulham",
      "brentford"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Reiss_Nelson"
  },
  {
    "id": "fabio-vieira",
    "nameAr": "فابيو فييرا",
    "nameEn": "Fábio Vieira",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "هامبورغ",
    "clubEn": "Hamburger SV",
    "clubId": "hamburger-sv",
    "position": {
      "ar": "لاعب وسط مهاجم",
      "en": "Attacking midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "لاعب وسط برتغالي من سانتا ماريا دا فيرا، تخرج من أكاديمية بورتو وانضم إلى أرسنال في يوليو 2022، وأُعير إلى بورتو ثم هامبورغ قبل أن ينتقل إلى هامبورغ نهائياً في سبتمبر 2026.",
    "bioEn": "Portuguese attacking midfielder from Santa Maria da Feira who came through Porto's academy, joined Arsenal in July 2022, was loaned to Porto and Hamburger SV, and moved to Hamburger SV permanently in September 2026.",
    "achievementsAr": [
      "الدوري البرتغالي مرتين مع بورتو",
      "كأس البرتغال 2021-22 مع بورتو",
      "كأس السوبر الإنجليزي 2023 مع أرسنال",
      "وصيف بطولة أوروبا تحت 21 سنة 2021 مع البرتغال"
    ],
    "achievementsEn": [
      "Two Primeira Liga titles with Porto",
      "Taça de Portugal 2021-22 with Porto",
      "2023 FA Community Shield with Arsenal",
      "UEFA European Under-21 Championship runner-up 2021 with Portugal"
    ],
    "clubsHistoryAr": [
      "بورتو",
      "أرسنال",
      "بورتو (إعارة)",
      "هامبورغ (إعارة)",
      "هامبورغ"
    ],
    "clubsHistoryEn": [
      "Porto",
      "Arsenal",
      "Porto (loan)",
      "Hamburger SV (loan)",
      "Hamburger SV"
    ],
    "clubIds": [
      "porto",
      "arsenal",
      "hamburger-sv"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/F%C3%A1bio_Vieira_(footballer,_born_2000)"
  },
  {
    "id": "christian-norgaard",
    "nameAr": "كريستيان نورغارد",
    "nameEn": "Christian Nørgaard",
    "nationalityAr": "دنماركي",
    "nationalityEn": "Danish",
    "clubAr": "إيفرتون",
    "clubEn": "Everton",
    "clubId": "everton",
    "position": {
      "ar": "لاعب وسط مدافع",
      "en": "Defensive midfielder"
    },
    "era": "",
    "active": true,
    "bioAr": "لاعب وسط دنماركي من كوبنهاغن، برز مع بروندبي ثم انضم إلى برينتفورد عام 2019 وقاده إلى الصعود للدوري الإنجليزي الممتاز عام 2021 وأصبح قائده عام 2023، ثم انتقل إلى أرسنال في يوليو 2025 وإلى إيفرتون في أغسطس 2026.",
    "bioEn": "Danish midfielder from Copenhagen who rose to prominence at Brøndby, joined Brentford in 2019, helped them win promotion to the Premier League in 2021 and became captain in 2023, then moved to Arsenal in July 2025 and to Everton in August 2026.",
    "achievementsAr": [
      "الصعود إلى الدوري الإنجليزي الممتاز 2021 مع برينتفورد",
      "لقب الدوري الإنجليزي الممتاز 2025-26 مع أرسنال"
    ],
    "achievementsEn": [
      "Promotion to the Premier League in 2021 with Brentford",
      "Premier League title 2025-26 with Arsenal"
    ],
    "clubsHistoryAr": [
      "ليونغبي",
      "هامبورغ",
      "بروندبي",
      "فيورنتينا",
      "برينتفورد",
      "أرسنال",
      "إيفرتون"
    ],
    "clubsHistoryEn": [
      "Lyngby",
      "Hamburger SV",
      "Brøndby",
      "Fiorentina",
      "Brentford",
      "Arsenal",
      "Everton"
    ],
    "clubIds": [
      "hamburger-sv",
      "fiorentina",
      "brentford",
      "arsenal",
      "everton"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Christian_N%C3%B8rgaard"
  },
  {
    "id": "marco-palestra",
    "nameAr": "ماركو باليسترا",
    "nameEn": "Marco Palestra",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "ظهير أيمن / جناح مدافع",
      "en": "Right-back / Right wing-back"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "ظهير إيطالي وُلد في بوتشيناسكو عام 2005، تخرج من أكاديمية أتالانتا وقضى موسم 2025-26 معاراً إلى كالياري حيث اختير أفضل مدافع في الدوري الإيطالي، ثم انضم إلى تشيلسي في 1 يوليو 2026 بعقد حتى 2033.",
    "bioEn": "Italian right-back born in Buccinasco in 2005 who came through Atalanta's academy, spent 2025-26 on loan at Cagliari where he was named Serie A Defender of the Year, and joined Chelsea on 1 July 2026 on a contract until 2033.",
    "achievementsAr": [
      "الدوري الأوروبي 2023-24 مع أتالانتا (ضمن التشكيلة)",
      "أفضل مدافع في الدوري الإيطالي 2025-26"
    ],
    "achievementsEn": [
      "UEFA Europa League 2023-24 with Atalanta (squad member)",
      "Serie A Defender of the Year 2025-26"
    ],
    "clubsHistoryAr": [
      "أتالانتا",
      "كالياري (إعارة)",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Atalanta",
      "Cagliari (loan)",
      "Chelsea"
    ],
    "clubIds": [
      "atalanta",
      "cagliari",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marco_Palestra"
  },
  {
    "id": "wesley-fofana",
    "nameAr": "ويسلي فوفانا",
    "nameEn": "Wesley Fofana",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "مدافع فرنسي وُلد في مرسيليا عام 2000، بدأ مع سانت إتيان وانضم إلى ليستر سيتي في أكتوبر 2020، ثم انتقل إلى تشيلسي في أغسطس 2022 مقابل نحو 70 مليون جنيه إسترليني.",
    "bioEn": "French centre-back born in Marseille in 2000 who started at Saint-Étienne, joined Leicester City in October 2020 and moved to Chelsea in August 2022 for around £70 million.",
    "achievementsAr": [
      "كأس الاتحاد الإنجليزي 2020-21 مع ليستر سيتي",
      "أفضل لاعب شاب في ليستر سيتي 2020-21"
    ],
    "achievementsEn": [
      "FA Cup 2020-21 with Leicester City",
      "Leicester City Young Player of the Season 2020-21"
    ],
    "clubsHistoryAr": [
      "سانت إتيان",
      "ليستر سيتي",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Saint-Étienne",
      "Leicester City",
      "Chelsea"
    ],
    "clubIds": [
      "saint-etienne",
      "leicester-city",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Wesley_Fofana_(footballer)"
  },
  {
    "id": "maxence-lacroix",
    "nameAr": "ماكسانس لاكروا",
    "nameEn": "Maxence Lacroix",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "مدافع فرنسي وُلد في فيلنوف-سان-جورج عام 2000، بدأ مع سوشو ثم لعب لفولفسبورغ وكريستال بالاس، وانضم إلى تشيلسي في 30 يوليو 2026 مقابل نحو 52 مليون جنيه إسترليني.",
    "bioEn": "French centre-back born in Villeneuve-Saint-Georges in 2000 who started at Sochaux, played for VfL Wolfsburg and Crystal Palace, and joined Chelsea on 30 July 2026 for a reported £52 million.",
    "achievementsAr": [
      "كأس الاتحاد الإنجليزي 2024-25 مع كريستال بالاس",
      "كأس الدرع الخيرية 2025 مع كريستال بالاس",
      "دوري المؤتمر الأوروبي 2025-26 مع كريستال بالاس"
    ],
    "achievementsEn": [
      "FA Cup 2024-25 with Crystal Palace",
      "FA Community Shield 2025 with Crystal Palace",
      "UEFA Conference League 2025-26 with Crystal Palace"
    ],
    "clubsHistoryAr": [
      "سوشو",
      "فولفسبورغ",
      "كريستال بالاس",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Sochaux",
      "VfL Wolfsburg",
      "Crystal Palace",
      "Chelsea"
    ],
    "clubIds": [
      "sochaux",
      "vfl-wolfsburg",
      "crystal-palace",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Maxence_Lacroix"
  },
  {
    "id": "valentin-barco",
    "nameAr": "فالنتين باركو",
    "nameEn": "Valentín Barco",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "لاعب وسط / ظهير أيسر",
      "en": "Midfielder / Left-back"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "لاعب أرجنتيني تخرج من أكاديمية بوكا جونيورز وظهر مع الفريق الأول عام 2021 وهو في السادسة عشرة، ثم انتقل إلى برايتون في يناير 2024 ولعب لسيفيا (إعارة) وستراسبورغ، وانضم إلى تشيلسي في أغسطس 2026 بعقد حتى 2033.",
    "bioEn": "Argentine player who came through Boca Juniors' academy and made his first-team debut at 16 in 2021, joined Brighton in January 2024, played for Sevilla (loan) and Strasbourg, and signed for Chelsea in August 2026 on a contract until 2033.",
    "achievementsAr": [
      "وصيف كأس العالم 2026 مع الأرجنتين"
    ],
    "achievementsEn": [
      "2026 FIFA World Cup runner-up with Argentina"
    ],
    "clubsHistoryAr": [
      "بوكا جونيورز",
      "برايتون",
      "إشبيلية (إعارة)",
      "ستراسبورغ (إعارة)",
      "ستراسبورغ",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Boca Juniors",
      "Brighton & Hove Albion",
      "Sevilla (loan)",
      "Strasbourg (loan)",
      "Strasbourg",
      "Chelsea"
    ],
    "clubIds": [
      "boca-juniors",
      "brighton-hove-albion",
      "sevilla",
      "strasbourg",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Valent%C3%ADn_Barco"
  },
  {
    "id": "levi-colwill",
    "nameAr": "ليفي كولويل",
    "nameEn": "Levi Colwill",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "مدافع إنجليزي وُلد في ساوثهامبتون، تخرج من أكاديمية تشيلسي وأُعير إلى هادرسفيلد تاون (2021-22) ثم برايتون (2022-23) قبل أن يستقر في الفريق الأول لتشيلسي، وله مشاركات دولية مع منتخب إنجلترا.",
    "bioEn": "English centre-back born in Southampton who came through Chelsea's academy, was loaned to Huddersfield Town (2021-22) and Brighton (2022-23) before establishing himself in Chelsea's first team; he plays for England.",
    "achievementsAr": [
      "بطولة أوروبا تحت 21 سنة 2023 مع إنجلترا"
    ],
    "achievementsEn": [
      "UEFA European Under-21 Championship 2023 with England"
    ],
    "clubsHistoryAr": [
      "تشيلسي (شباب)",
      "هادرسفيلد تاون (إعارة)",
      "برايتون (إعارة)",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Chelsea (youth)",
      "Huddersfield Town (loan)",
      "Brighton & Hove Albion (loan)",
      "Chelsea"
    ],
    "clubIds": [
      "huddersfield-town",
      "brighton-hove-albion",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Levi_Colwill"
  },
  {
    "id": "pedro-neto",
    "nameAr": "بيدرو نيتو",
    "nameEn": "Pedro Neto",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "جناح برتغالي من فيانا دو كاستيلو بدأ مع براغا وأُعير إلى لاتسيو، ثم انضم إلى وولفرهامبتون عام 2019 وإلى تشيلسي في أغسطس 2024.",
    "bioEn": "Portuguese winger from Viana do Castelo who started at Braga and was loaned to Lazio, joined Wolverhampton Wanderers in 2019 and Chelsea in August 2024.",
    "achievementsAr": [
      "دوري المؤتمر الأوروبي 2024-25 مع تشيلسي",
      "دوري الأمم الأوروبية 2024-25 مع البرتغال"
    ],
    "achievementsEn": [
      "UEFA Conference League 2024-25 with Chelsea",
      "UEFA Nations League 2024-25 with Portugal"
    ],
    "clubsHistoryAr": [
      "براغا",
      "لاتسيو (إعارة)",
      "وولفرهامبتون",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Braga",
      "Lazio (loan)",
      "Wolverhampton Wanderers",
      "Chelsea"
    ],
    "clubIds": [
      "braga",
      "lazio",
      "wolverhampton-wanderers",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pedro_Neto"
  },
  {
    "id": "jamie-gittens",
    "nameAr": "جيمي غيتنز",
    "nameEn": "Jamie Gittens",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "جناح إنجليزي وُلد في ريدينغ، مرّ بأكاديميتي ريدينغ ومانشستر سيتي ثم انتقل إلى بوروسيا دورتموند عام 2020، وانضم إلى تشيلسي في يوليو 2025.",
    "bioEn": "English winger born in Reading who went through the academies of Reading and Manchester City before moving to Borussia Dortmund in 2020, and joined Chelsea in July 2025.",
    "achievementsAr": [
      "بطولة أوروبا تحت 19 سنة 2022 مع إنجلترا"
    ],
    "achievementsEn": [
      "UEFA European Under-19 Championship 2022 with England"
    ],
    "clubsHistoryAr": [
      "بوروسيا دورتموند",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Borussia Dortmund",
      "Chelsea"
    ],
    "clubIds": [
      "borussia-dortmund",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jamie_Gittens"
  },
  {
    "id": "danny-welbeck",
    "nameAr": "داني ويلبيك",
    "nameEn": "Danny Welbeck",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2008-الآن",
    "active": true,
    "bioAr": "مهاجم إنجليزي وُلد في مانشستر، لعب لمانشستر يونايتد وأرسنال وواتفورد وبرايتون، وشارك مع إنجلترا في كأسي عالم، وانضم إلى تشيلسي في 1 أغسطس 2026 بعقد لعامين.",
    "bioEn": "English striker born in Manchester who played for Manchester United, Arsenal, Watford and Brighton, appeared at two World Cups with England, and joined Chelsea on 1 August 2026 on a two-year deal.",
    "achievementsAr": [
      "الدوري الإنجليزي الممتاز 2012-13 مع مانشستر يونايتد",
      "كأس الدرع الخيرية 2011 و2013 مع مانشستر يونايتد",
      "كأس الاتحاد الإنجليزي 2014-15 و2016-17 مع أرسنال",
      "كأس الدرع الخيرية 2017 مع أرسنال"
    ],
    "achievementsEn": [
      "Premier League 2012-13 with Manchester United",
      "FA Community Shield 2011 and 2013 with Manchester United",
      "FA Cup 2014-15 and 2016-17 with Arsenal",
      "FA Community Shield 2017 with Arsenal"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد",
      "بريستون نورث إند (إعارة)",
      "سندرلاند (إعارة)",
      "أرسنال",
      "واتفورد",
      "برايتون",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Manchester United",
      "Preston North End (loan)",
      "Sunderland (loan)",
      "Arsenal",
      "Watford",
      "Brighton & Hove Albion",
      "Chelsea"
    ],
    "clubIds": [
      "manchester-united",
      "preston-north-end",
      "sunderland",
      "arsenal",
      "brighton-hove-albion",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": ""
  },
  {
    "id": "jorrel-hato",
    "nameAr": "جورل هاتو",
    "nameEn": "Jorrel Hato",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "مدافع (قلب دفاع / ظهير أيسر)",
      "en": "Centre-back / Left-back"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "مدافع هولندي وُلد في روتردام عام 2006، انضم إلى أكاديمية أياكس عام 2018 وأصبح أصغر لاعب يقود الفريق كقائد عام 2023 وهو في السابعة عشرة، ثم انتقل إلى تشيلسي في أغسطس 2025 بعقد حتى 2032.",
    "bioEn": "Dutch defender born in Rotterdam in 2006 who joined Ajax's academy in 2018, became the club's youngest ever captain in 2023 aged 17, and moved to Chelsea in August 2025 on a contract until 2032.",
    "achievementsAr": [
      "أصغر لاعب يرتدي شارة قيادة أياكس (17 سنة) عام 2023"
    ],
    "achievementsEn": [
      "Youngest player to captain Ajax (aged 17) in 2023"
    ],
    "clubsHistoryAr": [
      "أياكس",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Ajax",
      "Chelsea"
    ],
    "clubIds": [
      "ajax",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jorrel_Hato"
  },
  {
    "id": "emmanuel-emegha",
    "nameAr": "إيمانويل إميغا",
    "nameEn": "Emmanuel Emegha",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "",
    "active": true,
    "bioAr": "مهاجم هولندي وُلد في لاهاي عام 2003، لعب لسبارتا روتردام ورويال أنتويرب وشتورم غراتس، ثم قاد ستراسبورغ كقائد منذ 2023 قبل أن ينضم إلى تشيلسي في صيف 2026.",
    "bioEn": "Dutch striker born in The Hague in 2003 who played for Sparta Rotterdam, Royal Antwerp and Sturm Graz, captained Strasbourg from 2023, and joined Chelsea in summer 2026.",
    "achievementsAr": [
      "كأس النمسا 2022-23 مع شتورم غراتس"
    ],
    "achievementsEn": [
      "Austrian Cup 2022-23 with Sturm Graz"
    ],
    "clubsHistoryAr": [
      "سبارتا روتردام",
      "رويال أنتويرب",
      "شتورم غراتس",
      "ستراسبورغ",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Sparta Rotterdam",
      "Royal Antwerp",
      "Sturm Graz",
      "Strasbourg",
      "Chelsea"
    ],
    "clubIds": [
      "strasbourg",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Emmanuel_Emegha"
  },
  {
    "id": "geovany-quenda",
    "nameAr": "جيوفاني كوينديا",
    "nameEn": "Geovany Quenda",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "جناح أيمن / ظهير جناح أيمن",
      "en": "Right winger / Right wing-back"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "جناح برتغالي وُلد في بيساو بغينيا بيساو عام 2007، تخرج من أكاديمية سبورتينغ لشبونة وانضم إلى تشيلسي في يوليو 2026 بعقد حتى 2034.",
    "bioEn": "Portuguese winger born in Bissau, Guinea-Bissau, in 2007 who came through Sporting CP's academy and joined Chelsea in July 2026 on a contract until 2034.",
    "achievementsAr": [
      "الدوري البرتغالي 2023-24 و2024-25 مع سبورتينغ لشبونة",
      "كأس البرتغال 2024-25 مع سبورتينغ لشبونة",
      "دوري الأمم الأوروبية 2024-25 مع البرتغال"
    ],
    "achievementsEn": [
      "Liga Portugal 2023-24 and 2024-25 with Sporting CP",
      "Taça de Portugal 2024-25 with Sporting CP",
      "UEFA Nations League 2024-25 with Portugal"
    ],
    "clubsHistoryAr": [
      "سبورتينغ لشبونة",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Sporting CP",
      "Chelsea"
    ],
    "clubIds": [
      "sporting-cp",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Geovany_Quenda"
  },
  {
    "id": "malo-gusto",
    "nameAr": "مالو غوستو",
    "nameEn": "Malo Gusto",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "ظهير أيمن",
      "en": "Right-back"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "ظهير أيمن فرنسي تخرج من أكاديمية ليون، وانضم إلى تشيلسي في يناير 2023 وبقي معاراً في ليون حتى نهاية الموسم، ثم التحق بتشيلسي في صيف 2023.",
    "bioEn": "French right-back who came through Lyon's academy, signed for Chelsea in January 2023 and stayed on loan at Lyon until the end of that season before joining Chelsea in summer 2023.",
    "achievementsAr": [
      "دوري المؤتمر الأوروبي 2024-25 مع تشيلسي",
      "كأس العالم للأندية 2025 مع تشيلسي",
      "كأس غامبيردلا 2021-22 مع ليون (تحت 19)"
    ],
    "achievementsEn": [
      "UEFA Conference League 2024-25 with Chelsea",
      "2025 FIFA Club World Cup with Chelsea",
      "Coupe Gambardella 2021-22 with Lyon U19"
    ],
    "clubsHistoryAr": [
      "ليون",
      "تشيلسي",
      "ليون (إعارة)",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Lyon",
      "Chelsea",
      "Lyon (loan)",
      "Chelsea"
    ],
    "clubIds": [
      "lyon",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Malo_Gusto"
  },
  {
    "id": "pep-chavarria",
    "nameAr": "بيب تشافاريا",
    "nameEn": "Pep Chavarría",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "",
    "active": true,
    "bioAr": "ظهير أيسر إسباني وُلد في فيغيراس بكتالونيا عام 1998، لعب لأولوت وريال سرقسطة وبالكانو، وانضم إلى تشيلسي في أغسطس 2026 بعقد حتى 2031.",
    "bioEn": "Spanish left-back born in Figueres, Catalonia, in 1998 who played for UE Olot, Real Zaragoza and Rayo Vallecano, and joined Chelsea in August 2026 on a contract until 2031.",
    "achievementsAr": [],
    "achievementsEn": [],
    "clubsHistoryAr": [
      "فيغيراس",
      "أولوت",
      "ريال سرقسطة",
      "رايو فايكانو",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "UE Figueres",
      "UE Olot",
      "Real Zaragoza",
      "Rayo Vallecano",
      "Chelsea"
    ],
    "clubIds": [
      "real-zaragoza",
      "rayo-vallecano",
      "chelsea"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pep_Chavarr%C3%ADa"
  },
  {
    "id": "aaron-anselmino",
    "nameAr": "آرون أنسيلمينو",
    "nameEn": "Aarón Anselmino",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "مدافع أرجنتيني وُلد عام 2005، تخرج من أكاديمية بوكا جونيورز وانضم إلى تشيلسي في أغسطس 2024، وأُعير إلى بوكا ثم بوروسيا دورتموند (2025-26) وستراسبورغ (2026).",
    "bioEn": "Argentine centre-back born in 2005 who came through Boca Juniors' academy, signed for Chelsea in August 2024 and was loaned to Boca, Borussia Dortmund (2025-26) and Strasbourg (2026).",
    "achievementsAr": [
      "كأس العالم للأندية 2025 مع تشيلسي (ضمن التشكيلة)"
    ],
    "achievementsEn": [
      "2025 FIFA Club World Cup with Chelsea (squad member)"
    ],
    "clubsHistoryAr": [
      "بوكا جونيورز",
      "تشيلسي",
      "بوكا جونيورز (إعارة)",
      "بوروسيا دورتموند (إعارة)",
      "ستراسبورغ (إعارة)",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Boca Juniors",
      "Chelsea",
      "Boca Juniors (loan)",
      "Borussia Dortmund (loan)",
      "Strasbourg (loan)",
      "Chelsea"
    ],
    "clubIds": [
      "boca-juniors",
      "chelsea",
      "borussia-dortmund",
      "strasbourg"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Aar%C3%B3n_Anselmino"
  },
  {
    "id": "mike-penders",
    "nameAr": "مايك بيندرز",
    "nameEn": "Mike Penders",
    "nationalityAr": "بلجيكي",
    "nationalityEn": "Belgian",
    "clubAr": "تشيلسي",
    "clubEn": "Chelsea",
    "clubId": "chelsea",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2024-الآن",
    "active": true,
    "bioAr": "حارس مرمى بلجيكي وُلد في ماسمخيلن عام 2005، ظهر لأول مرة مع جنك في يوليو 2024، وانضم إلى تشيلسي في أغسطس 2024، وقضى موسم 2025-26 معاراً إلى ستراسبورغ قبل عودته إلى تشيلسي.",
    "bioEn": "Belgian goalkeeper born in Maasmechelen in 2005 who made his Genk debut in July 2024, signed for Chelsea in August 2024, and spent 2025-26 on loan at Strasbourg before returning to Chelsea.",
    "achievementsAr": [
      "كأس العالم للأندية 2025 مع تشيلسي"
    ],
    "achievementsEn": [
      "2025 FIFA Club World Cup with Chelsea"
    ],
    "clubsHistoryAr": [
      "جنك",
      "تشيلسي",
      "جنك (إعارة)",
      "ستراسبورغ (إعارة)",
      "تشيلسي"
    ],
    "clubsHistoryEn": [
      "Genk",
      "Chelsea",
      "Genk (loan)",
      "Strasbourg (loan)",
      "Chelsea"
    ],
    "clubIds": [
      "chelsea",
      "strasbourg"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": ""
  },
  {
    "id": "marcus-bettinelli",
    "nameAr": "ماركوس بيتينيلي",
    "nameEn": "Marcus Bettinelli",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2010-الآن",
    "active": true,
    "bioAr": "حارس مرمى إنجليزي وُلد في كامبرويل بلندن لأب إيطالي، تخرج من أكاديمية فولهام وأعير إلى دارتفورد وأكرينغتون ستانلي ومِدلزبره، ثم انضم إلى تشيلسي عام 2021 وإلى مانشستر سيتي في يونيو 2025.",
    "bioEn": "English goalkeeper born in Camberwell, London, to an Italian father who came through Fulham's academy, had loan spells at Dartford, Accrington Stanley and Middlesbrough, joined Chelsea in 2021 and Manchester City in June 2025.",
    "achievementsAr": [
      "الصعود إلى الدوري الإنجليزي الممتاز 2018 مع فولهام (التشامبيونشيب بلاي أوف)",
      "دوري المؤتمر الأوروبي 2024-25 مع تشيلسي (ضمن التشكيلة)",
      "كأس الاتحاد الإنجليزي 2025-26 مع مانشستر سيتي (ضمن التشكيلة)",
      "كأس الرابطة الإنجليزية 2025-26 مع مانشستر سيتي (ضمن التشكيلة)"
    ],
    "achievementsEn": [
      "Promotion to the Premier League in 2018 with Fulham (Championship play-off)",
      "UEFA Conference League 2024-25 with Chelsea (squad member)",
      "FA Cup 2025-26 with Manchester City (squad member)",
      "EFL Cup 2025-26 with Manchester City (squad member)"
    ],
    "clubsHistoryAr": [
      "فولهام",
      "دارتفورد (إعارة)",
      "أكرينغتون ستانلي (إعارة)",
      "مِدلزبره (إعارة)",
      "تشيلسي",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Fulham",
      "Dartford (loan)",
      "Accrington Stanley (loan)",
      "Middlesbrough (loan)",
      "Chelsea",
      "Manchester City"
    ],
    "clubIds": [
      "fulham",
      "middlesbrough",
      "chelsea",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marcus_Bettinelli"
  },
  {
    "id": "geronimo-rulli",
    "nameAr": "خيرونيمو رولي",
    "nameEn": "Gerónimo Rulli",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "حارس مرمى أرجنتيني وُلد في لا بلاتا، بدأ مع إستوديانتيس ثم لعب لريال سوسيداد ومونبلييه وفياريال وأياكس ومرسيليا، وعاد إلى مانشستر سيتي في 12 أغسطس 2026 بعقد لعامين بعد فترة أولى لم يشارك فيها (2016-17).",
    "bioEn": "Argentine goalkeeper born in La Plata who started at Estudiantes, played for Real Sociedad, Montpellier, Villarreal, Ajax and Marseille, and returned to Manchester City on 12 August 2026 on a two-year deal after a first spell in 2016-17 without a first-team appearance.",
    "achievementsAr": [
      "الدوري الأوروبي 2020-21 مع فياريال",
      "كأس العالم 2022 مع الأرجنتين (ضمن التشكيلة)",
      "كوبا أمريكا 2024 مع الأرجنتين (ضمن التشكيلة)"
    ],
    "achievementsEn": [
      "UEFA Europa League 2020-21 with Villarreal",
      "2022 FIFA World Cup with Argentina (squad member)",
      "2024 Copa América with Argentina (squad member)"
    ],
    "clubsHistoryAr": [
      "إستوديانتيس",
      "ريال سوسيداد (إعارة)",
      "مانشستر سيتي",
      "ريال سوسيداد",
      "مونبلييه (إعارة)",
      "فياريال",
      "أياكس",
      "مرسيليا",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Estudiantes",
      "Real Sociedad (loan)",
      "Manchester City",
      "Real Sociedad",
      "Montpellier (loan)",
      "Villarreal",
      "Ajax",
      "Marseille",
      "Manchester City"
    ],
    "clubIds": [
      "real-sociedad",
      "manchester-city",
      "montpellier",
      "villarreal",
      "ajax",
      "marseille"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ger%C3%B3nimo_Rulli"
  },
  {
    "id": "rayan-ait-nouri",
    "nameAr": "ريان آيت نوري",
    "nameEn": "Rayan Aït-Nouri",
    "nationalityAr": "جزائري",
    "nationalityEn": "Algerian",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "ظهير أيسر وُلد في مونتروي بفرنسا وتخرج من أكاديمية أنجيه، ثم انضم إلى وولفرهامبتون معاراً في أكتوبر 2020 وبشكل دائم عام 2021، وانتقل إلى مانشستر سيتي في يونيو 2025 مقابل نحو 31 مليون جنيه، ويمثل منتخب الجزائر منذ 2023.",
    "bioEn": "Left-back born in Montreuil, France, who came through Angers' academy, joined Wolverhampton Wanderers on loan in October 2020 and permanently in 2021, moved to Manchester City in June 2025 for around £31 million, and has represented Algeria since 2023.",
    "achievementsAr": [
      "كأس الاتحاد الإنجليزي 2025-26 مع مانشستر سيتي",
      "كأس الرابطة الإنجليزية 2025-26 مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "FA Cup 2025-26 with Manchester City",
      "EFL Cup 2025-26 with Manchester City"
    ],
    "clubsHistoryAr": [
      "أنجيه",
      "وولفرهامبتون (إعارة)",
      "وولفرهامبتون",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Angers",
      "Wolverhampton Wanderers (loan)",
      "Wolverhampton Wanderers",
      "Manchester City"
    ],
    "clubIds": [
      "angers",
      "wolverhampton-wanderers",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rayan_A%C3%AFt-Nouri"
  },
  {
    "id": "vitor-reis",
    "nameAr": "فيتور ريس",
    "nameEn": "Vitor Reis",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "2024-الآن",
    "active": true,
    "bioAr": "مدافع برازيلي وُلد في ساو جوزيه دوس كامبوس عام 2006، تخرج من أكاديمية بالميراس وانضم إلى مانشستر سيتي في يناير 2025، وقضى موسم 2025-26 معاراً إلى جيرونا قبل عودته إلى سيتي.",
    "bioEn": "Brazilian centre-back born in São José dos Campos in 2006 who came through Palmeiras' academy, joined Manchester City in January 2025 and spent 2025-26 on loan at Girona before returning to City.",
    "achievementsAr": [
      "أول مباراة مع منتخب البرازيل الأول عام 2026"
    ],
    "achievementsEn": [
      "Senior Brazil debut in 2026"
    ],
    "clubsHistoryAr": [
      "بالميراس",
      "مانشستر سيتي",
      "جيرونا (إعارة)",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Palmeiras",
      "Manchester City",
      "Girona (loan)",
      "Manchester City"
    ],
    "clubIds": [
      "palmeiras",
      "manchester-city",
      "girona"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Vitor_Reis"
  },
  {
    "id": "abdukodir-khusanov",
    "nameAr": "عبد القادر خوسانوف",
    "nameEn": "Abdukodir Khusanov",
    "nationalityAr": "أوزبكي",
    "nationalityEn": "Uzbek",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "مدافع (قلب دفاع / ظهير أيمن)",
      "en": "Centre-back / Right-back"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "مدافع أوزبكي وُلد في طشقند عام 2004، بدأ مع بونيودكور ثم إنرجيتيك بي جي يو في بيلاروسيا ولانس الفرنسي، وانضم إلى مانشستر سيتي في يناير 2025 ليصبح أول لاعب أوزبكي في الدوري الإنجليزي الممتاز.",
    "bioEn": "Uzbek defender born in Tashkent in 2004 who came through Bunyodkor, played for Energetik-BGU in Belarus and Lens in France, and joined Manchester City in January 2025, becoming the first Uzbek player in the Premier League.",
    "achievementsAr": [
      "كأس آسيا تحت 20 سنة 2023 مع أوزبكستان",
      "سلسلة فيفا 2026 مع أوزبكستان",
      "كأس الاتحاد الإنجليزي 2025-26 مع مانشستر سيتي",
      "كأس الرابطة الإنجليزية 2025-26 مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "AFC U-20 Asian Cup 2023 with Uzbekistan",
      "FIFA Series 2026 with Uzbekistan",
      "FA Cup 2025-26 with Manchester City",
      "EFL Cup 2025-26 with Manchester City"
    ],
    "clubsHistoryAr": [
      "بونيودكور",
      "إنرجيتيك بي جي يو",
      "لانس",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Bunyodkor",
      "Energetik-BGU",
      "Lens",
      "Manchester City"
    ],
    "clubIds": [
      "lens",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Abdukodir_Khusanov"
  },
  {
    "id": "rico-lewis",
    "nameAr": "ريكو لويس",
    "nameEn": "Rico Lewis",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "ظهير أيمن / لاعب وسط دفاعي",
      "en": "Right-back / Defensive midfielder"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "لاعب إنجليزي وُلد في بيري، تخرج من أكاديمية مانشستر سيتي وظهر مع الفريق الأول في أغسطس 2022، وأصبح أصغر لاعب يسجل في أول مباراة له أساسياً في دوري أبطال أوروبا مع سيتي (17 سنة و346 يوماً).",
    "bioEn": "English player born in Bury who came through Manchester City's academy, made his first-team debut in August 2022 and became the youngest player to score on a first Champions League start (aged 17 years 346 days).",
    "achievementsAr": [
      "الدوري الإنجليزي الممتاز 2022-23 و2023-24",
      "كأس الاتحاد الإنجليزي 2022-23",
      "دوري أبطال أوروبا 2022-23",
      "كأس السوبر الأوروبي 2023",
      "كأس العالم للأندية 2023",
      "كأس الرابطة الإنجليزية 2025-26"
    ],
    "achievementsEn": [
      "Premier League 2022-23 and 2023-24",
      "FA Cup 2022-23",
      "UEFA Champions League 2022-23",
      "UEFA Super Cup 2023",
      "FIFA Club World Cup 2023",
      "EFL Cup 2025-26"
    ],
    "clubsHistoryAr": [
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Manchester City"
    ],
    "clubIds": [
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rico_Lewis"
  },
  {
    "id": "nico-oreilly",
    "nameAr": "نيكو أورايلي",
    "nameEn": "Nico O'Reilly",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "ظهير أيسر / لاعب وسط",
      "en": "Left-back / Midfielder"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "لاعب إنجليزي وُلد في مانشستر وتخرج من أكاديمية مانشستر سيتي، ظهر لأول مرة مع الفريق الأول عام 2024 وسجل هدفين في نهائي كأس الرابطة الإنجليزية 2026، ومثّل إنجلترا في كأس العالم 2026.",
    "bioEn": "English player born in Manchester who came through Manchester City's academy, made his first-team debut in 2024, scored twice in the 2026 EFL Cup final and represented England at the 2026 World Cup.",
    "achievementsAr": [
      "كأس الرابطة الإنجليزية 2025-26 (سجل هدفين في النهائي)",
      "كأس الاتحاد الإنجليزي 2025-26",
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "جائزة خريج الأكاديمية لموسم 2025-26 في الدوري الإنجليزي"
    ],
    "achievementsEn": [
      "EFL Cup 2025-26 (scored twice in the final)",
      "FA Cup 2025-26",
      "Third place at the 2026 World Cup with England",
      "Premier League Academy Graduate of the Year 2025-26"
    ],
    "clubsHistoryAr": [
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Manchester City"
    ],
    "clubIds": [
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Nico_O%27Reilly"
  },
  {
    "id": "mateo-kovacic",
    "nameAr": "ماتيو كوفاتشيتش",
    "nameEn": "Mateo Kovačić",
    "nationalityAr": "كرواتي",
    "nationalityEn": "Croatian",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "لاعب وسط",
      "en": "Central midfielder"
    },
    "era": "2010-الآن",
    "active": true,
    "bioAr": "لاعب وسط كرواتي وُلد في لينز بالنمسا، بدأ مع دينامو زغرب ثم لعب لإنتر ميلان وريال مدريد وتشيلسي، وانضم إلى مانشستر سيتي في يونيو 2023، ويمثل منتخب كرواتيا منذ 2013.",
    "bioEn": "Croatian midfielder born in Linz, Austria, who started at Dinamo Zagreb, played for Inter Milan, Real Madrid and Chelsea, and joined Manchester City in June 2023; he has represented Croatia since 2013.",
    "achievementsAr": [
      "الدوري الكرواتي مرتين مع دينامو زغرب",
      "دوري أبطال أوروبا 2015-16 و2016-17 و2017-18 مع ريال مدريد",
      "الدوري الأوروبي 2018-19 مع تشيلسي",
      "دوري أبطال أوروبا 2020-21 مع تشيلسي",
      "كأس السوبر الأوروبي وكأس العالم للأندية 2021 مع تشيلسي",
      "أفضل لاعب في تشيلسي 2019-20",
      "الدوري الإنجليزي الممتاز 2023-24 مع مانشستر سيتي",
      "كأس العالم للأندية 2023 مع مانشستر سيتي",
      "كأس الاتحاد الإنجليزي 2025-26 مع مانشستر سيتي",
      "كأس الرابطة الإنجليزية 2025-26 مع مانشستر سيتي",
      "وصيف كأس العالم 2018 مع كرواتيا",
      "المركز الثالث في كأس العالم 2022 مع كرواتيا"
    ],
    "achievementsEn": [
      "Two Croatian league titles with Dinamo Zagreb",
      "UEFA Champions League 2015-16, 2016-17 and 2017-18 with Real Madrid",
      "UEFA Europa League 2018-19 with Chelsea",
      "UEFA Champions League 2020-21 with Chelsea",
      "UEFA Super Cup and FIFA Club World Cup 2021 with Chelsea",
      "Chelsea Player of the Year 2019-20",
      "Premier League 2023-24 with Manchester City",
      "FIFA Club World Cup 2023 with Manchester City",
      "FA Cup 2025-26 with Manchester City",
      "EFL Cup 2025-26 with Manchester City",
      "2018 World Cup runner-up with Croatia",
      "Third place at the 2022 World Cup with Croatia"
    ],
    "clubsHistoryAr": [
      "دينامو زغرب",
      "إنتر ميلان",
      "ريال مدريد",
      "تشيلسي (إعارة)",
      "تشيلسي",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Dinamo Zagreb",
      "Inter Milan",
      "Real Madrid",
      "Chelsea (loan)",
      "Chelsea",
      "Manchester City"
    ],
    "clubIds": [
      "inter-milan",
      "real-madrid",
      "chelsea",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mateo_Kova%C4%8Di%C4%87"
  },
  {
    "id": "matheus-nunes",
    "nameAr": "ماثيوس نونيس",
    "nameEn": "Matheus Nunes",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "لاعب وسط / ظهير أيمن",
      "en": "Midfielder / Right-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "لاعب برتغالي وُلد في ريو دي جانيرو وانتقل إلى البرتغال في الثانية عشرة، بدأ مع إريسيرينسي ثم إستوريل وسبورتينغ لشبونة ووولفرهامبتون، وانضم إلى مانشستر سيتي في سبتمبر 2023 مقابل نحو 53 مليون جنيه.",
    "bioEn": "Portuguese player born in Rio de Janeiro who moved to Portugal aged 12, played for Ericeirense, Estoril, Sporting CP and Wolverhampton Wanderers, and joined Manchester City in September 2023 for around £53 million.",
    "achievementsAr": [
      "الدوري البرتغالي 2020-21 مع سبورتينغ لشبونة",
      "كأس الرابطة البرتغالية 2020-21 و2021-22 مع سبورتينغ لشبونة",
      "الدوري الإنجليزي الممتاز 2023-24 مع مانشستر سيتي",
      "كأس العالم للأندية 2023 مع مانشستر سيتي",
      "كأس الاتحاد الإنجليزي 2025-26 مع مانشستر سيتي",
      "كأس الرابطة الإنجليزية 2025-26 مع مانشستر سيتي"
    ],
    "achievementsEn": [
      "Primeira Liga 2020-21 with Sporting CP",
      "Taça da Liga 2020-21 and 2021-22 with Sporting CP",
      "Premier League 2023-24 with Manchester City",
      "FIFA Club World Cup 2023 with Manchester City",
      "FA Cup 2025-26 with Manchester City",
      "EFL Cup 2025-26 with Manchester City"
    ],
    "clubsHistoryAr": [
      "إريسيرينسي",
      "إستوريل",
      "سبورتينغ لشبونة",
      "وولفرهامبتون",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Ericeirense",
      "Estoril",
      "Sporting CP",
      "Wolverhampton Wanderers",
      "Manchester City"
    ],
    "clubIds": [
      "sporting-cp",
      "wolverhampton-wanderers",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Matheus_Nunes"
  },
  {
    "id": "elliot-anderson",
    "nameAr": "إليوت أندرسون",
    "nameEn": "Elliot Anderson",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "لاعب وسط إنجليزي من ويتلي باي، تخرج من أكاديمية نيوكاسل يونايتد وأُعير إلى بريستول روفرز، ثم انضم إلى نوتنغهام فورست عام 2024، وانتقل إلى مانشستر سيتي في صيف 2026 مقابل 116 مليون جنيه إسترليني رقماً قياسياً للاعب بريطاني.",
    "bioEn": "English midfielder from Whitley Bay who came through Newcastle United's academy, was loaned to Bristol Rovers, joined Nottingham Forest in 2024 and moved to Manchester City in summer 2026 for £116 million, a British transfer record.",
    "achievementsAr": [
      "بطولة أوروبا تحت 21 سنة 2025 مع إنجلترا",
      "الصعود من الدرجة الثانية 2021-22 مع بريستول روفرز (إعارة)",
      "شارك مع إنجلترا في كأس العالم 2026"
    ],
    "achievementsEn": [
      "UEFA European Under-21 Championship 2025 with England",
      "League Two promotion 2021-22 with Bristol Rovers (loan)",
      "Appeared at the 2026 World Cup with England"
    ],
    "clubsHistoryAr": [
      "نيوكاسل يونايتد",
      "بريستول روفرز (إعارة)",
      "نوتنغهام فورست",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Newcastle United",
      "Bristol Rovers (loan)",
      "Nottingham Forest",
      "Manchester City"
    ],
    "clubIds": [
      "newcastle-united",
      "bristol-rovers",
      "nottingham-forest",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Elliot_Anderson_(footballer)"
  },
  {
    "id": "iliman-ndiaye",
    "nameAr": "إيليمان ندياي",
    "nameEn": "Iliman Ndiaye",
    "nationalityAr": "سنغالي",
    "nationalityEn": "Senegalese",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "جناح وُلد في روان بفرنسا، بدأ مسيرته في إنجلترا مع بورهام وود ثم شيفيلد يونايتد، ولعب لمرسيليا وإيفرتون، وانضم إلى مانشستر سيتي في 1 سبتمبر 2026 بعقد حتى 2031 مقابل نحو 60 مليون جنيه، ويمثل منتخب السنغال.",
    "bioEn": "Winger born in Rouen, France, who began his senior career in England with Boreham Wood and Sheffield United, played for Marseille and Everton, and joined Manchester City on 1 September 2026 on a contract to 2031 for around £60 million; he plays for Senegal.",
    "achievementsAr": [
      "الصعود إلى الدوري الإنجليزي الممتاز 2022-23 مع شيفيلد يونايتد",
      "اختير ضمن تشكيلة الموسم في التشامبيونشيب ورابطة اللاعبين (PFA)",
      "أفضل لاعب في شيفيلد يونايتد"
    ],
    "achievementsEn": [
      "Promotion to the Premier League in 2022-23 with Sheffield United",
      "Named in the Championship and PFA Team of the Year",
      "Sheffield United Player of the Year"
    ],
    "clubsHistoryAr": [
      "بورهام وود",
      "شيفيلد يونايتد",
      "مرسيليا",
      "إيفرتون",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Boreham Wood",
      "Sheffield United",
      "Marseille",
      "Everton",
      "Manchester City"
    ],
    "clubIds": [
      "sheffield-united",
      "marseille",
      "everton",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Iliman_Ndiaye"
  },
  {
    "id": "allan-elias",
    "nameAr": "آلان إلياس",
    "nameEn": "Allan Elias",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "جناح",
      "en": "Winger"
    },
    "era": "",
    "active": true,
    "bioAr": "جناح برازيلي وُلد في فلوريانوبوليس عام 2004، تخرج من أكاديمية بالميراس وخاض معه 96 مباراة، وانضم إلى مانشستر سيتي في 31 أغسطس 2026 بعقد لخمس سنوات مقابل نحو 34 مليون جنيه.",
    "bioEn": "Brazilian winger born in Florianópolis in 2004 who came through Palmeiras' academy and made 96 first-team appearances before joining Manchester City on 31 August 2026 on a five-year deal for a reported £34 million.",
    "achievementsAr": [],
    "achievementsEn": [],
    "clubsHistoryAr": [
      "بالميراس",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Palmeiras",
      "Manchester City"
    ],
    "clubIds": [
      "palmeiras",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": ""
  },
  {
    "id": "ayyoub-bouaddi",
    "nameAr": "أيوب بوعدي",
    "nameEn": "Ayyoub Bouaddi",
    "nationalityAr": "مغربي",
    "nationalityEn": "Moroccan",
    "clubAr": "مانشستر سيتي",
    "clubEn": "Manchester City",
    "clubId": "manchester-city",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "لاعب وسط وُلد في سانليس بفرنسا لأسرة مغربية، ظهر لأول مرة مع ليل وهو في السادسة عشرة، ومثّل فرنسا في الفئات السنية قبل أن يختار المغرب عام 2026، وانضم إلى مانشستر سيتي في أغسطس 2026 بعقد لخمس سنوات.",
    "bioEn": "Midfielder born in Senlis, France, to a Moroccan family who made his Lille debut aged 16, represented France at youth level before switching to Morocco in 2026, and joined Manchester City in August 2026 on a five-year contract.",
    "achievementsAr": [
      "الوصول إلى ربع نهائي كأس العالم 2026 مع المغرب"
    ],
    "achievementsEn": [
      "Reached the 2026 World Cup quarter-finals with Morocco"
    ],
    "clubsHistoryAr": [
      "ليل",
      "مانشستر سيتي"
    ],
    "clubsHistoryEn": [
      "Lille",
      "Manchester City"
    ],
    "clubIds": [
      "lille",
      "manchester-city"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ayyoub_Bouaddi"
  },
  {
    "id": "claudio-echeverri",
    "nameAr": "كلاوديو إتشيفيري",
    "nameEn": "Claudio Echeverri",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "بنفيكا (إعارة من مانشستر سيتي)",
    "clubEn": "Benfica (on loan from Manchester City)",
    "clubId": "benfica",
    "position": {
      "ar": "صانع ألعاب / جناح",
      "en": "Attacking midfielder / Winger"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "لاعب أرجنتيني وُلد في ريسيستنسيا، تخرج من أكاديمية ريفر بلات وانضم إلى مانشستر سيتي في يناير 2024، وأُعير إلى ريفر بلات وباير ليفركوزن وجيرونا، وهو حالياً معار إلى بنفيكا منذ سبتمبر 2026.",
    "bioEn": "Argentine player born in Resistencia who came through River Plate's academy, joined Manchester City in January 2024, was loaned to River Plate, Bayer Leverkusen and Girona, and is currently on loan at Benfica since September 2026.",
    "achievementsAr": [
      "وصيف بطولة أمريكا الجنوبية تحت 20 سنة 2025 مع الأرجنتين"
    ],
    "achievementsEn": [
      "South American Under-20 Championship runner-up 2025 with Argentina"
    ],
    "clubsHistoryAr": [
      "ريفر بلات",
      "مانشستر سيتي",
      "ريفر بلات (إعارة)",
      "باير ليفركوزن (إعارة)",
      "جيرونا (إعارة)",
      "بنفيكا (إعارة)"
    ],
    "clubsHistoryEn": [
      "River Plate",
      "Manchester City",
      "River Plate (loan)",
      "Bayer Leverkusen (loan)",
      "Girona (loan)",
      "Benfica (loan)"
    ],
    "clubIds": [
      "river-plate",
      "manchester-city",
      "bayer-leverkusen",
      "girona",
      "benfica"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Claudio_Echeverri"
  },
  {
    "id": "giorgi-mamardashvili",
    "nameAr": "جيورجي مامارداشفيلي",
    "nameEn": "Giorgi Mamardashvili",
    "nationalityAr": "جورجي",
    "nationalityEn": "Georgian",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "حارس مرمى جورجي وُلد في تبليسي عام 2000، بدأ مع دينامو تبليسي ثم انتقل إلى فالنسيا عام 2021 وأصبح أول حارس جورجي في الدوري الإسباني، وانضم إلى ليفربول في 1 يوليو 2025 مقابل نحو 29.45 مليون جنيه إسترليني.",
    "bioEn": "Georgian goalkeeper born in Tbilisi in 2000 who started at Dinamo Tbilisi, joined Valencia in 2021 as the first Georgian goalkeeper in La Liga, and signed for Liverpool on 1 July 2025 for a reported £29.45 million.",
    "achievementsAr": [
      "أفضل حارس مرمى في جورجيا 2020",
      "أفضل لاعب في جورجيا 2024 (اتحاد الكرة الجورجي)",
      "تأهل مع جورجيا إلى كأس أمم أوروبا 2024 (أول بطولة كبرى في تاريخها)"
    ],
    "achievementsEn": [
      "Georgian Goalkeeper of the Year 2020",
      "Georgian Football Federation Player of the Year 2024",
      "Qualified with Georgia for UEFA Euro 2024 (the nation's first major tournament)"
    ],
    "clubsHistoryAr": [
      "دينامو تبليسي",
      "روستافي (إعارة)",
      "لوكوموتيف تبليسي (إعارة)",
      "فالنسيا",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Dinamo Tbilisi",
      "Rustavi (loan)",
      "Locomotive Tbilisi (loan)",
      "Valencia",
      "Liverpool"
    ],
    "clubIds": [
      "valencia",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Giorgi_Mamardashvili"
  },
  {
    "id": "milos-kerkez",
    "nameAr": "ميلوش كيركيز",
    "nameEn": "Milos Kerkez",
    "nationalityAr": "مجري",
    "nationalityEn": "Hungarian",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "ظهير أيسر وُلد في فربّاس بصربيا ويمثل منتخب المجر، تدرّج في أكاديمية رابيد فيينا ثم لعب لغيور وإيه زد ألكمار وبورنموث، وانضم إلى ليفربول في 26 يونيو 2025 مقابل نحو 40 مليون جنيه إسترليني.",
    "bioEn": "Left-back born in Vrbas, Serbia, who plays for Hungary; he came through Rapid Wien's academy, played for Győr, AZ Alkmaar and Bournemouth, and joined Liverpool on 26 June 2025 for around £40 million.",
    "achievementsAr": [],
    "achievementsEn": [],
    "clubsHistoryAr": [
      "غيور",
      "ميلان",
      "إيه زد ألكمار",
      "بورنموث",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Győr",
      "AC Milan",
      "AZ Alkmaar",
      "Bournemouth",
      "Liverpool"
    ],
    "clubIds": [
      "ac-milan",
      "bournemouth",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Milos_Kerkez"
  },
  {
    "id": "jeremie-frimpong",
    "nameAr": "جيريمي فريمبونغ",
    "nameEn": "Jeremie Frimpong",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "ظهير أيمن / جناح أيمن",
      "en": "Right-back / Right wing-back"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "ظهير هولندي وُلد في أمستردام وتربى في مانشستر، تخرج من أكاديمية مانشستر سيتي ثم انضم إلى سيلتك عام 2019 وإلى باير ليفركوزن في يناير 2021، وانتقل إلى ليفربول في صيف 2025 مقابل نحو 29.5 مليون جنيه إسترليني.",
    "bioEn": "Dutch right-sided defender born in Amsterdam and raised in Manchester, who came through Manchester City's academy, joined Celtic in 2019 and Bayer Leverkusen in January 2021, and moved to Liverpool in summer 2025 for around £29.5 million.",
    "achievementsAr": [
      "الدوري الاسكتلندي الممتاز 2019-20 مع سيلتك",
      "كأس اسكتلندا وكأس الرابطة الاسكتلندية 2019-20 مع سيلتك",
      "الدوري الألماني 2023-24 مع باير ليفركوزن (الموسم بلا هزيمة)",
      "كأس ألمانيا 2023-24 مع باير ليفركوزن",
      "كأس السوبر الألماني 2024 مع باير ليفركوزن"
    ],
    "achievementsEn": [
      "Scottish Premiership 2019-20 with Celtic",
      "Scottish Cup and Scottish League Cup 2019-20 with Celtic",
      "Bundesliga 2023-24 with Bayer Leverkusen (unbeaten season)",
      "DFB-Pokal 2023-24 with Bayer Leverkusen",
      "DFL-Supercup 2024 with Bayer Leverkusen"
    ],
    "clubsHistoryAr": [
      "مانشستر سيتي (شباب)",
      "سيلتك",
      "باير ليفركوزن",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Manchester City (youth)",
      "Celtic",
      "Bayer Leverkusen",
      "Liverpool"
    ],
    "clubIds": [
      "celtic",
      "bayer-leverkusen",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jeremie_Frimpong"
  },
  {
    "id": "joe-gomez",
    "nameAr": "جو غوميز",
    "nameEn": "Joe Gomez",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "مدافع (قلب دفاع / ظهير)",
      "en": "Centre-back / Full-back"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "مدافع إنجليزي وُلد في كاتفورد بلندن، بدأ مع تشارلتون أثليتك وانضم إلى ليفربول في يونيو 2015 مقابل نحو 3.5 مليون جنيه إسترليني، وتعافى من إصابات خطيرة في الركبة ليصبح أحد أبطال حقبة يورغن كلوب.",
    "bioEn": "English defender born in Catford, London, who started at Charlton Athletic and joined Liverpool in June 2015 for around £3.5 million; after serious knee injuries he became a trophy winner throughout the Jürgen Klopp era.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2018-19",
      "كأس السوبر الأوروبي 2019",
      "كأس العالم للأندية 2019",
      "الدوري الإنجليزي الممتاز 2019-20 و2024-25",
      "كأس الاتحاد الإنجليزي 2021-22",
      "كأس الرابطة الإنجليزية 2021-22 و2023-24",
      "كأس الدرع الخيرية 2022",
      "بطولة أوروبا تحت 17 سنة 2014 مع إنجلترا"
    ],
    "achievementsEn": [
      "UEFA Champions League 2018-19",
      "UEFA Super Cup 2019",
      "FIFA Club World Cup 2019",
      "Premier League 2019-20 and 2024-25",
      "FA Cup 2021-22",
      "EFL Cup 2021-22 and 2023-24",
      "FA Community Shield 2022",
      "UEFA European Under-17 Championship 2014 with England"
    ],
    "clubsHistoryAr": [
      "تشارلتون أثليتك",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Charlton Athletic",
      "Liverpool"
    ],
    "clubIds": [
      "charlton-athletic",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Joe_Gomez"
  },
  {
    "id": "kostas-tsimikas",
    "nameAr": "كوستاس تسيميكاس",
    "nameEn": "Kostas Tsimikas",
    "nationalityAr": "يوناني",
    "nationalityEn": "Greek",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2015-الآن",
    "active": true,
    "bioAr": "ظهير أيسر يوناني من سالونيك، بدأ مع أولمبياكوس وأُعير إلى إسبييرغ وفيليم الثاني، وانضم إلى ليفربول في أغسطس 2020 مقابل نحو 11.75 مليون جنيه إسترليني، وسجّل ركلة الترجيح الحاسمة في نهائي كأس الاتحاد 2022، وأصبح أول يوناني يفوز بالدوري الإنجليزي الممتاز.",
    "bioEn": "Greek left-back from Thessaloniki who started at Olympiacos, was loaned to Esbjerg and Willem II, joined Liverpool in August 2020 for around £11.75 million, scored the winning penalty in the 2022 FA Cup final shoot-out, and became the first Greek to win the Premier League.",
    "achievementsAr": [
      "الدوري اليوناني الممتاز 2019-20 مع أولمبياكوس",
      "كأس الاتحاد الإنجليزي 2021-22 (سجّل ركلة الترجيح الحاسمة في النهائي)",
      "كأس الرابطة الإنجليزية 2021-22 و2023-24",
      "الدوري الإنجليزي الممتاز 2024-25 (أول يوناني يفوز به)"
    ],
    "achievementsEn": [
      "Super League Greece 2019-20 with Olympiacos",
      "FA Cup 2021-22 (scored the winning penalty in the final shoot-out)",
      "EFL Cup 2021-22 and 2023-24",
      "Premier League 2024-25 (first Greek to win it)"
    ],
    "clubsHistoryAr": [
      "أولمبياكوس",
      "إسبييرغ (إعارة)",
      "فيليم الثاني (إعارة)",
      "أولمبياكوس",
      "ليفربول",
      "روما (إعارة)",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Olympiacos",
      "Esbjerg (loan)",
      "Willem II (loan)",
      "Olympiacos",
      "Liverpool",
      "Roma (loan)",
      "Liverpool"
    ],
    "clubIds": [
      "liverpool",
      "roma"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kostas_Tsimikas"
  },
  {
    "id": "wataru-endo",
    "nameAr": "واتارو إندو",
    "nameEn": "Wataru Endo",
    "nationalityAr": "ياباني",
    "nationalityEn": "Japanese",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "لاعب وسط دفاعي / مدافع",
      "en": "Defensive midfielder / Centre-back"
    },
    "era": "",
    "active": true,
    "bioAr": "لاعب وسط ياباني وُلد في يوكوهاما، بدأ مع شونان بيلمار ثم لعب لأوراوا ريد دايموندز وسينت ترويدن وشتوتغارت، وانضم إلى ليفربول في أغسطس 2023 مقابل نحو 16 مليون جنيه إسترليني، ويقود منتخب اليابان كقائد منذ 2023.",
    "bioEn": "Japanese midfielder born in Yokohama who played for Shonan Bellmare, Urawa Red Diamonds, Sint-Truiden and VfB Stuttgart, joined Liverpool in August 2023 for around £16 million, and has captained Japan since 2023.",
    "achievementsAr": [
      "دوري الدرجة الثانية الياباني 2014 مع شونان بيلمار",
      "كأس الرابطة اليابانية 2016 مع أوراوا",
      "دوري أبطال آسيا 2017 مع أوراوا ريد دايموندز",
      "بطولة آسيا تحت 23 سنة 2016 مع اليابان",
      "وصيف كأس آسيا 2019 مع اليابان",
      "كأس الرابطة الإنجليزية 2023-24",
      "الدوري الإنجليزي الممتاز 2024-25"
    ],
    "achievementsEn": [
      "J2 League 2014 with Shonan Bellmare",
      "J.League Cup 2016 with Urawa Red Diamonds",
      "AFC Champions League 2017 with Urawa Red Diamonds",
      "AFC U-23 Championship 2016 with Japan",
      "AFC Asian Cup runner-up 2019 with Japan",
      "EFL Cup 2023-24",
      "Premier League 2024-25"
    ],
    "clubsHistoryAr": [
      "شونان بيلمار",
      "أوراوا ريد دايموندز",
      "سينت ترويدن",
      "شتوتغارت (إعارة)",
      "شتوتغارت",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Shonan Bellmare",
      "Urawa Red Diamonds",
      "Sint-Truiden",
      "VfB Stuttgart (loan)",
      "VfB Stuttgart",
      "Liverpool"
    ],
    "clubIds": [
      "vfb-stuttgart",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Wataru_Endo"
  },
  {
    "id": "ronald-araujo",
    "nameAr": "رونالد أراوخو",
    "nameEn": "Ronald Araújo",
    "nationalityAr": "أوروغوياني",
    "nationalityEn": "Uruguayan",
    "clubAr": "ليفربول (إعارة من برشلونة)",
    "clubEn": "Liverpool (on loan from Barcelona)",
    "clubId": "liverpool",
    "position": {
      "ar": "مدافع (قلب دفاع / ظهير أيمن)",
      "en": "Centre-back / Right-back"
    },
    "era": "",
    "active": true,
    "bioAr": "مدافع أوروغوياني وُلد في ريفيرا، بدأ مع بوستون ريفر وانضم إلى برشلونة في أغسطس 2018، وأصبح قائد الفريق في يناير 2026، وانتقل إلى ليفربول معاراً لموسم 2026-27 في 10 أغسطس 2026 مع خيار الشراء.",
    "bioEn": "Uruguayan defender born in Rivera who started at Boston River, joined Barcelona in August 2018, became a club captain in January 2026, and moved to Liverpool on 10 August 2026 on a season-long loan for 2026-27 with an option to buy.",
    "achievementsAr": [
      "الدوري الإسباني 2022-23 و2024-25 و2025-26 مع برشلونة",
      "كأس ملك إسبانيا 2020-21 و2024-25 مع برشلونة",
      "كأس السوبر الإسباني 2023 و2025 و2026 مع برشلونة",
      "المركز الثالث في كوبا أمريكا 2024 مع أوروغواي"
    ],
    "achievementsEn": [
      "La Liga 2022-23, 2024-25 and 2025-26 with Barcelona",
      "Copa del Rey 2020-21 and 2024-25 with Barcelona",
      "Supercopa de España 2023, 2025 and 2026 with Barcelona",
      "Third place at the 2024 Copa América with Uruguay"
    ],
    "clubsHistoryAr": [
      "بوستون ريفر",
      "برشلونة",
      "ليفربول (إعارة)"
    ],
    "clubsHistoryEn": [
      "Boston River",
      "Barcelona",
      "Liverpool (loan)"
    ],
    "clubIds": [
      "barcelona",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Ronald_Ara%C3%BAjo"
  },
  {
    "id": "victor-munoz",
    "nameAr": "فيكتور مونيوز",
    "nameEn": "Víctor Muñoz",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "ليفربول",
    "clubEn": "Liverpool",
    "clubId": "liverpool",
    "position": {
      "ar": "جناح أيسر / مهاجم",
      "en": "Left winger / Forward"
    },
    "era": "2023-الآن",
    "active": true,
    "bioAr": "جناح إسباني وُلد في برشلونة عام 2003، تخرج من أكاديمية ريال مدريد ولعب لفريق كاستيا ثم لأوساسونا موسم 2025-26، وسجل في أول مباراة دولية له مع إسبانيا في مارس 2026، وانضم إلى ليفربول في 1 يوليو 2026 مقابل نحو 34.5 مليون جنيه إسترليني.",
    "bioEn": "Spanish winger born in Barcelona in 2003 who came through Real Madrid's academy, played for Castilla and then Osasuna in 2025-26, scored on his Spain debut in March 2026, and joined Liverpool on 1 July 2026 for around £34.5 million.",
    "achievementsAr": [
      "كأس العالم 2026 مع إسبانيا (ضمن التشكيلة)",
      "كأس ملك الشباب 2021-22 مع ريال مدريد"
    ],
    "achievementsEn": [
      "2026 FIFA World Cup with Spain (squad member)",
      "Copa del Rey Juvenil 2021-22 with Real Madrid U19"
    ],
    "clubsHistoryAr": [
      "ريال مدريد (شباب وكاستيا)",
      "أوساسونا",
      "ليفربول"
    ],
    "clubsHistoryEn": [
      "Real Madrid (youth and Castilla)",
      "Osasuna",
      "Liverpool"
    ],
    "clubIds": [
      "real-madrid",
      "osasuna",
      "liverpool"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/V%C3%ADctor_Mu%C3%B1oz_(footballer,_born_2003)"
  },
  {
    "id": "andy-robertson",
    "nameAr": "آندي روبرتسون",
    "nameEn": "Andy Robertson",
    "nationalityAr": "اسكتلندي",
    "nationalityEn": "Scottish",
    "clubAr": "توتنهام هوتسبير",
    "clubEn": "Tottenham Hotspur",
    "clubId": "tottenham",
    "position": {
      "ar": "ظهير أيسر",
      "en": "Left-back"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "ظهير أيسر اسكتلندي من غلاسكو، بدأ مع كوينز بارك ثم دندي يونايتد وهال سيتي، وانضم إلى ليفربول في يوليو 2017 وبقي تسع سنوات، ثم انتقل حراً إلى توتنهام في 1 يوليو 2026، ويقود منتخب اسكتلندا.",
    "bioEn": "Scottish left-back from Glasgow who played for Queen's Park, Dundee United and Hull City, joined Liverpool in July 2017 and stayed nine years before moving to Tottenham Hotspur on a free transfer on 1 July 2026; he captains Scotland.",
    "achievementsAr": [
      "دوري أبطال أوروبا 2018-19",
      "كأس السوبر الأوروبي وكأس العالم للأندية 2019",
      "الدوري الإنجليزي الممتاز 2019-20 و2024-25",
      "كأس الاتحاد الإنجليزي وكأس الرابطة الإنجليزية 2021-22",
      "كأس الرابطة الإنجليزية 2023-24",
      "كأس الدرع الخيرية 2022",
      "وسام الإمبراطورية البريطانية (MBE) عام 2023"
    ],
    "achievementsEn": [
      "UEFA Champions League 2018-19",
      "UEFA Super Cup and FIFA Club World Cup 2019",
      "Premier League 2019-20 and 2024-25",
      "FA Cup and EFL Cup 2021-22",
      "EFL Cup 2023-24",
      "FA Community Shield 2022",
      "MBE in 2023"
    ],
    "clubsHistoryAr": [
      "كوينز بارك",
      "دندي يونايتد",
      "هال سيتي",
      "ليفربول",
      "توتنهام هوتسبير"
    ],
    "clubsHistoryEn": [
      "Queen's Park",
      "Dundee United",
      "Hull City",
      "Liverpool",
      "Tottenham Hotspur"
    ],
    "clubIds": [
      "liverpool",
      "tottenham"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Andy_Robertson"
  },
  {
    "id": "curtis-jones",
    "nameAr": "كورتيس جونز",
    "nameEn": "Curtis Jones",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "إنتر ميلان",
    "clubEn": "Inter Milan",
    "clubId": "inter-milan",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "لاعب وسط إنجليزي وُلد في ليفربول وانضم إلى أكاديمية النادي في التاسعة من عمره، ظهر لأول مرة مع الفريق الأول في يناير 2019، وانتقل إلى إنتر ميلان في 21 أغسطس 2026 بعقد حتى 2031.",
    "bioEn": "English midfielder born in Liverpool who joined the club's academy aged nine, made his first-team debut in January 2019 and moved to Inter Milan on 21 August 2026 on a contract until 2031.",
    "achievementsAr": [
      "الدوري الإنجليزي الممتاز 2019-20 و2024-25",
      "كأس العالم للأندية 2019",
      "كأس الاتحاد الإنجليزي 2021-22",
      "كأس الرابطة الإنجليزية 2021-22 و2023-24",
      "كأس الدرع الخيرية 2022",
      "بطولة أوروبا تحت 21 سنة 2023 مع إنجلترا (وضمن تشكيلة البطولة)"
    ],
    "achievementsEn": [
      "Premier League 2019-20 and 2024-25",
      "FIFA Club World Cup 2019",
      "FA Cup 2021-22",
      "EFL Cup 2021-22 and 2023-24",
      "FA Community Shield 2022",
      "UEFA European Under-21 Championship 2023 with England (Team of the Tournament)"
    ],
    "clubsHistoryAr": [
      "ليفربول",
      "إنتر ميلان"
    ],
    "clubsHistoryEn": [
      "Liverpool",
      "Inter Milan"
    ],
    "clubIds": [
      "liverpool",
      "inter-milan"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Curtis_Jones_(footballer,_born_2001)"
  },
  {
    "id": "matheus-cunha",
    "nameAr": "ماتيوس كونيا",
    "nameEn": "Matheus Cunha",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "مانشستر يونايتد",
    "clubEn": "Manchester United",
    "clubId": "manchester-united",
    "position": {
      "ar": "مهاجم / صانع ألعاب / جناح",
      "en": "Forward / Attacking midfielder / Winger"
    },
    "era": "",
    "active": true,
    "bioAr": "مهاجم برازيلي وُلد في جواو بيسوا، بدأ مع كوريتيبا ثم انتقل إلى سيون السويسري في سن 18، ولعب لآر بي لايبزيغ وهيرتا برلين وأتلتيكو مدريد ووولفرهامبتون، وانضم إلى مانشستر يونايتد في 1 يونيو 2025 بتفعيل بند الشراء البالغ 62.5 مليون جنيه إسترليني.",
    "bioEn": "Brazilian forward born in João Pessoa who started at Coritiba, moved to Sion in Switzerland aged 18, played for RB Leipzig, Hertha BSC, Atlético Madrid and Wolverhampton Wanderers, and joined Manchester United on 1 June 2025 by triggering his £62.5 million release clause.",
    "achievementsAr": [
      "الميدالية الذهبية الأولمبية 2020 مع منتخب البرازيل الأولمبي",
      "أفضل لاعب في وولفرهامبتون موسم 2024-25"
    ],
    "achievementsEn": [
      "2020 Olympic gold medal with Brazil's U-23 team",
      "Wolverhampton Wanderers Player of the Year 2024-25"
    ],
    "clubsHistoryAr": [
      "كوريتيبا",
      "سيون",
      "آر بي لايبزيغ",
      "هيرتا برلين",
      "أتلتيكو مدريد",
      "وولفرهامبتون (إعارة)",
      "وولفرهامبتون",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Coritiba",
      "Sion",
      "RB Leipzig",
      "Hertha BSC",
      "Atlético Madrid",
      "Wolverhampton Wanderers (loan)",
      "Wolverhampton Wanderers",
      "Manchester United"
    ],
    "clubIds": [
      "rb-leipzig",
      "hertha-berlin",
      "atletico-madrid",
      "wolverhampton-wanderers",
      "manchester-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Matheus_Cunha"
  },
  {
    "id": "lisandro-martinez",
    "nameAr": "ليساندرو مارتينيز",
    "nameEn": "Lisandro Martínez",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "مانشستر يونايتد",
    "clubEn": "Manchester United",
    "clubId": "manchester-united",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "",
    "active": true,
    "bioAr": "مدافع أرجنتيني وُلد في غواليغواي ولقبه \"الجزار\"، بدأ مع نيويلز أولد بويز ثم ديفينسا إي خوستيسيا وأياكس، وانضم إلى مانشستر يونايتد في يوليو 2022، وشارك مع الأرجنتين في فوزها بكأس العالم 2022 ووصولها إلى نهائي 2026.",
    "bioEn": "Argentine defender born in Gualeguay nicknamed \"the Butcher\", who played for Newell's Old Boys, Defensa y Justicia and Ajax before joining Manchester United in July 2022; he was in Argentina's 2022 World Cup-winning squad and their 2026 World Cup finalists.",
    "achievementsAr": [
      "الدوري الهولندي 2020-21 و2021-22 مع أياكس",
      "كأس هولندا 2020-21 مع أياكس",
      "أفضل لاعب في أياكس 2021-22",
      "كأس الرابطة الإنجليزية 2022-23 مع مانشستر يونايتد",
      "كأس الاتحاد الإنجليزي 2023-24 مع مانشستر يونايتد",
      "كوبا أمريكا 2021 و2024 مع الأرجنتين",
      "كأس فيناليسيما 2022 مع الأرجنتين",
      "كأس العالم 2022 مع الأرجنتين",
      "وصيف كأس العالم 2026 مع الأرجنتين"
    ],
    "achievementsEn": [
      "Eredivisie 2020-21 and 2021-22 with Ajax",
      "KNVB Cup 2020-21 with Ajax",
      "Ajax Player of the Year 2021-22",
      "EFL Cup 2022-23 with Manchester United",
      "FA Cup 2023-24 with Manchester United",
      "Copa América 2021 and 2024 with Argentina",
      "2022 Finalissima with Argentina",
      "2022 FIFA World Cup with Argentina",
      "2026 FIFA World Cup runner-up with Argentina"
    ],
    "clubsHistoryAr": [
      "نيويلز أولد بويز",
      "ديفينسا إي خوستيسيا",
      "أياكس",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Newell's Old Boys",
      "Defensa y Justicia",
      "Ajax",
      "Manchester United"
    ],
    "clubIds": [
      "ajax",
      "manchester-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Lisandro_Mart%C3%ADnez"
  },
  {
    "id": "kobbie-mainoo",
    "nameAr": "كوبي ماينو",
    "nameEn": "Kobbie Mainoo",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "مانشستر يونايتد",
    "clubEn": "Manchester United",
    "clubId": "manchester-united",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "لاعب وسط إنجليزي وُلد في ستوكبورت لأبوين من غانا، تخرج من أكاديمية مانشستر يونايتد وظهر لأول مرة مع الفريق الأول في يناير 2023، وسجّل هدف الفوز في نهائي كأس الاتحاد الإنجليزي 2024 على مانشستر سيتي.",
    "bioEn": "English midfielder born in Stockport to Ghanaian parents who came through Manchester United's academy, made his first-team debut in January 2023 and scored the winning goal in the 2024 FA Cup final against Manchester City.",
    "achievementsAr": [
      "كأس الشباب الإنجليزي 2021-22 مع مانشستر يونايتد",
      "جائزة جيمي مورفي لأفضل لاعب شاب في النادي 2023",
      "كأس الاتحاد الإنجليزي 2023-24 (سجّل هدف الفوز في النهائي)",
      "وصيف بطولة أوروبا 2024 مع إنجلترا",
      "ضمن تشكيلة إنجلترا في كأس العالم 2026"
    ],
    "achievementsEn": [
      "FA Youth Cup 2021-22 with Manchester United",
      "Jimmy Murphy Young Player of the Year 2023",
      "FA Cup 2023-24 (scored the winner in the final)",
      "UEFA Euro 2024 runner-up with England",
      "In England's 2026 World Cup squad"
    ],
    "clubsHistoryAr": [
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Manchester United"
    ],
    "clubIds": [
      "manchester-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kobbie_Mainoo"
  },
  {
    "id": "diogo-dalot",
    "nameAr": "ديوغو دالوت",
    "nameEn": "Diogo Dalot",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "مانشستر يونايتد",
    "clubEn": "Manchester United",
    "clubId": "manchester-united",
    "position": {
      "ar": "ظهير أيمن / ظهير جناح",
      "en": "Right-back / Wing-back"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "ظهير برتغالي من براغا، تخرج من أكاديمية بورتو وانضم إلى مانشستر يونايتد في 6 يونيو 2018 مقابل نحو 19 مليون جنيه إسترليني، وأُعير إلى ميلان قبل أن يعود ليصبح أساسياً.",
    "bioEn": "Portuguese full-back from Braga who came through Porto's academy, joined Manchester United on 6 June 2018 for around £19 million, and was loaned to Milan before returning to become a regular.",
    "achievementsAr": [
      "الدوري البرتغالي 2017-18 مع بورتو",
      "كأس الرابطة الإنجليزية 2022-23 مع مانشستر يونايتد",
      "كأس الاتحاد الإنجليزي 2023-24 مع مانشستر يونايتد",
      "دوري الأمم الأوروبية 2024-25 مع البرتغال",
      "بطولة أوروبا تحت 17 سنة 2016 مع البرتغال"
    ],
    "achievementsEn": [
      "Primeira Liga 2017-18 with Porto",
      "EFL Cup 2022-23 with Manchester United",
      "FA Cup 2023-24 with Manchester United",
      "UEFA Nations League 2024-25 with Portugal",
      "UEFA European Under-17 Championship 2016 with Portugal"
    ],
    "clubsHistoryAr": [
      "بورتو",
      "مانشستر يونايتد",
      "ميلان (إعارة)",
      "مانشستر يونايتد"
    ],
    "clubsHistoryEn": [
      "Porto",
      "Manchester United",
      "Milan (loan)",
      "Manchester United"
    ],
    "clubIds": [
      "porto",
      "manchester-united",
      "ac-milan"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Diogo_Dalot"
  },
  {
    "id": "joelinton",
    "nameAr": "جويلينتون",
    "nameEn": "Joelinton",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "نيوكاسل يونايتد",
    "clubEn": "Newcastle United",
    "clubId": "newcastle-united",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2013-الآن",
    "active": true,
    "bioAr": "لاعب وسط برازيلي وُلد في أليانسا، بدأ مع سبورت ريسيفي ثم هوفنهايم وأُعير إلى رابيد فيينا، وانضم إلى نيوكاسل يونايتد في 2019 في صفقة قياسية للنادي بلغت نحو 40 مليون جنيه إسترليني، وحوّله إيدي هاو من مهاجم إلى لاعب وسط.",
    "bioEn": "Brazilian midfielder born in Aliança who started at Sport Recife, joined Hoffenheim and was loaned to Rapid Wien, then signed for Newcastle United in 2019 for a then club-record fee of around £40 million; Eddie Howe converted him from a striker into a midfielder.",
    "achievementsAr": [
      "كأس شمال شرق البرازيل 2014 مع سبورت ريسيفي",
      "بطولة ولاية بيرنامبوكو 2014 مع سبورت ريسيفي",
      "كأس الرابطة الإنجليزية 2024-25 مع نيوكاسل يونايتد"
    ],
    "achievementsEn": [
      "Copa do Nordeste 2014 with Sport Recife",
      "Campeonato Pernambucano 2014 with Sport Recife",
      "EFL Cup 2024-25 with Newcastle United"
    ],
    "clubsHistoryAr": [
      "سبورت ريسيفي",
      "هوفنهايم",
      "رابيد فيينا (إعارة)",
      "نيوكاسل يونايتد"
    ],
    "clubsHistoryEn": [
      "Sport Recife",
      "Hoffenheim",
      "Rapid Wien (loan)",
      "Newcastle United"
    ],
    "clubIds": [
      "hoffenheim",
      "newcastle-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Joelinton"
  },
  {
    "id": "nick-woltemade",
    "nameAr": "نيك فولتيمادي",
    "nameEn": "Nick Woltemade",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "يوفنتوس (إعارة من نيوكاسل يونايتد)",
    "clubEn": "Juventus (on loan from Newcastle United)",
    "clubId": "juventus",
    "position": {
      "ar": "مهاجم / صانع ألعاب",
      "en": "Forward / Attacking midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "مهاجم ألماني وُلد في بريمن، تخرج من أكاديمية فيردر بريمن وأصبح أصغر لاعب يشارك في الدوري الألماني مع النادي (17 سنة و11 شهراً)، ثم لعب لشتوتغارت وانضم إلى نيوكاسل يونايتد في أغسطس 2025 في صفقة قياسية للنادي، وهو حالياً معار إلى يوفنتوس.",
    "bioEn": "German forward born in Bremen who came through Werder Bremen's academy and became the club's youngest Bundesliga player (aged 17 years 11 months), played for VfB Stuttgart and joined Newcastle United in August 2025 in a club-record deal; he is currently on loan at Juventus.",
    "achievementsAr": [
      "الصعود إلى الدوري الألماني الثاني 2022-23 مع إلفرسبيرغ (إعارة)",
      "كأس ألمانيا 2024-25 مع شتوتغارت",
      "هداف بطولة أوروبا تحت 21 سنة 2025 مع ألمانيا"
    ],
    "achievementsEn": [
      "Promotion to 2. Bundesliga 2022-23 with Elversberg (loan)",
      "DFB-Pokal 2024-25 with VfB Stuttgart",
      "Top scorer at the 2025 UEFA European Under-21 Championship with Germany"
    ],
    "clubsHistoryAr": [
      "فيردر بريمن",
      "إلفرسبيرغ (إعارة)",
      "فيردر بريمن",
      "شتوتغارت",
      "نيوكاسل يونايتد",
      "يوفنتوس (إعارة)"
    ],
    "clubsHistoryEn": [
      "Werder Bremen",
      "Elversberg (loan)",
      "Werder Bremen",
      "VfB Stuttgart",
      "Newcastle United",
      "Juventus (loan)"
    ],
    "clubIds": [
      "werder-bremen",
      "vfb-stuttgart",
      "newcastle-united",
      "juventus"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Nick_Woltemade"
  },
  {
    "id": "james-tarkowski",
    "nameAr": "جيمس تاركوفسكي",
    "nameEn": "James Tarkowski",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "إيفرتون",
    "clubEn": "Everton",
    "clubId": "everton",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "2009-الآن",
    "active": true,
    "bioAr": "مدافع إنجليزي وُلد في مانشستر من أصول بولندية، بدأ مسيرته مع أولدهام أثليتك ثم لعب لبرينتفورد وبيرنلي، وانضم إلى إيفرتون حراً في يوليو 2022 وأصبح قائد الفريق، وخاض مباراتين دوليتين مع إنجلترا في 2018. يتصدر مدافعي لعبة الفانتازي في بداية موسم 2026-27.",
    "bioEn": "English defender born in Manchester of Polish descent who began at Oldham Athletic, played for Brentford and Burnley, joined Everton on a free transfer in July 2022 and is now the club captain; he won two caps for England in 2018. He tops the Fantasy Premier League defender standings early in 2026-27.",
    "achievementsAr": [
      "الصعود إلى التشامبيونشيب 2013-14 مع برينتفورد",
      "بطولة التشامبيونشيب 2015-16 مع بيرنلي",
      "قائد إيفرتون"
    ],
    "achievementsEn": [
      "Promotion to the Championship in 2013-14 with Brentford",
      "EFL Championship title 2015-16 with Burnley",
      "Everton club captain"
    ],
    "clubsHistoryAr": [
      "أولدهام أثليتك",
      "برينتفورد",
      "بيرنلي",
      "إيفرتون"
    ],
    "clubsHistoryEn": [
      "Oldham Athletic",
      "Brentford",
      "Burnley",
      "Everton"
    ],
    "clubIds": [
      "brentford",
      "burnley",
      "everton"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/James_Tarkowski"
  },
  {
    "id": "pascal-gross",
    "nameAr": "باسكال غروس",
    "nameEn": "Pascal Groß",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "برايتون",
    "clubEn": "Brighton & Hove Albion",
    "clubId": "brighton-hove-albion",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "",
    "active": true,
    "bioAr": "لاعب وسط ألماني وُلد في مانهايم، بدأ مع هوفنهايم وكارلسروه ثم إنغولشتات الذي قاده للصعود إلى الدوري الألماني 2014-15، وانضم إلى برايتون عام 2017، ثم انتقل إلى بوروسيا دورتموند في 2024 قبل أن يعود إلى برايتون في 2 يناير 2026. ظهر لأول مرة مع منتخب ألمانيا في سبتمبر 2023 وشارك في يورو 2024.",
    "bioEn": "German midfielder born in Mannheim who started at Hoffenheim and Karlsruher SC, then helped Ingolstadt win promotion to the Bundesliga in 2014-15, joined Brighton in 2017, moved to Borussia Dortmund in 2024 and returned to Brighton on 2 January 2026. He made his Germany debut in September 2023 and played at Euro 2024.",
    "achievementsAr": [
      "الصعود إلى الدوري الألماني 2014-15 مع إنغولشتات",
      "أفضل لاعب في برايتون موسم 2017-18",
      "المشاركة مع ألمانيا في كأس أمم أوروبا 2024"
    ],
    "achievementsEn": [
      "Promotion to the Bundesliga in 2014-15 with Ingolstadt",
      "Brighton Player of the Season 2017-18",
      "Played for Germany at UEFA Euro 2024"
    ],
    "clubsHistoryAr": [
      "هوفنهايم",
      "كارلسروه",
      "إنغولشتات",
      "برايتون",
      "بوروسيا دورتموند",
      "برايتون"
    ],
    "clubsHistoryEn": [
      "Hoffenheim",
      "Karlsruher SC",
      "FC Ingolstadt",
      "Brighton & Hove Albion",
      "Borussia Dortmund",
      "Brighton & Hove Albion"
    ],
    "clubIds": [
      "hoffenheim",
      "karlsruher-sc",
      "brighton-hove-albion",
      "borussia-dortmund"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pascal_Gro%C3%9F"
  },
  {
    "id": "maxim-de-cuyper",
    "nameAr": "ماكسيم دي كيبر",
    "nameEn": "Maxim De Cuyper",
    "nationalityAr": "بلجيكي",
    "nationalityEn": "Belgian",
    "clubAr": "برايتون",
    "clubEn": "Brighton & Hove Albion",
    "clubId": "brighton-hove-albion",
    "position": {
      "ar": "ظهير أيسر / جناح أيسر",
      "en": "Left-back / Left midfielder"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "ظهير بلجيكي وُلد في 22 ديسمبر 2000، تخرج من أكاديمية كلوب بروج وظهر لأول مرة مع الفريق الأول في فبراير 2020، وأُعير إلى فيسترلو لموسمين وصعد معه إلى الدوري البلجيكي الممتاز، ثم انضم إلى برايتون في 5 يوليو 2025 بعقد لخمس سنوات.",
    "bioEn": "Belgian full-back born on 22 December 2000 who came through Club Brugge's academy, made his first-team debut in February 2020, spent two seasons on loan at Westerlo (winning promotion to the Belgian top flight), and joined Brighton on 5 July 2025 on a five-year contract.",
    "achievementsAr": [
      "الصعود إلى الدوري البلجيكي الممتاز 2021-22 مع فيسترلو (إعارة)",
      "الدوري البلجيكي 2023-24 مع كلوب بروج",
      "كأس بلجيكا 2024-25 مع كلوب بروج"
    ],
    "achievementsEn": [
      "Promotion to the Belgian top flight in 2021-22 with Westerlo (loan)",
      "Belgian Pro League 2023-24 with Club Brugge",
      "Belgian Cup 2024-25 with Club Brugge"
    ],
    "clubsHistoryAr": [
      "كلوب بروج",
      "فيسترلو (إعارة)",
      "كلوب بروج",
      "برايتون"
    ],
    "clubsHistoryEn": [
      "Club Brugge",
      "Westerlo (loan)",
      "Club Brugge",
      "Brighton & Hove Albion"
    ],
    "clubIds": [
      "club-brugge",
      "brighton-hove-albion"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Maxim_De_Cuyper"
  },
  {
    "id": "kevin-schade",
    "nameAr": "كيفن شادي",
    "nameEn": "Kevin Schade",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "برينتفورد",
    "clubEn": "Brentford",
    "clubId": "brentford",
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "جناح ألماني وُلد في بوتسدام في 27 نوفمبر 2001، تدرج في أكاديمية فرايبورغ وانضم إلى برينتفورد معاراً في يناير 2023 ثم بشكل دائم في صفقة قياسية للنادي، وكان أول لاعب من برينتفورد يمثل منتخب ألمانيا الأول. سجّل 11 هدفاً في الدوري الإنجليزي موسم 2024-25.",
    "bioEn": "German winger born in Potsdam on 27 November 2001 who came through Freiburg's academy, joined Brentford on loan in January 2023 and permanently in a club-record deal, becoming the first Brentford player capped by Germany. He scored 11 Premier League goals in 2024-25.",
    "achievementsAr": [
      "أول لاعب من برينتفورد يشارك مع منتخب ألمانيا الأول"
    ],
    "achievementsEn": [
      "First Brentford player to be capped by Germany"
    ],
    "clubsHistoryAr": [
      "فرايبورغ",
      "برينتفورد (إعارة)",
      "برينتفورد"
    ],
    "clubsHistoryEn": [
      "SC Freiburg",
      "Brentford (loan)",
      "Brentford"
    ],
    "clubIds": [
      "freiburg",
      "brentford"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kevin_Schade"
  },
  {
    "id": "jayden-bogle",
    "nameAr": "جايدن بوغل",
    "nameEn": "Jayden Bogle",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "ليدز يونايتد",
    "clubEn": "Leeds United",
    "clubId": "leeds-united",
    "position": {
      "ar": "ظهير أيمن / ظهير جناح",
      "en": "Right-back / Right wing-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "ظهير إنجليزي وُلد في 27 يوليو 2000، تخرج من أكاديمية ديربي كاونتي وانضم إلى شيفيلد يونايتد في سبتمبر 2020 ثم إلى ليدز يونايتد في 20 يوليو 2024 بعقد لأربع سنوات، وسجّل 6 أهداف وصنع 4 في موسم صعود ليدز 2024-25.",
    "bioEn": "English right-back born on 27 July 2000 who came through Derby County's academy, joined Sheffield United in September 2020 and Leeds United on 20 July 2024 on a four-year contract, scoring 6 goals and providing 4 assists in Leeds' 2024-25 promotion season.",
    "achievementsAr": [
      "أفضل لاعب شاب في ديربي كاونتي 2018-19",
      "الصعود إلى الدوري الممتاز 2022-23 مع شيفيلد يونايتد",
      "بطولة التشامبيونشيب 2024-25 مع ليدز يونايتد (100 نقطة)"
    ],
    "achievementsEn": [
      "Derby County Young Player of the Season 2018-19",
      "Promotion to the Premier League in 2022-23 with Sheffield United",
      "EFL Championship title 2024-25 with Leeds United (100 points)"
    ],
    "clubsHistoryAr": [
      "ديربي كاونتي",
      "شيفيلد يونايتد",
      "ليدز يونايتد"
    ],
    "clubsHistoryEn": [
      "Derby County",
      "Sheffield United",
      "Leeds United"
    ],
    "clubIds": [
      "derby-county",
      "sheffield-united",
      "leeds-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jayden_Bogle"
  },
  {
    "id": "konstantinos-tzolakis",
    "nameAr": "كونستانتينوس تزولاكيس",
    "nameEn": "Konstantinos Tzolakis",
    "nationalityAr": "يوناني",
    "nationalityEn": "Greek",
    "clubAr": "هال سيتي",
    "clubEn": "Hull City",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "حارس مرمى يوناني وُلد في خانيا في 8 نوفمبر 2002، تخرج من أكاديمية أولمبياكوس وظهر لأول مرة مع الفريق الأول في مارس 2020، وانضم إلى هال سيتي في 5 أغسطس 2026 بعقد حتى 2031 مقابل نحو 20 مليون جنيه إسترليني، في أغلى صفقة في تاريخ النادي.",
    "bioEn": "Greek goalkeeper born in Chania on 8 November 2002 who came through Olympiacos' academy, made his first-team debut in March 2020 and joined Hull City on 5 August 2026 on a contract to 2031 for around £20 million, the biggest signing in the club's history.",
    "achievementsAr": [
      "الدوري اليوناني الممتاز أربع مرات مع أولمبياكوس",
      "كأس اليونان وكأس السوبر اليوناني مع أولمبياكوس",
      "دوري المؤتمر الأوروبي 2023-24 مع أولمبياكوس (صدّ ثلاث ركلات ترجيح أمام فنربخشة)",
      "أفضل لاعب وأفضل حارس في الدوري اليوناني 2024-25"
    ],
    "achievementsEn": [
      "Four Super League Greece titles with Olympiacos",
      "Greek Cup and Greek Super Cup with Olympiacos",
      "UEFA Conference League 2023-24 with Olympiacos (saved three penalties against Fenerbahçe)",
      "Super League Greece Player and Goalkeeper of the Season 2024-25"
    ],
    "clubsHistoryAr": [
      "أولمبياكوس",
      "هال سيتي"
    ],
    "clubsHistoryEn": [
      "Olympiacos",
      "Hull City"
    ],
    "clubIds": [],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Konstantinos_Tzolakis"
  },
  {
    "id": "lewis-hall",
    "nameAr": "لويس هول",
    "nameEn": "Lewis Hall",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "نيوكاسل يونايتد",
    "clubEn": "Newcastle United",
    "clubId": "newcastle-united",
    "position": {
      "ar": "ظهير أيسر / لاعب وسط",
      "en": "Left-back / Midfielder"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "ظهير إنجليزي وُلد في سلاو في 8 سبتمبر 2004، تخرج من أكاديمية تشيلسي وأصبح عام 2022 أصغر لاعب يشارك أساسياً في كأس الاتحاد مع النادي، ثم انضم إلى نيوكاسل معاراً في 2023 وبشكل دائم في 2024، وظهر لأول مرة مع منتخب إنجلترا في 14 نوفمبر 2024.",
    "bioEn": "English left-back born in Slough on 8 September 2004 who came through Chelsea's academy, became the club's youngest FA Cup starter in 2022, joined Newcastle on loan in 2023 and permanently in 2024, and made his England debut on 14 November 2024.",
    "achievementsAr": [
      "كأس الرابطة الإنجليزية 2024-25 مع نيوكاسل يونايتد"
    ],
    "achievementsEn": [
      "EFL Cup 2024-25 with Newcastle United"
    ],
    "clubsHistoryAr": [
      "تشيلسي",
      "نيوكاسل يونايتد (إعارة)",
      "نيوكاسل يونايتد"
    ],
    "clubsHistoryEn": [
      "Chelsea",
      "Newcastle United (loan)",
      "Newcastle United"
    ],
    "clubIds": [
      "chelsea",
      "newcastle-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Lewis_Hall_(footballer)"
  },
  {
    "id": "pedro-porro",
    "nameAr": "بيدرو بورو",
    "nameEn": "Pedro Porro",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "توتنهام هوتسبير",
    "clubEn": "Tottenham Hotspur",
    "clubId": "tottenham",
    "position": {
      "ar": "ظهير أيمن / ظهير جناح",
      "en": "Right-back / Right wing-back"
    },
    "era": "2017-الآن",
    "active": true,
    "bioAr": "ظهير إسباني وُلد في دون بينيتو في 13 سبتمبر 1999، بدأ مع بيرالادا ثم جيرونا، وانضم إلى مانشستر سيتي عام 2019 وأُعير إلى بلد الوليد وسبورتينغ لشبونة الذي ضمّه نهائياً، ثم انتقل إلى توتنهام في يناير 2023 معاراً قبل أن يصبح انتقاله دائماً صيف 2023.",
    "bioEn": "Spanish full-back born in Don Benito on 13 September 1999 who started at Peralada and Girona, signed for Manchester City in 2019 and was loaned to Real Valladolid and Sporting CP (who signed him permanently), then joined Tottenham Hotspur on loan in January 2023 with the move made permanent in summer 2023.",
    "achievementsAr": [
      "الدوري البرتغالي وكأس الرابطة البرتغالية 2020-21 مع سبورتينغ لشبونة",
      "ضمن التشكيلة المثالية للدوري البرتغالي",
      "الدوري الأوروبي 2024-25 مع توتنهام",
      "وصيف دوري الأمم الأوروبية 2020-21 مع إسبانيا",
      "دوري الأمم الأوروبية 2024-25 مع إسبانيا",
      "كأس العالم 2026 مع إسبانيا"
    ],
    "achievementsEn": [
      "Primeira Liga and Taça da Liga 2020-21 with Sporting CP",
      "Primeira Liga Team of the Year",
      "UEFA Europa League 2024-25 with Tottenham Hotspur",
      "UEFA Nations League 2020-21 runner-up with Spain",
      "UEFA Nations League 2024-25 with Spain",
      "2026 FIFA World Cup with Spain"
    ],
    "clubsHistoryAr": [
      "بيرالادا",
      "جيرونا",
      "مانشستر سيتي",
      "بلد الوليد (إعارة)",
      "سبورتينغ لشبونة (إعارة)",
      "سبورتينغ لشبونة",
      "توتنهام هوتسبير (إعارة)",
      "توتنهام هوتسبير"
    ],
    "clubsHistoryEn": [
      "Peralada",
      "Girona",
      "Manchester City",
      "Real Valladolid (loan)",
      "Sporting CP (loan)",
      "Sporting CP",
      "Tottenham Hotspur (loan)",
      "Tottenham Hotspur"
    ],
    "clubIds": [
      "girona",
      "manchester-city",
      "real-valladolid",
      "sporting-cp",
      "tottenham"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pedro_Porro"
  },
  {
    "id": "thierno-barry",
    "nameAr": "ثييرنو باري",
    "nameEn": "Thierno Barry",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "إيفرتون",
    "clubEn": "Everton",
    "clubId": "everton",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "مهاجم فرنسي وُلد في ليون في 21 أكتوبر 2002 ويحق له تمثيل غينيا أيضاً، لعب لتولون وسوشو وبيفيرن البلجيكي وبازل السويسري وفياريال، وانضم إلى إيفرتون في 9 يوليو 2025 بعقد لأربع سنوات مقابل نحو 27.5 مليون جنيه إسترليني.",
    "bioEn": "French striker born in Lyon on 21 October 2002 who is also eligible for Guinea, played for Toulon, Sochaux, Beveren, Basel and Villarreal, and joined Everton on 9 July 2025 on a four-year deal for around £27.5 million.",
    "achievementsAr": [
      "هداف الدرجة الثانية البلجيكية 2022-23 مع بيفيرن",
      "الدوري السويسري 2024-25 مع بازل (ضمن التشكيلة)",
      "شارك مع فرنسا في بطولة أوروبا تحت 21 سنة 2025"
    ],
    "achievementsEn": [
      "Belgian second-tier top scorer 2022-23 with Beveren",
      "Swiss Super League 2024-25 with Basel (squad member)",
      "Played for France at the 2025 UEFA European Under-21 Championship"
    ],
    "clubsHistoryAr": [
      "تولون",
      "سوشو",
      "بيفيرن",
      "بازل",
      "فياريال",
      "إيفرتون"
    ],
    "clubsHistoryEn": [
      "Toulon",
      "Sochaux",
      "Beveren",
      "Basel",
      "Villarreal",
      "Everton"
    ],
    "clubIds": [
      "sochaux",
      "villarreal",
      "everton"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Thierno_Barry_(footballer,_born_2002)"
  },
  {
    "id": "calvin-bassey",
    "nameAr": "كالفن باسي",
    "nameEn": "Calvin Bassey",
    "nationalityAr": "نيجيري",
    "nationalityEn": "Nigerian",
    "clubAr": "فولهام",
    "clubEn": "Fulham",
    "clubId": "fulham",
    "position": {
      "ar": "ظهير أيسر / مدافع (قلب دفاع)",
      "en": "Left-back / Centre-back"
    },
    "era": "2020-الآن",
    "active": true,
    "bioAr": "مدافع وُلد في أوستا بإيطاليا في 31 ديسمبر 1999 وانتقل إلى لندن صغيراً، تدرج في أكاديمية ليستر سيتي ثم لعب لرينجرز وأياكس، وانضم إلى فولهام في 28 يوليو 2023، ويمثل منتخب نيجيريا.",
    "bioEn": "Defender born in Aosta, Italy, on 31 December 1999 who moved to London as a child, came through Leicester City's academy and played for Rangers and Ajax before joining Fulham on 28 July 2023; he plays for Nigeria.",
    "achievementsAr": [
      "الدوري الاسكتلندي الممتاز 2020-21 مع رينجرز",
      "كأس اسكتلندا 2021-22 مع رينجرز",
      "أفضل لاعب في فولهام موسم 2024-25",
      "وصيف كأس أمم أفريقيا 2023 مع نيجيريا"
    ],
    "achievementsEn": [
      "Scottish Premiership 2020-21 with Rangers",
      "Scottish Cup 2021-22 with Rangers",
      "Fulham Player of the Season 2024-25",
      "Africa Cup of Nations 2023 runner-up with Nigeria"
    ],
    "clubsHistoryAr": [
      "ليستر سيتي (شباب)",
      "رينجرز",
      "أياكس",
      "فولهام"
    ],
    "clubsHistoryEn": [
      "Leicester City (youth)",
      "Rangers",
      "Ajax",
      "Fulham"
    ],
    "clubIds": [
      "rangers",
      "ajax",
      "fulham"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Calvin_Bassey"
  },
  {
    "id": "emiliano-buendia",
    "nameAr": "إميليانو بوينديا",
    "nameEn": "Emiliano Buendía",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "أستون فيلا",
    "clubEn": "Aston Villa",
    "clubId": "aston-villa",
    "position": {
      "ar": "صانع ألعاب / جناح أيسر",
      "en": "Attacking midfielder / Left winger"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "لاعب أرجنتيني وُلد في مار ديل بلاتا في 25 ديسمبر 1996 وانتقل إلى إسبانيا في الحادية عشرة للانضمام لأكاديمية ريال مدريد، ثم لعب لخيتافي ونورويتش سيتي وانضم إلى أستون فيلا في 2021، وأُعير إلى باير ليفركوزن في 2025.",
    "bioEn": "Argentine player born in Mar del Plata on 25 December 1996 who moved to Spain aged 11 to join Real Madrid's academy, then played for Getafe and Norwich City before joining Aston Villa in 2021; he was loaned to Bayer Leverkusen in 2025.",
    "achievementsAr": [
      "التشامبيونشيب 2018-19 و2020-21 مع نورويتش سيتي",
      "الدوري الأوروبي 2025-26 مع أستون فيلا (ضمن التشكيلة)"
    ],
    "achievementsEn": [
      "EFL Championship 2018-19 and 2020-21 with Norwich City",
      "UEFA Europa League 2025-26 with Aston Villa (squad member)"
    ],
    "clubsHistoryAr": [
      "خيتافي",
      "كولتورال ليونيسا (إعارة)",
      "نورويتش سيتي",
      "أستون فيلا",
      "باير ليفركوزن (إعارة)",
      "أستون فيلا"
    ],
    "clubsHistoryEn": [
      "Getafe",
      "Cultural Leonesa (loan)",
      "Norwich City",
      "Aston Villa",
      "Bayer Leverkusen (loan)",
      "Aston Villa"
    ],
    "clubIds": [
      "getafe",
      "norwich-city",
      "aston-villa",
      "bayer-leverkusen"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Emiliano_Buend%C3%ADa"
  },
  {
    "id": "enzo-le-fee",
    "nameAr": "إنزو لو فيه",
    "nameEn": "Enzo Le Fée",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "سندرلاند",
    "clubEn": "Sunderland",
    "clubId": "sunderland",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "لاعب وسط فرنسي وُلد في لوريان في 3 فبراير 2000، تخرج من أكاديمية لوريان ولعب لرين وروما، وانضم إلى سندرلاند معاراً في يناير 2025 ثم بشكل دائم في صيف 2025، وشارك مع فرنسا في أولمبياد طوكيو 2020.",
    "bioEn": "French midfielder born in Lorient on 3 February 2000 who came through Lorient's academy, played for Rennes and Roma, and joined Sunderland on loan in January 2025 and permanently in summer 2025; he played for France at the Tokyo 2020 Olympics.",
    "achievementsAr": [
      "الدوري الفرنسي الثاني 2019-20 مع لوريان",
      "المشاركة في أولمبياد طوكيو 2020 مع فرنسا"
    ],
    "achievementsEn": [
      "Ligue 2 2019-20 with Lorient",
      "Played for France at the Tokyo 2020 Olympics"
    ],
    "clubsHistoryAr": [
      "لوريان",
      "رين",
      "روما",
      "سندرلاند (إعارة)",
      "سندرلاند"
    ],
    "clubsHistoryEn": [
      "Lorient",
      "Rennes",
      "Roma",
      "Sunderland (loan)",
      "Sunderland"
    ],
    "clubIds": [
      "rennes",
      "roma",
      "sunderland"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Enzo_Le_F%C3%A9e"
  },
  {
    "id": "neco-williams",
    "nameAr": "نيكو ويليامز",
    "nameEn": "Neco Williams",
    "nationalityAr": "ويلزي",
    "nationalityEn": "Welsh",
    "clubAr": "نوتنغهام فورست",
    "clubEn": "Nottingham Forest",
    "clubId": "nottingham-forest",
    "position": {
      "ar": "ظهير",
      "en": "Full-back"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "ظهير ويلزي وُلد في سيفن ماور بريكسهام في 13 أبريل 2001، تخرج من أكاديمية ليفربول وأُعير إلى فولهام في يناير 2022، وانضم إلى نوتنغهام فورست في يوليو 2022 مقابل نحو 17 مليون جنيه إسترليني.",
    "bioEn": "Welsh full-back born in Cefn Mawr, Wrexham, on 13 April 2001 who came through Liverpool's academy, was loaned to Fulham in January 2022 and joined Nottingham Forest in July 2022 for around £17 million.",
    "achievementsAr": [
      "كأس الشباب الإنجليزي 2018-19 مع ليفربول",
      "الدوري الإنجليزي الممتاز 2019-20 مع ليفربول",
      "كأس العالم للأندية 2019 مع ليفربول",
      "التشامبيونشيب 2021-22 مع فولهام (إعارة)",
      "المشاركة مع ويلز في يورو 2020 وكأس العالم 2022"
    ],
    "achievementsEn": [
      "FA Youth Cup 2018-19 with Liverpool",
      "Premier League 2019-20 with Liverpool",
      "FIFA Club World Cup 2019 with Liverpool",
      "EFL Championship 2021-22 with Fulham (loan)",
      "Played for Wales at Euro 2020 and the 2022 World Cup"
    ],
    "clubsHistoryAr": [
      "ليفربول",
      "فولهام (إعارة)",
      "نوتنغهام فورست"
    ],
    "clubsHistoryEn": [
      "Liverpool",
      "Fulham (loan)",
      "Nottingham Forest"
    ],
    "clubIds": [
      "liverpool",
      "fulham",
      "nottingham-forest"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Neco_Williams"
  },
  {
    "id": "tarik-muharemovic",
    "nameAr": "طارق مهاريموفيتش",
    "nameEn": "Tarik Muharemović",
    "nationalityAr": "بوسني",
    "nationalityEn": "Bosnian",
    "clubAr": "ليدز يونايتد",
    "clubEn": "Leeds United",
    "clubId": "leeds-united",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "",
    "active": true,
    "bioAr": "مدافع بوسني وُلد في 28 فبراير 2003 ونشأ في النمسا، بدأ مع فولفسبيرغر وانضم إلى ساسوولو معاراً في أغسطس 2024 ثم بشكل دائم، وقاد منتخب البوسنة للتأهل إلى كأس العالم 2026 عبر الملحق، وانضم إلى ليدز في 17 يوليو 2026 بعقد لخمس سنوات كأول بوسني في تاريخ النادي.",
    "bioEn": "Bosnian defender born on 28 February 2003 who grew up in Austria, started at Wolfsberger AC, joined Sassuolo on loan in August 2024 and then permanently, helped Bosnia reach the 2026 World Cup via the play-offs, and signed for Leeds on 17 July 2026 on a five-year deal as the club's first Bosnian player.",
    "achievementsAr": [
      "دوري الدرجة الثانية الإيطالي (سيري بي) 2024-25 مع ساسوولو",
      "التأهل إلى كأس العالم 2026 مع البوسنة (بفوزين بركلات الترجيح على ويلز وإيطاليا في الملحق)",
      "الوصول إلى دور الـ32 في كأس العالم 2026 (أفضل إنجاز في تاريخ البوسنة)"
    ],
    "achievementsEn": [
      "Serie B 2024-25 with Sassuolo",
      "Helped Bosnia qualify for the 2026 World Cup (play-off penalty wins over Wales and Italy)",
      "Reached the 2026 World Cup round of 32 (Bosnia's best-ever finish)"
    ],
    "clubsHistoryAr": [
      "فولفسبيرغر",
      "ساسوولو (إعارة)",
      "ساسوولو",
      "ليدز يونايتد"
    ],
    "clubsHistoryEn": [
      "Wolfsberger AC",
      "Sassuolo (loan)",
      "Sassuolo",
      "Leeds United"
    ],
    "clubIds": [
      "sassuolo",
      "leeds-united"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Tarik_Muharemovi%C4%87"
  },
  {
    "id": "micky-van-de-ven",
    "nameAr": "ميكي فان دي فين",
    "nameEn": "Micky van de Ven",
    "nationalityAr": "هولندي",
    "nationalityEn": "Dutch",
    "clubAr": "توتنهام هوتسبير",
    "clubEn": "Tottenham Hotspur",
    "clubId": "tottenham",
    "position": {
      "ar": "مدافع (قلب دفاع)",
      "en": "Centre-back"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "مدافع هولندي وُلد في فورمر في 19 أبريل 2001، بدأ مع فولندام وانضم إلى فولفسبورغ عام 2021، ثم إلى توتنهام في 8 أغسطس 2023، ووقّع عقداً جديداً مع النادي في 10 أغسطس 2026.",
    "bioEn": "Dutch centre-back born in Wormer on 19 April 2001 who started at Volendam, joined VfL Wolfsburg in 2021 and Tottenham Hotspur on 8 August 2023, and signed a new contract with Spurs on 10 August 2026.",
    "achievementsAr": [
      "الدوري الأوروبي 2024-25 مع توتنهام",
      "أفضل لاعب في توتنهام موسم 2024-25 (اختيار رابطة المشجعين)",
      "المشاركة مع هولندا في يورو 2024"
    ],
    "achievementsEn": [
      "UEFA Europa League 2024-25 with Tottenham Hotspur",
      "Tottenham Hotspur Player of the Season 2024-25 (Official Supporters' Club vote)",
      "Played for the Netherlands at UEFA Euro 2024"
    ],
    "clubsHistoryAr": [
      "فولندام",
      "فولفسبورغ",
      "توتنهام هوتسبير"
    ],
    "clubsHistoryEn": [
      "Volendam",
      "VfL Wolfsburg",
      "Tottenham Hotspur"
    ],
    "clubIds": [
      "vfl-wolfsburg",
      "tottenham"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Micky_van_de_Ven"
  },
  {
    "id": "guglielmo-vicario",
    "nameAr": "غوليلمو فيكاريو",
    "nameEn": "Guglielmo Vicario",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "يوفنتوس (إعارة من توتنهام هوتسبير)",
    "clubEn": "Juventus (on loan from Tottenham Hotspur)",
    "clubId": "juventus",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "حارس مرمى إيطالي وُلد في أودينه في 7 أكتوبر 1996، تدرج في أكاديمية أودينيزي ولعب لفينيسيا وكالياري وبيروجيا وإمبولي، وانضم إلى توتنهام في صيف 2023، وهو حالياً معار إلى يوفنتوس.",
    "bioEn": "Italian goalkeeper born in Udine on 7 October 1996 who came through Udinese's youth system, played for Venezia, Cagliari, Perugia and Empoli, joined Tottenham Hotspur in summer 2023, and is currently on loan at Juventus.",
    "achievementsAr": [
      "الصعود إلى دوري الدرجة الثانية الإيطالي وكأس إيطاليا للدرجة الثالثة 2016-17 مع فينيسيا",
      "الدوري الأوروبي 2024-25 مع توتنهام",
      "أفضل حارس مرمى في جوائز كرة القدم اللندنية (لندن فوتبول أووردز) 2024",
      "المشاركة مع إيطاليا في كأس أمم أوروبا 2024"
    ],
    "achievementsEn": [
      "Promotion to Serie B and Coppa Italia Lega Pro 2016-17 with Venezia",
      "UEFA Europa League 2024-25 with Tottenham Hotspur",
      "London Football Awards Goalkeeper of the Year 2024",
      "Played for Italy at UEFA Euro 2024"
    ],
    "clubsHistoryAr": [
      "أودينيزي (شباب)",
      "فونتانافريدا (إعارة)",
      "فينيسيا",
      "كالياري",
      "بيروجيا (إعارة)",
      "كالياري",
      "إمبولي (إعارة)",
      "إمبولي",
      "توتنهام هوتسبير",
      "يوفنتوس (إعارة)"
    ],
    "clubsHistoryEn": [
      "Udinese (youth)",
      "Fontanafredda (loan)",
      "Venezia",
      "Cagliari",
      "Perugia (loan)",
      "Cagliari",
      "Empoli (loan)",
      "Empoli",
      "Tottenham Hotspur",
      "Juventus (loan)"
    ],
    "clubIds": [
      "cagliari",
      "empoli",
      "tottenham",
      "juventus"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Guglielmo_Vicario"
  },
  {
    "id": "mohammed-kudus",
    "nameAr": "محمد قدوس",
    "nameEn": "Mohammed Kudus",
    "nationalityAr": "غاني",
    "nationalityEn": "Ghanaian",
    "clubAr": "توتنهام هوتسبير",
    "clubEn": "Tottenham Hotspur",
    "clubId": "tottenham",
    "position": {
      "ar": "جناح / صانع ألعاب",
      "en": "Winger / Attacking midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "لاعب غاني وُلد في أكرا في 2 أغسطس 2000، تخرج من أكاديمية رايت تو دريم ولعب لنوردشيلاند وأياكس ووست هام، وانضم إلى توتنهام في 10 يوليو 2025 بعقد لست سنوات مقابل نحو 55 مليون جنيه إسترليني.",
    "bioEn": "Ghanaian player born in Accra on 2 August 2000 who came through the Right to Dream Academy, played for Nordsjælland, Ajax and West Ham United, and joined Tottenham Hotspur on 10 July 2025 on a six-year contract for around £55 million.",
    "achievementsAr": [
      "الدوري الهولندي 2020-21 و2021-22 مع أياكس",
      "كأس هولندا 2020-21 مع أياكس",
      "هدف الموسم في وست هام 2023-24",
      "سجّل هدفين لغانا في كأس العالم 2022"
    ],
    "achievementsEn": [
      "Eredivisie 2020-21 and 2021-22 with Ajax",
      "KNVB Cup 2020-21 with Ajax",
      "West Ham Goal of the Season 2023-24",
      "Scored twice for Ghana at the 2022 World Cup"
    ],
    "clubsHistoryAr": [
      "نوردشيلاند",
      "أياكس",
      "وست هام يونايتد",
      "توتنهام هوتسبير"
    ],
    "clubsHistoryEn": [
      "Nordsjælland",
      "Ajax",
      "West Ham United",
      "Tottenham Hotspur"
    ],
    "clubIds": [
      "ajax",
      "west-ham-united",
      "tottenham"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Mohammed_Kudus"
  },
  {
    "id": "jean-philippe-mateta",
    "nameAr": "جان-فيليب ماتيتا",
    "nameEn": "Jean-Philippe Mateta",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "كريستال بالاس",
    "clubEn": "Crystal Palace",
    "clubId": "crystal-palace",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "",
    "active": true,
    "bioAr": "مهاجم فرنسي وُلد في سيفران في 28 يونيو 1997، بدأ مع شاتورو ثم ليون ومايندز، وانضم إلى كريستال بالاس معاراً في يناير 2021 ثم بشكل دائم في 2022، وسجّل هدف الفوز في نهائي دوري المؤتمر الأوروبي 2026.",
    "bioEn": "French striker born in Sevran on 28 June 1997 who started at Châteauroux, played for Lyon and Mainz, joined Crystal Palace on loan in January 2021 and permanently in 2022, and scored the winning goal in the 2026 UEFA Conference League final.",
    "achievementsAr": [
      "كأس الاتحاد الإنجليزي 2024-25 مع كريستال بالاس",
      "كأس الدرع الخيرية 2025 مع كريستال بالاس",
      "دوري المؤتمر الأوروبي 2025-26 مع كريستال بالاس (سجّل هدف الفوز في النهائي)",
      "أفضل لاعب في كريستال بالاس 2023-24 (أول فرنسي يفوز بالجائزة)",
      "سجّل 7 أهداف في 8 مباريات مع منتخب فرنسا الأولمبي في 2024",
      "ضمن تشكيلة فرنسا في كأس العالم 2026"
    ],
    "achievementsEn": [
      "FA Cup 2024-25 with Crystal Palace",
      "FA Community Shield 2025 with Crystal Palace",
      "UEFA Conference League 2025-26 with Crystal Palace (scored the winner in the final)",
      "Crystal Palace Player of the Year 2023-24 (first Frenchman to win it)",
      "Scored 7 goals in 8 matches for France at the 2024 Olympics",
      "In France's 2026 World Cup squad"
    ],
    "clubsHistoryAr": [
      "شاتورو",
      "ليون",
      "مايندز",
      "كريستال بالاس (إعارة)",
      "كريستال بالاس"
    ],
    "clubsHistoryEn": [
      "Châteauroux",
      "Lyon",
      "Mainz 05",
      "Crystal Palace (loan)",
      "Crystal Palace"
    ],
    "clubIds": [
      "lyon",
      "mainz-05",
      "crystal-palace"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jean-Philippe_Mateta"
  },
  {
    "id": "ismaila-sarr",
    "nameAr": "إسماعيلا سار",
    "nameEn": "Ismaïla Sarr",
    "nationalityAr": "سنغالي",
    "nationalityEn": "Senegalese",
    "clubAr": "كريستال بالاس",
    "clubEn": "Crystal Palace",
    "clubId": "crystal-palace",
    "position": {
      "ar": "جناح / مهاجم",
      "en": "Winger / Forward"
    },
    "era": "",
    "active": true,
    "bioAr": "جناح سنغالي وُلد في سان لويس في 25 فبراير 1998، تخرج من أكاديمية جينيراسيون فوت ولعب لميتز ورين وواتفورد ومرسيليا، وانضم إلى كريستال بالاس في أغسطس 2024 بعقد لخمس سنوات، وسجّل 21 هدفاً في موسم 2025-26.",
    "bioEn": "Senegalese winger born in Saint-Louis on 25 February 1998 who came through Génération Foot's academy, played for Metz, Rennes, Watford and Marseille, joined Crystal Palace in August 2024 on a five-year contract, and scored 21 goals in 2025-26.",
    "achievementsAr": [
      "كأس فرنسا 2018-19 مع رين",
      "كأس الاتحاد الإنجليزي 2024-25 مع كريستال بالاس",
      "كأس الدرع الخيرية 2025 مع كريستال بالاس",
      "دوري المؤتمر الأوروبي 2025-26 مع كريستال بالاس (أول لقب أوروبي في تاريخ النادي)",
      "كأس أمم أفريقيا 2021 مع السنغال",
      "ضمن تشكيلة السنغال في كأس العالم 2026"
    ],
    "achievementsEn": [
      "Coupe de France 2018-19 with Rennes",
      "FA Cup 2024-25 with Crystal Palace",
      "FA Community Shield 2025 with Crystal Palace",
      "UEFA Conference League 2025-26 with Crystal Palace (the club's first European trophy)",
      "Africa Cup of Nations 2021 with Senegal",
      "In Senegal's 2026 World Cup squad"
    ],
    "clubsHistoryAr": [
      "جينيراسيون فوت",
      "ميتز",
      "رين",
      "واتفورد",
      "مرسيليا",
      "كريستال بالاس"
    ],
    "clubsHistoryEn": [
      "Génération Foot",
      "Metz",
      "Rennes",
      "Watford",
      "Marseille",
      "Crystal Palace"
    ],
    "clubIds": [
      "metz",
      "rennes",
      "marseille",
      "crystal-palace"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Isma%C3%AFla_Sarr"
  },
  {
    "id": "kaoru-mitoma",
    "nameAr": "كاورو ميتوما",
    "nameEn": "Kaoru Mitoma",
    "nationalityAr": "ياباني",
    "nationalityEn": "Japanese",
    "clubAr": "برايتون",
    "clubEn": "Brighton & Hove Albion",
    "clubId": "brighton-hove-albion",
    "position": {
      "ar": "جناح أيسر",
      "en": "Left winger"
    },
    "era": "",
    "active": true,
    "bioAr": "جناح ياباني وُلد في هيتا بمحافظة أويتا في 20 مايو 1997 ونشأ في كاواساكي، لعب لجامعة تسوكوبا وكاواساكي فرونتالي، وانضم إلى برايتون في 10 أغسطس 2021 وأُعير لأنيون سان جيلواز لموسم، ثم أصبح لاعباً أساسياً في الدوري الإنجليزي من 2022.",
    "bioEn": "Japanese winger born in Hita, Ōita, on 20 May 1997 and raised in Kawasaki, who played for the University of Tsukuba and Kawasaki Frontale, joined Brighton on 10 August 2021, spent a season on loan at Union SG, and became a Premier League regular from 2022.",
    "achievementsAr": [
      "أول لاعب يفوز بجائزة أفضل لاعب في اليابان من رابطة اللاعبين (Japan PFA) عام 2022",
      "المشاركة مع اليابان في كأس العالم 2022 (فوزها على ألمانيا وإسبانيا)"
    ],
    "achievementsEn": [
      "First-ever Japan PFA Player of the Year (2022)",
      "Played for Japan at the 2022 World Cup (wins over Germany and Spain)"
    ],
    "clubsHistoryAr": [
      "جامعة تسوكوبا",
      "كاواساكي فرونتالي",
      "برايتون",
      "أنيون سان جيلواز (إعارة)",
      "برايتون"
    ],
    "clubsHistoryEn": [
      "University of Tsukuba",
      "Kawasaki Frontale",
      "Brighton & Hove Albion",
      "Union SG (loan)",
      "Brighton & Hove Albion"
    ],
    "clubIds": [
      "brighton-hove-albion"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Kaoru_Mitoma"
  },
  {
    "id": "john-mcginn",
    "nameAr": "جون ماكغين",
    "nameEn": "John McGinn",
    "nationalityAr": "اسكتلندي",
    "nationalityEn": "Scottish",
    "clubAr": "أستون فيلا",
    "clubEn": "Aston Villa",
    "clubId": "aston-villa",
    "position": {
      "ar": "لاعب وسط",
      "en": "Midfielder"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "لاعب وسط اسكتلندي وُلد في غلاسكو في 18 أكتوبر 1994، بدأ مع سانت ميرين ثم هايبرنيان، وانضم إلى أستون فيلا في 8 أغسطس 2018، وأصبح قائد الفريق في يوليو 2022، ويمثل منتخب اسكتلندا وهو نائب قائده في كأس العالم 2026.",
    "bioEn": "Scottish midfielder born in Glasgow on 18 October 1994 who started at St Mirren and then Hibernian, joined Aston Villa on 8 August 2018, has been club captain since July 2022, and was Scotland's vice-captain at the 2026 World Cup.",
    "achievementsAr": [
      "كأس الرابطة الاسكتلندية 2013 مع سانت ميرين",
      "كأس اسكتلندا 2015-16 مع هايبرنيان",
      "الصعود من التشامبيونشيب الاسكتلندي 2016-17 مع هايبرنيان",
      "الصعود إلى الدوري الممتاز 2019 مع أستون فيلا (فوز 2-1 على ديربي في ملحق ويمبلي)",
      "الدوري الأوروبي 2025-26 مع أستون فيلا (كقائد للفريق)"
    ],
    "achievementsEn": [
      "Scottish League Cup 2013 with St Mirren",
      "Scottish Cup 2015-16 with Hibernian",
      "Scottish Championship promotion 2016-17 with Hibernian",
      "Promotion to the Premier League in 2019 with Aston Villa (2-1 play-off final win over Derby)",
      "UEFA Europa League 2025-26 with Aston Villa (as captain)"
    ],
    "clubsHistoryAr": [
      "سانت ميرين",
      "هايبرنيان",
      "أستون فيلا"
    ],
    "clubsHistoryEn": [
      "St Mirren",
      "Hibernian",
      "Aston Villa"
    ],
    "clubIds": [
      "aston-villa"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/John_McGinn"
  },
  {
    "id": "matty-cash",
    "nameAr": "ماتي كاش",
    "nameEn": "Matty Cash",
    "nationalityAr": "بولندي",
    "nationalityEn": "Polish",
    "clubAr": "أستون فيلا",
    "clubEn": "Aston Villa",
    "clubId": "aston-villa",
    "position": {
      "ar": "ظهير أيمن",
      "en": "Right-back"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "ظهير أيمن وُلد في سلاو بإنجلترا في 7 أغسطس 1997 لأم من أصول بولندية، تدرج في أكاديمية نوتنغهام فورست وانضم إلى أستون فيلا في سبتمبر 2020، وحصل على الجنسية البولندية في أكتوبر 2021 ويمثل منتخب بولندا.",
    "bioEn": "Right-back born in Slough, England, on 7 August 1997 to a mother of Polish descent, who came through Nottingham Forest's system, joined Aston Villa in September 2020, obtained Polish citizenship in October 2021 and plays for Poland.",
    "achievementsAr": [
      "أفضل لاعب في نوتنغهام فورست 2019-20",
      "أفضل لاعب في أستون فيلا 2021-22",
      "الدوري الأوروبي 2025-26 مع أستون فيلا",
      "الوصول إلى دور الـ16 في كأس العالم 2022 مع بولندا"
    ],
    "achievementsEn": [
      "Nottingham Forest Player of the Season 2019-20",
      "Aston Villa Player of the Season 2021-22",
      "UEFA Europa League 2025-26 with Aston Villa",
      "Reached the 2022 World Cup round of 16 with Poland"
    ],
    "clubsHistoryAr": [
      "وايكومب (شباب)",
      "نوتنغهام فورست",
      "داغنهام آند ريدبريدج (إعارة)",
      "أستون فيلا"
    ],
    "clubsHistoryEn": [
      "Wycombe Wanderers (youth)",
      "Nottingham Forest",
      "Dagenham & Redbridge (loan)",
      "Aston Villa"
    ],
    "clubIds": [
      "nottingham-forest",
      "aston-villa"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": ""
  },
  {
    "id": "marcos-llorente",
    "nameAr": "ماركوس يورينتي",
    "nameEn": "Marcos Llorente",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "وسط / ظهير أيمن",
      "en": "Midfielder / Right-back"
    },
    "era": "2014-الآن",
    "active": true,
    "bioAr": "لاعب إسباني وُلد في مدريد وتكوّن في أكاديمية ريال مدريد، ثم انضم إلى أتلتيكو مدريد في يونيو 2019 وتُوّج معه بالدوري الإسباني 2020-2021. شارك مع إسبانيا في يورو 2020 وكأس العالم 2022 وكأس العالم 2026 الذي فاز به المنتخب الإسباني.",
    "bioEn": "Spanish player born in Madrid and developed at Real Madrid, who joined Atlético Madrid in June 2019 and won the 2020-21 La Liga title with them. He was part of Spain's squads at Euro 2020, the 2022 World Cup and the 2026 World Cup, which Spain won.",
    "achievementsAr": [
      "لقب الدوري الإسباني 2020-2021 مع أتلتيكو مدريد",
      "كأس العالم للأندية 2018 مع ريال مدريد (سجّل في النهائي)",
      "دوري أبطال أوروبا 2017-2018 مع ريال مدريد",
      "كأس العالم 2026 مع إسبانيا",
      "المركز الثالث في يورو 2020 مع إسبانيا",
      "وصافة بطولة أوروبا تحت 21 سنة 2017",
      "تشكيلة الموسم في الدوري الإسباني ودوري الأبطال 2025-2026"
    ],
    "achievementsEn": [
      "2020-21 La Liga title with Atlético Madrid",
      "2018 FIFA Club World Cup with Real Madrid (scored in the final)",
      "2017-18 UEFA Champions League with Real Madrid",
      "2026 FIFA World Cup with Spain",
      "Third place at UEFA Euro 2020 with Spain",
      "2017 UEFA European Under-21 Championship runner-up",
      "La Liga and UEFA Champions League Team of the Season 2025-26"
    ],
    "clubsHistoryAr": [
      "ريال مدريد (شباب)",
      "ريال مدريد كاستيا",
      "ريال مدريد",
      "ألافيس (إعارة)",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Real Madrid (youth)",
      "Real Madrid Castilla",
      "Real Madrid",
      "Alavés (loan)",
      "Atlético Madrid"
    ],
    "clubIds": [
      "real-madrid",
      "alaves",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marcos_Llorente"
  },
  {
    "id": "alex-grimaldo",
    "nameAr": "أليكس غريمالدو",
    "nameEn": "Álex Grimaldo",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "ظهير أيسر / جناح أيسر مدافع",
      "en": "Left-back / Left wing-back"
    },
    "era": "2011-الآن",
    "active": true,
    "bioAr": "ظهير أيسر إسباني وُلد في فالنسيا في 20 سبتمبر 1995، مرّ بفريقي أتلتيكو فالبونسي وفالنسيا ثم أكاديمية برشلونة (2008) ولعب لبرشلونة ب دون أن يشارك مع الفريق الأول. انتقل إلى بنفيكا في 29 ديسمبر 2015 ثم باير ليفركوزن مجانًا في 2023، وأعلن أتلتيكو مدريد التعاقد معه في 30 يونيو 2026 بعقد حتى 2030.",
    "bioEn": "Spanish left-back born in Valencia on 20 September 1995 who came through Atlético Vallbonense, Valencia and then Barcelona's academy (2008), playing for Barcelona B without appearing for the first team. He joined Benfica on 29 December 2015 and Bayer Leverkusen on a free transfer in 2023, and Atlético Madrid announced his signing on 30 June 2026 on a contract until 2030.",
    "achievementsAr": [
      "4 ألقاب دوري برتغالي مع بنفيكا (2015-16 و2016-17 و2018-19 و2022-23)",
      "كأس البرتغال 2016-17 وكأس الرابطة 2015-16 مع بنفيكا",
      "كأس السوبر البرتغالي 2016 و2017 و2019 مع بنفيكا",
      "الدوري الألماني وكأس ألمانيا 2023-2024 مع باير ليفركوزن",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "بطولة أوروبا تحت 19 سنة 2012 مع إسبانيا"
    ],
    "achievementsEn": [
      "4 Primeira Liga titles with Benfica (2015-16, 2016-17, 2018-19, 2022-23)",
      "2016-17 Taça de Portugal and 2015-16 Taça da Liga with Benfica",
      "Supertaça Cândido de Oliveira 2016, 2017 and 2019 with Benfica",
      "2023-24 Bundesliga and DFB-Pokal with Bayer Leverkusen",
      "UEFA Euro 2024 with Spain",
      "2012 UEFA European Under-19 Championship with Spain"
    ],
    "clubsHistoryAr": [
      "أتلتيكو فالبونسي (شباب)",
      "فالنسيا (شباب)",
      "برشلونة (شباب)",
      "برشلونة ب",
      "بنفيكا",
      "باير ليفركوزن",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Atlético Vallbonense (youth)",
      "Valencia (youth)",
      "Barcelona (youth)",
      "Barcelona B",
      "Benfica",
      "Bayer Leverkusen",
      "Atlético Madrid"
    ],
    "clubIds": [
      "benfica",
      "bayer-leverkusen",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Álex_Grimaldo"
  },
  {
    "id": "jose-maria-gimenez",
    "nameAr": "خوسيه ماريا خيمينيز",
    "nameEn": "José María Giménez",
    "nationalityAr": "أوروغواياني",
    "nationalityEn": "Uruguayan",
    "clubAr": "ديبورتيفو لاكورونيا (إعارة من أتلتيكو مدريد)",
    "clubEn": "Deportivo La Coruña (on loan from Atlético Madrid)",
    "clubId": "deportivo-la-coruna",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2012-الآن",
    "active": true,
    "bioAr": "مدافع أوروغواياني وُلد في 20 يناير 1995 وتخرّج من أكاديمية دانوبيو. انضم إلى أتلتيكو مدريد عام 2013 وقضى معه 13 موسمًا، ثم انتقل في 1 سبتمبر 2026 إلى ديبورتيفو لاكورونيا معارًا حتى يونيو 2027 مع خيار شراء.",
    "bioEn": "Uruguayan centre-back born on 20 January 1995 and a Danubio academy graduate. He joined Atlético Madrid in 2013, spent 13 seasons there, and moved on loan to Deportivo La Coruña on 1 September 2026 until June 2027 with a buy option.",
    "achievementsAr": [
      "لقبا الدوري الإسباني 2013-14 و2020-21 مع أتلتيكو مدريد",
      "كأس السوبر الإسباني 2014 مع أتلتيكو مدريد",
      "لقب الدوري الأوروبي 2017-2018 مع أتلتيكو مدريد",
      "كأس السوبر الأوروبي 2018 مع أتلتيكو مدريد"
    ],
    "achievementsEn": [
      "2013-14 and 2020-21 La Liga titles with Atlético Madrid",
      "2014 Supercopa de España with Atlético Madrid",
      "2017-18 UEFA Europa League with Atlético Madrid",
      "2018 UEFA Super Cup with Atlético Madrid"
    ],
    "clubsHistoryAr": [
      "دانوبيو",
      "أتلتيكو مدريد",
      "ديبورتيفو لاكورونيا (إعارة)"
    ],
    "clubsHistoryEn": [
      "Danubio",
      "Atlético Madrid",
      "Deportivo La Coruña (loan)"
    ],
    "clubIds": [
      "atletico-madrid",
      "deportivo-la-coruna"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/José_María_Giménez"
  },
  {
    "id": "morten-hjulmand",
    "nameAr": "مورتن يولمان",
    "nameEn": "Morten Hjulmand",
    "nationalityAr": "دنماركي",
    "nationalityEn": "Danish",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "وسط دفاعي",
      "en": "Defensive midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "لاعب وسط دفاعي دنماركي وُلد في كاستروب في 25 يونيو 1999 وتخرّج من أكاديمية كوبنهاغن. بدأ مسيرته الاحترافية مع أدميرا فاكر النمساوي عام 2018 ثم انتقل إلى ليتشي في يناير 2021، وأصبح وهو في الثالثة والعشرين ثاني أصغر لاعب يقود فريقًا في الدوري الإيطالي بعد توتي. انضم إلى سبورتينغ لشبونة في أغسطس 2023 ثم إلى أتلتيكو مدريد في 11 يوليو 2026 بعقد حتى 2031.",
    "bioEn": "Danish defensive midfielder born in Kastrup on 25 June 1999 and a FC Copenhagen academy product. He began his professional career with Austria's Admira Wacker in 2018 and joined Lecce in January 2021, where aged 23 he became the second-youngest player to captain a Serie A side after Totti. He joined Sporting CP in August 2023 and Atlético Madrid on 11 July 2026 on a contract until 2031.",
    "achievementsAr": [
      "لقب دوري الدرجة الثانية الإيطالي 2021-2022 والصعود للدوري الإيطالي مع ليتشي",
      "لقبا الدوري البرتغالي 2023-24 و2024-25 مع سبورتينغ لشبونة",
      "كأس البرتغال 2024-25 مع سبورتينغ لشبونة"
    ],
    "achievementsEn": [
      "2021-22 Serie B title and promotion to Serie A with Lecce",
      "2023-24 and 2024-25 Primeira Liga titles with Sporting CP",
      "2024-25 Taça de Portugal with Sporting CP"
    ],
    "clubsHistoryAr": [
      "كوبنهاغن (شباب)",
      "أدميرا فاكر",
      "ليتشي",
      "سبورتينغ لشبونة",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Copenhagen (youth)",
      "Admira Wacker",
      "Lecce",
      "Sporting CP",
      "Atlético Madrid"
    ],
    "clubIds": [
      "lecce",
      "sporting-cp",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Morten_Hjulmand"
  },
  {
    "id": "kang-in-lee",
    "nameAr": "لي كانغ-إن",
    "nameEn": "Kang-in Lee",
    "nationalityAr": "كوري جنوبي",
    "nationalityEn": "South Korean",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "جناح / صانع ألعاب",
      "en": "Winger / Attacking midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "لاعب كوري جنوبي من إنتشون وُلد في 19 فبراير 2001، انضم لأكاديمية فالنسيا في 2011 وظهر مع الفريق الأول في 30 أكتوبر 2018، ثم لعب لمايوركا (2021-2023) وباريس سان جيرمان (2023-2026). انتقل إلى أتلتيكو مدريد في 25 يوليو 2026 بعقد حتى 2031، وشارك مع كوريا الجنوبية في كأسي العالم 2022 و2026.",
    "bioEn": "South Korean attacking midfielder/winger from Incheon who joined Valencia's academy aged 10 and made his first-team debut on 30 October 2018, later playing for Mallorca and, from 2023, Paris Saint-Germain. He joined Atlético Madrid on 25 July 2026 on a contract until 2031 and played for South Korea at the 2022 and 2026 World Cups.",
    "achievementsAr": [
      "لقبا دوري أبطال أوروبا وثلاثة ألقاب دوري فرنسي مع باريس سان جيرمان (12 بطولة إجمالًا)",
      "كأس إسبانيا 2019 مع فالنسيا",
      "وصافة كأس العالم تحت 20 سنة 2019 مع كوريا الجنوبية وجائزة أفضل لاعب (الكرة الذهبية) في البطولة"
    ],
    "achievementsEn": [
      "2 UEFA Champions League titles and 3 Ligue 1 titles with Paris Saint-Germain (12 trophies in total)",
      "2019 Copa del Rey with Valencia",
      "2019 FIFA U-20 World Cup runner-up with South Korea and the tournament's Golden Ball"
    ],
    "clubsHistoryAr": [
      "إنتشون يونايتد (شباب)",
      "فلاينغز (شباب)",
      "فالنسيا (شباب)",
      "فالنسيا ب",
      "فالنسيا",
      "مايوركا",
      "باريس سان جيرمان",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Incheon United (youth)",
      "Flyings FC (youth)",
      "Valencia (youth)",
      "Valencia Mestalla",
      "Valencia",
      "Mallorca",
      "Paris Saint-Germain",
      "Atlético Madrid"
    ],
    "clubIds": [
      "valencia",
      "mallorca",
      "paris-saint-germain",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Lee_Kang-in"
  },
  {
    "id": "jonathan-david",
    "nameAr": "جوناثان ديفيد",
    "nameEn": "Jonathan David",
    "nationalityAr": "كندي",
    "nationalityEn": "Canadian",
    "clubAr": "أتلتيكو مدريد (إعارة من يوفنتوس)",
    "clubEn": "Atlético Madrid (on loan from Juventus)",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "مهاجم كندي وُلد في بروكلين عام 2000 لأبوين من هايتي ونشأ في أوتاوا، وهو الهداف التاريخي لمنتخب كندا للرجال بـ 42 هدفًا. انتقل إلى غنت البلجيكي في 2018 ثم ليل الفرنسي في 2020 حيث سجل 109 أهداف في 232 مباراة، ثم يوفنتوس في 2025 دون أن يسجل سوى 8 أهداف. انضم إلى أتلتيكو مدريد في 1 سبتمبر 2026 معارًا من يوفنتوس مع خيار شراء بقيمة 25 مليون يورو.",
    "bioEn": "Canadian striker born in Brooklyn in 2000 to Haitian parents and raised in Ottawa, and his country's all-time top men's scorer with 42 goals. He joined Belgium's Gent in 2018 and France's Lille in 2020, scoring 109 goals in 232 games, then Juventus in 2025 where he scored just 8. He joined Atlético Madrid on 1 September 2026 on loan from Juventus with a €25 million buy option.",
    "achievementsAr": [
      "لقب الدوري الفرنسي 2020-2021 وكأس السوبر الفرنسي مع ليل",
      "أفضل لاعب في كونكاكاف 2025",
      "الهداف التاريخي لمنتخب كندا للرجال"
    ],
    "achievementsEn": [
      "2020-21 Ligue 1 title and French Super Cup with Lille",
      "2025 CONCACAF Men's Player of the Year",
      "Canada men's all-time top scorer"
    ],
    "clubsHistoryAr": [
      "غلوسيستر هورنتس (شباب)",
      "أوتاوا إنترناشيونالز (شباب)",
      "غنت",
      "ليل",
      "يوفنتوس",
      "أتلتيكو مدريد (إعارة)"
    ],
    "clubsHistoryEn": [
      "Ottawa Gloucester Hornets (youth)",
      "Ottawa Internationals (youth)",
      "Gent",
      "Lille",
      "Juventus",
      "Atlético Madrid (loan)"
    ],
    "clubIds": [
      "lille",
      "juventus",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jonathan_David"
  },
  {
    "id": "david-hancko",
    "nameAr": "ديفيد هانكو",
    "nameEn": "Dávid Hancko",
    "nationalityAr": "سلوفاكي",
    "nationalityEn": "Slovak",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "مدافع",
      "en": "Centre-back"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "مدافع سلوفاكي وُلد في بريفيدزا في 13 ديسمبر 1997 وتخرّج من أكاديمية جيلينا. انتقل إلى فيورنتينا عام 2018 ثم لعب لسبارتا براغ (إعارة ثم انتقال دائم) وفينورد منذ 2022. انضم إلى أتلتيكو مدريد في 24 يوليو 2025 بعقد حتى يونيو 2030، ويقود منتخب سلوفاكيا.",
    "bioEn": "Slovak defender born in Prievidza on 13 December 1997 and a Žilina academy graduate. He joined Fiorentina in 2018, then played for Sparta Prague (loan then permanent) and Feyenoord from 2022. He joined Atlético Madrid on 24 July 2025 on a contract until June 2030 and captains Slovakia.",
    "achievementsAr": [
      "الدوري السلوفاكي 2016-17 مع جيلينا",
      "كأس التشيك 2019-20 مع سبارتا براغ",
      "الدوري الهولندي 2022-23 وكأس هولندا 2023-24 والسوبر الهولندي 2024 مع فينورد"
    ],
    "achievementsEn": [
      "2016-17 Slovak league with Žilina",
      "2019-20 Czech Cup with Sparta Prague",
      "2022-23 Eredivisie, 2023-24 KNVB Cup and 2024 Johan Cruyff Shield with Feyenoord"
    ],
    "clubsHistoryAr": [
      "جيلينا",
      "فيورنتينا",
      "سبارتا براغ (إعارة)",
      "سبارتا براغ",
      "فينورد",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Žilina",
      "Fiorentina",
      "Sparta Prague (loan)",
      "Sparta Prague",
      "Feyenoord",
      "Atlético Madrid"
    ],
    "clubIds": [
      "fiorentina",
      "feyenoord",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dávid_Hancko"
  },
  {
    "id": "marc-pubill",
    "nameAr": "مارك بوبيل",
    "nameEn": "Marc Pubill",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "ظهير أيمن",
      "en": "Right-back"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "ظهير أيمن إسباني وُلد في تيراسا في 20 يونيو 2003، مرّ بفرق مانريسا وإسبانيول وليفانتي في الفئات السنية، ثم انتقل إلى ألميريا عام 2023 (63 مباراة رسمية) قبل انضمامه إلى أتلتيكو مدريد في يوليو 2025 بعقد حتى 2030.",
    "bioEn": "Spanish right-back born in Terrassa on 20 June 2003 who came through the youth ranks of Gimnàstic Manresa, Espanyol and Levante, then joined Almería in 2023 (63 official appearances) before moving to Atlético Madrid in July 2025 on a contract until 2030.",
    "achievementsAr": [
      "ذهبية أولمبياد باريس 2024 مع إسبانيا"
    ],
    "achievementsEn": [
      "Gold medal at Paris 2024 Olympics with Spain"
    ],
    "clubsHistoryAr": [
      "جيمناستيك مانريسا (شباب)",
      "إسبانيول (شباب)",
      "ليفانتي",
      "ألميريا",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Gimnàstic Manresa (youth)",
      "Espanyol (youth)",
      "Levante",
      "Almería",
      "Atlético Madrid"
    ],
    "clubIds": [
      "levante",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Marc_Pubill"
  },
  {
    "id": "johnny-cardoso",
    "nameAr": "جوني كاردوسو",
    "nameEn": "Johnny Cardoso",
    "nationalityAr": "أمريكي",
    "nationalityEn": "American",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2019-الآن",
    "active": true,
    "bioAr": "لاعب وسط أمريكي وُلد في دنفيل بولاية نيوجيرسي في 20 سبتمبر 2001 لأبوين برازيليين، ونشأ كرويًا في البرازيل (أفاي وكريسيوما ثم إنترناسيونال). انتقل إلى ريال بيتيس في ديسمبر 2023 ثم إلى أتلتيكو مدريد في يوليو 2025 بعقد حتى 2030، ويمثل منتخب الولايات المتحدة.",
    "bioEn": "American midfielder born in Denville, New Jersey on 20 September 2001 to Brazilian parents and raised as a footballer in Brazil (Avaí and Criciúma, then Internacional). He joined Real Betis in December 2023 and Atlético Madrid in July 2025 on a contract until 2030, and plays for the United States.",
    "achievementsAr": [
      "لقبا دوري أمم كونكاكاف 2022-23 و2023-24 مع الولايات المتحدة"
    ],
    "achievementsEn": [
      "2022-23 and 2023-24 CONCACAF Nations League titles with the United States"
    ],
    "clubsHistoryAr": [
      "أفاي (شباب)",
      "كريسيوما (شباب)",
      "إنترناسيونال",
      "ريال بيتيس",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Avaí (youth)",
      "Criciúma (youth)",
      "Internacional",
      "Real Betis",
      "Atlético Madrid"
    ],
    "clubIds": [
      "real-betis",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Johnny_Cardoso"
  },
  {
    "id": "alex-baena",
    "nameAr": "أليكس باينا",
    "nameEn": "Álex Baena",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "جناح / صانع ألعاب",
      "en": "Winger / Attacking midfielder"
    },
    "era": "2018-الآن",
    "active": true,
    "bioAr": "لاعب إسباني وُلد في روكيتاس دي مار في 20 يوليو 2001 وتخرّج من أكاديمية فياريال. أُعير إلى جيرونا موسم 2021-2022 ثم عاد إلى فياريال، وانتقل إلى أتلتيكو مدريد في 2 يوليو 2025 بعقد حتى 2030 ويرتدي القميص رقم 10.",
    "bioEn": "Spanish attacking midfielder born in Roquetas de Mar on 20 July 2001 and a Villarreal academy graduate. He was loaned to Girona in 2021-22 before returning to Villarreal, and moved to Atlético Madrid on 2 July 2025 on a contract until 2030, wearing the number 10 shirt.",
    "achievementsAr": [
      "الدوري الأوروبي 2020-2021 مع فياريال",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "ذهبية أولمبياد باريس 2024 مع إسبانيا"
    ],
    "achievementsEn": [
      "2020-21 UEFA Europa League with Villarreal",
      "UEFA Euro 2024 with Spain",
      "Gold medal at Paris 2024 Olympics with Spain"
    ],
    "clubsHistoryAr": [
      "روكيتاس (شباب)",
      "فياريال (شباب)",
      "فياريال ج",
      "فياريال ب",
      "فياريال",
      "جيرونا (إعارة)",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Roquetas (youth)",
      "Villarreal (youth)",
      "Villarreal C",
      "Villarreal B",
      "Villarreal",
      "Girona (loan)",
      "Atlético Madrid"
    ],
    "clubIds": [
      "villarreal",
      "girona",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Álex_Baena"
  },
  {
    "id": "obed-vargas",
    "nameAr": "أوبيد فارغاس",
    "nameEn": "Obed Vargas",
    "nationalityAr": "مكسيكي",
    "nationalityEn": "Mexican",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "لاعب وسط مكسيكي وُلد في أنكوراج بولاية ألاسكا في 5 أغسطس 2005 لأبوين مكسيكيين. بدأ مع نادي كوك إنليت ثم أكاديمية سياتل ساوندرز وظهر مع الفريق الأول في 2021 وهو في الخامسة عشرة، وانتقل إلى أتلتيكو مدريد في 2 فبراير 2026 بعقد حتى 2030.",
    "bioEn": "Mexican midfielder born in Anchorage, Alaska on 5 August 2005 to Mexican parents. He started at Cook Inlet SC, then the Seattle Sounders academy, debuting for the first team in 2021 aged 15, and moved to Atlético Madrid on 2 February 2026 on a contract until 2030.",
    "achievementsAr": [
      "دوري أبطال كونكاكاف 2022 مع سياتل ساوندرز"
    ],
    "achievementsEn": [
      "2022 CONCACAF Champions League with Seattle Sounders"
    ],
    "clubsHistoryAr": [
      "كوك إنليت (شباب)",
      "سياتل ساوندرز (شباب)",
      "تاكوما ديفايانس",
      "سياتل ساوندرز",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Cook Inlet SC (youth)",
      "Seattle Sounders (youth)",
      "Tacoma Defiance",
      "Seattle Sounders",
      "Atlético Madrid"
    ],
    "clubIds": [
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Obed_Vargas"
  },
  {
    "id": "rodrigo-mendoza",
    "nameAr": "رودريغو مندوزا",
    "nameEn": "Rodrigo Mendoza",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2021-الآن",
    "active": true,
    "bioAr": "لاعب وسط إسباني وُلد في مولينا دي سيغورا في 15 مارس 2005، وتخرّج من أكاديمية إلتشي بعد مروره بفرق ألتورّيال وسان ميغيل ورانيرو. انتقل إلى أتلتيكو مدريد في 2 فبراير 2026 بعقد حتى 2031.",
    "bioEn": "Spanish midfielder born in Molina de Segura on 15 March 2005 and an Elche academy graduate after youth spells at Altorreal, San Miguel and Ranero. He joined Atlético Madrid on 2 February 2026 on a contract until 2031.",
    "achievementsAr": [],
    "achievementsEn": [],
    "clubsHistoryAr": [
      "ألتورّيال (شباب)",
      "سان ميغيل (شباب)",
      "رانيرو (شباب)",
      "إلتشي",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "EF Altorreal (youth)",
      "EF San Miguel (youth)",
      "Ranero CF (youth)",
      "Elche",
      "Atlético Madrid"
    ],
    "clubIds": [
      "elche",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Rodri_Mendoza"
  },
  {
    "id": "juan-musso",
    "nameAr": "خوان موسو",
    "nameEn": "Juan Musso",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "2016-الآن",
    "active": true,
    "bioAr": "حارس مرمى أرجنتيني وُلد في سان نيكولاس دي لوس أرويوس في 6 مايو 1994، تخرّج من أكاديمية راسينغ كلوب ثم لعب لأودينيزي (2018-2021) وأتالانتا (2021-2025). انضم إلى أتلتيكو مدريد معارًا في 27 أغسطس 2024 ثم بشكل دائم في 10 يونيو 2025 بعقد حتى 2028.",
    "bioEn": "Argentine goalkeeper born in San Nicolás de los Arroyos on 6 May 1994 and a Racing Club academy graduate who played for Udinese (2018-2021) and Atalanta (2021-2025). He joined Atlético Madrid on loan on 27 August 2024 and permanently on 10 June 2025 on a contract until 2028.",
    "achievementsAr": [
      "الدوري الأوروبي 2023-2024 مع أتالانتا",
      "كوبا أمريكا 2021 مع الأرجنتين",
      "الدوري الأرجنتيني 2014 مع راسينغ كلوب (حارس ثالث)"
    ],
    "achievementsEn": [
      "2023-24 UEFA Europa League with Atalanta",
      "2021 Copa América with Argentina",
      "2014 Argentine Primera División with Racing Club (third-choice goalkeeper)"
    ],
    "clubsHistoryAr": [
      "راسينغ كلوب",
      "أودينيزي",
      "أتالانتا",
      "أتلتيكو مدريد (إعارة)",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Racing Club",
      "Udinese",
      "Atalanta",
      "Atlético Madrid (loan)",
      "Atlético Madrid"
    ],
    "clubIds": [
      "racing-club",
      "udinese",
      "atalanta",
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Juan_Musso"
  },
  {
    "id": "pablo-barrios",
    "nameAr": "بابلو باريوس",
    "nameEn": "Pablo Barrios",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "أتلتيكو مدريد",
    "clubEn": "Atlético Madrid",
    "clubId": "atletico-madrid",
    "position": {
      "ar": "وسط",
      "en": "Midfielder"
    },
    "era": "2022-الآن",
    "active": true,
    "bioAr": "لاعب وسط إسباني وُلد في مدريد في 15 يونيو 2003، بدأ في مدرسة موراتالاس ثم أكاديمية ريال مدريد حتى 2017 قبل أن ينضم لأكاديمية أتلتيكو مدريد. لعب لأتلتيكو ب ثم ظهر مع الفريق الأول في 29 أكتوبر 2022، وعقده مع النادي حتى 2030.",
    "bioEn": "Spanish midfielder born in Madrid on 15 June 2003 who started at Escuela Deportiva Moratalaz, then Real Madrid's academy until 2017 before joining Atlético Madrid's academy. He played for Atlético Madrid B and debuted for the first team on 29 October 2022, with a contract until 2030.",
    "achievementsAr": [
      "ذهبية أولمبياد باريس 2024 مع إسبانيا"
    ],
    "achievementsEn": [
      "Gold medal at Paris 2024 Olympics with Spain"
    ],
    "clubsHistoryAr": [
      "موراتالاس (شباب)",
      "ريال مدريد (شباب)",
      "أتلتيكو مدريد (شباب)",
      "أتلتيكو مدريد ب",
      "أتلتيكو مدريد"
    ],
    "clubsHistoryEn": [
      "Moratalaz (youth)",
      "Real Madrid (youth)",
      "Atlético Madrid (youth)",
      "Atlético Madrid B",
      "Atlético Madrid"
    ],
    "clubIds": [
      "atletico-madrid"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Pablo_Barrios_(footballer)"
  },
  {
    "id": "andrew-cole",
    "nameAr": "أندرو كول",
    "nameEn": "Andrew Cole",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "نوتنجهام فورست (معتزل)",
    "clubEn": "Nottingham Forest (retired)",
    "clubId": "nottingham-forest",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1989-2008",
    "active": false,
    "bioAr": "مهاجم إنجليزي سجل 187 هدف في الدوري الإنجليزي الممتاز، وكسب 5 ألقاب دوري وثلاثية 1999 مع مانشستر يونايتد، وكان قبلها أحد أبرز هدافي نيوكاسل.",
    "bioEn": "An English striker who scored 187 Premier League goals and won five league titles and the 1999 Treble with Manchester United, after starring for Newcastle United.",
    "achievementsAr": [
      "5 ألقاب الدوري الإنجليزي الممتاز (1996 و1997 و1999 و2000 و2001) مع مانشستر يونايتد",
      "لقب دوري أبطال أوروبا 1999 مع مانشستر يونايتد",
      "187 هدف في الدوري الإنجليزي الممتاز",
      "جائزة أفضل لاعب شاب من رابطة اللاعبين المحترفين 1994"
    ],
    "achievementsEn": [
      "Premier League titles 1996, 1997, 1999, 2000 and 2001 with Manchester United",
      "UEFA Champions League title 1999 with Manchester United",
      "187 Premier League goals",
      "PFA Young Player of the Year 1994"
    ],
    "clubsHistoryAr": [
      "آرسنال",
      "فولهام",
      "بريستول سيتي",
      "نيوكاسل يونايتد",
      "مانشستر يونايتد",
      "بلاكبيرن روفرز",
      "مانشستر سيتي",
      "بورتسموث",
      "برمنجهام سيتي",
      "سندرلاند",
      "بيرنلي",
      "نوتنجهام فورست"
    ],
    "clubsHistoryEn": [
      "Arsenal",
      "Fulham",
      "Bristol City",
      "Newcastle United",
      "Manchester United",
      "Blackburn Rovers",
      "Manchester City",
      "Portsmouth",
      "Birmingham City",
      "Sunderland",
      "Burnley",
      "Nottingham Forest"
    ],
    "clubIds": [
      "arsenal",
      "fulham",
      "bristol-city",
      "newcastle-united",
      "manchester-united",
      "blackburn-rovers",
      "manchester-city",
      "portsmouth",
      "birmingham-city",
      "sunderland",
      "burnley",
      "nottingham-forest"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Andy_Cole"
  },
  {
    "id": "jermain-defoe",
    "nameAr": "جيرمين ديفو",
    "nameEn": "Jermain Defoe",
    "nationalityAr": "إنجليزي",
    "nationalityEn": "English",
    "clubAr": "سندرلاند (معتزل)",
    "clubEn": "Sunderland (retired)",
    "clubId": "sunderland",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1999-2022",
    "active": false,
    "bioAr": "مهاجم إنجليزي سجل 162 هدف في الدوري الإنجليزي الممتاز ولعب في كأس العالم 2010 ويورو 2012، واعتزل في مارس 2022 بعد مسيرة 22 سنة.",
    "bioEn": "An English striker who scored 162 Premier League goals, played at the 2010 World Cup and Euro 2012, and retired in March 2022 after a 22-year career.",
    "achievementsAr": [
      "كأس الرابطة الإنجليزية 2008 مع توتنهام هوتسبير",
      "لقب الدوري الاسكتلندي الممتاز 2021 مع رينجرز",
      "162 هدف في الدوري الإنجليزي الممتاز",
      "20 هدف في 57 مباراة مع منتخب إنجلترا"
    ],
    "achievementsEn": [
      "League Cup 2008 with Tottenham Hotspur",
      "Scottish Premiership title 2021 with Rangers",
      "162 Premier League goals",
      "20 goals in 57 appearances for England"
    ],
    "clubsHistoryAr": [
      "وست هام يونايتد",
      "بورنموث",
      "توتنهام هوتسبير",
      "بورتسموث",
      "تورونتو",
      "سندرلاند",
      "رينجرز"
    ],
    "clubsHistoryEn": [
      "West Ham United",
      "Bournemouth",
      "Tottenham Hotspur",
      "Portsmouth",
      "Toronto FC",
      "Sunderland",
      "Rangers"
    ],
    "clubIds": [
      "west-ham-united",
      "bournemouth",
      "tottenham",
      "portsmouth",
      "sunderland",
      "rangers"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": ""
  },
  {
    "id": "telmo-zarra",
    "nameAr": "تيلمو زارا",
    "nameEn": "Telmo Zarra",
    "nationalityAr": "إسباني",
    "nationalityEn": "Spanish",
    "clubAr": "باراكالدو (متوفى)",
    "clubEn": "Barakaldo (deceased)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1939-1957",
    "active": false,
    "bioAr": "مهاجم إسباني أسطوري لأتلتيك بيلباو (1940-1955)، سجل 251 هدف في الدوري وظل رقمه القياسي قرابة 6 عقود قبل ما يكسره ميسي.",
    "bioEn": "A legendary Spanish forward for Athletic Bilbao (1940-1955) who scored 251 league goals, a record that stood for nearly six decades until Lionel Messi broke it.",
    "achievementsAr": [
      "لقب الدوري الإسباني 1943 مع أتلتيك بيلباو",
      "جائزة بيتشيتشي (هداف الدوري) 6 مرات",
      "الهداف التاريخي لكأس الملك (81 هدف)",
      "251 هدف في الدوري الإسباني",
      "20 هدف في 20 مباراة مع منتخب إسبانيا"
    ],
    "achievementsEn": [
      "La Liga title 1943 with Athletic Bilbao",
      "Pichichi Trophy (La Liga top scorer) 6 times",
      "All-time top scorer in the Copa del Rey (81 goals)",
      "251 La Liga goals",
      "20 goals in 20 appearances for Spain"
    ],
    "clubsHistoryAr": [
      "إرانديو",
      "أتلتيك بيلباو",
      "إندوتشو",
      "باراكالدو"
    ],
    "clubsHistoryEn": [
      "Erandio",
      "Athletic Bilbao",
      "Indautxu",
      "Barakaldo"
    ],
    "clubIds": [
      "athletic-bilbao"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Telmo_Zarra"
  },
  {
    "id": "silvio-piola",
    "nameAr": "سيلفيو بيولا",
    "nameEn": "Silvio Piola",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "نوفارا (متوفى)",
    "clubEn": "Novara (deceased)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1929-1954",
    "active": false,
    "bioAr": "مهاجم إيطالي هو الهداف التاريخي للدوري الإيطالي بـ274 هدف، وساهم في فوز إيطاليا بكأس العالم 1938.",
    "bioEn": "An Italian forward and the all-time Serie A top scorer with 274 goals, who helped Italy win the 1938 World Cup.",
    "achievementsAr": [
      "كأس العالم 1938 مع منتخب إيطاليا",
      "هداف الدوري الإيطالي 1937 و1943 مع لاتسيو",
      "الهداف التاريخي للدوري الإيطالي (274 هدف)",
      "30 هدف في 34 مباراة مع منتخب إيطاليا"
    ],
    "achievementsEn": [
      "FIFA World Cup 1938 with Italy",
      "Serie A top scorer 1937 and 1943 with Lazio",
      "All-time Serie A top scorer (274 goals)",
      "30 goals in 34 appearances for Italy"
    ],
    "clubsHistoryAr": [
      "برو فيرشيللي",
      "لاتسيو",
      "تورينو",
      "يوفنتوس",
      "نوفارا"
    ],
    "clubsHistoryEn": [
      "Pro Vercelli",
      "Lazio",
      "Torino",
      "Juventus",
      "Novara"
    ],
    "clubIds": [
      "lazio",
      "torino",
      "juventus"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Silvio_Piola"
  },
  {
    "id": "gunnar-nordahl",
    "nameAr": "جونار نوردال",
    "nameEn": "Gunnar Nordahl",
    "nationalityAr": "سويدي",
    "nationalityEn": "Swedish",
    "clubAr": "روما (متوفى)",
    "clubEn": "Roma (deceased)",
    "clubId": "roma",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1937-1958",
    "active": false,
    "bioAr": "مهاجم سويدي ضمن ثلاثي ميلان الشهير (جري-نو-لي)، هداف الدوري الإيطالي 5 مرات، وسجل 225 هدف في الدوري (210 مع ميلان و15 مع روما).",
    "bioEn": "A Swedish forward in AC Milan's celebrated Gre-No-Li trio, five-time Serie A top scorer, with 225 league goals (210 for Milan and 15 for Roma).",
    "achievementsAr": [
      "لقب الدوري الإيطالي 1951 و1955 مع ميلان",
      "هداف الدوري الإيطالي 5 مرات (1950 و1951 و1953 و1954 و1955)",
      "ذهبية أولمبياد 1948 مع السويد (هداف البطولة مناصفة)",
      "225 هدف في الدوري الإيطالي"
    ],
    "achievementsEn": [
      "Serie A titles 1951 and 1955 with AC Milan",
      "Serie A top scorer 5 times (1950, 1951, 1953, 1954 and 1955)",
      "Olympic gold medal 1948 with Sweden (joint top scorer)",
      "225 Serie A goals"
    ],
    "clubsHistoryAr": [
      "هورنفورس",
      "ديجيرفورس",
      "نورشوبينج",
      "ميلان",
      "روما"
    ],
    "clubsHistoryEn": [
      "Hörnefors",
      "Degerfors",
      "IFK Norrköping",
      "AC Milan",
      "Roma"
    ],
    "clubIds": [
      "ac-milan",
      "roma"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Gunnar_Nordahl"
  },
  {
    "id": "jose-altafini",
    "nameAr": "جوزيه ألطافيني",
    "nameEn": "José Altafini",
    "nationalityAr": "إيطالي-برازيلي",
    "nationalityEn": "Italian-Brazilian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1955-1980",
    "active": false,
    "bioAr": "مهاجم برازيلي المولد (لقبه ماتسولا في البرازيل) لعب لمنتخب البرازيل ثم إيطاليا، وسجل 216 هدف في الدوري الإيطالي مع ميلان ونابولي ويوفنتوس.",
    "bioEn": "A Brazilian-born forward (nicknamed Mazzola in Brazil) who represented both Brazil and Italy and scored 216 Serie A goals for Milan, Napoli and Juventus.",
    "achievementsAr": [
      "كأس العالم 1958 مع منتخب البرازيل",
      "كأس أوروبا للأندية 1963 مع ميلان",
      "لقب الدوري الإيطالي 1959 و1962 مع ميلان",
      "لقب الدوري الإيطالي 1973 و1975 مع يوفنتوس",
      "216 هدف في الدوري الإيطالي"
    ],
    "achievementsEn": [
      "FIFA World Cup 1958 with Brazil",
      "European Cup 1963 with AC Milan",
      "Serie A titles 1959 and 1962 with AC Milan",
      "Serie A titles 1973 and 1975 with Juventus",
      "216 Serie A goals"
    ],
    "clubsHistoryAr": [
      "بالميراس",
      "ميلان",
      "نابولي",
      "يوفنتوس",
      "كياسو",
      "مندريزيوستار"
    ],
    "clubsHistoryEn": [
      "Palmeiras",
      "AC Milan",
      "Napoli",
      "Juventus",
      "Chiasso",
      "Mendrisiostar"
    ],
    "clubIds": [
      "palmeiras",
      "ac-milan",
      "napoli",
      "juventus"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": ""
  },
  {
    "id": "giuseppe-signori",
    "nameAr": "جوزيبي سيجناتوري",
    "nameEn": "Giuseppe Signori",
    "nationalityAr": "إيطالي",
    "nationalityEn": "Italian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1984-2000s",
    "active": false,
    "bioAr": "مهاجم إيطالي اشتهر مع لاتسيو في التسعينات، كسب لقب هداف الدوري 3 مرات وسجل 188 هدف في الدوري الإيطالي.",
    "bioEn": "An Italian striker best known for Lazio in the 1990s, three-time Serie A top scorer with 188 Serie A goals.",
    "achievementsAr": [
      "هداف الدوري الإيطالي 3 مرات (1993 و1994 و1996 والأخير مناصفة)",
      "188 هدف في الدوري الإيطالي"
    ],
    "achievementsEn": [
      "Serie A top scorer 3 times (1993, 1994 and 1996, the last shared)",
      "188 Serie A goals"
    ],
    "clubsHistoryAr": [
      "ليفي",
      "بياتشينزا",
      "ترينتو",
      "فوجيا",
      "لاتسيو",
      "سامبدوريا",
      "بولونيا"
    ],
    "clubsHistoryEn": [
      "Leffe",
      "Piacenza",
      "Trento",
      "Foggia",
      "Lazio",
      "Sampdoria",
      "Bologna"
    ],
    "clubIds": [
      "lazio",
      "sampdoria",
      "bologna"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Giuseppe_Signori"
  },
  {
    "id": "klaus-fischer",
    "nameAr": "كلاوس فيشر",
    "nameEn": "Klaus Fischer",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بوخوم (معتزل)",
    "clubEn": "VfL Bochum (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1968-1988",
    "active": false,
    "bioAr": "مهاجم ألماني اشتهر بالتسديدات الخلفية المقصية مع شالكه، وسجل 268 هدف في الدوري الألماني، ولعب لـ1860 ميونخ وشالكه وكولن وبوخوم.",
    "bioEn": "A German striker famed for acrobatic overhead kicks at Schalke, with 268 Bundesliga goals for 1860 Munich, Schalke, Köln and Bochum.",
    "achievementsAr": [
      "كأس ألمانيا 1972 مع شالكه 04",
      "هداف الدوري الألماني 1976 (29 هدف)",
      "268 هدف في الدوري الألماني",
      "32 هدف في 45 مباراة مع منتخب ألمانيا الغربية"
    ],
    "achievementsEn": [
      "German Cup 1972 with Schalke 04",
      "Bundesliga top scorer 1976 (29 goals)",
      "268 Bundesliga goals",
      "32 goals in 45 appearances for West Germany"
    ],
    "clubsHistoryAr": [
      "1860 ميونخ",
      "شالكه 04",
      "كولن",
      "بوخوم"
    ],
    "clubsHistoryEn": [
      "1860 Munich",
      "Schalke 04",
      "1. FC Köln",
      "VfL Bochum"
    ],
    "clubIds": [
      "1860-munich",
      "schalke-04",
      "koln"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Klaus_Fischer"
  },
  {
    "id": "jupp-heynckes",
    "nameAr": "يوب هاينكس",
    "nameEn": "Jupp Heynckes",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "بوروسيا مونشنجلادباخ (معتزل)",
    "clubEn": "Borussia Mönchengladbach (retired)",
    "clubId": "borussia-monchengladbach",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1962-1978",
    "active": false,
    "bioAr": "مهاجم ألماني من جيل بوروسيا مونشنجلادباخ الذهبي، سجل 220 هدف في الدوري الألماني، وكسب يورو 1972 وكأس العالم 1974 مع ألمانيا الغربية، وبعدين بقى مدرب كبير.",
    "bioEn": "A German forward of Borussia Mönchengladbach's golden era with 220 Bundesliga goals, who won Euro 1972 and the 1974 World Cup with West Germany before becoming a top coach.",
    "achievementsAr": [
      "4 ألقاب الدوري الألماني (1971 و1975 و1976 و1977) مع بوروسيا مونشنجلادباخ",
      "كأس الاتحاد الأوروبي 1975 مع بوروسيا مونشنجلادباخ",
      "كأس ألمانيا 1973 مع بوروسيا مونشنجلادباخ",
      "يورو 1972 وكأس العالم 1974 مع ألمانيا الغربية",
      "هداف الدوري الألماني 1974 (مناصفة) و1975",
      "220 هدف في الدوري الألماني"
    ],
    "achievementsEn": [
      "Bundesliga titles 1971, 1975, 1976 and 1977 with Borussia Mönchengladbach",
      "UEFA Cup 1975 with Borussia Mönchengladbach",
      "DFB-Pokal 1973 with Borussia Mönchengladbach",
      "UEFA European Championship 1972 and FIFA World Cup 1974 with West Germany",
      "Bundesliga top scorer 1974 (shared) and 1975",
      "220 Bundesliga goals"
    ],
    "clubsHistoryAr": [
      "بوروسيا مونشنجلادباخ",
      "هانوفر 96"
    ],
    "clubsHistoryEn": [
      "Borussia Mönchengladbach",
      "Hannover 96"
    ],
    "clubIds": [
      "borussia-monchengladbach",
      "hannover-96"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Jupp_Heynckes"
  },
  {
    "id": "manfred-burgsmuller",
    "nameAr": "مانفريد بورجميلر",
    "nameEn": "Manfred Burgsmüller",
    "nationalityAr": "ألماني",
    "nationalityEn": "German",
    "clubAr": "فيردر بريمن (متوفى)",
    "clubEn": "Werder Bremen (deceased)",
    "clubId": "werder-bremen",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1969-1990",
    "active": false,
    "bioAr": "مهاجم ألماني (1949-2019) سجل 213 هدف في الدوري الألماني، وهو الهداف التاريخي لبوروسيا دورتموند في الدوري بـ135 هدف، وكسب الدوري مع فيردر بريمن 1988.",
    "bioEn": "A German forward (1949-2019) with 213 Bundesliga goals, Borussia Dortmund's all-time Bundesliga top scorer (135), who won the 1988 league title with Werder Bremen.",
    "achievementsAr": [
      "لقب الدوري الألماني 1988 مع فيردر بريمن",
      "213 هدف في الدوري الألماني",
      "الهداف التاريخي لدورتموند في الدوري الألماني (135 هدف)",
      "هداف الدوري الألماني الثاني 1985 (29 هدف)"
    ],
    "achievementsEn": [
      "Bundesliga title 1988 with Werder Bremen",
      "213 Bundesliga goals",
      "Borussia Dortmund's all-time Bundesliga top scorer (135 goals)",
      "2. Bundesliga top scorer 1985 (29 goals)"
    ],
    "clubsHistoryAr": [
      "روت فايس إيسن",
      "باير أوردينجن",
      "بوروسيا دورتموند",
      "نورنبيرج",
      "روت فايس أوبرهاوزن",
      "فيردر بريمن"
    ],
    "clubsHistoryEn": [
      "Rot-Weiss Essen",
      "Bayer Uerdingen",
      "Borussia Dortmund",
      "1. FC Nürnberg",
      "Rot-Weiß Oberhausen",
      "Werder Bremen"
    ],
    "clubIds": [
      "borussia-dortmund",
      "nurnberg",
      "werder-bremen"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Manfred_Burgsmüller"
  },
  {
    "id": "delio-onnis",
    "nameAr": "ديليو أونيس",
    "nameEn": "Delio Onnis",
    "nationalityAr": "أرجنتيني",
    "nationalityEn": "Argentine",
    "clubAr": "تولون (معتزل)",
    "clubEn": "Toulon (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1971-1986",
    "active": false,
    "bioAr": "مهاجم أرجنتيني مولود في إيطاليا، هو الهداف التاريخي للدوري الفرنسي بـ299 هدف، ولعب لريمس وموناكو وتور وتولون.",
    "bioEn": "An Argentine striker born in Italy, the all-time Ligue 1 top scorer with 299 goals, who played for Reims, Monaco, Tours and Toulon.",
    "achievementsAr": [
      "لقب الدوري الفرنسي 1978 مع موناكو",
      "الهداف التاريخي للدوري الفرنسي (299 هدف)",
      "هداف الدوري الفرنسي 5 مرات (1975 و1980 و1981 و1982 و1984)"
    ],
    "achievementsEn": [
      "Ligue 1 title 1978 with AS Monaco",
      "All-time Ligue 1 top scorer (299 goals)",
      "Ligue 1 top scorer 5 times (1975, 1980, 1981, 1982 and 1984)"
    ],
    "clubsHistoryAr": [
      "ريمس",
      "موناكو",
      "تور",
      "تولون"
    ],
    "clubsHistoryEn": [
      "Reims",
      "Monaco",
      "Tours",
      "Toulon"
    ],
    "clubIds": [
      "reims",
      "monaco"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Delio_Onnis"
  },
  {
    "id": "bernard-lacombe",
    "nameAr": "برنار لاكومب",
    "nameEn": "Bernard Lacombe",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "بوردو (متوفى)",
    "clubEn": "Bordeaux (deceased)",
    "clubId": "bordeaux",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1969-1987",
    "active": false,
    "bioAr": "مهاجم فرنسي (1952-2025) سجل 255 هدف في الدوري الفرنسي مع ليون وسانت إتيان وبوردو، وكسب يورو 1984 مع فرنسا.",
    "bioEn": "A French striker (1952-2025) with 255 Ligue 1 goals for Lyon, Saint-Étienne and Bordeaux, who won Euro 1984 with France.",
    "achievementsAr": [
      "يورو 1984 مع منتخب فرنسا",
      "3 ألقاب الدوري الفرنسي (1984 و1985 و1987) مع بوردو",
      "كأس فرنسا 1973 مع ليون",
      "كأس فرنسا 1986 و1987 مع بوردو",
      "255 هدف في الدوري الفرنسي"
    ],
    "achievementsEn": [
      "UEFA European Championship 1984 with France",
      "Ligue 1 titles 1984, 1985 and 1987 with Bordeaux",
      "Coupe de France 1973 with Lyon",
      "Coupe de France 1986 and 1987 with Bordeaux",
      "255 Ligue 1 goals"
    ],
    "clubsHistoryAr": [
      "ليون",
      "سانت إتيان",
      "بوردو"
    ],
    "clubsHistoryEn": [
      "Lyon",
      "Saint-Étienne",
      "Bordeaux"
    ],
    "clubIds": [
      "lyon",
      "saint-etienne",
      "bordeaux"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Bernard_Lacombe"
  },
  {
    "id": "herve-revelli",
    "nameAr": "هيرفي ريفيلي",
    "nameEn": "Hervé Revelli",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "نيس (معتزل)",
    "clubEn": "Nice (retired)",
    "clubId": "nice",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1964-1978",
    "active": false,
    "bioAr": "مهاجم فرنسي سجل 216 هدف في الدوري الفرنسي، وكسب 7 ألقاب دوري مع سانت إتيان، ولعب 30 مباراة مع منتخب فرنسا.",
    "bioEn": "A French striker with 216 Ligue 1 goals and seven league titles with Saint-Étienne, capped 30 times by France.",
    "achievementsAr": [
      "7 ألقاب الدوري الفرنسي (1967 و1968 و1969 و1970 و1974 و1975 و1976) مع سانت إتيان",
      "كأس فرنسا 1968 و1970 و1974 و1975 و1977 مع سانت إتيان",
      "هداف الدوري الفرنسي 1967 و1970",
      "216 هدف في الدوري الفرنسي"
    ],
    "achievementsEn": [
      "Ligue 1 titles 1967, 1968, 1969, 1970, 1974, 1975 and 1976 with Saint-Étienne",
      "Coupe de France 1968, 1970, 1974, 1975 and 1977 with Saint-Étienne",
      "Ligue 1 top scorer 1967 and 1970",
      "216 Ligue 1 goals"
    ],
    "clubsHistoryAr": [
      "سانت إتيان",
      "نيس"
    ],
    "clubsHistoryEn": [
      "Saint-Étienne",
      "Nice"
    ],
    "clubIds": [
      "saint-etienne",
      "nice"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hervé_Revelli"
  },
  {
    "id": "roger-courtois",
    "nameAr": "روجيه كورتوا",
    "nameEn": "Roger Courtois",
    "nationalityAr": "فرنسي",
    "nationalityEn": "French",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1933-1956",
    "active": false,
    "bioAr": "مهاجم فرنسي مولود في جنيف لأبوين فرنسيين، سجل 210 هدف في الدوري الفرنسي (209 مع سوشو)، ولعب كأس العالم 1934 و1938.",
    "bioEn": "A French forward born in Geneva to French parents, with 210 Ligue 1 goals (209 for Sochaux), who played at the 1934 and 1938 World Cups.",
    "achievementsAr": [
      "لقب الدوري الفرنسي 1935 و1938 مع سوشو",
      "كأس فرنسا 1937 مع سوشو",
      "هداف الدوري الفرنسي 1936 و1939",
      "210 هدف في الدوري الفرنسي",
      "المشاركة في كأس العالم 1934 و1938 مع فرنسا"
    ],
    "achievementsEn": [
      "Ligue 1 titles 1935 and 1938 with Sochaux",
      "Coupe de France 1937 with Sochaux",
      "Ligue 1 top scorer 1936 and 1939",
      "210 Ligue 1 goals",
      "Played at the 1934 and 1938 World Cups with France"
    ],
    "clubsHistoryAr": [
      "سوشو",
      "تروا"
    ],
    "clubsHistoryEn": [
      "Sochaux",
      "Troyes"
    ],
    "clubIds": [
      "sochaux"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Roger_Courtois"
  },
  {
    "id": "fernando-peyroteo",
    "nameAr": "فرناندو بيروتيو",
    "nameEn": "Fernando Peyroteo",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "سبورتينج لشبونة (متوفى)",
    "clubEn": "Sporting CP (deceased)",
    "clubId": "sporting-cp",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1937-1949",
    "active": false,
    "bioAr": "مهاجم برتغالي مولود في أنجولا (1918-1978)، الهداف التاريخي للدوري البرتغالي بـ332 هدف في 197 مباراة مع سبورتينج لشبونة، ضمن الخمسة كمنجات.",
    "bioEn": "A Portuguese striker born in Angola (1918-1978), the Primeira Liga's all-time top scorer with 332 goals in 197 matches for Sporting CP, one of the 'Five Violins'.",
    "achievementsAr": [
      "5 ألقاب الدوري البرتغالي مع سبورتينج لشبونة",
      "هداف الدوري البرتغالي 6 مرات",
      "332 هدف في الدوري البرتغالي",
      "9 أهداف في مباراة دوري واحدة ضد ليسا (1942)",
      "14 هدف في 20 مباراة مع منتخب البرتغال"
    ],
    "achievementsEn": [
      "5 Primeira Liga titles with Sporting CP",
      "Primeira Liga top scorer 6 times",
      "332 Primeira Liga goals",
      "9 goals in a single league match against Leça (1942)",
      "14 goals in 20 appearances for Portugal"
    ],
    "clubsHistoryAr": [
      "سبورتينج لواندا",
      "سبورتينج لشبونة"
    ],
    "clubsHistoryEn": [
      "Sporting Clube de Luanda",
      "Sporting CP"
    ],
    "clubIds": [
      "sporting-cp"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Fernando_Peyroteo"
  },
  {
    "id": "fernando-gomes",
    "nameAr": "فرناندو جوميز",
    "nameEn": "Fernando Gomes",
    "nationalityAr": "برتغالي",
    "nationalityEn": "Portuguese",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1974-1990s",
    "active": false,
    "bioAr": "مهاجم برتغالي (مواليد بورتو 1956) سجل 319 هدف في الدوري البرتغالي، وكسب الحذاء الذهبي الأوروبي مرتين (1983 و1985) ولعب يورو 1984 وكأس العالم 1986.",
    "bioEn": "A Portuguese striker (born in Porto, 1956) with 319 Primeira Liga goals and two European Golden Shoes (1983 and 1985), who played at Euro 1984 and the 1986 World Cup.",
    "achievementsAr": [
      "الحذاء الذهبي الأوروبي 1983 و1985",
      "هداف الدوري البرتغالي 6 مرات",
      "319 هدف في الدوري البرتغالي",
      "كأس أوروبا للأندية 1987 مع بورتو",
      "المشاركة في يورو 1984 وكأس العالم 1986 مع البرتغال"
    ],
    "achievementsEn": [
      "European Golden Shoe 1983 and 1985",
      "Primeira Liga top scorer 6 times",
      "319 Primeira Liga goals",
      "European Cup 1987 with Porto",
      "Played at Euro 1984 and the 1986 World Cup with Portugal"
    ],
    "clubsHistoryAr": [
      "بورتو",
      "سبورتينج خيخون",
      "سبورتينج لشبونة"
    ],
    "clubsHistoryEn": [
      "Porto",
      "Sporting Gijón",
      "Sporting CP"
    ],
    "clubIds": [
      "porto",
      "sporting-gijon",
      "sporting-cp"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Fernando_Gomes_(Portuguese_footballer)"
  },
  {
    "id": "hassan-el-shazly",
    "nameAr": "حسن الشاذلي",
    "nameEn": "Hassan El-Shazly",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "ترسانة (متوفى)",
    "clubEn": "Tersana (deceased)",
    "clubId": "tersana",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1959-1978",
    "active": false,
    "bioAr": "مهاجم مصري (1943-2015) قضى مسيرته كلها مع ترسانة، وهو هداف الدوري المصري التاريخي، وأكتر مصري تسجيلاً في أمم أفريقيا (12 هدف).",
    "bioEn": "An Egyptian striker (1943-2015) who spent his whole career at Tersana, the Egyptian league's all-time top scorer and Egypt's top scorer at the Africa Cup of Nations (12 goals).",
    "achievementsAr": [
      "لقب الدوري المصري 1963 مع ترسانة",
      "كأس مصر 1965 و1967 مع ترسانة",
      "هداف الدوري المصري 4 مرات (1963 و1965 و1966 و1975)",
      "هداف كأس أمم أفريقيا 1963 (6 أهداف)",
      "12 هدف في كأس أمم أفريقيا، أكتر هداف مصري في البطولة"
    ],
    "achievementsEn": [
      "Egyptian Premier League title 1963 with Tersana",
      "Egypt Cup 1965 and 1967 with Tersana",
      "Egyptian league top scorer 4 times (1963, 1965, 1966 and 1975)",
      "Top scorer at the 1963 Africa Cup of Nations (6 goals)",
      "12 goals in the Africa Cup of Nations, Egypt's all-time top scorer in the tournament"
    ],
    "clubsHistoryAr": [
      "ترسانة"
    ],
    "clubsHistoryEn": [
      "Tersana"
    ],
    "clubIds": [
      "tersana"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Hassan_El-Shazly"
  },
  {
    "id": "abdallah-el-said",
    "nameAr": "عبد الله السعيد",
    "nameEn": "Abdallah El-Said",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "الزمالك",
    "clubEn": "Zamalek",
    "clubId": "zamalek",
    "position": {
      "ar": "لاعب وسط مهاجم",
      "en": "Attacking Midfielder"
    },
    "era": "2004-الآن",
    "active": true,
    "bioAr": "لاعب وسط مهاجم مصري (مواليد 1985) لعب للإسماعيلي والأهلي وبيراميدز والزمالك، وهو صاحب أكتر عدد مباريات في تاريخ الدوري المصري وتالت هداف تاريخي له.",
    "bioEn": "An Egyptian attacking midfielder (born 1985) who has played for Ismaily, Al Ahly, Pyramids and Zamalek, the Egyptian league's record appearance holder and its third all-time top scorer.",
    "achievementsAr": [
      "دوري أبطال أفريقيا 2012 و2013 مع الأهلي",
      "ألقاب الدوري المصري 2014 و2016 و2017 مع الأهلي",
      "لقب الدوري المصري 2026 مع الزمالك",
      "كأس الكونفدرالية الأفريقية 2024 مع الزمالك",
      "هداف الدوري المصري 2020 (17 هدف) مع بيراميدز"
    ],
    "achievementsEn": [
      "CAF Champions League titles 2012 and 2013 with Al Ahly",
      "Egyptian Premier League titles 2014, 2016 and 2017 with Al Ahly",
      "Egyptian Premier League title 2026 with Zamalek",
      "CAF Confederation Cup 2024 with Zamalek",
      "Egyptian league top scorer 2020 (17 goals) with Pyramids"
    ],
    "clubsHistoryAr": [
      "الإسماعيلي",
      "الأهلي",
      "كوبس",
      "الأهلي السعودي",
      "بيراميدز",
      "الزمالك"
    ],
    "clubsHistoryEn": [
      "Ismaily",
      "Al Ahly",
      "KuPS",
      "Al-Ahli Saudi",
      "Pyramids",
      "Zamalek"
    ],
    "clubIds": [
      "ismaily",
      "al-ahly",
      "pyramids",
      "zamalek"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Abdallah_El_Said"
  },
  {
    "id": "el-sayed-el-dhizui",
    "nameAr": "السيد الضظوي",
    "nameEn": "El-Sayed El-Dhizui",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "المصري (متوفى)",
    "clubEn": "Al Masry (deceased)",
    "clubId": "al-masry",
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1943-1964",
    "active": false,
    "bioAr": "مهاجم مصري (1926-1991) من بورسعيد، لعب للمصري والأهلي، وسجل 112 هدف في الدوري المصري، وشارك في أولمبياد 1948 و1952.",
    "bioEn": "An Egyptian forward (1926-1991) from Port Said who played for Al Masry and Al Ahly, scored 112 Egyptian league goals and competed at the 1948 and 1952 Olympics.",
    "achievementsAr": [
      "ألقاب الدوري المصري 1957 و1958 و1959 و1961 مع الأهلي",
      "هداف الدوري المصري 4 مرات (1949 و1950 و1951 و1959)",
      "ذهبية دورة ألعاب البحر المتوسط 1955 مع مصر",
      "112 هدف في الدوري المصري"
    ],
    "achievementsEn": [
      "Egyptian Premier League titles 1957, 1958, 1959 and 1961 with Al Ahly",
      "Egyptian league top scorer 4 times (1949, 1950, 1951 and 1959)",
      "Mediterranean Games gold medal 1955 with Egypt",
      "112 Egyptian league goals"
    ],
    "clubsHistoryAr": [
      "المصري",
      "الأهلي"
    ],
    "clubsHistoryEn": [
      "Al Masry",
      "Al Ahly"
    ],
    "clubIds": [
      "al-masry",
      "al-ahly"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/El-Sayed_El-Dhizui"
  },
  {
    "id": "laurent-pokou",
    "nameAr": "لوران بوكو",
    "nameEn": "Laurent Pokou",
    "nationalityAr": "إيفواري",
    "nationalityEn": "Ivorian",
    "clubAr": "أسيك ميموزا (متوفى)",
    "clubEn": "ASEC Mimosas (deceased)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Forward"
    },
    "era": "1960s-1980",
    "active": false,
    "bioAr": "مهاجم إيفواري (1947-2016)، هداف كأس أمم أفريقيا 1968 و1970، وسجل 14 هدف في البطولة ودخل التاريخ بخمسة أهداف في مباراة واحدة.",
    "bioEn": "An Ivorian forward (1947-2016), top scorer at the 1968 and 1970 Africa Cup of Nations, with 14 goals in the tournament and a record five in a single match.",
    "achievementsAr": [
      "هداف كأس أمم أفريقيا 1968 (6 أهداف) و1970 (8 أهداف)",
      "14 هدف في كأس أمم أفريقيا (رقم قياسي حتى 2008)",
      "5 أهداف في مباراة واحدة بكأس أمم أفريقيا ضد إثيوبيا 1970"
    ],
    "achievementsEn": [
      "Africa Cup of Nations top scorer 1968 (6 goals) and 1970 (8 goals)",
      "14 goals in the Africa Cup of Nations (a record until 2008)",
      "5 goals in a single Africa Cup of Nations match, against Ethiopia in 1970"
    ],
    "clubsHistoryAr": [
      "أسيك ميموزا",
      "رين",
      "نانسي"
    ],
    "clubsHistoryEn": [
      "ASEC Mimosas",
      "Rennes",
      "Nancy"
    ],
    "clubIds": [
      "rennes",
      "nancy"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": ""
  },
  {
    "id": "moustafa-reyadh",
    "nameAr": "مصطفى رياض",
    "nameEn": "Moustafa Reyadh",
    "nationalityAr": "مصري",
    "nationalityEn": "Egyptian",
    "clubAr": "ترسانة (متوفى)",
    "clubEn": "Tersana (deceased)",
    "clubId": "tersana",
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1958-1976",
    "active": false,
    "bioAr": "مهاجم مصري (1941-2026) لعب معظم مسيرته مع ترسانة، وسجل 123 هدف في الدوري المصري، وكان تاني هداف في أولمبياد طوكيو 1964 بـ8 أهداف.",
    "bioEn": "An Egyptian striker (1941-2026) who spent most of his career at Tersana, scored 123 Egyptian league goals and was the second-highest scorer at the 1964 Tokyo Olympics with eight goals.",
    "achievementsAr": [
      "لقب الدوري المصري 1963 مع ترسانة",
      "كأس مصر 1965 و1967 مع ترسانة",
      "هداف الدوري المصري 1962 و1964",
      "تاني هداف في أولمبياد 1964 (8 أهداف)",
      "123 هدف في الدوري المصري"
    ],
    "achievementsEn": [
      "Egyptian Premier League title 1963 with Tersana",
      "Egypt Cup 1965 and 1967 with Tersana",
      "Egyptian league top scorer 1962 and 1964",
      "Second-highest scorer at the 1964 Olympics (8 goals)",
      "123 Egyptian league goals"
    ],
    "clubsHistoryAr": [
      "ترسانة",
      "السالمية"
    ],
    "clubsHistoryEn": [
      "Tersana",
      "Al-Salmiya"
    ],
    "clubIds": [
      "tersana"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Moustafa_Reyadh"
  },
  {
    "id": "dimitar-berbatov",
    "nameAr": "ديميتار بيرباتوف",
    "nameEn": "Dimitar Berbatov",
    "nationalityAr": "بلغاري",
    "nationalityEn": "Bulgarian",
    "clubAr": "معتزل",
    "clubEn": "Retired",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "1990s-2018",
    "active": false,
    "bioAr": "مهاجم بلغاري (مواليد 1981) لعب لباير ليفركوزن وتوتنهام ومانشستر يونايتد، وكسب لقبين في الدوري الإنجليزي، وهو من أصحاب رقم 5 أهداف في مباراة دوري واحدة.",
    "bioEn": "A Bulgarian striker (born 1981) who played for Bayer Leverkusen, Tottenham and Manchester United, won two Premier League titles, and is one of the joint holders of the five-goals-in-a-match record.",
    "achievementsAr": [
      "لقب الدوري الإنجليزي الممتاز 2009 و2011 مع مانشستر يونايتد",
      "الحذاء الذهبي للدوري الإنجليزي الممتاز 2011 (مناصفة مع كارلوس تيفيز)",
      "5 أهداف في مباراة واحدة بالدوري الإنجليزي (ضد بلاكبيرن، نوفمبر 2010)",
      "الهداف التاريخي المشترك لمنتخب بلغاريا (48 هدف)"
    ],
    "achievementsEn": [
      "Premier League titles 2009 and 2011 with Manchester United",
      "Premier League Golden Boot 2011 (shared with Carlos Tevez)",
      "Five goals in a single Premier League match (v Blackburn, November 2010)",
      "Joint all-time top scorer for Bulgaria (48 goals)"
    ],
    "clubsHistoryAr": [
      "سسكا صوفيا",
      "باير ليفركوزن",
      "توتنهام هوتسبير",
      "مانشستر يونايتد",
      "فولهام",
      "موناكو",
      "باوك",
      "كيرالا بلاسترز"
    ],
    "clubsHistoryEn": [
      "CSKA Sofia",
      "Bayer Leverkusen",
      "Tottenham Hotspur",
      "Manchester United",
      "Fulham",
      "Monaco",
      "PAOK",
      "Kerala Blasters"
    ],
    "clubIds": [
      "bayer-leverkusen",
      "tottenham",
      "manchester-united",
      "fulham",
      "monaco"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Dimitar_Berbatov"
  },
  {
    "id": "shane-long",
    "nameAr": "شين لونج",
    "nameEn": "Shane Long",
    "nationalityAr": "أيرلندي",
    "nationalityEn": "Irish",
    "clubAr": "ريدينج (معتزل)",
    "clubEn": "Reading (retired)",
    "clubId": null,
    "position": {
      "ar": "مهاجم",
      "en": "Striker"
    },
    "era": "2005-2023",
    "active": false,
    "bioAr": "مهاجم أيرلندي (مواليد 1987) صاحب أسرع هدف في تاريخ الدوري الإنجليزي الممتاز (7.69 ثانية ضد واتفورد في أبريل 2019)، ولعب 88 مباراة مع منتخب أيرلندا.",
    "bioEn": "An Irish striker (born 1987) who scored the fastest goal in Premier League history (7.69 seconds against Watford in April 2019) and won 88 caps for the Republic of Ireland.",
    "achievementsAr": [
      "أسرع هدف في تاريخ الدوري الإنجليزي الممتاز (7.69 ثانية ضد واتفورد، أبريل 2019)",
      "88 مباراة و17 هدف مع منتخب جمهورية أيرلندا"
    ],
    "achievementsEn": [
      "Fastest goal in Premier League history (7.69 seconds v Watford, April 2019)",
      "88 caps and 17 goals for the Republic of Ireland"
    ],
    "clubsHistoryAr": [
      "كورك سيتي",
      "ريدينج",
      "وست بروميتش ألبيون",
      "هال سيتي",
      "ساوثهامبتون"
    ],
    "clubsHistoryEn": [
      "Cork City",
      "Reading",
      "West Bromwich Albion",
      "Hull City",
      "Southampton"
    ],
    "clubIds": [
      "west-bromwich-albion",
      "southampton"
    ],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Shane_Long"
  },
  {
    "id": "fabio-maciel",
    "nameAr": "فابيو",
    "nameEn": "Fábio",
    "nationalityAr": "برازيلي",
    "nationalityEn": "Brazilian",
    "clubAr": "فلومينينسي",
    "clubEn": "Fluminense",
    "clubId": null,
    "position": {
      "ar": "حارس مرمى",
      "en": "Goalkeeper"
    },
    "era": "1997-الآن",
    "active": true,
    "bioAr": "حارس مرمى برازيلي (مواليد 1980) صاحب أكبر عدد مباريات رسمية في تاريخ كرة القدم للرجال (1,391 مباراة لحد أغسطس 2025 حسب فلومينينسي وIFFHS، وده لسه مش معلن رسمياً من FIFA).",
    "bioEn": "A Brazilian goalkeeper (born 1980) who holds the record for most official appearances in men's football (1,391 by August 2025 per Fluminense and the IFFHS; not officially confirmed by FIFA).",
    "achievementsAr": [
      "أكبر عدد مباريات رسمية في تاريخ كرة القدم للرجال (1,391 لحد أغسطس 2025، حسب فلومينينسي وIFFHS)",
      "أكتر حارس حافظ على نظافة شباكه في التاريخ (507)",
      "كوبا ليبرتادوريس 2023 مع فلومينينسي"
    ],
    "achievementsEn": [
      "Most official appearances in men's football (1,391 by August 2025, per Fluminense and the IFFHS)",
      "Most clean sheets in football history (507)",
      "Copa Libertadores 2023 with Fluminense"
    ],
    "clubsHistoryAr": [
      "أونياو بانديرانتي",
      "أتلتيكو باراناينسي",
      "فاسكو دا جاما",
      "كروزيرو",
      "فلومينينسي"
    ],
    "clubsHistoryEn": [
      "União Bandeirante",
      "Atlético Paranaense",
      "Vasco da Gama",
      "Cruzeiro",
      "Fluminense"
    ],
    "clubIds": [],
    "wikiUrlAr": "",
    "wikiUrlEn": "https://en.wikipedia.org/wiki/Fábio_(footballer,_born_1980)"
  }
];

// للاستخدام في Node.js أو أي نظام modules:
if (typeof module !== "undefined" && module.exports) {
  module.exports = { players };
}
