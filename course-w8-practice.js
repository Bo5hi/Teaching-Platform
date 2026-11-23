// Week 8 practice sets. Shapes: docs/COURSE_V2.md. Ids contain w8 so Practice.html finds this file.
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['ir-w8'] = {
  title: 'Incident Response Step Sorter',
  kind: 'sort',
  instructions: 'Each card describes one action taken around an incident. Choose the step of the incident response lifecycle it belongs to: preparation, detection and analysis, containment, eradication, recovery, or lessons learned. Read the explanation after each one. Aim for 90% or higher.',
  dims: [
    { key: 'step', label: 'Step', options: ['Preparation', 'Detection and analysis', 'Containment', 'Eradication', 'Recovery', 'Lessons learned'] }
  ],
  items: [
    { text: 'Marcus writes a one-page call list with phone numbers that work at 3 AM, and a backup for each person.', answers: { step: ['Preparation'] }, why: 'Deciding in advance who to call is part of the incident response plan, written before any incident.' },
    { text: 'The IT team runs a tabletop exercise in which ENG-FS01 is hit by ransomware on a holiday weekend.', answers: { step: ['Preparation'] }, why: 'Testing the plan through discussion happens before a real incident, so it is preparation.' },
    { text: 'Dee installs the EDR agent on every file server and turns on alerting to a phone that someone carries overnight.', answers: { step: ['Preparation'] }, why: 'Setting up tools and monitoring before an incident is preparation.' },
    { text: 'IT writes a ransomware playbook: isolate the host, block the C2 address, take backups offline, call the incident lead.', answers: { step: ['Preparation'] }, why: 'Playbooks are written ahead of time. They are used during containment, but writing them is preparation.' },
    { text: 'You notice five alerts share the internal address 10.250.0.37 and link them into one incident.', answers: { step: ['Detection and analysis'] }, why: 'Correlating alerts to understand scope is analysis.' },
    { text: 'You confirm the ransomware alert is a true positive by checking that files on ENG-FS01 now end in .latch.', answers: { step: ['Detection and analysis'] }, why: 'Confirming an alert is real is part of detection and analysis.' },
    { text: 'You rank the morning alerts P1 to P4 and start an incident log at 06:05.', answers: { step: ['Detection and analysis'] }, why: 'Triage and the first documentation happen during detection and analysis.' },
    { text: 'Using the firewall egress log, you work out that about 6.6 GB left for 192.0.2.145 between 02:14 and 03:29 local time.', answers: { step: ['Detection and analysis'] }, why: 'Measuring scope, including what data left, is analysis.' },
    { text: 'Dee isolates ENG-FS01 from the network through the EDR console but leaves it powered on.', answers: { step: ['Containment'] }, why: 'Isolation stops the spread while keeping memory evidence. That is short-term containment.' },
    { text: 'The password-only CC-LEGACY VPN profile is switched off and the VPN is limited to IT staff until further notice.', answers: { step: ['Containment'] }, why: 'Cutting off the attacker\'s way in, quickly and bluntly, is containment.' },
    { text: 'Dee blocks 203.0.113.77 and 192.0.2.145 at FW-CORE.', answers: { step: ['Containment'] }, why: 'Blocking attacker addresses stops further access and data theft: containment.' },
    { text: 'Dee captures a memory image of ENG-FS01 to an external drive and records its hash on the custody form.', answers: { step: ['Containment'] }, why: 'Evidence is preserved during containment, before anything is wiped in eradication. (Some teams file this under analysis; it must happen before eradication either way.)' },
    { text: 'For the next two weeks, ENG-APP02 is moved onto its own network segment while a supported replacement is ordered.', answers: { step: ['Containment'] }, why: 'Temporary measures that keep the business running safely while the full fix is prepared are long-term containment.' },
    { text: 'The svc_update account the attacker created is deleted from Active Directory.', answers: { step: ['Eradication'] }, why: 'Removing attacker persistence is eradication.' },
    { text: 'The ccadmin password is removed from map_drives.bat and the script is rewritten to need no stored password.', answers: { step: ['Eradication'] }, why: 'Closing the hole the attacker used to gain admin rights removes the cause: eradication.' },
    { text: 'ENG-FS01\'s disks are wiped so the server can be reinstalled from a known-good image.', answers: { step: ['Eradication'] }, why: 'Reimaging removes any malware you might have missed. It is eradication; the reinstall and restore that follow are recovery.' },
    { text: 'Every password that may have been exposed, including ccadmin and m.alvarez, is reset.', answers: { step: ['Eradication'] }, why: 'Resetting exposed credentials removes the attacker\'s ability to return.' },
    { text: 'D:\\Projects is restored to the rebuilt ENG-FS01 from Friday\'s verified tape.', answers: { step: ['Recovery'] }, why: 'Restoring data from clean backups returns the system to service: recovery.' },
    { text: 'Tom Becker checks that engineers can open and save drawings before ENG-FS01 is declared back in service.', answers: { step: ['Recovery'] }, why: 'Confirming with the business owner that the system works is part of recovery.' },
    { text: 'For 30 days after restoring ENG-FS01, any logon by an IT admin account sends an alert to Marcus.', answers: { step: ['Recovery'] }, why: 'Close monitoring after systems return to service is part of recovery.' },
    { text: 'The team meets two weeks later to discuss what worked and what failed, without blaming anyone.', answers: { step: ['Lessons learned'] }, why: 'The blameless post-incident review is lessons learned.' },
    { text: 'The ransomware playbook is updated: capture memory first unless files are actively being destroyed.', answers: { step: ['Lessons learned'] }, why: 'Changing the plan based on experience is the output of lessons learned (and it feeds the next round of preparation).' },
    { text: 'Marcus writes the final incident report, with root cause and recommendations, for Greg Palmer.', answers: { step: ['Lessons learned'] }, why: 'The final report is part of post-incident activity.' },
    { text: 'IT asks Greg for budget to add MFA to the VPN and offsite backups, citing the incident report.', answers: { step: ['Lessons learned'] }, why: 'Turning findings into funded improvements is the point of lessons learned.' }
  ]
};

