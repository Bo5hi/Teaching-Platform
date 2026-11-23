// Week 1 lessons + quiz. Shapes: docs/COURSE_V2.md
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['1.0'] = {
  id: '1.0', week: 1, title: 'Welcome to Cedar Creek', mins: 10, module: 'Course orientation',
  intro: "This is your first morning as the first security analyst Cedar Creek Industries has ever hired. Before you learn a single security term, you need to know the company you are protecting, the people you will work with, and how this course runs. Every lesson, lab, and project in Weeks 1 to 5 takes place here.",
  sections: [
    {
      title: 'Who Cedar Creek is',
      body: [
        "Cedar Creek Industries is a family-founded manufacturer in southwest Missouri. It makes precision metal parts, such as brackets, housings, and hydraulic fittings, for companies that build farm and construction equipment.",
        "About 310 people work here. Roughly 70 work in the two-floor <strong>Office building</strong>. About 240 work in the <strong>Plant</strong> across two shifts, on production Lines 1 to 3, in the warehouse, and at the loading dock. A covered walkway joins the two buildings.",
        "Customers send Cedar Creek purchase orders and engineering drawings. Those drawings and customer specifications are the company's most valuable data, its 'crown jewels'. Human resources (HR) and payroll data come next. Email, file storage, and chat run on Microsoft 365 under the domain cedarcreek-ind.com.",
        "Until now, information technology (IT) has worked in 'keep the lights on' mode: fix what breaks and keep production running. Nobody has owned security full time. That is your job now."
      ]
    },
    {
      title: 'Why they hired you',
      body: [
        "In August, Amanda Singh in Accounts Payable received an email that appeared to come from the Chief Financial Officer (CFO), Greg Palmer. It asked her to send an urgent, confidential wire transfer of $48,750 to a new vendor bank account. It told her not to call because he was in back-to-back meetings. The reply-to address was g.palmer@cedarcreek-lnd.com. Look closely: 'lnd' in place of 'ind'.",
        "This is called business email compromise (BEC). Amanda thought the message felt convincing, but she reported it before sending any money. The company lost nothing. Leadership understood how close it came, and Greg Palmer became the sponsor of a new security program. You are the first hire in that program."
      ],
      callout: { kind: 'cedar', title: 'What the near-miss taught leadership', text: "One careful employee stopped a $48,750 loss. Leadership does not want to depend on luck again. Your work in this course builds the controls, records, and habits that make the next attempt fail on purpose." }
    },
    {
      title: 'Meet your team',
      body: [
        "Your manager is <strong>Marcus Reyes</strong>, the IT Manager. He has been at Cedar Creek for 14 years and runs the three-person IT team. He knows the history behind every odd setup you will find. These are the people you will work with most in Weeks 1 to 5."
      ],
      table: {
        head: ['Person', 'Role', 'Why you will talk to them'],
        rows: [
          ['Marcus Reyes', 'IT Manager (your manager)', 'Sets your priorities and walks the campus with you on day one.'],
          ['Dee Ortiz', 'Systems Administrator', 'Runs the servers, backups, and Active Directory. Knows where everything is.'],
          ['Jordan Pike', 'Help Desk Technician', 'First-line support. Also manages the badge system.'],
          ['Greg Palmer', 'CFO', 'Sponsor of the security program. Busy, and wants plain answers.'],
          ['Tom Becker', 'Engineering Manager', 'Owns the engineering file server and computer-aided design (CAD) data.'],
          ['Rosa Medina', 'HR Manager', 'Owns personnel files and the HR file server.'],
          ['Walt Henley', 'Plant Manager', 'Cares about production uptime above all.'],
          ['Nina Brooks', 'Receptionist / Office Coordinator', 'Runs the lobby and the visitor process.']
        ]
      }
    },
    {
      title: 'Your 15 weeks',
      body: [
        "Weeks 1 to 5 happen at Cedar Creek. Each one teaches a block of Security+ material and ends with a mock project: a realistic piece of work a junior analyst would hand to Marcus. Weeks 4 and 5 are a two-week mock penetration test.",
        "Weeks 1 to 8 also each carry a real-world case study on Day 2. You study four real breaches, two weeks each: first a deep dive into what happened, then the frameworks and an executive summary.",
        "After that you work Cedar Creek's SOC ticket queue for a full week, run a four-week security assessment for a second client, Northgate Supply Co., and finish with Security+ review and a full mock exam."
      ],
      table: {
        head: ['Week', 'Topic', 'Hands-on project', 'Case study'],
        rows: [
          ['1', 'Security foundations', 'Mock Control Audit', 'Target (2013), deep dive'],
          ['2', 'Cryptography and certificates', 'Mock Secure File Exchange', 'Target, frameworks'],
          ['3', 'Identity, access, and data protection', 'Mock Access Review', 'Colonial Pipeline (2021), deep dive'],
          ['4', 'Secure networks, cloud, and wireless', 'Mock Pentest, part 1: recon and scanning', 'Colonial Pipeline, frameworks'],
          ['5', 'Vulnerabilities and attacks', 'Mock Pentest, part 2: exploitation and report', 'SolarWinds (2020), deep dive'],
          ['6', 'Human factors', 'Password and phishing labs', 'SolarWinds, frameworks'],
          ['7', 'Defensive security and tools', 'Blue Team Lab, phases 1-3', 'Equifax (2017), deep dive'],
          ['8', 'Incident response', 'Blue Team Lab, phases 4-5', 'Equifax, frameworks'],
          ['9', 'SOC operations', 'A full week of Cedar Creek tickets', ''],
          ['10-13', 'Capstone', 'Northgate security assessment and outbrief', ''],
          ['14-15', 'Security+ review and mock exam', 'PBQ labs and the full mock exam', '']
        ]
      }
    },
    {
      title: 'How a class day works',
      body: [
        "Class meets two days a week, with about four hours of work each day. Open <strong>This Week</strong> and work the numbered steps in order. Each step opens the tool you need."
      ],
      list: [
        "<strong>Lessons</strong> teach the ideas. Each ends with a five-question knowledge check.",
        "<strong>Labs</strong> are hands-on. Most run in your own Kali Linux virtual machine, which you build today.",
        "<strong>Practice</strong> sets, such as the Control Sorter and acronym flashcards, give you fast repetition.",
        "<strong>The mock project</strong> pulls the week together. This week you walk the campus with Marcus and write Cedar Creek's first control audit."
      ]
    },
    {
      title: 'How grading works',
      body: [
        "Knowledge checks show you and your instructor what stuck and what needs another look. The weekly quiz has 20 questions. You need 80% to pass, and retakes are allowed. The mock project is graded with a rubric: five criteria, each worth five points, for 25 points total."
      ],
      callout: { kind: 'tip', title: 'Read the rubric first', text: "Before you start a mock project, read its five rubric criteria. They tell you exactly what a strong submission contains." }
    }
  ],
  check: [
    { q: "Which Cedar Creek data does the company treat as its most valuable?", opts: ["Marketing brochures and the public website", "Cafeteria menus and the shift schedule", "Engineering drawings and customer specifications", "The guest Wi-Fi password"], ans: 2, why: "Drawings and customer specs are the crown jewels. HR and payroll data come second." },
    { q: "What event led Cedar Creek leadership to start a security program and hire you?", opts: ["A near-miss business email compromise aimed at Accounts Payable", "A ransomware attack that stopped Line 2", "A stolen laptop in Finance", "A failed regulatory audit"], ans: 0, why: "Amanda Singh received a fake 'CFO' wire request from a look-alike domain and reported it before sending money." },
    { q: "You need to know where the weekly backup tapes are kept and how Active Directory is set up. Who is the best person to ask?", opts: ["Nina Brooks", "Walt Henley", "Laura Kim", "Dee Ortiz"], ans: 3, why: "Dee Ortiz is the Systems Administrator who manages servers, backups, and Active Directory." },
    { q: "What score do you need to pass the weekly quiz?", opts: ["60%", "70%", "80%", "100%"], ans: 2, why: "The weekly quiz pass mark is 80%, and retakes are allowed." },
    { q: "How is each weekly mock project graded?", opts: ["Pass or fail only", "A rubric of five criteria worth five points each, for 25 points", "Automatically by the number of words written", "By the weekly quiz score"], ans: 1, why: "Every mock project uses a 25-point rubric: five criteria, five points each." }
  ]
};

