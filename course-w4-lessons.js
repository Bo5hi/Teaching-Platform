// Week 4 lessons + quiz. Shapes: docs/COURSE_V2.md
// Absorbs: legacy week 2 (Network Fundamentals), Academy modules Network Fundamentals and Network Reconnaissance (Nmap),
// CertMaster Modules 5, 6, 9 and 11 (original wording, aligned to SY0-701 objectives).
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['4.1'] = {
  id: '4.1', week: 4, title: 'How networks carry data', mins: 15, module: 'CertMaster Module 5 (network refresher)',
  intro: "On your first-day walk you wrote down that the plant and office networks can reach each other freely. This week you find out what that really means and how to fix it. First you need the basics every network conversation is built on: layers, addresses, ports, and the TCP handshake. Every firewall rule, packet capture, and scan you read this week is written in these terms.",
  sections: [
    {
      title: 'Layers: the OSI model',
      figure: { id: 'osi-tcpip', caption: 'The seven OSI layers beside the four TCP/IP layers, with the protocols you will see in this week\'s labs.' },
      body: [
        "Sending data across a network involves many separate jobs: turning bits into signals, finding the next device, finding the right computer, delivering to the right program, and formatting the data. The <strong>OSI model</strong> (Open Systems Interconnection) splits those jobs into seven layers. Each layer does one job and hands its work to the layer above or below it.",
        "Security people use the model as a shared language. When someone says 'that firewall only works at Layer 4', everyone knows it checks addresses and ports but not what is inside the web request. Knowing the layer an attack targets tells you which defense applies.",
        "To remember the order from Layer 7 down, use <strong>All People Seem To Need Data Processing</strong>. From Layer 1 up: <strong>Please Do Not Throw Sausage Pizza Away</strong>."
      ],
      table: {
        head: ['Layer', 'Name', 'Job', 'Examples', 'Attacks aimed here'],
        rows: [
          ['7', 'Application', 'Services people and programs use', 'HTTP, DNS, SMTP, SSH, FTP', 'SQL injection, phishing, DNS spoofing'],
          ['6', 'Presentation', 'Formatting, encoding, encryption', 'TLS, ASCII, JPEG', 'SSL stripping (forcing HTTPS down to HTTP)'],
          ['5', 'Session', 'Opening and keeping conversations', 'RPC, NetBIOS', 'Session hijacking'],
          ['4', 'Transport', 'Delivery to the right program (ports)', 'TCP, UDP', 'SYN flood, port scanning'],
          ['3', 'Network', 'Logical addresses and routing', 'IP, ICMP, routers', 'IP spoofing, ICMP flood'],
          ['2', 'Data link', 'Delivery on the local network (MAC)', 'Ethernet, Wi-Fi, ARP, switches', 'ARP poisoning, MAC spoofing'],
          ['1', 'Physical', 'Signals on cable, fiber, or radio', 'Cables, hubs, radio', 'Wiretaps, jamming']
        ]
      }
    },
    {
      title: 'The TCP/IP model and encapsulation',
      body: [
        "The internet actually runs on the <strong>TCP/IP model</strong>, which has four layers: Link (OSI 1-2), Internet (OSI 3), Transport (OSI 4), and Application (OSI 5-7). Exam questions and tools still use OSI layer numbers, so learn both.",
        "When a program sends data, each layer wraps it with its own header. This is <strong>encapsulation</strong>. The application data gets a TCP header (now called a segment), then an IP header (a packet), then an Ethernet header (a frame). The receiver strips the headers off in reverse order, which is <strong>decapsulation</strong>. In Lab 4.1 you will see these wrappers stacked in Wireshark.",
        "Follow one real request down the stack. Greg Palmer opens Outlook on FIN-LT-09. First the laptop asks DC01 for the address of outlook.office365.com (DNS, Layer 7, carried in UDP). It then opens a TCP connection to port 443 (Layer 4). TLS encrypts the request (Layer 6). The IP header carries the laptop's address, 10.20.6.41, and the server's public address (Layer 3). An Ethernet frame carries the packet to FW-CORE's MAC address, the first hop (Layer 2), as electrical signals on the office cable (Layer 1). FW-CORE then swaps the private source address for 198.51.100.24 and sends the packet on toward the internet. Every one of those steps is a place where a control can act, and a place where an attacker can look."
      ],
      keyTerms: [
        { term: 'Encapsulation', definition: 'Wrapping data in a header at each layer on the way down the stack.' },
        { term: 'Frame / packet / segment', definition: 'The unit of data at Layer 2, Layer 3, and Layer 4 (a UDP unit is called a datagram).' }
      ]
    },
    {
      title: 'Addresses: MAC, IP, and subnets',
      body: [
        "A <strong>MAC address</strong> (media access control) is a 48-bit hardware address written like 3c:52:82:07:2a:11. It is used only on the local network. Switches forward frames by MAC address.",
        "An <strong>IP address</strong> is a logical address used to route between networks. An IPv4 address is 32 bits written as four numbers, such as 10.40.2.57. IPv6 uses 128-bit addresses written in hexadecimal. Three IPv4 ranges are <strong>private</strong> and never route on the internet: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.",
        "The number after the slash is <strong>CIDR</strong> notation (classless inter-domain routing). It says how many leading bits name the network. In 10.40.0.0/16, the first 16 bits (10.40) name the network and the remaining 16 bits number the hosts, about 65,000 of them. A /24 such as 10.40.2.0/24 leaves 8 bits, which is 254 usable hosts. The older way to write /24 is the <strong>subnet mask</strong> 255.255.255.0.",
        "<strong>NAT</strong> (network address translation) lets many private addresses share one public address. Every Cedar Creek device reaches the internet as 198.51.100.24. NAT hides internal addresses, but it is not a firewall: it does not decide what is allowed.",
        "IPv6 has so many addresses that NAT is rarely needed, so devices may be directly reachable unless a firewall blocks them. A network that 'does not use IPv6' should still check whether devices have it turned on, because traffic on a protocol nobody watches is traffic nobody filters."
      ],
      table: {
        head: ['Cedar Creek network', 'Range', 'What is on it'],
        rows: [
          ['Office', '10.20.0.0/16', 'Office PCs and laptops, and FS-HR01 on the HR subnet'],
          ['Servers', '10.10.0.0/16 and 10.30.0.0/16', 'DC01 and backups; ENG-FS01 and ENG-APP02'],
          ['Plant', '10.40.0.0/16', 'HMIs, PLCs, CNC machines, printers, CC-PLANT Wi-Fi clients'],
          ['Management', '10.99.0.0/24', 'The firewall, switches, IT-ADMIN-01, camera and badge systems']
        ]
      },
      callout: { kind: 'cedar', title: 'Four networks, one gatekeeper', text: "Every one of these networks connects through FW-CORE, which routes traffic between them. That is good news: one device decides what crosses from plant to office. It is also the problem. In Lab 4.2 you will find that its rules let almost everything cross." }
    },
    {
      title: 'The helper protocols: ARP, DHCP, DNS, and ICMP',
      body: [
        "<strong>ARP</strong> (Address Resolution Protocol) finds the MAC address that goes with an IP address on the local network. A computer broadcasts 'Who has 10.40.2.10?' and the owner replies with its MAC. ARP has no authentication, so an attacker can send false replies claiming to be the gateway. Traffic then flows through the attacker's machine. This is <strong>ARP poisoning</strong>, an on-path (man-in-the-middle) attack at Layer 2. PBQ Lab 5 has you spot it in Wireshark: two different MAC addresses claiming the same IP.",
        "<strong>DHCP</strong> (Dynamic Host Configuration Protocol) hands out IP addresses, the gateway, and DNS server settings automatically. A rogue DHCP server can hand out a fake gateway. <strong>DNS</strong> (Domain Name System) turns names like eng-fs01.cedarcreek.local into IP addresses. <strong>ICMP</strong> (Internet Control Message Protocol) carries error and test messages; ping uses ICMP echo request and echo reply."
      ],
      callout: { kind: 'exam', title: 'Two MACs, one IP', text: "If a question shows two different MAC addresses answering for the same IP address, especially the default gateway, the answer is ARP poisoning (an on-path attack). Defenses include dynamic ARP inspection on switches and encrypting traffic so an on-path attacker cannot read it." }
    },
    {
      title: 'TCP, UDP, and ports',
      figure: { id: 'tcp-handshake', caption: 'TCP opens every connection with a three-way handshake. UDP just sends.' },
      body: [
        "<strong>TCP</strong> (Transmission Control Protocol) is connection-oriented. Before any data moves, the two sides perform a <strong>three-way handshake</strong>: the client sends a SYN (synchronize), the server answers SYN-ACK, and the client sends ACK (acknowledge). TCP then numbers every byte, resends anything lost, and closes with FIN messages. Web, email, file sharing, and remote logins use TCP.",
        "<strong>UDP</strong> (User Datagram Protocol) is connectionless. It sends each datagram and does not check that it arrived. That makes it fast and light, which suits DNS lookups, voice, video, and time synchronization.",
        "A <strong>port</strong> is a number from 0 to 65,535 that identifies a program on a host. Ports 0-1023 are the <strong>well-known ports</strong> assigned to common services, such as 443 for HTTPS. Clients use a temporary high-numbered <strong>ephemeral port</strong> for their side of a conversation. An IP address plus a port is called a <strong>socket</strong>, for example 10.20.6.15:445."
      ],
      callout: { kind: 'real', title: 'WannaCry and port 445', text: "In May 2017 the WannaCry ransomware spread on its own from computer to computer through SMB, Windows file sharing on TCP port 445, using a flaw nicknamed EternalBlue. Microsoft had released a patch two months earlier. Hundreds of thousands of unpatched computers worldwide were encrypted, and hospitals in the UK's National Health Service had to cancel appointments. Networks where any computer could reach any other on port 445 suffered most." }
    },
    {
      title: 'Switches, routers, and which way traffic flows',
      body: [
        "A <strong>switch</strong> connects devices on the same local network and forwards frames by MAC address (Layer 2). A <strong>router</strong> connects different networks and forwards packets by IP address (Layer 3). An old <strong>hub</strong> copied every frame to every port, which made sniffing easy; switches replaced hubs.",
        "Traffic in and out of the organization, through the internet edge, is called <strong>north-south</strong> traffic. Traffic between internal systems, such as a plant PC talking to an HR server, is <strong>east-west</strong> traffic. Many companies guard north-south traffic and ignore east-west. Attackers who get one foothold rely on that, because east-west movement is how a single infected laptop becomes a company-wide incident."
      ],
      keyTerms: [
        { term: 'Broadcast domain', definition: 'The set of devices that receive each other\'s broadcasts, such as ARP requests. A router or VLAN boundary ends it.' },
        { term: 'Lateral movement', definition: 'An attacker moving east-west from one compromised system to others inside the network.' }
      ]
    }
  ],
  check: [
    { q: "Which OSI layer uses IP addresses to route packets between networks?", opts: ["Layer 2, Data link", "Layer 3, Network", "Layer 4, Transport", "Layer 7, Application"], ans: 1, why: "Layer 3 handles logical (IP) addressing and routing. Layer 2 uses MAC addresses on the local network." },
    { q: "How many usable host addresses does a /24 network such as 10.40.2.0/24 have?", opts: ["16", "254", "1,024", "65,534"], ans: 1, why: "A /24 leaves 8 bits for hosts: 256 addresses minus the network and broadcast addresses, so 254 usable hosts." },
    { q: "Wireshark shows two different MAC addresses replying that they own 10.10.5.1, the default gateway. What is most likely happening?", opts: ["ARP poisoning (an on-path attack)", "A DHCP lease renewal", "A SYN flood", "DNS caching"], ans: 0, why: "Duplicate ARP replies for the gateway's IP mean someone is claiming to be the gateway so traffic flows through them." },
    { q: "Which is the correct order of the TCP three-way handshake?", opts: ["HELLO, ACK, DATA", "ACK, SYN, FIN", "SYN, ACK, SYN-ACK", "SYN, SYN-ACK, ACK"], ans: 3, why: "The client sends SYN, the server replies SYN-ACK, and the client confirms with ACK." },
    { q: "A video call app values speed over guaranteed delivery. Which transport protocol fits best?", opts: ["UDP", "TCP", "ICMP", "ARP"], ans: 0, why: "UDP is connectionless and has no retransmission delay, which suits real-time voice and video." }
  ]
};

