// Week 2 lessons + quiz. Shapes: docs/COURSE_V2.md
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['2.1'] = {
  id: '2.1', week: 2, title: 'Encryption: keys, symmetric and asymmetric', mins: 15, module: 'CertMaster Module 3',
  intro: "Halvorsen Pump, one of Cedar Creek's biggest customers, has told every supplier that drawings must now arrive encrypted. Today Priya and the other engineers zip the files, set a password, and type that password into the same email. This lesson explains what encryption really does, why the key matters more than the lock, and why modern systems use two kinds of encryption together. By the end you will be able to say exactly what is wrong with the zip-and-email habit.",
  sections: [
    {
      title: 'What cryptography is for',
      body: [
        "<strong>Cryptography</strong> is the science of protecting information by transforming it with math. The readable form of data is called <strong>plaintext</strong>. The scrambled form is called <strong>ciphertext</strong>. Turning plaintext into ciphertext is <strong>encryption</strong>, and turning it back is <strong>decryption</strong>.",
        "Encryption uses two ingredients. The <strong>algorithm</strong>, also called a <strong>cipher</strong>, is the published recipe, such as AES. The <strong>key</strong> is a secret value that controls the recipe. Anyone may know the algorithm. Only the right people may know the key. This idea is old and important: a good system stays secure even when attackers know exactly how it works, as long as the key stays secret.",
        "Cryptography supports more than secrecy. Different tools serve different goals, and much of this week is learning which tool fits which job."
      ],
      table: {
        head: ['Goal', 'Question it answers', 'Main tool'],
        rows: [
          ['Confidentiality', 'Can only the right people read it?', 'Encryption'],
          ['Integrity', 'Has it changed since it was created?', 'Hashing'],
          ['Authentication', 'Did it really come from who it claims?', 'Digital signatures, certificates'],
          ['Non-repudiation', 'Can the sender deny sending it?', 'Digital signatures']
        ]
      },
      keyTerms: [
        { term: 'Plaintext / ciphertext', definition: 'Readable data, and the same data after encryption has scrambled it.' },
        { term: 'Algorithm (cipher)', definition: 'The published mathematical process used to encrypt and decrypt.' },
        { term: 'Key', definition: 'The secret value that controls the algorithm. Whoever has the key can decrypt.' }
      ]
    },
    {
      title: 'Key length and brute force',
      body: [
        "If attackers cannot break the math, they can still try every possible key until one works. That is a <strong>brute force</strong> attack. The defense is a key so long that trying every value would take longer than anyone could wait.",
        "Key length is measured in <strong>bits</strong>. Each extra bit doubles the number of possible keys. A 56-bit key has about 72 quadrillion possible values, which sounds like a lot until a fast computer tries billions per second. A 128-bit key has so many values that brute force is not practical with any computer that exists. AES with a 256-bit key is the usual choice for data that must stay secret for many years.",
        "Longer is not always better in every algorithm, because different algorithms use keys differently. You will see that asymmetric keys are much longer than symmetric keys for the same strength. Compare key lengths only within the same family of algorithm."
      ],
      callout: { kind: 'real', title: 'DES falls to brute force', text: "DES, the Data Encryption Standard, was the main U.S. government cipher for more than 20 years. It used a 56-bit key. In 1998 the Electronic Frontier Foundation built a purpose-made machine that found a DES key by brute force in less than three days. DES was replaced by AES, which uses keys of 128, 192, or 256 bits. When an exam question offers DES as an answer for protecting data today, it is almost always the wrong choice." }
    },
    {
      title: 'Symmetric encryption: one shared key',
      figure: { id: 'sym-asym', caption: 'Symmetric encryption uses one shared key. Asymmetric encryption uses a key pair: what one key locks, only the other key opens.' },
      body: [
        "In <strong>symmetric encryption</strong>, the same key encrypts and decrypts. If Priya encrypts a drawing with a key, Halvorsen needs that exact key to read it.",
        "Symmetric encryption is fast, even on huge files, which is why it protects nearly all bulk data: disk drives, backup tapes, database files, and the data inside a VPN or HTTPS connection. The standard algorithm today is the <strong>Advanced Encryption Standard (AES)</strong>. Older symmetric ciphers you may see on the exam include DES, Triple DES (3DES), and RC4. All three are considered weak and should not be used for new systems.",
        "Symmetric ciphers come in two styles. A <strong>block cipher</strong>, such as AES, encrypts fixed-size chunks of data, 128 bits at a time for AES. A <strong>stream cipher</strong> encrypts data one bit or byte at a time, which suits live streams such as voice. Block ciphers run in a <strong>mode of operation</strong>. A weak mode called ECB encrypts identical blocks into identical ciphertext, so patterns show through. Better modes such as CBC and GCM mix in a random starting value called an <strong>initialization vector (IV)</strong>, so the same file encrypted twice looks completely different each time. GCM also detects tampering.",
        "Symmetric encryption has one big weakness: <strong>key distribution</strong>. Both sides need the same secret key, and you must get it to the other side without anyone else seeing it. If the key travels with the data, the encryption is pointless."
      ],
      keyTerms: [
        { term: 'Symmetric encryption', definition: 'Encryption where one shared secret key both encrypts and decrypts. Fast; used for bulk data.' },
        { term: 'AES', definition: 'Advanced Encryption Standard. The standard symmetric block cipher, with 128-, 192-, or 256-bit keys.' },
        { term: 'Initialization vector (IV)', definition: 'A random value mixed into encryption so identical plaintext does not produce identical ciphertext.' }
      ],
      callout: { kind: 'cedar', title: 'The password in the same email', text: "Priya's team zips the drawings with a password such as Halvorsen2026 and types that password into the same email as the zip. The zip encryption is symmetric, and the password is the key. Anyone who gets the email, whether a wrong recipient, a compromised mailbox, or an attacker reading forwarded mail, gets the lock and the key together. The password is also guessable: the customer's name plus the year. Halvorsen's new rules ban both habits." }
    },
    {
      title: 'Asymmetric encryption: a key pair',
      body: [
        "<strong>Asymmetric encryption</strong>, also called <strong>public key cryptography</strong>, uses two keys that are created together as a <strong>key pair</strong>. One is the <strong>public key</strong>, which you can share with anyone. The other is the <strong>private key</strong>, which never leaves its owner. The two keys are mathematically linked, but you cannot work out the private key from the public key.",
        "What one key locks, only the other key can open. To send Halvorsen a secret, Cedar Creek encrypts with <strong>Halvorsen's public key</strong>. Only <strong>Halvorsen's private key</strong> can decrypt it, so even Cedar Creek cannot read the result after encrypting. This solves the key distribution problem: the public key can travel openly, by email or on a website, because it only locks.",
        "The common asymmetric algorithms are <strong>RSA</strong> and <strong>elliptic curve cryptography (ECC)</strong>. RSA keys are long: 2048 bits is the usual minimum today. ECC reaches the same strength with much shorter keys, such as 256 bits, which makes it popular on phones and small devices. The trade-off for asymmetric encryption is speed. It is far slower than AES, so it is not used to encrypt large files directly.",
        "There is one catch, and it drives the rest of this week. You must be sure the public key really belongs to Halvorsen. If an attacker tricks Priya into using the attacker's public key, the attacker can read everything. Certificates and fingerprint checks, covered in Lesson 2.3, exist to solve that problem."
      ],
      keyTerms: [
        { term: 'Asymmetric encryption', definition: 'Encryption that uses a key pair. Data encrypted with one key can only be decrypted with the other.' },
        { term: 'Public key / private key', definition: 'The shareable half and the secret half of a key pair. The private key never leaves its owner.' },
        { term: 'RSA / ECC', definition: 'The two common asymmetric algorithm families. ECC gives the same strength with shorter keys.' }
      ]
    },
    {
      title: 'Key exchange and hybrid encryption',
      figure: { id: 'hybrid-exchange', caption: 'Hybrid encryption: AES does the heavy lifting with a one-time session key, and the recipient\'s public key protects that small session key.' },
      body: [
        "Real systems use both kinds of encryption together. This is called <strong>hybrid encryption</strong>. The sender makes a random one-time <strong>session key</strong>, encrypts the large file with it using fast symmetric AES, then encrypts only the small session key with the recipient's public key. The recipient uses their private key to recover the session key, then uses the session key to decrypt the file. GnuPG, which you will use in Lab 2.3, works exactly this way.",
        "Websites do something similar. When your browser connects to an HTTPS site, it uses <strong>Transport Layer Security (TLS)</strong>. During the TLS <strong>handshake</strong>, the browser checks the site's certificate and the two sides agree on session keys. Then all the page data flows encrypted with a fast symmetric cipher.",
        "Many TLS connections agree on session keys with <strong>Diffie-Hellman (DH)</strong> key exchange. Diffie-Hellman lets two parties create a shared secret over an open network, even if an eavesdropper sees every message. When fresh, temporary values are used for each session (DHE or ECDHE, where E means ephemeral), the result is <strong>perfect forward secrecy (PFS)</strong>: if a server's long-term private key is stolen next year, the attacker still cannot decrypt sessions recorded today."
      ],
      keyTerms: [
        { term: 'Hybrid encryption', definition: 'Encrypting data with a fast symmetric session key, and protecting that key with asymmetric encryption.' },
        { term: 'Diffie-Hellman (DH)', definition: 'A key exchange method that lets two parties agree on a shared secret over an untrusted network.' },
        { term: 'Perfect forward secrecy (PFS)', definition: 'Using temporary session keys so a later theft of a long-term key cannot expose past sessions.' }
      ],
      callout: { kind: 'exam', title: 'Symmetric or asymmetric?', text: "Look for the clue in the question. 'One shared key', 'fast', 'bulk data', 'full-disk encryption', or AES points to symmetric. 'Key pair', 'public key', 'private key', 'key exchange', 'digital signature', RSA, or ECC points to asymmetric. If a question asks how two parties can agree on a secret key over the internet, the answer is a key exchange such as Diffie-Hellman. If it asks which is faster for large amounts of data, the answer is symmetric." }
    }
  ],
  check: [
    { q: "Priya encrypts a drawing with AES and a password, then sends the password in the same email as the file. What is the main problem?", opts: ["AES is too weak for drawings", "The key travels with the encrypted data, so anyone who gets the email can decrypt it", "AES cannot encrypt PDF files", "The file should have been hashed instead of encrypted"], ans: 1, why: "Symmetric encryption is only as safe as its key. Sending the key with the ciphertext defeats the encryption." },
    { q: "Cedar Creek wants to send Halvorsen a file that only Halvorsen can read. Which key should Cedar Creek use to encrypt it?", opts: ["Cedar Creek's private key", "Cedar Creek's public key", "Halvorsen's public key", "Halvorsen's private key"], ans: 2, why: "Encrypt with the recipient's public key. Only the recipient's private key can decrypt it." },
    { q: "Which statement about symmetric and asymmetric encryption is true?", opts: ["Symmetric is faster and suits bulk data; asymmetric solves key exchange", "Asymmetric is faster for large files", "Symmetric encryption uses a public and private key pair", "Asymmetric encryption cannot be used for key exchange"], ans: 0, why: "Symmetric ciphers such as AES are fast. Asymmetric encryption is slow but lets parties exchange keys and sign data." },
    { q: "Why does encrypting the same file twice with AES-CBC produce two different ciphertexts?", opts: ["AES changes its algorithm every time", "A random initialization vector and salt are mixed in each time", "The key gets longer each time", "The file is compressed differently"], ans: 1, why: "A fresh IV (and, with a password, a fresh salt) makes every encryption unique, so patterns and repeats do not show." },
    { q: "A server's long-term private key is stolen. Sessions recorded last month still cannot be decrypted. Which property made that possible?", opts: ["Key escrow", "A longer RSA key", "Electronic codebook (ECB) mode", "Perfect forward secrecy"], ans: 3, why: "With ephemeral Diffie-Hellman, each session used its own temporary key, so the stolen long-term key does not unlock old sessions." }
  ]
};

