# Module: PreviewHttpUri

**File:** `\src\node-detail\primitive\components\PreviewHttpUri.tsx`

## Overview

Module `PreviewHttpUri` contains 1 analyzed entities.

```
import { memo } from 'react';
import { HttpUri } from '../types/http-uri.type';
import { LinkViewer } from './LinkViewer';
import { UriTable } from './UriTable';

type Props = {
  httpUri: HttpUri;
};

const _PreviewHttpUri = ({ httpUri }: Props) => {
  return (
    <>
      <LinkViewer httpUri={httpUri} />
      <UriTable httpUri={httpUri} />
    </>
  );
};

export const PreviewHttpUri = memo(_PreviewHttpUri);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PreviewHttpUri._PreviewHttpUri` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
