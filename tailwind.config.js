/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1B6B3A',
          'green-dark': '#144F2B',
          'green-light': '#2A8C4F',
          amber: '#F59E0B',
          'amber-dark': '#D97706',
          'amber-light': '#FCD34D',
          cream: '#FEFCE8',
          charcoal: '#1C1C1E',
          'warm-gray': '#6B7280',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        accent: ['"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 32px -8px rgba(0,0,0,0.20)',
        cta: '0 4px 24px rgba(245,158,11,0.4)',
      },
    },
  },
  plugins: [],
}