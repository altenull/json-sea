# DefaultEdge._DefaultEdge

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-diagram\components\DefaultEdge.tsx` (lines 9-48)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  source,
  /**
   * [2023-02-01] `sourceHandle` property seems to be transformed to `sourceHandleId` internally.
   * [2023-07-05] It seems that `sourceHandle` and `sourceHandleId` are same.
   */
  sourceHandleId,
  target,
}: EdgeProps) => {
  const { theme } = useCustomTheme();
  const { isHighlightEdge } = useHighlighter();

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const dynamicStyle = isHighlightEdge(id)
    ? {
        ...style,
        stroke: (semanticColors[theme].primary as any).DEFAULT,
        strokeWidth: 3,
      }
    : style;

  return <path id={id} style={dynamicStyle} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} />;
}
```

## Docstring

_No docstring provided._

## Source

```
const _DefaultEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  source,
  /**
   * [2023-02-01] `sourceHandle` property seems to be transformed to `sourceHandleId` internally.
   * [2023-07-05] It seems that `sourceHandle` and `sourceHandleId` are same.
   */
  sourceHandleId,
  target,
}: EdgeProps) => {
  const { theme } = useCustomTheme();
  const { isHighlightEdge } = useHighlighter();

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const dynamicStyle = isHighlightEdge(id)
    ? {
        ...style,
        stroke: (semanticColors[theme].primary as any).DEFAULT,
        strokeWidth: 3,
      }
    : style;

  return <path id={id} style={dynamicStyle} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} />;
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
