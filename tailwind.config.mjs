/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Dark theme colors
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#1a1a1a',
        'bg-tertiary': '#252525',
        'bg-card': '#0f0f0f',
        // Neon colors
        'neon-blue': '#00d4ff',
        'neon-purple': '#7b2cbf',
        'neon-pink': '#ff006e',
        'neon-green': '#39ff14',
        'neon-orange': '#ff9500',
        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
        'text-muted': '#808080',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(123, 44, 191, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
        'neon-glow': '0 0 30px rgba(0, 212, 255, 0.8)',
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'text-glow': 'text-glow 3s ease-in-out infinite',
        'float': 'float 20s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 2s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { 
            'box-shadow': '0 0 20px rgba(0, 212, 255, 0.5)',
            'filter': 'brightness(1)'
          },
          '50%': { 
            'box-shadow': '0 0 30px rgba(0, 212, 255, 0.8)',
            'filter': 'brightness(1.2)'
          }
        },
        'text-glow': {
          '0%, 100%': { 
            'text-shadow': '0 0 5px currentColor, 0 0 10px currentColor'
          },
          '50%': { 
            'text-shadow': '0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(20px) rotate(-1deg)' }
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '75%': { opacity: '0.9' }
        }
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(45deg, #00d4ff, #7b2cbf, #ff006e)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #0f0f23 100%)',
      }
    },
  },
  plugins: [],
};
