# Module: SettingsButton

**File:** `\src\foundation\components\SettingsButton.tsx`

## Overview

Module `SettingsButton` contains 0 analyzed entities.

```
import { useDisclosure } from "@heroui/modal";
import { semanticColors } from "@heroui/react";
import { memo } from 'react';
import { SettingsModal } from '../../settings/components/SettingsModal';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';

const _SettingsButton = () => {
  const { theme } = useCustomTheme();
  const { isOpen: isSettingsModalOpen, onOpen: openSettingsModal, onClose: closeSettingsModal } = useDisclosure();

  return (
    <>
      <SettingsModal isModalOpen={isSettingsModalOpen} closeModal={closeSettingsModal} />

      <CircleTransparentButton onClick={openSettingsModal}>
        <Icon icon="settings" size={24} color={semanticColors[theme].default[500]} />
      </CircleTransparentButton>
    </>
  );
};

export const SettingsButton = memo(_SettingsButton);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
