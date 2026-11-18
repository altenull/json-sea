# Module: GithubButton

**File:** `\src\foundation\components\GithubButton.tsx`

## Overview

Module `GithubButton` contains 1 analyzed entities.

```
import { semanticColors } from "@heroui/theme";
import { memo } from 'react';
import { externalLink } from '../../environment';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';
import { openLinkAsNewTab } from '../../utils/window.util';

const _GithubButton = () => {
  const { theme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={() => openLinkAsNewTab(externalLink.jsonSeaGithubRepo)}>
      <Icon icon="github" size={24} color={semanticColors[theme].default[500]} />
    </CircleTransparentButton>
  );
};

export const GithubButton = memo(_GithubButton);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `GithubButton._GithubButton` | function | No description |

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
