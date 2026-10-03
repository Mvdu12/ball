// ================= مود السلّم الكبير — وجه لوجه + الأوفر + الترتيب + المقارنة العمياء + الرهان =================
const LADDER_TOP = 12;
const LS = {
  ar: {
    cardTitle: "السلّم الكبير", cardDesc: "تيمين بيتسابقوا على سلّم من 12 درجة — أسئلة مقارنات عشوائية، ومحطات أمان، ورهان مرة واحدة",
    setupTitle: "السلّم الكبير — إعداد الماتش", individual: "فردي (1 ضد 1)", team: "تيم (2 ضد 2)",
    t1: "الفريق الأول", t2: "الفريق التاني", p1: "اسم اللاعب الأول", p2: "اسم اللاعب التاني",
    start: "ابدأ الماتش", needNames: "لازم تكتب كل الأسماء الأول",
    rules: "12 درجة، محطات أمان عند 4 و8 و12. الغلط بيرجّعك لآخر محطة. الفوز = إجابة صح وأنت على 12. الرهان مرة واحدة بعد وصولك لـ4: صح +3 درجات، غلط ترجع محطة تحت آخر محطة وصلتها.",
    round: "الجولة", decider: "🔥 جولة حاسمة", turn: "الدور على", step: "الدرجة",
    bet: "🎲 ارهن (مرة واحدة)", betOn: "🎲 الرهان شغال — إلغاء", betUsed: "الرهان اتستخدم", betLocked: "الرهان بيتفتح عند الدرجة 4",
    ok: "✅ صح!", bad: "❌ غلط", next: "التالي ➡️", yes: "أيوه", no: "لأ",
    winner: "🏆 الفايز", newMatch: "ماتش جديد", home: "الرئيسية",
    goesTo: "وبقيت على الدرجة",
    orderHint: "اضغط على العناصر بالترتيب الصح (أول ضغطة = المركز الأول)", reset: "إعادة الترتيب"
  },
  en: {
    cardTitle: "The Big Ladder", cardDesc: "Two teams race up a 12-step ladder — random comparison questions, safe stations and one bet",
    setupTitle: "The Big Ladder — Match Setup", individual: "Individual (1v1)", team: "Team (2v2)",
    t1: "Team 1", t2: "Team 2", p1: "First player's name", p2: "Second player's name",
    start: "Start Match", needNames: "Please enter all names first",
    rules: "12 steps, safe stations at 4, 8 and 12. A wrong answer drops you to your last station. Win = a correct answer while standing on 12. One bet, unlocked at step 4: correct +3 steps, wrong drops you one station below your last station.",
    round: "Round", decider: "🔥 Decider Round", turn: "Turn:", step: "Step",
    bet: "🎲 Bet (once)", betOn: "🎲 Bet is ON — cancel", betUsed: "Bet already used", betLocked: "Bet unlocks at step 4",
    ok: "✅ Correct!", bad: "❌ Wrong", next: "Next ➡️", yes: "Yes", no: "No",
    winner: "🏆 Winner", newMatch: "New Match", home: "Home",
    goesTo: "now on step",
    orderHint: "Tap the items in the correct order (first tap = 1st place)", reset: "Reset order"
  }
};
function lt() { return LS[lang]; }
let ladder = null;
let ladderSetup = { mode: "individual", names: ["", "", "", ""], err: false };

// آخر أسماء ونوع ماتش اتلعبوا بيتحفظوا في المتصفح ويتملّوا تلقائي
function ladderSavedSetup() {
  const s = savedGet("ladder.setup", null) || {};
  const names = (Array.isArray(s.names) ? s.names : []).map(x => String(x)).concat(["", "", "", ""]).slice(0, 4);
  return { mode: s.mode === "team" ? "team" : "individual", names, err: false };
}
function goLadder() { screen = "ladder"; ladder = null; ladderSetup = ladderSavedSetup(); render(); }
function ladderSetMode(m) { ladderSetup.mode = m; ladderSetup.err = false; render(); }
function ladderStart() {
  const n = ladderSetup.names.map(s => s.trim());
  const need = ladderSetup.mode === "team" ? 4 : 2;
  if (n.slice(0, need).some(s => !s)) { ladderSetup.err = true; render(); return; }
  savedSet("ladder.setup", { mode: ladderSetup.mode, names: ladderSetup.names });
  const mk = names => ({ names, pos: 0, reached4: false, betUsed: false, turns: 0 });
  const teams = ladderSetup.mode === "team" ? [mk([n[0], n[1]]), mk([n[2], n[3]])] : [mk([n[0]]), mk([n[1]])];
  ladder = { view: "play", teams, cur: 0, round: 1, decider: false, q: null, armed: false, fb: null, roundWins: [false, false], winner: null };
  ladderNextQ();
}

