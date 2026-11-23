// Course v2 map: Week > Day > numbered blocks. See docs/COURSE_V2.md.
// Block ids are permanent (student progress is stored by id). Add new ids; don't renumber old ones.
// legacy: N = this week still opens Week N of the current Student Platform.
window.COURSE = {
  start: '2027-01-11',
  weeks: [
    {
      num: 1, title: 'Security Foundations', modules: 'CertMaster Modules 1, 2, 7',
      sub: 'Your first week as a junior security analyst at Cedar Creek Industries',
      overview: 'Cedar Creek Industries has hired you as its first security analyst. This week you learn the ideas every security decision rests on (the CIA triad, AAA, and security controls), set up the Kali Linux lab you will use all course, and meet the people who might attack Cedar Creek. You finish by walking the campus and writing the company\'s first control audit, and you start your first real-world case study: the Target breach.',
      anytime: [
        { title: 'Acronyms: Week 1, set A', href: 'Practice.html?p=acro-w1a' },
        { title: 'Acronyms: Week 1, set B', href: 'Practice.html?p=acro-w1b' }
      ],
      days: [
        {
          name: 'Day 1', focus: 'Security concepts, controls, and your Kali lab',
          blocks: [
            { id: 'w1d1-b1', type: 'lesson', mins: 15, title: 'Welcome to Cedar Creek', desc: 'Meet the company, your manager, and the plan for the course.', href: 'Lesson.html?l=1.0' },
            { id: 'w1d1-b2', type: 'lesson', mins: 35, title: 'Lesson 1.1: Security fundamentals', desc: 'CIA triad, non-repudiation, AAA, and gap analysis.', href: 'Lesson.html?l=1.1' },
            { id: 'w1d1-b3', type: 'lab', mins: 45, title: 'Lab 1.1: Build your Kali Linux lab', desc: 'Install VirtualBox, import Kali, update it, and take a snapshot.', href: 'Lab.html?l=1.1' },
            { id: 'w1d1-b4', type: 'lab', mins: 40, title: 'Lab 1.2: Linux first steps on the Cedar Creek file share', desc: 'Download the Week 1 lab pack and explore it with ls, cd, cat, less, grep, and find.', href: 'Lab.html?l=1.2' },
            { id: 'w1d1-b5', type: 'lesson', mins: 35, title: 'Lesson 1.2: Security controls', desc: 'The four control categories and six control types, with Cedar Creek examples.', href: 'Lesson.html?l=1.2' },
            { id: 'w1d1-b6', type: 'practice', mins: 15, title: 'Control Sorter', desc: 'Classify 24 real controls by category and type. Aim for 90% or higher.', href: 'Practice.html?p=controls' },
            { id: 'w1d2-b1', type: 'lesson', mins: 30, title: 'Lesson 1.3: Threat actors and motivations', desc: 'Who attacks companies like Cedar Creek, what they want, and what they can do.', href: 'Lesson.html?l=1.3' },
            { id: 'w1d1-b7', type: 'mock', mins: 35, title: 'Mock Control Audit, part 1: walk the campus', desc: 'Walk areas 1 to 5 with Marcus and log every control and gap you see.', href: 'Mock_Control_Audit.html' },
            { id: 'w1d1-b9', type: 'checkin', mins: 3, title: 'Daily survey', desc: 'How did today go?', href: 'MCCoE_Student_Platform.html?open=survey' }
          ]
        },
        {
          name: 'Day 2', focus: 'Attack surface, physical security, and the Target case',
          blocks: [
            { id: 'w1d2-b2', type: 'lesson', mins: 30, title: 'Lesson 1.4: Attack surface and threat vectors', desc: 'Every way in: email, files, removable media, unsupported software, open ports, the supply chain, and people.', href: 'Lesson.html?l=1.4' },
            { id: 'w1d2-b3', type: 'lab', mins: 30, title: 'Lab 1.3: Threat actor profiles for Cedar Creek', desc: 'Read four intelligence notes and build a profile for each threat actor.', href: 'Lab.html?l=1.3' },
            { id: 'w1d2-b4', type: 'lesson', mins: 30, title: 'Lesson 1.5: Physical security and asset management', desc: 'Fences to vestibules, badges to bollards, and why you can\'t protect what you haven\'t listed.', href: 'Lesson.html?l=1.5' },
            { id: 'w1d2-b5', type: 'lab', mins: 40, title: 'Lab 1.4: Badge log investigation', desc: 'Use grep, cut, sort, and uniq in Kali to find after-hours entries and tailgating in a week of badge data.', href: 'Lab.html?l=1.4' },
            { id: 'w1d2-b6', type: 'mock', mins: 40, title: 'Mock Control Audit, part 2: finish and submit', desc: 'Walk areas 6 to 9, build the asset inventory, write your top gaps and recommendations, and submit.', href: 'Mock_Control_Audit.html', due: 'Due end of Day 2' },
            { id: 'w1d2-p1', type: 'project', mins: 60, title: 'Project 1: Target Data Breach (2013), Deep Dive', desc: 'Your first real-world case study, 50 points. Read the case, then answer six questions. Finish the write-up at home if you need to.', href: 'Project.html?p=1', due: 'Due start of Week 2' },
            { id: 'w1d2-b7', type: 'quiz', mins: 20, title: 'Week 1 Quiz', desc: '20 questions on everything from this week. 80% to pass; retakes allowed.', href: 'Quiz.html?w=1' },
            { id: 'w1d2-b9', type: 'checkin', mins: 5, title: 'Weekly check-in', desc: 'What you learned, how you feel, and your goal for next week.', href: 'MCCoE_Student_Platform.html?open=surveys' }
          ]
        }
      ],
      mock: {
        id: 'w1', title: 'Mock Control Audit', href: 'Mock_Control_Audit.html',
        rubric: [
          ['Asset inventory', 'At least 10 assets with location, owner, and classification that match what was observed'],
          ['Controls found', 'Logged the controls actually present in each area (at least 15)'],
          ['Classification', 'Correct category (technical, managerial, operational, physical) and type for each control'],
          ['Gap analysis', 'Found the real gaps, explained the risk of each, and ranked them sensibly'],
          ['Recommendations & summary', 'Practical fixes with the right control type, and a clear summary a CFO could read']
        ]
      }
    },
    { num: 2, title: 'Cryptography and PKI', modules: 'CertMaster Module 3', sub: 'Hashing, encryption, and certificates at Cedar Creek', mockTitle: 'Mock Secure File Exchange', caseStudy: 'Project 2: Target, Frameworks & Executive Summary' },
    { num: 3, title: 'Identity, Access, and Data', modules: 'CertMaster Modules 4, 16', sub: 'Authentication, authorization, and protecting data', mockTitle: 'Mock Access Review', caseStudy: 'Project 3: Colonial Pipeline, Deep Dive' },
    { num: 4, title: 'Secure Networks and the Mock Pentest, part 1', modules: 'CertMaster Modules 5, 6, 9, 11', sub: 'Network architecture, cloud, wireless, then recon and scanning', mockTitle: 'Mock Pentest: Reconnaissance and Scanning', caseStudy: 'Project 4: Colonial Pipeline, Frameworks & Executive Summary' },
    { num: 5, title: 'Vulnerabilities, Attacks, and the Mock Pentest, part 2', modules: 'CertMaster Modules 8, 13, 14', sub: 'Finding and fixing weaknesses, then exploitation and the pentest report', mockTitle: 'Mock Pentest: Exploitation, Post-Exploitation, and Report', caseStudy: 'Project 5: SolarWinds, Deep Dive' },
    { num: 6, title: 'Human Factors', legacy: 6 },
    { num: 7, title: 'Defensive Security & Tools', legacy: 7 },
    { num: 8, title: 'Incident Response', legacy: 8 },
    { num: 9, title: 'SOC Operations: Mock Tickets', sub: 'A full week working the Cedar Creek ticket queue', mockTitle: 'SOC Ticket Board (full week)', light: true },
    { num: 10, title: 'Capstone: Mock Assessment, week 1', sub: 'Northgate Supply Co.: architecture and the weighted questionnaire', legacy: 9, light: true },
    { num: 11, title: 'Capstone: Mock Assessment, week 2', sub: 'Fieldwork: documents, interviews, and scans', legacy: 9, light: true },
    { num: 12, title: 'Capstone: Mock Assessment, week 3', sub: 'Scoring, risk register, and POA&M', legacy: 10, light: true },
    { num: 13, title: 'Capstone: Mock Assessment, week 4', sub: 'Report, executive summary, and the outbrief', legacy: 10, light: true },
    { num: 14, title: 'Security+ Review', legacy: 11 },
    { num: 15, title: 'Security+ Mock Exam', legacy: 12 }
  ]
};