COURSE_LESSONS['1.1'] = {
  id: '1.1', week: 1, title: 'Security fundamentals', mins: 20, module: 'CertMaster Module 1',
  intro: "Marcus asks you a simple question on your first morning: 'What are we actually protecting, and how will we know if we are doing it well?' This lesson gives you the vocabulary to answer. The CIA triad, non-repudiation, and AAA describe what security is for. The NIST Cybersecurity Framework and gap analysis describe how security work gets organized. You will use every one of these ideas in the control audit this week.",
  sections: [
    {
      title: 'Information security and cybersecurity',
      body: [
        "<strong>Information security</strong> protects information in every form it takes. That includes files on a server, a payroll printout in a printer tray, and a drawing on a plotter. The goal is to keep information from being seen, changed, or destroyed by the wrong people, and to keep it ready for the right people.",
        "<strong>Cybersecurity</strong> is the part of that work focused on computer systems and networks: servers, laptops, cloud services, firewalls, and the data that moves between them.",
        "At Cedar Creek you need both. A confidential drawing can leak through a hacked file server. It can also leak because someone left a printed copy on a shared printer. A security analyst cares about both paths."
      ],
      keyTerms: [
        { term: 'Information security', definition: 'Protecting information in any form (digital, paper, spoken) from unauthorized access, change, or loss.' },
        { term: 'Cybersecurity', definition: 'Protecting computer systems, networks, and the data on them from attack, damage, and unauthorized access.' }
      ]
    },
    {
      title: 'The CIA triad',
      figure: { id: 'cia-triad', caption: 'The CIA triad: each goal asks a different question, and each has a Cedar Creek example.' },
      body: [
        "Almost every security goal fits into one of three words: confidentiality, integrity, and availability. Together they are called the <strong>CIA triad</strong>. When you look at any system, ask what would hurt more: someone reading the data, someone changing it, or the system going down.",
        "<strong>Confidentiality</strong> means only authorized people can read the information. Cedar Creek's engineering drawings on ENG-FS01 are the clearest example. If a competitor obtained them, Cedar Creek could lose customers who trusted it with their designs. Controls that protect confidentiality include file permissions, encryption, and privacy filters on monitors.",
        "<strong>Integrity</strong> means information is accurate and has not been changed without permission. Payroll is the clearest example. If someone quietly changed the bank account number on an employee's payroll record, the paycheck would go to the attacker. Nobody would read anything secret, yet real damage would follow. Controls that protect integrity include hashing, digital signatures, change approvals, and limiting who can edit records.",
        "<strong>Availability</strong> means systems and data are there when authorized people need them. On the plant floor, availability is everything. PLANT-PC-07 is the operator PC that runs Line 2. If it stops, the line stops, and Walt Henley's shift stops making parts. Controls that protect availability include backups, redundant power, and patching that keeps systems stable.",
        "The three goals can pull against each other. Walt wants PLANT-PC-07 never to lock its screen so the line keeps running (availability). An unlocked shared screen means anyone walking by can use it (confidentiality and integrity suffer). Much of security work is finding a balance the business can accept."
      ],
      table: {
        head: ['Goal', 'Question it answers', 'Cedar Creek example', 'Example controls'],
        rows: [
          ['Confidentiality', 'Can only the right people read it?', 'Engineering drawings and customer specs on ENG-FS01', 'Permissions, encryption, privacy filters'],
          ['Integrity', 'Is it accurate and unchanged?', 'Payroll exports on FS-HR01 and the payroll service', 'Hashing, digital signatures, edit restrictions'],
          ['Availability', 'Is it there when needed?', 'PLANT-PC-07 keeping Line 2 running', 'Backups, uninterruptible power supply (UPS) and generator, redundancy']
        ]
      },
      keyTerms: [
        { term: 'Confidentiality', definition: 'Only authorized people can access the information.' },
        { term: 'Integrity', definition: 'Information stays accurate and is changed only by authorized people in authorized ways.' },
        { term: 'Availability', definition: 'Systems and data are accessible to authorized users when they need them.' }
      ]
    },
    {
      title: 'Non-repudiation',
      body: [
        "To <em>repudiate</em> something means to deny it. <strong>Non-repudiation</strong> means a person cannot believably deny an action they took, such as sending a message or approving a change. The evidence ties the action to one specific person.",
        "The usual technical tool for non-repudiation is a <strong>digital signature</strong>. You will study how it works in Week 2. In short, the sender signs with a private key that only they hold. Anyone can check the signature with the matching public key. If the signature checks out, only the holder of that private key could have signed.",
        "Non-repudiation also depends on how accounts are used. If ten people share one login, the logs can show what the account did. They cannot show which person did it. That breaks non-repudiation, however good the logging is."
      ],
      callout: { kind: 'cedar', title: 'The ccadmin notebook', text: "In the IT office, a spiral notebook beside IT-ADMIN-01 lists the shared admin account ccadmin and its password. If someone used ccadmin to change a firewall rule on FW-CORE, the log would say 'ccadmin did it'. It could have been anyone who has seen that notebook. That is a non-repudiation failure, and you will log it as a gap in the audit." }
    },
    {
      title: 'AAA: authentication, authorization, and accounting',
      figure: { id: 'aaa-flow', caption: 'AAA always runs in this order. The server room door shows all three.' },
      body: [
        "Every time someone or something uses a system, three questions get answered. Together they are called <strong>AAA</strong>.",
        "<strong>Authentication</strong> asks: are you who you claim to be? You make a claim (a username) and then prove it with one or more factors. The factor types are something you know (a password or personal identification number, PIN), something you have (a badge, a phone app, a hardware key), and something you are (a fingerprint or face). Using two or more different factor types is multifactor authentication (MFA). The server room door at Cedar Creek needs a badge (something you have) plus a PIN (something you know), so it uses two factors.",
        "People are not the only things that authenticate. Systems and devices do too. A Windows PC that joins a domain gets its own computer account in Active Directory. A web server proves its identity to your browser with a digital certificate. A network can require a device certificate before a laptop connects. Authenticating devices matters because an attacker's laptop plugged into a spare network jack should not be treated like a company laptop.",
        "<strong>Authorization</strong> asks: now that we know who you are, what are you allowed to do? Logging in to the domain does not mean you can open every share. The ENG-FS01 shares check your account before allowing access. Authorization follows a model. The common ones are discretionary access control (DAC), mandatory access control (MAC), role-based access control (RBAC), rule-based access control, and attribute-based access control (ABAC). For now, just recognize the names. Week 3 covers them in depth.",
        "<strong>Accounting</strong> asks: what did you do? It is the record-keeping part: logs, audit trails, and timestamps. The badge controller records every door swipe. Microsoft 365 records every sign-in. Accounting is what lets you investigate later, and it is what makes non-repudiation possible when accounts are not shared."
      ],
      keyTerms: [
        { term: 'Authentication', definition: 'Proving an identity claim, using factors such as something you know, have, or are.' },
        { term: 'Authorization', definition: 'Deciding what an authenticated identity is permitted to access or do.' },
        { term: 'Accounting', definition: 'Recording what identities do, through logs and audit trails, so actions can be reviewed and traced.' },
        { term: 'Multifactor authentication (MFA)', definition: 'Authentication that requires two or more different factor types, such as a badge plus a PIN.' }
      ],
      callout: { kind: 'exam', title: 'Keep the three As in order', text: "Authentication always comes first, then authorization, then accounting. If a question describes checking a password or a fingerprint, that is authentication. If it describes checking permissions or group membership, that is authorization. If it describes logs or audit trails, that is accounting. A common trap is a question about 'access permissions' with 'authentication' as a distractor." }
    },
    {
      title: 'How security work is organized: the NIST CSF',
      figure: { id: 'nist-csf', caption: 'NIST CSF 2.0: Govern sits at the center and steers the other five functions.' },
      body: [
        "A program needs structure, or it turns into a list of random fixes. Many organizations use the National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF). It sorts security work into six functions. Version 2.0, released in 2024, added Govern to the original five.",
        "You do not need to memorize the framework's details for Security+. You do need to recognize that security work falls into these broad areas, and that a healthy program does some of each."
      ],
      table: {
        head: ['Function', 'What it covers', 'Cedar Creek example'],
        rows: [
          ['Govern', 'Strategy, policy, roles, and oversight of the program', 'Greg Palmer sponsoring the program; writing a real security policy beyond the Acceptable Use Policy (AUP)'],
          ['Identify', 'Knowing your assets, data, and risks', 'Building the first asset inventory this week'],
          ['Protect', 'Safeguards that prevent or limit harm', 'Badge + PIN on the server room, screen locks, training'],
          ['Detect', 'Finding attacks and problems quickly', 'Cameras, endpoint detection and response (EDR) alerts, environmental sensors'],
          ['Respond', 'Acting on a detected incident', 'Handling a phishing report or a malware alert'],
          ['Recover', 'Restoring normal operations afterward', 'Restoring files from backup tapes']
        ]
      }
    },
    {
      title: 'Gap analysis',
      body: [
        "A <strong>gap analysis</strong> compares where you are today (the <em>current state</em>) with where you want to be (the <em>desired state</em>). The difference between them is the gap.",
        "The desired state usually comes from a framework or standard, such as the NIST CSF, plus the company's own goals. The current state comes from looking: interviews, documents, system settings, and walking the building. Week 1's mock project is a gap analysis. You record what controls exist today, compare them with what a company holding valuable drawings should have, and list what is missing.",
        "A gap analysis is useful because it turns into a plan. Once the gaps are listed, you rank them by risk and cost, then schedule the fixes. That schedule is called a <strong>roadmap</strong>. A quick, cheap fix for a big risk, such as removing the wedge that holds the server room door open, goes at the top. A large project, such as replacing ENG-APP02, gets planned over months."
      ],
      callout: { kind: 'tip', title: 'Gaps are findings, not blame', text: "When you report a gap, describe the condition and the risk. 'The server room door was propped open, so anyone in the hallway could enter' is useful. 'Dee left the door open' starts an argument and fixes nothing." }
    },
    {
      title: 'A first look at zero trust',
      body: [
        "Older networks trusted anything that was inside the building or on the internal network. <strong>Zero trust</strong> drops that assumption. Every request to use a resource is checked based on who is asking, what device they are using, and the context, no matter where on the network the request comes from. Access is granted as narrowly as possible and checked again over time. At Cedar Creek today, the plant and office networks can reach each other freely, which is the opposite of zero trust. You will study zero trust in depth later in the course."
      ],
      callout: { kind: 'exam', title: 'Integrity or non-repudiation?', text: "Both can involve the same tools, so read the question for what it is proving. If the question asks whether data was changed, the answer is integrity (a hash shows this). If it asks whether a person can deny sending or doing something, the answer is non-repudiation (a digital signature shows this). A digital signature provides both, so look for the word that matches the goal: 'unchanged' points to integrity, 'cannot deny' or 'proof of origin' points to non-repudiation." }
    }
  ],
  check: [
    { q: "An attacker changes the bank account number on one employee's payroll record so the next paycheck goes to the attacker. Which part of the CIA triad was violated?", opts: ["Integrity", "Confidentiality", "Availability", "Accounting"], ans: 0, why: "The data was changed without authorization. Nothing secret had to be read and nothing went down, so this is an integrity failure." },
    { q: "Ransomware locks PLANT-PC-07 and Line 2 stops for a shift. Which goal suffered most directly?", opts: ["Confidentiality", "Non-repudiation", "Authorization", "Availability"], ans: 3, why: "The system was not usable when needed. Loss of uptime is an availability failure." },
    { q: "Logs show the shared ccadmin account deleted a user from Active Directory. Marcus cannot tell which IT staff member did it. Which security property is missing?", opts: ["Availability", "Authorization", "Non-repudiation", "Confidentiality"], ans: 2, why: "Because the account is shared, the action cannot be tied to one person, who could then deny it. That is a non-repudiation failure." },
    { q: "An engineer logs in successfully. The file server then checks whether her account is in the Engineering group before showing the drawings share. What is the file server doing?", opts: ["Authentication", "Authorization", "Accounting", "Enumeration"], ans: 1, why: "She has already proved who she is. Checking what she is allowed to access is authorization." },
    { q: "Greg Palmer asks for a list comparing Cedar Creek's current security practices to what a recognized framework recommends, with the missing pieces ranked. What is this?", opts: ["A penetration test", "A business email compromise", "An incident response plan", "A gap analysis"], ans: 3, why: "Comparing current state with desired state and listing the differences is a gap analysis. The ranked list becomes a roadmap." }
  ]
};

