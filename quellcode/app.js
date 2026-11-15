(function(){
"use strict";
// ================= Speicher =================
const KEY = "gewi5-lernplattform-v1";
let P = {};
try { P = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch(e) { P = {}; }
function save(){ try { localStorage.setItem(KEY, JSON.stringify(P)); } catch(e) {} }
function chP(id){ if(!P[id]) P[id] = { ex:{}, stars:0, notes:{} }; if(!P[id].notes) P[id].notes={}; return P[id]; }
function markEx(ch, ex){ const p = chP(ch); if(!p.ex[ex]){ p.ex[ex] = true; save(); } }

// ================= Hilfen =================
const $ = (s, r=document) => r.querySelector(s);
const el = (tag, attrs={}, html) => { const e = document.createElement(tag); for(const k in attrs){ if(k==="class") e.className=attrs[k]; else if(k.startsWith("on")) e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); } if(html!=null) e.innerHTML = html; return e; };
const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function norm(s){
  return String(s).toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
    .replace(/[^a-z0-9,\. ]+/g," ").replace(/\s+/g," ").trim();
}
function lev(a,b){ const m=a.length,n=b.length; if(Math.abs(m-n)>2) return 9; let prev=Array.from({length:n+1},(_,i)=>i);
  for(let i=1;i<=m;i++){ const cur=[i]; for(let j=1;j<=n;j++){ cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1)); } prev=cur; } return prev[n]; }
// Findet eine Alternative im Text; liefert Position oder -1
function findAlt(ans, alt){
  if(alt.startsWith("=")) { const a = norm(alt.slice(1)); const toks = ans.split(/[ ,\.]+/); return toks.indexOf(a) >= 0 ? Math.max(0, ans.indexOf(a)) : -1; }
  const a = norm(alt); if(!a) return -1;
  const i = ans.indexOf(a); if(i >= 0) return i;
  if(a.includes(" ") || a.length < 5) return -1;
  const tol = a.length >= 9 ? 2 : 1;
  let pos = 0;
  for(const w of ans.split(" ")){
    if(w.length >= a.length - tol){
      if(lev(w.slice(0, a.length), a) <= tol || lev(w, a) <= tol) return pos;
      for(let k=1; k+a.length <= w.length+1 && k<=w.length-3; k++){ if(lev(w.slice(k, k+a.length), a) <= tol-0 && tol>1) return pos+k; }
    }
    pos += w.length + 1;
  }
  return -1;
}
function checkOpen(q, answer){
  const ans = norm(answer);
  if(ans.length === 0) return false;
  if(q.min){
    const pool = q.pool || q.keys[0];
    const hits = new Set(); pool.forEach(a => { if(findAlt(ans, a) >= 0) hits.add(norm(a)); });
    return hits.size >= q.min;
  }
  let last = -1;
  for(const group of q.keys){
    let best = -1;
    for(const alt of group){ const p = findAlt(ans, alt); if(p >= 0 && (best < 0 || p < best)) best = p; }
    if(best < 0) return false;
    if(q.ordered){ if(best < last) return false; last = best; }
  }
  return true;
}

// ================= Karten (Geodaten) =================
const CONT_NAMES = { NA:"Nordamerika", SA:"Südamerika", EU:"Europa", AS:"Asien", AF:"Afrika", AU:"Australien", AN:"Antarktis" };
const CONT_COLORS = { NA:"#f4a259", SA:"#e76f51", EU:"#8ab17d", AS:"#e9c46a", AF:"#d4a373", AU:"#c77dff", AN:"#a8dadc" };
const OCEAN_NAMES = { pazifik:"Pazifik", atlantik:"Atlantik", indik:"Indischer Ozean", arktis:"Nordpolarmeer", sued:"Südpolarmeer" };
function closeRing(r){ r = r.slice(); const f=r[0], l=r[r.length-1]; if(f[0]!==l[0]||f[1]!==l[1]) r.push(f); return r; }
function fixPoly(p){ if(d3.geoArea({type:"Polygon",coordinates:p}) > 2*Math.PI) p.forEach(r=>r.reverse()); return p; }
const CONTS = Object.entries(GEO_RAW).map(([id, polys]) => ({ type:"Feature", id, geometry:{ type:"MultiPolygon", coordinates: polys.map(r=>fixPoly([closeRing(r)])) } }));
const LAKES = Object.entries(LAKES_RAW).map(([id, r]) => ({ type:"Feature", id, geometry:{ type:"Polygon", coordinates: fixPoly([closeRing(r)]) } }));

function oceanAt(lon, lat){
  if(lat >= 66) return "arktis";
  if(lat <= -60) return "sued";
  if(lon >= 20 && lon <= 147){
    if(lat >= 30) return lon <= 45 ? "atlantik" : "pazifik";
    if(lon < 100) return "indik";
    if(lat < -10) return "indik";
    return "pazifik";
  }
  if(lon > 147 || lon < -100) return "pazifik";
  if(lat < -56) return lon < -67 ? "pazifik" : "atlantik";
  if(lat < 8){ const t = lat > -42 ? -68 : -72; return lon < t ? "pazifik" : "atlantik"; }
  if(lat <= 31){ const t = lat < 18 ? -80 - (lat-8)*2.1 : -100; return lon < t ? "pazifik" : "atlantik"; }
  return lon < -100 ? "pazifik" : "atlantik";
}

