const STR = {
  ar: {
    title: "لعبة نجوم الكرة — مود الحكم",
    langBtn: "English",
    nextBtn: "اللاعب التالي",
    refIntro: "الحكم بس اللي يشوف الشاشة دي — قول التلميحات بصوتك والمجموعة تحزر!",
    hintEra: "فترة النشاط / عدد الأندية",
    hintNat: "الجنسية",
    hintPos: "المركز",
    hintAch: "أهم إنجاز",
    hintClubs: "مسيرة الأندية",
    hintCurrent: "النادي الحالي",
    active: "لاعب حالي",
    retired: "معتزل"
  },
  en: {
    title: "Football Stars Game — Referee Mode",
    langBtn: "العربية",
    nextBtn: "Next Player",
    refIntro: "Only the referee looks at this screen — say the hints out loud, the group guesses!",
    hintEra: "Active Years / Clubs Count",
    hintNat: "Nationality",
    hintPos: "Position",
    hintAch: "Top Achievement",
    hintClubs: "Club History",
    hintCurrent: "Current Club",
    active: "Active player",
    retired: "Retired"
  }
};


let lang = "ar";
let refState = null;

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
      <h1>⚽ ${esc(t().title)}</h1>
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
  root.innerHTML = renderReferee();
}

document.documentElement.lang = lang;
document.documentElement.dir = "rtl";
newRefereeRound();
