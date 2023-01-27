import { memo } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { isEmptyObject } from '../../utils/object.util';
import { DataTypeText } from './DataTypeText';
import { StringSubtypeText } from './StringSubtypeText';
import { isEmptyArray } from '../../utils/array.util';

type Props = {
  value: unknown;
};

const EMPTY = '(empty)';

const getObjectPropertiesTotal = (obj: object): string => {
  if (isEmptyObject(obj)) {
    return EMPTY;
  }

  const objLength: number = Object.keys(obj).length;

  return objLength === 1 ? '(1 property)' : `(${objLength} properties)`;
};

const getArrayItemsTotal = (array: any[]): string => {
  if (isEmptyArray(array)) {
    return EMPTY;
  }

  const arrayLength: number = array.length;

  return arrayLength === 1 ? '(1 item)' : `(${arrayLength} items)`;
};

const _JsonDataTypeText = ({ value }: Props) => {
  const jsonDataType: JsonDataType = getJsonDataType(value);

  return (
    <DataTypeText>
      {jsonDataType}

      <>
        {jsonDataType === JsonDataType.Object && ` ${getObjectPropertiesTotal(value as object)}`}
        {jsonDataType === JsonDataType.Array && ` ${getArrayItemsTotal(value as any[])}`}
        {jsonDataType === JsonDataType.String && <StringSubtypeText value={value as string} />}
      </>
    </DataTypeText>
  );
};

export const JsonDataTypeText = memo(_JsonDataTypeText);
