# Module: file-download.util

**File:** `\src\utils\file-download.util.ts`

## Overview

Module `file-download.util` contains 1 analyzed entities.

```
export const downloadAsFile = (dataUrl: string, fileName: string) => {
  const anchor: HTMLAnchorElement = document.createElement('a');

  anchor.style.display = 'none';
  anchor.setAttribute('download', fileName);
  anchor.setAttribute('href', dataUrl);

  anchor.click();
  anchor.remove();
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `file-download.util.downloadAsFile` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
