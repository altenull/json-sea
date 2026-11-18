# Module: useJsonSeaRecommendedWidth

**File:** `\src\ui\hooks\useJsonSeaRecommendedWidth.ts`

## Overview

Module `useJsonSeaRecommendedWidth` contains 2 analyzed entities.

```
'use client';

import { useEffect, useRef, useState } from 'react';
import { sizes } from '../constants/sizes.constant';

export const useJsonSeaRecommendedWidth = () => {
  const isClient: boolean = typeof window === 'object';
  const lastWidth = useRef<number | null>(null);

  const [isJsonSeaRecommendedWidth, setIsJsonSeaRecommendedWidth] = useState<boolean>(
    isClient ? window.innerWidth >= sizes.jsonSeaRecommendedWidth : false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth !== lastWidth.current) {
        lastWidth.current = window.innerWidth;

        setIsJsonSeaRecommendedWidth(window.innerWidth >= sizes.jsonSeaRecommendedWidth);
      }
    };

    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return { isJsonSeaRecommendedWidth } as const;
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useJsonSeaRecommendedWidth.useJsonSeaRecommendedWidth` | function | No description |
| `useJsonSeaRecommendedWidth.handleResize` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 1
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
