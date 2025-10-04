import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { WebGLPracticeCard } from './WebGLPracticeCard';

// Import practice area images
import mesotheliomaAsbestosImg from '@/assets/practice-areas/mesothelioma-asbestos.jpg';
import silicosisInjuriesImg from '@/assets/practice-areas/silicosis-injuries-bright.jpg';
import talcBabyPowderImg from '@/assets/practice-areas/talc-baby-powder.jpg';
import carAccidentsImg from '@/assets/practice-areas/car-accidents-bright.jpg';
import uberLyftAccidentsImg from '@/assets/practice-areas/uber-lyft-accidents.jpg';
import dogBitesImg from '@/assets/practice-areas/dog-bites-bright.jpg';
import premisesLiabilityImg from '@/assets/practice-areas/premises-liability-bright.jpg';
import medicalMalpracticeImg from '@/assets/practice-areas/medical-malpractice.jpg';

gsap.registerPlugin(ScrollTrigger);

interface PracticeArea {
  id: string;
  title: string;
  tags: string;
  image: string;
  slug: string;
  colorBg: string;
  colorText: string;
  size: 'small' | 'medium' | 'large';
}

const practiceAreas: PracticeArea[] = [
  {
    id: 'mesothelioma-asbestos',
    title: 'Mesothelioma & Asbestos',
    tags: 'toxic exposure • litigation • compensation',
    image: mesotheliomaAsbestosImg,
    slug: 'mesothelioma-asbestos',
    colorBg: '#1a1a1a',
    colorText: '#ffffff',
    size: 'large'
  },
  {
    id: 'silicosis-injuries',
    title: 'Silicosis',
    tags: 'occupational disease • workers rights',
    image: silicosisInjuriesImg,
    slug: 'silicosis-injuries',
    colorBg: '#2d3748',
    colorText: '#ffffff',
    size: 'medium'
  },
  {
    id: 'talc-baby-powder',
    title: 'Talc',
    tags: 'product liability • cancer claims',
    image: talcBabyPowderImg,
    slug: 'talc-baby-powder-cancer',
    colorBg: '#4a5568',
    colorText: '#ffffff',
    size: 'medium'
  },
  {
    id: 'car-accidents',
    title: 'Car Accidents',
    tags: 'auto collision • injury claims • insurance',
    image: carAccidentsImg,
    slug: 'car-accidents',
    colorBg: '#dc2626',
    colorText: '#ffffff',
    size: 'large'
  },
  {
    id: 'uber-lyft-accidents',
    title: 'Uber/Lyft Accidents',
    tags: 'rideshare • passenger injury • liability',
    image: uberLyftAccidentsImg,
    slug: 'uber-lyft-accidents',
    colorBg: '#059669',
    colorText: '#ffffff',
    size: 'small'
  },
  {
    id: 'dog-bites',
    title: 'Dog Bites',
    tags: 'animal attacks • strict liability • compensation',
    image: dogBitesImg,
    slug: 'dog-bites-animal-attacks',
    colorBg: '#d97706',
    colorText: '#ffffff',
    size: 'medium'
  },
  {
    id: 'premises-liability',
    title: 'Premises Liability',
    tags: 'slip & fall • property negligence • accidents',
    image: premisesLiabilityImg,
    slug: 'premises-liability',
    colorBg: '#7c3aed',
    colorText: '#ffffff',
    size: 'medium'
  },
  {
    id: 'medical-malpractice',
    title: 'Medical Malpractice',
    tags: 'healthcare negligence • misdiagnosis • errors',
    image: medicalMalpracticeImg,
    slug: 'medical-malpractice',
    colorBg: '#0891b2',
    colorText: '#ffffff',
    size: 'large'
  },
];

