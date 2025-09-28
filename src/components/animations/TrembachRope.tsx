import React, { useEffect, useRef } from 'react';

interface TrembachRopeProps {
  sectionId: string;
  direction: 'tl-br' | 'tr-bl' | 'bl-tr' | 'br-tl';
  className?: string;
}

export const TrembachRope: React.FC<TrembachRopeProps> = ({
  sectionId,
  direction = 'tl-br',
  className = '',
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGCircleElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Generate smooth meandering cubic path between corners
  const cubicBezierPath = (
    x0: number, y0: number, 
    x1: number, y1: number, 
    waviness = 0.22, 
    segments = 5
  ): string => {
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
    const catmullRom2bezier = (points: { x: number; y: number }[]): string => {
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
    };

    return catmullRom2bezier(pts);
  };

  useEffect(() => {
    const section = document.getElementById(sectionId);
    const path = pathRef.current;
    const marker = markerRef.current;
    
    if (!section || !path || !marker) return;
    
    sectionRef.current = section;

    // Determine start/end corners based on direction
    let start = { x: 0.05, y: 0.05 }, end = { x: 0.95, y: 0.95 }; // tl-br default
    if (direction === 'tr-bl') { start = { x: 0.95, y: 0.05 }; end = { x: 0.05, y: 0.95 }; }
    if (direction === 'bl-tr') { start = { x: 0.05, y: 0.95 }; end = { x: 0.95, y: 0.05 }; }
    if (direction === 'br-tl') { start = { x: 0.95, y: 0.95 }; end = { x: 0.05, y: 0.05 }; }

    // Build the path
    const d = cubicBezierPath(start.x, start.y, end.x, end.y, 0.22, 5);
    path.setAttribute('d', d);

    // Prepare stroke-dash for draw-on-scroll
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const sectionProgress = (el: HTMLElement): number => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - vh;
      if (total <= 1) return 0;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      return p;
    };

    const onScroll = () => {
      const p = sectionProgress(section);
      
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
      path.style.filter = `drop-shadow(0 0 ${6 + 10 * eased}px hsl(var(--primary) / ${0.2 + 0.3 * eased}))`;
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { 
          onScroll(); 
          ticking = false; 
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      onScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial call
    onScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [sectionId, direction]);

  return (
    <svg
      ref={svgRef}
      className={`rope-svg ${className}`}
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <path
        ref={pathRef}
        className="rope-path"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ vectorEffect: 'non-scaling-stroke' }}
      />
      <circle
        ref={markerRef}
        className="rope-marker"
        r="8"
        cx="0"
        cy="0"
        fill="white"
        stroke="rgba(0,0,0,.4)"
        strokeWidth="2"
        style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,.5))' }}
      />
    </svg>
  );
};