import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowSquareOut, GithubLogo, Rocket, Brain, Heart, Train, ChatCircle } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Projects grid animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".project-card", {
      scale: 0.8,
      opacity: 0,
      y: 60,
      rotation: 5,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });

    // Floating animation for project cards
    gsap.to(".project-card", {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.5
    });

  }, []);

  const projects = [
    {
      title: "SkillSwapHub",
      description: "Education Platform - 'Teach, Learn, Earn'",
      longDescription: "Comprehensive educational ecosystem enabling skill exchange, teaching opportunities, and monetization through innovative learning pathways.",
      icon: <Brain size={32} />,
      color: "primary",
      link: "https://skillswaphub.in",
      type: "live",
      featured: true,
      tags: ["Education", "Full-Stack", "Monetization", "Community"]
    },
    {
      title: "LifeLink Medical Tech",
      description: "Medical card system with IoT integration",
      longDescription: "Revolutionary healthcare solution combining digital medical records with IoT devices for real-time patient monitoring and emergency response.",
      icon: <Heart size={32} />,
      color: "secondary",
      link: "https://live-link-1-jxtp.onrender.com/patient/records",
      type: "demo",
      featured: false,
      tags: ["Healthcare", "IoT", "Emergency", "Medical"]
    },
    {
      title: "Timetable Manager PBL",
      description: "University project for teacher-student matching",
      longDescription: "Smart scheduling system utilizing advanced algorithms to optimize teacher-student assignments and classroom resource allocation.",
      icon: <Rocket size={32} />,
      color: "accent",
      link: "https://time-flame-eight.vercel.app/",
      type: "live",
      featured: false,
      tags: ["Education", "Scheduling", "Algorithm", "Optimization"]
    },
    {
      title: "Railway Optimization System",
      description: "Route optimization using advanced algorithms",
      longDescription: "AI-powered railway route optimization system improving efficiency, reducing travel time, and maximizing resource utilization.",
      icon: <Train size={32} />,
      color: "plasma",
      link: "https://github.com/vssemwal2004/railway-optimizing-system",
      type: "github",
      featured: false,
      tags: ["AI", "Optimization", "Transportation", "Algorithms"]
    },
    {
      title: "Talking Me Chat",
      description: "Encrypted communication platform",
      longDescription: "Secure messaging platform with end-to-end encryption, real-time communication, and advanced privacy features.",
      icon: <ChatCircle size={32} />,
      color: "secondary",
      link: "https://github.com/vssemwal2004/Talikng--Me",
      type: "github",
      featured: false,
      tags: ["Security", "Communication", "Encryption", "Real-time"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/20",
        text: "text-primary",
        border: "border-primary/30",
        glow: "hover:shadow-glow-primary",
        gradient: "from-primary to-primary-glow"
      },
      secondary: {
        bg: "bg-secondary/20", 
        text: "text-secondary",
        border: "border-secondary/30",
        glow: "hover:shadow-glow-secondary",
        gradient: "from-secondary to-secondary-glow"
      },
      accent: {
        bg: "bg-accent/20",
        text: "text-accent", 
        border: "border-accent/30",
        glow: "hover:shadow-glow-accent",
        gradient: "from-accent to-accent-glow"
      },
      plasma: {
        bg: "bg-plasma/20",
        text: "text-plasma",
        border: "border-plasma/30", 
        glow: "hover:shadow-glow-plasma",
        gradient: "from-plasma to-plasma-glow"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <GithubLogo size={20} />;
      case 'demo':
        return <ArrowSquareOut size={20} />;
      default:
        return <ArrowSquareOut size={20} />;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="relative min-h-screen py-20 bg-background-secondary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
              Project Universe
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Innovative solutions crafted with cutting-edge technologies, pushing the boundaries of digital possibilities
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={index}
                className={`project-card glass-strong rounded-xl overflow-hidden group hover:glass transition-all duration-500 ${colors.glow} ${
                  project.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                }`}
              >
                {/* Card Header */}
                <div className={`${colors.bg} p-6 relative overflow-hidden`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.text} hover:scale-110 transition-transform duration-300`}
                    >
                      {getLinkIcon(project.type)}
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-glow transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground-secondary text-sm">
                    {project.description}
                  </p>

                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-hologram opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-foreground-muted mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-3 py-1 rounded-full border ${colors.border} ${colors.bg} ${colors.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${colors.gradient} text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    {getLinkIcon(project.type)}
                    {project.type === 'github' ? 'View Code' : 
                     project.type === 'demo' ? 'View Demo' : 'Visit Site'}
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className={`absolute w-full h-1 bg-gradient-to-r from-transparent via-${project.color} to-transparent opacity-0 group-hover:opacity-100 animate-hologram-scan`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-strong p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Explore More Projects
            </h3>
            <p className="text-foreground-secondary mb-6">
              Discover additional projects and contributions on GitHub
            </p>
            <a
              href="https://github.com/vssemwal2004"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neural text-primary-foreground font-medium inline-flex items-center gap-2"
            >
              <GithubLogo size={20} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;