COURSE_LESSONS['1.2'] = {
  id: '1.2', week: 1, title: 'Security controls', mins: 15, module: 'CertMaster Module 1',
  intro: "A <strong>security control</strong> is anything that reduces risk: a lock, a policy, a firewall rule, a trained receptionist. This afternoon you walk the Cedar Creek campus with Marcus and record every control you see. To make that list useful, you must describe each control in a shared language. Security+ uses two labels for every control: its <strong>category</strong> (how it is put in place) and its <strong>type</strong> (what it does). Get both right and your audit will make sense to any auditor, manager, or exam writer.",
  sections: [
    {
      title: 'Two labels for every control',
      body: [
        "Think of a control as having two tags. The <strong>category</strong> answers: who or what carries out this control? The <strong>type</strong> answers: what job does it do against a threat, and when?",
        "For example, the badge reader plus personal identification number (PIN) keypad on Cedar Creek's server room door is a <em>physical</em> control (category) that is <em>preventive</em> (type). The Acceptable Use Policy (AUP) poster on the office floor is a <em>managerial</em> control that is <em>directive</em>.",
        "Keep the two questions separate in your head. Students often mix them up because some words sound alike. 'Physical' is always a category. 'Preventive' is always a type."
      ]
    },
    {
      title: 'Control categories: how a control is put in place',
      body: [
        "<strong>Technical</strong> controls are carried out by hardware, software, or firmware. They are sometimes called logical controls. Once configured, they work without a person stepping in each time. Examples: firewalls, encryption, antivirus and endpoint detection and response (EDR), screen locks, and login requirements on file shares.",
        "<strong>Managerial</strong> controls set direction and oversight. They are decisions on paper: policies, risk assessments, standards, and agreements. Examples: the AUP, a nondisclosure agreement (NDA), a data classification policy, and a documented vendor approval process.",
        "<strong>Operational</strong> controls are carried out by people following a process. Examples: a receptionist checking visitors, security awareness training, a help desk procedure for verifying callers, and a patch schedule that staff follow every month.",
        "<strong>Physical</strong> controls are tangible things that protect people, buildings, and equipment. Examples: fences, door locks, badge readers, cameras, lighting, and fire suppression."
      ],
      table: {
        head: ['Category', 'Ask yourself', 'Cedar Creek examples'],
        rows: [
          ['Technical', 'Does a system enforce it automatically?', 'Workstation screen lock after 15 minutes; domain login on ENG-FS01 shares; EDR on office PCs'],
          ['Managerial', 'Is it a written decision, policy, or agreement?', "Acceptable Use Policy; engineer NDAs; 'CONFIDENTIAL' labeling rule"],
          ['Operational', 'Does a person carry it out by following a process?', 'Receptionist at the lobby desk; help desk callback before password resets; awareness training'],
          ['Physical', 'Can you touch it?', '8-ft fence; badge + PIN server room door; cameras; FM-200 fire suppression']
        ]
      },
      callout: { kind: 'tip', title: 'Operational or managerial?', text: "Both involve people and paper, so they get confused. A managerial control decides what should happen (the policy that says passwords are reset only after identity is verified). An operational control is the act of doing it (Jordan calling the user's desk phone before every reset)." }
    },
    {
      title: 'Control types: what a control does',
      figure: { id: 'controls-grid', caption: 'Every control gets two labels: a category (row) and a type (column). Cedar Creek examples fill the grid.' },
      body: [
        "<strong>Preventive</strong> controls stop an incident before it happens. A locked door prevents entry. A screen lock prevents someone from using an unattended PC.",
        "<strong>Deterrent</strong> controls discourage an attacker from trying. They do not physically stop anyone. Bright lighting and 'Video Surveillance in Use' signs make a target less attractive.",
        "<strong>Detective</strong> controls find or record an incident while it happens or after it happens. Cameras, logs, motion sensors, and EDR alerts are detective.",
        "<strong>Corrective</strong> controls limit damage and restore normal operation after an incident. Fire suppression puts out a fire. Restoring files from backup undoes ransomware damage. Cedar Creek's uninterruptible power supply (UPS) and generator keep the servers running after a power failure.",
        "<strong>Compensating</strong> controls are substitutes. You use one when the normal, preferred control cannot be put in place for a valid business or technical reason. The compensating control must reduce roughly the same risk the missing control would have covered.",
        "<strong>Directive</strong> controls tell people what to do or not do. Policies, procedures, and 'Authorized Personnel Only' signs are directive. They rely on people choosing to follow them."
      ],
      table: {
        head: ['Type', 'Job', 'General examples', 'Cedar Creek example'],
        rows: [
          ['Preventive', 'Stop it before it happens', 'Locks, firewalls, multifactor authentication (MFA)', 'Badge + PIN on the server room door'],
          ['Deterrent', 'Discourage the attempt', 'Lighting, warning signs', 'Pole lights in the parking lot'],
          ['Detective', 'Find or record it', 'Cameras, logs, sensors, EDR', 'Hallway camera outside the server room'],
          ['Corrective', 'Limit damage and restore', 'Backups, fire suppression, patching after an incident', 'FM-200 clean-agent fire suppression'],
          ['Compensating', 'Substitute when the primary control is not possible', 'Isolation, extra monitoring', 'Isolating ENG-APP02 on its own network segment'],
          ['Directive', 'Tell people what to do', 'Policies, procedures, signs', 'Acceptable Use Policy']
        ]
      },
      keyTerms: [
        { term: 'Control category', definition: 'How a control is implemented: technical, managerial, operational, or physical.' },
        { term: 'Control type', definition: 'What a control does: preventive, deterrent, detective, corrective, compensating, or directive.' },
        { term: 'Compensating control', definition: 'An alternative control used when the primary control cannot be implemented, chosen to reduce a similar level of risk.' }
      ]
    },
    {
      title: 'Compensating controls, carefully',
      body: [
        "Compensating controls cause more confusion than any other type, so slow down here.",
        "Start with the control you would normally want. ENG-APP02 is the computer-aided design (CAD) license and product data server. It runs Windows Server 2012 R2, which no longer gets security updates. The normal control is simple: upgrade the operating system. But Tom Becker's team says the CAD license server will not run on anything newer. Upgrading today would stop engineering. The primary control is not possible right now.",
        "So you pick something else that reduces the same risk. The risk is that an attacker exploits an unpatched flaw on ENG-APP02. If you <strong>isolate</strong> the server on its own network segment, allow only the few connections the CAD software needs, and watch it closely, an attacker has far fewer ways to reach it. That isolation is a compensating control.",
        "The same thinking applies on the plant floor. PLANT-PC-07 cannot have a screen lock because locking it would interrupt Line 2. A reasonable compensating control is to lock the PC down to the HMI (human-machine interface) software alone, in kiosk mode, and place it on a separate network.",
        "Two tests tell you a control is compensating. First, a primary control was considered and ruled out for a real reason. Second, the replacement addresses the same risk. A compensating control is meant to be documented and revisited. When the CAD vendor supports a newer operating system, the upgrade should happen."
      ],
      callout: { kind: 'cedar', title: 'Wedged door, real reason', text: "The server room door is propped open with a rubber wedge 'because the AC can't keep up' (AC meaning air conditioning). That wedge is a gap. It creates risk instead of reducing it, so it cannot count as a compensating control. The right fix addresses the cooling problem so the door can stay closed." }
    },
    {
      title: 'One control, more than one type',
      body: [
        "Real controls often do more than one job. A camera <em>detects</em> by recording, and a visible camera also <em>deters</em>. An NDA is <em>directive</em> because it tells engineers what they may share, and it <em>deters</em> because breaking it has legal consequences. The UPS and generator are <em>corrective</em> because they keep systems running after a power failure.",
        "When you classify a control, choose the type that best matches its main purpose in that setting, and note a second type if it clearly applies. On the exam, read the scenario for clues about purpose. A question that stresses 'recording' or 'alerting' wants detective. A question that stresses 'discouraging' wants deterrent."
      ],
      callout: { kind: 'exam', title: 'How SY0-801 style questions test controls', text: "Expect short scenarios that ask for the category, the type, or both. Watch for these traps. Signs are deterrent or directive, never preventive, because a sign cannot stop anyone. A security guard who checks badges is preventive, while a camera alone is detective. Backups are corrective because they help after the damage. 'The vendor cannot patch, so the team isolates the system' is the classic compensating control." }
    },
    {
      title: 'Other controls you will meet',
      body: [
        "<strong>Change management</strong> is the process for proposing, reviewing, approving, testing, and recording changes to systems. It protects integrity and availability by keeping surprise changes from breaking production. It is usually classed as a managerial or operational control, and you will study it in Week 5.",
        "<strong>Deception and disruption technologies</strong> are traps for attackers. They mainly serve as detective controls, because legitimate users have no reason to touch them. Any activity on them is a strong sign of an intruder."
      ],
      list: [
        "<strong>Honeypot</strong>: a decoy system that looks valuable, such as a fake file server.",
        "<strong>Honeynet</strong>: a network of honeypots made to look like a real environment.",
        "<strong>Honeyfile</strong>: a decoy file, such as one named like a payroll export, that raises an alert when opened.",
        "<strong>Honeytoken</strong>: a fake piece of data, such as a fake account credential or database record, that raises an alert when someone uses it."
      ]
    },
    {
      title: 'Getting ready for the Mock Control Audit',
      body: [
        "Later today you start the Mock Control Audit. You walk nine areas of the campus with Marcus: the perimeter, the lobby, the office floor, the server room, the IT office, engineering, the Line 2 plant floor, the loading dock, and the break room. Today you cover areas 1 to 5. Tomorrow you finish areas 6 to 9, build an asset inventory, and submit.",
        "In each area, read the observations slowly. For each thing you notice, ask two questions. Is this a control? If yes, log it with its category and type. Is this a gap, meaning a missing control or a control that has been defeated? If yes, log it with a short note on the risk it creates.",
        "Pay attention to controls that exist but are not working. A fence is a good preventive control, and a gate in that fence propped open with a brick defeats it. Log the fence as a control and the propped gate as a gap."
      ],
      list: [
        "Write the control in plain words: 'Badge reader plus PIN keypad on server room door'.",
        "Give it one category and one type. Add a second type only if it clearly applies.",
        "For each gap, write what you saw and why it matters: 'Visitor badges are reusable and not numbered, so a badge can walk out and be reused.'",
        "Note any asset you see (servers, PCs, devices) for tomorrow's inventory."
      ],
      callout: { kind: 'tip', title: 'Practice first', text: "Do the Control Sorter before you start the audit. It gives you 24 controls to classify, with feedback. Aim for 90% or higher." }
    }
  ],
  check: [
    { q: "The Cedar Creek parking lot has bright pole lights. What is their main control type?", opts: ["Preventive", "Deterrent", "Corrective", "Compensating"], ans: 1, why: "Lighting discourages wrongdoing by making people visible. It does not physically stop anyone, so it is deterrent." },
    { q: "Office workstations lock automatically after 15 minutes idle. What are the category and type?", opts: ["Technical, preventive", "Operational, detective", "Managerial, directive", "Physical, deterrent"], ans: 0, why: "Software enforces the lock (technical), and it stops someone from using an unattended PC (preventive)." },
    { q: "ENG-APP02 cannot be upgraded because the CAD license server will not run on a newer operating system. Marcus places it on an isolated network segment with tightly limited connections. What type of control is the isolation?", opts: ["Directive", "Detective", "Compensating", "Deterrent"], ans: 2, why: "The primary control (upgrading) is not possible, so a substitute control reduces the same risk. That is a compensating control." },
    { q: "Jordan calls a user back on their desk phone before resetting any password. Which category best fits this control?", opts: ["Technical", "Physical", "Operational", "Managerial"], ans: 2, why: "A person carries out the verification by following a procedure, which makes it operational." },
    { q: "After a small fire starts in the server room, the FM-200 system releases and puts it out. What type of control is the fire suppression system?", opts: ["Corrective", "Preventive", "Detective", "Directive"], ans: 0, why: "It acts after the event starts to limit damage, which makes it corrective." }
  ]
};

