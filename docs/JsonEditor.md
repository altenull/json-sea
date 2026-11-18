# Module: JsonEditor

**File:** `\src\json-editor\components\JsonEditor.tsx`

## Overview

Module `JsonEditor` contains 1 analyzed entities.

```
import Editor from '@monaco-editor/react';
import { useCallback } from 'react';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { DEFAULT_STRINGIFIED_JSON } from '../../store/json-engine/json-engine.constant';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { isValidJson } from '../../utils/json.util';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';
import { JsonEditorConsole } from './JsonEditorConsole';
import { JsonValidityStatus } from './JsonValidityStatus';

// TODO: useDefferedValue hook to optimize?
const _JsonEditor = () => {
  const [stringifiedJson, setStringifiedJson] = useJsonEngineStore((state) => [
    state.stringifiedJson,
    state.setStringifiedJson,
  ]);
  const resetSelectedNode = useJsonDiagramViewStore((state) => state.resetSelectedNode);

  const { isDarkMode } = useCustomTheme();

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      if (value === undefined) return;

      setStringifiedJson(value);

      if (isValidJson(value)) {
        resetSelectedNode();
      }
    },
    [setStringifiedJson, resetSelectedNode],
  );

  return (
    <div className="size-full relative border-r-1 border-solid border-r-border">
      <Editor
        theme={isDarkMode ? 'vs-dark' : 'light'}
        defaultLanguage="json"
        options={{
          minimap: {
            enabled: false,
          },
          scrollbar: {
            horizontal: 'hidden',
          },
          overviewRulerLanes: 0,
        }}
        defaultValue={DEFAULT_STRINGIFIED_JSON}
        value={stringifiedJson}
        onChange={handleEditorChange}
      />

      <JsonValidityStatus
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />

      <JsonEditorConsole
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
     
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `JsonEditor._JsonEditor` | function | No description |

## Git History

- Commits: 7
- Authors: 1
- Bug fixes: 1
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
