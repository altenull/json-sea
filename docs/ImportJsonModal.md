# Module: ImportJsonModal

**File:** `\src\json-editor\components\ImportJsonModal.tsx`

## Overview

Module `ImportJsonModal` contains 1 analyzed entities.

```
'use client';

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import { ComponentProps, memo, useCallback, useEffect } from 'react';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { Text } from '../../ui/components/Text';
import { formatJsonLikeData, isArray, isNull, isObject, isValidJson } from '../../utils/json.util';
import { useSimpleFetch } from '../../utils/react-hooks/useSimpleFetch';
import { useString } from '../../utils/react-hooks/useString';
import { DragDropJsonFile } from './DragDropJsonFile';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const _ImportJsonModal = ({ isModalOpen, closeModal }: Props) => {
  const {
    string: jsonUrlValue,
    isEmpty: isJsonUrlValueEmpty,
    setString: setJsonUrlValue,
    clearString: clearJsonUrlValue,
  } = useString();
  const {
    loading: isGetJsonLoading,
    data: getJsonResponse,
    error: getJsonError,
    fetchUrl: fetchJsonUrl,
    resetError: resetGetJsonError,
  } = useSimpleFetch();

  const setStringifiedJson = useJsonEngineStore((state) => state.setStringifiedJson);
  const resetSelectedNode = useJsonDiagramViewStore((state) => state.resetSelectedNode);

  const handleJsonUrlValueChange: ComponentProps<typeof Input>['onChange'] = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setJsonUrlValue(e.target.value);
      resetGetJsonError();
    },
    [setJsonUrlValue, resetGetJsonError],
  );

  const handleJsonUrlValueClear: ComponentProps<typeof Input>['onClear'] = useCallback(() => {
    clearJsonUrlValue();
    resetGetJsonError();
  }, [clearJsonUrlValue, resetGetJsonError]);

  const handleJsonUrlInputKeyDown: ComponentProps<typeof Input>['onKeyDown'] = (e) => {
    if (e.key === 'Enter' && !isJsonUrlValueEmpty
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `ImportJsonModal.handleJsonUrlInputKeyDown` | function | No description |

## Git History

- Commits: 8
- Authors: 1
- Bug fixes: 1
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
