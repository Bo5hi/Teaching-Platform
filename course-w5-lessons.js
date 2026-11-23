// Week 5 lessons + quiz. Shapes: docs/COURSE_V2.md
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['5.1'] = {
  id: '5.1', week: 5, title: 'Vulnerability management', mins: 15, module: 'CertMaster Module 8',
  intro: "On Friday evening Dee ran Cedar Creek's first real vulnerability scan. On Monday morning Marcus forwards you the export: thirty rows, five of them marked Critical. He asks one question: 'What do we fix first, and why?' This lesson gives you the process and the vocabulary to answer. You will learn where vulnerabilities come from, how they are found, how CVE and CVSS describe them, and why the highest score is not always the first fix. In Lab 5.1 you triage Dee's scan yourself.",
  sections: [
    {
      title: 'What a vulnerability is',
      body: [
        "A <strong>vulnerability</strong> is a weakness that an attacker could use to break confidentiality, integrity, or availability. A <strong>threat</strong> is someone or something that might use it. <strong>Risk</strong> is the chance that a threat uses the vulnerability, combined with how much damage that would do. Vulnerability management works on the first part: find the weaknesses and remove them, or make them hard to reach, before a threat gets there.",
        "Vulnerabilities come from many places, and Security+ expects you to recognize each family:"
      ],
      list: [
        "<strong>Operating system and software flaws</strong>: bugs in Windows, Linux, or an application that let an attacker run code or read data. Most are fixed by the vendor's patch.",
        "<strong>Legacy and end-of-life (EOL) systems</strong>: products the vendor no longer supports. They never get new patches. ENG-APP02 on Windows Server 2012 R2 is one.",
        "<strong>Firmware and hardware</strong>: code inside devices such as camera recorders, badge controllers, and firewalls. It is easy to forget, so it is often years out of date.",
        "<strong>Misconfiguration</strong>: a secure product set up insecurely. Default passwords, services that should be off, and old protocols left on all count.",
        "<strong>Zero-day</strong>: a flaw that attackers know about before the vendor has a fix. You cannot patch it, so you rely on other controls until a fix ships.",
        "<strong>Supply chain</strong>: a weakness that arrives through a vendor, such as a software update or a service provider that was itself compromised.",
        "<strong>Cloud, virtualization, and mobile</strong>: cloud storage left open to the public, a virtual machine escaping to its host (VM escape), or a phone that was jailbroken or loaded with apps from outside the official store (side loading)."
      ],
      keyTerms: [
        { term: 'Vulnerability', definition: 'A weakness in a system, process, or configuration that a threat could use to cause harm.' },
        { term: 'End-of-life (EOL)', definition: 'A product the vendor no longer supports with updates or security patches.' },
        { term: 'Zero-day', definition: 'A vulnerability that attackers know about or use before the vendor has released a fix.' }
      ]
    },
    {
      title: 'The vulnerability management cycle',
      figure: { id: 'w5-vm-cycle', caption: 'Vulnerability management never ends: every rescan feeds the next round.' },
      body: [
        "Vulnerability management is a cycle, not a project. New flaws are published every day, so a network that was clean last month is not clean today. The cycle has six steps.",
        "<strong>Identify</strong> the weaknesses. <strong>Analyze</strong> each one: is it real, and how bad is it here? <strong>Prioritize</strong> the list. <strong>Remediate</strong>, which means fix the flaw or reduce its risk. <strong>Validate</strong> that the fix worked. <strong>Report</strong> what changed to the people who own the risk. Then start again."
      ]
    },
    {
      title: 'How vulnerabilities are found',
      body: [
        "A <strong>vulnerability scanner</strong> such as Greenbone (OpenVAS), Nessus, or Qualys checks hosts against a database of known flaws. Dee used Greenbone. Scanners work in two ways.",
        "A <strong>non-credentialed scan</strong> looks at a host from the network, the way an outsider would. It sees open ports and version banners and guesses from them. A <strong>credentialed scan</strong> logs in to the host with an account and reads the installed software and patch list directly. Credentialed scans find more and guess less. Dee scanned the servers with credentials, but Walt allowed only a gentle, non-credentialed scan of the plant PCs.",
        "Scanning is not the only source. <strong>Static analysis</strong> reads an application's source code for flaws without running it, and <strong>dynamic analysis</strong> tests the running application. <strong>Package monitoring</strong> watches the third-party libraries your software uses. <strong>Threat feeds</strong> warn you about flaws being exploited right now. A <strong>penetration test</strong> proves which flaws can actually be used, and a <strong>bug bounty</strong> or <strong>responsible disclosure program</strong> invites outside researchers to report flaws privately, sometimes for a reward. <strong>Audits</strong> of systems and processes find gaps that no scanner can see, such as a missing deprovisioning step."
      ],
      callout: { kind: 'cedar', title: 'Banners can lie', text: "Finding 1021 says FW-CORE runs an outdated OpenSSH version. The scan only read the SSH banner from outside. The firewall vendor says the fixes were backported into the firmware without changing the version string. That is a classic false positive, and it is why credentialed checks and evidence matter." }
    },
    {
      title: 'Is it real? False positives and false negatives',
      body: [
        "Before you rank anything, confirm it. A <strong>false positive</strong> is a reported vulnerability that is not really there, such as the FW-CORE banner. Chasing false positives wastes time and erodes trust in the scanner. A <strong>false negative</strong> is a real vulnerability the scanner missed. False negatives are more dangerous because nobody knows to fix them. A scan that could not log in, a host that was asleep, or a flaw too new for the scanner's database can all cause one.",
        "Confirming a finding usually means one more piece of evidence: a credentialed check, a version shown in the management console, a configuration file, or a vendor statement. Write down what you checked. A finding marked 'false positive' without evidence will be argued about at every audit."
      ],
      callout: { kind: 'real', title: 'Equifax, 2017', text: "In March 2017 the Apache Software Foundation released a fix for CVE-2017-5638, a flaw in the Apache Struts web framework that let an attacker run commands with a single crafted web request. Equifax did not patch its online dispute portal. According to the U.S. Government Accountability Office (GAO-18-559), a scan Equifax ran afterward did not find the vulnerable system, and attackers got in during May 2017. They took personal data on about 147 million people. A patch existed; the process to find and apply it failed." }
    },
    {
      title: 'CVE and CVSS',
      figure: { id: 'w5-cvss', caption: 'Reading a CVSS vector: each letter pair answers one question about the attack.' },
      body: [
        "<strong>CVE</strong> (Common Vulnerabilities and Exposures) gives each publicly known vulnerability one ID, such as CVE-2019-0708. MITRE runs the CVE program. The ID lets a scanner, a vendor bulletin, and a news story all point at the same flaw. The U.S. <strong>National Vulnerability Database</strong> (NVD) adds detail to each CVE, including a severity score.",
        "<strong>CVSS</strong> (Common Vulnerability Scoring System) scores how severe a vulnerability is, from 0.0 to 10.0. The <strong>base score</strong> comes from a short <strong>vector string</strong>. The first four metrics describe how hard the attack is: attack vector (AV), attack complexity (AC), privileges required (PR), and user interaction (UI). Scope (S) says whether the damage can spread beyond the vulnerable component. The last three, C, I, and A, say how much confidentiality, integrity, and availability are lost.",
        "Read CVE-2019-0708 (BlueKeep) this way: AV:N, from across the network; AC:L, no special conditions; PR:N, no account needed; UI:N, nobody has to click anything; C:H/I:H/A:H, total loss of all three. That is why it scores 9.8. Compare PrintNightmare (CVE-2021-34527) at 8.8: the only difference is PR:L, which means the attacker needs a normal user account first.",
        "CVSS also defines optional <strong>temporal</strong> metrics (is there working exploit code yet?) and <strong>environmental</strong> metrics (how important is this system to you?). Version 4.0 was published in 2023, but most scanners and NVD entries you will meet still show 3.1."
      ],
      table: {
        head: ['CVSS v3 score', 'Rating'],
        rows: [['0.0', 'None'], ['0.1 - 3.9', 'Low'], ['4.0 - 6.9', 'Medium'], ['7.0 - 8.9', 'High'], ['9.0 - 10.0', 'Critical']]
      },
      keyTerms: [
        { term: 'CVE', definition: 'Common Vulnerabilities and Exposures: the public ID system for known vulnerabilities, such as CVE-2017-0144.' },
        { term: 'CVSS', definition: 'Common Vulnerability Scoring System: a 0.0 to 10.0 severity score built from a vector of attack and impact metrics.' }
      ]
    },
    {
      title: 'Prioritizing: severity is not the same as risk',
      body: [
        "The CVSS base score describes the flaw in general. It knows nothing about Cedar Creek. Two findings with the same score can carry very different risk here. To prioritize, add context:"
      ],
      list: [
        "<strong>Exposure</strong>: can attackers reach it from the internet, from any office PC, or only from one locked-down network?",
        "<strong>Asset criticality</strong>: what does the system hold or run? ENG-FS01 holds the crown jewels; TIMECLOCK-01 does not.",
        "<strong>Exploitation</strong>: is there public exploit code, or is it on CISA's <strong>Known Exploited Vulnerabilities</strong> (KEV) catalog, a list of flaws attackers are known to be using?",
        "<strong>Exposure factor</strong>: how much of the asset's value would one successful attack destroy?",
        "<strong>Compensating controls</strong> already in place, and the organization's <strong>risk tolerance</strong>: how much risk leadership has agreed to accept."
      ],
      callout: { kind: 'exam', title: 'Highest score first is a trap', text: "Questions often give two findings and ask which to fix first. A Critical finding on an isolated test box can rank below a High finding on an internet-facing server with public exploit code. Look for the words exposed, internet-facing, actively exploited, or business-critical in the question." }
    },
    {
      title: 'Remediate, validate, report',
      body: [
        "<strong>Patching</strong> is the usual fix. When you cannot patch, reduce the risk another way. <strong>Segmentation</strong> moves the system onto its own network so fewer paths reach it. A <strong>compensating control</strong> substitutes for the fix, such as blocking ports 445 and 3389 to PLANT-PC-07 from everywhere except one engineering PC. An <strong>exception</strong> or <strong>exemption</strong> is a written, approved decision to accept the risk for a set time, with an owner and a review date. <strong>Cyber insurance</strong> transfers some of the financial loss but does not stop the attack.",
        "After a fix, <strong>validate</strong> it: <strong>rescan</strong> the host, check the version yourself (<strong>verification</strong>), or have an <strong>audit</strong> confirm it. Then <strong>report</strong>: what was found, what was fixed, what was accepted, and what is still open. Leadership cares about the trend: are open Critical and High findings going down month to month?"
      ],
      callout: { kind: 'cedar', title: 'When patching is not allowed', text: "Walt's line vendor certified PLANT-PC-07's Windows 7 image and will not support it if IT patches it. That does not make the risk go away. The right answer is a compensating control (isolate it, close SMB and RDP to it, disable SMBv1) plus a documented exception owned by Walt, and pressure on the vendor for a supported image." }
    }
  ],
  check: [
    { q: "The scanner reports that FW-CORE runs a vulnerable OpenSSH version, but the vendor confirms the fix was backported and the banner was never updated. What is this finding?", opts: ["A false negative","A zero-day","A false positive","A compensating control"], ans: 2, why: "The scanner reported a vulnerability that is not really present. That is a false positive. A false negative is the opposite: a real flaw the scan missed." },
    { q: "Which scan type logs in to each host and reads its installed software and patches directly?", opts: ["Credentialed scan","Non-credentialed scan","Port scan","Passive scan"], ans: 0, why: "A credentialed scan uses an account to look inside the host, so it finds more and guesses less than a non-credentialed scan." },
    { q: "A CVSS vector contains PR:L. What does that tell you?", opts: ["The attack must be done in person","A user must click a link","The impact on confidentiality is low","The attacker needs a low-privilege account first"], ans: 3, why: "PR is privileges required. L means the attacker needs a normal, low-privilege account. PR:N would mean no account at all." },
    { q: "ENG-APP02 cannot be upgraded yet. IT moves it to its own network segment and allows only the CAD clients to reach it. What is this?", opts: ["Patching","A compensating control","Cyber insurance","Rescanning"], ans: 1, why: "When the real fix is not possible, a compensating control reduces a similar amount of risk another way. Isolation is the standard one for an unsupported server." },
    { q: "Dee patches FS-HR01. What is the best way to validate the fix?", opts: ["Ask Rosa whether the server feels faster","Raise the server's CVSS score","Delete the finding from the export","Rescan the host and confirm the finding is gone"], ans: 3, why: "Validation means proving the fix worked. A rescan or a direct version check gives evidence." }
  ]
};

