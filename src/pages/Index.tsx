import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure minimum loading time for the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative py-12 bg-background-secondary border-t border-glass-border">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
                VIVEK SEMWAL
              </span>
            </h3>
            <p className="text-foreground-muted">
              Software Engineer & AI Enthusiast
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-8 mb-6">
            <a 
              href="https://www.linkedin.com/in/vivek-semwal-908b77307" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/vssemwal2004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-secondary transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://www.instagram.com/vs_semwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-accent transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
          
          <div className="border-t border-glass-border pt-6">
            <p className="text-foreground-muted text-sm">
              © 2024 Vivek Semwal. Crafted with future technology and innovative design.
            </p>
          </div>
        </div>
        
        {/* Background particles for footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Index;
