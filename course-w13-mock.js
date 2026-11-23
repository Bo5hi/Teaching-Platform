// Week 13 mock project: Northgate assessment report and live outbrief (capstone, part 4 of 4).
// There is no mock page. Students submit a shared-folder link on the Student Platform Week 10 Submit tab
// (MCCoE_Student_Platform.html?week=10, mccoe_progress/{id}/progress/10/deliverableLink) and present live.
// `key` lists what a complete pack contains; `rubricNotes` tell the grader what full marks looks like.
// The instructor model pack (model numbers, model report and deck) is kept OUTSIDE this public repo:
// Documents\mccoe-curriculum\instructor-guide\week9-10-model-pack\ and tools\northgate_model_pack.json.
window.MOCK_W13 = {
  id: 'w13',
  title: 'Assessment Report and Outbrief',
  submit: { href: 'MCCoE_Student_Platform.html?week=10', where: 'Student Platform, Week 10, Submit tab: paste the link to your shared engagement folder' },
  brief: [
    "This is the last part of the Northgate Supply Co. capstone. You turn your scored workbook, risk register, and POA&M into the reports MCCoE gives a real client, then present them in a live outbrief to MCCoE staff playing Northgate's leaders.",
    "Your final pack lives in your shared engagement folder: the questionnaire workbook, the risk register and POA&M workbook, the Executive Summary, the CSA report, and the briefing deck. Start the written parts from the templates in materials/week9/.",
    "Submit the folder link on the Student Platform Week 10 Submit tab before your outbrief. Your instructor marks the outbrief as delivered after you present.",
    "All numbers must match across every document, and every finding must point to evidence IDs (EV-, INT-, SCAN-)."
  ],
  key: {
    pack: [
      'Questionnaire workbook: all 41 levels, evidence IDs, reasons; Dashboard complete',
      'Risk register and heat map: 8 to 10 Northgate-specific risks with evidence IDs, likelihood, impact, matrix rating, CSF category, client owner',
      'POA&M: one item per Somewhat or Not Compliant question, plus Mostly questions behind Critical or High risks; priority, action, owner, milestone, effort',
      'Executive Summary (template-executive-summary.docx): 1 to 2 pages',
      'CSA report (template-assessment-report-csa.docx): sections 1 to 7 plus Appendix A',
      'Briefing deck (template-briefing-deck.pptx): about 10 slides with speaker notes'
    ],
    execSummary: ['Overall Posture: 4-6 plain sentences with overall %, CMM, hygiene, biggest strength and weakness, a simple comparison, and a recommended target', 'Function table copied from the Dashboard', 'Key Strengths: 3-4 with evidence', 'Priority Risks: top 5 with one line of evidence and a rating', 'Recommended Next Steps: 5, most important first, each closing a priority risk', 'Note on Scope'],
    csaSections: ['1 Executive Summary (half page)', '2 Assessment Overview (CSF 2.0 functions, CMM 1-5)', '3 Method (41-question weighted questionnaire, five levels, interviews, document review, scans, evidence wins)', '4 Results by Function (table + 2-3 sentences each with evidence IDs)', '5 Risk Assessment (register or top risks + heat map; two or three most serious explained)', '6 Remediation Roadmap (0-30, 31-90, 91-180 days)', '7 Conclusion (3-4 sentences)', 'Appendix A questionnaire results'],
    deckSlides: ['Title', 'Purpose and agenda', 'Scope and method', 'Overall posture', 'Maturity by function', 'Strengths and priority gaps', 'Critical scan findings', 'Top risks and heat map', 'Remediation roadmap', 'Next steps and questions'],
    numbersToMatch: ['Overall compliance %', 'Overall CMM', 'Overall hygiene rating', 'Six function percentages', 'Count of risks by rating', 'Top risk titles and ratings', 'Roadmap actions by phase'],
    likelyChallenges: ['A leader repeats an interview claim that the evidence contradicts (the contradictions log predicts these)', 'The IT Manager says a technical score is too harsh', 'The CEO asks why the score is low after the April fixes, or what to fund first'],
    lessonLabs: ['Lab 13.1 (number check and Q&A prep) and Lab 13.2 (outbrief reflection) are saved in mccoe_course/{key}/labs/13.1 and 13.2']
  },
  rubricNotes: [
    "Executive Summary (5): one to two pages for a non-technical CEO. Leads with overall compliance, CMM, and hygiene, names the biggest strength and weakness, uses a comparison a CEO could repeat, gives the top five risks in business terms (orders, money, insurance, vendor trust), and five right-sized next steps that each close a priority risk; ends with an honest scope note. Lose marks for jargon, missing numbers, generic risks, or steps sized for a large company (a 24/7 SOC in month one).",
    "CSA report (5): all seven sections plus Appendix A. The method explains the weighted questionnaire, the five levels, the three evidence sources, and that evidence wins over interviews. Results by function give two or three sentences each with evidence IDs. The risk section includes the heat map and explains the two or three most serious risks. The roadmap groups POA&M actions into 0-30, 31-90, and 91-180 days with quick, cheap, high-impact fixes first. Strong reports connect findings to the April 2026 incident and name the Govern problem, not only technical fixes.",
    "Consistency (5): the overall %, CMM, hygiene, function scores, risk titles and ratings, and roadmap actions are identical in the workbook Dashboard, Executive Summary, CSA, and deck, rounded the same way. Check Lab 13.1 checkpoints c3 and c4. One mismatch costs a point; numbers that change between documents, or that differ from the Dashboard, cost more. Compare the totals with the model pack (kept outside the repo) only as a sense check; a different total is fine if the student's own evidence supports it.",
    "Briefing deck (5): about 8 to 12 slides in the template order, headline on the Overall Posture slide, Dashboard table or chart, heat map picture, Critical and High scan findings explained in plain words, a three-phase roadmap, and a final slide asking leaders for specific decisions. Every number is labeled. Words to say are in speaker notes, not paragraphs on slides. Findings describe practices, never named people.",
    "Live outbrief (5): finishes in 10 to 15 minutes, opens with the headline, explains each number shown, and handles challenges calmly by naming evidence IDs and explaining the level. New evidence is noted for later review, not accepted or rejected on the spot; no score changes just to please the room; 'I don't know, here is how I will find out' is full credit. No blame of individuals. Lab 13.2 reflection shows honest self-assessment."
  ]
};
