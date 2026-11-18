# useNodePath.useNodePath

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\hooks\useNodePath.ts` (lines 133-137)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(nodeId: string | null): NodePath => {
  const jsonTree = useJsonEngineStore((state) => state.jsonTree);

  return getNodePath(jsonTree, nodeId);
}
```

## Docstring

_No docstring provided._

## Source

```
export const useNodePath = (nodeId: string | null): NodePath => {
  const jsonTree = useJsonEngineStore((state) => state.jsonTree);

  return getNodePath(jsonTree, nodeId);
};
```

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 1
- Features: 2

## Callers

None

## Callees

None
