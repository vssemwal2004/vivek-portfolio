import { Suspense, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineBackgroundProps {
  scene: string;
  className?: string;
  fallbackComponent?: React.ReactNode;
}

const SplineBackground = ({ scene, className = "w-full h-full", fallbackComponent }: SplineBackgroundProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    console.warn('Spline scene failed to load, showing fallback');
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Default fallback with animated gradient background
  const defaultFallback = (
    <div className={`${className} bg-gradient-to-br from-background via-background-secondary to-background-tertiary relative overflow-hidden`}>
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Neural network pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={i}
            x1={Math.random() * 1200}
            y1={Math.random() * 800}
            x2={Math.random() * 1200}
            y2={Math.random() * 800}
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            strokeDasharray="5,10"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
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
  );

  if (hasError) {
    return fallbackComponent || defaultFallback;
  }

  return (
    <Suspense fallback={
      <div className={`${className} bg-background-secondary flex items-center justify-center`}>
        <div className="text-primary animate-pulse">Loading 3D Scene...</div>
      </div>
    }>
      <div className={className}>
        {isLoading && (
          <div className="absolute inset-0 bg-background-secondary flex items-center justify-center z-10">
            <div className="text-primary animate-pulse">Loading 3D Scene...</div>
          </div>
        )}
        <Spline
          scene={scene}
          onLoad={handleLoad}
          onError={handleError}
          className="w-full h-full"
        />
      </div>
    </Suspense>
  );
};

export default SplineBackground;