// Week 12 plan (staging). Merge into course-data.js when the capstone weeks go live. See docs/build/BRIEF.md.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[12] = {
  num: 12, title: 'Capstone: Mock Assessment, week 3', modules: 'Capstone · NIST CSF 2.0 · SY0-701 5.2, 5.4, 5.5', light: true,
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
};
