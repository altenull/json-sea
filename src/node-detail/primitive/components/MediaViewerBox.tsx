import { styled } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const _MediaViewerBox = ({ children }: Props) => {
  return <StyledHost>{children}</StyledHost>;
};

const StyledHost = styled('div', {
  backgroundColor: '$gray50',
  borderRadius: '$xs',
  padding: '$4',
});

export const MediaViewerBox = memo(_MediaViewerBox);
