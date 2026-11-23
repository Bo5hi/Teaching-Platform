// Week 9 short talks + quiz (SOC Operations: mock tickets). Shapes: docs/COURSE_V2.md
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['9.1'] = {
  id: '9.1', week: 9, title: 'Triage, priority, and SLAs', mins: 10, module: 'Security+ Domain 4: Security Operations',
  intro: "Before you were hired, Cedar Creek's alerts and help desk requests were worked in a hurry by a busy three-person IT team. Marcus has pulled the tickets from August to October 2026 back into a queue and assigned them to you as your training queue. Treat every ticket as if it arrived this minute. This talk covers how the ticket board works, how to decide what to work first, and the clock that starts the moment a ticket is assigned to you.",
  sections: [
    {
      title: 'How the ticket board works',
      body: [
        "Open the <strong>SOC Ticket Board</strong> from your work blocks. A SOC (security operations center) is the team that watches for and responds to security events. At Cedar Creek, for now, that team is you. You only see tickets your instructor has assigned to you, so if the board is empty, the next batch has not been assigned yet.",
        "Click a ticket to open it. The top shows the reporter, the description, and the evidence: logs, email headers, and lookups, each with a <strong>How to read this log</strong> box and a filter box. Below that you set the ticket's <strong>status</strong> and <strong>priority</strong> and add <strong>work notes</strong>. When you are done, set the status to Resolved or Closed. That opens the close form, which asks for a <strong>disposition</strong> and a write-up."
      ],
      table: {
        head: ['Status', 'Use it when'],
        rows: [
          ['New', 'Nobody has looked at the ticket yet.'],
          ['In Progress', 'You are actively investigating.'],
          ['Pending', 'You are waiting on someone else, such as a user\'s reply or a manager\'s approval. The SLA clock keeps running.'],
          ['Resolved', 'You found the answer and the fix is done or handed off. Opens the close form.'],
          ['Closed', 'No further action is needed, for example a duplicate. Also opens the close form.']
        ]
      },
      callout: { kind: 'tip', title: 'Submitting locks the ticket', text: "Once you submit the close form, the ticket becomes read-only. Write your notes first and close last. If your instructor sends a ticket back, your earlier answers are kept and the close form opens with them filled in." }
    },
    {
      title: 'Triage: what to work first',
      body: [
        "<strong>Triage</strong> is the quick first look that decides how serious a ticket is and how fast it needs attention. The word comes from emergency rooms, where a nurse decides who sees the doctor first. You are not solving the ticket yet. You are answering a few questions in a minute or two.",
        "Two ideas drive priority. <strong>Impact</strong> is how much damage the problem could do: how many people, which data, which systems. <strong>Urgency</strong> is how fast it gets worse if nobody acts. A locked-out user is urgent for that one person but low impact. Files being encrypted on a shared server are high impact and very urgent, because every minute more files are lost."
      ],
      list: [
        "Is something malicious happening <strong>right now</strong>, or did it already stop?",
        "How many users, hosts, or accounts are involved? One, or many?",
        "Is sensitive data involved, such as drawings, customer specs, payroll, or Social Security numbers?",
        "Is a privileged account involved, such as an admin or service account?",
        "Could it spread to other systems if nobody acts?",
        "Is money about to move, such as a wire transfer or a change to a vendor's bank details?"
      ]
    },
    {
      title: 'Priorities and SLAs at Cedar Creek',
      body: [
        "Each ticket arrives with a default priority. Treat it as the reporter's guess. After triage, set the priority you can defend. Your instructor grades whether you picked the right one and whether your notes explain why.",
        "An <strong>SLA</strong> (service-level agreement) is a promise about how fast work gets done. Cedar Creek's ticket SLAs are set by priority. The clock starts when your instructor assigns the ticket to you and stops when you resolve or close it. The tracker shows each ticket as On Track, At Risk, or Breached, and it uses the priority you set."
      ],
      table: {
        head: ['Priority', 'Meaning', 'Resolve within', 'Example (not from your queue)'],
        rows: [
          ['P1 Critical', 'Active attack or major business impact', '4 hours', 'Malware spreading between file servers'],
          ['P2 High', 'Likely security problem or a group of users blocked', '8 hours', 'An admin account signing in from an unknown country'],
          ['P3 Medium', 'Needs checking, limited impact so far', '24 hours', 'One user reports a strange email but did not click'],
          ['P4 Low', 'Routine request, no security impact', '72 hours', 'A request to install approved software next week']
        ]
      },
      callout: { kind: 'cedar', title: 'Work in priority order', text: "Several tickets will sit in your queue at once. Work the highest priority first, even if a lower one looks quicker. A P4 that waits a day is fine. A P1 that waits an hour can cost Cedar Creek its file server." }
    },
    {
      title: 'Dispositions: how a ticket ends',
      body: [
        "The <strong>disposition</strong> is your verdict on the ticket. A <strong>true positive</strong> means the alert was right: something bad or against policy really happened. A <strong>false positive</strong> means the alert fired but nothing bad happened. A <strong>false negative</strong> is the dangerous one you never see on the board: something bad happened and no alert fired."
      ],
      list: [
        "<strong>True Positive: Malicious Activity Confirmed.</strong> An attacker or malware was really involved.",
        "<strong>True Positive: Policy Violation.</strong> No attacker, but someone broke a company rule.",
        "<strong>False Positive: Expected Behavior.</strong> The activity was normal and allowed.",
        "<strong>False Positive: Tuning Required.</strong> Normal activity, and the alert rule should change so it stops firing on it.",
        "<strong>Escalated to Tier II / IR Team.</strong> Bigger than one analyst should handle alone.",
        "<strong>Closed: No Action Required</strong> and <strong>Closed: Duplicate Ticket.</strong> Nothing to do, or already covered by another ticket."
      ],
      keyTerms: [
        { term: 'Triage', definition: 'A fast first look that decides how serious a ticket is and how soon it must be worked.' },
        { term: 'SLA', definition: 'Service-level agreement: a promise about how quickly work will be done, here set by ticket priority.' },
        { term: 'True positive', definition: 'An alert that correctly flagged something malicious or against policy.' },
        { term: 'False positive', definition: 'An alert that fired on activity that turned out to be normal.' }
      ]
    },
    {
      title: 'Why triage matters',
      body: [
        "Alerts only help if someone reads them, decides what they mean, and acts in time. A SOC that treats every alert the same either drowns or starts ignoring them. Good triage is how a small team keeps up."
      ],
      callout: { kind: 'real', title: 'Target, 2013', text: "During the Target breach, the company's malware detection tools raised alerts while the attackers were installing their card-stealing software. The alerts were not acted on in time, and the attackers went on to steal data on tens of millions of payment cards. A U.S. Senate committee report later pointed to those missed warnings. Having the alert is not enough: someone has to triage it." }
    },
    {
      title: 'On the exam',
      body: [
        "Security+ expects you to know the alerting and response vocabulary from Domain 4: alerting, triage, escalation, false positives, false negatives, and tuning."
      ],
      callout: { kind: 'exam', title: 'Tuning', text: "If a question describes a rule that keeps firing on normal activity, the answer is usually to tune the rule, not to turn it off. Turning it off risks false negatives, which are worse." }
    }
  ],
  check: [
    { q: "A ticket arrives marked P3. After triage you find files on a shared drive are being encrypted right now. What should you do with the priority?", opts: ["Leave it at P3 because the reporter chose it", "Lower it to P4 until you finish your other tickets", "Raise it to P1 and work it first", "Set it to Pending and wait for the reporter"], ans: 2, why: "The default priority is only the reporter's guess. Active encryption on a shared server is high impact and very urgent, which is P1." },
    { q: "When does the SLA clock start on the Cedar Creek ticket board?", opts: ["When your instructor assigns the ticket to you", "When the original event happened in August", "When you first open the ticket", "When you set the status to In Progress"], ans: 0, why: "The tracker measures from the moment the ticket is assigned to you until you resolve or close it." },
    { q: "An alert fires every night when the backup job copies files. You confirm it is the normal job. Which disposition fits best?", opts: ["True Positive: Malicious Activity Confirmed", "Escalated to Tier II / IR Team", "True Positive: Policy Violation", "False Positive: Tuning Required"], ans: 3, why: "Nothing bad happened, so it is a false positive. Because it will keep firing on a normal job, the rule needs tuning." },
    { q: "Which is a false negative?", opts: ["An alert fires on a normal login", "Malware runs and no alert fires", "An alert fires on real malware", "Two alerts fire for the same event"], ans: 1, why: "A false negative is a real attack that produced no alert. It is the most dangerous outcome because nobody knows to respond." },
    { q: "You are waiting for a manager to approve an access request. Which status should the ticket have?", opts: ["Pending", "Resolved", "Closed", "New"], ans: 0, why: "Pending means you are waiting on someone else. The SLA clock keeps running, so follow up." }
  ]
};

