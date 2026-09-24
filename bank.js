/* ======================= BANK MODE (مود بنك النقط) ======================= */
/* الأسئلة هنا بتتولّد أوتوماتيك من مصفوفة players في players-data.js — */
/* مفيش ملف أسئلة منفصل، أي لاعب جديد تضيفه هناك بيبقى مصدر أسئلة جديدة تلقائيًا. */

let matchState = null;   // بيانات الماتش الحالي (اسمين المتسابقين، عدد جولات كل واحد كسبها...)
let turnState = null;    // بيانات دور المتسابق الحالي (الأسئلة، نقط البنك، النقط برا البنك...)
let bankView = "setup";  // setup | turn | turnend | roundresult | matchend
let bankSetupError = false;
let bankMode = "individual"; // individual | team

const QUESTIONS_PER_TURN = 10;
const BASE_ROUNDS = 6; // بعد 6 جولات، لو فيه تعادل في عدد الجولات المكسوبة بتتلعب جولة حاسمة زيادة

function goBank() {
  screen = "bank";
  bankView = "setup";
  matchState = null;
  turnState = null;
  bankSetupError = false;
  bankMode = "individual";
  render();
}

function setBankMode(mode) {
  bankMode = mode;
  render();
}

/* ---------- توليد سؤال عشوائي من بيانات لاعب ---------- */
/* ملاحظة مهمة: مينفعش نعتمد إن التلميح "فريد" بس جوه الـ68 لاعب اللي في الملف —
   المتسابق مش شايف الداتا دي، وبيعرف مئات اللاعبين برا القائمة. سؤال زي
   "مين اللاعب المصري اللي لعب حارس مرمى؟" له إجابات صح كتير في الواقع حتى لو
   في ملفنا إحنا عندنا واحد بس بالمواصفات دي. عشان كده كل سؤال بيتبني حوالين
   "أهم إنجاز" اللاعب (أدق وأخص حاجة في بياناته — بطولة معينة بسنة معينة مع نادي/منتخب
   معين) مع تفصيلة تانية بتزود التحديد (المركز أو فترة النشاط أو النادي)، عشان
   الإجابة تبقى واضحة ومحددة قد الإمكان مش بس جوه الداتا لكن في الواقع كمان. */

function buildFrequencyMaps() {
  const comboFreq = {}; // للحماية من تكرار نادر جدًا حتى بعد دمج التفاصيل
  players.forEach(p => {
    const achKey = achievementCombo(p.achievementsAr);
    const k1 = achKey + "|" + p.position.en;
    const k2 = achKey + "|" + p.era;
    comboFreq[k1] = (comboFreq[k1] || 0) + 1;
    comboFreq[k2] = (comboFreq[k2] || 0) + 1;
  });
  return { comboFreq };
}

// بدل الاعتماد على أهم إنجاز بس (achievementsAr[0])، بندمج كذا إنجاز مع بعض (لحد 3).
// دمج أكتر من إنجاز بيقلل الغموض كتير: ممكن لاعبين يشتركوا في إنجاز واحد (زملاء في
// نفس النادي مثلاً)، لكن نادر جدًا يشتركوا في نفس المجموعة الكاملة من كذا إنجاز مع بعض.
function achievementCombo(list, sep) {
  const n = Math.min(3, list.length);
  return list.slice(0, n).join(sep || "، و");
}

const BANK_FREQ = buildFrequencyMaps();

// إنجازات "عامة/تراكمية" (زي "عدة مرات" أو "X ألقاب" من غير سنة محددة) خطر عليها إنها
// تتشارك بين أكتر من لاعب حقيقي فعليًا (زملاء في نفس النادي الكبير مثلاً) حتى لو النص
// مختلف حرفيًا بينهم. الخطر ده بيقل جدًا لو دمجنا أكتر من إنجاز مع بعض، فبنطبّق الفحص
// ده بس على اللاعب اللي عنده إنجاز واحد مسجّل (مفيش حاجة تانية ندمجها معاه).
function isVagueAchievement(ar, en) {
  const t = (ar || "") + " " + (en || "");
  return /عدة مرات|مرات متتالية|متتاليًا|\d+\s*ألقاب|\d+\s*مرات|multiple times|several times|consecutive|\d+\s*titles/i.test(t);
}

