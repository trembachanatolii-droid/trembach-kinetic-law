/**
 * Trembach Rope Scroll – section-by-section rope that animates corner-to-corner.
 * Vanilla JS, SVG-based (no external libs). Each .rope-block must have:
 *   <svg class="rope-svg" viewBox="0 0 1000 600">
 *     <path class="rope-path" />
 *     <circle class="rope-marker" r="8" />
 *   </svg>
 * And a data-rope attribute: "tl-br" or "tr-bl" for start→end corners (also supports bl-tr, br-tl).
 */

(function () {
  const blocks = Array.from(document.querySelectorAll('.rope-block'));
  const vh = () => Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  function cubicBezierPath(x0, y0, x1, y1, waviness = 0.22, segments = 5) {
    // Generates a smooth meandering cubic path between corners.
    // Returns an SVG 'd' string sized for a 1000x600 viewBox.
    const W = 1000, H = 600;
    const p0 = { x: x0 * W, y: y0 * H };
    const pN = { x: x1 * W, y: y1 * H };

    const pts = [p0];
    for (let i = 1; i < segments; i++) {
      const t = i / segments;
      const x = p0.x + (pN.x - p0.x) * t;
      const y = p0.y + (pN.y - p0.y) * t;

      // Per-segment sinusoidal offset perpendicular to main direction
      const dx = pN.x - p0.x, dy = pN.y - p0.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len, ny = dx / len; // normal

      // amplitude scales with distance + sine envelope for organic look
      const amp = waviness * 120 * Math.sin(Math.PI * t);
      pts.push({ x: x + nx * amp, y: y + ny * amp });
    }
    pts.push(pN);

    // Convert polyline to cubic Bezier chain using Catmull-Rom to Bezier
    function catmullRom2bezier(points) {
      const d = [];
      for (let i = -1; i < points.length - 2; i++) {
        const p0 = points[Math.max(i, 0)];
        const p1 = points[i + 1];
        const p2 = points[i + 2];
        const p3 = points[Math.min(i + 3, points.length - 1)];
        const c1x = p1.x + (p2.x - p0.x) / 6;
        const c1y = p1.y + (p2.y - p0.y) / 6;
        const c2x = p2.x - (p3.x - p1.x) / 6;
        const c2y = p2.y - (p3.y - p1.y) / 6;
        d.push(`C ${c1x.toFixed(2)},${c1y.toFixed(2)} ${c2x.toFixed(2)},${c2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`);
      }
      return `M ${points[0].x.toFixed(2)},${points[0].y.toFixed(2)} ` + d.join(' ');
    }

    return catmullRom2bezier(pts);
  }

  function buildPathFor(block) {
    const svg = block.querySelector('.rope-svg');
    const path = svg.querySelector('.rope-path');
    const marker = svg.querySelector('.rope-marker');

    // Determine start/end corners
    const mode = (block.getAttribute('data-rope') || 'tl-br').toLowerCase();
    let start = { x: 0.05, y: 0.05 }, end = { x: 0.95, y: 0.95 }; // tl-br default
    if (mode === 'tr-bl') { start = { x: 0.95, y: 0.05 }; end = { x: 0.05, y: 0.95 }; }
    if (mode === 'bl-tr') { start = { x: 0.05, y: 0.95 }; end = { x: 0.95, y: 0.05 }; }
    if (mode === 'br-tl') { start = { x: 0.95, y: 0.95 }; end = { x: 0.05, y: 0.05 }; }

    // Build a smooth meandering cubic path
    const d = cubicBezierPath(start.x, start.y, end.x, end.y, 0.22, 5);
    path.setAttribute('d', d);

    // Prepare stroke-dash for draw-on-scroll
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    // Store refs on the element
    block._rope = { svg, path, marker, len };
  }

  function sectionProgress(el) {
    const rect = el.getBoundingClientRect();
    const total = rect.height - vh();
    if (total <= 1) return 0;
    const p = Math.min(1, Math.max(0, -rect.top / total));
    return p;
  }

  function onScroll() {
    for (const block of blocks) {
      if (!block._rope) continue;
      const { path, marker, len } = block._rope;
      const p = sectionProgress(block); // 0..1

      // Ease for nicer feel
      const eased = p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p + 2, 3) / 2;

      // Reveal path
      const draw = len * eased;
      path.style.strokeDashoffset = `${len - draw}`;

      // Move marker along path
      const pt = path.getPointAtLength(draw);
      marker.setAttribute('cx', pt.x.toFixed(2));
      marker.setAttribute('cy', pt.y.toFixed(2));

      // Optional: subtle marker breathing + glow intensifies near end
      const r = 8 * (1 + Math.sin(p * Math.PI * 2) * 0.06);
      marker.setAttribute('r', r.toFixed(2));
      path.style.filter = `drop-shadow(0 0 ${6 + 10 * eased}px rgba(255,210,77,${0.2 + 0.3 * eased}))`;
    }
  }

  function rebuildAll() {
    blocks.forEach(buildPathFor);
    onScroll();
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', rebuildAll);
  window.addEventListener('load', rebuildAll);
  rebuildAll();
})();