COURSE_LESSONS['9.2'] = {
  id: '9.2', week: 9, title: 'Reading logs and writing ticket notes', mins: 10, module: 'Security+ Domain 4: Security Operations',
  intro: "Almost every ticket in your queue comes with evidence: a domain controller log, a sign-in log, a firewall log, an EDR timeline. Your job is to find the few rows that matter and write down what they prove. This talk shows you how to read a log without getting lost, and how to write notes that the next analyst, or your instructor, can trust.",
  sections: [
    {
      title: 'What a log row tells you',
      body: [
        "A <strong>log</strong> is a record a system writes every time something happens. Almost every log row answers the same five questions: <strong>when</strong> (timestamp), <strong>where</strong> (host name or IP address), <strong>who</strong> (account), <strong>what</strong> (the event), and <strong>how it ended</strong> (success, failure, blocked, allowed).",
        "Each log on the board has a <strong>How to read this log</strong> box. Read it first. It tells you what the columns and codes mean. Then use the filter box to show only the rows for one user, one host, or one IP address."
      ],
      table: {
        head: ['Log source', 'Question it answers'],
        rows: [
          ['Windows Security log (domain controller)', 'Who logged on, from which computer, and did it work?'],
          ['Microsoft Entra ID sign-in log', 'Who signed in to Microsoft 365, from where, with which app, and did MFA pass?'],
          ['VPN gateway log', 'Who connected from outside, from which IP, and did it work?'],
          ['Firewall log', 'Which traffic was allowed or blocked, between which addresses and ports?'],
          ['Web proxy log', 'Which websites did a computer visit, and how much did it send?'],
          ['EDR telemetry', 'Which programs ran on a computer, and which program started them?'],
          ['DLP events', 'Did sensitive data move somewhere it should not, such as a USB drive?']
        ]
      }
    },
    {
      title: 'Codes you will see this week',
      body: [
        "Windows writes a numbered <strong>event ID</strong> for each kind of event. A few cover most of what you need. The <strong>logon type</strong> tells you how the person logged on: at the keyboard, over the network, or by unlocking the screen."
      ],
      table: {
        head: ['Code', 'Meaning'],
        rows: [
          ['4624', 'Successful logon'],
          ['4625', 'Failed logon (the result shows why, such as a bad password)'],
          ['4740', 'Account locked out after too many failures'],
          ['4723', 'A user tried to change their own password'],
          ['4634', 'Logoff'],
          ['Logon type 2', 'Interactive: someone typing at that computer'],
          ['Logon type 3', 'Network: a connection from another computer, such as a mapped drive'],
          ['Logon type 7', 'Unlock: someone unlocked a locked screen'],
          ['Logon type 10', 'Remote interactive: a Remote Desktop (RDP) session']
        ]
      },
      callout: { kind: 'tip', title: 'Legacy protocols', text: "In sign-in logs, watch the app or protocol column. Older mail protocols such as IMAP and POP cannot show a modern MFA prompt. Attackers who have a password like them for exactly that reason." }
    },
    {
      title: 'A method for reading any log',
      list: [
        "<strong>Start from the alert.</strong> Note the exact time, account, host, and IP in the ticket.",
        "<strong>Filter to that account or host.</strong> Read the rows before and after the alert time, not just the alert row.",
        "<strong>Find what is normal.</strong> Where does this user usually log on from? How much does this host usually send? A baseline turns 'a lot' into a number.",
        "<strong>Count.</strong> How many failures? How many hosts? How many recipients? Counts belong in your notes.",
        "<strong>Pivot.</strong> When one row gives you a new clue, such as a source IP or a computer name, filter on that next.",
        "<strong>Find the first and last event.</strong> When did it start, and is it still happening?"
      ],
      body: [
        "Watch the <strong>time zone</strong>. Email headers and cloud logs are often in UTC (Coordinated Universal Time), while on-site logs use local time. Cedar Creek is in the U.S. Central time zone: UTC-5 from March to early November, and UTC-6 in winter. A row stamped 14:05 UTC in October is 09:05 at Cedar Creek. Before you build a timeline, convert every time to one zone and say which one you used."
      ]
    },
    {
      title: 'Writing work notes',
      body: [
        "Work notes are your evidence trail. Your instructor grades them under 'Investigation and evidence', and in a real SOC they are what the next analyst reads at 3 a.m. Write one note per piece of evidence you check. Each good note has four parts."
      ],
      list: [
        "<strong>What I checked:</strong> the log or source, and the filter you used.",
        "<strong>What I found:</strong> the facts, with exact times, hosts, IPs, and accounts.",
        "<strong>What it means:</strong> your interpretation, labeled as such.",
        "<strong>What is next:</strong> the next check, action, or person to contact."
      ],
      table: {
        head: ['Weak note', 'Strong note'],
        rows: [
          ['Checked the logs. Looks like a bad login. Will keep looking.', 'Checked: VPN log filtered on user t.sample. Found: 14 failed logons 02:10-02:31 UTC from 203.0.113.88, then 1 success at 02:33. Means: likely guessed password, not a typo (user was asleep). Next: check what the session accessed in the firewall log.']
        ]
      },
      callout: { kind: 'cedar', title: 'Facts, then guesses', text: "Marcus's rule for notes: write the fact first, then your guess, and never mix them up. 'The upload was 6 GB' is a fact. 'The user is stealing data' is a guess, and it can hurt someone if it is wrong." }
    },
    {
      title: 'The close-out write-up',
      body: [
        "Easy and Moderate tickets close with a <strong>Summary</strong>: what you investigated, what you found, the action taken, and anything left to do. Hard and Expert tickets ask for three parts: <strong>Actions taken</strong>, <strong>Root cause</strong>, and <strong>Recommendation</strong>. You will practice those on Day 2. In both forms, someone who never opened the ticket should understand what happened from your write-up alone."
      ],
      callout: { kind: 'real', title: 'Equifax, 2017', text: "Logs only help if they are collected and readable. At Equifax, a device that inspected outgoing network traffic had an expired certificate for months, so it could not see inside the encrypted traffic the attackers were using to take data out. Shortly after the certificate was renewed, staff spotted the suspicious traffic. The U.S. Government Accountability Office described this in its 2018 report on the breach." }
    },
    {
      title: 'On the exam',
      body: [
        "Security+ asks which data source would best support an investigation: firewall logs, application logs, endpoint logs, operating system security logs, IDS/IPS logs, network logs, and metadata, plus packet captures and dashboards."
      ],
      callout: { kind: 'exam', title: 'Match the question to the log', text: "Which websites did a user visit? Proxy log. Who logged on to the server? OS security log. Which program launched PowerShell? Endpoint (EDR) log. Was the connection blocked at the edge? Firewall log." }
    }
  ],
  check: [
    { q: "A Windows log shows event 4625 five times, then event 4740 for the same account. What happened?", opts: ["Five successful logons, then a logoff", "Five password changes, then a reset", "Five network logons, then an RDP session", "Five failed logons, then the account was locked out"], ans: 3, why: "4625 is a failed logon and 4740 is an account lockout, which Windows triggers after too many failures." },
    { q: "Which log best answers 'Which website did this computer upload 2 GB to last night?'", opts: ["Domain controller security log", "DLP USB event log", "Web proxy log", "DHCP lease log"], ans: 2, why: "The web proxy log records each site a computer visited and how many bytes it sent and received." },
    { q: "An email header shows 15:20 UTC. It was received in August at Cedar Creek. What local time is that?", opts: ["09:20", "10:20", "20:20", "15:20"], ans: 1, why: "In August, Central time is UTC-5, so 15:20 UTC is 10:20 at Cedar Creek." },
    { q: "Which work note is the most useful to the next analyst?", opts: ["Looked into it. Seems fine.", "Bad guy got in, need to fix ASAP.", "User was annoying on the phone.", "Firewall log, filtered on 10.20.30.88: 3 blocked connections to 203.0.113.9 port 445 at 03:12-03:14. Likely a scan. Next: check EDR on that host."], ans: 3, why: "It says what was checked, gives exact facts (host, IP, port, times), separates the interpretation, and names the next step." },
    { q: "A logon row shows logon type 10. How did the person log on?", opts: ["At the keyboard", "Through a Remote Desktop session", "By unlocking the screen", "Through a mapped network drive"], ans: 1, why: "Logon type 10 is remote interactive, which is a Remote Desktop (RDP) session." }
  ]
};

