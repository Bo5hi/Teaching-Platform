// Week 12 labs (Capstone, week 3). Shapes: docs/COURSE_V2.md
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['12.1'] = {
  id: '12.1', week: 12, title: 'Check the Dashboard by hand', mins: 20, env: 'browser',
  goal: "Prove you can do the Dashboard's math yourself. First work through a practice team's numbers (not Northgate's), which are checked right away. Then check one function of your own Northgate workbook by hand and record your Dashboard results.",
  youNeed: [
    "Talk 12.1 finished, and all 41 questions in your copy of <a href=\"materials/week9/northgate-questionnaire.xlsx\" target=\"_blank\" rel=\"noopener\">northgate-questionnaire.xlsx</a> scored",
    "A calculator (the one on your computer is fine) and scrap paper",
    "About 20 minutes"
  ],
  steps: [
    {
      title: 'The practice numbers',
      body: [
        "A practice team assessed a different, made-up client with a small two-function questionnaire. These are their answers. They are <strong>not</strong> Northgate's questions or answers.",
        "<strong>Function A</strong> (4 questions): A1 weight 10, Fully. A2 weight 8, Almost. A3 weight 6, Somewhat. A4 weight 4, Not Compliant.",
        "<strong>Function B</strong> (3 questions): B1 weight 9, Not Compliant. B2 weight 9, Mostly. B3 weight 6, Fully.",
        "Level values: Fully 100, Almost 75, Mostly 50, Somewhat 25, Not Compliant 0."
      ],
      tip: "Work in points first (weight x level, for example 10 x 100 = 1,000), then divide. It avoids decimal mistakes."
    },
    {
      title: 'Function A',
      body: [
        "Multiply each weight by its level and add them up. That is Function A's weighted score. Add the four weights: that is its total weight. Divide to get compliance, then use CMM = 1 + 4 x compliance (compliance as a decimal) and the hygiene bands: Basic below 35%, Intermediate 35-69%, Good 70% and up.",
        "Answer checkpoints 1 to 5."
      ]
    },
    {
      title: 'Function B and the overall score',
      body: [
        "Do the same for Function B. Then work out the overall score the right way: add both weighted scores and divide by the total of all seven weights. Do not average the two function percentages.",
        "Answer checkpoints 6 to 9. Checkpoint 9 shows why the Dashboard never averages functions."
      ]
    },
    {
      title: 'Check your own workbook',
      body: [
        "Open your Northgate workbook. On the Dashboard sheet, confirm that the Answered column equals the Questions column in every row. A blank Response counts as 0% and looks exactly like Not Compliant.",
        "Pick one function with 4 or 5 questions (Detect, Respond, or Recover). On paper, multiply each question's weight by its level, add them up, and divide by the function's total weight. Compare your result with the Dashboard's Compliance % for that function. If they differ, find out why before you go on.",
        "Copy the Dashboard's OVERALL row into checkpoint 10 and paste your hand calculation into checkpoint 11."
      ]
    }
  ],
  checkpoints: [
    { id: 'c1', q: "Function A: total weighted score in points (sum of weight x level).", kind: 'number', answer: 1750 },
    { id: 'c2', q: "Function A: total weight.", kind: 'number', answer: 28 },
    { id: 'c3', q: "Function A: weighted compliance, in percent (one decimal, for example 12.3).", kind: 'text', answer: ['62.5', '62.5%', '62.50', '62.50%'] },
    { id: 'c4', q: "Function A: CMM score (two decimals allowed).", kind: 'text', answer: ['3.5', '3.50'] },
    { id: 'c5', q: "Function A: hygiene rating?", kind: 'choice', opts: ['Basic', 'Intermediate', 'Good'], answer: 1 },
    { id: 'c6', q: "Function B: weighted compliance, in percent (two decimals allowed).", kind: 'text', answer: ['43.75', '43.75%', '43.8', '43.8%'] },
    { id: 'c7', q: "Function B: CMM score (two decimals).", kind: 'text', answer: ['2.75', '2.8'] },
    { id: 'c8', q: "Overall weighted compliance for the practice client, in percent (one decimal).", kind: 'text', answer: ['53.8', '53.8%', '53.85', '53.85%'] },
    { id: 'c9', q: "If you wrongly averaged the two function percentages, what would you get (two decimals)? Compare it with checkpoint 8.", kind: 'text', answer: ['53.13', '53.13%', '53.125', '53.1', '53.1%'] },
    { id: 'c10', q: "Your Northgate Dashboard OVERALL row: compliance %, CMM, and hygiene rating, exactly as the Dashboard shows them.", kind: 'text' },
    { id: 'c11', q: "Paste your hand calculation for one Northgate function (each weight x level, the sums, the division) and say whether it matched the Dashboard.", kind: 'paste' }
  ],
  reflection: "Which of your gaps costs Northgate the most points (weight x points lost), and does that match what you think is its most important problem? Explain in two or three sentences."
};

