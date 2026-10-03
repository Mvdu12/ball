// ================= مود "مين الدخيل؟" =================
// أربع لاعيبة: تلاتة بينهم رابط واحد (لعبوا لنفس النادي / بيلعبوا حاليًا لنفس النادي / نفس الجنسية) وواحد دخيل.
// الأسئلة بتتولّد من players-data.js و clubs-data.js لوحدها — مفيش حاجة تتكتب يدوي.
// بيعتمد على دوال من bank.js (normalizeClubName / currentClubInfo / playerHistoryClubs / isNonClubEntry)،
// فلازم يتحمّل بعد bank.js في index.html.

const INTRUDER_LIVES = 3;
const INTRUDER_DUEL_QUESTIONS_EACH = 8;

const IS = {
  ar: {
    setupTitle: "مين الدخيل؟",
    rules: "تلاتة من الأربعة لاعيبة بينهم رابط واحد (نادي أو جنسية) وواحد دخيل. اختار الدخيل!",
    styleLabel: "طريقة اللعب",
    styleStreak: "🔥 تحدي السلسلة (3 أرواح)",
    styleDuel: "⚔️ مسابقة بين اتنين",
    styleStreakDesc: "كل غلطة بتاخد روح. لما الأرواح تخلص اللعبة بتنتهي، ورقمك القياسي بيتحفظ.",
    styleDuelDesc: "بالتناوب، 8 أسئلة لكل واحد. الإجابة الصح بنقطة، والأعلى نقط يكسب.",
    p1: "اسم المتسابق الأول", p2: "اسم المتسابق التاني",
    ph1: "مثلاً: أحمد", ph2: "مثلاً: محمد",
    needNames: "لازم تكتب الاسمين الأول",
    start: "ابدأ اللعب",
    best: "أفضل نتيجة",
    lives: "الأرواح", correct: "صح", questionNo: "سؤال", of: "من", turnOf: "الدور على",
    ok: "✅ صح!", bad: "❌ غلط",
    next: "السؤال التالي ➡️", finish: "شوف النتيجة 🏁",
    endStreak: "خلصت أرواحك!", endDuel: "🏆 الفايز", tie: "تعادل 🤝",
    scoreLine: "جاوبت صح", newRecord: "🎉 رقم قياسي جديد!",
    again: "العب تاني", home: "الرئيسية",
    others: "الباقيين"
  },
  en: {
    setupTitle: "Odd One Out",
    rules: "Three of the four players share one link (a club or a nationality) and one is the intruder. Pick the intruder!",
    styleLabel: "Play style",
    styleStreak: "🔥 Streak challenge (3 lives)",
    styleDuel: "⚔️ Two-player duel",
    styleStreakDesc: "Every miss costs a life. When they run out the game ends and your record is saved.",
    styleDuelDesc: "Taking turns, 8 questions each. A correct pick scores a point; highest score wins.",
    p1: "First contestant's name", p2: "Second contestant's name",
    ph1: "e.g. Ahmed", ph2: "e.g. Mohamed",
    needNames: "Please enter both names first",
    start: "Start",
    best: "Best score",
    lives: "Lives", correct: "Correct", questionNo: "Question", of: "of", turnOf: "Turn:",
    ok: "✅ Correct!", bad: "❌ Wrong",
    next: "Next question ➡️", finish: "See result 🏁",
    endStreak: "Out of lives!", endDuel: "🏆 Winner", tie: "It's a tie 🤝",
    scoreLine: "Correct answers", newRecord: "🎉 New record!",
    again: "Play again", home: "Home",
    others: "The other three"
  }
};
function it() { return IS[lang]; }

let intruder = null; // null = شاشة الإعداد
let intruderSetup = { style: "streak", p1: "", p2: "", err: false };
let intruderIndexCache = null;

