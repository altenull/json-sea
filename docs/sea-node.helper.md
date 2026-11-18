# Module: sea-node.helper

**File:** `\src\store\json-engine\helpers\sea-node.helper.ts`

## Overview

Module `sea-node.helper` contains 3 analyzed entities.

```
import { NodeType } from '../enums/node-type.enum';
import { ArraySeaNode, ObjectSeaNode, PrimitiveSeaNode, SeaNode } from '../types/sea-node.type';

export const isObjectSeaNode = (node: SeaNode): node is ObjectSeaNode => {
  return node.type === NodeType.Object;
};

export const isArraySeaNode = (node: SeaNode): node is ArraySeaNode => {
  return node.type === NodeType.Array;
};

export const isPrimitiveSeaNode = (node: SeaNode): node is PrimitiveSeaNode => {
  return node.type === NodeType.Primitive;
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `sea-node.helper.isObjectSeaNode` | function | No description |
| `sea-node.helper.isArraySeaNode` | function | No description |
| `sea-node.helper.isPrimitiveSeaNode` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
