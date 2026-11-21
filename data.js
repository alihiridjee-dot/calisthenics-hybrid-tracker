// 26-Week South Asian Hardgainer Hypertrophy, Protein & Muscle-Up Plan Data
// Starts Saturday, 21 November 2026 -> Friday, 21 May 2027 (60-Minute Evidence-Based Sessions)

const PLAN_DATA = {
  meta: {
    title: "26W • TACTILE TRAINING CANVAS",
    subtitle: "60-MIN HARDGAINER HYPERTROPHY • PROTEIN TARGETS • MUSCLE-UP LAB",
    startDate: "2026-11-21", // Saturday, 21 Nov 2026 (Week 1, Day 1)
    heightCm: 183,
    heightLabel: "6'0\" (183 cm)",
    defaultBodyweightKg: 75,
    defaultGoalMode: "recomp" // "recomp" | "leanbulk"
  },

  decoder: [
    {
      term: "4 × 4–6 (Double Progression)",
      plain: "Do 4 separate sets of 4 to 6 clean reps. Keep the weight the same until you hit the top of the rep range across all 4 sets with 1–2 reps left in the tank, then add +2.5 kg (Helms et al.)."
    },
    {
      term: "1–2 RIR (Reps In Reserve)",
      plain: "Stop each compound set when you could still do 1 to 2 clean reps. On isolation lifts (laterals, curls, extensions), push closer to 0–1 RIR for maximum motor-unit recruitment without wrecking recovery."
    },
    {
      term: "Antagonist Pair (A1 + A2 · 75–90s)",
      plain: "Do 1 set of A1 (e.g., Pull-Ups), rest 75–90s, do 1 set of A2 (e.g., Dips), rest 75–90s, repeat. Each muscle gets ~3 full minutes of recovery (optimal for growth; Schoenfeld 2016) while fitting 15–18 hard sets into 60 minutes (Iversen 2021)."
    },
    {
      term: "2–3s Eccentric + Deep Stretch",
      plain: "Control the lowering phase for 2–3 seconds into a full stretch. Peer-reviewed data (Maeo 2021, 2023; Pedrosa 2022) show training muscles at long lengths (overhead tricep, seated leg curl, incline curl) builds significantly more size."
    },
    {
      term: "4 × ~40g Protein Bolus (≥3g Leucine)",
      plain: "Instead of 1–2 huge meals, spread 2.0–2.2 g/kg across 4 feedings of ~0.50 g/kg each (Schoenfeld & Aragon 2018; Jäger 2017) so every meal crosses the ~3g leucine threshold to spike muscle protein synthesis."
    }
  ],

  southAsianProtocol: {
    headline: "South Asian Thin-Fat Recomp & Hardgainer Architecture",
    summary: "At 6'0\" (183 cm) and 75 kg (BMI 22.4), South Asian genetics frequently express the peer-reviewed 'thin-fat' phenotype: lower baseline skeletal muscle mass paired with higher visceral/ectopic fat storage and reduced peripheral insulin sensitivity even at a normal BMI (Yajnik 2004; Lear et al. 2009; Misra & Khurana 2011; Iliodromiti et al. 2023). Combined with long 6'0\" limbs, building visible muscle requires higher weekly volume, strict protein density, and disciplined energy partitioning:",
    pillars: [
      {
        badge: "01 · PROTEIN & LEUCINE (MORTON 2018 · BARAKAT 2020)",
        title: "2.0–2.2 g/kg/day (150–165 g at 75 kg) Across 4 Meals",
        detail: "Morton et al. (2018, BJSM, 49 RCTs) found hypertrophy gains plateau around 1.62 g/kg/day on average, with the 95% CI upper bound at 2.2 g/kg/day. For skinny-fat recomposition and hardgainers, Barakat et al. (2020) support 2.0–2.6 g/kg/day, split into 4 meals of 0.40–0.55 g/kg (~38–42g each; Schoenfeld & Aragon 2018) to hit ≥3g leucine per feeding (ISSN 2017)."
      },
      {
        badge: "02 · 60-MIN HIGH-VOLUME HYPERTROPHY (SCHOENFELD 2017 · IVERSEN 2021)",
        title: "12–16 Weekly Sets/Muscle Using Antagonist Paired Sets",
        detail: "Hardgainers stall on low-volume routines or rushed 1-minute rests. Every workout is engineered for ~60 minutes using Antagonist Paired Sets (75–90s alternating rest = ~3 min recovery per muscle), delivering 14 sets Back, 14–17 sets Chest, 10 direct sets Side Delts, 13 sets Quads, and 10 sets Hamstrings across 2–3×/week frequency."
      },
      {
        badge: "03 · CONTROLLED SURPLUS & GLUT4 TIMING (HELMS 2023)",
        title: "Recomp First or +5–8% Lean Surplus (Never Dirty Bulk)",
        detail: "Dirty bulking (+500–800 kcal) drives visceral fat gain in South Asian physiology without extra muscle. Helms et al. (2023, Sports Med - Open) showed a small ~5–10% surplus (+150–225 kcal; gaining 0.25–0.35% BW/week) yields identical muscle growth with far less fat. Place 60–70% of carbs around your 60-minute lifting window to maximize insulin-independent GLUT4 uptake."
      },
      {
        badge: "04 · SEPARATED CARDIO & CREATINE (SCHUMANN 2022 · KREIDER 2017)",
        title: "Zero Same-Session Leg Interference + 5g Daily Creatine",
        detail: "Schumann et al. (2022, Sports Medicine) showed cardio doesn't blunt hypertrophy when separated from heavy strength sessions. We moved Zone 2 incline walks to Monday recovery and threshold running to Thursday (72h before Lower A). Pair with 5g Creatine Monohydrate daily (Kreider et al. 2017) for extra reps and intracellular fullness."
      }
    ]
  },

  mealSlots: [
    { id: 0, short: "M1", label: "Breakfast", timing: "Within 90m of waking" },
    { id: 1, short: "M2", label: "Pre-Lift / Lunch", timing: "90–120m before gym" },
    { id: 2, short: "M3", label: "Post-Workout", timing: "Within 60–90m post-lift" },
    { id: 3, short: "M4", label: "Dinner / Sleep", timing: "2h before bed (slow digest)" }
  ],

  southAsianMeals: [
    {
      tag: "NON-VEG · ~42g PROTEIN",
      title: "Tandoori Chicken Breast + Basmati / 2 Roti",
      macros: "42g P · 55g C · 8g F · ~3.6g Leucine",
      detail: "180g raw (135g cooked) marinated chicken breast grilled/air-fried + measured rice or 2 phulkas + cucumber raita. Ideal for M2 Pre-Lift or M3 Post-Workout."
    },
    {
      tag: "FAST BOLUS · ~40g PROTEIN",
      title: "Whey Isolate + 0% Greek Yogurt / Skyr Bowl",
      macros: "40g P · 35g C · 3g F · ~4.2g Leucine",
      detail: "1 scoop whey isolate (25g P) stirred into 150g 0% Greek yogurt/skyr (15g P) + banana or berries + 5g creatine. Highest leucine density per calorie."
    },
    {
      tag: "EGGETARIAN · ~40g PROTEIN",
      title: "Masala Egg Bhurji (3 Whole + 220g Egg Whites)",
      macros: "40g P · 25g C · 15g F · ~3.4g Leucine",
      detail: "3 whole eggs (18g P) + 220g liquid egg whites (22g P) cooked with onion, tomato, turmeric, green chili + 1–2 slices sourdough or 1 roti. Crushes M1 Breakfast."
    },
    {
      tag: "VEG / DINNER · ~40g PROTEIN",
      title: "Low-Fat Paneer / Tofu Bhurji + Moong Dal + Whey",
      macros: "40g P · 38g C · 12g F · ~3.2g Leucine",
      detail: "150g low-fat paneer or extra-firm tofu (~25g P) + 1 bowl thick moong/masoor dal (~9g P) + half-scoop whey or 100g skyr (~10g P). Fixes the low-leucine gap in traditional dal-roti."
    }
  ],

  weeklyVolumeAudit: [
    { muscle: "Lats & Mid-Back", sets: "14 sets (+4 skill)", freq: "2–3×/wk", target: "12–16", pct: 92 },
    { muscle: "Chest (Upper + Mid)", sets: "14–17 sets", freq: "3×/wk", target: "12–16", pct: 95 },
    { muscle: "Side & Rear Delts", sets: "13 sets (10 side)", freq: "3×/wk", target: "10–14", pct: 90 },
    { muscle: "Biceps & Triceps", sets: "6–9 direct (15+ tot)", freq: "3×/wk", target: "10–14 tot", pct: 88 },
    { muscle: "Quads", sets: "12–13 sets", freq: "2×/wk", target: "10–14", pct: 90 },
    { muscle: "Hamstrings & Glutes", sets: "10–13 sets", freq: "2×/wk", target: "10–14", pct: 88 },
    { muscle: "Calves & Core", sets: "8 calves · 6 core", freq: "2×/wk", target: "6–10", pct: 85 }
  ],

  researchCitations: [
    {
      study: "Morton et al. (2018) · British Journal of Sports Medicine",
      finding: "Meta-analysis of 49 RCTs (n=1,863): resistance-training lean mass gains plateau at 1.62 g/kg/day on average, with a 95% confidence interval upper bound of 2.2 g/kg/day.",
      application: "Sets your 120g floor (1.6 g/kg) and 152–160g daily target (2.0–2.15 g/kg) at 75 kg so protein is never your bottleneck."
    },
    {
      study: "Schoenfeld & Aragon (2018) · J. Int. Soc. Sports Nutrition",
      finding: "To maximize anabolism, consume at least 0.40–0.55 g/kg protein per meal across a minimum of 4 daily feedings (1.6–2.2 g/kg/day total).",
      application: "Powers your 4 one-tap meal bolus pills (~38–40g each) directly on Today's Session."
    },
    {
      study: "Jäger et al. (2017) · ISSN Position Stand on Protein & Exercise",
      finding: "Optimal acute doses deliver 20–40g high-quality protein containing 2–3g leucine alongside complete EAAs every 3–4 hours.",
      application: "Shapes the South Asian meal blueprints to pair dal/rice with complete leucine-rich sources (chicken, eggs, whey, skyr)."
    },
    {
      study: "Barakat et al. (2020) · Strength & Conditioning Journal",
      finding: "Even trained lifters can build muscle and lose fat simultaneously (body recomposition) when progressive overload is paired with high protein (2.0–2.6 g/kg).",
      application: "Backs the Skinny-Fat Recomp mode (maintenance calories + 2.13 g/kg protein) to shed abdominal fat while adding lean tissue."
    },
    {
      study: "Yajnik (2004); Lear et al. (2009); Misra & Khurana (2011); Iliodromiti et al. (2023)",
      finding: "South Asians exhibit lower skeletal muscle mass and higher visceral/ectopic fat at identical BMI vs Europeans, limiting muscle glucose disposal and driving insulin resistance.",
      application: "Prioritizes heavy progressive hypertrophy (building your metabolic muscle sink) + post-meal walks and peri-workout carb timing."
    },
    {
      study: "Helms et al. (2023) · Sports Medicine - Open",
      finding: "Comparing maintenance vs 5% vs 15% surpluses in trained lifters: larger surpluses did not increase hypertrophy, only fat gain. Recommended gain rate: 0.25–0.5% BW/wk.",
      application: "Caps Lean Bulk mode at a disciplined +7% surplus (+175–225 kcal/day) to protect your waistline."
    },
    {
      study: "Schoenfeld et al. (2016, 2017) & Iversen et al. (2021) · Sports Medicine",
      finding: "Training muscles ≥2×/wk for 10–20 weekly sets with 2–3 min inter-set recovery maximizes growth. Antagonist paired sets cut time ~40% while preserving volume and per-muscle recovery.",
      application: "Engineered into every 60-minute workout via A1/A2, B1/B2, and C1/C2 antagonist pairs."
    },
    {
      study: "Schumann et al. (2022) · Sports Med; Maeo et al. (2021, 2023); Kreider et al. (2017)",
      finding: "Separating cardio from heavy lifting prevents power interference; stretched-position lifts (seated leg curl, overhead tricep ext) drive superior hypertrophy; 5g/day creatine boosts lean mass.",
      application: "Cardio moved to Mon/Thu, stretched-position isolations prioritized, and 5g creatine tracked daily."
    }
  ],

  muscleUpStages: [
    {
      stage: 1,
      weeks: "Weeks 1–4",
      title: "Explosive Sternum Pulls & False Grip",
      target: "Pull bar to lower chest (not chin) · 15s False Grip hangs",
      cue: "A standard pull-up stops at the chin; a muscle-up requires pulling the bar to your belly button/sternum. Drive elbows violently down and back while leaning slightly back at the top.",
      drill: "4 sets of 3 explosive chest-to-bar pull-ups (performed fresh on Tuesdays)"
    },
    {
      stage: 2,
      weeks: "Weeks 5–9",
      title: "The C-Curve Arc & Straight-Bar Dips",
      target: "Master the 'around-the-bar' swing + 4 sets of 6 Straight-Bar Dips",
      cue: "Never pull straight up into the bar—you will smash your chest into the steel. Step 30cm behind the bar, let your body swing slightly forward into a hollow C-curve, then pull back and around the bar as it swings back.",
      drill: "3 sets of 3 C-Curve Pop-Pulls + 3 sets of 6 Straight-Bar Dips"
    },
    {
      stage: 3,
      weeks: "Weeks 10–15",
      title: "Slow Negative Transitions & Band Muscle-Ups",
      target: "4 sets of 2 Band-Assisted Bar Muscle-Ups + 4s Eccentric Transitions",
      cue: "At the peak of your pull, aggressively snap your head and shoulders forward OVER the bar ('headbutt the sky' in front of you) while rolling your wrists from pull to support.",
      drill: "4 sets of 2 Light/Medium Band Bar Muscle-Ups (focus on fast wrist turnover)"
    },
    {
      stage: 4,
      weeks: "Weeks 16–21",
      title: "First Unassisted Bar Muscle-Up Singles",
      target: "4 sets of 1–2 Strict / Clean Unassisted Bar Muscle-Ups",
      cue: "With your weighted pull-up now at +17.5kg to +20kg, your pulling horsepower is ready. Step up to the bar fresh at the start of Tuesday's session, set a confident grip, and execute crisp singles.",
      drill: "4 sets of 1–2 Unassisted Bar Muscle-Ups (90s rest between singles)"
    },
    {
      stage: 5,
      weeks: "Weeks 22–26",
      title: "Multi-Rep Muscle-Up Mastery",
      target: "3 sets of 3–5 Unbroken Clean Bar Muscle-Ups",
      cue: "Use the lowering phase from the top of your straight-bar dip to naturally load the slight forward hollow swing at the bottom, rebounding smoothly into your next rep.",
      drill: "3 sets of 3–5 Unbroken Bar Muscle-Ups"
    }
  ],

  // 26 Weeks starting Saturday, 21 November 2026 -> Friday, 21 May 2027
  weeks: [
    {
      week: 1,
      startDate: "2026-11-21",
      phase: "Phase 1: Ramp-Up",
      blockType: "Accumulation",
      pullUpLoad: 5,
      pullUpScheme: "4 sets of 4 reps (2 RIR)",
      dipLoad: 0,
      dipScheme: "4 sets of 8 reps (3s lower)",
      volPullUps: "4 sets of 6 reps (Bodyweight)",
      muscleUpDrill: "Stage 1: 4 sets of 3 Explosive Sternum Pulls",
      qualityRun: "15 min Tempo @ 10K effort (1.5% inc)"
    },
    {
      week: 2,
      startDate: "2026-11-28",
      phase: "Phase 1: Ramp-Up",
      blockType: "Accumulation",
      pullUpLoad: 7.5,
      pullUpScheme: "4 sets of 4 reps (2 RIR)",
      dipLoad: 5,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 7 reps (Bodyweight)",
      muscleUpDrill: "Stage 1: 4 sets of 3 Explosive Sternum Pulls",
      qualityRun: "15 min Tempo @ 10K effort (1.5% inc)"
    },
    {
      week: 3,
      startDate: "2026-12-05",
      phase: "Phase 1: Ramp-Up",
      blockType: "Accumulation",
      pullUpLoad: 10,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 7.5,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 8 reps (Bodyweight)",
      muscleUpDrill: "Stage 1: 4 sets of 4 Explosive Sternum Pulls",
      qualityRun: "18 min Tempo @ 10K effort (1.5% inc)"
    },
    {
      week: 4,
      startDate: "2026-12-12",
      phase: "Phase 1: Ramp-Up",
      blockType: "Peak Baseline",
      pullUpLoad: 10,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 10,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 9 reps (Bodyweight)",
      muscleUpDrill: "Stage 1: 4 sets of 4 High Belly-to-Bar Pulls",
      qualityRun: "18 min Tempo @ 10K effort (1.5% inc)"
    },
    {
      week: 5,
      startDate: "2026-12-19",
      phase: "Phase 2: Hypertrophy I",
      blockType: "DELOAD",
      pullUpLoad: 7.5,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 5,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 6 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 3 sets of 3 C-Curve Pop-Pulls (Light)",
      qualityRun: "15 min Easy Zone 2 Jog"
    },
    {
      week: 6,
      startDate: "2026-12-26",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 10,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 12.5,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 9 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 4 sets of 3 C-Curve Pulls + 5 Straight-Bar Dips",
      qualityRun: "3 × 5 min Threshold (90s jog rec)"
    },
    {
      week: 7,
      startDate: "2027-01-02",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 12.5,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 12.5,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 10 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 4 sets of 3 C-Curve Pulls + 6 Straight-Bar Dips",
      qualityRun: "3 × 5 min Threshold (90s jog rec)"
    },
    {
      week: 8,
      startDate: "2027-01-09",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 12.5,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 12.5,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 10 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 4 sets of 4 C-Curve Hip-to-Bar Pulls",
      qualityRun: "3 × 6 min Threshold (90s jog rec)"
    },
    {
      week: 9,
      startDate: "2027-01-16",
      phase: "Phase 2: Hypertrophy I",
      blockType: "DELOAD",
      pullUpLoad: 10,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 10,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 7 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 3 sets of 2 Smooth Transition Drills",
      qualityRun: "15 min Easy Zone 2 Jog"
    },
    {
      week: 10,
      startDate: "2027-01-23",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 12.5,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 15,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 7 reps (+2.5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 2 Band-Assisted Bar Muscle-Ups",
      qualityRun: "4 × 4 min Threshold (90s jog rec)"
    },
    {
      week: 11,
      startDate: "2027-01-30",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 15,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 15,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 8 reps (+2.5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 2 Band-Assisted Bar Muscle-Ups",
      qualityRun: "4 × 4 min Threshold (90s jog rec)"
    },
    {
      week: 12,
      startDate: "2027-02-06",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Overreach",
      pullUpLoad: 15,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 15,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 9 reps (+2.5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 3 Light-Band Bar Muscle-Ups",
      qualityRun: "18 min Continuous Threshold"
    },
    {
      week: 13,
      startDate: "2027-02-13",
      phase: "Phase 3: Strength-Hyp",
      blockType: "DELOAD",
      pullUpLoad: 11.25,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 11.25,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 7 reps (Bodyweight)",
      muscleUpDrill: "Stage 3: 3 sets of 2 Light-Band Muscle-Ups",
      qualityRun: "15 min Easy Zone 2 Jog"
    },
    {
      week: 14,
      startDate: "2027-02-20",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Accumulation",
      pullUpLoad: 15,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 17.5,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 7 reps (+5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 3 Thin-Band Bar Muscle-Ups",
      qualityRun: "4 × 3 min @ 5K Pace (90s jog rec)"
    },
    {
      week: 15,
      startDate: "2027-02-27",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Accumulation",
      pullUpLoad: 17.5,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 17.5,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 8 reps (+5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 3 Thin-Band + 4s Negative Transition",
      qualityRun: "5 × 3 min @ 5K Pace (90s jog rec)"
    },
    {
      week: 16,
      startDate: "2027-03-06",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Overreach",
      pullUpLoad: 17.5,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 17.5,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 9 reps (+5kg)",
      muscleUpDrill: "Stage 4: 4 sets of 1 Unassisted Bar Muscle-Up Singles",
      qualityRun: "5 × 3 min @ 5K Pace (90s jog rec)"
    },
    {
      week: 17,
      startDate: "2027-03-13",
      phase: "Phase 3: Strength-Hyp",
      blockType: "DELOAD",
      pullUpLoad: 12.5,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 12.5,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 8 reps (Bodyweight)",
      muscleUpDrill: "Stage 4: 3 sets of 1 Crisp Muscle-Up Single",
      qualityRun: "15 min Easy Zone 2 Jog"
    },
    {
      week: 18,
      startDate: "2027-03-20",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Accumulation",
      pullUpLoad: 17.5,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 20,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 9 reps (+5kg)",
      muscleUpDrill: "Stage 4: 4 sets of 1–2 Unassisted Bar Muscle-Ups",
      qualityRun: "5 × 800m @ 5K Pace (90s jog rec)"
    },
    {
      week: 19,
      startDate: "2027-03-27",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Accumulation",
      pullUpLoad: 20,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 20,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 7 reps (+7.5kg)",
      muscleUpDrill: "Stage 4: 4 sets of 2 Unassisted Bar Muscle-Ups",
      qualityRun: "5 × 800m @ 5K Pace (90s jog rec)"
    },
    {
      week: 20,
      startDate: "2027-04-03",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Overreach",
      pullUpLoad: 20,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 20,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 8 reps (+7.5kg)",
      muscleUpDrill: "Stage 4: 4 sets of 2 Strict Unassisted Muscle-Ups",
      qualityRun: "6 × 800m @ 5K Pace (90s jog rec)"
    },
    {
      week: 21,
      startDate: "2027-04-10",
      phase: "Phase 4: Peak",
      blockType: "DELOAD",
      pullUpLoad: 15,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 15,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 8 reps (Bodyweight)",
      muscleUpDrill: "Stage 4: 3 sets of 1 Effortless Muscle-Up Single",
      qualityRun: "15 min Easy Zone 2 Jog"
    },
    {
      week: 22,
      startDate: "2027-04-17",
      phase: "Phase 4: Peak",
      blockType: "Intensification",
      pullUpLoad: 20,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 22.5,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 9 reps (+7.5kg)",
      muscleUpDrill: "Stage 5: 3 sets of 3 Unbroken Bar Muscle-Ups",
      qualityRun: "6 × 400m @ Fast 5K Pace (60s rec)"
    },
    {
      week: 23,
      startDate: "2027-04-24",
      phase: "Phase 4: Peak",
      blockType: "Intensification",
      pullUpLoad: 22.5,
      pullUpScheme: "4 sets of 4 reps (1 RIR)",
      dipLoad: 22.5,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 9 reps (+7.5kg)",
      muscleUpDrill: "Stage 5: 3 sets of 3–4 Unbroken Bar Muscle-Ups",
      qualityRun: "7 × 400m @ Fast 5K Pace (60s rec)"
    },
    {
      week: 24,
      startDate: "2027-05-01",
      phase: "Phase 4: Peak",
      blockType: "Intensification",
      pullUpLoad: 22.5,
      pullUpScheme: "4 sets of 5 reps (0-1 RIR)",
      dipLoad: 25,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 8 reps (+10kg)",
      muscleUpDrill: "Stage 5: 3 sets of 4 Unbroken Bar Muscle-Ups",
      qualityRun: "8 × 400m @ Fast 5K Pace (60s rec)"
    },
    {
      week: 25,
      startDate: "2027-05-08",
      phase: "Phase 4: Peak",
      blockType: "Taper",
      pullUpLoad: 15,
      pullUpScheme: "3 sets of 4 reps (Explosive)",
      dipLoad: 15,
      dipScheme: "3 sets of 6 reps (Fast)",
      volPullUps: "3 sets of 8 reps (Bodyweight)",
      muscleUpDrill: "Stage 5: 2 sets of 2 Fresh Taper Muscle-Ups",
      qualityRun: "15 min Easy + 4×20s Strides"
    },
    {
      week: 26,
      startDate: "2027-05-15",
      phase: "Phase 4: Peak",
      blockType: "Peak Test Week",
      pullUpLoad: 25,
      pullUpScheme: "Max Test @ +25kg & BW Test",
      dipLoad: 27.5,
      dipScheme: "4 sets of 6 reps / Max Test",
      volPullUps: "Max Strict BW Pull-Ups (18+)",
      muscleUpDrill: "Stage 5 Test: Max Unbroken Clean Bar Muscle-Ups (5+)",
      qualityRun: "5K Treadmill Time Trial or Fast 3K"
    }
  ],

  // 7-Day Sat -> Fri Microcycle (Starts Today: Saturday, 21 Nov 2026)
  // Every lifting session is calibrated to ~60 minutes with optimal 2–3 min per-muscle recovery
  daysTemplate: [
    {
      dayIndex: 0,
      dayName: "Saturday",
      shortName: "SAT",
      sessionTitle: "Upper A (Heavy V-Taper)",
      sessionType: "strength",
      focus: "60-Min Pure Hypertrophy: Antagonist Pull/Push Pairs + Delts & Arms",
      estimatedMinutes: 60,
      timeBreakdown: "6m Warm-Up · 18m A1/A2 · 14m B1/B2 · 13m C1/C2 · 9m Tricep Finisher",
      exercises: [
        {
          id: "sat-1",
          name: "A1. Weighted Pull-Ups (Overhand)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "4 to 6 reps",
          rir: "Stop 1–2 reps before failure",
          restSeconds: 90,
          dynamicKey: "upperA_pullup",
          category: "Paired Heavy Compound A1 (18 mins with A2)",
          cues: "Pair with A2 Dips: 1 set Pull-Ups → rest 90s → 1 set Dips → rest 90s (~3 min per muscle). Full dead hang; 2s lowering.",
          guideDetails: {
            muscles: "Upper Lats, Teres Major (V-Taper Width), Brachialis",
            setup: "Attach dip belt around waist. Grip slightly wider than shoulder-width.",
            execution: [
              "Start from a full dead hang with straight arms to stretch the lats maximally.",
              "Depress shoulder blades (pull shoulders down away from ears) before bending elbows.",
              "Drive elbows down toward your ribs until sternum/throat clears the bar.",
              "Lower under strict 2-second control to full extension, rest 90s, then hit A2 Dips."
            ],
            mistakeToAvoid: "Half-repping the bottom or shortening rest under 75s—full ~3m per-muscle recovery maximizes mechanical tension."
          }
        },
        {
          id: "sat-2",
          name: "A2. Weighted Parallel Bar Dips",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "6 to 8 reps",
          rir: "Stop 1–2 reps before failure",
          restSeconds: 90,
          dynamicKey: "upperA_dip",
          category: "Paired Heavy Compound A2",
          cues: "30° forward torso lean to load chest & front delts. Controlled 2–3s descent into a deep pec stretch; press to crisp lockout.",
          guideDetails: {
            muscles: "Mid & Lower Pectorals, Anterior Deltoid, Triceps",
            setup: "Lock out on parallel bars with shoulders depressed.",
            execution: [
              "Lean torso forward ~30° so your chest leads the movement.",
              "Lower smoothly over 2–3 seconds until upper arms reach parallel or slightly below.",
              "Drive palms forcefully to full lockout, rest 90s, and return to A1 Pull-Ups."
            ],
            mistakeToAvoid: "Shrugging shoulders up toward your ears or bouncing aggressively out of the bottom."
          }
        },
        {
          id: "sat-3",
          name: "B1. Incline DB Press (30° Clavicular)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "8 to 10 reps",
          rir: "1 rep in reserve",
          restSeconds: 75,
          category: "Paired Hypertrophy B1 (14 mins with B2)",
          cues: "Key lift for filling out a 6'0\" upper chest. Pause 1 full second in the deep bottom stretch on every rep.",
          guideDetails: {
            muscles: "Upper Chest (Clavicular Pectorals), Anterior Delts",
            setup: "Set bench to a low 30° incline. Tuck elbows to ~45°.",
            execution: [
              "Lower dumbbells deep beside your upper chest and pause 1 full second motionless.",
              "Press up smoothly without clanking dumbbells together at the top.",
              "Rest 75s, then perform B2 Chest-Supported Row."
            ],
            mistakeToAvoid: "Setting the bench to 45–60°, which shifts load off the upper chest onto front delts."
          }
        },
        {
          id: "sat-4",
          name: "B2. Chest-Supported Row (Mid-Back Thickness)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "8 to 10 reps",
          rir: "1 rep in reserve",
          restSeconds: 75,
          category: "Paired Hypertrophy B2",
          cues: "Let shoulder blades protract fully at the bottom stretch, then pull elbows toward hips with a 1s squeeze.",
          guideDetails: {
            muscles: "Rhomboids, Mid/Lower Traps, Rear Delts, Lats",
            setup: "Lie chest-down on a 30–45° incline bench or T-bar/machine row pad.",
            execution: [
              "Allow shoulders to reach forward into a controlled stretch at the bottom.",
              "Drive elbows back and squeeze shoulder blades together for 1 full second.",
              "Lower over 2 seconds, rest 75s, and return to B1 Incline Press."
            ],
            mistakeToAvoid: "Lifting your chest off the pad to heave heavier weight with momentum."
          }
        },
        {
          id: "sat-5",
          name: "C1. Cable or Leaning DB Lateral Raises",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "12 to 15 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired V-Taper Width C1 (13 mins with C2)",
          cues: "Your #1 visual frame-widener at 6'0\". If using cable, set cuff at wrist height to load the stretched bottom position.",
          guideDetails: {
            muscles: "Lateral Deltoid (Shoulder Width)",
            setup: "Stand side-on to a cable at wrist/hip height (or hold DBs slightly in front of thighs).",
            execution: [
              "Sweep arm out wide in the scapular plane (~20° forward of your torso) to shoulder height.",
              "Control the 2–3s lowering phase without letting traps shrug up.",
              "Rest 60s, then move to C2 Incline DB Curls."
            ],
            mistakeToAvoid: "Swinging your torso or using traps to yank weights past shoulder height."
          }
        },
        {
          id: "sat-6",
          name: "C2. Incline Dumbbell Curls (Stretched Long Head)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Long-Limb Arm Builder C2",
          cues: "Elbows pinned behind your torso on a 45° bench—maximizes stretched-position tension to fill out long 6'0\" arms.",
          guideDetails: {
            muscles: "Biceps Brachii (Long Head Peak)",
            setup: "Sit back on a 45° incline bench with arms hanging vertically behind torso.",
            execution: [
              "Curl dumbbells up with palms supinated while keeping upper arms frozen in place.",
              "Lower all the way to full straight-arm extension for a deep bicep stretch.",
              "Rest 60s and return to C1 Lateral Raises."
            ],
            mistakeToAvoid: "Drifting elbows forward on the way up, which steals tension from the stretched long head."
          }
        },
        {
          id: "sat-7",
          name: "D. Overhead Cable Tricep Extension (Long Head)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 75,
          category: "Stretch-Mediated Finisher (9 mins)",
          cues: "Maeo et al. (2023) showed overhead extensions produce ~40% more long-head tricep growth than pushdowns. Full stretch behind head.",
          guideDetails: {
            muscles: "Triceps Long Head (2/3 of upper-arm size)",
            setup: "Attach rope or single-arm cuff to low/mid cable; face away and raise elbows overhead.",
            execution: [
              "Let forearms drop deep behind your head under a 2s controlled eccentric.",
              "Extend smoothly to lockout without flaring elbows excessively.",
              "Follow immediately with your 40g post-workout protein + carb meal."
            ],
            mistakeToAvoid: "Cutting the bottom stretch short—that stretched position is where the extra growth happens."
          }
        }
      ]
    },
    {
      dayIndex: 1,
      dayName: "Sunday",
      shortName: "SUN",
      sessionTitle: "Lower A (Quads, Glutes & Core)",
      sessionType: "lower",
      focus: "60-Min Quad Hypertrophy, Stretched Hamstrings, Soleus & Abs",
      estimatedMinutes: 60,
      timeBreakdown: "7m Warm-Up · 13m Squat · 16m Split Squat/Calf · 13m Quad/Ham Pair · 11m Core",
      exercises: [
        {
          id: "sun-1",
          name: "1. Hack Squat or High-Bar Back Squat",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "6 to 8 reps",
          rir: "Leave 1–2 reps in reserve",
          restSeconds: 150,
          category: "Primary Quad Compound (13 mins)",
          cues: "Long 6'0\" femurs thrive on Hack Squat or heel-elevated High-Bar Squat for deep knee flexion without lower-back fatigue.",
          guideDetails: {
            muscles: "Quadriceps Sweep, Glutes, Adductors",
            setup: "Shoulder-width stance, heels elevated 1–2cm if barbell squatting; brace abs hard.",
            execution: [
              "Lower on a controlled 2–3s descent until hamstrings press fully onto calves.",
              "Pause briefly at the bottom without bouncing, then drive straight up.",
              "Take a full 2.5-minute rest so every set hits peak mechanical tension."
            ],
            mistakeToAvoid: "Stopping above parallel—deep knee flexion drives markedly greater quad hypertrophy."
          }
        },
        {
          id: "sun-2",
          name: "A1. DB Bulgarian Split Squats",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "8 to 10 reps per leg",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Unilateral Mass A1 (16 mins with A2)",
          cues: "Slight forward torso lean; drop rear knee straight down toward the floor. Pair with A2 Seated Calf Raises.",
          guideDetails: {
            muscles: "Quads, Gluteus Maximus & Hip Stabilizers",
            setup: "Back foot laces resting on bench pad; use straps if grip fatigues.",
            execution: [
              "Lower slowly until rear knee gently kisses a pad/floor.",
              "Drive through the full front foot keeping 90% of load on the working leg.",
              "Rest 60s, then perform A2 Seated Calf Raises."
            ],
            mistakeToAvoid: "Standing too narrow laterally (hurts balance) or pushing off the back leg."
          }
        },
        {
          id: "sun-3",
          name: "A2. Seated Calf Raises (Soleus Thickness)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "12 to 15 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Lower-Leg Armor A2",
          cues: "Mandatory 2-second dead pause in the bottom stretch on every rep to eliminate Achilles bounce and grow stubborn calves.",
          guideDetails: {
            muscles: "Soleus (thickens lower leg & absorbs running impact)",
            setup: "Balls of feet on calf block with knees bent 90°.",
            execution: [
              "Sink heels into maximum dorsiflexion and hold for 2 full seconds.",
              "Drive up onto big toes, hold 1s at the top, and lower slowly."
            ],
            mistakeToAvoid: "Bouncing rapidly at the bottom—that trains tendon recoil instead of muscle fibers."
          }
        },
        {
          id: "sun-4",
          name: "B1. Seated Leg Extensions",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "12 to 15 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Isolation B1 (13 mins with B2)",
          cues: "Only movement that fully trains the rectus femoris (front thigh). Recline seat slightly for extra stretch; pause 1s at lockout.",
          guideDetails: {
            muscles: "Rectus Femoris & Teardrop VMO",
            setup: "Align knee joint with machine pivot; pull hips tightly into the seat using handles.",
            execution: [
              "Extend to full knee lockout, squeeze quads hard for 1s, and lower over 2–3 seconds.",
              "Rest 60s and move directly to B2 Seated Leg Curls."
            ],
            mistakeToAvoid: "Letting hips lift off the pad or swinging the stack with momentum."
          }
        },
        {
          id: "sun-5",
          name: "B2. Seated Leg Curls (Long-Length Hamstrings)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Antagonist Isolation B2",
          cues: "Maeo et al. (2021) proved seated leg curls grow ~50% more hamstring mass than lying curls because hip flexion stretches the hamstrings.",
          guideDetails: {
            muscles: "Hamstrings (Biarticular Long-Length Hypertrophy)",
            setup: "Lock thigh pad firmly above knees and lean torso slightly forward.",
            execution: [
              "Drive heels all the way underneath the seat, hold 1s, and control the 2–3s return.",
              "Rest 60s and return to B1 Leg Extensions."
            ],
            mistakeToAvoid: "Slamming the weight stack or letting knees rise up off the pad."
          }
        },
        {
          id: "sun-6",
          name: "C. Strict Hanging Leg Raises",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 15 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Core & Muscle-Up Compression (11 mins)",
          cues: "Curl your pelvis/tailbone UPWARD at the top—don't just swing your legs. Builds visible abs and Muscle-Up core control.",
          guideDetails: {
            muscles: "Rectus Abdominis, Lower Abs, Lat Straight-Arm Stability",
            setup: "Active hang from pull-up bar (or captain's chair if grip is cooked).",
            execution: [
              "Press down lightly on the bar with straight arms to stop swinging.",
              "Raise legs and curl lower back off vertical so knees/toes rise above hip height.",
              "Lower slowly over 2 seconds with zero pendulum swing."
            ],
            mistakeToAvoid: "Keeping lower back flat (only works hip flexors instead of spinal flexion for abs)."
          }
        }
      ]
    },
    {
      dayIndex: 2,
      dayName: "Monday",
      shortName: "MON",
      sessionTitle: "Active Recovery & Insulin Reset",
      sessionType: "rest",
      focus: "Zone 2 Incline Walk, GLUT4 Glucose Disposal & Wrist Prehab (Zero Fatigue)",
      estimatedMinutes: 30,
      timeBreakdown: "25m Brisk Incline Walk (Zone 1–2) · 5m Muscle-Up Wrist & Shoulder Prehab",
      exercises: [
        {
          id: "mon-1",
          name: "1. Zone 2 Brisk Incline Walk (GLUT4 & Visceral Fat)",
          defaultSets: 1,
          setsLabel: "1 block",
          repsLabel: "25 mins",
          rir: "Easy Zone 1–2 (115–130 bpm)",
          restSeconds: 0,
          category: "Metabolic Recovery (25 mins)",
          cues: "8–10% treadmill incline @ 4.8–5.5 km/h (or brisk outdoor walk after dinner). Burns visceral fat & boosts insulin sensitivity with ZERO leg interference.",
          guideDetails: {
            muscles: "GLUT4 Glucose Uptake, Aerobic Base, Parasympathetic Recovery",
            setup: "Treadmill at 8–10% incline or flat outdoor brisk walk after your largest carb meal.",
            execution: [
              "Walk steadily without holding the handrails so your glutes and core stay lightly engaged.",
              "Hit your full 4 × 40g protein meals + 5g creatine today—muscle growth happens on recovery days!"
            ],
            mistakeToAvoid: "Dropping protein intake on non-lifting days when muscle protein synthesis is elevated for 24–48h post-session."
          }
        },
        {
          id: "mon-2",
          name: "2. Muscle-Up False Grip & Elbow Prehab",
          defaultSets: 2,
          setsLabel: "2 sets",
          repsLabel: "15 slow reps",
          rir: "Prehab",
          restSeconds: 45,
          category: "Tendon Conditioning (5 mins)",
          cues: "Prepares wrists and inner elbows for tomorrow's Tuesday Bar Muscle-Up Lab.",
          guideDetails: {
            muscles: "Wrist Flexors, Pronator Teres, Rotator Cuff",
            setup: "Light 2–3kg dumbbell or band.",
            execution: [
              "Perform 15 slow forearm pronation/supination rotations per arm.",
              "Hold 30s gentle wrist-flexion floor stretches + 10 band shoulder dislocates."
            ],
            mistakeToAvoid: "Skipping forearm prep before explosive Tuesday bar pulls."
          }
        }
      ]
    },
    {
      dayIndex: 3,
      dayName: "Tuesday",
      shortName: "TUE",
      sessionTitle: "Upper B (Muscle-Up Lab + Stretch Hyp)",
      sessionType: "strength",
      focus: "60-Min Fresh Muscle-Up Skill + Volume Pull/Dip + Stretched Chest, Back, Delts & Arms",
      estimatedMinutes: 60,
      timeBreakdown: "5m Prep · 9m Muscle-Up Skill · 17m A1/A2 · 13m B1/B2 · 12m C1/C2 · 4m Stretch",
      exercises: [
        {
          id: "tue-mu",
          name: "0. Bar Muscle-Up Skill Progression (100% Fresh)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "1 to 4 explosive reps",
          rir: "Maximum Bar Speed (Never Fatigued)",
          restSeconds: 90,
          dynamicKey: "thu_muscleup",
          category: "Fresh Skill Primer (9 mins)",
          cues: "Always done FIRST while CNS is 100% fresh. Arc around the bar in a hollow C-curve and snap shoulders forward OVER the bar.",
          guideDetails: {
            muscles: "Explosive Lats, Triceps Transition, Core Hollow-to-Arch Pop",
            setup: "Stand 25–30cm behind the pull-up bar with chalk and an overhand or semi-false grip.",
            execution: [
              "Jump into a controlled forward hollow swing (C-curve).",
              "As you rebound back, drive elbows violently down toward hips (aim bar to lower sternum/belly).",
              "At the peak of the pull, snap head and chest forward OVER the bar and press to straight-bar support."
            ],
            mistakeToAvoid: "Pulling straight vertically into the bar—you must arc AROUND the bar."
          }
        },
        {
          id: "tue-1",
          name: "A1. Volume Pull-Ups (BW -> Weighted)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "6 to 10 reps",
          rir: "Stop 1–2 reps before failure",
          restSeconds: 75,
          dynamicKey: "upperB_volPullup",
          category: "Paired Volume A1 (17 mins with A2)",
          cues: "Pair with A2 Tempo Dips (75s alternating rest). Crisp full-range reps to widen lats and accumulate hypertrophy volume.",
          guideDetails: {
            muscles: "Latissimus Dorsi, Teres Major, Biceps",
            setup: "Follow this week's exact rep/weight prescription on the highlight pill.",
            execution: [
              "Pull explosively to the bar and lower under a calm 2-second count to full dead hang.",
              "Rest 75s, then move immediately to A2 Tempo Dips."
            ],
            mistakeToAvoid: "Going to failure on Set 1 and collapsing on Sets 3–4."
          }
        },
        {
          id: "tue-2",
          name: "A2. Tempo Parallel or Straight-Bar Dips",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "8 to 12 reps",
          rir: "1 rep in reserve",
          restSeconds: 75,
          category: "Paired Volume A2",
          cues: "Strict 3s lowering, 1s bottom pause, explosive press. Perform 1–2 sets on a Straight Bar to reinforce Muscle-Up lockout!",
          guideDetails: {
            muscles: "Pectorals, Anterior Delts, Triceps Lockout",
            setup: "Parallel bars or straight pull-up bar (top support position).",
            execution: [
              "Lower on a strict 3-2-1 count into a deep chest stretch.",
              "Pause 1 second motionless, drive up fast, rest 75s, and return to A1 Pull-Ups."
            ],
            mistakeToAvoid: "Rushing the 3-second lowering phase."
          }
        },
        {
          id: "tue-3",
          name: "B1. Seated Cable Fly or Pec Deck (Deep Stretch)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Stretch Hypertrophy B1 (13 mins with B2)",
          cues: "Direct pec isolation without tricep fatigue—critical for building chest thickness on long-armed 6'0\" lifters.",
          guideDetails: {
            muscles: "Pectoralis Major (Sternal & Clavicular Stretch)",
            setup: "Set handles slightly behind chest line so pecs start fully stretched.",
            execution: [
              "Sweep hands together in a wide hug arc, keeping a slight soft bend in elbows.",
              "Hold 1s peak contraction, then open slowly over 3s into a deep stretch.",
              "Rest 60s and move to B2 Single-Arm Cable/DB Row."
            ],
            mistakeToAvoid: "Turning a chest fly into a pressing motion by bending elbows 90°."
          }
        },
        {
          id: "tue-4",
          name: "B2. Single-Arm Cable or DB Row (Lat Sweep)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps per side",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Unilateral Back B2",
          cues: "Keep elbow tucked close to your ribs and pull back toward your hip pocket for lower-lat thickness.",
          guideDetails: {
            muscles: "Lower Lats, Mid-Back, Rear Delts",
            setup: "Kneeling/seated single-arm cable row or supported DB row.",
            execution: [
              "Reach forward slightly at the bottom to stretch the lat fully.",
              "Pull elbow back toward your hip pocket, pause 1s, and control the return.",
              "Rest 60s and return to B1 Cable Fly."
            ],
            mistakeToAvoid: "Twisting your lower back violently to yank the handle."
          }
        },
        {
          id: "tue-5",
          name: "C1. Cable Lateral Raises (Stretched Tension)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "12 to 15 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Shoulder Width C1 (12 mins with C2)",
          cues: "Set pulley at hip/wrist height so the cable pulls across your body at the bottom—maximum tension where side delts grow most.",
          guideDetails: {
            muscles: "Lateral Deltoids",
            setup: "Cable pulley set to wrist height; cable runs either in front of or behind thighs.",
            execution: [
              "Raise arm out to the side up to shoulder height without shrugging.",
              "Control the 2–3s descent all the way across your midline."
            ],
            mistakeToAvoid: "Using heavy momentum that shifts tension into the upper traps."
          }
        },
        {
          id: "tue-6",
          name: "C2. Overhead Rope Tricep Extensions",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Arm Mass C2",
          cues: "Second weekly hit on the stretched tricep long head—pairs seamlessly with C1 Laterals to finish in 60 mins flat.",
          guideDetails: {
            muscles: "Triceps Brachii (Long Head)",
            setup: "Rope attachment on cable stack, facing away with elbows elevated.",
            execution: [
              "Drop hands deep behind your head for a full 2s stretch.",
              "Extend to smooth lockout, pause briefly, and repeat."
            ],
            mistakeToAvoid: "Cutting range of motion short at the bottom."
          }
        }
      ]
    },
    {
      dayIndex: 4,
      dayName: "Wednesday",
      shortName: "WED",
      sessionTitle: "Lower B (Posterior, Calves & Core)",
      sessionType: "lower",
      focus: "58-Min Hinge Power, Stretched Hamstrings, Glutes, Calves & Hollow Core",
      estimatedMinutes: 58,
      timeBreakdown: "7m Warm-Up · 14m RDL · 15m Curl/Calf Pair · 14m Glute/Core Pair · 8m Lunges",
      exercises: [
        {
          id: "wed-1",
          name: "1. Romanian Deadlifts (RDL with Straps)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "8 to 10 reps",
          rir: "Leave 1–2 reps in reserve",
          restSeconds: 150,
          category: "Primary Posterior Compound (14 mins)",
          cues: "Always wear lifting straps so grip never limits hamstrings/glutes. Push hips straight back; stop mid-shin when hips stop moving back.",
          guideDetails: {
            muscles: "Hamstrings, Gluteus Maximus, Spinal Erectors",
            setup: "Unrack barbell from hip height using straps; soften knees ~15° and lock that angle.",
            execution: [
              "Hinge strictly at the hips—push glutes straight toward the wall behind you while bar shaves thighs/shins.",
              "Stop the instant hips stop traveling backward (usually mid-shin) and feel a deep hamstring stretch.",
              "Drive hips forward explosively to stand tall without leaning back."
            ],
            mistakeToAvoid: "Rounding your lower back to chase extra depth below mid-shin."
          }
        },
        {
          id: "wed-2",
          name: "A1. Seated Leg Curls",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Hamstring Hypertrophy A1 (15 mins with A2)",
          cues: "Second weekly stretched-position hamstring session—leans slightly forward over the thigh pad. Pair with A2 Standing Calves.",
          guideDetails: {
            muscles: "Hamstrings (Long-Length Hypertrophy)",
            setup: "Lock thigh pad firmly above knees.",
            execution: [
              "Curl pad all the way under the seat, hold 1s, lower over 2–3 seconds.",
              "Rest 60s and step into A2 Standing Calf Raises."
            ],
            mistakeToAvoid: "Letting the stack slam between reps."
          }
        },
        {
          id: "wed-3",
          name: "A2. Standing Calf Raises (Gastrocnemius)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "10 to 12 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Gastrocnemius Power A2",
          cues: "Straight knees (unlocked), mandatory 2-second dead stretch at bottom, 1s hard peak squeeze on big toes.",
          guideDetails: {
            muscles: "Gastrocnemius (Upper Calf Shape & Achilles Resilience)",
            setup: "Balls of feet on standing calf block or leg press sled with straight knees.",
            execution: [
              "Lower heels into a full 2-second bottom stretch.",
              "Drive up cleanly onto big toes, hold 1s, then return to A1 Leg Curls."
            ],
            mistakeToAvoid: "Bending knees or bouncing out of the bottom stretch."
          }
        },
        {
          id: "wed-4",
          name: "B1. Barbell Hip Thrusts or High-Foot Leg Press",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Glute & Quad Drive B1 (14 mins with B2)",
          cues: "Chin tucked, ribs stacked over pelvis, 1s glute squeeze at lockout. Pair with B2 Ab Wheel Rollouts.",
          guideDetails: {
            muscles: "Gluteus Maximus & Upper Quads/Adductors",
            setup: "Upper back on bench pad (shins vertical at top) or feet high on leg press platform.",
            execution: [
              "Drive through heels to full hip lockout without overarching lower back.",
              "Hold 1s at the top, rest 60s, and hit B2 Ab Wheel Rollouts."
            ],
            mistakeToAvoid: "Hyperextending the lower back instead of posteriorly tilting pelvis with glutes."
          }
        },
        {
          id: "wed-5",
          name: "B2. Ab Wheel Rollouts (Hollow-Body Core)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Anti-Extension Core B2",
          cues: "Builds the exact straight-arm lat + core brace needed for Bar Muscle-Ups while keeping your waist tight.",
          guideDetails: {
            muscles: "Rectus & Transverse Abdominis, Lats, Serratus",
            setup: "Kneel on pad with ab wheel directly under shoulders.",
            execution: [
              "Tuck pelvis under (posterior tilt) and brace abs hard before rolling.",
              "Extend as far as possible with zero lower-back sag, then pull back through lats and abs."
            ],
            mistakeToAvoid: "Letting hips sag toward the floor on extension."
          }
        },
        {
          id: "wed-6",
          name: "C. DB Walking Lunges (Quad/Glute Flush)",
          defaultSets: 2,
          setsLabel: "2 sets",
          repsLabel: "12 steps per leg",
          rir: "1 rep in reserve",
          restSeconds: 75,
          category: "Quad Frequency Finisher (8 mins)",
          cues: "Gives quads a crisp 2×/week hypertrophy signal without wrecking legs before Thursday's quality run.",
          guideDetails: {
            muscles: "Quads, Glutes, Hip Stabilizers",
            setup: "Hold moderate dumbbells at sides.",
            execution: [
              "Take controlled medium-length strides letting rear knee lightly kiss the floor.",
              "Drive cleanly through the front mid-foot for 12 reps per leg."
            ],
            mistakeToAvoid: "Crashing your back knee into the floor."
          }
        }
      ]
    },
    {
      dayIndex: 5,
      dayName: "Thursday",
      shortName: "THU",
      sessionTitle: "Upper C (Frame Weak-Points) + Run",
      sessionType: "strength-run",
      focus: "60-Min High-ROI Frame Session: Upper Chest, Side/Rear Delts, Arms + Quality Treadmill Run",
      estimatedMinutes: 60,
      timeBreakdown: "4m Prep · 12m A1/A2 · 17m B1/B2 Delts & Arms · 27m Quality Treadmill Run",
      exercises: [
        {
          id: "thu-1",
          name: "A1. Incline Machine or DB Press (3rd Chest Hit)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Clavicular Frame A1 (12 mins with A2)",
          cues: "3×/week upper-chest stimulation accelerates collarbone fullness for tall 6'0\" frames without heavy CNS fatigue.",
          guideDetails: {
            muscles: "Clavicular Pectorals, Anterior Delts",
            setup: "Incline chest press machine or 30° DB bench.",
            execution: [
              "Control a 2s lowering into a full pec stretch, pause 0.5s, press smoothly.",
              "Rest 60s and move directly to A2 Rope Face Pulls."
            ],
            mistakeToAvoid: "Going too heavy and grinding—keep reps smooth so Saturday's heavy dips are 100% fresh."
          }
        },
        {
          id: "thu-2",
          name: "A2. Rope Face Pulls or Reverse Pec Deck",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "15 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Rear Delt & Rotator Armor A2",
          cues: "Builds 3D rear delts that pull your posture open and bulletproofs shoulders for heavy weighted dips & muscle-ups.",
          guideDetails: {
            muscles: "Posterior Deltoids, External Rotators, Mid-Traps",
            setup: "Cable rope at forehead height.",
            execution: [
              "Pull rope apart toward your temples/ears so knuckles point behind you (external rotation).",
              "Hold a 1-second squeeze at the back, then control forward."
            ],
            mistakeToAvoid: "Pulling down toward your chest instead of rotating externally at forehead level."
          }
        },
        {
          id: "thu-3",
          name: "B1. Seated DB Lateral Raises (Zero Momentum)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "12 to 15 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Width Overload B1 (17 mins with B2)",
          cues: "Sitting upright removes hip swing completely—brings your weekly direct lateral-delt total to 10 high-quality sets across 3×/week!",
          guideDetails: {
            muscles: "Lateral Deltoids (3D Shoulder Caps)",
            setup: "Sit tall on an upright bench with dumbbells hanging beside hips.",
            execution: [
              "Lead with elbows/forearms out wide to shoulder height (slight forward angle).",
              "Lower slowly over 2 seconds; rest 60s and move to B2 Arm Superset."
            ],
            mistakeToAvoid: "Leaning back and turning it into a front-delt raise."
          }
        },
        {
          id: "thu-4",
          name: "B2. Hammer Curls + Cable Tricep Pushdowns",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10–12 Hammers + 12–15 Pushdowns",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Arm Thickness Superset B2",
          cues: "Hammer curls target brachialis & forearms (essential for thick arms & Muscle-Up grip); pair directly with crisp tricep pushdowns.",
          guideDetails: {
            muscles: "Brachialis, Brachioradialis (Forearms), Triceps Lateral & Medial Heads",
            setup: "Neutral-grip dumbbells + cable rope/straight bar.",
            execution: [
              "Perform 10–12 strict Hammer Curls with thumbs pointing up (zero torso swing).",
              "Immediately do 12–15 Rope/Bar Tricep Pushdowns locking elbows cleanly at the bottom.",
              "Rest 60s and return to B1 Seated Lateral Raises."
            ],
            mistakeToAvoid: "Letting shoulders roll forward during pushdowns."
          }
        },
        {
          id: "thu-5",
          name: "C. Quality Treadmill Run (26W Progression)",
          defaultSets: 1,
          setsLabel: "1 session",
          repsLabel: "5m WU + Main Set + 4m CD",
          rir: "Threshold / 5K Effort",
          restSeconds: 0,
          dynamicKey: "thu_treadmill",
          category: "Cardio Engine & Visceral Fat Oxidation (27 mins)",
          cues: "5 min warm-up @ 1.0–1.5% incline → this week's exact main quality set → 4 min easy walk cool-down. 72h before Sunday's heavy legs!",
          guideDetails: {
            muscles: "VO2max, Lactate Clearance, Insulin Sensitivity",
            setup: "Set treadmill to 1.0–1.5% incline. Check the highlighted weekly badge.",
            execution: [
              "Warm up with 1 min walk + 4 min easy Zone 1–2 jog.",
              "Execute this week's exact prescription keeping cadence quick and light (175+ spm).",
              "Cool down 4 minutes easy until HR drops below 120 bpm, then fuel with 40g protein + carbs."
            ],
            mistakeToAvoid: "Turning controlled threshold intervals into an all-out strained sprint."
          }
        }
      ]
    },
    {
      dayIndex: 6,
      dayName: "Friday",
      shortName: "FRI",
      sessionTitle: "Full Rest & Supercompensation",
      sessionType: "rest",
      focus: "Deep Sleep, 150–160g Protein Consistency & Saturday Progression Prep",
      estimatedMinutes: 10,
      timeBreakdown: "4 Protein Meals · 5g Creatine · 8h Sleep · Weekly Load Preview",
      exercises: [
        {
          id: "fri-1",
          name: "1. Friday Fuel, Sleep & Weekly Progression Check",
          defaultSets: 1,
          setsLabel: "1 check",
          repsLabel: "10 mins",
          rir: "Full Recovery",
          restSeconds: 0,
          category: "Myofibrillar Supercompensation",
          cues: "Muscle fibers rebuild and grow while you rest. Hit all 4 protein meals + 5g Creatine and 8 hours of sleep so tomorrow's Saturday Weighted Pull-Ups & Dips hit new PRs.",
          guideDetails: {
            muscles: "Systemic CNS & Skeletal Muscle Supercompensation",
            setup: "Check your 4 Meal Bolus chips above and preview next week on the Fuel & 26W tab.",
            execution: [
              "Log all 4 protein feedings (~40g each) and 5g creatine.",
              "Review your weekly weight trend: aim for stable waist in Recomp mode or +0.2–0.3 kg/week in Lean Bulk mode (Helms et al., 2023).",
              "Prioritize 7.5–8.5 hours of sleep tonight before Saturday's Upper A."
            ],
            mistakeToAvoid: "Under-eating protein on Friday rest day or staying up late before Saturday's heaviest upper-body session."
          }
        }
      ]
    }
  ]
};
