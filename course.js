// Shared helpers for the Course v2 pages (Home, Lesson, Lab, Practice, Quiz, mock projects).
// Load after Firebase 8.10.1 app + database scripts and before course-data.js.
(function () {
  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCHOnjuN7xIR9ChuCI2lRBSufauLW8yH1c",
    authDomain: "mccoe-platform-b0e80.firebaseapp.com",
    databaseURL: "https://mccoe-platform-b0e80-default-rtdb.firebaseio.com",
    projectId: "mccoe-platform-b0e80"
  };
  var db = null;
  try {
    if (window.firebase) {
      if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.database();
    }
  } catch (e) { db = null; }

  (function fonts() {
    if (document.querySelector('link[data-cc-fonts]')) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.setAttribute('data-cc-fonts', '1');
    l.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&family=Share+Tech+Mono&display=swap';
    document.head.appendChild(l);
  })();

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var params = new URLSearchParams(location.search);
  var name = params.get('name') || lsGet('hub_name') || '';
  var id = params.get('id') || lsGet('hub_id') || '';
  if (params.get('name')) lsSet('hub_name', name);
  if (params.get('id')) lsSet('hub_id', id);
  var key = String(id || name || '').replace(/[.#$\[\]\/]/g, '_');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function link(url) {
    if (!url || /^https?:/i.test(url)) return url;
    var hash = '';
    var i = url.indexOf('#');
    if (i >= 0) { hash = url.slice(i); url = url.slice(0, i); }
    var p = [];
    if (name) p.push('name=' + encodeURIComponent(name));
    if (id) p.push('id=' + encodeURIComponent(id));
    if (!p.length) return url + hash;
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + p.join('&') + hash;
  }

  // Local copy so pages work in preview (file://, no login) and while offline.
  var LOCAL_KEY = 'cc_course_' + (key || 'preview');
  function localRead() { try { return JSON.parse(lsGet(LOCAL_KEY) || '{}'); } catch (e) { return {}; } }
  function localWrite(obj) { lsSet(LOCAL_KEY, JSON.stringify(obj)); }
  function setPath(obj, path, val) {
    var parts = path.split('/'), o = obj;
    for (var i = 0; i < parts.length - 1; i++) { if (typeof o[parts[i]] !== 'object' || !o[parts[i]]) o[parts[i]] = {}; o = o[parts[i]]; }
    if (val === null) delete o[parts[parts.length - 1]]; else o[parts[parts.length - 1]] = val;
  }

  var online = !!(db && key);

  // Read the student's whole course record once.
  function load() {
    var local = localRead();
    if (!online) return Promise.resolve(local);
    return db.ref('mccoe_course/' + key).once('value').then(function (s) {
      var v = s.val() || {};
      localWrite(v);
      return v;
    }).catch(function () { return local; });
  }

  // Write one value under mccoe_course/{key}/<path>.
  function save(path, val) {
    var local = localRead();
    setPath(local, path, val);
    local.lastActivity = new Date().toISOString();
    if (name) local.name = name;
    if (id) local.id = id;
    localWrite(local);
    if (!online) return Promise.resolve();
    var upd = {};
    upd[path] = val;
    upd.lastActivity = local.lastActivity;
    upd.name = name || null;
    upd.id = id || null;
    return db.ref('mccoe_course/' + key).update(upd).catch(function (e) { toast('Saved on this computer only. ' + e.message); });
  }

  function allBlocks() {
    var out = [];
    ((window.COURSE && COURSE.weeks) || []).forEach(function (w) {
      (w.days || []).forEach(function (d, di) {
        (d.blocks || []).forEach(function (b) { out.push({ week: w, day: d, dayIndex: di, block: b }); });
      });
    });
    return out;
  }
  // Mark every block whose href points at this page (e.g. 'Lesson.html?l=1.1') as done.
  function markDoneFor(href) {
    var hits = allBlocks().filter(function (x) { return x.block.href === href; });
    var now = new Date().toISOString();
    return Promise.all(hits.map(function (x) { return save('done/' + x.block.id, now); }));
  }
  function markDone(blockId, on) { return save('done/' + blockId, on === false ? null : new Date().toISOString()); }

  function toast(msg) {
    var t = document.getElementById('cc-toast');
    if (!t) { t = document.createElement('div'); t.id = 'cc-toast'; t.className = 'cc-toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('on');
    clearTimeout(toast._h);
    toast._h = setTimeout(function () { t.classList.remove('on'); }, 2600);
  }

  // Top bar. active = 'week' | 'work' | 'res' | ''
  function header(active) {
    var el = document.getElementById('cc-top');
    if (!el) { el = document.createElement('header'); el.id = 'cc-top'; document.body.insertBefore(el, document.body.firstChild); }
    el.className = 'cc-top';
    var tabs = [['week', 'This Week'], ['work', 'My Work'], ['res', 'Resources']];
    var initial = (name || '?').trim().charAt(0).toUpperCase();
    el.innerHTML = '<div class="in">' +
      '<a class="cc-brand" href="' + esc(link('MCCoE_Home.html')) + '">MC<span>CoE</span></a>' +
      '<nav class="cc-tabs">' + tabs.map(function (t) {
        return '<a href="' + esc(link('MCCoE_Home.html#' + t[0])) + '" data-tab="' + t[0] + '"' + (active === t[0] ? ' aria-selected="true"' : '') + '>' + t[1] + '</a>';
      }).join('') + '</nav>' +
      '<div class="cc-who">' + (name
        ? '<div class="cc-avatar">' + esc(initial) + '</div><div><b class="nm">' + esc(name) + '</b> <span class="id">' + esc(id) + '</span></div><button class="btn ghost" type="button" id="cc-signout" style="padding:5px 10px;font-size:.85rem">Sign out</button>'
        : '<a class="btn ghost" href="MCCoE_Hub.html">Sign in</a>') + '</div>' +
      '</div>';
    var so = el.querySelector('#cc-signout');
    if (so) so.addEventListener('click', function () {
      try { localStorage.removeItem('hub_name'); localStorage.removeItem('hub_id'); } catch (e) {}
      location.href = 'MCCoE_Hub.html';
    });
    return el;
  }

  function copyButtons(root) {
    (root || document).querySelectorAll('pre.cmd').forEach(function (pre) {
      if (pre.querySelector('.copy')) return;
      var b = document.createElement('button');
      b.className = 'copy'; b.type = 'button'; b.textContent = 'Copy';
      b.addEventListener('click', function () {
        var text = pre.getAttribute('data-cmd') || '';
        var done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1500); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () { selectText(pre); });
        } else selectText(pre);
      });
      pre.appendChild(b);
    });
  }
  function selectText(el) {
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  // Load a script once (week content files are loaded on demand).
  var loaded = {};
  function require(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { res(); };
      s.onerror = function () { rej(new Error('Could not load ' + src)); };
      document.head.appendChild(s);
    });
    return loaded[src];
  }

  // Where a page sits in the course, and what comes after it.
  function blockFor(href) {
    var all = allBlocks();
    for (var i = 0; i < all.length; i++) if (all[i].block.href === href) return all[i];
    return null;
  }
  function nextAfter(href) {
    var all = allBlocks();
    for (var i = 0; i < all.length - 1; i++) {
      if (all[i].block.href === href) {
        for (var j = i + 1; j < all.length; j++) if (all[j].block.href !== href) return all[j];
      }
    }
    return null;
  }
  function crumb(href, label) {
    var at = blockFor(href);
    var home = link('MCCoE_Home.html');
    if (!at) return '<div class="crumb"><a href="' + esc(home) + '">This Week</a></div>';
    return '<div class="crumb"><a href="' + esc(link('MCCoE_Home.html?week=' + at.week.num + '&day=' + (at.dayIndex + 1))) + '">Week ' + at.week.num + ' &rsaquo; ' + esc(at.day.name) + '</a>' + (label ? ' &rsaquo; ' + esc(label) : '') + '</div>';
  }
  function nextButton(href) {
    var n = nextAfter(href);
    if (!n) return '<a class="btn" href="' + esc(link('MCCoE_Home.html')) + '">Back to This Week</a>';
    var sameDay = blockFor(href) && blockFor(href).day === n.day;
    return '<a class="btn primary" href="' + esc(link(n.block.href)) + '">Next' + (sameDay ? '' : ' (' + esc(n.day.name) + ')') + ': ' + esc(n.block.title) + ' &rarr;</a>';
  }

  window.CC = {
    db: db, online: online,
    student: function () { return { name: name, id: id, key: key }; },
    link: link, esc: esc, load: load, save: save, require: require,
    blockFor: blockFor, nextAfter: nextAfter, crumb: crumb, nextButton: nextButton,
    markDone: markDone, markDoneFor: markDoneFor, allBlocks: allBlocks,
    toast: toast, header: header, copyButtons: copyButtons, shuffle: shuffle,
    param: function (k) { return params.get(k); }
  };
})();
