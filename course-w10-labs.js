// Week 10 labs (capstone week 1: Northgate Supply Co.). Shapes: docs/COURSE_V2.md
// Auto-check answers come from materials/week9/ (client brief and questionnaire workbook). Re-check them if those files change.
window.COURSE_LABS = window.COURSE_LABS || {};

var W10_BRIEF = '<a href="materials/week9/northgate-organization-profile.html" target="_blank" rel="noopener">Northgate client brief</a>';
var W10_LEVELS = ['Fully (100%)', 'Almost (75%)', 'Mostly (50%)', 'Somewhat (25%)', 'Not Compliant (0%)'];
var W10_FUNCS = ['Govern', 'Identify', 'Protect', 'Detect', 'Respond', 'Recover'];

COURSE_LABS['10.1'] = {
  id: '10.1', week: 10, title: 'Client brief check', mins: 15, env: 'browser',
  goal: 'Check that you have the key facts of the Northgate engagement right before you plan any fieldwork: the company, the people, the network, the April incident, and the rules you work under.',
  youNeed: ['The ' + W10_BRIEF + ' open in another tab (you read it in the step before this one)', 'Talk 10.1 finished', 'About 15 minutes'],
  steps: [
    {
      title: 'Why a fact check first',
      body: [
        'Assessors who misread the engagement letter waste the client\'s time. They ask James about systems that are out of scope, or they promise a date the client never agreed to. A two-minute check now saves an awkward interview later.',
        'Answer every checkpoint from the ' + W10_BRIEF + '. Do not guess: if you are not sure, find the sentence in the brief. The first six answers are checked as soon as you submit.'
      ]
    },
    {
      title: 'Where to look',
      body: [
        'Section 1 (the engagement letter) has the why, the scope, the testing permission, the dates, and the point of contact. Section 2 has the company facts. Section 3 lists the people. Section 4 has the network and servers. Section 5 tells the April 2026 story. Sections 6 to 8 cover what leadership worries about, the fieldwork rules, and the method.'
      ],
      tip: 'Keep the brief open all week. You will come back to sections 4 and 5 in Labs 10.2 and 10.3.'
    }
  ],
  checkpoints: [
    { id: 'c1', q: 'How many employees does Northgate have?', kind: 'number', answer: 62 },
    { id: 'c2', q: 'Which server did the attacker log in to in April 2026? (Give its host name.)', kind: 'text', answer: ['ng-files01', 'ng-files01 (10.20.1.20)', 'ngfiles01'] },
    { id: 'c3', q: 'How did the attacker reach that server from the internet?', kind: 'choice', opts: ['Through the VPN, with a stolen password', 'Over SSH, through an old firewall port-forward', 'Over Remote Desktop from a warehouse PC', 'With a USB drive left in the office'], answer: 1 },
    { id: 'c4', q: 'In which month does Northgate\'s cyber insurance renew?', kind: 'text', answer: ['November', 'November 2026', 'Nov'] },
    { id: 'c5', q: 'What is the address range of the server network?', kind: 'text', answer: ['10.20.1.0/24', '10.20.1.0'] },
    { id: 'c6', q: 'Which of these is NOT allowed during fieldwork?', kind: 'choice', opts: ['Interviewing Northgate staff', 'Reading the documents Northgate provides', 'Logging in to a Northgate server to check a setting yourself', 'Reading the scan results from the MCCoE team'], answer: 2 },
    { id: 'c7', q: 'In one or two sentences, in your own words: what does Linda Harper want at the end of the assessment?', kind: 'text' },
    { id: 'c8', q: 'Of the five leadership worries in section 6, which two do you think matter most, and why?', kind: 'text' }
  ],
  reflection: 'What surprised you most in the brief, and what is the first question you would want to ask James Chen?'
};

