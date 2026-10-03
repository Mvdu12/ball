// ================= بيانات: هدافون تاريخيون وأرقام قياسية في كرة القدم =================
// محدّثة لحد 25 سبتمبر 2026. اتراجعت ونُقّحت أخطاء الدقة مرتين (1 أكتوبر 2026): الدوريات الكبرى (إنجلترا وإسبانيا وإيطاليا وألمانيا وفرنسا والبرتغال ومصر)، دوري الأبطال، هدافو الأندية، اليورو، أمم أفريقيا، الحذاء الذهبي 2010، والأرقام القياسية. جزئين: topScorers (هدافو كل بطولة على مدار تاريخها) وrecords (أرقام قياسية عامة).
// معنى dataStatus:
//   sourceChecked = الرقم الأساسي والترتيب (الأهداف/اللاعب/السنة) اتراجعوا على مصدر واحد على الأقل في المحادثة.
//   knowledge = من معرفتي بدون مراجعة مصدر.
// مهم: sourceChecked مش معناها إن كل تفصيلة جوا العنصر اتأكدت. الحاجات اللي ما اتراجعتش مكتوبة في dataSources.notVerified تحت.
// أرقام اللاعبين النشطين (صلاح وكين ورونالدو ومبابي...) بتتغير باستمرار، فحطيت "+" أو ملاحظة توضح ده.
// الأرقام القياسية المتنازع عليها اتحطلها ملاحظة تحذير صريحة. لو هتستخدم أي رقم من الملف في سؤال مهم، يُفضّل تتأكد منه الأول.
// ---- الربط مع competitions-data.js و clubs-data.js (بيتأكد منه validate-links.js) ----
// topScorers[].competitionId = id البطولة في competitions-data.js. هدافو الدوريات بيتحسبوا من بداية الشكل الحديث للدوري (مثلاً Bundesliga من 1963/64 بتشاور على german-championship).
// topScorers[].scorers[].clubIds (في هدافي الدوريات ودوري الأبطال بس، مش المنتخبات) = ids النوادي المذكورة في clubsEn واللي موجودة في clubs-data.js فقط، مش قائمة كاملة بمشوار اللاعب. مستخرجة من clubsEn فبترث حالة التحقق المكتوبة في dataSources.
// worldCupGoldenBoot / euroGoldenBoot / afconGoldenBoot: كل عنصر فيه competitionId + year، وسنينهم لازم تطابق تماماً سنين نسخ البطولة في competitions-data.js.
// clubTopScorers[].clubId = id النادي في clubs-data.js (null = النادي مش موجود).
// records[].relatedCompetitionIds / relatedClubIds = البطولات والأندية اللي الرقم القياسي اتحقق فيها أو مرتبط بيها (قوائم فاضية لو مفيش).
// topScorers[].scorers[].playerId و clubTopScorers[].playerId = id اللاعب في players-data.js (null = مش لاعب فعلي، زي "Not confirmed"). بيتأكد إن اللاعب موجود وإن اسمه ونادي ملف الهدافين متسقين مع ملف اللاعيبة. قايمة الحذاء الذهبي ما فيهاش playerId (بتتربط بالبطولة والسنة بس).
// records[].relatedPlayerIds = ids اللاعيبة في players-data.js اللي الرقم القياسي بتاعهم (قايمة فاضية لو صاحب الرقم نادي/منتخب أو لاعب هاوي مش في ملف اللاعيبة).

