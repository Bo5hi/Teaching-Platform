// Week 11 talks + quiz (Capstone, week 2: fieldwork). Shapes: docs/COURSE_V2.md
// Light week: two short talks tied to the day's fieldwork. Scenario: Northgate Supply Co. (materials/week9/).
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['11.1'] = {
  id: '11.1', week: 11, title: 'Evidence from three sources: documents, interviews, and scans', mins: 10, module: 'Capstone talk · SY0-701 4.3, 5.5',
  intro: "Today is the busiest fieldwork day of the capstone. You interview four Northgate staff and read the eleven core documents. Before you start, you need one habit that every professional assessor has: nothing goes into your workbook unless you can point to the proof. This talk shows you the three places proof comes from, and how to read each one like an assessor instead of like a customer.",
  sections: [
    {
      title: 'Every score needs a source',
      body: [
        "An <strong>assessment</strong> is a structured review of an organization's security against a standard, backed by evidence. <strong>Evidence</strong> is anything that proves what is really happening: a policy, a report, a settings export, an interview record, or a scan result. MCCoE gathers evidence from three sources: documents, interviews, and scans.",
        "Each piece of evidence has an <strong>evidence ID</strong>, a short label that points to it. Northgate's documents are EV-01 to EV-21, the interviews are INT-01 to INT-05, and the scan results are SCAN-01 to SCAN-03. In the workbook, every answer lists its IDs, and where you can, the exact row, line, or section, for example 'EV-04, mfa_status column' or 'SCAN-02, host 10.20.1.50, port 21/tcp'. A reader should be able to follow any score back to its proof in under a minute."
      ],
      figure: { id: 'w11-three-sources', caption: 'Three sources of evidence, each with its own ID, feed one questionnaire row: a level, the IDs behind it, and a short reason.' }
    },
    {
      title: 'Reading a document like an assessor',
      body: [
        "A document that exists is not the same as a practice that works. For every document, check four things and write them in your evidence log:",
      ],
      list: [
        "<strong>Approved?</strong> Who signed it off, and is there a name and date in the document control table? A draft is a plan, not a practice.",
        "<strong>Dated and current?</strong> When was it last reviewed, and when was the next review due? Compare the due date with the scenario date, September 2026.",
        "<strong>What does it actually prove?</strong> A policy is a promise. A report or export (an MFA enrollment report, a backup job report) is a record of what happened. Records outweigh promises.",
        "<strong>Does it agree with the other evidence?</strong> A policy that says 'VPN only' should match the firewall export. When two documents disagree, you have found something."
      ],
      callout: { kind: 'tip', title: 'At Northgate', text: "Start each document at its header: the document control table, the export date, or the report period. Then read the body. The header often tells you more about how well a practice works than the body does." }
    },
    {
      title: 'Interviews are evidence too, with limits',
      body: [
        "An interview record, such as INT-02 for James Chen, is real evidence: it tells you how people say the work is done and where to look next. But a statement is a <strong>claim</strong>. People describe how things should work, or how they worked the last time they checked. Treat each claim as something to confirm.",
        "Write answers in the person's own words, with no opinion in the answer column. Write down every evidence ID the person gives you. Do your notes right after each interview, while you still remember the details. The simulator gives you one attempt per person, just as a busy client would."
      ]
    },
    {
      title: 'Scans show what is really there',
      body: [
        "The MCCoE team ran three scans with Linda Harper's written permission. You never scan a client yourself: scanning without written permission can be illegal and can break systems.",
        "<strong>Nmap</strong> is a network scanner. It finds which hosts answer and which ports are open. A port is <strong>open</strong> when a program answers, <strong>closed</strong> when the host answers 'nothing here', and <strong>filtered</strong> when a firewall dropped the probe so nothing answered. <strong>Nessus</strong> is a vulnerability scanner. It checks hosts for known weaknesses and rates each one with <strong>CVSS</strong> (Common Vulnerability Scoring System), a score from 0.0 to 10.0. A <strong>credentialed</strong> scan logs in with a read-only account and sees missing patches; an uncredentialed scan sees only the outside of a host.",
        "A scan shows what is on the network today, not why. That makes it a strong check on documents: a host that answers the scan but is missing from the asset inventory is a finding."
      ],
      table: {
        head: ['CVSS v3 score', 'Severity', 'Usual fix window'],
        rows: [['9.0 to 10.0', 'Critical', 'Now'], ['7.0 to 8.9', 'High', 'Days to a few weeks'], ['4.0 to 6.9', 'Medium', 'About 90 days'], ['0.1 to 3.9', 'Low', 'Normal maintenance']]
      },
      callout: { kind: 'real', title: 'WannaCry, 2017', text: "WannaCry ransomware spread through Windows file sharing (SMBv1) using the EternalBlue exploit. Microsoft had released the fix, MS17-010, in March 2017, about two months earlier. Organizations whose patch records said 'up to date' but whose machines were not learned the difference between a document and a scan the hard way." }
    },
    {
      title: 'Corroboration',
      body: [
        "<strong>Corroboration</strong> means checking a claim against a second, independent source. A claim backed by one interview is weak. The same claim backed by an interview and an export is strong. A claim that the export contradicts is a finding.",
        "Good fieldwork notes show the chain: who said it (INT), what the document says (EV), and what the network shows (SCAN)."
      ],
      callout: { kind: 'real', title: 'Equifax, 2017', text: "The US Government Accountability Office (GAO-18-559) found that an expired certificate on a device that inspected network traffic meant the 2017 data theft went unseen for months. A monitoring tool that existed on paper was not working in practice. Always ask for the record that proves a control is running, not just the purchase or the policy." }
    }
  ],
  check: [
    { q: "Which of these is the strongest evidence that staff use MFA?", opts: ["A policy that says MFA should be used where available", "An MFA enrollment report exported from the email admin console", "The IT Manager saying that everyone is enrolled", "A slide from last year's training course about MFA"], ans: 1, why: "An export from the system is a record of what is true today. A policy is a promise, and an interview answer is a claim that still needs a record behind it." },
    { q: "Nmap reports port 22/tcp as 'filtered'. What does that mean?", opts: ["SSH is running and accepts logins", "The host answered that nothing listens on that port", "A firewall dropped the probe, so nothing answered", "The scanner crashed before it reached the port"], ans: 2, why: "Filtered means no answer came back because something, usually a firewall, dropped the probe. Closed means the host answered 'nothing here'." },
    { q: "A Nessus finding has a CVSS v3 score of 7.3. What severity is it?", opts: ["Critical", "Medium", "Low", "High"], ans: 3, why: "7.0 to 8.9 is High. Critical starts at 9.0." },
    { q: "A host answers the internal scan but is not in the client's asset inventory. How do you treat it?", opts: ["As a finding: the inventory is incomplete", "As a scanner error, so leave it out", "As out of scope, because the client did not list it", "As proof that the inventory is correct"], ans: 0, why: "Scans show what is really on the network. A live host that nobody listed is an unmanaged asset, and the gap belongs in your notes with the SCAN and EV IDs." },
    { q: "A policy's document control table says 'Next review due: March 2023'. The scenario date is September 2026. What should your evidence log say?", opts: ["Approved and current", "Approved, but overdue for review", "Not a policy, so ignore it", "A draft that was never approved"], ans: 1, why: "The policy was approved, but its review date passed long ago. That affects how you score questions about reviewing policies." }
  ]
};

