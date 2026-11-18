# useNodePath.getObjectPropertyK

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\hooks\useNodePath.ts` (lines 26-34)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({
  edges,
  source,
  target,
}: {
  edges: Edge[];
  source: string;
  target: string;
}): string | null | undefined => edges.find((edge) => edge.source === source && edge.target === target)?.sourceHandle
```

## Docstring

_No docstring provided._

## Source

```
const getObjectPropertyK = ({
  edges,
  source,
  target,
}: {
  edges: Edge[];
  source: string;
  target: string;
}): string | null | undefined => edges.find((edge) => edge.source === source && edge.target === target)?.sourceHandle;
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
