let matchState = null;
let turnState = null;
let leagueState = null;
let bankView = "setup";
let bankSetupError = false;
let bankMode = "individual";
let bankTournamentMode = "single"; // "single" (ماتش عادي) أو "league" (دوري بين ٣-٤ فرق)
let bankLeagueTeamCount = 4;
let bankTimerHandle = null;
let bankAudioCtx = null;
let bankMuted = false;

const DEFAULT_QUESTIONS_PER_TURN = 12;
const BASE_ROUNDS = 4;
const DEFAULT_TURN_TIME_LIMIT_SECONDS = 90;
const MIN_TIME_LIMIT_SECONDS = 20;
const MAX_TIME_LIMIT_SECONDS = 600;
const MIN_QUESTIONS_PER_TURN = 3;
const MAX_QUESTIONS_PER_TURN = 30;

// دول قيم فعلية بتتحدد من شاشة الإعداد (أو بترجع للدیفولت لو الحكم سابهم فاضيين/غلط)
let bankTimeLimitSetting = DEFAULT_TURN_TIME_LIMIT_SECONDS;
let bankQuestionsPerTurnSetting = DEFAULT_QUESTIONS_PER_TURN;

// ---- أنواع الأسئلة اللي الحكم يقدر يختارها في الإعداد (الديفولت: الكل = ٤٠٪ لاعيبة والباقي راندوم من الباقي) ----
const BANK_SOURCE_TYPES = ["player", "club", "competition", "records"];
let bankSources = BANK_SOURCE_TYPES.slice();

// ---- مسودة الشاشة: الأسماء والقيم المكتوبة بتتحفظ هنا قبل أي re-render عشان ماتتمسحش لما الحكم يبدّل فردي/تيم ----
function bankBlankDraft() {
  return { p1: "", p2: "", t1m1: "", t1m2: "", t2m1: "", t2m2: "", league: ["", "", "", ""],
           time: DEFAULT_TURN_TIME_LIMIT_SECONDS, q: DEFAULT_QUESTIONS_PER_TURN };
}
let bankDraft = bankBlankDraft();

function bankSnapshotInputs() {
  const val = id => { const el = document.getElementById(id); return el ? el.value : null; };
  const set = (key, id) => { const v = val(id); if (v !== null) bankDraft[key] = v; };
  set("p1", "bankP1Input"); set("p2", "bankP2Input");
  set("t1m1", "bankT1M1Input"); set("t1m2", "bankT1M2Input");
  set("t2m1", "bankT2M1Input"); set("t2m2", "bankT2M2Input");
  for (let i = 0; i < 4; i++) { const v = val("bankLeagueTeamInput" + i); if (v !== null) bankDraft.league[i] = v; }
  set("time", "bankTimeLimitInput"); set("q", "bankQCountInput");
}

function bankLoadSaved() {
  bankDraft = bankBlankDraft();
  const s = savedGet("bank.settings", null);
  if (!s || typeof s !== "object") return;
  const str = v => (typeof v === "string" ? v : "");
  if (s.mode === "team" || s.mode === "individual") bankMode = s.mode;
  if (s.tournament === "league" || s.tournament === "single") bankTournamentMode = s.tournament;
  if (s.leagueTeams === 3 || s.leagueTeams === 4) bankLeagueTeamCount = s.leagueTeams;
  const n = s.names || {};
  ["p1", "p2", "t1m1", "t1m2", "t2m1", "t2m2"].forEach(k => { bankDraft[k] = str(n[k]); });
  for (let i = 0; i < 4; i++) bankDraft.league[i] = str(Array.isArray(n.league) ? n.league[i] : "");
  const tm = parseInt(s.time, 10);
  if (!isNaN(tm) && tm >= MIN_TIME_LIMIT_SECONDS && tm <= MAX_TIME_LIMIT_SECONDS) bankDraft.time = tm;
  const qc = parseInt(s.q, 10);
  if (!isNaN(qc) && qc >= MIN_QUESTIONS_PER_TURN && qc <= MAX_QUESTIONS_PER_TURN) bankDraft.q = qc;
  if (Array.isArray(s.sources)) {
    const f = BANK_SOURCE_TYPES.filter(x => s.sources.includes(x));
    if (f.length > 0) bankSources = f;
  }
}

function bankSaveSettings() {
  savedSet("bank.settings", {
    mode: bankMode, tournament: bankTournamentMode, leagueTeams: bankLeagueTeamCount,
    names: {
      p1: bankDraft.p1.trim(), p2: bankDraft.p2.trim(),
      t1m1: bankDraft.t1m1.trim(), t1m2: bankDraft.t1m2.trim(), t2m1: bankDraft.t2m1.trim(), t2m2: bankDraft.t2m2.trim(),
      league: bankDraft.league.map(x => x.trim())
    },
    time: bankTimeLimitSetting, q: bankQuestionsPerTurnSetting, sources: bankSources
  });
}

function bankHasSaved() { return !!savedGet("bank.settings", null); }

function bankClearSaved() {
  savedRemove("bank.settings");
  bankMode = "individual"; bankTournamentMode = "single"; bankLeagueTeamCount = 4;
  bankSources = BANK_SOURCE_TYPES.slice();
  bankDraft = bankBlankDraft();
  bankSetupError = false;
  render();
}

function toggleBankSource(type) {
  bankSnapshotInputs();
  if (bankSources.includes(type)) {
    if (bankSources.length === 1) return; // لازم نوع واحد على الأقل يفضل مختار
    bankSources = bankSources.filter(x => x !== type);
  } else {
    bankSources = BANK_SOURCE_TYPES.filter(x => x === type || bankSources.includes(x));
  }
  render();
}

function bankClearTimer() {
  if (bankTimerHandle) {
    clearInterval(bankTimerHandle);
    bankTimerHandle = null;
  }
}

function bankToggleMute() {
  bankMuted = !bankMuted;
  render();
}

// بنولّد الصوت بالـ Web Audio API نفسه من غير أي ملفات خارجية (تِك خفيف آخر ١٠ ثواني، بازر لما الوقت يخلص،
// ونغمة مختلفة لما الحكم يدوس صح أو غلط). كل الأصوات بتتلغي فورًا لو زرار الكتم شغال.
function bankGetAudioCtx() {
  if (!bankAudioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    bankAudioCtx = new AC();
  }
  if (bankAudioCtx.state === "suspended") bankAudioCtx.resume();
  return bankAudioCtx;
}

function bankPlayTone(freq, durationMs, type, volume) {
  if (bankMuted) return;
  const ctx = bankGetAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.value = freq;
  gain.gain.value = volume != null ? volume : 0.2;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationMs / 1000);
  osc.stop(ctx.currentTime + durationMs / 1000 + 0.02);
}

function bankPlayTick() {
  bankPlayTone(880, 120, "square", 0.15);
}

function bankPlayBuzzer() {
  bankPlayTone(220, 500, "sawtooth", 0.25);
  setTimeout(() => bankPlayTone(180, 500, "sawtooth", 0.25), 250);
}

function bankPlayCorrect() {
  bankPlayTone(523, 120, "sine", 0.2);
  setTimeout(() => bankPlayTone(784, 180, "sine", 0.2), 110);
}

function bankPlayWrong() {
  bankPlayTone(180, 220, "square", 0.2);
}

function goBank() {
  screen = "bank";
  bankView = "setup";
  bankClearTimer();
  matchState = null;
  turnState = null;
  leagueState = null;
  bankSetupError = false;
  bankMode = "individual";
  bankTournamentMode = "single";
  bankLeagueTeamCount = 4;
  bankTimeLimitSetting = DEFAULT_TURN_TIME_LIMIT_SECONDS;
  bankQuestionsPerTurnSetting = DEFAULT_QUESTIONS_PER_TURN;
  bankSources = BANK_SOURCE_TYPES.slice();
  bankLoadSaved(); // آخر أسماء وإعدادات اتلعبت بتتملّى تلقائي
  render();
}

function setBankMode(mode) {
  bankSnapshotInputs();
  bankMode = mode;
  render();
}

function setBankTournamentMode(mode) {
  bankSnapshotInputs();
  bankTournamentMode = mode;
  bankSetupError = false;
  render();
}

function setBankLeagueTeamCount(n) {
  bankSnapshotInputs();
  bankLeagueTeamCount = n;
  render();
}

function buildFrequencyMaps() {
  const comboFreq = {};
  players.forEach(p => {
    const achKey = p.achievementsAr.slice(0, achCount(p.achievementsAr)).join("، و");
    const k1 = achKey + "|" + p.position.en;
    const k2 = achKey + "|" + p.era;
    comboFreq[k1] = (comboFreq[k1] || 0) + 1;
    comboFreq[k2] = (comboFreq[k2] || 0) + 1;
  });
  return { comboFreq };
}

function achievementCombo(list, sep) {
  const n = Math.min(3, list.length);
  return list.slice(0, n).join(sep || "، و");
}

const BANK_FREQ = buildFrequencyMaps();

function isVagueAchievement(ar, en) {
  const t = (ar || "") + " " + (en || "");
  return /عدة مرات|مرات متتالية|متتاليًا|\d+\s*ألقاب|\d+\s*مرات|multiple times|several times|consecutive|\d+\s*titles/i.test(t);
}

// بعض القيم في حقل النادي مش اسم نادي حقيقي (زي "معتزل" لوحدها، أو "لاعب حر...")
// فبنستبعدها من أي سؤال يعتمد على اسم النادي عشان ميطلعش سؤال ملوش معنى.
function isRealClub(clubText) {
  const t = clubText.trim().toLowerCase();
  if (t === "معتزل" || t === "retired") return false;
  if (t.includes("لاعب حر") || t.includes("free agent") || t.includes("بدون نادي") || t.includes("unattached")) return false;
  return true;
}

function normalizeClubName(s) {
  return String(s).replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim();
}

// ================= أدوات مساعدة لتحسين جودة الأسئلة =================
// (إضافة جديدة) كل الأدوات دي بتخدم هدف واحد: إن السؤال يبقى واضح، إجابته نضيفة، وماتتسربش فيه.

function stripParens(s) {
  return String(s || "").replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
}

// تطبيع عربي بسيط (بيشيل التشكيل ويوحّد الألف والياء والتاء المربوطة) عشان مقارنة النصوص تبقى دقيقة
function normAr(s) {
  return String(s || "").toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه");
}

const LEAK_STOP_WORDS = new Set(
  ["نادي", "النادي", "سيتي", "يونايتد", "ريال", "اتحاد", "الدوري", "كأس", "بطولة", "استاد", "ستاديو", "ملعب", "أولمبيك", "سبورت"].map(normAr)
);

function sigTokens(s) {
  return normAr(s).split(/[^\u0600-\u06FFa-z0-9]+/)
    .filter(w => w.length >= 4 && !/^\d+$/.test(w) && !LEAK_STOP_WORDS.has(w));
}

