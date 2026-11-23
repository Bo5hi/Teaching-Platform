// Week 14 short review talks (Security+ Review), one per SY0-701 domain. Shapes: docs/COURSE_V2.md
// Built from the legacy weeks-data.js week 11 domain lessons. Week 14 has no quiz of its own:
// students retake earlier weekly quizzes instead (see docs/build/week14.js).
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['14.1'] = {
  id: '14.1', week: 14, title: 'Domain 1 review: General Security Concepts', mins: 10, module: 'Security+ SY0-701, Domain 1 (12%)',
  intro: "You have now seen every Security+ topic at least once. These five short talks do not teach anything new. Each one walks through one exam domain as a checklist, so you can connect what you learned in Weeks 1 to 9 to the official objectives and spot what you still need to study. Domain 1 is the smallest domain, but every other domain builds on its vocabulary.",
  sections: [
    {
      title: 'How the exam is built',
      body: [
        "The Security+ SY0-701 exam has five domains. Each domain is a share of the questions. Spend your study time roughly in proportion to the weights, and more on any domain where your mock exam score was low."
      ],
      table: {
        head: ['Domain', 'Weight', 'Course weeks to re-read'],
        rows: [
          ['1. General Security Concepts', '12%', 'Weeks 1 and 2'],
          ['2. Threats, Vulnerabilities, and Mitigations', '22%', 'Weeks 1, 5, and 6'],
          ['3. Security Architecture', '18%', 'Weeks 1, 3, and 4'],
          ['4. Security Operations', '28%', 'Weeks 3, 5, 7, 8, and 9'],
          ['5. Security Program Management and Oversight', '20%', 'Weeks 1 and 3, and the capstone (Weeks 10 to 13)']
        ]
      }
    },
    {
      title: 'Security goals and AAA',
      body: [
        "The <strong>CIA triad</strong> is the core: <strong>confidentiality</strong> (only the right people can read it), <strong>integrity</strong> (it has not been changed), and <strong>availability</strong> (it works when needed). Many questions ask which goal a control protects. Encryption mainly protects confidentiality, hashing checks integrity, and backups and redundancy protect availability.",
        "<strong>Non-repudiation</strong> means someone cannot deny an action they took. A digital signature provides it; a hash alone does not. <strong>AAA</strong> is authentication (prove who you are), authorization (decide what you may do), and accounting (record what you did)."
      ]
    },
    {
      title: 'Controls: category and type',
      body: [
        "Every control gets two labels. The <strong>category</strong> says what kind of thing it is. The <strong>type</strong> says what it does. Expect several questions that describe a control and ask you to label it."
      ],
      table: {
        head: ['Categories', 'Types'],
        rows: [
          ['Technical: enforced by technology (firewall, encryption)', 'Preventive: stops it (a locked door)'],
          ['Managerial: policy and planning (risk assessment, policy)', 'Deterrent: discourages it (a warning sign)'],
          ['Operational: carried out by people (guards, training)', 'Detective: finds it (a camera, a log review)'],
          ['Physical: protects the physical space (fences, locks)', 'Corrective: fixes it afterward (restoring a backup)'],
          ['', 'Compensating: a substitute when the preferred control cannot be used'],
          ['', 'Directive: tells people what to do (a policy, a sign)']
        ]
      },
      callout: { kind: 'cedar', title: 'Remember Line 2', text: "In your Week 1 audit, PLANT-PC-07 could not lock its screen without stopping production. Locking it down to the HMI program in kiosk mode on a separate network was the compensating control. That is exactly how the exam frames compensating controls." }
    },
    {
      title: 'Other Domain 1 ideas',
      list: [
        "<strong>Zero trust:</strong> never trust by default, verify every request. The control plane decides (policy engine and policy administrator); the data plane enforces (policy enforcement point).",
        "<strong>Gap analysis:</strong> compare where you are with where a framework says you should be.",
        "<strong>Physical security:</strong> bollards, access control vestibules, fencing, lighting, guards, badges, and sensors.",
        "<strong>Deception:</strong> a honeypot is a fake system, a honeynet is a network of them, a honeyfile is a bait file, and a honeytoken is bait data such as a fake credential.",
        "<strong>Change management:</strong> approval, owners, impact analysis, test results, a backout plan, and a maintenance window, so changes do not cause outages."
      ]
    },
    {
      title: 'Cryptography checklist',
      body: [
        "Cryptography is a large slice of Domain 1. Make sure you can explain each line in one plain sentence."
      ],
      list: [
        "<strong>Symmetric</strong> encryption uses one shared key (AES). <strong>Asymmetric</strong> uses a public and private key pair (RSA, ECC). Asymmetric is often used to swap a symmetric key, which then does the bulk of the work.",
        "<strong>Hashing</strong> makes a fixed-length fingerprint (SHA-256). <strong>Salting</strong> adds random data before hashing a password. <strong>Key stretching</strong> (PBKDF2, bcrypt) makes guessing slower.",
        "A <strong>digital signature</strong> is a hash encrypted with the sender's private key. Anyone can check it with the sender's public key.",
        "<strong>PKI:</strong> a certificate authority (CA) signs certificates. Revocation is checked with a CRL (a list) or OCSP (a live query). Wildcard certificates cover *.domain.",
        "<strong>Key storage:</strong> a TPM is a chip in one computer; an HSM is a dedicated device for many keys; key escrow is a trusted third party holding a copy.",
        "<strong>Obfuscation:</strong> steganography hides data inside other data, tokenization swaps data for a meaningless token, and masking hides part of a value (XXXX-1234)."
      ],
      callout: { kind: 'real', title: 'DigiNotar, 2011', text: "Attackers broke into DigiNotar, a Dutch certificate authority, and issued fraudulent certificates, including one for Google domains that was used to spy on users. Browser makers removed their trust in DigiNotar, and the company went bankrupt the same year. PKI only works while people can trust the CA." }
    },
    {
      title: 'On the exam',
      body: [
        "Domain 1 questions are usually short definitions wrapped in a scenario. Read the scenario, then ask which single word it is describing."
      ],
      callout: { kind: 'exam', title: 'Hash versus signature', text: "If the question needs proof of WHO sent something, the answer involves a private key: a digital signature. If it only needs proof that nothing CHANGED, a hash is enough." }
    }
  ],
  check: [
    { q: "A company encrypts every laptop's hard drive so a thief cannot read the files. Which security goal does this mainly protect?", opts: ["Availability", "Integrity", "Confidentiality", "Non-repudiation"], ans: 2, why: "Encryption keeps data unreadable to anyone without the key, which is confidentiality." },
    { q: "After a ransomware attack, the team restores files from last night's backup. What type of control is the backup acting as?", opts: ["Corrective", "Preventive", "Deterrent", "Detective"], ans: 0, why: "The backup does not stop or detect the attack. It restores things after the damage, which is corrective." },
    { q: "Which phrase best summarizes zero trust?", opts: ["Trust everything inside the firewall", "Trust users but not devices", "Trust only encrypted traffic", "Never trust by default; verify every request"], ans: 3, why: "Zero trust removes automatic trust based on network location and checks every access request." },
    { q: "A random value is added to each password before it is hashed, so identical passwords produce different hashes. What is this called?", opts: ["Key escrow", "Salting", "Tokenization", "Steganography"], ans: 1, why: "A salt is unique random data added before hashing. It defeats precomputed rainbow tables." },
    { q: "A browser needs to check, at the moment of connecting, whether a site's certificate has been revoked. Which method gives a live answer for that one certificate?", opts: ["CRL", "CSR", "HSM", "OCSP"], ans: 3, why: "OCSP (Online Certificate Status Protocol) asks the CA about one certificate in real time. A CRL is a downloaded list." }
  ]
};

