/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#BDCBC9",
        green: "#ABBB6C",
        lightgreen: "#C8DAAC",
      },
      fontFamily: {
        sil: "Abyssinica SIL, serif",
        lora: "Lora, serif;",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
