// Week 8 labs. Shapes: docs/COURSE_V2.md
// Incident CC-IR-2026-01 (ENG-FS01 ransomware, Wed 2026-12-23). Lab pack: node docs/tools/make_week8_pack.js
// (prints every auto-check answer used below).
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['8.1'] = {
  id: "8.1", week: 8, title: "Triage the morning queue", mins: 30, env: "browser",
  goal: "It is 6:05 AM on Wednesday, December 23, 2026. You are on the early shift and the security console shows ten alerts from overnight. Sort them: give each a priority from P1 to P4, find the ones that belong to the same attack, and decide what to do first.",
  youNeed: [
    "Lesson 8.2 (detection, analysis, and triage) finished",
    "No Kali needed: this lab is reading and deciding",
    "About 30 minutes"
  ],
  steps: [
    {
      title: "The situation",
      body: [
        "Marcus started an early rotation on Monday, after the weekend intrusion you found in Week 7, so someone looks at the security console from 6:00 AM. Today it is you. Overnight alerts go to the siem-alerts mailbox and the console, but nobody is on call, so nobody has looked at them since 5 PM yesterday.",
        "Cedar Creek uses four priorities, the same as the SOC Ticket Board: <strong>P1 Critical</strong> (target 4 hours), <strong>P2 High</strong> (8 hours), <strong>P3 Medium</strong> (24 hours), and <strong>P4 Low</strong> (72 hours). One rule overrides the rest: <strong>an alert that is part of an active P1 incident is P1</strong>, even if it looks small on its own.",
        "Marcus's one-page call list says: for a P1, call Dee Ortiz (she can isolate servers from home through the EDR console), then Marcus. Marcus calls Greg Palmer.",
        "Times below are local (Central time). Read every alert before you answer anything, because some only make sense together."
      ]
    },
    {
      title: "Alerts AL-01 to AL-05",
      body: [
        "<strong>AL-01 | Tue 23:58 | FW-CORE | Informational.</strong> 1,140 inbound connection attempts to TCP port 22 (SSH) from 214 internet addresses over the last 24 hours. All blocked by the default-deny rule. Cedar Creek does not publish any SSH service to the internet.",
        "<strong>AL-02 | Wed 01:41 | FW-CORE VPN | Medium.</strong> A long run of failed VPN logins against many different usernames from 203.0.113.77 (a hosting provider outside the US), starting a little after 01:00, then a successful login for <code>m.alvarez</code> (Purchasing) from the same address. Profile: CC-LEGACY (password only), MFA: none. The VPN assigned the session the internal address 10.250.0.37.",
        "<strong>AL-03 | Wed 02:04 | DC01 | High.</strong> New user account <code>svc_update</code> created and added to the Domain Admins group. Performed by <code>ccadmin</code> (the shared IT admin account) from 10.250.0.37.",
        "<strong>AL-04 | Wed 02:14 | EDR, ENG-FS01 | Low.</strong> Uncommon program started by <code>ccadmin</code>: <code>rclone.exe copy D:\\Projects ccx:drop --transfers 8</code>. Rclone is a legitimate tool for copying files to cloud storage. It is not used anywhere at Cedar Creek.",
        "<strong>AL-05 | Wed 03:31 | EDR, ENG-FS01 | High.</strong> <code>vssadmin.exe delete shadows /all /quiet</code> and then <code>wbadmin.exe delete catalog -quiet</code> run by <code>ccadmin</code>. These commands delete the Windows shadow copies (point-in-time snapshots) and the backup catalog."
      ]
    },
    {
      title: "Alerts AL-06 to AL-10",
      body: [
        "<strong>AL-06 | Wed 03:36 | EDR, ENG-FS01 | Critical.</strong> Ransomware behavior: <code>cc_upd.exe</code> (started by <code>ccadmin</code>) is renaming files under D:\\Projects to <code>.latch</code> and dropping README_LATCH.txt in each folder. Still active at 06:05. The EDR policy on servers is detect-only, so it has not blocked anything.",
        "<strong>AL-07 | Wed 05:15 | Antivirus | Informational.</strong> Scheduled scan finished on FIN-LT-09. 0 threats found.",
        "<strong>AL-08 | Wed 05:40 | PLANT-PC-07 | Medium.</strong> A USB mass storage device (SanDisk Cruzer) was connected to the Line 2 HMI. This device has never been seen on this PC. First shift started at 05:30. No other alerts from PLANT-PC-07.",
        "<strong>AL-09 | Wed 05:52 | User report | Medium.</strong> G. Lindqvist (Customer Service) reported an email titled 'Holiday bonus schedule' from hr-notice@cedarcreek-benefits.net with a link to 'view your bonus'. The email gateway shows it went to 14 people. No clicks have been recorded.",
        "<strong>AL-10 | Wed 06:01 | SIEM | Medium.</strong> Five failed logons, then a successful one, for <code>t.becker</code> at ENG-14 (his own desk) between 06:00 and 06:01. A help desk ticket shows Tom changed his password on Tuesday afternoon."
      ],
      tip: "Look for details that repeat across alerts: an account name, an IP address, a hostname. Repeated details are how you link alerts into one incident."
    },
    {
      title: "Link and rank",
      body: [
        "Start by finding the attack. Which alerts share the address 10.250.0.37, the account <code>ccadmin</code>, or the host ENG-FS01? Put them in time order: that order is the attacker's story, from getting in to doing damage.",
        "Then rank the rest on their own merits using impact and scope from Lesson 8.2. Ask: is it confirmed or only suspicious? Is sensitive data or production involved? Is it spreading?",
        "Last, decide your first move. The encryption in AL-06 is still running. Every minute you wait, more of Engineering's drawings are encrypted."
      ]
    },
    {
      title: "What happened next",
      body: [
        "Once you have answered the checkpoints, read on. At 06:08 you called Dee. At 06:14 she isolated ENG-FS01 through the EDR console, and at 06:15 she killed <code>cc_upd.exe</code>. By 06:27 she had switched off the password-only CC-LEGACY VPN profile and cut the VPN down to IT staff, disabled <code>m.alvarez</code> and <code>svc_update</code>, reset the <code>ccadmin</code> password, and blocked 203.0.113.77 and 192.0.2.145 at the firewall. Marcus declared incident <strong>CC-IR-2026-01</strong>, P1: Cedar Creek's first formally declared incident. (The weekend intrusion on MKT-LT-02 in Week 7 was handled on Monday as a cleanup: the laptop was reimaged and svc-plotter reset, but nobody declared an incident or asked how else the attacker could get back in.) In Lab 8.2 you investigate it."
      ]
    }
  ],
  checkpoints: [
    { id: "p01", q: "AL-01 (blocked SSH scanning): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 3 },
    { id: "p02", q: "AL-02 (VPN failures, then a login for m.alvarez): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 0 },
    { id: "p03", q: "AL-03 (svc_update added to Domain Admins): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 0 },
    { id: "p04", q: "AL-04 (rclone copying D:\\Projects): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 0 },
    { id: "p05", q: "AL-05 (shadow copies and backup catalog deleted): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 0 },
    { id: "p06", q: "AL-06 (ransomware behavior on ENG-FS01): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 0 },
    { id: "p07", q: "AL-07 (clean antivirus scan): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 3 },
    { id: "p08", q: "AL-08 (unknown USB on PLANT-PC-07): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 2 },
    { id: "p09", q: "AL-09 (reported phishing email, no clicks): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 2 },
    { id: "p10", q: "AL-10 (Tom Becker's failed logons): priority?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 3 },
    { id: "fp10", q: "AL-10 is best described as:", kind: "choice", opts: ["True positive", "False positive", "False negative", "True negative"], answer: 1 },
    { id: "set", q: "Which alerts belong to the same incident?", kind: "choice", opts: ["AL-05 and AL-06 only", "AL-02 through AL-06", "AL-01 through AL-06", "All ten alerts"], answer: 1 },
    { id: "ip", q: "Which internal IP address links the VPN login in AL-02 to the new admin account in AL-03? Type just the address.", kind: "text", answer: ["10.250.0.37"] },
    { id: "earliest", q: "Which alert shows the earliest step of the attack?", kind: "choice", opts: ["AL-01", "AL-02", "AL-03", "AL-04", "AL-05", "AL-06"], answer: 1 },
    { id: "first", q: "What is your first action at 06:05?", kind: "choice", opts: ["Email Marcus a summary and wait for his reply", "Call Dee Ortiz to isolate ENG-FS01 now, then escalate to Marcus", "Start a full antivirus scan of ENG-FS01", "Restore D:\\Projects from Friday's backup tape"], answer: 1 },
    { id: "sla", q: "How many hours is Cedar Creek's target for a P1?", kind: "number", answer: 4 },
    { id: "low", q: "AL-04 had only Low severity in the EDR console, yet you ranked it P1. Explain in one or two sentences why, and what that tells you about trusting a tool's severity label.", kind: "text" },
    { id: "usb", q: "Explain why AL-08 is P3 rather than P1, and what you would do about it today.", kind: "text" }
  ],
  reflection: "Five of the ten alerts were one attack, and the most important one (AL-02) was only rated Medium by the tool. Write a short paragraph to Marcus: which single change would have caught this attack hours earlier (before 03:36), and why? Consider people (who watches overnight), tools (EDR policy, SIEM correlation), and controls (MFA)."
};

COURSE_LABS['8.4'] = {
  id: "8.4", week: 8, title: "Write Cedar Creek's phishing playbook", mins: 20, env: "browser",
  goal: "Write Cedar Creek's first incident playbook: a one-page checklist for a phishing email that steals an employee's password, organized by the six steps of the incident response lifecycle.",
  youNeed: [
    "Lesson 8.3 (containment, eradication, and recovery) finished",
    "Your Lab 8.1 answers, especially alert AL-09",
    "About 20 minutes"
  ],
  steps: [
    {
      title: "What a playbook is",
      body: [
        "A <strong>playbook</strong> is a short checklist for one type of incident. It is written in advance so the person on shift at 6 AM does not have to invent the response. A good playbook names its <strong>trigger</strong> (what starts it), its <strong>owner</strong>, the <strong>priority</strong> rules, and then the actions for each step, in order, with who does each one.",
        "Keep it short. Each action should be one line that starts with a verb: 'Disable the account', not 'The account should probably be disabled if possible'."
      ]
    },
    {
      title: "The scenario to plan for",
      body: [
        "In Lab 8.1, alert AL-09 was a 'Holiday bonus schedule' phishing email from hr-notice@cedarcreek-benefits.net sent to 14 people. Nobody clicked. Next time, someone will. Plan for this version:",
        "A phishing email reaches 14 employees. One of them, in Accounts Payable, clicks the link and types her Microsoft 365 password into a fake login page, then reports it with the Report button in Outlook. Twenty minutes later, Microsoft 365 shows a sign-in to her account from an unfamiliar address, and a new inbox rule that forwards every email containing 'invoice' to an outside address. Attackers add rules like this to watch payments and set up business email compromise, the same kind of fraud Amanda Singh stopped in August.",
        "Tools Cedar Creek has: the Microsoft 365 admin and security portals (message trace, search and purge of email across mailboxes, password reset, revoke sessions, sign-in logs, inbox rule review), the EDR console for office PCs, FW-CORE, and the Report button in Outlook."
      ]
    },
    {
      title: "Write it, step by step",
      body: [
        "For each step, write two to five one-line actions, each with who does it. Some prompts:",
        "<strong>Preparation:</strong> what must exist before this ever happens (training, the Report button, MFA, a list of who can purge email)? <strong>Detection and analysis:</strong> how do you confirm the email is malicious, find every recipient, and find out who clicked or typed a password? <strong>Containment:</strong> what do you do to the affected account and to the email still sitting in 13 other inboxes? <strong>Eradication:</strong> what did the attacker leave behind that must be removed? <strong>Recovery:</strong> how does the user get back to work safely, and what do you watch afterward? <strong>Lessons learned:</strong> what do you measure and change?",
        "Then answer the three quick questions about order and priority."
      ],
      tip: "Do not forget payments. If the attacker was reading Accounts Payable email, someone must check with Finance whether any vendor bank details were changed or any payment was sent while the account was compromised."
    }
  ],
  checkpoints: [
    { id: "trig", q: "Trigger, owner, and priority rules: what starts this playbook, who owns it, and when is it P3, P2, or P1?", kind: "text" },
    { id: "prep", q: "Preparation actions:", kind: "text" },
    { id: "det", q: "Detection and analysis actions:", kind: "text" },
    { id: "cont", q: "Containment actions:", kind: "text" },
    { id: "erad", q: "Eradication actions:", kind: "text" },
    { id: "rec", q: "Recovery actions:", kind: "text" },
    { id: "ll", q: "Lessons learned actions:", kind: "text" },
    { id: "q1", q: "The employee reports she typed her password into the fake page ten minutes ago. Which action comes first?", kind: "choice", opts: ["Reset her password, require MFA re-registration, and revoke her active sessions", "Send an awareness email to all staff", "Search the other 13 mailboxes for the email", "Schedule a lessons-learned meeting"], answer: 0 },
    { id: "q2", q: "During eradication, what attacker change from the scenario must be removed from her mailbox?", kind: "choice", opts: ["Her email signature", "The inbox rule forwarding 'invoice' emails to an outside address", "Her calendar sharing", "Her out-of-office message"], answer: 1 },
    { id: "q3", q: "Using Cedar Creek's definitions, what priority is this incident once the attacker's sign-in is confirmed but before any payment is affected?", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 1 }
  ],
  reflection: "Your playbook will be used by someone who did not write it, at 6 AM, under pressure. Which one line in it matters most, and why? What would you test in a tabletop exercise to prove the playbook works?"
};

COURSE_LABS['8.2'] = {
  id: "8.2", week: 8, title: "Investigate the ENG-FS01 ransomware in Kali", mins: 65, env: "kali",
  goal: "Use grep, cut, sort, uniq, and awk on the evidence from incident CC-IR-2026-01 to rebuild what happened: how the attacker got in, which accounts they used, what they took, how much they encrypted, and when. Then check the integrity of the collected evidence and review its chain of custody.",
  youNeed: [
    "Your Kali VM, logged in, with internet access",
    "Lab 8.1 and Lesson 8.4 (forensics basics) finished",
    "About 65 minutes"
  ],
  steps: [
    {
      title: "Download and unpack the evidence pack",
      body: [
        "Marcus has put the logs and evidence the team collected on Wednesday morning into one pack. Download it into your labs folder and unpack it, the same way you did in Week 1."
      ],
      cmd: "cd ~/labs\nwget https://bo5hi.github.io/Teaching-Platform/assets/cedarcreek/cc-week8.zip\nunzip cc-week8.zip\ncd cedarcreek-week8\nls -R",
      expect: "Five items at the top: README.txt and the folders evidence, it, logs, and notes. ls -R then lists the files inside each folder.",
      tip: "If cd ~/labs fails, create the folder first with mkdir ~/labs. If unzip asks whether to replace files, you already unpacked it once; answer A for all."
    },
    {
      title: "Read the handoff before the logs",
      body: [
        "Always read what the people on the scene already know before you start searching. Marcus's email tells you what was done, what he needs, and one detail that will trip you up if you miss it: the firewall logs use UTC, and the Windows and EDR logs use local Central time, which is six hours behind UTC in December. So 07:41 UTC is 01:41 local."
      ],
      cmd: "cat README.txt\ncat notes/marcus_handoff.txt",
      expect: "The pack's README, then Marcus's email of 07:35 with three requests: a timeline, a check of the evidence hashes, and a review of the custody sheet."
    },
    {
      title: "Look at the VPN log",
      body: [
        "<code>logs/fw-core_vpn.log</code> is the VPN and admin log from FW-CORE, the perimeter firewall. Each line starts with a UTC timestamp (the Z at the end means UTC). <code>AUTH_FAIL</code> is a failed login, <code>AUTH_OK</code> a successful one, and <code>src=</code> is the internet address the attempt came from.",
        "Count the lines, then count all the failures."
      ],
      cmd: "head logs/fw-core_vpn.log\nwc -l logs/fw-core_vpn.log\ngrep -c AUTH_FAIL logs/fw-core_vpn.log",
      expect: "The first lines are normal Tuesday evening logins by staff working from home. Most show mfa=push profile=CC-REMOTE (certificate, password and a push approval); Tom Becker's shows mfa=none profile=CC-LEGACY, the old password-only profile any VPN user can still pick. wc -l prints 160. grep -c prints the total number of failed logins."
    },
    {
      title: "Find the password spray",
      body: [
        "A few failures are normal: people mistype passwords. A <strong>password spray</strong> looks different: one source tries one or two common passwords against many usernames, slowly, to avoid locking accounts out.",
        "<code>grep -o</code> prints only the part of each line that matches, here the <code>src=</code> field. Counting those shows which address produced the failures."
      ],
      cmd: "grep AUTH_FAIL logs/fw-core_vpn.log | grep -o 'src=[^ ]*' | sort | uniq -c | sort -nr",
      expect: "One address with far more failures than any other, at the top. The other lines are single typos by staff."
    },
    {
      title: "Measure the spray",
      body: [
        "Now look only at the attacker's address. The first command counts its failures. The second pulls out each username it tried, keeps one copy of each (<code>sort -u</code>), and counts them. The third counts the usernames that do not even exist at Cedar Creek (<code>reason=no_such_user</code>), which tells you the attacker was guessing from a list of generic names as well as real employees' names.",
        "Finally, look at when the spray started."
      ],
      cmd: "grep 203.0.113.77 logs/fw-core_vpn.log | grep -c AUTH_FAIL\ngrep 203.0.113.77 logs/fw-core_vpn.log | grep AUTH_FAIL | grep -o 'user=[^ ]*' | sort -u | wc -l\ngrep 203.0.113.77 logs/fw-core_vpn.log | grep no_such_user | grep -o 'user=[^ ]*' | sort -u | wc -l\ngrep 203.0.113.77 logs/fw-core_vpn.log | head -3",
      expect: "Three numbers, then the first three spray attempts, starting at 07:15 UTC (01:15 local)."
    },
    {
      title: "Find the login that worked",
      body: [
        "Search for successful logins from the attacker's address. Note the account, the exact time, and the <code>assigned=</code> address: the internal IP address the VPN gave the attacker's session. Every action the attacker takes inside the network comes from that address, so it is the thread you will pull next.",
        "Convert the time to local: subtract six hours."
      ],
      tip: "Two facts from earlier weeks explain this line. Miguel Alvarez was added to VPN-Users on December 1 for year-end work from home and never enrolled in MFA, so the only profile he could use was CC-LEGACY (Week 3). And 203.0.113.77 was on the Heartland ISAC IRONLATCH list you swept in Week 5; the domains went into the web filter that day, but the IP block for FW-CORE was still waiting for the holiday change window.",
      cmd: "grep 203.0.113.77 logs/fw-core_vpn.log | grep AUTH_OK\ngrep CONFIG_CHANGE logs/fw-core_vpn.log",
      expect: "One AUTH_OK line at 07:41:58Z with mfa=none profile=CC-LEGACY. Then Dee's three firewall changes from Wednesday morning (12:19 to 12:27 UTC, which is 06:19 to 06:27 local)."
    },
    {
      title: "Follow the attacker's address through Windows",
      body: [
        "<code>logs/windows_security.csv</code> is a SIEM export of Windows security events, in local time. The columns are time, event ID, account, source IP, computer, and detail. The event IDs you need:"
      ],
      cmd: "head -1 logs/windows_security.csv\ngrep 10.250.0.37 logs/windows_security.csv",
      expect: "The header line, then nine events from 01:42 to 02:04, all from 10.250.0.37: m.alvarez logs on, reads three NETLOGON files, then ccadmin logs on, gets special privileges, opens an RDP session to ENG-FS01, and creates a new account that it adds to Domain Admins.",
      tip: "Event IDs: 4624 successful logon (type 3 = network, type 10 = Remote Desktop), 4672 special (admin) privileges assigned, 5145 a file on a network share was accessed, 4720 user account created, 4728 member added to a security group, 4725 account disabled, 4724 password reset."
    },
    {
      title: "How did a Purchasing account become an admin?",
      body: [
        "Look at the order. <code>m.alvarez</code> (an ordinary user) reads files from NETLOGON, a share that every domain user can read because it holds the logon scripts. Four minutes later the shared admin account <code>ccadmin</code> logs in from the same address. Something in NETLOGON gave the attacker the admin password.",
        "The pack includes a copy of the NETLOGON scripts. <code>grep -r</code> searches every file under a folder. Then check who else reads that script every morning."
      ],
      cmd: "grep -r ccadmin it/\ncat it/netlogon_copy/map_drives.bat\ngrep map_drives logs/windows_security.csv",
      expect: "One script maps a drive with the ccadmin account and its password written in plain text (removed from your copy). The last command shows ordinary users reading it at logon, which is normal: every user runs it. That is exactly the problem.",
      tip: "A password in a logon script is readable by every account in the domain. The attacker did not need to hack an admin; they only needed any user's password. Week 6's password audit had cracked both passwords involved here (m.alvarez still had the help desk default, and ccadmin's matches the 2017 script), but the resets were scheduled for January 4, after the year-end change freeze."
    },
    {
      title: "What happened on ENG-FS01",
      body: [
        "<code>logs/edr_eng-fs01.csv</code> holds the EDR events from the engineering file server, in local time. First list the serious ones. Then list everything the attacker's account did, keeping only the time, severity, event, and detail columns with <code>cut</code>."
      ],
      cmd: "grep -E 'HIGH|CRITICAL' logs/edr_eng-fs01.csv\ngrep ccadmin logs/edr_eng-fs01.csv | grep -v file_rename_batch | cut -d, -f1,4,5,6",
      expect: "Five HIGH or CRITICAL lines: the shadow copy and catalog deletions at 03:31, the ransomware behavior at 03:36, and Dee's isolation and process kill at 06:14 and 06:15. The second list shows the attacker's steps in order: RDP session, rclone dropped and run from 02:14 to 03:29, backups deleted, cc_upd.exe dropped and started.",
      tip: "Notice that the vssadmin line from Tuesday 23:10 is the normal nightly shadow copy being created. The attacker's line at 03:31 deletes them all. Same program, opposite meaning: always read the whole command."
    },
    {
      title: "Count the encrypted files with awk",
      body: [
        "The EDR wrote one <code>file_rename_batch</code> line per folder, with the number of files renamed. To total them, pull out the numbers and add them up.",
        "<code>awk</code> is a small language for working with columns of text. <code>awk '{s+=$1} END {print s}'</code> adds the first column of every line into a variable called s, and at the end prints it."
      ],
      cmd: "grep file_rename_batch logs/edr_eng-fs01.csv | wc -l\ngrep file_rename_batch logs/edr_eng-fs01.csv | grep -o 'renamed=[0-9]*' | cut -d= -f2 | awk '{s+=$1} END {print s}'",
      expect: "16 folders, then the total number of files renamed to .latch."
    },
    {
      title: "Measure what left the building",
      body: [
        "Ransomware crews often steal data before they encrypt it, then threaten to publish it. This is called <strong>double extortion</strong>. The ransom note in <code>evidence/README_LATCH.txt</code> makes that threat. The firewall's outbound log can tell you whether it is real.",
        "<code>logs/fw-core_egress.csv</code> is in UTC. Column 3 is the destination IP and column 7 is the bytes sent out. The awk command uses <code>-F,</code> to split on commas, keeps only rows whose destination is the address rclone used, adds up column 7, and prints the total in gigabytes (1 GB = 1,000,000,000 bytes) to one decimal place."
      ],
      cmd: "cat evidence/README_LATCH.txt\nhead -3 logs/fw-core_egress.csv\ngrep -c 192.0.2.145 logs/fw-core_egress.csv\ngrep 192.0.2.145 logs/fw-core_egress.csv | head -2\ngrep 192.0.2.145 logs/fw-core_egress.csv | tail -1\nawk -F, '$3==\"192.0.2.145\" {s+=$7} END {printf \"%.1f GB\\n\", s/1000000000}' logs/fw-core_egress.csv",
      expect: "The ransom note, the CSV header, a count of 77 connections, the first transfers starting at 08:10 to 08:14 UTC, the last one at about 09:29 UTC (03:29 local, when rclone finished), and a total of a few gigabytes.",
      tip: "If awk prints 0.0 GB, check the quotes: the whole program sits inside single quotes, and the IP address inside double quotes."
    },
    {
      title: "Collect your evidence lines in one file",
      body: [
        "Pull the key lines from all three sources into one file in your labs folder. You will use it to write the timeline checkpoint and again in Lab 8.3. Then hash it, so you can later prove it has not changed."
      ],
      cmd: "grep 203.0.113.77 logs/fw-core_vpn.log | grep AUTH_OK > ~/labs/w8_evidence.txt\ngrep 10.250.0.37 logs/windows_security.csv >> ~/labs/w8_evidence.txt\ngrep -E 'ccadmin|d.ortiz' logs/edr_eng-fs01.csv | grep -v file_rename_batch >> ~/labs/w8_evidence.txt\ncat ~/labs/w8_evidence.txt\nsha256sum ~/labs/w8_evidence.txt",
      expect: "About 25 lines: the VPN login (UTC), the Windows events and the EDR events (local), then a SHA-256 hash and the file name."
    },
    {
      title: "Verify the evidence hashes",
      body: [
        "When Dee collected the triage files from ENG-FS01, she recorded a SHA-256 hash of each one in <code>SHA256SUMS.txt</code>. <code>sha256sum -c</code> recalculates every hash and compares it with the recorded value. OK means the file is unchanged since collection. FAILED means it is not the file Dee collected.",
        "If one fails, look at the end of it to see whether you can tell why."
      ],
      cmd: "cd evidence\ncat SHA256SUMS.txt\nsha256sum -c SHA256SUMS.txt\ntail -3 ENG-FS01_netconns.txt",
      expect: "Four results. Three say OK and one says FAILED, followed by a warning that 1 computed checksum did NOT match. The end of the failed file shows a line someone added after collection."
    },
    {
      title: "Review the chain of custody",
      body: [
        "Read the custody sheet for the two evidence items. For each transfer, check that it has a time, who released the item, who received it, the purpose, and both signatures. Then look for time when nobody can account for an item.",
        "Connect what you find to the failed hash in the last step. One handling mistake explains both."
      ],
      cmd: "cat chain_of_custody_CC-IR-2026-01.txt\ncd ..",
      expect: "Five entries for items E1 (USB drive with triage files) and E2 (memory image). E2's record is clean. E1's has problems between 07:10 and 16:45."
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many failed VPN logins came from 203.0.113.77?", kind: "number", answer: 143 },
    { id: "c2", q: "How many different usernames did 203.0.113.77 try?", kind: "number", answer: 38 },
    { id: "c3", q: "Which account did the attacker log in with through the VPN?", kind: "text", answer: ["m.alvarez", "malvarez", "m alvarez"] },
    { id: "c4", q: "At what local (Central) time did that VPN login succeed? Use HH:MM on a 24-hour clock.", kind: "text", answer: ["01:41", "1:41", "01:41:58", "1:41:58", "01:41 AM", "1:41 AM", "01:41:58 AM", "1:41:58 AM"] },
    { id: "c5", q: "What internal IP address did the VPN assign to the attacker's session?", kind: "text", answer: ["10.250.0.37"] },
    { id: "c6", q: "Which NETLOGON file held the ccadmin password?", kind: "text", answer: ["map_drives.bat", "map_drives"] },
    { id: "c7", q: "What account did the attacker create and add to Domain Admins?", kind: "text", answer: ["svc_update"] },
    { id: "c8", q: "To which IP address did rclone send the data?", kind: "text", answer: ["192.0.2.145"] },
    { id: "c9", q: "How many gigabytes were sent to that address (one decimal place, as awk printed it)?", kind: "number", answer: 6.6 },
    { id: "c10", q: "How many files were renamed (encrypted) in total?", kind: "number", answer: 4174 },
    { id: "c11", q: "What file extension did the ransomware add?", kind: "text", answer: [".latch", "latch"] },
    { id: "c12", q: "Which evidence file failed the hash check?", kind: "text", answer: ["ENG-FS01_netconns.txt", "ENG-FS01_netconns", "netconns.txt"] },
    { id: "c13", q: "Describe the chain of custody problems with item E1 and explain how they connect to the failed hash.", kind: "text" },
    { id: "c14", q: "Paste your timeline: at least 10 events from the first spray attempt to the last containment action, each as 'YYYY-MM-DD HH:MM local (HH:MM UTC) - what happened - source log'.", kind: "paste" }
  ],
  reflection: "Dee killed the cc_upd.exe process at 06:15 and captured memory at 06:31. The order of volatility says to capture memory first, because killing the process erased its state, possibly including the encryption key. Was she right to stop the encryption first? Argue one side in a short paragraph, and say what Cedar Creek's ransomware playbook should tell the next responder to do."
};

COURSE_LABS['8.3'] = {
  id: "8.3", week: 8, title: "Write the CC-IR-2026-01 incident report", mins: 25, env: "browser",
  goal: "Turn your Lab 8.2 findings into the incident report Marcus will give Greg Palmer, the insurer, and the team: classification, timeline, scope, root cause, actions, recovery math, notification, and recommendations, topped with an executive summary a CFO can read in one minute.",
  youNeed: [
    "Lab 8.2 submitted, with your timeline and ~/labs/w8_evidence.txt",
    "Lesson 8.5 (incident reports) finished",
    "About 25 minutes"
  ],
  steps: [
    {
      title: "Who reads this report",
      body: [
        "Greg Palmer reads the executive summary and the impact. The cyber insurance company and any lawyers read the timeline, the scope, and what data was involved. Marcus and Dee read the root cause, the actions, and the recommendations. Next year's analyst reads all of it, because it is the closest thing Cedar Creek has to a ransomware playbook.",
        "Each checkpoint below is one section of the report. Write in plain sentences, use real names, hosts, accounts, and times, and keep facts separate from conclusions."
      ]
    },
    {
      title: "The facts from your investigation",
      body: [
        "If any of these disagree with your Lab 8.2 answers, go back and check your work before writing.",
        "<strong>Entry:</strong> password spray against the VPN from 203.0.113.77, 01:15 to 01:41 local (07:15 to 07:41 UTC): 143 failures across 38 usernames, then a successful login for m.alvarez at 01:41:58 on the CC-LEGACY profile, which takes a password alone and which any VPN-Users member can pick. Miguel was added to VPN-Users on December 1 and still had the help desk's default password, which Week 6's audit had cracked; resets were deferred to January 4. 203.0.113.77 had been on the IRONLATCH indicator list since December 7, but the IP was never blocked.",
        "<strong>Privilege:</strong> from 10.250.0.37 the attacker read map_drives.bat in NETLOGON, which contains the ccadmin password, and logged in as ccadmin at 01:53. Created svc_update and added it to Domain Admins at 02:03 to 02:04.",
        "<strong>Theft:</strong> RDP to ENG-FS01 at 01:58. Rclone copied D:\\Projects to 192.0.2.145 from 02:14 to 03:29, about 6.6 GB.",
        "<strong>Destruction:</strong> shadow copies and the backup catalog deleted at 03:31. cc_upd.exe encrypted 4,174 files in 16 project folders (.latch) from 03:36. Ransom note signed IRONLATCH, demanding $650,000 in bitcoin and threatening to publish the drawings.",
        "<strong>Response:</strong> you triaged at 06:05 and called Dee at 06:08. Isolation at 06:14, process killed 06:15, CC-LEGACY disabled and VPN limited to IT 06:19, accounts disabled and ccadmin reset 06:20 to 06:24, firewall blocks 06:26 to 06:27, memory captured 06:31, triage files 06:44 to 06:52."
      ]
    },
    {
      title: "Recovery facts and the math",
      body: [
        "From Dee's note (notes/backup_status.txt): the last good backup of ENG-FS01 is the weekly LTO tape that finished <strong>Friday, December 18 at 23:47</strong>. It survived because it was offline on a shelf. D:\\Projects holds about 41,900 files. The restore plan is: rebuild ENG-FS01 from a clean image (about 5 hours), restore D:\\Projects from tape (about 9 hours), then copy back files changed since Friday that were not encrypted, after a malware scan (about 2 hours).",
        "Tom Becker says Engineering can last one day without the server. That sets the <strong>recovery time objective (RTO)</strong> at 24 hours. Engineering would like to lose no more than one day of work, a <strong>recovery point objective (RPO)</strong> of 24 hours.",
        "For the data-loss checkpoint, count the hours from the end of the last good backup (Friday 23:47) to the start of encryption (Wednesday 03:36). Friday 23:47 to Tuesday 23:47 is 4 days, or 96 hours. Add the rest and round down to whole hours."
      ]
    },
    {
      title: "Notification facts",
      body: [
        "Legal counsel will make the final call, but your report must give them the facts. So far: the stolen and encrypted files are engineering drawings and customer specifications. No personnel, payroll, or customer personal data has been found in D:\\Projects. FS-HR01 shows no access from the attacker's address. Several customer contracts require Cedar Creek to tell the customer when their drawings are exposed. Cedar Creek has a cyber insurance policy that requires prompt notice. Marcus plans to report to the FBI. Cedar Creek belongs to the Heartland Manufacturing ISAC, where members share indicators of compromise."
      ]
    },
    {
      title: "Write the executive summary last",
      body: [
        "Fill in the other sections first, then write the summary. Aim for five sentences: what happened, what it affected, the current status, what it may cost or what is at risk, and the one decision you need from Greg. No jargon: say 'a guessed password', not 'credential compromise via password spray'.",
        "Before you submit, read your summary as if you were Greg. Could you repeat it to the owners in a hallway?"
      ]
    }
  ],
  checkpoints: [
    { id: "r1", q: "Incident type:", kind: "choice", opts: ["Ransomware with data theft (double extortion)", "Phishing", "Insider data theft", "Denial of service"], answer: 0 },
    { id: "r2", q: "Priority:", kind: "choice", opts: ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"], answer: 0 },
    { id: "r3", q: "Detection: how and when was the incident found, and how long after the attack began? (2-3 sentences)", kind: "text" },
    { id: "r4", q: "Timeline: paste your 10 or more key events, with local and UTC times and the source of each.", kind: "paste" },
    { id: "r5", q: "Scope and impact: which hosts, accounts, and data were affected, and what was the business impact?", kind: "text" },
    { id: "r6", q: "Root cause: list at least three conditions that together made this attack possible.", kind: "text" },
    { id: "r7", q: "Data at risk: how many whole hours passed between the end of the last good backup and the start of encryption (rounded down)?", kind: "number", answer: 99 },
    { id: "r8", q: "How many hours does Dee's full restore plan take?", kind: "number", answer: 16 },
    { id: "r9", q: "Can the restore plan meet the 24-hour RTO?", kind: "choice", opts: ["Yes, if the restore starts promptly: 16 hours fits inside 24", "No: the restore takes longer than the RTO", "It cannot be known until the restore is done"], answer: 0 },
    { id: "r10", q: "Does the actual data loss meet Engineering's 24-hour RPO?", kind: "choice", opts: ["Yes", "No: weekly backups allowed about four days of changes to be lost"], answer: 1 },
    { id: "r11", q: "Actions: list the containment and eradication steps already taken, and the eradication and recovery steps still to do.", kind: "text" },
    { id: "r12", q: "Notification: who outside Cedar Creek should be told, and why? Note anything legal counsel must decide.", kind: "text" },
    { id: "r13", q: "Recommendations: give your top three fixes, each with an owner (a Cedar Creek name) and a target date.", kind: "text" },
    { id: "r14", q: "Executive summary for Greg Palmer: five plain sentences.", kind: "text" }
  ],
  reflection: "Plan the lessons-learned meeting. Who should attend, which three questions would you ask, and how would you keep it blameless when one of the mistakes (opening the evidence files) was made by a named coworker?"
};
