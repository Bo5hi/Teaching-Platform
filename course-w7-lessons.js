// Week 7 lessons + quiz. Shapes: docs/COURSE_V2.md
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['7.1'] = {
  id: '7.1', week: 7, title: 'Firewalls and network defense', mins: 20, module: 'Security+ SY0-701 objectives 3.2, 4.5',
  intro: "It is Monday morning, December 21. Over the weekend Cedar Creek's perimeter firewall, FW-CORE, wrote more than 700 log lines, and nobody has read them. Marcus wants to know by 10:00 whether anything in them is real. Before you can read a firewall log, you need to know what a firewall decides, how it decides, and what each kind of firewall can and cannot see. This lesson covers firewall generations, rules, zones, and the habits that turn a firewall from a box in the server room into a working control.",
  sections: [
    {
      title: 'What a firewall does',
      figure: { id: 'w7-fw-generations', caption: 'Three generations of firewall. Each one looks deeper into the traffic than the one before.' },
      body: [
        "A <strong>firewall</strong> is a device or program that sits between networks and decides which traffic may pass. It compares each connection with a list of <strong>rules</strong>. A rule names things such as the source address, the destination address, the port, and the protocol, and then says <em>allow</em> or <em>deny</em>.",
        "A list of rules like this is also called an <strong>access control list (ACL)</strong>. The firewall reads the list from the top and stops at the first rule that matches, so order matters. A broad 'allow' rule near the top can make every rule below it useless.",
        "At the bottom of a well-built rule list is an <strong>implicit deny</strong>: anything not allowed by an earlier rule is blocked. This is called <strong>default deny</strong>. You start by blocking everything and then open only what the business needs. The opposite approach, allowing everything and blocking known bad things, always misses something, because nobody can list every bad thing in advance.",
        "A firewall that sits at the edge of the network, between the company and the internet, is a <strong>perimeter firewall</strong>. At Cedar Creek that is FW-CORE in the server room."
      ],
      keyTerms: [
        { term: 'Firewall rule', definition: 'One line in a firewall policy that matches traffic by source, destination, port, and protocol, and allows or denies it.' },
        { term: 'Implicit deny', definition: 'The final rule that blocks any traffic not explicitly allowed by an earlier rule.' }
      ]
    },
    {
      title: 'Three generations of firewall',
      body: [
        "<strong>Stateless packet filters</strong> look at each packet on its own. They check the addresses, ports, and protocol in the packet header and nothing else. They are fast, but they have no memory. A stateless filter cannot tell whether an incoming packet is a reply to a connection someone inside started or an attacker's packet pretending to be one.",
        "<strong>Stateful firewalls</strong> keep a <strong>state table</strong>, a list of the connections that are currently open. When a PC inside opens a connection to a web server, the firewall records it and lets the replies back in. A packet that does not belong to any open connection is dropped. Stateful inspection is the normal baseline for business firewalls today. Because it works with addresses, ports, and connections, it is often called a <strong>layer 4 firewall</strong>, after the transport layer of the OSI model.",
        "<strong>Next-generation firewalls (NGFW)</strong> add a look inside the traffic. They identify the application (not just the port), can tie traffic to a user account, can include an intrusion prevention system (IPS), and can decrypt and inspect encrypted traffic. Because they understand applications, they are called <strong>layer 7 firewalls</strong>. An NGFW can tell the difference between a user browsing a website on port 443 and malware sending stolen data out on port 443."
      ],
      table: {
        head: ['Type', 'What it checks', 'Strength', 'Weakness'],
        rows: [
          ['Stateless packet filter', 'Each packet header on its own', 'Very fast, simple', 'No memory of connections; easy to fool'],
          ['Stateful (layer 4)', 'Headers plus the state table of open connections', 'Blocks traffic that does not belong to a real session', 'Cannot see what is inside allowed traffic'],
          ['Next-generation (layer 7)', 'Application, user, content; often includes IPS and decryption', 'Sees misuse of allowed ports', 'More expensive; must be tuned and kept up to date']
        ]
      }
    },
    {
      title: 'Special-purpose firewalls',
      body: [
        "A <strong>web application firewall (WAF)</strong> protects one web application. It sits in front of the web server and reads each HTTP request, looking for attacks such as SQL injection and cross-site scripting. A network firewall allows the web traffic; the WAF judges what the traffic is trying to do.",
        "A <strong>unified threat management (UTM)</strong> appliance puts several tools in one box: firewall, intrusion prevention, antivirus scanning, web filtering, and often a VPN. UTMs are popular with small and medium businesses because there is one device to buy and manage. The trade-off is a single point of failure, and performance can drop when every feature is turned on.",
        "A <strong>host-based firewall</strong> runs on one computer, such as Windows Defender Firewall on a laptop or nftables on a Linux server. It protects that one device even when the device is on a coffee shop network, far from the perimeter.",
        "A <strong>proxy server</strong> makes requests on behalf of users. Instead of a PC talking directly to a website, the PC talks to the proxy and the proxy talks to the website. A forward proxy lets the company filter and log web use. A reverse proxy sits in front of a company's own web servers and hides them from the internet."
      ],
      callout: { kind: 'exam', title: 'Match the firewall to the job', text: "'Protect a public web app from SQL injection' points to a WAF. 'One appliance with firewall, IPS, antivirus, and VPN for a small office' is a UTM. 'Identify applications and users, not just ports' is an NGFW (layer 7). 'Tracks which connections are open' is stateful (layer 4). 'Protects the laptop when it is off the corporate network' is a host-based firewall." }
    },
    {
      title: 'Rules point both ways',
      body: [
        "<strong>Inbound rules</strong> control traffic coming in from the internet. <strong>Outbound rules</strong>, also called <strong>egress</strong> rules, control traffic leaving the company. Many small businesses write careful inbound rules and then allow all outbound traffic. That is a serious gap.",
        "Malware almost always needs to talk to its owner. An infected PC reaches out to a <strong>command and control (C2)</strong> server to get instructions and to send stolen data out. If every PC may connect to anything on any port, the firewall will log that conversation but never stop it.",
        "Good egress filtering allows only what the business uses. Web traffic goes out on 80 and 443, ideally through a proxy. DNS lookups go out only from the DNS servers. Email goes out only from the mail system. Anything else is denied and logged. A PC trying to reach an unknown server on an unusual port then shows up as a denied connection, which is much easier to spot than one allowed line among thousands.",
        "A hospital network is a good model of both directions done well. Inbound, everything is denied by default, HTTPS (port 443) is allowed only to the patient portal's web server, and SSH (port 22) is allowed only from the administrators' jump host. Medical devices sit on their own VLAN with no internet access at all, because they have no business reason to reach it."
      ],
      callout: { kind: 'cedar', title: 'FW-CORE still has an any-to-any rule', text: "FW-CORE's inbound rules are now fairly tight: apart from the VPN portal on port 443 and one RDP forward for the CAD vendor's own address, everything is denied. Outbound is a different story. Office-Web lets office PCs reach any website on ports 80 and 443, and anything else falls through to Copier-Test, the any-to-any rule you flagged in your Week 4 review. Jordan has not removed it yet; on December 2 he only moved the SMB block above it and turned on logging. In Lab 7.1 you will see what that rule allowed over the weekend." }
    },
    {
      title: 'Zones, placement, and failure modes',
      figure: { id: 'w7-screened-subnet', caption: 'A screened subnet (DMZ): public-facing servers sit between two firewalls, so a compromised web server does not open a path to the internal network.' },
      body: [
        "Firewalls divide a network into <strong>security zones</strong>, groups of systems that share the same level of trust. Traffic between zones must pass through a firewall rule. Splitting a network this way is called <strong>network segmentation</strong>, often done with separate VLANs for departments such as HR, Finance, and Engineering. Its main benefit is limiting <strong>lateral movement</strong>: an attacker who lands in one segment cannot simply walk into the next.",
        "A <strong>screened subnet</strong>, often still called a <strong>demilitarized zone (DMZ)</strong>, holds servers the internet must reach, such as a public web server. The internet may reach the screened subnet, and the screened subnet may reach only the specific internal systems it needs. If an attacker takes over the web server, the attacker is stuck in the screened subnet rather than sitting inside the company network.",
        "A <strong>jump server</strong> (or jump box) is a hardened system that administrators connect to first, and from there to the servers they manage. The firewall then only has to allow admin traffic from one place.",
        "Every security device can fail. A device set to <strong>fail-open</strong> lets all traffic through when it breaks, which keeps the business running but drops the protection. A device set to <strong>fail-closed</strong> blocks all traffic when it breaks, which keeps the protection but stops the business. A perimeter firewall usually fails closed. The choice is a business decision about availability against confidentiality."
      ],
      callout: { kind: 'real', title: 'Target, 2013: the path from a vendor to the registers', text: "Attackers first got into Target's network with login credentials stolen from Fazio Mechanical, a heating and air conditioning vendor. From there they reached the point-of-sale systems that ran the store registers and installed malware that captured payment card data. Card data for about 40 million cards was stolen. A vendor account should never have had a network path to the payment systems. Zones and firewall rules between them are how you remove that path." }
    },
    {
      title: 'Reading a firewall log',
      body: [
        "A firewall that blocks is useful. A firewall whose logs someone reads is far more useful. Each log line records one decision: the time, allow or deny, the direction, the protocol, the source and destination addresses and ports, how many bytes moved, and which rule made the decision.",
        "Some patterns are worth knowing on sight:"
      ],
      list: [
        "<strong>Many denied ports from one outside address in a short time</strong>: a port scan. Common and usually blocked, but it shows who is looking.",
        "<strong>Many denied connections to the same port from many addresses</strong>: internet-wide scanning for one service, such as remote desktop on port 3389.",
        "<strong>Allowed outbound traffic to an unusual port</strong>, especially at regular intervals: possible malware checking in with its C2 server.",
        "<strong>One outbound connection that moves far more bytes than normal</strong>, especially at night: possible data theft (exfiltration).",
        "<strong>Denied outbound traffic</strong>: a PC trying to do something the rules forbid. Sometimes a misconfigured app, sometimes malware."
      ],
      callout: { kind: 'tip', title: 'Ask what the rule allowed, not only what it blocked', text: "Beginners look at the deny lines first because they look dangerous. Denied traffic already failed. The lines that hurt companies are the ones a rule allowed. Always ask which allowed connections the business cannot explain." }
    }
  ],
  check: [
    { q: "A firewall keeps a table of open connections and drops incoming packets that do not belong to any of them. What type of firewall is this?", opts: ["Stateless packet filter", "Web application firewall", "Stateful firewall", "Forward proxy"], ans: 2, why: "Tracking open connections in a state table is what makes a firewall stateful." },
    { q: "Cedar Creek wants to protect a new customer order website from SQL injection attacks. Which control fits best?", opts: ["A web application firewall (WAF) in front of the web server", "A host-based firewall on each office PC", "A stateless packet filter", "A jump server"], ans: 0, why: "A WAF reads HTTP requests and blocks attacks against a web application, such as SQL injection." },
    { q: "Which firewall policy best follows the default deny principle?", opts: ["Allow all traffic and block known malicious addresses", "Allow all outbound traffic and block all inbound traffic", "Allow traffic on ports below 1024 only", "Block all traffic, then allow only the services the business needs"], ans: 3, why: "Default deny starts by blocking everything and opens only what is needed. Anything not explicitly allowed is blocked." },
    { q: "An infected PC connects every 10 minutes to an unknown server on port 8443, and the firewall allows it. Which missing control would most directly have blocked this?", opts: ["A screened subnet", "Egress (outbound) filtering", "Fail-open mode", "A stronger inbound rule for the VPN"], ans: 1, why: "Outbound (egress) rules that allow only the ports and destinations the business uses would deny the malware's connection." },
    { q: "Where should a company place a public web server so that a compromise of that server does not give the attacker direct access to internal systems?", opts: ["On the same network as the domain controller", "Behind a fail-open firewall", "In a screened subnet (DMZ) between two firewalls", "On the guest Wi-Fi network"], ans: 2, why: "A screened subnet lets the internet reach the server while firewall rules keep the server from reaching most internal systems." }
  ]
};

