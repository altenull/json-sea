# Module: ArrayItemCard

**File:** `\src\node-detail\array\components\ArrayItemCard.tsx`

## Overview

Module `ArrayItemCard` contains 1 analyzed entities.

```
import { memo, useMemo } from 'react';
import { useHoverNodeDetails } from '../../../store/node-detail-view/hooks/useHoverNodeDetails';
import { isObject } from '../../../utils/json.util';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { useNodePath } from '../../hooks/useNodePath';
import { ArrayItemNameChip } from './ArrayItemNameChip';

type Props = {
  selfNodeId: string;
  value: any;
};

const _ArrayItemCard = ({ selfNodeId, value }: Props) => {
  const { cardRef } = useHoverNodeDetails([{ nodeId: selfNodeId }]);
  const { selfNodePath } = useNodePath(selfNodeId);

  const objectNodeId: string | null = useMemo(() => (isObject(value) ? selfNodeId : null), [value, selfNodeId]);

  return (
    <NodeDetailCard
      ref={cardRef}
      chip={<ArrayItemNameChip arrayItemName={selfNodePath} />}
      value={value}
      childObjectNodeId={objectNodeId}
    />
  );
};

export const ArrayItemCard = memo(_ArrayItemCard);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `ArrayItemCard._ArrayItemCard` | function | No description |

## Git History

- Commits: 8
- Authors: 1
- Bug fixes: 0
- Features: 5

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
