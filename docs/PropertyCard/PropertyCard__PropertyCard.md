# PropertyCard._PropertyCard

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\object\components\PropertyCard.tsx` (lines 14-35)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ nodeId, propertyK, propertyV }: Props) => {
  const { edges } = useJsonEngineStore((state) => state.jsonTree);

  const { cardRef } = useHoverNodeDetails([{ nodeId, propertyK }]);

  const childObjectNodeId: string | null = useMemo(() => {
    if (!isObject(propertyV)) {
      return null;
    }

    return edges.find(({ source, sourceHandle }) => source === nodeId && sourceHandle === propertyK)?.target ?? null;
  }, [edges, nodeId, propertyK, propertyV]);

  return (
    <NodeDetailCard
      ref={cardRef}
      chip={<PropertyKeyChip value={propertyK} />}
      value={propertyV}
      childObjectNodeId={childObjectNodeId}
    />
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _PropertyCard = ({ nodeId, propertyK, propertyV }: Props) => {
  const { edges } = useJsonEngineStore((state) => state.jsonTree);

  const { cardRef } = useHoverNodeDetails([{ nodeId, propertyK }]);

  const childObjectNodeId: string | null = useMemo(() => {
    if (!isObject(propertyV)) {
      return null;
    }

    return edges.find(({ source, sourceHandle }) => source === nodeId && sourceHandle === propertyK)?.target ?? null;
  }, [edges, nodeId, propertyK, propertyV]);

  return (
    <NodeDetailCard
      ref={cardRef}
      chip={<PropertyKeyChip value={propertyK} />}
      value={propertyV}
      childObjectNodeId={childObjectNodeId}
    />
  );
};
```

## Git History

- Commits: 7
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
