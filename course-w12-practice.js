// Week 12 practice sets (Capstone, week 3). Shapes: docs/COURSE_V2.md
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['risk-w12'] = {
  title: 'Risk Matrix and POA&M Rule',
  kind: 'sort',
  instructions: 'Each item describes one questionnaire answer from a practice client and the risk it drives. Pick the rating the risk matrix gives (Likely: Medium, High, High, Critical; Possible: Low, Medium, Medium, High; Unlikely: Low, Low, Medium, Medium, for Minor, Moderate, Major, Severe). Then decide whether the question needs a POA&M item: yes for every Somewhat or Not Compliant question, and yes for a Mostly question only when its risk is Critical or High. Aim for 90%.',
  dims: [
    { key: 'rating', label: 'Rating', options: ['Low', 'Medium', 'High', 'Critical'] },
    { key: 'poam', label: 'POA&M item?', options: ['Yes', 'No'] }
  ],
  items: [
    { text: 'Scored Mostly. Its risk: Likely, Severe.', answers: { rating: ['Critical'], poam: ['Yes'] }, why: 'Likely + Severe is Critical. A Mostly question behind a Critical risk needs an item.' },
    { text: 'Scored Mostly. Its risk: Possible, Moderate.', answers: { rating: ['Medium'], poam: ['No'] }, why: 'Possible + Moderate is Medium. Mostly questions only get an item when the risk is Critical or High.' },
    { text: 'Scored Somewhat. Its risk: Unlikely, Minor.', answers: { rating: ['Low'], poam: ['Yes'] }, why: 'Unlikely + Minor is Low, but every Somewhat question gets an item no matter the rating.' },
    { text: 'Scored Not Compliant. Its risk: Possible, Severe.', answers: { rating: ['High'], poam: ['Yes'] }, why: 'Possible + Severe is High. Not Compliant always gets an item.' },
    { text: 'Scored Almost. Its risk: Likely, Major.', answers: { rating: ['High'], poam: ['No'] }, why: 'Likely + Major is High, but the rule never requires items for Almost or Fully. You may still mention the risk in the report.' },
    { text: 'Scored Mostly. Its risk: Likely, Moderate.', answers: { rating: ['High'], poam: ['Yes'] }, why: 'Likely + Moderate is High, so this Mostly question needs an item.' },
    { text: 'Scored Mostly. Its risk: Unlikely, Severe.', answers: { rating: ['Medium'], poam: ['No'] }, why: 'Unlikely + Severe is only Medium, so the Mostly question does not need an item under the rule.' },
    { text: 'Scored Not Compliant. Its risk: Unlikely, Moderate.', answers: { rating: ['Low'], poam: ['Yes'] }, why: 'Unlikely + Moderate is Low. Not Compliant still always gets an item; it can be Low priority.' },
    { text: 'Scored Somewhat. Its risk: Likely, Severe.', answers: { rating: ['Critical'], poam: ['Yes'] }, why: 'Likely + Severe is Critical. This is a top-priority item.' },
    { text: 'Scored Fully. Its risk: Possible, Major.', answers: { rating: ['Medium'], poam: ['No'] }, why: 'Possible + Major is Medium. Fully questions never need an item.' },
    { text: 'Scored Mostly. Its risk: Possible, Severe.', answers: { rating: ['High'], poam: ['Yes'] }, why: 'Possible + Severe is High, so the Mostly question needs an item.' },
    { text: 'Scored Mostly. Its risk: Likely, Minor.', answers: { rating: ['Medium'], poam: ['No'] }, why: 'Likely + Minor is Medium. Mostly with a Medium risk does not need an item.' },
    { text: 'Scored Somewhat. Its risk: Possible, Major.', answers: { rating: ['Medium'], poam: ['Yes'] }, why: 'Possible + Major is Medium. Somewhat always gets an item.' },
    { text: 'Scored Almost. Its risk: Unlikely, Major.', answers: { rating: ['Medium'], poam: ['No'] }, why: 'Unlikely + Major is Medium. Almost questions do not need items.' }
  ]
};

COURSE_PRACTICE['acro-w12'] = {
  title: 'Acronyms: Week 12, risk and recovery',
  kind: 'flash',
  items: [
    { term: 'RA', definition: 'Risk Assessment. The process of finding risks and rating how likely and how harmful each one is.' },
    { term: 'ALE', definition: 'Annualized Loss Expectancy. The expected loss from one risk in a year: SLE x ARO.' },
    { term: 'SLE', definition: 'Single Loss Expectancy. The money lost each time a risk event happens once: asset value x exposure factor.' },
    { term: 'ARO', definition: 'Annualized Rate of Occurrence. How many times a year a risk event is expected to happen.' },
    { term: 'AV', definition: 'Asset Value. What an asset is worth to the organization; the starting point for SLE. (AV can also mean antivirus.)' },
    { term: 'ROI', definition: 'Return on Investment. Whether a control saves more than it costs; leaders ask this about every POA&M item with a price.' },
    { term: 'BIA', definition: 'Business Impact Analysis. Works out which business processes matter most and how long each can be down.' },
    { term: 'RTO', definition: 'Recovery Time Objective. The longest a system or process may be down before the harm is unacceptable.' },
    { term: 'RPO', definition: 'Recovery Point Objective. The most data, measured in time, the business can afford to lose. It sets how often backups run.' },
    { term: 'MTTR', definition: 'Mean Time to Repair. The average time it takes to fix a failed system and bring it back.' },
    { term: 'MTBF', definition: 'Mean Time Between Failures. The average time a repairable system runs between failures.' },
    { term: 'MTTF', definition: 'Mean Time to Failure. The average time a non-repairable part lasts before it fails.' },
    { term: 'BCP', definition: 'Business Continuity Plan. How the business keeps its most important work going during and after a disruption.' },
    { term: 'DRP', definition: 'Disaster Recovery Plan. How IT restores systems and data after a disaster, in priority order.' },
    { term: 'DR', definition: 'Disaster Recovery. The work of restoring IT systems and data after a major outage or attack.' },
    { term: 'COOP', definition: 'Continuity of Operations Plan. A plan, common in government, to keep essential functions running in an emergency.' },
    { term: 'IRP', definition: 'Incident Response Plan. Who does what, and who to call, when a security incident happens.' },
    { term: 'PII', definition: 'Personally Identifiable Information. Data that can identify a person, such as a name with a bank account or Social Security number.' },
    { term: 'DLP', definition: 'Data Loss Prevention. Tools and rules that detect and block sensitive data leaving the organization.' },
    { term: 'UPS', definition: 'Uninterruptible Power Supply. A battery that keeps equipment running through a short power cut.' }
  ]
};
