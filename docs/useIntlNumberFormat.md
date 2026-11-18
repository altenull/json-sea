# Module: useIntlNumberFormat

**File:** `\src\node-detail\primitive\hooks\useIntlNumberFormat.ts`

## Overview

Module `useIntlNumberFormat` contains 1 analyzed entities.

```
'use client';

import { useState } from 'react';

export const useIntlNumberFormat = () => {
  const [intlNumberFormat] = useState(
    Intl.NumberFormat(navigator.language, {
      maximumFractionDigits: 5,
    })
  );

  return {
    intlNumberFormat,
  };
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useIntlNumberFormat.useIntlNumberFormat` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
