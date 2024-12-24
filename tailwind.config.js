/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ' #ED951F',
        secondary: '#FFECD1',
        other: '#FFECD1',
        input: '#EFEFEF',
       navigation1:'#FFD08D',
        navigation2:'#FFECD1',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        mobile: '320px', // Smallest mobile screens
        tablet: '1140px', // Tablets
        laptop: '1024px', // Laptops
        desktop: '1280px', // Desktops
      },
    },
  },
  plugins: [],
}

