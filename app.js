const STR = {
  ar: {
    title: "لعبة نجوم الكرة",
    langBtn: "English",
    back: "رجوع",
    categoryTitle: "اختر طريقة اللعب",
    catRefTitle: "مود الحكم",
    catRefDesc: "أداة للعب الجماعي — الحكم بس اللي بيشوف الشاشة",
    catBankTitle: "بنك النقط",
    catBankDesc: "مسابقة بين متسابقين — كل واحد بياخد 10 أسئلة، وقرارات بنك النقط بتحسم الجولة",
    nextBtn: "اللاعب التالي",
    refIntro: "الحكم بس اللي يشوف الشاشة دي — قول التلميحات بصوتك والمجموعة تحزر!",
    hintEra: "فترة النشاط / عدد الأندية",
    hintNat: "الجنسية",
    hintPos: "المركز",
    hintAch: "أهم إنجاز",
    hintClubs: "مسيرة الأندية",
    hintCurrent: "النادي الحالي",
    active: "لاعب حالي",
    retired: "معتزل",

    bankSetupTitle: "بنك النقط — إعداد الماتش",
    bankSetupDesc: "كل متسابق (أو فريق) بياخد 10 أسئلة كل جولة. الماتش 6 جولات، ولو حصل تعادل في عدد الجولات المكسوبة بتتلعب جولة حاسمة زيادة.",
    bankModeLabel: "نوع الماتش",
    bankModeIndividual: "فردي (1 ضد 1)",
    bankModeTeam: "تيم (2 ضد 2)",
    bankTeam1Label: "اسماء الفريق الأول",
    bankTeam2Label: "اسماء الفريق التاني",
    bankMember1Ph: "اسم اللاعب الأول",
    bankMember2Ph: "اسم اللاعب التاني",
    bankP1Label: "اسم المتسابق الأول",
    bankP2Label: "اسم المتسابق التاني",
    bankNamePh1: "مثلاً: أحمد",
    bankNamePh2: "مثلاً: محمود",
    bankStartBtn: "ابدأ الماتش",
    bankNeedNames: "لازم تكتب كل الأسماء المطلوبة الأول",
    bankRoundLabel: "الجولة",
    bankDeciderLabel: "🔥 جولة حاسمة",
    bankTurnOf: "دور",
    bankQuestionLabel: "سؤال",
    bankOf: "من",
    bankAtRisk: "برا البنك",
    bankBanked: "في البنك",
    bankShowAnswer: "اظهر الإجابة",
    bankHideAnswer: "اخفي الإجابة",
    bankCorrectBtn: "✅ صح",
    bankWrongBtn: "❌ غلط",
    bankBankBtn: "🏦 بنك",
    bankNextQBtn: "السؤال التالي ➡️",
    bankForfeitNote: "لو الأسئلة خلصت والنقط لسه برا البنك، هتضيع.",
    bankTurnEndTitle: "خلص دور",
    bankTurnScore: "نقط الجولة",
    bankStartTurnBtn: "يبدأ دور",
    bankRoundResultTitle: "نتيجة الجولة",
    bankWinnerLabel: "الفايز بالجولة",
    bankTieLabel: "تعادل — محدش كسب الجولة",
    bankMatchScore: "نتيجة الماتش",
    bankNextRoundBtn: "الجولة الجاية",
    bankChampion: "🏆 بطل الماتش",
    bankNewMatchBtn: "ماتش جديد",
    bankBackHome: "الرئيسية"
  },
  en: {
    title: "Football Stars Game",
    langBtn: "العربية",
    back: "Back",
    categoryTitle: "Choose a Mode",
    catRefTitle: "Referee Mode",
    catRefDesc: "Group game tool — only the referee looks at the screen",
    catBankTitle: "Points Bank",
    catBankDesc: "A head-to-head contest — 10 questions each, with bank-or-risk decisions deciding the round",
    nextBtn: "Next Player",
    refIntro: "Only the referee looks at this screen — say the hints out loud, the group guesses!",
    hintEra: "Active Years / Clubs Count",
    hintNat: "Nationality",
    hintPos: "Position",
    hintAch: "Top Achievement",
    hintClubs: "Club History",
    hintCurrent: "Current Club",
    active: "Active player",
    retired: "Retired",

    bankSetupTitle: "Points Bank — Match Setup",
    bankSetupDesc: "Each contestant (or team) gets 10 questions per round. The match is 6 rounds; if round wins are tied, one extra decider round is played.",
    bankModeLabel: "Match type",
    bankModeIndividual: "Individual (1v1)",
    bankModeTeam: "Team (2v2)",
    bankTeam1Label: "Team 1 names",
    bankTeam2Label: "Team 2 names",
    bankMember1Ph: "First player's name",
    bankMember2Ph: "Second player's name",
    bankP1Label: "First contestant's name",
    bankP2Label: "Second contestant's name",
    bankNamePh1: "e.g. Ahmed",
    bankNamePh2: "e.g. Mahmoud",
    bankStartBtn: "Start Match",
    bankNeedNames: "Please enter all required names first",
    bankRoundLabel: "Round",
    bankDeciderLabel: "🔥 Decider Round",
    bankTurnOf: "Turn:",
    bankQuestionLabel: "Question",
    bankOf: "of",
    bankAtRisk: "At risk",
    bankBanked: "Banked",
    bankShowAnswer: "Show answer",
    bankHideAnswer: "Hide answer",
    bankCorrectBtn: "✅ Correct",
    bankWrongBtn: "❌ Wrong",
    bankBankBtn: "🏦 Bank",
    bankNextQBtn: "Next Question ➡️",
    bankForfeitNote: "Unbanked points are lost once the questions run out.",
    bankTurnEndTitle: "Turn finished:",
    bankTurnScore: "Round points",
    bankStartTurnBtn: "Start turn:",
    bankRoundResultTitle: "Round Result",
    bankWinnerLabel: "Round winner",
    bankTieLabel: "Tie — no one won the round",
    bankMatchScore: "Match score",
    bankNextRoundBtn: "Next Round",
    bankChampion: "🏆 Match Champion",
    bankNewMatchBtn: "New Match",
    bankBackHome: "Home"
  }
};


