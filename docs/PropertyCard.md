# Module: PropertyCard

**File:** `\src\node-detail\object\components\PropertyCard.tsx`

## Overview

Module `PropertyCard` contains 1 analyzed entities.

```
import { memo, useMemo } from 'react';
import { useJsonEngineStore } from '../../../store/json-engine/json-engine.store';
import { useHoverNodeDetails } from '../../../store/node-detail-view/hooks/useHoverNodeDetails';
import { isObject } from '../../../utils/json.util';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { PropertyKeyChip } from './PropertyKeyChip';

type Props = {
  nodeId: string;
  propertyK: string;
  propertyV: any;
};

const _PropertyCard = ({ nodeId, propertyK, propertyV }: Props) => {
  const { edges } = useJsonEngineStore((state) => state.jsonTree);

  const { cardRef } = useHoverNodeDetails([{ nodeId, propertyK }]);

  const childObjectNodeId: string | null = useMemo(() => {
    if (!isObject(propertyV)) {
      return null;
    }

    return edges.find(({ source, sourceHandle }) => source === nodeId && sourceHandle === propertyK)?.target ?? null;
  }, [edges, nodeId, propertyK, propertyV]);

  return (
    <NodeDetailCard
      ref={cardRef}
      chip={<PropertyKeyChip value={propertyK} />}
      value={propertyV}
      childObjectNodeId={childObjectNodeId}
    />
  );
};

export const PropertyCard = memo(_PropertyCard);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PropertyCard._PropertyCard` | function | No description |

## Git History

- Commits: 7
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
