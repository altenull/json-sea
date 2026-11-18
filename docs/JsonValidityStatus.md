# Module: JsonValidityStatus

**File:** `\src\json-editor\components\JsonValidityStatus.tsx`

## Overview

Module `JsonValidityStatus` contains 0 analyzed entities.

```
import { semanticColors } from "@heroui/react";
import { memo } from 'react';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';

type Props = {
  style?: React.CSSProperties;
};

const _JsonValidityStatus = ({ style }: Props) => {
  const isValidJson = useJsonEngineStore((state) => state.isValidJson);
  const { theme } = useCustomTheme();

  return (
    <span className="inline-flex items-center justify-center rounded-bl-lg bg-backgroundAlpha p-2" style={style}>
      <Icon
        icon={isValidJson ? 'file-check' : 'file-block'}
        size={24}
        color={
          isValidJson ? (semanticColors[theme].success as any).DEFAULT : (semanticColors[theme].danger as any).DEFAULT
        }
      />
    </span>
  );
};

export const JsonValidityStatus = memo(_JsonValidityStatus);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 1
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
