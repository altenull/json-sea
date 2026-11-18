# json-parser.helper.convertArrayToNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-parser.helper.ts` (lines 63-85)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({
  nodeId,
  depth,
  arrayIndex,
  items,
  parentNodePathIds,
  isRootNode,
}: BeforeArraySeaNode): ArraySeaNode => {
  return {
    id: nodeId,
    type: NodeType.Array,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType: JsonDataType.Array,
      stringifiedJson: JSON.stringify(arrayIndex),
      parentNodePathIds,
      arrayIndex,
      items,
      isRootNode,
    },
  };
}
```

## Docstring

_No docstring provided._

## Source

```
const convertArrayToNode = ({
  nodeId,
  depth,
  arrayIndex,
  items,
  parentNodePathIds,
  isRootNode,
}: BeforeArraySeaNode): ArraySeaNode => {
  return {
    id: nodeId,
    type: NodeType.Array,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType: JsonDataType.Array,
      stringifiedJson: JSON.stringify(arrayIndex),
      parentNodePathIds,
      arrayIndex,
      items,
      isRootNode,
    },
  };
};
```

## Git History

- Commits: 13
- Authors: 1
- Bug fixes: 0
- Features: 7

## Callers

None

## Callees

None
