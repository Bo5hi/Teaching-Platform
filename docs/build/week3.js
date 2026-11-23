// Week 3 plan (staging). Merge into course-data.js COURSE.weeks[2] when approved. See docs/build/BRIEF.md.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[3] = {
  num: 3, title: 'Identity, Access, and Data', modules: 'CertMaster Modules 4, 16',
  sub: 'Authentication, authorization, and protecting data at Cedar Creek',
  overview: 'Brian Kessler left Cedar Creek in October, but his badge kept working. This week you find out what else still works. You learn how people prove who they are (passwords, MFA, passwordless), how access is granted and limited (access control models, least privilege, privileged access), and how an identity should be created, changed, and removed. You build Linux users, groups, permissions, and sudo rules in Kali, then run Cedar Creek\'s first access review against the HR roster. On Day 2 you classify the company\'s data and study the Colonial Pipeline ransomware attack, which public sources trace to a forgotten VPN profile without MFA.',
  anytime: [
    { title: 'Acronyms: Week 3, set A', href: 'Practice.html?p=acro-w3a' },
    { title: 'Acronyms: Week 3, set B', href: 'Practice.html?p=acro-w3b' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'Authentication, authorization, and Cedar Creek\'s accounts',
      blocks: [
        { id: 'w3d1-b1', type: 'lesson', mins: 20, title: 'Lesson 3.1: Authentication', desc: 'Factors, MFA methods, password policy, password managers, and passwordless sign-in.', href: 'Lesson.html?l=3.1' },
        { id: 'w3d1-b2', type: 'tool', mins: 15, title: 'Academy Password Checker', desc: 'Test six practice passwords (Spring2024!, cedarcreek, Cedar#2019, a 16-character random string, a four-word passphrase, and one of your own design that you will never use). Note the strength, entropy, and crack time for each, and why Spring2024! scores better than it should.', href: 'CyberSec_Academy.html?scr=pw',
          basis: '6 passwords x 1.5 min (type, read 8 checks, entropy, crack time) + 3 min reading the common-mistakes panel + 3 min comparing results with the 2019 memo = 15' },
        { id: 'w3d1-b3', type: 'lab', mins: 45, title: 'Lab 3.1: Linux users, groups, passwd, and shadow', desc: 'Read /etc/passwd and /etc/shadow, create Cedar Creek users and groups, set password aging, and deprovision a leaver.', href: 'Lab.html?l=3.1' },
        { id: 'w3d1-b4', type: 'lesson', mins: 15, title: 'Lesson 3.2: Authorization and least privilege', desc: 'DAC, MAC, RBAC, rule-based, and ABAC; least privilege; privileged access management.', href: 'Lesson.html?l=3.2' },
        { id: 'w3d1-b5', type: 'practice', mins: 10, title: 'Access Control Model Sorter', desc: 'Match 20 situations to the access control model they describe. Aim for 90% or higher.', href: 'Practice.html?p=access-w3' },
        { id: 'w3d1-b6', type: 'lab', mins: 50, title: 'Lab 3.2: Permissions and sudo', desc: 'Build a least-privilege file share with chown and chmod, find a chmod 777, and give the help desk one sudo command instead of root.', href: 'Lab.html?l=3.2' },
        { id: 'w3d1-b7', type: 'lesson', mins: 15, title: 'Lesson 3.3: Identity lifecycle and single sign-on', desc: 'Directories, account types, joiners-movers-leavers, access reviews, SSO, SAML, OAuth, and OIDC.', href: 'Lesson.html?l=3.3' },
        { id: 'w3d1-b8', type: 'lab', mins: 50, title: 'Lab 3.3: Access review evidence in Kali', desc: 'Compare Cedar Creek\'s Active Directory export with the HR roster using awk, sort, and comm, and find who can use the VPN without MFA.', href: 'Lab.html?l=3.3' },
        { id: 'w3d1-b9', type: 'mock', mins: 35, title: 'Mock Access Review, part 1: account findings', desc: 'Read the evidence and log the problem accounts: former employees, shared and service accounts, and excess privilege.', href: 'Mock_Access_Review.html',
          basis: 'brief + memo + evidence notes ~600 words / 140 = 4 min + scanning 6 evidence tabs 6 min + 16 key account findings x 0.8 coverage x 2.5 min (gap rate) = 32; total 42 -> part 1 set at 35 because Lab 3.3 already produced the candidate list (about 7 min saved); remaining findings and ranking finish in part 2' },
        { id: 'w3d1-b10', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Protecting data, finishing the review, and the Colonial Pipeline case',
      blocks: [
        { id: 'w3d2-b1', type: 'lesson', mins: 15, title: 'Lesson 3.4: Data types, classification, and states', desc: 'PII, PHI, financial data, and customer IP; classification levels; data at rest, in transit, and in use; DLP.', href: 'Lesson.html?l=3.4' },
        { id: 'w3d2-b2', type: 'practice', mins: 10, title: 'Data Sorter: type and state', desc: 'Classify 20 pieces of Cedar Creek data by type and by state. Aim for 90% or higher.', href: 'Practice.html?p=data-w3' },
        { id: 'w3d2-b3', type: 'lesson', mins: 15, title: 'Lesson 3.5: Data roles, privacy, retention, and destruction', desc: 'Owners, custodians, controllers, and processors; GDPR basics; sovereignty; retention, legal hold, and sanitization.', href: 'Lesson.html?l=3.5' },
        { id: 'w3d2-b4', type: 'mock', mins: 50, title: 'Mock Access Review, part 2: VPN, shares, and submit', desc: 'Answer the remote access and MFA questions, classify the nine file shares, rank your findings, write the summary for Greg, and submit.', href: 'Mock_Access_Review.html', due: 'Due end of Day 2',
          basis: '5 VPN questions: 2 tick lists x 2 min + 1 choice x 0.5 min + 2 written answers x 3 min (short answer) = 10.5; 9 shares x 0.8 coverage x 2.5 min = 18; finish and rank findings 5 min; summary 15 min; reading section text ~300 words = 2 min; total 50.5 -> 50' },
        { id: 'w3d2-b5', type: 'tool', mins: 65, title: 'MITRE ATT&CK mapping: Colonial Pipeline', desc: 'Work through the four tabs (framework, attack story, technique breakdown) and complete and submit the Student Worksheet in tab 4.', href: 'MITRE_Attack_Map.html?panel=techniques',
          basis: 'reading tabs 1-3 + worksheet text ~2,070 words / 140 = 15 min + 5 ID/name fields x 1 min + 12 how/mitigation fields x 3 min (short answer) + 3 critical-thinking answers x 3 min = 65' },
        { id: 'w3d2-b6', type: 'read', mins: 10, title: 'Source: Colonial Pipeline CEO Senate testimony (June 8, 2021)', desc: 'Read sections II, IV, and V. Note when the attack was found, when the pipeline restarted, and exactly what he says about the legacy VPN profile.', href: 'https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/Testimony-Blount-2021-06-08.pdf',
          basis: 'sections II, IV, V ~1,300 words / 140 = 9.3 min + 3 min notes = 12.3 -> 10' },
        { id: 'w3d2-b7', type: 'read', mins: 10, title: 'Source: CISA/FBI advisory AA21-131A, DarkSide ransomware', desc: 'Read the summary, technical details, and the first page of mitigations (pages 1 to 3). Find the mitigation about remote access.', href: 'https://www.cisa.gov/sites/default/files/publications/AA21-131A_Darkside_Ransomware.pdf',
          basis: 'pages 1-3 ~1,200 words / 140 = 8.6 min + 2 min notes = 10.6 -> 10' },
        { id: 'w3d2-b8', type: 'read', mins: 10, title: 'Source: CISA, Colonial Pipeline two years later (2023)', desc: 'What changed for critical infrastructure after the attack.', href: 'https://www.cisa.gov/news-events/news/attack-colonial-pipeline-what-weve-learned-what-weve-done-over-past-two-years',
          basis: '~870 words / 140 = 6.2 min + 2 min notes = 8.2 -> 10' },
        { id: 'w3d2-p1', type: 'project', mins: 50, title: 'Project 3: Colonial Pipeline (2021), Deep Dive', desc: 'Real-world case study, 50 points. Answer six questions using the sources and your MITRE worksheet. Finish the write-up at home if you need to.', href: 'Project.html?p=3', due: 'Due start of Week 4' },
        { id: 'w3d2-b9', type: 'quiz', mins: 15, title: 'Week 3 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=3' },
        { id: 'w3d2-b10', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ],
  mock: {
    id: 'w3', title: 'Mock Access Review', href: 'Mock_Access_Review.html',
    rubric: [
      ['Former and unused accounts', 'Found the accounts of people who left (Brian Kessler first) and the unused temporary, vendor, and dormant accounts, with evidence from the export and the HR roster'],
      ['Privilege and shared accounts', 'Spotted excess privilege, privilege creep, shared accounts, and service accounts used like people, with a least-privilege fix for each'],
      ['Remote access and MFA', 'Showed who can reach the network without MFA, why the CC-LEGACY profile matters, and drew the Colonial Pipeline parallel accurately'],
      ['Data classification', 'Classified each share with the right level and data type, named the owner, and flagged shares that are too open'],
      ['Recommendations and summary', 'Ranked, practical actions (escalating the Kessler activity right away) and a plain-language summary Greg Palmer could act on']
    ]
  }
};
