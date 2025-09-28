import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  PaperPlaneRight, 
  LinkedinLogo, 
  InstagramLogo, 
  GithubLogo,
  Phone,
  EnvelopeSimple,
  DownloadSimple,
  Broadcast
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Contact section animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".contact-form", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".contact-info", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .from(".social-planet", {
      scale: 0,
      rotation: 180,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.3");

    // Orbital animation for social links
    gsap.to(".social-planet", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center"
    });

    // Satellite floating animation
    gsap.to(".satellite", {
      y: -20,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate form submission
    gsap.to(formRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });

    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Success animation
    gsap.to(".transmit-button", {
      backgroundColor: "#00ff88",
      duration: 0.3,
      yoyo: true,
      repeat: 1
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedinLogo size={24} />,
      url: "https://www.linkedin.com/in/vivek-semwal-908b77307",
      color: "text-primary"
    },
    {
      name: "Instagram", 
      icon: <InstagramLogo size={24} />,
      url: "https://www.instagram.com/vs_semwal",
      color: "text-secondary"
    },
    {
      name: "GitHub",
      icon: <GithubLogo size={24} />,
      url: "https://github.com/vssemwal2004",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-glow bg-gradient-secondary bg-clip-text text-transparent">
              Establish Connection
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-secondary mx-auto mb-8" />
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Initialize secure communication channel for collaborative opportunities and innovative partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form">
            <div className="glass-strong p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <PaperPlaneRight className="text-primary" size={20} />
                </div>
                Neural Communication Form
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-4 bg-surface border border-glass-border rounded-lg text-foreground placeholder-foreground-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300 group-hover:border-primary/50"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full p-4 bg-surface border border-glass-border rounded-lg text-foreground placeholder-foreground-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300 group-hover:border-primary/50"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full p-4 bg-surface border border-glass-border rounded-lg text-foreground placeholder-foreground-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300 resize-none group-hover:border-primary/50"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none" />
                </div>

                <button
                  type="submit"
                  className="transmit-button w-full btn-neural text-primary-foreground font-medium py-4 flex items-center justify-center gap-3 group"
                >
                  <PaperPlaneRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  TRANSMIT MESSAGE
                  <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="contact-info space-y-8">
            {/* Social Orbit */}
            <div className="relative">
              <div className="glass-strong p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Social Network Orbit
                </h3>
                
                <div ref={orbitRef} className="relative w-64 h-64 mx-auto mb-8">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    VS
                  </div>

                  {/* Orbital Social Links */}
                  {socialLinks.map((social, index) => {
                    const angle = (index * 120) * (Math.PI / 180);
                    const radius = 80;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-planet absolute w-12 h-12 rounded-full glass flex items-center justify-center hover:glass-strong transition-all duration-300 group hover:scale-110"
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`
                        }}
                      >
                        <span className={`${social.color} group-hover:scale-125 transition-transform duration-300`}>
                          {social.icon}
                        </span>
                      </a>
                    );
                  })}

                  {/* Orbital Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="80"
                      fill="none"
                      stroke="hsl(var(--primary) / 0.2)"
                      strokeWidth="1"
                      strokeDasharray="5,10"
                      className="animate-spin"
                      style={{ animationDuration: '20s' }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass-strong p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="satellite w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Broadcast className="text-secondary" size={20} />
                </div>
                Direct Channels
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg border border-glass-border hover:bg-surface/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Mobile</p>
                    <p className="text-foreground-secondary">7508698707</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-glass-border hover:bg-surface/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <EnvelopeSimple className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-foreground-secondary">422semwalivek@gmail.com</p>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/drive/folders/1QcHqOo7NmA70l-0-lLhQGHwJc_zAj_6S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-glass-border hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <DownloadSimple className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Resume</p>
                    <p className="text-foreground-secondary">Download CV</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;