// ---------- مولّد الأسئلة: بيقرا الداتا لوحده ويتجاهل أي عنصر ناقص ----------
function ladderGroups() {
  const g = [];
  const num = x => (typeof x === "number" && isFinite(x)) ? x : null;
  const cl = (typeof clubs !== "undefined") ? clubs : [];
  const byId = {}; cl.forEach(c => { byId[c.id] = c; });
  // تلميحات النادي الغامض (لازم سطرين على الأقل، غير كده مفيش تلميح)
  const clubHint = c => {
    if (!c) return null;
    const ar = [], en = [];
    if (c.countryAr) { ar.push(`الدولة: ${c.countryAr}`); en.push(`Country: ${c.countryEn || c.countryAr}`); }
    if (c.colorsAr) { ar.push(`الألوان: ${c.colorsAr}`); en.push(`Colors: ${c.colorsEn || c.colorsAr}`); }
    if (c.stadiumAr) { ar.push(`الملعب: ${c.stadiumAr}`); en.push(`Stadium: ${c.stadiumEn || c.stadiumAr}`); }
    return ar.length >= 2 ? { ar, en } : null;
  };
  g.push({ cmp: "low", time: true, metAr: "سنة التأسيس", metEn: "founding year",
    items: cl.filter(c => num(c.founded) !== null).map(c => ({ ar: c.nameAr, en: c.nameEn, v: c.founded, h: clubHint(c) })),
    valAr: v => `تأسس سنة ${v}`, valEn: v => `founded ${v}`,
    faceAr: "أنهي نادي تأسس الأول (الأقدم)؟", faceEn: "Which club was founded first (the older one)?",
    predAr: T => `تأسس بعد سنة ${T}`, predEn: T => `was founded after ${T}`, span: [5, 30] });
  g.push({ cmp: "high", metAr: "ألقاب الدوري المحلي", metEn: "domestic league titles",
    items: cl.filter(c => num(c.domesticLeagueTitles) !== null).map(c => ({ ar: c.nameAr, en: c.nameEn, v: c.domesticLeagueTitles, h: clubHint(c) })),
    valAr: v => `${v} لقب دوري`, valEn: v => `${v} league titles`,
    faceAr: "أنهي نادي كسب ألقاب دوري محلي أكتر؟", faceEn: "Which club has won more domestic league titles?",
    predAr: T => `كسب أكتر من ${T} لقب دوري محلي`, predEn: T => `has won more than ${T} domestic league titles` });
  if (typeof topScorers !== "undefined") topScorers.filter(s => s.dataStatus === "sourceChecked").forEach(s => {
    g.push({ cmp: "high", metAr: `الأهداف في ${s.competitionAr}`, metEn: `goals in: ${s.competitionEn}`,
      items: (s.scorers || []).filter(x => /^\d+$/.test(String(x.goals))).map(x => ({ ar: x.nameAr, en: x.nameEn, v: parseInt(x.goals, 10),
        h: x.clubsAr ? { ar: [`لعب لـ: ${x.clubsAr}`], en: [`Played for: ${x.clubsEn || x.clubsAr}`] } : null })),
      valAr: v => `${v} هدف`, valEn: v => `${v} goals`,
      faceAr: `مين سجل أهداف أكتر في ${s.competitionAr}؟`, faceEn: `Who scored more in: ${s.competitionEn}?`,
      predAr: T => `سجل أكتر من ${T} هدف في ${s.competitionAr}`, predEn: T => `scored more than ${T} goals in: ${s.competitionEn}` });
  });
  if (typeof competitions !== "undefined") competitions.filter(c => c.dataStatus !== "knowledge" && Array.isArray(c.winners)).forEach(c => {
    g.push({ cmp: "high", metAr: `ألقاب ${c.nameAr}`, metEn: `${c.nameEn} titles`,
      items: c.winners.filter(w => num(w.titles) !== null).map(w => ({ ar: w.nameAr, en: w.nameEn, v: w.titles, h: clubHint(byId[w.clubId]) })),
      valAr: v => `${v} لقب`, valEn: v => `${v} titles`,
      faceAr: `مين كسب ${c.nameAr} مرات أكتر؟`, faceEn: `Who has won ${c.nameEn} more times?`,
      predAr: T => `كسب ${c.nameAr} أكتر من ${T} مرة`, predEn: T => `has won ${c.nameEn} more than ${T} times` });
  });
  // ---- لاعبين: سنة بداية المسيرة (من حقل era، وبنستبعد أي حقل مش بصيغة سنة-سنة) ----
  if (typeof players !== "undefined") {
    const eraStart = e => { const m = /^(\d{4})\s*-\s*(\d{4}|الآن)$/.exec(String(e || "").trim()); return m ? parseInt(m[1], 10) : null; };
    g.push({ cmp: "low", time: true, w: 20, metAr: "سنة بداية المسيرة", metEn: "career start year",
      items: players.filter(p => eraStart(p.era) !== null && p.nameAr && p.nameEn).map(p => ({ ar: p.nameAr, en: p.nameEn, v: eraStart(p.era),
        h: (p.nationalityAr && p.clubAr && p.position) ? { ar: [`الجنسية: ${p.nationalityAr}`, `المركز: ${p.position.ar}`, `النادي: ${p.clubAr}`], en: [`Nationality: ${p.nationalityEn}`, `Position: ${p.position.en}`, `Club: ${p.clubEn}`] } : null })),
      valAr: v => `بدأ سنة ${v}`, valEn: v => `started ${v}`,
      faceAr: "مين فيهم بدأ مسيرته الأول؟", faceEn: "Who started their career first?",
      predAr: T => `بدأ مسيرته بعد سنة ${T}`, predEn: T => `started their career after ${T}`, span: [3, 15] });
  }
  // ---- بطولات: أول لقب وآخر لقب (بس للأندية اللي سنينها كاملة وعددها بيطابق عدد الألقاب) ----
  if (typeof competitions !== "undefined") competitions.filter(c => c.dataStatus !== "knowledge" && Array.isArray(c.winners)).forEach(c => {
    const okW = c.winners.filter(w => w.yearsComplete !== false && Array.isArray(w.years) && w.years.length > 0 && w.years.length === w.titles && w.years.every(y => num(y) !== null));
    const sfxAr = c.yearBasis === "seasonEnd" ? " (سنة نهاية الموسم)" : "", sfxEn = c.yearBasis === "seasonEnd" ? " (season end year)" : "";
    const mk = (kind, fn, cmp) => ({ cmp, time: true, w: 0.35, metAr: `${kind === "last" ? "آخر" : "أول"} لقب في ${c.nameAr}${sfxAr}`, metEn: `${kind === "last" ? "latest" : "first"} ${c.nameEn} title${sfxEn}`,
      items: okW.map(w => ({ ar: w.nameAr, en: w.nameEn, v: fn(...w.years), h: clubHint(byId[w.clubId]) })),
      valAr: v => `${kind === "last" ? "آخر" : "أول"} لقب: ${v}`, valEn: v => `${kind === "last" ? "latest" : "first"} title: ${v}`,
      faceAr: kind === "last" ? `مين كسب ${c.nameAr} آخر مرة بعد التاني؟${sfxAr}` : `مين كسب ${c.nameAr} لأول مرة الأول؟${sfxAr}`,
      faceEn: kind === "last" ? `Who won ${c.nameEn} more recently?${sfxEn}` : `Who won ${c.nameEn} for the first time earlier?${sfxEn}`,
      predAr: T => `كسب ${c.nameAr} ${kind === "last" ? "آخر مرة" : "لأول مرة"} بعد سنة ${T}`,
      predEn: T => `${kind === "last" ? "last won" : "first won"} ${c.nameEn} after ${T}`, span: [2, 10] });
    g.push(mk("last", Math.max, "high"), mk("first", Math.min, "low"));
  });
  return g.filter(x => new Set(x.items.map(i => i.v)).size >= 2);
}

