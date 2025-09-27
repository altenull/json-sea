import { semanticColors } from "@heroui/react";
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';

const _ThemeToggle = () => {
  const { theme, isDarkMode, setTheme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
      <Icon icon={isDarkMode ? 'sun' : 'moon'} size={24} color={semanticColors[theme].default[500]} />
    </CircleTransparentButton>
  );
};

export const ThemeToggle = _ThemeToggle;
