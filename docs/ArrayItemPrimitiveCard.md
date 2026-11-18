# Module: ArrayItemPrimitiveCard

**File:** `\src\node-detail\array\components\ArrayItemPrimitiveCard.tsx`

## Overview

Module `ArrayItemPrimitiveCard` contains 1 analyzed entities.

```
import { memo } from 'react';
import { useHoverNodeDetails } from '../../../store/node-detail-view/hooks/useHoverNodeDetails';
import { NodeDetailCard } from '../../components/NodeDetailCard';

type Props = {
  nodeId: string;
  arrayItemIndex: number;
  value: string | number | boolean | null;
};

/**
 * Parent node is always a ArrayNode.
 */
const _ArrayItemPrimitiveCard = ({ nodeId, arrayItemIndex, value }: Props) => {
  const { cardRef } = useHoverNodeDetails([{ nodeId }]);

  return <NodeDetailCard ref={cardRef} value={value} childObjectNodeId={null} />;
};

export const ArrayItemPrimitiveCard = memo(_ArrayItemPrimitiveCard);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `ArrayItemPrimitiveCard._ArrayItemPrimitiveCard` | function | No description |

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 0
- Features: 4

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