let lang = "ar";
let screen = "category"; // category | referee | bank
let refState = null;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function t() { return STR[lang]; }
function name(p) { return lang === "ar" ? p.nameAr : p.nameEn; }
function nat(p) { return lang === "ar" ? p.nationalityAr : p.nationalityEn; }
function club(p) { return lang === "ar" ? p.clubAr : p.clubEn; }
function wikiFor(p) {
  const primary = lang === "ar" ? p.wikiUrlAr : p.wikiUrlEn;
  const fallback = lang === "ar" ? p.wikiUrlEn : p.wikiUrlAr;
  return primary && primary.trim() ? primary : (fallback && fallback.trim() ? fallback : null);
}
function pos(p) { return p.position[lang]; }
function ach(p) { return lang === "ar" ? p.achievementsAr : p.achievementsEn; }
function clubsHist(p) { return lang === "ar" ? p.clubsHistoryAr : p.clubsHistoryEn; }

function pickRandomPlayer(excludeId) {
  const pool = excludeId ? players.filter(p => p.id !== excludeId) : players;
  return pool[Math.floor(Math.random() * pool.length)];
}

function newRefereeRound() {
  const p = pickRandomPlayer(refState ? refState.player.id : null);
  refState = {
    player: p,
    open: { era: false, nat: false, pos: false, ach: false, clubs: false, current: false }
  };
  render();
}

function goCategory() { screen = "category"; render(); }
function goReferee() { screen = "referee"; newRefereeRound(); }

function renderCategory() {
  return `
    <div class="topbar">
      <h1>⚽ ${esc(t().title)}</h1>
      <button class="langbtn" onclick="toggleLang()">🌐 ${esc(t().langBtn)}</button>
    </div>
    <h2>${esc(t().categoryTitle)}</h2>
    <div class="cat-grid">
      <div class="card cat-card green" onclick="goReferee()">
        <div class="emoji-circle">🎙️</div>
        <h2>${esc(t().catRefTitle)}</h2>
        <p>${esc(t().catRefDesc)}</p>
      </div>
      <div class="card cat-card red" onclick="goBank()">
        <div class="emoji-circle">🏦</div>
        <h2>${esc(t().catBankTitle)}</h2>
        <p>${esc(t().catBankDesc)}</p>
      </div>
    </div>`;
}

function toggleLang() {
  lang = lang === "ar" ? "en" : "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  render();
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function renderReferee() {
  const s = refState;
  const p = s.player;
  const hints = [
    { key: "era", label: t().hintEra, value: p.era },
    { key: "nat", label: t().hintNat, value: nat(p) },
    { key: "pos", label: t().hintPos, value: pos(p) },
    { key: "ach", label: t().hintAch, value: ach(p)[0] },
    { key: "clubs", label: t().hintClubs, value: clubsHist(p).join(lang === 'ar' ? '  ←  ' : '  →  ') },
    { key: "current", label: t().hintCurrent, value: club(p) }
  ];
  const hintsHtml = hints.map(h => `
    <div class="hint-card ${s.open[h.key] ? 'open' : ''}" onclick="toggleHint('${h.key}')">
      <div class="hint-head"><span>${esc(h.label)}</span><span class="hint-arrow">▾</span></div>
      <div class="hint-body">${esc(h.value)}</div>
    </div>`).join("");

  return `
    <div class="topbar">
      <button class="backbtn" onclick="goCategory()">${lang === 'ar' ? '→' : '←'} ${esc(t().back)}</button>
      <button class="langbtn" onclick="toggleLang()">🌐 ${esc(t().langBtn)}</button>
    </div>
    <p class="small-note">🎙️ ${esc(t().refIntro)}</p>
    <div class="ref-header">
      <div class="ref-name">${wikiFor(p) ? `<a class="wiki-link ref-name-link" href="${esc(wikiFor(p))}" target="_blank" rel="noopener">${esc(name(p))} ↗</a>` : esc(name(p))}</div>
      <div class="ref-sub">${p.active ? esc(t().active) : esc(t().retired)}</div>
    </div>
    <div>${hintsHtml}</div>
    <div class="footer-actions">
      <button class="pill-btn pill-gold" onclick="newRefereeRound()">${esc(t().nextBtn)}</button>
    </div>`;
}

function toggleHint(key) {
  refState.open[key] = !refState.open[key];
  render();
}

function render() {
  const root = document.getElementById("root");
  document.title = t().title;
  if (screen === "category") root.innerHTML = renderCategory();
  else if (screen === "referee") root.innerHTML = renderReferee();
  else if (screen === "bank") root.innerHTML = renderBank();
}

document.documentElement.lang = lang;
document.documentElement.dir = "rtl";
goCategory();
