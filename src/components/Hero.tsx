import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

function ScaleOfJustice() {
  const meshRef = useRef<any>();

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={meshRef}>
        {/* Base/Stand */}
        <mesh position={[0, -2, 0]}>
          <cylinderGeometry args={[0.8, 1.2, 0.3, 8]} />
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.2} />
        </mesh>
        
        {/* Vertical Column */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 4, 8]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Horizontal Beam */}
        <mesh position={[0, 1.8, 0]}>
          <boxGeometry args={[4, 0.1, 0.1]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.4} />
        </mesh>
        
        {/* Left Scale Pan */}
        <mesh position={[-1.8, 1.4, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 16]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Right Scale Pan */}
        <mesh position={[1.8, 1.4, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 16]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Chains */}
        {[-1.8, 1.8].map((x, i) => (
          <group key={i}>
            <mesh position={[x, 1.7, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
              <meshStandardMaterial color="#e5e7eb" />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );

      // Staggered headline animation
      gsap.fromTo(
        ".hero-line",
        {
          opacity: 0,
          y: 60,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.5
        }
      );

      // Form entrance
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          x: 40,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          delay: 1.2
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-between overflow-hidden bg-background">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
          <ScaleOfJustice />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 flex w-full h-screen">
        {/* Main Content - Left Side */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          <div ref={headlineRef} className="space-y-2">
            <h1 className="text-hero font-display leading-[0.8] tracking-tighter">
              <span className="hero-line block">Former Insurance</span>
              <span className="hero-line block">Defense Attorney</span>
            </h1>
            <h2 className="text-display font-display text-primary glow mt-4">
              <span className="hero-line block">Now Using Their Tactics</span>
              <span className="hero-line block">To Maximize</span>
              <span className="hero-line block text-accent">YOUR Compensation</span>
            </h2>
          </div>

          <div className="hero-line mt-8 max-w-2xl">
            <p className="text-body text-muted-foreground">
              Anatolii Trembach, Esq. leverages insider knowledge to fight for California injury victims.
            </p>
          </div>

          <div className="hero-line mt-8">
            <Button size="lg" className="magnetic bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold glow">
              Get Your Free Case Evaluation
            </Button>
          </div>
        </div>

        {/* Intake Form - Right Side */}
        <div ref={formRef} className="w-full max-w-md lg:max-w-lg xl:max-w-xl bg-surface-elevated/50 backdrop-blur-xl border border-border/20 rounded-2xl p-8 m-8 h-fit mt-24 glass">
          <div className="mb-6">
            <h3 className="text-title font-display text-foreground mb-2">Free Case Evaluation</h3>
            <p className="text-small text-muted-foreground">Get your consultation in under 2 minutes</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-small font-medium text-foreground">First Name*</label>
                <Input className="mt-1 bg-background/50 border-border/30" placeholder="John" />
              </div>
              <div>
                <label className="text-small font-medium text-foreground">Last Name*</label>
                <Input className="mt-1 bg-background/50 border-border/30" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="text-small font-medium text-foreground">Phone*</label>
              <Input className="mt-1 bg-background/50 border-border/30" placeholder="(555) 123-4567" type="tel" />
            </div>

            <div>
              <label className="text-small font-medium text-foreground">Email*</label>
              <Input className="mt-1 bg-background/50 border-border/30" placeholder="john@example.com" type="email" />
            </div>

            <div>
              <label className="text-small font-medium text-foreground">Type of Case*</label>
              <Select>
                <SelectTrigger className="mt-1 bg-background/50 border-border/30">
                  <SelectValue placeholder="Select case type" />
                </SelectTrigger>
                <SelectContent className="bg-surface border-border/30">
                  <SelectItem value="car-accident">Car Accident</SelectItem>
                  <SelectItem value="mesothelioma">Mesothelioma</SelectItem>
                  <SelectItem value="silicosis">Silicosis</SelectItem>
                  <SelectItem value="talc">Talc/Talcum</SelectItem>
                  <SelectItem value="dog-bite">Dog Bite</SelectItem>
                  <SelectItem value="product-liability">Product Liability</SelectItem>
                  <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-small font-medium text-foreground">Message (Optional)</label>
              <Textarea 
                className="mt-1 bg-background/50 border-border/30" 
                placeholder="Brief description of your case..."
                rows={3}
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="consent" className="mt-1" />
              <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                I hereby expressly consent to receive communications including calls, texts, emails, and/or automated messages and confirm that the submitted information provided is mine. By submitting this form, I agree to the Terms & acknowledge the Privacy Policy.
              </label>
            </div>

            <Button className="w-full bg-accent hover:bg-accent-glow text-accent-foreground font-semibold py-3 glow-accent">
              Get Free Consultation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;