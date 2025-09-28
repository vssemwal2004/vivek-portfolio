import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  HardDrives, 
  Wrench, 
  Brain, 
  Palette, 
  DeviceMobile, 
  Database 
} from 'phosphor-react';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animation for skill cards
    gsap.fromTo(
      '.skill-card',
      { scale: 0.9, opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      }
    );

    // Floating animation for icons
    gsap.to('.skill-icon', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.1,
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const skillTabs = [
    {
      title: 'Core Development',
      skills: [
        {
          title: 'Frontend Development',
          icon: <Code size={32} />,
          color: 'primary',
          skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'TypeScript'],
        },
        {
          title: 'Backend Development',
          icon: <HardDrives size={32} />,
          color: 'secondary',
          skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'RESTful APIs'],
        },
        {
          title: 'UI/UX Design',
          icon: <Palette size={32} />,
          color: 'accent',
          skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
        },
      ],
    },
    {
      title: 'Advanced Technologies',
      skills: [
        {
          title: 'Tools & DevOps',
          icon: <Wrench size={32} />,
          color: 'accent',
          skills: ['VS Code', 'Git', 'Docker', 'AWS', 'CI/CD'],
        },
        {
          title: 'Emerging Tech',
          icon: <Brain size={32} />,
          color: 'plasma',
          skills: ['IoT', 'Machine Learning', 'AI Integration', 'Blockchain'],
        },
        {
          title: 'Mobile & Database',
          icon: <DeviceMobile size={32} />,
          color: 'primary',
          skills: ['React Native', 'Flutter', 'PostgreSQL', 'Firebase'],
        },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-blue-500/20',
        text: 'text-blue-500',
        border: 'border-blue-500/30',
        glow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]',
      },
      secondary: {
        bg: 'bg-green-500/20',
        text: 'text-green-500',
        border: 'border-green-500/30',
        glow: 'hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]',
      },
      accent: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-500',
        border: 'border-purple-500/30',
        glow: 'hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]',
      },
      plasma: {
        bg: 'bg-pink-500/20',
        text: 'text-pink-500',
        border: 'border-pink-500/30',
        glow: 'hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]',
      },
    };
    return colorMap[color] || colorMap.primary; // Fallback to primary if color is undefined
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-16 bg-gray-900 overflow-hidden"
    >
      {/* Custom Styles for Glass Effect and Float Animation */}
      <style jsx>{`
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/5 right-1/5 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A curated selection of technical expertise driving innovative solutions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {skillTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillTabs[activeTab].skills.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`skill-card glass p-6 rounded-xl transition-all duration-500 hover:scale-105 ${colors.glow}`}
              >
                <div
                  className={`skill-icon ${colors.bg} ${colors.text} w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className={`text-lg font-bold text-center mb-4 ${colors.text}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`text-sm text-gray-400 py-1 px-3 rounded-full border ${colors.border} ${colors.bg} hover:${colors.text} transition-colors duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${
                        category.color === 'primary'
                          ? 'from-blue-500 to-blue-400'
                          : category.color === 'secondary'
                          ? 'from-green-500 to-green-400'
                          : category.color === 'accent'
                          ? 'from-purple-500 to-purple-400'
                          : 'from-pink-500 to-pink-400'
                      }`}
                      style={{ width: `${80 + Math.random() * 15}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `float ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;