COURSE_LESSONS['4.2'] = {
  id: '4.2', week: 4, title: 'Ports, protocols, and secure replacements', mins: 15, module: 'CertMaster Module 11',
  intro: "In Lab 4.1 you read an FTP password, a Telnet login, and a customer's CNC program straight out of a packet capture. None of that took hacking skill. It only took old protocols that send everything in cleartext. This lesson gives you the ports every analyst must know and the secure protocol that replaces each risky one. It also covers the two services attackers abuse most: email and DNS.",
  sections: [
    {
      title: 'Why ports matter to a defender',
      body: [
        "Firewall rules, scan results, and logs all speak in port numbers. When a scan says 23/tcp open, you need to know at once that it is Telnet and that it sends passwords in cleartext. When a firewall rule allows 3389 from the internet, you need to know that is Remote Desktop.",
        "A port number is a convention, not a guarantee. A service can listen on any port, and attackers often hide traffic on a port that looks harmless, such as 443. That is why Nmap's version detection talks to the service instead of trusting the number.",
        "Ports also explain firewall logs. A connection from a plant PC to FS-HR01 shows a high, random source port, such as 52100, and the destination port 445. The destination port tells you the service being reached; the source port is just the client's temporary ephemeral port and rarely matters."
      ]
    },
    {
      title: 'Ports you must know',
      body: [
        "Learn this table well. The Port Sorter practice set drills it, and the exam expects it."
      ],
      callout: { kind: 'exam', title: 'Patterns that help you remember', text: "Many secure versions have their own port: HTTP 80 becomes HTTPS 443, LDAP 389 becomes LDAPS 636, POP3 110 becomes POP3S 995, and IMAP 143 becomes IMAPS 993. Everything in the SSH family (SSH, SFTP, SCP) shares port 22. SNMP keeps 161 and 162 in every version, so the port alone cannot tell you whether it is SNMPv3." },
      table: {
        head: ['Port', 'Protocol', 'What it does', 'Encrypted?'],
        rows: [
          ['20, 21 TCP', 'FTP', 'File transfer (21 commands, 20 or a high port for data)', 'No'],
          ['22 TCP', 'SSH, SFTP, SCP', 'Secure remote shell and file transfer', 'Yes'],
          ['23 TCP', 'Telnet', 'Remote shell', 'No'],
          ['25 TCP', 'SMTP', 'Mail between servers', 'No (TLS can be added)'],
          ['53 UDP/TCP', 'DNS', 'Name lookups', 'No'],
          ['67, 68 UDP', 'DHCP', 'Automatic addressing', 'No'],
          ['80 TCP', 'HTTP', 'Web', 'No'],
          ['110 / 995 TCP', 'POP3 / POP3S', 'Mail download', 'No / Yes'],
          ['123 UDP', 'NTP', 'Time synchronization', 'No'],
          ['143 / 993 TCP', 'IMAP / IMAPS', 'Mail access', 'No / Yes'],
          ['161, 162 UDP', 'SNMP', 'Device monitoring and alerts (traps)', 'Only SNMPv3'],
          ['389 / 636 TCP', 'LDAP / LDAPS', 'Directory lookups', 'No / Yes'],
          ['443 TCP', 'HTTPS', 'Web over TLS', 'Yes'],
          ['445 TCP', 'SMB', 'Windows file sharing', 'SMB 3 can encrypt'],
          ['465, 587 TCP', 'SMTPS, mail submission', 'Clients sending mail', 'Yes (TLS)'],
          ['514 UDP', 'Syslog', 'Sending logs', 'No'],
          ['1812, 1813 UDP', 'RADIUS', 'Network logins and accounting', 'Passwords hidden only'],
          ['3389 TCP', 'RDP', 'Remote Desktop', 'Yes'],
          ['502 TCP', 'Modbus/TCP', 'Industrial control (Cedar Creek plant)', 'No, and no login']
        ]
      }
    },
    {
      title: 'Swap insecure for secure',
      figure: { id: 'secure-protocols', caption: 'Each cleartext protocol on the left has a secure replacement on the right.' },
      body: [
        "Most secure replacements add one of two technologies. <strong>TLS</strong> (Transport Layer Security) wraps an existing protocol in encryption, which is how HTTP becomes HTTPS and LDAP becomes LDAPS. Use TLS 1.2 or 1.3. SSL and TLS 1.0 and 1.1 are deprecated: they have known weaknesses and should be turned off. <strong>SSH</strong> (Secure Shell) encrypts remote logins and carries secure file transfer.",
        "Two names are easy to mix up. <strong>SFTP</strong> is file transfer inside SSH, on port 22. <strong>FTPS</strong> is the old FTP protocol with TLS added. Both are secure; plain FTP is not.",
        "<strong>SNMP</strong> (Simple Network Management Protocol) lets a monitor read device status. Versions 1 and 2c use a shared 'community string' sent in cleartext, often left as public. SNMPv3 adds real user authentication and encryption.",
        "<strong>STARTTLS</strong> upgrades a cleartext connection to TLS after it starts, which is how mail servers protect port 25 and LDAP servers protect port 389."
      ],
      callout: { kind: 'cedar', title: 'What crosses the plant network', text: "ENG-FS01 sends CNC programs to LINE2-CNC03 over FTP, engineers check CNC03 over Telnet, and the HVAC vendor logs in to HVAC-CTRL over plain HTTP. Each login you read in Lab 4.1 needs a secure replacement: SFTP, SSH, and HTTPS. When a machine cannot be upgraded, the compensating control is to isolate it so only one approved system can reach it." }
    },
    {
      title: 'What TLS actually gives you',
      body: [
        "TLS provides three things at once. <strong>Confidentiality:</strong> the traffic is encrypted, so a sniffer sees only scrambled bytes. <strong>Integrity:</strong> each record carries a check, so any change in transit is detected. <strong>Server authentication:</strong> the server proves its identity with a certificate signed by a trusted certificate authority, which you studied in Week 2. That last part is what stops an on-path attacker from simply pretending to be the server.",
        "TLS does not make a server safe. A web application with a SQL injection flaw is just as vulnerable over HTTPS, and a phishing site can have a perfectly valid certificate. TLS protects the conversation, not the people or programs at either end."
      ]
    },
    {
      title: 'Finding insecure protocols in your own network',
      body: [
        "You will not find cleartext protocols by asking people; most do not know what their devices use. Look in three places instead:"
      ],
      list: [
        "<strong>Scans:</strong> open ports 21, 23, 80, 110, 143, 161, and 389 point to cleartext services. Lab 4.3 finds Telnet and FTP on the CNC machines this way.",
        "<strong>Packet captures:</strong> a Wireshark display filter such as <code>ftp || telnet || http</code> shows them in use, along with any passwords they carry.",
        "<strong>Firewall rules:</strong> any rule that names ftp, telnet, http, or snmp is a rule that lets cleartext cross a boundary."
      ],
      keyTerms: [
        { term: 'Cleartext', definition: 'Data sent without encryption, readable by anyone who captures it. Also called plaintext.' },
        { term: 'Downgrade attack', definition: 'Forcing a connection to use an older, weaker protocol version or no encryption at all, such as SSL stripping.' }
      ]
    },
    {
      title: 'Default passwords and cleartext logins',
      body: [
        "Cleartext protocols become far more dangerous when the password is a factory default. Attackers keep lists of default logins for routers, cameras, printers, and industrial devices, and they try them automatically. Changing defaults is one of the cheapest controls there is, and PBQ Lab 8 has you do it on a pfSense firewall."
      ],
      callout: { kind: 'real', title: 'Mirai, 2016', text: "The Mirai malware scanned the internet for devices with Telnet open, such as cameras and video recorders, and tried a short list of factory-default usernames and passwords. It took over huge numbers of them and used them as a botnet. In October 2016 a Mirai attack flooded Dyn, a major DNS provider, and many well-known websites became hard to reach for hours. Telnet plus default passwords was the whole way in." }
    },
    {
      title: 'Securing email: SPF, DKIM, and DMARC',
      body: [
        "Email was designed without proof of who sent a message, which is why business email compromise works. Three DNS-based controls let a domain prove its mail is real.",
        "<strong>SPF</strong> (Sender Policy Framework) is a DNS record listing the servers allowed to send mail for the domain. <strong>DKIM</strong> (DomainKeys Identified Mail) adds a digital signature to each message; the receiver checks it against a public key in DNS. <strong>DMARC</strong> (Domain-based Message Authentication, Reporting, and Conformance) tells receivers what to do when SPF or DKIM fails (nothing, quarantine, or reject) and sends the domain owner reports.",
        "A <strong>secure email gateway</strong> filters incoming mail for spam, malware, and phishing before it reaches inboxes. S/MIME encrypts and signs individual messages using certificates."
      ],
      callout: { kind: 'cedar', title: 'What DMARC would and would not have stopped', text: "SPF, DKIM, and DMARC on cedarcreek-ind.com stop criminals from forging mail that claims to come from cedarcreek-ind.com itself. They do nothing about the lookalike domain cedarcreek-lnd.com used against Amanda Singh, because that domain belongs to the attacker and can pass its own checks. That threat needs user training, a gateway that flags lookalike and newly registered domains, and a callback rule for payment changes." }
    },
    {
      title: 'DNS security and DNS filtering',
      body: [
        "Ordinary DNS is unauthenticated and unencrypted. In DNS spoofing or cache poisoning, an attacker plants a false answer so a name points to the attacker's server. <strong>DNSSEC</strong> (DNS Security Extensions) signs DNS records so a resolver can check they are genuine. DNSSEC protects integrity, not confidentiality: anyone can still read the lookups. DNS over HTTPS (DoH) and DNS over TLS (DoT) encrypt the lookups themselves.",
        "<strong>DNS filtering</strong> refuses to resolve domains known to host malware or phishing, which blocks a bad link before the connection is ever made."
      ],
      callout: { kind: 'exam', title: 'Match the protocol to the problem', text: "Need to stop cleartext remote logins: SSH. Secure web: HTTPS on 443. Secure directory queries: LDAPS on 636. Secure device monitoring: SNMPv3. Secure file transfer: SFTP or FTPS. Proof that DNS answers are genuine: DNSSEC. Stop others forging your email domain: SPF, DKIM, and DMARC together." }
    }
  ],
  check: [
    { q: "A scan shows 23/tcp open on a CNC machine. What is the main risk?", opts: ["It runs a web server", "It is a DNS server", "Telnet sends logins and commands in cleartext", "It uses encrypted file sharing"], ans: 2, why: "Port 23 is Telnet, which sends everything, including passwords, unencrypted." },
    { q: "Which protocol and port should replace LDAP queries on 389 that carry passwords?", opts: ["SMB on 445", "SNMP on 161", "SMTP on 25", "LDAPS on 636"], ans: 3, why: "LDAPS wraps LDAP in TLS, normally on TCP 636." },
    { q: "A network monitor uses SNMP with the community string public. What should you recommend?", opts: ["SNMPv3 with authentication and encryption", "SNMPv2c with a longer community string", "SNMPv1", "Telnet for monitoring"], ans: 0, why: "Only SNMPv3 adds user authentication and encryption; v1 and v2c send the community string in cleartext." },
    { q: "Which control lets a receiving mail server know what to do when a message claiming to be from your domain fails SPF and DKIM?", opts: ["DNSSEC", "S/MIME", "DMARC", "STARTTLS"], ans: 2, why: "DMARC publishes the policy (none, quarantine, reject) and asks for reports." },
    { q: "What does DNSSEC protect?", opts: ["The confidentiality of DNS lookups", "VPN tunnels", "Email attachments", "The integrity and authenticity of DNS answers"], ans: 3, why: "DNSSEC signs records so answers can be verified. It does not encrypt lookups; DoH and DoT do that." }
  ]
};

