module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // lebih jauh agar looping
        },
        "slide-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-left": "slide-left 30s linear infinite",
        "slide-right": "slide-right 30s linear infinite",
      },
    },
  },
  plugins: [],
};