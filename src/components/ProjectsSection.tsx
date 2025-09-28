import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowSquareOut, GithubLogo, Rocket,  Heart, Train, ChatCircle, Brain } from 'phosphor-react';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animation for project cards
    gsap.fromTo(
      '.project-card',
      { scale: 0.8, opacity: 0, y: 50, rotationX: 15 },
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
        rotationX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      }
    );

    // Holographic hover effect with cleanup
    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card) => {
      const onEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          rotationY: 10,
          rotationX: -5,
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)',
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      const onLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          rotationX: 0,
          boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
      return () => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mouseleave', onLeave);
      };
    });

    // Laser pointer animation
    gsap.to('.laser-pointer', {
      x: 'random(-20, 20)',
      y: 'random(-20, 20)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const professionalProjects = [
    {
      title: 'SkillSwapHub',
      description: 'Education Platform: Teach, Learn, Earn',
      longDescription:
        'A comprehensive educational ecosystem enabling skill exchange, teaching opportunities, and monetization through innovative learning pathways.',
      icon: <Brain size={32} />,
      color: 'primary',
      link: 'https://skillswaphub.in',
      type: 'live',
      featured: true,
      tags: ['Education', 'Full-Stack', 'Monetization', 'Community'],
      animation: 'glow',
      techStack: ['React', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      title: 'LifeLink Medical Tech',
      description: 'Medical Card System with IoT Integration',
      longDescription:
        'A revolutionary healthcare solution combining digital medical records with IoT devices for real-time patient monitoring and emergency response.',
      icon: <Heart size={32} />,
      color: 'secondary',
      link: 'https://live-link-1-jxtp.onrender.com/patient/records',
      type: 'demo',
      featured: true,
      tags: ['Healthcare', 'IoT', 'Emergency', 'Medical'],
      animation: 'medical',
      techStack: ['IoT', 'React', 'Python', 'Firebase'],
    },
    {
      title: 'Talking Me Chat',
      description: 'Encrypted Communication Platform',
      longDescription:
        'A secure messaging platform with end-to-end encryption, real-time communication, and advanced privacy features.',
      icon: <ChatCircle size={32} />,
      color: 'accent',
      link: 'https://github.com/vssemwal2004/Talikng--Me',
      type: 'github',
      featured: false,
      tags: ['Security', 'Communication', 'Encryption', 'Real-time'],
      animation: 'bubble',
      techStack: ['React', 'Socket.io', 'Encryption', 'Node.js'],
    },
  ];

  const learningProjects = [
    {
      title: 'Timetable Manager PBL',
      description: 'University Project for Teacher-Student Matching',
      longDescription:
        'A smart scheduling system utilizing advanced algorithms to optimize teacher-student assignments and classroom resource allocation.',
      icon: <Rocket size={32} />,
      color: 'accent',
      link: 'https://time-flame-eight.vercel.app/',
      type: 'live',
      featured: false,
      tags: ['Education', 'Scheduling', 'Algorithm', 'Optimization'],
      animation: 'calendar',
      techStack: ['JavaScript', 'Algorithms', 'UI/UX'],
    },
    {
      title: 'Railway Optimization System',
      description: 'Route Optimization Using DS Algorithms',
      longDescription:
        "An AI-powered railway route optimization system using Prim's and Kruskal's algorithms to improve efficiency and reduce travel time.",
      icon: <Train size={32} />,
      color: 'plasma',
      link: 'https://github.com/vssemwal2004/railway-optimizing-system',
      type: 'github',
      featured: false,
      tags: ['AI', 'Optimization', 'Transportation', 'Algorithms'],
      animation: 'graph',
      techStack: ['Python', 'Algorithms', 'Data Structures'],
    },
    {
      title: 'Diabetes Prediction',
      description: 'Machine Learning Diabetes Prediction System',
      longDescription:
        'A supervised machine learning model using logistic regression and other algorithms to predict diabetes risk based on medical datasets and patient features.',
      icon: <Brain size={32} />,
      color: 'primary',
      link: 'https://github.com/vssemwal2004/diabetes-prediction',
      type: 'github',
      featured: false,
      tags: ['Machine Learning', 'Healthcare', 'Supervised Learning', 'Logistic Regression'],
      animation: 'glow',
      techStack: ['Python', 'Machine Learning', 'Logistic Regression', 'Scikit-learn'],
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]',
        gradient: 'from-blue-500 to-blue-600',
        light: 'bg-blue-500/10',
      },
      secondary: {
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        border: 'border-green-500/40',
        glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]',
        gradient: 'from-green-500 to-green-600',
        light: 'bg-green-500/10',
      },
      accent: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'border-purple-500/40',
        glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]',
        gradient: 'from-purple-500 to-purple-600',
        light: 'bg-purple-500/10',
      },
      plasma: {
        bg: 'bg-pink-500/20',
        text: 'text-pink-400',
        border: 'border-pink-500/40',
        glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]',
        gradient: 'from-pink-500 to-pink-600',
        light: 'bg-pink-500/10',
      },
    };
    return colorMap[color] || colorMap.primary;
  };

  const getLinkIcon = (type) => {
    switch (type) {
      case 'github':
        return <GithubLogo size={20} />;
      case 'demo':
        return <ArrowSquareOut size={20} />;
      default:
        return <ArrowSquareOut size={20} />;
    }
  };

  const getAnimationClass = (animation) => {
    switch (animation) {
      case 'glow':
        return 'animate-[glow-pulse_3s_ease-in-out_infinite]';
      case 'medical':
        return 'animate-[medical-flow_2s_ease-in-out_infinite]';
      case 'calendar':
        return 'animate-[calendar-flip_3s_ease-in-out_infinite]';
      case 'graph':
        return 'animate-[graph-path_2.5s_ease-in-out_infinite]';
      case 'bubble':
        return 'animate-[message-bubble_2s_ease-in-out_infinite]';
      default:
        return '';
    }
  };

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-[1280px] mx-auto">
      {projects.map((project, index) => {
        const colors = getColorClasses(project.color);
        return (
          <div
            key={index}
            className={`project-card relative w-[400px] glass-strong rounded-2xl overflow-hidden group ${colors.glow} transform transition-all duration-500`}
            style={{ perspective: '1000px' }}
          >
            {/* Holographic Preview */}
            <div className={`relative h-48 ${colors.bg} ${getAnimationClass(project.animation)} overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-center h-full">
                <div className={`${colors.text} scale-150 group-hover:scale-175 transition-transform duration-500`}>
                  {project.icon}
                </div>
              </div>
              
              {/* Tech Stack Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 rounded-md bg-black/30 text-white/80 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 h-80 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className={`text-2xl font-bold ${colors.text} leading-tight`}>{project.title}</h3>
                {project.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium ml-2 flex-shrink-0">
                    Featured
                  </div>
                )}
              </div>
              
              <p className="text-gray-300 text-sm font-medium mb-2 leading-relaxed">{project.description}</p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{project.longDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`text-xs px-3 py-1 rounded-full border ${colors.border} ${colors.light} ${colors.text} backdrop-blur-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${colors.gradient} text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                {getLinkIcon(project.type)}
                {project.type === 'github' ? 'View Code' : project.type === 'demo' ? 'View Demo' : 'Visit Site'}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-transparent overflow-hidden"
    >
      {/* Custom Styles */}
      <style jsx>{`
        .glass-strong {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        @keyframes medical-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes calendar-flip {
          0%, 100% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(15deg);
          }
        }
        @keyframes graph-path {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes message-bubble {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="laser-pointer absolute w-2 h-2 bg-red-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Project Universe
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A constellation of innovative solutions built with cutting-edge technologies and creative problem-solving
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Professional Projects</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Production-ready applications with real-world impact and scalable architecture
            </p>
          </div>
          {renderProjects(professionalProjects)}
        </div>

        {/* Learning Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Learning Projects</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Academic and experimental projects exploring new technologies and algorithms
            </p>
          </div>
          {renderProjects(learningProjects)}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <div className="glass-strong p-8 rounded-2xl inline-block max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More Creations</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover additional projects, contributions, and open-source work on GitHub
            </p>
            <a
              href="https://github.com/vssemwal2004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <GithubLogo size={24} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;