COURSE_LESSONS['2.2'] = {
  id: '2.2', week: 2, title: 'Hashing, salting, and digital signatures', mins: 15, module: 'CertMaster Module 3',
  intro: "Before Priya sends a drawing, Halvorsen wants proof of two things: the file has not changed since Tom Becker released it, and it really came from Cedar Creek. Encryption does not prove either one. This lesson covers the tools that do: hashes for integrity, salts and key stretching for stored passwords, and digital signatures for proof of origin. You will use all three in Kali this afternoon.",
  sections: [
    {
      title: 'What a hash is',
      figure: { id: 'hash-avalanche', caption: 'One changed letter produces a completely different SHA-256 hash. These are the real values you will reproduce in Lab 2.2.' },
      body: [
        "A <strong>hash function</strong> takes input of any size, from one word to a 4 GB disk image, and produces a short, fixed-length value called a <strong>hash</strong> or <strong>digest</strong>. Think of it as a fingerprint for data.",
        "Good cryptographic hash functions have four properties. They are <strong>deterministic</strong>: the same input always gives the same hash. They are <strong>one-way</strong>: you cannot turn a hash back into the input. They show the <strong>avalanche effect</strong>: change one bit of input and about half the bits of the hash change. And they are <strong>collision resistant</strong>: it should be practically impossible to find two different inputs with the same hash.",
        "Hashing is not encryption. Encryption is designed to be reversed by someone with the key. A hash has no key and cannot be reversed. If a question asks for a way to read the data back later, hashing is the wrong answer."
      ],
      table: {
        head: ['Algorithm', 'Hash length', 'Status'],
        rows: [
          ['MD5', '128 bits (32 hex characters)', 'Broken: collisions are easy. Fine only for catching accidental corruption.'],
          ['SHA-1', '160 bits (40 hex characters)', 'Broken: a real collision was published in 2017. Do not use for security.'],
          ['SHA-256 (SHA-2 family)', '256 bits (64 hex characters)', 'Current standard for integrity checks and signatures.'],
          ['SHA-3', '224 to 512 bits', 'Newer standard, built differently from SHA-2. Also acceptable.']
        ]
      },
      keyTerms: [
        { term: 'Hash (digest)', definition: 'A fixed-length value calculated from data. Any change to the data changes the hash.' },
        { term: 'Collision', definition: 'Two different inputs that produce the same hash. A hash function with practical collisions is broken.' },
        { term: 'Avalanche effect', definition: 'A tiny change in input causes a large, unpredictable change in the hash.' }
      ],
      callout: { kind: 'real', title: 'SHA-1 collisions became real', text: "In 2017, researchers from Google and the CWI institute in Amsterdam published two different PDF files that have the same SHA-1 hash. It took a huge amount of computing, but it proved SHA-1 can no longer be trusted to show that a file is unique. Browsers and certificate authorities had already been moving to SHA-256. Halvorsen's rule that 'MD5 and SHA-1 are not accepted' follows the same reasoning." }
    },
    {
      title: 'Hashes for integrity',
      body: [
        "To check a file, you compare two hashes: the one you calculate now, and a trusted one calculated earlier. If they match, the file is unchanged. If even one character differs, something changed it, whether an attacker, a bad download, or a well-meaning coworker.",
        "Software vendors publish hashes next to their downloads for this reason. Cedar Creek can do the same. When Tom releases a drawing package, he can save a <strong>manifest</strong>: a list of every file with its SHA-256 hash. Anyone can later run <code>sha256sum -c</code> against the manifest to prove the files are exactly what Tom released.",
        "A hash alone has a weakness. If an attacker can change the file, they may also be able to change the hash sitting next to it. A hash proves integrity only if you trust where the hash came from. That is why the manifest needs a signature, or must arrive through a separate trusted channel."
      ]
    },
    {
      title: 'Storing passwords: hashing, salting, and key stretching',
      body: [
        "Systems should never store passwords as plaintext. They store a hash of each password instead. At login, the system hashes what you typed and compares it with the stored hash.",
        "Plain hashes have two problems. First, everyone with the same password gets the same hash, so one cracked hash exposes every account using it. Second, attackers use <strong>rainbow tables</strong>: huge precomputed lists of passwords and their hashes. Looking up a plain MD5 hash in such a table can take seconds.",
        "The fix is a <strong>salt</strong>: a random value, different for every account, added to the password before hashing. The salt is stored next to the hash; it is not secret. Its job is to make every hash unique, so two users with the same password get different hashes and precomputed tables become useless.",
        "Attackers can still guess passwords one at a time, so password hashes should also be slow. <strong>Key stretching</strong> runs the hash thousands of times, or uses a deliberately slow algorithm such as <strong>bcrypt</strong>, <strong>PBKDF2</strong>, or <strong>Argon2</strong>. A user waits a fraction of a second once; an attacker trying billions of guesses waits years."
      ],
      keyTerms: [
        { term: 'Salt', definition: 'A random value added to each password before hashing so identical passwords produce different hashes.' },
        { term: 'Rainbow table', definition: 'A precomputed list of hashes for common passwords, used to reverse unsalted hashes quickly.' },
        { term: 'Key stretching', definition: 'Making a hash deliberately slow (bcrypt, PBKDF2, Argon2) so guessing passwords takes far longer.' }
      ],
      callout: { kind: 'cedar', title: 'The old parts portal', text: "Dee exported the user table from Cedar Creek's retired parts-request portal. It stored every password as a plain, unsalted MD5 hash. In Lab 2.2 you will sort that column and see three accounts with exactly the same hash, which means three people used the same password. The new supplier portal uses salted SHA-512 hashes, and the same password looks completely different for each user." }
    },
    {
      title: 'HMAC: a hash with a secret key',
      body: [
        "A <strong>hash-based message authentication code (HMAC)</strong> combines a hash function with a shared secret key. Only someone who holds the key can produce the right HMAC for a message. So an HMAC proves two things: the message has not changed, and it came from someone who has the key.",
        "HMACs are everywhere behind the scenes. TLS and VPNs use them to check that each packet was not altered in transit. Because both sides share the same key, an HMAC cannot prove which of the two sides created a message, so it does not give non-repudiation."
      ]
    },
    {
      title: 'Digital signatures',
      figure: { id: 'digital-signature', caption: 'Signing uses the sender\'s private key. Anyone with the sender\'s public key can verify the signature and detect any change.' },
      body: [
        "A <strong>digital signature</strong> combines hashing with asymmetric cryptography. To sign a file, the sender's software hashes the file and then uses the sender's <strong>private key</strong> to sign that hash. The signature travels with the file.",
        "To verify, the receiver hashes the file they received and uses the sender's <strong>public key</strong> to check the signature. If the file changed by even one bit, or if a different private key made the signature, verification fails.",
        "Notice that this is the opposite of encryption. To keep something secret, you use the recipient's public key. To sign something, you use your own private key. A valid signature gives three things at once: <strong>integrity</strong> (the file is unchanged), <strong>authentication</strong> (it came from the key owner), and <strong>non-repudiation</strong> (the owner cannot believably deny signing, because only they hold the private key).",
        "<strong>Code signing</strong> applies the same idea to software. Operating systems check a program's signature and warn you, or block it, if the signature is missing or does not match. Common signature algorithms include RSA, the Digital Signature Algorithm (DSA), and ECDSA."
      ],
      keyTerms: [
        { term: 'Digital signature', definition: 'A value made with the signer\'s private key over a hash of the data. Verified with the signer\'s public key.' },
        { term: 'Code signing', definition: 'Digitally signing software so users and systems can confirm its publisher and that it has not been altered.' }
      ]
    },
    {
      title: 'What a valid signature does not prove',
      body: [
        "A good signature proves the signer's key signed this exact file. It does not prove the file is safe or that the signer's own systems were not compromised. If attackers get inside the build process, or steal the private key, they can produce perfectly valid signatures."
      ],
      callout: { kind: 'real', title: 'SolarWinds: malicious and validly signed', text: "In 2020, attackers broke into SolarWinds' software build system and inserted a backdoor, later named SUNBURST, into updates for its Orion network monitoring product. Because the code was added before signing, the infected updates were signed with SolarWinds' real code-signing certificate. Customers' systems checked the signature, saw it was valid, and installed the update. SolarWinds told investors that fewer than 18,000 customers had installed an affected version. The signature did its job: it proved the update came from SolarWinds unchanged. The failure was upstream, in the build system." }
    },
    {
      title: 'Choosing the right tool',
      body: [
        "Most exam questions in this area describe a need and ask for the tool. Match the verb in the question to the property."
      ],
      callout: { kind: 'exam', title: 'Hash, HMAC, signature, or encryption?', text: "'Verify the file was not modified' points to hashing. 'Verify the message came from someone holding the shared key' points to HMAC. 'Prove who sent it and stop them denying it' points to a digital signature, made with the sender's private key and checked with the sender's public key. 'Keep it secret' points to encryption with the recipient's public key or a symmetric key. 'Stop rainbow tables' points to salting. 'Slow down password cracking' points to key stretching such as bcrypt or PBKDF2." }
    }
  ],
  check: [
    { q: "Jordan downloads firmware for NVR-01. Which check best shows the file is identical to what the vendor published?", opts: ["Compare its SHA-256 hash with the hash on the vendor's site", "Check that the file size is about right", "Encrypt the file with AES-256", "Scan it with a password manager"], ans: 0, why: "A matching SHA-256 hash from a trusted source shows the file is unchanged. File size can match while the content differs." },
    { q: "Three accounts in an old database share exactly the same password hash. What does that tell you?", opts: ["The database uses SHA-256", "The three users have the same password and the hashes were not salted", "The hashes are encrypted", "The accounts belong to the same person"], ans: 1, why: "Unsalted hashing turns identical passwords into identical hashes. A unique salt per account would make them all different." },
    { q: "Tom signs a manifest file. Which key does Halvorsen use to verify the signature?", opts: ["Tom's private key", "Tom's public key", "Halvorsen's private key", "A shared symmetric key"], ans: 1, why: "A signature is made with the signer's private key and checked with the signer's public key." },
    { q: "Which property does a digital signature provide that an HMAC does not?", opts: ["Integrity", "Confidentiality", "Non-repudiation", "Availability"], ans: 2, why: "With an HMAC both sides share the same key, so either could have made it. Only the signer holds a private key, so a signature gives non-repudiation." },
    { q: "A company wants stolen password hashes to take as long as possible to crack. Which choice helps most?", opts: ["Store passwords with MD5", "Encrypt passwords with a key stored on the same server", "Shorten the hash to save space", "Use bcrypt or PBKDF2 with a unique salt per account"], ans: 3, why: "Salting defeats precomputed tables, and key stretching makes every guess slow." }
  ]
};

