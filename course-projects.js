// The 8 case-study projects (questions + rubrics), copied from MCCoE_Hub.html so the new Project page can use them.
// Submissions keep the Hub's shape: mccoe_submissions/{hubId}/week{n}, drafts at mccoe_drafts/{hubId}/proj{n}.
window.HUB_PROJECTS = {
  1:{incident:'Target Data Breach (2013)',type:'Part 1 — Deep Dive',max:50,fields:[
    {id:'q1',label:'Describe what happened. Who was attacked, how did attackers get in, and what was stolen?',ta:true},
    {id:'q2',label:'How were each CIA Triad pillars (Confidentiality, Integrity, Availability) impacted?',ta:true},
    {id:'q3',label:'At which Cyber Kill Chain phase did attackers first gain a foothold?',ta:false},
    {id:'q4',label:'What MITRE ATT&CK technique(s) were used? (e.g. T1566 – Phishing)',ta:false},
    {id:'q5',label:'List any CVEs involved, or write "None publicly identified."',ta:false},
    {id:'q6',label:'What ONE security control could have prevented this breach? Explain why.',ta:true}
  ]},
  2:{incident:'Target Data Breach (2013)',type:'Part 2 — Frameworks & Writing',max:100,fields:[
    {id:'q1',label:'Which NIST CSF functions (Identify, Protect, Detect, Respond, Recover) failed at Target? Explain each.',ta:true},
    {id:'q2',label:'What penetration testing technique would have uncovered this vulnerability before the breach?',ta:true},
    {id:'q3',label:'Write a 3–5 sentence Executive Summary for a non-technical board of directors.',ta:true},
    {id:'q4',label:'List 3 specific, actionable remediation recommendations.',ta:true},
    {id:'q5',label:'What compliance framework(s) were violated (e.g., PCI-DSS, HIPAA, SOX)? How?',ta:true}
  ]},
  3:{incident:'Colonial Pipeline Attack (2021)',type:'Part 1 — Deep Dive',max:50,fields:[
    {id:'q1',label:'Describe what happened. Who was attacked, how, and what was the real-world impact?',ta:true},
    {id:'q2',label:'How were each CIA Triad pillars impacted by this attack?',ta:true},
    {id:'q3',label:'At which Kill Chain phase did attackers first gain access?',ta:false},
    {id:'q4',label:'What MITRE ATT&CK technique(s) were used?',ta:false},
    {id:'q5',label:'What known vulnerability or credential issue was exploited?',ta:false},
    {id:'q6',label:'What ONE security control could have prevented or limited this attack?',ta:true}
  ]},
  4:{incident:'Colonial Pipeline Attack (2021)',type:'Part 2 — Frameworks & Writing',max:100,fields:[
    {id:'q1',label:'Which NIST CSF functions failed at Colonial Pipeline? Explain each failure specifically.',ta:true},
    {id:'q2',label:'What pentesting technique would have revealed this vulnerability?',ta:true},
    {id:'q3',label:'Write a 3–5 sentence Executive Summary for a non-technical audience.',ta:true},
    {id:'q4',label:'List 3 specific remediation recommendations for Colonial Pipeline.',ta:true},
    {id:'q5',label:'What compliance/regulatory framework violations occurred? (e.g., TSA Pipeline Security, NERC CIP)',ta:true}
  ]},
  5:{incident:'SolarWinds Supply Chain Attack (2020)',type:'Part 1 — Deep Dive',max:50,fields:[
    {id:'q1',label:'Describe what happened. How was the supply chain compromised and what was the scope?',ta:true},
    {id:'q2',label:'How were each CIA Triad pillars impacted?',ta:true},
    {id:'q3',label:'At which Kill Chain phase did attackers insert the SUNBURST backdoor?',ta:false},
    {id:'q4',label:'What MITRE ATT&CK technique(s) were used? (Hint: T1195 – Supply Chain Compromise)',ta:false},
    {id:'q5',label:'List the CVE(s) associated with this breach.',ta:false},
    {id:'q6',label:'What ONE control could have detected or prevented the supply chain compromise?',ta:true}
  ]},
  6:{incident:'SolarWinds Supply Chain Attack (2020)',type:'Part 2 — Frameworks & Writing',max:100,fields:[
    {id:'q1',label:'Which NIST CSF functions failed? Provide specific evidence from the SolarWinds case.',ta:true},
    {id:'q2',label:'What pentesting technique could simulate a supply chain attack on your organization?',ta:true},
    {id:'q3',label:'Write a 3–5 sentence Executive Summary for a federal agency CIO.',ta:true},
    {id:'q4',label:'List 3 specific remediation recommendations to prevent supply chain attacks.',ta:true},
    {id:'q5',label:'What compliance frameworks were implicated? (e.g., FedRAMP, FISMA, CMMC)',ta:true}
  ]},
  7:{incident:'Equifax Data Breach (2017)',type:'Part 1 — Deep Dive',max:50,fields:[
    {id:'q1',label:'Describe what happened. What data was stolen, how many affected, and how did it occur?',ta:true},
    {id:'q2',label:'How were each CIA Triad pillars impacted?',ta:true},
    {id:'q3',label:'At which Kill Chain phase did attackers first exploit Equifax\'s systems?',ta:false},
    {id:'q4',label:'What MITRE ATT&CK technique(s) were used?',ta:false},
    {id:'q5',label:'What CVE was at the center of this breach? Describe the vulnerability briefly.',ta:false},
    {id:'q6',label:'What ONE control would have prevented this breach?',ta:true}
  ]},
  8:{incident:'Equifax Data Breach (2017)',type:'Part 2 — Frameworks & Writing',max:100,fields:[
    {id:'q1',label:'Which NIST CSF functions failed at Equifax? Back each up with specific evidence.',ta:true},
    {id:'q2',label:'What pentesting technique would have found the Apache Struts vulnerability first?',ta:true},
    {id:'q3',label:'Write a 3–5 sentence Executive Summary suitable for Congressional testimony.',ta:true},
    {id:'q4',label:'List 3 specific remediation recommendations Equifax should have had in place.',ta:true},
    {id:'q5',label:'What consumer protection/data privacy laws were violated? (e.g., FCRA, GDPR, breach notification laws)',ta:true}
  ]}
};

