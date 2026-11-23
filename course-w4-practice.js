// Week 4 practice sets. Shapes: docs/COURSE_V2.md
// Practice ids contain 'w4' so Practice.html loads this file.
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['ports-w4'] = {
  title: 'Port and Protocol Sorter',
  kind: 'sort',
  instructions: 'For each service, choose its default port and whether it protects data in transit with encryption. Read the explanation after each one: knowing which secure protocol replaces an insecure one is what the exam tests most.',
  dims: [
    { key: 'port', label: 'Port', options: ['20/21', '22', '23', '25', '53', '67/68', '80', '110', '123', '143', '161/162', '389', '443', '445', '502', '514', '587', '636', '993', '995', '1812/1813', '3389'] },
    { key: 'enc', label: 'Encrypted?', options: ['Encrypted', 'Cleartext'] }
  ],
  items: [
    { text: 'FTP: the original file transfer protocol, used at Cedar Creek to send CNC programs to Line 2.', answers: { port: ['20/21'], enc: ['Cleartext'] }, why: 'FTP uses 21 for commands and 20 (or a high port in passive mode) for data. Logins and files cross in cleartext, as you saw in Lab 4.1. Replace with SFTP or FTPS.' },
    { text: 'SSH: secure remote command line, also carrying SFTP and SCP file transfers.', answers: { port: ['22'], enc: ['Encrypted'] }, why: 'SSH on 22 encrypts the whole session. It replaces Telnet for logins and FTP (as SFTP) for file transfer.' },
    { text: 'SFTP: file transfer that runs inside SSH.', answers: { port: ['22'], enc: ['Encrypted'] }, why: 'SFTP uses the SSH connection on port 22. Do not confuse it with FTPS, which is FTP with TLS added.' },
    { text: 'Telnet: remote command line, still running on LINE2-CNC03.', answers: { port: ['23'], enc: ['Cleartext'] }, why: 'Telnet on 23 sends usernames, passwords, and commands unencrypted. Replace with SSH.' },
    { text: 'SMTP: mail relayed from one mail server to another.', answers: { port: ['25'], enc: ['Cleartext'] }, why: 'Server-to-server SMTP uses 25 and is cleartext unless the servers upgrade the connection with STARTTLS.' },
    { text: 'Mail submission: an email client handing outgoing mail to its server with TLS.', answers: { port: ['587'], enc: ['Encrypted'] }, why: 'Port 587 is mail submission, normally upgraded to TLS. Port 465 (SMTPS) is also used for encrypted submission.' },
    { text: 'DNS: turning names into IP addresses.', answers: { port: ['53'], enc: ['Cleartext'] }, why: 'DNS uses 53 (UDP for most lookups, TCP for large ones). It is unencrypted; DNSSEC adds signatures, and DoH or DoT add encryption.' },
    { text: 'DHCP: handing out IP addresses, gateways, and DNS settings.', answers: { port: ['67/68'], enc: ['Cleartext'] }, why: 'DHCP servers listen on UDP 67 and clients on 68. It has no authentication, which is why rogue DHCP servers are a threat.' },
    { text: 'HTTP: plain web traffic, used by the HVAC vendor to log in to HVAC-CTRL.', answers: { port: ['80'], enc: ['Cleartext'] }, why: 'HTTP on 80 is cleartext. The Basic authentication header you decoded in Lab 4.1 was only Base64-encoded. Replace with HTTPS.' },
    { text: 'HTTPS: web traffic protected by TLS.', answers: { port: ['443'], enc: ['Encrypted'] }, why: 'HTTPS on 443 wraps HTTP in TLS. Many TLS VPNs also use 443.' },
    { text: 'POP3: downloading mail from a server without encryption.', answers: { port: ['110'], enc: ['Cleartext'] }, why: 'POP3 on 110 is cleartext. POP3S on 995 is the secure version.' },
    { text: 'POP3S: downloading mail over TLS.', answers: { port: ['995'], enc: ['Encrypted'] }, why: 'POP3S uses 995.' },
    { text: 'IMAP: reading mail that stays on the server, without encryption.', answers: { port: ['143'], enc: ['Cleartext'] }, why: 'IMAP on 143 is cleartext. IMAPS on 993 is the secure version.' },
    { text: 'IMAPS: reading server-side mail over TLS.', answers: { port: ['993'], enc: ['Encrypted'] }, why: 'IMAPS uses 993.' },
    { text: 'NTP: keeping clocks synchronized so log timestamps line up.', answers: { port: ['123'], enc: ['Cleartext'] }, why: 'NTP uses UDP 123 and is not encrypted. Accurate time matters for logs, certificates, and Kerberos.' },
    { text: 'SNMP version 2c: NETMON-01 polling devices with a community string.', answers: { port: ['161/162'], enc: ['Cleartext'] }, why: 'SNMP queries go to UDP 161 and traps to 162. Versions 1 and 2c send the community string in cleartext; SNMPv3 adds authentication and encryption.' },
    { text: 'LDAP: looking up users and groups in the directory without encryption.', answers: { port: ['389'], enc: ['Cleartext'] }, why: 'LDAP uses 389. Upgrade with STARTTLS or use LDAPS.' },
    { text: 'LDAPS: directory lookups over TLS.', answers: { port: ['636'], enc: ['Encrypted'] }, why: 'LDAPS uses 636.' },
    { text: 'SMB: Windows file sharing to FS-HR01 and ENG-FS01.', answers: { port: ['445'], enc: ['Cleartext', 'Encrypted'] }, why: 'SMB uses TCP 445. Older versions are cleartext; SMB 3 can encrypt if it is turned on, so either answer earns credit. Never expose 445 to the internet.' },
    { text: 'RDP: Remote Desktop to a Windows server, forwarded from one vendor internet address by FW-CORE rule 14.', answers: { port: ['3389'], enc: ['Encrypted'] }, why: 'RDP on 3389 is encrypted, but exposing it to the internet invites password guessing and exploits. Reach it through a VPN with MFA and a jump server.' },
    { text: 'Syslog: devices sending their log messages to a collector.', answers: { port: ['514'], enc: ['Cleartext'] }, why: 'Traditional syslog uses UDP 514 in cleartext. Syslog over TLS is the secure option.' },
    { text: 'RADIUS: a switch or access point asking the server whether to let an 802.1X user on.', answers: { port: ['1812/1813'], enc: ['Cleartext'] }, why: 'RADIUS uses UDP 1812 (authentication) and 1813 (accounting). It hides only the password field; the rest is readable, so it belongs on a protected network.' },
    { text: 'Modbus/TCP: the Line 2 HMI reading values from LINE2-PLC.', answers: { port: ['502'], enc: ['Cleartext'] }, why: 'Modbus/TCP uses 502 and has no encryption and no login. Anyone who can reach port 502 can send commands, so it must be isolated by segmentation.' }
  ]
};

