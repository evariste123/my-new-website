/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF',
        customGreen: '#10B981',
      },
    },
  },
  plugins: [],
};