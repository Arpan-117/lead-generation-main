/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // ── COLOURS ──────────────────────────────────────────────────────
      colors: {
        gold: {
          DEFAULT: '#B8922E',
          light:   '#C9A84C',
          pale:    '#F5EDD8',
        },
        cream: {
          DEFAULT: '#F8F4EC',
          mid:     '#EDE8DC',
          dark:    '#E5DFD0',
        },
        navy: {
          DEFAULT: '#0A1628',
          mid:     '#122040',
          light:   '#1a2e52',
        },
        muted: '#5A6E87',
      },

      // ── TYPOGRAPHY ───────────────────────────────────────────────────
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Josefin Sans"', 'sans-serif'],
        content: ['"Inter"', 'sans-serif']
      },
      fontSize: {
        'eyebrow': ['10px', { letterSpacing: '5px', lineHeight: '1' }],
        'label':   ['11px', { letterSpacing: '4px', lineHeight: '1' }],
        'caption': ['10px', { letterSpacing: '3px', lineHeight: '1' }],
      },

      // ── SPACING ──────────────────────────────────────────────────────
      spacing: {
        'section':    '5rem',   // mobile section padding
        'section-lg': '8rem',   // desktop section padding
        'gutter':     '1.25rem',
        'gutter-lg':  '4rem',
      },

      // ── SCREENS (mobile-first breakpoints) ───────────────────────────
      screens: {
        'sm':  '480px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1440px',
      },

      // ── BORDER ───────────────────────────────────────────────────────
      borderWidth: {
        'hair': '0.5px',
      },
      borderColor: {
        'gold-subtle': 'rgba(184,146,46,0.2)',
        'gold-mid':    'rgba(184,146,46,0.35)',
      },

      // ── ANIMATION ────────────────────────────────────────────────────
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spinSlow: {
          '0%':   { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease both',
        'fade-up-1': 'fadeUp 0.8s ease 0.1s both',
        'fade-up-2': 'fadeUp 0.8s ease 0.25s both',
        'fade-up-3': 'fadeUp 0.8s ease 0.4s both',
        'fade-up-4': 'fadeUp 0.8s ease 0.55s both',
        'fade-up-5': 'fadeUp 0.8s ease 0.7s both',
        'spin-slow':  'spinSlow 60s linear infinite',
        'marquee':    'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
};
