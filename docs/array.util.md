# Module: array.util

**File:** `\src\utils\array.util.ts`

## Overview

Module `array.util` contains 3 analyzed entities.

```
export type Entities<T> = {
  [id: string]: T;
};

export const arrayToEntities = <T>(array: T[], id: string): Entities<T> => {
  return array.reduce((acc: Entities<T>, item: T) => {
    return (item as any)[id] === undefined
      ? acc
      : {
          ...acc,
          [(item as any)[id]]: item,
        };
  }, {});
};

export const isLastItemOfArray = <T extends any[]>(index: number, array: T): boolean => index === array.length - 1;

export const isEmptyArray = <T extends any[]>(array: T): boolean => array.length < 1;
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `array.util.arrayToEntities` | function | No description |
| `array.util.isLastItemOfArray` | function | No description |
| `array.util.isEmptyArray` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
