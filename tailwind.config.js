export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'],
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['EB Garamond', 'Georgia', 'serif'],
      },
      colors: {
        carmesim: {
          950: '#1a0507',
          900: '#2b0709',
          800: '#3d0a0d',
          700: '#570d11',
          600: '#7a1216',
        },
        ouro: {
          300: '#f5d77a',
          400: '#e6bf52',
          500: '#c9a23a',
          600: '#a07d24',
        },
      },
      animation: {
        'spin-slow':    'spin 30s linear infinite',
        'spin-slower':  'spin 60s linear infinite',
        'spin-reverse': 'spin-reverse 45s linear infinite',
        'pulse-soft':   'pulse-soft 4s ease-in-out infinite',
        'flicker':      'flicker 5s ease-in-out infinite',
        'float-up':     'float-up 8s ease-in-out infinite',
        'scroll-hint':  'scroll-hint 2.4s ease-in-out infinite',
        'fade-in':      'fade-in 1.2s ease-out forwards',
        'fade-up':      'fade-up 1.2s ease-out forwards',
      },
    },
  },
};
