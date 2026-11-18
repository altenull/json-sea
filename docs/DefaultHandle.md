# Module: DefaultHandle

**File:** `\src\json-diagram\components\DefaultHandle.tsx`

## Overview

Module `DefaultHandle` contains 1 analyzed entities.

```
import { memo, useMemo } from 'react';
import { Handle, HandleProps, HandleType, Position } from 'reactflow';
import { hiddenHandleStyle } from '../styles/handle.style';

type Props = Pick<HandleProps, 'id' | 'type'> & {
  style?: React.CSSProperties;
};

const _DefaultHandle = ({ id, type, style = {} }: Props) => {
  const handleTypeToPositionMap: Record<HandleType, Position> = useMemo(
    () => ({
      source: Position.Right,
      target: Position.Left,
    }),
    []
  );

  return (
    <Handle style={{ ...hiddenHandleStyle, ...style }} id={id} type={type} position={handleTypeToPositionMap[type]} />
  );
};

export const DefaultHandle = memo(_DefaultHandle);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `DefaultHandle._DefaultHandle` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
