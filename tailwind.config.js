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
        "2xl": "1792px"
      },
      padding: {
        DEFAULT: "0",
        //  lg: "2rem",
        //  "xl": "3rem",
        //  "2xl": "4rem"
      },
    },
    extend: {
      fontFamily: {
        Passion:['PassionOne', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        LEMONMILK: ['LEMONMILK, sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

