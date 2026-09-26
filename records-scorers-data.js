// ================= بيانات: هدافون تاريخيون وأرقام قياسية في كرة القدم =================
// محدّثة لحد 25 سبتمبر 2026. جزئين: topScorers (هدافو كل بطولة على مدار تاريخها) وrecords (أرقام قياسية عامة).
// asOf/status لكل بطولة في topScorers:
//   sourceChecked = القائمة اتراجعت على مصدر في المحادثة
//   knowledge = من معرفتي بدون مراجعة مصدر، ومحتاجة تأكيد خصوصاً الأرقام والترتيب
// أرقام اللاعبين النشطين (زي محمد صلاح ورونالدو وميسي) بيتغيروا باستمرار، فحطيت "+" أو ملاحظة توضح إن الرقم تقريبي.
// كل record في records ليه status برضه بنفس المعنى. الأرقام القياسية المتنازع عليها (زي أسرع هدف/هاتريك) اتحطلها ملاحظة تحذير صريحة.
// لو هتستخدم أي رقم من dataStatus: knowledge في سؤال مهم في اللعبة، يُفضّل تتأكد منه الأول.

const topScorers = [
  {
    id: "premier-league-top-scorers",
    competitionAr: "هدافو الدوري الإنجليزي الممتاز (كل العصور)",
    competitionEn: "Premier League all-time top scorers",
    asOf: "أبريل 2026",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "آلان شيرر", nameEn: "Alan Shearer", goals: "260", clubsAr: "بلاكبيرن، نيوكاسل", clubsEn: "Blackburn, Newcastle" },
      { nameAr: "هاري كين", nameEn: "Harry Kane", goals: "213", clubsAr: "توتنهام، بايرن ميونخ", clubsEn: "Tottenham, Bayern Munich" },
      { nameAr: "واين روني", nameEn: "Wayne Rooney", goals: "208", clubsAr: "إيفرتون، مانشستر يونايتد", clubsEn: "Everton, Manchester United" },
      { nameAr: "محمد صلاح", nameEn: "Mohamed Salah", goals: "193+", clubsAr: "ليفربول", clubsEn: "Liverpool" },
      { nameAr: "أندرو كول", nameEn: "Andrew Cole", goals: "187", clubsAr: "نيوكاسل وأندية تانية", clubsEn: "Newcastle and others" },
      { nameAr: "سيرجيو أجويرو", nameEn: "Sergio Agüero", goals: "184", clubsAr: "مانشستر سيتي", clubsEn: "Manchester City" },
      { nameAr: "فرانك لامبارد", nameEn: "Frank Lampard", goals: "177", clubsAr: "تشيلسي وأندية تانية", clubsEn: "Chelsea and others" },
      { nameAr: "تييري هنري", nameEn: "Thierry Henry", goals: "175", clubsAr: "أرسنال", clubsEn: "Arsenal" },
      { nameAr: "روبي فاولر", nameEn: "Robbie Fowler", goals: "163", clubsAr: "ليفربول وأندية تانية", clubsEn: "Liverpool and others" },
      { nameAr: "جيرمين ديفو", nameEn: "Jermain Defoe", goals: "162", clubsAr: "توتنهام وأندية تانية", clubsEn: "Tottenham and others" },
    ],
    notesAr: ["شيرر هو صاحب الرقم القياسي، وهو الوحيد اللي كسر حاجز الـ100 هدف مع ناديين مختلفين (بلاكبيرن ونيوكاسل).", "رقم صلاح تقريبي لأنه رقم متغير أسبوعياً، وهو غادر ليفربول في صيف 2026 بعد الموسم اللي فات. راجع الرقم الدقيق لو محتاجه بالظبط."],
    notesEn: ["Shearer holds the all-time record, and is the only player to reach 100+ goals for two different clubs (Blackburn and Newcastle).", "Salah's figure is approximate since it changes weekly; he left Liverpool in summer 2026 after the 2025-26 season. Verify the exact number if needed."]
  },
  {
    id: "la-liga-top-scorers",
    competitionAr: "هدافو الدوري الإسباني (كل العصور)",
    competitionEn: "La Liga all-time top scorers",
    asOf: "معرفتي العامة",
    dataStatus: "knowledge",
    scorers: [
      { nameAr: "ليونيل ميسي", nameEn: "Lionel Messi", goals: "474", clubsAr: "برشلونة", clubsEn: "Barcelona" },
      { nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", goals: "311", clubsAr: "ريال مدريد", clubsEn: "Real Madrid" },
      { nameAr: "تيلمو زارا", nameEn: "Telmo Zarra", goals: "251", clubsAr: "أتلتيك بلباو", clubsEn: "Athletic Bilbao" },
      { nameAr: "كريم بنزيما", nameEn: "Karim Benzema", goals: "238", clubsAr: "ريال مدريد", clubsEn: "Real Madrid" },
      { nameAr: "هوجو سانتشيز", nameEn: "Hugo Sánchez", goals: "234", clubsAr: "ريال مدريد وأندية تانية", clubsEn: "Real Madrid and others" },
      { nameAr: "رؤول جونزاليس", nameEn: "Raúl González", goals: "228", clubsAr: "ريال مدريد", clubsEn: "Real Madrid" },
    ],
    notesAr: ["ميسي صاحب الرقم القياسي بفارق كبير، ولعب كل مشواره في لاليجا مع برشلونة."],
    notesEn: ["Messi holds the record by a large margin, having played his entire La Liga career at Barcelona."]
  },
  {
    id: "serie-a-top-scorers",
    competitionAr: "هدافو الدوري الإيطالي (كل العصور)",
    competitionEn: "Serie A all-time top scorers",
    asOf: "معرفتي العامة",
    dataStatus: "knowledge",
    scorers: [
      { nameAr: "سيلفيو بيولا", nameEn: "Silvio Piola", goals: "274", clubsAr: "بريشيا ولاتسيو وأندية تانية", clubsEn: "Brescia, Lazio and others" },
      { nameAr: "فرانشيسكو توتي", nameEn: "Francesco Totti", goals: "250", clubsAr: "روما", clubsEn: "Roma" },
      { nameAr: "جوزيبي مياتزا", nameEn: "Giuseppe Meazza", goals: "216", clubsAr: "إنتر وميلان", clubsEn: "Inter and Milan" },
      { nameAr: "جوزيبي سيجناتوري", nameEn: "Giuseppe Signori", goals: "193", clubsAr: "لاتسيو وأندية تانية", clubsEn: "Lazio and others" },
      { nameAr: "جوناتان زيبينا", nameEn: "Gunnar Nordahl", goals: "187", clubsAr: "ميلان وأندية تانية", clubsEn: "Milan and others" },
    ],
    notesAr: ["ملعب سان سيرو في ميلانو سُمي رسمياً ستاديو جوزيبي مياتزا تكريماً له."],
    notesEn: ["Milan's San Siro is officially named 'Stadio Giuseppe Meazza' in his honour."]
  },
  {
    id: "bundesliga-top-scorers",
    competitionAr: "هدافو الدوري الألماني (البوندسليجا، كل العصور)",
    competitionEn: "Bundesliga all-time top scorers",
    asOf: "معرفتي العامة",
    dataStatus: "knowledge",
    scorers: [
      { nameAr: "روبرت ليفاندوفسكي", nameEn: "Robert Lewandowski", goals: "312", clubsAr: "دورتموند وبايرن ميونخ", clubsEn: "Dortmund and Bayern Munich" },
      { nameAr: "جيرد مولر", nameEn: "Gerd Müller", goals: "365", clubsAr: "بايرن ميونخ", clubsEn: "Bayern Munich" },
      { nameAr: "كلاوس فيشر", nameEn: "Klaus Fischer", goals: "268", clubsAr: "شالكه وأندية تانية", clubsEn: "Schalke and others" },
    ],
    notesAr: ["مولر صاحب الرقم القياسي رغم إنه اعتزل من زمان، ورقمه صعب يتكسر. ليفاندوفسكي أقرب لاعب حديث ليه."],
    notesEn: ["Müller holds the record despite retiring long ago, and it is a hard mark to break. Lewandowski is the closest modern player."]
  },
  {
    id: "ligue1-top-scorers",
    competitionAr: "هدافو الدوري الفرنسي (كل العصور)",
    competitionEn: "Ligue 1 all-time top scorers",
    asOf: "معرفتي العامة",
    dataStatus: "knowledge",
    scorers: [
      { nameAr: "ديليو أونيس", nameEn: "Delio Onnis", goals: "299", clubsAr: "ريمس، موناكو، تور، طولون", clubsEn: "Reims, Monaco, Tours, Toulon" },
      { nameAr: "جان بيير باباكار", nameEn: "Jean-Pierre Papin", goals: "182", clubsAr: "بريست، مارسيليا وأندية تانية", clubsEn: "Brest, Marseille and others" },
    ],
    notesAr: ["أونيس أرجنتيني الأصل ويحمل الرقم القياسي، وهو أقل شهرة من هدافي الدوريات التانية."],
    notesEn: ["Onnis (Argentine-born) holds the record but is less widely known than other leagues' record scorers."]
  },
  {
    id: "primeira-liga-top-scorers",
    competitionAr: "هدافو الدوري البرتغالي (كل العصور)",
    competitionEn: "Primeira Liga all-time top scorers",
    asOf: "معرفتي العامة",
    dataStatus: "knowledge",
    scorers: [
      { nameAr: "فرنانتيس بيريز (فرنانتو)", nameEn: "Fernando Peyroteo", goals: "331", clubsAr: "سبورتينج لشبونة", clubsEn: "Sporting CP" },
      { nameAr: "إيوسيبيو", nameEn: "Eusébio", goals: "317", clubsAr: "بنفيكا", clubsEn: "Benfica" },
    ],
    notesAr: ["إيوسيبيو (الفهد الأسود) هو أشهر هداف في تاريخ الكرة البرتغالية، وكسب الكرة الذهبية في 1965."],
    notesEn: ["Eusébio ('The Black Panther') is the most famous scorer in Portuguese football history and won the Ballon d'Or in 1965."]
  },
  {
    id: "egyptian-league-top-scorers",
    competitionAr: "هدافو الدوري المصري (كل العصور)",
    competitionEn: "Egyptian Premier League all-time top scorers",
    asOf: "معرفتي العامة، اتأكدت من مصدر في المحادثة",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "حسن الشاذلي", nameEn: "Hassan El-Shazly", goals: "176", clubsAr: "ترسانة", clubsEn: "Tersana" },
      { nameAr: "حسام حسن", nameEn: "Hossam Hassan", goals: "190+", clubsAr: "الزمالك والأهلي وأندية تانية", clubsEn: "Zamalek, Al Ahly and others" },
    ],
    notesAr: ["حسن الشاذلي هو الهداف التاريخي الرسمي للدوري المصري بـ176 هدف كلهم مع ترسانة، وهو صاحب أكبر رقم في موسم واحد كمان (34 هدف في 1974-75). حسام حسن أشهر إعلامياً ولعب لعدد أكبر من الأندية، لكن رقمه الدقيق في الدوري تحديداً غير مؤكد وأقل من رقم الشاذلي حسب المصادر المتاحة."],
    notesEn: ["Hassan El-Shazly is the Egyptian league's official all-time top scorer with 176 goals, all for Tersana, and also holds the single-season record (34 goals in 1974-75). Hossam Hassan is more widely known and played for more clubs, but his exact league tally is unconfirmed and appears lower than El-Shazly's per available sources."]
  },
  {
    id: "ucl-top-scorers",
    competitionAr: "هدافو دوري أبطال أوروبا (كل العصور)",
    competitionEn: "UEFA Champions League all-time top scorers (incl. European Cup)",
    asOf: "معرفتي العامة",
    dataStatus: "knowledge",
    scorers: [
      { nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", goals: "140", clubsAr: "مانشستر يونايتد، ريال مدريد، يوفنتوس", clubsEn: "Manchester United, Real Madrid, Juventus" },
      { nameAr: "ليونيل ميسي", nameEn: "Lionel Messi", goals: "129", clubsAr: "برشلونة، باريس سان جيرمان", clubsEn: "Barcelona, PSG" },
      { nameAr: "روبرت ليفاندوفسكي", nameEn: "Robert Lewandowski", goals: "100+", clubsAr: "دورتموند، بايرن ميونخ، برشلونة", clubsEn: "Dortmund, Bayern Munich, Barcelona" },
      { nameAr: "كريم بنزيما", nameEn: "Karim Benzema", goals: "90", clubsAr: "ريال مدريد", clubsEn: "Real Madrid" },
      { nameAr: "راؤول جونزاليس", nameEn: "Raúl González", goals: "71", clubsAr: "ريال مدريد", clubsEn: "Real Madrid" },
    ],
    notesAr: ["رونالدو وميسي بعيدين جداً عن أقرب لاعب تاني، وده رقم قياسي صعب يتكسر."],
    notesEn: ["Ronaldo and Messi are far ahead of the next closest player, a record that is very hard to break."]
  },
  {
    id: "world-cup-top-scorers",
    competitionAr: "هدافو كأس العالم (كل العصور)",
    competitionEn: "FIFA World Cup all-time top scorers",
    asOf: "بعد نهاية نسخة 2026",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "كيليان مبابي", nameEn: "Kylian Mbappé", goals: "22", clubsAr: "فرنسا", clubsEn: "France" },
      { nameAr: "ليونيل ميسي", nameEn: "Lionel Messi", goals: "21", clubsAr: "الأرجنتين", clubsEn: "Argentina" },
      { nameAr: "ميروسلاف كلوزه", nameEn: "Miroslav Klose", goals: "16", clubsAr: "ألمانيا", clubsEn: "Germany" },
      { nameAr: "رونالدو نازاريو", nameEn: "Ronaldo (Brazil)", goals: "15", clubsAr: "البرازيل", clubsEn: "Brazil" },
      { nameAr: "جيرد مولر", nameEn: "Gerd Müller", goals: "14", clubsAr: "ألمانيا الغربية", clubsEn: "West Germany" },
      { nameAr: "جوست فونتين", nameEn: "Just Fontaine", goals: "13", clubsAr: "فرنسا", clubsEn: "France" },
    ],
    notesAr: ["الرقم اتغير في نسخة 2026 نفسها: ميسي كسر رقم كلوزه (16) الأول بـ4 أهداف ضد النمسا ليوصل لـ18، بس مبابي عدّاه بعدها وخلص البطولة بـ22 هدف (منهم 10 في نسخة 2026 وكسب بيها الحذاء الذهبي للمرة الثانية على التوالي). كلوزه سجل الـ16 هدف بتوعه في 4 نسخ مختلفة (2002 لـ 2014)، وفونتين سجل الـ13 في نسخة واحدة بس (1958) وده رقم قياسي منفصل."],
    notesEn: ["The record changed within the 2026 tournament itself: Messi broke Klose's old record (16) with a brace against Austria to reach 18, but Mbappé then passed him and finished the tournament with 22 (10 of them in 2026, winning his second straight Golden Boot). Klose's 16 came across four editions (2002–2014); Fontaine's 13 came in a single edition (1958) — a separate record."]
  },
  {
    id: "euro-top-scorers",
    competitionAr: "هدافو بطولة أمم أوروبا (اليورو، كل العصور)",
    competitionEn: "UEFA European Championship all-time top scorers",
    asOf: "معرفتي العامة",
    dataStatus: "knowledge",
    scorers: [
      { nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", goals: "14", clubsAr: "البرتغال", clubsEn: "Portugal" },
      { nameAr: "ميشيل بلاتيني", nameEn: "Michel Platini", goals: "9", clubsAr: "فرنسا", clubsEn: "France" },
      { nameAr: "أنطوان جريزمان", nameEn: "Antoine Griezmann", goals: "8", clubsAr: "فرنسا", clubsEn: "France" },
    ],
    notesAr: ["بلاتيني سجل 9 أهدافه كلها في نسخة واحدة (1984)، وده رقم قياسي منفصل لأكتر أهداف في نسخة واحدة."],
    notesEn: ["Platini's 9 goals all came in a single edition (1984) — a separate record for most goals in one tournament."]
  },
  {
    id: "afcon-top-scorers",
    competitionAr: "هدافو كأس الأمم الأفريقية (كل العصور)",
    competitionEn: "Africa Cup of Nations all-time top scorers",
    asOf: "معرفتي العامة",
    dataStatus: "knowledge",
    scorers: [
      { nameAr: "صامويل إيتو", nameEn: "Samuel Eto'o", goals: "18", clubsAr: "الكاميرون", clubsEn: "Cameroon" },
      { nameAr: "لوران بوكو", nameEn: "Laurent Pokou", goals: "14", clubsAr: "كوت ديفوار", clubsEn: "Ivory Coast" },
      { nameAr: "رشيدي يكيني", nameEn: "Rashidi Yekini", goals: "13", clubsAr: "نيجيريا", clubsEn: "Nigeria" },
    ],
    notesAr: [],
    notesEn: []
  },
];

