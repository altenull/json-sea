# Module: JsonDiagram

**File:** `\src\json-diagram\components\JsonDiagram.tsx`

## Overview

Module `JsonDiagram` contains 0 analyzed entities.

```
'use client';

import { useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  EdgeTypes,
  NodeChange,
  NodeTypes,
  applyNodeChanges,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { featureFlag } from '../../environment';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { EdgeType } from '../../store/json-engine/enums/edge-type.enum';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { useLandingStore } from '../../store/landing/landing.store';
import { useSettingsStore } from '../../store/settings/settings.store';
import { useIsMounted } from '../../utils/react-hooks/useIsMounted';
import { ArrayNode } from './ArrayNode';
import { ChainEdge } from './ChainEdge';
import { CustomMiniMap } from './CustomMiniMap';
import { DefaultEdge } from './DefaultEdge';
import { DownloadImageButton } from './DownloadImageButton';
import { FitViewInvoker } from './FitViewInvoker';
import { NodePathBreadcrumbs } from './NodePathBreadcrumbs';
import { ObjectNode } from './ObjectNode';
import { PrimitiveNode } from './PrimitiveNode';

const nodeTypes: NodeTypes = {
  [NodeType.Object]: ObjectNode,
  [NodeType.Array]: ArrayNode,
  [NodeType.Primitive]: PrimitiveNode,
};

const edgeTypes: EdgeTypes = {
  [EdgeType.Default]: DefaultEdge,
  [EdgeType.Chain]: ChainEdge,
};

const _JsonDiagram = () => {
  const [seaNodes, setSeaNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  const isMinimapOn = useSettingsStore((state) => state.isMinimapOn);
  const jsonTree = useJsonEngineStore((state) => state.jsonTree);
  const initApp = useLandingStore((state) => state.initApp);
  const selectNode = useJsonDiagramViewStore((state) => state.selectNode);

  const isMounted = useIsMounted();

  useEffect(() => 
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 24
- Authors: 1
- Bug fixes: 2
- Features: 14

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
