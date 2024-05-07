/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#484FE7",
        secondary: {
          DEFAULT: "#17191D",
          dark: "#17191D",
          light: "#17191D",
        },
        tertiary: {
          DEFAULT: "#262930",
          dark: "#262930",
          light: "#262930",
        },
        black: {
          DEFAULT: "#000",
        },

        textColor: {
          DEFAULT: "#E4E8EB",
          light: "#E4E8EB",
          dark: "#E4E8EB",
        },
      },
      fontFamily: {
        zthin: ["ZonaPro-Thin", "sans-serif"],
        zlight: ["ZonaPro-Light", "sans-serif"],
        zregular: ["ZonaPro-Regular", "sans-serif"],
        zultra: ["ZonaPro-Ultra", "sans-serif"],
        zsemibold: ["ZonaPro-SemiBold", "sans-serif"],
        zbold: ["ZonaPro-Bold", "sans-serif"],
        zextrabold: ["ZonaPro-ExtraBold", "sans-serif"],
        zblack: ["ZonaPro-Black", "sans-serif"],
      },
      borderRadius: {
        "2xl": "15px",
      },
    },

    fontFamily: {
      sans: ["italic", "sans-serif"],
      default: "ZonaPro-Regular",
      DEFAULT: "ZonaPro-Regular",
    },
  },
  plugins: [],
};