COURSE_PRACTICE['acro-w4a'] = {
  title: 'Acronyms: Week 4, set A (protocols)',
  kind: 'flash',
  items: [
    { term: 'TCP', definition: 'Transmission Control Protocol. Connection-oriented transport that opens with a three-way handshake and resends lost data.' },
    { term: 'UDP', definition: 'User Datagram Protocol. Connectionless transport that sends without checking delivery; used by DNS, NTP, voice, and video.' },
    { term: 'IP', definition: 'Internet Protocol. Layer 3 addressing and routing of packets between networks.' },
    { term: 'ICMP', definition: 'Internet Control Message Protocol. Carries error and test messages; ping uses ICMP echo request and reply.' },
    { term: 'ARP', definition: 'Address Resolution Protocol. Finds the MAC address that belongs to an IP address on the local network. It has no authentication, which allows ARP poisoning.' },
    { term: 'DHCP', definition: 'Dynamic Host Configuration Protocol. Hands out IP addresses, gateways, and DNS settings automatically (UDP 67/68).' },
    { term: 'DNS', definition: 'Domain Name System. Turns names into IP addresses (port 53).' },
    { term: 'DNSSEC', definition: 'Domain Name System Security Extensions. Signs DNS records so answers can be verified. Protects integrity, not confidentiality.' },
    { term: 'NAT', definition: 'Network Address Translation. Lets many private addresses share one public address.' },
    { term: 'PAT', definition: 'Port Address Translation. The common form of NAT that tells sessions apart by port number.' },
    { term: 'NTP', definition: 'Network Time Protocol. Keeps clocks synchronized (UDP 123), which keeps log timestamps consistent.' },
    { term: 'SNMP', definition: 'Simple Network Management Protocol. Monitors and manages network devices (UDP 161/162). Only SNMPv3 is encrypted.' },
    { term: 'SMB', definition: 'Server Message Block. Windows file and printer sharing on TCP 445.' },
    { term: 'RDP', definition: 'Remote Desktop Protocol. Graphical remote control of Windows systems on TCP 3389. Never expose it directly to the internet.' },
    { term: 'SSH', definition: 'Secure Shell. Encrypted remote command line and file transfer on TCP 22. Replaces Telnet.' },
    { term: 'FTP', definition: 'File Transfer Protocol. Cleartext file transfer on TCP 20/21.' },
    { term: 'FTPS', definition: 'File Transfer Protocol Secure. FTP with TLS encryption added. Different from SFTP, which runs inside SSH.' },
    { term: 'HTTPS', definition: 'Hypertext Transfer Protocol Secure. Web traffic protected by TLS on TCP 443.' },
    { term: 'LDAPS', definition: 'Lightweight Directory Access Protocol Secure. Directory lookups over TLS on TCP 636.' },
    { term: 'SMTPS', definition: 'Simple Mail Transfer Protocol Secure. Sending mail over TLS (commonly port 465).' },
    { term: 'SPF', definition: 'Sender Policy Framework. A DNS record listing the servers allowed to send email for a domain.' },
    { term: 'DMARC', definition: 'Domain-Based Message Authentication, Reporting, and Conformance. Tells receivers what to do with mail that fails SPF and DKIM, and sends reports to the domain owner.' }
  ]
};

