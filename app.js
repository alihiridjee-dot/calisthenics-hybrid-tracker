// 26W · Minimalist Hypertrophy, Muscle-Up & Protein Logbook Logic

const STORAGE_KEY = "hybrid26_tracker_state_v4";
const PREV_STORAGE_KEY = "hybrid26_tracker_state_v3";

function getLocalIsoDate(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function isoToUtcMs(isoStr) {
  const [y, m, d] = isoStr.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
}

function getTodayProgramPosition() {
  const todayIso = getLocalIsoDate();
  const startMs = isoToUtcMs(PLAN_DATA.meta.startDate);
  const todayMs = isoToUtcMs(todayIso);
  const diffDays = Math.floor((todayMs - startMs) / 86400000);

  if (diffDays < 0) {
    return { week: 1, dayIndex: 0, todayIso, isInProgramRange: false };
  }
  const maxDays = PLAN_DATA.weeks.length * 7 - 1;
  if (diffDays > maxDays) {
    return { week: PLAN_DATA.weeks.length, dayIndex: 6, todayIso, isInProgramRange: false };
  }
  return {
    week: Math.floor(diffDays / 7) + 1,
    dayIndex: diffDays % 7,
    todayIso,
    isInProgramRange: true
  };
}

const initialToday = getTodayProgramPosition();

const defaultState = {
  activeMode: "workout", // "workout" | "nutrition" | "plan"
  currentWeek: initialToday.week,
  currentDayIndex: initialToday.dayIndex,
  lastVisitedIsoDate: initialToday.todayIso,
  bodyweightKg: PLAN_DATA.meta.defaultBodyweightKg,
  goalMode: PLAN_DATA.meta.defaultGoalMode,
  setChecks: {},
  exerciseLogs: {}, // { w1_sat-1: { kg: "5", reps: "5" } }
  nutritionLog: {}, // { w1_d0: { meals: [bool, bool, bool, bool], extraG: 0, creatine: bool } }
  dayNotes: {},
  openForms: {},
  unlockedMuStages: {}
};

let state = loadState();
let timerInterval = null;
let timerSeconds = 0;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = { ...defaultState, ...JSON.parse(raw) };
      if (!["workout", "nutrition", "plan"].includes(parsed.activeMode)) {
        parsed.activeMode = "workout";
      }
      const todayPos = getTodayProgramPosition();
      if (parsed.lastVisitedIsoDate !== todayPos.todayIso && todayPos.isInProgramRange) {
        parsed.currentWeek = todayPos.week;
        parsed.currentDayIndex = todayPos.dayIndex;
        parsed.lastVisitedIsoDate = todayPos.todayIso;
      }
      return parsed;
    }

    const prevRaw = localStorage.getItem(PREV_STORAGE_KEY);
    if (prevRaw) {
      const prev = JSON.parse(prevRaw);
      return {
        ...defaultState,
        bodyweightKg: prev.bodyweightKg || PLAN_DATA.meta.defaultBodyweightKg,
        goalMode: prev.goalMode || PLAN_DATA.meta.defaultGoalMode,
        setChecks: prev.setChecks || {},
        nutritionLog: prev.nutritionLog || {},
        dayNotes: prev.dayNotes || {},
        unlockedMuStages: prev.unlockedMuStages || {}
      };
    }
    return { ...defaultState };
  } catch (e) {
    return { ...defaultState };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

// Date Utilities
function addDays(isoDateStr, daysToAdd) {
  const [y, m, d] = isoDateStr.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + daysToAdd);
  return dt;
}

