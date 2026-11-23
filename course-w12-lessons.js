// Week 12 talks + quiz (Capstone, week 3: scoring, risk register, POA&M). Shapes: docs/COURSE_V2.md
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['12.1'] = {
  id: '12.1', week: 12, title: 'Weighted compliance, CMM maturity, and hygiene', mins: 10, module: 'Capstone talk · SY0-701 5.4, 5.5',
  intro: "Last week you scored Govern and Identify. Today you score the other 24 questions, and the Dashboard sheet turns all 41 answers into three numbers that Northgate's leaders will remember: a compliance percentage, a maturity score, and a hygiene rating. The workbook does the math, but you have to check it and explain it out loud at the outbrief. This talk shows exactly how each number is made.",
  sections: [
    {
      title: 'From one answer to a weighted score',
      body: [
        "Every question gets a level: Fully (100%), Almost (75%), Mostly (50%), Somewhat (25%), or Not Compliant (0%). The workbook looks up that percentage in the Score column, then multiplies it by the question's weight in the Weighted Score column. A <strong>weight</strong> is a number that shows how important a question is. A weight-10 question counts twice as much as a weight-5 question.",
        "<strong>Weighted compliance</strong> is the sum of (weight x level) divided by the sum of the weights. Here is a practice example with three questions (these are not Northgate's answers). Question A has weight 10 and scores Fully. Question B has weight 6 and scores Mostly. Question C has weight 4 and scores Not Compliant. Weight x level gives 1,000 + 300 + 0 = 1,300. The weights add up to 10 + 6 + 4 = 20. So 1,300 / 20 = 65%."
      ],
      figure: { id: 'w12-scoring-chain', caption: 'One chain turns 41 answers into three numbers. The practice example (65%) runs through every step.' }
    },
    {
      title: 'Function scores and the overall score',
      body: [
        "The Dashboard does this once for each of the six CSF functions and once for all 41 questions together. The overall score is the total weighted score divided by the total weight of all 41 questions, which is 336.",
        "Do not average the six function percentages. The functions carry very different weight, so an average would let a small function count as much as a big one. Protect carries 94 points of weight; Respond and Recover carry 33 each.",
        "Unanswered questions count as 0%. Before you trust the Dashboard, check its Answered column: it must match the Questions column in every row."
      ],
      table: {
        head: ['Function', 'Questions', 'Total weight'],
        rows: [['Govern', 'Q1-Q10 (10)', '79'], ['Identify', 'Q11-Q17 (7)', '56'], ['Protect', 'Q18-Q28 (11)', '94'], ['Detect', 'Q29-Q33 (5)', '41'], ['Respond', 'Q34-Q37 (4)', '33'], ['Recover', 'Q38-Q41 (4)', '33'], ['All 41', '', '336']]
      }
    },
    {
      title: 'Maturity: the Capability Maturity Model',
      body: [
        "Compliance says how much of the practice is in place. <strong>Maturity</strong> says how reliable and repeatable the security program is. MCCoE uses the <strong>Capability Maturity Model (CMM)</strong>, a five-level scale. The conversion is CMM = 1 + 4 x compliance, with compliance written as a decimal. 0% gives 1.0, 50% gives 3.0, and 100% gives 5.0. The practice example: 1 + 4 x 0.65 = 3.6, between Defined and Managed."
      ],
      table: {
        head: ['Level', 'Name', 'What it looks like'],
        rows: [['1', 'Initial', 'Ad hoc. Depends on one person remembering.'], ['2', 'Repeatable', 'Some habits repeat, but little is written down.'], ['3', 'Defined', 'Standard, documented processes that everyone follows.'], ['4', 'Managed', 'Processes are measured and monitored.'], ['5', 'Optimized', 'Processes are always being improved.']]
      },
      callout: { kind: 'real', title: 'Where CMM comes from', text: "The Capability Maturity Model came from Carnegie Mellon University's Software Engineering Institute (SEI), first for software development. It spread because leaders understand a five-step ladder quickly. NIST CSF 2.0 has its own scale called Tiers (Partial, Risk Informed, Repeatable, Adaptive). Tiers are a different measure, so do not mix Tier names with CMM levels in your report." }
    },
    {
      title: 'Hygiene: the label leaders remember',
      body: [
        "The <strong>hygiene rating</strong> is a plain label from the compliance score: Basic below 35%, Intermediate from 35% to 69%, and Good at 70% and up. The practice example (65%) is Intermediate.",
        "Watch the edges. The workbook uses the exact value, not the rounded one. A function at 69.6% shows as 70% if you round to whole numbers, but it is still Intermediate. Report one decimal place (for example 69.6%) and use that same number in every document."
      ]
    },
    {
      title: 'Which gaps cost the most',
      body: [
        "Every question scored below Fully is a <strong>gap</strong>: a practice that is missing, weak, or not proven. A gap's cost is its weight x the points it lost. A weight-10 question at Somewhat loses 10 x 75 = 750 points. A weight-5 question at Not Compliant loses 5 x 100 = 500. The first is the bigger drag on the score, even though its level looks better.",
        "That is why you mark the high-weight gaps on your gap list today. They usually cover the most important practices, and they become the raw material for the risk register this afternoon."
      ],
      callout: { kind: 'tip', title: 'At Northgate', text: "After you finish Q18 to Q41, pick one function and recalculate it by hand in Lab 12.1. If your number and the Dashboard disagree, look for a blank Response, a typo in a level, or a changed weight. Never change the weights." }
    }
  ],
  check: [
    { q: "A function scores 50% weighted compliance. What is its CMM score?", opts: ["2.0 (Repeatable)", "3.0 (Defined)", "2.5 (Repeatable)", "4.0 (Managed)"], ans: 1, why: "CMM = 1 + 4 x 0.5 = 3.0, which is level 3, Defined." },
    { q: "A function scores 34% weighted compliance. What is its hygiene rating?", opts: ["Intermediate", "Good", "Initial", "Basic"], ans: 3, why: "Basic means below 35%. Initial is a CMM level, not a hygiene rating." },
    { q: "You leave Q40 blank by mistake. How does the Dashboard treat it?", opts: ["It skips the question and its weight", "It counts as 0% and pulls the score down", "It counts as 50% until you answer it", "It stops calculating the whole sheet"], ans: 1, why: "Unanswered questions count as 0%, so a blank looks exactly like Not Compliant. Check that Answered matches Questions in every row." },
    { q: "Which gap pulls the score down more: weight 10 at Somewhat, or weight 5 at Not Compliant?", opts: ["Weight 10 at Somewhat (750 points lost)", "Weight 5 at Not Compliant (500 points lost)", "They cost exactly the same", "Neither, because gaps do not change compliance"], ans: 0, why: "Cost = weight x points lost. 10 x 75 = 750 is more than 5 x 100 = 500." }
  ]
};

