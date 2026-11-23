// Week 6 lesson diagrams (inline SVG strings). Used by Lesson.html via section.figure = { id, caption }.
// Rebuild: node docs/tools/make_week6_figures.js course-w6-figures.js
window.COURSE_FIGURES = window.COURSE_FIGURES || {};

COURSE_FIGURES['se-anatomy'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 282" role="img" aria-label="Four steps of a social engineering attack, with the August business email compromise attempt as the example. 1 Research: open-source intelligence such as the website, LinkedIn, and news, to learn who approves payments. 2 Pretext: a believable story and identity, I am the CFO with a new vendor. 3 Lever: pressure to skip the checks, here authority plus urgency. 4 The ask: click, pay, share, or let me in; here, wire $48,750 and do not call. The defense: break the chain at step 4 by verifying through a second channel you already trust, then report.">' +
  '<rect x="0" y="0" width="800" height="282" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="170" height="176" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="105" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#00f5ff" text-anchor="middle">1  Research</text>' +
  '<text x="105" y="76" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">OSINT: website,</text>' +
  '<text x="105" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">LinkedIn, news</text>' +
  '<line x1="36" y1="110" x2="174" y2="110" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="105" y="130" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">AUGUST BEC</text>' +
  '<text x="105" y="153" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Who approves</text>' +
  '<text x="105" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">payments?</text>' +
  '<line x1="193" y1="108" x2="202" y2="108" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="213.0,108.0 202.0,114.0 202.0,102.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="216" y="20" width="170" height="176" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="301" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#ffc23d" text-anchor="middle">2  Pretext</text>' +
  '<text x="301" y="76" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">A believable</text>' +
  '<text x="301" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">story and identity</text>' +
  '<line x1="232" y1="110" x2="370" y2="110" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="301" y="130" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">AUGUST BEC</text>' +
  '<text x="301" y="153" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">&quot;I am the CFO,</text>' +
  '<text x="301" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">new vendor&quot;</text>' +
  '<line x1="389" y1="108" x2="398" y2="108" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="409.0,108.0 398.0,114.0 398.0,102.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="412" y="20" width="170" height="176" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="497" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#ff8a4c" text-anchor="middle">3  Lever</text>' +
  '<text x="497" y="76" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Pressure to skip</text>' +
  '<text x="497" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">the checks</text>' +
  '<line x1="428" y1="110" x2="566" y2="110" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="497" y="130" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">AUGUST BEC</text>' +
  '<text x="497" y="153" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Authority +</text>' +
  '<text x="497" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">urgency</text>' +
  '<line x1="585" y1="108" x2="594" y2="108" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="605.0,108.0 594.0,114.0 594.0,102.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="608" y="20" width="170" height="176" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="693" y="52" font-family="Rajdhani, Segoe UI, sans-serif" font-size="21" font-weight="700" fill="#ff7aa2" text-anchor="middle">4  The ask</text>' +
  '<text x="693" y="76" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Click, pay,</text>' +
  '<text x="693" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">share, let me in</text>' +
  '<line x1="624" y1="110" x2="762" y2="110" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="693" y="130" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">AUGUST BEC</text>' +
  '<text x="693" y="153" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Wire $48,750,</text>' +
  '<text x="693" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">&quot;don\'t call&quot;</text>' +
  '<rect x="20" y="216" width="760" height="46" rx="10" fill="#33d17a" fill-opacity="0.08" stroke="#33d17a" stroke-width="1.5"/>' +
  '<text x="400" y="245" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="600" fill="#33d17a" text-anchor="middle">Break the chain at step 4: verify through a second channel you already trust, then report.</text>' +
  '</svg>';

COURSE_FIGURES['se-types'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 352" role="img" aria-label="Social engineering attacks grouped by channel. Email: phishing (many people, a brand), spear phishing (one person, personal details), whaling (an executive), business email compromise (fake executive or vendor asking for money). Text and chat: smishing (SMS with a short link), instant messaging lures (Teams or chat), quishing (QR code that moves the link to a phone). Voice: vishing (phone call), pretexting (a made-up story), impersonation (IT, a vendor, or a boss). In person: tailgating (follows unnoticed), piggybacking (door held for them), shoulder surfing (watches you type), dumpster diving (searches trash). Web and media: watering hole (infects a site you use), typosquatting (look-alike domain), brand impersonation (copied logo and style), baiting (USB drive left out).">' +
  '<rect x="0" y="0" width="800" height="352" rx="12" fill="#0d0d1f"/>' +
  '<rect x="16" y="16" width="148" height="40" rx="10" fill="#131329"/>' +
  '<rect x="16" y="16" width="148" height="4" rx="2" fill="#00f5ff"/>' +
  '<text x="90" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="middle" letter-spacing="1">EMAIL</text>' +
  '<rect x="16" y="64" width="148" height="56" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="90" y="88" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Phishing</text>' +
  '<text x="90" y="107" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">many people, a brand</text>' +
  '<rect x="16" y="126" width="148" height="56" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="90" y="150" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Spear phishing</text>' +
  '<text x="90" y="169" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">one person, details</text>' +
  '<rect x="16" y="188" width="148" height="56" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="90" y="212" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Whaling</text>' +
  '<text x="90" y="231" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">an executive</text>' +
  '<rect x="16" y="250" width="148" height="56" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="90" y="274" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">BEC</text>' +
  '<text x="90" y="293" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">fake exec or vendor, $</text>' +
  '<rect x="169" y="16" width="148" height="40" rx="10" fill="#131329"/>' +
  '<rect x="169" y="16" width="148" height="4" rx="2" fill="#ffc23d"/>' +
  '<text x="243" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="middle" letter-spacing="1">TEXT AND CHAT</text>' +
  '<rect x="169" y="64" width="148" height="56" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="243" y="88" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Smishing</text>' +
  '<text x="243" y="107" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">SMS text, short link</text>' +
  '<rect x="169" y="126" width="148" height="56" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="243" y="150" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">IM lures</text>' +
  '<text x="243" y="169" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Teams or chat</text>' +
  '<rect x="169" y="188" width="148" height="56" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="243" y="212" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Quishing</text>' +
  '<text x="243" y="231" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">QR code to phone</text>' +
  '<rect x="322" y="16" width="148" height="40" rx="10" fill="#131329"/>' +
  '<rect x="322" y="16" width="148" height="4" rx="2" fill="#ff8a4c"/>' +
  '<text x="396" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ff8a4c" text-anchor="middle" letter-spacing="1">VOICE</text>' +
  '<rect x="322" y="64" width="148" height="56" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="396" y="88" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Vishing</text>' +
  '<text x="396" y="107" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">phone call</text>' +
  '<rect x="322" y="126" width="148" height="56" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="396" y="150" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Pretexting</text>' +
  '<text x="396" y="169" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">a made-up story</text>' +
  '<rect x="322" y="188" width="148" height="56" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="396" y="212" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Impersonation</text>' +
  '<text x="396" y="231" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">IT, vendor, boss</text>' +
  '<rect x="475" y="16" width="148" height="40" rx="10" fill="#131329"/>' +
  '<rect x="475" y="16" width="148" height="4" rx="2" fill="#ff7aa2"/>' +
  '<text x="549" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ff7aa2" text-anchor="middle" letter-spacing="1">IN PERSON</text>' +
  '<rect x="475" y="64" width="148" height="56" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="549" y="88" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Tailgating</text>' +
  '<text x="549" y="107" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">follows unnoticed</text>' +
  '<rect x="475" y="126" width="148" height="56" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="549" y="150" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Piggybacking</text>' +
  '<text x="549" y="169" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">door held for them</text>' +
  '<rect x="475" y="188" width="148" height="56" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="549" y="212" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Shoulder surfing</text>' +
  '<text x="549" y="231" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">watches you type</text>' +
  '<rect x="475" y="250" width="148" height="56" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="549" y="274" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Dumpster diving</text>' +
  '<text x="549" y="293" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">searches trash</text>' +
  '<rect x="628" y="16" width="148" height="40" rx="10" fill="#131329"/>' +
  '<rect x="628" y="16" width="148" height="4" rx="2" fill="#b794ff"/>' +
  '<text x="702" y="44" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="middle" letter-spacing="1">WEB AND MEDIA</text>' +
  '<rect x="628" y="64" width="148" height="56" rx="10" fill="#131329" stroke="#b794ff" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="702" y="88" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Watering hole</text>' +
  '<text x="702" y="107" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">infects a site you use</text>' +
  '<rect x="628" y="126" width="148" height="56" rx="10" fill="#131329" stroke="#b794ff" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="702" y="150" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Typosquatting</text>' +
  '<text x="702" y="169" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">look-alike domain</text>' +
  '<rect x="628" y="188" width="148" height="56" rx="10" fill="#131329" stroke="#b794ff" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="702" y="212" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Brand imperson.</text>' +
  '<text x="702" y="231" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">copied logo, style</text>' +
  '<rect x="628" y="250" width="148" height="56" rx="10" fill="#131329" stroke="#b794ff" stroke-width="1.5" stroke-opacity="0.5"/>' +
  '<text x="702" y="274" font-family="Rajdhani, Segoe UI, sans-serif" font-size="17" font-weight="700" fill="#e8e8e8" text-anchor="middle">Baiting</text>' +
  '<text x="702" y="293" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">USB drive left out</text>' +
  '<text x="400" y="334" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">The clue in the question names the attack: who was targeted, and through which channel.</text>' +
  '</svg>';

COURSE_FIGURES['email-path'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338" role="img" aria-label="How an email travels and how the Received headers record it. The message goes from the sending server mail.cedarcreek-it.com at 203.0.113.77, to the Microsoft 365 filter, to the mailbox server, to Kevin Tran\'s inbox. In the saved message the Received headers appear newest first: the top line was added last by the mailbox server, the middle one by the filter, and the bottom one was added first and shows the origin, 203.0.113.77. Read them from the bottom up; the lowest line your own provider wrote is the first one you can trust.">' +
  '<rect x="0" y="0" width="800" height="338" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="170" height="92" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="105" y="48" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ee2207" text-anchor="middle">Sending server</text>' +
  '<text x="105" y="70" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">mail.cedarcreek-it.com</text>' +
  '<text x="105" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">203.0.113.77</text>' +
  '<line x1="193" y1="66" x2="202" y2="66" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="213.0,66.0 202.0,72.0 202.0,60.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="216" y="20" width="170" height="92" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="301" y="48" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ffc23d" text-anchor="middle">M365 filter</text>' +
  '<text x="301" y="70" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">...mail.protection</text>' +
  '<text x="301" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">.outlook.com</text>' +
  '<line x1="389" y1="66" x2="398" y2="66" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="409.0,66.0 398.0,72.0 398.0,60.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="412" y="20" width="170" height="92" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="497" y="48" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#00f5ff" text-anchor="middle">Mailbox server</text>' +
  '<text x="497" y="70" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">...prod.outlook.com</text>' +
  '<line x1="585" y1="66" x2="594" y2="66" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="605.0,66.0 594.0,72.0 594.0,60.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="608" y="20" width="170" height="92" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="693" y="48" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#33d17a" text-anchor="middle">Kevin\'s inbox</text>' +
  '<text x="693" y="70" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">k.tran@</text>' +
  '<text x="693" y="88" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">cedarcreek-ind.com</text>' +
  '<text x="20" y="140" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">HEADERS IN THE SAVED MESSAGE (TOP OF FILE FIRST)</text>' +
  '<rect x="20" y="152" width="560" height="38" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.6"/>' +
  '<text x="34" y="176" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="start">Received: from ...prod.outlook.com by ...prod.outlook.com</text>' +
  '<text x="596" y="176" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#00f5ff" text-anchor="start">added last (newest)</text>' +
  '<rect x="20" y="198" width="560" height="38" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="1.5" stroke-opacity="0.6"/>' +
  '<text x="34" y="222" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="start">Received: from ...mail.protection.outlook.com by ...prod...</text>' +
  '<text x="596" y="222" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#ffc23d" text-anchor="start">added second</text>' +
  '<rect x="20" y="244" width="560" height="38" rx="10" fill="#131329" stroke="#ee2207" stroke-width="1.5" stroke-opacity="0.6"/>' +
  '<text x="34" y="268" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="start">Received: from mail.cedarcreek-it.com (203.0.113.77) by ...</text>' +
  '<text x="596" y="268" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#ee2207" text-anchor="start">added first: the origin</text>' +
  '<line x1="770" y1="280" x2="770" y2="171" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="770.0,160.0 776.0,171.0 764.0,171.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<text x="756" y="230" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="end">read</text>' +
  '<text x="756" y="248" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="end">bottom up</text>' +
  '<text x="400" y="318" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Each server adds its Received line on top. The lowest line your provider wrote is the first one you can trust.</text>' +
  '</svg>';

COURSE_FIGURES['email-auth'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 344" role="img" aria-label="The three email authentication checks. SPF asks whether this server is allowed to send for the domain, comparing the sending IP with a list in DNS for the Return-Path domain; result spf=pass or fail. DKIM asks whether the message was signed by the domain and is unchanged, checking the signature against a public key in DNS for the d= domain; result dkim=pass or none. DMARC asks whether SPF or DKIM passed for the visible From domain, and adds alignment, a policy, and reports; result for example dmarc=fail action=none. DMARC policies: p=none delivers and only reports, p=quarantine sends to junk, p=reject refuses the mail. Cedar Creek publishes p=none today.">' +
  '<rect x="0" y="0" width="800" height="344" rx="12" fill="#0d0d1f"/>' +
  '<rect x="20" y="20" width="240" height="230" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="140" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="26" font-weight="700" fill="#00f5ff" text-anchor="middle">SPF</text>' +
  '<text x="140" y="80" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Is this server allowed</text>' +
  '<text x="140" y="99" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">to send for the domain?</text>' +
  '<line x1="38" y1="114" x2="242" y2="114" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="140" y="138" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Checks: sending IP vs</text>' +
  '<text x="140" y="157" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">list in DNS</text>' +
  '<text x="140" y="186" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Domain: Return-Path</text>' +
  '<rect x="50" y="202" width="180" height="30" rx="10" fill="#0d0d1f" stroke="#00f5ff" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="140" y="222" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">spf=pass / fail</text>' +
  '<rect x="280" y="20" width="240" height="230" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="26" font-weight="700" fill="#ffc23d" text-anchor="middle">DKIM</text>' +
  '<text x="400" y="80" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Was it signed by the</text>' +
  '<text x="400" y="99" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">domain, and unchanged?</text>' +
  '<line x1="298" y1="114" x2="502" y2="114" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="400" y="138" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Checks: signature vs</text>' +
  '<text x="400" y="157" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">public key in DNS</text>' +
  '<text x="400" y="186" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Domain: d= in signature</text>' +
  '<rect x="310" y="202" width="180" height="30" rx="10" fill="#0d0d1f" stroke="#ffc23d" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="400" y="222" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">dkim=pass / none</text>' +
  '<rect x="540" y="20" width="240" height="230" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="660" y="54" font-family="Rajdhani, Segoe UI, sans-serif" font-size="26" font-weight="700" fill="#b794ff" text-anchor="middle">DMARC</text>' +
  '<text x="660" y="80" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">Do SPF or DKIM pass for</text>' +
  '<text x="660" y="99" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600" fill="#e8e8e8" text-anchor="middle">the From domain?</text>' +
  '<line x1="558" y1="114" x2="762" y2="114" fill="none" stroke="#3a3a5c" stroke-width="1"/>' +
  '<text x="660" y="138" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Adds: alignment, a policy,</text>' +
  '<text x="660" y="157" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">and reports</text>' +
  '<text x="660" y="186" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Domain: visible From</text>' +
  '<rect x="570" y="202" width="180" height="30" rx="10" fill="#0d0d1f" stroke="#b794ff" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="660" y="222" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="middle">dmarc=fail action=none</text>' +
  '<text x="20" y="284" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">DMARC POLICY</text>' +
  '<rect x="150" y="266" width="200" height="30" rx="10" fill="#131329" stroke="#a0a0ac" stroke-width="1.5"/>' +
  '<text x="250" y="286" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">p=none: deliver, report only</text>' +
  '<rect x="364" y="266" width="200" height="30" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="1.5"/>' +
  '<text x="464" y="286" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#ffc23d" text-anchor="middle">p=quarantine: send to junk</text>' +
  '<rect x="578" y="266" width="200" height="30" rx="10" fill="#131329" stroke="#33d17a" stroke-width="1.5"/>' +
  '<text x="678" y="286" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#33d17a" text-anchor="middle">p=reject: refuse the mail</text>' +
  '<text x="400" y="324" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Cedar Creek publishes p=none today, so forged @cedarcreek-ind.com mail is still delivered.</text>' +
  '</svg>';

COURSE_FIGURES['online-offline'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 278" role="img" aria-label="Online versus offline password attacks. Online: an attacker sends many guesses to a live login page such as a VPN or Microsoft 365, and the account locks or slows; each guess crosses the network, is logged and rate-limited, only a few guesses per minute are possible, and spraying and credential stuffing happen here. Offline: an attacker takes a stolen copy of the hash file and runs a cracker such as John the Ripper on GPUs to find matching passwords; there is no network, no logs, and no lockout, billions of fast guesses per second are possible, only length and slow hashes help, so hash files must be protected like passwords.">' +
  '<rect x="0" y="0" width="800" height="278" rx="12" fill="#0d0d1f"/>' +
  '<rect x="16" y="16" width="372" height="246" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="202" y="46" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ffc23d" text-anchor="middle">ONLINE</text>' +
  '<text x="202" y="68" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Guessing against a live login</text>' +
  '<rect x="34" y="86" width="100" height="54" rx="10" fill="#0d0d1f" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.3"/>' +
  '<text x="84" y="109" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="middle">Attacker</text>' +
  '<text x="84" y="127" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">many guesses</text>' +
  '<line x1="136" y1="113" x2="142" y2="113" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="150.0,113.0 142.0,118.0 142.0,108.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="152" y="86" width="100" height="54" rx="10" fill="#0d0d1f" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.3"/>' +
  '<text x="202" y="109" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="middle">Login page</text>' +
  '<text x="202" y="127" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">VPN, M365</text>' +
  '<line x1="254" y1="113" x2="260" y2="113" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="268.0,113.0 260.0,118.0 260.0,108.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="270" y="86" width="100" height="54" rx="10" fill="#0d0d1f" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.3"/>' +
  '<text x="320" y="109" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="middle">Account</text>' +
  '<text x="320" y="127" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">locks or slows</text>' +
  '<text x="46" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">- Each guess crosses the network</text>' +
  '<text x="46" y="194" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">- Logged, rate-limited, lockout</text>' +
  '<text x="46" y="216" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">- A few guesses per minute</text>' +
  '<text x="46" y="238" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">- Spraying and stuffing live here</text>' +
  '<rect x="412" y="16" width="372" height="246" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="598" y="46" font-family="Rajdhani, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#ee2207" text-anchor="middle">OFFLINE</text>' +
  '<text x="598" y="68" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">Cracking a stolen copy of the hashes</text>' +
  '<rect x="430" y="86" width="100" height="54" rx="10" fill="#0d0d1f" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.3"/>' +
  '<text x="480" y="109" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="middle">Hash file</text>' +
  '<text x="480" y="127" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">stolen copy</text>' +
  '<line x1="532" y1="113" x2="538" y2="113" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="546.0,113.0 538.0,118.0 538.0,108.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="548" y="86" width="100" height="54" rx="10" fill="#0d0d1f" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.3"/>' +
  '<text x="598" y="109" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="middle">Cracker</text>' +
  '<text x="598" y="127" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">John, GPUs</text>' +
  '<line x1="650" y1="113" x2="656" y2="113" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.7"/><polygon points="664.0,113.0 656.0,118.0 656.0,108.0" fill="#e8e8e8" fill-opacity="0.7"/>' +
  '<rect x="666" y="86" width="100" height="54" rx="10" fill="#0d0d1f" stroke="#e8e8e8" stroke-width="1" stroke-opacity="0.3"/>' +
  '<text x="716" y="109" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#e8e8e8" text-anchor="middle">Passwords</text>' +
  '<text x="716" y="127" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="middle">that match</text>' +
  '<text x="442" y="172" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">- No network, no logs, no lockout</text>' +
  '<text x="442" y="194" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">- Billions of fast guesses a second</text>' +
  '<text x="442" y="216" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">- Only length and slow hashes help</text>' +
  '<text x="442" y="238" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="start">- Protect hash files like passwords</text>' +
  '</svg>';

COURSE_FIGURES['salted-hashes'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 282" role="img" aria-label="Unsalted versus salted password hashes. Left, no salt, as in Windows NT hashes: three accounts, m.alvarez, r.doyle, and n.brooks, all use Welcome1 and all get the same hash, so shared passwords show up and rainbow tables work. Right, salted, as in sha512crypt and yescrypt: the same password Welcome1 combined with three different random salts gives three different hashes, so precomputed tables fail and each account must be attacked on its own. Hash values shown are illustrative.">' +
  '<rect x="0" y="0" width="800" height="282" rx="12" fill="#0d0d1f"/>' +
  '<rect x="16" y="16" width="372" height="250" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="202" y="46" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ee2207" text-anchor="middle">NO SALT (Windows NT hash)</text>' +
  '<text x="32" y="92" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="start">m.alvarez</text>' +
  '<text x="120" y="92" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">Welcome1</text>' +
  '<line x1="196" y1="87" x2="214" y2="87" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="222.0,87.0 214.0,92.0 214.0,82.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="228" y="70" width="148" height="32" rx="10" fill="#ee2207" fill-opacity="0.12" stroke="#ee2207" stroke-width="1"/>' +
  '<text x="302" y="91" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">hash A (same)</text>' +
  '<text x="32" y="144" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="start">r.doyle</text>' +
  '<text x="120" y="144" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">Welcome1</text>' +
  '<line x1="196" y1="139" x2="214" y2="139" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="222.0,139.0 214.0,144.0 214.0,134.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="228" y="122" width="148" height="32" rx="10" fill="#ee2207" fill-opacity="0.12" stroke="#ee2207" stroke-width="1"/>' +
  '<text x="302" y="143" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">hash A (same)</text>' +
  '<text x="32" y="196" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="start">n.brooks</text>' +
  '<text x="120" y="196" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">Welcome1</text>' +
  '<line x1="196" y1="191" x2="214" y2="191" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="222.0,191.0 214.0,196.0 214.0,186.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="228" y="174" width="148" height="32" rx="10" fill="#ee2207" fill-opacity="0.12" stroke="#ee2207" stroke-width="1"/>' +
  '<text x="302" y="195" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">hash A (same)</text>' +
  '<text x="202" y="236" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Same password, same hash: shared passwords</text>' +
  '<text x="202" y="254" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">show up, and rainbow tables work.</text>' +
  '<rect x="412" y="16" width="372" height="250" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="598" y="46" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="middle">SALTED (sha512crypt, yescrypt)</text>' +
  '<text x="428" y="84" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">Welcome1</text>' +
  '<text x="428" y="101" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="start">+ salt Xq3</text>' +
  '<line x1="526" y1="87" x2="544" y2="87" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="552.0,87.0 544.0,92.0 544.0,82.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="558" y="70" width="210" height="32" rx="10" fill="#33d17a" fill-opacity="0.1" stroke="#33d17a" stroke-width="1"/>' +
  '<text x="663" y="91" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">hash 9fK2... (unique)</text>' +
  '<text x="428" y="136" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">Welcome1</text>' +
  '<text x="428" y="153" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="start">+ salt b7Lp</text>' +
  '<line x1="526" y1="139" x2="544" y2="139" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="552.0,139.0 544.0,144.0 544.0,134.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="558" y="122" width="210" height="32" rx="10" fill="#33d17a" fill-opacity="0.1" stroke="#33d17a" stroke-width="1"/>' +
  '<text x="663" y="143" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">hash 2Rw8... (unique)</text>' +
  '<text x="428" y="188" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start">Welcome1</text>' +
  '<text x="428" y="205" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#ffc23d" text-anchor="start">+ salt M0az</text>' +
  '<line x1="526" y1="191" x2="544" y2="191" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="552.0,191.0 544.0,196.0 544.0,186.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<rect x="558" y="174" width="210" height="32" rx="10" fill="#33d17a" fill-opacity="0.1" stroke="#33d17a" stroke-width="1"/>' +
  '<text x="663" y="195" font-family="Share Tech Mono, Consolas, monospace" font-size="12.5" font-weight="400" fill="#e8e8e8" text-anchor="middle">hash eT5v... (unique)</text>' +
  '<text x="598" y="236" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Every stored hash is different. Precomputed</text>' +
  '<text x="598" y="254" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">tables fail, and each account is attacked alone.</text>' +
  '</svg>';

COURSE_FIGURES['entropy-bars'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 406" role="img" aria-label="Bar chart of entropy in bits for randomly chosen passwords: 6 random digits 19.9 bits (one million guesses); 8 random lowercase letters 37.6 bits (seconds offline); 4 random Diceware words 51.7 bits; 6 random Diceware words 77.5 bits; 12 random characters from all 95 types 78.8 bits; 20 random characters from a password manager 131.4 bits. Note: Summer2026! looks like 11 mixed characters, about 72 bits by the formula, but it follows a pattern an attacker tries in 16 guesses.">' +
  '<rect x="0" y="0" width="800" height="406" rx="12" fill="#0d0d1f"/>' +
  '<text x="20" y="26" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#a0a0ac" text-anchor="start" letter-spacing="1.5">ENTROPY IN BITS (RANDOM CHOICE ONLY)</text>' +
  '<line x1="250" y1="34" x2="250" y2="304" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="250" y="320" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">0</text>' +
  '<line x1="317.1428571428571" y1="34" x2="317.1428571428571" y2="304" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="317.1428571428571" y="320" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">20</text>' +
  '<line x1="384.2857142857143" y1="34" x2="384.2857142857143" y2="304" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="384.2857142857143" y="320" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">40</text>' +
  '<line x1="451.42857142857144" y1="34" x2="451.42857142857144" y2="304" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="451.42857142857144" y="320" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">60</text>' +
  '<line x1="518.5714285714286" y1="34" x2="518.5714285714286" y2="304" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="518.5714285714286" y="320" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">80</text>' +
  '<line x1="585.7142857142858" y1="34" x2="585.7142857142858" y2="304" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="585.7142857142858" y="320" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">100</text>' +
  '<line x1="652.8571428571429" y1="34" x2="652.8571428571429" y2="304" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="652.8571428571429" y="320" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">120</text>' +
  '<line x1="720" y1="34" x2="720" y2="304" fill="none" stroke="#3a3a5c" stroke-width="1" stroke-opacity="0.6"/>' +
  '<text x="720" y="320" font-family="Share Tech Mono, Consolas, monospace" font-size="12" font-weight="400" fill="#a0a0ac" text-anchor="middle">140</text>' +
  '<text x="238" y="60" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="end">6 random digits</text>' +
  '<rect x="250" y="40" width="66.80714285714285" height="30" rx="4" fill="#ee2207" fill-opacity="0.75"/>' +
  '<text x="324.8071428571428" y="60" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="start">19.9  1 million guesses</text>' +
  '<text x="238" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="end">8 random lowercase</text>' +
  '<rect x="250" y="84" width="126.22857142857143" height="30" rx="4" fill="#ee2207" fill-opacity="0.75"/>' +
  '<text x="384.2285714285714" y="104" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="start">37.6  seconds offline</text>' +
  '<text x="238" y="148" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="end">4 random words (Diceware)</text>' +
  '<rect x="250" y="128" width="173.56428571428575" height="30" rx="4" fill="#ffc23d" fill-opacity="0.75"/>' +
  '<text x="431.56428571428575" y="148" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="start">51.7</text>' +
  '<text x="238" y="192" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="end">6 random words (Diceware)</text>' +
  '<rect x="250" y="172" width="260.17857142857144" height="30" rx="4" fill="#33d17a" fill-opacity="0.75"/>' +
  '<text x="518.1785714285714" y="192" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="start">77.5</text>' +
  '<text x="238" y="236" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="end">12 random, all 95 types</text>' +
  '<rect x="250" y="216" width="264.54285714285714" height="30" rx="4" fill="#33d17a" fill-opacity="0.75"/>' +
  '<text x="522.5428571428572" y="236" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="start">78.8</text>' +
  '<text x="238" y="280" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="500" fill="#e8e8e8" text-anchor="end">20 random (password manager)</text>' +
  '<rect x="250" y="260" width="441.12857142857143" height="30" rx="4" fill="#00f5ff" fill-opacity="0.75"/>' +
  '<text x="699.1285714285714" y="280" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#e8e8e8" text-anchor="start">131.4</text>' +
  '<rect x="20" y="338" width="760" height="52" rx="10" fill="#ee2207" fill-opacity="0.07" stroke="#ee2207" stroke-width="1.5"/>' +
  '<text x="400" y="359" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Summer2026! looks like 11 mixed characters (about 72 bits by the formula),</text>' +
  '<text x="400" y="378" font-family="Inter, Segoe UI, sans-serif" font-size="13.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">but it follows a pattern an attacker tries in 16 guesses. Patterns, not formulas, decide real strength.</text>' +
  '</svg>';

COURSE_FIGURES['trust-models'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 294" role="img" aria-label="Perimeter trust versus Zero Trust. Left: a firewall and VPN wall surrounds plant, office, servers, HR, and engineering, which all connect freely; inside means trusted, so an attacker with one phished login, shown as a red dot, can reach everything. Right: Zero Trust puts a gate in front of every resource and checks identity, device, and context on each request, so the attacker\'s attempt to move from the office to HR is blocked.">' +
  '<rect x="0" y="0" width="800" height="294" rx="12" fill="#0d0d1f"/>' +
  '<rect x="16" y="16" width="372" height="262" rx="10" fill="#131329" stroke="#ee2207" stroke-width="2"/>' +
  '<text x="202" y="44" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ee2207" text-anchor="middle">PERIMETER TRUST</text>' +
  '<rect x="40" y="60" width="324" height="170" rx="16" fill="none" stroke="#e8e8e8" stroke-width="4" stroke-opacity="0.35"/>' +
  '<text x="202" y="78" font-family="Share Tech Mono, Consolas, monospace" font-size="11.5" font-weight="400" fill="#a0a0ac" text-anchor="middle" letter-spacing="1.5">FIREWALL + VPN</text>' +
  '<line x1="90" y1="120" x2="202" y2="110" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<line x1="90" y1="120" x2="314" y2="120" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<line x1="90" y1="120" x2="130" y2="190" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<line x1="90" y1="120" x2="274" y2="190" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<line x1="202" y1="110" x2="314" y2="120" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<line x1="202" y1="110" x2="130" y2="190" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<line x1="202" y1="110" x2="274" y2="190" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<line x1="314" y1="120" x2="130" y2="190" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<line x1="314" y1="120" x2="274" y2="190" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<line x1="130" y1="190" x2="274" y2="190" fill="none" stroke="#33d17a" stroke-width="1" stroke-opacity="0.35"/>' +
  '<circle cx="90" cy="120" r="26" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="90" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Plant</text>' +
  '<circle cx="202" cy="110" r="26" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="202" y="114" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Office</text>' +
  '<circle cx="314" cy="120" r="26" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="314" y="124" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Servers</text>' +
  '<circle cx="130" cy="190" r="26" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="130" y="194" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">HR</text>' +
  '<circle cx="274" cy="190" r="26" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="274" y="194" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">ENG</text>' +
  '<circle cx="166" cy="150" r="9" fill="#ee2207"/>' +
  '<text x="202" y="254" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Inside = trusted. One phished login reaches everything.</text>' +
  '<rect x="412" y="16" width="372" height="262" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="598" y="44" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="middle">ZERO TRUST</text>' +
  '<circle cx="470" cy="110" r="26" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="470" y="114" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Plant</text>' +
  '<rect x="461" y="64" width="18" height="14" rx="3" fill="#ffc23d"/>' +
  '<circle cx="598" cy="100" r="26" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="598" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Office</text>' +
  '<rect x="589" y="54" width="18" height="14" rx="3" fill="#ffc23d"/>' +
  '<circle cx="726" cy="110" r="26" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="726" y="114" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Servers</text>' +
  '<rect x="717" y="64" width="18" height="14" rx="3" fill="#ffc23d"/>' +
  '<circle cx="520" cy="190" r="26" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="520" y="194" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">HR</text>' +
  '<rect x="511" y="144" width="18" height="14" rx="3" fill="#ffc23d"/>' +
  '<circle cx="676" cy="190" r="26" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="676" y="194" font-family="Inter, Segoe UI, sans-serif" font-size="11.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">ENG</text>' +
  '<rect x="667" y="144" width="18" height="14" rx="3" fill="#ffc23d"/>' +
  '<circle cx="598" cy="150" r="9" fill="#ee2207"/>' +
  '<line x1="590" y1="156" x2="542.2" y2="175.8" fill="none" stroke="#ee2207" stroke-width="2" stroke-opacity="0.7" stroke-dasharray="4 4"/><polygon points="532.0,180.0 539.9,170.3 544.5,181.3" fill="#ee2207" fill-opacity="0.7"/>' +
  '<text x="560" y="160" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#ee2207" text-anchor="middle">x</text>' +
  '<text x="598" y="236" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Gate (amber) at every resource:</text>' +
  '<text x="598" y="254" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">identity, device, and context checked each time.</text>' +
  '</svg>';

COURSE_FIGURES['zt-model'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 368" role="img" aria-label="Zero Trust architecture. The control plane decides: signals (identity and MFA, device health, context such as time and place, threat intelligence) feed the policy engine, which grants, denies, or revokes access; the policy administrator carries out the decision. It is guided by adaptive identity, threat scope reduction, and policy-driven access control. The data plane enforces: a subject or system, such as Priya on her laptop, sends a request to the policy enforcement point, which the policy administrator tells to open or block the path to the resource, the ENG-FS01 share, inside a small implicit trust zone.">' +
  '<rect x="0" y="0" width="800" height="368" rx="12" fill="#0d0d1f"/>' +
  '<rect x="16" y="16" width="768" height="176" rx="10" fill="#b794ff" fill-opacity="0.06" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="32" y="38" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#b794ff" text-anchor="start" letter-spacing="1.5">CONTROL PLANE: DECIDES</text>' +
  '<rect x="300" y="52" width="200" height="70" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="400" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#b794ff" text-anchor="middle">Policy engine</text>' +
  '<text x="400" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">grant, deny, revoke</text>' +
  '<rect x="560" y="52" width="200" height="70" rx="10" fill="#131329" stroke="#b794ff" stroke-width="2"/>' +
  '<text x="660" y="82" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#b794ff" text-anchor="middle">Policy administrator</text>' +
  '<text x="660" y="104" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">carries out the decision</text>' +
  '<line x1="502" y1="87" x2="545" y2="87" fill="none" stroke="#b794ff" stroke-width="2"/><polygon points="556.0,87.0 545.0,93.0 545.0,81.0" fill="#b794ff"/>' +
  '<rect x="32" y="52" width="210" height="22" rx="5" fill="#131329"/>' +
  '<text x="137" y="68" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Identity + MFA</text>' +
  '<rect x="32" y="78" width="210" height="22" rx="5" fill="#131329"/>' +
  '<text x="137" y="94" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Device health</text>' +
  '<rect x="32" y="104" width="210" height="22" rx="5" fill="#131329"/>' +
  '<text x="137" y="120" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Context, time, place</text>' +
  '<rect x="32" y="130" width="210" height="22" rx="5" fill="#131329"/>' +
  '<text x="137" y="146" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Threat intel</text>' +
  '<line x1="244" y1="87" x2="285" y2="87" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.6"/><polygon points="296.0,87.0 285.0,93.0 285.0,81.0" fill="#e8e8e8" fill-opacity="0.6"/>' +
  '<text x="32" y="176" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#a0a0ac" text-anchor="start">Guided by adaptive identity, threat scope reduction, policy-driven access control</text>' +
  '<rect x="16" y="202" width="768" height="150" rx="10" fill="#00f5ff" fill-opacity="0.05" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="32" y="224" font-family="Share Tech Mono, Consolas, monospace" font-size="13" font-weight="400" fill="#00f5ff" text-anchor="start" letter-spacing="1.5">DATA PLANE: ENFORCES</text>' +
  '<rect x="40" y="252" width="190" height="70" rx="10" fill="#131329" stroke="#e8e8e8" stroke-width="2"/>' +
  '<text x="135" y="282" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#e8e8e8" text-anchor="middle">Subject / system</text>' +
  '<text x="135" y="304" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">Priya on her laptop</text>' +
  '<rect x="305" y="252" width="190" height="70" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="400" y="282" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#ffc23d" text-anchor="middle">Policy enforcement</text>' +
  '<text x="400" y="304" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">point (PEP)</text>' +
  '<rect x="560" y="238" width="210" height="98" rx="10" fill="none" stroke="#33d17a" stroke-width="1.5" stroke-dasharray="6 5"/>' +
  '<text x="665" y="256" font-family="Share Tech Mono, Consolas, monospace" font-size="11" font-weight="400" fill="#33d17a" text-anchor="middle" letter-spacing="1.5">IMPLICIT TRUST ZONE</text>' +
  '<rect x="580" y="268" width="170" height="56" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="665" y="294" font-family="Rajdhani, Segoe UI, sans-serif" font-size="19" font-weight="700" fill="#33d17a" text-anchor="middle">Resource</text>' +
  '<text x="665" y="314" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">ENG-FS01 share</text>' +
  '<line x1="232" y1="287" x2="290" y2="287" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.8"/><polygon points="301.0,287.0 290.0,293.0 290.0,281.0" fill="#e8e8e8" fill-opacity="0.8"/>' +
  '<line x1="497" y1="287" x2="565.1" y2="294.8" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-opacity="0.8"/><polygon points="576.0,296.0 564.4,300.7 565.7,288.8" fill="#e8e8e8" fill-opacity="0.8"/>' +
  '<line x1="700" y1="124" x2="487.6" y2="242.6" fill="none" stroke="#b794ff" stroke-width="2" stroke-opacity="0.8" stroke-dasharray="6 4"/><polygon points="478.0,248.0 484.7,237.4 490.5,247.9" fill="#b794ff" fill-opacity="0.8"/>' +
  '<text x="626" y="186" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#b794ff" text-anchor="start">open or block</text>' +
  '</svg>';

COURSE_FIGURES['awareness-cycle'] =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 410" role="img" aria-label="Security awareness program cycle with five steps. Assess: a baseline simulation and completion rates. Train: short, frequent training with Cedar Creek examples. Test: phishing campaigns with instant feedback. Report: initial, then recurring reporting of click rate, report rate, and time to report. Improve: target departments and coach repeat clickers. Then back to assess. The Report button in the center feeds every step.">' +
  '<rect x="0" y="0" width="800" height="410" rx="12" fill="#0d0d1f"/>' +
  '<circle cx="400" cy="210" r="165" fill="none" stroke="#3a3a5c" stroke-width="2" stroke-dasharray="6 6"/>' +
  '<path d="M461.8 57.0 A165 165 0 0 1 526.4 103.9" fill="none" stroke="#e8e8e8" stroke-opacity="0.5" stroke-width="2"/>' +
  '<path d="M564.6 221.5 A165 165 0 0 1 539.9 297.4" fill="none" stroke="#e8e8e8" stroke-opacity="0.5" stroke-width="2"/>' +
  '<path d="M439.9 370.1 A165 165 0 0 1 360.1 370.1" fill="none" stroke="#e8e8e8" stroke-opacity="0.5" stroke-width="2"/>' +
  '<path d="M260.1 297.4 A165 165 0 0 1 235.4 221.5" fill="none" stroke="#e8e8e8" stroke-opacity="0.5" stroke-width="2"/>' +
  '<path d="M273.6 103.9 A165 165 0 0 1 338.2 57.0" fill="none" stroke="#e8e8e8" stroke-opacity="0.5" stroke-width="2"/>' +
  '<rect x="312" y="10" width="176" height="70" rx="10" fill="#131329" stroke="#00f5ff" stroke-width="2"/>' +
  '<text x="400" y="35" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#00f5ff" text-anchor="middle">Assess</text>' +
  '<text x="400" y="54" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Baseline simulation,</text>' +
  '<text x="400" y="70" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">completion rates</text>' +
  '<rect x="468.9243251887003" y="124.01219592813368" width="176" height="70" rx="10" fill="#131329" stroke="#ffc23d" stroke-width="2"/>' +
  '<text x="556.9243251887003" y="149.01219592813368" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ffc23d" text-anchor="middle">Train</text>' +
  '<text x="556.9243251887003" y="168.01219592813368" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Short, frequent,</text>' +
  '<text x="556.9243251887003" y="184.01219592813368" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Cedar Creek examples</text>' +
  '<rect x="408.98456662825805" y="308.4878040718663" width="176" height="70" rx="10" fill="#131329" stroke="#ff8a4c" stroke-width="2"/>' +
  '<text x="496.98456662825805" y="333.4878040718663" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ff8a4c" text-anchor="middle">Test</text>' +
  '<text x="496.98456662825805" y="352.4878040718663" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Phishing campaigns,</text>' +
  '<text x="496.98456662825805" y="368.4878040718663" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">instant feedback</text>' +
  '<rect x="215.01543337174195" y="308.4878040718663" width="176" height="70" rx="10" fill="#131329" stroke="#ff7aa2" stroke-width="2"/>' +
  '<text x="303.01543337174195" y="333.4878040718663" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#ff7aa2" text-anchor="middle">Report</text>' +
  '<text x="303.01543337174195" y="352.4878040718663" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Initial, then recurring:</text>' +
  '<text x="303.01543337174195" y="368.4878040718663" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">click, report, time</text>' +
  '<rect x="155.07567481129968" y="124.01219592813362" width="176" height="70" rx="10" fill="#131329" stroke="#33d17a" stroke-width="2"/>' +
  '<text x="243.07567481129968" y="149.01219592813362" font-family="Rajdhani, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#33d17a" text-anchor="middle">Improve</text>' +
  '<text x="243.07567481129968" y="168.01219592813362" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">Target departments,</text>' +
  '<text x="243.07567481129968" y="184.01219592813362" font-family="Inter, Segoe UI, sans-serif" font-size="12.5" font-weight="500" fill="#e8e8e8" text-anchor="middle">coach repeat clickers</text>' +
  '<text x="400" y="206" font-family="Rajdhani, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#e8e8e8" text-anchor="middle">Report button</text>' +
  '<text x="400" y="226" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="500" fill="#a0a0ac" text-anchor="middle">feeds every step</text>' +
  '</svg>';
