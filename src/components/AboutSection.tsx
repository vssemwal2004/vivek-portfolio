import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplineBackground from './SplineBackground';
import { Code, Brain, Rocket } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Scroll-triggered animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    timeline
      .from(profileRef.current, {
        x: -100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out"
      })
      .from(contentRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.5");

    // Continuous floating animation for profile
    gsap.to(profileRef.current, {
      y: -15,
      rotation: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

  }, []);

  const techStack = [
    { icon: <Code size={24} />, name: 'Frontend Development', color: 'text-primary' },
    { icon: <Brain size={24} />, name: 'AI Integration', color: 'text-secondary' },
    { icon: <Rocket size={24} />, name: 'Full-Stack Solutions', color: 'text-accent' }
  ];

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <SplineBackground 
          scene= 'https://my.spline.design/voidspiral-uvrEZiNC7TGNHCzsN2uFtzmG/'
          className="w-full h-full opacity-30"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background-secondary/80 z-10" />

      <div className="relative z-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
         <div className="flex justify-center lg:justify-start">
  <div ref={profileRef} className="relative group" style={{ top: '10%' }}>
    <div className="w-80 h-80 md:w-96 md:h-96 rounded-xl overflow-hidden glass-strong p-6">
      <img 
        src="/images/profile.webp" 
        alt="Vivek Semwal Profile"
        className="w-full h-full object-cover rounded-lg"
        style={{ objectPosition: '50% 20%' }}
      />
                
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-hologram opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl" />
                
                {/* Scanning line effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 animate-hologram-scan" />
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 animate-float">
                <Code className="text-primary" size={20} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/30 animate-float" style={{ animationDelay: '1s' }}>
                <Brain className="text-secondary" size={16} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary mb-8" />
            </div>

            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
              Passionate Software Engineer specializing in full-stack development with expertise in 
              modern web technologies and emerging AI integrations. I create innovative digital 
              solutions that bridge the gap between complex technical systems and intuitive user experiences.
            </p>

            <p className="text-lg text-foreground-muted leading-relaxed">
              Currently pursuing B.Tech in Computer Science & Engineering at Graphic Era Hill University, 
              I am constantly exploring the frontiers of technology, from IoT systems to machine learning 
              applications, always seeking to push the boundaries of what's possible.
            </p>

            {/* Tech Expertise Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="glass p-4 rounded-lg hover:glass-strong transition-all duration-300 group"
                >
                  <div className={`${tech.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-sm font-medium text-foreground-secondary">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neural text-primary-foreground font-medium"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;