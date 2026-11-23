// Week 1 practice sets. Shapes: docs/COURSE_V2.md
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['controls'] = {
  title: 'Control Sorter',
  kind: 'sort',
  instructions: 'For each control, choose its category (how the control is put in place) and its type (what the control does). Some controls have more than one defensible answer, and any accepted answer earns credit. Read the explanation after each one, because the reasoning is what the exam tests.',
  dims: [
    { key: 'category', label: 'Category', options: ['Technical', 'Managerial', 'Operational', 'Physical'] },
    { key: 'type', label: 'Type', options: ['Preventive', 'Deterrent', 'Detective', 'Corrective', 'Compensating', 'Directive'] }
  ],
  items: [
    {
      text: 'An 8-foot chain-link fence surrounds the Cedar Creek plant yard.',
      answers: { category: ['Physical'], type: ['Preventive'] },
      why: 'A fence is a physical barrier that stops people from simply walking onto the property. It prevents entry rather than recording it, which is why the side gate propped open with a brick defeats it.'
    },
    {
      text: 'A data center entrance uses an access control vestibule: two doors, and the second will not open until the first has closed.',
      answers: { category: ['Physical'], type: ['Preventive'] },
      why: 'The vestibule is a physical control that lets only one badged person through at a time. It stops tailgating before it happens, so it is preventive.'
    },
    {
      text: 'Cedar Creek office workstations lock automatically after 15 minutes of inactivity.',
      answers: { category: ['Technical'], type: ['Preventive'] },
      why: 'The operating system enforces the lock, so it is a technical control. It prevents someone from using an unattended, logged-in computer.'
    },
    {
      text: 'The employee handbook states that anyone caught sharing their password will face discipline, up to and including termination.',
      answers: { category: ['Managerial'], type: ['Deterrent'] },
      why: 'Management sets this consequence through policy, so it is managerial. Its purpose is to discourage the behavior by making the penalty clear, which makes it a deterrent.'
    },
    {
      text: 'LED pole lights keep the Cedar Creek parking lot brightly lit at night.',
      answers: { category: ['Physical'], type: ['Deterrent'] },
      why: 'Lighting is a physical control. It discourages intruders because they are more likely to be seen, but it does not physically stop anyone from walking in.'
    },
    {
      text: 'A banner appears before every server login: "Authorized use only. All activity is monitored and violators will be prosecuted."',
      answers: { category: ['Technical'], type: ['Deterrent', 'Directive'] },
      why: 'The system displays the banner, so it is technical. Warning about monitoring and prosecution is meant to discourage misuse (deterrent), and because it also states the rule, directive is accepted too.'
    },
    {
      text: 'Every Cedar Creek employee must read and sign the Acceptable Use Policy.',
      answers: { category: ['Managerial'], type: ['Directive'] },
      why: 'A policy written and enforced by management is a managerial control. It tells people what they must and must not do with company systems, which makes it directive.'
    },
    {
      text: '"Authorized Personnel Only" signs are posted at the control room door on the Cedar Creek plant floor.',
      answers: { category: ['Physical', 'Managerial'], type: ['Directive', 'Deterrent'] },
      why: 'The sign tells people who may enter, so its main job is directive. It is a physical object at the door, though managerial is also accepted because it posts a rule, and it can discourage casual intruders, so deterrent is accepted too.'
    },
    {
      text: 'Cedar Creek engineers sign a non-disclosure agreement when they are hired.',
      answers: { category: ['Managerial'], type: ['Directive', 'Deterrent'] },
      why: 'An NDA is an agreement put in place by management, so it is managerial. It directs engineers not to share confidential drawings, and the legal consequences also deter them, so either type is accepted.'
    },
    {
      text: 'Cameras over each production line in the Cedar Creek plant record to the NVR-01 camera recorder.',
      answers: { category: ['Physical'], type: ['Detective', 'Deterrent'] },
      why: 'Cameras are physical controls whose main job is recording events so they can be discovered and investigated (detective). Visible cameras also discourage bad behavior, so deterrent is accepted.'
    },
    {
      text: 'Temperature and water sensors in the Cedar Creek server room email IT when readings go out of range.',
      answers: { category: ['Technical', 'Physical'], type: ['Detective'] },
      why: 'The sensors notice a problem and send an alert; they do not fix it, so they are detective. They are electronic monitoring devices (technical), and because they watch the physical environment, physical is also accepted.'
    },
    {
      text: 'A SIEM raises an alert when a single account fails to log in 20 times within five minutes.',
      answers: { category: ['Technical'], type: ['Detective'] },
      why: 'The SIEM is software, so it is a technical control. It spots a suspicious pattern that is already happening and alerts an analyst, which is detective.'
    },
    {
      text: 'An EDR console in the Cedar Creek IT office shows every office PC reporting in and flags suspicious behavior on them.',
      answers: { category: ['Technical'], type: ['Detective', 'Preventive'] },
      why: 'EDR is security software (technical) whose core job is detecting and alerting on threats on endpoints. Most EDR tools can also block or isolate a threat automatically, so preventive is accepted.'
    },
    {
      text: 'Each month, the payroll manager reviews a report of who logged in to the payroll system and follows up on anything unusual.',
      answers: { category: ['Managerial', 'Operational'], type: ['Detective'] },
      why: 'Reviewing activity after the fact finds problems that already happened, so it is detective. It is management oversight (managerial), and because a person carries it out as a routine task, operational is also accepted.'
    },
    {
      text: 'The Cedar Creek server room is protected by an FM-200 clean-agent fire suppression system.',
      answers: { category: ['Physical'], type: ['Corrective'] },
      why: 'Fire suppression is physical equipment. It acts after a fire starts to put it out and limit the damage, which is corrective.'
    },
    {
      text: 'After ransomware encrypts a file server, the backup system restores last night\'s copy of every affected file.',
      answers: { category: ['Technical'], type: ['Corrective'] },
      why: 'Backup software performs the restore, so it is a technical control. It repairs the damage after an incident and returns the system to normal, which is corrective.'
    },
    {
      text: 'When a laptop is found infected, the IT team follows the incident response playbook to disconnect it, reimage it, and return it to the user.',
      answers: { category: ['Operational'], type: ['Corrective'] },
      why: 'People carrying out a documented procedure is an operational control. The steps contain the infection and restore the laptop after the fact, which is corrective.'
    },
    {
      text: 'A UPS rack and a diesel generator keep the Cedar Creek server room running if utility power fails.',
      answers: { category: ['Physical'], type: ['Corrective', 'Compensating'] },
      why: 'Power equipment is a physical control. It restores power after an outage (corrective), and because it stands in for the failed utility power, compensating is also accepted.'
    },
    {
      text: 'An old server that cannot be patched is moved to its own network segment, and a firewall allows only the one application port it needs.',
      answers: { category: ['Technical'], type: ['Compensating'] },
      why: 'Firewall rules and network segmentation are technical controls. They do not fix the missing patches; they reduce the risk in place of patching, which is exactly what a compensating control does.'
    },
    {
      text: 'Because a records room has no camera, two staff members must be present whenever a vendor works inside it.',
      answers: { category: ['Operational'], type: ['Compensating'] },
      why: 'This is a procedure people carry out, so it is operational. The second person makes up for the missing camera, which makes it compensating.'
    },
    {
      text: 'While a broken badge reader waits for repair, a security guard is posted at the door to check every badge by hand.',
      answers: { category: ['Operational', 'Physical'], type: ['Compensating'] },
      why: 'The guard temporarily replaces a control that failed, so it is compensating. A guard is a person performing a duty (operational), and guards are also commonly listed under physical security, so physical is accepted.'
    },
    {
      text: 'The Cedar Creek help desk calls a user back at their desk phone before resetting their password.',
      answers: { category: ['Operational'], type: ['Preventive'] },
      why: 'The callback is a procedure that staff follow, so it is operational. It stops an impostor on the phone from getting someone else\'s password reset, which is preventive.'
    },
    {
      text: 'Cedar Creek requires every employee to complete security awareness training each year.',
      answers: { category: ['Operational'], type: ['Preventive'] },
      why: 'Training is delivered to and completed by people, which makes it operational. Its goal is to stop mistakes such as clicking a phishing link before they happen, so it is preventive.'
    },
    {
      text: 'A hiring policy requires a background check to be completed before a new employee is given any system access.',
      answers: { category: ['Managerial'], type: ['Preventive'] },
      why: 'Management sets this requirement as policy, so it is managerial. It aims to keep a risky person from ever getting access, which is preventive.'
    }
  ]
};

