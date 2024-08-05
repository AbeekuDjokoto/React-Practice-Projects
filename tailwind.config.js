/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "lds-ring": "lds-ring 1.2s linear infinite",
      },
      width: {
        90: "90%",
      },
      maxWidth: {
        custom: "var(--max-width)",
      },
      keyframes: {
        "lds-ring": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        "loader-bg": "#ffffff",
      },
      spacing: {
        4.5: "1.125rem",
      },
      borderWidth: {
        2.5: "2.5px",
      },
      fontFamily: {
        sofia: ["var(--font-sofia)"],
      },
    },
  },
  plugins: [],
};
