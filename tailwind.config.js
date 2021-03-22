module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kodi: "#17B2E7",
        "kodi-darker": "#149ECC",
        "kodi-lighter": "#45C2EC",
        kodibg: "#1B4352",
        "kodibg-darker": "#12323E",
        "kodibg-lighter": "#20576B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
