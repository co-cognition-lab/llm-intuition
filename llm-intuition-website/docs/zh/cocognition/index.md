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
  var lineClr = isDark ? 'rgba(180,200,230,0.13)' : 'rgba(60,90,130,0.10)';
  var nodeClr = isDark ? 'rgba(190,210,240,0.55)' : 'rgba(50,80,120,0.50)';
  var textClr = isDark ? 'rgba(200,215,235,0.58)' : 'rgba(45,75,110,0.52)';

  // draw lines
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

  // draw nodes and labels
  for (var k = 0; k < nodes.length; k++) {
    var n = nodes[k];
    // dot
    ctx.beginPath();
    ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = nodeClr;
    ctx.fill();
    // label
    ctx.font = FONT;
    ctx.fillStyle = textClr;
    ctx.textAlign = 'center';
    ctx.fillText(n.name, n.x, n.y + 12);
  }
}

function update() {
  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    n.x += n.vx; n.y += n.vy;
    // wrap around edges
    if (n.x < -20) n.x = W + 10;
    if (n.x > W + 20) n.x = -10;
    if (n.y < -20) n.y = H + 10;
    if (n.y > H + 20) n.y = -10;
    // gentle random perturbation
    n.vx += (Math.random() - 0.5) * 0.03;
    n.vy += (Math.random() - 0.5) * 0.03;
    var spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
    var maxSpd = 0.5;
    if (spd > maxSpd) { n.vx *= maxSpd / spd; n.vy *= maxSpd / spd; }
  }
  draw();
}

// theme observer
var obs = new MutationObserver(function() {
  isDark = document.documentElement.classList.contains('dark');
});
obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

// handle resize
var ro = new ResizeObserver(function() {
  var nw = el.clientWidth, nh = el.clientHeight;
  if (Math.abs(nw - W) < 3 && Math.abs(nh - H) < 3) return;
  W = nw; H = nh;
  cv.width = W * dpr; cv.height = H * dpr;
  cv.style.width = W + 'px'; cv.style.height = H + 'px';
  ctx.setTransform(1,0,0,1,0,0);
  ctx.scale(dpr, dpr);
  // reposition nodes within new bounds
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

# Co-Cognition 全景图

> 🚧 施工中 — 内容持续更新

## 项目定位

**绘制一张 AI 与人类可以共同探索的认知版图**——一个"真相宇宙"的全景扫描。不是替代已有学科知识，而是识别和映射那些因方法论范式不兼容而少有交叉、但适合 co-cognition 机制拓展的领域边界。

## 当前进展

- **v0.2**（已完成）：co-cognition 与已有学科知识的关系假说明确，全景图"坐标系"定义清晰
- **v0.3**（已完成）：分类学框架 + 六维度评分体系 + 信息架构设计
- **v0.4**（进行中）：框架系统性升级——优先级算法非线性化、质量防线升级、三源交叉填充模式
- **下一步**：从 108 个候选域中筛选 50 个进入深度推演轮（R2）

## 核心方法

采用四步框架：
1. **问题定位层** — 澄清 co-cognition 到底在问什么
2. **框架层** — 建立扫描标准与分类学
3. **填充与推演层** — 候选域识别 × 交叉推演 × 优先级排序
4. **输出与应用层** — 发布全景图 + 路线图

## 预计完成

2026 年 6-7 月发布 v1.0 初版。

## 相关阅读

- [LLM 直觉盲区探索](/zh/main) — 本项目的理论基础之一
- [竞争格局推演 v4](/zh/competition) — 理论在 LLM 赛道的应用