const VIEWS = {
  normal:     { w:960, h:480, make:()=>d3.geoEqualEarth().rotate([-10,0]) },
  southUp:    { w:960, h:480, make:()=>d3.geoEqualEarth().rotate([-160,0]).angle(180) },
  oceanSouth: { w:960, h:480, make:()=>d3.geoEqualEarth().rotate([-30,0]).angle(180) },
  globeTilt:  { w:700, h:700, make:()=>d3.geoOrthographic().rotate([-62,5,140]).clipAngle(90), globe:[62,-5] },
  polar:      { w:720, h:720, make:()=>d3.geoAzimuthalEquidistant().rotate([100,-90]).clipAngle(118), globe:[0,90], clipDeg:118 },
  globePac:   { w:700, h:700, make:()=>d3.geoOrthographic().rotate([150,-10,-60]).clipAngle(90), globe:[-150,10] },
  sideways:   { w:480, h:960, make:()=>d3.geoEqualEarth().rotate([-10,0]).angle(90) }
};
function visibleIn(view, ll){ const v = VIEWS[view]; const lim = (v.clipDeg || 90) * Math.PI/180; return !v.globe || d3.geoDistance(ll, v.globe) < lim - 0.12; }

function drawMap(host, view, opts={}){
  const v = VIEWS[view];
  const proj = v.make().fitExtent([[8,8],[v.w-8,v.h-8]], {type:"Sphere"});
  const path = d3.geoPath(proj);
  host.innerHTML = "";
  const svg = d3.select(host).append("svg").attr("viewBox", `0 0 ${v.w} ${v.h}`).attr("class","mapsvg");
  const sphere = svg.append("path").datum({type:"Sphere"}).attr("class","m-sea").attr("d", path);
  svg.append("path").datum(d3.geoGraticule10()).attr("class","m-grat").attr("d", path);
  const conts = svg.append("g").selectAll("path").data(CONTS).join("path")
    .attr("class","m-land").attr("d", path)
    .style("fill", d => opts.colored ? CONT_COLORS[d.id] : null);
  svg.append("g").selectAll("path").data(LAKES).join("path").attr("class","m-lake").attr("d", path);
  svg.append("path").datum({type:"Sphere"}).attr("class","m-edge").attr("d", path);
  const layer = svg.append("g");
  return { svg, proj, path, conts, sphere, layer, view };
}
function addLabel(m, ll, text, cls="m-lbl"){
  if(!visibleIn(m.view, ll)) return;
  const p = m.proj(ll); if(!p || !isFinite(p[0])) return;
  m.layer.append("text").attr("class", cls).attr("x", p[0]).attr("y", p[1]).style("font-size", Math.max(16, VIEWS[m.view].w/38)+"px").text(text);
}
function addNumber(m, ll, n){
  const p = m.proj(ll); if(!p || !isFinite(p[0])) return;
  const g = m.layer.append("g").attr("transform", `translate(${p[0]},${p[1]})`);
  const w = VIEWS[m.view].w; const r = Math.max(15, w/30);
  g.append("circle").attr("r", r).attr("class","m-num");
  g.append("text").attr("class","m-numt").attr("dy","0.35em").style("font-size", (r*1.15)+"px").text(n);
}
function mapClickLL(m, evt){
  const svgEl = m.svg.node(); const pt = svgEl.createSVGPoint(); pt.x = evt.clientX; pt.y = evt.clientY;
  const p = pt.matrixTransform(svgEl.getScreenCTM().inverse());
  if(!m.sphere.node().isPointInFill(p)) return null;
  const ll = m.proj.invert([p.x, p.y]);
  if(!ll || !isFinite(ll[0])) return null;
  const v = VIEWS[m.view]; if(v.globe && d3.geoDistance(ll, v.globe) > (v.clipDeg||90)*Math.PI/180) return null;
  return { ll, xy:[p.x,p.y] };
}
function whatIsAt(ll){
  for(const l of LAKES) if(d3.geoContains(l, ll)) return { kind:"lake", id:l.id };
  for(const c of CONTS) if(d3.geoContains(c, ll)) return { kind:"cont", id:c.id };
  return { kind:"ocean", id: oceanAt(ll[0], ll[1]) };
}

// ================= Navigation =================
const app = $("#app");
let current = null;
function route(){
  const h = (location.hash || "").replace("#","");
  const ch = CHAPTERS.find(c => c.id === h);
  window.scrollTo(0,0);
  if(ch) renderChapter(ch); else renderHome();
}
window.addEventListener("hashchange", route);

function starsHtml(n){ return [1,2,3].map(i => `<span class="star ${i<=n?"on":""}">★</span>`).join(""); }

function renderHome(){
  current = null;
  const total = CHAPTERS.reduce((s,c)=>s+3,0);
  const got = CHAPTERS.reduce((s,c)=>s+(chP(c.id).stars||0),0);
  app.innerHTML = `
  <header class="hero">
    <div class="hero-in">
      <div class="pill">Klasse 5 · Gesellschaftswissenschaften</div>
      <h1>Gewi-Lernwelt</h1>
      <p>Lerne, übe und teste dich in acht Kapiteln. Für jeden Test bekommst du bis zu drei Sterne.</p>
      <div class="total"><span>${got} von ${total} Sternen</span><div class="bar"><i style="width:${Math.round(got/total*100)}%"></i></div></div>
    </div>
  </header>
  <main class="grid" id="chapters"></main>
  <footer class="foot">Dein Fortschritt wird nur in diesem Browser gespeichert. <button class="link" id="reset">Fortschritt löschen</button></footer>`;
  const g = $("#chapters");
  CHAPTERS.forEach((c, i) => {
    const p = chP(c.id); const exDone = Object.keys(p.ex).length; const exAll = c.practice.length;
    const a = el("a", { class:"chcard", href:"#"+c.id, style:`--c:${c.color}` }, `
      <div class="chnum">${i+1}</div><div class="chemoji">${c.emoji}</div>
      <div class="chtxt"><b>${c.title}</b><span>${c.short}</span>
      <div class="chmeta"><span class="stars">${starsHtml(p.stars||0)}</span><span class="exc">${exDone}/${exAll} Übungen</span></div></div>`);
    g.appendChild(a);
  });
  $("#reset").onclick = () => { const b = $("#reset"); if(b.dataset.sure){ P = {}; save(); renderHome(); } else { b.dataset.sure = "1"; b.textContent = "Wirklich alles löschen? Nochmal tippen."; } };
}

