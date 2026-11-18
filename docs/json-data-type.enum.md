# Module: json-data-type.enum

**File:** `\src\store\json-engine\enums\json-data-type.enum.ts`

## Overview

Module `json-data-type.enum` contains 0 analyzed entities.

```
/**
 * See the [JSON Data Types](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 */
export enum JsonDataType {
  // For `Object` node type
  Object = 'object',

  // For `Array` node type
  Array = 'array',

  // For `Primitive` node type
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Null = 'null',
}
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
