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
          950: '#220608',
          900: '#340b0f',
          800: '#4a0e14',
          700: '#670f15',
          600: '#8c1519',
        },
        azul: {
          950: '#050e2a',
          900: '#091b45',
          800: '#0d2a60',
        },
        floresta: {
          950: '#051d0a',
          900: '#082f10',
          800: '#0d4518',
        },
        ardosia: {
          950: '#070708',
          900: '#0d0d0e',
          800: '#141415',
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
