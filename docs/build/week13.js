// Week 13 plan (staging). Merge into course-data.js when approved. See docs/build/BRIEF.md and docs/build/week13-notes.md.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[13] = {
  num: 13, title: 'Capstone: Mock Assessment, week 4', modules: 'Capstone: NIST CSF 2.0 assessment (SY0-701 5.4, 5.5)',
  sub: 'Report, executive summary, and the outbrief', light: true,
  overview: "This is the last week of the Northgate Supply Co. capstone. On Day 1 you finish the Cybersecurity Assessment Report, write the Executive Summary for Northgate's CEO, swap it with a partner for review, and build the briefing deck. On Day 2 you check that every document uses the same numbers, rehearse with a partner who plays a tough leader, submit your final pack, and deliver a live outbrief to MCCoE staff, defending your scores with evidence. Lecture is light: three short talks, each about that day's work.",
  anytime: [
    { title: 'Acronyms: capstone review', href: 'Practice.html?p=acro-w13' },
    { title: 'Video (optional): How to talk to your board about cybersecurity (Rapid7)', href: 'https://www.youtube.com/watch?v=eGeurjvCpXU' },
    { title: 'Video (optional): Audits and assessments, SY0-701 5.5 (Professor Messer)', href: 'https://www.youtube.com/watch?v=uo2Yw720mv4' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'Write for leaders and build the deck',
      blocks: [
        { id: 'w13d1-b1', type: 'talk', mins: 10, title: 'Talk 13.1: Writing for leaders, the Executive Summary', desc: 'Who reads which document, headline first, and business terms instead of jargon.', href: 'Lesson.html?l=13.1' },
        { id: 'w13d1-b2', type: 'practice', mins: 10, title: 'Where does it go? The deliverable pack', desc: 'Sort 16 pieces of content into the document where each belongs.', href: 'Practice.html?p=deliverables-w13' },
        { id: 'w13d1-b3', type: 'mock', mins: 60, title: 'CSA report, part 2: risks, roadmap, conclusion', desc: 'In your CSA (template-assessment-report-csa.docx), write section 5 (risk assessment with your heat map), section 6 (roadmap in three phases), section 7 (conclusion), section 1 (half-page summary), and paste Appendix A.', href: 'materials/week9/template-assessment-report-csa.docx', basis: 'about 680 words to draft (section 5 ~250, 6 ~150, 7 ~80, 1 ~200) at 12 words/min = 57 + 5 min to paste the heat map and Appendix A = 62 -> 60' },
        { id: 'w13d1-b4', type: 'mock', mins: 55, title: 'Write the Executive Summary', desc: 'Use template-executive-summary.docx. One to two plain pages for Linda Harper: headline first, function table from your Dashboard, strengths, top 5 risks, 5 next steps, and a note on scope.', href: 'materials/week9/template-executive-summary.docx', basis: 'about 460 words to draft (posture ~120, strengths ~80, risks ~120, next steps ~100, scope ~40) at 12 words/min = 38 + 5 min to copy the Dashboard table + 10 min to revise = 53 -> 55' },
        { id: 'w13d1-b5', type: 'mock', mins: 20, title: 'Partner review of the Executive Summary', desc: 'Swap summaries with a partner. Check: headline first, numbers match their Dashboard, no jargon, each next step closes a risk. Write three comments, then fix your own.', href: 'materials/week9/template-executive-summary.docx', basis: "read partner's ~500 words at 140 wpm = 4 + 8 min to write three comments + 8 min to revise your own = 20" },
        { id: 'w13d1-b6', type: 'talk', mins: 10, title: 'Talk 13.2: Building the briefing deck', desc: 'The order leaders expect, one idea per slide, labeled numbers, and speaker notes.', href: 'Lesson.html?l=13.2' },
        { id: 'w13d1-b7', type: 'mock', mins: 80, title: 'Build the briefing deck', desc: 'Fill in the 10 slides of template-briefing-deck.pptx: paste your Dashboard table and heat map, explain the Critical and High scan findings plainly, and write speaker notes for every slide.', href: 'materials/week9/template-briefing-deck.pptx', basis: '10 slides x 6 min + speaker notes 10 x 2 min = 80' },
        { id: 'w13d1-b8', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Rehearse, deliver the outbrief, and submit',
      blocks: [
        { id: 'w13d2-b1', type: 'talk', mins: 10, title: 'Talk 13.3: The outbrief, presenting and defending your scores', desc: 'How the session runs, how to handle a challenged score, and what to do when you do not know.', href: 'Lesson.html?l=13.3' },
        { id: 'w13d2-b2', type: 'lab', mins: 15, title: 'Lab 13.1: Number check and Q&A prep', desc: 'Make the same numbers appear in all four documents, then write evidence-based answers to three likely challenges.', href: 'Lab.html?l=13.1' },
        { id: 'w13d2-b3', type: 'mock', mins: 45, title: 'Rehearse with a partner', desc: 'Give your full outbrief to a partner who plays a leader and asks two hard questions. Then switch. Fix your slides and notes.', href: 'materials/week9/template-briefing-deck.pptx', basis: 'your timed run-through 12 + partner challenges 5 + listen to partner 12 + challenge them 5 + fix slides and notes 10 = 44 -> 45' },
        { id: 'w13d2-b4', type: 'mock', mins: 10, title: 'Submit the final pack', desc: 'Check your engagement folder holds all five files and is shared with your instructor. On the Student Platform Week 10 Submit tab, paste the folder link. Write the short reflection on the Lab tab; if the button asks, take that page\'s quiz first.', href: 'MCCoE_Student_Platform.html?week=10', due: 'Due before your outbrief', basis: '5 min to check files and sharing + 5 min to paste the link, write the reflection, and submit = 10' },
        { id: 'w13d2-b5', type: 'mock', mins: 120, title: 'Live outbrief to MCCoE staff', desc: 'Present your results in 10 to 15 minutes, then answer questions and challenges with evidence IDs. Stay for the other presenters: watching how others defend their scores is part of the lesson.', href: 'materials/week9/template-briefing-deck.pptx', basis: 'assumed session of 6-7 presenters x (12 min talk + 6 min questions) = 108-126 -> 120; you present once and listen to the rest. A larger cohort runs two rooms or splits the session across the day.' },
        { id: 'w13d2-b6', type: 'lab', mins: 10, title: 'Lab 13.2: Outbrief reflection', desc: 'Right after you present: the questions you were asked, your strong and weak answers, and what you would change.', href: 'Lab.html?l=13.2' },
        { id: 'w13d2-b7', type: 'quiz', mins: 15, title: 'Week 13 Quiz', desc: '20 questions on the Executive Summary, the CSA report, the deck, and the outbrief. 80% to pass; retakes allowed.', href: 'Quiz.html?w=13' },
        { id: 'w13d2-b8', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ],
  mock: {
    id: 'w13', title: 'Assessment Report and Outbrief', href: 'MCCoE_Student_Platform.html?week=10',
    rubric: [
      ['Executive Summary', 'One to two plain pages: headline numbers first, top risks in business terms, right-sized next steps a CEO can approve'],
      ['CSA report', 'All seven sections, results by function with evidence IDs, heat map and top risks, three-phase roadmap'],
      ['Consistency of numbers', 'The same compliance, CMM, hygiene, risks, and roadmap in the workbook, Executive Summary, CSA, and deck'],
      ['Briefing deck', 'About 10 clear slides leading with the headline; heat map and roadmap; labeled numbers; speaker notes, not paragraphs'],
      ['Live outbrief', '10 to 15 minutes; challenges answered calmly with evidence IDs; no score changed without new evidence; no blame']
    ]
  }
};
