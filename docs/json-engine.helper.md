# Module: json-engine.helper

**File:** `\src\store\json-engine\helpers\json-engine.helper.ts`

## Overview

Module `json-engine.helper` contains 1 analyzed entities.

```
import { Entities, arrayToEntities } from '../../../utils/array.util';
import { JsonTree } from '../json-engine.store';
import { SeaNode } from '../types/sea-node.type';
import { jsonParser } from './json-parser.helper';
import { getLayoutedSeaNodes } from './sea-node-position.helper';

export const convertJsonTree = (json: object | unknown[]): JsonTree => {
  const { seaNodes, edges } = jsonParser(json);
  const layoutedSeaNodes: SeaNode[] = getLayoutedSeaNodes(seaNodes, edges);
  const seaNodeEntities: Entities<SeaNode> = arrayToEntities<SeaNode>(layoutedSeaNodes, 'id');

  return { seaNodes: layoutedSeaNodes, seaNodeEntities, edges };
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `json-engine.helper.convertJsonTree` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