COURSE_LABS['10.2'] = {
  id: '10.2', week: 10, title: 'Northgate\'s network through a zero trust lens', mins: 20, env: 'browser',
  goal: 'Draw Northgate\'s network from the client brief, trace the April 2026 attack across it, and mark every place where one password was enough. Then sketch a realistic zero trust target. The places you mark become things to verify in fieldwork.',
  youNeed: ['The ' + W10_BRIEF + ', sections 4 and 5', 'Paper and pen, or the free diagram tool <a href="https://app.diagrams.net" target="_blank" rel="noopener">diagrams.net</a>', 'The <a href="https://www.cisa.gov/sites/default/files/2023-04/zero_trust_maturity_model_v2_508.pdf" target="_blank" rel="noopener">CISA Zero Trust Maturity Model v2.0</a>, Section 5 (for the last step)', 'Talk 10.1 finished', 'Steps 1 and 2 and step 4 are their own blocks on This Week; answer the checkpoints when both sketches are done'],
  steps: [
    {
      title: 'Draw the zones',
      body: [
        'Draw a box for the internet at the top. Under it, draw the firewall <code>ng-fw01</code> (10.20.0.1), which also runs the VPN. Under the firewall, draw four separate zones: the server network (10.20.1.0/24), the office network (10.20.3.0/24), the warehouse network (10.20.5.0/24), and VPN users (10.20.9.0/24).',
        'Put the four servers in the server zone: <code>ng-web01</code> (.10, website and ordering portal), <code>ng-files01</code> (.20, file server), <code>ng-backup01</code> (.30, backups and logs), and <code>ng-legacy01</code> (.50, an old server that was never retired). Draw the cloud email service off to one side, outside the firewall.'
      ],
      tip: 'Neat does not matter. A clear photo of a paper sketch is fine. Save it in your engagement folder as NG-network-sketch.'
    },
    {
      title: 'Trace the April path',
      body: [
        'Using section 5 of the brief, draw the attack as numbered arrows: (1) a phishing email steals Maria Rivera\'s password; (2) the attacker logs in to <code>ng-files01</code> over SSH through an old port-forward on the firewall; (3) the account gets full admin rights through a badly configured setting; (4) the attacker creates a hidden account and a scheduled task to come back later; (5) the finance folder is copied to a computer on the internet.',
        'Next to each arrow, write the zero trust check that was missing. Use the three habits from Talk 10.1: verify explicitly (for example MFA, VPN-only access), least privilege (only the access the job needs), and assume breach (segmentation and alerts).'
      ]
    },
    {
      title: 'Turn the marks into fieldwork questions',
      body: [
        'Northgate says it made changes after April. Your job is not to assume they worked. For each mark on your sketch, write one thing to verify, who you would ask, and which kind of evidence would prove it. Example: "Remote logins now need MFA. Ask James (INT-02). Proof: an MFA enrollment report and the VPN user list."',
        'Also look at the zones you drew. Which zone could reach which other zone? The brief does not say. That is itself a question for James and for the firewall configuration.'
      ]
    },
    {
      title: 'Sketch a zero trust target',
      body: [
        'After reading Section 5 of the CISA Zero Trust Maturity Model, make a second sketch: Northgate as it could look. The model groups zero trust work into five pillars (Identity, Devices, Networks, Applications and Workloads, and Data) and four stages (Traditional, Initial, Advanced, Optimal). A small company does not need Optimal. It needs sensible first steps.',
        'Add at least six changes to your second sketch, each with one line saying why. Think about MFA on every account, remote and admin access only through the VPN, which zones may talk to which, who has admin rights, which systems send logs and raise alerts, and what happens to the old server. Keep it realistic for 62 people and one IT manager.'
      ],
      tip: 'This is a proposal, not a finding. You have not seen any evidence yet, so do not write it as fact. You will reuse good ideas when you build the POA&M in Week 12.'
    }
  ],
  checkpoints: [
    { id: 'c1', q: 'Which zone holds ng-files01?', kind: 'choice', opts: ['Office network, 10.20.3.0/24', 'Server network, 10.20.1.0/24', 'Warehouse network, 10.20.5.0/24', 'VPN users, 10.20.9.0/24'], answer: 1 },
    { id: 'c2', q: 'According to the brief, what path did the rules say remote access must use?', kind: 'choice', opts: ['The VPN', 'SSH from anywhere', 'Remote Desktop', 'The cloud email portal'], answer: 0 },
    { id: 'c3', q: 'Which server does the brief describe as old and never retired?', kind: 'choice', opts: ['ng-web01', 'ng-files01', 'ng-backup01', 'ng-legacy01'], answer: 3 },
    { id: 'c4', q: 'Step 3: the account got full admin rights through a badly configured setting. Which zero trust habit was missing most?', kind: 'choice', opts: ['Verify explicitly', 'Least privilege', 'Encryption in transit', 'Defense of the physical site'], answer: 1 },
    { id: 'c5', q: 'James only saw the outbound traffic the next morning. Which zero trust habit would have caught it sooner?', kind: 'choice', opts: ['Assume breach: monitoring and real-time alerts', 'Least privilege on the finance folder', 'MFA on email', 'Longer passwords'], answer: 0 },
    { id: 'c6', q: 'Paste your five-step trace: for each step, the missing check.', kind: 'paste' },
    { id: 'c7', q: 'List three things you will verify in fieldwork. For each: what, who you will ask (INT-01 to INT-05), and what evidence would prove it.', kind: 'paste' },
    { id: 'c8', q: 'File names of your two sketches (current and target) in your engagement folder.', kind: 'text' },
    { id: 'c9', q: 'Paste the six or more changes in your zero trust target sketch, each with one line on why.', kind: 'paste' }
  ],
  reflection: 'Where else at Northgate, beyond the April path, might "inside means trusted" still be true? Name one place from your sketch and say why.'
};

