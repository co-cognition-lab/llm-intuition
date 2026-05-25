// constellation.js — Co-Cognition Map domain constellation
// v1.2 · 2026-05-25 · Fixed document.body null crash + VitePress hydration robustness
// Pure Canvas, zero dependencies. SSR-safe (only runs in browser).

(function() {
  if (typeof window === 'undefined') return;

  var zhDomains = ["量子因果","生态网络学","遗传编码学","气候经济学","神经法学","行为流行病学","认知神经人类学","微生物组社会学","神经美学","演化伦理学","地质叙事学","目的论生物学","环境伦理学","软体机器人学","计算法学","政治机制设计","语言学信息论","社会学网络科学","经济史学","行为人机交互","经济软件工程","信息哲学","计算心灵哲学","算法伦理学","复杂性认识论","数学美学","基因组信息论","音乐信息学","口头传统信息学","能源生态学"];
  var enDomains = ["Quantum Causality","Ecological Network Science","Genetic Coding Theory","Climate Economics","Neurolaw","Behavioral Epidemiology","Cognitive Neuroanthropology","Microbiome Sociology","Neuroaesthetics","Evolutionary Ethics","Geological Narratology","Teleological Biology","Environmental Ethics","Soft Robotics","Computational Law","Political Mechanism Design","Linguistic Information Theory","Sociological Network Science","Economic History","Behavioral HCI","Economic Software Engineering","Information Philosophy","Computational Philosophy of Mind","Algorithmic Ethics","Complexity Epistemology","Mathematical Aesthetics","Genomic Information Theory","Music Informatics","Oral Tradition Informatics","Energy Ecology"];

  var EDGE_DIST = 150;
  var FONT = '400 13px system-ui, -apple-system, sans-serif';
  var CONTAINER_ID = 'constellation-map';

  // State tracking — more robust than a single boolean
  var state = {
    initialized: false,   // true when canvas is created and running
    destroyed: false,     // true if the canvas was removed from DOM
    container: null,      // reference to the constellation-map div
    canvas: null,         // reference to the canvas element
    rafId: null           // requestAnimationFrame ID for cleanup
  };

  function seedRand(s) {
    return function() {
      s = (s * 16807 + 0) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  /**
   * Main initialization — creates canvas, sets up animation loop,
   * handles dark mode, resize, and VitePress hydration edge cases.
   */
  function init(el) {
    // Prevent double-init on the same element
    if (state.initialized && state.container === el && state.canvas && state.canvas.isConnected) {
      return;
    }

    // Clean up previous instance if re-initializing (e.g., after VitePress re-render)
    if (state.canvas && state.canvas.parentNode) {
      state.canvas.parentNode.removeChild(state.canvas);
    }
    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
      state.rafId = null;
    }

    var W = el.clientWidth, H = el.clientHeight;
    // If container has zero size, retry after a short delay (CSS may not be applied yet)
    if (W === 0 || H === 0) {
      setTimeout(function() {
        if (!state.initialized || state.destroyed) {
          tryInit(el);
        }
      }, 300);
      return;
    }

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var cv = document.createElement('canvas');
    cv.width = W * dpr;
    cv.height = H * dpr;
    cv.style.width = W + 'px';
    cv.style.height = H + 'px';
    cv.style.display = 'block';  // prevent inline-block gap issues
    el.appendChild(cv);

    var ctx = cv.getContext('2d');
    if (!ctx) {
      console.error('[constellation] Canvas 2D context not available');
      return;
    }
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

    // Observe dark mode class changes
    var obs = new MutationObserver(function() {
      isDark = document.documentElement.classList.contains('dark');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Observe container resize
    var ro = new ResizeObserver(function(entries) {
      var cr = entries[0].contentRect;
      var nw = Math.round(cr.width), nh = Math.round(cr.height);
      if (nw === 0 || nh === 0) return;  // skip if hidden
      if (Math.abs(nw - W) < 3 && Math.abs(nh - H) < 3) return;
      W = nw; H = nh;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = W + 'px'; cv.style.height = H + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].x = Math.min(Math.max(nodes[i].x, 40), W - 40);
        nodes[i].y = Math.min(Math.max(nodes[i].y, 30), H - 30);
      }
    });
    ro.observe(el);

    // Animation loop with isConnected check
    function tick() {
      if (!cv.isConnected) {
        // Canvas was removed from DOM (VitePress hydration re-render)
        state.destroyed = true;
        state.initialized = false;
        state.canvas = null;
        state.rafId = null;
        obs.disconnect();
        ro.disconnect();
        // Re-observe for container re-appearance
        observeForContainer();
        return;
      }
      update();
      state.rafId = requestAnimationFrame(tick);
    }

    // Update state
    state.initialized = true;
    state.destroyed = false;
    state.container = el;
    state.canvas = cv;

    tick();
  }

  /**
   * Try to find the container element and initialize.
   * Safe to call multiple times.
   */
  function tryInit(preferredEl) {
    var el = preferredEl || document.getElementById(CONTAINER_ID);
    if (el) {
      init(el);
    }
    return !!el;
  }

  /**
   * Set up MutationObserver to watch for the constellation-map container.
   * Handles the case where document.body may not exist yet (script in <head>).
   */
  var containerObserver = null;

  function observeForContainer() {
    // If already initialized and canvas is still connected, no need to observe
    if (state.initialized && state.canvas && state.canvas.isConnected) return;

    // Clean up previous observer
    if (containerObserver) {
      containerObserver.disconnect();
      containerObserver = null;
    }

    containerObserver = new MutationObserver(function(mutations) {
      // If not yet initialized, try to find the container
      if (!state.initialized) {
        tryInit();
        return;
      }
      // If destroyed (canvas removed), check if container re-appeared
      if (state.destroyed) {
        var el = document.getElementById(CONTAINER_ID);
        if (el && el !== state.container) {
          state.destroyed = false;
          init(el);
        }
      }
    });

    // CRITICAL FIX: document.body may be null when script is in <head>.
    // Fall back to observing document.documentElement until body appears.
    var observeTarget = document.body || document.documentElement;
    try {
      containerObserver.observe(observeTarget, { childList: true, subtree: true });
    } catch (e) {
      console.error('[constellation] MutationObserver failed:', e);
    }
  }

  // ─── Initialization sequence ───

  // 1. Immediate attempt (for cached pages / fast paths)
  tryInit();

  // 2. Observe for container appearance (handles VitePress hydration)
  if (!state.initialized) {
    observeForContainer();
  }

  // 3. DOMContentLoaded / readystatechange fallback
  function onReady() {
    if (!state.initialized) {
      tryInit();
    }
    // If still not initialized (container missing), keep observing
    if (!state.initialized) {
      observeForContainer();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    // DOMContentLoaded already fired — call immediately
    onReady();
  }

  // 4. Final safety net: retry on load event (all resources loaded)
  window.addEventListener('load', function() {
    if (!state.initialized || state.destroyed) {
      tryInit();
    }
    if (!state.initialized) {
      observeForContainer();
    }
  });

  // 5. Re-initialization on VitePress client-side navigation (SPA navigation)
  // VitePress replaces page content without full reload.
  var navObserver = null;
  function setupNavObserver() {
    if (navObserver) return;  // already set up
    navObserver = new MutationObserver(function() {
      // Check if our container was replaced
      if (state.initialized && state.canvas && !state.canvas.isConnected) {
        state.destroyed = true;
        state.initialized = false;
        state.canvas = null;
        tryInit();
      }
      // Also check if we were never initialized (new page)
      if (!state.initialized) {
        tryInit();
        if (!state.initialized) observeForContainer();
      }
    });
    // Observe the main content area if available
    var contentArea = document.getElementById('app') || document.body || document.documentElement;
    try {
      navObserver.observe(contentArea, { childList: true, subtree: true });
    } catch (e) {
      console.error('[constellation] Navigation observer failed:', e);
    }
  }
  setupNavObserver();

})();
