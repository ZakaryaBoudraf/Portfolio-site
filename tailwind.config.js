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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-up-delay-1': 'fadeInUp 1s ease-out 0.2s both',
        'fade-in-up-delay-2': 'fadeInUp 1s ease-out 0.4s both',
      },
    },
  },
  plugins: [],
};
