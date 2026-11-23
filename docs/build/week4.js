// Week 4 plan, staged here until it is merged into course-data.js. See docs/build/BRIEF.md.
// Minutes: lessons, labs, practice, quiz and the project come from `node docs/tools/estimate_time.js 4`.
// Blocks the estimator cannot measure (tool, read, pbq, the Pentest Lab mock phases) show their arithmetic in `basis`.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[4] = {
  num: 4,
  title: 'Secure Networks and the Mock Pentest, part 1',
  modules: 'CertMaster Modules 5, 6, 9, 11',
  sub: 'Network architecture, secure protocols, wireless and cloud, then recon and scanning',
  overview: 'Your first-day walk showed that Cedar Creek\'s plant and office networks can reach each other freely. This week you find out what crosses those networks and how to lock them down. You capture and read packets with tcpdump and Wireshark, review the FW-CORE firewall rules, learn the secure replacement for every risky protocol, and see how VPNs, 802.1X, Wi-Fi security, the cloud, and plant control systems fit in. Then you switch sides: you learn reconnaissance and Nmap, and run the first half of a mock penetration test on Hack The Box practice targets. Day 2 ends with Project 4, the Colonial Pipeline frameworks and executive summary.',
  anytime: [
    { title: 'Acronyms: Week 4, set A (protocols)', href: 'Practice.html?p=acro-w4a' },
    { title: 'Acronyms: Week 4, set B (architecture, wireless, cloud, OT)', href: 'Practice.html?p=acro-w4b' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'How networks work, what crosses them, and how to lock them down',
      blocks: [
        { id: 'w4d1-b1', type: 'lesson', mins: 15, title: 'Lesson 4.1: How networks carry data', desc: 'OSI and TCP/IP layers, IP addresses and subnets, ARP and DNS, TCP versus UDP, and ports.', href: 'Lesson.html?l=4.1' },
        { id: 'w4d1-b2', type: 'lab', mins: 45, title: 'Lab 4.1: Packets on the wire with tcpdump and Wireshark', desc: 'Capture your own traffic, then find the passwords and files that cross Cedar Creek\'s plant network in cleartext.', href: 'Lab.html?l=4.1' },
        { id: 'w4d1-b3', type: 'pbq', mins: 10, title: 'PBQ Lab 5: Detect ARP poisoning with Wireshark', desc: 'A simulated capture: find the two devices that both claim to be the gateway.', href: 'SecPlus_PBQ_Labs.html?lab=5', basis: 'read scenario 1 + capture 1 + filter arp and inspect replies 4 + answer 2 questions 1 + read the score report 3 = 10' },
        { id: 'w4d1-b4', type: 'lesson', mins: 15, title: 'Lesson 4.2: Ports, protocols, and secure replacements', desc: 'The ports to know, the secure protocol for each risky one, email security (SPF, DKIM, DMARC), and DNS security.', href: 'Lesson.html?l=4.2' },
        { id: 'w4d1-b5', type: 'practice', mins: 15, title: 'Port and Protocol Sorter', desc: 'Match 23 services to their ports and say whether each is encrypted. Aim for 90% or higher.', href: 'Practice.html?p=ports-w4' },
        { id: 'w4d1-b6', type: 'lesson', mins: 15, title: 'Lesson 4.3: Secure network architecture', desc: 'Zones and segmentation, screened subnets, defense in depth, firewall types and rule order, and IDS/IPS placement.', href: 'Lesson.html?l=4.3' },
        { id: 'w4d1-b7', type: 'lab', mins: 35, title: 'Lab 4.2: Firewall rule review of FW-CORE', desc: 'Find the broad, exposed, shadowed, and stale rules in Cedar Creek\'s firewall and propose tighter ones.', href: 'Lab.html?l=4.2' },
        { id: 'w4d1-b8', type: 'pbq', mins: 10, title: 'PBQ Lab 8: Secure pfSense default user settings', desc: 'Change a firewall\'s default admin password, add a named admin, and tighten session settings.', href: 'SecPlus_PBQ_Labs.html?lab=8', basis: 'read scenario and tasks 2 + learn the console 2 + change admin password 1 + create named admin 2 + session and anti-lockout settings 2 + read the score report 1 = 10' },
        { id: 'w4d1-b9', type: 'lesson', mins: 15, title: 'Lesson 4.4: Remote access, NAC, and wireless', desc: 'VPNs and tunnels, remote administration, switch hardening, 802.1X, and WPA2/WPA3.', href: 'Lesson.html?l=4.4' },
        { id: 'w4d1-b10', type: 'pbq', mins: 10, title: 'PBQ Lab 4: Harden switch ports with port security', desc: 'Shut down unused switch ports and lock the used ones to known devices.', href: 'SecPlus_PBQ_Labs.html?lab=4', basis: 'read scenario and port table 2 + shut down 13 unused ports with Copy Settings 3 + set Lock / Classic Lock / Discard on used ports 3 + read the score report 2 = 10' },
        { id: 'w4d1-b11', type: 'pbq', mins: 10, title: 'PBQ Lab 7: Create a WPA2 wireless network', desc: 'Build a WPA2-AES staff network on a wireless controller and connect a laptop to it.', href: 'SecPlus_PBQ_Labs.html?lab=7', basis: 'read scenario and settings 2 + sign in to the controller 1 + create the WLAN (7 settings) 3 + connect Exec-Laptop 2 + read the score report 2 = 10' },
        { id: 'w4d1-b12', type: 'lesson', mins: 15, title: 'Lesson 4.6: Reconnaissance and scanning', desc: 'Rules of engagement, the five pentest phases, passive and active recon, Nmap essentials, and your Mock Pentest brief.', href: 'Lesson.html?l=4.6' },
        { id: 'w4d1-b13', type: 'lab', mins: 45, title: 'Lab 4.3: Nmap on your own lab and Cedar Creek\'s scan', desc: 'Scan services on your own Kali, then read Dee\'s authorized plant scan and find what the office can reach.', href: 'Lab.html?l=4.3' },
        { id: 'w4d1-b14', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Mock Pentest part 1, cloud and OT, and the Colonial Pipeline write-up',
      blocks: [
        { id: 'w4d2-b1', type: 'mock', mins: 20, title: 'Mock Pentest, setup: Hack The Box lab', desc: 'Create your free HTB account, open Starting Point, and connect with Pwnbox or your Kali VPN.', href: 'Pillar4_EthicalHacking.html?setup=1', basis: 'read the setup page (~600 words) 4 + create and verify an HTB account 6 + open Starting Point, spawn Meow, start Pwnbox or the Kali OpenVPN connection 8 + ping test 2 = 20' },
        { id: 'w4d2-b2', type: 'mock', mins: 60, title: 'Mock Pentest, phase 1: Reconnaissance', desc: 'Work HTB Meow and Fawn, then write the scope and recon sections of your engagement document.', href: 'Pillar4_EthicalHacking.html?phase=0', basis: 'read the Phase 1 page (~900 words) 6 + Meow (spawn 2, 2 Nmap commands 2, about 12 guided tasks at 1.25 min 15, flag and screenshot 3) 22 + Fawn (same pattern) 22 + scope and recon sections of the document 10 = 60' },
        { id: 'w4d2-b3', type: 'mock', mins: 65, title: 'Mock Pentest, phase 2: Scanning and enumeration', desc: 'Work HTB Dancing and Redeemer, build your scan table and findings, and submit your document link in Phases 1 and 2. Week 5 continues in the same document.', href: 'Pillar4_EthicalHacking.html?phase=1', due: 'Due end of Day 2', basis: 'read the Phase 2 page (~700 words) 5 + Dancing (spawn 2, Nmap and smbclient 3, about 8 guided tasks at 1.25 min 10, flag and screenshot 3) 18 + Redeemer (spawn 2, full-port scan wait 3, Nmap and redis-cli 3, about 11 guided tasks at 1.25 min 14, flag and screenshot 3) 25 + scan table, evidence and findings sections 15 + paste links and mark both phases complete 2 = 65' },
        { id: 'w4d2-b4', type: 'lesson', mins: 15, title: 'Lesson 4.5: Cloud, IoT, and operational technology', desc: 'Cloud models and shared responsibility, embedded and IoT devices, ICS and OT, zero trust, and deception.', href: 'Lesson.html?l=4.5' },
        { id: 'w4d2-b5', type: 'tool', mins: 10, title: 'MITRE ATT&CK reference: Colonial Pipeline', desc: 'Review the Technique Breakdown for the seven techniques mapped to the Colonial attack before you write Project 4.', href: 'MITRE_Attack_Map.html?panel=techniques', basis: '7 technique cards x 1 min + 3 min notes for Project 4 = 10' },
        { id: 'w4d2-b6', type: 'read', mins: 5, title: 'Optional re-read: Colonial CEO Senate testimony (June 8, 2021)', desc: 'You read this in Week 3. Skim the parts on the VPN account and the decision to shut down the pipeline.', href: 'https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/Testimony-Blount-2021-06-08.pdf', basis: 're-read, skim only: about 3 pages x 1.5 min = 4.5 -> 5' },
        { id: 'w4d2-p1', type: 'project', mins: 60, title: 'Project 4: Colonial Pipeline (2021), Frameworks and Executive Summary', desc: 'The Frameworks and Writing case study, 100 points. Map the failures to NIST CSF, name the pentest technique that would have found the weakness, and write an executive summary. Finish at home if you need to.', href: 'Project.html?p=4', due: 'Due start of Week 5' },
        { id: 'w4d2-b7', type: 'quiz', mins: 15, title: 'Week 4 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=4' },
        { id: 'w4d2-b8', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ],
  mock: {
    id: 'w4',
    title: 'Mock Pentest, part 1: Reconnaissance and Scanning',
    href: 'Pillar4_EthicalHacking.html?phase=0',
    rubric: [
      ['Scope and rules of engagement', 'States the authorized targets (the four assigned HTB machines), allowed and forbidden techniques, and why written permission matters'],
      ['Reconnaissance', 'Recon notes for each target: what was learned before and during first contact, with passive and active steps labeled correctly'],
      ['Scanning and enumeration', 'Correct Nmap commands and a complete scan table (port, protocol, state, service, version) for Meow, Fawn, Dancing, and Redeemer, including the non-standard port'],
      ['Evidence', 'Saved Nmap output or screenshots, HTB username, and the flag for each machine, organized so another analyst could repeat the work'],
      ['Findings and defender view', 'Each exposed service explained in plain language with a risk rating, a specific fix, and the matching Cedar Creek exposure']
    ]
  }
};
