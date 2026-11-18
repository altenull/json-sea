# Module: PrimitiveNodeDetail

**File:** `\src\node-detail\primitive\components\PrimitiveNodeDetail.tsx`

## Overview

Module `PrimitiveNodeDetail` contains 1 analyzed entities.

```
import { memo } from 'react';
import { PrimitiveNodeData } from '../../../store/json-engine/types/sea-node.type';
import { ArrayItemPrimitiveCard } from '../../array/components/ArrayItemPrimitiveCard';

type Props = {
  nodeId: string;
  nodeData: PrimitiveNodeData;
};

const _PrimitiveNodeDetail = ({ nodeId, nodeData }: Props) => {
  const { arrayIndex, value } = nodeData;

  return <ArrayItemPrimitiveCard nodeId={nodeId} arrayItemIndex={arrayIndex} value={value} />;
};

export const PrimitiveNodeDetail = memo(_PrimitiveNodeDetail);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PrimitiveNodeDetail._PrimitiveNodeDetail` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
