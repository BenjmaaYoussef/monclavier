/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E4405C",
        secondary: "#FFBA15",
        accent: "#A8C69F",
        back: "#080F0F",
        info: "#00e6ff",
        success: "#00ff75",
        warning: "#a75400",
        error: "#EF569F",
      },
    },
  },
  plugins: [],
};
