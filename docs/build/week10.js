// Week 10 staging plan (capstone week 1 of 4: Northgate Supply Co.). Merge into course-data.js when approved.
// Minutes: measured blocks come from `node docs/tools/estimate_time.js 10`; the others show their arithmetic in `basis`.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[10] = {
  num: 10, title: 'Capstone: Mock Assessment, week 1', modules: 'Capstone: NIST CSF 2.0 assessment (SY0-701 1.2, 5.4, 5.5)',
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
};