COURSE_LABS['10.3'] = {
  id: '10.3', week: 10, title: 'The April incident through the CSF', mins: 15, env: 'browser',
  goal: 'Map each part of the April 2026 incident to a NIST CSF 2.0 function and to the questionnaire question that tests it, so you see how one real incident touches every part of the framework.',
  youNeed: ['The ' + W10_BRIEF + ', section 5', 'The questionnaire question list (on the Questionnaire sheet of <a href="materials/week9/northgate-questionnaire.xlsx" target="_blank" rel="noopener">northgate-questionnaire.xlsx</a>), or the short list below', 'Talk 10.2 finished', 'About 15 minutes'],
  steps: [
    {
      title: 'How the mapping works',
      body: [
        'Every incident is a story of several failures and a few things that went right. The CSF gives each one a home. A stolen password that worked is a Protect problem. An attack nobody noticed for hours is a Detect problem. A plan nobody had written is a Respond problem. Lessons that never turn into changes are an Identify problem (the Improvement category, ID.IM).',
        'Read section 5 of the brief again. Then answer the checkpoints: for each event, pick the function where the fix belongs, or pick the questionnaire question that tests it.'
      ]
    },
    {
      title: 'Questions you will need',
      body: [
        'These are the questionnaire questions used in the checkpoints, in short form:'
      ],
      tip: 'Q17 Lessons learned turned into tracked improvements (Identify). Q18 MFA required for all user accounts (Protect). Q19 Remote and admin access limited to approved paths and protected with MFA (Protect). Q23 Annual security training (Protect). Q30 Alerts on key attack activity such as new admin accounts or large transfers (Detect). Q36 Knowing how and when to notify customers, regulators, insurers, and law enforcement (Respond). Q38 Regular backups (Recover).'
    },
    {
      title: 'Predict, do not score',
      body: [
        'The last checkpoint asks which function you expect to be weakest. This is a hypothesis to test in fieldwork, not a score. Assessors who write their guesses down are less likely to fall for them, because they know to look for evidence that proves the guess wrong.'
      ]
    }
  ],
  checkpoints: [
    { id: 'c1', q: 'Maria Rivera typed her password on a fake page, and her account had no MFA. In which function does the fix belong?', kind: 'choice', opts: W10_FUNCS, answer: 2 },
    { id: 'c2', q: 'SSH on the file server could be reached from the internet through an old port-forward, even though the rules said VPN only. Which question tests this?', kind: 'choice', opts: ['Q19 Remote and admin access limited to approved paths and protected with MFA', 'Q23 Annual security training', 'Q38 Regular backups', 'Q36 Breach notification'], answer: 0 },
    { id: 'c3', q: 'The attacker created a hidden account and a scheduled task, and nothing raised an alert. Which function?', kind: 'choice', opts: W10_FUNCS, answer: 3 },
    { id: 'c4', q: 'Which question tests that same gap?', kind: 'choice', opts: ['Q18 MFA for all accounts', 'Q30 Alerts on new admin accounts, privilege changes, or large transfers', 'Q17 Lessons learned', 'Q23 Annual training'], answer: 1 },
    { id: 'c5', q: 'James blocked the attacker, removed the hidden account, and closed the port-forward the same day. Which function is this?', kind: 'choice', opts: W10_FUNCS, answer: 4 },
    { id: 'c6', q: 'Vendors were later told their bank details were exposed. Which question tests whether Northgate knows how and when to do this?', kind: 'choice', opts: ['Q38 Regular backups', 'Q19 Remote access paths', 'Q36 Notifying customers, regulators, insurers, and law enforcement', 'Q23 Annual training'], answer: 2 },
    { id: 'c7', q: 'Northgate says it made several changes after the incident. Checking that lessons became real, tracked changes belongs to which function?', kind: 'choice', opts: W10_FUNCS, answer: 1 },
    { id: 'c8', q: 'Your hypothesis: which function do you expect to be weakest at Northgate, and what in the brief makes you think so? (Not graded right or wrong.)', kind: 'text' }
  ],
  reflection: 'The brief lists only one thing that clearly went well in April. What was it, and which function does it belong to?'
};

