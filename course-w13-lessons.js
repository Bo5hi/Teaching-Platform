// Week 13 talks (capstone, light week) + quiz. Shapes: docs/COURSE_V2.md
// Talks are short Lesson.html lessons tied to the day's work. Scenario: Northgate Supply Co. (materials/week9/).
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['13.1'] = {
  id: '13.1', week: 13, title: 'Writing for leaders: the Executive Summary', mins: 10, module: 'Capstone talk · SY0-701 5.5',
  intro: "Linda Harper hired your team because she wants an honest picture of Northgate's security. She is busy, she is not technical, and she may read only one page. That page is the Executive Summary. Today you finish the CSA report and write the Executive Summary, so this talk is about one skill: turning expert findings into something a leader can understand, repeat, and act on.",
  sections: [
    {
      title: 'Six documents, three kinds of reader',
      body: [
        "Your <strong>deliverable pack</strong> is the full set of outputs from the assessment. It has six parts, and each one has its own reader and its own job. All six must use the same numbers, taken from the Dashboard sheet of your questionnaire workbook."
      ],
      table: {
        head: ['Document', 'Main reader', 'Its job'],
        rows: [
          ['Questionnaire workbook', 'Assessors, auditors', 'The full record: 41 levels, evidence IDs, and reasons'],
          ['Risk register and heat map', 'IT Manager, leaders', 'What could go wrong and how bad it would be'],
          ['POA&amp;M', 'IT Manager, owners', 'What will be done, by whom, and by when'],
          ['CSA report', 'Managers and IT staff', 'Results by function, findings with evidence, roadmap'],
          ['Executive Summary', 'CEO and managers', 'The overall result, top risks, and decisions needed'],
          ['Briefing deck', 'Everyone in the outbrief', 'Supports what you say out loud']
        ]
      },
      callout: { kind: 'exam', title: 'Audits and assessments (objective 5.5)', text: "Security+ separates an <strong>internal</strong> assessment (done by the organization's own staff) from an <strong>external</strong> one (done by an outside party, such as your MCCoE team or a regulator). An independent outside assessment gives leaders and insurers more confidence. Expect questions that ask who performs an assessment and who the report is for." }
    },
    {
      title: 'Put the headline first',
      body: [
        "Newspapers use an <strong>inverted pyramid</strong>: the most important fact comes first, and detail follows. Write the Executive Summary the same way. The first paragraph, called Overall Posture in the template, gives the headline: the overall compliance percentage, the CMM maturity level, the hygiene rating, the biggest strength, and the biggest weakness.",
        "Then give the top risks, then the next steps. Results by function, the method, and the evidence detail belong mostly in the CSA report and the workbook. If Linda stops reading after the first half page, she should still know where Northgate stands and what she must decide."
      ],
      figure: { id: 'w13-pyramid', caption: 'Write from the top down. A busy leader may stop after the next steps, so the detail goes last and mostly in the CSA.' }
    },
    {
      title: 'Business terms, not jargon',
      body: [
        "Leaders decide on money, people, and priorities. They need to know what a gap could do to the business: stop orders, cost money, upset customers, or put the insurance claim at risk. So translate each finding. Instead of 'PR.AA control gap on remote access authentication', write 'a stolen password could still open some accounts, which is how the April break-in started.'",
        "Define any term a leader might not know the first time you use it, or leave it out. Explain what a number means: 'a CMM level of 2 means most security work depends on habits and one person, not on written processes.' The template also asks for a <strong>simple comparison</strong>, such as a house with strong locks but no smoke alarms. A good comparison is one a CEO can repeat to her managers the next day.",
        "Being clear is not the same as being simple. You are not hiding detail. You are making expert findings usable by the people who must fund and approve the fixes."
      ],
      callout: { kind: 'real', title: 'Leaders answer for breaches', text: "After the 2013 Target breach, Target's CEO Gregg Steinhafel resigned in 2014. After the 2017 Equifax breach, Equifax's CEO retired within weeks. Cyber risk is a business risk, and leaders are held responsible for it. That is why they need reports they can actually read." }
    },
    {
      title: 'Risks, next steps, and an honest scope',
      body: [
        "The Priority Risks section lists your top five risks from the risk register: a short title, one line of evidence, and the rating. The Recommended Next Steps section lists five actions, most important first, and each one should close one of those priority risks. If a next step does not connect to a risk, ask why it is there.",
        "Size the steps for the client. Northgate has 62 people and one IT Manager. A first step that needs a large new team will not happen. Cheap, quick fixes that close a serious risk come first, and the bigger projects get a phase in the roadmap.",
        "Finish with the Note on Scope: what you assessed, what evidence you used, and what you could not check. Saying what you did not see is part of being honest, and it protects the client from reading more into your results than they show."
      ],
      callout: { kind: 'tip', title: 'At Northgate', text: "Linda's engagement letter names three worries: could April happen again, the insurance renewal in November, and a small budget. A strong Executive Summary answers all three in plain words, and every number in it matches the Dashboard." }
    }
  ],
  check: [
    { q: "Who is the main reader of the Executive Summary?", opts: ["The part-time IT contractor", "Leaders such as the CEO", "Outside auditors only", "The vendors who connect to Northgate"], ans: 1, why: "The Executive Summary is written for leaders who decide on money and priorities. Technical detail goes in the CSA report and the workbook." },
    { q: "What should the first paragraph of the Executive Summary contain?", opts: ["The history of NIST CSF since 2014", "A list of every tool the team used", "The overall result and the biggest strength and weakness", "All 41 questions with their weights"], ans: 2, why: "Put the headline first: overall compliance, CMM level, hygiene rating, and the biggest strength and weakness. A leader may read only this part." },
    { q: "Which sentence is written in business terms?", opts: ["PR.AA authentication controls are partially implemented.", "A stolen password could still open some accounts, as in April.", "Q18 is scored at the 50% level with weight 10.", "The CMM formula yields a value between 1 and 5."], ans: 1, why: "It says what could happen to the business and links it to an event leaders remember. The others are accurate but full of terms a CEO would need explained." },
    { q: "Each Recommended Next Step in the Executive Summary should:", opts: ["Close one of the priority risks", "Use the newest security product", "Be the most expensive option", "Repeat a question from the workbook"], ans: 0, why: "Next steps exist to reduce the priority risks. A step that does not connect to a risk does not belong on the leaders' page." }
  ]
};

