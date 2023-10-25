const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {},
          colors: {
            border: 'rgba(0, 0, 0, 0.15)',
            backgroundAlpha: 'rgba(255, 255, 255, 0.8)',
          },
        },
        dark: {
          layout: {},
          colors: {
            border: 'rgba(255, 255, 255, 0.15)',
            backgroundAlpha: 'rgba(0, 0, 0, 0.6)',
          },
        },
      },
    }),
  ],
};