const topScorers = [
  {
    id: "premier-league-top-scorers",
    competitionId: "premier-league",
    competitionAr: "هدافو الدوري الإنجليزي الممتاز (كل العصور)",
    competitionEn: "Premier League all-time top scorers",
    asOf: "نهاية موسم 2025/26",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "آلان شيرر", nameEn: "Alan Shearer", playerId: "alan-shearer", goals: "260", clubsAr: "بلاكبيرن، نيوكاسل، ساوثهامبتون", clubsEn: "Blackburn, Newcastle, Southampton", clubIds: ["blackburn-rovers", "newcastle-united", "southampton"] },
      { nameAr: "هاري كين", nameEn: "Harry Kane", playerId: "harry-kane", goals: "213", clubsAr: "توتنهام", clubsEn: "Tottenham", clubIds: ["tottenham"] },
      { nameAr: "واين روني", nameEn: "Wayne Rooney", playerId: "wayne-rooney", goals: "208", clubsAr: "إيفرتون، مانشستر يونايتد", clubsEn: "Everton, Manchester United", clubIds: ["everton", "manchester-united"] },
      { nameAr: "محمد صلاح", nameEn: "Mohamed Salah", playerId: "mohamed-salah", goals: "193", clubsAr: "ليفربول، تشيلسي", clubsEn: "Liverpool, Chelsea", clubIds: ["liverpool", "chelsea"] },
      { nameAr: "أندرو كول", nameEn: "Andrew Cole", playerId: "andrew-cole", goals: "187", clubsAr: "نيوكاسل وأندية تانية", clubsEn: "Newcastle and others", clubIds: ["newcastle-united"] },
      { nameAr: "سيرجيو أجويرو", nameEn: "Sergio Agüero", playerId: "sergio-aguero", goals: "184", clubsAr: "مانشستر سيتي", clubsEn: "Manchester City", clubIds: ["manchester-city"] },
      { nameAr: "فرانك لامبارد", nameEn: "Frank Lampard", playerId: "frank-lampard", goals: "177", clubsAr: "تشيلسي وأندية تانية", clubsEn: "Chelsea and others", clubIds: ["chelsea"] },
      { nameAr: "تييري هنري", nameEn: "Thierry Henry", playerId: "thierry-henry", goals: "175", clubsAr: "أرسنال", clubsEn: "Arsenal", clubIds: ["arsenal"] },
      { nameAr: "روبي فاولر", nameEn: "Robbie Fowler", playerId: "robbie-fowler", goals: "163", clubsAr: "ليفربول وأندية تانية", clubsEn: "Liverpool and others", clubIds: ["liverpool"] },
      { nameAr: "جيرمين ديفو", nameEn: "Jermain Defoe", playerId: "jermain-defoe", goals: "162", clubsAr: "توتنهام وأندية تانية", clubsEn: "Tottenham and others", clubIds: ["tottenham"] },
    ],
    notesAr: ["شيرر هو صاحب الرقم القياسي، وهو الوحيد اللي كسر حاجز الـ100 هدف مع ناديين مختلفين (بلاكبيرن ونيوكاسل).", "رقم صلاح النهائي 193 هدف (191 مع ليفربول وهدفين مع تشيلسي)، وهو أعلى هداف أفريقي في تاريخ الدوري. غادر ليفربول في صيف 2026 بعد موسم 2025/26."],
    notesEn: ["Shearer holds the all-time record, and is the only player to reach 100+ goals for two different clubs (Blackburn and Newcastle).", "Salah's final tally is 193 (191 for Liverpool and two for Chelsea), the highest of any African player in the league's history. He left Liverpool in summer 2026 after the 2025-26 season."]
  },
  {
    id: "la-liga-top-scorers",
    competitionId: "la-liga",
    competitionAr: "هدافو الدوري الإسباني (كل العصور)",
    competitionEn: "La Liga all-time top scorers",
    asOf: "مصادر متعددة (Wikipedia وGoal وغيرها) لحد 2026",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "ليونيل ميسي", nameEn: "Lionel Messi", playerId: "lionel-messi", goals: "474", clubsAr: "برشلونة", clubsEn: "Barcelona", clubIds: ["barcelona"] },
      { nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", playerId: "cristiano-ronaldo", goals: "311", clubsAr: "ريال مدريد", clubsEn: "Real Madrid", clubIds: ["real-madrid"] },
      { nameAr: "تيلمو زارا", nameEn: "Telmo Zarra", playerId: "telmo-zarra", goals: "251", clubsAr: "أتلتيك بلباو", clubsEn: "Athletic Bilbao", clubIds: ["athletic-bilbao"] },
      { nameAr: "كريم بنزيما", nameEn: "Karim Benzema", playerId: "karim-benzema", goals: "238", clubsAr: "ريال مدريد", clubsEn: "Real Madrid", clubIds: ["real-madrid"] },
      { nameAr: "هوجو سانتشيز", nameEn: "Hugo Sánchez", playerId: "hugo-sanchez", goals: "234", clubsAr: "أتلتيكو مدريد، ريال مدريد، رايو فاييكانو", clubsEn: "Atlético Madrid, Real Madrid, Rayo Vallecano", clubIds: ["atletico-madrid", "real-madrid", "rayo-vallecano"] },
      { nameAr: "رؤول جونزاليس", nameEn: "Raúl González", playerId: "raul-gonzalez", goals: "228", clubsAr: "ريال مدريد", clubsEn: "Real Madrid", clubIds: ["real-madrid"] },
      { nameAr: "ألفريدو دي ستيفانو", nameEn: "Alfredo Di Stéfano", playerId: "alfredo-di-stefano", goals: "227", clubsAr: "ريال مدريد وأندية تانية", clubsEn: "Real Madrid and others", clubIds: ["real-madrid"] },
    ],
    notesAr: ["ميسي صاحب الرقم القياسي بفارق كبير (474 هدف في 520 مباراة)، ولعب كل مشواره في لاليجا مع برشلونة.", "رقم راؤول 228 في Wikipedia، وبعض المصادر بتكتب 229. زارا كان صاحب الرقم القياسي لحوالي 60 سنة لحد ما كسره ميسي في 2014."],
    notesEn: ["Messi holds the record by a large margin (474 goals in 520 matches), having played his entire La Liga career at Barcelona.", "Raúl's tally is 228 on Wikipedia, while some sources say 229. Zarra held the all-time record for about 60 years until Messi broke it in 2014."]
  },
  {
    id: "serie-a-top-scorers",
    competitionId: "serie-a",
    competitionAr: "هدافو الدوري الإيطالي (كل العصور)",
    competitionEn: "Serie A all-time top scorers",
    asOf: "نهاية موسم 2025/26 (RSSSF)",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "سيلفيو بيولا", nameEn: "Silvio Piola", playerId: "silvio-piola", goals: "274", clubsAr: "بروفيرتشيلي، لاتسيو، يوفنتوس، نوفارا", clubsEn: "Pro Vercelli, Lazio, Juventus, Novara", clubIds: ["lazio", "juventus"] },
      { nameAr: "فرانشيسكو توتي", nameEn: "Francesco Totti", playerId: "francesco-totti", goals: "250", clubsAr: "روما", clubsEn: "Roma", clubIds: ["roma"] },
      { nameAr: "جونار نوردال", nameEn: "Gunnar Nordahl", playerId: "gunnar-nordahl", goals: "225", clubsAr: "ميلان، روما", clubsEn: "Milan, Roma", clubIds: ["ac-milan", "roma"] },
      { nameAr: "جوزيبي مياتزا", nameEn: "Giuseppe Meazza", playerId: "giuseppe-meazza", goals: "216", clubsAr: "إنتر وميلان ويوفنتوس وأندية تانية", clubsEn: "Inter, Milan, Juventus and others", clubIds: ["inter-milan", "ac-milan", "juventus"] },
      { nameAr: "جوزيه ألطافيني", nameEn: "José Altafini", playerId: "jose-altafini", goals: "216", clubsAr: "ميلان ونابولي ويوفنتوس", clubsEn: "Milan, Napoli, Juventus", clubIds: ["ac-milan", "napoli", "juventus"] },
      { nameAr: "جوزيبي سيجناتوري", nameEn: "Giuseppe Signori", playerId: "giuseppe-signori", goals: "188", clubsAr: "لاتسيو وأندية تانية", clubsEn: "Lazio and others", clubIds: ["lazio"] },
    ],
    notesAr: ["ملعب سان سيرو في ميلانو سُمي رسمياً ستاديو جوزيبي مياتزا تكريماً له.", "مياتزا وألطافيني متساويين في 216 هدف. القايمة مقتصرة على 6 أسماء، ومفيش أسماء تانية بين 188 و216 مذكورة هنا (راجع RSSSF لو محتاج قايمة أطول)."],
    notesEn: ["Milan's San Siro is officially named 'Stadio Giuseppe Meazza' in his honour.", "Meazza and Altafini are tied on 216. The list is limited to 6 names and does not include every scorer between 188 and 216 (see RSSSF for a longer list)."]
  },
  {
    id: "bundesliga-top-scorers",
    competitionId: "german-championship",
    competitionAr: "هدافو الدوري الألماني (البوندسليجا، كل العصور)",
    competitionEn: "Bundesliga all-time top scorers",
    asOf: "2026 (اتحاد الكرة الألماني وBundesliga.com ومصادر تانية)",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "جيرد مولر", nameEn: "Gerd Müller", playerId: "gerd-muller", goals: "365", clubsAr: "بايرن ميونخ", clubsEn: "Bayern Munich", clubIds: ["bayern-munich"] },
      { nameAr: "روبرت ليفاندوفسكي", nameEn: "Robert Lewandowski", playerId: "robert-lewandowski", goals: "312", clubsAr: "دورتموند وبايرن ميونخ", clubsEn: "Dortmund and Bayern Munich", clubIds: ["borussia-dortmund", "bayern-munich"] },
      { nameAr: "كلاوس فيشر", nameEn: "Klaus Fischer", playerId: "klaus-fischer", goals: "268", clubsAr: "شالكه، كولن، بوخوم، 1860 ميونخ", clubsEn: "Schalke, Köln, Bochum, 1860 Munich", clubIds: ["schalke-04", "koln", "1860-munich"] },
      { nameAr: "يوب هاينكس", nameEn: "Jupp Heynckes", playerId: "jupp-heynckes", goals: "220", clubsAr: "بوروسيا مونشنجلادباخ وهانوفر", clubsEn: "Borussia Mönchengladbach and Hannover", clubIds: ["borussia-monchengladbach", "hannover-96"] },
      { nameAr: "مانفريد بورجميلر", nameEn: "Manfred Burgsmüller", playerId: "manfred-burgsmuller", goals: "213", clubsAr: "دورتموند وأندية تانية", clubsEn: "Dortmund and others", clubIds: ["borussia-dortmund"] },
    ],
    notesAr: ["مولر صاحب الرقم القياسي رغم إنه اعتزل من زمان (365 هدف في 427 مباراة)، ورقمه صعب يتكسر. ليفاندوفسكي أقرب لاعب حديث ليه ولسه الوحيد التاني اللي عدّى الـ300."],
    notesEn: ["Müller holds the record (365 goals in 427 games) despite retiring long ago, and it is a hard mark to break. Lewandowski is the closest modern player and the only other one past 300."]
  },
  {
    id: "ligue1-top-scorers",
    competitionId: "ligue-1",
    competitionAr: "هدافو الدوري الفرنسي (كل العصور)",
    competitionEn: "Ligue 1 all-time top scorers",
    asOf: "معرفتي العامة + مصادر في المحادثة",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "ديليو أونيس", nameEn: "Delio Onnis", playerId: "delio-onnis", goals: "299", clubsAr: "ريمس، موناكو، تور، طولون", clubsEn: "Reims, Monaco, Tours, Toulon", clubIds: ["reims", "monaco"] },
      { nameAr: "برنار لاكومب", nameEn: "Bernard Lacombe", playerId: "bernard-lacombe", goals: "255", clubsAr: "ليون، سانت إتيان، بوردو", clubsEn: "Lyon, Saint-Étienne, Bordeaux", clubIds: ["lyon", "saint-etienne", "bordeaux"] },
      { nameAr: "هيرفي ريفيلي", nameEn: "Hervé Revelli", playerId: "herve-revelli", goals: "216", clubsAr: "سانت إتيان وأندية تانية", clubsEn: "Saint-Étienne and others", clubIds: ["saint-etienne"] },
      { nameAr: "روجيه كورتوا", nameEn: "Roger Courtois", playerId: "roger-courtois", goals: "210", clubsAr: "سوشو وأندية تانية", clubsEn: "Sochaux and others", clubIds: ["sochaux"] },
    ],
    notesAr: ["أونيس أرجنتيني الجنسية ويحمل الرقم القياسي، وهو أقل شهرة من هدافي الدوريات التانية.", "جان بيير باباكار مش في المركز التاني: هو مشهور بخمس ألقاب هداف متتالية، مش بالرقم التاريخي الإجمالي."],
    notesEn: ["Onnis (Argentine) holds the record but is less widely known than other leagues' record scorers.", "Jean-Pierre Papin is not second all-time: he is famous for five consecutive top-scorer titles, not for the overall career total."]
  },
  {
    id: "primeira-liga-top-scorers",
    competitionId: "primeira-liga",
    competitionAr: "هدافو الدوري البرتغالي (كل العصور)",
    competitionEn: "Primeira Liga all-time top scorers",
    asOf: "مصادر متعددة (Wikipedia وfootballhistory.org وbesoccer)",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "فرناندو بيروتيو", nameEn: "Fernando Peyroteo", playerId: "fernando-peyroteo", goals: "332", clubsAr: "سبورتينج لشبونة", clubsEn: "Sporting CP", clubIds: ["sporting-cp"] },
      { nameAr: "إيوسيبيو", nameEn: "Eusébio", playerId: "eusebio", goals: "320", clubsAr: "بنفيكا، بيرا مار", clubsEn: "Benfica, Beira-Mar", clubIds: ["benfica"] },
      { nameAr: "فرناندو جوميز", nameEn: "Fernando Gomes", playerId: "fernando-gomes", goals: "319", clubsAr: "بورتو، سبورتينج لشبونة", clubsEn: "Porto, Sporting CP", clubIds: ["porto", "sporting-cp"] },
    ],
    notesAr: ["إيوسيبيو (الفهد الأسود) سجل 317 هدف مع بنفيكا و3 مع بيرا مار، وكسب الكرة الذهبية في 1965، وهو أكتر لاعب فوزاً بلقب هداف الدوري البرتغالي (7 مرات).", "الأرقام الأكتر تداولاً (Wikipedia وقناة RTP وfootballhistory.org): بيروتيو 332، إيوسيبيو 320، جوميز 319. قايمة RSSSF القديمة بتكتب 330 و319 و318."],
    notesEn: ["Eusébio ('The Black Panther') scored 317 for Benfica and 3 for Beira-Mar, won the Ballon d'Or in 1965, and holds the record for most Primeira Liga top-scorer titles (7).", "The most widely quoted figures (Wikipedia, RTP, footballhistory.org) are Peyroteo 332, Eusébio 320, Gomes 319. RSSSF's older list gives 330, 319 and 318."]
  },
  {
    id: "egyptian-league-top-scorers",
    competitionId: "egyptian-premier-league",
    competitionAr: "هدافو الدوري المصري (كل العصور)",
    competitionEn: "Egyptian Premier League all-time top scorers",
    asOf: "مصادر متعددة (365Scores وMercato Time وغيرها) لحد 2026",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "حسن الشاذلي", nameEn: "Hassan El-Shazly", playerId: "hassan-el-shazly", goals: "173", clubsAr: "ترسانة", clubsEn: "Tersana", clubIds: ["tersana"] },
      { nameAr: "حسام حسن", nameEn: "Hossam Hassan", playerId: "hossam-hassan", goals: "168", clubsAr: "الأهلي، الزمالك، المصري، ترسانة", clubsEn: "Al Ahly, Zamalek, Al Masry, Tersana", clubIds: ["al-ahly", "zamalek", "al-masry", "tersana"] },
      { nameAr: "عبد الله السعيد", nameEn: "Abdallah El-Said", playerId: "abdallah-el-said", goals: "133+", clubsAr: "الإسماعيلي، الأهلي، بيراميدز، الزمالك", clubsEn: "Ismaily, Al Ahly, Pyramids, Zamalek", clubIds: ["ismaily", "al-ahly", "pyramids", "zamalek"] },
      { nameAr: "مصطفى رياض", nameEn: "Moustafa Reyadh", playerId: "moustafa-reyadh", goals: "123", clubsAr: "ترسانة", clubsEn: "Tersana", clubIds: ["tersana"] },
      { nameAr: "السيد الضظوي (محمد التابعي)", nameEn: "El-Sayed El-Dhizui", playerId: "el-sayed-el-dhizui", goals: "112", clubsAr: "المصري، الأهلي", clubsEn: "Al Masry, Al Ahly", clubIds: ["al-masry", "al-ahly"] },
    ],
    notesAr: ["حسن الشاذلي هو الهداف التاريخي للدوري المصري بـ173 هدف، كلهم مع ترسانة، وهو صاحب أكبر رقم في موسم واحد كمان (34 هدف في 1974-75). المصادر بتتضارب في رقمه: 176 (RSSSF، قايمة محدّثة لنوفمبر 2004)، و173 (Wikipedia وصفحة الدوري المصري المحدّثة 1 أكتوبر 2025)، و171 (الأهرام 2015)، ومصدر قديم 187. اعتمدت 173 (Wikipedia) بقرارك لأنه المصدر الأكتر استخدماً، والأرقام التانية مكتوبة هنا للشفافية. رقم عدد المباريات (325) اتشال لأنه ما اتأكدش من مصدر.", "حسام حسن تاني بـ168 هدف، ورقمه متفق عليه في كل المصادر اللي لقيتها. عبد الله السعيد (لاعب نشط) تالت بـ133 هدف (Wikipedia، قايمة محدّثة 1 أكتوبر 2025) فرقمه ممكن يكون زاد بعدها. رابع هداف تاريخي مصطفى رياض (123 هدف حسب Wikipedia، وبعض المصادر 122)، وخامس السيد الضظوي بـ112 هدف (Wikipedia وRSSSF)."],
    notesEn: ["Hassan El-Shazly is the Egyptian league's all-time top scorer with 173 goals, all for Tersana, and also holds the single-season record (34 goals in 1974-75). sources conflict on his total: 176 (RSSSF, list updated November 2004), 173 (Wikipedia and its Egyptian Premier League page, updated 1 October 2025), 171 (Al-Ahram, 2015), and one older source says 187. I adopted 173 (Wikipedia) by the owner's decision since it is the most commonly consulted source; the other figures are kept here for transparency. The previous match count (325) was removed because it could not be verified.", "Hossam Hassan is second with 168, a figure agreed by every source I found. Abdallah El-Said (still active) is third with 133 (Wikipedia, list updated 1 October 2025), so his total may have risen since. Fourth is Moustafa Reyadh (123 per Wikipedia, some sources say 122) and fifth is El-Sayed El-Dhizui with 112 (Wikipedia and RSSSF)."]
  },
  {
    id: "ucl-top-scorers",
    competitionId: "uefa-champions-league",
    competitionAr: "هدافو دوري أبطال أوروبا (كل العصور)",
    competitionEn: "UEFA Champions League all-time top scorers (incl. European Cup)",
    asOf: "سبتمبر 2026 (UEFA وNBC Sports وThe Analyst)",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", playerId: "cristiano-ronaldo", goals: "140", clubsAr: "مانشستر يونايتد، ريال مدريد، يوفنتوس", clubsEn: "Manchester United, Real Madrid, Juventus", clubIds: ["manchester-united", "real-madrid", "juventus"] },
      { nameAr: "ليونيل ميسي", nameEn: "Lionel Messi", playerId: "lionel-messi", goals: "129", clubsAr: "برشلونة، باريس سان جيرمان", clubsEn: "Barcelona, PSG", clubIds: ["barcelona", "paris-saint-germain"] },
      { nameAr: "روبرت ليفاندوفسكي", nameEn: "Robert Lewandowski", playerId: "robert-lewandowski", goals: "109", clubsAr: "دورتموند، بايرن ميونخ، برشلونة", clubsEn: "Dortmund, Bayern Munich, Barcelona", clubIds: ["borussia-dortmund", "bayern-munich", "barcelona"] },
      { nameAr: "كريم بنزيما", nameEn: "Karim Benzema", playerId: "karim-benzema", goals: "90", clubsAr: "ليون، ريال مدريد", clubsEn: "Lyon, Real Madrid", clubIds: ["lyon", "real-madrid"] },
      { nameAr: "راؤول جونزاليس", nameEn: "Raúl González", playerId: "raul-gonzalez", goals: "71", clubsAr: "ريال مدريد، شالكه", clubsEn: "Real Madrid, Schalke", clubIds: ["real-madrid", "schalke-04"] },
      { nameAr: "كيليان مبابي", nameEn: "Kylian Mbappé", playerId: "kylian-mbappe", goals: "71", clubsAr: "موناكو، باريس سان جيرمان، ريال مدريد", clubsEn: "Monaco, PSG, Real Madrid", clubIds: ["monaco", "paris-saint-germain", "real-madrid"] },
    ],
    notesAr: ["رونالدو وميسي بعيدين جداً عن أقرب لاعب تاني، وده رقم قياسي صعب يتكسر. ميسي رقمه ثابت عند 129 لأنه بعد في الدوري الأمريكي مع إنتر ميامي.", "بعض المصادر بتكتب رونالدو 141 (بتحسب هدف من التصفيات)، لكن الرقم الرسمي لـUEFA في أغلب القوايم 140.", "مبابي (لاعب نشط) مساوي لراؤول عند 71، وبعض المصادر بتكتب له 70، فرقمه بيتغيّر."],
    notesEn: ["Ronaldo and Messi are far ahead of the next closest player, a record that is very hard to break. Messi's tally is fixed at 129 since he now plays in MLS with Inter Miami.", "Some sources list Ronaldo on 141 (counting a qualifying-round goal), but most lists, including UEFA's, give 140.", "Mbappé (still active) is level with Raúl on 71, though some sources say 70, so his figure keeps changing."]
  },
  {
    id: "world-cup-top-scorers",
    competitionId: "fifa-world-cup",
    competitionAr: "هدافو كأس العالم (كل العصور)",
    competitionEn: "FIFA World Cup all-time top scorers",
    asOf: "بعد نهاية نسخة 2026",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "كيليان مبابي", nameEn: "Kylian Mbappé", playerId: "kylian-mbappe", goals: "22", clubsAr: "فرنسا", clubsEn: "France" },
      { nameAr: "ليونيل ميسي", nameEn: "Lionel Messi", playerId: "lionel-messi", goals: "21", clubsAr: "الأرجنتين", clubsEn: "Argentina" },
      { nameAr: "ميروسلاف كلوزه", nameEn: "Miroslav Klose", playerId: "miroslav-klose", goals: "16", clubsAr: "ألمانيا", clubsEn: "Germany" },
      { nameAr: "رونالدو نازاريو", nameEn: "Ronaldo (Brazil)", playerId: "ronaldo-nazario", goals: "15", clubsAr: "البرازيل", clubsEn: "Brazil" },
      { nameAr: "جيرد مولر", nameEn: "Gerd Müller", playerId: "gerd-muller", goals: "14", clubsAr: "ألمانيا الغربية", clubsEn: "West Germany" },
      { nameAr: "جوست فونتين", nameEn: "Just Fontaine", playerId: "just-fontaine", goals: "13", clubsAr: "فرنسا", clubsEn: "France" },
    ],
    notesAr: ["الرقم اتغير في نسخة 2026 نفسها: ميسي ساوى رقم كلوزه (16) بهاتريك ضد الجزائر، ثم كسره بهدفين ضد النمسا ليوصل لـ18، بس مبابي عدّاه بعدها وخلص البطولة بـ22 هدف (منهم 10 في نسخة 2026 وكسب بيها الحذاء الذهبي للمرة الثانية على التوالي). كلوزه سجل الـ16 هدف بتوعه في 4 نسخ مختلفة (2002 لـ 2014)، وفونتين سجل الـ13 في نسخة واحدة بس (1958) وده رقم قياسي منفصل."],
    notesEn: ["The record changed within the 2026 tournament itself: Messi equalled Klose's record (16) with a hat-trick against Algeria, then broke it with a brace against Austria to reach 18, but Mbappé then passed him and finished the tournament with 22 (10 of them in 2026, winning his second straight Golden Boot). Klose's 16 came across four editions (2002–2014); Fontaine's 13 came in a single edition (1958) — a separate record."]
  },
  {
    id: "euro-top-scorers",
    competitionId: "uefa-euro",
    competitionAr: "هدافو بطولة أمم أوروبا (اليورو، كل العصور)",
    competitionEn: "UEFA European Championship all-time top scorers",
    asOf: "بعد يورو 2024 (UEFA وRSSSF)",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", playerId: "cristiano-ronaldo", goals: "14", clubsAr: "البرتغال", clubsEn: "Portugal" },
      { nameAr: "ميشيل بلاتيني", nameEn: "Michel Platini", playerId: "michel-platini", goals: "9", clubsAr: "فرنسا", clubsEn: "France" },
      { nameAr: "أنطوان جريزمان", nameEn: "Antoine Griezmann", playerId: "antoine-griezmann", goals: "7", clubsAr: "فرنسا", clubsEn: "France" },
      { nameAr: "آلان شيرر", nameEn: "Alan Shearer", playerId: "alan-shearer", goals: "7", clubsAr: "إنجلترا", clubsEn: "England" },
      { nameAr: "هاري كين", nameEn: "Harry Kane", playerId: "harry-kane", goals: "7", clubsAr: "إنجلترا", clubsEn: "England" },
      { nameAr: "ألفارو موراتا", nameEn: "Álvaro Morata", playerId: "alvaro-morata", goals: "7", clubsAr: "إسبانيا", clubsEn: "Spain" },
    ],
    notesAr: ["بلاتيني سجل 9 أهدافه كلها في نسخة واحدة (1984)، وده رقم قياسي منفصل لأكتر أهداف في نسخة واحدة.", "جريزمان وشيرر وكين وموراتا متساويين في المركز التالت بـ7 أهداف لكل واحد."],
    notesEn: ["Platini's 9 goals all came in a single edition (1984) — a separate record for most goals in one tournament.", "Griezmann, Shearer, Kane and Morata are tied for third on 7 goals each."]
  },
  {
    id: "afcon-top-scorers",
    competitionId: "africa-cup-of-nations",
    competitionAr: "هدافو كأس الأمم الأفريقية (كل العصور)",
    competitionEn: "Africa Cup of Nations all-time top scorers",
    asOf: "قبل نسخة 2025 (CAF وfoot-africa وSoccerway)",
    dataStatus: "sourceChecked",
    scorers: [
      { nameAr: "صامويل إيتو", nameEn: "Samuel Eto'o", playerId: "samuel-etoo", goals: "18", clubsAr: "الكاميرون", clubsEn: "Cameroon" },
      { nameAr: "لوران بوكو", nameEn: "Laurent Pokou", playerId: "laurent-pokou", goals: "14", clubsAr: "كوت ديفوار", clubsEn: "Ivory Coast" },
      { nameAr: "رشيدي يكيني", nameEn: "Rashidi Yekini", playerId: "rashidi-yekini", goals: "13", clubsAr: "نيجيريا", clubsEn: "Nigeria" },
      { nameAr: "حسن الشاذلي", nameEn: "Hassan El-Shazly", playerId: "hassan-el-shazly", goals: "12", clubsAr: "مصر", clubsEn: "Egypt" },
      { nameAr: "حسام حسن", nameEn: "Hossam Hassan", playerId: "hossam-hassan", goals: "11", clubsAr: "مصر", clubsEn: "Egypt" },
      { nameAr: "ديدييه دروجبا", nameEn: "Didier Drogba", playerId: "didier-drogba", goals: "11", clubsAr: "كوت ديفوار", clubsEn: "Ivory Coast" },
    ],
    notesAr: ["إيتو سجل الـ18 في 29 مباراة على 6 نسخ بين 2000 و2010. بوكو سجل 14 في 12 مباراة. الشاذلي سجل 12 هدف في 8 مباريات بس (أحسن معدل بين الهدافين التاريخيين)، وباتريك مبوما (الكاميرون) كمان عنده 11 مع حسام ودروجبا. محمد صلاح عنده 7 أهداف قبل نسخة 2025."],
    notesEn: ["Eto'o scored his 18 in 29 matches across six tournaments between 2000 and 2010. Pokou scored 14 in 12 matches. El-Shazly scored 12 in just 8 matches (the best ratio among the leading scorers), and Patrick Mboma (Cameroon) is also on 11 alongside Hossam and Drogba. Mohamed Salah had 7 goals before the 2025 edition."]
  },
];

