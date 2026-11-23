// Week 15 lab: the final study plan. Shapes: docs/COURSE_V2.md
// From the legacy weeks-data.js week 12 labs and deliverable ("Group missed questions by domain",
// "Write a short, focused final study plan"). Answers are personal, so nothing is auto-checked.
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['15.1'] = {
  id: '15.1', week: 15, title: 'Your final study plan', mins: 15, env: 'browser',
  goal: "Pull together everything Weeks 14 and 15 told you about your readiness, and write a short, dated plan that takes you from today to exam day.",
  youNeed: [
    "Your mock exam PDF reports from Week 14 and this week",
    "Your PBQ lab scores (the PBQ page shows your best score on each lab)",
    "Your Lab 14.1 answers, to compare against",
    "About 15 minutes"
  ],
  steps: [
    {
      title: 'Gather your numbers',
      body: [
        "Open your mock exam results and your PDF reports. Note your <strong>best</strong> score and your <strong>latest</strong> score. Open the PBQ labs page and count how many of the ten labs you have scored 100% on.",
        "Then open your Lab 14.1 answers. Compare your misses by domain then and now. A domain that improved a lot may only need light review. A domain that did not move is where your plan starts."
      ]
    },
    {
      title: 'Check for memorized answers',
      body: [
        "Pick five questions you got right on your latest attempt in your weakest domain. Cover the options and explain each answer out loud. Any you cannot explain go on your topic list, even though you got them right."
      ]
    },
    {
      title: 'Choose your exam date and format',
      body: [
        "Pick the date you will sit the exam, or the date you will book it. Decide between a Pearson VUE test center and an online exam. Read CompTIA's exam-day and ID pages (the two reading steps before this lab) and confirm your ID will be accepted."
      ]
    },
    {
      title: 'Write the plan',
      body: [
        "Write one line per study day between now and your exam date. Each line names a topic from your list, what you will do (re-read a lesson, retake a weekly quiz, redo a PBQ lab, practice questions), and how long. Put your weakest domain first and keep sessions short. Leave the day before the exam light.",
        "Finish with your exam-day plan: when you will check the clock, how you will handle PBQs, and how much time you will keep at the end for flagged questions."
      ],
      tip: "A good plan line looks like: 'Tue: Domain 4, incident response order and forensics. Re-read Talk 14.4, retake the Week 8 quiz, 45 min.'"
    }
  ],
  checkpoints: [
    { id: 'best', q: "Your best mock exam score, as a percentage.", kind: 'number' },
    { id: 'latest', q: "Your latest mock exam score, as a percentage.", kind: 'number' },
    { id: 'pbq100', q: "How many of the ten PBQ labs have you scored 100% on?", kind: 'number' },
    { id: 'weak', q: "Which domains are still your weakest, and how did they change since Week 14?", kind: 'text' },
    { id: 'topics', q: "Your topic list: the specific topics you will study, including any answers you could not explain.", kind: 'text' },
    { id: 'date', q: "Your exam date (or booking date), and test center or online.", kind: 'text' },
    { id: 'id', q: "Have you checked that your ID meets CompTIA's requirements?", kind: 'choice', opts: ['Yes, it meets them', 'Yes, and I need to fix something first', 'Not yet'] },
    { id: 'plan', q: "Your day-by-day study plan, one line per day.", kind: 'text' },
    { id: 'examday', q: "Your exam-day plan: clock checks, PBQ strategy, and time saved for flagged questions.", kind: 'text' }
  ],
  reflection: "What changed between your first mock exam attempt in Week 14 and now, and what will you do differently on the real exam?"
};
