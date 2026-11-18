# Module: useDragDropJsonFile

**File:** `\src\json-editor\hooks\useDragDropJsonFile.ts`

## Overview

Module `useDragDropJsonFile` contains 1 analyzed entities.

```
import { useCallback, useEffect, useRef } from 'react';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { formatJsonLikeData, isValidJson } from '../../utils/json.util';
import { useBoolean } from '../../utils/react-hooks/useBoolean';

export const useDragDropJsonFile = (afterFileReadSuccess: () => void) => {
  const setStringifiedJson = useJsonEngineStore((state) => state.setStringifiedJson);
  const resetSelectedNode = useJsonDiagramViewStore((state) => state.resetSelectedNode);

  const { bool: isDragging, setTrue: onIsDragging, setFalse: offIsDragging } = useBoolean();
  const dropzoneRef = useRef<HTMLLabelElement | null>(null);

  const processJsonFileText = useCallback(
    (jsonFileText: string): void => {
      if (isValidJson(jsonFileText)) {
        const formattedJson: string = formatJsonLikeData(jsonFileText);

        setStringifiedJson(formattedJson);
        resetSelectedNode();
        afterFileReadSuccess();
      }
    },
    [setStringifiedJson, resetSelectedNode, afterFileReadSuccess]
  );

  const handleDragIn = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onIsDragging();
    },
    [onIsDragging]
  );

  const handleDragOut = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      offIsDragging();
    },
    [offIsDragging]
  );

  const handleDragOver = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onIsDragging();
    },
    [onIsDragging]
  );

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      offIsDragging();

      if (e.dataTransfer?.files && e.dataTransfer?.files[0]) {
        const file: File = e.dataTransfer.files[0];

        if (file.type === 'application/json') {
     
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useDragDropJsonFile.useDragDropJsonFile` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
