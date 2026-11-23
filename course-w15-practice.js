// Week 15 practice sets: final acronym drill from the Student Platform SY0-701 drill list.
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['acro-w15a'] = {
  title: 'Acronyms: Week 15, set A (architecture and endpoints)',
  kind: 'flash',
  items: [
    { term: 'BYOD', definition: 'Bring Your Own Device. Staff use their personal phones or laptops for work, usually managed through MDM.' },
    { term: 'COPE', definition: 'Corporate-Owned, Personally Enabled. The company owns the device but lets the employee use it for personal tasks too.' },
    { term: 'CYOD', definition: 'Choose Your Own Device. Employees pick from a list of approved devices that the company buys and manages.' },
    { term: 'EMM', definition: 'Enterprise Mobility Management. Tools for managing mobile devices, their apps, and their data across an organization.' },
    { term: 'VDI', definition: 'Virtual Desktop Infrastructure. Desktops run on central servers and are shown on the user\'s device, so data stays in the data center.' },
    { term: 'IaaS', definition: 'Infrastructure as a Service. Rented cloud servers, storage, and networks; the customer manages the operating system and everything above it.' },
    { term: 'PaaS', definition: 'Platform as a Service. The provider runs the servers and operating system; the customer builds and runs applications on top.' },
    { term: 'DaaS', definition: 'Desktop as a Service. Cloud-hosted virtual desktops delivered over the internet by a provider.' },
    { term: 'SDN', definition: 'Software-Defined Networking. Network behavior is controlled centrally by software instead of configuring each device by hand.' },
    { term: 'SD-WAN', definition: 'Software-Defined Wide Area Network. Software that manages and secures links between branch sites over several connection types.' },
    { term: 'RTOS', definition: 'Real-Time Operating System. An operating system that responds within strict time limits, common in embedded and industrial devices.' },
    { term: 'UEFI', definition: 'Unified Extensible Firmware Interface. Modern firmware that starts a computer and supports Secure Boot.' },
    { term: 'ASLR', definition: 'Address Space Layout Randomization. Places a program\'s memory at random locations so memory attacks are harder to aim.' },
    { term: 'DEP', definition: 'Data Execution Prevention. Stops code from running in memory areas meant only for data.' },
    { term: 'SELinux', definition: 'Security-Enhanced Linux. Adds mandatory access control to Linux, limiting what each process may touch.' },
    { term: 'GPO', definition: 'Group Policy Object. A set of Windows settings pushed from Active Directory to many computers and users at once.' },
    { term: 'DNSSEC', definition: 'Domain Name System Security Extensions. Digitally signs DNS records so answers cannot be forged.' },
    { term: 'LDAPS', definition: 'Lightweight Directory Access Protocol Secure. LDAP directory lookups protected with TLS encryption.' },
    { term: 'FTPS', definition: 'File Transfer Protocol Secure. FTP with TLS encryption added. (SFTP is a different protocol that runs over SSH.)' },
    { term: 'SNMP', definition: 'Simple Network Management Protocol. Used to monitor and manage network devices. Version 3 adds authentication and encryption.' }
  ]
};

COURSE_PRACTICE['acro-w15b'] = {
  title: 'Acronyms: Week 15, set B (attacks, intelligence, and old protocols)',
  kind: 'flash',
  items: [
    { term: 'XSS', definition: 'Cross-Site Scripting. An attack that gets a script into a web page so it runs in other users\' browsers.' },
    { term: 'CSRF', definition: 'Cross-Site Request Forgery. Tricks a logged-in user\'s browser into sending a request the user did not intend, such as changing a password.' },
    { term: 'SQLi', definition: 'SQL Injection. Input that changes a database query, for example to dump every record. Stopped by input validation and parameterized queries.' },
    { term: 'DoS', definition: 'Denial of Service. An attack that makes a system unavailable to its real users.' },
    { term: 'MaaS', definition: 'Malware as a Service. Criminals rent out ready-made malware and infrastructure to other criminals.' },
    { term: 'ARP', definition: 'Address Resolution Protocol. Maps IP addresses to MAC addresses on a local network. ARP poisoning lets an attacker sit in the middle.' },
    { term: 'RTBH', definition: 'Remotely Triggered Black Hole. A routing technique that drops attack traffic aimed at a target, used against DDoS.' },
    { term: 'CVSS', definition: 'Common Vulnerability Scoring System. Rates how severe a vulnerability is on a scale from 0 to 10.' },
    { term: 'AIS', definition: 'Automated Indicator Sharing. A free U.S. government service for sharing threat indicators between organizations by machine.' },
    { term: 'ATT&CK', definition: 'Adversarial Tactics, Techniques, and Common Knowledge. MITRE\'s knowledge base of how real attackers operate.' },
    { term: 'CERT', definition: 'Computer Emergency Response Team. A team that handles and coordinates responses to security incidents.' },
    { term: 'CIS', definition: 'Center for Internet Security. Publishes the CIS Controls and secure configuration benchmarks.' },
    { term: 'CISA', definition: 'Cybersecurity and Infrastructure Security Agency. The U.S. agency that leads national cyber defense and publishes advisories.' },
    { term: 'DLL', definition: 'Dynamic-Link Library. A shared code file used by Windows programs. DLL injection tricks a program into loading malicious code.' },
    { term: 'VBA', definition: 'Visual Basic for Applications. The macro language in Microsoft Office, often abused by malicious attachments.' },
    { term: 'MBR', definition: 'Master Boot Record. The first sector of a disk, which starts the boot process. Some malware overwrites it.' },
    { term: 'BPDU', definition: 'Bridge Protocol Data Unit. Spanning Tree messages between switches. BPDU guard shuts a port that receives them unexpectedly.' },
    { term: 'SAN', definition: 'Storage Area Network, or Subject Alternative Name. A network of shared storage, or the certificate field listing extra names a certificate covers.' },
    { term: 'PAP', definition: 'Password Authentication Protocol. An old protocol that sends passwords in clear text. Avoid it.' },
    { term: 'CHAP', definition: 'Challenge Handshake Authentication Protocol. An older protocol that proves knowledge of a password without sending it, using a challenge and response.' }
  ]
};
