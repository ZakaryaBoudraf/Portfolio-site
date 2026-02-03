module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "nes-dark": "#424242",
        "nes-light": "#E8E8E8",
        "nes-orange": "#FC5230",
        "nes-white": "#F5F5F5",
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