// clubTopScorers: هداف كل نادي كبير على مدار تاريخه (كل المسابقات مع النادي، مش الدوري بس)، لأشهر 12 نادي.
// competitionScope هنا يعني "كل المسابقات مع النادي" مش بطولة واحدة. clubId بيطابق نفس الـ id في clubs-data.js لما يكون موجود.
const clubTopScorers = [
  {
    clubId: "real-madrid", clubAr: "ريال مدريد", clubEn: "Real Madrid",
    nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", goals: "450+", years: "2009-2018",
    dataStatus: "knowledge", noteAr: "الرقم تقريبي وموجود خلاف بسيط بين المصادر حسب اللي بيتحسب معاه.", noteEn: "Figure is approximate; sources vary slightly depending on what's counted."
  },
  {
    clubId: "barcelona", clubAr: "برشلونة", clubEn: "FC Barcelona",
    nameAr: "ليونيل ميسي", nameEn: "Lionel Messi", goals: "672", years: "2004-2021",
    dataStatus: "knowledge", noteAr: "رقم مشهور جداً وبفارق كبير عن أقرب لاعب تاني (سواريز في المركز الثاني).", noteEn: "Very well-known figure, far ahead of the next name (Luis Suárez is second)."
  },
  {
    clubId: "manchester-united", clubAr: "مانشستر يونايتد", clubEn: "Manchester United",
    nameAr: "واين روني", nameEn: "Wayne Rooney", goals: "253", years: "2004-2017",
    dataStatus: "knowledge", noteAr: "قدام بوبي تشارلتون (249 هدف) اللي كان صاحب الرقم قبله.", noteEn: "Ahead of Bobby Charlton (249), the previous record holder."
  },
  {
    clubId: "liverpool", clubAr: "ليفربول", clubEn: "Liverpool",
    nameAr: "إيان راش", nameEn: "Ian Rush", goals: "346", years: "1980-1996 (فترتين)",
    dataStatus: "sourceChecked", noteAr: "محمد صلاح كان تالت هداف تاريخي للنادي برقم حوالي 250 وقت رحيله في صيف 2026، من غير ما يوصل لرقم راش.", noteEn: "Mohamed Salah was third on the club's all-time list with around 250 goals when he left in summer 2026, short of Rush's record."
  },
  {
    clubId: "arsenal", clubAr: "أرسنال", clubEn: "Arsenal",
    nameAr: "تييري هنري", nameEn: "Thierry Henry", goals: "228", years: "1999-2007",
    dataStatus: "knowledge", noteAr: "", noteEn: ""
  },
  {
    clubId: "chelsea", clubAr: "تشيلسي", clubEn: "Chelsea",
    nameAr: "فرانك لامبارد", nameEn: "Frank Lampard", goals: "211", years: "2001-2014",
    dataStatus: "knowledge", noteAr: "", noteEn: ""
  },
  {
    clubId: "manchester-city", clubAr: "مانشستر سيتي", clubEn: "Manchester City",
    nameAr: "سيرجيو أجويرو", nameEn: "Sergio Agüero", goals: "260", years: "2011-2021",
    dataStatus: "knowledge", noteAr: "", noteEn: ""
  },
  {
    clubId: "tottenham", clubAr: "توتنهام هوتسبير", clubEn: "Tottenham Hotspur",
    nameAr: "هاري كين", nameEn: "Harry Kane", goals: "280+", years: "2009-2023",
    dataStatus: "knowledge", noteAr: "قدام جيمي جرايفز اللي كان صاحب الرقم لعقود طويلة.", noteEn: "Overtook Jimmy Greaves, who held the record for decades."
  },
  {
    clubId: "bayern-munich", clubAr: "بايرن ميونخ", clubEn: "Bayern Munich",
    nameAr: "جيرد مولر", nameEn: "Gerd Müller", goals: "566", years: "1964-1979",
    dataStatus: "knowledge", noteAr: "رقم كل المسابقات مع بايرن، مش الدوري الألماني بس (اللي فيه 365 هدف).", noteEn: "Goals across all competitions for Bayern, not just the Bundesliga (where his tally is 365)."
  },
  {
    clubId: "juventus", clubAr: "يوفنتوس", clubEn: "Juventus",
    nameAr: "أليساندرو دل بييرو", nameEn: "Alessandro Del Piero", goals: "290", years: "1993-2012",
    dataStatus: "knowledge", noteAr: "", noteEn: ""
  },
  {
    clubId: "paris-saint-germain", clubAr: "باريس سان جيرمان", clubEn: "Paris Saint-Germain",
    nameAr: "كيليان مبابي", nameEn: "Kylian Mbappé", goals: "256", years: "2017-2024",
    dataStatus: "knowledge", noteAr: "قدام إدينسون كافاني اللي كان صاحب الرقم قبله.", noteEn: "Overtook Edinson Cavani, the previous record holder."
  },
  {
    clubId: null, clubAr: "الأهلي والزمالك (مصر)", clubEn: "Al Ahly and Zamalek (Egypt)",
    nameAr: "غير مؤكد", nameEn: "Not confirmed", goals: "", years: "",
    dataStatus: "knowledge", noteAr: "مش متأكد من الهداف التاريخي الرسمي لكل نادي على مدار كل تاريخه (كل المسابقات)، فسبتها فاضية بدل ما أدي رقم غلط. هداف الدوري المصري (حسن الشاذلي) موجود في topScorers فوق.", noteEn: "Not confident about each club's official all-time top scorer across every competition, so left blank rather than guess. The Egyptian league's top scorer (Hassan El-Shazly) is listed above in topScorers."
  },
];

