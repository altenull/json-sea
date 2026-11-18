# useParentNode.useParentNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\hooks\useParentNode.ts` (lines 9-26)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
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
}
```

## Docstring

_No docstring provided._

## Source

```
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

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
