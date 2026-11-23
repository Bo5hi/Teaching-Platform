// Week 5 plan (staging). Merge into course-data.js COURSE.weeks[4] when approved. See docs/build/BRIEF.md.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[5] = {
  num: 5, title: 'Vulnerabilities, Attacks, and the Mock Pentest, part 2', modules: 'CertMaster Modules 8, 13, 14',
  sub: 'Finding and fixing weaknesses, recognizing attacks, then exploitation and the pentest report',
  overview: 'Dee has run Cedar Creek\'s first vulnerability scan, and the Heartland Manufacturing ISAC has new IRONLATCH indicators. This week you learn how vulnerabilities are found, scored, and prioritized, how application attacks such as SQL injection work, and how malware, password, and network attacks show up in logs. You triage the scan, hunt a disguised process, and sweep Cedar Creek\'s logs for indicators. Then you finish the mock pentest you started in Week 4: exploitation, post-exploitation, and a professional report. Day 2 closes with the SolarWinds supply chain case study.',
  anytime: [
    { title: 'Acronyms: Week 5, set A', href: 'Practice.html?p=acro-w5a' },
    { title: 'Acronyms: Week 5, set B', href: 'Practice.html?p=acro-w5b' },
    { title: 'Security+ flash cards (CyberSec Academy)', href: 'CyberSec_Academy.html?scr=fc' },
    { title: 'Pentest Lab setup (AttackBox and HackTheBox, from Week 4)', href: 'Pillar4_EthicalHacking.html?setup=1' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'Vulnerability management, application attacks, malware, and exploitation',
      blocks: [
        { id: 'w5d1-b1', type: 'lesson', mins: 15, title: 'Lesson 5.1: Vulnerability management', desc: 'Where vulnerabilities come from, how scanners find them, CVE and CVSS, and why the highest score is not always the first fix.', href: 'Lesson.html?l=5.1' },
        { id: 'w5d1-b2', type: 'lab', mins: 50, title: 'Lab 5.1: Vulnerability triage', desc: 'Analyze Dee\'s scan export in Kali with grep, awk, and sed, decode CVSS vectors, catch a false positive, write a triage script, and rank the top five fixes.', href: 'Lab.html?l=5.1' },
        { id: 'w5d1-b3', type: 'pbq', mins: 10, title: 'PBQ Lab 6: Run a vulnerability scan and read the report', desc: 'Create a target and a task in a scanner, run it, and read the finding the way the exam expects.', href: 'SecPlus_PBQ_Labs.html?lab=6', basis: 'sign in 1 + create target and task 3 + run and wait 1 + open the report and read the finding 3 + 2 questions x 1 + review the answers 1 = 11 -> 10' },
        { id: 'w5d1-b4', type: 'lesson', mins: 15, title: 'Lesson 5.2: Application attacks and secure development', desc: 'SQL injection, XSS, CSRF, and other application attacks, the secure SDLC, and the OWASP Top 10.', href: 'Lesson.html?l=5.2' },
        { id: 'w5d1-b5', type: 'pbq', mins: 17, title: 'PBQ Lab 1: Test a web form for SQL injection', desc: 'Probe a bank\'s account lookup page for missing input validation, SQL injection, and command injection.', href: 'SecPlus_PBQ_Labs.html?lab=1', basis: 'read the scenario 1 + 12 lookups x 0.75 + 5 questions x 1 + review the explanation 2 = 17' },
        { id: 'w5d1-b6', type: 'mock', mins: 75, title: 'Mock Pentest, part 2: Exploitation (Phase 3)', desc: 'Gain access to HackTheBox Preignition (hidden admin page, default password) and Appointment (SQL injection login), then do the PortSwigger SQL injection and reflected XSS labs. Add flags, screenshots, payloads, and fixes to your engagement log and submit its link.', href: 'Pillar4_EthicalHacking.html?phase=2', basis: 'phase page 897 words / 140 wpm = 6.4 + Preignition 18 (spawn target and AttackBox 4, nmap 3, gobuster 5, admin login and flag 3, guided questions 3) + Appointment 18 (spawn 3, nmap 3, SQL injection login 6, flag and questions 6) + PortSwigger SQLi lab 1 and reflected XSS lab 1 15 (sign-up 3, 6 + 6) + write-up 4 findings x 4 = 16 => 73.4 -> 75' },
        { id: 'w5d1-b7', type: 'lesson', mins: 15, title: 'Lesson 5.3: Malware, password attacks, and their indicators', desc: 'Malware types by behavior, fileless malware, spraying versus brute force, the Security+ indicator list, and IOCs.', href: 'Lesson.html?l=5.3' },
        { id: 'w5d1-b8', type: 'lab', mins: 55, title: 'Lab 5.2: Malware hunt and IOC sweep', desc: 'Find and kill a disguised process with ps and kill, then use the ISAC\'s IRONLATCH indicators to sweep quarantine hashes, the web proxy log, and the VPN log.', href: 'Lab.html?l=5.2' },
        { id: 'w5d1-b9', type: 'practice', mins: 10, title: 'Attack Sorter', desc: 'Name 20 attacks from the indicator an analyst saw. Aim for 90% or higher.', href: 'Practice.html?p=attacks-w5' },
        { id: 'w5d1-b10', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Attacks and threat intelligence, post-exploitation, the pentest report, and SolarWinds',
      blocks: [
        { id: 'w5d2-b1', type: 'lesson', mins: 15, title: 'Lesson 5.4: Network attacks and threat intelligence', desc: 'DDoS, on-path, and DNS attacks, intelligence sources and levels, ATT&CK, the pyramid of pain, and the SolarWinds supply chain attack.', href: 'Lesson.html?l=5.4' },
        { id: 'w5d2-b2', type: 'tool', mins: 14, title: 'SOC Simulator (CyberSec Academy)', desc: 'Triage three live scenarios: ransomware, an impossible-travel login, and an insider. Choose a response at each step.', href: 'CyberSec_Academy.html?scr=soc', basis: '3 scenarios, 7 decisions x 2 min (read the alert 0.8, choose 0.5, read the feedback 0.7) = 14' },
        { id: 'w5d2-b3', type: 'lesson', mins: 15, title: 'Lesson 5.5: Exploitation, post-exploitation, and the pentest report', desc: 'Rules of engagement, test types, privilege escalation and lateral movement, cleanup, how a report reads, and this week\'s mock pentest map.', href: 'Lesson.html?l=5.5' },
        { id: 'w5d2-b4', type: 'mock', mins: 55, title: 'Mock Pentest, part 2: Post-exploitation (Phase 4)', desc: 'Get into HackTheBox Sequel (MySQL) and Mongod (MongoDB). Document your access level, what data was reachable, credentials you saw (not cracked), and a described persistence and lateral movement path.', href: 'Pillar4_EthicalHacking.html?phase=3', basis: 'phase page 535 words / 140 wpm = 3.8 + Sequel 20 (spawn 4, nmap -sV 5, mysql login and queries 7, questions 4) + Mongod 22 (spawn 4, all-ports nmap 6, mongo shell 6, list databases and read flag 3, questions 3) + write-up 5 deliverable items x 2 = 10 => 55.8 -> 55' },
        { id: 'w5d2-b5', type: 'mock', mins: 45, title: 'Mock Pentest, part 2: Reporting (Phase 5)', desc: 'Turn Weeks 4 and 5 into a report: executive summary, findings table with CVSS-based severity, one detailed finding, and prioritized recommendations.', href: 'Pillar4_EthicalHacking.html?phase=4', basis: 'phase page 642 words / 140 wpm = 4.6 + executive summary 12 + findings table 8 rows x 1 = 8 + one detailed finding 10 + recommendations 8 => 42.6 -> 45' },
        { id: 'w5d2-b6', type: 'mock', mins: 20, title: 'Mock Pentest, part 2: Capstone and submit', desc: 'Finish the engagement: phase-by-phase log, overall risk rating with a justification, and a numbered remediation roadmap. Submit the final link. Optional at home: run HackTheBox Crocodile end to end.', href: 'Pillar4_EthicalHacking.html?phase=5', due: 'Due end of Day 2', basis: 'phase page 748 words skimmed / 140 wpm = 5.3 + tidy the phase log 5 + overall risk rating and justification 4 + remediation roadmap 6 + final check and submit 2 => 22.3 -> 20' },
        { id: 'w5d2-b7', type: 'tool', mins: 13, title: 'NIST CSF 2.0 tool: SolarWinds analysis', desc: 'Read the Attack Story and Function Breakdown tabs to see how SolarWinds maps to the six CSF functions. The worksheet tab is for Week 6.', href: 'NIST_CSF_Map.html', basis: 'Attack Story 698 words + Function Breakdown 1,070 words = 1,768 / 140 wpm = 12.6 -> 13' },
        { id: 'w5d2-b8', type: 'read', mins: 12, title: 'Source: CISA Advisory AA20-352A', desc: 'Read the Summary, Key Takeaways, Initial Infection Vectors, SolarWinds Orion Supply Chain Compromise, and User Impersonation sections.', href: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a', basis: 'five sections, about 1,460 words / 140 wpm = 10.4 + 2 min notes = 12' },
        { id: 'w5d2-b9', type: 'read', mins: 6, title: 'Source: CISA Emergency Directive 21-01', desc: 'Read the Background and Required Actions: what CISA ordered federal agencies to do with SolarWinds Orion in December 2020.', href: 'https://www.cisa.gov/news-events/directives/ed-21-01-mitigate-solarwinds-orion-code-compromise-closed', basis: 'Background and Required Actions, about 730 words / 140 wpm = 5.2 + 1 min notes = 6' },
        { id: 'w5d2-p1', type: 'project', mins: 50, title: 'Project 5: SolarWinds Supply Chain Attack (2020), Deep Dive', desc: 'Case study, 50 points. Read the case, then answer six questions. Finish the write-up at home if you need to.', href: 'Project.html?p=5', due: 'Due start of Week 6' },
        { id: 'w5d2-b10', type: 'quiz', mins: 15, title: 'Week 5 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=5' },
        { id: 'w5d2-b11', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ],
  mock: {
    id: 'w5', title: 'Mock Pentest, part 2: Exploitation, Post-Exploitation, and Report', href: 'Pillar4_EthicalHacking.html?phase=2',
    rubric: [
      ['Exploitation evidence', 'Gained access to Preignition and Appointment with flags and screenshots, named each vulnerability and the access level gained, and explained it in plain words'],
      ['Web attacks and fixes', 'SQL injection and XSS: the exact payloads, why each worked, and the correct developer fix (parameterized queries, output encoding)'],
      ['Post-exploitation', 'On Sequel and Mongod: access level, data reachable, credentials seen but not cracked, and a described (not installed) persistence and lateral movement path'],
      ['Findings and risk ratings', 'A findings table covering Weeks 4 and 5 with CVSS-based severity ranked sensibly, plus one complete detailed finding: description, evidence, impact, remediation'],
      ['Executive summary and roadmap', 'A one-page plain-language summary with an overall risk rating, and a prioritized, actionable remediation roadmap; capstone link submitted']
    ]
  }
};
