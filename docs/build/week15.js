// Week 15 plan (staging). Merge into course-data.js with: node docs/tools/merge_staging.js 15
// Follows the week-tasks.js week 12 list (retake the mock exam to 80%+, review every miss, PBQ labs 1-10) plus the
// final study plan and short talks from the legacy weeks-data.js week 12 lessons.
// PBQ redo minutes: same rates as Week 14 minus the 1 min per task to find the screen and the explanation reading
// (students know the screens now and only read the explanation if they miss something). Details: week15-notes.md.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[15] = {
  num: 15, title: 'Security+ Mock Exam', modules: 'Security+ SY0-701, all five domains',
  sub: 'Retake the mock exam to 80% or higher, redo every PBQ lab, and plan your exam',
  overview: 'This is the last week of the course. You retake the Security+ Mock Exam under real exam conditions, aiming for 80% or higher, review every miss, and redo all ten PBQ labs until each one scores 100%. Day 2 ends with a final attempt at the mock exam and your personal study plan from today to exam day. As in Week 14, there is no new material: only the mock exam, the PBQ labs, and review.',
  anytime: [
    { title: 'Acronyms: Week 14, set A (risk, resilience, and governance)', href: 'Practice.html?p=acro-w14a' },
    { title: 'Acronyms: Week 14, set B (crypto, authentication, and remote access)', href: 'Practice.html?p=acro-w14b' },
    { title: 'Retake any weekly quiz: Week 1', href: 'Quiz.html?w=1' },
    { title: 'Retake any weekly quiz: Week 2', href: 'Quiz.html?w=2' },
    { title: 'Retake any weekly quiz: Week 3', href: 'Quiz.html?w=3' },
    { title: 'Retake any weekly quiz: Week 4', href: 'Quiz.html?w=4' },
    { title: 'Retake any weekly quiz: Week 5', href: 'Quiz.html?w=5' },
    { title: 'Retake any weekly quiz: Week 6', href: 'Quiz.html?w=6' },
    { title: 'Retake any weekly quiz: Week 7', href: 'Quiz.html?w=7' },
    { title: 'Retake any weekly quiz: Week 8', href: 'Quiz.html?w=8' },
    { title: 'Retake any weekly quiz: Week 9', href: 'Quiz.html?w=9' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'Mock exam retake and PBQ redo',
      blocks: [
        { id: 'w15d1-b1', type: 'talk', mins: 10, title: 'Talk 15.1: Exam day: format, pacing, and strategy', desc: 'What the real exam looks like, how to pace 90 minutes, and how to read BEST, FIRST, and NOT questions.', href: 'Lesson.html?l=15.1' },
        { id: 'w15d1-b2', type: 'tool', mins: 90, title: 'Security+ Mock Exam: retake (target 80% or higher)', desc: 'Full exam conditions: quiet, timed, closed notes. Use the pacing plan from Talk 15.1.', href: 'SecPlus_Mock_Exam.html', basis: '86 questions x 0.75 + 7,750 words of stems and options / 140 x 0.25 (quiz rate) = 78; set to the 90-minute time limit because the exam is a timed sitting that auto-submits' },
        { id: 'w15d1-b3', type: 'talk', mins: 10, title: 'Talk 15.2: Learning from every miss, and your final plan', desc: 'Three questions for every miss, how to spot memorized answers, and what goes in a focused study plan.', href: 'Lesson.html?l=15.2' },
        { id: 'w15d1-b4', type: 'tool', mins: 45, title: 'Review every missed question and download your PDF report', desc: 'Work every miss, partial, and lucky guess with the three questions from Talk 15.2. Compare your misses by domain with your Week 14 report.', href: 'SecPlus_Mock_Exam.html', basis: 'at the 80% target = 17 misses or partials; each: re-read question and options (90 words) + explanation (146 words) = 236 / 140 = 1.7 + 1 min note = 2.7; 17 x 2.7 = 46 -> 45' },
        { id: 'w15d1-b5', type: 'pbq', mins: 15, title: 'PBQ Lab 1 redo: SQL Injection', desc: 'Redo until you score 100%. Try to finish faster than last week.', href: 'SecPlus_PBQ_Labs.html?lab=1', basis: 'redo: 215 words / 140 = 1.5 + 12 lookups x 0.75 = 9 + 5 questions x 1 = 15.5 -> 15' },
        { id: 'w15d1-b6', type: 'pbq', mins: 5, title: 'PBQ Lab 2 redo: Verify a Download with an MD5 Hash', desc: 'Redo until you score 100%.', href: 'SecPlus_PBQ_Labs.html?lab=2', basis: 'redo: 130 words / 140 = 0.9 + 3 commands x 0.75 = 2.3 + 1 question x 1 = 4.2 -> 5' },
        { id: 'w15d1-b7', type: 'pbq', mins: 15, title: 'PBQ Lab 3 redo: Identify Social Engineering in an Inbox', desc: 'Redo until you score 100%.', href: 'SecPlus_PBQ_Labs.html?lab=3', basis: 'redo: 101 words / 140 = 0.7 + 12 emails judged x 0.75 = 9 + 400 words of email / 140 = 2.9; total 12.6 -> 15' },
        { id: 'w15d1-b8', type: 'pbq', mins: 5, title: 'PBQ Lab 4 redo: Harden Switch Ports with Port Security', desc: 'Redo until you score 100%.', href: 'SecPlus_PBQ_Labs.html?lab=4', basis: 'redo: 89 words / 140 = 0.6 + 6 settings x 0.75 = 4.5; total 5.1 -> 5' },
        { id: 'w15d1-b9', type: 'pbq', mins: 5, title: 'PBQ Lab 5 redo: Detect ARP Poisoning with Wireshark', desc: 'Redo until you score 100%.', href: 'SecPlus_PBQ_Labs.html?lab=5', basis: 'redo: 113 words / 140 = 0.8 + 4 actions x 0.75 = 3 + 2 questions x 1 = 5.8 -> 5' },
        { id: 'w15d1-b10', type: 'pbq', mins: 10, title: 'PBQ Lab 6 redo: Run a Vulnerability Scan', desc: 'Redo until you score 100%.', href: 'SecPlus_PBQ_Labs.html?lab=6', basis: 'redo: 129 words / 140 = 0.9 + 7 actions x 0.75 = 5.3 + 2 questions x 1 = 8.2 -> 10' },
        { id: 'w15d1-b11', type: 'pbq', mins: 10, title: 'PBQ Lab 7 redo: Create a WPA2 Wireless Network', desc: 'Redo until you score 100%.', href: 'SecPlus_PBQ_Labs.html?lab=7', basis: 'redo: 113 words / 140 = 0.8 + 9 settings x 0.75 = 6.8; total 7.6 -> 10' },
        { id: 'w15d1-b12', type: 'pbq', mins: 10, title: 'PBQ Lab 8 redo: Secure pfSense Default Settings', desc: 'Redo until you score 100%.', href: 'SecPlus_PBQ_Labs.html?lab=8', basis: 'redo: 98 words / 140 = 0.7 + 10 settings x 0.75 = 7.5; total 8.2 -> 10' },
        { id: 'w15d1-b13', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Final mock attempt and your study plan',
      blocks: [
        { id: 'w15d2-b1', type: 'pbq', mins: 5, title: 'PBQ Lab 9 redo: Manage Certificates on a CA', desc: 'Redo until you score 100%.', href: 'SecPlus_PBQ_Labs.html?lab=9', basis: 'redo: 115 words / 140 = 0.8 + 6 actions x 0.75 = 4.5; total 5.3 -> 5' },
        { id: 'w15d2-b2', type: 'pbq', mins: 20, title: 'PBQ Lab 10 redo: Configure an OpenVPN Remote Access Server', desc: 'Redo until you score 100%. This is the longest PBQ; keep an eye on the clock.', href: 'SecPlus_PBQ_Labs.html?lab=10', basis: 'redo: 163 words / 140 = 1.2 + 25 fields x 0.75 = 18.8; total 19.9 -> 20' },
        { id: 'w15d2-b3', type: 'tool', mins: 90, title: 'Security+ Mock Exam: final attempt', desc: 'If your best score is under 80%, this is your attempt to reach it. If you already passed, take it again to confirm the score holds, and explain each answer to yourself before you pick it.', href: 'SecPlus_Mock_Exam.html', basis: '86 questions x 0.75 + 7,750 words of stems and options / 140 x 0.25 (quiz rate) = 78; set to the 90-minute time limit because the exam is a timed sitting that auto-submits' },
        { id: 'w15d2-b4', type: 'tool', mins: 35, title: 'Review every miss and download your final PDF report', desc: 'Review every miss, partial, and lucky guess. Keep the final report: it is the starting point for your study plan.', href: 'SecPlus_Mock_Exam.html', basis: 'assume about 85% on a third attempt = 13 misses or partials x 2.7 min (236 words / 140 + 1 min note) = 35' },
        { id: 'w15d2-b5', type: 'read', mins: 15, title: 'CompTIA Security+ SY0-701 exam objectives: your final checklist', desc: 'Read page 3 (format and domain weights), then skim every objective. Mark any line you could not explain in one sentence: those go in your study plan.', href: 'https://assets.ctfassets.net/82ripq7fjls2/6TYWUym0Nudqa8nGEnegjG/0f9b974d3b1837fe85ab8e6553f4d623/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf', basis: 'legacy week 11 resource note: read page 3, skim pages 4-17, about 15 minutes' },
        { id: 'w15d2-b6', type: 'practice', mins: 5, title: 'Acronyms: Week 15, set A (architecture and endpoints)', desc: 'A final acronym drill. Say each one out loud before you flip the card.', href: 'Practice.html?p=acro-w15a' },
        { id: 'w15d2-b7', type: 'read', mins: 15, title: 'Professor Messer SY0-701 pop quizzes on your weak topics', desc: 'Free practice questions grouped by topic. Pick the topics your final report points to and answer as many as time allows.', href: 'https://www.professormesser.com/category/security-plus/sy0-701/sy0-701-pop-quiz/', basis: 'legacy week 12 resource note: about 15 minutes of practice questions' },
        { id: 'w15d2-b8', type: 'practice', mins: 5, title: 'Acronyms: Week 15, set B (attacks, intelligence, and old protocols)', desc: 'The second half of the final acronym drill.', href: 'Practice.html?p=acro-w15b' },
        { id: 'w15d2-b9', type: 'read', mins: 10, title: 'CompTIA: the in-person exam experience', desc: 'Read "Before your exam day" and "On your exam day" for the check-in and test-center rules.', href: 'https://www.comptia.org/testing/testing-options/take-in-person-exam', basis: 'legacy week 12 resource note: steps 1-7, about 8 minutes -> 10' },
        { id: 'w15d2-b10', type: 'read', mins: 5, title: 'CompTIA: identification requirements for your exam', desc: 'Which ID to bring and the name-match rule. Check your own ID against it today.', href: 'https://www.comptia.org/en-us/resources/test-policies/candidate-id-policy/', basis: 'legacy week 12 resource note: about 4 minutes -> 5' },
        { id: 'w15d2-b11', type: 'lab', mins: 15, title: 'Lab 15.1: Your final study plan', desc: 'Your numbers, your weakest topics, your exam date, and a day-by-day plan to exam day.', href: 'Lab.html?l=15.1' },
        { id: 'w15d2-b12', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ]
};
