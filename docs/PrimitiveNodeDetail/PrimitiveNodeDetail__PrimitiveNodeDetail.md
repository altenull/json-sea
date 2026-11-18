# PrimitiveNodeDetail._PrimitiveNodeDetail

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\PrimitiveNodeDetail.tsx` (lines 10-14)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ nodeId, nodeData }: Props) => {
  const { arrayIndex, value } = nodeData;

  return <ArrayItemPrimitiveCard nodeId={nodeId} arrayItemIndex={arrayIndex} value={value} />;
}
```

## Docstring

_No docstring provided._

## Source

```
const _PrimitiveNodeDetail = ({ nodeId, nodeData }: Props) => {
  const { arrayIndex, value } = nodeData;

  return <ArrayItemPrimitiveCard nodeId={nodeId} arrayItemIndex={arrayIndex} value={value} />;
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
