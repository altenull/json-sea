# Module: node-type.enum

**File:** `\src\store\json-engine\enums\node-type.enum.ts`

## Overview

Module `node-type.enum` contains 0 analyzed entities.

```
/**
 * Primitive data type is different between Javascript and JSON areas.
 * @see https://www.w3schools.com/js/js_json_datatypes.asp
 */
export enum NodeType {
  Object = 'object',
  Array = 'array',

  /**
   * Primitive node exists to express Array node items only.
   * It can be `string`, `number`, `boolean` or `null`. (`undefined` can't exist in JSON)
   */
  Primitive = 'primitive',
}
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
