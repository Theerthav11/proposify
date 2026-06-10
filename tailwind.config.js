/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {

        primary: {
          navy: "#303C6C",
          coral: "#F4976C",
          yellow: "#FBE8A6",
          teal: "#B4DFE5",
          lightblue: "#D2FDFF",
        },

      },

      animation: {
        "border-beam": "border-beam linear infinite",
      },

      keyframes: {

        "border-beam": {

          "0%": {
            transform: "translateX(-200px)",
          },

          "100%": {
            transform: "translateX(calc(100vw + 200px))",
          },

        },

      },

    },
  },

  plugins: [],

}