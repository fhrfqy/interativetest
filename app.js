(() => {
const app = document.getElementById("app");
const nav = document.getElementById("chapnav");
const bar = document.getElementById("progressbar");
const byId = Object.fromEntries(CHAPTERS.map(c => [c.id, c]));
// stable ids ("c2:7") so saved progress can find its questions again
const QID = {};
CHAPTERS.forEach(c => c.quiz.forEach((q, k) => { q.id = c.id + ":" + k; QID[q.id] = { q, from: c.num }; }));

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const KW = /\b(public|private|protected|class|extends|implements|new|void|int|double|boolean|String|if|else|return|import|static|try|catch|throw|this|true|false|final)\b/g;
function java(src) {
  // tokenise comments and strings first so keywords inside them stay plain
  return src.split(/(\/\/[^\n]*|"(?:[^"\\]|\\.)*")/g).map((part, i) => {
    if (i % 2 === 1) return part.startsWith("//") ? `<span class="c">${esc(part)}</span>` : `<span class="s">${esc(part)}</span>`;
    return esc(part).replace(KW, '<span class="k">$1</span>');
  }).join("");
}
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem("csc541:" + k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem("csc541:" + k, JSON.stringify(v)); } catch {} }
};
function setAccent(c) { document.documentElement.style.setProperty("--accent", c ? `var(${c.color})` : "var(--c1)"); }

/* ---------- nav ---------- */
function renderNav(active) {
  nav.innerHTML = CHAPTERS.map(c => `<button data-go="${c.id}/notes" class="${active === c.id ? "on" : ""}">Ch ${c.num.split(" ")[1]}</button>`).join("")
    + `<button data-go="mock" class="${active === "mock" ? "on" : ""}">Mock exam</button>`;
}
document.addEventListener("click", e => {
  const g = e.target.closest("[data-go]");
  if (g) { location.hash = "#/" + g.dataset.go; }
});

/* ---------- home ---------- */
function progressText(key) {
  const s = store.get("quiz:" + key);
  if (!s || !Array.isArray(s.items) || s.i >= s.items.length) return "";
  const answered = s.items.filter(x => x.done).length;
  return answered ? `In progress: ${answered} of ${s.items.length} answered` : "";
}
function home() {
  setAccent(null); renderNav(null);
  app.innerHTML = `
  <section class="hero">
    <h1>Read it. Then prove it.</h1>
    <p>Notes for the four CSC541 chapters, written to be easy to remember. Each chapter has a quiz with multiple choice, true/false, Java Swing code-ordering and written exam questions. Get one wrong and you'll see why. You can do the quiz first to test yourself, or read the notes first.</p>
  </section>
  <div class="grid">
    ${CHAPTERS.map(c => {
      const best = store.get("best:" + c.id);
      const prog = progressText(c.id);
      return `<article class="card" style="--cc:var(${c.color})">
        <span class="num">${c.num}</span>
        <h2>${c.title}</h2>
        <p>${c.blurb}</p>
        <span class="best">${c.quiz.filter(q => q.t !== "written").length} quiz questions · ${best != null ? "best " + best + "%" : "not tried yet"}</span>
        ${prog ? `<span class="best inprog">${prog}</span>` : ""}
        <div class="btns">
          <button class="btn" data-go="${c.id}/notes">Read notes</button>
          <button class="btn ghost" data-go="${c.id}/quiz">${prog ? "Continue questions" : "Questions"}</button>
        </div>
      </article>`;
    }).join("")}
  </div>
  <div class="mock">
    <div><h3>Mock exam: all chapters</h3><p>25 random questions from Chapters 1–4, Java questions included. Each answer comes with an explanation.</p>
      ${progressText("mock") ? `<span class="best inprog">${progressText("mock")}</span>` : ""}</div>
    <button class="btn" style="--cc:var(--c1)" data-go="mock">${progressText("mock") ? "Continue mock exam" : "Start mock exam"}</button>
  </div>`;
}

/* ---------- notes ---------- */
function notes(c) {
  setAccent(c); renderNav(c.id);
  app.innerHTML = `
  <div class="chead"><span class="num">${c.num}</span><h1>${c.title}</h1><p>${c.blurb}</p></div>
  <div class="tabs"><button class="btn" data-go="${c.id}/notes">Notes</button><button class="btn ghost" data-go="${c.id}/quiz">Questions →</button></div>
  <article class="notes">${c.notes}</article>
  <div class="endnote"><h3>You've reached the end of ${c.num}</h3><p>Now test yourself. Wrong answers come with an explanation.</p>
    <button class="btn" data-go="${c.id}/quiz">Start the ${c.num} questions</button></div>`;
  app.querySelectorAll("pre.code").forEach(p => { p.innerHTML = java(p.textContent); });
  initWidgets(app);
  window.scrollTo(0, 0);
}