// بيكشف لو الإجابة (أو اسم اللاعب) ظاهرة جوّه نص السؤال نفسه، زي "نادي فياريال موجود في أنهي مدينة؟ ← فياريال"
function answerLeaks(v) {
  const ans = v.leakAr || v.answerAr;
  if (!ans) return false;
  if (/\sولا\s/.test(v.ar)) return false; // أسئلة المقارنة (أ ولا ب): الإجابة جزء من السؤال بطبيعتها
  const toks = sigTokens(ans);
  if (toks.length === 0) return false;
  const q = normAr(v.ar);
  return v.person ? toks.some(t => q.includes(t)) : toks.every(t => q.includes(t));
}

// بيختار سؤال عشوائي من القايمة بعد استبعاد المتسرّب، وبيفضّل الأسئلة القصيرة (بتتقرا في وقت الدور)
function pickVariant(variants) {
  let pool = variants.filter(v => !answerLeaks(v));
  if (pool.length === 0) return null;
  const compact = pool.filter(v => v.ar.length <= 230);
  if (compact.length > 0) pool = compact;
  return pool[Math.floor(Math.random() * pool.length)];
}

// بنشيل الأقواس اللي مالهاش لازمة في أسماء الأندية (إعارة / شباب / معتزل / مدرب / MLS) وبنسيب الأقواس اللي بتوضّح الدولة
const JUNK_PAREN = /^(?:إعارة|معار|شباب|فئات سنية|معتزل|متوفى|مدرب|مساعد|رئيس|الدوري الأمريكي|mls|loan|on loan|youth|retired|deceased|assistant|head coach|club president)/i;
function cleanClubText(s) {
  return String(s || "").replace(/\s*\(([^)]*)\)/g, (m, inner) => {
    const x = inner.trim();
    return (JUNK_PAREN.test(x) || /[،,]/.test(x)) ? "" : ` (${x})`;
  }).replace(/\s+/g, " ").trim();
}

