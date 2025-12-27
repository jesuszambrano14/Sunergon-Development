/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sunergon': {
          'navy': 'var(--sunergon-navy)',
          'navy-dark': 'var(--sunergon-navy-dark)',
          'navy-light': 'var(--sunergon-navy-light)',
          'orange': 'var(--sunergon-orange)',
          'orange-dark': 'var(--sunergon-orange-dark)',
          'orange-light': 'var(--sunergon-orange-light)',
        },
        'text': {
          'dark': 'var(--text-dark)',
          'medium': 'var(--text-medium)',
          'light': 'var(--text-light)',
          'muted-dark': 'var(--text-muted-dark)',
          'muted-light': 'var(--text-muted-light)',
        },
        'bg': {
          'light': 'var(--bg-light)',
          'off-white': 'var(--bg-off-white)',
          'light-gray': 'var(--bg-light-gray)',
          'dark': 'var(--bg-dark)',
        },
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.2)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.25)',
      },
      borderColor: {
        'light': 'var(--border-light)',
        'medium': 'var(--border-medium)',
        'accent': 'var(--border-accent)',
      },
      backgroundImage: {
        'overlay-dark': 'var(--overlay-dark)',
        'overlay-gradient-dark': 'var(--overlay-gradient-dark)',
        'overlay-gradient-light': 'var(--overlay-gradient-light)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
