// Week 7 practice sets. Shapes: docs/COURSE_V2.md
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['tools-w7'] = {
  title: 'Defensive Tool Sorter',
  kind: 'sort',
  instructions: 'Each item describes something a security tool did. Choose the tool that did it and the type of control it acted as: preventive (stops it), detective (finds or records it), or corrective (repairs or limits the damage). Where two answers are defensible, both earn credit. Read the explanation after each one.',
  dims: [
    { key: 'tool', label: 'Tool', options: ['Firewall', 'IDS', 'IPS', 'SIEM', 'Antivirus', 'EDR', 'DLP', 'Patch management'] },
    { key: 'type', label: 'Type', options: ['Preventive', 'Detective', 'Corrective'] }
  ],
  items: [
    { text: 'Blocks every inbound connection from the internet except the VPN portal on port 443.', answers: { tool: ['Firewall'], type: ['Preventive'] }, why: 'Rules that allow or deny connections by port and address are the firewall\'s job. Blocking stops the connection before it happens, so it is preventive.' },
    { text: 'Receives a copy of traffic from a SPAN port and emails the SOC when it sees a known exploit pattern.', answers: { tool: ['IDS'], type: ['Detective'] }, why: 'A sensor that gets a copy of the traffic and only alerts is an IDS. Alerting is detective.' },
    { text: 'Sits inline in front of the web servers and drops packets that match an exploit signature.', answers: { tool: ['IPS'], type: ['Preventive'] }, why: 'Inline and able to drop traffic means IPS. Dropping the attack before it arrives is preventive.' },
    { text: 'Raises one alert when 30 failed sign-ins from one PC are followed by a successful sign-in from that same PC.', answers: { tool: ['SIEM'], type: ['Detective'] }, why: 'Linking events across time and a shared source is a SIEM correlation rule. It finds the attack; it does not stop it.' },
    { text: 'Finds a downloaded file\'s hash in its list of known malware and quarantines the file.', answers: { tool: ['Antivirus'], type: ['Preventive', 'Corrective'] }, why: 'Matching a known hash is signature-based antivirus. Quarantining before the file runs prevents infection; if it had already run, removing it is corrective.' },
    { text: 'Sees Excel launch PowerShell with an encoded command, kills the process, and isolates the laptop from the network.', answers: { tool: ['EDR'], type: ['Corrective', 'Preventive'] }, why: 'Behavior detection with automatic response is EDR. Killing the process and isolating the host limits the damage and stops the spread.' },
    { text: 'Blocks an outgoing email that contains 40 Social Security numbers.', answers: { tool: ['DLP'], type: ['Preventive'] }, why: 'Spotting sensitive data on its way out is data loss prevention. Blocking it is preventive.' },
    { text: 'Installs Microsoft\'s monthly security updates on every office PC after a week of testing.', answers: { tool: ['Patch management'], type: ['Preventive'] }, why: 'Fixing known vulnerabilities before attackers use them prevents the attack.' },
    { text: 'Rolls back files that ransomware encrypted on a laptop to their state before the attack.', answers: { tool: ['EDR'], type: ['Corrective'] }, why: 'Some EDR products can roll back changes made by malicious processes. Restoring normal operation after damage is corrective.' },
    { text: 'Keeps 90 days of logs from every server and firewall so an investigation can reconstruct what happened.', answers: { tool: ['SIEM'], type: ['Detective'] }, why: 'Central log retention is a SIEM function. It supports finding and investigating events.' },
    { text: 'Denies office PCs from connecting to the internet on any port except 80 and 443.', answers: { tool: ['Firewall'], type: ['Preventive'] }, why: 'This is egress filtering with firewall rules. It would have stopped MKT-LT-02\'s beacon on port 8443.' },
    { text: 'Alerts when a server sends 40 times its normal amount of data at 3 AM, based on a learned baseline.', answers: { tool: ['IDS'], type: ['Detective'] }, why: 'Comparing traffic with a learned baseline and alerting is anomaly-based intrusion detection.' },
    { text: 'Alerts, without blocking, when a user copies 2.3 GB of Confidential drawings to a USB drive.', answers: { tool: ['DLP'], type: ['Detective'] }, why: 'Watching labeled data move to removable media is DLP. In alert-only mode it is detective.' },
    { text: 'Installs the vendor\'s fixed firmware on FW-CORE to close a Critical flaw in the VPN portal.', answers: { tool: ['Patch management'], type: ['Preventive', 'Corrective'] }, why: 'Applying a fix is patch management. It prevents exploitation of the flaw; it also corrects a known weakness, so both are accepted.' },
    { text: 'Shows the SOC a dashboard of top denied sources, alert counts, and sign-in failures from every log source.', answers: { tool: ['SIEM'], type: ['Detective'] }, why: 'Dashboards across many sources are part of a SIEM. They help people notice problems.' },
    { text: 'Rejects a request to the customer web portal because it contains a SQL injection string.', answers: { tool: ['Firewall', 'IPS'], type: ['Preventive'] }, why: 'A web application firewall (WAF) is the classic answer, and an IPS with a SQL injection signature can do the same. Rejecting the request is preventive.' },
    { text: 'Resets the connection when an outbound session matches a known command and control rule.', answers: { tool: ['IPS'], type: ['Preventive'] }, why: 'Acting inline on a signature match is an IPS. Cutting off the C2 channel stops the attacker\'s control.' },
    { text: 'Adds a rule that blocks attacks against a known flaw on a server that cannot be patched yet (a virtual patch).', answers: { tool: ['IPS'], type: ['Preventive'] }, why: 'A virtual patch is an IPS or WAF rule that blocks attacks on a specific flaw. It is a compensating control that works by prevention.' },
    { text: 'Rescans every system after deployment to confirm the update is installed and the vulnerability is gone.', answers: { tool: ['Patch management'], type: ['Detective'] }, why: 'Verifying is the last step of the patch cycle. A rescan finds systems the deployment missed.' },
    { text: 'Records every process start, network connection, and registry change on each laptop for later investigation.', answers: { tool: ['EDR'], type: ['Detective'] }, why: 'Continuous endpoint telemetry is what EDR collects. Recording activity is detective.' },
    { text: 'Writes a log line for every allowed and denied connection at the perimeter, with ports and bytes.', answers: { tool: ['Firewall'], type: ['Detective'] }, why: 'Firewall logging is detective. It is what you read in Lab 7.1.' },
    { text: 'Removes an adware program it found on a sales PC and cleans up the startup entries it left behind.', answers: { tool: ['Antivirus', 'EDR'], type: ['Corrective'] }, why: 'Both antivirus and EDR can remove a detected program. Cleaning up after an infection is corrective.' },
    { text: 'Running in alert-only mode, flags HR\'s connection to the payroll portal on port 8443. The connection was harmless.', answers: { tool: ['IDS', 'IPS'], type: ['Detective'] }, why: 'An IPS in alert-only mode behaves like an IDS. The alert was a false positive, but alerting is still detective.' },
    { text: 'Converts time stamps from five log formats into one format so events can be sorted into a single timeline.', answers: { tool: ['SIEM'], type: ['Detective'] }, why: 'Normalization is the second step of the SIEM pipeline and makes correlation possible.' }
  ]
};