function firstNameOf(fullName) {
  return fullName.trim().split(/\s+/)[0];
}

// بعض القيم في حقل النادي مش اسم نادي حقيقي (زي "معتزل" لوحدها، أو "لاعب حر...")
// فبنستبعدها من أي سؤال يعتمد على اسم النادي عشان ميطلعش سؤال ملوش معنى.
function isRealClub(clubText) {
  const t = clubText.trim().toLowerCase();
  if (t === "معتزل" || t === "retired") return false;
  if (t.includes("لاعب حر") || t.includes("free agent") || t.includes("بدون نادي") || t.includes("unattached")) return false;
  return true;
}

function buildBankQuestion(p) {
  const hasMultipleAch = p.achievementsAr.length >= 2;
  const achAr = achievementCombo(p.achievementsAr, "، و");
  const achEn = achievementCombo(p.achievementsEn, "; and ");
  const hasClub = isRealClub(p.clubAr) && isRealClub(p.clubEn);
  // لو عنده إنجاز واحد بس وده عام/تراكمي، لسه في خطر — غير كده (سواء الإنجاز محدد،
  // أو مدموج مع إنجاز تاني) بقى آمن بما يكفي
  const vague = !hasMultipleAch && isVagueAchievement(p.achievementsAr[0], p.achievementsEn[0]);
  const variants = [];

  // التلميحات اللي بتعتمد على الإنجاز/الإنجازات كتفصيلة أساسية — بس لو مش خطر
  if (!vague) {
    // إنجاز(ات) + جنسية + مركز (أغنى تفصيل، وبيحدد اللاعب بوضوح غالبًا)
    variants.push({
      ar: `مين اللاعب اللي جنسيته ${p.nationalityAr} ولعب في مركز ${p.position.ar}، ومن أهم إنجازاته: ${achAr}؟`,
      en: `Which player is ${p.nationalityEn}, played as a ${p.position.en}, and whose achievements include: ${achEn}?`
    });

    // إنجاز(ات) + فترة نشاط (لو فيه لاعبين شايلين نفس التوليفة، فترة النشاط بتفرّق بينهم غالبًا)
    if (!BANK_FREQ.comboFreq[achAr + "|" + p.era] || BANK_FREQ.comboFreq[achAr + "|" + p.era] === 1) {
      variants.push({
        ar: `مين اللاعب اللي فترة نشاطه ${p.era}، ومن أهم إنجازاته: ${achAr}؟`,
        en: `Which player was active during ${p.era} and whose achievements include: ${achEn}?`
      });
    }

    // إنجاز(ات) + النادي الحالي/الأخير (لو مش حقل تالف زي "معتزل" من غير اسم نادي)
    if (hasClub) {
      variants.push({
        ar: `مين اللاعب اللي ${p.active ? "بيلعب حاليًا لنادي" : "آخر ناديه كان"} ${p.clubAr}، ومن أهم إنجازاته: ${achAr}؟`,
        en: `Which player ${p.active ? "currently plays for" : "last played for"} ${p.clubEn}, and whose achievements include: ${achEn}?`
      });
    }

    // إنجاز(ات) + نادي عشوائي من مسيرته
    if (p.clubsHistoryAr.length > 0) {
      const idx = Math.floor(Math.random() * p.clubsHistoryAr.length);
      variants.push({
        ar: `مين اللاعب اللي لعب لنادي ${p.clubsHistoryAr[idx]} في مسيرته، ومن أهم إنجازاته: ${achAr}؟`,
        en: `Which player has ${p.clubsHistoryEn[idx]} in his club history, and whose achievements include: ${achEn}?`
      });
    }
  }

  // وصف عن اللاعب (نبذة كاملة) — من أغنى وأدق أشكال الأسئلة لأنها بتجمع كذا تفصيلة مميزة مع بعض،
  // وبتفضل آمنة حتى لو الإنجاز عام، لأنها مش معتمدة على الإنجاز لوحده
  if (p.bioAr && p.bioEn) {
    variants.push({
      ar: `مين اللاعب ده؟ «${p.bioAr}»`,
      en: `Who is this player? "${p.bioEn}"`
    });
  }

  // كل الإنجازات (أو أهمها) مع بعض من غير أي تفصيلة تانية — قائمة كاملة من إنجازات اللاعب
  // بتبقى بصمة شبه فريدة بيها، حتى لو كل إنجاز لوحده متكرر بين لاعبين
  if (hasMultipleAch) {
    variants.push({
      ar: `مين اللاعب اللي من أهم إنجازاته: ${achAr}؟`,
      en: `Which player's achievements include: ${achEn}?`
    });
  }

  // الاسم الأول + الإنجاز(ات) (المتسابق يكمّل الاسم الكامل) — آمن حتى لو الإنجاز عام،
  // لأن التحدي الحقيقي هنا هو إكمال الاسم مش تخمين الإنجاز
  variants.push({
    ar: `اسمه الأول "${firstNameOf(p.nameAr)}"، ومن أهم إنجازاته: ${achAr}. مين هو بالكامل؟`,
    en: `His first name is "${firstNameOf(p.nameEn)}", and his achievements include: ${achEn}. Who is he in full?`
  });

  // جنسية + مركز + النادي الحالي/الأخير اتشالت عمدًا: أخطر تلميح ممكن، لأنها بالظبط
  // نفس الحالة اللي بتحصل غالبًا بين زملاء في نفس النادي (نفس الجنسية + نفس المركز + نفس النادي)

  const chosen = variants[Math.floor(Math.random() * variants.length)];
  return { ar: chosen.ar, en: chosen.en, player: p };
}

