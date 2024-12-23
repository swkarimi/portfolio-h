/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./*.html", "./src/**/*.html", "./src/**/*.js"],
  theme: {
    fontFamily: {
      'serif': ['ui-serif', 'Georgia'],
      'Arial': ['Arial', 'Helvetica', 'sans-serif'],
      'sans': ['ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        customBg: '#1c3554',
        customText: '#59e0d4',
      },
      backdropBlur: {
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