COURSE_LESSONS['14.2'] = {
  id: '14.2', week: 14, title: 'Domain 2 review: Threats, Vulnerabilities, and Mitigations', mins: 10, module: 'Security+ SY0-701, Domain 2 (22%)',
  intro: "Domain 2 is about what can go wrong and how to reduce it. It is the second largest domain, and its questions usually describe an attack and ask you to name it, or describe a weakness and ask for the best mitigation. Today's PBQ labs on SQL injection, phishing, and ARP poisoning all sit here.",
  sections: [
    {
      title: 'Threat actors and motivations',
      body: [
        "A <strong>threat actor</strong> is whoever might attack. Know each type by its resources, sophistication, and usual motivation."
      ],
      table: {
        head: ['Actor', 'Typical motivation', 'Resources and skill'],
        rows: [
          ['Nation-state', 'Espionage, war, disruption', 'Very high; can stay hidden for years (APT)'],
          ['Organized crime', 'Financial gain', 'High; runs like a business (ransomware, BEC)'],
          ['Hacktivist', 'Political or social beliefs', 'Varies; often defacement or leaks'],
          ['Insider threat', 'Revenge, money, or simple mistakes', 'Has legitimate access, which is the danger'],
          ['Unskilled attacker', 'Thrill, curiosity', 'Low; uses other people\'s tools'],
          ['Shadow IT', 'Convenience', 'Staff using unapproved tech, not an attacker on purpose']
        ]
      },
      callout: { kind: 'cedar', title: 'Your Week 1 profiles', text: "IRONLATCH (ransomware) was organized crime after money. PAPERWIRE (BEC) was organized crime too. TIDEGLASS was a nation-state after CAD drawings. The former engineer was an insider. If you can still profile those four, you can answer most actor questions." }
    },
    {
      title: 'Vectors and social engineering',
      body: [
        "A <strong>threat vector</strong> is the path in. Social engineering attacks the person instead of the computer."
      ],
      list: [
        "<strong>Phishing</strong> (email), <strong>smishing</strong> (text message), <strong>vishing</strong> (voice call). <strong>Spear phishing</strong> targets one person; <strong>whaling</strong> targets an executive.",
        "<strong>Pretexting</strong> is a made-up story to gain trust. <strong>Impersonation</strong> pretends to be someone with authority.",
        "<strong>Business email compromise</strong> asks for money or data from a real or spoofed executive or vendor account.",
        "<strong>Watering hole:</strong> infect a website the target group visits. <strong>Typosquatting:</strong> register a misspelled domain.",
        "Other vectors: removable media, unsupported software, open ports, default credentials, and the supply chain (MSPs and vendors)."
      ]
    },
    {
      title: 'Vulnerabilities and attack indicators',
      table: {
        head: ['Attack', 'What gives it away'],
        rows: [
          ['SQL injection', 'Input like \' OR 1=1 returns data it should not'],
          ['Cross-site scripting (XSS)', 'Script in user input runs in other people\'s browsers; stored XSS is saved on the site'],
          ['Buffer overflow', 'Too much input overwrites memory and runs code'],
          ['Directory traversal', '../../ in a URL reaching files outside the web folder'],
          ['Password spraying', 'One common password tried against many accounts'],
          ['Brute force', 'Many passwords tried against one account, then lockouts'],
          ['On-path (man-in-the-middle)', 'Duplicate MAC addresses in ARP replies, certificate warnings'],
          ['DDoS / amplification', 'Floods of traffic; small requests causing large replies aimed at a victim'],
          ['Privilege escalation', 'A normal account suddenly gains admin rights'],
          ['Replay / pass-the-hash', 'A captured token or hash reused to log in without the password']
        ]
      },
      body: [
        "Know the malware family names too: ransomware, trojan, worm (spreads by itself), spyware, keylogger, rootkit (hides deep in the OS), logic bomb (waits for a trigger), and fileless malware (lives in memory and trusted tools). A <strong>zero-day</strong> is a flaw with no patch yet."
      ]
    },
    {
      title: 'Mitigations',
      list: [
        "<strong>Patching</strong> removes known vulnerabilities.",
        "<strong>Hardening</strong> turns off what is not needed: services, ports, and default accounts.",
        "<strong>Segmentation</strong> and <strong>isolation</strong> stop an attacker from moving to the next system.",
        "<strong>Least privilege</strong> limits what a stolen account can do.",
        "<strong>Application allow lists</strong> let only approved programs run.",
        "<strong>Encryption</strong>, <strong>monitoring</strong>, <strong>configuration enforcement</strong>, and <strong>decommissioning</strong> old systems round out the list."
      ],
      callout: { kind: 'real', title: 'WannaCry, 2017', text: "In May 2017, the WannaCry ransomware worm spread across the world through a flaw in Windows file sharing (SMBv1). Microsoft had released a patch about two months earlier. Organizations that had applied it, or had blocked SMB at the network edge, were largely untouched. Patching and segmentation are mitigations you can actually see work." }
    },
    {
      title: 'On the exam',
      body: [
        "Domain 2 questions often hide the answer in one detail: one password and many accounts (spraying) versus many passwords and one account (brute force), or an email to the CFO (whaling) versus an email to everyone (phishing)."
      ],
      callout: { kind: 'exam', title: 'Threat versus vulnerability', text: "A vulnerability is the weakness. A threat is who or what could use it. Risk is the chance it happens times how bad it would be. Mixing these up costs easy points." }
    }
  ],
  check: [
    { q: "An attacker tries the password 'Spring2026!' once against every account in the company to avoid lockouts. What is this?", opts: ["Brute force", "Password spraying", "Credential stuffing", "Pass-the-hash"], ans: 1, why: "Spraying tries one or a few common passwords across many accounts, staying under each account's lockout limit." },
    { q: "A web form stores a visitor's comment that contains a script, and the script runs in every later visitor's browser. What is this?", opts: ["Stored cross-site scripting", "SQL injection", "Directory traversal", "Buffer overflow"], ans: 0, why: "Script saved on the site and served to other users is stored (persistent) XSS." },
    { q: "Which threat actor is most likely to be motivated by political or social causes?", opts: ["Organized crime", "Nation-state", "Hacktivist", "Shadow IT"], ans: 2, why: "Hacktivists attack to promote a cause, not mainly for money." },
    { q: "An attacker compromises a trade association website that a target company's engineers visit every week. What is this called?", opts: ["Typosquatting", "Watering hole attack", "Pretexting", "Whaling"], ans: 1, why: "A watering hole attack infects a site the target group already trusts and visits." },
    { q: "Which mitigation most directly stops an attacker on one compromised workstation from reaching the payment servers?", opts: ["Stronger passwords on the workstation", "A longer screen lock timeout", "Security awareness posters", "Network segmentation between user and payment networks"], ans: 3, why: "Segmentation limits lateral movement, so a foothold in one zone does not reach another." }
  ]
};

