# Module: PreviewAudioUri

**File:** `\src\node-detail\primitive\components\PreviewAudioUri.tsx`

## Overview

Module `PreviewAudioUri` contains 1 analyzed entities.

```
import { memo } from 'react';
import { HttpUri } from '../types/http-uri.type';
import { AudioViewer } from './AudioViewer';
import { UriTable } from './UriTable';

type Props = {
  audioUri: HttpUri;
};

const _PreviewAudioUri = ({ audioUri }: Props) => {
  return (
    <>
      <AudioViewer audioSrc={audioUri} />
      <UriTable httpUri={audioUri} />
    </>
  );
};

export const PreviewAudioUri = memo(_PreviewAudioUri);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PreviewAudioUri._PreviewAudioUri` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
