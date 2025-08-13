/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        "customBlue": "#006795",
        "customWhite": "#f7fcff",
        "customGray": "#758398",
        "customDarkgray": "#202a2c",
        "customlightgray": "#f9fafb",
        "customDarkBackground": '#151a1d',
        "customCardDarkBackground": '#14181c',
      },
    },
  },
  plugins: [],
}