COURSE_LESSONS['9.3'] = {
  id: '9.3', week: 9, title: 'Phishing and email analysis', mins: 10, module: 'Security+ Domain 2 and Domain 4',
  intro: "Cedar Creek hired a security analyst because of one email: the fake 'CFO' wire request Amanda Singh reported in August. Today's first tickets are reported emails. This talk shows you how to read an email header, what SPF, DKIM, and DMARC really prove, how to spot a lookalike domain, and how to find out who else got the same message.",
  sections: [
    {
      title: 'Read the header, not the display name',
      body: [
        "The name you see in your inbox, such as 'IT Support', is the <strong>display name</strong>. Anyone can type any display name. What matters is the actual address and its <strong>domain</strong>, the part after the @. The full <strong>header</strong> is the hidden record that travels with every message. These fields matter most:"
      ],
      table: {
        head: ['Header field', 'What it tells you'],
        rows: [
          ['From', 'The sender the user sees. Check the domain letter by letter.'],
          ['Reply-To', 'Where replies go. A Reply-To that differs from From is a classic BEC trick.'],
          ['Return-Path', 'Where bounce messages go. This is the domain SPF checks.'],
          ['Received', 'One line per mail server the message passed through. Read them from the bottom up: the bottom line is closest to the sender.'],
          ['Authentication-Results', 'What your mail server concluded from SPF, DKIM, and DMARC.'],
          ['Date and Message-ID', 'When it was sent (watch the time zone) and a unique ID for tracing it.']
        ]
      }
    },
    {
      title: 'SPF, DKIM, and DMARC',
      body: [
        "Three DNS-based checks help a mail server judge whether a message really came from the domain it claims. They are useful, but each one proves less than people assume."
      ],
      table: {
        head: ['Check', 'What it proves', 'What it does not prove'],
        rows: [
          ['SPF (Sender Policy Framework)', 'The sending server is on the domain\'s list of allowed senders.', 'That the domain is honest. An attacker who owns a lookalike domain can publish SPF and pass.'],
          ['DKIM (DomainKeys Identified Mail)', 'A digital signature from the sending domain, so the signed parts were not changed in transit.', 'That the signing domain is the real company.'],
          ['DMARC (Domain-based Message Authentication, Reporting, and Conformance)', 'Whether SPF or DKIM passed for the same domain shown in From, and what the domain owner wants done when they fail (none, quarantine, or reject).', 'Anything about a domain that has no DMARC policy at all.']
        ]
      },
      callout: { kind: 'tip', title: '"pass" for the wrong domain', text: "Always ask: pass for WHICH domain? SPF=pass for a domain one letter off from cedarcreek-ind.com means the attacker set up their own domain properly. It is not a sign the email is safe." }
    },
    {
      title: 'Lookalike domains',
      body: [
        "A <strong>lookalike domain</strong> (also called typosquatting) is registered to look like a real one at a glance. Attackers swap letters (rn for m), drop or add a letter, change one vowel, or add a word such as '-secure' or '-support'. The August BEC attempt used cedarcreek-lnd.com: a lowercase L in place of the i in 'ind'.",
        "Compare the suspect domain to the real one character by character. Then look up when it was registered. A domain created a few days before the email arrived is a strong warning sign, because real business partners rarely email from brand-new domains."
      ]
    },
    {
      title: 'Links, attachments, and lures',
      list: [
        "<strong>Links:</strong> the text of a link and where it goes can differ. Read the real address in the header or the evidence, and check it against the company's real sites.",
        "<strong>Attachments:</strong> watch for double extensions such as invoice.pdf.exe. Windows hides known extensions by default, so the user sees 'invoice.pdf'.",
        "<strong>Lures:</strong> common stories include 'your mailbox is full', 'review this document', 'updated invoice or W-9', and 'urgent request from the CEO'. The story creates pressure so the reader acts before thinking.",
        "<strong>Sandbox results:</strong> a sandbox opens a link or file in an isolated test machine and reports what it did. Use it as evidence, not as the whole answer.",
        "<strong>Not only email:</strong> websites can ask permission to show browser notifications, and scammers use that to push fake virus warnings."
      ]
    },
    {
      title: 'Scope it: who else got it?',
      body: [
        "One reported email is rarely the only copy. Use the <strong>message trace</strong> (the mail gateway's delivery log) to filter on the sender address or subject and list every recipient. Then check the <strong>proxy log</strong> for anyone who visited the link. The response depends on what you find: block the sender and domain, remove the message from every mailbox, reset the password and sign out every session for anyone who entered credentials, and tell users what to watch for.",
        "<strong>Business email compromise</strong> (BEC) often has no link and no malware, only a request. The defense is a process: verify any payment or bank-detail change by calling a known phone number, never the one in the email. Also check whether the real executive's mailbox was broken into, for example by looking for new sign-ins or inbox rules."
      ],
      callout: { kind: 'real', title: 'Fake invoices, real losses', text: "Between 2013 and 2015, a Lithuanian man sent fake invoices that appeared to come from a real hardware supplier to two large U.S. technology companies, later named as Google and Facebook. They wired more than $100 million before the scheme was discovered. He later pleaded guilty in U.S. federal court. Size and security budgets did not stop it; checking payment requests through a second channel would have." }
    },
    {
      title: 'On the exam',
      body: [
        "Security+ tests email security in Domain 4 (SPF, DKIM, DMARC, and the secure email gateway) and phishing types in Domain 2: phishing, spear phishing, whaling (targeting executives), smishing (text messages), vishing (voice calls), BEC, and typosquatting."
      ],
      callout: { kind: 'exam', title: 'Which control?', text: "If a question asks how to stop spoofing of YOUR OWN domain, the answer is usually to publish SPF, sign with DKIM, and set a DMARC policy of quarantine or reject. If it asks how to stop lookalike domains, those three will not help; user training and payment verification will." }
    }
  ],
  check: [
    { q: "An email shows From: 'Greg Palmer' <g.palmer@cedarcreek-ind.com> but Reply-To: g.palmer@cedarcreek-lnd.com. What should worry you most?", opts: ["Replies will go to a lookalike domain the attacker controls", "The display name matches the CFO", "The message was sent in the morning", "The From domain is correct"], ans: 0, why: "A Reply-To on a lookalike domain sends the victim's reply straight to the attacker, a classic BEC setup." },
    { q: "A phishing email from support@cedarcreek-secure-mail.com shows spf=pass. What does that prove?", opts: ["The email came from Cedar Creek's real mail server", "The email is safe to open", "The sending server is allowed to send for cedarcreek-secure-mail.com, which anyone could register", "DKIM and DMARC also passed"], ans: 2, why: "SPF only checks the sending server against the domain in the Return-Path. An attacker can set up SPF for a domain they own." },
    { q: "Which header lines show the path a message took, and in what order should you read them?", opts: ["Received lines, from the top down", "Subject lines, from the top down", "Received lines, from the bottom up", "Message-ID, left to right"], ans: 2, why: "Each server adds a Received line at the top, so the bottom line is the first hop, closest to the sender." },
    { q: "A user reported a phishing email. What is the best next step to find its full scope?", opts: ["Search the message trace for the sender address and list every recipient", "Ask the user who else might have received it", "Delete the reported copy and close the ticket", "Block the user's mailbox"], ans: 0, why: "The mail gateway's message trace shows every recipient of the same message. Then check the proxy log for clicks." },
    { q: "Accounts Payable gets an email asking to change a supplier's bank details. What control best stops this kind of BEC?", opts: ["Publishing a DMARC record", "A stronger spam filter", "Replying to the email to confirm", "Calling the supplier at a phone number already on file before changing anything"], ans: 3, why: "BEC relies on a convincing request, not malware. Verifying through a known, separate channel defeats it. Replying goes straight back to the attacker." }
  ]
};

