/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flo: {
          primary: '#1e40af', // Blue from Flo Energy branding
          secondary: '#059669', // Green for energy/growth theme
          accent: '#dc2626', // Red accent
          dark: '#1f2937',
          light: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
