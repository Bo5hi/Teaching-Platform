// Week 2 practice sets. Shapes: docs/COURSE_V2.md
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['crypto-w2'] = {
  title: 'Crypto Tool Sorter',
  kind: 'sort',
  instructions: 'For each situation, choose the cryptographic tool being used and the main security goal it serves. Where two goals are honestly defensible, either one earns credit. Read the explanation after each answer: the exam describes a need and asks you to name the tool, exactly like this.',
  dims: [
    { key: 'tool', label: 'Tool', options: ['Hashing', 'HMAC', 'Salting / key stretching', 'Symmetric encryption', 'Asymmetric encryption', 'Key exchange', 'Digital signature', 'Certificate / PKI', 'Key management (HSM, TPM, escrow)', 'Tokenization / masking', 'Steganography'] },
    { key: 'goal', label: 'Goal', options: ['Confidentiality', 'Integrity', 'Authentication', 'Non-repudiation', 'Availability'] }
  ],
  items: [
    { text: 'Jordan compares the SHA-256 value of a firmware download with the value on the vendor\'s website before installing it.', answers: { tool: ['Hashing'], goal: ['Integrity'] }, why: 'A matching hash shows the file is unchanged. Hashing proves integrity; it hides nothing.' },
    { text: 'Before backup tapes leave the building, the backup software encrypts 400 GB of data with AES-256.', answers: { tool: ['Symmetric encryption'], goal: ['Confidentiality'] }, why: 'AES is a fast symmetric cipher, the right choice for bulk data at rest. It keeps a lost tape unreadable.' },
    { text: 'Priya encrypts the CCD-3318 package so that only the holder of Halvorsen\'s private key can open it.', answers: { tool: ['Asymmetric encryption'], goal: ['Confidentiality'] }, why: 'Encrypting to the recipient\'s public key means only the recipient\'s private key can decrypt. GnuPG does this with hybrid encryption.' },
    { text: 'Tom signs the release manifest with his private key so Halvorsen can prove he approved it and he cannot later deny it.', answers: { tool: ['Digital signature'], goal: ['Non-repudiation', 'Authentication'] }, why: 'Only Tom holds his private key, so a valid signature ties the approval to him. That is non-repudiation, which includes proof of origin.' },
    { text: 'The new supplier portal adds a unique random value to each password before hashing it.', answers: { tool: ['Salting / key stretching'], goal: ['Confidentiality', 'Authentication'] }, why: 'Salting makes identical passwords hash differently and defeats rainbow tables, which protects the stored credentials.' },
    { text: 'Password hashes are made with bcrypt, so each guess takes a noticeable fraction of a second.', answers: { tool: ['Salting / key stretching'], goal: ['Confidentiality', 'Authentication'] }, why: 'bcrypt is a key stretching algorithm. Slow hashing makes cracking stolen hashes far more expensive.' },
    { text: 'Before uploading, the browser checks that supplier.halvorsen-pump.com presents a certificate chaining to a trusted root.', answers: { tool: ['Certificate / PKI'], goal: ['Authentication'] }, why: 'The certificate, vouched for by a CA, proves the site really is the named server. That is authentication of the server.' },
    { text: 'During the TLS handshake, the browser and the server use ECDHE to agree on a fresh session key.', answers: { tool: ['Key exchange'], goal: ['Confidentiality'] }, why: 'Ephemeral Diffie-Hellman is a key exchange. It produces the session key that keeps the connection secret, with forward secrecy.' },
    { text: 'BitLocker on a Finance laptop keeps the disk key inside a chip on the motherboard.', answers: { tool: ['Key management (HSM, TPM, escrow)'], goal: ['Confidentiality'] }, why: 'The TPM stores the key in hardware so a drive pulled from the laptop cannot be read.' },
    { text: 'A certificate authority keeps its signing keys in a tamper-resistant appliance that never exports them.', answers: { tool: ['Key management (HSM, TPM, escrow)'], goal: ['Confidentiality', 'Authentication'] }, why: 'An HSM protects private keys from theft. If the CA key leaked, attackers could issue trusted certificates for any site.' },
    { text: 'A payment processor replaces each card number with a random value and keeps the real number in a secure vault.', answers: { tool: ['Tokenization / masking'], goal: ['Confidentiality'] }, why: 'Tokenization swaps the real value for a token with no mathematical link to it. Systems that store only tokens have nothing worth stealing.' },
    { text: 'Printed payroll reports show only the last four digits of each Social Security number.', answers: { tool: ['Tokenization / masking'], goal: ['Confidentiality'] }, why: 'Masking hides part of the value when it is displayed, which limits what a lost printout exposes.' },
    { text: 'An insider hides drawing data inside ordinary-looking vacation photos and emails them to a personal account.', answers: { tool: ['Steganography'], goal: ['Confidentiality'] }, why: 'Steganography hides the existence of a message inside another file. Here an attacker uses it to sneak data out.' },
    { text: 'Each VPN packet carries a value computed from the packet and a shared secret key, and altered packets are dropped.', answers: { tool: ['HMAC'], goal: ['Integrity', 'Authentication'] }, why: 'An HMAC proves the packet is unchanged and came from someone holding the shared key. It does not give non-repudiation.' },
    { text: 'Windows checks the publisher\'s signature on a software installer before it lets it run.', answers: { tool: ['Digital signature'], goal: ['Integrity', 'Authentication'] }, why: 'Code signing shows who published the software and that it has not changed since signing. As SolarWinds showed, it does not prove the code is safe.' },
    { text: 'Cedar Creek\'s VPN only accepts laptops that present a user certificate issued by CedarCreek-Issuing-CA.', answers: { tool: ['Certificate / PKI'], goal: ['Authentication'] }, why: 'A client certificate from the company CA proves the user and device are who they claim. That is certificate-based authentication.' },
    { text: 'After TIMECLOCK-01 is replaced, IT publishes its old certificate\'s serial number on the CA\'s revocation list.', answers: { tool: ['Certificate / PKI'], goal: ['Authentication'] }, why: 'Revocation through a CRL tells clients to stop trusting the certificate, so no one can use it to impersonate the server.' },
    { text: 'Every engineering laptop encrypts its whole drive so a stolen laptop exposes no drawings.', answers: { tool: ['Symmetric encryption'], goal: ['Confidentiality'] }, why: 'Full-disk encryption uses a fast symmetric cipher such as AES to protect data at rest.' },
    { text: 'Each block in a shared ledger includes the hash of the block before it, so changing an old record breaks the chain.', answers: { tool: ['Hashing'], goal: ['Integrity'] }, why: 'Blockchains use hash links to make tampering obvious. They give integrity and transparency, not secrecy.' },
    { text: 'Greg Palmer signs an email with S/MIME so the bank can confirm it came from him and was not altered.', answers: { tool: ['Digital signature'], goal: ['Authentication', 'Integrity', 'Non-repudiation'] }, why: 'A signed S/MIME message gives proof of origin, integrity, and non-repudiation at once.' },
    { text: 'GnuPG locks a one-time AES session key with Halvorsen\'s public key and puts it in the package.', answers: { tool: ['Asymmetric encryption', 'Key exchange'], goal: ['Confidentiality'] }, why: 'Encrypting the session key with the recipient\'s public key is how hybrid encryption delivers the symmetric key safely.' },
    { text: 'File integrity monitoring on DC01 raises an alert when the hash of a system file changes.', answers: { tool: ['Hashing'], goal: ['Integrity'] }, why: 'Monitoring tools store a known-good hash for each file and alert when the current hash differs.' },
    { text: 'Dee keeps a sealed paper copy of the tape encryption key in Marcus\'s safe in case the backup server is lost.', answers: { tool: ['Key management (HSM, TPM, escrow)'], goal: ['Availability'] }, why: 'A recoverable copy of a key held by a trusted party is key escrow. It keeps encrypted backups usable if the original key is lost.' },
    { text: 'The HR database encrypts only the Social Security number column with a key held by the database server.', answers: { tool: ['Symmetric encryption'], goal: ['Confidentiality'] }, why: 'Record or field-level encryption protects the most sensitive column at rest, usually with a symmetric cipher.' }
  ]
};

