import { styled } from '@nextui-org/react';
import { memo } from 'react';

const _HoveringBlueDot = () => {
  return <S_Host />;
};

const S_Host = styled('span', {
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translate(70%, -50%)',
  minWidth: '10px',
  minHeight: '10px',
  backgroundColor: '$blue600',
  borderRadius: '50%',
});

export const HoveringBlueDot = memo(_HoveringBlueDot);
