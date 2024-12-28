/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        msm: { max: "640px" },
        mmd: { max: "768px" },
      },
    },
  },
  plugins: [],
};
