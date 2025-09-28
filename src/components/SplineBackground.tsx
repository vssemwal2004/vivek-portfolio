import { Suspense, useState, useEffect, Component } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineBackgroundProps {
  scene: string; // URL for the .splinecode file
  iframeSrc?: string; // Optional iframe URL for fallback
  className?: string;
  fallbackComponent?: React.ReactNode;
}

// Error Boundary to catch unhandled errors from Spline
class SplineErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Spline error caught in boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full bg-background-secondary flex items-center justify-center">
          <div className="text-primary text-center">
            <p>Failed to load 3D scene.</p>
            <p>Please try refreshing the page or check the console for details.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const SplineBackground = ({
  scene,
  iframeSrc,
  className = 'w-full h-full',
  fallbackComponent,
}: SplineBackgroundProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isValidScene, setIsValidScene] = useState(true);

  // Validate scene URL before rendering
  useEffect(() => {
    const validateScene = async () => {
      try {
        const response = await fetch(scene, { method: 'HEAD' });
        if (!response.ok) {
          throw new Error(`Scene URL returned status: ${response.status}`);
        }
        setIsValidScene(true);
      } catch (error) {
        console.error('Scene URL validation failed:', error);
        setIsValidScene(false);
        setHasError(true);
        setIsLoading(false);
      }
    };
    validateScene();
  }, [scene]);

  const handleError = (error: Error) => {
    console.warn('Spline scene failed to load:', error);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    console.log('Spline scene loaded successfully');
    setIsLoading(false);
  };

  // Default fallback with animated gradient background
  const defaultFallback = (
    <div
      className={`${className} bg-gradient-to-br from-background via-background-secondary to-background-tertiary relative overflow-hidden`}
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '4s' }}
      />
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
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );

  // Use iframe as fallback if provided and there's an error
  if (hasError || !isValidScene) {
    if (iframeSrc) {
      return (
        <div className={className}>
          <iframe
            src={iframeSrc}
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            title="Spline Scene Fallback"
          />
        </div>
      );
    }
    return fallbackComponent || defaultFallback;
  }

  return (
    <Suspense
      fallback={
        <div className={`${className} bg-background-secondary flex items-center justify-center`}>
          <div className="text-primary animate-pulse">Loading 3D Scene...</div>
        </div>
      }
    >
      <SplineErrorBoundary>
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
      </SplineErrorBoundary>
    </Suspense>
  );
};

export default SplineBackground;