COURSE_PRACTICE['acro-w2a'] = {
  title: 'Acronyms: Week 2, set A',
  kind: 'flash',
  items: [
    { term: 'AES', definition: 'Advanced Encryption Standard. The standard symmetric block cipher, with 128-, 192-, or 256-bit keys, used for disks, files, VPNs, and TLS.' },
    { term: 'DES', definition: 'Data Encryption Standard. An old symmetric cipher with a 56-bit key, broken by brute force in 1998 and replaced by AES.' },
    { term: 'RC4', definition: 'Rivest Cipher 4. An old stream cipher with known weaknesses. It should not be used.' },
    { term: 'RSA', definition: 'Rivest, Shamir, and Adleman. The classic asymmetric algorithm, used for key exchange and digital signatures. 2048-bit keys are the usual minimum.' },
    { term: 'DSA', definition: 'Digital Signature Algorithm. An asymmetric algorithm designed only for making and verifying digital signatures.' },
    { term: 'ECDSA', definition: 'Elliptic Curve Digital Signature Algorithm. A signature algorithm using elliptic curve keys, which are much shorter than RSA keys for the same strength.' },
    { term: 'DHE', definition: 'Diffie-Hellman Ephemeral. Key exchange with fresh temporary values for every session, which provides perfect forward secrecy.' },
    { term: 'ECDHE', definition: 'Elliptic Curve Diffie-Hellman Ephemeral. The elliptic curve version of DHE, the most common key exchange in modern TLS.' },
    { term: 'PFS', definition: 'Perfect Forward Secrecy. Using temporary session keys so stealing a long-term private key later cannot decrypt past sessions.' },
    { term: 'SHA', definition: 'Secure Hash Algorithm. A family of hash functions. SHA-256 (part of SHA-2) is the current standard; SHA-1 is broken.' },
    { term: 'MD5', definition: 'Message Digest 5. An old 128-bit hash with practical collisions. Fine for catching accidental corruption, never for security.' },
    { term: 'RIPEMD', definition: 'RACE Integrity Primitives Evaluation Message Digest. A hash function family (RIPEMD-160 is the best known) designed as an alternative to SHA.' },
    { term: 'HMAC', definition: 'Hash-Based Message Authentication Code. A hash combined with a shared secret key, proving a message is unchanged and came from a key holder.' },
    { term: 'PBKDF2', definition: 'Password-Based Key Derivation Function 2. A key stretching function that hashes a password with a salt many times, making guesses slow.' },
    { term: 'IV', definition: 'Initialization Vector. A random value mixed into encryption so identical plaintext produces different ciphertext.' },
    { term: 'ECB', definition: 'Electronic Code Book. A weak block cipher mode that encrypts identical blocks identically, so patterns in the data show through.' },
    { term: 'CBC', definition: 'Cipher Block Chaining. A block cipher mode where each block is mixed with the previous one, starting from an IV.' },
    { term: 'CFB', definition: 'Cipher Feedback. A block cipher mode that turns a block cipher into a stream cipher.' },
    { term: 'XOR', definition: 'Exclusive Or. A bit operation (1 when two bits differ, 0 when they match) used inside almost every cipher.' },
    { term: 'KEK', definition: 'Key Encryption Key. A key whose only job is to encrypt other keys, so data keys can be stored or sent safely.' }
  ]
};

