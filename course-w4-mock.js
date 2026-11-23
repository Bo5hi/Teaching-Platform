// Week 4 mock project: Mock Pentest, part 1 (Reconnaissance and Scanning).
// There is no mock page: the mock is the existing Pentest Lab (Pillar4_EthicalHacking.html), phases 0 and 1.
// The Pentest Lab saves one document link per phase to mccoe_pentest/{key} (phase0_link, phase1_link).
// Week 5 (course-w5-mock.js) uses phase2 to phase5 of the same engagement, in the same document.
// This file gives the tracker what it needs to grade Week 4. `key` is the instructor answer key.
window.MOCK_W4 = {
  id: 'w4',
  title: 'Mock Pentest, part 1: Reconnaissance and Scanning',
  brief: [
    'Cedar Creek plans to hire an outside firm for its first real penetration test. Marcus wants you able to scope it and read its report, so you practice the method on Hack The Box targets built for it.',
    'Keep one document (Google Doc or Word on OneDrive) as your engagement log. This week it has five sections: scope and rules of engagement, recon notes, a scan table, evidence, and findings with the Cedar Creek parallel. Paste the same link into Phase 1 and Phase 2 of the Pentest Lab. Week 5 adds the remaining phases to the same document.',
    'Scope: HTB Starting Point Tier 0 machines Meow and Fawn (Recon phase) and Dancing and Redeemer (Scanning phase), as listed in the Pentest Lab setup table. Skip Exercise 2b (web enumeration); it belongs to Week 5.'
  ],
  phases: [
    { phase: 0, page: 'Pillar4_EthicalHacking.html?phase=0', name: 'Reconnaissance', targets: ['Meow', 'Fawn'] },
    { phase: 1, page: 'Pillar4_EthicalHacking.html?phase=1', name: 'Scanning and enumeration', targets: ['Dancing', 'Redeemer'] }
  ],
  // Expected results. HTB can update Starting Point machines; check a student's evidence before marking a version wrong.
  key: {
    targets: [
      { name: 'Meow', open: ['23/tcp telnet'], weakness: 'Telnet login as root with a blank password', fix: 'Disable Telnet, use SSH with key or strong password, never a blank root password', cve: 'none (misconfiguration)', cedar: 'LINE2-CNC03 Telnet (Lab 4.1 and 4.3); BADGE-CTRL and TIMECLOCK-01 Telnet (Week 5 scan)' },
      { name: 'Fawn', open: ['21/tcp ftp (vsftpd 3.0.3)'], weakness: 'Anonymous FTP login allowed; files readable without a password', fix: 'Disable anonymous login; replace FTP with SFTP', cve: 'none (misconfiguration)', cedar: 'ENG-FS01 sends CNC programs to the CNC machines over cleartext FTP' },
      { name: 'Dancing', open: ['135/tcp msrpc', '139/tcp netbios-ssn', '445/tcp microsoft-ds (SMB)'], weakness: 'SMB share (WorkShares) readable without a password', fix: 'Remove guest/anonymous share access; require authentication; block 445 between zones', cve: 'none (misconfiguration)', cedar: 'Plant Wi-Fi client reached FS-HR01 on 445 (Lab 4.1); FW-CORE rule 6' },
      { name: 'Redeemer', open: ['6379/tcp redis (Redis key-value store, 5.0.x)'], weakness: 'Redis reachable with no authentication; keys readable with redis-cli', fix: 'Require authentication, bind to localhost or an internal interface, firewall the port', cve: 'none (misconfiguration)', cedar: 'Modbus on LINE2-PLC (502) also has no authentication; anyone who can reach it can read and write' }
    ],
    notes: [
      'Redeemer: a default scan (top 1,000 ports) may miss 6379. A student who ran -p- or a port range that includes 6379 found it; credit the reasoning if they explain why the first scan showed nothing.',
      'Passive vs active: reading the HTB machine page and walkthrough questions is passive; ping, Nmap, telnet, ftp, smbclient and redis-cli are active.',
      'The Pentest Lab page says flags look like HTB{...}; Starting Point flags may use a different format. Verify completion against the student\'s public HTB profile rather than the flag text.'
    ]
  },
  // What a strong submission looks like, per rubric criterion (same order as COURSE_STAGING[4].mock.rubric).
  rubricNotes: [
    'Full marks: names the four authorized targets and that only the spawned machine is in scope; lists allowed techniques (discovery, port and version scanning, the guided logins HTB asks for) and forbidden ones (anything outside HTB, attacking other players, denial of service); explains that written authorization is what separates a test from a crime (CFAA).',
    'Full marks: for each machine, what was known before scanning and what the first contact revealed (OS guess, service banners), with passive and active steps labeled correctly.',
    'Full marks: the Nmap commands actually run (at least -sV, and -p- or a wide range for Redeemer) and a table with port, protocol, state, service and version for all four machines that matches the key; 6379 found on Redeemer.',
    'Full marks: saved -oN output or clear screenshots for each machine, the HTB username, and all four flags; another analyst could repeat the work from the document.',
    'Full marks: each exposure (Telnet with blank root, anonymous FTP, open SMB share, unauthenticated Redis) explained in plain language with a risk rating and a specific fix; "no CVE, misconfiguration" stated where true; each tied to a matching Cedar Creek exposure from Labs 4.1-4.3.'
  ]
};