COURSE_LESSONS['2.3'] = {
  id: '2.3', week: 2, title: 'PKI and certificates', mins: 15, module: 'CertMaster Module 3',
  intro: "On Friday, Priya received an urgent email from 'Halvorsen Supplier Quality' with a new public key and a certificate for a 'new portal'. If she uses that key, whoever sent the email can read Cedar Creek's drawings. Asymmetric encryption only works if you know whose public key you are holding. Public key infrastructure is the system that answers that question, and certificates are how it answers. Today you will learn to read a certificate the way a browser does, and decide whether to trust it.",
  sections: [
    {
      title: 'The trust problem',
      body: [
        "Anyone can create a key pair and type any name on it. The attacker who emailed Priya created a key labeled 'Halvorsen Pump Supplier Data', the same name as the real one. Nothing in the key itself proves who made it.",
        "<strong>Public key infrastructure (PKI)</strong> solves this with trusted third parties. A <strong>certificate authority (CA)</strong> checks who you are, then issues a <strong>digital certificate</strong>: a file that binds your public key to your identity, signed with the CA's own private key. If you trust the CA, and the CA's signature on the certificate checks out, you can trust that the public key in it belongs to the named owner.",
        "PKI includes the CAs, the certificates, the policies for issuing and revoking them, and the software that checks them. Your browser does all of this every time you visit an HTTPS site."
      ],
      keyTerms: [
        { term: 'PKI', definition: 'Public key infrastructure: the CAs, certificates, policies, and software that bind public keys to identities.' },
        { term: 'Certificate authority (CA)', definition: 'A trusted organization or server that verifies identities and signs certificates.' },
        { term: 'Digital certificate', definition: 'A signed file that binds a public key to a named owner for a set period of time.' }
      ]
    },
    {
      title: 'What is inside a certificate',
      body: [
        "Most certificates follow the <strong>X.509</strong> standard. In Lab 2.4 you will print these fields with <code>openssl x509</code>. Each one answers a question a careful person would ask."
      ],
      table: {
        head: ['Field', 'What it tells you'],
        rows: [
          ['Subject', 'Who the certificate belongs to. CN (common name) is the main name, such as intranet.cedarcreek.local.'],
          ['Subject Alternative Name (SAN)', 'Every name the certificate is valid for. Browsers check the SAN, not just the CN. A wildcard entry such as *.cedarcreek-ind.com covers every name one level below that domain.'],
          ['Issuer', 'The CA that signed it. A self-signed certificate has the same subject and issuer.'],
          ['Validity (notBefore, notAfter)', 'The dates the certificate is valid. After notAfter it has expired.'],
          ['Public key', 'The subject\'s public key, and its algorithm (RSA or ECC) and size.'],
          ['Serial number', 'A unique number from the CA, used when revoking it.'],
          ['Key usage / extended key usage', 'What the key may be used for: signing, encryption, server authentication, code signing.'],
          ['CRL and OCSP locations', 'Where to check whether the certificate has been revoked.'],
          ['Signature', 'The CA\'s signature over all of the above.']
        ]
      },
      callout: { kind: 'cedar', title: 'Three certificates, three stories', text: "In Lab 2.4 you will inspect certificates from Cedar Creek systems. The intranet server's certificate chains to Cedar Creek's own CA and is valid. TIMECLOCK-01's web page still presents a certificate that expired in July 2025, so every browser warns and people have learned to click through the warning. NVR-01 uses the self-signed certificate it shipped with, issued to a factory IP address. Each one teaches users a different bad habit." }
    },
    {
      title: 'Certificate authorities and the chain of trust',
      figure: { id: 'chain-of-trust', caption: 'A browser or openssl verify walks up the chain until it reaches a root certificate it already trusts.' },
      body: [
        "CAs are arranged in a hierarchy. At the top is the <strong>root CA</strong>. Its certificate is <strong>self-signed</strong>, because nothing sits above it. Operating systems and browsers ship with a list of trusted root certificates, called the <strong>trust store</strong>.",
        "Root CAs are so valuable that they are usually kept offline and used only to sign certificates for <strong>intermediate CAs</strong>, also called issuing CAs. The intermediates sign the day-to-day certificates for servers and users, called <strong>leaf</strong> or end-entity certificates. If an intermediate is compromised, the root can revoke it without starting over.",
        "To validate a certificate, software builds the <strong>chain of trust</strong>: the leaf was signed by the intermediate, the intermediate was signed by the root, and the root is in the trust store. Every signature must check out, every certificate must be within its dates, and none may be revoked.",
        "A <strong>public CA</strong> (a third-party CA) is trusted by browsers everywhere and is used for public websites, such as Halvorsen's supplier portal. A <strong>private CA</strong> is run by an organization for its own systems. Cedar Creek already runs one: CedarCreek-Root-CA, kept offline, and CedarCreek-Issuing-CA, which issues server certificates and the VPN user certificates. Company devices trust it because IT installs its root certificate on them. A <strong>self-signed</strong> certificate is signed by its own key with no CA behind it. It is fine for testing, but no one else can verify it."
      ],
      keyTerms: [
        { term: 'Root CA', definition: 'The top CA in a hierarchy. Its self-signed certificate sits in the trust store.' },
        { term: 'Intermediate (issuing) CA', definition: 'A CA signed by the root that issues certificates to servers, users, and devices.' },
        { term: 'Chain of trust', definition: 'The path of signatures from a leaf certificate up to a trusted root.' },
        { term: 'Self-signed certificate', definition: 'A certificate signed by its own private key. No third party vouches for it.' }
      ]
    },
    {
      title: 'Getting a certificate',
      figure: { id: 'cert-lifecycle', caption: 'The certificate lifecycle: request, issue, use, then renew before expiry or revoke if something goes wrong.' },
      body: [
        "To get a certificate, the server owner first generates a key pair. The private key stays on the server. The owner then creates a <strong>certificate signing request (CSR)</strong>, which contains the public key and the requested names, signed with the private key. The CSR goes to the CA.",
        "The CA, or a <strong>registration authority (RA)</strong> working for it, checks that the requester really controls the names. For a public website this may be <strong>domain validation</strong>: proving control of the domain. <strong>Extended validation (EV)</strong> certificates involve stronger checks of the organization itself. Once satisfied, the CA signs and issues the certificate.",
        "Certificates are issued for different jobs: server certificates for websites, user and client certificates for logins such as Cedar Creek's VPN, email certificates for signing and encrypting mail with S/MIME, and code signing certificates for software.",
        "Certificates come in a few file formats. <strong>PEM</strong> files are text, starting with a BEGIN CERTIFICATE line. <strong>DER</strong> is the same data in binary. <strong>PFX/P12</strong> files bundle a certificate with its private key, protected by a password, and must be guarded like the key itself."
      ],
      keyTerms: [
        { term: 'CSR', definition: 'Certificate signing request: the public key and requested names, sent to a CA to be signed.' },
        { term: 'Registration authority (RA)', definition: 'The part of a PKI that verifies a requester\'s identity before the CA issues a certificate.' }
      ]
    },
    {
      title: 'Revocation and expiration',
      body: [
        "Every certificate has an expiry date. Shorter lifetimes limit the damage if a key is stolen without anyone knowing. Expiry also creates work: certificates must be renewed on time, and a forgotten renewal can break a website or, worse, quietly disable a security tool.",
        "Sometimes a certificate must stop being trusted before it expires: the private key was stolen, the server was retired, or the employee left. The CA then <strong>revokes</strong> it. Software learns about revocation in two main ways. A <strong>certificate revocation list (CRL)</strong> is a signed list of revoked serial numbers that the CA publishes on a schedule; clients download it. The <strong>Online Certificate Status Protocol (OCSP)</strong> lets a client ask the CA about one certificate in real time. With <strong>OCSP stapling</strong>, the web server fetches a fresh, signed OCSP answer and hands it to visitors itself, which is faster and more private.",
        "In PBQ Lab 9 you will approve, deny, revoke, and unrevoke certificates on a Windows CA. A revocation reason of 'certificate hold' is temporary and can be undone. 'Key compromise' is permanent."
      ],
      keyTerms: [
        { term: 'CRL', definition: 'Certificate revocation list: a signed, periodically published list of revoked certificate serial numbers.' },
        { term: 'OCSP', definition: 'Online Certificate Status Protocol: a real-time query for whether one certificate is revoked.' }
      ],
      callout: { kind: 'real', title: 'Equifax and the expired certificate', text: "In 2017, attackers stole personal data on about 147 million people from Equifax. Equifax had a device that inspected encrypted traffic leaving its network, but the digital certificate the device needed had expired, so it was not inspecting that traffic. The attackers' data theft went unnoticed for more than two months. When staff renewed the certificate in late July 2017, the device flagged suspicious traffic almost at once and the breach was discovered. The U.S. Government Accountability Office report on the breach (GAO-18-559) describes the expired certificate as one reason the attack went undetected. Certificate management is a security control, not paperwork." }
    },
    {
      title: 'Trust without a CA: fingerprints',
      body: [
        "OpenPGP keys, the kind GnuPG uses, usually have no CA. Instead, people confirm keys directly. Every key has a <strong>fingerprint</strong>, a hash of the public key that is short enough to read aloud. You get the key, then confirm its fingerprint with the owner through a different channel, such as a phone call to a number you already trust. If the fingerprints match, the key is genuine. This is how Tom confirmed Halvorsen's key, and it is why the key attached to Friday's email fails the test."
      ],
      callout: { kind: 'exam', title: 'Certificate terms that get mixed up', text: "Root CA: top of the chain, self-signed, kept offline. Intermediate CA: issues the day-to-day certificates. CSR: what you send to get a certificate. RA: verifies identity for the CA. CRL: a published list of revoked certificates. OCSP: a real-time status check of one certificate. Stapling: the server attaches the OCSP answer. Wildcard: one certificate for *.domain. SAN: lists every name the certificate covers. Self-signed: no third party vouches for it, so browsers warn." }
    }
  ],
  check: [
    { q: "What does a certificate authority's signature on a certificate prove?", opts: ["The website has no vulnerabilities", "The traffic will be compressed", "The private key is stored inside the certificate", "The CA verified that the public key belongs to the named subject"], ans: 3, why: "A CA signs to vouch that the public key in the certificate belongs to the subject named in it." },
    { q: "Cedar Creek's root CA is kept powered off in a safe and only used to sign the issuing CA's certificate. Why?", opts: ["Keeping the root offline protects the most valuable key; the intermediate can be revoked if compromised", "Root CAs cannot issue certificates", "It saves electricity", "Browsers refuse certificates from online CAs"], ans: 0, why: "If an online issuing CA is compromised, the offline root can revoke it and issue a new one. Losing the root key would mean rebuilding all trust." },
    { q: "A client needs to know, right now, whether a single certificate has been revoked. Which method fits best?", opts: ["Download the CRL once a month", "Check the certificate's serial number by eye", "Query an OCSP responder", "Generate a new CSR"], ans: 2, why: "OCSP answers the status of one certificate in real time. A CRL is a periodically published list." },
    { q: "What does a server owner send to a CA to obtain a certificate?", opts: ["Their private key", "A certificate signing request (CSR)", "A CRL", "A PFX file with the private key"], ans: 1, why: "The CSR contains the public key and requested names. The private key never leaves the server." },
    { q: "A certificate's subject and issuer are identical, and openssl verify reports 'self-signed certificate'. What does this mean?", opts: ["It was issued by a public CA", "It has been revoked", "It is a wildcard certificate", "No independent CA vouches for it, so it cannot be verified against a trust store"], ans: 3, why: "A self-signed certificate is signed by its own key. Unless you added it to your trust store on purpose, there is nothing to verify it against." }
  ]
};