COURSE_PRACTICE['acro-w7a'] = {
  title: 'Acronyms: Week 7, set A (network defense)',
  kind: 'flash',
  items: [
    { term: 'ACL', definition: 'Access Control List. An ordered list of rules that allows or denies traffic or access, read from the top until the first match.' },
    { term: 'DMZ', definition: 'Demilitarized Zone. Older name for a screened subnet: a zone between firewalls for servers the internet must reach.' },
    { term: 'NGFW', definition: 'Next-Generation Firewall. A layer 7 firewall that identifies applications and users and often includes IPS and TLS inspection.' },
    { term: 'UTM', definition: 'Unified Threat Management. One appliance that combines firewall, IPS, antivirus, web filtering, and often VPN.' },
    { term: 'WAF', definition: 'Web Application Firewall. Protects one web application by inspecting HTTP requests for attacks such as SQL injection and XSS.' },
    { term: 'IDS', definition: 'Intrusion Detection System. Watches traffic or a host and alerts on suspected attacks. Passive; does not block.' },
    { term: 'IPS', definition: 'Intrusion Prevention System. Sits inline and can block suspected attacks automatically.' },
    { term: 'NIDS', definition: 'Network-Based Intrusion Detection System. Watches traffic on a network segment, usually from a tap or SPAN port.' },
    { term: 'NIPS', definition: 'Network-Based Intrusion Prevention System. An inline network sensor that can drop malicious traffic.' },
    { term: 'HIDS', definition: 'Host-Based Intrusion Detection System. Software on one computer that watches its processes, files, and logs and alerts.' },
    { term: 'HIPS', definition: 'Host-Based Intrusion Prevention System. Like a HIDS, but it can block suspicious activity on that computer.' },
    { term: 'WIDS', definition: 'Wireless Intrusion Detection System. Watches Wi-Fi radio traffic for rogue access points and wireless attacks.' },
    { term: 'WIPS', definition: 'Wireless Intrusion Prevention System. A WIDS that can also act, for example by containing a rogue access point.' },
    { term: 'NAC', definition: 'Network Access Control. Checks a device (and often its user) before letting it join the network.' },
    { term: 'VPN', definition: 'Virtual Private Network. An encrypted tunnel that lets remote users or sites reach the company network safely.' },
    { term: 'NAT', definition: 'Network Address Translation. Rewrites private inside addresses to a public address at the edge, such as Cedar Creek\'s 198.51.100.24.' },
    { term: 'VLAN', definition: 'Virtual Local Area Network. Splits one physical switch network into separate logical networks.' },
    { term: 'TLS', definition: 'Transport Layer Security. The protocol that encrypts web traffic (HTTPS). Inspecting it requires decryption with a trusted certificate.' },
    { term: 'SDN', definition: 'Software-Defined Networking. Network behavior controlled centrally by software instead of device by device.' },
    { term: 'RTBH', definition: 'Remotely Triggered Black Hole. A routing technique that drops traffic to or from a target at the network edge, often used against DDoS attacks.' }
  ]
};

