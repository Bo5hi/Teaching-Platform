// Course v2 map: Week > Day > numbered blocks. See docs/COURSE_V2.md.
// Block ids are permanent (student progress is stored by id). Add new ids; don't renumber old ones.
// legacy: N = this week still opens Week N of the current Student Platform.
// Weeks 2-15 were merged from docs/build/weekN.js by docs/tools/merge_staging.js.
window.COURSE = {
  start: '2027-01-11',
  weeks: [
    {
      num: 1,
      title: 'Security Foundations',
      modules: 'CertMaster Modules 1, 2, 7',
      sub: 'Your first week as a junior security analyst at Cedar Creek Industries',
      overview: 'Cedar Creek Industries has hired you as its first security analyst. This week you learn the ideas every security decision rests on (the CIA triad, AAA, and security controls), set up the Kali Linux lab you will use all course, and meet the people who might attack Cedar Creek. You finish by walking the campus and writing the company\'s first control audit, and you start your first real-world case study: the Target breach.',
      anytime: [
        { title: 'Acronyms: Week 1, set A', href: 'Practice.html?p=acro-w1a' },
        { title: 'Acronyms: Week 1, set B', href: 'Practice.html?p=acro-w1b' }
      ],
      days: [
        {
          name: 'Day 1', focus: 'Security concepts, controls, and your Kali lab',
          blocks: [
            { id: 'w1d1-b1', type: 'lesson', mins: 10, title: 'Welcome to Cedar Creek', desc: 'Meet the company, your manager, and the plan for the course.', href: 'Lesson.html?l=1.0' },
            { id: 'w1d1-b2', type: 'lesson', mins: 20, title: 'Lesson 1.1: Security fundamentals', desc: 'CIA triad, non-repudiation, AAA, and gap analysis.', href: 'Lesson.html?l=1.1' },
            { id: 'w1d1-b3', type: 'lab', mins: 70, title: 'Lab 1.1: Build your Kali Linux lab', desc: 'Install VirtualBox, import Kali, update it, and take a snapshot.', href: 'Lab.html?l=1.1' },
            { id: 'w1d1-b4', type: 'lab', mins: 45, title: 'Lab 1.2: Linux first steps on the Cedar Creek file share', desc: 'Download the Week 1 lab pack and explore it with ls, cd, cat, less, grep, and find.', href: 'Lab.html?l=1.2' },
            { id: 'w1d1-b5', type: 'lesson', mins: 15, title: 'Lesson 1.2: Security controls', desc: 'The four control categories and six control types, with Cedar Creek examples.', href: 'Lesson.html?l=1.2' },
            { id: 'w1d1-b6', type: 'practice', mins: 15, title: 'Control Sorter', desc: 'Classify 24 real controls by category and type. Aim for 90% or higher.', href: 'Practice.html?p=controls' },
            { id: 'w1d2-b1', type: 'lesson', mins: 15, title: 'Lesson 1.3: Threat actors and motivations', desc: 'Who attacks companies like Cedar Creek, what they want, and what they can do.', href: 'Lesson.html?l=1.3' },
            { id: 'w1d1-b7', type: 'mock', mins: 60, title: 'Mock Control Audit, part 1: walk the campus', desc: 'Walk areas 1 to 5 with Marcus and log every control and gap you see.', href: 'Mock_Control_Audit.html' },
            { id: 'w1d1-b9', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
          ]
        },
        {
          name: 'Day 2', focus: 'Attack surface, physical security, and the Target case',
          blocks: [
            { id: 'w1d2-b2', type: 'lesson', mins: 15, title: 'Lesson 1.4: Attack surface and threat vectors', desc: 'Every way in: email, files, removable media, unsupported software, open ports, the supply chain, and people.', href: 'Lesson.html?l=1.4' },
            { id: 'w1d2-b3', type: 'lab', mins: 40, title: 'Lab 1.3: Threat actor profiles for Cedar Creek', desc: 'Read four intelligence notes and build a profile for each threat actor.', href: 'Lab.html?l=1.3' },
            { id: 'w1d2-b4', type: 'lesson', mins: 20, title: 'Lesson 1.5: Physical security and asset management', desc: 'Fences to vestibules, badges to bollards, and why you can\'t protect what you haven\'t listed.', href: 'Lesson.html?l=1.5' },
            { id: 'w1d2-b5', type: 'lab', mins: 45, title: 'Lab 1.4: Badge log investigation', desc: 'Use grep, cut, sort, and uniq in Kali to find after-hours entries and tailgating in a week of badge data.', href: 'Lab.html?l=1.4' },
            { id: 'w1d2-b6', type: 'mock', mins: 75, title: 'Mock Control Audit, part 2: finish and submit', desc: 'Walk areas 6 to 9, build the asset inventory, write your top gaps and recommendations, and submit.', href: 'Mock_Control_Audit.html', due: 'Due end of Day 2' },
            { id: 'w1d2-p1', type: 'project', mins: 50, title: 'Project 1: Target Data Breach (2013), Deep Dive', desc: 'Your first real-world case study, 50 points. Read the case, then answer six questions. Finish the write-up at home if you need to.', href: 'Project.html?p=1', due: 'Due start of Week 2' },
            { id: 'w1d2-b7', type: 'quiz', mins: 15, title: 'Week 1 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=1' },
            { id: 'w1d2-b9', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
          ]
        }
      ],
      mock: {
        id: 'w1', title: 'Mock Control Audit', href: 'Mock_Control_Audit.html',
        rubric: [
          ['Asset inventory', 'At least 10 assets with location, owner, and classification that match what was observed'],
          ['Controls found', 'Logged the controls actually present in each area (at least 15)'],
          ['Classification', 'Correct category (technical, managerial, operational, physical) and type for each control'],
          ['Gap analysis', 'Found the real gaps, explained the risk of each, and ranked them sensibly'],
          ['Recommendations & summary', 'Practical fixes with the right control type, and a clear summary a CFO could read']
        ]
      }
    },
    {
      num: 2,
      title: 'Cryptography and PKI',
      modules: 'CertMaster Module 3',
      sub: 'Hashing, encryption, signatures, and certificates at Cedar Creek',
      overview: 'Halvorsen Pump, one of Cedar Creek\'s biggest customers, will only accept drawings that arrive encrypted, signed, and hashed. This week you learn how encryption, hashing, digital signatures, and certificates work, practice each one in Kali with openssl and GnuPG, and run Cedar Creek\'s first secure file exchange. You finish by writing the procedure the engineers will follow, and you complete the Target case study with a frameworks analysis and an executive summary.',
      anytime: [
        { title: 'Acronyms: Week 2, set A', href: 'Practice.html?p=acro-w2a' },
        { title: 'Acronyms: Week 2, set B', href: 'Practice.html?p=acro-w2b' }
      ],
      days: [
        {
          name: 'Day 1', focus: 'Encryption, hashing, and signatures',
          blocks: [
            { id: 'w2d1-b1', type: 'lesson', mins: 15, title: 'Lesson 2.1: Encryption: keys, symmetric and asymmetric', desc: 'Plaintext and ciphertext, key length, AES, RSA and ECC, key exchange, and hybrid encryption.', href: 'Lesson.html?l=2.1' },
            { id: 'w2d1-b2', type: 'lab', mins: 40, title: 'Lab 2.1: Encrypt and decrypt files with OpenSSL', desc: 'Download the Week 2 lab pack, make random keys, encrypt with AES-256, and decrypt Dee\'s offsite backup plan.', href: 'Lab.html?l=2.1' },
            { id: 'w2d1-b3', type: 'lesson', mins: 15, title: 'Lesson 2.2: Hashing, salting, and digital signatures', desc: 'Hash properties, broken algorithms, salts and key stretching, HMAC, and how signatures prove origin.', href: 'Lesson.html?l=2.2' },
            { id: 'w2d1-b4', type: 'lab', mins: 45, title: 'Lab 2.2: Hashing: verify downloads and find weak password storage', desc: 'Pick the safe firmware download with sha256sum, then crack an unsalted MD5 table and see what salt changes.', href: 'Lab.html?l=2.2' },
            { id: 'w2d1-b5', type: 'pbq', mins: 10, title: 'PBQ Lab 2: Verify a download with an MD5 hash', desc: 'Security+ practice lab: hash a file in PowerShell and compare it with the vendor\'s value. Launch it twice to see both outcomes.', href: 'SecPlus_PBQ_Labs.html?lab=2', basis: 'scenario and tasks ~150 words = 1 min + 5 commands (cd, dir, Get-FileHash, Get-Content, -eq) x 0.75 = 4 + 1 question x 0.75 = 1 + scored review ~200 words = 1.5; first run ~7.5 + second launch to see the other outcome ~3 = 10.5 -> 10' },
            { id: 'w2d1-b6', type: 'lab', mins: 40, title: 'Lab 2.3: Keys and signatures with GnuPG', desc: 'Create your key pair, confirm Tom Becker\'s key by fingerprint, catch a tampered change notice, then sign and encrypt a file.', href: 'Lab.html?l=2.3' },
            { id: 'w2d1-b7', type: 'practice', mins: 15, title: 'Crypto Tool Sorter', desc: 'Match 24 real situations to the right cryptographic tool and goal. Aim for 90% or higher.', href: 'Practice.html?p=crypto-w2' },
            { id: 'w2d1-b8', type: 'mock', mins: 50, title: 'Mock Secure File Exchange, part 1: check the package', desc: 'Verify the CCD-3318 release against Tom\'s signed manifest, compare today\'s practice with Halvorsen\'s rules, and pick the right tool for each job.', href: 'Mock_Secure_File_Exchange.html', basis: 'brief, memos and SDX-2 ~900 words / 140 = 6.5 + 7 commands x 0.75 = 5 + 4 file rows x 1.5 = 6 + manifest signature and paste 2 + 5 SDX-2 gap rows x 2.5 = 12.5 + 6 requirement rows x 2.5 = 15 + section instructions ~350 words / 140 = 2.5 = 49.5 -> 50 (every row is required, so the 80% coverage factor is not applied)' },
            { id: 'w2d1-b9', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
          ]
        },
        {
          name: 'Day 2', focus: 'Certificates, key management, and the Target case',
          blocks: [
            { id: 'w2d2-b1', type: 'lesson', mins: 15, title: 'Lesson 2.3: PKI and certificates', desc: 'What a certificate contains, CAs and the chain of trust, CSRs, revocation with CRL and OCSP, and fingerprints.', href: 'Lesson.html?l=2.3' },
            { id: 'w2d2-b2', type: 'lab', mins: 35, title: 'Lab 2.4: Read and verify certificates with OpenSSL', desc: 'Read Cedar Creek certificates, verify a chain, catch an expired and a self-signed certificate, make a CSR, and check live sites.', href: 'Lab.html?l=2.4' },
            { id: 'w2d2-b3', type: 'pbq', mins: 10, title: 'PBQ Lab 9: Manage certificates on a CA', desc: 'Security+ practice lab: approve, deny, revoke, and unrevoke certificates in the Windows Certification Authority console.', href: 'SecPlus_PBQ_Labs.html?lab=9', basis: 'scenario and 4 tasks ~180 words = 1.5 min + open the CA console (VM, Server Manager, Tools) ~1.5 + 5 certificate actions (approve 2, deny 1, revoke 1 with reason, unrevoke 1) x 1 = 5 + scored review ~200 words = 1.5 = 9.5 -> 10' },
            { id: 'w2d2-b4', type: 'lesson', mins: 15, title: 'Lesson 2.4: Key management and protecting data', desc: 'The key lifecycle, TPM and HSM, key escrow, data at rest, in transit, and in use, tokenization, masking, steganography, and blockchain.', href: 'Lesson.html?l=2.4' },
            { id: 'w2d2-b7', type: 'lab', mins: 35, title: 'Lab 2.5: Hide, mask, and chain', desc: 'Find drawing data hidden in a picnic photo, mask SSNs in an HR export, and use SHA-256 to find the altered block in a hash-chained log.', href: 'Lab.html?l=2.5' },
            { id: 'w2d2-b5', type: 'mock', mins: 60, title: 'Mock Secure File Exchange, part 2: trust, trial run, and procedure', desc: 'Decide which keys and certificates to trust, do an encrypt-and-sign trial run, then write your findings and the engineers\' procedure and submit.', href: 'Mock_Secure_File_Exchange.html', due: 'Due end of Day 2', basis: 'phone note and email ~250 words / 140 = 2 + 4 key commands x 0.75 = 3 + 2 key rows x 2.5 = 5 + 9 certificate commands x 0.75 = 7 + 3 certificate rows x 2.5 = 7.5 + 9 trial commands x 0.75 = 7 + paste 1 + findings 10 + procedure 15 (same as the Week 1 summary) + section instructions ~400 words / 140 = 3 = 60.5 -> 60' },
            { id: 'w2d2-r1', type: 'read', mins: 10, title: 'Source: Krebs on Security, "Target Hackers Broke in Via HVAC Company"', desc: 'The 2014 report that revealed how attackers got into Target\'s network through a heating and cooling vendor. Read it before the case study.', href: 'https://krebsonsecurity.com/2014/02/target-hackers-broke-in-via-hvac-company/', basis: 'article roughly 1,000-1,200 words (estimate, comments not included) / 140 = about 8 + 2 min of notes for the case study = 10' },
            { id: 'w2d2-p1', type: 'project', mins: 60, title: 'Project 2: Target Data Breach (2013), Frameworks & Writing', desc: 'Your second Target case study, 100 points: NIST CSF failures, a pentest technique, an executive summary for the board, remediation, and compliance. Finish the write-up at home if you need to.', href: 'Project.html?p=2', due: 'Due start of Week 3' },
            { id: 'w2d2-b6', type: 'quiz', mins: 15, title: 'Week 2 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=2' },
            { id: 'w2d2-b9', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
          ]
        }
      ],
      mock: {
        id: 'w2', title: 'Mock Secure File Exchange', href: 'Mock_Secure_File_Exchange.html',
        rubric: [
          ['Release integrity', 'Correct SHA-256 for every file, the changed file found, and the manifest signature checked'],
          ['Gap check against SDX-2', 'Today\'s practice compared with each Halvorsen rule, with a practical fix for every gap'],
          ['Right tool for each job', 'The correct cryptographic tool for each requirement, with a reason that shows why'],
          ['Trust decisions and trial run', 'Real key and real portal certificate accepted, fake and expired ones rejected with reasons, and the trial package encrypted to the verified key and signed'],
          ['Findings and procedure', 'Clear findings for Tom and Marcus, and a step-by-step procedure an engineer could follow every time']
        ]
      }
    },
    {
      num: 3,
      title: 'Identity, Access, and Data',
      modules: 'CertMaster Modules 4, 16',
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
            { id: 'w3d1-b2', type: 'tool', mins: 15, title: 'Academy Password Checker', desc: 'Test six practice passwords (Spring2024!, cedarcreek, Cedar#2019, a 16-character random string, a four-word passphrase, and one of your own design that you will never use). Note the strength, entropy, and crack time for each, and why Spring2024! scores better than it should.', href: 'CyberSec_Academy.html?scr=pw', basis: '6 passwords x 1.5 min (type, read 8 checks, entropy, crack time) + 3 min reading the common-mistakes panel + 3 min comparing results with the 2019 memo = 15' },
            { id: 'w3d1-b3', type: 'lab', mins: 45, title: 'Lab 3.1: Linux users, groups, passwd, and shadow', desc: 'Read /etc/passwd and /etc/shadow, create Cedar Creek users and groups, set password aging, and deprovision a leaver.', href: 'Lab.html?l=3.1' },
            { id: 'w3d1-b4', type: 'lesson', mins: 15, title: 'Lesson 3.2: Authorization and least privilege', desc: 'DAC, MAC, RBAC, rule-based, and ABAC; least privilege; privileged access management.', href: 'Lesson.html?l=3.2' },
            { id: 'w3d1-b5', type: 'practice', mins: 10, title: 'Access Control Model Sorter', desc: 'Match 20 situations to the access control model they describe. Aim for 90% or higher.', href: 'Practice.html?p=access-w3' },
            { id: 'w3d1-b6', type: 'lab', mins: 50, title: 'Lab 3.2: Permissions and sudo', desc: 'Build a least-privilege file share with chown and chmod, find a chmod 777, and give the help desk one sudo command instead of root.', href: 'Lab.html?l=3.2' },
            { id: 'w3d1-b7', type: 'lesson', mins: 15, title: 'Lesson 3.3: Identity lifecycle and single sign-on', desc: 'Directories, account types, joiners-movers-leavers, access reviews, SSO, SAML, OAuth, and OIDC.', href: 'Lesson.html?l=3.3' },
            { id: 'w3d1-b8', type: 'lab', mins: 50, title: 'Lab 3.3: Access review evidence in Kali', desc: 'Compare Cedar Creek\'s Active Directory export with the HR roster using awk, sort, and comm, and find who can use the VPN without MFA.', href: 'Lab.html?l=3.3' },
            { id: 'w3d1-b9', type: 'mock', mins: 35, title: 'Mock Access Review, part 1: account findings', desc: 'Read the evidence and log the problem accounts: former employees, shared and service accounts, and excess privilege.', href: 'Mock_Access_Review.html', basis: 'brief + memo + evidence notes ~600 words / 140 = 4 min + scanning 6 evidence tabs 6 min + 16 key account findings x 0.8 coverage x 2.5 min (gap rate) = 32; total 42 -> part 1 set at 35 because Lab 3.3 already produced the candidate list (about 7 min saved); remaining findings and ranking finish in part 2' },
            { id: 'w3d1-b10', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
          ]
        },
        {
          name: 'Day 2', focus: 'Protecting data, finishing the review, and the Colonial Pipeline case',
          blocks: [
            { id: 'w3d2-b1', type: 'lesson', mins: 15, title: 'Lesson 3.4: Data types, classification, and states', desc: 'PII, PHI, financial data, and customer IP; classification levels; data at rest, in transit, and in use; DLP.', href: 'Lesson.html?l=3.4' },
            { id: 'w3d2-b2', type: 'practice', mins: 10, title: 'Data Sorter: type and state', desc: 'Classify 20 pieces of Cedar Creek data by type and by state. Aim for 90% or higher.', href: 'Practice.html?p=data-w3' },
            { id: 'w3d2-b3', type: 'lesson', mins: 15, title: 'Lesson 3.5: Data roles, privacy, retention, and destruction', desc: 'Owners, custodians, controllers, and processors; GDPR basics; sovereignty; retention, legal hold, and sanitization.', href: 'Lesson.html?l=3.5' },
            { id: 'w3d2-b4', type: 'mock', mins: 50, title: 'Mock Access Review, part 2: VPN, shares, and submit', desc: 'Answer the remote access and MFA questions, classify the nine file shares, rank your findings, write the summary for Greg, and submit.', href: 'Mock_Access_Review.html', due: 'Due end of Day 2', basis: '5 VPN questions: 2 tick lists x 2 min + 1 choice x 0.5 min + 2 written answers x 3 min (short answer) = 10.5; 9 shares x 0.8 coverage x 2.5 min = 18; finish and rank findings 5 min; summary 15 min; reading section text ~300 words = 2 min; total 50.5 -> 50' },
            { id: 'w3d2-b5', type: 'tool', mins: 65, title: 'MITRE ATT&CK mapping: Colonial Pipeline', desc: 'Work through the four tabs (framework, attack story, technique breakdown) and complete and submit the Student Worksheet in tab 4.', href: 'MITRE_Attack_Map.html?panel=techniques', basis: 'reading tabs 1-3 + worksheet text ~2,070 words / 140 = 15 min + 5 ID/name fields x 1 min + 12 how/mitigation fields x 3 min (short answer) + 3 critical-thinking answers x 3 min = 65' },
            { id: 'w3d2-b6', type: 'read', mins: 10, title: 'Source: Colonial Pipeline CEO Senate testimony (June 8, 2021)', desc: 'Read sections II, IV, and V. Note when the attack was found, when the pipeline restarted, and exactly what he says about the legacy VPN profile.', href: 'https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/Testimony-Blount-2021-06-08.pdf', basis: 'sections II, IV, V ~1,300 words / 140 = 9.3 min + 3 min notes = 12.3 -> 10' },
            { id: 'w3d2-b7', type: 'read', mins: 10, title: 'Source: CISA/FBI advisory AA21-131A, DarkSide ransomware', desc: 'Read the summary, technical details, and the first page of mitigations (pages 1 to 3). Find the mitigation about remote access.', href: 'https://www.cisa.gov/sites/default/files/publications/AA21-131A_Darkside_Ransomware.pdf', basis: 'pages 1-3 ~1,200 words / 140 = 8.6 min + 2 min notes = 10.6 -> 10' },
            { id: 'w3d2-b8', type: 'read', mins: 10, title: 'Source: CISA, Colonial Pipeline two years later (2023)', desc: 'What changed for critical infrastructure after the attack.', href: 'https://www.cisa.gov/news-events/news/attack-colonial-pipeline-what-weve-learned-what-weve-done-over-past-two-years', basis: '~870 words / 140 = 6.2 min + 2 min notes = 8.2 -> 10' },
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
    },
    {
      num: 4,
      title: 'Secure Networks and the Mock Pentest, part 1',
      modules: 'CertMaster Modules 5, 6, 9, 11',
      sub: 'Network architecture, secure protocols, wireless and cloud, then recon and scanning',
      overview: 'Your first-day walk showed that Cedar Creek\'s plant and office networks can reach each other freely. This week you find out what crosses those networks and how to lock them down. You capture and read packets with tcpdump and Wireshark, review the FW-CORE firewall rules, learn the secure replacement for every risky protocol, and see how VPNs, 802.1X, Wi-Fi security, the cloud, and plant control systems fit in. Then you switch sides: you learn reconnaissance and Nmap, and run the first half of a mock penetration test on Hack The Box practice targets. Day 2 ends with Project 4, the Colonial Pipeline frameworks and executive summary.',
      anytime: [
        { title: 'Acronyms: Week 4, set A (protocols)', href: 'Practice.html?p=acro-w4a' },
        { title: 'Acronyms: Week 4, set B (architecture, wireless, cloud, OT)', href: 'Practice.html?p=acro-w4b' }
      ],
      days: [
        {
          name: 'Day 1', focus: 'How networks work, what crosses them, and how to lock them down',
          blocks: [
            { id: 'w4d1-b1', type: 'lesson', mins: 15, title: 'Lesson 4.1: How networks carry data', desc: 'OSI and TCP/IP layers, IP addresses and subnets, ARP and DNS, TCP versus UDP, and ports.', href: 'Lesson.html?l=4.1' },
            { id: 'w4d1-b2', type: 'lab', mins: 45, title: 'Lab 4.1: Packets on the wire with tcpdump and Wireshark', desc: 'Capture your own traffic, then find the passwords and files that cross Cedar Creek\'s plant network in cleartext.', href: 'Lab.html?l=4.1' },
            { id: 'w4d1-b3', type: 'pbq', mins: 10, title: 'PBQ Lab 5: Detect ARP poisoning with Wireshark', desc: 'A simulated capture: find the two devices that both claim to be the gateway.', href: 'SecPlus_PBQ_Labs.html?lab=5', basis: 'read scenario 1 + capture 1 + filter arp and inspect replies 4 + answer 2 questions 1 + read the score report 3 = 10' },
            { id: 'w4d1-b4', type: 'lesson', mins: 15, title: 'Lesson 4.2: Ports, protocols, and secure replacements', desc: 'The ports to know, the secure protocol for each risky one, email security (SPF, DKIM, DMARC), and DNS security.', href: 'Lesson.html?l=4.2' },
            { id: 'w4d1-b5', type: 'practice', mins: 15, title: 'Port and Protocol Sorter', desc: 'Match 23 services to their ports and say whether each is encrypted. Aim for 90% or higher.', href: 'Practice.html?p=ports-w4' },
            { id: 'w4d1-b6', type: 'lesson', mins: 15, title: 'Lesson 4.3: Secure network architecture', desc: 'Zones and segmentation, screened subnets, defense in depth, firewall types and rule order, and IDS/IPS placement.', href: 'Lesson.html?l=4.3' },
            { id: 'w4d1-b7', type: 'lab', mins: 35, title: 'Lab 4.2: Firewall rule review of FW-CORE', desc: 'Find the broad, exposed, shadowed, and stale rules in Cedar Creek\'s firewall and propose tighter ones.', href: 'Lab.html?l=4.2' },
            { id: 'w4d1-b8', type: 'pbq', mins: 10, title: 'PBQ Lab 8: Secure pfSense default user settings', desc: 'Change a firewall\'s default admin password, add a named admin, and tighten session settings.', href: 'SecPlus_PBQ_Labs.html?lab=8', basis: 'read scenario and tasks 2 + learn the console 2 + change admin password 1 + create named admin 2 + session and anti-lockout settings 2 + read the score report 1 = 10' },
            { id: 'w4d1-b9', type: 'lesson', mins: 15, title: 'Lesson 4.4: Remote access, NAC, and wireless', desc: 'VPNs and tunnels, remote administration, switch hardening, 802.1X, and WPA2/WPA3.', href: 'Lesson.html?l=4.4' },
            { id: 'w4d1-b10', type: 'pbq', mins: 10, title: 'PBQ Lab 4: Harden switch ports with port security', desc: 'Shut down unused switch ports and lock the used ones to known devices.', href: 'SecPlus_PBQ_Labs.html?lab=4', basis: 'read scenario and port table 2 + shut down 13 unused ports with Copy Settings 3 + set Lock / Classic Lock / Discard on used ports 3 + read the score report 2 = 10' },
            { id: 'w4d1-b11', type: 'pbq', mins: 10, title: 'PBQ Lab 7: Create a WPA2 wireless network', desc: 'Build a WPA2-AES staff network on a wireless controller and connect a laptop to it.', href: 'SecPlus_PBQ_Labs.html?lab=7', basis: 'read scenario and settings 2 + sign in to the controller 1 + create the WLAN (7 settings) 3 + connect Exec-Laptop 2 + read the score report 2 = 10' },
            { id: 'w4d1-b12', type: 'lesson', mins: 15, title: 'Lesson 4.6: Reconnaissance and scanning', desc: 'Rules of engagement, the five pentest phases, passive and active recon, Nmap essentials, and your Mock Pentest brief.', href: 'Lesson.html?l=4.6' },
            { id: 'w4d1-b13', type: 'lab', mins: 45, title: 'Lab 4.3: Nmap on your own lab and Cedar Creek\'s scan', desc: 'Scan services on your own Kali, then read Dee\'s authorized plant scan and find what the office can reach.', href: 'Lab.html?l=4.3' },
            { id: 'w4d1-b14', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
          ]
        },
        {
          name: 'Day 2', focus: 'Mock Pentest part 1, cloud and OT, and the Colonial Pipeline write-up',
          blocks: [
            { id: 'w4d2-b1', type: 'mock', mins: 20, title: 'Mock Pentest, setup: Hack The Box lab', desc: 'Create your free HTB account, open Starting Point, and connect with Pwnbox or your Kali VPN.', href: 'Pillar4_EthicalHacking.html?setup=1', basis: 'read the setup page (~600 words) 4 + create and verify an HTB account 6 + open Starting Point, spawn Meow, start Pwnbox or the Kali OpenVPN connection 8 + ping test 2 = 20' },
            { id: 'w4d2-b2', type: 'mock', mins: 60, title: 'Mock Pentest, phase 1: Reconnaissance', desc: 'Work HTB Meow and Fawn, then write the scope and recon sections of your engagement document.', href: 'Pillar4_EthicalHacking.html?phase=0', basis: 'read the Phase 1 page (~900 words) 6 + Meow (spawn 2, 2 Nmap commands 2, about 12 guided tasks at 1.25 min 15, flag and screenshot 3) 22 + Fawn (same pattern) 22 + scope and recon sections of the document 10 = 60' },
            { id: 'w4d2-b3', type: 'mock', mins: 65, title: 'Mock Pentest, phase 2: Scanning and enumeration', desc: 'Work HTB Dancing and Redeemer, build your scan table and findings, and submit your document link in Phases 1 and 2. Week 5 continues in the same document.', href: 'Pillar4_EthicalHacking.html?phase=1', due: 'Due end of Day 2', basis: 'read the Phase 2 page (~700 words) 5 + Dancing (spawn 2, Nmap and smbclient 3, about 8 guided tasks at 1.25 min 10, flag and screenshot 3) 18 + Redeemer (spawn 2, full-port scan wait 3, Nmap and redis-cli 3, about 11 guided tasks at 1.25 min 14, flag and screenshot 3) 25 + scan table, evidence and findings sections 15 + paste links and mark both phases complete 2 = 65' },
            { id: 'w4d2-b4', type: 'lesson', mins: 15, title: 'Lesson 4.5: Cloud, IoT, and operational technology', desc: 'Cloud models and shared responsibility, embedded and IoT devices, ICS and OT, zero trust, and deception.', href: 'Lesson.html?l=4.5' },
            { id: 'w4d2-b5', type: 'tool', mins: 10, title: 'MITRE ATT&CK reference: Colonial Pipeline', desc: 'Review the Technique Breakdown for the seven techniques mapped to the Colonial attack before you write Project 4.', href: 'MITRE_Attack_Map.html?panel=techniques', basis: '7 technique cards x 1 min + 3 min notes for Project 4 = 10' },
            { id: 'w4d2-b6', type: 'read', mins: 5, title: 'Optional re-read: Colonial CEO Senate testimony (June 8, 2021)', desc: 'You read this in Week 3. Skim the parts on the VPN account and the decision to shut down the pipeline.', href: 'https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/Testimony-Blount-2021-06-08.pdf', basis: 're-read, skim only: about 3 pages x 1.5 min = 4.5 -> 5' },
            { id: 'w4d2-p1', type: 'project', mins: 60, title: 'Project 4: Colonial Pipeline (2021), Frameworks and Executive Summary', desc: 'The Frameworks and Writing case study, 100 points. Map the failures to NIST CSF, name the pentest technique that would have found the weakness, and write an executive summary. Finish at home if you need to.', href: 'Project.html?p=4', due: 'Due start of Week 5' },
            { id: 'w4d2-b7', type: 'quiz', mins: 15, title: 'Week 4 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=4' },
            { id: 'w4d2-b8', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
          ]
        }
      ],
      mock: {
        id: 'w4', title: 'Mock Pentest, part 1: Reconnaissance and Scanning', href: 'Pillar4_EthicalHacking.html?phase=0',
        rubric: [
          ['Scope and rules of engagement', 'States the authorized targets (the four assigned HTB machines), allowed and forbidden techniques, and why written permission matters'],
          ['Reconnaissance', 'Recon notes for each target: what was learned before and during first contact, with passive and active steps labeled correctly'],
          ['Scanning and enumeration', 'Correct Nmap commands and a complete scan table (port, protocol, state, service, version) for Meow, Fawn, Dancing, and Redeemer, including the non-standard port'],
          ['Evidence', 'Saved Nmap output or screenshots, HTB username, and the flag for each machine, organized so another analyst could repeat the work'],
          ['Findings and defender view', 'Each exposed service explained in plain language with a risk rating, a specific fix, and the matching Cedar Creek exposure']
        ]
      }
    },
    {
      num: 5,
      title: 'Vulnerabilities, Attacks, and the Mock Pentest, part 2',
      modules: 'CertMaster Modules 8, 13, 14',
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
    },
    {
      num: 6,
      title: 'Human Factors',
      modules: 'Security+ objectives 1.2, 2.2, 2.4, 4.5, 4.6, 5.6',
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
            { id: 'w6d1-b2', type: 'tool', mins: 15, title: 'Phishing Spotter', desc: 'Find all 16 red flags in three practice phishing emails in the CyberSec Academy. Aim for 100%.', href: 'CyberSec_Academy.html?scr=ph', basis: '3 emails plus 16 flag explanations, about 650 words / 140 = 5 min + 16 red flags x 0.75 min = 12 min = 17 -> 15' },
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
            { id: 'w6d2-b5', type: 'tool', mins: 15, title: 'NIST CSF 2.0 tool: SolarWinds analysis', desc: 'Re-read the Function Breakdown tab and note one piece of SolarWinds evidence per function for Project 6.', href: 'NIST_CSF_Map.html', basis: 'Function Breakdown tab, 1,073 words / 140 = 8 min + 6 functions x 1 min to note evidence = 14 -> 15' },
            { id: 'w6d2-b6', type: 'read', mins: 10, title: 'Source: CISA Advisory AA20-352A', desc: 'Reference for Project 6. Read the Summary, Key Takeaways, Overview, and Initial Infection Vectors sections.', href: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a', basis: 'Summary, Key Takeaways, Overview, Initial Infection Vectors: about 1,040 words / 140 = 7.5 min + 3 min notes = 10.5 -> 10' },
            { id: 'w6d2-p1', type: 'project', mins: 60, title: 'Project 6: SolarWinds (2020), Frameworks & Writing', desc: 'NIST CSF failures, a pentest technique, an executive summary for a federal CIO, remediation, and compliance. 100 points. Finish at home if you need to.', href: 'Project.html?p=6', due: 'Due start of Week 7' },
            { id: 'w6d2-b7', type: 'quiz', mins: 15, title: 'Week 6 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=6' },
            { id: 'w6d2-b9', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
          ]
        }
      ]
    },
    {
      num: 7,
      title: 'Defensive Security and Tools',
      modules: 'Security+ SY0-701 objectives 2.3, 3.2, 4.1, 4.3, 4.4, 4.5, 4.9',
      sub: 'Firewalls, IDS/IPS, SIEM, EDR, and patching, and the Blue Team Lab',
      overview: 'Monday morning at Cedar Creek: the firewall, the IPS, and the EDR console sent dozens of alerts over the weekend and nobody read them. This week you learn how each defensive tool works (firewalls, intrusion detection and prevention, the SIEM, antivirus and EDR, and patch management), then use the weekend\'s logs to find out what really happened. You work phases 1 to 3 of the Blue Team Lab, practice SOC triage decisions in the simulator, and start Project 7, the Equifax breach, where an expired certificate and a missed patch let attackers stay hidden for 76 days.',
      anytime: [
        { title: 'Acronyms: Week 7, set A (network defense)', href: 'Practice.html?p=acro-w7a' },
        { title: 'Acronyms: Week 7, set B (monitoring, endpoints, patching)', href: 'Practice.html?p=acro-w7b' },
        { title: 'Optional: TryHackMe SOC Level 1 path (free account; start with the Intro to SIEM room)', href: 'https://tryhackme.com/path/outline/soclevel1' },
        { title: 'Reference: Snort, the open-source IDS/IPS', href: 'https://www.snort.org/' },
        { title: 'Reference: Microsoft Sentinel documentation (cloud SIEM)', href: 'https://learn.microsoft.com/en-us/azure/sentinel/' }
      ],
      days: [
        {
          name: 'Day 1', focus: 'Firewalls, intrusion detection, and the SIEM',
          blocks: [
            { id: 'w7d1-b1', type: 'lesson', mins: 20, title: 'Lesson 7.1: Firewalls and network defense', desc: 'Stateless, stateful, and next-generation firewalls; WAF and UTM; rules in both directions; screened subnets; reading a firewall log.', href: 'Lesson.html?l=7.1' },
            { id: 'w7d1-b2', type: 'lab', mins: 45, title: 'Lab 7.1: Read the weekend firewall log', desc: 'Download the Week 7 lab pack and use grep, awk, sort, and uniq on FW-CORE\'s log to separate internet noise from the one pattern an over-broad allow rule let through.', href: 'Lab.html?l=7.1' },
            { id: 'w7d1-b3', type: 'lesson', mins: 15, title: 'Lesson 7.2: Intrusion detection and prevention', desc: 'IDS vs IPS, network vs host, signature vs anomaly, true and false positives, tuning, and the Equifax certificate that blinded a sensor.', href: 'Lesson.html?l=7.2' },
            { id: 'w7d1-b4', type: 'tool', mins: 15, title: 'SOC Simulator: three alerts, seven decisions', desc: 'Work the ransomware, suspicious login, and insider threat scenarios as the on-call analyst. Replay any scenario where you lost points.', href: 'CyberSec_Academy.html?scr=soc', basis: '3 scenarios, 7 decisions x (1.4 min reading the alert, options, and feedback + 0.5 min deciding) = 13.3, + replaying one missed decision = 15' },
            { id: 'w7d1-b5', type: 'lesson', mins: 15, title: 'Lesson 7.3: SIEM and log analysis', desc: 'Log sources and Windows event IDs, the SIEM pipeline, correlation rules in plain English, and from alert to action.', href: 'Lesson.html?l=7.3' },
            { id: 'w7d1-b6', type: 'lab', mins: 50, title: 'Lab 7.2: Correlate like a SIEM', desc: 'Combine IPS, EDR, DNS, firewall, and domain controller logs into one timeline of how MKT-LT-02 was compromised.', href: 'Lab.html?l=7.2' },
            { id: 'w7d1-b7', type: 'mock', mins: 45, title: 'Blue Team Lab, phase 1: Log analysis', desc: 'Reconstruct the Target intrusion from Windows event logs: vector, pivot account, malware, exfiltration, and the SIEM alerts that would have caught it. Answer in a Google Doc and submit the link.', href: 'Pillar5_BlueTeam.html?phase=0', basis: 'Page and 8-line log about 260 words = 2 min + studying the log 3 min; 5 short answers x 3 = 15; 2 long answers (event IDs, three controls) x 10 = 20; Google Doc set-up and link 3 = 43 -> 45' },
            { id: 'w7d1-b8', type: 'lesson', mins: 15, title: 'Lesson 7.4: Endpoint security: antivirus, EDR, and hardening', desc: 'Signatures vs behavior, EDR response and policies, secure baselines, allow lists, FIM, and DLP.', href: 'Lesson.html?l=7.4' },
            { id: 'w7d1-b9', type: 'practice', mins: 15, title: 'Defensive Tool Sorter', desc: 'Match 24 actions to the tool that did them and the control type. Aim for 90% or higher.', href: 'Practice.html?p=tools-w7' },
            { id: 'w7d1-b10', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
          ]
        },
        {
          name: 'Day 2', focus: 'Threat hunting, packet analysis, patching, and the Equifax case',
          blocks: [
            { id: 'w7d2-b1', type: 'mock', mins: 55, title: 'Blue Team Lab, phase 2: Threat detection (IOCs)', desc: 'Hunt through SolarWinds file integrity, DNS, NetFlow, and registry data. List every indicator of compromise, judge which are malicious, and write a SIEM rule for the C2 traffic.', href: 'Pillar5_BlueTeam.html?phase=1', basis: 'Page, IOC card, and hunt data about 360 words = 3 min + studying the data 5 min; 4 long answers (IOC list, malicious vs suspicious, hunt plan, SIEM rule) x 10 = 40; 1 short answer x 3 = 3; Google Doc and link 3 = 54 -> 55' },
            { id: 'w7d2-b2', type: 'lesson', mins: 15, title: 'Lesson 7.5: Patch management', desc: 'The patch cycle, what to patch first, compensating controls when you cannot patch, and the WannaCry and Equifax timelines.', href: 'Lesson.html?l=7.5' },
            { id: 'w7d2-b3', type: 'lab', mins: 45, title: 'Lab 7.3: Patch management: Kali and the Cedar Creek patch report', desc: 'Snapshot, update, and verify your Kali VM; triage Cedar Creek\'s patch report with awk; look up EternalBlue and the Equifax flaw in the NVD.', href: 'Lab.html?l=7.3' },
            { id: 'w7d2-b4', type: 'mock', mins: 50, title: 'Blue Team Lab, phase 3: Packet analysis', desc: 'Read a 17-packet capture packet by packet, find where the attacker got a root shell, and write the filters that would have caught it. Submit phases 1 to 3 by the end of today.', href: 'Pillar5_BlueTeam.html?phase=2', due: 'Phases 1-3 due end of Day 2', basis: 'Page and reference tables about 420 words = 3 min + 17 packets x 0.5 min = 8.5; 2 long answers (narrative, three filters) x 10 = 20; 4 short answers x 3 = 12; Google Doc and link 3 = 46.5 -> 50' },
            { id: 'w7d2-r1', type: 'read', mins: 20, title: 'Source: GAO-18-559, Actions Taken by Equifax and Federal Agencies', desc: 'Read the Highlights page and pages 11 to 16 (how the attackers got in, how they stayed hidden, and the factors Equifax identified). Note the expired certificate and the 76 days.', href: 'https://www.gao.gov/products/gao-18-559', basis: 'Highlights 1 page + pages 11-16 (6 pages) = 7 pages x 2.5 = 17.5 -> 20' },
            { id: 'w7d2-r2', type: 'read', mins: 5, title: 'Source: NVD entry for CVE-2017-5638 (Apache Struts)', desc: 'The vulnerability at the center of the Equifax breach. Note the description, the CVSS 3.x severity, and the vector. You looked it up in Lab 7.3; cite it in Project 7.', href: 'https://nvd.nist.gov/vuln/detail/CVE-2017-5638', basis: '1 page x 2.5 + 2 min reading the CVSS vector and references = 4.5 -> 5' },
            { id: 'w7d2-p1', type: 'project', mins: 50, title: 'Project 7: Equifax Data Breach (2017), Deep Dive', desc: 'Real-world case study, 50 points. Read the case, then answer six questions. Finish the write-up at home if you need to.', href: 'Project.html?p=7', due: 'Due start of Week 8' },
            { id: 'w7d2-b5', type: 'quiz', mins: 15, title: 'Week 7 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=7' },
            { id: 'w7d2-b6', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
          ]
        }
      ],
      mock: {
        id: 'w7', title: 'Blue Team Lab, phases 1-3', href: 'Pillar5_BlueTeam.html?phase=0',
        rubric: [
          ['Log analysis', 'Phase 1: correct initial access vector, pivot account, malware, exfiltration destination, and timeline, each tied to the log line that proves it'],
          ['IOC identification', 'Phase 2: every indicator listed with its type, a sensible malicious vs suspicious split, and the persistence mechanism explained'],
          ['Packet analysis', 'Phase 3: a packet-by-packet narrative, the point of root access, the staged payload, and the lateral movement discovery'],
          ['Detection engineering', 'Event IDs, SIEM rules, and packet filters that name the data source, the condition, and the action, plus a plan to hunt across many machines'],
          ['Defensive recommendations & writing', 'Controls that each map to a specific failure, written clearly enough for a SOC lead to act on']
        ]
      }
    },
    {
      num: 8,
      title: 'Incident Response',
      modules: 'Security+ objectives 4.8, 4.9, 3.4, and 5.2 (BIA)',
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
            { id: 'w8d2-b2', type: 'mock', mins: 50, title: 'Blue Team Lab, Phase 4: Equifax incident response report', desc: 'You are the Equifax CISO on July 29, 2017. Write the response across all six steps, with owners and tools, plus a board briefing.', href: 'Pillar5_BlueTeam.html?phase=3', basis: 'about 420 words of framework and scenario at 140 wpm = 3 + 6 steps x 4 points at about 7 min per step = 42 + board briefing 5 = 50' },
            { id: 'w8d2-b3', type: 'tool', mins: 40, title: 'CTF: 12 flags across the four case studies', desc: 'Decode, search, and count your way through Target, Colonial, SolarWinds, and Equifax challenges. Scores go to the tracker.', href: 'MCCoE_CTF.html', basis: '12 flags x 3 min (read the card and artifact, solve, submit) = 36 + 4 min for the intro and hints = 40' },
            { id: 'w8d2-b4', type: 'mock', mins: 60, title: 'Blue Team Lab, Phase 5: Defensive report', desc: 'One report covering all four Blue Team scenarios: findings with severity, timeline, recommendations, and ATT&CK IDs.', href: 'Pillar5_BlueTeam.html?phase=4', due: 'Due end of Day 2', basis: 'about 380 words at 140 wpm = 3 + executive summary 10 + 8 findings with severity x 2 = 16 + timeline 8 + 8 recommendations x 1.5 = 12 + ATT&CK table 8 rows x 1.5 = 12 = 61 -> 60' },
            { id: 'w8d2-b5', type: 'read', mins: 10, title: 'Source: FTC, Equifax Data Breach Settlement', desc: 'What Equifax agreed to pay and do, and what affected people could claim. You need it for Project 8, question 5.', href: 'https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement', basis: 'about 800 words at 140 wpm = 6 + 4 min noting the settlement terms for Project 8 = 10' },
            { id: 'w8d2-b6', type: 'read', mins: 5, title: 'Source: GAO-18-559 (reference)', desc: 'The GAO summary you read in Week 7. Skim the highlights again for the NIST CSF evidence in Project 8.', href: 'https://www.gao.gov/products/gao-18-559', basis: 'highlights page re-read from Week 7: about 600 words at 140 wpm = 4 + 1 = 5' },
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
    },
    {
      num: 9,
      title: 'SOC Operations: Mock Tickets',
      modules: 'Security+ Domain 4: Security Operations (applied)',
      sub: 'A full week working the Cedar Creek ticket queue',
      light: true,
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
    },
    {
      num: 10,
      title: 'Capstone: Mock Assessment, week 1',
      modules: 'Capstone: NIST CSF 2.0 assessment (SY0-701 1.2, 5.4, 5.5)',
      sub: 'Northgate Supply Co.: the client, zero trust, and the weighted questionnaire',
      light: true,
      overview: 'For the next four weeks you work as an assessor on an MCCoE team. Your client is Northgate Supply Co., a small wholesale company whose file server was broken into in April 2026. This week you meet the client through its brief, look at its network through a zero trust lens, learn the 41-question NIST CSF 2.0 questionnaire you will score, and plan your fieldwork. You finish by handing in your fieldwork plan and interviewing the CEO, Linda Harper. Talks are short; most of the time is your own work.',
      anytime: [
        { title: 'Acronyms: Week 10', href: 'Practice.html?p=acro-w10' },
        { title: 'Optional read: Professor Messer, Zero Trust (SY0-701 1.2) notes', href: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-trust-sy0-701/' },
        { title: 'Optional video: IBM Technology, Cybersecurity Architecture: Five Principles', href: 'https://www.youtube.com/watch?v=jq_LZ1RFPfU' },
        { title: 'Optional video: Professor Messer, Zero Trust', href: 'https://www.youtube.com/watch?v=zC_Pndpg8-c' },
        { title: 'Optional video: NIST, The Cybersecurity Framework 2.0', href: 'https://www.youtube.com/watch?v=pPPiaGU12Og' },
        { title: 'Optional video: Professor Messer, Security Controls', href: 'https://www.youtube.com/watch?v=STM3EUvL7wg' },
        { title: 'Optional video: Professor Messer, Gap Analysis', href: 'https://www.youtube.com/watch?v=cuTVyyS5C7M' }
      ],
      days: [
        {
          name: 'Day 1', focus: 'Meet the client: the brief, the network, and zero trust',
          blocks: [
            { id: 'w10d1-b1', type: 'talk', mins: 10, title: 'Talk 10.1: Security architecture and zero trust', desc: 'Defense in depth, the castle-and-moat problem, and never trust, always verify.', href: 'Lesson.html?l=10.1' },
            { id: 'w10d1-b2', type: 'tool', mins: 20, title: 'Read the Northgate client brief', desc: 'The engagement letter, the company, its people and network, the April 2026 incident, and the rules for fieldwork.', href: 'materials/week9/northgate-organization-profile.html', basis: '1,852 words / 140 wpm = 13 + 5 min to note people, systems, and dates = 18 -> 20' },
            { id: 'w10d1-b3', type: 'lab', mins: 15, title: 'Lab 10.1: Client brief check', desc: 'Confirm the key facts of the engagement before you plan anything.', href: 'Lab.html?l=10.1' },
            { id: 'w10d1-b4', type: 'read', mins: 10, title: 'NIST SP 800-207, Zero Trust Architecture: Section 2', desc: 'Pages 4 to 8: the basic definition and the seven tenets of zero trust. Skip Section 3 onward.', href: 'https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf', basis: 'Legacy reading note: Section 2, pages 4-8, about 10 min' },
            { id: 'w10d1-b5', type: 'mock', mins: 20, title: 'Sketch Northgate\'s network and trace the April attack', desc: 'Follow steps 1 and 2 of Lab 10.2: draw the zones and servers, then the five numbered attack steps with the missing check at each.', href: 'Lab.html?l=10.2', basis: '11 shapes (internet, firewall, 4 zones, 4 servers, cloud email) x 1 min = 11 + 5 attack arrows with a missing-check note x 1.5 min = 8 + 2 min to photo and save = 21 -> 20' },
            { id: 'w10d1-b6', type: 'read', mins: 10, title: 'CISA Zero Trust Maturity Model v2.0: Section 5', desc: 'Pages 6 to 12, including Figure 4: the five pillars and the four maturity stages.', href: 'https://www.cisa.gov/sites/default/files/2023-04/zero_trust_maturity_model_v2_508.pdf', basis: 'Legacy reading note: Section 5, pages 6-12, about 10 min' },
            { id: 'w10d1-b7', type: 'mock', mins: 25, title: 'Sketch a zero trust target for Northgate', desc: 'Follow step 4 of Lab 10.2: redraw the network with at least six realistic zero trust changes, each with one line on why.', href: 'Lab.html?l=10.2', basis: '6 changes x 3 min to draw = 18 + 6 one-line reasons x 1 min = 6 = 24 -> 25' },
            { id: 'w10d1-b8', type: 'lab', mins: 20, title: 'Lab 10.2: Northgate\'s network through a zero trust lens', desc: 'Answer the checkpoints from your two sketches: the trace, three things to verify, and your target changes.', href: 'Lab.html?l=10.2' },
            { id: 'w10d1-b9', type: 'talk', mins: 10, title: 'Talk 10.2: NIST CSF 2.0 and the weighted questionnaire', desc: 'Six functions, 41 questions, weights, five levels, and weighted compliance.', href: 'Lesson.html?l=10.2' },
            { id: 'w10d1-b10', type: 'read', mins: 12, title: 'NIST CSF 2.0 (CSWP 29): the six functions', desc: 'Section 2 (pages 3-5) for the functions, then Appendix A, Table 1 (page 15) for the category list.', href: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf', basis: 'Legacy reading note: Section 2 (pp. 3-5) + Appendix A Table 1 (p. 15), about 12 min' },
            { id: 'w10d1-b11', type: 'lab', mins: 15, title: 'Lab 10.3: The April incident through the CSF', desc: 'Map each part of the incident to a CSF function and to the questionnaire question that tests it.', href: 'Lab.html?l=10.3' },
            { id: 'w10d1-b12', type: 'practice', mins: 15, title: 'CSF Function Sorter', desc: 'Sort 22 security practices into the six CSF functions. Aim for 90%.', href: 'Practice.html?p=csf-sort-w10' },
            { id: 'w10d1-b13', type: 'lab', mins: 20, title: 'Lab 10.4: Questionnaire workbook tour', desc: 'Save your copy of the 41-question workbook, learn its sheets, and test the Dashboard math.', href: 'Lab.html?l=10.4' },
            { id: 'w10d1-b14', type: 'mock', mins: 30, title: 'Who can answer each question?', desc: 'In your notes, list Q1 to Q41. Next to each, write which interview (INT-01 to INT-05) can answer it and what record would prove it. Tomorrow\'s interview plan is built from this list.', href: 'materials/week9/northgate-questionnaire.xlsx', basis: '41 questions, about 850 words / 140 wpm = 6 + 41 x 0.6 min (sort-item rate) to tag a person and a record = 25 = 31 -> 30' },
            { id: 'w10d1-b15', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey', basis: 'Fixed survey time' }
          ]
        },
        {
          name: 'Day 2', focus: 'Plan the fieldwork and meet the CEO',
          blocks: [
            { id: 'w10d2-b1', type: 'talk', mins: 10, title: 'Talk 10.3: Planning fieldwork: the kickoff and the interviews', desc: 'What a kickoff confirms, questions that produce evidence, and who knows what at Northgate.', href: 'Lesson.html?l=10.3' },
            { id: 'w10d2-b2', type: 'practice', mins: 10, title: 'Interview Question Sorter', desc: 'Sort 17 interview questions by the type the simulator scores. Aim for 90%.', href: 'Practice.html?p=questions-w10' },
            { id: 'w10d2-b3', type: 'lab', mins: 10, title: 'Lab 10.5: Kickoff briefing', desc: 'Write a three-minute kickoff: scope, schedule, rules of engagement, and what you need.', href: 'Lab.html?l=10.5' },
            { id: 'w10d2-b4', type: 'mock', mins: 15, title: 'Deliver your kickoff to a partner', desc: 'Your partner plays Linda Harper and asks one question. Then switch roles.', href: 'Lab.html?l=10.5', basis: '3 min your kickoff + 2 min partner question + 3 min partner kickoff + 2 min your question + 3 min to switch and note feedback = 13 -> 15' },
            { id: 'w10d2-b5', type: 'tool', mins: 20, title: 'Set up your engagement folder and notes', desc: 'Make one shared folder for the whole capstone and copy the three fieldwork worksheets into a notes document.', href: 'materials/week9/fieldwork-worksheets.html', basis: '1,230 words / 140 wpm = 9 + 10 min to create and share the folder and copy Worksheets 1-3 into a notes document = 19 -> 20' },
            { id: 'w10d2-b6', type: 'mock', mins: 55, title: 'Write your interview plan', desc: 'For each of the five people: open questions, follow-ups, and requests for proof, each with its questionnaire number. Then list the evidence you will ask for.', href: 'materials/week9/fieldwork-worksheets.html', basis: '5 interviews x about 8 questions x 1 min = 40 + 8 evidence requests x 1 min = 8 + 5 min coverage check of the weight-10 questions = 53 -> 55' },
            { id: 'w10d2-b7', type: 'mock', mins: 25, title: 'Practice interview with a partner', desc: 'Your partner plays James Chen using only the client brief. Ask five of your planned questions, including a follow-up and a request for proof. Switch roles, then fix any question that got a vague answer.', href: 'materials/week9/fieldwork-worksheets.html', basis: '5 questions and answers, about 10 min + switch roles, 10 min + 5 min to rewrite weak questions = 25' },
            { id: 'w10d2-b8', type: 'lab', mins: 15, title: 'Lab 10.6: Fieldwork plan (hand-in)', desc: 'Paste your plan and evidence requests and submit. This is the Week 10 deliverable.', href: 'Lab.html?l=10.6', due: 'Due end of Day 2' },
            { id: 'w10d2-b9', type: 'tool', mins: 35, title: 'Interview INT-01: Linda Harper, CEO', desc: 'Your first interview: 20 minutes on a live clock, one attempt. Record her answers and every evidence ID she gives you.', href: 'interview.html?p=INT-01', basis: '20 min interview clock + 5 min to reread your plan + 10 min to finish notes and log evidence IDs = 35' },
            { id: 'w10d2-b10', type: 'lab', mins: 15, title: 'Lab 10.7: Scoring dry run with a practice client', desc: 'Score five questions for a practice client and work out the weighted compliance by hand.', href: 'Lab.html?l=10.7' },
            { id: 'w10d2-b11', type: 'quiz', mins: 15, title: 'Week 10 Quiz', desc: '20 questions on zero trust, the CSF questionnaire, and fieldwork planning. 80% to pass; retakes allowed.', href: 'Quiz.html?w=10' },
            { id: 'w10d2-b12', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys', basis: 'Fixed check-in time' }
          ]
        }
      ],
      mock: {
        id: 'w10', title: 'Fieldwork Plan', href: 'Lab.html?l=10.6',
        rubric: [
          ['Client understanding', 'Scope, dates, and rules of engagement match the client brief (Labs 10.1 and 10.5)'],
          ['Architecture and zero trust', 'Traces the April path, names the missing check at each step, and turns them into things to verify (Lab 10.2)'],
          ['Question quality', 'Open questions with follow-ups and requests for proof; no leading or yes/no questions; fits the interview clock'],
          ['Coverage', 'All six functions and all seven weight-10 questions covered, each by a person who can answer it'],
          ['Evidence requests', 'At least eight specific records to request, each tied to a questionnaire number']
        ]
      }
    },
    {
      num: 11,
      title: 'Capstone: Mock Assessment, week 2',
      modules: 'Capstone · NIST CSF 2.0 · SY0-701 4.3, 5.5',
      sub: 'Fieldwork: interviews, documents, and scans',
      light: true,
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
    },
    {
      num: 12,
      title: 'Capstone: Mock Assessment, week 3',
      modules: 'Capstone · NIST CSF 2.0 · SY0-701 5.2, 5.4, 5.5',
      light: true,
      sub: 'Scoring, risk register, and POA&M',
      overview: 'This week your Northgate fieldwork becomes analysis. You finish scoring all 41 questions and check the Dashboard by hand, so you can explain weighted compliance, CMM maturity, and the hygiene rating to anyone. Then you turn your gaps into 8 to 10 Northgate risks with a heat map, build the POA&M that plans a fix for every serious gap, and group the fixes into a 30/90/180-day roadmap. You hand in the analysis at the end of Day 2 and start writing the Cybersecurity Assessment Report.',
      anytime: [
        { title: 'Acronyms: Week 12, risk and recovery', href: 'Practice.html?p=acro-w12' },
        { title: 'Video: Risk Analysis, SY0-701 5.2 (Professor Messer)', href: 'https://www.youtube.com/watch?v=Ykx7t54y-oo' },
        { title: 'Reading: Risk Analysis notes, SY0-701 5.2 (Professor Messer, about 5 min)', href: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/' },
        { title: 'Video: Compliance, SY0-701 5.4 (Professor Messer)', href: 'https://www.youtube.com/watch?v=IjJf4jLtONQ' },
        { title: 'Video: Audits and Assessments, SY0-701 5.5 (Professor Messer)', href: 'https://www.youtube.com/watch?v=uo2Yw720mv4' },
        { title: 'Video: Risky Business, risk analysis (IBM Technology)', href: 'https://www.youtube.com/watch?v=_c2L4z-v06g' }
      ],
      days: [
        {
          name: 'Day 1', focus: 'Finish the scores and turn gaps into risks',
          blocks: [
            { id: 'w12d1-b1', type: 'talk', mins: 10, title: 'Talk 12.1: Weighted compliance, CMM maturity, and hygiene', desc: 'How the Dashboard turns 41 answers into three numbers, and which gaps cost the most.', href: 'Lesson.html?l=12.1' },
            { id: 'w12d1-b2', type: 'mock', mins: 70, title: 'Score Protect to Recover (Q18 to Q41)', desc: 'Finish the questionnaire: a level, evidence IDs, and a one- or two-sentence reason for each of the last 24 questions. Score on the evidence, not on what people said.', href: 'materials/week9/northgate-questionnaire.xlsx', basis: '24 questions x 3 min (gap-row rate 2.5 + 0.5 to look up evidence IDs) = 72 -> 70' },
            { id: 'w12d1-b3', type: 'lab', mins: 20, title: 'Lab 12.1: Check the Dashboard by hand', desc: 'Work a practice team\'s numbers, then recalculate one Northgate function yourself and record your Dashboard results.', href: 'Lab.html?l=12.1' },
            { id: 'w12d1-b4', type: 'read', mins: 10, title: 'Read: NIST SP 1302, using the CSF Tiers', desc: 'A short NIST quick-start guide on CSF Tiers. Notice how Tiers differ from the CMM levels you report.', href: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1302.pdf', basis: 'legacy reading note: whole guide, about 6 pages, about 8 min + 2 min to note one difference from CMM = 10' },
            { id: 'w12d1-b5', type: 'mock', mins: 40, title: 'Gap list (Worksheet 3)', desc: 'List every question below Fully, including no-evidence questions, with its evidence IDs. Mark the high-weight gaps and write why each matters to Northgate.', href: 'materials/week9/fieldwork-worksheets.html', basis: 'about 30 questions below Fully x 1 min (copy Q#, gap, and IDs from your Why column) + 8 high-weight gaps x 1.5 min for why it matters = 42 -> 40' },
            { id: 'w12d1-b6', type: 'talk', mins: 10, title: 'Talk 12.2: From gaps to risks', desc: 'Risk statements, likelihood and impact, the risk matrix, owners, and the heat map.', href: 'Lesson.html?l=12.2' },
            { id: 'w12d1-b7', type: 'practice', mins: 10, title: 'Risk Matrix and POA&M Rule', desc: 'Rate 14 practice risks with the matrix and decide which questions need a POA&M item. Aim for 90%.', href: 'Practice.html?p=risk-w12' },
            { id: 'w12d1-b8', type: 'mock', mins: 55, title: 'Build the risk register and heat map', desc: 'On the Risk Register sheet, write Northgate\'s 8 to 10 most important risks with evidence IDs, likelihood, impact, CSF category, a Northgate owner, and status. Then check the Heat Map sheet.', href: 'materials/week9/northgate-risk-register-poam.xlsx', basis: '10 risks x 5 min (statement, IDs, likelihood, impact, category, owner) = 50 + 5 min heat map check = 55' },
            { id: 'w12d1-b9', type: 'mock', mins: 10, title: 'Find your POA&M candidates', desc: 'Get ready for tomorrow. Count your Somewhat and Not Compliant questions on the Dashboard. Then, for each Critical or High risk, list the questions behind it and flag the ones scored Mostly: those need POA&M items too.', href: 'materials/week9/northgate-questionnaire.xlsx', basis: 'about 6 Critical or High risks x 1.5 min to list the questions behind each and flag Mostly ones = 9 + 1 min to read the Dashboard response counts = 10' },
            { id: 'w12d1-b10', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey', basis: 'fixed time for the daily survey, as in Week 1 = 3' }
          ]
        },
        {
          name: 'Day 2', focus: 'The POA&M, the roadmap, and the CSA report, part 1',
          blocks: [
            { id: 'w12d2-b1', type: 'talk', mins: 10, title: 'Talk 12.3: The POA&M and the remediation roadmap', desc: 'Which gaps get a row, how to write a good item, setting priority, and the 30/90/180-day roadmap.', href: 'Lesson.html?l=12.3' },
            { id: 'w12d2-b2', type: 'mock', mins: 20, title: 'Partner check of your risk register', desc: 'Swap risk registers with a partner. Check each rating against the matrix, each owner, and each evidence ID, and leave short comments. Fix your own register from their comments.', href: 'materials/week9/northgate-risk-register-poam.xlsx', basis: 'partner register 10 rows x 1 min to check rating, owner, and IDs = 10 + 5 min comments + 5 min fixing your own = 20' },
            { id: 'w12d2-b3', type: 'mock', mins: 70, title: 'Build the POA&M', desc: 'One item for every Somewhat or Not Compliant question, plus every Mostly question behind a Critical or High risk. Each needs a priority, action, Northgate owner, milestone, and effort.', href: 'materials/week9/northgate-risk-register-poam.xlsx', basis: 'about 25 to 30 items x 2.5 min (POA&M row rate) = 63 to 75 -> 70' },
            { id: 'w12d2-b4', type: 'read', mins: 10, title: 'Read: CISA Cross-Sector Cybersecurity Performance Goals 2.0', desc: 'Skim sections 1 to 6 (Govern to Recover). Pick 2 or 3 practices per function and compare them with your POA&M actions.', href: 'https://www.cisa.gov/sites/default/files/2025-12/CPG_Report_2.0_508c.pdf', basis: 'legacy reading note: skim pages 12-31, about 10 min = 10' },
            { id: 'w12d2-b5', type: 'mock', mins: 20, title: 'Remediation roadmap', desc: 'Group your POA&M items into 0-30, 31-90, and 91-180 days, quick wins first, and write a one-line headline for each phase.', href: 'materials/week9/northgate-risk-register-poam.xlsx', basis: 'about 28 items x 0.5 min to place in a phase = 14 + 6 min for three phase headlines = 20' },
            { id: 'w12d2-b6', type: 'lab', mins: 15, title: 'Lab 12.2: Analysis hand-in', desc: 'Share your engagement folder link and report your Dashboard results, risk counts, POA&M count, and three quick wins.', href: 'Lab.html?l=12.2', due: 'Due end of Day 2' },
            { id: 'w12d2-b7', type: 'talk', mins: 10, title: 'Talk 12.4: Writing the CSA report', desc: 'The seven sections, two audiences, and how to write a finding with evidence IDs.', href: 'Lesson.html?l=12.4' },
            { id: 'w12d2-b8', type: 'mock', mins: 65, title: 'CSA report, part 1 (sections 2 to 4)', desc: 'Start the Cybersecurity Assessment Report from the template: Assessment Overview, Method, and Results by Function with evidence IDs.', href: 'materials/week9/template-assessment-report-csa.docx', basis: 'section 2 ~150 words + section 3 ~200 + section 4 six functions x ~60 words = ~710 words at 12 words/min = 59 + 5 min to copy the Dashboard table = 64 -> 65' },
            { id: 'w12d2-b9', type: 'quiz', mins: 15, title: 'Week 12 Quiz', desc: '20 questions on scoring, risk, and the POA&M. 80% to pass; retakes allowed.', href: 'Quiz.html?w=12' },
            { id: 'w12d2-b10', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys', basis: 'fixed time for the weekly check-in, as in Week 1 = 5' }
          ]
        }
      ],
      mock: {
        id: 'w12', title: 'Scoring, Risk Register, and POA&M', href: 'Lab.html?l=12.2',
        rubric: [
          ['Scored workbook and Dashboard', 'All 41 questions scored with evidence IDs and a reason; Dashboard complete with no blanks; one function checked by hand'],
          ['Risk statements', 'Eight to ten Northgate-specific risks, each naming the threat, what it would hurt, and the evidence IDs'],
          ['Ratings and heat map', 'Likelihood and impact justified by evidence, ratings follow the matrix, owners are Northgate staff, heat map matches the register'],
          ['POA&M coverage', 'One item for every Somewhat or Not Compliant question, plus every Mostly question behind a Critical or High risk'],
          ['POA&M quality and roadmap', 'Specific actions, Northgate owners, dated milestones, and effort; quick wins first; sized for a 62-person company with one IT person']
        ]
      }
    },
    {
      num: 13,
      title: 'Capstone: Mock Assessment, week 4',
      modules: 'Capstone: NIST CSF 2.0 assessment (SY0-701 5.4, 5.5)',
      sub: 'Report, executive summary, and the outbrief',
      light: true,
      overview: 'This is the last week of the Northgate Supply Co. capstone. On Day 1 you finish the Cybersecurity Assessment Report, write the Executive Summary for Northgate\'s CEO, swap it with a partner for review, and build the briefing deck. On Day 2 you check that every document uses the same numbers, rehearse with a partner who plays a tough leader, submit your final pack, and deliver a live outbrief to MCCoE staff, defending your scores with evidence. Lecture is light: three short talks, each about that day\'s work.',
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
            { id: 'w13d1-b5', type: 'mock', mins: 20, title: 'Partner review of the Executive Summary', desc: 'Swap summaries with a partner. Check: headline first, numbers match their Dashboard, no jargon, each next step closes a risk. Write three comments, then fix your own.', href: 'materials/week9/template-executive-summary.docx', basis: 'read partner\'s ~500 words at 140 wpm = 4 + 8 min to write three comments + 8 min to revise your own = 20' },
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
    },
    {
      num: 14,
      title: 'Security+ Review',
      modules: 'Security+ SY0-701, all five domains',
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
            { id: 'w14d1-b7', type: 'quiz', mins: 15, title: 'Retake: Week 1 Quiz (security foundations)', desc: 'Domain 1 review. Aim for 80% or higher; read the explanation on every miss.', href: 'Quiz.html?w=1&from=14', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm; the Week 1 quiz measures 15' },
            { id: 'w14d1-b8', type: 'quiz', mins: 15, title: 'Retake: Week 2 Quiz (cryptography and PKI)', desc: 'Domain 1 review. Aim for 80% or higher; read the explanation on every miss.', href: 'Quiz.html?w=2&from=14', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
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
            { id: 'w14d2-b5', type: 'quiz', mins: 15, title: 'Retake: Week 5 Quiz (vulnerabilities and attacks)', desc: 'Domain 2 review. Aim for 80% or higher.', href: 'Quiz.html?w=5&from=14', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
            { id: 'w14d2-b6', type: 'quiz', mins: 15, title: 'Retake: Week 6 Quiz (human factors)', desc: 'Domain 2 review. Aim for 80% or higher.', href: 'Quiz.html?w=6&from=14', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
            { id: 'w14d2-b7', type: 'talk', mins: 10, title: 'Talk 14.3: Domain 3 review, Security Architecture', desc: 'Cloud models and shared responsibility, network design, protecting data, and resilience.', href: 'Lesson.html?l=14.3' },
            { id: 'w14d2-b8', type: 'pbq', mins: 10, title: 'PBQ Lab 7: Create a WPA2 Wireless Network', desc: 'Build a WPA2-AES staff network on a wireless controller and connect a laptop to it.', href: 'SecPlus_PBQ_Labs.html?lab=7', basis: '113 words / 140 = 0.8 + 9 settings x 0.75 = 6.8 + 2 tasks x 1 + 128-word explanation / 140 = 0.9; total 10.5 -> 10' },
            { id: 'w14d2-b9', type: 'pbq', mins: 10, title: 'PBQ Lab 4: Harden Switch Ports with Port Security', desc: 'Shut down unused switch ports and lock the used ones with port security.', href: 'SecPlus_PBQ_Labs.html?lab=4', basis: '89 words / 140 = 0.6 + 6 settings x 0.75 = 4.5 + 2 tasks x 1 + 125-word explanation / 140 = 0.9; total 8.0 -> 10' },
            { id: 'w14d2-b10', type: 'pbq', mins: 25, title: 'PBQ Lab 10: Configure an OpenVPN Remote Access Server', desc: 'The longest PBQ: create a CA and server certificate, run the pfSense OpenVPN wizard, add the rules, and create VPN users.', href: 'SecPlus_PBQ_Labs.html?lab=10', basis: '163 words / 140 = 1.2 + 25 fields x 0.75 = 18.8 + 6 tasks x 1 + 209-word explanation / 140 = 1.5; total 27.5 -> 25' },
            { id: 'w14d2-b11', type: 'quiz', mins: 15, title: 'Retake: Week 4 Quiz (secure networks)', desc: 'Domain 3 review. Aim for 80% or higher.', href: 'Quiz.html?w=4&from=14', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
            { id: 'w14d2-b12', type: 'talk', mins: 10, title: 'Talk 14.4: Domain 4 review, Security Operations', desc: 'The biggest domain: hardening, vulnerability management, monitoring tools, identity, and incident response.', href: 'Lesson.html?l=14.4' },
            { id: 'w14d2-b13', type: 'pbq', mins: 10, title: 'PBQ Lab 6: Run a Vulnerability Scan', desc: 'Sign in to a scanner, scan a test server, and read the finding in the report.', href: 'SecPlus_PBQ_Labs.html?lab=6', basis: '129 words / 140 = 0.9 + 7 actions x 0.75 = 5.3 + 2 questions x 1 + 3 tasks x 1 + 134-word explanation / 140 = 1.0; total 12.2 -> 10' },
            { id: 'w14d2-b14', type: 'pbq', mins: 15, title: 'PBQ Lab 8: Secure pfSense Default Settings', desc: 'Change the default admin password, add a named admin, set a session timeout, and turn off the anti-lockout rule.', href: 'SecPlus_PBQ_Labs.html?lab=8', basis: '98 words / 140 = 0.7 + 10 settings x 0.75 = 7.5 + 4 tasks x 1 + 176-word explanation / 140 = 1.3; total 13.5 -> 15' },
            { id: 'w14d2-b15', type: 'quiz', mins: 15, title: 'Retake: Week 7 Quiz (defensive security and tools)', desc: 'Domain 4 review. Aim for 80% or higher.', href: 'Quiz.html?w=7&from=14', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
            { id: 'w14d2-b16', type: 'quiz', mins: 15, title: 'Retake: Week 8 Quiz (incident response)', desc: 'Domain 4 review. Aim for 80% or higher.', href: 'Quiz.html?w=8&from=14', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
            { id: 'w14d2-b17', type: 'talk', mins: 10, title: 'Talk 14.5: Domain 5 review, Security Program Management and Oversight', desc: 'Policies versus standards, risk math and treatments, vendor agreements, compliance, and awareness.', href: 'Lesson.html?l=14.5' },
            { id: 'w14d2-b18', type: 'quiz', mins: 15, title: 'Retake: Week 3 Quiz (identity, access, and data)', desc: 'Domain 5 and Domain 4 review: data roles, privacy, and access control. Aim for 80% or higher.', href: 'Quiz.html?w=3&from=14', basis: '20 questions x 0.75 + question text x 0.25 at 140 wpm, same as the measured Week 1 quiz = 15' },
            { id: 'w14d2-b19', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
          ]
        }
      ]
    },
    {
      num: 15,
      title: 'Security+ Mock Exam',
      modules: 'Security+ SY0-701, all five domains',
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
    }
  ]
};
