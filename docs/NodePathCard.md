# Module: NodePathCard

**File:** `\src\node-detail\components\NodePathCard.tsx`

## Overview

Module `NodePathCard` contains 1 analyzed entities.

```
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { TextCopyBox } from '../primitive/components/TextCopyBox';

type Props = {
  fullNodePath: string;
};

export const NodePathCard = ({ fullNodePath }: Props) => {
  return (
    <Card fullWidth shadow="sm">
      <CardHeader>
        <Chip variant="faded" color="default" size="md">
          Node Path
        </Chip>
      </CardHeader>

      <CardBody className="pb-unit-sm px-3 pt-0">
        <TextCopyBox text={fullNodePath} />
      </CardBody>
    </Card>
  );
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `NodePathCard.NodePathCard` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
