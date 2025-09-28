import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Trophy, BookOpen } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    if (!section || !timeline) return;

    // Timeline animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate timeline nodes
    tl.from(".timeline-node", {
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power3.out"
    })
    .from(".timeline-connection", {
      scaleY: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

    // Floating animation for icons
    gsap.to(".education-icon", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3
    });

  }, []);

  const educationData = [
    {
      title: "B.Tech - Computer Science & Engineering",
      institution: "Graphic Era Hill University",
      period: "Current",
      status: "Pursuing",
      icon: <GraduationCap size={32} />,
      color: "text-primary",
      description: "Specializing in full-stack development, AI/ML, and emerging technologies"
    },
    {
      title: "12th - Science (PCM)",
      institution: "Maharana Pratap School, Pathankot",
      period: "Completed",
      status: "1st Division",
      icon: <Trophy size={32} />,
      color: "text-secondary",
      description: "Physics, Chemistry, Mathematics with distinction"
    },
    {
      title: "10th - Secondary Education",
      institution: "LDSS Plasma School, Pathankot",
      period: "Completed",
      status: "1st Division",
      icon: <BookOpen size={32} />,
      color: "text-accent",
      description: "Strong foundation in science and mathematics"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="relative min-h-screen py-20 bg-background-secondary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-glow bg-gradient-secondary bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-secondary mx-auto mb-8" />
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Traversing the cosmic expanse of knowledge and continuous learning
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Connection Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent timeline-connection origin-top" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`timeline-node relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-background-secondary z-10 ${
                  index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'
                }`} />

                {/* Content Card */}
                <div className={`glass-strong p-6 rounded-xl ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-5/12 group hover:glass transition-all duration-300`}>
                  
                  {/* Icon */}
                  <div className={`education-icon inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                    index === 0 ? 'bg-primary/20 text-primary' : 
                    index === 1 ? 'bg-secondary/20 text-secondary' : 
                    'bg-accent/20 text-accent'
                  }`}>
                    {item.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-glow transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-lg text-foreground-secondary mb-3">
                    {item.institution}
                  </h4>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className={`px-3 py-1 rounded-full border ${item.color} bg-opacity-20`}>
                      {item.period}
                    </span>
                    <span className={`px-3 py-1 rounded-full ${
                      index === 0 ? 'bg-primary/20 text-primary border-primary/30' :
                      index === 1 ? 'bg-secondary/20 text-secondary border-secondary/30' :
                      'bg-accent/20 text-accent border-accent/30'
                    } border`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <p className="text-foreground-muted">
                    {item.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
                    index === 0 ? 'shadow-glow-primary' :
                    index === 1 ? 'shadow-glow-secondary' :
                    'shadow-glow-accent'
                  }`} />
                </div>

                {/* Period Label */}
                <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0 ? 'left-1/2 ml-8' : 'right-1/2 mr-8'
                }`}>
                  <div className={`px-4 py-2 rounded-lg glass text-sm font-medium ${item.color}`}>
                    {item.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20 text-center">
          <div className="glass-strong p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Academic Excellence
            </h3>
            <p className="text-foreground-secondary">
              Consistent First Division performance throughout academic journey
            </p>
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Trophy className="text-primary" size={24} />
              </div>
              <span className="text-primary font-bold text-lg">Excellence Achieved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;