# useSelectedNode.useSelectedNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\hooks\useSelectedNode.ts` (lines 9-18)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const selectedNodeId = useJsonDiagramViewStore((state) => state.selectedNodeId);
  const { seaNodeEntities } = useJsonEngineStore((state) => state.jsonTree);

  if (isNull(selectedNodeId)) {
    return null;
  }

  return seaNodeEntities[selectedNodeId] ?? null;
}
```

## Docstring

_No docstring provided._

## Source

```
export const useSelectedNode = () => {
  const selectedNodeId = useJsonDiagramViewStore((state) => state.selectedNodeId);
  const { seaNodeEntities } = useJsonEngineStore((state) => state.jsonTree);

  if (isNull(selectedNodeId)) {
    return null;
  }

  return seaNodeEntities[selectedNodeId] ?? null;
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
