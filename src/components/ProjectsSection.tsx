import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowSquareOut, 
  GithubLogo, 
  Brain, 
  Heart, 
  ChartLineUp,
  Cpu,
  Globe,
  Code,
  ShieldCheck,
  BookOpen,
  BoundingBox,
  Leaf
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.project-card',
      { scale: 0.9, opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeCategory]);

  const handleCategoryChange = (index: number) => {
    if (isAnimating || index === activeCategory) return;
    
    setIsAnimating(true);
    const content = contentRef.current;
    
    if (content) {
      gsap.to(content, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setActiveCategory(index);
          gsap.fromTo(
            content,
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.4, 
              ease: 'power2.out',
              onComplete: () => setIsAnimating(false)
            }
          );
        },
      });
    }
  };

  const projectCategories = [
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      icon: <Code size={24} weight="duotone" />,
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      projects: [
        {
          title: 'SkillSwapHub',
          tagline: 'Education Platform: Teach, Learn, Earn',
          description: 'A comprehensive educational ecosystem enabling skill exchange, teaching opportunities, and monetization through innovative learning pathways. Features include course creation, peer-to-peer learning, payment integration, and community forums.',
          icon: <Brain size={40} weight="duotone" />,
          color: 'cyan',
          link: 'https://www.skillswaphub.in',
          github: null,
          domain: 'skillswaphub.in',
          type: 'live',
          featured: true,
          tags: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
          highlights: ['10K+ Users', 'Live Platform', 'Revenue Generation']
        },
        {
          title: 'PeerPrep',
          tagline: 'AI-Powered Student Learning & Mock Interview Platform',
          description: 'A modern full-stack platform designed for engineering students featuring AI mock interviews, syllabus viewer, question banks, practice mode, real-time coding editor, and student collaboration tools. Comprehensive solution for academic preparation and skill development.',
          icon: <BookOpen size={40} weight="duotone" />,
          color: 'blue',
          link: 'https://www.peerprep.co.in',
          github: null,
          domain: 'peerprep.co.in',
          type: 'live',
          featured: true,
          tags: ['Next.js', 'AI Integration', 'PostgreSQL', 'OpenAI'],
          highlights: ['AI Interviews', 'Coding Editor', 'Real-time Feedback']
        },
        {
          title: 'BookStay',
          tagline: 'Fully Dynamic Hotel Booking Platform',
          description: 'End-to-end hotel booking website with dynamic search, real-time availability via WebSockets, secure Razorpay payment integration, booking management, and comprehensive admin dashboard. Features location-based search, customer reviews, and automated notifications.',
          icon: <Globe size={40} weight="duotone" />,
          color: 'indigo',
          link: 'https://www.hotelkrishnaandrestaurant.com',
          github: null,
          domain: 'hotelkrishnaandrestaurant.com',
          type: 'live',
          featured: true,
          tags: ['React', 'Node.js', 'Razorpay', 'WebSockets'],
          highlights: ['Live Bookings', 'Payment Gateway', 'Admin Panel']
        }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI / ML Engineering',
      icon: <Brain size={24} weight="duotone" />,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      projects: [
        {
          title: 'Medical Report Analyzer',
          tagline: 'AI-Powered Medical Document Analysis',
          description: 'Advanced machine learning system for analyzing medical reports using NLP and computer vision. Extracts key health indicators, identifies patterns, and provides intelligent insights for healthcare professionals and patients.',
          icon: <ChartLineUp size={40} weight="duotone" />,
          color: 'purple',
          link: null,
          github: 'https://github.com/vssemwal2004/Medical-Report-Analyzer',
          domain: null,
          type: 'github',
          featured: true,
          tags: ['Python', 'TensorFlow', 'NLP', 'Computer Vision'],
          highlights: ['Document Analysis', 'Pattern Recognition', 'Health Insights']
        },
        {
          title: 'Diabetes Prediction System',
          tagline: 'Machine Learning Health Risk Assessment',
          description: 'Supervised machine learning model using logistic regression and ensemble methods to predict diabetes risk based on medical datasets. Features comprehensive data preprocessing, feature engineering, and model evaluation with high accuracy metrics.',
          icon: <Cpu size={40} weight="duotone" />,
          color: 'pink',
          link: null,
          github: 'https://github.com/vssemwal2004/diabetes-prediction',
          domain: null,
          type: 'github',
          featured: false,
          tags: ['Python', 'Scikit-learn', 'Pandas', 'ML Algorithms'],
          highlights: ['90%+ Accuracy', 'Risk Prediction', 'Health Analytics']
        }
      ]
    },
    {
      id: 'iot',
      title: 'IoT Solutions',
      icon: <BoundingBox size={24} weight="duotone" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      projects: [
        {
          title: 'LifeLink Medical Tech',
          tagline: 'Smart Medical Card System with IoT Integration',
          description: 'Revolutionary healthcare solution combining digital medical records with IoT devices for real-time patient monitoring and emergency response. Features include wearable sensor integration, emergency alerts, health tracking, and secure medical data access.',
          icon: <Heart size={40} weight="duotone" />,
          color: 'green',
          link: 'https://live-link-1-jxtp.onrender.com/patient/records',
          github: null,
          domain: null,
          type: 'demo',
          featured: true,
          tags: ['IoT', 'React', 'Python', 'Firebase', 'Health Monitoring'],
          highlights: ['Real-time Monitoring', 'Emergency Response', 'IoT Integration']
        },
        {
          title: 'AgroSense',
          tagline: 'AI + ML + IoT Smart Agriculture Platform',
          description: 'Integrated smart-farming system combining IoT sensors, machine learning models, and real-time analytics. Features soil monitoring, crop growth prediction, mineral recommendation system, market value forecasting, and cattle tracking for data-driven agricultural decisions.',
          icon: <Leaf size={40} weight="duotone" />,
          color: 'emerald',
          link: null,
          github: 'https://github.com/vssemwal2004/AI-agriculture',
          domain: null,
          type: 'github',
          featured: true,
          tags: ['IoT', 'ML', 'NodeMCU', 'FastAPI', 'Agriculture'],
          highlights: ['3 ML Models', 'Soil Sensors', 'Market Prediction']
        }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    const colors: Record<string, { from: string; to: string; glow: string; text: string; border: string; bg: string }> = {
      cyan: {
        from: 'from-cyan-500',
        to: 'to-cyan-400',
        glow: 'shadow-[0_0_40px_rgba(6,182,212,0.5)]',
        text: 'text-cyan-400',
        border: 'border-cyan-500/40',
        bg: 'bg-cyan-500/10'
      },
      blue: {
        from: 'from-blue-500',
        to: 'to-blue-400',
        glow: 'shadow-[0_0_40px_rgba(59,130,246,0.5)]',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        bg: 'bg-blue-500/10'
      },
      indigo: {
        from: 'from-indigo-500',
        to: 'to-indigo-400',
        glow: 'shadow-[0_0_40px_rgba(99,102,241,0.5)]',
        text: 'text-indigo-400',
        border: 'border-indigo-500/40',
        bg: 'bg-indigo-500/10'
      },
      purple: {
        from: 'from-purple-500',
        to: 'to-purple-400',
        glow: 'shadow-[0_0_40px_rgba(168,85,247,0.5)]',
        text: 'text-purple-400',
        border: 'border-purple-500/40',
        bg: 'bg-purple-500/10'
      },
      pink: {
        from: 'from-pink-500',
        to: 'to-pink-400',
        glow: 'shadow-[0_0_40px_rgba(236,72,153,0.5)]',
        text: 'text-pink-400',
        border: 'border-pink-500/40',
        bg: 'bg-pink-500/10'
      },
      green: {
        from: 'from-green-500',
        to: 'to-green-400',
        glow: 'shadow-[0_0_40px_rgba(34,197,94,0.5)]',
        text: 'text-green-400',
        border: 'border-green-500/40',
        bg: 'bg-green-500/10'
      },
      emerald: {
        from: 'from-emerald-500',
        to: 'to-emerald-400',
        glow: 'shadow-[0_0_40px_rgba(16,185,129,0.5)]',
        text: 'text-emerald-400',
        border: 'border-emerald-500/40',
        bg: 'bg-emerald-500/10'
      }
    };
    return colors[color] || colors.cyan;
  };

  const currentCategory = projectCategories[activeCategory];



  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundAttachment: 'fixed'
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent)',
            animationDuration: '5s'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <ShieldCheck size={48} weight="duotone" className="text-cyan-400 animate-pulse mx-auto" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Project Portfolio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions spanning Full-Stack Development, AI/ML Engineering, and IoT Systems
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {projectCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(index)}
              disabled={isAnimating}
              className={`group relative px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-500 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl`
                  : 'bg-white/5 backdrop-blur-md text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              <span className="flex items-center gap-2 md:gap-3">
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </span>
              {activeCategory === index && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={contentRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {currentCategory.projects.map((project, idx) => {
              const colorClasses = getColorClass(project.color);
              return (
                <div
                  key={idx}
                  className="project-card group relative"
                >
                  {/* Glass Card */}
                  <div className="relative h-full flex flex-col p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.from} ${colorClasses.to} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Header with Icon */}
                    <div className="relative flex items-start justify-between mb-6">
                      <div className={`p-3 md:p-4 rounded-2xl bg-gradient-to-br ${colorClasses.from} ${colorClasses.to} bg-opacity-20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 ${colorClasses.glow}`}>
                        <div className={colorClasses.text}>
                          {project.icon}
                        </div>
                      </div>
                      {project.featured && (
                        <div className="absolute top-0 right-0 px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold">
                          ⭐ Featured
                        </div>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${colorClasses.text} tracking-tight`}>
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 font-medium mb-4">
                      {project.tagline}
                    </p>

                    {/* Domain Badge */}
                    {project.domain && (
                      <div className="flex items-center gap-2 mb-4">
                        <Globe size={16} className="text-cyan-400" />
                        <span className="text-xs md:text-sm text-cyan-400 font-mono">{project.domain}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`text-xs px-3 py-1 rounded-full border ${colorClasses.border} ${colorClasses.bg} ${colorClasses.text} backdrop-blur-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {project.highlights.map((highlight, hIdx) => (
                        <div 
                          key={hIdx}
                          className="text-center p-2 rounded-lg bg-white/5 border border-white/10"
                        >
                          <p className="text-xs text-gray-400">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${colorClasses.from} ${colorClasses.to} text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
                        >
                          <ArrowSquareOut size={18} weight="bold" />
                          <span className="text-sm md:text-base">
                            {project.type === 'live' ? 'Visit Live' : 'View Demo'}
                          </span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${project.link ? '' : 'flex-1'} inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300`}
                        >
                          <GithubLogo size={18} weight="bold" />
                          {!project.link && <span className="text-sm md:text-base">View Code</span>}
                        </a>
                      )}
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`absolute inset-0 rounded-3xl border-2 ${colorClasses.border} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 max-w-2xl">
            <GithubLogo size={48} weight="duotone" className="text-white mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover additional projects, open-source contributions, and experimental work
            </p>
            <a
              href="https://github.com/vssemwal2004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl border border-white/20"
            >
              <GithubLogo size={24} weight="bold" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/10"
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
            transform: translateY(-120px) translateX(60px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;