# Module: NodeDetailPanel

**File:** `\src\node-detail\components\NodeDetailPanel.tsx`

## Overview

Module `NodeDetailPanel` contains 0 analyzed entities.

```
'use client';

import { memo, useEffect, useRef } from 'react';
import { Copyright } from '../../foundation/components/Copyright';
import { isArraySeaNode, isObjectSeaNode, isPrimitiveSeaNode } from '../../store/json-engine/helpers/sea-node.helper';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { Text } from '../../ui/components/Text';
import { isNull } from '../../utils/json.util';
import { useEnv } from '../../utils/react-hooks/useEnv';
import { encloseDoubleQuote } from '../../utils/string.util';
import { ArrayNodeDetail } from '../array/components/ArrayNodeDetail';
import { useParentNode } from '../hooks/useParentNode';
import { useSelectedNode } from '../hooks/useSelectedNode';
import { ObjectNodeDetail } from '../object/components/ObjectNodeDetail';
import { PrimitiveNodeDetail } from '../primitive/components/PrimitiveNodeDetail';
import { NodeDetailPanelHeader } from './NodeDetailPanelHeader';

const _NodeDetailPanel = () => {
  const selectedNode: SeaNode | null = useSelectedNode();
  const parentNode: SeaNode | null = useParentNode();

  const hostRef = useRef<HTMLDivElement | null>(null);

  const { isLocalhost } = useEnv();

  useEffect(() => {
    if (!!hostRef?.current) {
      hostRef.current.scrollTo({ top: 0 });
    }
  }, [selectedNode, hostRef]);

  return (
    <div
      ref={hostRef}
      className="dark:[&_.leaflet-tile]:leaflet-dark-tile [&_.leaflet-bar]:leaflet-zoom-button-group [&_.leaflet-bar_a]:leaflet-zoom-button node-detail-panel"
    >
      {isNull(selectedNode) ? (
        <Text h3>No selected node.</Text>
      ) : (
        <>
          <NodeDetailPanelHeader selectedNode={selectedNode} />

          {isLocalhost && (
            <>
              <Text h4 className="text-warning">
                nodeId is {encloseDoubleQuote(selectedNode.id)}
              </Text>
              {parentNode && (
                <>
                  <Text h4 className="text-warning">
                    parentNodeId i
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 12
- Authors: 1
- Bug fixes: 3
- Features: 6

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