const PracticeAreasLusion: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [normalizedMouse, setNormalizedMouse] = useState(new THREE.Vector2(0.5, 0.5));
  const [cardPositions, setCardPositions] = useState<Array<{ x: number; y: number; z: number; width: number; height: number; visible: boolean }>>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
    };
  }, []);

  // Mouse tracking for magnetic effect and WebGL
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Normalize mouse position for WebGL (0 to 1)
      if (typeof window !== 'undefined') {
        setNormalizedMouse(new THREE.Vector2(
          e.clientX / window.innerWidth,
          1 - (e.clientY / window.innerHeight)
        ));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sync DOM card positions with WebGL planes
  useEffect(() => {
    const updatePositions = () => {
      if (!gridRef.current) return;

      const positions = cardsRef.current.map((card, index) => {
        if (!card) return { x: 0, y: 0, z: 0, width: 0, height: 0, visible: false };

        const rect = card.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        
        // Convert DOM coordinates to WebGL coordinates
        const x = (rect.left + rect.width / 2 - window.innerWidth / 2) / 100;
        const y = -(rect.top + rect.height / 2 + scrollY - window.innerHeight / 2) / 100;
        const width = rect.width / 100;
        const height = rect.height / 100;
        
        // Check if card is in viewport
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        
        return { x, y, z: index * -0.1, width, height, visible };
      });

      setCardPositions(positions);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    window.addEventListener('scroll', updatePositions);

    const interval = setInterval(updatePositions, 100);

    return () => {
      window.removeEventListener('resize', updatePositions);
      window.removeEventListener('scroll', updatePositions);
      clearInterval(interval);
    };
  }, []);

  // Staggered entrance animations
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0.9,
        y: 60,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        stagger: {
          amount: 0.8,
          from: 'start',
          ease: 'power2.out',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  // Slot machine letter effect on hover
  const handleCardHover = (index: number, isEntering: boolean) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const titleElement = card.querySelector('.project-title') as HTMLElement;
    if (!titleElement || titleElement.dataset.split === 'true') return;

    // Split text into characters
    titleElement.dataset.split = 'true';
    const text = titleElement.textContent || '';
    titleElement.innerHTML = '';

    text.split('').forEach((char, i) => {
      const charWrapper = document.createElement('div');
      charWrapper.className = 'char-wrapper';
      charWrapper.style.cssText = 'display: inline-block; position: relative; overflow: hidden; height: 1.2em; vertical-align: top;';
      
      const charList = document.createElement('div');
      charList.className = 'char-list';
      charList.style.cssText = 'display: flex; flex-direction: column; transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);';
      
      // Create 4 copies of the character for slot machine effect
      for (let j = 0; j < 4; j++) {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.cssText = 'display: block; height: 1.2em;';
        charList.appendChild(span);
      }
      
      charWrapper.appendChild(charList);
      titleElement.appendChild(charWrapper);

      // Animate
      if (isEntering) {
        gsap.fromTo(
          charList,
          { y: '-300%' },
          {
            y: '-300%',
            duration: 0.001,
          }
        );
        gsap.to(charList, {
          y: '-0%',
          duration: 0.8,
          delay: i * 0.03,
          ease: 'expo.out',
        });
      }
    });
  };

  return (
    <>
      {/* WebGL Canvas Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          {/* Render WebGL cards */}
          {cardPositions.map((pos, index) => {
            if (!pos.visible) return null;
            
            return (
              <WebGLPracticeCard
                key={practiceAreas[index].id}
                imageUrl={practiceAreas[index].image}
                position={pos}
                scale={{ width: pos.width, height: pos.height }}
                mousePosition={normalizedMouse}
                isHovered={hoveredCard === index}
                scrollProgress={0.5}
              />
            );
          })}

        </Canvas>
      </div>

      {/* DOM Layer */}
      <section ref={containerRef} className="py-24 bg-[#fafafa] relative overflow-hidden z-10">
        {/* Header */}
        <div className="container mx-auto px-6 mb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h4 className="text-sm font-bold tracking-wider text-foreground">OUR PRACTICE AREAS</h4>
              <span className="text-sm font-bold text-foreground/60">{practiceAreas.length}</span>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 2 34 34m0 0V6.046M36 36H6.046"></path>
              </svg>
            </div>
            <Link to="/practice-areas" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              View All →
            </Link>
          </div>
        </div>

        {/* Masonry Grid */}
        <div ref={gridRef} className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {practiceAreas.map((area, index) => (
              <PracticeCard
                key={area.id}
                area={area}
                index={index}
                mousePos={mousePos}
                onHover={(isEntering) => {
                  handleCardHover(index, isEntering);
                  setHoveredCard(isEntering ? index : null);
                }}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

interface PracticeCardProps {
  area: PracticeArea;
  index: number;
  mousePos: { x: number; y: number };
  onHover: (isEntering: boolean) => void;
}

const PracticeCard = React.forwardRef<HTMLDivElement, PracticeCardProps>(
  ({ area, index, mousePos, onHover }, ref) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic + 3D tilt effect
    useEffect(() => {
      if (!cardRef.current || !isHovered) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const deltaX = mousePos.x - cardCenterX;
      const deltaY = mousePos.y - cardCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Magnetic pull
      const magneticStrength = 0.15;
      const magneticThreshold = 200;
      const force = Math.max(0, 1 - distance / magneticThreshold);
      
      // 3D tilt
      const rotateX = (deltaY / rect.height) * -15;
      const rotateY = (deltaX / rect.width) * 15;

      gsap.to(card, {
        x: deltaX * force * magneticStrength,
        y: deltaY * force * magneticStrength,
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, [mousePos, isHovered]);

    const handleMouseEnter = () => {
      setIsHovered(true);
      onHover(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      }
    };

    const heightClass = area.size === 'large' ? 'h-[500px]' : area.size === 'medium' ? 'h-[400px]' : 'h-[320px]';

    return (
      <div ref={ref} className="break-inside-avoid mb-6">
        <Link
          to={`/practice-areas/${area.slug}`}
          ref={cardRef}
          className={`block relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500 group ${heightClass}`}
          style={{ 
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={area.image}
              alt={area.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <div className="text-xs text-white/70 mb-2 font-medium tracking-wide">
              {area.tags}
            </div>
            <h3 className="project-title text-3xl font-bold text-white leading-tight">
              {area.title}
            </h3>
          </div>

          {/* Hover Glow */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${area.colorBg}40 0%, transparent 70%)`,
            }}
          ></div>
        </Link>
      </div>
    );
  }
);

PracticeCard.displayName = 'PracticeCard';

export default PracticeAreasLusion;