COURSE_LABS['10.4'] = {
  id: '10.4', week: 10, title: 'Questionnaire workbook tour', mins: 20, env: 'browser',
  goal: 'Download the 41-question NIST CSF 2.0 workbook, save your own copy in your engagement folder, and learn its sheets, columns, and weights well enough to use it fast during fieldwork.',
  waitMins: 5,
  youNeed: ['Excel, LibreOffice Calc, or Google Sheets', '<a href="materials/week9/northgate-questionnaire.xlsx" target="_blank" rel="noopener">northgate-questionnaire.xlsx</a>', 'Talk 10.2 finished', 'About 20 minutes'],
  steps: [
    {
      title: 'Download and save your copy',
      body: [
        'Download <a href="materials/week9/northgate-questionnaire.xlsx" target="_blank" rel="noopener">northgate-questionnaire.xlsx</a>. Save it in your engagement folder as <code>NG-questionnaire-YourName.xlsx</code>. You will use this one file for the rest of the capstone, so do not make extra copies that drift apart.',
        'If you use Google Sheets, upload the file and open it with Sheets. Check that the drop-down in column F of the Questionnaire sheet still works.'
      ]
    },
    {
      title: 'Read the four sheets',
      body: [
        '<strong>Instructions</strong> repeats the method in seven steps. <strong>Questionnaire</strong> holds the 41 questions. <strong>Dashboard</strong> calculates the results: never type in its grey cells. <strong>Lists</strong> holds the five levels and their values.',
        'On the Questionnaire sheet, find each column: Q#, Function, CSF Category, Weight, Question, Response (your level, from a drop-down), Score and Weighted Score (filled in for you), Evidence IDs, and Why (your reasons and any contradictions).'
      ]
    },
    {
      title: 'Count questions and weights',
      body: [
        'Use the Function and Weight columns to answer the counting checkpoints. A quick way: sort or filter by Function, or read the Dashboard\'s Questions and Total Weight columns, which fill in even before you answer anything.',
        'Find the weight-10 questions. These are the practices MCCoE treats as most important. Your fieldwork plan tomorrow must make sure each one has someone who can answer it, and evidence you can ask for.'
      ]
    },
    {
      title: 'Test the Dashboard, then undo it',
      body: [
        'To see the math work, type these <strong>test answers</strong> in the Response column for the five Detect questions: Q29 Fully, Q30 Mostly, Q31 Fully, Q32 Not Compliant, Q33 Somewhat. These are not Northgate\'s answers; they are only a test.',
        'Work out the weighted compliance for Detect by hand: multiply each weight by its level, add them up, and divide by the total Detect weight. Then compare with the Dashboard\'s Compliance % for Detect. They should match.',
        '<strong>Now delete the five test answers</strong> so the workbook is blank again before fieldwork.'
      ],
      tip: 'Detect weights are on the Questionnaire sheet, column D. Fully = 1, Mostly = 0.5, Somewhat = 0.25, Not Compliant = 0.'
    }
  ],
  checkpoints: [
    { id: 'c1', q: 'How many questions are in the Govern function?', kind: 'number', answer: 10 },
    { id: 'c2', q: 'How many questions are in the Respond function?', kind: 'number', answer: 4 },
    { id: 'c3', q: 'What is the total weight of the Protect function?', kind: 'number', answer: 94 },
    { id: 'c4', q: 'What is the total weight of all 41 questions?', kind: 'number', answer: 336 },
    { id: 'c5', q: 'How many questions have weight 10?', kind: 'number', answer: 7 },
    { id: 'c6', q: 'Which question has the lowest weight? (Answer like Q7.)', kind: 'text', answer: ['Q2', '2'] },
    { id: 'c7', q: 'Which column do you write evidence IDs in?', kind: 'choice', opts: ['F, Response', 'G, Score', 'I, Evidence IDs', 'D, Weight'], answer: 2 },
    { id: 'c8', q: 'With the five test answers, what is Detect\'s weighted compliance? Round to one decimal place (for example 61.4).', kind: 'text', answer: ['56.1', '56.1%', '56.10', '56.10%'] },
    { id: 'c9', q: 'Did you delete the five test answers? Type yes when the Detect row on the Dashboard shows 0 answered again.', kind: 'text', answer: ['yes', 'y'] }
  ],
  reflection: 'Look at the seven weight-10 questions. Which one do you think will be hardest to find evidence for at Northgate, and why?'
};