function generateTurnQuestions() {
  return shuffle(players).slice(0, QUESTIONS_PER_TURN).map(buildBankQuestion);
}

/* ---------- إدارة الماتش والدور ---------- */
function startMatch() {
  let p1n, p2n;
  if (bankMode === "team") {
    const t1a = ((document.getElementById("bankT1M1Input") || {}).value || "").trim();
    const t1b = ((document.getElementById("bankT1M2Input") || {}).value || "").trim();
    const t2a = ((document.getElementById("bankT2M1Input") || {}).value || "").trim();
    const t2b = ((document.getElementById("bankT2M2Input") || {}).value || "").trim();
    if (!t1a || !t1b || !t2a || !t2b) {
      bankSetupError = true;
      render();
      return;
    }
    p1n = `${t1a} و ${t1b}`;
    p2n = `${t2a} و ${t2b}`;
  } else {
    p1n = ((document.getElementById("bankP1Input") || {}).value || "").trim();
    p2n = ((document.getElementById("bankP2Input") || {}).value || "").trim();
    if (!p1n || !p2n) {
      bankSetupError = true;
      render();
      return;
    }
  }
  bankSetupError = false;
  matchState = {
    p1Name: p1n, p2Name: p2n,
    p1Wins: 0, p2Wins: 0,
    round: 1,
    roundHistory: []
  };
  startTurn("p1");
}

function startTurn(contestantKey) {
  turnState = {
    contestant: contestantKey,
    questions: generateTurnQuestions(),
    qIndex: 0,
    answered: false,
    atRisk: 0,
    banked: 0,
    answerRevealed: false
  };
  bankView = "turn";
  render();
}

function bankMarkCorrect() {
  if (!turnState || turnState.answered) return;
  turnState.answered = true;
  if (turnState.atRisk === 0) turnState.atRisk = 1;
  else if (turnState.atRisk === 1) turnState.atRisk = 4;
  else turnState.atRisk = turnState.atRisk * 2;
  render();
}

