# Module: InferredDataTypeText

**File:** `\src\node-detail\object\components\InferredDataTypeText.tsx`

## Overview

Module `InferredDataTypeText` contains 1 analyzed entities.

```
import { memo, useMemo } from 'react';
import { DataTypeText } from '../../components/DataTypeText';
import { InferredDataType } from '../enums/inferred-data-type.enum';

type Props = {
  dataType: InferredDataType;
};

const _InferredDataTypeText = ({ dataType }: Props) => {
  const inferredDataTypeToTextMap: Record<InferredDataType, string> = useMemo(
    () => ({
      [InferredDataType.LatLngMap]: 'inferred/latLng',
    }),
    [],
  );

  return <DataTypeText value={inferredDataTypeToTextMap[dataType]} />;
};

export const InferredDataTypeText = memo(_InferredDataTypeText);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `InferredDataTypeText._InferredDataTypeText` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
