module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kodi: "#17B2E7",
        "kodi-darker": "#149ECC",
        "kodi-lighter": "#45C2EC",
        kodibg: "#1B4352",
        "kodibg-lighter": "#20576B",
        "kodi-castellina": "#A56E41",
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
