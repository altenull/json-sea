import { styled } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  color: string;
};

const _ColorPreview = ({ color }: Props) => {
  return <StyledHost css={{ backgroundColor: color }} />;
};

const StyledHost = styled('div', {
  width: '100%',
  height: '24px',
  borderRadius: '$lg',
});

export const ColorPreview = memo(_ColorPreview);
