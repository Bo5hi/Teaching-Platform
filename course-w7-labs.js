// Week 7 labs. Shapes: docs/COURSE_V2.md
// Auto-check answers come from the lab pack: run node docs/tools/make_week7_pack.js and compare with its printout.
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['7.1'] = {
  id: "7.1", week: 7, title: "Read the weekend firewall log", mins: 45, env: "kali",
  goal: "Download the weekend log exports Marcus left for you and investigate FW-CORE's firewall log with grep, awk, sort, and uniq. You will separate internet background noise from the one pattern that an over-broad allow rule let through, and identify the office PC behind it.",
  youNeed: [
    "Your Kali VM, started and logged in, with internet access",
    "About 45 minutes"
  ],
  steps: [
    {
      title: "Download and unpack the Week 7 lab pack",
      body: [
        "Marcus exported the weekend's logs from FW-CORE, the IPS, DNS, the EDR console, and the domain controller. Download them into your labs folder and unpack them. <code>mkdir -p</code> creates the folder only if it does not exist yet, so the command is safe to run again."
      ],
      cmd: "mkdir -p ~/labs && cd ~/labs\nwget https://bo5hi.github.io/Teaching-Platform/assets/cedarcreek/cc-week7.zip\nunzip -o cc-week7.zip\ncd cedarcreek-week7\nls logs it memos",
      expect: "wget saves cc-week7.zip (about 20 KB). unzip lists the files it creates. ls shows five files in logs, two in it, and three in memos.",
      tip: "If wget cannot resolve the host, check that the VM's network adapter is set to NAT and your PC is online. -o tells unzip to overwrite without asking if you run it twice."
    },
    {
      title: "Read your assignment",
      body: [
        "Read Marcus's note. It tells you what he needs by 10:00 and two facts about how FW-CORE is set up. Keep both facts in mind as you work."
      ],
      cmd: "cat memos/monday_note_from_marcus.txt",
      expect: "Marcus's note, ending with the facts that the IPS is in alert-only mode and that anything outbound that is not web traffic falls through to Copier-Test, the any-to-any rule from your Week 4 review."
    },
    {
      title: "Look at the log before you analyze it",
      body: [
        "Each line is one connection that crossed FW-CORE. Read the first lines from left to right: the time, the device name, then a list of <code>key=value</code> fields. <strong>action</strong> is ALLOW or DENY. <strong>dir</strong> is in (from the internet) or out (from Cedar Creek). <strong>src</strong> and <strong>spt</strong> are the source address and port. <strong>dst</strong> and <strong>dpt</strong> are the destination address and port. <strong>bytes</strong> is how much data moved, and <strong>rule</strong> is the rule that made the decision.",
        "Then count the lines. Write down the exact number <code>wc -l</code> prints for the first checkpoint."
      ],
      cmd: "head -5 logs/fw-core.log\nwc -l logs/fw-core.log",
      expect: "Five log lines from Friday afternoon, then a number followed by logs/fw-core.log."
    },
    {
      title: "Count allows and denies with awk",
      body: [
        "<code>awk</code> splits each line into fields at the spaces. <code>$1</code> is the first field (the time), <code>$2</code> the second (FW-CORE), <code>$3</code> the third (action=...), and so on up to <code>$11</code> (rule=...). <code>awk '{print $3}'</code> prints only the action field of every line.",
        "Piped into <code>sort | uniq -c</code>, that gives a count of each action."
      ],
      cmd: "awk '{print $3}' logs/fw-core.log | sort | uniq -c",
      expect: "Two lines: a count for action=ALLOW and a count for action=DENY. Most traffic was allowed."
    },
    {
      title: "Who knocked on the door? Inbound denies by source",
      body: [
        "Inbound denied lines are the internet trying to connect to Cedar Creek's public address (198.51.100.24) and being refused by the <code>Default-Deny</code> rule. Count them, then rank the sources. Field 6 is the source.",
        "Every public address on the internet gets scanned all day. A handful of hits from many addresses is background noise. One source with far more hits than the rest deserves a closer look."
      ],
      cmd: "grep 'action=DENY dir=in' logs/fw-core.log | wc -l\ngrep 'action=DENY dir=in' logs/fw-core.log | awk '{print $6}' | sort | uniq -c | sort -nr | head -5",
      expect: "A count of inbound denies, then the top five sources. One address has several times more denies than any other."
    },
    {
      title: "Was it a port scan?",
      body: [
        "Look at every line from the top source. The trailing space inside the quotes stops grep from also matching a longer address that starts the same way. Then count how many <strong>different</strong> destination ports (field 9) it tried. <code>sort -u</code> keeps one copy of each value.",
        "Many different ports, one after another, a second apart, is a <strong>port scan</strong>: someone checking which services Cedar Creek exposes. Default deny blocked every attempt."
      ],
      cmd: "grep 'src=203.0.113.91 ' logs/fw-core.log | head -5\ngrep 'src=203.0.113.91 ' logs/fw-core.log | awk '{print $9}' | sort -u | wc -l",
      expect: "Lines from early Saturday morning, one second apart, each to a different port. Then the number of distinct ports."
    },
    {
      title: "Which service do scanners want most?",
      body: [
        "Now rank the destination ports across all inbound denies. The top port tells you which service attackers most want to find open on the internet. Look up what that port number is used for if you do not recognize it."
      ],
      cmd: "grep 'action=DENY dir=in' logs/fw-core.log | awk '{print $9}' | sort | uniq -c | sort -nr | head -5",
      expect: "Five ports with counts. The top one is well ahead of the rest."
    },
    {
      title: "What did the inbound rules allow?",
      body: [
        "Denied traffic already failed. The important question is what got in. List every inbound ALLOW line and the rule that allowed it."
      ],
      cmd: "grep 'action=ALLOW dir=in' logs/fw-core.log",
      expect: "Three lines, all to port 443 on 198.51.100.24, all allowed by Inbound-SSL-VPN. These are staff connecting to the VPN portal from home."
    },
    {
      title: "Now look the other way: outbound rules",
      body: [
        "Count outbound traffic by action and rule (fields 3 and 11). This shows you FW-CORE's whole outbound policy in practice."
      ],
      cmd: "grep 'dir=out' logs/fw-core.log | awk '{print $3, $11}' | sort | uniq -c",
      expect: "Three lines: a few hundred connections allowed by rule=Copier-Test, fewer allowed by rule=Office-Web, and a few denied by rule=Block-SMB-Out. Office-Web allows only the web ports 80 and 443, so everything else that left went out through Copier-Test."
    },
    {
      title: "What did the one outbound block catch?",
      body: [
        "Port 445 is SMB, Windows file sharing. It should never leave the building: a PC sending SMB to the internet can leak passwords and files, and worms such as WannaCry spread over it. Read the denied outbound lines and put a name on the PC that sent them."
      ],
      cmd: "grep 'action=DENY dir=out' logs/fw-core.log\ngrep '10.20.10.51,' it/dhcp_leases.csv",
      expect: "Four denied connections on Friday afternoon from 10.20.10.51 to one outside address on port 445, about a minute apart, then the PC's name. A mapped drive pointing at an outside server is the usual cause; the help desk should fix it."
    },
    {
      title: "Which ports did office PCs use?",
      body: [
        "Normal office web traffic leaves on port 443 (HTTPS) and port 80 (HTTP). Rank the destination ports of every allowed outbound connection."
      ],
      cmd: "grep 'action=ALLOW dir=out' logs/fw-core.log | awk '{print $9}' | sort | uniq -c | sort -nr",
      expect: "Three ports. One of them is not 443 or 80, and it has more connections than the normal web ports put together."
    },
    {
      title: "Who used port 8443, and where to?",
      body: [
        "Port 8443 is sometimes used by legitimate web services, so the port alone proves nothing. Find out which inside addresses (field 6) talked to which outside addresses (field 8) on that port."
      ],
      cmd: "grep 'dir=out' logs/fw-core.log | grep 'dpt=8443' | awk '{print $6, $8}' | sort | uniq -c | sort -nr",
      expect: "Two pairs. One inside address made a handful of connections to one server. Another made hundreds of connections to a different server."
    },
    {
      title: "Look at the timing",
      body: [
        "Print just the times (field 1) of the first eight connections from the busy pair. People browse in bursts. Programs run on timers. A connection at the same interval all weekend, day and night, is what malware checking in with its <strong>command and control (C2)</strong> server looks like. This is called <strong>beaconing</strong>."
      ],
      cmd: "grep 'dst=203.0.113.45 ' logs/fw-core.log | head -8 | awk '{print $1}'",
      expect: "Eight times starting Friday at 16:55, each about ten minutes after the one before."
    },
    {
      title: "Follow the bytes",
      body: [
        "Data theft shows up as bytes leaving. This <code>awk</code> program adds up the bytes of every outbound connection by destination. <code>split($8,d,\"=\")</code> cuts the field dst=203.0.113.45 at the equals sign so <code>d[2]</code> holds just the address, and the same trick pulls the number out of the bytes field. The END block prints each total after awk has read the whole file.",
        "Read the top line carefully. 1,000,000,000 bytes is about 1 GB."
      ],
      cmd: "awk '/dir=out/ { split($8,d,\"=\"); split($10,b,\"=\"); total[d[2]] += b[2] } END { for (ip in total) print total[ip], ip }' logs/fw-core.log | sort -nr | head -3",
      expect: "Three destinations with their total bytes. The top one received more than a gigabyte, over 100 times more than the next."
    },
    {
      title: "Put a name on the address",
      body: [
        "Addresses change; people and computers have names. The DHCP lease list shows which office PC had which address this weekend. Look up the inside address behind the beaconing and the big upload, and also the address behind the handful of 8443 connections."
      ],
      cmd: "head -1 it/dhcp_leases.csv\ngrep '10.20.8.37,' it/dhcp_leases.csv\ngrep '10.20.6.21,' it/dhcp_leases.csv",
      expect: "The CSV header, then one line for each address with the PC's name, its user, and the department.",
      tip: "The comma after the address matters: without it, grep for 10.20.8.3 would also match 10.20.8.37 and 10.20.8.38."
    }
  ],
  checkpoints: [
    { id: "c1", q: "What number does wc -l logs/fw-core.log print?", kind: "number", answer: 706 },
    { id: "c2", q: "How many inbound connections did FW-CORE deny (lines containing action=DENY dir=in)?", kind: "number", answer: 197 },
    { id: "c3", q: "Which outside IP address had the most inbound denies?", kind: "text", answer: ["203.0.113.91", "src=203.0.113.91"] },
    { id: "c4", q: "How many different destination ports did that address try?", kind: "number", answer: 40 },
    { id: "c5", q: "Which destination port was the most denied inbound port overall? Give the number only.", kind: "number", answer: 3389 },
    { id: "c6", q: "Which FW-CORE rule allowed the most outbound connections, including everything on port 8443?", kind: "text", answer: ["Copier-Test", "rule=Copier-Test", "copier-test", "21", "rule 21"] },
    { id: "c7", q: "Which PC tried to send SMB (port 445) to the internet and was blocked by Block-SMB-Out? Give the hostname.", kind: "text", answer: ["CS-PC-02"] },
    { id: "c8", q: "Which inside IP address made hundreds of connections to 203.0.113.45 on port 8443?", kind: "text", answer: ["10.20.8.37", "src=10.20.8.37"] },
    { id: "c9", q: "What is the hostname of that PC, according to it/dhcp_leases.csv?", kind: "text", answer: ["MKT-LT-02"] },
    { id: "c10", q: "Write two outbound (egress) rules you would add to FW-CORE, in plain English, that would have blocked or exposed this traffic. Say what each rule allows or denies and why.", kind: "text" }
  ],
  reflection: "Marcus asked whether anything in this log is real. Write him three or four sentences: what is background noise and safe to ignore, what is not, and the single piece of evidence from your commands that convinced you. Remember that he reads quickly and wants a plain answer."
};

