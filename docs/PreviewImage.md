# Module: PreviewImage

**File:** `\src\node-detail\primitive\components\PreviewImage.tsx`

## Overview

Module `PreviewImage` contains 1 analyzed entities.

```
import { memo } from 'react';
import { Base64ImageDataUri, ImageSrc } from '../types/media-src.type';
import { ImageViewer } from './ImageViewer';

type Props = {
  imageSrc: Base64ImageDataUri;
};

const _PreviewImage = ({ imageSrc }: Props) => {
  return <ImageViewer imageSrc={imageSrc} />;
};

export const PreviewImage = memo(_PreviewImage);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PreviewImage._PreviewImage` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
