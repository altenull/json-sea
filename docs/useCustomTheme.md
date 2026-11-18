# Module: useCustomTheme

**File:** `\src\utils\react-hooks\useCustomTheme.ts`

## Overview

Module `useCustomTheme` contains 1 analyzed entities.

```
'use client';

import { useTheme } from 'next-themes';

/**
 * There is type `UseThemeProps` for return type of `useTheme()` in `next-themes` but not exported.
 * So I define `UseThemeReturn` type here.
 */
type UseThemeReturn = ReturnType<typeof useTheme>;

type UseCustomThemeReturn = UseThemeReturn & {
  theme: 'light' | 'dark';
  isDarkMode: boolean;
};

export const useCustomTheme = (): UseCustomThemeReturn => {
  const useThemeReturn = useTheme();

  const isDarkMode = useThemeReturn.theme === 'dark';

  return {
    ...useThemeReturn,
    theme: isDarkMode ? 'dark' : 'light',
    isDarkMode,
  };
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useCustomTheme.useCustomTheme` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
