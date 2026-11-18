# Module: node-detail-view.store

**File:** `\src\store\node-detail-view\node-detail-view.store.ts`

## Overview

Module `node-detail-view.store` contains 0 analyzed entities.

```
import { create } from 'zustand';

export type HoveredNodeDetail = {
  nodeId: string;
  propertyK?: string; // Will be set when a `PropertyCard` component is hovered. (`PropertyCard` is used for Object)
};

type State = {
  hoveredNodeDetails: HoveredNodeDetail[];
};

type Actions = {
  setHoveredNodeDetails: (hoveredNodeDetails: HoveredNodeDetail[]) => void;
  resetHoveredNodeDetails: () => void;
  resetNodeDetailViewStore: () => void;
};

const initialState: State = {
  hoveredNodeDetails: [],
};

export const useNodeDetailViewStore = create<State & Actions>((set) => ({
  ...initialState,
  setHoveredNodeDetails: (hoveredNodeDetails: HoveredNodeDetail[]) => set(() => ({ hoveredNodeDetails })),
  resetHoveredNodeDetails: () => set(() => ({ hoveredNodeDetails: initialState.hoveredNodeDetails })),
  resetNodeDetailViewStore: () => set(initialState),
}));
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
