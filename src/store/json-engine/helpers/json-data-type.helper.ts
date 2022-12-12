import { isArray, isBoolean, isNull, isNumber, isObject, isString } from '../../../utils/json.util';
import { JsonDataType } from '../enums/json-data-type.enum';

export const validateJsonDataType = (
  value: unknown
): {
  [P in keyof typeof JsonDataType as `is${P}Type`]: boolean;
} => {
  return {
    isArrayType: isArray(value),
    isObjectType: isObject(value),
    isStringType: isString(value),
    isNumberType: isNumber(value),
    isBooleanType: isBoolean(value),
    isNullType: isNull(value),
  };
};

export const getJsonDataType = (value: unknown): JsonDataType => {
  const { isArrayType, isObjectType, isStringType, isNumberType, isBooleanType, isNullType } =
    validateJsonDataType(value);

  return isArrayType
    ? JsonDataType.Array
    : isObjectType
    ? JsonDataType.Object
    : isStringType
    ? JsonDataType.String
    : isNumberType
    ? JsonDataType.Number
    : isBooleanType
    ? JsonDataType.Boolean
    : isNullType
    ? JsonDataType.Null
    : JsonDataType.Null;
};
