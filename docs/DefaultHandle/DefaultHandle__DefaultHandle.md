# DefaultHandle._DefaultHandle

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-diagram\components\DefaultHandle.tsx` (lines 9-21)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ id, type, style = {} }: Props) => {
  const handleTypeToPositionMap: Record<HandleType, Position> = useMemo(
    () => ({
      source: Position.Right,
      target: Position.Left,
    }),
    []
  );

  return (
    <Handle style={{ ...hiddenHandleStyle, ...style }} id={id} type={type} position={handleTypeToPositionMap[type]} />
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _DefaultHandle = ({ id, type, style = {} }: Props) => {
  const handleTypeToPositionMap: Record<HandleType, Position> = useMemo(
    () => ({
      source: Position.Right,
      target: Position.Left,
    }),
    []
  );

  return (
    <Handle style={{ ...hiddenHandleStyle, ...style }} id={id} type={type} position={handleTypeToPositionMap[type]} />
  );
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
