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
  MapPin
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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
    .from(".contact-details", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to(formRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    gsap.to(".transmit-button", {
      backgroundColor: "#00ff88",
      duration: 0.3,
      yoyo: true,
      repeat: 1
    });
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <LinkedinLogo size={22} />, url: "https://www.linkedin.com/in/vivek-semwal-908b77307", color: "text-primary" },
    { name: "Instagram", icon: <InstagramLogo size={22} />, url: "https://www.instagram.com/vs_semwal", color: "text-secondary" },
    { name: "GitHub", icon: <GithubLogo size={22} />, url: "https://github.com/vssemwal2004", color: "text-accent" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-glow bg-gradient-secondary bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-secondary mx-auto mb-8" />
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Let’s build something innovative together. You can reach me directly via the form or my contact details below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="contact-form">
            <div className="glass-strong p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <PaperPlaneRight className="text-primary" size={20} />
                </div>
                Contact Form
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-surface border border-glass-border rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-4 bg-surface border border-glass-border rounded-lg"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full p-4 bg-surface border border-glass-border rounded-lg resize-none"
                />
                <button
                  type="submit"
                  className="transmit-button w-full btn-neural text-primary-foreground font-medium py-4 flex items-center justify-center gap-3 group"
                >
                  <PaperPlaneRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  TRANSMIT MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-details space-y-8">
            <div className="glass-strong p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Direct Contact</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Mobile</p>
                    <p className="text-foreground-secondary">7508669870</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <EnvelopeSimple className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-foreground-secondary">422semwalivek@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-foreground-secondary">Pathankot, Punjab, India</p>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/1QcHqOo7NmA70l-0-lLhQGHwJc_zAj_6S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg border border-glass-border hover:bg-accent/10 transition-all duration-300"
                >
                  <DownloadSimple className="text-accent" size={20} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-strong p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect Online</h3>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full glass flex items-center justify-center hover:glass-strong hover:scale-110 transition-all ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