function dateToIsoUtc(dt) {
  const y = dt.getUTCFullYear();
  const m = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const d = String(dt.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDateHeading(dt, dayName) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${dayName}, ${dt.getUTCDate()} ${months[dt.getUTCMonth()]}`;
}

function formatShortDate(dt) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${dt.getUTCDate()} ${months[dt.getUTCMonth()]}`;
}

// Nutrition Calculations
function getNutritionTargets() {
  const bw = parseFloat(state.bodyweightKg) || 75;
  const heightM = PLAN_DATA.meta.heightCm / 100;
  const bmi = (bw / (heightM * heightM)).toFixed(1);
  const mode = state.goalMode || "recomp";

  const proteinFloorG = Math.round(bw * 1.6);
  const proteinCeilingG = Math.round(bw * 2.2);
  const targetMult = mode === "recomp" ? 2.13 : 2.0;
  const perMealG = Math.round((bw * targetMult) / 4);
  const proteinTargetG = perMealG * 4;
  const actualGPerKg = (proteinTargetG / bw).toFixed(2);
  const leucinePerMealG = (perMealG * 0.088).toFixed(1);

  const maintenanceKcal = Math.round((bw * 34.5) / 25) * 25;
  const targetKcal = mode === "recomp"
    ? maintenanceKcal
    : Math.round((maintenanceKcal * 1.075) / 25) * 25;

  const fatG = Math.round(bw * 0.85);
  const carbG = Math.max(120, Math.round((targetKcal - proteinTargetG * 4 - fatG * 9) / 4));
  const periCarbG = Math.round(carbG * 0.65);

  return {
    bw, bmi, mode,
    proteinFloorG, proteinTargetG, proteinCeilingG,
    perMealG, actualGPerKg, leucinePerMealG,
    maintenanceKcal, targetKcal, fatG, carbG, periCarbG,
    gainMin: (bw * 0.0025).toFixed(2),
    gainMax: (bw * 0.0038).toFixed(2)
  };
}

function getDayNutritionEntry(weekNum, dayIndex) {
  const key = `w${weekNum}_d${dayIndex}`;
  const entry = state.nutritionLog[key];
  if (!entry) return { meals: [false, false, false, false], extraG: 0, creatine: false };
  return {
    meals: Array.isArray(entry.meals) ? [...entry.meals] : [false, false, false, false],
    extraG: typeof entry.extraG === "number" ? entry.extraG : 0,
    creatine: !!entry.creatine
  };
}

function setDayNutritionEntry(weekNum, dayIndex, entry) {
  state.nutritionLog[`w${weekNum}_d${dayIndex}`] = entry;
  saveState();
}

function getDayProteinConsumed(weekNum, dayIndex) {
  const t = getNutritionTargets();
  const entry = getDayNutritionEntry(weekNum, dayIndex);
  const checkedMeals = entry.meals.filter(Boolean).length;
  return Math.max(0, checkedMeals * t.perMealG + entry.extraG);
}

// Find most recent previous week log for an exercise (Double Progression reference)
function getPreviousExerciseLog(weekNum, exId) {
  for (let w = weekNum - 1; w >= 1; w--) {
    const log = state.exerciseLogs[`w${w}_${exId}`];
    if (log && (log.kg || log.reps)) {
      return { week: w, kg: log.kg || "", reps: log.reps || "" };
    }
  }
  return null;
}

// Dynamic set count & prescription
function getEffectiveSetsCount(exercise, weekObj) {
  if (exercise.dynamicKey === "upperA_pullup") {
    const m = weekObj.pullUpScheme.match(/^(\d+)/);
    return m ? parseInt(m[1], 10) : exercise.defaultSets;
  }
  if (exercise.dynamicKey === "upperA_dip") {
    const m = weekObj.dipScheme.match(/^(\d+)/);
    return m ? parseInt(m[1], 10) : exercise.defaultSets;
  }
  if (exercise.dynamicKey === "upperB_volPullup") {
    const m = weekObj.volPullUps.match(/^(\d+)/);
    return m ? parseInt(m[1], 10) : exercise.defaultSets;
  }
  if (exercise.dynamicKey === "thu_muscleup") {
    const m = weekObj.muscleUpDrill.match(/(\d+)\s*×/);
    return m ? parseInt(m[1], 10) : exercise.defaultSets;
  }
  if (weekObj.blockType === "DELOAD" && exercise.defaultSets >= 3) {
    return Math.max(2, exercise.defaultSets - 1);
  }
  return exercise.defaultSets;
}

function getExerciseSpecLine(exercise, weekObj) {
  const numSets = getEffectiveSetsCount(exercise, weekObj);
  const restText = exercise.restSeconds > 0 ? ` · ${exercise.restSeconds}s rest` : "";

  if (exercise.dynamicKey === "upperA_pullup") {
    return `<strong>+${weekObj.pullUpLoad} kg · ${weekObj.pullUpScheme}</strong> · ${weekObj.rirTarget}${restText}`;
  }
  if (exercise.dynamicKey === "upperA_dip") {
    const load = weekObj.dipLoad > 0 ? `+${weekObj.dipLoad} kg` : "BW";
    return `<strong>${load} · ${weekObj.dipScheme}</strong> · ${weekObj.rirTarget}${restText}`;
  }
  if (exercise.dynamicKey === "upperB_volPullup") {
    return `<strong>${weekObj.volPullUps}</strong> · ${weekObj.rirTarget}${restText}`;
  }
  if (exercise.dynamicKey === "thu_muscleup") {
    return `<strong>${weekObj.muscleUpDrill}</strong>${restText}`;
  }
  if (exercise.dynamicKey === "thu_treadmill") {
    return `<strong>${weekObj.qualityRun}</strong> · 5m WU + 4m CD`;
  }
  const rirPart = exercise.loggable ? ` · ${weekObj.rirTarget}` : "";
  return `<strong>${numSets} × ${exercise.reps}</strong>${rirPart}${restText}`;
}

function getDayCompletion(weekNum, dayIndex) {
  const weekObj = PLAN_DATA.weeks.find(w => w.week === weekNum);
  const dayObj = PLAN_DATA.daysTemplate[dayIndex];
  let totalSets = 0;
  let completedSets = 0;

  dayObj.exercises.forEach(ex => {
    const n = getEffectiveSetsCount(ex, weekObj);
    for (let s = 0; s < n; s++) {
      totalSets++;
      if (state.setChecks[`w${weekNum}_d${dayIndex}_${ex.id}_s${s}`]) completedSets++;
    }
  });

  const pct = totalSets === 0 ? 0 : Math.round((completedSets / totalSets) * 100);
  return { totalSets, completedSets, pct, isComplete: totalSets > 0 && completedSets === totalSets };
}

// Render Compact Protein Strip (Tab 1)
function renderProteinStrip() {
  const t = getNutritionTargets();
  const entry = getDayNutritionEntry(state.currentWeek, state.currentDayIndex);
  const consumed = getDayProteinConsumed(state.currentWeek, state.currentDayIndex);
  const pct = Math.min(100, Math.round((consumed / t.proteinTargetG) * 100));
  const floorPct = Math.min(95, Math.round((t.proteinFloorG / t.proteinTargetG) * 100));

  const card = document.getElementById("proteinTrackerCard");
  card.classList.toggle("hit-target", consumed >= t.proteinTargetG);

  document.getElementById("ptCurrentVal").textContent = `${consumed}g`;
  document.getElementById("ptTargetVal").textContent = `/ ${t.proteinTargetG}g`;

  const statusEl = document.getElementById("ptStatusPill");
  if (consumed >= t.proteinTargetG) {
    statusEl.textContent = "Target hit ✓";
  } else if (consumed >= t.proteinFloorG) {
    statusEl.textContent = `Above 1.6g/kg floor`;
  } else {
    statusEl.textContent = `Floor ${t.proteinFloorG}g`;
  }

  document.getElementById("ptBarFill").style.width = `${pct}%`;
  document.getElementById("ptFloorMarker").style.left = `${floorPct}%`;

  const crBtn = document.getElementById("creatineToggleBtn");
  crBtn.classList.toggle("active", entry.creatine);
  crBtn.textContent = entry.creatine ? "5g Creatine ✓" : "5g Creatine";

  const mealsEl = document.getElementById("ptMealsGrid");
  mealsEl.innerHTML = PLAN_DATA.mealSlots.map((slot, idx) => {
    const checked = !!entry.meals[idx];
    return `
      <button class="meal-chip ${checked ? "checked" : ""}" data-meal-idx="${idx}" title="${slot.timing}">
        <span class="mc-top">${slot.short} · ${checked ? "✓" : `${t.perMealG}g`}</span>
        <span class="mc-sub">${slot.label}</span>
      </button>
    `;
  }).join("");

  mealsEl.querySelectorAll(".meal-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.mealIdx, 10);
      const cur = getDayNutritionEntry(state.currentWeek, state.currentDayIndex);
      cur.meals[idx] = !cur.meals[idx];
      setDayNutritionEntry(state.currentWeek, state.currentDayIndex, cur);
      renderProteinStrip();
      renderPlanTab();
    });
  });
}

