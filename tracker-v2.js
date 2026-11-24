// Tracker v2 shell: five jobs (To-Do, Students, Gradebook, Course, Admin), section tabs, and the new views.
// Every older view keeps its own code and data; this file only adds navigation and the new pages.
// Data read here: mccoe_course, mccoe_mockproj, mccoe_submissions, mccoe_mitre, mccoe_nist, mccoe_tickets/{work,grades,drafts},
// mccoe_checkins, mccoe_registry. The only new write is mccoe_course/{key}/labs/{lab}/reviewed = {at, by} ("Mark reviewed").

const TV2_SECTIONS = [
  { id: 'todo', label: 'To-Do', tabs: [
    { l: 'To-Do', v: ['todo'] },
    { l: 'Class overview', v: ['dashboard'] }
  ] },
  { id: 'students', label: 'Students', tabs: [
    { l: 'Roster', v: ['students', 'student'] },
    { l: 'Attendance', v: ['attendance'] },
    { l: 'Surveys and check-ins', v: ['survey'] },
    { l: 'Sign-ups', v: ['pending'], badge: 'pending' },
    { l: 'Employer profiles', v: ['employer'] }
  ] },
  { id: 'gradebook', label: 'Gradebook', tabs: [
    { l: 'Grading queue', v: ['grading'], badge: 'queue' },
    { l: 'Grades', v: ['grades'] },
    { l: 'Auto-scored tools', v: ['pbq', 'mock', 'academy', 'acronym', 'ctf', 'pentest', 'blueteam', 'htb'] },
    { l: 'Submissions by tool', v: ['submissions', 'mitre', 'nist', 'rubric'] }
  ] },
  { id: 'course', label: 'Course', tabs: [
    { l: 'Weeks', v: ['weekv2', 'course', 'weekly'] },
    { l: 'SOC tickets', v: ['tickets'] },
    { l: 'Due dates', v: ['schedule'] },
    { l: 'Resources and documents', v: ['library', 'documents'] },
    { l: 'Answer keys', v: ['cheatsheet', 'ctfkey'] }
  ] },
  { id: 'admin', label: 'Admin', tabs: [
    { l: 'Tools', v: ['admin'] },
    { l: 'Content manager', v: ['content'] },
    { l: 'Data recovery', v: ['recovery'] }
  ] }
];
const TV2_CHIP = {
  pbq: 'Security+ PBQ labs', mock: 'Security+ mock exam', academy: 'Academy', acronym: 'Acronyms', ctf: 'CTF',
  pentest: 'Pentest Lab', blueteam: 'Blue Team Lab', htb: 'HTB',
  submissions: 'Case study projects', mitre: 'MITRE worksheets', nist: 'NIST CSF worksheets', rubric: 'Exec summary rubric',
  weekv2: 'Step progress', course: 'Students and review', weekly: 'Old 12-week plan',
  library: 'Resource library', documents: 'Course documents', cheatsheet: 'Cheat sheet', ctfkey: 'CTF answer key'
};
const TV2_KIND = { 'Mock project': '#ff8a4c', 'Case study': '#00f5ff', 'Lab': '#ffc23d', 'Worksheet': '#33d17a', 'SOC ticket': '#b794ff' };
const TV2_TYPE = { lesson: ['Lesson', '#00f5ff'], talk: ['Talk', '#00f5ff'], lab: ['Lab', '#ffc23d'], practice: ['Practice', '#33d17a'], mock: ['Mock', '#ff8a4c'],
  quiz: ['Quiz', '#ff7aa2'], project: ['Project', '#00f5ff'], tool: ['Tool', '#9aa3b5'], read: ['Read', '#9aa3b5'], checkin: ['Check-in', '#9aa3b5'], pbq: ['PBQ', '#b794ff'], work: ['Work', '#9aa3b5'] };

const TV2 = { data: null, at: 0, loading: null, queue: [], attention: [], pending: [], filter: 'all', weekFilter: 'all',
  week: null, day: null, openStep: null, sid: null, stab: 'Overview' };

