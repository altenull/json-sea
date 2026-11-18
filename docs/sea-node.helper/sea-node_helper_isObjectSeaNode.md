# sea-node.helper.isObjectSeaNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\sea-node.helper.ts` (lines 4-6)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(node: SeaNode): node is ObjectSeaNode => {
  return node.type === NodeType.Object;
}
```

## Docstring

_No docstring provided._

## Source

```
export const isObjectSeaNode = (node: SeaNode): node is ObjectSeaNode => {
  return node.type === NodeType.Object;
};
```

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