window.HUB_RUBRIC = {
  1: [
    { pts:8,  label:'Incident Overview',   guide:'Name the victim, how attackers got in, what was stolen, and when.',
      checks:['Named the victim organization (Target)','Identified the entry point (HVAC vendor / third-party contractor)','Stated what was stolen (40M credit/debit card numbers)','Mentioned the timeframe (Nov–Dec 2013)'] },
    { pts:8,  label:'CIA Triad Impact',    guide:'Address all three pillars specifically to this incident.',
      checks:['Confidentiality — described what data was exposed','Integrity — addressed whether data or systems were altered','Availability — addressed whether systems were taken offline'] },
    { pts:8,  label:'Kill Chain Phase',    guide:'Name the specific phase and briefly explain why it applies.',
      checks:['Named a specific Cyber Kill Chain phase','Briefly explained why that phase applies to this attack'] },
    { pts:8,  label:'MITRE ATT&CK',       guide:'Include at least one T-number, the name, and how it was used.',
      checks:['Included at least one technique ID (T-number)','Named the technique','Explained how it was used in this attack'] },
    { pts:6,  label:'CVEs',               guide:'List known CVEs or state "None publicly identified."',
      checks:['Listed known CVEs or clearly stated "None publicly identified"'] },
    { pts:8,  label:'Preventive Control', guide:'Name one specific control and explain why it would have prevented this breach.',
      checks:['Named one specific security control','Explained exactly why it would have prevented this breach'] }
  ],
  2: [
    { pts:20, label:'NIST CSF Failures',  guide:'Cover all five functions with a Target-specific failure for each.',
      checks:['Identify — named a specific failure (e.g. no vendor risk management)','Protect — named a specific failure (e.g. no MFA, poor segmentation)','Detect — named a specific failure (e.g. ignored FireEye alerts)','Respond — named a specific failure (e.g. slow breach response)','Recover — named a specific failure (e.g. delayed customer notification)'] },
    { pts:20, label:'Pentest Technique',  guide:'Name a specific technique and explain how it would have found the vulnerability.',
      checks:['Named a specific technique (not just "a pentest")','Explained how it would have exposed the specific vulnerability before attackers'] },
    { pts:20, label:'Executive Summary',  guide:'3–5 sentences, no jargon, written for a board of directors.',
      checks:['Written in 3–5 sentences','Uses non-technical language (board of directors audience)','Covers what happened and the impact','Includes the root cause and a recommendation'] },
    { pts:20, label:'Remediation',        guide:'Exactly 3 specific, actionable recommendations — not generic.',
      checks:['Listed exactly 3 recommendations','Each recommendation is specific and actionable (not generic)','Each recommendation is briefly explained'] },
    { pts:20, label:'Compliance Violations', guide:'Name the framework(s) and explain how the incident violated each.',
      checks:['Named at least one specific compliance framework (e.g. PCI-DSS)','Explained how this incident violated that framework'] }
  ],
  3: [
    { pts:8,  label:'Incident Overview',  guide:'Name the threat actor, how they got in, the real-world impact, and the ransom outcome.',
      checks:['Named the threat actor (DarkSide ransomware group)','Explained how they got in (compromised VPN credentials, no MFA)','Described the real-world impact (fuel shortages, 6-day shutdown)','Mentioned the ransom amount ($4.4M) or outcome'] },
    { pts:8,  label:'CIA Triad Impact',   guide:'Address all three pillars specifically to this attack.',
      checks:['Confidentiality — data stolen (double extortion)','Integrity — billing/IT systems encrypted','Availability — pipeline shutdown and fuel supply disruption'] },
    { pts:8,  label:'Kill Chain Phase',   guide:'Name the specific phase for initial access and explain why.',
      checks:['Named a specific Kill Chain phase','Briefly explained why that phase applies'] },
    { pts:8,  label:'MITRE ATT&CK',      guide:'T1133 and T1486 are the most relevant. Include ID, name, and how it applies.',
      checks:['Included at least one technique ID (T-number)','Named the technique','Explained how it applies to this specific attack'] },
    { pts:8,  label:'Vulnerability Exploited', guide:'Name the specific credential weakness and what was missing that allowed it.',
      checks:['Named the specific credential weakness (reused/compromised VPN password)','Explained what was missing that allowed it (no MFA enabled on VPN)'] },
    { pts:8,  label:'Preventive Control', guide:'Name one control and explain how it would have stopped this specific attack.',
      checks:['Named one specific control (e.g. MFA on VPN, IT/OT segmentation)','Explained how it would have stopped or significantly limited this attack'] }
  ],
  4: [
    { pts:20, label:'NIST CSF Failures',  guide:'All five functions with Colonial Pipeline-specific evidence.',
      checks:['Identify — specific failure (e.g. no asset inventory/vulnerability management)','Protect — specific failure (e.g. no MFA on VPN, no IT/OT segmentation)','Detect — specific failure (e.g. credential compromise not detected before attack)','Respond — specific failure (e.g. no incident response plan)','Recover — specific failure (e.g. no tested OT backup/recovery procedures)'] },
    { pts:20, label:'Pentest Technique',  guide:'Name a specific technique targeting credential/VPN security.',
      checks:['Named a specific technique targeting credential or remote access security','Explained how it would have revealed the VPN vulnerability before attackers'] },
    { pts:20, label:'Executive Summary',  guide:'3–5 sentences for a Congressional/non-technical audience.',
      checks:['Written in 3–5 sentences','Appropriate for Congressional/non-technical audience','Covers the attack method and national impact','Addresses why it happened and what should change'] },
    { pts:20, label:'Remediation',        guide:'3 specific recommendations that directly address failures in this incident.',
      checks:['Listed exactly 3 recommendations','Each directly addresses a failure from Colonial Pipeline','Each is specific and actionable'] },
    { pts:20, label:'Compliance Violations', guide:'Name relevant pipeline/infrastructure regulations and explain the gaps.',
      checks:['Named TSA Pipeline Security Directives or equivalent regulation','Explained how this incident exposed compliance gaps'] }
  ],
  5: [
    { pts:8,  label:'Incident Overview',  guide:'Name the threat actor, how the supply chain was compromised, scale, and detection timeline.',
      checks:['Named the threat actor (Russian SVR / Cozy Bear APT)','Explained how the supply chain was compromised (trojanized software update)','Stated the scale (18,000+ organizations, government agencies)','Mentioned how long it went undetected (9+ months)'] },
    { pts:8,  label:'CIA Triad Impact',   guide:'Address all three pillars specifically to this attack.',
      checks:['Confidentiality — government/classified data accessed','Integrity — trusted software update was trojanized','Availability — agencies forced to disconnect Orion systems'] },
    { pts:8,  label:'Kill Chain Phase',   guide:'Identify where the backdoor was inserted and why this phase matters for supply chain attacks.',
      checks:['Named the Kill Chain phase where the backdoor was inserted','Explained why this phase is significant for supply chain attacks'] },
    { pts:8,  label:'MITRE ATT&CK',      guide:'T1195.002 (Supply Chain Compromise) is the primary technique.',
      checks:['Included T1195.002 or T1195 (Supply Chain Compromise)','Named the technique','Explained how it was executed in this attack'] },
    { pts:8,  label:'CVEs',              guide:'List CVE-2020-10148 or explain the attack was primarily technique-based.',
      checks:['Listed CVE-2020-10148 or explained the attack was primarily technique-based','Briefly described the vulnerability'] },
    { pts:8,  label:'Preventive Control', guide:'Name a control specific to supply chain attacks and explain why it helps.',
      checks:['Named a control specific to supply chain attacks (not just "better antivirus")','Explained how it addresses the specific threat vector used'] }
  ],
  6: [
    { pts:20, label:'NIST CSF Failures',  guide:'All five functions with SolarWinds-specific evidence — focus on 9-month evasion.',
      checks:['Identify — supply chain risk management failure','Protect — code integrity/verification failure','Detect — explained why 9+ months of evasion was possible','Respond — no supply chain compromise playbook existed','Recover — scale of coordinated federal remediation required'] },
    { pts:20, label:'Pentest Technique',  guide:'Name a technique that simulates supply chain compromise and explain what it tests.',
      checks:['Named a technique that simulates supply chain compromise','Explained how it tests whether a trojanized update would be caught'] },
    { pts:20, label:'Executive Summary',  guide:'3–5 sentences for a federal CIO — cover scale, trust exploitation, and remediation.',
      checks:['Written in 3–5 sentences','Addresses a federal CIO\'s concerns specifically','Covers scale (18K+ orgs) and how the trust model was exploited','Includes top remediation priorities'] },
    { pts:20, label:'Remediation',        guide:'3 specific recommendations targeting supply chain risk.',
      checks:['Listed exactly 3 recommendations targeting supply chain risk','Each is specific (e.g. SBOM, code signing, zero-trust — not generic)','Each recommendation is briefly explained'] },
    { pts:20, label:'Compliance Frameworks', guide:'Name at least two federal frameworks and explain how this attack exposed gaps.',
      checks:['Named at least two relevant federal frameworks (FedRAMP, FISMA, CMMC, EO 14028)','Explained how this attack exposed gaps in each framework named'] }
  ],
  7: [
    { pts:8,  label:'Incident Overview',  guide:'People affected, data stolen, CVE exploited, patch timing failure, how long undetected.',
      checks:['Stated the number of people affected (147 million)','Named the specific CVE exploited (CVE-2017-5638)','Explained the patch timing failure (patch available 2 months prior)','Stated what data was stolen (SSNs, PII)','Mentioned the breach went undetected for 78 days'] },
    { pts:8,  label:'CIA Triad Impact',   guide:'All three pillars specific to the Equifax breach.',
      checks:['Confidentiality — 147M records including SSNs stolen','Integrity — potential data modification during 78-day dwell time','Availability — services disrupted, website taken offline'] },
    { pts:8,  label:'Kill Chain Phase',   guide:'Name the phase for web application exploitation and explain why.',
      checks:['Named the Exploitation phase','Explained what made the web application vulnerable (unpatched CVE)'] },
    { pts:8,  label:'MITRE ATT&CK',      guide:'T1190 (Exploit Public-Facing Application) is the primary technique.',
      checks:['Included T1190 (Exploit Public-Facing Application)','Named the technique','Explained how it applies to this specific breach'] },
    { pts:8,  label:'CVE',               guide:'Name CVE-2017-5638, describe it as RCE in Apache Struts, and mention patch timing.',
      checks:['Named CVE-2017-5638 specifically','Described it as a remote code execution flaw in Apache Struts','Mentioned patch timing (released March 2017, breach began May 2017)'] },
    { pts:8,  label:'Preventive Control', guide:'Address the actual failure (unpatched CVE) with a specific control.',
      checks:['Named the specific control that addresses the actual failure','Explained how it would have prevented or caught the attack'] }
  ],
  8: [
    { pts:20, label:'NIST CSF Failures',  guide:'All five functions — the expired TLS cert disabling traffic inspection is a critical Detect failure.',
      checks:['Identify — patch management failure (CVE known 2 months)','Protect — no WAF; expired TLS certificate disabled traffic inspection for 19 months','Detect — 78-day dwell time; explained why traffic inspection failed','Respond — delayed internal response after discovery','Recover — no tested breach notification or data recovery plan'] },
    { pts:20, label:'Pentest Technique',  guide:'Name web application testing targeting known CVEs and explain how it finds CVE-2017-5638.',
      checks:['Named web application penetration testing targeting known CVEs','Explained how it would have found CVE-2017-5638 before attackers'] },
    { pts:20, label:'Executive Summary',  guide:'3–5 sentences at Congressional testimony level — cover magnitude, root cause, duration, and governance.',
      checks:['Written in 3–5 sentences','Appropriate for Congressional testimony','Covers magnitude (147M Americans) and root cause','Addresses 78-day detection failure and organizational governance failure'] },
    { pts:20, label:'Remediation',        guide:'3 specific recommendations addressing actual Equifax failures.',
      checks:['Listed exactly 3 specific recommendations','Addresses actual failures: patch SLAs, WAF, certificate management, or data minimization','Each recommendation is briefly explained'] },
    { pts:20, label:'Legal Violations',   guide:'Name FCRA, GDPR, and state breach notification laws — explain how each applies.',
      checks:['Named FCRA (Equifax handles consumer credit data)','Named GDPR (European customers affected)','Named state breach notification laws or FTC Act Section 5','Explained how each applies to Equifax specifically'] }
  ]
};

window.PROJECT_DOCS = {
  1: 'Project1_Target_Data_Breach_2013_Part1_Deep_Dive.pdf',
  2: 'Project2_Target_Data_Breach_2013_Part2_Executive_Summary.pdf',
  3: 'Project3_Colonial_Pipeline_Ransomware_2021_Part1_Deep_Dive.pdf',
  4: 'Project4_Colonial_Pipeline_Ransomware_2021_Part2_Executive_Summary.pdf',
  5: 'Project5_SolarWinds_Supply_Chain_Attack_2020_Part1_Deep_Dive.pdf',
  6: 'Project6_SolarWinds_Supply_Chain_Attack_2020_Part2_Executive_Summary.pdf',
  7: 'Project7_Equifax_Data_Breach_2017_Part1_Deep_Dive.pdf',
  8: 'Project8_Equifax_Data_Breach_2017_Part2_Executive_Summary.pdf'
};
