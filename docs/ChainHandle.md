# Module: ChainHandle

**File:** `\src\json-diagram\components\ChainHandle.tsx`

## Overview

Module `ChainHandle` contains 0 analyzed entities.

```
import { memo, useMemo } from 'react';
import { Handle, HandleProps, HandleType, Position } from 'reactflow';
import { sizes } from '../../ui/constants/sizes.constant';
import { hiddenHandleStyle } from '../styles/handle.style';

type Props = Pick<HandleProps, 'id' | 'type'>;

const _ChainHandle = ({ id, type }: Props) => {
  const handleTypeToPositionMap: Record<HandleType, Position> = useMemo(
    () => ({
      source: Position.Bottom,
      target: Position.Top,
    }),
    []
  );

  return (
    <Handle
      style={{ ...hiddenHandleStyle, left: sizes.arrayNodeSize / 2 }}
      id={id}
      type={type}
      position={handleTypeToPositionMap[type]}
    />
  );
};

export const ChainHandle = memo(_ChainHandle);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
