# Module: EmptyNodeMessage

**File:** `\src\node-detail\components\EmptyNodeMessage.tsx`

## Overview

Module `EmptyNodeMessage` contains 1 analyzed entities.

```
import Image from 'next/image';
import { memo } from 'react';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { Text } from '../../ui/components/Text';
import { nodeTypeToTextMap } from '../array/helpers/node-type.helper';

type Props = {
  nodeType: NodeType.Object | NodeType.Array;
};

const nodeTypeToSyntaxMap: Record<NodeType.Object | NodeType.Array, string> = {
  [NodeType.Object]: '{ }',
  [NodeType.Array]: '[ ]',
};

const _EmptyNodeMessage = ({ nodeType }: Props) => {
  return (
    <div className="m-auto flex flex-col items-center">
      <Image src="/oceania.png" alt="oceania" width="200" height="200" />
      <Text className="text-lg font-medium text-gray-600">{nodeTypeToSyntaxMap[nodeType]}</Text>
      <Text className="font-semibold">
        You have just selected an empty {nodeTypeToTextMap[nodeType].toLowerCase()}.
      </Text>
    </div>
  );
};

export const EmptyNodeMessage = memo(_EmptyNodeMessage);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `EmptyNodeMessage._EmptyNodeMessage` | function | No description |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 1
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
