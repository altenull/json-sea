'use client';

import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    letterSpacings: {
      tighter: '0',
      tight: '0',
      normal: '0',
      wide: '0',
      wider: '0',
      widest: '0',
    },
  },
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    letterSpacings: {
      tighter: '0',
      tight: '0',
      normal: '0',
      wide: '0',
      wider: '0',
      widest: '0',
    },
  },
});

const Providers = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <ThemeProvider
        defaultTheme="system"
        enableSystem
        attribute="class" // With 'class' `attribute` prop, you don't need to pass `theme` prop to <NextUIProvider>.
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default Providers;
