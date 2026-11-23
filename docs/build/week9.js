// Week 9 plan (staging). Merge into course-data.js with: node docs/tools/merge_staging.js 9
// Ticket minutes: read all ticket text, log guides and log cells at 140 wpm + one work note per evidence source (3 min,
// the case-study short-answer rate) + close-out (Easy/Moderate Summary = 1 long answer, 10 min; Hard/Expert Actions +
// Root cause + Recommendation = 3 long answers, 30 min) + priority and disposition picks (2 x 0.75). Details: week9-notes.md.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[9] = {
  num: 9, title: 'SOC Operations: Mock Tickets', modules: 'Security+ Domain 4: Security Operations (applied)',
  sub: 'A full week working the Cedar Creek ticket queue', light: true,
  overview: 'Marcus has reopened Cedar Creek\'s tickets from August to October 2026 as your training queue. This week you work them on the SOC Ticket Board as if each one just arrived: triage it, set a priority you can defend, read the logs, write work notes, and close it with the right disposition before its SLA runs out. Day 1 is help desk, sign-in, access, and network tickets. Day 2 is reported emails, malware, and three P1 incidents from the morning of August 19. Each day starts with a short talk tied only to that day\'s tickets. Your instructor assigns each round of tickets at the start of its block, and that is when the SLA clock starts. Every ticket is graded out of 25 points on the ticket rubric.',
  anytime: [
    { title: 'Acronyms: Week 9, set A (the SOC and incidents)', href: 'Practice.html?p=acro-w9a' },
    { title: 'Acronyms: Week 9, set B (email, identity, and evidence)', href: 'Practice.html?p=acro-w9b' },
    { title: 'Stretch tickets, if your instructor assigns them: TCK-3004 and TCK-3005 finish the August 19 incident', href: 'MCCoE_Student_Platform.html?open=tickets' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'Triage, logs, and your first tickets',
      blocks: [
        { id: 'w9d1-b1', type: 'talk', mins: 10, title: 'Talk 9.1: Triage, priority, and SLAs', desc: 'How the ticket board works, how to decide what to work first, and the SLA clock on every ticket.', href: 'Lesson.html?l=9.1' },
        { id: 'w9d1-b2', type: 'tool', mins: 70, title: 'Tickets, round 1: help desk requests (TCK-1004, TCK-1001, TCK-1003)', desc: 'A new hire\'s setup request, a locked-out accountant, and a VPN that will not connect. Set a priority for each, read the logs, write a note per source, and close each one with a summary.', href: 'MCCoE_Student_Platform.html?open=tickets', basis: 'TCK-1004: 239 words / 140 + 3 sources x 3 note + 10 summary + 2 picks x 0.75 = 22.2; TCK-1001: 654 / 140 + 2 x 3 + 10 + 1.5 = 22.2; TCK-1003: 490 / 140 + 3 x 3 + 10 + 1.5 = 24.0; total 68.4 -> 70' },
        { id: 'w9d1-b3', type: 'talk', mins: 10, title: 'Talk 9.2: Reading logs and writing ticket notes', desc: 'Event IDs, sign-in logs, time zones, and the four-part work note your grade depends on.', href: 'Lesson.html?l=9.2' },
        { id: 'w9d1-b4', type: 'tool', mins: 50, title: 'Tickets, round 2: sign-in alerts (TCK-1005, TCK-2001)', desc: 'Repeated MFA prompts on one account, and a sign-in from two countries 19 minutes apart. Decide: misconfiguration, or compromise?', href: 'MCCoE_Student_Platform.html?open=tickets', basis: 'TCK-1005: 501 words / 140 + 3 sources x 3 + 10 summary + 1.5 = 24.1; TCK-2001: 532 / 140 + 3 x 3 + 10 + 1.5 = 24.3; total 48.4 -> 50' },
        { id: 'w9d1-b5', type: 'tool', mins: 45, title: 'Tickets, round 3: access and data (TCK-2003, TCK-2005)', desc: 'An urgent request for Finance folder access, and a DLP alert for 2.3 GB of drawings copied to USB. Apply least privilege and the approval process, and do not accuse anyone.', href: 'MCCoE_Student_Platform.html?open=tickets', basis: 'TCK-2003: 212 words / 140 + 3 sources x 3 + 10 summary + 1.5 = 22.0; TCK-2005: 282 / 140 + 3 x 3 + 10 + 1.5 = 22.5; total 44.5 -> 45' },
        { id: 'w9d1-b6', type: 'tool', mins: 45, title: 'Tickets, round 4: network and endpoint (TCK-2004, TCK-1007)', desc: 'Plant office users cannot reach a vendor portal, and a Customer Service PC keeps showing fake virus warnings. Find the root cause in the evidence.', href: 'MCCoE_Student_Platform.html?open=tickets', basis: 'TCK-2004: 508 words / 140 + 3 sources x 3 + 10 summary + 1.5 = 24.1; TCK-1007: 358 / 140 + 3 x 3 + 10 + 1.5 = 23.1; total 47.2 -> 45' },
        { id: 'w9d1-b7', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Phishing, malware, and escalating P1 incidents',
      blocks: [
        { id: 'w9d2-b1', type: 'talk', mins: 10, title: 'Talk 9.3: Phishing and email analysis', desc: 'Email headers, what SPF, DKIM, and DMARC really prove, lookalike domains, and how to find everyone who got the same message.', href: 'Lesson.html?l=9.3' },
        { id: 'w9d2-b2', type: 'tool', mins: 55, title: 'Tickets, round 5: reported emails (TCK-1002, TCK-1006)', desc: 'A "mailbox is full" message and a DocuSign "W-9 update" from a supplier. Read the headers, check the links, scope who else received it, and tell the user what to do.', href: 'MCCoE_Student_Platform.html?open=tickets', basis: 'TCK-1002: 832 words / 140 + 4 sources x 3 + 10 summary + 1.5 = 29.4; TCK-1006: 409 / 140 + 3 x 3 + 10 + 1.5 = 23.4; total 52.8 -> 55' },
        { id: 'w9d2-b3', type: 'tool', mins: 25, title: 'Tickets, round 6: the malicious attachment (TCK-2002)', desc: 'EDR quarantined invoice_aug.pdf.exe on FINANCE-07. Confirm containment, decide whether it ran, and check whether it is linked to an earlier ticket.', href: 'MCCoE_Student_Platform.html?open=tickets', basis: 'TCK-2002: 499 words / 140 + 3 sources x 3 note + 10 summary + 2 picks x 0.75 = 24.1 -> 25' },
        { id: 'w9d2-b4', type: 'talk', mins: 10, title: 'Talk 9.4: Escalation and incident tickets', desc: 'When a ticket becomes an incident, who you call at Cedar Creek, containment trade-offs, and the three-part close-out for Hard tickets.', href: 'Lesson.html?l=9.4' },
        { id: 'w9d2-b5', type: 'tool', mins: 50, title: 'Tickets, round 7 (P1): the CFO wire request (TCK-3003)', desc: 'The business email compromise that started Cedar Creek\'s security program. Decide if it is real, preserve the evidence, check whether the CFO\'s mailbox was broken into, and name who must be told. Assigned at the start of this block: the 4-hour P1 clock starts then.', href: 'MCCoE_Student_Platform.html?open=tickets', basis: 'TCK-3003: 636 words / 140 + 4 sources x 3 note + 30 (actions, root cause, recommendation) + 1.5 = 48.0 -> 50' },
        { id: 'w9d2-b6', type: 'tool', mins: 45, title: 'Tickets, round 8 (P1): ransomware on SHARE-01 (TCK-3001)', desc: 'Thousands of files renamed and a ransom note in every folder. Make the containment call, scope the damage, check the backups, and escalate. Linked to TCK-2002.', href: 'MCCoE_Student_Platform.html?open=tickets', basis: 'TCK-3001: 533 words / 140 + 4 sources x 3 note + 30 close-out + 1.5 = 47.3 -> 45' },
        { id: 'w9d2-b7', type: 'tool', mins: 50, title: 'Tickets, round 9 (P1): password spray on the VPN (TCK-3002)', desc: 'About 9,400 failed VPN logins from 62 IPs overnight, then two successes. Size the blast radius, decide on containment, and list what to check on the two accounts that got in.', href: 'MCCoE_Student_Platform.html?open=tickets', basis: 'TCK-3002: 1,132 words / 140 + 4 sources x 3 note + 30 close-out + 1.5 = 51.6 -> 50' },
        { id: 'w9d2-b8', type: 'quiz', mins: 10, title: 'Week 9 Quiz', desc: '10 questions on triage, SLAs, logs, phishing, and escalation. 80% to pass; retakes allowed.', href: 'Quiz.html?w=9' },
        { id: 'w9d2-b9', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ],
  mock: {
    id: 'w9', title: 'SOC Ticket Board (full week)', href: 'MCCoE_Student_Platform.html?open=tickets',
    rubric: [
      ['Priority & triage', 'Picked the right priority and could explain why'],
      ['Investigation & evidence', 'Used the logs; work notes show times, hosts, IPs, accounts'],
      ['Disposition', 'Reached the correct disposition (true/false positive, etc.)'],
      ['Root cause', 'Identified what actually happened and why'],
      ['Write-up & recommendations', 'Clear summary, sensible containment / next steps']
    ]
  }
};
