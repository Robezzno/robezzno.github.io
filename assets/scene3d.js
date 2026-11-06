// SafTech · "una visita a mi escritorio" (ver docs/PLAN-3D.md)
// Un canvas fijo detrás de la página. Las secciones HTML son capítulos y el scroll
// decide la cámara (sin scroll-jacking). Clics en objetos = scroll al capítulo.
// Escena hecha en Blender (blender/scene.py + bake.py) con la luz horneada.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const SAF = window.SAF || {};
const DATA = SAF.scene || { services: [], projects: [], steps: [], labels: {} };
const root = document.documentElement;

// ---------------------------------------------------------------- ¿3D o póster?
// Modos: "split" (escritorio: texto a la izquierda, escena a la derecha) y "stack" (móvil/vertical:
// escenario arriba en cada sección y el contenido entra encima con la escena oscurecida).
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = !!(navigator.connection && navigator.connection.saveData);
const lowMem = !!(navigator.deviceMemory && navigator.deviceMemory < 3);
const FORCE = /[?&]force3d\b/.test(location.search);   // pruebas: no degradar por fps
function webglOK() {
  try { return !!document.createElement("canvas").getContext("webgl2"); } catch (e) { return false; }
}
// La visita decide por ORIENTACIÓN (un móvil girado es horizontal); la página clásica, por tamaño.
const modeFor = () => (root.classList.contains("tour")
  ? (innerWidth / innerHeight > 1.1 ? "split" : "stack")
  : (innerWidth >= 1000 && innerWidth / innerHeight > 1.2 ? "split" : "stack"));
let mode = modeFor();
let closeTourPanel = null;   // lo define start(): cierra el panel y devuelve las secciones al sitio
function toPoster() {
  closeTourPanel && closeTourPanel();
  for (const id of ["tour-rail", "tour-next", "tilt-btn", "tour-panel"]) {
    const el = document.getElementById(id); if (el) el.hidden = true;
  }
  root.classList.remove("has-3d", "split", "stack", "scene-ready", "scene-dim", "tour", "tpanel-open");
  root.classList.add("scene-poster");   // póster fijo + página normal
}
if (reduced || saveData || lowMem || !webglOK()) {
  toPoster();
} else {
  root.classList.add("has-3d", mode);
  // visita: el rótulo inicial se ve ya, sin esperar a que cargue el 3D (red lenta = nunca pantalla vacía)
  start().catch((e) => { console.warn("[scene3d]", e); toPoster(); });
}

