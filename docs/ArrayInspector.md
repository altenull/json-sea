# Module: ArrayInspector

**File:** `\src\node-detail\array\components\ArrayInspector.tsx`

## Overview

Module `ArrayInspector` contains 1 analyzed entities.

```
import Editor from '@monaco-editor/react';
import { Card } from "@heroui/card";
import { memo } from 'react';
import { formatJsonLikeData } from '../../../utils/json.util';
import { useCustomTheme } from '../../../utils/react-hooks/useCustomTheme';

type Props = {
  array: any[];
};

const _ArrayInspector = ({ array }: Props) => {
  const { isDarkMode } = useCustomTheme();

  return (
    <Card className="h-[160px]" shadow="sm">
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
          readOnly: true,
        }}
        defaultValue={formatJsonLikeData(array)}
      />
    </Card>
  );
};

export const ArrayInspector = memo(_ArrayInspector);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `ArrayInspector._ArrayInspector` | function | No description |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
