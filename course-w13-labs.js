// Week 13 labs (capstone). Shapes: docs/COURSE_V2.md
// Scenario files: materials/week9/. Students work from their own engagement folder.
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['13.1'] = {
  id: '13.1', week: 13, title: 'Number check and Q&A prep', mins: 15, env: 'browser',
  goal: "Before you rehearse, make sure your four documents tell the same story with the same numbers, then prepare calm, evidence-based answers to the three challenges you are most likely to face in the outbrief.",
  youNeed: [
    "Your engagement folder: questionnaire workbook, risk register and POA&amp;M workbook, Executive Summary, CSA report, and briefing deck",
    "Your contradictions log (fieldwork worksheets, Worksheet 2)",
    "Talk 13.3 finished"
  ],
  steps: [
    {
      title: 'Open everything side by side',
      body: [
        "Open the Dashboard sheet of your questionnaire workbook. It is the <strong>source of truth</strong>: the one place every other number must come from. Then open your Executive Summary, your CSA report, and your briefing deck.",
        "Pick one rounding rule and use it everywhere, for example one decimal place for percentages (41.7%) and two for CMM (2.67). A number rounded two different ways looks like two different numbers to a reader."
      ]
    },
    {
      title: 'Check the headline numbers',
      body: [
        "Find the overall compliance percentage, the overall CMM level, and the overall hygiene rating in each of the four places: the Dashboard, the Executive Summary (Overall Posture and the table), the CSA report (section 1 and section 4), and the deck (slides 4 and 5).",
        "Then check the six function rows (Govern to Recover) in the same way. Fix every mismatch in the document, not in the workbook, unless you find a real scoring error. If you do change a score, the Dashboard changes too, so check every document again."
      ],
      tip: "Search each document for the percent sign (%). It is a fast way to find every number you wrote."
    },
    {
      title: 'Check the risks and the roadmap',
      body: [
        "Your top risks must have the same titles and ratings in the Executive Summary (Priority Risks), the CSA report (section 5), the deck (slide 8), and the Risk Register sheet. Count the risks by rating (Critical, High, Medium, Low) and check that the heat map counts match.",
        "Your roadmap phases (0-30, 31-90, and 91-180 days) must list the same actions in the CSA report (section 6) and on deck slide 9, and every action must exist in your POA&amp;M."
      ]
    },
    {
      title: 'Predict the challenges',
      body: [
        "Leaders challenge the scores that surprise or worry them. Write down the three challenges you are most likely to hear. Use these three people as a guide:",
        "<strong>The CEO:</strong> a question about the overall score or the cost of fixing things, such as 'Why is our score so low when we fixed so much after April?' <strong>The IT Manager:</strong> a challenge to a technical score he thinks is too harsh. <strong>A department manager:</strong> a question about priority, such as 'Why is this fix first?'",
        "Your contradictions log is the best place to look. Wherever what someone told you differs from the evidence, expect that person to repeat their version in the room."
      ]
    },
    {
      title: 'Write evidence-based answers',
      body: [
        "For each challenge, write a two- or three-sentence answer. Name the evidence IDs (EV-, INT-, or SCAN-), say what they show, and say how that led to the level or rating. Keep the answer about practices, not people.",
        "Example of the shape (practice wording, not a Northgate answer): 'The policy says every visitor signs the visitor book. The book has no entries for three of the last five days. That is why we scored visitor control low, and it is a quick, cheap fix.'"
      ]
    }
  ],
  checkpoints: [
    { id: 'c1', q: "Practice case: your Dashboard shows 48.2% overall. Your Executive Summary says 48.2%, but your draft deck says 48%. What should you do?", kind: 'choice', opts: ["Leave it; 48% is close enough", "Change the deck to 48.2% so all documents match", "Change the Executive Summary to 48%", "Remove the number from the deck"], answer: 1 },
    { id: 'c2', q: "You find a function score in the CSA report that does not match the workbook Dashboard. Which document is the source of truth?", kind: 'choice', opts: ["The briefing deck", "The CSA report", "The Executive Summary", "The questionnaire workbook Dashboard"], answer: 3 },
    { id: 'c3', q: "Your headline numbers: write overall compliance, CMM level, and hygiene rating exactly as they now appear in all four documents. Note anything you had to fix.", kind: 'text' },
    { id: 'c4', q: "List your top five risks with their ratings, and confirm they read the same in the Executive Summary, CSA section 5, deck slide 8, and the Risk Register.", kind: 'text' },
    { id: 'c5', q: "Challenge 1 (from the CEO) and your answer, with evidence IDs.", kind: 'text' },
    { id: 'c6', q: "Challenge 2 (from the IT Manager) and your answer, with evidence IDs.", kind: 'text' },
    { id: 'c7', q: "Challenge 3 (from a department manager) and your answer, with evidence IDs.", kind: 'text' },
    { id: 'c8', q: "Your headline: the one sentence you want a leader to remember after the outbrief.", kind: 'text' }
  ],
  reflection: "Which part of your report are you least sure about? What evidence would make you more sure, and how will you answer if someone asks about it?"
};

COURSE_LABS['13.2'] = {
  id: '13.2', week: 13, title: 'Outbrief reflection', mins: 10, env: 'browser',
  goal: "Right after you present, record what you were asked, how you answered, and what you would do better. Real assessors keep these notes to improve their next engagement.",
  youNeed: [
    "Your outbrief just finished (do this lab within the hour, while you remember it)",
    "Your briefing deck and notes from Lab 13.1"
  ],
  steps: [
    {
      title: 'Write it down now',
      body: [
        "Memory fades fast. List every question you were asked, in the asker's words as closely as you can. Mark the ones that challenged a score.",
        "For each answer, ask yourself: did I name the evidence? Did I stay calm? Did I talk about practices, not people? Did I change anything without new evidence?"
      ]
    },
    {
      title: 'Separate strong from weak',
      body: [
        "A strong answer named evidence IDs, explained how you chose the level, and was short. A weak answer guessed, apologized for the work, or drifted into detail the asker did not need.",
        "If staff gave you feedback, write it down as they said it. Then write one change you would make to the deck or report because of it."
      ]
    }
  ],
  checkpoints: [
    { id: 'c1', q: "During an outbrief, someone shows you a document you had not seen, and it might change a score. What is the right handling?", kind: 'choice', opts: ["Change the score immediately so the client is happy", "Refuse to look at it because fieldwork is closed", "Thank them, note it, review it afterward, and change the score only if the evidence supports it", "Ask the rest of the room to vote on the score"], answer: 2 },
    { id: 'c2', q: "List the questions you were asked. Mark each one that challenged a score.", kind: 'text' },
    { id: 'c3', q: "Which of your answers were strong, and why? Name the evidence IDs you used.", kind: 'text' },
    { id: 'c4', q: "Where could your evidence or your wording have been better?", kind: 'text' },
    { id: 'c5', q: "Did any score change, or do you need to review new evidence? If yes, say what and why. If no, write 'No change'.", kind: 'text' },
    { id: 'c6', q: "Feedback you received from staff, and one change you would make because of it.", kind: 'text' }
  ],
  reflection: "A job interviewer asks: 'Tell me about a project where you had to defend your conclusions.' Write the answer you would give, using this capstone."
};