function renderChapter(ch){
  current = ch;
  const idx = CHAPTERS.indexOf(ch);
  app.innerHTML = `
  <div class="chhead" style="--c:${ch.color}">
    <a class="back" href="#">← Übersicht</a>
    <div class="chtitle"><span class="chemoji">${ch.emoji}</span><div><small>Kapitel ${idx+1}</small><h1>${ch.title}</h1></div></div>
    <nav class="tabs" role="tablist">
      <button data-tab="learn" class="on">📖 Lernen</button><button data-tab="practice">✏️ Üben</button><button data-tab="cards">🃏 Karten</button><button data-tab="test">🏆 Test</button>
    </nav>
  </div>
  <main class="content" id="tabc" style="--c:${ch.color}"></main>
  <div class="chnav">${idx>0?`<a href="#${CHAPTERS[idx-1].id}">← ${CHAPTERS[idx-1].title}</a>`:"<span></span>"}${idx<CHAPTERS.length-1?`<a href="#${CHAPTERS[idx+1].id}">${CHAPTERS[idx+1].title} →</a>`:""}</div>`;
  const tabs = app.querySelectorAll(".tabs button");
  tabs.forEach(b => b.onclick = () => { tabs.forEach(x=>x.classList.toggle("on", x===b)); showTab(ch, b.dataset.tab); });
  showTab(ch, "learn");
}

function showTab(ch, tab){
  const c = $("#tabc"); c.innerHTML = "";
  if(tab === "learn") renderLearn(ch, c);
  if(tab === "practice") renderPracticeList(ch, c);
  if(tab === "cards") renderCards(ch, c);
  if(tab === "test") renderTest(ch, c);
}

// ================= Lernen =================
function renderLearn(ch, c){
  c.innerHTML = `<article class="learn">${ch.learn}</article><div class="next"><button class="btn" id="toPractice">Weiter zum Üben ✏️</button></div>`;
  $("#toPractice").onclick = () => app.querySelector('.tabs [data-tab="practice"]').click();
  if(ch.id === "himmel") $("#learnRose").innerHTML = roseSvg(true);
  if(ch.id === "kontinente"){
    const m = drawMap($("#learnContMap"), "normal", { colored:true });
    const pos = { NA:[-100,45], SA:[-60,-14], EU:[18,53], AS:[92,50], AF:[20,5], AU:[134,-25], AN:[30,-80] };
    Object.entries(pos).forEach(([k,ll]) => addLabel(m, ll, CONT_NAMES[k]));
    addLabel(m, [10.4,51.2], "★", "m-star");
  }
  if(ch.id === "meere"){
    const m = drawMap($("#learnOceanMap"), "normal");
    [["Pazifik",[-150,5]],["Pazifik",[165,-20]],["Atlantik",[-35,25]],["Atlantik",[-15,-25]],["Indischer Ozean",[78,-22]],["Nordpolarmeer",[20,80]],["Südpolarmeer",[0,-64]]].forEach(([t,ll])=>addLabel(m, ll, t, "m-lbl ocean"));
  }
  if(ch.id === "erde"){
    const rows = [["Die Erde entsteht",4600],["Erste Einzeller",3800],["Sauerstoff durch Fotosynthese",2400],["Erste Fische",500],["Steinkohlewälder",320],["Erste Dinosaurier",230],["Dinosaurier sterben aus",66],["Erste Menschen (Gattung Homo)",2.5],["Homo sapiens",0.3]];
    const tm = mio => { const s = Math.round(86400*(1 - mio/4600)); const h=Math.floor(s/3600), mi=Math.floor(s%3600/60), se=s%60; return `${h}:${String(mi).padStart(2,"0")}${(h===23&&mi>=59)?":"+String(se).padStart(2,"0"):""} Uhr`; };
    const yrs = mio => mio>=1000 ? `vor ${String(mio/1000).replace(".",",")} Mrd. Jahren` : mio>=1 ? `vor ${String(mio).replace(".",",")} Mio. Jahren` : `vor ${Math.round(mio*1000)} 000 Jahren`;
    $("#dayTable").innerHTML = `<tr><th>Ereignis</th><th>wirklich</th><th>auf der Uhr</th></tr>` + rows.map(([t,m])=>`<tr><td>${t}</td><td>${yrs(m)}</td><td><b>${m===4600?"0:00 Uhr":tm(m)}</b></td></tr>`).join("");
  }
  if(ch.id === "mensch"){
    $("#tree").innerHTML = treeHtml();
    $("#profiles").innerHTML = PROFILES.map(p=>`<div class="profile"><h4>${p.name}</h4><div class="sub">${p.sub}</div>
      <div class="pmeta"><span>🕰️ ${p.time}</span><span>📍 ${p.where}</span></div><ul>${p.facts.map(f=>`<li>${f}</li>`).join("")}</ul></div>`).join("");
  }
}
function treeHtml(){
  const rows = [["Homo sapiens","seit ca. 300 000 Jahren","t5"],["Neandertaler","ca. 200 000 – 40 000 Jahre","t4"],["Homo erectus","ab ca. 1,6 Mio. Jahren (Arbeitsblatt)","t3"],["Homo habilis","ca. 2,5 – 1,5 Mio. Jahre","t2"],["Australopithecus","ca. 4 – 2 Mio. Jahre","t1"]];
  return `<div class="tree-col"><div class="tree-apes"><b>heutige Menschenaffen</b><span>Schimpanse, Gorilla, Orang-Utan</span></div>
   <div class="tree-main">${rows.map(r=>`<div class="tnode ${r[2]}"><b>${r[0]}</b><span>${r[1]}</span></div>`).join("")}</div></div>
   <div class="tree-root"><b>Dryopithecinen – Baumaffen</b><span>gemeinsame Vorfahren, vor rund 20 Mio. Jahren</span></div>
   <p class="small">Links: der Zweig der Menschenaffen. Rechts: der Zweig des Menschen, von unten (alt) nach oben (jung). Der Neandertaler ist ein Seitenzweig – er ist nicht unser Urgroßvater, sondern eher ein entfernter Verwandter.</p>`;
}
function roseSvg(labels){
  const dirs = [["N",0],["NO",45],["O",90],["SO",135],["S",180],["SW",225],["W",270],["NW",315]];
  let s = `<svg viewBox="-150 -150 300 300" class="rose">`;
  s += `<circle r="98" class="r-ring"/>`;
  dirs.forEach(([d,a])=>{ const main = d.length===1; const len = main?92:62, wd = main?14:9;
    s += `<g transform="rotate(${a})"><path d="M0 ${-len} L${wd} 0 L0 0Z" class="${main?'r-main':'r-sub'}"/><path d="M0 ${-len} L${-wd} 0 L0 0Z" class="${main?'r-main2':'r-sub2'}"/></g>`; });
  if(labels) dirs.forEach(([d,a])=>{ const r = d.length===1?122:100, rad=(a-90)*Math.PI/180; s += `<text x="${r*Math.cos(rad)}" y="${r*Math.sin(rad)}" class="r-lbl ${d.length===1?'main':''}">${d}</text>`; });
  return s + `<circle r="6" class="r-mid"/></svg>`;
}

