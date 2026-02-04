module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "nes-dark": "var(--color-dark)",
        "nes-light": "var(--color-light)",
        "nes-orange": "var(--color-orange)",
        "nes-white": "var(--color-white)",
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
