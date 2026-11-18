# Module: ResizableJsonEditor

**File:** `\src\json-editor\components\ResizableJsonEditor.tsx`

## Overview

Module `ResizableJsonEditor` contains 0 analyzed entities.

```
'use client';

import { Resizable } from 're-resizable';
import { useJsonEditorViewStore } from '../../store/json-editor-view/json-editor-view.store';
import { JsonEditor } from './JsonEditor';

const _ResizableJsonEditor = () => {
  const isJsonEditorVisible = useJsonEditorViewStore((state) => state.isJsonEditorVisible);

  return (
    <Resizable
      style={{
        overflow: 'hidden',
        display: isJsonEditorVisible ? 'initial' : 'none',
      }}
      defaultSize={{
        width: 320,
        height: '100%',
      }}
      minWidth={272}
      maxWidth={typeof window !== 'undefined' ? window.innerWidth / 2 : undefined}
      enable={{
        right: true,
      }}
    >
      <JsonEditor />
    </Resizable>
  );
};

export const ResizableJsonEditor = _ResizableJsonEditor;
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
