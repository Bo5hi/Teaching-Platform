// Week 8 plan (staging). Merge into course-data.js COURSE.weeks[7] when approved.
// Block ids are permanent once students use them. Minutes come from: node docs/tools/estimate_time.js 8
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[8] = {
  num: 8, title: 'Incident Response', modules: 'Security+ objectives 4.8, 4.9, 3.4, and 5.2 (BIA)',
  sub: 'Cedar Creek\'s first declared incident, ransomware, from the 6 AM alert to the final report',
  overview: 'At 6:05 on a Wednesday morning, ransomware is encrypting Cedar Creek\'s engineering file server. This week you learn the incident response lifecycle used everywhere (preparation, detection and analysis, containment, eradication, recovery, and lessons learned), how to triage alerts from P1 to P4, the basics of digital forensics (order of volatility and chain of custody), and how incident response, disaster recovery, and business continuity work together. You triage the real alert queue, investigate the evidence in Kali, and write the incident report. Then you finish the Blue Team Lab with an Equifax incident response report and a defensive report, run the CTF, and complete the Equifax frameworks case study.',
  anytime: [
    { title: 'Acronyms: Week 8, set A', href: 'Practice.html?p=acro-w8a' },
    { title: 'Acronyms: Week 8, set B', href: 'Practice.html?p=acro-w8b' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'The IR lifecycle, triage, forensics, and the Cedar Creek ransomware incident',
      blocks: [
        { id: 'w8d1-b1', type: 'lesson', mins: 15, title: 'Lesson 8.1: Incident response: the plan and the lifecycle', desc: 'Events vs incidents, the IR plan and team, the six steps, and tabletop exercises.', href: 'Lesson.html?l=8.1' },
        { id: 'w8d1-b3', type: 'lesson', mins: 15, title: 'Lesson 8.2: Detection, analysis, and triage', desc: 'Where detections come from, true and false positives, P1 to P4, and linking alerts into one incident.', href: 'Lesson.html?l=8.2' },
        { id: 'w8d1-b4', type: 'lab', mins: 30, title: 'Lab 8.1: Triage the morning queue', desc: 'Ten overnight alerts at 6:05 AM. Rank them, find the attack hiding among them, and make the first call.', href: 'Lab.html?l=8.1' },
        { id: 'w8d1-b5', type: 'lesson', mins: 15, title: 'Lesson 8.3: Containment, eradication, and recovery', desc: 'Short- and long-term containment, playbooks by incident type, removing persistence, and restoring safely.', href: 'Lesson.html?l=8.3' },
        { id: 'w8d1-b6', type: 'practice', mins: 15, title: 'Incident Response Step Sorter', desc: 'Sort 24 real actions into the six IR steps. Aim for 90% or higher.', href: 'Practice.html?p=ir-w8' },
        { id: 'w8d1-b7', type: 'lab', mins: 20, title: 'Lab 8.4: Write Cedar Creek\'s phishing playbook', desc: 'A one-page checklist, step by step, for a phishing email that steals a password and sets up invoice fraud.', href: 'Lab.html?l=8.4' },
        { id: 'w8d1-b8', type: 'lesson', mins: 15, title: 'Lesson 8.4: Digital forensics basics: volatility and custody', desc: 'Order of volatility, legal hold, acquisition and hashing, and the chain of custody.', href: 'Lesson.html?l=8.4' },
        { id: 'w8d1-b9', type: 'lab', mins: 65, title: 'Lab 8.2: Investigate the ENG-FS01 ransomware in Kali', desc: 'Use grep, cut, sort, uniq, and awk on the incident evidence to rebuild the attack, then verify evidence hashes and review the custody sheet.', href: 'Lab.html?l=8.2' },
        { id: 'w8d1-b10', type: 'lesson', mins: 15, title: 'Lesson 8.5: Incident reports, lessons learned, and notification', desc: 'What goes in the report, the blameless review, and who outside the company must be told.', href: 'Lesson.html?l=8.5' },
        { id: 'w8d1-b11', type: 'lab', mins: 25, title: 'Lab 8.3: Write the CC-IR-2026-01 incident report', desc: 'Turn your findings into the report for Greg Palmer: timeline, root cause, recovery math, notification, and recommendations.', href: 'Lab.html?l=8.3' },
        { id: 'w8d1-b12', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Continuity and backups, the Blue Team Lab finish, the CTF, and the Equifax case',
      blocks: [
        { id: 'w8d2-b1', type: 'lesson', mins: 15, title: 'Lesson 8.6: IR, DR, and BCP: backups and staying in business', desc: 'BIA, RTO, RPO, MTTR, MTBF, backup types and the 3-2-1 rule, recovery sites, and testing.', href: 'Lesson.html?l=8.6' },
        { id: 'w8d2-b2', type: 'mock', mins: 50, title: 'Blue Team Lab, Phase 4: Equifax incident response report', desc: 'You are the Equifax CISO on July 29, 2017. Write the response across all six steps, with owners and tools, plus a board briefing.', href: 'Pillar5_BlueTeam.html?phase=3',
          basis: 'about 420 words of framework and scenario at 140 wpm = 3 + 6 steps x 4 points at about 7 min per step = 42 + board briefing 5 = 50' },
        { id: 'w8d2-b3', type: 'tool', mins: 40, title: 'CTF: 12 flags across the four case studies', desc: 'Decode, search, and count your way through Target, Colonial, SolarWinds, and Equifax challenges. Scores go to the tracker.', href: 'MCCoE_CTF.html',
          basis: '12 flags x 3 min (read the card and artifact, solve, submit) = 36 + 4 min for the intro and hints = 40' },
        { id: 'w8d2-b4', type: 'mock', mins: 60, title: 'Blue Team Lab, Phase 5: Defensive report', desc: 'One report covering all four Blue Team scenarios: findings with severity, timeline, recommendations, and ATT&CK IDs.', href: 'Pillar5_BlueTeam.html?phase=4', due: 'Due end of Day 2',
          basis: 'about 380 words at 140 wpm = 3 + executive summary 10 + 8 findings with severity x 2 = 16 + timeline 8 + 8 recommendations x 1.5 = 12 + ATT&CK table 8 rows x 1.5 = 12 = 61 -> 60' },
        { id: 'w8d2-b5', type: 'read', mins: 10, title: 'Source: FTC, Equifax Data Breach Settlement', desc: 'What Equifax agreed to pay and do, and what affected people could claim. You need it for Project 8, question 5.', href: 'https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement',
          basis: 'about 800 words at 140 wpm = 6 + 4 min noting the settlement terms for Project 8 = 10' },
        { id: 'w8d2-b6', type: 'read', mins: 5, title: 'Source: GAO-18-559 (reference)', desc: 'The GAO summary you read in Week 7. Skim the highlights again for the NIST CSF evidence in Project 8.', href: 'https://www.gao.gov/products/gao-18-559',
          basis: 'highlights page re-read from Week 7: about 600 words at 140 wpm = 4 + 1 = 5' },
        { id: 'w8d2-p1', type: 'project', mins: 60, title: 'Project 8: Equifax Data Breach (2017), Frameworks & Writing', desc: 'The last case study, 100 points: NIST CSF failures, an executive summary for Congress, remediation, and the laws involved. Finish at home if you need to.', href: 'Project.html?p=8', due: 'Due start of Week 9' },
        { id: 'w8d2-b7', type: 'quiz', mins: 15, title: 'Week 8 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=8' },
        { id: 'w8d2-b8', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ],
  mock: {
    id: 'w8', title: 'Blue Team Lab: Incident Response and Defensive Report', href: 'Pillar5_BlueTeam.html?phase=3',
    rubric: [
      ['NIST lifecycle (Phase 4)', 'All six steps covered in order with specific Equifax actions, including what Equifax did wrong'],
      ['Roles, tools, and board briefing (Phase 4)', 'Clear owner and realistic tools for each action, and a short, factual board statement'],
      ['Findings and severity (Phase 5)', 'Findings from all four scenarios, each with evidence and a defensible severity rating'],
      ['Timeline and ATT&CK mapping (Phase 5)', 'A chronological attack timeline from the lab artifacts, with correct ATT&CK technique IDs'],
      ['Recommendations and executive summary (Phase 5)', 'A specific fix and tool for each finding, and a summary a non-technical leader could act on']
    ]
  }
};
