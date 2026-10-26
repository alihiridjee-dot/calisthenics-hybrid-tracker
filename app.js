// 26W • South Asian Hypertrophy, Muscle-Up Lab & 45–55 Min Tactile Studio Logic

const STORAGE_KEY = "hybrid26_tracker_state_v2";

const defaultState = {
  activeMode: "workout", // "workout" | "muscleup" | "genetics"
  currentWeek: 1,
  currentDayIndex: 0,
  bodyweightKg: PLAN_DATA.meta.defaultBodyweightKg,
  setChecks: {},
  dayNotes: {},
  openBlueprints: {},
  unlockedMuStages: {},
  decoderOpen: false
};

let state = loadState();
let timerInterval = null;
let timerSeconds = 0;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    return { ...defaultState, ...JSON.parse(raw) };
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

function formatEditorialDate(dt, dayName) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${dayName}, ${dt.getUTCDate()} ${months[dt.getUTCMonth()]}`;
}

function formatShortDate(dt) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${dt.getUTCDate()} ${months[dt.getUTCMonth()]}`;
}

// Parse dynamic set counts (supports both "4 sets of 4 reps" and "4 x 4")
function getEffectiveSetsCount(exercise, weekObj) {
  if (exercise.dynamicKey === "upperA_pullup") {
    const match = weekObj.pullUpScheme.match(/^(\d+)\s*(?:sets|x)/i);
    return match ? parseInt(match[1], 10) : exercise.defaultSets;
  }
  if (exercise.dynamicKey === "upperA_dip") {
    const match = weekObj.dipScheme.match(/^(\d+)\s*(?:sets|x)/i);
    return match ? parseInt(match[1], 10) : exercise.defaultSets;
  }
  if (exercise.dynamicKey === "upperB_volPullup") {
    const match = weekObj.volPullUps.match(/^(\d+)\s*(?:sets|x)/i);
    return match ? parseInt(match[1], 10) : exercise.defaultSets;
  }
  if (exercise.dynamicKey === "thu_muscleup") {
    const match = weekObj.muscleUpDrill.match(/(\d+)\s*sets/i);
    return match ? parseInt(match[1], 10) : exercise.defaultSets;
  }
  if (weekObj.blockType === "DELOAD" && exercise.defaultSets >= 3) {
    return Math.max(2, exercise.defaultSets - 1);
  }
  return exercise.defaultSets;
}

// Plain-English dynamic prescription string
function getDynamicPrescription(exercise, weekObj) {
  if (exercise.dynamicKey === "upperA_pullup") {
    return `+${weekObj.pullUpLoad}kg · ${weekObj.pullUpScheme}`;
  }
  if (exercise.dynamicKey === "upperA_dip") {
    const load = weekObj.dipLoad > 0 ? `+${weekObj.dipLoad}kg` : "Bodyweight (0kg)";
    return `${load} · ${weekObj.dipScheme}`;
  }
  if (exercise.dynamicKey === "upperB_volPullup") {
    return weekObj.volPullUps;
  }
  if (exercise.dynamicKey === "thu_muscleup") {
    return weekObj.muscleUpDrill;
  }
  if (exercise.dynamicKey === "sat_treadmill") {
    return weekObj.satTreadmill;
  }
  return `${exercise.setsLabel} of ${exercise.repsLabel}`;
}

function getDayCompletion(weekNum, dayIndex) {
  const weekObj = PLAN_DATA.weeks.find(w => w.week === weekNum);
  const dayObj = PLAN_DATA.daysTemplate[dayIndex];
  let totalSets = 0;
  let completedSets = 0;

  dayObj.exercises.forEach(ex => {
    const numSets = getEffectiveSetsCount(ex, weekObj);
    for (let s = 0; s < numSets; s++) {
      totalSets++;
      if (state.setChecks[`w${weekNum}_d${dayIndex}_${ex.id}_s${s}`]) {
        completedSets++;
      }
    }
  });

  const pct = totalSets === 0 ? 0 : Math.round((completedSets / totalSets) * 100);
  return {
    totalSets,
    completedSets,
    pct,
    isComplete: totalSets > 0 && completedSets === totalSets
  };
}