// Render Tab 1: Workout
function renderWorkoutTab() {
  const weekObj = PLAN_DATA.weeks.find(w => w.week === state.currentWeek);
  const dayObj = PLAN_DATA.daysTemplate[state.currentDayIndex];
  const currentDate = addDays(weekObj.startDate, dayObj.dayIndex);
  const todayIso = getLocalIsoDate();
  const isToday = dateToIsoUtc(currentDate) === todayIso;
  const comp = getDayCompletion(state.currentWeek, state.currentDayIndex);

  // Header
  document.getElementById("weekDialText").textContent = `Week ${weekObj.week} / 26`;
  document.getElementById("phaseTagText").textContent = `${weekObj.phase} · ${weekObj.rirTarget}`;

  // 7-Day Strip
  const ribbonEl = document.getElementById("dayRibbon");
  ribbonEl.innerHTML = PLAN_DATA.daysTemplate.map((d, idx) => {
    const dt = addDays(weekObj.startDate, idx);
    const dtIso = dateToIsoUtc(dt);
    const dComp = getDayCompletion(state.currentWeek, idx);
    const active = idx === state.currentDayIndex;
    const todayMatch = dtIso === todayIso;
    return `
      <button class="day-pill ${active ? "active" : ""} ${dComp.isComplete ? "done" : ""} ${todayMatch ? "is-today" : ""}" data-didx="${idx}">
        <span class="dp-dow">${d.letter}</span>
        <span class="dp-num">${dt.getUTCDate()}</span>
        <span class="dp-dot"></span>
      </button>
    `;
  }).join("");

  ribbonEl.querySelectorAll(".day-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      state.currentDayIndex = parseInt(btn.dataset.didx, 10);
      saveState();
      renderWorkoutTab();
    });
  });

  // Session Head
  document.getElementById("posterDateLine").textContent = formatDateHeading(currentDate, dayObj.dayName);
  document.getElementById("todayBadge").classList.toggle("hidden", !isToday);
  document.getElementById("durationCapsule").textContent =
    `${dayObj.estimatedMinutes} min · ${comp.completedSets}/${comp.totalSets} sets`;
  document.getElementById("posterTitle").textContent = dayObj.sessionTitle;
  document.getElementById("posterFocusNote").textContent = dayObj.summary;

  const fillEl = document.getElementById("sessionProgressFill");
  fillEl.style.width = `${comp.pct}%`;
  fillEl.classList.toggle("complete", comp.isComplete);
  document.getElementById("markAllDoneBtn").textContent = comp.isComplete ? "Unmark" : "Mark all";

  // Protein Strip
  renderProteinStrip();

  // Exercise List
  const deckEl = document.getElementById("movementDeck");
  deckEl.innerHTML = dayObj.exercises.map(ex => {
    const numSets = getEffectiveSetsCount(ex, weekObj);
    let doneSets = 0;
    const setBtns = [];
    for (let s = 0; s < numSets; s++) {
      const k = `w${state.currentWeek}_d${state.currentDayIndex}_${ex.id}_s${s}`;
      const checked = !!state.setChecks[k];
      if (checked) doneSets++;
      setBtns.push(`
        <button class="set-circle ${checked ? "checked" : ""}" data-key="${k}" data-rest="${ex.restSeconds}" aria-label="Set ${s + 1}">
          ${checked ? "✓" : s + 1}
        </button>
      `);
    }

    const cardComplete = numSets > 0 && doneSets === numSets;
    const isFormOpen = !!state.openForms[ex.id];
    const logKey = `w${state.currentWeek}_${ex.id}`;
    const curLog = state.exerciseLogs[logKey] || { kg: "", reps: "" };
    const prevLog = ex.loggable ? getPreviousExerciseLog(state.currentWeek, ex.id) : null;
    const prevText = prevLog
      ? `Prev W${prevLog.week}: ${prevLog.kg ? `${prevLog.kg}kg` : "BW"} × ${prevLog.reps || "—"}`
      : "Double progression log";

    const logbookHtml = ex.loggable ? `
      <div class="logbook-wrap">
        <div class="logbook-inputs">
          <input type="text" inputmode="decimal" class="log-input" data-log-key="${logKey}" data-field="kg" value="${curLog.kg}" placeholder="kg" aria-label="Weight in kg" />
          <span class="log-x">×</span>
          <input type="text" inputmode="numeric" class="log-input" data-log-key="${logKey}" data-field="reps" value="${curLog.reps}" placeholder="reps" aria-label="Reps completed" />
        </div>
        <span class="prev-hint">${prevText}</span>
      </div>
    ` : "";

    const lengthenedHint = ex.lengthened
      ? `<div class="fd-line"><strong>Stretch bonus:</strong> On your final set, add 2–3 controlled lengthened partials in the bottom half (Wolf 2023).</div>`
      : "";

    return `
      <article class="ex-card ${ex.isSkill ? "skill-card" : ""} ${cardComplete ? "complete" : ""}">
        <div class="ex-head">
          <div class="ex-title-wrap">
            <span class="pair-tag">${ex.pair}</span>
            <h2 class="ex-name">${ex.name}</h2>
          </div>
          <button class="text-action form-toggle" data-ex-id="${ex.id}">
            ${isFormOpen ? "Hide" : "Form"}
          </button>
        </div>

        <div class="ex-spec">${getExerciseSpecLine(ex, weekObj)}</div>

        <div class="ex-controls">
          <div class="sets-row">${setBtns.join("")}</div>
          ${logbookHtml}
        </div>

        <div class="form-drawer ${isFormOpen ? "open" : ""}">
          <div class="fd-line"><strong>Target:</strong> ${ex.muscles}</div>
          <div class="fd-line"><strong>Cue:</strong> ${ex.cues}</div>
          ${lengthenedHint}
          <div class="fd-avoid">Avoid: ${ex.avoid}</div>
        </div>
      </article>
    `;
  }).join("");

  // Bind Set Circles
  deckEl.querySelectorAll(".set-circle").forEach(btn => {
    btn.addEventListener("click", () => {
      const k = btn.dataset.key;
      const restSec = parseInt(btn.dataset.rest, 10);
      if (state.setChecks[k]) {
        delete state.setChecks[k];
      } else {
        state.setChecks[k] = true;
        if (restSec > 0) startRestBar(restSec);
      }
      saveState();
      renderWorkoutTab();
      renderPlanTab();
    });
  });

  // Bind Inline Logbook Inputs
  deckEl.querySelectorAll(".log-input").forEach(inp => {
    inp.addEventListener("input", e => {
      const lk = e.target.dataset.logKey;
      const field = e.target.dataset.field;
      if (!state.exerciseLogs[lk]) state.exerciseLogs[lk] = { kg: "", reps: "" };
      state.exerciseLogs[lk][field] = e.target.value;
      saveState();
    });
  });

  // Bind Form Toggle
  deckEl.querySelectorAll(".form-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.exId;
      state.openForms[id] = !state.openForms[id];
      saveState();
      renderWorkoutTab();
    });
  });

  // Session Note
  const noteKey = `w${state.currentWeek}_d${state.currentDayIndex}`;
  document.getElementById("dailyNoteInput").value = state.dayNotes[noteKey] || "";
}