// ================= Üben =================
function renderPracticeList(ch, c){
  const p = chP(ch.id);
  const list = el("div", { class:"exlist" });
  ch.practice.forEach((ex, i) => {
    const done = p.ex[ex.id];
    const b = el("button", { class:"exitem" + (done?" done":""), onclick:()=>openExercise(ch, ex, c) },
      `<span class="exn">${done?"✓":i+1}</span><span class="ext"><b>${ex.title}</b><small>${exKind(ex)}</small></span><span class="go">›</span>`);
    list.appendChild(b);
  });
  c.appendChild(list);
}
function exKind(ex){ return ({ quiz:"Fragen – viele offene Antworten", sort:"Zuordnen", order:"Reihenfolge", compass:"Kompassrose", grid:"Gitter-Übung", maptap:"Karte antippen", maplabel:"Karte beschriften (schreiben)", write:"Schreibaufgabe" })[ex.type] || ""; }

function exShell(ch, ex, c){
  c.innerHTML = "";
  const top = el("div", { class:"exhead" }, `<button class="back2">← Alle Übungen</button><h2>${ex.title}</h2>`);
  top.querySelector("button").onclick = () => renderPracticeList(ch, (c.innerHTML="", c));
  c.appendChild(top);
  const body = el("div", { class:"exbody" }); c.appendChild(body);
  return body;
}
function finishBox(body, ch, ex, msg){
  markEx(ch.id, ex.id);
  const f = el("div", { class:"finish" }, `<div class="big">🎉</div><b>${msg||"Übung geschafft!"}</b>`);
  const again = el("button", { class:"btn ghost", onclick:()=>openExercise(ch, ex, $("#tabc")) }, "Nochmal");
  const back = el("button", { class:"btn", onclick:()=>renderPracticeList(ch, ($("#tabc").innerHTML="", $("#tabc"))) }, "Zur nächsten Übung");
  const row = el("div", { class:"row" }); row.append(again, back); f.appendChild(row);
  body.appendChild(f); f.scrollIntoView({ behavior:"smooth", block:"center" });
}

function openExercise(ch, ex, c){
  const body = exShell(ch, ex, c);
  ({ quiz:exQuiz, sort:exSort, order:exOrder, compass:exCompass, grid:exGrid, maptap:exMapTap, maplabel:exMapLabel, write:exWrite })[ex.type](ch, ex, body);
}