// Render Mode 01: Today's 45–55 Min Workout Canvas
function renderWorkoutCanvas() {
  const weekObj = PLAN_DATA.weeks.find(w => w.week === state.currentWeek);
  const dayObj = PLAN_DATA.daysTemplate[state.currentDayIndex];
  const currentDate = addDays(weekObj.monDate, dayObj.dayIndex);
  const dayComp = getDayCompletion(state.currentWeek, state.currentDayIndex);

  // 1. Top Dial & Phase Tag
  const wkPadded = String(weekObj.week).padStart(2, "0");
  document.getElementById("weekDialText").textContent = `WEEK ${wkPadded} / 26`;
  document.getElementById("phaseTagText").textContent = `${weekObj.phase.toUpperCase()} · ${weekObj.blockType.toUpperCase()}`;

  // 2. Editorial Poster Stage
  document.getElementById("posterDateLine").textContent = formatEditorialDate(currentDate, dayObj.dayName);
  document.getElementById("durationCapsule").textContent = `⏱ ${dayObj.estimatedMinutes} MIN SESSION`;
  document.getElementById("posterTitle").textContent = dayObj.sessionTitle;

  const dynamicFocusByDay = {
    0: `Paired A1/A2: Pull-Up +${weekObj.pullUpLoad}kg (${weekObj.pullUpScheme}) & Dip +${weekObj.dipLoad}kg (${weekObj.dipScheme})`,
    1: dayObj.focus,
    2: dayObj.focus,
    3: `${weekObj.muscleUpDrill} · Paired Volume Pull-Ups (${weekObj.volPullUps}) & Tempo Dips`,
    4: dayObj.focus,
    5: `Main Set: ${weekObj.satTreadmill}`,
    6: dayObj.focus
  };
  document.getElementById("posterFocusNote").textContent = dynamicFocusByDay[dayObj.dayIndex];
  document.getElementById("timeBreakdownText").textContent = dayObj.timeBreakdown;

  // Sculptural Ring
  const ringCircumference = 263.9;
  const ringOffset = ringCircumference - (dayComp.pct / 100) * ringCircumference;
  document.getElementById("sculptureRingBar").style.strokeDashoffset = ringOffset;
  document.getElementById("sculptureDayNum").textContent = currentDate.getUTCDate();
  document.getElementById("sculpturePctText").textContent = dayComp.isComplete ? "DONE ✓" : `${dayComp.pct}%`;

  const sculptureEl = document.getElementById("posterCompleteTrigger");
  sculptureEl.classList.toggle("complete", dayComp.isComplete);

  // Plain-English Decoder Drawer
  const decoderBox = document.getElementById("decoderBox");
  const decoderBtn = document.getElementById("toggleDecoderBtn");
  decoderBox.classList.toggle("hidden", !state.decoderOpen);
  decoderBtn.classList.toggle("active", state.decoderOpen);
  decoderBtn.textContent = state.decoderOpen ? "Hide Decoder ✕" : "What does “4×4” mean?";

  document.getElementById("decoderGrid").innerHTML = PLAN_DATA.decoder.map(d => `
    <div class="decoder-item">
      <div class="dec-term">${d.term}</div>
      <div class="dec-plain">${d.plain}</div>
    </div>
  `).join("");

  // 3. 7-Day Tactile Ribbon
  const letters = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const ribbonEl = document.getElementById("dayRibbon");
  ribbonEl.innerHTML = PLAN_DATA.daysTemplate.map((d, idx) => {
    const dt = addDays(weekObj.monDate, idx);
    const comp = getDayCompletion(state.currentWeek, idx);
    const isActive = idx === state.currentDayIndex;
    return `
      <button class="ribbon-pill ${isActive ? "active" : ""} ${comp.isComplete ? "done" : ""}" data-didx="${idx}">
        <span class="r-day-let">${letters[idx]}</span>
        <span class="r-day-num">${dt.getUTCDate()}</span>
        <span class="r-pip"></span>
      </button>
    `;
  }).join("");

  ribbonEl.querySelectorAll(".ribbon-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      state.currentDayIndex = parseInt(btn.dataset.didx, 10);
      saveState();
      renderWorkoutCanvas();
    });
  });

  // 4. Interactive Movement Deck
  const deckEl = document.getElementById("movementDeck");
  deckEl.innerHTML = dayObj.exercises.map((ex, idx) => {
    const numSets = getEffectiveSetsCount(ex, weekObj);
    const prescription = getDynamicPrescription(ex, weekObj);
    const watermarkNum = String(idx + 1).padStart(2, "0");
    const isSkillPrimer = ex.dynamicKey === "thu_muscleup";

    let doneSets = 0;
    const orbsHtml = [];
    for (let s = 0; s < numSets; s++) {
      const k = `w${state.currentWeek}_d${state.currentDayIndex}_${ex.id}_s${s}`;
      const isStamped = !!state.setChecks[k];
      if (isStamped) doneSets++;
      orbsHtml.push(`
        <button class="set-orb ${isStamped ? "stamped" : ""}" data-key="${k}" data-rest="${ex.restSeconds}">
          <span class="orb-num">${isStamped ? "✓" : s + 1}</span>
          <span class="orb-sub">${isStamped ? "DONE" : "SET"}</span>
        </button>
      `);
    }

    const isCardComplete = numSets > 0 && doneSets === numSets;
    const isBlueprintOpen = !!state.openBlueprints[ex.id];

    return `
      <article class="deck-card ${isSkillPrimer ? "skill-primer-card" : ""} ${isCardComplete ? "card-complete" : ""}">
        <div class="deck-watermark">${watermarkNum}</div>

        <div class="deck-top">
          <span class="deck-cat-tag">${ex.category}</span>
          <h2 class="deck-title">${ex.name}</h2>
        </div>

        <div class="deck-prescription-row">
          <span class="deck-spec-pill highlight">${prescription}</span>
          <span class="deck-spec-pill">${ex.rir}</span>
          ${ex.restSeconds > 0 ? `<span class="deck-spec-pill">${ex.restSeconds}s rest</span>` : ""}
        </div>

        <div class="orbs-row">
          <div class="orbs-cluster">
            ${orbsHtml.join("")}
          </div>
          <button class="cue-toggle-btn ${isBlueprintOpen ? "open" : ""}" data-bp="${ex.id}">
            ${isBlueprintOpen ? "Hide Form" : "Form Guide"}
          </button>
        </div>

        <div class="inline-blueprint ${isBlueprintOpen ? "open" : ""}">
          <div class="bp-cue-highlight">“${ex.cues}”</div>
          <div style="margin-bottom:6px;font-weight:800;font-size:0.74rem;letter-spacing:0.04em;">
            TARGET MUSCLES: ${ex.guideDetails.muscles.toUpperCase()}
          </div>
          <ol class="bp-steps">
            ${ex.guideDetails.execution.map(step => `<li>${step}</li>`).join("")}
          </ol>
          <div class="bp-avoid">
            Avoid: ${ex.guideDetails.mistakeToAvoid}
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Bind Set Orbs
  deckEl.querySelectorAll(".set-orb").forEach(orb => {
    orb.addEventListener("click", () => {
      const k = orb.dataset.key;
      const restSec = parseInt(orb.dataset.rest, 10);
      if (state.setChecks[k]) {
        delete state.setChecks[k];
      } else {
        state.setChecks[k] = true;
        if (restSec > 0) startRestPill(restSec);
      }
      saveState();
      renderWorkoutCanvas();
    });
  });

  // Bind Inline Form Guide Accordion Buttons
  deckEl.querySelectorAll(".cue-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const exId = btn.dataset.bp;
      state.openBlueprints[exId] = !state.openBlueprints[exId];
      saveState();
      renderWorkoutCanvas();
    });
  });

  // 5. Analog Field Note
  const noteKey = `w${state.currentWeek}_d${state.currentDayIndex}`;
  document.getElementById("dailyNoteInput").value = state.dayNotes[noteKey] || "";
}

// Render Mode 02: Muscle-Up Mastery Lab
function renderMuscleUpLab() {
  const weekObj = PLAN_DATA.weeks.find(w => w.week === state.currentWeek);
  document.getElementById("muCurrentWeekBadge").textContent = `WEEK ${weekObj.week} PRESCRIPTION`;
  document.getElementById("muActiveDrillBox").innerHTML = `
    <div style="font-size:0.68rem;font-weight:800;letter-spacing:0.08em;color:#fbbf24;margin-bottom:2px;">
      THIS THURSDAY'S FRESH SKILL PRIMER (8 MINS)
    </div>
    <div style="font-weight:800;font-size:0.95rem;color:#fff;">
      ${weekObj.muscleUpDrill}
    </div>
  `;

  const stackEl = document.getElementById("muStagesStack");
  stackEl.innerHTML = PLAN_DATA.muscleUpStages.map(st => {
    const isUnlocked = !!state.unlockedMuStages[st.stage];
    return `
      <div class="mu-stage-card ${isUnlocked ? "unlocked" : ""}" data-stage="${st.stage}">
        <div class="mus-top">
          <span class="mus-pill">STAGE 0${st.stage} · ${st.weeks.toUpperCase()}</span>
          <span class="mus-check">${isUnlocked ? "MASTERED ✓" : "TAP WHEN MASTERED ○"}</span>
        </div>
        <h3 style="font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;margin-bottom:4px;">
          ${st.title}
        </h3>
        <div style="font-size:0.78rem;font-weight:800;color:var(--clay-orange);margin-bottom:8px;">
          Goal: ${st.target}
        </div>
        <p style="font-size:0.81rem;color:var(--ink-mid);margin-bottom:8px;">
          ${st.cue}
        </p>
        <div style="font-size:0.75rem;font-weight:700;background:rgba(22,21,20,0.05);padding:7px 10px;border-radius:10px;">
          Thursday Drill: ${st.drill}
        </div>
      </div>
    `;
  }).join("");

  stackEl.querySelectorAll(".mu-stage-card").forEach(card => {
    card.addEventListener("click", () => {
      const s = card.dataset.stage;
      state.unlockedMuStages[s] = !state.unlockedMuStages[s];
      saveState();
      renderMuscleUpLab();
    });
  });
}

// Render Mode 03: South Asian Genetics, Protein Dial & 26-Week Matrix
function renderGeneticsAndMatrix() {
  // 1. South Asian Manifesto
  const sa = PLAN_DATA.southAsianProtocol;
  document.getElementById("saHeadline").textContent = sa.headline;
  document.getElementById("saSummary").textContent = sa.summary;
  document.getElementById("saPillarsGrid").innerHTML = sa.pillars.map(p => `
    <div class="gm-pillar-box">
      <div class="gmp-badge">${p.badge}</div>
      <div class="gmp-title">${p.title}</div>
      <div class="gmp-detail">${p.detail}</div>
    </div>
  `).join("");

  // 2. South Asian Protein & Leucine Calculator (2.0 - 2.2 g/kg)
  const bw = parseFloat(state.bodyweightKg) || 75;
  document.getElementById("bwDisplayVal").textContent = `${bw} kg`;

  const saSweetSpot = Math.round(bw * 2.0); // 2.0 g/kg for South Asian hardgainer/recomp
  const saUpperZone = Math.round(bw * 2.2); // 2.2 g/kg max hypertrophy/lean buffer
  const perMeal = Math.round(saSweetSpot / 4);
  const leucineG = (perMeal * 0.095).toFixed(1); // ~3.6g leucine per meal

  document.getElementById("fdLandmarks").innerHTML = `
    <div class="fd-item" style="background:var(--clay-soft);padding:10px 12px;border-radius:12px;">
      <div>
        <strong style="color:var(--clay-orange);display:block;">South Asian Sweet Spot (2.0 g/kg) ★</strong>
        <span style="font-size:0.74rem;color:var(--ink-mid);">4 daily meals × ~${perMeal}g (~${leucineG}g leucine/meal)</span>
      </div>
      <strong style="font-family:'Syne',sans-serif;font-size:1.15rem;color:var(--clay-orange);">${saSweetSpot} g/day</strong>
    </div>
    <div class="fd-item">
      <span>High-Density / Lean Recomp Ceiling (2.2 g/kg)</span>
      <strong style="font-family:'Syne',sans-serif;">${saUpperZone} g/day</strong>
    </div>
    <div class="fd-item">
      <span>Daily Intracellular ATP Buffer</span>
      <strong style="color:var(--forest-ink);">5g Creatine Monohydrate</strong>
    </div>
    <div class="fd-item">
      <span>Insulin-Smart Carb Window</span>
      <strong>65% of Carbs Pre + Post Workout</strong>
    </div>
  `;

  // 3. 26-Week Tile Matrix
  const gridEl = document.getElementById("weekMatrixGrid");
  gridEl.innerHTML = PLAN_DATA.weeks.map(w => {
    const dt = addDays(w.monDate, 0);
    let daysDone = 0;
    [0, 1, 3, 4, 5].forEach(dIdx => {
      if (getDayCompletion(w.week, dIdx).isComplete) daysDone++;
    });
    const isCurrent = w.week === state.currentWeek;

    return `
      <button class="matrix-tile ${isCurrent ? "active-tile" : ""}" data-wk="${w.week}">
        <div class="mt-top">
          <span class="mt-wk">W${String(w.week).padStart(2, "0")} · ${w.blockType}</span>
          <span class="mt-date">${formatShortDate(dt)}</span>
        </div>
        <div class="mt-loads">Pull +${w.pullUpLoad}kg · Dip +${w.dipLoad}kg</div>
        <div class="mt-run">${w.muscleUpDrill.split(":")[0]} · ${daysDone}/5 days</div>
      </button>
    `;
  }).join("");

  gridEl.querySelectorAll(".matrix-tile").forEach(tile => {
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
  document.querySelectorAll(".mode-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === modeName);
  });
  document.querySelectorAll(".studio-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `mode-${modeName}`);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Rest Timer Pill
function formatClock(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startRestPill(seconds) {
  if (timerInterval) clearInterval(timerInterval);
  timerSeconds = seconds;
  const pill = document.getElementById("restPill");
  const clock = document.getElementById("rpClock");
  pill.classList.remove("hidden");
  clock.textContent = formatClock(timerSeconds);

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      clock.textContent = formatClock(timerSeconds);
    } else {
      clearInterval(timerInterval);
      clock.textContent = "NEXT SET!";
      setTimeout(() => pill.classList.add("hidden"), 2500);
    }
  }, 1000);
}

function renderAll() {
  renderWorkoutCanvas();
  renderMuscleUpLab();
  renderGeneticsAndMatrix();
}

document.addEventListener("DOMContentLoaded", () => {
  // 3-Way Studio Mode Switcher
  document.querySelectorAll(".mode-pill").forEach(btn => {
    btn.addEventListener("click", () => switchMode(btn.dataset.mode));
  });

  // Week Dial Arrows
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

  // Reset View to Week 1 Monday
  document.getElementById("jumpTodayQuickBtn").addEventListener("click", () => {
    state.currentWeek = 1;
    state.currentDayIndex = 0;
    switchMode("workout");
    saveState();
    renderAll();
  });

  // Toggle Plain-English Workout Decoder
  document.getElementById("toggleDecoderBtn").addEventListener("click", () => {
    state.decoderOpen = !state.decoderOpen;
    saveState();
    renderWorkoutCanvas();
  });

  // Tap Poster Sculpture Ring to Stamp Entire Day Complete
  document.getElementById("posterCompleteTrigger").addEventListener("click", () => {
    const weekObj = PLAN_DATA.weeks.find(w => w.week === state.currentWeek);
    const dayObj = PLAN_DATA.daysTemplate[state.currentDayIndex];
    const comp = getDayCompletion(state.currentWeek, state.currentDayIndex);
    const target = !comp.isComplete;

    dayObj.exercises.forEach(ex => {
      const numSets = getEffectiveSetsCount(ex, weekObj);
      for (let s = 0; s < numSets; s++) {
        const k = `w${state.currentWeek}_d${state.currentDayIndex}_${ex.id}_s${s}`;
        if (target) state.setChecks[k] = true;
        else delete state.setChecks[k];
      }
    });
    saveState();
    renderAll();
  });

  // Daily Note Input
  document.getElementById("dailyNoteInput").addEventListener("input", e => {
    const noteKey = `w${state.currentWeek}_d${state.currentDayIndex}`;
    state.dayNotes[noteKey] = e.target.value;
    saveState();
    const st = document.getElementById("fnSaveStatus");
    st.textContent = "Saved ✓";
    setTimeout(() => { st.textContent = "Synced to device"; }, 1200);
  });

  // Bodyweight Stepper
  document.getElementById("bwMinus").addEventListener("click", () => {
    state.bodyweightKg = Math.max(40, (parseFloat(state.bodyweightKg) || 75) - 0.5);
    saveState();
    renderGeneticsAndMatrix();
  });

  document.getElementById("bwPlus").addEventListener("click", () => {
    state.bodyweightKg = Math.min(150, (parseFloat(state.bodyweightKg) || 75) + 0.5);
    saveState();
    renderGeneticsAndMatrix();
  });

  // Clear Today & Export JSON
  document.getElementById("resetDayBtn").addEventListener("click", () => {
    const weekObj = PLAN_DATA.weeks.find(w => w.week === state.currentWeek);
    const dayObj = PLAN_DATA.daysTemplate[state.currentDayIndex];
    dayObj.exercises.forEach(ex => {
      const numSets = getEffectiveSetsCount(ex, weekObj);
      for (let s = 0; s < numSets; s++) {
        delete state.setChecks[`w${state.currentWeek}_d${state.currentDayIndex}_${ex.id}_s${s}`];
      }
    });
    saveState();
    switchMode("workout");
    renderAll();
  });

  document.getElementById("exportJsonBtn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const a = document.createElement("a");
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `hybrid26_w${state.currentWeek}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
  });

  // Rest Pill Controls
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

  // Initial Render
  switchMode(state.activeMode || "workout");
  renderAll();
});
