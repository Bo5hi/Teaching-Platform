// Week 8 lessons + quiz: Incident Response. Shapes: docs/COURSE_V2.md
// Merges legacy weeks-data.js week 8 (objectives, objectiveDetails, concepts, labs, quiz),
// the CyberSec Academy "Incident Response" and "Security Operations" quiz items, and adds forensics basics.
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['8.1'] = {
  id: '8.1', week: 8, title: 'Incident response: the plan and the lifecycle', mins: 15, module: 'Security+ objective 4.8',
  intro: "Every organization will have a security incident. What separates a bad week from a disaster is whether people know what to do when it starts. Cedar Creek has never written an incident response plan. This week you live through its first serious incident, an overnight ransomware attack on the engineering file server, and you learn the process professionals use to handle one from the first alert to the final report. This lesson gives you the map: what counts as an incident, who responds, and the steps every response follows.",
  sections: [
    {
      title: 'Events, alerts, and incidents',
      body: [
        "An <strong>event</strong> is anything that happens on a system or network that can be observed: a user logs in, a file is opened, a firewall allows a connection. A busy company produces millions of events a day, and almost all of them are normal.",
        "An <strong>alert</strong> is an event (or a pattern of events) that a tool flags as possibly suspicious, for example five failed logins in a minute. An alert is a question, not an answer.",
        "A <strong>security incident</strong> is an event that actually harms, or threatens to harm, the confidentiality, integrity, or availability of systems or data, or that breaks security policy. Ransomware encrypting a server is an incident. A stolen password being used is an incident. An employee emailing customer drawings to a personal account is an incident.",
        "<strong>Incident response (IR)</strong> is the organized way a company detects, handles, and recovers from incidents. The goal is simple to say and hard to do: limit the damage, recover quickly, keep the evidence, and learn enough that it does not happen the same way again."
      ],
      keyTerms: [
        { term: 'Event', definition: 'Any observable occurrence on a system or network, such as a login or a file being opened.' },
        { term: 'Alert', definition: 'An event or pattern that a security tool flags as possibly suspicious, so a person can check it.' },
        { term: 'Security incident', definition: 'An event that harms or threatens confidentiality, integrity, or availability, or that violates security policy.' },
        { term: 'Incident response (IR)', definition: 'The organized process for detecting, containing, removing, and recovering from security incidents.' }
      ]
    },
    {
      title: 'The incident response plan',
      body: [
        "An <strong>incident response plan (IRP)</strong> is a written document that says how the organization will respond before anything goes wrong. Under pressure, people forget things, argue about who is in charge, and make costly mistakes such as wiping a server before anyone saved the evidence. A plan decides those questions in advance, when everyone is calm.",
        "A useful plan is short enough to read in a crisis. It usually contains:"
      ],
      list: [
        "<strong>Scope and definitions</strong>: what counts as an incident here, and the priority levels (Lesson 8.2).",
        "<strong>Roles and contacts</strong>: who leads, who investigates, who approves shutdowns, and phone numbers that work at 3 AM.",
        "<strong>Escalation rules</strong>: when an analyst must call the lead, when the lead must call management, and when outside help is brought in.",
        "<strong>A communication plan</strong>: who may speak to staff, customers, the media, and regulators, and through which channels. If email may be compromised, the plan names an out-of-band channel, such as a phone bridge or text group.",
        "<strong>Playbooks</strong>: step-by-step checklists for common incident types, such as ransomware, phishing, a stolen laptop, or a compromised account.",
        "<strong>Evidence and reporting rules</strong>: how evidence is collected and stored, and what the final report must contain."
      ],
      callout: { kind: 'cedar', title: 'No plan yet', text: "On your first-week walk-through you noted that Cedar Creek has no incident response plan. This week shows the cost. When the ransomware hit, nobody was watching the overnight alerts, there was no on-call list, and a well-meaning helper opened evidence files on a help desk PC. Two warnings earlier in December were handled as IT cleanups and never declared: the VPN login on Brian Kessler's old account (Week 6) and the weekend intrusion on MKT-LT-02 (Week 7). CC-IR-2026-01 is the first incident Cedar Creek formally declares. Your Week 8 report ends with a recommendation to write a plan." }
    },
    {
      title: 'The incident response team',
      figure: { id: 'ir-team', caption: 'An incident response team at Cedar Creek. Small companies fill the roles with the people they have; the roles still need names.' },
      body: [
        "A <strong>computer security incident response team (CSIRT)</strong> is the group that handles incidents. Large organizations have a full-time team, often inside a <strong>security operations center (SOC)</strong>, a team that monitors alerts around the clock. A 310-person manufacturer like Cedar Creek fills the roles with the people it has, and it may pay an outside firm to help with big incidents.",
        "Whatever the size, the same roles must be covered. The <strong>incident lead</strong> (sometimes called the incident commander) runs the response, makes decisions, and keeps the official log. <strong>Technical responders</strong> investigate and fix. <strong>Management</strong> approves decisions that cost money or stop the business, such as shutting down a production line. <strong>Legal</strong> advises on notification duties and evidence. <strong>Human resources (HR)</strong> joins when an employee is involved. <strong>Communications</strong> speaks for the company with one consistent voice. Outside parties, such as the cyber insurance company, a hired incident response firm, and law enforcement, are contacted through the plan.",
        "Everyone on the list needs to know they are on it, and needs a backup for nights, weekends, and holidays."
      ]
    },
    {
      title: 'The lifecycle: six steps',
      figure: { id: 'ir-lifecycle', caption: 'The incident response lifecycle used in this course, and how Security+ and NIST group the same work.' },
      body: [
        "Every response follows the same lifecycle. This course uses six steps, the same six as the Blue Team Lab.",
        "<strong>1. Preparation.</strong> Everything done before an incident: writing the plan and playbooks, training staff, setting up logging and monitoring tools, keeping backups, and practicing. It is the most commonly skipped step and the most important one.",
        "<strong>2. Detection and analysis.</strong> Noticing that something is wrong (an alert, a user report, a call from a partner) and working out whether it is real, how far it reaches, and how serious it is. Lesson 8.2 covers this step.",
        "<strong>3. Containment.</strong> Stopping the damage from spreading: isolating infected computers, disabling stolen accounts, blocking attacker addresses. Containment always comes before eradication, and evidence is preserved while it happens.",
        "<strong>4. Eradication.</strong> Removing the cause: deleting malware, closing the hole the attacker used, removing accounts the attacker created, and resetting stolen passwords.",
        "<strong>5. Recovery.</strong> Returning systems to normal service from known-good builds and clean backups, then watching them closely for any sign the attacker is back. Lesson 8.3 covers steps 3 to 5.",
        "<strong>6. Lessons learned.</strong> Also called post-incident activity. The team meets, writes down what happened, what worked, and what failed, and changes the plan, the tools, and the controls. Lesson 8.5 covers the report that comes out of it.",
        "The steps form a loop, not a straight line. Analysis during containment often finds another infected computer, which sends you back to detection. Lessons learned feed back into preparation for the next incident."
      ],
      callout: { kind: 'exam', title: 'Three ways to count the same steps', text: "Security+ lists seven steps: preparation, detection, analysis, containment, eradication, recovery, and lessons learned. NIST Special Publication 800-61 Revision 2 groups the work into four phases: preparation; detection and analysis; containment, eradication, and recovery; and post-incident activity. This course splits the work into six. The order never changes. If a question asks what comes first, it is preparation. If it asks what comes right after containment, it is eradication. NIST published Revision 3 of 800-61 in 2024, which organizes incident response around the NIST Cybersecurity Framework 2.0 functions you met in Week 1; the order of the work is the same." }
    },
    {
      title: 'Practicing before it is real',
      body: [
        "A plan nobody has practiced is a guess. Security+ names several ways to test incident response without waiting for a real attack.",
        "A <strong>tabletop exercise</strong> is a discussion. The team sits around a table (or a video call) while a facilitator reads out a scenario, such as 'It is 6 AM and files on ENG-FS01 are being renamed to .latch.' Each person says what they would do next. No systems are touched. Tabletops are cheap and quickly expose gaps: missing phone numbers, unclear authority, nobody who knows how to restore a tape.",
        "A <strong>simulation</strong> goes further. The team performs the response on test systems or a practice environment, for example by isolating a lab computer or restoring a server from backup, so everyone learns how long each step really takes.",
        "Training also matters. Everyone in the company needs to know how to report something suspicious. Responders need deeper training on the tools and playbooks. After each test or real incident, the plan is updated."
      ],
      keyTerms: [
        { term: 'Tabletop exercise', definition: 'A discussion-based walk-through of an incident scenario, used to test a plan without touching systems.' },
        { term: 'Simulation', definition: 'A hands-on practice response performed on test or practice systems.' },
        { term: 'Playbook', definition: 'A step-by-step checklist for responding to one type of incident, such as ransomware or phishing.' }
      ]
    },
    {
      title: 'A real response mapped to the lifecycle',
      body: [
        "In May 2021, the DarkSide ransomware group attacked Colonial Pipeline, which carries a large share of the fuel used on the US East Coast. You studied the attack in Projects 3 and 4. Here is the response, step by step.",
        "<strong>Detection:</strong> early on the morning of May 7, 2021, an employee found a ransom note on a company computer. <strong>Containment:</strong> Colonial shut down the entire pipeline as a precaution, so the attack could not spread to the systems that run it. That one decision is why fuel shortages and panic buying followed. <strong>Eradication and recovery:</strong> Colonial paid the attackers about 75 bitcoin, worth roughly $4.4 million at the time, worked with outside responders, and began restarting the pipeline on May 12. <strong>Lessons learned:</strong> in testimony to Congress, Colonial's CEO said the attackers got in through a legacy virtual private network (VPN) account that did not require multifactor authentication (MFA). Federal agencies then pushed pipeline operators to adopt new security requirements."
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline: containment has a price', text: "Shutting the pipeline down was containment, and it worked: the attack did not reach the systems that move fuel. It also stopped the business for days. Containment decisions almost always trade one kind of harm for another, which is why the plan must say in advance who is allowed to make them. At Cedar Creek, that person is the one who can tell Walt Henley to stop Line 2." }
    }
  ],
  check: [
    { q: "A firewall records 40,000 allowed connections in an hour. One of them matches a rule for a known malicious address, and the SIEM raises it for review. What is that flagged record?", opts: ["An incident", "An alert", "A playbook", "A lesson learned"], ans: 1, why: "An alert is an event a tool flags as possibly suspicious. It becomes an incident only if analysis shows real harm or a real threat." },
    { q: "Which part of an incident response plan names who may speak to customers and the media, and which channel to use if company email is compromised?", opts: ["The playbooks", "The escalation rules", "The communication plan", "The evidence rules"], ans: 2, why: "The communication plan controls who speaks for the company and through which channels, including out-of-band channels such as a phone bridge." },
    { q: "The IR team has isolated an infected server and is now removing the malware and the backdoor account the attacker created. Which step are they in?", opts: ["Containment", "Recovery", "Lessons learned", "Eradication"], ans: 3, why: "Removing the cause, including malware and attacker accounts, is eradication. Isolation was containment, which came first." },
    { q: "Cedar Creek's IT team gathers in a conference room. Marcus reads a ransomware scenario aloud and each person explains what they would do next. No systems are touched. What is this?", opts: ["A simulation", "A penetration test", "A tabletop exercise", "A disaster recovery test"], ans: 2, why: "A discussion-based walk-through of a scenario with no systems touched is a tabletop exercise." },
    { q: "Which step of the incident response lifecycle is done before any incident occurs and is the one most often skipped?", opts: ["Preparation", "Detection and analysis", "Containment", "Recovery"], ans: 0, why: "Preparation, which includes the plan, playbooks, training, tools, and backups, happens before an incident and is the most commonly skipped step." }
  ]
};

COURSE_LESSONS['8.2'] = {
  id: '8.2', week: 8, title: 'Detection, analysis, and triage', mins: 15, module: 'Security+ objectives 4.8 and 4.9',
  intro: "At 6:00 on a Wednesday morning you open the security console and find a queue of alerts from the night. Some are noise. One of them means files are being encrypted right now. Your first job is to decide, quickly and correctly, which is which. This lesson covers where detections come from, how to tell a real alert from a false one, how to rank incidents from P1 to P4, and why the clock starts the moment you look.",
  sections: [
    {
      title: 'Where detections come from',
      body: [
        "Incidents are found in more ways than people expect. The main sources are:"
      ],
      list: [
        "<strong>The SIEM</strong>: a security information and event management system collects logs from many systems and runs correlation rules across them. A failed VPN login, then a successful one from the same address, then an administrator account used from that VPN address, can each look harmless alone. Correlated together they tell a story.",
        "<strong>Endpoint detection and response (EDR)</strong>: an agent on each computer watches processes and files and flags behavior such as mass file renaming or a command that deletes backups.",
        "<strong>Network tools</strong>: intrusion detection systems, firewall logs, and flow records that show unusual traffic, such as gigabytes leaving for an unknown address.",
        "<strong>People</strong>: an employee who reports a strange email, or an operator who sees a ransom note on a screen. A good reporting culture is a detection tool.",
        "<strong>Outsiders</strong>: a customer, a bank, a threat intelligence feed, or law enforcement telling you something is wrong. Being told by an outsider usually means the attacker has been inside a while."
      ],
      callout: { kind: 'exam', title: 'Data sources for an investigation', text: "Security+ expects you to pick the right data source for a question. Who logged in and from where: operating system security logs (Windows event IDs 4624 for a successful logon and 4625 for a failed one). What a process did on a host: endpoint (EDR) logs. What crossed the network: firewall logs, flow data, or a packet capture. What a web app was asked to do: application logs. Plus vulnerability scans, dashboards, and automated reports for context. Lateral movement with stolen credentials shows up best in authentication logs." }
    },
    {
      title: 'True and false, positive and negative',
      figure: { id: 'alert-outcomes', caption: 'Every alert, and every silence, lands in one of four boxes.' },
      body: [
        "Every detection rule makes mistakes in two directions. A <strong>true positive</strong> is an alert about something that really is malicious. A <strong>false positive</strong> is an alert about normal activity, such as a user who mistyped a new password five times. A <strong>false negative</strong> is an attack that produced no alert at all. A <strong>true negative</strong> is normal activity that correctly produced no alert.",
        "False negatives are the most dangerous, because nobody knows to look. False positives are the most common, and they cause their own harm: an analyst who closes 200 harmless alerts a day starts skimming, and that is how the real one gets missed. This is called <strong>alert fatigue</strong>. When you close a false positive, you document why and suggest tuning the rule so it fires less on normal work."
      ]
    },
    {
      title: 'Analysis: the questions to answer',
      body: [
        "Once an alert looks real, analysis begins. You are trying to answer five questions, in roughly this order, using evidence rather than guesses:",
        "<strong>What is happening?</strong> Ransomware, a stolen account, data theft, an insider? <strong>Where?</strong> Which hosts, accounts, and data are involved, and is it spreading? <strong>When did it start?</strong> The first sign is often hours or days before the alert. <strong>How did they get in?</strong> The entry point tells you what to close. <strong>Who or what is affected?</strong> Business processes, customers, personal data.",
        "<strong>Enrichment</strong> speeds this up: adding context to an alert, such as who owns the host, whether the address appears in threat intelligence, and what else the same account did that night. <strong>Correlation</strong> links events across sources by shared details: the same IP address, the same account, the same few minutes.",
        "Two related activities support analysis. <strong>Threat hunting</strong> means searching proactively for attackers that no alert has caught yet, for example by looking for any other host that talked to the same suspicious address. <strong>Root cause analysis</strong> means tracing an incident back to the underlying reason it was possible, not just the last thing the attacker did.",
        "Attack models help you judge how far an attack has gone. Lockheed Martin's <strong>Cyber Kill Chain</strong> describes seven stages, from reconnaissance through delivery and exploitation to command and control and 'actions on objectives'. <strong>MITRE ATT&amp;CK</strong>, which you used in Weeks 3 and 4, catalogs the specific techniques. If your evidence shows the attacker has reached the stage of deleting backups, you know the damage stage is minutes away."
      ],
      keyTerms: [
        { term: 'Enrichment', definition: 'Adding context to an alert, such as asset owner, threat intelligence matches, and related events.' },
        { term: 'Correlation', definition: 'Linking events from different sources by shared details such as an IP address, account, or time window.' },
        { term: 'Threat hunting', definition: 'Proactively searching for attacker activity that existing alerts have not detected.' },
        { term: 'Root cause analysis', definition: 'Tracing an incident to the underlying weakness that made it possible.' }
      ]
    },
    {
      title: 'Triage: P1 to P4',
      figure: { id: 'triage-matrix', caption: 'Priority comes from impact and scope. Cedar Creek uses the same four levels and targets as the SOC ticket board.' },
      body: [
        "<strong>Triage</strong> is the quick sorting of alerts and incidents by how urgently they need attention. The word comes from emergency rooms, where a nurse decides who is seen first. Triage is not the full investigation; it is the decision about what to work on now.",
        "In a larger SOC, triage is the job of <strong>Tier 1</strong> analysts, who watch the queue, close false positives, and escalate anything real. <strong>Tier 2</strong> analysts investigate escalated incidents in depth. <strong>Tier 3</strong> staff lead major incidents and hunt for threats. At Cedar Creek you are all three tiers, with Dee and Marcus as your escalation path.",
        "Cedar Creek uses four priority levels, the same ones you will use on the SOC Ticket Board in Week 9:"
      ],
      table: {
        head: ['Priority', 'Meaning', 'Examples', 'Target'],
        rows: [
          ['<strong>P1 Critical</strong>', 'Immediate threat to core operations or crown-jewel data', 'Active ransomware, confirmed data theft, attacker with admin rights', '4 hours'],
          ['<strong>P2 High</strong>', 'Serious threat likely to cause major impact soon', 'Malware spreading, a stolen account being used, credential theft in progress', '8 hours'],
          ['<strong>P3 Medium</strong>', 'Suspicious activity not yet confirmed, or confirmed with small impact', 'Unknown USB device on a plant PC, a reported phishing email nobody clicked', '24 hours'],
          ['<strong>P4 Low</strong>', 'Policy issues, minor misconfigurations, informational alerts', 'An expired password, a clean antivirus scan, blocked internet scanning', '72 hours']
        ]
      }
    },
    {
      title: 'Linking alerts into one incident',
      body: [
        "Alerts rarely arrive one at a time. In a real attack you might see a burst of VPN failures, an unusual login, a new administrator account, a large upload, and a ransomware alert, each from a different tool. Judged alone, the VPN failures might be P3 and the new account P2. Judged together, they are one P1 incident.",
        "The rule of thumb: <strong>anything linked to an active P1 incident joins that P1</strong>, even if it looks small on its own. Link alerts by the details they share. If the new admin account was created from IP address 10.250.0.37, and the VPN gave that address to the account that just logged in from a foreign hosting provider, the two alerts are the same story.",
        "Speed matters at the top of the queue. Every minute a P1 waits, ransomware encrypts more files and stolen data keeps leaving. Security teams measure this with two numbers. <strong>Mean time to detect (MTTD)</strong> is the average time from the start of an attack to its detection. <strong>Mean time to respond (MTTR)</strong> is the average time from detection to containment or recovery. Lower is better for both. (On the exam, MTTR more often means mean time to repair, a reliability measure covered in Lesson 8.6.)"
      ],
      callout: { kind: 'real', title: 'Target 2013: the alert nobody acted on', text: "Target had installed a malware detection system, and its monitoring team overseas reported alerts when the attackers began installing their tools in late 2013. The alerts were passed to the security team in Minneapolis, which did not act on them, and card data kept flowing out for weeks. Investigations afterward found that the detection worked; triage and escalation did not. A tool is only as good as the person who reads its alerts and the rule that says what to do next." }
    },
    {
      title: 'Document from the first minute',
      body: [
        "Start an incident log the moment you suspect something real, not after it is over. Write down every observation and action with the time, what you did, what you saw, and who you told. 'It seemed like around 6' is useless later; '06:08 called Dee Ortiz, she agreed to isolate ENG-FS01' is evidence.",
        "Use one time standard. Logs from different systems often use different time zones: Cedar Creek's firewall writes Coordinated Universal Time (<strong>UTC</strong>), while its Windows and EDR exports use local Central time, six hours behind UTC in winter. Mixing them up can put the attacker's first login after the encryption started. Many teams write every timeline entry in UTC, or in both."
      ],
      callout: { kind: 'cedar', title: 'Your first P1', text: "In Lab 8.1 you work the real queue from the morning of December 23: ten alerts, five of them pieces of one attack. In Lab 8.2 you pull the full story out of the logs in Kali." }
    }
  ],
  check: [
    { q: "A user changed her password yesterday and today mistyped it five times before logging in correctly from her own desk. The SIEM raised an alert. How should it be classified?", opts: ["True positive", "False positive", "False negative", "True negative"], ans: 1, why: "The alert fired, but the activity was normal. That is a false positive: document it and close it." },
    { q: "Attackers stayed inside a network for months and no tool ever raised an alert. What is this called?", opts: ["A false positive", "A true negative", "A false negative", "Alert fatigue"], ans: 2, why: "A real attack that produced no alert is a false negative, the most dangerous outcome because nobody knows to look." },
    { q: "An EDR alert shows a process renaming hundreds of files per minute on the engineering file server, and a ransom note has appeared. Which priority fits?", opts: ["P4 Low", "P3 Medium", "P2 High", "P1 Critical"], ans: 3, why: "Active ransomware on a crown-jewel server is an immediate threat to core operations: P1 Critical." },
    { q: "Which log source is best for spotting an attacker using stolen credentials to log in to one server after another?", opts: ["Web server access logs", "Printer logs", "Application crash logs", "Authentication and Windows security event logs"], ans: 3, why: "Lateral movement with valid credentials shows up in authentication logs, such as Windows event 4624 logons with their source addresses." },
    { q: "An analyst adds the asset owner, a threat intelligence match for the source IP, and the user's other logins that night to an alert before deciding what to do. What is this?", opts: ["Enrichment", "Eradication", "Containment", "A tabletop exercise"], ans: 0, why: "Adding context to an alert to speed up the decision is enrichment." }
  ]
};

COURSE_LESSONS['8.3'] = {
  id: '8.3', week: 8, title: 'Containment, eradication, and recovery', mins: 15, module: 'Security+ objective 4.8',
  intro: "Once you know an incident is real, the clock is running. Containment stops the damage from growing. Eradication removes the cause. Recovery brings the business back. Each step has a classic mistake: pulling the power cord and losing the evidence, deleting the malware but leaving the attacker's backdoor account, or restoring a server before closing the hole the attacker came through. This lesson covers how to do the three steps in the right order, for the incident types you will see most.",
  sections: [
    {
      title: 'Containment: stop the spread',
      body: [
        "<strong>Containment</strong> limits the damage while you work out the rest. It comes in two stages.",
        "<strong>Short-term containment</strong> happens in minutes to hours. You isolate infected computers from the network, block attacker addresses at the firewall, and disable stolen accounts. The goal is to stop the bleeding right now, even if the fixes are blunt.",
        "<strong>Long-term containment</strong> happens over days. It keeps the business running safely while the full fix is prepared: temporary firewall rules, extra logging, moving a vulnerable server onto its own network segment, or forcing password resets for a whole department.",
        "Containment always comes before eradication. If you start deleting malware while the attacker still has a working account and a way in, they simply come back, often angrier and quieter."
      ]
    },
    {
      title: 'Ways to contain',
      body: [
        "Analysts use a handful of containment tools again and again:"
      ],
      list: [
        "<strong>Isolation</strong>: cutting a host off from the network while leaving it powered on. EDR products can do this with one click and still let the security console talk to the agent. Without EDR, you can disable the switch port or move the host to a quarantine virtual LAN (VLAN), a separate network segment with no access to anything else.",
        "<strong>Segmentation</strong>: limiting what can talk to what, so one infected segment cannot reach the rest. A flat network, where the plant and office reach each other freely, makes containment much harder.",
        "<strong>Account actions</strong>: disabling accounts, resetting passwords, ending active sessions, and revoking login tokens. For a stolen account, also check and remove any MFA device or email forwarding rule the attacker added.",
        "<strong>Blocking</strong>: adding the attacker's IP addresses and domains to firewall, proxy, and email filter block lists.",
        "<strong>Protecting backups</strong>: taking backup media offline immediately. Ransomware crews look for backups first, because a company with good backups does not need to pay."
      ],
      callout: { kind: 'exam', title: 'Isolate, do not power off', text: "If a question asks for the first action against active ransomware, the answer is usually to isolate the host from the network. Turning it off stops the encryption too, but it destroys the contents of memory, which may hold the encryption key, the attacker's commands, and their network connections. Isolation stops the spread and keeps that evidence. (If isolation is impossible and files are being destroyed, pulling power can still be the lesser harm. The plan should say who decides.)" }
    },
    {
      title: 'Containment by incident type',
      figure: { id: 'containment-types', caption: 'First containment moves for four common incident types.' },
      body: [
        "Each common incident type has its own first moves. A playbook for each one saves precious minutes.",
        "<strong>Ransomware or other malware:</strong> isolate the infected hosts, block the command-and-control (C2) addresses the malware calls home to, search the EDR console for any other host that contacted the same addresses, and take backups offline. Escalate to the incident lead right away.",
        "<strong>Phishing that led to a stolen account:</strong> disable the account or reset its password and MFA, end its sessions, block the sender's domain at the email gateway, and pull copies of the email out of other mailboxes. Then check what the account touched while the attacker had it.",
        "<strong>Data breach (data leaving):</strong> block the destination, cut off the source host or account, and measure exactly what left and when. Bring in legal counsel early, because laws or contracts may require you to notify people within a set time.",
        "<strong>Insider:</strong> work with HR and legal, remove access quietly and all at once, preserve the person's mail, files, and logs, and collect company devices and badges. Tipping off an insider before access is gone invites them to destroy evidence or data."
      ]
    },
    {
      title: 'Eradication: remove the cause',
      body: [
        "<strong>Eradication</strong> removes everything the attacker left and closes the way they came in. Typical tasks:",
        "Delete malware and the files it dropped. Remove <strong>persistence</strong>: anything that lets the attacker return, such as new accounts, scheduled tasks, services, or remote access tools. Patch the vulnerability that was exploited, or fix the misconfiguration. Reset every password that may have been exposed, including shared and service accounts. For badly infected systems, <strong>reimage</strong> them: wipe the disk and reinstall from a known-good image, because you can never be fully sure you found every piece of the malware.",
        "Evidence must be saved before eradication starts (Lesson 8.4). Once a disk is wiped, the evidence on it is gone for good.",
        "Eradication is where incomplete work bites. A team that deletes the ransomware but misses the new domain administrator account the attacker created has not eradicated anything; it has only made the attacker's next visit easier."
      ],
      keyTerms: [
        { term: 'Persistence', definition: 'Anything an attacker sets up to keep or regain access, such as a new account, scheduled task, or backdoor.' },
        { term: 'Reimage', definition: 'Wipe a system and reinstall it from a known-good image instead of trying to clean it.' },
        { term: 'Command and control (C2)', definition: 'The server an attacker uses to send instructions to malware and receive stolen data.' }
      ]
    },
    {
      title: 'Recovery: back to business, carefully',
      body: [
        "<strong>Recovery</strong> returns systems to normal operation. The order matters: rebuild from clean images, restore data from backups you have verified are clean and from before the attack, apply all patches, and only then reconnect to the network. Restoring onto a system that still has the original hole invites the same attacker straight back in.",
        "Bring systems back in phases, most important first, and watch them closely. For the following weeks, increase logging and alerting on the restored systems and the accounts involved. Confirm with the business owner, not just IT, that the system works as it should.",
        "Two numbers from the business guide recovery. The <strong>recovery time objective (RTO)</strong> is the longest a system can be down before the harm becomes unacceptable. The <strong>recovery point objective (RPO)</strong> is the most data the business can afford to lose, measured as the age of the newest usable backup. Lesson 8.6 covers both in depth; for now, know that a backup taken once a week means you can lose up to a week of work."
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline: the payment, and getting part of it back', text: "Colonial paid DarkSide about 75 bitcoin, roughly $4.4 million at the time, to get a decryption tool. Colonial had contacted the FBI early. In June 2021 the US Department of Justice announced it had seized about 63.7 of those bitcoin, worth about $2.3 million by then, by tracing the payment to an account the investigators could access. Two lessons follow. Paying a ransom does not end an incident: the systems still had to be cleaned, checked, and restored. And involving law enforcement early can pay off in ways a company cannot achieve alone." }
    },
    {
      title: 'Should you pay the ransom?',
      body: [
        "Sooner or later, a ransomware victim's leadership asks whether to pay. It is a business and legal decision, made by management with legal counsel, the insurer, and often law enforcement, not by the analyst. You should still understand the arguments, because your evidence shapes the decision.",
        "Against paying: there is no guarantee the decryption tool works or that stolen data is deleted; payment funds the next attack and marks the company as a payer; and the US Treasury Department's Office of Foreign Assets Control (OFAC) has warned that paying a group under sanctions can itself break the law. The FBI advises against paying.",
        "What usually decides it is preparation. A company with clean, offline backups and a tested restore plan can recover without paying. A company without them may face weeks of downtime. That is why the strongest ransomware control is a backup the attacker cannot reach."
      ]
    },
    {
      title: 'Playbooks and automation',
      body: [
        "Because the first moves for common incidents are predictable, teams write them as <strong>playbooks</strong> and increasingly automate them. <strong>Security orchestration, automation, and response (SOAR)</strong> tools connect the SIEM, EDR, firewall, and ticketing system so that, for example, a confirmed ransomware alert automatically isolates the host, blocks the C2 address, opens a P1 ticket, and pages the on-call analyst. Automation handles the fast, repetitive steps; people still make the judgment calls, such as whether to stop a production line."
      ],
      callout: { kind: 'real', title: 'SolarWinds: containment by directive', text: "When the SolarWinds Orion compromise became public in December 2020, the Cybersecurity and Infrastructure Security Agency (CISA) issued Emergency Directive 21-01, ordering federal civilian agencies to disconnect or power down the affected Orion products right away. It was containment on a national scale: cut off the compromised software first, then investigate how far the attackers had gone. You studied the full case in Projects 5 and 6." }
    },
    {
      title: 'Going further on your own',
      body: [
        "Optional, free resources for after class:"
      ],
      list: [
        "<a href=\"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf\" target=\"_blank\" rel=\"noopener\">NIST SP 800-61 Revision 2</a>: the classic incident handling guide behind the lifecycle.",
        "<a href=\"https://www.cisa.gov/topics/cybersecurity-best-practices/organizations-and-cyber-safety/incident-response\" target=\"_blank\" rel=\"noopener\">CISA incident response resources</a>: federal playbooks and templates.",
        "<a href=\"https://tryhackme.com/path/outline/soclevel1\" target=\"_blank\" rel=\"noopener\">TryHackMe SOC Level 1</a>: hands-on detection and response rooms.",
        "<a href=\"https://blog.talosintelligence.com/\" target=\"_blank\" rel=\"noopener\">Cisco Talos blog</a>: real incident write-ups and current threats."
      ]
    }
  ],
  check: [
    { q: "Ransomware is actively encrypting files on a server. What is the best first action?", opts: ["Run a full antivirus scan", "Restore last week's backup over the files", "Email all staff about the attack", "Isolate the server from the network"], ans: 3, why: "Isolation stops the spread to other systems and file shares while keeping memory evidence. Scans and restores come later." },
    { q: "Why is isolating an infected host usually better than turning it off?", opts: ["Isolation keeps the contents of memory, which may hold keys and attacker activity", "Turning it off is slower", "Turning it off spreads the malware", "Isolation removes the malware"], ans: 0, why: "Memory is lost at power-off. Isolation stops the spread and preserves that volatile evidence." },
    { q: "The team deleted the ransomware from a server but did not notice a new domain administrator account the attacker created. Which step was incomplete?", opts: ["Preparation", "Containment", "Eradication", "Lessons learned"], ans: 2, why: "Removing persistence, such as attacker-created accounts, is part of eradication." },
    { q: "Over the next two weeks, IT moves an unpatchable server onto its own network segment and adds extra logging while a replacement is prepared. What is this?", opts: ["Short-term containment", "Long-term containment", "Recovery", "A tabletop exercise"], ans: 1, why: "Temporary fixes that keep the business running safely for days while the full fix is prepared are long-term containment." },
    { q: "Which order is correct for recovering a server after ransomware?", opts: ["Reconnect it, then patch it, then restore data", "Restore data onto the infected disk, then scan it", "Rebuild from a clean image, restore verified clean data, patch, then reconnect and monitor", "Pay the ransom, then reconnect it"], ans: 2, why: "Rebuild clean, restore clean data, close the hole, and only then reconnect, while watching closely." }
  ]
};

COURSE_LESSONS['8.4'] = {
  id: '8.4', week: 8, title: 'Digital forensics basics: volatility and custody', mins: 15, module: 'Security+ objective 4.8',
  intro: "When Dee realized ENG-FS01 was being encrypted, her first instinct was to reboot it. Rebooting would have stopped the encryption and erased everything in memory: the running malware, the attacker's network connections, and possibly the key. Digital forensics is the discipline of collecting and handling evidence so that it stays complete and trustworthy, whether it ends up in front of an insurer, a court, or just your own lessons-learned meeting. This lesson covers the two ideas every responder needs on day one: the order of volatility and the chain of custody.",
  sections: [
    {
      title: 'What digital forensics is for',
      body: [
        "<strong>Digital forensics</strong> is the collection, preservation, analysis, and reporting of digital evidence in a way that can stand up to challenge. In incident response it answers questions that logs alone cannot: exactly what the malware did, which files were opened, whether data was copied, and how the attacker got the access they used.",
        "Evidence may be needed long after the incident. The insurance company may ask for proof before paying a claim. A customer may sue. Law enforcement may build a criminal case. Even if none of that happens, sloppy evidence handling can leave you unsure what really happened, and you cannot fix what you do not understand.",
        "Three principles run through all of it. <strong>Preserve first</strong>: capture evidence before you change the system. <strong>Prove it is unchanged</strong>: hash everything you collect. <strong>Account for every hand</strong>: record who had the evidence at every moment."
      ]
    },
    {
      title: 'Legal hold and e-discovery',
      body: [
        "A <strong>legal hold</strong> (also called a litigation hold) is an instruction, usually from legal counsel, to preserve all information related to a matter and to suspend normal deletion. If an incident might lead to a lawsuit or investigation, the company must stop automatic deletion of the relevant email, logs, and files. Destroying them after that point, even by a routine cleanup job, can bring serious penalties.",
        "<strong>E-discovery</strong> (electronic discovery) is the legal process of finding, collecting, and handing over electronically stored information for a lawsuit or investigation. Good logging and retention make e-discovery cheaper and faster; a legal hold makes sure the material still exists when it is requested."
      ],
      keyTerms: [
        { term: 'Legal hold', definition: 'An instruction to preserve all information related to a legal matter and suspend normal deletion.' },
        { term: 'E-discovery', definition: 'Identifying, collecting, and producing electronically stored information for legal proceedings.' }
      ]
    },
    {
      title: 'Order of volatility',
      figure: { id: 'order-volatility', caption: 'Collect the most volatile evidence first. It disappears soonest.' },
      body: [
        "Some evidence vanishes in seconds; some lasts for years. The <strong>order of volatility</strong> is the rule that you collect the most volatile (short-lived) evidence first. The idea comes from RFC 3227, a long-standing guide to evidence collection. From most to least volatile:",
        "<strong>CPU registers and cache</strong> change every nanosecond and are rarely collected in practice. <strong>Memory (RAM)</strong> holds running processes, open network connections, logged-in users, decrypted data, and sometimes encryption keys. All of it disappears when the power goes off. <strong>Swap or page files and temporary files</strong> are overwritten as the system keeps running. <strong>Disk</strong> contents, including files, local logs, and deleted data that has not yet been overwritten, survive a shutdown. <strong>Remote logs</strong> on the SIEM, firewall, and EDR console last for days or months before they are rotated out. <strong>Backups and archives</strong> last the longest.",
        "In practice, that means: before you shut anything down or reboot it, capture memory. Then image the disk. Then export the remote logs before they rotate. Note the time on the system's clock compared with a trusted clock, because the system's clock may be wrong."
      ],
      callout: { kind: 'exam', title: 'RAM before disk', text: "If a question asks what to collect first from a running compromised system, choose memory (RAM) over disk, and disk over remote logs or backups. If it asks why you should not power off a compromised host, the answer is that volatile evidence in memory would be lost." }
    },
    {
      title: 'Acquisition: copies, not originals',
      body: [
        "<strong>Acquisition</strong> is the act of collecting evidence. The golden rule is that you analyze copies, never the original.",
        "<strong>Memory acquisition</strong> uses a small tool run on the live system to write the contents of RAM to an external drive. It changes the system slightly (the tool itself uses memory), so you note exactly what you ran and when.",
        "<strong>Disk imaging</strong> makes a bit-for-bit copy of a drive, including empty space and deleted files, not just the visible files. For a removed drive, investigators attach it through a <strong>write blocker</strong>, a device or software that lets the computer read the drive but physically prevents any writes, so the original cannot be changed even by accident.",
        "<strong>Hashing</strong> proves the copy matches. You calculate a cryptographic hash, such as SHA-256, of the original and of the copy. Matching values prove they are identical. You record the hash on the custody form; anyone can recalculate it later to prove the evidence has not changed. You did this kind of check with checksums in Week 2. In Lab 8.2 you will run <code>sha256sum -c</code> against Dee's hash list and find a file that no longer matches."
      ],
      keyTerms: [
        { term: 'Acquisition', definition: 'Collecting evidence, such as a memory capture or a disk image, in a documented and repeatable way.' },
        { term: 'Disk image', definition: 'A bit-for-bit copy of an entire drive, including unused space and deleted data.' },
        { term: 'Write blocker', definition: 'Hardware or software that allows reading from a drive but prevents any writes to it.' }
      ]
    },
    {
      title: 'Chain of custody',
      figure: { id: 'chain-custody', caption: 'Every item of evidence has a documented trail from collection to storage.' },
      body: [
        "The <strong>chain of custody</strong> is the written record of who collected each item of evidence, when, and how, and of every person who had it afterward, up to the moment it is used. Its job is to make it impossible for anyone to argue credibly that the evidence was swapped, altered, or contaminated.",
        "Each item gets a unique label (for example, CC-IR-2026-01-E1) and goes into a tamper-evident bag or container. The custody form records the item, its hash, and every transfer: date and time, who released it, who received it, why, and both signatures. Between transfers it sits in locked storage with limited access.",
        "A gap breaks the chain. If an evidence drive sat on a help desk counter for nine hours with no record of who had it, a lawyer on the other side will ask what happened during those nine hours, and you will have no answer. If someone opened a file and saved it, even without meaning to change anything, its hash no longer matches and you can no longer prove it is the original. You will find exactly this problem in the Cedar Creek evidence in Lab 8.2."
      ]
    },
    {
      title: 'First responder rules',
      body: [
        "Most evidence is ruined in the first hour by people trying to help. If you are first on the scene of a compromised computer, follow a few simple rules until someone with forensic training takes over.",
        "<strong>Do not</strong> browse the files on the suspect system, open the ransom note on it, or run an antivirus scan before imaging: each of those changes timestamps and can overwrite deleted data. <strong>Do not</strong> reboot or shut down unless the plan says so. <strong>Do not</strong> copy evidence to a shared drive or email it around.",
        "<strong>Do</strong> photograph the screen, including any ransom note and the clock. <strong>Do</strong> write down what you see and every action you take, with times. <strong>Do</strong> isolate the system from the network if the plan says to, and then call the incident lead. Evidence handling is a skill; until you are trained, your job is to keep things as they are and to record them."
      ]
    },
    {
      title: 'Timelines, preservation, and reporting',
      body: [
        "Most forensic analysis ends in a <strong>timeline</strong>: every relevant event from every source, put in order. Timelines only work if the clocks agree. Systems should synchronize time with the Network Time Protocol (NTP), and analysts must convert every log to one time zone, usually UTC, before merging. Note any clock that was wrong and by how much.",
        "<strong>Preservation</strong> means keeping evidence intact and stored securely for as long as it may be needed, including the original media, the images, the hash records, and the custody forms.",
        "<strong>Reporting</strong> means writing up what was collected, how, what the analysis found, and how confident you are, in language a non-technical reader can follow. Facts and conclusions are kept separate: 'The EDR log shows vssadmin.exe deleting shadow copies at 03:31' is a fact; 'the attacker was preparing to encrypt' is a conclusion drawn from it."
      ],
      callout: { kind: 'real', title: 'Equifax: evidence that named the attackers', text: "After the 2017 Equifax breach, outside investigators and the FBI analyzed logs, network traffic, and systems to reconstruct how the attackers moved from the vulnerable Apache Struts web application to the databases holding personal data. In February 2020 the US Department of Justice charged four members of China's People's Liberation Army with the intrusion. A criminal case like that rests on evidence that was collected carefully, hashed, and kept under an unbroken chain of custody for years." }
    }
  ],
  check: [
    { q: "A compromised server is still running. Which evidence should be collected first?", opts: ["A disk image", "The firewall logs on the SIEM", "The backup tapes", "The contents of memory (RAM)"], ans: 3, why: "Memory is the most volatile evidence you can practically collect; it is lost at power-off. Disk, remote logs, and backups last longer." },
    { q: "An investigator documents every person who handled a seized drive, with dates, times, purpose, and signatures for each transfer. What practice is this?", opts: ["Legal hold", "Chain of custody", "E-discovery", "Order of volatility"], ans: 1, why: "The documented trail of who had the evidence, when, and why is the chain of custody." },
    { q: "Why do investigators connect a seized hard drive through a write blocker?", opts: ["To encrypt the drive", "To make the drive faster to copy", "To prevent any changes to the original while it is read", "To remove malware from the drive"], ans: 2, why: "A write blocker allows reads but blocks writes, so the original evidence cannot be altered." },
    { q: "Legal counsel tells IT to stop the automatic 30-day deletion of email for the engineering team because a customer may sue over the incident. What is this?", opts: ["A legal hold", "A chain of custody", "Eradication", "A tabletop exercise"], ans: 0, why: "Preserving information related to a possible legal matter and suspending normal deletion is a legal hold." },
    { q: "After imaging a disk, the analyst calculates the SHA-256 hash of the original and of the image, and both values match. What does this prove?", opts: ["The image is encrypted", "The disk contains no malware", "The attacker has been identified", "The image is an exact, unchanged copy of the original"], ans: 3, why: "Matching hashes prove the copy is identical to the original. They say nothing about malware or attribution." }
  ]
};

COURSE_LESSONS['8.5'] = {
  id: '8.5', week: 8, title: 'Incident reports, lessons learned, and notification', mins: 15, module: 'Security+ objective 4.8',
  intro: "By 3 PM on the day of the ransomware attack, Greg Palmer wants to know four things in plain English: what happened, how bad it is, whether it is over, and what it will cost. Weeks later, the insurer, possibly a customer's lawyers, and the team planning next year's budget will want much more. The incident report serves all of them. This lesson covers what goes in it, how to run the lessons-learned meeting that improves the company, and who outside the company may need to be told.",
  sections: [
    {
      title: 'Why the report matters',
      body: [
        "The <strong>incident report</strong> is the official record of what happened, when, how it was discovered, what was done, and what it cost. It is used to brief management, to support insurance claims, to meet legal and contractual notification duties, and to improve the next response. If it is not in the report, then as far as anyone later can tell, it did not happen.",
        "Writing it well is a core analyst skill, and the same skill employers test in interviews. A clear, accurate report written under pressure earns trust faster than any certification.",
        "The report is not the same as the <strong>incident log</strong> you started at detection. The log is raw: every observation and action in the order it happened, including dead ends and guesses that turned out wrong. The report is built from the log after the facts are checked. Keep the log anyway; it is evidence of what the team knew and when, and lawyers or insurers may ask to see it."
      ]
    },
    {
      title: 'What goes in it',
      figure: { id: 'report-anatomy', caption: 'The sections of an incident report, and who reads which part.' },
      body: [
        "Templates vary, but most incident reports contain the same core sections:"
      ],
      list: [
        "<strong>Incident ID</strong>: a unique tracking number, such as CC-IR-2026-01, used in every email, ticket, and file about the incident.",
        "<strong>Executive summary</strong>: about five plain sentences for a non-technical reader: what happened, the business impact, the current status, and the top recommendation.",
        "<strong>Classification</strong>: incident type (ransomware, data breach, account compromise), priority, and who owns the response.",
        "<strong>Detection</strong>: how the incident was found (EDR alert, SIEM rule, user report, outside notice) and when.",
        "<strong>Timeline</strong>: confirmed events in order, each with exact time and the evidence that supports it. State the time zone; many teams list UTC with local time beside it.",
        "<strong>Scope and impact</strong>: every affected host, account, and data set; downtime; data lost or stolen; cost where known.",
        "<strong>Root cause</strong>: why it was possible. Not just 'the attacker logged in', but 'the VPN still offered a password-only profile (CC-LEGACY) and the account still had the help desk's default password'.",
        "<strong>Actions taken</strong>: who did what and when, for containment, eradication, and recovery.",
        "<strong>Recommendations</strong>: specific fixes, each with an owner and a target date."
      ]
    },
    {
      title: 'Writing it well',
      body: [
        "Separate facts from conclusions, and say how sure you are. 'At 01:41:58 local time the VPN accepted a login for m.alvarez from 203.0.113.77' is a fact from a log. 'The password was probably guessed in a password spray' is a conclusion, supported by the 143 failed attempts against 38 accounts from the same address just before it.",
        "Be exact. Use real hostnames, account names, IP addresses, and times. Write in the active voice: 'Dee Ortiz isolated ENG-FS01 at 06:14', not 'the server was isolated'. Avoid blame: the report describes what failed in the process, not whose fault it was.",
        "Write the executive summary last, after the details are settled, and test it on someone outside IT. If they cannot repeat back what happened and what you want them to approve, rewrite it."
      ],
      callout: { kind: 'cedar', title: 'What Greg needs at 3 PM', text: "Something like: 'Overnight, criminals logged in through our VPN with a guessed password, used an IT account to reach the engineering file server, copied project files out, and encrypted about 4,000 of them. We stopped it at 6:14 this morning. Engineering is down until tomorrow while we restore from Friday's backup, and some work since Friday may be lost. The criminals claim they will publish the files; we have called our insurer and the FBI. The most important fix is to switch off the old password-only VPN profile so every login needs MFA, which we can finish this week.'" }
    },
    {
      title: 'Communicating during the incident',
      body: [
        "The report comes at the end, but communication starts in the first hour. Three habits keep it under control.",
        "<strong>Regular status updates.</strong> The incident lead sends short updates on a fixed schedule, for example every two hours during a P1: what is known, what has been done, what is next, and when the next update comes. People who know when they will hear something stop interrupting the responders.",
        "<strong>Need to know.</strong> Share details only with people who need them to do their part. Rumors travel fast, and an employee who posts 'we got hacked' on social media can force the company's hand before the facts are in.",
        "<strong>Out-of-band channels.</strong> If the attacker may be reading company email or chat, move the response to a channel they cannot see, such as phone calls or a separate messaging group set up in advance. At Cedar Creek, the attacker held domain administrator rights for more than four hours, so anything sent through company email that night must be treated as read."
      ]
    },
    {
      title: 'The lessons-learned meeting',
      body: [
        "Within about two weeks of closing an incident, the team holds a <strong>lessons-learned meeting</strong>, also called a post-incident review or after-action review. Everyone who took part attends. The meeting is <strong>blameless</strong>: it looks for weaknesses in the process, tools, and controls, not for someone to punish, because people who fear blame hide mistakes.",
        "The team answers a few standard questions. What happened, and when? What did we do well? What slowed us down or went wrong? What information did we need sooner? What would we do differently? Which controls would have prevented or detected this earlier?",
        "<strong>Root cause analysis</strong> often uses the 'five whys': ask why something happened, then ask why again of each answer. Why were files encrypted? An admin account ran ransomware. Why did the attacker have the admin account? Its password was stored in a logon script every user could read. Why was it there? An old fix in 2017 was never cleaned up. Each 'why' points at a fix.",
        "The output is a list of improvements, each with an owner and a date: a new MFA requirement, a corrective action report (CAR) for a broken process, an updated playbook, a new detection rule. Then someone checks they actually get done."
      ]
    },
    {
      title: 'Who needs to be told',
      body: [
        "Many incidents create a duty to notify people outside the company. Legal counsel decides what is required, but analysts should know the main triggers, because the clock often starts when the company becomes aware of the incident.",
        "<strong>Personal data.</strong> Every US state has a breach notification law requiring companies to tell affected residents when certain personal information, such as Social Security numbers or financial account numbers, is exposed. The European Union's General Data Protection Regulation (GDPR) requires notifying the data protection authority within 72 hours of becoming aware of a personal data breach, where feasible. Health data covered by HIPAA has its own federal rules.",
        "<strong>Investors.</strong> Since late 2023, US public companies must disclose a cybersecurity incident they judge material in a filing with the Securities and Exchange Commission (SEC) within four business days of making that judgment.",
        "<strong>Contracts and partners.</strong> Customer contracts often require notice when their data is involved, even when no law does. Cedar Creek's customers trust it with their drawings, so their contracts matter here. Cyber insurance policies require prompt notice of a claim. Law enforcement, such as the FBI, should be contacted early in ransomware and extortion cases.",
        "All outside communication goes through the communication plan: one voice, approved wording, and no guessing about facts that are not yet confirmed."
      ],
      callout: { kind: 'real', title: 'Equifax: how not to notify', text: "Equifax's security team saw suspicious traffic on July 29, 2017, and the company announced the breach on September 7, about six weeks later. Personal data of about 147 million people had been exposed. To let people check whether they were affected, Equifax set up a separate website on a new domain, equifaxsecurity2017.com, which looked to many people like a phishing site. Equifax's own social media account then directed people several times to a fake look-alike site. The delay and the confusion made the damage to trust worse. In 2019 Equifax agreed to a settlement with the Federal Trade Commission, the Consumer Financial Protection Bureau, and the states of up to $700 million, including up to $425 million to help affected people. You read the FTC's settlement page in Project 8." }
    }
  ],
  check: [
    { q: "Why should timestamps in an incident report state their time zone, ideally using UTC?", opts: ["It removes confusion when correlating logs from systems set to different time zones", "UTC is required by every state law", "UTC times are more accurate than local times", "It hides the local time of the attack"], ans: 0, why: "Logs come from systems in different time zones. A single standard such as UTC makes the timeline line up correctly." },
    { q: "Which statement belongs in the root cause section of an incident report?", opts: ["Dee isolated ENG-FS01 at 06:14", "Engineering was down for 16 hours", "Restore from the Friday tape finished at 22:00", "The VPN did not require MFA, and the account had a guessable password"], ans: 3, why: "Root cause explains why the incident was possible. The others are actions taken, impact, and recovery details." },
    { q: "Two weeks after the incident, the team meets to discuss what worked, what failed, and what to change, without assigning personal blame. What is this?", opts: ["A tabletop exercise", "A legal hold", "A blameless lessons-learned meeting", "E-discovery"], ans: 2, why: "A post-incident review focused on process improvement, not blame, is the lessons-learned meeting." },
    { q: "Under GDPR, how quickly must an organization normally notify the data protection authority after becoming aware of a personal data breach?", opts: ["Within 24 hours", "Within 72 hours, where feasible", "Within 30 days", "Only if the media reports it"], ans: 1, why: "GDPR sets a 72-hour notification window to the supervisory authority, where feasible." },
    { q: "Which section of the incident report should be written last and aimed at a non-technical reader?", opts: ["The executive summary", "The timeline", "The list of affected IP addresses", "The detection method"], ans: 0, why: "The executive summary is written once the facts are settled, in plain language for leadership." }
  ]
};

COURSE_LESSONS['8.6'] = {
  id: '8.6', week: 8, title: 'IR, DR, and BCP: backups and staying in business', mins: 15, module: 'Security+ objectives 3.4 and 5.2',
  intro: "The ransomware on ENG-FS01 was contained by 6:15 in the morning. The business problem was just beginning: Engineering had no file server, Line 2 needed released drawings by tomorrow, and the only clean copy of the data was a five-day-old tape. Incident response stops the attack. Two other plans decide how fast the company recovers and whether it keeps running in the meantime. This lesson covers how incident response, disaster recovery, and business continuity fit together, the numbers that drive them, and the backup habits that decide whether ransomware is a bad week or the end of a company.",
  sections: [
    {
      title: 'Three plans that work together',
      body: [
        "A major incident usually sets off three plans at once. They overlap, but each has its own job and its own owner."
      ],
      table: {
        head: ['Plan', 'Question it answers', 'Focus', 'Cedar Creek example'],
        rows: [
          ['<strong>Incident response plan (IRP)</strong>', 'How do we stop this attack and find out what happened?', 'The security event: detect, contain, eradicate, learn', 'Isolate ENG-FS01, disable the stolen accounts, preserve evidence'],
          ['<strong>Disaster recovery plan (DRP)</strong>', 'How do we get IT systems and data back?', 'Restoring technology, measured by RTO and RPO', 'Rebuild ENG-FS01 and restore D:\\Projects from the Friday tape'],
          ['<strong>Business continuity plan (BCP)</strong>', 'How does the business keep working while IT is down?', 'Critical business functions, not just IT', 'Engineering works from paper and local copies; Line 2 runs on already-released drawings']
        ]
      },
      callout: { kind: 'exam', title: 'IR vs DR vs BCP', text: "If the question is about the attack itself, think incident response. If it is about restoring systems and data, think disaster recovery. If it is about keeping business operations going, often with manual workarounds, think business continuity. A continuity of operations plan (COOP) is the government term for business continuity." }
    },
    {
      title: 'Business impact analysis and the four numbers',
      figure: { id: 'rpo-rto', caption: 'RPO looks back from the incident to the last good backup. RTO looks forward to restored service.' },
      body: [
        "A <strong>business impact analysis (BIA)</strong> identifies the business functions that matter most, what each depends on (systems, people, suppliers), and how much harm each hour of disruption causes. It produces the targets that disaster recovery has to meet. Security+ expects four of them.",
        "<strong>Recovery time objective (RTO)</strong>: the longest a system or function can be down before the harm becomes unacceptable. Tom Becker says Engineering can survive one day; after that, Line 2 runs out of drawings. So ENG-FS01's RTO is 24 hours.",
        "<strong>Recovery point objective (RPO)</strong>: the most data the business can afford to lose, measured as time. An RPO of 24 hours means backups must be no more than a day old. Cedar Creek backs up ENG-FS01 to tape once a week, so in the worst case it loses up to seven days of engineering work, far worse than the one day Engineering wants.",
        "<strong>Mean time to repair (MTTR)</strong>: the average time it takes to fix a failed system and return it to service. If MTTR is longer than the RTO, the plan does not work.",
        "<strong>Mean time between failures (MTBF)</strong>: the average time a repairable system runs between failures. A higher MTBF means more reliable equipment. (Mean time to failure, MTTF, is the same idea for things you replace rather than repair.)"
      ],
      keyTerms: [
        { term: 'Business impact analysis (BIA)', definition: 'A study of which business functions matter most and how much harm each hour of disruption causes.' },
        { term: 'RTO', definition: 'Recovery time objective: the maximum acceptable downtime for a system or function.' },
        { term: 'RPO', definition: 'Recovery point objective: the maximum acceptable data loss, measured as the age of the newest usable backup.' },
        { term: 'MTTR / MTBF', definition: 'Mean time to repair (average fix time) and mean time between failures (average run time between failures).' }
      ]
    },
    {
      title: 'Backups: types and the 3-2-1 rule',
      figure: { id: 'backup-321', caption: 'Three copies, two kinds of media, one copy out of reach.' },
      body: [
        "Backups are the most important defense against ransomware. A company with clean, recent, reachable backups can restore instead of paying. Know the basic types:",
        "A <strong>full backup</strong> copies everything. It is the simplest to restore and the slowest to make. An <strong>incremental backup</strong> copies only what changed since the last backup of any kind; it is fast to make, but a restore needs the last full plus every incremental since. A <strong>differential backup</strong> copies everything changed since the last full; a restore needs only the last full plus the latest differential. A <strong>snapshot</strong> captures the state of a system or volume at one moment, usually on the same storage, so it is fast but not a true backup on its own. <strong>Replication</strong> copies data continuously to another system or site. <strong>Journaling</strong> records each change so data can be rolled forward or back to a point in time.",
        "The <strong>3-2-1 rule</strong> says: keep at least <strong>3</strong> copies of important data, on <strong>2</strong> different types of media, with <strong>1</strong> copy offsite or offline. Many organizations now add that the offline or offsite copy should be <strong>immutable</strong>: once written, it cannot be changed or deleted for a set period, even by an administrator. Ransomware crews hunt for backups with stolen admin accounts, so an offline or immutable copy is often the one that saves the company.",
        "Backups also need encryption (they hold everything sensitive), a sensible frequency set by the RPO, and regular <strong>test restores</strong>. A backup that has never been restored is a hope, not a backup."
      ],
      callout: { kind: 'cedar', title: 'Why the tape survived, and what it cost', text: "The attacker deleted ENG-FS01's shadow copies and its backup catalog at 03:31. Friday's tape survived only because it was sitting on a shelf, not in the drive: it was offline. But it was also in the same room as the servers (a fire would take both), and it was five days old. Every encrypted file that changed since Friday night is lost. In your report you will recommend nightly backups and an offsite or immutable copy." }
    },
    {
      title: 'Resilience: sites, redundancy, and power',
      body: [
        "Disaster recovery also covers where you recover to. A <strong>hot site</strong> is a fully equipped, running alternate site with current data, ready within minutes or hours; it is the most expensive. A <strong>warm site</strong> has the equipment and connections but needs data restored and some setup, usually ready in hours to days. A <strong>cold site</strong> is a space with power and network connections but little or no equipment, taking days to weeks. <strong>Geographic dispersion</strong> puts sites far enough apart that one storm or power failure cannot hit both.",
        "<strong>High availability</strong> designs avoid downtime in the first place. <strong>Load balancing</strong> spreads work across several servers so one can fail without an outage. <strong>Clustering</strong> lets a standby server take over automatically when the active one fails. Using more than one vendor or platform (platform diversity, or multiple cloud providers) means one product's flaw does not take everything down. <strong>Capacity planning</strong> makes sure there are enough people, technology, and infrastructure to run during a crisis, not just on a normal day.",
        "Power is part of resilience too. An <strong>uninterruptible power supply (UPS)</strong> provides battery power for minutes, enough to ride through a short outage or shut down cleanly. A <strong>generator</strong> provides power for hours or days. Cedar Creek's server room has both."
      ]
    },
    {
      title: 'Restoring in the right order',
      body: [
        "Systems depend on each other, so recovery follows a dependency order. Identity and network services come first, because nothing else works without them: domain controllers such as DC01, DNS, and the firewall. Next come the systems the most critical business functions need, as ranked in the BIA. At Cedar Creek that means ENG-FS01 and the CAD license server before marketing file shares. Everything else follows.",
        "Before restoring, check that the backup itself is clean. Attackers are often inside for days or weeks before they strike, so the newest backup may already contain their tools or accounts. Restore into an isolated network first, scan it, and check it for the persistence you found during the investigation, such as the svc_update account, before reconnecting it. Protect the backup system too: separate administrator accounts, MFA, and no access from ordinary domain admin credentials, so a stolen admin account cannot delete the backups."
      ]
    },
    {
      title: 'Testing the plans',
      body: [
        "Like incident response plans, recovery and continuity plans must be tested. A <strong>tabletop exercise</strong> walks through the plan in discussion. A <strong>failover test</strong> actually switches a service to its backup system or site to prove it works. A <strong>simulation</strong> rehearses a realistic scenario. <strong>Parallel processing</strong> runs the backup system alongside the primary with real work to confirm it produces the same results before anyone depends on it."
      ],
      callout: { kind: 'real', title: 'Maersk and NotPetya: the backup that survived by accident', text: "In June 2017 the NotPetya malware destroyed systems at the shipping company Maersk, wiping thousands of servers and PCs in a few hours, including the domain controllers that ran its network logins. Maersk's rebuild depended on a single domain controller in an office in Ghana that had been offline during the attack because of a local power outage. That one unplanned offline copy let the company rebuild its network. The lesson every responder took away: plan your offline copy on purpose." }
    }
  ],
  check: [
    { q: "A hospital's plan says the patient records system must be back within 4 hours of an outage. Which metric is this?", opts: ["RPO", "MTBF", "MTTD", "RTO"], ans: 3, why: "The maximum acceptable downtime is the recovery time objective (RTO)." },
    { q: "Cedar Creek backs up ENG-FS01 to tape once a week. What is the worst-case data loss from that schedule?", opts: ["About one hour", "About one day", "Up to about seven days", "None, because tapes are offline"], ans: 2, why: "With weekly backups, an incident just before the next backup loses up to a week of changes. That is the effective RPO." },
    { q: "Which of these follows the 3-2-1 backup rule?", opts: ["Three daily backups on one NAS in the server room", "The live data, a backup on a disk array, and a backup on tape stored offsite", "Two copies on the same server with one in the recycle bin", "One full backup a week and one incremental a day on the same disk"], ans: 1, why: "Three copies (live, disk, tape), two media types (disk and tape), and one offsite copy." },
    { q: "During a ransomware outage, Engineering switches to paper drawings and local copies so Line 2 keeps running. Which plan covers this?", opts: ["Incident response plan", "Disaster recovery plan", "Business continuity plan", "Acceptable use policy"], ans: 2, why: "Keeping business functions running with workarounds while IT is down is business continuity." },
    { q: "A company keeps an alternate site with equipment and network connections ready, but data must be restored before it can take over, which takes about a day. What kind of site is it?", opts: ["Warm site", "Hot site", "Cold site", "Snapshot site"], ans: 0, why: "A warm site has equipment and connections but needs data restored and some setup, usually hours to days." }
  ]
};

COURSE_QUIZ.w8 = {
  title: 'Week 8 Quiz: Incident Response',
  pass: 80,
  questions: [
    { lesson: '8.1', q: "Put these steps in the correct order: containment, preparation, lessons learned, eradication, detection and analysis, recovery.", opts: ["Detection and analysis, preparation, containment, recovery, eradication, lessons learned", "Preparation, detection and analysis, containment, eradication, recovery, lessons learned", "Preparation, containment, detection and analysis, eradication, lessons learned, recovery", "Containment, detection and analysis, eradication, recovery, preparation, lessons learned"], ans: 1, why: "Preparation comes first, then detection and analysis, containment, eradication, recovery, and lessons learned." },
    { lesson: '8.1', q: "After confirming a compromised server, the team immediately takes it off the network to stop the attacker moving to other systems. Which step is this?", opts: ["Detection and analysis", "Containment", "Eradication", "Recovery"], ans: 1, why: "Stopping the spread by isolating the server is containment." },
    { lesson: '8.1', q: "Marcus wants to test Cedar Creek's new incident response plan without touching any systems. The team will talk through a ransomware scenario step by step. What should he schedule?", opts: ["A failover test", "A penetration test", "A tabletop exercise", "A parallel processing test"], ans: 2, why: "A tabletop exercise tests a plan through discussion, with no systems touched." },
    { lesson: '8.2', q: "A SOC analyst receives an alert: ransomware behavior on workstation FIN-PC-03, files actively being encrypted. What should the analyst do first?", opts: ["Notify the employee's manager by email", "Run a full antivirus scan on FIN-PC-03", "Isolate FIN-PC-03 from the network", "Wait for the scan results before acting"], ans: 2, why: "Isolation stops the spread to shared drives and backups. Notification and scanning come after." },
    { lesson: '8.2', q: "A database server is sending 50 GB to an unknown address and a ransom note has appeared on the CFO's laptop. Using P1 to P4, what priority is this?", opts: ["P4 Low", "P3 Medium", "P2 High", "P1 Critical"], ans: 3, why: "Active data theft plus ransomware is an immediate threat to core operations: P1 Critical." },
    { lesson: '8.2', q: "A SIEM rule links a failed VPN login, a successful VPN login from the same foreign address, and an admin account used from the VPN address that login received. What SIEM capability made this possible?", opts: ["Log compression", "Correlation", "Encryption", "Retention"], ans: 1, why: "Correlation links related events across different sources by shared details such as IP address, account, and time." },
    { lesson: '8.2', q: "A detection rule fires 300 times a day on normal software updates. Analysts start closing its alerts without reading them. What is the main risk?", opts: ["The SIEM will run out of storage", "Alert fatigue causes a real attack to be missed", "The rule becomes a false negative for updates", "The updates will fail"], ans: 1, why: "Floods of false positives cause alert fatigue, and tired analysts miss the true positive hidden among them. Tune the rule." },
    { lesson: '8.2', q: "An investigator learns the attacker first entered the network 47 days before the ransomware ran, and rebuilds the full sequence from SIEM logs. Which step does this work belong to?", opts: ["Preparation", "Detection and analysis", "Containment", "Recovery"], ans: 1, why: "Determining scope, entry point, and timeline is analysis, part of detection and analysis." },
    { lesson: '8.3', q: "After removing all malware and backdoor accounts, the team rebuilds the servers from known-good images and restores verified clean backups. Which step is this?", opts: ["Containment", "Eradication", "Recovery", "Lessons learned"], ans: 2, why: "Returning systems to service from clean images and backups is recovery." },
    { lesson: '8.3', q: "The IR team has contained a malware outbreak and is now deleting malicious files, removing scheduled tasks the attacker added, and patching the exploited flaw. Which step are they in?", opts: ["Containment", "Eradication", "Recovery", "Detection and analysis"], ans: 1, why: "Removing the cause, including persistence and the vulnerability, is eradication." },
    { lesson: '8.3', q: "An employee clicked a phishing link and entered her Microsoft 365 password. The sign-in logs show someone else is now using her account. Which containment step comes first?", opts: ["Reimage her laptop", "Disable the account or reset its password and MFA, and end active sessions", "Send a company-wide awareness email", "Delete the phishing email from her inbox only"], ans: 1, why: "For a stolen account, cut off the attacker's access first: disable or reset, and revoke sessions. Then investigate what was touched." },
    { lesson: '8.3', q: "A SOAR platform automatically isolates the host, blocks the C2 address, and opens a P1 ticket when a ransomware alert is confirmed. What is the main benefit?", opts: ["It replaces the need for an incident response plan", "It removes the need for human analysts", "It performs fast, repetitive first steps consistently, cutting response time", "It prevents all false positives"], ans: 2, why: "SOAR automates predictable playbook steps so analysts can focus on judgment calls." },
    { lesson: '8.4', q: "Which list is in the correct order of volatility, most volatile first?", opts: ["Disk, RAM, backups, remote logs", "RAM, disk, remote logs, backups", "Backups, remote logs, disk, RAM", "Remote logs, RAM, disk, backups"], ans: 1, why: "Memory is lost first, then local disk changes, then remote logs rotate out, and archived backups last longest." },
    { lesson: '8.4', q: "A forensic investigator copies malware artifacts from a compromised server and records every person who handles the evidence, with times and signatures. What practice is this?", opts: ["Incident categorization", "Chain of custody", "Threat hunting", "E-discovery"], ans: 1, why: "Documenting every person who handled the evidence, and when, is the chain of custody." },
    { lesson: '8.4', q: "An evidence file's SHA-256 hash no longer matches the value recorded when it was collected. What can you conclude?", opts: ["The file is now encrypted", "The file has been changed since collection and can no longer be proven original", "The hash algorithm is broken", "The file contains malware"], ans: 1, why: "A changed hash means the content changed. The item can no longer be shown to be the original evidence." },
    { lesson: '8.5', q: "Two weeks after a ransomware incident is resolved, the CISO brings the team together to document what happened, what worked, what failed, and what to change. Which step is this?", opts: ["Detection and analysis", "Containment", "Eradication", "Lessons learned (post-incident activity)"], ans: 3, why: "The post-incident review that turns experience into improvements is lessons learned." },
    { lesson: '8.5', q: "When should documentation of an incident begin?", opts: ["After it is fully resolved", "When legal counsel is engaged", "After containment", "As soon as the incident is detected"], ans: 3, why: "Start the log at detection. Times, actions, and decisions recorded as they happen become the timeline and the evidence." },
    { lesson: '8.5', q: "Equifax found suspicious traffic in late July 2017 and announced the breach in early September. Which lesson does this most directly support?", opts: ["Backups should be tested", "Notification and communication must be planned in advance, because delay and confusion multiply the damage", "Tabletop exercises are unnecessary", "Shadow copies replace backups"], ans: 1, why: "The six-week gap and the confusing notification website hurt trust. A planned communication process prevents that." },
    { lesson: '8.6', q: "An organization follows the 3-2-1 backup rule. Which statement describes it?", opts: ["3 daily backups, 2 weekly, 1 monthly", "3 copies of data, on 2 different media types, with 1 copy offsite or offline", "3 backup admins, 2 backup windows, 1 verification test", "3 backup servers in 2 cloud regions with 1 tape"], ans: 1, why: "Three copies, two media types, one offsite or offline copy that ransomware and fire cannot reach." },
    { lesson: '8.6', q: "Cedar Creek's last good backup of ENG-FS01 finished Friday at 23:47 and ransomware started Wednesday at 03:36. Engineering wants to lose no more than one day of work. What does this show?", opts: ["The RTO was met", "The real RPO of about four days is far worse than the one-day target, so backups must run more often", "MTBF is too low", "The business continuity plan failed"], ans: 1, why: "Data loss is measured back to the last good backup. A weekly schedule cannot meet a one-day RPO; nightly backups are needed." }
  ]
};
