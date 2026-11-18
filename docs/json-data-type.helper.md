# Module: json-data-type.helper

**File:** `\src\store\json-engine\helpers\json-data-type.helper.ts`

## Overview

Module `json-data-type.helper` contains 2 analyzed entities.

```
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
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `json-data-type.helper.validateJsonDataType` | function | No description |
| `json-data-type.helper.getJsonDataType` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