COURSE_PRACTICE['acro-w2b'] = {
  title: 'Acronyms: Week 2, set B',
  kind: 'flash',
  items: [
    { term: 'PKI', definition: 'Public Key Infrastructure. The CAs, certificates, policies, and software that bind public keys to identities.' },
    { term: 'CA', definition: 'Certificate Authority. A trusted organization or server that verifies identities and signs certificates.' },
    { term: 'RA', definition: 'Registration Authority. The part of a PKI that checks a requester\'s identity before the CA issues a certificate.' },
    { term: 'CSR', definition: 'Certificate Signing Request. The public key and requested names, sent to a CA to be turned into a certificate.' },
    { term: 'CRL', definition: 'Certificate Revocation List. A signed list of revoked certificate serial numbers that a CA publishes on a schedule.' },
    { term: 'OCSP', definition: 'Online Certificate Status Protocol. A real-time query asking a CA whether one certificate has been revoked.' },
    { term: 'SAN', definition: 'Subject Alternative Name. The certificate field that lists every name the certificate is valid for. (Also Storage Area Network.)' },
    { term: 'OID', definition: 'Object Identifier. A dotted number, such as 2.5.29.17, that names a certificate field or algorithm.' },
    { term: 'EV', definition: 'Extended Validation. A certificate issued after stronger checks that the organization behind the site is real.' },
    { term: 'PEM', definition: 'Privacy Enhanced Mail. Today, the text file format for certificates and keys, with BEGIN and END lines around base64.' },
    { term: 'P12', definition: 'PKCS #12. A file format (also .pfx) that bundles a certificate with its private key, protected by a password.' },
    { term: 'PKCS', definition: 'Public Key Cryptography Standards. A set of standards for key and certificate formats, such as PKCS #10 for CSRs and PKCS #12 for key bundles.' },
    { term: 'SCEP', definition: 'Simple Certificate Enrollment Protocol. A protocol devices use to request and receive certificates from a CA automatically.' },
    { term: 'HSM', definition: 'Hardware Security Module. A tamper-resistant device that generates, stores, and uses keys for many systems.' },
    { term: 'TPM', definition: 'Trusted Platform Module. A security chip in a computer that stores keys, such as the BitLocker key, and checks the boot process.' },
    { term: 'FDE', definition: 'Full-Disk Encryption. Encrypting an entire drive, such as with BitLocker, so a stolen device reveals nothing.' },
    { term: 'EFS', definition: 'Encrypted File System. The Windows feature that encrypts individual files and folders for a user.' },
    { term: 'PGP', definition: 'Pretty Good Privacy. The original program for signing and encrypting email and files, which became the OpenPGP standard.' },
    { term: 'GPG', definition: 'GNU Privacy Guard. The free implementation of OpenPGP, run with the gpg command in Kali.' },
    { term: 'S/MIME', definition: 'Secure/Multipurpose Internet Mail Extensions. Signing and encrypting email using X.509 certificates.' },
    { term: 'TLS', definition: 'Transport Layer Security. The protocol behind HTTPS that authenticates servers with certificates and encrypts traffic in transit.' },
    { term: 'SSL', definition: 'Secure Sockets Layer. The older, now-insecure protocol that TLS replaced. People still say "SSL certificate".' }
  ]
};
