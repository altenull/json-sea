# Module: useNodePath

**File:** `\src\node-detail\hooks\useNodePath.ts`

## Overview

Module `useNodePath` contains 3 analyzed entities.

```
import { Edge } from 'reactflow';
import { CURLY_ROOT_NODE_NAME, ROOT_NODE_NAME } from '../../json-diagram/constants/root-node.constant';
import { isArraySeaNode, isObjectSeaNode, isPrimitiveSeaNode } from '../../store/json-engine/helpers/sea-node.helper';
import { JsonTree, useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { isNull, isNumber } from '../../utils/json.util';
import { encloseSquareBrackets } from '../../utils/string.util';

type NodeIdName = {
  nodeId: string;
  nodeName: string;
};

type NodePath = {
  fullNodeIdNames: NodeIdName[];
  fullNodePath: string; // e.g. `{root}`, `{root}.field_1`, `{root}.something[0].field_2`, `{root}.array[3][2].field_3[4]`, `{root}[1][2]`, ...
  selfNodePath: string; // e.g. `{root}`, `field_1`, `field_2`, `field_3[4]`, `{root}[1][2]`, ...
};

const ROOT_NODE_PATH: NodePath = {
  fullNodeIdNames: [],
  fullNodePath: CURLY_ROOT_NODE_NAME,
  selfNodePath: ROOT_NODE_NAME,
};

const getObjectPropertyK = ({
  edges,
  source,
  target,
}: {
  edges: Edge[];
  source: string;
  target: string;
}): string | null | undefined => edges.find((edge) => edge.source === source && edge.target === target)?.sourceHandle;

const getNodePath = (jsonTree: JsonTree, selfNodeId: string | null): NodePath => {
  if (isNull(selfNodeId)) {
    return ROOT_NODE_PATH;
  }

  const { seaNodeEntities, edges } = jsonTree;
  const selfNode = seaNodeEntities[selfNodeId];

  /**
   * [Unknown Issue]
   * If empty [] or {} json code is entered, 'n1' selfNodeId is passed for some reason.
   * (Only root node is rendered)
   */
  if (selfNode === undefined) {
    return ROOT_NODE_PATH;
  }

  const isRootSelfNode = (isObjectSeaNode(selfNode) || isArraySeaNode(selfNode)) && selfNode.data.isRootNode;

  if (isRootSelfNode) {
    return ROOT_NODE_PATH;
  }

  const fullNodePathIds = selfNode.data.parentNodePathIds.concat([selfNodeId]);

  const fullNodeIdNames 
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useNodePath.getObjectPropertyK` | function | No description |
| `useNodePath.getNodePath` | function | No description |
| `useNodePath.useNodePath` | function | No description |

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 1
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