COURSE_LESSONS['9.4'] = {
  id: '9.4', week: 9, title: 'Escalation and incident tickets', mins: 10, module: 'Security+ Domain 4: Security Operations',
  intro: "The rest of today's queue is P1 tickets: problems big enough that one analyst should not handle them alone. Some of them are connected to tickets you already worked. This talk covers when a ticket becomes an incident, who you escalate to at Cedar Creek, how to make a containment decision without breaking the business, and how to write the three-part close-out for Hard tickets.",
  sections: [
    {
      title: 'When a ticket becomes an incident',
      body: [
        "An <strong>event</strong> is anything that happens on a system. An <strong>incident</strong> is an event that harms, or threatens to harm, the confidentiality, integrity, or availability of data or systems. Most tickets are events. A few are incidents, and you need to recognize them fast.",
        "Treat a ticket as a likely incident if any of these is true:"
      ],
      list: [
        "Malicious activity is confirmed and still running.",
        "More than one host or account is involved, or it is spreading.",
        "A privileged account, such as an admin or service account, is involved.",
        "Sensitive data may have left the company.",
        "Money is about to move, or already has.",
        "The ticket says it is linked to another ticket. Read the linked ticket: two small problems can be one big one."
      ]
    },
    {
      title: 'Escalation at Cedar Creek',
      body: [
        "<strong>Escalation</strong> means handing a problem up to someone with more authority, skill, or resources, while you keep working your part. Escalating is not failure. Waiting too long to escalate is.",
        "Cedar Creek still does not have a written incident response plan. After the December ransomware on ENG-FS01 (Week 8), writing one is Marcus's first project for the new year. Until it is approved, he has given you this interim escalation list."
      ],
      table: {
        head: ['Situation', 'Who you contact'],
        rows: [
          ['Any P1, or anything you think might be one', 'Marcus Reyes (IT Manager), by phone, right away'],
          ['Containment on servers, Active Directory, or backups', 'Dee Ortiz (Systems Administrator), through Marcus'],
          ['A decision that stops production or costs money', 'Greg Palmer (CFO, security program sponsor), through Marcus'],
          ['A current or former employee may be involved', 'Rosa Medina (HR Manager). Do not contact the employee yourself.'],
          ['A wire transfer or bank-detail change may be fraud', 'Greg Palmer, and the bank\'s fraud line'],
          ['Likely data breach, ransomware, or a crime', 'Marcus and Greg decide on outside incident response help, legal advice, and law enforcement']
        ]
      },
      callout: { kind: 'cedar', title: 'Uptime matters here', text: "Walt Henley cares about production above all. Taking a file server or the plant network offline stops real work. That is why containment decisions that hit the business go to Marcus and Greg, with your evidence in hand." }
    },
    {
      title: 'Containment decisions',
      body: [
        "<strong>Containment</strong> stops the damage from spreading while you investigate. Every option has a cost, so match the action to the evidence."
      ],
      table: {
        head: ['Action', 'Stops', 'Costs'],
        rows: [
          ['Isolate the host with EDR', 'Malware spreading from one computer', 'That user cannot work; the computer stays on so memory evidence survives'],
          ['Disable the account and revoke sessions', 'An attacker using stolen credentials', 'The real user is locked out too; service accounts may break jobs'],
          ['Block an IP address or domain', 'Command-and-control traffic or uploads', 'May block something legitimate if you guessed wrong'],
          ['Take a share or server offline', 'Mass encryption or data theft', 'Everyone who uses it stops working']
        ]
      },
      callout: { kind: 'tip', title: 'Evidence before rebooting', text: "Rebooting or wiping a computer destroys what was in memory: running processes, network connections, and sometimes the only copy of the attacker's tools. Isolate first, collect evidence, then clean. This is the order of volatility from Week 8: collect the most short-lived evidence first." }
    },
    {
      title: 'Writing the Hard close-out',
      body: [
        "Hard tickets close with three required fields. Write each one so that Marcus could act on it without opening the ticket."
      ],
      list: [
        "<strong>Actions taken:</strong> what you checked and what you did, in time order, with times and systems. Include who you escalated to and when.",
        "<strong>Root cause:</strong> the underlying reason it happened, not the symptom. 'Files were encrypted' is a symptom. 'A user opened a malicious attachment, and the malware reached the share through that user's mapped drive' is a root cause.",
        "<strong>Recommendation:</strong> specific fixes that would stop this from happening again, and who should own each one."
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline, 2021', text: "Attackers got into Colonial Pipeline using the password for an old VPN account that did not require multifactor authentication. When the ransomware was found, the company shut down the entire pipeline as a precaution, a business decision felt across the region. A decision that big never belongs to one analyst. The analyst brings the evidence quickly; leadership owns the business call." }
    },
    {
      title: 'On the exam',
      body: [
        "Security+ expects you to know the incident response process: preparation, detection, analysis, containment, eradication, recovery, and lessons learned. Questions often ask what to do FIRST or NEXT."
      ],
      callout: { kind: 'exam', title: 'Containment comes before eradication', text: "If malware is actively spreading, the first action is usually to contain it, such as isolating the host, before removing it or restoring from backup. Restoring first can mean restoring into a network that is still infected." }
    }
  ],
  check: [
    { q: "Which ticket is most likely an incident that needs escalation?", opts: ["A user asks for software to be installed next week", "A service account is running admin tools on nine computers it has never touched", "One user cannot remember a password", "A printer is offline"], ans: 1, why: "A privileged account behaving abnormally across many hosts points to an attacker moving through the network. Escalate it as a P1." },
    { q: "Malware is spreading from one workstation to a file share. What should happen first?", opts: ["Isolate the workstation with EDR so it stays on but cannot reach the network", "Reboot the workstation to clear memory", "Restore the share from backup while the workstation is still connected", "Email all staff about the malware"], ans: 0, why: "Containment comes first. Isolating keeps the computer running for evidence while stopping the spread." },
    { q: "A DLP alert suggests a current engineer may be copying confidential drawings. Who should you involve, according to Marcus's interim escalation list?", opts: ["Confront the engineer at his desk", "Post about it in the IT Teams channel", "Nobody until you are sure", "Rosa Medina in HR, and do not contact the employee yourself"], ans: 3, why: "Possible insider cases go to HR. Contacting the employee yourself can tip them off or unfairly accuse them." },
    { q: "Which statement is a root cause rather than a symptom?", opts: ["Thousands of files were renamed", "Users could not open their documents", "A VPN account without MFA had a password that was guessed in a password spray", "A ransom note appeared in every folder"], ans: 2, why: "The other three describe what people saw. The guessed password on an account without MFA explains why it happened." },
    { q: "In the Colonial Pipeline attack, how did the attackers first get in?", opts: ["A zero-day exploit in the pipeline control system", "A password for an old VPN account that did not require MFA", "A malicious USB drive left in a parking lot", "A compromised software update"], ans: 1, why: "Colonial's CEO told the U.S. Senate the attackers used a legacy VPN account protected only by a password." }
  ]
};

COURSE_QUIZ.w9 = {
  title: 'Week 9 Quiz',
  pass: 80,
  questions: [
    { lesson: '9.1', q: "Three tickets are in your queue: a P4 software install, a P3 reported phishing email nobody clicked, and a P1 alert showing a server's files being encrypted now. Which do you work first?", opts: ["The P4, because it is quickest", "The P3, because it came in first", "Whichever one has the most evidence", "The P1, because it is active and high impact"], ans: 3, why: "Work in priority order. An active P1 can cost far more with every minute it waits." },
    { lesson: '9.1', q: "What is the resolution SLA for a P2 ticket at Cedar Creek?", opts: ["4 hours", "8 hours", "24 hours", "72 hours"], ans: 1, why: "P1 = 4 hours, P2 = 8 hours, P3 = 24 hours, P4 = 72 hours, measured from when the ticket is assigned." },
    { lesson: '9.1', q: "An IDS rule fires on every Windows update download, and the traffic is confirmed normal. What is the best long-term fix?", opts: ["Tune the rule so it no longer matches the update traffic", "Disable the IDS", "Escalate every alert to the IR team", "Ignore alerts from that rule"], ans: 0, why: "It is a false positive. Tuning removes the noise without blinding the IDS. Disabling or ignoring risks false negatives." },
    { lesson: '9.2', q: "A domain controller shows event 4624 with logon type 3 for a user from the computer FINANCE-03. What does that mean?", opts: ["The user unlocked their screen", "A failed logon from FINANCE-03", "A successful network logon came from FINANCE-03, such as a mapped drive", "An RDP session to FINANCE-03"], ans: 2, why: "4624 is a successful logon. Type 3 is a network logon, such as opening a file share." },
    { lesson: '9.2', q: "You are building a timeline from an email header in UTC and a firewall log in Cedar Creek local time. What should you do first?", opts: ["Use whichever time is earlier", "Ignore the times and go by row order", "Convert every time to one time zone and say which one you used", "Average the two times"], ans: 2, why: "A timeline is only trustworthy when every entry uses the same time zone, stated clearly." },
    { lesson: '9.2', q: "Which source best answers 'Which program started powershell.exe on ENG-09?'", opts: ["EDR process telemetry", "Firewall log", "Web proxy log", "Mail gateway trace"], ans: 0, why: "EDR records each process and the parent process that launched it." },
    { lesson: '9.3', q: "A reported email shows dmarc=none and dkim=none for the From domain. What does that tell you?", opts: ["The email is definitely malicious", "The email came from Cedar Creek's own server", "DMARC blocked the email", "The From domain has no DMARC policy and the message was not signed, so those checks give no assurance"], ans: 3, why: "None means there was nothing to check. It does not prove the email is bad, but it removes two reasons to trust it." },
    { lesson: '9.3', q: "Which domain is a lookalike of cedarcreek-ind.com?", opts: ["cedarcreek-ind.com", "cedercreek-ind.com", "mail.cedarcreek-ind.com", "www.cedarcreek-ind.com"], ans: 1, why: "cedercreek-ind.com swaps one letter (e for a) to fool a quick glance. A subdomain like mail.cedarcreek-ind.com still belongs to the real domain." },
    { lesson: '9.4', q: "A service account is running remote admin tools on many hosts at 3 a.m. What should you do first?", opts: ["Escalate to Marcus as a P1 and propose containing the account", "Close the ticket as expected behavior", "Wait until business hours to ask Dee", "Reboot every affected host"], ans: 0, why: "Abnormal behavior by a privileged account across many hosts is a likely incident. Escalate now and contain; rebooting destroys evidence." },
    { lesson: '9.4', q: "In a Hard ticket close-out, what belongs in the Root cause field?", opts: ["A list of every log you opened", "The disposition you chose", "The names of the users who reported it", "The underlying reason the incident happened"], ans: 3, why: "Root cause explains why it happened, such as a missing control or a specific mistake, not just what people saw." }
  ]
};
