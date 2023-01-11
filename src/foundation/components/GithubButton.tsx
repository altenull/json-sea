'use client';

import { useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { externalLink } from '../../environment';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';
import { openLinkAsNewTab } from '../../utils/window.util';

const _GithubButton = () => {
  const { theme } = useTheme();

  return (
    <CircleTransparentButton onClick={() => openLinkAsNewTab(externalLink.jsonSeaGithubRepo)}>
      <Icon icon="github" size={24} color={theme?.colors.accents8.value} />
    </CircleTransparentButton>
  );
};

export const GithubButton = memo(_GithubButton);
