// 26-Week South Asian Hypertrophy, Muscle-Up & Treadmill Plan Data (Oct 2026 - Apr 2027)
// Optimized for 45–55 Minute High-Density Sessions, Plain-English Prescriptions & Muscle-Up Mastery

const PLAN_DATA = {
  meta: {
    title: "26W • TACTILE TRAINING CANVAS",
    subtitle: "SOUTH ASIAN HYPERTROPHY • MUSCLE-UP MASTERY • 45–55 MIN SESSIONS",
    defaultBodyweightKg: 75,
    defaultCurrentProteinG: 140
  },

  decoder: [
    {
      term: "4 × 4  (or 4 sets of 4 reps)",
      plain: "Do 4 repetitions in a row, rest for your timer, and repeat that 4 separate times (16 total reps)."
    },
    {
      term: "1–2 RIR (Reps In Reserve)",
      plain: "Stop each set when you still have 1 or 2 clean reps left in the tank. Never grind to ugly failure—this keeps cortisol low and protects your elbows."
    },
    {
      term: "2s / 3s Eccentric (Lowering)",
      plain: "Take a calm 2 to 3 seconds to lower your body down on every rep. Muscle fibers grow most from controlled tension on the way down."
    },
    {
      term: "Paired Set (A1 + A2)",
      plain: "Do 1 set of exercise A1, rest 60–75 seconds, do 1 set of A2, rest 60–75 seconds, and repeat. This cuts workout time to ~50 mins while doubling work density."
    }
  ],

  southAsianProtocol: {
    headline: "South Asian Myofibrillar & Body-Recomp Architecture",
    summary: "South Asian genetics typically carry higher baseline myostatin, smaller joint/wrist frames, and lower peripheral insulin sensitivity (the classic predisposition to 'skinny-fat' visceral storage). Now that you've leaned out, building dense, visible muscle without regaining waist fat requires four tailored adjustments:",
    pillars: [
      {
        badge: "01 · PROTEIN & LEUCINE",
        title: "2.0–2.2 g/kg Protein to Beat Anabolic Resistance",
        detail: "While average Caucasian baselines respond to 1.6 g/kg, South Asian muscle protein synthesis responds best to a higher 2.0 g/kg sweet spot (~150g/day at 75kg), split into 4 feedings of 35–40g protein to cross the 3.5g leucine trigger every 4 hours."
      },
      {
        badge: "02 · 50-MINUTE CORTISOL CAP",
        title: "45–55 Min High-Density Sessions (Zero Junk Volume)",
        detail: "Marathon 80-minute workouts spike cortisol and break down hard-earned tissue. Every session in this plan is engineered to finish in 45–55 minutes using Antagonist Paired Sets (pairing pulls with pushes) for maximum mechanical tension in minimal time."
      },
      {
        badge: "03 · CARB PARTITIONING",
        title: "Peri-Workout Carb Window (GLUT4 Timing)",
        detail: "Place 65–70% of your daily carbohydrates in the meal 90 mins before training and the meal immediately after training when muscle GLUT4 receptors are wide open. Keep morning/evening meals protein + fiber + healthy fats to keep insulin crisp."
      },
      {
        badge: "04 · FRAME ILLUSION & CREATINE",
        title: "Clavicular Width, Lats & 5g Daily Creatine",
        detail: "Prioritizes upper chest, lateral delts, weighted pull-ups, and explosive muscle-up power to widen your shoulder-to-waist V-taper. Pair with 5g Creatine Monohydrate daily (South Asians show high responder rates for intracellular muscle fullness)."
      }
    ]
  },

  muscleUpStages: [
    {
      stage: 1,
      weeks: "Weeks 1–4",
      title: "Explosive Sternum Pulls & False Grip",
      target: "Pull bar to lower chest (not chin) · 15s False Grip hangs",
      cue: "A standard pull-up stops at the chin; a muscle-up requires pulling the bar to your belly button/sternum. Initiate by driving elbows violently down and back while leaning slightly back at the top.",
      drill: "4 sets of 3 explosive chest-to-bar pull-ups (performed fresh on Thursdays)"
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
      cue: "With your weighted pull-up now at +17.5kg to +20kg, your pulling horsepower is ready. Step up to the bar fresh at the start of Thursday's session, set a confident grip, and execute crisp singles.",
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

  frameworks: [
    {
      author: "Dr. Eric Helms (3DMJ)",
      concept: "Double Progression & RIR Autoregulation",
      description: "Keep weight constant until you hit the top of the rep range across all sets with 1–2 reps in reserve (RIR) before adding +2.5kg.",
      tag: "Strength Progression"
    },
    {
      author: "South Asian Recomp Protocol",
      concept: "2.0 g/kg Protein & 50-Min Antagonist Density",
      description: "Higher per-meal leucine density (~38g protein × 4 meals) + 50-minute antagonist-paired workouts to maximize muscle synthesis without cortisol spillover.",
      tag: "Genetics Optimization"
    },
    {
      author: "Steven Low (Overcoming Gravity)",
      concept: "Muscle-Up Transition & Tendon Ramp",
      description: "Dedicated Thursday skill block progressing from Sternum Pulls to Unassisted Muscle-Ups while protecting elbows and sternum.",
      tag: "Calisthenics Skill"
    },
    {
      author: "Dr. Jack Daniels (Running Formula)",
      concept: "80/20 Polarized Treadmill Conditioning",
      description: "2 short 15-min Zone 2 runs + 1 Saturday Threshold/VO2max quality run at 1.0–1.5% incline to burn visceral fat while sparing leg mass.",
      tag: "Cardio Engine"
    }
  ],

  weeks: [
    {
      week: 1,
      monDate: "2026-10-26",
      phase: "Phase 1: Ramp-Up",
      blockType: "Accumulation",
      pullUpLoad: 5,
      pullUpScheme: "4 sets of 4 reps (2 RIR)",
      dipLoad: 0,
      dipScheme: "4 sets of 8 reps (3s lower)",
      volPullUps: "4 sets of 6 reps (Bodyweight)",
      muscleUpDrill: "Stage 1: 4 sets of 3 Explosive Sternum Pulls",
      satTreadmill: "15 min Tempo @ 10K pace (1.5% inc)"
    },
    {
      week: 2,
      monDate: "2026-11-02",
      phase: "Phase 1: Ramp-Up",
      blockType: "Accumulation",
      pullUpLoad: 7.5,
      pullUpScheme: "4 sets of 4 reps (2 RIR)",
      dipLoad: 5,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 7 reps (Bodyweight)",
      muscleUpDrill: "Stage 1: 4 sets of 3 Explosive Sternum Pulls",
      satTreadmill: "15 min Tempo @ 10K pace (1.5% inc)"
    },
    {
      week: 3,
      monDate: "2026-11-09",
      phase: "Phase 1: Ramp-Up",
      blockType: "Accumulation",
      pullUpLoad: 10,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 7.5,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 8 reps (Bodyweight)",
      muscleUpDrill: "Stage 1: 4 sets of 4 Explosive Sternum Pulls",
      satTreadmill: "18 min Tempo @ 10K pace (1.5% inc)"
    },
    {
      week: 4,
      monDate: "2026-11-16",
      phase: "Phase 1: Ramp-Up",
      blockType: "Peak Baseline",
      pullUpLoad: 10,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 10,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 9 reps (Bodyweight)",
      muscleUpDrill: "Stage 1: 4 sets of 4 High Belly-to-Bar Pulls",
      satTreadmill: "20 min Tempo @ 10K pace (1.5% inc)"
    },
    {
      week: 5,
      monDate: "2026-11-23",
      phase: "Phase 2: Hypertrophy I",
      blockType: "DELOAD",
      pullUpLoad: 7.5,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 5,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 6 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 3 sets of 3 C-Curve Pop-Pulls (Light)",
      satTreadmill: "15 min Easy Zone 2 Jog"
    },
    {
      week: 6,
      monDate: "2026-11-30",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 10,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 12.5,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 9 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 4 sets of 3 C-Curve Pulls + 5 Straight-Bar Dips",
      satTreadmill: "3 × 5 min Threshold (90s jog rec)"
    },
    {
      week: 7,
      monDate: "2026-12-07",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 12.5,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 12.5,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 10 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 4 sets of 3 C-Curve Pulls + 6 Straight-Bar Dips",
      satTreadmill: "3 × 5 min Threshold (90s jog rec)"
    },
    {
      week: 8,
      monDate: "2026-12-14",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 12.5,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 12.5,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 10 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 4 sets of 4 C-Curve Hip-to-Bar Pulls",
      satTreadmill: "3 × 6 min Threshold (90s jog rec)"
    },
    {
      week: 9,
      monDate: "2026-12-21",
      phase: "Phase 2: Hypertrophy I",
      blockType: "DELOAD",
      pullUpLoad: 10,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 10,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 7 reps (Bodyweight)",
      muscleUpDrill: "Stage 2: 3 sets of 2 Smooth Transition Drills",
      satTreadmill: "15 min Easy Zone 2 Jog"
    },
    {
      week: 10,
      monDate: "2026-12-28",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 12.5,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 15,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 7 reps (+2.5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 2 Band-Assisted Bar Muscle-Ups",
      satTreadmill: "4 × 5 min Threshold (90s jog rec)"
    },
    {
      week: 11,
      monDate: "2027-01-04",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Accumulation",
      pullUpLoad: 15,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 15,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 8 reps (+2.5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 2 Band-Assisted Bar Muscle-Ups",
      satTreadmill: "4 × 5 min Threshold (90s jog rec)"
    },
    {
      week: 12,
      monDate: "2027-01-11",
      phase: "Phase 2: Hypertrophy I",
      blockType: "Overreach",
      pullUpLoad: 15,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 15,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 9 reps (+2.5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 3 Light-Band Bar Muscle-Ups",
      satTreadmill: "20 min Continuous Threshold"
    },
    {
      week: 13,
      monDate: "2027-01-18",
      phase: "Phase 3: Strength-Hyp",
      blockType: "DELOAD",
      pullUpLoad: 11.25,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 11.25,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 7 reps (Bodyweight)",
      muscleUpDrill: "Stage 3: 3 sets of 2 Light-Band Muscle-Ups",
      satTreadmill: "15 min Easy Zone 2 Jog"
    },
    {
      week: 14,
      monDate: "2027-01-25",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Accumulation",
      pullUpLoad: 15,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 17.5,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 7 reps (+5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 3 Thin-Band Bar Muscle-Ups",
      satTreadmill: "5 × 3 min @ 5K Pace (90s jog rec)"
    },
    {
      week: 15,
      monDate: "2027-02-01",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Accumulation",
      pullUpLoad: 17.5,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 17.5,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 8 reps (+5kg)",
      muscleUpDrill: "Stage 3: 4 sets of 3 Thin-Band + 4s Negative Transition",
      satTreadmill: "5 × 3 min @ 5K Pace (90s jog rec)"
    },
    {
      week: 16,
      monDate: "2027-02-08",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Overreach",
      pullUpLoad: 17.5,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 17.5,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 9 reps (+5kg)",
      muscleUpDrill: "Stage 4: 4 sets of 1 Unassisted Bar Muscle-Up Singles",
      satTreadmill: "6 × 3 min @ 5K Pace (90s jog rec)"
    },
    {
      week: 17,
      monDate: "2027-02-15",
      phase: "Phase 3: Strength-Hyp",
      blockType: "DELOAD",
      pullUpLoad: 12.5,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 12.5,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 8 reps (Bodyweight)",
      muscleUpDrill: "Stage 4: 3 sets of 1 Crisp Muscle-Up Single",
      satTreadmill: "15 min Easy Zone 2 Jog"
    },
    {
      week: 18,
      monDate: "2027-02-22",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Accumulation",
      pullUpLoad: 17.5,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 20,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 9 reps (+5kg)",
      muscleUpDrill: "Stage 4: 4 sets of 1–2 Unassisted Bar Muscle-Ups",
      satTreadmill: "6 × 800m @ 5K Pace (90s jog rec)"
    },
    {
      week: 19,
      monDate: "2027-03-01",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Accumulation",
      pullUpLoad: 20,
      pullUpScheme: "4 sets of 4 reps (1-2 RIR)",
      dipLoad: 20,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 7 reps (+7.5kg)",
      muscleUpDrill: "Stage 4: 4 sets of 2 Unassisted Bar Muscle-Ups",
      satTreadmill: "6 × 800m @ 5K Pace (90s jog rec)"
    },
    {
      week: 20,
      monDate: "2027-03-08",
      phase: "Phase 3: Strength-Hyp",
      blockType: "Overreach",
      pullUpLoad: 20,
      pullUpScheme: "4 sets of 5 reps (1 RIR)",
      dipLoad: 20,
      dipScheme: "4 sets of 8 reps",
      volPullUps: "4 sets of 8 reps (+7.5kg)",
      muscleUpDrill: "Stage 4: 4 sets of 2 Strict Unassisted Muscle-Ups",
      satTreadmill: "7 × 800m @ 5K Pace (90s jog rec)"
    },
    {
      week: 21,
      monDate: "2027-03-15",
      phase: "Phase 4: Peak",
      blockType: "DELOAD",
      pullUpLoad: 15,
      pullUpScheme: "3 sets of 4 reps (Easy)",
      dipLoad: 15,
      dipScheme: "3 sets of 6 reps (Easy)",
      volPullUps: "3 sets of 8 reps (Bodyweight)",
      muscleUpDrill: "Stage 4: 3 sets of 1 Effortless Muscle-Up Single",
      satTreadmill: "15 min Easy Zone 2 Jog"
    },
    {
      week: 22,
      monDate: "2027-03-22",
      phase: "Phase 4: Peak",
      blockType: "Intensification",
      pullUpLoad: 20,
      pullUpScheme: "4 sets of 6 reps (1 RIR)",
      dipLoad: 22.5,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 9 reps (+7.5kg)",
      muscleUpDrill: "Stage 5: 3 sets of 3 Unbroken Bar Muscle-Ups",
      satTreadmill: "8 × 400m @ Fast 5K Pace (60s rec)"
    },
    {
      week: 23,
      monDate: "2027-03-29",
      phase: "Phase 4: Peak",
      blockType: "Intensification",
      pullUpLoad: 22.5,
      pullUpScheme: "4 sets of 4 reps (1 RIR)",
      dipLoad: 22.5,
      dipScheme: "4 sets of 7 reps",
      volPullUps: "4 sets of 9 reps (+7.5kg)",
      muscleUpDrill: "Stage 5: 3 sets of 3–4 Unbroken Bar Muscle-Ups",
      satTreadmill: "8 × 400m @ Fast 5K Pace (60s rec)"
    },
    {
      week: 24,
      monDate: "2027-04-05",
      phase: "Phase 4: Peak",
      blockType: "Intensification",
      pullUpLoad: 22.5,
      pullUpScheme: "4 sets of 5 reps (0-1 RIR)",
      dipLoad: 25,
      dipScheme: "4 sets of 6 reps",
      volPullUps: "4 sets of 8 reps (+10kg)",
      muscleUpDrill: "Stage 5: 3 sets of 4 Unbroken Bar Muscle-Ups",
      satTreadmill: "10 × 400m @ Fast 5K Pace (60s rec)"
    },
    {
      week: 25,
      monDate: "2027-04-12",
      phase: "Phase 4: Peak",
      blockType: "Taper",
      pullUpLoad: 15,
      pullUpScheme: "3 sets of 4 reps (Explosive)",
      dipLoad: 15,
      dipScheme: "3 sets of 6 reps (Fast)",
      volPullUps: "3 sets of 8 reps (Bodyweight)",
      muscleUpDrill: "Stage 5: 2 sets of 2 Fresh Taper Muscle-Ups",
      satTreadmill: "15 min Easy + 4×20s Strides"
    },
    {
      week: 26,
      monDate: "2027-04-19",
      phase: "Phase 4: Peak",
      blockType: "Peak Test Week",
      pullUpLoad: 25,
      pullUpScheme: "Max Test @ +25kg & BW Test",
      dipLoad: 27.5,
      dipScheme: "4 sets of 6 reps / Max Test",
      volPullUps: "Max Strict BW Pull-Ups (18+)",
      muscleUpDrill: "Stage 5 Test: Max Unbroken Clean Bar Muscle-Ups (5+)",
      satTreadmill: "5K Treadmill Time Trial or Fast 3K"
    }
  ],

  daysTemplate: [
    {
      dayIndex: 0,
      dayName: "Monday",
      shortName: "MON",
      sessionTitle: "Upper A (Heavy V-Taper)",
      sessionType: "strength-run",
      focus: "Antagonist-Paired Weighted Pulls & Dips + 15m Zone 2",
      estimatedMinutes: 52,
      timeBreakdown: "22m Heavy Pair (A1/A2) · 15m Upper Chest/Row/Delts · 15m Zone 2",
      exercises: [
        {
          id: "mon-1",
          name: "A1. Weighted Pull-Ups (Overhand)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "4 to 6 reps",
          rir: "Stop 1–2 reps before failure",
          restSeconds: 90,
          dynamicKey: "upperA_pullup",
          category: "Paired Compound A1 (22 mins with A2)",
          cues: "Pair with A2 Dips: do 1 set of Pull-Ups, rest 90s, do 1 set of Dips. Pull shoulders down first; 2s lowering.",
          guideDetails: {
            muscles: "Upper Lats, Teres Major (V-Taper Width), Brachialis",
            setup: "Attach dip belt around waist. Grip slightly wider than shoulder-width.",
            execution: [
              "Start from a full dead hang with straight arms.",
              "Depress your shoulder blades (pull shoulders down away from ears) before bending elbows.",
              "Drive elbows forcefully down to your ribs until chin/throat clears the bar.",
              "Lower under strict 2-second control all the way to a dead hang, rest 90s, then move to A2 Dips."
            ],
            mistakeToAvoid: "Half-repping the bottom or craning your chin up instead of pulling your sternum toward the bar."
          }
        },
        {
          id: "mon-2",
          name: "A2. Weighted Parallel Bar Dips",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "6 to 8 reps",
          rir: "Stop 1–2 reps before failure",
          restSeconds: 90,
          dynamicKey: "upperA_dip",
          category: "Paired Compound A2",
          cues: "30° forward torso lean to load chest & front delts. Lower for 2–3s; press to crisp lockout.",
          guideDetails: {
            muscles: "Lower & Mid Pectorals, Anterior Deltoid, Triceps",
            setup: "Support yourself at locked elbows on parallel bars with shoulders pushed down.",
            execution: [
              "Lean torso forward ~30° so your chest leads the movement.",
              "Lower smoothly over 2–3 seconds until upper arms reach parallel (or slightly below).",
              "Drive palms down to full elbow lockout, rest 90s, and return to A1 Pull-Ups."
            ],
            mistakeToAvoid: "Shrugging shoulders up toward your ears at the bottom or bouncing out of the stretch."
          }
        },
        {
          id: "mon-3",
          name: "B1. Incline DB Press (30° Clavicular)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "8 to 10 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Hypertrophy B1 (15 mins with B2/B3)",
          cues: "Crucial for filling out the upper collarbone frame. Pause 1 full second in the deep stretch at the bottom.",
          guideDetails: {
            muscles: "Upper Chest (Clavicular Pectorals), Front Delts",
            setup: "Set bench to a low 30° incline. Tuck elbows to a 45° angle.",
            execution: [
              "Lower dumbbells deep beside your upper chest and hold a 1-second motionless pause.",
              "Press up and slightly inward without clanking weights at the top.",
              "Rest 60s, then perform B2 Chest-Supported Row."
            ],
            mistakeToAvoid: "Setting the bench too steep (60°+), which turns it into a shoulder press."
          }
        },
        {
          id: "mon-4",
          name: "B2. Chest-Supported Row + Lateral Raise Giant Set",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 Rows + 15 Lateral Raises",
          rir: "0–1 rep in reserve",
          restSeconds: 75,
          category: "Paired Frame Builder B2",
          cues: "Do 10 Chest-Supported Rows (1s squeeze), then immediately grab light DBs for 15 Lateral Raises to cap your shoulders.",
          guideDetails: {
            muscles: "Mid-Back Thickness (Rhomboids/Traps) + Lateral Deltoid Caps",
            setup: "Lie chest-down on a 30–45° incline bench with your row dumbbells and lighter lateral raise dumbbells on the floor.",
            execution: [
              "Perform 10 strict Chest-Supported Rows driving elbows toward hips with a 1s pause at the top.",
              "Immediately stand up and perform 15 controlled Lateral Raises in the scapular plane (leading with pinkies/elbows).",
              "Rest 75s before returning to B1 Incline DB Press."
            ],
            mistakeToAvoid: "Heaving weights with momentum instead of isolating the mid-back and side delts."
          }
        },
        {
          id: "mon-5",
          name: "C. Post-Lift Treadmill Zone 2 Flush",
          defaultSets: 1,
          setsLabel: "1 block",
          repsLabel: "15 mins",
          rir: "Easy Zone 2 (Conversational)",
          restSeconds: 0,
          category: "Visceral Fat Oxidation (15 mins)",
          cues: "1.0–1.5% incline. Easy conversational jog to oxidize fatty acids without spiking cortisol.",
          guideDetails: {
            muscles: "Mitochondrial Density, Insulin Sensitivity, Cardiovascular Base",
            setup: "Set treadmill to 1.0–1.5% incline immediately after lifting.",
            execution: [
              "Jog at an easy pace where you could comfortably speak full sentences (65–70% Max HR).",
              "Finish right at the 15-minute mark so your total Monday session stays right around 52 minutes."
            ],
            mistakeToAvoid: "Running too fast and turning an insulin-sensitizing aerobic flush into a high-cortisol race."
          }
        }
      ]
    },
    {
      dayIndex: 1,
      dayName: "Tuesday",
      shortName: "TUE",
      sessionTitle: "Lower A (Quads, Soleus & Core)",
      sessionType: "lower",
      focus: "Athletic Leg Drive, Shin Resilience & Waist Tightening",
      estimatedMinutes: 48,
      timeBreakdown: "16m Hack Squat · 16m Split Squat + Calf Pair · 14m Extension + Core Pair",
      exercises: [
        {
          id: "tue-1",
          name: "1. Hack Squat or High-Bar Back Squat",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "6 to 8 reps",
          rir: "Leave 2 reps in the tank",
          restSeconds: 150,
          category: "Primary Quad Compound (16 mins)",
          cues: "3 high-quality working sets. Full depth (hamstrings cover calves); 2s controlled descent.",
          guideDetails: {
            muscles: "QuadricepsSweep, Glutes",
            setup: "Shoulder-width stance, toes turned out 15°. Brace abs tightly.",
            execution: [
              "Lower on a 2-second count until hamstrings press against calves at full ankle flexion.",
              "Drive forcefully out of the bottom while leaving 2 reps in reserve so legs stay fresh for running."
            ],
            mistakeToAvoid: "Doing 5+ exhausting sets of half-squats—3 deep, intense sets stimulate maximum growth in 15 minutes."
          }
        },
        {
          id: "tue-2",
          name: "A1. DB Bulgarian Split Squats",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "8 to 10 reps per leg",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Unilateral A1 (16 mins with A2)",
          cues: "Pair with A2 Seated Calf Raises. Slight forward torso lean; front knee tracks over toes.",
          guideDetails: {
            muscles: "Quads, Gluteus Maximus & Hip Stabilizers",
            setup: "Back foot laces resting on bench pad; hold dumbbells at sides.",
            execution: [
              "Lower under control until rear knee lightly kisses the floor.",
              "Drive through the mid-foot of your front leg, rest 60s, and move straight to A2 Seated Calf Raises."
            ],
            mistakeToAvoid: "Pushing off the back leg instead of keeping 90% of load on the front leg."
          }
        },
        {
          id: "tue-3",
          name: "A2. Seated Calf Raises (Soleus Armor)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "12 to 15 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Running Prehab A2",
          cues: "Mandatory 2-second pause at the bottom stretch on every rep to bulletproof shins for treadmill running.",
          guideDetails: {
            muscles: "Soleus (absorbs 6–8× bodyweight impact during running)",
            setup: "Balls of feet on block with knees bent 90°.",
            execution: [
              "Sink heels into a deep stretch and hold for 2 full seconds.",
              "Press all the way up onto your big toes, pause 1s, then return to A1 Split Squats."
            ],
            mistakeToAvoid: "Bouncing rapidly out of the bottom using Achilles tendon recoil."
          }
        },
        {
          id: "tue-4",
          name: "B1. Seated Leg Extensions",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "12 to 15 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 45,
          category: "Paired Finisher B1 (14 mins with B2)",
          cues: "Hold a hard 1-second squeeze at the top of every rep; pair directly with B2 Hanging Leg Raises.",
          guideDetails: {
            muscles: "Rectus Femoris & Teardrop VMO",
            setup: "Align knee joint with machine pivot and pull hips firmly into the seat.",
            execution: [
              "Extend legs completely, lock quads for 1 second, and lower over 2 seconds.",
              "Rest 45s and move to the pull-up bar for B2 Hanging Leg Raises."
            ],
            mistakeToAvoid: "Swinging the weight stack ballistically."
          }
        },
        {
          id: "tue-5",
          name: "B2. Strict Hanging Leg Raises",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 15 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Core & Muscle-Up Kip Control B2",
          cues: "Curl your tailbone upward at the top. Builds razor-sharp lower abs and core compression for the Muscle-Up.",
          guideDetails: {
            muscles: "Rectus Abdominis, Hip Flexors, Lat Straight-Arm Engagement",
            setup: "Active shoulder hang from pull-up bar.",
            execution: [
              "Press down slightly on the bar with straight arms (engages lats like a muscle-up).",
              "Raise legs and curl pelvis upward so knees/toes rise above hip level, then lower without swinging."
            ],
            mistakeToAvoid: "Swinging wildly or only lifting knees halfway with a flat lower back."
          }
        }
      ]
    },
    {
      dayIndex: 2,
      dayName: "Wednesday",
      shortName: "WED",
      sessionTitle: "Active Mobility & Insulin Reset",
      sessionType: "rest",
      focus: "8,000+ Steps, False-Grip Wrist Mobility & Protein Synthesis",
      estimatedMinutes: 20,
      timeBreakdown: "15m Brisk Walk · 5m Wrist & Elbow Prehab",
      exercises: [
        {
          id: "wed-1",
          name: "1. Post-Meal Brisk Walk (Insulin Sensitivity)",
          defaultSets: 1,
          setsLabel: "1 walk",
          repsLabel: "15 to 20 mins",
          rir: "Easy Zone 1",
          restSeconds: 0,
          category: "Metabolic Recovery",
          cues: "A 15-minute walk after lunch or dinner clears blood glucose into muscle without needing extra insulin.",
          guideDetails: {
            muscles: "GLUT4 Glucose Disposal & Parasympathetic Recovery",
            setup: "Outdoors flat walk after your largest meal.",
            execution: [
              "Walk at an easy, relaxed pace for 15–20 minutes.",
              "Hit your 4 × ~38g protein meals today while keeping carbs slightly lower on this non-lifting day."
            ],
            mistakeToAvoid: "Slashing protein on rest days when muscles are actively repairing from Monday and Tuesday."
          }
        },
        {
          id: "wed-2",
          name: "2. Muscle-Up False Grip & Elbow Prehab",
          defaultSets: 2,
          setsLabel: "2 sets",
          repsLabel: "15 slow reps",
          rir: "Prehab",
          restSeconds: 45,
          category: "Tendon Conditioning",
          cues: "Wrist flexion stretches & light pronation curls to keep inner elbows bulletproof for Thursday's Muscle-Up session.",
          guideDetails: {
            muscles: "Wrist Flexors, Pronator Teres, Medial Epicondyle",
            setup: "Light 2–3kg weight or hammer.",
            execution: [
              "Slowly rotate forearm palm-up to palm-down for 15 reps per arm.",
              "Stretch wrists gently for 30 seconds so false-grip transitions feel effortless."
            ],
            mistakeToAvoid: "Ignoring tight forearms before high-velocity muscle-up practice."
          }
        }
      ]
    },
    {
      dayIndex: 3,
      dayName: "Thursday",
      shortName: "THU",
      sessionTitle: "Muscle-Up Lab + Upper B Volume",
      sessionType: "strength-run",
      focus: "Fresh Muscle-Up Skill Progression, Paired Volume Calisthenics & Strides",
      estimatedMinutes: 54,
      timeBreakdown: "8m Muscle-Up Skill · 18m Pull/Dip Pair · 12m Arm/Delt Pair · 16m Run",
      exercises: [
        {
          id: "thu-mu",
          name: "0. Bar Muscle-Up Skill Progression (Done 100% Fresh)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "1 to 4 explosive reps",
          rir: "Maximum Bar Speed (Never Fatigued)",
          restSeconds: 90,
          dynamicKey: "thu_muscleup",
          category: "Skill Primer (8 mins)",
          cues: "Always do this FIRST while your nervous system is 100% fresh. Pull around the bar in a C-curve and snap shoulders forward over the bar.",
          guideDetails: {
            muscles: "Explosive Lats, Triceps Transition, Core Hollow-to-Arch Pop",
            setup: "Stand 25–30cm behind the pull-up bar. Chalk hands and take an overhand or semi-false grip.",
            execution: [
              "Jump to the bar so your body swings slightly forward into a tight hollow-body C-curve.",
              "As you swing back, pull explosively by driving elbows down toward your hips (aim bar to belly button).",
              "At the peak of the pull, snap your head and chest forward OVER the bar and press out to lockout."
            ],
            mistakeToAvoid: "Pulling straight vertically into the bar like a normal slow pull-up—you must arc around the bar."
          }
        },
        {
          id: "thu-1",
          name: "A1. Volume Pull-Ups (BW -> Weighted)",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "6 to 10 reps",
          rir: "Stop 1–2 reps before failure",
          restSeconds: 75,
          dynamicKey: "upperB_volPullup",
          category: "Paired Volume A1 (18 mins with A2)",
          cues: "Pair with A2 Tempo Dips (75s rest between). Crisp, full-range reps to widen your upper back.",
          guideDetails: {
            muscles: "Latissimus Dorsi, Teres Major, Biceps",
            setup: "Follow this week's exact rep/weight target shown on the pill.",
            execution: [
              "Perform 4 clean sets with explosive concentric speed and a controlled lowering phase.",
              "Rest 75 seconds, then move immediately to A2 Tempo Dips."
            ],
            mistakeToAvoid: "Grinding to failure on Set 1 and losing reps on Sets 2–4."
          }
        },
        {
          id: "thu-2",
          name: "A2. Tempo Parallel Bar or Straight-Bar Dips",
          defaultSets: 4,
          setsLabel: "4 sets",
          repsLabel: "8 to 12 reps",
          rir: "1 rep in reserve",
          restSeconds: 75,
          category: "Paired Volume A2",
          cues: "3-second lowering phase, 1-second bottom pause, explosive press up. Do 1–2 sets on a Straight Bar to mimic the Muscle-Up lockout!",
          guideDetails: {
            muscles: "Pectorals, Anterior Delts, Triceps Lockout",
            setup: "Parallel bars or straight pull-up bar (top support position).",
            execution: [
              "Lower on a strict 3-2-1 count.",
              "Pause 1 second at the bottom, press up explosively, rest 75s, and return to A1 Pull-Ups."
            ],
            mistakeToAvoid: "Rushing the 3-second lowering phase."
          }
        },
        {
          id: "thu-3",
          name: "B1. Overhead Cable Tricep Extension + Face Pull Superset",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "12 Extensions + 15 Face Pulls",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Arm & Rear Delt Armor B1 (12 mins with B2)",
          cues: "Stretches the long head of the triceps (crucial for elbow health & arm size) paired immediately with Rear Delt Face Pulls.",
          guideDetails: {
            muscles: "Triceps Long Head + Rear Delts & Rotator Cuff",
            setup: "Rope attachment on cable stack.",
            execution: [
              "Perform 12 Overhead Rope Tricep Extensions letting forearms drop deep behind your head.",
              "Immediately step back and perform 15 Face Pulls to forehead level with external shoulder rotation."
            ],
            mistakeToAvoid: "Skipping rear delts—3D rear delts complete the wide-shoulder frame and protect your rotator cuffs."
          }
        },
        {
          id: "thu-4",
          name: "B2. Incline Dumbbell Curls (Long-Head Stretch)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Bicep Peak B2",
          cues: "Keep elbows pinned behind your torso on a 45° bench for maximum stretched-position bicep growth.",
          guideDetails: {
            muscles: "Biceps Brachii (Long Head Peak)",
            setup: "Sit back on a 45° incline bench with arms hanging straight down.",
            execution: [
              "Curl dumbbells up while keeping upper arms vertical and pinned in place.",
              "Lower all the way to full elbow extension at the bottom."
            ],
            mistakeToAvoid: "Swinging elbows forward at the start of the curl."
          }
        },
        {
          id: "thu-5",
          name: "C. Post-Lift Treadmill + 4×20s Strides",
          defaultSets: 1,
          setsLabel: "1 block",
          repsLabel: "16 mins",
          rir: "12m Zone 2 + 4×20s fast",
          restSeconds: 0,
          category: "Aerobic + Fast-Twitch Strides (16 mins)",
          cues: "12 mins easy @ 1.0% incline + 4 × 20-second smooth accelerations at 5K pace (40s walk between).",
          guideDetails: {
            muscles: "Running Economy & Fast-Twitch Recruitment",
            setup: "1.0% treadmill incline.",
            execution: [
              "Jog 12 minutes easy in Zone 2.",
              "In the final 4 minutes, run 4 × 20s smooth strides at 5K pace with 40s easy walk recovery."
            ],
            mistakeToAvoid: "Turning 20s strides into an all-out strained sprint."
          }
        }
      ]
    },
    {
      dayIndex: 4,
      dayName: "Friday",
      shortName: "FRI",
      sessionTitle: "Lower B (Posterior & V-Taper Core)",
      sessionType: "lower",
      focus: "Hamstring/Glute Power + Hollow-Body Core in 46 Minutes",
      estimatedMinutes: 46,
      timeBreakdown: "16m RDL · 15m Leg Curl + Calf Pair · 15m Hip Thrust + Ab Wheel Pair",
      exercises: [
        {
          id: "fri-1",
          name: "1. Romanian Deadlifts (RDL)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "8 to 10 reps",
          rir: "Leave 2 reps in the tank",
          restSeconds: 150,
          category: "Primary Posterior Compound (16 mins)",
          cues: "Use straps so grip stays fresh. Push hips straight back, keep lats locked, stop mid-shin when hips stop moving back.",
          guideDetails: {
            muscles: "Hamstrings, Gluteus Maximus, Upper/Lower Back Isometric",
            setup: "Unrack bar from thigh height with lifting straps.",
            execution: [
              "Soften knees 15° and keep that angle frozen.",
              "Send hips straight back toward the wall behind you while keeping the bar grazing your thighs/shins.",
              "Drive hips forward as soon as you feel a deep hamstring stretch at mid-shin."
            ],
            mistakeToAvoid: "Rounding your lower back to touch the plates to the floor."
          }
        },
        {
          id: "fri-2",
          name: "A1. Seated Leg Curls",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "0–1 rep in reserve",
          restSeconds: 60,
          category: "Paired Hamstring Hypertrophy A1 (15 mins with A2)",
          cues: "Lean slightly forward over the thigh pad to stretch hamstrings at long muscle lengths. Pair with A2 Standing Calves.",
          guideDetails: {
            muscles: "Hamstrings (Hypertrophy at Long Muscle Lengths)",
            setup: "Lock thigh pad tightly above knees.",
            execution: [
              "Curl lower pad all the way underneath the seat, hold 1s, and control the 2s eccentric.",
              "Rest 60s and step into A2 Standing Calf Raises."
            ],
            mistakeToAvoid: "Letting the weight stack slam between reps."
          }
        },
        {
          id: "fri-3",
          name: "A2. Standing Calf Raises",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Gastrocnemius Power A2",
          cues: "Keep knees straight (unlocked); 2-second stretch at the bottom, 1-second squeeze at top.",
          guideDetails: {
            muscles: "Gastrocnemius & Achilles Tendon Stiffness",
            setup: "Balls of feet on calf block with knees straight.",
            execution: [
              "Lower heels into a full 2-second stretch at the bottom.",
              "Drive all the way up onto big toes, hold 1s, then return to A1 Leg Curls."
            ],
            mistakeToAvoid: "Bending knees or bouncing quickly."
          }
        },
        {
          id: "fri-4",
          name: "B1. Barbell Hip Thrusts or High-Foot Leg Press",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Propulsion & Core B1 (15 mins with B2)",
          cues: "Chin tucked, ribs down, 1-second glute squeeze at lockout. Pair with B2 Ab Wheel Rollouts.",
          guideDetails: {
            muscles: "Gluteus Maximus (Running Propulsion)",
            setup: "Upper back on bench pad; shins vertical at top.",
            execution: [
              "Drive through heels to full hip lockout without overarching lower back.",
              "Hold 1s at the top, rest 60s, and move to B2 Ab Wheel Rollouts."
            ],
            mistakeToAvoid: "Hyperextending the lower back instead of locking out with the glutes."
          }
        },
        {
          id: "fri-5",
          name: "B2. Ab Wheel Rollouts (Hollow-Body Transfer)",
          defaultSets: 3,
          setsLabel: "3 sets",
          repsLabel: "10 to 12 reps",
          rir: "1 rep in reserve",
          restSeconds: 60,
          category: "Paired Anti-Extension Core B2",
          cues: "Keeps your waist tight and builds the exact straight-arm lat + core tension needed for Bar Muscle-Ups.",
          guideDetails: {
            muscles: "Transverse & Rectus Abdominis, Lats, Serratus Anterior",
            setup: "Kneel on pad with ab wheel under shoulders.",
            execution: [
              "Tuck pelvis under (posterior tilt) and brace abs hard.",
              "Roll out as far as you can without letting your lower back sag, then pull back through your lats and abs."
            ],
            mistakeToAvoid: "Letting hips sag toward the floor."
          }
        }
      ]
    },
    {
      dayIndex: 5,
      dayName: "Saturday",
      shortName: "SAT",
      sessionTitle: "Treadmill Quality Run",
      sessionType: "run",
      focus: "30-Minute Lactate Threshold & VO2max Session",
      estimatedMinutes: 30,
      timeBreakdown: "5m Warm-Up · 18–20m Main Quality Set · 5m Cool-Down",
      exercises: [
        {
          id: "sat-1",
          name: "1. Dynamic Warm-Up Jog",
          defaultSets: 1,
          setsLabel: "1 block",
          repsLabel: "5 mins",
          rir: "Easy Zone 1–2",
          restSeconds: 0,
          category: "Warm-Up (5 mins)",
          cues: "1.0–1.5% incline; easy jog to warm up calves and Achilles before quality speeds.",
          guideDetails: {
            muscles: "Cardiorespiratory & Tendon Prep",
            setup: "1.0–1.5% treadmill incline.",
            execution: [
              "Start with 1 minute brisk walk, then 4 minutes easy Zone 1–2 jog."
            ],
            mistakeToAvoid: "Starting fast intervals cold."
          }
        },
        {
          id: "sat-2",
          name: "2. Main Quality Run (Weekly Prescription)",
          defaultSets: 1,
          setsLabel: "1 main set",
          repsLabel: "15 to 20 mins",
          rir: "Threshold / 5K Effort",
          restSeconds: 90,
          dynamicKey: "sat_treadmill",
          category: "Primary Quality Session (20 mins)",
          cues: "Follow this week's exact prescription on the badge. Keep cadence light and quick (175+ spm).",
          guideDetails: {
            muscles: "VO2max, Lactate Clearance & Visceral Fat Oxidation",
            setup: "Check your Week 1–26 badge above.",
            execution: [
              "Weeks 1–4: Steady 15–20m Tempo at 10K effort.",
              "Weeks 6–12: Cruise Threshold intervals with 90s easy jog recoveries.",
              "Weeks 14–24: 5K-pace intervals to peak aerobic power."
            ],
            mistakeToAvoid: "Turning controlled threshold intervals into all-out sprinting."
          }
        },
        {
          id: "sat-3",
          name: "3. Cool-Down Walk / Easy Jog",
          defaultSets: 1,
          setsLabel: "1 block",
          repsLabel: "5 mins",
          rir: "Easy Zone 1",
          restSeconds: 0,
          category: "Cool-Down (5 mins)",
          cues: "Bring heart rate smoothly below 120 bpm before stepping off.",
          guideDetails: {
            muscles: "Parasympathetic Transition",
            setup: "Reduce speed to an easy walk/jog.",
            execution: [
              "Walk or jog lightly for 5 minutes, followed by post-workout protein + carbs."
            ],
            mistakeToAvoid: "Stopping dead on the belt right after the last fast rep."
          }
        }
      ]
    },
    {
      dayIndex: 6,
      dayName: "Sunday",
      shortName: "SUN",
      sessionTitle: "Full Rest & Growth Reset",
      sessionType: "rest",
      focus: "Deep Sleep, Creatine + Protein Consistency & Next-Week Prep",
      estimatedMinutes: 15,
      timeBreakdown: "5m Weekly Log Review · 4 Protein Feedings",
      exercises: [
        {
          id: "sun-1",
          name: "1. Sunday Nutrition & Next-Week Check",
          defaultSets: 1,
          setsLabel: "1 check",
          repsLabel: "5 mins",
          rir: "Recovery",
          restSeconds: 0,
          category: "Growth & Supercompensation",
          cues: "Hit your 2.0 g/kg protein target + 5g Creatine today so Monday's Weighted Pull-Ups & Dips feel explosive.",
          guideDetails: {
            muscles: "Systemic CNS & Myofibrillar Supercompensation",
            setup: "Open the 26W Map & South Asian Protocol tab.",
            execution: [
              "Review your completed week and preview Monday's Weighted Pull-Up and Dip targets.",
              "Prioritize 8 hours of sleep tonight."
            ],
            mistakeToAvoid: "Skipping protein meals on Sunday."
          }
        }
      ]
    }
  ]
};
