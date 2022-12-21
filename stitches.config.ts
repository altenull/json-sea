import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

const stitches = createStitches({
  prefix: 'json-sea',
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
    sizes: {
      jsonEditorWidth: '360px',
      nodeDetailPanelWidth: '360px',
      globalNavHeight: '54px', // height of <Navbar isCompacted>
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
});

export const createThemeBase = stitches.createTheme;
export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const keyframes = stitches.keyframes;
export const getCssText = stitches.getCssText;
export const theme = stitches.theme;
export const config = stitches.config;

// export const createTheme = ({type, theme, className}: Theme) => {
//   if (!type) {
//     throw new Error("Theme type is required");
//   }

//   return createThemeBase(
//     className || `${type}-theme`,
//     deepMerge(type === "dark" ? darkTheme : lightTheme, theme),
//   );
// };

// stitches types
export type StitchesConfig = typeof config;
export type VariantProps<T> = Stitches.VariantProps<T>;
export type PropertyValue<T extends keyof Stitches.CSSProperties> = Stitches.PropertyValue<T>;
export type ScaleValue<T> = Stitches.ScaleValue<T>;
export type CSSProperties = Stitches.CSSProperties;
export type CSS = Stitches.CSS<StitchesConfig>;
export type StitchesTheme = typeof theme;

// common theme types
// export type Spaces = StitchesConfig["theme"]["space"];
// export type FontSizes = StitchesConfig["theme"]["fontSizes"];
// export type Fonts = StitchesConfig["theme"]["fonts"];
// export type FontWeights = StitchesConfig["theme"]["fontWeights"];
// export type LineHeights = StitchesConfig["theme"]["lineHeights"];
// export type LetterSpacings = StitchesConfig["theme"]["letterSpacings"];
export type Colors = StitchesConfig['theme']['colors'];
// export type Radii = StitchesConfig["theme"]["radii"];
// export type zIndices = StitchesConfig["theme"]["zIndices"];
// export type BorderWeights = StitchesConfig["theme"]["borderWeights"];
// export type Tranistions = StitchesConfig["theme"]["transitions"];
// export type Breakpoints = StitchesConfig["theme"]["breakpoints"];
