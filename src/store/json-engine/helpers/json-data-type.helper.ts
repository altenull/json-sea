import { isArray, isBoolean, isNull, isNumber, isObject, isString } from '../../../utils/json.util';
import { JsonDataType } from '../enums/json-data-type.enum';

export const validateJsonDataType = (
  v: unknown
): {
  [P in keyof typeof JsonDataType as `is${P}Data`]: boolean;
} & {
  isPrimitiveData: boolean;
} => {
  const isStringData: boolean = isString(v);
  const isNumberData: boolean = isNumber(v);
  const isBooleanData: boolean = isBoolean(v);
  const isNullData: boolean = isNull(v);

  return {
    isObjectData: isObject(v),
    isArrayData: isArray(v),
    isStringData,
    isNumberData,
    isBooleanData,
    isNullData,
    isPrimitiveData: isStringData || isNumberData || isBooleanData || isNullData,
  };
};

export const getJsonDataType = (v: unknown): JsonDataType => {
  const { isObjectData, isArrayData, isStringData, isNumberData, isBooleanData, isNullData } = validateJsonDataType(v);

  return isObjectData
    ? JsonDataType.Object
    : isArrayData
    ? JsonDataType.Array
    : isStringData
    ? JsonDataType.String
    : isNumberData
    ? JsonDataType.Number
    : isBooleanData
    ? JsonDataType.Boolean
    : isNullData
    ? JsonDataType.Null
    : JsonDataType.Null;
};
