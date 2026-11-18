# Module: page

**File:** `\app\page.tsx`

## Overview

Module `page` contains 0 analyzed entities.

```
import { Metadata } from 'next';
import { GlobalNav } from '../src/foundation/components/GlobalNav';
import { LandingLoader } from '../src/foundation/components/LandingLoader';
import { LocalhostChip } from '../src/foundation/components/LocalhostChip';
import { Main } from '../src/foundation/components/Main';
import { JsonDiagram } from '../src/json-diagram/components/JsonDiagram';
import { ResizableJsonEditor } from '../src/json-editor/components/ResizableJsonEditor';
import { NodeDetailPanel } from '../src/node-detail/components/NodeDetailPanel';
import './index.css';

const TITLE = 'JSON Sea';
const DESCRIPTION = '🌊 Dive deep into the JSON Sea!';
const OG_IMAGE_URL = 'https://raw.githubusercontent.com/altenull/json-sea/main/public/og-image.png';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://jsonsea.com',
    siteName: 'JSON SEA',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

const RootPage = () => {
  return (
    <>
      <LandingLoader />

      <GlobalNav />

      <Main>
        <ResizableJsonEditor />
        <JsonDiagram />
        <NodeDetailPanel />
      </Main>

      <LocalhostChip />
    </>
  );
};

export default RootPage;
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 1
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
