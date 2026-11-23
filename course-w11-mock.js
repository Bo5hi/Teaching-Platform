// Week 11 mock deliverable: the Northgate Fieldwork Package (capstone, week 2).
// Students submit a shared-folder link on the Student Platform Week 9 Submit tab (mccoe_progress deliverableLink).
// Interviews save themselves to mccoe_interviews; labs 11.1 and 11.2 save to mccoe_course.
// `key` holds reference facts from the evidence files (not model scores). The full instructor model pack is kept
// outside this repo: Documents\mccoe-curriculum\instructor-guide\week9-10-model-pack\ (do not copy its scores here).
window.MOCK_W11 = {
  id: 'w11',
  title: 'Fieldwork Package',
  href: 'MCCoE_Student_Platform.html?week=9',
  brief: [
    "By the end of Week 11 Day 2, put your fieldwork package in your shared engagement folder and paste the folder link on the Student Platform Week 9 Submit tab.",
    "The package has five parts: interview notes for INT-01 to INT-05 (Worksheet 1); an evidence log (every EV and SCAN item you used, its date, whether it is approved and current, what it proves, and the Q#s it supports); scan notes (Critical and High findings, and hosts missing from the inventory); the contradictions log (Worksheet 2); and northgate-questionnaire.xlsx with Govern and Identify (Q1-Q17) scored.",
    "Every claim cites an ID. Write 'no evidence provided' where you asked and got nothing. Protect to Recover are scored in Week 12."
  ],
  parts: [
    'Interview notes, INT-01 to INT-05',
    'Evidence log, EV and SCAN items',
    'Scan notes',
    'Contradictions log',
    'Questionnaire with Q1-Q17 scored'
  ],
  key: {
    interviews: { 'INT-01': 'Linda Harper, CEO, 20 min (done in Week 10)', 'INT-02': 'James Chen, IT Manager, 30 min', 'INT-03': 'Alicia Brown, HR Manager, 20 min', 'INT-04': 'Helen Ortiz, Finance Manager, 20 min', 'INT-05': 'Tunde Okafor, Warehouse Manager, 20 min' },
    evidenceGivenBy: { 'INT-01': ['EV-19', 'EV-20'], 'INT-02': ['EV-01', 'EV-02', 'EV-03', 'EV-04', 'EV-05', 'EV-07', 'EV-08', 'EV-09', 'EV-10', 'EV-11', 'EV-12', 'EV-16', 'EV-17', 'EV-18'], 'INT-03': ['EV-06', 'EV-13', 'EV-14'], 'INT-04': ['EV-15', 'EV-21'], 'INT-05': [] },
    coreFacts: [
      'EV-01: policy v1.0 approved 14 Mar 2022; next review was due 14 Mar 2023 (overdue); MFA only "should be used where available"; restore tests promised quarterly',
      'EV-02: 9 risks, all last reviewed 2025-11-18 (before April); R-06 remote access from the internet marked Closed',
      'EV-03: 52 rows; ng-legacy01 and the NAS at 10.20.1.61 are not listed',
      'EV-04: 62 accounts, 38 enrolled, 24 not enrolled (22 Warehouse, 2 Sales)',
      'EV-05: old SSH forward (ext 2222 to 10.20.1.20:22) deleted 2026-04-15; rule 45 wh-temp-any: warehouse to all servers, service ALL, no logging, TEMP since 2023; vendor VPN users bbws-dev and oakline without MFA',
      'EV-06: 59 of 62 completed training; July phishing test: 4 clicked, 27 reported',
      'EV-07: no alerts for new accounts, admin-group changes, or cron jobs; alerts go to James only; 90-day retention; 6 Sep AL-01 alert never acknowledged',
      'EV-08: IR plan v0.3 draft, not approved; role backups TBD; no test record',
      'EV-09: ng-files01 offsite copy disabled since 2025-02-03; repository mounted read/write; last restore test 2025-06-12; ng-legacy01 has no backup job',
      'EV-10: 3 of 5 vendor entries without MFA; Oakline contract ended 2025-10-31 but account active; Bluebird login shared by 3 developers',
      'EV-11: actions 6 (alerts), 9 (risk register), 10 (retire ng-legacy01) still Open'
    ],
    scanFacts: [
      'SCAN-01: only 443/tcp, 500/udp, 4500/udp open from the internet; 22 and 2222 filtered',
      'SCAN-02: 44 hosts answered; ng-legacy01 (10.20.1.50: 21, 22, 80, 3306 open) and 10.20.1.61 (NAS) are not in EV-03',
      'SCAN-03: 18 findings = 2 Critical, 4 High, 7 Medium, 5 Low; 9 on ng-legacy01; highest CVSS 10.0'
    ],
    contradictionsToLookFor: 'The model pack plants three: an IT claim about MFA vs EV-04; a leadership claim about the IR plan vs EV-08; an HR claim about disabling leavers vs EV-14. Credit any other well-evidenced contradiction too.',
    labAnswers: { '11.1': { c1: 24, c2: 22, c3: 2023, c4: '2025-11-18', c5: 'wh-temp-any', c6: 3, c7: '2025-06-12', c8: 'ng-legacy01', c9: 1, c10: 1 }, '11.2': { c1: 3, c2: 'filtered', c3: 18, c4: 2, c5: 4, c6: 'ng-legacy01', c7: 10, c8: '10.20.1.61', c9: 4, c10: 1 } }
  },
  rubricNotes: [
    'Interview notes (5 pts): all five interviews are recorded (check the tracker interview panel, mccoe_interviews) with person, role, date, the questions asked, answers in the person\'s own words with no opinion mixed in, and every evidence ID received. Full marks: open questions and requests for proof dominate the transcripts, and the notes say "none" where no evidence was given. Deduct for missing interviews or notes that paraphrase into judgments.',
    'Evidence log (5 pts): every EV item used (all of EV-01 to EV-11, plus each earned item from EV-12 to EV-21) has its date, approved or not, current or not, what it proves, and the Q#s it supports. Full marks: the log catches that EV-01 is overdue for review, EV-08 is an unapproved draft, and EV-02 predates April. Deduct for citing an EV-12 to EV-21 item that no interview gave the student.',
    'Scan analysis (5 pts): the Critical and High SCAN-03 findings are listed with host, CVSS, and a plain reason; SCAN-01 is read correctly (only HTTPS and the VPN answer; SSH is filtered); and SCAN-02 is compared with EV-03 to find ng-legacy01 and the NAS at 10.20.1.61 missing from the inventory. Full marks needs that inventory comparison.',
    'Contradictions log (5 pts): each entry has the claim with its INT ID, the record with its EV or SCAN ID and numbers or dates, and neutral wording. Full marks: at least the three planted contradictions (see key), each followed by scoring on the evidence. Deduct for blame language or contradictions with no IDs.',
    'First scores (5 pts): Q1-Q17 each have a response level, evidence IDs (or "no evidence provided"), and a one- or two-sentence reason in column J. Levels follow the evidence, not the interviews. Compare with the model questionnaire in the instructor model pack; a level one step away with a sound, evidenced reason is acceptable.'
  ]
};
