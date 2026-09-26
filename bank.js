let matchState = null;
let turnState = null;
let bankView = "setup";
let bankSetupError = false;
let bankMode = "individual";

const QUESTIONS_PER_TURN = 12;
const BASE_ROUNDS = 4;

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

function buildFrequencyMaps() {
  const comboFreq = {};
  players.forEach(p => {
    const achKey = achievementCombo(p.achievementsAr);
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
    const names = [...(p.clubsHistoryAr || [])];
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
  const achAr = achievementCombo(p.achievementsAr, "، و");
  const achEn = achievementCombo(p.achievementsEn, "; and ");
  const hasClub = isRealClub(p.clubAr) && isRealClub(p.clubEn);


  const vague = !hasMultipleAch && isVagueAchievement(p.achievementsAr[0], p.achievementsEn[0]);
  const variants = [];


  if (!vague) {

    variants.push({
      ar: `مين اللاعب اللي جنسيته ${p.nationalityAr} ولعب في مركز ${p.position.ar}، ومن أهم إنجازاته: ${achAr}؟`,
      en: `Which player is ${p.nationalityEn}, played as a ${p.position.en}, and whose achievements include: ${achEn}?`
    });


    if (!BANK_FREQ.comboFreq[achAr + "|" + p.era] || BANK_FREQ.comboFreq[achAr + "|" + p.era] === 1) {
      variants.push({
        ar: `مين اللاعب اللي فترة نشاطه ${p.era}، ومن أهم إنجازاته: ${achAr}؟`,
        en: `Which player was active during ${p.era} and whose achievements include: ${achEn}?`
      });
    }


    if (hasClub) {
      variants.push({
        ar: `مين اللاعب اللي ${p.active ? "بيلعب حاليًا لنادي" : "آخر ناديه كان"} ${p.clubAr}، ومن أهم إنجازاته: ${achAr}؟`,
        en: `Which player ${p.active ? "currently plays for" : "last played for"} ${p.clubEn}, and whose achievements include: ${achEn}?`
      });
    }


    if (p.clubsHistoryAr.length > 0) {
      const idx = Math.floor(Math.random() * p.clubsHistoryAr.length);
      variants.push({
        ar: `مين اللاعب اللي لعب لنادي ${p.clubsHistoryAr[idx]} في مسيرته، ومن أهم إنجازاته: ${achAr}؟`,
        en: `Which player has ${p.clubsHistoryEn[idx]} in his club history, and whose achievements include: ${achEn}?`
      });
    }
  }



  if (p.bioAr && p.bioEn) {
    variants.push({
      ar: `مين اللاعب ده؟ «${p.bioAr}»`,
      en: `Who is this player? "${p.bioEn}"`
    });
  }



  if (hasMultipleAch) {
    variants.push({
      ar: `مين اللاعب اللي من أهم إنجازاته: ${achAr}؟`,
      en: `Which player's achievements include: ${achEn}?`
    });
  }



  const safeCombos = PLAYER_SAFE_CLUB_COMBOS[p.id];
  if (safeCombos && safeCombos.length > 0) {
    const comboIds = safeCombos[Math.floor(Math.random() * safeCombos.length)];
    const comboClubs = comboIds.map(id => clubs.find(c => c.id === id)).filter(Boolean);
    if (comboClubs.length === comboIds.length) {
      variants.push({
        ar: `مين اللاعب اللي لعب في مسيرته لـ${joinClubNamesAr(comboClubs)}؟`,
        en: `Which player has played for ${joinClubNamesEn(comboClubs)} during his career?`
      });
    }
  }






  if (variants.length === 0) {
    variants.push({
      ar: `مين اللاعب (${p.nationalityAr} — ${p.position.ar}) اللي فترة نشاطه ${p.era}؟`,
      en: `Which player (${p.nationalityEn} — ${p.position.en}) was active during ${p.era}?`
    });
  }

  const chosen = variants[Math.floor(Math.random() * variants.length)];
  return { ar: chosen.ar, en: chosen.en, answerAr: p.nameAr, answerEn: p.nameEn };
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
  const variants = [];


  const eligibleWinners = c.winners.filter(w => w.years.some(y => !isDisputedYear(c.id, y)));
  if (eligibleWinners.length > 0) {
    const w = eligibleWinners[Math.floor(Math.random() * eligibleWinners.length)];
    const validYears = w.years.filter(y => !isDisputedYear(c.id, y));
    const year = validYears[Math.floor(Math.random() * validYears.length)];
    variants.push({
      ar: `مين ${tw.ar} اللي كسب ${c.nameAr} سنة ${year}؟`,
      en: `Which ${tw.en} won the ${c.nameEn} in ${year}?`,
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

  const chosen = variants[Math.floor(Math.random() * variants.length)];
  return chosen;
}

function buildClubFrequencyMaps() {
  const stadiumFreq = {}, nicknameFreq = {}, achComboFreq = {};
  clubs.forEach(c => {
    if (c.stadiumAr) stadiumFreq[c.stadiumAr] = (stadiumFreq[c.stadiumAr] || 0) + 1;
    (c.nicknamesAr || []).forEach(n => { nicknameFreq[n] = (nicknameFreq[n] || 0) + 1; });


    if (c.achievementsAr && c.achievementsAr.length > 0) {
      const combo = achievementCombo(c.achievementsAr, "، و");
      achComboFreq[combo] = (achComboFreq[combo] || 0) + 1;
    }
  });
  return { stadiumFreq, nicknameFreq, achComboFreq };
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
  return c ? { ar: c.nameAr, en: c.nameEn } : null;
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
        answerAr: leagueName.ar, answerEn: leagueName.en
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


  if (club.honours && club.honours.length > 0) {
    variants.push({
      ar: `نادي ${club.nameAr} عنده كام لقب رسمي في المجموع (جمع كل البطولات المسجّلة له)؟`,
      en: `How many total official titles does ${club.nameEn} have (summing every recorded competition)?`,
      answerAr: String(totalTitlesFor(club)), answerEn: String(totalTitlesFor(club))
    });
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


  if (club.nicknamesAr && club.nicknamesAr.length > 0) {
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
        answerAr: `${h.titles} مرة — آخر مرة ${lastYear}`, answerEn: `${h.titles} time${h.titles === 1 ? "" : "s"} — most recently in ${lastYear}`
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


    const clubTotal = totalTitlesFor(club), rivalTotal = totalTitlesFor(rival);
    if ((club.honours && club.honours.length > 0) && (rival.honours && rival.honours.length > 0) && clubTotal !== rivalTotal) {
      const winner = clubTotal > rivalTotal ? club : rival;
      variants.push({
        ar: `أنهي نادي عنده ألقاب رسمية أكتر في المجموع: ${club.nameAr} ولا ${rival.nameAr}؟`,
        en: `Which club has more total official titles: ${club.nameEn} or ${rival.nameEn}?`,
        answerAr: winner.nameAr, answerEn: winner.nameEn
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
    if (CLUB_FREQ.nicknameFreq[nick] === 1) {
      variants.push({
        ar: `أنهي نادي بيتلقب بـ"${nick}"؟`,
        en: `Which club is nicknamed "${club.nicknamesEn[0]}"?`,
        answerAr: club.nameAr, answerEn: club.nameEn
      });
    }
  }


  if (club.cityAr && club.stadiumAr) {
    variants.push({
      ar: `مين النادي اللي اتأسس سنة ${club.founded}، وبيلعب في مدينة ${club.cityAr} على ملعب ${club.stadiumAr}؟`,
      en: `Which club was founded in ${club.founded}, is based in ${club.cityEn}, and plays at ${club.stadiumEn}?`,
      answerAr: club.nameAr, answerEn: club.nameEn
    });
  }

  const chosen = variants[Math.floor(Math.random() * variants.length)];
  return chosen;
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

  variants.push({
    ar: `كام لاعب مذكور في قائمة أكتر هدافي ${league.ar} تاريخياً (في المصدر ده)؟`,
    en: `How many players are listed among ${league.en}'s all-time top scorers (in this source)?`,
    answerAr: String(comp.scorers.length), answerEn: String(comp.scorers.length)
  });

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

  const chosen = variants[Math.floor(Math.random() * variants.length)];
  return chosen;
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

  if (entry.goals) {
    variants.push({
      ar: `كام هدف سجل ${entry.nameAr} لنادي ${entry.clubAr} في مسيرته معاه؟`,
      en: `How many goals did ${entry.nameEn} score for ${entry.clubEn} during his time there?`,
      answerAr: `${entry.goals} هدف`, answerEn: `${entry.goals} goals`
    });
  }

  if (entry.years) {
    variants.push({
      ar: `في أنهي فترة كان ${entry.nameAr} هداف ${entry.clubAr} التاريخي؟`,
      en: `During which years was ${entry.nameEn} at ${entry.clubEn} while setting this scoring record?`,
      answerAr: entry.years, answerEn: entry.years
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

  const chosen = variants[Math.floor(Math.random() * variants.length)];
  return chosen;
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

  variants.push({
    ar: `كام هدف سجل هداف نسخة ${tournament.nameAr} سنة ${entry.year}؟${entry.tied ? " (الرقم ده مشترك بين أكتر من لاعب)" : ""}`,
    en: `How many goals did the top scorer of the ${entry.year} edition of ${tournament.nameEn} score?${entry.tied ? " (a tally shared by several players)" : ""}`,
    answerAr: `${entry.goals} هدف`, answerEn: `${entry.goals} goals`
  });

  const chosen = variants[Math.floor(Math.random() * variants.length)];
  return chosen;
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
  const chosen = variants[Math.floor(Math.random() * variants.length)];
  return chosen;
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

function generateTurnQuestions() {
  const hasCompetitions = typeof competitions !== "undefined" && competitions.length > 0;
  const hasClubs = typeof clubs !== "undefined" && clubs.length > 0;
  const recordsPool = buildRecordsPool();
  const hasRecords = recordsPool.length > 0;

  // بنعمل مجمّع واحد فيه كل الأسئلة الممكنة من كل المصادر مع بعض،
  // وبنخلطه راندوم خالص — من غير أي تقسيمة أو حصص عادلة بين الأنواع.
  let pool = players.map(p => ({ type: "player", data: p }));
  if (hasCompetitions) pool = pool.concat(competitions.map(c => ({ type: "competition", data: c })));
  if (hasClubs) pool = pool.concat(clubs.map(c => ({ type: "club", data: c })));
  if (hasRecords) pool = pool.concat(recordsPool.map(r => ({ type: "records", data: r })));

  pool = shuffle(pool);

  const items = [];
  let idx = 0;
  while (items.length < QUESTIONS_PER_TURN && idx < pool.length) {
    const entry = pool[idx++];
    let q = null;
    if (entry.type === "player") q = buildBankQuestion(entry.data);
    else if (entry.type === "competition") q = buildCompetitionQuestion(entry.data);
    else if (entry.type === "club") q = buildClubQuestion(entry.data);
    else if (entry.type === "records") q = buildRecordsAreaQuestion(entry.data);
    if (q) items.push(q);
    // لو رجّع null (زي سؤال records اتصفّى) بنكمل على العنصر اللي بعده من غير ما نعتبره سؤال ضايع
  }
  return items;
}

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