// Render Tab 2: Nutrition
function renderNutritionTab() {
  const t = getNutritionTargets();

  document.getElementById("bwDisplayVal").textContent = `${t.bw} kg`;
  document.getElementById("bmiSubText").textContent =
    `${PLAN_DATA.meta.heightLabel} · BMI ${t.bmi} · South Asian Calibration`;

  document.getElementById("goalRecompBtn").classList.toggle("active", t.mode === "recomp");
  document.getElementById("goalBulkBtn").classList.toggle("active", t.mode === "leanbulk");

  document.getElementById("macroSummaryGrid").innerHTML = `
    <div class="stat-box">
      <span class="sb-label">Protein</span>
      <strong class="sb-val">${t.proteinTargetG}g</strong>
      <span class="sb-sub">${t.actualGPerKg} g/kg</span>
    </div>
    <div class="stat-box">
      <span class="sb-label">Calories</span>
      <strong class="sb-val">${t.targetKcal}</strong>
      <span class="sb-sub">${t.mode === "recomp" ? "Maintenance" : "+7.5% surplus"}</span>
    </div>
    <div class="stat-box">
      <span class="sb-label">Carbs / Fat</span>
      <strong class="sb-val">${t.carbG} / ${t.fatG}g</strong>
      <span class="sb-sub">~${t.periCarbG}g peri-gym</span>
    </div>
  `;

  const scaleText = t.mode === "recomp"
    ? "Hold weight steady while waist drops & lifts climb"
    : `+${t.gainMin}–${t.gainMax} kg/wk (Helms 2023)`;

  document.getElementById("fdLandmarks").innerHTML = `
    <div class="kv-row">
      <span class="kv-k">Per-meal target (4 meals)</span>
      <span class="kv-v">${t.perMealG}g (~${t.leucinePerMealG}g leucine)</span>
    </div>
    <div class="kv-row">
      <span class="kv-k">Minimum floor (Morton 2018 · 1.6 g/kg)</span>
      <span class="kv-v">${t.proteinFloorG} g/day</span>
    </div>
    <div class="kv-row">
      <span class="kv-k">Upper CI ceiling (2.2 g/kg)</span>
      <span class="kv-v">${t.proteinCeilingG} g/day</span>
    </div>
    <div class="kv-row">
      <span class="kv-k">Daily creatine (Kreider 2017)</span>
      <span class="kv-v">5g Monohydrate</span>
    </div>
    <div class="kv-row">
      <span class="kv-k">Weekly scale target</span>
      <span class="kv-v">${scaleText}</span>
    </div>
  `;

  document.getElementById("mealIdeasGrid").innerHTML = PLAN_DATA.southAsianMeals.map(m => `
    <div class="list-item">
      <div class="li-top">
        <span class="li-title">${m.title}</span>
        <span class="li-meta">${m.tag}</span>
      </div>
      <div class="li-sub">${m.detail}</div>
      <div class="li-accent">${m.macros}</div>
    </div>
  `).join("");

  document.getElementById("researchStack").innerHTML = PLAN_DATA.researchCitations.map(r => `
    <div class="list-item">
      <div class="li-title" style="margin-bottom:2px;">${r.study}</div>
      <div class="li-sub">${r.finding}</div>
      <div class="li-accent">${r.application}</div>
    </div>
  `).join("");
}

