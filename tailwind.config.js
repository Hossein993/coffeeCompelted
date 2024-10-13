const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
    darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        normal: "0 1px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem" 
      },
      fontFamily: {
        danaRegular: "danaRegular",
        danaMedium: "danaMedium",
        danaDemiBold: "danaDemiBold",
        morabbaBold: "morabbaBold",
        morabbaMedium: "morabbaMedium",
        morabbaLight: "morabbaLight",
      },
      letterSpacing: {
        tightest: "-0.065em"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          lg: "10px"
        }
      }
    },
  },
  plugins: [
    function({ addVariant }){
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }
  ],
}