// clubTopScorers: هداف كل نادي كبير على مدار تاريخه (كل المسابقات مع النادي، مش الدوري بس)، لأشهر 12 نادي.
// competitionScope هنا يعني "كل المسابقات مع النادي" مش بطولة واحدة. clubId بيطابق نفس الـ id في clubs-data.js لما يكون موجود.
const clubTopScorers = [
  {
    clubId: "real-madrid", clubAr: "ريال مدريد", clubEn: "Real Madrid",
    nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", playerId: "cristiano-ronaldo", goals: "450", years: "2009-2018",
    dataStatus: "sourceChecked", noteAr: "450 هدف في 438 مباراة مع ريال مدريد.", noteEn: "450 goals in 438 matches for Real Madrid."
  },
  {
    clubId: "barcelona", clubAr: "برشلونة", clubEn: "FC Barcelona",
    nameAr: "ليونيل ميسي", nameEn: "Lionel Messi", playerId: "lionel-messi", goals: "672", years: "2004-2021",
    dataStatus: "sourceChecked", noteAr: "672 هدف في 778 مباراة، بفارق كبير عن أقرب لاعب تاني: سيزار رودريجيز في المركز الثاني (232)، وسواريز تالت (198).", noteEn: "672 goals in 778 matches, far ahead of the next names: César Rodríguez is second (232) and Luis Suárez third (198)."
  },
  {
    clubId: "manchester-united", clubAr: "مانشستر يونايتد", clubEn: "Manchester United",
    nameAr: "واين روني", nameEn: "Wayne Rooney", playerId: "wayne-rooney", goals: "253", years: "2004-2017",
    dataStatus: "sourceChecked", noteAr: "قدام بوبي تشارلتون (249 هدف) اللي كان صاحب الرقم قبله.", noteEn: "Ahead of Bobby Charlton (249), the previous record holder."
  },
  {
    clubId: "liverpool", clubAr: "ليفربول", clubEn: "Liverpool",
    nameAr: "إيان راش", nameEn: "Ian Rush", playerId: "ian-rush", goals: "346", years: "1980-1996 (فترتين)",
    dataStatus: "sourceChecked", noteAr: "محمد صلاح خلّص مشواره مع ليفربول بـ257 هدف في كل المسابقات، تالت هداف تاريخي للنادي بعد راش (346) وروجر هانت (285)، وغادر في صيف 2026.", noteEn: "Mohamed Salah finished his Liverpool career with 257 goals in all competitions, third on the club's all-time list behind Rush (346) and Roger Hunt (285), and left in summer 2026."
  },
  {
    clubId: "arsenal", clubAr: "أرسنال", clubEn: "Arsenal",
    nameAr: "تييري هنري", nameEn: "Thierry Henry", playerId: "thierry-henry", goals: "228", years: "1999-2007 (وفترة قصيرة في 2012)",
    dataStatus: "sourceChecked", noteAr: "", noteEn: ""
  },
  {
    clubId: "chelsea", clubAr: "تشيلسي", clubEn: "Chelsea",
    nameAr: "فرانك لامبارد", nameEn: "Frank Lampard", playerId: "frank-lampard", goals: "211", years: "2001-2014",
    dataStatus: "sourceChecked", noteAr: "", noteEn: ""
  },
  {
    clubId: "manchester-city", clubAr: "مانشستر سيتي", clubEn: "Manchester City",
    nameAr: "سيرجيو أجويرو", nameEn: "Sergio Agüero", playerId: "sergio-aguero", goals: "260", years: "2011-2021",
    dataStatus: "sourceChecked", noteAr: "", noteEn: ""
  },
  {
    clubId: "tottenham", clubAr: "توتنهام هوتسبير", clubEn: "Tottenham Hotspur",
    nameAr: "هاري كين", nameEn: "Harry Kane", playerId: "harry-kane", goals: "280", years: "2011-2023",
    dataStatus: "sourceChecked", noteAr: "280 هدف في 435 مباراة، قدام جيمي جرايفز (266) اللي كان صاحب الرقم لأكتر من 50 سنة.", noteEn: "280 goals in 435 matches, ahead of Jimmy Greaves (266), who held the record for over 50 years."
  },
  {
    clubId: "bayern-munich", clubAr: "بايرن ميونخ", clubEn: "Bayern Munich",
    nameAr: "جيرد مولر", nameEn: "Gerd Müller", playerId: "gerd-muller", goals: "566", years: "1964-1979",
    dataStatus: "sourceChecked", noteAr: "رقم كل المسابقات مع بايرن في 607 مباراة، مش الدوري الألماني بس (اللي فيه 365 هدف). بعض المصادر بتكتب 563.", noteEn: "Goals across all competitions for Bayern in 607 games, not just the Bundesliga (where his tally is 365). Some sources give 563."
  },
  {
    clubId: "juventus", clubAr: "يوفنتوس", clubEn: "Juventus",
    nameAr: "أليساندرو دل بييرو", nameEn: "Alessandro Del Piero", playerId: "alessandro-del-piero", goals: "290", years: "1993-2012",
    dataStatus: "sourceChecked", noteAr: "بعض المصادر (UEFA) بتكتب 288، والرقم الأشهر 290 في 705 مباراة.", noteEn: "Some sources (UEFA) give 288; the most widely quoted figure is 290 in 705 matches."
  },
  {
    clubId: "paris-saint-germain", clubAr: "باريس سان جيرمان", clubEn: "Paris Saint-Germain",
    nameAr: "كيليان مبابي", nameEn: "Kylian Mbappé", playerId: "kylian-mbappe", goals: "256", years: "2017-2024",
    dataStatus: "sourceChecked", noteAr: "قدام إدينسون كافاني اللي كان صاحب الرقم قبله.", noteEn: "Overtook Edinson Cavani, the previous record holder."
  },
  {
    clubId: null, clubAr: "الأهلي والزمالك (مصر)", clubEn: "Al Ahly and Zamalek (Egypt)",
    nameAr: "غير مؤكد", nameEn: "Not confirmed", playerId: null, goals: "", years: "",
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
    competitionId: "fifa-world-cup",
    nameAr: "جييرمو ستابيلي", nameEn: "Guillermo Stábile",
    countryAr: "الأرجنتين", countryEn: "Argentina",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 1934,
    competitionId: "fifa-world-cup",
    nameAr: "أولدريش نيدلي", nameEn: "Oldřich Nejedlý",
    countryAr: "تشيكوسلوفاكيا", countryEn: "Czechoslovakia",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1938,
    competitionId: "fifa-world-cup",
    nameAr: "ليونيداس", nameEn: "Leônidas",
    countryAr: "البرازيل", countryEn: "Brazil",
    tied: false,
    goals: 7,
    dataStatus: "sourceChecked"
  },
  {
    year: 1950,
    competitionId: "fifa-world-cup",
    nameAr: "أديمير", nameEn: "Ademir",
    countryAr: "البرازيل", countryEn: "Brazil",
    tied: false,
    goals: 9,
    noteAr: "في خلاف قديم: بعض المصادر كتبت 8 لأن هدفين في مباراة إسبانيا (6-1) اتنسبوا لغيره. FIFA وWikipedia دلوقتي بيحسبوا 9.",
    noteEn: "Long-running discrepancy: some sources say 8 because two goals in the 6-1 win over Spain were credited to others. FIFA and Wikipedia now count 9.",
    dataStatus: "sourceChecked"
  },
  {
    year: 1954,
    competitionId: "fifa-world-cup",
    nameAr: "شاندور كوتشيش", nameEn: "Sándor Kocsis",
    countryAr: "المجر", countryEn: "Hungary",
    tied: false,
    goals: 11,
    dataStatus: "sourceChecked"
  },
  {
    year: 1958,
    competitionId: "fifa-world-cup",
    nameAr: "جوست فونتين", nameEn: "Just Fontaine",
    countryAr: "فرنسا", countryEn: "France",
    tied: false,
    goals: 13,
    dataStatus: "sourceChecked"
  },
  {
    year: 1962,
    competitionId: "fifa-world-cup",
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
    competitionId: "fifa-world-cup",
    nameAr: "يوسيبيو", nameEn: "Eusébio",
    countryAr: "البرتغال", countryEn: "Portugal",
    tied: false,
    goals: 9,
    dataStatus: "sourceChecked"
  },
  {
    year: 1970,
    competitionId: "fifa-world-cup",
    nameAr: "جيرد مولر", nameEn: "Gerd Müller",
    countryAr: "ألمانيا الغربية", countryEn: "West Germany",
    tied: false,
    goals: 10,
    dataStatus: "sourceChecked"
  },
  {
    year: 1974,
    competitionId: "fifa-world-cup",
    nameAr: "جرزيجوش لاتو", nameEn: "Grzegorz Lato",
    countryAr: "بولندا", countryEn: "Poland",
    tied: false,
    goals: 7,
    dataStatus: "sourceChecked"
  },
  {
    year: 1978,
    competitionId: "fifa-world-cup",
    nameAr: "ماريو كيمبس", nameEn: "Mario Kempes",
    countryAr: "الأرجنتين", countryEn: "Argentina",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1982,
    competitionId: "fifa-world-cup",
    nameAr: "باولو روسي", nameEn: "Paolo Rossi",
    countryAr: "إيطاليا", countryEn: "Italy",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1986,
    competitionId: "fifa-world-cup",
    nameAr: "جاري لينيكر", nameEn: "Gary Lineker",
    countryAr: "إنجلترا", countryEn: "England",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1990,
    competitionId: "fifa-world-cup",
    nameAr: "سالفاتوري سكيلاتشي", nameEn: "Salvatore Schillaci",
    countryAr: "إيطاليا", countryEn: "Italy",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1994,
    competitionId: "fifa-world-cup",
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
    competitionId: "fifa-world-cup",
    nameAr: "دافور شوكر", nameEn: "Davor Šuker",
    countryAr: "كرواتيا", countryEn: "Croatia",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 2002,
    competitionId: "fifa-world-cup",
    nameAr: "رونالدو نازاريو", nameEn: "Ronaldo",
    countryAr: "البرازيل", countryEn: "Brazil",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 2006,
    competitionId: "fifa-world-cup",
    nameAr: "ميروسلاف كلوزه", nameEn: "Miroslav Klose",
    countryAr: "ألمانيا", countryEn: "Germany",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2010,
    competitionId: "fifa-world-cup",
    nameAr: "توماس مولر وديفيد فيا وفيسلي سنايدر وديجو فورلان",
    nameEn: "Thomas Müller / David Villa / Wesley Sneijder / Diego Forlán",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "توماس مولر", nameEn: "Thomas Müller", countryAr: "ألمانيا", countryEn: "Germany" }, { nameAr: "ديفيد فيا", nameEn: "David Villa", countryAr: "إسبانيا", countryEn: "Spain" }, { nameAr: "فيسلي سنايدر", nameEn: "Wesley Sneijder", countryAr: "هولندا", countryEn: "Netherlands" }, { nameAr: "ديجو فورلان", nameEn: "Diego Forlán", countryAr: "أوروجواي", countryEn: "Uruguay" }],
    goals: 5,
    noteAr: "الأربعة سجلوا 5 أهداف، وجائزة الحذاء الذهبي اتمنحت لتوماس مولر بمعيار عدد التمريرات الحاسمة.",
    noteEn: "All four scored 5 goals; the Golden Boot was awarded to Thomas Müller on the assists tiebreaker.",
    dataStatus: "sourceChecked"
  },
  {
    year: 2014,
    competitionId: "fifa-world-cup",
    nameAr: "خاميس رودريجيز", nameEn: "James Rodríguez",
    countryAr: "كولومبيا", countryEn: "Colombia",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 2018,
    competitionId: "fifa-world-cup",
    nameAr: "هاري كين", nameEn: "Harry Kane",
    countryAr: "إنجلترا", countryEn: "England",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 2022,
    competitionId: "fifa-world-cup",
    nameAr: "كيليان مبابي", nameEn: "Kylian Mbappé",
    countryAr: "فرنسا", countryEn: "France",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 2026,
    competitionId: "fifa-world-cup",
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
    competitionId: "uefa-euro",
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
    competitionId: "uefa-euro",
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
    competitionId: "uefa-euro",
    nameAr: "دراجان دجاييتش", nameEn: "Dragan Džajić",
    countryAr: "يوغوسلافيا", countryEn: "Yugoslavia",
    tied: false,
    goals: 2,
    dataStatus: "sourceChecked"
  },
  {
    year: 1972,
    competitionId: "uefa-euro",
    nameAr: "جيرد مولر", nameEn: "Gerd Müller",
    countryAr: "ألمانيا الغربية", countryEn: "West Germany",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1976,
    competitionId: "uefa-euro",
    nameAr: "ديتر مولر", nameEn: "Dieter Müller",
    countryAr: "ألمانيا الغربية", countryEn: "West Germany",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1980,
    competitionId: "uefa-euro",
    nameAr: "كلاوس ألوفس", nameEn: "Klaus Allofs",
    countryAr: "ألمانيا الغربية", countryEn: "West Germany",
    tied: false,
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 1984,
    competitionId: "uefa-euro",
    nameAr: "ميشيل بلاتيني", nameEn: "Michel Platini",
    countryAr: "فرنسا", countryEn: "France",
    tied: false,
    goals: 9,
    dataStatus: "sourceChecked"
  },
  {
    year: 1988,
    competitionId: "uefa-euro",
    nameAr: "ماركو فان باستن", nameEn: "Marco van Basten",
    countryAr: "هولندا", countryEn: "Netherlands",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1992,
    competitionId: "uefa-euro",
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
    competitionId: "uefa-euro",
    nameAr: "آلان شيرر", nameEn: "Alan Shearer",
    countryAr: "إنجلترا", countryEn: "England",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2000,
    competitionId: "uefa-euro",
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
    competitionId: "uefa-euro",
    nameAr: "ميلان باروش", nameEn: "Milan Baroš",
    countryAr: "التشيك", countryEn: "Czech Republic",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2008,
    competitionId: "uefa-euro",
    nameAr: "ديفيد فيا", nameEn: "David Villa",
    countryAr: "إسبانيا", countryEn: "Spain",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 2012,
    competitionId: "uefa-euro",
    nameAr: "فرناندو توريس وآلان دزاجويف وماريو جوميز وماريو ماندجوكيتش وماريو بالوتيلي وكريستيانو رونالدو",
    nameEn: "Fernando Torres / Alan Dzagoev / Mario Gómez / Mario Mandžukić / Mario Balotelli / Cristiano Ronaldo",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "فرناندو توريس", nameEn: "Fernando Torres", countryAr: "إسبانيا", countryEn: "Spain" }, { nameAr: "آلان دزاجويف", nameEn: "Alan Dzagoev", countryAr: "روسيا", countryEn: "Russia" }, { nameAr: "ماريو جوميز", nameEn: "Mario Gómez", countryAr: "ألمانيا", countryEn: "Germany" }, { nameAr: "ماريو ماندجوكيتش", nameEn: "Mario Mandžukić", countryAr: "كرواتيا", countryEn: "Croatia" }, { nameAr: "ماريو بالوتيلي", nameEn: "Mario Balotelli", countryAr: "إيطاليا", countryEn: "Italy" }, { nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", countryAr: "البرتغال", countryEn: "Portugal" }],
    goals: 3,
    noteAr: "UEFA منحت الكأس رسمياً لتوريس بمعيار التمريرة الحاسمة والدقائق الأقل، لكن الستة سجلوا 3 أهداف.",
    noteEn: "UEFA officially awarded the trophy to Torres on the assist and fewest-minutes tiebreaker, but all six scored 3 goals.",
    dataStatus: "sourceChecked"
  },
  {
    year: 2016,
    competitionId: "uefa-euro",
    nameAr: "أنطوان جريزمان", nameEn: "Antoine Griezmann",
    countryAr: "فرنسا", countryEn: "France",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 2020,
    competitionId: "uefa-euro",
    nameAr: "كريستيانو رونالدو وباتريك شيك",
    nameEn: "Cristiano Ronaldo / Patrik Schick",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "كريستيانو رونالدو", nameEn: "Cristiano Ronaldo", countryAr: "البرتغال", countryEn: "Portugal" }, { nameAr: "باتريك شيك", nameEn: "Patrik Schick", countryAr: "التشيك", countryEn: "Czech Republic" }],
    goals: 5,
    noteAr: "رونالدو أخد الكأس رسمياً بمعيار تمريرة حاسمة واحدة، وشيك سجل نفس عدد الأهداف.",
    noteEn: "Ronaldo received the trophy on the tiebreaker of one assist; Schick scored the same number of goals.",
    dataStatus: "sourceChecked"
  },
  {
    year: 2024,
    competitionId: "uefa-euro",
    nameAr: "كودي جاكبو وهاري كين وجمال موسيالا وجورجيس ميكاوتادزي وداني أولمو وإيفان شرانتس",
    nameEn: "Cody Gakpo / Harry Kane / Jamal Musiala / Georges Mikautadze / Dani Olmo / Ivan Schranz",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "كودي جاكبو", nameEn: "Cody Gakpo", countryAr: "هولندا", countryEn: "Netherlands" }, { nameAr: "هاري كين", nameEn: "Harry Kane", countryAr: "إنجلترا", countryEn: "England" }, { nameAr: "جمال موسيالا", nameEn: "Jamal Musiala", countryAr: "ألمانيا", countryEn: "Germany" }, { nameAr: "جورجيس ميكاوتادزي", nameEn: "Georges Mikautadze", countryAr: "جورجيا", countryEn: "Georgia" }, { nameAr: "داني أولمو", nameEn: "Dani Olmo", countryAr: "إسبانيا", countryEn: "Spain" }, { nameAr: "إيفان شرانتس", nameEn: "Ivan Schranz", countryAr: "سلوفاكيا", countryEn: "Slovakia" }],
    goals: 3,
    noteAr: "في 2024 مفيش معيار لكسر التعادل، فالجايزة اتقسمت على الستة.",
    noteEn: "No tiebreaker was applied in 2024, so the award was shared among all six.",
    dataStatus: "sourceChecked"
  },
];