COURSE_LESSONS['13.2'] = {
  id: '13.2', week: 13, title: 'Building the briefing deck', mins: 10, module: 'Capstone talk · outbrief',
  intro: "Tomorrow you present your results to MCCoE staff playing Northgate's leaders. The briefing deck is the set of slides you show while you talk. This afternoon you build it from the template. This talk covers what a deck is for, the order leaders expect, and how to make each slide easy to read in a few seconds.",
  sections: [
    {
      title: 'The deck supports you, not the other way round',
      body: [
        "An <strong>outbrief</strong> is a formal meeting where the assessment team presents its results to the client's leaders and answers their questions. The <strong>briefing deck</strong> is the set of slides for that meeting. The template has ten slides, and most outbrief decks have about 8 to 12.",
        "The people in the room listen to you and glance at the screen. If a slide is full of paragraphs, they read instead of listening, and they finish before you do. So each slide carries one idea, a few short lines, and a number or picture. What you plan to say goes in the <strong>speaker notes</strong>, the notes area under each slide that only you see."
      ]
    },
    {
      title: 'The order leaders expect',
      body: [
        "The template follows a simple story in three parts. First, why and how: the title, the purpose and agenda, and the scope and method. Second, what you found: the overall posture, maturity by function, strengths and gaps, the critical scan findings, and the top risks with the heat map. Third, what to do: the remediation roadmap and the next steps.",
        "Slide 4, Overall Posture, is the headline. It shows overall compliance, the CMM level, and the hygiene rating, plus one sentence a leader will remember. Everything before it is short setup. Everything after it is support."
      ],
      figure: { id: 'w13-deck-flow', caption: 'The ten template slides in three groups. Slide 4 carries the headline; the last two slides ask for decisions.' }
    },
    {
      title: 'Make every slide readable in five seconds',
      list: [
        "<strong>Use pictures you already have.</strong> Paste the Dashboard table or a simple bar chart on slide 5 and a picture of your heat map on slide 8.",
        "<strong>Label every number.</strong> '58%' alone means nothing. 'Overall compliance: 58% (Intermediate)' does.",
        "<strong>Explain each number out loud.</strong> For example: 'Fifty-eight percent means Northgate does a little more than half of what the framework expects, and it rates Intermediate.'",
        "<strong>Keep the scan slide plain.</strong> On slide 7, say what each Critical or High finding means for the business, not only its CVSS score.",
        "<strong>End with decisions.</strong> Slide 10 lists the three things leadership should approve today. A leader should leave knowing what you need from them."
      ],
      body: [
        "Use the same numbers, risk titles, and roadmap phases as your Executive Summary and CSA report. A leader who sees 58% on one page and 61% on another starts to doubt the whole assessment."
      ],
      callout: { kind: 'real', title: 'One sentence leaders remember', text: "After the 2021 Colonial Pipeline ransomware attack, the company's CEO told a US Senate committee that the attackers got in through a VPN account that did not use multifactor authentication. That one plain sentence explained the root cause to people with no technical background. Aim for a headline that clear." }
    },
    {
      title: 'Timing and practice',
      body: [
        "Aim for 10 to 15 minutes, which is about one minute per slide, so there is time for questions. Practice out loud and time yourself. Most people run long the first time. If you are over time, cut words from slides and notes, not the headline or the next steps.",
        "Tomorrow morning you rehearse with a partner who plays a leader and asks hard questions. Build the deck today so that rehearsal can be about how you speak, not about missing slides."
      ],
      callout: { kind: 'tip', title: 'At Northgate', text: "Your audience includes people you interviewed. Write every finding about a practice ('accounts of people who left were still active'), never about a person. The deck may be forwarded, so treat it as confidential client material." }
    }
  ],
  check: [
    { q: "Where should most of what you plan to say go?", opts: ["In paragraphs on each slide", "In the speaker notes", "In a handout of the workbook", "In the slide titles"], ans: 1, why: "Slides carry one idea and a few short lines. The words you plan to say go in the speaker notes, so the room listens to you instead of reading." },
    { q: "Which slide carries the headline in the template?", opts: ["Slide 1, Title", "Slide 3, Scope and method", "Slide 4, Overall posture", "Slide 7, Critical scan findings"], ans: 2, why: "Overall Posture shows overall compliance, CMM, and hygiene plus one memorable sentence. The slides before it are short setup." },
    { q: "About how long should the outbrief presentation run before questions?", opts: ["3 to 5 minutes", "10 to 15 minutes", "30 to 40 minutes", "As long as it takes to read every slide"], ans: 1, why: "Ten to fifteen minutes, roughly one minute per slide, leaves time for questions, which are where you defend your scores." },
    { q: "Your deck shows '58%' with no label. What is the best fix?", opts: ["Remove the number", "Make the number larger", "Label it: 'Overall compliance: 58% (Intermediate)'", "Add the formula in small print"], ans: 2, why: "Every number needs a label that says what it measures and what it means. Leaders should not have to guess." }
  ]
};

