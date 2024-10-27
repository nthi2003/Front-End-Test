/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-1': 'linear-gradient(270deg, rgba(62, 162, 244, 0) 13.07%, rgba(66, 62, 244, 0.1) 103.18%)',
        'custom-linear': 'linear-gradient(90deg, #ABECA2 -1.42%, #2FB3FE 30.38%, #6A8EEA 65.09%, #A185F4 99.55%)',
        'custom-gradient': 'linear-gradient(180deg, #04DB74 0%, #4EFDA9 30.73%, #07DCD0 60.94%, #07DCDC 100%)',
        'custom-conic-gradient': 'conic-gradient(from 124.76deg at 49.86% 36.95%, #A185F4 -5.64deg, #ABECA2 0.06deg, #2FB3FE 111.61deg, #6A8EEA 233.41deg, #A185F4 354.35deg, #ABECA2 360.06deg)',
      },
      colors: {
        gradientStart: '#777E90',
        gradientEnd: '#FBFBFB',
      },
      boxShadow: {
        'custom-inset': '0px 0px 0px 1.27px rgba(0, 0, 0, 0.25) inset',
      },
    },
  },
  plugins: [],
}
