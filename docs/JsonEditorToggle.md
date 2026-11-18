# Module: JsonEditorToggle

**File:** `\src\foundation\components\JsonEditorToggle.tsx`

## Overview

Module `JsonEditorToggle` contains 1 analyzed entities.

```
import { semanticColors } from "@heroui/react";
import { useJsonEditorViewStore } from '../../store/json-editor-view/json-editor-view.store';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';

const _JsonEditorToggle = () => {
  const [isJsonEditorVisible, toggleJsonEditor] = useJsonEditorViewStore((state) => [
    state.isJsonEditorVisible,
    state.toggleJsonEditor,
  ]);

  const { theme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={toggleJsonEditor}>
      <Icon
        icon={isJsonEditorVisible ? 'left-arrow-with-bar' : 'right-arrow-with-bar'}
        size={24}
        color={semanticColors[theme].default[500]}
      />
    </CircleTransparentButton>
  );
};

export const JsonEditorToggle = _JsonEditorToggle;
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `JsonEditorToggle._JsonEditorToggle` | function | No description |

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
