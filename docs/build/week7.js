// Week 7 plan (staging). Merge into course-data.js COURSE.weeks[6] when approved. See docs/build/week7-notes.md.
window.COURSE_STAGING = window.COURSE_STAGING || {};
window.COURSE_STAGING[7] = {
  num: 7, title: 'Defensive Security and Tools', modules: 'Security+ SY0-701 objectives 2.3, 3.2, 4.1, 4.3, 4.4, 4.5, 4.9',
  sub: 'Firewalls, IDS/IPS, SIEM, EDR, and patching, and the Blue Team Lab',
  overview: 'Monday morning at Cedar Creek: the firewall, the IPS, and the EDR console sent dozens of alerts over the weekend and nobody read them. This week you learn how each defensive tool works (firewalls, intrusion detection and prevention, the SIEM, antivirus and EDR, and patch management), then use the weekend\'s logs to find out what really happened. You work phases 1 to 3 of the Blue Team Lab, practice SOC triage decisions in the simulator, and start Project 7, the Equifax breach, where an expired certificate and a missed patch let attackers stay hidden for 76 days.',
  anytime: [
    { title: 'Acronyms: Week 7, set A (network defense)', href: 'Practice.html?p=acro-w7a' },
    { title: 'Acronyms: Week 7, set B (monitoring, endpoints, patching)', href: 'Practice.html?p=acro-w7b' },
    { title: 'Optional: TryHackMe SOC Level 1 path (free account; start with the Intro to SIEM room)', href: 'https://tryhackme.com/path/outline/soclevel1' },
    { title: 'Reference: Snort, the open-source IDS/IPS', href: 'https://www.snort.org/' },
    { title: 'Reference: Microsoft Sentinel documentation (cloud SIEM)', href: 'https://learn.microsoft.com/en-us/azure/sentinel/' }
  ],
  days: [
    {
      name: 'Day 1', focus: 'Firewalls, intrusion detection, and the SIEM',
      blocks: [
        { id: 'w7d1-b1', type: 'lesson', mins: 20, title: 'Lesson 7.1: Firewalls and network defense', desc: 'Stateless, stateful, and next-generation firewalls; WAF and UTM; rules in both directions; screened subnets; reading a firewall log.', href: 'Lesson.html?l=7.1' },
        { id: 'w7d1-b2', type: 'lab', mins: 45, title: 'Lab 7.1: Read the weekend firewall log', desc: 'Download the Week 7 lab pack and use grep, awk, sort, and uniq on FW-CORE\'s log to separate internet noise from the one pattern an over-broad allow rule let through.', href: 'Lab.html?l=7.1' },
        { id: 'w7d1-b3', type: 'lesson', mins: 15, title: 'Lesson 7.2: Intrusion detection and prevention', desc: 'IDS vs IPS, network vs host, signature vs anomaly, true and false positives, tuning, and the Equifax certificate that blinded a sensor.', href: 'Lesson.html?l=7.2' },
        { id: 'w7d1-b4', type: 'tool', mins: 15, title: 'SOC Simulator: three alerts, seven decisions', desc: 'Work the ransomware, suspicious login, and insider threat scenarios as the on-call analyst. Replay any scenario where you lost points.', href: 'CyberSec_Academy.html?scr=soc', basis: '3 scenarios, 7 decisions x (1.4 min reading the alert, options, and feedback + 0.5 min deciding) = 13.3, + replaying one missed decision = 15' },
        { id: 'w7d1-b5', type: 'lesson', mins: 15, title: 'Lesson 7.3: SIEM and log analysis', desc: 'Log sources and Windows event IDs, the SIEM pipeline, correlation rules in plain English, and from alert to action.', href: 'Lesson.html?l=7.3' },
        { id: 'w7d1-b6', type: 'lab', mins: 50, title: 'Lab 7.2: Correlate like a SIEM', desc: 'Combine IPS, EDR, DNS, firewall, and domain controller logs into one timeline of how MKT-LT-02 was compromised.', href: 'Lab.html?l=7.2' },
        { id: 'w7d1-b7', type: 'mock', mins: 45, title: 'Blue Team Lab, phase 1: Log analysis', desc: 'Reconstruct the Target intrusion from Windows event logs: vector, pivot account, malware, exfiltration, and the SIEM alerts that would have caught it. Answer in a Google Doc and submit the link.', href: 'Pillar5_BlueTeam.html?phase=0', basis: 'Page and 8-line log about 260 words = 2 min + studying the log 3 min; 5 short answers x 3 = 15; 2 long answers (event IDs, three controls) x 10 = 20; Google Doc set-up and link 3 = 43 -> 45' },
        { id: 'w7d1-b8', type: 'lesson', mins: 15, title: 'Lesson 7.4: Endpoint security: antivirus, EDR, and hardening', desc: 'Signatures vs behavior, EDR response and policies, secure baselines, allow lists, FIM, and DLP.', href: 'Lesson.html?l=7.4' },
        { id: 'w7d1-b9', type: 'practice', mins: 15, title: 'Defensive Tool Sorter', desc: 'Match 24 actions to the tool that did them and the control type. Aim for 90% or higher.', href: 'Practice.html?p=tools-w7' },
        { id: 'w7d1-b10', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
      ]
    },
    {
      name: 'Day 2', focus: 'Threat hunting, packet analysis, patching, and the Equifax case',
      blocks: [
        { id: 'w7d2-b1', type: 'mock', mins: 55, title: 'Blue Team Lab, phase 2: Threat detection (IOCs)', desc: 'Hunt through SolarWinds file integrity, DNS, NetFlow, and registry data. List every indicator of compromise, judge which are malicious, and write a SIEM rule for the C2 traffic.', href: 'Pillar5_BlueTeam.html?phase=1', basis: 'Page, IOC card, and hunt data about 360 words = 3 min + studying the data 5 min; 4 long answers (IOC list, malicious vs suspicious, hunt plan, SIEM rule) x 10 = 40; 1 short answer x 3 = 3; Google Doc and link 3 = 54 -> 55' },
        { id: 'w7d2-b2', type: 'lesson', mins: 15, title: 'Lesson 7.5: Patch management', desc: 'The patch cycle, what to patch first, compensating controls when you cannot patch, and the WannaCry and Equifax timelines.', href: 'Lesson.html?l=7.5' },
        { id: 'w7d2-b3', type: 'lab', mins: 45, title: 'Lab 7.3: Patch management: Kali and the Cedar Creek patch report', desc: 'Snapshot, update, and verify your Kali VM; triage Cedar Creek\'s patch report with awk; look up EternalBlue and the Equifax flaw in the NVD.', href: 'Lab.html?l=7.3' },
        { id: 'w7d2-b4', type: 'mock', mins: 50, title: 'Blue Team Lab, phase 3: Packet analysis', desc: 'Read a 17-packet capture packet by packet, find where the attacker got a root shell, and write the filters that would have caught it. Submit phases 1 to 3 by the end of today.', href: 'Pillar5_BlueTeam.html?phase=2', due: 'Phases 1-3 due end of Day 2', basis: 'Page and reference tables about 420 words = 3 min + 17 packets x 0.5 min = 8.5; 2 long answers (narrative, three filters) x 10 = 20; 4 short answers x 3 = 12; Google Doc and link 3 = 46.5 -> 50' },
        { id: 'w7d2-r1', type: 'read', mins: 20, title: 'Source: GAO-18-559, Actions Taken by Equifax and Federal Agencies', desc: 'Read the Highlights page and pages 11 to 16 (how the attackers got in, how they stayed hidden, and the factors Equifax identified). Note the expired certificate and the 76 days.', href: 'https://www.gao.gov/products/gao-18-559', basis: 'Highlights 1 page + pages 11-16 (6 pages) = 7 pages x 2.5 = 17.5 -> 20' },
        { id: 'w7d2-r2', type: 'read', mins: 5, title: 'Source: NVD entry for CVE-2017-5638 (Apache Struts)', desc: 'The vulnerability at the center of the Equifax breach. Note the description, the CVSS 3.x severity, and the vector. You looked it up in Lab 7.3; cite it in Project 7.', href: 'https://nvd.nist.gov/vuln/detail/CVE-2017-5638', basis: '1 page x 2.5 + 2 min reading the CVSS vector and references = 4.5 -> 5' },
        { id: 'w7d2-p1', type: 'project', mins: 50, title: 'Project 7: Equifax Data Breach (2017), Deep Dive', desc: 'Real-world case study, 50 points. Read the case, then answer six questions. Finish the write-up at home if you need to.', href: 'Project.html?p=7', due: 'Due start of Week 8' },
        { id: 'w7d2-b5', type: 'quiz', mins: 15, title: 'Week 7 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=7' },
        { id: 'w7d2-b6', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
      ]
    }
  ],
  mock: {
    id: 'w7', title: 'Blue Team Lab, phases 1-3', href: 'Pillar5_BlueTeam.html?phase=0',
    rubric: [
      ['Log analysis', 'Phase 1: correct initial access vector, pivot account, malware, exfiltration destination, and timeline, each tied to the log line that proves it'],
      ['IOC identification', 'Phase 2: every indicator listed with its type, a sensible malicious vs suspicious split, and the persistence mechanism explained'],
      ['Packet analysis', 'Phase 3: a packet-by-packet narrative, the point of root access, the staged payload, and the lateral movement discovery'],
      ['Detection engineering', 'Event IDs, SIEM rules, and packet filters that name the data source, the condition, and the action, plus a plan to hunt across many machines'],
      ['Defensive recommendations & writing', 'Controls that each map to a specific failure, written clearly enough for a SOC lead to act on']
    ]
  }
};
