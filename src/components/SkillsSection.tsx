import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Database, 
  Wrench, 
  Brain, 
  Globe,
  DeviceMobile,
  HardDrives,
  Palette
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Skill clusters animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".skill-cluster", {
      scale: 0.8,
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    })
    .from(".skill-connection", {
      strokeDashoffset: 100,
      duration: 2,
      ease: "power2.out"
    }, "-=0.5");

    // Floating animation for skill nodes
    gsap.to(".skill-node", {
      y: -15,
      rotation: 3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.2
    });

  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={32} />,
      color: "primary",
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "TypeScript"],
      position: { top: "20%", left: "15%" }
    },
    {
      title: "Backend Development", 
      icon: <HardDrives size={32} />,
      color: "secondary",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs"],
      position: { top: "20%", right: "15%" }
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={32} />,
      color: "accent",
      skills: ["VS Code", "Figma", "Git", "Docker", "AWS"],
      position: { bottom: "30%", left: "15%" }
    },
    {
      title: "Emerging Technologies",
      icon: <Brain size={32} />,
      color: "plasma",
      skills: ["IoT", "Machine Learning", "AI Integration", "Blockchain"],
      position: { bottom: "30%", right: "15%" }
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/20",
        text: "text-primary",
        border: "border-primary/30",
        glow: "hover:shadow-glow-primary"
      },
      secondary: {
        bg: "bg-secondary/20", 
        text: "text-secondary",
        border: "border-secondary/30",
        glow: "hover:shadow-glow-secondary"
      },
      accent: {
        bg: "bg-accent/20",
        text: "text-accent", 
        border: "border-accent/30",
        glow: "hover:shadow-glow-accent"
      },
      plasma: {
        bg: "bg-plasma/20",
        text: "text-plasma",
        border: "border-plasma/30", 
        glow: "hover:shadow-glow-plasma"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-plasma/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Neural network of interconnected technologies forming the foundation of innovative solutions
          </p>
        </div>

        {/* Skills Constellation */}
        <div ref={constellationRef} className="relative min-h-[600px] max-w-6xl mx-auto">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Neural connections between skill clusters */}
            <line 
              className="skill-connection"
              x1="20%" y1="30%" 
              x2="80%" y2="30%" 
              stroke="url(#connectionGradient)" 
              strokeWidth="2" 
              strokeDasharray="5,10"
              strokeDashoffset="100"
            />
            <line 
              className="skill-connection"
              x1="20%" y1="30%" 
              x2="20%" y2="70%" 
              stroke="url(#connectionGradient)" 
              strokeWidth="2" 
              strokeDasharray="5,10"
              strokeDashoffset="100"
            />
            <line 
              className="skill-connection"
              x1="80%" y1="30%" 
              x2="80%" y2="70%" 
              stroke="url(#connectionGradient)" 
              strokeWidth="2" 
              strokeDasharray="5,10"
              strokeDashoffset="100"
            />
            <line 
              className="skill-connection"
              x1="20%" y1="70%" 
              x2="80%" y2="70%" 
              stroke="url(#connectionGradient)" 
              strokeWidth="2" 
              strokeDasharray="5,10"
              strokeDashoffset="100"
            />
            <line 
              className="skill-connection"
              x1="20%" y1="30%" 
              x2="80%" y2="70%" 
              stroke="url(#connectionGradient)" 
              strokeWidth="2" 
              strokeDasharray="3,8"
              strokeDashoffset="100"
            />
            <line 
              className="skill-connection"
              x1="80%" y1="30%" 
              x2="20%" y2="70%" 
              stroke="url(#connectionGradient)" 
              strokeWidth="2" 
              strokeDasharray="3,8"
              strokeDashoffset="100"
            />
          </svg>

          {/* Skill Clusters */}
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className="skill-cluster absolute"
                style={category.position}
              >
                <div className={`skill-node glass-strong p-6 rounded-xl group hover:glass transition-all duration-500 ${colors.glow} cursor-pointer`}>
                  {/* Icon */}
                  <div className={`${colors.bg} ${colors.text} w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold text-center mb-4 group-hover:${colors.text} transition-colors duration-300`}>
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`text-sm text-foreground-muted text-center py-1 px-3 rounded-full border ${colors.border} ${colors.bg} hover:${colors.text} transition-colors duration-300`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Proficiency Indicator */}
                  <div className="mt-4">
                    <div className="w-full bg-surface rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r transition-all duration-1000 ${
                          category.color === 'primary' ? 'from-primary to-primary-glow' :
                          category.color === 'secondary' ? 'from-secondary to-secondary-glow' :
                          category.color === 'accent' ? 'from-accent to-accent-glow' :
                          'from-plasma to-plasma-glow'
                        }`}
                        style={{ 
                          width: `${85 + Math.random() * 15}%`,
                          boxShadow: `0 0 10px ${
                            category.color === 'primary' ? 'hsl(var(--primary) / 0.5)' :
                            category.color === 'secondary' ? 'hsl(var(--secondary) / 0.5)' :
                            category.color === 'accent' ? 'hsl(var(--accent) / 0.5)' :
                            'hsl(var(--plasma) / 0.5)'
                          }`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="skill-node w-24 h-24 rounded-full glass-strong flex items-center justify-center group hover:glass transition-all duration-500 hover:shadow-glow-primary">
              <Globe className="text-primary group-hover:scale-125 transition-transform duration-300" size={40} />
            </div>
          </div>
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: "UI/UX Design", icon: <Palette size={20} />, color: "primary" },
            { name: "Mobile Dev", icon: <DeviceMobile size={20} />, color: "secondary" },
            { name: "Database Design", icon: <Database size={20} />, color: "accent" },
            { name: "DevOps", icon: <HardDrives size={20} />, color: "plasma" }
          ].map((skill, index) => {
            const colors = getColorClasses(skill.color);
            return (
              <div 
                key={index}
                className={`skill-cluster glass p-4 rounded-lg text-center hover:glass-strong transition-all duration-300 ${colors.glow} group`}
              >
                <div className={`${colors.bg} ${colors.text} w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h4 className="text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;