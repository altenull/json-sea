# json-data-type.helper.getJsonDataType

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-data-type.helper.ts` (lines 27-43)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(v: unknown): JsonDataType => {
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
}
```

## Docstring

_No docstring provided._

## Source

```
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
