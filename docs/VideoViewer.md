# Module: VideoViewer

**File:** `\src\node-detail\primitive\components\VideoViewer.tsx`

## Overview

Module `VideoViewer` contains 1 analyzed entities.

```
import { memo } from 'react';
import { VideoSrc } from '../types/media-src.type';
import { MediaViewerBox } from './MediaViewerBox';
import { MIMETypeAndSize } from './MIMETypeAndSize';

type Props = {
  videoSrc: VideoSrc;
};

const _VideoViewer = ({ videoSrc }: Props) => {
  return (
    <MediaViewerBox>
      <video className="block w-full" controls preload="metadata" src={videoSrc} />
      <MIMETypeAndSize mediaSrc={videoSrc} />
    </MediaViewerBox>
  );
};

export const VideoViewer = memo(_VideoViewer);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `VideoViewer._VideoViewer` | function | No description |

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 1
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
