// Week 14 plan (staging). Merge into course-data.js with: node docs/tools/merge_staging.js 14
// Follows the week-tasks.js week 11 list (mock exam, review every miss, PBQ labs 1-10) plus short domain review
// talks from the legacy weeks-data.js week 11 lessons, acronym practice, and retakes of earlier weekly quizzes.
// PBQ minutes: read scenario/tasks/questions at 140 wpm + each value typed, setting chosen, lookup run or email judged
// x 0.75 (command-line rate) + each question x 1 (checkpoint rate) + 1 min per task to find the right screen
// + read the explanation after scoring at 140 wpm. Details: week14-notes.md.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[14] = {
  num: 14, title: 'Security+ Review', modules: 'Security+ SY0-701, all five domains',
  sub: 'Your first full mock exam, all ten PBQ labs, and a domain-by-domain review',
  overview: 'This week you find out where you stand. Day 1 starts with the full Security+ Mock Exam, taken cold under real conditions: 86 questions in 90 minutes. You then review every question you missed and sort your misses by exam domain, so the rest of the week goes where you need it most. After that, each exam domain gets a short review talk, the PBQ labs that practice it, and a retake of the weekly quizzes that taught it. There is no new material this week: only the mock exam, the PBQ labs, and review.',
  anytime: [
    { title: 'Acronyms: Week 14, set A (risk, resilience, and governance)', href: 'Practice.html?p=acro-w14a' },
    { title: 'Acronyms: Week 14, set B (crypto, authentication, and remote access)', href: 'Practice.html?p=acro-w14b' },
    { title: 'Retake the Week 9 quiz (SOC operations)', href: 'Quiz.html?w=9' },
    { title: 'CompTIA Security+ SY0-701 exam objectives (PDF): your master study checklist', href: 'https://assets.ctfassets.net/82ripq7fjls2/6TYWUym0Nudqa8nGEnegjG/0f9b974d3b1837fe85ab8e6553f4d623/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf' },
    { title: 'Professor Messer: free SY0-701 video course, indexed by domain', href: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'Diagnostic mock exam, then Domain 1',
      blocks: [
        { id: 'w14d1-b1', type: 'tool', mins: 90, title: 'Security+ Mock Exam: first attempt', desc: '86 questions, 90 minutes, closed notes, no looking things up. This attempt is a diagnostic: it shows where to spend the next two weeks. The exam submits itself when time runs out.', href: 'SecPlus_Mock_Exam.html', basis: '86 questions x 0.75 + 7,750 words of stems and options / 140 x 0.25 (quiz rate) = 78; set to the 90-minute time limit because the exam is a timed sitting that auto-submits' },
        { id: 'w14d1-b2', type: 'tool', mins: 80, title: 'Review every missed question and download your PDF report', desc: 'On the results screen, work through every miss and partial: why the right answer is right, why yours was wrong, and which topic it tests. Download your PDF report and keep it for Week 15.', href: 'SecPlus_Mock_Exam.html', basis: 'assume about 65% on a first attempt = 30 misses or partials; each: re-read question and options (90 words) + explanation (146 words) = 236 / 140 = 1.7 + 1 min note = 2.7; 30 x 2.7 = 81 -> 80' },
        { id: 'w14d1-b3', type: 'lab', mins: 20, title: 'Lab 14.1: Score your mock exam by domain', desc: 'Sort every miss into one of the five exam domains, find your two weakest, and write a plan for each.', href: 'Lab.html?l=14.1' },
        { id: 'w14d1-b4', type: 'talk', mins: 10, title: 'Talk 14.1: Domain 1 review, General Security Concepts', desc: 'How the exam is weighted, then the CIA triad, AAA, control categories and types, zero trust, and the cryptography checklist.', href: 'Lesson.html?l=14.1' },
        { id: 'w14d1-b5', type: 'pbq', mins: 10, title: 'PBQ Lab 2: Verify a Download with an MD5 Hash', desc: 'Hash a file in PowerShell and compare it to the vendor\'s published value. Score the lab and read the explanation.', href: 'SecPlus_PBQ_Labs.html?lab=2', basis: '130 words / 140 = 0.9 + 3 commands x 0.75 = 2.3 + 1 question x 1 + 4 tasks x 1 (find the screen) + 113-word explanation / 140 = 0.8; total 9.0 -> 10' },
        { id: 'w14d1-b6', type: 'pbq', mins: 10, title: 'PBQ Lab 9: Manage Certificates on a CA', desc: 'Approve, deny, revoke, and unrevoke certificate requests on a certificate authority.', href: 'SecPlus_PBQ_Labs.html?lab=9', basis: '115 words / 140 = 0.8 + 6 actions x 0.75 = 4.5 + 4 tasks x 1 + 140-word explanation / 140 = 1.0; total 10.3 -> 10' },
        { id: 'w14d1-b7', type: 'quiz', mins: 15, title: 'Retake: Week 1 Quiz (security foundations)', desc: 'Domain 1 review. Aim for 80% or higher; read the explanation on every miss.', href: 'Quiz.html?w=1', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm; the Week 1 quiz measures 15' },
        { id: 'w14d1-b8', type: 'quiz', mins: 15, title: 'Retake: Week 2 Quiz (cryptography and PKI)', desc: 'Domain 1 review. Aim for 80% or higher; read the explanation on every miss.', href: 'Quiz.html?w=2', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
        { id: 'w14d1-b9', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Domains 2 to 5: PBQ labs and quiz retakes',
      blocks: [
        { id: 'w14d2-b1', type: 'talk', mins: 10, title: 'Talk 14.2: Domain 2 review, Threats, Vulnerabilities, and Mitigations', desc: 'Threat actors, social engineering, attack indicators, and the mitigations that stop them.', href: 'Lesson.html?l=14.2' },
        { id: 'w14d2-b2', type: 'pbq', mins: 25, title: 'PBQ Lab 1: SQL Injection', desc: 'Test a bank\'s account lookup form, find that its input is not validated, and use SQL and command injection to prove it.', href: 'SecPlus_PBQ_Labs.html?lab=1', basis: '215 words / 140 = 1.5 + 12 lookups x 0.75 = 9 + 5 questions x 1 + 6 tasks x 1 + 163-word explanation / 140 = 1.2; total 22.7 -> 25' },
        { id: 'w14d2-b3', type: 'pbq', mins: 20, title: 'PBQ Lab 3: Identify Social Engineering in an Inbox', desc: 'Read twelve emails in a VP\'s inbox and delete every social engineering attempt.', href: 'SecPlus_PBQ_Labs.html?lab=3', basis: '101 words / 140 = 0.7 + 12 emails judged x 0.75 = 9 + 400 words of email / 140 = 2.9 + 3 tasks x 1 + 369-word explanation / 140 = 2.6; total 18.2 -> 20' },
        { id: 'w14d2-b4', type: 'pbq', mins: 10, title: 'PBQ Lab 5: Detect ARP Poisoning with Wireshark', desc: 'Capture traffic, find the duplicate MAC address, and decide whether ARP poisoning is happening.', href: 'SecPlus_PBQ_Labs.html?lab=5', basis: '113 words / 140 = 0.8 + 4 actions x 0.75 = 3 + 2 questions x 1 + 4 tasks x 1 + 139-word explanation / 140 = 1.0; total 10.8 -> 10' },
        { id: 'w14d2-b5', type: 'quiz', mins: 15, title: 'Retake: Week 5 Quiz (vulnerabilities and attacks)', desc: 'Domain 2 review. Aim for 80% or higher.', href: 'Quiz.html?w=5', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
        { id: 'w14d2-b6', type: 'quiz', mins: 15, title: 'Retake: Week 6 Quiz (human factors)', desc: 'Domain 2 review. Aim for 80% or higher.', href: 'Quiz.html?w=6', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
        { id: 'w14d2-b7', type: 'talk', mins: 10, title: 'Talk 14.3: Domain 3 review, Security Architecture', desc: 'Cloud models and shared responsibility, network design, protecting data, and resilience.', href: 'Lesson.html?l=14.3' },
        { id: 'w14d2-b8', type: 'pbq', mins: 10, title: 'PBQ Lab 7: Create a WPA2 Wireless Network', desc: 'Build a WPA2-AES staff network on a wireless controller and connect a laptop to it.', href: 'SecPlus_PBQ_Labs.html?lab=7', basis: '113 words / 140 = 0.8 + 9 settings x 0.75 = 6.8 + 2 tasks x 1 + 128-word explanation / 140 = 0.9; total 10.5 -> 10' },
        { id: 'w14d2-b9', type: 'pbq', mins: 10, title: 'PBQ Lab 4: Harden Switch Ports with Port Security', desc: 'Shut down unused switch ports and lock the used ones with port security.', href: 'SecPlus_PBQ_Labs.html?lab=4', basis: '89 words / 140 = 0.6 + 6 settings x 0.75 = 4.5 + 2 tasks x 1 + 125-word explanation / 140 = 0.9; total 8.0 -> 10' },
        { id: 'w14d2-b10', type: 'pbq', mins: 25, title: 'PBQ Lab 10: Configure an OpenVPN Remote Access Server', desc: 'The longest PBQ: create a CA and server certificate, run the pfSense OpenVPN wizard, add the rules, and create VPN users.', href: 'SecPlus_PBQ_Labs.html?lab=10', basis: '163 words / 140 = 1.2 + 25 fields x 0.75 = 18.8 + 6 tasks x 1 + 209-word explanation / 140 = 1.5; total 27.5 -> 25' },
        { id: 'w14d2-b11', type: 'quiz', mins: 15, title: 'Retake: Week 4 Quiz (secure networks)', desc: 'Domain 3 review. Aim for 80% or higher.', href: 'Quiz.html?w=4', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
        { id: 'w14d2-b12', type: 'talk', mins: 10, title: 'Talk 14.4: Domain 4 review, Security Operations', desc: 'The biggest domain: hardening, vulnerability management, monitoring tools, identity, and incident response.', href: 'Lesson.html?l=14.4' },
        { id: 'w14d2-b13', type: 'pbq', mins: 10, title: 'PBQ Lab 6: Run a Vulnerability Scan', desc: 'Sign in to a scanner, scan a test server, and read the finding in the report.', href: 'SecPlus_PBQ_Labs.html?lab=6', basis: '129 words / 140 = 0.9 + 7 actions x 0.75 = 5.3 + 2 questions x 1 + 3 tasks x 1 + 134-word explanation / 140 = 1.0; total 12.2 -> 10' },
        { id: 'w14d2-b14', type: 'pbq', mins: 15, title: 'PBQ Lab 8: Secure pfSense Default Settings', desc: 'Change the default admin password, add a named admin, set a session timeout, and turn off the anti-lockout rule.', href: 'SecPlus_PBQ_Labs.html?lab=8', basis: '98 words / 140 = 0.7 + 10 settings x 0.75 = 7.5 + 4 tasks x 1 + 176-word explanation / 140 = 1.3; total 13.5 -> 15' },
        { id: 'w14d2-b15', type: 'quiz', mins: 15, title: 'Retake: Week 7 Quiz (defensive security and tools)', desc: 'Domain 4 review. Aim for 80% or higher.', href: 'Quiz.html?w=7', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
        { id: 'w14d2-b16', type: 'quiz', mins: 15, title: 'Retake: Week 8 Quiz (incident response)', desc: 'Domain 4 review. Aim for 80% or higher.', href: 'Quiz.html?w=8', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
        { id: 'w14d2-b17', type: 'talk', mins: 10, title: 'Talk 14.5: Domain 5 review, Security Program Management and Oversight', desc: 'Policies versus standards, risk math and treatments, vendor agreements, compliance, and awareness.', href: 'Lesson.html?l=14.5' },
        { id: 'w14d2-b18', type: 'quiz', mins: 15, title: 'Retake: Week 3 Quiz (identity, access, and data)', desc: 'Domain 5 and Domain 4 review: data roles, privacy, and access control. Aim for 80% or higher.', href: 'Quiz.html?w=3', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
        { id: 'w14d2-b19', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ]
};
