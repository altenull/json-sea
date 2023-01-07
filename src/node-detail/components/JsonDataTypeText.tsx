import { memo } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { DataTypeText } from './DataTypeText';
import { StringSubtypeText } from './StringSubtypeText';

type Props = {
  value: unknown;
};

const getArrayItemsTotal = (array: Array<any>): string =>
  array.length === 0 ? '(empty)' : array.length === 1 ? '(1 item)' : `(${array.length} items)`;

const _JsonDataTypeText = ({ value }: Props) => {
  const jsonDataType: JsonDataType = getJsonDataType(value);

  return (
    <DataTypeText>
      {jsonDataType}
      {jsonDataType === JsonDataType.String && <StringSubtypeText value={value as string} />}
      {jsonDataType === JsonDataType.Array && ` ${getArrayItemsTotal(value as Array<any>)}`}
    </DataTypeText>
  );
};

export const JsonDataTypeText = memo(_JsonDataTypeText);
