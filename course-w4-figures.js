// Week 4 lesson diagrams (inline SVG strings). Used by Lesson.html via section.figure = { id, caption }.
// Rebuild: node docs/tools/make_week4_figures.js course-w4-figures.js
window.COURSE_FIGURES = window.COURSE_FIGURES || {};

COURSE_FIGURES['osi-tcpip'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 490" role="img" aria-label="The seven OSI layers beside the four TCP/IP layers. Layer 7 Application, 6 Presentation and 5 Session map to the TCP/IP Application layer (HTTP, DNS, FTP, Telnet, SSH, Modbus; TLS; sessions). Layer 4 Transport maps to Transport (TCP and UDP ports such as 21, 23, 445, 502; unit: segment). Layer 3 Network maps to Internet (IP addresses, routing, ICMP; unit: packet). Layers 2 Data link and 1 Physical map to Link (Ethernet, MAC, ARP, Wi-Fi, cables and radio; units: frame and bits).">' +
  '<rect x="0" y="0" width="800" height="490" rx="12" fill="#0d0d1f"/>' +
  '<text x="150" y="30" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">OSI MODEL</text>' +
  '<text x="440" y="30" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">WHAT YOU SEE IN THE LABS</text>' +
  '<text x="690" y="30" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">TCP/IP MODEL</text>' +
  '<rect x="20" y="50" width="260" height="52" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="44" y="83" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#00f5ff" text-anchor="middle">7</text>' +
  '<text x="70" y="83" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="start">Application</text>' +
  '<text x="268" y="82" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="end" letter-spacing="1">DATA</text>' +
  '<rect x="292" y="50" width="300" height="52" rx="10" fill="#131329" fill-opacity="0.6"/>' +
  '<text x="306" y="81" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">HTTP, DNS, FTP, Telnet, SSH, Modbus</text>' +
  '<rect x="20" y="108" width="260" height="52" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="44" y="141" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#00f5ff" text-anchor="middle">6</text>' +
  '<text x="70" y="141" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="start">Presentation</text>' +
  '<text x="268" y="140" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="end" letter-spacing="1">DATA</text>' +
  '<rect x="292" y="108" width="300" height="52" rx="10" fill="#131329" fill-opacity="0.6"/>' +
  '<text x="306" y="139" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">TLS encryption, encoding, formats</text>' +
  '<rect x="20" y="166" width="260" height="52" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="44" y="199" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#00f5ff" text-anchor="middle">5</text>' +
  '<text x="70" y="199" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="start">Session</text>' +
  '<text x="268" y="198" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="end" letter-spacing="1">DATA</text>' +
  '<rect x="292" y="166" width="300" height="52" rx="10" fill="#131329" fill-opacity="0.6"/>' +
  '<text x="306" y="197" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Opening and keeping conversations</text>' +
  '<rect x="20" y="224" width="260" height="52" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="44" y="257" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#33d17a" text-anchor="middle">4</text>' +
  '<text x="70" y="257" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="start">Transport</text>' +
  '<text x="268" y="256" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="end" letter-spacing="1">SEGMENT</text>' +
  '<rect x="292" y="224" width="300" height="52" rx="10" fill="#131329" fill-opacity="0.6"/>' +
  '<text x="306" y="255" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">TCP and UDP ports: 21, 23, 445, 502</text>' +
  '<rect x="20" y="282" width="260" height="52" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="44" y="315" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#ffc23d" text-anchor="middle">3</text>' +
  '<text x="70" y="315" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="start">Network</text>' +
  '<text x="268" y="314" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="end" letter-spacing="1">PACKET</text>' +
  '<rect x="292" y="282" width="300" height="52" rx="10" fill="#131329" fill-opacity="0.6"/>' +
  '<text x="306" y="313" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">IP addresses and routing; ICMP ping</text>' +
  '<rect x="20" y="340" width="260" height="52" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="44" y="373" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#b794ff" text-anchor="middle">2</text>' +
  '<text x="70" y="373" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="start">Data link</text>' +
  '<text x="268" y="372" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="end" letter-spacing="1">FRAME</text>' +
  '<rect x="292" y="340" width="300" height="52" rx="10" fill="#131329" fill-opacity="0.6"/>' +
  '<text x="306" y="371" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Ethernet, MAC addresses, ARP, Wi-Fi</text>' +
  '<rect x="20" y="398" width="260" height="52" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="44" y="431" font-family="Rajdhani, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#b794ff" text-anchor="middle">1</text>' +
  '<text x="70" y="431" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#e8e8e8" text-anchor="start">Physical</text>' +
  '<text x="268" y="430" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="end" letter-spacing="1">BITS</text>' +
  '<rect x="292" y="398" width="300" height="52" rx="10" fill="#131329" fill-opacity="0.6"/>' +
  '<text x="306" y="429" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Cable, fiber, and radio signals</text>' +
  '<rect x="604" y="50" width="176" height="168" rx="10" fill="#00f5ff" fill-opacity="0.1" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="692" y="141" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#00f5ff" text-anchor="middle">Application</text>' +
  '<rect x="604" y="224" width="176" height="52" rx="10" fill="#33d17a" fill-opacity="0.1" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="692" y="257" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle">Transport</text>' +
  '<rect x="604" y="282" width="176" height="52" rx="10" fill="#ffc23d" fill-opacity="0.1" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="692" y="315" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle">Internet</text>' +
  '<rect x="604" y="340" width="176" height="110" rx="10" fill="#b794ff" fill-opacity="0.1" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="692" y="402" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#b794ff" text-anchor="middle">Link</text>' +
  '<text x="400" y="474" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Sending wraps the data in a header at each layer (encapsulation); receiving unwraps it.</text>' +
  '</svg>';

COURSE_FIGURES['tcp-handshake'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 344" role="img" aria-label="TCP versus UDP. TCP: the client sends SYN, the server replies SYN-ACK, the client sends ACK, then data flows with numbering and retransmission. UDP: a DNS query goes out and an answer comes back with no handshake and no delivery check. In tcpdump, Flags S is SYN, S dot is SYN-ACK, dot is ACK, P dot is data, F dot is FIN.">' +
  '<rect x="0" y="0" width="800" height="344" rx="12" fill="#0d0d1f"/>' +
  '<text x="205" y="28" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#33d17a" text-anchor="middle">TCP: connection first</text>' +
  '<rect x="30" y="44" width="100" height="34" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="80" y="66" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Client</text>' +
  '<rect x="280" y="44" width="100" height="34" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="330" y="66" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Server</text>' +
  '<line x1="80" y1="78" x2="80" y2="300" fill="none" stroke="#3a3a5c" stroke-width="2" stroke-dasharray="4 4"/>' +
  '<line x1="330" y1="78" x2="330" y2="300" fill="none" stroke="#3a3a5c" stroke-width="2" stroke-dasharray="4 4"/>' +
  '<line x1="80" y1="108" x2="319" y2="127.1" fill="none" stroke="#00f5ff" stroke-width="2"/><polygon points="330.0,128.0 318.6,133.1 319.5,121.1" fill="#00f5ff"/>' +
  '<text x="205" y="98" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#00f5ff" text-anchor="middle">1. SYN</text>' +
  '<line x1="330" y1="150" x2="91" y2="169.1" fill="none" stroke="#00f5ff" stroke-width="2"/><polygon points="80.0,170.0 90.5,163.1 91.4,175.1" fill="#00f5ff"/>' +
  '<text x="205" y="140" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#00f5ff" text-anchor="middle">2. SYN-ACK</text>' +
  '<line x1="80" y1="192" x2="319" y2="211.1" fill="none" stroke="#00f5ff" stroke-width="2"/><polygon points="330.0,212.0 318.6,217.1 319.5,205.1" fill="#00f5ff"/>' +
  '<text x="205" y="182" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#00f5ff" text-anchor="middle">3. ACK</text>' +
  '<line x1="80" y1="238" x2="319" y2="257.1" fill="none" stroke="#33d17a" stroke-width="2"/><polygon points="330.0,258.0 318.6,263.1 319.5,251.1" fill="#33d17a"/>' +
  '<text x="205" y="228" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#33d17a" text-anchor="middle">Data (numbered, resent if lost)</text>' +
  '<line x1="400" y1="40" x2="400" y2="300" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="605" y="28" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle">UDP: just send</text>' +
  '<rect x="430" y="44" width="100" height="34" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="480" y="66" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Client</text>' +
  '<rect x="680" y="44" width="100" height="34" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="730" y="66" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Server</text>' +
  '<line x1="480" y1="78" x2="480" y2="300" fill="none" stroke="#3a3a5c" stroke-width="2" stroke-dasharray="4 4"/>' +
  '<line x1="730" y1="78" x2="730" y2="300" fill="none" stroke="#3a3a5c" stroke-width="2" stroke-dasharray="4 4"/>' +
  '<line x1="480" y1="108" x2="719" y2="127.1" fill="none" stroke="#ffc23d" stroke-width="2"/><polygon points="730.0,128.0 718.6,133.1 719.5,121.1" fill="#ffc23d"/>' +
  '<text x="605" y="98" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#ffc23d" text-anchor="middle">DNS query</text>' +
  '<line x1="730" y1="150" x2="491" y2="169.1" fill="none" stroke="#ffc23d" stroke-width="2"/><polygon points="480.0,170.0 490.5,163.1 491.4,175.1" fill="#ffc23d"/>' +
  '<text x="605" y="140" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#ffc23d" text-anchor="middle">DNS answer</text>' +
  '<text x="605" y="214" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">No handshake, no delivery check.</text>' +
  '<text x="605" y="234" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Fast; used by DNS, NTP, voice, video.</text>' +
  '<text x="400" y="326" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">In tcpdump: Flags [S] = SYN, [S.] = SYN-ACK, [.] = ACK, [P.] = data, [F.] = FIN (closing).</text>' +
  '</svg>';

COURSE_FIGURES['secure-protocols'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 476" role="img" aria-label="Cleartext protocols and their secure replacements: Telnet 23 to SSH 22; FTP 20 and 21 to SFTP (inside SSH) or FTPS (FTP with TLS); HTTP 80 to HTTPS 443; LDAP 389 to LDAPS 636; SNMP version 1 or 2c to SNMPv3; POP3 110 and IMAP 143 to POP3S 995 and IMAPS 993; SMTP 25 to SMTPS 465 or STARTTLS on 25 and 587; DNS 53 to DNSSEC for signed answers and DNS over HTTPS or TLS for encryption. Use TLS 1.2 or 1.3.">' +
  '<rect x="0" y="0" width="800" height="476" rx="12" fill="#0d0d1f"/>' +
  '<text x="160" y="30" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ee2207" text-anchor="middle" letter-spacing="1.5">CLEARTEXT</text>' +
  '<text x="560" y="30" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">SECURE REPLACEMENT</text>' +
  '<rect x="20" y="46" width="280" height="42" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="38" y="73" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">Telnet</text>' +
  '<text x="286" y="72" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">23</text>' +
  '<line x1="306" y1="67" x2="343" y2="67" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="352.0,67.0 343.0,72.0 343.0,62.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="358" y="46" width="422" height="42" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="376" y="73" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">SSH</text>' +
  '<text x="766" y="72" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">22</text>' +
  '<rect x="20" y="96" width="280" height="42" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="38" y="123" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">FTP</text>' +
  '<text x="286" y="122" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">20, 21</text>' +
  '<line x1="306" y1="117" x2="343" y2="117" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="352.0,117.0 343.0,122.0 343.0,112.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="358" y="96" width="422" height="42" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="376" y="123" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">SFTP (in SSH) or FTPS (FTP + TLS)</text>' +
  '<text x="766" y="122" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">22 / TLS</text>' +
  '<rect x="20" y="146" width="280" height="42" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="38" y="173" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">HTTP</text>' +
  '<text x="286" y="172" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">80</text>' +
  '<line x1="306" y1="167" x2="343" y2="167" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="352.0,167.0 343.0,172.0 343.0,162.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="358" y="146" width="422" height="42" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="376" y="173" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">HTTPS (HTTP + TLS)</text>' +
  '<text x="766" y="172" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">443</text>' +
  '<rect x="20" y="196" width="280" height="42" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="38" y="223" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">LDAP</text>' +
  '<text x="286" y="222" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">389</text>' +
  '<line x1="306" y1="217" x2="343" y2="217" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="352.0,217.0 343.0,222.0 343.0,212.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="358" y="196" width="422" height="42" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="376" y="223" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">LDAPS</text>' +
  '<text x="766" y="222" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">636</text>' +
  '<rect x="20" y="246" width="280" height="42" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="38" y="273" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">SNMP v1 / v2c</text>' +
  '<text x="286" y="272" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">161</text>' +
  '<line x1="306" y1="267" x2="343" y2="267" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="352.0,267.0 343.0,272.0 343.0,262.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="358" y="246" width="422" height="42" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="376" y="273" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">SNMPv3 (login + encryption)</text>' +
  '<text x="766" y="272" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">161</text>' +
  '<rect x="20" y="296" width="280" height="42" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="38" y="323" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">POP3 / IMAP</text>' +
  '<text x="286" y="322" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">110 / 143</text>' +
  '<line x1="306" y1="317" x2="343" y2="317" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="352.0,317.0 343.0,322.0 343.0,312.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="358" y="296" width="422" height="42" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="376" y="323" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">POP3S / IMAPS</text>' +
  '<text x="766" y="322" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">995 / 993</text>' +
  '<rect x="20" y="346" width="280" height="42" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="38" y="373" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">SMTP</text>' +
  '<text x="286" y="372" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">25</text>' +
  '<line x1="306" y1="367" x2="343" y2="367" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="352.0,367.0 343.0,372.0 343.0,362.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="358" y="346" width="422" height="42" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="376" y="373" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">SMTPS, or STARTTLS on 25 / 587</text>' +
  '<text x="766" y="372" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">465 / 587</text>' +
  '<rect x="20" y="396" width="280" height="42" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="38" y="423" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">DNS</text>' +
  '<text x="286" y="422" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">53</text>' +
  '<line x1="306" y1="417" x2="343" y2="417" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="352.0,417.0 343.0,422.0 343.0,412.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="358" y="396" width="422" height="42" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5" stroke-opacity="0.8"/>' +
  '<text x="376" y="423" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start">DNSSEC (signed); DoH or DoT</text>' +
  '<text x="766" y="422" font-family="Share Tech Mono, Consolas, monospace" font-size="13.5" font-weight="400" fill="#a0a0ac" text-anchor="end">53 / 443 / 853</text>' +
  '<text x="400" y="460" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Use TLS 1.2 or 1.3. SSL and TLS 1.0 / 1.1 are deprecated.</text>' +
  '</svg>';

COURSE_FIGURES['cc-network-today'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 629" role="img" aria-label="Cedar Creek network today. FW-CORE in the center routes all zones: OUTSIDE (internet, NAT 198.51.100.24), GUEST Wi-Fi, VPN (staff and the HVAC vendor on one login), OFFICE 10.20.0.0/16 including FS-HR01, SERVERS 10.10.0.0/16 and 10.30.0.0/16 including DC01 and ENG-APP02 on Windows Server 2012 R2, PLANT 10.40.0.0/16 as one flat VLAN with HMI, PLC, CNCs, HVAC controller, printers and plant Wi-Fi clients, and MGMT 10.99.0.0/24 with IT-ADMIN-01, NVR-01 and BADGE-CTRL. Red notes: rule 14 forwards RDP from one vendor internet address to ENG-APP02; rule 12 gives the vendor VPN any-port access to servers and plant; rules 6 and 7 let plant and office reach each other on any port; rule 8 lets the plant reach all servers; rule 21 allows any to any above Default-Deny.">' +
  '<rect x="0" y="0" width="800" height="629" rx="12" fill="#0d0d1f"/>' +
  '<line x1="400" y1="80" x2="400" y2="232" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<line x1="250" y1="64" x2="400" y2="232" fill="none" stroke="#3a3a5c" stroke-width="2"/>' +
  '<line x1="550" y1="64" x2="400" y2="232" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<line x1="250" y1="232" x2="400" y2="232" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<line x1="550" y1="232" x2="400" y2="232" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<line x1="330" y1="364" x2="400" y2="232" fill="none" stroke="#ee2207" stroke-width="3"/>' +
  '<line x1="470" y1="364" x2="400" y2="232" fill="none" stroke="#3a3a5c" stroke-width="2"/>' +
  '<rect x="300" y="16" width="200" height="64" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="2"/>' +
  '<text x="316" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">OUTSIDE</text>' +
  '<text x="316" y="63" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Internet, NAT 198.51.100.24</text>' +
  '<rect x="20" y="16" width="230" height="64" rx="10" fill="#131329" stroke="#a0a0ac" stroke-width="2"/>' +
  '<text x="36" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#a0a0ac" text-anchor="start">GUEST</text>' +
  '<text x="36" y="63" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">172.16.50.0/24, internet only</text>' +
  '<rect x="550" y="16" width="230" height="64" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="566" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ff7aa2" text-anchor="start">VPN</text>' +
  '<text x="566" y="63" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Staff + HVAC vendor (one login)</text>' +
  '<rect x="20" y="176" width="230" height="112" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="36" y="202" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#00f5ff" text-anchor="start">OFFICE</text>' +
  '<text x="36" y="223" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">10.20.0.0/16</text>' +
  '<text x="36" y="242" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Office PCs, engineering</text>' +
  '<text x="36" y="261" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">workstations, FS-HR01</text>' +
  '<rect x="550" y="176" width="230" height="112" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="566" y="202" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ffc23d" text-anchor="start">SERVERS</text>' +
  '<text x="566" y="223" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">10.10.0.0/16, 10.30.0.0/16</text>' +
  '<text x="566" y="242" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">DC01, ENG-FS01,</text>' +
  '<text x="566" y="261" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">ENG-APP02 (2012 R2)</text>' +
  '<rect x="20" y="364" width="360" height="96" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="36" y="390" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#33d17a" text-anchor="start">PLANT (one flat VLAN)</text>' +
  '<text x="36" y="411" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">10.40.0.0/16: HMI, PLC, CNCs, HVAC-CTRL,</text>' +
  '<text x="36" y="430" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">printers, and CC-PLANT Wi-Fi clients</text>' +
  '<rect x="420" y="364" width="360" height="96" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="436" y="390" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#b794ff" text-anchor="start">MGMT</text>' +
  '<text x="436" y="411" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">10.99.0.0/24: FW-CORE, switches,</text>' +
  '<text x="436" y="430" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">IT-ADMIN-01, NVR-01, BADGE-CTRL</text>' +
  '<rect x="330" y="196" width="140" height="72" rx="10" fill="#131329" stroke="#ee2207" stroke-width="3"/>' +
  '<text x="400" y="228" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#e8e8e8" text-anchor="middle">FW-CORE</text>' +
  '<text x="400" y="250" font-family="Share Tech Mono, Consolas, monospace" font-size="11" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1">ROUTES ALL ZONES</text>' +
  '<rect x="20" y="478" width="760" height="135" rx="10" fill="#ee2207" fill-opacity="0.07" stroke="#ee2207" stroke-width="1.5"/>' +
  '<text x="36" y="500" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ee2207" text-anchor="start" letter-spacing="1">RED LINKS: WHAT THE RULES ALLOW TODAY</text>' +
  '<text x="36" y="524" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Rules 6 and 7: plant and office reach each other on any port, both ways.</text>' +
  '<text x="36" y="545" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Rule 8: the plant reaches every server on any port.</text>' +
  '<text x="36" y="566" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Rule 12: the vendor VPN login reaches SERVERS and PLANT on any port.</text>' +
  '<text x="36" y="587" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Rule 14: RDP from one vendor internet address is forwarded to ENG-APP02.</text>' +
  '<text x="36" y="608" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Rule 21: any source to any destination, above Default-Deny. No working implicit deny.</text>' +
  '</svg>';

COURSE_FIGURES['cc-network-zones'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 528" role="img" aria-label="A segmented design for Cedar Creek with FW-CORE enforcing default deny in the center. GUEST: internet only. Screened subnet: the VPN portal and public services, the only zone the internet reaches. VPN with MFA: staff on named accounts, the HVAC vendor only to HVAC-CTRL over HTTPS with a login per technician. OFFICE: DNS, logon and file shares on the servers, no direct path to the plant. SERVERS: ENG-APP02 reachable only from engineering PCs, no RDP from the internet. PLANT and OT: reached only from the jump host and from ENG-FS01 using SFTP to the CNCs; plant Wi-Fi on 802.1X in its own segment. MGMT and jump host: admins use VPN with MFA, then the jump host, then SSH or HTTPS, all logged.">' +
  '<rect x="0" y="0" width="800" height="528" rx="12" fill="#0d0d1f"/>' +
  '<line x1="250" y1="120" x2="400" y2="246" fill="none" stroke="#33d17a" stroke-width="2" stroke-opacity="0.55"/>' +
  '<line x1="400" y1="120" x2="400" y2="246" fill="none" stroke="#33d17a" stroke-width="2" stroke-opacity="0.55"/>' +
  '<line x1="550" y1="120" x2="400" y2="246" fill="none" stroke="#33d17a" stroke-width="2" stroke-opacity="0.55"/>' +
  '<line x1="270" y1="246" x2="400" y2="246" fill="none" stroke="#33d17a" stroke-width="2" stroke-opacity="0.55"/>' +
  '<line x1="530" y1="246" x2="400" y2="246" fill="none" stroke="#33d17a" stroke-width="2" stroke-opacity="0.55"/>' +
  '<line x1="380" y1="372" x2="400" y2="246" fill="none" stroke="#33d17a" stroke-width="2" stroke-opacity="0.55"/>' +
  '<line x1="420" y1="372" x2="400" y2="246" fill="none" stroke="#33d17a" stroke-width="2" stroke-opacity="0.55"/>' +
  '<rect x="20" y="16" width="230" height="104" rx="10" fill="#131329" stroke="#a0a0ac" stroke-width="2"/>' +
  '<text x="36" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#a0a0ac" text-anchor="start">GUEST</text>' +
  '<text x="36" y="65" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Internet only.</text>' +
  '<text x="36" y="84" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Isolated from everything</text>' +
  '<text x="36" y="103" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">inside.</text>' +
  '<rect x="285" y="16" width="230" height="104" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="2"/>' +
  '<text x="301" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="start">SCREENED SUBNET</text>' +
  '<text x="301" y="65" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">VPN portal and any public</text>' +
  '<text x="301" y="84" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">service. Internet reaches</text>' +
  '<text x="301" y="103" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">only this zone.</text>' +
  '<rect x="550" y="16" width="230" height="104" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="566" y="42" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ff7aa2" text-anchor="start">VPN (MFA required)</text>' +
  '<text x="566" y="65" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Staff: named accounts.</text>' +
  '<text x="566" y="84" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Vendor: HVAC-CTRL on</text>' +
  '<text x="566" y="103" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">HTTPS only, per-tech login.</text>' +
  '<rect x="20" y="194" width="250" height="104" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="36" y="220" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#00f5ff" text-anchor="start">OFFICE</text>' +
  '<text x="36" y="243" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">To SERVERS: DNS, logon,</text>' +
  '<text x="36" y="262" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">file shares only.</text>' +
  '<text x="36" y="281" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">No direct path to the plant.</text>' +
  '<rect x="530" y="194" width="250" height="104" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="546" y="220" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ffc23d" text-anchor="start">SERVERS</text>' +
  '<text x="546" y="243" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">ENG-APP02 reachable only</text>' +
  '<text x="546" y="262" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">from engineering PCs.</text>' +
  '<text x="546" y="281" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">No RDP from the internet.</text>' +
  '<rect x="20" y="372" width="360" height="110" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="36" y="398" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#33d17a" text-anchor="start">PLANT / OT</text>' +
  '<text x="36" y="421" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Reached only from the jump host and</text>' +
  '<text x="36" y="440" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">ENG-FS01 (SFTP to the CNCs). Plant Wi-Fi</text>' +
  '<text x="36" y="459" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">on 802.1X, in its own segment.</text>' +
  '<rect x="420" y="372" width="360" height="110" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="436" y="398" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#b794ff" text-anchor="start">MGMT + JUMP HOST</text>' +
  '<text x="436" y="421" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Admins: VPN + MFA, then the jump host,</text>' +
  '<text x="436" y="440" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">then devices over SSH or HTTPS.</text>' +
  '<text x="436" y="459" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Every session logged.</text>' +
  '<rect x="330" y="214" width="140" height="64" rx="10" fill="#131329" stroke="#33d17a" stroke-width="3"/>' +
  '<text x="400" y="247" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#e8e8e8" text-anchor="middle">FW-CORE</text>' +
  '<text x="400" y="266" font-family="Share Tech Mono, Consolas, monospace" font-size="11" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1">DEFAULT DENY</text>' +
  '<text x="400" y="510" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Every allow rule names a source, destination, and port, has an owner, and is logged.</text>' +
  '</svg>';

COURSE_FIGURES['vpn-tunnels'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 288" role="img" aria-label="Full tunnel versus split tunnel VPN. In a full tunnel, the remote laptop sends all traffic through the encrypted tunnel to the company network, and internet traffic leaves from there, so it can be inspected. In a split tunnel, only company traffic uses the tunnel and internet traffic goes directly from the laptop, which is faster but skips company controls.">' +
  '<rect x="0" y="0" width="800" height="288" rx="12" fill="#0d0d1f"/>' +
  '<text x="205" y="30" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#00f5ff" text-anchor="middle">Full tunnel</text>' +
  '<rect x="20" y="92" width="96" height="56" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="1.5" stroke-opacity="0.6"/>' +
  '<text x="68" y="117" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Remote</text>' +
  '<text x="68" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">laptop</text>' +
  '<rect x="270" y="52" width="120" height="56" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="330" y="77" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Company</text>' +
  '<text x="330" y="96" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">network</text>' +
  '<rect x="270" y="178" width="120" height="56" rx="10" fill="#131329" stroke="#a0a0ac" stroke-width="2"/>' +
  '<text x="330" y="203" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Internet</text>' +
  '<text x="330" y="222" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">sites</text>' +
  '<path d="M116 112 C 190 112, 200 80, 270 80" fill="none" stroke="#00f5ff" stroke-width="12" stroke-opacity="0.25"/>' +
  '<line x1="116" y1="112" x2="257.2" y2="82.3" fill="none" stroke="#00f5ff" stroke-width="2"/><polygon points="268.0,80.0 258.5,88.1 256.0,76.4" fill="#00f5ff"/>' +
  '<text x="180" y="70" font-family="Share Tech Mono, Consolas, monospace" font-size="11" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1">ENCRYPTED TUNNEL</text>' +
  '<line x1="330" y1="108" x2="330" y2="165" fill="none" stroke="#00f5ff" stroke-width="2"/><polygon points="330.0,176.0 324.0,165.0 336.0,165.0" fill="#00f5ff"/>' +
  '<text x="338" y="146" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#00f5ff" text-anchor="start">via company</text>' +
  '<text x="605" y="30" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle">Split tunnel</text>' +
  '<rect x="420" y="92" width="96" height="56" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="1.5" stroke-opacity="0.6"/>' +
  '<text x="468" y="117" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Remote</text>' +
  '<text x="468" y="136" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">laptop</text>' +
  '<rect x="670" y="52" width="120" height="56" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="730" y="77" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Company</text>' +
  '<text x="730" y="96" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">network</text>' +
  '<rect x="670" y="178" width="120" height="56" rx="10" fill="#131329" stroke="#a0a0ac" stroke-width="2"/>' +
  '<text x="730" y="203" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">Internet</text>' +
  '<text x="730" y="222" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="middle">sites</text>' +
  '<path d="M516 112 C 590 112, 600 80, 670 80" fill="none" stroke="#00f5ff" stroke-width="12" stroke-opacity="0.25"/>' +
  '<line x1="516" y1="112" x2="657.2" y2="82.3" fill="none" stroke="#00f5ff" stroke-width="2"/><polygon points="668.0,80.0 658.5,88.1 656.0,76.4" fill="#00f5ff"/>' +
  '<text x="580" y="70" font-family="Share Tech Mono, Consolas, monospace" font-size="11" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1">ENCRYPTED TUNNEL</text>' +
  '<line x1="516" y1="130" x2="658.2" y2="201.1" fill="none" stroke="#ffc23d" stroke-width="2" stroke-dasharray="6 5"/><polygon points="668.0,206.0 655.5,206.4 660.8,195.7" fill="#ffc23d"/>' +
  '<text x="570" y="196" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#ffc23d" text-anchor="end">Direct</text>' +
  '<line x1="400" y1="20" x2="400" y2="240" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="205" y="268" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">All traffic can be inspected and filtered.</text>' +
  '<text x="605" y="268" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Faster, but web traffic skips company controls.</text>' +
  '</svg>';

COURSE_FIGURES['dot1x-flow'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 288" role="img" aria-label="802.1X network access control. The supplicant (a laptop or phone) sends EAP credentials to the authenticator (a switch port or wireless access point), which relays them over RADIUS to the authentication server. The server checks them and answers accept or reject; on accept the port opens. Steps: the port is blocked except for EAP; the supplicant sends credentials (a certificate with EAP-TLS or a password inside TLS with PEAP); the authenticator relays them; RADIUS decides, and NAC may also check posture and assign a VLAN.">' +
  '<rect x="0" y="0" width="800" height="288" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="40" width="220" height="100" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="130" y="72" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#00f5ff" text-anchor="middle">Supplicant</text>' +
  '<text x="130" y="98" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Laptop or phone</text>' +
  '<text x="130" y="117" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">asking to connect</text>' +
  '<rect x="290" y="40" width="220" height="100" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="72" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#ffc23d" text-anchor="middle">Authenticator</text>' +
  '<text x="400" y="98" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Switch port or</text>' +
  '<text x="400" y="117" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">wireless access point</text>' +
  '<rect x="560" y="40" width="220" height="100" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="670" y="72" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#33d17a" text-anchor="middle">Auth server</text>' +
  '<text x="670" y="98" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">RADIUS: checks the</text>' +
  '<text x="670" y="117" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">credentials and decides</text>' +
  '<line x1="242" y1="70" x2="277" y2="70" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.8"/><polygon points="288.0,70.0 277.0,76.0 277.0,64.0" fill="#e8e8e8" fill-opacity="0.8"/>' +
  '<text x="265" y="60" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">EAP</text>' +
  '<line x1="512" y1="70" x2="547" y2="70" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.8"/><polygon points="558.0,70.0 547.0,76.0 547.0,64.0" fill="#e8e8e8" fill-opacity="0.8"/>' +
  '<text x="535" y="60" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">RADIUS</text>' +
  '<line x1="558" y1="112" x2="523" y2="112" fill="none" stroke="#33d17a" stroke-width="2"/><polygon points="512.0,112.0 523.0,106.0 523.0,118.0" fill="#33d17a"/>' +
  '<text x="535" y="160" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#33d17a" text-anchor="middle">Accept</text>' +
  '<line x1="288" y1="112" x2="253" y2="112" fill="none" stroke="#33d17a" stroke-width="2"/><polygon points="242.0,112.0 253.0,106.0 253.0,118.0" fill="#33d17a"/>' +
  '<text x="265" y="160" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#33d17a" text-anchor="middle">Port opens</text>' +
  '<text x="40" y="198" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">1. The port is blocked except for EAP messages.</text>' +
  '<text x="40" y="220" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">2. The supplicant sends its credentials (EAP-TLS: a certificate; PEAP: a password inside TLS).</text>' +
  '<text x="40" y="242" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="start">3. The authenticator relays them to RADIUS and waits.</text>' +
  '<text x="40" y="264" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">4. RADIUS says accept or reject; NAC may also check posture and pick a VLAN.</text>' +
  '</svg>';

COURSE_FIGURES['shared-responsibility'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 436" role="img" aria-label="Shared responsibility by service model. Layers from top: data, identities and access, applications, runtime and middleware, operating system, virtualization, servers storage and network, physical data center. On-premises: the customer manages all eight. IaaS: the customer manages data through the operating system; the provider manages virtualization, hardware and the data center. PaaS: the customer manages data, identities and applications. SaaS (for example Microsoft 365 and the payroll service): the customer manages data and identities and access; the provider runs everything else.">' +
  '<rect x="0" y="0" width="800" height="436" rx="12" fill="#0d0d1f"/>' +
  '<text x="188" y="75" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="end">Data</text>' +
  '<text x="188" y="115" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="end">Identities and access</text>' +
  '<text x="188" y="155" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="end">Applications</text>' +
  '<text x="188" y="195" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="end">Runtime and middleware</text>' +
  '<text x="188" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="end">Operating system</text>' +
  '<text x="188" y="275" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="end">Virtualization</text>' +
  '<text x="188" y="315" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="end">Servers, storage, network</text>' +
  '<text x="188" y="355" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="end">Physical data center</text>' +
  '<text x="272.5" y="30" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">On-premises</text>' +
  '<rect x="200" y="52" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="272.5" y="75" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="200" y="92" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="272.5" y="115" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="200" y="132" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="272.5" y="155" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="200" y="172" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="272.5" y="195" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="200" y="212" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="272.5" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="200" y="252" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="272.5" y="275" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="200" y="292" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="272.5" y="315" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="200" y="332" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="272.5" y="355" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<text x="272.5" y="388" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Cedar Creek server room</text>' +
  '<text x="422.5" y="30" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">IaaS</text>' +
  '<rect x="350" y="52" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="422.5" y="75" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="350" y="92" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="422.5" y="115" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="350" y="132" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="422.5" y="155" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="350" y="172" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="422.5" y="195" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="350" y="212" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="422.5" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="350" y="252" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="422.5" y="275" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="350" y="292" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="422.5" y="315" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="350" y="332" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="422.5" y="355" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<text x="422.5" y="388" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Rented virtual machines</text>' +
  '<text x="572.5" y="30" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">PaaS</text>' +
  '<rect x="500" y="52" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="572.5" y="75" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="500" y="92" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="572.5" y="115" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="500" y="132" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="572.5" y="155" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="500" y="172" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="572.5" y="195" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="500" y="212" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="572.5" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="500" y="252" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="572.5" y="275" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="500" y="292" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="572.5" y="315" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="500" y="332" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="572.5" y="355" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<text x="572.5" y="388" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Platform for your code</text>' +
  '<text x="722.5" y="30" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">SaaS</text>' +
  '<rect x="650" y="52" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="722.5" y="75" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="650" y="92" width="145" height="36" rx="6" fill="#00f5ff" fill-opacity="0.16" stroke="#00f5ff" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="722.5" y="115" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#00f5ff" text-anchor="middle">Customer</text>' +
  '<rect x="650" y="132" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="722.5" y="155" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="650" y="172" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="722.5" y="195" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="650" y="212" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="722.5" y="235" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="650" y="252" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="722.5" y="275" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="650" y="292" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="722.5" y="315" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<rect x="650" y="332" width="145" height="36" rx="6" fill="#ffc23d" fill-opacity="0.12" stroke="#ffc23d" stroke-width="1.2" stroke-opacity="0.6"/>' +
  '<text x="722.5" y="355" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#ffc23d" text-anchor="middle">Provider</text>' +
  '<text x="722.5" y="388" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Microsoft 365, payroll</text>' +
  '<text x="400" y="418" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#e8e8e8" text-anchor="middle">Data and access settings are always the customer\'s job, in every model.</text>' +
  '</svg>';

COURSE_FIGURES['it-ot-zones'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 454" role="img" aria-label="IT and OT separation in levels, top to bottom: internet; enterprise IT (office PCs, file servers, email, ERP); an IT/OT DMZ (file transfer point, historian, jump host); OT supervisory (HMIs such as PLANT-PC-07 and the engineering station); OT control (PLCs such as LINE2-PLC and CNC controllers); and the physical process (Line 2 motors, spindles, sensors). Firewalls separate internet, IT, the IT/OT DMZ and OT. A red dashed arrow shows Cedar Creek today: an office laptop reaches the PLC directly through FW-CORE rule 7.">' +
  '<rect x="0" y="0" width="800" height="454" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="18" width="560" height="50" rx="10" fill="#e8e8e8" fill-opacity="0.08" stroke="#e8e8e8" stroke-width="2"/>' +
  '<text x="36" y="40" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="start" letter-spacing="1">INTERNET</text>' +
  '<text x="36" y="59" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Email, cloud, attackers</text>' +
  '<line x1="60" y1="78" x2="540" y2="78" fill="none" stroke="#ee2207" stroke-width="4" stroke-linecap="round"/>' +
  '<rect x="248" y="69" width="104" height="18" rx="4" fill="#0d0d1f"/>' +
  '<text x="300" y="83" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#ee2207" text-anchor="middle" letter-spacing="1.5">FIREWALL</text>' +
  '<rect x="20" y="88" width="560" height="50" rx="10" fill="#00f5ff" fill-opacity="0.08" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="36" y="110" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#00f5ff" text-anchor="start" letter-spacing="1">ENTERPRISE IT</text>' +
  '<text x="36" y="129" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Office PCs, file servers, email, ERP</text>' +
  '<line x1="60" y1="148" x2="540" y2="148" fill="none" stroke="#ee2207" stroke-width="4" stroke-linecap="round"/>' +
  '<rect x="248" y="139" width="104" height="18" rx="4" fill="#0d0d1f"/>' +
  '<text x="300" y="153" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#ee2207" text-anchor="middle" letter-spacing="1.5">FIREWALL</text>' +
  '<rect x="20" y="158" width="560" height="50" rx="10" fill="#b794ff" fill-opacity="0.08" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="36" y="180" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#b794ff" text-anchor="start" letter-spacing="1">IT/OT DMZ</text>' +
  '<text x="36" y="199" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">File transfer point, historian, jump host</text>' +
  '<line x1="60" y1="218" x2="540" y2="218" fill="none" stroke="#ee2207" stroke-width="4" stroke-linecap="round"/>' +
  '<rect x="248" y="209" width="104" height="18" rx="4" fill="#0d0d1f"/>' +
  '<text x="300" y="223" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#ee2207" text-anchor="middle" letter-spacing="1.5">FIREWALL</text>' +
  '<rect x="20" y="228" width="560" height="50" rx="10" fill="#ffc23d" fill-opacity="0.08" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="36" y="250" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ffc23d" text-anchor="start" letter-spacing="1">OT SUPERVISORY</text>' +
  '<text x="36" y="269" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">HMIs such as PLANT-PC-07, engineering station</text>' +
  '<rect x="20" y="298" width="560" height="50" rx="10" fill="#33d17a" fill-opacity="0.08" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="36" y="320" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#33d17a" text-anchor="start" letter-spacing="1">OT CONTROL</text>' +
  '<text x="36" y="339" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">PLCs such as LINE2-PLC, CNC controllers</text>' +
  '<rect x="20" y="368" width="560" height="50" rx="10" fill="#ff8a4c" fill-opacity="0.08" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="36" y="390" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ff8a4c" text-anchor="start" letter-spacing="1">PHYSICAL PROCESS</text>' +
  '<text x="36" y="409" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">Line 2 motors, spindles, sensors</text>' +
  '<line x1="640" y1="113" x2="640" y2="312" fill="none" stroke="#ee2207" stroke-width="2.5" stroke-dasharray="7 5"/><polygon points="640.0,323.0 634.0,312.0 646.0,312.0" fill="#ee2207"/>' +
  '<line x1="600" y1="113" x2="640" y2="113" fill="none" stroke="#ee2207" stroke-width="2.5" stroke-dasharray="7 5"/>' +
  '<text x="652" y="183" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="600" fill="#ee2207" text-anchor="start">Cedar Creek</text>' +
  '<text x="652" y="202" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#ee2207" text-anchor="start">today: an office</text>' +
  '<text x="652" y="221" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#ee2207" text-anchor="start">laptop reaches</text>' +
  '<text x="652" y="240" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#ee2207" text-anchor="start">the PLC directly</text>' +
  '<text x="652" y="259" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#ee2207" text-anchor="start">(FW-CORE rule 7).</text>' +
  '<text x="400" y="436" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Each level talks only to the level next to it. IT never talks to a PLC directly.</text>' +
  '</svg>';

COURSE_FIGURES['pentest-phases'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 232" role="img" aria-label="The five phases of a penetration test: 1 reconnaissance (OSINT, WHOIS, DNS, job postings), 2 scanning (Nmap for hosts, ports, services and versions), 3 exploitation (use a weakness to gain access), 4 post-exploitation (escalate, move, show impact), and 5 reporting (findings, risk and fixes). Week 4 covers phases 1 and 2 as Mock Pentest part 1; Week 5 covers phases 3 to 5. Written authorization and rules of engagement come first.">' +
  '<rect x="0" y="0" width="800" height="232" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="18" width="295" height="30" rx="6" fill="#00f5ff" fill-opacity="0.12" stroke="#00f5ff" stroke-width="1.5"/>' +
  '<text x="167.5" y="39" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1">WEEK 4: MOCK PENTEST PART 1</text>' +
  '<rect x="330" y="18" width="450" height="30" rx="6" fill="#ffc23d" fill-opacity="0.1" stroke="#ffc23d" stroke-width="1.5"/>' +
  '<text x="555" y="39" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1">WEEK 5: MOCK PENTEST PART 2</text>' +
  '<rect x="20" y="64" width="140" height="120" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="90" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">01</text>' +
  '<text x="90" y="116" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Recon</text>' +
  '<text x="90" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">OSINT, WHOIS,</text>' +
  '<text x="90" y="161" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">DNS, job posts</text>' +
  '<line x1="161" y1="124" x2="167" y2="124" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="174.0,124.0 167.0,128.0 167.0,120.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="175" y="64" width="140" height="120" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="245" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1.5">02</text>' +
  '<text x="245" y="116" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Scanning</text>' +
  '<text x="245" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Nmap: hosts, ports,</text>' +
  '<text x="245" y="161" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">services, versions</text>' +
  '<line x1="316" y1="124" x2="322" y2="124" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="329.0,124.0 322.0,128.0 322.0,120.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="330" y="64" width="140" height="120" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">03</text>' +
  '<text x="400" y="116" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Exploitation</text>' +
  '<text x="400" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Use a weakness</text>' +
  '<text x="400" y="161" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">to gain access</text>' +
  '<line x1="471" y1="124" x2="477" y2="124" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="484.0,124.0 477.0,128.0 477.0,120.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="485" y="64" width="140" height="120" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="555" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">04</text>' +
  '<text x="555" y="116" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Post-exploit</text>' +
  '<text x="555" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Escalate, move,</text>' +
  '<text x="555" y="161" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">show impact</text>' +
  '<line x1="626" y1="124" x2="632" y2="124" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="639.0,124.0 632.0,128.0 632.0,120.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="640" y="64" width="140" height="120" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="710" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1.5">05</text>' +
  '<text x="710" y="116" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#e8e8e8" text-anchor="middle">Reporting</text>' +
  '<text x="710" y="142" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Findings, risk,</text>' +
  '<text x="710" y="161" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">and fixes</text>' +
  '<text x="400" y="214" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Written authorization and rules of engagement come before phase 1.</text>' +
  '</svg>';

COURSE_FIGURES['port-states'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 312" role="img" aria-label="How a SYN scan reads port states. Open: Nmap sends SYN and the port answers SYN-ACK, meaning a service is listening; Nmap sends RST instead of finishing the handshake. Closed: the port answers RST; the host is there but nothing listens. Filtered: no reply at all, usually because a firewall dropped the probe.">' +
  '<rect x="0" y="0" width="800" height="312" rx="12" fill="#0d0d1f"/>' +
  '<text x="150" y="22" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#a0a0ac" text-anchor="middle">Nmap</text>' +
  '<text x="520" y="22" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#a0a0ac" text-anchor="middle">Target port</text>' +
  '<text x="20" y="70" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="start">OPEN</text>' +
  '<line x1="150" y1="52" x2="503" y2="52" fill="none" stroke="#00f5ff" stroke-width="2"/><polygon points="514.0,52.0 503.0,58.0 503.0,46.0" fill="#00f5ff"/>' +
  '<text x="335" y="46" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#00f5ff" text-anchor="middle">SYN</text>' +
  '<line x1="514" y1="80" x2="161" y2="80" fill="none" stroke="#33d17a" stroke-width="2"/><polygon points="150.0,80.0 161.0,74.0 161.0,86.0" fill="#33d17a"/>' +
  '<text x="335" y="98" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#33d17a" text-anchor="middle">SYN-ACK</text>' +
  '<line x1="520" y1="34" x2="520" y2="92" fill="none" stroke="#3a3a5c" stroke-width="2"/>' +
  '<text x="548" y="54" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">A service is listening. Nmap</text>' +
  '<text x="548" y="72" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">sends RST instead of finishing</text>' +
  '<text x="548" y="90" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">the handshake.</text>' +
  '<text x="20" y="162" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ffc23d" text-anchor="start">CLOSED</text>' +
  '<line x1="150" y1="144" x2="503" y2="144" fill="none" stroke="#00f5ff" stroke-width="2"/><polygon points="514.0,144.0 503.0,150.0 503.0,138.0" fill="#00f5ff"/>' +
  '<text x="335" y="138" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#00f5ff" text-anchor="middle">SYN</text>' +
  '<line x1="514" y1="172" x2="161" y2="172" fill="none" stroke="#ffc23d" stroke-width="2"/><polygon points="150.0,172.0 161.0,166.0 161.0,178.0" fill="#ffc23d"/>' +
  '<text x="335" y="190" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#ffc23d" text-anchor="middle">RST</text>' +
  '<line x1="520" y1="126" x2="520" y2="184" fill="none" stroke="#3a3a5c" stroke-width="2"/>' +
  '<text x="548" y="146" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">The host is there, but nothing</text>' +
  '<text x="548" y="164" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">listens on that port.</text>' +
  '<text x="20" y="254" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ee2207" text-anchor="start">FILTERED</text>' +
  '<line x1="150" y1="236" x2="385" y2="236" fill="none" stroke="#00f5ff" stroke-width="2"/><polygon points="396.0,236.0 385.0,242.0 385.0,230.0" fill="#00f5ff"/>' +
  '<text x="273" y="230" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#00f5ff" text-anchor="middle">SYN</text>' +
  '<rect x="400" y="220" width="16" height="34" rx="3" fill="#ee2207" fill-opacity="0.25" stroke="#ee2207" stroke-width="1.5"/>' +
  '<text x="408" y="276" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#ee2207" text-anchor="middle">firewall</text>' +
  '<line x1="401" y1="229" x2="415" y2="243" fill="none" stroke="#ee2207" stroke-width="3" stroke-linecap="round"/><line x1="401" y1="243" x2="415" y2="229" fill="none" stroke="#ee2207" stroke-width="3" stroke-linecap="round"/>' +
  '<text x="270" y="264" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#ee2207" text-anchor="middle">... no answer (timeout)</text>' +
  '<line x1="520" y1="218" x2="520" y2="276" fill="none" stroke="#3a3a5c" stroke-width="2"/>' +
  '<text x="548" y="238" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">No reply at all, usually a</text>' +
  '<text x="548" y="256" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">firewall dropping the probe.</text>' +
  '</svg>';
