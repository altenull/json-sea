import { styled, Text } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  value: string | number | boolean | null;
};

const _PrimitiveInspector = ({ value }: Props) => {
  return (
    <StyledHost>
      <Text>{JSON.stringify(value)}</Text>
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const PrimitiveInspector = memo(_PrimitiveInspector);
