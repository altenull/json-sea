# Module: ImageViewer

**File:** `\src\node-detail\primitive\components\ImageViewer.tsx`

## Overview

Module `ImageViewer` contains 1 analyzed entities.

```
import { Image } from "@heroui/image";
import { memo } from 'react';
import { openLinkAsNewTab } from '../../../utils/window.util';
import { ImageSrc } from '../types/media-src.type';
import { MediaViewerBox } from './MediaViewerBox';
import { MIMETypeAndSize } from './MIMETypeAndSize';

type Props = {
  imageSrc: ImageSrc;
};

const _ImageViewer = ({ imageSrc }: Props) => {
  return (
    <MediaViewerBox>
      <Image
        className="mx-auto block h-[120px] w-auto cursor-pointer"
        removeWrapper
        radius="none"
        shadow="sm"
        src={imageSrc}
        alt="image preview"
        onClick={() => openLinkAsNewTab(imageSrc)}
      />
      <MIMETypeAndSize mediaSrc={imageSrc} />
    </MediaViewerBox>
  );
};

export const ImageViewer = memo(_ImageViewer);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `ImageViewer._ImageViewer` | function | No description |

## Git History

- Commits: 8
- Authors: 1
- Bug fixes: 1
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