COURSE_LESSONS['11.2'] = {
  id: '11.2', week: 11, title: 'When words and evidence disagree: contradictions and scoring', mins: 10, module: 'Capstone talk · SY0-701 5.5',
  intro: "By now you have heard five people describe Northgate and you have read the documents and scans. Some of what you heard will not match what you read. That is normal, and it is the most valuable part of fieldwork. Today you log those differences, then start scoring the questionnaire with Govern and Identify.",
  sections: [
    {
      title: 'What a contradiction is',
      body: [
        "A <strong>contradiction</strong> is a place where what a person says does not match the documents or scans, or where two people describe the same thing differently. It is not about catching anyone lying. Busy people describe the process they designed, the plan they meant to finish, or the way things worked the last time they looked. A one-person IT team cannot check everything every week.",
        "Listen for confident words: 'everyone', 'always', 'never', 'the same day', 'all of them'. Those are the claims most worth checking first."
      ]
    },
    {
      title: 'The evidence wins',
      body: [
        "When words and evidence disagree, you score the question on the evidence. Then you record the difference in Worksheet 2 (the contradictions log) and in column J of the workbook. Each entry has three parts: what the person said, in their words and with their INT ID; what the evidence shows, with numbers and dates; and the source IDs.",
        "Write it neutrally. Here is the shape, from a practice client: 'The office manager said every visitor signs the visitor book (INT-xx). The visitor book has no entries for 3 of the last 5 days (EV-xx).' Not 'the office manager was wrong.' Your reader may be the person you interviewed."
      ],
      figure: { id: 'w11-evidence-wins', caption: 'When a claim and a record disagree, score on the record and log both, with their IDs, in neutral words.' },
      callout: { kind: 'real', title: 'Colonial Pipeline, 2021', text: "Colonial's CEO told the US Senate in June 2021 that the attackers got in through a VPN account that did not use multifactor authentication. The account was a legacy one that was no longer meant to be in use. A company can believe remote access is protected while one forgotten account says otherwise. That is exactly the kind of gap a records check finds and an interview misses." }
    },
    {
      title: 'Scoring one question',
      body: [
        "You score the questionnaire one question at a time, never with one overall impression. For each question you record three things: the <strong>level</strong> (Fully 100%, Almost 75%, Mostly 50%, Somewhat 25%, Not Compliant 0%), the <strong>evidence IDs</strong>, and one or two sentences on <strong>why</strong>. A level without evidence is an opinion. A level with evidence is a finding.",
        "Here is an example from a practice client, not Northgate. Question: 'Do all staff complete security awareness training at least once a year?' The manager says everyone did it. The training export shows 31 of 40 staff completed it, with no due dates for the rest. That is a real practice with real gaps, so Mostly fits. The row reads: Mostly (50%); EV-xx training export, INT-xx; 'Training runs every year, but 9 of 40 staff (23%) have not completed it and have no due date. The manager said everyone completed it; the export shows otherwise.'"
      ]
    },
    {
      title: 'No evidence means no credit',
      body: [
        "Sometimes a person says 'that's in my head' or 'we don't have that written down', or you asked and never received the document. There is no file to cite. Write 'no evidence provided' in the evidence column. The question usually scores Somewhat or Not Compliant, and it goes on your gaps list.",
        "This also applies to evidence you did not earn. If an interview never gave you EV-14, you cannot cite EV-14. That is the cost of a question you did not ask, and it is how real fieldwork works."
      ],
      callout: { kind: 'exam', title: 'Audits and assessments', text: "Security+ objective 5.5 covers internal and external audits and assessments, and attestation: a formal statement that something is true. An assessor's attestation is only as good as the evidence behind it. Expect questions that ask what makes a finding defensible: an independent record, not a verbal assurance." }
    },
    {
      title: "Today's scoring: Govern and Identify",
      body: [
        "Score Q1 to Q17 today. Govern (Q1-Q10) asks about policy, roles, risk decisions, leadership reports, and vendors. Identify (Q11-Q17) asks about inventories, diagrams, data locations, vulnerability scanning, alerts, and lessons learned. Before you pick each level, list every source you have for that question: the interview topics that covered it, the EV items, and the scans. Then pick the level the evidence supports. You finish Protect to Recover next week."
      ]
    }
  ],
  check: [
    { q: "The IT Manager says MFA is required for every account. The MFA enrollment report shows many accounts without MFA. What do you do?", opts: ["Score from the report and log the contradiction", "Score Fully, because the IT Manager is the expert", "Average the two sources and score Mostly", "Leave the question blank until he explains"], ans: 0, why: "Evidence wins. You score what the report shows, then log what was said, what the record shows, and both IDs." },
    { q: "Which contradictions-log entry is written the right way?", opts: ["Tunde does not know his own systems.", "Warehouse staff ignore the rules.", "The manager said X (INT-05). The export shows Y (EV-xx).", "Someone in IT made a mistake with the logins."], ans: 2, why: "A good entry is neutral and specific: the claim with its INT ID, the record with its EV or SCAN ID. No blame." },
    { q: "You asked three times for proof of a backup restore test and received nothing. How do you record the question?", opts: ["Fully, since the client says tests happen", "Leave it blank so it does not count", "Use the level you think is most likely", "Write 'no evidence provided' and score it low"], ans: 3, why: "No evidence means no credit. A blank also counts as 0% in the workbook, but it hides the reason. Write the reason and add the question to your gaps." },
    { q: "Checking a claim against a second, independent source is called:", opts: ["Attestation", "Corroboration", "Remediation", "Aggregation"], ans: 1, why: "Corroboration is confirming a claim with an independent source, for example an interview answer confirmed by an export." },
    { q: "What three things does every scored questionnaire row need?", opts: ["Level, evidence IDs, and a short reason", "Level, the weight, and the CVSS score", "The interviewee's name, the date, and a signature", "Level, the owner, and a milestone"], ans: 0, why: "The level, the IDs behind it, and one or two sentences on why. Owners and milestones belong in the POA&M next week." }
  ]
};

