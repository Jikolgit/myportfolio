/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,tsx}',
  './components/**/*.{js,jsx,tsx}',
  './app/**/*.{js,jsx,tsx}',
  './src/**/*.{js,jsx,tsx}',],
  theme: {
    extend: {screens: { 
      
      
      'sm': {'max': '1000px'},
      'max1220': {'max': '1220px'},
      'max850': {'max': '850px'},
      'max600': {'max': '600px'},
      // => @media (min-width: 640px) { ... }

      // 'md': {'max': '465px'},
      // // => @media (min-width: 768px) { ... }
      // 'md2': {'max': '700px'},
      // 'eventmd1': {'max': '1070px'},
      // 'ticketmd1': {'max': '1050px'},
      // 'ticketmd2': {'max': '700px'},
      // 'expomd1': {'max': '1000px'},
      // 'expomd2': {'max': '600px'},
      // 'expodesc600': {'max': '600px'},
      // 'lg': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'xl': '1280px',
      // // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
    }},
  },
  plugins: [],
}

