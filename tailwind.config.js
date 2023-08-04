/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bgPurple: "#e8cde0",
      boldPurple: "#45216c",
      lightPurple: "#5f3b86",
      lightPurple1: "#d6c2ec",
      darkPurple: "#e7daf4",
      fadePurple: "#eeddea",
      fadePink: "#FFBEE7",
      white: "#FFFF",
      black: "0000",
    },
    fontFamily: {
      regular: ["regular"],
      Bold: ["bold"],
      extraBold: ["extra-bold"],
      Italic: ["italic"],
      mdItalic: ["md-italic"],
      black: ["black"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