COURSE_PRACTICE['acro-w1a'] = {
  title: 'Acronyms: Week 1, set A',
  kind: 'flash',
  items: [
    { term: 'CIA', definition: 'Confidentiality, Integrity, Availability. The three core goals of security: keep data away from the wrong people, keep it accurate and unaltered, and keep it usable when it is needed.' },
    { term: 'AAA', definition: 'Authentication, Authorization, Accounting. The framework for proving who a user is, deciding what that user may do, and recording what they actually did.' },
    { term: 'NIST', definition: 'National Institute of Standards and Technology. The U.S. government agency that publishes widely used security standards and guidance, including the Cybersecurity Framework and the SP 800 series.' },
    { term: 'CSF', definition: 'Cybersecurity Framework. NIST\'s framework that organizes security work into six functions: Govern, Identify, Protect, Detect, Respond, and Recover.' },
    { term: 'MFA', definition: 'Multifactor Authentication. Requiring two or more different kinds of proof, such as something you know, something you have, or something you are, before access is granted.' },
    { term: 'IAM', definition: 'Identity and Access Management. The processes and tools that create user identities, verify them, and control what each one is allowed to reach.' },
    { term: 'AUP', definition: 'Acceptable Use Policy. A policy that tells users what they may and may not do with company systems, networks, and data.' },
    { term: 'SOP', definition: 'Standard Operating Procedure. Step-by-step written instructions for doing a routine task the same approved way every time.' },
    { term: 'EDR', definition: 'Endpoint Detection and Response. Software on computers and servers that watches for suspicious behavior, alerts analysts, and can isolate or stop a threat.' },
    { term: 'SIEM', definition: 'Security Information and Event Management. A system that collects logs from many sources in one place, correlates them, and raises alerts on suspicious patterns.' },
    { term: 'IDS', definition: 'Intrusion Detection System. A tool that monitors network or host activity for signs of attack and raises an alert without blocking the traffic.' },
    { term: 'IPS', definition: 'Intrusion Prevention System. A tool that inspects traffic like an IDS but sits inline, so it can block malicious activity as it happens.' },
    { term: 'UPS', definition: 'Uninterruptible Power Supply. A battery unit that keeps equipment running through a short power loss, buying time for a generator to start or for a clean shutdown.' },
    { term: 'GRC', definition: 'Governance, Risk, and Compliance. The combined work of setting security direction and policy, managing risk, and proving the organization meets laws and standards.' },
    { term: 'CISO', definition: 'Chief Information Security Officer. The senior executive responsible for an organization\'s overall security program.' },
    { term: 'PII', definition: 'Personally Identifiable Information. Data that can identify a specific person, such as a name together with a Social Security number, home address, or birth date.' },
    { term: 'NDA', definition: 'Non-Disclosure Agreement. A legal contract in which a person promises not to share an organization\'s confidential information.' },
    { term: 'VM', definition: 'Virtual Machine. A complete computer with its own operating system that runs as software inside another computer, the way Kali runs on your PC.' },
    { term: 'CLI', definition: 'Command-Line Interface. A text-based way to control a computer by typing commands, such as the terminal in Kali.' },
    { term: 'OS', definition: 'Operating System. The core software, such as Windows or Linux, that manages a computer\'s hardware and runs its programs.' }
  ]
};

