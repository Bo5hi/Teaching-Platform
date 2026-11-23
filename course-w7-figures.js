// Week 7 lesson diagrams (inline SVG strings). Built by docs/tools/make_week7_figures.js. Used by Lesson.html via section.figure = { id, caption }.
window.COURSE_FIGURES = window.COURSE_FIGURES || {};

COURSE_FIGURES['w7-fw-generations'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 312" role="img" aria-label="Three firewall generations side by side. A stateless filter reads only the IP and TCP headers of each packet with no memory of sessions. A stateful (layer 4) firewall also reads its state table of open sessions and drops packets that belong to no session. A next-generation (layer 7) firewall also reads the payload: the application, the user, and the content, and often includes IPS and TLS inspection.">' +
  '<rect x="0" y="0" width="800" height="312" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="238" height="250" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="139" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle">Stateless filter</text>' +
  '<text x="139" y="74" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Each packet alone</text>' +
  '<text x="139" y="102" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">WHAT IT READS</text>' +
  '<rect x="39" y="114" width="34" height="30" rx="4" fill="#ffc23d" fill-opacity="0.22" stroke="#ffc23d" stroke-width="1.5"/>' +
  '<text x="56" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#e8e8e8" text-anchor="middle">IP</text>' +
  '<rect x="77" y="114" width="40" height="30" rx="4" fill="#ffc23d" fill-opacity="0.22" stroke="#ffc23d" stroke-width="1.5"/>' +
  '<text x="97" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#e8e8e8" text-anchor="middle">TCP</text>' +
  '<rect x="121" y="114" width="52" height="30" rx="4" fill="#131329" fill-opacity="1" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="147" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#3a3a5c" text-anchor="middle">State</text>' +
  '<rect x="177" y="114" width="74" height="30" rx="4" fill="#131329" fill-opacity="1" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="214" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#3a3a5c" text-anchor="middle">Payload</text>' +
  '<line x1="38" y1="162" x2="240" y2="162" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="139" y="188" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Checks: addresses,</text>' +
  '<text x="139" y="210" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">ports, protocol</text>' +
  '<text x="139" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">No memory of sessions</text>' +
  '<line x1="260" y1="129" x2="271" y2="129" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="279.0,129.0 271.0,134.0 271.0,124.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="281" y="20" width="238" height="250" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="400" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#00f5ff" text-anchor="middle">Stateful (layer 4)</text>' +
  '<text x="400" y="74" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Packets + open sessions</text>' +
  '<text x="400" y="102" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">WHAT IT READS</text>' +
  '<rect x="300" y="114" width="34" height="30" rx="4" fill="#00f5ff" fill-opacity="0.22" stroke="#00f5ff" stroke-width="1.5"/>' +
  '<text x="317" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#e8e8e8" text-anchor="middle">IP</text>' +
  '<rect x="338" y="114" width="40" height="30" rx="4" fill="#00f5ff" fill-opacity="0.22" stroke="#00f5ff" stroke-width="1.5"/>' +
  '<text x="358" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#e8e8e8" text-anchor="middle">TCP</text>' +
  '<rect x="382" y="114" width="52" height="30" rx="4" fill="#00f5ff" fill-opacity="0.22" stroke="#00f5ff" stroke-width="1.5"/>' +
  '<text x="408" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#e8e8e8" text-anchor="middle">State</text>' +
  '<rect x="438" y="114" width="74" height="30" rx="4" fill="#131329" fill-opacity="1" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="475" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#3a3a5c" text-anchor="middle">Payload</text>' +
  '<line x1="299" y1="162" x2="501" y2="162" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="188" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Checks: headers plus</text>' +
  '<text x="400" y="210" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">the state table</text>' +
  '<text x="400" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Drops packets with no session</text>' +
  '<line x1="521" y1="129" x2="532" y2="129" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="540.0,129.0 532.0,134.0 532.0,124.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="542" y="20" width="238" height="250" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="661" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle">NGFW (layer 7)</text>' +
  '<text x="661" y="74" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Application, user, content</text>' +
  '<text x="661" y="102" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">WHAT IT READS</text>' +
  '<rect x="561" y="114" width="34" height="30" rx="4" fill="#33d17a" fill-opacity="0.22" stroke="#33d17a" stroke-width="1.5"/>' +
  '<text x="578" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#e8e8e8" text-anchor="middle">IP</text>' +
  '<rect x="599" y="114" width="40" height="30" rx="4" fill="#33d17a" fill-opacity="0.22" stroke="#33d17a" stroke-width="1.5"/>' +
  '<text x="619" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#e8e8e8" text-anchor="middle">TCP</text>' +
  '<rect x="643" y="114" width="52" height="30" rx="4" fill="#33d17a" fill-opacity="0.22" stroke="#33d17a" stroke-width="1.5"/>' +
  '<text x="669" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#e8e8e8" text-anchor="middle">State</text>' +
  '<rect x="699" y="114" width="74" height="30" rx="4" fill="#33d17a" fill-opacity="0.22" stroke="#33d17a" stroke-width="1.5"/>' +
  '<text x="736" y="134" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#e8e8e8" text-anchor="middle">Payload</text>' +
  '<line x1="560" y1="162" x2="762" y2="162" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="661" y="188" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Checks: what the app</text>' +
  '<text x="661" y="210" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">is doing, who the user is</text>' +
  '<text x="661" y="232" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Often includes IPS + TLS inspection</text>' +
  '<text x="400" y="296" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Each generation reads deeper into the traffic. Only the NGFW can tell what an allowed connection is doing.</text>' +
  '</svg>';

COURSE_FIGURES['w7-screened-subnet'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 292" role="img" aria-label="Screened subnet diagram. The internet (untrusted) connects through Firewall 1, which allows only port 443 to the public web server, into the screened subnet or DMZ (semi-trusted) holding the public web server and an email gateway. Firewall 2 allows only what the web server needs into the internal network (trusted) with office PCs, file servers, and the domain controller. There is no direct path from the internet to the internal network.">' +
  '<rect x="0" y="0" width="800" height="292" rx="12" fill="#0d0d1f"/>' +
  '<rect x="16" y="70" width="132" height="150" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="82" y="128" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ee2207" text-anchor="middle">Internet</text>' +
  '<text x="82" y="152" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Untrusted</text>' +
  '<rect x="176" y="64" width="54" height="162" rx="6" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<line x1="182" y1="84" x2="224" y2="84" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="182" y1="108" x2="224" y2="108" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="182" y1="132" x2="224" y2="132" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="182" y1="156" x2="224" y2="156" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="182" y1="180" x2="224" y2="180" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="182" y1="204" x2="224" y2="204" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<text x="203" y="252" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1">FIREWALL 1</text>' +
  '<rect x="258" y="70" width="220" height="150" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="368" y="102" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#00f5ff" text-anchor="middle">Screened subnet (DMZ)</text>' +
  '<text x="368" y="122" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Semi-trusted</text>' +
  '<rect x="282" y="136" width="172" height="26" rx="5" fill="#0d0d1f" stroke="#00f5ff" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="368" y="154" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Public web server</text>' +
  '<rect x="282" y="166" width="172" height="26" rx="5" fill="#0d0d1f" stroke="#00f5ff" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="368" y="184" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Email gateway</text>' +
  '<rect x="506" y="64" width="54" height="162" rx="6" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<line x1="512" y1="84" x2="554" y2="84" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="512" y1="108" x2="554" y2="108" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="512" y1="132" x2="554" y2="132" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="512" y1="156" x2="554" y2="156" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="512" y1="180" x2="554" y2="180" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<line x1="512" y1="204" x2="554" y2="204" fill="none" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.45"/>' +
  '<text x="533" y="252" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1">FIREWALL 2</text>' +
  '<rect x="588" y="70" width="196" height="150" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="686" y="102" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="middle">Internal network</text>' +
  '<text x="686" y="122" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Trusted</text>' +
  '<rect x="610" y="136" width="152" height="26" rx="5" fill="#0d0d1f" stroke="#33d17a" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="686" y="154" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Office PCs</text>' +
  '<rect x="610" y="166" width="152" height="26" rx="5" fill="#0d0d1f" stroke="#33d17a" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="686" y="184" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">File servers, DC</text>' +
  '<line x1="148" y1="44" x2="247" y2="44" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="258.0,44.0 247.0,50.0 247.0,38.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<text x="203" y="34" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Allow 443 to web</text>' +
  '<line x1="478" y1="44" x2="577" y2="44" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="588.0,44.0 577.0,50.0 577.0,38.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<text x="533" y="34" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Only what web needs</text>' +
  '<line x1="150" y1="22" x2="586" y2="22" fill="none" stroke="#ee2207" stroke-width="1.5" stroke-dasharray="5 5"/>' +
  '<text x="368" y="16" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#ee2207" text-anchor="middle">Internet to internal: no direct path</text>' +
  '<text x="400" y="274" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">If the web server is taken over, the attacker still faces Firewall 2 before reaching office PCs and file servers.</text>' +
  '</svg>';

COURSE_FIGURES['w7-ids-ips'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 374" role="img" aria-label="IDS versus IPS placement. Top row: traffic flows from the internet through a switch to the servers, and a copy of the traffic goes from a SPAN port or tap to an IDS sensor, which only raises an alert that a person must act on. Bottom row: traffic flows from the internet through an inline IPS, then the switch, then the servers, and the IPS drops the attack before it arrives.">' +
  '<rect x="0" y="0" width="800" height="374" rx="12" fill="#0d0d1f"/>' +
  '<text x="20" y="34" font-family="Share Tech Mono, Consolas, monospace" font-size="14" font-weight="400" fill="#00f5ff" text-anchor="start" letter-spacing="1.5">IDS: PASSIVE</text>' +
  '<rect x="20" y="52" width="120" height="40" rx="8" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="80" y="78" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Internet</text>' +
  '<rect x="260" y="52" width="120" height="40" rx="8" fill="#131329" stroke="#e8e8e8" stroke-width="2"/>' +
  '<text x="320" y="78" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Switch</text>' +
  '<rect x="520" y="52" width="140" height="40" rx="8" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="590" y="78" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Servers</text>' +
  '<line x1="140" y1="72" x2="247" y2="72" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="258.0,72.0 247.0,78.0 247.0,66.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="380" y1="72" x2="507" y2="72" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="518.0,72.0 507.0,78.0 507.0,66.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<text x="450" y="64" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="middle">traffic flows on</text>' +
  '<line x1="320" y1="92" x2="320" y2="129" fill="none" stroke="#00f5ff" stroke-width="2" stroke-dasharray="5 4"/><polygon points="320.0,140.0 314.0,129.0 326.0,129.0" fill="#00f5ff"/>' +
  '<text x="332" y="122" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#00f5ff" text-anchor="start">copy (SPAN port or tap)</text>' +
  '<rect x="255" y="142" width="130" height="40" rx="8" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="320" y="168" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">IDS sensor</text>' +
  '<line x1="385" y1="162" x2="459" y2="162" fill="none" stroke="#ffc23d" stroke-width="2"/><polygon points="470.0,162.0 459.0,168.0 459.0,156.0" fill="#ffc23d"/>' +
  '<rect x="472" y="146" width="200" height="32" rx="16" fill="#ffc23d" fill-opacity="0.15" stroke="#ffc23d" stroke-width="1.5"/>' +
  '<text x="572" y="167" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#ffc23d" text-anchor="middle">Alert. A person must act.</text>' +
  '<line x1="20" y1="204" x2="780" y2="204" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="20" y="236" font-family="Share Tech Mono, Consolas, monospace" font-size="14" font-weight="400" fill="#33d17a" text-anchor="start" letter-spacing="1.5">IPS: INLINE</text>' +
  '<rect x="20" y="254" width="120" height="40" rx="8" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="80" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Internet</text>' +
  '<rect x="220" y="254" width="120" height="40" rx="8" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="280" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">IPS</text>' +
  '<rect x="410" y="254" width="110" height="40" rx="8" fill="#131329" stroke="#e8e8e8" stroke-width="2"/>' +
  '<text x="465" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Switch</text>' +
  '<rect x="600" y="254" width="140" height="40" rx="8" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="670" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Servers</text>' +
  '<line x1="140" y1="274" x2="207" y2="274" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="218.0,274.0 207.0,280.0 207.0,268.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="340" y1="274" x2="397" y2="274" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="408.0,274.0 397.0,280.0 397.0,268.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="520" y1="274" x2="587" y2="274" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="598.0,274.0 587.0,280.0 587.0,268.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="268" y1="304" x2="292" y2="328" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<line x1="292" y1="304" x2="268" y2="328" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<text x="304" y="322" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#ee2207" text-anchor="start">Drops the attack before it arrives</text>' +
  '<text x="400" y="356" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">An IDS cannot slow the network but cannot stop anything. An IPS can block, and can also block by mistake.</text>' +
  '</svg>';

COURSE_FIGURES['w7-alert-matrix'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 362" role="img" aria-label="Alert outcome matrix with four boxes. True positive: a real attack and a real alert, for example the large upload alert on MKT-LT-02. False positive: harmless activity that raised an alert, for example the payroll portal on port 8443. False negative: a real attack with no alert, the worst case, for example Equifax\'s uninspected encrypted traffic. True negative: harmless activity and no alert, for example Friday afternoon web browsing.">' +
  '<rect x="0" y="0" width="800" height="362" rx="12" fill="#0d0d1f"/>' +
  '<text x="320" y="40" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="middle">Attack really happened</text>' +
  '<text x="630" y="40" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="middle">Nothing bad happened</text>' +
  '<text x="84" y="130" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="middle">Alert raised</text>' +
  '<text x="84" y="260" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="middle">No alert</text>' +
  '<rect x="170" y="64" width="300" height="120" rx="10" fill="#33d17a" fill-opacity="0.08" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="320" y="98" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle">True positive</text>' +
  '<text x="320" y="122" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Real attack, real alert</text>' +
  '<text x="320" y="148" font-family="Share Tech Mono, Consolas, monospace" font-size="11" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">EXAMPLE</text>' +
  '<text x="320" y="168" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Large upload alert on MKT-LT-02</text>' +
  '<rect x="480" y="64" width="300" height="120" rx="10" fill="#ffc23d" fill-opacity="0.08" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="630" y="98" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle">False positive</text>' +
  '<text x="630" y="122" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Harmless, but alerted: noise</text>' +
  '<text x="630" y="148" font-family="Share Tech Mono, Consolas, monospace" font-size="11" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">EXAMPLE</text>' +
  '<text x="630" y="168" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Payroll portal on port 8443</text>' +
  '<rect x="170" y="194" width="300" height="120" rx="10" fill="#ee2207" fill-opacity="0.08" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="320" y="228" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ee2207" text-anchor="middle">False negative</text>' +
  '<text x="320" y="252" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Real attack, silence: worst case</text>' +
  '<text x="320" y="278" font-family="Share Tech Mono, Consolas, monospace" font-size="11" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">EXAMPLE</text>' +
  '<text x="320" y="298" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Equifax: uninspected encrypted traffic</text>' +
  '<rect x="480" y="194" width="300" height="120" rx="10" fill="#33d17a" fill-opacity="0.08" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="630" y="228" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle">True negative</text>' +
  '<text x="630" y="252" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Harmless, and quiet</text>' +
  '<text x="630" y="278" font-family="Share Tech Mono, Consolas, monospace" font-size="11" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">EXAMPLE</text>' +
  '<text x="630" y="298" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Friday afternoon web browsing</text>' +
  '<text x="400" y="344" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Tuning reduces false positives without creating false negatives. Switching a rule off does the opposite.</text>' +
  '</svg>';

COURSE_FIGURES['w7-siem-pipeline'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 308" role="img" aria-label="SIEM pipeline. Log sources (firewall, IDS or IPS, EDR, DNS, DC01 sign-ins, apps and cloud) feed four stages: Collect (agents, syslog, API pulls), Normalize (parse formats into common fields with NTP time), Correlate (rules across sources by time, host, and account), and Alert (dashboard, ticket, on-call analyst). Underneath, Retain keeps logs searchable for weeks and archived for longer, because breaches are found late.">' +
  '<rect x="0" y="0" width="800" height="308" rx="12" fill="#0d0d1f"/>' +
  '<text x="70" y="30" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">LOG SOURCES</text>' +
  '<rect x="14" y="42" width="112" height="30" rx="6" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="70" y="62" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">Firewall</text>' +
  '<line x1="126" y1="57" x2="150" y2="144" fill="none" stroke="#3a3a5c" stroke-width="1.2"/>' +
  '<rect x="14" y="80" width="112" height="30" rx="6" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="70" y="100" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">IDS / IPS</text>' +
  '<line x1="126" y1="95" x2="150" y2="144" fill="none" stroke="#3a3a5c" stroke-width="1.2"/>' +
  '<rect x="14" y="118" width="112" height="30" rx="6" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="70" y="138" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">EDR</text>' +
  '<line x1="126" y1="133" x2="150" y2="144" fill="none" stroke="#3a3a5c" stroke-width="1.2"/>' +
  '<rect x="14" y="156" width="112" height="30" rx="6" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="70" y="176" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">DNS</text>' +
  '<line x1="126" y1="171" x2="150" y2="144" fill="none" stroke="#3a3a5c" stroke-width="1.2"/>' +
  '<rect x="14" y="194" width="112" height="30" rx="6" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="70" y="214" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">DC01 sign-ins</text>' +
  '<line x1="126" y1="209" x2="150" y2="144" fill="none" stroke="#3a3a5c" stroke-width="1.2"/>' +
  '<rect x="14" y="232" width="112" height="30" rx="6" fill="#131329" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="70" y="252" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">Apps / cloud</text>' +
  '<line x1="126" y1="247" x2="150" y2="144" fill="none" stroke="#3a3a5c" stroke-width="1.2"/>' +
  '<rect x="156" y="82" width="132" height="124" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="222" y="114" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#00f5ff" text-anchor="middle">Collect</text>' +
  '<text x="222" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">Agents, syslog,</text>' +
  '<text x="222" y="161" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">API pulls</text>' +
  '<line x1="290" y1="144" x2="300" y2="144" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="308.0,144.0 300.0,149.0 300.0,139.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="310" y="82" width="132" height="124" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="376" y="114" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#b794ff" text-anchor="middle">Normalize</text>' +
  '<text x="376" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">Parse formats,</text>' +
  '<text x="376" y="161" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">common fields,</text>' +
  '<text x="376" y="180" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">NTP time</text>' +
  '<line x1="444" y1="144" x2="454" y2="144" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="462.0,144.0 454.0,149.0 454.0,139.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="464" y="82" width="132" height="124" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="530" y="114" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#ffc23d" text-anchor="middle">Correlate</text>' +
  '<text x="530" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">Rules across</text>' +
  '<text x="530" y="161" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">sources, time,</text>' +
  '<text x="530" y="180" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">host, account</text>' +
  '<line x1="598" y1="144" x2="608" y2="144" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="616.0,144.0 608.0,149.0 608.0,139.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="618" y="82" width="132" height="124" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="684" y="114" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#ee2207" text-anchor="middle">Alert</text>' +
  '<text x="684" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">Dashboard,</text>' +
  '<text x="684" y="161" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">ticket, on-call</text>' +
  '<text x="684" y="180" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">analyst</text>' +
  '<rect x="156" y="226" width="594" height="34" rx="8" fill="#131329" stroke="#33d17a" stroke-width="1.5"/>' +
  '<text x="453" y="248" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#e8e8e8" text-anchor="middle">Retain: keep logs searchable for weeks and archived for longer, because breaches are found late</text>' +
  '<text x="400" y="290" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">A SIEM detects and alerts. People and playbooks (SOAR) do the responding.</text>' +
  '</svg>';

COURSE_FIGURES['w7-av-vs-edr'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 334" role="img" aria-label="Antivirus versus EDR. Antivirus hashes the file Q4_Invoice_Review.xlsm and compares it with a signature list; with no match the new file is allowed to run, so antivirus is blind to zero-days and changed files. EDR watches behavior: Excel opens the document, PowerShell runs an encoded command, synchelper.exe is added to the Run key, and the laptop connects out every 10 minutes. Under a Protect policy EDR kills the process and isolates the host; under Detect it only alerts.">' +
  '<rect x="0" y="0" width="800" height="334" rx="12" fill="#0d0d1f"/>' +
  '<rect x="16" y="20" width="330" height="270" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="181" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#ffc23d" text-anchor="middle">Antivirus</text>' +
  '<text x="181" y="74" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">Does this file match something known?</text>' +
  '<rect x="46" y="96" width="270" height="34" rx="6" fill="#0d0d1f" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="181" y="118" font-family="Share Tech Mono, Consolas, monospace" font-size="14" font-weight="400" fill="#e8e8e8" text-anchor="middle">Q4_Invoice_Review.xlsm</text>' +
  '<line x1="181" y1="132" x2="181" y2="145" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="181.0,156.0 175.0,145.0 187.0,145.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="46" y="158" width="270" height="34" rx="6" fill="#0d0d1f" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<text x="181" y="180" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">hash 9f2c...  vs  signature list</text>' +
  '<line x1="181" y1="194" x2="181" y2="207" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="181.0,218.0 175.0,207.0 187.0,207.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<text x="181" y="238" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#ee2207" text-anchor="middle">No match: new file, allowed to run</text>' +
  '<text x="181" y="266" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Blind to zero-days and changed files</text>' +
  '<rect x="366" y="20" width="418" height="270" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="575" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#00f5ff" text-anchor="middle">EDR</text>' +
  '<text x="575" y="74" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">What is this program doing?</text>' +
  '<rect x="392" y="92" width="300" height="28" rx="6" fill="#0d0d1f" stroke="#e8e8e8" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="542" y="111" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">EXCEL.EXE opens the document</text>' +
  '<line x1="402" y1="120" x2="402" y2="130" fill="none" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<rect x="408" y="130" width="300" height="28" rx="6" fill="#0d0d1f" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="558" y="149" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">powershell.exe -enc ...</text>' +
  '<line x1="418" y1="158" x2="418" y2="168" fill="none" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<rect x="424" y="168" width="300" height="28" rx="6" fill="#0d0d1f" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="574" y="187" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">synchelper.exe added to Run key</text>' +
  '<line x1="434" y1="196" x2="434" y2="206" fill="none" stroke="#3a3a5c" stroke-width="1.5"/>' +
  '<rect x="440" y="206" width="300" height="28" rx="6" fill="#0d0d1f" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="590" y="225" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">Connects out every 10 minutes</text>' +
  '<rect x="392" y="248" width="176" height="30" rx="6" fill="#33d17a" fill-opacity="0.12" stroke="#33d17a" stroke-width="1.5"/>' +
  '<text x="480" y="268" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#33d17a" text-anchor="middle">Protect: kill + isolate</text>' +
  '<rect x="584" y="248" width="176" height="30" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.5"/>' +
  '<text x="672" y="268" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#ffc23d" text-anchor="middle">Detect: alert only</text>' +
  '<text x="400" y="316" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">The same macro: antivirus sees an unknown file; EDR sees a chain of suspicious behavior.</text>' +
  '</svg>';

COURSE_FIGURES['w7-patch-cycle'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 380" role="img" aria-label="Patch management cycle with six steps around a loop: 1 Inventory (know every system), 2 Monitor (vendor advisories and the CISA KEV catalog), 3 Prioritize (severity plus exposure), 4 Test (pilot group and a rollback plan), 5 Deploy (in waves, through change management), 6 Verify and report (rescan and record exceptions), then back to inventory. The cycle repeats every month.">' +
  '<rect x="0" y="0" width="800" height="380" rx="12" fill="#0d0d1f"/>' +
  '<ellipse cx="400" cy="190" rx="204.6" ry="132" fill="none" stroke="#3a3a5c" stroke-width="2" stroke-dasharray="6 6"/>' +
  '<rect x="318" y="28" width="164" height="60" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="400" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#00f5ff" text-anchor="middle">1. Inventory</text>' +
  '<text x="400" y="75" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Know every system</text>' +
  '<rect x="495.18879761429616" y="94.00000000000001" width="164" height="60" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="577.1887976142962" y="120.00000000000001" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#b794ff" text-anchor="middle">2. Monitor</text>' +
  '<text x="577.1887976142962" y="141" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Advisories, KEV</text>' +
  '<rect x="495.18879761429616" y="226" width="164" height="60" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="577.1887976142962" y="252" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ffc23d" text-anchor="middle">3. Prioritize</text>' +
  '<text x="577.1887976142962" y="273" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Severity + exposure</text>' +
  '<rect x="318" y="292" width="164" height="60" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="400" y="318" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ff8a4c" text-anchor="middle">4. Test</text>' +
  '<text x="400" y="339" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Pilot, rollback plan</text>' +
  '<rect x="140.81120238570384" y="226" width="164" height="60" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="222.81120238570384" y="252" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#33d17a" text-anchor="middle">5. Deploy</text>' +
  '<text x="222.81120238570384" y="273" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Waves, change mgmt</text>' +
  '<rect x="140.81120238570387" y="93.99999999999999" width="164" height="60" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="222.81120238570387" y="119.99999999999999" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ff7aa2" text-anchor="middle">6. Verify + report</text>' +
  '<text x="222.81120238570387" y="141" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Rescan, exceptions</text>' +
  '<line x1="491.1" y1="71.5" x2="505.1" y2="76.7" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="513.5,79.9 503.3,81.4 506.8,72.1" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="604.6" y1="178" x2="604.6" y2="193" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="604.6,202.0 599.6,193.0 609.6,193.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="513.5" y1="300.1" x2="499.5" y2="305.3" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="491.1,308.5 497.8,300.7 501.3,310.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="308.9" y1="308.5" x2="294.9" y2="303.3" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="286.5,300.1 296.7,298.6 293.2,307.9" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="195.4" y1="202" x2="195.4" y2="187" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="195.4,178.0 200.4,187.0 190.4,187.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<line x1="286.5" y1="79.9" x2="300.5" y2="74.7" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="308.9,71.5 302.2,79.3 298.7,70.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<text x="400" y="184" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#e8e8e8" text-anchor="middle">Patch management</text>' +
  '<text x="400" y="206" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#a0a0ac" text-anchor="middle">repeats every month</text>' +
  '</svg>';

COURSE_FIGURES['w7-patch-timelines'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 330" role="img" aria-label="Two 2017 timelines from March to September. WannaCry: Microsoft released patch MS17-010 in March, the EternalBlue exploit was leaked in April, and WannaCry spread on May 12. Equifax: the Apache Struts fix and the US-CERT notice came in early March, attackers entered the dispute portal on May 13, the intrusion was detected on July 29, and the breach was announced on September 7. In both cases the fix was available about two months before the damage started.">' +
  '<rect x="0" y="0" width="800" height="330" rx="12" fill="#0d0d1f"/>' +
  '<line x1="110" y1="40" x2="110" y2="286" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.5"/>' +
  '<text x="114" y="30" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="start">Mar 2017</text>' +
  '<line x1="211.53846153846155" y1="40" x2="211.53846153846155" y2="286" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.5"/>' +
  '<text x="215.53846153846155" y="30" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="start">Apr 2017</text>' +
  '<line x1="313.0769230769231" y1="40" x2="313.0769230769231" y2="286" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.5"/>' +
  '<text x="317.0769230769231" y="30" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="start">May 2017</text>' +
  '<line x1="414.61538461538464" y1="40" x2="414.61538461538464" y2="286" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.5"/>' +
  '<text x="418.61538461538464" y="30" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="start">Jun 2017</text>' +
  '<line x1="516.1538461538462" y1="40" x2="516.1538461538462" y2="286" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.5"/>' +
  '<text x="520.1538461538462" y="30" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="start">Jul 2017</text>' +
  '<line x1="617.6923076923076" y1="40" x2="617.6923076923076" y2="286" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.5"/>' +
  '<text x="621.6923076923076" y="30" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="start">Aug 2017</text>' +
  '<line x1="719.2307692307693" y1="40" x2="719.2307692307693" y2="286" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.5"/>' +
  '<text x="723.2307692307693" y="30" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="500" fill="#a0a0ac" text-anchor="start">Sep 2017</text>' +
  '<text x="14" y="115" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#00f5ff" text-anchor="start">WannaCry</text>' +
  '<line x1="110" y1="110" x2="770" y2="110" fill="none" stroke="#00f5ff" stroke-width="3" stroke-opacity="0.5"/>' +
  '<circle cx="155.69230769230768" cy="110" r="7" fill="#33d17a" stroke="#0d0d1f" stroke-width="2"/>' +
  '<text x="155.69230769230768" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">MS17-010 released</text>' +
  '<text x="155.69230769230768" y="153" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">patch available</text>' +
  '<circle cx="257.2307692307692" cy="110" r="7" fill="#00f5ff" stroke="#0d0d1f" stroke-width="2"/>' +
  '<text x="257.2307692307692" y="77" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">EternalBlue</text>' +
  '<text x="257.2307692307692" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">exploit leaked</text>' +
  '<circle cx="351.66153846153844" cy="110" r="7" fill="#ee2207" stroke="#0d0d1f" stroke-width="2"/>' +
  '<text x="351.66153846153844" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">WannaCry spreads</text>' +
  '<text x="351.66153846153844" y="153" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">May 12</text>' +
  '<text x="14" y="237" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ffc23d" text-anchor="start">Equifax</text>' +
  '<line x1="110" y1="232" x2="770" y2="232" fill="none" stroke="#ffc23d" stroke-width="3" stroke-opacity="0.5"/>' +
  '<circle cx="130.30769230769232" cy="232" r="7" fill="#33d17a" stroke="#0d0d1f" stroke-width="2"/>' +
  '<text x="130.30769230769232" y="199" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Struts fix + US-CERT</text>' +
  '<text x="130.30769230769232" y="216" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">notice (early March)</text>' +
  '<circle cx="355.7230769230769" cy="232" r="7" fill="#ee2207" stroke="#0d0d1f" stroke-width="2"/>' +
  '<text x="355.7230769230769" y="258" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Attackers in portal</text>' +
  '<text x="355.7230769230769" y="275" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">May 13</text>' +
  '<circle cx="611.6" cy="232" r="7" fill="#ffc23d" stroke="#0d0d1f" stroke-width="2"/>' +
  '<text x="611.6" y="199" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Intrusion detected</text>' +
  '<text x="611.6" y="216" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">July 29</text>' +
  '<circle cx="739.5384615384615" cy="232" r="7" fill="#ffc23d" stroke="#0d0d1f" stroke-width="2"/>' +
  '<text x="739.5384615384615" y="258" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Announced</text>' +
  '<text x="739.5384615384615" y="275" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Sept 7</text>' +
  '<text x="400" y="312" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Green: the fix was available. Red: the damage started. Both gaps were about two months.</text>' +
  '</svg>';
