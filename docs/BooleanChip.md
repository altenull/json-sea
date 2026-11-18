# Module: BooleanChip

**File:** `\src\ui\components\BooleanChip.tsx`

## Overview

Module `BooleanChip` contains 1 analyzed entities.

```
import { Chip } from "@heroui/chip";
import { memo } from 'react';

type Props = {
  value: boolean;
  size?: any;
  className?: any;
};

const _BooleanChip = ({ value, size = 'md', className }: Props) => {
  return (
    <Chip className={className} variant="flat" size={size} color={value ? 'success' : 'danger'} radius="sm">
      {JSON.stringify(value)}
    </Chip>
  );
};

export const BooleanChip = memo(_BooleanChip);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `BooleanChip._BooleanChip` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
