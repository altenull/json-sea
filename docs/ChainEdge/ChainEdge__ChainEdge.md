# ChainEdge._ChainEdge

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-diagram\components\ChainEdge.tsx` (lines 6-32)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ id, sourceX, sourceY, targetX, targetY, style = {}, markerEnd }: EdgeProps) => {
  const { theme } = useCustomTheme();
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const strokeWidth = 3;

  return (
    <path
      id={id}
      style={{
        ...style,
        stroke: semanticColors[theme].primary[200],
        strokeWidth,
        transform: `translateX(-${strokeWidth / 2}px)`,
      }}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      strokeDasharray="5 8"
    />
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _ChainEdge = ({ id, sourceX, sourceY, targetX, targetY, style = {}, markerEnd }: EdgeProps) => {
  const { theme } = useCustomTheme();
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const strokeWidth = 3;

  return (
    <path
      id={id}
      style={{
        ...style,
        stroke: semanticColors[theme].primary[200],
        strokeWidth,
        transform: `translateX(-${strokeWidth / 2}px)`,
      }}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      strokeDasharray="5 8"
    />
  );
};
```

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
