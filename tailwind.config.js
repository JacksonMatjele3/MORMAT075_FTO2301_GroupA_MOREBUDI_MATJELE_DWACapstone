/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733", // Replace with your desired primary color
        secondary: "#3C91E6", // Replace with your desired secondary color
        // Add more color variations as needed
      },
    },
  },
  plugins: [],
}
