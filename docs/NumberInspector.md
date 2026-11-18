# Module: NumberInspector

**File:** `\src\node-detail\primitive\components\NumberInspector.tsx`

## Overview

Module `NumberInspector` contains 1 analyzed entities.

```
import { memo } from 'react';
import { Text } from '../../../ui/components/Text';
import { useIntlNumberFormat } from '../hooks/useIntlNumberFormat';
import { TextCopyBox } from './TextCopyBox';

type Props = {
  value: number;
};

const _NumberInspector = ({ value }: Props) => {
  const { intlNumberFormat } = useIntlNumberFormat();

  return (
    <>
      <TextCopyBox text={`${value}`} />
      <Text className="pr-2 text-right text-sm font-light text-default-400">{intlNumberFormat.format(value)}</Text>
    </>
  );
};

export const NumberInspector = memo(_NumberInspector);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `NumberInspector._NumberInspector` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