// records: كل عنصر = حقيقة واحدة بس، بمجال واحد واضح في category، عشان الإجابة تبقى قيمة واحدة نظيفة تقدر تنادي عليها مباشرة في الكود:
//   holderAr/holderEn = مين (اسم بس، من غير أرقام ولا سياق)
//   valueAr/valueEn = الرقم/القياس بس (من غير اسم ولا سياق)
//   contextAr/contextEn = تفاصيل إضافية اختيارية للعرض، مش جزء من الإجابة الأساسية
// لو حقيقة فيها إجابتين مختلفتين حسب المجال (زي "أسرع هاتريك في دوري كبير" و"أسرع هاتريك على الإطلاق")، اتقسمت لعنصرين منفصلين بـ id وcategory مختلفين، بدل ما تتلخبط في إجابة واحدة.
// worldCupGoldenBoot: هداف كل نسخة كأس عالم لوحدها (23 نسخة، 1930-2026). كل عنصر بسنة واحدة بس، غير هدافو كأس العالم التاريخيين في topScorers فوق.
const worldCupGoldenBoot = [
  {
    year: 1930,
    nameAr: "جييرمو ستابيلي", nameEn: "Guillermo Stábile",
    countryAr: "الأرجنتين", countryEn: "Argentina",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 1934,
    nameAr: "أولدريش نيدلي", nameEn: "Oldřich Nejedlý",
    countryAr: "تشيكوسلوفاكيا", countryEn: "Czechoslovakia",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1938,
    nameAr: "ليونيداس", nameEn: "Leônidas",
    countryAr: "البرازيل", countryEn: "Brazil",
    tied: false,
    goals: 7,
    dataStatus: "sourceChecked"
  },
  {
    year: 1950,
    nameAr: "أديمير", nameEn: "Ademir",
    countryAr: "البرازيل", countryEn: "Brazil",
    tied: false,
    goals: 9,
    dataStatus: "sourceChecked"
  },
  {
    year: 1954,
    nameAr: "شاندور كوتشيش", nameEn: "Sándor Kocsis",
    countryAr: "المجر", countryEn: "Hungary",
    tied: false,
    goals: 11,
    dataStatus: "sourceChecked"
  },
  {
    year: 1958,
    nameAr: "جوست فونتين", nameEn: "Just Fontaine",
    countryAr: "فرنسا", countryEn: "France",
    tied: false,
    goals: 13,
    dataStatus: "sourceChecked"
  },
  {
    year: 1962,
    nameAr: "فلوريان ألبرت وفالنتين إيفانوف وجارينشا وفافا ودرازان يركوفيتش وليونيل سانتشيز",
    nameEn: "Florian Albert / Valentin Ivanov / Garrincha / Vavá / Dražan Jerković / Leonel Sánchez",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "فلوريان ألبرت", nameEn: "Florian Albert", countryAr: "المجر", countryEn: "Hungary" }, { nameAr: "فالنتين إيفانوف", nameEn: "Valentin Ivanov", countryAr: "الاتحاد السوفيتي", countryEn: "Soviet Union" }, { nameAr: "جارينشا", nameEn: "Garrincha", countryAr: "البرازيل", countryEn: "Brazil" }, { nameAr: "فافا", nameEn: "Vavá", countryAr: "البرازيل", countryEn: "Brazil" }, { nameAr: "درازان يركوفيتش", nameEn: "Dražan Jerković", countryAr: "يوغوسلافيا", countryEn: "Yugoslavia" }, { nameAr: "ليونيل سانتشيز", nameEn: "Leonel Sánchez", countryAr: "تشيلي", countryEn: "Chile" }],
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1966,
    nameAr: "يوسيبيو", nameEn: "Eusébio",
    countryAr: "البرتغال", countryEn: "Portugal",
    tied: false,
    goals: 9,
    dataStatus: "sourceChecked"
  },
  {
    year: 1970,
    nameAr: "جيرد مولر", nameEn: "Gerd Müller",
    countryAr: "ألمانيا الغربية", countryEn: "West Germany",
    tied: false,
    goals: 10,
    dataStatus: "sourceChecked"
  },
  {
    year: 1974,
    nameAr: "جرزيجوش لاتو", nameEn: "Grzegorz Lato",
    countryAr: "بولندا", countryEn: "Poland",
    tied: false,
    goals: 7,
    dataStatus: "sourceChecked"
  },
  {
    year: 1978,
    nameAr: "ماريو كيمبس", nameEn: "Mario Kempes",
    countryAr: "الأرجنتين", countryEn: "Argentina",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1982,
    nameAr: "باولو روسي", nameEn: "Paolo Rossi",
    countryAr: "إيطاليا", countryEn: "Italy",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1986,
    nameAr: "جاري لينيكر", nameEn: "Gary Lineker",
    countryAr: "إنجلترا", countryEn: "England",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1990,
    nameAr: "سالفاتوري سكيلاتشي", nameEn: "Salvatore Schillaci",
    countryAr: "إيطاليا", countryEn: "Italy",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1994,
    nameAr: "أوليج سالينكو وهريستو ستويتشكوف",
    nameEn: "Oleg Salenko / Hristo Stoichkov",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "أوليج سالينكو", nameEn: "Oleg Salenko", countryAr: "روسيا", countryEn: "Russia" }, { nameAr: "هريستو ستويتشكوف", nameEn: "Hristo Stoichkov", countryAr: "بلغاريا", countryEn: "Bulgaria" }],
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1998,
    nameAr: "دافور شوكر", nameEn: "Davor Šuker",
    countryAr: "كرواتيا", countryEn: "Croatia",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 2002,
    nameAr: "رونالدو نازاريو", nameEn: "Ronaldo",
    countryAr: "البرازيل", countryEn: "Brazil",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 2006,
    nameAr: "ميروسلاف كلوزه", nameEn: "Miroslav Klose",
    countryAr: "ألمانيا", countryEn: "Germany",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2010,
    nameAr: "توماس مولر", nameEn: "Thomas Müller",
    countryAr: "ألمانيا", countryEn: "Germany",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2014,
    nameAr: "خاميس رودريجيز", nameEn: "James Rodríguez",
    countryAr: "كولومبيا", countryEn: "Colombia",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 2018,
    nameAr: "هاري كين", nameEn: "Harry Kane",
    countryAr: "إنجلترا", countryEn: "England",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 2022,
    nameAr: "كيليان مبابي", nameEn: "Kylian Mbappé",
    countryAr: "فرنسا", countryEn: "France",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 2026,
    nameAr: "كيليان مبابي", nameEn: "Kylian Mbappé",
    countryAr: "فرنسا", countryEn: "France",
    tied: false,
    goals: 10,
    dataStatus: "sourceChecked"
  },
];