function initWidgets(root) {
  root.querySelectorAll("[data-widget=flips] .flip").forEach(f => f.addEventListener("click", () => f.classList.toggle("open")));

  root.querySelectorAll(".stepper[data-widget]").forEach(w => {
    const kind = w.dataset.widget;
    const steps = JSON.parse(w.dataset.steps);
    let nodes;
    if (kind === "mvc") nodes = [["user", "User"], ["view", "View"], ["controller", "Controller"], ["model", "Model"]];
    else nodes = steps.map((s, i) => [String(i), s[0]]);
    const stage = kind === "stack" ? `style="flex-direction:column;align-items:stretch"` : "";
    w.innerHTML = `<div class="stage" ${stage}>${nodes.map(n => `<div class="node" data-n="${n[0]}">${n[1]}</div>`).join("")}</div>
      <div class="msg"></div>
      <div class="ctl"><button class="btn ghost" data-a="prev">← Back</button><button class="btn" data-a="next">Next →</button></div>`;
    let i = 0;
    const show = () => {
      const key = kind === "mvc" ? steps[i][0] : String(i);
      w.querySelectorAll(".node").forEach(n => n.classList.toggle("hot", n.dataset.n === key));
      w.querySelector(".msg").innerHTML = `<span style="color:var(--muted);font-size:13px">Step ${i + 1} of ${steps.length}</span><br>${steps[i][1]}`;
      w.querySelector("[data-a=prev]").disabled = i === 0;
      w.querySelector("[data-a=next]").textContent = i === steps.length - 1 ? "Restart ↺" : "Next →";
    };
    w.addEventListener("click", e => {
      const a = e.target.closest("[data-a]"); if (!a) return;
      if (a.dataset.a === "prev") i = Math.max(0, i - 1);
      else i = i === steps.length - 1 ? 0 : i + 1;
      show();
    });
    show();
  });

  root.querySelectorAll("[data-widget=ppi]").forEach(w => {
    const out = w.querySelector(".out");
    const calc = () => {
      const v = k => parseFloat(w.querySelector(`[data-f=${k}]`).value) || 0;
      const diag = Math.sqrt(v("w") ** 2 + v("h") ** 2);
      const ppi = v("d") ? diag / v("d") : 0;
      out.innerHTML = `√(${v("w")}² + ${v("h")}²) = <b>${diag.toFixed(0)}</b> px diagonal → ${diag.toFixed(0)} ÷ ${v("d")} = <b>${ppi.toFixed(0)} ppi</b>`;
    };
    w.addEventListener("input", calc); calc();
  });

  root.querySelectorAll("[data-widget=modetoy]").forEach(w => {
    let caps = false, shift = false, text = "";
    const scr = w.querySelector(".screen");
    const draw = () => {
      w.querySelector("[data-k=caps]").classList.toggle("on", caps);
      w.querySelector("[data-k=shift]").classList.toggle("on", shift);
      const mode = shift ? "Quasi-mode: Shift held" : caps ? "Temporal mode: Caps Lock ON" : "Normal mode";
      scr.innerHTML = `<span style="color:var(--muted)">[${mode}]</span> ${esc(text) || "…type a, b, c"}`;
    };
    w.addEventListener("click", e => {
      const k = e.target.closest("[data-k]"); if (!k) return;
      const key = k.dataset.k;
      if (key === "caps") caps = !caps;
      else if (key === "clr") text = "";
      else if (key !== "shift") text += (caps !== shift) ? key.toUpperCase() : key;
      draw();
    });
    const sh = w.querySelector("[data-k=shift]");
    const down = e => { e.preventDefault(); shift = true; draw(); };
    const up = () => { if (shift) { shift = false; draw(); } };
    sh.addEventListener("pointerdown", down);
    sh.addEventListener("pointerup", up); sh.addEventListener("pointerleave", up);
    // a/b/c pressed while shift is held arrive via keyboard too
    w.addEventListener("keydown", e => { if (e.key === "Shift") { shift = true; draw(); } });
    w.addEventListener("keyup", e => { if (e.key === "Shift") { shift = false; draw(); } });
    draw();
  });
}

