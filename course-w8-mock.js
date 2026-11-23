// Week 8 mock project: Blue Team Lab phases 4-5 (Pillar5_BlueTeam.html?phase=3 and ?phase=4).
// The work itself lives in the existing Blue Team Lab page, which saves to mccoe_blueteam/{key}
// (phase3, phase3_link, phase4, phase4_link). This file gives the grader the rubric notes and an answer key.
// Phases 1-3 (Target logs, SolarWinds IOCs, Colonial packets) are Week 7's mock; phase 5 draws on all four.
window.MOCK_W8 = {
  id: 'w8',
  title: 'Blue Team Lab: Incident Response and Defensive Report',
  source: { page: 'Pillar5_BlueTeam.html', phases: [3, 4], firebase: 'mccoe_blueteam', fields: ['phase3_link', 'phase4_link'] },
  brief: [
    'Phase 4: you are the Equifax CISO on July 29, 2017. Write an incident response report covering all six NIST steps: for each, the actions taken or that should have been taken, who is responsible, the tools needed, and what Equifax actually did wrong. Add a 2-3 sentence board briefing.',
    'Phase 5: write one Blue Team defensive report covering the four lab scenarios (Target logs, SolarWinds IOCs, Colonial Pipeline packets, Equifax incident response): executive summary, findings with severity, attack timeline, recommendations with tools, and MITRE ATT&CK technique IDs.',
    'Submit a shared document link for each phase in the Blue Team Lab page. Both are due at the end of Day 2.'
  ],
  key: {
    equifax: {
      preparation: 'Patch management failed: the Apache Struts flaw CVE-2017-5638 was public and patched in March 2017, but the vulnerable dispute portal was not patched and a scan did not find it. Asset inventory and patch accountability were weak.',
      detection: 'Attackers were in from mid-May 2017. An expired digital certificate had stopped a traffic-inspection device from examining encrypted traffic; when it was renewed on July 29, staff saw suspicious traffic almost at once.',
      containment: 'Equifax blocked the suspicious traffic and took the dispute portal offline around July 29-30. Good answers mention isolating the portal, blocking attacker addresses, and preserving logs and images first.',
      eradication: 'Patch Struts, remove web shells and attacker tools, rotate the credentials the attackers found stored unencrypted, and review every database those credentials could reach.',
      recovery: 'Rebuild and restore the portal only after patching, with monitoring and data segmentation added; verify certificate renewals for inspection devices.',
      lessons: 'Patch and asset management, certificate management, network segmentation, credential storage, and notification. Equifax announced the breach on September 7, 2017, about six weeks after detection; about 147 million people were affected; the 2019 FTC/CFPB/states settlement was up to $700 million.',
      roles: 'CISO or incident lead, IR team, IT operations, legal counsel, communications/PR, executive leadership and the board, outside forensic firm, law enforcement (FBI).',
      boardBriefing: 'A strong statement says what happened, the scale known so far, what has been done (portal offline, investigators engaged), what is still unknown, and the decision or support needed. No speculation, no jargon.'
    },
    phase5: {
      target: 'Third-party HVAC vendor credentials (fazio_svc) used for VPN access; pivot to TARGET\\admin; POS malware; exfiltration by FTP to 96.27.170.30. ATT&CK examples: T1078 Valid Accounts, T1133 External Remote Services, T1048 Exfiltration Over Alternative Protocol.',
      solarwinds: 'Trojanized Orion update (SUNBURST); C2 domain avsvmcloud.com; modified signed DLL; registry run key. ATT&CK examples: T1195.002 Compromise Software Supply Chain, T1071 Application Layer Protocol, T1547.001 Registry Run Keys.',
      colonial: 'The lab capture shows VPN authentication from an external address, a ping sweep, the vsftpd 2.3.4 backdoor (port 6200) and SMB share enumeration. ATT&CK examples: T1133 External Remote Services, T1018 Remote System Discovery, T1190 Exploit Public-Facing Application, T1135 Network Share Discovery. (The real Colonial entry point was a VPN account without MFA, T1078/T1133.)',
      equifax: 'Unpatched Apache Struts (CVE-2017-5638): T1190 Exploit Public-Facing Application; credentials found in plain text: T1552 Unsecured Credentials; slow encrypted exfiltration: T1041 Exfiltration Over C2 Channel or T1048.',
      severity: 'Initial access findings that led to data theft (Target vendor VPN, Equifax unpatched Struts) are Critical; supply-chain compromise is Critical; missing MFA on remote access is Critical or High; missing monitoring or inspection gaps are High.'
    }
  },
  rubricNotes: [
    'NIST lifecycle (Phase 4): full marks covers all six steps in order, each with specific Equifax actions (not generic definitions), and says what Equifax did wrong at Preparation (patching), Detection (expired certificate, late detection), and Lessons learned (notification). Deduct for missing steps or steps that only define the term.',
    'Roles, tools, and the board briefing (Phase 4): full marks names who owns each action (CISO, IR team, IT, legal, communications, executives, outside firm, FBI), names realistic tools (WAF, SIEM, EDR, vulnerability scanner, patch management), and gives a 2-3 sentence board statement that is factual, plain, and asks for a decision or support.',
    'Findings and severity (Phase 5): full marks has at least one finding from each of the four scenarios (Target, SolarWinds, Colonial, Equifax), each with a defensible Critical/High/Medium/Low rating and the evidence behind it from the earlier phases.',
    'Timeline and ATT&CK mapping (Phase 5): full marks gives a chronological attack timeline for at least two scenarios, with times or dates from the lab artifacts, and maps each attack vector to a correct ATT&CK technique ID (see key). Deduct for wrong or invented IDs.',
    'Recommendations and executive summary (Phase 5): full marks gives one specific, actionable recommendation per finding, with a suggested tool or technology, and an executive summary a non-technical leader could act on (what was found, how serious, the top recommendation).'
  ]
};