COURSE_LESSONS['2.4'] = {
  id: '2.4', week: 2, title: 'Key management and protecting data', mins: 15, module: 'CertMaster Module 3',
  intro: "Encryption moves the problem from the data to the key. If Dee encrypts the backup tapes but leaves the key on a sticky note, nothing is protected. If the only copy of the key is lost, the backups are lost too. This lesson covers how keys are created, stored, recovered, and destroyed, then applies encryption to data in its three states. It ends with the other ways to hide data, from tokens to steganography, and with blockchain.",
  sections: [
    {
      title: 'The key lifecycle',
      body: [
        "<strong>Key management</strong> is everything that happens to a key from creation to destruction. Most real failures in cryptography are key management failures, not broken algorithms."
      ],
      table: {
        head: ['Stage', 'What good practice looks like', 'Cedar Creek example'],
        rows: [
          ['Generate', 'Use a strong random source and an approved algorithm and length.', 'gpg and openssl generate keys from the system\'s secure random source.'],
          ['Store', 'Keep private keys in protected hardware or encrypted storage, with access limited to the people and systems that need them.', 'The backup tape key lives in the backup server\'s key store.'],
          ['Distribute', 'Share public keys openly; move secret keys only through a separate, protected channel.', 'Halvorsen\'s key fingerprint confirmed by phone.'],
          ['Use and rotate', 'Replace keys on a schedule and whenever someone with access leaves.', 'The new procedure: engineers\' signing keys expire after one year.'],
          ['Recover', 'Keep a protected recovery copy so a lost key does not mean lost data.', 'A sealed paper copy of the tape key in Marcus\'s safe.'],
          ['Revoke and destroy', 'Revoke keys that are compromised or retired; securely destroy keys that are no longer needed.', 'Revoke a departed engineer\'s key and certificates.']
        ]
      },
      callout: { kind: 'cedar', title: 'Dee\'s offsite backup plan', text: "In Lab 2.1 you will decrypt Dee's draft plan for taking backup tapes offsite. It answers two key management questions well: the tapes are encrypted with AES-256 before they leave the building, so a lost case does not leak data, and a sealed copy of the tape key sits in Marcus's safe, so losing the backup server does not mean losing the tapes. It also creates a new risk: anyone who opens that safe holds every tape's key." }
    },
    {
      title: 'Where keys live: TPM, HSM, enclaves, and escrow',
      body: [
        "A <strong>Trusted Platform Module (TPM)</strong> is a small security chip built into most modern PCs and laptops. It can create and store keys that never leave the chip, and it records measurements of the boot process. Windows BitLocker uses the TPM to hold the disk encryption key and to release it only if the computer boots normally. If someone pulls the drive and puts it in another computer, the key stays behind.",
        "A <strong>hardware security module (HSM)</strong> is a dedicated, tamper-resistant device, often a network appliance or a card in a server, that generates, stores, and uses keys for many systems at once. CAs keep their signing keys in HSMs. Cloud providers offer the same thing as a service, usually called a <strong>key management system (KMS)</strong>.",
        "A <strong>secure enclave</strong> is a protected area inside a processor that runs code and handles keys separately from the main operating system. Phones use one to protect fingerprint and face data and payment keys.",
        "<strong>Key escrow</strong> means a copy of a key is held by a trusted party so data can be recovered if the original is lost, or reached for legal reasons. Escrow trades some risk for recoverability: the escrowed copy must be protected as carefully as the original."
      ],
      keyTerms: [
        { term: 'TPM', definition: 'Trusted Platform Module: a chip in a computer that stores keys and checks the boot process.' },
        { term: 'HSM', definition: 'Hardware security module: a tamper-resistant device that stores and uses keys for many systems.' },
        { term: 'Secure enclave', definition: 'An isolated area of a processor that protects keys and sensitive operations from the main OS.' },
        { term: 'Key escrow', definition: 'Holding a copy of a key with a trusted party so it can be recovered.' }
      ]
    },
    {
      title: 'Data at rest, in transit, and in use',
      figure: { id: 'data-states', caption: 'The three states of data, the encryption that protects each, and a Cedar Creek example.' },
      body: [
        "Data is always in one of three states, and each state needs its own protection.",
        "<strong>Data at rest</strong> is stored: on a drive, a tape, a USB stick, or in a database. Encryption at rest can work at several levels. <strong>Full-disk encryption (FDE)</strong>, such as BitLocker, protects everything on a drive, which is ideal for a laptop that might be stolen. <strong>Partition</strong> and <strong>volume</strong> encryption protect part of a drive. <strong>File</strong> encryption, such as the gpg file you will make, protects one file wherever it goes. <strong>Database</strong> encryption protects a whole database, and <strong>record</strong> or field encryption protects single columns, such as Social Security numbers in an HR table. FDE stops protecting a file once the computer is unlocked; file-level encryption keeps protecting it even after it is copied somewhere else.",
        "<strong>Data in transit</strong> is moving across a network. TLS protects web traffic and secure email transfer. A <strong>VPN</strong>, often built on IPsec, protects all traffic between two points. SSH protects remote logins and SFTP file transfers. S/MIME and OpenPGP protect individual email messages and files end to end.",
        "<strong>Data in use</strong> is being processed in a computer's memory (RAM). To work on data, a program normally has to decrypt it first, so this is the hardest state to protect. Secure enclaves and memory protections help, but the main defense is keeping attackers off the system in the first place."
      ],
      callout: { kind: 'real', title: 'Target: stolen from memory', text: "In the 2013 Target breach, which you studied in Project 1, attackers installed malware on the point-of-sale registers in Target's stores. When a card was swiped, its data briefly sat in the register's memory before it was encrypted and sent on. The malware scraped card numbers from that memory. About 40 million payment cards were exposed. Target's data in transit could be encrypted and still be stolen, because the attackers took it while it was in use." }
    },
    {
      title: 'Obfuscation: tokenization, masking, and steganography',
      body: [
        "<strong>Obfuscation</strong> means making data hard to read or find. Not all of it is encryption, and the differences matter on the exam.",
        "Each method fits a different need at Cedar Creek. Payroll reports that managers print could show only the last four digits of a Social Security number, which is masking. A developer testing a new HR app should get a masked copy of the employee table, not the real one. The cloud payroll provider handles bank account numbers, and a payment processor would replace card numbers with tokens so its own systems never store the real values. Steganography is mostly something defenders watch for: an insider could hide drawing data inside harmless-looking images and email them out."
      ],
      table: {
        head: ['Method', 'What it does', 'Reversible?', 'Typical use'],
        rows: [
          ['Encryption', 'Scrambles data with a key', 'Yes, with the key', 'Files, disks, network traffic'],
          ['Hashing', 'Makes a fixed-length fingerprint', 'No', 'Integrity checks, password storage'],
          ['Tokenization', 'Replaces a value with a random token; the real value is kept in a secure vault', 'Only by looking it up in the vault', 'Card numbers in payment systems'],
          ['Data masking', 'Hides part of a value when it is shown, such as XXX-XX-1234', 'Usually not, in the masked copy', 'Screens, reports, test databases'],
          ['Steganography', 'Hides data inside other data, such as a picture or audio file', 'Yes, if you know where to look', 'Watermarks; also used by attackers to sneak data out']
        ]
      },
      keyTerms: [
        { term: 'Tokenization', definition: 'Replacing sensitive data with a random token that has no mathematical link to the original.' },
        { term: 'Data masking', definition: 'Hiding part of a sensitive value so it can be shown or used safely.' },
        { term: 'Steganography', definition: 'Hiding a message inside another file so no one knows the message exists.' }
      ]
    },
    {
      title: 'Blockchain and the open public ledger',
      body: [
        "A <strong>blockchain</strong> is a list of records, grouped into blocks, where each block includes the hash of the block before it. Changing any old record changes that block's hash, which breaks the link to every block after it. That makes tampering obvious.",
        "In public blockchains, many independent computers keep copies of the whole chain and agree on new blocks. Security+ calls this an <strong>open public ledger</strong>: anyone can read it, and no single party can quietly rewrite it. Cryptocurrencies are the best-known use. Blockchain gives integrity and transparency. It does not give confidentiality, because everyone can see the entries."
      ],
      callout: { kind: 'exam', title: 'Pick the protection for the state', text: "A stolen laptop points to full-disk encryption, with the key in a TPM. A lost backup tape points to encryption at rest. Data crossing the internet points to TLS or a VPN. Data being processed in memory is data in use. Credit card numbers replaced with values that cannot be reversed mathematically means tokenization. A screen showing only the last four digits is masking. Hidden data inside an image is steganography. A tamper-evident chain of hashed records shared by many parties is a blockchain or open public ledger. Storing keys for many servers in tamper-resistant hardware is an HSM. Keeping a recoverable copy with a third party is key escrow." }
    }
  ],
  check: [
    { q: "A Finance laptop is stolen from a car. Which control best protects the data on it?", opts: ["Full-disk encryption with the key held in the TPM", "TLS", "Data masking", "A digital signature on each file"], ans: 0, why: "Full-disk encryption protects data at rest on the whole drive. The TPM keeps the key from leaving the laptop's hardware." },
    { q: "A CA needs to store its signing keys in tamper-resistant hardware that many systems can use. What should it use?", opts: ["A TPM in one laptop", "Key escrow", "A self-signed certificate", "A hardware security module (HSM)"], ans: 3, why: "An HSM is a dedicated, tamper-resistant device built to generate, store, and use keys for many systems." },
    { q: "A payment system replaces each card number with a random value that is mapped back only in a secure vault. What is this?", opts: ["Hashing", "Masking", "Tokenization", "Steganography"], ans: 2, why: "Tokenization swaps the real value for a random token. Only a vault lookup returns the original." },
    { q: "Malware reads card numbers from a register's memory before they are encrypted. Which data state was attacked?", opts: ["Data at rest", "Data in transit", "Data in use", "Data in escrow"], ans: 2, why: "Data being processed in memory is data in use, the hardest state to protect with encryption." },
    { q: "Why must the escrowed copy of a key be protected as carefully as the original?", opts: ["It is used for every encryption", "Anyone who gets the escrowed copy can decrypt the same data", "Escrowed keys expire faster", "Escrow makes the key public"], ans: 1, why: "An escrowed key works exactly like the original. If it leaks, the protected data is exposed." }
  ]
};