// ---------- Fragen (offen + Auswahl) ----------
function questionWidget(q, onDone){
  const w = el("div", { class:"q" });
  w.appendChild(el("div", { class:"qtext" }, esc(q.q)));
  if(q.t === "mc"){
    const opts = shuffle(q.opts.map((o,i)=>({o,i})));
    const box = el("div", { class:"opts" });
    opts.forEach(({o,i}) => {
      const b = el("button", { class:"opt" }, esc(o));
      b.onclick = () => {
        if(w.dataset.done) return; w.dataset.done = "1";
        const ok = i === q.a;
        b.classList.add(ok ? "ok" : "bad");
        if(!ok) box.querySelectorAll(".opt")[opts.findIndex(x=>x.i===q.a)].classList.add("ok");
        w.appendChild(el("div", { class:"fb " + (ok?"ok":"bad") }, ok ? "Richtig! 👍" : "Nicht ganz – die richtige Antwort ist grün markiert."));
        onDone(ok);
      };
      box.appendChild(b);
    });
    w.appendChild(box);
  } else {
    const ta = el("textarea", { rows:"2", placeholder:"Deine Antwort …", class:"ans" });
    const btn = el("button", { class:"btn small" }, "Antwort prüfen");
    w.append(ta, btn);
    btn.onclick = () => {
      if(w.dataset.done) return;
      if(!ta.value.trim()){ ta.focus(); ta.classList.add("shake"); setTimeout(()=>ta.classList.remove("shake"), 400); return; }
      w.dataset.done = "1"; ta.readOnly = true; btn.remove();
      if(checkOpen(q, ta.value)){
        w.appendChild(el("div", { class:"fb ok" }, `Richtig! 👍<div class="muster"><small>Musterlösung:</small> ${esc(q.muster)}</div>`));
        onDone(true);
      } else {
        const fb = el("div", { class:"fb maybe" }, `<div class="muster"><small>Vergleiche mit der Musterlösung:</small> ${esc(q.muster)}</div><div class="self">Hast du das Gleiche gemeint?</div>`);
        const row = el("div", { class:"row" });
        const yes = el("button", { class:"btn small ghost" }, "✅ Ja, stimmt");
        const no = el("button", { class:"btn small ghost" }, "❌ Nein, noch nicht");
        yes.onclick = () => { row.remove(); fb.className = "fb ok"; fb.insertAdjacentHTML("afterbegin","Gut gemacht! 👍"); onDone(true); };
        no.onclick = () => { row.remove(); fb.className = "fb bad"; fb.insertAdjacentHTML("afterbegin","Merk dir die Musterlösung. 💪"); onDone(false); };
        row.append(yes, no); fb.appendChild(row); w.appendChild(fb);
      }
    };
  }
  return w;
}
function berlinQuestions(){
  return shuffle(BERLIN_DIRS).slice(0, 8).map(([city, d]) => ({ t:"open", q:`In welcher Himmelsrichtung liegt ${city} von Berlin aus?`, keys:[[ "="+d, "="+norm(DIR_NAMES[d]), "="+norm(DIR_NAMES[d]).replace(/en$/,"") ]], muster:`${DIR_NAMES[d]} (${d.toUpperCase()})` }));
}
function exQuiz(ch, ex, body){
  const qs = ex.questions === "BERLIN" ? berlinQuestions() : shuffle(ex.questions);
  if(ex.note) body.appendChild(el("p", { class:"note" }, ex.note));
  if(ex.questions === "BERLIN") body.appendChild(el("div", { class:"rose-small" }, roseSvg(true)));
  let i = 0, right = 0;
  const holder = el("div"); body.appendChild(holder);
  const prog = el("div", { class:"prog" }); body.insertBefore(prog, holder);
  const next = () => {
    prog.textContent = `Frage ${Math.min(i+1, qs.length)} von ${qs.length}`;
    if(i >= qs.length){ finishBox(body, ch, ex, `${right} von ${qs.length} richtig!`); return; }
    const w = questionWidget(qs[i], ok => {
      if(ok) right++;
      const b = el("button", { class:"btn" }, i+1 < qs.length ? "Nächste Frage →" : "Fertig");
      b.onclick = () => { b.remove(); i++; next(); };
      w.appendChild(b);
    });
    holder.appendChild(w); w.scrollIntoView({ behavior:"smooth", block:"start" });
    const t = w.querySelector("textarea"); if(t) setTimeout(()=>t.focus({preventScroll:true}), 300);
  };
  next();
}

// ---------- Zuordnen ----------
function exSort(ch, ex, body){
  body.appendChild(el("p", { class:"note" }, ex.prompt));
  const pool = el("div", { class:"chips" });
  const cats = el("div", { class:"cats n" + ex.cats.length });
  let sel = null, left = ex.items.length, errors = 0;
  const catEls = {};
  ex.cats.forEach(([k, label]) => {
    const ce = el("div", { class:"cat" }, `<div class="cath">${label}</div><div class="catb"></div>`);
    ce.onclick = () => {
      if(!sel) { ce.classList.add("nudge"); setTimeout(()=>ce.classList.remove("nudge"),300); return; }
      if(sel.dataset.cat === k){
        sel.classList.remove("sel"); sel.classList.add("placed"); ce.querySelector(".catb").appendChild(sel); sel.onclick = null; sel = null; left--;
        if(left === 0) finishBox(body, ch, ex, errors===0 ? "Alles richtig zugeordnet – ohne Fehler!" : `Geschafft! (${errors} Fehlversuch${errors===1?"":"e"})`);
      } else { errors++; sel.classList.add("wrong"); const s = sel; setTimeout(()=>s.classList.remove("wrong"), 500); }
    };
    catEls[k] = ce; cats.appendChild(ce);
  });
  shuffle(ex.items).forEach(([t, k]) => {
    const chip = el("button", { class:"chip" }, esc(t)); chip.dataset.cat = k;
    chip.onclick = () => { if(sel) sel.classList.remove("sel"); sel = chip === sel ? null : chip; if(sel) sel.classList.add("sel"); };
    pool.appendChild(chip);
  });
  body.append(pool, cats);
}

// ---------- Reihenfolge ----------
function exOrder(ch, ex, body){
  body.appendChild(el("p", { class:"note" }, ex.prompt));
  const pool = el("div", { class:"chips" });
  const list = el("ol", { class:"olist" });
  let n = 0, errors = 0;
  shuffle(ex.items).forEach(t => {
    const chip = el("button", { class:"chip" }, esc(t));
    chip.onclick = () => {
      if(t === ex.items[n]){ chip.remove(); list.appendChild(el("li", {}, esc(t))); n++;
        if(n === ex.items.length) finishBox(body, ch, ex, errors===0 ? "Perfekte Reihenfolge!" : `Geschafft! (${errors} Fehlversuch${errors===1?"":"e"})`); }
      else { errors++; chip.classList.add("wrong"); setTimeout(()=>chip.classList.remove("wrong"), 500); }
    };
    pool.appendChild(chip);
  });
  body.append(pool, list);
}

