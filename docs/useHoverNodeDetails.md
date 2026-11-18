# Module: useHoverNodeDetails

**File:** `\src\store\node-detail-view\hooks\useHoverNodeDetails.ts`

## Overview

Module `useHoverNodeDetails` contains 1 analyzed entities.

```
import { useEffect } from 'react';
import { useHover } from '../../../utils/react-hooks/useHover';
import { HoveredNodeDetail, useNodeDetailViewStore } from '../node-detail-view.store';

export const useHoverNodeDetails = (hoveredNodeDetails: HoveredNodeDetail[]) => {
  const [setHoveredNodeDetails, resetHoveredNodeDetails] = useNodeDetailViewStore((state) => [
    state.setHoveredNodeDetails,
    state.resetHoveredNodeDetails,
  ]);

  const [cardRef, isCardHovered] = useHover<HTMLDivElement>();

  useEffect(() => {
    isCardHovered ? setHoveredNodeDetails(hoveredNodeDetails) : resetHoveredNodeDetails();
  }, [isCardHovered]);

  return { cardRef };
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useHoverNodeDetails.useHoverNodeDetails` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
