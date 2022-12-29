import { styled } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const _NodeDetailList = ({ children }: Props) => {
  return <StyledHost>{children}</StyledHost>;
};

const StyledHost = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
});

export const NodeDetailList = memo(_NodeDetailList);
