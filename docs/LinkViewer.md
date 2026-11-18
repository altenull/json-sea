# Module: LinkViewer

**File:** `\src\node-detail\primitive\components\LinkViewer.tsx`

## Overview

Module `LinkViewer` contains 1 analyzed entities.

```
import { memo } from 'react';
import { useJsonLinkApi } from '../../../api/json-link-api/useJsonLinkApi';
import { isNull } from '../../../utils/json.util';
import { HttpUri } from '../types/http-uri.type';
import { PreviewOgMeta } from './PreviewOgMeta';

type Props = {
  httpUri: HttpUri;
};

const _LinkViewer = ({ httpUri }: Props) => {
  const { data } = useJsonLinkApi({ httpUri });

  if (isNull(data) || data === undefined) {
    return null;
  }

  return <PreviewOgMeta jsonLink={data} />;
};

export const LinkViewer = memo(_LinkViewer);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `LinkViewer._LinkViewer` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
