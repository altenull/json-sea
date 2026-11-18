# Module: settings.store

**File:** `\src\store\settings\settings.store.ts`

## Overview

Module `settings.store` contains 0 analyzed entities.

```
import { create } from 'zustand';
import { localStorageService } from '../../services/local-storage.service';

type State = {
  isMinimapOn: boolean;
  isNodePathOn: boolean;
};

type Actions = {
  toggleMinimap: () => void;
  toggleNodePath: () => void;
  resetSettingsStore: () => void;
};

const initialState: State = {
  isMinimapOn: localStorageService.getItem('settings:minimap'),
  isNodePathOn: localStorageService.getItem('settings:nodePath'),
};

export const useSettingsStore = create<State & Actions>((set, get) => ({
  ...initialState,
  toggleMinimap: () => {
    const prev = get().isMinimapOn;

    set(() => ({
      isMinimapOn: !prev,
    }));
    localStorageService.setItem('settings:minimap', !prev);
  },
  toggleNodePath: () => {
    const prev = get().isNodePathOn;

    set(() => ({
      isNodePathOn: !prev,
    }));
    localStorageService.setItem('settings:nodePath', !prev);
  },
  resetSettingsStore: () => set(initialState),
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
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