// ---------- الفهرس: بيتبني مرة واحدة من الداتا ----------
function intruderIndex() {
  if (intruderIndexCache) return intruderIndexCache;

  // اللاعيبة "المعروفين": بنستبعد أقل ٣٠٪ من ناحية غنى البيانات (إنجازات + أندية + نبذة) عشان السؤال ما يبقاش عن لاعيبة مجهولين
  const richness = p => (p.achievementsAr || []).length + Math.min((p.clubsHistoryAr || []).length, 6) + (p.bioAr ? 1 : 0);
  const sorted = players.map(richness).sort((a, b) => a - b);
  const cut = sorted[Math.floor(sorted.length * 0.3)];
  const fame = players.filter(p => richness(p) >= cut);

  const clubByName = {};
  (typeof clubs !== "undefined" ? clubs : []).forEach(c => { clubByName[normalizeClubName(c.nameAr)] = c; });

  const clubIdsOf = {};
  const membersByClub = {};
  fame.forEach(p => {
    const ids = new Set();
    (p.clubsHistoryAr || []).forEach(h => {
      if (isNonClubEntry(h)) return; // أندية الشباب والإعارات المتعددة مش "لعب لنادي"
      const c = clubByName[normalizeClubName(h)];
      if (c) ids.add(c.id);
    });
    const cur = currentClubInfo(p);
    if (cur) { const c = clubByName[normalizeClubName(cur.ar)]; if (c) ids.add(c.id); }
    clubIdsOf[p.id] = ids;
    ids.forEach(id => { (membersByClub[id] = membersByClub[id] || []).push(p); });
  });
  const clubGroups = Object.keys(membersByClub).filter(id => membersByClub[id].length >= 3)
    .map(id => ({ club: clubs.find(c => c.id === id), members: membersByClub[id] }))
    .filter(g => g.club);

  const curMap = {};
  fame.filter(p => p.active).forEach(p => {
    const cur = currentClubInfo(p);
    if (!cur) return;
    (curMap[cur.ar] = curMap[cur.ar] || { ar: cur.ar, en: cur.en, members: [] }).members.push(p);
  });
  const curGroups = Object.values(curMap).filter(g => g.members.length >= 3);

  const natMap = {};
  fame.forEach(p => {
    if (!p.nationalityAr) return;
    (natMap[p.nationalityAr] = natMap[p.nationalityAr] || { ar: p.nationalityAr, en: p.nationalityEn, members: [] }).members.push(p);
  });
  const natGroups = Object.values(natMap).filter(g => g.members.length >= 3);

  intruderIndexCache = { fame, clubIdsOf, clubGroups, curGroups, natGroups };
  return intruderIndexCache;
}

// ---------- مولّد الأسئلة ----------
function intruderPick3(members, state) {
  const fresh = shuffle(members).filter(p => !state.usedPlayers.has(p.id));
  const pool = fresh.length >= 3 ? fresh : shuffle(members);
  return pool.slice(0, 3);
}

// بيختار الدخيل من المرشحين؛ في نص الحالات بيفضّل واحد يشارك واحد من التلاتة في الجنسية (عشان السؤال ما يبقاش سهل قوي)
function intruderPickOdd(candidates, three, state) {
  const fresh = candidates.filter(p => !state.usedPlayers.has(p.id));
  let pool = fresh.length > 0 ? fresh : candidates;
  if (Math.random() < 0.5) {
    const sameNat = pool.filter(p => three.some(m => m.nationalityAr === p.nationalityAr));
    if (sameNat.length > 0) pool = sameNat;
  }
  return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
}

function intruderFinish(kind, key, three, odd, extra, state) {
  const options = shuffle(three.concat([odd]));
  state.usedKeys.add(key);
  options.forEach(p => state.usedPlayers.add(p.id));
  return Object.assign({ kind, options, intruderIdx: options.indexOf(odd), three }, extra);
}

function intruderClubQ(ix, state) {
  const groups = ix.clubGroups.filter(g => !state.usedKeys.has("club:" + g.club.id));
  if (groups.length === 0) return null;
  const g = groups[Math.floor(Math.random() * groups.length)];
  const three = intruderPick3(g.members, state);
  const cands = ix.fame.filter(p => !ix.clubIdsOf[p.id].has(g.club.id) && !three.includes(p));
  const odd = intruderPickOdd(cands, three, state);
  if (!odd) return null;
  return intruderFinish("club", "club:" + g.club.id, three, odd, { club: g.club }, state);
}

function intruderCurrentQ(ix, state) {
  const groups = ix.curGroups.filter(g => !state.usedKeys.has("cur:" + g.ar));
  if (groups.length === 0) return null;
  const g = groups[Math.floor(Math.random() * groups.length)];
  const three = intruderPick3(g.members, state);
  const cands = ix.fame.filter(p => {
    if (!p.active || three.includes(p)) return false;
    const cur = currentClubInfo(p);
    return cur && cur.ar !== g.ar;
  });
  const odd = intruderPickOdd(cands, three, state);
  if (!odd) return null;
  return intruderFinish("current", "cur:" + g.ar, three, odd, { cur: { ar: g.ar, en: g.en }, oddCur: currentClubInfo(odd) }, state);
}

