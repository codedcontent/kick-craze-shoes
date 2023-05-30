/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#c72092",
        "primary-2": "#6c14d0",
      },
      fontFamily: {
        "indie-flower": ["Indie Flower"],
      },
      keyframes: {
        "shake-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateY(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateY(2px)" },
        },
        "shake-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
      },
      animation: {
        "shake-y": "shake-y 1s",
        "shake-x": "shake-x 1s",
      },
    },
  },
  plugins: [],
};
