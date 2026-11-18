# Module: SettingsModal

**File:** `\src\settings\components\SettingsModal.tsx`

## Overview

Module `SettingsModal` contains 0 analyzed entities.

```
'use client';

import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import { Switch } from "@heroui/switch";
import { memo } from 'react';
import { useSettingsStore } from '../../store/settings/settings.store';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const _SettingsModal = ({ isModalOpen, closeModal }: Props) => {
  const [isMinimapOn, isNodePathOn, toggleMinimap, toggleNodePath] = useSettingsStore((state) => [
    state.isMinimapOn,
    state.isNodePathOn,
    state.toggleMinimap,
    state.toggleNodePath,
  ]);

  return (
    <Modal closeButton size="sm" isOpen={isModalOpen} onClose={closeModal}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Settings</ModalHeader>
            <ModalBody>
              <Switch isSelected={isMinimapOn} onChange={toggleMinimap}>
                Minimap
              </Switch>
              <Switch isSelected={isNodePathOn} onChange={toggleNodePath}>
                Node Path
              </Switch>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export const SettingsModal = memo(_SettingsModal);
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
