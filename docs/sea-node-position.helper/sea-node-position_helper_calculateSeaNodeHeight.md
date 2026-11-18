# sea-node-position.helper.calculateSeaNodeHeight

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\sea-node-position.helper.ts` (lines 14-30)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(seaNode: SeaNode): number => {
  if (isArraySeaNode(seaNode)) {
    return sizes.arrayNodeSize;
  }

  const NODE_TOP_BOTTOM_PADDING: number = sizes.nodePadding * 2;

  if (isObjectSeaNode(seaNode)) {
    return NODE_TOP_BOTTOM_PADDING + sizes.nodeContentHeight * Object.keys(seaNode.data.obj).length;
  }

  if (isPrimitiveSeaNode(seaNode)) {
    return NODE_TOP_BOTTOM_PADDING + sizes.nodeContentHeight * 1;
  }

  return 0;
}
```

## Docstring

_No docstring provided._

## Source

```
const calculateSeaNodeHeight = (seaNode: SeaNode): number => {
  if (isArraySeaNode(seaNode)) {
    return sizes.arrayNodeSize;
  }

  const NODE_TOP_BOTTOM_PADDING: number = sizes.nodePadding * 2;

  if (isObjectSeaNode(seaNode)) {
    return NODE_TOP_BOTTOM_PADDING + sizes.nodeContentHeight * Object.keys(seaNode.data.obj).length;
  }

  if (isPrimitiveSeaNode(seaNode)) {
    return NODE_TOP_BOTTOM_PADDING + sizes.nodeContentHeight * 1;
  }

  return 0;
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
