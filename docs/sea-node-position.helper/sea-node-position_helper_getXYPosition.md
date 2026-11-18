# sea-node-position.helper.getXYPosition

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\sea-node-position.helper.ts` (lines 7-12)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(depth: number): XYPosition => {
  const x: number = depth * sizes.nodeMaxWidth + depth * sizes.nodeGap;
  const y: number = 0; // y will be calculated in `getLayoutedSeaNodes` function with `dagre` library later.

  return { x, y } as XYPosition;
}
```

## Docstring

_No docstring provided._

## Source

```
export const getXYPosition = (depth: number): XYPosition => {
  const x: number = depth * sizes.nodeMaxWidth + depth * sizes.nodeGap;
  const y: number = 0; // y will be calculated in `getLayoutedSeaNodes` function with `dagre` library later.

  return { x, y } as XYPosition;
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Callers

None

## Callees

None
