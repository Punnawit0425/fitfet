// ── Routine data ─────────────────────────────────────────────
// Each routine has a title, a short description, and a weekly schedule.
const routines = {
  ppl: {
    title: "Push Pull Legs (PPL)",
    description:
      "PPL splits your training into three movement patterns: pushing (chest, shoulders, triceps), pulling (back, biceps), and legs. You can run it 3 days a week for beginners or 6 days (repeating the cycle) for more advanced lifters. It's one of the most popular splits because it groups muscles that work together and allows plenty of recovery time.",
    days: [
      "Day 1 — Push: Bench Press, Overhead Press, Tricep Dips",
      "Day 2 — Pull: Barbell Row, Pull-Ups, Bicep Curls",
      "Day 3 — Legs: Squat, Romanian Deadlift, Leg Press",
      "Day 4 — Rest ",
      "Day 5 — Push: Bench Press, Overhead Press, Tricep Dips",
      "Day 6 — Pull: Barbell Row, Pull-Ups, Bicep Curls",
      "Day 7 — Legs: Squat, Romanian Deadlift, Leg Press"
    ],

    // Detailed per-day breakdown shown in the PPL detail section
    dayDetails: [
      {
        name: "Push Day",
        description: "Push trains chest, shoulders, and triceps — all the muscles involved in pressing and pushing movements.",
        muscles: [
          { group: "Chest",     exercises: ["Bench Press", "Incline Dumbbell Press", "Chest Fly"] },
          { group: "Shoulders", exercises: ["Shoulder Press", "Lateral Raise"] },
          { group: "Triceps",   exercises: ["Triceps Pushdown", "Overhead Triceps Extension"] }
        ]
      },
      {
        name: "Pull Day",
        description: "Pull trains back, rear delts, and biceps — all the muscles involved in pulling and rowing movements.",
        muscles: [
          { group: "Back",       exercises: ["Lat Pulldown", "Pull-up", "Seated Row", "Barbell Row"] },
          { group: "Rear Delts", exercises: ["Face Pull", "Rear Delt Fly"] },
          { group: "Biceps",     exercises: ["Barbell Curl", "Hammer Curl", "Preacher Curl"] }
        ]
      },
      {
        name: "Leg Day",
        description: "Legs trains quads, hamstrings, glutes, and calves — the entire lower body in one session.",
        muscles: [
          { group: "Quads",       exercises: ["Squat", "Leg Press", "Leg Extension"] },
          { group: "Hamstrings",  exercises: ["Romanian Deadlift", "Leg Curl"] },
          { group: "Glutes",      exercises: ["Hip Thrust", "Walking Lunge"] },
          { group: "Calves",      exercises: ["Standing Calf Raise", "Seated Calf Raise"] }
        ]
      }
    ]
  },

  ul: {
    title: "Upper Lower Split",
    description:
      "The Upper Lower split divides your training into two types of sessions: upper body days and lower body days. Running 4 days a week, you hit each muscle group twice. It's a great balance between frequency and volume, making it ideal for intermediate lifters who want more sessions than a full-body plan but less complexity than PPL.",
    days: [
      "Day 1 — Upper: Bench Press, Row, Overhead Press, Pull-Ups",
      "Day 2 — Lower: Squat, Romanian Deadlift, Leg Curl, Calf Raises",
      "Day 3 — Rest",
      "Day 4 — Upper: Incline Press, Cable Row, Lateral Raises, Curls",
      "Day 5 — Lower: Deadlift, Leg Press, Lunges, Leg Curl",
      "Days 6–7 — Rest",
    ],

    // Detailed per-day breakdown for Upper Lower
    dayDetails: [
      {
        name: "Upper Day",
        description: "Upper trains chest, back, shoulders, and arms — the entire upper body in one session.",
        muscles: [
          { group: "Chest",    exercises: ["Bench Press", "Incline Dumbbell Press"] },
          { group: "Back",     exercises: ["Pull-Up", "Barbell Row", "Cable Row"] },
          { group: "Shoulders",exercises: ["Overhead Press", "Lateral Raise"] },
          { group: "Biceps",   exercises: ["Barbell Curl", "Hammer Curl"] },
          { group: "Triceps",  exercises: ["Triceps Pushdown", "Skull Crusher"] }
        ]
      },
      {
        name: "Lower Day",
        description: "Lower trains quads, hamstrings, glutes, and calves — the entire lower body in one session.",
        muscles: [
          { group: "Quads",      exercises: ["Squat", "Leg Press", "Leg Extension"] },
          { group: "Hamstrings", exercises: ["Romanian Deadlift", "Leg Curl"] },
          { group: "Glutes",     exercises: ["Hip Thrust", "Walking Lunge"] },
          { group: "Calves",     exercises: ["Standing Calf Raise", "Seated Calf Raise"] }
        ]
      }
    ]
  },

  fb: {
    title: "Full Body Routine",
    description:
      "Full Body training means you work every major muscle group in each session. Training 3 days a week (e.g. Mon / Wed / Fri) gives you a full day of rest between sessions. It's the best choice for beginners because you practice the key movements more often, which builds skill and strength quickly.",
    days: [
      "Day 1 (Mon) — Squat, Bench Press, Barbell Row, Plank",
      "Day 2 (Wed) — Deadlift, Overhead Press, Pull-Ups, Core Work",
      "Day 3 (Fri) — Squat variation, Dips, Dumbbell Row, Cardio",
      "Days 2, 4, 6–7 — Rest & Recovery",
    ],

    // Full Body hits every muscle group every session — one template covers all three days
    dayDetails: [
      {
        name: "Full Body Session",
        description: "Every session trains all major muscle groups. You rotate exercise variations each day to keep training fresh and build overall strength.",
        muscles: [
          { group: "Quads & Glutes", exercises: ["Squat", "Leg Press", "Lunge"] },
          { group: "Hamstrings",     exercises: ["Deadlift", "Romanian Deadlift", "Leg Curl"] },
          { group: "Chest",          exercises: ["Bench Press", "Incline Dumbbell Press", "Dips"] },
          { group: "Back",           exercises: ["Pull-Up", "Barbell Row", "Dumbbell Row"] },
          { group: "Shoulders",      exercises: ["Overhead Press", "Lateral Raise"] },
          { group: "Arms",           exercises: ["Barbell Curl", "Triceps Pushdown"] },
          { group: "Core",           exercises: ["Plank", "Ab Wheel", "Cable Crunch"] }
        ]
      }
    ]
  },
};

