# Module: PreviewImageUri

**File:** `\src\node-detail\primitive\components\PreviewImageUri.tsx`

## Overview

Module `PreviewImageUri` contains 1 analyzed entities.

```
import { memo } from 'react';
import { HttpUri } from '../types/http-uri.type';
import { ImageViewer } from './ImageViewer';
import { UriTable } from './UriTable';

type Props = {
  imageUri: HttpUri;
};

const _PreviewImageUri = ({ imageUri }: Props) => {
  return (
    <>
      <ImageViewer imageSrc={imageUri} />
      <UriTable httpUri={imageUri} />
    </>
  );
};

export const PreviewImageUri = memo(_PreviewImageUri);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `PreviewImageUri._PreviewImageUri` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
