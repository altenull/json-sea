# Module: ThemeToggle

**File:** `\src\foundation\components\ThemeToggle.tsx`

## Overview

Module `ThemeToggle` contains 1 analyzed entities.

```
import { semanticColors } from "@heroui/react";
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';

const _ThemeToggle = () => {
  const { theme, isDarkMode, setTheme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
      <Icon icon={isDarkMode ? 'sun' : 'moon'} size={24} color={semanticColors[theme].default[500]} />
    </CircleTransparentButton>
  );
};

export const ThemeToggle = _ThemeToggle;
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `ThemeToggle._ThemeToggle` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