// euroGoldenBoot: هداف كل نسخة يورو لوحدها (17 نسخة، 1960-2024). قبل 1996 مكانش فيه جايزة رسمية بالاسم، بس دي أرقام الهداف الفعلي في كل نسخة.
const euroGoldenBoot = [
  {
    year: 1960,
    nameAr: "ميلان جاليتش وفرانسوا أوت وفالنتين إيفانوف ودرازان يركوفيتش وفيكتور بونيدلنيك",
    nameEn: "Milan Galić / François Heutte / Valentin Ivanov / Dražan Jerković / Viktor Ponedelnik",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "ميلان جاليتش", nameEn: "Milan Galić", countryAr: "يوغوسلافيا", countryEn: "Yugoslavia" }, { nameAr: "فرانسوا أوت", nameEn: "François Heutte", countryAr: "فرنسا", countryEn: "France" }, { nameAr: "فالنتين إيفانوف", nameEn: "Valentin Ivanov", countryAr: "الاتحاد السوفيتي", countryEn: "Soviet Union" }, { nameAr: "درازان يركوفيتش", nameEn: "Dražan Jerković", countryAr: "يوغوسلافيا", countryEn: "Yugoslavia" }, { nameAr: "فيكتور بونيدلنيك", nameEn: "Viktor Ponedelnik", countryAr: "الاتحاد السوفيتي", countryEn: "Soviet Union" }],
    goals: 2,
    dataStatus: "sourceChecked"
  },
  {
    year: 1964,
    nameAr: "خيسوس بيريدا وفيرينتس بيني وديزو نوفاك",
    nameEn: "Jesús María Pereda / Ferenc Bene / Dezső Novák",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "خيسوس بيريدا", nameEn: "Jesús María Pereda", countryAr: "إسبانيا", countryEn: "Spain" }, { nameAr: "فيرينتس بيني", nameEn: "Ferenc Bene", countryAr: "المجر", countryEn: "Hungary" }, { nameAr: "ديزو نوفاك", nameEn: "Dezső Novák", countryAr: "المجر", countryEn: "Hungary" }],
    goals: 2,
    dataStatus: "sourceChecked"
  },
  {
    year: 1968,
    nameAr: "دراجان دجاييتش", nameEn: "Dragan Džajić",
    countryAr: "يوغوسلافيا", countryEn: "Yugoslavia",
    tied: false,
    goals: 2,
    dataStatus: "sourceChecked"
  },
  {
    year: 1972,
    nameAr: "جيرد مولر", nameEn: "Gerd Müller",
    countryAr: "ألمانيا الغربية", countryEn: "West Germany",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1976,
    nameAr: "ديتر مولر", nameEn: "Dieter Müller",
    countryAr: "ألمانيا الغربية", countryEn: "West Germany",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1980,
    nameAr: "كلاوس ألوفس", nameEn: "Klaus Allofs",
    countryAr: "ألمانيا الغربية", countryEn: "West Germany",
    tied: false,
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 1984,
    nameAr: "ميشيل بلاتيني", nameEn: "Michel Platini",
    countryAr: "فرنسا", countryEn: "France",
    tied: false,
    goals: 9,
    dataStatus: "sourceChecked"
  },
  {
    year: 1988,
    nameAr: "ماركو فان باستن", nameEn: "Marco van Basten",
    countryAr: "هولندا", countryEn: "Netherlands",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1992,
    nameAr: "هنريك لارسن وكارل هاينز ريدله ودينيس بيركامب وتوماس برولين",
    nameEn: "Henrik Larsen / Karl-Heinz Riedle / Dennis Bergkamp / Tomas Brolin",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "هنريك لارسن", nameEn: "Henrik Larsen", countryAr: "الدنمارك", countryEn: "Denmark" }, { nameAr: "كارل هاينز ريدله", nameEn: "Karl-Heinz Riedle", countryAr: "ألمانيا", countryEn: "Germany" }, { nameAr: "دينيس بيركامب", nameEn: "Dennis Bergkamp", countryAr: "هولندا", countryEn: "Netherlands" }, { nameAr: "توماس برولين", nameEn: "Tomas Brolin", countryAr: "السويد", countryEn: "Sweden" }],
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 1996,
    nameAr: "آلان شيرر", nameEn: "Alan Shearer",
    countryAr: "إنجلترا", countryEn: "England",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2000,
    nameAr: "باتريك كلويفرت وسافو ميلوشيفيتش",
    nameEn: "Patrick Kluivert / Savo Milošević",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "باتريك كلويفرت", nameEn: "Patrick Kluivert", countryAr: "هولندا", countryEn: "Netherlands" }, { nameAr: "سافو ميلوشيفيتش", nameEn: "Savo Milošević", countryAr: "يوغوسلافيا", countryEn: "Yugoslavia" }],
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2004,
    nameAr: "ميلان باروش", nameEn: "Milan Baroš",
    countryAr: "التشيك", countryEn: "Czech Republic",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2008,
    nameAr: "ديفيد فيا", nameEn: "David Villa",
    countryAr: "إسبانيا", countryEn: "Spain",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 2012,
    nameAr: "فرناندو توريس وآلان دزاجويف وماريو جوميز وماريو ماندجوكيتش وماريو بالوتيلي وكريستيانو رونالدو",
    nameEn: "Fernando Torres / Alan Dzagoev / Mario Gómez / Mario Mandžukić / Mario Balotelli / Cristiano Ronaldo",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "فرناندو توريس", nameEn: "Fernando Torres", countryAr: "إسبانيا", countryEn: "Spain" }, { nameAr: "آلان دزاجويف", nameEn: "Alan Dzagoev", countryAr: "روسيا", countryEn: "Russia" }, { nameAr: "ماريو جوميز", nameEn: "Mario Gómez", countryAr: "ألمانيا", countryEn: "Germany" }, { nameAr: "ماريو ماندجوكيتش", nameEn: "Mario Mandžukić", countryAr: "كرواتيا", countryEn: "Croatia" }, { nameAr: "ماريو بالوتيلي", nameEn: "Mario Balotelli", countryAr: "إيطاليا", countryEn: "Italy" }, { nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", countryAr: "البرتغال", countryEn: "Portugal" }],
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 2016,
    nameAr: "أنطوان جريزمان", nameEn: "Antoine Griezmann",
    countryAr: "فرنسا", countryEn: "France",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 2020,
    nameAr: "كريستيانو رونالدو وباتريك شيك",
    nameEn: "Cristiano Ronaldo / Patrik Schick",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", countryAr: "البرتغال", countryEn: "Portugal" }, { nameAr: "باتريك شيك", nameEn: "Patrik Schick", countryAr: "التشيك", countryEn: "Czech Republic" }],
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2024,
    nameAr: "كودي جاكبو وهاري كين وجمال موسيالا وجورجيس ميكاوتادزي وداني أولمو وإيفان شرانتس",
    nameEn: "Cody Gakpo / Harry Kane / Jamal Musiala / Georges Mikautadze / Dani Olmo / Ivan Schranz",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "كودي جاكبو", nameEn: "Cody Gakpo", countryAr: "هولندا", countryEn: "Netherlands" }, { nameAr: "هاري كين", nameEn: "Harry Kane", countryAr: "إنجلترا", countryEn: "England" }, { nameAr: "جمال موسيالا", nameEn: "Jamal Musiala", countryAr: "ألمانيا", countryEn: "Germany" }, { nameAr: "جورجيس ميكاوتادزي", nameEn: "Georges Mikautadze", countryAr: "جورجيا", countryEn: "Georgia" }, { nameAr: "داني أولمو", nameEn: "Dani Olmo", countryAr: "إسبانيا", countryEn: "Spain" }, { nameAr: "إيفان شرانتس", nameEn: "Ivan Schranz", countryAr: "سلوفاكيا", countryEn: "Slovakia" }],
    goals: 3,
    dataStatus: "sourceChecked"
  },
];

