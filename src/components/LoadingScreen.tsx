import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("INITIALIZING NEURAL INTERFACE...");

  useEffect(() => {
    const timeline = gsap.timeline();
    
    // Animate progress bar
    timeline.to({}, {
      duration: 3,
      onUpdate: function() {
        const prog = Math.round(this.progress() * 100);
        setProgress(prog);
        
        // Change loading text based on progress
        if (prog < 30) {
          setCurrentText("INITIALIZING NEURAL INTERFACE...");
        } else if (prog < 70) {
          setCurrentText("LOADING PORTFOLIO...");
        } else if (prog < 100) {
          setCurrentText("SYSTEM READY...");
        }
      }
    });

    // Exit animation
    timeline.to(".loading-overlay", {
      duration: 1,
      scaleY: 0,
      transformOrigin: "top",
      ease: "power4.inOut",
      onComplete: () => {
        onComplete();
      }
    });

    // Neural network animation
    gsap.to(".neural-line", {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Glitch effect on name
    gsap.to(".glitch-text", {
      x: () => Math.random() * 4 - 2,
      duration: 0.1,
      repeat: -1,
      yoyo: true
    });

  }, [onComplete]);

  return (
    <div className="loading-overlay fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Neural Network Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            className="neural-line"
            x1={Math.random() * 1200}
            y1={Math.random() * 800}
            x2={Math.random() * 1200}
            y2={Math.random() * 800}
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            strokeDasharray="5,10"
            strokeDashoffset="15"
          />
        ))}
      </svg>

      <div className="text-center z-10">
        {/* Main Title */}
        <h1 className="glitch-text text-6xl md:text-8xl font-bold mb-8 text-glow bg-gradient-primary bg-clip-text text-transparent">
          VIVEK SEMWAL
        </h1>

        {/* Progress Bar */}
        <div className="w-80 md:w-96 mx-auto mb-8">
          <div className="relative h-2 bg-surface rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-primary transition-all duration-300 ease-out shadow-glow-primary"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
          <div className="text-primary text-xl font-medium mt-4">{progress}%</div>
        </div>

        {/* Loading Text */}
        <p className="text-foreground-secondary text-lg font-light tracking-wider animate-neural-pulse">
          {currentText}
        </p>

        {/* Particle Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;