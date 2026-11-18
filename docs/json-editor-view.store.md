# Module: json-editor-view.store

**File:** `\src\store\json-editor-view\json-editor-view.store.ts`

## Overview

Module `json-editor-view.store` contains 0 analyzed entities.

```
import { create } from 'zustand';

type State = {
  isJsonEditorVisible: boolean;
};

type Actions = {
  toggleJsonEditor: () => void;
  resetJsonEditorViewStore: () => void;
};

const initialState: State = {
  isJsonEditorVisible: true,
};

export const useJsonEditorViewStore = create<State & Actions>((set, get) => ({
  ...initialState,
  toggleJsonEditor: () => {
    const prev = get().isJsonEditorVisible;

    set(() => ({
      isJsonEditorVisible: !prev,
    }));
  },
  resetJsonEditorViewStore: () => set(initialState),
}));
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
