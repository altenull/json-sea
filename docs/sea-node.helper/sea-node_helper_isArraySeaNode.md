# sea-node.helper.isArraySeaNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\sea-node.helper.ts` (lines 8-10)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(node: SeaNode): node is ArraySeaNode => {
  return node.type === NodeType.Array;
}
```

## Docstring

_No docstring provided._

## Source

```
export const isArraySeaNode = (node: SeaNode): node is ArraySeaNode => {
  return node.type === NodeType.Array;
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