function intruderNationQ(ix, state) {
  const groups = ix.natGroups.filter(g => !state.usedKeys.has("nat:" + g.ar));
  if (groups.length === 0) return null;
  const g = groups[Math.floor(Math.random() * groups.length)];
  const three = intruderPick3(g.members, state);
  // الدخيل لازم جنسيته مختلفة تمامًا (مفيش جنسية مزدوجة بتحتوي على جنسية المجموعة)
  const cands = ix.fame.filter(p => !three.includes(p) && p.nationalityAr
    && !p.nationalityAr.includes(g.ar) && !g.ar.includes(p.nationalityAr));
  const odd = intruderPickOdd(cands, three, state);
  if (!odd) return null;
  return intruderFinish("nation", "nat:" + g.ar, three, odd, { nat: { ar: g.ar, en: g.en } }, state);
}

function intruderMakeQuestion(state) {
  const ix = intruderIndex();
  for (let round = 0; round < 2; round++) {
    for (let attempt = 0; attempt < 60; attempt++) {
      const r = Math.random();
      let q = null;
      if (r < 0.6) q = intruderClubQ(ix, state);
      else if (r < 0.85) q = intruderCurrentQ(ix, state);
      else q = intruderNationQ(ix, state);
      if (q) return q;
    }
    // كل الروابط اتستخدمت في اللعبة دي — بنبدأ من الأول بدل ما اللعبة تقف
    state.usedKeys.clear();
    state.usedPlayers.clear();
  }
  return null;
}

// ---------- نصوص السؤال والشرح (بتتبني وقت الرسم عشان تتبدّل مع تغيير اللغة) ----------
function intruderLinkHtml(q) {
  const ar = lang === "ar";
  if (q.kind === "club") {
    const n = ar ? q.club.nameAr : q.club.nameEn;
    return ar ? `تلاتة من الأربعة دول لعبوا لنادي <b>${esc(n)}</b>. مين الدخيل اللي ما لعبش له؟`
              : `Three of these four played for <b>${esc(n)}</b>. Who is the intruder that never did?`;
  }
  if (q.kind === "current") {
    const n = ar ? q.cur.ar : q.cur.en;
    return ar ? `تلاتة منهم بيلعبوا حاليًا لنادي <b>${esc(n)}</b>. مين الدخيل؟`
              : `Three of them currently play for <b>${esc(n)}</b>. Who is the intruder?`;
  }
  const n = ar ? q.nat.ar : q.nat.en;
  return ar ? `تلاتة منهم جنسيتهم: <b>${esc(n)}</b>. مين الدخيل؟`
            : `Three of them are <b>${esc(n)}</b>. Who is the intruder?`;
}

function intruderExplain(q) {
  const ar = lang === "ar";
  const odd = q.options[q.intruderIdx];
  const oddName = name(odd);
  const others = q.three.map(p => name(p)).join(ar ? "، " : ", ");
  let line;
  if (q.kind === "club") {
    const n = ar ? q.club.nameAr : q.club.nameEn;
    const hist = playerHistoryClubs(odd).slice(0, 4).map(c => (ar ? c.ar : c.en)).join(ar ? "، " : ", ");
    line = ar ? `${oddName} ما لعبش لنادي ${n}${hist ? " — مسيرته: " + hist : ""}`
              : `${oddName} never played for ${n}${hist ? " — career: " + hist : ""}`;
  } else if (q.kind === "current") {
    const c = q.oddCur ? (ar ? q.oddCur.ar : q.oddCur.en) : "";
    line = ar ? `${oddName} بيلعب حاليًا لنادي ${c}` : `${oddName} currently plays for ${c}`;
  } else {
    line = ar ? `${oddName} جنسيته ${nat(odd)}` : `${oddName} is ${nat(odd)}`;
  }
  return `${esc(line)}<br><span class="small-note">${esc(it().others)}: ${esc(others)}</span>`;
}

// ---------- سير اللعبة ----------
function intruderSavedSetup() {
  const s = savedGet("intruder.setup", null) || {};
  return {
    style: s.style === "duel" ? "duel" : "streak",
    p1: typeof s.p1 === "string" ? s.p1 : "",
    p2: typeof s.p2 === "string" ? s.p2 : "",
    err: false
  };
}

