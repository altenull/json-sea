# Module: string.util

**File:** `\src\utils\string.util.ts`

## Overview

Module `string.util` contains 3 analyzed entities.

```
/**
 * @param {string} v - the value to double quote
 */
export const encloseDoubleQuote = (v: string): string => {
  return `"${v}"`;
};

/**
 * @param {string | number} v - the value to enclose with square brackets
 */
export const encloseSquareBrackets = (v: string | number): string => {
  return `[${String(v)}]`;
};

/**
 * Added to count `object properties` or `array items`.
 *
 * @example
 * '(empty)', '(1 item)', '(32 properties)', ...
 */
export const formatCounting = (total: number, singular: string, plural: string): string => {
  if (total === 0) {
    return '(empty)';
  }

  return total === 1 ? `(1 ${singular})` : `(${total} ${plural})`;
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `string.util.encloseDoubleQuote` | function | No description |
| `string.util.encloseSquareBrackets` | function | No description |
| `string.util.formatCounting` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
