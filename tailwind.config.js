/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary gold accent (unified palette)
        accent: {
          DEFAULT: '#C9A962',
          light: '#D4BC7D',
          dark: '#B8944A',
          50: '#FCF9F3',
          100: '#F7F0E0',
          200: '#EDE0C4',
          300: '#E0CCA3',
          400: '#D4BC7D',
          500: '#C9A962',
          600: '#B8944A',
          700: '#9A7A3D',
          800: '#7C6231',
          900: '#5E4A25',
        },
        // Gold alias (same as accent for consistency)
        gold: {
          DEFAULT: '#C9A962',
          light: '#D4BC7D',
          dark: '#B8944A',
          50: '#FCF9F3',
          100: '#F7F0E0',
          200: '#EDE0C4',
          300: '#E0CCA3',
          400: '#D4BC7D',
          500: '#C9A962',
          600: '#B8944A',
          700: '#9A7A3D',
          800: '#7C6231',
          900: '#5E4A25',
        },
        // Navy secondary color
        navy: {
          DEFAULT: '#1A2B4A',
          light: '#2A3D5F',
          dark: '#0F1A2E',
          50: '#E8EBF0',
          100: '#D1D7E1',
          200: '#A3AFC3',
          300: '#7587A5',
          400: '#475F87',
          500: '#1A2B4A',
          600: '#15233C',
          700: '#101A2D',
          800: '#0B121F',
          900: '#060910',
        },
        // Cream background
        cream: {
          DEFAULT: '#FAF8F5',
          dark: '#F5F2ED',
        },
        // Charcoal text
        charcoal: {
          DEFAULT: '#2D2D2D',
          light: '#4A4A4A',
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-diagonal': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
        'accent': '0 10px 40px -10px rgba(201, 169, 98, 0.3)',
        'gold': '0 10px 40px -10px rgba(201, 169, 98, 0.3)',
        'navy': '0 10px 40px -10px rgba(26, 43, 74, 0.3)',
      },
    },
  },
  plugins: [],
}
