# Module: LocalhostChip

**File:** `\src\foundation\components\LocalhostChip.tsx`

## Overview

Module `LocalhostChip` contains 1 analyzed entities.

```
'use client';

import { Chip } from "@heroui/chip";
import { memo } from 'react';
import { useEnv } from '../../utils/react-hooks/useEnv';

const _LocalhostChip = () => {
  const { isLocalhost } = useEnv();

  if (!isLocalhost) {
    return null;
  }

  return (
    <Chip className="fixed left-0 top-1/2 -translate-x-1/3 rotate-90" color="warning">
      Localhost
    </Chip>
  );
};

export const LocalhostChip = memo(_LocalhostChip);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `LocalhostChip._LocalhostChip` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
