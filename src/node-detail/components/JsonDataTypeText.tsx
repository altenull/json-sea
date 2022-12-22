import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';

type Props = {
  value: unknown;
};

const _JsonDataTypeText = ({ value }: Props) => {
  return (
    <Text
      i
      size="$xs"
      css={{
        color: '$gray800',
      }}
    >
      {getJsonDataType(value)}
    </Text>
  );
};

export const JsonDataTypeText = memo(_JsonDataTypeText);
