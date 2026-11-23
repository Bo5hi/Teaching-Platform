// Week 10 talk diagrams (inline SVG strings). Used by Lesson.html via section.figure = { id, caption }.
window.COURSE_FIGURES = window.COURSE_FIGURES || {};

COURSE_FIGURES['w10-castle-zt'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 444" role="img" aria-label="Two models compared. Left, castle and moat: a strong outer wall, and everything inside, such as ng-web01, ng-files01, ng-backup01, and ng-legacy01, is trusted, so an attacker who gets past the wall moves freely. Right, zero trust: every request from a user and device goes through a policy check (MFA, device, context) before it reaches the files, web, or backup server. Bottom: the April 2026 Northgate attack in five steps, each with the missing check: phished password (no MFA), SSH through an old forward (not VPN-only), became admin (too much privilege), hidden account and scheduled task (no alert), finance files copied out (seen the next day).">' +
  '<rect x="0" y="0" width="800" height="444" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="370" height="250" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="205" y="48" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#ee2207" text-anchor="middle">Castle and moat (old model)</text>' +
  '<rect x="60" y="80" width="290" height="150" rx="10" fill="#0d0d1f" stroke="#e8e8e8" stroke-width="6" stroke-opacity="0.35"/>' +
  '<text x="205" y="102" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">INSIDE = TRUSTED</text>' +
  '<rect x="78" y="118" width="120" height="36" rx="10" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="138" y="141" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">ng-web01</text>' +
  '<rect x="218" y="118" width="120" height="36" rx="10" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="278" y="141" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">ng-files01</text>' +
  '<rect x="78" y="168" width="120" height="36" rx="10" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="138" y="191" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">ng-backup01</text>' +
  '<rect x="218" y="168" width="120" height="36" rx="10" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="278" y="191" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">ng-legacy01</text>' +
  '<text x="205" y="252" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Get past the wall once, then move freely.</text>' +
  '<rect x="410" y="20" width="370" height="250" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="595" y="48" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#33d17a" text-anchor="middle">Zero trust</text>' +
  '<rect x="440" y="74" width="120" height="40" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="1.5"/>' +
  '<text x="500" y="99" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">User + device</text>' +
  '<rect x="588" y="66" width="184" height="56" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="680" y="90" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#ffc23d" text-anchor="middle">Policy check</text>' +
  '<text x="680" y="110" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="middle">MFA, device, context</text>' +
  '<line x1="562" y1="94" x2="575" y2="94" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="586.0,94.0 575.0,100.0 575.0,88.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="452" y="170" width="92" height="36" rx="10" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="498" y="193" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">files</text>' +
  '<line x1="680" y1="124" x2="505.8" y2="166.1" fill="none" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.6"/><polygon points="498.0,168.0 504.6,161.3 507.0,171.0" fill="#ffc23d" fill-opacity="0.6"/>' +
  '<rect x="558" y="170" width="92" height="36" rx="10" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="604" y="193" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">web</text>' +
  '<line x1="680" y1="124" x2="610.9" y2="164" fill="none" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.6"/><polygon points="604.0,168.0 608.4,159.7 613.4,168.3" fill="#ffc23d" fill-opacity="0.6"/>' +
  '<rect x="664" y="170" width="92" height="36" rx="10" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="710" y="193" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">backup</text>' +
  '<line x1="680" y1="124" x2="705.5" y2="161.4" fill="none" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.6"/><polygon points="710.0,168.0 701.4,164.2 709.6,158.6" fill="#ffc23d" fill-opacity="0.6"/>' +
  '<text x="595" y="236" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Every request is checked, inside or outside.</text>' +
  '<text x="595" y="254" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Each user gets only the access the job needs.</text>' +
  '<text x="20" y="304" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">NORTHGATE, APRIL 2026: WHERE ONE PASSWORD WAS ENOUGH</text>' +
  '<rect x="20" y="318" width="138" height="74" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5"/>' +
  '<text x="89" y="342" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Phished</text>' +
  '<text x="89" y="360" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">password</text>' +
  '<text x="89" y="381" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#ffc23d" text-anchor="middle">no MFA</text>' +
  '<line x1="160" y1="355" x2="167" y2="355" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="174.0,355.0 167.0,359.0 167.0,351.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="176" y="318" width="138" height="74" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5"/>' +
  '<text x="245" y="342" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">SSH through</text>' +
  '<text x="245" y="360" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">old forward</text>' +
  '<text x="245" y="381" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#ffc23d" text-anchor="middle">not VPN-only</text>' +
  '<line x1="316" y1="355" x2="323" y2="355" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="330.0,355.0 323.0,359.0 323.0,351.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="332" y="318" width="138" height="74" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5"/>' +
  '<text x="401" y="342" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Became</text>' +
  '<text x="401" y="360" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">admin</text>' +
  '<text x="401" y="381" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#ffc23d" text-anchor="middle">too much privilege</text>' +
  '<line x1="472" y1="355" x2="479" y2="355" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="486.0,355.0 479.0,359.0 479.0,351.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="488" y="318" width="138" height="74" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5"/>' +
  '<text x="557" y="342" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Hidden account</text>' +
  '<text x="557" y="360" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">+ scheduled task</text>' +
  '<text x="557" y="381" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#ffc23d" text-anchor="middle">no alert</text>' +
  '<line x1="628" y1="355" x2="635" y2="355" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="642.0,355.0 635.0,359.0 635.0,351.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="644" y="318" width="138" height="74" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5"/>' +
  '<text x="713" y="342" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Finance files</text>' +
  '<text x="713" y="360" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">copied out</text>' +
  '<text x="713" y="381" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#ffc23d" text-anchor="middle">seen next day</text>' +
  '<text x="400" y="424" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Amber text: the check a zero trust design would have added at that step.</text>' +
  '</svg>';

COURSE_FIGURES['w10-csf-weights'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 394" role="img" aria-label="Bar chart of the Northgate questionnaire by NIST CSF 2.0 function. Govern: 10 questions, total weight 79 (23.5 percent). Identify: 7 questions, weight 56 (16.7 percent). Protect: 11 questions, weight 94 (28.0 percent). Detect: 5 questions, weight 41 (12.2 percent). Respond: 4 questions, weight 33 (9.8 percent). Recover: 4 questions, weight 33 (9.8 percent). 41 questions, total weight 336. Compliance equals the sum of weight times level divided by the sum of weights.">' +
  '<rect x="0" y="0" width="800" height="394" rx="12" fill="#0d0d1f"/>' +
  '<text x="40" y="40" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">FUNCTION</text>' +
  '<text x="250" y="40" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">QUESTIONS</text>' +
  '<text x="330" y="40" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">TOTAL WEIGHT (SHARE OF 336)</text>' +
  '<rect x="30" y="58" width="740" height="38" rx="8" fill="#131329"/>' +
  '<text x="44" y="83" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#b794ff" text-anchor="start">Govern</text>' +
  '<text x="150" y="83" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">GV</text>' +
  '<text x="250" y="83" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">10</text>' +
  '<rect x="330" y="67" width="269" height="20" rx="4" fill="#b794ff" fill-opacity="0.75"/>' +
  '<text x="609" y="83" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="start">79  (23.5%)</text>' +
  '<rect x="30" y="104" width="740" height="38" rx="8" fill="#131329"/>' +
  '<text x="44" y="129" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#00f5ff" text-anchor="start">Identify</text>' +
  '<text x="150" y="129" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">ID</text>' +
  '<text x="250" y="129" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">7</text>' +
  '<rect x="330" y="113" width="191" height="20" rx="4" fill="#00f5ff" fill-opacity="0.75"/>' +
  '<text x="531" y="129" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="start">56  (16.7%)</text>' +
  '<rect x="30" y="150" width="740" height="38" rx="8" fill="#131329"/>' +
  '<text x="44" y="175" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#33d17a" text-anchor="start">Protect</text>' +
  '<text x="150" y="175" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">PR</text>' +
  '<text x="250" y="175" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">11</text>' +
  '<rect x="330" y="159" width="320" height="20" rx="4" fill="#33d17a" fill-opacity="0.75"/>' +
  '<text x="660" y="175" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="start">94  (28.0%)</text>' +
  '<rect x="30" y="196" width="740" height="38" rx="8" fill="#131329"/>' +
  '<text x="44" y="221" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ffc23d" text-anchor="start">Detect</text>' +
  '<text x="150" y="221" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">DE</text>' +
  '<text x="250" y="221" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">5</text>' +
  '<rect x="330" y="205" width="140" height="20" rx="4" fill="#ffc23d" fill-opacity="0.75"/>' +
  '<text x="480" y="221" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="start">41  (12.2%)</text>' +
  '<rect x="30" y="242" width="740" height="38" rx="8" fill="#131329"/>' +
  '<text x="44" y="267" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ff8a4c" text-anchor="start">Respond</text>' +
  '<text x="150" y="267" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">RS</text>' +
  '<text x="250" y="267" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">4</text>' +
  '<rect x="330" y="251" width="112" height="20" rx="4" fill="#ff8a4c" fill-opacity="0.75"/>' +
  '<text x="452" y="267" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="start">33  (9.8%)</text>' +
  '<rect x="30" y="288" width="740" height="38" rx="8" fill="#131329"/>' +
  '<text x="44" y="313" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ff7aa2" text-anchor="start">Recover</text>' +
  '<text x="150" y="313" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">RC</text>' +
  '<text x="250" y="313" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">4</text>' +
  '<rect x="330" y="297" width="112" height="20" rx="4" fill="#ff7aa2" fill-opacity="0.75"/>' +
  '<text x="452" y="313" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="start">33  (9.8%)</text>' +
  '<text x="400" y="352" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">41 questions, total weight 336. Weights run from 5 to 10 in this workbook.</text>' +
  '<text x="400" y="374" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Compliance = sum of (weight x level) / sum of weights. Heavy questions move the score most.</text>' +
  '</svg>';

COURSE_FIGURES['w10-question-types'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 340" role="img" aria-label="Interview question types. Questions that get answers you can score: open (&quot;How does a new hire get file server access?&quot;), follow-up (&quot;Who else can do that when you are away?&quot;), request for proof (&quot;Can you share the report that shows that?&quot;), and closing (&quot;Is there anything else we should know?&quot;). Questions that waste the clock: too broad (&quot;How is security going in general?&quot;) and leading or yes/no (&quot;You test your backups, right?&quot;).">' +
  '<rect x="0" y="0" width="800" height="340" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="470" height="300" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="255" y="50" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="middle">Gets answers you can score</text>' +
  '<rect x="36" y="72" width="438" height="50" rx="10" fill="#0d0d1f" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="52" y="93" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#33d17a" text-anchor="start">Open</text>' +
  '<text x="52" y="113" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="start">&quot;How does a new hire get file server access?&quot;</text>' +
  '<rect x="36" y="132" width="438" height="50" rx="10" fill="#0d0d1f" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="52" y="153" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#33d17a" text-anchor="start">Follow-up</text>' +
  '<text x="52" y="173" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="start">&quot;Who else can do that when you are away?&quot;</text>' +
  '<rect x="36" y="192" width="438" height="50" rx="10" fill="#0d0d1f" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="52" y="213" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#33d17a" text-anchor="start">Request for proof</text>' +
  '<text x="52" y="233" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="start">&quot;Can you share the report that shows that?&quot;</text>' +
  '<rect x="36" y="252" width="438" height="50" rx="10" fill="#0d0d1f" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="52" y="273" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#33d17a" text-anchor="start">Closing</text>' +
  '<text x="52" y="293" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="start">&quot;Is there anything else we should know?&quot;</text>' +
  '<rect x="510" y="20" width="270" height="300" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="645" y="50" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ee2207" text-anchor="middle">Wastes the clock</text>' +
  '<rect x="526" y="72" width="238" height="60" rx="10" fill="#0d0d1f" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="540" y="95" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#ee2207" text-anchor="start">Too broad</text>' +
  '<text x="540" y="117" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="start">&quot;How is security going in general?&quot;</text>' +
  '<rect x="526" y="144" width="238" height="60" rx="10" fill="#0d0d1f" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="540" y="167" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#ee2207" text-anchor="start">Leading or yes/no</text>' +
  '<text x="540" y="189" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="start">&quot;You test your backups, right?&quot;</text>' +
  '<text x="645" y="240" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Broad questions get general</text>' +
  '<text x="645" y="258" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">answers. Leading questions</text>' +
  '<text x="645" y="276" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">get agreement, not facts.</text>' +
  '</svg>';
