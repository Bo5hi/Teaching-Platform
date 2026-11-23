// Week 5 labs. Shapes: docs/COURSE_V2.md
// Lab pack: assets/cedarcreek/week5/ (zip: assets/cedarcreek/cc-week5.zip), built by docs/tools/make_week5_pack.js.
// Auto-check answers for 5.1 and 5.2 were computed from the generated pack; re-run the generator and re-check if the pack changes.
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['5.1'] = {
  id: "5.1", week: 5, title: "Vulnerability triage: Cedar Creek's first scan", mins: 50, env: "kali",
  goal: "Use grep, cut, sort, awk, and sed in Kali to analyze Dee's vulnerability scan export, read CVSS vectors, spot a false positive, write a small bash script that summarizes any scan, and give Marcus the five fixes that should come first, with reasons.",
  youNeed: [
    "Your Kali VM, logged in, with internet access",
    "Lesson 5.1 (vulnerability management) finished",
    "About 50 minutes"
  ],
  steps: [
    {
      title: "Download and unpack the Week 5 lab pack",
      body: [
        "Marcus copied Dee's scan export, her notes, and some context files for you. Download the pack into your labs folder and unpack it, the same way you did in Week 1.",
        "<code>ls scans context</code> lists two folders at once."
      ],
      cmd: "cd ~/labs\nwget https://bo5hi.github.io/Teaching-Platform/assets/cedarcreek/cc-week5.zip\nunzip cc-week5.zip\ncd cedarcreek-week5\nls scans context",
      expect: "unzip lists the files it creates. The last command shows three files in scans (cc_scan_2026-12-04.csv, cvss_vectors.txt, scan_notes_dee.txt) and two in context.",
      tip: "If ~/labs does not exist, run mkdir ~/labs first. If wget cannot resolve the host, check that the VM's network adapter is set to NAT."
    },
    {
      title: "Read Dee's notes first",
      body: [
        "Never analyze data before you know how it was collected. Dee's email tells you what was scanned, which hosts were scanned with credentials, and two things she already suspects. Read all of it."
      ],
      cmd: "cat scans/scan_notes_dee.txt",
      expect: "Dee's email: the scope, the plant safe-scan rule, a note about finding 1021 on FW-CORE, the server patching gap, and the PLANT-PC-07 vendor problem."
    },
    {
      title: "Look at the export and count the rows",
      body: [
        "The export is a CSV file with eleven columns: <strong>id</strong>, <strong>ip</strong>, <strong>host</strong>, <strong>port</strong>, <strong>proto</strong> (protocol), <strong>severity</strong>, <strong>cvss</strong>, <strong>cve</strong>, <strong>exploit</strong> (is public exploit code known?), <strong>finding</strong>, and <strong>solution</strong>. Port 0 means the finding is about the whole host, not one service.",
        "Raw CSV is hard to read. <code>sed</code> (stream editor) can change text as it passes through. <code>s/,/ | /g</code> means substitute every comma with a space, a bar, and a space; the <code>g</code> at the end means every comma on the line, not just the first. <code>less -S</code> lets long lines run off the right edge instead of wrapping: use the arrow keys to scroll and <strong>q</strong> to quit."
      ],
      cmd: "head -4 scans/cc_scan_2026-12-04.csv\nwc -l scans/cc_scan_2026-12-04.csv\nsed 's/,/ | /g' scans/cc_scan_2026-12-04.csv | less -S",
      expect: "The header and three PLANT-PC-07 rows, then a line count, then the whole export with bars between the columns."
    },
    {
      title: "Count findings by severity",
      body: [
        "<code>cut -d, -f6</code> keeps the sixth column (severity). <code>sort | uniq -c</code> counts each value, and <code>sort -nr</code> puts the biggest count first. One line will say severity: that is the header, so ignore it.",
        "Info rows are not vulnerabilities. They record facts about the scan, such as whether a credentialed login worked."
      ],
      cmd: "cut -d, -f6 scans/cc_scan_2026-12-04.csv | sort | uniq -c | sort -nr",
      expect: "Five severities plus the header word: Medium is the most common, then Info, Critical, High, and one Low."
    },
    {
      title: "Filter by score with awk",
      body: [
        "<code>awk</code> is a small programming language for columns of text. <code>-F,</code> tells it the columns are separated by commas. Inside the quotes, <code>$7</code> means column 7 (cvss), <code>$3</code> is the host, and so on. <code>NR</code> is the line number, so <code>NR&gt;1</code> skips the header.",
        "The first command prints the id, host, score, and finding for every row scoring 9.0 or higher (Critical). The second counts them. The third uses <code>sort</code> on column 7 (<code>-t, -k7,7</code>) numerically and in reverse (<code>-nr</code>) to show the top eight scores."
      ],
      cmd: "awk -F, 'NR>1 && $7 >= 9.0 {print $1, $3, $7, $10}' scans/cc_scan_2026-12-04.csv\nawk -F, 'NR>1 && $7 >= 9.0' scans/cc_scan_2026-12-04.csv | wc -l\nsort -t, -k7,7 -nr scans/cc_scan_2026-12-04.csv | head -8 | cut -d, -f1,3,7,10",
      expect: "A short list of Critical findings: two unsupported operating systems, unsupported Office, BlueKeep, and default credentials. Then a count, then the top eight rows by score."
    },
    {
      title: "Which host has the most findings, and which CVEs appear?",
      body: [
        "Count rows per host the same way you counted severities. Then pull out every CVE ID. <code>grep -o</code> prints only the part of each line that matches, and the pattern <code>CVE-[0-9]*-[0-9]*</code> means 'CVE-, digits, a dash, digits'. <code>sort -u</code> removes duplicates."
      ],
      cmd: "cut -d, -f3 scans/cc_scan_2026-12-04.csv | sort | uniq -c | sort -nr\ngrep -o 'CVE-[0-9]*-[0-9]*' scans/cc_scan_2026-12-04.csv | sort -u\ngrep -o 'CVE-[0-9]*-[0-9]*' scans/cc_scan_2026-12-04.csv | sort -u | wc -l",
      expect: "A ranked host list with one plant PC on top. Then a short list of CVE IDs, then the count."
    },
    {
      title: "Find the findings attackers can already use",
      body: [
        "A flaw with public exploit code is much more likely to be used. This awk filter keeps rows where column 9 (exploit) is exactly yes <strong>and</strong> the score is 7.0 or higher. In awk, <code>==</code> tests whether two things are equal and <code>&amp;&amp;</code> means and."
      ],
      cmd: "awk -F, '$9 == \"yes\" && $7 >= 7.0 {print $1, $3, $7, $10}' scans/cc_scan_2026-12-04.csv\nawk -F, '$9 == \"yes\" && $7 >= 7.0' scans/cc_scan_2026-12-04.csv | wc -l",
      expect: "Rows from PLANT-PC-07, FS-HR01, NVR-01, and TIMECLOCK-01, then the count."
    },
    {
      title: "Decode the CVSS vectors",
      body: [
        "Open the vector file. For each CVE, read the vector one metric at a time, using the key at the bottom of the file and the diagram in Lesson 5.1.",
        "Compare BlueKeep (CVE-2019-0708) with PrintNightmare (CVE-2021-34527). Only one metric differs. Work out which one, and what it means for an attacker. Then compare EternalBlue (CVE-2017-0144) with BlueKeep: why does EternalBlue score lower?"
      ],
      cmd: "cat scans/cvss_vectors.txt",
      expect: "Four CVEs, each with a score and a vector, and the key to the letters."
    },
    {
      title: "Check the false positive",
      body: [
        "Dee thinks finding 1021 is wrong. A good analyst does not take that on trust, and does not ignore it either: check the evidence. Print the finding, then read the vendor's reply.",
        "Notice two things: how the scanner reached its conclusion (only a banner, with no credentials), and what the vendor says the real situation is. Also notice the vendor's last sentence. Closing a false positive can still leave a real finding behind."
      ],
      cmd: "grep '^1021' scans/cc_scan_2026-12-04.csv\ncat context/fw-core_vendor_reply.txt",
      expect: "One row for FW-CORE port 22, then the vendor's email explaining backported fixes, and a recommendation about SSH and the internet."
    },
    {
      title: "Add business context",
      body: [
        "CVSS describes the flaw. It knows nothing about Cedar Creek. The asset context file does: who owns each host, how critical it is to the business, and how exposed it is. Print it in readable form.",
        "Now combine the two. A finding is more urgent when the host is <strong>Critical</strong> to the business, when it is <strong>reachable</strong> from many places (the internet, or every office PC on Cedar Creek's flat network), and when <strong>exploit code</strong> exists. It is less urgent when it is hard to reach or a compensating control already covers it."
      ],
      cmd: "sed 's/,/ | /g' context/asset_context.csv",
      expect: "Eleven assets with their role, owner, criticality, exposure, and notes."
    },
    {
      title: "Write a triage script",
      body: [
        "You will run the same counts every month, so put them in a <strong>bash script</strong>: a text file of commands that run in order. The block below creates the file with <code>cat &gt; triage.sh &lt;&lt;'EOF'</code>, which writes every line up to the word EOF into triage.sh. Copy the whole block and paste it in one go.",
        "Line 1, <code>#!/bin/bash</code>, is the <strong>shebang</strong>: it tells Linux to run the file with bash. Lines starting with <code>#</code> after that are comments. <code>SCAN=\"$1\"</code> stores the first thing you type after the script name in a variable called SCAN, and <code>$(whoami)</code> and <code>$(date +%F)</code> insert the output of those commands.",
        "<code>chmod +x</code> makes the file executable. <code>./triage.sh</code> runs it from the current folder. <code>tee</code> shows the output and saves a copy to a file at the same time."
      ],
      cmd: "cat > triage.sh <<'EOF'\n#!/bin/bash\n# triage.sh - summarize a vulnerability scan export. Usage: ./triage.sh export.csv\nSCAN=\"$1\"\necho \"Scan triage for $SCAN, run by $(whoami) on $(date +%F)\"\necho \"Findings by severity:\"\ncut -d, -f6 \"$SCAN\" | grep -v severity | sort | uniq -c | sort -nr\necho \"Exploitable findings with CVSS 7.0 or higher:\"\nawk -F, 'NR>1 && $9 == \"yes\" && $7 >= 7.0 {print \"  \" $1, $3, $7, $10}' \"$SCAN\"\nEOF\nchmod +x triage.sh\n./triage.sh scans/cc_scan_2026-12-04.csv | tee triage_report.txt",
      expect: "A header line with your user name and today's date, the severity counts, and the exploitable findings, each indented two spaces. ls now shows triage.sh and triage_report.txt.",
      tip: "If you see 'Permission denied', the chmod +x line did not run; run it again. If you see 'No such file or directory' for the CSV, make sure you are in ~/labs/cedarcreek-week5."
    },
    {
      title: "Rank the top five",
      body: [
        "Now do the analyst's real job. Using the exploitable list, the Critical list, the asset context, and Dee's notes, choose the <strong>five fixes Cedar Creek should make first</strong>. A fix can cover several findings (for example, all of PLANT-PC-07's SMB and RDP findings).",
        "For each one, write: the finding IDs, the host, why it ranks there (exposure, criticality, exploit code), and the fix. Where patching is not possible, name a compensating control. Remember that a Critical score on a laptop's office software may rank below a High score on a reachable server with public exploit code.",
        "Save your answers in the checkpoints below. You will reuse this thinking when you write the findings table in the mock pentest report."
      ]
    }
  ],
  checkpoints: [
    { id: "c1", q: "What number does wc -l scans/cc_scan_2026-12-04.csv print?", kind: "number", answer: 31 },
    { id: "c2", q: "How many findings are rated Critical?", kind: "number", answer: 5 },
    { id: "c3", q: "How many findings score 9.0 or higher? (your awk ... | wc -l result)", kind: "number", answer: 5 },
    { id: "c4", q: "Which host has the most rows in the export?", kind: "text", answer: ["PLANT-PC-07", "PLANT-PC-07 (10.40.2.57)", "10.40.2.57"] },
    { id: "c5", q: "How many different CVE IDs appear in the export?", kind: "number", answer: 5 },
    { id: "c6", q: "How many findings have public exploit code (exploit = yes) and a CVSS score of 7.0 or higher?", kind: "number", answer: 6 },
    { id: "c7", q: "BlueKeep's vector contains AV:N. What does that mean?", kind: "choice", opts: ["The attacker must be at the keyboard", "The attacker can be anywhere on the network, including the internet if it is reachable", "No account is needed", "The impact is low"], answer: 1 },
    { id: "c8", q: "BlueKeep (9.8) and PrintNightmare (8.8) differ in one metric. Which?", kind: "choice", opts: ["AV (attack vector)", "AC (attack complexity)", "PR (privileges required)", "UI (user interaction)"], answer: 2 },
    { id: "c9", q: "Which finding ID is the false positive?", kind: "number", answer: 1021 },
    { id: "c10", q: "Paste the output of ./triage.sh scans/cc_scan_2026-12-04.csv.", kind: "paste" },
    { id: "c11", q: "List your top five fixes in order. For each: finding IDs, host, why it ranks there, and the fix.", kind: "text" },
    { id: "c12", q: "PLANT-PC-07 cannot be patched without the line vendor. What compensating controls do you recommend, and who should own the exception?", kind: "text" }
  ],
  reflection: "Dee's scan rates Office 2016 on FIN-LT-09 as Critical (10.0) and PrintNightmare on FS-HR01 as High (8.8). Which would you fix first and why? Use exposure, asset criticality, and exploitability in your answer, and say what the CVSS base score alone cannot tell you."
};

