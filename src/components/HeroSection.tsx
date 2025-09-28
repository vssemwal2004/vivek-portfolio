import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'phosphor-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const locationRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.5 });

    timeline
      .from(titleRef.current, {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from(locationRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3')
      .from(ctaRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: 'back.out(1.7)',
      }, '-=0.2')
      .from(profileRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: 10,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.8');

    gsap.to(profileRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    const text = 'SOFTWARE ENGINEER';
    let index = 0;
    const typeInterval = setInterval(() => {
      if (subtitleRef.current && index < text.length) {
        subtitleRef.current.textContent = text.slice(0, index + 1);
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline iframe Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/unovacoin-7itRNKNGeE0r0zeXMQScBqVS/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="Spline Scene"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-neural z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
          >
            <span className="text-glitch text-glow bg-gradient-primary bg-clip-text text-transparent">
              VIVEK
            </span>
            <br />
            <span className="text-glitch text-glow bg-gradient-secondary bg-clip-text text-transparent">
              SEMWAL
            </span>
          </h1>
          <h2
            ref={subtitleRef}
            className="text-2xl md:text-4xl font-light text-foreground-secondary tracking-wider min-h-[3rem]"
          />
          <p
            ref={locationRef}
            className="text-lg md:text-xl text-foreground-muted tracking-wide"
          >
            FROM PUNJAB, PATHANKOT
          </p>
          <button
            ref={ctaRef}
            onClick={scrollToNext}
            className="btn-neural text-primary-foreground font-medium text-lg px-8 py-4 mt-8"
          >
            EXPLORE UNIVERSE
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div ref={profileRef} className="relative group">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden holographic-border glass p-4">
              <img
                src="/images/profile.webp"
                alt="Vivek Semwal"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-hologram-scan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-float shadow-glow-primary" />
            <div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-float shadow-glow-secondary"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-1/2 -right-8 w-4 h-4 bg-accent rounded-full animate-float shadow-glow-accent"
              style={{ animationDelay: '2s' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-foreground-muted hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-sm tracking-wider mb-2">SCROLL DOWN</span>
          <ArrowDown size={24} className="animate-bounce group-hover:text-primary" />
        </button>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;