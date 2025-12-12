import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  HardDrives, 
  Brain,
  ChartLineUp,
  Database,
  GitBranch,
  Cpu,
  Lightning,
  Sparkle,
  Atom,
  ChartBar
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.skill-card',
      { scale: 0.8, opacity: 0, y: 50, rotateX: -15 },
      {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        scale: 1,
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeTab]);

  const handleTabChange = (index: number) => {
    if (isAnimating || index === activeTab) return;
    
    setIsAnimating(true);
    const contentElement = contentRef.current;
    
    if (contentElement) {
      gsap.to(contentElement, {
        opacity: 0,
        x: -30,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setActiveTab(index);
          gsap.fromTo(
            contentElement,
            { opacity: 0, x: 30 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.4, 
              ease: 'power2.out',
              onComplete: () => setIsAnimating(false)
            }
          );
        },
      });
    }
  };

  const skillCategories = [
    {
      id: 'fullstack',
      title: 'Full-Stack Developer',
      icon: <Code size={28} weight="duotone" />,
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
      categories: [
        {
          title: 'Frontend Development',
          icon: <Code size={36} weight="duotone" />,
          color: 'cyan',
          skills: [
            { name: 'HTML5', level: 95 },
            { name: 'CSS3', level: 92 },
            { name: 'JavaScript', level: 90 },
            { name: 'TypeScript', level: 88 },
            { name: 'React', level: 93 },
            { name: 'Next.js', level: 85 },
            { name: 'Tailwind CSS', level: 94 },
            { name: 'GSAP', level: 82 }
          ]
        },
        {
          title: 'Backend Development',
          icon: <HardDrives size={36} weight="duotone" />,
          color: 'blue',
          skills: [
            { name: 'Node.js', level: 90 },
            { name: 'Express.js', level: 88 },
            { name: 'RESTful APIs', level: 92 },
            { name: 'GraphQL', level: 78 },
            { name: 'WebSockets', level: 80 },
            { name: 'JWT Auth', level: 85 }
          ]
        },
        {
          title: 'Database & Cloud',
          icon: <Database size={36} weight="duotone" />,
          color: 'purple',
          skills: [
            { name: 'MongoDB', level: 88 },
            { name: 'PostgreSQL', level: 82 },
            { name: 'MySQL', level: 85 },
            { name: 'Redis', level: 75 },
            { name: 'Firebase', level: 80 },
            { name: 'AWS', level: 70 }
          ]
        },
        {
          title: 'DevOps & Tools',
          icon: <GitBranch size={36} weight="duotone" />,
          color: 'indigo',
          skills: [
            { name: 'Git & GitHub', level: 93 },
            { name: 'Docker', level: 78 },
            { name: 'CI/CD', level: 75 },
            { name: 'Webpack', level: 80 },
            { name: 'Vite', level: 85 },
            { name: 'Linux', level: 82 }
          ]
        }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI / ML Engineer',
      icon: <Brain size={28} weight="duotone" />,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      categories: [
        {
          title: 'Machine Learning',
          icon: <ChartLineUp size={36} weight="duotone" />,
          color: 'purple',
          skills: [
            { name: 'NumPy', level: 90 },
            { name: 'Pandas', level: 88 },
            { name: 'Scikit-learn', level: 85 },
            { name: 'Matplotlib', level: 82 },
            { name: 'Seaborn', level: 80 },
            { name: 'Jupyter', level: 90 }
          ]
        },
        {
          title: 'Deep Learning',
          icon: <Cpu size={36} weight="duotone" />,
          color: 'pink',
          skills: [
            { name: 'TensorFlow', level: 85 },
            { name: 'Keras', level: 83 },
            { name: 'PyTorch', level: 80 },
            { name: 'Neural Networks', level: 82 },
            { name: 'CNN / RNN', level: 78 },
            { name: 'Transfer Learning', level: 75 }
          ]
        },
        {
          title: 'LLM & GenAI',
          icon: <Sparkle size={36} weight="duotone" />,
          color: 'rose',
          skills: [
            { name: 'Prompt Engineering', level: 92 },
            { name: 'RAG Systems', level: 85 },
            { name: 'Fine-tuning', level: 78 },
            { name: 'Vector Embeddings', level: 80 },
            { name: 'LangChain', level: 82 },
            { name: 'Transformers', level: 75 }
          ]
        },
        {
          title: 'AI Tools & Frameworks',
          icon: <Atom size={36} weight="duotone" />,
          color: 'fuchsia',
          skills: [
            { name: 'OpenAI API', level: 88 },
            { name: 'Hugging Face', level: 80 },
            { name: 'Pinecone', level: 75 },
            { name: 'ChromaDB', level: 78 },
            { name: 'Ollama', level: 82 },
            { name: 'LlamaIndex', level: 75 }
          ]
        }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    const colors: Record<string, { from: string; to: string; glow: string; text: string; border: string }> = {
      cyan: {
        from: 'from-cyan-500',
        to: 'to-cyan-400',
        glow: 'shadow-[0_0_30px_rgba(6,182,212,0.4)]',
        text: 'text-cyan-400',
        border: 'border-cyan-500/30'
      },
      blue: {
        from: 'from-blue-500',
        to: 'to-blue-400',
        glow: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]',
        text: 'text-blue-400',
        border: 'border-blue-500/30'
      },
      purple: {
        from: 'from-purple-500',
        to: 'to-purple-400',
        glow: 'shadow-[0_0_30px_rgba(168,85,247,0.4)]',
        text: 'text-purple-400',
        border: 'border-purple-500/30'
      },
      indigo: {
        from: 'from-indigo-500',
        to: 'to-indigo-400',
        glow: 'shadow-[0_0_30px_rgba(99,102,241,0.4)]',
        text: 'text-indigo-400',
        border: 'border-indigo-500/30'
      },
      pink: {
        from: 'from-pink-500',
        to: 'to-pink-400',
        glow: 'shadow-[0_0_30px_rgba(236,72,153,0.4)]',
        text: 'text-pink-400',
        border: 'border-pink-500/30'
      },
      rose: {
        from: 'from-rose-500',
        to: 'to-rose-400',
        glow: 'shadow-[0_0_30px_rgba(244,63,94,0.4)]',
        text: 'text-rose-400',
        border: 'border-rose-500/30'
      },
      fuchsia: {
        from: 'from-fuchsia-500',
        to: 'to-fuchsia-400',
        glow: 'shadow-[0_0_30px_rgba(217,70,239,0.4)]',
        text: 'text-fuchsia-400',
        border: 'border-fuchsia-500/30'
      }
    };
    return colors[color] || colors.cyan;
  };

  const currentTab = skillCategories[activeTab];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            backgroundAttachment: 'fixed'
          }}
        />
      </div>

      {/* Glowing Orbs - Fixed Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent)',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)',
            animationDuration: '5s',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent)',
            animationDuration: '6s',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Scrollable Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Lightning size={48} weight="duotone" className="text-cyan-400 animate-pulse mx-auto" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-glow">
              Technical Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mastering cutting-edge technologies to build innovative, scalable solutions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(index)}
              disabled={isAnimating}
              className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-2xl`
                  : 'bg-white/5 backdrop-blur-md text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              <span className="flex items-center gap-3">
                {tab.icon}
                {tab.title}
              </span>
              {activeTab === index && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Content - Scrollable */}
        <div 
          ref={contentRef}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {currentTab.categories.map((category, idx) => {
              const colorClasses = getColorClass(category.color);
              return (
                <div
                  key={idx}
                  className="skill-card group relative"
                >
                  {/* Glassmorphism Card */}
                  <div className="relative h-full p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                    {/* Card Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.from} ${colorClasses.to} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className="relative mb-6 flex justify-center">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${colorClasses.from} ${colorClasses.to} bg-opacity-20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 ${colorClasses.glow}`}>
                        <div className={colorClasses.text}>
                          {category.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold text-center mb-6 ${colorClasses.text} tracking-wide`}>
                      {category.title}
                    </h3>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className="group/skill">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                              {skill.name}
                            </span>
                            <span className={`text-xs font-bold ${colorClasses.text}`}>
                              {skill.level}%
                            </span>
                          </div>
                          {/* Progress Bar */}
                          <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${colorClasses.from} ${colorClasses.to} rounded-full transition-all duration-1000 ease-out relative`}
                              style={{ 
                                width: `${skill.level}%`,
                                boxShadow: `0 0 10px rgba(6, 182, 212, 0.5)`
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect Border */}
                    <div className={`absolute inset-0 rounded-3xl border-2 ${colorClasses.border} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <Code size={32} weight="duotone" />, label: 'Technologies', value: '30+' },
            { icon: <ChartBar size={32} weight="duotone" />, label: 'Projects', value: '20+' },
            { icon: <Brain size={32} weight="duotone" />, label: 'AI Models', value: '10+' },
            { icon: <Lightning size={32} weight="duotone" />, label: 'Experience', value: '1+ Yrs' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-cyan-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `float-particle ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% { 
            transform: translateY(-100px) translateX(50px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;