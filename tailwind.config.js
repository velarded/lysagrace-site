/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    fontFamily: {
      'messiri': ['El Messiri'],
      'textContent': ['Sans Pro 3'],
      '': ['Sans Pro 3']
    },
    fontSize: {
      sectionHeader: '3.75rem', 
      heroTitle: ['5rem', {
        lineHeight: '110%',
        letterSpacing: '0.5rem',
        fontWeight: '900'
      }], 
      heroTitleDesktop: ['10rem', {
        lineHeight: '110%',
        letterSpacing: '1.5rem',
        fontWeight: '900'
      }],
      heroSubheading: ['0.6rem', {
        letterSpacing: '0.25rem'
      }],
      heroSubheadingDesktop: ['1.25rem', {
        letterSpacing: '0.25rem'
      }]
    },
    fontWeight: {
      sectionHeader: '600',
      sectionText: '300'
    },
    letterSpacing: {
      'sitelogo': '0.3em',
      'sectionHeader': '0.25rem',
      'footer': '0.1rem'
    },
    extend: {
      colors: {
        'iceblue': '#bacbdf',
        'containerBg': '#f1f1f1'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'hero-section': 'calc(100vh - 4rem)'
      }
    },
  },
  plugins: [],
}

// width: 0.625rem; /* 10px */