function ladderRand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function ladderRandG(groups) {
  const tot = groups.reduce((a, g) => a + (g.w || 1), 0); let r = Math.random() * tot;
  for (const g of groups) { r -= (g.w || 1); if (r < 0) return g; }
  return groups[groups.length - 1];
}
function ladderDistinct(items) { const seen = new Set(); return items.filter(i => seen.has(i.v) ? false : (seen.add(i.v), true)); }

function ladderQFace(g) {
  const a = ladderRand(g.items);
  const b = ladderRand(g.items.filter(i => i.v !== a.v));
  const pair = shuffle([a, b]);
  const best = g.cmp === "high" ? Math.max(a.v, b.v) : Math.min(a.v, b.v);
  return { type: "choice", qAr: g.faceAr, qEn: g.faceEn, choices: pair.map(p => ({ ar: p.ar, en: p.en })), correct: pair.findIndex(p => p.v === best),
    reveal: { ar: pair.map(p => `${p.ar}: ${g.valAr(p.v)}`).join(" — "), en: pair.map(p => `${p.en}: ${g.valEn(p.v)}`).join(" — ") } };
}

function ladderQOver(g) {
  const it = ladderRand(g.items);
  let T;
  do {
    const d = g.span ? g.span[0] + Math.floor(Math.random() * (g.span[1] - g.span[0] + 1)) : Math.max(1, Math.round(it.v * (0.3 + Math.random() * 0.4)));
    T = it.v + (Math.random() < 0.5 ? -d : d);
  } while (T === it.v || T < 0);
  return { type: "choice", qAr: `هل ${it.ar} ${g.predAr(T)}؟`, qEn: `Is it true that ${it.en} ${g.predEn(T)}?`,
    choices: [{ ar: LS.ar.yes, en: LS.en.yes }, { ar: LS.ar.no, en: LS.en.no }], correct: it.v > T ? 0 : 1,
    reveal: { ar: `${it.ar}: ${g.valAr(it.v)}`, en: `${it.en}: ${g.valEn(it.v)}` } };
}

