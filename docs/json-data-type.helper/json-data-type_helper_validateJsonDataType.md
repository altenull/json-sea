# json-data-type.helper.validateJsonDataType

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-data-type.helper.ts` (lines 4-25)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(
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
}
```

## Docstring

_No docstring provided._

## Source

```
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
```

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