function bankMarkWrong() {
  if (!turnState || turnState.answered) return;
  turnState.answered = true;
  turnState.atRisk = 0;
  render();
}

function bankDoBank() {
  if (!turnState || turnState.atRisk === 0) return;
  turnState.banked += turnState.atRisk;
  turnState.atRisk = 0;
  render();
}

function bankToggleAnswer() {
  if (!turnState) return;
  turnState.answerRevealed = !turnState.answerRevealed;
  render();
}

function bankNextQuestion() {
  if (!turnState || !turnState.answered) return;
  const isLast = turnState.qIndex + 1 >= turnState.questions.length;
  if (isLast) {
    // الدور خلص: أي نقط برا البنك بتتصفر (تضيع)
    const finalScore = turnState.banked;
    if (turnState.contestant === "p1") {
      matchState.p1Score = finalScore;
      bankView = "turnend";
      render();
    } else {
      matchState.p2Score = finalScore;
      finishRound();
    }
  } else {
    turnState.qIndex += 1;
    turnState.answered = false;
    turnState.answerRevealed = false;
    render();
  }
}

function bankStartP2Turn() { startTurn("p2"); }

function finishRound() {
  const { p1Score, p2Score } = matchState;
  let winner = null;
  if (p1Score > p2Score) { matchState.p1Wins++; winner = "p1"; }
  else if (p2Score > p1Score) { matchState.p2Wins++; winner = "p2"; }
  matchState.roundHistory.push({ round: matchState.round, p1Score, p2Score, winner });

  // بعد أول 6 جولات: لو حد معاه جولات أكتر من التاني، هو البطل. لو متعادلين
  // (حتى لو 3-3) بتتلعب جولة حاسمة زيادة (وهكذا لو اتعادلوا تاني) لحد ما يتحسم.
  const decided = matchState.round >= BASE_ROUNDS && matchState.p1Wins !== matchState.p2Wins;
  bankView = decided ? "matchend" : "roundresult";
  render();
}

function bankNextRound() {
  matchState.round += 1;
  delete matchState.p1Score;
  delete matchState.p2Score;
  startTurn("p1");
}

function bankNewMatch() { goBank(); }

/* ---------- الواجهات ---------- */
function bankTopbar() {
  return `
    <div class="topbar">
      <button class="backbtn" onclick="goCategory()">${lang === "ar" ? "→" : "←"} ${esc(t().back)}</button>
      <button class="langbtn" onclick="toggleLang()">🌐 ${esc(t().langBtn)}</button>
    </div>`;
}

function bankMatchTracker() {
  if (!matchState) return "";
  return `
    <div class="match-tracker">
      <span>${esc(t().bankRoundLabel)} ${matchState.round}</span>
      <span class="mt-score">${esc(matchState.p1Name)} <b>${matchState.p1Wins}</b> : <b>${matchState.p2Wins}</b> ${esc(matchState.p2Name)}</span>
    </div>`;
}

