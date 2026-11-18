# Module: NodeDetailPanelHeader

**File:** `\src\node-detail\components\NodeDetailPanelHeader.tsx`

## Overview

Module `NodeDetailPanelHeader` contains 0 analyzed entities.

```
import { Spacer } from '@heroui/react';
import { memo } from 'react';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { useSettingsStore } from '../../store/settings/settings.store';
import { Text } from '../../ui/components/Text';
import { nodeTypeToTextMap } from '../array/helpers/node-type.helper';
import { useNodePath } from '../hooks/useNodePath';
import { NodeDetailChip } from './NodeDetailChip';
import { NodePathCard } from './NodePathCard';

type Props = {
  selectedNode: SeaNode;
};

const _NodeDetailPanelHeader = ({ selectedNode }: Props) => {
  const isNodePathOn = useSettingsStore((state) => state.isNodePathOn);
  const { fullNodePath, selfNodePath } = useNodePath(selectedNode.id);

  return (
    <div>
      <div className="flex justify-between">
        <Text h3>{selectedNode.type !== undefined && nodeTypeToTextMap[selectedNode.type]}</Text>
        <NodeDetailChip value={selfNodePath} />
      </div>

      <Spacer y={2} />

      {isNodePathOn && (
        <>
          <NodePathCard fullNodePath={fullNodePath} />
          <Spacer y={6} />
        </>
      )}
    </div>
  );
};

export const NodeDetailPanelHeader = memo(_NodeDetailPanelHeader);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 13
- Authors: 1
- Bug fixes: 1
- Features: 7

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