// afconGoldenBoot: هداف كل نسخة أمم أفريقيا لوحدها (34 نسخة مؤكدة، 1957-2023). نسخة 2025 (المغرب) لسه مؤقتة/غير مؤكدة النتيجة النهائية وقت كتابة الملف، فسبتها برة القايمة، والمعلومة الأولية موجودة في topScorers فوق (إيتو صاحب الرقم التاريخي).
const afconGoldenBoot = [
  {
    year: 1957,
    nameAr: "العطار (الديبا)", nameEn: "Ad-Diba (El-Attar)",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1959,
    nameAr: "محمود الجوهري", nameEn: "Mahmoud El-Gohary",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 1962,
    nameAr: "عبد الفتاح بدوي ومنجستو ووركو",
    nameEn: "Abdelfatah Badawi / Mengistu Worku",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "عبد الفتاح بدوي", nameEn: "Abdelfatah Badawi", countryAr: "مصر", countryEn: "Egypt" }, { nameAr: "منجستو ووركو", nameEn: "Mengistu Worku", countryAr: "إثيوبيا", countryEn: "Ethiopia" }],
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 1963,
    nameAr: "حسن الشاذلي", nameEn: "Hassan El-Shazly",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1965,
    nameAr: "أوسي كوفي ويوستاش مانجليه",
    nameEn: "Osei Kofi / Eustache Manglé",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "أوسي كوفي", nameEn: "Osei Kofi", countryAr: "غانا", countryEn: "Ghana" }, { nameAr: "يوستاش مانجليه", nameEn: "Eustache Manglé", countryAr: "ساحل العاج", countryEn: "Ivory Coast" }],
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 1968,
    nameAr: "لوران بوكو", nameEn: "Laurent Pokou",
    countryAr: "ساحل العاج", countryEn: "Ivory Coast",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1970,
    nameAr: "لوران بوكو", nameEn: "Laurent Pokou",
    countryAr: "ساحل العاج", countryEn: "Ivory Coast",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 1972,
    nameAr: "سليف كيتا", nameEn: "Salif Keïta",
    countryAr: "مالي", countryEn: "Mali",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1974,
    nameAr: "نداي مولامبا", nameEn: "Ndaye Mulamba",
    countryAr: "زائير", countryEn: "Zaire",
    tied: false,
    goals: 9,
    dataStatus: "sourceChecked"
  },
  {
    year: 1976,
    nameAr: "نجو ليا", nameEn: "Njo Léa",
    countryAr: "غينيا", countryEn: "Guinea",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1978,
    nameAr: "فيليب أوموندي", nameEn: "Phillip Omondi",
    countryAr: "أوغندا", countryEn: "Uganda",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1980,
    nameAr: "سيجون أوديجبامي", nameEn: "Segun Odegbami",
    countryAr: "نيجيريا", countryEn: "Nigeria",
    tied: false,
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 1982,
    nameAr: "جورج الحسن", nameEn: "George Alhassan",
    countryAr: "غانا", countryEn: "Ghana",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1984,
    nameAr: "طاهر أبو زيد", nameEn: "Taher Abouzeid",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1986,
    nameAr: "روجيه ميلا وعبدولاي تراوري",
    nameEn: "Roger Milla / Abdoulaye Traoré",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "روجيه ميلا", nameEn: "Roger Milla", countryAr: "الكاميرون", countryEn: "Cameroon" }, { nameAr: "عبدولاي تراوري", nameEn: "Abdoulaye Traoré", countryAr: "ساحل العاج", countryEn: "Ivory Coast" }],
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1988,
    nameAr: "لخضر بلومي وروجيه ميلا وجمال عبد الحميد وعبدولاي تراوري",
    nameEn: "Lakhdar Belloumi / Roger Milla / Gamal Abdelhamid / Abdoulaye Traoré",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "لخضر بلومي", nameEn: "Lakhdar Belloumi", countryAr: "الجزائر", countryEn: "Algeria" }, { nameAr: "روجيه ميلا", nameEn: "Roger Milla", countryAr: "الكاميرون", countryEn: "Cameroon" }, { nameAr: "جمال عبد الحميد", nameEn: "Gamal Abdelhamid", countryAr: "مصر", countryEn: "Egypt" }, { nameAr: "عبدولاي تراوري", nameEn: "Abdoulaye Traoré", countryAr: "ساحل العاج", countryEn: "Ivory Coast" }],
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1990,
    nameAr: "جمال منعار", nameEn: "Djamel Menad",
    countryAr: "الجزائر", countryEn: "Algeria",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1992,
    nameAr: "راشيدي يكيني", nameEn: "Rashidi Yekini",
    countryAr: "نيجيريا", countryEn: "Nigeria",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1994,
    nameAr: "راشيدي يكيني", nameEn: "Rashidi Yekini",
    countryAr: "نيجيريا", countryEn: "Nigeria",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1996,
    nameAr: "كالوشا بوايلا", nameEn: "Kalusha Bwalya",
    countryAr: "زامبيا", countryEn: "Zambia",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1998,
    nameAr: "حسام حسن وبيني ماكارثي",
    nameEn: "Hossam Hassan / Benni McCarthy",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "حسام حسن", nameEn: "Hossam Hassan", countryAr: "مصر", countryEn: "Egypt" }, { nameAr: "بيني ماكارثي", nameEn: "Benni McCarthy", countryAr: "جنوب أفريقيا", countryEn: "South Africa" }],
    goals: 7,
    dataStatus: "sourceChecked"
  },
  {
    year: 2000,
    nameAr: "شون بارتليت", nameEn: "Shaun Bartlett",
    countryAr: "جنوب أفريقيا", countryEn: "South Africa",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2002,
    nameAr: "باتريك مبوما وسالومون أوليمبي وجوليوس أجاهووا",
    nameEn: "Patrick Mboma / Salomon Olembe / Julius Aghahowa",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "باتريك مبوما", nameEn: "Patrick Mboma", countryAr: "الكاميرون", countryEn: "Cameroon" }, { nameAr: "سالومون أوليمبي", nameEn: "Salomon Olembe", countryAr: "الكاميرون", countryEn: "Cameroon" }, { nameAr: "جوليوس أجاهووا", nameEn: "Julius Aghahowa", countryAr: "نيجيريا", countryEn: "Nigeria" }],
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 2004,
    nameAr: "باتريك مبوما وفريدريك كانوتيه وأوستن أوكوتشا ويوسف مختاري وفرانسيليودو دوس سانتوس",
    nameEn: "Patrick Mboma / Frédéric Kanouté / Austin Okocha / Youssef Mokhtari / Francileudo dos Santos",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "باتريك مبوما", nameEn: "Patrick Mboma", countryAr: "الكاميرون", countryEn: "Cameroon" }, { nameAr: "فريدريك كانوتيه", nameEn: "Frédéric Kanouté", countryAr: "مالي", countryEn: "Mali" }, { nameAr: "أوستن أوكوتشا", nameEn: "Austin Okocha", countryAr: "نيجيريا", countryEn: "Nigeria" }, { nameAr: "يوسف مختاري", nameEn: "Youssef Mokhtari", countryAr: "المغرب", countryEn: "Morocco" }, { nameAr: "فرانسيليودو دوس سانتوس", nameEn: "Francileudo dos Santos", countryAr: "تونس", countryEn: "Tunisia" }],
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 2006,
    nameAr: "صامويل إيتو وأحمد حسن وفرانسيليودو دوس سانتوس",
    nameEn: "Samuel Eto'o / Ahmed Hassan / Francileudo dos Santos",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "صامويل إيتو", nameEn: "Samuel Eto'o", countryAr: "الكاميرون", countryEn: "Cameroon" }, { nameAr: "أحمد حسن", nameEn: "Ahmed Hassan", countryAr: "مصر", countryEn: "Egypt" }, { nameAr: "فرانسيليودو دوس سانتوس", nameEn: "Francileudo dos Santos", countryAr: "تونس", countryEn: "Tunisia" }],
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 2008,
    nameAr: "صامويل إيتو", nameEn: "Samuel Eto'o",
    countryAr: "الكاميرون", countryEn: "Cameroon",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2010,
    nameAr: "محمد ناجي (جدو)", nameEn: "Mohamed Nagy 'Gedo'",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2012,
    nameAr: "مانوتشو وبيير-إيميريك أوباميانج وديدييه دروجبا وشيك تيدياني ديابته وحسين خرجة وكريس كاتونجو وإيمانويل مايوكا",
    nameEn: "Manucho / Pierre-Emerick Aubameyang / Didier Drogba / Cheick Tidiane Diabaté / Houcine Kharja / Chris Katongo / Emmanuel Mayuka",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "مانوتشو", nameEn: "Manucho", countryAr: "أنجولا", countryEn: "Angola" }, { nameAr: "بيير-إيميريك أوباميانج", nameEn: "Pierre-Emerick Aubameyang", countryAr: "الجابون", countryEn: "Gabon" }, { nameAr: "ديدييه دروجبا", nameEn: "Didier Drogba", countryAr: "ساحل العاج", countryEn: "Ivory Coast" }, { nameAr: "شيك تيدياني ديابته", nameEn: "Cheick Tidiane Diabaté", countryAr: "مالي", countryEn: "Mali" }, { nameAr: "حسين خرجة", nameEn: "Houcine Kharja", countryAr: "المغرب", countryEn: "Morocco" }, { nameAr: "كريس كاتونجو", nameEn: "Chris Katongo", countryAr: "زامبيا", countryEn: "Zambia" }, { nameAr: "إيمانويل مايوكا", nameEn: "Emmanuel Mayuka", countryAr: "زامبيا", countryEn: "Zambia" }],
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 2013,
    nameAr: "إيمانويل إيمينيكي ومبارك واكاسو",
    nameEn: "Emmanuel Emenike / Mubarak Wakaso",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "إيمانويل إيمينيكي", nameEn: "Emmanuel Emenike", countryAr: "نيجيريا", countryEn: "Nigeria" }, { nameAr: "مبارك واكاسو", nameEn: "Mubarak Wakaso", countryAr: "غانا", countryEn: "Ghana" }],
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 2015,
    nameAr: "أحمد العكايشي وأندريه أييو وخافيير بالبوا وتيفي بيفوما وديوميرسي مبوكاني",
    nameEn: "Ahmed Akaïchi / André Ayew / Javier Balboa / Thievy Bifouma / Dieumerci Mbokani",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "أحمد العكايشي", nameEn: "Ahmed Akaïchi", countryAr: "تونس", countryEn: "Tunisia" }, { nameAr: "أندريه أييو", nameEn: "André Ayew", countryAr: "غانا", countryEn: "Ghana" }, { nameAr: "خافيير بالبوا", nameEn: "Javier Balboa", countryAr: "غينيا الاستوائية", countryEn: "Equatorial Guinea" }, { nameAr: "تيفي بيفوما", nameEn: "Thievy Bifouma", countryAr: "الكونغو", countryEn: "Congo" }, { nameAr: "ديوميرسي مبوكاني", nameEn: "Dieumerci Mbokani", countryAr: "الكونغو الديمقراطية", countryEn: "DR Congo" }],
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 2017,
    nameAr: "جونيور كابانانجا", nameEn: "Junior Kabananga",
    countryAr: "الكونغو الديمقراطية", countryEn: "DR Congo",
    tied: false,
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 2019,
    nameAr: "أوديون إيجالو", nameEn: "Odion Ighalo",
    countryAr: "نيجيريا", countryEn: "Nigeria",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2021,
    nameAr: "فينسنت أبو بكر", nameEn: "Vincent Aboubakar",
    countryAr: "الكاميرون", countryEn: "Cameroon",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 2023,
    nameAr: "إميليو نسوي", nameEn: "Emilio Nsue",
    countryAr: "غينيا الاستوائية", countryEn: "Equatorial Guinea",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
];

