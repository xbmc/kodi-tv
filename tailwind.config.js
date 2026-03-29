module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kodi: "#17B2E7",
        "kodi-darker": "#149ECC",
        "kodi-lighter": "#45C2EC",
        "kodi-glow": "#17B2E7",
        kodibg: "#0F2D3A",
        "kodibg-lighter": "#163D4F",
        "kodibg-deep": "#091E27",
        "kodi-castellina": "#C47F4A",
        "kodi-surface": "#111B22",
        "kodi-surface-light": "#F7F9FA",
      },
      fontFamily: {
        display: ['"Outfit"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(23, 178, 231, 0.15)",
        "glow-lg": "0 0 40px rgba(23, 178, 231, 0.2)",
        "card-hover":
          "0 20px 40px rgba(0, 0, 0, 0.12), 0 0 20px rgba(23, 178, 231, 0.08)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "kodi-gradient":
          "linear-gradient(135deg, #149ECC 0%, #17B2E7 50%, #45C2EC 100%)",
        "kodi-gradient-subtle":
          "linear-gradient(135deg, rgba(23,178,231,0.05) 0%, rgba(69,194,236,0.02) 100%)",
        "surface-grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(23, 178, 231, 0.15)" },
          "50%": { boxShadow: "0 0 30px rgba(23, 178, 231, 0.3)" },
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
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