COURSE_LESSONS['12.2'] = {
  id: '12.2', week: 12, title: 'From gaps to risks: the risk register and heat map', mins: 10, module: 'Capstone talk · SY0-701 5.2',
  intro: "Your gap list tells you what is missing. It does not tell Linda Harper how worried to be. Risk does. This afternoon you turn your most important gaps into 8 to 10 risks in the Risk Register sheet of the risk register and POA&M workbook, rate each one, and check the heat map. This is the page leaders look at first.",
  sections: [
    {
      title: 'A gap is not a risk yet',
      body: [
        "<strong>Risk</strong> is the chance that something bad happens, combined with how much harm it would cause. A gap is a missing practice. A risk explains what could go wrong because of that gap, and what it would hurt.",
        "A good <strong>risk statement</strong> names the threat and what it would hurt, in one sentence. For example: 'An attacker with a stolen password logs in through a remote access path with no MFA and copies finance data.' Then list the evidence IDs that show the weakness, so anyone can check it.",
        "Several gaps often feed one risk. Missing MFA, a vendor account without MFA, and a shared login can all feed one account-takeover risk. That is why 41 questions shrink to 8 to 10 risks. Keep each risk specific to Northgate. A line like 'phishing is a risk' with no evidence earns little credit, because it would be true of any company."
      ]
    },
    {
      title: 'Rate with words, backed by evidence',
      body: [
        "<strong>Likelihood</strong> is how probable the event is: Unlikely, Possible, or Likely. <strong>Impact</strong> is how much harm it would cause: Minor, Moderate, Major, or Severe. This is <strong>qualitative</strong> risk analysis: words, not dollar figures.",
        "Use your evidence to choose. A Critical scan finding on a system that other networks can reach makes an attack more likely. Sensitive data, such as vendor bank details, makes the impact worse. A thing that already happened once, with the same weakness still open, is hard to call Unlikely."
      ],
      callout: { kind: 'real', title: 'Exposure raises likelihood', text: "In 2017 Equifax ran an internet-facing web application with an Apache Struts flaw (CVE-2017-5638) for which a patch had been available since March. Attackers got in from May. A known, unpatched flaw on a system attackers can reach is the textbook case for rating likelihood high." }
    },
    {
      title: 'The risk matrix',
      body: [
        "The rating comes from a <strong>risk matrix</strong>: find the likelihood row and the impact column, and the cell gives Low, Medium, High, or Critical. The workbook fills in the Rating column for you, but you must be able to read the matrix and explain every rating out loud."
      ],
      figure: { id: 'w12-risk-matrix', caption: 'The risk matrix used in the Northgate workbook. Pick the row and the column; the cell is the rating.' },
      list: [
        "Likely: Minor = Medium, Moderate = High, Major = High, Severe = Critical",
        "Possible: Minor = Low, Moderate = Medium, Major = Medium, Severe = High",
        "Unlikely: Minor = Low, Moderate = Low, Major = Medium, Severe = Medium"
      ]
    },
    {
      title: 'The register row and the owner',
      body: [
        "The <strong>risk register</strong> is the table that holds all of this. Each row has a number (R1, R2...), the risk statement, evidence IDs, likelihood, impact, rating, CSF category, owner, and status (Open, In progress, Done).",
        "The <strong>owner</strong> is a person at the client who is responsible for managing the risk, such as the IT Manager or the CEO. The owner is never the assessor. You find and report risks; Northgate decides and acts."
      ],
      callout: { kind: 'exam', title: 'Security+ risk words', text: "SY0-701 objective 5.2 uses the same ideas. A risk register lists risks with owners and thresholds. Risk appetite is how much risk leaders are willing to take on; risk tolerance is how far from that they will accept. Quantitative analysis uses money: ALE (annualized loss expectancy) = SLE (single loss expectancy) x ARO (annualized rate of occurrence). Your Northgate register is qualitative." }
    },
    {
      title: 'The heat map',
      body: [
        "A <strong>heat map</strong> shows the register as a picture: a grid with likelihood on one side and impact on the other. Each cell counts how many risks fall there, colored by its rating. The corner where Likely meets Severe holds the Critical risks. The workbook's Heat Map sheet counts for you, and you will paste it into your report and deck.",
        "Check that the picture matches your story. If every risk sits in the Critical corner, your ratings are probably too harsh. If nothing is above Medium for a company that was breached in April and still has the same kinds of gaps, they are probably too soft."
      ]
    }
  ],
  check: [
    { q: "Using the matrix, what is the rating for a risk that is Likely with Moderate impact?", opts: ["High", "Low", "Medium", "Critical"], ans: 0, why: "The Likely row reads Medium, High, High, Critical. Moderate is the second column, so High." },
    { q: "How does a risk get its rating in the Northgate workbook?", opts: ["You pick likelihood and impact; the matrix sets the rating", "You multiply two numbers from 1 to 5", "You copy the worst CVSS score", "The IT Manager chooses it"], ans: 0, why: "You choose the likelihood and impact from the drop-downs, and the Rating column reads the matrix." },
    { q: "What does each cell of the heat map show?", opts: ["The CVSS score of the worst finding", "How many risks have that likelihood and impact", "Which staff finished training", "The weight of each question"], ans: 1, why: "The heat map counts the register's risks by likelihood and impact, colored by rating." },
    { q: "Which is the strongest risk statement for the register?", opts: ["Phishing is a risk.", "Security could be better.", "An attacker uses a stolen password on a remote access path without MFA and copies finance data (with evidence IDs).", "We recommend more training."], ans: 2, why: "A strong statement names the threat and what it hurts and points to evidence. The others are generic or are fixes, not risks." }
  ]
};

