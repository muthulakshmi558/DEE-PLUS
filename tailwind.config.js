/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src folder-la ellam scan pannum
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B285C0', // meditation website main color
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // font style
      },
    },
  },
  plugins: [],
}
