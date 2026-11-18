# useHighlighter.useHighlighter

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-diagram\hooks\useHighlighter.ts` (lines 17-32)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);
  const edges = useEdges();

  const highlightedEdges: Edge[] = edges.filter((edge) => isConnectedEdgeToHovered(edge, hoveredNodeDetails));

  const isHighlightEdge = (edgeId: string) => highlightedEdges.some(({ id }) => id === edgeId);

  /**
   * If the left edge is highlighted, the node connected to left edge should also be highlighted.
   * Therefore, check `target` value.
   */
  const isHighlightNode = (nodeId: string) => highlightedEdges.some(({ target }) => target === nodeId);

  return { isHighlightEdge, isHighlightNode } as const;
}
```

## Docstring

_No docstring provided._

## Source

```
export const useHighlighter = () => {
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);
  const edges = useEdges();

  const highlightedEdges: Edge[] = edges.filter((edge) => isConnectedEdgeToHovered(edge, hoveredNodeDetails));

  const isHighlightEdge = (edgeId: string) => highlightedEdges.some(({ id }) => id === edgeId);

  /**
   * If the left edge is highlighted, the node connected to left edge should also be highlighted.
   * Therefore, check `target` value.
   */
  const isHighlightNode = (nodeId: string) => highlightedEdges.some(({ target }) => target === nodeId);

  return { isHighlightEdge, isHighlightNode } as const;
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