COURSE_LESSONS['12.3'] = {
  id: '12.3', week: 12, title: 'The POA&M and the remediation roadmap', mins: 10, module: 'Capstone talk · SY0-701 5.2',
  intro: "The risk register tells Northgate what could go wrong. The POA&M tells it what to do about each gap, who does it, and by when. Today you build the POA&M sheet, then group the actions into a three-phase roadmap that goes into your report and deck. A small company with one IT person needs a plan it can actually finish.",
  sections: [
    {
      title: 'What a POA&M is',
      body: [
        "<strong>POA&amp;M</strong> stands for Plan of Action and Milestones. It is the action plan: one row per gap, with a priority, a clear action, an owner, and a milestone. You build it on the POA&amp;M sheet of the same workbook as your risk register.",
        "Risk register versus POA&amp;M: the register says <em>what could go wrong and how bad it is</em>. The POA&amp;M says <em>what we will do about it, and by when</em>."
      ],
      callout: { kind: 'real', title: 'A federal habit', text: "POA&Ms are standard practice in US federal agencies, which use them under FISMA (the Federal Information Security Modernization Act) to track every known security weakness until it is fixed. Many private assessments borrow the same format because auditors and insurers recognize it." }
    },
    {
      title: 'Which gaps get a row',
      body: [
        "The rule: one item for every question scored Somewhat (25%) or Not Compliant (0%), plus any question scored Mostly (50%) that drives a Critical or High risk in your register. Almost and Fully questions do not need items.",
        "So count first. Every Somewhat and Not Compliant question gets a row, no matter what. Then go through your Critical and High risks and ask which Mostly questions sit behind them. Leaving one of those off is the most common mistake, and it can leave the biggest cause of a breach off the plan."
      ],
      figure: { id: 'w12-poam-rule', caption: 'The POA&M rule as a decision. Mostly questions are the only judgment call: they get a row when they drive a Critical or High risk.' }
    },
    {
      title: 'Writing a good item',
      body: [
        "Each item needs four key parts. The <strong>priority</strong> (High, Medium, Low) says how urgent it is. The <strong>action</strong> is a specific fix, such as 'Turn on MFA for all VPN and email accounts', not 'improve security'. The <strong>owner</strong> is the client person responsible. The <strong>milestone</strong> is a target date or checkpoint, such as 'MFA on for all accounts by 31 October 2026'.",
        "Also fill in the CSF category, the question number, the gap with its evidence IDs, the effort (Low, Medium, High), and the status. In the scenario the report is due 25 September 2026, so date your milestones from there."
      ],
      callout: { kind: 'exam', title: 'Risk treatment', text: "Security+ names four ways to treat a risk: mitigate (reduce it with a control), transfer (for example, cyber insurance), avoid (stop the risky activity), and accept (leaders formally decide to live with it). Most POA&M items are mitigation. If Northgate chooses to accept a risk instead, that is a leader's decision, written down with a name and a date." }
    },
    {
      title: 'Setting priority: risk, weight, effort',
      body: [
        "Start with the risk rating and the question's weight. Then think about <strong>effort</strong>: how hard or costly the fix is. High-risk, low-effort items are <strong>quick wins</strong> and usually come first. High-risk, high-effort items are important but need planning and budget. Low-risk items can wait.",
        "Always connect priority to business impact. Northgate's insurance renews in November, its budget is small, and one person runs IT. A cheap fix the insurer already asks about is a strong first step. A plan that needs a 24/7 security team in month one will not happen."
      ],
      callout: { kind: 'real', title: 'Quick wins are often patches', text: "WannaCry spread worldwide in May 2017 through the EternalBlue exploit against old Windows file sharing (SMBv1). Microsoft had released the fix, MS17-010, in March, about two months earlier. Applying a patch that already exists is the classic high-impact, low-effort action." }
    },
    {
      title: 'The roadmap',
      body: [
        "The <strong>remediation roadmap</strong> groups POA&amp;M items into three phases: 0-30 days, 31-90 days, and 91-180 days. Quick wins usually go in the first phase. Bigger projects, like replacing an old server or writing and testing plans, go later. The roadmap appears in CSA section 6 and on one slide of your deck, so leaders see the whole plan as a simple timeline."
      ]
    }
  ],
  check: [
    { q: "What does POA&M stand for?", opts: ["Policy of Assessment and Measures", "Plan of Action and Milestones", "Proof of Audit and Monitoring", "Plan of Assets and Maintenance"], ans: 1, why: "Plan of Action and Milestones: what will be done about each gap, by whom, and by when." },
    { q: "What are the three phases of the remediation roadmap?", opts: ["1 week, 1 month, 1 year", "0-90 days, 91-365 days, 1-3 years", "0-30 days, 31-90 days, 91-180 days", "Today, next quarter, next budget year"], ans: 2, why: "The roadmap groups actions into 0-30, 31-90, and 91-180 days, with quick wins first." },
    { q: "Two gaps drive risks with the same rating. Why might the MFA fix go first for Northgate?", opts: ["MFA is the newest technology", "The insurer asks about MFA and the policy renews in November", "It was found first", "The IT Manager prefers MFA projects"], ans: 1, why: "Priority should follow business impact. The renewal and the insurer's questions make MFA urgent." },
    { q: "What is a quick win?", opts: ["Any low-risk fix", "A fix that lowers a high risk with little cost or effort", "The first finding in the workbook", "A fix the assessor does for the client"], ans: 1, why: "Quick wins are high-risk, low-effort fixes. They usually go in the 0-30 day phase." }
  ]
};

