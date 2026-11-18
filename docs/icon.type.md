# Module: icon.type

**File:** `\src\ui\icon\icon.type.ts`

## Overview

Module `icon.type` contains 0 analyzed entities.

```
import { tuple } from '../../utils/function.util';

export const iconNames = tuple(
  'file-plus',
  'file-block',
  'file-check',
  'left-arrow-with-bar',
  'right-arrow-with-bar',
  'download',
  'cloud-upload',
  'camera',
  'sun',
  'moon',
  'heart',
  'github',
  'array',
  'object',
  'array-empty',
  'object-empty',
  'settings'
);

export type IconName = typeof iconNames[number];
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
