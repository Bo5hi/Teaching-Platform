// Week 13 talk diagrams (inline SVG strings). Used by Lesson.html via section.figure = { id, caption }.
window.COURSE_FIGURES = window.COURSE_FIGURES || {};

COURSE_FIGURES['w13-pyramid'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" role="img" aria-label="Inverted pyramid for an Executive Summary. Widest at the top and read first: 1 the headline (overall compliance, CMM level, hygiene rating, and one comparison). 2 the top three to five risks in business terms. 3 five next steps to approve, most important first. A dashed line marks where a busy CEO may stop reading. Narrowest at the bottom and read only if needed: 4 detail such as results by function, method, and evidence IDs, which live in the CSA report and the workbook.">' +
  '<rect x="0" y="0" width="800" height="420" rx="12" fill="#0d0d1f"/>' +
  '<polygon points="30.0,40.0 470.0,40.0 417.6,121.0 82.4,121.0" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="250" y="84.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ee2207" text-anchor="middle">1  Headline</text>' +
  '<line x1="452.5" y1="78.5" x2="500" y2="78.5" fill="none" stroke="#ee2207" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="4 4"/>' +
  '<text x="510" y="74.5" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Overall compliance, CMM level,</text>' +
  '<text x="510" y="94.5" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="start">hygiene rating, one comparison</text>' +
  '<polygon points="85.0,125.0 415.0,125.0 362.6,206.0 137.4,206.0" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="250" y="169.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ffc23d" text-anchor="middle">2  Top risks</text>' +
  '<line x1="397.5" y1="163.5" x2="500" y2="163.5" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="4 4"/>' +
  '<text x="510" y="159.5" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Three to five risks in business</text>' +
  '<text x="510" y="179.5" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="start">terms: money, customers, insurance</text>' +
  '<polygon points="140.0,210.0 360.0,210.0 307.6,291.0 192.4,291.0" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="250" y="254.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="middle">3  Next steps</text>' +
  '<line x1="342.5" y1="248.5" x2="500" y2="248.5" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="4 4"/>' +
  '<text x="510" y="244.5" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Five actions to approve, most</text>' +
  '<text x="510" y="264.5" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="start">important first, each closes a risk</text>' +
  '<polygon points="195.0,295.0 305.0,295.0 252.6,376.0 247.4,376.0" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="250" y="339.5" font-family="Rajdhani, Segoe UI, sans-serif" font-size="16" font-weight="700" fill="#00f5ff" text-anchor="middle">4  Detail</text>' +
  '<line x1="287.5" y1="333.5" x2="500" y2="333.5" fill="none" stroke="#00f5ff" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="4 4"/>' +
  '<text x="510" y="329.5" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="start">Results by function, method,</text>' +
  '<text x="510" y="349.5" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="start">evidence IDs: the CSA and workbook</text>' +
  '<text x="510" y="26" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ee2207" text-anchor="start" letter-spacing="1.5">READ FIRST</text>' +
  '<text x="510" y="404" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">READ IF NEEDED</text>' +
  '<line x1="770" y1="34" x2="770" y2="387" fill="none" stroke="#a0a0ac" stroke-width="2" stroke-opacity="0.6"/><polygon points="770.0,398.0 764.0,387.0 776.0,387.0" fill="#a0a0ac" fill-opacity="0.6"/>' +
  '<line x1="40" y1="293" x2="480" y2="293" fill="none" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="6 5"/>' +
  '<text x="40" y="311" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="start">A busy CEO may stop here</text>' +
  '</svg>';

COURSE_FIGURES['w13-deck-flow'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 372" role="img" aria-label="The ten slides of the briefing deck template in order, in three groups. Why and how: 1 Title, 2 Purpose and agenda, 3 Scope and method. What we found: 4 Overall posture, 5 Maturity by function, 6 Strengths and priority gaps, 7 Critical scan findings, 8 Top risks and heat map. What to do: 9 Remediation roadmap, 10 Next steps and questions. About one minute per slide, 10 to 15 minutes in all, then questions.">' +
  '<rect x="0" y="0" width="800" height="372" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="64" width="140" height="96" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="90" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">SLIDE 1</text>' +
  '<text x="90" y="116" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Title</text>' +
  '<line x1="162" y1="112" x2="166" y2="112" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="173.0,112.0 166.0,116.0 166.0,108.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="175" y="64" width="140" height="96" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="245" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">SLIDE 2</text>' +
  '<text x="245" y="116" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Purpose</text>' +
  '<text x="245" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">and agenda</text>' +
  '<line x1="317" y1="112" x2="321" y2="112" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="328.0,112.0 321.0,116.0 321.0,108.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="330" y="64" width="140" height="96" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="400" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">SLIDE 3</text>' +
  '<text x="400" y="116" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Scope</text>' +
  '<text x="400" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">and method</text>' +
  '<line x1="472" y1="112" x2="476" y2="112" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="483.0,112.0 476.0,116.0 476.0,108.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="485" y="64" width="140" height="96" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="555" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">SLIDE 4</text>' +
  '<text x="555" y="116" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Overall</text>' +
  '<text x="555" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">posture</text>' +
  '<line x1="627" y1="112" x2="631" y2="112" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="638.0,112.0 631.0,116.0 631.0,108.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="640" y="64" width="140" height="96" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="710" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">SLIDE 5</text>' +
  '<text x="710" y="116" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Maturity by</text>' +
  '<text x="710" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">function</text>' +
  '<rect x="20" y="204" width="140" height="96" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="90" y="228" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">SLIDE 6</text>' +
  '<text x="90" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Strengths and</text>' +
  '<text x="90" y="276" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">priority gaps</text>' +
  '<line x1="162" y1="252" x2="166" y2="252" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="173.0,252.0 166.0,256.0 166.0,248.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="175" y="204" width="140" height="96" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="245" y="228" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">SLIDE 7</text>' +
  '<text x="245" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Critical scan</text>' +
  '<text x="245" y="276" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">findings</text>' +
  '<line x1="317" y1="252" x2="321" y2="252" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="328.0,252.0 321.0,256.0 321.0,248.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="330" y="204" width="140" height="96" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="228" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">SLIDE 8</text>' +
  '<text x="400" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Top risks and</text>' +
  '<text x="400" y="276" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">heat map</text>' +
  '<line x1="472" y1="252" x2="476" y2="252" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="483.0,252.0 476.0,256.0 476.0,248.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="485" y="204" width="140" height="96" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="555" y="228" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">SLIDE 9</text>' +
  '<text x="555" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Remediation</text>' +
  '<text x="555" y="276" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">roadmap</text>' +
  '<line x1="627" y1="252" x2="631" y2="252" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="638.0,252.0 631.0,256.0 631.0,248.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="640" y="204" width="140" height="96" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="710" y="228" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">SLIDE 10</text>' +
  '<text x="710" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">Next steps</text>' +
  '<text x="710" y="276" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#e8e8e8" text-anchor="middle">and questions</text>' +
  '<line x1="710" y1="164" x2="710" y2="182" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.4"/>' +
  '<line x1="90" y1="182" x2="710" y2="182" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.4"/>' +
  '<line x1="90" y1="182" x2="90" y2="195" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="90.0,202.0 86.0,195.0 94.0,195.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="20" y="18" width="18" height="18" rx="4" fill="#00f5ff"/>' +
  '<text x="48" y="32" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="start" letter-spacing="1.5">WHY AND HOW</text>' +
  '<rect x="280" y="18" width="18" height="18" rx="4" fill="#ffc23d"/>' +
  '<text x="308" y="32" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="start" letter-spacing="1.5">WHAT WE FOUND</text>' +
  '<rect x="540" y="18" width="18" height="18" rx="4" fill="#33d17a"/>' +
  '<text x="568" y="32" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="start" letter-spacing="1.5">WHAT TO DO</text>' +
  '<text x="400" y="330" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">About one minute per slide: 10 to 15 minutes in all, then questions.</text>' +
  '<text x="400" y="352" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Lead with the headline on slide 4. Every number on screen comes from your workbook.</text>' +
  '</svg>';

COURSE_FIGURES['w13-challenge'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 410" role="img" aria-label="Flow for handling a challenged score. Someone challenges a score: stay calm and thank them. Ask: do they show evidence you have not seen? If no, show your evidence by naming the IDs, explain how you chose the level, and the score stays. If yes, thank them, write it down, review it after the meeting, and change the score only if the evidence supports it. If you do not know an answer, say so and say how you will find out. Never change a score to please the room, and talk about practices, not people.">' +
  '<rect x="0" y="0" width="800" height="410" rx="12" fill="#0d0d1f"/>' +
  '<rect x="270" y="18" width="260" height="56" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="400" y="44" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ee2207" text-anchor="middle">Someone challenges a score</text>' +
  '<text x="400" y="64" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Stay calm. Thank them for the question.</text>' +
  '<line x1="400" y1="76" x2="400" y2="93" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="400.0,104.0 394.0,93.0 406.0,93.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<polygon points="400,106 560,150 400,194 240,150" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="146" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Do they show evidence</text>' +
  '<text x="400" y="165" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">you have not seen?</text>' +
  '<line x1="240" y1="150" x2="161" y2="150" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="150.0,150.0 161.0,144.0 161.0,156.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<line x1="150" y1="150" x2="150" y2="211" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="150.0,222.0 144.0,211.0 156.0,211.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<text x="195" y="140" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle">NO</text>' +
  '<line x1="560" y1="150" x2="639" y2="150" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="650.0,150.0 639.0,156.0 639.0,144.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<line x1="650" y1="150" x2="650" y2="211" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="650.0,222.0 644.0,211.0 656.0,211.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<text x="605" y="140" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle">YES</text>' +
  '<rect x="10" y="224" width="300" height="138" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="160" y="252" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#00f5ff" text-anchor="middle">Show your evidence</text>' +
  '<text x="160" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Name the IDs, for example</text>' +
  '<text x="160" y="301" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">EV-04 and SCAN-03.</text>' +
  '<text x="160" y="322" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Explain how you chose the level.</text>' +
  '<text x="160" y="343" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">The score stays.</text>' +
  '<rect x="490" y="224" width="300" height="138" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="640" y="252" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#33d17a" text-anchor="middle">Note it and review later</text>' +
  '<text x="640" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Thank them and write it down.</text>' +
  '<text x="640" y="301" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Review it after the meeting.</text>' +
  '<text x="640" y="322" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Change the score only if</text>' +
  '<text x="640" y="343" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">the evidence supports it.</text>' +
  '<rect x="320" y="250" width="160" height="90" rx="10" fill="#0d0d1f" stroke="#b794ff" stroke-width="1.5" stroke-dasharray="5 4"/>' +
  '<text x="400" y="274" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#b794ff" text-anchor="middle">Do not know?</text>' +
  '<text x="400" y="296" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">Say so, and say</text>' +
  '<text x="400" y="314" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">how you will</text>' +
  '<text x="400" y="332" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">find out.</text>' +
  '<text x="400" y="392" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Never change a score to please the room. Talk about practices, not people.</text>' +
  '</svg>';
