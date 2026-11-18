# Module: json-diagram-view.store

**File:** `\src\store\json-diagram-view\json-diagram-view.store.ts`

## Overview

Module `json-diagram-view.store` contains 0 analyzed entities.

```
import { Node } from 'reactflow';
import { create } from 'zustand';

type State = {
  selectedNodeId: string | null;
};

type Actions = {
  selectNode: (nodeId: Node['id']) => void;
  resetSelectedNode: () => void;
  resetJsonDiagramViewStore: () => void;
};

const initialState: State = {
  selectedNodeId: null,
};

export const useJsonDiagramViewStore = create<State & Actions>((set) => ({
  ...initialState,
  selectNode: (nodeId: Node['id']) => set(() => ({ selectedNodeId: nodeId })),
  // TODO: Find out the way of calling `resetSelectedNode` when another store's state changed.
  resetSelectedNode: () => set(() => ({ selectedNodeId: initialState.selectedNodeId })),
  resetJsonDiagramViewStore: () => set(initialState),
}));
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
