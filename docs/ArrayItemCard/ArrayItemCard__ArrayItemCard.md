# ArrayItemCard._ArrayItemCard

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\array\components\ArrayItemCard.tsx` (lines 13-27)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ selfNodeId, value }: Props) => {
  const { cardRef } = useHoverNodeDetails([{ nodeId: selfNodeId }]);
  const { selfNodePath } = useNodePath(selfNodeId);

  const objectNodeId: string | null = useMemo(() => (isObject(value) ? selfNodeId : null), [value, selfNodeId]);

  return (
    <NodeDetailCard
      ref={cardRef}
      chip={<ArrayItemNameChip arrayItemName={selfNodePath} />}
      value={value}
      childObjectNodeId={objectNodeId}
    />
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _ArrayItemCard = ({ selfNodeId, value }: Props) => {
  const { cardRef } = useHoverNodeDetails([{ nodeId: selfNodeId }]);
  const { selfNodePath } = useNodePath(selfNodeId);

  const objectNodeId: string | null = useMemo(() => (isObject(value) ? selfNodeId : null), [value, selfNodeId]);

  return (
    <NodeDetailCard
      ref={cardRef}
      chip={<ArrayItemNameChip arrayItemName={selfNodePath} />}
      value={value}
      childObjectNodeId={objectNodeId}
    />
  );
};
```

## Git History

- Commits: 8
- Authors: 1
- Bug fixes: 0
- Features: 5

## Callers

None

## Callees

None