COURSE_LESSONS['14.3'] = {
  id: '14.3', week: 14, title: 'Domain 3 review: Security Architecture', mins: 10, module: 'Security+ SY0-701, Domain 3 (18%)',
  intro: "Domain 3 is about choosing the right building blocks and arranging them safely: where systems live, how networks are divided, how data is protected, and how the business keeps running when something fails. Today's PBQ labs on wireless, VPN, and switch ports all sit here.",
  sections: [
    {
      title: 'Architecture models',
      body: [
        "Know the trade-offs of each place a system can live. In the cloud, the <strong>shared responsibility model</strong> splits security between the provider and the customer, and the split depends on the service model."
      ],
      table: {
        head: ['Model', 'Provider manages', 'Customer still manages'],
        rows: [
          ['IaaS (infrastructure)', 'Hardware, network, virtualization', 'Operating system, apps, data, access'],
          ['PaaS (platform)', 'Also the operating system and runtime', 'Apps, data, access'],
          ['SaaS (software)', 'Almost everything', 'Data, user accounts, and access settings']
        ]
      },
      list: [
        "<strong>Hybrid</strong> mixes on-premises and cloud. <strong>Infrastructure as code</strong> builds systems from templates, so every build is the same.",
        "<strong>Virtualization</strong> runs many operating systems on one host; <strong>containers</strong> share the host's kernel and are lighter.",
        "<strong>IoT, ICS, SCADA, and embedded systems</strong> are hard to patch, so isolate them on their own networks."
      ]
    },
    {
      title: 'Network design',
      list: [
        "<strong>Segmentation</strong> divides the network (VLANs, subnets) so trouble in one part cannot spread. An <strong>air gap</strong> is full physical separation.",
        "A <strong>screened subnet</strong> (DMZ) holds public-facing servers between the internet and the internal network.",
        "A <strong>jump server</strong> is the one hardened system admins use to reach sensitive systems.",
        "<strong>Firewalls:</strong> stateless filters each packet alone; stateful tracks connections; a next-generation firewall (NGFW) knows applications; a web application firewall (WAF) protects websites.",
        "<strong>IDS</strong> alerts, <strong>IPS</strong> sits inline and blocks. Placement matters: inline for prevention, on a span or tap for detection.",
        "<strong>Port security</strong> and <strong>802.1X</strong> stop unknown devices from using a switch port. <strong>NAC</strong> checks devices before they join.",
        "<strong>VPNs</strong> (IPsec or TLS) protect remote access; <strong>SD-WAN</strong> and <strong>SASE</strong> bring networking and security to branch and remote users through the cloud."
      ],
      callout: { kind: 'cedar', title: 'Your Week 4 finding', text: "At Cedar Creek, the plant and office VLANs could reach each other freely. A problem on a plant PC could reach the office, and the reverse. Segmentation with firewall rules between them is the Domain 3 answer." }
    },
    {
      title: 'Protecting data',
      list: [
        "<strong>Data types:</strong> regulated, trade secret, intellectual property, legal, financial, and human-readable versus non-human-readable.",
        "<strong>Classification:</strong> labels such as public, internal, confidential, and restricted decide how data is handled.",
        "<strong>Data states:</strong> at rest (stored), in transit (moving), in use (being processed). Each needs its own protection.",
        "<strong>Data sovereignty:</strong> data is subject to the laws of the country where it is stored.",
        "<strong>Methods:</strong> encryption, hashing, masking, tokenization, obfuscation, segmentation, and permission restrictions."
      ]
    },
    {
      title: 'Resilience and recovery',
      body: [
        "Availability is an architecture choice. Plan for failure before it happens."
      ],
      table: {
        head: ['Concept', 'Meaning'],
        rows: [
          ['High availability', 'Systems keep running through a failure, often with load balancing or clustering'],
          ['Hot site', 'Fully equipped and running; take over almost at once'],
          ['Warm site', 'Equipment ready, data must be loaded; hours to days'],
          ['Cold site', 'Space and power only; days to weeks'],
          ['Backups', 'Full, incremental, differential, snapshots, replication; keep a copy offsite or offline'],
          ['Power', 'UPS for short outages, generator for long ones'],
          ['Testing', 'Tabletop exercises, failover tests, simulations, parallel processing']
        ]
      },
      callout: { kind: 'real', title: 'Target, 2013', text: "The attackers first got in with credentials stolen from Target's heating and refrigeration contractor. From the vendor-facing systems they reached the point-of-sale network, because the network was not divided tightly enough. Better segmentation between vendor access and payment systems is one of the lessons most often drawn from the case." }
    },
    {
      title: 'On the exam',
      body: [
        "Domain 3 questions often ask where to place something or which design fits a requirement. Look for the constraint: cost, uptime, legal location of data, or who manages what."
      ],
      callout: { kind: 'exam', title: 'Pick the site by recovery time', text: "If the business must be back in minutes, choose a hot site. If it can wait days and money is tight, a cold site. Warm sits in between." }
    }
  ],
  check: [
    { q: "A company rents virtual servers in the cloud and installs its own operating system and applications. Which service model is this?", opts: ["SaaS", "PaaS", "IaaS", "On-premises"], ans: 2, why: "With IaaS the provider runs the hardware and virtualization; the customer manages the OS and everything above it." },
    { q: "Where should a company place its public web server?", opts: ["In a screened subnet (DMZ)", "On the internal user network", "On the management network", "On the same VLAN as the domain controller"], ans: 0, why: "A screened subnet lets the public reach the server while keeping it separate from internal systems." },
    { q: "Which recovery site can take over operations almost immediately?", opts: ["Hot site", "Cold site", "Warm site", "Offline backup"], ans: 0, why: "A hot site is fully equipped and running, so failover is nearly instant." },
    { q: "Which control keeps an unknown laptop from getting network access when it is plugged into an office wall jack?", opts: ["A load balancer", "Data masking", "802.1X port-based authentication", "A cold site"], ans: 2, why: "802.1X makes a device authenticate before the switch port passes its traffic." },
    { q: "A database is copied to a test team with card numbers replaced by random values that cannot be reversed without a separate lookup system. What is this?", opts: ["Hashing", "Tokenization", "Steganography", "Compression"], ans: 1, why: "Tokenization swaps sensitive values for tokens with no mathematical link to the original." }
  ]
};

