# Module: NodeDetailChip

**File:** `\src\node-detail\components\NodeDetailChip.tsx`

## Overview

Module `NodeDetailChip` contains 1 analyzed entities.

```
import { Chip } from '@heroui/chip';
import { memo } from 'react';

type Props = {
  value: string;
};

const _NodeDetailChip = ({ value }: Props) => {
  return (
    <Chip variant="faded" color="default" size="md" radius="sm">
      {value}
    </Chip>
  );
};

export const NodeDetailChip = memo(_NodeDetailChip);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `NodeDetailChip._NodeDetailChip` | function | No description |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
