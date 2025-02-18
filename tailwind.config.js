/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': "#1476ff",
        'secondary': "#f3f5ff",
        'light': "#f9faff",
        },
        fontFamily: {
          custom: ['"Raleway"', 'sans-serif'], // Custom font
        },
        spacing: {
          18: '4.5rem', // Custom spacing (for example, '4.5rem' for a margin or padding)
        },
        borderRadius: {
          'xl': '12px', // Custom border radius
        },
      },
    },
    plugins: [],
  }
  