function tv2Esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function tv2Js(s) { return String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;'); }
function tv2Safe(k) { return String(k || '').replace(/[.#$[\]]/g, '_'); }
function tv2Ago(iso) {
  if (!iso) return '';
  const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (isNaN(m)) return '';
  if (m < 2) return 'just now';
  if (m < 60) return m + ' minutes ago';
  const h = Math.round(m / 60);
  if (h < 24) return h + (h === 1 ? ' hour ago' : ' hours ago');
  const d = Math.round(h / 24);
  return d + (d === 1 ? ' day ago' : ' days ago');
}
function tv2Old(iso) { return iso && (Date.now() - new Date(iso).getTime()) > 36 * 3600000; }
function tv2KindChip(k) { const c = TV2_KIND[k] || '#9aa3b5'; return `<span class="tv2-kind" style="color:${c};border-color:${c}66;background:${c}14;">${tv2Esc(k)}</span>`; }
function tv2TypeChip(t) { const x = TV2_TYPE[t] || [t, '#9aa3b5']; return `<span class="tv2-kind" style="color:${x[1]};border-color:${x[1]}66;background:${x[1]}14;">${tv2Esc(x[0])}</span>`; }
function tv2Bar(pct) { const c = pct >= 75 ? '#33d17a' : pct >= 25 ? '#00f5ff' : '#5a5a68'; return `<span class="tv2-bar"><i style="width:${Math.max(0, Math.min(100, pct))}%;background:${c};"></i></span>`; }
function tv2Pc(p) { return p >= 80 ? 'var(--text)' : 'var(--warn)'; }

function tv2StudentFor(key, name) {
  return students.find(s => s && s.id && s.portalTempId && (s.portalTempId === key || tv2Safe(s.portalTempId) === key)) ||
    (name ? students.find(s => s && s.id && (s.name || '').toLowerCase() === String(name).toLowerCase()) : null) || null;
}
function tv2Weeks() { return (window.COURSE && COURSE.weeks || []).filter(w => w.days); }
function tv2WeekObj(n) { return tv2Weeks().find(w => w.num === n) || null; }
function tv2Blocks(W, dayIdx) { const out = []; (W && W.days || []).forEach((d, i) => { if (dayIdx == null || dayIdx === i) d.blocks.forEach(b => out.push(b)); }); return out; }
function tv2CurWeek() {
  const st = viewCohortStart(), d = Math.floor((Date.now() - st.getTime()) / 864e5);
  if (d < 0) return { num: 1, before: Math.ceil(-d) };
  return { num: Math.max(1, Math.min(15, Math.floor(d / 7) + 1)), before: 0 };
}

// ── Data ──
function tv2Load(force) {
  if (!force && TV2.data && Date.now() - TV2.at < 20000) {
    const d = TV2.data;
    tv2BuildQueue(d); tv2BuildPending(d); tv2BuildAttention(d); tv2Badges();
    return Promise.resolve(d);
  }
  if (TV2.loading) return TV2.loading;
  if (!_fbDb) return Promise.reject(new Error('Firebase not connected.'));
  const get = p => _fbDb.ref(p).once('value').then(s => s.val() || {}).catch(() => ({}));
  TV2.loading = Promise.all([
    cvRequire('course-data.js').catch(() => null),
    get('mccoe_course'), get('mccoe_mockproj'), get('mccoe_submissions'), get('mccoe_mitre'), get('mccoe_nist'),
    get('mccoe_tickets/work'), get('mccoe_tickets/grades'), get('mccoe_tickets/drafts'), get('mccoe_checkins'), get('mccoe_registry')
  ]).then(r => {
    const d = { course: r[1], mock: r[2], subs: r[3], mitre: r[4], nist: r[5], tkWork: r[6], tkGrades: r[7], tkDrafts: r[8], checkins: r[9], registry: r[10] };
    _tkAllWork = d.tkWork; _tkGrades = d.tkGrades; _tkDrafts = d.tkDrafts;
    TV2.data = d; TV2.at = Date.now();
    tv2BuildQueue(d); tv2BuildPending(d); tv2BuildAttention(d); tv2Badges();
    return d;
  }).finally(() => { TV2.loading = null; });
  return TV2.loading;
}

function tv2LabIndex() {
  const idx = {};
  tv2Weeks().forEach(W => tv2Blocks(W).forEach(b => {
    const m = b.type === 'lab' && (b.href || '').match(/[?&]l=([^&]+)/);
    if (m && !idx[m[1]]) idx[m[1]] = { title: b.title, week: W.num };
  }));
  return idx;
}

function tv2BuildQueue(d) {
  const q = [], labs = tv2LabIndex();
  Object.keys(d.mock).forEach(key => {
    const rec = d.mock[key] || {};
    Object.keys(rec).forEach(wk => {
      const m = rec[wk], N = +String(wk).replace('w', '');
      if (!m || !N || m.status !== 'submitted') return;
      if (m.grade && (m.submittedAt || '') <= (m.grade.gradedAt || '')) return;
      if (!keyInView(key, m)) return;
      const W = tv2WeekObj(N), s = tv2StudentFor(key, m.name);
      q.push({ kind: 'Mock project', title: `Week ${N}: ${(W && W.mock && W.mock.title) || 'Mock project'}${m.grade ? ' (resubmitted)' : ''}`,
        name: (s && s.name) || m.name || key, sid: s && s.id, week: N, at: m.submittedAt, go: `tv2OpenMock('${tv2Js(key)}',${N})` });
    });
  });
  Object.keys(d.subs).forEach(tid => {
    if (!tempIdInView(tid)) return;
    const rec = d.subs[tid] || {};
    for (let n = 1; n <= 8; n++) {
      const sub = rec['week' + n];
      if (!sub || !sub.submittedAt || sub.grade) continue;
      const s = tv2StudentFor(tid, sub.studentName), meta = (typeof PROJECT_META !== 'undefined' && PROJECT_META[n]) || {};
      q.push({ kind: 'Case study', title: `Project ${n}: ${meta.incident || ''}${meta.type ? ', ' + meta.type.replace(/^Part \d+ — /, '') : ''}`,
        name: (s && s.name) || sub.studentName || tid, sid: s && s.id, week: n, at: sub.submittedAt, go: `openGradeModal('${tv2Js(tid)}',${n})` });
    }
  });
  Object.keys(d.course).forEach(key => {
    const c = d.course[key] || {};
    if (!keyInView(key, c)) return;
    Object.keys(c.labs || {}).forEach(lid => {
      const r = c.labs[lid];
      if (!r || r.status !== 'submitted' || !(r.auto > 0) || !((r.correct || 0) < r.auto)) return;
      if (r.reviewed && (r.reviewed.at || '') >= (r.at || '')) return;
      const shown = tv2LabId(lid), s = tv2StudentFor(key, c.name), L = labs[shown] || {};
      q.push({ kind: 'Lab', title: `${L.title || 'Lab ' + shown} (${r.correct || 0} of ${r.auto} checks right)`,
        name: (s && s.name) || c.name || key, sid: s && s.id, week: L.week || parseInt(shown, 10) || 0, at: r.at, go: `tv2OpenLab('${tv2Js(key)}','${tv2Js(lid)}')` });
    });
  });
  [['mitre', 'MITRE ATT&CK worksheet: Colonial Pipeline', 3], ['nist', 'NIST CSF 2.0 worksheet: SolarWinds', 5]].forEach(([node, title, wk]) => {
    const all = d[node];
    Object.keys(all).forEach(key => {
      if (!tempIdInView(key)) return;
      const dates = Object.keys(all[key] || {}).filter(k => k !== 'grade').sort().reverse();
      if (!dates.length) return;
      const sub = all[key][dates[0]] || {}, at = sub.submitted || (dates[0] + 'T00:00:00'), g = all[key].grade;
      if (g && (g.gradedAt || '') >= at) return;
      const s = tv2StudentFor(key, sub.name);
      const nm = (s && s.name) || sub.name || key;
      q.push({ kind: 'Worksheet', title, name: nm, sid: s && s.id, week: wk, at, go: `tv2OpenSheet('${node}','${tv2Js(nm)}')` });
    });
  });
  Object.keys(d.tkWork).forEach(name => {
    if (typeof nameInView === 'function' && !nameInView(name)) return;
    const work = d.tkWork[name] || {};
    Object.keys(work).forEach(tid => {
      const prog = work[tid];
      if (!tkIsTurnedIn(prog)) return;
      const g = tkGradeOf(name, tid);
      if (g && !tkResubmitted(prog, g)) return;
      const t = (typeof TRACKER_TICKET_BANK !== 'undefined' ? TRACKER_TICKET_BANK : []).find(x => x.id === tid);
      const draft = tkDraftOf(name, tid);
      const s = tv2StudentFor(null, name);
      q.push({ kind: 'SOC ticket', title: `${tid}${t ? ': ' + t.title : ''}${draft ? ' (draft grade ready)' : ''}`,
        name, sid: s && s.id, week: 9, at: prog.resolvedAt, go: `tkViewNotes('${tv2Js(name)}','${tv2Js(tid)}')` });
    });
  });
  q.sort((a, b) => (a.at || '').localeCompare(b.at || ''));
  TV2.queue = q;
}

function tv2BuildPending(d) {
  TV2.pending = Object.keys(d.registry).map(k => ({ key: k, r: d.registry[k] })).filter(x => x.r && x.r.status === 'pending')
    .sort((a, b) => (b.r.registeredAt || '').localeCompare(a.r.registeredAt || ''));
}

function tv2CourseOf(s) {
  if (!TV2.data || !s) return {};
  return (s.portalTempId && (TV2.data.course[tv2Safe(s.portalTempId)] || TV2.data.course[s.portalTempId])) ||
    Object.values(TV2.data.course).find(c => c && (c.name || '').toLowerCase() === (s.name || '').toLowerCase()) || {};
}

function tv2BuildAttention(d) {
  const out = [], cw = tv2CurWeek(), W = tv2WeekObj(cw.num), blocks = tv2Blocks(W), wk = 'w' + cw.num;
  const r = roster().filter(s => s.cohortActive !== false);
  const done = s => { const c = tv2CourseOf(s); return blocks.filter(b => c.done && c.done[b.id]).length; };
  const counts = r.map(done), avg = counts.length ? counts.reduce((a, b) => a + b, 0) / counts.length : 0;
  const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
  r.forEach((s, i) => {
    const why = [];
    let level = 1;
    const abs = Object.keys(s.attendance || {}).filter(dt => dt >= weekAgo && s.attendance[dt] === 'A').sort();
    if (abs.length) { why.push('Marked absent ' + abs.map(dt => new Date(dt + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })).join(', ') + '.'); level = 2; }
    const ck = d.checkins[s.portalTempId] || {};
    const lowest = Object.values(ck).filter(e => e && e.confidence && e.submittedAt && e.submittedAt.slice(0, 10) >= weekAgo && e.confidence <= 2)
      .sort((a, b) => (b.submittedAt || '').localeCompare(a.submittedAt || ''))[0];
    if (lowest) why.push(`Survey confidence ${lowest.confidence} of 5.${lowest.challenge ? ' "' + lowest.challenge.slice(0, 120) + '"' : ''}`);
    if (blocks.length && avg >= 3 && counts[i] < avg / 2) { why.push(`${counts[i]} of ${blocks.length} Week ${cw.num} steps done (class average ${Math.round(avg)}).`); level = 2; }
    const c = tv2CourseOf(s), quiz = c.quiz || {};
    Object.keys(quiz).forEach(k => {
      const n = +k.replace('w', '');
      if (n <= cw.num && quiz[k] && quiz[k].best < 80 && (quiz[k].attempts || 0) >= 2) why.push(`Week ${n} quiz: ${quiz[k].best}% after ${quiz[k].attempts} tries (80% to pass).`);
    });
    if (why.length) out.push({ s, why: why.join(' '), level });
  });
  out.sort((a, b) => b.level - a.level || a.s.name.localeCompare(b.s.name));
  TV2.attention = out;
}

function tv2Badges() {
  const set = (id, n, warn) => { const el = document.getElementById(id); if (!el) return; el.textContent = n; el.style.display = n ? 'inline-block' : 'none'; el.classList.toggle('warn', !!warn); };
  set('tv2b-todo', TV2.queue.length + TV2.pending.length + TV2.attention.length);
  set('tv2b-students', TV2.pending.length, true);
  set('tv2b-gradebook', TV2.queue.length);
}

// ── Shell ──
function tv2SectionOf(view) {
  for (const sec of TV2_SECTIONS) for (const t of sec.tabs) if (t.v.indexOf(view) >= 0) return { sec, tab: t };
  return null;
}
function tv2Go(sectionId) {
  const sec = TV2_SECTIONS.find(s => s.id === sectionId);
  if (sec) showView(sec.tabs[0].v[0]);
}
function tv2RenderSubnav(view) {
  const box = document.getElementById('tv2-subnav'), hit = tv2SectionOf(view);
  if (!box) return;
  document.querySelectorAll('.tv2-nav').forEach(b => b.classList.toggle('on', !!hit && b.dataset.sec === hit.sec.id));
  if (!hit) { box.innerHTML = ''; return; }
  const n = { queue: TV2.queue.length, pending: TV2.pending.length };
  const tabs = hit.sec.tabs.map(t => `<button class="tv2-tab${t === hit.tab ? ' on' : ''}" onclick="showView('${t.v[0]}')">${tv2Esc(t.l)}${t.badge && n[t.badge] ? `<span class="tv2-n">${n[t.badge]}</span>` : ''}</button>`).join('');
  const chipViews = hit.tab.v.filter(v => v !== 'student');
  const chips = chipViews.length > 1 ? `<div class="tv2-chips">${chipViews.map(v => `<button class="tv2-chip${v === view ? ' on' : ''}" onclick="showView('${v}')">${tv2Esc(TV2_CHIP[v] || v)}</button>`).join('')}</div>` : '';
  box.innerHTML = `<h1>${tv2Esc(hit.sec.label)}</h1><div class="tv2-tabs" role="tablist">${tabs}</div>${chips}`;
}

function tv2Loading(id) { const el = document.getElementById(id); if (el) el.innerHTML = '<p class="tv2-empty">Loading...</p>'; }
function tv2Fail(id, e) { const el = document.getElementById(id); if (el) el.innerHTML = `<p class="tv2-empty">${tv2Esc(e && e.message || e)}</p>`; }

function tv2AfterView(name) {
  tv2RenderSubnav(name);
  const main = document.querySelector('main'); if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);
  if (name === 'todo') { tv2Loading('tv2-todo'); tv2Load().then(tv2RenderTodo).catch(e => tv2Fail('tv2-todo', e)); }
  if (name === 'grading') { tv2Loading('tv2-grading'); tv2Load(true).then(tv2RenderGrading).catch(e => tv2Fail('tv2-grading', e)); }
  if (name === 'grades') { tv2Loading('tv2-grades'); tv2Load().then(tv2RenderGrades).catch(e => tv2Fail('tv2-grades', e)); }
  if (name === 'weekv2') { tv2Loading('tv2-week'); tv2Load().then(tv2RenderWeek).catch(e => tv2Fail('tv2-week', e)); }
  if (name === 'student') { tv2Loading('tv2-student'); tv2Load().then(tv2RenderStudent).catch(e => tv2Fail('tv2-student', e)); }
}

function tv2Refresh() {
  return tv2Load(true).then(() => {
    tv2RenderSubnav(_currentView);
    if (_currentView === 'todo') tv2RenderTodo();
    if (_currentView === 'grading') tv2RenderGrading();
    if (_currentView === 'grades') tv2RenderGrades();
    if (_currentView === 'weekv2') tv2RenderWeek();
    if (_currentView === 'student') tv2RenderStudent();
  }).catch(() => {});
}

// ── To-Do ──
function tv2RenderTodo() {
  const box = document.getElementById('tv2-todo'); if (!box) return;
  const q = TV2.queue, cw = tv2CurWeek(), W = tv2WeekObj(cw.num);
  const r = roster().filter(s => s.cohortActive !== false);
  const blocks = tv2Blocks(W), total = blocks.length * r.length;
  const doneAll = r.reduce((a, s) => { const c = tv2CourseOf(s); return a + blocks.filter(b => c.done && c.done[b.id]).length; }, 0);
  const pct = total ? Math.round(doneAll / total * 100) : 0;
  const wkLabel = W ? `Week ${cw.num}: ${W.title}` : `Week ${cw.num}`;
  const lede = cw.before ? `${tv2Esc(viewCohort().name)} starts in ${cw.before} day${cw.before === 1 ? '' : 's'}. Week 1 is shown below.` : `${tv2Esc(wkLabel)}. Everything that needs you, oldest first.`;
  const tile = (cls, k, v, s, go) => `<button class="tv2-tile${cls}" onclick="${go}"><span class="k">${k}</span><span class="v">${v}</span><span class="s">${s}</span></button>`;
  const oldest = q[0];
  let html = `<p class="tv2-lede">${lede}</p><div class="tv2-tiles">
    ${tile(q.length ? ' hot' : '', 'To grade', q.length, q.length ? 'Oldest waiting: ' + tv2Esc(tv2Ago(oldest.at) || 'unknown') : 'Nothing waiting', "showView('grading')")}
    ${tile('', 'Sign-ups to approve', TV2.pending.length, 'Registered on the Hub', "showView('pending')")}
    ${tile('', 'Students needing attention', TV2.attention.length, 'Absent, behind, or struggling', "document.getElementById('tv2-att').scrollIntoView({behavior:'smooth'})")}
    ${tile('', 'This week\'s steps done', total ? pct + '%' : '–', 'Class average, Week ' + cw.num, "showView('weekv2')")}
  </div><div class="tv2-cols"><section class="tv2-panel"><div class="tv2-panel-head"><h2>Grade next</h2><button class="tv2-link" onclick="showView('grading')">Open grading queue (${q.length})</button></div>`;
  html += q.length ? q.slice(0, 6).map(it => `<div class="tv2-item">${tv2KindChip(it.kind)}<div class="t"><b>${tv2Esc(it.title)}</b><span>${tv2Esc(it.name)} · ${tv2Esc(tv2Ago(it.at))}</span></div><button class="tv2-go" onclick="${it.go}">Grade</button></div>`).join('')
    : '<p class="tv2-empty">Nothing to grade right now.</p>';
  html += `</section><div style="display:flex;flex-direction:column;gap:20px;"><section class="tv2-panel" id="tv2-att"><h2>Needs attention</h2>`;
  html += TV2.attention.length ? TV2.attention.slice(0, 8).map(a => `<button class="tv2-person" onclick="tv2OpenStudent('${tv2Js(a.s.id)}')"><span class="dot" style="background:${a.level > 1 ? '#ff5a5a' : '#ffc23d'};"></span><span><b>${tv2Esc(a.s.name)}</b><span>${tv2Esc(a.why)}</span></span></button>`).join('')
    : '<p class="tv2-empty">No one flagged. Flags come from absences in the last 7 days, survey confidence of 2 or lower, falling far behind this week\'s steps, and failed quiz retakes.</p>';
  html += `</section><section class="tv2-panel"><div class="tv2-panel-head"><h2>Sign-ups waiting</h2>${TV2.pending.length ? `<button class="tv2-link" onclick="showView('pending')">Choose cohort and approve</button>` : ''}</div>`;
  html += TV2.pending.length ? TV2.pending.map(p => `<div class="tv2-item"><div class="t"><b>${tv2Esc(p.r.name || p.key)}</b><span>${p.r.registeredAt ? 'Registered ' + tv2Esc(tv2Ago(p.r.registeredAt)) : ''}</span></div><button class="tv2-okbtn" onclick="tv2Approve('${tv2Js(p.key)}','${tv2Js(p.r.name || '')}')">Approve</button><button class="tv2-ghost" onclick="tv2Reject('${tv2Js(p.key)}','${tv2Js(p.r.name || '')}')">Decline</button></div>`).join('')
    : '<p class="tv2-empty">No one waiting.</p>';
  html += `</section></div></div>`;
  html += `<section class="tv2-panel"><div class="tv2-panel-head"><h2>This week: ${tv2Esc(wkLabel)}</h2><button class="tv2-link" onclick="showView('weekv2')">Full week view</button></div>`;
  if (W) {
    W.days.forEach((dy, di) => {
      html += `<div style="font-size:13px;font-weight:700;color:var(--soft);margin-top:${di ? 10 : 0}px;">${tv2Esc(dy.name)}: ${tv2Esc(dy.focus || '')}</div><div class="tv2-steps">`;
      html += dy.blocks.map((b, i) => {
        const n = r.filter(s => { const c = tv2CourseOf(s); return c.done && c.done[b.id]; }).length, p = r.length ? Math.round(n / r.length * 100) : 0;
        return `<div class="tv2-step"><span class="n">${i + 1}</span><span class="t" title="${tv2Esc(b.title)}">${tv2Esc(b.title)}</span>${tv2Bar(p)}<span class="c">${n}/${r.length}</span></div>`;
      }).join('') + '</div>';
    });
  } else html += '<p class="tv2-empty">Course data did not load.</p>';
  box.innerHTML = html + '</section>';
}
function tv2Approve(key, name) {
  if (!_fbDb) return;
  const co = viewCohort();
  if (!confirm('Approve ' + name + ' into ' + co.name + '? They will be able to sign in immediately. To pick a different cohort, use Students > Sign-ups.')) return;
  _fbDb.ref('mccoe_registry/' + key).update({ status: 'approved', cohortId: co.id, cohort: co.name }, err => {
    if (err) { alert('Could not approve. Please try again.'); return; }
    updatePendingBadge(); tv2Refresh();
  });
}
function tv2Reject(key, name) {
  if (!_fbDb) return;
  if (!confirm('Decline and permanently delete ' + name + '\'s registration? This cannot be undone.')) return;
  _fbDb.ref('mccoe_registry/' + key).remove(err => {
    if (err) { alert('Could not decline. Please try again.'); return; }
    updatePendingBadge(); tv2Refresh();
  });
}

// ── Grading queue ──
function tv2SetFilter(f) { TV2.filter = f; tv2RenderGrading(); }
function tv2SetWeekFilter(w) { TV2.weekFilter = w; tv2RenderGrading(); }
function tv2RenderGrading() {
  const box = document.getElementById('tv2-grading'); if (!box) return;
  const q = TV2.queue, kinds = ['Mock project', 'Case study', 'Lab', 'Worksheet', 'SOC ticket'];
  const plural = { 'Mock project': 'Mock projects', 'Case study': 'Case studies', 'Lab': 'Labs to check', 'Worksheet': 'Worksheets', 'SOC ticket': 'SOC tickets' };
  const weeks = [...new Set(q.map(i => i.week).filter(Boolean))].sort((a, b) => a - b);
  if (TV2.weekFilter !== 'all' && weeks.indexOf(+TV2.weekFilter) < 0) TV2.weekFilter = 'all';
  const inWeek = q.filter(i => TV2.weekFilter === 'all' || i.week === +TV2.weekFilter);
  const shown = inWeek.filter(i => TV2.filter === 'all' || i.kind === TV2.filter);
  const chip = (f, l, n) => `<button class="tv2-chip${TV2.filter === f ? ' on' : ''}" onclick="tv2SetFilter('${f}')">${tv2Esc(l)} (${n})</button>`;
  let html = `<p class="tv2-lede">One queue for everything a person has to grade or read, from every tool. Oldest first. Click an item to open its grader.</p>
    <div class="tv2-toolbar">${chip('all', 'All', inWeek.length)}${kinds.map(k => chip(k, plural[k], inWeek.filter(i => i.kind === k).length)).join('')}
    <label class="sp" style="display:flex;align-items:center;gap:8px;">Week <select class="tv2-sel" onchange="tv2SetWeekFilter(this.value)"><option value="all">All weeks</option>${weeks.map(w => `<option value="${w}"${String(w) === String(TV2.weekFilter) ? ' selected' : ''}>Week ${w}</option>`).join('')}</select></label>
    <button class="tv2-ghost" onclick="tv2Refresh()">Refresh</button></div><div class="tv2-list">`;
  html += shown.length ? shown.map(it => `<button class="tv2-qrow" onclick="${it.go}">${tv2KindChip(it.kind)}<span class="t"><b>${tv2Esc(it.title)}</b><span>${tv2Esc(it.name)}${it.week ? ' · Week ' + it.week : ''}</span></span><span class="age${tv2Old(it.at) ? ' old' : ''}">${tv2Esc(tv2Ago(it.at))}</span></button>`).join('')
    : `<p class="tv2-empty" style="padding:24px 20px;">Nothing waiting${TV2.filter === 'all' ? '' : ' in this group'}.${TV2.filter === 'SOC ticket' ? ' Turned-in tickets show up here, with Claude draft grades marked when they are ready.' : ''}</p>`;
  html += `</div><p style="margin:0;font-size:13px;color:var(--muted);">Labs show up only when an auto-check was missed; "Mark reviewed" clears them. Every graded item also stays in its own page under Submissions by tool.</p>`;
  box.innerHTML = html;
}
function tv2OpenMock(key, N) {
  const d = TV2.data || {};
  Promise.all(['course-w' + N + '-labs.js', 'course-w' + N + '-mock.js'].map(f => cvRequire(f).catch(() => null))).then(() => {
    _cvWeek = N; _cvCourse = d.course || {}; _cvMock = d.mock || {};
    cvOpen(key);
  });
}
function tv2OpenSheet(node, name) {
  showView(node);
  const prefix = node === 'mitre' ? 'mitre' : 'nist';
  let tries = 0;
  const t = setInterval(() => {
    const cards = [...document.querySelectorAll(`[id^="${prefix}-card-"]`)];
    const card = cards.find(c => (c.textContent || '').toLowerCase().indexOf(String(name).toLowerCase()) >= 0);
    if (card || ++tries > 40) {
      clearInterval(t);
      if (!card) return;
      const body = card.querySelector(`[id^="${prefix}-body-"]`);
      if (body) body.style.display = 'block';
      card.style.borderColor = 'var(--red)';
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 150);
}
// Lab ids are like "3.2"; a stored key may use "3_2" because Firebase keys can't contain dots.
function tv2LabId(stored) { return String(stored).replace(/_/g, '.'); }
function tv2OpenLab(key, lid) {
  const d = TV2.data || {}, c = d.course[key] || {}, r = (c.labs || {})[lid] || {};
  const shown = tv2LabId(lid), wk = parseInt(shown, 10);
  cvRequire('course-w' + wk + '-labs.js').catch(() => null).then(() => {
    const L = (window.COURSE_LABS || {})[shown] || { title: 'Lab ' + shown, checkpoints: [] };
    const ok = v => v === true ? '<span style="color:#33d17a;font-weight:800;">&#10003;</span>' : v === false ? '<span style="color:#ff5a5a;font-weight:800;">&#10007;</span>' : '';
    const rows = (L.checkpoints || []).map(cp => {
      const v = (r.answers || {})[cp.id];
      const shown = cp.kind === 'choice' && v != null && v !== '' ? (cp.opts || [])[v] : v;
      const keyTxt = !('answer' in cp) ? '<span style="color:var(--muted)">Read it</span>' : tv2Esc(cp.kind === 'choice' ? (cp.opts || [])[cp.answer] : [].concat(cp.answer).join(' / '));
      return `<tr><td>${ok(cvLabRight(cp, v))}</td><td>${tv2Esc(cvStrip(cp.q))}</td><td style="white-space:pre-wrap;">${tv2Esc(shown == null ? '' : shown)}</td><td>${keyTxt}</td></tr>`;
    }).join('');
    const el = document.createElement('div');
    el.className = 'tv2-overlay'; el.id = 'tv2-lab-overlay';
    el.innerHTML = `<div><div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start;">
      <div><div style="font-size:13px;color:var(--muted);">${tv2Esc(c.name || key)} · submitted ${tv2Esc(r.at ? new Date(r.at).toLocaleString() : '')}</div><div style="font-size:19px;font-weight:700;color:#fff;">Lab ${tv2Esc(shown)}: ${tv2Esc(L.title)}</div>
      <div style="font-size:13px;color:var(--soft);margin-top:4px;">${r.correct || 0} of ${r.auto || 0} auto-checked answers correct</div></div>
      <button class="tv2-ghost" onclick="document.getElementById('tv2-lab-overlay').remove()" aria-label="Close">Close</button></div>
      <div style="overflow-x:auto;"><table><thead><tr><th></th><th>Checkpoint</th><th>Answer</th><th>Key</th></tr></thead><tbody>${rows || '<tr><td colspan="4">No checkpoints found.</td></tr>'}</tbody></table></div>
      ${r.reflection ? `<div style="font-size:14px;color:var(--text);"><span style="color:var(--muted);">Reflection: </span><span style="white-space:pre-wrap;">${tv2Esc(r.reflection)}</span></div>` : ''}
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;"><button class="tv2-go" onclick="tv2MarkLab('${tv2Js(key)}','${tv2Js(lid)}')">Mark reviewed</button><span id="tv2-lab-msg" style="font-size:13px;color:var(--muted);">Clears it from the queue. If the student resubmits, it comes back.</span></div></div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e => { if (e.target === el) el.remove(); });
  });
}
function tv2MarkLab(key, lid) {
  const rec = { at: new Date().toISOString(), by: sessionStorage.getItem('mccoe_admin_name') || 'Instructor' };
  let ref;
  try { ref = _fbDb.ref('mccoe_course/' + key + '/labs/' + lid + '/reviewed'); }
  catch (e) { const m = document.getElementById('tv2-lab-msg'); if (m) m.textContent = 'Could not save: this lab is stored under a key Firebase does not accept (' + lid + ').'; return; }
  ref.set(rec).then(() => {
    const el = document.getElementById('tv2-lab-overlay'); if (el) el.remove();
    tv2Refresh();
  }).catch(e => { const m = document.getElementById('tv2-lab-msg'); if (m) m.textContent = 'Could not save: ' + e.message; });
}

// ── Grades ──
function tv2RenderGrades() {
  const box = document.getElementById('tv2-grades'); if (!box) return;
  const d = TV2.data, cw = tv2CurWeek(), weeks = tv2Weeks().filter(w => w.num <= cw.num);
  const r = roster().slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  if (!weeks.length) { box.innerHTML = '<p class="tv2-empty">Course data did not load.</p>'; return; }
  const cols = [];
  weeks.forEach(W => {
    cols.push({ w: W.num, t: 'Quiz', k: 'quiz' });
    if (W.mock && W.mock.rubric) cols.push({ w: W.num, t: 'Mock /25', k: 'mock' });
    if (W.num <= 8) cols.push({ w: W.num, t: `P${W.num} /${(PROJECT_META[W.num] || {}).max || ''}`, k: 'case' });
  });
  const cell = (s, col) => {
    const c = tv2CourseOf(s), tid = s.portalTempId, key = tid ? tv2Safe(tid) : null;
    if (col.k === 'quiz') { const z = (c.quiz || {})['w' + col.w]; return z ? { v: z.best + '%', p: z.best } : null; }
    if (col.k === 'mock') {
      const m = key && ((d.mock[key] || {})['w' + col.w]);
      if (!m) return null;
      if (m.grade && (m.submittedAt || '') <= (m.grade.gradedAt || '')) return { v: String(m.grade.score), p: m.grade.score / 25 * 100 };
      if (m.status === 'submitted') return { wait: `tv2OpenMock('${tv2Js(key)}',${col.w})` };
      return null;
    }
    const sub = tid && (d.subs[tid] || {})['week' + col.w];
    if (!sub || !sub.submittedAt) return null;
    if (sub.grade) { const mx = (PROJECT_META[col.w] || {}).max || 100; return { v: String(sub.grade.score), p: sub.grade.score / mx * 100 }; }
    return { wait: `openGradeModal('${tv2Js(tid)}',${col.w})` };
  };
  let head1 = '<th rowspan="2">Student</th>', head2 = '';
  weeks.forEach(W => {
    const n = cols.filter(c => c.w === W.num).length;
    head1 += `<th class="wk edge" colspan="${n}">Week ${W.num}${W.num === cw.num && !cw.before ? ' (now)' : ''}</th>`;
  });
  head1 += '<th rowspan="2" class="edge">Overall</th>';
  cols.forEach((c, i) => { head2 += `<th${i === 0 || cols[i - 1].w !== c.w ? ' class="edge"' : ''}>${tv2Esc(c.t)}</th>`; });
  const rows = r.map(s => {
    const ps = [];
    const tds = cols.map((col, i) => {
      const edge = i === 0 || cols[i - 1].w !== col.w ? 'edge ' : '';
      const x = cell(s, col);
      if (!x) return `<td class="${edge}dash">–</td>`;
      if (x.wait) return `<td class="${edge}wait" onclick="${x.wait}" title="Submitted, waiting for a grade">To grade</td>`;
      ps.push(x.p);
      return `<td class="${edge}${x.p < 80 ? 'low' : ''}">${tv2Esc(x.v)}</td>`;
    }).join('');
    const ov = ps.length ? Math.round(ps.reduce((a, b) => a + b, 0) / ps.length) + '%' : '–';
    return `<tr><td><button class="tv2-namebtn" onclick="tv2OpenStudent('${tv2Js(s.id)}')">${tv2Esc(s.name)}</button></td>${tds}<td class="edge" style="font-weight:700;color:#fff;">${ov}</td></tr>`;
  }).join('');
  box.innerHTML = `<div class="tv2-toolbar"><p class="tv2-lede" style="flex:1 1 300px;">Every graded item by week, through the current week. Click a name for the full record, or an orange cell to grade it.</p><button class="tv2-ghost" onclick="tv2Refresh()">Refresh</button></div>
    <div class="tv2-scroll"><table class="tv2-grid"><thead><tr>${head1}</tr><tr>${head2}</tr></thead><tbody>${rows || `<tr><td colspan="${cols.length + 2}" class="dash">No students in this cohort yet.</td></tr>`}</tbody></table></div>
    <p style="margin:0;font-size:13px;color:var(--muted);">Quiz = best attempt. Mock = rubric score out of 25. P = case study project. Yellow = under 80%. Overall = average of graded percentages. Auto-scored tools (PBQ labs, mock exam, CTF and the rest) are in the next tab.</p>`;
}

// ── Course week view ──
function tv2SetWeek(n) { TV2.week = +n; TV2.day = null; TV2.openStep = null; tv2RenderWeek(); }
function tv2SetDay(i) { TV2.day = i; TV2.openStep = null; tv2RenderWeek(); }
function tv2ToggleStep(id) { TV2.openStep = TV2.openStep === id ? null : id; tv2RenderWeek(); }
function tv2RenderWeek() {
  const box = document.getElementById('tv2-week'); if (!box) return;
  const cw = tv2CurWeek(), weeks = tv2Weeks();
  if (!weeks.length) { box.innerHTML = '<p class="tv2-empty">Course data did not load.</p>'; return; }
  const N = TV2.week || cw.num, W = tv2WeekObj(N) || weeks[0];
  const r = roster().filter(s => s.cohortActive !== false);
  const doneBy = b => r.filter(s => { const c = tv2CourseOf(s); return c.done && c.done[b.id]; });
  if (TV2.day == null) TV2.day = W.days.length > 1 && tv2Blocks(W, 1).some(b => doneBy(b).length) ? 1 : 0;
  const day = W.days[TV2.day] || W.days[0];
  const mins = day.blocks.reduce((a, b) => a + (b.mins || 0), 0);
  let html = `<div class="tv2-toolbar"><label style="display:flex;align-items:center;gap:8px;">Week <select class="tv2-sel" onchange="tv2SetWeek(this.value)">${weeks.map(w => `<option value="${w.num}"${w.num === W.num ? ' selected' : ''}>Week ${w.num}: ${tv2Esc(w.title)}${w.num === cw.num && !cw.before ? ' (now)' : ''}</option>`).join('')}</select></label>
    <div class="tv2-chips" role="tablist">${W.days.map((d, i) => `<button class="tv2-chip${i === TV2.day ? ' on' : ''}" onclick="tv2SetDay(${i})">${tv2Esc(d.name)}</button>`).join('')}</div>
    <span class="sp" style="font-size:13px;color:var(--muted);">${r.length} students · about ${Math.floor(mins / 60)} h ${mins % 60} min of student work</span></div>
    <p class="tv2-lede" style="color:var(--text);">${tv2Esc(day.name)}: ${tv2Esc(day.focus || '')}</p><div class="tv2-list">
    <div style="display:flex;gap:14px;padding:12px 20px;font-size:12px;color:var(--muted);border-bottom:1px solid rgba(255,255,255,0.1);"><span style="width:24px;">#</span><span style="flex:1 1 auto;">Step (click to see who hasn't done it)</span><span style="width:64px;text-align:right;">Time</span><span style="width:170px;">Class done</span></div>`;
  day.blocks.forEach((b, i) => {
    const who = doneBy(b), p = r.length ? Math.round(who.length / r.length * 100) : 0;
    html += `<button class="tv2-steprow" onclick="tv2ToggleStep('${tv2Js(b.id)}')"><span class="n">${i + 1}</span><span class="t">${tv2TypeChip(b.type)}<b>${tv2Esc(b.title)}</b></span><span class="m">${b.mins || 0} min</span><span class="p">${tv2Bar(p)}<span>${who.length}/${r.length}</span></span></button>`;
    if (TV2.openStep === b.id) {
      const not = r.filter(s => who.indexOf(s) < 0);
      html += `<div class="tv2-missing">${not.length ? 'Not done yet: ' + not.map(s => `<button class="tv2-link" onclick="tv2OpenStudent('${tv2Js(s.id)}')">${tv2Esc(s.name)}</button>`).join(', ') : 'Everyone has done this step.'}</div>`;
    }
  });
  box.innerHTML = html + `</div><p style="margin:0;font-size:13px;color:var(--muted);">To read lab answers or grade a mock project for one student, use the "Students and review" chip above.</p>`;
}

// ── Student record ──
function tv2OpenStudent(id) { TV2.sid = id; TV2.stab = 'Overview'; showView('student'); }
function tv2SetSTab(t) { TV2.stab = t; tv2RenderStudent(); }
function tv2RenderStudent() {
  const box = document.getElementById('tv2-student'); if (!box) return;
  const s = students.find(x => x && x.id === TV2.sid);
  if (!s) { box.innerHTML = '<p class="tv2-empty">Pick a student from the Roster.</p>'; return; }
  const d = TV2.data, c = tv2CourseOf(s), tid = s.portalTempId, key = tid ? tv2Safe(tid) : null;
  const cw = tv2CurWeek(), W = tv2WeekObj(cw.num), blocks = tv2Blocks(W);
  const doneWk = blocks.filter(b => c.done && c.done[b.id]).length;
  const waiting = TV2.queue.filter(i => i.sid === s.id);
  const flag = TV2.attention.find(a => a.s.id === s.id);
  const last = c.lastActivity || (d.checkins[tid] && Object.values(d.checkins[tid]).map(e => e && e.submittedAt).filter(Boolean).sort().pop());
  const grades = [];
  tv2Weeks().filter(w => w.num <= cw.num).forEach(Wk => {
    const z = (c.quiz || {})['w' + Wk.num];
    if (z) grades.push([`Week ${Wk.num} quiz`, `${z.best}%${z.best < 80 ? ' (retake open)' : ''}`, z.best]);
    const m = key && (d.mock[key] || {})['w' + Wk.num];
    if (m && m.grade) grades.push([`Week ${Wk.num} ${Wk.mock && Wk.mock.title || 'mock project'}`, `${m.grade.score} / 25`, m.grade.score * 4]);
    else if (m && m.status === 'submitted') grades.push([`Week ${Wk.num} ${Wk.mock && Wk.mock.title || 'mock project'}`, 'To grade', null]);
    const sub = tid && Wk.num <= 8 && (d.subs[tid] || {})['week' + Wk.num];
    if (sub && sub.submittedAt) { const mx = (PROJECT_META[Wk.num] || {}).max || 100; grades.push([`Project ${Wk.num}: ${(PROJECT_META[Wk.num] || {}).incident || ''}`, sub.grade ? `${sub.grade.score} / ${mx}` : 'To grade', sub.grade ? sub.grade.score / mx * 100 : null]); }
  });
  const graded = grades.filter(g => g[2] != null), avg = graded.length ? Math.round(graded.reduce((a, g) => a + g[2], 0) / graded.length) : null;
  const tabs = ['Overview', 'Course progress', 'Grades', 'Attendance', 'Surveys', 'Notes'];
  let html = `<div class="tv2-head"><div class="tv2-avatar">${tv2Esc(initials(s.name || '?'))}</div><div class="who"><span><button class="tv2-link" onclick="showView('students')">Roster</button> / ${tv2Esc(s.studentId || 'No ID yet')}</span><b>${tv2Esc(s.name)}</b>
    <span>${tv2Esc(s.cohort || viewCohort().name)}${last ? ' · last activity ' + tv2Esc(tv2Ago(last)) : ''}</span></div>
    ${flag ? `<span class="tv2-flag">Needs attention</span>` : ''}
    <button class="tv2-ghost" onclick="openDetail('${tv2Js(s.id)}')">Full profile and account</button>
    <button class="tv2-ghost" onclick="tv2Employer('${tv2Js(s.id)}')">Employer profile</button></div>
    <div class="tv2-chips" role="tablist">${tabs.map(t => `<button class="tv2-chip${TV2.stab === t ? ' on' : ''}" onclick="tv2SetSTab('${t}')">${t}</button>`).join('')}</div>`;
  if (TV2.stab === 'Overview') {
    html += `<div class="tv2-mini"><div><span>Week ${cw.num} steps</span><b>${doneWk} of ${blocks.length}</b></div><div><span>Attendance</span><b>${attendRate(s)}%</b></div>
      <div><span>Graded so far</span><b>${avg == null ? '–' : avg + '%'}</b></div><div><span>Waiting for you</span><b style="color:${waiting.length ? '#ff8a4c' : '#fff'};">${waiting.length}</b></div></div>`;
    html += `<div class="tv2-cols">${flag ? `<section class="tv2-panel"><h2>Why flagged</h2><p style="margin:0;font-size:14px;color:var(--text);line-height:1.5;">${tv2Esc(flag.why)}</p></section>` : ''}
      <section class="tv2-panel"><h2>Waiting for you</h2>${waiting.length ? waiting.map(it => `<div class="tv2-item">${tv2KindChip(it.kind)}<div class="t"><b>${tv2Esc(it.title)}</b><span>${tv2Esc(tv2Ago(it.at))}</span></div><button class="tv2-go" onclick="${it.go}">Grade</button></div>`).join('') : '<p class="tv2-empty">Nothing waiting.</p>'}</section>
      <section class="tv2-panel"><h2>Latest survey</h2>${tv2LatestSurvey(d.checkins[tid])}</section></div>`;
  }
  if (TV2.stab === 'Course progress') {
    html += '<section class="tv2-panel">' + tv2Weeks().filter(w => w.num <= cw.num).map(Wk => {
      const bl = tv2Blocks(Wk), n = bl.filter(b => c.done && c.done[b.id]).length, p = bl.length ? Math.round(n / bl.length * 100) : 0;
      return `<div class="tv2-wkrow"><span class="l">Week ${Wk.num}</span>${tv2Bar(p)}<span class="r">${n} of ${bl.length} steps</span></div>`;
    }).join('') + '</section>';
  }
  if (TV2.stab === 'Grades') html += '<section class="tv2-panel">' + (grades.length ? grades.map(g => `<div class="tv2-line"><span class="l">${tv2Esc(g[0])}</span><span class="r" style="color:${g[2] == null ? '#ff8a4c' : tv2Pc(g[2])};">${tv2Esc(g[1])}</span></div>`).join('') : '<p class="tv2-empty">No grades yet.</p>') + '</section>';
  if (TV2.stab === 'Attendance') {
    const days = Object.keys(s.attendance || {}).sort().reverse();
    const lbl = { P: 'Present', L: 'Late', A: 'Absent' };
    html += '<section class="tv2-panel">' + (days.length ? days.map(dt => `<div class="tv2-line"><span class="l">${tv2Esc(new Date(dt + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }))}</span><span class="r" style="color:${s.attendance[dt] === 'A' ? '#ff5a5a' : s.attendance[dt] === 'L' ? 'var(--warn)' : 'var(--text)'};">${lbl[s.attendance[dt]] || tv2Esc(s.attendance[dt])}</span></div>`).join('') : '<p class="tv2-empty">No attendance marked yet.</p>') +
      `<button class="tv2-ghost" style="align-self:flex-start;" onclick="showView('attendance')">Mark attendance</button></section>`;
  }
  if (TV2.stab === 'Surveys') {
    const list = Object.values(d.checkins[tid] || {}).filter(e => e && e.submittedAt).sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
    html += '<section class="tv2-panel">' + (list.length ? list.map(e => `<div class="tv2-line" style="flex-direction:column;gap:4px;"><span class="r">${e.mood ? 'Weekly check-in, week ' + tv2Esc(e.week) : 'Daily survey'} · ${tv2Esc(new Date(e.submittedAt).toLocaleDateString())}${e.confidence ? ' · confidence ' + e.confidence + ' of 5' : ''}${e.rating ? ' · rating ' + e.rating + ' of 5' : ''}</span>
      <span class="l" style="white-space:pre-wrap;">${tv2Esc([e.topic, e.learned, e.challenge, e.goal, e.improve, e.questions].filter(Boolean).join('\n'))}</span></div>`).join('') : '<p class="tv2-empty">No surveys yet.</p>') + '</section>';
  }
  if (TV2.stab === 'Notes') {
    const notes = (s.notesLog || []).slice().reverse();
    html += '<section class="tv2-panel">' + (notes.length ? notes.map(n => `<div class="tv2-line" style="flex-direction:column;gap:4px;"><span class="r">${tv2Esc(n.date)} · ${tv2Esc(n.tag)} · ${tv2Esc(n.author)}</span><span class="l">${tv2Esc(n.text)}</span></div>`).join('') : '<p class="tv2-empty">No notes yet.</p>') +
      `<button class="tv2-ghost" style="align-self:flex-start;" onclick="openDetail('${tv2Js(s.id)}')">Add a note</button></section>`;
  }
  box.innerHTML = html;
}
function tv2LatestSurvey(ck) {
  const e = Object.values(ck || {}).filter(x => x && x.submittedAt).sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))[0];
  if (!e) return '<p class="tv2-empty">No surveys yet.</p>';
  const text = e.challenge || e.learned || e.topic || '';
  return `<p style="margin:0;font-size:14px;color:var(--text);line-height:1.5;">${e.confidence ? 'Confidence ' + e.confidence + ' of 5. ' : ''}${text ? '"' + tv2Esc(text) + '"' : ''}</p><span style="font-size:12px;color:var(--muted);">${e.mood ? 'Weekly check-in' : 'Daily survey'}, ${tv2Esc(tv2Ago(e.submittedAt))}</span>`;
}
function tv2Employer(id) {
  showView('employer');
  setTimeout(() => { const sel = document.getElementById('employerStudentSelect'); if (sel) { sel.value = id; renderEmployerView(); } }, 50);
}

// ── Hooks into the existing Tracker ──
(function tv2Hooks() {
  const base = showView;
  showView = function (name, btn) { base(name, btn); tv2AfterView(name); };
  const after = (fn, ms) => {
    const f = window[fn];
    if (typeof f !== 'function') return;
    window[fn] = function () { const r = f.apply(this, arguments); setTimeout(() => { if (['todo', 'grading', 'grades', 'student', 'weekv2'].indexOf(_currentView) >= 0) tv2Refresh(); else tv2Load(true).then(() => tv2RenderSubnav(_currentView)).catch(() => {}); }, ms || 1200); return r; };
  };
  ['cvSaveGrade', 'closeGradeModal', 'tkSaveGrade', 'approvePending', 'rejectPending'].forEach(f => after(f));
  const login = window.checkAdminLogin;
  if (typeof login === 'function') window.checkAdminLogin = function () { login.apply(this, arguments); if (sessionStorage.getItem('mccoe_admin_auth') === '1') tv2Start(); };
})();

function tv2Start() {
  const who = document.getElementById('tv2-who-name');
  if (who) who.textContent = sessionStorage.getItem('mccoe_admin_name') || '';
  showView('todo');
  if (!TV2.timer) TV2.timer = setInterval(() => { if (sessionStorage.getItem('mccoe_admin_auth') === '1') tv2Load(true).then(() => tv2RenderSubnav(_currentView)).catch(() => {}); }, 120000);
}
if (sessionStorage.getItem('mccoe_admin_auth') === '1') tv2Start();