function renderBankSetup() {
  const isTeam = bankMode === "team";
  const namesFieldsHtml = isTeam ? `
      <div class="type-row" style="flex-direction:column;">
        <label class="small-note">${esc(t().bankTeam1Label)}</label>
        <input type="text" id="bankT1M1Input" placeholder="${esc(t().bankMember1Ph)}" style="margin-bottom:0.5rem;">
        <input type="text" id="bankT1M2Input" placeholder="${esc(t().bankMember2Ph)}">
      </div>
      <div class="type-row" style="flex-direction:column; margin-top:1rem;">
        <label class="small-note">${esc(t().bankTeam2Label)}</label>
        <input type="text" id="bankT2M1Input" placeholder="${esc(t().bankMember1Ph)}" style="margin-bottom:0.5rem;">
        <input type="text" id="bankT2M2Input" placeholder="${esc(t().bankMember2Ph)}">
      </div>` : `
      <div class="type-row" style="flex-direction:column;">
        <label class="small-note" for="bankP1Input">${esc(t().bankP1Label)}</label>
        <input type="text" id="bankP1Input" placeholder="${esc(t().bankNamePh1)}">
      </div>
      <div class="type-row" style="flex-direction:column; margin-top:1rem;">
        <label class="small-note" for="bankP2Input">${esc(t().bankP2Label)}</label>
        <input type="text" id="bankP2Input" placeholder="${esc(t().bankNamePh2)}">
      </div>`;

  return `
    ${bankTopbar()}
    <h2>${esc(t().bankSetupTitle)}</h2>
    <p>${esc(t().bankSetupDesc)}</p>
    <div class="quiz-card">
      <label class="small-note">${esc(t().bankModeLabel)}</label>
      <div class="bank-actions" style="grid-template-columns:1fr 1fr; margin-top:0.4rem;">
        <button class="pill-btn ${isTeam ? "pill-outline" : "pill-gold"}" onclick="setBankMode('individual')">${esc(t().bankModeIndividual)}</button>
        <button class="pill-btn ${isTeam ? "pill-gold" : "pill-outline"}" onclick="setBankMode('team')">${esc(t().bankModeTeam)}</button>
      </div>
      <div style="margin-top:1.1rem;">${namesFieldsHtml}</div>
      ${bankSetupError ? `<div class="feedback bad" style="margin-top:0.9rem;">${esc(t().bankNeedNames)}</div>` : ""}
      <div class="footer-actions">
        <button class="pill-btn pill-gold" onclick="startMatch()">${esc(t().bankStartBtn)}</button>
      </div>
    </div>`;
}

function renderBankTurn() {
  const s = turnState;
  const contestantName = s.contestant === "p1" ? matchState.p1Name : matchState.p2Name;
  const q = s.questions[s.qIndex];
  const progressPct = ((s.qIndex + 1) / s.questions.length) * 100;

  return `
    ${bankTopbar()}
    ${bankMatchTracker()}
    ${matchState.round > BASE_ROUNDS ? `<p class="feedback bad">${esc(t().bankDeciderLabel)}</p>` : ""}
    <h2>${esc(t().bankTurnOf)} ${esc(contestantName)}</h2>
    <p class="small-note">${esc(t().bankQuestionLabel)} ${s.qIndex + 1} ${esc(t().bankOf)} ${s.questions.length}</p>
    <div class="progress-track"><div class="progress-fill" style="width:${progressPct}%"></div></div>

    <div class="score-bar">
      <div class="score-box risk">
        <div class="score-label">${esc(t().bankAtRisk)}</div>
        <div class="score-val">${s.atRisk}</div>
      </div>
      <div class="score-box banked">
        <div class="score-label">${esc(t().bankBanked)}</div>
        <div class="score-val">${s.banked}</div>
      </div>
    </div>

    <div class="quiz-card">
      <p style="font-size:1.1rem;">${esc(lang === "ar" ? q.ar : q.en)}</p>
      <div class="hint-card ${s.answerRevealed ? "open" : ""}" onclick="bankToggleAnswer()">
        <div class="hint-head"><span>${esc(s.answerRevealed ? t().bankHideAnswer : t().bankShowAnswer)}</span><span class="hint-arrow">▾</span></div>
        <div class="hint-body">${esc(name(q.player))}</div>
      </div>

      <div class="bank-actions">
        <button class="pill-btn pill-green" ${s.answered ? "disabled" : ""} onclick="bankMarkCorrect()">${esc(t().bankCorrectBtn)}</button>
        <button class="pill-btn pill-red" ${s.answered ? "disabled" : ""} onclick="bankMarkWrong()">${esc(t().bankWrongBtn)}</button>
        <button class="pill-btn pill-bank" ${s.atRisk === 0 ? "disabled" : ""} onclick="bankDoBank()">${esc(t().bankBankBtn)}</button>
      </div>

      <p class="small-note">💡 ${esc(t().bankForfeitNote)}</p>

      <div class="footer-actions">
        <button class="pill-btn pill-gold" ${s.answered ? "" : "disabled"} onclick="bankNextQuestion()">${esc(t().bankNextQBtn)}</button>
      </div>
    </div>`;
}

