# Module: PreviewVideoUri

**File:** `\src\node-detail\primitive\components\PreviewVideoUri.tsx`

## Overview

Module `PreviewVideoUri` contains 1 analyzed entities.

```
import { memo } from 'react';
import { HttpUri } from '../types/http-uri.type';
import { VideoViewer } from './VideoViewer';
import { UriTable } from './UriTable';

type Props = {
  videoUri: HttpUri;
};

const _PreviewVideoUri = ({ videoUri }: Props) => {
  return (
    <>
      <VideoViewer videoSrc={videoUri} />
      <UriTable httpUri={videoUri} />
    </>
  );
};

export const PreviewVideoUri = memo(_PreviewVideoUri);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PreviewVideoUri._PreviewVideoUri` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