COURSE_LABS['7.2'] = {
  id: "7.2", week: 7, title: "Correlate like a SIEM: the weekend timeline", mins: 50, env: "kali",
  goal: "Do by hand what a SIEM does automatically. Combine the IPS alerts, EDR alerts, DNS lookups, firewall log, and domain controller sign-ins from the weekend, separate the false positive from the real alerts, and build one timeline that shows how MKT-LT-02 was compromised and what happened next.",
  youNeed: [
    "Lab 7.1 finished, with the pack in ~/labs/cedarcreek-week7",
    "About 50 minutes"
  ],
  steps: [
    {
      title: "Start with the alerts everyone ignored",
      body: [
        "Move into the pack. The IPS alerts are in Suricata's 'fast' format: a time stamp, the rule ID, the rule's message, its classification, a priority from 1 (most urgent) to 3, the protocol, and source and destination.",
        "Count all the alerts, then count them by message. <code>grep -o</code> prints only the part of each line that matches. The pattern <code>CC-LOCAL [^[]*</code> means 'CC-LOCAL followed by any characters up to the next [', which is exactly the message text."
      ],
      cmd: "cd ~/labs/cedarcreek-week7\nhead -3 logs/ips-alerts.log\nwc -l logs/ips-alerts.log\ngrep -o 'CC-LOCAL [^[]*' logs/ips-alerts.log | sort | uniq -c | sort -nr",
      expect: "Three alert lines, the total count, then four different messages. One message makes up nearly all of the alerts."
    },
    {
      title: "Sort by priority, not by volume",
      body: [
        "The loudest alert is not always the most important one. Count the Priority 1 alerts and read them. Then read the priority 2 alert too."
      ],
      cmd: "grep -c 'Priority: 1' logs/ips-alerts.log\ngrep 'Priority: 1' logs/ips-alerts.log\ngrep 'Priority: 2' logs/ips-alerts.log",
      expect: "One Priority 1 alert: a large outbound session from 10.20.8.37 to 203.0.113.45, early Saturday morning. The Priority 2 alert is the port sweep you found in Lab 7.1, which the firewall had already blocked."
    },
    {
      title: "Find the false positive",
      body: [
        "The non-standard port alert fired for two different inside hosts. Look at the one that is not 10.20.8.37. <code>grep -v</code> keeps lines that do <strong>not</strong> match.",
        "Then enrich it: look up the outside address in the DNS log to see what name the PC asked for, and look up the inside address in the DHCP list. A business service the company knows and uses, on a port it is known to use, is a <strong>false positive</strong>. This is the same alert that blocked payroll in 2024 when the IPS was in blocking mode."
      ],
      cmd: "grep 'non-standard port' logs/ips-alerts.log | grep -v 10.20.8.37\ngrep 'answer=192.0.2.80' logs/dns-queries.log | head -1\ngrep '10.20.6.21,' it/dhcp_leases.csv",
      expect: "One alert from 10.20.6.21 to 192.0.2.80 on Friday afternoon. The DNS line shows that PC asked for app.tallgrasspayroll.com, the portal of Tallgrass Payroll, Cedar Creek's payroll provider. The DHCP line shows the PC belongs to Rosa Medina in HR."
    },
    {
      title: "What did the EDR see?",
      body: [
        "Open the EDR alerts. The columns are time, host, user, severity, policy, threat, file, and action. Then read Dee's memo about the Marketing policy.",
        "Notice the action column. On ENG-14 and CS-PC-06 the EDR quarantined the threat on its own. On MKT-LT-02 it did not."
      ],
      cmd: "cat logs/edr-alerts.csv\ncat memos/edr_policy_change.txt",
      expect: "Six EDR alerts. Four are on MKT-LT-02, all marked Alert only under the Detect policy. The first one is a document macro launching PowerShell at 16:53:10 on Friday. Dee's memo explains why Marketing was on Detect and when it was supposed to change back."
    },
    {
      title: "What did the laptop look up?",
      body: [
        "Before malware can connect to its server, it usually looks up the server's name in DNS. Count the names MKT-LT-02 (10.20.8.37) asked for. Field 3 is the query.",
        "Then find the very first lookup of the unusual name. <code>grep -m1</code> stops after the first match."
      ],
      cmd: "grep 'client=10.20.8.37 ' logs/dns-queries.log | awk '{print $3}' | sort | uniq -c | sort -nr\ngrep -m1 'telemetry-sync' logs/dns-queries.log",
      expect: "A ranked list with one name far above the normal sites, then the first lookup of that name: Friday at 16:55:30, answer 203.0.113.45."
    },
    {
      title: "Confirm the beacon",
      body: [
        "Match the DNS answer against the firewall log: the first connection to that address, and how many connections there were in total. A lookup followed one second later by a connection to the answer, then a connection every ten minutes, is the full beacon pattern."
      ],
      cmd: "grep -m1 'dst=203.0.113.45 ' logs/fw-core.log\ngrep -c 'dst=203.0.113.45 ' logs/fw-core.log",
      expect: "The first connection at 16:55:31 Friday, one second after the DNS lookup, then the total number of connections to that address over the weekend.",
      tip: "Check 203.0.113.45 against the Heartland ISAC IRONLATCH list you swept in Lab 5.2 (intel/isac_ironlatch_iocs_2026-12-07.txt in the Week 5 pack). It is on the list. The list arrived on December 7, but nobody added its addresses to FW-CORE."
    },
    {
      title: "What happened on the domain controller?",
      body: [
        "Look at the sign-in log. Columns: time, event ID, status, account, source host, source IP, logon type, and target. Event 4625 is a failed sign-in. Event 4624 is a success. Logon type 3 is a sign-in over the network.",
        "First list every failed sign-in, so you can see what normal failures look like (a user mistyping a password once or twice at their own PC). Then count failures that came from MKT-LT-02, and count how many <strong>different accounts</strong> they targeted. Field 4 is the account."
      ],
      cmd: "grep ',4625,' logs/dc01-auth.csv | cut -d, -f1,4,5 | head -8\ngrep ',4625,' logs/dc01-auth.csv | grep MKT-LT-02 | wc -l\ngrep ',4625,' logs/dc01-auth.csv | grep MKT-LT-02 | cut -d, -f4 | sort -u | wc -l\ngrep ',4625,' logs/dc01-auth.csv | grep MKT-LT-02 | sed -n '1p;$p'",
      expect: "The first two failures are Kevin Tran mistyping his password at his own PC on Friday afternoon. After that come failures from MKT-LT-02, each for a different account. Then the two counts, then the first and last of the MKT-LT-02 failures: a few minutes apart, early Saturday morning.",
      tip: "sed -n '1p;$p' prints only the first line and the last line of its input. It is a quick way to see when something started and stopped."
    },
    {
      title: "Did any guess work?",
      body: [
        "One attempt per account, a few seconds apart, against dozens of accounts, is <strong>password spraying</strong>. It is designed to stay under the lockout limit of 10 bad passwords per account in 30 minutes. Now look for <strong>successful</strong> sign-ins from MKT-LT-02 that were not Laura Kim's own."
      ],
      cmd: "grep MKT-LT-02 logs/dc01-auth.csv | grep ',4624,' | grep -v l.kim",
      expect: "Two successful sign-ins for one service account: one in the middle of the spray, and one about 18 minutes later to a file server.",
      tip: "svc-plotter is new. Jordan created it on 2026-12-03 for the Engineering plotter's scan-to-folder (\\\\ENG-FS01\\Scans) and gave it a weak password, so it was not in the Week 3 access review."
    },
    {
      title: "How much left, and when?",
      body: [
        "Back to the firewall. Print the bytes and time of every connection to 203.0.113.45 and sort by the number after the equals sign. <code>sort -t= -k2 -nr</code> means: split each line at '=' and sort by the second part, as a number, largest first."
      ],
      cmd: "grep 'dst=203.0.113.45 ' logs/fw-core.log | awk '{print $10, $1}' | sort -t= -k2 -nr | head -3",
      expect: "One line with more than a billion bytes, early Saturday morning, then ordinary beacons of about two thousand bytes."
    },
    {
      title: "Normalize the IPS time stamps",
      body: [
        "Every source except the IPS writes time as 2026-12-19T02:47:12. The IPS writes 12/19/2026-02:47:12.123456. To sort all sources together you must make them match. That is <strong>normalization</strong>, the second step of the SIEM pipeline.",
        "<code>sed -E</code> rewrites text with an extended regular expression. The parentheses capture the month, day, year, and time, and <code>\\3-\\1-\\2T\\4</code> puts them back in year-month-day order. The fraction of a second is dropped."
      ],
      cmd: "sed -E 's#^([0-9]{2})/([0-9]{2})/([0-9]{4})-([0-9:]{8})\\.[0-9]+#\\3-\\1-\\2T\\4#' logs/ips-alerts.log | grep 'Priority: 1'",
      expect: "The Priority 1 alert, now starting with 2026-12-19T03:06:40."
    },
    {
      title: "Build the timeline",
      body: [
        "Now collect the key event from each source into one file and sort it. Because every line now starts with the same time format, <code>sort</code> puts them in true time order. This is correlation: five tools, one story.",
        "Each command adds lines to the file with <code>&gt;&gt;</code>. The first one uses <code>&gt;</code> to start a fresh file."
      ],
      cmd: "grep MKT-LT-02 logs/edr-alerts.csv > ~/labs/w7_timeline.txt\ngrep -m1 'telemetry-sync' logs/dns-queries.log >> ~/labs/w7_timeline.txt\ngrep -m1 'dst=203.0.113.45 ' logs/fw-core.log >> ~/labs/w7_timeline.txt\ngrep ',4625,' logs/dc01-auth.csv | grep MKT-LT-02 | head -1 >> ~/labs/w7_timeline.txt\ngrep svc-plotter logs/dc01-auth.csv | grep ',4624,' >> ~/labs/w7_timeline.txt\ngrep 'bytes=1288490188' logs/fw-core.log >> ~/labs/w7_timeline.txt\nsed -E 's#^([0-9]{2})/([0-9]{2})/([0-9]{4})-([0-9:]{8})\\.[0-9]+#\\3-\\1-\\2T\\4#' logs/ips-alerts.log | grep 'Priority: 1' >> ~/labs/w7_timeline.txt\nsort ~/labs/w7_timeline.txt",
      expect: "Eleven lines in time order, from the macro alert at 16:53:10 on Friday to the Priority 1 IPS alert at 03:06:40 on Saturday.",
      tip: "If the order looks wrong, check that the sed command ran on the IPS line. A line that still starts with 12/19/2026 sorts before every line that starts with 2026."
    },
    {
      title: "Write the rule that would have caught it",
      body: [
        "A SIEM would have found this on Saturday morning if someone had written the right correlation rule and sent its alert to a person on call. Using Lesson 7.3's password spraying rule as a model, write a correlation rule in plain English for one part of this attack. State the trigger events and their sources, the time window, what must match (host, account, or address), and what action the SIEM should take."
      ]
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many alerts are in logs/ips-alerts.log in total?", kind: "number", answer: 59 },
    { id: "c2", q: "How many Priority 1 alerts are there?", kind: "number", answer: 1 },
    { id: "c3", q: "Which PC's IPS alert was a false positive? Give the hostname.", kind: "text", answer: ["HR-PC-01"] },
    { id: "c4", q: "Which EDR policy was MKT-LT-02 under when the alerts fired?", kind: "choice", opts: ["Protect", "Detect", "Isolate", "Disabled"], answer: 1 },
    { id: "c5", q: "What is the file name of the document that started the attack? Give the file name only, without the folder path.", kind: "text", answer: ["Q4_Invoice_Review.xlsm"] },
    { id: "c6", q: "What domain name did MKT-LT-02 look up to find its command and control server?", kind: "text", answer: ["telemetry-sync.example", "query=telemetry-sync.example"] },
    { id: "c7", q: "About how many minutes apart are the beacon connections?", kind: "number", answer: 10 },
    { id: "c8", q: "How many different accounts failed to sign in from MKT-LT-02 during the spray?", kind: "number", answer: 30 },
    { id: "c9", q: "Which account was successfully signed in to from MKT-LT-02 during the spray?", kind: "text", answer: ["svc-plotter"] },
    { id: "c10", q: "Which server did that account sign in to next?", kind: "text", answer: ["ENG-FS01"] },
    { id: "c11", q: "At what time did the connection that sent more than a billion bytes start? Use the time as written in the firewall log (for example 2026-12-19T01:23:45).", kind: "text", answer: ["2026-12-19T02:47:12", "02:47:12", "2:47:12", "02:47", "2:47", "2:47 AM", "2:47 am"] },
    { id: "c12", q: "Paste your sorted timeline (the output of sort ~/labs/w7_timeline.txt).", kind: "paste" },
    { id: "c13", q: "Write your correlation rule in plain English: trigger events and their log sources, time window, what must match, and the action.", kind: "text" },
    { id: "c14", q: "Marcus is deciding whether to switch FW-CORE's IPS from alert-only back to blocking. Give two situations where IDS (alert-only) is the better choice and two where IPS (blocking) is better, with one reason for each.", kind: "text" }
  ],
  reflection: "The firewall logged every beacon, the IPS raised 59 alerts, and the EDR flagged the macro within seconds. Nothing was stopped and nobody looked until Monday. In a short paragraph, name the two decisions at Cedar Creek that let this happen, compare them with what happened at Target in 2013, and say which single change you would make first."
};

COURSE_LABS['7.3'] = {
  id: "7.3", week: 7, title: "Patch management: Kali and the Cedar Creek patch report", mins: 45, env: "kali",
  waitMins: 10, // apt update plus waiting for the full-upgrade to finish; used by docs/tools/estimate_time.js
  goal: "Patch your own Kali system the way a careful administrator would (snapshot first, check what is out of date, update, verify), then triage Cedar Creek's patch report with awk and look up two famous vulnerabilities in the National Vulnerability Database to decide what Cedar Creek should patch first.",
  youNeed: [
    "Your Kali VM and VirtualBox",
    "The Week 7 lab pack in ~/labs/cedarcreek-week7",
    "A web browser on your own computer for nvd.nist.gov",
    "About 45 minutes"
  ],
  steps: [
    {
      title: "Snapshot first: your rollback plan",
      body: [
        "Before you patch anything, make sure you can undo it. In VirtualBox, with Kali running, open the <strong>Machine</strong> menu and choose <strong>Take Snapshot</strong>. Name it <code>before-week7-patching</code>.",
        "If an update breaks your VM, you can restore this snapshot and be back exactly where you were. In a company, the same step is a backup or a tested rollback procedure."
      ],
      expect: "A new snapshot named before-week7-patching in the VM's Snapshots list."
    },
    {
      title: "Refresh the package list",
      body: [
        "<code>sudo apt update</code> downloads the newest list of packages from Kali's servers. It does not install anything. At the end it tells you how many packages can be upgraded."
      ],
      cmd: "sudo apt update",
      expect: "A list of Get and Hit lines, then a summary such as 'N packages can be upgraded'. The number depends on how long ago you last updated.",
      tip: "If you see a 'Release file is not valid yet' error, the VM's clock is wrong. Restart the VM and try again."
    },
    {
      title: "What is out of date?",
      body: [
        "<code>apt list --upgradable</code> lists every package with a newer version. <code>2&gt;/dev/null</code> hides a warning about using apt in scripts. The second command counts the packages; write that number down for the first checkpoint.",
        "Then check one security-critical package. <code>apt-cache policy openssl</code> shows the <strong>Installed</strong> version and the <strong>Candidate</strong> (the newest available). If they differ, the patch is waiting."
      ],
      cmd: "apt list --upgradable 2>/dev/null | head -15\napt list --upgradable 2>/dev/null | grep -c upgradable\napt-cache policy openssl",
      expect: "Up to 15 package names with their new and old versions, the count, then openssl's installed and candidate versions."
    },
    {
      title: "When was this system last patched?",
      body: [
        "apt records every install and upgrade in /var/log/apt/history.log. Older entries are moved into compressed files with names ending in .gz. <code>zcat -f</code> reads both plain and compressed files, so this command shows the start time of the last three update runs. This is the evidence an auditor would ask for."
      ],
      cmd: "zcat -f /var/log/apt/history.log* | grep Start-Date | sort | tail -3",
      expect: "Up to three Start-Date lines. One should be from Lab 1.1, when you first upgraded Kali."
    },
    {
      title: "Install the updates (in a second terminal)",
      body: [
        "Open a second terminal tab with <strong>Ctrl + Shift + T</strong> and start the upgrade there. It can take several minutes. Leave it running and carry on in the first tab.",
        "If it asks whether to restart services or keep a configuration file, accept the default by pressing Enter."
      ],
      cmd: "sudo apt full-upgrade -y",
      expect: "Download progress, then 'Unpacking' and 'Setting up' lines for each package. It ends back at the prompt."
    },
    {
      title: "Read Dee's note and the patch report",
      body: [
        "Back in the first tab, move into the lab pack. Dee exported the patch console's report this morning. Read her note first. The report's columns are host, os, support, owner, last_patched, missing_critical, missing_high, auto_update, and notes."
      ],
      cmd: "cd ~/labs/cedarcreek-week7\ncat memos/patch_report_note.txt\ncat it/patch_status.csv",
      expect: "Dee's note, then the CSV with a header line and one line per system."
    },
    {
      title: "How many systems, and which are missing Critical patches?",
      body: [
        "<code>tail -n +2</code> prints everything from line 2 on, which skips the header. Count those lines to get the number of systems.",
        "<code>awk -F,</code> splits at commas instead of spaces. <code>NR&gt;1</code> skips line 1 (the header). <code>$6&gt;0</code> keeps systems with at least one missing Critical patch. The last command sorts the report by column 6, largest first."
      ],
      cmd: "tail -n +2 it/patch_status.csv | wc -l\nawk -F, 'NR>1 && $6>0 {print $1, $6, $2}' it/patch_status.csv\nsort -t, -k6 -nr it/patch_status.csv | head -3",
      expect: "The number of systems, then the systems missing Critical patches with their counts and operating systems, then the top three by missing Critical patches."
    },
    {
      title: "End of life and behind the cycle",
      body: [
        "Systems marked EOL (end of life) will never get another security patch. The first command lists them.",
        "Dee's note says every Windows machine on the normal cycle should show a last_patched date of 2026-12-15 or later. The second command keeps Windows systems (<code>$2 ~ /Windows/</code> means 'column 2 contains Windows') whose date is earlier. Dates written year-month-day sort and compare correctly as plain text, which is one reason logs use that format."
      ],
      cmd: "awk -F, '$3==\"EOL\" {print $1, $2}' it/patch_status.csv\nawk -F, '$2 ~ /Windows/ && $5 < \"2026-12-15\" {print $1, $5}' it/patch_status.csv",
      expect: "Two EOL systems, then the Windows systems that missed the December cycle with their last patch dates."
    },
    {
      title: "Look up EternalBlue in the NVD",
      body: [
        "On your own computer's browser, open <strong>https://nvd.nist.gov/vuln/detail/CVE-2017-0144</strong>. This is the flaw in SMBv1 that the EternalBlue exploit used and WannaCry spread through in 2017.",
        "Read the description, then find the <strong>CVSS 3.x</strong> base score and its severity from NIST. Scroll to the references and notice the link to Microsoft's security bulletin MS17-010, the patch that was released in March 2017."
      ],
      expect: "The CVE page with a description of the Windows SMB remote code execution flaw, a CVSS 3.x score with a severity word, and a list of references."
    },
    {
      title: "Look up the Equifax flaw",
      body: [
        "Now open <strong>https://nvd.nist.gov/vuln/detail/CVE-2017-5638</strong>, the Apache Struts flaw at the center of the Equifax breach. Note its CVSS 3.x severity and read the attack vector in the score breakdown: <strong>Network</strong>, <strong>Low</strong> complexity, <strong>no privileges</strong> and <strong>no user interaction</strong> needed. That combination on an internet-facing web server is why it should have been patched first.",
        "You will cite this page in Project 7 today."
      ],
      expect: "The CVE page with a description of the Jakarta Multipart parser flaw in Apache Struts 2 and a CVSS 3.x score with a severity word."
    },
    {
      title: "Verify your own patching",
      body: [
        "Switch to the second tab. When the upgrade has finished, run the count again. It should now be zero or close to it. That is the <strong>verify</strong> step of the patch cycle.",
        "If the upgrade installed a new kernel, restart Kali with <code>sudo reboot</code> so the fix actually takes effect. A patch that is installed but not running yet does not protect you. If anything is broken after the restart, restore your snapshot."
      ],
      cmd: "apt list --upgradable 2>/dev/null | grep -c upgradable",
      expect: "0, or a small number of packages that apt is holding back."
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many packages could be upgraded on your Kali system before you patched it?", kind: "number" },
    { id: "c2", q: "How many systems are listed in it/patch_status.csv (not counting the header)?", kind: "number", answer: 20 },
    { id: "c3", q: "How many systems are missing at least one Critical patch?", kind: "number", answer: 4 },
    { id: "c4", q: "Which system is missing the most Critical patches?", kind: "text", answer: ["MKT-LT-02"] },
    { id: "c5", q: "How many systems in the report are EOL (end of life)?", kind: "number", answer: 2 },
    { id: "c6", q: "How many Windows systems show a last_patched date earlier than 2026-12-15?", kind: "number", answer: 4 },
    { id: "c7", q: "What CVSS 3.x severity does NIST give CVE-2017-0144 (EternalBlue)?", kind: "choice", opts: ["LOW", "MEDIUM", "HIGH", "CRITICAL"], answer: 2 },
    { id: "c8", q: "What CVSS 3.x severity does NIST give CVE-2017-5638 (Apache Struts)?", kind: "choice", opts: ["LOW", "MEDIUM", "HIGH", "CRITICAL"], answer: 3 },
    { id: "c9", q: "Which ONE system should Cedar Creek patch first, and why? Use severity, exposure to the internet, and what the system protects in your answer. (MKT-LT-02 is already isolated for the incident from Lab 7.2.)", kind: "text" },
    { id: "c10", q: "ENG-APP02 cannot be patched. Name two compensating controls for it and the risk each one reduces.", kind: "text" }
  ],
  reflection: "Equifax had a fix for CVE-2017-5638 about two months before attackers used it. Cedar Creek has had a Critical fix for FW-CORE since December 10. Write a short note to Dee: what in Cedar Creek's patch process looks like Equifax's, and one change to the process (not just to one system) that would close that gap."
};
