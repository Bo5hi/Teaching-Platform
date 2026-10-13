// This Week's Checklist tasks per week (Hub checklist).
// Shared by MCCoE_Hub.html and MCCoE_Student_Tracker.html — edit here only.
// Order matters: Hub check-off keys use each item's position (…_w<week>_i<index>).
var WEEK_TASKS = {
  1:{title:'Cybersecurity Foundations',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 1 Content',p:'p1',w:1},{t:'📝 Take Week 1 Quiz',p:'p1',w:1},
      {t:'🔤 Acronym Drill',p:'p1',w:1},{t:'🔬 Complete Lab Activity',p:'p1',w:1}]},
    {icon:'💻',label:'Pillar 2 — CyberSec Academy',color:'#00e676',items:[
      {t:'📚 Curriculum Module 1: Cybersecurity Foundations',p:'p2-cur',cur:0},
      {t:'🎮 Quiz: Cyber Foundations',p:'p2'},{t:'🔒 Password Checker',p:'p2'},{t:'🎣 Phishing Spotter',p:'p2'}]},
    {icon:'📋',label:'Pillar 3 — Curriculum Project',color:'#a78bfa',items:[
      {t:'📄 Project 1: Target Breach — Deep Dive (50 pts)',p:'p3',proj:1}]}
  ]},
  2:{title:'Network Fundamentals',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 2 Content',p:'p1',w:2},{t:'📝 Take Week 2 Quiz',p:'p1',w:2},
      {t:'🔤 Acronym Drill',p:'p1',w:2},{t:'🔬 Complete Lab Activity',p:'p1',w:2}]},
    {icon:'💻',label:'Pillar 2 — CyberSec Academy',color:'#00e676',items:[
      {t:'📚 Curriculum Module 2: Network Fundamentals',p:'p2-cur',cur:1},
      {t:'🎮 Quiz: Network Security',p:'p2'},{t:'🖥️ SOC Simulator',p:'p2'}]},
    {icon:'📋',label:'Pillar 3 — Curriculum Project',color:'#a78bfa',items:[
      {t:'📄 Project 2: Target Breach — Frameworks & Writing (100 pts)',p:'p3',proj:2}]}
  ]},
  3:{title:'Threat Landscape',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 3 Content',p:'p1',w:3},{t:'📝 Take Week 3 Quiz',p:'p1',w:3},
      {t:'🔤 Acronym Drill',p:'p1',w:3},{t:'🔬 Complete Lab Activity',p:'p1',w:3}]},
    {icon:'💻',label:'Pillar 2 — CyberSec Academy',color:'#00e676',items:[
      {t:'📚 Curriculum Module 3: Threat Landscape',p:'p2-cur',cur:2},
      {t:'🎮 Quiz: Threat Landscape',p:'p2'},{t:'🃏 Flashcard Drill',p:'p2'}]},
    {icon:'📋',label:'Pillar 3 — Curriculum Project',color:'#a78bfa',items:[
      {t:'📄 Project 3: Colonial Pipeline — Deep Dive (50 pts)',p:'p3',proj:3},
      {t:'🗺️ MITRE ATT&CK Mapping Tool — Wednesday Activity',p:'tool',url:'MITRE_Attack_Map.html?panel=techniques'},
      {t:'📰 Source Doc: CISA Advisory AA21-131A (Official PDF)',p:'ext',url:'https://www.cisa.gov/sites/default/files/publications/AA21-131A_Darkside_Ransomware.pdf'},
      {t:'🏛️ Source Doc: CEO Senate Testimony — June 8 2021 (Official PDF)',p:'ext',url:'https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/Testimony-Blount-2021-06-08.pdf'},
      {t:'🔍 Source Doc: CISA — What We Learned Two Years Later',p:'ext',url:'https://www.cisa.gov/news-events/news/attack-colonial-pipeline-what-weve-learned-what-weve-done-over-past-two-years'}]}
  ]},
  4:{title:'Core Classes',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 4 Content',p:'p1',w:4},{t:'📝 Take Week 4 Quiz',p:'p1',w:4},
      {t:'🔤 Acronym Drill',p:'p1',w:4},{t:'🔬 Complete Lab Activity',p:'p1',w:4}]},
    {icon:'💻',label:'Pillar 2 — CyberSec Academy',color:'#00e676',items:[
      {t:'📚 Curriculum Module 5: Kali Linux Basics',p:'p2-cur',cur:4},
      {t:'🎮 Quiz: OS & Linux',p:'p2'},{t:'🎮 Quiz: Access Control',p:'p2'}]},
    {icon:'📋',label:'Pillar 3 — Curriculum Project',color:'#a78bfa',items:[
      {t:'📄 Project 4: Colonial Pipeline — Frameworks & Writing (100 pts)',p:'p3',proj:4},
      {t:'🗺️ MITRE ATT&CK Reference Tool (Technique Breakdown)',p:'tool',url:'MITRE_Attack_Map.html?panel=techniques'},
      {t:'📰 Source Doc: CISA Advisory AA21-131A (Official PDF)',p:'ext',url:'https://www.cisa.gov/sites/default/files/publications/AA21-131A_Darkside_Ransomware.pdf'},
      {t:'🏛️ Source Doc: CEO Senate Testimony — June 8 2021 (Official PDF)',p:'ext',url:'https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/Testimony-Blount-2021-06-08.pdf'},
      {t:'🔍 Source Doc: CISA — What We Learned Two Years Later',p:'ext',url:'https://www.cisa.gov/news-events/news/attack-colonial-pipeline-what-weve-learned-what-weve-done-over-past-two-years'}]},
    {icon:'🔓',label:'Pillar 4 — Ethical Hacking Lab',color:'#00ff41',items:[
      {t:'🕵️ Phase 1: Reconnaissance',p:'p4'},{t:'🔍 Phase 2: Scanning & Enumeration',p:'p4'}]}
  ]},
  5:{title:'Kali Linux Fundamentals',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 5 Content',p:'p1',w:5},{t:'📝 Take Week 5 Quiz',p:'p1',w:5},
      {t:'🔤 Acronym Drill',p:'p1',w:5},{t:'🔬 Complete Lab Activity',p:'p1',w:5}]},
    {icon:'💻',label:'Pillar 2 — CyberSec Academy',color:'#00e676',items:[
      {t:'📚 Curriculum Module 6: Network Reconnaissance',p:'p2-cur',cur:5},
      {t:'🎮 Quiz: Kali & Pentesting',p:'p2'}]},
    {icon:'📋',label:'Pillar 3 — Curriculum Project',color:'#a78bfa',items:[
      {t:'📄 Project 5: SolarWinds — Deep Dive (50 pts)',p:'p3',proj:5},
      {t:'🏛️ NIST CSF 2.0 Tool — SolarWinds Analysis',p:'tool',url:'NIST_CSF_Map.html'},
      {t:'📰 Source Doc: CISA Advisory AA20-352A (Official)',p:'ext',url:'https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a'},
      {t:'🏛️ Source Doc: SolarWinds CEO Senate Testimony — Feb 23 2021',p:'ext',url:'https://www.intelligence.senate.gov/hearings/open-hearing-review-foreign-cyber-threats-united-states-0'},
      {t:'🔍 Source Doc: CISA Emergency Directive 21-01',p:'ext',url:'https://www.cisa.gov/emergency-directive-21-01'}]},
    {icon:'🔓',label:'Pillar 4 — Ethical Hacking Lab',color:'#00ff41',items:[
      {t:'💥 Phase 3: Exploitation',p:'p4'},{t:'👁️ Phase 4: Post-Exploitation',p:'p4'},{t:'📊 Phase 5: Reporting & Capstone',p:'p4'}]}
  ]},
  6:{title:'Human Factors',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 6 Content',p:'p1',w:6},{t:'📝 Take Week 6 Quiz',p:'p1',w:6},
      {t:'🔤 Acronym Drill',p:'p1',w:6},{t:'🔬 Complete Lab Activity',p:'p1',w:6}]},
    {icon:'💻',label:'Pillar 2 — CyberSec Academy',color:'#00e676',items:[
      {t:'📚 Curriculum Module 4: Human Factors',p:'p2-cur',cur:3},
      {t:'🎮 Quiz: Social Engineering',p:'p2'},{t:'🎣 Phishing Spotter Challenge',p:'p2'}]},
    {icon:'📋',label:'Pillar 3 — Curriculum Project',color:'#a78bfa',items:[
      {t:'📄 Project 6: SolarWinds — Frameworks & Writing (100 pts)',p:'p3',proj:6},
      {t:'🏛️ NIST CSF 2.0 Tool — Reference for Project 6',p:'tool',url:'NIST_CSF_Map.html'},
      {t:'📰 Source Doc: CISA Advisory AA20-352A (Reference)',p:'ext',url:'https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a'}]}
  ]},
  7:{title:'Defensive Security & Tools',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 7 Content',p:'p1',w:7},{t:'📝 Take Week 7 Quiz',p:'p1',w:7},
      {t:'🔤 Acronym Drill',p:'p1',w:7},{t:'🔬 Complete Lab Activity',p:'p1',w:7}]},
    {icon:'💻',label:'Pillar 2 — CyberSec Academy',color:'#00e676',items:[
      {t:'📚 Curriculum Module 7: Secure Development',p:'p2-cur',cur:6},
      {t:'🎮 Quiz: Defensive Security',p:'p2'},{t:'🖥️ SOC Simulator',p:'p2'}]},
    {icon:'📋',label:'Pillar 3 — Curriculum Project',color:'#a78bfa',items:[
      {t:'📄 Project 7: Equifax — Deep Dive (50 pts)',p:'p3',proj:7}]},
    {icon:'🛡️',label:'Pillar 5 — Blue Team Lab',color:'#00f5ff',items:[
      {t:'📋 Phase 1: Log Analysis',p:'p5'},{t:'🔍 Phase 2: Threat Detection',p:'p5'},{t:'📦 Phase 3: Packet Analysis',p:'p5'}]}
  ]},
  8:{title:'Incident Response Basics',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 8 Content',p:'p1',w:8},{t:'📝 Take Week 8 Quiz',p:'p1',w:8},
      {t:'🔤 Acronym Drill',p:'p1',w:8},{t:'🔬 Complete Lab Activity',p:'p1',w:8}]},
    {icon:'💻',label:'Pillar 2 — CyberSec Academy',color:'#00e676',items:[
      {t:'📚 Curriculum Module 8: Penetration Testing Methodology',p:'p2-cur',cur:7},
      {t:'🎮 Quiz: Incident Response',p:'p2'},{t:'🎮 Quiz: Security Operations',p:'p2'},{t:'🖥️ SOC Simulator',p:'p2'}]},
    {icon:'📋',label:'Pillar 3 — Curriculum Project',color:'#a78bfa',items:[
      {t:'📄 Project 8: Equifax — Frameworks & Writing (100 pts)',p:'p3',proj:8}]},
    {icon:'🛡️',label:'Pillar 5 — Blue Team Lab',color:'#00f5ff',items:[
      {t:'🚨 Phase 4: Incident Response',p:'p5'},{t:'📝 Phase 5: Defensive Report',p:'p5'}]}
  ]},
  9:{title:'Capstone — Assessment',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 9 Content',p:'p1',w:9},{t:'📝 Take Week 9 Quiz',p:'p1',w:9},
      {t:'🔤 Acronym Drill',p:'p1',w:9},{t:'🔬 Complete Lab Activity',p:'p1',w:9}]},
    {icon:'📋',label:'Capstone — Northgate Supply Co.',color:'#a78bfa',items:[
      {t:'🗂️ Review the client brief and evidence files',p:'p1',w:9},
      {t:'🎙️ Interview all 5 Northgate staff (simulator)',p:'p1',w:9},
      {t:'📝 Fieldwork package: scored questionnaire workbook',p:'p1',w:9}]}
  ]},
  10:{title:'Capstone — Outbrief',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 10 Content',p:'p1',w:10},{t:'📝 Take Week 10 Quiz',p:'p1',w:10},
      {t:'🔬 Complete Lab Activity',p:'p1',w:10}]},
    {icon:'📋',label:'Capstone — Northgate Supply Co.',color:'#a78bfa',items:[
      {t:'📄 Assessment report and executive summary',p:'p1',w:10},
      {t:'🎤 Present findings to MCCoE staff at the outbrief',p:'p1',w:10}]}
  ]},
  11:{title:'Security+ Review',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 11 Content',p:'p1',w:11},{t:'📝 Domain Knowledge Check',p:'p1',w:11},
      {t:'🗓️ Daily Practice Tests (Mon–Fri)',p:'p1',w:11},{t:'🎯 Study plan for your 2 weakest domains',p:'p1',w:11}]},
    {icon:'💻',label:'Pillar 2 — CyberSec Academy',color:'#00e676',items:[
      {t:'🎮 Quiz: Careers & Certs',p:'p2'},{t:'🃏 Complete All Flashcard Decks',p:'p2'}]}
  ]},
  12:{title:'Security+ Mock Exam',groups:[
    {icon:'🎓',label:'Pillar 1 — Student Platform',color:'#ee2207',items:[
      {t:'📖 Study Week 12 Content',p:'p1',w:12},{t:'⏱️ Full-Length Timed Mock Exam',p:'p1',w:12},
      {t:'🔬 Review every missed question',p:'p1',w:12}]},
    {icon:'🚩',label:'CTF — Capture The Flag',color:'#ffd700',items:[
      {t:'🚩 Complete All 4 CTF Scenarios (12 Flags)',p:'ctf'}]}
  ]}
};
