/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{html,js,jsx,tsx}",
      "./components/**/*.{html,js,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#141414",
          blue: "#3575E2",
        },
      },
    },
    plugins: [],
  };
  