# sea-node.helper.isPrimitiveSeaNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\sea-node.helper.ts` (lines 12-14)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(node: SeaNode): node is PrimitiveSeaNode => {
  return node.type === NodeType.Primitive;
}
```

## Docstring

_No docstring provided._

## Source

```
export const isPrimitiveSeaNode = (node: SeaNode): node is PrimitiveSeaNode => {
  return node.type === NodeType.Primitive;
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
