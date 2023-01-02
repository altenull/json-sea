'use client';

import { useTheme } from '@nextui-org/react';
import { memo, useCallback } from 'react';
import { externalLink } from '../../environment';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';

const _GithubButton = () => {
  const { theme } = useTheme();

  const handleClick = useCallback(() => {
    window.open(externalLink.jsonSeaGithubRepo, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <CircleTransparentButton onClick={handleClick}>
      <Icon icon="github" size={24} color={theme?.colors.accents8.value} />
    </CircleTransparentButton>
  );
};

export const GithubButton = memo(_GithubButton);