// Render Tab 3: 26W Plan
function renderPlanTab() {
  const weekObj = PLAN_DATA.weeks.find(w => w.week === state.currentWeek);
  const t = getNutritionTargets();

  // Program Overview (Weekly Split + 6 Mesocycles)
  const ov = PLAN_DATA.programOverview;
  document.getElementById("overviewSummary").textContent = ov.summary;

  const splitEl = document.getElementById("weeklySplitList");
  splitEl.innerHTML = ov.weeklySplit.map(row => `
    <button class="list-item split-row-btn" data-didx="${row.dayIndex}">
      <div class="li-top">
        <span class="li-title"><span class="split-day">${row.day}</span> ${row.title}</span>
        <span class="li-meta">${row.duration}</span>
      </div>
      <div class="li-sub">${row.targets}</div>
    </button>
  `).join("");

  splitEl.querySelectorAll(".split-row-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.currentDayIndex = parseInt(btn.dataset.didx, 10);
      switchMode("workout");
      saveState();
      renderAll();
    });
  });

  document.getElementById("mesoTimelineList").innerHTML = ov.mesocycles.map(m => `
    <div class="list-item">
      <div class="li-top">
        <span class="li-title">${m.weeks} · ${m.name}</span>
        <span class="li-meta">${m.dates}</span>
      </div>
      <div class="li-sub">${m.focus}</div>
    </div>
  `).join("");

  // Muscle-Up Pathway
  document.getElementById("muCurrentWeekBadge").textContent = `Week ${weekObj.week}`;
  document.getElementById("muActiveLine").textContent = `Tuesday drill: ${weekObj.muscleUpDrill}`;

  const muEl = document.getElementById("muStagesStack");
  muEl.innerHTML = PLAN_DATA.muscleUpStages.map(st => {
    const unlocked = !!state.unlockedMuStages[st.stage];
    return `
      <div class="list-item mu-item ${unlocked ? "unlocked" : ""}" data-stage="${st.stage}">
        <span class="mu-check-dot">✓</span>
        <div style="flex:1;">
          <div class="li-top">
            <span class="li-title">${st.stage}. ${st.title}</span>
            <span class="li-meta">${st.weeks}</span>
          </div>
          <div class="li-sub">${st.target} — ${st.cue}</div>
        </div>
      </div>
    `;
  }).join("");

  muEl.querySelectorAll(".mu-item").forEach(item => {
    item.addEventListener("click", () => {
      const s = item.dataset.stage;
      state.unlockedMuStages[s] = !state.unlockedMuStages[s];
      saveState();
      renderPlanTab();
    });
  });

  // Weekly Volume Audit
  document.getElementById("volumeAuditGrid").innerHTML = PLAN_DATA.weeklyVolumeAudit.map(v => `
    <div>
      <div class="vol-row-top">
        <span class="vol-name">${v.muscle}</span>
        <span class="vol-meta">${v.sets} · ${v.freq}</span>
      </div>
      <div class="vol-track"><div class="vol-fill" style="width:${v.pct}%"></div></div>
    </div>
  `).join("");

  // Coaches Synthesized
  document.getElementById("coachesList").innerHTML = PLAN_DATA.expertFrameworks.map(f => `
    <div class="list-item">
      <div class="li-top">
        <span class="li-title">${f.name}</span>
        <span class="li-meta">${f.role}</span>
      </div>
      <div class="li-sub">${f.detail}</div>
    </div>
  `).join("");

  // 26-Week Schedule Grid
  const gridEl = document.getElementById("weekMatrixGrid");
  gridEl.innerHTML = PLAN_DATA.weeks.map(w => {
    const dt = addDays(w.startDate, 0);
    let gymDone = 0;
    let proteinDone = 0;
    [0, 1, 3, 4, 5].forEach(dIdx => {
      if (getDayCompletion(w.week, dIdx).isComplete) gymDone++;
    });
    for (let dIdx = 0; dIdx < 7; dIdx++) {
      if (getDayProteinConsumed(w.week, dIdx) >= t.proteinFloorG) proteinDone++;
    }
    const isCurrent = w.week === state.currentWeek;

    return `
      <button class="wk-tile ${isCurrent ? "active" : ""}" data-wk="${w.week}">
        <div class="wt-top">
          <span>W${String(w.week).padStart(2, "0")} · ${w.blockType}</span>
          <span class="wt-date">${formatShortDate(dt)}</span>
        </div>
        <div class="wt-line">Pull +${w.pullUpLoad}kg · Dip +${w.dipLoad}kg</div>
        <div class="wt-sub">${w.rirTarget} · Gym ${gymDone}/5 · P ${proteinDone}/7</div>
      </button>
    `;
  }).join("");

  gridEl.querySelectorAll(".wk-tile").forEach(tile => {
    tile.addEventListener("click", () => {
      state.currentWeek = parseInt(tile.dataset.wk, 10);
      switchMode("workout");
      saveState();
      renderAll();
    });
  });
}