COURSE_PRACTICE['acro-w1b'] = {
  title: 'Acronyms: Week 1, set B',
  kind: 'flash',
  items: [
    { term: 'APT', definition: 'Advanced Persistent Threat. A skilled, well-funded attacker, often backed by a nation-state, that quietly stays inside a target network for a long time.' },
    { term: 'BEC', definition: 'Business Email Compromise. A scam where an attacker poses as an executive or vendor by email to trick staff into sending money or data.' },
    { term: 'RAT', definition: 'Remote Access Trojan. Malware disguised as legitimate software that gives an attacker hidden remote control of the infected computer.' },
    { term: 'MSP', definition: 'Managed Service Provider. An outside company paid to run some or all of an organization\'s IT, which makes it a supply chain risk if attackers compromise it.' },
    { term: 'MSSP', definition: 'Managed Security Service Provider. An outside company that runs security functions such as monitoring, alert triage, and incident response for its customers.' },
    { term: 'SaaS', definition: 'Software as a Service. Cloud software you use over the internet, such as Microsoft 365, while the provider runs the servers and the application.' },
    { term: 'VPN', definition: 'Virtual Private Network. An encrypted tunnel across an untrusted network such as the internet that lets remote users reach internal resources safely.' },
    { term: 'RDP', definition: 'Remote Desktop Protocol. Microsoft\'s protocol for controlling a Windows desktop over the network, and a common attack vector when it is exposed to the internet.' },
    { term: 'USB', definition: 'Universal Serial Bus. The standard port for drives and other devices, and a common vector for malware and data theft through removable media.' },
    { term: 'CCTV', definition: 'Closed-Circuit Television. A camera system that sends video to a private recorder rather than broadcasting it, used to detect and deter physical intrusion.' },
    { term: 'PIN', definition: 'Personal Identification Number. A short numeric code used as a something-you-know factor, often paired with a badge or card.' },
    { term: 'RFID', definition: 'Radio-Frequency Identification. Technology that reads a tag by radio without physical contact, used in many access badges and asset tags and open to cloning attacks.' },
    { term: 'NFC', definition: 'Near-Field Communication. A very short-range form of RFID that works within a few centimeters, used for tap-to-pay, phone-based badges, and device pairing.' },
    { term: 'IoT', definition: 'Internet of Things. Everyday network-connected devices such as cameras, thermostats, and smart sensors, which often ship with weak security.' },
    { term: 'OT', definition: 'Operational Technology. Hardware and software that monitor and control physical processes, such as production lines, where safety and uptime come first.' },
    { term: 'ICS', definition: 'Industrial Control System. The networked controllers and computers that run industrial equipment, such as the machines on a plant\'s production lines.' },
    { term: 'SCADA', definition: 'Supervisory Control and Data Acquisition. A type of ICS that monitors and controls equipment spread over a wide area, such as pipelines or power grids.' },
    { term: 'CVE', definition: 'Common Vulnerabilities and Exposures. A public list that gives each known software vulnerability a unique ID, such as CVE-2021-44228.' },
    { term: 'OSINT', definition: 'Open-Source Intelligence. Information gathered from public sources such as websites, social media, and job postings, often used by attackers for reconnaissance.' },
    { term: 'TTP', definition: 'Tactics, Techniques, and Procedures. The patterns of behavior a threat actor uses, from overall goals down to specific methods, used to profile and detect that actor.' }
  ]
};