/* ---------- quiz ---------- */
let Q = null; // current quiz session

function startQuiz(title, list, key, c, filter = "all") {
  const pool = list.filter(q => filter === "all" ? true
    : filter === "java" ? q.java
    : filter === "theory" ? !q.java && q.t !== "written"
    : filter === "written" ? q.t === "written" : true);
  Q = { title, all: list, key, c, filter, items: pool.map(prep), i: 0 };
  renderQuiz();
}

/* ---------- saved progress ---------- */
const SAVE_FIELDS = ["done", "correct", "pick", "order", "pool", "built", "draft"];
function saveProgress() {
  if (!Q || !Q.items.length) return;
  store.set("quiz:" + Q.key, {
    filter: Q.filter, i: Q.i, retry: !!Q.retry,
    all: Q.key === "mock" ? Q.all.map(q => q.id) : null,
    items: Q.items.map(it => {
      const s = { id: it.q.id };
      SAVE_FIELDS.forEach(f => { if (it[f] !== undefined) s[f] = it[f]; });
      return s;
    })
  });
}
function clearProgress(key) { store.set("quiz:" + key, null); }
function withFrom(id) { const e = QID[id]; return e && { ...e.q, from: e.from }; }
// returns true if a saved, unfinished session was restored
function resumeQuiz(title, key, c) {
  const s = store.get("quiz:" + key);
  if (!s || !Array.isArray(s.items) || s.i >= s.items.length) return false;
  if (!s.items.every(x => QID[x.id])) { clearProgress(key); return false; }  // questions changed since save
  const get = id => key === "mock" ? withFrom(id) : QID[id].q;
  const items = s.items.map(x => { const it = prep(get(x.id)); SAVE_FIELDS.forEach(f => { if (x[f] !== undefined) it[f] = x[f]; }); return it; });
  const all = key === "mock" ? (s.all || []).filter(id => QID[id]).map(get) : c.quiz;
  Q = { title, all, key, c, filter: s.filter || "all", items, i: s.i, retry: s.retry, resumed: true };
  renderQuiz();
  return true;
}
function prep(q) {
  const item = { q, done: false, correct: null };
  if (q.t === "mcq") item.order = shuffle(q.o.map((_, i) => i));
  if (q.t === "order") {
    item.lines = q.lines.map((l, i) => Array.isArray(l) ? { t: l[0], r: l[1] } : { t: l, r: i });
    do { item.pool = shuffle(item.lines.map((_, i) => i)); } while (item.lines.length > 2 && item.pool.every((v, i) => v === i));
    item.built = [];
  }
  return item;
}

function quizPage(c) {
  setAccent(c); renderNav(c.id);
  if (!resumeQuiz(c.num + " questions", c.id, c)) startQuiz(c.num + " questions", c.quiz, c.id, c);
}
function mockPage(fresh) {
  setAccent(null); renderNav("mock");
  if (!fresh && resumeQuiz("Mock exam", "mock", null)) return;
  const all = CHAPTERS.flatMap(c => c.quiz.filter(q => q.t !== "written").map(q => ({ ...q, from: c.num })));
  startQuiz("Mock exam", shuffle(all).slice(0, 25), "mock", null);
}