// afconGoldenBoot: هداف كل نسخة أمم أفريقيا لوحدها (35 نسخة، 1957-2025). نسخة 2025 (المغرب، خلصت في يناير 2026) الهداف فيها براهيم دياز بـ5 أهداف. نسخة 2006 اتصلّحت: إيتو لوحده بـ5 أهداف.
const afconGoldenBoot = [
  {
    year: 1957,
    competitionId: "africa-cup-of-nations",
    nameAr: "العطار (الديبا)", nameEn: "Ad-Diba (El-Attar)",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1959,
    competitionId: "africa-cup-of-nations",
    nameAr: "محمود الجوهري", nameEn: "Mahmoud El-Gohary",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 1962,
    competitionId: "africa-cup-of-nations",
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
    competitionId: "africa-cup-of-nations",
    nameAr: "حسن الشاذلي", nameEn: "Hassan El-Shazly",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1965,
    competitionId: "africa-cup-of-nations",
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
    competitionId: "africa-cup-of-nations",
    nameAr: "لوران بوكو", nameEn: "Laurent Pokou",
    countryAr: "ساحل العاج", countryEn: "Ivory Coast",
    tied: false,
    goals: 6,
    dataStatus: "sourceChecked"
  },
  {
    year: 1970,
    competitionId: "africa-cup-of-nations",
    nameAr: "لوران بوكو", nameEn: "Laurent Pokou",
    countryAr: "ساحل العاج", countryEn: "Ivory Coast",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 1972,
    competitionId: "africa-cup-of-nations",
    nameAr: "سليف كيتا", nameEn: "Salif Keïta",
    countryAr: "مالي", countryEn: "Mali",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1974,
    competitionId: "africa-cup-of-nations",
    nameAr: "نداي مولامبا", nameEn: "Ndaye Mulamba",
    countryAr: "زائير", countryEn: "Zaire",
    tied: false,
    goals: 9,
    dataStatus: "sourceChecked"
  },
  {
    year: 1976,
    competitionId: "africa-cup-of-nations",
    nameAr: "نجو ليا", nameEn: "Njo Léa",
    countryAr: "غينيا", countryEn: "Guinea",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1978,
    competitionId: "africa-cup-of-nations",
    nameAr: "فيليب أوموندي", nameEn: "Phillip Omondi",
    countryAr: "أوغندا", countryEn: "Uganda",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1980,
    competitionId: "africa-cup-of-nations",
    nameAr: "سيجون أوديجبامي", nameEn: "Segun Odegbami",
    countryAr: "نيجيريا", countryEn: "Nigeria",
    tied: false,
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 1982,
    competitionId: "africa-cup-of-nations",
    nameAr: "جورج الحسن", nameEn: "George Alhassan",
    countryAr: "غانا", countryEn: "Ghana",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1984,
    competitionId: "africa-cup-of-nations",
    nameAr: "طاهر أبو زيد", nameEn: "Taher Abouzeid",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1986,
    competitionId: "africa-cup-of-nations",
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
    competitionId: "africa-cup-of-nations",
    nameAr: "لخضر بلومي وروجيه ميلا وجمال عبد الحميد وعبدولاي تراوري",
    nameEn: "Lakhdar Belloumi / Roger Milla / Gamal Abdelhamid / Abdoulaye Traoré",
    countryAr: null, countryEn: null,
    tied: true,
    tiedScorers: [{ nameAr: "لخضر بلومي", nameEn: "Lakhdar Belloumi", countryAr: "الجزائر", countryEn: "Algeria" }, { nameAr: "روجيه ميلا", nameEn: "Roger Milla", countryAr: "الكاميرون", countryEn: "Cameroon" }, { nameAr: "جمال عبد الحميد", nameEn: "Gamal Abdelhamid", countryAr: "مصر", countryEn: "Egypt" }, { nameAr: "عبدولاي تراوري", nameEn: "Abdoulaye Traoré", countryAr: "ساحل العاج", countryEn: "Ivory Coast" }],
    goals: 2,
    noteAr: "الأربعة سجلوا هدفين لكل واحد (RSSSF وCAF وWikipedia). بعض النشرات القديمة (رويترز والأهرام) كتبت 4 بالغلط.",
    noteEn: "All four scored two goals each (RSSSF, CAF, Wikipedia). Some older wire lists (Reuters, Ahram) wrongly printed 4.",
    dataStatus: "sourceChecked"
  },
  {
    year: 1990,
    competitionId: "africa-cup-of-nations",
    nameAr: "جمال منعار", nameEn: "Djamel Menad",
    countryAr: "الجزائر", countryEn: "Algeria",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1992,
    competitionId: "africa-cup-of-nations",
    nameAr: "راشيدي يكيني", nameEn: "Rashidi Yekini",
    countryAr: "نيجيريا", countryEn: "Nigeria",
    tied: false,
    goals: 4,
    dataStatus: "sourceChecked"
  },
  {
    year: 1994,
    competitionId: "africa-cup-of-nations",
    nameAr: "راشيدي يكيني", nameEn: "Rashidi Yekini",
    countryAr: "نيجيريا", countryEn: "Nigeria",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1996,
    competitionId: "africa-cup-of-nations",
    nameAr: "كالوشا بوايلا", nameEn: "Kalusha Bwalya",
    countryAr: "زامبيا", countryEn: "Zambia",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 1998,
    competitionId: "africa-cup-of-nations",
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
    competitionId: "africa-cup-of-nations",
    nameAr: "شون بارتليت", nameEn: "Shaun Bartlett",
    countryAr: "جنوب أفريقيا", countryEn: "South Africa",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2002,
    competitionId: "africa-cup-of-nations",
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
    competitionId: "africa-cup-of-nations",
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
    competitionId: "africa-cup-of-nations",
    nameAr: "صامويل إيتو", nameEn: "Samuel Eto'o",
    countryAr: "الكاميرون", countryEn: "Cameroon",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2008,
    competitionId: "africa-cup-of-nations",
    nameAr: "صامويل إيتو", nameEn: "Samuel Eto'o",
    countryAr: "الكاميرون", countryEn: "Cameroon",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2010,
    competitionId: "africa-cup-of-nations",
    nameAr: "محمد ناجي (جدو)", nameEn: "Mohamed Nagy 'Gedo'",
    countryAr: "مصر", countryEn: "Egypt",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2012,
    competitionId: "africa-cup-of-nations",
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
    competitionId: "africa-cup-of-nations",
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
    competitionId: "africa-cup-of-nations",
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
    competitionId: "africa-cup-of-nations",
    nameAr: "جونيور كابانانجا", nameEn: "Junior Kabananga",
    countryAr: "الكونغو الديمقراطية", countryEn: "DR Congo",
    tied: false,
    goals: 3,
    dataStatus: "sourceChecked"
  },
  {
    year: 2019,
    competitionId: "africa-cup-of-nations",
    nameAr: "أوديون إيجالو", nameEn: "Odion Ighalo",
    countryAr: "نيجيريا", countryEn: "Nigeria",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2021,
    competitionId: "africa-cup-of-nations",
    nameAr: "فينسنت أبو بكر", nameEn: "Vincent Aboubakar",
    countryAr: "الكاميرون", countryEn: "Cameroon",
    tied: false,
    goals: 8,
    dataStatus: "sourceChecked"
  },
  {
    year: 2023,
    competitionId: "africa-cup-of-nations",
    nameAr: "إميليو نسوي", nameEn: "Emilio Nsue",
    countryAr: "غينيا الاستوائية", countryEn: "Equatorial Guinea",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
  {
    year: 2025,
    competitionId: "africa-cup-of-nations",
    nameAr: "براهيم دياز", nameEn: "Brahim Díaz",
    countryAr: "المغرب", countryEn: "Morocco",
    tied: false,
    goals: 5,
    dataStatus: "sourceChecked"
  },
];

const records = [
  {
    id: "most-goals-single-match-major-league",
    relatedCompetitionIds: ["premier-league"],
    relatedClubIds: ["manchester-united", "newcastle-united", "tottenham", "manchester-city"],
    relatedPlayerIds: ["andrew-cole", "alan-shearer", "jermain-defoe", "dimitar-berbatov", "sergio-aguero"],
    categoryAr: "أكتر أهداف لاعب واحد في مباراة واحدة (دوري كبير)", categoryEn: "Most goals by one player in a single match (major league)",
    holderAr: "خمسة لاعيبة مشتركين: آندي كول، آلان شيرر، جيرمين ديفو، ديميتار بيرباتوف، سيرجيو أجويرو", holderEn: "Five joint holders: Andy Cole, Alan Shearer, Jermain Defoe, Dimitar Berbatov, Sergio Agüero",
    valueAr: "5 أهداف", valueEn: "5 goals",
    contextAr: "كول: مانشستر يونايتد ضد إبسويتش (مارس 1995)، شيرر: نيوكاسل ضد شيفيلد ويدنزداي (سبتمبر 1999)، ديفو: توتنهام ضد ويجان (نوفمبر 2009)، بيرباتوف: مانشستر يونايتد ضد بلاكبيرن (نوفمبر 2010)، أجويرو: مانشستر سيتي ضد نيوكاسل (أكتوبر 2015). وده رقم الدوري الإنجليزي الممتاز تحديداً.",
    contextEn: "Cole: Manchester United v Ipswich (Mar 1995); Shearer: Newcastle v Sheffield Wednesday (Sep 1999); Defoe: Tottenham v Wigan (Nov 2009); Berbatov: Manchester United v Blackburn (Nov 2010); Agüero: Manchester City v Newcastle (Oct 2015). This is specifically the Premier League record.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-goals-single-match-overall",
    relatedCompetitionIds: [],
    relatedClubIds: [],
    relatedPlayerIds: [],
    categoryAr: "أكتر أهداف لاعب واحد في مباراة واحدة (كل المستويات، مش دوري كبير)", categoryEn: "Most goals by one player in a single match (any level, not a major league)",
    holderAr: "ياتسيك ماجدزينسكي", holderEn: "Jacek Magdziński",
    valueAr: "22 هدف", valueEn: "22 goals",
    contextAr: "سجلهم لفريق فيبجيجي ريفال في الفوز 53-0 على بومورانين نوجارد، في الدرجة السادسة البولندية سنة 2021. ده مستوى هواة، فمتقارنش برقم الدوريات الاحترافية. أعلى رقم في مباراة احترافية موثقة: ستيفان ديمبيكي بـ16 هدف مع لانس في كأس فرنسا 1942، وأعلى رقم في دوري الدرجة الأولى: 17 هدف لباسانج تشيرينج في بوتان 2007.",
    contextEn: "Scored for Wybrzeże Rewalskie Rewal in a 53-0 win over Pomorzanin Nowogard in the Polish sixth division in 2021. This is amateur level, so it should not be compared with professional-league figures. The highest documented professional-match figure is 16 by Stefan Dembicki for Lens in the 1942 Coupe de France, and in a top-flight league it is 17 by Passang Tshering in Bhutan in 2007.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-goals-calendar-year",
    relatedCompetitionIds: [],
    relatedClubIds: ["barcelona"],
    relatedPlayerIds: ["lionel-messi"],
    categoryAr: "أكتر أهداف لاعب في سنة ميلادية واحدة", categoryEn: "Most goals by a player in a single calendar year",
    holderAr: "ليونيل ميسي", holderEn: "Lionel Messi",
    valueAr: "91 هدف", valueEn: "91 goals",
    contextAr: "في سنة 2012 مع برشلونة والأرجنتين مجتمعين.", contextEn: "In 2012, for Barcelona and Argentina combined.",
    dataStatus: "sourceChecked"
  },
  {
    id: "fastest-hat-trick-major-league",
    relatedCompetitionIds: ["premier-league"],
    relatedClubIds: ["southampton"],
    relatedPlayerIds: ["sadio-mane"],
    categoryAr: "أسرع هاتريك في الدوري الإنجليزي الممتاز", categoryEn: "Fastest hat-trick in the Premier League",
    holderAr: "سادو مانيه", holderEn: "Sadio Mané",
    valueAr: "دقيقتين و56 ثانية", valueEn: "2 minutes 56 seconds",
    contextAr: "سجلهم مع ساوثهامبتون ضد أستون فيلا في 2015 (6-1). ده رقم الدوري الإنجليزي تحديداً، وفيه هاتريكات أسرع في دوريات تانية، زي إدواردو ماجليوني مع إندبندينتي في الأرجنتين سنة 1973 (دقيقة و51 ثانية).", contextEn: "Scored for Southampton against Aston Villa in 2015 (6-1). This is the Premier League record specifically; faster hat-tricks exist in other leagues, such as Eduardo Maglioni for Independiente in Argentina in 1973 (1 min 51 s).",
    dataStatus: "sourceChecked"
  },
  {
    id: "fastest-hat-trick-overall",
    relatedCompetitionIds: [],
    relatedClubIds: [],
    relatedPlayerIds: [],
    categoryAr: "أسرع هاتريك في تاريخ كرة القدم (كل المستويات، مش دوري كبير)", categoryEn: "Fastest hat-trick in football history (any level, not a major league)",
    holderAr: "أليكس تور", holderEn: "Alex Torr",
    valueAr: "70 ثانية", valueEn: "70 seconds",
    contextAr: "سجلها في مباراة هواة (دوري الأحد في شيفيلد) سنة 2013 مع فريق راوسون سبرينجز في الفوز 7-1. مستوى المباراة هواة، فمتقارنش برقم الدوريات الكبرى.",
    contextEn: "Scored in a Sunday-league amateur match in Sheffield in 2013 for Rawson Springs in a 7-1 win. It is an amateur-level record, so it should not be compared with major-league figures.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-appearances-career",
    relatedCompetitionIds: [],
    relatedClubIds: [],
    relatedPlayerIds: ["fabio-maciel"],
    categoryAr: "أكتر لاعب مباريات رسمية في مشواره الاحترافي", categoryEn: "Most official career appearances by a professional player",
    holderAr: "فابيو (حارس مرمى فلومينينسي)", holderEn: "Fábio (Fluminense goalkeeper)",
    valueAr: "أكتر من 1,400 مباراة", valueEn: "Over 1,400 matches",
    contextAr: "كسر رقم بيتر شيلتون في أغسطس 2025 بمباراته رقم 1,391. شيلتون كان صاحب الرقم لحوالي 28 سنة بـ1,390 مباراة حسب جينيس (وهو بيحسبها 1,387). الرقم الدقيق لفابيو دلوقتي بيزيد باستمرار (Wikipedia بتكتب أكتر من 1,435)، ولا الفيفا ولا الكونميبول أعلنوه رسمياً كرقم قياسي.",
    contextEn: "He broke Peter Shilton's record in August 2025 with his 1,391st match. Shilton held it for about 28 years with 1,390 per Guinness (he counts 1,387). Fábio's exact current total keeps rising (Wikipedia says over 1,435), and neither FIFA nor CONMEBOL has officially declared it a record.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-expensive-transfer",
    relatedCompetitionIds: [],
    relatedClubIds: ["barcelona", "paris-saint-germain"],
    relatedPlayerIds: ["neymar"],
    categoryAr: "أغلى صفقة انتقال في تاريخ كرة القدم", categoryEn: "Most expensive transfer in football history",
    holderAr: "نيمار", holderEn: "Neymar",
    valueAr: "حوالي 222 مليون يورو", valueEn: "About €222 million",
    contextAr: "من برشلونة لباريس سان جيرمان سنة 2017 (222 مليون يورو)، والرقم لسه صامد لحد سبتمبر 2026 بعد انتهاء فترة انتقالات الصيف. التاني مبابي (180 مليون يورو).", contextEn: "From Barcelona to Paris Saint-Germain in 2017 (€222 million); still the record as of September 2026 after the summer window closed. Second is Mbappé (€180 million).",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-ballon-dor",
    relatedCompetitionIds: [],
    relatedClubIds: [],
    relatedPlayerIds: ["lionel-messi"],
    categoryAr: "أكتر لاعب فوزاً بالكرة الذهبية", categoryEn: "Most Ballon d'Or wins",
    holderAr: "ليونيل ميسي", holderEn: "Lionel Messi",
    valueAr: "8 مرات", valueEn: "8 times",
    contextAr: "كريستيانو رونالدو تاني بـ5 مرات.", contextEn: "Cristiano Ronaldo is second with 5 wins.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-champions-league-titles-club",
    relatedCompetitionIds: ["uefa-champions-league"],
    relatedClubIds: ["real-madrid"],
    relatedPlayerIds: [],
    categoryAr: "أكتر نادي كسب دوري أبطال أوروبا", categoryEn: "Most UEFA Champions League / European Cup titles by a club",
    holderAr: "ريال مدريد", holderEn: "Real Madrid",
    valueAr: "15 لقب", valueEn: "15 titles",
    contextAr: "", contextEn: "",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-world-cup-titles",
    relatedCompetitionIds: ["fifa-world-cup"],
    relatedClubIds: [],
    relatedPlayerIds: [],
    categoryAr: "أكتر منتخب كسب كأس العالم", categoryEn: "Most FIFA World Cup titles",
    holderAr: "البرازيل", holderEn: "Brazil",
    valueAr: "5 مرات", valueEn: "5 times",
    contextAr: "المنتخب الوحيد اللي لعب في كل نسخ كأس العالم من غير غياب.", contextEn: "The only team to have played in every World Cup edition without missing one.",
    dataStatus: "sourceChecked"
  },
  {
    id: "longest-unbeaten-run-league-season",
    relatedCompetitionIds: ["premier-league", "serie-a", "german-championship"],
    relatedClubIds: ["arsenal", "juventus", "bayer-leverkusen"],
    relatedPlayerIds: [],
    categoryAr: "الموسم الوحيد من غير هزيمة في الدوري الإنجليزي الممتاز", categoryEn: "Only unbeaten full season in the Premier League",
    holderAr: "أرسنال (الذين لا يُقهرون)", holderEn: "Arsenal ('The Invincibles')",
    valueAr: "38 مباراة من غير هزيمة", valueEn: "38 matches unbeaten",
    contextAr: "موسم 2003-2004 كامل. أرسنال مش الوحيد في أوروبا كلها: يوفنتوس (موسم 2011-12 في الدوري الإيطالي) وباير ليفركوزن (موسم 2023-24 في البوندسليجا) عدّوا موسمهم برضه من غير هزيمة.", contextEn: "The entire 2003–04 season. Arsenal are not the only unbeaten side in Europe: Juventus (2011–12 Serie A) and Bayer Leverkusen (2023–24 Bundesliga) also went through a league season unbeaten.",
    dataStatus: "sourceChecked"
  },
  {
    id: "fastest-goal-major-league",
    relatedCompetitionIds: ["premier-league"],
    relatedClubIds: ["southampton"],
    relatedPlayerIds: ["shane-long"],
    categoryAr: "أسرع هدف في الدوري الإنجليزي الممتاز", categoryEn: "Fastest goal in the Premier League",
    holderAr: "شين لونج", holderEn: "Shane Long",
    valueAr: "7.69 ثانية", valueEn: "7.69 seconds",
    contextAr: "سجله مع ساوثهامبتون ضد واتفورد (1-1) في موسم 2018/19، وكسر رقم ليدلي كينج (9.82 ثانية) اللي صمد حوالي 19 سنة. ده رقم الدوري الإنجليزي تحديداً، أما أسرع هدف في كرة القدم عموماً فمتنازع عليه بين المصادر وبيتغيّر حسب المستوى والدوري.",
    contextEn: "Scored for Southampton against Watford (1-1) in 2018/19, breaking Ledley King's 9.82-second record that had stood for about 19 years. This is the Premier League record specifically; the fastest goal in football overall is disputed between sources and varies by level and league.",
    dataStatus: "sourceChecked"
  },
  {
    id: "oldest-player-major-league",
    relatedCompetitionIds: [],
    relatedClubIds: [],
    relatedPlayerIds: ["kazuyoshi-miura"],
    categoryAr: "أكبر لاعب محترف نشط في العالم", categoryEn: "World's oldest active professional player",
    holderAr: "كازويوشي ميورا", holderEn: "Kazuyoshi Miura",
    valueAr: "59 سنة (لحد 2026)", valueEn: "59 years old (as of 2026)",
    contextAr: "ميورا (مواليد 26 فبراير 1967) انضم في 2026 لفوكوشيما يونايتد (دوري الدرجة التالتة اليابانية) معار من يوكوهاما، وده مش دوري من الدوريات الأوروبية الكبرى. كمان هو أكبر لاعب سجل هدف في مباراة احترافية (50 سنة في 2017).", contextEn: "Miura (born 26 February 1967) joined Fukushima United (Japan's third division) on loan from Yokohama FC in 2026 — not one of the major European leagues. He is also the oldest player to score in a professional match (aged 50, in 2017).",
    dataStatus: "sourceChecked"
  },
  {
    id: "youngest-world-cup-scorer",
    relatedCompetitionIds: ["fifa-world-cup"],
    relatedClubIds: [],
    relatedPlayerIds: ["pele"],
    categoryAr: "أصغر هداف في تاريخ كأس العالم", categoryEn: "Youngest goalscorer in World Cup history",
    holderAr: "بيليه", holderEn: "Pelé",
    valueAr: "17 سنة", valueEn: "17 years old",
    contextAr: "سجل هدفه الأول في كأس العالم قدام ويلز في ربع نهائي 1958 وعمره 17 سنة و239 يوم، وبعدها سجل هدفين في النهائي ضد السويد.", contextEn: "Scored his first World Cup goal against Wales in the 1958 quarter-final aged 17 years 239 days, and later scored twice in the final against Sweden.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-career-hat-tricks-alltime-disputed",
    relatedCompetitionIds: [],
    relatedClubIds: [],
    relatedPlayerIds: ["pele"],
    categoryAr: "أكتر لاعب هاتريكات في تاريخ كرة القدم (رقم متنازع عليه)", categoryEn: "Most career hat-tricks in football history (disputed figure)",
    holderAr: "بيليه", holderEn: "Pelé",
    valueAr: "92 هاتريك", valueEn: "92 hat-tricks",
    contextAr: "الرقم ده (92) معترف بيه من موسوعة جينيس (2023) ومن RSSSF، بس فيه خلاف كبير حواليه لأنه بيشمل مباريات ودية وغير رسمية كتير مع نادي سانتوس والمنتخب البرازيلي في الخمسينيات والستينيات، مش بس المباريات الرسمية الموثقة زي باقي الأرقام في الملف ده.",
    contextEn: "Recognised by Guinness World Records, but widely disputed because it includes many friendly and unofficial matches with Santos and Brazil in the 1950s–60s, unlike the officially documented matches behind most other figures in this file.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-career-hat-tricks-modern-era",
    relatedCompetitionIds: [],
    relatedClubIds: [],
    relatedPlayerIds: ["cristiano-ronaldo"],
    categoryAr: "أكتر لاعب هاتريكات في المسيرة كلها (مباريات رسمية موثقة، أندية ومنتخب)", categoryEn: "Most career hat-tricks overall (documented official matches, club and country)",
    holderAr: "كريستيانو رونالدو", holderEn: "Cristiano Ronaldo",
    valueAr: "66 هاتريك", valueEn: "66 hat-tricks",
    contextAr: "ميسي تاني بـ62 هاتريك (Wikipedia وPlanet Football)، وبعض المصادر بتكتب 61. الرقمين بيتغيروا لأن اللاعبين لسه بيلعبوا.",
    contextEn: "Messi is second with 62 (Wikipedia, Planet Football); some sources say 61. Both totals keep changing since both players are still active.",
    dataStatus: "sourceChecked"
  },
  {
    id: "most-international-hat-tricks",
    relatedCompetitionIds: ["fifa-world-cup"],
    relatedClubIds: [],
    relatedPlayerIds: ["lionel-messi"],
    categoryAr: "أكتر لاعب هاتريكات مع منتخبه بس", categoryEn: "Most hat-tricks for a national team specifically",
    holderAr: "ليونيل ميسي", holderEn: "Lionel Messi",
    valueAr: "11 هاتريك دولي", valueEn: "11 international hat-tricks",
    contextAr: "ميسي بقى أول لاعب رجال يوصل لـ11 هاتريك دولي بهاتريكه ضد الجزائر (3-0) في كأس العالم 2026، وتخطى رونالدو (10 هاتريكات). ده مجال مختلف عن الرقم الكلي اللي فوق، اللي رونالدو لسه متقدم فيه.",
    contextEn: "Messi became the first male player to reach 11 international hat-tricks with his hat-trick against Algeria (3-0) at the 2026 World Cup, moving past Ronaldo (10). This is a separate category from the overall career total above, where Ronaldo still leads.",
    dataStatus: "sourceChecked"
  },
];

// ================= المصادر وحدود المراجعة (اتراجعت في أكتوبر 2026) =================
// verified   = اللي اتراجع فعلاً على مصدر. notVerified = اللي لسه من المعرفة العامة أو من مصدر واحد بس.
const dataSources = {
  "premier-league-top-scorers": {
    verified: ["أرقام وترتيب أول 10 (Wikipedia وPremier League وGoal)", "رقم صلاح النهائي 193 (191 ليفربول + 2 تشيلسي)"],
    notVerified: ["أسماء الأندية لكل لاعب ما عدا شيرر وكين وصلاح"]
  },
  "la-liga-top-scorers": {
    verified: ["الأرقام والترتيب لكل الأسماء (Wikipedia وGoal)"],
    notVerified: ["أندية كل لاعب", "رقم راؤول 228 أو 229 حسب المصدر"]
  },
  "serie-a-top-scorers": {
    verified: ["الأرقام والترتيب (RSSSF)", "اسم نوردال وأهدافه (225) وسيجناتوري (188)", "أندية بيولا (RSSSF وويكيبيديا): برو فيرتشيلي ولاتسيو ويوفنتوس ونوفارا، ومفيش أي ظهور لبريشيا"],
    notVerified: ["أسماء الأندية لكل لاعب ما عدا بيولا"]
  },
  "bundesliga-top-scorers": {
    verified: ["الأرقام والترتيب (Bundesliga.com وGoal)"],
    notVerified: ["أندية فيشر وهاينكس وبورجميلر"]
  },
  "ligue1-top-scorers": {
    verified: ["الأرقام والترتيب (Goal وRSSSF ومصادر تانية)"],
    notVerified: ["أندية لاكومب وريفيلي وكورتوا وأونيس", "جنسية أونيس (المصادر مختلفة)"]
  },
  "primeira-liga-top-scorers": {
    verified: ["الترتيب العام (Wikipedia وbesoccer وfootballhistory.org)"],
    notVerified: ["أندية جوميز وإيوسيبيو (من Wikipedia)"]
  },
  "egyptian-league-top-scorers": {
    verified: ["الترتيب (الشاذلي ثم حسام حسن ثم عبد الله السعيد ثم مصطفى رياض ثم السيد الضظوي)", "رقم حسام 168 (مصادر متعددة)", "أرقام السعيد 133+ ورياض 123 والضظوي 112 (Wikipedia: Egyptian Premier League، محدّثة 1 أكتوبر 2025، والضظوي 112 مؤكد من RSSSF كمان)"],
    notVerified: ["رقم الشاذلي: المصادر متضاربة (176 RSSSF، 173 Wikipedia، 171 الأهرام) واعتمدت 173 (Wikipedia) بقرار المالك؛ رقم 34 هدف في موسم 1974-75 ما اتأكدش", "رقم عبد الله السعيد (133+ لحد 1 أكتوبر 2025، وبيتغير)", "أندية اللاعبين ما عدا السعيد وبعض ترتيب رياض/الضظوي بين مصادر (رياض 122 أو 123)"]
  },
  "ucl-top-scorers": {
    verified: ["الأرقام والترتيب (UEFA وNBC Sports وThe Analyst، سبتمبر 2026)"],
    notVerified: ["رونالدو 140 أو 141 حسب المصدر", "أندية اللاعبين", "مبابي 70 أو 71 حسب المصدر"]
  },
  "world-cup-top-scorers": {
    verified: ["الأرقام والترتيب (Wikipedia: List of FIFA World Cup top goalscorers، لحد 19 يوليو 2026)"],
    notVerified: []
  },
  "euro-top-scorers": {
    verified: ["الأرقام والترتيب (UEFA.com)"],
    notVerified: []
  },
  "afcon-top-scorers": {
    verified: ["إيتو 18 وبوكو 14 ويكيني 13 (CAF وGoal)", "الشاذلي 12 (Goal)"],
    notVerified: ["أرقام حسام حسن ودروجبا (11) ومبوما (11) من مصدر واحد", "رقم صلاح قبل 2025 (7)"]
  },
  worldCupGoldenBoot: {
    verified: ["كل الـ23 نسخة (1930-2026): Wikipedia وFIFA وSI وKhel Now", "تعادل 2010: مولر وفيا وسنايدر وفورلان على 5"],
    notVerified: []
  },
  euroGoldenBoot: {
    verified: ["كل الـ17 نسخة (1960-2024): UEFA.com وTopend Sports وWikipedia"],
    notVerified: []
  },
  afconGoldenBoot: {
    verified: ["1957-2025: RSSSF وWikipedia وCAF. اتصلحت 1988 (2 مش 4) و2006 (إيتو 5 لوحده)"],
    notVerified: ["نسخ 1992 و2013 و2015: من نشرات رويترز وAhram بس"]
  },
  clubTopScorers: {
    verified: ["أرقام رونالدو وميسي وروني وهنري ولامبارد وأجويرو وكين ومبابي وراش وصلاح ومولر وديل بييرو"],
    notVerified: ["سنين اللعب لكل لاعب ما عدا كين (2011-2023) ورونالدو (2009-2018)", "مولر 566 أو 563 وديل بييرو 290 أو 288 حسب المصدر"]
  },
  records: {
    verified: ["هاتريكات رونالدو وميسي وبيليه (Wikipedia)", "نيمار 222 مليون (2026)", "فابيو وشيلتون", "ميورا 59 سنة", "شين لونج 7.69 ثانية", "ميسي 91 هدف في 2012 والكرة الذهبية (8 و5)"],
    notVerified: ["عمر بيليه بالأيام (17 سنة و239 يوم)", "رقم هاتريكات ميسي الكلي: كتبت الأكتر تداولاً (62)", "دقة سنة ومباراة بعض الأرقام القياسية (2013 لأليكس تور مثلاً من مصدر واحد)"]
  }
};