function ladderQOrder(g) {
  if (!g) return null;
  const items = shuffle(ladderDistinct(g.items)).slice(0, 4);
  if (items.length < 4) return null;
  const target = items.map((_, i) => i).sort((x, y) => g.cmp === "high" ? items[y].v - items[x].v : items[x].v - items[y].v);
  const dir = g.time ? (g.cmp === "high" ? ["من الأحدث للأقدم", "newest to oldest"] : ["من الأقدم للأحدث", "oldest to newest"]) : ["من الأكتر للأقل", "most to least"];
  return { type: "order", qAr: `رتّب الأربعة ${dir[0]} في ${g.metAr}`, qEn: `Order these four from ${dir[1]} by ${g.metEn}`, items, target,
    reveal: { ar: target.map(i => `${items[i].ar} (${g.valAr(items[i].v)})`).join("  ←  "), en: target.map(i => `${items[i].en} (${g.valEn(items[i].v)})`).join("  →  ") } };
}

function ladderQBlind(g) {
  if (!g) return null;
  const m = ladderRand(g.items.filter(i => i.h));
  const kPool = g.items.filter(i => i.v !== m.v);
  if (!kPool.length) return null;
  const k = ladderRand(kPool), low = !!g.time;
  return { type: "choice",
    qAr: `الكارت الغامض ${low ? "أقدم ولا أحدث" : "أكتر ولا أقل"} من المعروف في ${g.metAr}؟`,
    qEn: `Is the mystery card ${low ? "older or newer" : "higher or lower"} than the known one in ${g.metEn}?`,
    ctx: { ar: [`🟢 المعروف: ${k.ar} — ${g.valAr(k.v)}`, "❓ الغامض:", ...m.h.ar], en: [`🟢 Known: ${k.en} — ${g.valEn(k.v)}`, "❓ Mystery:", ...m.h.en] },
    choices: low ? [{ ar: "أقدم منه", en: "Older" }, { ar: "أحدث منه", en: "Newer" }] : [{ ar: "أكتر منه", en: "Higher" }, { ar: "أقل منه", en: "Lower" }],
    correct: (low ? m.v < k.v : m.v > k.v) ? 0 : 1,
    reveal: { ar: `الغامض كان: ${m.ar} — ${g.valAr(m.v)}`, en: `The mystery was: ${m.en} — ${g.valEn(m.v)}` } };
}

function ladderMakeQuestion() {
  const groups = ladderGroups();
  const pick = f => { const a = groups.filter(f); return a.length ? ladderRandG(a) : null; };
  const r = Math.random();
  let q = null;
  if (r < 0.3) q = ladderQOrder(pick(g => ladderDistinct(g.items).length >= 4));
  else if (r < 0.6) q = ladderQBlind(pick(g => g.items.some(i => i.h)));
  if (!q) q = Math.random() < 0.5 ? ladderQFace(ladderRandG(groups)) : ladderQOver(ladderRandG(groups));
  return q;
}