function renderQuiz() {
  const { items, i, c } = Q;
  bar.style.width = "0";
  if (i < items.length) saveProgress();
  if (!items.length) { app.innerHTML = header() + `<p>No questions match this filter.</p>`; return; }
  if (i >= items.length) return renderResult();
  const it = items[i], q = it.q;
  const kindLabel = { mcq: "Multiple choice", tf: "True / False", order: "Code / sequence order", written: "Written (exam style)" }[q.t] + (q.java ? " · Java GUI" : "") + (q.from ? " · " + q.from : "");
  let body = "";
  if (q.code) body += `<pre class="code">${java(q.code)}</pre>`;
  if (q.t === "mcq") {
    body += `<div class="opts">${it.order.map((oi, k) => {
      let cls = "";
      if (it.done) { if (oi === q.a) cls = "right"; else if (oi === it.pick) cls = "wrong"; }
      const txt = /[(){};=]/.test(q.o[oi]) && q.java ? `<code>${esc(q.o[oi])}</code>` : esc(q.o[oi]);
      return `<button class="opt ${cls}" data-pick="${oi}" ${it.done ? "disabled" : ""}><span class="l">${"ABCD"[k]}</span><span>${txt}</span></button>`;
    }).join("")}</div>`;
  }
  if (q.t === "tf") {
    body += `<div class="opts">${[true, false].map(v => {
      let cls = "";
      if (it.done) { if (v === q.a) cls = "right"; else if (v === it.pick) cls = "wrong"; }
      return `<button class="opt ${cls}" data-tf="${v}" ${it.done ? "disabled" : ""}><span class="l">${v ? "T" : "F"}</span><span>${v ? "True" : "False"}</span></button>`;
    }).join("")}</div>`;
  }
  if (q.t === "order") {
    const sorted = it.lines.map(l => l.r).sort((a, b) => a - b);
    body += `<div class="built">${it.built.map((li, k) => {
      const cls = it.done ? (it.lines[li].r === sorted[k] ? "right" : "wrong") : "";
      return `<button class="line ${cls}" data-un="${k}" ${it.done ? "disabled" : ""}><span class="n">${k + 1}</span>${esc(it.lines[li].t)}</button>`;
    }).join("")}</div>`;
    if (!it.done) {
      body += `<div class="pool">${it.pool.map(li => `<button class="line" data-add="${li}">${esc(it.lines[li].t)}</button>`).join("")}</div>
      <div class="qnav"><button class="btn ghost" data-act="reset">Reset</button><button class="btn" data-act="check" ${it.pool.length ? "disabled" : ""}>Check order</button></div>`;
    }
  }
  if (q.t === "written") {
    body += `<textarea class="written" placeholder="Write your answer like you would in the exam, then reveal the model answer.">${esc(it.draft || "")}</textarea>`;
    if (!it.done) body += `<div class="qnav"><span></span><button class="btn" data-act="reveal">Reveal model answer</button></div>`;
    else body += `<div class="model"><b>Points the examiner looks for:</b><ul>${q.pts.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>`;
  }
  if (it.done && q.t !== "written") {
    let extra = "";
    if (q.t === "order" && !it.correct) {
      extra = `<div class="solution"><b>Correct order:</b><pre class="code">${java(it.lines.map(l => l.t).join("\n"))}</pre></div>`;
    }
    body += `<div class="verdict ${it.correct ? "ok" : "no"}"><h3>${it.correct ? "Correct ✓" : "Not quite ✗"}</h3>${extra}<p><b>${it.correct ? "Why:" : "Here's why:"}</b> ${esc(q.why)}</p></div>`;
  }
  const canNext = it.done;
  app.innerHTML = header() + `
  <div class="qbar"><div style="width:${(i / items.length) * 100}%"></div></div>
  <div class="qcard">
    <span class="kind">${kindLabel}</span>
    <h2>${esc(q.q)}</h2>
    ${body}
  </div>
  <div class="qnav">
    <button class="btn ghost" data-act="prev" ${i === 0 ? "disabled" : ""}>← Previous</button>
    <button class="btn" data-act="next" ${canNext ? "" : "disabled"}>${i === items.length - 1 ? "See results" : "Next question →"}</button>
  </div>`;
}

function header() {
  const { c, items, i, filter } = Q;
  const score = items.filter(x => x.correct).length, answered = items.filter(x => x.done && x.q.t !== "written").length;
  const chips = c ? `<div class="filters">${[["all", "All"], ["theory", "Theory"], ["java", "Java GUI"], ["written", "Written"]].map(([k, l]) =>
    `<button class="chip ${filter === k ? "on" : ""}" data-filter="${k}">${l}</button>`).join("")}</div>` : "";
  const top = c
    ? `<div class="chead"><span class="num">${c.num}</span><h1>${c.title}</h1></div>
       <div class="tabs"><button class="btn ghost" data-go="${c.id}/notes">← Notes</button><button class="btn" data-go="${c.id}/quiz">Questions</button></div>`
    : `<div class="chead"><span class="num">All chapters</span><h1>Mock exam</h1><p>25 random questions. Explanations appear after each answer.</p></div>`;
  const resumed = Q.resumed && i < items.length
    ? `<div class="resume"><span>Picked up where you left off. Your progress is saved automatically.</span><button class="chip" data-act="restart">Start over</button></div>` : "";
  return top + resumed + `<div class="qtop">${chips}<span class="meta">Question ${Math.min(i + 1, items.length)} / ${items.length} · score ${score}/${answered}</span></div>`;
}

function finish(it, ok) { it.done = true; it.correct = ok; renderQuiz(); }

