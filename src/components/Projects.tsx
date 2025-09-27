import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, 
  GithubLogo, 
  Globe,
  Sparkle,
  Eye
} from 'phosphor-react';

// Import project images
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';
import project6 from '@/assets/project-6.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "3D Interactive Web",
      description: "Create immersive 3D web experiences with React Three Fiber and advanced animations",
      image: project1,
      technologies: ["React", "Three.js", "TypeScript", "WebGL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Gaming UI Design",
      description: "Next-level gaming interface with stunning visuals and smooth interactions",
      image: project2,
      technologies: ["React", "GSAP", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "3D Portfolio Website",
      description: "Modern portfolio showcasing creative development skills with 3D elements",
      image: project3,
      technologies: ["React", "Three.js", "GSAP", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Gaming Platform",
      description: "Comprehensive gaming website with dynamic content and interactive features",
      image: project4,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Animation Tools",
      description: "Web animation tools and tutorials for modern web development",
      image: project5,
      technologies: ["React", "GSAP", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Tutorial",
      description: "Step-by-step animated portfolio creation with modern techniques",
      image: project6,
      technologies: ["React", "GSAP", "Three.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(titleRef.current, { 
        opacity: 0, 
        y: 100,
        filter: 'blur(10px)'
      });

      gsap.set(projectsRef.current?.children || [], { 
        opacity: 0, 
        y: 100, 
        scale: 0.8 
      });

      // Title animation
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Projects stagger animation
      gsap.to(projectsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });

      // Floating glow orbs
      gsap.utils.toArray('.project-glow-orb').forEach((orb: any) => {
        gsap.to(orb, {
          y: gsap.utils.random(-15, 15),
          x: gsap.utils.random(-10, 10),
          duration: gsap.utils.random(3, 5),
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: gsap.utils.random(0, 2)
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--muted)/0.2) 0%, hsl(var(--background)) 100%)'
      }}
    >
      {/* Floating Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="project-glow-orb absolute top-32 left-16 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
        <div className="project-glow-orb absolute top-64 right-24 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="project-glow-orb absolute bottom-40 left-1/3 w-36 h-36 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
        <div className="project-glow-orb absolute bottom-24 right-1/4 w-28 h-28 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkle weight="fill" size={32} className="text-purple-500" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
            Creative{' '}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative web experiences with cutting-edge technologies and stunning visual design
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} ${index === 1 ? 'lg:row-span-2' : ''}`}
            >
              {/* Project Card */}
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Eye weight="fill" size={16} />
                    Featured
                  </div>
                )}

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project Image */}
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <Globe size={24} weight="fill" />
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <GithubLogo size={24} weight="fill" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="relative p-6 h-1/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs font-medium text-foreground border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-muted/20 rounded-full text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="group/btn inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                    View Project
                    <ArrowUpRight 
                      size={16} 
                      className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" 
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;