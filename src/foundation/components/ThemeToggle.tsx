'use client';

import { useTheme } from '@nextui-org/react';
import { useTheme as useNextThemes } from 'next-themes';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';

const _ThemeToggle = () => {
  const { isDark, theme } = useTheme();
  const { setTheme } = useNextThemes();

  return (
    <CircleTransparentButton onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      <Icon icon={isDark ? 'sun' : 'moon'} size={24} color={theme?.colors.accents8.value} />
    </CircleTransparentButton>
  );
};

export const ThemeToggle = _ThemeToggle;
