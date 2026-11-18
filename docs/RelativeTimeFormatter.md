# Module: RelativeTimeFormatter

**File:** `\src\node-detail\primitive\components\RelativeTimeFormatter.tsx`

## Overview

Module `RelativeTimeFormatter` contains 1 analyzed entities.

```
import { memo } from 'react';
import { format } from 'timeago.js';
import { useIntervallyForceUpdate } from '../../../utils/react-hooks/useIntervallyForceUpdate';

type Props = {
  unixTimestamp: number; // (ms)
};

const _RelativeTimeFormatter = ({ unixTimestamp }: Props) => {
  useIntervallyForceUpdate(1000);

  return <>{format(unixTimestamp)}</>;
};

export const RelativeTimeFormatter = memo(_RelativeTimeFormatter);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `RelativeTimeFormatter._RelativeTimeFormatter` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
