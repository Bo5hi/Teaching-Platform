// Week 9 practice sets (acronyms for the SOC ticket week). Shapes: docs/COURSE_V2.md
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['acro-w9a'] = {
  title: 'Acronyms: Week 9, set A (the SOC and incidents)',
  kind: 'flash',
  items: [
    { term: 'SOC', definition: 'Security Operations Center. The team, and often the room, that watches for security events, triages alerts, and responds to incidents.' },
    { term: 'SLA', definition: 'Service-Level Agreement. A promise about how fast or how well a service is delivered, such as resolving a P1 ticket within 4 hours.' },
    { term: 'XDR', definition: 'Extended Detection and Response. A platform that combines detection data from endpoints, network, email, and cloud into one place to investigate and respond.' },
    { term: 'DLP', definition: 'Data Loss Prevention. Tools that spot sensitive data, such as Social Security numbers or confidential drawings, and alert on or block it leaving by email, USB, or upload.' },
    { term: 'IoC', definition: 'Indicator of Compromise. A clue that a system was attacked, such as a known bad IP address, a malware file hash, or a suspicious domain.' },
    { term: 'IR', definition: 'Incident Response. The organized process of preparing for, detecting, containing, removing, and recovering from security incidents, then learning from them.' },
    { term: 'IRP', definition: 'Incident Response Plan. The written plan that says who does what, and who must be told, when an incident happens.' },
    { term: 'FIM', definition: 'File Integrity Monitoring. A tool that watches important files and alerts when they are changed, renamed, or deleted.' },
    { term: 'CASB', definition: 'Cloud Access Security Broker. A tool that sits between users and cloud apps to see and control how data is used and shared, such as public sharing links.' },
    { term: 'NAC', definition: 'Network Access Control. Checks a device before it may join the network, and can alert on or block unknown devices.' },
    { term: 'UTM', definition: 'Unified Threat Management. One appliance that combines several protections, such as firewall, intrusion prevention, and web filtering.' },
    { term: 'NGFW', definition: 'Next-Generation Firewall. A firewall that can identify applications and users, not just IP addresses and ports, and often includes intrusion prevention.' },
    { term: 'WAF', definition: 'Web Application Firewall. A firewall that inspects web traffic to block attacks on websites, such as SQL injection and cross-site scripting.' },
    { term: 'CTI', definition: 'Cyber Threat Intelligence. Information about attackers, their methods, and their indicators, used to detect and prevent attacks.' },
    { term: 'HIDS', definition: 'Host-Based Intrusion Detection System. Software on one computer that watches that computer\'s activity for signs of attack.' },
    { term: 'NIDS', definition: 'Network-Based Intrusion Detection System. A sensor that watches network traffic for signs of attack and raises alerts without blocking.' },
    { term: 'HIPS', definition: 'Host-Based Intrusion Prevention System. Software on one computer that can block suspicious activity on that computer as it happens.' },
    { term: 'ELK', definition: 'Elasticsearch, Logstash, and Kibana. A popular open-source set of tools for collecting, searching, and charting logs.' },
    { term: 'DDoS', definition: 'Distributed Denial of Service. An attack that floods a system with traffic from many machines at once so real users cannot reach it.' },
    { term: 'MTTR', definition: 'Mean Time to Repair (or Recover). The average time it takes to fix a failure and restore service.' }
  ]
};

COURSE_PRACTICE['acro-w9b'] = {
  title: 'Acronyms: Week 9, set B (email, identity, and evidence)',
  kind: 'flash',
  items: [
    { term: 'SPF', definition: 'Sender Policy Framework. A DNS record listing the mail servers allowed to send email for a domain.' },
    { term: 'DKIM', definition: 'DomainKeys Identified Mail. A digital signature added by the sending domain so receivers can check the message was not changed in transit.' },
    { term: 'DMARC', definition: 'Domain-based Message Authentication, Reporting, and Conformance. A DNS policy telling receivers what to do with mail that fails SPF and DKIM for the From domain: none, quarantine, or reject.' },
    { term: 'SMTP', definition: 'Simple Mail Transfer Protocol. The protocol mail servers use to send email to each other.' },
    { term: 'IMAP', definition: 'Internet Message Access Protocol. A protocol mail apps use to read mail that stays on the server. Older IMAP sign-ins cannot show a modern MFA prompt.' },
    { term: 'POP', definition: 'Post Office Protocol. An older protocol that downloads mail from the server to one device.' },
    { term: 'URL', definition: 'Uniform Resource Locator. A web address, such as https://www.example.com/login. Check the domain part before trusting a link.' },
    { term: 'DNS', definition: 'Domain Name System. The service that turns names such as cedarcreek-ind.com into IP addresses. Its records also hold SPF and DMARC policies.' },
    { term: 'DHCP', definition: 'Dynamic Host Configuration Protocol. The service that hands out IP addresses. Its lease log tells you which computer had which IP address at a given time.' },
    { term: 'NTP', definition: 'Network Time Protocol. Keeps clocks on all systems in sync so log times from different systems line up.' },
    { term: 'SSO', definition: 'Single Sign-On. One login that gives access to many applications.' },
    { term: 'OTP', definition: 'One-Time Password. A code that works only once, often sent by text or shown in an app.' },
    { term: 'TOTP', definition: 'Time-Based One-Time Password. A one-time code that changes every 30 seconds or so, generated by an authenticator app.' },
    { term: 'SAML', definition: 'Security Assertion Markup Language. A standard that lets one identity provider vouch for a user to many web applications, used for single sign-on.' },
    { term: 'OAuth', definition: 'Open Authorization. A standard that lets a user grant an app limited access to an account, such as mail, without sharing the password. Attackers abuse it with fake apps.' },
    { term: 'LDAP', definition: 'Lightweight Directory Access Protocol. The protocol used to look up users and groups in a directory such as Active Directory.' },
    { term: 'NTLM', definition: 'New Technology LAN Manager. An older Microsoft authentication protocol, still found on many networks and open to pass-the-hash attacks.' },
    { term: 'TGT', definition: 'Ticket Granting Ticket. In Kerberos, the ticket a user gets at logon and then uses to request tickets for specific services.' },
    { term: 'PAM', definition: 'Privileged Access Management. Tools and processes that control, check out, and record the use of admin and service accounts.' },
    { term: 'TLS', definition: 'Transport Layer Security. The protocol that encrypts web and email traffic in transit, shown as HTTPS in a browser.' }
  ]
};
