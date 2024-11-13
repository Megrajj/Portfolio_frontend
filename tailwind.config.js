// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this matches your file structure
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  
};
