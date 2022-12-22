import { styled, Text } from '@nextui-org/react';
import { memo } from 'react';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { StringInspector } from './StringInspector';

type Props = {
  value: string | number | boolean | null;
};

const _PrimitiveInspector = ({ value }: Props) => {
  const { isStringData, isNumberData, isBooleanData, isNullData } = validateJsonDataType(value);

  return (
    <StyledHost>
      {isStringData && <StringInspector value={value as string} />}
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
