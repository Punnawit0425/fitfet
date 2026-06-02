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
}