function ladderNextQ() { ladder.q = ladderMakeQuestion(); ladder.armed = false; ladder.fb = null; ladder.sel = []; render(); }
function ladderToggleBet() { if (!ladder.fb) { ladder.armed = !ladder.armed; render(); } }

function ladderPick(i) { if (ladder.fb) return; ladderResolve(i === ladder.q.correct, i); }
function ladderTapOrder(i) {
  const L = ladder; if (L.fb || L.sel.includes(i)) return;
  L.sel.push(i);
  if (L.sel.length < 4) return render();
  ladderResolve(L.sel.every((x, k) => x === L.q.target[k]), null);
}
function ladderResetOrder() { if (!ladder.fb) { ladder.sel = []; render(); } }

function ladderResolve(ok, picked) {
  const L = ladder;
  const tm = L.teams[L.cur], bet = L.armed;
  if (ok) {
    if (tm.pos === LADDER_TOP) L.roundWins[L.cur] = true;
    else { tm.pos = Math.min(LADDER_TOP, tm.pos + (bet ? 3 : 1)); if (tm.pos >= 4) tm.reached4 = true; }
  } else {
    const base = Math.floor(tm.pos / 4) * 4;
    tm.pos = bet ? Math.max(0, base - 4) : base;
  }
  if (bet) tm.betUsed = true;
  L.armed = false;
  L.fb = { ok, picked, bet };
  render();
}

function ladderAdvance() {
  const L = ladder;
  L.teams[L.cur].turns++;
  if (L.cur === 0) { L.cur = 1; return ladderNextQ(); }
  const [w0, w1] = L.roundWins;
  if (w0 && w1) { L.teams.forEach(t => t.pos = LADDER_TOP); L.decider = true; }
  else if (w0 || w1) { L.winner = w0 ? 0 : 1; L.view = "end"; return render(); }
  else L.decider = false;
  L.roundWins = [false, false]; L.round++; L.cur = 0;
  ladderNextQ();
}

// ---------- الشاشات ----------
function ladderTopbar(backFn) {
  return `<div class="topbar"><button class="backbtn" onclick="${backFn}">${lang === "ar" ? "→" : "←"} ${esc(t().back)}</button>
    <button class="langbtn" onclick="toggleLang()">🌐 ${esc(t().langBtn)}</button></div>`;
}
function ladderTrack(tm, active) {
  let cells = "";
  for (let s = 1; s <= LADDER_TOP; s++) cells += `<div class="lad-cell ${s % 4 === 0 ? "safe" : ""} ${s <= tm.pos ? "on" : ""} ${s === tm.pos ? "here" : ""}"></div>`;
  return `<div class="score-box ${active ? "banked" : ""}" style="margin-bottom:.6rem">
    <div class="score-label">${esc(tm.names.join(" + "))} — ${esc(lt().step)} <b>${tm.pos}</b>/${LADDER_TOP}</div>
    <div class="lad-track">${cells}</div></div>`;
}

function renderLadder() {
  if (!ladder) return renderLadderSetup();
  return ladder.view === "end" ? renderLadderEnd() : renderLadderPlay();
}

function renderLadderSetup() {
  const s = ladderSetup, L = lt(), team = s.mode === "team";
  const inp = (i, ph) => `<input value="${esc(s.names[i])}" placeholder="${esc(ph)}" oninput="ladderSetup.names[${i}]=this.value" style="width:100%;margin-top:.4rem;border-radius:var(--r-inner);border:1.5px solid var(--line);background:rgba(255,255,255,0.06);color:var(--parchment);padding:.7rem 1rem;font-family:inherit;font-size:1rem">`;
  return `${ladderTopbar("goCategory()")}
    <div class="quiz-card"><h2>🪜 ${esc(L.setupTitle)}</h2>
      <p class="small-note">${esc(L.rules)}</p>
      <div class="type-row">
        <button class="pill-btn ${!team ? "pill-gold" : "pill-outline"}" onclick="ladderSetMode('individual')">${esc(L.individual)}</button>
        <button class="pill-btn ${team ? "pill-gold" : "pill-outline"}" onclick="ladderSetMode('team')">${esc(L.team)}</button>
      </div>
      <h3 style="margin-top:1rem">${esc(L.t1)}</h3>${inp(0, L.p1)}${team ? inp(1, L.p2) : ""}
      <h3 style="margin-top:1rem">${esc(L.t2)}</h3>${inp(team ? 2 : 1, L.p1)}${team ? inp(3, L.p2) : ""}
      ${s.err ? `<p class="feedback bad">${esc(L.needNames)}</p>` : ""}
      <div class="footer-actions"><button class="pill-btn pill-gold" onclick="ladderStart()">${esc(L.start)}</button></div>
    </div>`;
}

