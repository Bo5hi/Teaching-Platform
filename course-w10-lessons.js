// Week 10 talks (capstone, light week) + quiz. Shapes: docs/COURSE_V2.md
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['10.1'] = {
  id: '10.1', week: 10, title: 'Security architecture and zero trust', mins: 10, module: 'Capstone talk · SY0-701 1.2',
  intro: "For the next four weeks you work as an assessor on an MCCoE team. Your client is <strong>Northgate Supply Co.</strong>, a small, fictional wholesale company whose file server was broken into in April 2026. Before you judge anyone's security, you need a picture of what good design looks like today. This short talk gives you that picture: defense in depth, and the zero trust idea that replaced the old 'trust everyone inside' model.",
  sections: [
    {
      title: 'Architecture and defense in depth',
      body: [
        "<strong>Security architecture</strong> is the overall design of how systems, networks, and data are arranged and protected. It answers questions such as: which networks exist, what can talk to what, who can log in where, and what is watched.",
        "A good design uses <strong>defense in depth</strong>: several layers of controls, so that if one fails another still protects the data. A bank has locked doors, cameras, guards, and a vault. A network combines firewalls, access controls, monitoring, backups, and encryption. No single layer has to be perfect, but every layer has to exist and work."
      ],
      callout: { kind: 'real', title: 'Target, 2013', text: "Attackers first got into Target's network with credentials stolen from a heating and air-conditioning contractor. From there they reached the point-of-sale systems in the stores. The contractor only needed access to a billing and project system, but the network let that foothold lead much further. Layers that separate vendors from sensitive systems are exactly what defense in depth asks for." }
    },
    {
      title: 'The castle and moat problem',
      body: [
        "For many years, companies built networks like a castle: a strong wall (the firewall) and a moat around it, but few locks inside. Anyone already inside the network was trusted. Attackers learned that they only had to get past the wall once, for example with one stolen password. After that they could move around freely.",
        "Remote work, cloud email, and vendors who connect from outside have also blurred where the wall even is. A sales rep on hotel Wi-Fi, a vendor on a VPN, and a server in the office all need access, and 'inside' no longer means 'safe'."
      ],
      figure: { id: 'w10-castle-zt', caption: 'Castle and moat versus zero trust, and the five steps of Northgate\'s April 2026 incident with the check that was missing at each step.' }
    },
    {
      title: 'Zero trust: never trust, always verify',
      body: [
        "<strong>Zero trust</strong> replaces 'trusted because you are inside' with a simple rule: never trust, always verify. Every user and device must prove who it is for each sensitive request, whether it comes from inside or outside the network. NIST describes the idea in Special Publication 800-207, published in 2020.",
        "Zero trust rests on three habits. First, <strong>verify explicitly</strong>: check identity with strong authentication such as MFA (multifactor authentication), and look at the device and the context. Second, <strong>least privilege</strong>: give each person or system only the access the job needs, and no more. Third, <strong>assume breach</strong>: design as if an attacker is already inside, so you segment the network and watch for unusual activity.",
        "Zero trust does not remove firewalls or other controls. It changes the default from 'trusted unless proven bad' to 'not trusted until verified'."
      ],
      keyTerms: [
        { term: 'Security architecture', definition: 'The overall design of how systems, networks, and data are arranged and protected.' },
        { term: 'Defense in depth', definition: 'Using several layers of controls so that if one fails, others still protect the data.' },
        { term: 'Zero trust', definition: 'A model based on never trust, always verify: every access request is checked, wherever it comes from.' },
        { term: 'Least privilege', definition: 'Giving each user or system only the minimum access needed to do the job.' }
      ],
      callout: { kind: 'exam', title: 'Zero trust words in objective 1.2', text: "Security+ splits zero trust into a control plane and a data plane. The control plane makes decisions: adaptive identity, threat scope reduction, policy-driven access control, the policy engine, and the policy administrator. The data plane carries the traffic: implicit trust zones, the subject or system asking for access, and the policy enforcement point that allows or blocks it. If a question asks which part decides, think policy engine; which part blocks or allows the connection, think policy enforcement point." }
    },
    {
      title: 'Using the lens at Northgate',
      body: [
        "You will use zero trust as a lens, not as a checklist. Read the client brief and ask, at every step of the April attack: why was one password enough? The attacker used a phished password with no MFA, reached the file server over SSH (Secure Shell, a remote login tool) through an old firewall port-forward, gave the account full admin rights through a bad setting, and hid a new account and a scheduled task. Each step is a place where verification or least privilege was missing.",
        "In Lab 10.2 you draw Northgate's network and trace this path. The things you mark become questions to check during fieldwork: does every remote login now need MFA? Is remote access really VPN-only? Who has admin rights? Would a new hidden account raise an alert today?"
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline, 2021', text: "Colonial Pipeline's CEO told the US Senate in June 2021 that the attackers got in through a VPN account that did not use multifactor authentication. One password was enough. Northgate's April incident started the same way, which is why the insurer now asks about MFA." }
    }
  ],
  check: [
    { q: "What is the core rule of zero trust?", opts: ["Trust any device the company owns", "Never trust, always verify", "Verify users once a year", "Trust anyone inside the firewall"], ans: 1, why: "Zero trust checks every sensitive request, wherever it comes from. Owning the device or being inside the network does not earn automatic trust." },
    { q: "Northgate's attacker logged in to the file server from the internet with one stolen password. Which zero trust habit would most directly have stopped that login?", opts: ["Verify explicitly, for example with MFA on every remote login", "Buy a faster firewall", "Back up the file server more often", "Write a longer password policy"], ans: 0, why: "Verifying identity with a second factor on every remote login means a stolen password alone is not enough. Backups and policies help elsewhere, but they do not stop the login." },
    { q: "Which idea means several layers of controls, so that one failure does not expose the data?", opts: ["Least privilege", "Zero trust", "Defense in depth", "Corroboration"], ans: 2, why: "Defense in depth stacks layers such as firewalls, access control, monitoring, and backups. Least privilege limits each person's access; zero trust verifies each request." },
    { q: "In the zero trust data plane, which component actually allows or blocks a connection?", opts: ["Policy engine", "Policy enforcement point", "Policy administrator", "Adaptive identity"], ans: 1, why: "The policy engine decides and the administrator passes the decision on, but the policy enforcement point is where traffic is allowed or blocked." }
  ]
};

COURSE_LESSONS['10.2'] = {
  id: '10.2', week: 10, title: 'NIST CSF 2.0 and the weighted questionnaire', mins: 10, module: 'Capstone talk · SY0-701 5.4, 5.5',
  intro: "Every MCCoE assessment follows the same method, so two assessors looking at the same client reach the same score. The method is a weighted questionnaire built on the NIST Cybersecurity Framework. This talk explains the framework, how the 41 questions are organized, what a weight does, and the five levels you will use to answer each question.",
  sections: [
    {
      title: 'The NIST Cybersecurity Framework',
      body: [
        "The <strong>NIST Cybersecurity Framework (CSF)</strong> is a widely used guide from the US National Institute of Standards and Technology. It is not a law. It is a flexible way to organize security work into plain categories, which makes it a good tool for assessing a company and explaining results to leaders who are not technical.",
        "CSF 2.0 has six <strong>functions</strong>. <strong>Govern</strong>: strategy, roles, policies, and risk decisions. <strong>Identify</strong>: knowing your assets, data, and risks. <strong>Protect</strong>: safeguards that prevent harm, such as access control, training, and patching. <strong>Detect</strong>: noticing that something bad is happening. <strong>Respond</strong>: acting during an incident to limit damage. <strong>Recover</strong>: restoring normal operations afterward. Each function is split into <strong>categories</strong> with short codes, such as GV.PO for policy or PR.AA for identity and access."
      ],
      callout: { kind: 'real', title: 'CSF 2.0 added Govern', text: "NIST released CSF 2.0 in February 2024. The biggest change was a new sixth function, Govern, placed at the center of the other five. It reflects a lesson from many breaches: technical controls drift when nobody in leadership owns cyber risk, sets the rules, and pays for the work." }
    },
    {
      title: 'The 41-question workbook',
      body: [
        "MCCoE turns the CSF into a questionnaire. The student version has 41 questions in an Excel workbook, <code>northgate-questionnaire.xlsx</code>. Each question asks about one practice, for example: 'Is multi-factor authentication (MFA) required for all user accounts?' Each question belongs to one function and one category, so results can be added up by function.",
        "Each question also has a <strong>weight</strong>: a number that shows how important the practice is. The scale runs from 3 (lower importance) to 10 (very important); in the Northgate workbook the weights run from 5 to 10. A question with weight 10 counts twice as much as one with weight 5. The weights are part of the method, so never change them."
      ],
      figure: { id: 'w10-csf-weights', caption: 'The Northgate workbook by function: number of questions and total weight. Protect carries the most weight; Respond and Recover the least.' }
    },
    {
      title: 'Five levels for every question',
      body: [
        "You answer every question with one of five levels. Each level is a judgment, but the judgment must rest on evidence."
      ],
      table: {
        head: ['Level', 'Value', 'Choose it when'],
        rows: [
          ['Fully', '100%', 'The practice is in place, written down where needed, working everywhere, and proven by evidence.'],
          ['Almost', '75%', 'In place and working, with only small gaps.'],
          ['Mostly', '50%', 'Partly in place: real gaps, or it covers only some people or systems.'],
          ['Somewhat', '25%', 'Informal, just started, or very little evidence.'],
          ['Not Compliant', '0%', 'Not in place, or no evidence at all.']
        ]
      },
      callout: { kind: 'tip', title: 'They said so is not proof', text: "A person telling you a practice exists earns no credit on its own. No evidence means no credit. You will gather that evidence in Week 11." }
    },
    {
      title: 'Why the weights matter: weighted compliance',
      body: [
        "The workbook turns your levels into a score called <strong>weighted compliance</strong>: the sum of (weight x level) divided by the sum of the weights. Example: three questions with weights 10, 6, and 4 score Fully (100%), Mostly (50%), and Not Compliant (0%). Weight x level gives 1,000 + 300 + 0 = 1,300. The weights add up to 20. So 1,300 / 20 = 65%.",
        "Notice what happened: the weight-10 question pulled the score up far more than the weight-4 question pulled it down. A gap on a heavy question hurts the most. In Week 12 you will turn compliance into a maturity level and a hygiene rating; for now, just know that heavy questions deserve your best evidence."
      ],
      keyTerms: [
        { term: 'NIST CSF 2.0', definition: 'A widely used framework that organizes cybersecurity into six functions: Govern, Identify, Protect, Detect, Respond, and Recover.' },
        { term: 'Function', definition: 'One of the six top-level areas of the CSF, such as Protect or Detect.' },
        { term: 'Weight', definition: 'A number on a question showing how much it counts. Weight 10 counts twice as much as weight 5.' },
        { term: 'Weighted compliance', definition: 'Sum of (weight x level) divided by sum of weights, for one function or for all 41 questions.' }
      ]
    }
  ],
  check: [
    { q: "Which list names the six functions of NIST CSF 2.0?", opts: ["Identify, Protect, Detect, Respond, Recover, Report", "Govern, Identify, Protect, Detect, Respond, Recover", "Plan, Identify, Protect, Monitor, Respond, Recover", "Govern, Identify, Prevent, Detect, Respond, Restore"], ans: 1, why: "CSF 2.0 has Govern, Identify, Protect, Detect, Respond, and Recover. Report, Prevent, Monitor, and Restore are not function names." },
    { q: "A question has weight 10. Another has weight 5. Both are scored Somewhat. Which statement is true?", opts: ["They affect the score equally", "The weight-10 question counts twice as much", "The weight-5 question counts twice as much", "Weights only matter for Fully answers"], ans: 1, why: "Weight multiplies the level, so the weight-10 question contributes twice as much to the total, good or bad." },
    { q: "Two questions have weights 8 and 2. The first is Fully (100%) and the second is Not Compliant (0%). What is the weighted compliance?", opts: ["50%", "80%", "20%", "100%"], ans: 1, why: "Weight x level gives 800 + 0 = 800. The weights add to 10. 800 / 10 = 80%." },
    { q: "Which level fits a practice that is done, but only informally and with almost no evidence?", opts: ["Almost (75%)", "Mostly (50%)", "Somewhat (25%)", "Fully (100%)"], ans: 2, why: "Somewhat is for informal, just-started, or barely evidenced practices. Mostly needs a real but partial practice." }
  ]
};

COURSE_LESSONS['10.3'] = {
  id: '10.3', week: 10, title: 'Planning fieldwork: the kickoff and the interviews', mins: 10, module: 'Capstone talk · SY0-701 5.5',
  intro: "Fieldwork is the part of an assessment where you gather evidence: you talk to people, read their documents, and review scan results. It starts with a kickoff meeting and depends on good interviews. Northgate's staff are busy, and in the simulator you get exactly one timed interview with each person. This talk shows you how to plan so that the time produces evidence you can score.",
  sections: [
    {
      title: 'The kickoff meeting',
      body: [
        "Real assessments open with a short <strong>kickoff meeting</strong> with the client. It sets expectations on both sides. A good kickoff confirms four things: the <strong>scope</strong> (what is being assessed, here the six CSF functions across Northgate's office, warehouse, servers, cloud email, and vendors), the <strong>schedule</strong> (fieldwork dates, report date, outbrief), the <strong>rules of engagement</strong> (what the team may and may not do, such as no logging in to systems), and <strong>what you need</strong> from the client (people's time, documents, a point of contact).",
        "The kickoff also builds trust. Linda Harper asked for an honest picture. James Chen will be your main contact and is doing almost all IT alone. Starting with respect, and making clear the team assesses practices and not people, makes the interviews go better."
      ],
      callout: { kind: 'exam', title: 'Audits and assessments (objective 5.5)', text: "Security+ separates internal assessments (done by the organization itself, such as a self-assessment or internal audit) from external ones (done by an outside party, such as a regulator or an independent third-party assessor). The MCCoE team is an independent outside assessor hired by Northgate's CEO." }
    },
    {
      title: 'Questions that produce evidence',
      body: [
        "The interview simulator scores the questions you choose. Four kinds help you. An <strong>open question</strong> needs a full answer, often starting with how, what, who, or tell me about. A <strong>follow-up</strong> digs into the last answer: how many, when was the last time, who else can do that. A <strong>request for proof</strong> asks to see it: 'Can you share the report that shows that?' A <strong>closing question</strong> invites surprises: 'Is there anything else we should know?'",
        "Two kinds waste the clock. A <strong>too broad</strong> question ('How is security going?') gets a general answer you cannot score. A <strong>leading</strong> or yes/no question ('You test your backups, right?') suggests the answer, so people simply agree."
      ],
      figure: { id: 'w10-question-types', caption: 'The question types the interview simulator rewards and the two it penalizes.' }
    },
    {
      title: 'Who knows what',
      body: [
        "Plan each interview around what that person actually knows. Map your questions to questionnaire numbers so every heavy question has someone to answer it."
      ],
      table: {
        head: ['Interview', 'Person', 'Clock', 'Good topics'],
        rows: [
          ['INT-01', 'Linda Harper, CEO', '20 min', 'Who owns security, risk appetite, board reporting, the IR plan, notification, continuity'],
          ['INT-02', 'James Chen, IT Manager', '30 min', 'Assets, accounts and MFA, remote access, patching, logging and alerts, backups, the April incident'],
          ['INT-03', 'Alicia Brown, HR Manager', '20 min', 'Policy acknowledgements, new hires and leavers, HR data, training'],
          ['INT-04', 'Helen Ortiz, Finance Manager', '20 min', 'Finance data, payments and bank changes, MFA, insurance, vendor contracts'],
          ['INT-05', 'Tunde Okafor, Warehouse Manager', '20 min', 'Shared logins, warehouse software and its vendor, MFA for warehouse staff, downtime']
        ]
      }
    },
    {
      title: 'Rules of the simulator',
      body: [
        "The clock is real. It starts when you press Start and keeps running if you leave the page. When it ends, the interview is over and cannot be restarted. Answers appear at speaking speed, so long answers use time. When someone shares a document, an evidence ID such as EV-04 appears; write it in your notes next to the question that produced it.",
        "Ask the most important questions first, and after each claim ask for proof. Listen for strong words such as 'everyone', 'always', and 'the same day': those are the claims most worth checking. Never blame anyone. People share more when they do not feel judged."
      ],
      keyTerms: [
        { term: 'Fieldwork', definition: 'The evidence-gathering part of an assessment: interviews, document review, and scans.' },
        { term: 'Kickoff meeting', definition: 'The opening meeting that confirms scope, schedule, rules of engagement, and what the assessors need.' },
        { term: 'Open question', definition: 'A question that invites a full explanation instead of a yes or no.' },
        { term: 'Evidence ID', definition: 'A short label for a piece of proof, such as EV-04 (document), INT-02 (interview), or SCAN-03 (scan).' }
      ]
    }
  ],
  check: [
    { q: "You are planning your interview with James Chen. Which is the best open question?", opts: ["Is your access process written down?", "How does a new employee get file server access?", "Do new employees get access on day one?", "You remove leavers quickly, right?"], ans: 1, why: "An open question invites a full explanation of how something works. The others can be answered yes or no, and the last one is leading." },
    { q: "A manager says, 'We back up every server each night.' What should you do next?", opts: ["Score backups as Fully", "Politely ask to see a backup report", "Say you do not believe it", "Move on, the answer is clear"], ans: 1, why: "A claim needs proof. Asking politely for the report gives you an evidence ID; scoring on the claim alone would be only an opinion." },
    { q: "Which of these belongs in a kickoff meeting?", opts: ["The final compliance score", "Confirming scope, schedule, and rules of engagement", "Each person's interview transcript", "The POA&M milestones"], ans: 1, why: "A kickoff sets expectations before fieldwork starts. Scores, transcripts, and POA&M items come later." },
    { q: "Which interview is most likely to tell you how leavers' accounts are removed?", opts: ["INT-03 Alicia Brown, HR Manager", "INT-04 Helen Ortiz, Finance Manager", "INT-05 Tunde Okafor, Warehouse Manager", "None; you can only learn it from scans"], ans: 0, why: "HR handles new hires and leavers and tells IT when someone leaves, so Alicia Brown is the right person to ask, and James can confirm the technical side." }
  ]
};

COURSE_QUIZ.w10 = {
  title: 'Week 10 Quiz',
  pass: 80,
  questions: [
    { lesson: '10.1', q: "What is the core rule of zero trust?", opts: ["Trust every user inside the network", "Verify users once a year", "Never trust, always verify", "Trust any device the company owns"], ans: 2, why: "Zero trust checks every access request. Being inside the network or using a company device does not earn automatic trust." },
    { lesson: '10.1', q: "A company uses a firewall, access controls, monitoring, and encryption, so if one control fails another still protects the data. What is this idea called?", opts: ["Zero trust", "Least privilege", "Corroboration", "Defense in depth"], ans: 3, why: "Defense in depth means several layers. Least privilege limits access, and zero trust verifies every request." },
    { lesson: '10.1', q: "An employee is already on the office network. Under zero trust, what happens when she asks to open a sensitive file?", opts: ["She must still prove who she is", "She gets in because she is inside", "She gets in if she has opened it before", "She waits until a manager logs in"], ans: 0, why: "Zero trust checks every sensitive request, inside or outside the network." },
    { lesson: '10.1', q: "A new payroll clerk gets access to payroll records only, not to sales or IT systems. Which principle is this?", opts: ["Defense in depth", "Least privilege", "Open access", "Security architecture"], ans: 1, why: "Least privilege gives each person only the access the job needs." },
    { lesson: '10.1', q: "Older networks are compared to a castle with a strong wall but few locks inside. What was the main weakness?", opts: ["The wall cost too much", "Every request was checked", "Attackers who got past the wall could move freely", "Staff could not reach the internet"], ans: 2, why: "Once inside, the attacker was trusted. Checking every request is what zero trust adds." },
    { lesson: '10.1', q: "Northgate's April attacker used a phished password to reach the file server over SSH through an old port-forward. Which pair of controls would have blocked that path?", opts: ["Longer passwords and a new antivirus product", "MFA on remote logins and remote access only through the VPN", "Nightly backups and a bigger server", "Annual training and a printed policy"], ans: 1, why: "The path needed only a password and an exposed SSH port. MFA and VPN-only remote access each close it; the other options do not stop the login." },
    { lesson: '10.2', q: "Which list names the six functions of NIST CSF 2.0?", opts: ["Govern, Identify, Protect, Detect, Respond, Recover", "Identify, Protect, Detect, Respond, Recover, Report", "Govern, Identify, Prevent, Detect, Respond, Restore", "Plan, Identify, Protect, Monitor, Respond, Recover"], ans: 0, why: "CSF 2.0 has Govern, Identify, Protect, Detect, Respond, and Recover." },
    { lesson: '10.2', q: "Leaders write a cybersecurity policy and decide who is responsible for cyber risk. Which CSF function is this?", opts: ["Identify", "Protect", "Respond", "Govern"], ans: 3, why: "Govern covers strategy, roles, policies, and risk decisions." },
    { lesson: '10.2', q: "In the MCCoE questionnaire, what does a question's weight show?", opts: ["How many staff answered it", "How much the question counts in the score", "Which function it belongs to", "How long it takes to check"], ans: 1, why: "The weight shows importance. A weight-10 question counts twice as much as a weight-5 question." },
    { lesson: '10.2', q: "Which list shows the five levels from highest to lowest?", opts: ["Fully, Mostly, Almost, Somewhat, Not Compliant", "Almost, Fully, Mostly, Somewhat, Not Compliant", "Fully, Almost, Mostly, Somewhat, Not Compliant", "Fully, Almost, Somewhat, Mostly, Not Compliant"], ans: 2, why: "Fully 100%, Almost 75%, Mostly 50%, Somewhat 25%, Not Compliant 0%." },
    { lesson: '10.2', q: "A question is scored Mostly. What value does it add to the calculation?", opts: ["75%", "25%", "60%", "50%"], ans: 3, why: "Mostly is 50%. Almost is 75% and Somewhat is 25%." },
    { lesson: '10.2', q: "A company says it reviews user access, but nothing is written down and it happens only when someone remembers. Which level fits best?", opts: ["Somewhat (25%)", "Mostly (50%)", "Almost (75%)", "Fully (100%)"], ans: 0, why: "Somewhat is for practices that are informal or only started." },
    { lesson: '10.2', q: "Why does each questionnaire question belong to one CSF function?", opts: ["So every function has the same weight", "So clients can skip some functions", "So results can be scored by function", "So each person answers one function"], ans: 2, why: "Linking questions to functions lets the workbook show which areas are strong and which are weak." },
    { lesson: '10.2', q: "Question A has weight 10 and is Fully (100%). Question B has weight 5 and is Not Compliant (0%). What is the weighted compliance?", opts: ["50%", "67%", "33%", "100%"], ans: 1, why: "Weight x level gives 1,000 + 0 = 1,000. The weights add to 15. 1,000 / 15 is about 67%." },
    { lesson: '10.2', q: "Which CSF function does the practice 'backups are restore-tested at planned intervals' belong to?", opts: ["Recover", "Detect", "Govern", "Identify"], ans: 0, why: "Restoring systems and data after an incident, and proving you can, is Recover." },
    { lesson: '10.3', q: "You are planning your interview with James Chen. Which is the best open question?", opts: ["Is your access process written down?", "Have you ever given someone too much access?", "Do new employees get access on day one?", "How does a new employee get file server access?"], ans: 3, why: "It invites a full explanation. The others can be answered yes or no." },
    { lesson: '10.3', q: "During an interview, a manager says, 'We back up every server each night.' What should you do next?", opts: ["Score the backup question as Fully", "Politely ask to see a backup report", "Tell the manager you do not believe it", "Skip the topic"], ans: 1, why: "You ask for proof and record its evidence ID. Scoring on the claim alone is only an opinion." },
    { lesson: '10.3', q: "In the interview simulator you get one timed interview with each person and cannot restart it. What should you do before pressing Start?", opts: ["Nothing; improvise to sound natural", "Read every evidence file first", "Plan your questions, mapped to questionnaire numbers", "Ask a classmate for their transcript"], ans: 2, why: "Time is limited and there is one attempt, so a plan that puts the heavy questions first gets the most evidence." },
    { lesson: '10.3', q: "Which question is leading?", opts: ["What happens when an alert fires at 2 a.m.?", "Who can restore a server when James is away?", "You test your backups every quarter, right?", "How do you decide which patches to install first?"], ans: 2, why: "It suggests the answer, so people tend to agree. The others are open questions." },
    { lesson: '10.3', q: "What is the main purpose of a kickoff meeting?", opts: ["To present the final scores", "To confirm scope, schedule, rules of engagement, and what the team needs", "To interview every staff member at once", "To run the vulnerability scan"], ans: 1, why: "The kickoff sets expectations before fieldwork. Scores come at the outbrief, and scans and interviews come during fieldwork." }
  ]
};
