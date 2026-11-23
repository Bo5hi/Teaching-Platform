// Week 5 practice sets. Shapes: docs/COURSE_V2.md
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

var W5_ATTACKS = ['Virus', 'Worm', 'Trojan', 'Remote access trojan (RAT)', 'Ransomware', 'Keylogger', 'Rootkit', 'Logic bomb', 'Cryptominer', 'Fileless malware',
  'Brute force', 'Password spraying', 'Credential stuffing',
  'SQL injection', 'Cross-site scripting (XSS)', 'Cross-site request forgery (CSRF)', 'Directory traversal', 'Buffer overflow', 'Replay', 'Privilege escalation'];

COURSE_PRACTICE['attacks-w5'] = {
  title: 'Attack Sorter: name it from the indicator',
  kind: 'sort',
  instructions: 'Each item describes what an analyst saw. Choose the attack it points to, and the family it belongs to: malware, a password attack, or an application attack. Every attack in the list is used exactly once. Read the explanation after each item, because recognizing the tell is what the exam tests.',
  dims: [
    { key: 'attack', label: 'Attack', options: W5_ATTACKS },
    { key: 'family', label: 'Family', options: ['Malware', 'Password attack', 'Application attack'] }
  ],
  items: [
    { text: 'Every PC on the plant network starts sending traffic to port 445 on other PCs within minutes. Nobody opened an attachment.', answers: { attack: ['Worm'], family: ['Malware'] }, why: 'Spreading across the network by itself, with no user action, is a worm. WannaCry did this through SMB on port 445.' },
    { text: 'An infected spreadsheet macro copies itself into other spreadsheets on the shared drive, and spreads further only when coworkers open those files.', answers: { attack: ['Virus'], family: ['Malware'] }, why: 'A virus attaches to a host file and needs that file to be opened to run and spread.' },
    { text: 'An engineer installs a free "drawing viewer" from a download site. It works, and it also installs a hidden program.', answers: { attack: ['Trojan'], family: ['Malware'] }, why: 'Malware that pretends to be useful software, so the user installs it, is a trojan.' },
    { text: 'A new program on FIN-LT-09 opens a connection to an unknown server every 60 seconds and accepts commands to browse files and take screenshots.', answers: { attack: ['Remote access trojan (RAT)'], family: ['Malware'] }, why: 'Malware that gives an attacker remote, interactive control of the machine is a remote access trojan.' },
    { text: 'Thousands of files on ENG-FS01 are renamed with a new extension in ten minutes, and a text file in every folder explains how to pay.', answers: { attack: ['Ransomware'], family: ['Malware'] }, why: 'Mass encryption plus a payment demand is ransomware. It attacks availability, and most groups also steal data first.' },
    { text: 'Forensics on a reception PC finds a hidden file containing every key typed for the past week, including passwords.', answers: { attack: ['Keylogger'], family: ['Malware'] }, why: 'Recording keystrokes to capture passwords and messages is what a keylogger does.' },
    { text: 'The EDR console shows nothing unusual, but a memory image taken from the same server shows a process the operating system hides from its own tools.', answers: { attack: ['Rootkit'], family: ['Malware'] }, why: 'Malware that hides itself from the operating system and its tools is a rootkit. Different tools disagreeing is the clue.' },
    { text: 'A script on the build server, added by a contractor, deletes the project folders on the first day his account no longer exists.', answers: { attack: ['Logic bomb'], family: ['Malware'] }, why: 'Code that waits for a trigger, such as a date or an account being removed, is a logic bomb.' },
    { text: 'A server runs at 100% CPU all night with no users and keeps a steady connection to an unfamiliar pool server on the internet.', answers: { attack: ['Cryptominer'], family: ['Malware'] }, why: 'Stolen processing power with steady outbound traffic to a mining pool is cryptomining malware.' },
    { text: 'No malicious file is found on disk, but PowerShell keeps running long encoded commands in memory, launched by Windows Management Instrumentation.', answers: { attack: ['Fileless malware'], family: ['Malware'] }, why: 'Running in memory through built-in tools such as PowerShell and WMI, with nothing on disk to scan, is fileless malware living off the land.' },
    { text: 'The account vpnadmin fails to log in 24 times in under two minutes, all from one IP address.', answers: { attack: ['Brute force'], family: ['Password attack'] }, why: 'Many guesses against one account is brute force. Account lockout is the usual control.' },
    { text: 'Twenty-nine different accounts each fail to log in to the VPN once, from the same IP address, over 30 minutes.', answers: { attack: ['Password spraying'], family: ['Password attack'] }, why: 'One or two guesses against many accounts is password spraying. It stays under the lockout limit; MFA stops it.' },
    { text: 'Several users log in successfully on the first try from new locations. All of their passwords appeared in another company\'s breach last month.', answers: { attack: ['Credential stuffing'], family: ['Password attack'] }, why: 'Reusing user name and password pairs leaked from another breach is credential stuffing. It works because people reuse passwords.' },
    { text: 'A supplier portal log shows the user name admin\'-- followed by a successful login with an empty password.', answers: { attack: ['SQL injection'], family: ['Application attack'] }, why: 'The quote and -- change the database query and remove the password check: SQL injection.' },
    { text: 'A search page shows whatever you type. A link containing <script> in the search parameter makes the page run that script in the visitor\'s browser.', answers: { attack: ['Cross-site scripting (XSS)'], family: ['Application attack'] }, why: 'Script injected through the page and run in another user\'s browser is cross-site scripting; this one is reflected.' },
    { text: 'A user who is still logged in to a vendor portal visits another site, and the portal records a request from her session to change her email address.', answers: { attack: ['Cross-site request forgery (CSRF)'], family: ['Application attack'] }, why: 'Another site forced her browser to send a request with her active session. That is cross-site request forgery.' },
    { text: 'The web server log shows GET /files?name=../../../../etc/passwd.', answers: { attack: ['Directory traversal'], family: ['Application attack'] }, why: 'The ../ sequences try to climb out of the web folder to reach system files: directory traversal.' },
    { text: 'A service crashes every time someone sends it a 5,000-character user name, and once a crash was followed by a new process running as SYSTEM.', answers: { attack: ['Buffer overflow'], family: ['Application attack'] }, why: 'Input longer than the program\'s buffer overwrote memory, causing crashes and once running attacker code. That is a buffer overflow.' },
    { text: 'A captured session token is used again an hour later from a different computer, and the application accepts it.', answers: { attack: ['Replay'], family: ['Application attack'] }, why: 'Re-sending a captured, valid token or request is a replay attack. Short-lived tokens and nonces prevent it.' },
    { text: 'A help desk account that should only reset passwords suddenly adds itself to the Domain Admins group through a flaw in a management tool.', answers: { attack: ['Privilege escalation'], family: ['Application attack'] }, why: 'Gaining rights beyond what the account was given, here by exploiting a flaw in software, is privilege escalation.' }
  ]
};

