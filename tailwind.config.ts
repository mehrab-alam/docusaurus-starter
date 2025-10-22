// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
    "./node_modules/magicui/**/*.{js,ts,jsx,tsx}", // 👈 include Magic UI paths if using it
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 5s ease infinite",
      },
      backgroundImage: {
        "linear-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
