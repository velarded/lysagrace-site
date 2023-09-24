/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'messiri': ['El Messiri'],
      'textContent': ['Sans Pro 3'],
      '': ['Sans Pro 3']
    },
    fontSize: {
      sectionHeader: '3.75rem' 
    },
    fontWeight: {
      sectionHeader: '600'
    },
    letterSpacing: {
      'sitelogo': '0.3em',
      'sectionHeader': '0.25rem'
    },
    extend: {
      colors: {
        'iceblue': '#bacbdf'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

// width: 0.625rem; /* 10px */
