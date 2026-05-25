// constellation.js — Co-Cognition Map domain constellation
// v1.1 · 2026-05-25 · Fixed VitePress hydration race condition
// Pure Canvas, zero dependencies. SSR-safe (only runs in browser).

(function() { if (typeof window === 'undefined') return;

var zhDomains = ["量子因果","生态网络学","遗传编码学","气候经济学","神经法学","行为流行病学","认知神经人类学","微生物组社会学","神经美学","演化伦理学","地质叙事学","目的论生物学","环境伦理学","软体机器人学","计算法学","政治机制设计","语言学信息论","社会学网络科学","经济史学","行为人机交互","经济软件工程","信息哲学","计算心灵哲学","算法伦理学","复杂性认识论","数学美学","基因组信息论","音乐信息学","口头传统信息学","能源生态学"];
var enDomains = ["Quantum Causality","Ecological Network Science","Genetic Coding Theory","Climate Economics","Neurolaw","Behavioral Epidemiology","Cognitive Neuroanthropology","Microbiome Sociology","Neuroaesthetics","Evolutionary Ethics","Geological Narratology","Teleological Biology","Environmental Ethics","Soft Robotics","Computational Law","Political Mechanism Design","Linguistic Information Theory","Sociological Network Science","Economic History","Behavioral HCI","Economic Software Engineering","Information Philosophy","Computational Philosophy of Mind","Algorithmic Ethics","Complexity Epistemology","Mathematical Aesthetics","Genomic Information Theory","Music Informatics","Oral Tradition Informatics","Energy Ecology"];

var EDGE_DIST = 150;
var FONT = '400 13px system-ui, -apple-system, sans-serif';
var started = false;

function seedRand(s) { return function() { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; }; }

function init(el) {
  if (started) return;
  started = true;

  var W = el.clientWidth, H = el.clientHeight;
  if (W === 0 || H === 0) { started = false; return; }

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var cv = document.createElement('canvas');
  cv.width = W * dpr; cv.height = H * dpr;
  cv.style.width = W + 'px'; cv.style.height = H + 'px';
  el.appendChild(cv);
  var ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);

  var lang = document.documentElement.lang || 'zh-CN';
  var names = lang.startsWith('en') ? enDomains : zhDomains;

  var nodes = [];
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
}

// Try immediate init (fast browsers / non-VitePress)
var el = document.getElementById('constellation-map');
if (el) { init(el); }

// Fallback: wait for VitePress hydration to insert the div
if (!started) {
  var mo = new MutationObserver(function() {
    el = document.getElementById('constellation-map');
    if (el) { mo.disconnect(); init(el); }
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

// Last resort: DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  if (!started) {
    el = document.getElementById('constellation-map');
    if (el) init(el);
  }
});

})();