// ── showRoutine function ──────────────────────────────────────
// Called when the user clicks a card. Receives the routine key
// (e.g. 'ppl') and updates the detail panel with the matching data.
function showRoutine(key) {
  const routine = routines[key];
  if (!routine) return; // safety check — do nothing for unknown keys

  // Grab the detail panel elements
  const panel = document.getElementById("detail");
  const titleEl = document.getElementById("detail-title");
  const descEl = document.getElementById("detail-desc");
  const daysList = document.getElementById("detail-days");

  // Fill in the text content
  titleEl.textContent = routine.title;
  descEl.textContent = routine.description;

  // Build the schedule list dynamically
  // First clear any items from a previous click
  daysList.innerHTML = "";
  routine.days.forEach(function (dayText) {
    const li = document.createElement("li");

    // Bold the "Day X" label by wrapping it in a <span>
    const parts = dayText.split("—");
    if (parts.length === 2) {
      const label = document.createElement("span");
      label.textContent = parts[0].trim() + " — ";
      li.appendChild(label);
      li.appendChild(document.createTextNode(parts[1].trim()));
    } else {
      li.textContent = dayText;
    }

    daysList.appendChild(li);
  });

  // Highlight the clicked card and remove highlight from others
  document.querySelectorAll(".card").forEach(function (card) {
    card.classList.remove("active");
  });
  document.querySelector('[data-routine="' + key + '"]').classList.add("active");

  // Show the detail panel with a smooth fade-in animation.
  // Step 1: make it visible in the DOM (display: block)
  panel.style.display = "block";
  // Step 2: force a reflow so the browser registers the starting state
  panel.offsetHeight; // reading offsetHeight triggers reflow — do not remove
  // Step 3: add the class that drives the CSS transition
  panel.classList.add("visible");

  // Scroll the panel into view smoothly so the user sees it on mobile
  panel.scrollIntoView({ behavior: "smooth", block: "start" });

  // ── Day-by-day detail section ─────────────────────────────────
  // Build the muscle breakdown for any routine that has dayDetails.
  // Always clear first so switching routines shows fresh content.
  const routineDetail = document.getElementById("routine-detail");
  routineDetail.innerHTML = "";

  if (routine.dayDetails) {
    // Loop over each day entry (varies by routine)
    routine.dayDetails.forEach(function (day) {

      // Outer block for one training day
      const dayBlock = document.createElement("div");
      dayBlock.className = "day-block";

      // Day name heading (e.g. "Push Day")
      const dayTitle = document.createElement("h3");
      dayTitle.className = "day-title";
      dayTitle.textContent = day.name;
      dayBlock.appendChild(dayTitle);

      // Short description of what that day trains
      const dayDesc = document.createElement("p");
      dayDesc.className = "day-desc";
      dayDesc.textContent = day.description;
      dayBlock.appendChild(dayDesc);

      // Row of muscle-group mini-cards
      const muscleGroups = document.createElement("div");
      muscleGroups.className = "muscle-groups";

      day.muscles.forEach(function (muscle) {
        // One card per muscle group
        const muscleCard = document.createElement("div");
        muscleCard.className = "muscle-card";

        // Muscle group label (e.g. "Chest")
        const groupName = document.createElement("h4");
        groupName.textContent = muscle.group;
        muscleCard.appendChild(groupName);

        // List of exercises for that muscle group
        const exerciseList = document.createElement("ul");
        muscle.exercises.forEach(function (exercise) {
          const item = document.createElement("li");
          item.textContent = exercise;
          exerciseList.appendChild(item);
        });
        muscleCard.appendChild(exerciseList);

        muscleGroups.appendChild(muscleCard);
      });

      dayBlock.appendChild(muscleGroups);
      routineDetail.appendChild(dayBlock);
    });
  }
}