COURSE_LESSONS['7.2'] = {
  id: '7.2', week: 7, title: 'Intrusion detection and prevention', mins: 15, module: 'Security+ SY0-701 objectives 3.2, 4.4, 4.5',
  intro: "A firewall answers one question: is this connection allowed? It does not ask whether an allowed connection is carrying an attack. That is the job of intrusion detection and prevention systems. They read traffic or watch a computer and raise an alarm, or block the traffic, when they recognize an attack. FW-CORE has an IPS module, and Marcus put it in alert-only mode in 2024. By the end of this lesson you will know what that choice cost, and why an alert nobody reads is the same as no alert at all.",
  sections: [
    {
      title: 'Detect or prevent',
      figure: { id: 'w7-ids-ips', caption: 'An IDS gets a copy of the traffic and can only alert. An IPS sits in the path of the traffic and can drop it.' },
      body: [
        "An <strong>intrusion detection system (IDS)</strong> watches traffic or activity and raises an alert when it sees something that looks like an attack. It does not stop anything. Think of a smoke alarm: it makes noise, and a person has to act.",
        "An <strong>intrusion prevention system (IPS)</strong> does the same detection but can also act on its own: drop the packet, reset the connection, or block the source address. Think of a sprinkler system that turns on when it detects fire.",
        "The difference comes from where each one sits. An IDS is <strong>passive</strong>. It receives a copy of the traffic from a <strong>network tap</strong> (a small device that copies everything on a cable) or from a <strong>SPAN port</strong> (a switch port configured to mirror traffic from other ports). Because it only sees a copy, it cannot slow the network down, and if it breaks, traffic keeps flowing. An IPS is <strong>inline</strong>, which means the traffic flows through it. It can block, but it also adds a point that can slow or stop the network."
      ],
      keyTerms: [
        { term: 'IDS', definition: 'Intrusion detection system: monitors traffic or a host and alerts on suspected attacks. Passive; does not block.' },
        { term: 'IPS', definition: 'Intrusion prevention system: monitors inline and can block suspected attacks automatically.' }
      ]
    },
    {
      title: 'Network-based and host-based',
      body: [
        "A <strong>network-based</strong> system watches traffic on a network segment. Placed near the perimeter, it sees what comes in from and goes out to the internet. Placed between internal zones, it sees movement from one part of the company to another.",
        "A <strong>host-based</strong> system runs as software on one computer. It can see things a network sensor never will: which program opened a connection, which files changed, which registry keys were edited, and traffic after it has been decrypted on the computer.",
        "Wireless networks get their own versions, which watch the radio waves for rogue access points and attacks on Wi-Fi."
      ],
      table: {
        head: ['Acronym', 'Name', 'Sees', 'Can block?'],
        rows: [
          ['NIDS', 'Network-based IDS', 'Traffic on a network segment (from a tap or SPAN port)', 'No'],
          ['NIPS', 'Network-based IPS', 'Traffic flowing through it inline', 'Yes'],
          ['HIDS', 'Host-based IDS', 'Processes, files, logs, and traffic on one computer', 'No'],
          ['HIPS', 'Host-based IPS', 'Same as HIDS', 'Yes, on that computer'],
          ['WIDS / WIPS', 'Wireless IDS / IPS', 'Wi-Fi radio traffic, rogue access points', 'WIPS can']
        ]
      }
    },
    {
      title: 'How detection works',
      body: [
        "<strong>Signature-based</strong> detection compares traffic with a library of known attack patterns, called signatures or rules. It is fast and accurate for attacks someone has already seen and written a rule for. It cannot recognize a new attack that has no signature yet. The library must be updated constantly.",
        "<strong>Anomaly-based</strong> (or <strong>behavior-based</strong>) detection first learns what normal looks like, called a <strong>baseline</strong>. It then alerts on things that differ from the baseline: a PC that never talks at night suddenly sending data at 2 AM, or a server that usually makes 50 DNS lookups an hour making 5,000. It can catch new attacks, but it also flags unusual activity that is perfectly innocent, so it produces more false alarms.",
        "Many products also use <strong>heuristics</strong>, rules of thumb that score how suspicious something is, and look at <strong>trends</strong> over time rather than single events.",
        "Snort and Suricata are two widely used open-source IDS/IPS engines. A rule for them reads like a sentence. This one alerts when an office PC connects out on port 8443:"
      ],
      list: [
        "<code>alert tcp $HOME_NET any -&gt; $EXTERNAL_NET 8443 (msg:\"Outbound TLS on non-standard port 8443\"; sid:1000210;)</code>",
        "<strong>alert</strong> is the action (an IPS rule could say <strong>drop</strong>). <strong>tcp</strong> is the protocol. The addresses and ports before and after the arrow are the source and destination. <strong>msg</strong> is the text the analyst sees, and <strong>sid</strong> is the rule's ID number."
      ]
    },
    {
      title: 'Where the sensors go',
      body: [
        "A sensor only sees the traffic that passes it, so placement decides what you can detect. A sensor just inside the perimeter firewall sees everything that crosses between the company and the internet: scans, inbound attacks that got through the firewall rules, and infected PCs calling out. It sees nothing that stays inside the building.",
        "A sensor between internal zones, for example between the office network and the server network, sees <strong>lateral movement</strong>: an attacker who has one PC and is now reaching for the file servers. Many breaches are caught here, because that is where the attacker has to move to reach the data.",
        "Host-based sensors on the most valuable servers fill the last gap. They see activity that never crosses a network sensor, such as a program reading thousands of files on the server itself.",
        "Most companies start with an IPS at the perimeter, often built into an NGFW, and add internal sensors around the systems that hold the crown jewels. At Cedar Creek that means the engineering drawings on ENG-FS01."
      ]
    },
    {
      title: 'True, false, positive, negative',
      figure: { id: 'w7-alert-matrix', caption: 'Every alert decision lands in one of four boxes. Tuning moves alerts out of the two red boxes.' },
      body: [
        "Every time a detection system decides, it can be right or wrong in two directions. A <strong>true positive</strong> is an alert on a real attack. A <strong>true negative</strong> is silence when nothing bad happened. A <strong>false positive</strong> is an alert on harmless activity. A <strong>false negative</strong> is silence during a real attack, which is the worst outcome because nobody knows to look.",
        "<strong>Tuning</strong> means adjusting rules and thresholds so real attacks still alert while known harmless activity does not. For example, a rule that alerts on port 8443 could be tuned to ignore one approved business partner's server.",
        "Untuned systems cause <strong>alert fatigue</strong>. When analysts see hundreds of alerts a day and almost all are false positives, they stop reading them carefully. The one real alert gets lost in the pile. Turning a noisy rule off entirely is not tuning; it trades false positives for false negatives."
      ],
      callout: { kind: 'real', title: 'Target, 2013: the alarm went off', text: "Target had installed a malware-detection system months before the breach. As the attackers set up their malware on Target's network, that system raised alerts. A U.S. Senate committee staff report later found that Target did not respond to those warnings. The tools worked. The process for acting on what they said did not." }
    },
    {
      title: 'When the sensor goes blind',
      body: [
        "An IDS or IPS can only judge what it can read. Most traffic today is encrypted with TLS, so a sensor that only sees the encrypted stream cannot see an attack inside it. Companies that want to inspect that traffic use <strong>TLS inspection</strong> (also called SSL inspection or break and inspect). A device decrypts the traffic, inspects it, and re-encrypts it. To do this it needs a digital certificate that the company's computers trust.",
        "Inline devices also need a failure plan. An IPS that fails closed stops the network when it crashes. One that fails open keeps the network up but stops inspecting. Either way, someone must notice that the device is not doing its job. A sensor that is quietly broken produces a false negative for every attack."
      ],
      callout: { kind: 'real', title: 'Equifax, 2017: an expired certificate', text: "Equifax used a device to inspect its network traffic for malicious activity. According to the U.S. Government Accountability Office (GAO-18-559), a digital certificate on that device had expired about 10 months before the breach, so encrypted traffic passed through without being inspected. Attackers ran commands and removed data over encrypted connections without being detected. When an administrator updated the certificate on July 29, 2017, inspection restarted and the intrusion was spotted. The attack had run for about 76 days." }
    },
    {
      title: 'Deception: honeypots and honeytokens',
      body: [
        "Some detection tools work by bait. A <strong>honeypot</strong> is a decoy system with no real business use. Nobody should ever connect to it, so any connection is suspicious by definition. A <strong>honeynet</strong> is a network of honeypots. A <strong>honeyfile</strong> is a fake document with a tempting name, such as passwords.xlsx, that raises an alert when opened. A <strong>honeytoken</strong> is a fake piece of data, such as a fake account or a fake credential, that raises an alert when someone uses it.",
        "Deception tools have one big advantage: they produce very few false positives, because nothing legitimate touches them."
      ],
      callout: { kind: 'exam', title: 'IDS or IPS?', text: "'Alerts but does not block', 'passive', 'tap', or 'SPAN port' all point to an IDS. 'Blocks automatically' and 'inline' point to an IPS. 'Learns normal behavior' means anomaly-based; 'database of known patterns' means signature-based. 'Legitimate traffic was blocked' is a false positive on an IPS; 'the attack produced no alert' is a false negative." }
    }
  ],
  check: [
    { q: "An IDS raises an alert on a SQL injection attempt, but the attack still reaches the database. Why?", opts: ["The IDS signature was out of date", "The IDS was in fail-closed mode", "SQL injection cannot be detected by any tool", "An IDS detects and alerts but does not block traffic"], ans: 3, why: "An IDS is passive. It alerts, and a person must act. Blocking needs an inline IPS or a WAF." },
    { q: "A sensor learns a server's normal traffic for two weeks, then alerts when the server sends 40 times its usual data at 3 AM. What detection method is this?", opts: ["Anomaly-based (behavioral)", "Signature-based", "Honeytoken", "Stateless filtering"], ans: 0, why: "Comparing activity against a learned baseline of normal behavior is anomaly-based detection." },
    { q: "The IPS blocks the payroll provider's website because a rule mistakes it for malware. What kind of result is this?", opts: ["True positive", "False positive", "True negative", "False negative"], ans: 1, why: "The system flagged and blocked harmless traffic. That is a false positive." },
    { q: "A network sensor receives a copy of all traffic from a switch port that mirrors other ports. What is this switch port called, and what kind of system does it suit?", opts: ["A jump server, suited to an IPS", "A screened subnet, suited to a WAF", "A trunk port, suited to a honeypot", "A SPAN port, suited to a passive IDS"], ans: 3, why: "A SPAN port mirrors traffic to a sensor. Because the sensor only gets a copy, it can detect but not block, which is how a passive IDS works." },
    { q: "Dee creates a fake domain account called payroll-admin that no person or process uses, and sets an alert for any sign-in attempt with it. What is this?", opts: ["Honeynet", "Jump server", "Honeytoken", "False negative"], ans: 2, why: "A fake credential that alerts when used is a honeytoken." }
  ]
};

