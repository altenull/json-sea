import { semanticColors } from '@nextui-org/theme';
import { memo } from 'react';
import { externalLink } from '../../environment';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';
import { openLinkAsNewTab } from '../../utils/window.util';

const _GithubButton = () => {
  const { theme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={() => openLinkAsNewTab(externalLink.jsonSeaGithubRepo)}>
      <Icon icon="github" size={24} color={semanticColors[theme].default[600]} />
    </CircleTransparentButton>
  );
};

export const GithubButton = memo(_GithubButton);
