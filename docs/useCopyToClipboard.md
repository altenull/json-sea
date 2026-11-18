# Module: useCopyToClipboard

**File:** `\src\utils\react-hooks\useCopyToClipboard.ts`

## Overview

Module `useCopyToClipboard` contains 3 analyzed entities.

```
'use client';

import { useState } from 'react';

type CopiedText = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<CopiedText>(null);

  const copyToClipboard: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  const reset = () => setCopiedText(null);

  return { copiedText, copyToClipboard, reset };
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useCopyToClipboard.useCopyToClipboard` | function | No description |
| `useCopyToClipboard.copyToClipboard` | function | No description |
| `useCopyToClipboard.reset` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 2
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