COURSE_LESSONS['1.3'] = {
  id: '1.3', week: 1, title: 'Threat actors and motivations', mins: 15, module: 'CertMaster Module 2',
  intro: "Yesterday you learned what Cedar Creek is protecting. Today you learn who might come after it, and why. Knowing the likely attackers keeps you from wasting money on unlikely threats while leaving the likely ones open. A parts manufacturer with valuable drawings, a large payroll, and a plant that must keep running attracts certain kinds of attackers more than others. By the end of this lesson you should be able to name them and explain what they want.",
  sections: [
    {
      title: 'Threat, vulnerability, and risk',
      body: [
        "These three words get mixed up constantly, even by professionals. Learn them precisely.",
        "A <strong>threat</strong> is anything that could cause harm: a person, a group, a piece of malware, or an event such as a fire. A <strong>threat actor</strong> is the person or group behind a deliberate attack.",
        "A <strong>vulnerability</strong> is a weakness that a threat could use. It might be a software flaw, a bad setting, or a human habit.",
        "<strong>Risk</strong> is the chance that a threat will use a vulnerability, combined with how bad the result would be. Analysts often summarize it as likelihood multiplied by impact.",
        "At Cedar Creek: ransomware crews are a <em>threat</em>. ENG-APP02 running an operating system that no longer gets security updates is a <em>vulnerability</em>. The <em>risk</em> is the likelihood that a crew finds and exploits that server, multiplied by the impact of losing the CAD license server and possibly the drawings it serves. You cannot remove the threat. You can reduce the vulnerability and the impact, which lowers the risk."
      ],
      keyTerms: [
        { term: 'Threat', definition: 'A potential cause of harm, such as an attacker, malware, or a natural event.' },
        { term: 'Threat actor', definition: 'A person or group that deliberately carries out an attack.' },
        { term: 'Vulnerability', definition: 'A weakness in a system, process, or behavior that a threat could exploit.' },
        { term: 'Risk', definition: 'The likelihood that a threat exploits a vulnerability, combined with the impact if it does.' }
      ]
    },
    {
      title: 'Attributes of a threat actor',
      body: [
        "Security+ describes threat actors by three attributes. Use them to compare actors and to judge how dangerous each one is to your organization.",
        "<strong>Internal or external.</strong> Internal actors already have some legitimate access, such as employees and contractors. External actors start outside and must find a way in.",
        "<strong>Resources and funding.</strong> How much money, time, people, and equipment the actor has. A government agency can spend years on one target. A lone attacker cannot.",
        "<strong>Level of sophistication and capability.</strong> How skilled the actor is. Can they only run tools others wrote, or can they find new flaws and write custom malware? The most capable, well-funded actors who stay hidden inside a target for a long time are called an <strong>advanced persistent threat (APT)</strong>."
      ]
    },
    {
      title: 'Types of threat actors',
      figure: { id: 'threat-actors', caption: 'Threat actors compared by where they start and how capable they are. Red rings mark the top concerns for Cedar Creek.' },
      body: [
        "<strong>Nation-state</strong> actors work for or on behalf of a government. They have the most resources and the highest sophistication. They want intelligence, strategic advantage, and in some cases the ability to disrupt another country's infrastructure. Many APT groups are nation-state actors.",
        "<strong>Organized crime</strong> groups run attacks as a business. Their goal is money. Ransomware and business email compromise (BEC) are their main products. Many are well funded, and some sell tools and access to each other.",
        "<strong>Hacktivists</strong> attack to promote a cause: political, social, or environmental. They may deface websites, leak documents, or knock services offline to draw attention. Their skill varies widely.",
        "An <strong>unskilled attacker</strong> uses tools and scripts written by others without understanding them well. Older material calls this a 'script kiddie'. They have few resources and low sophistication. They still cause real damage when they find an unpatched, internet-facing system.",
        "An <strong>insider threat</strong> is a current or former employee, contractor, or partner who misuses legitimate access. Some act on purpose, out of revenge or for money. Others cause harm by accident, such as an employee who emails a file to the wrong customer. Insiders are dangerous because they start inside the defenses.",
        "<strong>Shadow IT</strong> is technology that employees use without IT's approval, such as a personal cloud storage account or a wireless access point plugged in under a desk. The people involved usually mean no harm. They want to get work done. The unapproved technology is not monitored, patched, or backed up, so it creates holes nobody knows to watch."
      ],
      table: {
        head: ['Actor', 'Internal / external', 'Resources', 'Sophistication', 'Typical motivations'],
        rows: [
          ['Nation-state', 'External', 'Very high', 'Very high', 'Espionage, war, service disruption'],
          ['Organized crime', 'External', 'High', 'Moderate to high', 'Financial gain, blackmail'],
          ['Hacktivist', 'Usually external', 'Low to moderate', 'Varies', 'Philosophical or political beliefs'],
          ['Unskilled attacker', 'External', 'Low', 'Low', 'Disruption or chaos, notoriety'],
          ['Insider threat', 'Internal', 'Varies, but has access', 'Varies', 'Revenge, financial gain, or accident'],
          ['Shadow IT', 'Internal', 'Low', 'Low', 'Convenience (usually no intent to harm)']
        ]
      }
    },
    {
      title: 'Motivations: why attackers attack',
      body: [
        "Knowing why an actor attacks helps you predict what it will go after. Security+ lists these motivations."
      ],
      list: [
        "<strong>Data exfiltration</strong>: stealing data and moving it out of the organization.",
        "<strong>Espionage</strong>: stealing secrets for a government or a competitor, such as product designs.",
        "<strong>Service disruption</strong>: stopping systems or operations from working.",
        "<strong>Blackmail</strong>: threatening harm, such as leaking stolen data, unless the victim pays or obeys.",
        "<strong>Financial gain</strong>: making money through ransom, fraud, or selling stolen data.",
        "<strong>Philosophical or political beliefs</strong>: advancing a cause, typical of hacktivists.",
        "<strong>Ethical</strong>: hacking to find and report flaws so they get fixed, as authorized penetration testers and bug bounty researchers do.",
        "<strong>Revenge</strong>: getting back at an organization, common with disgruntled insiders.",
        "<strong>Disruption or chaos</strong>: causing damage for its own sake or for attention.",
        "<strong>War</strong>: attacks by one nation against another as part of a conflict."
      ],
      callout: { kind: 'exam', title: 'Match the actor to the motive', text: "Many questions describe an attack and ask who did it. Look for the motive. Money with ransomware or wire fraud points to organized crime. A political message or defaced site points to a hacktivist. Long-term, quiet theft of designs or secrets points to a nation-state or espionage. A recently fired employee points to an insider acting out of revenge. Unapproved tools used to get work done point to shadow IT." }
    },
    {
      title: 'Who is realistic for Cedar Creek?',
      body: [
        "Every company faces all of these actors in theory. Your job is to rank them for this company. Here is a reasonable first ranking for a parts manufacturer like Cedar Creek.",
        "<strong>Organized crime running ransomware</strong> is the top concern. Manufacturers are attractive targets because downtime is expensive, which pressures them to pay. Walt Henley's plant losing Line 2 for days is exactly the pain these crews sell relief from. Many crews also steal data first and threaten to leak it, which adds blackmail.",
        "<strong>BEC fraudsters</strong>, another form of organized crime, have already tried. The fake wire request 'from the Chief Financial Officer (CFO)' to Amanda Singh used a look-alike domain and urgency. They will try again, and next time they may target a customer or supplier invoice.",
        "<strong>Espionage</strong> against the engineering drawings is a real concern. A competitor, or a foreign actor interested in equipment makers' designs, could want the computer-aided design (CAD) files on ENG-FS01. Cedar Creek also holds drawings that belong to its customers, so a theft would damage those relationships too.",
        "<strong>Insiders</strong> matter here. Dee mentioned a former engineer's account that was 'probably never turned off'. A departing employee with lingering access and a grudge is a textbook insider threat. Careless insiders matter too: personal Universal Serial Bus (USB) drives carrying drawings out of Engineering could leak data without any bad intent.",
        "<strong>Unskilled attackers</strong> are a background threat. Automated scans hit every internet-facing address daily. They become a serious problem only if Cedar Creek exposes an unpatched or misconfigured system. Hacktivists and nation-state attacks aimed directly at Cedar Creek are less likely, though not impossible, given the business it is in."
      ],
      callout: { kind: 'cedar', title: 'Tell Greg the short version', text: "If Greg Palmer asks who is most likely to attack Cedar Creek, a good one-line answer is: 'Criminal groups who want money, through ransomware or fake payment requests, and anyone who wants our customers' drawings, including people who used to work here.'" }
    },
    {
      title: 'Where threat information comes from',
      body: [
        "Analysts do not guess who is attacking companies like theirs. They read <strong>threat intelligence</strong>: information about current actors, their methods, and their targets. Common sources include:"
      ],
      list: [
        "<strong>Open-source intelligence (OSINT)</strong>: free public information, such as security news, vendor blogs, and government advisories from the Cybersecurity and Infrastructure Security Agency (CISA).",
        "<strong>Proprietary or third-party feeds</strong>: paid intelligence from security vendors, often built into tools such as endpoint detection and response (EDR) products.",
        "<strong>Information-sharing organizations</strong>: groups where companies in the same sector share warnings, such as industry Information Sharing and Analysis Centers (ISACs).",
        "<strong>Dark web monitoring</strong>: watching criminal forums and leak sites for stolen credentials or mentions of the company."
      ],
      callout: { kind: 'tip', title: 'Coming up in Lab 1.3', text: "In Lab 1.3 you read four intelligence notes and build a profile for each actor using the attributes from this lesson: internal or external, resources, sophistication, and motivation." }
    }
  ],
  check: [
    { q: "ENG-APP02 runs an operating system that no longer receives security updates. In threat and risk terms, what is the unsupported operating system?", opts: ["A threat", "A threat actor", "A risk", "A vulnerability"], ans: 3, why: "It is a weakness that an attacker could exploit, which makes it a vulnerability. The attacker is the threat, and risk combines likelihood and impact." },
    { q: "A group encrypts a manufacturer's servers and demands payment in cryptocurrency. They also threaten to publish stolen drawings if the company refuses. Which actor type and motivations best fit?", opts: ["Hacktivist; political beliefs", "Organized crime; financial gain and blackmail", "Unskilled attacker; chaos", "Shadow IT; convenience"], ans: 1, why: "Ransom plus a leak threat is a money-driven criminal business. The leak threat adds blackmail." },
    { q: "Engineers start sharing drawings through a free personal file-sharing site because the company virtual private network (VPN) is slow. IT never approved the site. What is this an example of?", opts: ["Shadow IT", "Nation-state espionage", "Hacktivism", "Ethical hacking"], ans: 0, why: "Employees using unapproved technology to get work done is shadow IT. They mean no harm, but the site is outside IT's control." },
    { q: "Which threat actor typically has the greatest resources and the highest level of sophistication?", opts: ["Unskilled attacker", "Hacktivist", "Careless insider", "Nation-state"], ans: 3, why: "Nation-state actors have government funding, large skilled teams, and time. Many are classed as advanced persistent threats." },
    { q: "A former Cedar Creek engineer's account was never disabled. Months after leaving on bad terms, he logs in remotely and deletes project files. How is he best classified?", opts: ["Hacktivist motivated by political beliefs", "Organized crime motivated by financial gain", "Insider threat motivated by revenge", "Unskilled attacker motivated by notoriety"], ans: 2, why: "He uses access he was legitimately given as an employee, which makes him an insider threat. Deleting files out of a grudge points to revenge." }
  ]
};