// ---------- Kompassrose ----------
function exCompass(ch, ex, body){
  body.appendChild(el("p", { class:"note" }, "Tippe unten eine Himmelsrichtung an und dann das passende Feld an der Kompassrose. Tipp: <b>N</b>ie <b>O</b>hne <b>S</b>eife <b>W</b>aschen!"));
  const dirs = [["N",0],["NO",45],["O",90],["SO",135],["S",180],["SW",225],["W",270],["NW",315]];
  const wrap = el("div", { class:"rose-ex" }, roseSvg(false));
  const svg = wrap.querySelector("svg");
  let sel = null, left = 8;
  dirs.forEach(([d,a]) => {
    const r = d.length===1 ? 122 : 104, rad = (a-90)*Math.PI/180;
    const g = document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttribute("class","slot"); g.setAttribute("transform",`translate(${r*Math.cos(rad)},${r*Math.sin(rad)})`);
    g.innerHTML = `<circle r="21"/><text dy="0.35em">?</text>`;
    g.addEventListener("click", () => {
      if(!sel || g.dataset.done) return;
      if(sel.dataset.d === d){ g.dataset.done = "1"; g.classList.add("filled"); g.querySelector("text").textContent = d; sel.remove(); sel = null; left--; if(left===0) finishBox(body, ch, ex, "Kompassrose komplett!"); }
      else { g.classList.add("wrong"); setTimeout(()=>g.classList.remove("wrong"), 500); }
    });
    svg.appendChild(g);
  });
  const chips = el("div", { class:"chips center" });
  shuffle(dirs).forEach(([d]) => { const c = el("button", { class:"chip big" }, d); c.dataset.d = d; c.onclick = () => { if(sel) sel.classList.remove("sel"); sel = c; c.classList.add("sel"); }; chips.appendChild(c); });
  body.append(wrap, chips);
}

// ---------- Gitter-Wanderung ----------
const GDIR = { n:[0,-1], no:[1,-1], o:[1,0], so:[1,1], s:[0,1], sw:[-1,1], w:[-1,0], nw:[-1,-1] };
function exGrid(ch, ex, body){
  const N = 8;
  const fixed = { start:[0,0], steps:[["o",3],["s",6],["w",1],["n",2],["so",3],["o",1]] };
  function randomWalk(){
    for(let tries=0; tries<200; tries++){
      let x = Math.floor(Math.random()*N), y = Math.floor(Math.random()*N); const start=[x,y]; const steps=[];
      const keys = Object.keys(GDIR);
      for(let k=0;k<6;k++){
        const opts = [];
        keys.forEach(d => { for(let len=1; len<=4; len++){ const nx=x+GDIR[d][0]*len, ny=y+GDIR[d][1]*len; if(nx>=0&&ny>=0&&nx<N&&ny<N) opts.push([d,len]); } });
        const pick = opts[Math.floor(Math.random()*opts.length)]; steps.push(pick); x += GDIR[pick[0]][0]*pick[1]; y += GDIR[pick[0]][1]*pick[1];
      }
      if(steps.some(s=>s[0].length===2)) return { start, steps };
    }
    return fixed;
  }
  let round = 0;
  function play(walk){
    body.querySelectorAll(".gridwrap,.note,.steps,.finish,.row.g").forEach(e=>e.remove());
    body.appendChild(el("p", { class:"note" }, round===0 ? "Wie auf dem Arbeitsblatt: Starte beim markierten Kästchen ✖ und tippe für jeden Schritt das Kästchen an, auf dem du landest. Oben ist Norden." : "Neue Wanderung! Oben ist Norden."));
    const steps = el("ol", { class:"steps" });
    walk.steps.forEach(([d,len]) => steps.appendChild(el("li", {}, `Gehe ${len} Kästchen nach <b>${DIR_NAMES[d]}</b>.`)));
    const gw = el("div", { class:"gridwrap" }, `<div class="gN">N ↑</div>`);
    const grid = el("div", { class:"grid8" }); gw.appendChild(grid);
    const cells = [];
    for(let y=0;y<N;y++) for(let x=0;x<N;x++){ const c = el("button", { class:"cell", "aria-label":`Kästchen ${x+1},${y+1}` }); c.dataset.x=x; c.dataset.y=y; grid.appendChild(c); cells.push(c); }
    const cell = (x,y) => cells[y*N+x];
    let [cx, cy] = walk.start; cell(cx,cy).classList.add("start"); cell(cx,cy).textContent = "✖";
    let k = 0;
    const lis = steps.querySelectorAll("li"); lis[0].classList.add("now");
    grid.onclick = e => {
      const c = e.target.closest(".cell"); if(!c || k >= walk.steps.length) return;
      const [d,len] = walk.steps[k]; const tx = cx + GDIR[d][0]*len, ty = cy + GDIR[d][1]*len;
      if(+c.dataset.x === tx && +c.dataset.y === ty){
        c.classList.add("hit"); c.textContent = "✖"; cx = tx; cy = ty; lis[k].classList.remove("now"); lis[k].classList.add("ok"); k++;
        if(k < walk.steps.length) lis[k].classList.add("now");
        else { round++; markEx(ch.id, ex.id);
          const f = el("div", { class:"finish" }, `<div class="big">🎉</div><b>Ziel erreicht!</b>`);
          const r = el("div", { class:"row g" }); const b = el("button", { class:"btn" }, "Neue Wanderung"); b.onclick = () => play(randomWalk()); r.appendChild(b); f.appendChild(r); body.appendChild(f); }
      } else { c.classList.add("wrong"); setTimeout(()=>c.classList.remove("wrong"), 500); }
    };
    body.append(steps, gw);
  }
  play(fixed);
}

