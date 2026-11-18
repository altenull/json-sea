# Module: PreviewAudio

**File:** `\src\node-detail\primitive\components\PreviewAudio.tsx`

## Overview

Module `PreviewAudio` contains 1 analyzed entities.

```
import { memo } from 'react';
import { Base64AudioDataUri } from '../types/media-src.type';
import { AudioViewer } from './AudioViewer';

type Props = {
  audioSrc: Base64AudioDataUri;
};

const _PreviewAudio = ({ audioSrc }: Props) => {
  return <AudioViewer audioSrc={audioSrc} />;
};

export const PreviewAudio = memo(_PreviewAudio);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PreviewAudio._PreviewAudio` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
