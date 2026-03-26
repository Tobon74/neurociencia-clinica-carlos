/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloud-dancer': '#F8F9FA',
        'ocean-calm': '#A3C9E1',
        'deep-neuro': '#2D3436',
        'accent-soft': '#7DA6A0',
      },
      fontFamily: {
        // Cambiamos las variables por fuentes directas para que no rompa
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}