COURSE_PRACTICE['acro-w8a'] = {
  title: 'Acronyms: Week 8, set A (response and recovery)',
  kind: 'flash',
  items: [
    { term: 'IR', definition: 'Incident Response. The organized process for detecting, containing, removing, and recovering from security incidents.' },
    { term: 'IRP', definition: 'Incident Response Plan. The written plan that sets roles, contacts, priorities, communication rules, and playbooks before an incident happens.' },
    { term: 'CERT', definition: 'Computer Emergency Response Team. A team that handles security incidents; also the name of national coordination centers. Similar to a CSIRT.' },
    { term: 'SOC', definition: 'Security Operations Center. The team, often working around the clock, that monitors alerts, investigates, and responds to security events.' },
    { term: 'MSSP', definition: 'Managed Security Service Provider. An outside company that monitors and responds to alerts for its customers, often used by firms too small for their own SOC.' },
    { term: 'IoC', definition: 'Indicator of Compromise. Evidence that a system may have been breached, such as an attacker IP address, a malware hash, or a ransom note file name.' },
    { term: 'TTP', definition: 'Tactics, Techniques, and Procedures. How an attacker operates: their goals, methods, and specific steps, such as password spraying a VPN and then deleting backups.' },
    { term: 'APT', definition: 'Advanced Persistent Threat. A skilled, well-funded attacker that stays hidden in a network for a long time, often linked to a nation-state.' },
    { term: 'ATT&CK', definition: 'Adversarial Tactics, Techniques, and Common Knowledge. MITRE\'s public catalog of attacker techniques, used to map and describe incidents.' },
    { term: 'CTI', definition: 'Cyber Threat Intelligence. Information about attackers, their methods, and their indicators, used to detect and prevent attacks.' },
    { term: 'CAR', definition: 'Corrective Action Report. A record of a problem found (for example in a lessons-learned review), its cause, and the fix assigned to correct it.' },
    { term: 'BCP', definition: 'Business Continuity Plan. How the business keeps its critical functions running during and after a disruption, often with manual workarounds.' },
    { term: 'BIA', definition: 'Business Impact Analysis. A study of which business functions matter most and how much harm each hour of disruption causes. It sets RTO and RPO.' },
    { term: 'COOP', definition: 'Continuity of Operations Plan. The government term for a business continuity plan.' },
    { term: 'DR', definition: 'Disaster Recovery. Restoring IT systems and data after a major disruption.' },
    { term: 'DRP', definition: 'Disaster Recovery Plan. The written plan for restoring IT systems and data, measured against RTO and RPO.' },
    { term: 'RPO', definition: 'Recovery Point Objective. The maximum acceptable data loss, measured as the age of the newest usable backup.' },
    { term: 'RTO', definition: 'Recovery Time Objective. The maximum acceptable time a system or function can be down.' },
    { term: 'MTTR', definition: 'Mean Time to Repair (also used for mean time to recover). The average time to fix a failed system and return it to service.' },
    { term: 'MTBF', definition: 'Mean Time Between Failures. The average time a repairable system runs between failures. Higher means more reliable.' }
  ]
};

