/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:["Outfit"]
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-200px)', width:'0%' },
          '100%': { opacity: '1', transform: 'translateX(0)', width:'100%' },
        },
        'loader':{
          '0%':{backgroundPosition:'-800px'},
          '100%':{backgroundPosition:'800px'},
        }
      },
      animation: {
        'fade-in-left': 'fade-in-left 2.2s ease-out backwards',
        'loader-linear':'loader 3s linear infinite',
      },
    },
  },
  plugins: [],
}

