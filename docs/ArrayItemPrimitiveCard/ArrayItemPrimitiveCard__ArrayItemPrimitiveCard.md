# ArrayItemPrimitiveCard._ArrayItemPrimitiveCard

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\array\components\ArrayItemPrimitiveCard.tsx` (lines 14-18)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ nodeId, arrayItemIndex, value }: Props) => {
  const { cardRef } = useHoverNodeDetails([{ nodeId }]);

  return <NodeDetailCard ref={cardRef} value={value} childObjectNodeId={null} />;
}
```

## Docstring

_No docstring provided._

## Source

```
const _ArrayItemPrimitiveCard = ({ nodeId, arrayItemIndex, value }: Props) => {
  const { cardRef } = useHoverNodeDetails([{ nodeId }]);

  return <NodeDetailCard ref={cardRef} value={value} childObjectNodeId={null} />;
};
```

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 0
- Features: 4

## Callers

None

## Callees

None
