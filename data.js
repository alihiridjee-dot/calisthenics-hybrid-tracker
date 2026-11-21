// 26-Week Evidence-Based Hypertrophy, Muscle-Up & Protein Program
// Starts Saturday, 21 November 2026 -> Friday, 21 May 2027 (60-Min High-SFR Sessions)
// Synthesized from: Schoenfeld, Israetel (RP), Helms, Nippard & Wolf, Low & Zlat, Morton/Aragon/Phillips, Galpin/Schumann

const PLAN_DATA = {
  meta: {
    title: "26W Training",
    subtitle: "60-Min Hypertrophy · Muscle-Up · Protein",
    startDate: "2026-11-21", // Saturday, 21 Nov 2026
    heightCm: 183,
    heightLabel: "6'0\" (183 cm)",
    defaultBodyweightKg: 75,
    defaultGoalMode: "recomp"
  },

  programOverview: {
    summary: "5 training days (~60 min each) + 2 recovery days on a Sat–Fri cycle. Built to maximize muscle growth on a 6'0\", 75 kg frame while unlocking strict Bar Muscle-Ups and keeping waist fat tightly controlled.",
    weeklySplit: [
      { dayIndex: 0, day: "Sat", title: "Upper A · Heavy V-Taper", duration: "60m", targets: "Lats, chest, upper chest, mid-back, side delts, biceps & triceps" },
      { dayIndex: 1, day: "Sun", title: "Lower A · Quads & Core", duration: "60m", targets: "Quads, glutes, stretched hamstrings, soleus calves & lower abs" },
      { dayIndex: 2, day: "Mon", title: "Active Recovery", duration: "30m", targets: "Zone 2 incline walk (insulin sensitivity) + wrist/rotator prehab" },
      { dayIndex: 3, day: "Tue", title: "Upper B · Muscle-Up & Stretch", duration: "60m", targets: "Fresh Bar Muscle-Up skill + lats, chest stretch, side delts & triceps" },
      { dayIndex: 4, day: "Wed", title: "Lower B · Posterior & Core", duration: "58m", targets: "Hamstrings, glutes, gastroc calves, hollow-body core & quad flush" },
      { dayIndex: 5, day: "Thu", title: "Upper C · Weak-Points + Run", duration: "60m", targets: "3rd weekly hit on upper chest, rear/side delts & arms + quality run" },
      { dayIndex: 6, day: "Fri", title: "Full Rest", duration: "10m", targets: "Sleep, 152–160g protein & 5g creatine before Saturday progression" }
    ],
    mesocycles: [
      { weeks: "W1–W5", dates: "21 Nov – 25 Dec", name: "Foundation & Technique", focus: "Groove form & RIR (2–3 → 1 RIR), build weighted pull/dip base (+5→10kg), explosive sternum pulls; W5 deload." },
      { weeks: "W6–W9", dates: "26 Dec – 22 Jan", name: "Hypertrophy I", focus: "Ramp mechanical tension (2 → 0–1 RIR), pull +12.5kg / dip +12.5kg, C-curve & straight-bar dips, threshold runs; W9 deload." },
      { weeks: "W10–W13", dates: "23 Jan – 19 Feb", name: "Hypertrophy II", focus: "Overload pull +15kg / dip +15kg + weighted volume pulls, band-assisted Bar Muscle-Ups + lengthened partials; W13 deload." },
      { weeks: "W14–W17", dates: "20 Feb – 19 Mar", name: "Strength-Hypertrophy", focus: "Pull +17.5kg / dip +17.5kg, first unassisted Bar Muscle-Up singles in W16, 5K-pace intervals; W17 deload." },
      { weeks: "W18–W21", dates: "20 Mar – 16 Apr", name: "Intensification", focus: "Heavy pull +20kg / dip +20kg, clean unassisted Muscle-Up doubles, high-output 800m repeats; W21 deload." },
      { weeks: "W22–W26", dates: "17 Apr – 21 May", name: "Peak & Test", focus: "Peak loads (+22.5–25kg pull, +25–27.5kg dip), unbroken multi-rep Muscle-Ups (3–5+), W25 taper & W26 max test." }
    ]
  },

  expertFrameworks: [
    {
      name: "Dr. Brad Schoenfeld",
      role: "Hypertrophy Volume & Frequency",
      detail: "10–17 hard working sets per muscle group per week across 2–3×/week frequency, with 2–3 min inter-set recovery (Schoenfeld et al., 2016, 2017)."
    },
    {
      name: "Dr. Mike Israetel (RP Strength)",
      role: "Mesocycle RIR Wave & High-SFR Selection",
      detail: "Start each 4-week block near MEV (2–3 RIR), ramp to 0–1 RIR near MRV, then deload. Prioritize high Stimulus-to-Fatigue Ratio lifts (Hack Squat, Chest-Supported Row, Cables)."
    },
    {
      name: "Dr. Eric Helms (3DMJ)",
      role: "Double Progression & Lean Surplus",
      detail: "Keep load fixed until you hit the top of the rep range across all sets at target RIR, then add +1.25–2.5 kg. Cap lean bulk surplus at +5–8% (0.25–0.38% BW/wk; Helms 2023)."
    },
    {
      name: "Jeff Nippard & Dr. Milo Wolf",
      role: "Stretch-Mediated Hypertrophy",
      detail: "Prioritize exercises loaded in the stretched position (Seated Leg Curl, Overhead Tricep Ext, Incline Curl, Cable Lateral, Standing Calf) + 2–3 lengthened partials on final isolation sets (Wolf 2023; Maeo 2021, 2023)."
    },
    {
      name: "Steven Low & Mathew Zlat",
      role: "Weighted Calisthenics & Bar Muscle-Up",
      detail: "Anchor upper-body mass with heavy Weighted Pull-Ups & Dips; practice explosive Bar Muscle-Up transitions 100% fresh on Tuesday; pair with rotator cuff & wrist prehab."
    },
    {
      name: "Morton, Aragon, Phillips & Schumann",
      role: "Protein Distribution & Hybrid Conditioning",
      detail: "2.0–2.2 g/kg/day protein across 4 × ~40g meals (≥3g leucine/meal), 5g/day creatine, and cardio separated from heavy lifting to prevent interference (Schumann 2022)."
    }
  ],

  mealSlots: [
    { id: 0, short: "M1", label: "Breakfast", timing: "Within 90m of waking" },
    { id: 1, short: "M2", label: "Pre-Lift", timing: "90–120m before gym" },
    { id: 2, short: "M3", label: "Post-Lift", timing: "Within 90m post-lift" },
    { id: 3, short: "M4", label: "Dinner", timing: "2h before sleep" }
  ],

  southAsianMeals: [
    {
      tag: "Non-Veg · ~42g P",
      title: "Tandoori Chicken Breast + Rice or 2 Roti",
      macros: "42g P · 55g C · 8g F · ~3.6g Leucine",
      detail: "180g raw (135g cooked) marinated chicken breast grilled/air-fried + measured basmati rice or 2 phulkas + cucumber raita."
    },
    {
      tag: "Fast Bolus · ~40g P",
      title: "Whey Isolate + 0% Greek Yogurt / Skyr",
      macros: "40g P · 35g C · 3g F · ~4.2g Leucine",
      detail: "1 scoop whey isolate (25g P) mixed into 150g 0% Greek yogurt/skyr (15g P) + banana or berries + 5g creatine."
    },
    {
      tag: "Eggetarian · ~40g P",
      title: "Masala Egg Bhurji (3 Whole + 220g Whites)",
      macros: "40g P · 25g C · 15g F · ~3.4g Leucine",
      detail: "3 whole eggs (18g P) + 220g liquid egg whites (22g P) with onion, tomato, turmeric & chili + 1–2 sourdough slices or 1 roti."
    },
    {
      tag: "Veg · ~40g P",
      title: "Low-Fat Paneer / Tofu + Dal + Whey/Skyr",
      macros: "40g P · 38g C · 12g F · ~3.2g Leucine",
      detail: "150g low-fat paneer or firm tofu (~25g P) + 1 bowl thick moong/masoor dal (~9g P) + half scoop whey or 100g skyr (~10g P)."
    }
  ],

  weeklyVolumeAudit: [
    { muscle: "Lats & Mid-Back", sets: "14 sets (+4 skill)", freq: "2–3×/wk", pct: 92 },
    { muscle: "Chest (Upper + Mid)", sets: "14–17 sets", freq: "3×/wk", pct: 95 },
    { muscle: "Side & Rear Delts", sets: "13 sets (10 side)", freq: "3×/wk", pct: 90 },
    { muscle: "Biceps & Triceps", sets: "6–9 direct (15+ tot)", freq: "3×/wk", pct: 88 },
    { muscle: "Quads", sets: "12–13 sets", freq: "2×/wk", pct: 90 },
    { muscle: "Hamstrings & Glutes", sets: "10–13 sets", freq: "2×/wk", pct: 88 },
    { muscle: "Calves & Core", sets: "8 calves · 6 core", freq: "2×/wk", pct: 85 }
  ],

  researchCitations: [
    {
      study: "Morton et al. (2018) · British Journal of Sports Medicine",
      finding: "Meta-analysis of 49 RCTs (n=1,863): lean mass gains plateau around 1.62 g/kg/day on average, with a 95% CI upper bound of 2.2 g/kg/day.",
      application: "Sets your 120g floor (1.6 g/kg) and 152–160g daily target (2.0–2.13 g/kg) at 75 kg."
    },
    {
      study: "Schoenfeld & Aragon (2018) · J. Int. Soc. Sports Nutrition",
      finding: "Consuming 0.40–0.55 g/kg protein per meal across at least 4 meals maximizes daily muscle protein synthesis.",
      application: "Drives your 4 × 38–40g meal bolus tracker on the Workout tab."
    },
    {
      study: "Jäger et al. (2017) · ISSN Position Stand on Protein",
      finding: "Each feeding should deliver 20–40g high-quality protein with 2–3g leucine alongside complete EAAs every 3–4 hours.",
      application: "Guides the South Asian meal blueprints to pair dal/rice with leucine-dense proteins."
    },
    {
      study: "Barakat et al. (2020) · Strength & Conditioning Journal",
      finding: "Simultaneous muscle gain and fat loss (recomposition) is achievable with progressive overload + 2.0–2.6 g/kg protein.",
      application: "Powers Recomp mode (maintenance calories + 2.13 g/kg protein) to address skinny-fat composition."
    },
    {
      study: "Yajnik (2004); Lear et al. (2009); Misra & Khurana (2011); Iliodromiti et al. (2023)",
      finding: "South Asians commonly carry lower skeletal muscle mass and higher visceral/ectopic fat at normal BMI, limiting muscle glucose disposal.",
      application: "Prioritizes progressive hypertrophy (expanding your metabolic muscle sink) + post-meal walks and peri-workout carbs."
    },
    {
      study: "Helms et al. (2023) · Sports Medicine - Open",
      finding: "Small (~5%) vs large (~15%) surpluses produced similar hypertrophy; large surpluses mainly added body fat.",
      application: "Caps Lean Bulk mode at +7.5% (+0.25–0.38% BW/wk) to protect waist circumference."
    },
    {
      study: "Schoenfeld et al. (2016, 2017); Iversen et al. (2021) · Sports Medicine",
      finding: "≥2×/wk frequency, 10–20 sets/muscle/wk, and 2–3 min rests maximize growth. Antagonist paired sets cut session time ~40% while keeping recovery high.",
      application: "Structures all 60-minute sessions into A1/A2, B1/B2, and C1/C2 antagonist pairs."
    },
    {
      study: "Wolf et al. (2023); Maeo et al. (2021, 2023); Schumann et al. (2022); Kreider et al. (2017)",
      finding: "Stretched-position lifts and lengthened partials enhance growth; separated cardio avoids power interference; 5g/day creatine increases lean mass.",
      application: "Built into exercise selection (seated curl, overhead tricep, incline curl), Mon/Thu cardio split, and daily creatine."
    }
  ],

  muscleUpStages: [
    {
      stage: 1,
      weeks: "Weeks 1–4",
      title: "Explosive Sternum Pulls & False Grip",
      target: "Pull bar to lower chest · 15s false-grip hangs",
      cue: "Drive elbows violently down and back while leaning slightly back at the top—pull toward your sternum/belly, not your chin.",
      drill: "4 × 3 explosive chest-to-bar pull-ups (Tuesday fresh)"
    },
    {
      stage: 2,
      weeks: "Weeks 5–9",
      title: "C-Curve Arc & Straight-Bar Dips",
      target: "Smooth around-the-bar arc + 4 × 6 straight-bar dips",
      cue: "Start 30 cm behind the bar, glide into a slight hollow C-curve forward, then pull back and around the bar on the rebound.",
      drill: "3 × 3 C-curve pop-pulls + 3 × 6 straight-bar dips"
    },
    {
      stage: 3,
      weeks: "Weeks 10–15",
      title: "Band Muscle-Ups & Slow Negative Transitions",
      target: "4 × 2 band-assisted bar muscle-ups + 4s negative transitions",
      cue: "At peak pull height, snap your head and chest aggressively OVER the bar while rolling your wrists into top support.",
      drill: "4 × 2 light/medium-band bar muscle-ups"
    },
    {
      stage: 4,
      weeks: "Weeks 16–21",
      title: "First Unassisted Bar Muscle-Up Singles",
      target: "4 × 1–2 strict unassisted bar muscle-ups",
      cue: "With weighted pull-ups now at +17.5 to +20 kg, step up fresh at the start of Tuesday's session and hit crisp singles.",
      drill: "4 × 1–2 unassisted bar muscle-ups (90s rest)"
    },
    {
      stage: 5,
      weeks: "Weeks 22–26",
      title: "Multi-Rep Bar Muscle-Up Mastery",
      target: "3 × 3–5 unbroken clean bar muscle-ups",
      cue: "Control the drop from top support to load a smooth hollow rebound into the next repetition.",
      drill: "3 × 3–5 unbroken bar muscle-ups"
    }
  ],

  // 26 Weeks starting Saturday, 21 November 2026 -> Friday, 21 May 2027
  weeks: [
    {
      week: 1, startDate: "2026-11-21", phase: "Meso 1 · Foundation", blockType: "Accumulation", rirTarget: "2–3 RIR",
      pullUpLoad: 5, pullUpScheme: "4 × 4", dipLoad: 0, dipScheme: "4 × 8",
      volPullUps: "4 × 6 (BW)", muscleUpDrill: "Stage 1: 4 × 3 Explosive Sternum Pulls",
      qualityRun: "15m Tempo @ 10K effort (1.5% inc)"
    },
    {
      week: 2, startDate: "2026-11-28", phase: "Meso 1 · Foundation", blockType: "Accumulation", rirTarget: "2 RIR",
      pullUpLoad: 7.5, pullUpScheme: "4 × 4", dipLoad: 5, dipScheme: "4 × 8",
      volPullUps: "4 × 7 (BW)", muscleUpDrill: "Stage 1: 4 × 3 Explosive Sternum Pulls",
      qualityRun: "15m Tempo @ 10K effort (1.5% inc)"
    },
    {
      week: 3, startDate: "2026-12-05", phase: "Meso 1 · Foundation", blockType: "Accumulation", rirTarget: "1–2 RIR",
      pullUpLoad: 10, pullUpScheme: "4 × 4", dipLoad: 7.5, dipScheme: "4 × 8",
      volPullUps: "4 × 8 (BW)", muscleUpDrill: "Stage 1: 4 × 4 Explosive Sternum Pulls",
      qualityRun: "18m Tempo @ 10K effort (1.5% inc)"
    },
    {
      week: 4, startDate: "2026-12-12", phase: "Meso 1 · Foundation", blockType: "Overreach", rirTarget: "1 RIR",
      pullUpLoad: 10, pullUpScheme: "4 × 5", dipLoad: 10, dipScheme: "4 × 8",
      volPullUps: "4 × 9 (BW)", muscleUpDrill: "Stage 1: 4 × 4 High Belly-to-Bar Pulls",
      qualityRun: "18m Tempo @ 10K effort (1.5% inc)"
    },
    {
      week: 5, startDate: "2026-12-19", phase: "Meso 1 · Deload", blockType: "DELOAD", rirTarget: "3–4 RIR",
      pullUpLoad: 7.5, pullUpScheme: "3 × 4", dipLoad: 5, dipScheme: "3 × 6",
      volPullUps: "3 × 6 (BW)", muscleUpDrill: "Stage 2: 3 × 3 Light C-Curve Pop-Pulls",
      qualityRun: "15m Easy Zone 2 Jog"
    },
    {
      week: 6, startDate: "2026-12-26", phase: "Meso 2 · Hypertrophy I", blockType: "Accumulation", rirTarget: "2 RIR",
      pullUpLoad: 10, pullUpScheme: "4 × 6", dipLoad: 12.5, dipScheme: "4 × 6",
      volPullUps: "4 × 9 (BW)", muscleUpDrill: "Stage 2: 4 × 3 C-Curve + 5 Straight-Bar Dips",
      qualityRun: "3 × 5m Threshold (90s jog)"
    },
    {
      week: 7, startDate: "2027-01-02", phase: "Meso 2 · Hypertrophy I", blockType: "Accumulation", rirTarget: "1–2 RIR",
      pullUpLoad: 12.5, pullUpScheme: "4 × 4", dipLoad: 12.5, dipScheme: "4 × 7",
      volPullUps: "4 × 10 (BW)", muscleUpDrill: "Stage 2: 4 × 3 C-Curve + 6 Straight-Bar Dips",
      qualityRun: "3 × 5m Threshold (90s jog)"
    },
    {
      week: 8, startDate: "2027-01-09", phase: "Meso 2 · Hypertrophy I", blockType: "Overreach", rirTarget: "0–1 RIR",
      pullUpLoad: 12.5, pullUpScheme: "4 × 5", dipLoad: 12.5, dipScheme: "4 × 8",
      volPullUps: "4 × 10 (BW)", muscleUpDrill: "Stage 2: 4 × 4 C-Curve Hip-to-Bar Pulls",
      qualityRun: "3 × 6m Threshold (90s jog)"
    },
    {
      week: 9, startDate: "2027-01-16", phase: "Meso 2 · Deload", blockType: "DELOAD", rirTarget: "3–4 RIR",
      pullUpLoad: 10, pullUpScheme: "3 × 4", dipLoad: 10, dipScheme: "3 × 6",
      volPullUps: "3 × 7 (BW)", muscleUpDrill: "Stage 2: 3 × 2 Smooth Transition Drills",
      qualityRun: "15m Easy Zone 2 Jog"
    },
    {
      week: 10, startDate: "2027-01-23", phase: "Meso 3 · Hypertrophy II", blockType: "Accumulation", rirTarget: "2 RIR",
      pullUpLoad: 12.5, pullUpScheme: "4 × 6", dipLoad: 15, dipScheme: "4 × 6",
      volPullUps: "4 × 7 (+2.5kg)", muscleUpDrill: "Stage 3: 4 × 2 Band Bar Muscle-Ups",
      qualityRun: "4 × 4m Threshold (90s jog)"
    },
    {
      week: 11, startDate: "2027-01-30", phase: "Meso 3 · Hypertrophy II", blockType: "Accumulation", rirTarget: "1–2 RIR",
      pullUpLoad: 15, pullUpScheme: "4 × 4", dipLoad: 15, dipScheme: "4 × 7",
      volPullUps: "4 × 8 (+2.5kg)", muscleUpDrill: "Stage 3: 4 × 2 Band Bar Muscle-Ups",
      qualityRun: "4 × 4m Threshold (90s jog)"
    },
    {
      week: 12, startDate: "2027-02-06", phase: "Meso 3 · Hypertrophy II", blockType: "Overreach", rirTarget: "0–1 RIR",
      pullUpLoad: 15, pullUpScheme: "4 × 5", dipLoad: 15, dipScheme: "4 × 8",
      volPullUps: "4 × 9 (+2.5kg)", muscleUpDrill: "Stage 3: 4 × 3 Light-Band Muscle-Ups",
      qualityRun: "18m Continuous Threshold"
    },
    {
      week: 13, startDate: "2027-02-13", phase: "Meso 3 · Deload", blockType: "DELOAD", rirTarget: "3–4 RIR",
      pullUpLoad: 11.25, pullUpScheme: "3 × 4", dipLoad: 11.25, dipScheme: "3 × 6",
      volPullUps: "3 × 7 (BW)", muscleUpDrill: "Stage 3: 3 × 2 Light-Band Muscle-Ups",
      qualityRun: "15m Easy Zone 2 Jog"
    },
    {
      week: 14, startDate: "2027-02-20", phase: "Meso 4 · Strength-Hyp", blockType: "Accumulation", rirTarget: "2 RIR",
      pullUpLoad: 15, pullUpScheme: "4 × 6", dipLoad: 17.5, dipScheme: "4 × 6",
      volPullUps: "4 × 7 (+5kg)", muscleUpDrill: "Stage 3: 4 × 3 Thin-Band Muscle-Ups",
      qualityRun: "4 × 3m @ 5K Pace (90s jog)"
    },
    {
      week: 15, startDate: "2027-02-27", phase: "Meso 4 · Strength-Hyp", blockType: "Accumulation", rirTarget: "1–2 RIR",
      pullUpLoad: 17.5, pullUpScheme: "4 × 4", dipLoad: 17.5, dipScheme: "4 × 7",
      volPullUps: "4 × 8 (+5kg)", muscleUpDrill: "Stage 3: 4 × 3 Thin-Band + 4s Negatives",
      qualityRun: "5 × 3m @ 5K Pace (90s jog)"
    },
    {
      week: 16, startDate: "2027-03-06", phase: "Meso 4 · Strength-Hyp", blockType: "Overreach", rirTarget: "0–1 RIR",
      pullUpLoad: 17.5, pullUpScheme: "4 × 5", dipLoad: 17.5, dipScheme: "4 × 8",
      volPullUps: "4 × 9 (+5kg)", muscleUpDrill: "Stage 4: 4 × 1 Unassisted Muscle-Ups",
      qualityRun: "5 × 3m @ 5K Pace (90s jog)"
    },
    {
      week: 17, startDate: "2027-03-13", phase: "Meso 4 · Deload", blockType: "DELOAD", rirTarget: "3–4 RIR",
      pullUpLoad: 12.5, pullUpScheme: "3 × 4", dipLoad: 12.5, dipScheme: "3 × 6",
      volPullUps: "3 × 8 (BW)", muscleUpDrill: "Stage 4: 3 × 1 Crisp Muscle-Up Single",
      qualityRun: "15m Easy Zone 2 Jog"
    },
    {
      week: 18, startDate: "2027-03-20", phase: "Meso 5 · Intensify", blockType: "Accumulation", rirTarget: "2 RIR",
      pullUpLoad: 17.5, pullUpScheme: "4 × 6", dipLoad: 20, dipScheme: "4 × 6",
      volPullUps: "4 × 9 (+5kg)", muscleUpDrill: "Stage 4: 4 × 1–2 Unassisted Muscle-Ups",
      qualityRun: "5 × 800m @ 5K Pace (90s jog)"
    },
    {
      week: 19, startDate: "2027-03-27", phase: "Meso 5 · Intensify", blockType: "Accumulation", rirTarget: "1–2 RIR",
      pullUpLoad: 20, pullUpScheme: "4 × 4", dipLoad: 20, dipScheme: "4 × 7",
      volPullUps: "4 × 7 (+7.5kg)", muscleUpDrill: "Stage 4: 4 × 2 Unassisted Muscle-Ups",
      qualityRun: "5 × 800m @ 5K Pace (90s jog)"
    },
    {
      week: 20, startDate: "2027-04-03", phase: "Meso 5 · Intensify", blockType: "Overreach", rirTarget: "0–1 RIR",
      pullUpLoad: 20, pullUpScheme: "4 × 5", dipLoad: 20, dipScheme: "4 × 8",
      volPullUps: "4 × 8 (+7.5kg)", muscleUpDrill: "Stage 4: 4 × 2 Strict Unassisted MU",
      qualityRun: "6 × 800m @ 5K Pace (90s jog)"
    },
    {
      week: 21, startDate: "2027-04-10", phase: "Meso 5 · Deload", blockType: "DELOAD", rirTarget: "3–4 RIR",
      pullUpLoad: 15, pullUpScheme: "3 × 4", dipLoad: 15, dipScheme: "3 × 6",
      volPullUps: "3 × 8 (BW)", muscleUpDrill: "Stage 4: 3 × 1 Effortless MU Single",
      qualityRun: "15m Easy Zone 2 Jog"
    },
    {
      week: 22, startDate: "2027-04-17", phase: "Meso 6 · Peak", blockType: "Intensification", rirTarget: "1–2 RIR",
      pullUpLoad: 20, pullUpScheme: "4 × 6", dipLoad: 22.5, dipScheme: "4 × 6",
      volPullUps: "4 × 9 (+7.5kg)", muscleUpDrill: "Stage 5: 3 × 3 Unbroken Muscle-Ups",
      qualityRun: "6 × 400m @ Fast 5K (60s rec)"
    },
    {
      week: 23, startDate: "2027-04-24", phase: "Meso 6 · Peak", blockType: "Intensification", rirTarget: "1 RIR",
      pullUpLoad: 22.5, pullUpScheme: "4 × 4", dipLoad: 22.5, dipScheme: "4 × 7",
      volPullUps: "4 × 9 (+7.5kg)", muscleUpDrill: "Stage 5: 3 × 3–4 Unbroken Muscle-Ups",
      qualityRun: "7 × 400m @ Fast 5K (60s rec)"
    },
    {
      week: 24, startDate: "2027-05-01", phase: "Meso 6 · Peak", blockType: "Overreach", rirTarget: "0–1 RIR",
      pullUpLoad: 22.5, pullUpScheme: "4 × 5", dipLoad: 25, dipScheme: "4 × 6",
      volPullUps: "4 × 8 (+10kg)", muscleUpDrill: "Stage 5: 3 × 4 Unbroken Muscle-Ups",
      qualityRun: "8 × 400m @ Fast 5K (60s rec)"
    },
    {
      week: 25, startDate: "2027-05-08", phase: "Meso 6 · Taper", blockType: "Taper", rirTarget: "3 RIR",
      pullUpLoad: 15, pullUpScheme: "3 × 4", dipLoad: 15, dipScheme: "3 × 6",
      volPullUps: "3 × 8 (BW)", muscleUpDrill: "Stage 5: 2 × 2 Crisp Taper MU",
      qualityRun: "15m Easy + 4×20s Strides"
    },
    {
      week: 26, startDate: "2027-05-15", phase: "Meso 6 · Peak Test", blockType: "Peak Test", rirTarget: "Max Test",
      pullUpLoad: 25, pullUpScheme: "Max @ +25kg", dipLoad: 27.5, dipScheme: "4 × 6 / Max",
      volPullUps: "Max Strict BW (18+)", muscleUpDrill: "Stage 5 Test: Max Unbroken MU (5+)",
      qualityRun: "5K or 3K Treadmill Time Trial"
    }
  ],

  // 7-Day Sat -> Fri Microcycle (Starts Saturday, 21 Nov 2026)
  daysTemplate: [
    {
      dayIndex: 0,
      dayName: "Saturday",
      shortName: "SAT",
      letter: "S",
      sessionTitle: "Upper A · Heavy V-Taper",
      sessionType: "strength",
      estimatedMinutes: 60,
      summary: "Antagonist pull/push pairs (~3m recovery per muscle) + side delts & arms.",
      exercises: [
        {
          id: "sat-1", pair: "A1", name: "Weighted Pull-Ups", defaultSets: 4, reps: "4–6", restSeconds: 90,
          dynamicKey: "upperA_pullup", loggable: true,
          muscles: "Lats, Teres Major, Brachialis",
          cues: "Full dead hang to sternum/throat; 2s controlled lowering. Alternate with A2 Dips (90s rest between).",
          avoid: "Half-repping the bottom stretch or rushing rest under 75s."
        },
        {
          id: "sat-2", pair: "A2", name: "Weighted Parallel Bar Dips", defaultSets: 4, reps: "6–8", restSeconds: 90,
          dynamicKey: "upperA_dip", loggable: true,
          muscles: "Chest, Front Delts, Triceps",
          cues: "30° forward torso lean; 2–3s controlled descent to parallel or slightly below; crisp lockout.",
          avoid: "Shrugging shoulders up or bouncing out of the bottom stretch."
        },
        {
          id: "sat-3", pair: "B1", name: "30° Incline Dumbbell Press", defaultSets: 3, reps: "8–10", restSeconds: 75,
          loggable: true, lengthened: true,
          muscles: "Upper Chest (Clavicular), Front Delts",
          cues: "Low 30° bench, elbows ~45°. Pause 1 full second in the deep bottom stretch on every rep.",
          avoid: "Steep 45–60° incline that shifts tension to front delts."
        },
        {
          id: "sat-4", pair: "B2", name: "Chest-Supported Row", defaultSets: 3, reps: "8–10", restSeconds: 75,
          loggable: true, lengthened: true,
          muscles: "Mid-Back, Rhomboids, Traps, Lats",
          cues: "High-SFR mid-back builder. Protract shoulders fully at bottom stretch, pull elbows back with 1s squeeze.",
          avoid: "Lifting chest off pad or heaving with lower-back momentum."
        },
        {
          id: "sat-5", pair: "C1", name: "Cable Lateral Raise", defaultSets: 3, reps: "12–15", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Lateral Deltoids (Shoulder Width)",
          cues: "Pulley at wrist height for peak tension in the stretched bottom. Sweep out wide without shrugging traps.",
          avoid: "Swinging torso or lifting above shoulder height."
        },
        {
          id: "sat-6", pair: "C2", name: "45° Incline Dumbbell Curl", defaultSets: 3, reps: "10–12", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Biceps (Stretched Long Head)",
          cues: "Elbows pinned behind torso; lower to full straight-arm stretch. Add 2–3 lengthened partials on final set.",
          avoid: "Drifting elbows forward on the way up."
        },
        {
          id: "sat-7", pair: "D", name: "Overhead Cable Tricep Extension", defaultSets: 3, reps: "10–12", restSeconds: 75,
          loggable: true, lengthened: true,
          muscles: "Triceps Long Head",
          cues: "Maeo et al. (2023): overhead stretch drives ~40% more long-head growth. Deep controlled stretch behind head.",
          avoid: "Cutting bottom range of motion short."
        }
      ]
    },
    {
      dayIndex: 1,
      dayName: "Sunday",
      shortName: "SUN",
      letter: "S",
      sessionTitle: "Lower A · Quads, Glutes & Core",
      sessionType: "lower",
      estimatedMinutes: 60,
      summary: "High-SFR quad hypertrophy for long 6'0\" femurs, stretched hamstrings & abs.",
      exercises: [
        {
          id: "sun-1", pair: "1", name: "Hack Squat or Heel-Elevated Squat", defaultSets: 4, reps: "6–8", restSeconds: 150,
          loggable: true,
          muscles: "Quads, Glutes, Adductors",
          cues: "2–3s descent to full knee flexion (hamstrings on calves). Full 2.5 min rest for maximum tension.",
          avoid: "Stopping above parallel or bouncing out of the hole."
        },
        {
          id: "sun-2", pair: "A1", name: "DB Bulgarian Split Squat", defaultSets: 3, reps: "8–10 / leg", restSeconds: 60,
          loggable: true,
          muscles: "Quads, Glutes, Hip Stabilizers",
          cues: "Slight forward lean; lower back knee toward pad/floor; keep 90% of load on front mid-foot.",
          avoid: "Pushing off the rear foot."
        },
        {
          id: "sun-3", pair: "A2", name: "Seated Calf Raise", defaultSets: 4, reps: "12–15", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Soleus",
          cues: "Mandatory 2-second dead pause in the deep bottom stretch on every rep. Add 3 lengthened partials on set 4.",
          avoid: "Bouncing rapidly off the Achilles tendon."
        },
        {
          id: "sun-4", pair: "B1", name: "Seated Leg Extension", defaultSets: 3, reps: "12–15", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Rectus Femoris & VMO",
          cues: "Pull hips into seat, extend fully with 1s squeeze, 2–3s controlled lowering.",
          avoid: "Swinging weight stack or lifting hips off pad."
        },
        {
          id: "sun-5", pair: "B2", name: "Seated Leg Curl", defaultSets: 3, reps: "10–12", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Hamstrings (Long Length)",
          cues: "Maeo et al. (2021): seated hip flexion yields superior hamstring growth. Lock thigh pad tight; lean slightly forward.",
          avoid: "Slamming weight stack between reps."
        },
        {
          id: "sun-6", pair: "C", name: "Strict Hanging Leg Raise", defaultSets: 3, reps: "10–15", restSeconds: 60,
          loggable: false,
          muscles: "Rectus Abdominis, Lower Abs",
          cues: "Press lightly down on bar to stop swing; curl tailbone upward at the top so pelvis flexes.",
          avoid: "Swinging legs with a flat lower back."
        }
      ]
    },
    {
      dayIndex: 2,
      dayName: "Monday",
      shortName: "MON",
      letter: "M",
      sessionTitle: "Active Recovery & Zone 2",
      sessionType: "rest",
      estimatedMinutes: 30,
      summary: "Low-impact Zone 2 walk for insulin sensitivity + Muscle-Up wrist prehab.",
      exercises: [
        {
          id: "mon-1", pair: "1", name: "Zone 2 Incline Walk", defaultSets: 1, reps: "25 min", restSeconds: 0,
          loggable: false,
          muscles: "GLUT4 Glucose Disposal, Aerobic Base",
          cues: "8–10% incline @ 4.8–5.5 km/h (115–130 bpm) or brisk post-dinner walk. Zero leg interference. Hit full protein today.",
          avoid: "Cutting protein on rest days—muscle synthesis stays elevated 24–48h post-lifting."
        },
        {
          id: "mon-2", pair: "2", name: "False-Grip Wrist & Shoulder Prehab", defaultSets: 2, reps: "15 slow reps", restSeconds: 45,
          loggable: false,
          muscles: "Wrist Flexors, Pronator Teres, Rotator Cuff",
          cues: "Light 2–3 kg forearm pronation/supination curls + 30s gentle wrist stretch + 10 band shoulder dislocates.",
          avoid: "Skipping forearm prep before Tuesday's explosive bar work."
        }
      ]
    },
    {
      dayIndex: 3,
      dayName: "Tuesday",
      shortName: "TUE",
      letter: "T",
      sessionTitle: "Upper B · Muscle-Up & Stretch",
      sessionType: "strength",
      estimatedMinutes: 60,
      summary: "Fresh Muscle-Up skill primer + volume pull/dip pairs + stretched-position isolation.",
      exercises: [
        {
          id: "tue-mu", pair: "0", name: "Bar Muscle-Up Progression (Fresh)", defaultSets: 4, reps: "1–4 explosive", restSeconds: 90,
          dynamicKey: "thu_muscleup", loggable: false, isSkill: true,
          muscles: "Explosive Lats, Transition, Hollow Core",
          cues: "Always done FIRST while 100% fresh. Arc around the bar in a C-curve and snap chest over the bar.",
          avoid: "Pulling vertically straight into the steel bar."
        },
        {
          id: "tue-1", pair: "A1", name: "Volume Pull-Ups", defaultSets: 4, reps: "6–10", restSeconds: 75,
          dynamicKey: "upperB_volPullup", loggable: true,
          muscles: "Lats, Teres Major, Biceps",
          cues: "Crisp explosive pull, 2s controlled lowering to dead hang. Alternate with A2 Tempo Dips.",
          avoid: "Grinding to failure on Set 1 and losing reps later."
        },
        {
          id: "tue-2", pair: "A2", name: "Tempo Parallel / Straight-Bar Dips", defaultSets: 4, reps: "8–12", restSeconds: 75,
          loggable: true,
          muscles: "Pecs, Front Delts, Triceps",
          cues: "3s lowering, 1s bottom pause, explosive press. Do 1–2 sets on a straight bar to reinforce Muscle-Up lockout.",
          avoid: "Rushing the 3-second lowering phase."
        },
        {
          id: "tue-3", pair: "B1", name: "Seated Cable Fly / Pec Deck", defaultSets: 3, reps: "10–12", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Pectoralis Major (Deep Stretch)",
          cues: "Direct pec load without tricep fatigue. Slow 3s open into deep stretch; 2–3 lengthened partials on final set.",
          avoid: "Bending elbows 90° and turning it into a press."
        },
        {
          id: "tue-4", pair: "B2", name: "Single-Arm Cable Row", defaultSets: 3, reps: "10–12 / side", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Lower Lats, Mid-Back",
          cues: "Reach slightly forward for full lat stretch, then drive elbow tucked tightly toward your hip pocket.",
          avoid: "Twisting your torso to yank the handle."
        },
        {
          id: "tue-5", pair: "C1", name: "Cable Lateral Raise", defaultSets: 3, reps: "12–15", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Lateral Deltoids",
          cues: "Cable at wrist height running across thighs; control the 2–3s descent all the way into the bottom stretch.",
          avoid: "Using body momentum."
        },
        {
          id: "tue-6", pair: "C2", name: "Overhead Rope Tricep Extension", defaultSets: 3, reps: "10–12", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Triceps Long Head",
          cues: "Second weekly stretched-position hit on long head; full stretch behind head on every rep.",
          avoid: "Flaring elbows excessively or cutting depth."
        }
      ]
    },
    {
      dayIndex: 4,
      dayName: "Wednesday",
      shortName: "WED",
      letter: "W",
      sessionTitle: "Lower B · Posterior & Core",
      sessionType: "lower",
      estimatedMinutes: 58,
      summary: "Heavy hinge, long-length hamstrings, straight-knee calves & hollow core.",
      exercises: [
        {
          id: "wed-1", pair: "1", name: "Romanian Deadlift (with Straps)", defaultSets: 4, reps: "8–10", restSeconds: 150,
          loggable: true,
          muscles: "Hamstrings, Glutes, Erectors",
          cues: "Use straps so grip never limits load. Lock 15° knee bend, push hips straight back, stop mid-shin at max stretch.",
          avoid: "Rounding lower back to chase extra depth."
        },
        {
          id: "wed-2", pair: "A1", name: "Seated Leg Curl", defaultSets: 3, reps: "10–12", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Hamstrings",
          cues: "Lean slightly forward over pad; 1s squeeze under seat, 2–3s controlled return.",
          avoid: "Slamming weight stack."
        },
        {
          id: "wed-3", pair: "A2", name: "Standing Calf Raise", defaultSets: 4, reps: "10–12", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Gastrocnemius",
          cues: "Straight knees (unlocked); mandatory 2s dead stretch at bottom, 1s squeeze at top. Lengthened partials on set 4.",
          avoid: "Bending knees or bouncing out of the bottom."
        },
        {
          id: "wed-4", pair: "B1", name: "Hip Thrust or High-Foot Leg Press", defaultSets: 3, reps: "10–12", restSeconds: 60,
          loggable: true,
          muscles: "Gluteus Maximus, Adductors",
          cues: "Chin tucked, ribs down, full hip lockout with 1s glute squeeze.",
          avoid: "Hyperextending lower back at the top."
        },
        {
          id: "wed-5", pair: "B2", name: "Ab Wheel Rollout", defaultSets: 3, reps: "10–12", restSeconds: 60,
          loggable: false,
          muscles: "Core (Anti-Extension), Lats",
          cues: "Tuck pelvis under (hollow body), roll out as far as control allows without lower-back sag.",
          avoid: "Letting hips sag toward the floor."
        },
        {
          id: "wed-6", pair: "C", name: "DB Walking Lunges", defaultSets: 2, reps: "12 / leg", restSeconds: 75,
          loggable: true,
          muscles: "Quads, Glutes",
          cues: "Crisp 2×/week quad frequency finisher without wrecking legs before Thursday's run.",
          avoid: "Crashing rear knee onto floor."
        }
      ]
    },
    {
      dayIndex: 5,
      dayName: "Thursday",
      shortName: "THU",
      letter: "T",
      sessionTitle: "Upper C · Weak-Points + Run",
      sessionType: "strength-run",
      estimatedMinutes: 60,
      summary: "3rd weekly hit for upper chest, side/rear delts & arms + 26W quality run.",
      exercises: [
        {
          id: "thu-1", pair: "A1", name: "Incline Machine / DB Press", defaultSets: 3, reps: "10–12", restSeconds: 60,
          loggable: true, lengthened: true,
          muscles: "Upper Chest",
          cues: "Smooth 3×/week upper-chest stimulus with low joint fatigue so Saturday dips stay fresh.",
          avoid: "Grinding ugly reps."
        },
        {
          id: "thu-2", pair: "A2", name: "Rope Face Pull / Reverse Pec Deck", defaultSets: 3, reps: "15", restSeconds: 60,
          loggable: true,
          muscles: "Rear Delts, External Rotators",
          cues: "Pull rope apart to forehead/temples with external rotation; hold 1s peak squeeze.",
          avoid: "Pulling low toward the chest."
        },
        {
          id: "thu-3", pair: "B1", name: "Seated DB Lateral Raise", defaultSets: 4, reps: "12–15", restSeconds: 60,
          loggable: true,
          muscles: "Lateral Deltoids",
          cues: "Seated upright removes momentum—completes 10 high-quality direct side-delt sets/week.",
          avoid: "Leaning back into a front raise."
        },
        {
          id: "thu-4", pair: "B2", name: "Hammer Curl + Rope Pushdown", defaultSets: 3, reps: "10–12 + 12–15", restSeconds: 60,
          loggable: true,
          muscles: "Brachialis, Forearms, Triceps",
          cues: "Strict thumbs-up Hammer Curls (grip/arm thickness) paired directly with clean Rope Pushdowns.",
          avoid: "Swinging elbows forward on curls or rolling shoulders on pushdowns."
        },
        {
          id: "thu-5", pair: "C", name: "Quality Treadmill Run", defaultSets: 1, reps: "5m WU + Main + 4m CD", restSeconds: 0,
          dynamicKey: "thu_treadmill", loggable: false,
          muscles: "VO2max, Lactate Threshold, Insulin Sensitivity",
          cues: "1.0–1.5% incline. 5m easy warm-up → weekly main set → 4m walk cool-down. 72h before Sunday's heavy legs.",
          avoid: "Turning controlled threshold work into an all-out sprint."
        }
      ]
    },
    {
      dayIndex: 6,
      dayName: "Friday",
      shortName: "FRI",
      letter: "F",
      sessionTitle: "Full Rest & Recovery",
      sessionType: "rest",
      estimatedMinutes: 10,
      summary: "Hit full protein + 5g creatine + 8h sleep before Saturday's heavy progression.",
      exercises: [
        {
          id: "fri-1", pair: "1", name: "Nutrition, Sleep & Load Check", defaultSets: 1, reps: "10 min", restSeconds: 0,
          loggable: false,
          muscles: "Systemic & Myofibrillar Supercompensation",
          cues: "Log all 4 protein feedings + 5g creatine, check weekly weight trend, and get 7.5–8.5h sleep for Saturday Upper A.",
          avoid: "Under-eating protein on your full rest day."
        }
      ]
    }
  ]
};