COURSE_LESSONS['5.2'] = {
  id: '5.2', week: 5, title: 'Application attacks and secure development', mins: 15, module: 'CertMaster Modules 8, 13 + Academy: Secure Development',
  intro: "Many of the worst breaches did not start with a stolen password. They started with a web form that trusted what a stranger typed. Later today, in the mock pentest, you will log in to a test web application without knowing the password, using SQL injection. Today you learn why that works, the other application attacks Security+ expects you to recognize, and what developers do to stop them.",
  sections: [
    {
      title: 'Why applications are attacked',
      body: [
        "A web application sits on the internet and takes input from anyone. Every search box, login form, file upload, and web address parameter is a door. If the code treats that input as instructions instead of plain data, the attacker gets to give the server orders.",
        "Cedar Creek has no customer-facing web application of its own, but it uses many: Microsoft 365, the cloud payroll service, and supplier portals. It also runs web admin pages on devices such as NVR-01 and BADGE-CTRL. When you assess those, the same questions apply: does it check input, does it check who is asking, and is it patched?",
        "Two habits separate secure applications from weak ones. First, <strong>validate input on the server</strong>. Checks in the browser (client-side validation) are a convenience for honest users; an attacker simply sends the request without the browser. Only checks on the server count as security. Second, <strong>fail quietly</strong>. A login page that answers 'database error near admin'' has just told the attacker what database it uses and that the quote broke the query. Show users a short, generic error and write the details to a log that only administrators can read."
      ]
    },
    {
      title: 'Injection: SQL and commands',
      figure: { id: 'w5-sqli', caption: 'SQL injection: the input closes the quote and changes the meaning of the query. A parameterized query keeps input as data.' },
      body: [
        "<strong>SQL</strong> (Structured Query Language) is how applications ask a database for data. A login page might build this query from what you type: <code>SELECT * FROM users WHERE name = 'alice' AND pass = 'secret'</code>.",
        "<strong>SQL injection</strong> (SQLi) happens when the code pastes your input straight into that query. Type <code>admin'#</code> as the user name and the query becomes <code>... WHERE name = 'admin'#' AND pass = '...'</code>. The quote closes the name, and <code>#</code> starts a comment in MySQL, so the password check is ignored. The classic <code>' OR 1=1--</code> works the same way: <code>1=1</code> is always true, so every row matches.",
        "<strong>Command injection</strong> is the same mistake with the operating system. If a page passes your input to a shell command, adding <code>&amp;&amp; whoami</code> runs a second command on the server. You will see both in PBQ Lab 1 today.",
        "The fix for both is the same idea: keep code and data apart. Use <strong>parameterized queries</strong> (also called prepared statements), where the database receives the query shape and the user input separately, so input can never change the query's structure. Add <strong>input validation</strong> with an allow list (an account number is five digits, nothing else) and run the application's database account with least privilege. A <strong>web application firewall</strong> (WAF) in front of the application can block common injection patterns, but treat it as a second layer: attackers keep finding ways to disguise payloads, and only fixed code closes the hole for good."
      ],
      callout: { kind: 'real', title: 'MOVEit Transfer, 2023', text: "In May and June 2023 the Cl0p extortion group exploited a SQL injection zero-day, CVE-2023-34362, in MOVEit Transfer, a file transfer product used by many large organizations. They used it to steal files from many hundreds of organizations before most could patch. One unchecked input in one product reached a very long list of victims." }
    },
    {
      title: 'Cross-site scripting and request forgery',
      body: [
        "<strong>Cross-site scripting</strong> (XSS) injects script into a web page that other people view. The victim's browser trusts the site, so it runs the attacker's script with the site's privileges: it can read session cookies, change what the page shows, or send requests as the user. In <strong>reflected XSS</strong> the script rides in a link and bounces off the server once. In <strong>stored XSS</strong> the script is saved, for example in a comment, and runs for everyone who views it. <strong>DOM-based XSS</strong> happens entirely in the browser's own page code.",
        "The fix is <strong>output encoding</strong>: turn characters such as <code>&lt;</code> and <code>&gt;</code> into harmless text before the page displays them. A <strong>Content Security Policy</strong> (CSP) header and cookies marked <strong>HttpOnly</strong>, so scripts cannot read them, limit the damage.",
        "<strong>Cross-site request forgery</strong> (CSRF or XSRF) tricks a logged-in user's browser into sending a request the user never meant to send, such as 'change my email address', from another site. Anti-CSRF tokens and same-site cookies stop it. <strong>Server-side request forgery</strong> (SSRF) tricks the server itself into fetching a web address the attacker chooses, often an internal one."
      ],
      keyTerms: [
        { term: 'SQL injection', definition: 'Input that changes the meaning of a database query because the application pasted it into the query as code.' },
        { term: 'Cross-site scripting (XSS)', definition: 'Script injected into a trusted web page so it runs in other users\' browsers.' },
        { term: 'Parameterized query', definition: 'A query sent with placeholders, so user input is always treated as data and never as SQL.' }
      ]
    },
    {
      title: 'Other application attacks to recognize',
      table: {
        head: ['Attack', 'What it does', 'Indicator you might see'],
        rows: [
          ['Directory traversal', 'Uses ../ in a path to read files outside the web folder', 'Requests containing ../../etc/passwd or %2e%2e%2f'],
          ['Buffer overflow', 'Sends more data than a program\'s memory buffer holds, overwriting nearby memory', 'Crashes, very long input strings, unexpected code running'],
          ['Memory injection', 'Places malicious code into a running process\'s memory', 'A trusted process doing untrusted things, with no file on disk'],
          ['Race condition (TOCTOU)', 'Changes something between the time it is checked and the time it is used', 'Rare, timing-dependent errors or duplicate transactions'],
          ['Replay', 'Captures a valid request or token and sends it again', 'The same session token used twice, or from two places'],
          ['Privilege escalation', 'Gets more rights than the account was given', 'A normal user suddenly running admin tools'],
          ['Malicious update', 'Ships attacker code through a trusted update channel', 'A signed update that contacts an unknown server']
        ]
      },
      body: [
        "Security+ asks you to name the attack from its indicator. The table pairs each one with what it looks like in a log or alert."
      ],
      callout: { kind: 'exam', title: 'Spot the tell', text: "Single quotes, OR 1=1, or -- in a log: SQL injection. &lt;script&gt; or javascript: in a parameter: XSS. ../ in a path: directory traversal. A huge string followed by a crash: buffer overflow. A user who clicked a link on another site and then had their password changed: CSRF." }
    },
    {
      title: 'Building it secure: the SDLC and shift left',
      figure: { id: 'w5-sdlc', caption: 'Security work at every phase of the software development life cycle. Fixing a flaw early costs far less than fixing it in production.' },
      body: [
        "The <strong>software development life cycle</strong> (SDLC) is the path software takes from idea to retirement: plan, define requirements, design, build, test, deploy, and maintain. <strong>Shift left</strong> means moving security work earlier in that path. <strong>DevSecOps</strong> builds security checks into the automated pipeline that builds and ships the code.",
        "At each phase there is a security job: security requirements and abuse cases when planning; <strong>threat modeling</strong> in design; secure coding standards and peer code review while building; <strong>static application security testing</strong> (SAST) on the code and <strong>dynamic application security testing</strong> (DAST) and <strong>fuzzing</strong> (sending large amounts of random or malformed input) on the running application in testing; hardening and secrets management at deployment; and patching and monitoring in maintenance.",
        "Two more controls protect what ships. <strong>Code signing</strong> lets users verify who published software and that it was not changed. <strong>Sandboxing</strong> runs code in a restricted space so a flaw cannot reach the rest of the system."
      ]
    },
    {
      title: 'The OWASP Top 10',
      body: [
        "The Open Worldwide Application Security Project (OWASP) publishes the <strong>OWASP Top 10</strong>, a ranked list of the most critical web application risk categories. The 2021 edition is the one most courses use. You do not need to memorize the order, but you should recognize the categories."
      ],
      list: [
        "Broken access control (users reach data or functions they should not)",
        "Cryptographic failures (data not encrypted, or weak algorithms)",
        "Injection (SQL, command, and similar; XSS is grouped here)",
        "Insecure design (no threat modeling or security requirements)",
        "Security misconfiguration (default accounts, verbose errors, open cloud storage)",
        "Vulnerable and outdated components (old libraries, such as Apache Struts at Equifax)",
        "Identification and authentication failures (weak logins, no MFA)",
        "Software and data integrity failures (unsigned updates, untrusted pipelines)",
        "Security logging and monitoring failures (attacks nobody sees)",
        "Server-side request forgery"
      ],
      callout: { kind: 'cedar', title: 'Ask the vendor', text: "Cedar Creek buys software rather than writing it. That changes the questions, not the risk. When Tom picks a new supplier portal, ask the vendor: do you follow a secure SDLC, do you sign your updates, do you run SAST and DAST, and how do you report and fix vulnerabilities?" }
    }
  ],
  check: [
    { q: "A web log shows the login name admin'-- followed by a successful login with no valid password. What attack is this?", opts: ["Cross-site scripting","Directory traversal","SQL injection","Replay"], ans: 2, why: "The quote closes the SQL string and -- comments out the password check. That is SQL injection." },
    { q: "Which control stops SQL injection at its root?", opts: ["Parameterized queries","Longer passwords","A Content Security Policy header","Code signing"], ans: 0, why: "Parameterized queries send input separately from the query, so input can never change the query's structure." },
    { q: "A comment field on a supplier forum saves a script that runs in every visitor's browser. What is this?", opts: ["Reflected XSS","Stored XSS","CSRF","SSRF"], ans: 1, why: "The script is saved on the site and runs for everyone who views it, which is stored (persistent) XSS." },
    { q: "A request for /download?file=../../../../etc/passwd appears in the web server log. What is being attempted?", opts: ["Buffer overflow","Privilege escalation","Race condition","Directory traversal"], ans: 3, why: "The ../ sequences try to climb out of the web folder to read a system file. That is directory traversal." },
    { q: "Which testing method sends large amounts of random or malformed input to a running program to find crashes?", opts: ["Fuzzing","Code signing","Static analysis","Threat modeling"], ans: 0, why: "Fuzzing throws unexpected input at a running program. Static analysis reads code without running it." }
  ]
};

