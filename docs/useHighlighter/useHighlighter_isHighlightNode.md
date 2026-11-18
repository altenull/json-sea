# useHighlighter.isHighlightNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-diagram\hooks\useHighlighter.ts` (lines 29-29)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(nodeId: string) => highlightedEdges.some(({ target }) => target === nodeId)
```

## Docstring

_No docstring provided._

## Source

```
  const isHighlightNode = (nodeId: string) => highlightedEdges.some(({ target }) => target === nodeId);
```

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
