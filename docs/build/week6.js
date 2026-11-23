// Week 6 plan, staged here until it is merged into course-data.js. See docs/build/BRIEF.md.
// No mock project this week (Joey's decision): the hands-on work is the seven labs.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[6] = {
  num: 6, title: 'Human Factors', modules: 'Security+ objectives 1.2, 2.2, 2.4, 4.5, 4.6, 5.6',
  sub: 'Social engineering, password attacks, Zero Trust, and security awareness at Cedar Creek',
  overview: 'Most attacks start with a person, not a server. This week you learn how social engineering works and read real-looking phishing emails down to their headers. You run Cedar Creek\'s first authorized password audit with John the Ripper and find a password spraying attack in the VPN log. On Day 2 you apply Zero Trust and least privilege to real access requests, analyze the company\'s first phishing simulation, trace a phishing email to the account it compromised, and finish the SolarWinds case with Project 6.',
  caseStudy: 'Project 6: SolarWinds, Frameworks & Writing',
  anytime: [
    { title: 'Acronyms: Week 6, set A', href: 'Practice.html?p=acro-w6a' },
    { title: 'Acronyms: Week 6, set B', href: 'Practice.html?p=acro-w6b' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'Social engineering, phishing, and password attacks',
      blocks: [
        { id: 'w6d1-b1', type: 'lesson', mins: 15, title: 'Lesson 6.1: Social engineering', desc: 'How attackers hack people: phishing to piggybacking, the levers they pull, and the habit that beats them.', href: 'Lesson.html?l=6.1' },
        { id: 'w6d1-b2', type: 'tool', mins: 15, title: 'Phishing Spotter', desc: 'Find all 16 red flags in three practice phishing emails in the CyberSec Academy. Aim for 100%.', href: 'CyberSec_Academy.html?scr=ph',
          basis: '3 emails plus 16 flag explanations, about 650 words / 140 = 5 min + 16 red flags x 0.75 min = 12 min = 17 -> 15' },
        { id: 'w6d1-b3', type: 'lesson', mins: 15, title: 'Lesson 6.2: Phishing up close', desc: 'Red flags, email headers, and what SPF, DKIM, and DMARC do and do not prove.', href: 'Lesson.html?l=6.2' },
        { id: 'w6d1-b4', type: 'lab', mins: 45, title: 'Lab 6.1: Phishing header analysis', desc: 'Download the Week 6 pack and read the headers of three reported emails in Kali. Decide which are phishing.', href: 'Lab.html?l=6.1' },
        { id: 'w6d1-b5', type: 'lesson', mins: 15, title: 'Lesson 6.3: Password attacks', desc: 'Online and offline attacks, brute force, dictionaries, spraying, stuffing, and why salt matters.', href: 'Lesson.html?l=6.3' },
        { id: 'w6d1-b6', type: 'lab', mins: 60, title: 'Lab 6.2: Password audit with John the Ripper', desc: 'Crack the DC01 hash export with a wordlist, a pattern list you build, a brute-force mask, and rockyou.', href: 'Lab.html?l=6.2' },
        { id: 'w6d1-b11', type: 'lab', mins: 40, title: 'Lab 6.3: Spot password spraying in the VPN log', desc: 'Tell spraying, brute force, and credential stuffing apart in a weekend of VPN sign-ins, and find the one that got in.', href: 'Lab.html?l=6.3' },
        { id: 'w6d1-b7', type: 'lesson', mins: 15, title: 'Lesson 6.4: Strong passwords and better authentication', desc: 'Entropy, passphrases, password managers, NIST guidance, MFA, and shared accounts.', href: 'Lesson.html?l=6.4' },
        { id: 'w6d1-b8', type: 'lab', mins: 15, title: 'Lab 6.4: Rewrite the password policy', desc: 'Test five strategies in the Password Checker and replace the 2019 memo with rules based on your audit.', href: 'Lab.html?l=6.4' },
        { id: 'w6d1-b9', type: 'practice', mins: 15, title: 'Attack Identifier', desc: 'Name the attack in 24 scenarios, social engineering and password attacks mixed. Aim for 90% or higher.', href: 'Practice.html?p=attacks-w6' },
        { id: 'w6d1-b10', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Zero Trust, security awareness, and the SolarWinds case',
      blocks: [
        { id: 'w6d2-b1', type: 'lesson', mins: 15, title: 'Lesson 6.5: Zero Trust and least privilege', desc: 'Never trust, always verify: the control and data planes, least privilege, and assume breach.', href: 'Lesson.html?l=6.5' },
        { id: 'w6d2-b2', type: 'lab', mins: 20, title: 'Lab 6.5: Zero Trust access decisions', desc: 'Act as Cedar Creek\'s policy engine and decide eight real access requests, then apply it to SolarWinds.', href: 'Lab.html?l=6.5' },
        { id: 'w6d2-b3', type: 'lesson', mins: 15, title: 'Lesson 6.6: Security awareness that changes behavior', desc: 'What to teach, anomalous behavior, phishing campaigns, and the numbers that matter.', href: 'Lesson.html?l=6.6' },
        { id: 'w6d2-b4', type: 'lab', mins: 35, title: 'Lab 6.6: Phishing simulation results', desc: 'Use awk in Kali to measure click, credential, and report rates and write next quarter\'s awareness plan.', href: 'Lab.html?l=6.6' },
        { id: 'w6d2-b8', type: 'lab', mins: 40, title: 'Lab 6.7: Follow up on a phish', desc: 'Trace report-01 through the message trace, web log, and sign-in log to find who clicked and which account fell.', href: 'Lab.html?l=6.7' },
        { id: 'w6d2-b5', type: 'tool', mins: 15, title: 'NIST CSF 2.0 tool: SolarWinds analysis', desc: 'Re-read the Function Breakdown tab and note one piece of SolarWinds evidence per function for Project 6.', href: 'NIST_CSF_Map.html',
          basis: 'Function Breakdown tab, 1,073 words / 140 = 8 min + 6 functions x 1 min to note evidence = 14 -> 15' },
        { id: 'w6d2-b6', type: 'read', mins: 10, title: 'Source: CISA Advisory AA20-352A', desc: 'Reference for Project 6. Read the Summary, Key Takeaways, Overview, and Initial Infection Vectors sections.', href: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a',
          basis: 'Summary, Key Takeaways, Overview, Initial Infection Vectors: about 1,040 words / 140 = 7.5 min + 3 min notes = 10.5 -> 10' },
        { id: 'w6d2-p1', type: 'project', mins: 60, title: 'Project 6: SolarWinds (2020), Frameworks & Writing', desc: 'NIST CSF failures, a pentest technique, an executive summary for a federal CIO, remediation, and compliance. 100 points. Finish at home if you need to.', href: 'Project.html?p=6', due: 'Due start of Week 7' },
        { id: 'w6d2-b7', type: 'quiz', mins: 15, title: 'Week 6 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=6' },
        { id: 'w6d2-b9', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ]
};
