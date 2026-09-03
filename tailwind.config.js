/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        regal: {
          DEFAULT: "#6C63FF",
          light: "#8B83FF",
          dark: "#4A42D1",
        },
        background: {
          DEFAULT: "#0A0A0F",
          card: "#14141E",
          elevated: "#1C1C2A",
        },
        border: {
          DEFAULT: "#2A2A3E",
        },
        text: {
          DEFAULT: "#EDEDF2",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