COURSE_PRACTICE['acro-w5a'] = {
  title: 'Acronyms: Week 5, set A',
  kind: 'flash',
  items: [
    { term: 'CVSS', definition: 'Common Vulnerability Scoring System. A 0.0 to 10.0 severity score for a vulnerability, built from a vector of attack and impact metrics.' },
    { term: 'OVAL', definition: 'Open Vulnerability and Assessment Language. A standard way to write checks that test whether a system has a vulnerability or setting.' },
    { term: 'SQL', definition: 'Structured Query Language. The language applications use to ask a database for data.' },
    { term: 'SQLi', definition: 'SQL Injection. Input that changes the meaning of a database query because the application pasted it into the query as code.' },
    { term: 'XSS', definition: 'Cross-Site Scripting. Script injected into a trusted web page so it runs in other users\' browsers.' },
    { term: 'CSRF', definition: 'Cross-Site Request Forgery. Tricks a logged-in user\'s browser into sending a request the user did not intend. Also written XSRF.' },
    { term: 'XSRF', definition: 'Cross-Site Request Forgery. Another abbreviation for CSRF.' },
    { term: 'WAF', definition: 'Web Application Firewall. Inspects web traffic and blocks attacks such as SQL injection and XSS before they reach the application.' },
    { term: 'ASLR', definition: 'Address Space Layout Randomization. Places program code and data at random memory addresses so memory attacks such as buffer overflows are harder to aim.' },
    { term: 'DEP', definition: 'Data Execution Prevention. Marks memory areas that hold data as non-executable, so injected code there cannot run.' },
    { term: 'DLL', definition: 'Dynamic-Link Library. A Windows code library loaded by programs; attackers abuse it with DLL injection and DLL hijacking.' },
    { term: 'CMS', definition: 'Content Management System. Software such as WordPress for running websites; unpatched plugins are a common way in.' },
    { term: 'URL', definition: 'Uniform Resource Locator. A web address; attackers hide injection payloads and lookalike domains in them.' },
    { term: 'XML', definition: 'Extensible Markup Language. A data format; badly configured XML parsers allow XML external entity (XXE) injection.' },
    { term: 'VBA', definition: 'Visual Basic for Applications. The macro language in Microsoft Office, often abused to deliver malware in documents.' },
    { term: 'UAT', definition: 'User Acceptance Testing. The SDLC stage where users confirm software does what they need before release.' },
    { term: 'RAD', definition: 'Rapid Application Development. A development approach built on fast prototypes and frequent changes.' },
    { term: 'SOW', definition: 'Statement of Work. The contract document that defines a pentest\'s deliverables, schedule, and cost.' },
    { term: 'MSA', definition: 'Master Service Agreement. The overall contract between a client and a provider, under which individual SOWs are written.' },
    { term: 'SLA', definition: 'Service-Level Agreement. Defines required service levels, such as how fast a provider must patch Critical vulnerabilities.' }
  ]
};