COURSE_LESSONS['1.4'] = {
  id: '1.4', week: 1, title: 'Attack surface and threat vectors', mins: 15, module: 'CertMaster Module 2',
  intro: "In the last lesson you met the people who might attack Cedar Creek. This lesson covers how they would get in. Every email inbox, open network port, USB drive, and vendor connection is a possible way in. You saw some of them yesterday, such as the shared admin password written in a notebook in the IT office. More are waiting on today's walk: personal Universal Serial Bus (USB) drives in Engineering, a Wi-Fi password on the break room wall, and a server running an operating system that no longer gets updates. Here you learn the names for these paths and how to shrink the number of them.",
  sections: [
    {
      title: 'Attack surface and threat vectors',
      figure: { id: 'attack-surface', caption: 'Cedar Creek\'s attack surface: eight threat vectors you will see on the walk, grouped by family.' },
      body: [
        "The <strong>attack surface</strong> is the total of all the points where an attacker could try to get in or pull data out. It includes hardware, software, network connections, accounts, people, and outside partners. A bigger attack surface means more places to defend.",
        "A <strong>threat vector</strong> is one specific path an attacker uses to reach a target. Email is a vector. A USB drive is a vector. The attack surface is the full set of possible vectors and the systems they lead to.",
        "Security+ groups vectors into families. The sections below walk through each one with a Cedar Creek example."
      ],
      keyTerms: [
        { term: 'Attack surface', definition: 'All the points where an attacker could try to enter a system or extract data.' },
        { term: 'Threat vector', definition: 'A specific path or method an attacker uses to reach a target.' }
      ]
    },
    {
      title: 'Message, image, file, and voice vectors',
      body: [
        "<strong>Message-based</strong> vectors deliver an attack in a message. <em>Email</em> is the most common. The fake wire request to Amanda Singh, sent in the name of the Chief Financial Officer (CFO), came by email from a look-alike domain. <em>Short Message Service (SMS)</em>, meaning ordinary text messages, carries the same tricks to phones. <em>Instant messaging</em> platforms, such as chat apps, can deliver malicious links from accounts that look trusted.",
        "<strong>Image-based</strong> vectors hide an attack in a picture. A quick response (QR) code in an email or on a poster can send a phone to a fake login page. Some image formats, such as Scalable Vector Graphics (SVG), can carry script code. A specially crafted image can also exploit a flaw in the software that opens it.",
        "<strong>File-based</strong> vectors hide malicious code inside a file the victim opens: a document with harmful macros, a PDF that exploits a reader flaw, or a program disguised as an invoice. Attachments are the classic delivery method.",
        "<strong>Voice call</strong> vectors use the phone. An attacker calls the help desk pretending to be an employee who is locked out. Cedar Creek's help desk has a good control for this: before any password reset, Jordan calls the user back on their desk phone. An attacker calling from another number never gets the reset."
      ]
    },
    {
      title: 'Device, software, and system vectors',
      body: [
        "<strong>Removable devices</strong> such as USB drives can carry malware into a network and carry data out. Cedar Creek engineers move files to the shop floor on personal USB drives. Nobody knows where those drives have been, what else is on them, or how many copies of customer drawings are in people's pockets.",
        "<strong>Vulnerable software</strong> is any program with a flaw an attacker can exploit. Security+ separates <em>client-based</em> software, which is installed on each device, from <em>agentless</em> software, which runs without installing anything on the device, such as a web application used through a browser. With client-based software, every device holds a copy that must be patched, so one missed laptop stays exposed. With agentless software, the code lives on a central server. One patch fixes everyone, and one flaw on that server exposes everyone.",
        "<strong>Unsupported systems and applications</strong> no longer receive security updates from their maker. New flaws are found and never fixed. ENG-APP02 runs Windows Server 2012 R2, which Microsoft stopped supporting in October 2023. Every flaw discovered since then stays open on that server.",
        "<strong>Default credentials</strong> are the usernames and passwords a device ships with. Lists of them are public, so attackers try them first. Devices such as the camera recorder (NVR-01) and the badge controller (BADGE-CTRL) are the kind of equipment that ships with vendor logins. Checking that those were changed belongs on your to-do list. Shared credentials are a related problem. The shared ccadmin password in a notebook and the operator password taped to PLANT-PC-07 are easy for anyone nearby to read."
      ],
      callout: { kind: 'cedar', title: 'Why ENG-APP02 matters so much', text: "ENG-APP02 combines two vectors: unsupported software and high-value data. It holds confidential product data and runs the computer-aided design (CAD) license that engineering depends on. Tom Becker cannot upgrade it yet, which is why Lesson 1.2 used it as the example of a compensating control: isolate it so fewer paths lead to it." }
    },
    {
      title: 'Network vectors',
      body: [
        "<strong>Unsecure networks</strong> let attackers listen in or connect where they should not. Security+ names three kinds.",
        "<em>Wireless</em>: Cedar Creek's plant Wi-Fi, CC-PLANT, uses Wi-Fi Protected Access 2 (WPA2) Personal with one shared password. That password has not changed since 2019 and is printed on the break room wall. Every current and former employee, and anyone who visited the break room, may know it.",
        "<em>Wired</em>: an open network jack in a lobby or conference room can let a visitor plug in a device. Inside Cedar Creek, the plant and office networks can reach each other freely, so someone on the plant network can reach office systems. You will review that in Week 4.",
        "<em>Bluetooth</em>: short-range wireless used by headsets, keyboards, and phones. Flaws in Bluetooth software and devices left discoverable can let a nearby attacker connect or pull data.",
        "<strong>Open service ports</strong> are network ports where a service is listening for connections. Each one is a door. A port that needs to be open, such as a web server's, must be patched and watched. A port that does not need to be open should be closed. In Week 4 you will review the rules on FW-CORE, Cedar Creek's perimeter firewall, to see which doors face the internet."
      ]
    },
    {
      title: 'Supply chain vectors',
      body: [
        "Attackers sometimes go after a company through the businesses it trusts. This is a <strong>supply chain</strong> attack.",
        "A <strong>managed service provider (MSP)</strong> runs IT for its customers and often has remote admin access to many of them. Breaking into one MSP can open many customers at once. <strong>Vendors</strong> supply software and services, so a compromised software update or cloud service can carry an attack inside. <strong>Suppliers</strong> provide hardware and parts, and tampered equipment can arrive already compromised.",
        "Cedar Creek depends on Microsoft 365 for email and files and on a cloud payroll provider for paychecks. Vendors visit the server room with no visitor log. And Cedar Creek is itself a supplier: equipment makers send it their drawings. An attacker who wants a big equipment maker's designs might decide a smaller parts supplier is the easier way in."
      ]
    },
    {
      title: 'Human vectors (a preview)',
      body: [
        "People are part of the attack surface. <strong>Social engineering</strong> tricks people into helping the attacker, often by creating urgency or pretending to be someone trusted. The main forms you will see named on the exam include phishing (email), vishing (voice), smishing (SMS), impersonation, pretexting (a made-up story to justify a request), business email compromise (BEC), watering hole attacks (infecting a website the target visits), brand impersonation, typosquatting (look-alike domain names), and misinformation or disinformation. The cedarcreek-lnd.com domain in the BEC attempt is typosquatting. You will study human vectors in depth in Week 6."
      ],
      callout: { kind: 'exam', title: 'Name the vector from the clue', text: "Questions often hide the vector in one detail. 'Found in the parking lot' or 'plugged into a workstation' means removable device. 'Vendor stopped releasing patches' means unsupported system. 'Password still admin/admin' means default credentials. 'Attack came through our IT provider' means supply chain, specifically an MSP. 'Agentless' points to software that installs nothing on the endpoint." }
    },
    {
      title: 'Reducing the attack surface',
      body: [
        "You cannot remove every vector. You can remove the ones the business does not need, and harden the rest. This is called <strong>attack surface reduction</strong>.",
        "Each item below maps to something you saw at Cedar Creek."
      ],
      list: [
        "<strong>Remove what is not needed</strong>: close unused ports, turn off unused services, uninstall unused software, and disable accounts of people who have left, such as the former engineer's account.",
        "<strong>Patch and replace</strong>: keep supported systems updated on schedule, and plan to replace unsupported ones like ENG-APP02.",
        "<strong>Isolate what cannot be fixed</strong>: segment old or fragile systems, such as ENG-APP02 and PLANT-PC-07, so fewer paths reach them.",
        "<strong>Control removable media</strong>: block personal USB drives and provide an approved, encrypted way to move files to the shop floor.",
        "<strong>Fix credentials</strong>: change default passwords, retire shared accounts like ccadmin, and stop posting passwords on walls and monitors.",
        "<strong>Secure networks</strong>: rotate the CC-PLANT password and consider stronger wireless authentication.",
        "<strong>Manage vendors</strong>: log vendor visits and review what access each provider has.",
        "<strong>Train people</strong>: only 61% of staff have finished security awareness training. Raising that number shrinks the human attack surface."
      ]
    }
  ],
  check: [
    { q: "Engineers copy CAD files to personal USB drives to take them to the shop floor. Which threat vector does this create?", opts: ["Open service port", "Removable device", "Voice call", "Default credentials"], ans: 1, why: "USB drives are removable devices. They can bring malware in and carry data out." },
    { q: "ENG-APP02 runs Windows Server 2012 R2, and Microsoft no longer releases security updates for it. Which vector best describes this?", opts: ["Supply chain", "Image-based", "Bluetooth", "Unsupported systems and applications"], ans: 3, why: "A system its maker no longer patches is an unsupported system. Newly found flaws stay open." },
    { q: "The CC-PLANT Wi-Fi password is printed on the break room wall and has not changed since 2019. Which vector is this?", opts: ["File-based", "Unsecure network (wireless)", "Message-based", "Agentless software"], ans: 1, why: "A wireless network with a widely known, never-rotated shared password is an unsecure wireless network." },
    { q: "An attacker breaks into the IT provider that manages several local companies and uses its remote admin tools to reach each customer. What kind of vector is this?", opts: ["Supply chain through a managed service provider (MSP)", "Insider threat", "Removable device", "Default credentials"], ans: 0, why: "The attack came through a trusted service provider with access to its customers. That is a supply chain vector, specifically an MSP." },
    { q: "Which action most directly reduces Cedar Creek's attack surface?", opts: ["Adding a second camera at the loading dock", "Printing more 'Authorized Personnel Only' signs", "Disabling the former engineer's account and closing unused firewall ports", "Keeping badge logs for a longer time"], ans: 2, why: "Removing accounts and ports that are not needed takes paths away from attackers. The other choices detect or discourage without removing any path." }
  ]
};

