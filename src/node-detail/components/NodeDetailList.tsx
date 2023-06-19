import { styled } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const _NodeDetailList = ({ children }: Props) => {
  return <S_Host>{children}</S_Host>;
};

const S_Host = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
});

export const NodeDetailList = memo(_NodeDetailList);