COURSE_LESSONS['7.3'] = {
  id: '7.3', week: 7, title: 'SIEM and log analysis', mins: 15, module: 'Security+ SY0-701 objectives 4.4, 4.9',
  intro: "In Lab 7.1 you found something odd in one log. Real attacks almost never show up in just one place. They leave a trace in the firewall log, another in DNS, another in the domain controller's sign-in records, and another on the endpoint. A security information and event management (SIEM) system pulls all of those logs together so one analyst can see the whole story. This lesson explains where logs come from, how a SIEM turns them into alerts, and how to think like a correlation rule, so you can do the same thing by hand in Lab 7.2.",
  sections: [
    {
      title: 'Why one log is never enough',
      body: [
        "Picture three events at a company without a SIEM. The firewall logs connections from an unfamiliar address. Active Directory logs one account failing to sign in 200 times in ten minutes. A laptop logs a new program starting under that same user. Each event goes to a different console, watched by a different person or by nobody. Nobody connects the dots.",
        "With a SIEM, all three events land in one place with matching time stamps. A single rule can say: many failed sign-ins, followed by a success for the same account, followed by a new program on that user's computer, is one incident. That is <strong>correlation</strong>: linking events from different sources that belong to the same story.",
        "A <strong>Security Operations Center (SOC)</strong> is the team, and often the room, whose job is to watch these alerts and respond. The SIEM is the SOC's main tool. Widely used SIEM platforms include Splunk, Microsoft Sentinel (cloud-based), and Elastic Security (built on the open-source Elasticsearch, Logstash, and Kibana stack)."
      ],
      keyTerms: [
        { term: 'SIEM', definition: 'Security information and event management: a system that collects logs from many sources, normalizes them, correlates events, and raises alerts.' },
        { term: 'Correlation', definition: 'Linking events from different sources (by time, user, host, or address) to show that they are part of one activity.' }
      ]
    },
    {
      title: 'Where the logs come from',
      body: [
        "A SIEM is only as good as what it collects. The main sources are: firewall logs (what was allowed and denied), IDS/IPS alerts, endpoint logs and EDR alerts, operating system security logs, application logs (for example, web server and database logs), DNS logs (which computer looked up which name), authentication logs (who signed in, where, and how), and vulnerability scan results.",
        "Some sources record <strong>metadata</strong>, which is data about the traffic rather than the traffic itself. <strong>NetFlow</strong> records which addresses talked, on which ports, for how long, and how many bytes moved, without the content. That is enough to spot a large upload. <strong>Packet captures</strong> record full traffic and are the most detailed source, but they are huge, so they are usually captured only when needed.",
        "On Windows, the Security log uses numbered <strong>event IDs</strong>. You do not need to memorize hundreds, but these few appear in almost every investigation, including the Blue Team Lab today:"
      ],
      table: {
        head: ['Event ID', 'Meaning', 'Why an analyst cares'],
        rows: [
          ['4624', 'An account signed in successfully', 'Who got in, from where, and the logon type (2 = at the keyboard, 3 = over the network, 10 = remote desktop)'],
          ['4625', 'A sign-in failed', 'Many failures can mean password guessing'],
          ['4740', 'An account was locked out', 'Often follows many failures'],
          ['4720', 'A user account was created', 'Attackers create accounts to keep access'],
          ['4732', 'A member was added to a security group', 'Watch for additions to admin groups'],
          ['4688', 'A new process started', 'Shows what programs ran'],
          ['4663', 'An object, such as a file, was accessed', 'Shows file access when auditing is on'],
          ['4776', 'The computer checked credentials for an account', 'Credential use, including a different account than expected'],
          ['1102', 'The audit log was cleared', 'Attackers clear logs to hide; almost always worth an alert']
        ]
      }
    },
    {
      title: 'How a SIEM works',
      figure: { id: 'w7-siem-pipeline', caption: 'The SIEM pipeline: collect, normalize, correlate, alert, and keep the evidence.' },
      body: [
        "<strong>Collection.</strong> Logs reach the SIEM in two ways. An <strong>agent</strong> is a small program installed on a computer that forwards its logs. <strong>Agentless</strong> collection receives logs that devices send over the network, usually with the <strong>syslog</strong> protocol, or pulls them through an API. Network devices can also send <strong>SNMP traps</strong>, short messages that report an event such as a link going down.",
        "<strong>Normalization.</strong> Every product writes logs differently. One writes dates as 12/19/2026, another as 2026-12-19. One calls the address 'src', another 'SourceIP'. The SIEM <strong>parses</strong> each format (Windows Event Log, syslog, the Common Event Format or CEF, and many vendor formats) and maps it to common field names, so one search can cover them all.",
        "<strong>Time.</strong> Correlation depends on accurate clocks. If the firewall's clock is four minutes off from the domain controller's, the story comes out in the wrong order. Every device should get its time from the same source using the Network Time Protocol (NTP).",
        "<strong>Correlation and alerting.</strong> Rules run against the combined data and raise alerts, which go to a dashboard, a ticket, or an analyst's phone. <strong>Dashboards</strong> give a live picture, and scheduled <strong>reports</strong> summarize trends for managers.",
        "<strong>Retention.</strong> Logs are kept for a set time, often 90 days or more searchable and longer in an archive, because breaches are often found weeks after they start. If the logs are gone, the investigation cannot reconstruct what happened."
      ]
    },
    {
      title: 'Think like a correlation rule',
      body: [
        "A correlation rule is a precise sentence: <em>when these events happen, in this order, within this time, involving the same thing, raise this alert</em>. Writing one in plain English first is how real detection engineers start.",
        "Here is a rule for <strong>password spraying</strong>, an attack that tries one common password against many accounts so no single account gets locked out:"
      ],
      list: [
        "<strong>Trigger:</strong> failed sign-ins (event 4625) for 10 or more different accounts from the same source address within 15 minutes.",
        "<strong>Raise the severity if:</strong> any account then signs in successfully (event 4624) from that same source within 30 minutes.",
        "<strong>Action:</strong> high-priority alert to the on-call analyst, with the source host, the list of accounts tried, and the account that succeeded.",
        "<strong>Tuning note:</strong> exclude the help desk's password-reset tool, which legitimately checks many accounts."
      ],
      callout: { kind: 'cedar', title: 'Cedar Creek has a SIEM, and a mailbox', text: "Cedar Creek's SIEM and EDR send their alerts to a shared mailbox, siem-alerts@cedarcreek-ind.com. IT checks it when they have time. Nobody is on call on weekends. Accounts lock after 10 bad passwords in 30 minutes, which stops guessing against one account but does nothing against an attacker who tries each account only once. In Lab 7.2 you will build this week's correlation by hand from the weekend's exports." }
    },
    {
      title: 'From alert to action',
      body: [
        "An alert is the start of the work, not the end. A SOC analyst <strong>triages</strong> each alert: is it real, how serious is it, and what is affected? <strong>Enrichment</strong> adds context, such as who owns the host, what the outside address is known for, and whether the user is travelling.",
        "Many SOCs now use <strong>SOAR</strong> (security orchestration, automation, and response) tools. A SOAR tool runs a <strong>playbook</strong>, a set of steps that runs automatically when an alert fires. For example, it can look up the address, isolate the laptop, and open a ticket before a person even reads the alert.",
        "SOCs measure themselves with numbers such as <strong>mean time to detect (MTTD)</strong>, the average time from the start of an attack to its discovery, and <strong>mean time to respond</strong>. Those numbers only improve when alerts are tuned, routed to a person, and acted on."
      ],
      callout: { kind: 'real', title: 'Equifax, 2017: what the logs could have shown', text: "GAO-18-559 reports that the attackers who broke into Equifax's online dispute portal ran about 9,000 database queries, many more than normal operations needed, and that Equifax had no limit on how often queries could run. The attack lasted about 76 days before it was discovered. A rule watching query volume against a normal baseline is exactly the kind of correlation a SIEM exists to run." }
    },
    {
      title: 'Getting logs in shape',
      body: [
        "Analysts often start with raw log files before a SIEM is in place, or when the SIEM is missing a source. The same steps apply by hand: put every source in one place, make the time stamps match, pull out the fields you need, filter to the host or account you care about, and sort everything by time to build a <strong>timeline</strong>.",
        "In Kali you will do this with tools you already know (grep, cut, sort, uniq) plus two new ones. <code>awk</code> pulls out and adds up fields. <code>sed</code> rewrites text, which is how you normalize one log's date format to match the others."
      ],
      callout: { kind: 'exam', title: 'SIEM vocabulary', text: "Know these pairs. Aggregation collects logs in one place; correlation links them. Agent-based collection installs software; agentless uses syslog or an API. NetFlow is metadata; a packet capture is full content. SOAR automates the response with playbooks. A SIEM detects; it does not block traffic by itself." }
    }
  ],
  check: [
    { q: "What does a SIEM do that a single firewall log cannot?", opts: ["Correlates events from many sources to reveal one attack", "Blocks malicious packets inline", "Encrypts logs so attackers cannot read them", "Replaces the need for endpoint protection"], ans: 0, why: "A SIEM collects logs from many sources and correlates them. The firewall only sees its own traffic." },
    { q: "Your SIEM shows the firewall event happening four minutes after the sign-in it was caused by. What is the most likely fix?", opts: ["Add more storage to the SIEM", "Synchronize every device's clock with NTP", "Turn off normalization", "Move the firewall into a screened subnet"], ans: 1, why: "Correlation depends on accurate time stamps. NTP keeps every device's clock in step." },
    { q: "Which Windows Security event ID shows a failed sign-in?", opts: ["4625", "4624", "4720", "1102"], ans: 0, why: "4625 records a failed sign-in. 4624 is a success, 4720 is an account created, and 1102 is the audit log being cleared." },
    { q: "A data source records which addresses talked, on which ports, and how many bytes moved, but not the content. What is it?", opts: ["A full packet capture", "A honeyfile", "An EDR quarantine log", "NetFlow (metadata)"], ans: 3, why: "NetFlow is metadata about connections, without the payload." },
    { q: "An alert fires, and within seconds a tool looks up the outside address, isolates the laptop, and opens a ticket, all before an analyst reads it. What kind of tool did this?", opts: ["A stateless packet filter", "A honeypot", "SOAR running a playbook", "An SNMP trap"], ans: 2, why: "Security orchestration, automation, and response (SOAR) tools run playbooks that automate response steps." }
  ]
};

