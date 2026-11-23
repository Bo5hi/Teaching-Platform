// Week 14 practice sets: cross-domain acronym review from the Student Platform SY0-701 drill list.
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['acro-w14a'] = {
  title: 'Acronyms: Week 14, set A (risk, resilience, and governance)',
  kind: 'flash',
  items: [
    { term: 'RTO', definition: 'Recovery Time Objective. The longest a system can be down before the business is seriously harmed; the target time to restore it.' },
    { term: 'RPO', definition: 'Recovery Point Objective. The most data, measured in time, the business can afford to lose. It decides how often you back up.' },
    { term: 'MTBF', definition: 'Mean Time Between Failures. The average time a repairable system runs between failures.' },
    { term: 'MTTF', definition: 'Mean Time to Failure. The average time a non-repairable part lasts before it fails and is replaced.' },
    { term: 'BIA', definition: 'Business Impact Analysis. Finds the critical business functions and what an outage would cost, and sets RTO and RPO.' },
    { term: 'BCP', definition: 'Business Continuity Plan. How the business keeps its critical functions running during and after a disruption.' },
    { term: 'DRP', definition: 'Disaster Recovery Plan. The technical plan for restoring IT systems and data after a disaster.' },
    { term: 'COOP', definition: 'Continuity of Operations Plan. A plan, common in government, for keeping essential functions going during an emergency.' },
    { term: 'SLE', definition: 'Single Loss Expectancy. The money lost from one occurrence of a risk: asset value times exposure factor.' },
    { term: 'ARO', definition: 'Annualized Rate of Occurrence. How many times a year a risk event is expected to happen.' },
    { term: 'ALE', definition: 'Annualized Loss Expectancy. The expected yearly loss from a risk: SLE times ARO.' },
    { term: 'MOU', definition: 'Memorandum of Understanding. A document stating shared intent between parties, usually not legally binding.' },
    { term: 'MSA', definition: 'Master Service Agreement. A contract setting the general terms for all future work between two parties.' },
    { term: 'SOW', definition: 'Statement of Work. Defines the specific tasks, deliverables, and timeline for one piece of contracted work.' },
    { term: 'BPA', definition: 'Business Partnership Agreement. Sets out how two business partners share responsibilities, profits, and decisions.' },
    { term: 'ISA', definition: 'Interconnection Security Agreement. Sets the security requirements for connecting two organizations\' networks.' },
    { term: 'GDPR', definition: 'General Data Protection Regulation. The European Union law protecting the personal data and privacy of people in the EU.' },
    { term: 'PCI DSS', definition: 'Payment Card Industry Data Security Standard. The security standard any organization that handles payment card data must follow.' },
    { term: 'PHI', definition: 'Protected Health Information. Health data linked to a person, protected in the U.S. under HIPAA.' },
    { term: 'DPO', definition: 'Data Protection Officer. The person responsible for overseeing an organization\'s privacy and data protection compliance.' }
  ]
};

COURSE_PRACTICE['acro-w14b'] = {
  title: 'Acronyms: Week 14, set B (crypto, authentication, and remote access)',
  kind: 'flash',
  items: [
    { term: 'AES', definition: 'Advanced Encryption Standard. The most widely used symmetric encryption algorithm.' },
    { term: 'RSA', definition: 'Rivest, Shamir, and Adleman. A widely used asymmetric algorithm for encryption, key exchange, and digital signatures.' },
    { term: 'ECDSA', definition: 'Elliptic Curve Digital Signature Algorithm. A digital signature method using elliptic curves, giving strong security with small keys.' },
    { term: 'ECDHE', definition: 'Elliptic Curve Diffie-Hellman Ephemeral. A key exchange that creates a fresh key for each session, giving perfect forward secrecy.' },
    { term: 'PFS', definition: 'Perfect Forward Secrecy. Past sessions stay safe even if a server\'s long-term private key is stolen later.' },
    { term: 'HMAC', definition: 'Hash-Based Message Authentication Code. A hash combined with a secret key that proves a message is unchanged and came from someone with the key.' },
    { term: 'HOTP', definition: 'HMAC-Based One-Time Password. A one-time code based on a counter that moves forward each time a code is used.' },
    { term: 'PBKDF2', definition: 'Password-Based Key Derivation Function 2. A key stretching method that hashes a password many times to slow down guessing.' },
    { term: 'CRL', definition: 'Certificate Revocation List. A list, published by a certificate authority, of certificates it has cancelled before they expired.' },
    { term: 'OCSP', definition: 'Online Certificate Status Protocol. A live query to check whether one certificate is still valid.' },
    { term: 'CSR', definition: 'Certificate Signing Request. The request, holding a public key and identity details, that is sent to a CA to get a certificate.' },
    { term: 'HSM', definition: 'Hardware Security Module. A dedicated, tamper-resistant device that stores keys and performs cryptographic operations.' },
    { term: 'TPM', definition: 'Trusted Platform Module. A chip on a computer\'s motherboard that stores keys, for example for full disk encryption.' },
    { term: 'PKI', definition: 'Public Key Infrastructure. The CAs, certificates, policies, and processes that let people trust public keys.' },
    { term: 'RADIUS', definition: 'Remote Authentication Dial-In User Service. A protocol that centralizes authentication for VPNs and enterprise Wi-Fi.' },
    { term: 'TACACS+', definition: 'Terminal Access Controller Access Control System Plus. A Cisco-developed protocol for authenticating admins to network devices; it encrypts the whole exchange.' },
    { term: 'PEAP', definition: 'Protected Extensible Authentication Protocol. Wraps EAP inside a TLS tunnel so wireless logins are protected.' },
    { term: 'IPSec', definition: 'Internet Protocol Security. A set of protocols that authenticate and encrypt IP traffic, often used for site-to-site VPNs.' },
    { term: 'WPA3', definition: 'Wi-Fi Protected Access 3. The current Wi-Fi security standard, with stronger protection against password guessing than WPA2.' },
    { term: 'FDE', definition: 'Full-Disk Encryption. Encrypts an entire drive so its data is unreadable if the device is lost or stolen.' }
  ]
};
