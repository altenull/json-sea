# json-parser.helper.convertPrimitiveToNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-parser.helper.ts` (lines 95-119)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({
  nodeId,
  depth,
  arrayIndex,
  value,
  parentNodePathIds,
}: BeforePrimitiveSeaNode): PrimitiveSeaNode => {
  return {
    id: nodeId,
    type: NodeType.Primitive,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType: getJsonDataType(value) as
        | JsonDataType.String
        | JsonDataType.Number
        | JsonDataType.Boolean
        | JsonDataType.Null,
      stringifiedJson: JSON.stringify(value),
      parentNodePathIds,
      arrayIndex,
      value,
    },
  };
}
```

## Docstring

_No docstring provided._

## Source

```
const convertPrimitiveToNode = ({
  nodeId,
  depth,
  arrayIndex,
  value,
  parentNodePathIds,
}: BeforePrimitiveSeaNode): PrimitiveSeaNode => {
  return {
    id: nodeId,
    type: NodeType.Primitive,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType: getJsonDataType(value) as
        | JsonDataType.String
        | JsonDataType.Number
        | JsonDataType.Boolean
        | JsonDataType.Null,
      stringifiedJson: JSON.stringify(value),
      parentNodePathIds,
      arrayIndex,
      value,
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