app.addEventListener("click", e => {
  if (!Q || !document.querySelector(".qcard, .result")) return;
  const it = Q.items[Q.i];
  const t = e.target.closest("button"); if (!t) return;
  if (t.dataset.filter) { startQuiz(Q.title, Q.all, Q.key, Q.c, t.dataset.filter); return; }
  if (t.dataset.pick != null) { it.pick = +t.dataset.pick; finish(it, it.pick === it.q.a); return; }
  if (t.dataset.tf != null) { it.pick = t.dataset.tf === "true"; finish(it, it.pick === it.q.a); return; }
  if (t.dataset.add != null) { const li = +t.dataset.add; it.pool = it.pool.filter(x => x !== li); it.built.push(li); renderQuiz(); return; }
  if (t.dataset.un != null) { const [li] = it.built.splice(+t.dataset.un, 1); it.pool.push(li); renderQuiz(); return; }
  const act = t.dataset.act;
  if (act === "reset") { it.pool = it.pool.concat(it.built); it.built = []; renderQuiz(); }
  if (act === "check") {
    const sorted = it.lines.map(l => l.r).sort((a, b) => a - b);
    finish(it, it.built.every((li, k) => it.lines[li].r === sorted[k]));
  }
  if (act === "reveal") { it.draft = app.querySelector("textarea.written").value; it.done = true; renderQuiz(); }
  if (act === "next") { Q.i++; renderQuiz(); window.scrollTo(0, 0); }
  if (act === "prev") { Q.i = Math.max(0, Q.i - 1); renderQuiz(); }
  if (act === "retry") { startQuiz(Q.title, Q.all, Q.key, Q.c, Q.filter); }
  if (act === "restart") {
    if (!confirm("Start over? Your answers in this quiz will be cleared.")) return;
    clearProgress(Q.key);
    if (Q.key === "mock") mockPage(true); else startQuiz(Q.title, Q.c.quiz, Q.key, Q.c, Q.filter);
  }
  if (act === "retrywrong") {
    const wrong = Q.items.filter(x => x.q.t !== "written" && !x.correct).map(x => x.q);
    Q = { ...Q, items: shuffle(wrong).map(prep), i: 0, retry: true, resumed: false }; renderQuiz();
  }
  if (act === "newmock") mockPage(true);
});
app.addEventListener("input", e => {
  if (Q && e.target.matches("textarea.written")) { Q.items[Q.i].draft = e.target.value; saveProgress(); }
});

function renderResult() {
  const scored = Q.items.filter(x => x.q.t !== "written");
  const right = scored.filter(x => x.correct).length;
  const pct = scored.length ? Math.round(right / scored.length * 100) : 0;
  clearProgress(Q.key);   // finished, so next visit starts a fresh attempt
  // a retry of only the wrong ones isn't a full attempt, so it doesn't count as a best score
  if (scored.length && !Q.retry) { const prev = store.get("best:" + Q.key); if (prev == null || pct > prev) store.set("best:" + Q.key, pct); }
  const msg = pct >= 85 ? "Exam ready. Nice." : pct >= 65 ? "Solid, but tidy up the ones below." : "Re-read the notes, then try again.";
  const wrong = scored.filter(x => !x.correct);
  app.innerHTML = header() + `
  <div class="result">
    ${scored.length ? `<div class="big">${pct}%</div><p>${right} of ${scored.length} correct. ${msg}</p>` : `<p>You finished the written questions. Compare your answers with the model points.</p>`}
    <div class="btns">
      ${wrong.length ? `<button class="btn" data-act="retrywrong">Retry the ${wrong.length} I got wrong</button>` : ""}
      ${Q.c ? `<button class="btn ghost" data-act="retry">Restart quiz</button><button class="btn ghost" data-go="${Q.c.id}/notes">Back to notes</button>` : `<button class="btn ghost" data-act="newmock">New mock exam</button>`}
    </div>
    ${wrong.length ? `<div class="review"><h3>Review your mistakes</h3>${wrong.map(x => `<div class="ri"><p><b>✗</b> ${esc(x.q.q)}</p><p>${esc(x.q.why)}</p></div>`).join("")}</div>` : ""}
  </div>`;
}

/* ---------- router ---------- */
function route() {
  Q = null;
  const [a, b] = location.hash.replace(/^#\/?/, "").split("/");
  if (a === "mock") mockPage();
  else if (byId[a] && b === "quiz") quizPage(byId[a]);
  else if (byId[a]) notes(byId[a]);
  else home();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
window.addEventListener("scroll", () => {
  if (!document.querySelector(".notes")) { bar.style.width = "0"; return; }
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%";
});
route();
})();
