// Week 11 plan (staging). Merge into course-data.js when approved. See docs/build/BRIEF.md and docs/build/week11-notes.md.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[11] = {
  num: 11, title: 'Capstone: Mock Assessment, week 2', modules: 'Capstone · NIST CSF 2.0 · SY0-701 4.3, 5.5',
  sub: 'Fieldwork: interviews, documents, and scans', light: true,
  overview: 'This is fieldwork week at Northgate Supply Co. You interview James Chen, Alicia Brown, Helen Ortiz, and Tunde Okafor, read the eleven core documents and any extra evidence your interviews earned, and review the scans the MCCoE team ran. Where people and evidence disagree, you log the contradiction and let the evidence decide. On Day 2 you score the Govern and Identify questions and hand in your fieldwork package.',
  anytime: [
    { title: 'Acronyms: Week 11', href: 'Practice.html?p=acro-w11' },
    { title: 'Reference: Nmap port states (open, closed, filtered)', href: 'https://nmap.org/book/man-port-scanning-basics.html' },
    { title: 'Reference: CVSS v3.1 specification, section 5 (severity ratings)', href: 'https://www.first.org/cvss/v3.1/specification-document' },
    { title: 'Fieldwork worksheets (interview notes, contradictions log, gaps list)', href: 'materials/week9/fieldwork-worksheets.html' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'Interviews and the core evidence',
      blocks: [
        { id: 'w11d1-b1', type: 'talk', mins: 10, title: 'Talk 11.1: Evidence from three sources', desc: 'Documents, interviews, and scans: evidence IDs, reading a document like an assessor, port states, and CVSS.', href: 'Lesson.html?l=11.1' },
        { id: 'w11d1-b2', type: 'tool', mins: 45, title: 'Interview INT-02: James Chen, IT Manager', desc: 'Your main interview: 30 minutes on a live clock, one attempt. Use your Week 10 plan, ask for proof, and write down every evidence ID he gives you.', href: 'interview.html?p=INT-02', basis: '30-minute interview clock + 5 min to reread your plan + 10 min to finish notes and list the evidence IDs = 45' },
        { id: 'w11d1-b3', type: 'tool', mins: 65, title: 'Read the core evidence: EV-01 to EV-11', desc: 'Policy, risk register, inventory, MFA report, firewall, training, logging, IR plan, backups, vendors, and the April review. Fill one evidence-log row per item.', href: 'materials/week9/evidence/index.html', basis: '4,717 words / 140 wpm = 34 min + 11 items x 3 min for the evidence-log row = 67 -> 65' },
        { id: 'w11d1-b4', type: 'lab', mins: 20, title: 'Lab 11.1: Core evidence check', desc: 'Pull the key facts from EV-01 to EV-11, corroborate the April action list, and map each item to questionnaire numbers.', href: 'Lab.html?l=11.1' },
        { id: 'w11d1-b5', type: 'tool', mins: 30, title: 'Interview INT-03: Alicia Brown, HR Manager', desc: 'Policy acknowledgements, joiners, leavers, HR data, and training. 20 minutes on the clock.', href: 'interview.html?p=INT-03', basis: '20-minute clock + 3 min to reread your plan + 7 min notes = 30' },
        { id: 'w11d1-b6', type: 'tool', mins: 30, title: 'Interview INT-04: Helen Ortiz, Finance Manager', desc: 'Finance data, payments and bank changes, MFA, the April incident, insurance, and vendor contracts. 20 minutes on the clock.', href: 'interview.html?p=INT-04', basis: '20-minute clock + 3 min to reread your plan + 7 min notes = 30' },
        { id: 'w11d1-b7', type: 'tool', mins: 30, title: 'Interview INT-05: Tunde Okafor, Warehouse Manager', desc: 'Shared warehouse logins, scanner software and its vendor, MFA on the floor, downtime, and leavers. 20 minutes on the clock.', href: 'interview.html?p=INT-05', basis: '20-minute clock + 3 min to reread your plan + 7 min notes = 30' },
        { id: 'w11d1-b8', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Scans, contradictions, and the first scores',
      blocks: [
        { id: 'w11d2-b1', type: 'talk', mins: 10, title: 'Talk 11.2: When words and evidence disagree', desc: 'Contradictions, why the evidence wins, scoring one question, and what "no evidence provided" means.', href: 'Lesson.html?l=11.2' },
        { id: 'w11d2-b2', type: 'tool', mins: 65, title: 'Earned evidence: EV-12 to EV-21', desc: 'Read only the items one of your interviews gave you (check your notes and the simulator summaries). Add each to your evidence log. Anything you did not earn, you cannot cite.', href: 'materials/week9/evidence/index.html', basis: 'Up to 10 items: 5,187 words / 140 wpm = 37 min + 10 x 3 min evidence-log rows = 67 -> 65 (less if your interviews earned fewer items)' },
        { id: 'w11d2-b3', type: 'tool', mins: 35, title: 'Read the scan results: SCAN-01 to SCAN-03', desc: 'Start with the SCAN-03 summary, then the findings CSV, the external scan, and the internal scan next to the asset inventory.', href: 'materials/week9/scans/index.html', basis: 'Index 579 + SCAN-03 summary 751 + SCAN-03 CSV 909 + SCAN-01 345 = 2,584 words / 140 wpm = 18 min + SCAN-02 host-by-host comparison with EV-03 (44 hosts, about 20 s each) = 15 min = 33 -> 35' },
        { id: 'w11d2-b4', type: 'lab', mins: 20, title: 'Lab 11.2: Scan check', desc: 'What the internet can see, the Critical and High findings, and the hosts missing from the inventory.', href: 'Lab.html?l=11.2' },
        { id: 'w11d2-b5', type: 'mock', mins: 30, title: 'Contradictions log', desc: 'Worksheet 2: for each place where a person and the evidence disagree, write what was said (INT ID), what the evidence shows (EV or SCAN ID, with numbers or dates), in neutral words.', href: 'materials/week9/fieldwork-worksheets.html', basis: 'About 6 contradictions x 4 min (quote, record, IDs, neutral wording) = 24 + 6 min to skim your five interview transcripts = 30' },
        { id: 'w11d2-b6', type: 'practice', mins: 10, title: 'Response Level Calibration', desc: 'Fourteen practice-client cases: pick the level the evidence supports before you score Northgate.', href: 'Practice.html?p=levels-w11' },
        { id: 'w11d2-b7', type: 'mock', mins: 50, title: 'Score Govern and Identify (Q1 to Q17)', desc: 'In your copy of the questionnaire workbook, pick a response, list the evidence IDs, and write one or two sentences of why for each of the 17 questions.', href: 'materials/week9/northgate-questionnaire.xlsx', basis: '17 questions x 3 min (2.5 min gap-row rate + 0.5 min to look up IDs) = 51 -> 50' },
        { id: 'w11d2-b8', type: 'mock', mins: 15, title: 'Submit the Fieldwork Package', desc: 'Put your interview notes, evidence log, scan notes, contradictions log, and workbook in your shared engagement folder. On the Student Platform Week 9 Submit tab, paste the folder link and submit. If the button asks for a reflection or that page\'s quiz, write the reflection on its Lab tab and take the quiz.', href: 'MCCoE_Student_Platform.html?week=9', due: 'Due end of Day 2', basis: '10 min to tidy and name the files in your folder + 5 min to share the link and submit = 15' },
        { id: 'w11d2-b9', type: 'quiz', mins: 15, title: 'Week 11 Quiz', desc: '20 questions on evidence, scans, contradictions, and scoring. 80% to pass; retakes allowed.', href: 'Quiz.html?w=11' },
        { id: 'w11d2-b10', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ],
  mock: {
    id: 'w11', title: 'Fieldwork Package', href: 'MCCoE_Student_Platform.html?week=9',
    rubric: [
      ['Interview notes', 'All five interviews recorded: who, when, questions asked, answers in their own words, and every evidence ID received'],
      ['Evidence log', 'Every EV and SCAN item used, with its date, whether it is approved and current, what it proves, and the questions it supports'],
      ['Scan analysis', 'Critical and High findings explained, external exposure read correctly, and hosts missing from the inventory found, with SCAN IDs'],
      ['Contradictions log', 'Each contradiction recorded neutrally: what was said, what the evidence shows, the source IDs, and scored on the evidence'],
      ['First scores', 'Govern and Identify (Q1 to Q17) scored with a level, evidence IDs or "no evidence provided", and a reason for every question']
    ]
  }
};
