// Week 3 lesson diagrams (inline SVG strings). Built by docs/tools/make_week3_figures.js. Used by Lesson.html via section.figure = { id, caption }.
window.COURSE_FIGURES = window.COURSE_FIGURES || {};

COURSE_FIGURES['auth-factors'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 372" role="img" aria-label="Authentication factors diagram. Four cards: something you know (password, passphrase, PIN; weak because it can be guessed or phished; Cedar Creek example: the PIN on the server room keypad), something you have (phone app, security key, smart card, badge; can be stolen or approved by mistake; example: the server room badge), something you are (fingerprint, face, iris, voice; cannot be changed if copied; example: a fingerprint unlocking a phone), and somewhere you are (network, country, location; weak alone but a good extra check; example: flagging a 3 AM sign-in from abroad). A banner states that MFA means two or more different factor types: badge plus PIN is MFA, password plus security question is not.">' +
  '<rect x="0" y="0" width="800" height="372" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="182" height="250" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="111" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16.5" font-weight="700" fill="#00f5ff" text-anchor="middle">Something you know</text>' +
  '<text x="111" y="80" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Password, passphrase,</text>' +
  '<text x="111" y="99" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">PIN, security answer</text>' +
  '<line x1="36" y1="132" x2="186" y2="132" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="111" y="156" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Weak spot: guessed,</text>' +
  '<text x="111" y="174" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">phished, written down</text>' +
  '<line x1="36" y1="192" x2="186" y2="192" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="111" y="216" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="111" y="238" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">PIN on the server</text>' +
  '<text x="111" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">room keypad</text>' +
  '<rect x="216" y="20" width="182" height="250" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="307" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16.5" font-weight="700" fill="#33d17a" text-anchor="middle">Something you have</text>' +
  '<text x="307" y="80" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Phone app, security key,</text>' +
  '<text x="307" y="99" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">smart card, badge</text>' +
  '<line x1="232" y1="132" x2="382" y2="132" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="307" y="156" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Weak spot: stolen, or</text>' +
  '<text x="307" y="174" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">tricked into approving</text>' +
  '<line x1="232" y1="192" x2="382" y2="192" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="307" y="216" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="307" y="238" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Badge on the server</text>' +
  '<text x="307" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">room door</text>' +
  '<rect x="412" y="20" width="182" height="250" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="503" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16.5" font-weight="700" fill="#ffc23d" text-anchor="middle">Something you are</text>' +
  '<text x="503" y="80" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Fingerprint, face,</text>' +
  '<text x="503" y="99" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">iris, voice</text>' +
  '<line x1="428" y1="132" x2="578" y2="132" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="503" y="156" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Weak spot: cannot be</text>' +
  '<text x="503" y="174" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">changed if copied</text>' +
  '<line x1="428" y1="192" x2="578" y2="192" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="503" y="216" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="503" y="238" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Fingerprint</text>' +
  '<text x="503" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">unlocking a phone</text>' +
  '<rect x="608" y="20" width="182" height="250" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="699" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16.5" font-weight="700" fill="#b794ff" text-anchor="middle">Somewhere you are</text>' +
  '<text x="699" y="80" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Network, country,</text>' +
  '<text x="699" y="99" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">GPS location</text>' +
  '<line x1="624" y1="132" x2="774" y2="132" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="699" y="156" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Weak alone; good as</text>' +
  '<text x="699" y="174" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">an extra check</text>' +
  '<line x1="624" y1="192" x2="774" y2="192" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="699" y="216" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="699" y="238" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Flag a 3 AM foreign</text>' +
  '<text x="699" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">sign-in</text>' +
  '<rect x="20" y="290" width="760" height="64" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="400" y="316" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ee2207" text-anchor="middle">MFA = two or more DIFFERENT factor types</text>' +
  '<text x="400" y="340" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Badge + PIN is MFA (have + know). Password + security question is not (know + know).</text>' +
  '</svg>';

COURSE_FIGURES['mfa-ladder'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 380" role="img" aria-label="MFA strength ladder, weakest at the bottom. Password only: any leaked or guessed password works (Cedar Creek: the CC-LEGACY VPN profile). SMS code: vulnerable to SIM swapping and fake pages. App code or push: codes can be relayed and pushes approved through fatigue (Cedar Creek: CC-REMOTE push). Push with number matching: blocks blind approvals (recommended next step). FIDO2 key or passkey at the top: phishing-resistant because it is bound to the real site (goal for admins and the CFO).">' +
  '<rect x="0" y="0" width="800" height="380" rx="12" fill="#0d0d1f"/>' +
  '<rect x="120" y="300" width="560" height="58" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<rect x="120" y="300" width="6" height="58" rx="3" fill="#ee2207"/>' +
  '<text x="142" y="325" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ee2207" text-anchor="start">Password only</text>' +
  '<text x="142" y="345" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Any leaked or guessed password works</text>' +
  '<text x="664" y="335" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="end">CC-LEGACY VPN profile</text>' +
  '<rect x="128" y="230" width="544" height="58" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="2"/>' +
  '<rect x="128" y="230" width="6" height="58" rx="3" fill="#ff8a4c"/>' +
  '<text x="150" y="255" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ff8a4c" text-anchor="start">SMS code</text>' +
  '<text x="150" y="275" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">SIM swapping; code typed into fake pages</text>' +
  '<text x="656" y="265" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="end">Not used at Cedar Creek</text>' +
  '<rect x="136" y="160" width="528" height="58" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<rect x="136" y="160" width="6" height="58" rx="3" fill="#ffc23d"/>' +
  '<text x="158" y="185" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ffc23d" text-anchor="start">App code (TOTP) or push</text>' +
  '<text x="158" y="205" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Relayed codes; MFA fatigue approvals</text>' +
  '<text x="648" y="195" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="end">CC-REMOTE push approval</text>' +
  '<rect x="144" y="90" width="512" height="58" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<rect x="144" y="90" width="6" height="58" rx="3" fill="#33d17a"/>' +
  '<text x="166" y="115" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#33d17a" text-anchor="start">Push with number matching</text>' +
  '<text x="166" y="135" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Blind approvals blocked</text>' +
  '<text x="640" y="125" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="end">Recommended next step</text>' +
  '<rect x="152" y="20" width="496" height="58" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<rect x="152" y="20" width="6" height="58" rx="3" fill="#00f5ff"/>' +
  '<text x="174" y="45" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#00f5ff" text-anchor="start">FIDO2 key or passkey</text>' +
  '<text x="174" y="65" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Phishing-resistant: bound to the real site</text>' +
  '<text x="632" y="55" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="end">Goal for admins and the CFO</text>' +
  '<line x1="70" y1="358" x2="70" y2="35" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="70.0,24.0 76.0,35.0 64.0,35.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<text x="46" y="189" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="2" transform="rotate(-90 46 189)">STRONGER</text>' +
  '</svg>';

COURSE_FIGURES['access-models'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 302" role="img" aria-label="Five access control models. DAC, discretionary: the owner decides, for example Tom sharing his folder with Linux chmod and chown. MAC, mandatory: the system decides from labels and clearances, as in SELinux or classified government systems. RBAC, role-based: the role decides, joining a group grants access, as with ENG-Share-RW. Rule-based: a global rule decides for everyone, such as no VPN from midnight to 5 AM. ABAC, attribute-based: many attributes of user, device, and place decide, such as a managed laptop inside the US.">' +
  '<rect x="0" y="0" width="800" height="302" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="144" height="236" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="92" y="60" font-family="Rajdhani, Segoe UI, sans-serif" font-size="30" font-weight="700" fill="#00f5ff" text-anchor="middle" letter-spacing="1">DAC</text>' +
  '<text x="92" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Discretionary</text>' +
  '<line x1="34" y1="98" x2="150" y2="98" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="92" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">The OWNER</text>' +
  '<text x="92" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">decides</text>' +
  '<text x="92" y="166" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Tom shares his folder</text>' +
  '<line x1="34" y1="186" x2="150" y2="186" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="92" y="210" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">EXAMPLE</text>' +
  '<text x="92" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Linux chmod / chown</text>' +
  '<rect x="174" y="20" width="144" height="236" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="246" y="60" font-family="Rajdhani, Segoe UI, sans-serif" font-size="30" font-weight="700" fill="#ff7aa2" text-anchor="middle" letter-spacing="1">MAC</text>' +
  '<text x="246" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Mandatory</text>' +
  '<line x1="188" y1="98" x2="304" y2="98" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="246" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">The SYSTEM</text>' +
  '<text x="246" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">decides</text>' +
  '<text x="246" y="166" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">from labels + clearance</text>' +
  '<line x1="188" y1="186" x2="304" y2="186" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="246" y="210" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">EXAMPLE</text>' +
  '<text x="246" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">SELinux, classified gov.</text>' +
  '<rect x="328" y="20" width="144" height="236" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="400" y="60" font-family="Rajdhani, Segoe UI, sans-serif" font-size="30" font-weight="700" fill="#33d17a" text-anchor="middle" letter-spacing="1">RBAC</text>' +
  '<text x="400" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Role-based</text>' +
  '<line x1="342" y1="98" x2="458" y2="98" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">The ROLE</text>' +
  '<text x="400" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">decides</text>' +
  '<text x="400" y="166" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">join group = get access</text>' +
  '<line x1="342" y1="186" x2="458" y2="186" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="210" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">EXAMPLE</text>' +
  '<text x="400" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">ENG-Share-RW</text>' +
  '<rect x="482" y="20" width="144" height="236" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="554" y="60" font-family="Rajdhani, Segoe UI, sans-serif" font-size="30" font-weight="700" fill="#ffc23d" text-anchor="middle" letter-spacing="1">RULE</text>' +
  '<text x="554" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Rule-based</text>' +
  '<line x1="496" y1="98" x2="612" y2="98" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="554" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">A GLOBAL</text>' +
  '<text x="554" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">RULE decides</text>' +
  '<text x="554" y="166" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">same for everyone</text>' +
  '<line x1="496" y1="186" x2="612" y2="186" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="554" y="210" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">EXAMPLE</text>' +
  '<text x="554" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">No VPN midnight-5 AM</text>' +
  '<rect x="636" y="20" width="144" height="236" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="708" y="60" font-family="Rajdhani, Segoe UI, sans-serif" font-size="30" font-weight="700" fill="#b794ff" text-anchor="middle" letter-spacing="1">ABAC</text>' +
  '<text x="708" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Attribute-based</text>' +
  '<line x1="650" y1="98" x2="766" y2="98" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="708" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">MANY ATTRIBUTES</text>' +
  '<text x="708" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="700" fill="#e8e8e8" text-anchor="middle">decide</text>' +
  '<text x="708" y="166" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">user + device + place</text>' +
  '<line x1="650" y1="186" x2="766" y2="186" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="708" y="210" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">EXAMPLE</text>' +
  '<text x="708" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Managed laptop, in US</text>' +
  '<text x="400" y="284" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Flexible and easy (DAC) ............................................ strict and fine-grained (MAC, ABAC)</text>' +
  '</svg>';

COURSE_FIGURES['linux-perms'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 356" role="img" aria-label="Reading a Linux permission string. The string drwxr-x--- is split into the type (d means folder) and three sets: owner rwx equals 4 plus 2 plus 1 equals 7 (root), group r-x equals 5 (engineering), and others --- equals 0. So chmod 750 gives the owner everything, the group read and execute, and others nothing. Common modes: 600 for a private key, 640 for a payroll file, 644 for a public config file, 750 for a team folder, 770 for a shared team folder, and 777 never.">' +
  '<rect x="0" y="0" width="800" height="356" rx="12" fill="#0d0d1f"/>' +
  '<rect x="113" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#a0a0ac" stroke-width="2"/>' +
  '<text x="138" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#e8e8e8" text-anchor="middle">d</text>' +
  '<rect x="169" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="194" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#e8e8e8" text-anchor="middle">r</text>' +
  '<rect x="225" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="250" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#e8e8e8" text-anchor="middle">w</text>' +
  '<rect x="281" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="306" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#e8e8e8" text-anchor="middle">x</text>' +
  '<rect x="337" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="362" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#e8e8e8" text-anchor="middle">r</text>' +
  '<rect x="393" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="418" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#3a3a5c" text-anchor="middle">-</text>' +
  '<rect x="449" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="474" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#e8e8e8" text-anchor="middle">x</text>' +
  '<rect x="505" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="530" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#3a3a5c" text-anchor="middle">-</text>' +
  '<rect x="561" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="586" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#3a3a5c" text-anchor="middle">-</text>' +
  '<rect x="617" y="40" width="50" height="62" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="642" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="32" font-weight="400" fill="#3a3a5c" text-anchor="middle">-</text>' +
  '<text x="138" y="126" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">type</text>' +
  '<text x="138" y="143" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="middle">d = folder</text>' +
  '<line x1="169" y1="114" x2="331" y2="114" fill="none" stroke="#00f5ff" stroke-width="3" stroke-linecap="round"/>' +
  '<text x="250" y="136" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#00f5ff" text-anchor="middle">OWNER (user)</text>' +
  '<text x="250" y="156" font-family="Share Tech Mono, Consolas, monospace" font-size="15" font-weight="400" fill="#e8e8e8" text-anchor="middle">rwx = 4+2+1 = 7</text>' +
  '<text x="250" y="176" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">root</text>' +
  '<line x1="337" y1="114" x2="499" y2="114" fill="none" stroke="#33d17a" stroke-width="3" stroke-linecap="round"/>' +
  '<text x="418" y="136" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#33d17a" text-anchor="middle">GROUP</text>' +
  '<text x="418" y="156" font-family="Share Tech Mono, Consolas, monospace" font-size="15" font-weight="400" fill="#e8e8e8" text-anchor="middle">r-x = 4+0+1 = 5</text>' +
  '<text x="418" y="176" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">engineering</text>' +
  '<line x1="505" y1="114" x2="667" y2="114" fill="none" stroke="#ffc23d" stroke-width="3" stroke-linecap="round"/>' +
  '<text x="586" y="136" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ffc23d" text-anchor="middle">OTHERS</text>' +
  '<text x="586" y="156" font-family="Share Tech Mono, Consolas, monospace" font-size="15" font-weight="400" fill="#e8e8e8" text-anchor="middle">--- = 0</text>' +
  '<text x="586" y="176" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">everyone else</text>' +
  '<text x="400" y="26" font-family="Share Tech Mono, Consolas, monospace" font-size="14" font-weight="400" fill="#a0a0ac" text-anchor="middle">ls -l /srv/cc   -&gt;   drwxr-x---  root engineering  engineering</text>' +
  '<rect x="20" y="210" width="760" height="128" rx="10" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="40" y="236" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">READ IT AS</text>' +
  '<text x="40" y="260" font-family="Inter, Segoe UI, sans-serif" font-size="14.5" font-weight="500" fill="#e8e8e8" text-anchor="start">chmod 750 = owner rwx, group r-x, others nothing.</text>' +
  '<text x="40" y="290" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">COMMON MODES</text>' +
  '<text x="40" y="316" font-family="Share Tech Mono, Consolas, monospace" font-size="18" font-weight="400" fill="#e8e8e8" text-anchor="start">600</text>' +
  '<text x="80" y="316" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">private key</text>' +
  '<text x="162" y="316" font-family="Share Tech Mono, Consolas, monospace" font-size="18" font-weight="400" fill="#e8e8e8" text-anchor="start">640</text>' +
  '<text x="202" y="316" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">payroll file</text>' +
  '<text x="284" y="316" font-family="Share Tech Mono, Consolas, monospace" font-size="18" font-weight="400" fill="#e8e8e8" text-anchor="start">644</text>' +
  '<text x="324" y="316" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">public config</text>' +
  '<text x="406" y="316" font-family="Share Tech Mono, Consolas, monospace" font-size="18" font-weight="400" fill="#e8e8e8" text-anchor="start">750</text>' +
  '<text x="446" y="316" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">team folder</text>' +
  '<text x="528" y="316" font-family="Share Tech Mono, Consolas, monospace" font-size="18" font-weight="400" fill="#e8e8e8" text-anchor="start">770</text>' +
  '<text x="568" y="316" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">team share</text>' +
  '<text x="650" y="316" font-family="Share Tech Mono, Consolas, monospace" font-size="18" font-weight="400" fill="#ee2207" text-anchor="start">777</text>' +
  '<text x="690" y="316" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">never</text>' +
  '</svg>';

COURSE_FIGURES['identity-lifecycle'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 336" role="img" aria-label="Identity lifecycle. Joiner: HR confirms the hire, the account gets role access, and temporary staff get an end date (Cedar Creek: Priya Nair, August 2026). Mover: add the new role and remove the old one; skipping removal causes privilege creep (Dana Reyes kept HR access). Leaver: disable on the last day, remove groups, VPN, and badge, and delete later after review (Brian Kessler is still enabled). A quarterly access review checks all three, with owners confirming each access. Every step should be triggered by HR in writing and confirmed by IT.">' +
  '<rect x="0" y="0" width="800" height="336" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="232" height="166" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="136" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle" letter-spacing="2">JOINER</text>' +
  '<text x="136" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">HR confirms the hire</text>' +
  '<text x="136" y="103" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Account with role access</text>' +
  '<text x="136" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Temp staff get an end date</text>' +
  '<line x1="36" y1="148" x2="236" y2="148" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="136" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#a0a0ac" text-anchor="middle">Priya Nair, Aug 2026</text>' +
  '<line x1="256" y1="103" x2="269" y2="103" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="280.0,103.0 269.0,109.0 269.0,97.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="284" y="20" width="232" height="166" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle" letter-spacing="2">MOVER</text>' +
  '<text x="400" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Add the new role</text>' +
  '<text x="400" y="103" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">REMOVE the old role</text>' +
  '<text x="400" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Skip it = privilege creep</text>' +
  '<line x1="300" y1="148" x2="500" y2="148" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#a0a0ac" text-anchor="middle">Dana Reyes kept HR</text>' +
  '<line x1="520" y1="103" x2="533" y2="103" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="544.0,103.0 533.0,109.0 533.0,97.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="548" y="20" width="232" height="166" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="664" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ee2207" text-anchor="middle" letter-spacing="2">LEAVER</text>' +
  '<text x="664" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Disable on the last day</text>' +
  '<text x="664" y="103" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Remove groups, VPN, badge</text>' +
  '<text x="664" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Delete later, after review</text>' +
  '<line x1="564" y1="148" x2="764" y2="148" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="664" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#a0a0ac" text-anchor="middle">Brian Kessler still on</text>' +
  '<rect x="170" y="222" width="460" height="70" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="400" y="250" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#00f5ff" text-anchor="middle">ACCESS REVIEW (every quarter)</text>' +
  '<text x="400" y="274" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Owners confirm each person still needs each access</text>' +
  '<line x1="260" y1="222" x2="150.7" y2="194.7" fill="none" stroke="#00f5ff" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="5 4"/><polygon points="140.0,192.0 152.1,188.8 149.2,200.5" fill="#00f5ff" fill-opacity="0.6"/>' +
  '<line x1="400" y1="222" x2="400" y2="203" fill="none" stroke="#00f5ff" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="5 4"/><polygon points="400.0,192.0 406.0,203.0 394.0,203.0" fill="#00f5ff" fill-opacity="0.6"/>' +
  '<line x1="540" y1="222" x2="649.3" y2="194.7" fill="none" stroke="#00f5ff" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="5 4"/><polygon points="660.0,192.0 650.8,200.5 647.9,188.8" fill="#00f5ff" fill-opacity="0.6"/>' +
  '<text x="400" y="318" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Trigger every step from HR, in writing, and have IT confirm it was done.</text>' +
  '</svg>';

COURSE_FIGURES['sso-flow'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 372" role="img" aria-label="SAML single sign-on flow. 1: the user opens the application (the service provider, such as the cloud payroll service). 2: the application redirects the browser to the identity provider (the Microsoft 365 sign-in). 3: the user authenticates there with password and MFA. 4: the identity provider sends a signed assertion back through the browser to the application, which trusts it because the two were set up in advance with the identity provider\'s certificate. The application never sees the password, so the identity provider and its signing key must be protected above everything else.">' +
  '<rect x="0" y="0" width="800" height="372" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="120" width="180" height="90" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="2"/>' +
  '<text x="110" y="150" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">User</text>' +
  '<text x="110" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Web browser</text>' +
  '<text x="110" y="191" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Carla in Payroll</text>' +
  '<rect x="310" y="20" width="200" height="90" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="410" y="50" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="middle">Service provider</text>' +
  '<text x="410" y="72" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">The application</text>' +
  '<text x="410" y="91" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Cloud payroll service</text>' +
  '<rect x="310" y="230" width="200" height="90" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="410" y="260" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#00f5ff" text-anchor="middle">Identity provider</text>' +
  '<text x="410" y="282" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Authenticates + signs</text>' +
  '<text x="410" y="301" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Microsoft 365 sign-in</text>' +
  '<rect x="610" y="120" width="170" height="90" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="695" y="150" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ffc23d" text-anchor="middle">Trust</text>' +
  '<text x="695" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Set up once</text>' +
  '<text x="695" y="191" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">SP has the IdP\'s cert</text>' +
  '<line x1="200" y1="140" x2="298.4" y2="85.3" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.75"/><polygon points="308.0,80.0 301.3,90.6 295.5,80.1" fill="#e8e8e8" fill-opacity="0.75"/>' +
  '<circle cx="240" cy="103" r="12" fill="#0d0d1f" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="240" y="108" font-family="Rajdhani, Segoe UI, sans-serif" font-size="15" font-weight="700" fill="#e8e8e8" text-anchor="middle">1</text>' +
  '<text x="214" y="84" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">opens the app</text>' +
  '<line x1="330" y1="112" x2="330" y2="217" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.75" stroke-dasharray="5 4"/><polygon points="330.0,228.0 324.0,217.0 336.0,217.0" fill="#e8e8e8" fill-opacity="0.75"/>' +
  '<circle cx="330" cy="170" r="12" fill="#0d0d1f" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="330" y="175" font-family="Rajdhani, Segoe UI, sans-serif" font-size="15" font-weight="700" fill="#e8e8e8" text-anchor="middle">2</text>' +
  '<text x="316" y="158" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="end">redirected</text>' +
  '<text x="316" y="175" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="end">to sign in</text>' +
  '<line x1="308" y1="270" x2="209.2" y2="206" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.75"/><polygon points="200.0,200.0 212.5,200.9 206.0,211.0" fill="#e8e8e8" fill-opacity="0.75"/>' +
  '<circle cx="240" cy="247" r="12" fill="#0d0d1f" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="240" y="252" font-family="Rajdhani, Segoe UI, sans-serif" font-size="15" font-weight="700" fill="#e8e8e8" text-anchor="middle">3</text>' +
  '<text x="150" y="262" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">password + MFA</text>' +
  '<line x1="490" y1="228" x2="490" y2="123" fill="none" stroke="#00f5ff" stroke-width="2" stroke-opacity="0.85"/><polygon points="490.0,112.0 496.0,123.0 484.0,123.0" fill="#00f5ff" fill-opacity="0.85"/>' +
  '<circle cx="490" cy="170" r="12" fill="#0d0d1f" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="490" y="175" font-family="Rajdhani, Segoe UI, sans-serif" font-size="15" font-weight="700" fill="#e8e8e8" text-anchor="middle">4</text>' +
  '<text x="504" y="160" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#00f5ff" text-anchor="start">signed assertion</text>' +
  '<text x="504" y="178" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="start">(via the browser)</text>' +
  '<line x1="608" y1="165" x2="512" y2="70" fill="none" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.7" stroke-dasharray="4 4"/>' +
  '<line x1="608" y1="165" x2="512" y2="270" fill="none" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.7" stroke-dasharray="4 4"/>' +
  '<text x="400" y="352" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">The app never sees the password. Protect the IdP and its signing key above everything else.</text>' +
  '</svg>';

COURSE_FIGURES['data-classes'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 358" role="img" aria-label="Cedar Creek draft data classification levels from most to least sensitive. Restricted: could hand over control of systems, such as passwords, FW-CORE configurations, and admin tools; named admins only, kept in a vault, every use logged. Confidential: would harm the company, customers, or staff, such as drawings, specs, personnel, and payroll; need-to-know groups and encryption to send. Internal: staff only, little harm if leaked, such as the handbook and holiday schedule; do not post outside. Public: approved for anyone, such as brochures and the line card; no special handling.">' +
  '<rect x="0" y="0" width="800" height="358" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="266" width="760" height="72" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<rect x="20" y="266" width="8" height="72" rx="3" fill="#33d17a"/>' +
  '<text x="48" y="296" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#33d17a" text-anchor="start" letter-spacing="1.5">PUBLIC</text>' +
  '<text x="48" y="318" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Approved for anyone</text>' +
  '<text x="380" y="292" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">EXAMPLES</text>' +
  '<text x="380" y="314" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="start">Brochures, line card</text>' +
  '<text x="620" y="292" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">HANDLING</text>' +
  '<text x="620" y="312" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="start">No special handling</text>' +
  '<rect x="20" y="184" width="760" height="72" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<rect x="20" y="184" width="8" height="72" rx="3" fill="#00f5ff"/>' +
  '<text x="48" y="214" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#00f5ff" text-anchor="start" letter-spacing="1.5">INTERNAL</text>' +
  '<text x="48" y="236" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Staff only; little harm if leaked</text>' +
  '<text x="380" y="210" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">EXAMPLES</text>' +
  '<text x="380" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="start">Handbook, holiday schedule</text>' +
  '<text x="620" y="210" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">HANDLING</text>' +
  '<text x="620" y="230" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Do not post outside</text>' +
  '<rect x="20" y="102" width="760" height="72" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<rect x="20" y="102" width="8" height="72" rx="3" fill="#ffc23d"/>' +
  '<text x="48" y="132" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#ffc23d" text-anchor="start" letter-spacing="1.5">CONFIDENTIAL</text>' +
  '<text x="48" y="154" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Would harm the company, customers, or staff</text>' +
  '<text x="380" y="128" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">EXAMPLES</text>' +
  '<text x="380" y="150" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="start">Drawings, specs, personnel, payroll</text>' +
  '<text x="620" y="128" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">HANDLING</text>' +
  '<text x="620" y="148" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Need-to-know groups</text>' +
  '<text x="620" y="165" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="start">encrypt to send</text>' +
  '<rect x="20" y="20" width="760" height="72" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<rect x="20" y="20" width="8" height="72" rx="3" fill="#ee2207"/>' +
  '<text x="48" y="50" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#ee2207" text-anchor="start" letter-spacing="1.5">RESTRICTED</text>' +
  '<text x="48" y="72" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Could hand over control of systems</text>' +
  '<text x="380" y="46" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">EXAMPLES</text>' +
  '<text x="380" y="68" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="start">Passwords, FW-CORE configs</text>' +
  '<text x="620" y="46" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">HANDLING</text>' +
  '<text x="620" y="66" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Named admins only</text>' +
  '<text x="620" y="83" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="start">vault, log every use</text>' +
  '</svg>';

COURSE_FIGURES['data-states'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" role="img" aria-label="Data states using Cedar Creek payroll. At rest (stored): the FS-HR01 payroll share and the backup tapes; protected by permissions and encryption of disks and backups. In transit (moving on a network): the upload to the payroll service and VPN sessions from home; protected by TLS and the encrypted VPN tunnel. In use (being processed): payroll open on screen and in memory; protected by access control, screen lock, and privacy filters. The same data moves through all three states.">' +
  '<rect x="0" y="0" width="800" height="300" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="236" height="232" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="138" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="23" font-weight="700" fill="#00f5ff" text-anchor="middle" letter-spacing="2">AT REST</text>' +
  '<text x="138" y="76" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Stored</text>' +
  '<line x1="36" y1="92" x2="240" y2="92" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="138" y="114" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK PAYROLL</text>' +
  '<text x="138" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">FS-HR01 payroll share</text>' +
  '<text x="138" y="155" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Backup tapes on the shelf</text>' +
  '<line x1="36" y1="174" x2="240" y2="174" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="138" y="196" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">MAIN PROTECTION</text>' +
  '<text x="138" y="218" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Permissions (ACLs)</text>' +
  '<text x="138" y="237" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Encryption: disk, backups</text>' +
  '<line x1="259" y1="136" x2="271" y2="136" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="279.0,136.0 271.0,141.0 271.0,131.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="282" y="20" width="236" height="232" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="23" font-weight="700" fill="#ffc23d" text-anchor="middle" letter-spacing="2">IN TRANSIT</text>' +
  '<text x="400" y="76" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Moving on a network</text>' +
  '<line x1="298" y1="92" x2="502" y2="92" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="114" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK PAYROLL</text>' +
  '<text x="400" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Upload to payroll service</text>' +
  '<text x="400" y="155" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">VPN session from home</text>' +
  '<line x1="298" y1="174" x2="502" y2="174" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="196" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">MAIN PROTECTION</text>' +
  '<text x="400" y="218" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">TLS (HTTPS)</text>' +
  '<text x="400" y="237" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Encrypted VPN tunnel</text>' +
  '<line x1="521" y1="136" x2="533" y2="136" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="541.0,136.0 533.0,141.0 533.0,131.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="544" y="20" width="236" height="232" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="662" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="23" font-weight="700" fill="#33d17a" text-anchor="middle" letter-spacing="2">IN USE</text>' +
  '<text x="662" y="76" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Being processed</text>' +
  '<line x1="560" y1="92" x2="764" y2="92" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="662" y="114" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK PAYROLL</text>' +
  '<text x="662" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Payroll open on Carla\'s</text>' +
  '<text x="662" y="155" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">screen and in memory</text>' +
  '<line x1="560" y1="174" x2="764" y2="174" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="662" y="196" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">MAIN PROTECTION</text>' +
  '<text x="662" y="218" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Access control, screen</text>' +
  '<text x="662" y="237" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">lock, privacy filter</text>' +
  '<text x="400" y="282" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">The same data moves through all three states. Each state needs its own protection.</text>' +
  '</svg>';

COURSE_FIGURES['data-roles'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 340" role="img" aria-label="Data roles around Cedar Creek payroll data (SSNs, pay rates, bank accounts). Owner: Rosa Medina, who decides access, classification, and retention. Custodian: Dee Ortiz, who runs FS-HR01, backups, and permissions. Controller: Cedar Creek Industries, which decides why the data is processed. Processor: the cloud payroll service, which processes it on Cedar Creek\'s instructions. Subject: each employee the data describes.">' +
  '<rect x="0" y="0" width="800" height="340" rx="12" fill="#0d0d1f"/>' +
  '<rect x="290" y="128" width="220" height="84" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="2.5"/>' +
  '<text x="400" y="160" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#e8e8e8" text-anchor="middle" letter-spacing="1.5">PAYROLL DATA</text>' +
  '<text x="400" y="184" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">SSNs, pay rates, bank accounts</text>' +
  '<rect x="20" y="20" width="220" height="92" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="130" y="48" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">OWNER</text>' +
  '<text x="130" y="72" font-family="Inter, Segoe UI, sans-serif" font-size="14.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Rosa Medina</text>' +
  '<text x="130" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Decides access, class, retention</text>' +
  '<line x1="240" y1="66" x2="290" y2="150" fill="none" stroke="#ffc23d" stroke-width="1.8" stroke-opacity="0.75"/>' +
  '<rect x="560" y="20" width="220" height="92" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="670" y="48" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">CUSTODIAN</text>' +
  '<text x="670" y="72" font-family="Inter, Segoe UI, sans-serif" font-size="14.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Dee Ortiz</text>' +
  '<text x="670" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Runs FS-HR01, backups, ACLs</text>' +
  '<line x1="560" y1="66" x2="510" y2="150" fill="none" stroke="#00f5ff" stroke-width="1.8" stroke-opacity="0.75"/>' +
  '<rect x="20" y="228" width="220" height="92" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="130" y="256" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">CONTROLLER</text>' +
  '<text x="130" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Cedar Creek Industries</text>' +
  '<text x="130" y="302" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Decides why data is processed</text>' +
  '<line x1="240" y1="274" x2="290" y2="190" fill="none" stroke="#33d17a" stroke-width="1.8" stroke-opacity="0.75"/>' +
  '<rect x="560" y="228" width="220" height="92" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="670" y="256" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#b794ff" text-anchor="middle" letter-spacing="1.5">PROCESSOR</text>' +
  '<text x="670" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Cloud payroll service</text>' +
  '<text x="670" y="302" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Processes on Cedar Creek\'s orders</text>' +
  '<line x1="560" y1="274" x2="510" y2="190" fill="none" stroke="#b794ff" stroke-width="1.8" stroke-opacity="0.75"/>' +
  '<rect x="290" y="252" width="220" height="46" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="400" y="274" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="700" fill="#ff7aa2" text-anchor="middle">SUBJECT: each employee</text>' +
  '<text x="400" y="291" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="middle">the person the data describes</text>' +
  '<line x1="400" y1="212" x2="400" y2="252" fill="none" stroke="#ff7aa2" stroke-width="1.8" stroke-opacity="0.75"/>' +
  '</svg>';

COURSE_FIGURES['data-lifecycle'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 270" role="img" aria-label="Data lifecycle in six steps: create or collect, store (classify and protect), use (need-to-know), share (approved ways only), archive (per retention), and destroy (sanitize and certify). Retention, set by the data owner with HR and legal advice, decides how long data stays; keeping it longer adds risk and cost. A legal hold pauses destruction for records tied to a lawsuit or investigation. Destruction methods: overwrite, cryptographic erase, degauss, or shred, then keep the certificate of destruction.">' +
  '<rect x="0" y="0" width="800" height="270" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="30" width="112" height="92" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="76" y="54" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">01</text>' +
  '<text x="76" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Create</text>' +
  '<text x="76" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">or collect</text>' +
  '<line x1="134" y1="76" x2="140" y2="76" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="148.0,76.0 140.0,81.0 140.0,71.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="150" y="30" width="112" height="92" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="206" y="54" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">02</text>' +
  '<text x="206" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Store</text>' +
  '<text x="206" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">classify, protect</text>' +
  '<line x1="264" y1="76" x2="270" y2="76" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="278.0,76.0 270.0,81.0 270.0,71.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="280" y="30" width="112" height="92" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="336" y="54" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">03</text>' +
  '<text x="336" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Use</text>' +
  '<text x="336" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">need-to-know</text>' +
  '<line x1="394" y1="76" x2="400" y2="76" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="408.0,76.0 400.0,81.0 400.0,71.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="410" y="30" width="112" height="92" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="466" y="54" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="1.5">04</text>' +
  '<text x="466" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Share</text>' +
  '<text x="466" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">approved ways</text>' +
  '<line x1="524" y1="76" x2="530" y2="76" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="538.0,76.0 530.0,81.0 530.0,71.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="540" y="30" width="112" height="92" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="596" y="54" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ff8a4c" text-anchor="middle" letter-spacing="1.5">05</text>' +
  '<text x="596" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Archive</text>' +
  '<text x="596" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">per retention</text>' +
  '<line x1="654" y1="76" x2="660" y2="76" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="668.0,76.0 660.0,81.0 660.0,71.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="670" y="30" width="112" height="92" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="726" y="54" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ee2207" text-anchor="middle" letter-spacing="1.5">06</text>' +
  '<text x="726" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Destroy</text>' +
  '<text x="726" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">sanitize, certify</text>' +
  '<rect x="20" y="150" width="760" height="102" rx="10" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="40" y="176" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">RETENTION DECIDES HOW LONG STEPS 2-5 LAST</text>' +
  '<text x="40" y="202" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Set by the data owner with HR and legal advice. Keeping data longer than needed adds risk and cost.</text>' +
  '<text x="40" y="226" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">A legal hold pauses step 6 for records tied to a lawsuit or investigation.</text>' +
  '<text x="40" y="244" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Destroy: overwrite, cryptographic erase, degauss, or shred, then keep the certificate of destruction.</text>' +
  '</svg>';
