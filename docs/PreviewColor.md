# Module: PreviewColor

**File:** `\src\node-detail\primitive\components\PreviewColor.tsx`

## Overview

Module `PreviewColor` contains 0 analyzed entities.

```
import { memo } from 'react';

type Props = {
  color: string;
};

const _PreviewColor = ({ color }: Props) => {
  return <div style={{ backgroundColor: color }} className="h-[24px] w-full rounded-full" />;
};

export const PreviewColor = memo(_PreviewColor);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 1
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
