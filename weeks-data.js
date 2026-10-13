// Curriculum weeks (objectives, explanations, concepts, resources, labs, quizzes).
// Shared by MCCoE_Student_Platform.html and MCCoE_Student_Tracker.html — edit here only.
const WEEKS = [
  {
    num: 5, title: 'Kali Linux Fundamentals', nist: 'Identify / Protect',
    topics: 'Terminal Navigation | Filesystem | Text Manipulation | Network Commands | Permissions | Bash Scripting',
    hours: '5-6 hours', level: 'Foundational',
    objectives: [
      'Navigate the Kali Linux filesystem confidently using 10 essential terminal commands',
      'Read, search, and manipulate text files using cat, grep, sed, and awk',
      'Analyze network configuration and open connections using ifconfig and netstat',
      'Set and interpret Linux file permissions using chmod with numeric and symbolic notation',
      'Manage running processes using ps, top, kill, and foreground/background control',
      'Write a basic Bash script that automates a simple security scan task'
    ],
    objectiveDetails: [
      {
        explanation: "The Linux terminal is the primary tool for every cybersecurity professional. Kali Linux is built around the command line — all 300+ security tools run from it. These 10 essential commands let you navigate directories, find files, and understand what is on a system in minutes.",
        keyPoints: ["pwd — print working directory (shows your current location in the filesystem)", "whoami — shows which user you are logged in as (root = full admin privileges)", "ls -la — lists ALL files including hidden dot-files with permissions, sizes, and dates", "cd /path — navigate to a directory; cd .. goes up one level; cd ~ goes to home directory", "cat file — reads entire file to screen; head -5 reads first 5 lines; tail -20 reads last 20", "locate name — fast file search using a pre-built database", "history — shows your recent commands; up-arrow repeats the previous command"],
        example: "When handed an unfamiliar Linux server, every security analyst starts the same way: pwd (where am I?), whoami (who am I?), ls -la (what files are here?). These 3 commands orient you in under 10 seconds — the terminal instinct this module builds.",
        quizHint: "Quiz asks: 'Which Linux command prints your current working directory?' Answer: pwd. Also: 'Which command lists ALL files including hidden files with permissions?' Answer: ls -la. Both appear on the Week 2 quiz."
      },
      {
        explanation: "Log files, config files, and command output are all text. cat, grep, sed, and awk are the four tools that let you read, search, filter, and transform text — skills used in every phase of security work, from reviewing logs after an incident to manipulating tool output in scripts.",
        keyPoints: ["cat file — displays the full file; pipe it: cat /etc/passwd | head -10", "grep 'pattern' file — finds lines matching a pattern; -i for case-insensitive; -r for recursive search in a directory", "grep 'Failed password' /var/log/auth.log — filters an SSH log for failed logins instantly", "sed 's/old/new/g' file — global find-and-replace throughout a text stream or file", "awk '{print $1, $3}' file — extracts columns 1 and 3 from space-delimited text", "Chain commands with pipes: grep 'root' /etc/passwd | awk '{print $1}'"],
        example: "After a suspected breach, run: grep 'Failed password' /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -rn. This single pipeline gives you a ranked list of IP addresses with the most failed SSH login attempts — instant evidence for incident response.",
        quizHint: "Quiz: 'To search for the word password inside a file called log.txt, you use:' Answer: grep 'password' log.txt. Memorize grep syntax — it is tested directly on the Week 2 quiz."
      },
      {
        explanation: "ifconfig shows every network interface on the system and its IP address. netstat -tulpn shows every port with a service actively listening on it. Together these two commands reveal the complete network exposure of a machine — where it can be reached and what services are running.",
        keyPoints: ["ifconfig — shows eth0 (wired), lo (loopback 127.0.0.1), wlan0 (Wi-Fi) and their IP addresses", "netstat -tulpn — t=TCP, u=UDP, l=listening ports, p=show process name, n=numeric IPs", "Common ports: 22=SSH, 80=HTTP, 443=HTTPS, 3306=MySQL, 5432=PostgreSQL, 25=SMTP", "Every open port is a potential attack surface — document all open ports during reconnaissance", "Unexpected ports (4444, 1337, 9999, 31337) are red flags — often indicate backdoors or RATs", "Bind address matters: 0.0.0.0 = accessible from anywhere (dangerous); 127.0.0.1 = local only (safe)"],
        example: "During a system audit, netstat -tulpn shows port 3306 (MySQL) bound to 0.0.0.0 — accessible from any IP on the internet. This is a critical misconfiguration: the database is publicly reachable. Fix: bind MySQL to 127.0.0.1 in the MySQL config file.",
        quizHint: "Quiz: 'Which command displays the IP address assigned to your network interface?' Answer: ifconfig. 'netstat -tulpn shows you:' Answer: All listening ports and their associated services."
      },
      {
        explanation: "Linux file permissions control who can read, write, or execute each file. The three groups are Owner, Group, and Others. chmod sets permissions using numeric (755, 644, 600) or symbolic (u+x) notation. Misconfigured permissions are one of the most common privilege escalation paths found in penetration tests.",
        keyPoints: ["Three groups: Owner | Group | Others — each with 3 bits: read=4, write=2, execute=1", "Add the bits: rwx=7 (4+2+1), rw-=6, r-x=5, r--=4, ---=0", "chmod 755 = rwxr-xr-x: Owner full access, Group and Others can read and execute", "chmod 644 = rw-r--r--: Owner can read+write, everyone else read-only (standard for config files)", "chmod 600 = rw-------: Owner only — required for SSH private keys", "chmod 777 = rwxrwxrwx: Everyone full access — NEVER use in production"],
        example: "chmod 777 on a web upload directory is a critical vulnerability. An attacker uploads a PHP webshell disguised as an image file, then accesses it via the browser to execute commands — full Remote Code Execution. Fix: chmod 755 the directory so the web server can read but nobody can write arbitrary files.",
        quizHint: "Quiz: 'chmod 755 on a file means:' Answer: Owner has full access; group and others can read and execute. Think: 7=rwx (all three), 5=r-x (read and execute, no write)."
      },
      {
        explanation: "Every running program on Linux is a process with a unique PID (Process ID). ps aux shows a complete snapshot of all running processes. top shows a live updating view with CPU and memory usage. kill terminates any process. Security professionals use these to find malware, identify suspicious activity, and control system resources.",
        keyPoints: ["ps aux — a=all users, u=detailed user format, x=includes processes without a terminal attached", "top — live process viewer; press q to quit, k to kill by PID, M to sort by memory usage", "kill [PID] — sends SIGTERM (graceful shutdown request) to the process", "kill -9 [PID] — sends SIGKILL (force terminate) — use when normal kill is ignored", "Ctrl+Z suspends (pauses) the current foreground process to the background", "fg — brings a suspended or background process to the foreground; bg — resumes it in background"],
        example: "A system is running very slowly. Run top, press P to sort by CPU. You see 'python3 /tmp/.hidden/miner.py' consuming 95% CPU with root privileges — a cryptominer. Run kill -9 [PID] to terminate it immediately, then investigate how it was installed and remove persistence.",
        quizHint: "Quiz: 'Which command shows all running processes with their resource usage?' Answer: Both ps aux AND top (Answer C). 'To kill a process with PID 1337:' Answer: kill 1337."
      },
      {
        explanation: "A Bash script is a text file of Linux commands that execute automatically in sequence. Scripts eliminate repetitive manual work — instead of typing 10 commands every morning, you type one. Security professionals script vulnerability scans, log parsers, alerting systems, and automated daily reports.",
        keyPoints: ["Line 1 MUST be #!/bin/bash — the shebang line tells the OS to use Bash as the interpreter", "Make the script executable: chmod +x script.sh, then run it: ./script.sh", "Variables: MY_VAR='value' then use $MY_VAR anywhere in the script", "Redirect output to file: command > output.txt (overwrite) or >> output.txt (append to existing)", "Comments start with # — Bash ignores everything after # on a line", "Capture command output: RESULT=$(command) stores the output in a variable for later use"],
        example: "A 5-line security audit script: #!/bin/bash, echo 'Audit started '$(date), whoami, netstat -tulpn, ps aux >> /var/log/daily_audit.txt. Scheduled with cron to run every morning at 6 AM, this gives you a daily snapshot of system state to compare against previous days.",
        quizHint: "Quiz: 'The first line of every Bash script must be:' Answer: #!/bin/bash. This shebang line is the single most tested Bash fact. Know it cold."
      }
    ],
    concepts: [
      ['pwd / whoami','Print working directory / show current logged-in user','pwd → /root | whoami → root'],
      ['cd / ls -la','Change directory / list all files with permissions and hidden files','cd /etc | ls -la /etc'],
      ['locate / find / whereis','Search for files and binaries across the filesystem','find / -name "*.conf" 2>/dev/null'],
      ['cat / head / tail','Read entire file / first N lines / last N lines','cat /etc/passwd | head -5'],
      ['grep','Search inside files for patterns — essential for log analysis','grep "root" /etc/passwd'],
      ['sed / awk','Stream editor for find-replace / extract specific columns from text','sed \'s/old/new/g\' file.txt'],
      ['chmod / chown','Change file permissions / change file ownership','chmod 755 script.sh → rwxr-xr-x'],
      ['ps aux / top / kill','List all processes / live resource monitor / terminate a process','ps aux | grep apache2'],
      ['ifconfig / netstat -tulpn','Show IP addresses and interfaces / show all listening ports','netstat -tulpn lists every open port'],
      ['CFAA Legal Rule','Computer Fraud & Abuse Act — only test systems you own or have WRITTEN permission to test','Unauthorized scans = federal felony']
    ],
    resources: [
      ['OverTheWire Bandit','overthewire.org','Terminal wargame — perfect for beginners','Free','https://overthewire.org/wargames/bandit/'],
      ['TryHackMe Linux Fundamentals 1–3','tryhackme.com','Interactive guided Kali labs','Free','https://tryhackme.com/module/linux-fundamentals'],
      ['Explainshell','explainshell.com','Paste any command — see each flag explained','Free','https://explainshell.com/'],
      ['Linux Basics for Hackers (OccupyTheWeb)','nostarch.com','Book this module is based on — 17 chapters','~$35','https://kea.nu/files/textbooks/humblesec/linuxbasicsforhackers.pdf']
    ],
    labs: [
      'Open a Kali terminal and run each of the following — record the command AND its output: pwd, whoami, ls -la /, cd /etc then ls -la, cat /etc/passwd, grep "root" /etc/passwd, ps aux, netstat -tulpn, ifconfig, history',
      'Use find / -name "*.conf" 2>/dev/null to locate configuration files — identify 3 interesting ones and explain in one sentence what each configures',
      'Create a file called test.sh, give it 755 permissions using chmod, then verify with ls -la — write out what rwxr-xr-x means for Owner, Group, and Others',
      'Write a 5-line Bash script that: (1) echoes "MCCoE Security Scan Started", (2) runs whoami, (3) runs ifconfig, (4) runs netstat -tulpn, (5) saves all output to scan_results.txt — run it and submit the results file',
      'Complete TryHackMe Linux Fundamentals Parts 1, 2, and 3 — screenshot your completion badges for each part'
    ],
    quiz: [
      { q:'A penetration tester needs to identify all open ports and running services on a target host at 192.168.1.50. Which Kali Linux tool should they use?', opts:['Wireshark', 'Nmap', 'Metasploit', 'Hydra'], ans:1 },
      { q:'During an authorized test, an analyst wants to capture and analyze all network packets on the local subnet in real time. Which Kali tool is designed for this?', opts:['Nmap', 'Metasploit', 'Wireshark', 'Recon-ng'], ans:2 },
      { q:'A red team operator has identified an unpatched vulnerability on a target server. Which Kali Linux framework provides pre-built exploits for common CVEs?', opts:['Wireshark', 'Metasploit', 'Nmap', 'Recon-ng'], ans:1 },
      { q:'An associate playing OverTheWire Bandit needs to read a file containing the next level\'s password. Which Linux command should they use?', opts:['ls', 'mkdir', 'cat', 'chmod'], ans:2 },
      { q:'A security researcher uses Kali Linux for OSINT on a target organization, gathering public information before an authorized test. Which tool is BEST for structured OSINT collection?', opts:['Hydra', 'Aircrack-ng', 'Recon-ng', 'Burp Suite'], ans:2 },
      { q:'During a web application test, an analyst needs to discover hidden directories on a web server. Which Kali tool performs web directory brute-forcing?', opts:['Nmap', 'Dirb', 'Hydra', 'Netcat'], ans:1 },
      { q:'An analyst is conducting an authorized password-spraying test against an SSH service. Which Kali tool is specifically designed for online brute-force attacks?', opts:['Aircrack-ng', 'Nmap', 'Hydra', 'Metasploit'], ans:2 },
      { q:'A wireless security tester captures a WPA2 handshake during an authorized engagement. Which Kali tool is used to crack WPA2 wireless passwords offline?', opts:['Recon-ng', 'Aircrack-ng', 'Hydra', 'Dirb'], ans:1 },
      { q:'At OverTheWire Bandit Level 0, you must connect to a remote host using SSH on port 2220. Which command is correct?', opts:['ssh bandit0@bandit.labs.overthewire.org -p 2220', 'telnet bandit.labs.overthewire.org 2220', 'nmap bandit.labs.overthewire.org -p 2220', 'ftp bandit.labs.overthewire.org 2220'], ans:0 },
      { q:'A student wants to use Kali Linux tools against a real corporate network for practice. The organization has NOT given written authorization. Which of the following BEST describes this action?', opts:['Acceptable if the student causes no damage', 'A misdemeanor if no data is stolen', 'A violation of the Computer Fraud and Abuse Act regardless of intent', 'Legal since Kali tools are open-source'], ans:2 }
    ]
  },
  {
    num: 1, title: 'Cybersecurity Foundations', nist: 'Identify',
    topics: 'CIA Triad | DAD Triad | Security Mindset | AAA | Risk Assessment',
    hours: '3-4 hours', level: 'Foundational',
    objectives: [
      'Define Confidentiality, Integrity, and Availability with real-world examples',
      'Map the DAD Triad (Disclosure, Alteration, Denial) to CIA violations',
      'Explain the AAA Framework: Authentication, Authorization, Accounting',
      'Define Asset, Threat, Vulnerability, Exploit, Exposure, and Risk',
      'Apply the Risk Formula: Risk = Likelihood × Impact',
      'Distinguish Preventive, Detective, and Corrective security controls',
      'Execute a 5-step Risk Assessment on a given scenario'
    ],
    objectiveDetails: [
      {
        explanation: "The CIA Triad is the foundation of all security decisions. Every security control, policy, and tool exists to protect one or more of these three properties: Confidentiality (only authorized people see the data), Integrity (data is accurate and unmodified), and Availability (systems work when needed). Every attack violates at least one.",
        keyPoints: ["Confidentiality: protects data from unauthorized disclosure — encryption, MFA, access controls, data classification", "Integrity: ensures data is accurate and unmodified — hashing (SHA-256), digital signatures, checksums", "Availability: systems accessible when needed — redundancy, backups, DDoS mitigation, failover", "Most attacks target one or more CIA elements — identifying WHICH element helps determine the defense", "Security is about balancing all three — locking everything down destroys Availability"],
        example: "Ransomware attacks Availability (you cannot access your files) and may also attack Confidentiality (attacker copied data before encrypting). A database breach attacks Confidentiality. A data-tampering attack attacks Integrity. Colonial Pipeline 2021 was an Availability attack — ransomware halted pipeline operations for 6 days.",
        quizHint: "Quiz: 'Which CIA Triad element ensures data is accurate and has not been modified?' Answer: Integrity. 'Ransomware that encrypts your files attacks which CIA element?' Answer: Availability. Know all three definitions cold."
      },
      {
        explanation: "DAD stands for Disclosure, Alteration, and Denial — the three ways attackers can violate the CIA Triad. Each DAD element is the exact opposite of a CIA element. Mapping an attack to DAD tells you which CIA property failed and what control was missing.",
        keyPoints: ["Disclosure is the opposite of Confidentiality — attacker exposes data to unauthorized parties", "Alteration is the opposite of Integrity — attacker modifies, corrupts, or destroys data", "Denial is the opposite of Availability — attacker makes systems inaccessible to legitimate users", "Equifax 2017: Disclosure — 147 million credit records exposed publicly", "SolarWinds 2020: Alteration — malicious code injected into trusted software updates", "Colonial Pipeline 2021: Denial — ransomware halted the entire fuel supply pipeline"],
        example: "When hackers dump a company's customer database online, that is Disclosure (Confidentiality violated). When ransomware encrypts your files, that is Denial (Availability violated). When malware modifies financial records to hide fraud, that is Alteration (Integrity violated). One incident, one DAD mapping.",
        quizHint: "Quiz: 'The Equifax 2017 breach that exposed 147 million records maps to which DAD element?' Answer: Disclosure. Remember: exposed data = Disclosure = Confidentiality violated."
      },
      {
        explanation: "AAA stands for Authentication, Authorization, and Accounting — the three-step security process that controls how users access systems. Authentication verifies WHO you are. Authorization determines WHAT you can do. Accounting tracks WHAT you did. All three are required for a complete access control system.",
        keyPoints: ["Authentication: verifies identity — passwords, MFA, biometrics, smart cards, certificates", "Authorization: defines permissions — what files, systems, and actions are allowed for this identity", "Accounting: creates an audit trail — who logged in, when, from where, and what they accessed", "AAA is implemented by systems like RADIUS, TACACS+, and Active Directory", "Missing Accounting means no forensic evidence after a breach — you cannot reconstruct what happened"],
        example: "Your bank login uses all three: Authentication = username + password + one-time code. Authorization = you can see YOUR accounts only, not other customers'. Accounting = every login, transfer, and page view is logged with timestamp and IP address — the evidence trail for fraud investigation.",
        quizHint: "Quiz: 'A badge reader that verifies your identity before opening a door is an example of:' Answer: Authentication. 'File permissions that determine what folders you can access represent:' Answer: Authorization."
      },
      {
        explanation: "These six terms form the vocabulary of risk assessment. Every security decision starts with knowing what you have (Asset), what could go wrong (Threat), what weakness enables it (Vulnerability), how it is executed (Exploit), what state enables it (Exposure), and how bad the outcome could be (Risk).",
        keyPoints: ["Asset: anything of value — data, systems, people, reputation, intellectual property", "Threat: any potential danger to an asset — hackers, insiders, natural disasters, human error", "Vulnerability: a specific weakness a threat can exploit — unpatched software, weak passwords, open ports", "Exploit: the specific method or code used to take advantage of a vulnerability", "Exposure: the condition of being vulnerable — your attack surface", "Risk: the likelihood AND impact of a threat successfully exploiting a vulnerability: Risk = Likelihood x Impact"],
        example: "Your web server (Asset) has Apache 2.4.49 installed (Vulnerability). A threat actor has an active path traversal exploit for that version (Exploit). It is internet-facing with the vulnerable endpoint accessible (Exposure). The Risk is CRITICAL because likelihood is high (exploit is public) and impact is high (full file read RCE possible).",
        quizHint: "Know the distinction: Threat = the danger, Vulnerability = the weakness, Exploit = the actual attack method used. These distinctions appear in scenario-based risk questions."
      },
      {
        explanation: "Risk = Likelihood x Impact is the core formula for prioritizing security work. It turns subjective gut feelings into objective numbers you can use to justify budget to management. Not every vulnerability is equally dangerous — this formula shows you what to fix first.",
        keyPoints: ["Likelihood: how probable is this threat to actually occur? Rate 1=Low, 2=Medium, 3=High", "Impact: how bad would it be if this threat succeeds? Rate 1=Low, 2=Medium, 3=High", "Risk Score: 1x1=1 (Low) | 2x2=4 (Medium) | 3x3=9 (Critical)", "A public SQL injection vulnerability = High Likelihood x High Impact = Critical — fix immediately", "An insider threat at a 5-person company = Low Likelihood x High Impact = Medium risk", "Risk prioritization determines the order of remediation — limited time and budget require hard choices"],
        example: "A hospital risk assessment: Ransomware attack (Threat). Likelihood = HIGH (hospitals are the top ransomware target). Impact = CRITICAL (patient records inaccessible, equipment could fail, lives at risk). Risk = HIGH x CRITICAL = top priority. This justifies $500K on offline backups and network segmentation.",
        quizHint: "Quiz: 'Using Risk = Likelihood x Impact, a threat with HIGH likelihood and LOW impact has:' Answer: Medium risk. High x Low = Medium. Know all four combinations of high/low."
      },
      {
        explanation: "Security controls are classified by WHEN they act relative to an attack: Preventive (before), Detective (during), or Corrective (after). A mature security program has controls in all three categories. Knowing which type a control is tells you what gap it fills and what you still need.",
        keyPoints: ["Preventive: stops attacks before they succeed — firewalls, MFA, encryption, access controls, training", "Detective: identifies attacks as they happen — IDS/IPS, SIEM, audit logs, security cameras", "Corrective: restores systems after an attack — backups, incident response plans, patch management", "Controls can also be Administrative (policies, training), Technical (software/hardware), or Physical (locks, cameras)", "Defense in Depth means combining all three types so a failure in one is caught by another"],
        example: "Think of a bank vault: the 12-inch steel door is Preventive. Security cameras and motion sensors are Detective. Deposit insurance and a robbery response plan are Corrective. A bank with only a strong door and no cameras or insurance has dangerous gaps — your security program should not either.",
        quizHint: "Quiz: 'A firewall that BLOCKS attacks before they happen is:' Answer: Preventive. 'An IDS that ALERTS you to an attack in progress is:' Answer: Detective. 'Restoring from backup after ransomware is:' Answer: Corrective."
      },
      {
        explanation: "A formal 5-step risk assessment transforms vague security concerns into a prioritized action plan. This process is the foundation of NIST, ISO 27001, SOC 2, and every other compliance framework. Every cybersecurity job expects you to be able to execute it.",
        keyPoints: ["Step 1 — Identify Assets: catalog what you are protecting (servers, databases, people, processes, data)", "Step 2 — Identify Threats: who or what could harm those assets? (hackers, insiders, fires, floods)", "Step 3 — Identify Vulnerabilities: what specific weaknesses exist that threats could exploit?", "Step 4 — Analyze Risk: apply Risk = Likelihood x Impact to prioritize each threat-vulnerability pair", "Step 5 — Treat Risk: choose Mitigate (add a control), Avoid (stop the activity), Transfer (buy insurance), or Accept (document and tolerate)"],
        example: "Risk Treatment options in practice: Mitigate = patch the Apache server (reduces likelihood). Avoid = take the vulnerable application offline (eliminates exposure). Transfer = buy cyber liability insurance (shifts financial impact). Accept = document that a low-priority finding is acknowledged but not immediately fixed due to cost.",
        quizHint: "Quiz: 'The Risk Assessment Step where you choose to Mitigate, Avoid, Transfer, or Accept is:' Answer: Step 5: Treat Risk. Know all 5 steps in order — they appear in sequence questions."
      }
    ],
    concepts: [
      ['Confidentiality','Only authorized parties can access data','Encryption, MFA, access controls, data classification'],
      ['Integrity','Data is accurate, complete, and unmodified','Hashing (SHA-256), digital signatures, checksums'],
      ['Availability','Systems accessible when needed','Redundancy, backups, DDoS mitigation, failover'],
      ['Disclosure (DAD)','Breaks Confidentiality — attacker exposes data','Equifax breach (2017): 147M records exposed'],
      ['Alteration (DAD)','Breaks Integrity — attacker modifies data','SolarWinds (2020): malicious code in software update'],
      ['Denial (DAD)','Breaks Availability — attacker halts operations','Colonial Pipeline (2021): ransomware halted fuel supply'],
      ['Authentication (AAA)','Verifies WHO you are','Passwords, MFA, biometrics, smart cards'],
      ['Authorization (AAA)','Determines WHAT you can do','Permissions, roles, ACLs, RBAC'],
      ['Accounting (AAA)','Tracks and logs WHAT YOU DID','Audit trails, SIEM, log management'],
      ['Risk Formula','Risk = Likelihood × Impact','High likelihood + High impact = Critical priority'],
    ],
    resources: [
      ['TryHackMe Pre-Security Path','tryhackme.com','Guided interactive labs','Free','https://tryhackme.com/path/outline/presecurity'],
      ['Professor Messer Security+','professormesser.com','Video series covering CIA, AAA','Free','https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/'],
      ['NIST SP 800-12','nist.gov','Reference: intro to security','Free','https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-12.pdf'],
      ['Cisco NetAcad Intro to CyberSec','netacad.com','Video course','Free','https://www.netacad.com/courses/cybersecurity']
    ],
    labs: [
      'Research Equifax (2017), WannaCry (2017), SolarWinds (2020), Colonial Pipeline (2021), and Target (2013) — identify which CIA/DAD element each violated',
      'Draw the AAA Framework from memory and give one real-world example for each pillar',
      'Apply the 5-step Risk Assessment to your home network — identify 3 assets, 2 threats, and calculate risk priority',
      'List one Preventive, one Detective, and one Corrective control that would have prevented the Colonial Pipeline attack',
      'Complete the CIA Triad quiz questions in CyberSec Academy on your Desktop'
    ],
    quiz: [
      { q:'A database administrator encrypts all customer records to ensure only authorized employees can access them. Which CIA Triad element does this PRIMARILY protect?', opts:['Availability', 'Integrity', 'Confidentiality', 'Authentication'], ans:2 },
      { q:'Ransomware encrypts a hospital\'s patient record system and demands payment to restore access. Which CIA Triad element is MOST directly violated?', opts:['Confidentiality', 'Integrity', 'Availability', 'Accounting'], ans:2 },
      { q:'Hackers breach a company\'s database and post 147 million customer records publicly online. According to the DAD Triad, which element does this represent?', opts:['Denial', 'Alteration', 'Disclosure', 'Destruction'], ans:2 },
      { q:'An employee must scan their badge and enter a PIN before entering the server room. The badge-and-PIN check is an example of which AAA component?', opts:['Authorization', 'Authentication', 'Accounting', 'Availability'], ans:1 },
      { q:'After authenticating, a junior analyst can only view files in their own folder and cannot access the CEO\'s folder. This restriction is an example of which AAA component?', opts:['Authentication', 'Accounting', 'Authorization', 'Availability'], ans:2 },
      { q:'A security analyst calculates a SQL injection vulnerability has HIGH likelihood (3) and HIGH impact (3) using Risk = Likelihood x Impact. What is the risk score and priority?', opts:['Score 6 — Medium priority', 'Score 9 — Critical priority', 'Score 3 — Low priority', 'Score 12 — Extreme priority'], ans:1 },
      { q:'An organization deploys a next-generation firewall that blocks all unauthorized traffic before it reaches internal servers. What type of security control is this?', opts:['Detective', 'Corrective', 'Compensating', 'Preventive'], ans:3 },
      { q:'A SIEM alerts the SOC team when login failures exceed 10 in 60 seconds, indicating a possible brute-force attack in progress. What type of control is a SIEM?', opts:['Preventive', 'Corrective', 'Detective', 'Physical'], ans:2 },
      { q:'After a ransomware attack, the IR team restores all systems from the previous night\'s offline backup. What type of security control is the backup restore?', opts:['Preventive', 'Detective', 'Corrective', 'Compensating'], ans:2 },
      { q:'A CISO is deciding whether to purchase cyber insurance to cover a ransomware risk the team cannot fully eliminate. Which risk treatment strategy does this represent?', opts:['Mitigate', 'Avoid', 'Accept', 'Transfer'], ans:3 }
    ]
  },
  {
    num: 2, title: 'Network Fundamentals', nist: 'Identify / Protect',
    topics: 'OSI Model | Protocols | Wireshark | Defense in Depth',
    hours: '3-4 hours', level: 'Foundational',
    objectives: [
      'Name all 7 OSI layers and describe the primary function of each',
      'Identify at least 2 protocols associated with each layer',
      'Map 7 common attack types to the OSI layer they target',
      'Install Wireshark and capture live network traffic',
      'Apply Wireshark display filters to isolate specific protocols',
      'Explain Defense in Depth and name all 8 layers of the security stack'
    ],
    objectiveDetails: [
      {
        explanation: "The OSI (Open Systems Interconnection) model is a 7-layer framework that describes how data travels across a network. Every network communication involves all 7 layers. Security professionals use it to pinpoint WHICH layer an attack targets — which determines exactly which defense to deploy.",
        keyPoints: ["Layer 1 — Physical: cables, hubs, Wi-Fi signals, network hardware itself", "Layer 2 — Data Link: MAC addresses, Ethernet frames, switches, ARP protocol", "Layer 3 — Network: IP addresses, routing between networks, ICMP", "Layer 4 — Transport: TCP/UDP, port numbers, connection reliability and sequencing", "Layer 5 — Session: establishing and maintaining communication sessions (NetBIOS, RPC)", "Layer 6 — Presentation: data formatting, encryption and decryption (TLS/SSL)", "Layer 7 — Application: what users interact with directly (HTTP, DNS, SMTP, SSH, FTP)"],
        example: "Top-down mnemonic: All People Seem To Need Data Processing (Application, Presentation, Session, Transport, Network, Data Link, Physical). Bottom-up: Please Do Not Throw Sausage Pizza Away. Pick one and commit it to memory before the quiz.",
        quizHint: "Quiz: 'Which OSI layer handles IP addressing and routing between networks?' Answer: Layer 3 Network. 'The OSI mnemonic All People Seem To Need Data Processing goes from layer:' Answer: 7 to 1 (top down)."
      },
      {
        explanation: "Each OSI layer has specific protocols that define how data is handled at that layer. Understanding which protocols belong to which layer is essential because different attacks target different layers, and defenses must be applied at the correct layer to be effective.",
        keyPoints: ["L7 Application: HTTP, HTTPS, DNS, FTP, SMTP, SSH, Telnet, SNMP", "L6 Presentation: TLS/SSL, JPEG, ASCII, MPEG — data format and encryption", "L5 Session: NetBIOS, RPC, PPTP — session establishment and management", "L4 Transport: TCP (reliable, ordered) and UDP (fast, connectionless)", "L3 Network: IP, ICMP (ping), OSPF, BGP — logical addressing and routing", "L2 Data Link: Ethernet, MAC addresses, ARP, 802.11 (Wi-Fi) — physical network segments", "L1 Physical: Ethernet cable, fiber optic, Wi-Fi radio signals, coaxial cable"],
        example: "When you visit a website: L7=HTTP GET request, L6=TLS encrypts the data, L5=TCP session stays open, L4=TCP ensures delivery and ordering, L3=IP routes packets to the server, L2=Ethernet frames hop to the next router, L1=electrons move through the cable. All 7 layers, every single request.",
        quizHint: "Quiz: 'Which OSI layer do TLS and SSL operate at?' Answer: Layer 6 Presentation. TLS encrypts and formats data before it is handed to Layer 5."
      },
      {
        explanation: "Every network attack targets a specific OSI layer. Knowing which layer an attack operates at tells you exactly which defense to apply and which team or tool owns the response. A firewall at Layer 3 does not stop a SQL injection at Layer 7.",
        keyPoints: ["L7 Application: SQL Injection, XSS, Phishing, DNS Spoofing, HTTP floods", "L6 Presentation: SSL Stripping — downgrades HTTPS to HTTP to expose encrypted traffic", "L5 Session: Session Hijacking — stealing an authenticated session token", "L4 Transport: SYN Flood (TCP half-open connections), Port Scanning, UDP Flood", "L3 Network: IP Spoofing, ICMP Flood (Ping of Death), BGP Hijacking", "L2 Data Link: ARP Poisoning (man-in-the-middle), MAC Spoofing, 802.11 deauthentication attacks", "L1 Physical: cable interception, signal jamming, hardware keyloggers, implants"],
        example: "ARP Poisoning at L2 tricks devices on a local network into sending all traffic through the attacker's machine — a classic man-in-the-middle. A SYN Flood at L4 overwhelms a server's TCP connection table until it cannot accept new connections. Different layers, completely different defenses required.",
        quizHint: "Quiz: 'A SYN Flood attack targets which OSI layer?' Answer: Layer 4 Transport (TCP). 'ARP Poisoning attacks which OSI layer?' Answer: Layer 2 Data Link. 'MAC Spoofing targets which layer?' Answer: Layer 2."
      },
      {
        explanation: "Wireshark is the world's most popular network protocol analyzer. It captures every packet flowing through your network interface and displays each one in a readable, structured format showing all 7 OSI layers. Security analysts use it to investigate breaches, analyze suspicious traffic, and understand how protocols work.",
        keyPoints: ["Download Wireshark free at wireshark.org — install with default settings including the Npcap driver", "Open Wireshark, select your active network interface (eth0 or Wi-Fi), click the blue shark fin to start capturing", "Every packet shows: timestamp, source IP, destination IP, protocol, length, and summary info", "Expand any packet in the details pane to see all 7 OSI layers with full field-by-field breakdown", "Stop capturing: red square button. Save capture file: File > Save As (saves as .pcap format)", "LEGAL: only capture traffic on networks you own or have explicit written permission to analyze"],
        example: "Open Wireshark and visit a website that uses plain HTTP (not HTTPS). Filter for 'http'. You will see your GET request AND the server response — including any form data submitted — completely in plaintext. Any attacker on the same network can read it. This is why HTTPS is mandatory for any sensitive data.",
        quizHint: "Quiz: 'HTTP traffic is DANGEROUS on a shared network because:' Answer: It is transmitted in cleartext — readable by Wireshark. This is the core lesson of the Wireshark lab."
      },
      {
        explanation: "Wireshark captures hundreds of packets per second. Display filters let you show ONLY the traffic relevant to your investigation. Mastering filters is what separates an analyst who can investigate efficiently from one who is overwhelmed by noise.",
        keyPoints: ["Type filters in the filter bar at the top — press Enter to apply, green bar = valid filter", "dns — show only DNS queries and responses (reveals what domains a device is looking up)", "http — show only HTTP traffic (shows all unencrypted web requests)", "tcp.port == 443 — show only HTTPS connections", "ip.src == 192.168.1.100 — show only traffic originating FROM a specific IP address", "ip.addr == 192.168.1.100 — show all traffic TO or FROM that IP", "Right-click any packet > Follow > TCP Stream — reassembles the full conversation in readable text"],
        example: "During a malware investigation: filter 'dns' to see if malware is making suspicious DNS lookups to unfamiliar domains. Filter 'ip.dst == 185.220.1.50' to see if any machine is sending data to a known command-and-control server. Follow TCP Stream to read the full content of suspicious HTTP sessions.",
        quizHint: "Quiz: 'Which Wireshark display filter shows only DNS traffic?' Answer: dns (all lowercase). 'In Wireshark, Follow TCP Stream allows you to:' Answer: Reassemble a full client-server conversation in readable form."
      },
      {
        explanation: "Defense in Depth is the strategy of using MULTIPLE overlapping layers of security controls so that if one layer fails, the others still protect the asset. The concept comes from medieval castle design: walls, moat, drawbridge, guards, and keep are all separate lines of defense.",
        keyPoints: ["8 layers: Policies and Awareness | Physical Security | Perimeter | Network | Host | Application | Data | Monitoring", "Policies layer: security policies, user training, acceptable use agreements", "Perimeter layer: firewalls, DMZ, VPN gateways — the outer boundary", "Network layer: segmentation, VLANs, IDS/IPS, network access control", "Host layer: endpoint protection, OS hardening, patch management, host-based firewall", "Application layer: WAF, secure coding, OWASP Top 10 defenses, input validation", "Data layer: encryption at rest and in transit, DLP, data classification"],
        example: "The 2013 Target breach demonstrated DiD failure: the Perimeter layer allowed a vendor's compromised credentials through. No Network segmentation meant attackers reached Point-of-Sale systems. No Data encryption meant raw card numbers were stolen. Adding ANY single layer would have stopped the breach or limited its scope.",
        quizHint: "Quiz: 'Defense in Depth means:' Answer: Using multiple layered controls so one failure does not compromise everything. The specific 8 layers are tested — know them in order."
      }
    ],
    concepts: [
      ['L7 Application','HTTP, HTTPS, DNS, FTP, SMTP, SSH','SQL Injection, XSS, Phishing, DNS Spoofing'],
      ['L6 Presentation','TLS/SSL, JPEG, ASCII, MPEG','SSL Stripping, Encoding Attacks'],
      ['L5 Session','NetBIOS, RPC, PPTP','Session Hijacking'],
      ['L4 Transport','TCP, UDP','SYN Flood, Port Scanning, UDP Flood'],
      ['L3 Network','IP, ICMP, OSPF, BGP','IP Spoofing, ICMP Flood, Routing Attacks'],
      ['L2 Data Link','Ethernet, MAC, ARP, 802.11','MAC Spoofing, ARP Poisoning'],
      ['L1 Physical','Cables, Hubs, Wi-Fi signals','Physical Interception, Signal Jamming'],
      ['Wireshark','Network protocol analyzer — captures live packets','Best for: Network Analysis — See every OSI layer in real time'],
      ['Defense in Depth','Multiple layered security controls','If one layer fails, others still protect the asset']
    ],
    resources: [
      ['TryHackMe Networking Rooms','tryhackme.com','Interactive OSI labs','Free','https://tryhackme.com/room/osimodelzi'],
      ['Wireshark Download','wireshark.org','Protocol analyzer tool','Free','https://www.wireshark.org/download.html'],
      ['Professor Messer YouTube','YouTube','Layer-by-layer OSI video series','Free','https://www.youtube.com/@professormesser'],
      ['NetworkChuck YouTube','YouTube','Engaging networking videos','Free','https://www.youtube.com/@NetworkChuck']
    ],
    labs: [
      'Draw and label all 7 OSI layers from memory without references — verify accuracy against the table',
      'Sort 15 protocols (Telnet, ARP, TCP, HTTP, DNS, SMTP, IP, 802.11, TLS, FTP, ICMP, SSH, UDP, BGP, NetBIOS) into the correct OSI layer',
      'Install Wireshark and capture 5 minutes of your own traffic — apply filters for http, dns, and tcp',
      'Follow one TCP stream in Wireshark — identify the 3-way handshake (SYN > SYN-ACK > ACK)',
      'Draw the Defense in Depth stack (8 layers) and write one control example for each layer'
    ],
    quiz: [
      { q:'A packet destined for IP address 10.0.0.5 is being routed across the internet. Which OSI layer is responsible for logical addressing and routing?', opts:['Layer 2 — Data Link', 'Layer 3 — Network', 'Layer 4 — Transport', 'Layer 5 — Session'], ans:1 },
      { q:'A developer is building a video streaming app where speed matters more than guaranteed delivery. Which transport protocol should they select?', opts:['TCP — it is faster', 'UDP — lower overhead with no retransmission delay', 'HTTP — handles video natively', 'ICMP — it is connectionless'], ans:1 },
      { q:'A user\'s browser cannot load a website. The analyst uses nslookup and confirms the hostname resolves correctly. Which protocol is used for hostname-to-IP resolution?', opts:['HTTP', 'DHCP', 'DNS', 'ARP'], ans:2 },
      { q:'A security analyst captures traffic and sees a workstation sending requests to port 443. Which protocol and service does port 443 indicate?', opts:['HTTP — unencrypted web traffic', 'FTP — file transfers', 'HTTPS — encrypted web traffic', 'SSH — encrypted remote access'], ans:2 },
      { q:'An organization places its public web server in a network zone separated from the internal corporate network by firewalls. What is this network architecture called?', opts:['VLAN', 'VPN tunnel', 'DMZ — Demilitarized Zone', 'NAT subnet'], ans:2 },
      { q:'Reviewing firewall logs, an analyst finds the firewall allows or denies traffic based only on source IP, destination IP, and port — with no memory of previous connections. What type of firewall is this?', opts:['Stateful firewall', 'Next-generation firewall', 'Application-layer proxy', 'Stateless packet filter'], ans:3 },
      { q:'An analyst opens Wireshark and sees hundreds of TCP SYN packets from one IP to many different ports in under one second. Which activity does this MOST likely indicate?', opts:['SQL injection attack', 'Port scan — network reconnaissance', 'DNS amplification DDoS', 'Man-in-the-middle attack'], ans:1 },
      { q:'A web server listens on port 80 and email is delivered on port 25. Which OSI layer defines these standardized port numbers?', opts:['Layer 3 — Network', 'Layer 2 — Data Link', 'Layer 4 — Transport', 'Layer 7 — Application'], ans:2 },
      { q:'An analyst wants to ensure all remote employee connections to corporate resources are encrypted in transit. Which technology BEST achieves this?', opts:['VLAN tagging', 'Network Address Translation', 'VPN — Virtual Private Network', 'Stateless firewall rules'], ans:2 },
      { q:'An organization uses firewalls, IDS, MFA, and endpoint protection so that if one control fails another catches the threat. What security principle does this describe?', opts:['Least privilege', 'Zero trust', 'Defense in depth', 'Separation of duties'], ans:2 }
    ]
  },
  {
    num: 3, title: 'Threat Landscape', nist: 'Identify / Detect',
    topics: 'Threat Intelligence | Malware Types | MITRE ATT&CK | IOCs',
    hours: '3-4 hours', level: 'Foundational',
    objectives: [
      'Distinguish Strategic, Tactical, Operational, and Technical threat intelligence',
      'Identify and describe at least 9 types of malware and their behaviors',
      'Navigate the MITRE ATT&CK framework and locate techniques for a given tactic',
      'Define Indicator of Compromise (IOC) and list four examples',
      'Complete all 3 SOC Analyst Simulator scenarios'
    ],
    objectiveDetails: [
      {
        explanation: "Threat intelligence comes in four levels, each designed for a different audience. The level determines how specific and actionable the information is, and who in the organization should act on it. Matching intelligence to the right audience is a key analyst skill.",
        keyPoints: ["Strategic: high-level, long-term trends — designed for executives and board members (the C-suite)", "Tactical: Tactics, Techniques, and Procedures (TTPs) — designed for security managers and SOC leads", "Operational: specific campaign details (who, what, when, targeting) — for incident responders and threat hunters", "Technical: specific IOCs like IPs, file hashes, and malicious domains — for SOC analysts and firewalls to block immediately", "Think: Strategic = WHY it matters to the business | Technical = EXACTLY what to block right now"],
        example: "After a breach: Strategic briefing to the CEO says 'Nation-state actors are targeting energy companies.' Tactical briefing to the security team says 'They use spear phishing then Living-off-the-Land techniques.' Operational briefing to IR says 'This campaign used T1566 initial access.' Technical feed to the firewall says 'Block these 47 IPs and these 3 domains now.'",
        quizHint: "Quiz: 'Which type of threat intelligence is designed for C-suite executives and board members?' Answer: Strategic. Match the audience to the level — executives get Strategic, analysts get Technical."
      },
      {
        explanation: "Malware is any software designed to harm, disrupt, or gain unauthorized access to a system. There are 9 major categories, each with different behavior, propagation method, and impact. Knowing the differences lets you identify what you are dealing with and choose the right response.",
        keyPoints: ["Virus: attaches to files; spreads when the infected file is executed by a user", "Worm: self-replicates across networks with NO user action required — spreads autonomously", "Trojan: disguised as legitimate software; user installs it willingly", "Ransomware: encrypts files and demands payment for the decryption key", "Spyware: silently monitors user activity and exfiltrates data without detection", "Rootkit: hides malware presence deep in the operating system — evades standard detection", "Keylogger: records every keystroke to steal passwords and sensitive data", "RAT (Remote Access Trojan): gives the attacker full remote control of the infected machine", "Botnet Agent: enrolls the device in an attacker-controlled network of zombie machines"],
        example: "WannaCry spread to 230,000 machines in 150 countries in 72 hours with zero user interaction — that is Worm behavior. It then encrypted all files on each machine and demanded $300 in Bitcoin — that is Ransomware behavior. Many modern malware samples combine categories to maximize impact.",
        quizHint: "Quiz: 'WannaCry spread to 230,000 machines with NO user interaction. What malware type is this?' Answer: Worm. The key is self-replication with no user action required = Worm definition."
      },
      {
        explanation: "MITRE ATT&CK is a globally recognized knowledge base that documents exactly how real attackers operate — from their first move to exfiltration. Security teams use it to detect attacks, assess their own defenses, and communicate about threats with precision and shared vocabulary.",
        keyPoints: ["Tactics: the WHY — the adversary's goal at each stage (Initial Access, Execution, Persistence, Lateral Movement, Exfiltration...)", "Techniques: the HOW — the specific method used to achieve a tactic (T1566 = Phishing, T1059 = Command Line)", "Sub-techniques: even more specific variations under each technique (T1059.001 = PowerShell)", "T1486 = Data Encrypted for Impact — the ransomware technique under the Impact tactic", "Navigator at attack.mitre.org lets you filter by threat actor, mark your detections, and assess coverage gaps"],
        example: "A SOC analyst sees suspicious PowerShell execution on a workstation. They search MITRE ATT&CK for T1059.001 (Command and Scripting Interpreter: PowerShell), find detection opportunities, and see that APT29 (Russian SVR intelligence) heavily uses this technique — immediately elevating the investigation priority to potential nation-state activity.",
        quizHint: "Quiz: 'In MITRE ATT&CK, Tactics represent the:' Answer: WHY — the adversary's goal. 'T1566 in MITRE ATT&CK represents Phishing. It falls under which Tactic?' Answer: Initial Access."
      },
      {
        explanation: "An Indicator of Compromise (IOC) is a piece of forensic evidence that a system may have been breached or malware may be present. IOCs are the digital fingerprints attackers leave behind — specific, observable artifacts that security tools can search for, alert on, and use to find all infected systems.",
        keyPoints: ["IP addresses: known malicious source IPs used for command-and-control or attacks", "File hashes: MD5 or SHA-256 checksums of known malware files — unique fingerprint for that exact file", "Domain names and URLs: malicious domains used for C2 communications, phishing, or malware delivery", "YARA rules: pattern-matching rules that identify entire malware families by code structure or behavior", "Email artifacts: spoofed sender domains, known malicious attachment names, suspicious headers", "Registry keys: specific Windows registry locations where malware commonly establishes persistence"],
        example: "After a breach, forensics finds C:\\Users\\Admin\\AppData\\Roaming\\svch0st.exe (note the zero, not the letter O). Its SHA-256 hash is submitted to VirusTotal — 47 antivirus engines flag it as Emotet. Now that hash is the IOC: search every endpoint in the organization for files with that exact hash to find every infected machine.",
        quizHint: "Quiz: 'Which of the following is an IOC?' Answer: Suspicious IP address 185.220.x.x in logs. IOCs are specific, observable technical artifacts — not general vulnerabilities or security misconfigurations."
      },
      {
        explanation: "The SOC Analyst Simulator in CyberSec Academy puts you in the seat of a real Security Operations Center analyst. Each scenario gives you an alert and asks you to triage it — identify the attack type, assess the severity, and decide whether to escalate or close. This is what entry-level SOC analysts do every day.",
        keyPoints: ["A SOC analyst's core task: monitor alerts, triage priority, investigate evidence, escalate or close", "True Positive (TP): the alert is real — an actual attack or malware is present. Escalate immediately.", "False Positive (FP): the alert is benign activity that triggered a rule. Document and close.", "False Negative (FN): a real attack that did NOT trigger an alert — the most dangerous gap in any SOC", "Each simulator scenario includes an artifact (IP, hash, or behavior) that maps to a malware type or MITRE technique", "Triage speed matters: analysts handle hundreds of alerts daily — accuracy must be balanced with efficiency"],
        example: "In a real SOC, an analyst receives an alert: 'Outbound connection to 185.220.101.45 from workstation WS-042.' They check the IP in threat intelligence — it is a known Tor exit node used by ransomware C2. This is a True Positive. They isolate WS-042 from the network immediately and escalate to the IR team.",
        quizHint: "The simulator scenarios directly reinforce all malware types from this module. Each scenario includes IOCs that map to Virus, Worm, Trojan, Ransomware, RAT, or Botnet. If you misidentify a scenario, review that malware type before taking the quiz."
      }
    ],
    concepts: [
      ['Virus','Attaches to files; spreads when host file is executed','ILOVEYOU worm (2000)'],
      ['Worm','Self-replicates across networks — no user action needed','WannaCry (2017): 230,000 machines in 150 countries'],
      ['Trojan','Disguised as legitimate software','Emotet banking trojan — most costly malware ever'],
      ['Ransomware','Encrypts files and demands payment','Colonial Pipeline (2021): $4.4M ransom'],
      ['Spyware','Monitors and exfiltrates user activity silently','Pegasus — NSO Group nation-state spyware'],
      ['Rootkit','Hides malware presence deep in the OS','Stuxnet rootkit component (2010)'],
      ['Keylogger','Records keystrokes to steal credentials','Bundled in many RATs'],
      ['RAT','Gives attacker full remote control of machine','DarkComet, AsyncRAT, njRAT'],
      ['Botnet Agent','Joins device to attacker-controlled zombie network','Mirai IoT botnet (2016)'],
      ['IOC','Indicator of Compromise: IP, hash, domain, YARA rule','IP 185.220.x.x | hash 4a5f6b... | domain evil-update.ru']
    ],
    resources: [
      ['MITRE ATT&CK Navigator','attack.mitre.org','Interactive threat framework','Free','https://attack.mitre.org/'],
      ['CISA Cybersecurity Advisories','cisa.gov','Real threat reports','Free','https://www.cisa.gov/news-events/cybersecurity-advisories'],
      ['TryHackMe Threat Intel Rooms','tryhackme.com','Labs','Free','https://tryhackme.com/room/cyberthreatintel'],
      ['VirusTotal','virustotal.com','Malware analysis tool','Free','https://www.virustotal.com/']
    ],
    labs: [
      'Find a recent CISA advisory at cisa.gov — identify the malware type and list every IOC provided',
      'Search MITRE ATT&CK for T1486 (Data Encrypted for Impact) — list 3 detection opportunities',
      'Complete all 3 SOC Analyst Simulator scenarios in CyberSec Academy on your Desktop',
      'Submit a renamed .txt file to VirusTotal — explore the Detection, Details, and Behavior tabs',
      'Match all 9 malware types to their description without using notes — test yourself'
    ],
    quiz: [
      { q:'A manufacturing plant\'s systems are encrypted and a message demands $2M in Bitcoin to restore access. What type of malware is responsible?', opts:['Worm', 'Trojan', 'Ransomware', 'Rootkit'], ans:2 },
      { q:'An employee downloads a free VPN tool. After installation, an attacker gains full remote access to the workstation. What type of malware was delivered?', opts:['Worm', 'Trojan horse', 'Ransomware', 'Logic bomb'], ans:1 },
      { q:'A malware sample spreads automatically across a hospital network by exploiting an unpatched SMB vulnerability — with no user interaction required. What malware category BEST describes this?', opts:['Trojan', 'Ransomware', 'Spyware', 'Worm'], ans:3 },
      { q:'An analyst runs a memory forensics tool and discovers malware has modified kernel-level system calls to hide malicious processes from all monitoring tools. What type of malware is this?', opts:['Keylogger', 'Rootkit', 'Adware', 'Trojan'], ans:1 },
      { q:'Investigators find unauthorized wire transfers after employees used company laptops at a coffee shop. Forensics reveals software was recording every keystroke. What malware type is responsible?', opts:['Worm', 'Rootkit', 'Keylogger', 'Adware'], ans:2 },
      { q:'An analyst observes thousands of compromised home routers sending coordinated HTTP requests that overwhelm a retailer\'s website. What threat infrastructure is being used?', opts:['Advanced Persistent Threat', 'Botnet', 'Rootkit network', 'Fileless malware'], ans:1 },
      { q:'A security team receives an alert: a threat actor is actively exploiting a vulnerability discovered yesterday — before any patch exists. What category of vulnerability is this?', opts:['Logic bomb', 'Unpatched CVE', 'Zero-day vulnerability', 'Fileless exploit'], ans:2 },
      { q:'SOC analysts investigate an alert but find no malicious files on disk. The malware lives entirely in RAM, uses PowerShell, and leverages legitimate system tools. What technique does this describe?', opts:['Rootkit infection', 'Fileless malware — Living-off-the-land', 'Polymorphic virus', 'Drive-by download'], ans:1 },
      { q:'A server\'s CPU spikes to 100% without user activity. Network logs show outbound connections to unknown IPs on port 3333. What malware activity does this MOST likely indicate?', opts:['Ransomware encrypting files', 'Keylogger exfiltrating data', 'Cryptomining malware consuming resources', 'Worm scanning for new hosts'], ans:2 },
      { q:'An analyst sees a malware sample that changes its code signature every time it replicates — evading antivirus signature detection. What malware behavior does this describe?', opts:['Fileless execution', 'Polymorphic behavior', 'Rootkit persistence', 'Botnet command'], ans:1 }
    ]
  },
  {
    num: 6, title: 'Human Factors', nist: 'Protect',
    topics: 'Social Engineering | Password Attacks | Zero Trust | Least Privilege',
    hours: '3-4 hours', level: 'Foundational',
    objectives: [
      'Identify and describe 8 types of social engineering attacks',
      'Explain 5 types of password attacks and what makes each effective',
      'Evaluate password strength using entropy and complexity principles',
      'Explain Zero Trust: Never Trust, Always Verify — and its 3 pillars',
      'Apply the Principle of Least Privilege to a given access control scenario',
      'Complete the Phishing Spotter in CyberSec Academy (aim for 100%)'
    ],
    objectiveDetails: [
      {
        explanation: "Social engineering bypasses technical security by manipulating people rather than systems. It is the most effective attack vector in cybersecurity because no firewall blocks a convincing phone call and no antivirus stops a scared employee from handing over their password.",
        keyPoints: ["Phishing: mass email impersonating a trusted brand (PayPal, IRS, Microsoft, IT department)", "Spear Phishing: targeted phishing using personal details — victim's name, employer, manager, and recent activity", "Whaling: spear phishing targeting C-suite executives (CEO, CFO, General Counsel)", "Vishing: voice or phone-based social engineering — impersonating IT helpdesk or bank fraud department", "Smishing: SMS-based phishing — fake USPS, FedEx, or bank text messages with malicious links", "Tailgating/Piggybacking: physically following an authorized person through a secured door", "Baiting: infected USB drives left in parking lots or enticing download offers online", "Pretexting: creating a fake scenario or identity to establish trust before the actual attack"],
        example: "Security researchers dropped 297 USB drives labeled 'Payroll Q4' in corporate parking lots as part of a study. 98 drives were plugged in, with 45% inserted within the first hour. Of those, 45% had someone click a file inside. One infected USB = potential full network compromise through the most powerful vector: human curiosity.",
        quizHint: "Quiz: 'An attacker calls pretending to be IT support and asks for your password. This is:' Answer: Vishing. 'Someone leaves a USB labeled Payroll 2026 in the parking lot. This is:' Answer: Baiting. Match the attack vector to the category."
      },
      {
        explanation: "Passwords are the most attacked authentication mechanism in cybersecurity. Understanding how attackers crack passwords explains what makes passwords strong and why organizational password policies exist. Each attack type has a different method and a different defense.",
        keyPoints: ["Brute Force: tries EVERY possible character combination — slow but always succeeds eventually; stopped by lockout policies and long passwords", "Dictionary Attack: tries words from a wordlist — rockyou.txt has 14 million common passwords; fast against simple passwords", "Credential Stuffing: takes leaked username/password pairs from one breach and tries them on OTHER sites", "Password Spraying: one very common password tried against thousands of accounts — evades lockout policies by staying under the threshold", "Rainbow Table: uses precomputed hash-to-plaintext lookup tables — defeated entirely by salted hashes (bcrypt, Argon2)"],
        example: "The 2021 Colonial Pipeline breach started with a compromised VPN password found in a leaked database from a completely different breach — classic Credential Stuffing. The employee had reused the same password on multiple sites. One breach at site A enabled a catastrophic breach at site B months later.",
        quizHint: "Quiz: 'A password attack that tries EVERY possible character combination is:' Answer: Brute Force. 'Credential Stuffing uses:' Answer: Leaked username and password pairs from one breach tried on other sites."
      },
      {
        explanation: "Password entropy measures the unpredictability of a password — higher entropy means more possible combinations an attacker must try. Length matters far more than complexity substitutions. A 20-character passphrase of random words is stronger than a 10-character string full of symbols.",
        keyPoints: ["Entropy = log2(character_pool ^ length) — more characters and more length = exponentially harder to crack", "Adding uppercase doubles the pool (26→52); adding digits (→62); adding symbols (→95)", "8-character lowercase only = 37.6 bits of entropy — crackable in hours on modern hardware", "12-character mixed case with numbers and symbols = 78.8 bits — would take years", "Passphrases: 4 or more random words (correct-horse-battery-staple) — high entropy AND memorable", "Password managers: let you use a unique 20+ character random password for every site"],
        example: "Have I Been Pwned (haveibeenpwned.com) contains 600 million+ compromised passwords from real breaches. If your password is in that database, attackers have it in their wordlists regardless of how complex it looks. Check your email address on the site to see how many breaches you appear in.",
        quizHint: "Quiz: 'Rainbow Table attacks are defeated by:' Answer: Salted hashes (bcrypt, Argon2). Salts add unique random data to each password before hashing, making precomputed rainbow tables completely useless."
      },
      {
        explanation: "Zero Trust is a security model built on the principle: Never Trust, Always Verify. Traditional security assumed everything inside the network perimeter was safe. Zero Trust eliminates that assumption entirely and requires verification for EVERY access request, from anyone, anywhere, every time.",
        keyPoints: ["Never Trust, Always Verify: no user, device, or network connection is trusted by default — even internal employees", "Verify Explicitly: use all available signals to authenticate — user identity, device health, location, behavior, time of access", "Least Privilege Access: give minimum permissions needed for the specific task, time-limited when possible", "Assume Breach: design and operate security as if attackers are already inside — segment, monitor, minimize blast radius", "MFA for everything: including VPN, internal applications, admin consoles — not just the front door login"],
        example: "SolarWinds 2020: attackers entered the network via a trusted software update (supply chain compromise). Traditional model assumed trusted software = safe. Under Zero Trust, even the SolarWinds Orion software would need to be verified on every connection, with its access limited only to what it specifically requires — containing the blast radius dramatically.",
        quizHint: "Quiz: 'The Zero Trust principle Assume Breach means:' Answer: Design security as if attackers are already inside — segment, monitor, minimize blast radius. 'Which Zero Trust pillar requires MFA for every login?' Answer: Verify Explicitly."
      },
      {
        explanation: "The Principle of Least Privilege means every user, system, and application should have ONLY the minimum level of access required to perform their specific job function — and absolutely nothing more. It is one of the most effective security controls because it limits what an attacker can do with any compromised account.",
        keyPoints: ["Access should be tied to job function, not seniority, tenure, or convenience", "Just-in-time access: grant temporary elevated access only when needed, revoke immediately after", "Regularly review and revoke access — especially when employees change roles or leave the organization", "Service accounts used by applications should have the absolute minimum privileges of any identity", "Separation of duties: no single person should be able to both authorize AND execute a sensitive transaction"],
        example: "The 2013 Target breach: attackers used credentials stolen from Fazio Mechanical, an HVAC vendor. Why did a heating and air conditioning vendor have network access that reached Target's payment card systems? Least Privilege violation. Proper network segmentation combined with least privilege would have contained the breach to HVAC monitoring systems only.",
        quizHint: "Quiz: 'The Principle of Least Privilege means:' Answer: Users get the minimum access needed to do their specific job. Nothing more — convenience is not a security justification."
      },
      {
        explanation: "The Phishing Spotter trains you to identify real versus fake emails using the same visual indicators that security awareness training programs teach employees. Phishing recognition is a core analyst skill — both for personal protection and for advising users and conducting awareness training.",
        keyPoints: ["Check the FROM address: the display name can be anything — the actual email domain is what matters and can be spoofed", "Hover over links BEFORE clicking: does the actual destination URL match the claimed sender's domain?", "Urgency and fear triggers: 'Your account will be suspended in 24 hours!' — pressure to act before thinking", "Requests for credentials or payment via email: legitimate organizations never ask for this over email", "Attachment warnings: unexpected .zip, .exe, .docm, and .html attachments are high risk regardless of sender", "Subtle domain tricks: paypa1.com (number 1 not letter l), amazon-secure.com, microsoft-support.net"],
        example: "Email claims to be from PayPal Security. The FROM address is paypal-secure-alert@paypa1.com (note: the l is actually a 1). Hovering over the link shows paypa1.com/secure-login — not paypal.com. A trained eye catches this in two seconds. This is exactly the pattern the Phishing Spotter trains you to recognize.",
        quizHint: "If you scored less than 100% on the Phishing Spotter, go back and review the emails you missed before taking the quiz. Every quiz question about social engineering types is reinforced by the spotter scenarios."
      }
    ],
    concepts: [
      ['Phishing','Mass email impersonating legitimate entity','Fake PayPal email targeting thousands'],
      ['Spear Phishing','Targeted phishing using personal details','Email using victim\'s name, employer, and manager'],
      ['Whaling','Phishing targeting C-suite executives','Fake legal notice sent to CEO for emergency wire transfer'],
      ['Vishing','Voice/phone-based social engineering','Caller impersonates IT helpdesk to reset password'],
      ['Smishing','SMS-based phishing','Fake USPS text: Your package is held — click to pay $0.99'],
      ['Tailgating','Following authorized person through secured door','Attacker carries boxes so employees hold the door'],
      ['Baiting','Infected USB or enticing digital offer','USB labeled Payroll 2026 left in parking lot'],
      ['Zero Trust','Never trust, always verify — even internal users','Verify Explicitly + Least Privilege + Assume Breach'],
      ['Least Privilege','Give ONLY the minimum access needed to do the job','Prevents misuse, limits blast radius if account is compromised'],
      ['Password Spraying','One common password tried against thousands of accounts','Block common passwords; monitor distributed login failures']
    ],
    resources: [
      ['TryHackMe Phishing Rooms','tryhackme.com','Phishing analysis labs','Free','https://tryhackme.com/room/phishingemails1tryoe'],
      ['Have I Been Pwned','haveibeenpwned.com','Breach lookup tool','Free','https://haveibeenpwned.com/'],
      ['Google Phishing Quiz','phishingquiz.withgoogle.com','Test phishing recognition','Free','https://phishingquiz.withgoogle.com/'],
      ['KnowBe4 Free Resources','knowbe4.com','Security awareness materials','Free','https://www.knowbe4.com/resources/']
    ],
    labs: [
      'Check your work email domain at haveibeenpwned.com — document any breaches and what data was exposed',
      'Complete all 3 phishing emails in CyberSec Academy Phishing Spotter — aim for 100% before moving on',
      'Test 5 different password strategies in CyberSec Academy Password Checker — document what improved each score',
      'Describe how Zero Trust would have prevented the SolarWinds 2020 attack — which pillar applies and why',
      'Apply Least Privilege to a scenario: An HR employee needs to view payroll records. List exactly what access they should and should NOT have'
    ],
    quiz: [
      { q:'An employee receives an email from "IT-HelpDesk@company-support.net" asking them to verify their VPN credentials before 5PM or their account will be locked. What attack is this?', opts:['Vishing', 'Spear phishing', 'Phishing', 'Pretexting'], ans:2 },
      { q:'An attacker researches a specific CFO on LinkedIn, learns her assistant\'s name and a current project, then sends a targeted email impersonating the assistant to request a fund transfer. What type of attack is this?', opts:['Phishing', 'Spear phishing', 'Whaling', 'Smishing'], ans:1 },
      { q:'An employee receives a phone call from someone claiming to be Microsoft Technical Support, saying their computer is sending virus alerts and they need remote access to fix it. What attack technique is this?', opts:['Phishing', 'Pretexting', 'Vishing — voice phishing', 'Tailgating'], ans:2 },
      { q:'An attacker calls the help desk claiming to be a new employee who forgot their password on their first day, providing a fake employee ID. What social engineering technique is being used?', opts:['Tailgating', 'Pretexting', 'Smishing', 'Whaling'], ans:1 },
      { q:'An attacker waits near a secured data center door. When an authorized employee badges in, the attacker walks in behind them without using their own badge. What attack is this?', opts:['Shoulder surfing', 'Piggybacking — Tailgating', 'Vishing', 'Watering hole'], ans:1 },
      { q:'A CEO receives a highly targeted email impersonating the company\'s external legal counsel, requesting an urgent $250,000 wire transfer for a confidential acquisition. What attack specifically targets executives?', opts:['Spear phishing', 'Whaling', 'Vishing', 'Business Email Compromise'], ans:1 },
      { q:'An employee receives a text message appearing to come from their bank, asking them to confirm their account number by replying or clicking a short link. What attack type is this?', opts:['Phishing', 'Vishing', 'Smishing', 'Pretexting'], ans:2 },
      { q:'An attacker creates a fake "free airport Wi-Fi" hotspot. When users connect, the attacker captures all unencrypted traffic including login credentials. What attack is this?', opts:['Tailgating', 'Pretexting', 'Evil twin — Rogue access point attack', 'Spear phishing'], ans:2 },
      { q:'After a phishing simulation, 23% of employees clicked the malicious link. Which control is MOST effective as the first line of defense against social engineering attacks?', opts:['Deploy endpoint detection software', 'Implement multi-factor authentication', 'Conduct regular security awareness training', 'Block all external email attachments'], ans:2 },
      { q:'An attacker sends an email to accounts payable impersonating the CEO, requesting an urgent wire transfer to a new vendor account. What attack category does this represent?', opts:['Spear phishing', 'Whaling', 'Business Email Compromise', 'Vishing'], ans:2 }
    ]
  },
  {
    num: 4, title: 'Core Classes', nist: 'Protect / Detect',
    topics: 'Linux CLI | Kali Environment | 7 Tool Categories',
    hours: '4-5 hours', level: 'Intermediate',
    objectives: [
      'Install Kali Linux as a virtual machine using VirtualBox (free)',
      'Navigate the Linux filesystem using 15 essential commands correctly',
      'Identify the 7 major Kali tool categories and name at least 3 tools from each',
      'Complete at least 5 levels of the OverTheWire Bandit wargame',
      'Understand CFAA legal requirements for security tool usage'
    ],
    objectiveDetails: [
      {
        explanation: "Kali Linux is a Debian-based operating system pre-loaded with hundreds of security testing tools. Running it inside a virtual machine (VM) lets you use Kali safely inside your existing computer without replacing your main OS. VirtualBox is the free software that creates and runs VMs.",
        keyPoints: ["Download VirtualBox free at virtualbox.org — install with default settings on Windows or Mac", "Download the Kali Linux ISO from kali.org — choose the 64-bit Installer version", "Create a new VM in VirtualBox: allocate at least 2 CPU cores, 4GB RAM, and 80GB disk space", "Boot the VM from the Kali ISO and follow the graphical installer — default settings work for most lab setups", "Take a snapshot immediately after fresh install — this lets you restore Kali to clean state after any lab"],
        example: "Think of VirtualBox as a computer-inside-your-computer. Your Windows or Mac is the host. Kali Linux runs in a separate window as a guest. Files, settings, and any damage stay completely isolated — you can break Kali during a lab exercise and restore from snapshot in 30 seconds.",
        quizHint: "The quiz focuses on what Kali is used for (security testing), not the install process. Know the 7 tool categories and which tools belong to each — that is what is tested directly."
      },
      {
        explanation: "The Linux command line (CLI) is the foundation of everything in cybersecurity. Every Kali tool runs from the terminal. Mastering these 15 commands gives you the ability to navigate any Linux system, find files, read configurations, manage users, and understand what is running.",
        keyPoints: ["Navigation: pwd (where am I), cd (move to directory), ls -la (list all files with permissions)", "File reading: cat (full file), head -N (first N lines), tail -N (last N lines)", "File search: find / -name pattern (live search), locate filename (fast indexed search)", "Text search: grep 'pattern' file (search inside file content)", "Permissions: chmod (change permissions), chown (change ownership)", "Process management: ps aux (list all processes), top (live monitor), kill PID (terminate)", "Network: ifconfig (show IP addresses), netstat -tulpn (show open ports), history (recent commands)"],
        example: "Security analysts use the same 15 commands on every engagement: first pwd and whoami to orient, then ls -la and find / -name '*.conf' to understand the system, then netstat -tulpn and ps aux to see what is running. This workflow becomes second nature with practice.",
        quizHint: "Quiz: 'Which Linux command lists ALL files including hidden ones with permissions?' Answer: ls -la. 'Which command shows currently listening ports?' Answer: netstat -tulpn. These exact questions appear on the Week 1 quiz."
      },
      {
        explanation: "Kali Linux organizes its 300+ security tools into 7 categories by function. Knowing which category a tool belongs to is essential because each category corresponds to a phase of a security engagement. Tools from different categories work together in sequence.",
        keyPoints: ["Information Gathering: Nmap, theHarvester, Maltego, Recon-ng — passive and active reconnaissance", "Vulnerability Analysis: Nikto, OpenVAS, Lynis — scanning for known weaknesses in services and configurations", "Password Attacks: Hydra (online brute force), John the Ripper (offline cracking), Hashcat (GPU cracking)", "Exploitation Tools: Metasploit Framework, BeEF — executing and managing exploits against vulnerabilities", "Web Application Analysis: Burp Suite, SQLmap, OWASP ZAP — testing web application security", "Wireless Attacks: Aircrack-ng, Kismet, Reaver — Wi-Fi security testing", "Forensics: Volatility (memory analysis), Autopsy (disk forensics) — digital evidence investigation"],
        example: "A penetration test uses categories in sequence: Information Gathering first (Nmap scan), then Vulnerability Analysis (OpenVAS scan), then Exploitation Tools (Metasploit to exploit a finding), then Password Attacks (Hydra to test weak credentials), finally Forensics tools to document the evidence trail.",
        quizHint: "Quiz: 'Which Kali tool category does Hydra belong to?' Answer: Password Attacks. 'Which category does Nmap belong to?' Answer: Information Gathering. 'Burp Suite?' Answer: Web Application Analysis. 'Volatility and Autopsy?' Answer: Forensics."
      },
      {
        explanation: "OverTheWire Bandit is a free online wargame where you SSH into a server and use Linux commands to solve progressively harder puzzles. Each level hides a password somewhere on the server — find it and you unlock the next level. It is the best possible hands-on practice for terminal skills.",
        keyPoints: ["Connect with SSH: ssh bandit0@bandit.labs.overthewire.org -p 2220 using password bandit0 for Level 0", "Each level hides a password using Linux concepts — file permissions, encodings, special filenames, processes", "Level 0: password is in a file called readme. Level 1: filename is a dash (-). Level 2: filename has spaces.", "Levels 3-10 cover hidden files, setUID permissions, hex encoding, base64, compression, and binary analysis", "Critical learning rule: struggle through each level yourself before looking for hints — the struggle IS the learning"],
        example: "Bandit Level 4 has 10 files in a directory — only one contains human-readable ASCII text. The solution: use 'file inhere/*' to check the file type of each one, then 'cat' the file marked as ASCII text. This exact technique — identifying file types before reading them — is used in forensic investigations.",
        quizHint: "Bandit itself is not directly tested, but every command you practice there (find, cat, grep, file, permissions) IS tested on the quiz. Complete all 5 required levels before the quiz."
      },
      {
        explanation: "The Computer Fraud and Abuse Act (CFAA) is the primary U.S. federal law governing computer security. It makes unauthorized access to computer systems a federal crime. The difference between a security professional and a criminal is a signed authorization document — that is the only legal protection.",
        keyPoints: ["CFAA is 18 U.S.C. § 1030 — federal law first enacted in 1986, significantly expanded in 1996 and 2008", "Unauthorized access, scanning, or exploitation of ANY computer system = federal felony", "Written authorization (signed Rules of Engagement or Statement of Work) is mandatory BEFORE any testing", "Educational purpose is NOT a legal exemption — 'I was just practicing' is not a valid defense in federal court", "Penalties: up to 10 years federal prison for first offense, up to 20 years for repeat offenses, plus fines"],
        example: "In 2011, Aaron Swartz was charged under CFAA for bulk-downloading academic papers from MIT's network using a connection he was technically authorized to use — but for a purpose MIT did not authorize. The law is interpreted extremely broadly. When in doubt, get written permission from the system owner before running any tool.",
        quizHint: "Quiz: 'Under the CFAA, using Kali Linux tools on a network you do NOT own or have written permission to test is:' Answer: A federal felony. This CFAA question appears on every week's quiz — always A federal felony."
      }
    ],
    concepts: [
      ['ls -la','List all files including hidden, with permissions','ls -la /etc'],
      ['grep','Search for text patterns in files','grep "root" /etc/passwd'],
      ['find','Search filesystem by name or type','find / -name "*.conf" 2>/dev/null'],
      ['chmod','Change file permissions','chmod 755 script.sh'],
      ['netstat -tulpn','Show listening ports and connections','sudo netstat -tulpn'],
      ['Information Gathering','Reconnaissance tools','Nmap, theHarvester, Maltego, Recon-ng'],
      ['Vulnerability Analysis','Identify weaknesses in services','Nikto, OpenVAS, Lynis'],
      ['Password Attacks','Crack/brute-force/spray credentials','Hydra, John the Ripper, Hashcat'],
      ['Exploitation Tools','Execute attacks on vulnerabilities','Metasploit Framework, BeEF'],
      ['CFAA Legal Requirement','Only scan systems you OWN or have WRITTEN permission to test','Unauthorized use is a federal felony']
    ],
    resources: [
      ['TryHackMe Linux Fundamentals 1-3','tryhackme.com','Interactive Linux labs','Free','https://tryhackme.com/module/linux-fundamentals'],
      ['OverTheWire Bandit','overthewire.org','Terminal wargame — great practice','Free','https://overthewire.org/wargames/bandit/'],
      ['Kali Linux Download','kali.org','OS download + docs','Free','https://www.kali.org/get-kali/'],
      ['VirtualBox','virtualbox.org','Free hypervisor for VMs','Free','https://www.virtualbox.org/wiki/Downloads'],
      ['IppSec — YouTube','youtube.com','Full HTB machine walkthroughs — watch a real pentest from recon to root','Free','https://www.youtube.com/@ippsec']
    ],
    labs: [
      'Install VirtualBox and create a Kali Linux VM — document each step with a screenshot',
      'Complete all 15 essential commands from the table in the Kali terminal — record the output of each',
      'Open the Kali Applications menu and document 3 tools from each of the 7 categories with a one-line description',
      'Complete at least 5 levels of the OverTheWire Bandit wargame — document each solution',
      'Complete TryHackMe Linux Fundamentals Parts 1, 2, and 3'
    ],
    quiz: [
      { q:'A new associate is asked to check which directory they are currently working in on a Linux system. Which command should they run?', opts:['ls', 'pwd', 'cd', 'whoami'], ans:1 },
      { q:'A security analyst needs to view ALL files in a directory, including hidden files, along with their permissions. Which command is correct?', opts:['ls', 'ls -l', 'ls -la', 'dir -all'], ans:2 },
      { q:'An analyst suspects credentials have been written to a file called auth.log. Which command searches for the word "password" inside that file?', opts:['find "password" auth.log', 'locate password auth.log', 'grep "password" auth.log', 'cat auth.log | search password'], ans:2 },
      { q:'A system administrator sets a script to chmod 755. Which of the following BEST describes those permissions?', opts:['Owner reads only; others have no access', 'Owner has full access; group and others can read and execute', 'Everyone has full read write and execute', 'Owner can write; others can read only'], ans:1 },
      { q:'A security analyst needs to identify all running processes and their resource usage on a Linux server. Which of the following commands would BEST accomplish this?', opts:['ps aux', 'top', 'Both ps aux and top are correct', 'netstat -tulpn'], ans:2 },
      { q:'An analyst identifies a suspicious process with PID 4419 consuming 100% CPU. Which command should they run to terminate it?', opts:['stop 4419', 'kill 4419', 'end 4419', 'terminate 4419'], ans:1 },
      { q:'A junior analyst needs to identify the IP address assigned to a Linux server\'s network interface. Which command provides this information?', opts:['netstat -tulpn', 'ifconfig', 'ipconfig', 'arp -a'], ans:1 },
      { q:'A security engineer runs netstat -tulpn on a Linux server. What information does this command provide?', opts:['All running user processes', 'All logged-in users', 'All listening ports and their associated services', 'Disk usage and storage statistics'], ans:2 },
      { q:'A team lead asks an associate to write a Bash script. What MUST appear on the very first line of every valid Bash script?', opts:['# bash script', '#!/bin/bash', '@bash', '//bash'], ans:1 },
      { q:'An associate runs Nmap against a neighbor\'s home router without permission to practice for class. Which of the following BEST describes this action?', opts:['A minor civil violation if no damage occurs', 'Legal for educational purposes', 'A federal crime under the Computer Fraud and Abuse Act', 'Only illegal if the neighbor files a complaint'], ans:2 }
    ]
  },
  {
    num: 7, title: 'Defensive Security & Tools', nist: 'Protect / Detect',
    topics: 'Firewalls | IDS & IPS | SIEM | Endpoint Security | Patch Management',
    hours: '3-4 hours', level: 'Foundational',
    objectives: [
      'Explain how firewalls work and distinguish stateless, stateful, and next-generation firewalls',
      'Identify the difference between an IDS and an IPS and describe where each is deployed',
      'Describe how a SIEM aggregates logs and generates alerts from multiple data sources',
      'Explain the role of endpoint security tools (antivirus, EDR) in a defense-in-depth strategy',
      'Apply a patch management process and explain why unpatched systems are the #1 attack vector'
    ],
    objectiveDetails: [
      {
        explanation: "A firewall is a security device that monitors and controls incoming and outgoing network traffic based on defined rules. It sits between trusted networks (your internal LAN) and untrusted networks (the internet). Three generations exist: stateless packet filters, stateful firewalls, and next-generation firewalls (NGFW).",
        keyPoints: ["Stateless (Packet Filter): checks each packet in isolation using source IP, destination IP, and port number — fast but has no session context", "Stateful: tracks active connections and blocks packets that do not belong to an established session — most common enterprise type", "NGFW: deep packet inspection, application awareness, user identity, SSL inspection, and integrated IPS — strongest protection", "Default-deny policy: block all traffic, then explicitly allow only what is required", "Inbound rules: control traffic coming into your network from outside", "Outbound rules: control traffic leaving your network — critical for catching malware phoning home to C2 servers", "DMZ: a zone between two firewalls where public-facing servers (web, email) are placed to isolate them from the internal LAN"],
        example: "Hospital firewall design: DENY all inbound by default. ALLOW inbound TCP 443 (HTTPS) to the patient portal web server only. ALLOW inbound TCP 22 (SSH) only from the admin jump host IP. Medical devices on a separate VLAN have zero internet access — perfect least-privilege network design.",
        quizHint: "Quiz: 'Which firewall type tracks active connection state?' Answer: Stateful firewall. 'A DMZ is used to:' Answer: Host public-facing servers while isolating the internal LAN from direct internet exposure."
      },
      {
        explanation: "IDS (Intrusion Detection System) and IPS (Intrusion Prevention System) both inspect traffic for attack signatures and anomalies. The critical difference: an IDS detects and alerts — it does NOT block. An IPS detects AND actively blocks malicious traffic in real time. Both complement firewalls in a layered defense.",
        keyPoints: ["IDS: passive — copies traffic, inspects it, generates alerts, but traffic flows through unaffected", "IPS: inline — all traffic passes through the IPS, which can drop malicious packets before they reach their destination", "Signature-based: compares traffic against a database of known attack patterns — fast and reliable for known threats", "Anomaly-based (behavioral): learns normal baseline traffic and alerts on deviations — catches unknown threats but higher false positives", "HIDS: Host-based IDS — runs on individual endpoints, monitors system calls and file changes", "NIDS: Network-based IDS — monitors all traffic flowing across a network segment", "Snort and Suricata are the most popular open-source IDS/IPS tools used in enterprise environments"],
        example: "An IDS watches traffic and sees a SYN flood beginning — it fires an alert for the security team. The IPS in the same position automatically drops those SYN packets before they reach the server. IDS = smoke alarm that rings but does not call 911. IPS = automatic fire suppression that activates on detection.",
        quizHint: "Quiz: 'An IPS differs from an IDS because an IPS:' Answer: Actively blocks malicious traffic in real time — an IDS only detects and alerts. 'Which detection type learns normal behavior and alerts on deviations?' Answer: Anomaly-based (behavioral)."
      },
      {
        explanation: "A SIEM (Security Information and Event Management) collects logs from every device in the organization — firewalls, servers, endpoints, cloud services, Active Directory — and correlates them to detect attacks that no single device would catch alone. It is the central hub of any Security Operations Center.",
        keyPoints: ["Log aggregation: collects event logs from firewalls, servers, endpoints, AD, cloud apps — centralizes all data", "Normalization: translates logs from different formats (Windows Event Log, syslog, CEF) into a common searchable structure", "Correlation rules: 'if 5 failed logins to the same account within 60 seconds — alert Tier 1' — automated detection logic", "Alerting: generates tickets and pages the SOC team when correlation rules fire", "Dashboards: real-time visibility into network health, top threat sources, and active incidents", "Log retention: stores 30-90+ days of logs for forensic investigation after a breach", "Popular SIEMs: Splunk (market leader), Microsoft Sentinel (cloud-native), Elastic SIEM (open source)"],
        example: "Without a SIEM: the firewall logs a failed login from 45.33.32.156. Active Directory logs the same account failing 200 times in 10 minutes. An endpoint logs a new process launch under that user. Three separate teams never connect these dots. With a SIEM: one correlation rule sees all three events together and fires a HIGH alert — password spray + successful auth + malware launch detected as one incident.",
        quizHint: "Quiz: 'What does a SIEM primarily do?' Answer: Aggregates logs from multiple sources and correlates them to detect attacks that individual devices would miss. 'Splunk and Microsoft Sentinel are examples of:' Answer: SIEM platforms."
      },
      {
        explanation: "Endpoint security protects individual devices from malware and attacks. Traditional antivirus (AV) matches files against known malware signatures. Modern EDR (Endpoint Detection and Response) watches real-time behavior — even for zero-day threats — and can automatically isolate a compromised machine from the network without waiting for a human decision.",
        keyPoints: ["Antivirus (AV): signature-based — matches files against a database of known malware hashes", "AV limitation: zero-day malware has no signature yet — AV cannot detect what it has never seen", "EDR: records all endpoint behavior (process creation, network connections, file writes, registry changes) and detects anomalies", "EDR can automatically isolate a compromised host from the network — critical for stopping ransomware spread", "Application whitelisting: only approved software is allowed to run — everything else is blocked by default", "Full Disk Encryption (FDE): encrypts the entire drive — a stolen laptop cannot expose data", "Popular EDR tools: CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint"],
        example: "A zero-day ransomware bypasses AV signature detection — no match in the database. CrowdStrike EDR watches behavior: a process starts encrypting hundreds of files per second. EDR recognizes the behavioral pattern, kills the process, and isolates the endpoint from the network automatically in under 3 seconds. AV alone would have let the ransomware run.",
        quizHint: "Quiz: 'Traditional antivirus cannot detect zero-day malware because:' Answer: Zero-day malware has no signature in the database yet. 'EDR differs from AV by:' Answer: Monitoring real-time behavior instead of matching known file signatures."
      },
      {
        explanation: "Patch management is the process of regularly updating software to fix known vulnerabilities before attackers can exploit them. Unpatched vulnerabilities are consistently the #1 cause of successful breaches. A formal process ensures nothing is missed — especially critical-severity patches, which should be applied within 24-48 hours.",
        keyPoints: ["Patches fix known vulnerabilities — without them, attackers use publicly available exploits against your systems", "CVSS scoring sets patch priority: Critical (9-10) = 24-48 hours; High (7-8.9) = 7 days; Medium = 30 days", "Zero-day: a vulnerability actively exploited before a patch exists — the most dangerous scenario", "Patch testing: apply patches to a staging environment first to confirm they do not break applications", "Asset inventory: know every version of every software running on every system — you cannot patch what you do not track", "Equifax 2017: a critical Apache Struts patch had been available for 2 months; Equifax had not applied it — 147 million records exposed"],
        example: "EternalBlue (MS17-010) was patched by Microsoft in March 2017. WannaCry exploited it in May 2017 — two months after the patch was available. Organizations that applied the patch were completely protected. Those that delayed lost machines globally. Patch management is the simplest defense with the highest return on investment.",
        quizHint: "Quiz: 'A zero-day vulnerability is actively exploited:' Answer: Before a patch exists. 'The Equifax 2017 breach happened because:' Answer: A critical patch had been available for 2 months and was not applied."
      }
    ],
    concepts: [
      ['Stateful Firewall','Tracks active connections; blocks packets outside established sessions','Most common enterprise firewall type'],
      ['NGFW','Deep packet inspection + application awareness + integrated IPS','Best protection; standard in modern enterprise deployments'],
      ['DMZ','Zone between two firewalls for public-facing servers','Isolates web and email servers from the internal LAN'],
      ['IDS','Detects and alerts — does NOT block traffic','Passive; good for monitoring without disrupting legitimate traffic'],
      ['IPS','Detects AND blocks malicious traffic inline','Active; stops attacks in real time; requires tuning to avoid false blocks'],
      ['SIEM','Aggregates all logs; correlates events to detect attacks','Splunk, Microsoft Sentinel, Elastic SIEM'],
      ['Antivirus (AV)','Signature-based scanning — detects known malware','Cannot detect zero-day threats with no existing signature'],
      ['EDR','Real-time behavioral monitoring; auto-isolates compromised endpoints','CrowdStrike, SentinelOne, Microsoft Defender for Endpoint'],
      ['Patch Management','Regular process to apply security updates before exploitation','Critical patches: 24-48 hours; High severity: 7 days'],
      ['Zero-Day','Actively exploited before a patch exists','Most dangerous category — behavioral detection is the primary defense']
    ],
    resources: [
      ['TryHackMe SOC Level 1 Path','tryhackme.com','Guided defensive security and SIEM labs','Free','https://tryhackme.com/path/outline/soclevel1'],
      ['Snort IDS (Open Source)','snort.org','World\'s most deployed open-source IDS/IPS','Free','https://www.snort.org/'],
      ['Microsoft Sentinel Docs','microsoft.com','Cloud-native SIEM documentation and tutorials','Free','https://learn.microsoft.com/en-us/azure/sentinel/'],
      ['NVD Patch Tracking','nvd.nist.gov','National Vulnerability Database — CVE lookup and CVSS scores','Free','https://nvd.nist.gov/']
    ],
    labs: [
      'Look up EternalBlue (CVE-2017-0144) at nvd.nist.gov — record the CVSS score, affected systems, and write one paragraph explaining how applying the patch two months earlier would have prevented WannaCry',
      'Write a SIEM correlation rule in plain English that would detect a credential stuffing attack: define the trigger conditions, what events must occur together, and what action the SIEM should take',
      'Create a comparison table: IDS vs IPS — list 3 situations where IDS is the better choice and 3 where IPS is better, with reasoning for each',
      'Check 3 pieces of software on any computer you have access to — look up each version at nvd.nist.gov, document any CVEs found and their CVSS severity ratings',
      'Complete TryHackMe Intro to SIEM room — document how logs from two different devices were correlated to detect a simulated attack'
    ],
    quiz: [
      { q:'An analyst reviews firewall logs and notices the firewall tracks the STATE of each TCP connection and blocks packets that do not belong to an established session. What type of firewall is this?', opts:['Stateless packet filter', 'Next-generation firewall', 'Stateful inspection firewall', 'Application proxy firewall'], ans:2 },
      { q:'A security team wants to detect malicious traffic AND block it automatically — not just alert. Which technology meets this requirement?', opts:['IDS — Intrusion Detection System', 'IPS — Intrusion Prevention System', 'SIEM', 'Firewall'], ans:1 },
      { q:'A SOC team needs to aggregate logs from 200 servers, firewalls, and endpoints, correlate events, and trigger alerts when attack patterns are detected. Which technology is designed for this purpose?', opts:['EDR', 'IPS', 'SIEM — Security Information and Event Management', 'NAC'], ans:2 },
      { q:'An analyst needs to detect and respond to malware on endpoints that evades traditional antivirus. The tool must provide behavioral analysis and containment capability. Which technology is BEST suited?', opts:['IDS', 'SIEM', 'Firewall', 'EDR — Endpoint Detection and Response'], ans:3 },
      { q:'A vulnerability scanner reports a Critical (CVSS 9.8) remote code execution vulnerability on the company\'s public web server. According to CVSS patch priority guidelines, when should this be patched?', opts:['Within 30 days per standard policy', 'Within 7 days', 'Within 24 to 48 hours', 'At the next quarterly maintenance window'], ans:2 },
      { q:'A company places its web servers in a network zone accessible from the internet but separated from internal HR and finance systems by firewalls. What is this network architecture called?', opts:['VLAN segmentation', 'Zero trust network', 'DMZ — Demilitarized Zone', 'Air-gapped network'], ans:2 },
      { q:'An IDS detects a known SQL injection payload in HTTP traffic and fires an alert, but the query still reaches and exfiltrates the database. What security gap does this illustrate?', opts:['The IDS signature database was outdated', 'IDS detects but does NOT block — an IPS was needed', 'The firewall failed to inspect application-layer traffic', 'The database lacked proper authentication'], ans:1 },
      { q:'The Equifax 2017 breach was caused by an unpatched Apache Struts vulnerability with a public exploit available for 78 days before the breach. Which control would MOST directly have prevented it?', opts:['Deploying a SIEM', 'Implementing EDR on endpoints', 'Timely patch management — applying the Apache patch within 24-48 hours', 'Adding IDS sensors to the network'], ans:2 },
      { q:'A network engineer creates separate VLANs for HR, Finance, and Engineering so a breach in one department cannot spread laterally. What security principle does this implement?', opts:['Defense in depth', 'Network segmentation', 'Zero trust', 'Least privilege'], ans:1 },
      { q:'A security team deploys a server on the internal network that has no legitimate business purpose. Any connection attempt to it is automatically flagged as suspicious activity. What is this device called?', opts:['DMZ server', 'Proxy server', 'Honeypot', 'Bastion host'], ans:2 }
    ]
  },
  {
    num: 8, title: 'Incident Response Basics', nist: 'Detect / Respond / Recover',
    topics: 'IR Lifecycle | Triage | Containment | Eradication | Recovery | Documentation',
    hours: '3-4 hours', level: 'Foundational',
    objectives: [
      'List and describe the 6 phases of the NIST Incident Response lifecycle in order',
      'Classify a security incident by severity using a P1-P4 triage framework',
      'Describe containment strategies for three common incident types: malware, phishing, and data breach',
      'Explain the difference between Incident Response, Disaster Recovery, and Business Continuity',
      'Write a basic incident report documenting who, what, when, where, and how of a simulated attack'
    ],
    objectiveDetails: [
      {
        explanation: "The NIST Incident Response lifecycle (NIST SP 800-61) provides a structured, repeatable process for handling security incidents. Without a defined lifecycle, teams improvise under pressure — leading to missed steps, destroyed evidence, and prolonged downtime. Six phases cover everything from preparation before an incident to learning after one.",
        keyPoints: ["Phase 1 Preparation: build the IR team, write playbooks, train staff, test the plan — done BEFORE incidents happen", "Phase 2 Detection and Analysis: identify that an incident occurred, collect evidence, determine scope and severity", "Phase 3 Containment: stop the spread — short-term (isolate the host) then long-term (apply temporary fixes while full remediation is prepared)", "Phase 4 Eradication: remove the root cause — delete malware, patch the exploited vulnerability, revoke compromised credentials", "Phase 5 Recovery: restore systems to normal operations, monitor closely for recurrence, verify the fix worked", "Phase 6 Post-Incident Activity (Lessons Learned): document everything, update playbooks, brief leadership, prevent recurrence"],
        example: "Colonial Pipeline 2021 mapped to NIST IR: Detection = DarkSide ransomware note found on systems. Containment = pipeline operations shut down to prevent OT spread. Eradication = paid $4.4M ransom, obtained decryptor, cleaned systems. Recovery = pipeline restored after 6 days. Lessons Learned = VPN without MFA was the entry point — MFA mandated for all remote access immediately after.",
        quizHint: "Quiz: 'What is the correct order of the NIST IR phases?' Answer: Preparation — Detection and Analysis — Containment — Eradication — Recovery — Post-Incident Activity. Know all 6 in order."
      },
      {
        explanation: "Not all security alerts are incidents, and not all incidents are equal priority. Triage rapidly assesses an alert to determine severity, whether it is a true or false positive, and what immediate action is required. Accurate triage ensures the most critical incidents get the fastest response.",
        keyPoints: ["P1 Critical: immediate threat to core business operations — active ransomware, confirmed breach, production system compromise", "P2 High: significant threat likely to cause major impact soon — active malware spread, credential theft in progress", "P3 Medium: suspicious activity not yet confirmed as malicious — unusual login times, repeated failed auth from one IP", "P4 Low: policy violations, minor misconfigurations, informational alerts — no immediate business impact", "True Positive (TP): the alert represents a real security event — investigate, escalate, and respond", "False Positive (FP): legitimate activity that triggered a detection rule — document, close the ticket, tune the rule to reduce future noise", "Every minute of triage delay on a P1 increases blast radius — speed and accuracy both matter"],
        example: "Three simultaneous alerts: (1) Ransomware note on the CFO laptop — P1 Critical, isolate immediately. (2) 50 failed SSH logins from Russia on a dev server — P3 Medium, monitor and document. (3) Intern password expired — P4 Low, IT ticket. Correct triage gets the CFO laptop isolated in minutes, preventing spread to shared drives.",
        quizHint: "Quiz: 'Active ransomware encrypting files on multiple production systems is classified as:' Answer: P1 Critical — immediate response required. 'A True Positive alert means:' Answer: The alert represents a real security event."
      },
      {
        explanation: "Containment stops the spread of an incident before additional damage occurs. It has two stages: short-term containment (immediate isolation of affected systems) and long-term containment (temporary fixes that allow business to continue while full remediation is prepared). Containment always comes BEFORE eradication.",
        keyPoints: ["Network isolation: disconnect the compromised host — stops lateral movement to other systems and file shares immediately", "Account disabling: disable or reset compromised user and service accounts right away", "Evidence preservation: capture memory dump and disk image BEFORE making changes — never wipe before imaging", "Short-term containment (hours): isolate the host, block C2 IPs/domains at the firewall, disable compromised accounts", "Long-term containment (days): deploy temporary patches, increase logging, add firewall rules while the full fix is prepared", "Ransomware: isolation is critical — ransomware spreads to network shares and backup systems if the infected host stays connected", "Phishing containment: disable the compromised account, reset all credentials, block the sender domain at email gateway"],
        example: "Correct ransomware containment in a SOC: (1) Click Isolate Host in EDR — machine loses all network access in seconds. (2) Disable the user Active Directory account. (3) Block the known C2 IP and domain at the firewall. (4) Search EDR for any other host that communicated with the same C2. (5) Escalate to Tier-2. All done within 15 minutes of the initial alert.",
        quizHint: "Quiz: 'During ransomware containment, the most critical first action is:' Answer: Network isolation — disconnect the host to stop spread to file shares and backups. 'Evidence must be preserved BEFORE which phase?' Answer: Eradication."
      },
      {
        explanation: "IR, DR, and BCP are three related plans that together ensure an organization survives any major disruption. A significant security incident triggers all three simultaneously. Every security professional must understand how they interact under pressure.",
        keyPoints: ["Incident Response (IR): immediate technical security response — identify, contain, eradicate, and recover from the event", "Disaster Recovery (DR): restoring IT systems and data after major disruption — measured by RTO and RPO metrics", "Business Continuity Plan (BCP): keeping critical business functions running during and after disruption — broader than IT", "RTO (Recovery Time Objective): maximum acceptable time a system can be offline before unacceptable business impact", "RPO (Recovery Point Objective): maximum acceptable data loss — how old can our most recent backup be?", "Backups are the primary defense against ransomware: offline backups ransomware cannot reach = full recovery without paying ransom", "3-2-1 backup rule: 3 copies of data, on 2 different media types, with 1 copy offsite or completely offline"],
        example: "Hospital ransomware: IR team contains and eradicates the malware. DR team restores patient data from offline backups to clean servers. BCP has clinical staff switch to paper records to continue treating patients. All three plans execute simultaneously. The hospital with all three written in advance recovered in 48 hours. The one without paid $1.3M ransom and was offline for 2 weeks.",
        quizHint: "Quiz: 'RTO stands for:' Answer: Recovery Time Objective — the maximum acceptable system downtime. 'The 3-2-1 backup rule means:' Answer: 3 copies, 2 different media types, 1 offsite or offline."
      },
      {
        explanation: "An incident report is the official legal and operational documentation of what happened, when, how it was discovered, what actions were taken, and what the business impact was. It is used for management briefings, insurance claims, regulatory notifications, and improving future response. Writing clearly and accurately under pressure is a core analyst skill.",
        keyPoints: ["Incident ID: unique tracking number — include it in every email, ticket, and communication related to this incident", "Timestamps: exact UTC times for every event — UTC eliminates timezone confusion when correlating logs from global systems", "Detection Method: how was the incident found? SIEM alert, user report, EDR trigger, external notification", "Affected Systems: every hostname, IP address, and user account involved in the incident", "Timeline: chronological sequence of confirmed events with evidence citations", "Root Cause: the specific vulnerability, misconfiguration, or human action that enabled the incident", "Actions Taken: exact steps taken, who took them, and timestamps — containment time, credentials reset, patches applied"],
        example: "Incident report excerpt: At 03:47 UTC SIEM rule BRUTE-001 fired on user jsmith — 847 failed logins in 60 minutes from IP 193.32.127.5. At 03:52 UTC Tier-1 analyst confirmed True Positive and disabled the account. At 04:01 UTC the IP was blocked at the firewall. Root cause: jsmith reused a password exposed in the 2021 LinkedIn breach. Recommendation: enforce password manager and MFA company-wide.",
        quizHint: "Quiz: 'Incident report timestamps should use UTC because:' Answer: UTC eliminates timezone confusion when correlating logs from multiple systems and regions."
      }
    ],
    concepts: [
      ['Preparation (IR Phase 1)','Build IR team, write playbooks, train staff — BEFORE incidents','The most commonly skipped phase and the most important one'],
      ['Detection and Analysis (Phase 2)','Identify incident, collect evidence, determine scope','SIEM alerts, EDR triggers, user reports, threat intel feeds'],
      ['Containment (Phase 3)','Stop the spread — isolate hosts, block C2, disable accounts','Network isolation is the #1 first action for ransomware'],
      ['Eradication (Phase 4)','Remove the root cause — delete malware, patch vuln, revoke credentials','Preserve forensic evidence BEFORE wiping any system'],
      ['Recovery (Phase 5)','Restore to normal operations; monitor closely for recurrence','Verify the fix works before returning systems to production'],
      ['Lessons Learned (Phase 6)','Document everything; brief leadership; update playbooks','Most organizations skip this — those that do it improve fastest'],
      ['RTO','Recovery Time Objective — max acceptable downtime','Business defines this; IT infrastructure must be designed to meet it'],
      ['RPO','Recovery Point Objective — max acceptable data loss (backup age)','Hourly backups = 1hr RPO; daily backups = up to 24hr data loss'],
      ['3-2-1 Backup Rule','3 copies, 2 media types, 1 offsite or offline','The offline copy is the only reliable ransomware defense'],
      ['P1 Critical','Active ransomware, confirmed breach, production system compromised','Immediate response required — every minute of delay increases blast radius']
    ],
    resources: [
      ['NIST SP 800-61 Rev 2','nist.gov','Authoritative IR lifecycle reference — free PDF','Free','https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf'],
      ['TryHackMe SOC Level 1','tryhackme.com','Incident detection and response hands-on labs','Free','https://tryhackme.com/path/outline/soclevel1'],
      ['CISA Incident Response Resources','cisa.gov','Federal IR playbooks, free templates, and guidance','Free','https://www.cisa.gov/topics/cybersecurity-best-practices/organizations-and-cyber-safety/incident-response'],
      ['Cisco Talos Blog','talosintelligence.com','Real incident write-ups and current threat intelligence','Free','https://blog.talosintelligence.com/']
    ],
    labs: [
      'Map the Colonial Pipeline 2021 attack to all 6 NIST IR phases — write 2 sentences per phase describing exactly what the IR team did at that stage',
      'Triage these 5 alerts from P1-P4 and explain your reasoning: (a) Ransomware note on CFO laptop (b) 50 failed SSH logins from Russia on dev server (c) Intern password expired (d) Unknown USB inserted on payment terminal (e) AV scan completed with no threats found',
      'Write a 1-page incident report for this scenario: July 30 2026 at 09:15 UTC, SIEM detects 500 failed logins to admin@mccoe.org then a successful login from IP 45.33.32.156 in Romania. Credential stuffing attack confirmed.',
      'Explain how the 3-2-1 backup rule would help a ransomware victim recover — write exactly how recovery works if the offline backup is 3 days old (define both RTO and RPO in your answer)',
      'Create a one-page IR Playbook for a phishing attack: list every step from Detection through Lessons Learned using the 6 NIST phases as your structure'
    ],
    quiz: [
      { q:'A SOC analyst receives an alert: ransomware behavior detected on workstation WS-147. Files are actively being encrypted. What should the analyst do FIRST?', opts:['Notify the employee\'s manager', 'Run a full antivirus scan on WS-147', 'Immediately isolate WS-147 from the network', 'Preserve a forensic image before taking any action'], ans:2 },
      { q:'A company\'s IR team has contained a malware outbreak and is now removing all malicious files, persistence mechanisms, and backdoors from affected systems. Which NIST IR phase are they in?', opts:['Containment', 'Recovery', 'Eradication', 'Lessons Learned'], ans:2 },
      { q:'A forensic investigator copies malware artifacts from a compromised server and carefully documents every person who handled the evidence with timestamps. What practice does this represent?', opts:['Incident categorization', 'Chain of custody', 'Evidence preservation logging', 'Threat hunting'], ans:1 },
      { q:'After detecting a compromised server, the IR team takes it offline immediately to prevent the attacker from moving laterally. Which NIST IR phase does this action occur in?', opts:['Detection and Analysis', 'Eradication', 'Containment', 'Recovery'], ans:2 },
      { q:'An analyst receives an alert: a database server is exfiltrating 50GB of data and a ransom note has appeared on the CEO\'s workstation. Using P1-P4 triage, what priority level is this?', opts:['P4 — Low', 'P3 — Medium', 'P2 — High', 'P1 — Critical'], ans:3 },
      { q:'A hospital\'s SLA states patient record systems must be restored within 4 hours of an outage. What IR metric does this 4-hour window define?', opts:['RPO — Recovery Point Objective', 'MTTD — Mean Time to Detect', 'RTO — Recovery Time Objective', 'SLO — Service Level Objective'], ans:2 },
      { q:'An organization follows the 3-2-1 backup rule. Which of the following CORRECTLY represents this rule?', opts:['3 daily backups, 2 weekly, 1 monthly', '3 copies of data on 2 different media types with 1 copy offsite or offline', '3 backup admins, 2 backup windows, 1 verification test', '3 backup servers, 2 cloud regions, 1 tape archive'], ans:1 },
      { q:'After fully removing all malware and backdoors, the IR team rebuilds affected servers from known-good images and restores data from verified clean backups. Which NIST IR phase is this?', opts:['Containment', 'Eradication', 'Recovery', 'Post-Incident Activity'], ans:2 },
      { q:'Two weeks after a ransomware incident is resolved, the CISO convenes the IR team to document what happened, what worked, what failed, and what to change. Which NIST IR phase is this?', opts:['Detection and Analysis', 'Containment', 'Eradication', 'Post-Incident Activity — Lessons Learned'], ans:3 },
      { q:'A forensic analyst discovers the attacker first accessed the network 47 days before ransomware deployed. The analyst reconstructs the full timeline using SIEM logs. This investigation maps to which NIST IR phase?', opts:['Preparation', 'Detection and Analysis', 'Containment', 'Post-Incident Activity'], ans:1 }
    ]
  },
  {
    "num": 9,
    "title": "Capstone — Assessment",
    "nist": "All CSF 2.0 Functions",
    "topics": "Security architecture and zero trust | The weighted NIST CSF 2.0 questionnaire | Fieldwork evidence: documents, interviews, and scans | Scoring: weighted compliance, CMM maturity, and hygiene",
    "hours": "8-10 hours",
    "level": "Capstone",
    "overview": "This week you begin the capstone: working like a real MCCoE security assessor. Your client is Northgate Supply Co., a small fictional company whose file server was broken into in April 2026. First you learn modern security architecture and zero trust. Then you do fieldwork with MCCoE's real method: a weighted questionnaire of 41 questions based on the NIST Cybersecurity Framework (CSF) 2.0. You gather evidence from three places (documents, interviews, and network scans), score every question on five levels, and record the evidence behind each score. Next week you turn this work into a report and a live briefing for the client.",
    "capability": "Runs client fieldwork and evidences every claim",
    "objectives": [
      "Explain the idea of zero trust and why 'never trust, always verify' matters.",
      "Name the six functions of NIST CSF 2.0 and explain how the 41-question weighted questionnaire covers them.",
      "Gather evidence from three sources: policy and artifact review, interviews, and network and vulnerability scans.",
      "Score each question as Fully, Almost, Mostly, Somewhat, or Not Compliant, and record the evidence IDs behind it.",
      "Calculate weighted compliance by function and overall, then convert it to a CMM maturity level and a hygiene rating.",
      "Record contradictions between what people say and what the evidence shows, and let the evidence decide the score."
    ],
    "lessons": [
      {
        "title": "Security Architecture and Zero Trust",
        "body": [
          "Security architecture is the overall design of how systems, networks, and data are arranged and protected. A good architecture uses layers, so that if one control fails, another still protects the data. This idea is called defense in depth. Just as a bank has locked doors, cameras, and a vault, a network combines firewalls, access controls, monitoring, and encryption.",
          "For many years, organizations trusted anyone already inside their network, like a castle with a strong wall but no locks inside. Attackers learned to get past the wall once and then move freely. Zero trust replaces this with a simple rule: never trust, always verify. Every user and device must prove who they are for each sensitive request, whether they are inside or outside the network.",
          "Zero trust relies on strong identity checks, least privilege (giving each person only the access they truly need), and constant verification. It does not remove the need for other controls; it changes the default from 'trusted unless proven bad' to 'not trusted until verified.' Understanding this modern model helps you judge whether an organization's design matches today's best practice. At Northgate, for example, one old firewall setting let an attacker reach a server from the internet with only a stolen password. Zero trust thinking would ask: why was one password enough?"
        ],
        "keyTerms": [
          {
            "term": "Security architecture",
            "definition": "The overall design of how systems, networks, and data are arranged and protected."
          },
          {
            "term": "Defense in depth",
            "definition": "Using multiple layers of security so that if one control fails, others still protect the data."
          },
          {
            "term": "Zero trust",
            "definition": "A security model based on 'never trust, always verify,' where every access request is checked regardless of location."
          },
          {
            "term": "Least privilege",
            "definition": "Giving each user or system only the minimum access needed to do their job."
          }
        ]
      },
      {
        "title": "NIST CSF 2.0 and the Weighted Questionnaire",
        "body": [
          "The NIST Cybersecurity Framework, often shortened to CSF, is a widely used guide that organizes security work into clear functions. It is not a law; it is a flexible framework any organization can use to understand and improve its security. Because it uses plain categories, it is an excellent tool for assessing an organization and explaining results to non-technical leaders.",
          "CSF 2.0 has six functions. Govern is about strategy, roles, policies, and risk decisions. Identify is about knowing your assets, data, and risks. Protect is about safeguards that prevent harm, such as access control and training. Detect is about noticing that something bad is happening, such as through monitoring and alerts. Respond is about taking action during an incident to limit damage. Recover is about restoring normal operations afterward.",
          "MCCoE turns the CSF into a questionnaire. The student version has 41 questions, and you answer them in the questionnaire workbook. Each question asks about one practice, for example: 'Is multi-factor authentication (MFA) required for all remote access?' Each question belongs to one CSF function and category, so results can be grouped by function. Each question also has a weight: a number from 3 (lower importance) to 10 (very important). A question about MFA on remote access might have a weight of 10, while a question about a less critical document might have a weight of 3. A higher weight means the answer counts more in the final score. Do not change the weights.",
          "You answer every question on one of five levels. Fully (100%) means the practice is done completely and there is evidence. Almost (75%) means it is done, with small gaps. Mostly (50%) means it is partly done. Somewhat (25%) means it has only started or is informal (not written down or not done the same way each time). Not Compliant (0%) means it is not done, or there is no evidence. 'They said so' alone is not proof: no evidence means no credit. The level is a judgment, but it must always rest on evidence."
        ],
        "keyTerms": [
          {
            "term": "NIST Cybersecurity Framework (CSF) 2.0",
            "definition": "A widely used, flexible guide that organizes cybersecurity work into six functions: Govern, Identify, Protect, Detect, Respond, and Recover."
          },
          {
            "term": "Function",
            "definition": "One of the six top-level areas of the CSF, such as Protect or Detect."
          },
          {
            "term": "Weighted questionnaire",
            "definition": "A list of assessment questions where each question has a weight, so more important practices count more in the score."
          },
          {
            "term": "Weight",
            "definition": "A number on a question, from 3 (lower importance) to 10 (very important). A question with weight 6 counts twice as much as one with weight 3."
          },
          {
            "term": "Compliance level",
            "definition": "One of five scores for a question: Fully (100%), Almost (75%), Mostly (50%), Somewhat (25%), or Not Compliant (0%)."
          }
        ]
      },
      {
        "title": "Gathering Evidence: Documents, Interviews, and Scans",
        "body": [
          "Real assessments do not rely on guessing. Every answer in the questionnaire must be backed by evidence, and MCCoE gathers evidence from three places: policy and artifact review, interviews, and network and vulnerability scans. Each piece of evidence has an evidence ID, a short label such as EV-04 (a document), INT-05 (an interview record), or SCAN-03 (a scan result). Every answer in your workbook records the evidence IDs that support it, so any reader can follow a score back to its proof.",
          "Policy and artifact review means reading the documents and records the client gives you: policies, plans, reports, lists, and configuration exports. Check more than whether a document exists. Is it approved and dated? Is it current? Does it match what really happens? A policy that says 'all staff use MFA' is only a promise; an MFA enrollment report shows what is actually true.",
          "An interview is a planned conversation with a staff member to learn how security works day to day. Prepare open questions, such as 'How does a new employee get access to the file server?' Open questions invite full answers, not just yes or no. Record who you spoke with, when, and what they said, without changing their meaning. Be respectful and do not blame; people share more when they do not feel judged. After each answer, ask: 'Can you show me that?' Time with busy staff is short, so plan your questions and ask the most important ones first. Very broad questions ('How is security going?') and yes/no questions ('You have backups, right?') waste time and give answers you cannot trust.",
          "Scans show what is really on the network. The MCCoE team runs them with the client's written permission; students never scan a client themselves. Nmap is a network scanner that finds which computers are online and which ports and services are open. Nessus is a vulnerability scanner that checks systems for known weaknesses and rates each one by severity using CVSS, a score from 0 to 10 (9.0 and above is Critical). A scan can prove, for example, that a port the policy says is closed is still open to the internet.",
          "Sometimes what a person says and what the evidence shows do not match. This is a contradiction. When it happens, the evidence wins: you score the question on the evidence, not on what was said. Then you write the contradiction in the workbook's notes: what was said, what the evidence shows, and the evidence IDs. This is not about catching anyone lying; people often describe how things should work, not how they do. Checking a claim against a second, independent source is called corroboration."
        ],
        "keyTerms": [
          {
            "term": "Evidence",
            "definition": "Proof that supports an answer, such as a policy, report, configuration export, interview record, or scan result."
          },
          {
            "term": "Evidence ID",
            "definition": "A short label that points to the exact evidence behind an answer: for example EV-04 (a document), INT-05 (an interview record), or SCAN-03 (a scan result)."
          },
          {
            "term": "Open question",
            "definition": "A question that invites a full explanation rather than a simple yes-or-no answer."
          },
          {
            "term": "Nmap",
            "definition": "A network scanner that finds which hosts are online and which ports and services are open."
          },
          {
            "term": "Nessus",
            "definition": "A vulnerability scanner that checks systems for known weaknesses and rates their severity."
          },
          {
            "term": "CVSS",
            "definition": "Common Vulnerability Scoring System: a 0-10 score for how severe a vulnerability is. 9.0-10.0 is Critical, 7.0-8.9 High, 4.0-6.9 Medium, 0.1-3.9 Low."
          },
          {
            "term": "Contradiction",
            "definition": "A case where what a person says does not match what the documents or scans show. The evidence wins, and the difference is written down."
          }
        ]
      },
      {
        "title": "Scoring: Weighted Compliance, CMM, and Hygiene",
        "body": [
          "You score the questionnaire one question at a time instead of making one vague judgment about the whole organization. For each question you record three things: the level (Fully, Almost, Mostly, Somewhat, or Not Compliant), the evidence IDs, and one or two sentences explaining why. The level without evidence is only an opinion; the evidence makes it a finding.",
          "Next comes weighted compliance. The formula is: sum of (weight x level) divided by sum of weights. Here is an example with three Protect questions. Question 1 has weight 10 and scores Fully (100%). Question 2 has weight 6 and scores Mostly (50%). Question 3 has weight 4 and scores Not Compliant (0%). Weight x level gives 1000 + 300 + 0 = 1300. The weights add up to 10 + 6 + 4 = 20. So 1300 / 20 = 65%. This is done for each of the six functions, and again for all 41 questions together to get the overall score. Do not just average the six function scores, because each function has a different total weight.",
          "Then compliance becomes maturity using the Capability Maturity Model (CMM). CMM has five levels: 1 Initial (ad hoc, depends on one person), 2 Repeatable (some habits repeat, but little is written down), 3 Defined (standard, documented processes), 4 Managed (processes are measured and monitored), and 5 Optimized (processes are always being improved). The conversion is CMM = 1 + 4 x compliance, using compliance as a decimal. In the example, 1 + 4 x 0.65 = 3.6, which sits between Defined and Managed. 0% gives CMM 1.0, 50% gives 3.0, and 100% gives 5.0.",
          "Finally, compliance gives a hygiene rating: a simple label for leaders. Basic means below 35%. Intermediate means 35% to 69%. Good means 70% and up. The example score of 65% is Intermediate.",
          "The Dashboard sheet in the questionnaire workbook does these calculations for you. You still need to understand them, because you must check them and explain them to the client. Unanswered questions count as 0%, so answer all 41.",
          "Every question scored below Fully shows a gap. Gaps on high-weight questions matter most, because they pull the score down the most and usually cover the most important practices. Questions with no evidence are gaps too. Your gaps, with their evidence IDs, are the raw material for next week's risk register and POA&M."
        ],
        "keyTerms": [
          {
            "term": "Weighted compliance",
            "definition": "A score equal to sum(weight x level) divided by sum(weight), calculated for each CSF function and overall."
          },
          {
            "term": "Capability Maturity Model (CMM)",
            "definition": "A five-level maturity scale: 1 Initial, 2 Repeatable, 3 Defined, 4 Managed, 5 Optimized. Here, CMM = 1 + 4 x compliance."
          },
          {
            "term": "Hygiene rating",
            "definition": "A simple label from the compliance score: Basic (below 35%), Intermediate (35-69%), or Good (70% and up)."
          },
          {
            "term": "Gap",
            "definition": "A practice that is missing, weak, or not proven, shown by any question scored below Fully."
          },
          {
            "term": "Assessment",
            "definition": "A structured review of an organization's security practices against a chosen standard, supported by evidence."
          }
        ]
      }
    ],
    "concepts": [
      [
        "Security architecture",
        "The overall design of how systems, networks, and data are arranged and protected.",
        ""
      ],
      [
        "Defense in depth",
        "Using multiple layers of security so that if one control fails, others still protect the data.",
        ""
      ],
      [
        "Zero trust",
        "A security model based on 'never trust, always verify,' where every access request is checked regardless of location.",
        ""
      ],
      [
        "Least privilege",
        "Giving each user or system only the minimum access needed to do their job.",
        ""
      ],
      [
        "NIST Cybersecurity Framework (CSF) 2.0",
        "A widely used, flexible guide that organizes cybersecurity work into six functions: Govern, Identify, Protect, Detect, Respond, and Recover.",
        ""
      ],
      [
        "Weighted questionnaire",
        "A list of assessment questions where each question has a weight (3 to 10), so more important practices count more in the score. The student version has 41 questions.",
        ""
      ],
      [
        "Compliance level",
        "One of five scores for a question: Fully (100%), Almost (75%), Mostly (50%), Somewhat (25%), or Not Compliant (0%).",
        ""
      ],
      [
        "Weighted compliance",
        "A score equal to sum(weight x level) divided by sum(weight), calculated for each CSF function and overall.",
        ""
      ],
      [
        "Capability Maturity Model (CMM)",
        "A five-level maturity scale: 1 Initial, 2 Repeatable, 3 Defined, 4 Managed, 5 Optimized. Here, CMM = 1 + 4 x compliance.",
        ""
      ],
      [
        "Hygiene rating",
        "A simple label from the compliance score: Basic (below 35%), Intermediate (35-69%), or Good (70% and up).",
        ""
      ],
      [
        "Evidence",
        "Proof that supports an answer, such as a policy, report, configuration export, interview record, or scan result.",
        ""
      ],
      [
        "Evidence ID",
        "A short label that points to the exact evidence behind an answer: for example EV-04 (a document), INT-05 (an interview record), or SCAN-03 (a scan result).",
        ""
      ],
      [
        "Contradiction",
        "A case where what a person says does not match what the documents or scans show. The evidence wins, and the difference is written down.",
        ""
      ],
      [
        "Nmap",
        "A network scanner that finds which hosts are online and which ports and services are open.",
        ""
      ],
      [
        "Nessus",
        "A vulnerability scanner that checks systems for known weaknesses and rates their severity.",
        ""
      ],
      [
        "CVSS",
        "Common Vulnerability Scoring System: a 0-10 score for how severe a vulnerability is. 9.0-10.0 is Critical, 7.0-8.9 High, 4.0-6.9 Medium, 0.1-3.9 Low.",
        ""
      ],
      [
        "Gap",
        "A practice that is missing, weak, or not proven, shown by any question scored below Fully.",
        ""
      ]
    ],
    "resources": [
      [
        "The NIST Cybersecurity Framework (CSF) 2.0 (NIST CSWP 29)",
        "NIST",
        "Read Section 2 (pages 3-5) for the six Functions, then Appendix A Table 1 (page 15) for the Category list. About 12 minutes. Supports the CSF lesson.",
        "Free",
        "https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf"
      ],
      [
        "Zero Trust Architecture (NIST SP 800-207)",
        "NIST",
        "Read Section 2, pages 4-8 (the basic definition and the 7 tenets of zero trust). Skip Section 3+. About 10 minutes. Supports the zero trust lesson.",
        "Free",
        "https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf"
      ],
      [
        "Zero Trust Maturity Model, Version 2.0",
        "CISA",
        "Read Section 5, pages 6-12, including Figure 4 (the four maturity stages: Traditional, Initial, Advanced, Optimal). About 10 minutes.",
        "Free",
        "https://www.cisa.gov/sites/default/files/2023-04/zero_trust_maturity_model_v2_508.pdf"
      ],
      [
        "Zero Trust - CompTIA Security+ SY0-701 - 1.2",
        "Professor Messer",
        "Read the full written page (short transcript-style notes) on zero trust concepts. About 5 minutes. Reinforces Lesson 1.",
        "Free",
        "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-trust-sy0-701/"
      ],
      [
        "Cybersecurity Architecture: Five Principles to Follow (and One to Avoid)",
        "IBM Technology (YouTube)",
        "Explains defense in depth, least privilege, and other design basics. Supports Lesson 1 on security architecture.",
        "Free",
        "https://www.youtube.com/watch?v=jq_LZ1RFPfU"
      ],
      [
        "Zero Trust - CompTIA Security+ SY0-701 - 1.2",
        "Professor Messer (YouTube)",
        "Explains zero trust and 'never trust, always verify' with clear terms. Supports Lesson 1.",
        "Free",
        "https://www.youtube.com/watch?v=zC_Pndpg8-c"
      ],
      [
        "The NIST Cybersecurity Framework (CSF) 2.0",
        "National Institute of Standards and Technology (YouTube)",
        "A short official overview of CSF 2.0 and its six functions, including Govern. Supports Lesson 2.",
        "Free",
        "https://www.youtube.com/watch?v=pPPiaGU12Og"
      ],
      [
        "Security Controls - CompTIA Security+ SY0-701 - 1.1",
        "Professor Messer (YouTube)",
        "Explains the types of security controls you will check one by one. Supports Lesson 4 and the control review in the lab.",
        "Free",
        "https://www.youtube.com/watch?v=STM3EUvL7wg"
      ],
      [
        "Gap Analysis - CompTIA Security+ SY0-701 - 1.2",
        "Professor Messer (YouTube)",
        "Shows how to compare where an organization is today with a framework like NIST and list the gaps. Supports Lessons 3 and 4.",
        "Free",
        "https://www.youtube.com/watch?v=cuTVyyS5C7M"
      ]
    ],
    "labs": [
      "Read the Northgate Supply Co. client brief: the engagement letter, the company, its people and systems, the April 2026 incident, and the rules for fieldwork.",
      "Plan your interviews. Write at least five open questions for the Northgate staff you will interview (start with James Chen, the IT Manager). Cover different CSF functions (Govern, Identify, Protect, Detect, Respond, Recover). Write your questions in the box.",
      "Open the interview simulator and interview all five Northgate staff: Linda Harper (CEO, INT-01), James Chen (IT Manager, INT-02), Alicia Brown (HR, INT-03), Helen Ortiz (Finance, INT-04), and Tunde Okafor (Warehouse, INT-05). Each person's time is limited, so choose good questions: open questions, follow-ups, and requests for proof. Write down what each person says and every evidence ID they give you. Print or save each transcript for your notes.",
      "Review the policies and artifacts in the Northgate evidence library (EV-01 to EV-11). For each item, note what it proves, its date, and whether it is approved and current.",
      "Review the Nmap and Nessus scan results from the MCCoE team (SCAN-01 to SCAN-03). Note the open ports, the vulnerabilities, and their CVSS severity. In the box, write two or three sentences about something the scans showed that the documents or interviews did not.",
      "Score all 41 questions in materials/week9/northgate-questionnaire.xlsx. For each one, pick a Response (Fully, Almost, Mostly, Somewhat, or Not Compliant), enter the evidence IDs, and write one or two sentences explaining why. Then read the Dashboard sheet: compliance, CMM level, and hygiene rating for each function and overall. Check one function by hand.",
      "Record every contradiction in the workbook's notes column: what the person said, what the evidence shows, and the evidence IDs. Make sure each of those questions is scored on the evidence, not on what was said.",
      "Note your gaps: every question scored below Fully, including any question with no evidence. Mark the high-weight gaps. In Week 10 you will turn them into risks and POA&M items."
    ],
    "deliverable": {
      "title": "NIST CSF Fieldwork Package: Scored Questionnaire Workbook",
      "description": "Begin your capstone by producing the fieldwork of a real MCCoE assessment of Northgate Supply Co.: interview notes and the scored 41-question NIST CSF 2.0 workbook (materials/week9/northgate-questionnaire.xlsx). Every score must point to its evidence IDs, and the workbook's Dashboard must show weighted compliance, CMM maturity, and hygiene ratings by function and overall.",
      "requirements": [
        "Interview notes recording who you spoke with, when, your open questions, their answers, and the evidence IDs you received.",
        "All 41 questions in northgate-questionnaire.xlsx scored as Fully, Almost, Mostly, Somewhat, or Not Compliant, each with its evidence IDs and a one- or two-sentence reason.",
        "A completed Dashboard showing weighted compliance (sum of weight x level divided by sum of weights) for each of the six CSF functions and overall.",
        "A CMM maturity level (CMM = 1 + 4 x compliance) and a hygiene rating (Basic, Intermediate, or Good) for each function and overall, with one function checked by hand.",
        "Every contradiction recorded in the notes column: what was said, what the evidence shows, and the evidence IDs, with the question scored on the evidence.",
        "A gap list covering every question scored below Fully, with high-weight gaps marked and no-evidence questions included."
      ],
      "format": "A fieldwork package: interview notes (document or PDF) and the completed questionnaire workbook, materials/week9/northgate-questionnaire.xlsx, with its Dashboard, notes, and a gap list."
    },
    "quiz": [
      {
        "q": "What is the core rule of zero trust?",
        "opts": [
          "Trust every user inside the network",
          "Verify users once a year",
          "Trust any device the company owns",
          "Never trust, always verify"
        ],
        "ans": 3,
        "exp": "Zero trust means no user or device is trusted automatically, and every access request is checked. Being inside the network or using a company device does not earn automatic trust."
      },
      {
        "q": "A company uses a firewall, access controls, monitoring, and encryption, so if one control fails, another still protects the data. What is this idea called?",
        "opts": [
          "Zero trust",
          "Defense in depth",
          "Least privilege",
          "Corroboration"
        ],
        "ans": 1,
        "exp": "Defense in depth means using many layers of security. Least privilege is about limiting access, and zero trust is about verifying every request."
      },
      {
        "q": "An employee is already connected to the office network. Under zero trust, what happens when she asks to open a sensitive file?",
        "opts": [
          "She gets access if she has used it before",
          "She is blocked until a manager logs in",
          "She must still prove who she is",
          "She is inside, so she gets in"
        ],
        "ans": 2,
        "exp": "Zero trust checks every sensitive request, whether the user is inside or outside the network. Being on the office network does not give automatic trust."
      },
      {
        "q": "A new payroll clerk is given access to payroll records only, not to sales or IT systems. Which principle is this?",
        "opts": [
          "Least privilege",
          "Open access",
          "Security architecture",
          "Defense in depth"
        ],
        "ans": 0,
        "exp": "Least privilege gives each person only the access they truly need for their job. Defense in depth is about many layers of controls, not about limiting one person's access."
      },
      {
        "q": "The lesson compares older networks to a castle with a strong wall but no locks inside. What was the main weakness of this design?",
        "opts": [
          "Attackers inside the wall could move freely",
          "The wall was too expensive to keep in good repair",
          "Every request was checked",
          "Staff could not reach the internet at all from inside"
        ],
        "ans": 0,
        "exp": "Older designs trusted anyone already inside the network. Once attackers got past the wall, they could move around freely. Checking every request is what zero trust does to fix this."
      },
      {
        "q": "Which list correctly names the six functions of NIST CSF 2.0?",
        "opts": [
          "Identify, Protect, Detect, Respond, Recover, Report",
          "Govern, Identify, Protect, Detect, Respond, Recover",
          "Plan, Identify, Protect, Monitor, Respond, Recover",
          "Govern, Identify, Prevent, Detect, Respond, Restore"
        ],
        "ans": 1,
        "exp": "CSF 2.0 has six functions: Govern, Identify, Protect, Detect, Respond, and Recover. Words like Report, Prevent, Monitor, and Restore are not CSF function names."
      },
      {
        "q": "Leaders write a cybersecurity policy and assign who is responsible for cyber risk. Which CSF function is this?",
        "opts": [
          "Respond",
          "Protect",
          "Govern",
          "Identify"
        ],
        "ans": 2,
        "exp": "Govern covers cybersecurity strategy, roles, policies, and risk decisions. Identify is about knowing assets and risks, not setting rules and roles."
      },
      {
        "q": "In the MCCoE questionnaire, what does a question's weight show?",
        "opts": [
          "How many staff members answered it",
          "How long it takes to check",
          "Which CSF function the question is in",
          "How much the question counts"
        ],
        "ans": 3,
        "exp": "The weight shows how important a practice is, from 3 (lower) to 10 (very important). A question with weight 6 counts twice as much as a question with weight 3 when compliance is calculated."
      },
      {
        "q": "Which list shows the five compliance levels in order, from highest to lowest?",
        "opts": [
          "Fully, Mostly, Almost, Somewhat, Not Compliant",
          "Fully, Almost, Mostly, Somewhat, Not Compliant",
          "Almost, Fully, Mostly, Somewhat, Not Compliant",
          "Fully, Almost, Somewhat, Mostly, Not Compliant"
        ],
        "ans": 1,
        "exp": "The levels are Fully (100%), Almost (75%), Mostly (50%), Somewhat (25%), and Not Compliant (0%). Remembering the percentages helps you keep the order right."
      },
      {
        "q": "A question is scored Mostly. What value does it add to the calculation?",
        "opts": [
          "50%",
          "75%",
          "25%",
          "60%"
        ],
        "ans": 0,
        "exp": "Mostly is worth 50%. Almost is 75% and Somewhat is 25%. There is no 60% level."
      },
      {
        "q": "A company says it reviews user access, but it has no written process and only does it when someone remembers. Which level fits best?",
        "opts": [
          "Fully (100%)",
          "Almost (75%)",
          "Somewhat (25%)",
          "Mostly (50%)"
        ],
        "ans": 2,
        "exp": "Somewhat means the practice has only started or is informal: not written down and not done the same way each time. Fully, Almost, and Mostly all need the practice to be done in a more complete way."
      },
      {
        "q": "Why does each questionnaire question belong to one CSF function?",
        "opts": [
          "So each function has exactly the same total weight",
          "So results can be scored by function",
          "So clients can skip some",
          "So each staff member answers only one function"
        ],
        "ans": 1,
        "exp": "Linking each question to a function lets the workbook calculate a score for Govern, Identify, Protect, Detect, Respond, and Recover. Leaders can then see which areas are strong and which are weak."
      },
      {
        "q": "What are the three sources of evidence in an MCCoE assessment?",
        "opts": [
          "Interviews, online reviews, and news stories",
          "Scans, vendor sales pages, and your own best guesses",
          "Document review, customer surveys, and social media",
          "Document review, interviews, and network scans"
        ],
        "ans": 3,
        "exp": "MCCoE gathers evidence from policy and artifact review, interviews, and network and vulnerability scans. Guesses and sales pages do not prove what the client actually does."
      },
      {
        "q": "Which of these is an example of an evidence ID?",
        "opts": [
          "Weight 10",
          "CVSS 9.8",
          "CMM 3.6",
          "INT-05"
        ],
        "ans": 3,
        "exp": "Evidence IDs label the exact proof behind an answer: EV- for documents, INT- for interview records, and SCAN- for scan results. Weight, CVSS, and CMM are scores, not evidence labels."
      },
      {
        "q": "You are planning your interview with James Chen. Which is the best example of an open question?",
        "opts": [
          "Is your access process written down somewhere?",
          "Do new employees get access on their first day?",
          "How does a new employee get file server access?",
          "Have you ever given someone too much access?"
        ],
        "ans": 2,
        "exp": "An open question invites a full explanation. The other questions can be answered with a simple yes or no, so they reveal much less about how things really work."
      },
      {
        "q": "During an interview, a manager says, \"We back up every server each night.\" What should you do next?",
        "opts": [
          "Politely ask to see a backup report",
          "Score the backup question as Fully right away",
          "Say you do not believe it",
          "Skip the topic because the answer was already clear"
        ],
        "ans": 0,
        "exp": "When someone says a practice exists, you politely ask for proof and record its evidence ID. Scoring it Fully without evidence would be only an opinion, and being judgmental makes people share less."
      },
      {
        "q": "James says MFA is required for every account. The MFA enrollment report shows many accounts without MFA. What should you do?",
        "opts": [
          "Score it Fully because the IT Manager said so",
          "Score from the report; note the contradiction",
          "Average the two sources and score it Mostly",
          "Leave the question out of the workbook entirely"
        ],
        "ans": 1,
        "exp": "When words and evidence disagree, the evidence wins. You score on what the report shows, then write down what was said, what the evidence shows, and the evidence IDs."
      },
      {
        "q": "What does Nmap do?",
        "opts": [
          "Scores how well staff know the security policy",
          "Encrypts files before they leave the network",
          "Backs up servers",
          "Finds live hosts and open ports"
        ],
        "ans": 3,
        "exp": "Nmap is a network scanner. It discovers live hosts and the ports and services they have open. It does not encrypt data or run backups."
      },
      {
        "q": "What does Nessus do?",
        "opts": [
          "Blocks all traffic coming in from the internet to servers",
          "Writes the executive summary",
          "Finds known weaknesses and rates their severity",
          "Tracks when each employee finishes security training"
        ],
        "ans": 2,
        "exp": "Nessus is a vulnerability scanner. It checks systems for known vulnerabilities and rates each one, usually with a CVSS score. A firewall blocks traffic, not Nessus."
      },
      {
        "q": "A Nessus finding on Northgate's web server has a CVSS score of 9.8. What does this mean?",
        "opts": [
          "It is a Low vulnerability",
          "It is a Critical vulnerability",
          "It is a Medium vulnerability",
          "The server is 98% secure overall"
        ],
        "ans": 1,
        "exp": "CVSS runs from 0 to 10. Scores from 9.0 to 10.0 are Critical, so 9.8 is among the most severe. A CVSS score is not a percentage of security."
      },
      {
        "q": "In this capstone, who runs the Nmap and Nessus scans of Northgate?",
        "opts": [
          "The MCCoE team, with written permission",
          "Each student, from their own home network at night",
          "Any student in the class",
          "Northgate's customers, through the ordering portal"
        ],
        "ans": 0,
        "exp": "Scanning without permission can be illegal and harmful. The MCCoE team runs the scans with the client's written permission, and students only review the results."
      },
      {
        "q": "What is the formula for weighted compliance?",
        "opts": [
          "Sum of all levels divided by the number of functions",
          "Sum of weights / sum of (weight x level)",
          "Sum of (weight x level) / sum of weights",
          "Highest level minus the lowest level in each function"
        ],
        "ans": 2,
        "exp": "Weighted compliance multiplies each level by its weight, adds those up, and divides by the total of the weights. This makes important questions count more."
      },
      {
        "q": "Two questions each have weight 6. One is Fully (100%) and one is Mostly (50%). What is the weighted compliance?",
        "opts": [
          "75%",
          "50%",
          "100%",
          "150%"
        ],
        "ans": 0,
        "exp": "Weight x level gives 600 + 300 = 900. The weights add to 6 + 6 = 12. So 900 / 12 = 75%. Compliance can never be more than 100%."
      },
      {
        "q": "Question A has weight 3 and is Fully (100%). Question B has weight 9 and is Not Compliant (0%). What is the weighted compliance?",
        "opts": [
          "50%",
          "25%",
          "75%",
          "33%"
        ],
        "ans": 1,
        "exp": "Weight x level gives 300 + 0 = 300. The weights add to 3 + 9 = 12. So 300 / 12 = 25%. The high-weight question pulls the score down a lot."
      },
      {
        "q": "A function has 50% weighted compliance. What is its CMM score?",
        "opts": [
          "2.0 (Repeatable)",
          "3.0 (Defined)",
          "2.5 (Repeatable)",
          "4.0 (Managed)"
        ],
        "ans": 1,
        "exp": "CMM = 1 + 4 x compliance. With 50% as 0.5, that is 1 + 4 x 0.5 = 3.0, which is level 3, Defined."
      },
      {
        "q": "Which list shows the five CMM levels in order, from 1 to 5?",
        "opts": [
          "Initial, Repeatable, Defined, Managed, Optimized",
          "Initial, Defined, Repeatable, Managed, Optimized",
          "Partial, Repeatable, Defined, Adaptive, Optimized",
          "Initial, Repeatable, Managed, Defined, Optimized"
        ],
        "ans": 0,
        "exp": "CMM goes 1 Initial, 2 Repeatable, 3 Defined, 4 Managed, 5 Optimized. Partial and Adaptive are words from the older CSF Tiers, not CMM."
      },
      {
        "q": "A function scores 68% weighted compliance. What is its hygiene rating?",
        "opts": [
          "Intermediate",
          "Basic",
          "Good",
          "Optimized"
        ],
        "ans": 0,
        "exp": "Intermediate covers 35% to 69%, so 68% is Intermediate, just short of Good (70% and up). Optimized is a CMM level, not a hygiene rating."
      },
      {
        "q": "A function scores 34% weighted compliance. What is its hygiene rating?",
        "opts": [
          "Intermediate",
          "Good",
          "Initial",
          "Basic"
        ],
        "ans": 3,
        "exp": "Basic means below 35%, so 34% is Basic. It would need 35% to reach Intermediate. Initial is a CMM level, not a hygiene rating."
      },
      {
        "q": "Why is overall compliance not just the average of the six function scores?",
        "opts": [
          "Leaders only care about the Protect function",
          "Averages are not allowed",
          "Each function always has exactly one question",
          "Functions have different total weights"
        ],
        "ans": 3,
        "exp": "Overall compliance uses all 41 questions and their weights together. Functions have different numbers of questions and different total weights, so a simple average of six scores would give the wrong answer."
      },
      {
        "q": "You asked for proof of security training three times, but got none. How should you score and record that question?",
        "opts": [
          "Fully, since the client said that training happens",
          "A guessed level",
          "Not Compliant, listed as a gap",
          "Left blank and removed from the workbook totals"
        ],
        "ans": 2,
        "exp": "A practice with no evidence cannot get credit, so it scores Not Compliant, and you note that no evidence was provided and add it to your gaps. A blank also counts as 0% in the workbook, but it hides the reason."
      }
    ],
    "labInfo": {
      "title": "NIST CSF Fieldwork: Evidence Gathering and Weighted Scoring",
      "goal": "Carry out evidence-based fieldwork on Northgate Supply Co.: interview the IT Manager, review documents and scan results, and score all 41 questionnaire questions with evidence IDs, weighted compliance, CMM maturity, and hygiene ratings.",
      "safety": "Northgate Supply Co. is a fictional client. The scans were run by the MCCoE team, with permission, in an isolated lab; you only read the results. Never scan, log in to, or test any real system, and never add real company data, passwords, or personal information to your work.",
      "materials": [
          {
            "title": "Interview simulator: Northgate staff (INT-01 to INT-05)",
            "file": "interview.html",
            "note": "Interview the CEO, IT Manager, HR, Finance, and Warehouse leads. One timed interview each, so plan your questions first (step 2)."
          },
        {
          "title": "Client brief: Northgate Supply Co.",
          "file": "materials/week9/northgate-organization-profile.html",
          "note": "The engagement letter, the company, its systems, the April incident, and how fieldwork works. Read it for step 1."
        },
        {
          "title": "Evidence library",
          "file": "materials/week9/evidence/index.html",
          "note": "Policies, exports, and reports Northgate gave the team (EV-01 to EV-21)."
        },
        {
          "title": "Scan results",
          "file": "materials/week9/scans/index.html",
          "note": "The network and vulnerability scans the MCCoE team ran with permission (SCAN-01 to SCAN-03), with a guide to reading them."
        },
        {
          "title": "Questionnaire workbook (Excel)",
          "file": "materials/week9/northgate-questionnaire.xlsx",
          "note": "The 41-question NIST CSF 2.0 questionnaire. Score every question, add evidence IDs, and the Dashboard calculates your results."
        },
        {
          "title": "Fieldwork worksheets",
          "file": "materials/week9/fieldwork-worksheets.html",
          "note": "Interview notes template, contradictions log, and the five response levels."
        }
      ]
    }
  },
  {
    "num": 10,
    "title": "Capstone — Outbrief",
    "nist": "All CSF 2.0 Functions",
    "topics": "Risk register and heat map | POA&M and remediation roadmap | Executive Summary and CSA report | Formal outbrief",
    "hours": "8-10 hours",
    "level": "Capstone",
    "overview": "This week you finish the capstone by turning your Week 9 fieldwork into the deliverables MCCoE gives a real client. From your scored questionnaire you build a risk register and a heat map, then a POA&M (Plan of Action & Milestones) that plans a fix for each serious gap. You write a short Executive Summary for Northgate's leaders and a Cybersecurity Assessment Report (CSA) with results by function, top risks, and a remediation roadmap. Finally, you present a live outbrief to MCCoE staff and answer their questions. This is practice for a real part of the job: explaining security to people and defending your conclusions calmly, with evidence.",
    "capability": "Defends a score to a room",
    "objectives": [
      "Report weighted compliance, CMM maturity, and hygiene rating for each NIST CSF function and overall.",
      "Build a risk register that rates each risk from its likelihood and impact using the risk matrix, and names an owner and CSF category.",
      "Use a heat map to show how many risks fall in each likelihood and impact cell.",
      "Build a POA&M with one item for every question scored Somewhat (25%) or Not Compliant (0%), plus any question scored Mostly (50%) that drives a Critical or High risk, each with a priority, action, owner, and milestone.",
      "Write a plain-language Executive Summary and a short CSA report with a 0-30 days, 31-90 days, and 91-180 days remediation roadmap.",
      "Deliver a live outbrief and defend your scores by pointing to evidence IDs."
    ],
    "lessons": [
      {
        "title": "From Gaps to Risks: The Risk Register and Heat Map",
        "body": [
          "In Week 9 you scored 41 questions and found gaps. A gap alone does not tell leaders how worried to be. Risk does. Risk is the chance that something bad happens, combined with how much harm it would cause. Your first job this week is to turn the most important gaps into clear risk statements, usually 8 to 10 of them. A good risk statement names the threat and what it would hurt. For example: 'An attacker with a stolen password logs in through the VPN, which has no MFA, and steals finance data.'",
          "Next, rate each risk with words, not numbers. Likelihood is how probable the event is: Unlikely, Possible, or Likely. Impact is how much harm it would cause: Minor, Moderate, Major, or Severe. Use your evidence to choose. A Critical Nessus finding on a server that faces the internet makes an attack more likely. Sensitive data, like vendor bank details, makes the impact worse.",
          "The rating comes from a risk matrix. You find the row for the likelihood and the column for the impact, and the cell gives the rating: Low, Medium, High, or Critical. The matrix is: Likely: Minor = Medium, Moderate = High, Major = High, Severe = Critical. Possible: Minor = Low, Moderate = Medium, Major = Medium, Severe = High. Unlikely: Minor = Low, Moderate = Low, Major = Medium, Severe = Medium. For example, a Likely risk with Severe impact is Critical, and a Possible risk with Moderate impact is Medium. The risk register and POA&M workbook fills in the rating for you when you pick likelihood and impact, but you must be able to read the matrix and explain each rating.",
          "The risk register is the table that holds all of this. Each row has a risk number, the risk statement, the evidence IDs, likelihood, impact, rating, the CSF category, an owner, and a status. The owner is a person at the client who is responsible for managing the risk, such as the IT Manager or the CEO. The owner is never the assessor.",
          "A heat map shows the register as a picture. It is a grid with the three likelihood levels on one side and the four impact levels on the other. Each cell shows how many of your risks have that likelihood and impact, and the cells are colored by their rating. The corner where Likely meets Severe holds the Critical risks. Leaders can see in a few seconds where the danger is. The workbook's Heat Map sheet counts the risks for you."
        ],
        "keyTerms": [
          {
            "term": "Risk",
            "definition": "The chance that something bad happens, combined with how much harm it would cause."
          },
          {
            "term": "Likelihood",
            "definition": "How probable a risk event is: Unlikely, Possible, or Likely."
          },
          {
            "term": "Impact",
            "definition": "How much harm a risk event would cause: Minor, Moderate, Major, or Severe."
          },
          {
            "term": "Risk matrix",
            "definition": "A table that turns a likelihood and an impact into a rating of Low, Medium, High, or Critical."
          },
          {
            "term": "Risk register",
            "definition": "A table of risks, each with a risk statement, evidence IDs, likelihood, impact, rating, CSF category, owner, and status."
          },
          {
            "term": "Heat map",
            "definition": "A grid that counts how many risks fall in each likelihood and impact cell, colored by rating, so the highest risks stand out."
          }
        ]
      },
      {
        "title": "The POA&M: Turning Gaps into a Plan",
        "body": [
          "POA&M stands for Plan of Action & Milestones. The risk register tells leaders what could go wrong and how bad it would be. The POA&M tells them what will be done about it, who will do it, and by when. You build it on the POA&M sheet of the risk register and POA&M workbook.",
          "Which gaps get a POA&M item? The rule is: one item for every question scored Somewhat (25%) or Not Compliant (0%), plus any question scored Mostly (50%) that drives a Critical or High risk. So a question scored Somewhat always gets an item. A question scored Mostly gets an item only if it is behind a Critical or High risk in your register. Almost and Fully questions do not need items.",
          "Each POA&M item has four key parts. The priority says how urgent it is: High, Medium, or Low. The action is a clear, specific fix, such as 'Turn on MFA for all VPN and email accounts.' The owner is the client person responsible for the fix. The milestone is a target date or checkpoint, such as 'MFA on for all accounts by 30 November 2026.' Each item also names its CSF category and question number, describes the gap with its evidence IDs, and records the effort (Low, Medium, or High) and status.",
          "To set priority, start with the risk rating and the question's weight. Then think about effort: how hard or costly the fix is. High-risk, low-effort items are quick wins and usually come first. High-risk, high-effort items are important but need planning and budget. Low-risk items can wait. Always connect priority to business impact. Northgate's insurance renews in November, its budget is small, and one person runs IT, so a quick, cheap fix that the insurer asks about is a strong first step.",
          "The remediation roadmap groups POA&M items into three time phases: 0-30 days, 31-90 days, and 91-180 days. Quick wins usually go in the first phase. The roadmap goes into the CSA report and the deck, so leaders see the plan as a simple timeline."
        ],
        "keyTerms": [
          {
            "term": "POA&M (Plan of Action & Milestones)",
            "definition": "The action plan: one item for every question scored Somewhat or Not Compliant, plus any Mostly question that drives a Critical or High risk. Each item has a priority, action, owner, and milestone."
          },
          {
            "term": "Milestone",
            "definition": "A target date or checkpoint for finishing a POA&M action."
          },
          {
            "term": "Remediation",
            "definition": "The action taken to fix a security gap or weakness."
          },
          {
            "term": "Quick win",
            "definition": "A fix that lowers a high risk with little cost or effort, so it is usually done first."
          },
          {
            "term": "Remediation roadmap",
            "definition": "A timeline that groups remediation actions into three phases: 0-30 days, 31-90 days, and 91-180 days."
          }
        ]
      },
      {
        "title": "Writing for Leaders: The Executive Summary and the CSA",
        "body": [
          "Your core deliverable pack has six parts: the scored questionnaire workbook, the Executive Summary, the Cybersecurity Assessment Report (CSA), the Risk Register, the POA&M, and the briefing deck. You start the written parts from the Executive Summary template, the CSA template, and the briefing deck template. Each part has its own job and its own audience. All of them must use the same numbers, taken from your workbook.",
          "The Executive Summary is 1 to 2 pages in plain language. It is written for leaders, such as Northgate's CEO Linda Harper, who decide on money and priorities. It says why the assessment was done, the overall result (compliance, CMM level, and hygiene rating), the top three or so risks in business terms, and the most important fixes. Put the most important message first. Leaders may read only this page, so avoid jargon and define any term they might not know.",
          "The CSA is a short report for managers and technical staff. It covers the scope and method (the 41-question weighted questionnaire and the three evidence sources), results by CSF function (compliance, CMM, and hygiene), key findings with their evidence IDs, the top risks, and the remediation roadmap. The detail lets IT staff act on it.",
          "Write for two audiences at once. Technical readers need enough detail to act. Leaders need to understand the risk and the decision. Being clear is not the same as being simple: you are making expert findings usable for the people who must fund and approve the fixes."
        ],
        "keyTerms": [
          {
            "term": "Executive Summary",
            "definition": "A 1-2 page, plain-language summary for leaders that gives the overall result, the top risks, and the most important fixes."
          },
          {
            "term": "Cybersecurity Assessment Report (CSA)",
            "definition": "A short report with scope and method, results by CSF function, key findings, top risks, and a remediation roadmap."
          },
          {
            "term": "Deliverable pack",
            "definition": "The full set of assessment outputs: workbook, Executive Summary, CSA, Risk Register, POA&M, and briefing deck."
          },
          {
            "term": "Business impact",
            "definition": "The effect a security problem could have on an organization's operations, money, reputation, or legal duties."
          }
        ]
      },
      {
        "title": "The Outbrief: Presenting and Defending Your Scores",
        "body": [
          "An outbrief is a formal meeting where the assessment team presents its results to the client's leaders and answers their questions. Your briefing deck should be about 8 to 12 slides: title, purpose and scope, method, overall result, results by function, heat map and top risks, POA&M priorities and roadmap, next steps, and questions.",
          "Lead with the headline: the overall result and the biggest risks. Then give the detail. Aim for 10 to 15 minutes so there is time for questions. Practice out loud and time yourself. Speak in plain language and explain any number you show, for example: '62% means Intermediate hygiene and a CMM level of about 3.5.'",
          "When someone challenges a score, stay calm and point to the evidence. Name the evidence IDs and explain how you chose the level. If someone says 'but James told me everything is patched,' respectfully show what the Nessus results show: the evidence wins. If a person shows you new evidence you have not seen, thank them, note it, and review it after the meeting; update the score only if the evidence supports it. Never change a score just to please the room. If you do not know an answer, say so honestly and explain how you would find out. Do not blame individuals; focus on practices and fixes."
        ],
        "keyTerms": [
          {
            "term": "Outbrief",
            "definition": "A formal meeting where assessors present their results to the client and answer questions."
          },
          {
            "term": "Briefing deck",
            "definition": "The slides used in the outbrief, usually about 8 to 12 slides."
          },
          {
            "term": "Defending a score",
            "definition": "Explaining how a score was reached by pointing to the evidence behind it."
          },
          {
            "term": "Stakeholder",
            "definition": "A person or group affected by the assessment results, such as the CEO, managers, or the IT team."
          }
        ]
      }
    ],
    "concepts": [
      [
        "Weighted compliance",
        "A score equal to sum(weight x level) divided by sum(weight), calculated for each CSF function and overall.",
        ""
      ],
      [
        "Capability Maturity Model (CMM)",
        "A five-level maturity scale: 1 Initial, 2 Repeatable, 3 Defined, 4 Managed, 5 Optimized. Here, CMM = 1 + 4 x compliance.",
        ""
      ],
      [
        "Hygiene rating",
        "A simple label from the compliance score: Basic (below 35%), Intermediate (35-69%), or Good (70% and up).",
        ""
      ],
      [
        "Evidence ID",
        "A short label that points to the exact evidence behind an answer: for example EV-04 (a document), INT-05 (an interview record), or SCAN-03 (a scan result).",
        ""
      ],
      [
        "Contradiction",
        "A case where what a person says does not match what the documents or scans show. The evidence wins, and the difference is written down.",
        ""
      ],
      [
        "Nmap",
        "A network scanner that finds which hosts are online and which ports and services are open.",
        ""
      ],
      [
        "Nessus",
        "A vulnerability scanner that checks systems for known weaknesses and rates their severity.",
        ""
      ],
      [
        "CVSS",
        "Common Vulnerability Scoring System: a 0-10 score for how severe a vulnerability is. 9.0-10.0 is Critical, 7.0-8.9 High, 4.0-6.9 Medium, 0.1-3.9 Low.",
        ""
      ],
      [
        "Risk",
        "The chance that something bad happens, combined with how much harm it would cause.",
        ""
      ],
      [
        "Likelihood",
        "How probable a risk event is: Unlikely, Possible, or Likely.",
        ""
      ],
      [
        "Impact",
        "How much harm a risk event would cause: Minor, Moderate, Major, or Severe.",
        ""
      ],
      [
        "Risk matrix",
        "A table that turns a likelihood and an impact into a rating of Low, Medium, High, or Critical. For example, Likely with Severe impact is Critical.",
        ""
      ],
      [
        "Risk register",
        "A table of risks, each with a risk statement, evidence IDs, likelihood, impact, rating, CSF category, owner, and status.",
        ""
      ],
      [
        "Heat map",
        "A grid that counts how many risks fall in each likelihood and impact cell, colored by rating, so the highest risks stand out.",
        ""
      ],
      [
        "POA&M (Plan of Action & Milestones)",
        "The action plan: one item for every question scored Somewhat or Not Compliant, plus any Mostly question that drives a Critical or High risk. Each item has a priority, action, owner, and milestone.",
        ""
      ],
      [
        "Milestone",
        "A target date or checkpoint for finishing a POA&M action.",
        ""
      ],
      [
        "Remediation roadmap",
        "A timeline that groups remediation actions into three phases: 0-30 days, 31-90 days, and 91-180 days.",
        ""
      ],
      [
        "Executive Summary",
        "A 1-2 page, plain-language summary for leaders that gives the overall result, the top risks, and the most important fixes.",
        ""
      ],
      [
        "Cybersecurity Assessment Report (CSA)",
        "A short report with scope and method, results by CSF function, key findings, top risks, and a remediation roadmap.",
        ""
      ],
      [
        "Outbrief",
        "A formal meeting where assessors present their results to the client and answer questions.",
        ""
      ]
    ],
    "resources": [
      [
        "The NIST Cybersecurity Framework (CSF) 2.0 (NIST CSWP 29)",
        "NIST",
        "Read Appendix B, pages 24-25 (Table 2: the four CSF Tiers, Partial through Adaptive). About 8 minutes. Supports scoring maturity in Lesson 2.",
        "Free",
        "https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf"
      ],
      [
        "NIST Cybersecurity Framework 2.0: Quick-Start Guide for Using the CSF Tiers (NIST SP 1302)",
        "NIST",
        "Read the whole short guide (about 6 pages) on selecting and applying Tiers to a profile. About 8 minutes. Supports Lesson 1's compliance-vs-maturity scoring.",
        "Free",
        "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1302.pdf"
      ],
      [
        "Cross-Sector Cybersecurity Performance Goals, Version 2.0",
        "CISA",
        "Skim sections 1-6, pages 12-31 (Govern through Recover checklists). Pick 2-3 practices per function to compare against your gaps. About 10 minutes.",
        "Free",
        "https://www.cisa.gov/sites/default/files/2025-12/CPG_Report_2.0_508c.pdf"
      ],
      [
        "Risk Analysis - CompTIA Security+ SY0-701 - 5.2",
        "Professor Messer",
        "Read the written page on risk assessment, likelihood, and impact. About 5 minutes. Supports prioritizing remediation in Lesson 3.",
        "Free",
        "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/"
      ],
      [
        "Compliance - CompTIA Security+ SY0-701 - 5.4",
        "Professor Messer (YouTube)",
        "Explains compliance, reporting, and what happens when an organization does not meet its requirements. Supports scoring compliance in Lesson 1.",
        "Free",
        "https://www.youtube.com/watch?v=IjJf4jLtONQ"
      ],
      [
        "Risk Analysis - CompTIA Security+ SY0-701 - 5.2",
        "Professor Messer (YouTube)",
        "Explains how to measure risk using likelihood and impact, which helps you score findings and set priorities in Lesson 2.",
        "Free",
        "https://www.youtube.com/watch?v=Ykx7t54y-oo"
      ],
      [
        "Audits and Assessments - CompTIA Security+ SY0-701 - 5.5",
        "Professor Messer (YouTube)",
        "A quick look at internal and external audits and assessments, so you understand the kind of report you are producing.",
        "Free",
        "https://www.youtube.com/watch?v=uo2Yw720mv4"
      ],
      [
        "Risky Business: Strengthening Cybersecurity with Risk Analysis",
        "IBM Technology (YouTube)",
        "See how risk analysis helps decide which problems to fix first, supporting your prioritized remediation plan in Lesson 3.",
        "Free",
        "https://www.youtube.com/watch?v=_c2L4z-v06g"
      ],
      [
        "Whiteboard Wednesday: How to Talk to your Board of Directors About Cybersecurity",
        "Rapid7 (YouTube)",
        "Simple tips for explaining security to leaders in business terms, to help you prepare your formal outbrief in the lab.",
        "Free",
        "https://www.youtube.com/watch?v=eGeurjvCpXU"
      ]
    ],
    "labs": [
      "Build the risk register on the Risk Register sheet of materials/week9/northgate-risk-register-poam.xlsx. List Northgate's 8 to 10 most important risks. For each, write the threat and what it would hurt, add the evidence IDs, and pick a likelihood (Unlikely, Possible, Likely) and an impact (Minor, Moderate, Major, Severe); the rating fills in from the matrix. Add the CSF category, an owner, and a status. Then check the Heat Map sheet.",
      "Build the POA&M on the POA&M sheet of the same workbook: one item for every question scored Somewhat (25%) or Not Compliant (0%), plus any question scored Mostly (50%) that drives a Critical or High risk. Give each item a priority, the CSF category and question number, the gap with its evidence IDs, a clear action, an owner, a milestone, and the effort. Put quick wins first.",
      "Write the Executive Summary from materials/week9/template-executive-summary.docx (1 to 2 pages, plain language, for Linda Harper and her managers) and the CSA report from materials/week9/template-assessment-report-csa.docx (scope and method, results by function, top risks, and a roadmap in three phases: 0-30 days, 31-90 days, and 91-180 days). Check that every number matches your questionnaire workbook.",
      "Build the briefing deck from materials/week9/template-briefing-deck.pptx (about 8 to 12 slides): purpose and scope, method, overall result, results by function, heat map and top risks, POA&M priorities and roadmap, next steps, and questions.",
      "Rehearse out loud and time yourself (aim for 10 to 15 minutes). Then deliver the live outbrief to MCCoE staff and answer their questions by pointing to your evidence IDs.",
      "Reflect: in the box, list the questions you were asked, which of your answers were strong, and where your evidence or wording could be better."
    ],
    "deliverable": {
      "title": "NIST CSF Assessment Deliverable Pack and Formal Outbrief",
      "description": "Produce MCCoE's core deliverable pack for Northgate Supply Co. and deliver a formal outbrief to MCCoE staff. The pack turns your scored questionnaire into risks, a plan of action, and clear reports for leaders; the outbrief presents and defends that work to a room.",
      "requirements": [
        "The final questionnaire workbook (materials/week9/northgate-questionnaire.xlsx): all 41 answers with evidence IDs, and a Dashboard showing weighted compliance, CMM level, and hygiene rating by function and overall.",
        "An Executive Summary (from materials/week9/template-executive-summary.docx), 1 to 2 pages in plain language, giving the overall result, the top risks in business terms, and the most important fixes.",
        "A short CSA report (from materials/week9/template-assessment-report-csa.docx) with scope and method, results by CSF function, key findings with evidence IDs, top risks, and a remediation roadmap in three phases: 0-30 days, 31-90 days, and 91-180 days.",
        "A Risk Register and Heat Map (in materials/week9/northgate-risk-register-poam.xlsx) with 8 to 10 risks, each with evidence IDs, a likelihood, an impact, a rating from the risk matrix, a CSF category, and an owner.",
        "A POA&M (in the same workbook) with one item for every question scored Somewhat (25%) or Not Compliant (0%), plus any question scored Mostly (50%) that drives a Critical or High risk, each with a priority, action, owner, and milestone.",
        "A briefing deck (from materials/week9/template-briefing-deck.pptx) and a live outbrief in which you defend your scores by pointing to evidence. All numbers must match across every document."
      ],
      "format": "A deliverable pack: materials/week9/northgate-questionnaire.xlsx and materials/week9/northgate-risk-register-poam.xlsx (Risk Register, Heat Map, and POA&M sheets); the Executive Summary and CSA (Word document or PDF); and a slide deck delivered as a live formal outbrief to MCCoE staff.",
      "staffConfirms": "Your instructor marks your live outbrief as delivered after you present. Upload your report and slide deck here."
    },
    "quiz": [
      {
        "q": "Using the risk matrix, what is the rating for a risk that is Likely with Severe impact?",
        "opts": [
          "High",
          "Medium",
          "Low",
          "Critical"
        ],
        "ans": 3,
        "exp": "Find the Likely row and the Severe column: the cell says Critical. This is the most serious rating on the matrix."
      },
      {
        "q": "Using the risk matrix, what is the rating for a risk that is Possible with Moderate impact?",
        "opts": [
          "Low",
          "Medium",
          "High",
          "Critical"
        ],
        "ans": 1,
        "exp": "In the Possible row, Minor is Low, Moderate is Medium, Major is Medium, and Severe is High. So Possible and Moderate gives Medium."
      },
      {
        "q": "Using the risk matrix, what is the rating for a risk that is Unlikely with Severe impact?",
        "opts": [
          "Critical",
          "High",
          "Medium",
          "Low"
        ],
        "ans": 2,
        "exp": "In the Unlikely row, Severe gives Medium. A severe harm that is unlikely to happen is rated lower than one that is likely to happen."
      },
      {
        "q": "Using the risk matrix, what is the rating for a risk that is Likely with Moderate impact?",
        "opts": [
          "High",
          "Low",
          "Medium",
          "Critical"
        ],
        "ans": 0,
        "exp": "The matrix row for Likely is Minor = Medium, Moderate = High, Major = High, Severe = Critical. So Likely and Moderate gives High."
      },
      {
        "q": "How do you get a risk's rating in the risk register workbook?",
        "opts": [
          "Pick likelihood and impact; the matrix sets it",
          "Multiply two numbers from 1 to 5 and write the total",
          "Copy the CVSS score of the worst vulnerability found",
          "Ask the IT Manager"
        ],
        "ans": 0,
        "exp": "You choose a likelihood (Unlikely, Possible, Likely) and an impact (Minor, Moderate, Major, Severe). The workbook reads the risk matrix and fills in Low, Medium, High, or Critical."
      },
      {
        "q": "Which set of details belongs in each row of the risk register?",
        "opts": [
          "Action, milestone, effort, and the cost of each fix",
          "Risk, evidence IDs, likelihood, impact, rating, owner",
          "Every question in the workbook with its weight and level",
          "The slide titles for the outbrief, in the order you show them"
        ],
        "ans": 1,
        "exp": "The risk register describes and rates each risk, with its evidence IDs, CSF category, owner, and status. Actions, milestones, and effort belong in the POA&M."
      },
      {
        "q": "In a risk register, who should be the owner of a risk?",
        "opts": [
          "The student assessor",
          "The software vendor whose product has the flaw",
          "The MCCoE instructor who reviews the final report",
          "A client person, such as the IT Manager"
        ],
        "ans": 3,
        "exp": "The owner is someone at the client who is responsible for managing the risk, such as the IT Manager or the CEO. The assessor finds and reports risks but does not own them."
      },
      {
        "q": "What does each cell of the heat map show?",
        "opts": [
          "How many risks have that likelihood and impact",
          "How hot the server room gets at that time of day",
          "The CVSS score of the worst open port Nmap found",
          "Which staff finished training"
        ],
        "ans": 0,
        "exp": "The heat map counts the risks in your register by likelihood and impact, and colors each cell by its rating. It lets leaders see at a glance where the serious risks are."
      },
      {
        "q": "Nessus finds a CVSS 9.8 vulnerability on a server that faces the internet. How should this affect your risk rating?",
        "opts": [
          "It lowers the impact, because the flaw is only in software",
          "It has no effect, because scans do not count as evidence",
          "It makes an attack more likely",
          "It removes the risk"
        ],
        "ans": 2,
        "exp": "A Critical vulnerability on an internet-facing system is easy for attackers to find and exploit, so you may choose a higher likelihood, such as Likely. Scan results are one of the three evidence sources."
      },
      {
        "q": "What does POA&M stand for?",
        "opts": [
          "Policy of Assessment & Measures",
          "Proof of Audit & Monitoring",
          "Plan of Assets & Maintenance",
          "Plan of Action & Milestones"
        ],
        "ans": 3,
        "exp": "POA&M means Plan of Action & Milestones: a plan that lists what will be done about each serious gap, by whom, and by when."
      },
      {
        "q": "What is the main difference between a risk register and a POA&M?",
        "opts": [
          "The register rates risks; the POA&M plans fixes",
          "The register lists fixes; the POA&M lists every open port",
          "They are the same document",
          "The register is for leaders; the POA&M is only for auditors"
        ],
        "ans": 0,
        "exp": "The risk register describes what could go wrong and rates it with the risk matrix. The POA&M is the action plan, with a priority, action, owner, and milestone for each item."
      },
      {
        "q": "Which questions must get a POA&M item?",
        "opts": [
          "Only the questions scored Not Compliant (0%), and no others",
          "Every one of the 41 questions, including the ones scored Almost or Fully",
          "Only questions the client asks you to include in the plan",
          "Somewhat and Not Compliant, plus Mostly behind a Critical or High risk"
        ],
        "ans": 3,
        "exp": "The rule is one item for every question scored Somewhat (25%) or Not Compliant (0%), plus any Mostly (50%) question that drives a Critical or High risk."
      },
      {
        "q": "A question scored Mostly (50%) is the cause of a High risk in your register. Does it need a POA&M item?",
        "opts": [
          "No, because only Not Compliant questions ever get items",
          "No, because Mostly means the practice is already good enough",
          "Yes, but only if asked",
          "Yes, because it drives a High risk"
        ],
        "ans": 3,
        "exp": "Mostly questions get a POA&M item when they drive a Critical or High risk. Questions scored Somewhat or Not Compliant always get one."
      },
      {
        "q": "Which four key parts does every POA&M item need?",
        "opts": [
          "Likelihood, impact, weight, and CVSS score",
          "Title, date, author, and page number",
          "Function, level, weight, and hygiene rating",
          "Priority, action, owner, and milestone"
        ],
        "ans": 3,
        "exp": "Each POA&M item has a priority, a clear action, an owner, and a milestone. Likelihood and impact belong in the risk register, and levels and weights belong in the questionnaire workbook."
      },
      {
        "q": "Which is the best example of a POA&M milestone?",
        "opts": [
          "MFA is a helpful security control for staff",
          "MFA on for all accounts by 30 Nov 2026",
          "The IT team should think about adding MFA soon",
          "MFA was missing in April"
        ],
        "ans": 1,
        "exp": "A milestone is a target date or checkpoint for finishing an action. The other options describe MFA or the past, but they give no date to measure progress."
      },
      {
        "q": "Which gap should usually be fixed first?",
        "opts": [
          "A high-risk gap that needs a large new budget to fix",
          "A low-risk gap that is cheap and very easy to fix",
          "A high risk that is cheap and easy to fix",
          "Any low-risk gap"
        ],
        "ans": 2,
        "exp": "High-risk, low-effort items are quick wins and usually come first. A high-risk, high-effort fix is important but needs planning and budget. Low-risk items can wait."
      },
      {
        "q": "What are the three phases of the remediation roadmap?",
        "opts": [
          "1 week, 1 month, 1 year",
          "0-30 days, 31-90 days, 91-180 days",
          "0-90 days, 91-365 days, 1-3 years",
          "Today, next quarter, and next budget year"
        ],
        "ans": 1,
        "exp": "The roadmap groups POA&M actions into 0-30 days, 31-90 days, and 91-180 days. Quick wins usually go in the first phase."
      },
      {
        "q": "Two gaps drive risks with the same rating. Why might you put the MFA fix first for Northgate?",
        "opts": [
          "The insurer asks about MFA",
          "MFA uses the newest and most interesting technology",
          "It was found first",
          "The IT Manager said he prefers working on MFA projects"
        ],
        "ans": 0,
        "exp": "Priorities should connect to business impact. Northgate's insurance renews in November and the insurer asks about MFA, so fixing it first protects the business. Technical interest or the order you found gaps are not good reasons."
      },
      {
        "q": "Who is the main audience for the Executive Summary?",
        "opts": [
          "Leaders, such as the CEO",
          "The part-time IT contractor who fixes the servers",
          "Outside attackers",
          "The software vendors who sell security tools to Northgate"
        ],
        "ans": 0,
        "exp": "The Executive Summary is written for leaders who decide on money and priorities. It uses plain language so they can understand the risk and act."
      },
      {
        "q": "How long should the Executive Summary be?",
        "opts": [
          "Half a page",
          "1 to 2 pages",
          "10 to 15 pages",
          "As long as the full workbook"
        ],
        "ans": 1,
        "exp": "The Executive Summary is 1 to 2 pages. Busy leaders may read only this, so it must be short and focused on what matters most."
      },
      {
        "q": "Which belongs in the Executive Summary?",
        "opts": [
          "Overall result, top risks, and key fixes",
          "All 41 questionnaire answers with their weights",
          "Raw Nessus output",
          "Full copies of every evidence document you received"
        ],
        "ans": 0,
        "exp": "The Executive Summary gives the big picture: overall compliance, CMM, and hygiene, the top risks in business terms, and the most important fixes. Detail goes in the CSA, workbook, and evidence files."
      },
      {
        "q": "What is the CSA report?",
        "opts": [
          "A single title slide",
          "The list of interview questions for James Chen",
          "Results by function, risks, and a roadmap",
          "A security certificate the client must buy each year"
        ],
        "ans": 2,
        "exp": "The Cybersecurity Assessment Report (CSA) covers scope and method, results by CSF function, key findings with evidence IDs, top risks, and the remediation roadmap."
      },
      {
        "q": "Which part of the deliverable pack holds all 41 scores and their evidence IDs?",
        "opts": [
          "The two-page Executive Summary",
          "The outbrief briefing deck",
          "The questionnaire workbook",
          "The Heat Map sheet"
        ],
        "ans": 2,
        "exp": "The questionnaire workbook is the detailed record of every question, level, and evidence ID. The other documents summarize results that come from it."
      },
      {
        "q": "Your Executive Summary says overall compliance is 58%, but your deck says 61%. What should you do?",
        "opts": [
          "Leave both, since leaders will probably not notice",
          "Use the higher number because it looks better",
          "Use the workbook's number in both",
          "Remove both numbers"
        ],
        "ans": 2,
        "exp": "All documents must use the same numbers, taken from the workbook's Dashboard. Mismatched numbers make leaders doubt the whole assessment."
      },
      {
        "q": "What is an outbrief?",
        "opts": [
          "A formal meeting to present results",
          "An interview held with staff before fieldwork begins",
          "A private email that sends raw scan files to the client",
          "A list of the 41 questions"
        ],
        "ans": 0,
        "exp": "An outbrief is a formal presentation of assessment results to the client's leaders, followed by questions. Interviews happen earlier, during fieldwork."
      },
      {
        "q": "During your outbrief, a manager challenges one of your scores. What is the best response?",
        "opts": [
          "Say the score is final",
          "Calmly point to the evidence IDs",
          "Change the score right away to avoid any conflict",
          "Skip ahead to the next slide in your briefing deck"
        ],
        "ans": 1,
        "exp": "Defending a score means showing the evidence behind it and explaining how you chose the level. Refusing to discuss it, or changing it without new evidence, makes your conclusions less credible."
      },
      {
        "q": "You are asked a question during the outbrief and you do not know the answer. What should you do?",
        "opts": [
          "Give a confident guess so the room keeps trusting you",
          "Tell the room the question is out of scope for today",
          "Change the topic",
          "Say so, and explain how you'd find out"
        ],
        "ans": 3,
        "exp": "Admitting what you do not know, and saying how you would find out, builds trust. A confident guess could be wrong and damage trust in the whole assessment."
      },
      {
        "q": "During the outbrief, the IT Manager shows a document you have never seen. It may change a score. What should you do?",
        "opts": [
          "Refuse to look at it, because fieldwork is already over",
          "Note it and review it after the meeting",
          "Raise the score right away in front of everyone there",
          "Ignore it and move on"
        ],
        "ans": 1,
        "exp": "New evidence should be reviewed carefully. You update the score only if the evidence supports it. Changing a score on the spot, or ignoring new proof, are both poor practice."
      },
      {
        "q": "How should you open your outbrief?",
        "opts": [
          "With a full list of every tool you used in fieldwork",
          "With the overall result and top risks",
          "With the history of the NIST framework since 2014",
          "With the lowest-weight questions"
        ],
        "ans": 1,
        "exp": "Lead with the most important message. Leaders want the overall result and top risks first; detail can follow."
      },
      {
        "q": "A leader says, \"Our IT guy told me everything is patched.\" Your Nessus results show missing patches. How do you respond?",
        "opts": [
          "Agree with the leader and raise the score to match",
          "Say the IT guy is lying to the company's leaders",
          "Respectfully show the scan results",
          "Drop the finding"
        ],
        "ans": 2,
        "exp": "When words and evidence disagree, the evidence wins. Show the results politely and focus on the practice, not on blaming a person."
      }
    ],
    "labInfo": {
      "title": "Outbrief: Build the Deliverable Pack and Defend Your Assessment",
      "goal": "Turn your Week 9 Northgate fieldwork into MCCoE's core deliverable pack, then present it in a live outbrief to MCCoE staff and defend your scores with evidence.",
      "safety": "Use only the fictional Northgate scenario and the approved practice data. Do not present real client information, credentials, or personal data. Treat all findings as sensitive and share them only with the intended audience.",
      "materials": [
        {
          "title": "Risk register and POA&M workbook (Excel)",
          "file": "materials/week9/northgate-risk-register-poam.xlsx",
          "note": "Sheets for your Risk Register, Heat Map, and POA&M. The risk rating fills in from likelihood and impact."
        },
        {
          "title": "Executive Summary template (Word)",
          "file": "materials/week9/template-executive-summary.docx",
          "note": "A 1–2 page summary for Northgate's leaders. Grey text tells you what goes in each part."
        },
        {
          "title": "Assessment report (CSA) template (Word)",
          "file": "materials/week9/template-assessment-report-csa.docx",
          "note": "The seven sections of your Cybersecurity Assessment Report."
        },
        {
          "title": "Briefing deck template (PowerPoint)",
          "file": "materials/week9/template-briefing-deck.pptx",
          "note": "Ten slides for your outbrief, in the order leaders expect."
        }
      ]
    }
  },
  {
    "num": 11,
    "title": "Security+ Review",
    "nist": "Security+ SY0-701 — All Domains",
    "topics": "Domain-by-domain review against current exam objectives | Governance and risk terminology",
    "hours": "5 daily practice tests",
    "level": "Certification Prep",
    "overview": "This week you review the whole CompTIA Security+ exam (version SY0-701), domain by domain. The goal is not to learn everything for the first time, but to connect what you already know to the exam's official objectives and to fill in weak spots. You will also tighten your understanding of governance and risk terminology, which appears throughout the exam. By the end of the week, you should know which domains are strong for you and which need more study.",
    "capability": "Covers the exam objectives end to end",
    "objectives": [
      "Map your knowledge to the five current Security+ (SY0-701) exam domains.",
      "Explain core general security concepts, including the CIA triad and control types.",
      "Identify common threats, vulnerabilities, and the mitigations that reduce them.",
      "Describe secure architecture and security operations at a high level.",
      "Use governance, risk, and compliance terminology correctly.",
      "Find your weak domains so you can focus your remaining study time."
    ],
    "lessons": [
      {
        "title": "Domain 1: General Security Concepts",
        "body": [
          "Domain 1 covers the foundations that the rest of the exam builds on. A core idea is the CIA triad: Confidentiality (keeping data secret from those who should not see it), Integrity (keeping data accurate and unchanged), and Availability (keeping systems and data usable when needed). Many exam questions test whether you can match a control to the part of the triad it protects. For example, encryption mainly protects confidentiality, hashing helps protect integrity, and backups help protect availability.",
          "You should also know the categories and types of security controls. Control categories include technical (technology, such as a firewall), managerial (policies and planning), operational (people-run processes), and physical (locks, fences, guards). Control types describe purpose: preventive (stop an event), deterrent (discourage an attacker), detective (find an event), corrective (fix after an event), compensating (an alternative when the primary control cannot be used), and directive (guide behavior with rules). The exam loves to ask you to classify a control.",
          "Other Domain 1 concepts include the AAA framework (Authentication, Authorization, Accounting), zero trust (never automatically trust; always verify), and the basics of cryptography such as symmetric versus asymmetric encryption, hashing, digital signatures, and public key infrastructure (PKI). Make sure you can define each in one plain sentence."
        ],
        "keyTerms": [
          {
            "term": "CIA triad",
            "definition": "The three core security goals: Confidentiality, Integrity, and Availability."
          },
          {
            "term": "Security control category",
            "definition": "The kind of control by nature: technical, managerial, operational, or physical."
          },
          {
            "term": "Zero trust",
            "definition": "A security model that never automatically trusts a user or device and verifies every access request."
          },
          {
            "term": "AAA",
            "definition": "Authentication (proving identity), Authorization (granting access rights), and Accounting (recording activity)."
          }
        ]
      },
      {
        "title": "Domain 2: Threats, Vulnerabilities, and Mitigations",
        "body": [
          "Domain 2 is about what can go wrong and how to reduce it. First, know the threat actors: who attacks and why. These include nation-states, organized crime, hacktivists, insiders, and unskilled attackers (sometimes called script kiddies). Each has different motivations, such as money, politics, revenge, or espionage. The exam may describe an actor and ask you to name the type or the motivation.",
          "Next, know common attack types. Social engineering tricks people, and includes phishing (fake messages), pretexting (a fake story), and business email compromise. Malware types include ransomware, worms, trojans, and spyware. Application attacks include SQL injection and cross-site scripting. Network attacks include denial-of-service and on-path attacks (where an attacker secretly sits between two parties). A vulnerability is a weakness, while a threat is something that could exploit that weakness.",
          "Mitigations reduce risk. Common ones are patching (fixing software flaws), hardening (removing unneeded features and closing weak settings), segmentation (separating networks so a problem cannot spread), least privilege (giving only the access someone needs), and monitoring. For the exam, practice matching a described attack to the best mitigation."
        ],
        "keyTerms": [
          {
            "term": "Threat actor",
            "definition": "A person or group that carries out or intends to carry out a cyberattack."
          },
          {
            "term": "Vulnerability",
            "definition": "A weakness in a system, process, or person that an attacker could exploit."
          },
          {
            "term": "Social engineering",
            "definition": "Attacks that trick people into giving up information or access, such as phishing."
          },
          {
            "term": "Mitigation",
            "definition": "An action or control that reduces the likelihood or impact of a threat, such as patching or segmentation."
          }
        ]
      },
      {
        "title": "Domain 3: Security Architecture and Domain 4: Security Operations",
        "body": [
          "Domain 3, Security Architecture, is about designing systems securely. It covers architecture models such as on-premises, cloud, and hybrid, and ideas like segmentation, high availability, and resilience. It includes protecting data through classification (labeling data by sensitivity), encryption at rest and in transit, and techniques like tokenization and masking. It also covers secure network design, including firewalls, virtual private networks (VPNs), and secure protocols. Think of this domain as choosing the right building blocks and arranging them safely.",
          "Domain 4, Security Operations, is about running security day to day. It covers identity and access management (IAM), such as multifactor authentication (MFA) and single sign-on (SSO); vulnerability management (scanning and fixing weaknesses); and monitoring tools like SIEM (Security Information and Event Management), which collects and analyzes logs. It also covers incident response, the organized process of preparing for, detecting, containing, eradicating, recovering from, and learning from incidents.",
          "Together these domains are large and practical. On the exam, expect scenario questions: you are given a situation and must pick the best tool, setting, or next step. When you review, focus on what each tool does and when you would use it, rather than memorizing every product name."
        ],
        "keyTerms": [
          {
            "term": "SIEM",
            "definition": "Security Information and Event Management: a system that collects and analyzes log data to detect and investigate security events."
          },
          {
            "term": "Multifactor authentication (MFA)",
            "definition": "Requiring two or more different proofs of identity, such as a password plus a phone code."
          },
          {
            "term": "Data classification",
            "definition": "Labeling data by how sensitive it is so the right protections can be applied."
          },
          {
            "term": "Incident response",
            "definition": "The organized process of preparing for, handling, and learning from security incidents."
          }
        ]
      },
      {
        "title": "Domain 5: Security Program Management and Governance Terminology",
        "body": [
          "Domain 5, Security Program Management and Oversight, covers the business side of security. Governance is the system of policies, standards, and roles that direct how an organization manages security. A policy is a high-level rule (what must happen), a standard is a specific required setting or method (how to meet the policy), a procedure is step-by-step instructions, and a guideline is a recommended best practice. Knowing the difference between these terms is commonly tested.",
          "Risk management is central to this domain. A risk assessment identifies and rates risks. Risk can be handled in four main ways: accept it, avoid it, transfer it (for example, buy insurance), or mitigate it (reduce it with controls). Useful terms include likelihood and impact, inherent risk (before controls), residual risk (after controls), and risk appetite (how much risk an organization is willing to take). You should also know compliance ideas, including regulations, audits, and frameworks.",
          "This domain also covers third-party and vendor risk, security awareness training, and data privacy roles such as data owner, data controller, and data processor. Because governance and risk vocabulary appears across the whole exam, spending time here often raises your score in other domains too."
        ],
        "keyTerms": [
          {
            "term": "Governance",
            "definition": "The policies, standards, and roles that direct and oversee how an organization manages security and risk."
          },
          {
            "term": "Policy vs. standard vs. procedure",
            "definition": "A policy states a high-level rule, a standard states the specific required method, and a procedure gives step-by-step instructions."
          },
          {
            "term": "Risk treatment",
            "definition": "How an organization handles a risk: accept, avoid, transfer, or mitigate it."
          },
          {
            "term": "Residual risk",
            "definition": "The risk that remains after controls have been applied."
          }
        ]
      }
    ],
    "concepts": [
      [
        "SY0-701",
        "The current version of the CompTIA Security+ certification exam and its objectives.",
        ""
      ],
      [
        "CIA triad",
        "The three core security goals: Confidentiality, Integrity, and Availability.",
        ""
      ],
      [
        "Security control type",
        "The purpose of a control: preventive, deterrent, detective, corrective, compensating, or directive.",
        ""
      ],
      [
        "Threat vs. vulnerability",
        "A threat is something that could cause harm; a vulnerability is the weakness that the threat could exploit.",
        ""
      ],
      [
        "Zero trust",
        "A model that verifies every access request and never automatically trusts a user or device.",
        ""
      ],
      [
        "Governance, risk, and compliance (GRC)",
        "The combined practice of directing security (governance), managing risk, and meeting rules and laws (compliance).",
        ""
      ],
      [
        "Risk assessment",
        "The process of identifying risks and rating them by likelihood and impact.",
        ""
      ],
      [
        "Residual risk",
        "The risk that remains after controls are applied.",
        ""
      ],
      [
        "SIEM",
        "Security Information and Event Management: a system that collects and analyzes logs to detect security events.",
        ""
      ],
      [
        "Incident response",
        "The organized process of preparing for, handling, and learning from security incidents.",
        ""
      ]
    ],
    "resources": [
      [
        "CompTIA Security+ (SY0-701) Certification Exam Objectives, Version 5.0",
        "CompTIA",
        "Read page 3 (test format and domain weights), then skim pages 4-17 (all five domains) as your master study checklist. About 15 minutes.",
        "Free",
        "https://assets.ctfassets.net/82ripq7fjls2/6TYWUym0Nudqa8nGEnegjG/0f9b974d3b1837fe85ab8e6553f4d623/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf"
      ],
      [
        "CompTIA Security+ SY0-701 Training Course (free video index by domain)",
        "Professor Messer",
        "Skim the full list of free lessons grouped by domain 1-5; use it to jump to any topic where your knowledge check score is weak. About 5 minutes.",
        "Free",
        "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/"
      ],
      [
        "The NIST Cybersecurity Framework (CSF) 2.0 (NIST CSWP 29)",
        "NIST",
        "Read Appendix C, pages 26-28 (Glossary) for exact governance and risk-framework wording tested in Domain 5. About 8 minutes.",
        "Free",
        "https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf"
      ],
      [
        "Public Key Infrastructure - CompTIA Security+ Sy0-701 - 1.4",
        "Professor Messer (YouTube)",
        "Review keys, certificates, and how public key infrastructure builds trust, a core part of Domain 1: General Security Concepts.",
        "Free",
        "https://www.youtube.com/watch?v=xHAMEF7-inQ"
      ],
      [
        "An Overview of Malware - CompTIA Security+ SY0-701 - 2.4",
        "Professor Messer (YouTube)",
        "Review the main types of malware, such as ransomware, trojans, and worms, for Domain 2: Threats, Vulnerabilities, and Mitigations.",
        "Free",
        "https://www.youtube.com/watch?v=-eZs8wjjGGE"
      ],
      [
        "Secure Infrastructures - CompTIA Security+ SY0-701 - 3.2",
        "Professor Messer (YouTube)",
        "Review how to design a safer network with zones and device placement, supporting the Domain 3 part of Lesson 3.",
        "Free",
        "https://www.youtube.com/watch?v=l64La1xYXL4"
      ],
      [
        "Identity and Access Management - CompTIA Security+ SY0-701 - 4.6",
        "Professor Messer (YouTube)",
        "Review identity and access management, including provisioning, single sign-on, and federation, for Domain 4: Security Operations.",
        "Free",
        "https://www.youtube.com/watch?v=ZoOyyqhptik"
      ],
      [
        "Security Policies - CompTIA Security+ SY0-701 - 5.1",
        "Professor Messer (YouTube)",
        "Learn key governance words like policies and guidelines, supporting Domain 5 and the governance terminology topic.",
        "Free",
        "https://www.youtube.com/watch?v=5kY9kvzeWjA"
      ]
    ],
    "labs": [
      "Take the Monday practice test and review every explanation",
      "Take the Tuesday practice test and review every explanation",
      "Take the Wednesday practice test and review every explanation",
      "Take the Thursday practice test and review every explanation",
      "Take the Friday practice test and review every explanation",
      "Record your score per domain and write a short study plan for your two weakest domains"
    ],
    "deliverable": {
      "title": "Domain Knowledge Checks Across the Exam Objectives",
      "description": "Complete a set of short knowledge checks that cover all five SY0-701 domains. The checks help you and your instructor see which domains are strong and which need more study before the mock exam.",
      "requirements": [
        "Answer knowledge-check questions for each of the five domains: General Security Concepts; Threats, Vulnerabilities, and Mitigations; Security Architecture; Security Operations; and Security Program Management and Oversight.",
        "Correctly use governance and risk terms, including policy, standard, procedure, and risk treatment.",
        "Record your score per domain so weak areas are visible.",
        "Write a short study plan targeting your two weakest domains before Week 12."
      ],
      "format": "A completed set of domain-by-domain knowledge checks plus a short written study plan."
    },
    "quiz": [
      {
        "q": "A company encrypts customer data so that only authorized staff can read it. Which part of the CIA triad does this mainly protect?",
        "opts": [
          "Confidentiality",
          "Integrity",
          "Availability",
          "Accountability"
        ],
        "ans": 0,
        "exp": "Encryption keeps data secret from those who should not see it, which supports confidentiality. Integrity is about accuracy, and availability is about access when needed."
      },
      {
        "q": "A door lock and a security guard are examples of which control category?",
        "opts": [
          "Technical",
          "Managerial",
          "Physical",
          "Operational"
        ],
        "ans": 2,
        "exp": "Locks, guards, and fences are physical controls because they protect people, equipment, and facilities in the real, physical world."
      },
      {
        "q": "An attacker sends an email pretending to be the IT department and asks employees to enter their passwords on a fake website. What type of attack is this?",
        "opts": [
          "SQL injection",
          "Phishing",
          "Denial-of-service",
          "On-path attack"
        ],
        "ans": 1,
        "exp": "This is phishing, a form of social engineering that uses fake messages to trick people into giving up credentials or clicking malicious links."
      },
      {
        "q": "An organization buys cyber insurance to handle the financial loss from a possible breach. Which risk treatment is this?",
        "opts": [
          "Risk acceptance",
          "Risk avoidance",
          "Risk transfer",
          "Risk mitigation"
        ],
        "ans": 2,
        "exp": "Buying insurance shifts the financial impact of the risk to another party, which is risk transfer. Mitigation reduces risk with controls, and acceptance means taking no action."
      },
      {
        "q": "Which statement best describes the difference between a policy and a standard?",
        "opts": [
          "A policy is a step-by-step guide, and a standard is optional advice",
          "A policy is a high-level rule, and a standard defines the specific required method to meet it",
          "A policy and a standard mean exactly the same thing",
          "A standard is a high-level rule, and a policy is the detailed steps"
        ],
        "ans": 1,
        "exp": "A policy states a high-level rule (what must happen), while a standard specifies the required setting or method to meet the policy. Procedures give the detailed steps."
      }
    ],
    "practiceSets": [
      {
        "label": "Domain Knowledge Check",
        "quiz": [
          {
            "q": "A company encrypts customer data so that only authorized staff can read it. Which part of the CIA triad does this mainly protect?",
            "opts": [
              "Confidentiality",
              "Integrity",
              "Availability",
              "Accountability"
            ],
            "ans": 0,
            "exp": "Encryption keeps data secret from those who should not see it, which supports confidentiality. Integrity is about accuracy, and availability is about access when needed."
          },
          {
            "q": "A door lock and a security guard are examples of which control category?",
            "opts": [
              "Technical",
              "Managerial",
              "Physical",
              "Operational"
            ],
            "ans": 2,
            "exp": "Locks, guards, and fences are physical controls because they protect people, equipment, and facilities in the real, physical world."
          },
          {
            "q": "An attacker sends an email pretending to be the IT department and asks employees to enter their passwords on a fake website. What type of attack is this?",
            "opts": [
              "SQL injection",
              "Phishing",
              "Denial-of-service",
              "On-path attack"
            ],
            "ans": 1,
            "exp": "This is phishing, a form of social engineering that uses fake messages to trick people into giving up credentials or clicking malicious links."
          },
          {
            "q": "An organization buys cyber insurance to handle the financial loss from a possible breach. Which risk treatment is this?",
            "opts": [
              "Risk acceptance",
              "Risk avoidance",
              "Risk transfer",
              "Risk mitigation"
            ],
            "ans": 2,
            "exp": "Buying insurance shifts the financial impact of the risk to another party, which is risk transfer. Mitigation reduces risk with controls, and acceptance means taking no action."
          },
          {
            "q": "Which statement best describes the difference between a policy and a standard?",
            "opts": [
              "A policy is a step-by-step guide, and a standard is optional advice",
              "A policy is a high-level rule, and a standard defines the specific required method to meet it",
              "A policy and a standard mean exactly the same thing",
              "A standard is a high-level rule, and a policy is the detailed steps"
            ],
            "ans": 1,
            "exp": "A policy states a high-level rule (what must happen), while a standard specifies the required setting or method to meet the policy. Procedures give the detailed steps."
          }
        ]
      },
      {
        "label": "Monday — Practice Test 1 · All domains",
        "quiz": [
          {
            "q": "Which part of the CIA triad is most directly protected when a company encrypts a laptop hard drive so that a thief cannot read the files?",
            "opts": [
              "Confidentiality",
              "Integrity",
              "Availability",
              "Non-repudiation"
            ],
            "ans": 0,
            "exp": "Encryption keeps data secret from anyone without the key, which protects confidentiality. Integrity is about preventing unauthorized changes, not secrecy."
          },
          {
            "q": "A security guard at the front desk who checks badges is an example of which type of security control?",
            "opts": [
              "Technical",
              "Managerial",
              "Compensating",
              "Physical"
            ],
            "ans": 3,
            "exp": "A guard is a physical control because it protects the facility using a person or object. Technical controls are enforced by technology such as firewalls."
          },
          {
            "q": "A written company policy that requires all staff to lock their screens when away is best described as which control type?",
            "opts": [
              "Technical",
              "Physical",
              "Managerial",
              "Operational"
            ],
            "ans": 2,
            "exp": "Policies and procedures created by management are managerial (administrative) controls. Technical controls use technology, and physical controls protect facilities."
          },
          {
            "q": "Which control function is designed to discourage an attacker before an attack happens, such as a warning sign that says the area is monitored?",
            "opts": [
              "Corrective",
              "Detective",
              "Recovery",
              "Deterrent"
            ],
            "ans": 3,
            "exp": "Deterrent controls aim to discourage an attacker from acting. Detective controls only identify events after they occur, and corrective controls fix damage."
          },
          {
            "q": "A backup system that restores lost files after a ransomware attack is functioning as which type of control?",
            "opts": [
              "Corrective",
              "Preventive",
              "Deterrent",
              "Directive"
            ],
            "ans": 0,
            "exp": "Corrective controls act after an incident to reduce or repair the damage. A preventive control would try to stop the ransomware from running in the first place."
          },
          {
            "q": "The concept of Zero Trust is best summarized by which phrase?",
            "opts": [
              "Trust but verify once at login",
              "Trust everything inside the firewall",
              "Never trust, always verify",
              "Trust based on network location only"
            ],
            "ans": 2,
            "exp": "Zero Trust assumes no user or device is trusted by default and verifies every request. Trusting everything inside the firewall is the older perimeter model that Zero Trust replaces."
          },
          {
            "q": "An attacker sends an email that appears to come from the company CEO, urgently asking an employee to buy gift cards. What type of attack is this?",
            "opts": [
              "Vishing",
              "Watering hole",
              "Phishing",
              "Tailgating"
            ],
            "ans": 2,
            "exp": "This is phishing because it uses a fraudulent email to trick the victim. Vishing uses voice or phone calls, not email."
          },
          {
            "q": "A criminal calls an employee pretending to be from the IT help desk and asks for the employee's password. Which social engineering method is this?",
            "opts": [
              "Vishing",
              "Smishing",
              "Pharming",
              "Shoulder surfing"
            ],
            "ans": 0,
            "exp": "Vishing is voice phishing performed over a phone call. Smishing uses text messages, and pharming redirects web traffic."
          },
          {
            "q": "Which malware type disguises itself as a useful program but secretly performs malicious actions once installed?",
            "opts": [
              "Worm",
              "Rootkit",
              "Logic bomb",
              "Trojan"
            ],
            "ans": 3,
            "exp": "A Trojan hides malicious behavior inside something that looks legitimate. A worm spreads by itself without needing to look like a useful program."
          },
          {
            "q": "Malware that self-replicates and spreads across a network without any user action is called a:",
            "opts": [
              "Virus",
              "Trojan",
              "Keylogger",
              "Worm"
            ],
            "ans": 3,
            "exp": "A worm spreads on its own across networks. A virus usually needs a user to run an infected file to spread."
          },
          {
            "q": "Which type of attacker is typically motivated by political or social causes rather than money?",
            "opts": [
              "Organized crime",
              "Insider threat",
              "Hacktivist",
              "Script kiddie"
            ],
            "ans": 2,
            "exp": "Hacktivists attack to promote a political or social message. Organized crime groups are usually motivated by financial gain."
          },
          {
            "q": "An attacker inserts malicious SQL statements into a web form to read data from the backend database. This attack is known as:",
            "opts": [
              "Cross-site scripting",
              "Buffer overflow",
              "Directory traversal",
              "SQL injection"
            ],
            "ans": 3,
            "exp": "SQL injection sends crafted database commands through input fields. Cross-site scripting injects scripts that run in other users' browsers, not the database."
          },
          {
            "q": "A web application stores user input and later displays it to other users without filtering, allowing a script to run in their browsers. This is:",
            "opts": [
              "SQL injection",
              "CSRF",
              "Cross-site scripting (XSS)",
              "Privilege escalation"
            ],
            "ans": 2,
            "exp": "Cross-site scripting runs attacker-supplied scripts in victims' browsers. SQL injection targets the database rather than other users' browsers."
          },
          {
            "q": "A flood of traffic from thousands of compromised computers overwhelms a website so real users cannot reach it. This is a:",
            "opts": [
              "DDoS attack",
              "On-path attack",
              "Replay attack",
              "DNS poisoning"
            ],
            "ans": 0,
            "exp": "A Distributed Denial-of-Service attack uses many systems to overwhelm a target. An on-path attack instead secretly intercepts communication between two parties."
          },
          {
            "q": "An attacker secretly positions themselves between two communicating parties to read and alter their messages. This is best described as:",
            "opts": [
              "On-path (man-in-the-middle) attack",
              "Denial-of-service attack",
              "Brute-force attack",
              "Rainbow table attack"
            ],
            "ans": 0,
            "exp": "An on-path attack intercepts and can modify traffic between two parties. Denial-of-service only disrupts availability rather than reading messages."
          },
          {
            "q": "Which term describes a security flaw that is unknown to the vendor and has no available patch?",
            "opts": [
              "Legacy vulnerability",
              "Zero-day vulnerability",
              "Misconfiguration",
              "End-of-life risk"
            ],
            "ans": 1,
            "exp": "A zero-day is a flaw with no vendor patch because it is not yet known or fixed. A misconfiguration is a settings mistake that can usually be corrected."
          },
          {
            "q": "Which of the following is the best example of a strong, phishing-resistant multifactor authentication factor?",
            "opts": [
              "A password and a security question",
              "Two different passwords",
              "A hardware security key using FIDO2",
              "A username and password"
            ],
            "ans": 2,
            "exp": "A FIDO2 hardware key is a possession factor that resists phishing. Two passwords or a password plus a security question are both knowledge factors, so they are not true multifactor."
          },
          {
            "q": "A user provides a fingerprint and a one-time code from a phone app to log in. Which two authentication factors are being used?",
            "opts": [
              "Something you know and something you have",
              "Something you are and something you know",
              "Two things you have",
              "Something you are and something you have"
            ],
            "ans": 3,
            "exp": "A fingerprint is something you are (biometric) and the phone code is something you have (possession). Neither factor is a password, so no knowledge factor is used."
          },
          {
            "q": "Which encryption approach uses the same single key to both encrypt and decrypt data?",
            "opts": [
              "Asymmetric encryption",
              "Symmetric encryption",
              "Hashing",
              "Digital signatures"
            ],
            "ans": 1,
            "exp": "Symmetric encryption uses one shared secret key for both operations. Asymmetric encryption uses a public and private key pair instead."
          },
          {
            "q": "Which algorithm is a widely used symmetric encryption standard?",
            "opts": [
              "RSA",
              "AES",
              "SHA-256",
              "ECC"
            ],
            "ans": 1,
            "exp": "AES is a common symmetric block cipher. RSA and ECC are asymmetric, and SHA-256 is a hashing algorithm, not encryption."
          },
          {
            "q": "What is the main purpose of a cryptographic hash function such as SHA-256?",
            "opts": [
              "To encrypt data so it can be decrypted later",
              "To exchange symmetric keys securely",
              "To compress files for storage",
              "To verify data integrity by producing a fixed-length digest"
            ],
            "ans": 3,
            "exp": "A hash produces a fixed-length value used to verify that data has not changed. Hashing is one-way and is not meant to be reversed like encryption."
          },
          {
            "q": "In public key infrastructure (PKI), which key is used to verify a digital signature created by the sender?",
            "opts": [
              "The sender's private key",
              "The sender's public key",
              "The receiver's private key",
              "A shared symmetric key"
            ],
            "ans": 1,
            "exp": "A signature is created with the sender's private key and verified with their public key. The private key is kept secret and is never shared for verification."
          },
          {
            "q": "A digital signature primarily provides which security benefits?",
            "opts": [
              "Integrity, authentication, and non-repudiation",
              "Confidentiality and availability",
              "Only confidentiality",
              "Only availability"
            ],
            "ans": 0,
            "exp": "Digital signatures prove who sent the data, that it was not changed, and that the sender cannot deny it. They do not by themselves keep the message secret."
          },
          {
            "q": "Which device is used to separate an internal network from the internet and filter traffic based on rules?",
            "opts": [
              "Switch",
              "Firewall",
              "Access point",
              "Load balancer"
            ],
            "ans": 1,
            "exp": "A firewall filters network traffic according to security rules. A switch only forwards frames within a local network and does not filter by policy."
          },
          {
            "q": "Placing public-facing web servers in a separate network zone between the internet and the internal LAN is an example of:",
            "opts": [
              "A screened subnet (DMZ)",
              "A VPN tunnel",
              "Port mirroring",
              "MAC filtering"
            ],
            "ans": 0,
            "exp": "A screened subnet, also called a DMZ, isolates public servers from the trusted internal network. A VPN tunnel instead encrypts remote connections."
          },
          {
            "q": "Dividing a network into smaller isolated sections to limit how far an attacker can move is called:",
            "opts": [
              "Load balancing",
              "Port forwarding",
              "Network segmentation",
              "NAT"
            ],
            "ans": 2,
            "exp": "Segmentation separates the network so a breach in one area cannot easily reach others. Load balancing spreads traffic across servers for performance."
          },
          {
            "q": "Which protocol should replace Telnet to allow secure, encrypted remote command-line access?",
            "opts": [
              "FTP",
              "HTTP",
              "SSH",
              "SNMPv1"
            ],
            "ans": 2,
            "exp": "SSH encrypts remote administrative sessions, unlike Telnet which sends data in clear text. FTP and HTTP are also unencrypted by default."
          },
          {
            "q": "Which protocol adds encryption to web traffic so that data between a browser and website is protected?",
            "opts": [
              "HTTP",
              "SMTP",
              "TLS/HTTPS",
              "DNS"
            ],
            "ans": 2,
            "exp": "TLS provides the encryption used by HTTPS to protect web traffic. Plain HTTP sends data in clear text with no protection."
          },
          {
            "q": "A remote worker needs a secure encrypted connection to the company network over the public internet. Which technology provides this?",
            "opts": [
              "VPN",
              "VLAN",
              "Proxy",
              "DHCP"
            ],
            "ans": 0,
            "exp": "A VPN creates an encrypted tunnel across the internet to the corporate network. A VLAN only segments traffic within a local switched network."
          },
          {
            "q": "A security analyst reviews logs from many systems in one place to detect suspicious patterns. Which tool collects and correlates these logs?",
            "opts": [
              "VPN",
              "SIEM",
              "IPS",
              "DLP"
            ],
            "ans": 1,
            "exp": "A SIEM aggregates and correlates log data from many sources for analysis and alerts. An IPS blocks attacks but does not centralize all log analysis."
          },
          {
            "q": "What is the correct order of the first three incident response phases according to common frameworks?",
            "opts": [
              "Detection, Preparation, Containment",
              "Preparation, Detection/Analysis, Containment",
              "Containment, Preparation, Recovery",
              "Recovery, Preparation, Detection"
            ],
            "ans": 1,
            "exp": "Incident response begins with preparation, then detection and analysis, then containment. Preparation must come first so the team is ready before an incident occurs."
          },
          {
            "q": "During an incident, the team isolates an infected computer from the network to stop the malware from spreading. Which phase is this?",
            "opts": [
              "Containment",
              "Preparation",
              "Lessons learned",
              "Recovery"
            ],
            "ans": 0,
            "exp": "Isolating affected systems to limit spread is containment. Recovery comes later, when systems are restored to normal operation."
          },
          {
            "q": "In digital forensics, which principle requires documenting everyone who handled evidence and when?",
            "opts": [
              "Legal hold",
              "Order of volatility",
              "Chain of custody",
              "Data minimization"
            ],
            "ans": 2,
            "exp": "Chain of custody records who handled evidence and when, keeping it admissible. Order of volatility instead describes which data to collect first because it disappears quickly."
          },
          {
            "q": "When collecting evidence, which data should generally be captured first because it is the most volatile?",
            "opts": [
              "Contents of RAM (memory)",
              "Data on a backup tape",
              "Files on a hard disk",
              "Archived email"
            ],
            "ans": 0,
            "exp": "RAM is highly volatile and lost when power is removed, so it is collected first. Data on disks and backups is far more persistent."
          },
          {
            "q": "A company keeps three copies of its data, on two different media types, with one copy stored offsite. This describes the:",
            "opts": [
              "RAID 5 configuration",
              "3-2-1 backup rule",
              "Full-incremental cycle",
              "Hot site strategy"
            ],
            "ans": 1,
            "exp": "The 3-2-1 rule means three copies, two media types, and one offsite. RAID is about disk redundancy within one system, not full backup strategy."
          },
          {
            "q": "Which recovery site can take over operations almost immediately because it is fully equipped and running?",
            "opts": [
              "Cold site",
              "Hot site",
              "Warm site",
              "Mobile site"
            ],
            "ans": 1,
            "exp": "A hot site is fully operational and can take over quickly. A cold site has space and power but no ready equipment, so recovery is slow."
          },
          {
            "q": "In a shared responsibility model for cloud services, which task is almost always the customer's responsibility?",
            "opts": [
              "Securing the physical data center",
              "Properly configuring their own data and access controls",
              "Maintaining the hypervisor hardware",
              "Replacing failed disks in the cloud"
            ],
            "ans": 1,
            "exp": "Customers are responsible for how they configure their data, identities, and access. The provider handles the physical facility and underlying hardware."
          },
          {
            "q": "Which wireless security standard is currently the most secure choice for a modern Wi-Fi network?",
            "opts": [
              "WEP",
              "WPA",
              "WPA2",
              "WPA3"
            ],
            "ans": 3,
            "exp": "WPA3 is the newest and strongest Wi-Fi security standard. WEP is badly broken and should never be used."
          },
          {
            "q": "A company labels documents as Public, Internal, Confidential, and Restricted. This practice is called:",
            "opts": [
              "Data classification",
              "Data masking",
              "Tokenization",
              "Data retention"
            ],
            "ans": 0,
            "exp": "Assigning sensitivity labels to data is data classification. Data masking instead hides parts of data values, such as showing only the last four digits."
          },
          {
            "q": "Which document is a high-level statement of management intent, such as 'All data must be protected according to its classification'?",
            "opts": [
              "Procedure",
              "Standard",
              "Policy",
              "Guideline"
            ],
            "ans": 2,
            "exp": "A policy is a high-level statement of intent from management. A procedure gives detailed step-by-step instructions instead."
          },
          {
            "q": "Which document provides mandatory, specific requirements, such as 'Passwords must be at least 14 characters'?",
            "opts": [
              "Policy",
              "Standard",
              "Guideline",
              "Framework"
            ],
            "ans": 1,
            "exp": "A standard sets mandatory, specific requirements that support a policy. A guideline is only a recommendation, not a mandatory rule."
          },
          {
            "q": "A company decides to buy cyber insurance to reduce the financial impact of a possible breach. This is an example of which risk treatment?",
            "opts": [
              "Risk avoidance",
              "Risk acceptance",
              "Risk mitigation",
              "Risk transference"
            ],
            "ans": 3,
            "exp": "Buying insurance shifts financial risk to another party, which is risk transference. Mitigation would instead reduce the likelihood or impact directly."
          },
          {
            "q": "The amount of risk an organization is willing to accept in pursuit of its goals is called its:",
            "opts": [
              "Residual risk",
              "Inherent risk",
              "Risk register",
              "Risk appetite"
            ],
            "ans": 3,
            "exp": "Risk appetite is the level of risk an organization is willing to accept. Residual risk is what remains after controls are applied."
          },
          {
            "q": "After applying security controls, the risk that still remains is known as:",
            "opts": [
              "Inherent risk",
              "Residual risk",
              "Total risk",
              "Transferred risk"
            ],
            "ans": 1,
            "exp": "Residual risk is what is left after controls are in place. Inherent risk is the risk before any controls are applied."
          },
          {
            "q": "Before signing a contract, a company reviews a new supplier's security practices and finances. This process is called:",
            "opts": [
              "Change management",
              "Data classification",
              "Due diligence",
              "Penetration testing"
            ],
            "ans": 2,
            "exp": "Due diligence is the investigation of a vendor before entering an agreement. Penetration testing is a technical attack simulation, not a vendor review."
          },
          {
            "q": "Which agreement defines the expected level of service, such as guaranteed uptime, between a provider and a customer?",
            "opts": [
              "SLA",
              "MOU",
              "NDA",
              "BPA"
            ],
            "ans": 0,
            "exp": "A Service Level Agreement defines measurable service expectations like uptime. An NDA instead protects confidential information shared between parties."
          },
          {
            "q": "An independent third party reviews a company's controls to confirm they meet a required standard. This is best described as a(n):",
            "opts": [
              "Backup",
              "Penetration test",
              "Tabletop exercise",
              "Audit"
            ],
            "ans": 3,
            "exp": "An audit is a formal review confirming compliance with a standard. A penetration test instead tries to exploit weaknesses to prove they exist."
          },
          {
            "q": "Which privacy role decides why and how personal data is collected and processed?",
            "opts": [
              "Data controller",
              "Data processor",
              "Data custodian",
              "Data subject"
            ],
            "ans": 0,
            "exp": "The data controller determines the purpose and means of processing personal data. A processor only handles data on behalf of the controller."
          },
          {
            "q": "A user's access rights should be limited to only what is required to perform their job. This principle is called:",
            "opts": [
              "Separation of duties",
              "Least privilege",
              "Defense in depth",
              "Implicit deny"
            ],
            "ans": 1,
            "exp": "Least privilege grants only the access needed for a job. Separation of duties instead splits a task among multiple people to prevent fraud."
          },
          {
            "q": "Requiring that no single employee can both request and approve the same payment is an example of:",
            "opts": [
              "Least privilege",
              "Job rotation",
              "Mandatory vacation",
              "Separation of duties"
            ],
            "ans": 3,
            "exp": "Separation of duties splits a sensitive task so no one person controls it all. Least privilege limits access level but does not by itself split a task."
          }
        ]
      },
      {
        "label": "Tuesday — Practice Test 2 · All domains",
        "quiz": [
          {
            "q": "A website stays online and responsive even during a busy sale. Which part of the CIA triad does this most directly support?",
            "opts": [
              "Confidentiality",
              "Availability",
              "Integrity",
              "Accountability"
            ],
            "ans": 1,
            "exp": "Availability means data and services are accessible when needed. Confidentiality and integrity are about secrecy and correctness, not uptime."
          },
          {
            "q": "A file hash is checked before and after transfer to confirm the file was not altered. Which security goal is being verified?",
            "opts": [
              "Availability",
              "Confidentiality",
              "Authentication",
              "Integrity"
            ],
            "ans": 3,
            "exp": "Comparing hashes confirms the data has not changed, which is integrity. Confidentiality would require encryption, not hashing."
          },
          {
            "q": "Which control category includes items enforced by technology, such as firewalls and encryption?",
            "opts": [
              "Technical",
              "Managerial",
              "Operational",
              "Physical"
            ],
            "ans": 0,
            "exp": "Technical controls are implemented through technology. Managerial controls are policies and processes set by management."
          },
          {
            "q": "A locked server room door that a badge unlocks combines which two control categories?",
            "opts": [
              "Managerial and operational",
              "Physical and directive",
              "Detective and corrective",
              "Technical and physical"
            ],
            "ans": 3,
            "exp": "The badge reader is a technical control and the locked door is a physical control. Together they protect the server room using both technology and a physical barrier."
          },
          {
            "q": "A control that only records that an event happened, such as a log entry or camera footage, is which functional type?",
            "opts": [
              "Preventive",
              "Detective",
              "Deterrent",
              "Corrective"
            ],
            "ans": 1,
            "exp": "Detective controls identify and record events after they occur. Preventive controls instead try to stop the event from happening."
          },
          {
            "q": "In a Zero Trust architecture, the component that decides whether to grant access to a request is often called the:",
            "opts": [
              "Policy enforcement point",
              "Trust anchor",
              "Root certificate",
              "Policy decision point"
            ],
            "ans": 3,
            "exp": "The policy decision point evaluates the request and decides whether to allow it. The policy enforcement point carries out that decision on the traffic."
          },
          {
            "q": "Employees receive a text message with a link claiming their bank account is locked. What type of attack is this?",
            "opts": [
              "Vishing",
              "Smishing",
              "Whaling",
              "Pretexting"
            ],
            "ans": 1,
            "exp": "Smishing is phishing carried out through SMS text messages. Vishing uses voice calls instead of text."
          },
          {
            "q": "An attacker follows an employee through a secure door before it closes, without using a badge. This physical attack is called:",
            "opts": [
              "Tailgating",
              "Shoulder surfing",
              "Dumpster diving",
              "Pharming"
            ],
            "ans": 0,
            "exp": "Tailgating is following an authorized person through a secure entrance. Shoulder surfing instead means secretly watching someone enter credentials."
          },
          {
            "q": "Which social engineering technique relies on inventing a believable false story to gain a victim's trust?",
            "opts": [
              "Brute forcing",
              "Pretexting",
              "Fuzzing",
              "Sideloading"
            ],
            "ans": 1,
            "exp": "Pretexting uses a fabricated scenario to persuade the victim to cooperate. Brute forcing is a technical password-guessing attack, not social engineering."
          },
          {
            "q": "Software that secretly records every keystroke a user types is known as a:",
            "opts": [
              "Rootkit",
              "Worm",
              "Adware",
              "Keylogger"
            ],
            "ans": 3,
            "exp": "A keylogger captures keystrokes, often to steal passwords. A rootkit instead hides deep in the system to maintain stealthy control."
          },
          {
            "q": "Malware that hides its presence by operating at a very low level of the operating system, making it hard to detect, is a:",
            "opts": [
              "Trojan",
              "Ransomware",
              "Rootkit",
              "Spyware"
            ],
            "ans": 2,
            "exp": "A rootkit conceals itself and other malware at a deep system level. Ransomware instead announces itself by encrypting files and demanding payment."
          },
          {
            "q": "Malicious code that stays dormant until a specific date or condition triggers it is called a:",
            "opts": [
              "Logic bomb",
              "Worm",
              "Botnet",
              "Backdoor"
            ],
            "ans": 0,
            "exp": "A logic bomb activates when a defined condition is met. A backdoor instead provides ongoing hidden access at any time."
          },
          {
            "q": "Which threat actor typically has the greatest resources and is often associated with a government?",
            "opts": [
              "Script kiddie",
              "Nation-state / APT",
              "Hacktivist",
              "Insider"
            ],
            "ans": 1,
            "exp": "Nation-state actors, often called advanced persistent threats, have the most funding and skill. Script kiddies have little skill and use existing tools."
          },
          {
            "q": "A disgruntled employee with legitimate network access copies confidential files before quitting. This is an example of a(n):",
            "opts": [
              "External threat",
              "Supply chain attack",
              "Zero-day",
              "Insider threat"
            ],
            "ans": 3,
            "exp": "An insider threat comes from someone with authorized access, such as an employee. A supply chain attack instead targets a trusted vendor or component."
          },
          {
            "q": "An attacker enters more data than a program expects, overwriting adjacent memory to run malicious code. This is a:",
            "opts": [
              "Buffer overflow",
              "Cross-site scripting",
              "Race condition",
              "SQL injection"
            ],
            "ans": 0,
            "exp": "A buffer overflow writes beyond a buffer's boundary into other memory. SQL injection instead targets database queries through input fields."
          },
          {
            "q": "A user clicks a hidden button on a malicious page that performs an action on a site where they are logged in, without their knowledge. This is:",
            "opts": [
              "SQL injection",
              "Cross-site request forgery (CSRF)",
              "Privilege escalation",
              "Session replay"
            ],
            "ans": 1,
            "exp": "CSRF tricks a logged-in user's browser into sending an unwanted request. Privilege escalation instead raises an attacker's existing access level."
          },
          {
            "q": "Attackers capture a valid login token and reuse it later to impersonate the user. This is a:",
            "opts": [
              "Brute-force attack",
              "Dictionary attack",
              "Replay attack",
              "Downgrade attack"
            ],
            "ans": 2,
            "exp": "A replay attack reuses captured valid data such as a token. A brute-force attack instead guesses credentials by trying many combinations."
          },
          {
            "q": "A program that automatically tries millions of password combinations until one works is performing a:",
            "opts": [
              "Phishing attack",
              "On-path attack",
              "Watering hole attack",
              "Brute-force attack"
            ],
            "ans": 3,
            "exp": "A brute-force attack systematically tries many passwords until it succeeds. Phishing instead tricks the user into revealing the password."
          },
          {
            "q": "Which encryption type uses a matched public and private key pair?",
            "opts": [
              "Symmetric encryption",
              "Asymmetric encryption",
              "Hashing",
              "Stream cipher"
            ],
            "ans": 1,
            "exp": "Asymmetric encryption uses a public and private key pair. Symmetric encryption uses a single shared key for both directions."
          },
          {
            "q": "Why is asymmetric encryption often used to exchange a symmetric key at the start of a secure session?",
            "opts": [
              "Symmetric encryption cannot encrypt data",
              "Asymmetric encryption solves the problem of sharing a secret key safely",
              "Symmetric keys never expire",
              "Asymmetric encryption is faster for large files"
            ],
            "ans": 1,
            "exp": "Asymmetric encryption lets two parties agree on a secret key without exposing it. Symmetric encryption is actually faster for bulk data, so it is used after the key is exchanged."
          },
          {
            "q": "Adding a unique random value to each password before hashing it, to defeat precomputed attacks, is called:",
            "opts": [
              "Salting",
              "Peppering",
              "Stretching",
              "Encoding"
            ],
            "ans": 0,
            "exp": "A salt is a unique random value added before hashing so identical passwords hash differently. This defeats rainbow tables of precomputed hashes."
          },
          {
            "q": "Which entity in PKI issues and digitally signs certificates to vouch for their owners' identities?",
            "opts": [
              "Registration authority",
              "Key escrow agent",
              "Certificate authority (CA)",
              "Certificate holder"
            ],
            "ans": 2,
            "exp": "A certificate authority issues and signs digital certificates. A registration authority only verifies identities before the CA issues the certificate."
          },
          {
            "q": "How can a client quickly check whether a certificate has been revoked before its expiry date?",
            "opts": [
              "By checking a CRL or an OCSP responder",
              "By reading the certificate serial number",
              "By verifying the file size",
              "By re-hashing the private key"
            ],
            "ans": 0,
            "exp": "Revocation is checked using a Certificate Revocation List or OCSP. The serial number alone does not indicate revocation status."
          },
          {
            "q": "A load balancer placed in front of several web servers primarily improves which security goal?",
            "opts": [
              "Confidentiality",
              "Availability",
              "Integrity",
              "Non-repudiation"
            ],
            "ans": 1,
            "exp": "A load balancer spreads traffic across servers so service stays available under load. It is not primarily about secrecy or data correctness."
          },
          {
            "q": "Which device monitors network traffic and can actively block detected attacks in real time?",
            "opts": [
              "IDS",
              "Proxy",
              "Hub",
              "IPS"
            ],
            "ans": 3,
            "exp": "An intrusion prevention system detects and blocks attacks inline. An intrusion detection system only alerts and does not block."
          },
          {
            "q": "Grouping devices into logical networks on the same physical switch, so their traffic is separated, is done with:",
            "opts": [
              "VLANs",
              "VPNs",
              "NAT",
              "DHCP"
            ],
            "ans": 0,
            "exp": "VLANs logically separate traffic on shared switching hardware. A VPN instead encrypts connections across untrusted networks."
          },
          {
            "q": "Which secure protocol should be used instead of FTP to transfer files with encryption over SSH?",
            "opts": [
              "TFTP",
              "SFTP",
              "HTTP",
              "SNMP"
            ],
            "ans": 1,
            "exp": "SFTP transfers files securely over an SSH connection. Plain FTP and TFTP send data without encryption."
          },
          {
            "q": "Which port and protocol combination is used by HTTPS?",
            "opts": [
              "TCP port 80",
              "UDP port 53",
              "TCP port 23",
              "TCP port 443"
            ],
            "ans": 3,
            "exp": "HTTPS uses TCP port 443. Port 80 is plain HTTP and port 23 is Telnet."
          },
          {
            "q": "A company wants remote staff to reach only specific internal applications, not the whole network, over an encrypted browser session. Which solution fits best?",
            "opts": [
              "Clientless SSL/TLS VPN to specific apps",
              "Full tunnel IPsec VPN",
              "Opening RDP to the internet",
              "A site-to-site VPN"
            ],
            "ans": 0,
            "exp": "A clientless TLS VPN can publish specific applications through the browser. A full site-to-site VPN would connect entire networks, which is broader than needed."
          },
          {
            "q": "A DLP (data loss prevention) system is designed primarily to:",
            "opts": [
              "Prevent sensitive data from leaving the organization",
              "Encrypt all network traffic",
              "Balance server load",
              "Detect malware signatures"
            ],
            "ans": 0,
            "exp": "DLP monitors and blocks unauthorized movement of sensitive data. It is not a load balancer or primarily an antivirus tool."
          },
          {
            "q": "A SIEM generates an alert for a login that never actually happened maliciously. This is an example of a:",
            "opts": [
              "True positive",
              "True negative",
              "False negative",
              "False positive"
            ],
            "ans": 3,
            "exp": "A false positive is an alert for activity that is not actually malicious. A false negative would be missing a real attack."
          },
          {
            "q": "During the 'lessons learned' phase of incident response, the main goal is to:",
            "opts": [
              "Rebuild affected servers",
              "Identify improvements to prevent similar incidents",
              "Contain the malware",
              "Notify law enforcement"
            ],
            "ans": 1,
            "exp": "Lessons learned reviews the incident to improve future defenses and response. Rebuilding servers happens during recovery, earlier in the process."
          },
          {
            "q": "A tabletop exercise for incident response is best described as:",
            "opts": [
              "A live attack against production systems",
              "A full data restore from backup",
              "A discussion-based walkthrough of a simulated scenario",
              "A vulnerability scan of all hosts"
            ],
            "ans": 2,
            "exp": "A tabletop exercise is a discussion-based rehearsal of how the team would respond. It does not involve actually attacking or restoring live systems."
          },
          {
            "q": "Which forensic step ensures that an original drive is preserved unchanged while investigators work on a copy?",
            "opts": [
              "Deleting temporary files first",
              "Running the drive in the live system",
              "Creating a bit-for-bit forensic image",
              "Reformatting the copy"
            ],
            "ans": 2,
            "exp": "A bit-for-bit image lets investigators analyze a copy while preserving the original. Working on the live original could alter evidence."
          },
          {
            "q": "The maximum amount of data, measured in time, that an organization can afford to lose in a disaster is the:",
            "opts": [
              "RTO (recovery time objective)",
              "MTBF",
              "RPO (recovery point objective)",
              "MTTR"
            ],
            "ans": 2,
            "exp": "The RPO defines how much data loss, in time, is acceptable and sets backup frequency. The RTO instead defines how quickly service must be restored."
          },
          {
            "q": "The target time within which a system must be restored after an outage is the:",
            "opts": [
              "RTO",
              "RPO",
              "MTTF",
              "SLE"
            ],
            "ans": 0,
            "exp": "The recovery time objective is the target time to restore a system. The recovery point objective instead measures acceptable data loss."
          },
          {
            "q": "A full backup was taken Sunday, and incremental backups run each night. To fully restore on Thursday morning, you need:",
            "opts": [
              "Sunday's full plus every incremental through Wednesday",
              "Only Wednesday's incremental",
              "Only Sunday's full",
              "Sunday's full plus Wednesday's incremental only"
            ],
            "ans": 0,
            "exp": "Incremental backups only capture changes since the last backup, so all of them are needed with the full. A differential backup, by contrast, would need only the full plus the latest one."
          },
          {
            "q": "In cloud computing, which model gives the customer the most control over the operating system and applications?",
            "opts": [
              "Software as a Service (SaaS)",
              "Platform as a Service (PaaS)",
              "Function as a Service",
              "Infrastructure as a Service (IaaS)"
            ],
            "ans": 3,
            "exp": "IaaS provides virtual machines where the customer manages the OS and apps. SaaS gives the least control because the provider manages nearly everything."
          },
          {
            "q": "Which technology lets one physical server run several isolated operating systems at once?",
            "opts": [
              "Containerization",
              "Clustering",
              "Virtualization",
              "Load balancing"
            ],
            "ans": 2,
            "exp": "Virtualization uses a hypervisor to run multiple isolated VMs on one host. Containerization instead shares one OS kernel among lightweight containers."
          },
          {
            "q": "A rogue access point set up to trick users into connecting is known as a(n):",
            "opts": [
              "Captive portal",
              "Repeater",
              "Evil twin",
              "Wi-Fi analyzer"
            ],
            "ans": 2,
            "exp": "An evil twin is a fake access point that mimics a legitimate one. A captive portal is instead a login page for legitimate guest networks."
          },
          {
            "q": "Replacing a credit card number with a random token that has no mathematical link to the original value is called:",
            "opts": [
              "Encryption",
              "Hashing",
              "Tokenization",
              "Masking"
            ],
            "ans": 2,
            "exp": "Tokenization swaps sensitive data for an unrelated token stored in a secure vault. Encryption instead transforms data with a key that can reverse it."
          },
          {
            "q": "Which document gives recommended best practices that are not mandatory?",
            "opts": [
              "Standard",
              "Guideline",
              "Policy",
              "Regulation"
            ],
            "ans": 1,
            "exp": "A guideline offers optional recommendations. A standard, by contrast, states mandatory requirements."
          },
          {
            "q": "A company decides to stop offering a risky online feature entirely rather than secure it. This risk treatment is:",
            "opts": [
              "Risk mitigation",
              "Risk avoidance",
              "Risk acceptance",
              "Risk transference"
            ],
            "ans": 1,
            "exp": "Ending the activity to eliminate the risk is risk avoidance. Mitigation would instead keep the activity but reduce the risk."
          },
          {
            "q": "A central document listing identified risks, their owners, and treatment plans is called a:",
            "opts": [
              "Incident log",
              "Asset inventory",
              "Risk register",
              "Change log"
            ],
            "ans": 2,
            "exp": "A risk register tracks identified risks and how they are being handled. An asset inventory instead lists hardware and software, not risks."
          },
          {
            "q": "Which quantitative value represents the expected monetary loss from a single occurrence of a risk event?",
            "opts": [
              "ALE (annualized loss expectancy)",
              "ARO (annualized rate of occurrence)",
              "ROI",
              "SLE (single loss expectancy)"
            ],
            "ans": 3,
            "exp": "The single loss expectancy is the expected loss from one event. The ALE multiplies the SLE by how often the event is expected each year."
          },
          {
            "q": "A contract clause preventing a vendor from disclosing your confidential information is typically found in a(n):",
            "opts": [
              "SLA",
              "SOW",
              "NDA",
              "MOU"
            ],
            "ans": 2,
            "exp": "A non-disclosure agreement protects confidential information from being shared. An SLA instead defines service performance levels."
          },
          {
            "q": "A regulation such as GDPR that a company must follow because it is legally required is an example of:",
            "opts": [
              "A compliance obligation",
              "A voluntary framework",
              "A guideline",
              "A best practice"
            ],
            "ans": 0,
            "exp": "Legally required rules create compliance obligations. A framework like NIST CSF is voluntary guidance, not a legal mandate by itself."
          },
          {
            "q": "Rotating employees through different jobs partly to detect fraud and reduce dependence on one person is called:",
            "opts": [
              "Job rotation",
              "Mandatory vacation",
              "Least privilege",
              "Onboarding"
            ],
            "ans": 0,
            "exp": "Job rotation moves staff between roles, which can expose hidden misuse. Mandatory vacation is a related but separate control that forces time away."
          },
          {
            "q": "Single sign-on (SSO) primarily benefits users by:",
            "opts": [
              "Requiring a new password for every application",
              "Removing the need for any authentication",
              "Encrypting all stored files",
              "Allowing one authentication to access multiple systems"
            ],
            "ans": 3,
            "exp": "SSO lets a user authenticate once and reach many linked systems. It does not remove authentication; it centralizes it."
          },
          {
            "q": "In the AAA framework, which step confirms who a user claims to be?",
            "opts": [
              "Authorization",
              "Accounting",
              "Authentication",
              "Auditing"
            ],
            "ans": 2,
            "exp": "Authentication verifies identity, such as by checking a password or key. Authorization then decides what that verified user is allowed to do."
          }
        ]
      },
      {
        "label": "Wednesday — Practice Test 3 · All domains",
        "quiz": [
          {
            "q": "Which term describes proving that a specific user performed an action so they cannot later deny it?",
            "opts": [
              "Non-repudiation",
              "Confidentiality",
              "Availability",
              "Redundancy"
            ],
            "ans": 0,
            "exp": "Non-repudiation prevents a person from denying an action they took, often using digital signatures. Availability instead concerns access to resources."
          },
          {
            "q": "A control that instructs or guides behavior, such as a policy telling staff how to handle data, is which functional type?",
            "opts": [
              "Detective",
              "Directive",
              "Corrective",
              "Compensating"
            ],
            "ans": 1,
            "exp": "Directive controls guide or mandate behavior, often through policy. Compensating controls instead substitute for a primary control that is not feasible."
          },
          {
            "q": "When a required control cannot be used, an alternative control that provides similar protection is called a:",
            "opts": [
              "Compensating control",
              "Deterrent control",
              "Detective control",
              "Physical control"
            ],
            "ans": 0,
            "exp": "A compensating control stands in for a control that cannot be implemented. A deterrent control instead simply discourages an attacker."
          },
          {
            "q": "Which principle recommends using multiple, layered controls so that if one fails, others still protect the asset?",
            "opts": [
              "Least privilege",
              "Defense in depth",
              "Implicit deny",
              "Single point of failure"
            ],
            "ans": 1,
            "exp": "Defense in depth uses layered controls so one failure does not cause a breach. Least privilege is about limiting access, not layering defenses."
          },
          {
            "q": "A default firewall rule that blocks any traffic not specifically allowed follows the principle of:",
            "opts": [
              "Implicit deny",
              "Explicit allow",
              "Open by default",
              "Fail open"
            ],
            "ans": 0,
            "exp": "Implicit deny blocks anything not expressly permitted. Fail open, by contrast, would allow traffic when a control fails, which is riskier."
          },
          {
            "q": "A gap analysis in a security program is used to:",
            "opts": [
              "Measure network bandwidth",
              "Compare the current state against a desired standard to find missing controls",
              "Encrypt sensitive files",
              "Recover deleted data"
            ],
            "ans": 1,
            "exp": "A gap analysis compares where you are to where you should be to find shortfalls. It is a planning and assessment activity, not a technical recovery task."
          },
          {
            "q": "An attacker compromises a website that a target group frequently visits, hoping to infect those visitors. This is a:",
            "opts": [
              "Watering hole attack",
              "Whaling attack",
              "Vishing attack",
              "Replay attack"
            ],
            "ans": 0,
            "exp": "A watering hole attack infects a site the target audience trusts and visits. Whaling instead targets high-level executives through phishing."
          },
          {
            "q": "A highly targeted phishing email aimed specifically at a company's CFO is best described as:",
            "opts": [
              "Spam",
              "Smishing",
              "Pharming",
              "Whaling"
            ],
            "ans": 3,
            "exp": "Whaling targets senior executives such as a CFO or CEO. Smishing instead uses text messages and is not specifically aimed at executives."
          },
          {
            "q": "Redirecting a user to a fake website by corrupting DNS resolution, even when they type the correct address, is called:",
            "opts": [
              "Phishing",
              "Tailgating",
              "Spoofing a badge",
              "Pharming"
            ],
            "ans": 3,
            "exp": "Pharming poisons DNS or hosts files to send users to fraudulent sites. Phishing instead relies on the user clicking a deceptive link."
          },
          {
            "q": "Ransomware most directly threatens which security goal by locking users out of their own files?",
            "opts": [
              "Confidentiality",
              "Availability",
              "Non-repudiation",
              "Authentication"
            ],
            "ans": 1,
            "exp": "Ransomware encrypts files and blocks access, harming availability. While data may also be stolen, the classic ransomware impact is loss of availability."
          },
          {
            "q": "A network of compromised computers remotely controlled by an attacker to launch attacks is called a:",
            "opts": [
              "Honeynet",
              "Botnet",
              "Subnet",
              "VPN concentrator"
            ],
            "ans": 1,
            "exp": "A botnet is a group of hijacked machines controlled by an attacker. A honeynet is instead a deliberately vulnerable network used to study attackers."
          },
          {
            "q": "Which type of malware demands payment, often in cryptocurrency, to restore access to encrypted data?",
            "opts": [
              "Spyware",
              "Adware",
              "Rootkit",
              "Ransomware"
            ],
            "ans": 3,
            "exp": "Ransomware encrypts data and demands payment for the decryption key. Spyware instead quietly gathers information without demanding a ransom."
          },
          {
            "q": "An attacker who buys a ready-made exploit kit and uses it without understanding how it works is typically a:",
            "opts": [
              "Nation-state actor",
              "Insider threat",
              "Script kiddie",
              "Penetration tester"
            ],
            "ans": 2,
            "exp": "A script kiddie uses existing tools with little skill or understanding. A nation-state actor, by contrast, is highly skilled and well funded."
          },
          {
            "q": "A trusted software update from a vendor is secretly modified to include malware before it reaches customers. This is a:",
            "opts": [
              "Supply chain attack",
              "Brute-force attack",
              "Cross-site scripting attack",
              "Evil twin attack"
            ],
            "ans": 0,
            "exp": "A supply chain attack compromises a trusted vendor or component to reach many victims. Cross-site scripting instead targets users of a web application."
          },
          {
            "q": "An attacker gains normal user access and then exploits a flaw to gain administrator rights. This is:",
            "opts": [
              "Lateral movement",
              "Data exfiltration",
              "Social engineering",
              "Privilege escalation"
            ],
            "ans": 3,
            "exp": "Privilege escalation increases an attacker's access rights on a system. Lateral movement instead means spreading to other systems at the same level."
          },
          {
            "q": "A website is tricked into requesting internal resources on behalf of the attacker. Which attack does this describe?",
            "opts": [
              "Cross-site scripting",
              "SQL injection",
              "Server-side request forgery (SSRF)",
              "Password spraying"
            ],
            "ans": 2,
            "exp": "SSRF abuses a server so it makes requests the attacker chooses, often to internal systems. Cross-site scripting instead runs in a victim's browser."
          },
          {
            "q": "An attacker tries one common password against many different user accounts to avoid lockouts. This technique is:",
            "opts": [
              "Password spraying",
              "Dictionary cracking",
              "Rainbow table lookup",
              "Credential stuffing"
            ],
            "ans": 0,
            "exp": "Password spraying tries a single common password across many accounts to avoid lockout thresholds. Credential stuffing instead reuses breached username and password pairs."
          },
          {
            "q": "Reusing username and password pairs stolen from one breach to log in to other sites is called:",
            "opts": [
              "Credential stuffing",
              "Password spraying",
              "Keylogging",
              "Phishing"
            ],
            "ans": 0,
            "exp": "Credential stuffing relies on users reusing the same credentials across sites. Password spraying instead guesses common passwords rather than using stolen ones."
          },
          {
            "q": "Which type of cipher encrypts data one bit or byte at a time, often used for real-time streams?",
            "opts": [
              "Block cipher",
              "Hash function",
              "Key exchange",
              "Stream cipher"
            ],
            "ans": 3,
            "exp": "A stream cipher encrypts data continuously bit by bit. A block cipher instead encrypts fixed-size blocks of data at a time."
          },
          {
            "q": "A key exchange method that lets two parties agree on a shared secret over an insecure channel is:",
            "opts": [
              "SHA-256",
              "Diffie-Hellman",
              "AES",
              "MD5"
            ],
            "ans": 1,
            "exp": "Diffie-Hellman allows two parties to establish a shared secret over an open channel. AES is a symmetric cipher and SHA-256 is a hash, not a key exchange."
          },
          {
            "q": "The property that even a small change in input produces a very different hash output is called the:",
            "opts": [
              "Avalanche effect",
              "Collision",
              "Key stretching",
              "Salting"
            ],
            "ans": 0,
            "exp": "The avalanche effect means tiny input changes drastically change the hash. A collision is the opposite problem, where two inputs share a hash."
          },
          {
            "q": "Which certificate type can secure a domain and all of its first-level subdomains, such as *.example.com?",
            "opts": [
              "Self-signed certificate",
              "Code-signing certificate",
              "Wildcard certificate",
              "Root certificate"
            ],
            "ans": 2,
            "exp": "A wildcard certificate covers a domain and its subdomains with one certificate. A code-signing certificate instead verifies software authenticity, not websites."
          },
          {
            "q": "Which hardware component securely stores cryptographic keys and can perform crypto operations for a server?",
            "opts": [
              "NIC",
              "GPU",
              "UPS",
              "HSM (hardware security module)"
            ],
            "ans": 3,
            "exp": "An HSM securely generates and stores keys and performs cryptographic operations. A UPS instead provides backup power, unrelated to key storage."
          },
          {
            "q": "A Trusted Platform Module (TPM) on a laptop is mainly used to:",
            "opts": [
              "Securely store keys used for disk encryption and boot integrity",
              "Increase network speed",
              "Filter spam email",
              "Provide backup power"
            ],
            "ans": 0,
            "exp": "A TPM stores keys and supports full-disk encryption and secure boot. It has nothing to do with network speed or power backup."
          },
          {
            "q": "A next-generation firewall (NGFW) differs from a traditional firewall mainly because it can:",
            "opts": [
              "Only filter by IP address and port",
              "Provide electrical power",
              "Inspect application-layer traffic and identify specific applications",
              "Replace all antivirus software"
            ],
            "ans": 2,
            "exp": "An NGFW adds deep application-layer inspection and application awareness. A traditional firewall filters mostly by port and IP address."
          },
          {
            "q": "Which solution hides internal private IP addresses behind a single public address when connecting to the internet?",
            "opts": [
              "DNS",
              "DHCP",
              "ARP",
              "NAT (network address translation)"
            ],
            "ans": 3,
            "exp": "NAT translates private addresses to a public one, hiding the internal scheme. DHCP instead assigns IP addresses to hosts on the network."
          },
          {
            "q": "A jump server (jump box) is used to:",
            "opts": [
              "Balance web traffic",
              "Provide a single hardened, monitored gateway for administering internal systems",
              "Store backups offsite",
              "Encrypt email"
            ],
            "ans": 1,
            "exp": "A jump server is a hardened host used as a controlled entry point to manage other systems. It is not a load balancer or a backup device."
          },
          {
            "q": "Which secure email protocol allows a client to retrieve messages while leaving them stored on the server, using encryption?",
            "opts": [
              "POP3 over TLS",
              "SMTP",
              "IMAP over TLS",
              "Telnet"
            ],
            "ans": 2,
            "exp": "IMAP over TLS retrieves mail securely while keeping messages on the server. POP3 typically downloads and removes messages from the server."
          },
          {
            "q": "Which protocol securely manages and monitors network devices and replaces the insecure earlier versions?",
            "opts": [
              "SNMPv1",
              "SNMPv3",
              "Telnet",
              "TFTP"
            ],
            "ans": 1,
            "exp": "SNMPv3 adds authentication and encryption to network management. SNMPv1 sends community strings in clear text and is insecure."
          },
          {
            "q": "A honeypot deployed on a network is intended to:",
            "opts": [
              "Serve production web pages",
              "Encrypt outbound email",
              "Attract and observe attackers using a decoy system",
              "Balance database queries"
            ],
            "ans": 2,
            "exp": "A honeypot is a decoy that lures attackers so their behavior can be studied. It is not meant to serve real production traffic."
          },
          {
            "q": "A vulnerability scan that runs without valid login credentials on the target is called a:",
            "opts": [
              "Non-credentialed scan",
              "Credentialed scan",
              "Compliance scan",
              "Penetration test"
            ],
            "ans": 0,
            "exp": "A non-credentialed scan tests systems from an outsider's view without logins. A credentialed scan logs in and sees more detail from the inside."
          },
          {
            "q": "The industry standard used to rate the severity of a vulnerability with a numeric score is:",
            "opts": [
              "CVE",
              "CPE",
              "OWASP",
              "CVSS"
            ],
            "ans": 3,
            "exp": "CVSS provides a numeric severity score for a vulnerability. A CVE is instead a unique identifier for a specific known vulnerability."
          },
          {
            "q": "Applying vendor patches promptly to remove known vulnerabilities is part of:",
            "opts": [
              "Load balancing",
              "Data classification",
              "Key escrow",
              "Patch management"
            ],
            "ans": 3,
            "exp": "Patch management keeps software updated to close known vulnerabilities. Data classification instead labels information by sensitivity."
          },
          {
            "q": "Turning off unused services and closing unnecessary ports on a server is an example of:",
            "opts": [
              "System hardening",
              "Vertical scaling",
              "Data masking",
              "Federation"
            ],
            "ans": 0,
            "exp": "Reducing the attack surface by disabling unneeded services is system hardening. Vertical scaling instead means adding resources like CPU or memory."
          },
          {
            "q": "A security orchestration, automation, and response (SOAR) platform is mainly used to:",
            "opts": [
              "Replace all firewalls",
              "Encrypt hard drives",
              "Automate repetitive incident response tasks and coordinate tools",
              "Provide physical access control"
            ],
            "ans": 2,
            "exp": "SOAR automates and coordinates security workflows and tool actions. It does not replace firewalls or provide physical access control."
          },
          {
            "q": "Which log source would best help investigate which websites an internal user visited?",
            "opts": [
              "DNS and web proxy logs",
              "UPS battery logs",
              "Printer toner logs",
              "BIOS logs"
            ],
            "ans": 0,
            "exp": "DNS and proxy logs record the domains and sites users accessed. UPS or printer logs contain no browsing history."
          },
          {
            "q": "Ensuring all systems share the same accurate time so log events line up correctly is achieved with:",
            "opts": [
              "DHCP",
              "NAT",
              "ARP",
              "NTP (Network Time Protocol)"
            ],
            "ans": 3,
            "exp": "NTP synchronizes clocks so log timestamps can be correlated. DHCP assigns IP addresses and does not manage time."
          },
          {
            "q": "A user account for a departing employee should be handled how during offboarding?",
            "opts": [
              "Left active in case they return",
              "Disabled or removed promptly",
              "Shared with their replacement",
              "Given administrator rights"
            ],
            "ans": 1,
            "exp": "Accounts should be disabled or removed promptly when an employee leaves. Leaving them active or sharing them creates a serious security risk."
          },
          {
            "q": "Granting temporary elevated rights only when needed and revoking them afterward is the goal of:",
            "opts": [
              "DHCP",
              "Content filtering",
              "RAID",
              "Privileged access management (PAM)"
            ],
            "ans": 3,
            "exp": "PAM controls and time-limits privileged access, granting it just when needed. RAID instead provides disk redundancy, unrelated to access rights."
          },
          {
            "q": "Which access control model grants permissions based on a user's assigned job function or role?",
            "opts": [
              "Discretionary access control",
              "Role-based access control (RBAC)",
              "Mandatory access control",
              "Rule-based access control"
            ],
            "ans": 1,
            "exp": "RBAC assigns permissions according to job roles. Mandatory access control instead uses security labels set by the system, not job roles."
          },
          {
            "q": "In an access control model where a central authority assigns clearance labels and users cannot change permissions, this is:",
            "opts": [
              "Discretionary access control (DAC)",
              "Role-based access control",
              "Mandatory access control (MAC)",
              "Open access control"
            ],
            "ans": 2,
            "exp": "MAC uses labels and clearances set by the system, and users cannot alter them. DAC instead lets data owners decide who gets access."
          },
          {
            "q": "A company keeps a spare, fully configured server that can be switched on if the main one fails. This provides:",
            "opts": [
              "Encryption",
              "Redundancy",
              "Segmentation",
              "Tokenization"
            ],
            "ans": 1,
            "exp": "Having a standby system ready to take over provides redundancy for availability. Encryption and segmentation address confidentiality and isolation instead."
          },
          {
            "q": "A business impact analysis (BIA) primarily helps an organization to:",
            "opts": [
              "Encrypt all databases",
              "Configure firewall rules",
              "Identify critical functions and the impact of their disruption",
              "Detect malware"
            ],
            "ans": 2,
            "exp": "A BIA identifies critical processes and the effects of losing them. It guides recovery priorities rather than performing technical security tasks."
          },
          {
            "q": "Which cloud deployment model combines on-premises private infrastructure with public cloud services?",
            "opts": [
              "Public cloud",
              "Hybrid cloud",
              "Private cloud",
              "Community cloud"
            ],
            "ans": 1,
            "exp": "A hybrid cloud mixes private infrastructure with public cloud services. A community cloud is instead shared among organizations with common needs."
          },
          {
            "q": "Which mobile deployment model lets employees use their own personal devices for work?",
            "opts": [
              "BYOD",
              "COPE",
              "CYOD",
              "Kiosk mode"
            ],
            "ans": 0,
            "exp": "Bring Your Own Device allows staff to use personal devices for work. COPE instead means company-owned, personally enabled devices."
          },
          {
            "q": "A guideline stating that laptops should be encrypted, without forcing a specific product, is best classified as a(n):",
            "opts": [
              "Mandatory standard",
              "Legal regulation",
              "Recommended guideline",
              "Signed contract"
            ],
            "ans": 2,
            "exp": "A recommendation that leaves choices open is a guideline. A standard would instead impose a specific mandatory requirement."
          },
          {
            "q": "Multiplying single loss expectancy by the annual rate of occurrence produces the:",
            "opts": [
              "Residual risk",
              "Risk appetite",
              "Annualized loss expectancy (ALE)",
              "Exposure factor"
            ],
            "ans": 2,
            "exp": "ALE equals SLE times ARO and estimates yearly expected loss. The exposure factor is instead the percentage of asset value lost per event."
          },
          {
            "q": "A third-party service provider suffers a breach that exposes your customer data. This illustrates the importance of:",
            "opts": [
              "Faster CPUs",
              "Vendor and third-party risk management",
              "Brighter data center lighting",
              "Longer Wi-Fi range"
            ],
            "ans": 1,
            "exp": "Vendor risk management addresses risks introduced by third parties handling your data. The other options are unrelated to that risk."
          },
          {
            "q": "Under data privacy roles, the individual whose personal data is being collected is the:",
            "opts": [
              "Data controller",
              "Data processor",
              "Data subject",
              "Data custodian"
            ],
            "ans": 2,
            "exp": "The data subject is the person the personal data is about. The controller decides how that data is used, while the subject is the individual."
          },
          {
            "q": "Mobile device management (MDM) allows an organization to remotely erase a lost phone. This capability is called:",
            "opts": [
              "Load balancing",
              "Port mirroring",
              "Key escrow",
              "Remote wipe"
            ],
            "ans": 3,
            "exp": "Remote wipe lets administrators erase data on a lost or stolen device. Key escrow instead stores recoverable copies of encryption keys."
          }
        ]
      },
      {
        "label": "Thursday — Practice Test 4 · All domains",
        "quiz": [
          {
            "q": "A security team adds accountability by keeping detailed logs of who accessed what. Which AAA function does logging support?",
            "opts": [
              "Accounting",
              "Authentication",
              "Authorization",
              "Encryption"
            ],
            "ans": 0,
            "exp": "Accounting records what authenticated users do, supporting accountability. Authentication only verifies identity and does not track activity."
          },
          {
            "q": "Which of the following best represents a preventive technical control?",
            "opts": [
              "A security awareness policy",
              "A firewall that blocks unauthorized traffic",
              "A security camera recording an entrance",
              "A sign warning of monitoring"
            ],
            "ans": 1,
            "exp": "A firewall blocking traffic is a technical control that prevents attacks. A camera is detective and a warning sign is a deterrent."
          },
          {
            "q": "The practice of keeping systems, data, and services correct and trustworthy so they are not improperly altered supports which goal?",
            "opts": [
              "Integrity",
              "Availability",
              "Confidentiality",
              "Redundancy"
            ],
            "ans": 0,
            "exp": "Integrity ensures data is accurate and not improperly modified. Availability instead focuses on access when needed."
          },
          {
            "q": "Which term describes obscuring parts of sensitive data, such as displaying a card number as XXXX-XXXX-XXXX-1234?",
            "opts": [
              "Full encryption",
              "Hashing",
              "Compression",
              "Data masking"
            ],
            "ans": 3,
            "exp": "Data masking hides portions of a value while showing some for usability. Encryption instead transforms the entire value so none is readable without a key."
          },
          {
            "q": "An organization uses a security framework such as the NIST Cybersecurity Framework mainly to:",
            "opts": [
              "Guarantee zero breaches",
              "Replace all its staff",
              "Encrypt individual files",
              "Provide a structured set of best practices to manage cybersecurity risk"
            ],
            "ans": 3,
            "exp": "A framework offers structured guidance for managing security risk. No framework can guarantee that breaches will never happen."
          },
          {
            "q": "Adaptive or risk-based authentication improves security by:",
            "opts": [
              "Adjusting authentication requirements based on risk signals like location or device",
              "Always asking for the same single password",
              "Removing multifactor authentication",
              "Storing passwords in plain text"
            ],
            "ans": 0,
            "exp": "Risk-based authentication raises or lowers requirements based on context such as an unusual location. It strengthens rather than removes multifactor authentication."
          },
          {
            "q": "An email claims you won a prize and asks for personal details to claim it. This general category of unsolicited deceptive message is:",
            "opts": [
              "Phishing",
              "Patch management",
              "Load balancing",
              "Tokenization"
            ],
            "ans": 0,
            "exp": "A deceptive unsolicited email seeking personal details is phishing. The other options are unrelated security or operational activities."
          },
          {
            "q": "An attacker searches a company's trash for discarded documents containing useful information. This is called:",
            "opts": [
              "Shoulder surfing",
              "Tailgating",
              "Eavesdropping",
              "Dumpster diving"
            ],
            "ans": 3,
            "exp": "Dumpster diving means searching discarded materials for useful data. Shoulder surfing instead means watching someone enter information."
          },
          {
            "q": "Which practice best reduces the success of social engineering attacks across an organization?",
            "opts": [
              "Faster internet connections",
              "Larger monitors",
              "Regular security awareness training",
              "More printers"
            ],
            "ans": 2,
            "exp": "Ongoing awareness training helps staff recognize and resist manipulation. The other options do nothing to address human deception."
          },
          {
            "q": "Malware that displays unwanted advertisements and may track browsing habits is called:",
            "opts": [
              "Adware",
              "Worm",
              "Logic bomb",
              "Rootkit"
            ],
            "ans": 0,
            "exp": "Adware shows unwanted ads and may monitor browsing. A worm instead self-replicates across networks without showing ads."
          },
          {
            "q": "A hidden method of bypassing normal authentication to access a system is known as a:",
            "opts": [
              "Firewall",
              "Backdoor",
              "Honeypot",
              "Proxy"
            ],
            "ans": 1,
            "exp": "A backdoor allows secret access that bypasses normal authentication. A honeypot is instead a decoy meant to attract attackers."
          },
          {
            "q": "A fileless malware attack is dangerous mainly because it:",
            "opts": [
              "Only affects printers",
              "Requires physical access",
              "Runs in memory and leaves little trace on disk",
              "Cannot spread at all"
            ],
            "ans": 2,
            "exp": "Fileless malware operates in memory, making it harder for disk-based tools to detect. It does not require physical access and can still spread."
          },
          {
            "q": "Which motivation is most typical of organized crime groups conducting cyberattacks?",
            "opts": [
              "Political protest",
              "Curiosity",
              "Improving security",
              "Financial gain"
            ],
            "ans": 3,
            "exp": "Organized crime is usually driven by financial profit. Political protest is instead characteristic of hacktivists."
          },
          {
            "q": "Shadow IT refers to:",
            "opts": [
              "Hardware or software used without the IT department's knowledge or approval",
              "Approved backup systems",
              "The night-shift IT team",
              "Encrypted network segments"
            ],
            "ans": 0,
            "exp": "Shadow IT is technology used without IT approval, creating unmanaged risk. It is not an authorized backup or a work shift."
          },
          {
            "q": "An attacker manipulates a URL to access files outside the intended web directory, such as ../../etc/passwd. This is:",
            "opts": [
              "Cross-site scripting",
              "SQL injection",
              "Directory traversal",
              "DNS poisoning"
            ],
            "ans": 2,
            "exp": "Directory traversal uses path sequences to reach files outside the web root. Cross-site scripting instead injects scripts into web pages."
          },
          {
            "q": "Two processes access a shared resource at the same time in the wrong order, causing unexpected behavior an attacker can exploit. This flaw is a:",
            "opts": [
              "Buffer overflow",
              "Race condition",
              "Phishing attack",
              "Replay attack"
            ],
            "ans": 1,
            "exp": "A race condition arises from unsafe timing between concurrent operations. A buffer overflow instead involves writing past a memory boundary."
          },
          {
            "q": "An attacker forces a connection to use an older, weaker encryption protocol to make it easier to break. This is a:",
            "opts": [
              "Amplification attack",
              "Injection attack",
              "Pivot attack",
              "Downgrade attack"
            ],
            "ans": 3,
            "exp": "A downgrade attack pushes systems to a weaker protocol version. An amplification attack instead magnifies traffic volume for denial of service."
          },
          {
            "q": "Which attack sends small requests to servers that reply with much larger responses aimed at a victim, magnifying a denial of service?",
            "opts": [
              "Phishing",
              "SQL injection",
              "Amplification (reflection) attack",
              "Shoulder surfing"
            ],
            "ans": 2,
            "exp": "An amplification attack abuses services to send oversized responses to a victim. Phishing and shoulder surfing are unrelated social or deception attacks."
          },
          {
            "q": "A block cipher mode should use a unique, unpredictable value per encryption operation to avoid revealing patterns. This value is the:",
            "opts": [
              "Public key",
              "Initialization vector (IV)",
              "Certificate",
              "Session ID"
            ],
            "ans": 1,
            "exp": "An initialization vector adds randomness so identical plaintext blocks encrypt differently. A public key is instead used in asymmetric encryption."
          },
          {
            "q": "Which statement about hashing is correct?",
            "opts": [
              "Hashing can always be reversed with the right key",
              "Hashing is a one-way function used to verify integrity",
              "Hashing encrypts data for confidentiality",
              "Hashing requires a public and private key"
            ],
            "ans": 1,
            "exp": "Hashing is one-way and used to check integrity, not to hide or recover data. It does not use keys the way encryption does."
          },
          {
            "q": "Which of these hashing algorithms is considered outdated and unsafe for security use due to collisions?",
            "opts": [
              "SHA-256",
              "SHA-3",
              "MD5",
              "SHA-512"
            ],
            "ans": 2,
            "exp": "MD5 is broken by practical collision attacks and should not be used for security. The SHA-2 and SHA-3 family algorithms remain acceptable."
          },
          {
            "q": "A certificate that a system generates and signs itself, without a trusted CA, is a:",
            "opts": [
              "Wildcard certificate",
              "Self-signed certificate",
              "Root CA certificate",
              "Extended validation certificate"
            ],
            "ans": 1,
            "exp": "A self-signed certificate is signed by its own creator rather than a trusted CA. Browsers warn about these because no third party vouches for them."
          },
          {
            "q": "Key stretching techniques such as PBKDF2 or bcrypt are used to:",
            "opts": [
              "Speed up file transfers",
              "Make password hashing slower to resist brute-force cracking",
              "Compress backups",
              "Route network traffic"
            ],
            "ans": 1,
            "exp": "Key stretching deliberately slows hashing to make password cracking harder. It has nothing to do with file transfer speed or routing."
          },
          {
            "q": "Which architecture concept isolates the most critical systems in a network segment with no direct internet access?",
            "opts": [
              "Open guest Wi-Fi",
              "Public DMZ for all servers",
              "Air-gapped or highly segmented network",
              "Flat network"
            ],
            "ans": 2,
            "exp": "Isolating critical systems, up to air gapping, greatly limits exposure. A flat network with no segmentation would instead let threats spread freely."
          },
          {
            "q": "A reverse proxy placed in front of web servers primarily helps by:",
            "opts": [
              "Assigning IP addresses",
              "Providing electrical power",
              "Hiding and protecting backend servers while handling client requests",
              "Encrypting hard drives"
            ],
            "ans": 2,
            "exp": "A reverse proxy accepts client requests and forwards them, shielding backend servers. It does not assign IP addresses or provide power."
          },
          {
            "q": "A web application firewall (WAF) is specifically designed to:",
            "opts": [
              "Balance electrical loads",
              "Filter and monitor HTTP traffic to protect web applications from attacks like injection",
              "Replace physical door locks",
              "Manage DNS zones"
            ],
            "ans": 1,
            "exp": "A WAF inspects HTTP traffic to block web attacks such as injection and XSS. It is focused on the application layer, not power or physical access."
          },
          {
            "q": "Port security on a switch can help prevent unauthorized devices by:",
            "opts": [
              "Limiting which MAC addresses may connect to a port",
              "Encrypting all files on a server",
              "Assigning risk scores",
              "Blocking all DNS queries"
            ],
            "ans": 0,
            "exp": "Port security restricts the MAC addresses allowed on a switch port. It does not perform encryption or DNS filtering."
          },
          {
            "q": "802.1X provides which capability on a wired or wireless network?",
            "opts": [
              "Port-based network access control requiring authentication before access",
              "File compression",
              "Automatic patching",
              "Physical door locking"
            ],
            "ans": 0,
            "exp": "802.1X enforces authentication before a device is granted network access. It does not handle patching or physical security."
          },
          {
            "q": "A site-to-site VPN is most appropriate when:",
            "opts": [
              "A single user works from a coffee shop",
              "A user needs to reset a password",
              "Two office networks need a permanent encrypted connection between them",
              "A server needs more storage"
            ],
            "ans": 2,
            "exp": "A site-to-site VPN links entire networks, ideal for connecting offices. A single remote user would instead use a remote-access VPN."
          },
          {
            "q": "Which secure protocol replaces plain HTTP for administering a device's web interface?",
            "opts": [
              "Telnet",
              "FTP",
              "SNMPv1",
              "HTTPS"
            ],
            "ans": 3,
            "exp": "HTTPS encrypts the web management session, unlike plain HTTP. Telnet and FTP are also unencrypted legacy protocols."
          },
          {
            "q": "Endpoint detection and response (EDR) tools improve security by:",
            "opts": [
              "Assigning IP addresses to hosts",
              "Continuously monitoring endpoints for suspicious behavior and enabling investigation",
              "Balancing web server load",
              "Encrypting network cables"
            ],
            "ans": 1,
            "exp": "EDR watches endpoint activity, detects threats, and supports response. It is not a DHCP server or a load balancer."
          },
          {
            "q": "When correlating events, a SIEM depends on accurate timestamps, which is why organizations use:",
            "opts": [
              "Faster hard drives",
              "Brighter monitors",
              "Synchronized time via NTP",
              "More printers"
            ],
            "ans": 2,
            "exp": "Synchronized clocks from NTP let the SIEM line up events across systems. Storage speed and monitors do not affect timestamp accuracy."
          },
          {
            "q": "During which incident response phase are systems restored and returned to normal operation while confirming the threat is gone?",
            "opts": [
              "Preparation",
              "Detection",
              "Recovery",
              "Identification"
            ],
            "ans": 2,
            "exp": "Recovery restores systems to normal while verifying the threat has been removed. Detection instead identifies that an incident is occurring."
          },
          {
            "q": "Eradication in incident response specifically means:",
            "opts": [
              "Buying cyber insurance",
              "Removing the threat, such as malware and attacker footholds, from affected systems",
              "Writing a new company policy",
              "Assigning IP addresses"
            ],
            "ans": 1,
            "exp": "Eradication removes the cause of the incident, including malware and backdoors. Insurance and policy writing are unrelated activities."
          },
          {
            "q": "Legal hold in a forensic investigation requires an organization to:",
            "opts": [
              "Delete old data quickly",
              "Encrypt all backups",
              "Shut down all systems",
              "Preserve relevant data that may be needed as evidence"
            ],
            "ans": 3,
            "exp": "A legal hold preserves data that could be relevant to litigation or investigation. Deleting such data could constitute destruction of evidence."
          },
          {
            "q": "An organization runs a full failover to its alternate site to confirm disaster recovery works. This is a:",
            "opts": [
              "Failover / full-scale DR test",
              "Tabletop discussion",
              "Vulnerability scan",
              "Phishing simulation"
            ],
            "ans": 0,
            "exp": "A full failover test actually switches operations to the alternate site. A tabletop exercise only discusses the scenario without switching systems."
          },
          {
            "q": "A differential backup captures:",
            "opts": [
              "Only data changed since the last full backup",
              "Only data changed since the last backup of any type",
              "The entire disk every time",
              "Nothing, it only verifies data"
            ],
            "ans": 0,
            "exp": "A differential backup stores all changes since the last full backup. An incremental backup instead stores changes since the last backup of any type."
          },
          {
            "q": "Which control helps ensure continuity of power during a short outage until generators start?",
            "opts": [
              "Firewall",
              "Load balancer",
              "Proxy server",
              "Uninterruptible power supply (UPS)"
            ],
            "ans": 3,
            "exp": "A UPS provides immediate battery power to bridge short outages. A firewall or proxy has no role in maintaining electrical power."
          },
          {
            "q": "A container differs from a virtual machine mainly because a container:",
            "opts": [
              "Includes a full separate operating system",
              "Requires its own physical hardware",
              "Cannot run applications",
              "Shares the host operating system kernel and is more lightweight"
            ],
            "ans": 3,
            "exp": "Containers share the host kernel, making them lighter than full VMs. A virtual machine instead includes a complete guest operating system."
          },
          {
            "q": "A cloud access security broker (CASB) is used to:",
            "opts": [
              "Provide physical building access",
              "Enforce security policies between users and cloud services",
              "Replace all endpoint antivirus",
              "Generate electricity"
            ],
            "ans": 1,
            "exp": "A CASB sits between users and cloud apps to enforce security policy and visibility. It does not manage physical access or power."
          },
          {
            "q": "Disabling SSID broadcast on a wireless network:",
            "opts": [
              "Provides strong encryption",
              "Blocks all attackers permanently",
              "Only hides the network name and offers weak, easily bypassed protection",
              "Replaces the need for a password"
            ],
            "ans": 2,
            "exp": "Hiding the SSID offers only minor obscurity and is easily bypassed. Real protection comes from strong encryption like WPA3 and a strong passphrase."
          },
          {
            "q": "Full-disk encryption on a laptop primarily protects data:",
            "opts": [
              "While it travels across the network",
              "During an active login session",
              "At rest if the device is lost or stolen",
              "From all malware"
            ],
            "ans": 2,
            "exp": "Full-disk encryption protects data at rest if the device is lost or stolen. It does not protect data in transit or a session already unlocked by the user."
          },
          {
            "q": "A written, step-by-step set of instructions for how to complete a specific task is a:",
            "opts": [
              "Policy",
              "Standard",
              "Framework",
              "Procedure"
            ],
            "ans": 3,
            "exp": "A procedure lists detailed steps to accomplish a task. A policy is instead a high-level statement of intent."
          },
          {
            "q": "An acceptable use policy (AUP) primarily defines:",
            "opts": [
              "How employees may use company systems and resources",
              "The brand of firewall to buy",
              "The color of the office walls",
              "The backup rotation schedule"
            ],
            "ans": 0,
            "exp": "An AUP sets the rules for acceptable use of company systems. It does not specify hardware brands or facilities details."
          },
          {
            "q": "Which risk assessment approach uses descriptive ratings such as high, medium, and low rather than exact dollar figures?",
            "opts": [
              "Quantitative risk assessment",
              "Qualitative risk assessment",
              "Penetration testing",
              "Load testing"
            ],
            "ans": 1,
            "exp": "Qualitative assessment uses relative ratings like high, medium, and low. Quantitative assessment instead uses numeric values such as expected dollar losses."
          },
          {
            "q": "A company chooses to take no additional action against a low-impact risk that costs more to fix than the potential loss. This is:",
            "opts": [
              "Risk acceptance",
              "Risk avoidance",
              "Risk transference",
              "Risk mitigation"
            ],
            "ans": 0,
            "exp": "Choosing to live with a minor risk is risk acceptance. Mitigation would instead spend resources to reduce the risk."
          },
          {
            "q": "A memorandum of understanding (MOU) is best described as:",
            "opts": [
              "A legally binding service guarantee",
              "A password policy",
              "A network diagram",
              "A non-binding statement of intent to cooperate between parties"
            ],
            "ans": 3,
            "exp": "An MOU expresses intent to work together but is generally not legally binding. An SLA, by contrast, defines enforceable service commitments."
          },
          {
            "q": "An organization must retain financial records for seven years to meet the law. This requirement is defined by a:",
            "opts": [
              "Data retention policy driven by compliance",
              "Firewall rule",
              "Backup encryption key",
              "Load balancer setting"
            ],
            "ans": 0,
            "exp": "A data retention policy sets how long data must be kept, often to meet legal requirements. Firewall rules and keys do not govern retention periods."
          },
          {
            "q": "The right of individuals to control how their personal information is collected and used relates most closely to:",
            "opts": [
              "Availability",
              "Privacy",
              "Redundancy",
              "Throughput"
            ],
            "ans": 1,
            "exp": "Controlling collection and use of personal information is a privacy concern. Availability instead concerns access to systems and data."
          },
          {
            "q": "A penetration test where the tester is given no prior knowledge of the target environment is called:",
            "opts": [
              "Known environment (white box) test",
              "Compliance audit",
              "Tabletop exercise",
              "Unknown environment (black box) test"
            ],
            "ans": 3,
            "exp": "An unknown-environment test gives the tester no inside information, simulating an outside attacker. A known-environment test provides full details up front."
          }
        ]
      },
      {
        "label": "Friday — Practice Test 5 · All domains",
        "quiz": [
          {
            "q": "Which scenario best describes a loss of integrity?",
            "opts": [
              "An attacker secretly changes numbers in a financial database",
              "A website is offline during an outage",
              "A password is stolen and read by an attacker",
              "A backup tape is stored offsite"
            ],
            "ans": 0,
            "exp": "Unauthorized modification of data is a loss of integrity. A stolen, readable password is instead a loss of confidentiality."
          },
          {
            "q": "A gate arm that physically stops cars from entering a lot without a valid pass is which control category?",
            "opts": [
              "Technical",
              "Managerial",
              "Physical",
              "Operational"
            ],
            "ans": 2,
            "exp": "A barrier that physically restricts entry is a physical control. A managerial control would instead be a policy or process."
          },
          {
            "q": "An organization sets up a decoy folder of fake sensitive files to alert staff if an intruder opens it. This is a:",
            "opts": [
              "Firewall rule",
              "Load balancer",
              "Backup job",
              "Honeyfile / honeytoken"
            ],
            "ans": 3,
            "exp": "A honeyfile or honeytoken is a decoy that raises an alert when accessed. It is a detective deception technique, not a firewall or backup."
          },
          {
            "q": "Which term describes a security control chosen because a stronger, preferred control cannot be applied right now?",
            "opts": [
              "Preventive control",
              "Compensating control",
              "Deterrent control",
              "Directive control"
            ],
            "ans": 1,
            "exp": "A compensating control substitutes when the primary control is not feasible. A deterrent control instead only discourages attackers."
          },
          {
            "q": "Which best describes the principle of 'secure by design'?",
            "opts": [
              "Building security into a system from the earliest design stages",
              "Adding security only after a product ships",
              "Relying only on user training",
              "Turning off all logging to save space"
            ],
            "ans": 0,
            "exp": "Secure by design integrates security throughout development from the start. Bolting security on only after release is the weaker, reactive approach."
          },
          {
            "q": "Federation in identity management allows:",
            "opts": [
              "Passwords to be stored in plain text",
              "Users to authenticate across organizations using a trusted identity provider",
              "All firewalls to be disabled",
              "Physical badges to be shared"
            ],
            "ans": 1,
            "exp": "Federation lets users use one trusted identity across multiple organizations or services. It does not weaken password storage or firewalls."
          },
          {
            "q": "A phishing message that uses a fake but convincing invoice attachment to trick accounts payable is an example of:",
            "opts": [
              "Business email compromise",
              "Load balancing",
              "Air gapping",
              "Key stretching"
            ],
            "ans": 0,
            "exp": "Fraudulent invoices aimed at finance staff are a form of business email compromise. The other options are unrelated technical measures."
          },
          {
            "q": "Which factor makes people vulnerable to urgency-based social engineering, such as 'act now or your account closes'?",
            "opts": [
              "Scarcity and urgency pressure",
              "Strong encryption",
              "Network segmentation",
              "Backup frequency"
            ],
            "ans": 0,
            "exp": "Urgency and scarcity pressure victims into acting before thinking. Encryption and segmentation are technical controls, not human factors."
          },
          {
            "q": "Spyware is best defined as software that:",
            "opts": [
              "Improves system performance",
              "Secretly gathers information about a user and sends it to a third party",
              "Encrypts data for backups",
              "Balances network traffic"
            ],
            "ans": 1,
            "exp": "Spyware covertly collects user information and reports it. It does not improve performance or handle backups."
          },
          {
            "q": "A polymorphic virus is difficult to detect because it:",
            "opts": [
              "Only runs on printers",
              "Requires no host to spread",
              "Changes its own code to evade signature-based detection",
              "Cannot replicate"
            ],
            "ans": 2,
            "exp": "Polymorphic malware alters its code to avoid matching known signatures. A worm, not a virus, is the type that spreads without a host file."
          },
          {
            "q": "Cryptomalware that hijacks a victim's computer to mine cryptocurrency for the attacker is called:",
            "opts": [
              "A logic bomb",
              "A honeypot",
              "Cryptojacking malware",
              "A proxy"
            ],
            "ans": 2,
            "exp": "Cryptojacking uses a victim's resources to mine cryptocurrency for the attacker. A honeypot is instead a defensive decoy."
          },
          {
            "q": "An advanced persistent threat (APT) is characterized by:",
            "opts": [
              "A long-term, stealthy presence in a network by a well-resourced actor",
              "A quick, noisy, one-time attack",
              "A harmless test by IT staff",
              "A single phishing email with no follow-up"
            ],
            "ans": 0,
            "exp": "An APT maintains a stealthy, long-term foothold using significant resources. A quick, noisy one-time attack is the opposite of an APT."
          },
          {
            "q": "An unintentional insider threat most often results from:",
            "opts": [
              "An employee making a mistake, such as misconfiguring a system or falling for phishing",
              "A firewall blocking traffic",
              "A scheduled backup",
              "A software update from the vendor"
            ],
            "ans": 0,
            "exp": "Unintentional insider threats stem from honest mistakes like misconfigurations or phishing. A malicious insider would instead act deliberately."
          },
          {
            "q": "An attacker injects malicious commands into an application that the operating system then executes. This is a:",
            "opts": [
              "Command injection attack",
              "Denial-of-service attack",
              "Shoulder surfing attack",
              "Evil twin attack"
            ],
            "ans": 0,
            "exp": "Command injection makes the underlying OS run attacker-supplied commands. A denial-of-service attack instead aims to disrupt availability."
          },
          {
            "q": "A stored (persistent) XSS attack is more dangerous than a reflected one because the malicious script:",
            "opts": [
              "Only affects the attacker",
              "Cannot run in browsers",
              "Is saved on the server and runs for every user who views the page",
              "Requires the victim's password first"
            ],
            "ans": 2,
            "exp": "Stored XSS persists on the server and executes for all viewers of the page. Reflected XSS instead requires each victim to click a crafted link."
          },
          {
            "q": "A pass-the-hash attack allows an attacker to:",
            "opts": [
              "Authenticate using a captured password hash without knowing the plaintext password",
              "Reset the domain controller time",
              "Encrypt a hard drive",
              "Balance network load"
            ],
            "ans": 0,
            "exp": "Pass-the-hash reuses a stolen hash to authenticate without the actual password. It does not encrypt drives or manage time or load."
          },
          {
            "q": "ARP poisoning on a local network allows an attacker to:",
            "opts": [
              "Encrypt all local files",
              "Assign public certificates",
              "Associate their MAC address with another host's IP to intercept traffic",
              "Speed up DNS lookups"
            ],
            "ans": 2,
            "exp": "ARP poisoning maps the attacker's MAC to a legitimate IP so traffic is intercepted. It enables on-path attacks and does not encrypt files."
          },
          {
            "q": "Which statement about symmetric versus asymmetric encryption is true?",
            "opts": [
              "Symmetric is generally faster and better for bulk data; asymmetric is better for secure key exchange",
              "Asymmetric is always faster for large files",
              "Symmetric uses a public and private key pair",
              "Asymmetric cannot be used for digital signatures"
            ],
            "ans": 0,
            "exp": "Symmetric encryption is faster for large volumes, while asymmetric excels at securely exchanging keys and signing. Asymmetric encryption is slower for bulk data."
          },
          {
            "q": "Perfect forward secrecy in a TLS session ensures that:",
            "opts": [
              "Passwords are stored in plain text",
              "All traffic uses the same key forever",
              "Compromise of a long-term key does not expose past session keys",
              "Certificates never expire"
            ],
            "ans": 2,
            "exp": "Perfect forward secrecy uses unique ephemeral session keys so a later key compromise cannot decrypt past sessions. Reusing one key forever would remove this protection."
          },
          {
            "q": "A message authentication code (HMAC) provides:",
            "opts": [
              "Only compression",
              "Integrity and authenticity of a message using a shared secret key",
              "Only confidentiality",
              "Physical access control"
            ],
            "ans": 1,
            "exp": "An HMAC verifies both that a message is unchanged and that it came from someone holding the shared key. It does not by itself provide confidentiality."
          },
          {
            "q": "Key escrow refers to:",
            "opts": [
              "Deleting all keys after use",
              "Publishing private keys online",
              "Encrypting keys with themselves",
              "Storing a copy of cryptographic keys with a trusted third party for recovery"
            ],
            "ans": 3,
            "exp": "Key escrow keeps a recoverable copy of keys with a trusted party. Publishing private keys would completely destroy their security."
          },
          {
            "q": "Placing Internet of Things (IoT) devices on their own isolated network segment is recommended because these devices often:",
            "opts": [
              "Are always fully patched",
              "Have weak security and infrequent patches",
              "Require no network access",
              "Cannot be attacked"
            ],
            "ans": 1,
            "exp": "Many IoT devices are poorly secured and rarely patched, so isolating them limits risk. They certainly can be attacked and used as a foothold."
          },
          {
            "q": "An out-of-band management network is used to:",
            "opts": [
              "Serve public web pages",
              "Store customer backups",
              "Administer devices over a separate, dedicated channel isolated from production traffic",
              "Broadcast Wi-Fi to guests"
            ],
            "ans": 2,
            "exp": "Out-of-band management uses a separate channel for administration, improving security and resilience. It is not used for public web hosting or guest Wi-Fi."
          },
          {
            "q": "A stateful firewall differs from a stateless one because it:",
            "opts": [
              "Only checks the source IP",
              "Tracks the state of active connections to make smarter allow or deny decisions",
              "Cannot block any traffic",
              "Requires no rules"
            ],
            "ans": 1,
            "exp": "A stateful firewall tracks connection state and allows return traffic for established sessions. A stateless firewall evaluates each packet in isolation."
          },
          {
            "q": "Which technology inspects encrypted traffic by decrypting it, examining it, and re-encrypting it, often called SSL/TLS inspection?",
            "opts": [
              "A decryption/inspection proxy",
              "A DHCP server",
              "A print spooler",
              "A UPS"
            ],
            "ans": 0,
            "exp": "A TLS inspection proxy decrypts, inspects, and re-encrypts traffic to detect threats. A DHCP server or UPS performs entirely different functions."
          },
          {
            "q": "Network access control (NAC) can improve security by:",
            "opts": [
              "Encrypting all backups",
              "Providing physical door locks",
              "Checking a device's health and identity before allowing it onto the network",
              "Generating certificates"
            ],
            "ans": 2,
            "exp": "NAC verifies device posture and identity before granting network access. It does not perform backup encryption or physical locking."
          },
          {
            "q": "A microsegmentation strategy in a data center primarily aims to:",
            "opts": [
              "Increase Wi-Fi range",
              "Reduce electricity use",
              "Restrict traffic between individual workloads to limit lateral movement",
              "Speed up backups"
            ],
            "ans": 2,
            "exp": "Microsegmentation isolates individual workloads to contain attackers and limit lateral movement. It is a security control, not a power or backup optimization."
          },
          {
            "q": "DNSSEC adds security to DNS by:",
            "opts": [
              "Encrypting entire hard drives",
              "Blocking all email spam",
              "Digitally signing DNS records so responses can be verified as authentic",
              "Balancing server load"
            ],
            "ans": 2,
            "exp": "DNSSEC signs DNS data so resolvers can verify it was not tampered with. It provides authenticity and integrity, not full disk encryption."
          },
          {
            "q": "An organization wants to detect threats across endpoints, network, cloud, and email in one integrated platform. This describes:",
            "opts": [
              "Extended detection and response (XDR)",
              "A single antivirus scanner",
              "A basic packet sniffer",
              "A password manager"
            ],
            "ans": 0,
            "exp": "XDR integrates detection and response across multiple layers such as endpoint, network, and cloud. A single antivirus scanner covers only one layer."
          },
          {
            "q": "User and entity behavior analytics (UEBA) helps detect threats by:",
            "opts": [
              "Encrypting all files",
              "Building a baseline of normal behavior and flagging anomalies",
              "Replacing the firewall",
              "Assigning IP addresses"
            ],
            "ans": 1,
            "exp": "UEBA learns normal patterns and flags deviations that may indicate compromise. It does not encrypt data or replace network devices."
          },
          {
            "q": "A playbook in security operations is best described as:",
            "opts": [
              "A list of employee birthdays",
              "A documented, repeatable set of steps for responding to a specific type of event",
              "A network cable diagram only",
              "A backup tape"
            ],
            "ans": 1,
            "exp": "A playbook defines standardized response steps for a given scenario. It guides consistent handling of incidents, not personnel records."
          },
          {
            "q": "Which action correctly follows the containment phase and precedes recovery in incident response?",
            "opts": [
              "Preparation",
              "Initial detection",
              "Risk appetite setting",
              "Eradication of the threat"
            ],
            "ans": 3,
            "exp": "After containment, the team eradicates the threat before recovering systems. Detection and preparation occur earlier in the process."
          },
          {
            "q": "When acquiring digital evidence, following the order of volatility means collecting:",
            "opts": [
              "Backup tapes first",
              "Printed documents first",
              "Archived logs first",
              "The most volatile data, such as memory, before less volatile data like disk files"
            ],
            "ans": 3,
            "exp": "Order of volatility says to capture fleeting data like RAM before stable data on disk. Archived logs and backups are the least volatile."
          },
          {
            "q": "Provisioning refers to which identity lifecycle activity?",
            "opts": [
              "Deleting old firewall rules",
              "Creating and granting appropriate access to a new account",
              "Encrypting a laptop",
              "Running a vulnerability scan"
            ],
            "ans": 1,
            "exp": "Provisioning creates accounts and assigns appropriate access. Deprovisioning is the opposite, removing access when it is no longer needed."
          },
          {
            "q": "An attestation or access recertification review is performed to:",
            "opts": [
              "Replace all passwords with PINs",
              "Encrypt the network",
              "Confirm that users still need the access they currently have",
              "Install new switches"
            ],
            "ans": 2,
            "exp": "Access recertification confirms current permissions are still appropriate. It helps remove accumulated, unnecessary access over time."
          },
          {
            "q": "A hot site, warm site, and cold site differ mainly in:",
            "opts": [
              "Their geographic hemisphere",
              "The color of their walls",
              "Their internet provider brand",
              "How quickly they can take over operations and how ready their equipment is"
            ],
            "ans": 3,
            "exp": "These recovery sites differ in readiness and how fast they can resume operations. A hot site is ready immediately, while a cold site needs setup."
          },
          {
            "q": "A snapshot of a virtual machine is useful for recovery because it:",
            "opts": [
              "Permanently deletes the VM",
              "Encrypts the physical host",
              "Provides internet access",
              "Captures the VM's state at a point in time so it can be restored quickly"
            ],
            "ans": 3,
            "exp": "A snapshot records the VM state so you can roll back to it after a problem. It does not delete the VM or provide connectivity."
          },
          {
            "q": "Infrastructure as code (IaC) improves security consistency by:",
            "opts": [
              "Removing the need for any access control",
              "Storing passwords on sticky notes",
              "Turning off all logging",
              "Defining infrastructure in version-controlled files so configurations are repeatable and reviewable"
            ],
            "ans": 3,
            "exp": "IaC uses code to build infrastructure consistently and allows review and version control. This reduces configuration drift and manual errors."
          },
          {
            "q": "A captive portal on a guest Wi-Fi network is used to:",
            "opts": [
              "Require users to authenticate or accept terms before gaining internet access",
              "Encrypt the entire hard drive",
              "Replace the firewall",
              "Sign digital certificates"
            ],
            "ans": 0,
            "exp": "A captive portal intercepts users until they log in or accept terms. It controls access rather than encrypting disks or signing certificates."
          },
          {
            "q": "Geofencing in mobile device management allows an organization to:",
            "opts": [
              "Encrypt all email permanently",
              "Replace the need for passwords",
              "Increase battery life",
              "Trigger actions based on a device's physical location"
            ],
            "ans": 3,
            "exp": "Geofencing uses device location to enforce policies, such as restricting features in certain areas. It does not manage passwords or battery life."
          },
          {
            "q": "The main difference between a policy and a standard is that a policy:",
            "opts": [
              "States high-level intent, while a standard defines specific mandatory requirements",
              "Is always optional, while a standard is a suggestion",
              "Lists exact commands to type, while a standard is vague",
              "Is written by end users, while a standard is written by attackers"
            ],
            "ans": 0,
            "exp": "A policy expresses overall intent, and a standard specifies the mandatory details that support it. Both are authoritative, not optional or attacker-written."
          },
          {
            "q": "Change management processes exist primarily to:",
            "opts": [
              "Increase the number of unplanned changes",
              "Bypass testing entirely",
              "Review, approve, and document changes to reduce the risk of disruption",
              "Hide changes from management"
            ],
            "ans": 2,
            "exp": "Change management ensures changes are reviewed, approved, and documented to limit risk. Its purpose is control and visibility, not bypassing oversight."
          },
          {
            "q": "Inherent risk is best described as the level of risk that exists:",
            "opts": [
              "Only after insurance is purchased",
              "Before any controls or mitigations are applied",
              "Only in cloud environments",
              "After all controls succeed perfectly"
            ],
            "ans": 1,
            "exp": "Inherent risk is the raw risk before controls are applied. Residual risk is what remains after controls are in place."
          },
          {
            "q": "A control that reduces the likelihood or impact of a risk, such as installing antivirus, is an example of:",
            "opts": [
              "Risk acceptance",
              "Risk mitigation",
              "Risk transference",
              "Risk avoidance"
            ],
            "ans": 1,
            "exp": "Reducing likelihood or impact with a control is risk mitigation. Transference would instead shift the risk to another party, such as an insurer."
          },
          {
            "q": "A statement of work (SOW) in a vendor agreement typically defines:",
            "opts": [
              "The vendor's internal salaries",
              "The customer's password policy",
              "The color scheme of a website",
              "The specific tasks, deliverables, and timelines for a project"
            ],
            "ans": 3,
            "exp": "An SOW details the work to be done, deliverables, and schedule. It does not govern internal salaries or password policies."
          },
          {
            "q": "A right-to-audit clause in a contract allows an organization to:",
            "opts": [
              "Access the vendor's bank accounts",
              "Fire the vendor's employees",
              "Rewrite national laws",
              "Assess a vendor's security controls and compliance during the relationship"
            ],
            "ans": 3,
            "exp": "A right-to-audit clause permits reviewing a vendor's security and compliance. It does not grant control over the vendor's staff or finances."
          },
          {
            "q": "Data sovereignty refers to the concept that data is:",
            "opts": [
              "Owned only by the IT department",
              "Subject to the laws of the country where it is physically stored",
              "Always encrypted by default",
              "Never allowed in the cloud"
            ],
            "ans": 1,
            "exp": "Data sovereignty means data must follow the laws of its physical location. This affects where organizations may legally store certain data."
          },
          {
            "q": "A data processor, under privacy roles, is an entity that:",
            "opts": [
              "Decides why data is collected",
              "Is the individual the data is about",
              "Owns the physical building",
              "Handles personal data on behalf of and under the instructions of the controller"
            ],
            "ans": 3,
            "exp": "A data processor acts on the controller's instructions when handling personal data. The controller, not the processor, decides the purpose of processing."
          },
          {
            "q": "During offboarding, conducting an exit interview and revoking all access and credentials primarily helps to:",
            "opts": [
              "Improve internet speed",
              "Reduce the risk of unauthorized access after the employee leaves",
              "Increase storage capacity",
              "Encrypt backups"
            ],
            "ans": 1,
            "exp": "Revoking access at offboarding prevents former employees from retaining entry. It is a security measure, not a performance or storage improvement."
          },
          {
            "q": "A honeypot and a honeynet differ mainly in that a honeynet is:",
            "opts": [
              "A single decoy file",
              "A type of firewall",
              "A backup rotation method",
              "An entire decoy network of multiple systems used to study attackers"
            ],
            "ans": 3,
            "exp": "A honeynet is a whole decoy network, while a honeypot is a single decoy system. Both are used to observe and learn from attacker behavior."
          }
        ]
      }
    ]
  },
  {
    "num": 12,
    "title": "Security+ Mock Exam",
    "nist": "Security+ SY0-701 — All Domains",
    "topics": "Full-length timed practice exam under exam conditions | Walkthrough of every missed question",
    "hours": "Full-length exam + review",
    "level": "Certification Prep",
    "overview": "This is your final week. You will take a full-length, timed practice exam under conditions that feel like the real CompTIA Security+ test. The mock exam is a diagnostic tool: it shows you how ready you are and where to spend your last hours of study. It is not scored toward your standing in the program. After the exam, you will review every question you missed so that each mistake becomes a lesson. By the end of the week, you should feel calm, prepared, and certification-ready.",
    "capability": "Certification-ready",
    "objectives": [
      "Complete a full-length, timed Security+ practice exam under exam-like conditions.",
      "Apply time-management strategies to finish all questions within the time limit.",
      "Use test-taking techniques such as eliminating wrong answers and flagging hard questions.",
      "Review every missed question to understand why the correct answer is correct.",
      "Turn your review into a short, focused final study plan.",
      "Build confidence and reduce test anxiety before the real exam."
    ],
    "lessons": [
      {
        "title": "What to Expect on Exam Day",
        "body": [
          "The CompTIA Security+ (SY0-701) exam has approximately 90 questions and gives you approximately 90 minutes. The passing score is approximately 750 on a scale from 100 to 900. That means you have about one minute per question on average, so pace matters. The exam mixes standard multiple-choice questions with performance-based questions (PBQs), which are hands-on tasks that ask you to solve a problem, such as configuring a setting or matching items. PBQs take longer, so many test-takers skip them at first and return to them later.",
          "Taking a full-length mock exam now helps in three ways. First, it builds stamina, because sitting and focusing for 90 minutes is a skill. Second, it reveals your true weak spots under pressure, which can differ from how you feel during casual study. Third, it lowers anxiety, because the real test feels familiar once you have practiced the format.",
          "Treat the mock exam seriously. Sit in a quiet place, use a timer, close your notes, and do not look up answers during the test. The more real the practice, the more useful the results."
        ],
        "keyTerms": [
          {
            "term": "Performance-based question (PBQ)",
            "definition": "A hands-on exam task that asks you to solve or configure something, rather than just pick an answer."
          },
          {
            "term": "Scaled score",
            "definition": "A converted score, from 100 to 900 on Security+, where approximately 750 is passing."
          },
          {
            "term": "Diagnostic exam",
            "definition": "A practice test used to measure readiness and find weak areas, not to grade your standing."
          }
        ]
      },
      {
        "title": "Time Management and Test-Taking Strategy",
        "body": [
          "Good time management keeps you from running out of minutes. A simple plan: if a performance-based question looks slow, flag it and move on, then come back after finishing the faster multiple-choice questions. Never let one hard question eat ten minutes while thirty easy points wait ahead. Most exam software lets you mark questions for review, so use that feature.",
          "For multiple-choice questions, read carefully and watch for key words like 'best', 'first', 'most likely', and 'not'. Often two answers are clearly wrong; eliminate them to improve your odds, then choose between the remaining two. Look for the answer that best fits the exact scenario, not just a true statement. On Security+, the 'best' answer is often the one that addresses the specific situation described.",
          "Manage your energy and nerves, too. If you feel stuck, take one slow breath, make your best choice, flag it, and keep moving. Answer every question, because there is no penalty for guessing; an unanswered question is always wrong, but a guess might be right. Save a few minutes at the end to return to flagged items."
        ],
        "keyTerms": [
          {
            "term": "Flagging",
            "definition": "Marking a question so you can skip it now and return to it later before finishing."
          },
          {
            "term": "Process of elimination",
            "definition": "Removing answers you know are wrong to improve your chance of choosing the right one."
          },
          {
            "term": "Key words",
            "definition": "Words in a question like 'best', 'first', or 'not' that change what the correct answer must be."
          }
        ]
      },
      {
        "title": "How to Review Missed Questions",
        "body": [
          "The review is where most learning happens. For each question you missed, do not just read the correct letter. Ask three questions: Why is the right answer correct? Why is my answer wrong? What topic or objective does this question test? Writing short notes for each turns a mistake into a clear, fixable gap.",
          "Group your missed questions by domain and topic. If you missed four questions about cryptography and one about firewalls, cryptography is your priority. This turns a messy list of errors into a focused study plan for your final days. Return to the exam objectives from Week 11 and re-study only the topics your misses point to.",
          "Also review questions you guessed but got right. A lucky guess is still a weak spot. Being honest about what you truly know, versus what you happened to get right, is how you become genuinely certification-ready instead of just hopeful."
        ],
        "keyTerms": [
          {
            "term": "Missed-question review",
            "definition": "Studying each wrong answer to understand the correct reasoning and the topic being tested."
          },
          {
            "term": "Weak spot",
            "definition": "A topic where you make mistakes or rely on guessing, which needs more study."
          },
          {
            "term": "Focused study plan",
            "definition": "A short plan that targets only the specific topics your mistakes reveal."
          }
        ]
      }
    ],
    "concepts": [
      [
        "Mock exam",
        "A full-length practice test taken under real exam conditions to measure readiness.",
        ""
      ],
      [
        "Performance-based question (PBQ)",
        "A hands-on exam task that asks you to solve or configure something instead of choosing an answer.",
        ""
      ],
      [
        "Scaled score",
        "A converted score from 100 to 900 on Security+, where approximately 750 is passing.",
        ""
      ],
      [
        "Time management",
        "Pacing yourself so you can answer every question within the time limit.",
        ""
      ],
      [
        "Process of elimination",
        "Removing clearly wrong answers to improve your chance of choosing the correct one.",
        ""
      ],
      [
        "Flagging",
        "Marking a question to skip now and return to later before finishing the exam.",
        ""
      ],
      [
        "Least privilege",
        "Giving each user only the minimum access needed to do their job.",
        ""
      ],
      [
        "Integrity (hashing)",
        "Confirming data has not changed, often by comparing a hash value to a known good value.",
        ""
      ],
      [
        "Diagnostic assessment",
        "A test used to find strengths and weak spots rather than to grade standing.",
        ""
      ],
      [
        "Certification-ready",
        "Prepared enough in knowledge, timing, and confidence to attempt the real exam.",
        ""
      ]
    ],
    "resources": [
      [
        "CompTIA Security+ (SY0-701) Certification Exam Objectives, Version 5.0",
        "CompTIA",
        "Re-read page 3 only: exact question count (90), time limit (90 min), and passing score (750/900). About 3 minutes.",
        "Free",
        "https://assets.ctfassets.net/82ripq7fjls2/6TYWUym0Nudqa8nGEnegjG/0f9b974d3b1837fe85ab8e6553f4d623/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf"
      ],
      [
        "The Exam Experience: In-Person Edition",
        "CompTIA",
        "Read the 'Before your exam day' and 'On your exam day' sections (steps 1-7) for exact check-in and test-center rules. About 8 minutes.",
        "Free",
        "https://www.comptia.org/testing/testing-options/take-in-person-exam"
      ],
      [
        "What Are the Identification Requirements for Taking an Exam?",
        "CompTIA (Help Center)",
        "Read the full article: which two forms of ID to bring and the name-match rule. About 4 minutes. Confirm your own ID meets this before test day.",
        "Free",
        "https://help.comptia.org/hc/en-us/articles/11187173177748-What-Are-the-Identification-Requirements-for-Taking-an-Exam"
      ],
      [
        "SY0-701 Pop Quiz Archive",
        "Professor Messer",
        "Attempt as many free pop-quiz questions as time allows, grouped by topic, to supplement your missed-question review. About 15 minutes.",
        "Free",
        "https://www.professormesser.com/category/security-plus/sy0-701/sy0-701-pop-quiz/"
      ],
      [
        "How to Pass Your SY0-701 Security+ Exam in 2026",
        "Professor Messer (YouTube)",
        "Learn the exam format, question types, and a study plan, to prepare for the timed mock exam and your real test.",
        "Free",
        "https://www.youtube.com/watch?v=KiEptGbnEBc"
      ],
      [
        "Mastering CompTIA Security+ PBQs (SY0-701): Types, Examples, & How to Prepare",
        "FlashGenius (YouTube)",
        "See what performance-based questions look like and how to handle them, supporting the time management and strategy lesson.",
        "Free",
        "https://www.youtube.com/watch?v=-_RQonFJqek"
      ],
      [
        "What to expect when testing with Pearson VUE",
        "Pearson VUE (YouTube)",
        "The official test provider shows check-in and test center rules, so you know what happens on exam day.",
        "Free",
        "https://www.youtube.com/watch?v=L1wNSNzdlNw"
      ],
      [
        "CompTIA FAQ: Can I pass my certification by just watching these videos?",
        "Professor Messer (YouTube)",
        "A short reminder to add practice questions and notes to videos, which supports reviewing your missed mock exam questions.",
        "Free",
        "https://www.youtube.com/watch?v=ZvYATt_9sUM"
      ],
      [
        "Professor Messer's Security+ SY0-701 Study Group - August 2026",
        "Professor Messer (YouTube)",
        "A long live review with practice questions and exam answers; watch parts of it after your mock exam to fix weak spots.",
        "Free",
        "https://www.youtube.com/watch?v=Q2IMdcnFISM"
      ]
    ],
    "labs": ["Complete the full-length practice exam within the time limit and under quiet, closed-note conditions.", "Review every missed question and record why the correct answer is correct.", "Group missed questions by domain to see your weakest areas.", "Write a short, focused final study plan targeting the topics your misses reveal.", "Note that this exam is diagnostic and does not count toward your program standing."],
    "deliverable": {
      "title": "Diagnostic Mock Exam and Full Review",
      "description": "Take a full-length, timed practice exam under exam conditions, then complete a full walkthrough of every question you missed. This mock exam is a diagnostic and is not scored toward your standing in the program.",
      "requirements": [
        "Complete the full-length practice exam within the time limit and under quiet, closed-note conditions.",
        "Review every missed question and record why the correct answer is correct.",
        "Group missed questions by domain to see your weakest areas.",
        "Write a short, focused final study plan targeting the topics your misses reveal.",
        "Note that this exam is diagnostic and does not count toward your program standing."
      ],
      "format": "A completed timed mock exam plus a written review of missed questions and a focused final study plan."
    },
    "quiz": [
      {
        "q": "What is the maximum number of questions on the CompTIA Security+ SY0-701 exam?",
        "opts": [
          "75",
          "100",
          "90",
          "120"
        ],
        "ans": 2,
        "exp": "The SY0-701 exam has a maximum of 90 questions. Some tests may show fewer, but never more than 90."
      },
      {
        "q": "How much time do you get to finish the Security+ SY0-701 exam?",
        "opts": [
          "90 minutes",
          "120 minutes",
          "60 minutes",
          "165 minutes"
        ],
        "ans": 0,
        "exp": "You get 90 minutes. With up to 90 questions, that is about one minute per question, so pacing matters."
      },
      {
        "q": "On the Security+ SY0-701 scale of 100 to 900, what score do you need to pass?",
        "opts": [
          "750",
          "800",
          "900",
          "700"
        ],
        "ans": 0,
        "exp": "The passing score is 750 on a scale from 100 to 900. A score of 900 is the highest possible, not the passing mark."
      },
      {
        "q": "Which term describes a hands-on exam task, such as matching items or setting up a firewall rule?",
        "opts": [
          "Multiple-choice question",
          "Diagnostic question",
          "Scaled question",
          "Performance-based question"
        ],
        "ans": 3,
        "exp": "A performance-based question (PBQ) asks you to solve or configure something. A multiple-choice question only asks you to pick an answer from a list."
      },
      {
        "q": "Why is the Security+ result called a scaled score?",
        "opts": [
          "It shows the percent of questions you got right",
          "Raw results are converted to a 100 to 900 range",
          "It counts only the hands-on questions",
          "It is the number of minutes you used"
        ],
        "ans": 1,
        "exp": "A scaled score converts your results into a range from 100 to 900. It is not the same as a simple percent correct, so 750 does not mean 75 percent."
      },
      {
        "q": "Your Week 12 mock exam is called a diagnostic exam. What does that mean?",
        "opts": [
          "It is only a short quiz on the first lesson",
          "It finds weak areas and does not grade your standing",
          "It replaces the real Security+ exam for this program",
          "It is graded and counts toward your final standing"
        ],
        "ans": 1,
        "exp": "A diagnostic exam measures readiness and shows where to study. The Week 12 mock exam is not scored toward your standing in the program."
      },
      {
        "q": "Which setup makes a practice exam most like the real test?",
        "opts": [
          "A quiet room, a timer, and closed notes",
          "A study group that talks through each answer",
          "Open notes so you can check each answer",
          "Short breaks every ten questions to look things up"
        ],
        "ans": 0,
        "exp": "The real exam is timed, quiet, and closed-note. Practicing with open notes or looking things up hides your true weak spots."
      },
      {
        "q": "Which is one reason to take a full-length mock exam before the real test?",
        "opts": [
          "It builds the stamina to focus for 90 minutes",
          "It shows the exact questions on the real exam",
          "It raises your real score by a fixed amount",
          "It lets you skip studying the exam objectives"
        ],
        "ans": 0,
        "exp": "Sitting and focusing for 90 minutes is a skill that practice builds. A mock exam does not show the real questions or replace studying."
      },
      {
        "q": "Of the five Security+ SY0-701 domains, which one has the largest weight on the exam?",
        "opts": [
          "Threats, Vulnerabilities, and Mitigations",
          "Security Architecture",
          "General Security Concepts",
          "Security Operations"
        ],
        "ans": 3,
        "exp": "Security Operations is the largest domain at 28 percent. Threats, Vulnerabilities, and Mitigations is second at 22 percent, and General Security Concepts is smallest at 12 percent."
      },
      {
        "q": "Early in the exam, a performance-based question looks like it will take a long time. What is the best plan?",
        "opts": [
          "Leave it blank because it counts for nothing",
          "Stay on it until every part is fully solved",
          "Flag it, do the faster questions, then return",
          "End the exam early to save your energy"
        ],
        "ans": 2,
        "exp": "Flagging the slow question lets you collect the easier points first. Staying on it can use up time you need for many other questions."
      },
      {
        "q": "What does flagging a question mean on the exam?",
        "opts": [
          "Marking it so you can come back to it later",
          "Reporting it to CompTIA as a broken question",
          "Removing it from your final score",
          "Asking the test center staff for a hint"
        ],
        "ans": 0,
        "exp": "Flagging marks a question so you can skip it now and return before you finish. It does not report, remove, or change the question."
      },
      {
        "q": "You are sure two of four answers are wrong. You cross them out and choose between the last two. What technique is this?",
        "opts": [
          "Scaled guessing",
          "Diagnostic scoring",
          "Process of elimination",
          "Flagging for later review"
        ],
        "ans": 2,
        "exp": "Process of elimination removes answers you know are wrong, which improves your odds. Flagging only marks a question to return to later."
      },
      {
        "q": "A question asks what a technician should do FIRST. Why does the word FIRST matter?",
        "opts": [
          "It means the question is a hands-on task",
          "Several steps may be good, but only one comes first",
          "It means the question is worth extra points",
          "It means the answer is always listed first on screen"
        ],
        "ans": 1,
        "exp": "Key words like first, best, and not change what the correct answer must be. Several steps may be good, but only one should happen first."
      },
      {
        "q": "Time is almost up, and you still have three questions you are unsure about. What should you do?",
        "opts": [
          "Skip them because blanks are not counted",
          "Wait for the exam to submit them for you",
          "Leave them blank to avoid losing points",
          "Choose your best guess for each one"
        ],
        "ans": 3,
        "exp": "An unanswered question is simply counted as wrong, so leaving it blank cannot help you. A best guess at least gives you a chance to earn the point."
      },
      {
        "q": "A question asks which control is BEST for a small office. Two answers are true security facts. How should you choose?",
        "opts": [
          "Pick the one with the most technical words",
          "Pick the one you studied most recently",
          "Pick the one that is the most expensive to buy",
          "Pick the one that fits the exact scenario given"
        ],
        "ans": 3,
        "exp": "On Security+, the best answer addresses the specific situation described. A true statement that does not fit the scenario is not the best choice."
      },
      {
        "q": "You feel stuck and nervous on a hard question. What does this week's lesson suggest?",
        "opts": [
          "Keep reading it until the answer feels fully certain",
          "Stop answering and wait for the time to end",
          "Take a slow breath, choose, flag it, and move on",
          "Restart the exam so you can begin again calmly"
        ],
        "ans": 2,
        "exp": "A slow breath, a best choice, and a flag keep you moving. Staying stuck on one question can cost you many easier points later."
      },
      {
        "q": "With up to 90 questions in 90 minutes, why should you save a few minutes at the end?",
        "opts": [
          "To rewrite every answer you already gave",
          "To go back to the questions you flagged",
          "To ask staff which answers were wrong",
          "To read the exam rules for the first time"
        ],
        "ans": 1,
        "exp": "Saving time at the end lets you return to flagged items. Changing every answer is not the goal, and staff cannot tell you which answers are wrong."
      },
      {
        "q": "A question asks which action a security analyst should take FIRST after finding malware on one laptop. Which answer best fits?",
        "opts": [
          "Restore all company files from backup",
          "Isolate the laptop from the network",
          "Write the lessons learned report",
          "Reinstall the operating system on it"
        ],
        "ans": 1,
        "exp": "Isolating the laptop contains the malware so it cannot spread. Reinstalling, restoring, and writing a report are useful, but they come later in incident response."
      },
      {
        "q": "When you review a question you missed, what should you do besides read the correct answer?",
        "opts": [
          "Move on quickly so you can take another test",
          "Mark it as bad luck and skip studying that topic",
          "Ask why it is right, why yours was wrong, and the topic",
          "Memorize which letter was correct for the next test"
        ],
        "ans": 2,
        "exp": "Asking why the right answer is right, why yours was wrong, and what topic it tests turns a mistake into a clear gap. Memorizing a letter teaches you nothing new."
      },
      {
        "q": "On your mock exam, you missed four cryptography questions and one firewall question. What should you study first?",
        "opts": [
          "Neither, just retake the test",
          "Both topics equally",
          "Cryptography",
          "Firewalls"
        ],
        "ans": 2,
        "exp": "Grouping misses by topic shows where the most mistakes are. Four misses in cryptography make it the priority over one firewall miss."
      },
      {
        "q": "You guessed on a question and got it right. How should you treat it during your review?",
        "opts": [
          "As a weak spot to study",
          "As a mistake by the exam",
          "As a question to ignore",
          "As a topic you already know"
        ],
        "ans": 0,
        "exp": "A lucky guess is still a weak spot. Being honest about what you truly know helps you become certification-ready instead of just hopeful."
      },
      {
        "q": "What is a focused study plan?",
        "opts": [
          "A long plan to reread every chapter from the very start",
          "A schedule of practice exams with no review time",
          "A list of the answers from your mock exam",
          "A short plan aimed at the topics your mistakes reveal"
        ],
        "ans": 3,
        "exp": "A focused study plan targets only the specific topics your misses point to. Rereading everything wastes the limited time left before the exam."
      },
      {
        "q": "After grouping your missed questions, where does the lesson say to go next?",
        "opts": [
          "Back to the exam objectives for those topics",
          "To a new practice test with no review",
          "To the glossary for every other week",
          "Straight to booking a second real exam date"
        ],
        "ans": 0,
        "exp": "The lesson says to return to the exam objectives from Week 11 and re-study only the topics your misses point to. Another test without review repeats the same mistakes."
      },
      {
        "q": "Why does the lesson say the review is where most learning happens?",
        "opts": [
          "Taking the test itself teaches nothing at all",
          "Each mistake shows a clear gap you can fix",
          "The review gives you a higher program score",
          "The review shows the real exam's questions"
        ],
        "ans": 1,
        "exp": "Studying each wrong answer turns a mistake into a gap you can fix. The review does not change your score or show real exam questions."
      },
      {
        "q": "You missed three Security Operations questions and three General Security Concepts questions. Using domain weights, which should get more study time?",
        "opts": [
          "Both, since they share the same weight",
          "General Security Concepts, at 12% of the exam",
          "Security Operations, at 28% of the exam",
          "Neither, since three misses is too few"
        ],
        "ans": 2,
        "exp": "Security Operations is worth 28 percent of the exam, and General Security Concepts is worth 12 percent. With equal misses, the larger domain has more points at stake."
      },
      {
        "q": "While reviewing the Threats domain, you see an attacker registered 'gooogle.com' to catch people who mistype the real name. What is this called?",
        "opts": [
          "Typosquatting",
          "Domain hijacking",
          "Smishing",
          "Pharming"
        ],
        "ans": 0,
        "exp": "Typosquatting uses a look-alike domain name to catch typing mistakes. Pharming instead corrupts DNS so even the correct address leads to a fake site."
      },
      {
        "q": "While reviewing Security Operations, you read about opening a suspicious file in an isolated test space to watch what it does. What is this called?",
        "opts": [
          "Tokenization",
          "Geofencing",
          "Hardening",
          "Sandboxing"
        ],
        "ans": 3,
        "exp": "A sandbox is an isolated space where suspicious files can run safely. Hardening instead reduces risk by turning off unused services on a real system."
      },
      {
        "q": "While reviewing Security Architecture, which network area is the best place for a company's public web server?",
        "opts": [
          "The payroll server segment",
          "The internal user network",
          "The backup storage network",
          "A screened subnet"
        ],
        "ans": 3,
        "exp": "A screened subnet, also called a DMZ, holds public-facing servers apart from internal systems. Placing the web server on the internal network lets attackers get closer to private data."
      },
      {
        "q": "While reviewing Security Program Management, compare two roles. Which statement about a data owner and a data custodian is correct?",
        "opts": [
          "The custodian is an outside auditor of the data",
          "The owner decides who gets access; the custodian manages it",
          "The owner and the custodian are the same job",
          "The custodian decides who gets access; the owner manages it"
        ],
        "ans": 1,
        "exp": "The data owner is responsible for the data and decides how it is classified and who may access it. The data custodian handles daily care, such as backups and applying access rules."
      },
      {
        "q": "While reviewing General Security Concepts, you see a firewall, antivirus, MFA, and training all used together. Which principle does this show?",
        "opts": [
          "Separation of duties",
          "Defense in depth",
          "Implicit deny",
          "Least privilege"
        ],
        "ans": 1,
        "exp": "Defense in depth uses several layers of controls, so if one fails another still protects. Least privilege is about giving only the access a job needs."
      }
    ]
  }
];
WEEKS.sort((a, b) => a.num - b.num);
