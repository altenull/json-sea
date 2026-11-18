# Module: PreviewOgMeta

**File:** `\src\node-detail\primitive\components\PreviewOgMeta.tsx`

## Overview

Module `PreviewOgMeta` contains 0 analyzed entities.

```
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { memo } from 'react';
import { JsonLink } from '../../../api/json-link-api/json-link.types';
import { Text } from '../../../ui/components/Text';
import { isString } from '../../../utils/json.util';
import { openLinkAsNewTab } from '../../../utils/window.util';

type Props = {
  jsonLink: JsonLink;
};

const _PreviewOgMeta = ({ jsonLink }: Props) => {
  const { title, description, images = [] } = jsonLink;

  if (!isString(title) && !isString(description)) {
    return null;
  }

  return (
    <Card isPressable shadow="sm" onClick={() => openLinkAsNewTab(jsonLink.url)}>
      {images.length > 0 && (
        <CardBody className="p-0">
          <Image className="h-[120px] object-cover" src={images[0]} width="100%" alt={title} />
        </CardBody>
      )}

      <CardFooter className="flex-col items-start">
        <Text className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold" title={title as string}>
          {title as string}
        </Text>

        <Text
          className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-normal text-zinc-400"
          title={description as string}
        >
          {description as string}
        </Text>
      </CardFooter>
    </Card>
  );
};

export const PreviewOgMeta = memo(_PreviewOgMeta);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 7
- Authors: 1
- Bug fixes: 1
- Features: 4

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