function renderLadderPlay() {
  const Lg = ladder, L = lt(), tm = Lg.teams[Lg.cur], q = Lg.q, fb = Lg.fb;
  const who = tm.names[tm.turns % tm.names.length];
  const betBtn = tm.betUsed ? `<button class="pill-btn pill-outline" disabled>${esc(L.betUsed)}</button>`
    : !tm.reached4 ? `<button class="pill-btn pill-outline" disabled>${esc(L.betLocked)}</button>`
    : `<button class="pill-btn ${Lg.armed ? "pill-red" : "pill-bank"}" onclick="ladderToggleBet()" ${fb ? "disabled" : ""}>${esc(Lg.armed ? L.betOn : L.bet)}</button>`;
  const ctxHtml = q.ctx ? `<div class="hints-list">${(lang === "ar" ? q.ctx.ar : q.ctx.en).map(l => `<div class="hint-line"><span class="hl-value">${esc(l)}</span></div>`).join("")}</div>` : "";
  let body;
  if (q.type === "order") {
    body = `<p class="small-note">${esc(L.orderHint)}</p><div class="choices">${q.items.map((it, i) => {
      const pos = Lg.sel.indexOf(i);
      const cls = pos < 0 ? "" : (fb ? (q.target[pos] === i ? "correct" : "wrong") : "correct");
      return `<button class="choice-btn ${cls}" ${fb ? "disabled" : ""} onclick="ladderTapOrder(${i})">${pos >= 0 ? (pos + 1) + ". " : ""}${esc(lang === "ar" ? it.ar : it.en)}</button>`;
    }).join("")}</div>${fb ? "" : `<div class="footer-actions"><button class="pill-btn pill-outline" onclick="ladderResetOrder()">${esc(L.reset)}</button></div>`}`;
  } else {
    body = `<div class="choices">${q.choices.map((c, i) => {
      const cls = fb ? (i === q.correct ? "correct" : i === fb.picked ? "wrong" : "") : "";
      return `<button class="choice-btn ${cls}" ${fb ? "disabled" : ""} onclick="ladderPick(${i})">${esc(lang === "ar" ? c.ar : c.en)}</button>`;
    }).join("")}</div>`;
  }
  const fbHtml = fb ? `<div class="reveal-panel"><div class="feedback ${fb.ok ? "ok" : "bad"}">${esc(fb.ok ? L.ok : L.bad)}${fb.bet ? " 🎲" : ""}</div>
    ${q.reveal ? `<p>${esc(lang === "ar" ? q.reveal.ar : q.reveal.en)}</p>` : ""}
    <p>${esc(tm.names.join(" + "))} ${esc(L.goesTo)} <b>${tm.pos}</b>${Lg.roundWins[Lg.cur] ? " 🏁" : ""}</p>
    <div class="footer-actions"><button class="pill-btn pill-gold" onclick="ladderAdvance()">${esc(L.next)}</button></div></div>` : "";
  return `${ladderTopbar("goCategory()")}
    <div class="match-tracker"><span>${esc(Lg.decider ? L.decider : L.round + " " + Lg.round)}</span>
      <span class="mt-score">${esc(L.turn)} ${esc(who)}</span></div>
    ${ladderTrack(Lg.teams[0], Lg.cur === 0)}${ladderTrack(Lg.teams[1], Lg.cur === 1)}
    <div class="quiz-card"><h2>${esc(lang === "ar" ? q.qAr : q.qEn)}</h2>
      ${ctxHtml}${body}
      <div class="footer-actions">${betBtn}</div>${fbHtml}</div>`;
}

function renderLadderEnd() {
  const Lg = ladder, L = lt(), w = Lg.teams[Lg.winner];
  return `${ladderTopbar("goCategory()")}
    <div class="quiz-card" style="text-align:center"><h1>${esc(L.winner)}</h1><h2>${esc(w.names.join(" + "))}</h2>
      <div class="footer-actions"><button class="pill-btn pill-gold" onclick="goLadder()">${esc(L.newMatch)}</button>
      <button class="pill-btn pill-outline" onclick="goCategory()">${esc(L.home)}</button></div></div>`;
}