COURSE_LABS['5.2'] = {
  id: "5.2", week: 5, title: "Malware hunt and IOC sweep", mins: 55, env: "kali",
  goal: "Find and stop a disguised process in your own Kali VM, then use the Heartland Manufacturing ISAC's IRONLATCH indicators to sweep Cedar Creek's quarantine files, web proxy log, and VPN log. You will find which machine downloaded a malicious file and spot a password spray against the VPN.",
  youNeed: [
    "Your Kali VM with the Week 5 lab pack from Lab 5.1 in ~/labs/cedarcreek-week5 (if it is missing, repeat Lab 5.1's first step)",
    "Lesson 5.3 (malware, password attacks, and indicators) finished",
    "About 55 minutes"
  ],
  steps: [
    {
      title: "Start the simulation",
      body: [
        "An incident response firm working for another ISAC member found a disguised process on one of that company's Linux servers. Marcus asked them for a safe re-creation so you can practice. The script in <code>sim/</code> starts a harmless background loop that writes one line of text to a log file every five seconds. It sends nothing over the network.",
        "Run it, then pretend you do not know what it did. Do not read the script yet: finding things without being told is the point."
      ],
      cmd: "cd ~/labs/cedarcreek-week5\nbash sim/start_sim.sh",
      expect: "Simulation started. Go back to the lab page."
    },
    {
      title: "List processes with ps",
      body: [
        "A <strong>process</strong> is a running program. Each one has a <strong>PID</strong> (process ID) and a parent, the process that started it, identified by its <strong>PPID</strong>. <code>ps aux</code> lists every process: <code>a</code> for all users, <code>u</code> for user-oriented columns (owner, CPU, memory), and <code>x</code> to include processes with no terminal.",
        "Linux kernel worker threads appear in square brackets, such as <code>[kworker/0:1-events]</code>. The first command shows how many processes are running. The second lists the kworkers. Look at the USER column and at the end of each line."
      ],
      cmd: "ps aux | wc -l\nps aux | grep kworker",
      expect: "A count in the hundreds, then a list of kworker lines. Almost all are owned by root and end right after the bracketed name. One is owned by your user (kali) and has a file path after its name. The very last line is your own grep command."
    },
    {
      title: "Examine the suspect",
      body: [
        "Write down the PID of the kworker owned by your user. <code>pgrep -u \"$USER\" -a -f kworker</code> finds processes owned by you whose command line contains kworker and prints each PID with its full command line. <code>ps -o</code> chooses which columns to show, and <code>--ppid</code> lists the children of a process.",
        "Replace <strong>PID</strong> in the commands below with the number you wrote down (for example, <code>ps -o pid,ppid,user,etime,cmd -p 4321</code>). <code>etime</code> is how long the process has been running. <code>top -b -n 1 -p PID</code> takes one snapshot of just that process; its COMMAND column shows the real program name, which the disguise does not change."
      ],
      cmd: "pgrep -u \"$USER\" -a -f kworker\nps -o pid,ppid,user,etime,cmd -p PID\nps -o pid,ppid,cmd --ppid PID\ntop -b -n 1 -p PID | tail -2",
      expect: "One PID with its command line, then a line describing the process (your user, a short run time, and a command that ends in a file under /tmp), then its child: a sleep 5 process. top shows the program's real name in its COMMAND column: bash, not kworker.",
      tip: "If pgrep prints two PIDs, the simulation was started twice. Use either one now; bash sim/stop_sim.sh at the end cleans up both."
    },
    {
      title: "Follow the files",
      body: [
        "The command line points to a hidden folder in /tmp. Folder and file names starting with a dot are hidden from a plain <code>ls</code>. <code>/tmp</code> is a favorite hiding place because every user can write there.",
        "List the folder with <code>-la</code> to see the hidden files, then look at the log the process is writing. <code>tail -3</code> shows the last three lines; run it twice a few seconds apart and see whether it grows."
      ],
      cmd: "ls -la /tmp/.cache-upd\ntail -3 /tmp/.cache-upd/upd.log\ntail -3 /tmp/.cache-upd/upd.log",
      expect: "Two files: a hidden script (.u.sh) and upd.log. The log lines name a domain, and the second tail shows newer lines than the first: the file grows every five seconds."
    },
    {
      title: "Stop it with kill",
      body: [
        "<code>kill PID</code> asks a process to end (it sends the signal SIGTERM). If a process ignores that, <code>kill -9 PID</code> forces it (SIGKILL). Kill the parent loop, not just the sleep child, or the loop would simply start another sleep.",
        "Then confirm: the process is gone and the log stops growing. Finally run the cleanup script, which removes the files. In a real incident you would preserve the files as evidence before deleting anything; here they are only practice."
      ],
      cmd: "kill PID\nps aux | grep cache-upd\ntail -1 /tmp/.cache-upd/upd.log\nbash sim/stop_sim.sh",
      expect: "No cache-upd line except your own grep. The last log line stops changing. The cleanup script prints that it stopped and cleaned up."
    },
    {
      title: "Read the ISAC indicators",
      body: [
        "Now the real Cedar Creek work. The ISAC's update lists IRONLATCH indicators of compromise (IOCs): file hashes, domains, and IP addresses. Read it, including the comments."
      ],
      cmd: "cat intel/isac_ironlatch_iocs_2026-12-07.txt",
      expect: "A TLP:AMBER header, three SHA-256 hashes, three domains, and three IP addresses, with comment lines starting with # and some blank lines."
    },
    {
      title: "Build a clean IOC list",
      body: [
        "You are about to use <code>grep -F -f</code>, which reads a list of fixed strings from a file and finds any line that contains any of them. Comment lines and blank lines would break that: a blank line matches every line of every log.",
        "<code>grep -v</code> keeps lines that do <strong>not</strong> match. <code>-e '^#'</code> matches lines starting with # (the <code>^</code> means start of line) and <code>-e '^$'</code> matches empty lines (start immediately followed by end)."
      ],
      cmd: "grep -v -e '^#' -e '^$' intel/isac_ironlatch_iocs_2026-12-07.txt > iocs_clean.txt\ncat iocs_clean.txt\nwc -l iocs_clean.txt",
      expect: "Only the hashes, domains, and IP addresses, one per line, and a count."
    },
    {
      title: "Check the quarantine files by hash",
      body: [
        "The EDR collected four files across the office this morning. Jordan exported safe placeholder copies to <code>quarantine/</code>. File names prove nothing: an attacker names files whatever they like. Hashes identify the exact contents.",
        "<code>sha256sum</code> prints each file's SHA-256 hash and name. Save the output, then search it for any hash on the IOC list."
      ],
      cmd: "sha256sum quarantine/*\nsha256sum quarantine/* > quarantine_hashes.txt\ngrep -F -f iocs_clean.txt quarantine_hashes.txt",
      expect: "Four hashes, then exactly one line from the grep: the file whose hash is on the IRONLATCH list."
    },
    {
      title: "Sweep the web proxy log",
      body: [
        "FW-CORE's web filter logs every web request from the office. Each line has a time, <code>src=</code> (the internal IP that made the request), the URL, the destination IP, and whether the filter allowed or blocked it.",
        "Search the whole day for any IOC. Then use awk to print just the fourth column (the source) of the matching lines, and count them."
      ],
      cmd: "wc -l logs/proxy_2026-12-07.log\ngrep -F -f iocs_clean.txt logs/proxy_2026-12-07.log\ngrep -F -f iocs_clean.txt logs/proxy_2026-12-07.log | awk '{print $4}' | sort | uniq -c",
      expect: "A few hundred lines in the log. Only a handful match an IOC: two from one internal IP (a download and a check-in, both allowed) and one from another IP that the filter blocked as phishing."
    },
    {
      title: "Turn an IP address into a machine name",
      body: [
        "Office PCs get their IP addresses from DHCP (Dynamic Host Configuration Protocol), so an address can move between machines on different days. The DHCP lease list says which machine held which address today. <code>-F</code> makes grep treat the dots in the address as plain dots."
      ],
      cmd: "grep -F '10.20.30.12,' logs/dhcp_leases_2026-12-07.csv\ngrep -F '10.20.6.41,' logs/dhcp_leases_2026-12-07.csv",
      expect: "One line for each address, showing the hostname and MAC address.",
      tip: "The comma after the address stops 10.20.30.12 from also matching an address such as 10.20.30.120."
    },
    {
      title: "Spot the password spray in the VPN log",
      body: [
        "IRONLATCH affiliates spray VPN portals. FW-CORE's VPN log covers Sunday evening and Monday morning. Each line says <code>login ok</code> or <code>login failed</code>, then <code>user=</code>, <code>src=</code>, and either the reason for the failure or, for a success, the VPN profile and <code>mfa=</code> (CC-REMOTE asks for a push approval; CC-LEGACY, from Week 3, takes a password alone).",
        "The first command counts failures by source address (column 7). Remember the two password attack patterns from Lesson 5.3: many accounts with one try each is <strong>spraying</strong>; one account with many tries is <strong>brute force</strong>."
      ],
      cmd: "wc -l logs/vpn_auth_2026-12-06_07.log\ngrep 'login failed' logs/vpn_auth_2026-12-06_07.log | awk '{print $7}' | sort | uniq -c | sort -nr | head -5\ngrep -F -f iocs_clean.txt logs/vpn_auth_2026-12-06_07.log | head -5",
      expect: "About a hundred lines. Two sources have far more failures than anyone else. One of them is on the IOC list."
    },
    {
      title: "Measure the spray",
      body: [
        "Now look at only the IOC address. Count how many <strong>different</strong> user names it tried (column 6), check whether any attempt succeeded, and list the user names that the VPN says exist (reason=bad_password means the account is real but the password was wrong; reason=unknown_user means there is no such account).",
        "Read that last list slowly, and compare it with what you know from Weeks 1 and 3 about who has left Cedar Creek. Then look at the second noisy source the same way."
      ],
      cmd: "grep 'src=203.0.113.45' logs/vpn_auth_2026-12-06_07.log | awk '{print $6}' | sort -u | wc -l\ngrep 'src=203.0.113.45' logs/vpn_auth_2026-12-06_07.log | grep -c 'login ok'\ngrep 'src=203.0.113.45' logs/vpn_auth_2026-12-06_07.log | grep bad_password | awk '{print $6}' | sed 's/user=//' | sort\ngrep 'src=203.0.113.201' logs/vpn_auth_2026-12-06_07.log | awk '{print $6}' | sort | uniq -c",
      expect: "A count of user names, a 0 (no successes), a sorted list of real Cedar Creek user names, and one user name tried many times from the second source.",
      tip: "grep -c prints 0 and exits with an error status when nothing matches. That is the good result here."
    },
    {
      title: "Optional: look up a hash on VirusTotal",
      body: [
        "The ISAC added the EICAR test file's hash so members can check their tools. EICAR is a harmless file that every antivirus product agrees to detect, for testing. In your browser on your host PC, go to <strong>https://www.virustotal.com</strong>, choose <strong>Search</strong>, and paste the hash below. Look at the Detection and Details tabs.",
        "Searching by hash shares nothing about Cedar Creek. Never upload a company's own files to a public service: anything you upload can be seen by others."
      ],
      cmd: "grep -A1 EICAR intel/isac_ironlatch_iocs_2026-12-07.txt",
      expect: "The comment line and the EICAR hash beneath it. On VirusTotal, most engines flag it with names containing EICAR."
    }
  ],
  checkpoints: [
    { id: "c1", q: "What is the full path of the log file the disguised process was writing to?", kind: "text", answer: ["/tmp/.cache-upd/upd.log"] },
    { id: "c2", q: "Which domain did the simulated process claim to check in with?", kind: "text", answer: ["browser-update-cdn.example.net", "browser-update-cdn.example.net/api/check"] },
    { id: "c3", q: "Give two clues that told you the [kworker/u8:3] process was not a real kernel thread.", kind: "text" },
    { id: "c4", q: "How many indicators are in iocs_clean.txt?", kind: "number", answer: 9 },
    { id: "c5", q: "Which quarantine file matches an IRONLATCH hash? Give the file name.", kind: "text", answer: ["chrome_update_131.exe.sample", "quarantine/chrome_update_131.exe.sample", "chrome_update_131.exe"] },
    { id: "c6", q: "How many lines of the proxy log match an IOC?", kind: "number", answer: 3 },
    { id: "c7", q: "Which internal IP address downloaded a file from an IOC domain and was allowed?", kind: "text", answer: ["10.20.30.12"] },
    { id: "c8", q: "What is the hostname of that machine, from the DHCP lease list?", kind: "text", answer: ["ENG-12"] },
    { id: "c9", q: "Which source IP address ran the password spray against the VPN?", kind: "text", answer: ["203.0.113.45"] },
    { id: "c10", q: "How many different user names did the spray try?", kind: "number", answer: 29 },
    { id: "c11", q: "How many of the spray's login attempts succeeded?", kind: "number", answer: 0 },
    { id: "c12", q: "Which sprayed user name belongs to someone who no longer works at Cedar Creek?", kind: "text", answer: ["b.kessler", "Brian Kessler", "kessler", "user=b.kessler"] },
    { id: "c13", q: "The second noisy source, 203.0.113.201, tried one user name 24 times. Which attack does that pattern show?", kind: "choice", opts: ["Password spraying", "Brute force", "Credential stuffing", "Impossible travel"], answer: 1 },
    { id: "c14", q: "Write a three-sentence update for Marcus: what you found on ENG-12, what the VPN log shows, and the two actions you recommend first.", kind: "text" }
  ],
  reflection: "The spray failed this time, but every CC-LEGACY login in the log shows mfa=none, any VPN user can choose CC-LEGACY, and one sprayed account belongs to someone who left in October. Explain in plain words why those two facts worry you more than the spray itself, and name the two controls that would have made the spray harmless."
};