COURSE_LESSONS['13.3'] = {
  id: '13.3', week: 13, title: 'The outbrief: presenting and defending your scores', mins: 10, module: 'Capstone talk · outbrief',
  intro: "Today you deliver the outbrief. You present your results, and then MCCoE staff, playing Northgate's leaders, ask questions and challenge some of your scores. This is practice for a real part of the job: explaining security to people and defending your conclusions calmly, with evidence.",
  sections: [
    {
      title: 'How the session runs',
      body: [
        "You have about 10 to 15 minutes to present, then a few minutes of questions. Start with one sentence on why the assessment was done, then go straight to the headline: overall compliance, the CMM level, the hygiene rating, and the biggest risks. Then walk through the detail and finish on the decisions you need.",
        "Speak in plain language. Look at the people, not the screen. Explain every number you show. When you finish, stop and invite questions; do not apologize for your work or rush the last slides."
      ]
    },
    {
      title: 'When someone challenges a score',
      body: [
        "Someone will push back. A leader might say, 'Our IT guy told me everything is patched, so why is this score so low?' This is normal, and it is your chance to show the value of evidence. <strong>Defending a score</strong> means explaining how you reached it by pointing to the evidence behind it.",
        "Stay calm and thank them. Name the evidence IDs and say what they show, for example: 'The patch status report, EV-16, and the vulnerability scan, SCAN-03, both show workstations missing updates.' Then explain why you chose that level. When words and evidence disagree, the evidence wins, and you can say so politely.",
        "If the person shows you <strong>new evidence</strong> you have not seen, thank them, write it down, and review it after the meeting. Change the score only if the evidence supports it, and tell the client what changed and why. Never change a score just to please the room: that makes every other score in your report less believable."
      ],
      figure: { id: 'w13-challenge', caption: 'A challenge is a question about evidence. Show yours, or note theirs and review it later.' }
    },
    {
      title: 'When you do not know, and when it gets personal',
      body: [
        "If you do not know an answer, say so, and say how you would find out: 'I did not see the vendor contract for that service, so I can't say. I'll check with James and follow up in writing.' A confident guess that turns out wrong damages trust in the whole assessment.",
        "Never blame individuals. A <strong>stakeholder</strong> is anyone affected by the results, such as the CEO, managers, or the IT team, and some of them may be in the room. Talk about practices and fixes: 'the leaver process does not include a check that accounts were disabled', not 'Alicia forgot'."
      ],
      callout: { kind: 'real', title: 'Blaming one person backfires', text: "In October 2017, Equifax's former CEO told Congress that one employee had failed to pass on the notice to patch the Apache Struts flaw. The answer was widely criticized. The later GAO report (GAO-18-559) described several process failures, not one person's mistake. Leaders trust findings about how work is done, not about who to blame." }
    },
    {
      title: 'After the outbrief',
      body: [
        "Right after you present, write down every question you were asked while you still remember it. Note which answers were strong, which were weak, and where your evidence or wording could be better. That reflection is your last lab of the capstone, and it is the kind of note real assessors keep to improve the next engagement.",
        "This skill carries straight into job interviews. 'Walk me through a project' and 'how did you reach that conclusion?' are outbrief questions in disguise. Your answer should sound like today: what you found, the evidence, and what you recommended."
      ],
      callout: { kind: 'tip', title: 'At Northgate', text: "The staff playing Linda, James, or Helen may repeat what they told you in the interviews. Your contradictions log is your best preparation: for each one, know the evidence IDs by heart." }
    }
  ],
  check: [
    { q: "A leader says, 'Our IT guy told me everything is patched.' Your scan shows missing patches. What do you do?", opts: ["Agree and raise the score", "Say the IT Manager is wrong", "Respectfully show the scan and patch evidence", "Skip to the next slide"], ans: 2, why: "When words and evidence disagree, the evidence wins. Show it politely and keep the focus on the practice, not the person." },
    { q: "During the outbrief, a manager shows you a document you have not seen that may change a score. What is the best response?", opts: ["Change the score on the spot", "Refuse to look at it", "Thank them, note it, and review it after the meeting", "Ignore it because fieldwork is over"], ans: 2, why: "New evidence deserves a careful review. Update the score only if the evidence supports it, and explain the change in writing." },
    { q: "You are asked a question you cannot answer. What should you say?", opts: ["Give your best confident guess", "Say you don't know and how you will find out", "Say the question is out of scope", "Change the subject"], ans: 1, why: "Admitting what you do not know, and saying how you will find out, builds trust. A wrong guess can damage the whole report." },
    { q: "Which way of describing a finding is best in the room?", opts: ["'Alicia forgot to disable accounts.'", "'HR does not care about security.'", "'The leaver process has no check that accounts were disabled.'", "'Someone in HR made a mistake again.'"], ans: 2, why: "Talk about practices and fixes, not people. Blame makes people defensive and does not help the client fix the process." },
    { q: "Why should you never change a score just to please the room?", opts: ["Scores can never change once written", "It makes every other score less believable", "Clients are not allowed to disagree", "The workbook locks after submission"], ans: 1, why: "Scores rest on evidence. If one moves because someone was unhappy, the client cannot trust any of the others. Scores change only when new evidence supports it." }
  ]
};

