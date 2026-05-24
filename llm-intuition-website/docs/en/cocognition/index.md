<div id="constellation-map" style="width:100%;max-width:860px;height:340px;margin:1.8rem auto 1rem;position:relative;overflow:hidden;border-radius:8px"></div>
<style>
#constellation-map canvas { display:block; width:100%; height:100%; }
</style>
<script>
(function() { if (typeof window === 'undefined') return;
var el = document.getElementById('constellation-map');
if (!el) return;
var W = el.clientWidth, H = el.clientHeight;
var dpr = Math.min(window.devicePixelRatio || 1, 2);
var cv = document.createElement('canvas');
cv.width = W * dpr; cv.height = H * dpr;
cv.style.width = W + 'px'; cv.style.height = H + 'px';
el.appendChild(cv);
var ctx = cv.getContext('2d');
ctx.scale(dpr, dpr);

var zhDomains = ["量子因果","生态网络学","遗传编码学","气候经济学","神经法学","行为流行病学","认知神经人类学","微生物组社会学","神经美学","演化伦理学","地质叙事学","目的论生物学","环境伦理学","软体机器人学","计算法学","政治机制设计","语言学信息论","社会学网络科学","经济史学","行为人机交互","经济软件工程","信息哲学","计算心灵哲学","算法伦理学","复杂性认识论","数学美学","基因组信息论","音乐信息学","口头传统信息学","能源生态学"];
var enDomains = ["Quantum Causality","Ecological Network Science","Genetic Coding Theory","Climate Economics","Neurolaw","Behavioral Epidemiology","Cognitive Neuroanthropology","Microbiome Sociology","Neuroaesthetics","Evolutionary Ethics","Geological Narratology","Teleological Biology","Environmental Ethics","Soft Robotics","Computational Law","Political Mechanism Design","Linguistic Information Theory","Sociological Network Science","Economic History","Behavioral HCI","Economic Software Engineering","Information Philosophy","Computational Philosophy of Mind","Algorithmic Ethics","Complexity Epistemology","Mathematical Aesthetics","Genomic Information Theory","Music Informatics","Oral Tradition Informatics","Energy Ecology"];

var lang = document.documentElement.lang || 'zh-CN';
var names = lang.startsWith('en') ? enDomains : zhDomains;

var nodes = [];
var EDGE_DIST = 150;
var FONT = '400 13px system-ui, -apple-system, sans-serif';

function seedRand(s) { return function() { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; }; }
var rng = seedRand(108);
for (var i = 0; i < names.length; i++) {
  nodes.push({
    x: 40 + rng() * (W - 80),
    y: 30 + rng() * (H - 60),
    vx: (rng() - 0.5) * 0.35,
    vy: (rng() - 0.5) * 0.35,
    name: names[i]
  });
}

var isDark = document.documentElement.classList.contains('dark');

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (var i = 0; i < nodes.length; i++) {
    for (var j = i + 1; j < nodes.length; j++) {
      var dx = nodes[i].x - nodes[j].x;
      var dy = nodes[i].y - nodes[j].y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < EDGE_DIST) {
        var alpha = (1 - dist / EDGE_DIST) * 0.5;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = isDark ? 'rgba(180,200,230,' + alpha + ')' : 'rgba(60,90,130,' + alpha + ')';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }
  for (var k = 0; k < nodes.length; k++) {
    var n = nodes[k];
    ctx.beginPath();
    ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? 'rgba(190,210,240,0.55)' : 'rgba(50,80,120,0.50)';
    ctx.fill();
    ctx.font = FONT;
    ctx.fillStyle = isDark ? 'rgba(200,215,235,0.58)' : 'rgba(45,75,110,0.52)';
    ctx.textAlign = 'center';
    ctx.fillText(n.name, n.x, n.y + 12);
  }
}

function update() {
  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    n.x += n.vx; n.y += n.vy;
    if (n.x < -20) n.x = W + 10;
    if (n.x > W + 20) n.x = -10;
    if (n.y < -20) n.y = H + 10;
    if (n.y > H + 20) n.y = -10;
    n.vx += (Math.random() - 0.5) * 0.03;
    n.vy += (Math.random() - 0.5) * 0.03;
    var spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
    if (spd > 0.5) { n.vx *= 0.5 / spd; n.vy *= 0.5 / spd; }
  }
  draw();
}

var obs = new MutationObserver(function() {
  isDark = document.documentElement.classList.contains('dark');
});
obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

var ro = new ResizeObserver(function() {
  var nw = el.clientWidth, nh = el.clientHeight;
  if (Math.abs(nw - W) < 3 && Math.abs(nh - H) < 3) return;
  W = nw; H = nh;
  cv.width = W * dpr; cv.height = H * dpr;
  cv.style.width = W + 'px'; cv.style.height = H + 'px';
  ctx.setTransform(1,0,0,1,0,0);
  ctx.scale(dpr, dpr);
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].x = Math.min(Math.max(nodes[i].x, 40), W - 40);
    nodes[i].y = Math.min(Math.max(nodes[i].y, 30), H - 30);
  }
});
ro.observe(el);

function tick() { update(); requestAnimationFrame(tick); }
tick();
})();
</script>

# Co-Cognition Map

> 🚧 Coming Soon

Human cognition and artificial intelligence do not exist in isolation. Across every domain of thought — from creative writing to mathematical proof, from ethical reasoning to pattern recognition — human minds and LLMs engage in an intricate, ever-shifting dance. The Co-Cognition Map is Co-Cognition Lab's answer to a deceptively simple question: *What does the full landscape of human-AI cognitive collaboration actually look like?*

## What Is the Co-Cognition Map?

The Co-Cognition Map (Project 2) is a **cross-disciplinary domain taxonomy** designed to systematically chart the terrain where human cognition and LLM capabilities converge, diverge, and complement one another. Building on the theoretical foundations laid by Project 1 — our work on LLM Intuition and the Complementarity Map — this project transforms abstract insight into a practical, navigable framework.

Unlike existing taxonomies that treat AI capabilities or cognitive tasks in isolation, the Co-Cognition Map is built from the ground up to capture **interaction dynamics**: how human intuition and LLM processing trade off, reinforce, and sometimes interfere with each other across different types of problems.

## The Taxonomy Framework

At the heart of the Co-Cognition Map lies a multi-dimensional classification system. Each cognitive domain is evaluated along carefully designed **scoring dimensions** that capture:

- **Complementarity potential** — Where do human and AI strengths combine to exceed either alone?
- **Autonomy risk** — In which domains does heavy LLM use risk constitutive degradation of human capability?
- **Collaboration readiness** — How mature are the interfaces for genuine co-cognition in this space?
- **Intuitive load** — How heavily does the domain rely on the kinds of fast, non-verbal cognition that our LLM Intuition research has mapped?

This scoring system enables a nuanced view: not simply "AI can or cannot do this," but rather *"what kind of partnership is possible here, and what are the conditions for making it fruitful?"*

## Current Progress

**Status**: Taxonomy framework v0.2 complete, external feedback received, domain annotation not yet started.

**Expected**: June–July 2026 (after framework finalization)