COURSE_PRACTICE['acro-w5b'] = {
  title: 'Acronyms: Week 5, set B',
  kind: 'flash',
  items: [
    { term: 'MaaS', definition: 'Malware as a Service. Criminals rent ready-made malware and infrastructure to other criminals, like a subscription.' },
    { term: 'DoS', definition: 'Denial of Service. An attack that makes a system or service unavailable to its real users.' },
    { term: 'DDoS', definition: 'Distributed Denial of Service. A denial of service launched from many machines at once, often a botnet.' },
    { term: 'IoC', definition: 'Indicator of Compromise. An observable artifact, such as a file hash, IP address, or domain, that shows a system may be compromised.' },
    { term: 'CTI', definition: 'Cyber Threat Intelligence. Evidence-based knowledge about attackers and their methods, put in context so defenders can act.' },
    { term: 'AIS', definition: 'Automated Indicator Sharing. CISA\'s free program for exchanging indicators of compromise machine-to-machine.' },
    { term: 'ATT&CK', definition: 'Adversarial Tactics, Techniques, and Common Knowledge. MITRE\'s knowledge base of real attacker behavior.' },
    { term: 'SOC', definition: 'Security Operations Center. The team that monitors alerts, triages them, and responds to incidents.' },
    { term: 'XDR', definition: 'Extended Detection and Response. Combines detection data from endpoints, network, email, and cloud into one view.' },
    { term: 'FIM', definition: 'File Integrity Monitoring. Alerts when important files change, such as system binaries or web pages.' },
    { term: 'HIDS', definition: 'Host-Based Intrusion Detection System. Watches one host\'s logs, files, and processes for signs of attack.' },
    { term: 'HIPS', definition: 'Host-Based Intrusion Prevention System. A HIDS that can also block what it detects.' },
    { term: 'MBR', definition: 'Master Boot Record. The first sector of a disk; bootkits and some ransomware overwrite it.' },
    { term: 'UEFI', definition: 'Unified Extensible Firmware Interface. Modern PC firmware; Secure Boot in UEFI blocks unsigned boot code such as bootkits.' },
    { term: 'BIOS', definition: 'Basic Input/Output System. Older PC firmware that starts the computer; malware hidden there survives reinstalling the operating system.' },
    { term: 'RAM', definition: 'Random Access Memory. Where fileless malware lives, which is why memory is captured early in an investigation.' },
    { term: 'SMB', definition: 'Server Message Block. Windows file sharing on port 445; EternalBlue attacked SMB version 1.' },
    { term: 'NTLM', definition: 'New Technology LAN Manager. An older Windows authentication protocol; its hashes can be replayed in pass-the-hash attacks.' },
    { term: 'TGT', definition: 'Ticket Granting Ticket. The Kerberos ticket that proves a user logged in; forged TGTs are called golden tickets.' },
    { term: 'CERT', definition: 'Computer Emergency Response Team. A team that coordinates responses to security incidents and vulnerabilities.' }
  ]
};
