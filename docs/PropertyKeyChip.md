# Module: PropertyKeyChip

**File:** `\src\node-detail\object\components\PropertyKeyChip.tsx`

## Overview

Module `PropertyKeyChip` contains 1 analyzed entities.

```
import { Chip } from "@heroui/chip";
import { memo } from 'react';

type Props = {
  value: string;
  inferred?: boolean;
};

const _PropertyKeyChip = ({ value, inferred = false }: Props) => {
  return (
    <Chip variant={inferred ? 'bordered' : 'flat'} color="secondary" size="md">
      {value}
    </Chip>
  );
};

export const PropertyKeyChip = memo(_PropertyKeyChip);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PropertyKeyChip._PropertyKeyChip` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
