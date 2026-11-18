# Module: PreviewVideo

**File:** `\src\node-detail\primitive\components\PreviewVideo.tsx`

## Overview

Module `PreviewVideo` contains 1 analyzed entities.

```
import { memo } from 'react';
import { Base64VideoDataUri } from '../types/media-src.type';
import { VideoViewer } from './VideoViewer';

type Props = {
  videoSrc: Base64VideoDataUri;
};

const _PreviewVideo = ({ videoSrc }: Props) => {
  return <VideoViewer videoSrc={videoSrc} />;
};

export const PreviewVideo = memo(_PreviewVideo);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PreviewVideo._PreviewVideo` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