COURSE_LESSONS['4.3'] = {
  id: '4.3', week: 4, title: 'Secure network architecture: zones, firewalls, and sensors', mins: 15, module: 'CertMaster Modules 5 and 9',
  intro: "A flat network is one where every device can reach every other device. Cedar Creek's plant, office, and servers are close to flat, held apart only by a firewall whose rules allow nearly everything. This lesson shows how security architects divide a network into zones, which devices guard the boundaries, and how firewall rules actually work. In Lab 4.2 you will review FW-CORE's rules yourself.",
  sections: [
    {
      title: 'Zones and segmentation',
      figure: { id: 'cc-network-today', caption: 'Cedar Creek today: one firewall connects every zone, and its rules let plant, office, servers, and the vendor VPN reach each other.' },
      body: [
        "A <strong>security zone</strong> is a group of systems with the same trust level and the same protection needs. <strong>Segmentation</strong> puts each zone on its own network and controls every path between zones. If one zone is compromised, the damage stays there. The size of that damage is often called the <strong>blast radius</strong>.",
        "Segmentation can be <strong>physical</strong>, with separate switches and cables. At its strongest this is an <strong>air gap</strong>: no network connection at all. More often it is <strong>logical</strong>: a <strong>VLAN</strong> (virtual LAN) makes one physical switch act like several separate switches, each VLAN gets its own IP subnet, and a firewall or router decides what may pass between them.",
        "Segmentation is the main defense against lateral movement. It is also how you protect a system you cannot fix: if ENG-APP02 cannot be upgraded, only the few systems that need it should be able to reach it."
      ],
      callout: { kind: 'real', title: 'Target, 2013', text: "Attackers broke into Target using network credentials stolen from Fazio Mechanical Services, a heating and refrigeration contractor that had access for billing and project work. From that foothold they reached the point-of-sale systems in stores and stole data on about 40 million payment cards. Later analyses, including a U.S. Senate committee report, pointed to weak segmentation: a vendor's access should never have led anywhere near the payment systems." }
    },
    {
      title: 'Screened subnets, jump servers, and management networks',
      figure: { id: 'cc-network-zones', caption: 'A segmented design for Cedar Creek: every zone talks only through FW-CORE, and only on the paths it needs.' },
      body: [
        "A <strong>screened subnet</strong>, still widely called a <strong>DMZ</strong> (demilitarized zone), holds systems the internet must reach, such as a web server or VPN portal. A firewall sits between the internet and the screened subnet, and between the screened subnet and the internal network. If a public server is hacked, the attacker is still outside.",
        "A <strong>jump server</strong> (or jump host) is a hardened system administrators log in to first, and then connect from there to sensitive systems. Only the jump server is allowed into the secure zone, and every session on it is logged. An <strong>out-of-band management</strong> network keeps device administration off the network users share; Cedar Creek's 10.99.0.0/24 management network is a start."
      ],
      callout: { kind: 'cedar', title: 'No screened subnet yet', text: "Cedar Creek has no screened subnet. The VPN portal runs on FW-CORE itself, and rule 14 forwards Remote Desktop from a vendor's internet address straight to ENG-APP02 in the server zone. If ENG-APP02, an unsupported Windows Server 2012 R2 machine, were taken over through that port, the attacker would already be inside with DC01 and the file servers. Anything the internet must reach belongs in a screened subnet." }
    },
    {
      title: 'Defense in depth',
      body: [
        "<strong>Defense in depth</strong> means layering several independent controls so that one failure does not expose an asset. No single layer is expected to be perfect. A stolen VPN password should still meet MFA; a phishing click should still meet EDR; malware that runs should still find the file server segmented away and the backups offline. A common way to list the layers, from the outside in:"
      ],
      list: [
        "<strong>Policies and awareness:</strong> the AUP, training, and procedures.",
        "<strong>Physical:</strong> fences, badges, the server room door.",
        "<strong>Perimeter:</strong> FW-CORE, the VPN, the screened subnet.",
        "<strong>Network:</strong> segmentation, VLANs, IDS/IPS, NAC.",
        "<strong>Host:</strong> EDR, patching, host firewalls, hardening.",
        "<strong>Application:</strong> secure coding, web application firewalls.",
        "<strong>Data:</strong> encryption, permissions, DLP, backups.",
        "<strong>Monitoring:</strong> logs, alerts, and people who read them."
      ]
    },
    {
      title: 'Firewalls and other boundary devices',
      body: [
        "A <strong>firewall</strong> enforces rules about which traffic may cross a boundary. A <strong>stateless packet filter</strong> judges each packet alone by addresses, protocol, and ports. A <strong>stateful</strong> firewall remembers connections, so it lets replies back in only for conversations that started inside. A <strong>next-generation firewall (NGFW)</strong> works up to Layer 7: it recognizes applications and users, not just ports, and often includes intrusion prevention. A <strong>UTM</strong> (unified threat management) appliance bundles firewall, IPS, antivirus, and web filtering in one box for smaller sites.",
        "A <strong>WAF</strong> (web application firewall) inspects web requests to stop attacks such as SQL injection. A <strong>forward proxy</strong> makes web requests on behalf of users and can filter them; a <strong>reverse proxy</strong> sits in front of servers. A <strong>load balancer</strong> spreads requests across several servers for availability."
      ],
      table: {
        head: ['Attribute', 'Meaning', 'Example'],
        rows: [
          ['Inline (active)', 'Traffic passes through the device, which can block it', 'Firewall, IPS'],
          ['Monitor (passive)', 'The device gets a copy from a tap or SPAN port and can only alert', 'IDS, packet sniffer'],
          ['Fail-open', 'If the device fails, traffic keeps flowing unchecked', 'Chosen when availability matters most'],
          ['Fail-closed', 'If the device fails, traffic stops', 'Chosen when confidentiality matters most']
        ]
      }
    },
    {
      title: 'Rules and access control lists',
      body: [
        "Firewall rules, and the similar <strong>access control lists (ACLs)</strong> on routers and switches, list a source, a destination, a service (protocol and port), and an action: allow or deny. Most devices read the list from the top and stop at the <strong>first match</strong>, so order matters.",
        "A good rule base ends with <strong>implicit deny</strong>: anything not explicitly allowed is blocked. A rule that sits below a broader rule can never match; it is <strong>shadowed</strong>. Rules should follow least privilege (exact sources, destinations, and ports), log what they allow, carry an owner and a reason, and be reviewed on a schedule so temporary rules do not live forever.",
        "Read the three example rules below from the top. A plant PC asking DC01 for a name matches rule 1 and is allowed. The same PC trying to reach FS-HR01 matches nothing above rule 3, so rule 3 blocks it and logs the attempt. If someone later added 'PLANT to any, any service, allow' above rule 3, rule 3 would stop working without anyone noticing."
      ],
      table: {
        head: ['#', 'Source', 'Destination', 'Service', 'Action', 'Why it is good'],
        rows: [
          ['1', 'PLANT 10.40.0.0/16', 'DC01 10.10.1.10', 'DNS (53)', 'Allow, log', 'One server, one service'],
          ['2', 'ENG-FS01 10.30.4.10', 'CNC machines 10.40.2.63-65', 'SFTP (22)', 'Allow, log', 'Exact hosts, secure protocol'],
          ['3', 'any', 'any', 'any', 'Deny, log', 'Implicit deny made visible']
        ]
      },
      callout: { kind: 'cedar', title: 'Temporary since 2019', text: "Two FW-CORE rules were added in 2019 as a 'temporary' fix for Line 2 label printing. They let the entire plant and the entire office reach each other on every port, and nobody ever removed them. Lab 4.2 has you find these, a rule that allows everything, and a vendor rule shaped exactly like the one that hurt Target." }
    },
    {
      title: 'Web filtering',
      body: [
        "Most malware and phishing arrive through a web link, so organizations filter where users can browse. A <strong>web filter</strong> checks each requested address against rules before the page loads. <strong>URL filtering</strong> blocks or allows specific addresses. <strong>Content categorization</strong> sorts sites into groups such as gambling, malware, or newly registered domains, so a policy can block a whole category. <strong>Reputation</strong> scoring blocks sites with a history of hosting malicious content.",
        "Filtering can run on a central proxy or NGFW that all traffic passes through, or as an <strong>agent</strong> on each laptop. The agent keeps protecting a laptop when it leaves the building, which matters for a split-tunnel VPN where web traffic never reaches the company. Category and reputation filtering also helps against lookalike domains like cedarcreek-lnd.com, because criminals often register such domains shortly before they use them."
      ]
    },
    {
      title: 'IDS and IPS',
      body: [
        "An <strong>intrusion detection system (IDS)</strong> watches traffic and raises alerts. An <strong>intrusion prevention system (IPS)</strong> sits inline and can also drop malicious traffic. Network versions (NIDS, NIPS) watch a network segment; host versions (HIDS, HIPS) run on one computer.",
        "<strong>Signature-based</strong> detection matches known attack patterns: precise, but blind to new attacks. <strong>Anomaly-based</strong> (behavioral) detection learns what normal looks like and flags differences: it can catch new attacks but produces more false positives. A <strong>false positive</strong> is an alert on harmless traffic; a <strong>false negative</strong> is a real attack that raised no alert, which is worse.",
        "Place sensors where they see the traffic you care about. An IDS on PLANT-SW1's mirror port, where Jordan captured traffic, would see office-to-plant Telnet, Modbus commands, and plant devices reaching the HR server."
      ],
      callout: { kind: 'exam', title: 'IDS or IPS, open or closed', text: "Detects and alerts only, often connected to a tap or SPAN port: IDS. Inline and able to block: IPS. If an inline device failing must never stop production, it should fail open; if it protects highly sensitive data, fail closed. A question about rules that never take effect is about rule order and shadowing." }
    }
  ],
  check: [
    { q: "Cedar Creek wants a public web server that cannot be used as a path into the internal network. Where should it go?", opts: ["In a screened subnet (DMZ)", "On the plant VLAN", "On the management network", "On the same VLAN as DC01"], ans: 0, why: "A screened subnet sits between two firewall boundaries, so a compromised public server still cannot reach internal systems freely." },
    { q: "A firewall allows traffic based only on addresses and ports and has no memory of earlier packets. What type is it?", opts: ["Stateful firewall", "Next-generation firewall", "Stateless packet filter", "Web application firewall"], ans: 2, why: "A stateless packet filter judges each packet alone by addresses, protocol, and ports." },
    { q: "Rule 7 allows the office to reach the plant on any port. Rule 10, lower down, allows office Telnet to CNC03 and has zero hits. Why?", opts: ["Rule 10 is disabled", "Implicit deny blocks rule 10", "Telnet is not a TCP service", "Rule 10 is shadowed: rule 7 matches first"], ans: 3, why: "With first-match processing, the broader rule above catches the traffic, so the narrower rule below is never reached." },
    { q: "Which device receives a copy of traffic from a SPAN port and raises alerts but cannot block anything?", opts: ["IDS", "IPS", "Load balancer", "Reverse proxy"], ans: 0, why: "A passive IDS works from a copy of traffic, so it can alert but not drop packets. An IPS must be inline." },
    { q: "What is the main security purpose of network segmentation?", opts: ["Faster internet speeds", "Removing the need for passwords", "Limiting how far an attacker can move after one system is compromised", "Replacing antivirus"], ans: 2, why: "Segmentation contains a compromise to one zone and blocks lateral movement." }
  ]
};