COURSE_LESSONS['7.4'] = {
  id: '7.4', week: 7, title: 'Endpoint security: antivirus, EDR, and hardening', mins: 15, module: 'Security+ SY0-701 objectives 2.5, 4.1, 4.5',
  intro: "An endpoint is any device a person works on or a server runs on: laptops, desktops, servers, phones, and the Line 2 HMI. Attackers aim at endpoints because that is where people open email and where data is stored. Cedar Creek's EDR console shows every office PC reporting, which is a good start. In Lab 7.2 you saw that reporting is not the same as protecting. This lesson covers how antivirus, EDR, and hardening work together, and why a setting changed for a font manager mattered so much.",
  sections: [
    {
      title: 'Defense in depth on the endpoint',
      body: [
        "<strong>Defense in depth</strong> means layering several controls so that when one fails, another still stands. On an endpoint, the layers usually include a hardened configuration, a host firewall, antivirus or EDR, application control, disk encryption, patching, and logging that reaches the SIEM.",
        "No single layer is perfect. An attachment that gets past the email filter can be stopped by application control. Malware that application control misses can be caught by EDR behavior rules. Data that malware reaches can still be useless to a thief if the disk is encrypted and the laptop is stolen. The goal is not one perfect wall but many walls, so the attacker has to beat every one."
      ]
    },
    {
      title: 'Antivirus: signatures and heuristics',
      body: [
        "Traditional <strong>antivirus (AV)</strong> scans files and compares them with a database of <strong>signatures</strong>, which are fingerprints of known malware. The simplest fingerprint is a <strong>hash</strong> of the malicious file. If the hash of a file on disk matches a known bad hash, the file is malware.",
        "Signatures have a built-in limit: they only catch what someone has already seen. A <strong>zero-day</strong> threat, one that is new and has no signature yet, passes straight through. Attackers also change one byte of their malware so the hash changes, and some malware rewrites itself on every copy (called <strong>polymorphic</strong> malware) to defeat signatures entirely.",
        "Modern antivirus adds <strong>heuristics</strong>: rules that score suspicious features, such as a document that contains a macro which downloads a program. This catches some new malware, at the cost of some false positives. Antivirus is still a useful layer. It cheaply removes the large amount of known, ordinary malware."
      ],
      keyTerms: [
        { term: 'Signature', definition: 'A pattern, such as a file hash or byte sequence, that identifies a known piece of malware.' },
        { term: 'Zero-day', definition: 'A vulnerability or threat that is being used before the vendor or security tools have a fix or a signature for it.' }
      ]
    },
    {
      title: 'EDR and XDR',
      figure: { id: 'w7-av-vs-edr', caption: 'Antivirus asks whether a file matches something known. EDR watches what programs do and can respond on its own.' },
      body: [
        "<strong>Endpoint detection and response (EDR)</strong> records what happens on the endpoint all the time: which processes start and what started them, which files are written, which network connections open, which registry keys change. This record is called <strong>telemetry</strong>.",
        "EDR looks for suspicious <strong>behavior</strong> rather than known files. Word starting PowerShell with a hidden, encoded command is suspicious no matter what the file's hash is. So is one program encrypting hundreds of files a second, or a program adding itself to the list of things that run at every logon.",
        "The 'response' part matters most. Depending on its policy, EDR can kill the process, <strong>quarantine</strong> the file, roll back changes, and <strong>isolate</strong> the endpoint from the network so it can only talk to the EDR console. Isolation stops malware from spreading while keeping the machine powered on for investigation. Well-known EDR products include CrowdStrike Falcon, SentinelOne (the product Cedar Creek uses), and Microsoft Defender for Endpoint.",
        "<strong>Extended detection and response (XDR)</strong> applies the same idea across more than endpoints, combining endpoint, email, identity, network, and cloud data in one platform. <strong>User and entity behavior analytics (UEBA)</strong> builds a baseline for each user and device and flags unusual behavior, such as an account that suddenly copies thousands of files."
      ],
      callout: { kind: 'cedar', title: 'Detect is not Protect', text: "Cedar Creek's EDR has two policies. Protect lets the EDR stop threats on its own. Detect only raises an alert. On November 30, Dee moved the Marketing PCs to Detect after the EDR quarantined the design team's font manager twice. The change was meant to be temporary. On Friday, December 18, the EDR on Laura Kim's laptop saw a document macro launch PowerShell and raised a HIGH alert. Under Detect, it did nothing else. The right fix would have been an exception for the font manager's file, not a whole group switched off." }
    },
    {
      title: 'Hardening and secure baselines',
      body: [
        "<strong>Hardening</strong> means reducing the ways a system can be attacked: removing software and services that are not needed, closing ports, disabling old protocols, changing default passwords, and turning on security features.",
        "A <strong>secure baseline</strong> is a written standard configuration for a type of system, such as 'every Windows 11 laptop'. The Center for Internet Security (CIS) publishes free <strong>CIS Benchmarks</strong>, detailed baselines for Windows, Linux, cloud platforms, and many products. Tools can scan systems against a baseline and report <strong>drift</strong>, any setting that has moved away from it. On Windows networks, <strong>Group Policy</strong> pushes baseline settings to every computer in the domain. On Linux, <strong>SELinux</strong> enforces strict rules about what each program may access.",
        "Other common endpoint controls include:"
      ],
      list: [
        "<strong>Host-based firewall</strong>: blocks unwanted connections to and from this one machine.",
        "<strong>Application allow list</strong>: only approved programs may run; everything else is blocked. Much stronger than a <strong>deny list</strong> (block known bad programs), which misses anything new.",
        "<strong>Full-disk encryption (FDE)</strong>: encrypts the whole drive, so a lost or stolen laptop does not expose its data.",
        "<strong>Secure boot and the TPM</strong>: check that the start-up software has not been tampered with, using a security chip on the motherboard."
      ]
    },
    {
      title: 'Hardening Cedar Creek, one endpoint type at a time',
      body: [
        "Hardening works best when you write one baseline per type of device rather than fixing machines one at a time. Cedar Creek has four main types, and each needs a different baseline.",
        "<strong>Office laptops and desktops</strong>: EDR in Protect on every one, full-disk encryption on laptops, Office macros blocked for documents that come from the internet, users without local administrator rights, and the host firewall on.",
        "<strong>Servers</strong>: only the roles each server needs, no web browsing from the server itself, admin sign-in only from IT-ADMIN-01, and file integrity monitoring on system files.",
        "<strong>Plant PCs such as PLANT-PC-07</strong>: an application allow list (only the HMI software runs), no internet access, and USB ports locked down. Availability matters most here, so changes are tested with Walt Henley's team first.",
        "<strong>Network devices and appliances</strong> such as FW-CORE, NVR-01, and BADGE-CTRL: default passwords changed, management interfaces reachable only from the management network, and firmware kept current. These devices are easy to forget because nobody sits in front of them."
      ]
    },
    {
      title: 'File integrity monitoring and data loss prevention',
      body: [
        "<strong>File integrity monitoring (FIM)</strong> records hashes of important files, such as system programs and configuration files, and alerts when one changes. On a server where a file should never change after installation, any change deserves a look.",
        "<strong>Data loss prevention (DLP)</strong> looks for sensitive data leaving where it belongs. Endpoint DLP can block a large copy of files labeled Confidential to a USB drive. Network DLP can block an email that contains Social Security numbers. DLP depends on the data being identified and labeled first, which connects back to classification in Week 3."
      ],
      callout: { kind: 'real', title: 'SolarWinds, 2020: a trusted, signed file', text: "In the SolarWinds attack, attackers inserted malicious code into updates for SolarWinds' Orion software. CISA's alert AA20-352A notes that the trojanized file was digitally signed by SolarWinds. Controls that trust a program because of who signed it trusted this one too. That is why defenders also watch behavior, such as a monitoring server suddenly contacting unfamiliar domains, and why you will hunt for these indicators in Blue Team phase 2." }
    },
    {
      title: 'Endpoints feed the SOC',
      body: [
        "Every endpoint control produces records: AV detections, EDR alerts, host firewall drops, FIM changes, DLP blocks. These should flow into the SIEM so they can be correlated with network and identity logs. An EDR alert on its own says 'something odd happened on this laptop'. Joined with the firewall log, it says 'and then that laptop started talking to a server on the internet every ten minutes'.",
        "The most common endpoint failure is not a missing product. It is a product with its protection turned down, its alerts unread, or its agent missing from some machines. Checking coverage (is the agent on every device and reporting?) and policy (is it set to block?) is routine work for an analyst."
      ],
      callout: { kind: 'exam', title: 'AV, EDR, or something else?', text: "'Matches known file hashes' is antivirus. 'Behavioral analysis, isolate the host, process tree' is EDR. 'Across endpoint, email, identity, and cloud' is XDR. 'Only approved applications can run' is an allow list. 'Alerts when a system file changes' is FIM. 'Blocks sensitive data from leaving' is DLP. 'Stolen laptop, data unreadable' is full-disk encryption." }
    }
  ],
  check: [
    { q: "Why can't traditional signature-based antivirus catch a brand-new (zero-day) piece of malware?", opts: ["Zero-day malware only infects servers", "There is no signature for it in the database yet", "Antivirus only scans email", "Zero-day malware is always encrypted"], ans: 1, why: "Signatures describe known malware. New malware has no signature until someone analyzes it." },
    { q: "Ransomware with no known signature starts encrypting hundreds of files per second on a laptop. Which tool is most likely to stop it?", opts: ["A stateless packet filter", "An EDR agent in a blocking (Protect) policy", "A screened subnet", "A honeynet"], ans: 1, why: "EDR recognizes the behavior, kills the process, and can isolate the laptop, even without a signature." },
    { q: "Cedar Creek wants Line 2's HMI PC to run only the HMI software and nothing else. Which control fits?", opts: ["Antivirus deny list", "Full-disk encryption", "Application allow list", "NetFlow"], ans: 2, why: "An allow list permits only approved programs and blocks everything else, which fits a single-purpose machine." },
    { q: "An alert fires because the hash of a system program on ENG-FS01 changed overnight, outside any patch window. Which control raised it?", opts: ["Data loss prevention", "UEBA", "Secure boot", "File integrity monitoring"], ans: 3, why: "File integrity monitoring records file hashes and alerts when a monitored file changes." },
    { q: "Dee switched the Marketing PCs from the EDR's Protect policy to Detect to stop one false positive. What would have been the better fix?", opts: ["Add a specific exception for the font manager and keep Protect on", "Uninstall the EDR from Marketing PCs", "Switch every department to Detect", "Turn off the alerts too"], ans: 0, why: "A narrow exception tunes out the false positive while keeping protection for everything else. Switching a whole group to Detect trades a false positive for possible false negatives." }
  ]
};

