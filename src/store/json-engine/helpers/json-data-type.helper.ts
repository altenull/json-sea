import { isArray, isBoolean, isNull, isNumber, isObject, isString } from '../../../utils/json.util';
import { JsonDataType } from '../enums/json-data-type.enum';

export const validateJsonDataType = (
  value: unknown
): {
  [P in keyof typeof JsonDataType as `is${P}Data`]: boolean;
} & {
  isPrimitiveData: boolean;
} => {
  const isStringData: boolean = isString(value);
  const isNumberData: boolean = isNumber(value);
  const isBooleanData: boolean = isBoolean(value);
  const isNullData: boolean = isNull(value);

  return {
    isObjectData: isObject(value),
    isArrayData: isArray(value),
    isStringData,
    isNumberData,
    isBooleanData,
    isNullData,
    isPrimitiveData: isStringData || isNumberData || isBooleanData || isNullData,
  };
};

export const getJsonDataType = (value: unknown): JsonDataType => {
  const { isArrayData, isObjectData, isStringData, isNumberData, isBooleanData, isNullData } =
    validateJsonDataType(value);

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