COURSE_LESSONS['12.4'] = {
  id: '12.4', week: 12, title: 'Writing the CSA report', mins: 10, module: 'Capstone talk · SY0-701 5.5',
  intro: "The Cybersecurity Assessment Report (CSA) is the full written record of your assessment. Today you write part 1: sections 2 to 4. They depend only on your workbook, which is now finished, so this is the right moment. Next week you add the risks, the roadmap, and the summary.",
  sections: [
    {
      title: 'Who reads the CSA',
      body: [
        "The CSA is written for managers and technical staff: James Chen, Priya Nair, and the department heads. They need enough detail to act. Leaders read the Executive Summary, which you write next week. Write for both anyway: clear sentences, every number explained, every finding tied to evidence.",
        "Being clear is not the same as being simple. You are making expert findings usable for the people who must fund and do the work.",
        "The CSA is also the record. If Northgate's insurer or a future assessor asks how a score was reached a year from now, the CSA and its Appendix A must answer without you in the room."
      ]
    },
    {
      title: 'The seven sections',
      body: ["Start from template-assessment-report-csa.docx. The grey text in each section tells you what goes there."],
      table: {
        head: ['Section', 'What goes in', 'Where it comes from'],
        rows: [
          ['1. Executive Summary', 'Half a page: the same message as your Executive Summary', 'Write it last (Week 13)'],
          ['2. Assessment Overview', 'CSF 2.0 six functions and the CMM scale, in plain words', 'Talks 10.2 and 12.1'],
          ['3. Method', 'Questionnaire, five levels, interviews, documents, scans; evidence wins', 'Your fieldwork'],
          ['4. Results by Function', 'Results table, then 2-3 sentences per function with evidence IDs', 'Dashboard + Why column'],
          ['5. Risk Assessment', 'Top risks and the heat map', 'Risk Register sheet (Week 13)'],
          ['6. Remediation Roadmap', 'Actions in 0-30 / 31-90 / 91-180 days', 'POA&M (Week 13)'],
          ['7. Conclusion', '3-4 sentences: now, in 6 months, the single next step', 'Week 13']
        ]
      }
    },
    {
      title: 'Part 1 today: sections 2, 3, and 4',
      body: [
        "<strong>Section 2, Assessment Overview,</strong> explains the yardsticks before the results. In a few plain sentences, say what NIST CSF 2.0 is and name its six functions, then explain the CMM scale from 1 Initial to 5 Optimized and how you converted compliance to CMM. A manager who missed the kickoff should understand every number that follows.",
        "<strong>Section 3, Method,</strong> tells the reader why to trust you. Say that you used a 41-question weighted questionnaire with five response levels, and gathered evidence from three sources: five interviews, the documents Northgate provided, and the scans the MCCoE team ran with written permission. Say how you handled disagreements: when what someone said did not match the evidence, you scored the evidence and logged the difference. Say what you could not check, for example anything you never received.",
        "<strong>Section 4, Results by Function,</strong> starts with the table copied from the Dashboard, then gives each function two or three sentences."
      ],
      list: [
        "Do not paste raw scan output or whole evidence files. Point to them by ID.",
        "Do not name or blame people for gaps. Describe practices: 'leaver accounts are not disabled on time', not who forgot.",
        "Define every abbreviation the first time: MFA, CMM, CSF, POA&amp;M."
      ]
    },
    {
      title: 'Writing a finding',
      body: [
        "Each function paragraph in section 4 is built from findings. A strong finding says what you found, how much, where the proof is, and why it matters. Practice example (not Northgate): 'Only 12 of 20 staff accounts use MFA (EV-x, row count). Stolen passwords are the most common way into small companies, so the remaining 8 accounts are the main exposure in Protect.'",
        "Name strengths too. A function paragraph that only lists failures reads like blame, and leaders stop listening. One strength with evidence, then the biggest gaps, is a good pattern."
      ],
      callout: { kind: 'real', title: 'A public model', text: "GAO-18-559 is the US Government Accountability Office's public report on the 2017 Equifax breach. It explains what happened step by step, what Equifax and federal agencies did afterward, and where each fact came from. Skim a page of it to see the tone: plain, specific, and sourced." }
    },
    {
      title: 'Numbers come from one place',
      body: [
        "Copy every number from the Dashboard. Use one decimal place for percentages and two for CMM, and keep that rounding everywhere. If the CSA, the Executive Summary, and the deck disagree by even one point, leaders start to doubt the whole assessment. Next week you will run a number check across all four documents.",
        "Save your draft in your engagement folder with a clear name, such as <code>Northgate-CSA-YourName.docx</code>. Leave the grey guidance text in sections 1, 5, 6, and 7 for now; you will replace it next week once the risks and roadmap are final."
      ]
    }
  ],
  check: [
    { q: "Who is the main audience for the CSA report?", opts: ["Managers and technical staff who will act on it", "Outside attackers", "Only the CEO", "Software vendors"], ans: 0, why: "The CSA carries the detail IT staff and managers need. The Executive Summary is for leaders." },
    { q: "What belongs in CSA section 4, Results by Function?", opts: ["Raw Nessus output", "The heat map only", "The results table, then 2-3 sentences per function with evidence IDs", "The list of interview questions"], ans: 2, why: "Section 4 reports compliance, CMM, and rating per function, with short evidence-backed explanations." },
    { q: "Your CSA says 41.3% for a function, but the Dashboard shows 41.25%. What is the best practice?", opts: ["Round however looks better", "Pick one rounding rule (one decimal) and use it in every document", "Leave numbers out of the CSA", "Use 41% in some places and 41.3% in others"], ans: 1, why: "Consistent rounding keeps every document in agreement. Mismatched numbers damage trust." }
  ]
};

