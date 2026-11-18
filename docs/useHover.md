# Module: useHover

**File:** `\src\utils\react-hooks\useHover.ts`

## Overview

Module `useHover` contains 1 analyzed entities.

```
'use client';

import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

export const useHover = <T extends HTMLElement>(): [MutableRefObject<T | null>, boolean] => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  const handleMouseOver = useCallback(() => setIsHovered(true), []);
  const handleMouseOut = useCallback(() => setIsHovered(false), []);

  useEffect(
    () => {
      const element = ref.current;

      element?.addEventListener('mouseover', handleMouseOver);
      element?.addEventListener('mouseout', handleMouseOut);

      return () => {
        element?.removeEventListener('mouseover', handleMouseOver);
        element?.removeEventListener('mouseout', handleMouseOut);
      };
    },
    [ref, handleMouseOver, handleMouseOut] // Recall only if ref changes
  );

  return [ref, isHovered];
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useHover.useHover` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
