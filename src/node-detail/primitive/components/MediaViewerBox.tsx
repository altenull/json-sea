import { styled } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const _MediaViewerBox = ({ children }: Props) => {
  return <S_Host>{children}</S_Host>;
};

const S_Host = styled('div', {
  backgroundColor: '$gray50',
  borderRadius: '$xs',
  padding: '$4',
});

export const MediaViewerBox = memo(_MediaViewerBox);
