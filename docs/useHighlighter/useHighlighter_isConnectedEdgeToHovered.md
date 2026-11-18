# useHighlighter.isConnectedEdgeToHovered

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-diagram\hooks\useHighlighter.ts` (lines 5-15)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(edge: Edge, hoveredNodeDetails: HoveredNodeDetail[]): boolean => {
  const { source, sourceHandle, target } = edge;

  return hoveredNodeDetails.some(({ nodeId, propertyK }) => {
    if (isString(propertyK)) {
      return nodeId === source && propertyK === sourceHandle; // Hovered from `ObjectNodeDetail`
    } else {
      return nodeId === target; // Hovered from `ArrayNodeDetail` or `PrimitiveNodeDetail`
    }
  });
}
```

## Docstring

_No docstring provided._

## Source

```
const isConnectedEdgeToHovered = (edge: Edge, hoveredNodeDetails: HoveredNodeDetail[]): boolean => {
  const { source, sourceHandle, target } = edge;

  return hoveredNodeDetails.some(({ nodeId, propertyK }) => {
    if (isString(propertyK)) {
      return nodeId === source && propertyK === sourceHandle; // Hovered from `ObjectNodeDetail`
    } else {
      return nodeId === target; // Hovered from `ArrayNodeDetail` or `PrimitiveNodeDetail`
    }
  });
};
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
