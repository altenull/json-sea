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
      {/* TODO: Handle isStringData */}
      {isStringData && <Text>{JSON.stringify(value)}</Text>}
      {/* TODO: Handle isNumberData */}
      {isNumberData && <Text>{JSON.stringify(value)}</Text>}
      {(isBooleanData || isNullData) && <Text>{JSON.stringify(value)}</Text>}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  textAlign: 'right',
});

export const PrimitiveInspector = memo(_PrimitiveInspector);
