// Week 4 labs. Shapes: docs/COURSE_V2.md
// Lab pack: assets/cedarcreek/week4/ (zip: assets/cedarcreek/cc-week4.zip), built by docs/tools/make_week4_pack.js.
// Auto-check answers for 4.1, 4.2 and 4.3 were computed from the generated pack; re-run the generator and re-check if the pack changes.
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['4.1'] = {
  id: "4.1", week: 4, title: "Packets on the wire: tcpdump and Wireshark", mins: 45, env: "kali",
  goal: "Capture your own traffic with tcpdump, open it in Wireshark, and see the TCP handshake and the OSI layers inside a real packet. Then investigate a capture from Cedar Creek's plant network and find the passwords and files that cross it in cleartext.",
  youNeed: [
    "Your Kali VM with internet access (Lab 1.1)",
    "Two terminal windows (in Kali: File, New Window, or press Ctrl + Shift + N in the terminal)",
    "About 45 minutes"
  ],
  steps: [
    {
      title: "Download the Week 4 lab pack",
      body: [
        "Marcus copied this week's network files for you: the network map, a firewall rule export, a scan, and a packet capture. Download and unpack them into your labs folder, the same way you did in Lab 1.2."
      ],
      cmd: "mkdir -p ~/labs && cd ~/labs\nwget https://bo5hi.github.io/Teaching-Platform/assets/cedarcreek/cc-week4.zip\nunzip -o cc-week4.zip\nls cedarcreek-week4",
      expect: "Five folders (captures, firewall, memos, network, scans) and README.txt.",
      tip: "If unzip is missing, run sudo apt install -y unzip and try again."
    },
    {
      title: "Find your network interface",
      body: [
        "A <strong>network interface</strong> is the connection a computer uses to reach a network. <code>ip -br addr</code> lists them in brief form. <code>lo</code> is the loopback interface, which only talks to the machine itself. <code>eth0</code> is your virtual network card, the one that reaches the internet through VirtualBox."
      ],
      cmd: "ip -br addr",
      expect: "Two lines. eth0 is UP with an address like 10.0.2.15/24.",
      tip: "If your interface has a different name, such as enp0s3, use that name everywhere this lab says eth0."
    },
    {
      title: "Capture a ping with tcpdump",
      body: [
        "<code>tcpdump</code> is a command-line packet sniffer: it prints a line for each packet that crosses an interface. Capturing needs root rights, so it runs with <code>sudo</code>. <code>-i eth0</code> picks the interface, <code>-n</code> shows numbers instead of looking up names, and <code>icmp</code> is a <strong>capture filter</strong> that keeps only ICMP, the protocol ping uses.",
        "In <strong>terminal 1</strong>, start the capture. In <strong>terminal 2</strong>, send four pings. Then go back to terminal 1 and press <strong>Ctrl + C</strong> to stop."
      ],
      cmd: "sudo tcpdump -i eth0 -n icmp\nping -c 4 1.1.1.1",
      expect: "In terminal 1: four pairs of lines, an ICMP echo request from 10.0.2.15 to 1.1.1.1 and an echo reply coming back. After Ctrl + C, a count of packets captured.",
      tip: "Run the first line in terminal 1 and the second in terminal 2. The copy button copies both lines, so paste each one into the right window."
    },
    {
      title: "Capture a DNS lookup",
      body: [
        "DNS turns a name into an IP address. It normally uses UDP on port 53. Capture only port 53 in terminal 1, then look up a name in terminal 2 with <code>dig</code>. Stop the capture with Ctrl + C."
      ],
      cmd: "sudo tcpdump -i eth0 -n port 53\ndig example.com",
      expect: "Two UDP packets in terminal 1: a query (A? example.com) from your Kali to the VirtualBox DNS address (usually 10.0.2.3) and the answer coming back with an IP address.",
      tip: "UDP sends the question and waits for an answer. There is no handshake before it, which is one reason DNS is fast."
    },
    {
      title: "Save a web visit to a file",
      body: [
        "<code>-w</code> writes packets to a capture file instead of the screen. Capture port 80 (plain HTTP) in terminal 1 while terminal 2 downloads a web page with <code>curl</code>. Stop the capture with Ctrl + C.",
        "Then read the file back with <code>-r</code>. Look at the first three TCP lines. <code>Flags [S]</code> is a SYN, <code>[S.]</code> is a SYN-ACK (the dot means ACK), and <code>[.]</code> is a plain ACK. That is the TCP three-way handshake from Lesson 4.1."
      ],
      cmd: "sudo tcpdump -i eth0 -n -w ~/labs/web.pcap port 80\ncurl -s http://example.com | head -n 5\ntcpdump -n -r ~/labs/web.pcap | head -n 6",
      expect: "curl prints the start of an HTML page. Reading the file shows Flags [S], then [S.], then [.], followed by the HTTP request and response.",
      tip: "The line 'reading from file ... link-type EN10MB' is tcpdump telling you what it opened. It is not a packet."
    },
    {
      title: "Open the capture in Wireshark",
      body: [
        "Wireshark shows the same packets with every header decoded. Open your capture. The top pane lists packets, the middle pane shows the selected packet's layers, and the bottom pane shows the raw bytes.",
        "Click the packet whose Info column starts with <strong>GET /</strong>. In the middle pane you will see four lines: <strong>Ethernet II</strong> (Layer 2, MAC addresses), <strong>Internet Protocol Version 4</strong> (Layer 3, IP addresses), <strong>Transmission Control Protocol</strong> (Layer 4, ports), and <strong>Hypertext Transfer Protocol</strong> (Layer 7). This is encapsulation: each layer wraps the one above it.",
        "Right-click the GET packet and choose <strong>Follow</strong>, then <strong>TCP Stream</strong>. The whole conversation appears as readable text. Anyone on the path could read it the same way. Close the window when you are done."
      ],
      cmd: "wireshark ~/labs/web.pcap &",
      expect: "Wireshark opens with about a dozen packets. Follow TCP Stream shows the GET request in red and the HTML reply in blue.",
      tip: "If Wireshark is not installed, run sudo apt install -y wireshark. If a dialog asks about non-superusers capturing packets, choose No; you are only opening a file."
    },
    {
      title: "Meet the Cedar Creek capture",
      body: [
        "Jordan connected a laptop to a <strong>mirror port</strong> (also called a SPAN port) on PLANT-SW1. A mirror port receives a copy of the switch's traffic, so a sniffer on it sees what crosses the plant network. Greg Palmer approved this in writing (network/scope_authorization.txt).",
        "Read Jordan's notes, look at the first 20 packets, then count them. Reading a file does not need sudo. <code>-nn</code> shows port numbers instead of service names."
      ],
      cmd: "cd ~/labs/cedarcreek-week4/captures\ncat capture_notes.txt\ntcpdump -nn -r plant_span.pcap | head -n 20\ntcpdump -nn -r plant_span.pcap | wc -l",
      expect: "ARP lines, then a conversation between 10.40.2.57 (PLANT-PC-07) and 10.40.2.10 (LINE2-PLC) on port 502, then DNS to DC01 at 10.10.1.10. The last command prints a single number."
    },
    {
      title: "How many TCP connections start?",
      body: [
        "Every TCP connection begins with a packet that has only the SYN flag set. The filter <code>tcp[tcpflags] == tcp-syn</code> keeps exactly those packets, so each line is one new connection. Note who connects to whom and on which port."
      ],
      cmd: "tcpdump -nn -r plant_span.pcap 'tcp[tcpflags] == tcp-syn'",
      expect: "A short list of connection starts. The destination ports include 502 (Modbus), 445 (SMB), 21 (FTP), 23 (Telnet), and 80 (HTTP), plus one high port used by FTP for the file itself."
    },
    {
      title: "Read an FTP login",
      body: [
        "<code>-A</code> prints each packet's contents as text. FTP sends its commands in cleartext on port 21, so <code>grep</code> can pull out the login and the file name.",
        "The sender is ENG-FS01 (10.30.4.10) and the receiver is LINE2-CNC03 (10.40.2.63). Some dots may appear before the text; those are header bytes that are not printable."
      ],
      cmd: "tcpdump -nn -A -r plant_span.pcap 'tcp port 21' | grep -E 'USER|PASS|STOR'",
      expect: "Three lines: USER with a username, PASS with a password, and STOR with the name of the file sent to the CNC machine."
    },
    {
      title: "Read the file that crossed the network",
      body: [
        "In passive FTP, the file itself travels on a second connection to a high port, here 50000. Print that connection's contents and look at the first lines of the program."
      ],
      cmd: "tcpdump -nn -A -r plant_span.pcap 'tcp port 50000' | grep -A4 O4471",
      expect: "The start of a CNC program for bracket BRK-4471 Rev C, marked CUSTOMER CONFIDENTIAL. Customer part data is Cedar Creek's crown jewels, and here it crosses the plant network unencrypted."
    },
    {
      title: "Read a Telnet session",
      body: [
        "Telnet is a remote login protocol from the early days of networking. Everything it sends, including the password, is cleartext. Someone at an engineering workstation in the office, ENG-09 (10.20.30.9), logged in to CNC03. Scroll through the session with the space bar and press q to quit."
      ],
      cmd: "tcpdump -nn -A -r plant_span.pcap 'tcp port 23' | less",
      expect: "The login prompt from LINE2-CNC03, the username typed, the Password: prompt, the password typed, and a status command. Each piece appears under its own packet header."
    },
    {
      title: "Decode an HTTP Basic login",
      body: [
        "The HVAC vendor's technician opened the controller's web page over plain HTTP. The browser sent an <strong>Authorization: Basic</strong> header. Basic authentication only <strong>encodes</strong> the username and password with Base64. Encoding is not encryption: anyone can reverse it without a key.",
        "Find the header, then decode the value after the word Basic. Replace PASTE_VALUE_HERE with the text you found."
      ],
      cmd: "tcpdump -nn -A -r plant_span.pcap 'tcp port 80' | grep Authorization\necho PASTE_VALUE_HERE | base64 -d; echo",
      expect: "The header line, then the decoded result in the form username:password."
    },
    {
      title: "Who reached the HR file server?",
      body: [
        "Port 445 is SMB, Windows file sharing. FS-HR01 (10.20.6.15) holds personnel files and payroll exports. It sits on the office HR and Finance subnet, not in the server zone. Look at the source address and compare it with the network map: CC-PLANT Wi-Fi clients get 10.40.100.x addresses.",
        "A SYN, then a SYN-ACK, then an ACK means the server accepted the connection. Nothing on FW-CORE stopped a device on the plant Wi-Fi from reaching the HR server: rule 6 lets the whole plant reach the whole office network."
      ],
      cmd: "tcpdump -nn -r plant_span.pcap 'tcp port 445'\ngrep 10.40.100 ../network/network_map.txt",
      expect: "Six packets: the three-way handshake and a normal close. The network map line says CC-PLANT Wi-Fi clients use 10.40.100.x."
    },
    {
      title: "Look at it the Wireshark way",
      body: [
        "Open the plant capture in Wireshark. Type each <strong>display filter</strong> below into the filter bar and press Enter. A display filter hides packets from view without deleting them. A green bar means the filter is valid.",
        "<code>ftp || telnet</code> shows both cleartext logins. <code>mbtcp</code> shows Modbus/TCP, the industrial protocol the Line 2 HMI uses to read values from the PLC; notice it has no username or password at all. <code>dns</code> shows name lookups.",
        "Then open <strong>Statistics</strong>, <strong>Conversations</strong>, and click the <strong>IPv4</strong> tab to see every pair of addresses that talked. Right-click an FTP packet and Follow the TCP Stream to read the whole login."
      ],
      cmd: "wireshark ~/labs/cedarcreek-week4/captures/plant_span.pcap &",
      expect: "The filters narrow the list to a few packets each. Conversations lists seven address pairs, including office, server, VPN, and plant addresses."
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many packets are in plant_span.pcap? (the number wc -l printed)", kind: "number", answer: 116 },
    { id: "c2", q: "How many TCP connections start in the capture (lines with only the SYN flag)?", kind: "number", answer: 6 },
    { id: "c3", q: "What FTP username did ENG-FS01 use?", kind: "text", answer: ["cncload"] },
    { id: "c4", q: "What FTP password crossed the network?", kind: "text", answer: ["Line2load!"] },
    { id: "c5", q: "What is the name of the file sent to LINE2-CNC03?", kind: "text", answer: ["BRK-4471_revC.nc"] },
    { id: "c6", q: "What username was used to log in to CNC03 over Telnet?", kind: "text", answer: ["cncadmin"] },
    { id: "c7", q: "What username did you get when you decoded the HTTP Basic header?", kind: "text", answer: ["riverbend", "riverbend:Chill3r!"] },
    { id: "c8", q: "What is the IP address of the plant device that connected to FS-HR01 on port 445?", kind: "text", answer: ["10.40.100.37"] },
    { id: "c9", q: "In Wireshark's middle pane, the line 'Internet Protocol Version 4' belongs to which OSI layer?", kind: "choice", opts: ["Layer 2, Data Link", "Layer 3, Network", "Layer 4, Transport", "Layer 7, Application"], answer: 1 },
    { id: "c10", q: "Paste the first lines of tcpdump -n -r ~/labs/web.pcap that show your own three-way handshake.", kind: "paste" }
  ],
  reflection: "Pick the plant capture finding that worries you most. Explain in two or three sentences what an attacker on the plant network could do with it, name the secure protocol that should replace the insecure one (for FTP, Telnet, or HTTP), and say what the SMB connection from 10.40.100.37 tells you about Cedar Creek's segmentation."
};

COURSE_LABS['4.2'] = {
  id: "4.2", week: 4, title: "Firewall rule review: FW-CORE", mins: 35, env: "kali",
  goal: "Review the 24 rules on Cedar Creek's firewall, FW-CORE. Find the rules that are too broad, the rules that expose servers to the internet, the rules that can never match, and the vendor rule that repeats the Target breach. Then propose tighter rules.",
  youNeed: [
    "Your Kali VM with the Week 4 lab pack in ~/labs/cedarcreek-week4 (Lab 4.1, first step)",
    "Lesson 4.3 (firewalls, rule order, and implicit deny)",
    "About 35 minutes"
  ],
  steps: [
    {
      title: "Read how the export works",
      body: [
        "Jordan exported the rule base on Monday morning. Before you judge a rule set, you need to know how the firewall reads it. Read Jordan's notes, then skim the network map so you know which zone is which."
      ],
      cmd: "cd ~/labs/cedarcreek-week4/firewall\ncat README_export.txt\nless ../network/network_map.txt",
      expect: "The notes say FW-CORE checks rules from the top down and the first match decides. The map lists the seven zones: OUTSIDE, OFFICE, SERVERS, PLANT, MGMT, GUEST, and VPN.",
      tip: "In less, use the arrow keys or space to move and press q to quit."
    },
    {
      title: "See the rules as a table",
      body: [
        "<code>column -s, -t</code> lines the comma-separated values up in columns. <code>less -S</code> keeps long lines on one row; press the right arrow to see the comment column. Read every rule once from top to bottom."
      ],
      cmd: "column -s, -t fw-core_rules.csv | less -S",
      expect: "A header row and 24 numbered rules, from Admin-Workstation at the top to Default-Deny at the bottom."
    },
    {
      title: "Count the rules and the disabled ones",
      body: [
        "Count the lines (one is the header). Then count the values in column 3, <strong>enabled</strong>. A disabled rule is switched off but still in the rule base."
      ],
      cmd: "wc -l fw-core_rules.csv\ncut -d, -f3 fw-core_rules.csv | sort | uniq -c",
      expect: "wc -l prints 25. The enabled column shows a count of yes, a count of no, and 1 for the header word."
    },
    {
      title: "What comes in from the internet?",
      body: [
        "<code>awk</code> is a tool that splits each line into fields and tests them. <code>-F,</code> sets the field separator to a comma, and <code>$4</code> means field 4, the source zone. This command prints every rule whose traffic starts on the internet (OUTSIDE).",
        "For each rule, ask: who outside really needs this? Rule 13 is the VPN portal, which has to be reachable. Look closely at the others. Rule 14 forwards RDP (Remote Desktop Protocol, port 3389) to ENG-APP02, which runs Windows Server 2012 R2 and stopped getting security updates in October 2023. It only accepts one vendor address, but if that vendor is compromised, so is this path, and nobody logs it. Rule 15 lets anyone on the internet try to log in to the firewall's own management over SSH."
      ],
      cmd: "awk -F, '$4==\"OUTSIDE\"' fw-core_rules.csv",
      expect: "Four rules: the SSL VPN portal, RDP forwarded to ENG-APP02 for one vendor address, SSH to FW-CORE itself from anywhere, and SSH for an ERP contractor from 2020."
    },
    {
      title: "Find the rules that allow every service",
      body: [
        "A rule whose service is <strong>any</strong> allows every port. Good rules name the exact ports a job needs. This search keeps lines where the service field is any and the action is ALLOW."
      ],
      cmd: "grep ',any,ALLOW,' fw-core_rules.csv",
      expect: "Six rules: plant to office, office to plant, plant to servers, VPN staff, the HVAC vendor, and one rule that allows everything."
    },
    {
      title: "Find the any-any rules",
      body: [
        "Search for rules where source zone, source, destination zone, destination, and service are all <strong>any</strong>. Then read the action column of each result and note the rule numbers."
      ],
      cmd: "grep ',any,any,any,any,any,' fw-core_rules.csv",
      expect: "Two rules. Rule 24 is the Default-Deny cleanup rule. The other one is an ALLOW, and it sits above rule 24."
    },
    {
      title: "First match wins: find the rules that never match",
      body: [
        "Because the first matching rule decides, a rule placed below a broader rule can never be used. That rule is called <strong>shadowed</strong>. Example: an engineer's laptop opens Telnet to CNC03. Rule 7 (office to plant, any service) matches first, so rule 10 is never reached.",
        "The ALLOW-everything rule you found in the last step shadows every rule below it, including Default-Deny. That means FW-CORE has no working <strong>implicit deny</strong>: traffic that no rule was written for is allowed.",
        "The hits column shows how often each rule matched in 90 days. Print the rules with zero hits. Zero hits means a rule is either stale (nobody uses it any more) or shadowed. Decide which is which for each one."
      ],
      cmd: "awk -F, '$11==0' fw-core_rules.csv",
      expect: "Five rules with 0 hits. One is disabled. One is an old contractor rule. The others sit below a broader rule that matches first."
    },
    {
      title: "Which ALLOW rules leave no trace?",
      body: [
        "If an ALLOW rule does not log, nobody can look back and see what it let through. Count the ALLOW rules with logging turned off. <code>&amp;&amp;</code> means both tests must be true."
      ],
      cmd: "awk -F, '$9==\"ALLOW\" && $10==\"no\"' fw-core_rules.csv | wc -l",
      expect: "A single number. It includes the disabled rule, which is fine: the command counts what it is told to count."
    },
    {
      title: "The vendor rule",
      body: [
        "Read the HVAC vendor's original request and Jordan's note, then find rule 12. The vendor asked to reach one controller's web page. Rule 12 lets anyone using the vendor VPN login reach every server and every plant device on any port, with one shared login and no logging.",
        "This is the same pattern as the 2013 Target breach. Attackers stole credentials from Target's HVAC contractor and used that vendor access as their way in. Least privilege for a vendor means one destination, the ports it needs, a named login for each technician, MFA, and logging."
      ],
      cmd: "cat ../memos/riverbend_vendor_access.txt\ngrep -i riverbend fw-core_rules.csv",
      expect: "The 2023 request for access to HVAC-CTRL only, Jordan's note about the wide rule, and rule 12."
    },
    {
      title: "Design the plant rules",
      body: [
        "Rules 6 and 7 were a 'temporary' fix for Line 2 label printing in 2019. Rule 8 lets the plant reach every server on every port. Write down what the plant actually needs, then write replacement rules in the same columns as the export. A good answer might include:",
        "<strong>Plant to servers:</strong> DNS to DC01 (rule 2 already covers it) and SMB to ENG-FS01 only, if plant PCs open drawings. <strong>Servers to plant:</strong> ENG-FS01 to the CNC machines for program transfers, moving from FTP to SFTP when the machines support it. <strong>Office to plant:</strong> only an IT jump host, on SSH or HTTPS, logged. <strong>Plant to office:</strong> only the label printer's single print path, or nothing. Finish with a working default deny: delete rule 21."
      ],
      expect: "A short list of new rules, each with a specific source, destination, and service, plus the rules you would delete."
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many rules are in the export, not counting the header?", kind: "number", answer: 24 },
    { id: "c2", q: "How many rules are disabled?", kind: "number", answer: 1 },
    { id: "c3", q: "Which rule number lets any plant traffic reach the office network?", kind: "number", answer: 6 },
    { id: "c4", q: "Which rule number exposes a server's RDP to the internet?", kind: "number", answer: 14 },
    { id: "c5", q: "Which rule number allows any source to reach any destination on any service?", kind: "number", answer: 21 },
    { id: "c6", q: "Which rule number is shadowed by rule 7?", kind: "number", answer: 10 },
    { id: "c7", q: "How many ENABLED rules have zero hits in 90 days?", kind: "number", answer: 4 },
    { id: "c8", q: "How many ALLOW rules have logging turned off? (the number your awk command printed)", kind: "number", answer: 15 },
    { id: "c9", q: "What is the best replacement for rule 12 (the HVAC vendor)?", kind: "choice", opts: ["Keep it, but turn logging on", "Allow the vendor VPN pool to HVAC-CTRL (10.40.9.15) on HTTPS only, with a named login and MFA for each technician", "Move it below rule 21 so it matches less often", "Allow the vendor VPN pool to the whole PLANT zone, but not SERVERS"], answer: 1 },
    { id: "c10", q: "Paste your replacement rules for rules 6, 7, 8 and 12, and list the rules you would delete. Use the same columns as the export.", kind: "paste" }
  ],
  reflection: "Write the three firewall changes you would make first, in plain English for Greg Palmer. For each, say what could go wrong today and what the change prevents. Then explain in one or two sentences why rule 12 looks like the way attackers got into Target in 2013."
};

COURSE_LABS['4.3'] = {
  id: "4.3", week: 4, title: "Nmap: scan your own lab, then read Cedar Creek's scan", mins: 45, env: "kali",
  waitMins: 3, // the optional scanme.nmap.org version scan and the -p- scan take a minute or two each
  goal: "Run Nmap against services you start on your own Kali VM, learn how open, closed, and filtered ports look, and save your results. Then read the authorized internal scan Dee ran at Cedar Creek and find what an attacker on the office network could reach in the plant.",
  youNeed: [
    "Your Kali VM with the Week 4 lab pack (Lab 4.1, first step)",
    "Two terminal windows",
    "Lesson 4.6 (reconnaissance and scanning)",
    "About 45 minutes"
  ],
  steps: [
    {
      title: "Rules before tools",
      body: [
        "Scanning a network you do not own, without written permission, can break the law and your employer's policy. In this lab you scan only three things: your own Kali VM, the private VirtualBox network it sits on, and <strong>scanme.nmap.org</strong>, a host the Nmap project runs so that people can practice. Scan it lightly and only once.",
        "Cedar Creek's scan in the second half was approved in writing by Greg Palmer. You will read that approval too."
      ]
    },
    {
      title: "Start two services on your Kali",
      body: [
        "To have something to find, start two services. SSH listens on port 22. Python's built-in web server listens on the port you give it, here 8000. Run the first line in <strong>terminal 1</strong>. Run the second line in <strong>terminal 2</strong>; the web server keeps running there, so leave that window alone. Run the last line back in terminal 1.",
        "<code>ss -tln</code> lists the TCP ports your machine is listening on (<code>-t</code> TCP, <code>-l</code> listening, <code>-n</code> numbers)."
      ],
      cmd: "sudo systemctl start ssh\npython3 -m http.server 8000\nss -tln",
      expect: "Terminal 2 says Serving HTTP on 0.0.0.0 port 8000. In terminal 1, ss lists 0.0.0.0:22 and 0.0.0.0:8000 in the Local Address column."
    },
    {
      title: "Your first scan",
      body: [
        "With no options, Nmap scans the 1,000 most common TCP ports. Scan your own machine through the loopback name <code>localhost</code>."
      ],
      cmd: "nmap localhost",
      expect: "22/tcp open ssh and 8000/tcp open http-alt, plus a line saying 998 closed tcp ports were not shown."
    },
    {
      title: "Open and closed",
      body: [
        "<code>-p</code> picks ports. Port 80 has nothing listening. An <strong>open</strong> port answers a SYN with a SYN-ACK. A <strong>closed</strong> port answers with a reset (RST): the host is there but nothing is listening. A <strong>filtered</strong> port gives no answer at all, usually because a firewall dropped the probe.",
        "Run the scan two ways. <code>-sS</code> is the SYN scan: it sends the SYN, reads the reply, and never finishes the handshake. It needs root. <code>-sT</code> is the connect scan: it completes the full handshake through the operating system, so the target's application logs are more likely to record it."
      ],
      cmd: "sudo nmap -sS -p 22,80,8000 127.0.0.1\nnmap -sT -p 22,80,8000 127.0.0.1",
      expect: "Both scans: 22 open, 80 closed, 8000 open. The results match; the method differs."
    },
    {
      title: "What software is listening?",
      body: [
        "<code>-sV</code> turns on version detection. Nmap talks to each open port and compares the replies with its database of known services. Versions matter because known vulnerabilities belong to specific versions."
      ],
      cmd: "nmap -sV -p 22,8000 127.0.0.1",
      expect: "Port 22 shows OpenSSH with a version number. Port 8000 shows SimpleHTTPServer and a Python version."
    },
    {
      title: "Every port, saved to a file",
      body: [
        "Services do not have to use their usual ports. <code>-p-</code> scans all 65,535 TCP ports. <code>-oN</code> saves normal output to a file, which is how you keep evidence for a report."
      ],
      cmd: "nmap -p- -oN ~/labs/self_scan.txt 127.0.0.1\ncat ~/labs/self_scan.txt",
      expect: "The same two open ports. The saved file starts with a comment line showing the exact command and time."
    },
    {
      title: "Discover hosts on your VirtualBox network",
      body: [
        "<code>-sn</code> is host discovery only: which addresses are alive, with no port scan. Your Kali sits on a private network that VirtualBox creates, usually 10.0.2.0/24. Check your address with <code>ip -br addr</code> and change the range if yours is different."
      ],
      cmd: "ip -br addr\nsudo nmap -sn 10.0.2.0/24",
      expect: "Your own address (such as 10.0.2.15) and a few VirtualBox helper addresses such as 10.0.2.2 and 10.0.2.3. Your list may differ slightly.",
      tip: "If nearly every address shows as up, the VirtualBox NAT engine is answering for them. That is a quirk of the virtual network, not real hosts."
    },
    {
      title: "Optional scan, then stop your services",
      body: [
        "The first line is optional: one version scan of scanme.nmap.org. Its open ports change from time to time, so your results may not match a classmate's. Everyone runs the second line: press Ctrl + C in terminal 2 to stop the web server, then stop SSH."
      ],
      cmd: "nmap -sV scanme.nmap.org\nsudo systemctl stop ssh",
      expect: "A few open ports, typically including SSH and HTTP, with versions. Some ports may show as filtered."
    },
    {
      title: "Read the authorization",
      body: [
        "Now switch to Cedar Creek. Before Dee ran a single packet, Greg Palmer signed a scope document. Read it. Note what was in scope, what techniques were allowed, what was forbidden, and when the scan had to stop. This is what <strong>rules of engagement</strong> look like."
      ],
      cmd: "cd ~/labs/cedarcreek-week4/scans\ncat ../network/scope_authorization.txt",
      expect: "Scope: the Line 2 devices, HVAC-CTRL (10.40.9.15), and ENG-APP02 (10.30.4.22), scanned from IT-LT-04, a spare laptop on an ordinary office port. Allowed: discovery, port scan, version detection. Not allowed: logins, exploits, password guessing, writes to the PLC or CNCs."
    },
    {
      title: "Read the scan report",
      body: [
        "Dee saved the results with <code>-oA</code>, which writes three formats at once. The <strong>.nmap</strong> file is the normal report a person reads. Read it from top to bottom. The first line is the command Dee ran, and the last line is the summary."
      ],
      cmd: "less internal_scan_2026-11-30.nmap\ntail -n 1 internal_scan_2026-11-30.nmap",
      expect: "Seven host reports, then a summary line that says how many addresses were scanned and how many hosts were up. One address did not answer: LINE2-CNC05 is down for a rebuild."
    },
    {
      title: "Search the greppable output",
      body: [
        "The <strong>.gnmap</strong> file is the greppable format: one line per host, so grep can answer questions quickly. Each line is <code>port/state/protocol//service//version/</code>. <code>cut -f1</code> keeps just the first tab-separated field, the host.",
        "Count the hosts that are up, find Telnet (23) and FTP (21), then count every open port in the file. <code>grep -o</code> prints each match on its own line, so <code>wc -l</code> counts matches, not lines."
      ],
      cmd: "grep -c 'Status: Up' internal_scan_2026-11-30.gnmap\ngrep '23/open' internal_scan_2026-11-30.gnmap | cut -f1\ngrep '21/open' internal_scan_2026-11-30.gnmap | cut -f1\ngrep -o '/open/' internal_scan_2026-11-30.gnmap | wc -l",
      expect: "A count of hosts, one host with Telnet, two hosts with FTP, and a total count of open ports."
    },
    {
      title: "Remote control and industrial ports",
      body: [
        "RDP (3389) lets someone see and control a screen from across the network. On a plant HMI that means controlling the line. Port 502 is <strong>Modbus/TCP</strong>, the industrial protocol you saw in Lab 4.1. It has no login, so anyone who can reach port 502 can send commands to the PLC.",
        "Find both, then look at ENG-APP02. <code>grep -A8</code> prints the matching line plus the 8 lines After it."
      ],
      cmd: "grep '3389/open' internal_scan_2026-11-30.gnmap | cut -f1\ngrep '502/open' internal_scan_2026-11-30.gnmap | cut -f1\ngrep -A8 'eng-app02' internal_scan_2026-11-30.nmap",
      expect: "PLANT-PC-07 and ENG-APP02 offer Remote Desktop. LINE2-PLC offers Modbus. ENG-APP02 shows Microsoft IIS 8.5 and Windows Server 2008 R2 - 2012. IIS 8.5 ships with Windows Server 2012 R2, which matches what Tom Becker told you."
    },
    {
      title: "Connect the scan to the firewall",
      body: [
        "Dee scanned from IT-LT-04, an ordinary laptop on an office port, on purpose: the results show what any office PC can reach. Every plant host that was powered on answered. Look back at Lab 4.2: rule 7 lets the whole office reach the whole plant on any port. Any infected office laptop could have run this same scan, and then talked Modbus to the PLC or opened Remote Desktop on the HMI.",
        "Write down the three exposures you would fix first and the control that fixes each: a firewall rule, a secure protocol, or turning a service off."
      ],
      expect: "Three exposures, each with a specific fix."
    }
  ],
  checkpoints: [
    { id: "c1", q: "Paste the output of nmap -sV -p 22,8000 127.0.0.1 from your own Kali.", kind: "paste" },
    { id: "c2", q: "In your SYN scan of your own Kali, what state did port 80 show?", kind: "choice", opts: ["open", "closed", "filtered", "open|filtered"], answer: 1 },
    { id: "c3", q: "How many hosts were up in Dee's Cedar Creek scan?", kind: "number", answer: 7 },
    { id: "c4", q: "What is the IP address of the host with Telnet open?", kind: "text", answer: ["10.40.2.63"] },
    { id: "c5", q: "How many hosts have FTP (port 21) open?", kind: "number", answer: 2 },
    { id: "c6", q: "How many open ports are in the whole scan?", kind: "number", answer: 17 },
    { id: "c7", q: "Which TCP port does LINE2-PLC use for its industrial protocol?", kind: "number", answer: 502 },
    { id: "c8", q: "What version of Microsoft IIS does ENG-APP02 run? (number only)", kind: "text", answer: ["8.5", "IIS 8.5", "Microsoft IIS httpd 8.5"] },
    { id: "c9", q: "What is the IP address of the plant host (10.40.x.x) that offers Remote Desktop?", kind: "text", answer: ["10.40.2.57"] }
  ],
  reflection: "Imagine you are on the defending side the night Dee ran this scan. What would FW-CORE's logs, or an IDS watching the plant, have shown? Then pick two exposures from the scan and explain, for Marcus, why each matters and how you would fix it."
};