COURSE_QUIZ.w12 = {
  title: 'Week 12 Quiz',
  pass: 80,
  questions: [
    { lesson: '12.1', q: "What is the formula for weighted compliance?", opts: ["Sum of all levels divided by the number of functions", "Sum of weights divided by sum of (weight x level)", "Sum of (weight x level) divided by sum of weights", "Highest level minus the lowest level"], ans: 2, why: "Multiply each level by its weight, add those up, and divide by the total weight. Important questions count more." },
    { lesson: '12.1', q: "Two questions each have weight 6. One is Fully and one is Mostly. What is the weighted compliance?", opts: ["50%", "100%", "150%", "75%"], ans: 3, why: "600 + 300 = 900. The weights add to 12. 900 / 12 = 75%." },
    { lesson: '12.1', q: "Question A has weight 3 and is Fully. Question B has weight 9 and is Not Compliant. What is the weighted compliance?", opts: ["50%", "33%", "75%", "25%"], ans: 3, why: "300 + 0 = 300. The weights add to 12. 300 / 12 = 25%. The heavy question drags the score down." },
    { lesson: '12.1', q: "Which list shows the five CMM levels in order from 1 to 5?", opts: ["Initial, Defined, Repeatable, Managed, Optimized", "Initial, Repeatable, Defined, Managed, Optimized", "Partial, Repeatable, Defined, Adaptive, Optimized", "Initial, Repeatable, Managed, Defined, Optimized"], ans: 1, why: "1 Initial, 2 Repeatable, 3 Defined, 4 Managed, 5 Optimized. Partial and Adaptive are CSF Tier names, not CMM levels." },
    { lesson: '12.1', q: "A function scores 68% weighted compliance. What is its hygiene rating?", opts: ["Good", "Basic", "Intermediate", "Optimized"], ans: 2, why: "Intermediate covers 35% to 69%. 68% is just short of Good. Optimized is a CMM level." },
    { lesson: '12.1', q: "Why is overall compliance not the simple average of the six function scores?", opts: ["Leaders only care about Protect", "Functions have different total weights", "Averages are not allowed in Excel", "Each function has one question"], ans: 1, why: "Overall uses all 41 questions and their weights together. Protect carries 94 points of weight, Respond only 33, so a plain average would be wrong." },
    { lesson: '12.1', q: "A practice client's overall compliance is 40%. What is its CMM score?", opts: ["1.6", "2.0", "2.6", "3.4"], ans: 2, why: "CMM = 1 + 4 x 0.40 = 1 + 1.6 = 2.6, between Repeatable and Defined." },
    { lesson: '12.2', q: "Using the risk matrix, what is the rating for a risk that is Likely with Severe impact?", opts: ["High", "Medium", "Critical", "Low"], ans: 2, why: "Likely row, Severe column: Critical, the most serious rating on the matrix." },
    { lesson: '12.2', q: "Using the risk matrix, what is the rating for a risk that is Possible with Moderate impact?", opts: ["Medium", "Low", "High", "Critical"], ans: 0, why: "The Possible row reads Low, Medium, Medium, High. Moderate gives Medium." },
    { lesson: '12.2', q: "Using the risk matrix, what is the rating for a risk that is Unlikely with Severe impact?", opts: ["Critical", "High", "Low", "Medium"], ans: 3, why: "In the Unlikely row, Severe gives Medium. Severe harm that is unlikely rates lower than severe harm that is likely." },
    { lesson: '12.2', q: "Which set of details belongs in each row of the risk register?", opts: ["Action, milestone, effort, and cost", "Risk, evidence IDs, likelihood, impact, rating, CSF, owner, status", "Every question with its weight and level", "Slide titles for the outbrief"], ans: 1, why: "The register describes and rates each risk. Actions, milestones, and effort belong in the POA&M." },
    { lesson: '12.2', q: "Who should be the owner of a risk in Northgate's register?", opts: ["The student assessor", "The vendor whose product has the flaw", "A Northgate person, such as the IT Manager or CEO", "The MCCoE instructor"], ans: 2, why: "Owners are client staff responsible for managing the risk. The assessor reports risks but never owns them." },
    { lesson: '12.2', q: "A scan finds a CVSS 9.8 flaw on a server that other networks can reach. How should this affect the risk rating?", opts: ["It makes an attack more likely", "It lowers the impact", "It has no effect; scans are not evidence", "It removes the risk"], ans: 0, why: "A Critical, reachable flaw is easy to find and exploit, so it supports a higher likelihood. Scans are one of the three evidence sources." },
    { lesson: '12.3', q: "What is the main difference between a risk register and a POA&M?", opts: ["The register rates risks; the POA&M plans the fixes", "They are the same document", "The register lists fixes; the POA&M lists open ports", "The register is only for auditors"], ans: 0, why: "The register says what could go wrong and how bad it is. The POA&M says what will be done, by whom, and by when." },
    { lesson: '12.3', q: "Which questions must get a POA&M item?", opts: ["Only Not Compliant questions", "All 41 questions", "Only the questions the client chooses", "Somewhat and Not Compliant, plus Mostly questions behind a Critical or High risk"], ans: 3, why: "That is the rule printed on the workbook's Instructions sheet." },
    { lesson: '12.3', q: "A question scored Mostly (50%) is behind a High risk in your register. Does it need a POA&M item?", opts: ["No, Mostly is good enough", "No, only Not Compliant gets items", "Yes, because it drives a High risk", "Only if the client asks"], ans: 2, why: "Mostly questions get an item when they drive a Critical or High risk. Leaving them off can drop the main cause of a breach from the plan." },
    { lesson: '12.3', q: "Which four key parts does every POA&M item need?", opts: ["Likelihood, impact, weight, CVSS", "Function, level, weight, hygiene", "Title, date, author, page", "Priority, action, owner, milestone"], ans: 3, why: "Each item needs a priority, a specific action, a client owner, and a milestone." },
    { lesson: '12.3', q: "Which is the best example of a POA&M milestone?", opts: ["MFA on for all accounts by 31 October 2026", "MFA is a helpful control", "The team should think about MFA soon", "MFA was missing in April"], ans: 0, why: "A milestone is a target date or checkpoint you can measure progress against." },
    { lesson: '12.3', q: "Which gap should usually be fixed first?", opts: ["A high risk that is cheap and easy to fix", "A high risk that needs a large new budget", "A low risk that is cheap to fix", "Any low-risk gap"], ans: 0, why: "High-risk, low-effort items are quick wins and usually go in the 0-30 day phase." },
    { lesson: '12.4', q: "In the CSA report, where do the results-by-function numbers come from?", opts: ["Your memory of the interviews", "The Dashboard sheet of your questionnaire workbook", "The Nessus summary", "An average of the interview answers"], ans: 1, why: "Every number comes from the Dashboard, with the same rounding in every document." }
  ]
};
