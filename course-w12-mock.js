// Week 12 capstone deliverable: Scoring, Risk Register, and POA&M (Northgate Supply Co.).
// There is no mock page this week. Students hand in through Lab 12.2 (Lab.html?l=12.2, saved to mccoe_course/{key}/labs/12.2),
// which holds their shared engagement-folder link and key numbers. The workbooks live in that folder.
// `key` holds reference facts and checks for the grader; it deliberately contains NO model scores.
// The instructor model answer (scores, risks, POA&M) is kept outside this public repo:
// Documents\mccoe-curriculum\instructor-guide\week9-10-model-pack\ (MODEL-northgate-questionnaire.xlsx, MODEL-northgate-risk-register-poam.xlsx).
window.MOCK_W12 = {
  id: 'w12',
  title: 'Scoring, Risk Register, and POA&M',
  handIn: 'Lab.html?l=12.2',
  files: ['materials/week9/northgate-questionnaire.xlsx', 'materials/week9/northgate-risk-register-poam.xlsx', 'materials/week9/fieldwork-worksheets.html'],

  brief: [
    'Finish scoring all 41 questions in the questionnaire workbook: a level, evidence IDs (EV, INT, SCAN, or "no evidence provided"), and a one- or two-sentence reason for each.',
    'Check the Dashboard: no blanks, and one function recalculated by hand (Lab 12.1).',
    'Write the gap list (fieldwork worksheets, Worksheet 3) with high-weight gaps marked.',
    'Build the Risk Register (8 to 10 Northgate-specific risks) and check the Heat Map.',
    'Build the POA&M by the rule, then group the items into a 0-30 / 31-90 / 91-180 day roadmap.',
    'Hand in through Lab 12.2 by the end of Day 2: folder link, Dashboard results, risk counts, POA&M count, and three quick wins.'
  ],

  key: {
    questionnaire: {
      questions: 41,
      byFunction: { Govern: { q: 'Q1-Q10', n: 10, weight: 79 }, Identify: { q: 'Q11-Q17', n: 7, weight: 56 }, Protect: { q: 'Q18-Q28', n: 11, weight: 94 }, Detect: { q: 'Q29-Q33', n: 5, weight: 41 }, Respond: { q: 'Q34-Q37', n: 4, weight: 33 }, Recover: { q: 'Q38-Q41', n: 4, weight: 33 } },
      totalWeight: 336,
      weight10: ['Q5', 'Q7', 'Q11', 'Q18', 'Q29', 'Q34', 'Q38'],
      formulas: 'Compliance = sum(weight x level) / sum(weight); CMM = 1 + 4 x compliance; Hygiene Basic < 35%, Intermediate 35-69%, Good 70%+. Blank = 0%.'
    },
    lab121: { functionA: { weighted: 1750, weight: 28, compliance: '62.5%', cmm: 3.5, hygiene: 'Intermediate' }, functionB: { compliance: '43.75%', cmm: 2.75 }, overall: '53.8%', wrongAverage: '53.13%' },
    matrix: { Likely: ['Medium', 'High', 'High', 'Critical'], Possible: ['Low', 'Medium', 'Medium', 'High'], Unlikely: ['Low', 'Low', 'Medium', 'Medium'], columns: ['Minor', 'Moderate', 'Major', 'Severe'] },
    poamRule: 'One item for every Somewhat or Not Compliant question, plus every Mostly question that drives a Critical or High risk. Almost and Fully need no item. Check: POA&M rows >= Dashboard count of Somewhat + Not Compliant.',
    evidenceToLookFor: [
      'Account takeover: EV-04 (38 of 62 enrolled in MFA, 24 not), EV-05 (vendor VPN users bbws-dev and oakline without MFA), EV-10, the April incident.',
      'Unmanaged server: ng-legacy01 and the NAS at 10.20.1.61 are missing from EV-03 but present in SCAN-02; SCAN-03 has 2 Critical findings, both on ng-legacy01; EV-05 rule 45 lets the warehouse network reach all servers on any port with logging off.',
      'Backups and recovery: EV-09 (ng-files01 offsite copy disabled since Feb 2025, repository mounted read/write, last restore test June 2025, ng-legacy01 not backed up) against EV-01 (quarterly restore tests).',
      'Detection: EV-07 (no alerts for new accounts, sudo changes, or cron jobs, the April attacker steps; alerts go to one person; an AL-01 alert never acknowledged).',
      'Response: EV-08 (IR plan v0.3 draft, not approved, contacts TBD, never tested).',
      'Govern: EV-01 review overdue since March 2023; EV-02 last reviewed before the incident; EV-19 and EV-20 if earned (authority, budget, risk appetite).'
    ],
    ownersAllowed: 'Northgate staff only (for example James Chen, Linda Harper, Alicia Brown, Helen Ortiz, Tunde Okafor). Never the assessor or MCCoE.',
    milestones: 'Dated from the scenario: report due 25 September 2026, so 0-30 days ends about late October 2026, 31-90 days late December 2026, 91-180 days late March 2027.'
  },

  rubricNotes: [
    'Scored workbook and Dashboard (5): all 41 questions answered (Dashboard Answered = Questions in every row), every row has evidence IDs or "no evidence provided" and a reason, levels follow the evidence rather than what people said (MFA, IR plan, and leaver contradictions scored on EV-04, EV-08, EV-14), and the Lab 12.1 hand check matches the Dashboard. Compare the overall result with the model pack; a few points of difference is fine if the reasons are evidence-based. 3 = one or two blanks or several rows with no IDs; 1 = many unsupported scores.',
    'Risk statements (5): 8 to 10 risks, each naming a threat and what it would hurt at Northgate, with evidence IDs, and grouping related gaps (for example several identity gaps into one account-takeover risk). Full marks covers account takeover, the unmanaged ng-legacy01/NAS, backups and recovery, detection, and response/governance. Generic risks such as "phishing" with no Northgate evidence lose marks.',
    'Ratings and heat map (5): likelihood and impact are justified by evidence (exposure, Critical findings, sensitive data, a repeat of April), every rating matches the matrix, owners are named Northgate staff (never the assessor), CSF categories are filled in, and the heat map counts equal the number of risks. Penalize registers where everything is Critical or nothing is above Medium.',
    'POA&M coverage (5): at least one item for every Somewhat and Not Compliant question, plus every Mostly question behind a Critical or High risk (check the list in Lab 12.2 checkpoint 5 against the register). The model pack has 29 items. The most common miss is a Mostly question behind the MFA or ng-legacy01 risk; leaving MFA off the plan is a 2 at most.',
    'POA&M quality and roadmap (5): actions are specific and testable, owners are Northgate people, milestones are dates, effort is set, and priority follows risk, weight, and effort. Quick wins (cheap, high-risk fixes, especially anything the insurer asks about before the November renewal) sit in 0-30 days. Fixes fit a 62-person company with one IT person and a small budget; no 24/7 SOC or large new platforms in the first month.'
  ]
};
