import { memo } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { DataTypeText } from './DataTypeText';
import { StringSubtypeText } from './StringSubtypeText';

type Props = {
  value: unknown;
};

const _JsonDataTypeText = ({ value }: Props) => {
  const jsonDataType: JsonDataType = getJsonDataType(value);

  return (
    <DataTypeText>
      {jsonDataType}
      {jsonDataType === JsonDataType.String && <StringSubtypeText value={value as string} />}
    </DataTypeText>
  );
};

export const JsonDataTypeText = memo(_JsonDataTypeText);
