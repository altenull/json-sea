# json-engine.helper.convertJsonTree

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-engine.helper.ts` (lines 7-13)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(json: object | unknown[]): JsonTree => {
  const { seaNodes, edges } = jsonParser(json);
  const layoutedSeaNodes: SeaNode[] = getLayoutedSeaNodes(seaNodes, edges);
  const seaNodeEntities: Entities<SeaNode> = arrayToEntities<SeaNode>(layoutedSeaNodes, 'id');

  return { seaNodes: layoutedSeaNodes, seaNodeEntities, edges };
}
```

## Docstring

_No docstring provided._

## Source

```
export const convertJsonTree = (json: object | unknown[]): JsonTree => {
  const { seaNodes, edges } = jsonParser(json);
  const layoutedSeaNodes: SeaNode[] = getLayoutedSeaNodes(seaNodes, edges);
  const seaNodeEntities: Entities<SeaNode> = arrayToEntities<SeaNode>(layoutedSeaNodes, 'id');

  return { seaNodes: layoutedSeaNodes, seaNodeEntities, edges };
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
