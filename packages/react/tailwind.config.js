module.exports = {
  content: [
    './test/**/*.{js,ts,jsx,tsx}',
  ],

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],

  theme: {
    screens: {
      'xs': '414px',
    },
  },
};
