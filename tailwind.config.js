/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
        },
        accent: {
          DEFAULT: '#22C55E',
        },
        heading: '#111827',
        description: '#6B7280',
        background: {
          DEFAULT: '#fff',
          gradient: 'linear-gradient(135deg, #fff 0%, #f0f6ff 50%, #dbeafe 100%)',
        },
        success: {
          DEFAULT: '#27ae60', // Success Green
        },
        alert: {
          DEFAULT: '#e74c3c', // Alert Red
        },
        gray: {
          50: '#f8f9fa', // Light Gray
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d', // Medium Gray
          600: '#495057',
          700: '#343a40', // Dark Gray
          800: '#212529',
          900: '#121416'
        },
        white: '#ffffff',
        card: '#FFFFFF',
        secondary: '#F5E9DA',
        softgray: '#F1F5F9',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      letterSpacing: {
        tight: '-0.025em',
        normal: '0em',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
        'glass-card': '0 4px 24px 0 rgba(31, 38, 135, 0.08)',
        soft: '0 2px 12px 0 rgba(60, 64, 67, 0.08)',
        glow: '0 0 12px #fff',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #fff 0%, #f0f6ff 50%, #dbeafe 100%)',
        'cta-gradient': 'linear-gradient(90deg, #2563EB 0%, #6366F1 100%)',
      },
      outline: {
        gradient: '2px solid transparent',
      },
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      spacing: {
        'side': '8%',
        'side-lg': '10%',
      },
    },
    variants: {
      extend: {
        boxShadow: ['hover', 'focus'],
        backgroundColor: ['hover', 'focus'],
        scale: ['hover', 'focus'],
        opacity: ['group-hover'],
      },
    },
  },
  plugins: [],
};