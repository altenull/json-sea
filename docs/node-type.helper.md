# Module: node-type.helper

**File:** `\src\node-detail\array\helpers\node-type.helper.ts`

## Overview

Module `node-type.helper` contains 0 analyzed entities.

```
import { NodeType } from '../../../store/json-engine/enums/node-type.enum';

export const nodeTypeToTextMap: Record<NodeType, string> = {
  [NodeType.Object]: 'Object',
  [NodeType.Array]: 'Array',
  [NodeType.Primitive]: 'Primitive',
};

export const nodeTypeToAcronymMap: Record<NodeType, string> = {
  [NodeType.Object]: 'O',
  [NodeType.Array]: 'A',
  [NodeType.Primitive]: 'P',
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 1
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