async function start() {
  const TOUR = root.classList.contains("tour");   // visita guiada (/3d/): sin scroll de página
  const canvas = document.getElementById("scene3d");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  const dprFor = () => Math.min(devicePixelRatio, mode === "split" ? 1.75 : 1.5);
  let dprCap = 9;   // lo baja el medidor de rendimiento
  renderer.setPixelRatio(dprFor());
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;   // la luz ya viene horneada con AgX

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#05060c");
  const camera = new THREE.PerspectiveCamera(40, 1, 0.02, 60);

  const gltf = await new GLTFLoader().loadAsync("/assets/scene/saftech.glb");
  scene.add(gltf.scene);

  // ---------------------------------------------------------------- materiales
  const glowBoost = 1.6;   // por encima del umbral del bloom
  let screen = null;
  gltf.scene.traverse((o) => {
    if (!o.isMesh) return;
    const n = o.name, m = o.material;
    if (n.startsWith("bake_") || n === "window_city") {
      o.material = new THREE.MeshBasicMaterial({ map: m.map, toneMapped: false });
    } else if (n.startsWith("glow_")) {
      const c = (m.emissive && m.emissive.getHex() ? m.emissive : m.color).clone().multiplyScalar(glowBoost);
      o.material = new THREE.MeshBasicMaterial({ color: c, toneMapped: false });
    } else if (n === "screen_main") {
      screen = o;
    }
  });

  // cámaras de Blender → estados (posición + orientación + fov)
  const STATES = {};
  gltf.scene.updateMatrixWorld(true);
  for (const c of gltf.cameras) {
    const p = new THREE.Vector3(), q = new THREE.Quaternion();
    c.getWorldPosition(p); c.getWorldQuaternion(q);
    STATES[c.name] = { p, q, fov: c.fov };
  }
  const anchor = (n) => { const o = gltf.scene.getObjectByName(n); const v = new THREE.Vector3(); if (o) o.getWorldPosition(v); return v; };
  for (const k in STATES) { const o = gltf.scene.getObjectByName("tgt_" + k); if (o) STATES[k].t = anchor("tgt_" + k); }

  // Encuadre por modo. En vertical se retrocede cada cámara por su propio eje hasta que el
  // ancho del sujeto (metros) cabe en pantalla: mismo plano que en escritorio, más abierto.
  const FOCUS = { cam_intro: 2.6, cam_services: 0.86, cam_projects: 1.55, cam_process: 0.46, cam_about: 0.64, cam_contact: 1.12 };
  const MOBILE_FOV = 56;
  const VIEW = {};
  // Visita: cada parada tiene una caja de sujeto (ancho × alto en metros). La cámara retrocede por su
  // eje hasta que la caja cabe en la zona libre de pantalla: derecha del rótulo (horizontal) o mitad
  // superior (vertical). Así encaja igual en un móvil, una tablet girada o una ultrapanorámica.
  const BOX = { cam_intro: [2.7, 1.9], cam_services: [0.8, 0.62], cam_projects: [1.7, 0.95], cam_process: [0.5, 0.48],
    cam_about: [0.72, 0.78], cam_contact: [1.2, 0.76] };
  const AIM = { cam_services: anchor("anchor_services") };
  // Zona libre REAL para el sujeto, según el espacio que deja el rótulo (se mide del CSS):
  //   horizontal: entre el borde derecho del rótulo y el raíl · vertical: entre la cabecera y el rótulo.
  const FREE = { x: 0, y: 0, fw: 0.56, fh: 0.62 };   // centro (desplazamiento en px) y fracción útil
  function measureFree() {
    const w = innerWidth, h = innerHeight, rail = document.getElementById("tour-rail");
    const H = hudBox();
    if (mode === "split") {
      const left = H.x + H.w + 24;
      const rr = rail && !rail.hidden ? rail.getBoundingClientRect() : null;   // sitio real del raíl
      const right = rr && rr.width ? rr.left - 16 : w - (h < 560 ? 44 : 84);
      FREE.fw = Math.max(0.3, (right - left) / w); FREE.x = (left + right) / 2 - w / 2;
      FREE.fh = h < 560 ? 0.72 : 0.62; FREE.y = h * 0.04;
    } else {
      const top = 76, bottom = H.y - 8;                               // entre la cabecera y los títulos
      const rr = rail && !rail.hidden ? rail.getBoundingClientRect() : null;
      const right = rr && rr.width ? rr.left - 10 : w - 36;          // sitio real del raíl
      FREE.fw = Math.min(0.94, (right - 14) / w); FREE.x = (14 + right) / 2 - w / 2;
      FREE.fh = Math.max(0.3, (bottom - top) / h); FREE.y = h / 2 - (top + bottom) / 2;
    }
  }
  const LAYOUT = { split: { vfov: 45 }, stack: { vfov: 56 } };
  function frameTour() {
    measureFree();
    // ultrapanorámica: se encaja como si fuera 1,9:1 (lo que sobra a los lados es contexto, no zoom)
    const L = { ...LAYOUT[mode], fw: FREE.fw, fh: FREE.fh }, aspect = Math.min(innerWidth / innerHeight, 1.9);
    const tv = Math.tan(THREE.MathUtils.degToRad(L.vfov / 2)), th = tv * aspect;
    for (const k in STATES) {
      const s = STATES[k], b = BOX[k];
      if (!s.t || !b) { VIEW[k] = s; continue; }
      const d = Math.max(b[0] / 2 / th / L.fw, b[1] / 2 / tv / L.fh);
      const t = AIM[k] || s.t;   // punto al que mira (servicios: centro real de la rejilla de paneles)
      const dir = t.clone().sub(s.p).normalize();
      const q = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(s.p, t, new THREE.Vector3(0, 1, 0)));
      VIEW[k] = { p: t.clone().addScaledVector(dir, -d), q: AIM[k] ? q : s.q, fov: L.vfov };
    }
  }
  function frameStates() {
    if (root.classList.contains("tour")) return frameTour();
    const aspect = innerWidth / innerHeight;
    const hfov = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(MOBILE_FOV / 2)) * aspect);
    for (const k in STATES) {
      const s = STATES[k];
      if (mode === "split" || !s.t) { VIEW[k] = s; continue; }
      const d = (FOCUS[k] || 1) / 2 / Math.tan(hfov / 2);
      const dir = s.t.clone().sub(s.p).normalize();
      VIEW[k] = { p: s.t.clone().addScaledVector(dir, -d), q: s.q, fov: MOBILE_FOV };
    }
  }
  frameStates();

  // ---------------------------------------------------------------- canvas → textura
  function canvasTex(w, h, draw) {
    const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
    const ctx = cv.getContext("2d");
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const api = { cv, ctx, tex, redraw: (...a) => { ctx.clearRect(0, 0, w, h); draw(ctx, w, h, ...a); tex.needsUpdate = true; } };
    api.redraw();
    return api;
  }
  const FONT = "Inter, system-ui, sans-serif", MONO = "'JetBrains Mono', ui-monospace, monospace";
  function rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }
  function wrap(ctx, text, x, y, maxW, lh) {
    const words = text.split(" "); let line = "";
    for (const w of words) {
      const t = line ? line + " " + w : w;
      if (ctx.measureText(t).width > maxW && line) { ctx.fillText(line, x, y); line = w; y += lh; } else line = t;
    }
    ctx.fillText(line, x, y);
  }
  function holoPanel(ctx, w, h, color, glow) {
    rr(ctx, 6, 6, w - 12, h - 12, 22);
    ctx.fillStyle = `rgba(8,20,40,${glow ? 0.78 : 0.55})`; ctx.fill();
    ctx.lineWidth = glow ? 6 : 3; ctx.strokeStyle = color;
    ctx.shadowColor = color; ctx.shadowBlur = glow ? 28 : 12; ctx.stroke(); ctx.shadowBlur = 0;
  }
  const holoMat = (tex) => new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false, side: THREE.DoubleSide });

  const clickables = [];   // { mesh, target, label, hover(bool) }

  // ---------------------------------------------------------------- Servicios: paneles alrededor del monitor
  const svcAnchor = anchor("anchor_services");
  const ICON = { store: "🏪", rocket: "🚀", globe: "🌐", search: "🔍", refresh: "♻️", bot: "🤖", phone: "📱", puzzle: "🧩", sparkle: "✨", chip: "🔌" };
  const svcPanels = DATA.services.slice(0, 6).map((s, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const panel = canvasTex(640, 300, (ctx, w, h, glow) => {
      holoPanel(ctx, w, h, glow ? "#5eead4" : "#7c9dff", glow);
      ctx.font = `600 34px ${MONO}`; ctx.fillStyle = "#7c9dff"; ctx.fillText(`0${i + 1}`, 34, 62);
      ctx.font = `64px ${FONT}`; ctx.fillText(ICON[s.icon] || "◆", w - 110, 92);
      ctx.font = `700 46px ${FONT}`; ctx.fillStyle = "#e6f6ff"; wrap(ctx, s.title, 34, 150, w - 80, 54);
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.14), holoMat(panel.tex));
    mesh.position.set(svcAnchor.x + (col - 0.5) * 0.33, svcAnchor.y + (1 - row) * 0.165, svcAnchor.z + col * 0.04);
    if (STATES.cam_services) mesh.lookAt(STATES.cam_services.p);
    mesh.userData.base = mesh.position.y; mesh.userData.phase = i;
    scene.add(mesh);
    const item = { mesh, chapter: "services", intro: 0, target: "#services", label: s.title, panel, glow: false, el: () => document.querySelectorAll("#services .card")[i] };
    clickables.push(item);
    return item;
  });
  // tarjeta HTML ↔ panel 3D
  document.querySelectorAll("#services .card").forEach((card, i) => {
    const p = svcPanels[i]; if (!p) return;
    card.addEventListener("mouseenter", () => setGlow(p, true));
    card.addEventListener("mouseleave", () => setGlow(p, false));
  });
  function setGlow(item, on) { if (item.glow === on || !item.panel) return; item.glow = on; item.panel.redraw(on); }

  // ---------------------------------------------------------------- Proyectos: carteles de neón en la ciudad
  const camProj = STATES.cam_projects;
  // Cada cartel enseña la captura real de una web publicada (assets/work/<slug>-d.webp)
  DATA.projects.slice(0, 3).forEach((p, i) => {
    const colors = ["#ff2bd6", "#5eead4", "#c084fc"];
    const c = colors[i % 3];
    let shot = null;
    const bb = canvasTex(640, 560, (ctx, w, h, glow) => {
      ctx.fillStyle = "rgba(6,4,18,.9)"; ctx.fillRect(0, 0, w, h);
      if (shot) ctx.drawImage(shot, 34, 34, w - 68, (w - 68) * 0.625);
      ctx.lineWidth = glow ? 14 : 9; ctx.strokeStyle = c; ctx.shadowColor = c; ctx.shadowBlur = 40;
      ctx.strokeRect(16, 16, w - 32, h - 32); ctx.shadowBlur = 0;
      ctx.textAlign = "center";
      ctx.shadowColor = c; ctx.shadowBlur = 24; ctx.fillStyle = "#fff"; ctx.font = `800 46px ${FONT}`;
      ctx.fillText(p.name, w / 2, h - 92, w - 60);
      ctx.shadowBlur = 0; ctx.fillStyle = c; ctx.font = `600 24px ${MONO}`;
      ctx.fillText(`${(p.kind || "").toUpperCase()} · ● ONLINE`, w / 2, h - 46, w - 60);
    });
    const img = new Image();
    img.onload = () => { shot = img; bb.redraw(false); };
    img.src = `/assets/work/${p.slug}-d.webp`;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.56), holoMat(bb.tex));
    mesh.position.copy(anchor("anchor_billboard" + i));
    if (camProj) { const t = camProj.p.clone(); t.y = mesh.position.y; mesh.lookAt(t); }
    scene.add(mesh);
    // tocar el cartel abre esa web (es lo que el visitante espera de una "página" en la ciudad)
    clickables.push({ mesh, chapter: "projects", intro: 0.95, target: "#projects", url: p.url, label: p.name + " ↗", panel: bb, glow: false });
  });

  // ---------------------------------------------------------------- Cómo trabajo: holograma TODO
  let todoDone = -1;
  const todo = canvasTex(560, 620, (ctx, w, h, done = 0) => {
    holoPanel(ctx, w, h, "#5eead4", false);
    ctx.font = `700 40px ${MONO}`; ctx.fillStyle = "#5eead4"; ctx.fillText("TODO", 40, 82);
    DATA.steps.forEach((s, i) => {
      const y = 170 + i * 110, ok = i < done;
      rr(ctx, 40, y - 38, 46, 46, 8); ctx.lineWidth = 4; ctx.strokeStyle = ok ? "#5eead4" : "#5b6b80"; ctx.stroke();
      if (ok) { ctx.fillStyle = "#5eead4"; ctx.font = `700 40px ${FONT}`; ctx.fillText("✓", 49, y + 2); }
      ctx.fillStyle = ok ? "#c9d4e6" : "#e6edf3"; ctx.font = `600 38px ${FONT}`; ctx.fillText(s, 110, y);
      if (ok) { ctx.fillRect(110, y - 12, ctx.measureText(s).width, 3); }
    });
  });
  const todoMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.33), holoMat(todo.tex));
  todoMesh.position.copy(anchor("anchor_process"));
  todoMesh.rotation.y = -0.45;
  scene.add(todoMesh);
  clickables.push({ mesh: todoMesh, chapter: "process", intro: 0, target: "#process", el: () => document.querySelector("#process .steps"), label: DATA.labels.process });

  // ---------------------------------------------------------------- Sobre mí: etiqueta sobre libros/robot
  const aboutTag = canvasTex(560, 160, (ctx, w, h) => {
    holoPanel(ctx, w, h, "#ffb347", false);
    ctx.font = `700 44px ${FONT}`; ctx.fillStyle = "#ffe2b8"; ctx.textAlign = "center"; ctx.fillText("👋 " + (DATA.labels.about || ""), w / 2, h / 2 + 15);
  });
  const aboutMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.086), holoMat(aboutTag.tex));
  aboutMesh.position.copy(anchor("anchor_about")).add(new THREE.Vector3(0.12, 0.33, 0.04));
  aboutMesh.rotation.y = 0.35;
  scene.add(aboutMesh);
  clickables.push({ mesh: aboutMesh, chapter: "about", intro: 0, target: "#about", el: () => document.querySelector("#about .about-grid"), label: DATA.labels.about });

  // ---------------------------------------------------------------- globo holográfico → contacto
  const globe = new THREE.Mesh(new THREE.IcosahedronGeometry(0.075, 3),
    new THREE.MeshBasicMaterial({ color: new THREE.Color("#22d3ff").multiplyScalar(1.4), wireframe: true, transparent: true, opacity: 0.8, toneMapped: false }));
  globe.position.copy(anchor("anchor_globe"));
  scene.add(globe);
  clickables.push({ mesh: globe, chapter: "*", target: "#contact", el: () => document.querySelector("#contact .cta-card"), label: DATA.labels.globe });

  // ---------------------------------------------------------------- monitor: código tecleándose → contacto
  const CODE = [
    "from saftech import Bot, deploy", "", "bot = Bot(\"tu-negocio\")", "",
    "@bot.on(\"pedido\")", "async def nuevo(msg):", "    await db.save(msg.pedido)", "    await msg.reply(\"✔ apuntado\")", "",
    "deploy(bot, server=\"raspberry\")", "# ✔ online 24/7",
  ];
  let typed = 0;
  const scr = canvasTex(1024, 568, (ctx, w, h, n = 0) => {
    ctx.fillStyle = "#0a1324"; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#101c33"; ctx.fillRect(0, 0, w, 44);
    ["#ff5f57", "#febc2e", "#28c840"].forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(28 + i * 26, 22, 8, 0, 7); ctx.fill(); });
    ctx.fillStyle = "#9aa7b5"; ctx.font = `24px ${MONO}`; ctx.fillText("main.py — saftech", 120, 30);
    ctx.font = `30px ${MONO}`;
    let left = n;
    CODE.forEach((line, i) => {
      if (left <= 0) return;
      const part = line.slice(0, left); left -= line.length + 1;
      ctx.fillStyle = "#4b5a70"; ctx.fillText(String(i + 1).padStart(2), 20, 96 + i * 42);
      ctx.fillStyle = line.startsWith("#") ? "#5eead4" : line.startsWith("@") ? "#ff2bd6" : /^(from|async|deploy)/.test(line) ? "#22d3ff" : "#e6edf3";
      ctx.fillText(part, 80, 96 + i * 42);
    });
    if (Math.floor(performance.now() / 500) % 2) { ctx.fillStyle = "#5eead4"; ctx.fillRect(80 + 0, 96 + CODE.length * 42 - 26, 16, 30); }
  });
  if (screen) {
    screen.material = new THREE.MeshBasicMaterial({ map: scr.tex, toneMapped: false });
    scr.tex.flipY = false;   // UV del glTF
    // escritorio: va a contacto y arranca la terminal en el monitor · móvil: a la tarjeta de contacto
    clickables.push({ mesh: screen, chapter: "*", solid: true, target: "#contact", label: DATA.labels.monitor, boot: true,
      el: () => (mode === "stack" ? document.querySelector("#contact .cta-card") : null) });
  }
  const totalChars = CODE.join("\n").length;

  // ---------------------------------------------------------------- post: bloom suave para los neones
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.6, 0.5, 0.9);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // ---------------------------------------------------------------- capítulos ↔ scroll
  const CHAPTERS = [["top", "cam_intro"], ["services", "cam_services"], ["projects", "cam_projects"],
    ["process", "cam_process"], ["software", "cam_contact"], ["about", "cam_about"], ["contact", "cam_contact"]]
    .map(([id, cam]) => ({ el: document.getElementById(id), cam })).filter((c) => c.el && STATES[c.cam]);
  const V = (c) => VIEW[c.cam];
  const SECTIONS = [...document.querySelectorAll("main > section")];
  let stageOf = new Map();   // sección → alto del escenario (padding-top en modo stack)
  function measureStages() {
    stageOf = new Map(SECTIONS.map((el) => [el, mode === "stack" ? parseFloat(getComputedStyle(el).paddingTop) || 0 : 0]));
  }
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const goal = { p: new THREE.Vector3(), q: new THREE.Quaternion(), fov: 40 };
  let chapter = 0, local = 0, activeId = "";
  function computeGoal() {
    if (TOUR) { const s = V(CHAPTERS[chapter]); goal.p.copy(s.p); goal.q.copy(s.q); goal.fov = s.fov; return; }
    // Cada frontera entre capítulos tiene un progreso 0→1 que sólo avanza en una franja
    // alrededor de esa frontera: mientras lees una sección la cámara se queda quieta.
    const vh = innerHeight, mid = scrollY + vh * 0.5;
    const s0 = V(CHAPTERS[0]);
    goal.p.copy(s0.p); goal.q.copy(s0.q); goal.fov = s0.fov;
    chapter = 0;
    for (let k = 1; k < CHAPTERS.length; k++) {
      const c = CHAPTERS[k], top = c.el.offsetTop, s = V(c);
      const t = smooth(-0.35, 0.1, (mid - top) / vh);
      if (t <= 0) break;
      goal.p.lerp(s.p, t); goal.q.slerp(s.q, t); goal.fov += (s.fov - goal.fov) * t;
      if (t > 0.5) chapter = k;
    }
    // stack: la escena se ve limpia en el escenario de cada sección y se oscurece al entrar el contenido
    if (mode === "stack") {
      // por sección: sube cuando su contenido ocupa la mitad baja de la pantalla y baja cuando
      // su final deja ver el escenario de la siguiente. Continuo, sin saltos entre secciones.
      let dim = 0;
      for (const el of SECTIONS) {
        const top = el.offsetTop - scrollY;
        if (top > vh || top + el.offsetHeight < 0) continue;
        const yContent = (top + (stageOf.get(el) || 0)) / vh;      // dónde está el contenido en pantalla (0 = arriba)
        const yEnd = (top + el.offsetHeight) / vh;                   // dónde termina la sección
        dim = Math.max(dim, (1 - smooth(0.08, 0.4, yContent)) * smooth(0.2, 0.55, yEnd));
      }
      root.style.setProperty("--dim", dim.toFixed(3));
    }
    const c = CHAPTERS[chapter];
    if (c.el.id !== activeId) {
      activeId = c.el.id;
      document.querySelectorAll(".menu a, #mobile-menu a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + activeId));
    }
    local = Math.min(1, Math.max(0, (mid - c.el.offsetTop) / Math.max(1, c.el.offsetHeight)));
    // TODO: los pasos se marcan según se lee la sección
    const iProc = CHAPTERS.findIndex((x) => x.el.id === "process");
    if (chapter === iProc) setTodo(Math.round(smooth(0.1, 0.6, local) * DATA.steps.length));
    else setTodo(chapter > iProc ? DATA.steps.length : 0);
  }
  function setTodo(n) { if (n !== todoDone) { todoDone = n; todo.redraw(n); } }
  if (FORCE) window.__saf = { todo: () => todoDone, chapter: () => CHAPTERS[chapter].el.id,   // sonda para pruebas
    tilt: () => ({ on: tilt.on, got: tilt.got, auto: tilt.auto, yaw: +tilt.yaw.toFixed(3), pitch: +tilt.pitch.toFixed(3), ty: +tilt.ty.toFixed(3), tp: +tilt.tp.toFixed(3), base: tilt.base, ang: (screen.orientation && screen.orientation.angle), frames: frameCount }),
    // centro en pantalla (px) del botón holográfico k de la parada actual
    btn: (k = 0) => { const it = hud.filter((h) => h.click.action && h.ci === chapter)[k]; if (!it) return null;
      const v = it.mesh.getWorldPosition(new THREE.Vector3()).project(camera); return [(v.x + 1) / 2 * innerWidth, (1 - v.y) / 2 * innerHeight]; } };
  if (!TOUR) addEventListener("scroll", computeGoal, { passive: true });

  // ---------------------------------------------------------------- tamaño + encuadre (sujeto a la derecha, texto a la izquierda)
  let lastW = 0, lastH = 0;
  function resize() {
    const w = innerWidth, h = innerHeight;
    const m = modeFor();
    // la barra de URL del móvil cambia el alto al hacer scroll: eso no es un resize de verdad
    if (m === mode && m === "stack" && w === lastW && Math.abs(h - lastH) < 160) { computeGoal(); return; }
    lastW = w; lastH = h;
    if (m !== mode) { root.classList.replace(mode, m); mode = m; renderer.setPixelRatio(Math.min(dprFor(), dprCap)); }
    renderer.setSize(w, h, false); composer.setSize(w, h); bloom.resolution.set(w, h);
    camera.aspect = w / h;
    // split: el centro de la escena cae en el ~70% del ancho · stack: sujeto en el tercio superior
    if (TOUR) {
      // zona libre: a la derecha del rótulo (horizontal) o arriba (vertical)
      measureFree();
      camera.setViewOffset(w, h, -FREE.x, FREE.y, w, h);
    } else if (mode === "split") camera.setViewOffset(w, h, -w * 0.2, 0, w, h);
    else camera.setViewOffset(w, h, 0, h * 0.19, w, h);
    camera.updateProjectionMatrix();
    frameStates();
    if (TOUR && typeof buildHud === "function" && hud) buildHud();
    measureStages();
    if (mode === "split") root.style.removeProperty("--dim");
    computeGoal();
    if (typeof placeTilt === "function") placeTilt();
  }
  addEventListener("resize", resize);
  // giro del dispositivo: iOS/Android avisan del tamaño nuevo tarde; se recalcula otra vez al asentarse
  const onRotate = () => { lastW = 0; resize(); setTimeout(() => { lastW = 0; resize(); }, 350); };
  addEventListener("orientationchange", onRotate);
  if (screen.orientation && screen.orientation.addEventListener) screen.orientation.addEventListener("change", onRotate);

  // secciones anchas (galería, packs): la escena se oscurece mientras se ven
  const dimmed = new Set();
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) en.isIntersecting ? dimmed.add(en.target) : dimmed.delete(en.target);
    root.classList.toggle("scene-dim", dimmed.size > 0);
  }, { rootMargin: "-30% 0px -30% 0px" });
  document.querySelectorAll("#work-grid, #packs .cards").forEach((el) => io.observe(el));

  // ---------------------------------------------------------------- ratón: parallax sutil + hover + clic
  const mouse = new THREE.Vector2(), ndc = new THREE.Vector2(-9, -9), ray = new THREE.Raycaster();
  const tip = document.getElementById("scene-tip");
  const CONTENT = "header,footer,nav,.glass,.work,.filters,a,button,input,textarea,.card,.term,.termwrap,p,h1,h2,h3,li,.cta-row,.stats,kbd";
  let hovered = null;
  function overContent(e) { return e.target.closest && e.target.closest(CONTENT); }
  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;   // táctil: sin hover ni parallax (el dedo arrastra el scroll)
    mouse.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    if (overContent(e)) { ndc.set(-9, -9); } else { ndc.copy(mouse); }
    tip.style.transform = `translate(${e.clientX + 16}px, ${e.clientY + 14}px)`;
  }, { passive: true });
  document.addEventListener("pointerleave", () => ndc.set(-9, -9));
  addEventListener("click", (e) => {
    if (overContent(e)) return;
    // raycast en el punto del clic/toque (en táctil no hay hover previo)
    ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    pick();
    const h = hovered;
    if (!h) { if (TOUR) showHeader(); return; }   // tocar la escena vacía enseña la barra superior
    // respuesta inmediata: el objeto se ilumina y (en móvil) vibra un instante
    setGlow(h, true); setTimeout(() => { if (hovered !== h) setGlow(h, false); }, 450);
    if (navigator.vibrate && e.pointerType !== "mouse") navigator.vibrate(12);
    ndc.set(-9, -9);   // la cámara se mueve bajo el cursor quieto: no dejar el hover colgado
    if (h.url) { window.open(h.url, "_blank", "noopener"); return; }
    if (h.action) { h.action(); return; }
    if (TOUR) { tourAction(h); return; }
    if (h.boot && mode === "split") bootOnArrive = true;
    const el = (h.el && h.el()) || document.querySelector(h.target);
    if (!el) return;
    const precise = !!(h.el && h.el());
    el.scrollIntoView({ behavior: "smooth", block: precise ? "center" : "start" });
    if (precise) { el.classList.remove("scene-hit"); void el.offsetWidth; el.classList.add("scene-hit"); setTimeout(() => el.classList.remove("scene-hit"), 2400); }
  });
  function pick() {
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(clickables.filter((c) => !c.inert && ((c.solid && !(slotVisible && c.mesh === screen)) || (!c.solid && c.mesh.material.opacity > 0.3))).map((c) => c.mesh), false);
    const h = hits.length ? clickables.find((c) => c.mesh === hits[0].object) : null;
    if (h !== hovered) {
      if (hovered) { setGlow(hovered, false); const o = hovered.el && hovered.el(); if (o) o.classList.remove("scene-hover"); }
      if (h) { const o = h.el && h.el(); if (o) o.classList.add("scene-hover"); }   // panel ↔ su tarjeta HTML
      hovered = h;
      if (h) { setGlow(h, true); tip.textContent = h.label || ""; }
      tip.classList.toggle("on", !!h);
      document.body.style.cursor = h ? "pointer" : "";
    }
  }

  // ---------------------------------------------------------------- terminal real sobre el monitor (capítulo contacto)
  const monitorSlot = document.getElementById("monitor-slot");
  let bootOnArrive = false;
  const corners = [new THREE.Vector3(), new THREE.Vector3()];
  let slotVisible = false;
  function placeTerminal() {
    if (!screen || !monitorSlot) return;
    // sólo en escritorio: con el teclado de un móvil la terminal no se puede usar
    const isContact = mode === "split" && CHAPTERS[chapter] && CHAPTERS[chapter].el.id === "contact";
    const show = isContact && camera.position.distanceTo(STATES.cam_contact.p) < 0.15;
    if (show) {
      screen.geometry.computeBoundingBox();
      const bb = screen.geometry.boundingBox;
      corners[0].copy(bb.min).applyMatrix4(screen.matrixWorld).project(camera);
      corners[1].copy(bb.max).applyMatrix4(screen.matrixWorld).project(camera);
      const x0 = (Math.min(corners[0].x, corners[1].x) + 1) / 2 * innerWidth;
      const x1 = (Math.max(corners[0].x, corners[1].x) + 1) / 2 * innerWidth;
      const y0 = (1 - Math.max(corners[0].y, corners[1].y)) / 2 * innerHeight;
      const y1 = (1 - Math.min(corners[0].y, corners[1].y)) / 2 * innerHeight;
      Object.assign(monitorSlot.style, { left: x0 + "px", top: y0 + "px", width: x1 - x0 + "px", height: y1 - y0 + "px" });
    }
    if (show !== slotVisible) {
      slotVisible = show;
      monitorSlot.classList.toggle("on", show);
      if (show) {
        document.dispatchEvent(new CustomEvent("saf:monitor", { detail: { reboot: bootOnArrive, focus: bootOnArrive } }));
        bootOnArrive = false;
      }
    }
  }


  // ================================================================ visita guiada (/3d/)
  // Una sola pantalla. Cada gesto = una parada: vuelo de cámara lento y suavizado; el rótulo
  // aparece al llegar. La información se abre desde la escena en un panel (las mismas secciones
  // HTML de la web, movidas dentro del panel: sin textos duplicados).
  const FLIGHT_MS = 1800;
  let flight = null, lockUntil = 0;
  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const panel = document.getElementById("tour-panel"), pbody = panel && panel.querySelector(".tbody");
  const rail = document.getElementById("tour-rail"), nextBtn = document.getElementById("tour-next");
  const homes = new Map();
  const idx = (id) => CHAPTERS.findIndex((c) => c.el.id === id);
  const kickerOf = (id) => { const k = document.querySelector(`#${id} .kicker`); return k ? k.textContent.split("·").pop().trim() : id; };
  const nameOf = (i) => (i === 0 ? "SafTech" : (SAF.sections && SAF.sections[CHAPTERS[i].el.id]) || kickerOf(CHAPTERS[i].el.id));

  function openPanel(ids, focus) {
    if (!panel) return;
    closePanel();
    for (const id of ids) {
      const el = document.getElementById(id); if (!el) continue;
      const ph = document.createComment("home:" + id); el.before(ph); homes.set(el, ph); el.classList.remove("cap-on"); pbody.appendChild(el);
    }
    panel.hidden = false; pbody.scrollTop = 0;
    requestAnimationFrame(() => panel.classList.add("on"));
    root.classList.add("tpanel-open", "scene-dim");
    if (focus) setTimeout(() => {
      focus.scrollIntoView({ block: "center", behavior: "smooth" });
      focus.classList.remove("scene-hit"); void focus.offsetWidth; focus.classList.add("scene-hit");
      setTimeout(() => focus.classList.remove("scene-hit"), 2400);
    }, 420);
  }
  function closePanel() {
    if (!panel || panel.hidden) return;
    for (const [el, ph] of homes) ph.replaceWith(el);
    homes.clear();
    panel.classList.remove("on"); panel.hidden = true;
    root.classList.remove("tpanel-open", "scene-dim");
  }
  closeTourPanel = closePanel;
  function tourAction(h) {
    const id = h.target.slice(1);
    if (id === "contact") { if (h.boot && mode === "split") bootOnArrive = true; goTo(idx("contact")); return; }
    openPanel([id], h.el && h.el());
  }

  // rótulo de cada parada = la propia sección (sólo su cabecera) + botones que abren el detalle
  const EXTRA = { services: ["services", "included", "packs"], projects: ["projects"], process: ["process"], software: ["software"], about: ["about"] };
  // ================================================================ títulos y botones holográficos (visita 100 % 3D)
  // Nada de cajas HTML: cada parada tiene su título de neón y sus botones como hologramas DENTRO de la
  // escena, colocados en la zona libre (izquierda en horizontal, abajo en vertical) y anclados a la
  // cámara de su parada: vuelan con ella. El detalle se abre a demanda en el panel.
  function hudBox() {   // rectángulo (px) del bloque de títulos según tamaño y orientación
    const w = innerWidth, h = innerHeight;
    if (mode === "split") {
      const compact = h < 560, big = w >= 1800 && h >= 900;
      const bw = compact ? Math.min(w * 0.42, 440) : big ? Math.min(w * 0.34, 760) : Math.min(w * 0.4, 560);
      const x = compact ? 18 : Math.max(24, w * (big ? 0.06 : 0.045));
      const bh = compact ? h * 0.5 : Math.min(h * 0.5, big ? 460 : 340);
      return { x, w: bw, y: h - bh - (compact ? 44 : h * 0.1), h: bh, compact, big };
    }
    const tablet = w >= 700;
    const x = tablet ? w * 0.06 : 22, bw = tablet ? Math.min(640, w * 0.8) : w - 78;
    const bh = tablet ? 300 : 230;
    return { x, w: bw, y: h - bh - (tablet ? 92 : 84), h: bh, compact: false, big: false };
  }
  const hud = [];   // { mesh, chapter, rect:{x,y,w,h} } – se reconstruye en cada resize
  function hudTexts(id) {
    const q = (sel) => { const el = document.querySelector(sel); return el ? el.textContent.replace(/\s+/g, " ").trim() : ""; };
    if (id === "top") return { kicker: q("#top .eyebrow"), title: q("#top h1"), sub: q("#top .lead").split(/(?<=[.!?])\s/)[0] };
    return { kicker: q(`#${id} .kicker`).toUpperCase(), title: q(`#${id} h2`), sub: q(`#${id} .head .sub`).split(/(?<=[.!?])\s/)[0] };
  }
  function hudButtons(id) {
    const B = (label, action, primary) => ({ label, action, primary });
    const open = (sid) => () => openPanel([sid]);
    const link = (sel) => { const a = document.querySelector(sel); return a ? { t: a.textContent.trim(), href: a.href } : null; };
    if (id === "top") {
      const a = document.querySelectorAll("#top .cta-row a");
      return [B(a[0] ? a[0].textContent.trim() : "→", () => goTo(idx("contact")), true), B(a[1] ? a[1].textContent.replace("↓", "").trim() : "", () => goTo(idx("projects")))];
    }
    if (id === "contact") {
      const m = link("#contact .cta-row a"), g = link('#contact .cta-row a[target="_blank"]');
      return [m && B(m.t + " ✉", () => { location.href = m.href; }, true), g && B(g.t, () => window.open(g.href, "_blank", "noopener"))].filter(Boolean);
    }
    const list = EXTRA[id] || [];
    const wt = document.getElementById("work-toggle");
    return list.filter((sid) => document.getElementById(sid))
      .map((sid, n) => B((sid === "projects" && wt ? wt.dataset.more : kickerOf(sid)) + " ↗", open(sid), n === 0));
  }
  function drawWrapped(ctx, text, maxW, lh, maxLines) {
    const words = text.split(" "), lines = []; let line = "";
    for (const w of words) { const t = line ? line + " " + w : w; if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; }
    if (line) lines.push(line);
    if (lines.length > maxLines) { lines.length = maxLines; lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, "") + "…"; }
    return lines;
  }
  const HUD_DPR = Math.min(devicePixelRatio || 1, 2);
  function hudMesh(pxW, pxH, draw) {
    const cv = document.createElement("canvas"); cv.width = Math.ceil(pxW * HUD_DPR); cv.height = Math.ceil(pxH * HUD_DPR);
    const ctx = cv.getContext("2d"); ctx.scale(HUD_DPR, HUD_DPR);
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
    const api = { tex, redraw: (glow) => { ctx.clearRect(0, 0, pxW, pxH); draw(ctx, pxW, pxH, glow); tex.needsUpdate = true; } };
    api.redraw(false);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, toneMapped: false, opacity: 0 }));
    mesh.renderOrder = 20;
    return { mesh, panel: api };
  }
  function placeHud(item, pose) {   // del rectángulo en pantalla de SU parada → mundo, a 0,5 m de esa cámara
    const s = pose || VIEW[CHAPTERS[item.ci].cam]; if (!s) return;
    const w = innerWidth, h = innerHeight, D = 0.5;
    const hh = D * Math.tan(THREE.MathUtils.degToRad(s.fov / 2)), hw = hh * (w / h);
    const cx = item.rect.x + item.rect.w / 2 - FREE.x, cy = item.rect.y + item.rect.h / 2 + FREE.y;   // con el desplazamiento de vista
    const local = new THREE.Vector3((cx / w * 2 - 1) * hw, (1 - cy / h * 2) * hh, -D);
    item.mesh.position.copy(s.p).add(local.applyQuaternion(s.q));
    item.mesh.quaternion.copy(s.q);
    item.mesh.scale.set(item.rect.w / w * 2 * hw, item.rect.h / h * 2 * hh, 1);
  }
  function buildHud() {
    for (const it of hud.splice(0)) { scene.remove(it.mesh); it.mesh.material.map.dispose(); it.mesh.material.dispose(); const k = clickables.indexOf(it.click); if (k >= 0) clickables.splice(k, 1); }
    const H = hudBox(), stack = mode === "stack";
    const fs = (base) => Math.round(base * (H.big ? 1.35 : H.compact ? 0.78 : 1));
    CHAPTERS.forEach((c, ci) => {
      const id = c.el.id, T = hudTexts(id), btns = hudButtons(id);
      const showSub = !stack && !H.compact && T.sub;
      // título: se mide antes de dibujar para dar al plano su alto exacto
      const meas = document.createElement("canvas").getContext("2d");
      const tSize = fs(stack ? (H.w >= 600 ? 34 : 25) : id === "top" ? 44 : 36);
      meas.font = `700 ${tSize}px Sora, Inter, sans-serif`;
      const tLines = drawWrapped(meas, T.title, H.w - 8, tSize * 1.12, id === "top" ? 3 : 2);
      const kS = fs(12), sS = fs(15);
      meas.font = `400 ${sS}px Inter, sans-serif`;
      const sLines = showSub ? drawWrapped(meas, T.sub, H.w - 8, sS * 1.45, 2) : [];
      const pad = 22;
      const blockH = pad + kS + 14 + tLines.length * tSize * 1.12 + (sLines.length ? 10 + sLines.length * sS * 1.45 : 0) + pad;
      const bH = fs(stack ? 40 : 42), gap = 10;
      // botones en filas: el bloque RESERVA su alto (las filas nacen dentro del bloque, nunca por
      // debajo de su borde: ahi viven los controles fijos — siguiente, raíl, movimiento)
      meas.font = `600 ${fs(15)}px Inter, sans-serif`;
      const rows = [[]];
      for (const b of btns) {
        const bw = Math.ceil(meas.measureText(b.label).width + fs(36));
        const row = rows[rows.length - 1], wRow = row.reduce((s, x) => s + x.bw, 0) + (row.length - 1) * gap;
        if (row.length && wRow + gap + bw > H.w) rows.push([{ b, bw }]);
        else row.push({ b, bw });
      }
      const btnH = rows.length * bH + (rows.length - 1) * gap;
      const totalH = blockH + (btns.length ? btnH + 6 : 0);
      const y0 = H.y + H.h - totalH;
      const title = hudMesh(H.w + pad * 2, blockH, (ctx, W, Hh) => {
        // halo oscuro difuso propio (legible sobre neón o código) y texto de neón, sin caja
        const g = ctx.createRadialGradient(W * 0.32, Hh * 0.55, 10, W * 0.32, Hh * 0.55, W * 0.7);
        g.addColorStop(0, "rgba(5,6,12,.78)"); g.addColorStop(0.6, "rgba(5,6,12,.45)"); g.addColorStop(1, "rgba(5,6,12,0)");
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, Hh);
        let y = pad + kS;
        ctx.font = `600 ${kS}px 'JetBrains Mono', monospace`; ctx.fillStyle = "#5eead4"; ctx.shadowColor = "#5eead4"; ctx.shadowBlur = 8;
        ctx.fillText("▸ " + T.kicker, pad, y); y += 14;
        ctx.font = `700 ${tSize}px Sora, Inter, sans-serif`; ctx.fillStyle = "#f2f6ff"; ctx.shadowColor = "rgba(124,157,255,.7)"; ctx.shadowBlur = 18;
        for (const l of tLines) { y += tSize * 1.12; ctx.fillText(l, pad, y - tSize * 0.22); }
        ctx.shadowBlur = 0;
        if (sLines.length) { y += 10; ctx.font = `400 ${sS}px Inter, sans-serif`; ctx.fillStyle = "#c3cde6"; for (const l of sLines) { y += sS * 1.45; ctx.fillText(l, pad, y - sS * 0.35); } }
      });
      const tItem = { mesh: title.mesh, ci, rect: { x: H.x - pad, y: y0, w: H.w + pad * 2, h: blockH } };
      tItem.click = { mesh: title.mesh, chapter: id, intro: 0, inert: true };
      hud.push(tItem); clickables.push(tItem.click); scene.add(title.mesh); placeHud(tItem);
      // botones holográficos en fila (saltan de línea si no caben)
      let by = y0 + blockH + 6;
      for (const row of rows) {
        let bx = H.x;
        for (const it of row) {
          const b = it.b, bw = it.bw;
          const m = hudMesh(bw, bH, (ctx, W, Hh, glow) => {
            ctx.beginPath(); ctx.roundRect(2, 2, W - 4, Hh - 4, 10);
            if (b.primary) { const gr = ctx.createLinearGradient(0, 0, W, 0); gr.addColorStop(0, "#22d3ff"); gr.addColorStop(1, "#5eead4"); ctx.fillStyle = gr; ctx.fill(); }
            else { ctx.fillStyle = glow ? "rgba(20,48,60,.9)" : "rgba(8,18,38,.82)"; ctx.fill(); }
            ctx.lineWidth = glow ? 2.5 : 1.5; ctx.strokeStyle = b.primary ? "#bafff1" : glow ? "#5eead4" : "rgba(124,157,255,.7)";
            ctx.shadowColor = "#5eead4"; ctx.shadowBlur = glow ? 18 : 8; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.font = `600 ${fs(15)}px Inter, sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillStyle = b.primary ? "#04121a" : glow ? "#5eead4" : "#eef2ff"; ctx.fillText(b.label, W / 2, Hh / 2 + 1);
          });
          const btn = { mesh: m.mesh, ci, rect: { x: bx, y: by, w: bw, h: bH } };
          btn.click = { mesh: m.mesh, chapter: id, intro: 0, label: b.label, panel: m.panel, glow: false, action: b.action };
          hud.push(btn); clickables.push(btn.click); scene.add(m.mesh); placeHud(btn);
          bx += bw + gap;
        }
        by += bH + gap;
      }
    });
  }

  // invitación: los objetos pulsables de esta parada parpadean — sólo la PRIMERA vez en cada parada:
  // quien ya ha pasado por aquí ya sabe que se puede pulsar, y no hace vida con destellos eternos
  const invited = new Set();
  function showCaption() {
    if (rail) rail.querySelectorAll("button").forEach((b, i) => b.classList.toggle("on", i === chapter));
    if (nextBtn) {
      const last = chapter === CHAPTERS.length - 1;
      nextBtn.textContent = (last ? "↑ " : "↓ ") + nameOf(last ? 0 : chapter + 1);
      nextBtn.hidden = false;
    }
    document.querySelectorAll(".menu a, #mobile-menu a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + CHAPTERS[chapter].el.id));
    const cur = CHAPTERS[chapter].el.id;
    if (!invited.has(cur)) {
      invited.add(cur);
      clickables.filter((c) => c.chapter === cur && c.panel).forEach((c, n) => {
        setTimeout(() => setGlow(c, true), 150 + n * 90); setTimeout(() => setGlow(c, false), 750 + n * 90);
      });
    }
    // (la lista de tareas la coreografía goTo: empieza a marcarse en la aproximación y acaba al llegar)
  }
  // Barra superior: se oculta al avanzar para que mande la escena. Vuelve 5 s al tocar la pantalla,
  // al ir hacia arriba (rueda, swipe, ↑) o al acercar el ratón arriba; no se va mientras se usa.
  const header = document.querySelector(".top");
  let hdrTimer = 0, hdrHover = false;
  function showHeader(ms = 5000) {
    if (!TOUR) return;
    root.classList.remove("hdr-hidden"); clearTimeout(hdrTimer);
    if (chapter > 0 || flight) hdrTimer = setTimeout(hideHeader, ms);
  }
  function hideHeader() {
    if (!TOUR) return;
    clearTimeout(hdrTimer);
    const mm = document.getElementById("mobile-menu");
    if (chapter === 0 && !(flight && flight.i > 0)) { root.classList.remove("hdr-hidden"); return; }
    if (hdrHover || (mm && !mm.hidden) || (header && header.contains(document.activeElement))) { hdrTimer = setTimeout(hideHeader, 1500); return; }
    root.classList.add("hdr-hidden");
  }
  const todoTimers = [];
  let todoEndsAt = 0;
  function resetTodo() { todoTimers.splice(0).forEach(clearTimeout); setTodo(0); }
  function goTo(i, instant) {
    i = (i + CHAPTERS.length) % CHAPTERS.length;
    if (i === chapter && !instant && !flight) return;
    if (!instant && performance.now() < lockUntil) return;   // vuelo o lista en curso: un gesto no la interrumpe
    todoTimers.splice(0).forEach(clearTimeout);   // nada de animaciones pendientes de una visita anterior
    // Lista de tareas: aparece vacía, se marca en el último tramo del vuelo (ritmo fijo) y termina
    // justo después de que la cámara se para. Hasta completarse, no se puede salir de la parada.
    if (CHAPTERS[i].el.id === "process") {
      resetTodo();
      const STEP = 300, n = DATA.steps.length, startAt = instant || reduced ? 300 : FLIGHT_MS - (n - 1) * STEP + 200;
      for (let k = 0; k < n; k++) todoTimers.push(setTimeout(() => setTodo(k + 1), startAt + k * STEP));
      todoEndsAt = performance.now() + startAt + (n - 1) * STEP + 450;
    } else todoEndsAt = 0;
    closePanel();
    if (nextBtn) nextBtn.hidden = true;
    history.replaceState(null, "", i ? "#" + CHAPTERS[i].el.id : location.pathname);
    const to = V(CHAPTERS[i]);
    if (instant || reduced) {
      chapter = i; computeGoal(); camera.position.copy(to.p); camera.quaternion.copy(to.q); camera.fov = to.fov; camera.updateProjectionMatrix();
      showCaption(); return;
    }
    const back = i < chapter;
    if (flight) { clearTimeout(flight.tMid); clearTimeout(flight.tEnd); }
    flight = { fp: camera.position.clone(), fq: camera.quaternion.clone(), ffov: camera.fov, i, t0: performance.now(), mid: false };
    // rótulo y cambio de hologramas por TIEMPO: no dependen de los fps del dispositivo
    const f = flight;
    f.tMid = setTimeout(() => { if (flight === f && !f.mid) { f.mid = true; chapter = f.i; computeGoal(); } }, FLIGHT_MS / 2);
    f.tEnd = setTimeout(() => { if (flight === f) { if (!f.mid) { chapter = f.i; computeGoal(); } flight = null; showCaption(); } }, FLIGHT_MS + 30);
    if (i === 0) { clearTimeout(hdrTimer); root.classList.remove("hdr-hidden"); }
    else if (back) showHeader();          // ir hacia arriba = querer ver dónde estás
    else hideHeader();                    // avanzar = la escena manda
    lockUntil = Math.max(performance.now() + FLIGHT_MS + 350, todoEndsAt);
  }
  const lift = new THREE.Vector3(0, 1, 0);
  function tourCamera(t) {
    if (flight) {
      const to = V(CHAPTERS[flight.i]);
      const x = Math.min(1, (performance.now() - flight.t0) / FLIGHT_MS), e = ease(x);
      camera.position.lerpVectors(flight.fp, to.p, e).addScaledVector(lift, Math.sin(Math.PI * e) * 0.12 * flight.fp.distanceTo(to.p));
      camera.quaternion.slerpQuaternions(flight.fq, to.q, e);
      camera.fov = flight.ffov + (to.fov - flight.ffov) * e; camera.updateProjectionMatrix();
      if (!flight.mid && x > 0.5) { flight.mid = true; chapter = flight.i; computeGoal(); }   // los hologramas cambian a mitad de vuelo
      if (x >= 1) { clearTimeout(flight.tEnd); clearTimeout(flight.tMid); flight = null; showCaption(); }
      return;
    }
    // en reposo: respiración muy suave + parallax del ratón (escritorio) o inclinación del móvil
    camera.position.copy(goal.p).add(tmpV.set(Math.sin(t * 0.35) * 0.008, Math.sin(t * 0.5) * 0.005, 0));
    if (tilt.on) camera.position.add(tmpV.set(-tilt.yaw * 0.35, tilt.pitch * 0.2, 0).applyQuaternion(goal.q));   // paralaje
    camera.quaternion.slerp(look, tilt.on ? 0.12 : 0.08);
    if (Math.abs(camera.fov - goal.fov) > 0.01) { camera.fov = goal.fov; camera.updateProjectionMatrix(); }
    // los títulos de la parada siguen a la cámara: se leen siempre y el escritorio se mueve detrás
    camera.updateMatrixWorld();
    const pose = { p: camera.position, q: camera.quaternion, fov: camera.fov };
    for (const it of hud) if (it.ci === chapter) placeHud(it, pose);
  }
  const tmpV = new THREE.Vector3();

  if (TOUR) {
    buildHud();
    if (rail) {
      CHAPTERS.forEach((c, i) => {
        const b = document.createElement("button"); b.type = "button";
        b.innerHTML = `<span>${nameOf(i)}</span>`; b.setAttribute("aria-label", nameOf(i));
        b.addEventListener("click", () => goTo(i));
        rail.appendChild(b);
      });
      rail.hidden = false;
    }
    if (nextBtn) nextBtn.addEventListener("click", () => goTo(chapter + 1));
    if (panel) panel.querySelector(".tclose").addEventListener("click", closePanel);
    // entradas: rueda / trackpad, deslizar, teclado
    let wheelAcc = 0, wheelT = 0;
    addEventListener("wheel", (e) => {
      if (e.target.closest && e.target.closest("#tour-panel")) return;   // dentro del panel se hace scroll normal
      e.preventDefault();
      const now = performance.now();
      if (now - wheelT > 220) wheelAcc = 0;
      wheelT = now;
      if (e.deltaY < -4) showHeader();
      if (now < lockUntil) return;                       // inercia del trackpad: un gesto = una parada
      wheelAcc += e.deltaY;
      if (Math.abs(wheelAcc) > 50) { const d = Math.sign(wheelAcc); wheelAcc = 0; if (!(d < 0 && chapter === 0)) goTo(chapter + d); }
    }, { passive: false });
    let ty = null;
    addEventListener("touchstart", (e) => { ty = e.target.closest && e.target.closest("#tour-panel, .tcap, #tour-rail") ? null : e.touches[0].clientY; }, { passive: true });
    addEventListener("touchmove", (e) => { if (ty !== null) e.preventDefault(); }, { passive: false });
    addEventListener("touchend", (e) => {
      if (ty === null) return;
      const dy = ty - e.changedTouches[0].clientY; ty = null;
      if (dy < -30) showHeader();                         // dedo hacia abajo = ir hacia arriba
      if (Math.abs(dy) > 45 && performance.now() >= lockUntil) { const d = Math.sign(dy); if (!(d < 0 && chapter === 0)) goTo(chapter + d); }
    });
    addEventListener("keydown", (e) => {
      if (e.target.closest && e.target.closest("input,textarea,.xterm")) return;
      if (e.key === "Escape") { closePanel(); return; }
      if (!panel.hidden) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); if (performance.now() >= lockUntil) goTo(chapter + 1); }
      if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); showHeader(); if (performance.now() >= lockUntil && chapter > 0) goTo(chapter - 1); }
      if (e.key === "Home") goTo(0);
      if (e.key === "End") goTo(CHAPTERS.length - 1);
    });
    // menú y anclas: ir a la parada o abrir su panel
    document.addEventListener("click", (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]'); if (!a) return;
      const id = a.getAttribute("href").slice(1), i = idx(id);
      if (i >= 0) { e.preventDefault(); goTo(i); }
      else if (document.getElementById(id) && id !== "main") { e.preventDefault(); openPanel([id]); }
      const mm = document.getElementById("mobile-menu"); if (mm) mm.hidden = true;
    });
    panel && panel.addEventListener("click", (e) => { if (e.target === panel) closePanel(); });
    if (header) {
      header.addEventListener("pointerenter", () => { hdrHover = true; showHeader(); });
      header.addEventListener("pointerleave", () => { hdrHover = false; showHeader(); });
      header.addEventListener("focusin", () => showHeader());
    }
    addEventListener("pointermove", (e) => { if (e.pointerType === "mouse" && e.clientY < 70) showHeader(); }, { passive: true });
    const burger = document.querySelector(".burger");
    if (burger) burger.addEventListener("click", () => showHeader());
  }


  // ================================================================ mirar alrededor inclinando el móvil
  // "Ventana mágica": la inclinación gira la mirada (±16° / ±9°) con algo de paralaje. Android: se activa
  // solo (no pide permiso). iOS: pide permiso con un toque en el botón. El centro se re-ajusta despacio
  // a la postura en la que se sujeta el móvil; los ejes siguen la orientación de la pantalla.
  const tilt = { on: false, yaw: 0, pitch: 0, ty: 0, tp: 0, base: null, got: false };
  const tiltBtn = document.getElementById("tilt-btn");
  const clampD = (v) => Math.max(-25, Math.min(25, v));
  function onOrient(e) {
    if (e.beta == null || e.gamma == null) return;
    tilt.got = true;
    const a = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
    let x, y;
    if (a === 90) { x = e.beta; y = -e.gamma; } else if (a === -90 || a === 270) { x = -e.beta; y = e.gamma; }
    else if (a === 180) { x = -e.gamma; y = -e.beta; } else { x = e.gamma; y = e.beta; }
    if (!tilt.base) tilt.base = { x, y };
    tilt.base.x += (x - tilt.base.x) * 0.004; tilt.base.y += (y - tilt.base.y) * 0.004;   // recentrado lento
    tilt.ty = -clampD(x - tilt.base.x) / 25 * 0.28;
    tilt.tp = clampD(y - tilt.base.y) / 25 * 0.16;
    if (!tilt.on && tilt.auto) setTilt(true);
  }
  function setTilt(on) {
    tilt.on = on; tilt.base = null; tilt.ty = tilt.tp = 0;
    if (tiltBtn) {
      tiltBtn.setAttribute("aria-pressed", String(on));
      // el botón dice siempre la SIGUIENTE acción: activar (mover) o bloquear
      tiltBtn.textContent = (on ? "◉ " : "◎ ") + (on ? DATA.labels.tilt_stop || DATA.labels.tilt_on || "" : DATA.labels.tilt || "");
      tiltBtn.classList.toggle("on", on);
      placeTilt();
    }
  }
  // coloca la píldora de inclinación justo DEBAJO de la pastilla del raíl (y nunca detrás del borde)
  function placeTilt() {
    const btn = document.getElementById("tilt-btn");
    if (!btn || btn.hidden) return;
    const r = rail ? rail.getBoundingClientRect() : null;
    if (r && r.width) btn.style.top = Math.min(r.bottom + 10, innerHeight - 64) + "px";
    else btn.style.top = "240px";
  }
  const touchDev = matchMedia("(pointer: coarse)").matches;
  if (TOUR && touchDev && "DeviceOrientationEvent" in window) {
    const canAsk = typeof DeviceOrientationEvent.requestPermission === "function";   // iOS 13+ (y algún Chromium)
    setTilt(false);
    if (tiltBtn) { tiltBtn.hidden = false; placeTilt(); }   // píldora propia bajo el raíl
    // se escucha siempre: donde no hace falta permiso (Android) se activa sola al llegar el primer dato
    tilt.auto = true; addEventListener("deviceorientation", onOrient);
    if (tiltBtn) tiltBtn.addEventListener("click", async () => {
      if (tilt.on) { setTilt(false); tilt.auto = false; return; }
      tilt.auto = true;
      if (canAsk && !tilt.got) {
        try { if ((await DeviceOrientationEvent.requestPermission()) !== "granted") return; }
        catch (err) { console.warn("[scene3d] orientación", err); }
      }
      if (tilt.got) setTilt(true);   // si aún no hay datos, se encenderá sola con el primero
    });
    // sin sensor y sin forma de pedir permiso: el botón sobra
    setTimeout(() => { if (!tilt.got && !canAsk && tiltBtn) tiltBtn.hidden = true; }, 2500);
  }

  // ---------------------------------------------------------------- bucle
  resize();
  camera.position.copy(goal.p); camera.quaternion.copy(goal.q);
  const clock = new THREE.Clock(), t0 = performance.now();
  const look = new THREE.Quaternion(), tmpE = new THREE.Euler();
  let visible = true;
  document.addEventListener("visibilitychange", () => { visible = !document.hidden; });
  root.classList.add("scene-ready");
  if (TOUR) { const h0 = idx(location.hash.slice(1)); goTo(h0 > 0 ? h0 : 0, true); }
  const hint = document.getElementById("scene-hint");
  if (hint) hint.textContent = DATA.hint || "";

  // medidor de rendimiento: si va lento, menos resolución y sin bloom; si sigue lento, póster
  let level = 0, perfN = 0, perfSum = 0, skip = false, stopped = false;
  function perf(dtReal) {
    if (FORCE || level > 1 || !visible) return;
    if (++perfN < 40) return;              // ignora el arranque (texturas, compilación de shaders)
    perfSum += dtReal;
    if (perfN < 40 + 90) return;
    const avg = perfSum / 90; perfN = 40; perfSum = 0;
    if (avg > 1 / 24 && level === 0) { level = 1; dprCap = 1; renderer.setPixelRatio(1); useBloom = false; }
    else if (avg > 1 / 16 && level === 1) { level = 2; stopped = true; toPoster(); renderer.dispose(); }
  }
  let useBloom = true;   // sólo se usa en horizontal (ver render); el medidor lo puede apagar

  let frameCount = 0;
  function frame() {
    frameCount++;
    if (stopped) return;
    requestAnimationFrame(frame);
    if (!visible) return;
    const dtReal = clock.getDelta();
    perf(dtReal);
    const dt = Math.min(dtReal, 0.25), t = clock.elapsedTime;
    // móvil: con la cámara quieta basta con 30 fps
    const settled = !flight && !tilt.on && camera.position.distanceToSquared(goal.p) < 1e-6;
    if (mode === "stack" && settled) { skip = !skip; if (skip) return; }
    const k = 1 - Math.exp(-dt * 4);   // amortiguado
    if (TOUR) tourCamera(t);
    else camera.position.lerp(goal.p, k);
    // parallax del ratón: pequeño giro sobre la orientación objetivo
    if (tilt.on) { tilt.yaw += (tilt.ty - tilt.yaw) * Math.min(1, dt * 6); tilt.pitch += (tilt.tp - tilt.pitch) * Math.min(1, dt * 6); }
    tmpE.set(mouse.y * 0.025 + (tilt.on ? tilt.pitch : 0), -mouse.x * 0.04 + (tilt.on ? tilt.yaw : 0), 0, "YXZ");
    look.setFromEuler(tmpE).premultiply(goal.q);
    if (!TOUR) {
      camera.quaternion.slerp(look, k);
      if (Math.abs(camera.fov - goal.fov) > 0.01) { camera.fov += (goal.fov - camera.fov) * k; camera.updateProjectionMatrix(); }
    }

    for (const p of svcPanels) p.mesh.position.y = p.mesh.userData.base + Math.sin(t * 1.2 + p.mesh.userData.phase) * 0.006;
    globe.rotation.y = t * 0.4;
    typed = Math.min(totalChars + 40, (performance.now() - t0) / 1000 * 24);
    if (screen && Math.floor(t * 10) !== scr.last) { scr.last = Math.floor(t * 10); scr.redraw(Math.floor(typed)); }

    // cada grupo de hologramas sólo en su capítulo (y tenue en la intro)
    const cur = CHAPTERS[chapter] ? CHAPTERS[chapter].el.id : "top";
    // foco (visita): la pantalla del monitor se atenúa en las paradas que no van de ella
    if (TOUR && screen) {
      const want = cur === "top" || cur === "software" || cur === "contact" ? 1 : 0.07;
      const c = screen.material.color; c.setScalar(c.r + (want - c.r) * Math.min(1, dt * 3));
    }
    for (const c of clickables) {
      if (c.solid) continue;
      const want = c.chapter === "*" || c.chapter === cur ? 1 : cur === "top" ? (c.intro ?? 0.7) : 0;
      const m = c.mesh.material;
      m.opacity += (want * (c.chapter === "*" ? 0.95 : 1) - m.opacity) * Math.min(1, dt * 5);
      c.mesh.visible = m.opacity > 0.01;
    }
    if (mode === "split") pick();
    placeTerminal();
    if (useBloom && mode === "split") composer.render(); else renderer.render(scene, camera);
  }
  frame();
}
