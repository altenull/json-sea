import { styled } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  color: string;
};

const _PreviewColor = ({ color }: Props) => {
  return <S_Host css={{ backgroundColor: color }} />;
};

const S_Host = styled('div', {
  width: '100%',
  height: '24px',
  borderRadius: '$lg',
});

export const PreviewColor = memo(_PreviewColor);