COURSE_LESSONS['4.4'] = {
  id: '4.4', week: 4, title: 'Remote access, network access control, and wireless', mins: 15, module: 'CertMaster Modules 5 and 9',
  intro: "Firewalls guard the paths between zones. This lesson covers the other ways in: remote workers and vendors connecting over the internet, devices plugging into a switch port, and anyone within range of a Wi-Fi signal. Cedar Creek has a weak spot in each: a VPN protected only by passwords, open switch ports on the plant floor, and a plant Wi-Fi password painted on the break room wall.",
  sections: [
    {
      title: 'Remote access and VPNs',
      figure: { id: 'vpn-tunnels', caption: 'A full tunnel sends all traffic through the company; a split tunnel sends only company traffic.' },
      body: [
        "A <strong>VPN</strong> (virtual private network) builds an encrypted tunnel across an untrusted network. A <strong>remote access</strong> VPN (client-to-site) connects one user's device to the company. A <strong>site-to-site</strong> VPN joins two offices' networks, gateway to gateway.",
        "Two technologies dominate. A <strong>TLS VPN</strong> uses the same encryption as HTTPS and usually runs on port 443, which passes through most networks. <strong>IPsec</strong> works at Layer 3. Its <strong>AH</strong> (Authentication Header) proves packets are genuine and unchanged; its <strong>ESP</strong> (Encapsulating Security Payload) also encrypts them. <strong>Tunnel mode</strong> wraps the entire original packet and is used between gateways; <strong>transport mode</strong> protects only the payload between two hosts. <strong>IKE</strong> (Internet Key Exchange) negotiates the keys.",
        "In a <strong>full tunnel</strong>, all of a remote user's traffic goes through the company, where it can be inspected. In a <strong>split tunnel</strong>, only company traffic uses the VPN and everything else goes straight to the internet: faster, but less visible. Whatever the design, a VPN login is a door into the network, so it needs <strong>MFA</strong> and accounts that are removed the day they are no longer needed. An <strong>always-on</strong> VPN connects automatically whenever the laptop is outside the office, so users cannot forget or skip it."
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline, 2021', text: "Colonial's CEO told the U.S. Senate that the attackers got in through a legacy VPN profile that was not supposed to be in use any more. It had a complex password but no multifactor authentication. One forgotten remote access account, with nothing but a password, led to the ransomware attack that shut down the pipeline. Cedar Creek has the same weakness: the old CC-LEGACY profile you found in Week 3 still takes a password alone, and any VPN user can choose it." }
    },
    {
      title: 'Managing systems remotely',
      body: [
        "Administrators use <strong>SSH</strong> for command-line devices and <strong>RDP</strong> (Remote Desktop Protocol) for Windows. Neither should be open to the whole internet. Exposed RDP is one of the most common ways ransomware crews get in, which is why FW-CORE rule 14, forwarding RDP to ENG-APP02, is a serious finding. Remote administration should come through the VPN with MFA, then through a jump server, with every session logged.",
        "Network devices themselves need a way in that does not depend on the network they run. <strong>Out-of-band management</strong> uses a separate path, such as a dedicated management network or a console server with its own connection, so administrators can still reach a firewall or switch when the main network is down or under attack. Management interfaces should never be reachable from user, guest, or plant networks."
      ]
    },
    {
      title: 'Hardening switches',
      body: [
        "A <strong>baseline</strong> is a documented secure configuration every device of a type must meet, often based on a published benchmark such as those from the Center for Internet Security (CIS). A baseline only helps if it is checked: compare each device against it after every change, and treat any difference as a finding. A switch that matches the baseline on Monday can drift by Friday when someone opens a port to fix a problem. For switches, a baseline typically includes:"
      ],
      list: [
        "<strong>Shut down unused ports</strong> so nobody can plug in unnoticed.",
        "<strong>Port security:</strong> limit each port to known MAC addresses and decide what happens on a violation (drop, alert, or shut the port). PBQ Lab 4 has you configure this.",
        "<strong>Change default credentials</strong> and manage devices with SSH or HTTPS, never Telnet or HTTP.",
        "<strong>Loop and spoofing protection:</strong> BPDU guard stops a rogue device from taking over the spanning tree, and DHCP snooping and dynamic ARP inspection block rogue DHCP servers and ARP poisoning."
      ]
    },
    {
      title: 'Network access control and 802.1X',
      figure: { id: 'dot1x-flow', caption: 'In 802.1X the switch or access point only relays; the RADIUS server decides.' },
      body: [
        "<strong>Network access control (NAC)</strong> checks who and what a device is before it gets on the network. The usual standard is <strong>IEEE 802.1X</strong>, which has three roles. The <strong>supplicant</strong> is the device asking to connect. The <strong>authenticator</strong> is the switch or wireless access point; it blocks the port until told otherwise. The <strong>authentication server</strong>, usually <strong>RADIUS</strong> (Remote Authentication Dial-In User Service), checks the credentials and tells the authenticator to allow or deny.",
        "The credentials travel inside <strong>EAP</strong> (Extensible Authentication Protocol). <strong>EAP-TLS</strong> uses certificates on both the server and the client, which makes it the strongest common choice. <strong>PEAP</strong> and <strong>EAP-TTLS</strong> build a TLS tunnel with a server certificate and then send a username and password inside it.",
        "Many NAC systems also check <strong>posture</strong>: is antivirus running, is the system patched? Checking can use an installed <strong>agent</strong>, which sees more, or be <strong>agentless</strong>. A device that fails can be placed in a quarantine VLAN until it is fixed.",
        "Devices that cannot run 802.1X, such as label printers and PLCs, are common in plants. They are usually allowed by MAC address instead (MAC authentication bypass), which is weaker because MAC addresses can be copied. Put such devices in their own segment so a copied MAC gains little."
      ],
      table: {
        head: ['', 'RADIUS', 'TACACS+'],
        rows: [
          ['Main use', 'Network access: 802.1X, Wi-Fi, VPN logins', 'Administrators logging in to network devices'],
          ['Transport', 'UDP 1812 and 1813', 'TCP 49'],
          ['Encryption', 'Hides only the password', 'Encrypts the whole message'],
          ['Control', 'Authentication and authorization combined', 'Separates authentication, authorization, and accounting, so each command can be authorized and logged']
        ]
      }
    },
    {
      title: 'Wireless security',
      body: [
        "Wi-Fi reaches past walls, so its encryption and authentication carry real weight. WEP and the original WPA are broken and must not be used. <strong>WPA2</strong> uses AES encryption (CCMP). <strong>WPA3</strong> adds stronger protection and is the current standard.",
        "Each comes in two modes. <strong>Personal</strong> uses one shared passphrase, called a pre-shared key (PSK), for everyone. <strong>Enterprise</strong> uses 802.1X, so each person logs in with their own credentials or certificate and can be removed individually. With WPA2-Personal, an attacker who captures a device's connection handshake can guess the passphrase offline at high speed, so a weak or widely known passphrase falls quickly. WPA3-Personal replaces that handshake with <strong>SAE</strong> (Simultaneous Authentication of Equals), which resists offline guessing.",
        "Other wireless controls: disable <strong>WPS</strong> (Wi-Fi Protected Setup), whose PIN can be guessed; give guests their own isolated network, often behind a <strong>captive portal</strong> sign-in page; run a <strong>site survey</strong> and <strong>heat map</strong> to place access points so the signal covers the building without spilling far outside; and watch for rogue access points and <strong>evil twins</strong>, fake access points that copy a real network's name. A wireless IDS or IPS (WIDS/WIPS) can detect them."
      ],
      table: {
        head: ['Standard', 'Status', 'Notes'],
        rows: [
          ['WEP', 'Broken', 'Can be cracked in minutes. Never use.'],
          ['WPA (TKIP)', 'Broken', 'Interim fix from the early 2000s.'],
          ['WPA2 (AES-CCMP)', 'Acceptable', 'Personal mode open to offline guessing of weak passphrases.'],
          ['WPA3 (SAE)', 'Recommended', 'Resists offline guessing; Enterprise offers a 192-bit mode.']
        ]
      },
      callout: { kind: 'exam', title: 'Pick the wireless fix', text: "Shared passphrase everyone knows: move to Enterprise mode with 802.1X. Need to stop offline cracking of a captured handshake: WPA3 with SAE. A fake access point with the company's network name: evil twin; detect with WIDS and require EAP-TLS so clients check the server's certificate. Users suddenly disconnected again and again: deauthentication attack. Signal reaching the parking lot: site survey and access point placement." }
    },
    {
      title: 'Wireless at Cedar Creek',
      body: [
        "Wireless attacks need no cable and no badge, only range. Attackers set up <strong>rogue access points</strong> (unauthorized ones plugged into the network, sometimes by well-meaning employees) and <strong>evil twins</strong> (fake ones with a real network's name, to capture logins). A <strong>deauthentication attack</strong> sends forged messages that knock clients off a network, either to disrupt it or to make them reconnect so the attacker can capture the handshake. Jamming floods the radio band so nothing works.",
        "Cedar Creek has only two wireless networks: CC-PLANT and CC-GUEST. There is no separate corporate office Wi-Fi, so office laptops use cables. That is simpler to secure, but it also means plant Wi-Fi is the only wireless path into anything internal, which makes its weakness more serious."
      ],
      callout: { kind: 'cedar', title: 'CC-PLANT', text: "CC-PLANT is WPA2-Personal with a passphrase unchanged since 2019 and posted on the break room wall. Anyone who reads the wall joins the plant network, and Lab 4.1 showed a 10.40.100.x Wi-Fi client reaching the HR file server. The fix is WPA2- or WPA3-Enterprise with 802.1X so each person or device has its own login, plus firewall rules so Wi-Fi clients reach only what they need." }
    }
  ],
  check: [
    { q: "In 802.1X, which component makes the decision to allow or deny a device?", opts: ["The supplicant", "The authenticator (switch or AP)", "The DHCP server", "The authentication server, usually RADIUS"], ans: 3, why: "The authenticator only relays and enforces. The RADIUS server checks the credentials and decides." },
    { q: "Which EAP method requires certificates on both the client and the server?", opts: ["EAP-TLS", "PEAP", "EAP-TTLS", "PAP"], ans: 0, why: "EAP-TLS uses mutual certificate authentication. PEAP and EAP-TTLS need only a server certificate." },
    { q: "Which wireless setting best protects a shared-passphrase network against offline password guessing?", opts: ["WEP", "WPA3-Personal (SAE)", "WPA2-Personal with TKIP", "Hiding the SSID"], ans: 1, why: "SAE in WPA3 resists offline dictionary attacks against the passphrase." },
    { q: "Remote users connect over a VPN, but only traffic for company systems goes through the tunnel. What is this called?", opts: ["Full tunnel", "Transport mode", "Split tunnel", "Site-to-site VPN"], ans: 2, why: "A split tunnel sends only company traffic through the VPN; a full tunnel sends everything." },
    { q: "What was missing from the legacy VPN account used to break into Colonial Pipeline in 2021?", opts: ["A password", "TLS encryption", "An IP address", "Multifactor authentication"], ans: 3, why: "The CEO testified the account had a complex password but no MFA, so a stolen password was enough." }
  ]
};

COURSE_LESSONS['4.5'] = {
  id: '4.5', week: 4, title: 'Cloud, IoT, and operational technology', mins: 15, module: 'CertMaster Module 6',
  intro: "Not all of Cedar Creek's systems sit in the server room. Email and payroll run in the cloud, the building has a smart HVAC controller, and the plant floor runs on controllers that move real machinery. Each kind of system changes who is responsible for security and what 'secure' even means. This lesson covers cloud models, embedded and IoT devices, industrial control systems, and zero trust.",
  sections: [
    {
      title: 'Cloud deployment and service models',
      body: [
        "A <strong>deployment model</strong> says who shares the infrastructure. <strong>Public cloud</strong> is shared by many customers (multi-tenant). <strong>Private cloud</strong> serves one organization. <strong>Community cloud</strong> is shared by organizations with common needs. <strong>Hybrid cloud</strong> combines on-premises or private systems with public cloud, and <strong>multi-cloud</strong> means using several providers.",
        "A <strong>service model</strong> says how much the provider runs. In <strong>IaaS</strong> (infrastructure as a service) you rent virtual machines, storage, and networks and manage everything from the operating system up. In <strong>PaaS</strong> (platform as a service) the provider also runs the operating system and runtime; you bring code and data. In <strong>SaaS</strong> (software as a service) you simply use a finished application. Microsoft 365 and Cedar Creek's payroll service are both SaaS."
      ]
    },
    {
      title: 'Shared responsibility',
      figure: { id: 'shared-responsibility', caption: 'The more the provider runs, the less you manage. Data, identities, and access settings are always yours.' },
      body: [
        "Cloud security follows a <strong>shared responsibility model</strong>. The provider always secures the physical data centers, hardware, and the virtualization layer. The customer always owns its data, its user accounts, and who is granted access. Everything in between shifts with the service model, and the provider's contract and documentation (often a responsibility matrix) spell out the split.",
        "Most cloud breaches come from the customer side: a storage bucket left public, an administrator account without MFA, or keys pasted into code. Other cloud considerations include where data is stored (data sovereignty, from Week 3), availability across regions and zones, and dependence on a provider you do not control.",
        "For Cedar Creek, the SaaS split is short but important. Microsoft runs the mail servers; Marcus's team decides who has an account, whether MFA is required, how sharing links work in OneDrive, and how long deleted mail is kept. If a former employee can still sign in to Microsoft 365, that is Cedar Creek's failure, not Microsoft's."
      ],
      callout: { kind: 'real', title: 'Capital One, 2019', text: "Capital One disclosed in 2019 that an attacker had taken data on about 100 million people in the United States from its cloud environment. The attacker abused a misconfigured web application firewall to obtain credentials and read data from cloud storage. The cloud provider's infrastructure was not broken; the weakness was in the customer's configuration, which is the customer's side of shared responsibility." }
    },
    {
      title: 'Cloud architecture features',
      body: [
        "Cloud providers build for availability. A <strong>region</strong> is a geographic area, and each region has several <strong>availability zones</strong>, separate data centers with their own power and cooling. Running a service in two zones keeps it up if one fails; copying data to a second region protects against a regional disaster. The customer still has to choose and pay for that design; it is not automatic.",
        "Cloud computing relies on a few building blocks that appear on the exam:"
      ],
      table: {
        head: ['Feature', 'What it means', 'Security angle'],
        rows: [
          ['Virtualization', 'A hypervisor runs many virtual machines on one host', 'An escape from one VM could reach others'],
          ['Containers', 'Apps packaged with their libraries, sharing one OS kernel', 'Lighter than VMs; weaker isolation'],
          ['Microservices', 'An app split into small services that talk over APIs', 'Every API needs authentication'],
          ['Serverless', 'Code runs on demand; the provider runs the servers', 'Less to patch; permissions still matter'],
          ['Infrastructure as code (IaC)', 'Networks and servers defined in templates', 'Review templates like code before deploying'],
          ['SDN', 'Software-defined networking separates the control plane from the data plane', 'Central control; protect the controller'],
          ['SD-WAN and SASE', 'Software-managed links between sites; security delivered from the cloud', 'Consistent policy for remote sites and users'],
          ['CASB', 'Cloud access security broker between users and cloud apps', 'Finds shadow IT, enforces policy']
        ]
      }
    },
    {
      title: 'Embedded systems and IoT',
      body: [
        "An <strong>embedded system</strong> is a computer built into a device to do one job, such as a printer, a camera, or the HVAC controller. Many run a <strong>real-time operating system (RTOS)</strong> that must respond within strict time limits. The <strong>Internet of Things (IoT)</strong> covers networked devices like these: cameras, sensors, badge readers, smart building controls.",
        "These devices share the same weaknesses. They ship with default passwords, often run old software that rarely gets updates, and stay in service for many years. The controls are simple and effective: keep an inventory, change defaults, put devices on their own segment, allow only the connections they need, and never expose their management pages to the internet."
      ],
      table: {
        head: ['Constraint', 'Why it limits security', 'Cedar Creek example'],
        rows: [
          ['Inability to patch', 'Firmware updates are rare, hard, or need a vendor visit', 'LINE2-CNC03 still offers Telnet'],
          ['Little compute and power', 'No room for strong encryption or security agents', 'The HVAC controller serves its login page over plain HTTP'],
          ['Weak authentication', 'Default or shared logins, often no MFA option', 'The HVAC vendor\'s single shared login'],
          ['Implied trust', 'Protocols assume anyone on the network is allowed', 'Modbus on LINE2-PLC has no login'],
          ['Long life and cost', 'Devices stay in service for decades and are expensive to replace', 'Line 2 equipment outlives several generations of PCs']
        ]
      },
      callout: { kind: 'cedar', title: 'Embedded devices on reachable networks', text: "NVR-01 and BADGE-CTRL sit on the management network, and HVAC-CTRL and the CNC machines sit on the plant network. All of them have web or Telnet logins, and FW-CORE rule 21 lets the whole office reach them. An infected office PC could try default passwords on every one, the same pattern Mirai used on the internet. Week 5's vulnerability scan checks these devices one by one." }
    },
    {
      title: 'Industrial control systems and OT',
      figure: { id: 'it-ot-zones', caption: 'IT and OT kept apart: the plant talks to the business only through a controlled middle zone.' },
      body: [
        "<strong>Operational technology (OT)</strong> is hardware and software that monitors and controls physical processes. An <strong>industrial control system (ICS)</strong> is the OT that runs a plant. A <strong>PLC</strong> (programmable logic controller) runs the machines. An <strong>HMI</strong> (human-machine interface) is the screen operators use, like PLANT-PC-07 on Line 2. <strong>SCADA</strong> (supervisory control and data acquisition) systems monitor and control equipment spread across large areas, such as pipelines and power grids.",
        "OT priorities differ from IT. Safety and availability come first, because stopping a line costs money and a wrong command can hurt someone. Patching is slow because changes must be tested and scheduled around production. Many industrial protocols, such as Modbus, were built for closed networks and have no authentication at all.",
        "The standard answer is strict separation. OT sits in its own zones. Business systems reach it only through a controlled middle zone (often called an IT/OT DMZ) holding the few systems both sides need, such as a file transfer point or a historian database. No direct path runs from an office laptop to a PLC, and nothing in OT browses the internet."
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline: IT, OT, and a precautionary shutdown', text: "Colonial Pipeline runs a fuel pipeline of about 5,500 miles serving the U.S. East Coast. In May 2021 DarkSide ransomware hit its business (IT) systems. Colonial shut down the entire pipeline as a precaution while it worked out whether the attack could spread to the systems that control fuel flow. The pipeline stayed down for several days, and fuel shortages followed. Strong IT/OT separation, and confidence in it, is what lets a company keep operating while it cleans up an IT incident." }
    },
    {
      title: 'Zero trust and deception',
      body: [
        "<strong>Zero trust</strong> drops the idea that anything inside the network is safe. Every request is checked every time, based on the user's identity, the device's health, and the situation. In zero trust architecture, the <strong>control plane</strong> makes decisions: a <strong>policy engine</strong> decides and a <strong>policy administrator</strong> tells the enforcement point. The <strong>data plane</strong> carries the traffic through a <strong>policy enforcement point</strong>, which allows or blocks each session. Key ideas include <strong>adaptive identity</strong> (risk-based checks) and <strong>threat scope reduction</strong> (least privilege so a compromise reaches as little as possible).",
        "<strong>Deception technology</strong> plants decoys that no legitimate user should touch, so any touch is an alert. Because real users have no reason to go near them, decoys produce very few false positives. A <strong>honeypot</strong> is a fake system, a <strong>honeynet</strong> a fake network, a <strong>honeyfile</strong> a tempting fake document, and a <strong>honeytoken</strong> a fake credential or record."
      ],
      callout: { kind: 'exam', title: 'Shared responsibility questions', text: "If a question asks who is responsible for data, user accounts, or access settings in any cloud model, the answer is the customer. Physical security of the data center is always the provider. In IaaS the customer also patches the guest operating system; in SaaS the provider does." }
    }
  ],
  check: [
    { q: "Cedar Creek uses Microsoft 365 for email. Which service model is it?", opts: ["SaaS", "PaaS", "IaaS", "On-premises"], ans: 0, why: "Microsoft 365 is a finished application delivered as a service: SaaS." },
    { q: "In an IaaS deployment, who is responsible for patching the guest operating system?", opts: ["The cloud provider", "The customer", "Nobody; it patches itself", "The hardware manufacturer"], ans: 1, why: "In IaaS the provider runs the hardware and hypervisor; the customer manages the operating system and everything above it." },
    { q: "Which device runs the machines on a production line?", opts: ["HMI", "SIEM", "PLC", "Hypervisor"], ans: 2, why: "A programmable logic controller (PLC) controls the machinery. The HMI is the operator's screen." },
    { q: "Why did Colonial Pipeline shut down its pipeline in May 2021 when ransomware hit its business systems?", opts: ["The pipeline's PLCs were encrypted", "The fuel had been contaminated", "A court ordered it", "As a precaution, until it knew the attack could not spread to the systems controlling fuel flow"], ans: 3, why: "The ransomware hit IT systems. The shutdown was a precaution to contain the threat while the company assessed it." },
    { q: "A fake file named Payroll_2026_FINAL.xlsx is placed on a share and any access raises an alert. What is it?", opts: ["Honeyfile", "Honeynet", "CASB", "Policy enforcement point"], ans: 0, why: "A honeyfile is a decoy document; no legitimate user has a reason to open it." }
  ]
};

COURSE_LESSONS['4.6'] = {
  id: '4.6', week: 4, title: 'Reconnaissance and scanning', mins: 15, module: 'CyberSec Academy: Network Reconnaissance (Nmap); Security+ penetration testing concepts',
  intro: "Every attack starts with research. Before attackers touch a target, they learn its people, domains, and exposed services, and then they scan to find what answers. Defenders who know these moves can find the same exposures first. This lesson teaches the rules that make scanning legal, the five phases of a penetration test, and the Nmap skills you will use tonight in Lab 4.3 and tomorrow in the Mock Pentest.",
  sections: [
    {
      title: 'Why a defender learns to scan',
      body: [
        "Scanning is not only an attacker's tool. Defenders scan to build an accurate asset inventory, to confirm that a firewall rule really blocks what it should, and to find a forgotten server before someone else does. Dee's scan of the plant, which you read in Lab 4.3, is a defender's scan.",
        "A port scanner like Nmap tells you what is listening. A vulnerability scanner, which you use in Week 5, goes further and checks those services against databases of known flaws. Both start the same way: find the hosts, then find the open ports."
      ]
    },
    {
      title: 'Permission first: rules of engagement',
      body: [
        "Scanning or probing systems without permission can be a crime. In the United States the main law is the Computer Fraud and Abuse Act (CFAA), and most countries have similar laws. A legitimate test starts with written <strong>authorization</strong> from someone who has the authority to give it, and with <strong>rules of engagement</strong> that set the scope (which addresses and systems), the allowed techniques, the dates and times, the contacts, and the conditions that stop the test.",
        "Tests are described by how much the testers are told. In a <strong>known environment</strong> test (once called white box) they get full details. In a <strong>partially known environment</strong> (gray box) they get some, such as a network map. In an <strong>unknown environment</strong> (black box) they start with almost nothing, as an outside attacker would. A <strong>red team</strong> attacks, a <strong>blue team</strong> defends, and a <strong>purple team</strong> exercise has them work together and share what they learn."
      ],
      callout: { kind: 'cedar', title: 'Greg signed first', text: "Before Dee scanned anything, Greg Palmer signed an authorization listing the exact ranges, the allowed techniques (discovery, port scan, version detection), what was forbidden (logins, exploits, writes to the PLC), the time window, and a stop condition: any error on the Line 2 HMI ends the scan. That page protects Dee, the company, and the plant." }
    },
    {
      title: 'The five phases',
      figure: { id: 'pentest-phases', caption: 'The five phases of a penetration test. Week 4 covers recon and scanning; Week 5 covers the rest.' },
      body: [
        "Penetration tests follow a repeatable method. This week you do the first two phases; Week 5 finishes the job."
      ],
      list: [
        "<strong>Reconnaissance:</strong> gather information about the target.",
        "<strong>Scanning and enumeration:</strong> find live hosts, open ports, services, versions, and shared resources.",
        "<strong>Exploitation (gaining access):</strong> use a weakness to get in. Week 5.",
        "<strong>Post-exploitation:</strong> escalate privileges, move laterally, show impact, and clean up. Week 5.",
        "<strong>Reporting:</strong> explain findings, risk, and fixes. The report is what the client pays for. Week 5."
      ]
    },
    {
      title: 'Passive and active reconnaissance',
      body: [
        "<strong>Passive reconnaissance</strong> gathers information without touching the target's systems, so the target cannot see it. Most of it is <strong>OSINT</strong> (open-source intelligence): information anyone can find. <strong>Active reconnaissance</strong> interacts with the target directly, such as pinging hosts or connecting to a service to read its banner. It gets better information but can show up in the target's logs."
      ],
      table: {
        head: ['Passive (no contact)', 'Active (touches the target)'],
        rows: [
          ['WHOIS records: domain owner, registrar, name servers', 'Ping sweeps to find live hosts'],
          ['Public DNS records and certificate logs', 'Port scans with Nmap'],
          ['Job postings that name the technology in use', 'Banner grabbing: reading a service\'s greeting'],
          ['Social media and staff profiles', 'Querying the target\'s own DNS servers directly'],
          ['Search engines with operators such as site: and filetype:', 'Browsing to the target\'s login pages'],
          ['Shodan, a search engine for internet-connected devices', 'Enumerating shares and services']
        ]
      }
    },
    {
      title: 'Nmap essentials',
      figure: { id: 'port-states', caption: 'How a SYN scan decides a port\'s state from the reply, or the lack of one.' },
      body: [
        "<strong>Nmap</strong> (Network Mapper), first released in 1997, is the standard free tool for host discovery and port scanning. With no options it scans the 1,000 most common TCP ports. It reports each port as <strong>open</strong> (a service answered), <strong>closed</strong> (the host answered but nothing listens there), or <strong>filtered</strong> (no answer, usually because a firewall dropped the probe)."
      ],
      table: {
        head: ['Option', 'What it does', 'When to use it'],
        rows: [
          ['-sn', 'Host discovery only, no port scan', 'Finding live hosts on a subnet'],
          ['-sS', 'SYN scan: never completes the handshake (needs root)', 'The default first scan'],
          ['-sT', 'Connect scan: completes the handshake', 'When you cannot run as root'],
          ['-sU', 'UDP scan (slow)', 'Finding DNS, SNMP, DHCP'],
          ['-p 22,80 / -p-', 'Chosen ports / all 65,535 ports', 'Services on unusual ports'],
          ['-sV', 'Detects service versions', 'Matching software to known vulnerabilities'],
          ['-O', 'Guesses the operating system', 'Asset identification'],
          ['-sC', 'Runs the default NSE scripts (Nmap Scripting Engine)', 'Extra detail about each service'],
          ['-A', 'Aggressive: -O, -sV, -sC, and traceroute together', 'Full picture on an authorized test'],
          ['-T0 to -T5', 'Timing, from very slow to very fast', 'Slower is quieter and gentler'],
          ['-oN / -oG / -oA', 'Save normal, greppable, or all formats', 'Evidence for the report']
        ]
      },
      callout: { kind: 'exam', title: 'Passive or active?', text: "Anything that sends packets to the target, such as a ping sweep, port scan, or banner grab, is active reconnaissance. Reading WHOIS, public DNS records, job postings, or social media is passive. A question about 'many SYN packets to many ports from one address in a few seconds' describes a port scan as a defender would see it." }
    },
    {
      title: 'Reading a scan report',
      body: [
        "Here is one host from Dee's scan of the plant, line by line. Read every report this way: who, how sure, what is open, and what software."
      ],
      table: {
        head: ['Line in the report', 'What it tells you'],
        rows: [
          ['<code>Nmap scan report for line2-cnc03.cedarcreek.local (10.40.2.63)</code>', 'The host name from DNS and its IP address'],
          ['<code>Host is up (0.0015s latency).</code>', 'It answered, and how quickly'],
          ['<code>Not shown: 65533 closed tcp ports (reset)</code>', 'Every other port answered with a reset: closed, not filtered, so no firewall stands in front of it'],
          ['<code>21/tcp open ftp Embedded FTP server</code>', 'Port, state, service name, and version: cleartext file transfer'],
          ['<code>23/tcp open telnet BusyBox telnetd</code>', 'Cleartext remote login on a machine that runs production']
        ]
      }
    },
    {
      title: 'What the defender sees',
      body: [
        "Scans are noisy. A SYN scan sends a packet to every port it tests, so a firewall log or IDS sees one source touching hundreds or thousands of ports in seconds. A ping sweep shows one source contacting every address in a range. Most IDS products have signatures for exactly these patterns, and many recognize Nmap's default probes by name.",
        "Slower timing (<code>-T2</code> or lower) spreads the probes out so they blend into normal traffic, which is why a well-tuned SIEM looks for patterns over hours, not just seconds. Scans from the internet are constant and mostly automated; a scan from inside the network is far more alarming, because it means someone or something inside is mapping targets. When Dee scanned the plant from IT-ADMIN-01, the change window and Greg's signature are what made that internal scan normal."
      ]
    },
    {
      title: 'Your engagement: Mock Pentest, part 1',
      body: [
        "Cedar Creek plans to hire an outside firm for its first real penetration test, and Marcus wants you able to scope it and read its report. So you practice the method yourself, on targets built for it. Tomorrow you run the first two phases of a penetration test against practice targets that Hack The Box (HTB) provides for exactly this purpose. In Week 5 you finish the same engagement (exploitation, post-exploitation, and the report) in the same document. Your scope is four free <strong>Starting Point, Tier 0</strong> machines: <strong>Meow</strong> and <strong>Fawn</strong> for the Recon phase, and <strong>Dancing</strong> and <strong>Redeemer</strong> for the Scanning phase. You are authorized to scan only the machine you spawn, only while it is assigned to you.",
        "Keep one document (Google Doc or Word on OneDrive) with five sections that match the rubric: <strong>(1)</strong> scope and rules of engagement in your own words; <strong>(2)</strong> recon notes: what you learned about each target before scanning; <strong>(3)</strong> a scan table for all four machines with port, protocol, state, service, and version, plus the Nmap commands you ran; <strong>(4)</strong> evidence: screenshots, saved Nmap output, your HTB username, and each flag; <strong>(5)</strong> findings: why each exposed service is risky, a risk rating, the fix, and the Cedar Creek system with the same problem. These machines are weak because of misconfiguration, not missing patches, so a finding may have no CVE. Say so.",
        "In the Pentest Lab, paste the same document link into Phase 1 (Recon) and Phase 2 (Scanning). Skip Exercise 2b (web enumeration); it leads into exploitation, which is Week 5. The document is due at the end of Day 2."
      ],
      callout: { kind: 'tip', title: 'Two ways to reach HTB targets', text: "HTB's in-browser attack machine (Pwnbox, which the Pentest Lab page calls the AttackBox) needs nothing installed, but free accounts get limited time on it. Your own Kali works too: on the Starting Point page choose Connect, download the OpenVPN file, then run sudo openvpn followed by the file's path, for example sudo openvpn ~/Downloads/starting_point_yourname.ovpn. Leave that terminal open and scan from a second one." }
    }
  ],
  check: [
    { q: "What must be in place before you scan any network you do not own?", opts: ["A fast internet connection", "Written authorization and agreed rules of engagement", "A copy of Nmap", "A VPN"], ans: 1, why: "Scanning without permission can be illegal. Authorization and scope come first." },
    { q: "Which is an example of passive reconnaissance?", opts: ["Running nmap -sS against the target", "Grabbing an SSH banner from the target", "Reading the target's job postings to learn what software it uses", "Pinging every address in the target's range"], ans: 2, why: "Reading public information does not touch the target's systems. The others send packets to the target." },
    { q: "Nmap reports a port as filtered. What does that most likely mean?", opts: ["A service is listening", "The host replied with a reset", "The host is down", "No reply came back, probably because a firewall dropped the probe"], ans: 3, why: "Filtered means Nmap got no answer and cannot tell if the port is open or closed, usually because of a firewall." },
    { q: "Which Nmap option identifies the software and version running on open ports?", opts: ["-sV", "-sn", "-p-", "-oG"], ans: 0, why: "-sV turns on service and version detection." },
    { q: "Testers receive a network map and a list of server names, but no passwords or source code. What kind of test is this?", opts: ["Known environment", "Partially known environment", "Unknown environment", "Purple team"], ans: 1, why: "Some information but not all describes a partially known environment (gray box)." }
  ]
};

COURSE_QUIZ.w4 = {
  title: 'Week 4 Quiz: Secure Networks and Recon',
  pass: 80,
  questions: [
    { q: "An analyst traces a packet routed from the office to the internet. Which OSI layer handles the logical addressing and routing?", opts: ["Layer 2, Data link", "Layer 3, Network", "Layer 4, Transport", "Layer 5, Session"], ans: 1, why: "Layer 3 uses IP addresses to route between networks.", lesson: '4.1' },
    { q: "Which OSI layer do switches use to forward frames by MAC address, and where ARP poisoning takes place?", opts: ["Layer 1", "Layer 2", "Layer 3", "Layer 7"], ans: 1, why: "MAC addresses, switches, and ARP all live at Layer 2, the data link layer.", lesson: '4.1' },
    { q: "A SYN flood fills a server's table of half-open connections. Which layer does it target?", opts: ["Layer 2", "Layer 3", "Layer 4", "Layer 6"], ans: 2, why: "SYN floods abuse the TCP handshake, a Layer 4 (transport) function.", lesson: '4.1' },
    { q: "Wireshark shows hundreds of SYN packets from one address to many different ports on a server within one second. What is this most likely?", opts: ["SQL injection", "DNS amplification", "A port scan", "A normal file transfer"], ans: 2, why: "SYNs to many ports in a burst is the classic sign of a port scan.", lesson: '4.6' },
    { q: "A workstation is seen connecting to TCP port 443. Which service is this most likely?", opts: ["HTTP", "SSH", "RDP", "HTTPS"], ans: 3, why: "443 is HTTPS, web traffic encrypted with TLS.", lesson: '4.2' },
    { q: "Engineers transfer CNC programs with FTP on port 21 and the capture shows the password. What is the best replacement?", opts: ["SFTP", "Telnet", "TFTP", "HTTP"], ans: 0, why: "SFTP runs file transfer inside SSH, encrypting both the login and the file.", lesson: '4.2' },
    { q: "Which two ports should a firewall review flag first when they are open to the whole internet on an old Windows server?", opts: ["443 and 53", "3389 and 445", "123 and 161", "25 and 587"], ans: 1, why: "RDP (3389) and SMB (445) are among the most attacked services; both should be reachable only through a VPN or not at all.", lesson: '4.2' },
    { q: "Which email control publishes a policy telling receivers to quarantine or reject mail that fails SPF and DKIM?", opts: ["S/MIME", "DNSSEC", "DMARC", "STARTTLS"], ans: 2, why: "DMARC sets the policy and requests reports. SPF lists allowed senders and DKIM signs messages.", lesson: '4.2' },
    { q: "Cedar Creek wants to host a public website without creating a path into its internal network. Where should the web server go?", opts: ["On the office VLAN", "Behind the HR file server", "On the plant VLAN", "In a screened subnet (DMZ)"], ans: 3, why: "A screened subnet keeps internet-facing servers between firewall boundaries, away from internal systems.", lesson: '4.3' },
    { q: "A firewall judges each packet only by source, destination, and port, with no memory of earlier packets. What type is it?", opts: ["Stateless packet filter", "Next-generation firewall", "Stateful firewall", "Proxy server"], ans: 0, why: "No connection memory means stateless packet filtering.", lesson: '4.3' },
    { q: "FW-CORE has an allow-everything rule above its Default-Deny rule, and Default-Deny shows zero hits. What is the effect?", opts: ["Traffic not covered by any other rule is denied", "Traffic not covered by any other rule is allowed, because implicit deny never takes effect", "The firewall fails closed", "Only logging is affected"], ans: 1, why: "With first-match processing the allow-all rule catches everything first, so the deny rule below is shadowed.", lesson: '4.3' },
    { q: "An organization wants a device that can block malicious traffic in real time, not just alert. What should it deploy, and where?", opts: ["An IDS on a SPAN port", "A honeypot in the DMZ", "An IPS inline", "A load balancer"], ans: 2, why: "Only an inline IPS can drop traffic. An IDS on a SPAN port sees a copy and can only alert.", lesson: '4.3' },
    { q: "The organization uses firewalls, IDS, MFA, endpoint protection, and backups so that one failed control does not expose its data. What principle is this?", opts: ["Least privilege", "Implicit deny", "Separation of duties", "Defense in depth"], ans: 3, why: "Layering independent controls is defense in depth.", lesson: '4.3' },
    { q: "Remote employees must have all connections to company resources encrypted across the internet. Which technology fits best?", opts: ["A VPN", "NAT", "VLAN tagging", "A stateless firewall"], ans: 0, why: "A VPN builds an encrypted tunnel across untrusted networks.", lesson: '4.4' },
    { q: "In 802.1X, what role does a switch play?", opts: ["Supplicant", "Authenticator", "Authentication server", "Certificate authority"], ans: 1, why: "The switch or access point is the authenticator: it blocks the port and relays credentials to the RADIUS server.", lesson: '4.4' },
    { q: "CC-PLANT uses WPA2-Personal with a passphrase posted on a wall. Which change best lets IT give and remove access person by person?", opts: ["Hide the SSID", "Change to WEP", "Move to WPA2- or WPA3-Enterprise with 802.1X", "Enable WPS"], ans: 2, why: "Enterprise mode gives each user or device its own credentials through 802.1X and RADIUS.", lesson: '4.4' },
    { q: "In which cloud service model does the customer manage the operating system, applications, and data while the provider runs the hardware and hypervisor?", opts: ["SaaS", "PaaS", "Community cloud", "IaaS"], ans: 3, why: "IaaS gives the customer virtual machines to manage from the operating system up.", lesson: '4.5' },
    { q: "Why do industrial networks such as Cedar Creek's plant need strict separation from office networks?", opts: ["Industrial protocols like Modbus often have no authentication, and availability and safety come first", "OT devices are always patched faster than IT devices", "Office networks have no firewalls", "OT devices cannot use IP addresses"], ans: 0, why: "Many industrial protocols trust anyone who can reach them, and downtime or a wrong command has physical consequences.", lesson: '4.5' },
    { q: "A tester reads a company's job postings and WHOIS records before sending any packets. What is this?", opts: ["Active reconnaissance", "Passive reconnaissance", "Exploitation", "Post-exploitation"], ans: 1, why: "Gathering public information without touching the target's systems is passive reconnaissance.", lesson: '4.6' },
    { q: "Which Nmap command finds live hosts on 10.40.2.0/24 without scanning any ports?", opts: ["nmap -sV 10.40.2.0/24", "nmap -sn 10.40.2.0/24", "nmap -p- 10.40.2.0/24", "nmap -A 10.40.2.0/24"], ans: 1, why: "-sn performs host discovery only.", lesson: '4.6' }
  ]
};
