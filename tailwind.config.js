/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f5faff",
          100: "#daf0ff",
          200: "#add9ff",
          300: "#80c2ff",
          400: "#4daaff",
          500: "#008cff",
          600: "#0074b4",
          700: "#005e8c",
          800: "#004466",
          900: "#002e40",
        },
        gray: {
          50: "#f7fafc",
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#171923",
        },
      },
    },
  },
  plugins: [],
};
