// 26-Week Evidence-Based Hypertrophy, Muscle-Up & Protein Program
// Starts Saturday, 21 November 2026 -> Friday, 21 May 2027 (60-Min Sessions)

const PLAN_DATA = {
  meta: {
    title: "26W Training",
    startDate: "2026-11-21",
    heightCm: 183,
    heightLabel: "6'0\"",
    defaultBodyweightKg: 75,
    defaultGoalMode: "recomp"
  },

  programOverview: {
    summary: "5 workouts (~60 min) + 2 recovery days. Built for a 6'0\", 75 kg frame.",
    weeklySplit: [
      { dayIndex: 0, day: "Sat", title: "Upper A · Heavy", duration: "60m", targets: "Lats · Chest · Mid-Back · Side Delts · Arms" },
      { dayIndex: 1, day: "Sun", title: "Lower A · Quads", duration: "60m", targets: "Quads · Glutes · Hamstrings · Calves · Abs" },
      { dayIndex: 2, day: "Mon", title: "Active Recovery", duration: "30m", targets: "Zone 2 incline walk · Wrist & shoulder prehab" },
      { dayIndex: 3, day: "Tue", title: "Upper B · Muscle-Up", duration: "60m", targets: "Bar Muscle-Up skill · Lats · Chest · Delts · Triceps" },
      { dayIndex: 4, day: "Wed", title: "Lower B · Posterior", duration: "58m", targets: "Hamstrings · Glutes · Calves · Core · Lunges" },
      { dayIndex: 5, day: "Thu", title: "Upper C · Frame + Run", duration: "60m", targets: "Upper Chest · Rear/Side Delts · Arms · Quality Run" },
      { dayIndex: 6, day: "Fri", title: "Full Rest", duration: "Rest", targets: "Sleep 8h · Full protein · 5g creatine" }
    ],
    mesocycles: [
      { weeks: "W1–5", dates: "21 Nov – 25 Dec", name: "Foundation", focus: "Pull +5→10 kg · Sternum pulls · W5 deload" },
      { weeks: "W6–9", dates: "26 Dec – 22 Jan", name: "Hypertrophy I", focus: "Pull/Dip +12.5 kg · C-curve & bar dips · W9 deload" },
      { weeks: "W10–13", dates: "23 Jan – 19 Feb", name: "Hypertrophy II", focus: "Pull/Dip +15 kg · Band Muscle-Ups · W13 deload" },
      { weeks: "W14–17", dates: "20 Feb – 19 Mar", name: "Strength-Hyp", focus: "Pull/Dip +17.5 kg · 1st unassisted MU (W16) · W17 deload" },
      { weeks: "W18–21", dates: "20 Mar – 16 Apr", name: "Intensify", focus: "Pull/Dip +20 kg · Unassisted MU doubles · W21 deload" },
      { weeks: "W22–26", dates: "17 Apr – 21 May", name: "Peak & Test", focus: "Pull +25 / Dip +27.5 kg · 3–5+ MU · W25 taper" }
    ]
  },

  expertFrameworks: [
    { name: "Dr. Brad Schoenfeld", role: "Volume & Frequency", detail: "10–17 hard sets/muscle/week across 2–3×/week with 2–3m rest." },
    { name: "Dr. Mike Israetel (RP)", role: "RIR Waves & SFR", detail: "Ramp 2–3 RIR → 0–1 RIR → deload using high-SFR lifts." },
    { name: "Dr. Eric Helms", role: "Progression & Surplus", detail: "Double progression logbook; cap lean bulk at +5–8% calories." },
    { name: "Jeff Nippard & Dr. Milo Wolf", role: "Stretched Hypertrophy", detail: "Deep-stretch lifts + 2–3 lengthened partials on final isolation sets." },
    { name: "Steven Low & Mathew Zlat", role: "Weighted Calisthenics", detail: "Heavy weighted pull-ups & dips + fresh Tuesday Muscle-Up skill." },
    { name: "Morton, Aragon & Schumann", role: "Protein & Cardio", detail: "2.0–2.2 g/kg across 4 meals; cardio separated from heavy legs." }
  ],

  mealSlots: [
    { id: 0, short: "M1", label: "Breakfast", timing: "Morning" },
    { id: 1, short: "M2", label: "Pre-Lift", timing: "90m pre-gym" },
    { id: 2, short: "M3", label: "Post-Lift", timing: "Post-gym" },
    { id: 3, short: "M4", label: "Dinner", timing: "Evening" }
  ],

  southAsianMeals: [
    {
      tag: "42g P",
      title: "Tandoori Chicken + Rice or 2 Roti",
      macros: "42g P · 55g C · 8g F",
      detail: "180g raw chicken breast, measured basmati or 2 roti, raita."
    },
    {
      tag: "40g P",
      title: "Whey + 0% Greek Yogurt / Skyr",
      macros: "40g P · 35g C · 3g F",
      detail: "1 scoop whey isolate, 150g 0% skyr/yogurt, fruit, 5g creatine."
    },
    {
      tag: "40g P",
      title: "Masala Egg Bhurji",
      macros: "40g P · 25g C · 15g F",
      detail: "3 whole eggs + 220g egg whites, 1–2 sourdough toast or 1 roti."
    },
    {
      tag: "40g P",
      title: "Paneer / Tofu + Dal + Whey",
      macros: "40g P · 38g C · 12g F",
      detail: "150g low-fat paneer or firm tofu, 1 bowl dal, ½ scoop whey."
    }
  ],

  weeklyVolumeAudit: [
    { muscle: "Back (Lats & Mid)", sets: "14 sets", freq: "2–3×/wk", pct: 92 },
    { muscle: "Chest", sets: "14–17 sets", freq: "3×/wk", pct: 95 },
    { muscle: "Side & Rear Delts", sets: "13 sets (10 side)", freq: "3×/wk", pct: 90 },
    { muscle: "Arms (Bi + Tri)", sets: "15+ total sets", freq: "3×/wk", pct: 88 },
    { muscle: "Quads", sets: "12–13 sets", freq: "2×/wk", pct: 90 },
    { muscle: "Hamstrings & Glutes", sets: "10–13 sets", freq: "2×/wk", pct: 88 },
    { muscle: "Calves & Core", sets: "8 calves · 6 core", freq: "2×/wk", pct: 85 }
  ],

  researchCitations: [
    {
      study: "Morton et al. (2018) · BJSM",
      finding: "49 RCTs (n=1,863): muscle gains plateau at 1.62 g/kg/day (95% CI up to 2.2 g/kg).",
      application: "120g daily floor · 152–160g target."
    },
    {
      study: "Schoenfeld & Aragon (2018) · JISSN",
      finding: "0.40–0.55 g/kg protein per meal across 4+ meals maximizes daily synthesis.",
      application: "4 × 38–40g meal tracker."
    },
    {
      study: "Jäger et al. (2017) · ISSN",
      finding: "20–40g complete protein (2–3g leucine) per meal every 3–4h.",
      application: "Leucine-dense South Asian meal swaps."
    },
    {
      study: "Barakat et al. (2020) · SCJ",
      finding: "Trained lifters can build muscle and lose fat together at 2.0–2.6 g/kg protein.",
      application: "Recomp mode (maintenance + 2.13 g/kg)."
    },
    {
      study: "Yajnik; Lear; Misra; Iliodromiti",
      finding: "South Asians often carry less muscle and more visceral fat at normal BMI.",
      application: "Hypertrophy focus + post-meal walks."
    },
    {
      study: "Helms et al. (2023) · Sports Med",
      finding: "Small (~5%) surpluses match large surpluses for muscle with far less fat gain.",
      application: "Lean Bulk capped at +7.5% calories."
    },
    {
      study: "Schoenfeld (2016, 2017) · Iversen (2021)",
      finding: "≥2×/wk frequency, 10–20 sets/wk, and antagonist pairs save ~40% time.",
      application: "60-min A1/A2 paired sessions."
    },
    {
      study: "Wolf (2023) · Maeo (2021, 2023) · Schumann (2022) · Kreider (2017)",
      finding: "Deep-stretch lifts grow more muscle; separated cardio avoids interference; 5g creatine works.",
      application: "Stretched isolations · Mon/Thu cardio · 5g creatine."
    }
  ],

  muscleUpStages: [
    { stage: 1, weeks: "W1–4", title: "Sternum Pulls & False Grip", target: "Pull bar to lower chest · 15s false grip" },
    { stage: 2, weeks: "W5–9", title: "C-Curve & Straight-Bar Dips", target: "Arc around bar · 4 × 6 straight-bar dips" },
    { stage: 3, weeks: "W10–15", title: "Band Muscle-Ups & Negatives", target: "4 × 2 band MU · 4s slow transitions" },
    { stage: 4, weeks: "W16–21", title: "Unassisted Singles", target: "4 × 1–2 strict unassisted bar MU" },
    { stage: 5, weeks: "W22–26", title: "Multi-Rep Mastery", target: "3 × 3–5 unbroken clean bar MU" }
  ],

  // 26 Weeks starting Saturday, 21 November 2026 -> Friday, 21 May 2027
  weeks: [
    { week: 1, startDate: "2026-11-21", phase: "Phase 1", blockType: "Base", rirTarget: "2–3 RIR", pullUpLoad: 5, pullUpScheme: "4 × 4", dipLoad: 0, dipScheme: "4 × 8", volPullUps: "4 × 6 BW", muscleUpDrill: "4 × 3 Sternum Pulls", qualityRun: "15m Tempo (1.5%)" },
    { week: 2, startDate: "2026-11-28", phase: "Phase 1", blockType: "Base", rirTarget: "2 RIR", pullUpLoad: 7.5, pullUpScheme: "4 × 4", dipLoad: 5, dipScheme: "4 × 8", volPullUps: "4 × 7 BW", muscleUpDrill: "4 × 3 Sternum Pulls", qualityRun: "15m Tempo (1.5%)" },
    { week: 3, startDate: "2026-12-05", phase: "Phase 1", blockType: "Build", rirTarget: "1–2 RIR", pullUpLoad: 10, pullUpScheme: "4 × 4", dipLoad: 7.5, dipScheme: "4 × 8", volPullUps: "4 × 8 BW", muscleUpDrill: "4 × 4 Sternum Pulls", qualityRun: "18m Tempo (1.5%)" },
    { week: 4, startDate: "2026-12-12", phase: "Phase 1", blockType: "Push", rirTarget: "1 RIR", pullUpLoad: 10, pullUpScheme: "4 × 5", dipLoad: 10, dipScheme: "4 × 8", volPullUps: "4 × 9 BW", muscleUpDrill: "4 × 4 High Belly Pulls", qualityRun: "18m Tempo (1.5%)" },
    { week: 5, startDate: "2026-12-19", phase: "Phase 1", blockType: "DELOAD", rirTarget: "3–4 RIR", pullUpLoad: 7.5, pullUpScheme: "3 × 4", dipLoad: 5, dipScheme: "3 × 6", volPullUps: "3 × 6 BW", muscleUpDrill: "3 × 3 Light C-Curve", qualityRun: "15m Easy Zone 2" },
    { week: 6, startDate: "2026-12-26", phase: "Phase 2", blockType: "Build", rirTarget: "2 RIR", pullUpLoad: 10, pullUpScheme: "4 × 6", dipLoad: 12.5, dipScheme: "4 × 6", volPullUps: "4 × 9 BW", muscleUpDrill: "4 × 3 C-Curve + Bar Dips", qualityRun: "3 × 5m Threshold" },
    { week: 7, startDate: "2027-01-02", phase: "Phase 2", blockType: "Build", rirTarget: "1–2 RIR", pullUpLoad: 12.5, pullUpScheme: "4 × 4", dipLoad: 12.5, dipScheme: "4 × 7", volPullUps: "4 × 10 BW", muscleUpDrill: "4 × 3 C-Curve + Bar Dips", qualityRun: "3 × 5m Threshold" },
    { week: 8, startDate: "2027-01-09", phase: "Phase 2", blockType: "Push", rirTarget: "0–1 RIR", pullUpLoad: 12.5, pullUpScheme: "4 × 5", dipLoad: 12.5, dipScheme: "4 × 8", volPullUps: "4 × 10 BW", muscleUpDrill: "4 × 4 Hip-to-Bar Pulls", qualityRun: "3 × 6m Threshold" },
    { week: 9, startDate: "2027-01-16", phase: "Phase 2", blockType: "DELOAD", rirTarget: "3–4 RIR", pullUpLoad: 10, pullUpScheme: "3 × 4", dipLoad: 10, dipScheme: "3 × 6", volPullUps: "3 × 7 BW", muscleUpDrill: "3 × 2 Smooth Transitions", qualityRun: "15m Easy Zone 2" },
    { week: 10, startDate: "2027-01-23", phase: "Phase 3", blockType: "Build", rirTarget: "2 RIR", pullUpLoad: 12.5, pullUpScheme: "4 × 6", dipLoad: 15, dipScheme: "4 × 6", volPullUps: "4 × 7 +2.5kg", muscleUpDrill: "4 × 2 Band Muscle-Ups", qualityRun: "4 × 4m Threshold" },
    { week: 11, startDate: "2027-01-30", phase: "Phase 3", blockType: "Build", rirTarget: "1–2 RIR", pullUpLoad: 15, pullUpScheme: "4 × 4", dipLoad: 15, dipScheme: "4 × 7", volPullUps: "4 × 8 +2.5kg", muscleUpDrill: "4 × 2 Band Muscle-Ups", qualityRun: "4 × 4m Threshold" },
    { week: 12, startDate: "2027-02-06", phase: "Phase 3", blockType: "Push", rirTarget: "0–1 RIR", pullUpLoad: 15, pullUpScheme: "4 × 5", dipLoad: 15, dipScheme: "4 × 8", volPullUps: "4 × 9 +2.5kg", muscleUpDrill: "4 × 3 Light-Band MU", qualityRun: "18m Threshold" },
    { week: 13, startDate: "2027-02-13", phase: "Phase 3", blockType: "DELOAD", rirTarget: "3–4 RIR", pullUpLoad: 11.25, pullUpScheme: "3 × 4", dipLoad: 11.25, dipScheme: "3 × 6", volPullUps: "3 × 7 BW", muscleUpDrill: "3 × 2 Light-Band MU", qualityRun: "15m Easy Zone 2" },
    { week: 14, startDate: "2027-02-20", phase: "Phase 4", blockType: "Build", rirTarget: "2 RIR", pullUpLoad: 15, pullUpScheme: "4 × 6", dipLoad: 17.5, dipScheme: "4 × 6", volPullUps: "4 × 7 +5kg", muscleUpDrill: "4 × 3 Thin-Band MU", qualityRun: "4 × 3m @ 5K Pace" },
    { week: 15, startDate: "2027-02-27", phase: "Phase 4", blockType: "Build", rirTarget: "1–2 RIR", pullUpLoad: 17.5, pullUpScheme: "4 × 4", dipLoad: 17.5, dipScheme: "4 × 7", volPullUps: "4 × 8 +5kg", muscleUpDrill: "4 × 3 Thin-Band + Neg", qualityRun: "5 × 3m @ 5K Pace" },
    { week: 16, startDate: "2027-03-06", phase: "Phase 4", blockType: "Push", rirTarget: "0–1 RIR", pullUpLoad: 17.5, pullUpScheme: "4 × 5", dipLoad: 17.5, dipScheme: "4 × 8", volPullUps: "4 × 9 +5kg", muscleUpDrill: "4 × 1 Unassisted MU", qualityRun: "5 × 3m @ 5K Pace" },
    { week: 17, startDate: "2027-03-13", phase: "Phase 4", blockType: "DELOAD", rirTarget: "3–4 RIR", pullUpLoad: 12.5, pullUpScheme: "3 × 4", dipLoad: 12.5, dipScheme: "3 × 6", volPullUps: "3 × 8 BW", muscleUpDrill: "3 × 1 Crisp MU Single", qualityRun: "15m Easy Zone 2" },
    { week: 18, startDate: "2027-03-20", phase: "Phase 5", blockType: "Build", rirTarget: "2 RIR", pullUpLoad: 17.5, pullUpScheme: "4 × 6", dipLoad: 20, dipScheme: "4 × 6", volPullUps: "4 × 9 +5kg", muscleUpDrill: "4 × 1–2 Unassisted MU", qualityRun: "5 × 800m @ 5K" },
    { week: 19, startDate: "2027-03-27", phase: "Phase 5", blockType: "Build", rirTarget: "1–2 RIR", pullUpLoad: 20, pullUpScheme: "4 × 4", dipLoad: 20, dipScheme: "4 × 7", volPullUps: "4 × 7 +7.5kg", muscleUpDrill: "4 × 2 Unassisted MU", qualityRun: "5 × 800m @ 5K" },
    { week: 20, startDate: "2027-04-03", phase: "Phase 5", blockType: "Push", rirTarget: "0–1 RIR", pullUpLoad: 20, pullUpScheme: "4 × 5", dipLoad: 20, dipScheme: "4 × 8", volPullUps: "4 × 8 +7.5kg", muscleUpDrill: "4 × 2 Strict MU", qualityRun: "6 × 800m @ 5K" },
    { week: 21, startDate: "2027-04-10", phase: "Phase 5", blockType: "DELOAD", rirTarget: "3–4 RIR", pullUpLoad: 15, pullUpScheme: "3 × 4", dipLoad: 15, dipScheme: "3 × 6", volPullUps: "3 × 8 BW", muscleUpDrill: "3 × 1 Easy MU Single", qualityRun: "15m Easy Zone 2" },
    { week: 22, startDate: "2027-04-17", phase: "Phase 6", blockType: "Peak", rirTarget: "1–2 RIR", pullUpLoad: 20, pullUpScheme: "4 × 6", dipLoad: 22.5, dipScheme: "4 × 6", volPullUps: "4 × 9 +7.5kg", muscleUpDrill: "3 × 3 Unbroken MU", qualityRun: "6 × 400m Fast 5K" },
    { week: 23, startDate: "2027-04-24", phase: "Phase 6", blockType: "Peak", rirTarget: "1 RIR", pullUpLoad: 22.5, pullUpScheme: "4 × 4", dipLoad: 22.5, dipScheme: "4 × 7", volPullUps: "4 × 9 +7.5kg", muscleUpDrill: "3 × 3–4 Unbroken MU", qualityRun: "7 × 400m Fast 5K" },
    { week: 24, startDate: "2027-05-01", phase: "Phase 6", blockType: "Push", rirTarget: "0–1 RIR", pullUpLoad: 22.5, pullUpScheme: "4 × 5", dipLoad: 25, dipScheme: "4 × 6", volPullUps: "4 × 8 +10kg", muscleUpDrill: "3 × 4 Unbroken MU", qualityRun: "8 × 400m Fast 5K" },
    { week: 25, startDate: "2027-05-08", phase: "Phase 6", blockType: "Taper", rirTarget: "3 RIR", pullUpLoad: 15, pullUpScheme: "3 × 4", dipLoad: 15, dipScheme: "3 × 6", volPullUps: "3 × 8 BW", muscleUpDrill: "2 × 2 Crisp MU", qualityRun: "15m Easy + 4×20s" },
    { week: 26, startDate: "2027-05-15", phase: "Phase 6", blockType: "Test", rirTarget: "Max Test", pullUpLoad: 25, pullUpScheme: "Max @ +25kg", dipLoad: 27.5, dipScheme: "4 × 6 / Max", volPullUps: "Max BW (18+)", muscleUpDrill: "Max Unbroken MU (5+)", qualityRun: "5K / 3K Time Trial" }
  ],

  // 7-Day Sat -> Fri Microcycle (Starts Saturday, 21 Nov 2026)
  daysTemplate: [
    {
      dayIndex: 0, dayName: "Saturday", shortName: "SAT", letter: "S",
      sessionTitle: "Upper A · Heavy", sessionType: "strength", estimatedMinutes: 60,
      summary: "Lats · Chest · Mid-Back · Side Delts · Arms",
      exercises: [
        { id: "sat-1", pair: "A1", name: "Weighted Pull-Ups", defaultSets: 4, reps: "4–6", restSeconds: 90, dynamicKey: "upperA_pullup", loggable: true, muscles: "Lats · Brachialis", cues: "Full dead hang to sternum; 2s lower. Alternate with A2.", avoid: "Half reps at bottom." },
        { id: "sat-2", pair: "A2", name: "Weighted Parallel Bar Dips", defaultSets: 4, reps: "6–8", restSeconds: 90, dynamicKey: "upperA_dip", loggable: true, muscles: "Chest · Triceps", cues: "30° forward lean; 2–3s lower to parallel.", avoid: "Shrugging shoulders up." },
        { id: "sat-3", pair: "B1", name: "30° Incline DB Press", defaultSets: 3, reps: "8–10", restSeconds: 75, loggable: true, lengthened: true, muscles: "Upper Chest", cues: "Low 30° bench; 1s pause in bottom stretch.", avoid: "Steep 45–60° bench." },
        { id: "sat-4", pair: "B2", name: "Chest-Supported Row", defaultSets: 3, reps: "8–10", restSeconds: 75, loggable: true, lengthened: true, muscles: "Mid-Back · Lats", cues: "Stretch forward at bottom; 1s squeeze at top.", avoid: "Lifting chest off pad." },
        { id: "sat-5", pair: "C1", name: "Cable Lateral Raise", defaultSets: 3, reps: "12–15", restSeconds: 60, loggable: true, lengthened: true, muscles: "Side Delts", cues: "Pulley at wrist height; sweep wide to shoulder level.", avoid: "Swinging or shrugging." },
        { id: "sat-6", pair: "C2", name: "45° Incline DB Curl", defaultSets: 3, reps: "10–12", restSeconds: 60, loggable: true, lengthened: true, muscles: "Biceps", cues: "Keep elbows behind torso; full stretch at bottom.", avoid: "Drifting elbows forward." },
        { id: "sat-7", pair: "D", name: "Overhead Tricep Extension", defaultSets: 3, reps: "10–12", restSeconds: 75, loggable: true, lengthened: true, muscles: "Triceps Long Head", cues: "Full stretch behind head; smooth lockout.", avoid: "Cutting bottom stretch." }
      ]
    },
    {
      dayIndex: 1, dayName: "Sunday", shortName: "SUN", letter: "S",
      sessionTitle: "Lower A · Quads", sessionType: "lower", estimatedMinutes: 60,
      summary: "Quads · Glutes · Hamstrings · Calves · Abs",
      exercises: [
        { id: "sun-1", pair: "1", name: "Hack or Heel-Elevated Squat", defaultSets: 4, reps: "6–8", restSeconds: 150, loggable: true, muscles: "Quads · Glutes", cues: "2–3s descent to full depth; drive up strong.", avoid: "Stopping above parallel." },
        { id: "sun-2", pair: "A1", name: "DB Bulgarian Split Squat", defaultSets: 3, reps: "8–10 / leg", restSeconds: 60, loggable: true, muscles: "Quads · Glutes", cues: "Slight forward lean; rear knee lightly kisses pad.", avoid: "Pushing off back foot." },
        { id: "sun-3", pair: "A2", name: "Seated Calf Raise", defaultSets: 4, reps: "12–15", restSeconds: 60, loggable: true, lengthened: true, muscles: "Soleus Calves", cues: "2s dead pause at bottom stretch; 1s squeeze at top.", avoid: "Bouncing at bottom." },
        { id: "sun-4", pair: "B1", name: "Seated Leg Extension", defaultSets: 3, reps: "12–15", restSeconds: 60, loggable: true, lengthened: true, muscles: "Front Quads", cues: "Pull hips into seat; 1s top lock, 2s lower.", avoid: "Swinging stack." },
        { id: "sun-5", pair: "B2", name: "Seated Leg Curl", defaultSets: 3, reps: "10–12", restSeconds: 60, loggable: true, lengthened: true, muscles: "Hamstrings", cues: "Lock thigh pad tight; lean slightly forward.", avoid: "Slamming weight stack." },
        { id: "sun-6", pair: "C", name: "Hanging Leg Raise", defaultSets: 3, reps: "10–15", restSeconds: 60, loggable: false, muscles: "Lower Abs", cues: "Curl pelvis upward at top; zero body swing.", avoid: "Swinging with flat back." }
      ]
    },
    {
      dayIndex: 2, dayName: "Monday", shortName: "MON", letter: "M",
      sessionTitle: "Active Recovery", sessionType: "rest", estimatedMinutes: 30,
      summary: "Zone 2 Walk · Wrist & Shoulder Prehab",
      exercises: [
        { id: "mon-1", pair: "1", name: "Zone 2 Incline Walk", defaultSets: 1, reps: "25 min", restSeconds: 0, loggable: false, muscles: "Cardio · Insulin", cues: "8–10% incline @ easy pace (115–130 bpm). Hit full protein.", avoid: "Skipping protein on rest days." },
        { id: "mon-2", pair: "2", name: "Wrist & Shoulder Prehab", defaultSets: 2, reps: "15 reps", restSeconds: 45, loggable: false, muscles: "Forearms · Shoulders", cues: "Light pronation curls + 30s wrist stretch + band dislocates.", avoid: "Skipping prep before Tuesday." }
      ]
    },
    {
      dayIndex: 3, dayName: "Tuesday", shortName: "TUE", letter: "T",
      sessionTitle: "Upper B · Muscle-Up", sessionType: "strength", estimatedMinutes: 60,
      summary: "Bar Muscle-Up Skill · Lats · Chest · Delts · Triceps",
      exercises: [
        { id: "tue-mu", pair: "0", name: "Bar Muscle-Up Skill (Fresh)", defaultSets: 4, reps: "1–4 reps", restSeconds: 90, dynamicKey: "thu_muscleup", loggable: false, isSkill: true, muscles: "Explosive Lats · Transition", cues: "Do FIRST while fresh. Hollow C-arc around bar, snap chest over.", avoid: "Pulling straight up into bar." },
        { id: "tue-1", pair: "A1", name: "Volume Pull-Ups", defaultSets: 4, reps: "6–10", restSeconds: 75, dynamicKey: "upperB_volPullup", loggable: true, muscles: "Lats · Biceps", cues: "Fast pull, 2s lower to full dead hang.", avoid: "Failing on set 1." },
        { id: "tue-2", pair: "A2", name: "Tempo / Straight-Bar Dips", defaultSets: 4, reps: "8–12", restSeconds: 75, loggable: true, muscles: "Chest · Triceps", cues: "3s lower, 1s pause, fast press. 1–2 sets on straight bar.", avoid: "Rushing descent." },
        { id: "tue-3", pair: "B1", name: "Cable Fly / Pec Deck", defaultSets: 3, reps: "10–12", restSeconds: 60, loggable: true, lengthened: true, muscles: "Chest Stretch", cues: "Wide hug arc; slow 3s open into deep stretch.", avoid: "Bending elbows 90°." },
        { id: "tue-4", pair: "B2", name: "Single-Arm Cable Row", defaultSets: 3, reps: "10–12 / side", restSeconds: 60, loggable: true, lengthened: true, muscles: "Lower Lats", cues: "Full reach forward; pull elbow tightly to hip pocket.", avoid: "Twisting torso." },
        { id: "tue-5", pair: "C1", name: "Cable Lateral Raise", defaultSets: 3, reps: "12–15", restSeconds: 60, loggable: true, lengthened: true, muscles: "Side Delts", cues: "Wrist-height pulley; control slow descent across body.", avoid: "Using momentum." },
        { id: "tue-6", pair: "C2", name: "Overhead Rope Extension", defaultSets: 3, reps: "10–12", restSeconds: 60, loggable: true, lengthened: true, muscles: "Triceps Long Head", cues: "Deep stretch behind head; smooth lockout.", avoid: "Flaring elbows wide." }
      ]
    },
    {
      dayIndex: 4, dayName: "Wednesday", shortName: "WED", letter: "W",
      sessionTitle: "Lower B · Posterior", sessionType: "lower", estimatedMinutes: 58,
      summary: "Hamstrings · Glutes · Calves · Core · Lunges",
      exercises: [
        { id: "wed-1", pair: "1", name: "Romanian Deadlift (Straps)", defaultSets: 4, reps: "8–10", restSeconds: 150, loggable: true, muscles: "Hamstrings · Glutes", cues: "Soft 15° knees; push hips straight back to mid-shin stretch.", avoid: "Rounding lower back." },
        { id: "wed-2", pair: "A1", name: "Seated Leg Curl", defaultSets: 3, reps: "10–12", restSeconds: 60, loggable: true, lengthened: true, muscles: "Hamstrings", cues: "Lean slightly forward; 1s squeeze, 2s return.", avoid: "Slamming stack." },
        { id: "wed-3", pair: "A2", name: "Standing Calf Raise", defaultSets: 4, reps: "10–12", restSeconds: 60, loggable: true, lengthened: true, muscles: "Upper Calves", cues: "Straight knees; 2s dead bottom pause, 1s top squeeze.", avoid: "Bending knees or bouncing." },
        { id: "wed-4", pair: "B1", name: "Hip Thrust or Leg Press", defaultSets: 3, reps: "10–12", restSeconds: 60, loggable: true, muscles: "Glutes · Adductors", cues: "Chin tucked, ribs down; 1s squeeze at top.", avoid: "Overarching lower back." },
        { id: "wed-5", pair: "B2", name: "Ab Wheel Rollout", defaultSets: 3, reps: "10–12", restSeconds: 60, loggable: false, muscles: "Hollow Core", cues: "Tuck pelvis under; roll out with zero back sag.", avoid: "Letting hips drop." },
        { id: "wed-6", pair: "C", name: "DB Walking Lunges", defaultSets: 2, reps: "12 / leg", restSeconds: 75, loggable: true, muscles: "Quads · Glutes", cues: "Controlled strides; rear knee lightly touches floor.", avoid: "Crashing knee down." }
      ]
    },
    {
      dayIndex: 5, dayName: "Thursday", shortName: "THU", letter: "T",
      sessionTitle: "Upper C · Frame + Run", sessionType: "strength-run", estimatedMinutes: 60,
      summary: "Upper Chest · Delts · Arms · Quality Run",
      exercises: [
        { id: "thu-1", pair: "A1", name: "Incline Machine / DB Press", defaultSets: 3, reps: "10–12", restSeconds: 60, loggable: true, lengthened: true, muscles: "Upper Chest", cues: "Smooth 2s lower, crisp press; save joints for Saturday.", avoid: "Grinding ugly reps." },
        { id: "thu-2", pair: "A2", name: "Face Pull / Reverse Fly", defaultSets: 3, reps: "15", restSeconds: 60, loggable: true, muscles: "Rear Delts · Rotators", cues: "Pull to temples with external rotation; 1s squeeze.", avoid: "Pulling low to chest." },
        { id: "thu-3", pair: "B1", name: "Seated DB Lateral Raise", defaultSets: 4, reps: "12–15", restSeconds: 60, loggable: true, muscles: "Side Delts", cues: "Seated upright for zero swing; lead with elbows.", avoid: "Leaning back." },
        { id: "thu-4", pair: "B2", name: "Hammer Curl + Pushdown", defaultSets: 3, reps: "10–12 + 12–15", restSeconds: 60, loggable: true, muscles: "Forearms · Biceps · Triceps", cues: "Thumbs-up Hammer Curls straight into crisp Rope Pushdowns.", avoid: "Swinging elbows." },
        { id: "thu-5", pair: "C", name: "Quality Treadmill Run", defaultSets: 1, reps: "5m WU + Main + 4m CD", restSeconds: 0, dynamicKey: "thu_treadmill", loggable: false, muscles: "VO2max · Threshold", cues: "1–1.5% incline; 5m warm-up, weekly main set, 4m walk.", avoid: "All-out sprinting." }
      ]
    },
    {
      dayIndex: 6, dayName: "Friday", shortName: "FRI", letter: "F",
      sessionTitle: "Full Rest", sessionType: "rest", estimatedMinutes: 10,
      summary: "Sleep 8h · Full Protein · 5g Creatine",
      exercises: [
        { id: "fri-1", pair: "1", name: "Recovery Check", defaultSets: 1, reps: "Rest", restSeconds: 0, loggable: false, muscles: "Full Recovery", cues: "Hit 4 protein meals, 5g creatine, and 8h sleep for Saturday.", avoid: "Under-eating protein today." }
      ]
    }
  ]
};