function switchMode(modeName) {
  state.activeMode = modeName;
  saveState();
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === modeName);
  });
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `mode-${modeName}`);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Rest Timer
function formatClock(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startRestBar(seconds) {
  if (timerInterval) clearInterval(timerInterval);
  timerSeconds = seconds;
  const bar = document.getElementById("restPill");
  const clock = document.getElementById("rpClock");
  bar.classList.remove("hidden");
  clock.textContent = formatClock(timerSeconds);

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      clock.textContent = formatClock(timerSeconds);
    } else {
      clearInterval(timerInterval);
      clock.textContent = "Go";
      setTimeout(() => bar.classList.add("hidden"), 2000);
    }
  }, 1000);
}

function renderAll() {
  renderWorkoutTab();
  renderNutritionTab();
  renderPlanTab();
}

document.addEventListener("DOMContentLoaded", () => {
  // Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => switchMode(btn.dataset.mode));
  });

  // Week Nav
  document.getElementById("prevWeekBtn").addEventListener("click", () => {
    if (state.currentWeek > 1) {
      state.currentWeek--;
      saveState();
      renderAll();
    }
  });

  document.getElementById("nextWeekBtn").addEventListener("click", () => {
    if (state.currentWeek < 26) {
      state.currentWeek++;
      saveState();
      renderAll();
    }
  });

  // Jump to Today
  document.getElementById("jumpTodayQuickBtn").addEventListener("click", () => {
    const pos = getTodayProgramPosition();
    state.currentWeek = pos.week;
    state.currentDayIndex = pos.dayIndex;
    state.lastVisitedIsoDate = pos.todayIso;
    switchMode("workout");
    saveState();
    renderAll();
  });

  // Mark All Sets Done / Undone
  document.getElementById("markAllDoneBtn").addEventListener("click", () => {
    const weekObj = PLAN_DATA.weeks.find(w => w.week === state.currentWeek);
    const dayObj = PLAN_DATA.daysTemplate[state.currentDayIndex];
    const target = !getDayCompletion(state.currentWeek, state.currentDayIndex).isComplete;

    dayObj.exercises.forEach(ex => {
      const n = getEffectiveSetsCount(ex, weekObj);
      for (let s = 0; s < n; s++) {
        const k = `w${state.currentWeek}_d${state.currentDayIndex}_${ex.id}_s${s}`;
        if (target) state.setChecks[k] = true;
        else delete state.setChecks[k];
      }
    });
    saveState();
    renderAll();
  });

  // Protein Controls
  function adjustProtein(delta) {
    const cur = getDayNutritionEntry(state.currentWeek, state.currentDayIndex);
    const t = getNutritionTargets();
    const mealsG = cur.meals.filter(Boolean).length * t.perMealG;
    const nextTotal = Math.max(0, mealsG + cur.extraG + delta);
    cur.extraG = nextTotal - mealsG;
    setDayNutritionEntry(state.currentWeek, state.currentDayIndex, cur);
    renderProteinStrip();
    renderPlanTab();
  }

  document.getElementById("ptMinus10").addEventListener("click", () => adjustProtein(-10));
  document.getElementById("ptPlus10").addEventListener("click", () => adjustProtein(10));
  document.getElementById("ptPlus25").addEventListener("click", () => adjustProtein(25));

  document.getElementById("creatineToggleBtn").addEventListener("click", () => {
    const cur = getDayNutritionEntry(state.currentWeek, state.currentDayIndex);
    cur.creatine = !cur.creatine;
    setDayNutritionEntry(state.currentWeek, state.currentDayIndex, cur);
    renderProteinStrip();
  });

  document.getElementById("openFuelGuideBtn").addEventListener("click", () => {
    switchMode("nutrition");
  });

  // Session Note
  document.getElementById("dailyNoteInput").addEventListener("input", e => {
    const key = `w${state.currentWeek}_d${state.currentDayIndex}`;
    state.dayNotes[key] = e.target.value;
    saveState();
    const st = document.getElementById("fnSaveStatus");
    st.textContent = "Saved";
    setTimeout(() => { st.textContent = "Saved locally"; }, 1000);
  });

  // Bodyweight & Goal Mode
  document.getElementById("bwMinus").addEventListener("click", () => {
    state.bodyweightKg = Math.max(45, (parseFloat(state.bodyweightKg) || 75) - 0.5);
    saveState();
    renderAll();
  });

  document.getElementById("bwPlus").addEventListener("click", () => {
    state.bodyweightKg = Math.min(140, (parseFloat(state.bodyweightKg) || 75) + 0.5);
    saveState();
    renderAll();
  });

  document.querySelectorAll(".seg-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.goalMode = btn.dataset.goal;
      saveState();
      renderAll();
    });
  });

  // Clear Day & Export Backup
  document.getElementById("resetDayBtn").addEventListener("click", () => {
    const weekObj = PLAN_DATA.weeks.find(w => w.week === state.currentWeek);
    const dayObj = PLAN_DATA.daysTemplate[state.currentDayIndex];
    dayObj.exercises.forEach(ex => {
      const n = getEffectiveSetsCount(ex, weekObj);
      for (let s = 0; s < n; s++) {
        delete state.setChecks[`w${state.currentWeek}_d${state.currentDayIndex}_${ex.id}_s${s}`];
      }
      delete state.exerciseLogs[`w${state.currentWeek}_${ex.id}`];
    });
    delete state.nutritionLog[`w${state.currentWeek}_d${state.currentDayIndex}`];
    saveState();
    switchMode("workout");
    renderAll();
  });

  document.getElementById("exportJsonBtn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const a = document.createElement("a");
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `26w_backup_w${state.currentWeek}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
  });

  // Rest Bar Controls
  document.getElementById("rpMinus").addEventListener("click", () => {
    timerSeconds = Math.max(0, timerSeconds - 15);
    document.getElementById("rpClock").textContent = formatClock(timerSeconds);
  });

  document.getElementById("rpPlus").addEventListener("click", () => {
    timerSeconds += 15;
    document.getElementById("rpClock").textContent = formatClock(timerSeconds);
  });

  document.getElementById("rpClose").addEventListener("click", () => {
    if (timerInterval) clearInterval(timerInterval);
    document.getElementById("restPill").classList.add("hidden");
  });

  switchMode(state.activeMode || "workout");
  renderAll();
});
