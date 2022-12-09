import { isArray, isBoolean, isNull, isNumber, isObject, isString } from '../../utils/json.util';
import { JsonDataType } from './enums/json-data-type.enum';

export const validateJsonPropertyType = (
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