// أندية الشباب والفئات السنية وإعارات متعددة مش "نادي لعب له" بالمعنى الحقيقي، فمنستخدمهاش في الأسئلة
function isNonClubEntry(s) {
  return /\((?:شباب|فئات سنية|youth|academy)|إعارات متعددة|multiple loans/i.test(String(s || ""));
}

function playerHistoryClubs(p) {
  const out = [];
  (p.clubsHistoryAr || []).forEach((h, i) => {
    const en = (p.clubsHistoryEn || [])[i] || h;
    if (isNonClubEntry(h) || isNonClubEntry(en)) return;
    const a = cleanClubText(h), e = cleanClubText(en);
    if (a && e && !out.some(x => x.ar === a)) out.push({ ar: a, en: e });
  });
  return out;
}

// النادي الحالي (أو الأخير للمعتزل) بعد التنضيف. بيرجّع null لو القيمة مش نادي واضح (لاعب حر / مدرب / رئيس / متوفى / معار)
function currentClubInfo(p) {
  const ar = p.clubAr || "", en = p.clubEn || "";
  if (!isRealClub(ar) || !isRealClub(en)) return null;
  if (/مدرب|رئيس|متوفى|معار|إعارة|آخر أنديته/.test(ar)) return null;
  if (/^\s*معتزل\s*\(/.test(ar) && /مدرب|رئيس/.test(ar)) return null;
  const a = cleanClubText(ar), e = cleanClubText(en);
  return (a && e && a !== "معتزل") ? { ar: a, en: e } : null;
}

// عدد الإنجازات اللي هنستخدمها كتلميح: لحد 3، بس لو النص بقى طويل قوي بننزل لـ 2 (عشان السؤال يتقرا بسرعة)
function achCount(listAr) {
  let n = Math.min(3, listAr.length);
  while (n > 2 && listAr.slice(0, n).join("، و").length > 150) n--;
  return n;
}

function playerAnswerFields(p) {
  return {
    answerAr: `${p.nameAr} — ${p.nationalityAr}، ${p.position.ar}`,
    answerEn: `${p.nameEn} — ${p.nationalityEn}, ${p.position.en}`,
    leakAr: p.nameAr,
    person: true
  };
}

function profileKey(p) {
  const c = currentClubInfo(p);
  return (c && p.era && String(p.era).trim()) ? [p.nationalityAr, p.position.ar, p.era, c.ar].join("|") : null;
}
const PLAYER_PROFILE_FREQ = (() => {
  const f = {};
  players.forEach(p => { const k = profileKey(p); if (k) f[k] = (f[k] || 0) + 1; });
  return f;
})();

// بعض البطولات أسنتها بتتحسب بسنة نهاية الموسم (مثلاً موسم 2012-13 = 2013)، فبنوضّح ده في أسئلة السنين
function competitionYearNote(c) {
  return c.yearBasis === "seasonEnd"
    ? { ar: " (بحساب سنة نهاية الموسم)", en: " (counting the season's ending year)" }
    : { ar: "", en: "" };
}

function combinations(arr, k) {
  const result = [];
  function helper(start, combo) {
    if (combo.length === k) { result.push(combo.slice()); return; }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  }
  helper(0, []);
  return result;
}

const MAX_CLUB_COMBO_SIZE = 4;

function buildPlayerClubCrossReference() {
  if (typeof clubs === "undefined" || typeof players === "undefined") return {};
  const clubByName = {};
  clubs.forEach(c => { clubByName[normalizeClubName(c.nameAr)] = c; });

  const playerClubIds = {};
  players.forEach(p => {
    const ids = [];
    const names = (p.clubsHistoryAr || []).filter(h => !isNonClubEntry(h));
    if (p.clubAr) names.push(p.clubAr);
    names.forEach(h => {
      const c = clubByName[normalizeClubName(h)];
      if (c && !ids.includes(c.id)) ids.push(c.id);
    });
    playerClubIds[p.id] = ids;
  });

  const comboOwners = {};
  Object.keys(playerClubIds).forEach(pid => {
    const ids = playerClubIds[pid];
    for (let size = 2; size <= Math.min(MAX_CLUB_COMBO_SIZE, ids.length); size++) {
      combinations(ids, size).forEach(combo => {
        const key = combo.slice().sort().join("|");
        (comboOwners[key] = comboOwners[key] || []).push(pid);
      });
    }
  });

  const playerSafeCombos = {};
  Object.entries(comboOwners).forEach(([key, owners]) => {
    if (owners.length === 1) {
      const ids = key.split("|");
      (playerSafeCombos[owners[0]] = playerSafeCombos[owners[0]] || []).push(ids);
    }
  });
  return playerSafeCombos;
}

const PLAYER_SAFE_CLUB_COMBOS = buildPlayerClubCrossReference();

function joinClubNamesAr(clubObjs) {
  if (clubObjs.length === 2) return `نادي ${clubObjs[0].nameAr} ونادي ${clubObjs[1].nameAr}`;
  const allButLast = clubObjs.slice(0, -1).map(c => `نادي ${c.nameAr}`).join("، ");
  return `${allButLast}، ونادي ${clubObjs[clubObjs.length - 1].nameAr}`;
}
function joinClubNamesEn(clubObjs) {
  if (clubObjs.length === 2) return `${clubObjs[0].nameEn} and ${clubObjs[1].nameEn}`;
  const allButLast = clubObjs.slice(0, -1).map(c => c.nameEn).join(", ");
  return `${allButLast}, and ${clubObjs[clubObjs.length - 1].nameEn}`;
}

function buildBankQuestion(p) {
  const hasMultipleAch = p.achievementsAr.length >= 2;
  const n = achCount(p.achievementsAr);
  const achAr = p.achievementsAr.slice(0, n).join("، و");
  const achEn = p.achievementsEn.slice(0, n).join("; and ");
  const cur = currentClubInfo(p);
  const hist = playerHistoryClubs(p);
  const ans = playerAnswerFields(p);
  const hasEra = !!(p.era && String(p.era).trim()); // بعض اللاعيبة في الداتا فترة نشاطهم فاضية
  const curVerbAr = p.active ? "بيلعب حاليًا لنادي" : "آخر ناديه كان";
  const curVerbEn = p.active ? "currently plays for" : "last played for";

  const vague = !hasMultipleAch && isVagueAchievement(p.achievementsAr[0], p.achievementsEn[0]);
  const variants = [];
  const add = (ar, en, extra) => variants.push(Object.assign({ ar, en }, extra || ans));

  if (!vague) {
    add(
      `مين اللاعب اللي جنسيته ${p.nationalityAr} ولعب في مركز ${p.position.ar}، ومن أهم إنجازاته: ${achAr}؟`,
      `Which player is ${p.nationalityEn}, played as a ${p.position.en}, and whose achievements include: ${achEn}?`
    );

    if (hasEra && (!BANK_FREQ.comboFreq[achAr + "|" + p.era] || BANK_FREQ.comboFreq[achAr + "|" + p.era] === 1)) {
      add(
        `مين اللاعب اللي فترة نشاطه ${p.era}، ومن أهم إنجازاته: ${achAr}؟`,
        `Which player was active during ${p.era} and whose achievements include: ${achEn}?`
      );
    }

    if (cur) {
      add(
        `مين اللاعب اللي ${curVerbAr} ${cur.ar}، ومن أهم إنجازاته: ${achAr}؟`,
        `Which player ${curVerbEn} ${cur.en}, and whose achievements include: ${achEn}?`
      );
    }

    if (hist.length > 0) {
      const h = hist[Math.floor(Math.random() * hist.length)];
      add(
        `مين اللاعب اللي لعب لنادي ${h.ar} في مسيرته، ومن أهم إنجازاته: ${achAr}؟`,
        `Which player has ${h.en} in his club history, and whose achievements include: ${achEn}?`
      );
    }
  }

  if (p.bioAr && p.bioEn) {
    add(`مين اللاعب ده؟ «${p.bioAr}»`, `Who is this player? "${p.bioEn}"`);
  }

  if (hasMultipleAch) {
    add(
      `مين اللاعب اللي من أهم إنجازاته: ${achAr}؟`,
      `Which player's achievements include: ${achEn}?`
    );
  }

  const safeCombos = PLAYER_SAFE_CLUB_COMBOS[p.id];
  if (safeCombos && safeCombos.length > 0) {
    const comboIds = safeCombos[Math.floor(Math.random() * safeCombos.length)];
    const comboClubs = comboIds.map(id => clubs.find(c => c.id === id)).filter(Boolean);
    if (comboClubs.length === comboIds.length) {
      add(
        `مين اللاعب اللي لعب في مسيرته ل${joinClubNamesAr(comboClubs)}؟`,
        `Which player has played for ${joinClubNamesEn(comboClubs)} during his career?`
      );
    }
  }

  // (جديد) سؤال بروفايل من غير إنجازات: جنسية + مركز + نادي + فترة، ومتأكدين إن المزيج ده لاعب واحد بس في الداتا
  if (cur && hasEra && PLAYER_PROFILE_FREQ[profileKey(p)] === 1) {
    add(
      `مين اللاعب اللي جنسيته ${p.nationalityAr}، ومركزه ${p.position.ar}، و${curVerbAr} ${cur.ar}، وفترة نشاطه ${p.era}؟`,
      `Which player is ${p.nationalityEn}, plays as a ${p.position.en}, ${curVerbEn} ${cur.en}, and was active during ${p.era}?`
    );
  }

  // (جديد) أسئلة بتسأل عن اللاعب نفسه والإجابة نادي (مستوى متوسط، مناسب للّاعبين المشهورين)
  if (cur) {
    variants.push({
      ar: p.active ? `${p.nameAr} بيلعب حاليًا لأنهي نادي؟` : `آخر نادي لعب له ${p.nameAr} كان إيه؟`,
      en: p.active ? `Which club does ${p.nameEn} currently play for?` : `Which was the last club ${p.nameEn} played for?`,
      answerAr: cur.ar, answerEn: cur.en
    });
  }

  if (variants.length === 0 && hasEra) {
    add(
      `مين اللاعب (${p.nationalityAr} — ${p.position.ar}) اللي فترة نشاطه ${p.era}؟`,
      `Which player (${p.nationalityEn} — ${p.position.en}) was active during ${p.era}?`
    );
  }

  return pickVariant(variants);
}

const DISPUTED_YEAR_QUESTIONS = [{ id: "africa-cup-of-nations", year: 2025 }];

function isDisputedYear(compId, year) {
  return DISPUTED_YEAR_QUESTIONS.some(d => d.id === compId && d.year === year);
}

function teamWordFor(comp) {
  return comp.type === "international"
    ? { ar: "المنتخب", en: "national team" }
    : { ar: "الفريق", en: "team" };
}

function buildCompetitionQuestion(c) {
  const tw = teamWordFor(c);
  const yn = competitionYearNote(c);
  const variants = [];


  const eligibleWinners = c.winners.filter(w => w.years.some(y => !isDisputedYear(c.id, y)));
  if (eligibleWinners.length > 0) {
    const w = eligibleWinners[Math.floor(Math.random() * eligibleWinners.length)];
    const validYears = w.years.filter(y => !isDisputedYear(c.id, y));
    const year = validYears[Math.floor(Math.random() * validYears.length)];
    variants.push({
      ar: `مين ${tw.ar} اللي كسب ${c.nameAr} سنة ${year}${yn.ar}؟`,
      en: `Which ${tw.en} won the ${c.nameEn} in ${year}${yn.en}?`,
      answerAr: w.nameAr, answerEn: w.nameEn
    });
  }


  {
    const w = c.winners[Math.floor(Math.random() * c.winners.length)];
    variants.push({
      ar: `كام لقب فاز بيه ${w.nameAr} في ${c.nameAr}؟`,
      en: `How many ${c.nameEn} titles has ${w.nameEn} won?`,
      answerAr: `${w.titles} لقب`, answerEn: `${w.titles} title${w.titles === 1 ? "" : "s"}`
    });
  }


  variants.push({
    ar: `مين آخر بطل لـ${c.nameAr} (لحد ${c.latestYear})؟`,
    en: `Who is the most recent ${c.nameEn} champion (as of ${c.latestYear})?`,
    answerAr: c.latestChampionAr, answerEn: c.latestChampionEn
  });


  variants.push({
    ar: `امتى اتلعبت أول نسخة من ${c.nameAr}؟`,
    en: `When was the first edition of the ${c.nameEn} held?`,
    answerAr: String(c.firstEditionYear), answerEn: String(c.firstEditionYear)
  });


  if (typeof c.totalWinnersCount === "number") {
    variants.push({
      ar: `كام ${tw.ar} مختلف كسب ${c.nameAr} لحد دلوقتي؟`,
      en: `How many different ${tw.en}s have won the ${c.nameEn} so far?`,
      answerAr: String(c.totalWinnersCount), answerEn: String(c.totalWinnersCount)
    });
  }

  // (جديد) مين الأكتر فوزًا بالبطولة — بس لو فيه فايز واحد بعدد ألقاب أعلى من اللي بعده (من غير تعادل)
  const sorted = c.winners.slice().sort((a, b) => b.titles - a.titles);
  if (sorted.length >= 2 && sorted[0].titles > sorted[1].titles) {
    variants.push({
      ar: `مين ${tw.ar} الأكتر فوزًا بـ${c.nameAr} من حيث عدد الألقاب؟`,
      en: `Which ${tw.en} has won the ${c.nameEn} the most times?`,
      answerAr: `${sorted[0].nameAr} (${sorted[0].titles} لقب)`,
      answerEn: `${sorted[0].nameEn} (${sorted[0].titles} title${sorted[0].titles === 1 ? "" : "s"})`
    });
  }

  // (جديد) مقارنة بين فايزين بعدد ألقاب مختلف
  if (c.winners.length >= 2) {
    const pair = shuffle(c.winners).slice(0, 2);
    if (pair[0].titles !== pair[1].titles) {
      const winner = pair[0].titles > pair[1].titles ? pair[0] : pair[1];
      variants.push({
        ar: `أنهي ${tw.ar.replace(/^ال/, "")} فاز بـ${c.nameAr} أكتر: ${pair[0].nameAr} ولا ${pair[1].nameAr}؟`,
        en: `Which ${tw.en} has won the ${c.nameEn} more often: ${pair[0].nameEn} or ${pair[1].nameEn}?`,
        answerAr: `${winner.nameAr} (${winner.titles} لقب)`, answerEn: `${winner.nameEn} (${winner.titles} title${winner.titles === 1 ? "" : "s"})`
      });
    }
  }

  // (جديد) مين كسب أول نسخة — بنلاقيه من سنين الفايزين نفسها، وبس لو فايز واحد متسجّل ليه السنة دي
  {
    const first = c.winners.filter(w => w.years.includes(c.firstEditionYear) && !isDisputedYear(c.id, c.firstEditionYear));
    if (first.length === 1) {
      variants.push({
        ar: `مين ${tw.ar} اللي كسب أول نسخة من ${c.nameAr}؟`,
        en: `Which ${tw.en} won the first edition of the ${c.nameEn}?`,
        answerAr: first[0].nameAr, answerEn: first[0].nameEn
      });
    }
  }

  // (جديد) آخر سنة فاز فيها فايز بالبطولة — بس لو سنينه مكتملة (عدد السنين = عدد الألقاب) ومش متنازع عليها
  {
    const full = c.winners.filter(w => w.yearsComplete !== false && w.years.length > 0 && w.years.length === w.titles
      && !isDisputedYear(c.id, Math.max(...w.years)));
    if (full.length > 0) {
      const w = full[Math.floor(Math.random() * full.length)];
      const last = Math.max(...w.years);
      variants.push({
        ar: `آخر مرة فاز فيها ${w.nameAr} بـ${c.nameAr} كانت سنة كام${yn.ar}؟`,
        en: `In which year did ${w.nameEn} last win the ${c.nameEn}${yn.en}?`,
        answerAr: String(last), answerEn: String(last)
      });
    }
  }

  return pickVariant(variants);
}

function buildClubFrequencyMaps() {
  const stadiumFreq = {}, nicknameFreq = {}, achComboFreq = {}, colorCityFreq = {};
  clubs.forEach(c => {
    if (c.stadiumAr) stadiumFreq[c.stadiumAr] = (stadiumFreq[c.stadiumAr] || 0) + 1;
    if (c.colorsAr && c.cityAr) { const k = c.colorsAr + "|" + c.cityAr; colorCityFreq[k] = (colorCityFreq[k] || 0) + 1; }
    (c.nicknamesAr || []).forEach(n => { nicknameFreq[n] = (nicknameFreq[n] || 0) + 1; });


    if (c.achievementsAr && c.achievementsAr.length > 0) {
      const combo = achievementCombo(c.achievementsAr, "، و");
      achComboFreq[combo] = (achComboFreq[combo] || 0) + 1;
    }
  });
  return { stadiumFreq, nicknameFreq, achComboFreq, colorCityFreq };
}

const CLUB_FREQ = (typeof clubs !== "undefined") ? buildClubFrequencyMaps() : null;

function pickOtherClub(excludeId) {
  const pool = clubs.filter(c => c.id !== excludeId);
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function competitionNameById(id) {
  if (typeof competitions === "undefined") return null;
  const c = competitions.find(x => x.id === id);
  return c ? { ar: c.nameAr, en: c.nameEn, note: competitionYearNote(c) } : null;
}

function totalTitlesFor(c) {
  return (c.honours || []).reduce((sum, h) => sum + h.titles, 0);
}

function buildClubQuestion(club) {
  const variants = [];


  if (club.stadiumAr) {
    variants.push({
      ar: `نادي ${club.nameAr} بيلعب على أنهي ملعب؟`,
      en: `Which stadium does ${club.nameEn} play at?`,
      answerAr: club.stadiumAr, answerEn: club.stadiumEn
    });
  }


  if (club.cityAr) {
    variants.push({
      ar: `نادي ${club.nameAr} موجود في أنهي مدينة؟`,
      en: `Which city is ${club.nameEn} based in?`,
      answerAr: club.cityAr, answerEn: club.cityEn
    });
  }


  if (club.countryAr) {
    variants.push({
      ar: `نادي ${club.nameAr} نادي من أنهي دولة؟`,
      en: `Which country is ${club.nameEn} from?`,
      answerAr: club.countryAr, answerEn: club.countryEn
    });
  }


  if (club.leagueCompetitionId) {
    const leagueName = competitionNameById(club.leagueCompetitionId);
    if (leagueName) {
      variants.push({
        ar: `نادي ${club.nameAr} بيلعب في أنهي دوري محلي؟`,
        en: `Which domestic league does ${club.nameEn} play in?`,
        answerAr: stripParens(leagueName.ar), answerEn: stripParens(leagueName.en)
      });
    }
  }


  if (club.colorsAr) {
    variants.push({
      ar: `نادي ${club.nameAr} ألوانه الأساسية إيه؟`,
      en: `What are ${club.nameEn}'s main colors?`,
      answerAr: club.colorsAr, answerEn: club.colorsEn
    });
  }


  if (club.bioAr && club.bioEn) {
    variants.push({
      ar: `مين النادي ده؟ «${club.bioAr}»`,
      en: `Which club is this? "${club.bioEn}"`,
      answerAr: club.nameAr, answerEn: club.nameEn
    });
  }


  if (club.achievementsAr && club.achievementsAr.length > 0) {
    const achComboClub = achievementCombo(club.achievementsAr, "، و");
    if (CLUB_FREQ.achComboFreq[achComboClub] === 1) {
      const achComboClubEn = achievementCombo(club.achievementsEn, "; and ");
      variants.push({
        ar: `أنهي نادي من أهم إنجازاته: ${achComboClub}؟`,
        en: `Which club's achievements include: ${achComboClubEn}?`,
        answerAr: club.nameAr, answerEn: club.nameEn
      });
    }
  }


  variants.push({
    ar: `نادي ${club.nameAr} اتأسس سنة كام؟`,
    en: `In what year was ${club.nameEn} founded?`,
    answerAr: String(club.founded), answerEn: String(club.founded)
  });


  if (club.formerNameAr) {
    variants.push({
      ar: `نادي ${club.nameAr} كان اسمه إيه قبل ما يتغيّر؟`,
      en: `What was ${club.nameEn}'s former name?`,
      answerAr: club.formerNameAr, answerEn: club.formerNameEn
    });
  }


  const nickGivesAway = (club.nicknamesAr || []).some(n => {
    const a = normAr(n), b = normAr(club.nameAr);
    return a.length >= 3 && (b.includes(a) || a.includes(b));
  });
  if (club.nicknamesAr && club.nicknamesAr.length > 0 && !nickGivesAway) {
    variants.push({
      ar: `نادي ${club.nameAr} بيتلقب بإيه؟`,
      en: `What is ${club.nameEn}'s nickname?`,
      answerAr: club.nicknamesAr.join(" / "), answerEn: club.nicknamesEn.join(" / ")
    });
  }


  if (club.rivals && club.rivals.length > 0) {
    variants.push({
      ar: `مين الغريم التقليدي لنادي ${club.nameAr}؟`,
      en: `Who is ${club.nameEn}'s traditional rival?`,
      answerAr: club.rivals.map(r => r.nameAr).join(" / "), answerEn: club.rivals.map(r => r.nameEn).join(" / ")
    });
  }


  if (club.domesticLeagueTitles !== null && club.domesticLeagueTitles !== undefined) {
    variants.push({
      ar: `نادي ${club.nameAr} كسب كام لقب في الدوري المحلي بتاعه؟`,
      en: `How many domestic league titles has ${club.nameEn} won?`,
      answerAr: String(club.domesticLeagueTitles), answerEn: String(club.domesticLeagueTitles)
    });
  }


  if (club.honours && club.honours.length > 0) {
    const h = club.honours[Math.floor(Math.random() * club.honours.length)];
    const compName = competitionNameById(h.competitionId);
    if (compName) {
      variants.push({
        ar: `نادي ${club.nameAr} معاه كام لقب في ${compName.ar}؟`,
        en: `How many ${compName.en} titles does ${club.nameEn} have?`,
        answerAr: String(h.titles), answerEn: String(h.titles)
      });


      const lastYear = h.years[h.years.length - 1];
      variants.push({
        ar: `نادي ${club.nameAr} كسب ${compName.ar} كام مرة، وآخر مرة كانت سنة كام؟`,
        en: `How many times has ${club.nameEn} won the ${compName.en}, and in which year was the most recent one?`,
        answerAr: `${h.titles} مرة — آخر مرة ${lastYear}${compName.note.ar}`, answerEn: `${h.titles} time${h.titles === 1 ? "" : "s"} — most recently in ${lastYear}${compName.note.en}`
      });
    }
  }


  const rival = pickOtherClub(club.id);
  if (rival) {

    if (club.domesticLeagueTitles != null && rival.domesticLeagueTitles != null
        && club.domesticLeagueTitles !== rival.domesticLeagueTitles) {
      const winner = club.domesticLeagueTitles > rival.domesticLeagueTitles ? club : rival;
      variants.push({
        ar: `أنهي نادي عنده ألقاب دوري محلي أكتر: ${club.nameAr} ولا ${rival.nameAr}؟`,
        en: `Which club has more domestic league titles: ${club.nameEn} or ${rival.nameEn}?`,
        answerAr: winner.nameAr, answerEn: winner.nameEn
      });
    }


    if (club.founded !== rival.founded) {
      const winner = club.founded < rival.founded ? club : rival;
      variants.push({
        ar: `أنهي نادي اتأسس الأول: ${club.nameAr} ولا ${rival.nameAr}؟`,
        en: `Which club was founded first: ${club.nameEn} or ${rival.nameEn}?`,
        answerAr: winner.nameAr, answerEn: winner.nameEn
      });


      const yearsApart = Math.abs(club.founded - rival.founded);
      variants.push({
        ar: `${club.nameAr} و${rival.nameAr} — الفرق بين سنة تأسيس الناديين كام سنة؟`,
        en: `${club.nameEn} and ${rival.nameEn} — how many years apart were they founded?`,
        answerAr: `${yearsApart} سنة`, answerEn: `${yearsApart} year${yearsApart === 1 ? "" : "s"}`
      });
    }


    if (club.honours && rival.honours) {
      const h1 = club.honours.find(x => {
        const h2 = rival.honours.find(y => y.competitionId === x.competitionId);
        return h2 && h2.titles !== x.titles;
      });
      if (h1) {
        const h2 = rival.honours.find(y => y.competitionId === h1.competitionId);
        const compName = competitionNameById(h1.competitionId);
        if (compName) {
          const winner = h1.titles > h2.titles ? club : rival;
          variants.push({
            ar: `أنهي نادي عنده ألقاب أكتر في ${compName.ar}: ${club.nameAr} ولا ${rival.nameAr}؟`,
            en: `Which club has more ${compName.en} titles: ${club.nameEn} or ${rival.nameEn}?`,
            answerAr: winner.nameAr, answerEn: winner.nameEn
          });
        }
      }
    }
  }


  if (club.stadiumAr && CLUB_FREQ.stadiumFreq[club.stadiumAr] === 1) {
    variants.push({
      ar: `أنهي نادي بيلعب على ملعب ${club.stadiumAr}؟`,
      en: `Which club plays at ${club.stadiumEn}?`,
      answerAr: club.nameAr, answerEn: club.nameEn
    });
  }


  if (club.nicknamesAr && club.nicknamesAr.length > 0) {
    const nick = club.nicknamesAr[0];
    if (CLUB_FREQ.nicknameFreq[nick] === 1 && !nickGivesAway) {
      variants.push({
        ar: `أنهي نادي بيتلقب بـ"${nick}"؟`,
        en: `Which club is nicknamed "${club.nicknamesEn[0]}"?`,
        answerAr: club.nameAr, answerEn: club.nameEn
      });
    }
  }


  if (club.colorsAr && club.cityAr && CLUB_FREQ.colorCityFreq[club.colorsAr + "|" + club.cityAr] === 1) {
    variants.push({
      ar: `مين النادي اللي ألوانه الأساسية ${club.colorsAr}، وبيلعب في مدينة ${club.cityAr}، واتأسس سنة ${club.founded}؟`,
      en: `Which club has ${club.colorsEn} as its main colours, is based in ${club.cityEn}, and was founded in ${club.founded}?`,
      answerAr: club.nameAr, answerEn: club.nameEn
    });
  }


  if (club.cityAr && club.stadiumAr) {
    variants.push({
      ar: `مين النادي اللي اتأسس سنة ${club.founded}، وبيلعب في مدينة ${club.cityAr} على ملعب ${club.stadiumAr}؟`,
      en: `Which club was founded in ${club.founded}, is based in ${club.cityEn}, and plays at ${club.stadiumEn}?`,
      answerAr: club.nameAr, answerEn: club.nameEn
    });
  }

  return pickVariant(variants);
}

// ================= أسئلة من ملف الريكوردز والهدافين التاريخيين (records-scorers-data.js) =================
// أربع مصادر فرعية بتتلم في مجموعة واحدة "records": هدافو البطولات (topScorers)، هدافو الأندية التاريخيين
// (clubTopScorers)، هداف كل نسخة بطولة لوحدها (worldCupGoldenBoot/euroGoldenBoot/afconGoldenBoot)، والأرقام
// القياسية العامة (records). بنستبعد أي عنصر إجابته غير مؤكدة أو متنازع عليها بشكل صريح في الملف، عشان السؤال
// يفضل ليه إجابة واحدة نظيفة.

const EXCLUDED_RECORD_IDS = ["fastest-goal-major-league"]; // مذكور صراحة في الملف إنه رقم ضعيف ومنصوح مايتحولش لسؤال مباشر

function buildTopScorerFreqMaps() {
  const goalFreqByComp = {};
  if (typeof topScorers === "undefined") return goalFreqByComp;
  topScorers.forEach(comp => {
    const freq = {};
    comp.scorers.forEach(s => { freq[s.goals] = (freq[s.goals] || 0) + 1; });
    goalFreqByComp[comp.id] = freq;
  });
  return goalFreqByComp;
}

const TOPSCORER_GOAL_FREQ = buildTopScorerFreqMaps();

// أسماء البطولات في topScorers مخزنة كعنوان قايمة كامل زي "هدافو الدوري الإنجليزي الممتاز (كل العصور)"،
// فبنستخرج منها اسم البطولة الصافي (زي "الدوري الإنجليزي الممتاز") عشان السؤال ميطلعش بصيغة متكررة
// زي "الهداف التاريخي لهدافو الدوري...".
function leagueLabel(comp) {
  let ar = comp.competitionAr.replace(/^هدافو\s+/, "");
  const parenIdx = ar.indexOf("(");
  if (parenIdx !== -1) ar = ar.slice(0, parenIdx).trim();
  const en = comp.competitionEn.split(" all-time top scorers")[0].trim();
  return { ar, en };
}

function buildTopScorerQuestion(comp) {
  const variants = [];
  const top = comp.scorers[0];
  const league = leagueLabel(comp);

  variants.push({
    ar: `مين الهداف التاريخي لـ${league.ar}؟`,
    en: `Who is the all-time top scorer of ${league.en}?`,
    answerAr: top.nameAr, answerEn: top.nameEn
  });

  variants.push({
    ar: `كام هدف سجل ${top.nameAr}، الهداف التاريخي لـ${league.ar}؟`,
    en: `How many goals did ${top.nameEn}, the all-time top scorer of ${league.en}, score?`,
    answerAr: `${top.goals} هدف`, answerEn: `${top.goals} goals`
  });

  if (comp.scorers.length >= 2) {
    const second = comp.scorers[1];
    variants.push({
      ar: `مين تاني أكبر هداف في تاريخ ${league.ar}؟`,
      en: `Who is the second-highest all-time scorer of ${league.en}?`,
      answerAr: second.nameAr, answerEn: second.nameEn
    });
  }

  // ترتيب عشوائي تالت أو بعده (لو القائمة فيها لاعبين كفاية)، عشان الأسئلة متفضلش دايمًا على أول واحد وتاني واحد بس
  if (comp.scorers.length >= 3) {
    const nthIdx = 2 + Math.floor(Math.random() * (comp.scorers.length - 2));
    const nth = comp.scorers[nthIdx];
    variants.push({
      ar: `مين هداف ${league.ar} صاحب الترتيب رقم ${nthIdx + 1} تاريخياً؟`,
      en: `Who holds position #${nthIdx + 1} on the all-time scoring list for ${league.en}?`,
      answerAr: nth.nameAr, answerEn: nth.nameEn
    });
  }

  // (بدل سؤال "كام لاعب في القايمة" اللي كانت إجابته بتعتمد على طول قايمة المصدر) سؤال الفرق بين الأول والتاني
  if (comp.scorers.length >= 2) {
    const g1 = parseCleanGoalsNumber(top.goals), g2 = parseCleanGoalsNumber(comp.scorers[1].goals);
    if (g1 !== null && g2 !== null && g1 > g2) {
      variants.push({
        ar: `كام هدف الفرق بين الهداف التاريخي لـ${league.ar} (${top.nameAr}) وتاني أكبر هداف (${comp.scorers[1].nameAr})؟`,
        en: `How many goals separate ${league.en}'s all-time top scorer (${top.nameEn}) from the second-highest scorer (${comp.scorers[1].nameEn})?`,
        answerAr: `${g1 - g2} هدف`, answerEn: `${g1 - g2} goals`
      });
    }
  }

  const idx = Math.floor(Math.random() * comp.scorers.length);
  const s = comp.scorers[idx];

  variants.push({
    ar: `${s.nameAr}، من أهم هدافي ${league.ar}، لعب لأنهي نادي/أندية؟`,
    en: `${s.nameEn}, one of ${league.en}'s top scorers, played for which club(s)?`,
    answerAr: s.clubsAr, answerEn: s.clubsEn
  });

  const goalFreq = TOPSCORER_GOAL_FREQ[comp.id] || {};
  if (goalFreq[s.goals] === 1 && !String(s.goals).includes("+")) {
    variants.push({
      ar: `مين اللاعب اللي سجل ${s.goals} هدف في تاريخ ${league.ar}؟`,
      en: `Which player scored ${s.goals} goals in the history of ${league.en}?`,
      answerAr: s.nameAr, answerEn: s.nameEn
    });
  }

  return pickVariant(variants);
}

// بنستخدم رقم الأهداف بتاع هداف كل نادي بس لو رقم نضيف وثابت (من غير "+")، عشان أرقام اللاعبين النشطين
// التقريبية متتقارنش غلط مع بعضها.
function parseCleanGoalsNumber(str) {
  if (!str || String(str).includes("+")) return null;
  const m = String(str).match(/\d+/);
  return m ? parseInt(m[0], 10) : null;
}

function buildClubTopScorerComparableList() {
  if (typeof clubTopScorers === "undefined") return [];
  return clubTopScorers.filter(e => e.nameAr && e.nameAr !== "غير مؤكد" && parseCleanGoalsNumber(e.goals) !== null);
}

const CLUB_TOPSCORER_COMPARABLE = buildClubTopScorerComparableList();

const CLUB_TOPSCORER_NAME_FREQ = (() => {
  const f = {};
  if (typeof clubTopScorers === "undefined") return f;
  clubTopScorers.forEach(e => { if (e.nameAr) f[e.nameAr] = (f[e.nameAr] || 0) + 1; });
  return f;
})();

function pickOtherClubTopScorer(excludeClubId) {
  const pool = CLUB_TOPSCORER_COMPARABLE.filter(e => e.clubId !== excludeClubId);
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function buildClubTopScorerQuestion(entry) {
  if (!entry.nameAr || entry.nameAr === "غير مؤكد") return null;
  const variants = [];

  variants.push({
    ar: `مين الهداف التاريخي لنادي ${entry.clubAr} في كل المسابقات؟`,
    en: `Who is ${entry.clubEn}'s all-time top scorer across all competitions?`,
    answerAr: entry.nameAr, answerEn: entry.nameEn
  });

  if (CLUB_TOPSCORER_NAME_FREQ[entry.nameAr] === 1) {
    variants.push({
      ar: `أنهي نادي ${entry.nameAr} هو هدافه التاريخي في كل المسابقات؟`,
      en: `Which club's all-time top scorer (across all competitions) is ${entry.nameEn}?`,
      answerAr: entry.clubAr, answerEn: entry.clubEn
    });
  }

  if (entry.goals) {
    variants.push({
      ar: `كام هدف سجل ${entry.nameAr} لنادي ${entry.clubAr} في مسيرته معاه؟`,
      en: `How many goals did ${entry.nameEn} score for ${entry.clubEn} during his time there?`,
      answerAr: `${entry.goals} هدف`, answerEn: `${entry.goals} goals`
    });
  }

  if (entry.years) {
    variants.push({
      ar: `في أنهي سنين لعب ${entry.nameAr} مع ${entry.clubAr}، اللي حقق فيها رقمه كهداف تاريخي للنادي؟`,
      en: `During which years did ${entry.nameEn} play for ${entry.clubEn}, the spell in which he set his all-time club scoring record?`,
      answerAr: entry.years, answerEn: stripParens(entry.years)
    });
  }

  const myGoals = parseCleanGoalsNumber(entry.goals);
  if (myGoals !== null) {
    const rival = pickOtherClubTopScorer(entry.clubId);
    if (rival) {
      const rivalGoals = parseCleanGoalsNumber(rival.goals);
      if (rivalGoals !== null && rivalGoals !== myGoals) {
        const winner = myGoals > rivalGoals ? entry : rival;
        variants.push({
          ar: `مين سجل أهداف أكتر بوصفه الهداف التاريخي لناديه: ${entry.nameAr} مع ${entry.clubAr}، ولا ${rival.nameAr} مع ${rival.clubAr}؟`,
          en: `Who scored more goals as their club's all-time top scorer: ${entry.nameEn} at ${entry.clubEn}, or ${rival.nameEn} at ${rival.clubEn}?`,
          answerAr: `${winner.nameAr} (${winner.clubAr})`, answerEn: `${winner.nameEn} (${winner.clubEn})`
        });
      }
    }
  }

  return pickVariant(variants);
}

// بنحسب لكل بطولة كام مرة كل لاعب كان هدافها في نسخة لوحده (من غير الاشتراك)، عشان لو لاعب فاز بالجايزة
// أكتر من نسخة (زي لوران بوكو أو مبابي) منسألش "في أنهي نسخة كان هداف البطولة؟" بإجابة ملهاش رقم واحد بس.
function buildGoldenBootNameFreq(data) {
  const freq = {};
  if (!data) return freq;
  data.forEach(e => { if (!e.tied) freq[e.nameAr] = (freq[e.nameAr] || 0) + 1; });
  return freq;
}

const WORLD_CUP_GB_FREQ = (typeof worldCupGoldenBoot !== "undefined") ? buildGoldenBootNameFreq(worldCupGoldenBoot) : {};
const EURO_GB_FREQ = (typeof euroGoldenBoot !== "undefined") ? buildGoldenBootNameFreq(euroGoldenBoot) : {};
const AFCON_GB_FREQ = (typeof afconGoldenBoot !== "undefined") ? buildGoldenBootNameFreq(afconGoldenBoot) : {};

const WORLD_CUP_TOURNAMENT = { nameAr: "كأس العالم", nameEn: "the FIFA World Cup", nameFreq: WORLD_CUP_GB_FREQ };
const EURO_TOURNAMENT = { nameAr: "بطولة أمم أوروبا (يورو)", nameEn: "the UEFA European Championship", nameFreq: EURO_GB_FREQ };
const AFCON_TOURNAMENT = { nameAr: "كأس الأمم الأفريقية", nameEn: "the Africa Cup of Nations", nameFreq: AFCON_GB_FREQ };

// اللاعب الوحيد اللي كان هداف البطولة منفردًا أكتر من مرة (لو فيه لاعب واحد بس بأعلى رقم)
function outrightTopScorerMost(tournament) {
  const entries = Object.entries(tournament.nameFreq || {}).sort((a, b) => b[1] - a[1]);
  if (entries.length && entries[0][1] >= 2 && (entries.length === 1 || entries[1][1] < entries[0][1])) return entries[0][0];
  return null;
}

function buildGoldenBootQuestion(entry, tournament) {
  const variants = [];

  if (!entry.tied) {
    variants.push({
      ar: `مين هداف نسخة ${tournament.nameAr} سنة ${entry.year}؟`,
      en: `Who was the top scorer of the ${entry.year} edition of ${tournament.nameEn}?`,
      answerAr: entry.nameAr, answerEn: entry.nameEn
    });

    if (entry.countryAr) {
      variants.push({
        ar: `هداف نسخة ${tournament.nameAr} سنة ${entry.year} كان بيمثل أنهي دولة؟`,
        en: `Which country did the top scorer of the ${entry.year} edition of ${tournament.nameEn} represent?`,
        answerAr: entry.countryAr, answerEn: entry.countryEn
      });
    }

    if (outrightTopScorerMost(tournament) === entry.nameAr) {
      variants.push({
        ar: `مين اللاعب اللي كان هداف ${tournament.nameAr} منفردًا في أكتر عدد من النسخ؟`,
        en: `Which player was the outright top scorer of ${tournament.nameEn} in the most editions?`,
        answerAr: entry.nameAr, answerEn: entry.nameEn
      });
    }

    if (tournament.nameFreq && tournament.nameFreq[entry.nameAr] === 1) {
      variants.push({
        ar: `${entry.nameAr} كان هداف نسخة كام من نسخ ${tournament.nameAr}؟`,
        en: `In which edition (year) of ${tournament.nameEn} was ${entry.nameEn} the outright top scorer?`,
        answerAr: String(entry.year), answerEn: String(entry.year)
      });
    }
  } else {
    variants.push({
      ar: `مين اللاعبين اللي اشتركوا في صدارة هدافي نسخة ${tournament.nameAr} سنة ${entry.year} بـ${entry.goals} هدف؟`,
      en: `Which players shared the top scorer award for the ${entry.year} edition of ${tournament.nameEn} with ${entry.goals} goals each?`,
      answerAr: entry.nameAr, answerEn: entry.nameEn
    });

    if (entry.tiedScorers && entry.tiedScorers.length > 0) {
      variants.push({
        ar: `كام لاعب اشترك في صدارة هدافي نسخة ${tournament.nameAr} سنة ${entry.year}؟`,
        en: `How many players shared the top scorer award for the ${entry.year} edition of ${tournament.nameEn}?`,
        answerAr: String(entry.tiedScorers.length), answerEn: String(entry.tiedScorers.length)
      });
    }
  }

  if (!entry.tied) variants.push({
    ar: `كام هدف سجل هداف نسخة ${tournament.nameAr} سنة ${entry.year}؟${entry.tied ? " (الرقم ده مشترك بين أكتر من لاعب)" : ""}`,
    en: `How many goals did the top scorer of the ${entry.year} edition of ${tournament.nameEn} score?${entry.tied ? " (a tally shared by several players)" : ""}`,
    answerAr: `${entry.goals} هدف`, answerEn: `${entry.goals} goals`
  });

  return pickVariant(variants);
}

function buildRecordFactQuestion(rec) {
  const variants = [
    {
      ar: `مين صاحب الرقم القياسي: "${rec.categoryAr}"؟`,
      en: `Who holds the record for: "${rec.categoryEn}"?`,
      answerAr: rec.holderAr, answerEn: rec.holderEn
    },
    {
      ar: `إيه الرقم القياسي في "${rec.categoryAr}"؟`,
      en: `What is the record figure for: "${rec.categoryEn}"?`,
      answerAr: rec.valueAr, answerEn: rec.valueEn
    }
  ];
  return pickVariant(variants);
}

// بنبني مجموعة واحدة من عناصر متنوعة الشكل (topscorer / clubtopscorer / goldenboot / record)، بعد استبعاد
// أي عنصر إجابته مش واضحة، وبنخلطها مع بعض عشان أسئلة الريكوردز متبقاش دايمًا من نفس النوع الفرعي.
function buildRecordsPool() {
  const pool = [];

  if (typeof topScorers !== "undefined") {
    topScorers.forEach(comp => pool.push({ type: "topscorer", data: comp }));
  }

  if (typeof clubTopScorers !== "undefined") {
    clubTopScorers.forEach(entry => {
      if (entry.nameAr && entry.nameAr !== "غير مؤكد") pool.push({ type: "clubtopscorer", data: entry });
    });
  }

  if (typeof worldCupGoldenBoot !== "undefined") {
    worldCupGoldenBoot.forEach(entry => pool.push({ type: "goldenboot", data: entry, tournament: WORLD_CUP_TOURNAMENT }));
  }
  if (typeof euroGoldenBoot !== "undefined") {
    euroGoldenBoot.forEach(entry => pool.push({ type: "goldenboot", data: entry, tournament: EURO_TOURNAMENT }));
  }
  if (typeof afconGoldenBoot !== "undefined") {
    afconGoldenBoot.forEach(entry => pool.push({ type: "goldenboot", data: entry, tournament: AFCON_TOURNAMENT }));
  }

  if (typeof records !== "undefined") {
    records.forEach(rec => {
      if (!EXCLUDED_RECORD_IDS.includes(rec.id) && rec.holderAr && !rec.holderAr.includes("غير مؤكد")) {
        pool.push({ type: "record", data: rec });
      }
    });
  }

  return pool;
}

function buildRecordsAreaQuestion(item) {
  if (item.type === "topscorer") return buildTopScorerQuestion(item.data);
  if (item.type === "clubtopscorer") return buildClubTopScorerQuestion(item.data);
  if (item.type === "goldenboot") return buildGoldenBootQuestion(item.data, item.tournament);
  if (item.type === "record") return buildRecordFactQuestion(item.data);
  return null;
}

// بنبني مفتاح فريد لكل عنصر في المجمّع (حسب "الموضوع" مش السؤال نفسه، لأن كل عنصر بيولّد سؤال
// عشوائي من كذا variant)، عشان نقدر نمنع نفس اللاعب/النادي/البطولة/الريكورد إنه يتسأل عنه تاني
// في نفس الماتش (المفروض يبقى عبر كل الأدوار والراوندات لحد ما الماتش يخلص أو الداتا تخلص).
function poolEntryKey(entry) {
  if (entry.type === "player") return "player:" + entry.data.id;
  if (entry.type === "competition") return "competition:" + entry.data.id;
  if (entry.type === "club") return "club:" + entry.data.id;
  if (entry.type === "records") {
    const r = entry.data;
    if (r.type === "topscorer") return "topscorer:" + r.data.id;
    if (r.type === "clubtopscorer") return "clubtopscorer:" + (r.data.clubId || r.data.clubAr);
    if (r.type === "goldenboot") return "goldenboot:" + r.tournament.nameEn + ":" + r.data.year;
    if (r.type === "record") return "record:" + r.data.id;
  }
  return null;
}

// نسبة أسئلة اللاعيبة في كل دور (٠.٤ = ٤٠٪). الباقي (٦٠٪) بيتسحب راندوم من الأندية والبطولات والريكوردز.
// غيّر الرقم ده لو عايز نسبة تانية.
const BANK_PLAYER_SHARE = 0.4;

function generateTurnQuestions(usedKeys) {
  const hasCompetitions = typeof competitions !== "undefined" && competitions.length > 0;
  const hasClubs = typeof clubs !== "undefined" && clubs.length > 0;
  const recordsPool = buildRecordsPool();

  // مجموعتين: اللاعيبة لوحدهم، وكل المصادر التانية (أندية + بطولات + ريكوردز) مع بعض راندوم
  let playerPool = bankSources.includes("player") ? players.map(p => ({ type: "player", data: p })) : [];
  let otherPool = [];
  if (hasCompetitions && bankSources.includes("competition")) otherPool = otherPool.concat(competitions.map(c => ({ type: "competition", data: c })));
  if (hasClubs && bankSources.includes("club")) otherPool = otherPool.concat(clubs.map(c => ({ type: "club", data: c })));
  if (recordsPool.length > 0 && bankSources.includes("records")) otherPool = otherPool.concat(recordsPool.map(r => ({ type: "records", data: r })));

  // أمان: لو الاختيار طلع فاضي لأي سبب (بيانات ناقصة مثلًا) بنرجع للاعيبة بدل ما الدور يطلع من غير أسئلة
  if (playerPool.length === 0 && otherPool.length === 0) playerPool = players.map(p => ({ type: "player", data: p }));

  // الأول اللي لسه ما اتسألش عنه في الماتش ده، ولو خلصوا بنكمل من اللي اتسأل قبل كده (بدل ما نوقّف اللعبة)
  const makeQueue = group => shuffle(group.filter(e => !usedKeys.has(poolEntryKey(e)))).concat(shuffle(group));
  const queues = { player: makeQueue(playerPool), other: makeQueue(otherPool) };
  const cursor = { player: 0, other: 0 };

  const n = bankQuestionsPerTurnSetting;
  // لو مفيش مصادر تانية خالص، كل الأسئلة لاعيبة (والعكس)
  const playerSlots = otherPool.length === 0 ? n : (playerPool.length === 0 ? 0 : Math.round(n * BANK_PLAYER_SHARE));
  // ترتيب الخانات متخلّط، عشان اللاعيبة ماتجيش ورا بعض في أول الدور ولا آخره
  const slots = shuffle(Array.from({ length: n }, (_, i) => (i < playerSlots ? "player" : "other")));

  const items = [];
  const usedThisTurn = new Set();

  function drawFrom(kind) {
    const queue = queues[kind];
    while (cursor[kind] < queue.length) {
      const entry = queue[cursor[kind]++];
      const key = poolEntryKey(entry);
      if (key && usedThisTurn.has(key)) continue; // منع تكرار نفس الموضوع مرتين في نفس الدور
      let q = null;
      if (entry.type === "player") q = buildBankQuestion(entry.data);
      else if (entry.type === "competition") q = buildCompetitionQuestion(entry.data);
      else if (entry.type === "club") q = buildClubQuestion(entry.data);
      else if (entry.type === "records") q = buildRecordsAreaQuestion(entry.data);
      if (!q) continue; // سؤال اتصفّى (متسرّب/غير مؤكد) — نكمل على اللي بعده
      if (key) { usedKeys.add(key); usedThisTurn.add(key); }
      return q;
    }
    return null;
  }

  slots.forEach(kind => {
    // لو المجموعة المطلوبة خلصت، بنسحب من التانية بدل ما الدور يطلع ناقص
    const q = drawFrom(kind) || drawFrom(kind === "player" ? "other" : "player");
    if (q) items.push(q);
  });
  return items;
}

function bankReadSettingsFromInputs() {
  // إعدادات الوقت وعدد الأسئلة قابلة للتعديل من شاشة البداية؛ لو الحكم سابهم فاضيين أو دخل رقم
  // برّه النطاق المعقول، بنرجع للدیفولت بهدوء من غير ما نوقّف بدء الماتش.
  const timeInput = parseInt(((document.getElementById("bankTimeLimitInput") || {}).value || ""), 10);
  bankTimeLimitSetting = (!isNaN(timeInput) && timeInput >= MIN_TIME_LIMIT_SECONDS && timeInput <= MAX_TIME_LIMIT_SECONDS)
    ? timeInput : DEFAULT_TURN_TIME_LIMIT_SECONDS;

  const qCountInput = parseInt(((document.getElementById("bankQCountInput") || {}).value || ""), 10);
  bankQuestionsPerTurnSetting = (!isNaN(qCountInput) && qCountInput >= MIN_QUESTIONS_PER_TURN && qCountInput <= MAX_QUESTIONS_PER_TURN)
    ? qCountInput : DEFAULT_QUESTIONS_PER_TURN;
}

function buildRoundRobinFixtures(n) {
  const fixtures = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) fixtures.push([i, j]);
  }
  return shuffle(fixtures);
}

function startMatch() {
  bankSnapshotInputs();
  if (bankTournamentMode === "league") {
    startLeague();
    return;
  }

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
  bankReadSettingsFromInputs();
  bankSaveSettings();

  matchState = {
    p1Name: p1n, p2Name: p2n,
    p1Wins: 0, p2Wins: 0,
    round: 1,
    roundHistory: [],
    usedQuestionKeys: new Set() // بيتراكم عليه كل موضوع اتسأل عنه في الماتش ده، عشان الأسئلة متتكررش
  };
  startTurn("p1");
}

// وضع الدوري: ٣ أو ٤ فرق، كل فريق بيلاقي التاني مرة واحدة (round-robin)، وكل مباراة بتشتغل
// بنفس محرك الماتش العادي (أدوار، بانك، تايمر...) لحد ما تتحسم، وبعدين ننتقل تلقائي للمباراة الجاية.
function startLeague() {
  const n = bankLeagueTeamCount;
  const names = [];
  for (let i = 0; i < n; i++) {
    names.push(((document.getElementById("bankLeagueTeamInput" + i) || {}).value || "").trim());
  }
  if (names.some(nm => !nm)) {
    bankSetupError = true;
    render();
    return;
  }
  bankSetupError = false;
  bankReadSettingsFromInputs();
  bankSaveSettings();

  leagueState = {
    teams: names,
    fixtures: buildRoundRobinFixtures(n),
    fixtureIndex: 0,
    standings: names.map(nm => ({ name: nm, wins: 0, losses: 0 })),
    usedQuestionKeys: new Set() // مشترك بين كل مباريات الدوري، عشان الأسئلة متتكررش عبر الدوري كله
  };
  bankStartLeagueFixture();
}

function bankStartLeagueFixture() {
  const [i, j] = leagueState.fixtures[leagueState.fixtureIndex];
  matchState = {
    p1Name: leagueState.teams[i],
    p2Name: leagueState.teams[j],
    p1Wins: 0, p2Wins: 0,
    round: 1,
    roundHistory: []
  };
  startTurn("p1");
}

function bankLeagueAdvance() {
  if (!leagueState || !matchState) return;
  const winnerName = matchState.p1Wins > matchState.p2Wins ? matchState.p1Name : matchState.p2Name;
  const loserName = winnerName === matchState.p1Name ? matchState.p2Name : matchState.p1Name;
  const winnerEntry = leagueState.standings.find(s => s.name === winnerName);
  const loserEntry = leagueState.standings.find(s => s.name === loserName);
  if (winnerEntry) winnerEntry.wins += 1;
  if (loserEntry) loserEntry.losses += 1;

  leagueState.fixtureIndex += 1;
  if (leagueState.fixtureIndex >= leagueState.fixtures.length) {
    matchState = null;
    turnState = null;
    bankView = "leagueend";
    render();
    return;
  }
  bankStartLeagueFixture();
}

function startTurn(contestantKey) {
  bankClearTimer();
  const usedKeys = (bankTournamentMode === "league" && leagueState)
    ? leagueState.usedQuestionKeys
    : matchState.usedQuestionKeys;
  turnState = {
    contestant: contestantKey,
    questions: generateTurnQuestions(usedKeys),
    qIndex: 0,
    answered: false,
    atRisk: 0,
    banked: 0,
    answerRevealed: false,
    timeLeft: bankTimeLimitSetting,
    timerRunning: false,
    timeUp: false,
    // إحصائيات الدور (بتتجمّع في ملخص آخر الماتش)
    log: [], streak: 0, bestStreak: 0, maxRisk: 0, lost: 0, archived: false
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
  turnState.log.push({ q: turnState.questions[turnState.qIndex], result: "correct" });
  turnState.streak += 1;
  turnState.bestStreak = Math.max(turnState.bestStreak, turnState.streak);
  turnState.maxRisk = Math.max(turnState.maxRisk, turnState.atRisk);
  bankPlayCorrect();
  render();
}

function bankMarkWrong() {
  if (!turnState || turnState.answered) return;
  turnState.answered = true;
  turnState.lost += turnState.atRisk; // النقط اللي كانت برا البنك وضاعت بالغلطة
  turnState.log.push({ q: turnState.questions[turnState.qIndex], result: "wrong" });
  turnState.streak = 0;
  turnState.atRisk = 0;
  bankPlayWrong();
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
    bankClearTimer();
    bankArchiveTurn();
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

// الحكم هو اللي بيدوس يبدأ العد التنازلي لما يحس إن الدور بدأ فعليًا (مش أوتوماتيك مع startTurn).
function bankStartTimer() {
  if (!turnState || turnState.timerRunning || turnState.timeUp) return;
  turnState.timerRunning = true;
  render();
  bankTimerHandle = setInterval(() => {
    if (!turnState) { bankClearTimer(); return; }
    turnState.timeLeft -= 1;
    if (turnState.timeLeft <= 0) {
      turnState.timeLeft = 0;
      turnState.timerRunning = false;
      turnState.timeUp = true;
      bankClearTimer();
      bankPlayBuzzer();
    } else if (turnState.timeLeft <= 10) {
      bankPlayTick();
    }
    render();
  }, 1000);
}

// الزرار ده بيظهر بس بعد ما الوقت يخلص، والحكم هو اللي يقرر يدوس عليه يقفل الدور وينقل للفريق التاني،
// أو يسيب الدور مستمر لو حابب (الأسئلة والبانك بيفضلوا شغالين عادي حتى لو الوقت خلص).
function bankForceEndTurn() {
  if (!turnState || !turnState.timeUp) return;
  bankClearTimer();
  bankArchiveTurn();
  const finalScore = turnState.banked;
  if (turnState.contestant === "p1") {
    matchState.p1Score = finalScore;
    bankView = "turnend";
    render();
  } else {
    matchState.p2Score = finalScore;
    finishRound();
  }
}

function bankStartP2Turn() { startTurn("p2"); }

function bankBlankStats() { return { correct: 0, wrong: 0, bestStreak: 0, maxRisk: 0, lost: 0, banked: 0 }; }

// بيحط إحصائيات الدور اللي خلص في إحصائيات الماتش (مرة واحدة بس لكل دور)
function bankArchiveTurn() {
  if (!turnState || !matchState || turnState.archived) return;
  turnState.archived = true;
  const key = turnState.contestant;
  if (!matchState.stats) matchState.stats = { p1: bankBlankStats(), p2: bankBlankStats() };
  if (!matchState.review) matchState.review = [];
  const st = matchState.stats[key];
  turnState.log.forEach(e => {
    if (e.result === "correct") st.correct += 1; else st.wrong += 1;
    matchState.review.push({ round: matchState.round, who: key, ar: e.q.ar, en: e.q.en,
      answerAr: e.q.answerAr, answerEn: e.q.answerEn, result: e.result });
  });
  st.bestStreak = Math.max(st.bestStreak, turnState.bestStreak);
  st.maxRisk = Math.max(st.maxRisk, turnState.maxRisk);
  st.lost += turnState.lost;
  st.banked += turnState.banked;
}

function bankStatsHtml() {
  const st = matchState && matchState.stats;
  if (!st) return "";
  const ar = lang === "ar";
  const acc = s => { const n = s.correct + s.wrong; return n ? Math.round(100 * s.correct / n) : null; };
  // dir: "high" = الأعلى أحسن، "low" = الأقل أحسن
  const rows = [
    { label: ar ? "إجابات صح ✅" : "Correct ✅", a: st.p1.correct, b: st.p2.correct, dir: "high" },
    { label: ar ? "إجابات غلط ❌" : "Wrong ❌", a: st.p1.wrong, b: st.p2.wrong, dir: "low" },
    { label: ar ? "الدقة" : "Accuracy", a: acc(st.p1), b: acc(st.p2), dir: "high", fmt: v => (v === null ? "—" : v + "%") },
    { label: ar ? "أطول سلسلة صح 🔥" : "Longest streak 🔥", a: st.p1.bestStreak, b: st.p2.bestStreak, dir: "high" },
    { label: ar ? "أعلى نقط برا البنك" : "Biggest unbanked pile", a: st.p1.maxRisk, b: st.p2.maxRisk, dir: "high" },
    { label: ar ? "نقط ضاعت بغلطة 💥" : "Points lost to a miss 💥", a: st.p1.lost, b: st.p2.lost, dir: "low" },
    { label: ar ? "إجمالي اللي اتبنّك 🏦" : "Total banked 🏦", a: st.p1.banked, b: st.p2.banked, dir: "high" }
  ];
  const cell = (v, other, dir, fmt) => {
    const better = v !== null && other !== null && v !== other && (dir === "high" ? v > other : v < other);
    return `<td class="${better ? "better" : ""}">${fmt ? fmt(v) : v}</td>`;
  };
  const body = rows.map(r => `<tr>${cell(r.a, r.b, r.dir, r.fmt)}<th>${esc(r.label)}</th>${cell(r.b, r.a, r.dir, r.fmt)}</tr>`).join("");

  const review = (matchState.review || []).map(e => {
    const who = e.who === "p1" ? matchState.p1Name : matchState.p2Name;
    return `<div class="review-item ${e.result}">
      <div class="review-meta">${e.result === "correct" ? "✅" : "❌"} ${esc(t().bankRoundLabel)} ${e.round} · ${esc(who)}</div>
      <div>${esc(ar ? e.ar : e.en)}</div>
      <div class="review-ans">${esc(ar ? e.answerAr : e.answerEn)}</div>
    </div>`;
  }).join("");

  return `
      <h3 style="margin-top:1.2rem;">${ar ? "ملخص الماتش" : "Match summary"}</h3>
      <table class="stats-table">
        <thead><tr><th>${esc(matchState.p1Name)}</th><th></th><th>${esc(matchState.p2Name)}</th></tr></thead>
        <tbody>${body}</tbody>
      </table>
      ${review ? `<details class="review">
        <summary>📋 ${ar ? `مراجعة الأسئلة (${matchState.review.length})` : `Review questions (${matchState.review.length})`}</summary>
        <div class="review-list">${review}</div>
      </details>` : ""}`;
}


function finishRound() {
  const { p1Score, p2Score } = matchState;
  let winner = null;
  if (p1Score > p2Score) { matchState.p1Wins++; winner = "p1"; }
  else if (p2Score > p1Score) { matchState.p2Wins++; winner = "p2"; }
  matchState.roundHistory.push({ round: matchState.round, p1Score, p2Score, winner });



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

function bankTopbar() {
  return `
    <div class="topbar">
      <button class="backbtn" onclick="goCategory()">${lang === "ar" ? "→" : "←"} ${esc(t().back)}</button>
      <button class="langbtn" onclick="bankToggleMute()">${bankMuted ? "🔇" : "🔊"}</button>
      <button class="langbtn" onclick="toggleLang()">🌐 ${esc(t().langBtn)}</button>
    </div>`;
}

function bankMatchTracker() {
  if (!matchState) return "";
  const leagueNote = (bankTournamentMode === "league" && leagueState)
    ? `<div class="small-note" style="text-align:center; margin-top:0.3rem;">${lang === "ar"
        ? `مباراة ${leagueState.fixtureIndex + 1} من ${leagueState.fixtures.length} (الدوري)`
        : `Match ${leagueState.fixtureIndex + 1} of ${leagueState.fixtures.length} (league)`}</div>`
    : "";
  return `
    <div class="match-tracker">
      <span>${esc(t().bankRoundLabel)} ${matchState.round}</span>
      <span class="mt-score">${esc(matchState.p1Name)} <b>${matchState.p1Wins}</b> : <b>${matchState.p2Wins}</b> ${esc(matchState.p2Name)}</span>
    </div>
    ${leagueNote}`;
}

function bankSourceChipsHtml() {
  const labels = {
    player:      { ar: "👤 لاعيبة", en: "👤 Players" },
    club:        { ar: "🏟️ أندية", en: "🏟️ Clubs" },
    competition: { ar: "🏆 بطولات", en: "🏆 Competitions" },
    records:     { ar: "📊 ريكوردز وهدافين", en: "📊 Records & scorers" }
  };
  const chips = BANK_SOURCE_TYPES.map(k =>
    `<button class="chip ${bankSources.includes(k) ? "on" : ""}" onclick="toggleBankSource('${k}')">${esc(labels[k][lang])}</button>`).join("");
  const all = bankSources.length === BANK_SOURCE_TYPES.length;
  const hasPlayers = bankSources.includes("player");
  const pct = Math.round(BANK_PLAYER_SHARE * 100);
  let note;
  if (all) note = lang === "ar" ? `الديفولت: كل الأنواع مع بعض — حوالي ${pct}٪ لاعيبة والباقي راندوم.` : `Default: all types mixed — about ${pct}% players, the rest random.`;
  else if (bankSources.length === 1) note = lang === "ar" ? "كل الأسئلة هتبقى من النوع ده بس." : "Every question will come from this type only.";
  else if (hasPlayers) note = lang === "ar" ? `حوالي ${pct}٪ لاعيبة والباقي راندوم من الأنواع التانية المختارة.` : `About ${pct}% players, the rest random from the other selected types.`;
  else note = lang === "ar" ? "الأسئلة راندوم من الأنواع المختارة." : "Questions are random from the selected types.";
  return `
      <div style="margin-top:1.1rem;">
        <label class="small-note">${lang === "ar" ? "نوع الأسئلة (اختار نوع أو أكتر)" : "Question types (pick one or more)"}</label>
        <div class="chip-row" style="margin:0.4rem 0 0.2rem;">${chips}</div>
        <p class="small-note" style="margin-top:0.2rem;">${esc(note)}</p>
      </div>`;
}

function renderBankSetup() {
  const isLeague = bankTournamentMode === "league";
  const isTeam = bankMode === "team";
  const namesFieldsHtml = isTeam ? `
      <div class="type-row" style="flex-direction:column;">
        <label class="small-note">${esc(t().bankTeam1Label)}</label>
        <input type="text" id="bankT1M1Input" value="${esc(bankDraft.t1m1)}" placeholder="${esc(t().bankMember1Ph)}" style="margin-bottom:0.5rem;">
        <input type="text" id="bankT1M2Input" value="${esc(bankDraft.t1m2)}" placeholder="${esc(t().bankMember2Ph)}">
      </div>
      <div class="type-row" style="flex-direction:column; margin-top:1rem;">
        <label class="small-note">${esc(t().bankTeam2Label)}</label>
        <input type="text" id="bankT2M1Input" value="${esc(bankDraft.t2m1)}" placeholder="${esc(t().bankMember1Ph)}" style="margin-bottom:0.5rem;">
        <input type="text" id="bankT2M2Input" value="${esc(bankDraft.t2m2)}" placeholder="${esc(t().bankMember2Ph)}">
      </div>` : `
      <div class="type-row" style="flex-direction:column;">
        <label class="small-note" for="bankP1Input">${esc(t().bankP1Label)}</label>
        <input type="text" id="bankP1Input" value="${esc(bankDraft.p1)}" placeholder="${esc(t().bankNamePh1)}">
      </div>
      <div class="type-row" style="flex-direction:column; margin-top:1rem;">
        <label class="small-note" for="bankP2Input">${esc(t().bankP2Label)}</label>
        <input type="text" id="bankP2Input" value="${esc(bankDraft.p2)}" placeholder="${esc(t().bankNamePh2)}">
      </div>`;

  const singleModeFieldsHtml = `
      <label class="small-note">${esc(t().bankModeLabel)}</label>
      <div class="bank-actions" style="grid-template-columns:1fr 1fr; margin-top:0.4rem;">
        <button class="pill-btn ${isTeam ? "pill-outline" : "pill-gold"}" onclick="setBankMode('individual')">${esc(t().bankModeIndividual)}</button>
        <button class="pill-btn ${isTeam ? "pill-gold" : "pill-outline"}" onclick="setBankMode('team')">${esc(t().bankModeTeam)}</button>
      </div>
      <div style="margin-top:1.1rem;">${namesFieldsHtml}</div>`;

  const leagueTeamInputsHtml = Array.from({ length: bankLeagueTeamCount }, (_, i) => `
      <div class="type-row" style="flex-direction:column; margin-top:${i === 0 ? "1.1rem" : "0.7rem"};">
        <label class="small-note">${lang === "ar" ? `اسم الفريق ${i + 1}` : `Team ${i + 1} name`}</label>
        <input type="text" id="bankLeagueTeamInput${i}" value="${esc(bankDraft.league[i])}" placeholder="${lang === "ar" ? `الفريق ${i + 1}` : `Team ${i + 1}`}">
      </div>`).join("");

  const leagueModeFieldsHtml = `
      <label class="small-note">${lang === "ar" ? "عدد الفرق" : "Number of teams"}</label>
      <div class="bank-actions" style="grid-template-columns:1fr 1fr; margin-top:0.4rem;">
        <button class="pill-btn ${bankLeagueTeamCount === 3 ? "pill-gold" : "pill-outline"}" onclick="setBankLeagueTeamCount(3)">${lang === "ar" ? "3 فرق" : "3 teams"}</button>
        <button class="pill-btn ${bankLeagueTeamCount === 4 ? "pill-gold" : "pill-outline"}" onclick="setBankLeagueTeamCount(4)">${lang === "ar" ? "4 فرق" : "4 teams"}</button>
      </div>
      ${leagueTeamInputsHtml}`;

  return `
    ${bankTopbar()}
    <h2>${esc(t().bankSetupTitle)}</h2>
    <p>${esc(t().bankSetupDesc)}</p>
    <div class="quiz-card">
      <label class="small-note">${lang === "ar" ? "نوع اللعب" : "Play type"}</label>
      <div class="bank-actions" style="grid-template-columns:1fr 1fr; margin-top:0.4rem;">
        <button class="pill-btn ${isLeague ? "pill-outline" : "pill-gold"}" onclick="setBankTournamentMode('single')">${lang === "ar" ? "ماتش فردي" : "Single match"}</button>
        <button class="pill-btn ${isLeague ? "pill-gold" : "pill-outline"}" onclick="setBankTournamentMode('league')">${lang === "ar" ? "دوري بين الفرق" : "Mini-league"}</button>
      </div>
      <div style="margin-top:1.1rem;">${isLeague ? leagueModeFieldsHtml : singleModeFieldsHtml}</div>

      ${bankSourceChipsHtml()}

      <div class="type-row" style="flex-direction:column; margin-top:1.1rem;">
        <label class="small-note" for="bankTimeLimitInput">${lang === "ar" ? "مدة كل دور (بالثانية)" : "Time per turn (seconds)"}</label>
        <input type="number" id="bankTimeLimitInput" min="${MIN_TIME_LIMIT_SECONDS}" max="${MAX_TIME_LIMIT_SECONDS}" value="${esc(bankDraft.time)}">
      </div>
      <div class="type-row" style="flex-direction:column; margin-top:1rem;">
        <label class="small-note" for="bankQCountInput">${lang === "ar" ? "عدد الأسئلة في كل دور" : "Questions per turn"}</label>
        <input type="number" id="bankQCountInput" min="${MIN_QUESTIONS_PER_TURN}" max="${MAX_QUESTIONS_PER_TURN}" value="${esc(bankDraft.q)}">
      </div>

      ${bankSetupError ? `<div class="feedback bad" style="margin-top:0.9rem;">${esc(t().bankNeedNames)}</div>` : ""}
      <div class="footer-actions">
        <button class="pill-btn pill-gold" onclick="startMatch()">${isLeague ? (lang === "ar" ? "ابدأ الدوري" : "Start league") : esc(t().bankStartBtn)}</button>
      </div>
      ${bankHasSaved() ? `<p class="small-note" style="text-align:center; margin-top:0.8rem;"><a href="#" onclick="bankClearSaved(); return false;" style="color:inherit;">🗑 ${lang === "ar" ? "مسح الأسماء والإعدادات المحفوظة" : "Clear saved names & settings"}</a></p>` : ""}
    </div>`;
}

function bankTimerBox(s) {
  const mins = Math.floor(s.timeLeft / 60);
  const secs = s.timeLeft % 60;
  const timeStr = `${mins}:${secs < 10 ? "0" : ""}${secs}`;

  let colorStyle = "";
  if (s.timeUp || s.timeLeft <= 10) colorStyle = "color:#e33;";
  else if (s.timeLeft <= 30) colorStyle = "color:#e0a020;";

  let controlHtml = "";
  if (s.timeUp) {
    controlHtml = `<button class="pill-btn pill-red" onclick="bankForceEndTurn()">${lang === "ar" ? "⏹ قفل الدور والانتقال للفريق التاني" : "⏹ End turn & switch team"}</button>`;
  } else if (!s.timerRunning) {
    controlHtml = `<button class="pill-btn pill-gold" onclick="bankStartTimer()">${lang === "ar" ? `▶ ابدأ الوقت (${bankTimeLimitSetting} ثانية)` : `▶ Start timer (${bankTimeLimitSetting}s)`}</button>`;
  }

  return `
    <div class="quiz-card" style="text-align:center; margin-bottom:1rem;">
      <div class="score-label">${lang === "ar" ? "الوقت المتبقي" : "Time left"}</div>
      <div class="score-val" style="font-size:1.8rem; ${colorStyle}">${timeStr}</div>
      ${controlHtml ? `<div class="footer-actions" style="margin-top:0.6rem;">${controlHtml}</div>` : ""}
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

    ${bankTimerBox(s)}

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
      <div class="footer-actions" style="margin-top:0; margin-bottom:1.1rem;">
        <button class="pill-btn pill-bank" ${s.atRisk === 0 ? "disabled" : ""} onclick="bankDoBank()">${esc(t().bankBankBtn)}</button>
      </div>

      <p style="font-size:1.1rem;">${esc(lang === "ar" ? q.ar : q.en)}</p>
      <div class="hint-card ${s.answerRevealed ? "open" : ""}" onclick="bankToggleAnswer()">
        <div class="hint-head"><span>${esc(s.answerRevealed ? t().bankHideAnswer : t().bankShowAnswer)}</span><span class="hint-arrow">▾</span></div>
        <div class="hint-body">${esc(lang === "ar" ? q.answerAr : q.answerEn)}</div>
      </div>

      <div class="bank-actions" style="grid-template-columns:1fr 1fr;">
        <button class="pill-btn pill-green" ${s.answered ? "disabled" : ""} onclick="bankMarkCorrect()">${esc(t().bankCorrectBtn)}</button>
        <button class="pill-btn pill-red" ${s.answered ? "disabled" : ""} onclick="bankMarkWrong()">${esc(t().bankWrongBtn)}</button>
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

  const isLeague = bankTournamentMode === "league" && leagueState;
  const footerBtnHtml = isLeague
    ? `<button class="pill-btn pill-gold" onclick="bankLeagueAdvance()">${lang === "ar" ? "المباراة الجاية ⏭" : "Next match ⏭"}</button>`
    : `<button class="pill-btn pill-gold" onclick="bankNewMatch()">${esc(t().bankNewMatchBtn)}</button>`;

  return `
    ${bankTopbar()}
    <div class="quiz-card" style="text-align:center;">
      <h2>${esc(t().bankChampion)}: ${esc(championName)} 🏆</h2>
      <p class="reveal-name">${esc(matchState.p1Name)} ${matchState.p1Wins} - ${matchState.p2Wins} ${esc(matchState.p2Name)}</p>
      <div class="hints-list" style="margin-top:1.1rem;">${historyHtml}</div>
      ${bankStatsHtml()}
      <div class="footer-actions">
        ${footerBtnHtml}
      </div>
    </div>`;
}

function renderBankLeagueEnd() {
  const sorted = leagueState.standings.slice().sort((a, b) => b.wins - a.wins);
  const championName = sorted[0].name;
  const rowsHtml = sorted.map((s, i) => `
    <div class="hint-line">
      <span class="hl-label">${i + 1}. ${esc(s.name)}${i === 0 ? " 🏆" : ""}</span>
      <span class="hl-value">${lang === "ar" ? `${s.wins} فوز - ${s.losses} خسارة` : `${s.wins}W - ${s.losses}L`}</span>
    </div>`).join("");

  return `
    ${bankTopbar()}
    <div class="quiz-card" style="text-align:center;">
      <h2>${lang === "ar" ? "بطل الدوري" : "League champion"}: ${esc(championName)} 🏆</h2>
      <div class="hints-list" style="margin-top:1.1rem;">${rowsHtml}</div>
      <div class="footer-actions">
        <button class="pill-btn pill-gold" onclick="bankNewMatch()">${lang === "ar" ? "دوري جديد" : "New league"}</button>
      </div>
    </div>`;
}

function renderBank() {
  if (bankView === "setup") return renderBankSetup();
  if (bankView === "turn") return renderBankTurn();
  if (bankView === "turnend") return renderBankTurnEnd();
  if (bankView === "roundresult") return renderBankRoundResult();
  if (bankView === "matchend") return renderBankMatchEnd();
  if (bankView === "leagueend") return renderBankLeagueEnd();
  return "";
}