COURSE_LESSONS['14.4'] = {
  id: '14.4', week: 14, title: 'Domain 4 review: Security Operations', mins: 10, module: 'Security+ SY0-701, Domain 4 (28%)',
  intro: "Domain 4 is the largest domain, more than a quarter of the exam, and it is the work you did in Weeks 7 to 9: hardening, scanning, monitoring, identity, and incident response. Expect scenario questions that ask for the best tool or the next step. Today's PBQ labs on vulnerability scanning and pfSense sit here.",
  sections: [
    {
      title: 'Hardening and asset management',
      list: [
        "<strong>Secure baselines:</strong> a standard secure configuration, deployed and then checked for drift.",
        "<strong>Hardening targets:</strong> workstations, servers, switches, routers, cloud, mobile, ICS, embedded, and IoT. Change defaults, remove what is unused, patch.",
        "<strong>Wireless:</strong> WPA3, RADIUS with 802.1X for enterprise Wi-Fi, site surveys and heat maps.",
        "<strong>Mobile:</strong> MDM, with BYOD, COPE, or CYOD deployment models; remote wipe.",
        "<strong>Application security:</strong> input validation, secure cookies, static code analysis, code signing, sandboxing.",
        "<strong>Asset management:</strong> you cannot protect what you have not listed. Track ownership and classification, and sanitize or destroy media at end of life, with a certificate."
      ]
    },
    {
      title: 'Vulnerability management',
      body: [
        "The cycle is <strong>identify, analyze, respond, validate, report</strong>. Identify with scans (credentialed scans log in and see more), penetration tests, bug bounties, and threat feeds. Analyze with <strong>CVE</strong> (the ID) and <strong>CVSS</strong> (the 0-10 severity score), then adjust for your environment. Respond by patching, adding compensating controls, segmenting, buying insurance, or granting a documented exception. Validate by rescanning."
      ],
      callout: { kind: 'tip', title: 'False positives', text: "A scanner can report a vulnerability that is not really there, for example because it read a version banner. Confirm before you escalate, the same way you confirmed alerts in Week 9." }
    },
    {
      title: 'Monitoring and security tools',
      table: {
        head: ['Tool', 'Job'],
        rows: [
          ['SIEM', 'Collects and correlates logs, raises alerts'],
          ['SOAR / automation', 'Runs playbooks automatically, such as disabling an account'],
          ['EDR / XDR', 'Watches endpoints (and more) for malicious behavior; can isolate hosts'],
          ['DLP', 'Stops sensitive data leaving'],
          ['FIM', 'Alerts when important files change'],
          ['NAC', 'Checks devices before they join the network'],
          ['DNS filtering / web filter', 'Blocks known bad domains and site categories'],
          ['NetFlow', 'Summarizes who talked to whom and how much'],
          ['SNMP traps', 'Alerts from network devices'],
          ['UBA / UEBA', 'Flags behavior that differs from a user\'s normal pattern']
        ]
      },
      body: [
        "Email security also lives here: SPF, DKIM, DMARC, and a secure email gateway, as you used in Talk 9.3."
      ]
    },
    {
      title: 'Identity and access management',
      list: [
        "<strong>Lifecycle:</strong> provisioning, permission changes, and deprovisioning when people leave (Brian Kessler's badge was the Week 1 lesson).",
        "<strong>SSO and federation:</strong> LDAP for directories, SAML and OpenID Connect for web sign-on, OAuth for delegated access.",
        "<strong>Access control models:</strong> MAC (labels set by authority), DAC (owner decides), RBAC (by job role), ABAC (by attributes), rule-based (by conditions such as time).",
        "<strong>MFA:</strong> something you know, have, are, or somewhere you are. Phishing-resistant MFA uses hardware keys or passkeys.",
        "<strong>PAM:</strong> just-in-time admin rights, password vaulting, and short-lived credentials for privileged accounts."
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline, 2021', text: "The attackers got in through an old VPN account that was still active and did not require MFA. Two Domain 4 controls, deprovisioning unused accounts and requiring MFA on remote access, would each have closed that door." }
    },
    {
      title: 'Incident response and forensics',
      body: [
        "The process: <strong>preparation, detection, analysis, containment, eradication, recovery, lessons learned</strong>. Exercises include tabletop (talk-through), simulation, and full tests. <strong>Threat hunting</strong> looks for attackers no alert has found. <strong>Root cause analysis</strong> asks why it happened.",
        "Forensics: a <strong>legal hold</strong> preserves data for a case; <strong>chain of custody</strong> records every hand that touched evidence; acquire in <strong>order of volatility</strong> (memory before disk); work on a verified copy, never the original."
      ],
      callout: { kind: 'exam', title: 'FIRST and NEXT', text: "Domain 4 loves 'what should the analyst do FIRST?' Place the scenario in the IR process, then pick the step that comes next. Malware spreading now? Contain before you eradicate or restore." }
    }
  ],
  check: [
    { q: "A vulnerability scan logs in to each server with an account so it can see installed patches and settings. What kind of scan is this?", opts: ["Non-credentialed scan", "Passive scan", "Port scan", "Credentialed scan"], ans: 3, why: "A credentialed scan uses valid logins, so it sees much more than a scan from outside." },
    { q: "Which tool collects logs from many systems in one place and correlates them to raise alerts?", opts: ["NAC", "WAF", "SIEM", "HSM"], ans: 2, why: "A SIEM aggregates and correlates log data to detect suspicious patterns." },
    { q: "Permissions are granted according to each person's job function, such as 'Accounts Payable clerk'. Which access control model is this?", opts: ["Role-based access control", "Mandatory access control", "Discretionary access control", "Rule-based access control"], ans: 0, why: "RBAC assigns permissions to roles and people to roles." },
    { q: "During evidence collection, which should normally be captured first?", opts: ["The hard drive image", "Backup tapes", "Printed reports", "System memory (RAM)"], ans: 3, why: "Order of volatility: memory disappears at power-off, so it is captured before disk." },
    { q: "Which framework step comes right after containment in incident response?", opts: ["Preparation", "Eradication", "Detection", "Lessons learned"], ans: 1, why: "After the damage is contained, eradication removes the cause, then recovery restores normal operation." }
  ]
};

COURSE_LESSONS['14.5'] = {
  id: '14.5', week: 14, title: 'Domain 5 review: Security Program Management and Oversight', mins: 10, module: 'Security+ SY0-701, Domain 5 (20%)',
  intro: "Domain 5 is the business side of security: governance, risk, third parties, compliance, audits, and awareness. It is a fifth of the exam, and its vocabulary turns up in the other domains too, so precise words here raise your score everywhere. You used most of these ideas in the capstone.",
  sections: [
    {
      title: 'Governance documents',
      body: [
        "<strong>Governance</strong> is the set of policies, standards, roles, and oversight that directs security. The exam tests the difference between the document types."
      ],
      table: {
        head: ['Document', 'What it is', 'Example'],
        rows: [
          ['Policy', 'High-level rule from management: what must happen', '"All confidential data must be encrypted."'],
          ['Standard', 'Specific mandatory requirement: how to meet the policy', '"Passwords must be at least 14 characters."'],
          ['Procedure', 'Step-by-step instructions', 'The help desk password reset steps with a callback'],
          ['Guideline', 'Recommended practice, not mandatory', '"Consider using a password manager."']
        ]
      },
      list: [
        "Common policies: acceptable use (AUP), information security, incident response, business continuity, disaster recovery, change management, and software development.",
        "<strong>Data roles:</strong> the <strong>owner</strong> is accountable and decides classification; the <strong>custodian</strong> or steward handles day-to-day care; the <strong>controller</strong> decides why and how personal data is processed; the <strong>processor</strong> processes it for the controller."
      ],
      callout: { kind: 'cedar', title: 'What Week 1 found', text: "Cedar Creek had an acceptable use policy from 2018 and almost nothing else: no information security policy, no data classification policy, and no incident response plan. Writing those is governance work, and it is where a new security program starts." }
    },
    {
      title: 'Risk management',
      body: [
        "<strong>Risk</strong> combines likelihood and impact. <strong>Qualitative</strong> analysis uses ratings such as high, medium, and low. <strong>Quantitative</strong> analysis uses money:"
      ],
      list: [
        "<strong>SLE</strong> (single loss expectancy) = asset value x exposure factor.",
        "<strong>ARO</strong> (annualized rate of occurrence) = how many times a year it is expected.",
        "<strong>ALE</strong> (annualized loss expectancy) = SLE x ARO.",
        "<strong>Inherent risk</strong> is before controls; <strong>residual risk</strong> is what remains after.",
        "<strong>Risk appetite</strong> is how much risk the organization will take on to reach its goals; <strong>risk tolerance</strong> is how far it will let a specific risk vary.",
        "A <strong>risk register</strong> lists each risk with its owner, rating, and treatment.",
        "<strong>Treatments:</strong> mitigate (add controls), transfer (insurance, contracts), avoid (stop the risky activity), accept (document and live with it, sometimes through an exception).",
        "<strong>Business impact analysis</strong> sets RTO (how fast to restore), RPO (how much data you can lose), MTTR, and MTBF."
      ]
    },
    {
      title: 'Third parties, compliance, and audits',
      list: [
        "<strong>Vendor risk:</strong> due diligence before signing, security questionnaires, right-to-audit clauses, independent assessments, and ongoing monitoring.",
        "<strong>Agreements:</strong> SLA (service level), MOU (intent, usually not binding), MOA (more formal), MSA (master terms), SOW or work order (specific work), NDA (confidentiality), BPA (business partnership).",
        "<strong>Compliance:</strong> follow laws, regulations, and contracts. Consequences include fines, sanctions, lost licenses, and reputational damage. Know due diligence, due care, and attestation.",
        "<strong>Privacy:</strong> the data subject is the person the data is about; know data retention, data inventory, and the right to be forgotten.",
        "<strong>Audits and tests:</strong> internal versus external audits, regulatory examinations, and penetration tests in known, partially known, or unknown environments."
      ],
      callout: { kind: 'real', title: 'SolarWinds, 2020', text: "Attackers inserted malicious code into updates for SolarWinds Orion, a network management product, and thousands of customers installed the signed, normal-looking update. Victims did nothing wrong in the moment; the risk came through a trusted vendor. That is why Domain 5 treats vendor assessment and supply chain analysis as part of every security program." }
    },
    {
      title: 'Security awareness',
      body: [
        "Training covers phishing, password management, removable media, social engineering, insider threats, operational security, and safe remote work. Phishing simulations measure who clicks and who reports, and the program improves from those numbers. At Cedar Creek, 39% of staff had not finished training in Week 1."
      ]
    },
    {
      title: 'On the exam',
      callout: { kind: 'exam', title: 'Watch the verb', text: "MUST and SHALL point to policies and standards. SHOULD and CONSIDER point to guidelines. 'Buying insurance' is transfer, 'stopping the service' is avoid, 'adding controls' is mitigate, and 'documenting and moving on' is accept." },
      body: [
        "Domain 5 questions are vocabulary in disguise. Learn the exact terms, because two answers will often be close."
      ]
    }
  ],
  check: [
    { q: "A company buys cyber insurance to cover the financial loss from a possible breach. Which risk treatment is this?", opts: ["Avoid", "Accept", "Mitigate", "Transfer"], ans: 3, why: "Insurance shifts the financial impact to another party, which is transfer." },
    { q: "Which document gives a specific, mandatory requirement such as 'passwords must be at least 14 characters'?", opts: ["Policy", "Standard", "Guideline", "Memorandum of understanding"], ans: 1, why: "A standard states the specific required setting or method that meets a policy." },
    { q: "An asset's single loss expectancy is $20,000 and the event is expected twice a year. What is the ALE?", opts: ["$10,000", "$20,000", "$40,000", "$200,000"], ans: 2, why: "ALE = SLE x ARO = $20,000 x 2 = $40,000." },
    { q: "After installing EDR and MFA, some risk of a breach still remains. What is that remaining risk called?", opts: ["Residual risk", "Inherent risk", "Risk appetite", "Exposure factor"], ans: 0, why: "Residual risk is the risk left over after controls are applied." },
    { q: "Under privacy roles, which party decides why and how personal data is collected and used?", opts: ["Data processor", "Data subject", "Data controller", "Data custodian"], ans: 2, why: "The controller decides the purpose and means. The processor acts on the controller's instructions." }
  ]
};