COURSE_LESSONS['5.3'] = {
  id: '5.3', week: 5, title: 'Malware, password attacks, and their indicators', mins: 15, module: 'CertMaster Module 13',
  intro: "This morning the Heartland Manufacturing ISAC sent an update on IRONLATCH, the ransomware group you profiled in Week 1. Its affiliates have started using fake browser-update downloads, on top of spraying passwords at VPN portals. Before you hunt for those indicators in Lab 5.2, you need to know what each kind of malware does, how password attacks look in a log, and which signs tell an analyst that something is wrong.",
  sections: [
    {
      title: 'Malware by what it does',
      figure: { id: 'w5-malware', caption: 'Malware types grouped by how they get in or spread and by what they do once inside. Real samples often combine several.' },
      body: [
        "<strong>Malware</strong> is software written to harm, spy, or take control. Security+ names each type by its behavior. Real samples often combine types: a trojan delivers ransomware, which also steals data first. Criminals also rent ready-made malware and the servers to run it from other criminals, a business model called <strong>malware as a service</strong>. That is why groups with little skill can still launch damaging attacks, and why IRONLATCH has affiliates."
      ],
      table: {
        head: ['Type', 'What it does', 'How you might notice it'],
        rows: [
          ['Virus', 'Attaches to a file or program and runs when it runs; spreads when the infected file is shared and opened', 'Changed files, antivirus alerts on several hosts'],
          ['Worm', 'Copies itself across the network by exploiting a flaw, with no user action', 'Sudden traffic on one port (such as 445) from many hosts'],
          ['Trojan', 'Pretends to be useful software; the user installs it', 'A new program nobody approved, an unsigned installer'],
          ['Remote access trojan (RAT)', 'A trojan that gives the attacker remote control', 'Regular outbound connections to an unknown server'],
          ['Ransomware', 'Encrypts files and demands payment; often steals a copy first', 'Mass file renames, ransom notes, deleted backups'],
          ['Spyware / keylogger', 'Watches the user; a keylogger records every keystroke', 'Unknown processes, data sent out quietly'],
          ['Rootkit', 'Hides itself and other malware deep in the operating system', 'Tools disagree about what is running'],
          ['Logic bomb', 'Code that waits for a trigger, such as a date or an account being deleted', 'Damage on a specific date or event'],
          ['Bloatware', 'Unwanted software preinstalled by a vendor; not always malicious, but adds attack surface', 'Unneeded apps and services on new PCs']
        ]
      },
      keyTerms: [
        { term: 'Worm', definition: 'Malware that spreads across a network by itself, without anyone opening a file.' },
        { term: 'Trojan', definition: 'Malware disguised as legitimate software, which the victim installs.' },
        { term: 'Rootkit', definition: 'Malware that hides itself and other malware deep inside the operating system.' }
      ]
    },
    {
      title: 'Fileless malware and living off the land',
      body: [
        "Antivirus was built to find bad files. Attackers adapted. <strong>Fileless malware</strong> runs in memory and uses tools already on the system, such as PowerShell, Windows Management Instrumentation (WMI), or the Linux shell, so there is little or nothing on disk to scan. This is called <strong>living off the land</strong>.",
        "Attackers also disguise processes. A common trick is to give a malicious process the name of a normal system process, such as svchost.exe on Windows or a kernel worker thread on Linux. In Lab 5.2 you will find a simulated process that calls itself <code>[kworker/u8:3]</code>. Real kernel workers belong to root, have no command-line arguments, and never start child processes. This one does all three wrong.",
        "<strong>Cryptominers</strong> are another quiet type: they use your processors to mine cryptocurrency for the attacker. The usual indicator is a server running hot at 100% CPU with nobody using it. <strong>Polymorphic</strong> malware changes its own code each time it spreads, so every copy has a different hash and simple signature matching misses it."
      ]
    },
    {
      title: 'Password attacks',
      body: [
        "Most intrusions still start with a valid login. Attackers get one in four main ways, and each leaves a different pattern in the logs:"
      ],
      list: [
        "<strong>Brute force</strong>: try many passwords against one account. Pattern: one user name, dozens or thousands of failures, often from one source. Account lockout stops online brute force.",
        "<strong>Dictionary attack</strong>: brute force using a list of likely passwords instead of every combination.",
        "<strong>Password spraying</strong>: try one or two common passwords (such as Winter2026!) against many accounts. Pattern: many user names, one or two failures each, from one source, spread out so no account locks. Lockout does not stop it; MFA does.",
        "<strong>Credential stuffing</strong>: replay user names and passwords leaked from another company's breach, betting that people reuse passwords. Pattern: logins that succeed on the first try from unfamiliar places, often across many accounts."
      ],
      callout: { kind: 'cedar', title: 'Why spraying works on Cedar Creek', text: "Cedar Creek's VPN still accepts a password alone: any VPN user can pick the old CC-LEGACY profile you found in Week 3, and the VPN log shows mfa=none on every CC-LEGACY login. The 2019 password memo requires only eight characters. A spray with a handful of seasonal passwords has a real chance against dozens of accounts. You will find one in the VPN log in Lab 5.2." }
    },
    {
      title: 'Indicators of malicious activity',
      body: [
        "An <strong>indicator</strong> is a sign that something may be wrong. None proves an attack alone, but each one is a reason to look closer. Security+ lists these:"
      ],
      table: {
        head: ['Indicator', 'What it can mean'],
        rows: [
          ['Account lockout', 'Someone is guessing passwords against that account'],
          ['Concurrent session usage', 'The same account is logged in from two places at once; a stolen credential or token'],
          ['Impossible travel', 'Logins from two places too far apart for the time between them'],
          ['Blocked content', 'The web filter or email gateway stopped something; the user may be targeted'],
          ['Resource consumption', 'CPU, memory, disk, or bandwidth far above normal; mining, encryption, or data theft'],
          ['Resource inaccessibility', 'Files or services suddenly unavailable; ransomware or denial of service'],
          ['Out-of-cycle logging', 'Log activity at odd times, such as admin logins at 3 AM'],
          ['Missing logs', 'Gaps in logs; an attacker may have cleared them'],
          ['Published or documented', 'Your data or a description of the attack appears on a leak site or in a report']
        ]
      },
      callout: { kind: 'exam', title: 'Name the type from one clue', text: "No user action and spreading fast: worm. Installed by the user from a free download: trojan. Waits for a date: logic bomb. Hides from the tools: rootkit. Many accounts, one password each: spraying. One account, many passwords: brute force. Same password from another breach: credential stuffing." }
    },
    {
      title: 'Indicators of compromise and hashes',
      body: [
        "An <strong>indicator of compromise</strong> (IOC) is a specific, observable artifact that shows a system may have been compromised: a file hash, an IP address, a domain name, a URL, a registry key, or a process name. IOCs are shared between organizations so everyone can search for them.",
        "A <strong>hash</strong> such as SHA-256 is a fingerprint of a file's exact contents. If a file on ENG-12 has the same SHA-256 hash as the ISAC's IRONLATCH loader, it is the same file, whatever it is named. Analysts look hashes up on services such as <strong>VirusTotal</strong>, which shows what dozens of antivirus engines think of a file. Never upload a confidential file to a public service; searching by hash shares nothing about your data."
      ],
      callout: { kind: 'real', title: 'WannaCry and EternalBlue, 2017', text: "In May 2017 the WannaCry ransomware spread worldwide in a few days, hitting hundreds of thousands of computers, including many in the UK's National Health Service. It was a worm: it used the EternalBlue exploit against Windows SMB version 1 (CVE-2017-0144) to jump from PC to PC with no user action, then encrypted files and demanded a bitcoin ransom. Microsoft had released the fix, MS17-010, in March 2017, two months earlier. The U.S. and UK governments later attributed WannaCry to North Korea. PLANT-PC-07 is still missing MS17-010 today." }
    },
    {
      title: 'When an indicator fires: the first hour',
      body: [
        "Finding an indicator is the start of the work, not the end. A junior analyst's first moves follow a simple order. <strong>Contain</strong> the host first: most EDR tools can isolate a PC from the network with one click while keeping it connected to the console. <strong>Preserve evidence</strong>: do not delete the file or reimage the PC yet, because memory and logs show what the malware did. <strong>Scope</strong> the problem: search every other host and log for the same IOCs. Then <strong>escalate</strong> to your manager with what you know and what you do not.",
        "Malware often comes with stolen credentials, so plan to reset the passwords used on an infected host. Ransomware groups also look for backups and delete them before encrypting, which is why offline copies matter. Week 8 covers the full incident response process; for now, remember that deleting a file is not the same as cleaning up an incident."
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline, 2021', text: "In May 2021 the DarkSide ransomware group attacked Colonial Pipeline, and the company shut down its fuel pipeline as a precaution while it responded. In Senate testimony the CEO said the attackers got in through a legacy VPN account that did not use multifactor authentication. You studied this case in Weeks 3 and 4. A password alone, on a remote access portal, was the whole way in, just as on Cedar Creek's VPN today." }
    }
  ],
  check: [
    { q: "Malware spreads from PC to PC across the plant network through an SMB flaw, and nobody opens any file. What type is it?", opts: ["Trojan","Logic bomb","Worm","Spyware"], ans: 2, why: "Self-propagation with no user action is the defining trait of a worm. WannaCry spread this way through SMBv1." },
    { q: "The VPN log shows 29 different user names, each failing once, all from one IP address over 30 minutes. What attack is this?", opts: ["Brute force","Password spraying","Credential stuffing","Replay"], ans: 1, why: "Many accounts, one attempt each, from one source is password spraying. It is designed to avoid account lockout." },
    { q: "An engineer's account logs in from Springfield, Missouri, and 15 minutes later from another continent. Which indicator is this?", opts: ["Missing logs","Resource consumption","Impossible travel","Blocked content"], ans: 2, why: "Nobody can travel that far in 15 minutes, so one of the logins likely uses stolen credentials or a stolen token." },
    { q: "A process named like a Linux kernel worker is owned by a normal user and keeps starting 'sleep' child processes. What technique does this suggest?", opts: ["Process masquerading by malware","Code signing","A buffer overflow","A rootkit being removed"], ans: 0, why: "Malware often borrows the name of a trusted system process. Real kernel threads run as root and never start child processes." },
    { q: "Why do analysts share SHA-256 hashes of malware files as indicators of compromise?", opts: ["A hash lists the malware's network connections","A hash shows who wrote the malware","A hash decrypts the malware","A hash identifies the exact file even if it is renamed"], ans: 3, why: "A hash is a fingerprint of the file's contents. Renaming the file does not change it, so a match means the same file." }
  ]
};

COURSE_LESSONS['5.4'] = {
  id: '5.4', week: 5, title: 'Network attacks and threat intelligence', mins: 15, module: 'CertMaster Modules 13, 14',
  intro: "On Day 1 you hunted indicators the ISAC handed you. Today you learn where that intelligence comes from, how it is graded and shared, and which network, physical, and cryptographic attacks it warns about. You also meet the case study for this week, SolarWinds, an attack that hid inside a trusted software update and was found only because one security company looked closely at a single strange login.",
  sections: [
    {
      title: 'Network attacks',
      body: [
        "Week 4 taught you how networks are built. These are the attacks Security+ expects you to recognize against them, with the indicator that usually gives each one away."
      ],
      table: {
        head: ['Attack', 'What happens', 'Indicator'],
        rows: [
          ['Denial of service (DoS) / distributed (DDoS)', 'Floods a service until real users cannot reach it; DDoS uses many machines, often a botnet', 'Traffic spike, slow or unavailable service'],
          ['Amplified / reflected DDoS', 'Sends small requests with the victim\'s spoofed address to servers (such as DNS) that send big replies to the victim', 'Huge volumes of replies the victim never asked for'],
          ['DNS attacks', 'Poison DNS answers or hijack a domain so names point to the attacker', 'Correct names resolving to the wrong addresses'],
          ['On-path (man-in-the-middle)', 'The attacker sits between two parties and reads or changes traffic, for example by ARP poisoning', 'Duplicate IP-to-MAC entries, certificate warnings'],
          ['Credential replay', 'Captured hashes or tokens are reused to log in without the password', 'Logins with no password prompt, from unusual hosts'],
          ['Wireless attacks', 'Rogue access points, evil twins, or deauthentication floods', 'Two networks with the same name, sudden disconnects'],
          ['Malicious code over the network', 'A worm or exploit traffic aimed at an open service', 'Many hosts scanning one port']
        ]
      },
      callout: { kind: 'real', title: 'Mirai, 2016', text: "In 2016 the Mirai botnet took over hundreds of thousands of internet-connected cameras and video recorders, mostly by logging in with factory default passwords. In October 2016 it flooded Dyn, a major DNS provider, and many well-known websites became unreachable for parts of the day. NVR-01 accepting admin with a blank password is the same weakness on a smaller scale." }
    },
    {
      title: 'Physical and cryptographic attacks',
      body: [
        "Some attacks are not on the network at all. <strong>Physical brute force</strong> forces a door or lock. <strong>RFID cloning</strong> copies a badge's radio signal onto a blank card; Cedar Creek's badges would be easy to clone if they use older low-frequency cards. <strong>Environmental</strong> attacks target power, cooling, or fire suppression, such as overheating a server room whose door is wedged open.",
        "Cryptographic attacks go after the math or the way it is used. A <strong>downgrade attack</strong> forces two systems to use an older, weaker protocol, which is why the TLS 1.0 findings in Dee's scan matter. A <strong>collision</strong> finds two inputs with the same hash, which broke MD5 for signatures. A <strong>birthday attack</strong> uses probability to find collisions much faster than trying every input. The defense for all three is the same: retire old protocols and algorithms, and refuse to fall back to them."
      ]
    },
    {
      title: 'Where threat intelligence comes from',
      body: [
        "<strong>Threat intelligence</strong> is information about attackers that has been collected, checked, and put in context so defenders can act on it. Sources include:"
      ],
      list: [
        "<strong>Open-source intelligence</strong> (OSINT): public reports, CISA advisories, vendor blogs, and free feeds.",
        "<strong>Proprietary or third-party</strong> feeds: paid services from security companies.",
        "<strong>Information-sharing organizations</strong>: Information Sharing and Analysis Centers (ISACs) for an industry, such as the Heartland Manufacturing ISAC, and government programs.",
        "<strong>The dark web</strong>: criminal forums and leak sites, watched for stolen data and talk about targets.",
        "<strong>Internal sources</strong>: your own logs, incidents, and SOC tickets, often the most relevant of all."
      ],
      keyTerms: [
        { term: 'Threat intelligence', definition: 'Evidence-based knowledge about attackers and their methods, put in context so defenders can act.' },
        { term: 'ISAC', definition: 'Information Sharing and Analysis Center: a group where organizations in one industry share threat information.' }
      ]
    },
    {
      title: 'Four levels of intelligence',
      figure: { id: 'w5-intel-levels', caption: 'The same IRONLATCH intelligence, written four ways for four audiences.' },
      body: [
        "Intelligence is only useful if it reaches someone who can act on it. Analysts write it at four levels:",
        "<strong>Strategic</strong> intelligence is for executives: long-term trends and business risk. <strong>Operational</strong> intelligence describes specific campaigns: who is being targeted, when, and how, for incident responders and threat hunters. <strong>Tactical</strong> intelligence describes tactics, techniques, and procedures (TTPs), for security managers deciding which controls to build. <strong>Technical</strong> intelligence is the IOCs themselves (hashes, IPs, domains) that a SOC analyst or firewall can block today.",
        "Machines share technical intelligence automatically. <strong>STIX</strong> (Structured Threat Information Expression) is a standard format for describing it, <strong>TAXII</strong> (Trusted Automated Exchange of Intelligence Information) is a standard way to send it, and CISA's <strong>Automated Indicator Sharing</strong> (AIS) program uses both."
      ],
      callout: { kind: 'cedar', title: 'One report, four readers', text: "For Greg Palmer: 'Ransomware groups are hitting Midwest manufacturers; ours is a likely target.' For Marcus: 'They get in by spraying VPN passwords, so turn on MFA.' For you on Monday: 'IRONLATCH is pushing fake browser updates this week.' For FW-CORE: 'Block 203.0.113.45 and browser-update-cdn.example.net now.'" }
    },
    {
      title: 'Judging and handling intelligence',
      body: [
        "Not every feed deserves the same trust. Before you act on intelligence, ask four questions. Is it <strong>timely</strong>: are these indicators from this week or from two years ago, when the attacker's servers have long since changed? Is it <strong>relevant</strong>: does it concern your industry, your software, your region? Is it <strong>accurate</strong>: has the source been right before? And what <strong>confidence</strong> does the source give it? The ISAC rated its IRONLATCH update high confidence; a single anonymous forum post would rate low.",
        "Shared intelligence carries a <strong>Traffic Light Protocol</strong> (TLP) label that says who you may pass it to. TLP:RED is for the named recipients only. TLP:AMBER is for your organization, on a need-to-know basis (TLP:AMBER+STRICT keeps it inside your organization only). TLP:GREEN may be shared with your community but not posted publicly. TLP:CLEAR has no limits. The IRONLATCH update is TLP:AMBER, so you can share it with Marcus and Dee, but not on social media or with a friend at another company."
      ],
      keyTerms: [
        { term: 'TLP', definition: 'Traffic Light Protocol: labels (RED, AMBER, GREEN, CLEAR) that say how widely a piece of shared intelligence may be passed on.' }
      ]
    },
    {
      title: 'MITRE ATT&CK and the pyramid of pain',
      figure: { id: 'w5-pyramid', caption: 'The pyramid of pain: the higher the indicator, the more it costs the attacker to change it, and the more useful it is to detect.' },
      body: [
        "<strong>MITRE ATT&amp;CK</strong> is a free knowledge base of real attacker behavior, built from observed intrusions. <strong>Tactics</strong> are the attacker's goals at each stage, such as Initial Access, Persistence, or Exfiltration. <strong>Techniques</strong> are how they reach each goal, each with an ID: T1110.003 is Password Spraying, T1036 is Masquerading, and T1195 is Supply Chain Compromise. You used ATT&amp;CK to map the Colonial Pipeline attack in Weeks 3 and 4.",
        "Not all indicators are equally useful. David Bianco's <strong>pyramid of pain</strong> ranks them by how hard they are for an attacker to change. A file hash changes if one byte changes. An IP address or domain takes the attacker minutes to replace. Tools take longer, and TTPs, the way a group actually works, are the hardest to change. Blocking IOCs is quick and worth doing, but detecting behavior lasts longer.",
        "<strong>Threat hunting</strong> means searching your own systems for signs of an attacker that no alert has flagged, starting from a hypothesis such as 'IRONLATCH sprayed our VPN; did any login succeed?' A hunt that finds nothing is still useful: it shows which logs you have, which you are missing, and which searches could become automatic alerts."
      ]
    },
    {
      title: 'SolarWinds: a supply chain attack',
      body: [
        "In 2020 attackers broke into the build system of SolarWinds, a company whose Orion software monitors IT networks. They inserted a backdoor, later named SUNBURST, into Orion updates. The updates were signed with SolarWinds' legitimate certificate, so customers installed them as trusted. SolarWinds said fewer than 18,000 customers downloaded an affected version. The attackers then chose a much smaller group of targets, including U.S. government agencies, for follow-on intrusions.",
        "Inside those networks the attackers moved slowly and lived off the land. CISA's advisory AA20-352A describes them stealing the signing certificate used for SAML single sign-on and forging valid login tokens, so they could reach cloud email without passwords. The security company FireEye discovered the campaign in December 2020 while investigating its own breach. CISA's Emergency Directive 21-01 ordered federal agencies to disconnect or power down affected Orion products. In April 2021 the U.S. government attributed the campaign to Russia's foreign intelligence service (SVR)."
      ],
      callout: { kind: 'real', title: 'Why supply chain attacks are so hard to catch', text: "Every control that says 'install signed updates from your vendor' worked exactly as designed and delivered the backdoor. Detection came from behavior: an unexpected device registration for multifactor authentication and logins that did not fit. That is the top of the pyramid of pain. You will dig into the details in Project 5." }
    }
  ],
  check: [
    { q: "An attacker sends small DNS queries with the victim's spoofed IP address to many open DNS servers, which send large replies to the victim. What is this?", opts: ["On-path attack","Amplified (reflected) DDoS","Credential replay","DNS poisoning"], ans: 1, why: "Spoofed requests that trigger much larger replies aimed at the victim are an amplified, reflected DDoS." },
    { q: "Which level of threat intelligence would you give Greg Palmer, the CFO?", opts: ["Technical","Tactical","Operational","Strategic"], ans: 3, why: "Strategic intelligence describes long-term trends and business risk for executives. Technical intelligence (IOCs) is for analysts and devices." },
    { q: "According to the pyramid of pain, which indicator is hardest for an attacker to change?", opts: ["File hash","IP address","Tactics, techniques, and procedures","Domain name"], ans: 2, why: "TTPs are how a group works. Changing them takes far more effort than recompiling a file or buying a new domain." },
    { q: "What is the standard format for describing threat intelligence so tools can exchange it?", opts: ["STIX","TAXII","CVSS","SAML"], ans: 0, why: "STIX describes the intelligence; TAXII is the transport that moves it between systems." },
    { q: "Why did signed SolarWinds Orion updates still deliver the SUNBURST backdoor?", opts: ["Customers had turned off code signing","The attackers inserted the code before the updates were built and signed","The certificate had expired","The updates came from a fake website"], ans: 1, why: "The backdoor was added inside SolarWinds' own build process, so the legitimate signature covered it. Signing proves who published code, not that the publisher was not compromised." }
  ]
};

COURSE_LESSONS['5.5'] = {
  id: '5.5', week: 5, title: 'Exploitation, post-exploitation, and the pentest report', mins: 15, module: 'CertMaster Module 8 + Academy: Pentest Methodology',
  intro: "In Week 4 you did the quiet half of a penetration test: reconnaissance and scanning. This week you finish it. You prove that a weakness can really be used, see what an attacker could reach from there, and write it up so that Marcus and Greg can act on it. This lesson covers the rules that make it legal, what testers do after they get in, and how a good report reads. It ends with a map of this week's mock pentest blocks.",
  sections: [
    {
      title: 'Permission first',
      body: [
        "A <strong>penetration test</strong> (pentest) is an authorized, simulated attack that proves which vulnerabilities can actually be exploited. The word that matters is authorized. Without written permission the same actions are crimes; in the U.S. the main law is the <strong>Computer Fraud and Abuse Act</strong> (CFAA).",
        "Before testing starts, the client and tester sign <strong>rules of engagement</strong> (ROE): what is in scope and out of scope, the test dates and hours, which techniques are allowed (is social engineering in? denial of service?), who to call if something breaks, and how findings are handled. A <strong>statement of work</strong> (SOW) covers the business side. Every HackTheBox machine you attack this week is authorized by HackTheBox's own terms; nothing else is."
      ],
      table: {
        head: ['Test type', 'What the tester knows'],
        rows: [
          ['Known environment (white box)', 'Full details: network maps, credentials, source code. Fastest and most thorough.'],
          ['Partially known environment (gray box)', 'Some details, such as a normal user account. Simulates an insider or a phished user.'],
          ['Unknown environment (black box)', 'Nothing beyond the target name. Simulates an outside attacker.']
        ]
      },
      callout: { kind: 'exam', title: 'Team colors', text: "Red team attacks (offensive). Blue team defends (defensive). Purple team means both working together so every attack becomes a better detection (integrated). A physical penetration test checks doors, badges, and guards. Expect a question that describes one and asks for the name." }
    },
    {
      title: 'Exploitation: proving the weakness is real',
      figure: { id: 'w5-pentest-phases', caption: 'The five pentest phases, the HackTheBox targets for each, and which week covers them.' },
      body: [
        "<strong>Exploitation</strong> (also called gaining access) uses a vulnerability to get in. A scanner says a flaw might exist; exploitation proves it. Common routes are an unpatched known vulnerability (a CVE with public exploit code), weak or default credentials, injection in a web application, and social engineering if the ROE allow it.",
        "Testers use frameworks such as <strong>Metasploit</strong> for known exploits, <strong>Burp Suite</strong> to intercept and change web traffic, <strong>Gobuster</strong> to find hidden web folders, and <strong>Hydra</strong> to test passwords against login services. This week you mostly need your eyes and a browser: a hidden admin page with a default password on Preignition, and a SQL injection login bypass on Appointment.",
        "The rule for ethical testers is <strong>gain access, do no damage</strong>. You take a screenshot or a flag as proof and stop. You do not delete, encrypt, or take real data."
      ]
    },
    {
      title: 'Post-exploitation: what could an attacker do next?',
      body: [
        "Getting in is rarely the attacker's goal. <strong>Post-exploitation</strong> shows the client what the first foothold leads to. Testers document these concepts, and Security+ tests them by name:"
      ],
      list: [
        "<strong>Privilege escalation</strong>: from a normal user to administrator or root, for example through a misconfigured sudo rule.",
        "<strong>Lateral movement</strong>: from the first host to others, using stolen credentials or shared admin accounts.",
        "<strong>Pivoting</strong>: using a compromised host to reach networks the attacker could not reach directly.",
        "<strong>Persistence</strong>: a way back in that survives reboots and password changes, such as a scheduled task, a new account, or an SSH key.",
        "<strong>Command and control</strong> (C2): the channel the attacker uses to send instructions.",
        "<strong>Data exfiltration</strong>: copying data out."
      ],
      callout: { kind: 'real', title: 'Target, 2013', text: "Attackers stole login credentials from Fazio Mechanical, a heating and cooling contractor with access to a Target vendor system. From that foothold they moved laterally through Target's network until they reached the point-of-sale systems, and stole data on about 40 million payment cards. The first foothold was small. Lateral movement through a flat network made it a disaster." }
    },
    {
      title: 'Describe it, do not do it',
      body: [
        "In a training lab you can see a database full of records or a list of password hashes. Document what you could reach and stop. Do not crack the hashes, do not copy the data out, and do not install real persistence. In your write-up, describe the persistence method an attacker would use and how a defender would detect it.",
        "Real testers also <strong>clean up</strong>: they remove any accounts, files, or tools they added and list them in the report so the client can confirm. Leaving a test web shell behind creates the very vulnerability you were hired to find. If a test causes an outage or turns up signs of a real attacker, testers stop and call the contact named in the rules of engagement."
      ],
      callout: { kind: 'cedar', title: 'Read it as a defender', text: "Every post-exploitation step has a Cedar Creek parallel. Shared ccadmin credentials make lateral movement easy. The flat network between plant and office makes pivoting unnecessary. Brian Kessler's account that was never disabled is persistence an attacker would not even have to create." }
    },
    {
      title: 'The pentest report',
      figure: { id: 'w5-finding', caption: 'Anatomy of one detailed finding: a client should be able to fix it from this alone.' },
      body: [
        "The report is the product. The client never sees your terminal; they see the report. A professional report has these parts:"
      ],
      list: [
        "<strong>Executive summary</strong>: one page in plain language for leadership. What was tested, the overall risk rating, the top three findings, and what to do first. No jargon.",
        "<strong>Scope and rules of engagement</strong>: what was tested, when, and under what authorization.",
        "<strong>Methodology</strong>: the phases performed and the tools used.",
        "<strong>Findings summary table</strong>: every finding with its severity (Critical, High, Medium, Low, Informational), ranked.",
        "<strong>Detailed findings</strong>: for each one, a description, evidence (a screenshot or command output), the CVSS score, the business impact, and step-by-step remediation.",
        "<strong>Recommendations</strong>: a prioritized remediation roadmap, most urgent first.",
        "<strong>Appendix</strong>: raw tool output and the full evidence log."
      ]
    },
    {
      title: 'Writing for two audiences',
      body: [
        "The same finding has to work for Greg Palmer and for Dee. Greg needs to know what could happen to the business and what it costs to prevent. Dee needs the exact host, port, evidence, and fix. Write the executive summary for Greg and the detailed findings for Dee, and do not mix the two.",
        "Compare two versions of one sentence. Technical: 'Appointment is vulnerable to authentication bypass via SQLi in the username parameter (CVSS 9.8).' Executive: 'Anyone on the internet could sign in to the application as its administrator without a password, and see or change every record. The developer fix is well known and small.' Both are true. Only the second tells a CFO why to spend money this month.",
        "Rate severity honestly. Start from CVSS where a CVE exists, then adjust for the client's context, and say why. A finding with no CVE, such as a database with no password, still gets a rating: judge it by what an attacker can reach and how easily. Overrating everything as Critical is as unhelpful as underrating: the client stops trusting the report."
      ],
      callout: { kind: 'exam', title: 'Report vocabulary', text: "Expect questions on who reads which part. The executive summary is for leadership. Detailed findings and remediation steps are for technical staff. Responsible disclosure means reporting a vulnerability privately to the owner first, and a bug bounty program pays outside researchers who report flaws that way." }
    },
    {
      title: 'This week\'s mock pentest',
      body: [
        "The Week 5 mock project is the second half of the Pentest Lab you started in Week 4. Keep one document (Google Doc or Word on OneDrive) as your running engagement log and report. Each phase page asks for its link, so share the same document every time and add a section per phase. Use the AttackBox (Pwnbox) setup from Week 4."
      ],
      table: {
        head: ['Block', 'Pentest Lab page', 'Targets', 'What you hand in'],
        rows: [
          ['Day 1', 'Phase 3: Exploitation', 'HTB Preignition and Appointment; PortSwigger SQL injection lab 1 and reflected XSS lab 1', 'Flags, proof screenshots, payloads, and a plain-English explanation of each flaw and its fix'],
          ['Day 2', 'Phase 4: Post-exploitation', 'HTB Sequel and Mongod', 'Access level, data reachable, credentials seen (not cracked), and a described persistence and lateral movement path'],
          ['Day 2', 'Phase 5: Reporting', 'Everything from Weeks 4 and 5', 'Executive summary, findings table with CVSS, one detailed finding, recommendations'],
          ['Day 2', 'Capstone', 'Your whole engagement', 'Phase log, overall risk rating, and remediation roadmap; submit the final link']
        ]
      },
      callout: { kind: 'tip', title: 'Screenshot as you go', text: "Take a screenshot every time something works, with the target IP and the time visible, and paste it into your log right away. Rebuilding evidence afterward takes far longer than capturing it, and a finding without evidence is just an opinion." }
    }
  ],
  check: [
    { q: "Which document defines what a penetration tester may test, when, and with which techniques?", opts: ["Vulnerability scan export","Executive summary","Remediation roadmap","Rules of engagement"], ans: 3, why: "The rules of engagement set scope, timing, allowed techniques, and contacts. Without written authorization the test is illegal." },
    { q: "A tester is given a normal user account and a network diagram but no admin access. What type of test is this?", opts: ["Partially known environment","Unknown environment","Known environment","Physical test"], ans: 0, why: "Some information but not full knowledge is a partially known (gray box) environment." },
    { q: "After gaining a foothold on one server, a tester uses it to reach a network segment that was not reachable from outside. What is this called?", opts: ["Persistence","Reconnaissance","Pivoting","Cleanup"], ans: 2, why: "Pivoting uses a compromised host as a stepping stone into networks the attacker could not reach directly." },
    { q: "During post-exploitation in the lab you find a table of password hashes. What should you do?", opts: ["Crack them to prove they are weak","Document that they were reachable and stop","Copy the table to your own drive","Delete the table to protect the client"], ans: 1, why: "Gain access, do no damage. Document the exposure as evidence and describe the risk without cracking, copying, or changing data." },
    { q: "Which part of a pentest report should Greg Palmer be able to read in two minutes?", opts: ["Appendix","Methodology","Executive summary","Detailed findings"], ans: 2, why: "The executive summary is written for leadership: plain language, overall risk, top findings, and what to do first." }
  ]
};

COURSE_QUIZ.w5 = {
  title: 'Week 5 Quiz',
  pass: 80,
  questions: [
    { lesson: '5.1', q: "Dee's scan shows a Critical (9.8) flaw on an isolated test PC with no network path from the office, and a High (8.1) flaw with public exploit code on a server every office PC can reach. Which should Cedar Creek normally fix first?", opts: ["The High flaw, because it is reachable and has working exploit code","The Critical flaw, because 9.8 is higher than 8.1","Neither, because both are below 10.0","Whichever was found first"], ans: 0, why: "Prioritize by risk, not score alone. Exposure and known exploitation raise the High finding above an unreachable Critical one." },
    { lesson: '5.1', q: "A vulnerability scan of FS-HR01 reports no issues, but a later credentialed check shows a missing critical patch. What was the first scan result?", opts: ["A false positive","A zero-day","A true positive","A false negative"], ans: 3, why: "A real vulnerability that the scan missed is a false negative. It is more dangerous than a false positive because nobody knows to fix it." },
    { lesson: '5.1', q: "A vendor has not yet released a patch for a flaw that attackers are already exploiting. What is this flaw called?", opts: ["End-of-life","Zero-day","Misconfiguration","Legacy"], ans: 1, why: "A zero-day is exploited before the vendor has a fix, so other controls must reduce the risk until one ships." },
    { lesson: '5.1', q: "Walt will not allow PLANT-PC-07 to be patched because the line vendor has not certified the update. Marcus documents the decision, names Walt as the owner, and sets a review date. What is this document?", opts: ["A remediation validation","A rules of engagement","A false positive report","An exception (risk acceptance)"], ans: 3, why: "A formal, time-limited, owned decision not to remediate is an exception or exemption. It should be paired with compensating controls." },
    { lesson: '5.2', q: "Cedar Creek's new supplier portal shows the account balance for 47215 when a user types 47215 OR 1=1, and also lists every other account. Which flaw does this show?", opts: ["Cross-site scripting","Race condition","SQL injection","Directory traversal"], ans: 2, why: "OR 1=1 makes the WHERE clause always true, so the database returns every row. The input changed the query, which is SQL injection." },
    { lesson: '5.2', q: "Which defense specifically stops a cross-site scripting payload from running when the page displays user input?", opts: ["Output encoding","Account lockout","Full-disk encryption","Port security"], ans: 0, why: "Output encoding turns characters such as < and > into harmless text, so injected script is displayed instead of executed." },
    { lesson: '5.2', q: "A user, still logged in to a vendor portal, visits another site that silently submits a 'change email address' request to the portal. What is this attack?", opts: ["SSRF","CSRF","Stored XSS","Replay"], ans: 1, why: "Cross-site request forgery makes the victim's browser send a request the user did not intend, using their active session. Anti-CSRF tokens prevent it." },
    { lesson: '5.2', q: "Which security activity belongs in the design phase of the SDLC?", opts: ["Log review","Patching","Rescanning","Threat modeling"], ans: 3, why: "Threat modeling looks for ways the design could be attacked before code is written, which is the heart of shifting security left." },
    { lesson: '5.3', q: "An employee installs a free 'PDF converter' from a website. It works, but it also lets an attacker control the PC remotely. What type of malware is this?", opts: ["Remote access trojan","Logic bomb","Worm","Bloatware"], ans: 0, why: "Malware disguised as useful software is a trojan; one that gives the attacker remote control is a RAT." },
    { lesson: '5.3', q: "A disgruntled developer adds code that deletes the build server's files if his account is ever disabled. What is this?", opts: ["Rootkit","Keylogger","Logic bomb","Spyware"], ans: 2, why: "Code that waits for a trigger event, such as an account being disabled or a date, is a logic bomb." },
    { lesson: '5.3', q: "A Cedar Creek server's CPU stays at 100% overnight with no users, and it makes steady outbound connections to an unknown address. What is the most likely cause?", opts: ["A keylogger","A cryptominer","A logic bomb waiting to trigger","Bloatware"], ans: 1, why: "Unexplained, sustained high CPU with outbound connections is the classic indicator of cryptomining malware." },
    { lesson: '5.3', q: "SOC analysts find no malicious files on disk, but PowerShell is running encoded commands in memory on several hosts. What does this describe?", opts: ["A polymorphic virus","A bloatware infection","Fileless malware living off the land","A physical attack"], ans: 2, why: "Fileless malware runs in memory using built-in tools such as PowerShell, leaving little on disk for antivirus to scan." },
    { lesson: '5.3', q: "The VPN log shows the account r.doyle failing 400 times in 10 minutes from one IP address, then locking out. Which attack is this?", opts: ["Brute force","Password spraying","Credential stuffing","Impossible travel"], ans: 0, why: "Many attempts against one account is brute force. Spraying is the opposite: few attempts against many accounts." },
    { lesson: '5.4', q: "Users report certificate warnings, and the switch shows two different MAC addresses claiming the gateway's IP address. Which attack is most likely?", opts: ["Logic bomb","Amplified DDoS","Credential stuffing","On-path attack through ARP poisoning"], ans: 3, why: "Duplicate IP-to-MAC claims for the gateway are the signature of ARP poisoning, which puts the attacker on the path between users and the gateway." },
    { lesson: '5.4', q: "A security team receives a list of malicious IP addresses, domains, and file hashes to block immediately. Which level of threat intelligence is this?", opts: ["Strategic","Technical","Tactical","Operational"], ans: 1, why: "Specific indicators of compromise for direct blocking are technical intelligence." },
    { lesson: '5.4', q: "In MITRE ATT&CK, what does a tactic describe?", opts: ["The exact command the attacker typed","The malware's file hash","The CVSS score of the exploit","The attacker's goal at a stage of the attack"], ans: 3, why: "Tactics are the why: goals such as Initial Access or Persistence. Techniques are the how." },
    { lesson: '5.4', q: "Which statement about the SolarWinds compromise is accurate?", opts: ["Attackers phished every customer separately","The attack used ransomware to encrypt Orion servers","A backdoor was inserted into signed Orion software updates, making it a supply chain attack","It was stopped by antivirus signatures on the first day"], ans: 2, why: "The SUNBURST backdoor rode inside legitimately signed Orion updates. That is a software supply chain compromise (ATT&CK T1195)." },
    { lesson: '5.5', q: "What is the correct order of the five pentest phases used in the Pentest Lab?", opts: ["Reconnaissance, scanning, exploitation, post-exploitation, reporting","Exploitation, reconnaissance, scanning, reporting, post-exploitation","Scanning, reconnaissance, exploitation, reporting, post-exploitation","Reporting, reconnaissance, scanning, exploitation, post-exploitation"], ans: 0, why: "Gather information, map the attack surface, gain access, show what access leads to, then report it." },
    { lesson: '5.5', q: "A tester leaves a small web shell on a client's server after the test. Why is this a problem?", opts: ["It slows down the report","It is a new vulnerability the client did not have before","It breaks the CVSS score","It is required by the rules of engagement"], ans: 1, why: "Cleanup removes everything the tester added. A leftover web shell is an open door for real attackers." },
    { lesson: '5.5', q: "A student wants to practice Nmap and Hydra against a local business's website to build skills. The business has not given written permission. What is the best description?", opts: ["Acceptable if nothing is damaged","Legal because the tools are free and open source","Fine if the results are reported to the business afterward","Unauthorized access that can violate the Computer Fraud and Abuse Act"], ans: 3, why: "Intent and tools do not matter. Testing without written authorization is illegal. Use authorized platforms such as HackTheBox." }
  ]
};
