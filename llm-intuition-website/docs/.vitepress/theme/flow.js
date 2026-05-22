// flow.js — Plan A: Hero title character-level mouse repel
// Only on desktop (hover: hover). Pure JS, zero dependencies.
// Wrapped for SSR safety (VitePress builds in Node where document is undefined)
if (typeof document !== 'undefined') { (() => {
"use strict";

const RADIUS = 80      // mouse influence radius (px)
const MAX_OFFSET = 4   // max character displacement (px)

function initHeroFlow() {
  // Desktop only
  if (!window.matchMedia('(hover: hover)').matches) return

  const hero = document.querySelector('.VPHero')
  if (!hero) return

  // Collect all hero text elements: .name, .text, .tagline
  const targets = [
    hero.querySelector('.name'),
    hero.querySelector('.text'),
    hero.querySelector('.tagline')
  ].filter(Boolean)
  if (!targets.length) return

  // Split each target's text into per-character spans;
  // collect all created spans into a flat array for mouse tracking.
  const flowChars = []

  for (const el of targets) {
    const text = el.textContent || ''
    el.innerHTML = ''
    for (const char of text) {
      const span = document.createElement('span')
      if (char === ' ') {
        span.innerHTML = '&nbsp;'
        span.style.display = 'inline-block'
        span.style.width = '0.3em'
        span.setAttribute('aria-hidden', 'true')
      } else {
        span.textContent = char
        span.style.display = 'inline-block'
        span.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
      el.appendChild(span)
      flowChars.push(span)
    }
  }

  if (!flowChars.length) return

  document.addEventListener('mousemove', (e) => {
    const mx = e.clientX
    const my = e.clientY
    for (const char of flowChars) {
      if (char.hasAttribute('aria-hidden')) continue // skip whitespace spans
      const r = char.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = cx - mx
      const dy = cy - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < RADIUS && dist > 0) {
        const force = 1 - dist / RADIUS
        const offset = force * MAX_OFFSET
        char.style.transform = `translate(${(dx / dist) * offset}px, ${(dy / dist) * offset}px)`
      } else {
        char.style.transform = 'translate(0, 0)'
      }
    }
  })
}

// Run after DOM + Vue hydration (200ms to ensure VitePress finishes rendering)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initHeroFlow, 200))
} else {
  setTimeout(initHeroFlow, 200)
}

})(); } // end SSR guard