COURSE_PRACTICE['acro-w8b'] = {
  title: 'Acronyms: Week 8, set B (evidence, systems, and notification)',
  kind: 'flash',
  items: [
    { term: 'RAM', definition: 'Random Access Memory. A computer\'s working memory. It holds running processes, connections, and keys, and it is lost at power-off, so it is collected first.' },
    { term: 'HDD', definition: 'Hard Disk Drive. Long-term storage that survives power-off. Investigators copy it bit for bit into a disk image.' },
    { term: 'MBR', definition: 'Master Boot Record. The first sector of a disk, which tells the computer how to start. Some destructive malware overwrites it.' },
    { term: 'UEFI', definition: 'Unified Extensible Firmware Interface. The modern firmware that starts a computer, replacing BIOS. Malware that hides here survives reimaging.' },
    { term: 'FIM', definition: 'File Integrity Monitoring. A tool that alerts when important files change, by comparing their hashes with known-good values.' },
    { term: 'SHA', definition: 'Secure Hash Algorithm. A family of hash functions; SHA-256 is used to prove evidence files have not changed since collection.' },
    { term: 'NTP', definition: 'Network Time Protocol. Keeps system clocks in sync, so logs from different systems line up on one timeline.' },
    { term: 'SIEM', definition: 'Security Information and Event Management. Collects logs from many systems and correlates them to raise alerts.' },
    { term: 'EDR', definition: 'Endpoint Detection and Response. An agent on each computer that watches activity, raises alerts, and can isolate the host during an incident.' },
    { term: 'DLP', definition: 'Data Loss Prevention. Tools that detect or block sensitive data leaving the organization.' },
    { term: 'UPS', definition: 'Uninterruptible Power Supply. A battery unit that keeps equipment running for minutes during a power outage.' },
    { term: 'HA', definition: 'High Availability. Designing systems, for example with clustering or load balancing, so one failure does not cause an outage.' },
    { term: 'RAID', definition: 'Redundant Array of Inexpensive Disks. Spreading data across several disks so one disk failure does not lose data. It is not a backup.' },
    { term: 'SLA', definition: 'Service-Level Agreement. A promise of a level of service, such as a 4-hour response target for P1 incidents.' },
    { term: 'MTTF', definition: 'Mean Time to Failure. The average time a non-repairable item runs before it fails and is replaced.' },
    { term: 'PII', definition: 'Personally Identifiable Information. Data that identifies a person, such as a name with a Social Security number. Its exposure can trigger breach notification laws.' },
    { term: 'PHI', definition: 'Protected Health Information. Health data covered by HIPAA, which has its own breach notification rules.' },
    { term: 'GDPR', definition: 'General Data Protection Regulation. The EU privacy law; it requires notifying the authority within 72 hours of becoming aware of a personal data breach, where feasible.' },
    { term: 'PCI DSS', definition: 'Payment Card Industry Data Security Standard. Security rules for anyone who handles payment cards, including incident response requirements.' },
    { term: 'CISA', definition: 'Cybersecurity and Infrastructure Security Agency. The US agency that publishes advisories and directives and accepts incident reports.' }
  ]
};
