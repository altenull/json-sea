# Module: useBoolean

**File:** `\src\utils\react-hooks\useBoolean.ts`

## Overview

Module `useBoolean` contains 1 analyzed entities.

```
'use client';

import { useCallback, useState } from 'react';

export const useBoolean = (initialBool?: boolean) => {
  const [bool, setBool] = useState<boolean>(!!initialBool);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);
  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggleBoolean = useCallback(() => {
    setBool((prevBool) => !prevBool);
  }, []);

  return {
    bool,
    setTrue,
    setFalse,
    toggleBoolean,
  } as const;
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useBoolean.useBoolean` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
