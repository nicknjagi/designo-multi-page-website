/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'peach-primary': '#e7816B',
        'peach-secondary': ' #FFAD9B',
        'light-peach':'#FDF3F0',
        'dark-grey': '#333136',
        'light-grey': '#F1F3F5',
        'dark-bg': '#1D1C1E',
        'darker-grey': '#8F8E8F'
      },
    },
  },
  plugins: [],
}
