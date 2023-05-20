/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, 50%)",
          },
          "15%, 70%": {
            opacity: "1",
            transform: "translate(-50%, 0)",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        toast: "fadeInOut 3000ms ease",
      },
    },
  },
  plugins: [],
};
