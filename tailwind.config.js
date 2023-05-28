/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#c72092",
        "primary-2": "#6c14d0",
      },
    },
  },
  plugins: [],
};
