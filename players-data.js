// players-data.js
// مصفوفة بيانات اللاعبين (الأسماء، الأندية، الإنجازات، روابط ويكيبيديا)

const players = [
  {
    id: "mohamed-salah",
    nameAr: "محمد صلاح",
    nameEn: "Mohamed Salah",
    nationalityAr: "مصري",
    nationalityEn: "Egyptian",
    clubAr: "تراب زون سبور (تركيا)",
    clubEn: "Trabzonspor (Turkey)",
    position: { ar: "جناح / مهاجم", en: "Winger / Forward" },
    era: "2010-الآن",
    active: true,
    bioAr: "نجم مصري وقائد المنتخب، قضى تسعة مواسم مع ليفربول الإنجليزي أصبح خلالها الهداف الأجنبي الأكبر في تاريخ الدوري الإنجليزي الممتاز، قبل أن يرحل كلاعب حر في أغسطس 2026 وينضم إلى تراب زون سبور التركي.",
    bioEn: "Egyptian star and national team captain who spent nine seasons at Liverpool, becoming the all-time top foreign goalscorer in Premier League history, before leaving as a free agent in August 2026 to join Turkish club Trabzonspor.",
    achievementsAr: [
      "بطولة دوري أبطال أوروبا 2019 مع ليفربول",
      "لقب الدوري الإنجليزي الممتاز 2019-2020",
      "الحذاء الذهبي للدوري الإنجليزي (عدة مرات)",
      "جائزة أفضل لاعب في إفريقيا (عدة مرات)"
    ],
    achievementsEn: [
      "UEFA Champions League title 2019 with Liverpool",
      "Premier League title 2019-2020",
      "Premier League Golden Boot (multiple times)",
      "African Player of the Year (multiple times)"
    ],
    clubsHistoryAr: ["المقاولون العرب", "بازل", "تشيلسي", "فيورنتينا (إعارة)", "روما", "ليفربول", "تراب زون سبور"],
    clubsHistoryEn: ["Al Mokawloon Al Arab", "Basel", "Chelsea", "Fiorentina (loan)", "Roma", "Liverpool", "Trabzonspor"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/محمد_صلاح",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Mohamed_Salah"
  },
  {
    id: "cristiano-ronaldo",
    nameAr: "كريستيانو رونالدو",
    nameEn: "Cristiano Ronaldo",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "النصر",
    clubEn: "Al Nassr",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2002-الآن",
    active: true,
    bioAr: "أحد أعظم لاعبي كرة القدم في التاريخ، هداف تاريخي عالمي وحامل الرقم القياسي في عدد الأهداف الدولية. لعب لأندية كبرى مثل مانشستر يونايتد وريال مدريد ويوفنتوس قبل انتقاله إلى النصر السعودي.",
    bioEn: "One of the greatest footballers of all time and the all-time top scorer in men's international football. He played for major clubs including Manchester United, Real Madrid and Juventus before moving to Saudi club Al Nassr.",
    achievementsAr: [
      "5 ألقاب دوري أبطال أوروبا",
      "5 جوائز الكرة الذهبية (Ballon d'Or)",
      "بطولة أمم أوروبا 2016 مع البرتغال",
      "الهداف التاريخي لدوري أبطال أوروبا"
    ],
    achievementsEn: [
      "5 UEFA Champions League titles",
      "5 Ballon d'Or awards",
      "UEFA Euro 2016 title with Portugal",
      "All-time top scorer in UEFA Champions League history"
    ],
    clubsHistoryAr: ["سبورتينغ لشبونة", "مانشستر يونايتد", "ريال مدريد", "يوفنتوس", "مانشستر يونايتد", "النصر"],
    clubsHistoryEn: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus", "Manchester United", "Al Nassr"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كريستيانو_رونالدو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo"
  },
  {
    id: "lionel-messi",
    nameAr: "ليونيل ميسي",
    nameEn: "Lionel Messi",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "إنتر ميامي",
    clubEn: "Inter Miami",
    position: { ar: "مهاجم / صانع ألعاب", en: "Forward / Playmaker" },
    era: "2004-الآن",
    active: true,
    bioAr: "أسطورة أرجنتينية يُعتبره كثيرون أفضل لاعب في تاريخ كرة القدم، صاحب الرقم القياسي في عدد جوائز الكرة الذهبية. قضى معظم مسيرته في برشلونة قبل الانتقال إلى باريس سان جيرمان ثم إنتر ميامي، وتوّج مسيرته الدولية بلقب كأس العالم 2022 مع الأرجنتين.",
    bioEn: "An Argentine legend widely regarded by many as the greatest footballer of all time, holding the record for most Ballon d'Or awards. He spent most of his career at Barcelona before moving to Paris Saint-Germain and then Inter Miami, and capped his international career by winning the 2022 FIFA World Cup with Argentina.",
    achievementsAr: [
      "8 جوائز الكرة الذهبية (رقم قياسي)",
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "4 ألقاب دوري أبطال أوروبا مع برشلونة",
      "بطولة كوبا أمريكا 2021 مع الأرجنتين"
    ],
    achievementsEn: [
      "8 Ballon d'Or awards (record)",
      "2022 FIFA World Cup title with Argentina",
      "4 UEFA Champions League titles with Barcelona",
      "2021 Copa América title with Argentina"
    ],
    clubsHistoryAr: ["برشلونة", "باريس سان جيرمان", "إنتر ميامي"],
    clubsHistoryEn: ["Barcelona", "Paris Saint-Germain", "Inter Miami"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ليونيل_ميسي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Lionel_Messi"
  },

  {
    id: "zinedine-zidane",
    nameAr: "زين الدين زيدان",
    nameEn: "Zinedine Zidane",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "ريال مدريد (معتزل)",
    clubEn: "Real Madrid (retired)",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder / Playmaker" },
    era: "1989-2006",
    active: false,
    bioAr: "أسطورة فرنسية من أصول جزائرية، يُعد من أفضل صانعي الألعاب في تاريخ كرة القدم بفضل توازنه الفني ورؤيته. قاد فرنسا للفوز بكأس العالم 1998 ويورو 2000، ولاحقًا أصبح مدربًا ناجحًا مع ريال مدريد.",
    bioEn: "A French legend of Algerian descent, regarded as one of the greatest playmakers in football history for his technique and vision. He led France to the 1998 World Cup and Euro 2000 titles, and later became a successful manager with Real Madrid.",
    achievementsAr: [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة أمم أوروبا 2000 مع فرنسا",
      "الكرة الذهبية 1998",
      "دوري أبطال أوروبا 2002 مع ريال مدريد"
    ],
    achievementsEn: [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "1998 Ballon d'Or",
      "2002 UEFA Champions League title with Real Madrid"
    ],
    clubsHistoryAr: ["كان", "بوردو", "يوفنتوس", "ريال مدريد"],
    clubsHistoryEn: ["Cannes", "Bordeaux", "Juventus", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/زين_الدين_زيدان",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Zinedine_Zidane"
  },
  {
    id: "diego-maradona",
    nameAr: "دييغو مارادونا",
    nameEn: "Diego Maradona",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "بوكا جونيورز (معتزل)",
    clubEn: "Boca Juniors (retired)",
    position: { ar: "صانع ألعاب / مهاجم", en: "Playmaker / Forward" },
    era: "1976-1997",
    active: false,
    bioAr: "واحد من أعظم لاعبي كرة القدم على الإطلاق، قاد الأرجنتين للفوز بكأس العالم 1986 بأداء فردي أسطوري تضمن هدف 'يد الإله' و'هدف القرن' في مباراة واحدة ضد إنجلترا. توفي عام 2020.",
    bioEn: "One of the greatest footballers of all time, he led Argentina to the 1986 World Cup title with a legendary individual performance that included both the 'Hand of God' goal and the 'Goal of the Century' in the same match against England. He passed away in 2020.",
    achievementsAr: [
      "بطولة كأس العالم 1986 مع الأرجنتين",
      "الكرة الذهبية الفخرية لأفضل لاعب في كأس العالم 1986",
      "بطولة الدوري الإيطالي مرتين مع نابولي",
      "كأس الاتحاد الأوروبي 1989 مع نابولي"
    ],
    achievementsEn: [
      "1986 FIFA World Cup title with Argentina",
      "Golden Ball as best player of the 1986 World Cup",
      "Serie A title twice with Napoli",
      "1989 UEFA Cup with Napoli"
    ],
    clubsHistoryAr: ["أرخنتينوس جونيورز", "بوكا جونيورز", "برشلونة", "نابولي", "إشبيلية", "نيويلز أولد بويز", "بوكا جونيورز"],
    clubsHistoryEn: ["Argentinos Juniors", "Boca Juniors", "Barcelona", "Napoli", "Sevilla", "Newell's Old Boys", "Boca Juniors"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دييغو_مارادونا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Diego_Maradona"
  },
  {
    id: "pele",
    nameAr: "بيليه",
    nameEn: "Pelé",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "سانتوس (معتزل)",
    clubEn: "Santos (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1956-1977",
    active: false,
    bioAr: "أسطورة برازيلية يُعتبره كثيرون أفضل لاعب كرة قدم في التاريخ، وهو اللاعب الوحيد الذي فاز بكأس العالم ثلاث مرات (1958، 1962، 1970). قضى معظم مسيرته مع نادي سانتوس البرازيلي. توفي عام 2022.",
    bioEn: "A Brazilian legend widely regarded by many as the greatest footballer of all time, and the only player to win the World Cup three times (1958, 1962, 1970). He spent most of his career with Brazilian club Santos. He passed away in 2022.",
    achievementsAr: [
      "3 بطولات كأس عالم مع البرازيل (1958، 1962، 1970)",
      "هداف تاريخي لنادي سانتوس",
      "لقب رياضي القرن من اللجنة الأولمبية الدولية",
      "أكثر من 1000 هدف في مسيرته (بحسب توثيق النادي)"
    ],
    achievementsEn: [
      "3 FIFA World Cup titles with Brazil (1958, 1962, 1970)",
      "All-time top scorer for Santos FC",
      "IOC Athlete of the Century",
      "Over 1,000 career goals (per club records)"
    ],
    clubsHistoryAr: ["سانتوس", "نيويورك كوزموس"],
    clubsHistoryEn: ["Santos", "New York Cosmos"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بيليه",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Pelé"
  },
  {
    id: "ronaldinho",
    nameAr: "رونالدينيو",
    nameEn: "Ronaldinho",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "أتلتيكو مينيرو (معتزل)",
    clubEn: "Atlético Mineiro (retired)",
    position: { ar: "جناح / صانع ألعاب", en: "Winger / Playmaker" },
    era: "1998-2015",
    active: false,
    bioAr: "نجم برازيلي اشتهر بمهاراته الفنية الاستثنائية وأسلوبه الممتع في اللعب. توّج بكأس العالم 2002 مع البرازيل، وكان قطب رحى برشلونة في منتصف العقد الأول من الألفية الثانية قبل حصوله على الكرة الذهبية عام 2005.",
    bioEn: "A Brazilian star known for his exceptional technical skill and entertaining style of play. He won the 2002 World Cup with Brazil and was the focal point of Barcelona in the mid-2000s before winning the Ballon d'Or in 2005.",
    achievementsAr: [
      "بطولة كأس العالم 2002 مع البرازيل",
      "الكرة الذهبية 2005",
      "دوري أبطال أوروبا 2006 مع برشلونة",
      "أفضل لاعب في العالم من الفيفا مرتين"
    ],
    achievementsEn: [
      "2002 FIFA World Cup title with Brazil",
      "2005 Ballon d'Or",
      "2006 UEFA Champions League with Barcelona",
      "FIFA World Player of the Year (twice)"
    ],
    clubsHistoryAr: ["غريميو", "باريس سان جيرمان", "برشلونة", "ميلان", "فلامنغو", "أتلتيكو مينيرو"],
    clubsHistoryEn: ["Grêmio", "Paris Saint-Germain", "Barcelona", "Milan", "Flamengo", "Atlético Mineiro"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رونالدينيو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ronaldinho"
  },
  {
    id: "david-beckham",
    nameAr: "ديفيد بيكهام",
    nameEn: "David Beckham",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "باريس سان جيرمان (معتزل)",
    clubEn: "Paris Saint-Germain (retired)",
    position: { ar: "جناح / وسط ميدان", en: "Winger / Midfielder" },
    era: "1992-2013",
    active: false,
    bioAr: "لاعب إنجليزي سابق اشتهر بعرضياته وتسديداته من الركلات الحرة، ولعب لأندية كبرى مثل مانشستر يونايتد وريال مدريد. كان أحد أشهر لاعبي كرة القدم عالميًا خارج الملعب أيضًا بفضل حضوره الإعلامي الواسع.",
    bioEn: "A former English footballer known for his crossing ability and free-kick technique, who played for major clubs including Manchester United and Real Madrid. He was also one of the most globally recognizable footballers off the pitch due to his wide media presence.",
    achievementsAr: [
      "دوري أبطال أوروبا 1999 مع مانشستر يونايتد",
      "6 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "لقب الدوري الإسباني مع ريال مدريد",
      "قائد المنتخب الإنجليزي لسنوات عديدة"
    ],
    achievementsEn: [
      "1999 UEFA Champions League with Manchester United",
      "6 Premier League titles with Manchester United",
      "La Liga title with Real Madrid",
      "Captained the England national team for several years"
    ],
    clubsHistoryAr: ["مانشستر يونايتد", "ريال مدريد", "لوس أنجلوس غالاكسي", "ميلان (إعارة)", "باريس سان جيرمان"],
    clubsHistoryEn: ["Manchester United", "Real Madrid", "LA Galaxy", "Milan (loan)", "Paris Saint-Germain"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ديفيد_بيكهام",
    wikiUrlEn: "https://en.wikipedia.org/wiki/David_Beckham"
  },
  {
    id: "kylian-mbappe",
    nameAr: "كيليان مبابي",
    nameEn: "Kylian Mbappé",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2015-الآن",
    active: true,
    bioAr: "مهاجم فرنسي يُعد من أبرز نجوم الجيل الحالي، عُرف بسرعته الفائقة وقدرته التهديفية العالية. توّج بكأس العالم 2018 مع فرنسا وهو في التاسعة عشرة من عمره، وانتقل إلى ريال مدريد عام 2024 بعد سنوات قضاها مع باريس سان جيرمان.",
    bioEn: "A French forward regarded as one of the standout stars of the current generation, known for his blistering pace and clinical finishing. He won the 2018 World Cup with France at just 19 years old, and moved to Real Madrid in 2024 after years at Paris Saint-Germain.",
    achievementsAr: [
      "بطولة كأس العالم 2018 مع فرنسا",
      "هداف نهائي كأس العالم 2022 (هاتريك)",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان",
      "هداف الدوري الفرنسي لعدة مواسم متتالية"
    ],
    achievementsEn: [
      "2018 FIFA World Cup title with France",
      "Hat-trick in the 2022 World Cup final",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "Ligue 1 top scorer for several consecutive seasons"
    ],
    clubsHistoryAr: ["موناكو", "باريس سان جيرمان", "ريال مدريد"],
    clubsHistoryEn: ["Monaco", "Paris Saint-Germain", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كيليان_مبابي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Kylian_Mbappé"
  },
  {
    id: "erling-haaland",
    nameAr: "إيرلينغ هالاند",
    nameEn: "Erling Haaland",
    nationalityAr: "نرويجي",
    nationalityEn: "Norwegian",
    clubAr: "مانشستر سيتي",
    clubEn: "Manchester City",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2016-الآن",
    active: true,
    bioAr: "مهاجم نرويجي عملاق يُعرف بقوته البدنية وغزارته التهديفية غير المسبوقة، حطم أرقامًا قياسية في عدد الأهداف بموسم واحد في الدوري الإنجليزي الممتاز منذ انضمامه لمانشستر سيتي عام 2022.",
    bioEn: "A towering Norwegian forward known for his physical power and record-breaking goalscoring output, having broken single-season Premier League scoring records since joining Manchester City in 2022.",
    achievementsAr: [
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "رقم قياسي لأكثر الأهداف في موسم واحد بالدوري الإنجليزي الممتاز (نظام 38 مباراة)",
      "الحذاء الذهبي الأوروبي أكثر من مرة",
      "لقب الدوري الإنجليزي الممتاز مع مانشستر سيتي"
    ],
    achievementsEn: [
      "2023 UEFA Champions League with Manchester City",
      "Premier League single-season scoring record (38-game format)",
      "European Golden Shoe on multiple occasions",
      "Premier League title with Manchester City"
    ],
    clubsHistoryAr: ["مولده", "ردنا", "سالزبورغ", "بوروسيا دورتموند", "مانشستر سيتي"],
    clubsHistoryEn: ["Bryne", "Molde", "Salzburg", "Borussia Dortmund", "Manchester City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إيرلينغ_هالاند",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Erling_Haaland"
  },
  {
    id: "kevin-de-bruyne",
    nameAr: "كيفن دي بروين",
    nameEn: "Kevin De Bruyne",
    nationalityAr: "بلجيكي",
    nationalityEn: "Belgian",
    clubAr: "نابولي",
    clubEn: "Napoli",
    position: { ar: "صانع ألعاب", en: "Midfielder / Playmaker" },
    era: "2008-الآن",
    active: true,
    bioAr: "وسط ملعب بلجيكي يُعد من أفضل صانعي الألعاب في جيله بفضل رؤيته وتمريراته الحاسمة الطويلة، كان اللاعب المحوري في مانشستر سيتي لأكثر من عقد قبل انتقاله إلى نابولي الإيطالي.",
    bioEn: "A Belgian midfielder regarded as one of the finest playmakers of his generation for his vision and long-range decisive passing, he was the central figure at Manchester City for over a decade before moving to Italian club Napoli.",
    achievementsAr: [
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "جائزة أفضل لاعب في الدوري الإنجليزي الممتاز",
      "صاحب أكبر عدد تمريرات حاسمة في تاريخ الدوري الإنجليزي الممتاز لموسم واحد (رقم مشترك)"
    ],
    achievementsEn: [
      "2023 UEFA Champions League with Manchester City",
      "Multiple Premier League titles with Manchester City",
      "PFA Players' Player of the Year award",
      "Holds the Premier League single-season assists record (shared)"
    ],
    clubsHistoryAr: ["خنت", "تشيلسي", "فيردر بريمن (إعارة)", "فولفسبورغ", "مانشستر سيتي", "نابولي"],
    clubsHistoryEn: ["Genk", "Chelsea", "Werder Bremen (loan)", "Wolfsburg", "Manchester City", "Napoli"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كيفن_دي_بروين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Kevin_De_Bruyne"
  },
  {
    id: "luka-modric",
    nameAr: "لوكا مودريتش",
    nameEn: "Luka Modrić",
    nationalityAr: "كرواتي",
    nationalityEn: "Croatian",
    clubAr: "ميلان",
    clubEn: "Milan",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2003-الآن",
    active: true,
    bioAr: "وسط ميدان كرواتي اشتهر بتحكمه في إيقاع اللعب وقدرته على الاستمرار في أعلى المستويات رغم تقدمه في العمر. قاد كرواتيا لنهائي كأس العالم 2018 وفاز بالكرة الذهبية في نفس العام، بعد سنوات من الهيمنة مع ريال مدريد.",
    bioEn: "A Croatian midfielder known for controlling the tempo of play and sustaining top-level performances well into his later years. He led Croatia to the 2018 World Cup final and won the Ballon d'Or that same year, after years of dominance with Real Madrid.",
    achievementsAr: [
      "الكرة الذهبية 2018",
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "الوصول لنهائي كأس العالم 2018 مع كرواتيا",
      "أفضل لاعب في كأس العالم 2018 (الكرة الذهبية للبطولة)"
    ],
    achievementsEn: [
      "2018 Ballon d'Or",
      "5 UEFA Champions League titles with Real Madrid",
      "Runner-up at the 2018 World Cup with Croatia",
      "2018 World Cup Golden Ball (best player of the tournament)"
    ],
    clubsHistoryAr: ["دينامو زغرب", "زريينسكي موستار (إعارة)", "توتنهام هوتسبير", "ريال مدريد", "ميلان"],
    clubsHistoryEn: ["Dinamo Zagreb", "Zrinjski Mostar (loan)", "Tottenham Hotspur", "Real Madrid", "Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/لوكا_مودريتش",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Luka_Modrić"
  },
  {
    id: "robert-lewandowski",
    nameAr: "روبرت ليفاندوفسكي",
    nameEn: "Robert Lewandowski",
    nationalityAr: "بولندي",
    nationalityEn: "Polish",
    clubAr: "شيكاغو فاير (الدوري الأمريكي MLS)",
    clubEn: "Chicago Fire (MLS)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2006-الآن",
    active: true,
    bioAr: "مهاجم بولندي يُعتبر من أعظم المهاجمين في تاريخ كرة القدم الأوروبية بفضل غزارته التهديفية المستمرة على مدى سنوات طويلة، كان اللاعب المحوري في بايرن ميونخ ثم في برشلونة، قبل أن يرحل كلاعب حر في صيف 2026 وينضم إلى شيكاغو فاير الأمريكي في الدوري الأمريكي (MLS) بعقد حتى نهاية موسم 2027-2028.",
    bioEn: "A Polish forward regarded as one of the greatest strikers in European football history for his sustained goalscoring over many years. He was the central figure at Bayern Munich and then Barcelona, before leaving as a free agent in summer 2026 to join Chicago Fire in Major League Soccer (MLS) on a deal through the 2027-28 season.",
    achievementsAr: [
      "8 ألقاب دوري ألماني متتالية تقريبًا مع بايرن ميونخ",
      "دوري أبطال أوروبا 2020 مع بايرن ميونخ",
      "جائزة أفضل لاعب في العالم من الفيفا",
      "هداف الدوري الإسباني عدة مرات مع برشلونة"
    ],
    achievementsEn: [
      "Multiple consecutive Bundesliga titles with Bayern Munich",
      "2020 UEFA Champions League with Bayern Munich",
      "The Best FIFA Men's Player award",
      "La Liga top scorer multiple times with Barcelona"
    ],
    clubsHistoryAr: ["زنيكس", "لخ بوزنان", "بروسيا دورتموند", "بايرن ميونخ", "برشلونة", "شيكاغو فاير"],
    clubsHistoryEn: ["Znicz", "Lech Poznań", "Borussia Dortmund", "Bayern Munich", "Barcelona", "Chicago Fire"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/روبرت_ليفاندوفسكي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Robert_Lewandowski"
  },
  {
    id: "thierry-henry",
    nameAr: "تييري هنري",
    nameEn: "Thierry Henry",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "نيويورك ريد بولز (معتزل)",
    clubEn: "New York Red Bulls (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1994-2014",
    active: false,
    bioAr: "مهاجم فرنسي أسطوري وهداف تاريخي لنادي أرسنال، اشتهر بسرعته وأناقته الفنية أمام المرمى. كان جزءًا أساسيًا من منتخب فرنسا الفائز بكأس العالم 1998 ويورو 2000.",
    bioEn: "A legendary French forward and Arsenal's all-time top scorer, known for his pace and clinical finishing elegance in front of goal. He was a key part of the France squad that won the 1998 World Cup and Euro 2000.",
    achievementsAr: [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة أمم أوروبا 2000 مع فرنسا",
      "هداف تاريخي لنادي أرسنال",
      "الحذاء الذهبي الأوروبي مرتين"
    ],
    achievementsEn: [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "Arsenal's all-time top goalscorer",
      "European Golden Shoe twice"
    ],
    clubsHistoryAr: ["موناكو", "يوفنتوس", "أرسنال", "برشلونة", "نيويورك ريد بولز"],
    clubsHistoryEn: ["Monaco", "Juventus", "Arsenal", "Barcelona", "New York Red Bulls"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/تييري_هنري",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Thierry_Henry"
  },
  {
    id: "didier-drogba",
    nameAr: "ديديه دروغبا",
    nameEn: "Didier Drogba",
    nationalityAr: "إيفواري",
    nationalityEn: "Ivorian",
    clubAr: "فينيكس رايزينغ (معتزل)",
    clubEn: "Phoenix Rising (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1998-2018",
    active: false,
    bioAr: "مهاجم إيفواري قوي البنية، يُعد أسطورة نادي تشيلسي الإنجليزي بفضل أهدافه الحاسمة في النهائيات الكبرى، وأبرزها الهدف الذي قاد فريقه للفوز بدوري أبطال أوروبا 2012.",
    bioEn: "A powerfully built Ivorian forward considered a Chelsea legend for his decisive goals in major finals, most notably the goal that helped lead his side to the 2012 UEFA Champions League title.",
    achievementsAr: [
      "دوري أبطال أوروبا 2012 مع تشيلسي",
      "4 ألقاب دوري إنجليزي ممتاز مع تشيلسي",
      "هداف الدوري الإنجليزي الممتاز مرتين",
      "أفضل لاعب إفريقي مرتين"
    ],
    achievementsEn: [
      "2012 UEFA Champions League with Chelsea",
      "4 Premier League titles with Chelsea",
      "Premier League top scorer twice",
      "African Footballer of the Year twice"
    ],
    clubsHistoryAr: ["لومان", "غينغامب", "مارسيليا", "تشيلسي", "شنغهاي شينخوا", "غالطة سراي", "تشيلسي", "فينيكس رايزينغ"],
    clubsHistoryEn: ["Le Mans", "Guingamp", "Marseille", "Chelsea", "Shanghai Shenhua", "Galatasaray", "Chelsea", "Phoenix Rising"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ديديه_دروغبا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Didier_Drogba"
  },
  {
    id: "samuel-etoo",
    nameAr: "صامويل إيتو",
    nameEn: "Samuel Eto'o",
    nationalityAr: "كاميروني",
    nationalityEn: "Cameroonian",
    clubAr: "أنطاليا سبور (معتزل)",
    clubEn: "Antalyaspor (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1997-2019",
    active: false,
    bioAr: "أحد أعظم المهاجمين الأفارقة في التاريخ، فاز بدوري أبطال أوروبا ثلاث مرات مع ثلاثة أندية مختلفة (برشلونة مرتين وإنتر ميلان مرة)، وحصل على لقب أفضل لاعب إفريقي أربع مرات.",
    bioEn: "One of the greatest African forwards in history, he won the UEFA Champions League three times with three different clubs (twice with Barcelona and once with Inter Milan), and won the African Footballer of the Year award four times.",
    achievementsAr: [
      "3 ألقاب دوري أبطال أوروبا مع أندية مختلفة",
      "أفضل لاعب إفريقي 4 مرات (رقم قياسي مشترك)",
      "هداف الدوري الإسباني مرتين مع برشلونة",
      "بطولة كأس الأمم الإفريقية مرتين مع الكاميرون"
    ],
    achievementsEn: [
      "3 UEFA Champions League titles with different clubs",
      "African Footballer of the Year 4 times (joint record)",
      "La Liga top scorer twice with Barcelona",
      "Africa Cup of Nations title twice with Cameroon"
    ],
    clubsHistoryAr: ["ريال مدريد", "ليدا (إعارة)", "مايوركا", "برشلونة", "إنتر ميلان", "أنجي مخاتشكالا", "تشيلسي", "إيفرتون", "أنطاليا سبور"],
    clubsHistoryEn: ["Real Madrid", "Leganés (loan)", "Mallorca", "Barcelona", "Inter Milan", "Anzhi Makhachkala", "Chelsea", "Everton", "Antalyaspor"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/صامويل_إيتو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Samuel_Eto'o"
  },
  {
    id: "mahmoud-elkhatib",
    nameAr: "محمود الخطيب",
    nameEn: "Mahmoud El Khatib",
    nationalityAr: "مصري",
    nationalityEn: "Egyptian",
    clubAr: "الأهلي (معتزل)",
    clubEn: "Al Ahly (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1973-1988",
    active: false,
    bioAr: "أسطورة كرة القدم المصرية ولاعب الأهلي الأشهر، يُلقب بـ'بيبو'، ويُعد أحد أفضل المهاجمين في تاريخ الكرة المصرية والإفريقية. بعد اعتزاله أصبح رئيسًا للنادي الأهلي لسنوات طويلة.",
    bioEn: "An Egyptian football legend and the most famous Al Ahly player, nicknamed 'Bibo', regarded as one of the greatest forwards in Egyptian and African football history. After retiring, he became president of Al Ahly for many years.",
    achievementsAr: [
      "أفضل لاعب إفريقي 1983",
      "عدة ألقاب دوري مصري وكأس مصر مع الأهلي",
      "بطولة دوري أبطال إفريقيا مع الأهلي",
      "رئيس نادي الأهلي لعدة دورات بعد الاعتزال"
    ],
    achievementsEn: [
      "African Footballer of the Year 1983",
      "Multiple Egyptian league and cup titles with Al Ahly",
      "CAF Champions League title with Al Ahly",
      "President of Al Ahly for several terms after retirement"
    ],
    clubsHistoryAr: ["الأهلي"],
    clubsHistoryEn: ["Al Ahly"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/محمود_الخطيب",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Mahmoud_El_Khatib"
  },
  {
    id: "ahmed-hassan",
    nameAr: "أحمد حسن",
    nameEn: "Ahmed Hassan",
    nationalityAr: "مصري",
    nationalityEn: "Egyptian",
    clubAr: "الزمالك (معتزل)",
    clubEn: "Zamalek (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1995-2013",
    active: false,
    bioAr: "لاعب وسط مصري، يحمل الرقم القياسي لأكثر لاعب مشاركة دوليًا في تاريخ كرة القدم الرجالية بأكثر من 180 مباراة مع منتخب مصر. قاد الفراعنة للفوز بثلاث بطولات أمم إفريقيا متتالية (2006، 2008، 2010).",
    bioEn: "An Egyptian midfielder who holds the record for most international caps in men's football history, with over 180 appearances for Egypt. He led the Pharaohs to three consecutive Africa Cup of Nations titles (2006, 2008, 2010).",
    achievementsAr: [
      "3 بطولات كأس الأمم الإفريقية متتالية مع مصر",
      "الرقم القياسي العالمي لعدد المشاركات الدولية",
      "أفضل لاعب في كأس الأمم الإفريقية 2006",
      "ألقاب دوري ودوري أبطال إفريقيا مع الأهلي"
    ],
    achievementsEn: [
      "3 consecutive Africa Cup of Nations titles with Egypt",
      "World record for most international caps",
      "Africa Cup of Nations Best Player award 2006",
      "League and CAF Champions League titles with Al Ahly"
    ],
    clubsHistoryAr: ["الطلائع", "الزمالك", "أندرلخت", "نانت", "أستون فيلا", "الأهلي", "الإسماعيلي", "كوينزبارك رينجرز", "الزمالك"],
    clubsHistoryEn: ["El-Talaia", "Zamalek", "Anderlecht", "Nantes", "Aston Villa", "Al Ahly", "Ismaily", "Queens Park Rangers", "Zamalek"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أحمد_حسن_(لاعب_كرة_قدم)",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ahmed_Hassan_(footballer,_born_1975)"
  },
  {
    id: "essam-el-hadary",
    nameAr: "عصام الحضري",
    nameEn: "Essam El Hadary",
    nationalityAr: "مصري",
    nationalityEn: "Egyptian",
    clubAr: "وادي دجلة (معتزل)",
    clubEn: "Wadi Degla (retired)",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1996-2018",
    active: false,
    bioAr: "حارس مرمى مصري أسطوري يُلقب بـ'السد العالي'، ويُعد من أفضل حراس المرمى في تاريخ إفريقيا. أصبح أكبر لاعب سنًا يشارك في نهائيات كأس العالم عندما لعب لمصر في مونديال 2018 عن عمر يناهز 45 عامًا.",
    bioEn: "A legendary Egyptian goalkeeper nicknamed the 'High Dam', regarded as one of the greatest goalkeepers in African football history. He became the oldest player to appear at a FIFA World Cup finals when he played for Egypt at the 2018 World Cup, aged 45.",
    achievementsAr: [
      "4 بطولات كأس الأمم الإفريقية مع مصر",
      "أكبر لاعب سنًا يشارك في نهائيات كأس العالم",
      "3 ألقاب دوري أبطال إفريقيا مع الأهلي",
      "7 ألقاب دوري مصري مع الأهلي"
    ],
    achievementsEn: [
      "4 Africa Cup of Nations titles with Egypt",
      "Oldest player to appear at a FIFA World Cup finals",
      "3 CAF Champions League titles with Al Ahly",
      "7 Egyptian league titles with Al Ahly"
    ],
    clubsHistoryAr: ["دمياط", "الأهلي", "سيون", "الأهلي", "الميريخ", "وادي دجلة"],
    clubsHistoryEn: ["Damietta", "Al Ahly", "Sion", "Al Ahly", "Al-Merrikh", "Wadi Degla"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/عصام_الحضري",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Essam_El_Hadary"
  },
  {
    id: "mohamed-aboutrika",
    nameAr: "محمد أبو تريكة",
    nameEn: "Mohamed Aboutrika",
    nationalityAr: "مصري",
    nationalityEn: "Egyptian",
    clubAr: "الأهلي (معتزل)",
    clubEn: "Al Ahly (retired)",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder / Playmaker" },
    era: "1999-2013",
    active: false,
    bioAr: "أحد أفضل صانعي الألعاب في تاريخ الكرة المصرية والإفريقية، قضى معظم مسيرته مع نادي الأهلي وحقق معه إنجازات محلية وقارية عديدة. عُرف بأناقته الفنية ورؤيته في تمرير الكرة.",
    bioEn: "One of the finest playmakers in Egyptian and African football history, he spent most of his career with Al Ahly, achieving numerous domestic and continental honours. He was known for his elegant technique and passing vision.",
    achievementsAr: [
      "أفضل لاعب إفريقي 2008",
      "4 ألقاب دوري أبطال إفريقيا مع الأهلي",
      "بطولتا كأس الأمم الإفريقية 2006 و2008 مع مصر",
      "عدة ألقاب دوري وكأس مصر مع الأهلي"
    ],
    achievementsEn: [
      "African Footballer of the Year 2008",
      "4 CAF Champions League titles with Al Ahly",
      "2006 and 2008 Africa Cup of Nations titles with Egypt",
      "Multiple Egyptian league and cup titles with Al Ahly"
    ],
    clubsHistoryAr: ["الترسانة", "الأهلي", "ويجان أتليتيك"],
    clubsHistoryEn: ["Tersana", "Al Ahly", "Wigan Athletic"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/محمد_أبو_تريكة",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Mohamed_Aboutrika"
  },
  {
    id: "riyad-mahrez",
    nameAr: "رياض محرز",
    nameEn: "Riyad Mahrez",
    nationalityAr: "جزائري",
    nationalityEn: "Algerian",
    clubAr: "الأهلي (السعودية)",
    clubEn: "Al Ahli (Saudi Arabia)",
    position: { ar: "جناح", en: "Winger" },
    era: "2010-الآن",
    active: true,
    bioAr: "جناح جزائري يُعد أحد أفضل اللاعبين العرب والأفارقة في العصر الحديث، حصل على لقب أفضل لاعب إفريقي مرتين، وكان جزءًا أساسيًا من مانشستر سيتي في سنوات هيمنته على الدوري الإنجليزي الممتاز.",
    bioEn: "An Algerian winger regarded as one of the finest Arab and African players of the modern era, twice named African Footballer of the Year, and a key part of Manchester City during its Premier League dominance.",
    achievementsAr: [
      "أفضل لاعب إفريقي مرتين",
      "بطولة كأس الأمم الإفريقية 2019 مع الجزائر",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي"
    ],
    achievementsEn: [
      "African Footballer of the Year (twice)",
      "2019 Africa Cup of Nations title with Algeria",
      "Multiple Premier League titles with Manchester City",
      "2023 UEFA Champions League with Manchester City"
    ],
    clubsHistoryAr: ["لوهافر", "لستر سيتي", "مانشستر سيتي", "الأهلي (السعودية)"],
    clubsHistoryEn: ["Le Havre", "Leicester City", "Manchester City", "Al Ahli (Saudi Arabia)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رياض_محرز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Riyad_Mahrez"
  },
  {
    id: "neymar",
    nameAr: "نيمار",
    nameEn: "Neymar",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "سانتوس",
    clubEn: "Santos",
    position: { ar: "جناح / مهاجم", en: "Winger / Forward" },
    era: "2009-الآن",
    active: true,
    bioAr: "نجم برازيلي اشتهر بمهاراته الفردية الاستثنائية ومراوغاته، شكّل مع ميسي وسواريز ثلاثيًا هجوميًا مرعبًا في برشلونة، ثم انتقل بصفقة قياسية عالميًا إلى باريس سان جيرمان قبل أن يعود لاحقًا إلى ناديه الأم سانتوس.",
    bioEn: "A Brazilian star known for his exceptional individual skill and dribbling, he formed a fearsome attacking trio with Messi and Suárez at Barcelona, before moving to Paris Saint-Germain in a then-world-record transfer, later returning to his boyhood club Santos.",
    achievementsAr: [
      "دوري أبطال أوروبا 2015 مع برشلونة",
      "بطولة الألعاب الأولمبية 2016 مع البرازيل",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان",
      "أحد أغلى الانتقالات في تاريخ كرة القدم"
    ],
    achievementsEn: [
      "2015 UEFA Champions League with Barcelona",
      "2016 Olympic gold medal with Brazil",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "One of the most expensive transfers in football history"
    ],
    clubsHistoryAr: ["سانتوس", "برشلونة", "باريس سان جيرمان", "الهلال", "سانتوس"],
    clubsHistoryEn: ["Santos", "Barcelona", "Paris Saint-Germain", "Al-Hilal", "Santos"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/نيمار",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Neymar"
  },
  {
    id: "sadio-mane",
    nameAr: "ساديو ماني",
    nameEn: "Sadio Mané",
    nationalityAr: "سنغالي",
    nationalityEn: "Senegalese",
    clubAr: "النصر",
    clubEn: "Al Nassr",
    position: { ar: "جناح / مهاجم", en: "Winger / Forward" },
    era: "2011-الآن",
    active: true,
    bioAr: "مهاجم سنغالي سريع وفعال، كان جزءًا من ثلاثي هجومي مرعب مع محمد صلاح وروبرتو فيرمينو في ليفربول، وقاد السنغال للفوز بأول لقب كأس أمم إفريقيا في تاريخها عام 2022.",
    bioEn: "A fast and effective Senegalese forward who was part of a fearsome attacking trio alongside Mohamed Salah and Roberto Firmino at Liverpool, and led Senegal to their first-ever Africa Cup of Nations title in 2022.",
    achievementsAr: [
      "دوري أبطال أوروبا 2019 مع ليفربول",
      "بطولة كأس الأمم الإفريقية 2022 مع السنغال",
      "أفضل لاعب إفريقي 2019",
      "لقب الدوري الإنجليزي الممتاز 2019-2020 مع ليفربول"
    ],
    achievementsEn: [
      "2019 UEFA Champions League with Liverpool",
      "2022 Africa Cup of Nations title with Senegal",
      "African Footballer of the Year 2019",
      "2019-2020 Premier League title with Liverpool"
    ],
    clubsHistoryAr: ["ميتز", "ريد بول سالزبورغ", "ساوثهامبتون", "ليفربول", "بايرن ميونخ", "النصر"],
    clubsHistoryEn: ["Metz", "Red Bull Salzburg", "Southampton", "Liverpool", "Bayern Munich", "Al Nassr"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ساديو_ماني",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Sadio_Mané"
  },
  {
    id: "gianluigi-buffon",
    nameAr: "جانلويجي بوفون",
    nameEn: "Gianluigi Buffon",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "بارما (معتزل)",
    clubEn: "Parma (retired)",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1995-2023",
    active: false,
    bioAr: "حارس مرمى إيطالي يُعد من أعظم حراس المرمى في تاريخ كرة القدم، قضى معظم مسيرته مع يوفنتوس، وتوّج بكأس العالم 2006 مع إيطاليا. استمر في اللعب على أعلى مستوى حتى أواخر الأربعينات من عمره تقريبًا.",
    bioEn: "An Italian goalkeeper regarded as one of the greatest in football history, he spent most of his career with Juventus and won the 2006 World Cup with Italy. He continued playing at a high level into his mid-40s.",
    achievementsAr: [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "عدة ألقاب دوري إيطالي مع يوفنتوس",
      "جائزة ياشين لأفضل حارس مرمى في العالم عدة مرات",
      "حارس مرمى الفريق المثالي لكأس العالم أكثر من مرة"
    ],
    achievementsEn: [
      "2006 FIFA World Cup title with Italy",
      "Multiple Serie A titles with Juventus",
      "Yashin/IFFHS World's Best Goalkeeper award multiple times",
      "FIFA World Cup All-Star Team goalkeeper on multiple occasions"
    ],
    clubsHistoryAr: ["بارما", "يوفنتوس", "باريس سان جيرمان", "يوفنتوس", "بارما"],
    clubsHistoryEn: ["Parma", "Juventus", "Paris Saint-Germain", "Juventus", "Parma"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جانلويجي_بوفون",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gianluigi_Buffon"
  },
  {
    id: "andrea-pirlo",
    nameAr: "أندريا بيرلو",
    nameEn: "Andrea Pirlo",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "نيويورك سيتي (معتزل)",
    clubEn: "New York City FC (retired)",
    position: { ar: "صانع ألعاب", en: "Deep-lying Playmaker" },
    era: "1994-2017",
    active: false,
    bioAr: "وسط ميدان إيطالي اشتهر بتمريراته الطويلة الدقيقة ورؤيته الاستراتيجية من عمق الملعب، أعاد تعريف دور 'الريجيستا' الحديث. توّج بكأس العالم 2006 مع إيطاليا وحقق ألقابًا كبرى مع ميلان ويوفنتوس.",
    bioEn: "An Italian midfielder known for his precise long passing and strategic vision from deep positions, redefining the modern 'regista' role. He won the 2006 World Cup with Italy and major honours with both Milan and Juventus.",
    achievementsAr: [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "دوري أبطال أوروبا مرتين مع ميلان",
      "4 ألقاب دوري إيطالي متتالية مع يوفنتوس",
      "أفضل لاعب في نهائي كأس العالم 2006 (المركز الثاني في الكرة الذهبية للبطولة)"
    ],
    achievementsEn: [
      "2006 FIFA World Cup title with Italy",
      "UEFA Champions League title twice with Milan",
      "4 consecutive Serie A titles with Juventus",
      "Runner-up for the 2006 World Cup Golden Ball"
    ],
    clubsHistoryAr: ["برشيا", "إنتر ميلان", "ريجينا (إعارة)", "ميلان", "يوفنتوس", "نيويورك سيتي"],
    clubsHistoryEn: ["Brescia", "Inter Milan", "Reggina (loan)", "Milan", "Juventus", "New York City FC"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أندريا_بيرلو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Andrea_Pirlo"
  },
  {
    id: "wayne-rooney",
    nameAr: "واين روني",
    nameEn: "Wayne Rooney",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "دربي كاونتي (معتزل كلاعب)",
    clubEn: "Derby County (retired as player)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2002-2021",
    active: false,
    bioAr: "هداف إنجليزي تاريخي، يحمل الرقم القياسي لأكثر هداف في تاريخ مانشستر يونايتد ومنتخب إنجلترا (حتى تجاوزه لاحقًا في سجل المنتخب). عُرف بقوته البدنية وتنوع أسلوب لعبه الهجومي منذ ظهوره المبكر مع إيفرتون في سن السادسة عشرة.",
    bioEn: "A historic English goalscorer who holds the all-time scoring record for Manchester United and was long the England national team's top scorer. Known for his physical power and versatile attacking style since his early breakthrough with Everton at age 16.",
    achievementsAr: [
      "5 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد",
      "الهداف التاريخي لنادي مانشستر يونايتد",
      "كأس العالم للأندية 2008 مع مانشستر يونايتد"
    ],
    achievementsEn: [
      "5 Premier League titles with Manchester United",
      "2008 UEFA Champions League with Manchester United",
      "Manchester United's all-time top goalscorer",
      "2008 FIFA Club World Cup with Manchester United"
    ],
    clubsHistoryAr: ["إيفرتون", "مانشستر يونايتد", "دي سي يونايتد", "إيفرتون", "دربي كاونتي"],
    clubsHistoryEn: ["Everton", "Manchester United", "D.C. United", "Everton", "Derby County"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/واين_روني",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Wayne_Rooney"
  },
  {
    id: "steven-gerrard",
    nameAr: "ستيفن جيرارد",
    nameEn: "Steven Gerrard",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "لوس أنجلوس غالاكسي (معتزل)",
    clubEn: "LA Galaxy (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1998-2016",
    active: false,
    bioAr: "أيقونة نادي ليفربول وقائده لسنوات طويلة، اشتهر بقوته البدنية وتسديداته من مسافات بعيدة وقدرته على حسم المباريات بمفرده، وأبرزها نهائي دوري أبطال أوروبا 2005 الشهير أمام ميلان.",
    bioEn: "A Liverpool icon and long-time captain, known for his physical power, long-range shooting, and ability to single-handedly decide matches, most famously in the legendary 2005 Champions League final comeback against Milan.",
    achievementsAr: [
      "دوري أبطال أوروبا 2005 مع ليفربول",
      "كأس الاتحاد الإنجليزي مع ليفربول عدة مرات",
      "قائد ليفربول لأكثر من عقد",
      "قائد منتخب إنجلترا"
    ],
    achievementsEn: [
      "2005 UEFA Champions League with Liverpool",
      "FA Cup with Liverpool multiple times",
      "Liverpool captain for over a decade",
      "England national team captain"
    ],
    clubsHistoryAr: ["ليفربول", "لوس أنجلوس غالاكسي"],
    clubsHistoryEn: ["Liverpool", "LA Galaxy"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ستيفن_جيرارد",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Steven_Gerrard"
  },
  {
    id: "frank-lampard",
    nameAr: "فرانك لامبارد",
    nameEn: "Frank Lampard",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "نيويورك سيتي (معتزل)",
    clubEn: "New York City FC (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1995-2017",
    active: false,
    bioAr: "وسط ميدان إنجليزي يحمل الرقم القياسي لأكثر هداف في تاريخ نادي تشيلسي، عُرف بقدرته الاستثنائية على الوصول للمنطقة والتهديف من الصف الثاني، وكان جزءًا أساسيًا من نجاحات تشيلسي المحلية والقارية.",
    bioEn: "An English midfielder who holds the all-time scoring record for Chelsea, known for his exceptional ability to arrive in the box and score from midfield. He was a central figure in Chelsea's domestic and European success.",
    achievementsAr: [
      "دوري أبطال أوروبا 2012 مع تشيلسي",
      "3 ألقاب دوري إنجليزي ممتاز مع تشيلسي",
      "الهداف التاريخي لنادي تشيلسي",
      "4 ألقاب كأس الاتحاد الإنجليزي مع تشيلسي"
    ],
    achievementsEn: [
      "2012 UEFA Champions League with Chelsea",
      "3 Premier League titles with Chelsea",
      "Chelsea's all-time top goalscorer",
      "4 FA Cup titles with Chelsea"
    ],
    clubsHistoryAr: ["ويست هام يونايتد", "سوانزي سيتي (إعارة)", "تشيلسي", "مانشستر سيتي", "نيويورك سيتي"],
    clubsHistoryEn: ["West Ham United", "Swansea City (loan)", "Chelsea", "Manchester City", "New York City FC"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فرانك_لامبارد",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Frank_Lampard"
  },
  {
    id: "ryan-giggs",
    nameAr: "راين غيغز",
    nameEn: "Ryan Giggs",
    nationalityAr: "ويلزي",
    nationalityEn: "Welsh",
    clubAr: "مانشستر يونايتد (معتزل)",
    clubEn: "Manchester United (retired)",
    position: { ar: "جناح", en: "Winger" },
    era: "1990-2014",
    active: false,
    bioAr: "جناح ويلزي قضى مسيرته بأكملها مع مانشستر يونايتد على مدى 24 موسمًا، ويحمل الرقم القياسي لأكثر الألقاب فوزًا في تاريخ الدوري الإنجليزي الممتاز، واشتهر بمراوغاته السريعة على الجناح الأيسر.",
    bioEn: "A Welsh winger who spent his entire 24-season career at Manchester United, holding the record for most Premier League titles won by a player, and known for his rapid dribbling down the left flank.",
    achievementsAr: [
      "13 لقب دوري إنجليزي ممتاز (رقم قياسي)",
      "دوري أبطال أوروبا مرتين مع مانشستر يونايتد",
      "أكثر لاعب مشاركة في تاريخ مانشستر يونايتد",
      "4 ألقاب كأس الاتحاد الإنجليزي"
    ],
    achievementsEn: [
      "13 Premier League titles (record)",
      "UEFA Champions League twice with Manchester United",
      "Manchester United's all-time appearance record holder",
      "4 FA Cup titles"
    ],
    clubsHistoryAr: ["مانشستر يونايتد"],
    clubsHistoryEn: ["Manchester United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/راين_غيغز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ryan_Giggs"
  },
  {
    id: "eric-cantona",
    nameAr: "إريك كانتونا",
    nameEn: "Eric Cantona",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "مانشستر يونايتد (معتزل)",
    clubEn: "Manchester United (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1983-1997",
    active: false,
    bioAr: "مهاجم فرنسي كاريزمي يُعتبر الشرارة التي أشعلت عصر هيمنة مانشستر يونايتد في التسعينيات، اشتهر بشخصيته القوية وأسلوبه الفني المميز، واعتزل مبكرًا نسبيًا في قمة مستواه.",
    bioEn: "A charismatic French forward credited as the spark that ignited Manchester United's dominant era in the 1990s, known for his strong personality and distinctive flair, who retired relatively early while still at the peak of his powers.",
    achievementsAr: [
      "4 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "لقب أفضل لاعب في الدوري الإنجليزي الممتاز مرتين",
      "2 كأس اتحاد إنجليزي مع مانشستر يونايتد",
      "أيقونة ثقافية في تاريخ الدوري الإنجليزي"
    ],
    achievementsEn: [
      "4 Premier League titles with Manchester United",
      "PFA Players' Player of the Year twice",
      "2 FA Cups with Manchester United",
      "Cultural icon of Premier League history"
    ],
    clubsHistoryAr: ["أوكسير", "مارسيليا", "بوردو (إعارة)", "مونبلييه (إعارة)", "نيم (إعارة)", "ليدز يونايتد", "مانشستر يونايتد"],
    clubsHistoryEn: ["Auxerre", "Marseille", "Bordeaux (loan)", "Montpellier (loan)", "Nîmes (loan)", "Leeds United", "Manchester United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إريك_كانتونا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Eric_Cantona"
  },
  {
    id: "alan-shearer",
    nameAr: "آلان شيرر",
    nameEn: "Alan Shearer",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "نيوكاسل يونايتد (معتزل)",
    clubEn: "Newcastle United (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1988-2006",
    active: false,
    bioAr: "مهاجم إنجليزي يحمل الرقم القياسي لأكثر هداف في تاريخ الدوري الإنجليزي الممتاز بأكثر من 260 هدفًا، اشتهر بقوته البدنية وتسديداته القوية، وكان قائد منتخب إنجلترا في يورو 96.",
    bioEn: "An English forward who holds the all-time Premier League scoring record with over 260 goals, known for his physical power and powerful shooting, and captained England at Euro 96.",
    achievementsAr: [
      "الهداف التاريخي للدوري الإنجليزي الممتاز",
      "لقب الدوري الإنجليزي الممتاز مع بلاكبيرن روفرز",
      "الحذاء الذهبي الأوروبي",
      "هداف الدوري الإنجليزي الممتاز 3 مرات"
    ],
    achievementsEn: [
      "All-time Premier League top scorer",
      "Premier League title with Blackburn Rovers",
      "European Golden Boot",
      "Premier League top scorer 3 times"
    ],
    clubsHistoryAr: ["ساوثهامبتون", "بلاكبيرن روفرز", "نيوكاسل يونايتد"],
    clubsHistoryEn: ["Southampton", "Blackburn Rovers", "Newcastle United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/آلان_شيرر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Alan_Shearer"
  },
  {
    id: "dennis-bergkamp",
    nameAr: "دينيس بيركامب",
    nameEn: "Dennis Bergkamp",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "أرسنال (معتزل)",
    clubEn: "Arsenal (retired)",
    position: { ar: "مهاجم / صانع ألعاب", en: "Forward / Playmaker" },
    era: "1986-2006",
    active: false,
    bioAr: "مهاجم هولندي فني رفيع المستوى، يُعد أحد أفضل اللاعبين الأجانب في تاريخ الدوري الإنجليزي، اشتهر بلمساته الأولى الاستثنائية وأهدافه الفنية، وكان محور فريق أرسنال 'اللامهزوم' موسم 2003-2004.",
    bioEn: "A highly technical Dutch forward regarded as one of the greatest foreign players in Premier League history, famed for his exceptional first touch and technical goals, and the focal point of Arsenal's 'Invincibles' team of 2003-04.",
    achievementsAr: [
      "3 ألقاب دوري إنجليزي ممتاز مع أرسنال",
      "4 ألقاب كأس الاتحاد الإنجليزي مع أرسنال",
      "موسم اللامهزوم 2003-2004 مع أرسنال",
      "أفضل لاعب في هولندا عدة مرات"
    ],
    achievementsEn: [
      "3 Premier League titles with Arsenal",
      "4 FA Cups with Arsenal",
      "Part of Arsenal's unbeaten 'Invincibles' season 2003-04",
      "Dutch Footballer of the Year multiple times"
    ],
    clubsHistoryAr: ["أياكس", "إنتر ميلان", "أرسنال"],
    clubsHistoryEn: ["Ajax", "Inter Milan", "Arsenal"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دينيس_بيركامب",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Dennis_Bergkamp"
  },
  {
    id: "marco-van-basten",
    nameAr: "ماركو فان باستن",
    nameEn: "Marco van Basten",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "ميلان (معتزل)",
    clubEn: "Milan (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1981-1995",
    active: false,
    bioAr: "مهاجم هولندي يُعد من أفضل المهاجمين في تاريخ كرة القدم رغم اعتزاله المبكر بسبب إصابات الكاحل المزمنة، اشتهر بمهاراته الفنية وتوقيته المثالي في التسديد، وأبرز أهدافه 'هدف الفولي' الأسطوري في نهائي يورو 1988.",
    bioEn: "A Dutch forward regarded as one of the greatest strikers in football history despite an early retirement due to chronic ankle injuries, known for his technical skill and perfect finishing, most famously his legendary volley in the Euro 1988 final.",
    achievementsAr: [
      "بطولة أمم أوروبا 1988 مع هولندا",
      "3 جوائز الكرة الذهبية",
      "3 ألقاب دوري إيطالي مع ميلان",
      "دوري أبطال أوروبا مرتين مع ميلان"
    ],
    achievementsEn: [
      "UEFA Euro 1988 title with Netherlands",
      "3 Ballon d'Or awards",
      "3 Serie A titles with Milan",
      "UEFA Champions League twice with Milan"
    ],
    clubsHistoryAr: ["أياكس", "ميلان"],
    clubsHistoryEn: ["Ajax", "Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ماركو_فان_باستن",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Marco_van_Basten"
  },
  {
    id: "johan-cruyff",
    nameAr: "يوهان كرويف",
    nameEn: "Johan Cruyff",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "فيينورد (معتزل)",
    clubEn: "Feyenoord (retired)",
    position: { ar: "مهاجم / صانع ألعاب", en: "Forward / Playmaker" },
    era: "1964-1984",
    active: false,
    bioAr: "أسطورة هولندية يُعد صاحب الفكر الأساسي وراء فلسفة 'كرة القدم الشاملة'، أثّر في تطور اللعبة كلاعب ثم كمدرب أكثر من أي شخص تقريبًا. سُمّيت حركته الشهيرة 'دورة كرويف' نسبة إليه.",
    bioEn: "A Dutch legend credited as the intellectual force behind 'Total Football', influencing the game's development as both a player and later as a manager more than almost anyone else. The famous 'Cruyff Turn' move is named after him.",
    achievementsAr: [
      "3 جوائز الكرة الذهبية",
      "3 ألقاب دوري أبطال أوروبا مع أياكس",
      "الوصول لنهائي كأس العالم 1974 مع هولندا",
      "بنى فلسفة اللعب في برشلونة كمدرب لاحقًا"
    ],
    achievementsEn: [
      "3 Ballon d'Or awards",
      "3 European Cup titles with Ajax",
      "Runner-up at the 1974 World Cup with Netherlands",
      "Later shaped Barcelona's playing philosophy as manager"
    ],
    clubsHistoryAr: ["أياكس", "برشلونة", "لوس أنجلوس أزتيكس", "واشنطن دبلوماتس", "فيينورد"],
    clubsHistoryEn: ["Ajax", "Barcelona", "Los Angeles Aztecs", "Washington Diplomats", "Feyenoord"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/يوهان_كرويف",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Johan_Cruyff"
  },
  {
    id: "franz-beckenbauer",
    nameAr: "فرانز بيكنباور",
    nameEn: "Franz Beckenbauer",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "نيويورك كوزموس (معتزل)",
    clubEn: "New York Cosmos (retired)",
    position: { ar: "مدافع", en: "Defender (Libero)" },
    era: "1964-1983",
    active: false,
    bioAr: "أسطورة ألمانية ابتكر دور 'الليبرو' الهجومي الحديث، وهو أحد لاعبين اثنين فقط فازا بكأس العالم كلاعب وكمدرب. توفي عام 2024.",
    bioEn: "A German legend who pioneered the modern attacking 'libero' (sweeper) role, and one of only two men to win the World Cup as both a player and a manager. He passed away in 2024.",
    achievementsAr: [
      "بطولة كأس العالم 1974 مع ألمانيا الغربية كلاعب",
      "بطولة كأس العالم 1990 مع ألمانيا كمدرب",
      "جائزتا الكرة الذهبية",
      "3 ألقاب دوري أبطال أوروبا مع بايرن ميونخ"
    ],
    achievementsEn: [
      "1974 World Cup title with West Germany as a player",
      "1990 World Cup title with Germany as a manager",
      "2 Ballon d'Or awards",
      "3 European Cup titles with Bayern Munich"
    ],
    clubsHistoryAr: ["بايرن ميونخ", "نيويورك كوزموس", "هامبورغ", "نيويورك كوزموس"],
    clubsHistoryEn: ["Bayern Munich", "New York Cosmos", "Hamburger SV", "New York Cosmos"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فرانتس_بكنباور",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Franz_Beckenbauer"
  },
  {
    id: "lothar-matthaus",
    nameAr: "لوتار ماتيوس",
    nameEn: "Lothar Matthäus",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "بايرن ميونخ (معتزل)",
    clubEn: "Bayern Munich (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1979-2000",
    active: false,
    bioAr: "وسط ميدان ألماني يحمل الرقم القياسي لأكثر لاعب مشاركة في نهائيات كأس العالم، وقاد ألمانيا الغربية للفوز بكأس العالم 1990 كقائد للفريق، وفاز بالكرة الذهبية في نفس العام.",
    bioEn: "A German midfielder who holds the record for most FIFA World Cup finals appearances, captained West Germany to the 1990 World Cup title, and won the Ballon d'Or the same year.",
    achievementsAr: [
      "بطولة كأس العالم 1990 مع ألمانيا الغربية (كقائد)",
      "الكرة الذهبية 1990",
      "أفضل لاعب في العالم من الفيفا 1991",
      "7 ألقاب دوري ألماني مع بايرن ميونخ"
    ],
    achievementsEn: [
      "1990 World Cup title with West Germany (as captain)",
      "1990 Ballon d'Or",
      "1991 FIFA World Player of the Year",
      "7 Bundesliga titles with Bayern Munich"
    ],
    clubsHistoryAr: ["بوروسيا مونشنغلادباخ", "بايرن ميونخ", "إنتر ميلان", "بايرن ميونخ", "نيويورك ميتروستارز"],
    clubsHistoryEn: ["Borussia Mönchengladbach", "Bayern Munich", "Inter Milan", "Bayern Munich", "NY/NJ MetroStars"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/لوتار_ماتيوس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Lothar_Matthäus"
  },
  {
    id: "michael-ballack",
    nameAr: "ميشائيل بالاك",
    nameEn: "Michael Ballack",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "باير ليفركوزن (معتزل)",
    clubEn: "Bayer Leverkusen (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1995-2012",
    active: false,
    bioAr: "وسط ميدان ألماني قوي وشامل، كان قائد منتخب ألمانيا لسنوات طويلة وأحد أبرز لاعبي تشيلسي في عهد جوزيه مورينيو، عُرف بقدرته على الوصول للمنطقة والتهديف من مركز الوسط.",
    bioEn: "A powerful and complete German midfielder who captained the German national team for many years and was one of Chelsea's key players under José Mourinho, known for his ability to arrive in the box and score from midfield.",
    achievementsAr: [
      "الوصول لنهائي كأس العالم 2002 مع ألمانيا",
      "2 لقب دوري إنجليزي ممتاز مع تشيلسي",
      "لقب لاعب العام في ألمانيا 3 مرات",
      "4 ألقاب كأس اتحاد إنجليزي مع تشيلسي"
    ],
    achievementsEn: [
      "Runner-up at the 2002 World Cup with Germany",
      "2 Premier League titles with Chelsea",
      "German Footballer of the Year 3 times",
      "4 FA Cups with Chelsea"
    ],
    clubsHistoryAr: ["كايزرسلاوترن", "باير ليفركوزن", "بايرن ميونخ", "تشيلسي", "باير ليفركوزن"],
    clubsHistoryEn: ["Kaiserslautern", "Bayer Leverkusen", "Bayern Munich", "Chelsea", "Bayer Leverkusen"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ميشائيل_بالاك",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Michael_Ballack"
  },
  {
    id: "manuel-neuer",
    nameAr: "مانويل نوير",
    nameEn: "Manuel Neuer",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "بايرن ميونخ",
    clubEn: "Bayern Munich",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "2006-الآن",
    active: true,
    bioAr: "حارس مرمى ألماني يُعد من أعظم حراس المرمى في التاريخ ومبتكر مفهوم 'الحارس الليبرو' الحديث بقدرته على اللعب بالقدم خارج منطقة الجزاء. توّج بكأس العالم 2014 مع ألمانيا وحصل على القفاز الذهبي للبطولة.",
    bioEn: "A German goalkeeper regarded as one of the greatest of all time and a pioneer of the modern 'sweeper-keeper' role thanks to his ball-playing ability outside the penalty area. He won the 2014 World Cup with Germany and the tournament's Golden Glove.",
    achievementsAr: [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "القفاز الذهبي لكأس العالم 2014",
      "دوري أبطال أوروبا 2013 و2020 مع بايرن ميونخ",
      "عدة ألقاب دوري ألماني مع بايرن ميونخ"
    ],
    achievementsEn: [
      "2014 FIFA World Cup title with Germany",
      "2014 World Cup Golden Glove",
      "UEFA Champions League 2013 and 2020 with Bayern Munich",
      "Multiple Bundesliga titles with Bayern Munich"
    ],
    clubsHistoryAr: ["شالكه 04", "بايرن ميونخ"],
    clubsHistoryEn: ["Schalke 04", "Bayern Munich"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/مانويل_نوير",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Manuel_Neuer"
  },
  {
    id: "sergio-ramos",
    nameAr: "سيرخيو راموس",
    nameEn: "Sergio Ramos",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "موناكو",
    clubEn: "Monaco",
    position: { ar: "مدافع", en: "Defender" },
    era: "2003-الآن",
    active: true,
    bioAr: "مدافع إسباني قوي وقيادي، قضى معظم مسيرته مع ريال مدريد وكان قائده لسنوات طويلة، اشتهر بأهدافه الحاسمة في اللحظات الأخيرة، وأبرزها هدف التعادل في نهائي دوري الأبطال 2014 أمام أتلتيكو مدريد.",
    bioEn: "A powerful and inspirational Spanish defender who spent most of his career at Real Madrid and captained the side for many years, known for his decisive last-minute goals, most notably the equalizer in the 2014 Champions League final against Atlético Madrid.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "أكثر لاعب مشاركة في تاريخ منتخب إسبانيا"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "5 UEFA Champions League titles with Real Madrid",
      "Spain's all-time most-capped player"
    ],
    clubsHistoryAr: ["إشبيلية", "ريال مدريد", "باريس سان جيرمان", "إشبيلية", "موناكو"],
    clubsHistoryEn: ["Sevilla", "Real Madrid", "Paris Saint-Germain", "Sevilla", "Monaco"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/سيرخيو_راموس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Sergio_Ramos"
  },
  {
    id: "fernando-torres",
    nameAr: "فرناندو توريس",
    nameEn: "Fernando Torres",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "أتلتيكو مدريد (معتزل)",
    clubEn: "Atlético Madrid (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2001-2018",
    active: false,
    bioAr: "مهاجم إسباني سريع وحاد التهديف، كان أحد أفضل المهاجمين في العالم خلال فترته مع ليفربول قبل انتقاله بصفقة قياسية إلى تشيلسي، وكان جزءًا من الجيل الذهبي لمنتخب إسبانيا.",
    bioEn: "A fast and clinical Spanish forward who was among the world's best strikers during his Liverpool spell before a then-record transfer to Chelsea, and was part of Spain's golden generation.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "هداف بطولة يورو 2012",
      "دوري أبطال أوروبا 2012 مع تشيلسي"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "Euro 2012 top scorer",
      "2012 UEFA Champions League with Chelsea"
    ],
    clubsHistoryAr: ["أتلتيكو مدريد", "ليفربول", "تشيلسي", "ميلان (إعارة)", "أتلتيكو مدريد"],
    clubsHistoryEn: ["Atlético Madrid", "Liverpool", "Chelsea", "Milan (loan)", "Atlético Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فرناندو_توريس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Fernando_Torres"
  },
  {
    id: "xabi-alonso",
    nameAr: "تشابي ألونسو",
    nameEn: "Xabi Alonso",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "ريال مدريد (معتزل كلاعب)",
    clubEn: "Real Madrid (retired as player)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1999-2017",
    active: false,
    bioAr: "وسط ميدان إسباني عُرف بتمريراته الطويلة الدقيقة وقراءته الذكية للعب، فاز بدوري أبطال أوروبا مع ناديين مختلفين (ليفربول وريال مدريد)، وكان جزءًا أساسيًا من الجيل الذهبي لمنتخب إسبانيا.",
    bioEn: "A Spanish midfielder known for his precise long passing and intelligent reading of the game, he won the UEFA Champions League with two different clubs (Liverpool and Real Madrid) and was a key part of Spain's golden generation.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "دوري أبطال أوروبا 2005 مع ليفربول و2014 مع ريال مدريد",
      "لقب الدوري الإسباني مرتين مع ريال مدريد"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "UEFA Champions League 2005 with Liverpool and 2014 with Real Madrid",
      "La Liga title twice with Real Madrid"
    ],
    clubsHistoryAr: ["ريال سوسييداد", "ليفربول", "ريال مدريد", "بايرن ميونخ"],
    clubsHistoryEn: ["Real Sociedad", "Liverpool", "Real Madrid", "Bayern Munich"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/تشابي_ألونسو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Xabi_Alonso"
  },
  {
    id: "raul-gonzalez",
    nameAr: "راؤول غونزاليس",
    nameEn: "Raúl González",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "الكوكاز (معتزل)",
    clubEn: "Al Sadd (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1994-2015",
    active: false,
    bioAr: "مهاجم إسباني وأسطورة ريال مدريد، كان الهداف التاريخي للنادي والدوري الإسباني لسنوات طويلة قبل تجاوز الأرقام لاحقًا، ويُعد أحد أعظم لاعبي ريال مدريد في التاريخ.",
    bioEn: "A Spanish forward and Real Madrid legend who was the club's and La Liga's all-time top scorer for many years before later being surpassed, and is regarded as one of the greatest Real Madrid players in history.",
    achievementsAr: [
      "3 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "6 ألقاب دوري إسباني مع ريال مدريد",
      "الهداف التاريخي لدوري أبطال أوروبا لفترة طويلة",
      "قائد ريال مدريد لسنوات طويلة"
    ],
    achievementsEn: [
      "3 UEFA Champions League titles with Real Madrid",
      "6 La Liga titles with Real Madrid",
      "UEFA Champions League all-time top scorer for many years",
      "Real Madrid captain for many years"
    ],
    clubsHistoryAr: ["ريال مدريد", "شالكه 04", "الكوكاز"],
    clubsHistoryEn: ["Real Madrid", "Schalke 04", "Al Sadd"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/راؤول_غونزاليس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Raúl_González"
  },
  {
    id: "karim-benzema",
    nameAr: "كريم بنزيما",
    nameEn: "Karim Benzema",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "الاتحاد (السعودية)",
    clubEn: "Al-Ittihad (Saudi Arabia)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2004-الآن",
    active: true,
    bioAr: "مهاجم فرنسي يُعد أحد أفضل المهاجمين في جيله، قضى أكثر من عقد ونصف مع ريال مدريد وحقق معه إنجازات ضخمة، وتُوّج بالكرة الذهبية عام 2022 بعد موسم استثنائي.",
    bioEn: "A French forward regarded as one of the finest strikers of his generation, he spent over a decade and a half at Real Madrid achieving major honours, and won the Ballon d'Or in 2022 after an exceptional season.",
    achievementsAr: [
      "الكرة الذهبية 2022",
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "هداف دوري أبطال أوروبا في موسم واحد",
      "عدة ألقاب دوري إسباني مع ريال مدريد"
    ],
    achievementsEn: [
      "2022 Ballon d'Or",
      "5 UEFA Champions League titles with Real Madrid",
      "UEFA Champions League top scorer in a single season",
      "Multiple La Liga titles with Real Madrid"
    ],
    clubsHistoryAr: ["أولمبيك ليون", "ريال مدريد", "الاتحاد"],
    clubsHistoryEn: ["Olympique Lyonnais", "Real Madrid", "Al-Ittihad"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كريم_بنزيما",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Karim_Benzema"
  },
  {
    id: "toni-kroos",
    nameAr: "توني كروس",
    nameEn: "Toni Kroos",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "ريال مدريد (معتزل)",
    clubEn: "Real Madrid (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2007-2024",
    active: false,
    bioAr: "وسط ميدان ألماني عُرف بدقته العالية في التمرير وهدوئه التام تحت الضغط، فاز بكأس العالم 2014 مع ألمانيا، وكان محور خط وسط ريال مدريد خلال سنوات هيمنته على دوري أبطال أوروبا.",
    bioEn: "A German midfielder known for his exceptional passing accuracy and calmness under pressure, he won the 2014 World Cup with Germany and was the midfield fulcrum of Real Madrid during its Champions League-dominant years.",
    achievementsAr: [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "6 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "بطولة أمم أوروبا 2024 مع ألمانيا",
      "عدة ألقاب دوري إسباني وألماني"
    ],
    achievementsEn: [
      "2014 FIFA World Cup title with Germany",
      "6 UEFA Champions League titles with Real Madrid",
      "UEFA Euro 2024 title with Germany",
      "Multiple La Liga and Bundesliga titles"
    ],
    clubsHistoryAr: ["بايرن ميونخ", "باير ليفركوزن (إعارة)", "ريال مدريد"],
    clubsHistoryEn: ["Bayern Munich", "Bayer Leverkusen (loan)", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/توني_كروس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Toni_Kroos"
  },
  {
    id: "sergio-aguero",
    nameAr: "سيرخيو أغويرو",
    nameEn: "Sergio Agüero",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "برشلونة (معتزل)",
    clubEn: "Barcelona (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2003-2021",
    active: false,
    bioAr: "مهاجم أرجنتيني وهداف تاريخي لنادي مانشستر سيتي، سجل أحد أشهر الأهداف في تاريخ الدوري الإنجليزي بهدف اللحظات الأخيرة الذي منح السيتي لقب 2012 بطريقة درامية.",
    bioEn: "An Argentine forward and Manchester City's all-time top scorer, he scored one of the most famous goals in Premier League history with a last-minute strike that dramatically won City the 2012 title.",
    achievementsAr: [
      "الهداف التاريخي لنادي مانشستر سيتي",
      "5 ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "بطولة كوبا أمريكا 2021 مع الأرجنتين",
      "هداف الدوري الإنجليزي الممتاز عدة مرات"
    ],
    achievementsEn: [
      "Manchester City's all-time top scorer",
      "5 Premier League titles with Manchester City",
      "2021 Copa América title with Argentina",
      "Premier League top scorer multiple times"
    ],
    clubsHistoryAr: ["إندبندنتي", "أتلتيكو مدريد", "مانشستر سيتي", "برشلونة"],
    clubsHistoryEn: ["Independiente", "Atlético Madrid", "Manchester City", "Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/سيرخيو_أغويرو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Sergio_Agüero"
  },
  {
    id: "roberto-baggio",
    nameAr: "روبرتو باجيو",
    nameEn: "Roberto Baggio",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "برشيا (معتزل)",
    clubEn: "Brescia (retired)",
    position: { ar: "صانع ألعاب / مهاجم", en: "Playmaker / Forward" },
    era: "1982-2004",
    active: false,
    bioAr: "لاعب إيطالي يُلقب بـ'الذيل المقدس'، من أكثر اللاعبين فنية وشعبية في تاريخ الكرة الإيطالية، فاز بالكرة الذهبية عام 1993، وارتبط اسمه بضربة الجزاء الشهيرة التي أضاعها في نهائي كأس العالم 1994.",
    bioEn: "An Italian player nicknamed the 'Divine Ponytail', one of the most technically gifted and popular players in Italian football history, who won the 1993 Ballon d'Or and is remembered for his missed penalty in the 1994 World Cup final.",
    achievementsAr: [
      "الكرة الذهبية 1993",
      "أفضل لاعب في العالم من الفيفا 1993",
      "الوصول لنهائي كأس العالم 1994 مع إيطاليا",
      "كأس الاتحاد الأوروبي مع يوفنتوس"
    ],
    achievementsEn: [
      "1993 Ballon d'Or",
      "1993 FIFA World Player of the Year",
      "Runner-up at the 1994 World Cup with Italy",
      "UEFA Cup with Juventus"
    ],
    clubsHistoryAr: ["فيتشنزا", "فيورنتينا", "يوفنتوس", "ميلان", "بولونيا", "إنتر ميلان", "برشيا"],
    clubsHistoryEn: ["Vicenza", "Fiorentina", "Juventus", "Milan", "Bologna", "Inter Milan", "Brescia"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/روبرتو_باجيو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Roberto_Baggio"
  },
  {
    id: "francesco-totti",
    nameAr: "فرانشيسكو توتي",
    nameEn: "Francesco Totti",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "روما (معتزل)",
    clubEn: "Roma (retired)",
    position: { ar: "صانع ألعاب / مهاجم", en: "Playmaker / Forward" },
    era: "1992-2017",
    active: false,
    bioAr: "أيقونة نادي روما الإيطالي الذي قضى مسيرته بأكملها مع ناديه المحلي، ويُعد الهداف التاريخي للنادي وأحد أعظم لاعبي الدوري الإيطالي، وفاز بكأس العالم 2006 مع إيطاليا.",
    bioEn: "An icon of AS Roma who spent his entire career at his hometown club, he is Roma's all-time top scorer and one of the greatest players in Serie A history, and won the 2006 World Cup with Italy.",
    achievementsAr: [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "لقب الدوري الإيطالي مع روما 2000-2001",
      "الهداف التاريخي لنادي روما",
      "هداف الدوري الإيطالي مرة واحدة"
    ],
    achievementsEn: [
      "2006 FIFA World Cup title with Italy",
      "Serie A title with Roma 2000-01",
      "Roma's all-time top goalscorer",
      "Serie A top scorer once"
    ],
    clubsHistoryAr: ["روما"],
    clubsHistoryEn: ["Roma"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فرانشيسكو_توتي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Francesco_Totti"
  },
  {
    id: "george-best",
    nameAr: "جورج بيست",
    nameEn: "George Best",
    nationalityAr: "إيرلندي شمالي",
    nationalityEn: "Northern Irish",
    clubAr: "بورنموث (معتزل)",
    clubEn: "Bournemouth (retired)",
    position: { ar: "جناح", en: "Winger" },
    era: "1963-1984",
    active: false,
    bioAr: "جناح إيرلندي شمالي يُعد أحد أفضل اللاعبين في تاريخ الدوري الإنجليزي، اشتهر بمراوغاته الاستثنائية وحياته الشخصية المثيرة للجدل، وكان نجم فريق مانشستر يونايتد الفائز بدوري أبطال أوروبا 1968. توفي عام 2005.",
    bioEn: "A Northern Irish winger regarded as one of the greatest players in English football history, known for his extraordinary dribbling ability and controversial personal life, and the star of Manchester United's 1968 European Cup-winning team. He passed away in 2005.",
    achievementsAr: [
      "دوري أبطال أوروبا 1968 مع مانشستر يونايتد",
      "الكرة الذهبية 1968",
      "لقبا دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "يُعد من أفضل 10 لاعبين في تاريخ الدوري الإنجليزي بحسب استطلاعات عديدة"
    ],
    achievementsEn: [
      "1968 European Cup with Manchester United",
      "1968 Ballon d'Or",
      "2 English league titles with Manchester United",
      "Widely ranked among the top 10 English football players in history"
    ],
    clubsHistoryAr: ["مانشستر يونايتد", "لوس أنجلوس أزتيكس", "فولهام", "بورنموث"],
    clubsHistoryEn: ["Manchester United", "Los Angeles Aztecs", "Fulham", "Bournemouth"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جورج_بيست",
    wikiUrlEn: "https://en.wikipedia.org/wiki/George_Best"
  },
  {
    id: "xavi-hernandez",
    nameAr: "تشافي هيرنانديز",
    nameEn: "Xavi Hernández",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "برشلونة (معتزل)",
    clubEn: "Barcelona (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1998-2019",
    active: false,
    bioAr: "وسط ميدان إسباني يُعد عقل برشلونة في عصر التيكي-تاكا الذهبي، اشتهر بتمريراته القصيرة الدقيقة وتحكمه في إيقاع اللعب. قضى مسيرته بأكملها تقريبًا مع برشلونة قبل أن يختتمها في قطر، وعاد لاحقًا مدربًا للنادي.",
    bioEn: "A Spanish midfielder regarded as the brain of Barcelona's golden tiki-taka era, known for his precise short passing and control of the tempo. He spent almost his entire career at Barcelona before finishing it in Qatar, and later returned as the club's head coach.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "4 ألقاب دوري أبطال أوروبا مع برشلونة",
      "8 ألقاب دوري إسباني مع برشلونة"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "4 UEFA Champions League titles with Barcelona",
      "8 La Liga titles with Barcelona"
    ],
    clubsHistoryAr: ["برشلونة", "السد"],
    clubsHistoryEn: ["Barcelona", "Al Sadd"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/تشافي_هيرنانديز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Xavi"
  },
  {
    id: "andres-iniesta",
    nameAr: "أندريس إنييستا",
    nameEn: "Andrés Iniesta",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "الإمارات (معتزل)",
    clubEn: "Emirates Club (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2002-2023",
    active: false,
    bioAr: "وسط ميدان إسباني يُعد أحد أفضل صانعي الألعاب في جيله، سجل هدف الفوز في الوقت الإضافي بنهائي كأس العالم 2010 أمام هولندا ليمنح إسبانيا أعظم إنجاز في تاريخها، وكان جزءًا أساسيًا من عصر التيكي-تاكا في برشلونة.",
    bioEn: "A Spanish midfielder regarded as one of the finest playmakers of his generation, he scored the extra-time winner in the 2010 World Cup final against the Netherlands, giving Spain the greatest achievement in its history, and was a key part of Barcelona's tiki-taka era.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا (هدف الفوز في النهائي)",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "4 ألقاب دوري أبطال أوروبا مع برشلونة",
      "9 ألقاب دوري إسباني مع برشلونة"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain (scored the final's winning goal)",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "4 UEFA Champions League titles with Barcelona",
      "9 La Liga titles with Barcelona"
    ],
    clubsHistoryAr: ["برشلونة", "فيسل كوبي", "الإمارات"],
    clubsHistoryEn: ["Barcelona", "Vissel Kobe", "Emirates Club"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أندريس_إنييستا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Andrés_Iniesta"
  },
  {
    id: "carles-puyol",
    nameAr: "كارليس بويول",
    nameEn: "Carles Puyol",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "برشلونة (معتزل)",
    clubEn: "Barcelona (retired)",
    position: { ar: "مدافع", en: "Defender" },
    era: "1999-2014",
    active: false,
    bioAr: "مدافع إسباني قضى مسيرته بأكملها مع برشلونة وكان قائده لسنوات طويلة خلال أنجح فترة في تاريخ النادي، اشتهر بقوته البدنية وروحه القتالية العالية رغم بنيته الجسدية المتوسطة.",
    bioEn: "A Spanish defender who spent his entire career at Barcelona and captained the club for many years during its most successful era, known for his physical strength and combative spirit despite his relatively modest build.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولة أمم أوروبا 2008 مع إسبانيا",
      "3 ألقاب دوري أبطال أوروبا مع برشلونة",
      "6 ألقاب دوري إسباني مع برشلونة"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2008 title with Spain",
      "3 UEFA Champions League titles with Barcelona",
      "6 La Liga titles with Barcelona"
    ],
    clubsHistoryAr: ["برشلونة"],
    clubsHistoryEn: ["Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كارليس_بويول",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Carles_Puyol"
  },
  {
    id: "gerard-pique",
    nameAr: "جيرارد بيكيه",
    nameEn: "Gerard Piqué",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "برشلونة (معتزل)",
    clubEn: "Barcelona (retired)",
    position: { ar: "مدافع", en: "Defender" },
    era: "2004-2022",
    active: false,
    bioAr: "مدافع إسباني تدرج في أكاديمية مانشستر يونايتد قبل أن يعود لناديه الأم برشلونة ليصبح ركيزة دفاعية أساسية لسنوات طويلة، وسجل هدفًا في نهائي كأس العالم 2010 مع إسبانيا.",
    bioEn: "A Spanish defender who came through Manchester United's academy before returning to his boyhood club Barcelona to become a key defensive pillar for many years, and scored in the 2010 World Cup final with Spain.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولة أمم أوروبا 2012 مع إسبانيا",
      "3 ألقاب دوري أبطال أوروبا مع برشلونة",
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2012 title with Spain",
      "3 UEFA Champions League titles with Barcelona",
      "2008 UEFA Champions League with Manchester United"
    ],
    clubsHistoryAr: ["مانشستر يونايتد", "ثاراغوثا (إعارة)", "برشلونة"],
    clubsHistoryEn: ["Manchester United", "Zaragoza (loan)", "Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جيرارد_بيكيه",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gerard_Piqué"
  },
  {
    id: "luis-suarez",
    nameAr: "لويس سواريز",
    nameEn: "Luis Suárez",
    nationalityAr: "أوروغوياني",
    nationalityEn: "Uruguayan",
    clubAr: "إنتر ميامي",
    clubEn: "Inter Miami",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2005-الآن",
    active: true,
    bioAr: "مهاجم أوروغواياني غزير التهديف، شكّل مع ميسي ونيمار ثلاثيًا هجوميًا أسطوريًا في برشلونة سجّل معه مئات الأهداف، وهو معروف أيضًا بشخصيته النارية داخل الملعب وبعض الحوادث المثيرة للجدل في مسيرته.",
    bioEn: "A prolific Uruguayan forward who formed a legendary attacking trio with Messi and Neymar at Barcelona, scoring hundreds of goals together, and also known for his fiery on-field personality and several controversial incidents in his career.",
    achievementsAr: [
      "دوري أبطال أوروبا 2015 مع برشلونة",
      "الحذاء الذهبي الأوروبي مرتين",
      "4 ألقاب دوري إسباني مع برشلونة",
      "بطولة كوبا أمريكا 2011 مع الأوروغواي"
    ],
    achievementsEn: [
      "2015 UEFA Champions League with Barcelona",
      "European Golden Shoe twice",
      "4 La Liga titles with Barcelona",
      "2011 Copa América title with Uruguay"
    ],
    clubsHistoryAr: ["ناسيونال مونتيفيديو", "خرونينغن", "أياكس", "ليفربول", "برشلونة", "أتلتيكو مدريد", "غريميو", "إنتر ميامي"],
    clubsHistoryEn: ["Nacional", "Groningen", "Ajax", "Liverpool", "Barcelona", "Atlético Madrid", "Grêmio", "Inter Miami"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/لويس_سواريز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Luis_Suárez"
  },
  {
    id: "rivaldo",
    nameAr: "ريفالدو",
    nameEn: "Rivaldo",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "موغي ميريم (معتزل)",
    clubEn: "Mogi Mirim (retired)",
    position: { ar: "صانع ألعاب / مهاجم", en: "Playmaker / Forward" },
    era: "1989-2015",
    active: false,
    bioAr: "لاعب برازيلي فني استثنائي اشتهر بتسديداته القوية بقدمه اليسرى ومهاراته الفردية، فاز بالكرة الذهبية عام 1999 وكان محورًا أساسيًا في تتويج برشلونة، ثم توّج بكأس العالم 2002 مع البرازيل.",
    bioEn: "An exceptionally talented Brazilian player known for his powerful left-footed strikes and individual skill, he won the 1999 Ballon d'Or and was a key figure at Barcelona, before winning the 2002 World Cup with Brazil.",
    achievementsAr: [
      "الكرة الذهبية 1999",
      "بطولة كأس العالم 2002 مع البرازيل",
      "أفضل لاعب في العالم من الفيفا 1999",
      "لقب الدوري الإسباني مع برشلونة"
    ],
    achievementsEn: [
      "1999 Ballon d'Or",
      "2002 FIFA World Cup title with Brazil",
      "1999 FIFA World Player of the Year",
      "La Liga title with Barcelona"
    ],
    clubsHistoryAr: ["سانتا كروز", "موغي ميريم", "كورينثيانز", "بالميراس", "ديبورتيفو لاكورنيا", "برشلونة", "ميلان", "كروزيرو", "أولمبياكوس", "الأهلي (الإمارات)"],
    clubsHistoryEn: ["Santa Cruz", "Mogi Mirim", "Corinthians", "Palmeiras", "Deportivo La Coruña", "Barcelona", "Milan", "Cruzeiro", "Olympiacos", "Al Ahli (UAE)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ريفالدو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Rivaldo"
  },
  {
    id: "ronald-koeman",
    nameAr: "رونالد كومان",
    nameEn: "Ronald Koeman",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "فيينورد (معتزل كلاعب)",
    clubEn: "Feyenoord (retired as player)",
    position: { ar: "مدافع", en: "Defender" },
    era: "1980-1997",
    active: false,
    bioAr: "مدافع هولندي عُرف بتسديداته القوية من الكرات الثابتة، وسجّل هدف الفوز في نهائي كأس أوروبا 1992 لبرشلونة أمام سامبدوريا في أول لقب دوري أبطال في تاريخ النادي. عمل لاحقًا مدربًا لبرشلونة نفسه.",
    bioEn: "A Dutch defender known for his powerful shooting from set pieces, he scored the winning goal in the 1992 European Cup final for Barcelona against Sampdoria, the club's first ever European Cup title. He later became Barcelona's own head coach.",
    achievementsAr: [
      "كأس أوروبا 1992 مع برشلونة (هدف الفوز في النهائي)",
      "بطولة أمم أوروبا 1988 مع هولندا",
      "دوري أبطال أوروبا 1988 مع بي إس في آيندهوفن",
      "4 ألقاب دوري إسباني مع برشلونة"
    ],
    achievementsEn: [
      "1992 European Cup with Barcelona (scored the final's winning goal)",
      "UEFA Euro 1988 title with Netherlands",
      "1988 European Cup with PSV Eindhoven",
      "4 La Liga titles with Barcelona"
    ],
    clubsHistoryAr: ["غرونينغن", "أياكس", "بي إس في آيندهوفن", "برشلونة", "فيينورد"],
    clubsHistoryEn: ["Groningen", "Ajax", "PSV Eindhoven", "Barcelona", "Feyenoord"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رونالد_كومان",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ronald_Koeman"
  },
  {
    id: "sergio-busquets",
    nameAr: "سيرجيو بوسكيتس",
    nameEn: "Sergio Busquets",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "إنتر ميامي",
    clubEn: "Inter Miami",
    position: { ar: "وسط ميدان دفاعي", en: "Defensive Midfielder" },
    era: "2008-الآن",
    active: true,
    bioAr: "وسط ميدان دفاعي إسباني يُعد أحد أفضل لاعبي الارتكاز في تاريخ كرة القدم الحديثة، اشتهر بذكائه التكتيكي وقدرته على قراءة اللعب وحماية خط الدفاع رغم قلة أخطائه رغم عدم امتلاكه سرعة استثنائية.",
    bioEn: "A Spanish defensive midfielder regarded as one of the finest holding midfielders in modern football history, known for his tactical intelligence and ability to read the game and shield the defense despite lacking exceptional pace.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولة أمم أوروبا 2012 مع إسبانيا",
      "3 ألقاب دوري أبطال أوروبا مع برشلونة",
      "8 ألقاب دوري إسباني مع برشلونة"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain",
      "UEFA Euro 2012 title with Spain",
      "3 UEFA Champions League titles with Barcelona",
      "8 La Liga titles with Barcelona"
    ],
    clubsHistoryAr: ["برشلونة", "إنتر ميامي"],
    clubsHistoryEn: ["Barcelona", "Inter Miami"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/سيرجيو_بوسكيتس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Sergio_Busquets"
  },
  {
    id: "alfredo-di-stefano",
    nameAr: "ألفريدو دي ستيفانو",
    nameEn: "Alfredo Di Stéfano",
    nationalityAr: "أرجنتيني إسباني",
    nationalityEn: "Argentine-Spanish",
    clubAr: "إسبانيول (معتزل)",
    clubEn: "Espanyol (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1944-1966",
    active: false,
    bioAr: "يُعتبره كثيرون أفضل لاعب في تاريخ ريال مدريد وأحد أعظم لاعبي كرة القدم على الإطلاق، قاد الفريق الملكي للفوز بأول خمس نسخ متتالية من كأس أوروبا (1956-1960)، وسجل في كل النهائيات الخمسة. توفي عام 2014.",
    bioEn: "Widely regarded by many as the greatest player in Real Madrid's history and one of the greatest footballers of all time, he led the club to the first five consecutive European Cup titles (1956-1960), scoring in all five finals. He passed away in 2014.",
    achievementsAr: [
      "5 ألقاب كأس أوروبا متتالية مع ريال مدريد",
      "جائزتا الكرة الذهبية (1957، 1959)",
      "8 ألقاب دوري إسباني مع ريال مدريد",
      "هداف الدوري الإسباني 5 مرات"
    ],
    achievementsEn: [
      "5 consecutive European Cup titles with Real Madrid",
      "2 Ballon d'Or awards (1957, 1959)",
      "8 La Liga titles with Real Madrid",
      "La Liga top scorer 5 times"
    ],
    clubsHistoryAr: ["ريفر بليت", "مليوناريوس", "ريال مدريد", "إسبانيول"],
    clubsHistoryEn: ["River Plate", "Millonarios", "Real Madrid", "Espanyol"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ألفريدو_دي_ستيفانو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Alfredo_Di_Stéfano"
  },
  {
    id: "ferenc-puskas",
    nameAr: "فيرينك بوشكاش",
    nameEn: "Ferenc Puskás",
    nationalityAr: "مجري إسباني",
    nationalityEn: "Hungarian-Spanish",
    clubAr: "ريال مدريد (معتزل)",
    clubEn: "Real Madrid (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1943-1966",
    active: false,
    bioAr: "مهاجم مجري يُعد أحد أعظم الهدافين في تاريخ كرة القدم، كان نجم منتخب المجر الأسطوري في الخمسينيات قبل أن ينتقل إلى ريال مدريد ويصبح جزءًا من العصر الذهبي للنادي، سجل هاتريك في نهائي كأس أوروبا 1960. توفي عام 2006، وسُمّيت جائزة أجمل هدف في العالم باسمه (جائزة بوشكاش).",
    bioEn: "A Hungarian forward regarded as one of the greatest goalscorers in football history, he was the star of Hungary's legendary 1950s national team before moving to Real Madrid and becoming part of the club's golden era, scoring a hat-trick in the 1960 European Cup final. He passed away in 2006, and FIFA's award for the world's best goal is named after him (the Puskás Award).",
    achievementsAr: [
      "3 ألقاب كأس أوروبا مع ريال مدريد",
      "5 ألقاب دوري إسباني مع ريال مدريد",
      "الوصول لنهائي كأس العالم 1954 مع المجر",
      "سُمّيت جائزة أجمل هدف في العالم باسمه"
    ],
    achievementsEn: [
      "3 European Cup titles with Real Madrid",
      "5 La Liga titles with Real Madrid",
      "Runner-up at the 1954 World Cup with Hungary",
      "FIFA's best-goal award is named after him"
    ],
    clubsHistoryAr: ["كيسبيست", "هونفيد", "ريال مدريد"],
    clubsHistoryEn: ["Kispest", "Budapest Honvéd", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فيرينس_بوشكاش",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ferenc_Puskás"
  },
  {
    id: "iker-casillas",
    nameAr: "إيكر كاسياس",
    nameEn: "Iker Casillas",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "بورتو (معتزل)",
    clubEn: "Porto (retired)",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1999-2020",
    active: false,
    bioAr: "حارس مرمى إسباني يُعد من أعظم حراس المرمى في التاريخ، قاد إسبانيا لأول لقب كأس عالم في تاريخها عام 2010، وكان قائد ريال مدريد لسنوات طويلة خلال إحدى أنجح فترات النادي.",
    bioEn: "A Spanish goalkeeper regarded as one of the greatest of all time, he captained Spain to their first-ever World Cup title in 2010, and captained Real Madrid for many years during one of the club's most successful eras.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا (كقائد)",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "3 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "القفاز الذهبي لكأس العالم 2010"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain (as captain)",
      "UEFA Euro 2008 and 2012 titles with Spain",
      "3 UEFA Champions League titles with Real Madrid",
      "2010 World Cup Golden Glove"
    ],
    clubsHistoryAr: ["ريال مدريد", "بورتو"],
    clubsHistoryEn: ["Real Madrid", "Porto"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إيكر_كاسياس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Iker_Casillas"
  },
  {
    id: "roberto-carlos",
    nameAr: "روبرتو كارلوس",
    nameEn: "Roberto Carlos",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Defender (Left-back)" },
    era: "1991-2015",
    active: false,
    bioAr: "ظهير أيسر برازيلي يُعد أحد أفضل لاعبي مركزه في تاريخ كرة القدم، اشتهر بسرعته الفائقة وقوة تسديداته الصاروخية من الكرات الثابتة، وأبرزها هدفه الشهير المنحني ضد فرنسا عام 1997.",
    bioEn: "A Brazilian left-back regarded as one of the greatest players in his position in football history, known for his blistering pace and rocket-powered free-kick strikes, most famously his curling wonder-goal against France in 1997.",
    achievementsAr: [
      "بطولة كأس العالم 2002 مع البرازيل",
      "3 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "4 ألقاب دوري إسباني مع ريال مدريد",
      "من أفضل الظهيرين الأيسرين في تاريخ اللعبة بحسب استطلاعات عديدة"
    ],
    achievementsEn: [
      "2002 FIFA World Cup title with Brazil",
      "3 UEFA Champions League titles with Real Madrid",
      "4 La Liga titles with Real Madrid",
      "Widely ranked among the greatest left-backs in football history"
    ],
    clubsHistoryAr: ["يونيون ساو جواو", "بالميراس", "إنترناسيونالي", "ريال مدريد", "فنربخشة", "قرنطينة (معتزل)"],
    clubsHistoryEn: ["União São João", "Palmeiras", "Inter Milan", "Real Madrid", "Fenerbahçe", "Retired"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/روبرتو_كارلوس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Roberto_Carlos_(footballer,_born_1973)"
  },
  {
    id: "gareth-bale",
    nameAr: "غاريث بيل",
    nameEn: "Gareth Bale",
    nationalityAr: "ويلزي",
    nationalityEn: "Welsh",
    clubAr: "لوس أنجلوس إف سي (معتزل)",
    clubEn: "Los Angeles FC (retired)",
    position: { ar: "جناح", en: "Winger" },
    era: "2006-2023",
    active: false,
    bioAr: "جناح ويلزي سريع وقوي التسديد، انتقل إلى ريال مدريد بصفقة قياسية عالميًا آنذاك وحقق معه إنجازات ضخمة في دوري أبطال أوروبا، وسجل أهدافًا حاسمة في عدة نهائيات، وأبرزها الهدف الأشهر بالمقص في نهائي 2018.",
    bioEn: "A fast and powerful-shooting Welsh winger who moved to Real Madrid in a then-world-record transfer, achieving major UEFA Champions League success, and scoring decisive goals in several finals, most famously his spectacular bicycle-kick goal in the 2018 final.",
    achievementsAr: [
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "قائد منتخب ويلز التاريخي في عدد الأهداف والمشاركات",
      "الوصول لنصف نهائي كأس العالم 2022 مع ويلز",
      "الهداف التاريخي لمنتخب ويلز"
    ],
    achievementsEn: [
      "5 UEFA Champions League titles with Real Madrid",
      "Wales' all-time record scorer and appearance holder",
      "Led Wales to the 2022 World Cup (first appearance since 1958)",
      "Wales' all-time top goalscorer"
    ],
    clubsHistoryAr: ["ساوثهامبتون", "توتنهام هوتسبير", "ريال مدريد", "لوس أنجلوس إف سي"],
    clubsHistoryEn: ["Southampton", "Tottenham Hotspur", "Real Madrid", "Los Angeles FC"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/غاريث_بيل",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gareth_Bale"
  },
  {
    id: "vinicius-junior",
    nameAr: "فينيسيوس جونيور",
    nameEn: "Vinícius Júnior",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "جناح", en: "Winger" },
    era: "2017-الآن",
    active: true,
    bioAr: "جناح برازيلي سريع ومراوغ، أصبح أحد أبرز نجوم ريال مدريد والعالم في العقد الحالي، وكان صاحب الهدف الوحيد في نهائي دوري أبطال أوروبا 2022 أمام ليفربول.",
    bioEn: "A fast and skillful Brazilian winger who has become one of Real Madrid's and the world's standout stars of the current decade, and scored the only goal in the 2022 UEFA Champions League final against Liverpool.",
    achievementsAr: [
      "3 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "هدف نهائي دوري أبطال أوروبا 2022",
      "عدة ألقاب دوري إسباني مع ريال مدريد",
      "أفضل لاعب في نهائي دوري أبطال أوروبا 2024"
    ],
    achievementsEn: [
      "3 UEFA Champions League titles with Real Madrid",
      "Scorer of the winning goal in the 2022 Champions League final",
      "Multiple La Liga titles with Real Madrid",
      "2024 UEFA Champions League final Player of the Match"
    ],
    clubsHistoryAr: ["فلامنغو", "ريال مدريد"],
    clubsHistoryEn: ["Flamengo", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فينيسيوس_جونيور",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Vinícius_Júnior"
  },
  {
    id: "lamine-yamal",
    nameAr: "لامين يامال",
    nameEn: "Lamine Yamal",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "برشلونة",
    clubEn: "Barcelona",
    position: { ar: "جناح", en: "Winger" },
    era: "2023-الآن",
    active: true,
    bioAr: "جناح إسباني شاب يُعد أبرز المواهب الصاعدة في كرة القدم العالمية، تخرّج من أكاديمية لا ماسيا وأصبح أساسيًا في برشلونة وهو لم يتجاوز السادسة عشرة، وساهم في فوز إسبانيا بلقب يورو 2024 وهو في السابعة عشرة من عمره.",
    bioEn: "A young Spanish winger regarded as one of the brightest emerging talents in world football, he graduated from La Masia academy and became a Barcelona regular before turning 17, and helped Spain win the Euro 2024 title at age 17.",
    achievementsAr: [
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "لقب الدوري الإسباني مع برشلونة",
      "جائزة كوبا تروفي لأفضل لاعب شاب في أوروبا",
      "أصغر لاعب يسجل ويصنع في نهائيات كأس أمم أوروبا"
    ],
    achievementsEn: [
      "UEFA Euro 2024 title with Spain",
      "La Liga title with Barcelona",
      "Kopa Trophy for Europe's best young player",
      "Youngest player to score and assist at a UEFA Euro finals"
    ],
    clubsHistoryAr: ["برشلونة"],
    clubsHistoryEn: ["Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/لامين_يامال",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Lamine_Yamal"
  },
  {
    id: "pedri",
    nameAr: "بيدري",
    nameEn: "Pedri",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "برشلونة",
    clubEn: "Barcelona",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2020-الآن",
    active: true,
    bioAr: "وسط ميدان إسباني عُرف بأناقته الفنية وتحكمه في إيقاع اللعب منذ ظهوره المبكر مع برشلونة، يُقارن أسلوب لعبه بأساطير النادي مثل إنييستا، وأصبح أحد ركائز خط وسط برشلونة ومنتخب إسبانيا.",
    bioEn: "A Spanish midfielder known for his technical elegance and control of the game's tempo since his early breakthrough at Barcelona, often compared in style to club legends like Iniesta, and now a key pillar of both Barcelona's and Spain's midfield.",
    achievementsAr: [
      "الكرة الذهبية الفخرية لأفضل لاعب شاب (جائزة كوبا) 2021",
      "لقب الدوري الإسباني مع برشلونة",
      "بطولة دوري الأمم الأوروبية 2023 مع إسبانيا",
      "أفضل لاعب شاب في بطولة يورو 2020"
    ],
    achievementsEn: [
      "2021 Kopa Trophy for best young player",
      "La Liga title with Barcelona",
      "2023 UEFA Nations League title with Spain",
      "Euro 2020 Young Player of the Tournament"
    ],
    clubsHistoryAr: ["لاس بالماس", "برشلونة"],
    clubsHistoryEn: ["Las Palmas", "Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بيدري",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Pedri"
  },
  {
    id: "raphinha",
    nameAr: "رافينيا",
    nameEn: "Raphinha",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "برشلونة",
    clubEn: "Barcelona",
    position: { ar: "جناح", en: "Winger" },
    era: "2014-الآن",
    active: true,
    bioAr: "جناح برازيلي انضم إلى برشلونة قادمًا من ليدز يونايتد، وأصبح أحد أهم لاعبي الفريق الهجوميين تحت قيادة هانسي فليك، وكان من أبرز المرشحين للكرة الذهبية بعد موسم استثنائي حقق فيه أرقامًا تهديفية عالية.",
    bioEn: "A Brazilian winger who joined Barcelona from Leeds United and became one of the team's key attacking players under Hansi Flick, emerging as a leading Ballon d'Or contender after an exceptional season with high goal and assist numbers.",
    achievementsAr: [
      "لقب الدوري الإسباني مع برشلونة",
      "كأس ملك إسبانيا مع برشلونة",
      "من أبرز المرشحين للكرة الذهبية",
      "هداف ومصنع رئيسي في هجوم برشلونة"
    ],
    achievementsEn: [
      "La Liga title with Barcelona",
      "Copa del Rey with Barcelona",
      "Leading Ballon d'Or contender",
      "Key scorer and creator in Barcelona's attack"
    ],
    clubsHistoryAr: ["أفينيدا", "فيتوريا", "سبورتينغ لشبونة", "رين", "ليدز يونايتد", "برشلونة"],
    clubsHistoryEn: ["Avaí", "Vitória", "Sporting CP", "Rennes", "Leeds United", "Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رافينيا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Raphinha"
  },
  {
    id: "frenkie-de-jong",
    nameAr: "فرينكي دي يونغ",
    nameEn: "Frenkie de Jong",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "برشلونة",
    clubEn: "Barcelona",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2015-الآن",
    active: true,
    bioAr: "وسط ميدان هولندي عُرف بقدرته الفنية العالية على حمل الكرة والخروج من الضغط، انتقل إلى برشلونة قادمًا من أياكس بصفقة كبيرة، وأصبح أحد أهم لاعبي وسط الملعب في الفريق الكتالوني.",
    bioEn: "A Dutch midfielder known for his exceptional technical ability to carry the ball and evade pressure, he joined Barcelona from Ajax in a major transfer and became one of the club's most important midfielders.",
    achievementsAr: [
      "دوري أبطال أوروبا 2019 (نهائي) مع أياكس (وصول للنصف النهائي)",
      "لقب الدوري الإسباني مع برشلونة",
      "كأس ملك إسبانيا مع برشلونة",
      "لاعب أساسي في منتخب هولندا"
    ],
    achievementsEn: [
      "Reached the 2019 Champions League semi-final with Ajax",
      "La Liga title with Barcelona",
      "Copa del Rey with Barcelona",
      "Key player for the Netherlands national team"
    ],
    clubsHistoryAr: ["ويلم الثاني", "أياكس", "برشلونة"],
    clubsHistoryEn: ["Willem II", "Ajax", "Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فرينكي_دي_يونغ",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Frenkie_de_Jong"
  },
  {
    id: "pau-cubarsi",
    nameAr: "باو كوبارسي",
    nameEn: "Pau Cubarsí",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "برشلونة",
    clubEn: "Barcelona",
    position: { ar: "مدافع", en: "Defender" },
    era: "2023-الآن",
    active: true,
    bioAr: "مدافع إسباني شاب تخرّج من أكاديمية لا ماسيا وأصبح أساسيًا في قلب دفاع برشلونة رغم صغر سنه، عُرف بهدوئه ونضجه التكتيكي غير المعتاد لعمره منذ ظهوره الأول.",
    bioEn: "A young Spanish defender who graduated from La Masia academy and became a Barcelona first-team regular in central defense despite his young age, known for his calmness and unusually mature tactical reading since his debut.",
    achievementsAr: [
      "لقب الدوري الإسباني مع برشلونة",
      "كأس ملك إسبانيا مع برشلونة",
      "أحد أصغر المدافعين الأساسيين في تاريخ برشلونة الحديث",
      "لاعب أساسي في منتخب إسبانيا للشباب ثم الأول"
    ],
    achievementsEn: [
      "La Liga title with Barcelona",
      "Copa del Rey with Barcelona",
      "One of the youngest ever regular starting defenders in Barcelona's modern history",
      "Regular for Spain's youth teams and now the senior national team"
    ],
    clubsHistoryAr: ["برشلونة"],
    clubsHistoryEn: ["Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/باو_كوبارسي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Pau_Cubarsí"
  },
  {
    id: "jude-bellingham",
    nameAr: "جود بيلينغهام",
    nameEn: "Jude Bellingham",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "وسط ميدان هجومي", en: "Attacking Midfielder" },
    era: "2019-الآن",
    active: true,
    bioAr: "وسط ميدان إنجليزي شاب أصبح أحد أهم نجوم ريال مدريد بعد انتقاله من بوروسيا دورتموند، عُرف بقدرته على الوصول للمنطقة والتهديف بغزارة رغم لعبه كوسط ميدان، وسجل أهدافًا حاسمة في موسمه الأول مع النادي الملكي.",
    bioEn: "A young English midfielder who became one of Real Madrid's most important stars following his move from Borussia Dortmund, known for his ability to arrive in the box and score prolifically despite playing as a midfielder, and scored decisive goals in his debut season with the club.",
    achievementsAr: [
      "دوري أبطال أوروبا مع ريال مدريد",
      "لقب الدوري الإسباني مع ريال مدريد",
      "أفضل لاعب شاب في الدوري الإسباني في موسمه الأول",
      "قائد جيل جديد من نجوم منتخب إنجلترا"
    ],
    achievementsEn: [
      "UEFA Champions League title with Real Madrid",
      "La Liga title with Real Madrid",
      "La Liga Best Young Player in his debut season",
      "Leading figure of England's new generation of stars"
    ],
    clubsHistoryAr: ["بيرمنغهام سيتي", "بوروسيا دورتموند", "ريال مدريد"],
    clubsHistoryEn: ["Birmingham City", "Borussia Dortmund", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جود_بيلينغهام",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Jude_Bellingham"
  },
  {
    id: "thibaut-courtois",
    nameAr: "تيبو كورتوا",
    nameEn: "Thibaut Courtois",
    nationalityAr: "بلجيكي",
    nationalityEn: "Belgian",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "2009-الآن",
    active: true,
    bioAr: "حارس مرمى بلجيكي طويل القامة يُعد من أفضل حراس المرمى في العالم حاليًا، لعب لأتلتيكو مدريد وتشيلسي قبل انتقاله إلى ريال مدريد، وقدّم أداءً استثنائيًا في نهائي دوري أبطال أوروبا 2022 ساهم في فوز فريقه باللقب.",
    bioEn: "A tall Belgian goalkeeper regarded as one of the world's best currently, having played for Atlético Madrid and Chelsea before joining Real Madrid, where he delivered an exceptional performance in the 2022 Champions League final that helped his side win the title.",
    achievementsAr: [
      "دوري أبطال أوروبا 2022 مع ريال مدريد (أفضل لاعب في النهائي)",
      "لقب الدوري الإنجليزي الممتاز مع تشيلسي",
      "لقب الدوري الإسباني مع أتلتيكو مدريد وريال مدريد",
      "القفاز الذهبي لكأس العالم 2018 مع بلجيكا"
    ],
    achievementsEn: [
      "2022 UEFA Champions League with Real Madrid (final Player of the Match)",
      "Premier League title with Chelsea",
      "La Liga title with Atlético Madrid and Real Madrid",
      "2018 World Cup Golden Glove with Belgium"
    ],
    clubsHistoryAr: ["خنت", "تشيلسي", "أتلتيكو مدريد (إعارة)", "تشيلسي", "ريال مدريد"],
    clubsHistoryEn: ["Genk", "Chelsea", "Atlético Madrid (loan)", "Chelsea", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/تيبو_كورتوا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Thibaut_Courtois"
  },
  {
    id: "rodrygo",
    nameAr: "رودريغو غويس",
    nameEn: "Rodrygo",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "جناح", en: "Winger" },
    era: "2017-الآن",
    active: true,
    bioAr: "جناح برازيلي شاب انضم إلى ريال مدريد قادمًا من سانتوس، وأصبح أحد أبرز المواهب البرازيلية في الفريق الملكي إلى جانب مواطنه فينيسيوس جونيور، وسجل أهدافًا حاسمة في مباريات كبرى بدوري أبطال أوروبا.",
    bioEn: "A young Brazilian winger who joined Real Madrid from Santos and became one of the club's standout Brazilian talents alongside compatriot Vinícius Júnior, scoring decisive goals in major UEFA Champions League matches.",
    achievementsAr: [
      "دوري أبطال أوروبا مع ريال مدريد (عدة مرات)",
      "لقب الدوري الإسباني مع ريال مدريد",
      "هدفان حاسمان في نصف نهائي دوري الأبطال 2022 أمام مانشستر سيتي",
      "لاعب أساسي في منتخب البرازيل"
    ],
    achievementsEn: [
      "UEFA Champions League with Real Madrid (multiple times)",
      "La Liga title with Real Madrid",
      "Two decisive goals in the 2022 Champions League semi-final against Manchester City",
      "Regular for the Brazil national team"
    ],
    clubsHistoryAr: ["سانتوس", "ريال مدريد"],
    clubsHistoryEn: ["Santos", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رودريغو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Rodrygo"
  },
  {
    id: "federico-valverde",
    nameAr: "فيديريكو فالفيردي",
    nameEn: "Federico Valverde",
    nationalityAr: "أوروغواياني",
    nationalityEn: "Uruguayan",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2016-الآن",
    active: true,
    bioAr: "وسط ميدان أوروغواياني شامل يُعرف بقوته البدنية وقدرته على العمل الدفاعي والهجومي معًا وتسديداته القوية من خارج منطقة الجزاء، أصبح أحد أهم ركائز ريال مدريد ومنتخب الأوروغواي.",
    bioEn: "A complete Uruguayan midfielder known for his physical power, ability to contribute both defensively and offensively, and powerful long-range shooting, he has become one of the key pillars for both Real Madrid and the Uruguay national team.",
    achievementsAr: [
      "دوري أبطال أوروبا مع ريال مدريد (عدة مرات)",
      "لقب الدوري الإسباني مع ريال مدريد (عدة مرات)",
      "هدف حاسم في نهائي دوري أبطال أوروبا 2024",
      "لاعب أساسي في منتخب الأوروغواي"
    ],
    achievementsEn: [
      "UEFA Champions League with Real Madrid (multiple times)",
      "La Liga title with Real Madrid (multiple times)",
      "Scored a decisive goal in the 2024 Champions League final",
      "Regular for the Uruguay national team"
    ],
    clubsHistoryAr: ["بينارول", "ديبورتيفو لاكورنيا (إعارة)", "ريال مدريد"],
    clubsHistoryEn: ["Peñarol", "Deportivo La Coruña (loan)", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فيديريكو_فالفيردي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Federico_Valverde"
  },
  {
    id: "aurelien-tchouameni",
    nameAr: "أوريليان تشوامني",
    nameEn: "Aurélien Tchouaméni",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "وسط ميدان دفاعي", en: "Defensive Midfielder" },
    era: "2017-الآن",
    active: true,
    bioAr: "وسط ميدان دفاعي فرنسي انضم إلى ريال مدريد قادمًا من موناكو بصفقة كبيرة، عُرف بقدرته على استخلاص الكرات وتوزيعها بدقة، وأصبح خيارًا أساسيًا لخط وسط الفريق الملكي ومنتخب فرنسا.",
    bioEn: "A French defensive midfielder who joined Real Madrid from Monaco in a major transfer, known for his ball-winning ability and accurate distribution, becoming a key option in the midfield for both the club and the France national team.",
    achievementsAr: [
      "دوري أبطال أوروبا مع ريال مدريد (عدة مرات)",
      "لقب الدوري الإسباني مع ريال مدريد",
      "الوصول لنهائي كأس العالم 2022 مع فرنسا",
      "لاعب أساسي في خط وسط منتخب فرنسا"
    ],
    achievementsEn: [
      "UEFA Champions League with Real Madrid (multiple times)",
      "La Liga title with Real Madrid",
      "Runner-up at the 2022 World Cup with France",
      "Regular in France's midfield"
    ],
    clubsHistoryAr: ["بوردو", "موناكو", "ريال مدريد"],
    clubsHistoryEn: ["Bordeaux", "Monaco", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أوريلين_تشواميني",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Aurélien_Tchouaméni"
  },
  {
    id: "eder-militao",
    nameAr: "إيدير ميليتاو",
    nameEn: "Éder Militão",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "مدافع", en: "Defender" },
    era: "2015-الآن",
    active: true,
    bioAr: "مدافع برازيلي سريع وقوي، أصبح أحد أعمدة دفاع ريال مدريد منذ انضمامه من بورتو، عُرف بقدرته على المواجهات الفردية وسرعته العالية في التعامل مع المهاجمين المنافسين.",
    bioEn: "A fast and powerful Brazilian defender who has become one of the pillars of Real Madrid's defense since joining from Porto, known for his ability in individual duels and his pace in dealing with opposing forwards.",
    achievementsAr: [
      "دوري أبطال أوروبا مع ريال مدريد (عدة مرات)",
      "لقب الدوري الإسباني مع ريال مدريد (عدة مرات)",
      "لاعب أساسي في دفاع منتخب البرازيل",
      "جزء من ثلاثي الدفاع الذي قاد ريال مدريد لموسم اللقبين 2021-2022"
    ],
    achievementsEn: [
      "UEFA Champions League with Real Madrid (multiple times)",
      "La Liga title with Real Madrid (multiple times)",
      "Regular in Brazil's national team defense",
      "Part of the defensive unit that led Real Madrid's 2021-22 double-winning season"
    ],
    clubsHistoryAr: ["ساو باولو", "بورتو", "ريال مدريد"],
    clubsHistoryEn: ["São Paulo", "Porto", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إيدير_ميليتاو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Éder_Militão"
  },
  {
    id: "bukayo-saka",
    nameAr: "بوكايو ساكا",
    nameEn: "Bukayo Saka",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "أرسنال",
    clubEn: "Arsenal",
    position: { ar: "جناح", en: "Winger" },
    era: "2018-الآن",
    active: true,
    bioAr: "جناح إنجليزي تخرّج من أكاديمية أرسنال وأصبح أحد أهم نجوم الفريق، عُرف بمهاراته الفردية وتسديداته من الجناح الأيمن، وكان عنصرًا أساسيًا في تتويج أرسنال بلقب الدوري الإنجليزي الممتاز موسم 2025-2026 بعد غياب طويل عن المنافسة على اللقب.",
    bioEn: "An English winger who graduated from Arsenal's academy and became one of the club's most important players, known for his individual skill and finishing from the right flank, and a key contributor to Arsenal's 2025-26 Premier League title after a long wait to compete for the championship.",
    achievementsAr: [
      "لقب الدوري الإنجليزي الممتاز 2025-2026 مع أرسنال",
      "الوصول لنهائي كأس العالم للأندية / بطولات أوروبية مع أرسنال",
      "بطولة أمم أوروبا 2020 (نهائي) مع إنجلترا",
      "لاعب أساسي في منتخب إنجلترا"
    ],
    achievementsEn: [
      "2025-26 Premier League title with Arsenal",
      "Reached major European finals with Arsenal",
      "Runner-up at UEFA Euro 2020 with England",
      "Regular for the England national team"
    ],
    clubsHistoryAr: ["أرسنال"],
    clubsHistoryEn: ["Arsenal"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بوكايو_ساكا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Bukayo_Saka"
  },
  {
    id: "phil-foden",
    nameAr: "فيل فودين",
    nameEn: "Phil Foden",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "مانشستر سيتي",
    clubEn: "Manchester City",
    position: { ar: "جناح / وسط ميدان هجومي", en: "Winger / Attacking Midfielder" },
    era: "2017-الآن",
    active: true,
    bioAr: "لاعب إنجليزي تخرّج من أكاديمية مانشستر سيتي وأصبح أحد أهم نجومه، عُرف بمهاراته الفنية العالية وقدرته على اللعب في أكثر من مركز هجومي، وفاز بجائزة أفضل لاعب شاب في الدوري الإنجليزي الممتاز عدة مرات.",
    bioEn: "An English player who graduated from Manchester City's academy and became one of its most important stars, known for his high technical skill and versatility in multiple attacking positions, winning the Premier League Young Player of the Season award multiple times.",
    achievementsAr: [
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "أفضل لاعب شاب في الدوري الإنجليزي الممتاز عدة مرات",
      "لاعب أساسي في منتخب إنجلترا"
    ],
    achievementsEn: [
      "2023 UEFA Champions League with Manchester City",
      "Multiple Premier League titles with Manchester City",
      "Premier League Young Player of the Season multiple times",
      "Regular for the England national team"
    ],
    clubsHistoryAr: ["مانشستر سيتي"],
    clubsHistoryEn: ["Manchester City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فيل_فودين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Phil_Foden"
  },
  {
    id: "cole-palmer",
    nameAr: "كول بالمر",
    nameEn: "Cole Palmer",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "تشيلسي",
    clubEn: "Chelsea",
    position: { ar: "وسط ميدان هجومي", en: "Attacking Midfielder" },
    era: "2020-الآن",
    active: true,
    bioAr: "لاعب إنجليزي انتقل من مانشستر سيتي إلى تشيلسي وأصبح النجم الأبرز في الفريق، عُرف بهدوئه أمام المرمى وقدرته على صناعة الفرص، وأصبح أحد أفضل صناعي الألعاب الشباب في الدوري الإنجليزي الممتاز.",
    bioEn: "An English player who moved from Manchester City to Chelsea and became the club's standout star, known for his composure in front of goal and chance creation, emerging as one of the finest young playmakers in the Premier League.",
    achievementsAr: [
      "دوري المؤتمر الأوروبي / بطولات أوروبية مع تشيلسي",
      "هداف ومصنع رئيسي في هجوم تشيلسي",
      "لاعب الشهر في الدوري الإنجليزي الممتاز عدة مرات",
      "لاعب أساسي في منتخب إنجلترا"
    ],
    achievementsEn: [
      "European competition success with Chelsea",
      "Key scorer and creator in Chelsea's attack",
      "Premier League Player of the Month multiple times",
      "Regular for the England national team"
    ],
    clubsHistoryAr: ["مانشستر سيتي", "تشيلسي"],
    clubsHistoryEn: ["Manchester City", "Chelsea"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كول_بالمر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Cole_Palmer"
  },
  {
    id: "virgil-van-dijk",
    nameAr: "فيرجيل فان دايك",
    nameEn: "Virgil van Dijk",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "ليفربول",
    clubEn: "Liverpool",
    position: { ar: "مدافع", en: "Defender" },
    era: "2013-الآن",
    active: true,
    bioAr: "مدافع هولندي وقائد ليفربول، يُعد أحد أفضل قلوب الدفاع في العالم منذ انتقاله من ساوثهامبتون بصفقة قياسية لمدافع آنذاك، اشتهر بقراءته الذكية للعب وسيطرته الهوائية، وقاد ليفربول للفوز بدوري أبطال أوروبا والدوري الإنجليزي الممتاز.",
    bioEn: "A Dutch defender and Liverpool captain, regarded as one of the world's best centre-backs since his then-record transfer from Southampton, known for his intelligent reading of the game and aerial dominance, and captained Liverpool to UEFA Champions League and Premier League glory.",
    achievementsAr: [
      "دوري أبطال أوروبا 2019 مع ليفربول",
      "عدة ألقاب دوري إنجليزي ممتاز مع ليفربول",
      "قائد منتخب هولندا",
      "المركز الثاني في الكرة الذهبية 2019"
    ],
    achievementsEn: [
      "2019 UEFA Champions League with Liverpool",
      "Multiple Premier League titles with Liverpool",
      "Captain of the Netherlands national team",
      "Runner-up for the 2019 Ballon d'Or"
    ],
    clubsHistoryAr: ["خرونينغن", "سلتيك", "ساوثهامبتون", "ليفربول"],
    clubsHistoryEn: ["Groningen", "Celtic", "Southampton", "Liverpool"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فيرجيل_فان_دايك",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Virgil_van_Dijk"
  },
  {
    id: "bruno-fernandes",
    nameAr: "برونو فرنانديز",
    nameEn: "Bruno Fernandes",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "مانشستر يونايتد",
    clubEn: "Manchester United",
    position: { ar: "وسط ميدان هجومي", en: "Attacking Midfielder" },
    era: "2012-الآن",
    active: true,
    bioAr: "وسط ميدان برتغالي وقائد مانشستر يونايتد، عُرف بتمريراته الحاسمة الكثيرة وتسديداته من الكرات الثابتة، وأصبح صانع الألعاب الرئيسي للفريق منذ انتقاله من سبورتينغ لشبونة، رغم مرور الفريق بسنوات صعبة نسبيًا.",
    bioEn: "A Portuguese midfielder and Manchester United captain, known for his prolific chance creation and set-piece delivery, having become the club's principal playmaker since joining from Sporting CP, despite the team going through relatively difficult years.",
    achievementsAr: [
      "أكثر لاعب صناعة للفرص في الدوري الإنجليزي الممتاز لعدة مواسم",
      "كأس الاتحاد الأوروبي 2017 مع سبورتينغ",
      "دوري الأمم الأوروبية مع البرتغال",
      "قائد مانشستر يونايتد"
    ],
    achievementsEn: [
      "Premier League chance-creation leader for multiple seasons",
      "2017 UEFA Europa League runner-up with Sporting CP era honours",
      "UEFA Nations League titles with Portugal",
      "Manchester United captain"
    ],
    clubsHistoryAr: ["نوفارا (إعارة)", "أودينيزي", "سامبدوريا", "سبورتينغ لشبونة", "مانشستر يونايتد"],
    clubsHistoryEn: ["Novara (loan)", "Udinese", "Sampdoria", "Sporting CP", "Manchester United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/برونو_فرنانديز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Bruno_Fernandes"
  },
  {
    id: "richarlison",
    nameAr: "ريتشارليسون",
    nameEn: "Richarlison",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "توتنهام هوتسبير",
    clubEn: "Tottenham Hotspur",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2015-الآن",
    active: true,
    bioAr: "مهاجم برازيلي قوي ومتحرك، انتقل إلى توتنهام هوتسبير قادمًا من إيفرتون، ويُعرف بأهدافه الأكروباتية وأسلوبه الاحتفالي المميز بتقليد حركة القوس، وهو لاعب أساسي في هجوم توتنهام ومنتخب البرازيل.",
    bioEn: "A powerful and mobile Brazilian forward who moved to Tottenham Hotspur from Everton, known for his acrobatic goals and his distinctive bow-and-arrow celebration, and a key player in Tottenham's attack and the Brazil national team.",
    achievementsAr: [
      "بطولة الألعاب الأولمبية 2020 مع البرازيل",
      "أفضل لاعب في الأولمبياد 2020",
      "لاعب أساسي في هجوم توتنهام",
      "هدف أكروباتي شهير في كأس العالم 2022"
    ],
    achievementsEn: [
      "2020 Olympic gold medal with Brazil",
      "2020 Olympics top scorer / MVP recognition",
      "Key player in Tottenham's attack",
      "Famous acrobatic goal at the 2022 World Cup"
    ],
    clubsHistoryAr: ["أمريكا مينيرو", "فلوميننسي", "واتفورد", "إيفرتون", "توتنهام هوتسبير"],
    clubsHistoryEn: ["América Mineiro", "Fluminense", "Watford", "Everton", "Tottenham Hotspur"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ريتشارليسون",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Richarlison"
  },
  {
    id: "ronaldo-nazario",
    nameAr: "رونالدو نازاريو",
    nameEn: "Ronaldo Nazário",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "كورينثيانز (معتزل)",
    clubEn: "Corinthians (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1993-2011",
    active: false,
    bioAr: "مهاجم برازيلي يُلقب بـ'الظاهرة'، يُعتبره كثيرون من أعظم المهاجمين في تاريخ كرة القدم بفضل سرعته ومهاراته الفردية الاستثنائية قبل تعرضه لإصابات ركبة متكررة أثرت على مسيرته. توّج بكأس العالم مرتين مع البرازيل (1994، 2002) وفاز بالكرة الذهبية عام 1997.",
    bioEn: "A Brazilian forward nicknamed 'The Phenomenon', widely regarded as one of the greatest strikers in football history for his exceptional pace and individual skill before recurring knee injuries affected his career. He won the World Cup twice with Brazil (1994, 2002) and the Ballon d'Or in 1997.",
    achievementsAr: [
      "بطولتا كأس العالم مع البرازيل (1994، 2002)",
      "الكرة الذهبية 1997",
      "أفضل لاعب في العالم من الفيفا 3 مرات",
      "هداف نهائيات كأس العالم التاريخي (سابقًا) بـ 15 هدفًا"
    ],
    achievementsEn: [
      "2 FIFA World Cup titles with Brazil (1994, 2002)",
      "1997 Ballon d'Or",
      "FIFA World Player of the Year 3 times",
      "Former all-time World Cup finals top scorer with 15 goals"
    ],
    clubsHistoryAr: ["كروزيرو", "بي إس في آيندهوفن", "برشلونة", "إنتر ميلان", "ريال مدريد", "ميلان", "كورينثيانز"],
    clubsHistoryEn: ["Cruzeiro", "PSV Eindhoven", "Barcelona", "Inter Milan", "Real Madrid", "Milan", "Corinthians"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رونالدو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)"
  },
  {
    id: "michel-platini",
    nameAr: "ميشيل بلاتيني",
    nameEn: "Michel Platini",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "يوفنتوس (معتزل)",
    clubEn: "Juventus (retired)",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder / Playmaker" },
    era: "1972-1987",
    active: false,
    bioAr: "صانع ألعاب فرنسي يحمل الرقم القياسي لأكثر عدد فوز بالكرة الذهبية بثلاث مرات متتالية (1983، 1984، 1985)، قاد فرنسا للفوز بأمم أوروبا 1984 مسجلاً 9 أهداف في البطولة، وكان نجم يوفنتوس في أوجه في منتصف الثمانينيات.",
    bioEn: "A French playmaker who holds the record for most consecutive Ballon d'Or wins with three in a row (1983, 1984, 1985), he led France to the Euro 1984 title scoring 9 goals in the tournament, and was Juventus' star player during their mid-1980s peak.",
    achievementsAr: [
      "3 جوائز كرة ذهبية متتالية (1983، 1984، 1985)",
      "بطولة أمم أوروبا 1984 مع فرنسا (هداف البطولة)",
      "كأس أوروبا 1985 مع يوفنتوس",
      "هداف الدوري الإيطالي 3 مرات"
    ],
    achievementsEn: [
      "3 consecutive Ballon d'Or awards (1983, 1984, 1985)",
      "UEFA Euro 1984 title with France (tournament top scorer)",
      "1985 European Cup with Juventus",
      "Serie A top scorer 3 times"
    ],
    clubsHistoryAr: ["نانسي", "سانت إيتيان", "يوفنتوس"],
    clubsHistoryEn: ["Nancy", "Saint-Étienne", "Juventus"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ميشيل_بلاتيني",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Michel_Platini"
  },
  {
    id: "george-weah",
    nameAr: "جورج ويا",
    nameEn: "George Weah",
    nationalityAr: "ليبيري",
    nationalityEn: "Liberian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1985-2003",
    active: false,
    bioAr: "مهاجم ليبيري يُعد أول وحيد لاعب إفريقي يفوز بالكرة الذهبية حتى الآن (1995)، وأول لاعب إفريقي يُتوَّج بجائزة أفضل لاعب في العالم من الفيفا في نفس العام. بعد اعتزاله انخرط في السياسة وأصبح رئيسًا لجمهورية ليبيريا عام 2018.",
    bioEn: "A Liberian forward and the only African player to have won the Ballon d'Or to date (1995), and the first African to be named FIFA World Player of the Year the same year. After retiring, he entered politics and became President of Liberia in 2018.",
    achievementsAr: [
      "الكرة الذهبية 1995 (أول وحيد إفريقي حتى الآن)",
      "أفضل لاعب في العالم من الفيفا 1995",
      "أفضل لاعب إفريقي في القرن العشرين",
      "أصبح رئيسًا لجمهورية ليبيريا بعد الاعتزال"
    ],
    achievementsEn: [
      "1995 Ballon d'Or (the only African winner to date)",
      "1995 FIFA World Player of the Year",
      "African Footballer of the Century",
      "Became President of Liberia after retiring"
    ],
    clubsHistoryAr: ["توناربا", "موناكو", "باريس سان جيرمان", "ميلان", "تشيلسي", "مانشستر سيتي", "مارسيليا", "الاتحاد"],
    clubsHistoryEn: ["Tonnerre Yaoundé", "Monaco", "Paris Saint-Germain", "Milan", "Chelsea", "Manchester City", "Marseille", "Al-Ittihad"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جورج_ويا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/George_Weah"
  },
  {
    id: "fabio-cannavaro",
    nameAr: "فابيو كانافارو",
    nameEn: "Fabio Cannavaro",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Defender" },
    era: "1992-2011",
    active: false,
    bioAr: "مدافع إيطالي وقائد المنتخب الفائز بكأس العالم 2006، يُعد أحد قلائل المدافعين الذين فازوا بالكرة الذهبية، اشتهر بذكائه الدفاعي وقدرته على المواجهات الفردية رغم قصر قامته نسبيًا لمركزه.",
    bioEn: "An Italian defender and captain of the 2006 World Cup-winning squad, one of the few defenders to have won the Ballon d'Or, known for his defensive intelligence and ability in individual duels despite his relatively short stature for his position.",
    achievementsAr: [
      "بطولة كأس العالم 2006 مع إيطاليا (كقائد)",
      "الكرة الذهبية 2006",
      "أفضل لاعب في العالم من الفيفا 2006",
      "لقب الدوري الإسباني مع ريال مدريد"
    ],
    achievementsEn: [
      "2006 FIFA World Cup title with Italy (as captain)",
      "2006 Ballon d'Or",
      "2006 FIFA World Player of the Year",
      "La Liga title with Real Madrid"
    ],
    clubsHistoryAr: ["نابولي", "بارما", "إنتر ميلان", "يوفنتوس", "ريال مدريد", "يوفنتوس"],
    clubsHistoryEn: ["Napoli", "Parma", "Inter Milan", "Juventus", "Real Madrid", "Juventus"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فابيو_كانافارو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Fabio_Cannavaro"
  },
  {
    id: "kaka",
    nameAr: "كاكا",
    nameEn: "Kaká",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "أورلاندو سيتي (معتزل)",
    clubEn: "Orlando City (retired)",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder / Playmaker" },
    era: "2001-2017",
    active: false,
    bioAr: "صانع ألعاب برازيلي عُرف بأناقته الفنية وسرعته وابتعاده عن الجدل الشخصي داخل وخارج الملعب، فاز بالكرة الذهبية عام 2007 بعد موسم استثنائي قاد فيه ميلان للفوز بدوري أبطال أوروبا، قبل انتقاله بصفقة قياسية عالميًا إلى ريال مدريد.",
    bioEn: "A Brazilian playmaker known for his technical elegance, pace, and low-key personal conduct on and off the pitch, he won the 2007 Ballon d'Or after an exceptional season leading Milan to the UEFA Champions League title, before a then-world-record transfer to Real Madrid.",
    achievementsAr: [
      "الكرة الذهبية 2007",
      "دوري أبطال أوروبا 2007 مع ميلان",
      "أفضل لاعب في العالم من الفيفا 2007",
      "لقب الدوري الإيطالي مع ميلان"
    ],
    achievementsEn: [
      "2007 Ballon d'Or",
      "2007 UEFA Champions League with Milan",
      "2007 FIFA World Player of the Year",
      "Serie A title with Milan"
    ],
    clubsHistoryAr: ["ساو باولو", "ميلان", "ريال مدريد", "ميلان", "أورلاندو سيتي"],
    clubsHistoryEn: ["São Paulo", "Milan", "Real Madrid", "Milan", "Orlando City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كاكا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Kaká"
  },
  {
    id: "luis-figo",
    nameAr: "لويس فيغو",
    nameEn: "Luís Figo",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "إنتر ميلان (معتزل)",
    clubEn: "Inter Milan (retired)",
    position: { ar: "جناح", en: "Winger" },
    era: "1989-2009",
    active: false,
    bioAr: "جناح برتغالي فاز بالكرة الذهبية عام 2000، وأثار ضجة عالمية كبيرة بانتقاله المثير للجدل من برشلونة إلى غريمه التقليدي ريال مدريد بصفقة قياسية عالميًا آنذاك، واعتُبر أحد أفضل الأجنحة في جيله.",
    bioEn: "A Portuguese winger who won the 2000 Ballon d'Or and caused a major global stir with his controversial transfer from Barcelona to bitter rival Real Madrid in a then-world-record deal, regarded as one of the finest wingers of his generation.",
    achievementsAr: [
      "الكرة الذهبية 2000",
      "أفضل لاعب في العالم من الفيفا 2001",
      "دوري أبطال أوروبا مع ريال مدريد",
      "لقبا دوري إسباني مع برشلونة وريال مدريد"
    ],
    achievementsEn: [
      "2000 Ballon d'Or",
      "2001 FIFA World Player of the Year",
      "UEFA Champions League with Real Madrid",
      "La Liga titles with both Barcelona and Real Madrid"
    ],
    clubsHistoryAr: ["سبورتينغ لشبونة", "برشلونة", "ريال مدريد", "إنتر ميلان"],
    clubsHistoryEn: ["Sporting CP", "Barcelona", "Real Madrid", "Inter Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/لويس_فيغو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Luís_Figo"
  },
  {
    id: "matthias-sammer",
    nameAr: "ماتياس سامر",
    nameEn: "Matthias Sammer",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "بوروسيا دورتموند (معتزل)",
    clubEn: "Borussia Dortmund (retired)",
    position: { ar: "مدافع ليبرو", en: "Defender (Sweeper)" },
    era: "1985-1998",
    active: false,
    bioAr: "مدافع ألماني فاز بالكرة الذهبية عام 1996 وهو مدافع، قاد ألمانيا للفوز بأمم أوروبا 1996 من مركز الليبرو، ويُعد آخر مدافع ألماني يفوز بالجائزة، واعتزل مبكرًا نسبيًا بسبب إصابات في الركبة.",
    bioEn: "A German defender who won the 1996 Ballon d'Or as a defender, leading Germany to the Euro 1996 title from the sweeper position, and is the last German defender to win the award, retiring relatively early due to knee injuries.",
    achievementsAr: [
      "الكرة الذهبية 1996",
      "بطولة أمم أوروبا 1996 مع ألمانيا",
      "دوري أبطال أوروبا 1997 مع بوروسيا دورتموند",
      "لاعب الموسم في ألمانيا عدة مرات"
    ],
    achievementsEn: [
      "1996 Ballon d'Or",
      "UEFA Euro 1996 title with Germany",
      "1997 UEFA Champions League with Borussia Dortmund",
      "German Footballer of the Year multiple times"
    ],
    clubsHistoryAr: ["دينامو دريسدن", "شتوتغارت", "إنتر ميلان", "بوروسيا دورتموند"],
    clubsHistoryEn: ["Dynamo Dresden", "Stuttgart", "Inter Milan", "Borussia Dortmund"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ماتياس_سامر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Matthias_Sammer"
  },
  {
    id: "bobby-charlton",
    nameAr: "بوبي تشارلتون",
    nameEn: "Bobby Charlton",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "مانشستر يونايتد (معتزل)",
    clubEn: "Manchester United (retired)",
    position: { ar: "وسط ميدان هجومي", en: "Attacking Midfielder" },
    era: "1954-1980",
    active: false,
    bioAr: "أسطورة إنجليزية نجا من كارثة طائرة ميونخ 1958 التي أودت بحياة العديد من زملائه، وقاد إنجلترا للفوز بكأس العالم 1966 على أرضها، وفاز بالكرة الذهبية في نفس العام. توفي عام 2023.",
    bioEn: "An English legend who survived the 1958 Munich air disaster that claimed the lives of several of his teammates, led England to their 1966 home World Cup triumph, and won the Ballon d'Or the same year. He passed away in 2023.",
    achievementsAr: [
      "بطولة كأس العالم 1966 مع إنجلترا",
      "الكرة الذهبية 1966",
      "كأس أوروبا 1968 مع مانشستر يونايتد",
      "الهداف التاريخي لمنتخب إنجلترا لفترة طويلة"
    ],
    achievementsEn: [
      "1966 FIFA World Cup title with England",
      "1966 Ballon d'Or",
      "1968 European Cup with Manchester United",
      "England's all-time top scorer for many years"
    ],
    clubsHistoryAr: ["مانشستر يونايتد"],
    clubsHistoryEn: ["Manchester United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بوبي_تشارلتون",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Bobby_Charlton"
  },
  {
    id: "denis-law",
    nameAr: "دينيس لو",
    nameEn: "Denis Law",
    nationalityAr: "اسكتلندي",
    nationalityEn: "Scottish",
    clubAr: "مانشستر يونايتد (معتزل)",
    clubEn: "Manchester United (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1956-1974",
    active: false,
    bioAr: "مهاجم اسكتلندي فاز بالكرة الذهبية عام 1964، وهو حتى الآن اللاعب الاسكتلندي الوحيد الذي حصل على هذا التكريم، وكان جزءًا من ثلاثي مانشستر يونايتد الهجومي الأسطوري مع جورج بيست وبوبي تشارلتون. توفي عام 2025.",
    bioEn: "A Scottish forward who won the 1964 Ballon d'Or, remaining to date the only Scottish player to receive the honour, and was part of Manchester United's legendary attacking trio alongside George Best and Bobby Charlton. He passed away in 2025.",
    achievementsAr: [
      "الكرة الذهبية 1964 (اللاعب الاسكتلندي الوحيد حتى الآن)",
      "لقبا دوري إنجليزي مع مانشستر يونايتد",
      "الهداف التاريخي المشترك لمنتخب اسكتلندا لفترة طويلة",
      "جزء من ثلاثي مانشستر يونايتد الهجومي الأسطوري"
    ],
    achievementsEn: [
      "1964 Ballon d'Or (Scotland's only winner to date)",
      "English league titles with Manchester United",
      "Long-standing joint-record scorer for Scotland",
      "Part of Manchester United's legendary attacking trio"
    ],
    clubsHistoryAr: ["هدرزفيلد تاون", "مانشستر سيتي", "تورينو", "مانشستر يونايتد", "مانشستر سيتي"],
    clubsHistoryEn: ["Huddersfield Town", "Manchester City", "Torino", "Manchester United", "Manchester City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دينيس_لو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Denis_Law"
  },
  {
    id: "rodri",
    nameAr: "رودري",
    nameEn: "Rodri",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "مانشستر سيتي",
    clubEn: "Manchester City",
    position: { ar: "وسط ميدان دفاعي", en: "Defensive Midfielder" },
    era: "2015-الآن",
    active: true,
    bioAr: "وسط ميدان دفاعي إسباني فاز بالكرة الذهبية عام 2024 بعد موسم استثنائي مع مانشستر سيتي ومنتخب إسبانيا الفائز بيورو 2024، عُرف بذكائه التكتيكي وقدرته على التحكم في إيقاع اللعب من عمق الملعب.",
    bioEn: "A Spanish defensive midfielder who won the 2024 Ballon d'Or after an exceptional season with Manchester City and the Spain national team, which won Euro 2024, known for his tactical intelligence and ability to control the tempo of play from deep midfield.",
    achievementsAr: [
      "الكرة الذهبية 2024",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي"
    ],
    achievementsEn: [
      "2024 Ballon d'Or",
      "UEFA Euro 2024 title with Spain",
      "2023 UEFA Champions League with Manchester City",
      "Multiple Premier League titles with Manchester City"
    ],
    clubsHistoryAr: ["أتلتيكو مدريد", "مانشستر سيتي"],
    clubsHistoryEn: ["Atlético Madrid", "Manchester City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رودري",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Rodri"
  },
  {
    id: "ousmane-dembele",
    nameAr: "عثمان ديمبلي",
    nameEn: "Ousmane Dembélé",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "باريس سان جيرمان",
    clubEn: "Paris Saint-Germain",
    position: { ar: "جناح", en: "Winger" },
    era: "2015-الآن",
    active: true,
    bioAr: "جناح فرنسي فاز بالكرة الذهبية عام 2025 بعد موسم استثنائي قاد فيه باريس سان جيرمان للفوز برباعية تاريخية تضمنت أول لقب دوري أبطال أوروبا في تاريخ النادي، بعد سنوات من المعاناة مع الإصابات في برشلونة.",
    bioEn: "A French winger who won the 2025 Ballon d'Or after an exceptional season leading Paris Saint-Germain to a historic quadruple that included the club's first-ever UEFA Champions League title, following years of injury struggles at Barcelona.",
    achievementsAr: [
      "الكرة الذهبية 2025",
      "دوري أبطال أوروبا 2025 مع باريس سان جيرمان (أول لقب في تاريخ النادي)",
      "الرباعية المحلية والقارية مع باريس سان جيرمان",
      "لاعب أساسي في منتخب فرنسا"
    ],
    achievementsEn: [
      "2025 Ballon d'Or",
      "2025 UEFA Champions League with Paris Saint-Germain (club's first-ever title)",
      "Domestic and European quadruple with Paris Saint-Germain",
      "Regular for the France national team"
    ],
    clubsHistoryAr: ["رين", "بروسيا دورتموند", "برشلونة", "باريس سان جيرمان"],
    clubsHistoryEn: ["Rennes", "Borussia Dortmund", "Barcelona", "Paris Saint-Germain"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/عثمان_ديمبلي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ousmane_Dembélé"
  },
  {
    id: "andriy-shevchenko",
    nameAr: "أندريه شيفتشينكو",
    nameEn: "Andriy Shevchenko",
    nationalityAr: "أوكراني",
    nationalityEn: "Ukrainian",
    clubAr: "ديناموا كييف (معتزل)",
    clubEn: "Dynamo Kyiv (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1994-2012",
    active: false,
    bioAr: "مهاجم أوكراني فاز بالكرة الذهبية عام 2004، وكان الهداف التاريخي لنادي ميلان لفترة طويلة، اشتهر بتوقيته المثالي في التسديد وقدرته على تسجيل مختلف أنواع الأهداف، وسجل ضربة الجزاء الفائزة في نهائي دوري الأبطال 2003.",
    bioEn: "A Ukrainian forward who won the 2004 Ballon d'Or and was Milan's all-time top scorer for a long period, known for his perfect finishing timing and ability to score all types of goals, and scored the winning penalty in the 2003 Champions League final.",
    achievementsAr: [
      "الكرة الذهبية 2004",
      "دوري أبطال أوروبا 2003 مع ميلان",
      "هداف الدوري الإيطالي مرتين",
      "الهداف التاريخي لنادي ديناموا كييف ومن أفضل هدافي ميلان"
    ],
    achievementsEn: [
      "2004 Ballon d'Or",
      "2003 UEFA Champions League with Milan",
      "Serie A top scorer twice",
      "Dynamo Kyiv's all-time top scorer and among Milan's greatest scorers"
    ],
    clubsHistoryAr: ["ديناموا كييف", "ميلان", "تشيلسي", "ميلان", "ديناموا كييف"],
    clubsHistoryEn: ["Dynamo Kyiv", "Milan", "Chelsea", "Milan", "Dynamo Kyiv"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أندريه_شيفتشينكو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Andriy_Shevchenko"
  },
  {
    id: "pavel-nedved",
    nameAr: "بافيل نيدفيد",
    nameEn: "Pavel Nedvěd",
    nationalityAr: "تشيكي",
    nationalityEn: "Czech",
    clubAr: "يوفنتوس (معتزل)",
    clubEn: "Juventus (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1990-2009",
    active: false,
    bioAr: "وسط ميدان تشيكي فاز بالكرة الذهبية عام 2003، عُرف بطاقته البدنية العالية وقدرته على الجري لمسافات طويلة طوال المباراة، وكان لاعبًا أساسيًا في يوفنتوس خلال إحدى أنجح فتراته، وقاد التشيك لنصف نهائي يورو 1996 و2004.",
    bioEn: "A Czech midfielder who won the 2003 Ballon d'Or, known for his exceptional stamina and ability to cover long distances throughout matches, he was a key player for Juventus during one of its most successful periods, and helped Czech Republic reach the semi-finals of Euro 1996 and 2004.",
    achievementsAr: [
      "الكرة الذهبية 2003",
      "لقبا دوري إيطالي مع يوفنتوس",
      "الوصول لنهائي دوري أبطال أوروبا 2003 مع يوفنتوس",
      "الوصول لنصف نهائي يورو 1996 مع التشيك"
    ],
    achievementsEn: [
      "2003 Ballon d'Or",
      "Serie A titles with Juventus",
      "Runner-up in the 2003 UEFA Champions League final with Juventus",
      "Semi-finalist at Euro 1996 with the Czech Republic"
    ],
    clubsHistoryAr: ["دوكلا براغ", "سبارتا براغ", "لاتسيو", "يوفنتوس"],
    clubsHistoryEn: ["Dukla Prague", "Sparta Prague", "Lazio", "Juventus"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بافيل_نيدفيد",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Pavel_Nedvěd"
  },
  {
    id: "hristo-stoichkov",
    nameAr: "هريستو ستويتشكوف",
    nameEn: "Hristo Stoichkov",
    nationalityAr: "بلغاري",
    nationalityEn: "Bulgarian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1986-2003",
    active: false,
    bioAr: "مهاجم بلغاري ناري الطباع فاز بالكرة الذهبية عام 1994 بعد موسم قاد فيه بلغاريا لمفاجأة الوصول للمركز الرابع في كأس العالم 1994 وتشارك في هدافية البطولة، وكان جزءًا من هجوم برشلونة 'دريم تيم' الأسطوري بقيادة كرويف.",
    bioEn: "A fiery Bulgarian forward who won the 1994 Ballon d'Or after leading Bulgaria to a surprise fourth-place finish at the 1994 World Cup while sharing the tournament's top scorer award, and was part of Barcelona's legendary 'Dream Team' attack under Johan Cruyff.",
    achievementsAr: [
      "الكرة الذهبية 1994",
      "الهداف المشارك لكأس العالم 1994",
      "دوري أبطال أوروبا 1992 مع برشلونة",
      "عدة ألقاب دوري إسباني مع برشلونة"
    ],
    achievementsEn: [
      "1994 Ballon d'Or",
      "Joint top scorer at the 1994 World Cup",
      "1992 European Cup with Barcelona",
      "Multiple La Liga titles with Barcelona"
    ],
    clubsHistoryAr: ["حسكوفو", "سي إس كا صوفيا", "برشلونة", "بارما", "الدوري الأمريكي", "برشلونة"],
    clubsHistoryEn: ["Hebros Harmanli", "CSKA Sofia", "Barcelona", "Parma", "MLS clubs", "Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/هريستو_ستويتشكوف",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Hristo_Stoichkov"
  },
  {
    id: "jean-pierre-papin",
    nameAr: "جان بيير بابان",
    nameEn: "Jean-Pierre Papin",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1980-2004",
    active: false,
    bioAr: "مهاجم فرنسي فاز بالكرة الذهبية عام 1991، وكان هداف الدوري الفرنسي 5 مواسم متتالية مع مارسيليا، اشتهر بتسديداته الهوائية القوية المعروفة باسم 'بابانادا'، وقاد مارسيليا لنهائي كأس أوروبا 1991.",
    bioEn: "A French forward who won the 1991 Ballon d'Or and was Ligue 1 top scorer for five consecutive seasons with Marseille, known for his powerful aerial strikes nicknamed the 'Papinade', and led Marseille to the 1991 European Cup final.",
    achievementsAr: [
      "الكرة الذهبية 1991",
      "هداف الدوري الفرنسي 5 مواسم متتالية",
      "الوصول لنهائي كأس أوروبا 1991 مع مارسيليا",
      "عدة ألقاب دوري فرنسي مع مارسيليا"
    ],
    achievementsEn: [
      "1991 Ballon d'Or",
      "Ligue 1 top scorer 5 consecutive seasons",
      "Runner-up in the 1991 European Cup final with Marseille",
      "Multiple Ligue 1 titles with Marseille"
    ],
    clubsHistoryAr: ["فالنسيان", "بروج", "مارسيليا", "ميلان", "بايرن ميونخ", "بوردو"],
    clubsHistoryEn: ["Valenciennes", "Club Brugge", "Marseille", "Milan", "Bayern Munich", "Bordeaux"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جان-بيير_بابان",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Jean-Pierre_Papin"
  },
  {
    id: "karl-heinz-rummenigge",
    nameAr: "كارل هاينتس رومينيجه",
    nameEn: "Karl-Heinz Rummenigge",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1974-1989",
    active: false,
    bioAr: "مهاجم ألماني فاز بالكرة الذهبية مرتين متتاليتين (1980، 1981)، كان نجم بايرن ميونخ الأبرز في أواخر السبعينيات، وقاد ألمانيا الغربية لنهائيات كأس عالم 1982 و1986، وأصبح لاحقًا رئيسًا لنادي بايرن ميونخ.",
    bioEn: "A German forward who won consecutive Ballon d'Or awards (1980, 1981), he was Bayern Munich's standout star in the late 1970s, led West Germany to the 1982 and 1986 World Cup finals, and later became president of Bayern Munich.",
    achievementsAr: [
      "جائزتا كرة ذهبية متتاليتان (1980، 1981)",
      "الوصول لنهائي كأس العالم مرتين مع ألمانيا الغربية (1982، 1986)",
      "دوري أبطال أوروبا مرتين مع بايرن ميونخ",
      "أصبح رئيسًا لنادي بايرن ميونخ لاحقًا"
    ],
    achievementsEn: [
      "2 consecutive Ballon d'Or awards (1980, 1981)",
      "Runner-up at the World Cup twice with West Germany (1982, 1986)",
      "European Cup twice with Bayern Munich",
      "Later became president of Bayern Munich"
    ],
    clubsHistoryAr: ["بايرن ميونخ", "إنتر ميلان", "سرفيت"],
    clubsHistoryEn: ["Bayern Munich", "Inter Milan", "Servette"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كارل-هاينتس_رومينيجه",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Karl-Heinz_Rummenigge"
  },
  {
    id: "kevin-keegan",
    nameAr: "كيفن كيغان",
    nameEn: "Kevin Keegan",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1968-1984",
    active: false,
    bioAr: "مهاجم إنجليزي فاز بالكرة الذهبية مرتين متتاليتين (1978، 1979) وهو أول إنجليزي يحقق ذلك، كان نجم ليفربول في السبعينيات قبل انتقاله إلى هامبورغ الألماني حيث واصل تألقه وفوزه بالجائزة.",
    bioEn: "An English forward who won consecutive Ballon d'Or awards (1978, 1979), the first Englishman to do so, he was Liverpool's star player in the 1970s before moving to German club Hamburg where he continued his brilliant form and award-winning success.",
    achievementsAr: [
      "جائزتا كرة ذهبية متتاليتان (1978، 1979)",
      "3 ألقاب دوري إنجليزي مع ليفربول",
      "كأس أوروبا مرتين مع ليفربول",
      "لقب الدوري الألماني مع هامبورغ"
    ],
    achievementsEn: [
      "2 consecutive Ballon d'Or awards (1978, 1979)",
      "3 English league titles with Liverpool",
      "European Cup twice with Liverpool",
      "Bundesliga title with Hamburg"
    ],
    clubsHistoryAr: ["سكانثورب يونايتد", "ليفربول", "هامبورغ", "ساوثهامبتون", "نيوكاسل يونايتد"],
    clubsHistoryEn: ["Scunthorpe United", "Liverpool", "Hamburg", "Southampton", "Newcastle United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كيفن_كيغان",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Kevin_Keegan"
  },
  {
    id: "paolo-rossi",
    nameAr: "باولو روسي",
    nameEn: "Paolo Rossi",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1973-1987",
    active: false,
    bioAr: "مهاجم إيطالي فاز بالكرة الذهبية عام 1982 بعد قيادته إيطاليا للفوز بكأس العالم 1982 بأداء أسطوري تُوّج بجائزة الحذاء الذهبي والكرة الذهبية للبطولة في نفس البطولة، بعد عودته من إيقاف بسبب فضيحة تلاعب في المباريات. توفي عام 2020.",
    bioEn: "An Italian forward who won the 1982 Ballon d'Or after leading Italy to the 1982 World Cup title with a legendary performance that earned him both the tournament's Golden Boot and Golden Ball, following his return from a match-fixing suspension. He passed away in 2020.",
    achievementsAr: [
      "بطولة كأس العالم 1982 مع إيطاليا",
      "الحذاء الذهبي والكرة الذهبية لبطولة كأس العالم 1982",
      "الكرة الذهبية 1982",
      "لقب الدوري الإيطالي مع يوفنتوس"
    ],
    achievementsEn: [
      "1982 FIFA World Cup title with Italy",
      "Golden Boot and Golden Ball of the 1982 World Cup",
      "1982 Ballon d'Or",
      "Serie A title with Juventus"
    ],
    clubsHistoryAr: ["يوفنتوس", "كومو (إعارة)", "فيتشنزا (إعارة)", "بيروجا", "يوفنتوس", "ميلان", "فيرونا"],
    clubsHistoryEn: ["Juventus", "Como (loan)", "Vicenza (loan)", "Perugia", "Juventus", "Milan", "Verona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/باولو_روسي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Paolo_Rossi"
  },
  {
    id: "gerd-muller",
    nameAr: "غيرد مولر",
    nameEn: "Gerd Müller",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1963-1981",
    active: false,
    bioAr: "مهاجم ألماني يُلقب بـ'القاصف الصغير'، يُعد أحد أعظم الهدافين في تاريخ كرة القدم بأرقام تهديفية استثنائية، فاز بالكرة الذهبية عام 1970، وسجل هدف الفوز في نهائي كأس العالم 1974 مع ألمانيا الغربية. توفي عام 2021.",
    bioEn: "A German forward nicknamed 'Der Bomber', regarded as one of the greatest goalscorers in football history with extraordinary scoring records, he won the 1970 Ballon d'Or and scored the winning goal in the 1974 World Cup final for West Germany. He passed away in 2021.",
    achievementsAr: [
      "بطولة كأس العالم 1974 مع ألمانيا الغربية (هدف الفوز في النهائي)",
      "الكرة الذهبية 1970",
      "بطولة أمم أوروبا 1972 مع ألمانيا الغربية",
      "3 ألقاب كأس أوروبا مع بايرن ميونخ"
    ],
    achievementsEn: [
      "1974 World Cup title with West Germany (scored the final's winning goal)",
      "1970 Ballon d'Or",
      "UEFA Euro 1972 title with West Germany",
      "3 European Cup titles with Bayern Munich"
    ],
    clubsHistoryAr: ["بايرن ميونخ", "فورت لاودرديل سترايكرز"],
    clubsHistoryEn: ["Bayern Munich", "Fort Lauderdale Strikers"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/غيرد_مولر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gerd_Müller"
  },
  {
    id: "lev-yashin",
    nameAr: "ليف ياشين",
    nameEn: "Lev Yashin",
    nationalityAr: "سوفيتي",
    nationalityEn: "Soviet",
    clubAr: "دينامو موسكو (معتزل)",
    clubEn: "Dynamo Moscow (retired)",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1950-1970",
    active: false,
    bioAr: "حارس مرمى سوفيتي يُلقب بـ'العنكبوت الأسود'، وهو الحارس الوحيد في التاريخ الذي فاز بالكرة الذهبية (1963)، ويُعد أحد أعظم حراس المرمى على الإطلاق، اشتهر بردوده الاستثنائية وقيادته لخط دفاع فريقه من عمق المرمى. توفي عام 1990.",
    bioEn: "A Soviet goalkeeper nicknamed the 'Black Spider', the only goalkeeper in history to win the Ballon d'Or (1963), regarded as one of the greatest goalkeepers of all time, known for his extraordinary reflexes and for organizing his team's defense from deep. He passed away in 1990.",
    achievementsAr: [
      "الكرة الذهبية 1963 (الحارس الوحيد الفائز بها في التاريخ)",
      "بطولة أمم أوروبا 1960 مع الاتحاد السوفيتي",
      "5 ألقاب دوري سوفيتي مع دينامو موسكو",
      "سُمّيت جائزة أفضل حارس مرمى في كأس العالم باسمه (جائزة ياشين)"
    ],
    achievementsEn: [
      "1963 Ballon d'Or (the only goalkeeper ever to win it)",
      "1960 UEFA European Championship with the Soviet Union",
      "5 Soviet league titles with Dynamo Moscow",
      "FIFA's World Cup best goalkeeper award is named after him (the Yashin Award)"
    ],
    clubsHistoryAr: ["دينامو موسكو"],
    clubsHistoryEn: ["Dynamo Moscow"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ليف_ياشين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Lev_Yashin"
  },
  {
    id: "ruud-gullit",
    nameAr: "رود خوليت",
    nameEn: "Ruud Gullit",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان هجومي / مهاجم", en: "Attacking Midfielder / Forward" },
    era: "1978-1998",
    active: false,
    bioAr: "لاعب هولندي متعدد المراكز فاز بالكرة الذهبية عام 1987، اشتهر بشعره المجدول المميز وقدرته على اللعب كمهاجم أو وسط ميدان أو حتى مدافع، وكان قائد هولندا الفائزة بلقب أمم أوروبا 1988، وشكّل مع فان باستن وريكارد ثلاثيًا هولنديًا أسطوريًا في ميلان.",
    bioEn: "A versatile Dutch player who won the 1987 Ballon d'Or, known for his distinctive dreadlocks and ability to play as a forward, midfielder, or even a defender, he captained the Netherlands to the Euro 1988 title, and formed a legendary Dutch trio with Van Basten and Rijkaard at Milan.",
    achievementsAr: [
      "الكرة الذهبية 1987",
      "بطولة أمم أوروبا 1988 مع هولندا (كقائد)",
      "دوري أبطال أوروبا مرتين مع ميلان",
      "أفضل لاعب في العالم من الفيفا 1987 (أول فائز بالجائزة)"
    ],
    achievementsEn: [
      "1987 Ballon d'Or",
      "UEFA Euro 1988 title with Netherlands (as captain)",
      "European Cup twice with Milan",
      "1987 FIFA World Player of the Year (inaugural winner)"
    ],
    clubsHistoryAr: ["هارلم", "فيينورد", "بي إس في آيندهوفن", "ميلان", "سامبدوريا", "ميلان", "تشيلسي"],
    clubsHistoryEn: ["Haarlem", "Feyenoord", "PSV Eindhoven", "Milan", "Sampdoria", "Milan", "Chelsea"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رود_خوليت",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ruud_Gullit"
  },
  {
    id: "michael-owen",
    nameAr: "مايكل أوين",
    nameEn: "Michael Owen",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "ستوك سيتي (معتزل)",
    clubEn: "Stoke City (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1996-2013",
    active: false,
    bioAr: "مهاجم إنجليزي سريع فاز بالكرة الذهبية عام 2001، اشتهر بهدفه الفردي الشهير ضد الأرجنتين في كأس العالم 1998 وهو في الثامنة عشرة من عمره، وكان الهداف الأبرز لليفربول قبل انتقاله إلى ريال مدريد.",
    bioEn: "A fast English forward who won the 2001 Ballon d'Or, famous for his stunning solo goal against Argentina at the 1998 World Cup at age 18, and was Liverpool's standout scorer before moving to Real Madrid.",
    achievementsAr: [
      "الكرة الذهبية 2001",
      "الحذاء الذهبي الأوروبي 2001",
      "كأس الاتحاد الأوروبي 2001 مع ليفربول",
      "هداف الدوري الإنجليزي الممتاز مرتين"
    ],
    achievementsEn: [
      "2001 Ballon d'Or",
      "2001 European Golden Shoe",
      "2001 UEFA Cup with Liverpool",
      "Premier League top scorer twice"
    ],
    clubsHistoryAr: ["ليفربول", "ريال مدريد", "نيوكاسل يونايتد", "مانشستر يونايتد", "ستوك سيتي"],
    clubsHistoryEn: ["Liverpool", "Real Madrid", "Newcastle United", "Manchester United", "Stoke City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/مايكل_أوين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Michael_Owen"
  },
  {
    id: "stanley-matthews",
    nameAr: "ستانلي ماثيوز",
    nameEn: "Stanley Matthews",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "ستوك سيتي (معتزل)",
    clubEn: "Stoke City (retired)",
    position: { ar: "جناح", en: "Winger" },
    era: "1932-1965",
    active: false,
    bioAr: "جناح إنجليزي يُلقب بـ'الساحر السحري'، وهو أول فائز بجائزة الكرة الذهبية في تاريخها عام 1956، ويُعد أحد أوائل نجوم كرة القدم الحقيقيين، استمر في اللعب على أعلى مستوى حتى بلغ الخمسين من عمره تقريبًا. توفي عام 2000.",
    bioEn: "An English winger nicknamed the 'Wizard of Dribble', the first-ever winner of the Ballon d'Or in 1956, and regarded as one of football's earliest true stars, he continued playing at the top level until nearly age 50. He passed away in 2000.",
    achievementsAr: [
      "الكرة الذهبية 1956 (أول فائز في تاريخ الجائزة)",
      "كأس الاتحاد الإنجليزي 1953 مع بلاكبول (نهائي ماثيوز الشهير)",
      "أول لاعب يُمنح لقب فارس في كرة القدم الإنجليزية",
      "لاعب العام في إنجلترا مرتين"
    ],
    achievementsEn: [
      "1956 Ballon d'Or (the award's inaugural winner)",
      "1953 FA Cup with Blackpool (the famous 'Matthews Final')",
      "First footballer to be knighted while still playing in England",
      "English Footballer of the Year twice"
    ],
    clubsHistoryAr: ["ستوك سيتي", "بلاكبول", "ستوك سيتي"],
    clubsHistoryEn: ["Stoke City", "Blackpool", "Stoke City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ستانلي_ماثيوز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Stanley_Matthews"
  },
  {
    id: "omar-sivori",
    nameAr: "أومار سيفوري",
    nameEn: "Omar Sívori",
    nationalityAr: "أرجنتيني إيطالي",
    nationalityEn: "Argentine-Italian",
    clubAr: "نابولي (معتزل)",
    clubEn: "Napoli (retired)",
    position: { ar: "مهاجم / صانع ألعاب", en: "Forward / Playmaker" },
    era: "1952-1969",
    active: false,
    bioAr: "لاعب أرجنتيني الأصل حصل على الجنسية الإيطالية ليصبح أول لاعب من أصل غير أوروبي يفوز بالكرة الذهبية عام 1961، اشتهر بمهاراته الفردية ووقاحته الفنية، وكان نجم يوفنتوس الأبرز في نهاية الخمسينيات وبداية الستينيات. توفي عام 2005.",
    bioEn: "An Argentine-born player who took Italian citizenship, becoming the first player of non-European origin to win the Ballon d'Or in 1961, known for his individual flair and technical audacity, and was Juventus' standout star in the late 1950s and early 1960s. He passed away in 2005.",
    achievementsAr: [
      "الكرة الذهبية 1961",
      "3 ألقاب دوري إيطالي مع يوفنتوس",
      "هداف الدوري الإيطالي مرتين",
      "بطولة كوبا أمريكا 1957 مع الأرجنتين"
    ],
    achievementsEn: [
      "1961 Ballon d'Or",
      "3 Serie A titles with Juventus",
      "Serie A top scorer twice",
      "1957 Copa América title with Argentina"
    ],
    clubsHistoryAr: ["ريفر بليت", "يوفنتوس", "نابولي"],
    clubsHistoryEn: ["River Plate", "Juventus", "Napoli"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أومار_سيفوري",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Omar_Sívori"
  },
  {
    id: "josef-masopust",
    nameAr: "يوزيف ماسوبوست",
    nameEn: "Josef Masopust",
    nationalityAr: "تشيكوسلوفاكي",
    nationalityEn: "Czechoslovak",
    clubAr: "دوكلا براغ (معتزل)",
    clubEn: "Dukla Prague (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1950-1968",
    active: false,
    bioAr: "وسط ميدان تشيكوسلوفاكي فاز بالكرة الذهبية عام 1962، وقاد منتخب بلاده للوصول إلى نهائي كأس العالم 1962 أمام البرازيل وسجل هدف التقدم في النهائي، ويُعد أحد أعظم لاعبي كرة القدم التشيكوسلوفاكية في التاريخ. توفي عام 2015.",
    bioEn: "A Czechoslovak midfielder who won the 1962 Ballon d'Or, leading his national team to the 1962 World Cup final against Brazil where he scored the opening goal, and is regarded as one of the greatest Czechoslovak footballers in history. He passed away in 2015.",
    achievementsAr: [
      "الكرة الذهبية 1962",
      "الوصول لنهائي كأس العالم 1962 مع تشيكوسلوفاكيا (هدف التقدم في النهائي)",
      "8 ألقاب دوري تشيكوسلوفاكي مع دوكلا براغ",
      "يُعد أفضل لاعب تشيكوسلوفاكي في القرن العشرين"
    ],
    achievementsEn: [
      "1962 Ballon d'Or",
      "Runner-up at the 1962 World Cup with Czechoslovakia (scored the opening goal in the final)",
      "8 Czechoslovak league titles with Dukla Prague",
      "Regarded as Czechoslovakia's Golden Player of the 20th century"
    ],
    clubsHistoryAr: ["دوكلا براغ"],
    clubsHistoryEn: ["Dukla Prague"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/يوزيف_ماسوبوست",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Josef_Masopust"
  },
  {
    id: "florian-albert",
    nameAr: "فلوريان ألبرت",
    nameEn: "Flórián Albert",
    nationalityAr: "مجري",
    nationalityEn: "Hungarian",
    clubAr: "فيرينتس فاروش (معتزل)",
    clubEn: "Ferencváros (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1958-1974",
    active: false,
    bioAr: "مهاجم مجري فاز بالكرة الذهبية عام 1967، اشتهر بأناقته الفنية العالية وقدرته على المراوغة، وكان الهداف التاريخي لنادي فيرينتس فاروش المجري، ويُعد أحد أفضل لاعبي كرة القدم المجرية في التاريخ بعد بوشكاش. توفي عام 2011.",
    bioEn: "A Hungarian forward who won the 1967 Ballon d'Or, known for his elegant technique and dribbling ability, he was the all-time top scorer for Hungarian club Ferencváros, and is regarded as one of Hungary's greatest footballers after Puskás. He passed away in 2011.",
    achievementsAr: [
      "الكرة الذهبية 1967",
      "هداف كأس العالم 1962",
      "الهداف التاريخي لنادي فيرينتس فاروش",
      "كأس الاتحاد الأوروبي 1965 مع فيرينتس فاروش"
    ],
    achievementsEn: [
      "1967 Ballon d'Or",
      "Top scorer at the 1962 World Cup",
      "Ferencváros' all-time top scorer",
      "1965 Inter-Cities Fairs Cup with Ferencváros"
    ],
    clubsHistoryAr: ["فيرينتس فاروش"],
    clubsHistoryEn: ["Ferencváros"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فلوريان_ألبرت",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Flórián_Albert"
  },
  {
    id: "gianni-rivera",
    nameAr: "جياني ريفيرا",
    nameEn: "Gianni Rivera",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "ميلان (معتزل)",
    clubEn: "Milan (retired)",
    position: { ar: "صانع ألعاب", en: "Playmaker" },
    era: "1959-1979",
    active: false,
    bioAr: "صانع ألعاب إيطالي فاز بالكرة الذهبية عام 1969، قضى مسيرته بأكملها تقريبًا مع نادي ميلان وقاده للفوز بلقبي دوري أبطال أوروبا، اشتهر برؤيته الفنية العالية ودقة تمريراته، ولُقّب بـ'الفتى الذهبي' لظهوره المبكر مع الفريق الأول.",
    bioEn: "An Italian playmaker who won the 1969 Ballon d'Or, spending almost his entire career at Milan and leading the club to two European Cup titles, known for his exceptional vision and passing precision, nicknamed the 'Golden Boy' for his early first-team breakthrough.",
    achievementsAr: [
      "الكرة الذهبية 1969",
      "2 لقب كأس أوروبا مع ميلان",
      "3 ألقاب دوري إيطالي مع ميلان",
      "الوصول لنهائي كأس العالم 1970 مع إيطاليا"
    ],
    achievementsEn: [
      "1969 Ballon d'Or",
      "2 European Cup titles with Milan",
      "3 Serie A titles with Milan",
      "Runner-up at the 1970 World Cup with Italy"
    ],
    clubsHistoryAr: ["ألساندريا", "ميلان"],
    clubsHistoryEn: ["Alessandria", "Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جياني_ريفيرا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gianni_Rivera"
  },
  {
    id: "oleg-blokhin",
    nameAr: "أوليغ بلوخين",
    nameEn: "Oleg Blokhin",
    nationalityAr: "سوفيتي",
    nationalityEn: "Soviet",
    clubAr: "فورفيرتس شتاينفيلد (معتزل)",
    clubEn: "Vorwärts Steyr (retired)",
    position: { ar: "جناح / مهاجم", en: "Winger / Forward" },
    era: "1969-1990",
    active: false,
    bioAr: "جناح سوفيتي سريع فاز بالكرة الذهبية عام 1975، وهو الهداف التاريخي لمنتخب الاتحاد السوفيتي ونادي ديناموا كييف، قاد ديناموا كييف للفوز بكأس الكؤوس الأوروبية في نفس العام الذي فاز فيه بالجائزة.",
    bioEn: "A fast Soviet winger who won the 1975 Ballon d'Or, the all-time top scorer for both the Soviet Union national team and Dynamo Kyiv, he led Dynamo Kyiv to the European Cup Winners' Cup title the same year he won the award.",
    achievementsAr: [
      "الكرة الذهبية 1975",
      "كأس الكؤوس الأوروبية 1975 مع ديناموا كييف",
      "الهداف التاريخي لمنتخب الاتحاد السوفيتي",
      "8 ألقاب دوري سوفيتي مع ديناموا كييف"
    ],
    achievementsEn: [
      "1975 Ballon d'Or",
      "1975 European Cup Winners' Cup with Dynamo Kyiv",
      "All-time top scorer for the Soviet Union national team",
      "8 Soviet league titles with Dynamo Kyiv"
    ],
    clubsHistoryAr: ["ديناموا كييف", "فورفيرتس شتاير"],
    clubsHistoryEn: ["Dynamo Kyiv", "Vorwärts Steyr"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أوليغ_بلوخين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Oleh_Blokhin"
  },
  {
    id: "allan-simonsen",
    nameAr: "ألان سيمونسن",
    nameEn: "Allan Simonsen",
    nationalityAr: "دنماركي",
    nationalityEn: "Danish",
    clubAr: "فيجله (معتزل)",
    clubEn: "Vejle (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1970-1989",
    active: false,
    bioAr: "مهاجم دنماركي صغير الحجم لكن سريع وفعال، فاز بالكرة الذهبية عام 1977 وهو أول دنماركي يحقق ذلك، ساهم في فوز بوروسيا مونشنغلادباخ الألماني بعدة ألقاب دوري وكأس اتحاد أوروبي قبل انتقاله إلى برشلونة.",
    bioEn: "A small but fast and effective Danish forward who won the 1977 Ballon d'Or, becoming the first Dane to do so, he helped Borussia Mönchengladbach win multiple Bundesliga titles and UEFA Cups before moving to Barcelona.",
    achievementsAr: [
      "الكرة الذهبية 1977 (أول دنماركي يفوز بها)",
      "3 ألقاب دوري ألماني مع بوروسيا مونشنغلادباخ",
      "كأسا اتحاد أوروبي مع بوروسيا مونشنغلادباخ",
      "كأس ملك إسبانيا مع برشلونة"
    ],
    achievementsEn: [
      "1977 Ballon d'Or (first Dane to win it)",
      "3 Bundesliga titles with Borussia Mönchengladbach",
      "2 UEFA Cups with Borussia Mönchengladbach",
      "Copa del Rey with Barcelona"
    ],
    clubsHistoryAr: ["فيجله", "بوروسيا مونشنغلادباخ", "برشلونة", "بوروسيا مونشنغلادباخ", "فيجله"],
    clubsHistoryEn: ["Vejle", "Borussia Mönchengladbach", "Barcelona", "Borussia Mönchengladbach", "Vejle"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ألان_سيمونسن",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Allan_Simonsen"
  },
  {
    id: "igor-belanov",
    nameAr: "إيغور بيلانوف",
    nameEn: "Igor Belanov",
    nationalityAr: "سوفيتي",
    nationalityEn: "Soviet",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1978-1996",
    active: false,
    bioAr: "مهاجم سوفيتي فاز بالكرة الذهبية عام 1986 بعد أداء مميز مع ديناموا كييف ومنتخب الاتحاد السوفيتي في كأس العالم 1986، حيث سجل هاتريك أسطوريًا أمام بلجيكا في دور الستة عشر رغم خسارة فريقه.",
    bioEn: "A Soviet forward who won the 1986 Ballon d'Or after a standout performance with Dynamo Kyiv and the Soviet Union at the 1986 World Cup, where he scored a legendary hat-trick against Belgium in the round of 16 despite his team's elimination.",
    achievementsAr: [
      "الكرة الذهبية 1986",
      "كأس الكؤوس الأوروبية 1986 مع ديناموا كييف",
      "هاتريك أسطوري أمام بلجيكا في كأس العالم 1986",
      "لقبا دوري سوفيتي مع ديناموا كييف"
    ],
    achievementsEn: [
      "1986 Ballon d'Or",
      "1986 European Cup Winners' Cup with Dynamo Kyiv",
      "Legendary hat-trick against Belgium at the 1986 World Cup",
      "Soviet league titles with Dynamo Kyiv"
    ],
    clubsHistoryAr: ["تشيرنوموريتس أوديسا", "ديناموا كييف", "بوروسيا مونشنغلادباخ", "آينتراخت براونشفايغ"],
    clubsHistoryEn: ["Chornomorets Odesa", "Dynamo Kyiv", "Borussia Mönchengladbach", "Eintracht Braunschweig"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إيغور_بيلانوف",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Igor_Belanov"
  },
  {
    id: "oliver-kahn",
    nameAr: "أوليفر كان",
    nameEn: "Oliver Kahn",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "بايرن ميونخ (معتزل)",
    clubEn: "Bayern Munich (retired)",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1987-2008",
    active: false,
    bioAr: "حارس مرمى ألماني يُلقب بـ'العملاق'، يُعد أحد أعظم حراس المرمى في التاريخ وأول وحيد حارس مرمى يفوز بجائزة الكرة الذهبية لأفضل لاعب في كأس العالم (2002) رغم خسارة فريقه بالنهائي، اشتهر بشخصيته القيادية القوية وردوده الاستثنائية.",
    bioEn: "A German goalkeeper nicknamed 'Der Titan', regarded as one of the greatest goalkeepers in history and the only goalkeeper to win the World Cup Golden Ball (2002) despite his team losing the final, known for his powerful leadership personality and extraordinary reflexes.",
    achievementsAr: [
      "دوري أبطال أوروبا 2001 مع بايرن ميونخ",
      "الكرة الذهبية لأفضل لاعب في كأس العالم 2002 (حارس مرمى)",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "أفضل حارس مرمى في العالم من الفيفا 3 مرات"
    ],
    achievementsEn: [
      "2001 UEFA Champions League with Bayern Munich",
      "2002 World Cup Golden Ball (as a goalkeeper)",
      "8 Bundesliga titles with Bayern Munich",
      "FIFA World Goalkeeper of the Year 3 times"
    ],
    clubsHistoryAr: ["كارلسروه", "بايرن ميونخ"],
    clubsHistoryEn: ["Karlsruher SC", "Bayern Munich"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أوليفر_كان",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Oliver_Kahn"
  },
  {
    id: "philipp-lahm",
    nameAr: "فيليب لام",
    nameEn: "Philipp Lahm",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "بايرن ميونخ (معتزل)",
    clubEn: "Bayern Munich (retired)",
    position: { ar: "مدافع / وسط ميدان", en: "Defender / Midfielder" },
    era: "2002-2017",
    active: false,
    bioAr: "مدافع ألماني قضى مسيرته بأكملها مع بايرن ميونخ وكان قائده وقائد منتخب ألمانيا، عُرف بذكائه التكتيكي وقدرته على اللعب في أكثر من مركز بكفاءة عالية، قاد ألمانيا للفوز بكأس العالم 2014.",
    bioEn: "A German defender who spent his entire career at Bayern Munich and captained both the club and the national team, known for his tactical intelligence and ability to play multiple positions at a high level, and captained Germany to the 2014 World Cup title.",
    achievementsAr: [
      "بطولة كأس العالم 2014 مع ألمانيا (كقائد)",
      "دوري أبطال أوروبا 2013 مع بايرن ميونخ",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "قائد بايرن ميونخ لسنوات طويلة"
    ],
    achievementsEn: [
      "2014 FIFA World Cup title with Germany (as captain)",
      "2013 UEFA Champions League with Bayern Munich",
      "8 Bundesliga titles with Bayern Munich",
      "Bayern Munich captain for many years"
    ],
    clubsHistoryAr: ["بايرن ميونخ", "شتوتغارت (إعارة)", "بايرن ميونخ"],
    clubsHistoryEn: ["Bayern Munich", "Stuttgart (loan)", "Bayern Munich"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فيليب_لام",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Philipp_Lahm"
  },
  {
    id: "bastian-schweinsteiger",
    nameAr: "باستيان شفاينشتايغر",
    nameEn: "Bastian Schweinsteiger",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "شيكاغو فاير (معتزل)",
    clubEn: "Chicago Fire (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1998-2019",
    active: false,
    bioAr: "وسط ميدان ألماني قضى معظم مسيرته مع بايرن ميونخ وكان قائده لسنوات، عُرف بروحه القتالية وقدرته على التحكم في إيقاع اللعب، وقاد ألمانيا للفوز بكأس العالم 2014 وحصل على جائزة أفضل لاعب في النهائي.",
    bioEn: "A German midfielder who spent most of his career at Bayern Munich and captained the club for years, known for his combative spirit and ability to control the game's tempo, and helped Germany win the 2014 World Cup, earning Man of the Match honours in the final.",
    achievementsAr: [
      "بطولة كأس العالم 2014 مع ألمانيا (أفضل لاعب في النهائي)",
      "دوري أبطال أوروبا 2013 مع بايرن ميونخ",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "قائد بايرن ميونخ ومنتخب ألمانيا"
    ],
    achievementsEn: [
      "2014 FIFA World Cup title with Germany (final Man of the Match)",
      "2013 UEFA Champions League with Bayern Munich",
      "8 Bundesliga titles with Bayern Munich",
      "Captain of both Bayern Munich and the Germany national team"
    ],
    clubsHistoryAr: ["بايرن ميونخ", "مانشستر يونايتد", "شيكاغو فاير"],
    clubsHistoryEn: ["Bayern Munich", "Manchester United", "Chicago Fire"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/باستيان_شفاينشتايغر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Bastian_Schweinsteiger"
  },
  {
    id: "thomas-muller",
    nameAr: "توماس مولر",
    nameEn: "Thomas Müller",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "فانكوفر وايت كابس",
    clubEn: "Vancouver Whitecaps",
    position: { ar: "مهاجم / صانع ألعاب", en: "Forward / Playmaker" },
    era: "2008-الآن",
    active: true,
    bioAr: "لاعب ألماني قضى معظم مسيرته مع بايرن ميونخ، ابتكر لنفسه مصطلح 'الفضائي' لوصف مركزه الفريد بين خط الوسط والهجوم، وكان هداف كأس العالم 2010 وهو في العشرين من عمره، وحصل على أكبر عدد ألقاب دوري ألماني في التاريخ.",
    bioEn: "A German player who spent most of his career at Bayern Munich, coining the term 'Raumdeuter' (space investigator) to describe his unique role between midfield and attack, he was the top scorer at the 2010 World Cup at age 20, and holds the record for most Bundesliga titles.",
    achievementsAr: [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "هداف كأس العالم 2010",
      "دوري أبطال أوروبا مرتين مع بايرن ميونخ",
      "أكثر لاعب فوزًا بلقب الدوري الألماني في التاريخ"
    ],
    achievementsEn: [
      "2014 FIFA World Cup title with Germany",
      "2010 World Cup Golden Boot",
      "UEFA Champions League twice with Bayern Munich",
      "Record holder for most Bundesliga titles won"
    ],
    clubsHistoryAr: ["بايرن ميونخ", "فانكوفر وايت كابس"],
    clubsHistoryEn: ["Bayern Munich", "Vancouver Whitecaps"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/توماس_مولر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Thomas_Müller"
  },
  {
    id: "arjen-robben",
    nameAr: "أرين روبن",
    nameEn: "Arjen Robben",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "خرونينغن (معتزل)",
    clubEn: "Groningen (retired)",
    position: { ar: "جناح", en: "Winger" },
    era: "2000-2021",
    active: false,
    bioAr: "جناح هولندي سريع اشتهر بمراوغاته المتكررة من الجناح الأيمن نحو الداخل للتسديد بقدمه اليسرى، شكّل مع فرانك ريبيري ثنائيًا جناحيًا رهيبًا في بايرن ميونخ، وسجل هدف الفوز في نهائي دوري أبطال أوروبا 2013.",
    bioEn: "A fast Dutch winger known for his repeated cut-ins from the right flank to shoot with his left foot, he formed a formidable wing duo with Franck Ribéry at Bayern Munich, and scored the winning goal in the 2013 Champions League final.",
    achievementsAr: [
      "دوري أبطال أوروبا 2013 مع بايرن ميونخ (هدف الفوز في النهائي)",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "الوصول لنهائي كأس العالم مرتين مع هولندا (2010، 2014 نصف نهائي)",
      "لقب الدوري الإسباني مع ريال مدريد"
    ],
    achievementsEn: [
      "2013 UEFA Champions League with Bayern Munich (scored the final's winning goal)",
      "8 Bundesliga titles with Bayern Munich",
      "Runner-up at the 2010 World Cup with Netherlands",
      "La Liga title with Real Madrid"
    ],
    clubsHistoryAr: ["خرونينغن", "بي إس في آيندهوفن", "تشيلسي", "ريال مدريد", "بايرن ميونخ", "خرونينغن"],
    clubsHistoryEn: ["Groningen", "PSV Eindhoven", "Chelsea", "Real Madrid", "Bayern Munich", "Groningen"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أرين_روبن",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Arjen_Robben"
  },
  {
    id: "franck-ribery",
    nameAr: "فرانك ريبيري",
    nameEn: "Franck Ribéry",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "جناح", en: "Winger" },
    era: "1999-2022",
    active: false,
    bioAr: "جناح فرنسي عُرف بمراوغاته السريعة وعدوانيته الهجومية من الجناح الأيسر، شكّل مع أرين روبن ثنائيًا جناحيًا رهيبًا في بايرن ميونخ لسنوات طويلة، وكان أحد أفضل الأجنحة في العالم خلال أوجه.",
    bioEn: "A French winger known for his rapid dribbling and attacking aggression from the left flank, he formed a formidable wing duo with Arjen Robben at Bayern Munich for many years, and was one of the world's finest wingers during his peak.",
    achievementsAr: [
      "دوري أبطال أوروبا 2013 مع بايرن ميونخ",
      "8 ألقاب دوري ألماني مع بايرن ميونخ",
      "أفضل لاعب في أوروبا من الاتحاد الأوروبي 2013",
      "المركز الثاني في الكرة الذهبية 2013"
    ],
    achievementsEn: [
      "2013 UEFA Champions League with Bayern Munich",
      "8 Bundesliga titles with Bayern Munich",
      "2013 UEFA Best Player in Europe Award",
      "Runner-up for the 2013 Ballon d'Or"
    ],
    clubsHistoryAr: ["مرسيليا", "غالطة سراي (إعارة)", "برست (إعارة)", "مرسيليا", "بايرن ميونخ", "فيورنتينا", "سالرنيتانا"],
    clubsHistoryEn: ["Metz youth", "Galatasaray (loan)", "Brest (loan)", "Marseille", "Bayern Munich", "Fiorentina", "Salernitana"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فرانك_ريبيري",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Franck_Ribéry"
  },
  {
    id: "sepp-maier",
    nameAr: "زيب ماير",
    nameEn: "Sepp Maier",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "بايرن ميونخ (معتزل)",
    clubEn: "Bayern Munich (retired)",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1958-1980",
    active: false,
    bioAr: "حارس مرمى ألماني أسطوري قضى مسيرته بأكملها مع بايرن ميونخ، ويُعد أحد أعظم حراس المرمى الألمان في التاريخ، لعب أكثر من 400 مباراة متتالية في الدوري الألماني دون انقطاع، وكان حارس مرمى ألمانيا الفائزة بكأس العالم 1974.",
    bioEn: "A legendary German goalkeeper who spent his entire career at Bayern Munich, regarded as one of the greatest German goalkeepers in history, he played over 400 consecutive Bundesliga matches without missing one, and was Germany's goalkeeper when they won the 1974 World Cup.",
    achievementsAr: [
      "بطولة كأس العالم 1974 مع ألمانيا الغربية",
      "3 ألقاب كأس أوروبا متتالية مع بايرن ميونخ",
      "بطولة أمم أوروبا 1972 مع ألمانيا الغربية",
      "أفضل حارس مرمى في أوروبا عدة مرات"
    ],
    achievementsEn: [
      "1974 FIFA World Cup title with West Germany",
      "3 consecutive European Cup titles with Bayern Munich",
      "UEFA Euro 1972 title with West Germany",
      "Named Europe's best goalkeeper multiple times"
    ],
    clubsHistoryAr: ["بايرن ميونخ"],
    clubsHistoryEn: ["Bayern Munich"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/زيب_ماير",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Sepp_Maier"
  },
  {
    id: "paul-breitner",
    nameAr: "بول برايتنر",
    nameEn: "Paul Breitner",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "بايرن ميونخ (معتزل)",
    clubEn: "Bayern Munich (retired)",
    position: { ar: "مدافع / وسط ميدان", en: "Defender / Midfielder" },
    era: "1970-1983",
    active: false,
    bioAr: "لاعب ألماني متعدد المراكز، وأحد اللاعبين القلائل الذين سجلوا في أكثر من نهائي كأس عالم لمنتخبين مختلفين من حيث المركز (1974 كمدافع، 1982 كمهاجم)، عُرف بشخصيته الجدلية وآرائه السياسية الصريحة خارج الملعب.",
    bioEn: "A versatile German player, one of the few to score in more than one World Cup final while playing different positions (1974 as a defender, 1982 as a forward), known for his controversial personality and outspoken political views off the pitch.",
    achievementsAr: [
      "بطولة كأس العالم 1974 مع ألمانيا الغربية",
      "الوصول لنهائي كأس العالم 1982 مع ألمانيا الغربية (هدف في النهائي)",
      "كأس أوروبا 1974 مع بايرن ميونخ",
      "لقبا دوري إسباني مع ريال مدريد"
    ],
    achievementsEn: [
      "1974 FIFA World Cup title with West Germany",
      "Runner-up at the 1982 World Cup with West Germany (scored in the final)",
      "1974 European Cup with Bayern Munich",
      "La Liga titles with Real Madrid"
    ],
    clubsHistoryAr: ["بايرن ميونخ", "ريال مدريد", "آيندراخت براونشفايغ", "بايرن ميونخ"],
    clubsHistoryEn: ["Bayern Munich", "Real Madrid", "Eintracht Braunschweig", "Bayern Munich"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بول_برايتنر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Paul_Breitner"
  },
  {
    id: "roy-keane",
    nameAr: "روي كين",
    nameEn: "Roy Keane",
    nationalityAr: "إيرلندي",
    nationalityEn: "Irish",
    clubAr: "سلتيك (معتزل)",
    clubEn: "Celtic (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1989-2006",
    active: false,
    bioAr: "وسط ميدان إيرلندي عُرف بشخصيته القيادية الصارمة وروحه القتالية العالية، كان قائد مانشستر يونايتد خلال إحدى أنجح فتراته وأصبح رمزًا لعقلية الفوز في النادي، رغم أن إصابته حرمته من المشاركة في نهائي دوري الأبطال 1999.",
    bioEn: "An Irish midfielder known for his fierce leadership personality and combative spirit, he captained Manchester United during one of its most successful eras and became a symbol of the club's winning mentality, though injury denied him a place in the 1999 Champions League final.",
    achievementsAr: [
      "دوري أبطال أوروبا 1999 مع مانشستر يونايتد",
      "7 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "قائد مانشستر يونايتد لسنوات طويلة",
      "لاعب الموسم من رابطة اللاعبين المحترفين 2000"
    ],
    achievementsEn: [
      "1999 UEFA Champions League with Manchester United",
      "7 Premier League titles with Manchester United",
      "Manchester United captain for many years",
      "2000 PFA Players' Player of the Year"
    ],
    clubsHistoryAr: ["كوبه", "نوتنغهام فورست", "مانشستر يونايتد", "سلتيك"],
    clubsHistoryEn: ["Cobh Ramblers", "Nottingham Forest", "Manchester United", "Celtic"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/روي_كين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Roy_Keane"
  },
  {
    id: "paul-scholes",
    nameAr: "بول سكولز",
    nameEn: "Paul Scholes",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "مانشستر يونايتد (معتزل)",
    clubEn: "Manchester United (retired)",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1993-2013",
    active: false,
    bioAr: "وسط ميدان إنجليزي قضى مسيرته بأكملها مع مانشستر يونايتد، وُصف من قبل نجوم عالميين مثل زيدان وإنييستا بأنه أفضل وسط ميدان واجهوه، اشتهر بتمريراته الطويلة الدقيقة وتسديداته القوية من خارج منطقة الجزاء.",
    bioEn: "An English midfielder who spent his entire career at Manchester United, described by global stars such as Zidane and Iniesta as the best midfielder they ever faced, known for his precise long passing and powerful long-range shooting.",
    achievementsAr: [
      "دوري أبطال أوروبا مرتين مع مانشستر يونايتد (1999، 2008)",
      "11 لقب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "3 ألقاب كأس اتحاد إنجليزي",
      "أحد أفضل صانعي الألعاب في تاريخ الدوري الإنجليزي بحسب زملائه ومنافسيه"
    ],
    achievementsEn: [
      "UEFA Champions League twice with Manchester United (1999, 2008)",
      "11 Premier League titles with Manchester United",
      "3 FA Cups",
      "Widely regarded by peers and rivals as one of the finest midfielders in Premier League history"
    ],
    clubsHistoryAr: ["مانشستر يونايتد"],
    clubsHistoryEn: ["Manchester United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بول_سكولز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Paul_Scholes"
  },
  {
    id: "peter-schmeichel",
    nameAr: "بيتر شمايكل",
    nameEn: "Peter Schmeichel",
    nationalityAr: "دنماركي",
    nationalityEn: "Danish",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1984-2003",
    active: false,
    bioAr: "حارس مرمى دنماركي يُعد أحد أعظم حراس المرمى في تاريخ الدوري الإنجليزي، كان حجر الأساس في دفاع مانشستر يونايتد خلال موسم الثلاثية التاريخي 1999، اشتهر بصراخه التحفيزي المرعب لزملائه وقدرته على إنقاذ الكرات الحاسمة.",
    bioEn: "A Danish goalkeeper regarded as one of the greatest in Premier League history, he was the cornerstone of Manchester United's defense during the historic 1999 treble-winning season, known for his fearsome motivational shouting at teammates and ability to make decisive saves.",
    achievementsAr: [
      "دوري أبطال أوروبا 1999 مع مانشستر يونايتد",
      "5 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "بطولة أمم أوروبا 1992 مع الدنمارك",
      "أفضل حارس مرمى في العالم من الفيفا 1992"
    ],
    achievementsEn: [
      "1999 UEFA Champions League with Manchester United",
      "5 Premier League titles with Manchester United",
      "UEFA Euro 1992 title with Denmark",
      "1992 IFFHS World's Best Goalkeeper"
    ],
    clubsHistoryAr: ["هفيدوفره", "برونديبي", "مانشستر يونايتد", "سبورتينغ لشبونة", "أستون فيلا", "مانشستر سيتي"],
    clubsHistoryEn: ["Hvidovre", "Brøndby", "Manchester United", "Sporting CP", "Aston Villa", "Manchester City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بيتر_شمايكل",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Peter_Schmeichel"
  },
  {
    id: "rio-ferdinand",
    nameAr: "ريو فرديناند",
    nameEn: "Rio Ferdinand",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Defender" },
    era: "1996-2015",
    active: false,
    bioAr: "مدافع إنجليزي عُرف بقدرته الفنية العالية على بناء اللعب من الخلف رغم كونه مدافعًا، شكّل مع نيمانيا فيديتش ثنائي دفاع مرعب في مانشستر يونايتد خلال إحدى أنجح فتراته، وانتقل بصفقة قياسية عالميًا لمدافع وقتها من ليدز يونايتد.",
    bioEn: "An English defender known for his high technical ability to build play from the back despite being a defender, he formed a formidable centre-back partnership with Nemanja Vidić at Manchester United during one of its most successful eras, and moved in a then-world-record transfer for a defender from Leeds United.",
    achievementsAr: [
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد",
      "6 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "لاعب أساسي في منتخب إنجلترا لسنوات طويلة",
      "جزء من أفضل ثنائي دفاع في الدوري الإنجليزي بحسب استطلاعات عديدة"
    ],
    achievementsEn: [
      "2008 UEFA Champions League with Manchester United",
      "6 Premier League titles with Manchester United",
      "Regular for the England national team for many years",
      "Part of what many rank among the Premier League's best-ever centre-back pairings"
    ],
    clubsHistoryAr: ["ويست هام يونايتد", "بورنموث (إعارة)", "ليدز يونايتد", "مانشستر يونايتد", "كوينزبارك رينجرز"],
    clubsHistoryEn: ["West Ham United", "Bournemouth (loan)", "Leeds United", "Manchester United", "Queens Park Rangers"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ريو_فرديناند",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Rio_Ferdinand"
  },
  {
    id: "nemanja-vidic",
    nameAr: "نيمانيا فيديتش",
    nameEn: "Nemanja Vidić",
    nationalityAr: "صربي",
    nationalityEn: "Serbian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Defender" },
    era: "2001-2016",
    active: false,
    bioAr: "مدافع صربي قوي وصلب، كان قائد مانشستر يونايتد وشكّل مع ريو فرديناند ثنائي دفاع مرعب خلال إحدى أنجح فترات النادي، اشتهر بقوته البدنية وقدرته الاستثنائية على المواجهات الهوائية والفردية.",
    bioEn: "A powerful and tough Serbian defender who captained Manchester United and formed a formidable centre-back partnership with Rio Ferdinand during one of the club's most successful eras, known for his physical strength and exceptional ability in aerial and individual duels.",
    achievementsAr: [
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد",
      "5 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "أفضل مدافع في الدوري الإنجليزي الممتاز مرتين متتاليتين",
      "قائد مانشستر يونايتد"
    ],
    achievementsEn: [
      "2008 UEFA Champions League with Manchester United",
      "5 Premier League titles with Manchester United",
      "Premier League Player of the Year twice",
      "Manchester United captain"
    ],
    clubsHistoryAr: ["ريد ستار بلغراد", "شبارتاك موسكو", "مانشستر يونايتد", "إنتر ميلان"],
    clubsHistoryEn: ["Red Star Belgrade", "Spartak Moscow", "Manchester United", "Inter Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/نيمانيا_فيديتش",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Nemanja_Vidić"
  },
  {
    id: "edwin-van-der-sar",
    nameAr: "إدوين فان دير سار",
    nameEn: "Edwin van der Sar",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1990-2011",
    active: false,
    bioAr: "حارس مرمى هولندي طويل القامة، يحمل الرقم القياسي لأطول فترة بدون استقبال هدف في تاريخ الدوري الإنجليزي الممتاز (أكثر من 14 ساعة)، كان حارس مرمى مانشستر يونايتد في موسم الفوز بدوري الأبطال 2008.",
    bioEn: "A tall Dutch goalkeeper who holds the Premier League record for the longest time without conceding a goal (over 14 hours), he was Manchester United's goalkeeper during their 2008 Champions League-winning season.",
    achievementsAr: [
      "دوري أبطال أوروبا مرتين (1995 مع أياكس، 2008 مع مانشستر يونايتد)",
      "4 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "الرقم القياسي لأطول فترة بدون استقبال هدف في الدوري الإنجليزي",
      "أفضل حارس مرمى في أوروبا من الاتحاد الأوروبي 2009"
    ],
    achievementsEn: [
      "UEFA Champions League twice (1995 with Ajax, 2008 with Manchester United)",
      "4 Premier League titles with Manchester United",
      "Premier League record for longest time without conceding a goal",
      "2009 UEFA Goalkeeper of the Year"
    ],
    clubsHistoryAr: ["أياكس", "يوفنتوس", "فولهام", "مانشستر يونايتد"],
    clubsHistoryEn: ["Ajax", "Juventus", "Fulham", "Manchester United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إدوين_فان_دير_سار",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Edwin_van_der_Sar"
  },
  {
    id: "dwight-yorke",
    nameAr: "دوايت يورك",
    nameEn: "Dwight Yorke",
    nationalityAr: "ترينيدادي",
    nationalityEn: "Trinidadian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1989-2009",
    active: false,
    bioAr: "مهاجم من ترينيداد وتوباغو شكّل مع أندي كول ثنائيًا هجوميًا رهيبًا في مانشستر يونايتد خلال موسم الثلاثية التاريخي 1999، عُرف بابتسامته الدائمة وأسلوبه الهجومي الفعال.",
    bioEn: "A forward from Trinidad and Tobago who formed a formidable attacking duo with Andy Cole at Manchester United during the historic 1999 treble-winning season, known for his ever-present smile and effective attacking style.",
    achievementsAr: [
      "دوري أبطال أوروبا 1999 مع مانشستر يونايتد",
      "الثلاثية التاريخية 1999 مع مانشستر يونايتد",
      "هداف الدوري الإنجليزي الممتاز المشارك موسم 1998-1999",
      "أفضل لاعب كاريبي في التاريخ بحسب استطلاعات عديدة"
    ],
    achievementsEn: [
      "1999 UEFA Champions League with Manchester United",
      "1999 historic treble with Manchester United",
      "Joint Premier League top scorer 1998-99",
      "Widely regarded as one of the greatest Caribbean footballers in history"
    ],
    clubsHistoryAr: ["أستون فيلا", "مانشستر يونايتد", "بلاكبيرن روفرز", "برمنغهام سيتي", "سندرلاند"],
    clubsHistoryEn: ["Aston Villa", "Manchester United", "Blackburn Rovers", "Birmingham City", "Sunderland"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دوايت_يورك",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Dwight_Yorke"
  },
  {
    id: "robin-van-persie",
    nameAr: "روبين فان بيرسي",
    nameEn: "Robin van Persie",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1999-2019",
    active: false,
    bioAr: "مهاجم هولندي فني عالي المستوى، انتقل من أرسنال إلى مانشستر يونايتد وسجل هاتريك حاسم في مباراة قاده فيها للفوز بلقب الدوري الإنجليزي الممتاز 2012-2013 مباشرة في موسمه الأول مع النادي.",
    bioEn: "A highly technical Dutch forward who moved from Arsenal to Manchester United and scored a decisive hat-trick in a match that helped clinch the 2012-13 Premier League title in his very first season with the club.",
    achievementsAr: [
      "لقب الدوري الإنجليزي الممتاز 2012-2013 مع مانشستر يونايتد",
      "الحذاء الذهبي الأوروبي 2011-2012",
      "هداف الدوري الإنجليزي الممتاز مرتين",
      "الهداف التاريخي لمنتخب هولندا لفترة طويلة"
    ],
    achievementsEn: [
      "2012-13 Premier League title with Manchester United",
      "2011-12 European Golden Shoe",
      "Premier League top scorer twice",
      "Long-time all-time top scorer for the Netherlands national team"
    ],
    clubsHistoryAr: ["فيينورد", "أرسنال", "مانشستر يونايتد", "فنربخشة"],
    clubsHistoryEn: ["Feyenoord", "Arsenal", "Manchester United", "Fenerbahçe"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/روبين_فان_بيرسي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Robin_van_Persie"
  },
  {
    id: "kenny-dalglish",
    nameAr: "كيني دالغليش",
    nameEn: "Kenny Dalglish",
    nationalityAr: "اسكتلندي",
    nationalityEn: "Scottish",
    clubAr: "ليفربول (معتزل)",
    clubEn: "Liverpool (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1969-1990",
    active: false,
    bioAr: "لاعب اسكتلندي يُعد أسطورة نادي ليفربول اللاعب والمدرب على حد سواء، فاز كلاعب بثلاثة ألقاب كأس أوروبا، ثم أصبح مدربًا للنادي وحقق معه ألقابًا أخرى، ويُعد أحد أعظم اللاعبين في تاريخ الدوري الإنجليزي.",
    bioEn: "A Scottish player regarded as a Liverpool legend both as a player and as a manager, he won three European Cups as a player, then became the club's manager and won further titles, and is considered one of the greatest players in English football history.",
    achievementsAr: [
      "3 ألقاب كأس أوروبا مع ليفربول (كلاعب)",
      "6 ألقاب دوري إنجليزي مع ليفربول (كلاعب)",
      "لاعب العام في إنجلترا مرتين",
      "قاد ليفربول للألقاب لاحقًا كمدرب أيضًا"
    ],
    achievementsEn: [
      "3 European Cups with Liverpool (as a player)",
      "6 English league titles with Liverpool (as a player)",
      "English Footballer of the Year twice",
      "Later led Liverpool to further titles as manager"
    ],
    clubsHistoryAr: ["سلتيك", "ليفربول"],
    clubsHistoryEn: ["Celtic", "Liverpool"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كيني_دالغليش",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Kenny_Dalglish"
  },
  {
    id: "ian-rush",
    nameAr: "إيان راش",
    nameEn: "Ian Rush",
    nationalityAr: "ويلزي",
    nationalityEn: "Welsh",
    clubAr: "ليفربول (معتزل)",
    clubEn: "Liverpool (retired)",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1979-2000",
    active: false,
    bioAr: "مهاجم ويلزي يُعد الهداف التاريخي لنادي ليفربول بأكثر من 340 هدفًا، اشتهر بحسه التهديفي العالي وقدرته على استغلال أبسط الفرص، وكان جزءًا من إحدى أنجح فترات ليفربول في الثمانينيات.",
    bioEn: "A Welsh forward who is Liverpool's all-time top scorer with over 340 goals, known for his lethal instincts and ability to convert the smallest of chances, and was part of one of Liverpool's most successful eras in the 1980s.",
    achievementsAr: [
      "الهداف التاريخي لنادي ليفربول",
      "كأس أوروبا 1984 مع ليفربول",
      "5 ألقاب دوري إنجليزي مع ليفربول",
      "هداف الدوري الإنجليزي 3 مرات"
    ],
    achievementsEn: [
      "Liverpool's all-time top goalscorer",
      "1984 European Cup with Liverpool",
      "5 English league titles with Liverpool",
      "English top-flight top scorer 3 times"
    ],
    clubsHistoryAr: ["تشيستر سيتي", "ليفربول", "يوفنتوس", "ليفربول"],
    clubsHistoryEn: ["Chester City", "Liverpool", "Juventus", "Liverpool"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إيان_راش",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ian_Rush"
  },
  {
    id: "jamie-carragher",
    nameAr: "جيمي كاراغر",
    nameEn: "Jamie Carragher",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "ليفربول (معتزل)",
    clubEn: "Liverpool (retired)",
    position: { ar: "مدافع", en: "Defender" },
    era: "1996-2013",
    active: false,
    bioAr: "مدافع إنجليزي قضى مسيرته بأكملها مع ليفربول، عُرف بولائه الكامل للنادي وقراءته الذكية للعب، كان جزءًا أساسيًا من فريق ليفربول الفائز بدوري أبطال أوروبا 2005 في المباراة الشهيرة بـ'معجزة إسطنبول'.",
    bioEn: "An English defender who spent his entire career at Liverpool, known for his complete loyalty to the club and intelligent reading of the game, he was a key part of Liverpool's 2005 Champions League-winning team in the famous 'Miracle of Istanbul' final.",
    achievementsAr: [
      "دوري أبطال أوروبا 2005 مع ليفربول ('معجزة إسطنبول')",
      "كأسا الاتحاد الإنجليزي مع ليفربول",
      "أكثر من 700 مباراة لنادي واحد فقط",
      "من أفضل المدافعين الإنجليز في جيله"
    ],
    achievementsEn: [
      "2005 UEFA Champions League with Liverpool ('Miracle of Istanbul')",
      "FA Cups with Liverpool",
      "Over 700 appearances for a single club",
      "Regarded as one of the finest English defenders of his generation"
    ],
    clubsHistoryAr: ["ليفربول"],
    clubsHistoryEn: ["Liverpool"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جيمي_كاراغر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Jamie_Carragher"
  },
  {
    id: "sami-hyypia",
    nameAr: "سامي هيبيا",
    nameEn: "Sami Hyypiä",
    nationalityAr: "فنلندي",
    nationalityEn: "Finnish",
    clubAr: "باير ليفركوزن (معتزل)",
    clubEn: "Bayer Leverkusen (retired)",
    position: { ar: "مدافع", en: "Defender" },
    era: "1992-2011",
    active: false,
    bioAr: "مدافع فنلندي طويل القامة وقائد ليفربول لسنوات طويلة، عُرف بسيطرته الهوائية وقراءته الذكية للعب رغم افتقاره للسرعة العالية، وكان ركيزة دفاع ليفربول خلال فوزهم بدوري أبطال أوروبا 2005.",
    bioEn: "A tall Finnish defender and long-time Liverpool captain, known for his aerial dominance and intelligent reading of the game despite lacking great pace, and was a pillar of Liverpool's defense during their 2005 Champions League triumph.",
    achievementsAr: [
      "دوري أبطال أوروبا 2005 مع ليفربول",
      "كأسا الاتحاد الإنجليزي مع ليفربول",
      "قائد ليفربول لسنوات طويلة",
      "أفضل لاعب فنلندي في التاريخ بحسب استطلاعات عديدة"
    ],
    achievementsEn: [
      "2005 UEFA Champions League with Liverpool",
      "FA Cups with Liverpool",
      "Liverpool captain for many years",
      "Widely regarded as Finland's greatest-ever footballer"
    ],
    clubsHistoryAr: ["إم إبي إس", "فيلينكي", "ليفربول", "باير ليفركوزن"],
    clubsHistoryEn: ["MyPa", "Willem II", "Liverpool", "Bayer Leverkusen"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/سامي_هيبيا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Sami_Hyypiä"
  },
  {
    id: "robbie-fowler",
    nameAr: "روبي فاولر",
    nameEn: "Robbie Fowler",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1993-2012",
    active: false,
    bioAr: "مهاجم إنجليزي يُلقب بـ'الله' من جماهير ليفربول لغزارته التهديفية الاستثنائية في التسعينيات، سجل أسرع هاتريك في تاريخ الدوري الإنجليزي الممتاز (أربع دقائق و33 ثانية) أمام أرسنال عام 1994.",
    bioEn: "An English forward nicknamed 'God' by Liverpool fans for his exceptional goalscoring in the 1990s, he scored the fastest hat-trick in Premier League history (four minutes and 33 seconds) against Arsenal in 1994.",
    achievementsAr: [
      "أسرع هاتريك في تاريخ الدوري الإنجليزي الممتاز",
      "كأس الاتحاد الإنجليزي وكأس الرابطة مع ليفربول",
      "كأس الاتحاد الأوروبي 2001 مع ليفربول",
      "أحد أفضل هدافي جيله في الدوري الإنجليزي"
    ],
    achievementsEn: [
      "Premier League's fastest-ever hat-trick",
      "FA Cup and League Cup with Liverpool",
      "2001 UEFA Cup with Liverpool",
      "One of his generation's finest Premier League goalscorers"
    ],
    clubsHistoryAr: ["ليفربول", "ليدز يونايتد", "مانشستر سيتي", "ليفربول", "كارديف سيتي", "بلاكبيرن روفرز"],
    clubsHistoryEn: ["Liverpool", "Leeds United", "Manchester City", "Liverpool", "Cardiff City", "Blackburn Rovers"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/روبي_فاولر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Robbie_Fowler"
  },
  {
    id: "john-barnes",
    nameAr: "جون بارنز",
    nameEn: "John Barnes",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "جناح", en: "Winger" },
    era: "1981-1999",
    active: false,
    bioAr: "جناح إنجليزي يُعد أحد أفضل اللاعبين في تاريخ ليفربول، عُرف بمهاراته الفنية العالية ومراوغاته الاستثنائية، وحصل على جائزة لاعب العام في إنجلترا مرتين خلال فترته الذهبية مع ليفربول في أواخر الثمانينيات.",
    bioEn: "An English winger regarded as one of the greatest players in Liverpool's history, known for his exceptional technical skill and dribbling, he won the English Footballer of the Year award twice during his golden period with Liverpool in the late 1980s.",
    achievementsAr: [
      "لقبا دوري إنجليزي مع ليفربول",
      "كأس الاتحاد الإنجليزي مع ليفربول",
      "لاعب العام في إنجلترا مرتين",
      "من أفضل الأجانب... اللاعبين البريطانيين في تاريخ الدوري الإنجليزي"
    ],
    achievementsEn: [
      "2 English league titles with Liverpool",
      "FA Cup with Liverpool",
      "English Footballer of the Year twice",
      "Widely regarded as one of the greatest British players in English football history"
    ],
    clubsHistoryAr: ["واتفورد", "ليفربول", "نيوكاسل يونايتد", "تشارلتون أتلتيك"],
    clubsHistoryEn: ["Watford", "Liverpool", "Newcastle United", "Charlton Athletic"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جون_بارنز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/John_Barnes"
  },
  {
    id: "alisson-becker",
    nameAr: "أليسون بيكر",
    nameEn: "Alisson Becker",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "ليفربول",
    clubEn: "Liverpool",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "2013-الآن",
    active: true,
    bioAr: "حارس مرمى برازيلي يُعد أحد أفضل حراس المرمى في العالم منذ انتقاله إلى ليفربول من روما، عُرف بردوده الاستثنائية وقدرته على اللعب بالقدم، وكان ركيزة أساسية في فوز ليفربول بدوري أبطال أوروبا 2019 والدوري الإنجليزي الممتاز.",
    bioEn: "A Brazilian goalkeeper regarded as one of the world's best since joining Liverpool from Roma, known for his exceptional shot-stopping and ball-playing ability, and a key pillar in Liverpool's 2019 UEFA Champions League and Premier League triumphs.",
    achievementsAr: [
      "دوري أبطال أوروبا 2019 مع ليفربول",
      "عدة ألقاب دوري إنجليزي ممتاز مع ليفربول",
      "القفاز الذهبي لكوبا أمريكا 2019 مع البرازيل",
      "أفضل حارس مرمى في العالم من الفيفا عدة مرات"
    ],
    achievementsEn: [
      "2019 UEFA Champions League with Liverpool",
      "Multiple Premier League titles with Liverpool",
      "2019 Copa América Golden Glove with Brazil",
      "The Best FIFA Goalkeeper award multiple times"
    ],
    clubsHistoryAr: ["إنترناسيونال", "روما", "ليفربول"],
    clubsHistoryEn: ["Internacional", "Roma", "Liverpool"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أليسون_بيكر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Alisson_Becker"
  },
  {
    id: "jordan-henderson",
    nameAr: "جوردان هندرسون",
    nameEn: "Jordan Henderson",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "برينتفورد",
    clubEn: "Brentford",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2005-الآن",
    active: true,
    bioAr: "وسط ميدان إنجليزي كان قائد ليفربول خلال فوزهم بدوري أبطال أوروبا 2019 والدوري الإنجليزي الممتاز 2019-2020، عُرف بروحه القيادية العالية وقدرته على تحفيز زملائه، رغم انتقادات مستمرة لمستواه الفني في بداية مسيرته.",
    bioEn: "An English midfielder who captained Liverpool during their 2019 UEFA Champions League and 2019-20 Premier League triumphs, known for his strong leadership and ability to motivate teammates, despite persistent criticism of his technical ability early in his career.",
    achievementsAr: [
      "دوري أبطال أوروبا 2019 مع ليفربول",
      "لقب الدوري الإنجليزي الممتاز 2019-2020 مع ليفربول (كقائد)",
      "جائزة أفضل لاعب في إنجلترا من رابطة الكتاب الرياضيين",
      "قائد ليفربول لسنوات طويلة"
    ],
    achievementsEn: [
      "2019 UEFA Champions League with Liverpool",
      "2019-20 Premier League title with Liverpool (as captain)",
      "FWA Footballer of the Year",
      "Liverpool captain for many years"
    ],
    clubsHistoryAr: ["سندرلاند", "كوفنتري سيتي (إعارة)", "ليفربول", "الاتحاد", "أياكس", "برينتفورد"],
    clubsHistoryEn: ["Sunderland", "Coventry City (loan)", "Liverpool", "Al-Ettifaq", "Ajax", "Brentford"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جوردان_هندرسون",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Jordan_Henderson"
  },
  {
    id: "paolo-maldini",
    nameAr: "باولو مالديني",
    nameEn: "Paolo Maldini",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "ميلان (معتزل)",
    clubEn: "Milan (retired)",
    position: { ar: "مدافع", en: "Defender" },
    era: "1984-2009",
    active: false,
    bioAr: "مدافع إيطالي أسطوري قضى مسيرته بأكملها مع نادي ميلان، ويُعد من أعظم المدافعين في تاريخ كرة القدم بفضل قراءته الذكية للعب وقلة أخطائه الدفاعية رغم طول مسيرته.",
    bioEn: "A legendary Italian defender who spent his entire career at Milan, regarded as one of the greatest defenders in football history for his intelligent reading of the game and minimal defensive errors despite his long career.",
    achievementsAr: [
      "5 ألقاب دوري أبطال أوروبا مع ميلان",
      "7 ألقاب دوري إيطالي مع ميلان",
      "أكثر لاعب مشاركة في تاريخ نادي ميلان",
      "قائد منتخب إيطاليا لسنوات طويلة"
    ],
    achievementsEn: [
      "5 UEFA Champions League titles with Milan",
      "7 Serie A titles with Milan",
      "Milan's all-time appearance record holder",
      "Captained the Italy national team for many years"
    ],
    clubsHistoryAr: ["ميلان"],
    clubsHistoryEn: ["Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/باولو_مالديني",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Paolo_Maldini"
  }
,

{
    id: "rabah-madjer",
    nameAr: "رابح ماجر",
    nameEn: "Rabah Madjer",
    nationalityAr: "جزائري",
    nationalityEn: "Algerian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Striker" },
    era: "1978-1992",
    active: false,
    bioAr: "أسطورة جزائرية يُعد أحد أفضل اللاعبين الأفارقة والعرب في التاريخ، برز مع نادي بورتو البرتغالي في الثمانينيات وسجل هدفًا خالدًا بكعب القدم في نهائي كأس أوروبا للأندية البطلة 1987. قاد الجزائر لتحقيق فوز تاريخي على ألمانيا الغربية في مونديال 1982، وتُوّج بكأس أمم أفريقيا مع الجزائر عام 1990.",
    bioEn: "An Algerian legend regarded as one of the greatest African and Arab players in history, he rose to stardom with FC Porto in the 1980s and scored an iconic backheel goal in the 1987 European Cup final. He helped Algeria to a historic win over West Germany at the 1982 World Cup and won the 1990 Africa Cup of Nations with Algeria.",
    achievementsAr: [
      "كأس أوروبا للأندية البطلة 1987 مع بورتو (هدف 'الكعب' الشهير)",
      "كأس أمم أفريقيا 1990 مع الجزائر",
      "جائزة أفضل لاعب أفريقي عام 1987",
      "فوز تاريخي على ألمانيا الغربية في مونديال 1982"
    ],
    achievementsEn: [
      "1987 European Cup title with Porto (famous backheel goal)",
      "1990 Africa Cup of Nations title with Algeria",
      "African Footballer of the Year 1987",
      "Historic 1982 World Cup win over West Germany"
    ],
    clubsHistoryAr: ["اتحاد الحسين داي", "رياسينغ باريس", "بورتو", "فالنسيا (إعارة)", "نادي قطر"],
    clubsHistoryEn: ["NA Hussein Dey", "Racing Paris", "Porto", "Valencia (loan)", "Qatar SC"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رابح_ماجر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Rabah_Madjer"
  },
  {
    id: "majed-abdullah",
    nameAr: "ماجد عبدالله",
    nameEn: "Majed Abdullah",
    nationalityAr: "سعودي",
    nationalityEn: "Saudi Arabian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Striker" },
    era: "1977-1998",
    active: false,
    bioAr: "أسطورة كرة القدم السعودية، قضى مسيرته بأكملها مع نادي النصر ويُلقب بـ'بيليه العرب'. هو الهداف التاريخي لمنتخب السعودية والهداف التاريخي لنادي النصر ولدوري المحترفين السعودي، وقاد المنتخب السعودي للفوز بكأس آسيا مرتين والتأهل لمونديال 1994.",
    bioEn: "A Saudi Arabian football legend who spent his entire career at Al-Nassr and was nicknamed the 'Arabian Pelé'. He is the all-time top scorer for both the Saudi national team and Al-Nassr, as well as the all-time top scorer of the Saudi Pro League, and led Saudi Arabia to two AFC Asian Cup titles and qualification for the 1994 World Cup.",
    achievementsAr: [
      "الهداف التاريخي لمنتخب السعودية",
      "الهداف التاريخي لنادي النصر ولدوري المحترفين السعودي",
      "بطولة كأس آسيا مرتين مع السعودية",
      "التأهل إلى كأس العالم 1994 مع السعودية"
    ],
    achievementsEn: [
      "All-time top goalscorer for the Saudi Arabia national team",
      "All-time top scorer for Al-Nassr and the Saudi Pro League",
      "AFC Asian Cup champion twice with Saudi Arabia",
      "Qualified for the 1994 FIFA World Cup with Saudi Arabia"
    ],
    clubsHistoryAr: ["النصر"],
    clubsHistoryEn: ["Al-Nassr"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ماجد_عبدالله",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Majed_Abdullah"
  },
  {
    id: "hakim-ziyech",
    nameAr: "حكيم زياش",
    nameEn: "Hakim Ziyech",
    nationalityAr: "مغربي",
    nationalityEn: "Moroccan",
    clubAr: "بوتافوغو (البرازيل)",
    clubEn: "Botafogo (Brazil)",
    position: { ar: "جناح أيمن / صانع ألعاب هجومي", en: "Right Winger / Attacking Midfielder" },
    era: "2012-الآن",
    active: true,
    bioAr: "لاعب مغربي وُلد في هولندا، يُلقب بـ'الساحر' لقب أطلقته عليه جماهير أياكس. كان عنصرًا أساسيًا في مشوار المغرب التاريخي إلى نصف نهائي كأس العالم 2022، وتوّج بدوري أبطال أوروبا مع تشيلسي.",
    bioEn: "A Dutch-born Moroccan footballer nicknamed 'The Wizard' by Ajax supporters. He was a key player in Morocco's historic run to the semi-finals of the 2022 World Cup and won the UEFA Champions League with Chelsea.",
    achievementsAr: [
      "دوري أبطال أوروبا 2020-2021 مع تشيلسي",
      "السوبر الأوروبي وكأس العالم للأندية مع تشيلسي",
      "الوصول إلى نصف نهائي كأس العالم 2022 مع المغرب",
      "قائد منتخب المغرب"
    ],
    achievementsEn: [
      "2020-21 UEFA Champions League with Chelsea",
      "UEFA Super Cup and FIFA Club World Cup with Chelsea",
      "2022 FIFA World Cup semi-finalist with Morocco",
      "Captain of the Morocco national team"
    ],
    clubsHistoryAr: ["هيرنفين", "توينتي", "أياكس", "تشيلسي", "غلطة سراي", "الدحيل", "الوداد", "بوتافوغو"],
    clubsHistoryEn: ["Heerenveen", "Twente", "Ajax", "Chelsea", "Galatasaray", "Al-Duhail", "Wydad AC", "Botafogo"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/حكيم_زياش",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Hakim_Ziyech"
  },
  {
    id: "achraf-hakimi",
    nameAr: "أشرف حكيمي",
    nameEn: "Achraf Hakimi",
    nationalityAr: "مغربي",
    nationalityEn: "Moroccan",
    clubAr: "باريس سان جيرمان",
    clubEn: "Paris Saint-Germain",
    position: { ar: "ظهير أيمن", en: "Right-back" },
    era: "2016-الآن",
    active: true,
    bioAr: "قائد منتخب المغرب ويُعد أحد أفضل الظهرين الأيمنين في العالم، واللاعب الأفريقي الحائز على أكبر عدد من الألقاب الأوروبية. كان ركيزة أساسية في مشوار المغرب التاريخي لنصف نهائي كأس العالم 2022، وقاد المغرب للفوز بكأس أمم أفريقيا 2025.",
    bioEn: "Captain of the Morocco national team and widely regarded as one of the best right-backs in the world, and the African player with the most European titles. He was a key figure in Morocco's historic run to the 2022 World Cup semi-finals and led Morocco to the 2025 Africa Cup of Nations title.",
    achievementsAr: [
      "دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان",
      "عدة ألقاب دوري فرنسي ممتاز مع باريس سان جيرمان",
      "الدوري الإيطالي 2020-2021 مع إنتر ميلان",
      "كأس أمم أفريقيا 2025 مع المغرب (كقائد)"
    ],
    achievementsEn: [
      "2024-25 UEFA Champions League with Paris Saint-Germain",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "2020-21 Serie A title with Inter Milan",
      "2025 Africa Cup of Nations champion with Morocco (as captain)"
    ],
    clubsHistoryAr: ["ريال مدريد", "بوروسيا دورتموند (إعارة)", "إنتر ميلان", "باريس سان جيرمان"],
    clubsHistoryEn: ["Real Madrid", "Borussia Dortmund (loan)", "Inter Milan", "Paris Saint-Germain"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أشرف_حكيمي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Achraf_Hakimi"
  },
  {
    id: "son-heung-min",
    nameAr: "سون هيونغ مين",
    nameEn: "Son Heung-min",
    nationalityAr: "كوري جنوبي",
    nationalityEn: "South Korean",
    clubAr: "لوس أنجلوس إف سي",
    clubEn: "Los Angeles FC",
    position: { ar: "جناح أيسر", en: "Left Winger" },
    era: "2010-الآن",
    active: true,
    bioAr: "قائد منتخب كوريا الجنوبية، ويُعد على نطاق واسع أعظم لاعب آسيوي في التاريخ. صاحب أكبر رصيد أهداف لآسيوي في تاريخ الدوري الإنجليزي الممتاز ودوري أبطال أوروبا، أمضى قرابة عشر سنوات مع توتنهام هوتسبير قبل انتقاله إلى لوس أنجلوس إف سي في الدوري الأمريكي عام 2026.",
    bioEn: "Captain of the South Korea national team and widely regarded as the greatest Asian footballer of all time. He is the top Asian goalscorer in both Premier League and UEFA Champions League history, having spent nearly a decade at Tottenham Hotspur before joining Los Angeles FC in MLS in 2026.",
    achievementsAr: [
      "الحذاء الذهبي للدوري الإنجليزي الممتاز 2021-2022 (مناصفة)",
      "أول لاعب آسيوي يفوز بالحذاء الذهبي للدوري الإنجليزي",
      "أعلى هداف آسيوي في تاريخ الدوري الإنجليزي ودوري أبطال أوروبا",
      "قائد منتخب كوريا الجنوبية"
    ],
    achievementsEn: [
      "2021-22 Premier League Golden Boot (joint winner)",
      "First Asian player to win the Premier League Golden Boot",
      "Top Asian goalscorer in Premier League and UEFA Champions League history",
      "Captain of the South Korea national team"
    ],
    clubsHistoryAr: ["هامبورغر إس في", "باير ليفركوزن", "توتنهام هوتسبير", "لوس أنجلوس إف سي"],
    clubsHistoryEn: ["Hamburger SV", "Bayer Leverkusen", "Tottenham Hotspur", "Los Angeles FC"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/سون_هيونغ_مين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Son_Heung-min"
  },
  {
    id: "park-ji-sung",
    nameAr: "بارك جي سونغ",
    nameEn: "Park Ji-sung",
    nationalityAr: "كوري جنوبي",
    nationalityEn: "South Korean",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2000-2014",
    active: false,
    bioAr: "أول لاعب آسيوي يفوز بدوري أبطال أوروبا ويشارك في نهائي البطولة، ويُعد أنجح لاعب آسيوي في التاريخ. لُقّب بـ'صاحب الرئتين الثلاث' لقدرته البدنية الاستثنائية خلال سنواته مع مانشستر يونايتد.",
    bioEn: "The first Asian player to win the UEFA Champions League and to play in a Champions League final, widely regarded as the most successful Asian footballer in history. Nicknamed 'Three-Lung Park' for his remarkable stamina during his years at Manchester United.",
    achievementsAr: [
      "4 ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "دوري أبطال أوروبا 2008 مع مانشستر يونايتد",
      "كأس العالم للأندية 2008 مع مانشستر يونايتد",
      "أول قائد آسيوي لمانشستر يونايتد"
    ],
    achievementsEn: [
      "4 Premier League titles with Manchester United",
      "2008 UEFA Champions League with Manchester United",
      "2008 FIFA Club World Cup with Manchester United",
      "First Asian captain of Manchester United"
    ],
    clubsHistoryAr: ["كيوتو بيربل سانغا", "بي إس في آيندهوفن", "مانشستر يونايتد", "كوينز بارك رينجرز", "بي إس في آيندهوفن (إعارة)"],
    clubsHistoryEn: ["Kyoto Purple Sanga", "PSV Eindhoven", "Manchester United", "Queens Park Rangers", "PSV Eindhoven (loan)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بارك_جي_سونغ",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Park_Ji-sung"
  },
  {
    id: "jay-jay-okocha",
    nameAr: "جاي جاي أوكوتشا",
    nameEn: "Jay-Jay Okocha",
    nationalityAr: "نيجيري",
    nationalityEn: "Nigerian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان هجومي", en: "Attacking Midfielder" },
    era: "1990-2008",
    active: false,
    bioAr: "أسطورة نيجيرية اشتهر بمهاراته الاستثنائية في المراوغة وخفة حركته، ويُعد أحد أفضل اللاعبين الأفارقة في التاريخ. فاز بالميدالية الذهبية الأولمبية مع نيجيريا عام 1996، ولعب لأندية كبرى مثل باريس سان جيرمان وبولتون واندررز.",
    bioEn: "A Nigerian legend famed for his exceptional dribbling skills and flair, widely regarded as one of the greatest African players in history. He won an Olympic gold medal with Nigeria in 1996 and played for major clubs including Paris Saint-Germain and Bolton Wanderers.",
    achievementsAr: [
      "الميدالية الذهبية الأولمبية 1996 مع نيجيريا",
      "جائزة أفضل لاعب أفريقي من بي بي سي (2003 و2004)",
      "ضمن قائمة أفضل 125 لاعبًا حيًا من بيليه (2004)",
      "المشاركة في 3 بطولات كأس عالم مع نيجيريا"
    ],
    achievementsEn: [
      "1996 Olympic gold medal with Nigeria",
      "BBC African Footballer of the Year (2003 and 2004)",
      "Named among Pelé's FIFA 100 greatest living players (2004)",
      "Played in 3 FIFA World Cup squads with Nigeria"
    ],
    clubsHistoryAr: ["رينجرز إنوغو", "بوروسيا نوينكيرشن", "آينتراخت فرانكفورت", "فنربخشة", "باريس سان جيرمان", "بولتون واندررز", "نادي قطري", "هال سيتي"],
    clubsHistoryEn: ["Enugu Rangers", "Borussia Neunkirchen", "Eintracht Frankfurt", "Fenerbahçe", "Paris Saint-Germain", "Bolton Wanderers", "Qatar Stars League club", "Hull City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جي-جي_أوكوتشا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Jay-Jay_Okocha"
  },
  {
    id: "abedi-pele",
    nameAr: "أبيدي بيليه",
    nameEn: "Abedi Pele",
    nationalityAr: "غاني",
    nationalityEn: "Ghanaian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان هجومي", en: "Attacking Midfielder" },
    era: "1978-1998",
    active: false,
    bioAr: "يُعد أحد أعظم اللاعبين الأفارقة في التاريخ، وهو اللاعب الوحيد الذي فاز بجائزة أفضل لاعب أفريقي ثلاث مرات متتالية. كان من أوائل اللاعبين الأفارقة الذين تركوا بصمة في الكرة الأوروبية، وتوّج بدوري أبطال أوروبا مع مارسيليا الفرنسي.",
    bioEn: "Regarded as one of the greatest African footballers of all time, and the only player to win African Footballer of the Year three consecutive times. He was among the first African players to make an impact on European club football, and won the UEFA Champions League with Marseille.",
    achievementsAr: [
      "جائزة أفضل لاعب أفريقي ثلاث سنوات متتالية (1991، 1992، 1993)",
      "دوري أبطال أوروبا 1993 مع مارسيليا",
      "كأس أمم أفريقيا 1982 مع غانا",
      "أب لثنائي المنتخب الغاني أندريه وجوردان أييو"
    ],
    achievementsEn: [
      "African Footballer of the Year three consecutive times (1991, 1992, 1993)",
      "1993 UEFA Champions League with Marseille",
      "1982 Africa Cup of Nations with Ghana",
      "Father of Ghana internationals André and Jordan Ayew"
    ],
    clubsHistoryAr: ["ريال تمالي يونايتد", "السد", "زيورخ", "نيور", "مولوز", "مارسيليا", "ليل (إعارة)", "ليون", "تورينو", "1860 ميونخ", "العين"],
    clubsHistoryEn: ["Real Tamale United", "Al Sadd", "Zürich", "Niort", "Mulhouse", "Marseille", "Lille (loan)", "Lyon", "Torino", "1860 Munich", "Al Ain"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/عبيدي_بيليه",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Abedi_Pele"
  },
  {
    id: "hugo-sanchez",
    nameAr: "هوغو سانشيز",
    nameEn: "Hugo Sánchez",
    nationalityAr: "مكسيكي",
    nationalityEn: "Mexican",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1976-1997",
    active: false,
    bioAr: "يُعد أعظم لاعب مكسيكي في التاريخ وأحد أفضل الهدافين على الإطلاق، حصل على جائزة 'بيتشيتشي' هداف الدوري الإسباني خمس مرات مع ريال مدريد. اشتهر باحتفالاته البهلوانية وقفزته الخلفية الشهيرة بعد تسجيل الأهداف.",
    bioEn: "Widely regarded as the greatest Mexican footballer of all time and one of the greatest strikers ever, he won the Pichichi Trophy as La Liga's top scorer five times with Real Madrid. He was famous for his acrobatic goal celebrations, including his signature backflip.",
    achievementsAr: [
      "5 جوائز 'بيتشيتشي' هداف الدوري الإسباني",
      "5 ألقاب دوري إسباني متتالية مع ريال مدريد (1986-1990)",
      "ضمن قائمة FIFA 100 لأفضل اللاعبين الأحياء (2004)",
      "أفضل لاعب في منطقة الكونكاكاف في القرن العشرين وفق IFFHS"
    ],
    achievementsEn: [
      "5 Pichichi Trophies as La Liga's top scorer",
      "5 consecutive La Liga titles with Real Madrid (1986-1990)",
      "Named in the FIFA 100 list of greatest living players (2004)",
      "Best CONCACAF player of the 20th century according to IFFHS"
    ],
    clubsHistoryAr: ["بوماس الجامعة الوطنية المكسيكية", "أتلتيكو مدريد", "ريال مدريد", "أمريكا", "رايو فاليكانو", "أتلانتي", "لينز", "دالاس برن", "سيلايا"],
    clubsHistoryEn: ["UNAM Pumas", "Atlético Madrid", "Real Madrid", "América", "Rayo Vallecano", "Atlante", "Linz", "Dallas Burn", "Celaya"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/هوغو_سانشيز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Hugo_Sánchez"
  },
  {
    id: "landon-donovan",
    nameAr: "لاندون دونوفان",
    nameEn: "Landon Donovan",
    nationalityAr: "أمريكي",
    nationalityEn: "American",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "جناح / مهاجم", en: "Winger / Forward" },
    era: "2000-2014",
    active: false,
    bioAr: "يُعد على نطاق واسع أعظم لاعب في تاريخ منتخب الولايات المتحدة لكرة القدم، وكان صاحب الرقم القياسي العالمي في التمريرات الحاسمة الدولية حتى عام 2023. فاز بستة ألقاب في الدوري الأمريكي MLS مع لوس أنجلوس غالاكسي وهو صاحب الرقم القياسي في التمريرات الحاسمة بتاريخ الدوري.",
    bioEn: "Widely regarded as the greatest men's player in United States national team history, and held the world record for most international assists until 2023. He won six MLS Cup titles with LA Galaxy and is the league's all-time assists leader.",
    achievementsAr: [
      "الهداف التاريخي المشارك لمنتخب الولايات المتحدة (57 هدفًا)",
      "6 ألقاب MLS كأب مع لوس أنجلوس غالاكسي",
      "صاحب الرقم القياسي في التمريرات الحاسمة بتاريخ دوري MLS",
      "بطولة كأس الكونكاكاف الذهبية 4 مرات مع الولايات المتحدة"
    ],
    achievementsEn: [
      "Joint all-time leading goalscorer for the United States national team (57 goals)",
      "6 MLS Cup titles with LA Galaxy",
      "MLS's all-time leading assist provider",
      "4-time CONCACAF Gold Cup champion with the United States"
    ],
    clubsHistoryAr: ["باير ليفركوزن", "سان خوسيه إيرثكويكس (إعارة)", "لوس أنجلوس غالاكسي", "بايرن ميونخ (إعارة)", "إيفرتون (إعارة)"],
    clubsHistoryEn: ["Bayer Leverkusen", "San Jose Earthquakes (loan)", "LA Galaxy", "Bayern Munich (loan)", "Everton (loan)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/لاندون_دونوفان",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Landon_Donovan"
  },
  {
    id: "carlos-valderrama",
    nameAr: "كارلوس فالديراما",
    nameEn: "Carlos Valderrama",
    nationalityAr: "كولومبي",
    nationalityEn: "Colombian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "صانع ألعاب", en: "Playmaker" },
    era: "1985-2002",
    active: false,
    bioAr: "يُلقب بـ'البيبي'، ويُعد أعظم لاعب كولومبي في التاريخ لدى كثيرين، اشتهر بتسريحة شعره الأفرو الذهبية المميزة وتمريراته الدقيقة. قاد كولومبيا كقائد في ثلاث بطولات كأس عالم متتالية (1990، 1994، 1998).",
    bioEn: "Nicknamed 'El Pibe', regarded by many as Colombia's greatest-ever player, known for his distinctive blond afro hairstyle and precise passing. He captained Colombia at three consecutive FIFA World Cups (1990, 1994, 1998).",
    achievementsAr: [
      "جائزة أفضل لاعب في أمريكا الجنوبية مرتين (1987، 1993)",
      "قاد كولومبيا في ثلاث بطولات كأس عالم متتالية",
      "ضمن قائمة FIFA 100 لأفضل اللاعبين الأحياء",
      "أسطورة في تاريخ دوري MLS الأمريكي"
    ],
    achievementsEn: [
      "South American Footballer of the Year twice (1987, 1993)",
      "Captained Colombia at three consecutive FIFA World Cups",
      "Named in the FIFA 100 list of greatest living players",
      "MLS legend and one of the league's most recognisable early stars"
    ],
    clubsHistoryAr: ["أونيون مجدلينا", "ميلونариوس", "ديبورتيفو كالي", "مونبلييه", "خونيور دي بارانكيا", "تامبا باي ميوتيني", "ميامي فيوجن", "كولورادو رابيدز", "ريال بلد الوليد"],
    clubsHistoryEn: ["Unión Magdalena", "Millonarios", "Deportivo Cali", "Montpellier", "Junior de Barranquilla", "Tampa Bay Mutiny", "Miami Fusion", "Colorado Rapids", "Real Valladolid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كارلوس_فالديراما",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Carlos_Valderrama"
  },
  {
    id: "james-rodriguez",
    nameAr: "خامس رودريغيز",
    nameEn: "James Rodríguez",
    nationalityAr: "كولومبي",
    nationalityEn: "Colombian",
    clubAr: "أتلتيكو ناسيونال",
    clubEn: "Atlético Nacional",
    position: { ar: "صانع ألعاب هجومي", en: "Attacking Midfielder" },
    era: "2008-الآن",
    active: true,
    bioAr: "قائد منتخب كولومبيا ويُعتبره كثيرون خليفة كارلوس فالديراما في صناعة الألعاب الكولومبية. توّج بالحذاء الذهبي في كأس العالم 2014 وسجل أحد أجمل أهداف تاريخ البطولة، وفاز بدوري أبطال أوروبا مرتين مع ريال مدريد.",
    bioEn: "Captain of the Colombia national team, often considered the successor to Carlos Valderrama as Colombia's playmaking icon. He won the Golden Boot at the 2014 World Cup, scoring one of the tournament's most celebrated goals, and won the UEFA Champions League twice with Real Madrid.",
    achievementsAr: [
      "الحذاء الذهبي لكأس العالم 2014",
      "جائزة بوشكاش لأفضل هدف في العالم 2014",
      "لقبا دوري أبطال أوروبا مع ريال مدريد",
      "قائد منتخب كولومبيا"
    ],
    achievementsEn: [
      "2014 FIFA World Cup Golden Boot",
      "2014 FIFA Puskás Award for the world's best goal",
      "2 UEFA Champions League titles with Real Madrid",
      "Captain of the Colombia national team"
    ],
    clubsHistoryAr: ["بانفيلد", "بورتو", "ريال مدريد", "بايرن ميونخ (إعارة)", "إيفرتون", "ساو باولو", "رايو فاليكانو", "ليون المكسيكي", "أتلتيكو ناسيونال"],
    clubsHistoryEn: ["Banfield", "Porto", "Real Madrid", "Bayern Munich (loan)", "Everton", "São Paulo", "Rayo Vallecano", "Club León", "Atlético Nacional"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/خاميس_رودريغيز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/James_Rodríguez"
  },
  {
    id: "jose-luis-chilavert",
    nameAr: "خوسيه لويس تشيلافيرت",
    nameEn: "José Luis Chilavert",
    nationalityAr: "باراغواياني",
    nationalityEn: "Paraguayan",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1982-2004",
    active: false,
    bioAr: "حارس مرمى باراغواياني أسطوري اشتهر بقدرته الاستثنائية على تسجيل الأهداف من الركلات الحرة وركلات الجزاء، ويُعد ثاني أعلى حارس مرمى تسجيلًا للأهداف في تاريخ كرة القدم. فاز بجائزة أفضل حارس مرمى في العالم من IFFHS ثلاث مرات.",
    bioEn: "A legendary Paraguayan goalkeeper renowned for his exceptional ability to score from free kicks and penalties, and the second-highest goalscoring goalkeeper in football history. He won the IFFHS World's Best Goalkeeper award three times.",
    achievementsAr: [
      "أفضل حارس مرمى في العالم من IFFHS ثلاث مرات (1995، 1997، 1998)",
      "كوبا ليبرتادوريس 1994 مع فيليز سارسفيلد",
      "ثاني أعلى حارس مرمى تسجيلًا للأهداف في التاريخ",
      "المشاركة في 3 بطولات كأس عالم مع باراغواي"
    ],
    achievementsEn: [
      "IFFHS World's Best Goalkeeper three times (1995, 1997, 1998)",
      "1994 Copa Libertadores with Vélez Sarsfield",
      "Second-highest goalscoring goalkeeper in football history",
      "Played in 3 FIFA World Cups with Paraguay"
    ],
    clubsHistoryAr: ["سبورتيفو لوكينيو", "غواراني", "سان لورينزو", "ريال ثاراغوثا", "فيليز سارسفيلد", "ستراسبورغ", "بينارول"],
    clubsHistoryEn: ["Sportivo Luqueño", "Guaraní", "San Lorenzo", "Real Zaragoza", "Vélez Sarsfield", "Strasbourg", "Peñarol"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/خوسيه_لويس_تشيلافيرت",
    wikiUrlEn: "https://en.wikipedia.org/wiki/José_Luis_Chilavert"
  },
  {
    id: "zbigniew-boniek",
    nameAr: "زبيغنيف بونييك",
    nameEn: "Zbigniew Boniek",
    nationalityAr: "بولندي",
    nationalityEn: "Polish",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان / جناح أيمن", en: "Midfielder / Right Winger" },
    era: "1973-1988",
    active: false,
    bioAr: "يُعد أحد أفضل اللاعبين البولنديين في التاريخ، برز مع يوفنتوس الإيطالي وتوّج بكأس أوروبا للأندية البطلة 1985. حل ثالثًا مع بولندا في مونديال 1982، وشغل لاحقًا منصب نائب رئيس الاتحاد الأوروبي لكرة القدم (يويفا) ورئيس الاتحاد البولندي لكرة القدم.",
    bioEn: "Regarded as one of the greatest Polish players of all time, he starred for Italian club Juventus and won the 1985 European Cup. He helped Poland finish third at the 1982 World Cup, and later served as UEFA vice-president and president of the Polish Football Association.",
    achievementsAr: [
      "كأس أوروبا للأندية البطلة 1985 مع يوفنتوس",
      "كأس الكؤوس الأوروبية والسوبر الأوروبي مع يوفنتوس",
      "المركز الثالث في كأس العالم 1982 مع بولندا",
      "ضمن قائمة FIFA 100 لأفضل اللاعبين الأحياء (2004)"
    ],
    achievementsEn: [
      "1985 European Cup with Juventus",
      "European Cup Winners' Cup and European Super Cup with Juventus",
      "Third place at the 1982 FIFA World Cup with Poland",
      "Named in the FIFA 100 list of greatest living players (2004)"
    ],
    clubsHistoryAr: ["زافيشا بيدغوشتش", "فيدزيو لودز", "يوفنتوس", "روما"],
    clubsHistoryEn: ["Zawisza Bydgoszcz", "Widzew Łódź", "Juventus", "Roma"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/زبيغنيو_بونيك",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Zbigniew_Boniek"
  },
  {
    id: "gheorghe-hagi",
    nameAr: "غيورغي هاجي",
    nameEn: "Gheorghe Hagi",
    nationalityAr: "روماني",
    nationalityEn: "Romanian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "صانع ألعاب هجومي", en: "Attacking Midfielder" },
    era: "1982-2001",
    active: false,
    bioAr: "يُلقب بـ'مارادونا الكارباط'، ويُعد أعظم لاعب روماني في التاريخ. قاد رومانيا إلى ربع نهائي كأس العالم 1994، ولعب لأندية كبرى مثل ريال مدريد وبرشلونة قبل أن ينهي مسيرته مع غلطة سراي التركي.",
    bioEn: "Nicknamed 'The Maradona of the Carpathians', he is regarded as the greatest Romanian footballer of all time. He led Romania to the quarter-finals of the 1994 World Cup and played for major clubs including Real Madrid and Barcelona before ending his career at Galatasaray.",
    achievementsAr: [
      "لاعب العام في رومانيا 7 مرات (رقم قياسي)",
      "كأس الاتحاد الأوروبي والسوبر الأوروبي مع غلطة سراي",
      "الوصول إلى ربع نهائي كأس العالم 1994 مع رومانيا",
      "ضمن قائمة FIFA 100 لأفضل اللاعبين الأحياء (2004)"
    ],
    achievementsEn: [
      "Romanian Footballer of the Year 7 times (record)",
      "UEFA Cup and UEFA Super Cup with Galatasaray",
      "1994 FIFA World Cup quarter-finalist with Romania",
      "Named in the FIFA 100 list of greatest living players (2004)"
    ],
    clubsHistoryAr: ["فارول كونستانتسا", "سبورتول ستودنتشك", "شتياوا بوخارست", "ريال مدريد", "بريشيا", "برشلونة", "غلطة سراي"],
    clubsHistoryEn: ["Farul Constanța", "Sportul Studențesc", "Steaua București", "Real Madrid", "Brescia", "Barcelona", "Galatasaray"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/غورغي_هاجي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gheorghe_Hagi"
  },
  {
    id: "tim-cahill",
    nameAr: "تيم كاهيل",
    nameEn: "Tim Cahill",
    nationalityAr: "أسترالي",
    nationalityEn: "Australian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان هجومي / مهاجم", en: "Attacking Midfielder / Forward" },
    era: "1997-2019",
    active: false,
    bioAr: "الهداف التاريخي لمنتخب أستراليا وأحد أعظم لاعبيه على الإطلاق، وأول أسترالي يسجل في كأس العالم. اشتهر بقدرته العالية في اللعب الهوائي واحتفاله المميز بالملاكمة عند علم الركنية، وبرز مع إيفرتون في الدوري الإنجليزي الممتاز.",
    bioEn: "Australia's all-time record goalscorer and one of its greatest-ever players, and the first Australian to score at a FIFA World Cup. Renowned for his exceptional heading ability and trademark corner-flag boxing celebration, he starred for Everton in the Premier League.",
    achievementsAr: [
      "الهداف التاريخي لمنتخب أستراليا (50 هدفًا)",
      "أول أسترالي يسجل في كأس العالم (2006)",
      "صاحب أكبر عدد أهداف لأسترالي في تاريخ كأس العالم (5 أهداف)",
      "بطولة كأس آسيا 2015 مع أستراليا"
    ],
    achievementsEn: [
      "Australia's all-time top goalscorer (50 goals)",
      "First Australian to score at a FIFA World Cup (2006)",
      "Most World Cup goals by an Australian (5 goals)",
      "2015 AFC Asian Cup champion with Australia"
    ],
    clubsHistoryAr: ["ميلوول", "إيفرتون", "نيويورك ريد بولز", "شنغهاي شنخوا", "هانغتشو غرينتاون", "ملبورن سيتي", "جامشيدبور"],
    clubsHistoryEn: ["Millwall", "Everton", "New York Red Bulls", "Shanghai Shenhua", "Hangzhou Greentown", "Melbourne City", "Jamshedpur"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/تيم_كاهيل",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Tim_Cahill"
  },
  {
    id: "hakan-sukur",
    nameAr: "حكان شكور",
    nameEn: "Hakan Şükür",
    nationalityAr: "تركي",
    nationalityEn: "Turkish",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Striker" },
    era: "1987-2008",
    active: false,
    bioAr: "الهداف التاريخي لمنتخب تركيا ويُلقب بـ'ثور البوسفور'، سجّل أسرع هدف في تاريخ نهائيات كأس العالم (11 ثانية) أمام كوريا الجنوبية عام 2002. أمضى معظم مسيرته مع غلطة سراي وتوّج معه بكأس الاتحاد الأوروبي عام 2000.",
    bioEn: "Turkey's all-time top goalscorer, nicknamed the 'Bull of the Bosphorus', he scored the fastest goal in FIFA World Cup finals history (11 seconds) against South Korea in 2002. He spent most of his career at Galatasaray, winning the UEFA Cup with them in 2000.",
    achievementsAr: [
      "الهداف التاريخي لمنتخب تركيا (51 هدفًا)",
      "أسرع هدف في تاريخ نهائيات كأس العالم (11 ثانية، 2002)",
      "كأس الاتحاد الأوروبي والسوبر الأوروبي 2000 مع غلطة سراي",
      "المركز الثالث في كأس العالم 2002 مع تركيا"
    ],
    achievementsEn: [
      "Turkey's all-time top goalscorer (51 goals)",
      "Fastest goal in FIFA World Cup finals history (11 seconds, 2002)",
      "2000 UEFA Cup and UEFA Super Cup with Galatasaray",
      "Third place at the 2002 FIFA World Cup with Turkey"
    ],
    clubsHistoryAr: ["سكاريا سبور", "بورصة سبور", "غلطة سراي", "تورينو", "إنتر ميلان", "بارما", "بلاكبيرن روفرز", "غلطة سراي"],
    clubsHistoryEn: ["Sakaryaspor", "Bursaspor", "Galatasaray", "Torino", "Inter Milan", "Parma", "Blackburn Rovers", "Galatasaray"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/هاكان_شوكور",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Hakan_Şükür"
  },

{
    id: "zlatan-ibrahimovic",
    nameAr: "زلاتان إبراهيموفيتش",
    nameEn: "Zlatan Ibrahimović",
    nationalityAr: "سويدي",
    nationalityEn: "Swedish",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1999-2023",
    active: false,
    bioAr: "مهاجم سويدي أسطوري وهداف تاريخي للمنتخب السويدي، عُرف بقوته البدنية ومهاراته الفنية العالية وأهدافه الأكروباتية المميزة. لعب لأندية كبرى مثل أياكس وإنتر ميلان وبرشلونة وميلان ومانشستر يونايتد وباريس سان جيرمان ولوس أنجلوس غالاكسي.",
    bioEn: "Legendary Swedish forward and his country's all-time top scorer, known for his physical power, technical skill and spectacular acrobatic goals. He played for major clubs including Ajax, Inter Milan, Barcelona, AC Milan, Manchester United, Paris Saint-Germain and LA Galaxy.",
    achievementsAr: [
      "هداف تاريخي للمنتخب السويدي",
      "لقب الدوري الفرنسي عدة مرات مع باريس سان جيرمان",
      "لقب الدوري الإيطالي مع إنتر ميلان وميلان",
      "جائزة أفضل لاعب في الدوري الأمريكي (MLS MVP) 2019"
    ],
    achievementsEn: [
      "Sweden's all-time record goalscorer",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "Serie A titles with Inter Milan and AC Milan",
      "MLS Most Valuable Player 2019"
    ],
    clubsHistoryAr: ["مالمو", "أياكس", "يوفنتوس", "إنتر ميلان", "برشلونة", "ميلان", "باريس سان جيرمان", "مانشستر يونايتد", "لوس أنجلوس غالاكسي", "ميلان"],
    clubsHistoryEn: ["Malmö FF", "Ajax", "Juventus", "Inter Milan", "Barcelona", "AC Milan", "Paris Saint-Germain", "Manchester United", "LA Galaxy", "AC Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/زلاتان_إبراهيموفيتش",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Zlatan_Ibrahimović"
  },
  {
    id: "xherdan-shaqiri",
    nameAr: "شيردان شاكيري",
    nameEn: "Xherdan Shaqiri",
    nationalityAr: "سويسري",
    nationalityEn: "Swiss",
    clubAr: "شيكاغو فاير",
    clubEn: "Chicago Fire",
    position: { ar: "جناح / وسط مهاجم", en: "Winger / Attacking Midfielder" },
    era: "2009-الآن",
    active: true,
    bioAr: "لاعب سويسري من أصل كوسوفي، عُرف بمراوغاته السريعة وقدرته على تسجيل أهداف مميزة من خارج منطقة الجزاء. لعب لبازل وبايرن ميونخ وإنتر ميلان وستوك سيتي وليفربول قبل انتقاله إلى الدوري الأمريكي.",
    bioEn: "Swiss footballer of Kosovo-Albanian descent, known for his quick dribbling and ability to score spectacular long-range goals. He played for Basel, Bayern Munich, Inter Milan, Stoke City and Liverpool before moving to Major League Soccer.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2013 مع بايرن ميونخ",
      "لقب الدوري الألماني مع بايرن ميونخ",
      "لقب دوري أبطال أوروبا 2019 مع ليفربول",
      "هداف مشارك للمنتخب السويسري في كأس العالم"
    ],
    achievementsEn: [
      "UEFA Champions League title 2013 with Bayern Munich",
      "Bundesliga title with Bayern Munich",
      "UEFA Champions League title 2019 with Liverpool",
      "Among Switzerland's top scorers at FIFA World Cups"
    ],
    clubsHistoryAr: ["بازل", "بايرن ميونخ", "إنتر ميلان", "ستوك سيتي", "ليفربول", "شيكاغو فاير"],
    clubsHistoryEn: ["Basel", "Bayern Munich", "Inter Milan", "Stoke City", "Liverpool", "Chicago Fire"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/شيردان_شاكيري",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Xherdan_Shaqiri"
  },
  {
    id: "david-alaba",
    nameAr: "ديفيد ألابا",
    nameEn: "David Alaba",
    nationalityAr: "نمساوي",
    nationalityEn: "Austrian",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "مدافع", en: "Defender" },
    era: "2008-الآن",
    active: true,
    bioAr: "مدافع نمساوي متعدد المراكز يمكنه اللعب في قلب الدفاع أو الظهير الأيسر أو خط الوسط، قضى معظم مسيرته في بايرن ميونخ الألماني قبل انتقاله إلى ريال مدريد الإسباني عام 2021.",
    bioEn: "Versatile Austrian defender who can play at centre-back, left-back or midfield, spent most of his career at Bayern Munich before joining Real Madrid in 2021.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا عدة مرات مع بايرن ميونخ وريال مدريد",
      "10 ألقاب دوري ألماني مع بايرن ميونخ",
      "لقب الدوري الإسباني مع ريال مدريد",
      "قائد المنتخب النمساوي"
    ],
    achievementsEn: [
      "Multiple UEFA Champions League titles with Bayern Munich and Real Madrid",
      "10 Bundesliga titles with Bayern Munich",
      "La Liga title with Real Madrid",
      "Austria national team captain"
    ],
    clubsHistoryAr: ["أوستريا فيينا", "بايرن ميونخ", "ريال مدريد"],
    clubsHistoryEn: ["Austria Wien", "Bayern Munich", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ديفيد_ألابا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/David_Alaba"
  },
  {
    id: "andrei-arshavin",
    nameAr: "أندريه أرشافين",
    nameEn: "Andrei Arshavin",
    nationalityAr: "روسي",
    nationalityEn: "Russian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط مهاجم / مهاجم", en: "Attacking Midfielder / Forward" },
    era: "2000-2018",
    active: false,
    bioAr: "لاعب وسط مهاجم روسي، قاد منتخب بلاده للوصول إلى نصف نهائي يورو 2008، واشتهر دوليًا بعد انتقاله إلى آرسنال الإنجليزي حيث سجل أربعة أهداف في مباراة واحدة ضد ليفربول.",
    bioEn: "Russian attacking midfielder who led his national team to the semi-finals of Euro 2008, and gained international fame after joining Arsenal, where he famously scored four goals in a single match against Liverpool.",
    achievementsAr: [
      "الوصول لنصف نهائي يورو 2008 مع روسيا",
      "أفضل لاعب في يورو 2008 (ضمن فريق البطولة)",
      "لقب الدوري الروسي مع زينيت سان بطرسبرغ",
      "لقب كأس الاتحاد الأوروبي (يويفا) 2008 مع زينيت"
    ],
    achievementsEn: [
      "Euro 2008 semi-finalist with Russia",
      "UEFA Euro 2008 Team of the Tournament",
      "Russian Premier League title with Zenit Saint Petersburg",
      "UEFA Cup title 2008 with Zenit"
    ],
    clubsHistoryAr: ["زينيت سان بطرسبرغ", "آرسنال", "زينيت سان بطرسبرغ"],
    clubsHistoryEn: ["Zenit Saint Petersburg", "Arsenal", "Zenit Saint Petersburg"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أندريه_أرشافين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Andrei_Arshavin"
  },
  {
    id: "hidetoshi-nakata",
    nameAr: "هيديتوشي ناكاتا",
    nameEn: "Hidetoshi Nakata",
    nationalityAr: "ياباني",
    nationalityEn: "Japanese",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط مهاجم", en: "Attacking Midfielder" },
    era: "1995-2006",
    active: false,
    bioAr: "يُعتبر أحد أهم اللاعبين اليابانيين في تاريخ اللعبة، كان أول ياباني يحقق نجاحًا كبيرًا في الدوري الإيطالي حيث لعب لروما وبارما وبولونيا وفيورنتينا، وساهم في تعريف العالم بكرة القدم اليابانية.",
    bioEn: "Widely regarded as one of the most important Japanese players in football history, he was the first Japanese player to achieve major success in Serie A, playing for Roma, Perugia, Parma, Bologna and Fiorentina.",
    achievementsAr: [
      "لقب الدوري الإيطالي (سكوديتو) 2001 مع روما",
      "لاعب آسيا الأفضل لعام 1997",
      "قاد اليابان إلى دور الـ16 في كأس العالم 2002",
      "أدرج ضمن قائمة أعظم 125 لاعبًا حسب بيليه (FIFA 100)"
    ],
    achievementsEn: [
      "Serie A title 2001 with Roma",
      "Asian Footballer of the Year 1997",
      "Led Japan to the Round of 16 at the 2002 World Cup",
      "Named among Pelé's FIFA 100 greatest living players"
    ],
    clubsHistoryAr: ["بيلماري هيراتسوكا", "بيروجا", "روما", "بارما", "بولونيا", "فيورنتينا"],
    clubsHistoryEn: ["Bellmare Hiratsuka", "Perugia", "Roma", "Parma", "Bologna", "Fiorentina"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/هيديتوشي_ناكاتا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Hidetoshi_Nakata"
  },
  {
    id: "shinji-kagawa",
    nameAr: "شينجي كاجاوا",
    nameEn: "Shinji Kagawa",
    nationalityAr: "ياباني",
    nationalityEn: "Japanese",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط مهاجم", en: "Attacking Midfielder" },
    era: "2006-2024",
    active: false,
    bioAr: "لاعب وسط ياباني موهوب، لفت الأنظار مع بوروسيا دورتموند قبل أن ينتقل إلى مانشستر يونايتد الإنجليزي، عُرف برؤيته الفنية وقدرته على صناعة الأهداف.",
    bioEn: "Talented Japanese playmaker who rose to prominence with Borussia Dortmund before moving to Manchester United, known for his vision and creativity in the final third.",
    achievementsAr: [
      "لقبا الدوري الألماني مع بوروسيا دورتموند",
      "لاعب الموسم في الدوري الألماني 2011-2012",
      "لقب الدوري الإنجليزي 2012-2013 مع مانشستر يونايتد",
      "أفضل لاعب آسيوي في عدة مناسبات"
    ],
    achievementsEn: [
      "Two Bundesliga titles with Borussia Dortmund",
      "Bundesliga Player of the Season 2011-2012",
      "Premier League title 2012-2013 with Manchester United",
      "Multiple-time Asian Footballer of the Year nominee"
    ],
    clubsHistoryAr: ["سيرزو أوساكا", "بوروسيا دورتموند", "مانشستر يونايتد", "بوروسيا دورتموند", "بشكتاش", "ريال سرقسطة"],
    clubsHistoryEn: ["Cerezo Osaka", "Borussia Dortmund", "Manchester United", "Borussia Dortmund", "Beşiktaş", "Real Zaragoza"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/شينجي_كاجاوا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Shinji_Kagawa"
  },
  {
    id: "ali-daei",
    nameAr: "علي دائي",
    nameEn: "Ali Daei",
    nationalityAr: "إيراني",
    nationalityEn: "Iranian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1988-2007",
    active: false,
    bioAr: "هداف إيراني أسطوري، صاحب الرقم القياسي العالمي السابق لأكثر الأهداف الدولية تسجيلًا قبل أن يتجاوزه كريستيانو رونالدو، لعب في الدوري الألماني لأندية مثل بايرن ميونخ وهيرتا برلين.",
    bioEn: "Legendary Iranian striker who formerly held the world record for most international goals scored, before being surpassed by Cristiano Ronaldo. He played in the Bundesliga for clubs including Bayern Munich and Hertha Berlin.",
    achievementsAr: [
      "الهداف التاريخي لمنتخب إيران وقائده السابق",
      "صاحب الرقم القياسي العالمي السابق لعدد الأهداف الدولية (109 أهداف)",
      "هداف الدوري الآسيوي في مناسبات عدة",
      "أحد أعظم لاعبي آسيا في التاريخ"
    ],
    achievementsEn: [
      "Iran's all-time top scorer and former captain",
      "Former world record holder for most international goals (109 goals)",
      "Multiple-time Asian top scorer",
      "Widely regarded as one of Asia's greatest-ever players"
    ],
    clubsHistoryAr: ["استقلال طهران", "بيروزي", "آرمينيا بيليفيلد", "بايرن ميونخ", "هيرتا برلين", "السد"],
    clubsHistoryEn: ["Esteghlal", "Persepolis", "Arminia Bielefeld", "Bayern Munich", "Hertha Berlin", "Al Sadd"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/علي_دائي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ali_Daei"
  },
  {
    id: "mehdi-taremi",
    nameAr: "مهدي طارمي",
    nameEn: "Mehdi Taremi",
    nationalityAr: "إيراني",
    nationalityEn: "Iranian",
    clubAr: "إنتر ميلان",
    clubEn: "Inter Milan",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2012-الآن",
    active: true,
    bioAr: "مهاجم إيراني حالي وقائد منتخب بلاده، لفت الأنظار بأدائه المميز مع بورتو البرتغالي قبل أن ينتقل صفقة حرة إلى إنتر ميلان الإيطالي، معروف بأهدافه العكسية المميزة (البايسكل).",
    bioEn: "Current Iranian forward and national team captain who impressed at Porto before joining Inter Milan on a free transfer, known for his spectacular bicycle-kick goals.",
    achievementsAr: [
      "لقب الدوري البرتغالي عدة مرات مع بورتو",
      "هداف الدوري البرتغالي في أحد المواسم",
      "قائد منتخب إيران",
      "الوصول لنهائي دوري أبطال أوروبا 2025 مع إنتر ميلان"
    ],
    achievementsEn: [
      "Multiple Primeira Liga titles with Porto",
      "Primeira Liga top scorer in one season",
      "Iran national team captain",
      "UEFA Champions League finalist 2025 with Inter Milan"
    ],
    clubsHistoryAr: ["شاهين بوشهر", "استقلال أهواز", "بيروزي", "الغرافة", "ريو آفي", "بورتو", "إنتر ميلان"],
    clubsHistoryEn: ["Shahin Bushehr", "Sanat Naft", "Persepolis", "Al Gharafa", "Rio Ave", "Porto", "Inter Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/مهدي_طارمي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Mehdi_Taremi"
  },
  {
    id: "benni-mccarthy",
    nameAr: "بيني مكارثي",
    nameEn: "Benni McCarthy",
    nationalityAr: "جنوب أفريقي",
    nationalityEn: "South African",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1994-2013",
    active: false,
    bioAr: "مهاجم جنوب أفريقي، أحد أفضل الهدافين الأفارقة الذين لعبوا في أوروبا، فاز بدوري أبطال أوروبا مع بورتو البرتغالي قبل أن يلعب في الدوري الإنجليزي مع بلاكبيرن روفرز وويست هام يونايتد.",
    bioEn: "South African striker and one of the most prolific African goalscorers to play in Europe, he won the UEFA Champions League with Porto before playing in the Premier League for Blackburn Rovers and West Ham United.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2004 مع بورتو",
      "لقب الدوري البرتغالي مع بورتو",
      "هداف تاريخي لمنتخب جنوب أفريقيا",
      "أول جنوب أفريقي يسجل في دوري أبطال أوروبا وكأس العالم"
    ],
    achievementsEn: [
      "UEFA Champions League title 2004 with Porto",
      "Primeira Liga title with Porto",
      "South Africa's all-time top scorer",
      "First South African to score in the Champions League and at a World Cup"
    ],
    clubsHistoryAr: ["أياكس كيب تاون", "سلتا فيغو", "بورتو", "بلاكبيرن روفرز", "ويست هام يونايتد"],
    clubsHistoryEn: ["Ajax Cape Town", "Celta Vigo", "Porto", "Blackburn Rovers", "West Ham United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بيني_مكارثي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Benni_McCarthy"
  },
  {
    id: "seydou-keita",
    nameAr: "سيدو كيتا",
    nameEn: "Seydou Keita",
    nationalityAr: "مالي",
    nationalityEn: "Malian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "1998-2017",
    active: false,
    bioAr: "لاعب وسط مالي، أحد أفضل لاعبي إفريقيا في جيله، قضى أربعة مواسم مميزة مع برشلونة الإسباني فاز خلالها بالعديد من الألقاب، عُرف بقوته وذكائه التكتيكي في خط الوسط.",
    bioEn: "Malian midfielder and one of the finest African players of his generation, he spent four highly successful seasons at Barcelona, known for his strength and tactical intelligence in midfield.",
    achievementsAr: [
      "لقبا دوري أبطال أوروبا مع برشلونة (2009، 2011)",
      "3 ألقاب دوري إسباني مع برشلونة",
      "أفضل لاعب أفريقي (المركز الثاني) عدة مرات",
      "قائد منتخب مالي"
    ],
    achievementsEn: [
      "Two UEFA Champions League titles with Barcelona (2009, 2011)",
      "Three La Liga titles with Barcelona",
      "Multiple runner-up finishes for African Footballer of the Year",
      "Mali national team captain"
    ],
    clubsHistoryAr: ["استقلال أوسيالو", "لينس", "إشبيلية", "برشلونة", "داليان أبيتيان", "بيتيس"],
    clubsHistoryEn: ["Stade Malien", "RC Lens", "Sevilla", "Barcelona", "Dalian Aerbin", "Real Betis"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/سيدو_كيتا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Seydou_Keita"
  },
  {
    id: "edin-dzeko",
    nameAr: "إدين دجيكو",
    nameEn: "Edin Džeko",
    nationalityAr: "بوسني",
    nationalityEn: "Bosnian",
    clubAr: "سراييفو",
    clubEn: "FK Sarajevo",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2005-الآن",
    active: true,
    bioAr: "الهداف التاريخي لمنتخب البوسنة والهرسك، لعب لأندية أوروبية كبرى مثل فولفسبورغ ومانشستر سيتي وروما وإنتر ميلان، عُرف بقوته البدنية وحسه التهديفي العالي.",
    bioEn: "Bosnia and Herzegovina's all-time top scorer, he played for major European clubs including Wolfsburg, Manchester City, Roma and Inter Milan, known for his physical strength and clinical finishing.",
    achievementsAr: [
      "لقب الدوري الإنجليزي مع مانشستر سيتي (عدة مرات)",
      "لقب الدوري الألماني مع فولفسبورغ 2008-2009",
      "هداف تاريخي لمنتخب البوسنة والهرسك",
      "الوصول لنهائي دوري أبطال أوروبا 2023 مع إنتر ميلان"
    ],
    achievementsEn: [
      "Premier League titles with Manchester City",
      "Bundesliga title with Wolfsburg 2008-2009",
      "Bosnia and Herzegovina's all-time top scorer",
      "UEFA Champions League finalist 2023 with Inter Milan"
    ],
    clubsHistoryAr: ["جيليزنيتشار", "أوسييك", "تيبليتسه", "فولفسبورغ", "مانشستر سيتي", "روما", "إنتر ميلان", "فنربخشة", "سراييفو"],
    clubsHistoryEn: ["Željezničar", "Slavia Prague (loan)", "Teplice", "Wolfsburg", "Manchester City", "Roma", "Inter Milan", "Fenerbahçe", "FK Sarajevo"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إدين_جيكو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Edin_Džeko"
  },
  {
    id: "marek-hamsik",
    nameAr: "ماريك هامشيك",
    nameEn: "Marek Hamšík",
    nationalityAr: "سلوفاكي",
    nationalityEn: "Slovak",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2004-2023",
    active: false,
    bioAr: "لاعب وسط سلوفاكي، هو صاحب الرقم القياسي في عدد المباريات والأهداف لنادي نابولي الإيطالي، وقاد منتخب بلاده للوصول إلى دور الـ16 في كأس العالم 2010.",
    bioEn: "Slovak midfielder who holds Napoli's all-time appearance and goalscoring records, and captained his national team to the Round of 16 at the 2010 World Cup.",
    achievementsAr: [
      "هداف تاريخي لنادي نابولي",
      "صاحب أكثر عدد مشاركات في تاريخ نابولي",
      "لقب كأس إيطاليا مع نابولي (عدة مرات)",
      "قائد منتخب سلوفاكيا"
    ],
    achievementsEn: [
      "Napoli's all-time record goalscorer",
      "Napoli's all-time record appearance holder",
      "Multiple Coppa Italia titles with Napoli",
      "Slovakia national team captain"
    ],
    clubsHistoryAr: ["سلوفان براتيسلافا", "بروجا", "نابولي", "داليان بروفيشنال", "غوتنبرغ", "تريفيزو"],
    clubsHistoryEn: ["Slovan Bratislava", "Brescia", "Napoli", "Dalian Professional", "Göteborg", "Trabzonspor"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ماريك_هامشيك",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Marek_Hamšík"
  },
  {
    id: "gylfi-sigurdsson",
    nameAr: "جيلفي سيجوردسون",
    nameEn: "Gylfi Sigurðsson",
    nationalityAr: "آيسلندي",
    nationalityEn: "Icelandic",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط مهاجم", en: "Attacking Midfielder" },
    era: "2005-2023",
    active: false,
    bioAr: "لاعب وسط آيسلندي، أحد أبرز نجوم منتخب آيسلندا في مشواره التاريخي بالتأهل لكأس العالم 2018 ويورو 2016، لعب في الدوري الإنجليزي لأندية مثل توتنهام وسوانزي وإيفرتون.",
    bioEn: "Icelandic attacking midfielder and one of the biggest stars of Iceland's historic runs to Euro 2016 and the 2018 World Cup, he played in the Premier League for Tottenham, Swansea City and Everton.",
    achievementsAr: [
      "الوصول لربع نهائي يورو 2016 مع آيسلندا",
      "أفضل لاعب في الدوري الإنجليزي الدرجة الأولى (تشامبيونشيب) في أحد المواسم",
      "قائد منتخب آيسلندا",
      "أحد أفضل هدافي آيسلندا التاريخيين"
    ],
    achievementsEn: [
      "Euro 2016 quarter-finalist with Iceland",
      "Championship Player of the Season in one campaign",
      "Iceland national team captain",
      "One of Iceland's all-time leading scorers"
    ],
    clubsHistoryAr: ["ريدينغ", "هوفنهايم", "توتنهام", "سوانزي سيتي", "إيفرتون"],
    clubsHistoryEn: ["Reading", "Hoffenheim", "Tottenham Hotspur", "Swansea City", "Everton"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جيلفي_سيجوردسون",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gylfi_Sigurðsson"
  },
  {
    id: "alphonso-davies",
    nameAr: "ألفونسو ديفيز",
    nameEn: "Alphonso Davies",
    nationalityAr: "كندي",
    nationalityEn: "Canadian",
    clubAr: "بايرن ميونخ",
    clubEn: "Bayern Munich",
    position: { ar: "ظهير أيسر", en: "Left-back" },
    era: "2016-الآن",
    active: true,
    bioAr: "ظهير أيسر كندي من مواليد مخيم للاجئين في غانا، يُعد من أسرع لاعبي كرة القدم في العالم، انتقل من فانكوفر وايت كابس الكندي إلى بايرن ميونخ الألماني حيث أصبح من أفضل الظهيرة اليسرى في العالم.",
    bioEn: "Canadian left-back born in a refugee camp in Ghana, regarded as one of the fastest players in world football. He moved from Vancouver Whitecaps to Bayern Munich, where he became one of the world's best left-backs.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2020 مع بايرن ميونخ",
      "عدة ألقاب دوري ألماني مع بايرن ميونخ",
      "قائد منتخب كندا",
      "المشاركة في كأس العالم 2022 مع كندا"
    ],
    achievementsEn: [
      "UEFA Champions League title 2020 with Bayern Munich",
      "Multiple Bundesliga titles with Bayern Munich",
      "Canada national team captain",
      "2022 FIFA World Cup participant with Canada"
    ],
    clubsHistoryAr: ["فانكوفر وايت كابس", "بايرن ميونخ"],
    clubsHistoryEn: ["Vancouver Whitecaps", "Bayern Munich"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ألفونسو_ديفيز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Alphonso_Davies"
  },
  {
    id: "alexis-sanchez",
    nameAr: "أليكسيس سانشيز",
    nameEn: "Alexis Sánchez",
    nationalityAr: "تشيلي",
    nationalityEn: "Chilean",
    clubAr: "أودينيزي",
    clubEn: "Udinese",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2005-الآن",
    active: true,
    bioAr: "مهاجم تشيلي، أحد أعظم لاعبي بلاده في التاريخ، فاز بلقبي كوبا أمريكا متتاليين مع منتخب تشيلي، ولعب في أوروبا لأندية بارزة مثل برشلونة وآرسنال ومانشستر يونايتد وإنتر ميلان.",
    bioEn: "Chilean forward and one of his country's greatest-ever players, he won back-to-back Copa América titles with the national team and played in Europe for major clubs including Barcelona, Arsenal, Manchester United and Inter Milan.",
    achievementsAr: [
      "لقبا كوبا أمريكا متتاليان مع تشيلي (2015، 2016)",
      "لقب الدوري الإسباني مع برشلونة",
      "هداف تاريخي مشارك لمنتخب تشيلي",
      "لقب الدوري الإيطالي مع إنتر ميلان"
    ],
    achievementsEn: [
      "Back-to-back Copa América titles with Chile (2015, 2016)",
      "La Liga title with Barcelona",
      "Among Chile's all-time top scorers",
      "Serie A title with Inter Milan"
    ],
    clubsHistoryAr: ["كوبكيرين", "كولو كولو", "ريفر بليت (إعارة)", "أودينيزي", "برشلونة", "آرسنال", "مانشستر يونايتد", "إنتر ميلان", "مارسيليا", "أودينيزي"],
    clubsHistoryEn: ["Cobreloa", "Colo-Colo", "River Plate (loan)", "Udinese", "Barcelona", "Arsenal", "Manchester United", "Inter Milan", "Marseille", "Udinese"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أليكسيس_سانشيز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Alexis_Sánchez"
  },
  {
    id: "arturo-vidal",
    nameAr: "أرتورو فيدال",
    nameEn: "Arturo Vidal",
    nationalityAr: "تشيلي",
    nationalityEn: "Chilean",
    clubAr: "كولو كولو",
    clubEn: "Colo-Colo",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2005-الآن",
    active: true,
    bioAr: "لاعب وسط تشيلي عُرف بقوته البدنية وحماسه القتالي في الملعب، فاز بلقبي كوبا أمريكا مع منتخب بلاده، ولعب لأندية أوروبية كبرى مثل بايرن ميونخ ويوفنتوس وبرشلونة وإنتر ميلان.",
    bioEn: "Chilean midfielder known for his physicality and combative spirit on the pitch, he won two Copa América titles with the national team and played for major European clubs including Bayern Munich, Juventus, Barcelona and Inter Milan.",
    achievementsAr: [
      "لقبا كوبا أمريكا متتاليان مع تشيلي (2015، 2016)",
      "لقب دوري أبطال أوروبا 2015 مع بايرن ميونخ",
      "عدة ألقاب دوري إيطالي مع يوفنتوس",
      "لقب الدوري الإسباني مع برشلونة"
    ],
    achievementsEn: [
      "Back-to-back Copa América titles with Chile (2015, 2016)",
      "UEFA Champions League title 2015 with Bayern Munich",
      "Multiple Serie A titles with Juventus",
      "La Liga title with Barcelona"
    ],
    clubsHistoryAr: ["كولو كولو", "باير ليفركوزن", "يوفنتوس", "بايرن ميونخ", "برشلونة", "إنتر ميلان", "فلامنغو", "أتلتيكو مينيرو", "كولو كولو"],
    clubsHistoryEn: ["Colo-Colo", "Bayer Leverkusen", "Juventus", "Bayern Munich", "Barcelona", "Inter Milan", "Flamengo", "Atlético Mineiro", "Colo-Colo"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أرتورو_فيدال",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Arturo_Vidal"
  },
  {
    id: "paolo-guerrero",
    nameAr: "باولو غيريرو",
    nameEn: "Paolo Guerrero",
    nationalityAr: "بيروفي",
    nationalityEn: "Peruvian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2000-2024",
    active: false,
    bioAr: "الهداف التاريخي لمنتخب بيرو، قاد بلاده للتأهل إلى كأس العالم 2018 بعد غياب طويل، لعب في الدوري الألماني والبرازيلي لأندية مثل بايرن ميونخ وهامبورغ وكورينثيانس وفلامنغو.",
    bioEn: "Peru's all-time top scorer, he led his country to the 2018 World Cup after a long absence from the tournament. He played in Germany and Brazil for clubs including Bayern Munich, Hamburg, Corinthians and Flamengo.",
    achievementsAr: [
      "الهداف التاريخي لمنتخب بيرو",
      "هداف كوبا أمريكا 2011",
      "لقب الدوري البرازيلي مع كورينثيانس وفلامنغو",
      "قائد منتخب بيرو"
    ],
    achievementsEn: [
      "Peru's all-time record goalscorer",
      "2011 Copa América top scorer",
      "Brazilian league titles with Corinthians and Flamengo",
      "Peru national team captain"
    ],
    clubsHistoryAr: ["أليانزا ليما", "باير ليفركوزن", "هامبورغ", "بايرن ميونخ", "كورينثيانس", "فلامنغو", "إنترناسيونال"],
    clubsHistoryEn: ["Alianza Lima", "Bayer Leverkusen", "Hamburg", "Bayern Munich", "Corinthians", "Flamengo", "Internacional"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/باولو_غيريرو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Paolo_Guerrero"
  },
  {
    id: "keylor-navas",
    nameAr: "كيلور نافاس",
    nameEn: "Keylor Navas",
    nationalityAr: "كوستاريكي",
    nationalityEn: "Costa Rican",
    clubAr: "نيوكاسل",
    clubEn: "Newcastle (Costa Rica)",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "2005-الآن",
    active: true,
    bioAr: "حارس مرمى كوستاريكي، كان نجم كأس العالم 2014 التي وصلت فيها كوستاريكا إلى ربع النهائي، فاز بثلاثية دوري أبطال أوروبا متتالية مع ريال مدريد قبل انتقاله إلى باريس سان جيرمان.",
    bioEn: "Costa Rican goalkeeper who starred at the 2014 World Cup, where Costa Rica reached the quarter-finals. He won three consecutive UEFA Champions League titles with Real Madrid before moving to Paris Saint-Germain.",
    achievementsAr: [
      "3 ألقاب متتالية لدوري أبطال أوروبا مع ريال مدريد (2016-2018)",
      "الوصول لربع نهائي كأس العالم 2014 مع كوستاريكا",
      "قفاز أفضل حارس في كأس العالم 2014 (ضمن الترشيحات)",
      "قائد منتخب كوستاريكا"
    ],
    achievementsEn: [
      "Three consecutive UEFA Champions League titles with Real Madrid (2016-2018)",
      "2014 FIFA World Cup quarter-finalist with Costa Rica",
      "Among the nominees for the World Cup 2014 Golden Glove",
      "Costa Rica national team captain"
    ],
    clubsHistoryAr: ["سابريسا", "ألباسيتي", "ليفانتي", "ريال مدريد", "باريس سان جيرمان", "نوتنغهام فورست"],
    clubsHistoryEn: ["Saprissa", "Albacete", "Levante", "Real Madrid", "Paris Saint-Germain", "Nottingham Forest"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كيلور_نافاس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Keylor_Navas"
  },
  {
    id: "younis-mahmoud",
    nameAr: "يونس محمود",
    nameEn: "Younis Mahmoud",
    nationalityAr: "عراقي",
    nationalityEn: "Iraqi",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2000-2020",
    active: false,
    bioAr: "الهداف التاريخي ومهاجم وقائد منتخب العراق، قاد بلاده لتحقيق أول لقب لها في كأس آسيا عام 2007 وسجل هدف الفوز في المباراة النهائية أمام السعودية.",
    bioEn: "Iraq's all-time top scorer, forward and captain, he led his country to their first-ever AFC Asian Cup title in 2007, scoring the winning goal in the final against Saudi Arabia.",
    achievementsAr: [
      "بطولة كأس آسيا 2007 مع العراق",
      "أفضل لاعب في بطولة كأس آسيا 2007",
      "الهداف التاريخي لمنتخب العراق",
      "قائد منتخب العراق"
    ],
    achievementsEn: [
      "AFC Asian Cup title 2007 with Iraq",
      "AFC Asian Cup 2007 Most Valuable Player",
      "Iraq's all-time record goalscorer",
      "Iraq national team captain"
    ],
    clubsHistoryAr: ["الزوراء", "الكويت", "القطن الأخضر", "الغرافة", "الإسماعيلي", "الجيش الملكي"],
    clubsHistoryEn: ["Al-Zawraa", "Kuwait SC", "Al-Gharafa", "Ismaily", "AGMK", "Al-Shorta"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/يونس_محمود",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Younis_Mahmoud"
  },
  {
    id: "akram-afif",
    nameAr: "أكرم عفيف",
    nameEn: "Akram Afif",
    nationalityAr: "قطري",
    nationalityEn: "Qatari",
    clubAr: "السد",
    clubEn: "Al Sadd",
    position: { ar: "جناح / مهاجم", en: "Winger / Forward" },
    era: "2013-الآن",
    active: true,
    bioAr: "نجم منتخب قطر وقائده، كان العنصر الأبرز في تتويج قطر بلقب كأس آسيا 2023 حيث سجل ثلاثية في النهائي أمام الأردن، ويُعد من أفضل اللاعبين في تاريخ الكرة القطرية.",
    bioEn: "Qatar's national team star and captain, he was the standout player as Qatar won the 2023 AFC Asian Cup, scoring a hat-trick in the final against Jordan, and is regarded as one of the greatest players in Qatari football history.",
    achievementsAr: [
      "بطولتا كأس آسيا مع قطر (2019، 2023)",
      "أفضل لاعب في نهائي كأس آسيا 2023",
      "هداف مشارك في عدة نسخ من كأس آسيا",
      "أفضل لاعب في القارة الآسيوية عدة مرات"
    ],
    achievementsEn: [
      "Two AFC Asian Cup titles with Qatar (2019, 2023)",
      "Man of the Match in the 2023 Asian Cup final",
      "Among the top scorers in multiple Asian Cup editions",
      "Multiple-time Asian Footballer of the Year nominee"
    ],
    clubsHistoryAr: ["السد", "فياريال (إعارة)", "سبورتينغ خيخون (إعارة)", "السد"],
    clubsHistoryEn: ["Al Sadd", "Villarreal (loan)", "Sporting Gijón (loan)", "Al Sadd"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أكرم_عفيف",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Akram_Afif"
  },
  {
    id: "wahbi-khazri",
    nameAr: "وهبي الخزري",
    nameEn: "Wahbi Khazri",
    nationalityAr: "تونسي",
    nationalityEn: "Tunisian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط مهاجم / مهاجم", en: "Attacking Midfielder / Forward" },
    era: "2010-2024",
    active: false,
    bioAr: "نجم منتخب تونس وقائده السابق، لعب في الدوري الفرنسي لأندية مثل بوردو ورين وسان إيتيان، عُرف بقوة تسديداته من خارج منطقة الجزاء وقيادته الهجومية لمنتخب بلاده في ثلاث بطولات كأس عالم متتالية.",
    bioEn: "Tunisia national team star and former captain, he played in Ligue 1 for clubs including Bordeaux, Rennes and Saint-Étienne, known for his powerful long-range shooting and leading Tunisia's attack across three consecutive World Cups.",
    achievementsAr: [
      "المشاركة في ثلاث نسخ متتالية من كأس العالم مع تونس (2018، 2022، وتصفيات لاحقة)",
      "هداف مشارك لمنتخب تونس",
      "قائد منتخب تونس",
      "هدف الفوز التاريخي على فرنسا في كأس العالم 2022"
    ],
    achievementsEn: [
      "Participated in multiple FIFA World Cups with Tunisia (2018, 2022)",
      "Among Tunisia's top scorers",
      "Tunisia national team captain",
      "Scored Tunisia's historic winning goal against France at the 2022 World Cup"
    ],
    clubsHistoryAr: ["النادي الصفاقسي", "أجاكسيو", "بستيا", "بوردو", "سندرلاند (إعارة)", "رين", "سان إيتيان", "مونبلييه"],
    clubsHistoryEn: ["CS Sfaxien", "Ajaccio", "Bastia", "Bordeaux", "Sunderland (loan)", "Rennes", "Saint-Étienne", "Montpellier"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/وهبي_الخزري",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Wahbi_Khazri"
  }
,

{
    id: "eusebio",
    nameAr: "يوسيبيو",
    nameEn: "Eusébio",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1957-1979",
    active: false,
    bioAr: "أسطورة برتغالية وموزمبيقية المولد، يُلقب بـ'الفهد الأسود'، أحد أعظم مهاجمي التاريخ وهداف تاريخي لنادي بنفيكا والمنتخب البرتغالي، قاد البرتغال للمركز الثالث في كأس العالم 1966 وكان هداف البطولة.",
    bioEn: "Portuguese legend born in Mozambique, nicknamed the 'Black Panther', regarded as one of the greatest forwards of all time. Benfica and Portugal's all-time top scorer, he led Portugal to third place at the 1966 World Cup and was the tournament's top scorer.",
    achievementsAr: [
      "الحذاء الذهبي وهداف كأس العالم 1966 (9 أهداف)",
      "الكرة الذهبية 1965",
      "لقب دوري أبطال أوروبا 1962 مع بنفيكا",
      "الهداف التاريخي لنادي بنفيكا والمنتخب البرتغالي"
    ],
    achievementsEn: [
      "1966 FIFA World Cup Golden Boot and top scorer (9 goals)",
      "Ballon d'Or 1965",
      "European Cup title 1962 with Benfica",
      "All-time top scorer for both Benfica and Portugal"
    ],
    clubsHistoryAr: ["سبورتينغ لورينسو ماركيش", "بنفيكا", "بوسطن مينوتمن", "لاس فيغاس كويكس", "طورونتو ميتروز-كرواتيا"],
    clubsHistoryEn: ["Sporting Lourenço Marques", "Benfica", "Boston Minutemen", "Las Vegas Quicksilvers", "Toronto Metros-Croatia"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/يوسيبيو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Eusébio"
  },
  {
    id: "franco-baresi",
    nameAr: "فرانكو باريزي",
    nameEn: "Franco Baresi",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع (ليبرو)", en: "Defender (Sweeper)" },
    era: "1977-1997",
    active: false,
    bioAr: "يُعتبر أحد أعظم المدافعين في تاريخ كرة القدم، قضى مسيرته بأكملها مع ميلان الإيطالي وكان قائده لسنوات طويلة، شكّل مع نستا وباولو مالديني خط دفاع أسطوري، وقاد إيطاليا لنهائي كأس العالم 1994.",
    bioEn: "Widely regarded as one of the greatest defenders in football history, he spent his entire career at AC Milan and captained the club for many years, forming a legendary defensive line, and led Italy to the 1994 World Cup final.",
    achievementsAr: [
      "3 ألقاب دوري أبطال أوروبا مع ميلان",
      "6 ألقاب دوري إيطالي مع ميلان",
      "الوصول لنهائي كأس العالم 1994 مع إيطاليا (قائدًا)",
      "أدرج ضمن قائمة أعظم 125 لاعبًا حسب بيليه (FIFA 100)"
    ],
    achievementsEn: [
      "3 European Cup/Champions League titles with Milan",
      "6 Serie A titles with Milan",
      "1994 FIFA World Cup finalist with Italy (as captain)",
      "Named among Pelé's FIFA 100 greatest living players"
    ],
    clubsHistoryAr: ["ميلان"],
    clubsHistoryEn: ["Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فرانكو_باريزي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Franco_Baresi"
  },
  {
    id: "paul-gascoigne",
    nameAr: "بول غاسكوين",
    nameEn: "Paul Gascoigne",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط مهاجم", en: "Attacking Midfielder" },
    era: "1985-2004",
    active: false,
    bioAr: "لاعب وسط إنجليزي، يُعتبر من أكثر اللاعبين موهبة في جيله، اشتهر بأدائه المؤثر في كأس العالم 1990 وبكائه الشهير بعد الإنذار في نصف النهائي، لعب لتوتنهام ولاتسيو الإيطالي وريدجرز الاسكتلندي.",
    bioEn: "English attacking midfielder regarded as one of the most naturally gifted players of his generation, famous for his emotional performance and iconic tears after being booked in the 1990 World Cup semi-final. He played for Tottenham, Lazio and Rangers.",
    achievementsAr: [
      "الوصول لنصف نهائي كأس العالم 1990 مع إنجلترا",
      "لقب كأس الاتحاد الإنجليزي 1991 مع توتنهام",
      "3 ألقاب دوري اسكتلندي مع ريدجرز",
      "لاعب العام الشاب في إنجلترا 1988"
    ],
    achievementsEn: [
      "1990 FIFA World Cup semi-finalist with England",
      "1991 FA Cup title with Tottenham Hotspur",
      "3 Scottish league titles with Rangers",
      "PFA Young Player of the Year 1988"
    ],
    clubsHistoryAr: ["نيوكاسل يونايتد", "توتنهام", "لاتسيو", "ريدجرز", "ميدلزبره", "إيفرتون", "برنلي"],
    clubsHistoryEn: ["Newcastle United", "Tottenham Hotspur", "Lazio", "Rangers", "Middlesbrough", "Everton", "Burnley"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بول_غاسكوين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Paul_Gascoigne"
  },
  {
    id: "miroslav-klose",
    nameAr: "ميروسلاف كلوزه",
    nameEn: "Miroslav Klose",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1998-2016",
    active: false,
    bioAr: "مهاجم ألماني من مواليد بولندا، صاحب الرقم القياسي التاريخي لأكثر الأهداف تسجيلًا في تاريخ نهائيات كأس العالم (16 هدفًا)، تُوّج بلقب كأس العالم 2014 مع ألمانيا، ولعب لكايزرسلاوترن وفيردر بريمن وبايرن ميونخ ولاتسيو.",
    bioEn: "German forward born in Poland, holder of the all-time record for most goals scored at FIFA World Cup finals (16 goals). He won the 2014 World Cup with Germany and played for Kaiserslautern, Werder Bremen, Bayern Munich and Lazio.",
    achievementsAr: [
      "الرقم القياسي التاريخي لأكثر الأهداف في نهائيات كأس العالم (16 هدفًا)",
      "بطولة كأس العالم 2014 مع ألمانيا",
      "حذاء ذهبي كأس العالم 2006",
      "لقب دوري إيطالي مع لاتسيو"
    ],
    achievementsEn: [
      "All-time record for most FIFA World Cup finals goals (16 goals)",
      "2014 FIFA World Cup title with Germany",
      "2006 FIFA World Cup Golden Boot",
      "Serie A title with Lazio"
    ],
    clubsHistoryAr: ["كايزرسلاوترن", "فيردر بريمن", "بايرن ميونخ", "لاتسيو"],
    clubsHistoryEn: ["Kaiserslautern", "Werder Bremen", "Bayern Munich", "Lazio"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ميروسلاف_كلوزه",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Miroslav_Klose"
  },
  {
    id: "gabriel-batistuta",
    nameAr: "غابرييل باتيستوتا",
    nameEn: "Gabriel Batistuta",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1988-2005",
    active: false,
    bioAr: "أحد أعظم المهاجمين الأرجنتينيين في التاريخ، يُلقب بـ'باتيغول'، هداف تاريخي لمنتخب الأرجنتين لسنوات طويلة، اشتهر مع فيورنتينا الإيطالي بتسديداته القوية وأهدافه الحاسمة قبل انتقاله إلى روما.",
    bioEn: "One of the greatest Argentine strikers in history, nicknamed 'Batigol', he was Argentina's all-time top scorer for many years. He became a legend at Fiorentina, known for his powerful shooting and clinical finishing, before moving to Roma.",
    achievementsAr: [
      "الهداف التاريخي السابق لمنتخب الأرجنتين",
      "لقب الدوري الإيطالي 2000-2001 مع روما",
      "هداف كوبا أمريكا 1991 و1995",
      "أسطورة نادي فيورنتينا"
    ],
    achievementsEn: [
      "Former all-time top scorer for the Argentina national team",
      "Serie A title 2000-2001 with Roma",
      "Copa América top scorer 1991 and 1995",
      "Fiorentina club legend"
    ],
    clubsHistoryAr: ["نيويلز أولد بويز", "ريفر بليت", "بوكا جونيورز", "فيورنتينا", "روما", "إنتر ميلان", "الدحيل"],
    clubsHistoryEn: ["Newell's Old Boys", "River Plate", "Boca Juniors", "Fiorentina", "Roma", "Inter Milan", "Al Arabi"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/غابرييل_باتيستوتا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gabriel_Batistuta"
  },
  {
    id: "davor-suker",
    nameAr: "دافور شوكر",
    nameEn: "Davor Šuker",
    nationalityAr: "كرواتي",
    nationalityEn: "Croatian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1986-2003",
    active: false,
    bioAr: "الهداف التاريخي لمنتخب كرواتيا، قاد بلاده للمركز الثالث في كأس العالم 1998 وكان الهداف الأول للبطولة بستة أهداف، لعب لديناموزغرب وسيفيا وريال مدريد وآرسنال.",
    bioEn: "Croatia's all-time top scorer, he led his country to third place at the 1998 World Cup and was the tournament's top scorer with six goals. He played for Dinamo Zagreb, Sevilla, Real Madrid and Arsenal.",
    achievementsAr: [
      "الحذاء الذهبي وهداف كأس العالم 1998 (6 أهداف)",
      "المركز الثالث في كأس العالم 1998 مع كرواتيا",
      "لقب دوري أبطال أوروبا 1998 مع ريال مدريد",
      "الهداف التاريخي لمنتخب كرواتيا"
    ],
    achievementsEn: [
      "1998 FIFA World Cup Golden Boot and top scorer (6 goals)",
      "Third place at the 1998 World Cup with Croatia",
      "UEFA Champions League title 1998 with Real Madrid",
      "Croatia's all-time record goalscorer"
    ],
    clubsHistoryAr: ["ديناموزغرب", "سيفيا", "ريال مدريد", "آرسنال", "1899 هوفنهايم", "ويست هام يونايتد"],
    clubsHistoryEn: ["Dinamo Zagreb", "Sevilla", "Real Madrid", "Arsenal", "1899 Hoffenheim", "West Ham United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دافور_شوكر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Davor_Šuker"
  },
  {
    id: "roger-milla",
    nameAr: "روجيه ميلا",
    nameEn: "Roger Milla",
    nationalityAr: "كاميروني",
    nationalityEn: "Cameroonian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1968-1996",
    active: false,
    bioAr: "أسطورة كاميرونية وأحد أهم رموز كرة القدم الأفريقية، أذهل العالم بأدائه مع الكاميرون في كأس العالم 1990 وهو في التاسعة والثلاثين من عمره واحتفالاته الراقصة الشهيرة عند ركن الملعب، ليصبح أكبر هداف سنًا في تاريخ كأس العالم آنذاك.",
    bioEn: "Cameroonian legend and one of the most iconic figures in African football history, he stunned the world with his performances for Cameroon at the 1990 World Cup at age 38, including his famous corner-flag dance celebrations, becoming the oldest goalscorer in World Cup history at the time.",
    achievementsAr: [
      "الوصول لربع نهائي كأس العالم 1990 مع الكاميرون (أول أفريقي)",
      "لقبا كأس أمم أفريقيا مع الكاميرون (1984، 1988)",
      "أفضل لاعب أفريقي 1976 و1990",
      "أكبر هداف سنًا في تاريخ نهائيات كأس العالم عند تسجيله عام 1994"
    ],
    achievementsEn: [
      "First African team to reach the World Cup quarter-finals, Cameroon 1990",
      "Two Africa Cup of Nations titles with Cameroon (1984, 1988)",
      "African Footballer of the Year 1976 and 1990",
      "Oldest goalscorer in FIFA World Cup history at the time (1994)"
    ],
    clubsHistoryAr: ["ليوباردز دوالا", "تونير ياوندي", "فالنسيان", "موناكو", "باستيا", "سان إتيان", "مونبلييه", "جي إس ألاجاكوري (إعارة)"],
    clubsHistoryEn: ["Léopard Douala", "Tonnerre Yaoundé", "Valenciennes", "AS Monaco", "Bastia", "Saint-Étienne", "Montpellier", "JS Saint-Pierroise (loan)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/روجيه_ميلا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Roger_Milla"
  },
  {
    id: "zico",
    nameAr: "زيكو",
    nameEn: "Zico",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط مهاجم", en: "Attacking Midfielder" },
    era: "1971-1994",
    active: false,
    bioAr: "يُلقب بـ'الأبيض بيليه'، أحد أعظم لاعبي الوسط في تاريخ البرازيل، تألق مع فلامنغو وقاد المنتخب البرازيلي المميز في كأس العالم 1982 رغم عدم إحراز اللقب، اشتُهر بضرباته الحرة الرائعة.",
    bioEn: "Nicknamed the 'White Pelé', one of the greatest midfielders in Brazilian history, he starred for Flamengo and led the celebrated Brazil side at the 1982 World Cup, renowned for his exceptional free-kick technique.",
    achievementsAr: [
      "لقب كأس ليبرتادوريس والكأس العالمية للأندية 1981 مع فلامنغو",
      "المركز الثالث في مسابقة الكرة الذهبية 1983",
      "الهداف التاريخي لنادي فلامنغو",
      "أحد نجوم منتخب البرازيل الأسطوري في كأس العالم 1982"
    ],
    achievementsEn: [
      "Copa Libertadores and Intercontinental Cup title 1981 with Flamengo",
      "Third place in the 1983 Ballon d'Or voting",
      "Flamengo's all-time top scorer",
      "Star of Brazil's celebrated 1982 World Cup squad"
    ],
    clubsHistoryAr: ["فلامنغو", "أودينيزي", "كاشيما أنتلرز"],
    clubsHistoryEn: ["Flamengo", "Udinese", "Kashima Antlers"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/زيكو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Zico"
  },
  {
    id: "romario",
    nameAr: "روماريو",
    nameEn: "Romário",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1985-2008",
    active: false,
    bioAr: "أحد أعظم الهدافين في تاريخ كرة القدم، تُوّج بكأس العالم 1994 مع البرازيل وحصل على الكرة الذهبية لأفضل لاعب في البطولة، تألق مع برشلونة الإسباني قبل ذلك بموسم استثنائي.",
    bioEn: "One of the greatest goalscorers in football history, he won the 1994 World Cup with Brazil and was named the tournament's best player. He had an outstanding season at Barcelona before that title triumph.",
    achievementsAr: [
      "بطولة كأس العالم 1994 مع البرازيل",
      "الكرة الذهبية لأفضل لاعب في كأس العالم 1994",
      "لقب الدوري الإسباني 1993-1994 مع برشلونة",
      "هداف تاريخي بأكثر من ألف هدف في مسيرته حسب تصريحاته الشخصية"
    ],
    achievementsEn: [
      "1994 FIFA World Cup title with Brazil",
      "Golden Ball for the 1994 World Cup's best player",
      "La Liga title 1993-1994 with Barcelona",
      "Claimed over 1,000 career goals by his own personal count"
    ],
    clubsHistoryAr: ["فاسكو دا غاما", "PSV آيندهوفن", "برشلونة", "فلامنغو", "فالنسيا", "فاسكو دا غاما"],
    clubsHistoryEn: ["Vasco da Gama", "PSV Eindhoven", "Barcelona", "Flamengo", "Valencia", "Vasco da Gama"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/روماريو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Romário"
  },
  {
    id: "garrincha",
    nameAr: "غارينشا",
    nameEn: "Garrincha",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "جناح", en: "Winger" },
    era: "1953-1972",
    active: false,
    bioAr: "يُعتبر أحد أعظم الجناحين في تاريخ كرة القدم رغم تشوه خلقي في ساقيه، فاز بكأس العالم مرتين مع البرازيل (1958، 1962) وكان أفضل لاعب في بطولة 1962، اشتهر بمراوغاته الاستعراضية التي لا تُضاهى.",
    bioEn: "Considered one of the greatest wingers in football history despite a congenital leg deformity, he won two World Cups with Brazil (1958, 1962) and was named the best player of the 1962 tournament, renowned for his unmatched dribbling skill.",
    achievementsAr: [
      "بطولتا كأس العالم مع البرازيل (1958، 1962)",
      "أفضل لاعب في كأس العالم 1962",
      "هداف مشارك في كأس العالم 1962",
      "أحد أعظم الجناحين في تاريخ اللعبة"
    ],
    achievementsEn: [
      "Two FIFA World Cup titles with Brazil (1958, 1962)",
      "Best player of the 1962 FIFA World Cup",
      "Joint top scorer at the 1962 World Cup",
      "Regarded as one of the greatest wingers in the history of the game"
    ],
    clubsHistoryAr: ["بوتافوغو", "كورينثيانس", "فلامنغو", "أوليمبيا (باراغواي)"],
    clubsHistoryEn: ["Botafogo", "Corinthians", "Flamengo", "Olimpia (Paraguay)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/غارينشا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Garrincha"
  },
  {
    id: "socrates",
    nameAr: "سقراط",
    nameEn: "Sócrates",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان / صانع لعب", en: "Midfielder / Playmaker" },
    era: "1974-1989",
    active: false,
    bioAr: "لاعب وسط برازيلي وطبيب حاصل على شهادة الطب، يُعتبر عقل منتخب البرازيل المميز في كأس العالم 1982، اشتهر بأناقته الفنية وضرباته الرأسية الخلفية المدهشة، وكان قائد فريق كورينثيانس ورائد حركة 'الديمقراطية الكورنثية'.",
    bioEn: "Brazilian midfielder and qualified medical doctor, regarded as the brains of Brazil's celebrated 1982 World Cup side, known for his elegant technique and spectacular back-heel finishes. He captained Corinthians and pioneered the 'Corinthians Democracy' movement.",
    achievementsAr: [
      "قائد منتخب البرازيل المميز في كأس العالم 1982",
      "لاعب العام في أمريكا الجنوبية 1983",
      "أسطورة نادي كورينثيانس",
      "رائد حركة 'الديمقراطية الكورنثية' الاجتماعية"
    ],
    achievementsEn: [
      "Captained Brazil's celebrated 1982 World Cup squad",
      "South American Footballer of the Year 1983",
      "Corinthians club legend",
      "Pioneer of the 'Corinthians Democracy' social movement"
    ],
    clubsHistoryAr: ["بوتافوغو-ساو باولو", "كورينثيانس", "فيورنتينا", "فلامنغو", "سانتوس"],
    clubsHistoryEn: ["Botafogo-SP", "Corinthians", "Fiorentina", "Flamengo", "Santos"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/سقراط_(لاعب_كرة_قدم)",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Sócrates_(footballer)"
  },
  {
    id: "cafu",
    nameAr: "كافو",
    nameEn: "Cafu",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "ظهير أيمن", en: "Right-back" },
    era: "1989-2008",
    active: false,
    bioAr: "صاحب الرقم القياسي كأكثر لاعب مشاركة في نهائيات كأس العالم لمنتخب البرازيل، اللاعب الوحيد الذي شارك في ثلاث نهائيات متتالية لكأس العالم (1994، 1998، 2002)، تُوّج باللقب مرتين وكان قائد فريق 2002.",
    bioEn: "Holder of the record for most FIFA World Cup final appearances for Brazil, the only player to feature in three consecutive World Cup finals (1994, 1998, 2002), winning the title twice and captaining the 2002 squad.",
    achievementsAr: [
      "بطولتا كأس العالم مع البرازيل (1994، 2002) كقائد في 2002",
      "المشاركة في 3 نهائيات كأس عالم متتالية (رقم قياسي)",
      "لقب دوري أبطال أوروبا 2007 مع ميلان",
      "أسطورة نادي روما وميلان"
    ],
    achievementsEn: [
      "Two FIFA World Cup titles with Brazil (1994, 2002), captaining the 2002 team",
      "Only player to appear in three consecutive World Cup finals",
      "UEFA Champions League title 2007 with Milan",
      "Legend at both Roma and Milan"
    ],
    clubsHistoryAr: ["ساو باولو", "زاراغوزا", "روما", "ميلان"],
    clubsHistoryEn: ["São Paulo", "Real Zaragoza", "Roma", "Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كافو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Cafu"
  },
  {
    id: "yaya-toure",
    nameAr: "ياي توريه",
    nameEn: "Yaya Touré",
    nationalityAr: "إيفواري",
    nationalityEn: "Ivorian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان", en: "Midfielder" },
    era: "2001-2019",
    active: false,
    bioAr: "لاعب وسط إيفواري قوي البنية، فاز بلقب أفضل لاعب أفريقي أربع مرات متتالية، كان محوريًا في نجاحات مانشستر سيتي الإنجليزي وفاز معه بلقبي الدوري الممتاز، وتُوّج بكأس أمم أفريقيا 2015 مع ساحل العاج.",
    bioEn: "Powerful Ivorian midfielder who won the African Footballer of the Year award four consecutive times, was central to Manchester City's success in England, winning two Premier League titles, and won the 2015 Africa Cup of Nations with Ivory Coast.",
    achievementsAr: [
      "أفضل لاعب أفريقي أربع مرات متتالية (2011-2014)",
      "لقبا الدوري الإنجليزي الممتاز مع مانشستر سيتي",
      "كأس أمم أفريقيا 2015 مع ساحل العاج",
      "لقب دوري أبطال أوروبا 2009 مع برشلونة"
    ],
    achievementsEn: [
      "African Footballer of the Year four times in a row (2011-2014)",
      "Two Premier League titles with Manchester City",
      "2015 Africa Cup of Nations title with Ivory Coast",
      "UEFA Champions League title 2009 with Barcelona"
    ],
    clubsHistoryAr: ["ASEC ميموزا", "بني ياس", "متالورغ دونيتسك", "موناكو", "أولمبياكوس", "برشلونة", "مانشستر سيتي", "أولمبياكوس"],
    clubsHistoryEn: ["ASEC Mimosas", "Beveren", "Metalurh Donetsk", "Monaco", "Olympiacos", "Barcelona", "Manchester City", "Olympiacos"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ياي_توريه",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Yaya_Touré"
  },
  {
    id: "hossam-hassan",
    nameAr: "حسام حسن",
    nameEn: "Hossam Hassan",
    nationalityAr: "مصري",
    nationalityEn: "Egyptian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1985-2007",
    active: false,
    bioAr: "الهداف التاريخي لمنتخب مصر والنادي الأهلي، يُعتبر أحد أعظم المهاجمين في تاريخ الكرة المصرية والأفريقية، توأمه إبراهيم حسن لعب معه في خط الوسط والهجوم لسنوات طويلة.",
    bioEn: "Egypt and Al Ahly's all-time top scorer, regarded as one of the greatest forwards in Egyptian and African football history. His twin brother Ibrahim Hassan played alongside him for years in midfield and attack.",
    achievementsAr: [
      "الهداف التاريخي لمنتخب مصر",
      "الهداف التاريخي للنادي الأهلي",
      "لقب كأس أمم أفريقيا 1998 مع مصر",
      "عدة ألقاب دوري مصري وأفريقي مع الأهلي"
    ],
    achievementsEn: [
      "Egypt's all-time record goalscorer",
      "Al Ahly's all-time record goalscorer",
      "Africa Cup of Nations title 1998 with Egypt",
      "Multiple Egyptian league and African club titles with Al Ahly"
    ],
    clubsHistoryAr: ["الأهلي", "نويشاتل إكزيلسيور (سويسرا)", "الأهلي"],
    clubsHistoryEn: ["Al Ahly", "Neuchâtel Xamax (Switzerland)", "Al Ahly"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/حسام_حسن",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Hossam_Hassan"
  },
  {
    id: "alessandro-del-piero",
    nameAr: "أليساندرو ديل بييرو",
    nameEn: "Alessandro Del Piero",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم / وسط مهاجم", en: "Forward / Attacking Midfielder" },
    era: "1991-2014",
    active: false,
    bioAr: "الهداف التاريخي لنادي يوفنتوس وأحد أعظم لاعبيه على الإطلاق، تُوّج بكأس العالم 2006 مع إيطاليا، عُرف بضرباته المنحنية المميزة المعروفة بـ'زاوية ديل بييرو'.",
    bioEn: "Juventus' all-time record goalscorer and one of the club's greatest-ever players, he won the 2006 World Cup with Italy, renowned for his trademark curling shots known as the 'Del Piero zone'.",
    achievementsAr: [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "الهداف التاريخي لنادي يوفنتوس",
      "لقب دوري أبطال أوروبا 1996 مع يوفنتوس",
      "6 ألقاب دوري إيطالي مع يوفنتوس"
    ],
    achievementsEn: [
      "2006 FIFA World Cup title with Italy",
      "Juventus' all-time record goalscorer",
      "UEFA Champions League title 1996 with Juventus",
      "6 Serie A titles with Juventus"
    ],
    clubsHistoryAr: ["يوفنتوس", "سيدني إف سي", "دلهي دينامو"],
    clubsHistoryEn: ["Juventus", "Sydney FC", "Delhi Dynamos"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أليساندرو_ديل_بييرو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Alessandro_Del_Piero"
  },
  {
    id: "dino-zoff",
    nameAr: "دينو زوف",
    nameEn: "Dino Zoff",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1961-1983",
    active: false,
    bioAr: "أحد أعظم حراس المرمى في تاريخ كرة القدم، قاد إيطاليا للفوز بكأس العالم 1982 وهو في الأربعين من عمره ليصبح أكبر لاعب سنًا يفوز بالبطولة، لعب لنابولي ويوفنتوس لسنوات طويلة.",
    bioEn: "One of the greatest goalkeepers in football history, he captained Italy to the 1982 World Cup title at age 40, becoming the oldest player to win the tournament. He had a long career with Napoli and Juventus.",
    achievementsAr: [
      "بطولة كأس العالم 1982 مع إيطاليا (قائدًا)",
      "أكبر لاعب سنًا يفوز بكأس العالم",
      "6 ألقاب دوري إيطالي مع يوفنتوس",
      "لقب كأس الاتحاد الأوروبي 1977 مع يوفنتوس"
    ],
    achievementsEn: [
      "1982 FIFA World Cup title with Italy (as captain)",
      "Oldest player to win a FIFA World Cup",
      "6 Serie A titles with Juventus",
      "UEFA Cup title 1977 with Juventus"
    ],
    clubsHistoryAr: ["أودينيزي", "مانتوفا", "نابولي", "يوفنتوس"],
    clubsHistoryEn: ["Udinese", "Mantova", "Napoli", "Juventus"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دينو_زوف",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Dino_Zoff"
  },
  {
    id: "gary-lineker",
    nameAr: "غاري لينيكر",
    nameEn: "Gary Lineker",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1978-1994",
    active: false,
    bioAr: "مهاجم إنجليزي، هداف كأس العالم 1986 وأحد أفضل هدافي تاريخ منتخب إنجلترا، عُرف بلعبه النظيف حيث لم يُطرد أو يُنذر طوال مسيرته الاحترافية، لعب لليستر وإيفرتون وبرشلونة وتوتنهام.",
    bioEn: "English forward, top scorer at the 1986 World Cup and one of England's greatest-ever goalscorers, renowned for his fair play as he was never booked or sent off during his professional career. He played for Leicester, Everton, Barcelona and Tottenham.",
    achievementsAr: [
      "الحذاء الذهبي وهداف كأس العالم 1986 (6 أهداف)",
      "هداف تاريخي لمنتخب إنجلترا سابقًا",
      "لقب كأس الاتحاد الإنجليزي 1991 مع توتنهام",
      "جائزة أفضل لاعب في إنجلترا (PFA) 1986"
    ],
    achievementsEn: [
      "1986 FIFA World Cup Golden Boot and top scorer (6 goals)",
      "Former England national team record goalscorer",
      "1991 FA Cup title with Tottenham Hotspur",
      "PFA Players' Player of the Year 1986"
    ],
    clubsHistoryAr: ["ليستر سيتي", "إيفرتون", "برشلونة", "توتنهام", "ناغويا غرامبوس"],
    clubsHistoryEn: ["Leicester City", "Everton", "Barcelona", "Tottenham Hotspur", "Nagoya Grampus"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/غاري_لينيكر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gary_Lineker"
  },
  {
    id: "david-villa",
    nameAr: "دافيد فيا",
    nameEn: "David Villa",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1999-2019",
    active: false,
    bioAr: "الهداف التاريخي لمنتخب إسبانيا، كان محوريًا في الفوز بيورو 2008 وكأس العالم 2010 مع 'الجيل الذهبي' الإسباني، لعب لفالنسيا وبرشلونة وأتلتيكو مدريد ونيويورك سيتي.",
    bioEn: "Spain's all-time record goalscorer, he was pivotal to Spain's 'golden generation' triumphs at Euro 2008 and the 2010 World Cup. He played for Valencia, Barcelona, Atlético Madrid and New York City FC.",
    achievementsAr: [
      "بطولتا يورو 2008 وكأس العالم 2010 مع إسبانيا",
      "الهداف التاريخي لمنتخب إسبانيا",
      "لقب دوري أبطال أوروبا 2011 مع برشلونة",
      "الحذاء الذهبي المشترك في يورو 2008"
    ],
    achievementsEn: [
      "UEFA Euro 2008 and 2010 FIFA World Cup titles with Spain",
      "Spain's all-time record goalscorer",
      "UEFA Champions League title 2011 with Barcelona",
      "Joint Golden Boot winner at Euro 2008"
    ],
    clubsHistoryAr: ["سبورتينغ خيخون", "سرقسطة", "فالنسيا", "برشلونة", "أتلتيكو مدريد", "ملبورن سيتي", "نيويورك سيتي", "فيسل كوبي"],
    clubsHistoryEn: ["Sporting Gijón", "Real Zaragoza", "Valencia", "Barcelona", "Atlético Madrid", "Melbourne City", "New York City FC", "Vissel Kobe"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دافيد_فيا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/David_Villa"
  },
  {
    id: "frank-rijkaard",
    nameAr: "فرانك ريكارد",
    nameEn: "Frank Rijkaard",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط ميدان / مدافع", en: "Midfielder / Defender" },
    era: "1980-1995",
    active: false,
    bioAr: "لاعب وسط هولندي مميز، جزء أساسي من الجيل الذهبي الهولندي الذي فاز بيورو 1988، لعب لأياكس وميلان الإيطالي وفاز معهما بألقاب أوروبية عديدة قبل أن يتحول لاحقًا للتدريب وقيادة برشلونة لثنائية دوري أبطال أوروبا.",
    bioEn: "Outstanding Dutch midfielder, a key part of the golden Dutch generation that won Euro 1988. He played for Ajax and Milan, winning numerous European titles with both, before later becoming a coach and leading Barcelona to Champions League glory.",
    achievementsAr: [
      "بطولة يورو 1988 مع هولندا",
      "لقبا دوري أبطال أوروبا مع ميلان (1989، 1990)",
      "لقب كأس الأمم الأوروبية للأندية البطلة مع أياكس 1972 (لا ينطبق - لُعب لاحقًا)",
      "لقب الدوري الإيطالي مع ميلان"
    ],
    achievementsEn: [
      "UEFA Euro 1988 title with the Netherlands",
      "Two European Cup titles with Milan (1989, 1990)",
      "European Cup Winners' Cup title with Ajax 1987",
      "Serie A title with Milan"
    ],
    clubsHistoryAr: ["أياكس", "سبورتينغ لشبونة", "ريال زرقوسة (إعارة)", "ميلان"],
    clubsHistoryEn: ["Ajax", "Sporting CP", "Real Zaragoza (loan)", "Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فرانك_ريكارد",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Frank_Rijkaard"
  },
  {
    id: "enzo-francescoli",
    nameAr: "إنزو فرانشيسكولي",
    nameEn: "Enzo Francescoli",
    nationalityAr: "أوروغوياني",
    nationalityEn: "Uruguayan",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط مهاجم / صانع لعب", en: "Attacking Midfielder / Playmaker" },
    era: "1980-1997",
    active: false,
    bioAr: "يُعتبر أحد أعظم لاعبي أوروغواي في التاريخ، عُرف بأناقته الفنية ورؤيته الفريدة للملعب، لعب لريفر بليت الأرجنتيني ومارسيليا الفرنسي، وكان مصدر إلهام لزين الدين زيدان الذي سمّى ابنه إنزو تيمنًا به.",
    bioEn: "Regarded as one of the greatest Uruguayan players in history, known for his elegant technique and vision. He played for River Plate and Marseille, and was a major inspiration to Zinedine Zidane, who named his son Enzo after him.",
    achievementsAr: [
      "لقب كوبا أمريكا 1983 و1995 مع أوروغواي",
      "أفضل لاعب في أمريكا الجنوبية 1984 و1995",
      "عدة ألقاب دوري أرجنتيني مع ريفر بليت",
      "أسطورة نادي ريفر بليت"
    ],
    achievementsEn: [
      "Copa América titles 1983 and 1995 with Uruguay",
      "South American Footballer of the Year 1984 and 1995",
      "Multiple Argentine league titles with River Plate",
      "River Plate club legend"
    ],
    clubsHistoryAr: ["وندريرز مونتيفيديو", "ريفر بليت", "راسينغ باريس", "مارسيليا", "كالياري", "توري", "ريفر بليت"],
    clubsHistoryEn: ["Wanderers", "River Plate", "Racing Paris", "Marseille", "Cagliari", "Torino", "River Plate"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إنزو_فرانشيسكولي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Enzo_Francescoli"
  },
  {
    id: "just-fontaine",
    nameAr: "جوست فونتين",
    nameEn: "Just Fontaine",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1950-1962",
    active: false,
    bioAr: "مهاجم فرنسي صاحب الرقم القياسي التاريخي الذي لم يُكسر بعد لأكثر عدد أهداف في نسخة واحدة من كأس العالم (13 هدفًا في كأس العالم 1958)، لعب معظم مسيرته مع نيس وستاد رانس.",
    bioEn: "French forward who holds the still-unbroken record for most goals scored in a single FIFA World Cup tournament (13 goals at the 1958 World Cup). He spent most of his career with Nice and Stade de Reims.",
    achievementsAr: [
      "الرقم القياسي التاريخي لأكثر أهداف في نسخة واحدة من كأس العالم (13 هدفًا، 1958)",
      "المركز الثالث في كأس العالم 1958 مع فرنسا",
      "عدة ألقاب دوري فرنسي مع ستاد رانس",
      "هداف تاريخي لنادي ستاد رانس"
    ],
    achievementsEn: [
      "All-time record for most goals in a single FIFA World Cup (13 goals, 1958)",
      "Third place at the 1958 World Cup with France",
      "Multiple Ligue 1 titles with Stade de Reims",
      "Stade de Reims' all-time top scorer"
    ],
    clubsHistoryAr: ["يو إس إم مراكش", "نيس", "ستاد رانس"],
    clubsHistoryEn: ["USM Casablanca", "Nice", "Stade de Reims"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جوست_فونتين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Just_Fontaine"
  },
  {
    id: "jurgen-klinsmann",
    nameAr: "يورغن كلينسمان",
    nameEn: "Jürgen Klinsmann",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1978-1998",
    active: false,
    bioAr: "مهاجم ألماني، تُوّج بكأس العالم 1990 وبطولة يورو 1996 (قائدًا) مع ألمانيا، لعب لأندية كبرى في عدة دوريات أوروبية مثل إنتر ميلان وموناكو وتوتنهام وبايرن ميونخ، عُرف بحسه التهديفي وانزلاقاته الاحتفالية الشهيرة.",
    bioEn: "German forward who won the 1990 World Cup and captained Germany to the Euro 1996 title. He played for major clubs across several European leagues including Inter Milan, Monaco, Tottenham and Bayern Munich, known for his clinical finishing and trademark diving celebration.",
    achievementsAr: [
      "بطولة كأس العالم 1990 مع ألمانيا",
      "بطولة يورو 1996 مع ألمانيا (قائدًا)",
      "لقب كأس الاتحاد الأوروبي مع إنتر ميلان وبايرن ميونخ",
      "هداف الدوري الإنجليزي المشارك في أحد المواسم مع توتنهام"
    ],
    achievementsEn: [
      "1990 FIFA World Cup title with Germany",
      "UEFA Euro 1996 title with Germany (as captain)",
      "UEFA Cup titles with Inter Milan and Bayern Munich",
      "Joint Premier League top scorer in one season with Tottenham"
    ],
    clubsHistoryAr: ["شتوتغارت كيكرز", "شتوتغارت", "إنتر ميلان", "موناكو", "توتنهام", "بايرن ميونخ", "سامبدوريا", "توتنهام"],
    clubsHistoryEn: ["Stuttgarter Kickers", "VfB Stuttgart", "Inter Milan", "Monaco", "Tottenham Hotspur", "Bayern Munich", "Sampdoria", "Tottenham Hotspur"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/يورغن_كلينسمان",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Jürgen_Klinsmann"
  },
  {
    id: "rashidi-yekini",
    nameAr: "رشيدي يكيني",
    nameEn: "Rashidi Yekini",
    nationalityAr: "نيجيري",
    nationalityEn: "Nigerian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1983-2001",
    active: false,
    bioAr: "الهداف التاريخي لمنتخب نيجيريا، سجّل أول هدف نيجيري في تاريخ كأس العالم عام 1994 واشتُهر باحتفاله الشهير بالإمساك بشباك المرمى، يُعتبر أحد أعظم المهاجمين في تاريخ الكرة الأفريقية.",
    bioEn: "Nigeria's all-time top scorer, he scored Nigeria's first-ever World Cup goal in 1994 and became famous for his iconic celebration of grabbing the goal net. He is regarded as one of the greatest strikers in African football history.",
    achievementsAr: [
      "الهداف التاريخي لمنتخب نيجيريا",
      "أول هدف نيجيري في تاريخ كأس العالم (1994)",
      "أفضل لاعب أفريقي 1993",
      "لقب كأس أمم أفريقيا 1994 مع نيجيريا"
    ],
    achievementsEn: [
      "Nigeria's all-time record goalscorer",
      "Scored Nigeria's first-ever FIFA World Cup goal (1994)",
      "African Footballer of the Year 1993",
      "Africa Cup of Nations title 1994 with Nigeria"
    ],
    clubsHistoryAr: ["شوتنغ ستارز", "إفريقيا سبورت (ساحل العاج)", "فيتوريا سيتوبال", "أولمبياكوس", "سبورتينغ خيخون"],
    clubsHistoryEn: ["Shooting Stars", "Africa Sports (Ivory Coast)", "Vitória de Setúbal", "Olympiacos", "Sporting Gijón"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رشيدي_يكيني",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Rashidi_Yekini"
  },
  {
    id: "cha-bum-kun",
    nameAr: "تشا بوم-كون",
    nameEn: "Cha Bum-kun",
    nationalityAr: "كوري جنوبي",
    nationalityEn: "South Korean",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1971-1991",
    active: false,
    bioAr: "يُعتبر أعظم لاعب كوري جنوبي في التاريخ، أول لاعب آسيوي يحقق نجاحًا كبيرًا في الدوري الألماني حيث لعب لآيندراخت فرانكفورت وباير ليفركوزن وفاز بلقبي كأس الاتحاد الأوروبي معهما.",
    bioEn: "Widely regarded as the greatest South Korean player in history, he was the first Asian player to achieve major success in the Bundesliga, playing for Eintracht Frankfurt and Bayer Leverkusen, and winning two UEFA Cup titles with them.",
    achievementsAr: [
      "لقبا كأس الاتحاد الأوروبي مع آيندراخت فرانكفورت (1980) وباير ليفركوزن (1988)",
      "أفضل هداف آسيوي في الدوري الألماني في تاريخه (لسنوات طويلة)",
      "قائد ومهاجم منتخب كوريا الجنوبية",
      "أدرج لاحقًا في قاعة مشاهير الاتحاد الآسيوي لكرة القدم"
    ],
    achievementsEn: [
      "Two UEFA Cup titles with Eintracht Frankfurt (1980) and Bayer Leverkusen (1988)",
      "Long stood as the Bundesliga's all-time top-scoring Asian player",
      "South Korea national team captain and forward",
      "Later inducted into the AFC Hall of Fame"
    ],
    clubsHistoryAr: ["ديكوهنغ تايجرز (كوريا الجنوبية)", "آيندراخت فرانكفورت", "باير ليفركوزن"],
    clubsHistoryEn: ["Korea Trust Bank (South Korea)", "Eintracht Frankfurt", "Bayer Leverkusen"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/تشا_بوم-كون",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Cha_Bum-kun"
  },
  {
    id: "kazuyoshi-miura",
    nameAr: "كازوشي ميورا",
    nameEn: "Kazuyoshi Miura",
    nationalityAr: "ياباني",
    nationalityEn: "Japanese",
    clubAr: "يوكوهاما إف سي",
    clubEn: "Yokohama FC",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1986-الآن",
    active: true,
    bioAr: "يُلقب بـ'كينغ كازو'، أحد رواد كرة القدم اليابانية الحديثة وأقدم لاعب محترف نشط في العالم، لا يزال يلعب حتى بعد بلوغه الستين من عمره، لعب في البرازيل واليابان وإيطاليا وكرواتيا.",
    bioEn: "Nicknamed 'King Kazu', a pioneer of modern Japanese football and the oldest active professional footballer in the world, still playing into his late fifties. He played in Brazil, Japan, Italy and Croatia over his career.",
    achievementsAr: [
      "أفضل لاعب آسيوي 1993",
      "هداف تاريخي سابق للدوري الياباني (جيه ليغ)",
      "أقدم لاعب محترف نشط في العالم (رقم قياسي)",
      "رائد انتقال اللاعبين اليابانيين للاحتراف في الخارج"
    ],
    achievementsEn: [
      "Asian Footballer of the Year 1993",
      "Former all-time top scorer of Japan's J.League",
      "World record holder as the oldest active professional footballer",
      "Pioneer for Japanese players moving abroad to play professionally"
    ],
    clubsHistoryAr: ["سانتوس", "شيميزو إس-بولسي", "جنوة", "دينامو زغرب", "فيسل كوبي", "يوكوهاما إف سي"],
    clubsHistoryEn: ["Santos", "Shimizu S-Pulse", "Genoa", "Dinamo Zagreb", "Vissel Kobe", "Yokohama FC"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كازوشي_ميورا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Kazuyoshi_Miura"
  },
  {
    id: "javier-zanetti",
    nameAr: "خافيير زانيتي",
    nameEn: "Javier Zanetti",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "ظهير أيمن / وسط ميدان", en: "Right-back / Midfielder" },
    era: "1992-2014",
    active: false,
    bioAr: "صاحب الرقم القياسي كأكثر لاعب مشاركة وقائد في تاريخ إنتر ميلان، قضى مسيرته بأكملها مع النادي الإيطالي بعد انتقاله من تاليريس الأرجنتيني، وفاز معه بثلاثية دوري أبطال أوروبا والدوري والكأس عام 2010.",
    bioEn: "Holder of the record for most appearances and longest captaincy in Inter Milan's history, he spent his entire European career with the Italian club after moving from Talleres, winning the historic 2010 continental treble.",
    achievementsAr: [
      "الثلاثية التاريخية (دوري أبطال أوروبا، الدوري، والكأس) مع إنتر ميلان 2010",
      "صاحب الرقم القياسي لأكثر مشاركة في تاريخ إنتر ميلان",
      "أطول فترة قيادة في تاريخ إنتر ميلان",
      "5 ألقاب دوري إيطالي مع إنتر ميلان"
    ],
    achievementsEn: [
      "2010 Treble (Champions League, Serie A, Coppa Italia) with Inter Milan",
      "Inter Milan's all-time record appearance holder",
      "Longest-serving captain in Inter Milan history",
      "5 Serie A titles with Inter Milan"
    ],
    clubsHistoryAr: ["تاليريس دي ريميديوس دي إسكالادا", "بانفيلد", "إنتر ميلان"],
    clubsHistoryEn: ["Talleres de Remedios de Escalada", "Banfield", "Inter Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/خافيير_زانيتي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Javier_Zanetti"
  },
  {
    id: "diego-forlan",
    nameAr: "دييغو فورلان",
    nameEn: "Diego Forlán",
    nationalityAr: "أوروغوياني",
    nationalityEn: "Uruguayan",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1997-2019",
    active: false,
    bioAr: "مهاجم أوروغواياني، حصل على الكرة الذهبية لأفضل لاعب في كأس العالم 2010 حين قاد أوروغواي للمركز الرابع، وفاز بالحذاء الذهبي الأوروبي مرتين مع فياريال وأتلتيكو مدريد الإسبانيين.",
    bioEn: "Uruguayan forward who won the Golden Ball as the best player of the 2010 World Cup, leading Uruguay to fourth place, and won the European Golden Shoe twice with Villarreal and Atlético Madrid.",
    achievementsAr: [
      "الكرة الذهبية لأفضل لاعب في كأس العالم 2010",
      "الحذاء الذهبي الأوروبي مرتين (2005، 2009)",
      "لقب الدوري الأوروبي (يوروبا ليغ) 2010 مع أتلتيكو مدريد",
      "المركز الرابع في كأس العالم 2010 مع أوروغواي"
    ],
    achievementsEn: [
      "Golden Ball as the 2010 FIFA World Cup's best player",
      "European Golden Shoe twice (2005, 2009)",
      "UEFA Europa League title 2010 with Atlético Madrid",
      "Fourth place at the 2010 World Cup with Uruguay"
    ],
    clubsHistoryAr: ["اندبندينتي", "مانشستر يونايتد", "فياريال", "أتلتيكو مدريد", "إنتر ميلان", "سيلتا فيغو", "كيتشي إنجين"],
    clubsHistoryEn: ["Independiente", "Manchester United", "Villarreal", "Atlético Madrid", "Inter Milan", "Celta Vigo", "Kitchee"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دييغو_فورلان",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Diego_Forlán"
  },
  {
    id: "wesley-sneijder",
    nameAr: "ويسلي سنايدر",
    nameEn: "Wesley Sneijder",
    nationalityAr: "هولندي",
    nationalityEn: "Dutch",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط مهاجم / صانع لعب", en: "Attacking Midfielder / Playmaker" },
    era: "2002-2019",
    active: false,
    bioAr: "لاعب وسط هولندي موهوب، كان محوريًا في تحقيق إنتر ميلان للثلاثية التاريخية عام 2010، وقاد هولندا للوصول إلى نهائي كأس العالم 2010 وكان مرشحًا قويًا للكرة الذهبية في تلك السنة.",
    bioEn: "Gifted Dutch midfielder who was central to Inter Milan's historic 2010 treble, and led the Netherlands to the 2010 World Cup final, being a strong contender for the Ballon d'Or that year.",
    achievementsAr: [
      "الثلاثية التاريخية مع إنتر ميلان 2010",
      "الوصول لنهائي كأس العالم 2010 مع هولندا",
      "الحذاء الذهبي المشارك في كأس العالم 2010",
      "لقب دوري أبطال أوروبا 2010 مع إنتر ميلان"
    ],
    achievementsEn: [
      "2010 Treble with Inter Milan",
      "2010 FIFA World Cup finalist with the Netherlands",
      "Joint top scorer at the 2010 World Cup",
      "UEFA Champions League title 2010 with Inter Milan"
    ],
    clubsHistoryAr: ["أياكس", "ريال مدريد", "إنتر ميلان", "غلطة سراي", "نيس", "القادسية"],
    clubsHistoryEn: ["Ajax", "Real Madrid", "Inter Milan", "Galatasaray", "Nice", "Al Gharafa"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ويسلي_سنايدر",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Wesley_Sneijder"
  },
  {
    id: "rafael-marquez",
    nameAr: "رافائيل ماركيز",
    nameEn: "Rafael Márquez",
    nationalityAr: "مكسيكي",
    nationalityEn: "Mexican",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Defender" },
    era: "1996-2018",
    active: false,
    bioAr: "قائد منتخب المكسيك التاريخي وأول لاعب مكسيكي يقود فريقًا أوروبيًا كبيرًا، لعب لبرشلونة الإسباني لثمانية مواسم وفاز معه بعدة ألقاب، وشارك في خمس نسخ متتالية من كأس العالم مع المكسيك.",
    bioEn: "Mexico's historic national team captain and the first Mexican player to captain a major European club, he played for Barcelona for eight seasons, winning multiple titles, and appeared at five consecutive FIFA World Cups with Mexico.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2006 مع برشلونة",
      "عدة ألقاب دوري إسباني مع برشلونة",
      "المشاركة في 5 نسخ متتالية من كأس العالم مع المكسيك",
      "قائد منتخب المكسيك لسنوات طويلة"
    ],
    achievementsEn: [
      "UEFA Champions League title 2006 with Barcelona",
      "Multiple La Liga titles with Barcelona",
      "Appeared at 5 consecutive FIFA World Cups with Mexico",
      "Long-time captain of the Mexico national team"
    ],
    clubsHistoryAr: ["أتلاس", "موناكو", "برشلونة", "نيويورك ريد بولز (إعارة)", "هيلاس فيرونا", "أتلاس"],
    clubsHistoryEn: ["Atlas", "Monaco", "Barcelona", "New York Red Bulls (loan)", "Hellas Verona", "Atlas"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رافائيل_ماركيز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Rafael_Márquez"
  }
  ,
  {
    id: "patrick-vieira",
    nameAr: "باتريك فييرا",
    nameEn: "Patrick Vieira",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط", en: "Midfielder" },
    era: "1993-2011",
    active: false,
    bioAr: "لاعب وسط فرنسي من أصول سنغالية، يُعد من أعظم لاعبي الوسط في تاريخ الدوري الإنجليزي، قاد أرسنال كقائد لسنوات طويلة وحقق معه ثلاثية ألقاب الدوري من دون خسارة موسم 2003-2004 (الفريق الذي لا يُقهر). فاز مع فرنسا بكأس العالم 1998 ويورو 2000.",
    bioEn: "French midfielder of Senegalese descent, regarded as one of the greatest midfielders in Premier League history. He captained Arsenal for years, including the unbeaten 'Invincibles' title-winning season of 2003-04. He won the 1998 World Cup and Euro 2000 with France.",
    achievementsAr: [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة أمم أوروبا 2000 مع فرنسا",
      "3 ألقاب دوري إنجليزي ممتاز مع أرسنال (منها موسم الفريق الذي لا يُقهر 2003-2004)",
      "4 كؤوس FA مع أرسنال"
    ],
    achievementsEn: [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "3 Premier League titles with Arsenal (including the unbeaten 2003-04 'Invincibles' season)",
      "4 FA Cups with Arsenal"
    ],
    clubsHistoryAr: ["كان", "ميلان", "أرسنال", "يوفنتوس", "إنتر ميلان", "مانشستر سيتي"],
    clubsHistoryEn: ["Cannes", "AC Milan", "Arsenal", "Juventus", "Inter Milan", "Manchester City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/باتريك_فييرا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Patrick_Vieira"
  },
  {
    id: "john-terry",
    nameAr: "جون تيري",
    nameEn: "John Terry",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Defender" },
    era: "1998-2018",
    active: false,
    bioAr: "قائد تشيلسي الأسطوري ويُعد من أفضل المدافعين في تاريخ الدوري الإنجليزي الممتاز، قضى 19 موسمًا مع النادي وقاده لخمسة ألقاب دوري إنجليزي ولقب دوري أبطال أوروبا 2012، وهو الهداف التاريخي بين المدافعين في تاريخ تشيلسي.",
    bioEn: "Legendary Chelsea captain regarded as one of the greatest defenders in Premier League history. He spent 19 seasons at the club, leading it to five Premier League titles and the 2012 UEFA Champions League title, and is Chelsea's all-time highest-scoring defender.",
    achievementsAr: [
      "5 ألقاب دوري إنجليزي ممتاز مع تشيلسي",
      "لقب دوري أبطال أوروبا 2012 مع تشيلسي",
      "لقب الدوري الأوروبي (يوروبا ليغ) 2013 مع تشيلسي",
      "جائزة أفضل مدافع في دوري أبطال أوروبا (عدة مرات)"
    ],
    achievementsEn: [
      "5 Premier League titles with Chelsea",
      "2012 UEFA Champions League title with Chelsea",
      "2013 UEFA Europa League title with Chelsea",
      "UEFA Club Defender of the Year (multiple times)"
    ],
    clubsHistoryAr: ["تشيلسي", "نوتينغهام فورست (إعارة)", "أستون فيلا"],
    clubsHistoryEn: ["Chelsea", "Nottingham Forest (loan)", "Aston Villa"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جون_تيري",
    wikiUrlEn: "https://en.wikipedia.org/wiki/John_Terry"
  },
  {
    id: "gennaro-gattuso",
    nameAr: "جينارو غاتوزو",
    nameEn: "Gennaro Gattuso",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط دفاعي", en: "Defensive Midfielder" },
    era: "1994-2013",
    active: false,
    bioAr: "لاعب وسط دفاعي إيطالي اشتهر بشراسته القتالية ('غرينتا')، كان ركيزة أساسية في وسط ميدان ميلان لسنوات طويلة وفاز معه بلقبي دوري أبطال أوروبا، وتُوّج مع إيطاليا بكأس العالم 2006.",
    bioEn: "Italian defensive midfielder known for his fierce fighting spirit ('grinta'), he was a key fixture in AC Milan's midfield for years, winning two UEFA Champions League titles with the club, and won the 2006 FIFA World Cup with Italy.",
    achievementsAr: [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "لقبا دوري أبطال أوروبا مع ميلان (2003، 2007)",
      "لقب الدوري الإيطالي (سيري A) مع ميلان",
      "كأس العالم للأندية 2007 مع ميلان"
    ],
    achievementsEn: [
      "2006 FIFA World Cup title with Italy",
      "2 UEFA Champions League titles with Milan (2003, 2007)",
      "Serie A title with Milan",
      "2007 FIFA Club World Cup with Milan"
    ],
    clubsHistoryAr: ["بيروجيا", "رينجرز", "سالرنيتانا", "ميلان"],
    clubsHistoryEn: ["Perugia", "Rangers", "Salernitana", "AC Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جينارو_غاتوزو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gennaro_Gattuso"
  },
  {
    id: "alessandro-nesta",
    nameAr: "أليساندرو نيستا",
    nameEn: "Alessandro Nesta",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Defender" },
    era: "1993-2014",
    active: false,
    bioAr: "أحد أعظم المدافعين في تاريخ كرة القدم، قضى مسيرته بين لاتسيو وميلان الإيطاليين بأكثر من 400 مشاركة في الدوري الإيطالي، واشتهر بأناقته الدفاعية وقراءته الممتازة للعب. توّج بكأس العالم 2006 مع إيطاليا.",
    bioEn: "One of the greatest defenders in football history, he spent his career between Lazio and Milan with over 400 Serie A appearances, renowned for his elegant defending and excellent reading of the game. He won the 2006 FIFA World Cup with Italy.",
    achievementsAr: [
      "بطولة كأس العالم 2006 مع إيطاليا",
      "لقبا دوري أبطال أوروبا مع ميلان (2003، 2007)",
      "لقب الدوري الإيطالي مع لاتسيو (2000) ومع ميلان",
      "أفضل مدافع في الدوري الإيطالي 4 مرات"
    ],
    achievementsEn: [
      "2006 FIFA World Cup title with Italy",
      "2 UEFA Champions League titles with Milan (2003, 2007)",
      "Serie A title with Lazio (2000) and with Milan",
      "Serie A Defender of the Year 4 times"
    ],
    clubsHistoryAr: ["لاتسيو", "ميلان", "مونتريال إمباكت", "تشيناينين"],
    clubsHistoryEn: ["Lazio", "AC Milan", "Montreal Impact", "Chennaiyin"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أليساندرو_نيستا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Alessandro_Nesta"
  },
  {
    id: "marcel-desailly",
    nameAr: "مارسيل ديزايي",
    nameEn: "Marcel Desailly",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع / وسط دفاعي", en: "Defender / Defensive Midfielder" },
    era: "1986-2006",
    active: false,
    bioAr: "مدافع فرنسي لُقّب بـ'الصخرة'، أول لاعب يفوز بلقب دوري أبطال أوروبا في موسمين متتاليين مع ناديين مختلفين (مارسيليا وميلان)، وكان قائدًا لتشيلسي الإنجليزي، وتُوّج مع فرنسا بكأس العالم 1998 ويورو 2000.",
    bioEn: "French defender nicknamed 'The Rock', the first player to win the UEFA Champions League in consecutive seasons with two different clubs (Marseille and Milan). He captained Chelsea and won the 1998 World Cup and Euro 2000 with France.",
    achievementsAr: [
      "بطولة كأس العالم 1998 مع فرنسا",
      "بطولة أمم أوروبا 2000 مع فرنسا",
      "لقب دوري أبطال أوروبا مع مارسيليا (1993) ومع ميلان (1994)",
      "لقبا الدوري الإيطالي مع ميلان (1994، 1996)"
    ],
    achievementsEn: [
      "1998 FIFA World Cup title with France",
      "UEFA Euro 2000 title with France",
      "UEFA Champions League title with Marseille (1993) and with Milan (1994)",
      "2 Serie A titles with Milan (1994, 1996)"
    ],
    clubsHistoryAr: ["نانت", "مارسيليا", "ميلان", "تشيلسي", "الغرافة", "قطر إس سي"],
    clubsHistoryEn: ["Nantes", "Marseille", "AC Milan", "Chelsea", "Al-Gharafa", "Qatar SC"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/مارسيل_ديسايي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Marcel_Desailly"
  }
  ,
  {
    id: "julian-alvarez",
    nameAr: "خوليان ألفاريز",
    nameEn: "Julián Álvarez",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "أتلتيكو مدريد",
    clubEn: "Atlético Madrid",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2018-الآن",
    active: true,
    bioAr: "مهاجم أرجنتيني، خريج أكاديمية ريفر بليت، وأول لاعب يفوز بكأس العالم وبثلاثية قارية في نفس الموسم (مع مانشستر سيتي 2022-2023). انتقل إلى أتلتيكو مدريد الإسباني في صفقة قياسية عام 2024.",
    bioEn: "Argentine forward and River Plate academy graduate, the first player to win the FIFA World Cup and a continental treble in the same season (with Manchester City 2022-23). He moved to Atlético Madrid in a club-record deal in 2024.",
    achievementsAr: [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "لقب دوري أبطال أوروبا 2023 مع مانشستر سيتي",
      "لقبا الدوري الإنجليزي الممتاز مع مانشستر سيتي",
      "بطولتا كوبا أمريكا مع الأرجنتين (2021، 2024)"
    ],
    achievementsEn: [
      "2022 FIFA World Cup title with Argentina",
      "2023 UEFA Champions League title with Manchester City",
      "2 Premier League titles with Manchester City",
      "2 Copa América titles with Argentina (2021, 2024)"
    ],
    clubsHistoryAr: ["ريفر بليت", "مانشستر سيتي", "أتلتيكو مدريد"],
    clubsHistoryEn: ["River Plate", "Manchester City", "Atlético Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/خوليان_ألفاريز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Julián_Alvarez"
  },
  {
    id: "nico-williams",
    nameAr: "نيكو ويليامز",
    nameEn: "Nico Williams",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "أتلتيك بيلباو",
    clubEn: "Athletic Bilbao",
    position: { ar: "جناح", en: "Winger" },
    era: "2021-الآن",
    active: true,
    bioAr: "جناح إسباني من أصول غانية، صعد من أكاديمية أتلتيك بيلباو وارتبط بالنادي بعقد طويل الأمد حتى 2035. سجل هدف الافتتاح لإسبانيا في نهائي يورو 2024 أمام إنجلترا، وتُوّج لاحقًا بكأس العالم 2026.",
    bioEn: "Spanish winger of Ghanaian descent who rose through Athletic Bilbao's academy and signed a long-term contract with the club through 2035. He scored Spain's opening goal in the Euro 2024 final against England, and later won the 2026 World Cup.",
    achievementsAr: [
      "بطولة كأس العالم 2026 مع إسبانيا",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "كأس ملك إسبانيا 2024 مع أتلتيك بيلباو",
      "رجل مباراة نهائي يورو 2024"
    ],
    achievementsEn: [
      "2026 FIFA World Cup title with Spain",
      "UEFA Euro 2024 title with Spain",
      "2024 Copa del Rey with Athletic Bilbao",
      "Player of the Match in the UEFA Euro 2024 final"
    ],
    clubsHistoryAr: ["أتلتيك بيلباو"],
    clubsHistoryEn: ["Athletic Bilbao"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/نيكو_ويليامز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Nico_Williams"
  },
  {
    id: "declan-rice",
    nameAr: "ديكلان رايس",
    nameEn: "Declan Rice",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "أرسنال",
    clubEn: "Arsenal",
    position: { ar: "وسط دفاعي", en: "Defensive Midfielder" },
    era: "2017-الآن",
    active: true,
    bioAr: "لاعب وسط إنجليزي، قاد وست هام يونايتد لقيادة الفريق للفوز بلقب الدوري الأوروبي للمؤتمرات 2023، قبل أن ينتقل إلى أرسنال في صفقة قياسية بريطانية آنذاك بقيمة 105 مليون جنيه إسترليني، وحقق المركز الثالث مع إنجلترا في كأس العالم 2026.",
    bioEn: "English midfielder who captained West Ham United to the 2023 UEFA Europa Conference League title, before moving to Arsenal in a British-record deal worth £105 million. He helped England reach third place at the 2026 World Cup.",
    achievementsAr: [
      "لقب الدوري الأوروبي للمؤتمرات (UEFA Conference League) 2023 مع وست هام (كقائد)",
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "الوصافة في بطولة أمم أوروبا 2020 و2024 مع إنجلترا",
      "أحد أغلى الصفقات في تاريخ أرسنال"
    ],
    achievementsEn: [
      "2023 UEFA Europa Conference League title with West Ham (as captain)",
      "Third place at the 2026 World Cup with England",
      "Runner-up at UEFA Euro 2020 and Euro 2024 with England",
      "One of the most expensive transfers in Arsenal's history"
    ],
    clubsHistoryAr: ["وست هام يونايتد", "أرسنال"],
    clubsHistoryEn: ["West Ham United", "Arsenal"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ديكلان_رايس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Declan_Rice"
  },
  {
    id: "martin-odegaard",
    nameAr: "مارتن أوديغارد",
    nameEn: "Martin Ødegaard",
    nationalityAr: "نرويجي",
    nationalityEn: "Norwegian",
    clubAr: "أرسنال",
    clubEn: "Arsenal",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder / Playmaker" },
    era: "2014-الآن",
    active: true,
    bioAr: "صانع ألعاب نرويجي وقائد أرسنال ومنتخب النرويج، انضم لريال مدريد وهو في السادسة عشرة قبل أن يخوض عدة إعارات ناجحة، ثم استقر في أرسنال منذ 2021 ليصبح قائدًا له عام 2022.",
    bioEn: "Norwegian playmaker and captain of both Arsenal and the Norway national team. He joined Real Madrid at 16 before several successful loan spells, then settled at Arsenal from 2021 and was named club captain in 2022.",
    achievementsAr: [
      "أصغر لاعب يشارك في تصفيات بطولة أمم أوروبا في تاريخها",
      "قائد أرسنال منذ 2022",
      "قائد منتخب النرويج",
      "لاعب أساسي في مشروع أرسنال للمنافسة على لقب الدوري الإنجليزي"
    ],
    achievementsEn: [
      "Youngest player ever to feature in a UEFA European Championship qualifying match",
      "Arsenal captain since 2022",
      "Captain of the Norway national team",
      "Key player in Arsenal's Premier League title challenge"
    ],
    clubsHistoryAr: ["ستروومسغودسيت", "ريال مدريد", "هيرينفين (إعارة)", "فيتيس (إعارة)", "ريال سوسيداد (إعارة)", "أرسنال (إعارة ثم انتقال دائم)"],
    clubsHistoryEn: ["Strømsgodset", "Real Madrid", "Heerenveen (loan)", "Vitesse (loan)", "Real Sociedad (loan)", "Arsenal (loan then permanent)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/مارتن_أوديجارد",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Martin_Ødegaard"
  },
  {
    id: "alexander-isak",
    nameAr: "ألكسندر إيساك",
    nameEn: "Alexander Isak",
    nationalityAr: "سويدي",
    nationalityEn: "Swedish",
    clubAr: "ليفربول",
    clubEn: "Liverpool",
    position: { ar: "مهاجم", en: "Striker" },
    era: "2016-الآن",
    active: true,
    bioAr: "مهاجم سويدي من أصول إريترية، لعب لنيوكاسل يونايتد وساهم في عودته لدوري أبطال أوروبا ولقب كأس الرابطة الإنجليزية 2025 (أول لقب للنادي منذ 70 عامًا)، قبل أن ينتقل إلى ليفربول صيف 2025 في صفقة قياسية بريطانية بقيمة 125 مليون جنيه إسترليني.",
    bioEn: "Swedish striker of Eritrean descent. He played for Newcastle United, helping the club return to the Champions League and win the 2025 EFL Cup (their first trophy in 70 years), before moving to Liverpool in summer 2025 in a British-record £125 million deal.",
    achievementsAr: [
      "لقب كأس الرابطة الإنجليزية (EFL Cup) 2025 مع نيوكاسل يونايتد",
      "أغلى صفقة في تاريخ الدوري الإنجليزي عند انتقاله لليفربول",
      "هداف الدوري الإنجليزي الأسبق مع نيوكاسل (54 هدفًا في 86 مباراة)",
      "هداف تاريخي لمنتخب السويد الشاب (أصغر هداف في تاريخ المنتخب)"
    ],
    achievementsEn: [
      "2025 EFL Cup title with Newcastle United",
      "British transfer record upon his move to Liverpool",
      "Prolific Newcastle spell (54 goals in 86 Premier League appearances)",
      "Sweden's youngest-ever national team goalscorer"
    ],
    clubsHistoryAr: ["ايه آي كيه", "بوروسيا دورتموند", "فيليم الثاني (إعارة)", "ريال سوسيداد", "نيوكاسل يونايتد", "ليفربول"],
    clubsHistoryEn: ["AIK", "Borussia Dortmund", "Willem II (loan)", "Real Sociedad", "Newcastle United", "Liverpool"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ألكسندر_إيساك",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Alexander_Isak"
  }
  ,
  {
    id: "william-saliba",
    nameAr: "ويليامساليبا",
    nameEn: "William Saliba",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "أرسنال",
    clubEn: "Arsenal",
    position: { ar: "مدافع", en: "Centre-back" },
    era: "2018-الآن",
    active: true,
    bioAr: "مدافع فرنسي يُعد من أفضل قلوب الدفاع في العالم حاليًا، انضم لأرسنال عام 2019 قبل أن يخوض عدة إعارات ناجحة (سانت إيتيان، نيس، مارسيليا)، واستقر كركيزة أساسية في دفاع أرسنال منذ موسم 2022-2023، ووصل مع فرنسا لنهائي كأس العالم 2022.",
    bioEn: "French defender regarded as one of the best centre-backs in the world today. He joined Arsenal in 2019 before several successful loan spells (Saint-Étienne, Nice, Marseille), then became a key fixture in Arsenal's defence from the 2022-23 season, and reached the 2022 World Cup final with France.",
    achievementsAr: [
      "وصافة كأس العالم 2022 مع فرنسا",
      "لاعب أرسنال الوحيد الذي لعب كل دقائق الدوري الإنجليزي موسم 2023-2024 (منذ لي ديكسون 1989-90)",
      "ضمن التشكيلة المثالية لبطولة يورو 2024",
      "جدد عقده مع أرسنال حتى 2030"
    ],
    achievementsEn: [
      "2022 FIFA World Cup runner-up with France",
      "Only Arsenal outfield player to play every league minute in 2023-24 (since Lee Dixon in 1989-90)",
      "UEFA Euro 2024 Team of the Tournament",
      "Signed a new contract with Arsenal until 2030"
    ],
    clubsHistoryAr: ["سانت إيتيان", "أرسنال", "سانت إيتيان (إعارة)", "نيس (إعارة)", "مارسيليا (إعارة)"],
    clubsHistoryEn: ["Saint-Étienne", "Arsenal", "Saint-Étienne (loan)", "Nice (loan)", "Marseille (loan)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ويليام_ساليبا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/William_Saliba"
  },
  {
    id: "moises-caicedo",
    nameAr: "مويسيس كايسيدو",
    nameEn: "Moisés Caicedo",
    nationalityAr: "إكوادوري",
    nationalityEn: "Ecuadorian",
    clubAr: "تشيلسي",
    clubEn: "Chelsea",
    position: { ar: "وسط دفاعي", en: "Defensive Midfielder" },
    era: "2019-الآن",
    active: true,
    bioAr: "لاعب وسط إكوادوري، انتقل من برايتون إلى تشيلسي صيف 2023 في صفقة قياسية بريطانية آنذاك بقيمة 115 مليون جنيه إسترليني، وساهم في فوز تشيلسي بلقب الدوري الأوروبي للمؤتمرات 2024-2025.",
    bioEn: "Ecuadorian midfielder who moved from Brighton to Chelsea in summer 2023 for a then British-record fee of £115 million, and helped Chelsea win the 2024-25 UEFA Conference League title.",
    achievementsAr: [
      "لقب الدوري الأوروبي للمؤتمرات (UEFA Conference League) 2024-2025 مع تشيلسي",
      "أغلى صفقة في تاريخ الدوري الإنجليزي عند انتقاله (وقتها)",
      "المشاركة في نسختين من كأس العالم مع الإكوادور",
      "أكثر من 60 مشاركة دولية مع منتخب الإكوادور"
    ],
    achievementsEn: [
      "2024-25 UEFA Conference League title with Chelsea",
      "British transfer record at the time of his move",
      "Appeared at two FIFA World Cups with Ecuador",
      "Over 60 caps for the Ecuador national team"
    ],
    clubsHistoryAr: ["إندبندينتي ديل فالي", "برايتون آند هوف ألبيون", "بيرشوت (إعارة)", "تشيلسي"],
    clubsHistoryEn: ["Independiente del Valle", "Brighton & Hove Albion", "Beerschot (loan)", "Chelsea"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/مويسيس_كايسيدو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Moisés_Caicedo"
  },
  {
    id: "gavi",
    nameAr: "غافي",
    nameEn: "Gavi",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "برشلونة",
    clubEn: "Barcelona",
    position: { ar: "وسط", en: "Central Midfielder" },
    era: "2021-الآن",
    active: true,
    bioAr: "لاعب وسط إسباني صعد من أكاديمية لا ماسيا وأصبح ركيزة أساسية في وسط برشلونة منذ ظهوره الأول عام 2021 وهو في السابعة عشرة، حصل على جائزة كوبا تروفي وجائزة الولد الذهبي عام 2022.",
    bioEn: "Spanish midfielder who rose through Barcelona's La Masia academy to become a key fixture in the club's midfield since his debut in 2021 at age 17. He won the Kopa Trophy and the Golden Boy award in 2022.",
    achievementsAr: [
      "جائزة كوبا تروفي 2022 (أفضل لاعب شاب في العالم وفق فرانس فوتبول)",
      "جائزة الولد الذهبي (Golden Boy) 2022",
      "لقب الدوري الإسباني وكأس السوبر الإسباني مع برشلونة",
      "لاعب أساسي في منتخب إسبانيا منذ 2021"
    ],
    achievementsEn: [
      "2022 Kopa Trophy (world's best young player per France Football)",
      "2022 Golden Boy award",
      "La Liga title and Spanish Super Cup with Barcelona",
      "Regular for the Spain national team since 2021"
    ],
    clubsHistoryAr: ["برشلونة"],
    clubsHistoryEn: ["Barcelona"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/غافي_(لاعب_كرة_قدم)",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gavi_(footballer)"
  },
  {
    id: "dean-huijsen",
    nameAr: "دين هويسن",
    nameEn: "Dean Huijsen",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "مدافع", en: "Centre-back" },
    era: "2022-الآن",
    active: true,
    bioAr: "مدافع إسباني وُلد في هولندا، تدرج بين يوفنتوس وروما قبل أن يتألق مع بورنموث الإنجليزي، ليخطفه ريال مدريد صيف 2025 في صفقة بقيمة 50 مليون جنيه إسترليني. اختار تمثيل إسبانيا دوليًا رغم أصوله الهولندية.",
    bioEn: "Spanish centre-back born in the Netherlands. He came through Juventus and Roma before impressing at Bournemouth, prompting Real Madrid to sign him in summer 2025 for £50 million. He chose to represent Spain internationally despite his Dutch roots.",
    achievementsAr: [
      "انتقاله لريال مدريد في صفقة بقيمة 50 مليون جنيه إسترليني (2025)",
      "ترشيحه لجائزة أفضل لاعب شاب في الدوري الإنجليزي موسم 2024-2025",
      "المشاركة مع ريال مدريد في كأس العالم للأندية 2025",
      "لاعب دولي مع منتخب إسبانيا منذ 2025"
    ],
    achievementsEn: [
      "Move to Real Madrid for £50 million (2025)",
      "Nominated for the Premier League Young Player of the Year 2024-25",
      "Featured for Real Madrid at the 2025 FIFA Club World Cup",
      "Spain international since 2025"
    ],
    clubsHistoryAr: ["مالقة", "يوفنتوس", "روما (إعارة)", "بورنموث", "ريال مدريد"],
    clubsHistoryEn: ["Málaga", "Juventus", "Roma (loan)", "Bournemouth", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دين_هويسن",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Dean_Huijsen"
  }
  ,
  {
    id: "antoine-griezmann",
    nameAr: "أنطوان غريزمان",
    nameEn: "Antoine Griezmann",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "أورلاندو سيتي (الدوري الأمريكي MLS)",
    clubEn: "Orlando City (MLS)",
    position: { ar: "مهاجم / صانع ألعاب", en: "Forward / Attacking Midfielder" },
    era: "2005-الآن",
    active: true,
    bioAr: "مهاجم فرنسي قضى معظم مسيرته الأوروبية بين ريال سوسيداد وأتلتيكو مدريد وبرشلونة، وكان ركيزة أساسية في تتويج فرنسا بكأس العالم 2018، قبل أن يعتزل اللعب الدولي مؤخرًا وينتقل إلى أورلاندو سيتي في الدوري الأمريكي (MLS) عام 2026.",
    bioEn: "French forward who spent most of his European career between Real Sociedad, Atlético Madrid and Barcelona, and was a key figure in France's 2018 World Cup triumph, before retiring from international football and moving to Orlando City in Major League Soccer (MLS) in 2026.",
    achievementsAr: [
      "بطولة كأس العالم 2018 مع فرنسا",
      "المركز الثالث في المرتب الفضي لجائزة الكرة الذهبية أكثر من مرة",
      "لقب الدوري الأوروبي (يوروبا ليغ) مع أتلتيكو مدريد",
      "لقب الدوري الإسباني مع أتلتيكو مدريد (2021)"
    ],
    achievementsEn: [
      "2018 FIFA World Cup title with France",
      "Multiple top-3 finishes in the Ballon d'Or voting",
      "UEFA Europa League title with Atlético Madrid",
      "La Liga title with Atlético Madrid (2021)"
    ],
    clubsHistoryAr: ["ريال سوسيداد", "أتلتيكو مدريد", "برشلونة", "أورلاندو سيتي"],
    clubsHistoryEn: ["Real Sociedad", "Atlético Madrid", "Barcelona", "Orlando City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أنطوان_غريزمان",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Antoine_Griezmann"
  },
  {
    id: "casemiro",
    nameAr: "كاسيميرو",
    nameEn: "Casemiro",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "إنتر ميامي (الدوري الأمريكي MLS)",
    clubEn: "Inter Miami (MLS)",
    position: { ar: "وسط دفاعي", en: "Defensive Midfielder" },
    era: "2010-الآن",
    active: true,
    bioAr: "لاعب وسط دفاعي برازيلي، كان ركيزة أساسية في خط وسط ريال مدريد لسنوات وفاز معه بخمسة ألقاب دوري أبطال أوروبا، ثم انتقل إلى مانشستر يونايتد الإنجليزي عام 2022، قبل أن ينضم إلى إنتر ميامي في الدوري الأمريكي (MLS) عام 2026.",
    bioEn: "Brazilian defensive midfielder who was a key fixture in Real Madrid's midfield for years, winning five UEFA Champions League titles with the club, before moving to Manchester United in 2022 and later joining Inter Miami in Major League Soccer (MLS) in 2026.",
    achievementsAr: [
      "5 ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "بطولة كوبا أمريكا 2019 مع البرازيل",
      "لقب كأس رابطة الأندية الإنجليزية (كاراباو كاب) مع مانشستر يونايتد 2022-2023",
      "أكثر من 200 مباراة رسمية مع ريال مدريد"
    ],
    achievementsEn: [
      "5 UEFA Champions League titles with Real Madrid",
      "2019 Copa América title with Brazil",
      "2022-23 EFL Cup (Carabao Cup) with Manchester United",
      "Over 200 official appearances for Real Madrid"
    ],
    clubsHistoryAr: ["ساو باولو", "ريال مدريد كاستيا (إعارة)", "بورتو (إعارة)", "ريال مدريد", "مانشستر يونايتد", "إنتر ميامي"],
    clubsHistoryEn: ["São Paulo", "Real Madrid Castilla (loan)", "Porto (loan)", "Real Madrid", "Manchester United", "Inter Miami"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كاسيميرو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Casemiro"
  },
  {
    id: "marcus-rashford",
    nameAr: "ماركوس راشفورد",
    nameEn: "Marcus Rashford",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "مانشستر يونايتد",
    clubEn: "Manchester United",
    position: { ar: "مهاجم", en: "Forward" },
    era: "2015-الآن",
    active: true,
    bioAr: "مهاجم إنجليزي صعد من أكاديمية مانشستر يونايتد وأصبح أحد نجوم الفريق لسنوات طويلة، أُعير لأستون فيلا ثم لبرشلونة الإسباني موسم 2025-2026 حيث فاز معه بلقب الدوري الإسباني، وحقق مع إنجلترا المركز الثالث في كأس العالم 2026. عاد إلى مانشستر يونايتد في صيف 2026 بعد أن قرر برشلونة عدم تفعيل بند الشراء الإلزامي.",
    bioEn: "English forward who rose through Manchester United's academy and became one of the club's stars for many years. He was loaned to Aston Villa and then to Barcelona for the 2025-26 season, winning the La Liga title with them, and helped England reach third place at the 2026 World Cup. He returned to Manchester United in summer 2026 after Barcelona chose not to trigger their option to sign him permanently.",
    achievementsAr: [
      "المركز الثالث في كأس العالم 2026 مع إنجلترا",
      "لقب الدوري الإسباني 2025-2026 مع برشلونة (إعارة)",
      "لقبا كأس FA مع مانشستر يونايتد",
      "لقب الدوري الأوروبي (يوروبا ليغ) مع مانشستر يونايتد 2016-2017"
    ],
    achievementsEn: [
      "Third place at the 2026 World Cup with England",
      "2025-26 La Liga title with Barcelona (on loan)",
      "2 FA Cups with Manchester United",
      "2016-17 UEFA Europa League with Manchester United"
    ],
    clubsHistoryAr: ["مانشستر يونايتد", "أستون فيلا (إعارة)", "برشلونة (إعارة)", "مانشستر يونايتد"],
    clubsHistoryEn: ["Manchester United", "Aston Villa (loan)", "Barcelona (loan)", "Manchester United"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ماركوس_راشفورد",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Marcus_Rashford"
  }
  ,
  {
    id: "diego-godin",
    nameAr: "دييغو غودين",
    nameEn: "Diego Godín",
    nationalityAr: "أوروغواياني",
    nationalityEn: "Uruguayan",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Centre-back" },
    era: "2003-2023",
    active: false,
    bioAr: "مدافع أوروغواياني وقائد أتلتيكو مدريد لسنوات طويلة، سجل هدف التتويج بلقب الدوري الإسباني موسم 2013-2014 أمام برشلونة، وهو أكثر لاعب مثّل منتخب أوروغواي في التاريخ.",
    bioEn: "Uruguayan defender and long-time captain of Atlético Madrid. He scored the title-clinching goal in the 2013-14 La Liga triumph against Barcelona, and is Uruguay's all-time most-capped international.",
    achievementsAr: [
      "لقب الدوري الإسباني 2013-2014 مع أتلتيكو مدريد (سجل هدف الحسم)",
      "بطولة كوبا أمريكا 2011 مع أوروغواي",
      "وصافة دوري أبطال أوروبا مرتين مع أتلتيكو مدريد (2014، 2016)",
      "أكثر لاعب مثّل أوروغواي في التاريخ (161 مباراة دولية)"
    ],
    achievementsEn: [
      "2013-14 La Liga title with Atlético Madrid (scored the clinching goal)",
      "2011 Copa América title with Uruguay",
      "2 UEFA Champions League runner-up finishes with Atlético Madrid (2014, 2016)",
      "Uruguay's all-time most-capped player (161 caps)"
    ],
    clubsHistoryAr: ["سيرو", "ناسيونال", "فياريال", "أتلتيكو مدريد", "إنتر ميلان", "كالياري", "أتلتيكو مينيرو", "فيليز سارسفيلد"],
    clubsHistoryEn: ["Cerro", "Nacional", "Villarreal", "Atlético Madrid", "Inter Milan", "Cagliari", "Atlético Mineiro", "Vélez Sarsfield"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/دييغو_غودين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Diego_Godín"
  },
  {
    id: "koke",
    nameAr: "كوكي",
    nameEn: "Koke",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "أتلتيكو مدريد",
    clubEn: "Atlético Madrid",
    position: { ar: "وسط", en: "Midfielder" },
    era: "2009-الآن",
    active: true,
    bioAr: "لاعب وسط إسباني وقائد أتلتيكو مدريد، خريج أكاديمية النادي وصاحب الرقم القياسي لأكثر عدد مشاركات في تاريخه (أكثر من 700 مباراة)، لُقّب بـ'صخرة' فريق دييغو سيميوني طوال أكثر من عقد ونصف.",
    bioEn: "Spanish midfielder and captain of Atlético Madrid, a club academy graduate and the club's all-time record appearance-holder (over 700 matches). He has been described as the rock of Diego Simeone's side for more than a decade and a half.",
    achievementsAr: [
      "لقبا الدوري الإسباني مع أتلتيكو مدريد (2014، 2021)",
      "لقبا الدوري الأوروبي (يوروبا ليغ) مع أتلتيكو مدريد",
      "الرقم القياسي لأكثر مشاركات في تاريخ أتلتيكو مدريد",
      "قائد أتلتيكو مدريد منذ 2019"
    ],
    achievementsEn: [
      "2 La Liga titles with Atlético Madrid (2014, 2021)",
      "2 UEFA Europa League titles with Atlético Madrid",
      "Club record for most appearances in Atlético Madrid's history",
      "Atlético Madrid captain since 2019"
    ],
    clubsHistoryAr: ["أتلتيكو مدريد"],
    clubsHistoryEn: ["Atlético Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/كوكي_(لاعب_كرة_قدم_مواليد_1992)",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Koke_(footballer,_born_1992)"
  },
  {
    id: "sergen-yalcin",
    nameAr: "سرجن يالتشين",
    nameEn: "Sergen Yalçın",
    nationalityAr: "تركي",
    nationalityEn: "Turkish",
    clubAr: "معتزل (مدرب حاليًا لبشكتاش)",
    clubEn: "Retired (current Beşiktaş head coach)",
    position: { ar: "وسط مهاجم", en: "Attacking Midfielder" },
    era: "1991-2008",
    active: false,
    bioAr: "يُعد من أفضل اللاعبين الأتراك في التاريخ، صعد من أكاديمية بشكتاش وأصبح أحد أبرز نجومه، وهو الشخص الوحيد الذي فاز بالدوري التركي وكأس تركيا مع بشكتاش كلاعب ثم كمدرب. سجل هدفين تاريخيين في فوز بشكتاش 2-0 خارج أرضه على تشيلسي بدوري الأبطال موسم 2003-2004.",
    bioEn: "Regarded as one of the greatest Turkish players in history, he rose through Beşiktaş's academy to become one of its biggest stars. He is the only person to have won the Süper Lig and Turkish Cup with Beşiktaş both as a player and as a manager, and scored twice in Beşiktaş's famous 2-0 away win over Chelsea in the 2003-04 Champions League.",
    achievementsAr: [
      "3 ألقاب دوري تركي مع بشكتاش كلاعب",
      "لقب كأس تركيا مع بشكتاش كلاعب",
      "هدفان تاريخيان في فوز بشكتاش على تشيلسي بدوري أبطال أوروبا 2003-2004",
      "الشخص الوحيد الذي توّج بالدوري التركي وكأس تركيا مع بشكتاش كلاعب ومدرب"
    ],
    achievementsEn: [
      "3 Süper Lig titles with Beşiktaş as a player",
      "Turkish Cup title with Beşiktaş as a player",
      "Two historic goals in Beşiktaş's win over Chelsea in the 2003-04 Champions League",
      "Only person to win the Süper Lig and Turkish Cup with Beşiktaş as both player and manager"
    ],
    clubsHistoryAr: ["بشكتاش", "إسطنبول سبور", "فنربخشة (إعارة)", "طرابزون سبور (إعارة)", "غلطة سراي (إعارة)", "بشكتاش", "أسكي شهير سبور"],
    clubsHistoryEn: ["Beşiktaş", "İstanbulspor", "Fenerbahçe (loan)", "Trabzonspor (loan)", "Galatasaray (loan)", "Beşiktaş", "Eskişehirspor"],
    wikiUrlAr: "https://arz.wikipedia.org/wiki/سيرجين_يالسين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Sergen_Yalçın"
  },
  {
    id: "ricardo-quaresma",
    nameAr: "ريكاردو كواريزما",
    nameEn: "Ricardo Quaresma",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "جناح", en: "Winger" },
    era: "2001-2022",
    active: false,
    bioAr: "جناح برتغالي اشتهر بمهارته الفنية العالية وضربته الشهيرة 'الترايفيلا' (الكعب الخارجي)، لعب لبشكتاش التركي في فترتين حصد خلالهما لقبي الدوري التركي وكأس تركيا، وتُوّج مع البرتغال بلقب يورو 2016.",
    bioEn: "Portuguese winger renowned for his exceptional skill and his signature 'trivela' (outside-of-the-foot) strike. He played for Beşiktaş across two spells, winning two Süper Lig titles and the Turkish Cup, and won UEFA Euro 2016 with Portugal.",
    achievementsAr: [
      "بطولة أمم أوروبا 2016 مع البرتغال",
      "لقبا الدوري التركي مع بشكتاش (2016، 2017)",
      "كأس تركيا مع بشكتاش (2011)",
      "لقب دوري أبطال أوروبا 2010 مع إنتر ميلان"
    ],
    achievementsEn: [
      "UEFA Euro 2016 title with Portugal",
      "2 Süper Lig titles with Beşiktaş (2016, 2017)",
      "Turkish Cup with Beşiktaş (2011)",
      "2010 UEFA Champions League title with Inter Milan"
    ],
    clubsHistoryAr: ["سبورتينغ لشبونة", "برشلونة", "بورتو", "إنتر ميلان", "تشيلسي (إعارة)", "بشكتاش", "الأهلي الإماراتي", "بورتو", "بشكتاش", "كاسيمبشا", "فيتوريا غيماريش"],
    clubsHistoryEn: ["Sporting CP", "Barcelona", "Porto", "Inter Milan", "Chelsea (loan)", "Beşiktaş", "Al Ahli", "Porto", "Beşiktaş", "Kasımpaşa", "Vitória Guimarães"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ريكاردو_كواريسما",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ricardo_Quaresma"
  }
  ,
  {
    id: "harry-kane",
    nameAr: "هاري كين",
    nameEn: "Harry Kane",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "بايرن ميونخ",
    clubEn: "Bayern Munich",
    position: { ar: "مهاجم", en: "Striker" },
    era: "2009-الآن",
    active: true,
    bioAr: "مهاجم إنجليزي وقائد منتخب بلاده، هداف تاريخي لتوتنهام هوتسبير ولمنتخب إنجلترا، انتقل إلى بايرن ميونخ الألماني صيف 2023 في صفقة قياسية لناديه الجديد، وحصد معه لقب الدوري الألماني بعد سنوات طويلة من دون ألقاب جماعية كبرى.",
    bioEn: "English striker and captain of the England national team. He is Tottenham Hotspur's and England's all-time record goalscorer. He moved to Bayern Munich in summer 2023 in a club-record transfer, and won the Bundesliga title with them after many trophyless years.",
    achievementsAr: [
      "هداف تاريخي لمنتخب إنجلترا",
      "هداف تاريخي لتوتنهام هوتسبير (280 هدفًا)",
      "ثاني أفضل هداف في تاريخ الدوري الإنجليزي الممتاز",
      "لقب الدوري الألماني مع بايرن ميونخ"
    ],
    achievementsEn: [
      "England's all-time record goalscorer",
      "Tottenham Hotspur's all-time record goalscorer (280 goals)",
      "Second all-time top scorer in Premier League history",
      "Bundesliga title with Bayern Munich"
    ],
    clubsHistoryAr: ["توتنهام هوتسبير", "ليتون أورينت (إعارة)", "ميلوول (إعارة)", "نورويتش سيتي (إعارة)", "ليستر سيتي (إعارة)", "بايرن ميونخ"],
    clubsHistoryEn: ["Tottenham Hotspur", "Leyton Orient (loan)", "Millwall (loan)", "Norwich City (loan)", "Leicester City (loan)", "Bayern Munich"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/هاري_كين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Harry_Kane"
  },
  {
    id: "n-golo-kante",
    nameAr: "نغولو كانتي",
    nameEn: "N'Golo Kanté",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "الاتحاد السعودي",
    clubEn: "Al-Ittihad",
    position: { ar: "وسط دفاعي", en: "Defensive Midfielder" },
    era: "2012-الآن",
    active: true,
    bioAr: "لاعب وسط فرنسي يُعد أحد أعظم لاعبي الارتكاز في جيله بفضل حسه الدفاعي وقدرته على تغطية الملعب، فاز بالدوري الإنجليزي مع ناديين مختلفين في موسمين متتاليين (ليستر سيتي وتشيلسي)، وتُوّج مع فرنسا بكأس العالم 2018، قبل أن ينتقل إلى الاتحاد السعودي عام 2023.",
    bioEn: "French midfielder regarded as one of the greatest defensive midfielders of his generation for his defensive instincts and ground coverage. He won the Premier League with two different clubs in consecutive seasons (Leicester City and Chelsea), won the 2018 World Cup with France, and moved to Saudi club Al-Ittihad in 2023.",
    achievementsAr: [
      "بطولة كأس العالم 2018 مع فرنسا",
      "لقب الدوري الإنجليزي مع ليستر سيتي (2016) ثم تشيلسي (2017)",
      "لقب دوري أبطال أوروبا 2021 مع تشيلسي",
      "جائزة أفضل لاعب في الدوري الإنجليزي الممتاز موسم 2016-2017"
    ],
    achievementsEn: [
      "2018 FIFA World Cup title with France",
      "Premier League title with Leicester City (2016) then Chelsea (2017)",
      "2021 UEFA Champions League title with Chelsea",
      "Premier League Player of the Season 2016-17"
    ],
    clubsHistoryAr: ["بولونيا", "كاين", "ليستر سيتي", "تشيلسي", "الاتحاد"],
    clubsHistoryEn: ["Boulogne", "Caen", "Leicester City", "Chelsea", "Al-Ittihad"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/نغولو_كانتي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/N%27Golo_Kant%C3%A9"
  },
  {
    id: "eden-hazard",
    nameAr: "إيدين هازار",
    nameEn: "Eden Hazard",
    nationalityAr: "بلجيكي",
    nationalityEn: "Belgian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "جناح", en: "Winger" },
    era: "2007-2023",
    active: false,
    bioAr: "جناح بلجيكي وقائد الجيل الذهبي لمنتخب بلاده، كان نجم تشيلسي الأبرز لسنوات وفاز معه بلقبين للدوري الإنجليزي ولقبين للدوري الأوروبي، قبل أن ينتقل لريال مدريد عام 2019 حيث عانى من الإصابات، واعتزل اللعب رسميًا في أكتوبر 2023.",
    bioEn: "Belgian winger and captain of his country's golden generation. He was Chelsea's standout star for years, winning two Premier League titles and two Europa League titles with the club, before moving to Real Madrid in 2019 where injuries hampered him. He officially retired in October 2023.",
    achievementsAr: [
      "لقبا الدوري الإنجليزي الممتاز مع تشيلسي (2015، 2017)",
      "لقبا الدوري الأوروبي (يوروبا ليغ) مع تشيلسي (2013، 2019)",
      "لقب دوري أبطال أوروبا 2022 مع ريال مدريد",
      "المركز الثالث في كأس العالم 2018 مع بلجيكا (قائدًا)"
    ],
    achievementsEn: [
      "2 Premier League titles with Chelsea (2015, 2017)",
      "2 UEFA Europa League titles with Chelsea (2013, 2019)",
      "2022 UEFA Champions League title with Real Madrid",
      "Third place at the 2018 World Cup with Belgium (as captain)"
    ],
    clubsHistoryAr: ["ليل", "تشيلسي", "ريال مدريد"],
    clubsHistoryEn: ["Lille", "Chelsea", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/إيدين_هازارد",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Eden_Hazard"
  }
  ,
  {
    id: "paul-pogba",
    nameAr: "بول بوغبا",
    nameEn: "Paul Pogba",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "موناكو",
    clubEn: "AS Monaco",
    position: { ar: "وسط", en: "Midfielder" },
    era: "2011-الآن",
    active: true,
    bioAr: "لاعب وسط فرنسي وبطل عالم 2018، لعب لمانشستر يونايتد ويوفنتوس في فترتين لكل منهما، غاب طويلاً عن الملاعب بسبب إيقاف بتهمة تعاطي المنشطات بين 2023 و2025، قبل أن يعود ويوقّع لنادي موناكو الفرنسي عام 2025.",
    bioEn: "French midfielder and 2018 World Cup winner. He played for Manchester United and Juventus across two spells each, before a lengthy absence due to a doping ban between 2023 and 2025, after which he returned to football and signed for AS Monaco in 2025.",
    achievementsAr: [
      "بطولة كأس العالم 2018 مع فرنسا",
      "لقب الدوري الأوروبي (يوروبا ليغ) مع مانشستر يونايتد 2016-2017",
      "لقب كأس الاتحاد الإنجليزي مع مانشستر يونايتد",
      "ألقاب عديدة للدوري الإيطالي مع يوفنتوس"
    ],
    achievementsEn: [
      "2018 FIFA World Cup title with France",
      "2016-17 UEFA Europa League title with Manchester United",
      "FA Cup title with Manchester United",
      "Multiple Serie A titles with Juventus"
    ],
    clubsHistoryAr: ["مانشستر يونايتد", "يوفنتوس", "مانشستر يونايتد", "يوفنتوس", "موناكو"],
    clubsHistoryEn: ["Manchester United", "Juventus", "Manchester United", "Juventus", "AS Monaco"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/بول_بوغبا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Paul_Pogba"
  },
  {
    id: "raheem-sterling",
    nameAr: "راحيم سترلينغ",
    nameEn: "Raheem Sterling",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "فاير أعلى فرقة (لاعب حر مؤخرًا)",
    clubEn: "Free agent (most recently Feyenoord)",
    position: { ar: "جناح", en: "Winger" },
    era: "2012-الآن",
    active: true,
    bioAr: "جناح إنجليزي كان أحد أعمدة مانشستر سيتي في عصره الذهبي مع بيب غوارديولا، وفاز معه بألقاب عديدة للدوري الإنجليزي، وحقق مع إنجلترا وصافة يورو 2020، قبل أن تتراجع مسيرته في تشيلسي وينتقل لاحقًا إلى فيينورد الهولندي.",
    bioEn: "English winger who was a key figure at Manchester City during Pep Guardiola's golden era there, winning multiple Premier League titles with the club, and reached the Euro 2020 final with England, before a decline at Chelsea and a later move to Dutch club Feyenoord.",
    achievementsAr: [
      "وصافة بطولة أمم أوروبا 2020 مع إنجلترا",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "أفضل صانع أهداف إنجليزي في تاريخ دوري أبطال أوروبا",
      "جائزة الولد الذهبي (Golden Boy) 2014"
    ],
    achievementsEn: [
      "UEFA Euro 2020 runner-up with England",
      "Multiple Premier League titles with Manchester City",
      "England's all-time top assist provider in the UEFA Champions League",
      "2014 Golden Boy award"
    ],
    clubsHistoryAr: ["كوينز بارك رينجرز", "ليفربول", "مانشستر سيتي", "تشيلسي", "أرسنال (إعارة)", "فيينورد"],
    clubsHistoryEn: ["Queens Park Rangers", "Liverpool", "Manchester City", "Chelsea", "Arsenal (loan)", "Feyenoord"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رحيم_ستيرلينغ",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Raheem_Sterling"
  },
  {
    id: "marco-verratti",
    nameAr: "ماركو فيراتي",
    nameEn: "Marco Verratti",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "الدحيل (قطر)",
    clubEn: "Al Duhail (Qatar)",
    position: { ar: "وسط", en: "Midfielder" },
    era: "2008-الآن",
    active: true,
    bioAr: "لاعب وسط إيطالي يُعد من أفضل صناع الألعاب في جيله، قضى 11 موسمًا مع باريس سان جيرمان وفاز معه بتسعة ألقاب للدوري الفرنسي، وتُوّج مع إيطاليا بيورو 2020، قبل أن ينتقل إلى الدوري القطري عام 2023.",
    bioEn: "Italian midfielder regarded as one of the best playmakers of his generation. He spent 11 seasons at Paris Saint-Germain, winning nine Ligue 1 titles with the club, and won Euro 2020 with Italy, before moving to the Qatari league in 2023.",
    achievementsAr: [
      "بطولة أمم أوروبا 2020 مع إيطاليا",
      "9 ألقاب دوري فرنسي مع باريس سان جيرمان",
      "ثاني أكثر لاعب مشاركة في تاريخ باريس سان جيرمان",
      "جائزة برافو 2012 (أفضل لاعب شاب في أوروبا)"
    ],
    achievementsEn: [
      "UEFA Euro 2020 title with Italy",
      "9 Ligue 1 titles with Paris Saint-Germain",
      "Second all-time most-capped player in PSG's history",
      "2012 Bravo Award (Europe's best young player)"
    ],
    clubsHistoryAr: ["بيسكارا", "باريس سان جيرمان", "العربي", "الدحيل"],
    clubsHistoryEn: ["Pescara", "Paris Saint-Germain", "Al-Arabi", "Al Duhail"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ماركو_فيراتي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Marco_Verratti"
  },
  {
    id: "jan-oblak",
    nameAr: "يان أوبلاك",
    nameEn: "Jan Oblak",
    nationalityAr: "سلوفيني",
    nationalityEn: "Slovenian",
    clubAr: "أتلتيكو مدريد",
    clubEn: "Atlético Madrid",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "2011-الآن",
    active: true,
    bioAr: "حارس مرمى سلوفيني يُعد أحد أفضل حراس المرمى في العالم خلال العقد الأخير، انضم لأتلتيكو مدريد عام 2014 وحصد معه جائزة القفاز الذهبي (أفضل حارس في الليغا) عدة مرات، محافظًا على رقم قياسي في عدد الشباك النظيفة بالدوري الإسباني.",
    bioEn: "Slovenian goalkeeper regarded as one of the best in the world over the last decade. He joined Atlético Madrid in 2014 and has won the Zamora Trophy (La Liga's best goalkeeper award) multiple times, holding a record number of clean sheets in La Liga.",
    achievementsAr: [
      "جائزة القفاز الذهبي (سامورا) أكثر من مرة كأفضل حارس في الدوري الإسباني",
      "لقب الدوري الإسباني 2020-2021 مع أتلتيكو مدريد",
      "الرقم القياسي لأقل عدد أهداف مستقبلة في موسم واحد بالدوري الإسباني",
      "وصافة دوري أبطال أوروبا مرتين مع أتلتيكو مدريد"
    ],
    achievementsEn: [
      "Multiple-time winner of the Zamora Trophy as La Liga's best goalkeeper",
      "2020-21 La Liga title with Atlético Madrid",
      "Record for fewest goals conceded in a single La Liga season",
      "2 UEFA Champions League runner-up finishes with Atlético Madrid"
    ],
    clubsHistoryAr: ["أولمبيا ليوبليانا", "بنفيكا", "ريال سوسيداد (إعارة)", "بنفيكا", "أتلتيكو مدريد"],
    clubsHistoryEn: ["Olimpija Ljubljana", "Benfica", "Real Sociedad (loan)", "Benfica", "Atlético Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/يان_أوبلاك",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Jan_Oblak"
  },
  {
    id: "gianluigi-donnarumma",
    nameAr: "جانلويجي دوناروما",
    nameEn: "Gianluigi Donnarumma",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "مانشستر سيتي",
    clubEn: "Manchester City",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "2015-الآن",
    active: true,
    bioAr: "حارس مرمى إيطالي وقائد المنتخب الإيطالي، احترف مع ميلان في سن مبكرة جدًا وأصبح من أفضل حراس العالم، فاز بيورو 2020 مع إيطاليا وانتُخب أفضل لاعب في البطولة، لعب بعدها لباريس سان جيرمان قبل انتقاله لمانشستر سيتي عام 2025.",
    bioEn: "Italian goalkeeper and captain of the Italy national team. He turned professional with Milan at a very young age and became one of the best goalkeepers in the world, winning Euro 2020 with Italy and being named player of the tournament, before playing for Paris Saint-Germain and later moving to Manchester City in 2025.",
    achievementsAr: [
      "بطولة أمم أوروبا 2020 مع إيطاليا",
      "جائزة أفضل لاعب في بطولة يورو 2020",
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان",
      "قائد منتخب إيطاليا"
    ],
    achievementsEn: [
      "UEFA Euro 2020 title with Italy",
      "UEFA Euro 2020 Player of the Tournament",
      "2024-25 UEFA Champions League title with Paris Saint-Germain",
      "Captain of the Italy national team"
    ],
    clubsHistoryAr: ["ميلان", "باريس سان جيرمان", "مانشستر سيتي"],
    clubsHistoryEn: ["AC Milan", "Paris Saint-Germain", "Manchester City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جانلويجي_دوناروما",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Gianluigi_Donnarumma"
  },
  {
    id: "victor-osimhen",
    nameAr: "فيكتور أوسيمين",
    nameEn: "Victor Osimhen",
    nationalityAr: "نيجيري",
    nationalityEn: "Nigerian",
    clubAr: "غلطة سراي",
    clubEn: "Galatasaray",
    position: { ar: "مهاجم", en: "Striker" },
    era: "2017-الآن",
    active: true,
    bioAr: "مهاجم نيجيري كان نجم نابولي الإيطالي الأبرز وساهم في تتويجه بلقب الدوري الإيطالي موسم 2022-2023 لأول مرة منذ عصر مارادونا، قبل أن ينتقل إلى غلطة سراي التركي حيث تُوّج هدافًا للدوري التركي وحقق الثنائية المحلية.",
    bioEn: "Nigerian striker who was Napoli's standout star, helping the club win the 2022-23 Serie A title for the first time since the Maradona era, before moving to Turkish club Galatasaray, where he finished as the Süper Lig's top scorer and won the domestic double.",
    achievementsAr: [
      "لقب الدوري الإيطالي 2022-2023 مع نابولي",
      "هداف الدوري التركي مع غلطة سراي",
      "الثنائية المحلية (الدوري والكأس) مع غلطة سراي",
      "وصافة كأس الأمم الأفريقية 2023 مع نيجيريا"
    ],
    achievementsEn: [
      "2022-23 Serie A title with Napoli",
      "Süper Lig top scorer with Galatasaray",
      "Domestic double (league and cup) with Galatasaray",
      "2023 Africa Cup of Nations runner-up with Nigeria"
    ],
    clubsHistoryAr: ["فولفسبورغ", "شارلروا (إعارة)", "ليل", "نابولي", "غلطة سراي (إعارة ثم انتقال دائم)"],
    clubsHistoryEn: ["VfL Wolfsburg", "Charleroi (loan)", "Lille", "Napoli", "Galatasaray (loan then permanent)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فيكتور_أوسيمين",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Victor_Osimhen"
  }
  ,
  {
    id: "marquinhos",
    nameAr: "ماركينيوس",
    nameEn: "Marquinhos",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "باريس سان جيرمان",
    clubEn: "Paris Saint-Germain",
    position: { ar: "مدافع", en: "Centre-back" },
    era: "2012-الآن",
    active: true,
    bioAr: "مدافع برازيلي وقائد باريس سان جيرمان منذ 2020 وصاحب الرقم القياسي لأكثر مشاركات في تاريخ النادي، قاد الفريق للفوز بأول لقب دوري أبطال أوروبا في تاريخه موسم 2024-2025 بفوز ساحق 5-0 على إنتر ميلان في النهائي.",
    bioEn: "Brazilian defender and Paris Saint-Germain captain since 2020, holding the club's all-time appearance record. He led the team to its first-ever UEFA Champions League title in the 2024-25 season, a crushing 5-0 win over Inter Milan in the final.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان (قائدًا)",
      "10 ألقاب دوري فرنسي مع باريس سان جيرمان (رقم قياسي)",
      "بطولة كوبا أمريكا 2019 مع البرازيل",
      "الميدالية الذهبية الأولمبية 2016 مع البرازيل"
    ],
    achievementsEn: [
      "2024-25 UEFA Champions League title with Paris Saint-Germain (as captain)",
      "10 Ligue 1 titles with Paris Saint-Germain (club record)",
      "2019 Copa América title with Brazil",
      "2016 Olympic gold medal with Brazil"
    ],
    clubsHistoryAr: ["كورينثيانز", "روما", "باريس سان جيرمان"],
    clubsHistoryEn: ["Corinthians", "Roma", "Paris Saint-Germain"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/ماركينيوس",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Marquinhos"
  },
  {
    id: "thiago-silva",
    nameAr: "تياغو سيلفا",
    nameEn: "Thiago Silva",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "فلومينينسي",
    clubEn: "Fluminense",
    position: { ar: "مدافع", en: "Centre-back" },
    era: "2002-الآن",
    active: true,
    bioAr: "مدافع برازيلي يُعد أحد أفضل قلوب الدفاع في جيله، كان قائد باريس سان جيرمان لسنوات طويلة وحقق معه 8 ألقاب دوري فرنسي، ثم توّج بدوري أبطال أوروبا مع تشيلسي عام 2021، قبل أن يعود إلى ناديه الأول فلومينينسي البرازيلي.",
    bioEn: "Brazilian defender regarded as one of the best centre-backs of his generation. He captained Paris Saint-Germain for many years, winning 8 Ligue 1 titles with the club, then won the UEFA Champions League with Chelsea in 2021, before returning to his boyhood club Fluminense in Brazil.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2021 مع تشيلسي",
      "8 ألقاب دوري فرنسي مع باريس سان جيرمان",
      "بطولة كوبا أمريكا 2019 وكأس القارات 2013 مع البرازيل",
      "قائد باريس سان جيرمان لسنوات طويلة"
    ],
    achievementsEn: [
      "2021 UEFA Champions League title with Chelsea",
      "8 Ligue 1 titles with Paris Saint-Germain",
      "2019 Copa América and 2013 Confederations Cup titles with Brazil",
      "Long-time captain of Paris Saint-Germain"
    ],
    clubsHistoryAr: ["فلومينينسي", "بورتو", "ديناموموسكو (إعارة)", "فلومينينسي", "ميلان", "باريس سان جيرمان", "تشيلسي", "فلومينينسي", "بورتو", "فلومينينسي"],
    clubsHistoryEn: ["Fluminense", "Porto", "Dynamo Moscow (loan)", "Fluminense", "AC Milan", "Paris Saint-Germain", "Chelsea", "Fluminense", "Porto", "Fluminense"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/تياغو_سيلفا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Thiago_Silva"
  }
  ,
  {
    id: "vitinha",
    nameAr: "فيتينيا",
    nameEn: "Vitinha",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "باريس سان جيرمان",
    clubEn: "Paris Saint-Germain",
    position: { ar: "وسط", en: "Central Midfielder" },
    era: "2019-الآن",
    active: true,
    bioAr: "لاعب وسط برتغالي يُعد من أفضل صناع الألعاب في العالم حاليًا، صعد من أكاديمية بورتو وانضم لباريس سان جيرمان عام 2022، وكان لاعبًا محوريًا في تتويج الفريق بأول لقب دوري أبطال أوروبا في تاريخه موسم 2024-2025.",
    bioEn: "Portuguese midfielder considered one of the best playmakers in the world today. He came through Porto's academy and joined Paris Saint-Germain in 2022, playing a pivotal role in the club winning its first-ever UEFA Champions League title in the 2024-25 season.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان",
      "عضو التشكيلة المثالية لدوري أبطال أوروبا موسم 2023-2024",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان",
      "لقب الدوري البرتغالي مع بورتو"
    ],
    achievementsEn: [
      "2024-25 UEFA Champions League title with Paris Saint-Germain",
      "UEFA Champions League Team of the Season 2023-24",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "Primeira Liga title with Porto"
    ],
    clubsHistoryAr: ["بورتو", "وولفرهامبتون (إعارة)", "باريس سان جيرمان"],
    clubsHistoryEn: ["Porto", "Wolverhampton Wanderers (loan)", "Paris Saint-Germain"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فيتينيا_(لاعب_كرة_قدم_مواليد_فبراير_2000)",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Vitinha_(footballer,_born_February_2000)"
  },
  {
    id: "angel-di-maria",
    nameAr: "أنخل دي ماريا",
    nameEn: "Ángel Di María",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "روزاريو سنترال",
    clubEn: "Rosario Central",
    position: { ar: "جناح", en: "Winger" },
    era: "2005-الآن",
    active: true,
    bioAr: "جناح أرجنتيني يُلقّب بـ'فيديو'، لعب لباريس سان جيرمان أربعة مواسم وحصد معه عدة ألقاب للدوري الفرنسي، وسجل هدف التتويج بكأس العالم 2022 مع الأرجنتين في المباراة النهائية أمام فرنسا، قبل أن يعود إلى ناديه الأول روزاريو سنترال عام 2025.",
    bioEn: "Argentine winger nicknamed 'Fideo'. He spent four seasons at Paris Saint-Germain, winning multiple Ligue 1 titles with the club, and scored in the 2022 World Cup final against France as Argentina won the title, before returning to his boyhood club Rosario Central in 2025.",
    achievementsAr: [
      "بطولة كأس العالم 2022 مع الأرجنتين (سجل هدفًا في النهائي)",
      "بطولتا كوبا أمريكا مع الأرجنتين (2021، 2024)",
      "لقب دوري أبطال أوروبا 2014 مع ريال مدريد",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان"
    ],
    achievementsEn: [
      "2022 FIFA World Cup title with Argentina (scored in the final)",
      "2 Copa América titles with Argentina (2021, 2024)",
      "2014 UEFA Champions League title with Real Madrid",
      "Multiple Ligue 1 titles with Paris Saint-Germain"
    ],
    clubsHistoryAr: ["روزاريو سنترال", "بنفيكا", "ريال مدريد", "مانشستر يونايتد", "باريس سان جيرمان", "يوفنتوس", "بنفيكا", "روزاريو سنترال"],
    clubsHistoryEn: ["Rosario Central", "Benfica", "Real Madrid", "Manchester United", "Paris Saint-Germain", "Juventus", "Benfica", "Rosario Central"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/أنخل_دي_ماريا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Ángel_Di_María"
  }
  ,
  {
    id: "lautaro-martinez",
    nameAr: "لاوتارو مارتينيز",
    nameEn: "Lautaro Martínez",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "إنتر ميلان",
    clubEn: "Inter Milan",
    position: { ar: "مهاجم", en: "Striker" },
    era: "2015-الآن",
    active: true,
    bioAr: "مهاجم أرجنتيني وقائد إنتر ميلان، فاز بكأس العالم 2022 مع الأرجنتين ووصل معها لنهائي نسخة 2026، وحقق بطولتي كوبا أمريكا (2021، 2024)، ويُعد أحد أفضل المهاجمين في العالم حاليًا.",
    bioEn: "Argentine striker and captain of Inter Milan. He won the 2022 World Cup with Argentina and reached the 2026 final with them, also winning two Copa América titles (2021, 2024), and is regarded as one of the best strikers in the world today.",
    achievementsAr: [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "وصافة كأس العالم 2026 مع الأرجنتين",
      "بطولتا كوبا أمريكا مع الأرجنتين (2021، 2024)",
      "لقب الدوري الإيطالي مع إنتر ميلان (قائدًا)"
    ],
    achievementsEn: [
      "2022 FIFA World Cup title with Argentina",
      "2026 FIFA World Cup runner-up with Argentina",
      "2 Copa América titles with Argentina (2021, 2024)",
      "Serie A title with Inter Milan (as captain)"
    ],
    clubsHistoryAr: ["راسينغ كلوب", "إنتر ميلان"],
    clubsHistoryEn: ["Racing Club", "Inter Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/لاوتارو_مارتينيز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Lautaro_Martínez"
  },
  {
    id: "rafael-leao",
    nameAr: "رافاييل ليساو",
    nameEn: "Rafael Leão",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "غلطة سراي",
    clubEn: "Galatasaray",
    position: { ar: "جناح أيسر", en: "Left Winger" },
    era: "2017-الآن",
    active: true,
    bioAr: "جناح برتغالي كان نجم ميلان الإيطالي الأبرز لسنوات وساهم في فوزه بلقب الدوري الإيطالي 2021-2022، وفاز مع البرتغال بلقب دوري الأمم الأوروبية 2025، قبل أن ينتقل إلى غلطة سراي التركي عام 2026.",
    bioEn: "Portuguese winger who was AC Milan's standout star for years, helping them win the 2021-22 Serie A title, and won the 2025 UEFA Nations League with Portugal, before moving to Turkish club Galatasaray in 2026.",
    achievementsAr: [
      "لقب الدوري الإيطالي 2021-2022 مع ميلان",
      "لقب دوري الأمم الأوروبية 2025 مع البرتغال",
      "جائزة أفضل لاعب في الدوري الإيطالي موسم فوزه بالبطولة",
      "كأس إيطاليا والسوبر الإيطالي مع ميلان"
    ],
    achievementsEn: [
      "2021-22 Serie A title with AC Milan",
      "2025 UEFA Nations League title with Portugal",
      "Serie A MVP in his title-winning season",
      "Coppa Italia and Italian Super Cup with AC Milan"
    ],
    clubsHistoryAr: ["سبورتينغ لشبونة", "ليل", "ميلان", "غلطة سراي"],
    clubsHistoryEn: ["Sporting CP", "Lille", "AC Milan", "Galatasaray"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/رفائيل_لياو",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Rafael_Leão"
  },
  {
    id: "ruben-dias",
    nameAr: "روبن دياش",
    nameEn: "Rúben Dias",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "مانشستر سيتي",
    clubEn: "Manchester City",
    position: { ar: "مدافع", en: "Centre-back" },
    era: "2015-الآن",
    active: true,
    bioAr: "مدافع برتغالي وأحد أعمدة مانشستر سيتي منذ انتقاله من بنفيكا عام 2020، فاز معه بعدة ألقاب دوري إنجليزي ودوري أبطال أوروبا، وهو القائد الطبيعي لدفاع منتخب البرتغال، وحقق معه لقبي دوري الأمم الأوروبية (2019، 2025).",
    bioEn: "Portuguese defender and a defensive cornerstone of Manchester City since his move from Benfica in 2020, winning multiple Premier League titles and the UEFA Champions League with the club. He is the natural leader of Portugal's defence and has won two UEFA Nations League titles with them (2019, 2025).",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2022-2023 مع مانشستر سيتي",
      "4 ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "لقبا دوري الأمم الأوروبية مع البرتغال (2019، 2025)",
      "كأس العالم للأندية 2023 مع مانشستر سيتي"
    ],
    achievementsEn: [
      "2022-23 UEFA Champions League title with Manchester City",
      "4 Premier League titles with Manchester City",
      "2 UEFA Nations League titles with Portugal (2019, 2025)",
      "2023 FIFA Club World Cup with Manchester City"
    ],
    clubsHistoryAr: ["بنفيكا", "مانشستر سيتي"],
    clubsHistoryEn: ["Benfica", "Manchester City"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/روبن_دياز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Rúben_Dias"
  }
  ,
  {
    id: "bernardo-silva",
    nameAr: "برناردو سيلفا",
    nameEn: "Bernardo Silva",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "وسط", en: "Midfielder" },
    era: "2013-الآن",
    active: true,
    bioAr: "لاعب وسط برتغالي قضى 9 مواسم مع مانشستر سيتي وكان ركيزة أساسية في ثلاثيته التاريخية موسم 2022-2023، قبل أن يرحل كلاعب حر وينضم إلى ريال مدريد الإسباني في يوليو 2026.",
    bioEn: "Portuguese midfielder who spent nine seasons at Manchester City and was a key figure in their historic treble in the 2022-23 season, before leaving as a free agent and joining Real Madrid in July 2026.",
    achievementsAr: [
      "الثلاثية التاريخية مع مانشستر سيتي موسم 2022-2023 (الدوري، الكأس، دوري الأبطال)",
      "6 ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "لقبا دوري الأمم الأوروبية مع البرتغال (2019، 2025)",
      "لاعب مانشستر سيتي المثالي لعام 2019"
    ],
    achievementsEn: [
      "Historic treble with Manchester City in 2022-23 (league, FA Cup, Champions League)",
      "6 Premier League titles with Manchester City",
      "2 UEFA Nations League titles with Portugal (2019, 2025)",
      "Manchester City Player of the Year 2019"
    ],
    clubsHistoryAr: ["بنفيكا", "موناكو (إعارة ثم انتقال دائم)", "مانشستر سيتي", "ريال مدريد"],
    clubsHistoryEn: ["Benfica", "Monaco (loan then permanent)", "Manchester City", "Real Madrid"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/برناردو_سيلفا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Bernardo_Silva"
  },
  {
    id: "khvicha-kvaratskhelia",
    nameAr: "خفيتشا كفاراتسخيليا",
    nameEn: "Khvicha Kvaratskhelia",
    nationalityAr: "جورجي",
    nationalityEn: "Georgian",
    clubAr: "باريس سان جيرمان",
    clubEn: "Paris Saint-Germain",
    position: { ar: "جناح أيسر", en: "Left Winger" },
    era: "2017-الآن",
    active: true,
    bioAr: "جناح جورجي وقائد منتخب بلاده، يُعد أعظم لاعب جورجي في التاريخ. تألق بشكل كبير مع نابولي الإيطالي وساهم في تتويجه بالدوري الإيطالي 2022-2023، قبل أن ينتقل إلى باريس سان جيرمان يناير 2025 وحقق معه لقب دوري أبطال أوروبا 2024-2025.",
    bioEn: "Georgian winger and captain of his national team, regarded as the greatest Georgian player of all time. He shone brightly at Napoli, helping them win the 2022-23 Serie A title, before moving to Paris Saint-Germain in January 2025 and winning the 2024-25 UEFA Champions League with them.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان",
      "لقب الدوري الإيطالي 2022-2023 مع نابولي",
      "جائزة أفضل لاعب شاب في دوري أبطال أوروبا موسم 2022-2023",
      "قائد منتخب جورجيا الذي تأهل لأول مرة في تاريخه لبطولة كبرى (يورو 2024)"
    ],
    achievementsEn: [
      "2024-25 UEFA Champions League title with Paris Saint-Germain",
      "2022-23 Serie A title with Napoli",
      "UEFA Champions League Young Player of the Season 2022-23",
      "Captain of Georgia during their first-ever qualification for a major tournament (Euro 2024)"
    ],
    clubsHistoryAr: ["دينامو تبليسي", "روستافي", "لوكوموتيف موسكو (إعارة)", "روبين كازان", "دينامو باتومي", "نابولي", "باريس سان جيرمان"],
    clubsHistoryEn: ["Dinamo Tbilisi", "Rustavi", "Lokomotiv Moscow (loan)", "Rubin Kazan", "Dinamo Batumi", "Napoli", "Paris Saint-Germain"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/خفيتشا_كفاراتسخيليا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Khvicha_Kvaratskhelia"
  },
  {
    id: "nicolo-barella",
    nameAr: "نيكولو باريلا",
    nameEn: "Nicolò Barella",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "إنتر ميلان",
    clubEn: "Inter Milan",
    position: { ar: "وسط", en: "Central Midfielder" },
    era: "2015-الآن",
    active: true,
    bioAr: "لاعب وسط إيطالي وأحد أهم لاعبي خط وسط إنتر ميلان منذ انضمامه من كالياري عام 2019، فاز مع إيطاليا بلقب يورو 2020 وسجل هدفًا مهمًا في نصف النهائي أمام إسبانيا، وحقق عدة ألقاب دوري إيطالي مع إنتر.",
    bioEn: "Italian midfielder and a key figure in Inter Milan's midfield since joining from Cagliari in 2019. He won Euro 2020 with Italy, scoring an important goal in the semi-final against Spain, and has won multiple Serie A titles with Inter.",
    achievementsAr: [
      "بطولة أمم أوروبا 2020 مع إيطاليا (سجل هدفًا في نصف النهائي أمام إسبانيا)",
      "عدة ألقاب دوري إيطالي مع إنتر ميلان",
      "وصافة دوري أبطال أوروبا مع إنتر ميلان (2023)",
      "أصغر قائد في تاريخ كالياري"
    ],
    achievementsEn: [
      "UEFA Euro 2020 title with Italy (scored in the semi-final against Spain)",
      "Multiple Serie A titles with Inter Milan",
      "UEFA Champions League runner-up with Inter Milan (2023)",
      "Youngest captain in Cagliari's history"
    ],
    clubsHistoryAr: ["كالياري", "كومو (إعارة)", "إنتر ميلان (إعارة ثم انتقال دائم)"],
    clubsHistoryEn: ["Cagliari", "Como (loan)", "Inter Milan (loan then permanent)"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/نيكولو_باريلا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Nicolò_Barella"
  }
  ,
  {
    id: "joshua-kimmich",
    nameAr: "جوشوا كيميش",
    nameEn: "Joshua Kimmich",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "بايرن ميونخ",
    clubEn: "Bayern Munich",
    position: { ar: "وسط / ظهير أيمن", en: "Midfielder / Right-back" },
    era: "2013-الآن",
    active: true,
    bioAr: "لاعب وسط ألماني متعدد المراكز وقائد المنتخب الألماني، يلعب لبايرن ميونخ منذ عام 2015 وجدد عقده معه حتى 2029. فاز مع بايرن بالثلاثية القارية موسم 2019-2020 (الدوري والكأس ودوري الأبطال)، ويُعد أحد أهم لاعبي خط الوسط في العالم بفضل رؤيته وتمريراته.",
    bioEn: "Versatile German midfielder and captain of the Germany national team, playing for Bayern Munich since 2015 and having extended his contract there until 2029. He won the continental treble with Bayern in the 2019-20 season (Bundesliga, DFB-Pokal, Champions League) and is regarded as one of the world's finest midfielders for his vision and passing.",
    achievementsAr: [
      "الثلاثية القارية 2019-2020 مع بايرن ميونخ (الدوري والكأس ودوري الأبطال)",
      "عدة ألقاب دوري ألماني (بوندسليغا) مع بايرن ميونخ",
      "قائد المنتخب الألماني",
      "عضو تشكيلة الموسم في يورو 2016"
    ],
    achievementsEn: [
      "2019-20 continental treble with Bayern Munich (Bundesliga, DFB-Pokal, Champions League)",
      "Multiple Bundesliga titles with Bayern Munich",
      "Captain of the Germany national team",
      "UEFA Euro 2016 Team of the Tournament"
    ],
    clubsHistoryAr: ["شتوتغارت", "لايبزيغ (إعارة)", "بايرن ميونخ"],
    clubsHistoryEn: ["VfB Stuttgart", "RB Leipzig (loan)", "Bayern Munich"],
    wikiUrlAr: "",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Joshua_Kimmich"
  },
  {
    id: "mesut-ozil",
    nameAr: "مسعود أوزيل",
    nameEn: "Mesut Özil",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder" },
    era: "2006-2023",
    active: false,
    bioAr: "صانع ألعاب ألماني من أصول تركية، يُعد من أبرز صناع الألعاب في جيله بفضل رؤيته ودقة تمريراته. توّج مسيرته الدولية بلقب كأس العالم 2014 مع ألمانيا، ولعب لريال مدريد وآرسنال قبل أن يعتزل مع فنربخشة التركي عام 2023.",
    bioEn: "German playmaker of Turkish descent, regarded as one of the finest creative midfielders of his generation for his vision and passing. He capped his international career by winning the 2014 FIFA World Cup with Germany, and played for Real Madrid and Arsenal before retiring at Turkish club Fenerbahçe in 2023.",
    achievementsAr: [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "لقب الدوري الإسباني 2011-2012 مع ريال مدريد",
      "لقب كأس إنجلترا (عدة مرات) مع آرسنال",
      "أكبر رقم قياسي لصانع أهداف في الدوري الإنجليزي خلال فترة من مسيرته"
    ],
    achievementsEn: [
      "2014 FIFA World Cup title with Germany",
      "2011-12 La Liga title with Real Madrid",
      "FA Cup titles (multiple times) with Arsenal",
      "Held the Premier League assists record for a single season for a period of his career"
    ],
    clubsHistoryAr: ["شالكه 04", "فيردر بريمن", "ريال مدريد", "آرسنال", "فنربخشة", "إسطنبول باشاك شهير"],
    clubsHistoryEn: ["Schalke 04", "Werder Bremen", "Real Madrid", "Arsenal", "Fenerbahçe", "Istanbul Başakşehir"],
    wikiUrlAr: "",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Mesut_Özil"
  },
  {
    id: "romelu-lukaku",
    nameAr: "روميلو لوكاكو",
    nameEn: "Romelu Lukaku",
    nationalityAr: "بلجيكي",
    nationalityEn: "Belgian",
    clubAr: "نابولي",
    clubEn: "Napoli",
    position: { ar: "مهاجم", en: "Striker" },
    era: "2009-الآن",
    active: true,
    bioAr: "مهاجم بلجيكي وهداف منتخب بلجيكا التاريخي، لعب لتشيلسي وإيفرتون ومانشستر يونايتد وإنتر ميلان قبل أن يستقر في نابولي الإيطالي. حقق لقب الدوري الإيطالي مع إنتر ميلان موسم 2020-2021، وأصبح أكبر هداف لبلجيكا في تاريخ نهائيات كأس العالم.",
    bioEn: "Belgian striker and his country's all-time leading goalscorer, he has played for Chelsea, Everton, Manchester United and Inter Milan before settling at Napoli. He won the Serie A title with Inter Milan in the 2020-21 season and became Belgium's all-time top scorer at the FIFA World Cup finals.",
    achievementsAr: [
      "لقب الدوري الإيطالي (سيري A) 2020-2021 مع إنتر ميلان",
      "هداف منتخب بلجيكا التاريخي",
      "أكبر هداف لبلجيكا في تاريخ نهائيات كأس العالم",
      "وصافة دوري أبطال أوروبا مع إنتر ميلان (2023)"
    ],
    achievementsEn: [
      "2020-21 Serie A title with Inter Milan",
      "Belgium's all-time top goalscorer",
      "Belgium's all-time leading scorer at the FIFA World Cup finals",
      "UEFA Champions League runner-up with Inter Milan (2023)"
    ],
    clubsHistoryAr: ["أندرلخت", "تشيلسي", "ويست بروميتش (إعارة)", "إيفرتون", "مانشستر يونايتد", "إنتر ميلان (إعارة ثم انتقال دائم)", "تشيلسي", "روما (إعارة)", "نابولي"],
    clubsHistoryEn: ["Anderlecht", "Chelsea", "West Bromwich Albion (loan)", "Everton", "Manchester United", "Inter Milan (loan then permanent)", "Chelsea", "Roma (loan)", "Napoli"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "emiliano-martinez",
    nameAr: "إميليانو مارتينيز",
    nameEn: "Emiliano Martínez",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "أستون فيلا",
    clubEn: "Aston Villa",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "2012-الآن",
    active: true,
    bioAr: "حارس مرمى أرجنتيني، خرّيج أكاديمية آرسنال قبل أن يستقر مع أستون فيلا الإنجليزي ويجدد عقده معه حتى 2029. كان بطلاً لنهائي كأس العالم 2022 مع الأرجنتين وحصل على جائزة القفاز الذهبي كأفضل حارس في البطولة، كما توّج بكوبا أمريكا مرتين مع منتخب بلاده.",
    bioEn: "Argentine goalkeeper, an Arsenal academy graduate who settled at Aston Villa and extended his contract there until 2029. He was Argentina's hero in the 2022 World Cup final and won the Golden Glove as the tournament's best goalkeeper, and has also won the Copa América twice with his national team.",
    achievementsAr: [
      "بطولة كأس العالم 2022 مع الأرجنتين",
      "جائزة القفاز الذهبي لأفضل حارس في كأس العالم 2022",
      "بطولة كوبا أمريكا مرتين (2021 و2024) مع الأرجنتين",
      "بطولة فينالِسيما 2022 مع الأرجنتين"
    ],
    achievementsEn: [
      "2022 FIFA World Cup title with Argentina",
      "Golden Glove as best goalkeeper of the 2022 World Cup",
      "Copa América title twice (2021 and 2024) with Argentina",
      "2022 CONMEBOL–UEFA Finalissima title with Argentina"
    ],
    clubsHistoryAr: ["آرسنال", "عدة أندية بالإعارة (أكسفورد يونايتد، شيفيلد وينزداي، روذرهام، جيرونا، ريدينغ)", "أستون فيلا"],
    clubsHistoryEn: ["Arsenal", "Multiple loan spells (Oxford United, Sheffield Wednesday, Rotherham, Getafe, Reading)", "Aston Villa"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "trent-alexander-arnold",
    nameAr: "ترينت ألكسندر-أرنولد",
    nameEn: "Trent Alexander-Arnold",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "ظهير أيمن", en: "Right-back" },
    era: "2016-الآن",
    active: true,
    bioAr: "ظهير أيمن إنجليزي، خرّيج أكاديمية ليفربول الذي دافع عن ألوانه لأكثر من عقد وفاز معه بدوري أبطال أوروبا والدوري الإنجليزي الممتاز مرتين، قبل أن ينتقل إلى ريال مدريد الإسباني في يونيو 2025 بعقد يمتد حتى 2031.",
    bioEn: "English right-back and Liverpool academy graduate who represented the club for over a decade, winning the UEFA Champions League and the Premier League twice with them, before moving to Real Madrid in June 2025 on a deal until 2031.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2018-2019 مع ليفربول",
      "لقبا الدوري الإنجليزي الممتاز (2019-2020 و2024-2025) مع ليفربول",
      "لقب كأس الاتحاد الإنجليزي 2021-2022 مع ليفربول",
      "لقبا كأس الرابطة الإنجليزية مع ليفربول"
    ],
    achievementsEn: [
      "2018-19 UEFA Champions League title with Liverpool",
      "Two Premier League titles (2019-20 and 2024-25) with Liverpool",
      "2021-22 FA Cup title with Liverpool",
      "Two EFL Cup titles with Liverpool"
    ],
    clubsHistoryAr: ["ليفربول", "ريال مدريد"],
    clubsHistoryEn: ["Liverpool", "Real Madrid"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "cesc-fabregas",
    nameAr: "سيسك فابريغاس",
    nameEn: "Cesc Fàbregas",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "كومو (معتزل)",
    clubEn: "Como (retired)",
    position: { ar: "صانع ألعاب", en: "Midfielder / Playmaker" },
    era: "2003-2022",
    active: false,
    bioAr: "صانع ألعاب إسباني وقائد سابق لآرسنال، فاز بكأس العالم 2010 ولقبي أمم أوروبا 2008 و2012 مع إسبانيا. لعب لبرشلونة وتشيلسي بعد آرسنال، واعتزل مع نادي كومو الإيطالي عام 2022 قبل أن يصبح مدربًا له.",
    bioEn: "Spanish playmaker and former Arsenal captain who won the 2010 World Cup and the 2008 and 2012 European Championships with Spain. He played for Barcelona and Chelsea after Arsenal, and retired at Italian club Como in 2022 before becoming its head coach.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "لقبا الدوري الإنجليزي الممتاز مع تشيلسي (2014-2015 و2016-2017)",
      "لقب الدوري الإسباني 2014-2015 مع برشلونة"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain",
      "UEFA European Championship titles in 2008 and 2012 with Spain",
      "Two Premier League titles with Chelsea (2014-15 and 2016-17)",
      "2014-15 La Liga title with Barcelona"
    ],
    clubsHistoryAr: ["آرسنال", "برشلونة", "تشيلسي", "مونزا (إعارة)", "كومو"],
    clubsHistoryEn: ["Arsenal", "Barcelona", "Chelsea", "Monza (loan)", "Como"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "david-silva",
    nameAr: "ديفيد سيلفا",
    nameEn: "David Silva",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "ريال سوسيداد (معتزل)",
    clubEn: "Real Sociedad (retired)",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder" },
    era: "2004-2023",
    active: false,
    bioAr: "صانع ألعاب إسباني وأحد أهم نجوم مانشستر سيتي في تاريخه، فاز معه بعدة ألقاب دوري إنجليزي ممتاز. توّج مع إسبانيا بكأس العالم 2010 ولقبي أمم أوروبا 2008 و2012، واعتزل مع ريال سوسيداد عام 2023.",
    bioEn: "Spanish playmaker and one of Manchester City's greatest ever players, winning multiple Premier League titles with the club. He won the 2010 World Cup and the 2008 and 2012 European Championships with Spain, and retired at Real Sociedad in 2023.",
    achievementsAr: [
      "بطولة كأس العالم 2010 مع إسبانيا",
      "بطولتا أمم أوروبا 2008 و2012 مع إسبانيا",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "لقب الدوري الإسباني 2007-2008 مع فالنسيا"
    ],
    achievementsEn: [
      "2010 FIFA World Cup title with Spain",
      "UEFA European Championship titles in 2008 and 2012 with Spain",
      "Multiple Premier League titles with Manchester City",
      "2007-08 La Liga title with Valencia"
    ],
    clubsHistoryAr: ["فالنسيا", "إيبار (إعارة)", "سيلتا فيغو (إعارة)", "مانشستر سيتي", "ريال سوسيداد"],
    clubsHistoryEn: ["Valencia", "Eibar (loan)", "Celta Vigo (loan)", "Manchester City", "Real Sociedad"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "christian-vieri",
    nameAr: "كريستيان فييري",
    nameEn: "Christian Vieri",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Striker" },
    era: "1991-2009",
    active: false,
    bioAr: "مهاجم إيطالي قوي البنية وأحد أخطر الهدافين في جيله، انتقاله إلى إنتر ميلان عام 1999 مثّل رقمًا قياسيًا عالميًا لقيمة الصفقات في حينها. لعب أيضًا ليوفنتوس وأتلتيكو مدريد ولاتسيو وميلان، وسجل عدة مرات في نهائيات كأس العالم مع منتخب إيطاليا.",
    bioEn: "Powerfully built Italian striker and one of the most lethal goalscorers of his generation, whose 1999 transfer to Inter Milan set a world record transfer fee at the time. He also played for Juventus, Atlético Madrid, Lazio and Milan, and scored regularly at FIFA World Cup finals for Italy.",
    achievementsAr: [
      "هداف الدوري الإيطالي (سيري A) أكثر من مرة",
      "لقب كأس إيطاليا مع لاتسيو",
      "من أبرز هدافي منتخب إيطاليا في نهائيات كأس العالم",
      "صفقة قياسية عالميًا عند انتقاله إلى إنتر ميلان 1999"
    ],
    achievementsEn: [
      "Serie A top scorer (Capocannoniere) on multiple occasions",
      "Coppa Italia title with Lazio",
      "One of Italy's leading scorers at FIFA World Cup finals",
      "World record transfer fee when he joined Inter Milan in 1999"
    ],
    clubsHistoryAr: ["تورينو", "بيزا", "رافينا", "فينتسيا", "يوفنتوس", "أتلتيكو مدريد", "لاتسيو", "إنتر ميلان", "ميلان", "مونتيري (المكسيك)"],
    clubsHistoryEn: ["Torino", "Pisa", "Ravenna", "Venezia", "Juventus", "Atlético Madrid", "Lazio", "Inter Milan", "Milan", "Monterrey (Mexico)"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "gianfranco-zola",
    nameAr: "جانفرانكو زولا",
    nameEn: "Gianfranco Zola",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "صانع ألعاب / مهاجم", en: "Playmaker / Forward" },
    era: "1984-2005",
    active: false,
    bioAr: "صانع ألعاب إيطالي موهوب، لعب تحت قيادة مارادونا في نابولي قبل أن يصبح أحد أعظم لاعبي تشيلسي في تاريخه، حيث انتُخب لاحقًا 'لاعب القرن' للنادي. فاز مع بارما بكأس الاتحاد الأوروبي وكأس الكؤوس الأوروبية.",
    bioEn: "Gifted Italian playmaker who played alongside Maradona at Napoli before becoming one of Chelsea's greatest ever players, later voted the club's 'Player of the Century'. He won the UEFA Cup and the Cup Winners' Cup with Parma.",
    achievementsAr: [
      "لقب الدوري الإيطالي 1989-1990 مع نابولي",
      "كأس الكؤوس الأوروبية وكأس الاتحاد الأوروبي مع بارما",
      "لقب كأس إنجلترا مرتين مع تشيلسي",
      "انتُخب 'لاعب القرن' لنادي تشيلسي"
    ],
    achievementsEn: [
      "1989-90 Serie A title with Napoli",
      "UEFA Cup Winners' Cup and UEFA Cup with Parma",
      "FA Cup title twice with Chelsea",
      "Voted Chelsea's 'Player of the Century'"
    ],
    clubsHistoryAr: ["نابولي", "بارما", "تشيلسي", "كالياري"],
    clubsHistoryEn: ["Napoli", "Parma", "Chelsea", "Cagliari"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "mario-kempes",
    nameAr: "ماريو كيمبيس",
    nameEn: "Mario Kempes",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Striker" },
    era: "1973-1996",
    active: false,
    bioAr: "مهاجم أرجنتيني وبطل كأس العالم 1978 على أرضه، حيث كان هداف البطولة وأفضل لاعب فيها. قضى معظم مسيرته الأوروبية مع فالنسيا الإسباني الذي فاز معه بكأس الكؤوس الأوروبية وكأس السوبر الأوروبي.",
    bioEn: "Argentine striker and hero of the 1978 World Cup on home soil, where he was the tournament's top scorer and best player. He spent most of his European career at Valencia, with whom he won the UEFA Cup Winners' Cup and the UEFA Super Cup.",
    achievementsAr: [
      "بطولة كأس العالم 1978 مع الأرجنتين",
      "هداف وأفضل لاعب في كأس العالم 1978",
      "كأس الكؤوس الأوروبية 1979-1980 مع فالنسيا",
      "كأس السوبر الأوروبي 1980 مع فالنسيا"
    ],
    achievementsEn: [
      "1978 FIFA World Cup title with Argentina",
      "Top scorer and best player of the 1978 World Cup",
      "1979-80 UEFA Cup Winners' Cup with Valencia",
      "1980 UEFA Super Cup with Valencia"
    ],
    clubsHistoryAr: ["إنستيتوتو", "روزاريو سنترال", "فالنسيا", "ريفر بليت", "هركوليس", "فيرست فيينا (النمسا)"],
    clubsHistoryEn: ["Instituto", "Rosario Central", "Valencia", "River Plate", "Hércules", "First Vienna (Austria)"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "rui-costa",
    nameAr: "روي كوستا",
    nameEn: "Rui Costa",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder / Playmaker" },
    era: "1990-2006",
    active: false,
    bioAr: "صانع ألعاب برتغالي يُعد من أفضل لاعبي جيله، تألق مع فيورنتينا الإيطالي قبل أن ينتقل إلى ميلان ويفوز معه بلقبي الدوري الإيطالي ودوري أبطال أوروبا. شغل لاحقًا منصب الرئيس التنفيذي لبنفيكا، ناديه الأول.",
    bioEn: "Portuguese playmaker regarded as one of the finest of his generation, who shone at Fiorentina before moving to Milan, winning the Serie A title and the UEFA Champions League with them. He later served as CEO of Benfica, the club where he started his career.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2002-2003 مع ميلان",
      "لقب الدوري الإيطالي 2003-2004 مع ميلان",
      "كأس السوبر الأوروبي 2003 مع ميلان",
      "وصافة بطولة أمم أوروبا 2004 مع البرتغال"
    ],
    achievementsEn: [
      "2002-03 UEFA Champions League title with Milan",
      "2003-04 Serie A title with Milan",
      "2003 UEFA Super Cup with Milan",
      "UEFA Euro 2004 runner-up with Portugal"
    ],
    clubsHistoryAr: ["بنفيكا", "فيورنتينا", "ميلان"],
    clubsHistoryEn: ["Benfica", "Fiorentina", "Milan"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },

  {
    id: "federico-chiesa",
    nameAr: "فيديريكو كييزا",
    nameEn: "Federico Chiesa",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "ليفربول",
    clubEn: "Liverpool",
    position: { ar: "جناح", en: "Winger" },
    era: "2016-الآن",
    active: true,
    bioAr: "جناح إيطالي انتقل من يوفنتوس إلى ليفربول الإنجليزي صيف 2024. كان أحد أبطال إيطاليا في الفوز بلقب يورو 2020، ولعب جميع مباريات إيطاليا في تلك البطولة، كما فاز بكأس إيطاليا مرتين مع يوفنتوس.",
    bioEn: "Italian winger who moved from Juventus to Liverpool in the summer of 2024. He was a key part of Italy's Euro 2020 title-winning squad, playing in all of Italy's matches in that tournament, and won the Coppa Italia twice with Juventus.",
    achievementsAr: [
      "بطولة أمم أوروبا 2020 مع إيطاليا",
      "لقب الدوري الإنجليزي الممتاز 2024-2025 مع ليفربول",
      "لقب كأس إيطاليا مرتين مع يوفنتوس",
      "كأس السوبر الإيطالي مع يوفنتوس"
    ],
    achievementsEn: [
      "UEFA Euro 2020 title with Italy",
      "2024-25 Premier League title with Liverpool",
      "Coppa Italia title twice with Juventus",
      "Italian Super Cup with Juventus"
    ],
    clubsHistoryAr: ["فيورنتينا", "يوفنتوس (إعارة ثم انتقال دائم)", "ليفربول"],
    clubsHistoryEn: ["Fiorentina", "Juventus (loan then permanent)", "Liverpool"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "ilkay-gundogan",
    nameAr: "إلكاي غوندوغان",
    nameEn: "İlkay Gündoğan",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "غالطة سراي",
    clubEn: "Galatasaray",
    position: { ar: "وسط", en: "Midfielder" },
    era: "2011-الآن",
    active: true,
    bioAr: "لاعب وسط ألماني من أصول تركية وأحد أعظم لاعبي مانشستر سيتي في تاريخه، حيث قاد الفريق كقائد للفوز بالثلاثية التاريخية (الدوري والكأس ودوري الأبطال) موسم 2022-2023. غادر السيتي بشكل نهائي صيف 2025 لينضم إلى غالطة سراي التركي.",
    bioEn: "German midfielder of Turkish descent and one of Manchester City's greatest ever players, captaining the club to the historic treble (Premier League, FA Cup, Champions League) in the 2022-23 season. He left City for good in the summer of 2025 to join Turkish club Galatasaray.",
    achievementsAr: [
      "الثلاثية التاريخية 2022-2023 مع مانشستر سيتي (بصفته قائدًا)",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر سيتي",
      "لقب الدوري الألماني 2011-2012 مع بوروسيا دورتموند",
      "نائب قائد منتخب ألمانيا سابقًا"
    ],
    achievementsEn: [
      "2022-23 historic treble with Manchester City (as club captain)",
      "Multiple Premier League titles with Manchester City",
      "2011-12 Bundesliga title with Borussia Dortmund",
      "Former vice-captain of the Germany national team"
    ],
    clubsHistoryAr: ["نورمبرغ", "بوروسيا دورتموند", "مانشستر سيتي", "برشلونة", "مانشستر سيتي", "غالطة سراي"],
    clubsHistoryEn: ["1. FC Nürnberg", "Borussia Dortmund", "Manchester City", "Barcelona", "Manchester City", "Galatasaray"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "paulo-dybala",
    nameAr: "باولو ديبالا",
    nameEn: "Paulo Dybala",
    nationalityAr: "أرجنتيني",
    nationalityEn: "Argentine",
    clubAr: "روما",
    clubEn: "Roma",
    position: { ar: "صانع ألعاب / مهاجم", en: "Attacking Midfielder / Forward" },
    era: "2012-الآن",
    active: true,
    bioAr: "صانع ألعاب أرجنتيني موهوب، أمضى سنوات مؤثرة مع يوفنتوس فاز خلالها بعدة ألقاب دوري إيطالي، قبل أن ينتقل حرًا إلى روما عام 2022 ويقودها لنهائي الدوري الأوروبي في موسمه الأول معها.",
    bioEn: "Gifted Argentine playmaker who spent influential years at Juventus, winning multiple Serie A titles, before joining Roma as a free agent in 2022 and helping them reach the UEFA Europa League final in his first season there.",
    achievementsAr: [
      "عدة ألقاب دوري إيطالي (سيري A) مع يوفنتوس",
      "وصافة الدوري الأوروبي 2022-2023 مع روما",
      "لقب كأس إيطاليا مع يوفنتوس",
      "بطولة كوبا أمريكا 2021 مع الأرجنتين (ضمن القائمة)"
    ],
    achievementsEn: [
      "Multiple Serie A titles with Juventus",
      "2022-23 UEFA Europa League runner-up with Roma",
      "Coppa Italia title with Juventus",
      "2021 Copa América title with Argentina (squad member)"
    ],
    clubsHistoryAr: ["إنستيتوتو", "بالرمو", "يوفنتوس", "روما"],
    clubsHistoryEn: ["Instituto", "Palermo", "Juventus", "Roma"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "dani-carvajal",
    nameAr: "داني كارباخال",
    nameEn: "Dani Carvajal",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "ظهير أيمن", en: "Right-back" },
    era: "2010-الآن",
    active: true,
    bioAr: "ظهير أيمن إسباني وأحد أهم لاعبي ريال مدريد في العصر الحديث، فاز معه بعدة ألقاب دوري أبطال أوروبا، ويُعد من أكثر اللاعبين تتويجًا بالبطولة في تاريخها.",
    bioEn: "Spanish right-back and one of Real Madrid's most important players of the modern era, winning multiple UEFA Champions League titles with the club and ranking among the competition's most decorated players ever.",
    achievementsAr: [
      "عدة ألقاب دوري أبطال أوروبا مع ريال مدريد",
      "عدة ألقاب دوري إسباني مع ريال مدريد",
      "بطولة أمم أوروبا 2024 مع إسبانيا",
      "لقب كأس العالم للأندية مع ريال مدريد"
    ],
    achievementsEn: [
      "Multiple UEFA Champions League titles with Real Madrid",
      "Multiple La Liga titles with Real Madrid",
      "UEFA Euro 2024 title with Spain",
      "FIFA Club World Cup title with Real Madrid"
    ],
    clubsHistoryAr: ["ريال مدريد", "باير ليفركوزن (إعارة)", "ريال مدريد"],
    clubsHistoryEn: ["Real Madrid", "Bayer Leverkusen (loan)", "Real Madrid"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "antonio-rudiger",
    nameAr: "أنطونيو روديغر",
    nameEn: "Antonio Rüdiger",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "ريال مدريد",
    clubEn: "Real Madrid",
    position: { ar: "مدافع", en: "Centre-back" },
    era: "2011-الآن",
    active: true,
    bioAr: "مدافع ألماني قوي، فاز بدوري أبطال أوروبا مع تشيلسي موسم 2020-2021، قبل أن ينتقل حرًا إلى ريال مدريد عام 2022 ويحقق معه عدة ألقاب دوري إسباني ودوري أبطال أوروبا إضافية.",
    bioEn: "Powerful German defender who won the UEFA Champions League with Chelsea in the 2020-21 season, before joining Real Madrid as a free agent in 2022 and winning further La Liga and Champions League titles with them.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2020-2021 مع تشيلسي",
      "لقب دوري أبطال أوروبا 2023-2024 مع ريال مدريد",
      "عدة ألقاب دوري إسباني مع ريال مدريد",
      "لقب كأس السوبر الأوروبي مع تشيلسي وريال مدريد"
    ],
    achievementsEn: [
      "2020-21 UEFA Champions League title with Chelsea",
      "2023-24 UEFA Champions League title with Real Madrid",
      "Multiple La Liga titles with Real Madrid",
      "UEFA Super Cup title with both Chelsea and Real Madrid"
    ],
    clubsHistoryAr: ["شتوتغارت", "روما", "تشيلسي", "ريال مدريد"],
    clubsHistoryEn: ["VfB Stuttgart", "Roma", "Chelsea", "Real Madrid"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "marco-materazzi",
    nameAr: "ماركو ماتيرازي",
    nameEn: "Marco Materazzi",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Centre-back" },
    era: "1990-2011",
    active: false,
    bioAr: "مدافع إيطالي وبطل كأس العالم 2006 مع إيطاليا، حيث سجل هدف التعادل في المباراة النهائية أمام فرنسا. قضى معظم مسيرته مع إنتر ميلان وفاز معه بالثلاثية التاريخية موسم 2009-2010.",
    bioEn: "Italian defender and 2006 World Cup winner with Italy, having scored the equalizing goal in the final against France. He spent most of his career at Inter Milan, winning the historic treble with them in the 2009-10 season.",
    achievementsAr: [
      "بطولة كأس العالم 2006 مع إيطاليا (سجل هدفًا في النهائي أمام فرنسا)",
      "الثلاثية التاريخية 2009-2010 مع إنتر ميلان (الدوري والكأس ودوري الأبطال)",
      "عدة ألقاب دوري إيطالي مع إنتر ميلان",
      "لقب كأس إيطاليا عدة مرات مع إنتر ميلان"
    ],
    achievementsEn: [
      "2006 FIFA World Cup title with Italy (scored in the final against France)",
      "2009-10 historic treble with Inter Milan (Serie A, Coppa Italia, Champions League)",
      "Multiple Serie A titles with Inter Milan",
      "Coppa Italia title multiple times with Inter Milan"
    ],
    clubsHistoryAr: ["ميسينا", "بيروجيا", "فيرونا", "بيروجيا", "إيفرتون", "بيروجيا", "إنتر ميلان"],
    clubsHistoryEn: ["Messina", "Perugia", "Verona", "Perugia", "Everton", "Perugia", "Inter Milan"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "deco",
    nameAr: "ديكو",
    nameEn: "Deco",
    nationalityAr: "برتغالي (من مواليد البرازيل)",
    nationalityEn: "Portuguese (Brazilian-born)",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder / Playmaker" },
    era: "1994-2010",
    active: false,
    bioAr: "صانع ألعاب برازيلي المولد اختار تمثيل البرتغال دوليًا، تألق مع بورتو تحت قيادة جوزيه مورينيو وفاز معه بدوري أبطال أوروبا موسم 2003-2004، قبل أن ينتقل إلى برشلونة ويحقق معه لقب دوري الأبطال مجددًا موسم 2005-2006. شغل لاحقًا منصب مدير كرة القدم في برشلونة.",
    bioEn: "Brazilian-born playmaker who chose to represent Portugal internationally, shining at Porto under José Mourinho and winning the UEFA Champions League with them in the 2003-04 season, before moving to Barcelona and winning the Champions League again in 2005-06. He later served as Barcelona's football director.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2003-2004 مع بورتو",
      "لقب دوري أبطال أوروبا 2005-2006 مع برشلونة",
      "الكرة الذهبية الأوروبية 2004",
      "لقب الدوري الإسباني مرتين مع برشلونة"
    ],
    achievementsEn: [
      "2003-04 UEFA Champions League title with Porto",
      "2005-06 UEFA Champions League title with Barcelona",
      "2004 Ballon d'Or runner-up honours / UEFA Club Footballer of the Year",
      "Two La Liga titles with Barcelona"
    ],
    clubsHistoryAr: ["كورينثيانز (البرازيل)", "بينفيكا", "أليانسا (البرتغال)", "سالغيروش (إعارة)", "بورتو", "برشلونة", "تشيلسي", "فلومينينسي"],
    clubsHistoryEn: ["Corinthians (Brazil)", "Benfica", "Alverca (loan)", "Salgueiros (loan)", "Porto", "Barcelona", "Chelsea", "Fluminense"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "rivelino",
    nameAr: "ريفيلينو",
    nameEn: "Rivelino",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "جناح أيسر / صانع ألعاب", en: "Left Winger / Playmaker" },
    era: "1965-1981",
    active: false,
    bioAr: "أسطورة برازيلية اشتهر بركلاته الحرة القوية وحركته الخداعية المعروفة بـ'إلاستيكو'، كان جزءًا أساسيًا من منتخب البرازيل الذي فاز بكأس العالم 1970، ولعب لاحقًا في السعودية مع نادي الاتحاد.",
    bioEn: "Brazilian legend renowned for his powerful free kicks and the deceptive move known as the 'elástico', he was a key member of the Brazil side that won the 1970 World Cup, and later played in Saudi Arabia for Al-Ittihad.",
    achievementsAr: [
      "بطولة كأس العالم 1970 مع البرازيل",
      "لقب الدوري البرازيلي عدة مرات مع كورينثيانز وفلومينينسي",
      "يُعتبر مبتكر حركة 'إلاستيكو' الشهيرة",
      "شارك في 3 نهائيات كأس عالم مع البرازيل (1970، 1974، 1978)"
    ],
    achievementsEn: [
      "1970 FIFA World Cup title with Brazil",
      "Brazilian league title multiple times with Corinthians and Fluminense",
      "Widely credited as the originator of the 'elástico' move",
      "Played in three World Cup finals tournaments with Brazil (1970, 1974, 1978)"
    ],
    clubsHistoryAr: ["كورينثيانز", "فلومينينسي", "الاتحاد (السعودية)"],
    clubsHistoryEn: ["Corinthians", "Fluminense", "Al-Ittihad (Saudi Arabia)"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },

  {
    id: "mike-maignan",
    nameAr: "مايك مينيان",
    nameEn: "Mike Maignan",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "ميلان",
    clubEn: "AC Milan",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "2015-الآن",
    active: true,
    bioAr: "حارس مرمى فرنسي وقائد نادي ميلان، خلف جانلويجي دوناروما في حراسة مرمى الروسونيري عام 2021 وساهم في فوز الفريق بلقب الدوري الإيطالي موسم 2021-2022. جدد عقده مع ميلان حتى عام 2031، وهو الحارس الأساسي لمنتخب فرنسا.",
    bioEn: "French goalkeeper and captain of AC Milan, who succeeded Gianluigi Donnarumma between the posts for the Rossoneri in 2021 and helped the club win the Serie A title in the 2021-22 season. He extended his contract with Milan until 2031 and is the first-choice goalkeeper for the France national team.",
    achievementsAr: [
      "لقب الدوري الإيطالي 2021-2022 مع ميلان",
      "أفضل حارس مرمى في الدوري الإيطالي موسم 2021-2022",
      "كأس السوبر الإيطالي 2024 مع ميلان",
      "لقب دوري الأمم الأوروبية 2021 مع فرنسا"
    ],
    achievementsEn: [
      "2021-22 Serie A title with AC Milan",
      "Serie A Goalkeeper of the Season 2021-22",
      "2024 Italian Super Cup with AC Milan",
      "2021 UEFA Nations League title with France"
    ],
    clubsHistoryAr: ["باريس سان جيرمان", "ليل", "ميلان"],
    clubsHistoryEn: ["Paris Saint-Germain", "Lille", "AC Milan"],
    wikiUrlAr: "",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Mike_Maignan"
  },
  {
    id: "theo-hernandez",
    nameAr: "ثيو هيرنانديز",
    nameEn: "Theo Hernández",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "الهلال (السعودية)",
    clubEn: "Al-Hilal (Saudi Arabia)",
    position: { ar: "ظهير أيسر", en: "Left-back" },
    era: "2017-الآن",
    active: true,
    bioAr: "ظهير أيسر فرنسي أمضى ست مواسم مؤثرة مع ميلان الإيطالي وتفوّق على رقم الأسطورة باولو مالديني للأهداف كمدافع، فاز خلالها بلقب الدوري الإيطالي وكأس السوبر، قبل أن ينتقل صيف 2025 إلى الهلال السعودي.",
    bioEn: "French left-back who spent six influential seasons at AC Milan, surpassing club legend Paolo Maldini's goalscoring tally as a defender, winning the Serie A title and the Italian Super Cup, before moving to Saudi club Al-Hilal in the summer of 2025.",
    achievementsAr: [
      "لقب الدوري الإيطالي 2021-2022 مع ميلان",
      "كأس السوبر الإيطالي مع ميلان",
      "تجاوز الرقم القياسي التاريخي لباولو مالديني كأكثر مدافع تسجيلاً لأهداف مع ميلان",
      "لقب دوري الأمم الأوروبية 2021 مع فرنسا"
    ],
    achievementsEn: [
      "2021-22 Serie A title with AC Milan",
      "Italian Super Cup with AC Milan",
      "Surpassed Paolo Maldini's historic tally as Milan's top-scoring defender",
      "2021 UEFA Nations League title with France"
    ],
    clubsHistoryAr: ["أتلتيكو مدريد", "ديبورتيفو ألافيس (إعارة)", "ريال مدريد", "ريال سوسيداد (إعارة)", "ميلان", "الهلال"],
    clubsHistoryEn: ["Atlético Madrid", "Deportivo Alavés (loan)", "Real Madrid", "Real Sociedad (loan)", "AC Milan", "Al-Hilal"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "gary-neville",
    nameAr: "غاري نيفيل",
    nameEn: "Gary Neville",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "ظهير أيمن", en: "Right-back" },
    era: "1992-2011",
    active: false,
    bioAr: "ظهير أيمن إنجليزي وأحد أبطال 'جيل 92' في مانشستر يونايتد، قضى مسيرته بأكملها مع النادي وقاده كقائد لسنوات، فاز معه بالثلاثية التاريخية 1998-1999 وعدة ألقاب دوري إنجليزي ممتاز. أصبح لاحقًا من أبرز المحللين الرياضيين في إنجلترا.",
    bioEn: "English right-back and one of Manchester United's famous 'Class of '92', he spent his entire career at the club and captained it for years, winning the historic 1998-99 treble and multiple Premier League titles. He later became one of England's most prominent football pundits.",
    achievementsAr: [
      "الثلاثية التاريخية 1998-1999 مع مانشستر يونايتد (الدوري والكأس ودوري الأبطال)",
      "لقب دوري أبطال أوروبا 2007-2008 مع مانشستر يونايتد",
      "عدة ألقاب دوري إنجليزي ممتاز مع مانشستر يونايتد",
      "أكثر من 400 مباراة في الدوري الإنجليزي الممتاز مع مانشستر يونايتد"
    ],
    achievementsEn: [
      "1998-99 historic treble with Manchester United (Premier League, FA Cup, Champions League)",
      "2007-08 UEFA Champions League title with Manchester United",
      "Multiple Premier League titles with Manchester United",
      "Over 400 Premier League appearances for Manchester United"
    ],
    clubsHistoryAr: ["مانشستر يونايتد"],
    clubsHistoryEn: ["Manchester United"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "ashley-cole",
    nameAr: "أشلي كول",
    nameEn: "Ashley Cole",
    nationalityAr: "إنجليزي",
    nationalityEn: "English",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "ظهير أيسر", en: "Left-back" },
    era: "1998-2019",
    active: false,
    bioAr: "ظهير أيسر إنجليزي يُعد أحد أفضل من لعب في مركزه في تاريخ الدوري الإنجليزي، فاز بألقاب عديدة مع آرسنال ثم تشيلسي، من بينها لقب دوري أبطال أوروبا 2011-2012 مع تشيلسي.",
    bioEn: "English left-back regarded as one of the finest to ever play in his position in Premier League history, winning numerous titles with Arsenal and then Chelsea, including the 2011-12 UEFA Champions League with Chelsea.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2011-2012 مع تشيلسي",
      "لقب الدوري الإنجليزي الممتاز 'الإنفينسيبلز' 2003-2004 مع آرسنال دون خسارة",
      "لقب كأس إنجلترا عدة مرات (رقم قياسي مشترك) مع آرسنال وتشيلسي",
      "أكثر من 100 مباراة دولية مع منتخب إنجلترا"
    ],
    achievementsEn: [
      "2011-12 UEFA Champions League title with Chelsea",
      "2003-04 'Invincibles' Premier League title with Arsenal, unbeaten all season",
      "FA Cup title multiple times (joint record) with Arsenal and Chelsea",
      "Over 100 caps for the England national team"
    ],
    clubsHistoryAr: ["آرسنال", "كريستال بالاس (إعارة)", "تشيلسي", "روما", "لوس أنجلوس غالاكسي", "ديربي كاونتي"],
    clubsHistoryEn: ["Arsenal", "Crystal Palace (loan)", "Chelsea", "Roma", "LA Galaxy", "Derby County"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "fernando-hierro",
    nameAr: "فرناندو هييرو",
    nameEn: "Fernando Hierro",
    nationalityAr: "إسباني",
    nationalityEn: "Spanish",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مدافع", en: "Centre-back" },
    era: "1985-2003",
    active: false,
    bioAr: "مدافع إسباني وقائد سابق لريال مدريد، يُعد أحد أعظم من لعب لصالح النادي بفضل قوته الدفاعية وقدرته على تسجيل الأهداف من الكرات الثابتة. فاز مع ريال مدريد بعدة ألقاب دوري أبطال أوروبا ودوري إسباني.",
    bioEn: "Spanish defender and former Real Madrid captain, regarded as one of the greatest players in the club's history for his defensive strength and ability to score from set-pieces. He won multiple UEFA Champions League and La Liga titles with Real Madrid.",
    achievementsAr: [
      "ثلاثة ألقاب دوري أبطال أوروبا مع ريال مدريد (1997-1998، 1999-2000، 2001-2002)",
      "عدة ألقاب دوري إسباني مع ريال مدريد",
      "هداف ريال مدريد التاريخي بين المدافعين",
      "قائد سابق لمنتخب إسبانيا"
    ],
    achievementsEn: [
      "Three UEFA Champions League titles with Real Madrid (1997-98, 1999-2000, 2001-02)",
      "Multiple La Liga titles with Real Madrid",
      "Real Madrid's all-time top-scoring defender",
      "Former captain of the Spain national team"
    ],
    clubsHistoryAr: ["ريال بايادوليد", "ريال مدريد", "القادسية (قطر)", "بولتون واندررز"],
    clubsHistoryEn: ["Real Valladolid", "Real Madrid", "Al-Qadisiyah (Qatar)", "Bolton Wanderers"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "gigi-riva",
    nameAr: "جيجي ريفا",
    nameEn: "Gigi Riva",
    nationalityAr: "إيطالي",
    nationalityEn: "Italian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Forward" },
    era: "1963-1976",
    active: false,
    bioAr: "مهاجم إيطالي وهداف منتخب إيطاليا التاريخي، قضى مسيرته بأكملها مع نادي كالياري الذي قاده للقب الدوري الإيطالي الوحيد في تاريخه موسم 1969-1970، وفاز مع إيطاليا ببطولة أمم أوروبا 1968.",
    bioEn: "Italian forward and his country's all-time leading goalscorer, who spent his entire career at Cagliari, leading them to their only Serie A title in the 1969-70 season, and won the UEFA European Championship with Italy in 1968.",
    achievementsAr: [
      "لقب الدوري الإيطالي 1969-1970 مع كالياري (اللقب الوحيد لتاريخ النادي)",
      "بطولة أمم أوروبا 1968 مع إيطاليا",
      "وصافة كأس العالم 1970 مع إيطاليا",
      "هداف منتخب إيطاليا التاريخي لعقود طويلة"
    ],
    achievementsEn: [
      "1969-70 Serie A title with Cagliari (the club's only ever league title)",
      "UEFA European Championship 1968 with Italy",
      "1970 FIFA World Cup runner-up with Italy",
      "Italy's all-time top goalscorer for decades"
    ],
    clubsHistoryAr: ["ليجناغو", "كالياري"],
    clubsHistoryEn: ["Legnago", "Cagliari"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },

  {
    id: "nuno-mendes",
    nameAr: "نونو مينديز",
    nameEn: "Nuno Mendes",
    nationalityAr: "برتغالي",
    nationalityEn: "Portuguese",
    clubAr: "باريس سان جيرمان",
    clubEn: "Paris Saint-Germain",
    position: { ar: "ظهير أيسر", en: "Left-back" },
    era: "2020-الآن",
    active: true,
    bioAr: "ظهير أيسر برتغالي انضم إلى باريس سان جيرمان قادمًا من سبورتينغ لشبونة عام 2021، وأصبح أحد ركائز الفريق الذي فاز بلقب دوري أبطال أوروبا موسم 2024-2025 لأول مرة في تاريخ النادي.",
    bioEn: "Portuguese left-back who joined Paris Saint-Germain from Sporting Lisbon in 2021, becoming a key pillar of the side that won the club's first-ever UEFA Champions League title in the 2024-25 season.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2024-2025 مع باريس سان جيرمان (أول لقب في تاريخ النادي)",
      "عدة ألقاب دوري فرنسي مع باريس سان جيرمان",
      "لقب كأس فرنسا عدة مرات مع باريس سان جيرمان",
      "لقب الدوري البرتغالي 2020-2021 مع سبورتينغ لشبونة"
    ],
    achievementsEn: [
      "2024-25 UEFA Champions League title with Paris Saint-Germain (the club's first ever)",
      "Multiple Ligue 1 titles with Paris Saint-Germain",
      "Coupe de France title multiple times with Paris Saint-Germain",
      "2020-21 Primeira Liga title with Sporting Lisbon"
    ],
    clubsHistoryAr: ["سبورتينغ لشبونة", "باريس سان جيرمان (إعارة ثم انتقال دائم)"],
    clubsHistoryEn: ["Sporting Lisbon", "Paris Saint-Germain (loan then permanent)"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "marcus-thuram",
    nameAr: "ماركوس تورام",
    nameEn: "Marcus Thuram",
    nationalityAr: "فرنسي",
    nationalityEn: "French",
    clubAr: "إنتر ميلان",
    clubEn: "Inter Milan",
    position: { ar: "مهاجم", en: "Striker" },
    era: "2015-الآن",
    active: true,
    bioAr: "مهاجم فرنسي ونجل بطل كأس العالم 1998 ليليان تورام، انضم إلى إنتر ميلان حرًا عام 2023 وشكّل مع لاوتارو مارتينيز ثنائيًا هجوميًا فعّالاً، وصل معه إلى نهائي دوري أبطال أوروبا 2023 ونهائي كأس العالم 2022 مع منتخب فرنسا.",
    bioEn: "French striker and son of 1998 World Cup winner Lilian Thuram, he joined Inter Milan as a free agent in 2023, forming an effective attacking duo with Lautaro Martínez, reaching the 2023 UEFA Champions League final with them and the 2022 FIFA World Cup final with France.",
    achievementsAr: [
      "وصافة كأس العالم 2022 مع فرنسا",
      "وصافة دوري أبطال أوروبا 2022-2023 مع إنتر ميلان",
      "لقب الدوري الإيطالي 2023-2024 مع إنتر ميلان",
      "بطولة أمم أوروبا تحت 19 عامًا 2016 مع فرنسا"
    ],
    achievementsEn: [
      "2022 FIFA World Cup runner-up with France",
      "2022-23 UEFA Champions League runner-up with Inter Milan",
      "2023-24 Serie A title with Inter Milan",
      "UEFA European Under-19 Championship 2016 with France"
    ],
    clubsHistoryAr: ["سوشو", "غانغان", "بوروسيا مونشنغلادباخ", "إنتر ميلان"],
    clubsHistoryEn: ["Sochaux", "Guingamp", "Borussia Mönchengladbach", "Inter Milan"],
    wikiUrlAr: "",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Marcus_Thuram"
  },
  {
    id: "christian-pulisic",
    nameAr: "كريستيان بوليسيتش",
    nameEn: "Christian Pulisic",
    nationalityAr: "أمريكي",
    nationalityEn: "American",
    clubAr: "ميلان",
    clubEn: "AC Milan",
    position: { ar: "جناح / صانع ألعاب", en: "Winger / Attacking Midfielder" },
    era: "2016-الآن",
    active: true,
    bioAr: "لاعب أمريكي يُلقب بـ'كابتن أمريكا' ويُعد أحد أفضل لاعبي كرة القدم في تاريخ الولايات المتحدة. فاز بدوري أبطال أوروبا مع تشيلسي موسم 2020-2021، وانتقل إلى ميلان الإيطالي عام 2023 حيث أصبح لاعبًا أساسيًا ومحوريًا في هجوم الفريق.",
    bioEn: "American player nicknamed 'Captain America' and regarded as one of the greatest players in United States football history. He won the UEFA Champions League with Chelsea in the 2020-21 season, before moving to AC Milan in 2023, where he has become a key and central attacking player.",
    achievementsAr: [
      "لقب دوري أبطال أوروبا 2020-2021 مع تشيلسي",
      "لقب كأس العالم للأندية 2021 مع تشيلسي",
      "ثلاثة ألقاب دوري الأمم الأمريكية الشمالية (كونكاكاف) مع منتخب الولايات المتحدة (2021، 2023، 2024)",
      "هداف تاريخي لمنتخب الولايات المتحدة"
    ],
    achievementsEn: [
      "2020-21 UEFA Champions League title with Chelsea",
      "2021 FIFA Club World Cup title with Chelsea",
      "Three CONCACAF Nations League titles with the United States (2021, 2023, 2024)",
      "One of the United States national team's all-time leading scorers"
    ],
    clubsHistoryAr: ["بوروسيا دورتموند", "تشيلسي", "ميلان"],
    clubsHistoryEn: ["Borussia Dortmund", "Chelsea", "AC Milan"],
    wikiUrlAr: "",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Christian_Pulisic"
  },
  {
    id: "viktor-gyokeres",
    nameAr: "فيكتور غيوكيريش",
    nameEn: "Viktor Gyökeres",
    nationalityAr: "سويدي",
    nationalityEn: "Swedish",
    clubAr: "آرسنال",
    clubEn: "Arsenal",
    position: { ar: "مهاجم", en: "Striker" },
    era: "2015-الآن",
    active: true,
    bioAr: "مهاجم سويدي فرض نفسه هدافًا غزير التسجيل مع سبورتينغ لشبونة البرتغالي، حيث فاز بلقبي الدوري البرتغالي معه، قبل أن ينتقل إلى آرسنال الإنجليزي صيف 2025 بعقد طويل الأمد.",
    bioEn: "Swedish striker who established himself as a prolific goalscorer at Sporting Lisbon, winning two Primeira Liga titles with them, before moving to Arsenal in the summer of 2025 on a long-term contract.",
    achievementsAr: [
      "لقبا الدوري البرتغالي (2023-2024 و2024-2025) مع سبورتينغ لشبونة",
      "هداف الدوري البرتغالي عدة مرات",
      "لقب كأس السوبر البرتغالي مع سبورتينغ لشبونة",
      "أحد أعلى اللاعبين تسجيلاً للأهداف في أوروبا خلال موسم 2024-2025"
    ],
    achievementsEn: [
      "Two Primeira Liga titles (2023-24 and 2024-25) with Sporting Lisbon",
      "Portuguese league top scorer multiple times",
      "Portuguese Super Cup title with Sporting Lisbon",
      "Among Europe's top goalscorers during the 2024-25 season"
    ],
    clubsHistoryAr: ["برومابويكارنا", "برايتون", "سانت باولي (إعارة)", "سوانزي سيتي (إعارة)", "كوفنتري سيتي", "سبورتينغ لشبونة", "آرسنال"],
    clubsHistoryEn: ["Brommapojkarna", "Brighton & Hove Albion", "St. Pauli (loan)", "Swansea City (loan)", "Coventry City", "Sporting Lisbon", "Arsenal"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "sami-khedira",
    nameAr: "سامي خضيرة",
    nameEn: "Sami Khedira",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "وسط", en: "Midfielder" },
    era: "2006-2021",
    active: false,
    bioAr: "لاعب وسط ألماني من أصول تونسية، بطل كأس العالم 2014 مع ألمانيا، لعب لسنوات مؤثرة مع ريال مدريد وفاز معه بدوري أبطال أوروبا، ثم انتقل إلى يوفنتوس الإيطالي وحقق معه عدة ألقاب دوري إيطالي.",
    bioEn: "German midfielder of Tunisian descent, a 2014 World Cup winner with Germany, who spent influential years at Real Madrid winning the UEFA Champions League with them, before moving to Juventus and winning multiple Serie A titles.",
    achievementsAr: [
      "بطولة كأس العالم 2014 مع ألمانيا",
      "لقب دوري أبطال أوروبا 2013-2014 مع ريال مدريد",
      "عدة ألقاب دوري إيطالي مع يوفنتوس",
      "لقب الدوري الإسباني مع ريال مدريد"
    ],
    achievementsEn: [
      "2014 FIFA World Cup title with Germany",
      "2013-14 UEFA Champions League title with Real Madrid",
      "Multiple Serie A titles with Juventus",
      "La Liga title with Real Madrid"
    ],
    clubsHistoryAr: ["شتوتغارت", "ريال مدريد", "يوفنتوس", "هيرتا برلين"],
    clubsHistoryEn: ["VfB Stuttgart", "Real Madrid", "Juventus", "Hertha Berlin"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "bebeto",
    nameAr: "بيبيتو",
    nameEn: "Bebeto",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "مهاجم", en: "Striker" },
    era: "1983-2000",
    active: false,
    bioAr: "مهاجم برازيلي وبطل كأس العالم 1994، اشتهر باحتفاله المميز بتهديج طفل بعد تسجيله في تلك البطولة تكريمًا لابنه المولود حديثًا. شكّل مع روماريو ثنائيًا هجوميًا فتاكًا قاد البرازيل للتتويج بكأس العالم في الولايات المتحدة.",
    bioEn: "Brazilian striker and 1994 World Cup winner, famed for his distinctive 'rocking the baby' goal celebration during that tournament in honor of his newborn son. He formed a lethal attacking partnership with Romário that led Brazil to the World Cup title in the United States.",
    achievementsAr: [
      "بطولة كأس العالم 1994 مع البرازيل",
      "لقب كوبا أمريكا 1989 مع البرازيل",
      "لقب الدوري البرازيلي مع فلامنغو",
      "هداف الدوري الإسباني مع ديبورتيفو لاكورونيا"
    ],
    achievementsEn: [
      "1994 FIFA World Cup title with Brazil",
      "1989 Copa América title with Brazil",
      "Brazilian league title with Flamengo",
      "La Liga top scorer with Deportivo La Coruña"
    ],
    clubsHistoryAr: ["فلومينينسي", "فلامنغو", "ديبورتيفو لاكورونيا", "سيفيا", "فيتوريا (البرازيل)"],
    clubsHistoryEn: ["Fluminense", "Flamengo", "Deportivo La Coruña", "Sevilla", "Vitória (Brazil)"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "taffarel",
    nameAr: "تافاريل",
    nameEn: "Taffarel",
    nationalityAr: "برازيلي",
    nationalityEn: "Brazilian",
    clubAr: "معتزل",
    clubEn: "Retired",
    position: { ar: "حارس مرمى", en: "Goalkeeper" },
    era: "1984-2003",
    active: false,
    bioAr: "حارس مرمى برازيلي يُعد أحد أعظم حراس المرمى في تاريخ البرازيل، كان حارسًا أساسيًا في الفوز بكأس العالم 1994 وشارك في نهائي كأس العالم 1998، ولعب لسنوات مع الإنتر الإيطالي.",
    bioEn: "Brazilian goalkeeper regarded as one of the greatest in his country's history, he was the first-choice goalkeeper in Brazil's 1994 World Cup triumph and played in the 1998 World Cup final, and spent years playing for Inter Milan in Italy.",
    achievementsAr: [
      "بطولة كأس العالم 1994 مع البرازيل",
      "وصافة كأس العالم 1998 مع البرازيل",
      "لقب كوبا أمريكا مرتين مع البرازيل (1989 و1997)",
      "شارك في أربع نهائيات كأس عالم متتالية مع البرازيل (1990-2002)"
    ],
    achievementsEn: [
      "1994 FIFA World Cup title with Brazil",
      "1998 FIFA World Cup runner-up with Brazil",
      "Copa América title twice with Brazil (1989 and 1997)",
      "Part of Brazil's squad at four consecutive World Cups (1990-2002)"
    ],
    clubsHistoryAr: ["إنترناسيونال", "غريميو", "إنتر ميلان", "أتلتيكو مينيرو", "غالاتاسراي"],
    clubsHistoryEn: ["Internacional", "Grêmio", "Inter Milan", "Atlético Mineiro", "Galatasaray"],
    wikiUrlAr: "",
    wikiUrlEn: ""
  },
  {
    id: "hakan-calhanoglu",
    nameAr: "هاكان تشالهان أوغلو",
    nameEn: "Hakan Çalhanoğlu",
    nationalityAr: "تركي",
    nationalityEn: "Turkish",
    clubAr: "إنتر ميلان",
    clubEn: "Inter Milan",
    position: { ar: "وسط", en: "Midfielder" },
    era: "2012-الآن",
    active: true,
    bioAr: "لاعب وسط تركي وقائد منتخب بلاده، وُلد في ألمانيا واختار تمثيل تركيا دوليًا. لعب لباير ليفركوزن وميلان قبل أن ينتقل لغريمه إنتر ميلان عام 2021، ليصبح أحد أهم صناع الألعاب في الدوري الإيطالي ويحقق معه عدة ألقاب دوري.",
    bioEn: "Turkish midfielder and captain of his national team, born in Germany but chose to represent Turkey internationally. He played for Bayer Leverkusen and Milan before moving to rivals Inter Milan in 2021, becoming one of Serie A's most important playmakers and winning multiple league titles with the club.",
    achievementsAr: [
      "عدة ألقاب دوري إيطالي (سيري A) مع إنتر ميلان",
      "قائد منتخب تركيا",
      "وصافة دوري أبطال أوروبا 2022-2023 مع إنتر ميلان",
      "لقب كأس إيطاليا مع إنتر ميلان"
    ],
    achievementsEn: [
      "Multiple Serie A titles with Inter Milan",
      "Captain of the Turkey national team",
      "2022-23 UEFA Champions League runner-up with Inter Milan",
      "Coppa Italia title with Inter Milan"
    ],
    clubsHistoryAr: ["هامبورغ", "باير ليفركوزن", "ميلان", "إنتر ميلان"],
    clubsHistoryEn: ["Hamburger SV", "Bayer Leverkusen", "AC Milan", "Inter Milan"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/خاقان_جال_خان_أوغلي",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Hakan_Çalhanoğlu"
  },
  {
    id: "florian-wirtz",
    nameAr: "فلوريان فيرتس",
    nameEn: "Florian Wirtz",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "ليفربول",
    clubEn: "Liverpool",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder" },
    era: "2020-الآن",
    active: true,
    bioAr: "صانع ألعاب ألماني كان النجم الأبرز في تتويج باير ليفركوزن بلقب الدوري الألماني موسم 2023-2024 دون خسارة أي مباراة، وهو أصغر هداف في تاريخ البوندسليغا. انتقل إلى ليفربول صيف 2025 في صفقة قياسية بريطانية بقيمة 116.5 مليون جنيه إسترليني.",
    bioEn: "German playmaker who was the standout star in Bayer Leverkusen's unbeaten 2023-24 Bundesliga title-winning season, and is the youngest-ever Bundesliga goalscorer. He moved to Liverpool in summer 2025 in a British transfer record deal worth £116.5 million.",
    achievementsAr: [
      "لقب الدوري الألماني 2023-2024 مع باير ليفركوزن (موسم بلا خسارة)",
      "لقب كأس ألمانيا (الثنائية المحلية) 2023-2024 مع باير ليفركوزن",
      "أصغر هداف في تاريخ الدوري الألماني (البوندسليغا)",
      "أفضل لاعب في الدوري الألماني موسمين متتاليين"
    ],
    achievementsEn: [
      "2023-24 Bundesliga title with Bayer Leverkusen (unbeaten season)",
      "2023-24 DFB-Pokal (domestic double) with Bayer Leverkusen",
      "Youngest-ever goalscorer in Bundesliga history",
      "Bundesliga Players' Player of the Year for two consecutive seasons"
    ],
    clubsHistoryAr: ["كولن", "باير ليفركوزن", "ليفربول"],
    clubsHistoryEn: ["1. FC Köln", "Bayer Leverkusen", "Liverpool"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/فلوريان_فيرتز",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Florian_Wirtz"
  },
  {
    id: "jamal-musiala",
    nameAr: "جمال موسيالا",
    nameEn: "Jamal Musiala",
    nationalityAr: "ألماني",
    nationalityEn: "German",
    clubAr: "بايرن ميونخ",
    clubEn: "Bayern Munich",
    position: { ar: "صانع ألعاب", en: "Attacking Midfielder" },
    era: "2019-الآن",
    active: true,
    bioAr: "صانع ألعاب ألماني وُلد لأب نيجيري وأم ألمانية وترعرع في إنجلترا، خرّيج أكاديمية تشيلسي قبل أن ينتقل لبايرن ميونخ عام 2019 ويصبح أحد أهم نجومه، وسجل هدف الحسم في تتويج بايرن بلقب الدوري الألماني موسم 2021-2022.",
    bioEn: "German playmaker, born to a Nigerian father and German mother and raised in England. A Chelsea academy graduate, he moved to Bayern Munich in 2019 and became one of the club's most important stars, scoring the title-clinching goal in the 2021-22 Bundesliga triumph.",
    achievementsAr: [
      "عدة ألقاب دوري ألماني (بوندسليغا) مع بايرن ميونخ",
      "سجل هدف حسم لقب البوندسليغا موسم 2021-2022 أمام بوروسيا دورتموند",
      "جائزة أفضل لاعب شاب في الدوري الألماني",
      "أصغر هداف لبايرن ميونخ في تاريخ دوري أبطال أوروبا"
    ],
    achievementsEn: [
      "Multiple Bundesliga titles with Bayern Munich",
      "Scored the title-clinching goal in the 2021-22 Bundesliga season against Borussia Dortmund",
      "Bundesliga Young Player of the Season award",
      "Bayern Munich's youngest-ever UEFA Champions League goalscorer"
    ],
    clubsHistoryAr: ["تشيلسي", "بايرن ميونخ"],
    clubsHistoryEn: ["Chelsea", "Bayern Munich"],
    wikiUrlAr: "https://ar.wikipedia.org/wiki/جمال_موسيالا",
    wikiUrlEn: "https://en.wikipedia.org/wiki/Jamal_Musiala"
  }
];

// للاستخدام في Node.js أو أي نظام modules:
if (typeof module !== "undefined" && module.exports) {
  module.exports = { players };
}
