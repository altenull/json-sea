import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { StringSubtypeText } from './StringSubtypeText';

type Props = {
  value: unknown;
};

const _JsonDataTypeText = ({ value }: Props) => {
  const jsonDataType: JsonDataType = getJsonDataType(value);

  return (
    <Text
      i
      size="$xs"
      css={{
        color: '$gray800',
      }}
    >
      {jsonDataType}
      {jsonDataType === JsonDataType.String && <StringSubtypeText value={value as string} />}
    </Text>
  );
};

export const JsonDataTypeText = memo(_JsonDataTypeText);