// ---------- Karte antippen ----------
function exMapTap(ch, ex, body){
  const isCont = ex.mode === "cont";
  const targets = isCont ? shuffle(Object.keys(CONT_NAMES)) : shuffle(["pazifik","atlantik","indik","pazifik","atlantik","indik"]);
  const views = ex.view === "mixed" ? (isCont ? ["southUp","polar","globeTilt","sideways","globePac"] : ["southUp","sideways","oceanSouth"]) : ["normal"];
  body.appendChild(el("p", { class:"note" }, ex.view==="mixed" ? "Achtung: Die Karte wird bei jeder Frage anders gedreht!" : "Tippe auf der Karte die gesuchte Stelle an."));
  const ask = el("div", { class:"ask" }); const mapHost = el("div", { class:"map tap" }); const fb = el("div", { class:"fb hidden" });
  body.append(ask, mapHost, fb);
  let i = 0, errors = 0, m = null, lastView = null;
  function round(){
    if(i >= targets.length){ fb.classList.add("hidden"); finishBox(body, ch, ex, errors===0 ? "Alles beim ersten Versuch gefunden!" : `Alle gefunden! (${errors} Fehlversuch${errors===1?"":"e"})`); return; }
    const t = targets[i];
    const centers = { NA:[-100,45], SA:[-60,-14], EU:[18,53], AS:[92,50], AF:[20,5], AU:[134,-25], AN:[30,-80] };
    const ok4 = vw => isCont ? visibleIn(vw, centers[t]) : !VIEWS[vw].globe;
    let cand = views.filter(vw => ok4(vw) && vw !== lastView); if(!cand.length) cand = views.filter(ok4); if(!cand.length) cand = ["normal"];
    const view = cand[Math.floor(Math.random()*cand.length)]; lastView = view;
    m = drawMap(mapHost, view);
    ask.innerHTML = `Tippe auf: <b>${isCont ? CONT_NAMES[t] : OCEAN_NAMES[t]}</b> <span class="cnt">${i+1}/${targets.length}</span>`;
    m.svg.on("click", evt => {
      const hit = mapClickLL(m, evt); if(!hit) return;
      const w = whatIsAt(hit.ll);
      let ok = false, msg = "";
      if(isCont){
        if(w.kind==="cont" && w.id===t) ok = true;
        else msg = w.kind==="cont" ? `Das ist ${CONT_NAMES[w.id]}.` : w.kind==="lake" ? "Das ist ein Binnenmeer (Wasser)." : `Das ist Wasser (${OCEAN_NAMES[w.id]}).`;
      } else {
        if(w.kind==="ocean" && w.id===t) ok = true;
        else msg = w.kind==="cont" ? `Das ist Land (${CONT_NAMES[w.id]}).` : w.kind==="lake" ? (w.id==="kaspi"?"Das ist das Kaspische Meer – eigentlich ein See!":"Das ist das Schwarze Meer, ein Nebenmeer.") : (w.id==="arktis"||w.id==="sued") ? `Das ist das ${OCEAN_NAMES[w.id]} – nicht einer der drei großen Ozeane.` : `Das ist der ${OCEAN_NAMES[w.id]}.`;
      }
      m.layer.append("circle").attr("cx", hit.xy[0]).attr("cy", hit.xy[1]).attr("r", VIEWS[m.view].w/55).attr("class", ok ? "m-hit ok" : "m-hit bad");
      fb.classList.remove("hidden");
      if(ok){
        if(isCont) m.conts.filter(d=>d.id===t).classed("m-good", true);
        fb.className = "fb ok"; fb.textContent = "Richtig! 👍"; m.svg.on("click", null);
        setTimeout(()=>{ i++; round(); }, 1100);
      } else { errors++; fb.className = "fb bad"; fb.textContent = msg + " Versuch es nochmal."; }
    });
  }
  round();
}

// ---------- Karte beschriften (offen) ----------
function exMapLabel(ch, ex, body){
  const set = MAP_LABEL_SETS[ex.view];
  body.appendChild(el("p", { class:"note" }, set.intro));
  const mapHost = el("div", { class:"map" }); body.appendChild(mapHost);
  const m = drawMap(mapHost, ex.view);
  const items = set.items.filter(it => visibleIn(ex.view, it[1]));
  items.forEach((it, i) => addNumber(m, it[1], i+1));
  const form = el("div", { class:"lblform" });
  const inputs = items.map((it, i) => { const row = el("label", { class:"lblrow" }, `<span class="lnum">${i+1}</span>`); const inp = el("input", { type:"text", autocomplete:"off", autocapitalize:"words", placeholder:"…" }); row.appendChild(inp); form.appendChild(row); return inp; });
  const btn = el("button", { class:"btn" }, "Prüfen");
  const sol = el("button", { class:"btn ghost" }, "Lösung zeigen");
  const row = el("div", { class:"row" }); row.append(btn, sol);
  const fb = el("div", { class:"fb hidden" });
  body.append(form, row, fb);
  btn.onclick = () => {
    let right = 0;
    items.forEach((it, i) => { const ok = checkOpen({ keys:[it[2]] }, inputs[i].value); inputs[i].parentNode.classList.toggle("ok", ok); inputs[i].parentNode.classList.toggle("bad", !ok && inputs[i].value.trim()!==""); if(ok) right++; });
    fb.classList.remove("hidden");
    if(right === items.length){ fb.className = "fb ok"; fb.textContent = "Alles richtig – du hast dich zurechtgefunden! 🧭"; finishBox(body, ch, ex, "Karte komplett beschriftet!"); btn.remove(); sol.remove(); }
    else { fb.className = "fb maybe"; fb.textContent = `${right} von ${items.length} richtig. Die grünen stimmen schon – versuch die anderen nochmal. Tipp: Such zuerst einen Kontinent, den du sicher erkennst.`; }
  };
  sol.onclick = () => { items.forEach((it,i)=>{ const p = inputs[i].parentNode; if(!p.classList.contains("ok")){ p.classList.add("shown"); inputs[i].value = it[0]; inputs[i].readOnly = true; } }); fb.classList.remove("hidden"); fb.className="fb maybe"; fb.textContent = "Schau dir die Lösung genau an und probiere die Übung später noch einmal."; };
}

