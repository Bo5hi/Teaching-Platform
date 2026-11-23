// Week 10 deliverable: Fieldwork Plan for the Northgate Supply Co. capstone.
// Students hand it in through Lab 10.6 (Lab.html saves to mccoe_course/{key}/labs/10.6). There is no separate mock page.
// `key` lists reference facts the grader can check against (from materials/week9/). `rubricNotes` says what full marks looks like.
// Model answers for the whole capstone are in the instructor model pack, kept outside this public repo
// (Documents\mccoe-curriculum\instructor-guide\week9-10-model-pack\).
window.MOCK_W10 = {
  id: 'w10',
  title: 'Fieldwork Plan',
  source: { labs: ['10.2', '10.5', '10.6'], path: 'mccoe_course/{key}/labs/10.6' },
  brief: [
    'Northgate Supply Co. (fictional) hired the MCCoE team after an April 2026 break-in on its file server. Fieldwork is 8 to 12 September 2026, the report is due 25 September, and the outbrief follows the report.',
    'Before fieldwork, each student hands in a plan: questions for each of the five interviews (INT-01 to INT-05), mapped to questionnaire numbers; a list of specific evidence to request; and coverage of the seven weight-10 questions.',
    'Interview time is fixed: 30 minutes with James Chen, 20 with each of the others, one attempt each.'
  ],
  key: {
    interviews: [
      { id: 'INT-01', who: 'Linda Harper, CEO', mins: 20, topics: 'ownership of security, risk appetite, board reporting, IR plan, outside contacts and notification, continuity', covers: 'Q1 Q2 Q4 Q5 Q6 Q34 Q35 Q36 Q40 Q41' },
      { id: 'INT-02', who: 'James Chen, IT Manager', mins: 30, topics: 'role, assets and software, accounts/MFA/remote access, patching and endpoint protection, logging and alerts, incident response and April, backups', covers: 'most Govern, Identify, Protect, Detect, Respond, and Recover questions' },
      { id: 'INT-03', who: 'Alicia Brown, HR Manager', mins: 20, topics: 'policy acknowledgements, joiners, leavers, HR data, training', covers: 'Q7 Q8 Q9 Q14 Q18 Q20 Q23' },
      { id: 'INT-04', who: 'Helen Ortiz, Finance Manager', mins: 20, topics: 'finance data, payments and bank changes, MFA, April communication, insurance, vendor contracts', covers: 'Q2 Q9 Q10 Q14 Q18 Q36 Q41' },
      { id: 'INT-05', who: 'Tunde Okafor, Warehouse Manager', mins: 20, topics: 'shared logins, warehouse software and its vendor, MFA for warehouse staff, downtime, outside companies on the network, leavers and training', covers: 'Q9 Q12 Q18 Q20 Q21 Q22 Q23 Q28 Q40' }
    ],
    weight10: ['Q5 qualified person with authority and budget', 'Q7 written, approved, shared policies', 'Q11 hardware inventory', 'Q18 MFA for all accounts', 'Q29 central logging', 'Q34 approved IR plan', 'Q38 regular backups'],
    goodEvidenceRequests: ['Information security policy with approval date (Q7, Q8)', 'Risk register with review dates (Q3)', 'Asset inventory (Q11)', 'MFA enrollment report (Q18)', 'Firewall configuration and VPN user list (Q19, Q28)', 'Training log (Q23)', 'Logging and alert configuration (Q29, Q30)', 'Incident response plan (Q34)', 'Backup job report and restore test records (Q38, Q39)', 'Vendor access list (Q9)', 'Post-incident review (Q17)', 'Leaver checklist or log (Q20)', 'Insurance policy summary (Q2, Q36)'],
    aprilPath: ['Phished password, no MFA (Q18)', 'SSH reachable from the internet through an old port-forward, policy said VPN only (Q19, Q28)', 'Badly configured setting gave full admin rights (Q22, Q27)', 'Hidden account and scheduled task raised no alert (Q30)', 'Finance folder copied out, seen the next morning (Q29, Q30)'],
    autoChecked: {
      '10.1': 'c1 62; c2 ng-files01; c3 SSH through an old port-forward; c4 November; c5 10.20.1.0/24; c6 logging in yourself is not allowed',
      '10.2': 'c1 server network; c2 VPN; c3 ng-legacy01; c4 least privilege; c5 assume breach',
      '10.3': 'c1 Protect; c2 Q19; c3 Detect; c4 Q30; c5 Respond; c6 Q36; c7 Identify',
      '10.4': 'c1 10; c2 4; c3 94; c4 336; c5 7; c6 Q2; c7 column I; c8 56.1 (test answers); c9 yes',
      '10.5': 'c5 MCCoE team with Linda Harper\'s written permission',
      '10.6': 'c8 the leading MFA question',
      '10.7': 'A Fully, B Not Compliant, C Mostly, D Somewhat, E Almost; total weight 43; weighted score 2100; 48.8%'
    }
  },
  rubricNotes: [
    'Client understanding (5): Lab 10.1 auto-checks all correct, and the kickoff (Lab 10.5) states the real scope (six CSF functions; office, warehouse, servers, cloud email, connecting vendors), the real dates (fieldwork 8-12 Sep 2026, report 25 Sep), and rules of engagement that match the brief (MCCoE runs scans with Linda\'s written permission; no logging in; confidential notes). 3 = minor slips; 1 = scope or rules wrong.',
    'Architecture and zero trust (5): Lab 10.2 trace names the missing check at each of the five April steps (MFA, VPN-only access, least privilege, alerting on new accounts and scheduled tasks, faster detection of outbound transfers) and turns them into at least three specific things to verify, each with a person and an evidence type. 3 = generic zero trust talk without Northgate specifics; 1 = no trace.',
    'Question quality (5): each interview starts open, uses follow-ups and requests for proof, and ends with a closing question; no leading or yes/no questions (checkpoint 8 correct); the number of questions fits the clock (about 6-10 for 20 minutes, 10-14 for James). 3 = mostly open but few proof requests; 1 = mostly yes/no or too broad.',
    'Coverage (5): all six functions appear; each weight-10 question (Q5, Q7, Q11, Q18, Q29, Q34, Q38) is assigned to a person who can answer it (see key.interviews.covers); questions go to the right person (leavers to Alicia and James, insurance to Helen or Linda, warehouse logins to Tunde). 3 = one or two weight-10 questions or a function missing; 1 = plan covers only IT topics.',
    'Evidence requests (5): at least eight named records, each tied to a Q number (see key.goodEvidenceRequests for examples). Specific beats general: "MFA enrollment report (Q18)" earns credit, "security documents" does not. 3 = fewer than eight or not tied to Q numbers; 1 = no list.'
  ]
};
