const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/components/(button|chip|card).js'],
  theme: {
    extend: {},
  },
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
            backgroundContrast: '#ffffff',
          },
        },
        dark: {
          layout: {},
          colors: {
            border: 'rgba(255, 255, 255, 0.15)',
            backgroundAlpha: 'rgba(0, 0, 0, 0.6)',
            backgroundContrast: '#16181A',
          },
        },
      },
    }),
  ],
};
