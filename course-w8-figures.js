// Week 8 lesson diagrams (inline SVG strings). Built by docs/tools/make_week8_figures.js. Used by Lesson.html via section.figure = { id, caption }.
window.COURSE_FIGURES = window.COURSE_FIGURES || {};

COURSE_FIGURES['ir-lifecycle'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 510" role="img" aria-label="Incident response lifecycle. Six steps in a loop: 1 Preparation (plan, team, tools, training, playbooks), 2 Detection and analysis (is it real, how big, how bad), 3 Containment (stop the spread and keep the evidence), 4 Eradication (remove the cause: malware, accounts, flaw), 5 Recovery (restore clean systems and watch closely), 6 Lessons learned (what worked, what failed, what changes), which feeds back into Preparation. A dashed arrow from recovery back to detection shows that new findings send you back. Below, the same work is grouped three ways: this course uses six steps; Security+ uses seven by splitting detection and analysis; NIST SP 800-61 Revision 2 uses four phases, combining containment, eradication, and recovery into one phase and calling the last one post-incident activity.">' +
  '<rect x="0" y="0" width="800" height="510" rx="12" fill="#0d0d1f"/>' +
  '<rect x="30" y="30" width="220" height="116" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="140" y="54" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">STEP 1</text>' +
  '<text x="140" y="80" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="middle">Preparation</text>' +
  '<text x="140" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Plan, team, tools,</text>' +
  '<text x="140" y="123" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">training, playbooks</text>' +
  '<rect x="290" y="30" width="220" height="116" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="54" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">STEP 2</text>' +
  '<text x="400" y="80" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="middle">Detect + analyze</text>' +
  '<text x="400" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Is it real? How big?</text>' +
  '<text x="400" y="123" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">How bad? What now?</text>' +
  '<rect x="550" y="30" width="220" height="116" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="660" y="54" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ee2207" text-anchor="middle" letter-spacing="1.5">STEP 3</text>' +
  '<text x="660" y="80" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="middle">Containment</text>' +
  '<text x="660" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Stop the spread;</text>' +
  '<text x="660" y="123" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">keep the evidence</text>' +
  '<rect x="550" y="200" width="220" height="116" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="660" y="224" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="1.5">STEP 4</text>' +
  '<text x="660" y="250" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="middle">Eradication</text>' +
  '<text x="660" y="274" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Remove the cause:</text>' +
  '<text x="660" y="293" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">malware, accounts, flaw</text>' +
  '<rect x="290" y="200" width="220" height="116" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="400" y="224" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">STEP 5</text>' +
  '<text x="400" y="250" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="middle">Recovery</text>' +
  '<text x="400" y="274" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Restore clean systems;</text>' +
  '<text x="400" y="293" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">watch closely</text>' +
  '<rect x="30" y="200" width="220" height="116" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="140" y="224" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ff7aa2" text-anchor="middle" letter-spacing="1.5">STEP 6</text>' +
  '<text x="140" y="250" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="middle">Lessons learned</text>' +
  '<text x="140" y="274" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">What worked, what</text>' +
  '<text x="140" y="293" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">failed, what changes</text>' +
  '<line x1="252" y1="88" x2="277" y2="88" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="288.0,88.0 277.0,94.0 277.0,82.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="512" y1="88" x2="537" y2="88" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="548.0,88.0 537.0,94.0 537.0,82.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="660" y1="148" x2="660" y2="187" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="660.0,198.0 654.0,187.0 666.0,187.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="548" y1="258" x2="523" y2="258" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="512.0,258.0 523.0,252.0 523.0,264.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="288" y1="258" x2="263" y2="258" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="252.0,258.0 263.0,252.0 263.0,264.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="140" y1="198" x2="140" y2="159" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="140.0,148.0 146.0,159.0 134.0,159.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="400" y1="198" x2="400" y2="159" fill="none" stroke="#ffc23d" stroke-width="2" stroke-opacity="0.8" stroke-dasharray="5 4"/><polygon points="400.0,148.0 406.0,159.0 394.0,159.0" fill="#ffc23d" fill-opacity="0.8"/>' +
  '<text x="410" y="178" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#ffc23d" text-anchor="start">new findings send you back</text>' +
  '<text x="30" y="344" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">THE SAME WORK, GROUPED THREE WAYS</text>' +
  '<text x="30" y="385" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="start">This course (6)</text>' +
  '<rect x="192" y="360" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="240" y="383" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Prep</text>' +
  '<rect x="292" y="360" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="340" y="383" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Detect + analyze</text>' +
  '<rect x="392" y="360" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="440" y="383" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Contain</text>' +
  '<rect x="492" y="360" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="540" y="383" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Eradicate</text>' +
  '<rect x="592" y="360" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="640" y="383" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Recover</text>' +
  '<rect x="692" y="360" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="740" y="383" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Lessons</text>' +
  '<text x="30" y="431" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="start">Security+ (7)</text>' +
  '<rect x="192" y="406" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="240" y="429" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Prep</text>' +
  '<rect x="292" y="406" width="46" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="315" y="429" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#e8e8e8" text-anchor="middle">Detect</text>' +
  '<rect x="342" y="406" width="46" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="365" y="429" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#e8e8e8" text-anchor="middle">Analyze</text>' +
  '<rect x="392" y="406" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="440" y="429" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Contain</text>' +
  '<rect x="492" y="406" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="540" y="429" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Eradicate</text>' +
  '<rect x="592" y="406" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="640" y="429" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Recover</text>' +
  '<rect x="692" y="406" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="740" y="429" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Lessons</text>' +
  '<text x="30" y="477" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="start">NIST 800-61r2 (4)</text>' +
  '<rect x="192" y="452" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="240" y="475" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Preparation</text>' +
  '<rect x="292" y="452" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="340" y="467" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#e8e8e8" text-anchor="middle">Detection and</text>' +
  '<text x="340" y="481" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#e8e8e8" text-anchor="middle">analysis</text>' +
  '<rect x="392" y="452" width="296" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="540" y="475" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Containment, eradication, and recovery</text>' +
  '<rect x="692" y="452" width="96" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.25"/>' +
  '<text x="740" y="467" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#e8e8e8" text-anchor="middle">Post-incident</text>' +
  '<text x="740" y="481" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#e8e8e8" text-anchor="middle">activity</text>' +
  '</svg>';

COURSE_FIGURES['ir-team'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460" role="img" aria-label="Incident response team at Cedar Creek. The incident lead, Marcus Reyes, sits in the center: he runs the response, makes the calls, and keeps the log. Around him: Technical (you and Dee Ortiz investigate, contain, and fix), Management (CFO Greg Palmer approves big decisions such as shutdowns and spending), Legal (outside counsel handles notification duties, contracts, and evidence), HR (Rosa Medina handles insider cases and staff communication), Communications (one approved voice to customers, staff, and media), and Outside help (insurer, incident response firm, FBI), called through the plan rather than in a panic.">' +
  '<rect x="0" y="0" width="800" height="460" rx="12" fill="#0d0d1f"/>' +
  '<rect x="290" y="178" width="220" height="104" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2.5"/>' +
  '<text x="400" y="202" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ee2207" text-anchor="middle" letter-spacing="1.5">INCIDENT LEAD</text>' +
  '<text x="400" y="228" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#e8e8e8" text-anchor="middle">Marcus Reyes</text>' +
  '<text x="400" y="250" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Runs the response, makes</text>' +
  '<text x="400" y="268" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">the calls, keeps the log</text>' +
  '<rect x="20" y="20" width="220" height="110" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="130" y="42" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">TECHNICAL</text>' +
  '<text x="130" y="67" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Analyst + sysadmin</text>' +
  '<text x="130" y="90" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">You and Dee Ortiz:</text>' +
  '<text x="130" y="108" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">investigate, contain, fix</text>' +
  '<line x1="130" y1="130" x2="320" y2="178" fill="none" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="4 3"/>' +
  '<rect x="290" y="20" width="220" height="110" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="400" y="42" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="1.5">MANAGEMENT</text>' +
  '<text x="400" y="67" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Greg Palmer (CFO)</text>' +
  '<text x="400" y="90" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Approves big decisions:</text>' +
  '<text x="400" y="108" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">shutdowns, spending</text>' +
  '<line x1="400" y1="130" x2="400" y2="178" fill="none" stroke="#b794ff" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="4 3"/>' +
  '<rect x="560" y="20" width="220" height="110" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="670" y="42" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">LEGAL</text>' +
  '<text x="670" y="67" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Outside counsel</text>' +
  '<text x="670" y="90" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Notification duties,</text>' +
  '<text x="670" y="108" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">contracts, evidence</text>' +
  '<line x1="670" y1="130" x2="480" y2="178" fill="none" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="4 3"/>' +
  '<rect x="20" y="330" width="220" height="110" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="130" y="352" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">HR</text>' +
  '<text x="130" y="377" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Rosa Medina</text>' +
  '<text x="130" y="400" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Insider cases and</text>' +
  '<text x="130" y="418" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">staff communication</text>' +
  '<line x1="130" y1="330" x2="320" y2="282" fill="none" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="4 3"/>' +
  '<rect x="290" y="330" width="220" height="110" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="400" y="352" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ff7aa2" text-anchor="middle" letter-spacing="1.5">COMMUNICATIONS</text>' +
  '<text x="400" y="377" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">One approved voice</text>' +
  '<text x="400" y="400" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Customers, staff,</text>' +
  '<text x="400" y="418" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">media; no guessing</text>' +
  '<line x1="400" y1="330" x2="400" y2="282" fill="none" stroke="#ff7aa2" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="4 3"/>' +
  '<rect x="560" y="330" width="220" height="110" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="670" y="352" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ff8a4c" text-anchor="middle" letter-spacing="1.5">OUTSIDE HELP</text>' +
  '<text x="670" y="377" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Insurer, IR firm, FBI</text>' +
  '<text x="670" y="400" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Called through the</text>' +
  '<text x="670" y="418" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">plan, not by panic</text>' +
  '<line x1="670" y1="330" x2="480" y2="282" fill="none" stroke="#ff8a4c" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="4 3"/>' +
  '</svg>';

COURSE_FIGURES['triage-matrix'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 474" role="img" aria-label="Triage matrix. Rows are impact (high: crown jewels, production, money, or personal data; medium: normal business systems or one important user; low: no sensitive data and no business effect). Columns are scope (narrow: one user or host, not spreading; wide or spreading: many hosts, an active attacker, or data leaving). High impact and wide scope is P1 Critical; high and narrow is P2 High; medium and wide is P2 High; medium and narrow is P3 Medium; low and wide is P3 Medium; low and narrow is P4 Low. Cedar Creek targets from the ticket board: P1 4 hours, P2 8 hours, P3 24 hours, P4 72 hours. Anything linked to an active P1 incident joins that P1.">' +
  '<rect x="0" y="0" width="800" height="474" rx="12" fill="#0d0d1f"/>' +
  '<text x="390" y="30" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">SCOPE: HOW FAR DOES IT REACH?</text>' +
  '<rect x="200" y="58" width="190" height="4" rx="2" fill="#e8e8e8" fill-opacity="0.4"/>' +
  '<text x="295" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">NARROW</text>' +
  '<text x="295" y="100" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">One user or host,</text>' +
  '<text x="295" y="115" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">not spreading</text>' +
  '<rect x="396" y="58" width="190" height="4" rx="2" fill="#e8e8e8" fill-opacity="0.4"/>' +
  '<text x="491" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">WIDE OR SPREADING</text>' +
  '<text x="491" y="100" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Many hosts, active</text>' +
  '<text x="491" y="115" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">attacker, data leaving</text>' +
  '<text x="186" y="162" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="end">HIGH IMPACT</text>' +
  '<text x="186" y="181" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="end">Crown jewels, production,</text>' +
  '<text x="186" y="197" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="end">money, personal data</text>' +
  '<rect x="200" y="128" width="190" height="92" rx="10" fill="#ff8a4c" fill-opacity="0.12" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="295" y="174" font-family="Rajdhani, Segoe UI, sans-serif" font-size="34" font-weight="700" fill="#ff8a4c" text-anchor="middle">P2</text>' +
  '<text x="295" y="198" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">High</text>' +
  '<rect x="396" y="128" width="190" height="92" rx="10" fill="#ee2207" fill-opacity="0.12" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="491" y="174" font-family="Rajdhani, Segoe UI, sans-serif" font-size="34" font-weight="700" fill="#ee2207" text-anchor="middle">P1</text>' +
  '<text x="491" y="198" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Critical</text>' +
  '<text x="186" y="260" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="end">MEDIUM IMPACT</text>' +
  '<text x="186" y="279" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="end">Normal business systems</text>' +
  '<text x="186" y="295" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="end">or one important user</text>' +
  '<rect x="200" y="226" width="190" height="92" rx="10" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="295" y="272" font-family="Rajdhani, Segoe UI, sans-serif" font-size="34" font-weight="700" fill="#ffc23d" text-anchor="middle">P3</text>' +
  '<text x="295" y="296" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Medium</text>' +
  '<rect x="396" y="226" width="190" height="92" rx="10" fill="#ff8a4c" fill-opacity="0.12" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="491" y="272" font-family="Rajdhani, Segoe UI, sans-serif" font-size="34" font-weight="700" fill="#ff8a4c" text-anchor="middle">P2</text>' +
  '<text x="491" y="296" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">High</text>' +
  '<text x="186" y="358" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="end">LOW IMPACT</text>' +
  '<text x="186" y="377" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="end">No sensitive data,</text>' +
  '<text x="186" y="393" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="end">no business effect</text>' +
  '<rect x="200" y="324" width="190" height="92" rx="10" fill="#33d17a" fill-opacity="0.12" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="295" y="370" font-family="Rajdhani, Segoe UI, sans-serif" font-size="34" font-weight="700" fill="#33d17a" text-anchor="middle">P4</text>' +
  '<text x="295" y="394" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Low</text>' +
  '<rect x="396" y="324" width="190" height="92" rx="10" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="491" y="370" font-family="Rajdhani, Segoe UI, sans-serif" font-size="34" font-weight="700" fill="#ffc23d" text-anchor="middle">P3</text>' +
  '<text x="491" y="394" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Medium</text>' +
  '<text x="600" y="98" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">CEDAR CREEK TARGETS</text>' +
  '<rect x="600" y="120" width="186" height="42" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5"/>' +
  '<text x="614" y="147" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ee2207" text-anchor="start">P1</text>' +
  '<text x="650" y="147" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Critical</text>' +
  '<text x="774" y="147" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="end">4 hours</text>' +
  '<rect x="600" y="170" width="186" height="42" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5"/>' +
  '<text x="614" y="197" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ff8a4c" text-anchor="start">P2</text>' +
  '<text x="650" y="197" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">High</text>' +
  '<text x="774" y="197" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="end">8 hours</text>' +
  '<rect x="600" y="220" width="186" height="42" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="1.5"/>' +
  '<text x="614" y="247" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ffc23d" text-anchor="start">P3</text>' +
  '<text x="650" y="247" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Medium</text>' +
  '<text x="774" y="247" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="end">24 hours</text>' +
  '<rect x="600" y="270" width="186" height="42" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5"/>' +
  '<text x="614" y="297" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="start">P4</text>' +
  '<text x="650" y="297" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Low</text>' +
  '<text x="774" y="297" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="end">72 hours</text>' +
  '<text x="693" y="340" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Time to resolve or hand</text>' +
  '<text x="693" y="357" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">off, from the ticket board</text>' +
  '<text x="400" y="452" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Anything linked to an active P1 incident joins that P1, even if it looks small on its own.</text>' +
  '</svg>';

COURSE_FIGURES['alert-outcomes'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 384" role="img" aria-label="Alert outcomes grid. Columns show what really happened (an attack or normal activity); rows show what the tool said (alert fired or no alert). An attack with an alert is a true positive: investigate and respond. Normal activity with an alert is a false positive: close it and tune the rule. An attack with no alert is a false negative, the most dangerous box. Normal activity with no alert is a true negative. Too many false positives cause alert fatigue, and tired analysts start missing true positives.">' +
  '<rect x="0" y="0" width="800" height="384" rx="12" fill="#0d0d1f"/>' +
  '<text x="490" y="30" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">WHAT REALLY HAPPENED</text>' +
  '<text x="355" y="58" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Attack</text>' +
  '<text x="631" y="58" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Normal activity</text>' +
  '<text x="204" y="134" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="end">Alert fired</text>' +
  '<text x="204" y="268" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="end">No alert</text>' +
  '<text x="60" y="214" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5" transform="rotate(-90 60 214)">WHAT THE TOOL SAID</text>' +
  '<rect x="220" y="74" width="270" height="128" rx="10" fill="#33d17a" fill-opacity="0.1" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="355" y="116" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle" letter-spacing="1">TRUE POSITIVE</text>' +
  '<text x="355" y="146" font-family="Inter, Segoe UI, sans-serif" font-size="14.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Real attack, caught.</text>' +
  '<text x="355" y="168" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Investigate and respond.</text>' +
  '<rect x="496" y="74" width="270" height="128" rx="10" fill="#ffc23d" fill-opacity="0.1" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="631" y="116" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle" letter-spacing="1">FALSE POSITIVE</text>' +
  '<text x="631" y="146" font-family="Inter, Segoe UI, sans-serif" font-size="14.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Alarm on normal work.</text>' +
  '<text x="631" y="168" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Close it, tune the rule.</text>' +
  '<rect x="220" y="208" width="270" height="128" rx="10" fill="#ee2207" fill-opacity="0.1" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="355" y="250" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ee2207" text-anchor="middle" letter-spacing="1">FALSE NEGATIVE</text>' +
  '<text x="355" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Real attack, missed.</text>' +
  '<text x="355" y="302" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">The most dangerous box.</text>' +
  '<rect x="496" y="208" width="270" height="128" rx="10" fill="#00f5ff" fill-opacity="0.1" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="631" y="250" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#00f5ff" text-anchor="middle" letter-spacing="1">TRUE NEGATIVE</text>' +
  '<text x="631" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Normal work, quiet.</text>' +
  '<text x="631" y="302" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">What you want most days.</text>' +
  '<text x="400" y="362" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Too many false positives cause alert fatigue, and tired analysts start missing true positives.</text>' +
  '</svg>';

COURSE_FIGURES['containment-types'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 362" role="img" aria-label="Containment by incident type. Ransomware or malware: isolate the host with EDR or at the switch port, block the command-and-control address at the firewall, and take backups offline now; leave the host powered on until memory is saved. Stolen account or phishing: disable the account or reset the password and MFA, end active sessions and revoke tokens, block the sender and pull the email back; check what else the account touched. Data leaving: block the destination at the firewall, cut off the source host or account, and measure what left and when; call legal early because notice may be required. Insider: quietly remove access with HR and legal, preserve mail, files, and logs under legal hold, and recover company devices and badges; do not tip them off before access is gone. Short-term containment comes first, then long-term containment such as patching, segmenting, and adding logging.">' +
  '<rect x="0" y="0" width="800" height="362" rx="12" fill="#0d0d1f"/>' +
  '<rect x="12" y="16" width="186" height="222" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="105" y="42" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#ee2207" text-anchor="middle" letter-spacing="0.8">RANSOMWARE / MALWARE</text>' +
  '<line x1="26" y1="56" x2="184" y2="56" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="105" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Isolate the host with</text>' +
  '<text x="105" y="101" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">EDR or the switch port</text>' +
  '<text x="105" y="139" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Block the C2 address</text>' +
  '<text x="105" y="158" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">at the firewall</text>' +
  '<text x="105" y="196" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Protect backups: take</text>' +
  '<text x="105" y="215" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">them offline now</text>' +
  '<rect x="12" y="252" width="186" height="62" rx="10" fill="#0d0d1f" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="5 4"/>' +
  '<text x="105" y="278" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Leave it powered on</text>' +
  '<text x="105" y="297" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">until memory is saved</text>' +
  '<rect x="208" y="16" width="186" height="222" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="301" y="42" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="0.8">STOLEN ACCOUNT / PHISH</text>' +
  '<line x1="222" y1="56" x2="380" y2="56" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="301" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Disable the account or</text>' +
  '<text x="301" y="101" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">reset password + MFA</text>' +
  '<text x="301" y="139" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">End active sessions</text>' +
  '<text x="301" y="158" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">and revoke tokens</text>' +
  '<text x="301" y="196" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Block the sender and</text>' +
  '<text x="301" y="215" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">pull the email back</text>' +
  '<rect x="208" y="252" width="186" height="62" rx="10" fill="#0d0d1f" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="5 4"/>' +
  '<text x="301" y="278" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Check what else the</text>' +
  '<text x="301" y="297" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">account touched</text>' +
  '<rect x="404" y="16" width="186" height="222" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="497" y="42" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="0.8">DATA LEAVING</text>' +
  '<line x1="418" y1="56" x2="576" y2="56" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="497" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Block the destination</text>' +
  '<text x="497" y="101" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">at the firewall</text>' +
  '<text x="497" y="139" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Cut the source host</text>' +
  '<text x="497" y="158" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">or account off</text>' +
  '<text x="497" y="196" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Measure what left</text>' +
  '<text x="497" y="215" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">and when</text>' +
  '<rect x="404" y="252" width="186" height="62" rx="10" fill="#0d0d1f" stroke="#b794ff" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="5 4"/>' +
  '<text x="497" y="278" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Call legal early:</text>' +
  '<text x="497" y="297" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">notice may be required</text>' +
  '<rect x="600" y="16" width="186" height="222" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="693" y="42" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="0.8">INSIDER</text>' +
  '<line x1="614" y1="56" x2="772" y2="56" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="693" y="82" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Quietly remove access</text>' +
  '<text x="693" y="101" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">with HR and legal</text>' +
  '<text x="693" y="139" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Preserve mail, files,</text>' +
  '<text x="693" y="158" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">and logs (legal hold)</text>' +
  '<text x="693" y="196" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Recover company</text>' +
  '<text x="693" y="215" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">devices and badges</text>' +
  '<rect x="600" y="252" width="186" height="62" rx="10" fill="#0d0d1f" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="5 4"/>' +
  '<text x="693" y="278" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Do not tip them off</text>' +
  '<text x="693" y="297" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">before access is gone</text>' +
  '<text x="400" y="344" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">SHORT TERM (MINUTES TO HOURS) FIRST, THEN LONG TERM (DAYS): PATCH, SEGMENT, ADD LOGGING</text>' +
  '</svg>';

COURSE_FIGURES['order-volatility'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 410" role="img" aria-label="Order of volatility, from most volatile (collect first) to least volatile (collect last): CPU registers and cache, gone in nanoseconds and rarely collected; memory (RAM) with running processes, network connections, and keys, gone at power-off, so capture it first; swap or page file and temporary files, overwritten as the system keeps running; disk with files, logs, and deleted data, which survives power-off and is imaged bit for bit; remote logs in the SIEM, firewall, and EDR console, kept for days or months and then rotated; and backups and archives, kept the longest.">' +
  '<rect x="0" y="0" width="800" height="410" rx="12" fill="#0d0d1f"/>' +
  '<rect x="100" y="20" width="680" height="54" rx="10" fill="#ee2207" fill-opacity="0.12" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="440" y="44" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">CPU registers and cache</text>' +
  '<text x="440" y="64" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Gone in nanoseconds; rarely collected</text>' +
  '<rect x="130" y="84" width="620" height="54" rx="10" fill="#ff8a4c" fill-opacity="0.12" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="440" y="108" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Memory (RAM): processes, connections, keys</text>' +
  '<text x="440" y="128" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Gone at power-off. Capture first.</text>' +
  '<rect x="160" y="148" width="560" height="54" rx="10" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="440" y="172" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Swap / page file and temporary files</text>' +
  '<text x="440" y="192" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Overwritten as the system keeps running</text>' +
  '<rect x="190" y="212" width="500" height="54" rx="10" fill="#33d17a" fill-opacity="0.12" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="440" y="236" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Disk: files, logs, deleted data</text>' +
  '<text x="440" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Survives power-off; image it bit for bit</text>' +
  '<rect x="220" y="276" width="440" height="54" rx="10" fill="#00f5ff" fill-opacity="0.12" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="440" y="300" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Remote logs: SIEM, firewall, EDR console</text>' +
  '<text x="440" y="320" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Kept for days or months, then rotated</text>' +
  '<rect x="260" y="340" width="360" height="54" rx="10" fill="#b794ff" fill-opacity="0.12" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="440" y="364" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Backups and archives (tapes, offsite)</text>' +
  '<text x="440" y="384" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Kept the longest; least volatile</text>' +
  '<line x1="20" y1="30" x2="20" y2="379" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="20.0,390.0 14.0,379.0 26.0,379.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<text x="34" y="46" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Collect</text>' +
  '<text x="34" y="62" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">first</text>' +
  '<text x="34" y="372" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">Collect</text>' +
  '<text x="34" y="388" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">last</text>' +
  '</svg>';

COURSE_FIGURES['chain-custody'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 340" role="img" aria-label="Chain of custody in five steps: 1 Collect (copy or image, and note the time, place, who, and how), 2 Hash (SHA-256 of each item, written on the form), 3 Label and seal (unique item ID and a tamper-evident bag or seal), 4 Transfer (every hand-off logged and signed by both people), 5 Store (locked, limited access, and examine copies only). Every line of the custody form answers: which item, when, released by whom, received by whom, why, and both signatures. A gap in the record lets the other side argue the evidence was changed; hashes prove it was not.">' +
  '<rect x="0" y="0" width="800" height="340" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="88" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">01</text>' +
  '<text x="88" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Collect</text>' +
  '<text x="88" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Copy or image;</text>' +
  '<text x="88" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">note time, place,</text>' +
  '<text x="88" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">who, and how</text>' +
  '<line x1="158" y1="86" x2="166" y2="86" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="174.0,86.0 166.0,91.0 166.0,81.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="176" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="244" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">02</text>' +
  '<text x="244" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Hash</text>' +
  '<text x="244" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">SHA-256 of each</text>' +
  '<text x="244" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">item, written on</text>' +
  '<text x="244" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">the form</text>' +
  '<line x1="314" y1="86" x2="322" y2="86" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="330.0,86.0 322.0,91.0 322.0,81.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="332" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="400" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">03</text>' +
  '<text x="400" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Label + seal</text>' +
  '<text x="400" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Unique item ID;</text>' +
  '<text x="400" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">tamper-evident</text>' +
  '<text x="400" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">bag or seal</text>' +
  '<line x1="470" y1="86" x2="478" y2="86" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="486.0,86.0 478.0,91.0 478.0,81.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="488" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="556" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="1.5">04</text>' +
  '<text x="556" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Transfer</text>' +
  '<text x="556" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Every hand-off</text>' +
  '<text x="556" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">logged and</text>' +
  '<text x="556" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">signed by both</text>' +
  '<line x1="626" y1="86" x2="634" y2="86" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="642.0,86.0 634.0,91.0 634.0,81.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="644" y="20" width="136" height="132" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="712" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ff8a4c" text-anchor="middle" letter-spacing="1.5">05</text>' +
  '<text x="712" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Store</text>' +
  '<text x="712" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Locked, limited</text>' +
  '<text x="712" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">access; examine</text>' +
  '<text x="712" y="132" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">copies only</text>' +
  '<text x="20" y="186" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">EVERY LINE OF THE CUSTODY FORM ANSWERS</text>' +
  '<rect x="20" y="200" width="244" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.2"/>' +
  '<text x="142" y="223" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Which item?</text>' +
  '<rect x="276" y="200" width="244" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.2"/>' +
  '<text x="398" y="223" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">When (date and time)?</text>' +
  '<rect x="532" y="200" width="244" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.2"/>' +
  '<text x="654" y="223" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Released by whom?</text>' +
  '<rect x="20" y="246" width="244" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.2"/>' +
  '<text x="142" y="269" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Received by whom?</text>' +
  '<rect x="276" y="246" width="244" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.2"/>' +
  '<text x="398" y="269" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Why (purpose)?</text>' +
  '<rect x="532" y="246" width="244" height="36" rx="6" fill="#131329" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.2"/>' +
  '<text x="654" y="269" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Both signatures</text>' +
  '<text x="400" y="318" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">A gap in the record lets the other side argue the evidence was changed. Hashes prove it was not.</text>' +
  '</svg>';

COURSE_FIGURES['report-anatomy'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" role="img" aria-label="Anatomy of an incident report, with eight sections: executive summary (what, impact, and status in five plain sentences), classification (type, priority, incident ID, owner), detection (how and when it was found), timeline in UTC and local time (facts in order, each with its source), scope and impact (systems, accounts, data, downtime), root cause (why it was possible, not just what happened), actions taken (who did what and when), and recommendations (fixes with owners and dates). Readers: the CFO reads the summary, impact, and cost; the insurer and lawyers read the timeline, scope, and data involved; customers, if told, read what of theirs was affected; IT reads root cause, actions, and fixes; next year\'s responder reads everything.">' +
  '<rect x="0" y="0" width="800" height="480" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="360" height="440" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="1.5" stroke-opacity="0.35"/>' +
  '<text x="200" y="46" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">INCIDENT REPORT CC-IR-2026-01</text>' +
  '<rect x="40" y="64" width="6" height="36" rx="3" fill="#ee2207"/>' +
  '<text x="58" y="80" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">Executive summary</text>' +
  '<text x="58" y="97" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">What, impact, status: 5 plain sentences</text>' +
  '<rect x="40" y="112" width="6" height="36" rx="3" fill="#ffc23d"/>' +
  '<text x="58" y="128" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">Classification</text>' +
  '<text x="58" y="145" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Type, priority, incident ID, owner</text>' +
  '<rect x="40" y="160" width="6" height="36" rx="3" fill="#00f5ff"/>' +
  '<text x="58" y="176" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">Detection</text>' +
  '<text x="58" y="193" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">How and when it was found</text>' +
  '<rect x="40" y="208" width="6" height="36" rx="3" fill="#33d17a"/>' +
  '<text x="58" y="224" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">Timeline (UTC + local)</text>' +
  '<text x="58" y="241" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Facts in order, each with its source</text>' +
  '<rect x="40" y="256" width="6" height="36" rx="3" fill="#b794ff"/>' +
  '<text x="58" y="272" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">Scope and impact</text>' +
  '<text x="58" y="289" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Systems, accounts, data, downtime</text>' +
  '<rect x="40" y="304" width="6" height="36" rx="3" fill="#ff8a4c"/>' +
  '<text x="58" y="320" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">Root cause</text>' +
  '<text x="58" y="337" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Why it was possible, not just what</text>' +
  '<rect x="40" y="352" width="6" height="36" rx="3" fill="#ff7aa2"/>' +
  '<text x="58" y="368" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">Actions taken</text>' +
  '<text x="58" y="385" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Who did what, and when</text>' +
  '<rect x="40" y="400" width="6" height="36" rx="3" fill="#00f5ff"/>' +
  '<text x="58" y="416" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">Recommendations</text>' +
  '<text x="58" y="433" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Fixes with owners and dates</text>' +
  '<text x="420" y="46" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">WHO READS WHICH PART</text>' +
  '<rect x="420" y="64" width="360" height="64" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="440" y="92" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Greg Palmer (CFO)</text>' +
  '<text x="440" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Executive summary, impact, cost</text>' +
  '<rect x="420" y="142" width="360" height="64" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="440" y="170" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Insurer and lawyers</text>' +
  '<text x="440" y="191" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Timeline, scope, data involved</text>' +
  '<rect x="420" y="220" width="360" height="64" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="440" y="248" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Customers (if told)</text>' +
  '<text x="440" y="269" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">What of theirs was affected</text>' +
  '<rect x="420" y="298" width="360" height="64" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="440" y="326" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Marcus and IT</text>' +
  '<text x="440" y="347" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Root cause, actions, fixes</text>' +
  '<rect x="420" y="376" width="360" height="64" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="440" y="404" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Next year\'s responder</text>' +
  '<text x="440" y="425" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Everything: it is the playbook</text>' +
  '</svg>';

COURSE_FIGURES['rpo-rto'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 274" role="img" aria-label="RPO and RTO on a timeline. On the left, the last good backup (Friday 12-18 at 23:47). In the middle, the incident (Wednesday 12-23 at 03:36). On the right, service restored, with a goal of within 24 hours. The span between the last backup and the incident is data at risk, limited by the recovery point objective (RPO): how much data can we afford to lose, measured as backup age. The span between the incident and restoration is downtime, limited by the recovery time objective (RTO): how long can we afford to be down. Weekly tapes mean Cedar Creek\'s real RPO is up to 7 days, while Engineering wants 1 day. MTTR is the average repair time; MTBF is the average time between failures.">' +
  '<rect x="0" y="0" width="800" height="274" rx="12" fill="#0d0d1f"/>' +
  '<line x1="40" y1="100" x2="770" y2="100" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.4"/>' +
  '<rect x="110" y="66" width="310" height="26" rx="4" fill="#ffc23d" fill-opacity="0.18" stroke="#ffc23d" stroke-width="1.5"/>' +
  '<text x="265" y="84" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1">DATA AT RISK: limited by RPO</text>' +
  '<rect x="420" y="108" width="270" height="26" rx="4" fill="#00f5ff" fill-opacity="0.18" stroke="#00f5ff" stroke-width="1.5"/>' +
  '<text x="555" y="126" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1">DOWNTIME: limited by RTO</text>' +
  '<circle cx="110" cy="100" r="9" fill="#33d17a"/>' +
  '<text x="110" y="38" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#33d17a" text-anchor="middle">Last good backup</text>' +
  '<text x="110" y="56" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Fri 12-18, 23:47</text>' +
  '<circle cx="420" cy="100" r="9" fill="#ee2207"/>' +
  '<text x="420" y="38" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ee2207" text-anchor="middle">Incident</text>' +
  '<text x="420" y="56" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Wed 12-23, 03:36</text>' +
  '<circle cx="690" cy="100" r="9" fill="#b794ff"/>' +
  '<text x="690" y="38" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#b794ff" text-anchor="middle">Service restored</text>' +
  '<text x="690" y="56" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">goal: within 24 h</text>' +
  '<text x="30" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">RPO: how much data can we afford</text>' +
  '<text x="30" y="191" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">to lose? (the age of the backup)</text>' +
  '<text x="770" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="end">RTO: how long can we afford</text>' +
  '<text x="770" y="191" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="end">to be down?</text>' +
  '<text x="400" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Weekly tapes mean Cedar Creek\'s real RPO is up to 7 days. Engineering wants 1 day.</text>' +
  '<text x="400" y="254" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">MTTR = average repair time. MTBF = average time between failures.</text>' +
  '</svg>';

COURSE_FIGURES['backup-321'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 380" role="img" aria-label="The 3-2-1 backup rule. 3 copies of the data: the live data plus two backups (at Cedar Creek: ENG-FS01, a tape, and a cloud copy or second tape). 2 different media, so one failure type cannot hit them all (disk and LTO tape). 1 copy offsite or offline, out of reach of fire, theft, and ransomware (a tape that leaves the building weekly). Today Cedar Creek keeps one weekly tape on a shelf in the same room as the servers: it is offline, so it survived the ransomware, but it is not offsite and only one week deep. Test restores prove a backup is real.">' +
  '<rect x="0" y="0" width="800" height="380" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="240" height="190" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="140" y="90" font-family="Rajdhani, Segoe UI, sans-serif" font-size="64" font-weight="700" fill="#00f5ff" text-anchor="middle">3</text>' +
  '<text x="140" y="120" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">COPIES OF THE DATA</text>' +
  '<text x="140" y="148" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">The live data plus</text>' +
  '<text x="140" y="167" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">two backups</text>' +
  '<rect x="20" y="226" width="240" height="64" rx="10" fill="#0d0d1f" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="5 4"/>' +
  '<text x="140" y="252" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">ENG-FS01 + tape +</text>' +
  '<text x="140" y="271" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">cloud or second tape</text>' +
  '<rect x="280" y="20" width="240" height="190" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="90" font-family="Rajdhani, Segoe UI, sans-serif" font-size="64" font-weight="700" fill="#ffc23d" text-anchor="middle">2</text>' +
  '<text x="400" y="120" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">DIFFERENT MEDIA</text>' +
  '<text x="400" y="148" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">So one failure type</text>' +
  '<text x="400" y="167" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">cannot hit them all</text>' +
  '<rect x="280" y="226" width="240" height="64" rx="10" fill="#0d0d1f" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="5 4"/>' +
  '<text x="400" y="262" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Disk + LTO tape</text>' +
  '<rect x="540" y="20" width="240" height="190" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="660" y="90" font-family="Rajdhani, Segoe UI, sans-serif" font-size="64" font-weight="700" fill="#33d17a" text-anchor="middle">1</text>' +
  '<text x="660" y="120" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">OFFSITE OR OFFLINE</text>' +
  '<text x="660" y="148" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Out of reach of fire,</text>' +
  '<text x="660" y="167" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">theft, and ransomware</text>' +
  '<rect x="540" y="226" width="240" height="64" rx="10" fill="#0d0d1f" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="5 4"/>' +
  '<text x="660" y="252" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">A tape that leaves</text>' +
  '<text x="660" y="271" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">the building weekly</text>' +
  '<text x="20" y="316" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">TODAY AT CEDAR CREEK</text>' +
  '<text x="20" y="340" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">One weekly tape on a shelf in the same room as the servers: offline (it survived the ransomware),</text>' +
  '<text x="20" y="360" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">but not offsite (a fire takes both) and only one week deep. Test restores prove a backup is real.</text>' +
  '</svg>';