COURSE_LABS['10.5'] = {
  id: '10.5', week: 10, title: 'Kickoff briefing', mins: 10, env: 'browser',
  goal: 'Prepare a three-minute kickoff for Northgate\'s leaders: what you will assess, when, under which rules, and what you need from them. You deliver it to a partner in the next step.',
  youNeed: ['The ' + W10_BRIEF + ', sections 1, 3, and 7', 'Talk 10.3 finished', 'A blank document or three blank slides in your engagement folder', 'About 10 minutes'],
  steps: [
    {
      title: 'Write the four parts',
      body: [
        '<strong>Scope</strong>: one or two sentences on what the MCCoE team will assess (the six CSF functions) and what it covers (office, warehouse, servers, cloud email, and vendors who connect).',
        '<strong>Schedule</strong>: fieldwork dates, report date, and when the outbrief happens. Take them from the engagement letter.',
        '<strong>Rules of engagement</strong>: what the team will and will not do. Include who runs the scans and under what permission, that nobody logs in to or changes Northgate systems, and how notes are kept confidential.',
        '<strong>What we need</strong>: the five people and how long each interview takes (30 minutes with James, 20 with everyone else), documents and reports, and a single point of contact.'
      ]
    },
    {
      title: 'Keep it short and respectful',
      body: [
        'Three minutes is about 400 spoken words. Leaders want to know the plan and what it costs them in time. Say clearly that the team assesses practices, not people. Do not promise results or scores; you have not seen any evidence yet.'
      ],
      tip: 'Put your kickoff in your engagement folder as NG-kickoff. You will reuse the scope and method wording in your report in Week 12.'
    }
  ],
  checkpoints: [
    { id: 'c1', q: 'Paste your scope statement.', kind: 'paste' },
    { id: 'c2', q: 'Paste your schedule (fieldwork, report, outbrief).', kind: 'paste' },
    { id: 'c3', q: 'Paste your rules of engagement (at least three).', kind: 'paste' },
    { id: 'c4', q: 'Paste what you need from Northgate.', kind: 'paste' },
    { id: 'c5', q: 'Who runs the network and vulnerability scans at Northgate, and on whose permission?', kind: 'choice', opts: ['Each student, from home', 'James Chen, whenever he likes', 'The MCCoE team, with Linda Harper\'s written permission', 'Northgate\'s insurer'], answer: 2 }
  ],
  reflection: 'Which part of your kickoff was hardest to keep short, and why?'
};