COURSE_QUIZ.w11 = {
  title: "Week 11 Quiz",
  pass: 80,
  questions: [
    { lesson: "11.1", q: "What are the three sources of evidence in an MCCoE assessment?", opts: ["Interviews, online reviews, and news stories", "Scans, vendor sales pages, and your own best guesses", "Documents, interviews, and network and vulnerability scans", "Document review, customer surveys, and social media"], ans: 2, why: "MCCoE gathers evidence from policy and artifact review, interviews, and scans. Guesses and sales pages do not prove what the client actually does." },
    { lesson: "11.1", q: "Which of these is an evidence ID?", opts: ["SCAN-02", "Weight 10", "CMM 3.6", "CVSS 9.8"], ans: 0, why: "Evidence IDs label the proof behind an answer: EV- for documents, INT- for interviews, SCAN- for scan results. Weight, CMM, and CVSS are scores." },
    { lesson: "11.1", q: "What does Nmap do?", opts: ["Backs up servers to the cloud", "Scores how well staff know the security policy", "Encrypts files before they leave the network", "Finds live hosts and their open ports and services"], ans: 3, why: "Nmap is a network scanner. It finds which hosts answer and which ports and services they have open." },
    { lesson: "11.1", q: "What does Nessus do?", opts: ["Blocks traffic from the internet to servers", "Checks hosts for known weaknesses and rates them", "Writes the Executive Summary for you", "Tracks who has finished security training"], ans: 1, why: "Nessus is a vulnerability scanner. It checks systems for known weaknesses and rates each one, usually with CVSS. A firewall blocks traffic, not Nessus." },
    { lesson: "11.1", q: "A finding on a server has a CVSS v3 score of 9.8. What does that mean?", opts: ["It is a Critical finding", "The server is 98% secure", "It is a Low finding", "It is a Medium finding"], ans: 0, why: "CVSS runs from 0.0 to 10.0, and 9.0 to 10.0 is Critical. A CVSS score is not a percentage of security." },
    { lesson: "11.1", q: "A finding has a CVSS v3 score of 5.3. Which severity band is it in?", opts: ["Low", "High", "Medium", "Critical"], ans: 2, why: "4.0 to 6.9 is Medium. High starts at 7.0." },
    { lesson: "11.1", q: "In this capstone, who runs the Nmap and Nessus scans of Northgate?", opts: ["Each student, from home", "The MCCoE team, with the CEO's written permission", "Any student who finishes the interviews early", "Northgate's customers through the ordering portal"], ans: 1, why: "Scanning without written permission can be illegal and harmful. The MCCoE team ran the scans under signed rules of engagement; students only read the results." },
    { lesson: "11.1", q: "The external Nmap scan shows 22/tcp as 'filtered'. What is the best reading?", opts: ["SSH is open to the internet", "SSH requires MFA", "The server is powered off", "A firewall dropped the probe, so SSH did not answer from the internet"], ans: 3, why: "Filtered means no response because something dropped the probe. It shows SSH is not reachable from the internet at scan time; it says nothing about MFA." },
    { lesson: "11.1", q: "Why does a credentialed vulnerability scan find more than an uncredentialed one?", opts: ["It logs in with a read-only account and can see installed updates", "It runs longer", "It tries to break in with stolen passwords", "It scans from the internet instead of inside"], ans: 0, why: "A credentialed scan logs in (read-only) and can check installed software and missing patches. An uncredentialed scan sees only what the host shows from outside." },
    { lesson: "11.1", q: "A host answers the internal scan but is missing from the asset inventory. What does that show?", opts: ["The scan is unreliable", "The host is out of scope", "Nothing, because inventories never list servers", "The inventory is incomplete, which is a finding"], ans: 3, why: "Comparing the scan with the inventory is one of the most useful checks in fieldwork. An unlisted live host is unmanaged: no owner, often no patches, logs, or backups." },
    { lesson: "11.1", q: "A policy was approved in 2022 with a 12-month review cycle, and no review is recorded since. How do you describe it in your evidence log?", opts: ["Approved and current", "A draft", "Approved, but overdue for review", "Not evidence at all"], ans: 2, why: "Check approval and currency separately. It was approved, but it is years past its review date, which matters for questions about reviewing policies." },
    { lesson: "11.1", q: "Which is a record rather than a promise?", opts: ["A policy that says restores are tested every quarter", "A backup job report that lists restore tests and their dates", "An interview answer that tests happen 'regularly'", "A draft procedure for restore testing"], ans: 1, why: "A system report records what actually happened. Policies and drafts state intentions, and interview answers are claims." },
    { lesson: "11.2", q: "An IT Manager says MFA is required for every account. The MFA enrollment report shows many accounts not enrolled. What do you do?", opts: ["Score it Fully because the IT Manager said so", "Average the two sources and score Mostly", "Leave the question out of the workbook", "Score from the report and record the contradiction"], ans: 3, why: "When words and evidence disagree, the evidence wins. Score on the report, then log what was said, what the evidence shows, and the IDs." },
    { lesson: "11.2", q: "You asked for proof of security training three times and got none. How do you score and record the question?", opts: ["Not Compliant or Somewhat, with 'no evidence provided', and add it to your gaps", "Fully, since the client said training happens", "Leave it blank and remove it from the totals", "Use the level you think is most likely"], ans: 0, why: "A practice with no evidence cannot get credit. Write the reason and add it to the gaps list. A blank counts as 0% but hides why." },
    { lesson: "11.2", q: "Checking a claim against a second, independent source is called what?", opts: ["Remediation", "Escalation", "Corroboration", "Attestation"], ans: 2, why: "Corroboration means confirming a claim with an independent source, such as an interview answer confirmed by a system export." },
    { lesson: "11.2", q: "Which words in an interview answer should you check first?", opts: ["'Sometimes' and 'maybe'", "'Everyone', 'always', and 'the same day'", "Dates and version numbers", "The person's job title"], ans: 1, why: "Confident, absolute words make the claim easy to test and often hide exceptions. Ask for proof of those answers first." },
    { lesson: "11.2", q: "At a practice client, which contradictions-log entry is written well?", opts: ["The office manager said every visitor signs in (INT-xx); the visitor book has gaps on 3 of 5 days (EV-xx).", "Reception is sloppy about visitors.", "Someone forgot the visitor book again.", "The office manager lied about the process."], ans: 0, why: "A good entry is neutral and specific: the claim with its INT ID and the record with its EV ID. Describe the difference; do not blame the person." },
    { lesson: "11.2", q: "Your interviews never gave you EV-14. Can you cite it in the workbook?", opts: ["Yes, everything in the library is fair game", "Yes, if a classmate tells you what it says", "No, but you can guess what it would show", "No. Cite only evidence you received; otherwise write 'no evidence provided'"], ans: 3, why: "In this simulation, as in real fieldwork, you can only use evidence the client gave you. A document you never asked for is evidence you do not have." },
    { lesson: "11.2", q: "What three things does every scored questionnaire row need?", opts: ["The weight, the CVSS score, and the owner", "The interviewee's name, a date, and a signature", "A level, the evidence IDs, and a short reason", "A milestone, an owner, and an effort level"], ans: 2, why: "The level, the IDs behind it, and one or two sentences on why. Milestones and owners belong in next week's POA&M." },
    { lesson: "11.2", q: "A practice client's training export shows 31 of 40 staff completed annual training, and the rest have no due date. Which level fits best?", opts: ["Fully (100%)", "Mostly (50%)", "Not Compliant (0%)", "Almost (75%) only if the manager insists"], ans: 1, why: "Training is real and runs every year, but about a quarter of staff are missing with no plan. That is partly in place, which is Mostly. What the manager insists does not change the record." }
  ]
};
