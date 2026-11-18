# Module: useEnv

**File:** `\src\utils\react-hooks\useEnv.ts`

## Overview

Module `useEnv` contains 1 analyzed entities.

```
'use client';

import { useEffect, useState } from 'react';
import { env, featureFlag } from '../../environment';

export const useEnv = () => {
  const [isLocalhost, setIsLocalhost] = useState<boolean>(false);

  useEffect(() => {
    setIsLocalhost(window.location.hostname === env.localhost && featureFlag.debugMode);
  }, []);

  return { isLocalhost } as const;
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useEnv.useEnv` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