COURSE_PRACTICE['acro-w4b'] = {
  title: 'Acronyms: Week 4, set B (architecture, wireless, cloud, OT)',
  kind: 'flash',
  items: [
    { term: 'VLAN', definition: 'Virtual Local Area Network. Splits one physical switch into separate logical networks.' },
    { term: 'DMZ', definition: 'Demilitarized Zone. A screened subnet between firewalls for systems the internet must reach.' },
    { term: 'ACL', definition: 'Access Control List. An ordered list of allow and deny rules on a router, switch, or firewall.' },
    { term: 'NGFW', definition: 'Next-Generation Firewall. A firewall that understands applications and users (Layer 7), often with built-in intrusion prevention.' },
    { term: 'UTM', definition: 'Unified Threat Management. One appliance combining firewall, IPS, antivirus, and web filtering, common at smaller sites.' },
    { term: 'WAF', definition: 'Web Application Firewall. Inspects web requests to block attacks such as SQL injection and cross-site scripting.' },
    { term: 'NIDS', definition: 'Network-Based Intrusion Detection System. Watches a copy of network traffic and raises alerts.' },
    { term: 'NIPS', definition: 'Network-Based Intrusion Prevention System. Sits inline and can block malicious traffic.' },
    { term: 'NAC', definition: 'Network Access Control. Checks a device\'s identity and health before it is allowed on the network.' },
    { term: 'VPN', definition: 'Virtual Private Network. An encrypted tunnel across an untrusted network.' },
    { term: 'IPSec', definition: 'Internet Protocol Security. Layer 3 VPN protocol suite: AH for integrity and authentication, ESP for encryption, IKE for keys.' },
    { term: 'RADIUS', definition: 'Remote Authentication Dial-In User Service. The authentication server behind 802.1X and many VPNs (UDP 1812/1813).' },
    { term: 'EAP', definition: 'Extensible Authentication Protocol. The framework that carries credentials in 802.1X; EAP-TLS uses certificates on both sides.' },
    { term: 'SSID', definition: 'Service Set Identifier. The name of a wireless network, such as CC-PLANT.' },
    { term: 'WPA3', definition: 'Wi-Fi Protected Access 3. Current wireless security standard; its SAE handshake resists offline password guessing.' },
    { term: 'PSK', definition: 'Pre-Shared Key. One passphrase shared by everyone on a Personal-mode wireless network.' },
    { term: 'SDN', definition: 'Software-Defined Networking. Separates the control plane (decisions) from the data plane (forwarding) so networks can be managed centrally.' },
    { term: 'SD-WAN', definition: 'Software-Defined Wide Area Network. Software-managed connections between sites over several kinds of links.' },
    { term: 'IaaS', definition: 'Infrastructure as a Service. Rented virtual machines, storage, and networks; the customer manages the OS and up.' },
    { term: 'ICS', definition: 'Industrial Control System. The OT that runs a plant or utility: PLCs, HMIs, and their networks.' },
    { term: 'SCADA', definition: 'Supervisory Control and Data Acquisition. Monitors and controls equipment spread over a wide area, such as pipelines and power grids.' },
    { term: 'OT', definition: 'Operational Technology. Hardware and software that monitors and controls physical processes. Safety and availability come first.' }
  ]
};