COURSE_LESSONS['7.5'] = {
  id: '7.5', week: 7, title: 'Patch management', mins: 15, module: 'Security+ SY0-701 objectives 2.3, 4.1, 4.3',
  intro: "Most successful attacks do not use secret, never-seen-before tricks. They use flaws that the vendor fixed weeks or months earlier, on systems where nobody installed the fix. Patching is the least exciting control in this course and one of the most effective. This lesson walks through the patch management process, how to decide what to patch first, what to do when you cannot patch, and two real breaches that came down to a missing update.",
  sections: [
    {
      title: 'What a patch is and why it is urgent',
      body: [
        "A <strong>patch</strong> is an update from a vendor that fixes a problem in software or firmware. Security patches fix <strong>vulnerabilities</strong>, weaknesses an attacker could exploit. <strong>Firmware</strong> is the software built into hardware, such as a firewall, a camera recorder, or a badge controller, and it needs patches too.",
        "The moment a vendor publishes a security patch, the clock starts. Attackers compare the patched and unpatched versions to work out exactly what was fixed, and working attack code often appears within days. A flaw that is publicly known and has a fix is sometimes called an <strong>n-day</strong> vulnerability, to separate it from a <strong>zero-day</strong>, which attackers use before any fix exists. Zero-days are dangerous but rare. Unpatched n-days are everywhere.",
        "Every vulnerability gets a <strong>CVE</strong> (Common Vulnerabilities and Exposures) identifier, such as CVE-2017-5638, so everyone can refer to the same flaw. The <strong>Common Vulnerability Scoring System (CVSS)</strong> gives it a severity score from 0 to 10: Low, Medium, High, or Critical. The U.S. National Vulnerability Database (NVD) at nvd.nist.gov lists each CVE with its score and links to vendor fixes."
      ]
    },
    {
      title: 'Kinds of updates, and who installs them',
      body: [
        "Vendors deliver fixes in different packages. A <strong>hotfix</strong> fixes one urgent problem. A <strong>cumulative update</strong> bundles every fix released so far, so installing the latest one brings a system fully up to date. <strong>Feature updates</strong> add new functions and change versions, and they are more likely to break things. <strong>Firmware updates</strong> replace the software inside a device and usually need a reboot of that device.",
        "Updates can be installed automatically or under central management. <strong>Automatic updates</strong> are simple and fast, which suits most office laptops: the fix lands within days without anyone remembering. <strong>Managed updates</strong> use a central tool to approve, schedule, and track patches, which suits servers and systems where an untested change could stop the business. A patch console reports which systems have which updates, so you can prove what is installed rather than hope.",
        "The risk is in the gaps between the two. A laptop that is off for a month, a server someone excluded 'just for this cycle', and every appliance whose firmware is patched by hand all fall behind quietly unless someone checks the report."
      ]
    },
    {
      title: 'The patch management cycle',
      figure: { id: 'w7-patch-cycle', caption: 'Patch management is a cycle, not a task. It starts with knowing what you own.' },
      body: [
        "<strong>Patch management</strong> is the repeatable process that makes sure fixes get installed. It runs as a cycle:"
      ],
      list: [
        "<strong>Inventory.</strong> List every system, its operating system, its software, and its owner. You cannot patch what you do not know you have. This is why you started an asset inventory in Week 1.",
        "<strong>Monitor.</strong> Watch for new fixes: vendor advisories, Microsoft's monthly release on the second Tuesday (Patch Tuesday), and CISA's Known Exploited Vulnerabilities (KEV) catalog, which lists flaws attackers are actively using.",
        "<strong>Evaluate and prioritize.</strong> Decide what matters most (next section).",
        "<strong>Test.</strong> Install the patch on a test system or a small pilot group first, to catch patches that break things. Have a <strong>rollback plan</strong>, such as a snapshot or backup, before you start.",
        "<strong>Deploy.</strong> Roll out in waves, in an approved maintenance window, through <strong>change management</strong> so the business knows what is changing and when.",
        "<strong>Verify and report.</strong> Rescan to confirm the fix is installed and the vulnerability is gone. Report the percentage of systems patched on time. Record any system that could not be patched as an exception, with an owner and a compensating control."
      ]
    },
    {
      title: 'What to patch first',
      body: [
        "There are always more patches than hours. Prioritize by asking four questions. How severe is it (the CVSS score)? Is it being exploited right now (is it in the KEV catalog)? Can an attacker reach it (is the system internet-facing)? How valuable is the system or data?",
        "An internet-facing system with a Critical, actively exploited flaw goes first, even if it is only one system. A Critical flaw on a laptop that is turned off in a drawer can wait until the morning.",
        "Many organizations write their priorities down as <strong>patch timelines</strong> (service-level agreements). The numbers below are a common example of such a policy, not a law or a fixed standard. Each company sets its own."
      ],
      table: {
        head: ['Severity (CVSS)', 'Example timeline', 'Faster if'],
        rows: [
          ['Critical (9.0-10.0)', '24 to 48 hours', 'Internet-facing or actively exploited'],
          ['High (7.0-8.9)', '7 days', 'Internet-facing or in the KEV catalog'],
          ['Medium (4.0-6.9)', '30 days', 'The system holds sensitive data'],
          ['Low (0.1-3.9)', 'Next regular cycle', '']
        ]
      },
      callout: { kind: 'cedar', title: 'Cedar Creek patches on a calendar, not on risk', text: "Cedar Creek patches Windows on Patch Tuesday plus 7 days, servers by hand on Saturdays, and firmware 'when we get to it'. That calendar treats every patch the same. In Lab 7.3 you will find that FW-CORE, the internet-facing firewall, has had a Critical fix for its VPN portal available since December 10 and nobody has scheduled it." }
    },
    {
      title: 'When you cannot patch',
      body: [
        "Sometimes a patch is not possible. The system is <strong>end of life (EOL)</strong> and the vendor no longer releases fixes. A medical or industrial vendor has not certified the newer version. A reboot would stop a production line that cannot stop. In those cases you use <strong>compensating controls</strong> to reduce the risk another way:"
      ],
      list: [
        "<strong>Isolate it.</strong> Put the system on its own network segment with firewall rules that allow only the connections it truly needs.",
        "<strong>Turn off what is vulnerable.</strong> If the flaw is in a service or old protocol the business does not use, disable it.",
        "<strong>Virtual patching.</strong> Add an IPS or WAF rule that blocks attacks against that specific flaw in front of the system.",
        "<strong>Lock it down.</strong> Use an application allow list and remove internet access.",
        "<strong>Plan the replacement.</strong> Record the exception, name an owner, set a review date, and budget for the upgrade. An exception is a decision to accept risk for a time, not forever."
      ],
      callout: { kind: 'real', title: 'WannaCry, 2017: two months too late', text: "In March 2017 Microsoft released security update MS17-010, which fixed a flaw in the old SMBv1 file-sharing protocol (CVE-2017-0144). An exploit for that flaw, known as EternalBlue, was leaked publicly in April. In May 2017 the WannaCry ransomware used it to spread from computer to computer on its own, encrypting machines around the world. Systems with MS17-010 installed were not vulnerable to that spread. Disabling SMBv1, which almost nobody needed, was a compensating control that also worked." }
    },
    {
      title: 'Equifax: the patch that never arrived',
      figure: { id: 'w7-patch-timelines', caption: 'Two 2017 timelines. In both, the fix existed before the damage began.' },
      body: [
        "In early March 2017, the Apache Software Foundation fixed a critical flaw in Apache Struts, a framework for building web applications (CVE-2017-5638). The flaw let an attacker run commands on the server by sending a specially crafted request.",
        "According to the GAO report on the breach, Equifax received a notice about the flaw from the U.S. Computer Emergency Readiness Team in March and circulated it to its system administrators. The recipient list was out of date, so the notice did not reach the people responsible for patching the online dispute portal. A scan run about a week later did not detect the vulnerable software either.",
        "Beginning May 13, 2017, attackers used the flaw to break into the dispute portal. They found unencrypted credentials, used them to reach 48 other databases, and accessed personal data of at least 145.5 million people. Equifax detected the intrusion on July 29, 2017 and announced the breach on September 7, 2017.",
        "Every step of the patch cycle failed in some way: the inventory did not tie the portal to an owner, monitoring did not reach the right people, and verification did not catch the miss. You will dig into the details in Project 7."
      ],
      callout: { kind: 'exam', title: 'Patch management on the exam', text: "Expect scenario questions. 'Vendor no longer supports it' means EOL and a compensating control (isolate it). 'Patch broke the application in production' means it should have been tested first. 'How do we know the patch worked?' means rescan to verify. 'Which patch first?' means look at severity and exposure together: internet-facing plus Critical wins. A documented, approved decision not to patch is an exception (risk acceptance)." }
    },
    {
      title: 'Patching your own systems',
      body: [
        "On Linux systems like Kali, the package manager is the patch tool. <code>sudo apt update</code> downloads the latest list of available packages. <code>apt list --upgradable</code> shows what has a newer version. <code>sudo apt full-upgrade</code> installs them. The file <code>/var/log/apt/history.log</code> records every update run, which is the evidence an auditor would ask for.",
        "Before a big update, take a snapshot of your virtual machine. That is your rollback plan. You will do all of this in Lab 7.3."
      ]
    }
  ],
  check: [
    { q: "What is the first step of patch management, without which the rest cannot work?", opts: ["Deploying patches in waves", "Rescanning after deployment", "Keeping an inventory of systems and software", "Writing a rollback plan"], ans: 2, why: "You cannot patch what you do not know you have. Inventory comes first." },
    { q: "Two Critical patches arrive. One fixes the internet-facing VPN portal on the firewall, and the flaw is actively exploited. The other fixes a desktop app on five office PCs. What should go first?", opts: ["The VPN portal, because it is internet-facing and actively exploited", "The desktop app, because more machines are affected", "Neither until next month's cycle", "Whichever was released first"], ans: 0, why: "Severity, exploitation, and exposure together set priority. An internet-facing, actively exploited Critical flaw goes first." },
    { q: "ENG-APP02 runs Windows Server 2012 R2, which no longer gets security updates, and cannot be upgraded yet. What is the best immediate step?", opts: ["Ignore it until it can be replaced", "Isolate it on its own segment and allow only the connections it needs", "Turn off its antivirus to improve performance", "Put it in the screened subnet"], ans: 1, why: "When a patch is impossible, compensating controls such as isolation reduce the risk until the system is replaced." },
    { q: "A patch is installed on all servers at once and breaks the payroll application. Which step of the cycle was skipped?", opts: ["Monitoring", "Inventory", "Reporting", "Testing"], ans: 3, why: "Testing on a pilot group first catches patches that break applications." },
    { q: "WannaCry spread in May 2017 using the EternalBlue exploit. Which statement is accurate?", opts: ["Microsoft had released MS17-010 two months earlier", "No patch existed until after WannaCry", "WannaCry only infected Linux servers", "It used a flaw in Apache Struts"], ans: 0, why: "Microsoft released MS17-010 in March 2017. Unpatched systems were the ones WannaCry could spread to." }
  ]
};

