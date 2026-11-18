# Module: useParentNode

**File:** `\src\node-detail\hooks\useParentNode.ts`

## Overview

Module `useParentNode` contains 1 analyzed entities.

```
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { isNull, isString } from '../../utils/json.util';

/**
 * Returns the parent node of the currently selected node if exists.
 * @returns {SeaNode | null}
 */
export const useParentNode = () => {
  const selectedNodeId = useJsonDiagramViewStore((state) => state.selectedNodeId);
  const { seaNodeEntities } = useJsonEngineStore((state) => state.jsonTree);

  const selectedNode = isNull(selectedNodeId) ? null : (seaNodeEntities[selectedNodeId] ?? null);

  if (isNull(selectedNode)) {
    return null;
  }

  const parentId = selectedNode.data.parentNodePathIds.at(-1);

  if (!isString(parentId)) {
    return null;
  }

  return seaNodeEntities[parentId];
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `useParentNode.useParentNode` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
