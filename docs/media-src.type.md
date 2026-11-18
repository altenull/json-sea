# Module: media-src.type

**File:** `\src\node-detail\primitive\types\media-src.type.ts`

## Overview

Module `media-src.type` contains 0 analyzed entities.

```
import { HttpUri } from './http-uri.type';

export type Base64ImageDataUri = `data:image/${string};base64,${string}`;
// Transferring video to data uri is terrible way. So there are very few use cases.
export type Base64VideoDataUri = `data:video/${string};base64,${string}`;
export type Base64AudioDataUri = `data:audio/${string};base64,${string}`;

export type ImageSrc = Base64ImageDataUri | HttpUri;
export type VideoSrc = Base64VideoDataUri | HttpUri;
export type AudioSrc = Base64AudioDataUri | HttpUri;
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