COURSE_LABS['12.2'] = {
  id: '12.2', week: 12, title: 'Analysis hand-in: scores, risks, and POA&M', mins: 15, env: 'browser',
  goal: "Hand in this week's deliverable: your finished questionnaire workbook with its Dashboard, your gap list, and your risk register, heat map, and POA&M. You share one folder link and report your key numbers so your instructor can grade the work against the Week 12 rubric.",
  youNeed: [
    "Your scored <a href=\"materials/week9/northgate-questionnaire.xlsx\" target=\"_blank\" rel=\"noopener\">questionnaire workbook</a> (all 41 questions) and your <a href=\"materials/week9/northgate-risk-register-poam.xlsx\" target=\"_blank\" rel=\"noopener\">risk register and POA&amp;M workbook</a>",
    "Your engagement folder (Google Drive or OneDrive), shared so your instructor can view it",
    "About 15 minutes"
  ],
  steps: [
    {
      title: 'Put the files in your engagement folder',
      body: [
        "Your shared engagement folder should now hold: the questionnaire workbook (all 41 scored, evidence IDs and reasons filled in), your fieldwork worksheets with the gap list, and the risk register and POA&amp;M workbook with the Risk Register, Heat Map, and POA&amp;M sheets filled in, plus your roadmap.",
        "Use clear file names, for example <code>Northgate-Questionnaire-YourName.xlsx</code>. Check the sharing setting: anyone with the link at MCCoE can view. Keep using the same folder next week."
      ]
    },
    {
      title: 'Run a last check',
      body: [
        "Questionnaire: Answered equals Questions in every Dashboard row. Every row has evidence IDs (or 'no evidence provided') and a reason.",
        "Risk register: 8 to 10 risks, each with evidence IDs, likelihood, impact, a rating from the matrix, a CSF category, a Northgate owner, and a status. The Heat Map count adds up to your number of risks.",
        "POA&amp;M: count your Somewhat and Not Compliant questions on the Dashboard. You need at least that many items, plus one for each Mostly question behind a Critical or High risk. Every item has a priority, action, owner, milestone, and effort."
      ]
    },
    {
      title: 'Report your numbers',
      body: [
        "Fill in the checkpoints from your own workbooks. Your instructor compares them with your files, so copy them exactly. Then submit the lab. You can fix and submit again until the due time."
      ]
    }
  ],
  checkpoints: [
    { id: 'c1', q: "The link to your shared engagement folder.", kind: 'text' },
    { id: 'c2', q: "Overall result from your Dashboard: compliance %, CMM score, and hygiene rating.", kind: 'text' },
    { id: 'c3', q: "Paste your Dashboard function table (Function, Compliance %, CMM, Hygiene) for all six functions.", kind: 'paste' },
    { id: 'c4', q: "How many risks are in your register, and how many are Critical, High, Medium, and Low?", kind: 'text' },
    { id: 'c5', q: "How many POA&M items do you have? List the Mostly questions you added because they drive a Critical or High risk, and name that risk.", kind: 'text' },
    { id: 'c6', q: "Your three quick wins for the 0-30 day phase: action, owner, and milestone for each.", kind: 'paste' },
    { id: 'c7', q: "Which questions must get a POA&M item?", kind: 'choice', opts: ['Only Not Compliant questions', 'Every question below Fully', 'Somewhat and Not Compliant, plus Mostly questions behind a Critical or High risk', 'Only questions with weight 10'], answer: 2 }
  ],
  reflection: "Name one score or rating you found hard to decide. What evidence did you weigh, and what did you choose?"
};