COURSE_LESSONS['1.5'] = {
  id: '1.5', week: 1, title: 'Physical security and asset management', mins: 20, module: 'CertMaster Module 7',
  intro: "Every technical control depends on physical security. If someone can walk into the server room and carry out DC01 or a backup tape, a strong password does not help. Yesterday you saw a fence with its side gate propped open and a server room door wedged open. Today, at the loading dock, you will watch a delivery driver follow an employee into the plant without badging. This lesson explains the physical controls that stop those problems. It also covers asset management, because you cannot protect equipment and data you have not listed. You finish this week by building Cedar Creek's first asset inventory.",
  sections: [
    {
      title: 'Layers of physical security',
      figure: { id: 'physical-layers', caption: 'Layers from the property line inward. A layer only works while its doors and gates stay shut.' },
      body: [
        "Physical security works in layers, from the property line inward. An intruder should face several barriers before reaching anything valuable. At Cedar Creek the layers run from the fence and parking lot, to the building doors, to interior badge doors, to the server room.",
        "<strong>Fencing</strong> marks the boundary and slows people down. The 8-foot chain-link fence around the plant yard is a preventive control, and it only works if every gate in it stays shut.",
        "<strong>Bollards</strong> are short, strong posts that stop vehicles from driving into a building or entrance while still letting people walk through. <strong>Barricades</strong> are larger barriers, permanent or temporary, that block or channel vehicles and people.",
        "<strong>Lighting</strong> removes hiding places and helps cameras record clear images. It mainly deters. A burned-out light by Cedar Creek's dock leaves a dark spot right where the side gate is propped open.",
        "<strong>Signage</strong> tells people the rules and warns them they are being watched. Signs are directive or deterrent. They never stop anyone by themselves."
      ]
    },
    {
      title: 'Controlling who gets in',
      body: [
        "<strong>Access badges</strong> identify people and open doors. Cedar Creek's badge system (BADGE-CTRL, managed by Jordan Pike) controls the vehicle gate, the interior office doors, and the server room. Each swipe is also logged, which gives you accounting.",
        "<strong>Locks</strong> come in several kinds. Traditional key locks are simple but keys can be copied and are hard to track. Electronic locks use a keypad personal identification number (PIN), a badge, or both. Biometric locks use a fingerprint or face. Cedar Creek's server room door uses a badge plus PIN, so a stolen badge alone will not open it.",
        "<strong>Security guards</strong> can check identity, respond to alarms, and use judgment no machine has. Cedar Creek has one contract guard, Earl Dawson, who works the plant gate on night shift only (6 PM to 6 AM). During the day, nobody does that job.",
        "<strong>Video surveillance</strong> records activity for later review and deters people who see the cameras. Cedar Creek's 16 cameras record to NVR-01. Cameras are detective: they show what happened, but they do not stop it."
      ],
      keyTerms: [
        { term: 'Bollard', definition: 'A short, sturdy post that blocks vehicles while letting pedestrians pass.' },
        { term: 'Access badge', definition: 'A card or fob that identifies a person to a reader and logs each use.' },
        { term: 'Video surveillance', definition: 'Cameras and recorders that capture activity for monitoring and later review.' }
      ]
    },
    {
      title: 'Tailgating and the access control vestibule',
      body: [
        "<strong>Tailgating</strong> is following an authorized person through a secured door without using your own badge. When sources separate the two terms, <strong>piggybacking</strong> means the authorized person knowingly lets the other person in, often to be polite. Many sources use the words interchangeably. Either way, one badge swipe lets two people in.",
        "At Cedar Creek's loading dock, a person in a delivery uniform follows an employee through the dock door into the plant without badging. The badge system logs one entry. Two people go in.",
        "An <strong>access control vestibule</strong>, older name <em>mantrap</em>, stops this. It is a small space between two doors. The second door will not open until the first one has closed, and only one person can pass at a time. Some vestibules use sensors or a guard to confirm one person per badge.",
        "Vestibules cost money and are not practical at every door. The other fix is a <strong>challenge culture</strong>: staff are trained and expected to stop anyone they do not recognize and ask them to badge in or go to the front desk. Training is cheap, and it works only if leadership backs employees who challenge people politely."
      ],
      callout: { kind: 'cedar', title: 'Tailgating in the badge log', text: "In Lab 1.4 you search a week of badge data from BADGE-CTRL. Tailgating leaves a trace: an employee badges in once, but the camera or a later event shows someone else inside who never badged. You will also look for after-hours server room entries." }
    },
    {
      title: 'Sensors',
      body: [
        "Sensors detect people or conditions and raise an alert. Security+ names four kinds for intrusion detection."
      ],
      table: {
        head: ['Sensor', 'How it works', 'Good for'],
        rows: [
          ['Infrared', 'Detects changes in heat, such as a warm body moving across a room', 'Motion detection in rooms and hallways'],
          ['Pressure', 'Detects weight or force on a surface', 'Floor mats, under-floor sensors, windows'],
          ['Microwave', 'Sends out microwave pulses and detects changes in the reflections caused by movement', 'Covering larger areas, including outdoors'],
          ['Ultrasonic', 'Sends out high-frequency sound and detects changes in the echo caused by movement', 'Enclosed rooms']
        ]
      },
      callout: { kind: 'exam', title: 'Physical control questions', text: "Expect questions that describe a problem and ask for the best physical control. Vehicles ramming an entrance: bollards. One badge letting two people in: access control vestibule. A sensor that detects body heat: infrared. A sensor that reacts to weight: pressure. Remember that cameras and sensors are detective, while fences, locks, and vestibules are preventive." }
    },
    {
      title: 'Environmental controls and resilience in the server room',
      body: [
        "The server room holds DC01, FS-HR01, ENG-FS01, ENG-APP02, FW-CORE, and this month's backup tapes. Protecting it means protecting it from fire, power loss, heat, and water as well as from people.",
        "<strong>Fire suppression</strong>: Cedar Creek uses FM-200, a clean-agent gas. It puts out fires without water, so it does not destroy the electronics it protects. It is a corrective control.",
        "<strong>Uninterruptible power supply (UPS)</strong>: batteries that keep servers running for minutes when power drops, long enough to ride through a short outage or shut down cleanly. <strong>Generator</strong>: Cedar Creek's diesel generator outside takes over for longer outages. Together they keep the room available.",
        "<strong>Environmental monitoring</strong>: temperature and water sensors in the server room email IT when something is wrong. These are detective controls.",
        "Environmental problems can cause security gaps. The door is wedged open because the air conditioning cannot keep the room cool. A cooling failure has turned into an access control failure. The right fix is better cooling so the door can stay closed."
      ],
      callout: { kind: 'tip', title: 'Backups belong somewhere else', text: "The backup tapes sit on a shelf inside the same server room as the servers. A fire, flood, or theft that takes the servers could take the backups too. Keeping a copy offsite is a standard recommendation." }
    },
    {
      title: 'Asset management',
      figure: { id: 'asset-lifecycle', caption: 'The asset lifecycle, with a Cedar Creek example at each step.' },
      body: [
        "An <strong>asset</strong> is anything of value to the organization: hardware, software, data, and services. Asset management tracks each asset through its life, from purchase to disposal. Cedar Creek has no asset inventory today. You are building the first one.",
        "<strong>Acquisition and procurement.</strong> Security starts when something is bought. Purchases should go through an approval process that checks the vendor, confirms the product will get security updates, and makes sure it can be supported. A system bought without that check can end up like ENG-APP02, stuck on software nobody can update.",
        "<strong>Assignment and accounting.</strong> Every asset needs an <em>owner</em>, the person accountable for it and for deciding who may use it. At Cedar Creek, Tom Becker owns ENG-FS01 and ENG-APP02, and Rosa Medina owns FS-HR01. Every asset also needs a <em>classification</em> that says how sensitive it is. Cedar Creek's labels are Public, Internal, Confidential, and Restricted. The classification drives how strongly the asset is protected.",
        "<strong>Monitoring and asset tracking.</strong> An <em>inventory</em> is the list of assets with key details. <em>Enumeration</em> means actively discovering what exists, for example by scanning the network to find every device that responds. Comparing the two finds surprises: a device on the network that is not on the list may be shadow IT, or an intruder's device.",
        "<strong>Disposal and decommissioning.</strong> When an asset is retired, its data must not leave with it."
      ],
      list: [
        "<strong>Sanitization</strong>: removing data so it cannot be recovered. Methods include overwriting, the drive's built-in secure erase, and cryptographic erase (destroying the encryption key so the encrypted data is unreadable). Degaussing uses a strong magnet to wipe magnetic media. It usually leaves modern hard drives and tape cartridges unusable, so it is a poor choice when you plan to reuse the media.",
        "<strong>Destruction</strong>: physically destroying media by shredding, pulverizing, or incinerating it, when it will not be reused.",
        "<strong>Certification</strong>: written proof, often a certificate of destruction from a disposal vendor, that the media was properly destroyed or sanitized.",
        "<strong>Data retention</strong>: rules for how long data must be kept before disposal, set by law, contracts, and business needs. Disposing of data too early can break the law. Keeping it too long increases what can be stolen."
      ],
      keyTerms: [
        { term: 'Asset owner', definition: 'The person accountable for an asset and for deciding who may use it.' },
        { term: 'Enumeration', definition: 'Actively discovering the assets that exist, such as by scanning a network.' },
        { term: 'Sanitization', definition: 'Removing data from media so it cannot be recovered, usually so the media can be reused.' },
        { term: 'Certificate of destruction', definition: 'A document confirming that media was destroyed according to an agreed method.' }
      ]
    },
    {
      title: 'Building the Cedar Creek asset inventory',
      body: [
        "In part 2 of the Mock Control Audit you build an inventory of at least 10 assets. For each one, record what it is, where it is, who owns it, and its classification. Use what you observed on the walk and the IT asset spreadsheet stub in your lab pack.",
        "Be accurate. The rubric checks that location, owner, and classification match what you observed. If the owner of a server is Engineering, write Tom Becker, not IT. Include more than servers: workstations, the plant human-machine interface (HMI) PC, the camera recorder, the badge controller, the backup tapes, the Wi-Fi networks, and cloud services are all assets."
      ],
      table: {
        head: ['Asset', 'What it is', 'Location', 'Owner', 'Classification'],
        rows: [
          ['FS-HR01', 'Human resources (HR) file server', 'Server room', 'Rosa Medina', 'Confidential'],
          ['DC01', 'Domain controller', 'Server room', 'Dee Ortiz', 'Restricted'],
          ['NVR-01', 'Camera recorder (16 cameras)', 'IT office closet', 'Jordan Pike', 'Internal']
        ]
      },
      callout: { kind: 'cedar', title: 'Start with these three', text: "The three rows above are correct examples taken from what IT told you. Use them as a pattern, then add the rest from your walk-through notes." }
    }
  ],
  check: [
    { q: "A delivery driver walks into the plant right behind an employee who badged in. Which control is specifically designed to stop this?", opts: ["Additional pole lighting", "A 'Video Surveillance in Use' sign", "Access control vestibule", "FM-200 fire suppression"], ans: 2, why: "A vestibule lets only one person through at a time, so one badge cannot admit two people." },
    { q: "Cedar Creek wants to stop vehicles from driving into the office entrance while still letting people walk in. What should it install?", opts: ["Bollards", "Pressure sensors", "A honeypot", "An uninterruptible power supply"], ans: 0, why: "Bollards are short, strong posts that block vehicles but let pedestrians pass." },
    { q: "Power to the campus drops for 20 seconds. The servers keep running without interruption. Which control made that possible?", opts: ["The diesel generator alone", "Temperature sensors", "The badge + PIN door", "The uninterruptible power supply (UPS)"], ans: 3, why: "A UPS supplies battery power instantly when the utility power drops. A generator takes time to start and covers longer outages." },
    { q: "ENG-FS01 is retired. A disposal vendor shreds its drives. What should Cedar Creek get from the vendor to prove the job was done?", opts: ["A data retention policy", "A certificate of destruction", "An asset tag", "A nondisclosure agreement"], ans: 1, why: "A certificate of destruction documents that the media was destroyed, which supports audits and legal requirements." },
    { q: "You scan Cedar Creek's office network and find a wireless access point that is not on any list IT keeps. Which asset management activity uncovered it?", opts: ["Enumeration", "Procurement", "Sanitization", "Data retention"], ans: 0, why: "Enumeration actively discovers what exists. Comparing results with the inventory reveals unknown devices such as shadow IT." }
  ]
};