function renderBankTurnEnd() {
  return `
    ${bankTopbar()}
    ${bankMatchTracker()}
    <div class="quiz-card" style="text-align:center;">
      <h2>${esc(t().bankTurnEndTitle)} ${esc(matchState.p1Name)}</h2>
      <p class="reveal-name">${esc(t().bankTurnScore)}: ${matchState.p1Score}</p>
      <div class="footer-actions">
        <button class="pill-btn pill-gold" onclick="bankStartP2Turn()">${esc(t().bankStartTurnBtn)} ${esc(matchState.p2Name)}</button>
      </div>
    </div>`;
}

function renderBankRoundResult() {
  const last = matchState.roundHistory[matchState.roundHistory.length - 1];
  const winnerName = last.winner === "p1" ? matchState.p1Name : (last.winner === "p2" ? matchState.p2Name : null);
  const nextIsDecider = matchState.round + 1 > BASE_ROUNDS;
  return `
    ${bankTopbar()}
    ${bankMatchTracker()}
    <div class="quiz-card" style="text-align:center;">
      <h2>${esc(t().bankRoundResultTitle)} ${last.round}</h2>
      <div class="reveal-panel">
        <p>${esc(matchState.p1Name)}: <b>${last.p1Score}</b> — ${esc(matchState.p2Name)}: <b>${last.p2Score}</b></p>
        <p class="feedback ${winnerName ? "ok" : "bad"}">
          ${winnerName ? esc(t().bankWinnerLabel) + ": " + esc(winnerName) + " 🎉" : esc(t().bankTieLabel)}
        </p>
      </div>
      <p class="small-note">${esc(t().bankMatchScore)}: ${esc(matchState.p1Name)} ${matchState.p1Wins} - ${matchState.p2Wins} ${esc(matchState.p2Name)}</p>
      ${nextIsDecider ? `<p class="feedback bad">${esc(t().bankDeciderLabel)}</p>` : ""}
      <div class="footer-actions">
        <button class="pill-btn pill-gold" onclick="bankNextRound()">${esc(t().bankNextRoundBtn)}</button>
      </div>
    </div>`;
}

function renderBankMatchEnd() {
  const championName = matchState.p1Wins > matchState.p2Wins ? matchState.p1Name : matchState.p2Name;
  const historyHtml = matchState.roundHistory.map(r => {
    const w = r.winner === "p1" ? matchState.p1Name : (r.winner === "p2" ? matchState.p2Name : t().bankTieLabel);
    return `<div class="hint-line"><span class="hl-label">${esc(t().bankRoundLabel)} ${r.round}:</span><span class="hl-value">${r.p1Score} - ${r.p2Score} (${esc(w)})</span></div>`;
  }).join("");

  return `
    ${bankTopbar()}
    <div class="quiz-card" style="text-align:center;">
      <h2>${esc(t().bankChampion)}: ${esc(championName)} 🏆</h2>
      <p class="reveal-name">${esc(matchState.p1Name)} ${matchState.p1Wins} - ${matchState.p2Wins} ${esc(matchState.p2Name)}</p>
      <div class="hints-list" style="margin-top:1.1rem;">${historyHtml}</div>
      <div class="footer-actions">
        <button class="pill-btn pill-gold" onclick="bankNewMatch()">${esc(t().bankNewMatchBtn)}</button>
      </div>
    </div>`;
}

function renderBank() {
  if (bankView === "setup") return renderBankSetup();
  if (bankView === "turn") return renderBankTurn();
  if (bankView === "turnend") return renderBankTurnEnd();
  if (bankView === "roundresult") return renderBankRoundResult();
  if (bankView === "matchend") return renderBankMatchEnd();
  return "";
}
