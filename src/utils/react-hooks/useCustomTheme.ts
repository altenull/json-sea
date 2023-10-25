'use client';

import { useTheme } from 'next-themes';

/**
 * There is type `UseThemeProps` for return type of `useTheme()` in `next-themes` but not exported.
 * So I define `UseThemeReturn` type here.
 */
type UseThemeReturn = ReturnType<typeof useTheme>;

type UseCustomThemeReturn = UseThemeReturn & {
  theme: 'light' | 'dark';
  isDarkMode: boolean;
};

export const useCustomTheme = (): UseCustomThemeReturn => {
  const useThemeReturn = useTheme();

  const isDarkMode = useThemeReturn.theme === 'dark';

  return {
    ...useThemeReturn,
    theme: isDarkMode ? 'dark' : 'light',
    isDarkMode,
  };
};
