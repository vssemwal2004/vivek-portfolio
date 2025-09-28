import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
          tertiary: "hsl(var(--background-tertiary))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          dark: "hsl(var(--surface-dark))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-secondary))",
          muted: "hsl(var(--foreground-muted))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          glow: "hsl(var(--primary-glow))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          glow: "hsl(var(--secondary-glow))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          glow: "hsl(var(--accent-glow))",
          foreground: "hsl(var(--accent-foreground))",
        },
        plasma: {
          DEFAULT: "hsl(var(--plasma))",
          glow: "hsl(var(--plasma-glow))",
          foreground: "hsl(var(--plasma-foreground))",
        },
        glass: {
          bg: "hsla(var(--glass-bg))",
          border: "hsla(var(--glass-border))",
          shadow: "hsla(var(--glass-shadow))",
        },
        neural: {
          glow: "hsla(var(--neural-glow))",
          pulse: "hsla(var(--neural-pulse))",
        },
        hologram: {
          border: "hsla(var(--hologram-border))",
        },
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius)",
        sm: "calc(var(--radius) - 4px)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        'glow-primary': 'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-accent': 'var(--glow-accent)',
        'glow-plasma': 'var(--glow-plasma)',
        'hover-glow': 'var(--hover-glow)',
        'glass': '0 8px 32px hsla(var(--glass-shadow))',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-neural': 'var(--gradient-neural)',
        'gradient-hologram': 'var(--gradient-hologram)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "neural-pulse": {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        "neural-glow": {
          "0%": { filter: "brightness(1) hue-rotate(0deg)" },
          "100%": { filter: "brightness(1.2) hue-rotate(10deg)" },
        },
        "glitch": {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-2px)" },
          "40%": { transform: "translateX(2px)" },
          "60%": { transform: "translateX(-1px)" },
          "80%": { transform: "translateX(1px)" },
        },
        "hologram-scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "particle-float": {
          "0%": {
            transform: "translateY(100vh) rotate(0deg)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateY(-100px) rotate(360deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "neural-pulse": "neural-pulse 2s ease-in-out infinite alternate",
        "neural-glow": "neural-glow 3s ease-in-out infinite alternate",
        "glitch": "glitch 2s infinite",
        "hologram-scan": "hologram-scan 2s ease-in-out infinite",
        "particle-float": "particle-float 8s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
