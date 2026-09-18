/* SafTech · main.js — idioma, menú, filtros de trabajos, easter eggs (consola ~, Konami, CRT, Matrix) */
(function () {
  var S = window.SAF || {}, KEY = "saf-lang", CLI = S.cli || {};
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function langPath(l) { return (l === S.def ? "" : "/" + l) + "/"; }

  /* ---------- idioma: 1ª visita → idioma del navegador/dispositivo; si no lo tenemos, inglés ----------
     Si el visitante elige idioma a mano se respeta siempre. Los robots no se redirigen (para que Google indexe cada idioma). */
  var pref = get(KEY), bot = /bot|crawl|spider|slurp|lighthouse|facebookexternalhit|whatsapp|preview/i.test(navigator.userAgent);
  if (!pref && !bot && S.lang === S.def && !location.hash) {
    var nav = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""]).map(function (l) { return String(l).slice(0, 2).toLowerCase(); });
    var best = null;
    for (var i = 0; i < nav.length; i++) { if (S.langs.indexOf(nav[i]) > -1) { best = nav[i]; break; } }
    if (!best && nav[0] && S.langs.indexOf("en") > -1) best = "en";
    if (best && best !== S.def) { set(KEY, best); location.replace(langPath(best)); return; }
  }
  set(KEY, S.lang);
  document.querySelectorAll("[data-lang]").forEach(function (a) { a.addEventListener("click", function () { set(KEY, a.dataset.lang); }); });

  /* ---------- menú móvil / año ---------- */
  var b = document.querySelector(".burger"), m = document.getElementById("mobile-menu");
  if (b && m) {
    b.addEventListener("click", function () { var o = m.hidden; m.hidden = !o; b.setAttribute("aria-expanded", String(o)); });
    m.querySelectorAll("a[href^='#']").forEach(function (a) { a.addEventListener("click", function () { m.hidden = true; b.setAttribute("aria-expanded", "false"); }); });
  }
  var y = document.getElementById("y"); if (y) y.textContent = new Date().getFullYear();

  /* ---------- toast ---------- */
  var toastEl = document.getElementById("toast"), toastT;
  function toast(msg, ms) { if (!toastEl) return; toastEl.textContent = msg; toastEl.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { toastEl.hidden = true; }, ms || 3500); }

  /* ---------- estadísticas anónimas (Umami, sin cookies). Sin ANALYTICS_ID en build.py no hay script y esto no hace nada ---------- */
  function track(name, data) { try { if (window.umami) umami.track(name, data); } catch (e) {} }
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest && ev.target.closest("a,button"); if (!a) return;
    var card = a.closest(".wcard"), sec = a.closest("section,header,nav,footer"), where = sec ? (sec.id || sec.className.split(" ")[0]) : "";
    if (card && a.href) track("abrir-web", { web: card.querySelector("h3").textContent, tipo: card.dataset.online === "1" ? "online" : "demo" });
    else if (a.classList.contains("chip")) track("filtro", { categoria: a.dataset.filter });
    else if (a.id === "work-toggle") track("ver-todas");
    else if (a.dataset.lang) track("cambio-idioma", { a: a.dataset.lang });
    else if (/^mailto:/.test(a.getAttribute("href") || "")) track("contacto", { desde: where, pack: a.closest(".pack") ? a.closest(".pack").querySelector("h3").textContent : "" });
    else if (a.target === "_blank") track("enlace-externo", { url: a.href, desde: where });
    else if (a.classList.contains("btn")) track("boton", { texto: a.textContent.trim(), desde: where });
  });
  if ("IntersectionObserver" in window) {     // hasta dónde llega cada visita: un evento por sección, una sola vez
    var seen = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { track("seccion", { id: x.target.id }); seen.unobserve(x.target); } }); }, { rootMargin: "-45% 0px -45% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (el) { seen.observe(el); });
  }

  /* ---------- trabajos: filtros y «ver todas» ---------- */
  document.documentElement.classList.add("js");
  var grid = document.getElementById("work-grid"), toggle = document.getElementById("work-toggle");
  function showAll(on) {
    if (!grid || !toggle) return;
    grid.classList.toggle("all", on); toggle.textContent = on ? toggle.dataset.less : toggle.dataset.more; toggle.setAttribute("aria-expanded", String(on));
  }
  if (toggle) toggle.addEventListener("click", function () { var on = !grid.classList.contains("all"); showAll(on); if (!on) document.getElementById("projects").scrollIntoView(); });
  document.querySelectorAll(".chip").forEach(function (c) {
    c.addEventListener("click", function () {
      var f = c.dataset.filter;
      document.querySelectorAll(".chip").forEach(function (o) { o.classList.toggle("on", o === c); o.setAttribute("aria-pressed", String(o === c)); });
      grid.querySelectorAll(".wcard").forEach(function (w) { w.hidden = !(f === "all" || (f === "online" ? w.dataset.online === "1" : w.dataset.cat === f)); });
      showAll(f !== "all"); toggle.parentNode.hidden = f !== "all";      // una categoría se enseña entera
    });
  });

  /* ---------- aparición al hacer scroll ---------- */
  var rev = document.querySelectorAll(".head,.card,.wcard,.incl li,.steps li,.stats,.note");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    rev.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  /* ---------- librerías de los easter eggs: solo se descargan si alguien los usa ---------- */
  var CDN = "https://cdn.jsdelivr.net/npm/", loaded = {};
  function need(urls, cb) {
    var left = urls.length; if (!left) return cb();
    urls.forEach(function (u) {
      if (loaded[u]) { if (!--left) cb(); return; }
      var el;
      if (/\.css$/.test(u)) { el = document.createElement("link"); el.rel = "stylesheet"; el.href = CDN + u; }
      else { el = document.createElement("script"); el.src = CDN + u; }
      el.onload = el.onerror = function () { loaded[u] = 1; if (!--left) cb(); };
      document.head.appendChild(el);
    });
  }

  /* ---------- easter eggs: confeti, matrix, CRT ---------- */
  function party() { need(["canvas-confetti@1.9.3/dist/confetti.browser.min.js"], function () { if (window.confetti) { confetti({ particleCount: 160, spread: 80, origin: { y: 0.6 }, colors: ["#7c9dff", "#5eead4", "#c084fc"] }); } }); }
  var mx = document.getElementById("matrix"), mxTimer, mxRAF;
  function matrix(on) {
    if (!mx) return;
    if (!on) { mx.hidden = true; cancelAnimationFrame(mxRAF); clearTimeout(mxTimer); return; }
    mx.hidden = false; mx.width = innerWidth; mx.height = innerHeight;
    var ctx = mx.getContext("2d"), fs = 16, cols = Math.floor(mx.width / fs), drops = [], chars = "アイウエオカキクケコサシスセソ0123456789S4FSAFTECH<>/{}[]=+*#";
    for (var i = 0; i < cols; i++) drops[i] = Math.random() * -50;
    ctx.fillStyle = "#000"; ctx.fillRect(0, 0, mx.width, mx.height);
    (function draw() {
      ctx.fillStyle = "rgba(0,0,0,.06)"; ctx.fillRect(0, 0, mx.width, mx.height);
      ctx.font = fs + "px JetBrains Mono, monospace";
      for (var i = 0; i < cols; i++) {
        ctx.fillStyle = Math.random() > .97 ? "#e6edf3" : "#2ee6a6";
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, drops[i] * fs);
        if (drops[i] * fs > mx.height && Math.random() > .975) drops[i] = 0;
        drops[i]++;
      }
      mxRAF = requestAnimationFrame(draw);
    })();
    mxTimer = setTimeout(function () { matrix(false); }, 12000);
  }
  if (mx) mx.addEventListener("click", function () { matrix(false); });
  function crt() { var on = document.body.classList.toggle("crt"); set("saf-crt", on ? "1" : ""); return on; }
  if (get("saf-crt") === "1") document.body.classList.add("crt");

  /* Konami: ↑↑↓↓←→←→BA */
  var KON = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], kpos = 0;
  document.addEventListener("keydown", function (ev) {
    if (ev.keyCode === KON[kpos]) { kpos++; if (kpos === KON.length) { kpos = 0; party(); matrix(true); toast(CLI.konami || "Konami!"); } }
    else kpos = ev.keyCode === KON[0] ? 1 : 0;
  });

  /* ---------- intérprete de comandos (compartido por las dos terminales) ---------- */
  var secrets = ["sudo", "rm", "vim", "coffee", "konami", "date", "whoami", "exit", "hack"];
  function neofetch() {
    var repos = "120+", langs = S.langs.join(" ");
    return [
      "  \x1b[32m ____  _  _  _____ \x1b[0m   visitor@saftech",
      "  \x1b[32m/ ___|| || ||  ___|\x1b[0m   -----------------",
      "  \x1b[32m\\___ \\| || |_| |_  \x1b[0m   OS: SafTech OS 1.0 (GitHub Pages)",
      "  \x1b[32m ___) |__   _|  _| \x1b[0m   Kernel: HTML5 + CSS3 + Vanilla JS",
      "  \x1b[32m|____/   |_| |_|   \x1b[0m   Shell: xterm.js 5.3",
      "                        Repos: " + repos + " · Langs: " + langs,
      "                        Uptime: 24/7 · Trackers: 0 · Coffee: ∞",
      "                        Stack: Python Kotlin TypeScript C++ Raspberry Pi"
    ];
  }
  function run(line, term, isQuake) {
    var parts = line.trim().split(/\s+/), cmd = (parts[0] || "").toLowerCase(), arg = (parts[1] || "").toLowerCase(), out = [];
    var G = "\x1b[32m", Y = "\x1b[33m", R = "\x1b[0m", D = "\x1b[2m";
    if (!cmd) return [];
    switch (cmd) {
      case "help": case "?": out = (CLI.help || []).map(function (l) { return G + l.slice(0, 12) + R + l.slice(12); }); break;
      case "ls": case "dir": out = [Object.keys(S.sections).map(function (k) { return G + k + "/" + R; }).join("  ")]; break;
      case "cd": case "goto": case "open":
        if (S.sections[arg]) { location.hash = "#" + arg; out = [D + "→ " + S.sections[arg] + R]; if (isQuake) closeQuake(); }
        else out = [Y + (CLI.nosec || "?") + R]; break;
      case "cat":
        if (arg.indexOf("about") === 0) { var ps = document.querySelectorAll("#about .about-grid p"); out = Array.prototype.map.call(ps, function (p) { return p.textContent; }); }
        else out = [Y + (CLI.cat_bad || "?") + R]; break;
      case "neofetch": case "fetch": case "info": out = neofetch(); break;
      case "lang": if (S.langs.indexOf(arg) > -1) { out = [D + CLI.lang_ok + R]; set(KEY, arg); setTimeout(function () { location.href = langPath(arg); }, 300); } else out = [Y + CLI.lang_bad + R]; break;
      case "hire": case "contact": case "email": out = [G + CLI.hire + R]; party(); setTimeout(function () { location.href = "mailto:" + S.email; }, 800); break;
      case "crt": out = [G + (crt() ? CLI.crt_on : CLI.crt_off) + R]; break;
      case "matrix": case "neo": out = [G + CLI.matrix + R]; setTimeout(function () { matrix(true); }, 400); break;
      case "clear": case "cls": term.clear(); return [];
      case "whoami": out = [CLI.whoami]; break;
      case "sudo": out = [Y + CLI.sudo + R]; if (parts.slice(1).join(" ").indexOf("hire") > -1) { party(); } break;
      case "rm": out = [Y + CLI.rm + R]; document.body.style.transition = "opacity 1.2s"; document.body.style.opacity = ".05"; setTimeout(function () { document.body.style.opacity = "1"; }, 1600); break;
      case "vim": case "vi": case "nano": case "emacs": out = [CLI.vim]; break;
      case "coffee": case "cafe": case "café": out = [CLI.coffee]; break;
      case "date": out = [(CLI.date || "{date}").replace("{date}", new Date().toLocaleDateString(S.lang))]; break;
      case "konami": case "secret": case "hack": out = [G + CLI.secret + R]; party(); break;
      case "exit": case "quit": case "logout": out = [CLI.exit]; if (isQuake) setTimeout(closeQuake, 600); break;
      case "shortcuts": case "keys": out = [CLI.shortcuts]; break;
      case "echo": out = [parts.slice(1).join(" ")]; break;
      case "pwd": out = ["/home/visitor/saftech" + (location.pathname === "/" ? "" : location.pathname)]; break;
      case "uname": out = ["SafTech OS 1.0 x86_64 GNU/Web"]; break;
      case "ping": out = ["PONG from saftech: time=0.042 ms ☕"]; break;
      default: out = [Y + (CLI.notfound || "command not found: {cmd}").replace("{cmd}", cmd) + R];
    }
    return out;
  }

  /* ---------- terminal xterm.js ---------- */
  var PROMPT = "\x1b[32mvisitor@saftech\x1b[0m:\x1b[34m~\x1b[0m$ ";
  function makeTerm(el, opts) {
    if (!window.Terminal) return null;
    var term = new Terminal({ cursorBlink: true, convertEol: true, fontFamily: "JetBrains Mono, ui-monospace, Menlo, monospace", fontSize: 13, lineHeight: 1.3, scrollback: 400,
      theme: { background: opts.bg || "#111823", foreground: "#c9d4df", cursor: "#2ee6a6", cursorAccent: "#111823", selectionBackground: "rgba(46,230,166,.3)", green: "#2ee6a6", yellow: "#ffcc66", blue: "#7cc4ff", brightGreen: "#7cf5cc" } });
    var fit = window.FitAddon ? new FitAddon.FitAddon() : null;
    if (fit) term.loadAddon(fit);
    el.innerHTML = ""; term.open(el);
    function refit() { if (fit) { try { fit.fit(); } catch (e) {} } }
    refit(); window.addEventListener("resize", refit);
    var buf = "", hist = [], hp = 0;
    function prompt() { term.write("\r\n" + PROMPT); }
    function exec(line) {
      if (line.trim()) hist.push(line); hp = hist.length;
      var out = run(line, term, opts.quake);
      if (out.length) term.write("\r\n" + out.join("\r\n"));
      prompt();
    }
    term.onData(function (d) {
      var code = d.charCodeAt(0);
      if (d === "\r") { exec(buf); buf = ""; }
      else if (d === "\x7f") { if (buf.length) { buf = buf.slice(0, -1); term.write("\b \b"); } }
      else if (d === "\x03") { term.write("^C"); buf = ""; prompt(); }
      else if (d === "\x0c") { term.clear(); }
      else if (d === "\x1b[A" || d === "\x1b[B") { // historial
        if (!hist.length) return; hp = d === "\x1b[A" ? Math.max(0, hp - 1) : Math.min(hist.length, hp + 1);
        term.write("\r\x1b[K" + PROMPT); buf = hist[hp] || ""; term.write(buf);
      }
      else if (d === "\t") { var c = Object.keys(S.sections).filter(function (k) { return buf.indexOf("cd ") === 0 && k.indexOf(buf.slice(3)) === 0; }); if (c.length === 1) { term.write(c[0].slice(buf.length - 3)); buf = "cd " + c[0]; } }
      else if (code >= 32 && d.length === 1) { buf += d; term.write(d); }
      else if (d.length > 1 && code !== 27) { buf += d; term.write(d); } // pegar
    });
    term.attachCustomKeyEventHandler(function (ev) { if (ev.key === "`" || ev.key === "º" || ev.key === "~" || ev.key === "Escape") return false; return true; });
    return { term: term, prompt: prompt, refit: refit, boot: function () {
      var lines = (CLI.boot || []), i = 0;
      (function next() {
        if (i < lines.length) { var l = lines[i++]; term.writeln(l.replace("[ ok ]", "[ \x1b[32mok\x1b[0m ]")); setTimeout(next, 260); }
        else { term.write(PROMPT); }
      })();
    } };
  }
  var heroEl = document.getElementById("hero-term"), hero = null;
  if (heroEl) {
    hero = makeTerm(heroEl, {});
    if (hero) { hero.boot(); }
  }

  /* ---------- consola Quake (tecla ~ / ` / º / Esc) ---------- */
  var q = document.getElementById("quake"), qt = null;
  function openQuake() {
    if (!q) return;
    if (!window.Terminal) { need(["xterm@5.3.0/css/xterm.css", "xterm@5.3.0/lib/xterm.js", "xterm-addon-fit@0.8.0/lib/xterm-addon-fit.js"], function () { if (window.Terminal) openQuake(); }); return; }
    q.hidden = false; requestAnimationFrame(function () { q.classList.add("open"); });
    if (!qt) { qt = makeTerm(document.getElementById("quake-term"), { quake: true, bg: "#070b1a" }); if (qt) { qt.term.writeln("\x1b[2m// quake console · " + (CLI.shortcuts || "") + "\x1b[0m"); qt.term.write(PROMPT); } }
    if (qt) { setTimeout(function () { qt.refit(); qt.term.focus(); }, 260); }
  }
  function closeQuake() { if (!q) return; q.classList.remove("open"); setTimeout(function () { q.hidden = true; }, 260); }
  function toggleQuake() { (q && !q.hidden && q.classList.contains("open")) ? closeQuake() : openQuake(); }
  document.addEventListener("keydown", function (ev) {
    var tag = (ev.target && ev.target.tagName || "").toLowerCase();
    var inHero = heroEl && heroEl.contains(ev.target);
    if (ev.key === "`" || ev.key === "~" || ev.key === "º") { ev.preventDefault(); toggleQuake(); return; }
    if (ev.key === "Escape" && q && !q.hidden) { closeQuake(); return; }
    if (ev.key === "?" && tag !== "input" && tag !== "textarea" && !inHero && !(q && !q.hidden)) { toast(CLI.shortcuts || "?"); }
  });

  /* ---------- consola del navegador ---------- */
  window.hire = function () { location.href = "mailto:" + S.email; return "→ " + S.email; };
  window.saftech = { hire: window.hire, matrix: function () { matrix(true); }, party: party, crt: crt };
  try {
    console.log("%c S4F %c saftech ", "background:#2ee6a6;color:#04120c;font-weight:700;padding:4px 8px;border-radius:6px 0 0 6px;font-family:monospace", "background:#111823;color:#2ee6a6;padding:4px 8px;border-radius:0 6px 6px 0;font-family:monospace");
    console.log("%c" + (CLI.shortcuts || "") + "\n→ hire()  saftech.matrix()  saftech.party()  saftech.crt()", "color:#9aa7b5;font-family:monospace");
  } catch (e) {}
})();