COURSE_QUIZ.w2 = {
  title: 'Week 2 Quiz',
  pass: 80,
  questions: [
    { lesson: '2.1', q: "Which encryption approach uses the same single key to both encrypt and decrypt data?", opts: ["Asymmetric encryption", "Symmetric encryption", "Hashing", "Digital signatures"], ans: 1, why: "Symmetric encryption uses one shared secret key for both operations. Asymmetric encryption uses a key pair." },
    { lesson: '2.1', q: "Dee wants to encrypt 400 GB of backup data quickly before tapes leave the building. Which algorithm fits best?", opts: ["RSA-2048", "AES-256", "SHA-256", "MD5"], ans: 1, why: "AES is a fast symmetric cipher built for bulk data. RSA is too slow for large data, and SHA-256 and MD5 are hashes, not encryption." },
    { lesson: '2.1', q: "Why is asymmetric encryption often used at the start of a secure session, before switching to symmetric encryption?", opts: ["Symmetric encryption cannot encrypt data", "It solves the problem of sharing a secret key safely", "Symmetric keys never expire", "Asymmetric encryption is faster for large files"], ans: 1, why: "Asymmetric methods let the two sides agree on or protect a session key. Symmetric encryption then carries the bulk data because it is faster." },
    { lesson: '2.1', q: "Which method lets two parties agree on a shared secret over an insecure network, even if an eavesdropper sees every message?", opts: ["SHA-256", "Diffie-Hellman", "AES", "Data masking"], ans: 1, why: "Diffie-Hellman is a key exchange method. AES encrypts, SHA-256 hashes, and masking hides displayed data." },
    { lesson: '2.1', q: "A block cipher mode mixes a unique random value into each encryption so identical plaintext does not produce identical ciphertext. What is this value?", opts: ["A public key", "An initialization vector (IV)", "A certificate", "A session ID"], ans: 1, why: "The IV adds randomness so repeated data does not create repeated ciphertext patterns." },
    { lesson: '2.2', q: "What is the main purpose of a cryptographic hash function such as SHA-256?", opts: ["To encrypt data so it can be decrypted later", "To exchange symmetric keys", "To compress files", "To verify integrity by producing a fixed-length digest"], ans: 3, why: "A hash is a one-way fingerprint used to detect changes. It cannot be reversed like encryption." },
    { lesson: '2.2', q: "Halvorsen will not accept MD5 or SHA-1 manifests. Why?", opts: ["They are too slow", "Practical collisions exist, so two different files can share a hash", "They need a public key", "They only work on Windows"], ans: 1, why: "MD5 and SHA-1 have known practical collisions, so a matching hash no longer proves a file is the original." },
    { lesson: '2.2', q: "Adding a unique random value to each password before hashing it, to defeat precomputed attacks, is called:", opts: ["Salting", "Masking", "Key escrow", "Encoding"], ans: 0, why: "A salt makes identical passwords hash differently, which defeats rainbow tables." },
    { lesson: '2.2', q: "Key stretching techniques such as bcrypt and PBKDF2 are used to:", opts: ["Speed up file transfers", "Make password hashing deliberately slow to resist cracking", "Compress backups", "Lengthen certificate lifetimes"], ans: 1, why: "Key stretching makes every guess expensive, so cracking stolen hashes takes far longer." },
    { lesson: '2.2', q: "A digital signature primarily provides which security benefits?", opts: ["Integrity, authentication, and non-repudiation", "Confidentiality and availability", "Only confidentiality", "Only availability"], ans: 0, why: "A valid signature shows the data is unchanged, identifies the signer, and stops the signer from denying it. It does not hide the data." },
    { lesson: '2.2', q: "A vendor's software update is signed with the vendor's real certificate, yet it contains a backdoor inserted in the vendor's build system. What does this show?", opts: ["The signature was forged", "A valid signature proves origin and integrity after signing, not that the code is safe", "Code signing always prevents supply chain attacks", "The customer used the wrong hash algorithm"], ans: 1, why: "As in the SolarWinds attack, code added before signing gets a valid signature. Signing cannot catch a compromised build process." },
    { lesson: '2.2', q: "A message arrives with an HMAC. What does a correct HMAC prove?", opts: ["Only the sender could have created it, so the sender cannot deny it", "The message is unchanged and came from someone who holds the shared key", "The message was encrypted", "The sender's certificate is valid"], ans: 1, why: "An HMAC uses a shared secret key, so it proves integrity and that the sender holds the key. Because both sides share the key, it does not give non-repudiation." },
    { lesson: '2.3', q: "Which entity in a PKI issues and signs certificates to vouch for their owners' identities?", opts: ["Registration authority", "Key escrow agent", "Certificate authority (CA)", "Certificate holder"], ans: 2, why: "The CA signs certificates. A registration authority only verifies identities before the CA issues them." },
    { lesson: '2.3', q: "How can a client check whether a certificate has been revoked before its expiry date?", opts: ["Check a CRL or query an OCSP responder", "Read the certificate's serial number", "Check the file size", "Re-hash the private key"], ans: 0, why: "Revocation status comes from the CA's certificate revocation list or from OCSP." },
    { lesson: '2.3', q: "Which certificate type secures a domain and all of its first-level subdomains, such as *.cedarcreek-ind.com?", opts: ["Self-signed certificate", "Code signing certificate", "Wildcard certificate", "Root certificate"], ans: 2, why: "A wildcard certificate covers every name one level below the domain. A code signing certificate is for software, not websites." },
    { lesson: '2.3', q: "Priya receives an email with a 'new' Halvorsen public key. Its name matches the old key, but its fingerprint does not match the one Halvorsen read to Tom over the phone. What should she do?", opts: ["Use the new key because the name matches", "Use both keys to be safe", "Do not use it; report the email and confirm with Halvorsen by phone", "Import it and sign it so it becomes trusted"], ans: 2, why: "A fingerprint confirmed through a separate trusted channel is the proof. Anyone can put any name on a key." },
    { lesson: '2.3', q: "The TIMECLOCK-01 web page shows a browser warning because its certificate's notAfter date has passed. What is the correct fix?", opts: ["Tell users to click through the warning", "Renew the certificate from the issuing CA and install it", "Add the old certificate to every trust store", "Revoke the root CA"], ans: 1, why: "An expired certificate must be renewed. Teaching users to ignore warnings trains them to accept a real attacker's certificate later." },
    { lesson: '2.4', q: "A Trusted Platform Module (TPM) on a laptop is mainly used to:", opts: ["Provide backup power", "Store encryption keys in hardware and check the boot process", "Filter web traffic", "Issue certificates to other computers"], ans: 1, why: "The TPM stores keys, such as the BitLocker key, and releases them only when the boot measurements look normal." },
    { lesson: '2.4', q: "Which term describes showing a card number as XXXX-XXXX-XXXX-1234 on a screen?", opts: ["Full encryption", "Hashing", "Tokenization", "Data masking"], ans: 3, why: "Masking hides part of a value for display. Tokenization replaces the whole value with a token kept in a vault." },
    { lesson: '2.4', q: "Key escrow refers to:", opts: ["Deleting all keys after use", "Publishing private keys online", "Storing a copy of keys with a trusted party for recovery", "Encrypting keys with themselves"], ans: 2, why: "Escrow keeps a recoverable copy with a trusted party. That copy must be protected as well as the original." }
  ]
};