COURSE_LABS['10.6'] = {
  id: '10.6', week: 10, title: 'Fieldwork plan (hand-in)', mins: 15, env: 'browser',
  goal: 'Hand in your fieldwork plan: the questions you will ask each of the five Northgate staff, mapped to questionnaire numbers, plus the evidence you will request. This is the Week 10 deliverable, graded by rubric.',
  youNeed: ['Your interview plan, written in your engagement notes earlier today and tested in the practice interview', 'Your answers from Labs 10.2 and 10.4', 'About 15 minutes'],
  steps: [
    {
      title: 'Check your plan before you paste it',
      body: [
        'For each interview, your plan should start with an easy open question, then the questions that matter most, each with a follow-up and a request for proof. End with a closing question. Put the questionnaire number next to each question, for example "(Q18)".',
        'Check coverage: each of the seven weight-10 questions (Q5, Q7, Q11, Q18, Q29, Q34, Q38) needs at least one person you will ask. Each of the six functions should appear somewhere in the plan.',
        'Check the clock: James has 30 minutes and everyone else 20. Answers arrive at speaking speed. Six to ten good questions fit in 20 minutes; a plan of 30 questions for one person will not happen.'
      ]
    },
    {
      title: 'Evidence requests',
      body: [
        'List at least eight specific pieces of evidence you will ask for, each tied to a question number. Specific means a named record, not a topic: "the MFA enrollment report from the email admin console (Q18)" rather than "MFA stuff".'
      ]
    },
    {
      title: 'Paste and submit',
      body: [
        'Paste each person\'s questions into the matching checkpoint. Then submit. You can fix answers and submit again until your instructor grades it.'
      ]
    }
  ],
  checkpoints: [
    { id: 'c1', q: 'INT-01 Linda Harper (CEO, 20 min): your planned questions with Q numbers.', kind: 'paste' },
    { id: 'c2', q: 'INT-02 James Chen (IT Manager, 30 min): your planned questions with Q numbers.', kind: 'paste' },
    { id: 'c3', q: 'INT-03 Alicia Brown (HR Manager, 20 min): your planned questions with Q numbers.', kind: 'paste' },
    { id: 'c4', q: 'INT-04 Helen Ortiz (Finance Manager, 20 min): your planned questions with Q numbers.', kind: 'paste' },
    { id: 'c5', q: 'INT-05 Tunde Okafor (Warehouse Manager, 20 min): your planned questions with Q numbers.', kind: 'paste' },
    { id: 'c6', q: 'Your evidence request list (at least eight items, each with its Q number).', kind: 'paste' },
    { id: 'c7', q: 'Coverage check: for each weight-10 question (Q5, Q7, Q11, Q18, Q29, Q34, Q38), who will you ask?', kind: 'paste' },
    { id: 'c8', q: 'Which of these planned questions should you rewrite before the interview?', kind: 'choice', opts: ['How do you remove accounts when someone leaves?', 'Can you show me the report from the last restore test?', 'You have MFA turned on for everyone, right?', 'Who receives alerts at night or when you are on vacation?'], answer: 2 },
    { id: 'c9', q: 'Link to your engagement folder (Google Drive or OneDrive, shared so your instructor can view it).', kind: 'text' }
  ],
  reflection: 'Which interview are you most worried about, and what in your plan protects you if it goes badly?'
};