const records = [
  {
    id: "most-goals-single-match-major-league",
    categoryAr: "أكتر أهداف لاعب واحد في مباراة واحدة (دوري كبير)", categoryEn: "Most goals by one player in a single match (major league)",
    holderAr: "آندي كول وآلان شيرر (مشتركين)", holderEn: "Andy Cole and Alan Shearer (joint record)",
    valueAr: "5 أهداف", valueEn: "5 goals",
    contextAr: "كول سجلهم مع مانشستر يونايتد ضد إبسويتش تاون سنة 1995، وشيرر سجلهم مع نيوكاسل ضد شيفيلد ويدنزداي سنة 1999، وده رقم الدوري الإنجليزي الممتاز تحديداً.",
    contextEn: "Cole scored them for Manchester United vs Ipswich Town in 1995, and Shearer for Newcastle vs Sheffield Wednesday in 1999; this is specifically the Premier League record.",
    dataStatus: "knowledge"
  },
  {
    id: "most-goals-single-match-overall",
    categoryAr: "أكتر أهداف لاعب واحد في مباراة واحدة (كل المستويات، مش دوري كبير)", categoryEn: "Most goals by one player in a single match (any level, not a major league)",
    holderAr: "آندي أوين", holderEn: "Andy Owen",
    valueAr: "10 أهداف", valueEn: "10 goals",
    contextAr: "لتشيلتنام تاون ضد بروكوورث سنة 2002، في مباراة هواة إنجليزية مش دوري احترافي.",
    contextEn: "For Cheltenham Town vs Brockworth in 2002, an English amateur match, not a professional league.",
    dataStatus: "knowledge"
  },
  {
    id: "most-goals-calendar-year",
    categoryAr: "أكتر أهداف لاعب في سنة ميلادية واحدة", categoryEn: "Most goals by a player in a single calendar year",
    holderAr: "ليونيل ميسي", holderEn: "Lionel Messi",
    valueAr: "91 هدف", valueEn: "91 goals",
    contextAr: "في سنة 2012 مع برشلونة والأرجنتين مجتمعين.", contextEn: "In 2012, for Barcelona and Argentina combined.",
    dataStatus: "sourceChecked"
  },
  {
    id: "fastest-hat-trick-major-league",
    categoryAr: "أسرع هاتريك في دوري كبير", categoryEn: "Fastest hat-trick in a major league",
    holderAr: "سادو مانيه", holderEn: "Sadio Mané",
    valueAr: "حوالي دقيقتين و56 ثانية", valueEn: "About 2 minutes 56 seconds",
    contextAr: "سجلهم مع ساوثهامبتون ضد أستون فيلا في الدوري الإنجليزي الممتاز سنة 2015.", contextEn: "Scored for Southampton against Aston Villa in the Premier League, 2015.",
    dataStatus: "knowledge"
  },
  {
    id: "fastest-hat-trick-overall",
    categoryAr: "أسرع هاتريك في تاريخ كرة القدم (كل المستويات، مش دوري كبير)", categoryEn: "Fastest hat-trick in football history (any level, not a major league)",
    holderAr: "سعيد الأورتي", holderEn: "Saïd Al-Ourti",
    valueAr: "حوالي ثانيتين ونص", valueEn: "About 2.5 seconds",
    contextAr: "حسب موسوعة جينيس، في مباراة هواة هولندية سنة 2011. الرقم ده متنازع عليه بشدة بين مصادر مختلفة، فراجعه قبل ما تستخدمه.",
    contextEn: "Per Guinness World Records, in a Dutch amateur match in 2011. This figure is heavily disputed between sources — verify before using it.",
    dataStatus: "knowledge"
  },
  {
    id: "most-appearances-career",
    categoryAr: "أكتر لاعب مباريات رسمية في مشواره الاحترافي", categoryEn: "Most official career appearances by a professional player",
    holderAr: "بيتر شيلتون", holderEn: "Peter Shilton",
    valueAr: "أكتر من 1390 مباراة", valueEn: "Over 1,390 matches",
    contextAr: "حارس مرمى إنجليزي، لعب لعدد كبير من الأندية على مدار مشواره.", contextEn: "English goalkeeper who played for many clubs across his career.",
    dataStatus: "knowledge"
  },
  {
    id: "most-expensive-transfer",
    categoryAr: "أغلى صفقة انتقال في تاريخ كرة القدم", categoryEn: "Most expensive transfer in football history",
    holderAr: "نيمار", holderEn: "Neymar",
    valueAr: "حوالي 222 مليون يورو", valueEn: "About €222 million",
    contextAr: "من برشلونة لباريس سان جيرمان سنة 2017، والرقم لسه صامد لحد 2026.", contextEn: "From Barcelona to Paris Saint-Germain in 2017; still the record as of 2026.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-ballon-dor",
    categoryAr: "أكتر لاعب فوزاً بالكرة الذهبية", categoryEn: "Most Ballon d'Or wins",
    holderAr: "ليونيل ميسي", holderEn: "Lionel Messi",
    valueAr: "8 مرات", valueEn: "8 times",
    contextAr: "كريستيانو رونالدو تاني بـ5 مرات.", contextEn: "Cristiano Ronaldo is second with 5 wins.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-champions-league-titles-club",
    categoryAr: "أكتر نادي كسب دوري أبطال أوروبا", categoryEn: "Most UEFA Champions League / European Cup titles by a club",
    holderAr: "ريال مدريد", holderEn: "Real Madrid",
    valueAr: "15 لقب", valueEn: "15 titles",
    contextAr: "", contextEn: "",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-world-cup-titles",
    categoryAr: "أكتر منتخب كسب كأس العالم", categoryEn: "Most FIFA World Cup titles",
    holderAr: "البرازيل", holderEn: "Brazil",
    valueAr: "5 مرات", valueEn: "5 times",
    contextAr: "المنتخب الوحيد اللي لعب في كل نسخ كأس العالم من غير غياب.", contextEn: "The only team to have played in every World Cup edition without missing one.",
    dataStatus: "sourceChecked"
  },
  {
    id: "longest-unbeaten-run-league-season",
    categoryAr: "أطول موسم من غير هزيمة في دوري كبير", categoryEn: "Only unbeaten full season in a major league",
    holderAr: "أرسنال (الذين لا يُقهرون)", holderEn: "Arsenal ('The Invincibles')",
    valueAr: "38 مباراة من غير هزيمة", valueEn: "38 matches unbeaten",
    contextAr: "موسم 2003-2004 كامل في الدوري الإنجليزي الممتاز.", contextEn: "The entire 2003–04 Premier League season.",
    dataStatus: "sourceChecked"
  },
  {
    id: "fastest-goal-major-league",
    categoryAr: "أسرع هدف موثق في دوري كبير", categoryEn: "Fastest documented goal in a major league",
    holderAr: "غير مؤكد (أكتر من لاعب مُتنازع عليه)", holderEn: "Disputed (multiple players claimed)",
    valueAr: "حوالي 2 لـ 3 ثواني من بداية المباراة", valueEn: "About 2 to 3 seconds after kickoff",
    contextAr: "مفيش إجماع كامل على صاحب الرقم الرسمي في دوري كبير، فالحقيقة دي أضعف من غيرها في الملف ومنصوح متستخدمهاش كسؤال مباشر.",
    contextEn: "No full consensus on the official record-holder in a major league; weaker than other facts here — not recommended as a direct quiz question.",
    dataStatus: "knowledge"
  },
  {
    id: "oldest-player-major-league",
    categoryAr: "أكبر لاعب سناً لعب في دوري احترافي كبير", categoryEn: "Oldest player to appear in a major professional league",
    holderAr: "كازويوشي ميورا", holderEn: "Kazuyoshi Miura",
    valueAr: "فوق الـ58 سنة", valueEn: "Over 58 years old",
    contextAr: "لعب في الدوري الياباني، مش أحد الدوريات الأوروبية الستة الكبرى.", contextEn: "Played in the Japanese league, not one of the six major European leagues.",
    dataStatus: "knowledge"
  },
  {
    id: "youngest-world-cup-scorer",
    categoryAr: "أصغر هداف في تاريخ كأس العالم", categoryEn: "Youngest goalscorer in World Cup history",
    holderAr: "بيليه", holderEn: "Pelé",
    valueAr: "17 سنة", valueEn: "17 years old",
    contextAr: "سجل في نهائي كأس العالم 1958.", contextEn: "Scored in the 1958 World Cup final.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-career-hat-tricks-alltime-disputed",
    categoryAr: "أكتر لاعب هاتريكات في تاريخ كرة القدم (رقم متنازع عليه)", categoryEn: "Most career hat-tricks in football history (disputed figure)",
    holderAr: "بيليه", holderEn: "Pelé",
    valueAr: "92 هاتريك", valueEn: "92 hat-tricks",
    contextAr: "الرقم ده معترف بيه من موسوعة جينيس، بس فيه خلاف كبير حواليه لأنه بيشمل مباريات ودية وغير رسمية كتير مع نادي سانتوس والمنتخب البرازيلي في الخمسينيات والستينيات، مش بس المباريات الرسمية الموثقة زي باقي الأرقام في الملف ده.",
    contextEn: "Recognised by Guinness World Records, but widely disputed because it includes many friendly and unofficial matches with Santos and Brazil in the 1950s–60s, unlike the officially documented matches behind most other figures in this file.",
    dataStatus: "knowledge"
  },
  {
    id: "most-career-hat-tricks-modern-era",
    categoryAr: "أكتر لاعب هاتريكات في المسيرة كلها (مباريات رسمية موثقة، أندية ومنتخب)", categoryEn: "Most career hat-tricks overall (documented official matches, club and country)",
    holderAr: "كريستيانو رونالدو", holderEn: "Cristiano Ronaldo",
    valueAr: "66 هاتريك", valueEn: "66 hat-tricks",
    contextAr: "ميسي تاني بـ62 هاتريك (لحد أغسطس 2026)، وآخر هاتريك لرونالدو كان في مايو 2024، يعني ميسي بيقرّب من الفارق مش بيبعد. الرقمين بيتغيروا لأن اللاعبين لسه بيلعبوا.",
    contextEn: "Messi is second with 62 (as of August 2026); Ronaldo's last hat-trick was in May 2024, so Messi has been closing the gap rather than falling behind. Both totals keep changing since both players are still active.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-international-hat-tricks",
    categoryAr: "أكتر لاعب هاتريكات مع منتخبه بس", categoryEn: "Most hat-tricks for a national team specifically",
    holderAr: "ليونيل ميسي", holderEn: "Lionel Messi",
    valueAr: "10 هاتريكات دولية", valueEn: "10 international hat-tricks",
    contextAr: "ميسي وضع نفسه قدام رونالدو (10 كمان) في المجال ده تحديداً بعد هاتريكه ضد الجزائر في افتتاح كأس العالم 2026، وهو مجال مختلف تماماً عن الرقم الكلي اللي فوق ده اللي رونالدو لسه صاحبه.",
    contextEn: "Messi edged ahead of Ronaldo (also on 10) in this specific category after his hat-trick against Algeria in the 2026 World Cup opener — a separate category from the overall career total above, where Ronaldo still leads.",
    dataStatus: "sourceChecked"
  },
];
