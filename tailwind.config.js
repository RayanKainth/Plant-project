/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px"
      },
      padding: {
        DEFAULT: "1rem", // 16px on mobile
        sm: "1.5rem",    // 24px on small screens
      },
    },
    extend: {
      fontFamily: {
        Passion:['PassionOne', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        LEMONMILK: ['LEMONMILK, sans-serif']
      },
    },
  },
  plugins: [],
}