COURSE_QUIZ.w7 = {
  title: 'Week 7 Quiz',
  pass: 80,
  questions: [
    { lesson: '7.1', q: "An analyst reviews firewall logs and sees the firewall tracking the state of each TCP connection and dropping packets that do not belong to an established session. What type of firewall is this?", opts: ["Stateless packet filter", "Next-generation firewall", "Stateful inspection firewall", "Application proxy"], ans: 2, why: "Tracking connection state and dropping packets outside an established session is stateful inspection." },
    { lesson: '7.1', q: "A company places its web servers in a zone the internet can reach, separated from the HR and finance systems by firewalls. What is this zone called?", opts: ["VLAN", "Zero trust network", "Screened subnet (DMZ)", "Air gap"], ans: 2, why: "A screened subnet (DMZ) holds public-facing servers between firewalls, isolated from the internal network." },
    { lesson: '7.1', q: "FW-CORE's outbound rule list contains one allow rule: any office PC to anything on the internet. An infected laptop sends data to an unknown server on port 8443 every 10 minutes. What should Cedar Creek add?", opts: ["Egress filtering that allows only the ports and destinations the business needs", "A second inbound VPN rule", "A honeypot in the screened subnet", "Fail-open mode on FW-CORE"], ans: 0, why: "Default-deny outbound (egress) rules would have denied, and logged, the laptop's connection to an unknown server on a non-standard port." },
    { lesson: '7.1', q: "A network engineer creates separate VLANs for HR, Finance, and Engineering so that a breach in one department cannot spread directly to the others. What security principle does this put in place?", opts: ["Defense in depth", "Network segmentation", "Zero trust", "Least privilege"], ans: 1, why: "Dividing the network into separate zones that traffic can only cross through rules is network segmentation. It limits lateral movement." },
    { lesson: '7.2', q: "A security team wants to detect malicious traffic and block it automatically, not just alert. Which technology meets this requirement?", opts: ["IDS", "IPS", "SIEM", "NetFlow collector"], ans: 1, why: "An IPS sits inline and can drop malicious traffic. An IDS only alerts." },
    { lesson: '7.2', q: "An IDS detects a known SQL injection payload and fires an alert, but the query still reaches the database and data is stolen. What does this illustrate?", opts: ["The IDS signature database was outdated", "An IDS detects but does not block; an IPS or WAF was needed", "The firewall was stateless", "The database needed a honeytoken"], ans: 1, why: "The IDS worked as designed: it alerted. Blocking requires an inline control such as an IPS or WAF." },
    { lesson: '7.2', q: "Because a certificate on Equifax's traffic-inspection device had expired, encrypted traffic passed through uninspected during the whole breach. For the attackers' traffic, what kind of detection result did this produce?", opts: ["True positive", "False positive", "True negative", "False negative"], ans: 3, why: "A real attack went through without an alert, which is a false negative." },
    { lesson: '7.2', q: "A team deploys a server on the internal network that has no business purpose. Any connection to it is flagged as suspicious. What is this?", opts: ["Bastion host", "Proxy server", "Honeypot", "Jump server"], ans: 2, why: "A honeypot is a decoy with no legitimate use, so any connection to it is suspicious." },
    { lesson: '7.3', q: "A SOC needs to collect logs from 200 servers, firewalls, and endpoints, correlate the events, and raise alerts when attack patterns appear. Which technology is designed for this?", opts: ["EDR", "IPS", "SIEM", "NAC"], ans: 2, why: "A SIEM aggregates and correlates logs from many sources and raises alerts." },
    { lesson: '7.3', q: "Within 4 minutes, one internal PC fails to sign in to 30 different accounts, once each, and then signs in successfully as svc-plotter. What is the best description?", opts: ["A user who forgot one password", "Password spraying followed by a successful compromise", "A port scan", "Normal service account behavior"], ans: 1, why: "One attempt against many accounts from one source avoids lockouts. That is password spraying, and the success means an account is now compromised." },
    { lesson: '7.3', q: "Firewall, DNS, and EDR logs all show the same events, but in a different order in each. What should the SIEM team check first?", opts: ["Disk space on the SIEM", "Clock synchronization (NTP) on every log source", "The CVSS score of each event", "Whether the firewall is stateful"], ans: 1, why: "Correlation depends on matching time stamps. Clocks that drift put events in the wrong order." },
    { lesson: '7.3', q: "Splunk, Microsoft Sentinel, and Elastic are examples of what?", opts: ["EDR agents", "SIEM platforms", "Web application firewalls", "Vulnerability scanners"], ans: 1, why: "All three are platforms used as a SIEM." },
    { lesson: '7.4', q: "An analyst needs to detect and respond to malware that evades traditional antivirus. The tool must provide behavioral analysis and the ability to isolate a host. Which technology fits best?", opts: ["IDS", "SIEM", "Firewall", "EDR"], ans: 3, why: "EDR watches endpoint behavior and can isolate a compromised host." },
    { lesson: '7.4', q: "Traditional antivirus cannot detect zero-day malware. Why?", opts: ["Zero-day malware has no signature in the database yet", "Antivirus only works on servers", "Zero-day malware cannot be stored on disk", "Antivirus is always set to Detect"], ans: 0, why: "Signature-based detection only recognizes malware someone has already identified." },
    { lesson: '7.4', q: "A stolen Cedar Creek laptop is later found with its drive removed, but the data on the drive could not be read. Which control made that possible?", opts: ["Application allow list", "Full-disk encryption", "Host-based firewall", "File integrity monitoring"], ans: 1, why: "Full-disk encryption makes the drive unreadable without the key, so a stolen drive does not expose data." },
    { lesson: '7.4', q: "Which statement best describes a security baseline?", opts: ["The maximum privileges a user may have", "A standard secure configuration that systems of one type must meet", "A network performance benchmark", "The first scan of a new network"], ans: 1, why: "A baseline sets the minimum secure configuration, for example from a CIS Benchmark. Moving away from it is drift." },
    { lesson: '7.5', q: "A scanner reports a Critical (CVSS 9.8) remote code execution flaw on the company's public web server. Under the example patch timelines in Lesson 7.5, when should it be patched?", opts: ["Within 30 days", "Within 7 days", "Within 24 to 48 hours", "At the next quarterly window"], ans: 2, why: "Critical and internet-facing goes first. The example policy gives Critical flaws 24 to 48 hours." },
    { lesson: '7.5', q: "GAO found that Equifax's notice about the Apache Struts flaw never reached the administrators responsible for the dispute portal. Which part of patch management failed?", opts: ["Testing", "Knowing which systems ran the software and who owned them (inventory and monitoring)", "Rollback planning", "Disk encryption"], ans: 1, why: "The fix existed. The process that should have tied the vulnerable software to its owner and delivered the notice did not work." },
    { lesson: '7.5', q: "A vendor will not certify the Line 2 HMI software on a newer operating system, so PLANT-PC-07 stays on an unsupported version. What is the best response?", opts: ["Accept the risk permanently with no further action", "Apply compensating controls such as isolation and an allow list, and record a time-limited exception", "Disconnect Line 2 from the plant", "Install the unsupported upgrade anyway"], ans: 1, why: "When patching is not possible, compensating controls reduce the risk, and a documented exception with an owner and review date keeps it visible." },
    { lesson: '7.5', q: "A zero-day vulnerability is one that:", opts: ["Was patched today", "Has a CVSS score of zero", "Is exploited before a patch or signature exists", "Only affects firmware"], ans: 2, why: "A zero-day is used by attackers before the vendor has a fix. Behavioral detection is the main defense until a patch arrives." }
  ]
};
