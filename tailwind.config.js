/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-focus": "Shadow/xs focused 4px primary-100",
        "custom-shadow-100":
          "  0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
        "custom-shadow-3xl": "0px 32px 64px -12px #10182824",
        "custom-shadow-sm":
          "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
        "custom-shadow-lg":
          " 0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
      },
      colors: {
        "app-blue-100": "#3A54B4",
      },
    },
  },
  plugins: [],
};
