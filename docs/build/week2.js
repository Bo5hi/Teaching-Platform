// Week 2 plan (staging). Merge into course-data.js COURSE.weeks[1] when approved. See docs/build/BRIEF.md.
// mins come from: node docs/tools/estimate_time.js 2. Blocks the estimator cannot measure carry their arithmetic in `basis`.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[2] = {
  num: 2, title: 'Cryptography and PKI', modules: 'CertMaster Module 3',
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
};