COURSE_LABS['10.7'] = {
  id: '10.7', week: 10, title: 'Scoring dry run with a practice client', mins: 15, env: 'browser',
  goal: 'Practice the scoring method on a small practice client before you touch Northgate: pick a level for five questions from short pieces of evidence, then work out the weighted compliance by hand.',
  youNeed: ['Talk 10.2 finished', 'A calculator', 'About 15 minutes'],
  steps: [
    {
      title: 'The practice client',
      body: [
        'This is a made-up 20-person dental office, not Northgate. Use it only to practice. For each question, read the evidence and pick the level from the five in Talk 10.2. Remember: no evidence means no credit, and a claim is not evidence.'
      ]
    },
    {
      title: 'The five questions',
      body: [
        '<strong>A. MFA required for all user accounts (weight 10).</strong> The admin console export shows all 20 accounts enrolled, and MFA is enforced by a setting that cannot be skipped. The policy that requires it was approved this year.',
        '<strong>B. Backups restore-tested at planned intervals (weight 9).</strong> The office manager says, "We test restores all the time." Asked for a record, she says nothing is written down. No restore log exists.',
        '<strong>C. All staff complete security training every year (weight 8).</strong> The training log shows 11 of 20 staff completed this year\'s course. The other 9 never started it, and nobody has followed up.',
        '<strong>D. Approved incident response plan with named roles and backups (weight 10).</strong> You receive a one-page draft. It is not approved, and every role says "TBD".',
        '<strong>E. Laptops encrypted (weight 6).</strong> The device report shows 9 of 10 laptops encrypted. The tenth is a spare in a locked cabinet, and a ticket is open to encrypt it this week.'
      ]
    },
    {
      title: 'Work out the score',
      body: [
        'Multiply each weight by the value of the level you chose (Fully 1, Almost 0.75, Mostly 0.5, Somewhat 0.25, Not Compliant 0). Add the five results to get the weighted score, using percentage points (for example weight 10 x 100% = 1,000). Add the five weights. Divide the weighted score by the total weight.'
      ],
      tip: 'If your answer to checkpoint 8 is wrong, check your levels first. The math only works when the levels are right.'
    }
  ],
  checkpoints: [
    { id: 'c1', q: 'Level for A (MFA)?', kind: 'choice', opts: W10_LEVELS, answer: 0 },
    { id: 'c2', q: 'Level for B (restore tests)?', kind: 'choice', opts: W10_LEVELS, answer: 4 },
    { id: 'c3', q: 'Level for C (training)?', kind: 'choice', opts: W10_LEVELS, answer: 2 },
    { id: 'c4', q: 'Level for D (incident response plan)?', kind: 'choice', opts: W10_LEVELS, answer: 3 },
    { id: 'c5', q: 'Level for E (laptop encryption)?', kind: 'choice', opts: W10_LEVELS, answer: 1 },
    { id: 'c6', q: 'What is the total weight of the five questions?', kind: 'number', answer: 43 },
    { id: 'c7', q: 'What is the weighted score (sum of weight x level, in percentage points)?', kind: 'number', answer: 2100 },
    { id: 'c8', q: 'What is the weighted compliance? Round to one decimal place.', kind: 'text', answer: ['48.8', '48.8%', '48.84', '48.84%'] }
  ],
  reflection: 'Question B scored zero even though the office manager sounded sure. In one or two sentences, explain to the office manager why, without blaming her.'
};