function goIntruder() { screen = "intruder"; intruder = null; intruderSetup = intruderSavedSetup(); render(); }

function intruderSetStyle(s) { intruderSetup.style = s; intruderSetup.err = false; render(); }

function intruderStart() {
  const s = intruderSetup;
  const p1 = s.p1.trim(), p2 = s.p2.trim();
  if (s.style === "duel" && (!p1 || !p2)) { s.err = true; render(); return; }
  s.err = false;
  savedSet("intruder.setup", { style: s.style, p1, p2 });
  intruder = {
    view: "play", style: s.style, names: [p1, p2],
    lives: INTRUDER_LIVES, score: [0, 0], correct: 0, streak: 0, bestStreak: 0,
    qNum: 0, turn: 0, picked: null, q: null,
    usedKeys: new Set(), usedPlayers: new Set(),
    totalQ: INTRUDER_DUEL_QUESTIONS_EACH * 2,
    newRecord: false
  };
  intruder.q = intruderMakeQuestion(intruder);
  render();
}

function intruderPick(i) {
  const g = intruder;
  if (!g || g.picked !== null) return;
  g.picked = i;
  const ok = i === g.q.intruderIdx;
  if (g.style === "streak") {
    if (ok) { g.correct += 1; g.streak += 1; g.bestStreak = Math.max(g.bestStreak, g.streak); }
    else { g.lives -= 1; g.streak = 0; }
  } else if (ok) {
    g.score[g.turn] += 1;
  }
  render();
}

function intruderGameOver() {
  const g = intruder;
  return g.style === "streak" ? g.lives <= 0 : g.qNum + 1 >= g.totalQ;
}

function intruderNext() {
  const g = intruder;
  if (!g || g.picked === null) return;
  if (intruderGameOver()) {
    if (g.style === "streak") {
      const prev = savedGet("intruder.best", 0);
      if (g.correct > prev) { savedSet("intruder.best", g.correct); g.newRecord = g.correct > 0; }
    }
    g.view = "end";
    render();
    return;
  }
  g.qNum += 1;
  g.turn = g.style === "duel" ? g.qNum % 2 : 0;
  g.picked = null;
  g.q = intruderMakeQuestion(g);
  render();
}

// ---------- الشاشات ----------
function intruderTopbar(backFn) {
  return `<div class="topbar"><button class="backbtn" onclick="${backFn}">${lang === "ar" ? "→" : "←"} ${esc(t().back)}</button>
    <button class="langbtn" onclick="toggleLang()">🌐 ${esc(t().langBtn)}</button></div>`;
}

function renderIntruder() {
  if (!intruder) return renderIntruderSetup();
  return intruder.view === "end" ? renderIntruderEnd() : renderIntruderPlay();
}

function renderIntruderSetup() {
  const s = intruderSetup, L = it(), duel = s.style === "duel";
  const best = savedGet("intruder.best", 0);
  const inp = (key, ph) => `<input value="${esc(s[key])}" placeholder="${esc(ph)}" oninput="intruderSetup.${key}=this.value"
    style="width:100%;margin-top:.4rem;border-radius:var(--r-inner);border:1.5px solid var(--line);background:rgba(255,255,255,0.06);color:var(--parchment);padding:.75rem 1rem;font-family:inherit;font-size:1rem;">`;
  return `${intruderTopbar("goCategory()")}
    <div class="quiz-card"><h2>🕵️ ${esc(L.setupTitle)}</h2>
      <p class="small-note">${esc(L.rules)}</p>
      <label class="small-note">${esc(L.styleLabel)}</label>
      <div class="bank-actions" style="grid-template-columns:1fr 1fr; margin-top:0.4rem;">
        <button class="pill-btn ${!duel ? "pill-gold" : "pill-outline"}" onclick="intruderSetStyle('streak')">${esc(L.styleStreak)}</button>
        <button class="pill-btn ${duel ? "pill-gold" : "pill-outline"}" onclick="intruderSetStyle('duel')">${esc(L.styleDuel)}</button>
      </div>
      <p class="small-note">${esc(duel ? L.styleDuelDesc : L.styleStreakDesc)}</p>
      ${duel ? `<div style="margin-top:.8rem">
        <label class="small-note">${esc(L.p1)}</label>${inp("p1", L.ph1)}
        <label class="small-note" style="display:block;margin-top:.8rem">${esc(L.p2)}</label>${inp("p2", L.ph2)}
      </div>` : `<p class="small-note">🏅 ${esc(L.best)}: <b>${best}</b></p>`}
      ${s.err ? `<p class="feedback bad">${esc(L.needNames)}</p>` : ""}
      <div class="footer-actions"><button class="pill-btn pill-gold" onclick="intruderStart()">${esc(L.start)}</button></div>
    </div>`;
}