COURSE_PRACTICE['acro-w7b'] = {
  title: 'Acronyms: Week 7, set B (monitoring, endpoints, patching)',
  kind: 'flash',
  items: [
    { term: 'SIEM', definition: 'Security Information and Event Management. Collects, normalizes, and correlates logs from many sources and raises alerts.' },
    { term: 'SOC', definition: 'Security Operations Center. The team, and often the room, that monitors alerts and responds to incidents.' },
    { term: 'EDR', definition: 'Endpoint Detection and Response. Records endpoint behavior, detects suspicious activity, and can kill, quarantine, or isolate.' },
    { term: 'XDR', definition: 'Extended Detection and Response. EDR-style detection across endpoints, email, identity, network, and cloud in one platform.' },
    { term: 'AV', definition: 'Antivirus. Scans files and compares them with signatures of known malware.' },
    { term: 'DLP', definition: 'Data Loss Prevention. Detects and blocks sensitive data leaving where it belongs, by email, upload, or USB.' },
    { term: 'FIM', definition: 'File Integrity Monitoring. Records hashes of important files and alerts when one changes.' },
    { term: 'FDE', definition: 'Full-Disk Encryption. Encrypts a whole drive so a lost or stolen device does not expose its data.' },
    { term: 'ELK', definition: 'Elasticsearch, Logstash, and Kibana. An open-source stack often used to build a SIEM: store and search, collect and parse, visualize.' },
    { term: 'SNMP', definition: 'Simple Network Management Protocol. Used to monitor network devices; SNMP traps are short event messages a device sends.' },
    { term: 'NTP', definition: 'Network Time Protocol. Keeps device clocks in sync so log time stamps can be correlated.' },
    { term: 'IoC', definition: 'Indicator of Compromise. Evidence of an attack, such as a malicious IP address, domain, file hash, or registry key.' },
    { term: 'CVE', definition: 'Common Vulnerabilities and Exposures. The ID system for publicly known vulnerabilities, such as CVE-2017-5638.' },
    { term: 'CVSS', definition: 'Common Vulnerability Scoring System. Scores a vulnerability from 0 to 10: Low, Medium, High, or Critical.' },
    { term: 'TTP', definition: 'Tactics, Techniques, and Procedures. How an attacker operates, as described in frameworks such as MITRE ATT&CK.' },
    { term: 'OVAL', definition: 'Open Vulnerability and Assessment Language. A standard way to describe how to check a system for a vulnerability or configuration.' },
    { term: 'CIS', definition: 'Center for Internet Security. Publishes the CIS Benchmarks, free secure-configuration baselines for many systems.' },
    { term: 'MTTR', definition: 'Mean Time to Repair (or Recover). The average time to restore a system after a failure. SOCs also track mean time to respond.' },
    { term: 'SLA', definition: 'Service-Level Agreement. A promised level of service, such as patching Critical flaws within 48 hours.' },
    { term: 'IR', definition: 'Incident Response. The organized process for handling a security incident, covered in Week 8.' }
  ]
};