COURSE_QUIZ.w13 = {
  title: 'Week 13 Quiz',
  pass: 80,
  questions: [
    { lesson: '13.1', q: "Who is the main audience for the Executive Summary?", opts: ["The part-time IT contractor who patches the servers", "Leaders, such as the CEO, who decide on money", "Outside attackers who might read the report", "The software vendors who sell tools to the client"], ans: 1, why: "The Executive Summary is written for leaders who decide on money and priorities. It uses plain language so they can understand the risk and act." },
    { lesson: '13.1', q: "How long should the Executive Summary be?", opts: ["Half a paragraph", "10 to 15 pages", "1 to 2 pages", "As long as the workbook"], ans: 2, why: "One to two pages. Busy leaders may read only this, so it must be short and focused on what matters most." },
    { lesson: '13.1', q: "Which belongs in the Executive Summary?", opts: ["All 41 questionnaire answers with their weights", "Raw Nessus output for every host", "Full copies of the evidence documents", "The overall result, top risks, and key next steps"], ans: 3, why: "The Executive Summary gives the big picture. Detail goes in the CSA report, the workbook, and the evidence files." },
    { lesson: '13.1', q: "What is the CSA report?", opts: ["A short report with results by function, risks, and a roadmap", "A single title slide for the outbrief", "The list of interview questions for the IT Manager", "A certificate the client must renew each year"], ans: 0, why: "The Cybersecurity Assessment Report covers scope and method, results by CSF function, key findings with evidence IDs, top risks, and the remediation roadmap." },
    { lesson: '13.1', q: "Which part of the deliverable pack holds all 41 scores and their evidence IDs?", opts: ["The Executive Summary", "The briefing deck", "The Heat Map sheet", "The questionnaire workbook"], ans: 3, why: "The workbook is the detailed record of every question, level, and evidence ID. The other documents summarize results that come from it." },
    { lesson: '13.1', q: "Your Executive Summary says overall compliance is 58%, but your deck says 61%. What should you do?", opts: ["Leave both; leaders rarely notice", "Use the workbook's number in both", "Use the higher number because it looks better", "Remove both numbers"], ans: 1, why: "Every document uses the same numbers, taken from the workbook Dashboard. Mismatched numbers make leaders doubt the whole assessment." },
    { lesson: '13.1', q: "The template asks for a simple comparison, such as a house with strong locks but no smoke alarms. Why?", opts: ["It gives a picture a leader can repeat to others", "It replaces the need for any numbers", "It makes the report longer", "Auditors require one in every report"], ans: 0, why: "A good comparison makes the result memorable and easy to retell. It sits alongside the numbers, not instead of them." },
    { lesson: '13.1', q: "Which next step is best sized for a 62-person company with one IT Manager?", opts: ["Build a 24/7 security operations center this month", "Turn on MFA for every remaining account within 30 days", "Replace every server and workstation at once", "Hire a team of five security engineers before anything else"], ans: 1, why: "Right-sized steps are cheap and quick and close a serious risk. Large projects can go in later roadmap phases." },
    { lesson: '13.1', q: "What does the Note on Scope in the Executive Summary say?", opts: ["What you assessed, what you used, and what you could not check", "The price of each recommended fix", "The names of staff who made mistakes", "A list of every open port"], ans: 0, why: "An honest scope note tells leaders what the results cover and what they do not, so no one reads more into them than they show." },
    { lesson: '13.2', q: "What is an outbrief?", opts: ["An interview held before fieldwork starts", "A private email that sends raw scan files", "A formal meeting to present results and take questions", "The list of 41 questionnaire questions"], ans: 2, why: "An outbrief is a formal presentation of assessment results to the client's leaders, followed by questions. Interviews happen earlier, during fieldwork." },
    { lesson: '13.2', q: "How many slides does a typical outbrief briefing deck have?", opts: ["2 to 3", "8 to 12", "25 to 30", "One per questionnaire question"], ans: 1, why: "About 8 to 12 slides, roughly one minute each, fits a 10 to 15 minute talk with time left for questions." },
    { lesson: '13.2', q: "How should you open your outbrief?", opts: ["With the history of the NIST framework", "With every tool you used during fieldwork", "With the lowest-weight questions", "With the overall result and the top risks"], ans: 3, why: "Lead with the most important message. Leaders want the overall result and the top risks first; the detail can follow." },
    { lesson: '13.2', q: "A slide is full of paragraphs. What is the main problem?", opts: ["The room reads instead of listening", "Slides cannot hold text", "It uses too many colors", "Paragraphs break the template"], ans: 0, why: "People read faster than you talk, so they stop listening. Keep one idea per slide and put your words in the speaker notes." },
    { lesson: '13.2', q: "What should the last slide of the deck ask leadership for?", opts: ["Feedback on the slide design", "A higher grade for the team", "The few decisions they should approve today", "A list of staff to interview again"], ans: 2, why: "End with decisions. Leaders should leave knowing exactly what you need them to approve." },
    { lesson: '13.3', q: "During your outbrief, a manager challenges one of your scores. What is the best response?", opts: ["Say the score is final and move on", "Change the score right away to avoid conflict", "Calmly point to the evidence IDs behind it", "Skip ahead to the next slide"], ans: 2, why: "Defending a score means showing the evidence and explaining how you chose the level. Refusing to discuss it, or changing it without new evidence, both hurt your credibility." },
    { lesson: '13.3', q: "You are asked a question and you do not know the answer. What should you do?", opts: ["Give a confident guess so the room keeps trusting you", "Say so, and explain how you would find out", "Tell them the question is out of scope", "Change the topic"], ans: 1, why: "Admitting what you do not know, and saying how you would find out, builds trust. A wrong guess can damage trust in the whole assessment." },
    { lesson: '13.3', q: "The IT Manager shows a document you have never seen during the outbrief. It may change a score. What should you do?", opts: ["Raise the score immediately in front of everyone", "Refuse to look at it because fieldwork is over", "Note it and review it after the meeting", "Ignore it and continue"], ans: 2, why: "Review new evidence carefully after the meeting and update the score only if the evidence supports it." },
    { lesson: '13.3', q: "A leader says, \"Our IT guy told me everything is patched.\" Your scan results show missing patches. How do you respond?", opts: ["Agree and raise the score to match", "Say the IT guy is lying to leadership", "Drop the finding to keep the peace", "Respectfully show what the scan results show"], ans: 3, why: "When words and evidence disagree, the evidence wins. Show the results politely and focus on the practice, not on blaming a person." },
    { lesson: '13.3', q: "Which statement is the best way to describe a weakness in the room?", opts: ["\"The leaver process has no step to confirm accounts are disabled.\"", "\"HR keeps forgetting to tell IT about leavers.\"", "\"Someone was careless with old accounts.\"", "\"The HR Manager does not take security seriously.\""], ans: 0, why: "Describe practices and fixes, not people. It keeps the room working on the problem instead of defending themselves." },
    { lesson: '13.3', q: "A job interviewer asks, 'How did you reach that conclusion in your capstone?' What is the strongest answer?", opts: ["\"My instructor told us the answer.\"", "\"It just seemed right from the interviews.\"", "\"Most students scored it that way.\"", "\"The evidence showed it: here is what I checked and what it said.\""], ans: 3, why: "Interviewers want the same thing as an outbrief audience: a conclusion backed by evidence you can name, and a clear recommendation." }
  ]
};