COURSE_QUIZ.w1 = {
  title: 'Week 1 Quiz',
  pass: 80,
  questions: [
    { lesson: '1.1', q: "Before uploading the weekly payroll export to the payroll service, Dee calculates a hash of the file. After upload, the provider calculates the hash again and the values match. What does this confirm?", opts: ["The file was encrypted in transit", "Only HR could read the file", "The file was sent by Dee and she cannot deny it", "The file has not been changed"], ans: 3, why: "Matching hashes show the data is unchanged, which is integrity. A hash alone does not identify the sender, so it does not provide non-repudiation." },
    { lesson: '1.1', q: "Tom Becker emails an approved drawing revision to a customer. The customer wants proof that the revision came from Tom and that he cannot later claim he never sent it. What provides this?", opts: ["A hash of the drawing file", "Encrypting the file with a password", "A digital signature from Tom", "Multifactor authentication on Tom's mailbox"], ans: 2, why: "A digital signature ties the file to the holder of Tom's private key, which gives proof of origin and non-repudiation. A hash alone shows only that the file is unchanged." },
    { lesson: '1.1', q: "A user enters a password and then approves a prompt on her phone. Microsoft 365 records the sign-in time and location. Which AAA element does the record of the sign-in represent?", opts: ["Authentication", "Accounting", "Authorization", "Availability"], ans: 1, why: "The password and phone prompt are authentication. Recording what happened, when, and from where is accounting." },
    { lesson: '1.1', q: "Your audit lists what Cedar Creek does today and what a recognized framework recommends. You rank the differences by risk and cost and schedule fixes over the next year. What is that schedule called?", opts: ["An attack surface", "A threat profile", "An asset inventory", "A roadmap"], ans: 3, why: "A gap analysis finds the differences between the current and desired states. The prioritized, scheduled plan to close them is the roadmap." },
    { lesson: '1.2', q: "Ransomware encrypts files on ENG-FS01. Dee restores them from last week's backup tapes. Which control type did the backups provide?", opts: ["Preventive", "Corrective", "Detective", "Deterrent"], ans: 1, why: "Backups do not stop the attack or detect it. They restore normal operation after the damage, which is corrective." },
    { lesson: '1.2', q: "Locking PLANT-PC-07's screen would interrupt Line 2. Instead, IT restricts the PC to the HMI application in kiosk mode and moves it to a separate network. What type of control is this?", opts: ["Compensating", "Directive", "Deterrent", "Detective"], ans: 0, why: "The preferred control (a screen lock) cannot be used for a valid business reason, so a substitute reduces a similar risk. That is compensating." },
    { lesson: '1.2', q: "A sign on the plant control room door reads 'Authorized Personnel Only'. Which control type best describes it?", opts: ["Preventive", "Corrective", "Directive", "Compensating"], ans: 2, why: "The sign tells people what they may and may not do. It cannot physically stop anyone, so it is directive (deterrent is also defensible, but it is not offered here)." },
    { lesson: '1.2', q: "Dee places a fake database record for a 'payroll admin' login on FS-HR01. No real process uses it, and any attempt to log in with it triggers an alert. What is this?", opts: ["Honeynet", "Honeypot", "Honeytoken", "Compensating control"], ans: 2, why: "A honeytoken is a fake piece of data, such as a credential, that alerts when used. A honeypot is a whole decoy system, and a honeynet is a network of them." },
    { lesson: '1.3', q: "A security vendor reports a group that sends fake invoices and 'urgent CFO' wire requests to manufacturers, using look-alike domains. Which threat actor type and motivation fit best?", opts: ["Organized crime; financial gain", "Nation-state; war", "Hacktivist; political beliefs", "Shadow IT; convenience"], ans: 0, why: "Business email compromise is a money-making crime, typically run by organized criminal groups." },
    { lesson: '1.3', q: "A teenager downloads a ready-made exploit tool and runs it against every address in a range, including Cedar Creek's public IP, without understanding how it works. How would you describe this actor's attributes?", opts: ["Internal, high resources, high sophistication", "External, very high resources, very high sophistication", "Internal, low resources, high sophistication", "External, low resources, low sophistication"], ans: 3, why: "This is an unskilled attacker: an outsider using other people's tools, with little money or skill." },
    { lesson: '1.3', q: "A group quietly maintains access to a supplier's engineering servers for over a year, copying new designs as they are created and avoiding detection. Which term best describes this actor?", opts: ["Unskilled attacker", "Advanced persistent threat (APT)", "Hacktivist", "Shadow IT"], ans: 1, why: "Long-term, stealthy access by a capable, well-resourced actor is the definition of an APT, often linked to nation-state espionage." },
    { lesson: '1.3', q: "In the statement 'Ransomware crews are scanning for unpatched servers, and ENG-APP02 can no longer be patched', which part is the threat?", opts: ["The ransomware crews", "ENG-APP02", "The missing patches", "The CAD license"], ans: 0, why: "The threat is the actor who could cause harm: the ransomware crews. The missing patches on ENG-APP02 are the vulnerability." },
    { lesson: '1.4', q: "A caller tells the help desk he is Laura Kim, the Marketing Director, and is locked out before a big presentation. He asks for a password reset and wants the new password read to him over the phone. Which vector is this, and which existing Cedar Creek control defeats it?", opts: ["Removable device; blocking USB drives", "Open service port; the perimeter firewall", "Image-based; email filtering", "Voice call; calling the user back on her desk phone before any reset"], ans: 3, why: "The attack arrives by phone, a voice call vector. The help desk callback to the real user's desk phone means an impostor calling from another number never gets the reset." },
    { lesson: '1.4', q: "A camera recorder on the network still accepts the login printed in its public installation manual. Which vector does this describe?", opts: ["Image-based", "Unsupported application", "Default credentials", "Bluetooth"], ans: 2, why: "Factory logins that were never changed are default credentials. Attackers look them up and try them first." },
    { lesson: '1.4', q: "Cedar Creek's cloud payroll provider is breached, and the attackers use the provider's connection to change direct-deposit details for Cedar Creek employees. Which vector is this?", opts: ["Insider threat", "Supply chain (vendor)", "Unsecure wired network", "File-based"], ans: 1, why: "The attack came through a trusted outside service provider, which is a supply chain vector." },
    { lesson: '1.4', q: "Engineers still need to move files from Engineering to the shop floor. Which option best reduces the attack surface while meeting that need?", opts: ["Ban all file movement to the shop floor", "Add a camera over the plotter room", "Post a sign asking engineers to scan their USB drives", "Block personal USB drives and provide an approved, encrypted way to transfer files"], ans: 3, why: "Blocking unknown personal drives removes a vector, and the approved method keeps the work going. A ban stops the business, and the camera and sign only detect or direct." },
    { lesson: '1.5', q: "Cedar Creek wants an alert if anyone steps onto the server room floor after hours, using a sensor that reacts to weight. Which sensor fits?", opts: ["Infrared", "Pressure", "Microwave", "Ultrasonic"], ans: 1, why: "Pressure sensors detect weight or force on a surface, such as a floor mat." },
    { lesson: '1.5', q: "An employee holds the plant door open for a friendly stranger carrying boxes, who has no badge. What is this called, and which low-cost control addresses it?", opts: ["Piggybacking; training staff to challenge people without badges", "Shoulder surfing; privacy filters", "Typosquatting; email filtering", "Enumeration; network scanning"], ans: 0, why: "Knowingly letting someone follow you through a secured door is piggybacking. A challenge culture, built through training, is the inexpensive fix. A vestibule is the stronger technical answer." },
    { lesson: '1.5', q: "IT wants to reuse the hard drive from an old Finance laptop in the training room. The drive must keep working, and the Finance data on it must not be recoverable. Which approach fits?", opts: ["Destruction by shredding", "Data retention", "Sanitization, such as a secure overwrite", "Asset assignment"], ans: 2, why: "Sanitization removes data so it cannot be recovered while the media stays usable. Shredding would destroy the drive, so it could not be reused." },
    { lesson: '1.5', q: "During the audit you record that FS-HR01 is owned by Rosa Medina and classified Confidential. Which part of asset management does recording the owner and classification belong to?", opts: ["Acquisition and procurement", "Disposal and decommissioning", "Assignment and accounting", "Enumeration"], ans: 2, why: "Assigning an accountable owner and a classification is part of assignment and accounting, which decides how the asset is protected." }
  ]
};
