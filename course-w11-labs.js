// Week 11 labs (Capstone, week 2: fieldwork). Shapes: docs/COURSE_V2.md
// Auto-check answers come from materials/week9/evidence/ and materials/week9/scans/. Re-check them if those files change.
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['11.1'] = {
  id: '11.1', week: 11, title: 'Core evidence check (EV-01 to EV-11)', mins: 20, env: 'browser',
  goal: "Prove that you read the eleven core Northgate documents the way an assessor does: what each one proves, whether it is approved and current, and how it lines up with the others. Every answer here goes into your evidence log and later into the questionnaire.",
  youNeed: [
    "Talk 11.1 finished, and your INT-02 notes from this morning",
    "The core documents read (the block before this one): <a href=\"materials/week9/evidence/index.html\" target=\"_blank\" rel=\"noopener\">Northgate evidence library</a>",
    "Your engagement folder with the evidence log (one row per item: ID, title, date, approved?, current?, what it proves, which Q#s it supports)"
  ],
  steps: [
    {
      title: 'Why everyone reviews the core set',
      body: [
        "The evidence library holds 21 items. EV-01 to EV-11 are the core set that every assessor on the team reviews, because they cover policy, risk, assets, access, the firewall, training, logging, incident response, backups, vendors, and the April review. James Chen gave you most of them this morning.",
        "EV-12 to EV-21 are different. You may use one only if one of your interviews gave you its ID. You review those tomorrow."
      ]
    },
    {
      title: 'Policy, risk, and assets: EV-01, EV-02, EV-03',
      body: [
        "Open <a href=\"materials/week9/evidence/EV-01-information-security-policy.html\" target=\"_blank\" rel=\"noopener\">EV-01</a>. Read the document control table first: approver, approval date, review cycle, next review due. Then compare sections 5, 6, and 7 (passwords and MFA, remote access, backups) with what you saw in EV-04, EV-05, and EV-09.",
        "Open <a href=\"materials/week9/evidence/EV-02-risk-register.csv\" target=\"_blank\" rel=\"noopener\">EV-02</a>. Look at the last_reviewed column and at the status of each risk. Ask yourself whether the April incident changed anything in it.",
        "Open <a href=\"materials/week9/evidence/EV-03-asset-inventory.csv\" target=\"_blank\" rel=\"noopener\">EV-03</a>. Note which servers it lists. Keep it open: tomorrow you compare it with the internal scan."
      ],
      tip: "CSV files open in a spreadsheet program or a text editor. If your browser downloads them, open the downloaded copy."
    },
    {
      title: 'Access and the network: EV-04, EV-05, EV-10',
      body: [
        "In <a href=\"materials/week9/evidence/EV-04-mfa-enrollment-report.csv\" target=\"_blank\" rel=\"noopener\">EV-04</a>, sort or filter by mfa_status and count. Then count the not-enrolled accounts by department.",
        "In <a href=\"materials/week9/evidence/EV-05-firewall-config-excerpt.txt\" target=\"_blank\" rel=\"noopener\">EV-05</a>, read the commented-out port-forward and the note under it, the VPN users and their MFA column, and every firewall policy. Look for any rule marked TEMP, any rule with service ALL, and any rule that does not log.",
        "In <a href=\"materials/week9/evidence/EV-10-vendor-access-list.csv\" target=\"_blank\" rel=\"noopener\">EV-10</a>, check MFA, contract terms, and account status for each vendor. Compare the vendor accounts with the VPN users in EV-05."
      ]
    },
    {
      title: 'Training, monitoring, response, recovery: EV-06 to EV-09, EV-11',
      body: [
        "<a href=\"materials/week9/evidence/EV-06-security-awareness-training-log.csv\" target=\"_blank\" rel=\"noopener\">EV-06</a>: count completed training and look at the phishing test column.",
        "<a href=\"materials/week9/evidence/EV-07-log-alerting-configuration.html\" target=\"_blank\" rel=\"noopener\">EV-07</a>: list the alert rules that are on and the ones that are off. For each step of the April attack (login, new account, scheduled task, large upload), decide whether an alert would fire today. Check the alert history for an alert nobody acknowledged.",
        "<a href=\"materials/week9/evidence/EV-08-incident-response-plan.html\" target=\"_blank\" rel=\"noopener\">EV-08</a>: version, status, approver, the TBD entries, and any record of a test.",
        "<a href=\"materials/week9/evidence/EV-09-backup-job-report.txt\" target=\"_blank\" rel=\"noopener\">EV-09</a>: which servers have jobs, which copies go offsite, how the repository is mounted, and the restore test history. Compare with EV-01 section 7.",
        "<a href=\"materials/week9/evidence/EV-11-post-incident-review-summary.html\" target=\"_blank\" rel=\"noopener\">EV-11</a>: pick two actions marked Done or In progress and check them against another EV item. Do they agree?"
      ]
    },
    {
      title: 'Map evidence to questions',
      body: [
        "Open your copy of <a href=\"materials/week9/northgate-questionnaire.xlsx\" target=\"_blank\" rel=\"noopener\">northgate-questionnaire.xlsx</a>. For each core item, add the question numbers it supports to your evidence log. Most items support more than one question. For example, a backup report can speak to protected backup copies, regular backups, and restore testing.",
        "Then answer the checkpoints. The fact questions are checked right away. Your instructor reads the rest."
      ]
    }
  ],
  checkpoints: [
    { id: 'c1', q: "EV-04: how many of the 62 accounts are <strong>not</strong> enrolled in MFA?", kind: 'number', answer: 24 },
    { id: 'c2', q: "EV-04: how many of those not-enrolled accounts are in the Warehouse department?", kind: 'number', answer: 22 },
    { id: 'c3', q: "EV-01: in what year was the policy's next review due? (four digits)", kind: 'number', answer: 2023 },
    { id: 'c4', q: "EV-02: on what date were all nine risks last reviewed? (YYYY-MM-DD)", kind: 'text', answer: ['2025-11-18'] },
    { id: 'c5', q: "EV-05: what is the name of the firewall policy that lets the warehouse network reach all servers on any service?", kind: 'text', answer: ['wh-temp-any', '"wh-temp-any"', '45', 'rule 45', 'policy 45'] },
    { id: 'c6', q: "EV-10: how many vendor or contractor entries have MFA marked 'No'?", kind: 'number', answer: 3 },
    { id: 'c7', q: "EV-09: on what date was the last restore test recorded? (YYYY-MM-DD)", kind: 'text', answer: ['2025-06-12'] },
    { id: 'c8', q: "EV-09: which server has no backup job at all? (host name)", kind: 'text', answer: ['ng-legacy01', 'ng-legacy01 (10.20.1.50)', '10.20.1.50'] },
    { id: 'c9', q: "EV-08: what is the status of the incident response plan?", kind: 'choice', opts: ["Version 1.0, approved by the CEO", "Version 0.3, a draft that is not yet approved", "Approved, and tested in a tabletop exercise", "There is no incident response plan document"], answer: 1 },
    { id: 'c10', q: "EV-07: which April 2026 attacker action would <strong>still</strong> not raise an alert today?", kind: 'choice', opts: ["Copying more than 500 MB to one outside address within an hour", "Creating a new local account on a server", "Changing the firewall configuration", "Ten failed SSH logins from one address in five minutes"], answer: 1 },
    { id: 'c11', q: "Corroboration: pick two EV-11 actions marked Done or In progress. For each, name the other EV item you checked it against and say whether they agree.", kind: 'text' },
    { id: 'c12', q: "Paste three rows of your evidence log: ID, approved?, current?, what it proves, and the Q#s it supports.", kind: 'paste' }
  ],
  reflection: "Which core document surprised you most when you compared it with what James told you, and how will that change the way you score the questions it supports?"
};

