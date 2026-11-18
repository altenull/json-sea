# ArrayNodeDetail.getArrayItemNodeId

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\array\components\ArrayNodeDetail.tsx` (lines 16-21)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(edges: Edge[], parentNodeId: string, index: number): string => {
  const connectedNodeIds: string[] = edges.filter(({ source }) => source === parentNodeId).map(({ target }) => target);
  const uniqConnectedNodeIds: string[] = Array.from(new Set(connectedNodeIds));

  return uniqConnectedNodeIds[index];
}
```

## Docstring

_No docstring provided._

## Source

```
const getArrayItemNodeId = (edges: Edge[], parentNodeId: string, index: number): string => {
  const connectedNodeIds: string[] = edges.filter(({ source }) => source === parentNodeId).map(({ target }) => target);
  const uniqConnectedNodeIds: string[] = Array.from(new Set(connectedNodeIds));

  return uniqConnectedNodeIds[index];
};
```

## Git History

- Commits: 7
- Authors: 1
- Bug fixes: 0
- Features: 4

## Callers

None

## Callees

None
