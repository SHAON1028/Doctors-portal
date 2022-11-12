/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorsthemes: {
          primary:'#0FCFEC',
          secondary: "#19D3AE",
          "base-100": "#ffffff",
          neutral: "#3A4256",
          accent: "#37cdbe",
        
        }
      }
      
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}