function intruderHud() {
  const g = intruder, L = it();
  if (g.style === "streak") {
    const hearts = "❤️".repeat(Math.max(g.lives, 0)) + "🖤".repeat(Math.max(INTRUDER_LIVES - g.lives, 0));
    return `<div class="intr-hud">
      <span class="intr-lives" title="${esc(L.lives)}">${hearts}</span>
      <span class="mt-score">${esc(L.correct)}: <b>${g.correct}</b> · 🔥 ${g.streak}</span>
      <span class="small-note" style="margin:0">🏅 ${esc(L.best)}: ${savedGet("intruder.best", 0)}</span>
    </div>`;
  }
  return `<div class="match-tracker">
      <span>${esc(L.questionNo)} ${g.qNum + 1} ${esc(L.of)} ${g.totalQ}</span>
      <span class="mt-score">${esc(g.names[0])} <b>${g.score[0]}</b> : <b>${g.score[1]}</b> ${esc(g.names[1])}</span>
    </div>
    <h2>${esc(L.turnOf)} ${esc(g.names[g.turn])}</h2>`;
}

function renderIntruderPlay() {
  const g = intruder, L = it(), q = g.q;
  if (!q) {
    return `${intruderTopbar("goCategory()")}<div class="quiz-card"><p>${lang === "ar" ? "مفيش بيانات كفاية لتوليد أسئلة." : "Not enough data to build questions."}</p></div>`;
  }
  const answered = g.picked !== null;
  const opts = q.options.map((p, i) => {
    let cls = "";
    if (answered) {
      cls = i === q.intruderIdx ? "is-intruder" : "is-member";
      if (i === g.picked) cls += " picked";
    }
    return `<button class="choice-btn intr-opt ${cls}" ${answered ? "disabled" : ""} onclick="intruderPick(${i})">
      ${esc(name(p))}<span class="intr-sub">${esc(pos(p))}</span></button>`;
  }).join("");

  const ok = answered && g.picked === q.intruderIdx;
  const over = answered && intruderGameOver();
  return `${intruderTopbar("goCategory()")}
    ${intruderHud()}
    <div class="quiz-card">
      <div class="intr-link">${intruderLinkHtml(q)}</div>
      <div class="intr-grid">${opts}</div>
      ${answered ? `<div class="reveal-panel">
        <div class="feedback ${ok ? "ok" : "bad"}">${esc(ok ? L.ok : L.bad)}</div>
        <div>${intruderExplain(q)}</div>
      </div>
      <div class="footer-actions"><button class="pill-btn pill-gold" onclick="intruderNext()">${esc(over ? L.finish : L.next)}</button></div>` : ""}
    </div>`;
}

function renderIntruderEnd() {
  const g = intruder, L = it();
  let body;
  if (g.style === "streak") {
    body = `<h1>${esc(L.endStreak)}</h1>
      <p class="reveal-name">${esc(L.scoreLine)}: ${g.correct}</p>
      <p>🔥 ${lang === "ar" ? "أطول سلسلة" : "Longest streak"}: ${g.bestStreak}</p>
      ${g.newRecord ? `<p class="feedback ok">${esc(L.newRecord)}</p>` : `<p class="small-note">🏅 ${esc(L.best)}: ${savedGet("intruder.best", 0)}</p>`}`;
  } else {
    const [a, b] = g.score;
    const head = a === b ? L.tie : `${L.endDuel}: ${g.names[a > b ? 0 : 1]}`;
    body = `<h1>${esc(head)}</h1>
      <p class="reveal-name">${esc(g.names[0])} ${a} - ${b} ${esc(g.names[1])}</p>`;
  }
  return `${intruderTopbar("goCategory()")}
    <div class="quiz-card" style="text-align:center">${body}
      <div class="footer-actions">
        <button class="pill-btn pill-gold" onclick="intruderStart()">${esc(L.again)}</button>
        <button class="pill-btn pill-outline" onclick="goCategory()">${esc(L.home)}</button>
      </div>
    </div>`;
}
