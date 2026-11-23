// Week 7 mock project: Blue Team Lab, phases 1-3 (Pillar5_BlueTeam.html?phase=0..2).
// Students work in the existing Blue Team Lab page and submit one Google Doc link per phase; the page saves to
// mccoe_blueteam/{key} = { name, id, phasesCompleted, lastActivity, phase0..4 (bool), phase0_link..phase4_link }.
// Phases 4-5 (?phase=3, ?phase=4) belong to Week 8.
// `key` holds model answers for the grader. `rubricNotes` tells the grader what full marks look like for each rubric criterion.
// The phase data on the page is a training reconstruction, not a forensic record of the real incidents (see notes below).
window.MOCK_W7 = {
  id: 'w7',
  title: 'Blue Team Lab, phases 1-3',
  source: 'mccoe_blueteam',
  phases: [
    { phase: 0, href: 'Pillar5_BlueTeam.html?phase=0', title: 'Phase 1: Log Analysis (Target, 2013)', link: 'phase0_link', done: 'phase0' },
    { phase: 1, href: 'Pillar5_BlueTeam.html?phase=1', title: 'Phase 2: Threat Detection, IOC identification (SolarWinds, 2020)', link: 'phase1_link', done: 'phase1' },
    { phase: 2, href: 'Pillar5_BlueTeam.html?phase=2', title: 'Phase 3: Packet Analysis (Colonial Pipeline scenario, 2021)', link: 'phase2_link', done: 'phase2' }
  ],
  brief: [
    'Work through phases 1 to 3 of the Blue Team Lab. Each phase gives you evidence (Windows event logs, threat-hunt data, or a packet capture) and a set of questions.',
    'Answer every question for a phase in one Google Doc. Use a heading for each question number. Set sharing to "Anyone with the link can view", paste the link into the phase, and mark it complete.',
    'Explain your reasoning, not just the answer: name the log line, IOC, or packet number that supports each conclusion.',
    'Phases 4 and 5 (incident response and the defensive report) are Week 8 work.'
  ],
  key: {
    phase0: [
      { q: '1. Initial access vector', a: 'A third-party vendor account (HVAC\\fazio_svc) logging in over VPN from 208.74.1.20. Stolen vendor credentials, as in the real Target breach (Fazio Mechanical). The 2013-11-27 23:14 login is off-hours.' },
      { q: '2. Account pivoted to', a: 'TARGET\\admin (event 4776 credential validation at 23:15:02, then 4624 logon as TARGET\\admin at 23:15:09 into the POS network).' },
      { q: '3. Malware file name', a: 'track2.exe (\\POS\\bin\\track2.exe, accessed 11-27, modified 12-02).' },
      { q: '4. Exfiltration destination', a: '96.27.170.30 (FTP out, 4.2 GB, 2013-12-11 02:14).' },
      { q: '5. Days from Nov 27 to Dec 11', a: '14 days.' },
      { q: '6. Event IDs for SIEM alerts', a: '4624 (logons, especially off-hours vendor logons and a vendor source IP logging in as an internal admin), 4776 (credential validation for a different account than the one that connected), 4663 (file access or modification on POS binaries). Strong answers describe a correlation: vendor account logon followed within minutes by an admin logon from the same IP.' },
      { q: '7. Three controls', a: 'Any three of: MFA on vendor/VPN access; segmentation so vendor access cannot reach the POS network; least privilege for vendor accounts; monitoring and acting on off-hours vendor logons; application allow listing or FIM on POS systems; egress filtering / DLP to stop the FTP upload; acting on security tool alerts.' }
    ],
    phase1: [
      { q: '1. Every IOC with its type', a: 'File: SolarWinds.Orion.Core.BusinessLayer.dll, path C:\\Program Files (x86)\\SolarWinds\\Orion\\, SHA1 d0d626deb3f9484e649294a8dfa814c5eaacb685 (modified 2020-03-26). Domains: avsvmcloud.com, freescanonline.com, deftsecurity.com, thedoccloud.com. IPs: 13.59.205.66, 54.193.127.66, 5.252.177.25. Registry: HKLM\\SYSTEM\\CurrentControlSet\\Services\\SolarWinds Orion Module Engine and HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\SolarWinds. Affected hosts: SRV-DC01, WRK-025. Normal (not IOCs): windowsupdate.microsoft.com, api.github.com, 8.8.8.8.' },
      { q: '2. Definitely malicious vs suspicious', a: 'Definitely: the modified Orion DLL (a signed product file that should not change after install), avsvmcloud.com (contacted by two hosts, same C2), 5.252.177.25 (labeled known C2), the new Run key. Suspicious, needing more evidence: the other three domains and the two AWS addresses (cloud IPs can be legitimate).' },
      { q: '3. Hunting across 500 machines', a: 'Push the IOCs to the SIEM/EDR: search DNS and proxy logs for the domains, firewall/NetFlow for the IPs, EDR for the file hash and Run key, then list every host with a hit and isolate. Strong answers mention a retro-hunt over historical logs, not just new events.' },
      { q: '4. SIEM rule for the C2 traffic', a: 'Example: alert when any host resolves or connects to a domain/IP on the threat-intel list, or when a server (especially the Orion server or a DC) makes DNS queries to newly seen domains followed by outbound HTTPS to cloud IPs. Must name source logs, condition, and action.' },
      { q: '5. Purpose of the Run key', a: 'Persistence: a value under ...\\CurrentVersion\\Run starts the program every time a user logs on, so the malware survives reboots.' }
    ],
    phase2: [
      { q: '1. Step-by-step narrative', a: '1-2 internal DNS lookup of the VPN host; 3-6 external 185.220.101.9 connects to the VPN on 443 (TCP handshake, TLS hello); 7 VPN authentication succeeds (valid credentials); 8 ping sweep of 10.10.10.0/24 (discovery); 9-10 connects to FTP on 10.10.10.22, banner vsFTPd 2.3.4 (known backdoored version); 11 USER smiley:) triggers the backdoor (CVE-2011-2523); 12 backdoor opens port 6200; 13 attacker connects to 6200, root shell; 14 command output streams back; 15 uploads payload.exe; 16-17 SMB share enumeration across 10.10.0.0/16 (lateral movement discovery).' },
      { q: '2. Root access packet', a: 'Packet 13: the attacker connects to port 6200, the shell the vsftpd backdoor opened in packet 12. Accept 12-13 with that explanation.' },
      { q: '3. Packet 15 upload', a: 'payload.exe uploaded by FTP STOR: staging a tool or malware (for example ransomware) on the foothold for the next stage. Significant because it shows intent to spread or deploy, not just look around.' },
      { q: '4. Packets 16-17', a: 'SMB share enumeration from the compromised host across the internal network: discovery for lateral movement.' },
      { q: '5. Three filter/SIEM rules', a: 'Examples: ftp.request.command == "USER" && ftp.request.arg contains ":)"; tcp.port == 6200; ip.src == 185.220.101.9; VPN auth success from an anonymizing or never-seen source IP; one internal host sending ICMP to a whole subnet; SMB enumeration from a server that never does it.' },
      { q: '6. Control that blocks packet 3', a: 'A firewall/NGFW rule restricting who can reach the VPN (allow-list known source ranges, geo-IP or IP-reputation blocking of anonymizing networks). Note for grading: MFA would have stopped packet 7 (the login), not packet 3, so credit MFA only if the student says so explicitly.' }
    ],
    accuracyNotes: [
      'Phase 1 log lines are a training reconstruction. The real Target intruders did enter with credentials stolen from Fazio Mechanical, but account names, file names, and addresses here are illustrative.',
      'Phase 3 is a simulated capture built around the Colonial Pipeline story. The real Colonial intrusion used a compromised password for a VPN account without MFA (CEO testimony, June 2021). The vsftpd backdoor steps did not happen at Colonial. Do not mark students down for saying so.'
    ]
  },
  rubricNotes: [
    'Log analysis (phase 1). Full marks: correct vector (vendor VPN account), pivot (TARGET\\admin), malware (track2.exe), destination (96.27.170.30), 14 days, each tied to the log line that proves it.',
    'IOC identification (phase 2). Full marks: every IOC listed with the right type (file/hash/path, 4 domains, 3 IPs, 2 registry keys), a sensible malicious vs suspicious split, and the Run key explained as persistence.',
    'Packet analysis (phase 3). Full marks: a narrative that follows packets 1-17 in order, root shell at packet 13 (12-13 accepted with reasoning), payload.exe as staging, 16-17 as SMB enumeration for lateral movement.',
    'Detection engineering (all phases). Full marks: event IDs 4624/4776/4663 with what to alert on, a phase 2 SIEM rule and phase 3 filters that name the data source, the condition, and the action, and a hunt plan that searches past logs.',
    'Defensive recommendations and writing. Full marks: at least three controls that each map to a specific failure (MFA and segmentation for vendor access, egress filtering, VPN source restrictions, acting on alerts), written clearly with a heading per question.'
  ]
};
