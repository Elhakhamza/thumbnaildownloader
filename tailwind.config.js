/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Adjust paths to match your project structure
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Blue
        secondary: '#22c55e', // Green
      },
    },
  },
  plugins: [],
};
