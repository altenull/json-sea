'use client';

import { Button, useTheme } from '@nextui-org/react';
import { useTheme as useNextThemes } from 'next-themes';

const _ThemeToggle = () => {
  const { setTheme } = useNextThemes();
  const { isDark } = useTheme();

  return (
    // TODO: Change to theme icons (e.g. Sun & Moon).
    <Button bordered size="sm" color="warning" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? 'To light' : 'To dark'}
    </Button>
  );
};

export const ThemeToggle = _ThemeToggle;