// ---------- Schreibaufgabe ----------
function exWrite(ch, ex, body){
  const p = chP(ch.id);
  body.appendChild(el("p", { class:"note" }, esc(ex.prompt)));
  if(ex.keywords) body.appendChild(el("div", { class:"kw" }, ex.keywords.map(k=>`<span>${esc(k)}</span>`).join("")));
  const ta = el("textarea", { rows:"8", class:"ans big", placeholder:"Schreibe hier deinen Text …" }); ta.value = p.notes[ex.id] || "";
  ta.oninput = () => { p.notes[ex.id] = ta.value; save(); };
  const btn = el("button", { class:"btn" }, "Fertig – Musterlösung zeigen");
  body.append(ta, btn);
  btn.onclick = () => {
    if(ta.value.trim().split(/\s+/).length < 8){ body.appendChild(el("div", { class:"fb bad" }, "Schreib noch ein bisschen mehr – mindestens zwei, drei Sätze. ✍️")); return; }
    btn.remove();
    const used = ex.keywords ? ex.keywords.filter(k => { const parts = norm(k).split(/[ ,]+/).filter(w=>w.length>=5); return parts.some(w => findAlt(norm(ta.value), w) >= 0); }).length : null;
    body.appendChild(el("div", { class:"fb maybe" }, `${used!==null?`Du hast <b>${used} von ${ex.keywords.length}</b> Stichwörtern verwendet.<br>`:""}<div class="muster"><small>So könnte ein Text aussehen:</small> ${esc(ex.muster)}</div><div class="self">Vergleiche: Fehlt in deinem Text etwas Wichtiges? Dann ergänze es. Dein Text bleibt gespeichert.</div>`));
    finishBox(body, ch, ex, "Schreibaufgabe erledigt!");
  };
}

// ================= Lernkarten =================
function renderCards(ch, c){
  let deck = shuffle(ch.cards.map((x,i)=>i)); let k = 0, known = 0;
  const wrap = el("div", { class:"fcwrap" });
  c.appendChild(el("p", { class:"note" }, "Lies den Begriff, überlege die Erklärung und tippe dann auf die Karte zum Umdrehen."));
  c.appendChild(wrap);
  function show(){
    wrap.innerHTML = "";
    if(k >= deck.length){
      wrap.appendChild(el("div", { class:"finish" }, `<div class="big">🃏</div><b>Runde fertig! ${known} von ${deck.length} gewusst.</b>`));
      const b = el("button", { class:"btn" }, "Neue Runde"); b.onclick = () => { deck = shuffle(deck); k = 0; known = 0; show(); }; wrap.querySelector(".finish").appendChild(b); return;
    }
    const [front, back] = ch.cards[deck[k]];
    wrap.appendChild(el("div", { class:"fcprog" }, `Karte ${k+1} von ${deck.length}`));
    const card = el("button", { class:"fc" }, `<div class="fc-in"><div class="fc-f"><span>${esc(front)}</span><small>antippen zum Umdrehen</small></div><div class="fc-b"><b>${esc(front)}</b><span>${esc(back)}</span></div></div>`);
    const row = el("div", { class:"row hidden" });
    const no = el("button", { class:"btn ghost" }, "🔁 Nochmal üben"); const yes = el("button", { class:"btn" }, "✅ Gewusst");
    no.onclick = () => { deck.push(deck[k]); k++; show(); };
    yes.onclick = () => { known++; k++; show(); };
    row.append(no, yes);
    card.onclick = () => { card.classList.toggle("flip"); row.classList.remove("hidden"); };
    wrap.append(card, row);
  }
  show();
}

// ================= Test =================
function renderTest(ch, c){
  const p = chP(ch.id);
  const intro = el("div", { class:"testintro" }, `<div class="big">🏆</div><h2>Abschlusstest: ${ch.title}</h2>
    <p>${ch.test.length} Fragen – mehr als die Hälfte davon beantwortest du mit eigenen Worten. Ab 5 richtigen Antworten gibt es Sterne.</p>
    <div class="stars big">${starsHtml(p.stars||0)}</div><p class="small">${p.stars?"Dein bisher bestes Ergebnis.":"Noch kein Ergebnis."}</p>`);
  const b = el("button", { class:"btn" }, "Test starten"); intro.appendChild(b); c.appendChild(intro);
  b.onclick = () => {
    c.innerHTML = "";
    const qs = shuffle(ch.test); let i = 0, right = 0;
    const prog = el("div", { class:"prog" }); const holder = el("div"); c.append(prog, holder);
    const next = () => {
      if(i >= qs.length){
        const n = qs.length; const stars = right >= n ? 3 : right >= n-2 ? 2 : right >= Math.ceil(n/2)+1 ? 1 : 0;
        if(stars > (p.stars||0)){ p.stars = stars; save(); }
        prog.textContent = "";
        const r = el("div", { class:"finish" }, `<div class="big">${stars===3?"🥇":stars===2?"🥈":stars===1?"🥉":"💪"}</div><b>${right} von ${n} richtig</b><div class="stars big">${starsHtml(stars)}</div><p>${stars===3?"Super! Du bist Expertin bzw. Experte für dieses Thema.":stars>0?"Gut gemacht! Mit den Lernkarten schaffst du noch mehr.":"Schau dir das Kapitel noch einmal an und versuche es dann erneut."}</p>`);
        const row = el("div", { class:"row" });
        const again = el("button", { class:"btn ghost" }, "Test wiederholen"); again.onclick = () => { c.innerHTML=""; renderTest(ch, c); };
        const home = el("a", { class:"btn", href:"#" }, "Zur Übersicht");
        row.append(again, home); r.appendChild(row); c.appendChild(r); r.scrollIntoView({ behavior:"smooth" });
        return;
      }
      prog.textContent = `Frage ${i+1} von ${qs.length}`;
      const w = questionWidget(qs[i], ok => {
        if(ok) right++;
        const nb = el("button", { class:"btn" }, i+1 < qs.length ? "Nächste Frage →" : "Ergebnis anzeigen");
        nb.onclick = () => { nb.remove(); i++; next(); };
        w.appendChild(nb);
      });
      holder.appendChild(w); w.scrollIntoView({ behavior:"smooth", block:"start" });
    };
    next();
  };
}

route();
})();
