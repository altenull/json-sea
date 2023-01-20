import { memo } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { isEmptyObject } from '../../utils/object.util';
import { DataTypeText } from './DataTypeText';
import { StringSubtypeText } from './StringSubtypeText';

type Props = {
  value: unknown;
};

const EMPTY = '(empty)';

const getArrayItemsTotal = (array: any[]): string =>
  array.length === 0 ? EMPTY : array.length === 1 ? '(1 item)' : `(${array.length} items)`;

const _JsonDataTypeText = ({ value }: Props) => {
  const jsonDataType: JsonDataType = getJsonDataType(value);

  return (
    <DataTypeText>
      {jsonDataType}

      <>
        {jsonDataType === JsonDataType.Object && isEmptyObject(value as object) && ` ${EMPTY}`}
        {jsonDataType === JsonDataType.Array && ` ${getArrayItemsTotal(value as any[])}`}
        {jsonDataType === JsonDataType.String && <StringSubtypeText value={value as string} />}
      </>
    </DataTypeText>
  );
};

export const JsonDataTypeText = memo(_JsonDataTypeText);
