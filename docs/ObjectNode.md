# Module: ObjectNode

**File:** `\src\json-diagram\components\ObjectNode.tsx`

## Overview

Module `ObjectNode` contains 0 analyzed entities.

```
import { memo, useCallback } from 'react';
import { NodeProps, useEdges } from 'reactflow';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { addPrefixChain } from '../../store/json-engine/helpers/json-parser.helper';
import { ObjectNodeData } from '../../store/json-engine/types/sea-node.type';
import { useNodeDetailViewStore } from '../../store/node-detail-view/node-detail-view.store';
import { useHighlighter } from '../hooks/useHighlighter';
import { ChainHandle } from './ChainHandle';
import { DefaultHandle } from './DefaultHandle';
import { HoveringBlueDot } from './HoveringBlueDot';
import { NodeShell } from './NodeShell';
import { ObjectNodeProperty } from './ObjectNodeProperty';

/**
 * ObjectNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have except for RootNode.
 */
const _ObjectNode = ({ id, data }: NodeProps<ObjectNodeData>) => {
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);
  const { isHighlightNode } = useHighlighter();
  const edges = useEdges();

  const { obj, isRootNode } = data;

  const renderProperties = useCallback(() => {
    return Object.entries(obj).map(([propertyK, propertyV]) => {
      const hasChildNode: boolean = edges.some(
        ({ source, sourceHandle }) => source === id && sourceHandle === propertyK,
      );

      return (
        <ObjectNodeProperty
          key={propertyK}
          nodeId={id}
          propertyK={propertyK}
          propertyV={propertyV}
          hasChildNode={hasChildNode}
        />
      );
    });
  }, [obj, edges, id]);

  /**
   * undefined `propertyK` means a `ArrayItemCard` is hovered, not `PropertyCard`.
   */
  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(
    ({ nodeId, propertyK }) => nodeId === id && propertyK === undefined,
  );

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Object} isHighlight={isHighlightNode(id)}>
      <DefaultHandle id={id} type="target
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 8
- Authors: 1
- Bug fixes: 0
- Features: 5

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
