# Module: AudioViewer

**File:** `\src\node-detail\primitive\components\AudioViewer.tsx`

## Overview

Module `AudioViewer` contains 1 analyzed entities.

```
import { memo } from 'react';
import { AudioSrc } from '../types/media-src.type';
import { MediaViewerBox } from './MediaViewerBox';
import { MIMETypeAndSize } from './MIMETypeAndSize';

type Props = {
  audioSrc: AudioSrc;
};

const _AudioViewer = ({ audioSrc }: Props) => {
  return (
    <MediaViewerBox>
      <audio className="block w-full" controls preload="metadata" src={audioSrc} />
      <MIMETypeAndSize mediaSrc={audioSrc} />
    </MediaViewerBox>
  );
};

export const AudioViewer = memo(_AudioViewer);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `AudioViewer._AudioViewer` | function | No description |

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 1
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
