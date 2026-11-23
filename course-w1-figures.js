// Week 1 lesson diagrams (inline SVG strings). Used by Lesson.html via section.figure = { id, caption }.
window.COURSE_FIGURES = window.COURSE_FIGURES || {};

COURSE_FIGURES['cia-triad'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" role="img" aria-label="CIA triad diagram. A triangle with Confidentiality at the top (only the right people can read it; Cedar Creek example: engineering drawings leaked), Integrity at the lower left (accurate and unchanged; example: a payroll bank account altered), and Availability at the lower right (there when needed; example: the Line 2 HMI, PLANT-PC-07, down).">' +
  '<rect x="0" y="0" width="800" height="480" rx="12" fill="#0d0d1f"/>' +
  '<polygon points="400,82 170,398 630,398" fill="#131329" fill-opacity="0.55" stroke="#e8e8e8" stroke-opacity="0.22" stroke-width="2"/>' +
  '<text x="400" y="284" font-family="Rajdhani, Segoe UI, sans-serif" font-size="26" font-weight="700" fill="#e8e8e8" text-anchor="middle" letter-spacing="2">CIA TRIAD</text>' +
  '<text x="400" y="308" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Weigh all three</text>' +
  '<text x="400" y="326" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">for every system</text>' +
  '<rect x="250" y="20" width="300" height="124" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="400" y="50" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#00f5ff" text-anchor="middle">Confidentiality</text>' +
  '<text x="400" y="73" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Can only the right people read it?</text>' +
  '<line x1="270" y1="86" x2="530" y2="86" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="107" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="400" y="129" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Engineering drawings leaked</text>' +
  '<rect x="20" y="336" width="300" height="124" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="170" y="366" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle">Integrity</text>' +
  '<text x="170" y="389" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Is it accurate and unchanged?</text>' +
  '<line x1="40" y1="402" x2="300" y2="402" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="170" y="423" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="170" y="445" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Payroll bank account altered</text>' +
  '<rect x="480" y="336" width="300" height="124" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="630" y="366" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle">Availability</text>' +
  '<text x="630" y="389" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Is it there when it is needed?</text>' +
  '<line x1="500" y1="402" x2="760" y2="402" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="630" y="423" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="630" y="445" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Line 2 HMI (PLANT-PC-07) down</text>' +
  '</svg>';

COURSE_FIGURES['aaa-flow'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 256" role="img" aria-label="AAA flow diagram. Authentication (who are you? Cedar Creek: badge plus PIN at the server room door) leads to Authorization (what may you do? the server room access list decides who may enter) which leads to Accounting (what did you do? BADGE-CTRL logs every swipe with a timestamp).">' +
  '<rect x="0" y="0" width="800" height="256" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="228" height="156" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="134" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#00f5ff" text-anchor="middle">Authentication</text>' +
  '<text x="134" y="79" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Who are you?</text>' +
  '<line x1="38" y1="94" x2="230" y2="94" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="134" y="116" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="134" y="138" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Badge (have) + PIN (know)</text>' +
  '<text x="134" y="157" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">at the server room door</text>' +
  '<line x1="252" y1="98" x2="271" y2="98" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="282.0,98.0 271.0,104.0 271.0,92.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="286" y="20" width="228" height="156" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle">Authorization</text>' +
  '<text x="400" y="79" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">What may you do?</text>' +
  '<line x1="304" y1="94" x2="496" y2="94" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="116" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="400" y="138" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Server room access list</text>' +
  '<text x="400" y="157" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">decides who may enter</text>' +
  '<line x1="518" y1="98" x2="537" y2="98" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="548.0,98.0 537.0,104.0 537.0,92.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="552" y="20" width="228" height="156" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="666" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle">Accounting</text>' +
  '<text x="666" y="79" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">What did you do?</text>' +
  '<line x1="570" y1="94" x2="762" y2="94" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="666" y="116" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="666" y="138" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">BADGE-CTRL logs every</text>' +
  '<text x="666" y="157" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">swipe with a timestamp</text>' +
  '<text x="400" y="212" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Always in this order: prove identity, then check permissions, then record the action.</text>' +
  '<text x="400" y="234" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Shared logins such as ccadmin break accounting: the log shows the account, not the person.</text>' +
  '</svg>';

COURSE_FIGURES['nist-csf'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" role="img" aria-label="NIST Cybersecurity Framework 2.0 wheel. Govern (strategy, policy, and oversight) sits in the center. Around it are Identify (know your assets), Protect (add safeguards), Detect (spot problems fast), Respond (act on incidents), and Recover (restore service).">' +
  '<rect x="0" y="0" width="800" height="480" rx="12" fill="#0d0d1f"/>' +
  '<path d="M279.8 61.8 A215 215 0 0 1 520.2 61.8 L451.4 163.7 A92 92 0 0 0 348.6 163.7 Z" fill="#00f5ff" fill-opacity="0.13" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="400.0" y="78.0" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#00f5ff" text-anchor="middle">Identify</text>' +
  '<text x="400.0" y="99.0" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Know your assets</text>' +
  '<path d="M532.4 70.6 A215 215 0 0 1 606.7 299.3 L488.4 265.4 A92 92 0 0 0 456.6 167.5 Z" fill="#33d17a" fill-opacity="0.13" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="552.2" y="188.6" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle">Protect</text>' +
  '<text x="552.2" y="209.6" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Add safeguards</text>' +
  '<path d="M602.0 313.5 A215 215 0 0 1 407.5 454.9 L403.2 331.9 A92 92 0 0 0 486.5 271.5 Z" fill="#ffc23d" fill-opacity="0.13" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="494.0" y="367.4" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle">Detect</text>' +
  '<text x="494.0" y="388.4" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Spot problems fast</text>' +
  '<path d="M392.5 454.9 A215 215 0 0 1 198.0 313.5 L313.5 271.5 A92 92 0 0 0 396.8 331.9 Z" fill="#ff8a4c" fill-opacity="0.13" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="306.0" y="367.4" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ff8a4c" text-anchor="middle">Respond</text>' +
  '<text x="306.0" y="388.4" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Act on incidents</text>' +
  '<path d="M193.3 299.3 A215 215 0 0 1 267.6 70.6 L343.4 167.5 A92 92 0 0 0 311.6 265.4 Z" fill="#ff7aa2" fill-opacity="0.13" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="247.8" y="188.6" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ff7aa2" text-anchor="middle">Recover</text>' +
  '<text x="247.8" y="209.6" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Restore service</text>' +
  '<circle cx="400" cy="240" r="80" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="400" y="232" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#b794ff" text-anchor="middle">Govern</text>' +
  '<text x="400" y="254" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Strategy, policy,</text>' +
  '<text x="400" y="272" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">and oversight</text>' +
  '</svg>';

COURSE_FIGURES['controls-grid'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 577" role="img" aria-label="Security controls grid. Rows are the four categories (Technical, Managerial, Operational, Physical); columns are the six types (Preventive, Deterrent, Detective, Corrective, Compensating, Directive). Cedar Creek examples: Technical preventive: screen lock and ENG-FS01 share login; technical detective: EDR and temperature and water sensors; technical compensating: isolating ENG-APP02 (recommended). Managerial deterrent: engineer NDA; managerial directive: Acceptable Use Policy and data labels. Operational preventive: help desk callback and awareness training; operational detective: sign-in sheet and phishing reports; operational directive: evacuation plan. Physical preventive: 8-foot fence and badge plus PIN server door; physical deterrent: pole lights and warning signs; physical detective: cameras; physical corrective: FM-200 fire suppression and UPS plus generator; physical directive: Authorized Personnel Only signs.">' +
  '<rect x="0" y="0" width="800" height="577" rx="12" fill="#0d0d1f"/>' +
  '<text x="20" y="38" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="0.5">ROWS: CATEGORY</text>' +
  '<text x="20" y="58" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="0.5">COLUMNS: TYPE</text>' +
  '<rect x="144" y="12" width="104" height="62" rx="10" fill="#131329"/>' +
  '<rect x="144" y="12" width="104" height="4" rx="2" fill="#00f5ff"/>' +
  '<text x="196" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#00f5ff" text-anchor="middle">Preventive</text>' +
  '<text x="196" y="62" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Stops it</text>' +
  '<rect x="252" y="12" width="104" height="62" rx="10" fill="#131329"/>' +
  '<rect x="252" y="12" width="104" height="4" rx="2" fill="#ffc23d"/>' +
  '<text x="304" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ffc23d" text-anchor="middle">Deterrent</text>' +
  '<text x="304" y="62" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Discourages</text>' +
  '<rect x="360" y="12" width="104" height="62" rx="10" fill="#131329"/>' +
  '<rect x="360" y="12" width="104" height="4" rx="2" fill="#33d17a"/>' +
  '<text x="412" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#33d17a" text-anchor="middle">Detective</text>' +
  '<text x="412" y="62" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Finds it</text>' +
  '<rect x="468" y="12" width="104" height="62" rx="10" fill="#131329"/>' +
  '<rect x="468" y="12" width="104" height="4" rx="2" fill="#ff8a4c"/>' +
  '<text x="520" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ff8a4c" text-anchor="middle">Corrective</text>' +
  '<text x="520" y="62" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Restores</text>' +
  '<rect x="576" y="12" width="104" height="62" rx="10" fill="#131329"/>' +
  '<rect x="576" y="12" width="104" height="4" rx="2" fill="#b794ff"/>' +
  '<text x="628" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#b794ff" text-anchor="middle">Compensating</text>' +
  '<text x="628" y="62" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Substitutes</text>' +
  '<rect x="684" y="12" width="104" height="62" rx="10" fill="#131329"/>' +
  '<rect x="684" y="12" width="104" height="4" rx="2" fill="#ff7aa2"/>' +
  '<text x="736" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ff7aa2" text-anchor="middle">Directive</text>' +
  '<text x="736" y="62" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Tells people</text>' +
  '<rect x="12" y="78" width="128" height="111" rx="10" fill="#131329"/>' +
  '<rect x="12" y="78" width="4" height="111" rx="2" fill="#e8e8e8" fill-opacity="0.5"/>' +
  '<text x="30" y="125.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="start">Technical</text>' +
  '<text x="30" y="145.5" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">A system</text>' +
  '<text x="30" y="162.5" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">enforces it</text>' +
  '<rect x="144" y="78" width="104" height="111" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="196" y="105" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Screen lock</text>' +
  '<text x="196" y="124" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">after 15 min</text>' +
  '<text x="196" y="152" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">ENG-FS01</text>' +
  '<text x="196" y="171" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">share login</text>' +
  '<rect x="252" y="78" width="104" height="111" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="360" y="78" width="104" height="111" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="412" y="105" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">EDR on</text>' +
  '<text x="412" y="124" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">office PCs</text>' +
  '<text x="412" y="152" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Temp + water</text>' +
  '<text x="412" y="171" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">sensors</text>' +
  '<rect x="468" y="78" width="104" height="111" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="576" y="78" width="104" height="111" rx="10" fill="#131329" stroke="#b794ff" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="628" y="119" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Isolate</text>' +
  '<text x="628" y="138" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">ENG-APP02</text>' +
  '<text x="628" y="157" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">recommended</text>' +
  '<rect x="684" y="78" width="104" height="111" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="12" y="193" width="128" height="92" rx="10" fill="#131329"/>' +
  '<rect x="12" y="193" width="4" height="92" rx="2" fill="#e8e8e8" fill-opacity="0.5"/>' +
  '<text x="30" y="231" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="start">Managerial</text>' +
  '<text x="30" y="251" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">A written</text>' +
  '<text x="30" y="268" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">decision</text>' +
  '<rect x="144" y="193" width="104" height="92" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="252" y="193" width="104" height="92" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="304" y="234" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Engineer</text>' +
  '<text x="304" y="253" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">NDA</text>' +
  '<rect x="360" y="193" width="104" height="92" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="468" y="193" width="104" height="92" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="576" y="193" width="104" height="92" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="684" y="193" width="104" height="92" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="736" y="220" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Acceptable</text>' +
  '<text x="736" y="239" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Use Policy</text>' +
  '<text x="736" y="267" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Data labels</text>' +
  '<rect x="12" y="289" width="128" height="111" rx="10" fill="#131329"/>' +
  '<rect x="12" y="289" width="4" height="111" rx="2" fill="#e8e8e8" fill-opacity="0.5"/>' +
  '<text x="30" y="336.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="start">Operational</text>' +
  '<text x="30" y="356.5" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">People follow</text>' +
  '<text x="30" y="373.5" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">a process</text>' +
  '<rect x="144" y="289" width="104" height="111" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="196" y="316" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Help desk</text>' +
  '<text x="196" y="335" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">callback</text>' +
  '<text x="196" y="363" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Awareness</text>' +
  '<text x="196" y="382" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">training</text>' +
  '<rect x="252" y="289" width="104" height="111" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="360" y="289" width="104" height="111" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="412" y="316" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Sign-in</text>' +
  '<text x="412" y="335" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">sheet</text>' +
  '<text x="412" y="363" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Phishing</text>' +
  '<text x="412" y="382" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">reports</text>' +
  '<rect x="468" y="289" width="104" height="111" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="576" y="289" width="104" height="111" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="684" y="289" width="104" height="111" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="736" y="339.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Evacuation</text>' +
  '<text x="736" y="358.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">plan</text>' +
  '<rect x="12" y="404" width="128" height="111" rx="10" fill="#131329"/>' +
  '<rect x="12" y="404" width="4" height="111" rx="2" fill="#e8e8e8" fill-opacity="0.5"/>' +
  '<text x="30" y="451.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="start">Physical</text>' +
  '<text x="30" y="471.5" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">You can</text>' +
  '<text x="30" y="488.5" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">touch it</text>' +
  '<rect x="144" y="404" width="104" height="111" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="196" y="440.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">8-ft fence</text>' +
  '<text x="196" y="468.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Badge + PIN</text>' +
  '<text x="196" y="487.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">server door</text>' +
  '<rect x="252" y="404" width="104" height="111" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="304" y="440.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Pole lights</text>' +
  '<text x="304" y="468.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Warning</text>' +
  '<text x="304" y="487.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">signs</text>' +
  '<rect x="360" y="404" width="104" height="111" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="412" y="454.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Hallway and</text>' +
  '<text x="412" y="473.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">dock cameras</text>' +
  '<rect x="468" y="404" width="104" height="111" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="520" y="431" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">FM-200 fire</text>' +
  '<text x="520" y="450" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">suppression</text>' +
  '<text x="520" y="478" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">UPS +</text>' +
  '<text x="520" y="497" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">generator</text>' +
  '<rect x="576" y="404" width="104" height="111" rx="10" fill="#0a0a18" stroke="#ffffff" stroke-width="1" stroke-opacity="0.06"/>' +
  '<rect x="684" y="404" width="104" height="111" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="1.5" stroke-opacity="0.55"/>' +
  '<text x="736" y="445" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Authorized</text>' +
  '<text x="736" y="464" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Personnel</text>' +
  '<text x="736" y="483" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="600" fill="#e8e8e8" text-anchor="middle">Only signs</text>' +
  '<text x="400" y="541" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Filled cells: Cedar Creek controls from the walk-through. Blank cells: no example there.</text>' +
  '<text x="400" y="561" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Some controls earn a second type: cameras also deter, and the NDA is also directive.</text>' +
  '</svg>';

COURSE_FIGURES['threat-actors'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 546" role="img" aria-label="Threat actor chart. The horizontal axis runs from internal (already has access) to external (must find a way in); the vertical axis runs from low to high resources and sophistication. Nation-state is external and highest. Organized crime is external and high. Hacktivist is external and moderate. Unskilled attacker is external and low. Insider threat is internal with varying skill. Shadow IT is internal and low. Organized crime and insider threat are marked as top concerns for Cedar Creek; nation-state espionage against the drawings is marked as possible.">' +
  '<rect x="0" y="0" width="800" height="546" rx="12" fill="#0d0d1f"/>' +
  '<rect x="120" y="24" width="330" height="406" rx="0" fill="#33d17a" fill-opacity="0.04"/>' +
  '<rect x="450" y="24" width="330" height="406" rx="0" fill="#00f5ff" fill-opacity="0.04"/>' +
  '<line x1="450" y1="24" x2="450" y2="430" fill="none" stroke="#e8e8e8" stroke-width="1.5" stroke-opacity="0.18" stroke-dasharray="6 6"/>' +
  '<line x1="120" y1="430" x2="120" y2="31" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="120.0,20.0 126.0,31.0 114.0,31.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<line x1="120" y1="430" x2="775" y2="430" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="786.0,430.0 775.0,436.0 775.0,424.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<text x="110" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#a0a0ac" text-anchor="end">High</text>' +
  '<text x="110" y="426" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#a0a0ac" text-anchor="end">Low</text>' +
  '<text x="60" y="227" font-family="Share Tech Mono, Consolas, monospace" font-size="14" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5" transform="rotate(-90 60 227)">RESOURCES AND SOPHISTICATION</text>' +
  '<text x="126" y="456" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#33d17a" text-anchor="start">INTERNAL</text>' +
  '<text x="126" y="475" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Already has some access</text>' +
  '<text x="780" y="456" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#00f5ff" text-anchor="end">EXTERNAL</text>' +
  '<text x="780" y="475" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="end">Must find a way in</text>' +
  '<circle cx="690" cy="70" r="17" fill="none" stroke="#ffc23d" stroke-width="2.5" stroke-dasharray="5 4"/>' +
  '<circle cx="690" cy="70" r="8" fill="#e8e8e8"/>' +
  '<text x="664" y="67" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="end">Nation-state</text>' +
  '<text x="664" y="86" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="end">Espionage, war (APTs)</text>' +
  '<circle cx="610" cy="160" r="17" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<circle cx="610" cy="160" r="8" fill="#e8e8e8"/>' +
  '<text x="636" y="157" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Organized crime</text>' +
  '<text x="636" y="176" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Ransomware, BEC</text>' +
  '<circle cx="570" cy="290" r="8" fill="#e8e8e8"/>' +
  '<text x="596" y="287" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Hacktivist</text>' +
  '<text x="596" y="306" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">A political cause</text>' +
  '<circle cx="680" cy="388" r="8" fill="#e8e8e8"/>' +
  '<text x="654" y="385" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="end">Unskilled attacker</text>' +
  '<text x="654" y="404" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="end">Runs ready-made tools</text>' +
  '<circle cx="220" cy="230" r="17" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<circle cx="220" cy="230" r="8" fill="#e8e8e8"/>' +
  '<text x="246" y="227" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Insider threat</text>' +
  '<text x="246" y="246" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Has access; skill varies</text>' +
  '<circle cx="220" cy="385" r="8" fill="#e8e8e8"/>' +
  '<text x="246" y="382" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Shadow IT</text>' +
  '<text x="246" y="401" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Unapproved tools, no intent</text>' +
  '<circle cx="186" cy="497" r="10" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<text x="204" y="502" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Top concern at Cedar Creek (ransomware, BEC, ex-employee access)</text>' +
  '<circle cx="186" cy="523" r="10" fill="none" stroke="#ffc23d" stroke-width="2.5" stroke-dasharray="5 4"/>' +
  '<text x="204" y="528" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Possible: espionage against the engineering drawings</text>' +
  '</svg>';

COURSE_FIGURES['attack-surface'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="Cedar Creek attack surface map. Cedar Creek (drawings and specs, payroll data, Line 2 uptime) sits in the center with eight threat vectors pointing at it: business email compromise from cedarcreek-lnd.com; personal USB drives in Engineering; ENG-APP02 on unsupported Windows Server 2012 R2; shared ccadmin and operator logins; vendors and cloud services such as Microsoft 365 and the payroll provider; the CC-PLANT Wi-Fi password posted on the break room wall; a flat network where plant and office reach each other; and remote access, with a VPN password on a sticky note and FW-CORE open ports.">' +
  '<rect x="0" y="0" width="800" height="600" rx="12" fill="#0d0d1f"/>' +
  '<line x1="134" y1="116" x2="319.9" y2="195.7" fill="none" stroke="#00f5ff" stroke-width="2" stroke-opacity="0.75"/><polygon points="330.0,200.0 317.5,201.2 322.3,190.2" fill="#00f5ff" fill-opacity="0.75"/>' +
  '<line x1="400" y1="116" x2="400" y2="189" fill="none" stroke="#ffc23d" stroke-width="2" stroke-opacity="0.75"/><polygon points="400.0,200.0 394.0,189.0 406.0,189.0" fill="#ffc23d" fill-opacity="0.75"/>' +
  '<line x1="666" y1="116" x2="480.1" y2="195.7" fill="none" stroke="#ffc23d" stroke-width="2" stroke-opacity="0.75"/><polygon points="470.0,200.0 477.7,190.2 482.5,201.2" fill="#ffc23d" fill-opacity="0.75"/>' +
  '<line x1="252" y1="280" x2="281" y2="280" fill="none" stroke="#ffc23d" stroke-width="2" stroke-opacity="0.75"/><polygon points="292.0,280.0 281.0,286.0 281.0,274.0" fill="#ffc23d" fill-opacity="0.75"/>' +
  '<line x1="548" y1="280" x2="519" y2="280" fill="none" stroke="#33d17a" stroke-width="2" stroke-opacity="0.75"/><polygon points="508.0,280.0 519.0,274.0 519.0,286.0" fill="#33d17a" fill-opacity="0.75"/>' +
  '<line x1="134" y1="444" x2="319.9" y2="364.3" fill="none" stroke="#b794ff" stroke-width="2" stroke-opacity="0.75"/><polygon points="330.0,360.0 322.3,369.8 317.5,358.8" fill="#b794ff" fill-opacity="0.75"/>' +
  '<line x1="400" y1="444" x2="400" y2="371" fill="none" stroke="#b794ff" stroke-width="2" stroke-opacity="0.75"/><polygon points="400.0,360.0 406.0,371.0 394.0,371.0" fill="#b794ff" fill-opacity="0.75"/>' +
  '<line x1="666" y1="444" x2="480.1" y2="364.3" fill="none" stroke="#b794ff" stroke-width="2" stroke-opacity="0.75"/><polygon points="470.0,360.0 482.5,358.8 477.7,369.8" fill="#b794ff" fill-opacity="0.75"/>' +
  '<rect x="16" y="16" width="236" height="100" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="134" y="38" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1">MESSAGE: EMAIL (BEC)</text>' +
  '<text x="134" y="62" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Lookalike CFO email</text>' +
  '<text x="134" y="84" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Fake $48,750 wire request</text>' +
  '<text x="134" y="103" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">from cedarcreek-lnd.com</text>' +
  '<rect x="282" y="16" width="236" height="100" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="38" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1">REMOVABLE DEVICE</text>' +
  '<text x="400" y="62" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Personal USB drives</text>' +
  '<text x="400" y="84" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Engineers carry drawings</text>' +
  '<text x="400" y="103" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">to the shop floor</text>' +
  '<rect x="548" y="16" width="236" height="100" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="666" y="38" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1">UNSUPPORTED SYSTEM</text>' +
  '<text x="666" y="62" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">ENG-APP02</text>' +
  '<text x="666" y="84" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Windows Server 2012 R2,</text>' +
  '<text x="666" y="103" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">no updates since Oct 2023</text>' +
  '<rect x="16" y="230" width="236" height="100" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="134" y="252" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1">DEFAULT / SHARED LOGINS</text>' +
  '<text x="134" y="276" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">ccadmin and operator</text>' +
  '<text x="134" y="298" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">ccadmin in a notebook,</text>' +
  '<text x="134" y="317" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">operator login on a label</text>' +
  '<rect x="548" y="230" width="236" height="100" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="666" y="252" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1">SUPPLY CHAIN</text>' +
  '<text x="666" y="276" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Vendors and cloud</text>' +
  '<text x="666" y="298" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Microsoft 365, payroll SaaS,</text>' +
  '<text x="666" y="317" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">unlogged server room visits</text>' +
  '<rect x="16" y="444" width="236" height="100" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="134" y="466" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="1">UNSECURE WIRELESS</text>' +
  '<text x="134" y="490" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">CC-PLANT Wi-Fi</text>' +
  '<text x="134" y="512" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Password on the break room</text>' +
  '<text x="134" y="531" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">wall, unchanged since 2019</text>' +
  '<rect x="282" y="444" width="236" height="100" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="400" y="466" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="1">UNSECURE WIRED</text>' +
  '<text x="400" y="490" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Flat internal network</text>' +
  '<text x="400" y="512" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Plant and office networks</text>' +
  '<text x="400" y="531" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">reach each other freely</text>' +
  '<rect x="548" y="444" width="236" height="100" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="666" y="466" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="1">REMOTE ACCESS / PORTS</text>' +
  '<text x="666" y="490" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">VPN and open ports</text>' +
  '<text x="666" y="512" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">VPN password on a sticky</text>' +
  '<text x="666" y="531" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">note; FW-CORE open ports</text>' +
  '<rect x="292" y="200" width="216" height="160" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2.5"/>' +
  '<text x="400" y="238" font-family="Rajdhani, Segoe UI, sans-serif" font-size="26" font-weight="700" fill="#e8e8e8" text-anchor="middle" letter-spacing="1.5">CEDAR CREEK</text>' +
  '<text x="400" y="258" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">WHAT ATTACKERS WANT</text>' +
  '<line x1="316" y1="272" x2="484" y2="272" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="296" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Drawings and specs</text>' +
  '<text x="400" y="316" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Payroll data</text>' +
  '<text x="400" y="336" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Line 2 uptime</text>' +
  '<rect x="110" y="568" width="14" height="14" rx="3" fill="#00f5ff"/>' +
  '<text x="132" y="580" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Message-based</text>' +
  '<rect x="262" y="568" width="14" height="14" rx="3" fill="#ffc23d"/>' +
  '<text x="284" y="580" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Device, software, system</text>' +
  '<rect x="470" y="568" width="14" height="14" rx="3" fill="#b794ff"/>' +
  '<text x="492" y="580" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Network</text>' +
  '<rect x="592" y="568" width="14" height="14" rx="3" fill="#33d17a"/>' +
  '<text x="614" y="580" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Supply chain</text>' +
  '</svg>';

COURSE_FIGURES['physical-layers'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="Physical security layers at Cedar Creek. Nested layers from outside in: the perimeter (fence, pole lights, badge gate, cameras, signs), the building (badge doors, reception desk, visitor sign-in), the server room (badge plus PIN, hallway camera, sensors), and the assets (DC01, FS-HR01, ENG-FS01, ENG-APP02, backup tapes). Three gaps from the walk-through are marked: the server room door wedged open, tailgating at the dock door (fix with an access control vestibule or a challenge culture), and the dock side gate propped open with a brick.">' +
  '<rect x="0" y="0" width="800" height="500" rx="12" fill="#0d0d1f"/>' +
  '<rect x="16" y="16" width="500" height="468" rx="18" fill="#33d17a" fill-opacity="0.05" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="36" y="46" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="start" letter-spacing="1">PERIMETER</text>' +
  '<text x="36" y="70" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Fence, pole lights, badge gate, cameras, signs</text>' +
  '<rect x="56" y="96" width="420" height="348" rx="15" fill="#00f5ff" fill-opacity="0.05" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="76" y="126" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#00f5ff" text-anchor="start" letter-spacing="1">BUILDING</text>' +
  '<text x="76" y="150" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Badge doors, reception desk, visitor sign-in</text>' +
  '<rect x="96" y="176" width="340" height="228" rx="12" fill="#ffc23d" fill-opacity="0.05" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="116" y="206" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ffc23d" text-anchor="start" letter-spacing="1">SERVER ROOM</text>' +
  '<text x="116" y="230" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Badge + PIN, hallway camera, sensors</text>' +
  '<rect x="146" y="256" width="240" height="108" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="266" y="288" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#b794ff" text-anchor="middle" letter-spacing="1">THE ASSETS</text>' +
  '<text x="266" y="312" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">DC01, FS-HR01, ENG-FS01,</text>' +
  '<text x="266" y="332" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">ENG-APP02, backup tapes</text>' +
  '<text x="540" y="156" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">GAPS FROM THE WALK</text>' +
  '<line x1="436" y1="213" x2="540" y2="213" fill="none" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8" stroke-dasharray="4 3"/>' +
  '<line x1="436" y1="200" x2="436" y2="226" fill="none" stroke="#ee2207" stroke-width="6" stroke-linecap="round"/>' +
  '<rect x="540" y="170" width="244" height="86" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="556" y="197" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ee2207" text-anchor="start">Door wedged open</text>' +
  '<text x="556" y="220" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Server room door, because</text>' +
  '<text x="556" y="239" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">the AC cannot keep up</text>' +
  '<line x1="476" y1="326" x2="540" y2="326" fill="none" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8" stroke-dasharray="4 3"/>' +
  '<line x1="476" y1="313" x2="476" y2="339" fill="none" stroke="#ee2207" stroke-width="6" stroke-linecap="round"/>' +
  '<rect x="540" y="266" width="244" height="120" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="556" y="293" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ee2207" text-anchor="start">Tailgating at the dock</text>' +
  '<text x="556" y="316" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">A driver follows an employee</text>' +
  '<text x="556" y="335" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">in: one badge, two people.</text>' +
  '<text x="556" y="354" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Fix: access control vestibule</text>' +
  '<text x="556" y="373" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">or a challenge culture</text>' +
  '<line x1="516" y1="439" x2="540" y2="439" fill="none" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8" stroke-dasharray="4 3"/>' +
  '<line x1="516" y1="426" x2="516" y2="452" fill="none" stroke="#ee2207" stroke-width="6" stroke-linecap="round"/>' +
  '<rect x="540" y="396" width="244" height="86" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="556" y="423" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ee2207" text-anchor="start">Gate propped open</text>' +
  '<text x="556" y="446" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Side gate by the dock, held</text>' +
  '<text x="556" y="465" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">open with a brick</text>' +
  '</svg>';

COURSE_FIGURES['asset-lifecycle'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 270" role="img" aria-label="Asset lifecycle in five steps: Acquire (vet the vendor and confirm security updates; ENG-APP02 is stuck on 2012 R2), Assign owner (Tom Becker owns ENG-FS01), Classify (FS-HR01 is Confidential), Track (keep an inventory and scan for unknown devices), and Dispose (sanitize or destroy, then certify; shred drives and keep the certificate).">' +
  '<rect x="0" y="0" width="800" height="270" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="88" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">01</text>' +
  '<text x="88" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Acquire</text>' +
  '<text x="88" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Vet the vendor;</text>' +
  '<text x="88" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">confirm it gets</text>' +
  '<text x="88" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">security updates</text>' +
  '<line x1="158" y1="86" x2="166" y2="86" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="174.0,86.0 166.0,91.0 166.0,81.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="20" y="190" width="136" height="62" rx="10" fill="#0d0d1f" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="5 4"/>' +
  '<text x="88" y="216" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">ENG-APP02 is</text>' +
  '<text x="88" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">stuck on 2012 R2</text>' +
  '<rect x="176" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="244" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">02</text>' +
  '<text x="244" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Assign owner</text>' +
  '<text x="244" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">One person is</text>' +
  '<text x="244" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">accountable and</text>' +
  '<text x="244" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">decides access</text>' +
  '<line x1="314" y1="86" x2="322" y2="86" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="330.0,86.0 322.0,91.0 322.0,81.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="176" y="190" width="136" height="62" rx="10" fill="#0d0d1f" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="5 4"/>' +
  '<text x="244" y="216" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Tom Becker owns</text>' +
  '<text x="244" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">ENG-FS01</text>' +
  '<rect x="332" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">03</text>' +
  '<text x="400" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Classify</text>' +
  '<text x="400" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Public, Internal,</text>' +
  '<text x="400" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Confidential,</text>' +
  '<text x="400" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">or Restricted</text>' +
  '<line x1="470" y1="86" x2="478" y2="86" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="486.0,86.0 478.0,91.0 478.0,81.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="332" y="190" width="136" height="62" rx="10" fill="#0d0d1f" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="5 4"/>' +
  '<text x="400" y="216" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">FS-HR01 is</text>' +
  '<text x="400" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Confidential</text>' +
  '<rect x="488" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="556" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="1.5">04</text>' +
  '<text x="556" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Track</text>' +
  '<text x="556" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Keep an inventory;</text>' +
  '<text x="556" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">scan to find</text>' +
  '<text x="556" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">unknown devices</text>' +
  '<line x1="626" y1="86" x2="634" y2="86" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="642.0,86.0 634.0,91.0 634.0,81.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="488" y="190" width="136" height="62" rx="10" fill="#0d0d1f" stroke="#b794ff" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="5 4"/>' +
  '<text x="556" y="216" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">You build the</text>' +
  '<text x="556" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">first inventory</text>' +
  '<rect x="644" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="712" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ff8a4c" text-anchor="middle" letter-spacing="1.5">05</text>' +
  '<text x="712" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Dispose</text>' +
  '<text x="712" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Sanitize or</text>' +
  '<text x="712" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">destroy, then</text>' +
  '<text x="712" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">certify it</text>' +
  '<rect x="644" y="190" width="136" height="62" rx="10" fill="#0d0d1f" stroke="#ff8a4c" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="5 4"/>' +
  '<text x="712" y="216" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Shred drives,</text>' +
  '<text x="712" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">keep certificate</text>' +
  '<text x="20" y="178" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">AT CEDAR CREEK</text>' +
  '</svg>';
