# Module: json-parser.helper

**File:** `\src\store\json-engine\helpers\json-parser.helper.ts`

## Overview

Module `json-parser.helper` contains 12 analyzed entities.

```
import { nanoid } from 'nanoid';
import { Edge } from 'reactflow';
import {
  ARRAY_ROOT_NODE_INDEX,
  ROOT_NODE_DEPTH,
  ROOT_PARENT_NODE_PATH_IDS,
} from '../../../json-diagram/constants/root-node.constant';
import { isLastItemOfArray } from '../../../utils/array.util';
import { isArray, isObject, isString } from '../../../utils/json.util';
import { EdgeType } from '../enums/edge-type.enum';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';
import { ArraySeaNode, ObjectSeaNode, PrimitiveSeaNode, SeaNode } from '../types/sea-node.type';
import { getJsonDataType, validateJsonDataType } from './json-data-type.helper';
import { getXYPosition } from './sea-node-position.helper';

const formatNodeId = (nodeSequence: number): string => `n${nodeSequence}`;

export const addPrefixChain = (v: string): string => `chain-${v}`;

type BeforeObjectSeaNode = {
  nodeId: string;
  depth: number;
  obj: object;
  parentNodePathIds: string[];
  arrayIndexForObject: number | null;
  isRootNode: boolean;
};

const convertObjectToNode = ({
  nodeId,
  depth,
  obj,
  parentNodePathIds,
  arrayIndexForObject,
  isRootNode,
}: BeforeObjectSeaNode): ObjectSeaNode => {
  return {
    id: nodeId,
    type: NodeType.Object,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType: JsonDataType.Object,
      stringifiedJson: '', // Optimized: No longer stringifying object to avoid O(N^2)
      parentNodePathIds,
      obj,
      arrayIndexForObject,
      isRootNode,
    },
  };
};

type BeforeArraySeaNode = {
  nodeId: string;
  depth: number;
  arrayIndex: number;
  items: any[];
  parentNodePathIds: string[];
  isRootNode: boolean;
};

const convertArrayToNode = ({
  nodeId,
  depth,
  arrayIndex,
  items,
  parentNodePathIds,
  isRootNode,
}: BeforeArraySeaNode): ArraySeaNode => {
  return {
    id: nodeId,
    type: NodeType.Array,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType:
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `json-parser.helper.formatNodeId` | function | No description |
| `json-parser.helper.addPrefixChain` | function | No description |
| `json-parser.helper.convertObjectToNode` | function | No description |
| `json-parser.helper.convertArrayToNode` | function | No description |
| `json-parser.helper.convertPrimitiveToNode` | function | No description |
| `json-parser.helper.createDefaultEdge` | function | No description |
| `json-parser.helper.createChainEdge` | function | No description |
| `json-parser.helper.jsonParser` | function | No description |
| `json-parser.helper.addDefaultEdge` | function | No description |
| `json-parser.helper.traverse` | function | No description |
| `json-parser.helper.traverseArray` | function | No description |
| `json-parser.helper.traverseObject` | function | No description |

## Git History

- Commits: 13
- Authors: 1
- Bug fixes: 0
- Features: 7

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
