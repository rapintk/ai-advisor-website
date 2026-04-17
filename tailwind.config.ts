import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0A0A0F', 50: '#1A1A2E' },
        accent: { DEFAULT: '#00D4FF', dark: '#00A8CC', light: '#33DDFF' },
        secondary: { DEFAULT: '#FF6B35', dark: '#CC5528', light: '#FF8E62' },
        card: { DEFAULT: '#12121A', hover: '#16161F' },
        surface: '#0D0D15',
      },
      fontFamily: {
        display: ['var(--font-prompt)', ...fontFamily.sans],
        body: ['var(--font-sarabun)', ...fontFamily.sans],
        sans: ['var(--font-sarabun)', ...fontFamily.sans],
      },
      backgroundImage: {
        'grid-pattern':
          'radial-gradient(circle at 1px 1px, rgba(0,212,255,0.12) 1px, transparent 0)',
        'dot-pattern':
          'radial-gradient(circle, rgba(0,212,255,0.08) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0,212,255,0.15), transparent)',
        'cta-gradient':
          'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(255,107,53,0.08) 100%)',
      },
      backgroundSize: {
        grid: '40px 40px',
        dots: '24px 24px',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0,212,255,0.25)',
        'glow-cyan-lg': '0 0 60px rgba(0,212,255,0.35)',
        'glow-orange': '0 0 30px rgba(255,107,53,0.25)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
