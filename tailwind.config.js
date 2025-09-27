const { heroui, commonColors } = require("@heroui/theme");
const { sizes } = require('./src/ui/constants/sizes.constant');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/components/(button|chip|card|navbar|toggle|tooltip|modal|input|circular-progress|table|image|link).js",
  ],
  theme: {
    extend: {
      padding: {
        nodePadding: sizes.nodePadding,
      },
      height: {
        nodeContentHeight: sizes.nodeContentHeight,
      },
      minWidth: {
        arrayNodeSize: sizes.arrayNodeSize,
        nodeMinWidth: sizes.nodeMinWidth,
        nodeDetailPanelWidth: sizes.nodeDetailPanelWidth,
      },
      maxWidth: {
        arrayNodeSize: sizes.arrayNodeSize,
        nodeMaxWidth: sizes.nodeMaxWidth,
        nodeDetailPanelWidth: sizes.nodeDetailPanelWidth,
      },
      minHeight: {
        arrayNodeSize: sizes.arrayNodeSize,
      },
      maxHeight: {
        arrayNodeSize: sizes.arrayNodeSize,
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
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
            titleJson: '#00254D', // 'JSON' of 'JSON SEA'
            titleSea: '#4C76A5', // 'SEA' of 'JSON SEA'
          },
        },
        dark: {
          layout: {},
          colors: {
            border: 'rgba(255, 255, 255, 0.15)',
            backgroundAlpha: 'rgba(0, 0, 0, 0.6)',
            backgroundContrast: '#16181A',
            titleJson: commonColors.zinc[100], // 'JSON' of 'JSON SEA'
            titleSea: commonColors.zinc[100], // 'SEA' of 'JSON SEA'
          },
        },
      },
    }),
  ],
};
