import { styled, Text } from '@nextui-org/react';
import { memo } from 'react';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';

type Props = {
  value: string | number | boolean | null;
};

const _PrimitiveInspector = ({ value }: Props) => {
  const { isStringData, isNumberData, isBooleanData, isNullData } = validateJsonDataType(value);

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
