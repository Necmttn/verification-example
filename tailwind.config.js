const plugin = require("tailwindcss/plugin");

module.exports = {
  important: true,
  theme: {
    fontFamily: {
      mono:
        "Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace",
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {
      fontSize: {
        "8xl": "6.25rem",
      },
      screens: {
        xs: "",
      },
      padding: {
        "p-1": "1px",
      },
    }
  },
  plugins: [],
  purge: ["./components/**/*.tsx", "./containers/**/*.tsx", "./pages/**/*.tsx", "./style/**/*.tsx"],
};