COURSE_LABS['11.2'] = {
  id: '11.2', week: 11, title: 'Scan check (SCAN-01 to SCAN-03)', mins: 20, env: 'browser',
  goal: "Read the three scans the MCCoE team ran, pull out the facts that matter, and compare the internal scan with the asset inventory (EV-03). Scans show what is really on the network, so this is where you test what the documents and interviews told you.",
  youNeed: [
    "Talk 11.1 (port states, Nessus, CVSS bands)",
    "The scan results read (the block before this one): <a href=\"materials/week9/scans/index.html\" target=\"_blank\" rel=\"noopener\">Northgate scan results</a>",
    "EV-03 asset inventory open next to SCAN-02"
  ],
  steps: [
    {
      title: 'Start with the summary',
      body: [
        "Open <a href=\"materials/week9/scans/SCAN-03-nessus-summary.html\" target=\"_blank\" rel=\"noopener\">the SCAN-03 summary</a>. Note the scan date, who authorized it, which hosts were scanned with credentials and which were not, and the count of findings by severity.",
        "Then open <a href=\"materials/week9/scans/SCAN-03-nessus-findings.csv\" target=\"_blank\" rel=\"noopener\">the SCAN-03 findings CSV</a>. Sort by the CVSS column. For each Critical and High finding, write the plugin ID, host, CVSS score, and one plain sentence on why it matters."
      ]
    },
    {
      title: 'What the internet can see',
      body: [
        "Open <a href=\"materials/week9/scans/SCAN-01-nmap-external.txt\" target=\"_blank\" rel=\"noopener\">SCAN-01</a>. List every port with the state <strong>open</strong>. Then read Run 2: the targeted check of ports 22 and 2222. Compare it with the firewall export (EV-05) and with what the client brief says about April."
      ],
      tip: "UDP 500 and 4500 are used by IPsec VPNs. HTTPS is 443/tcp."
    },
    {
      title: 'Compare the internal scan with the inventory',
      body: [
        "Open <a href=\"materials/week9/scans/SCAN-02-nmap-internal.txt\" target=\"_blank\" rel=\"noopener\">SCAN-02</a> and EV-03 side by side. Go host by host through the server network (10.20.1.x) first, then skim the office and warehouse hosts.",
        "Most Windows computers show the same three ports (135, 139, 445). That is normal. Look for the hosts that are different, and for any host that answers the scan but is not in the inventory. The gateway addresses ending in .1 belong to the firewall, and laptops and handheld scanners get addresses by DHCP, so do not count those as missing.",
        "Cite scan evidence precisely, for example 'SCAN-02, host 10.20.1.50, port 21/tcp'."
      ]
    },
    {
      title: 'Connect the scans to the questionnaire',
      body: [
        "Scan results speak to several questions: the hardware inventory, vulnerability scanning, patching, secure configuration, and network zones. Add the SCAN IDs to your evidence log next to the question numbers they support. Then answer the checkpoints."
      ]
    }
  ],
  checkpoints: [
    { id: 'c1', q: "SCAN-01: how many ports are <strong>open</strong> to the internet (count TCP and UDP)?", kind: 'number', answer: 3 },
    { id: 'c2', q: "SCAN-01 Run 2: what state does Nmap report for 22/tcp?", kind: 'text', answer: ['filtered'] },
    { id: 'c3', q: "SCAN-03: how many findings in total?", kind: 'number', answer: 18 },
    { id: 'c4', q: "SCAN-03: how many findings are Critical?", kind: 'number', answer: 2 },
    { id: 'c5', q: "SCAN-03: how many findings are High?", kind: 'number', answer: 4 },
    { id: 'c6', q: "SCAN-03: which host appears in the most findings? (host name)", kind: 'text', answer: ['ng-legacy01', 'ng-legacy01 (10.20.1.50)', '10.20.1.50'] },
    { id: 'c7', q: "SCAN-03: what is the highest CVSS v3 score in the findings?", kind: 'number', answer: 10 },
    { id: 'c8', q: "SCAN-02 vs EV-03: what is the IP address of the device with no DNS name that answers the scan but is not in the inventory?", kind: 'text', answer: ['10.20.1.61'] },
    { id: 'c9', q: "SCAN-02: how many TCP ports are open on ng-legacy01?", kind: 'number', answer: 4 },
    { id: 'c10', q: "The backup console finding has a CVSS v3 score of 7.3. Which severity band is that?", kind: 'choice', opts: ["Critical", "High", "Medium", "Low"], answer: 1 },
    { id: 'c11', q: "Name one thing the scans showed that the documents or interviews did not, with the SCAN and EV IDs.", kind: 'text' },
    { id: 'c12', q: "SCAN-03 lists three workstations missing Windows updates. Look them up in EV-03. What do you notice about their last_seen dates or owners, and what would you ask James?", kind: 'text' }
  ],
  reflection: "In two or three sentences: how did the scans change your picture of Northgate compared with what you heard in the interviews?"
};
