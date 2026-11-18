# json-parser.helper.convertObjectToNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-parser.helper.ts` (lines 30-52)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({
  nodeId,
  depth,
  obj,
  parentNodePathIds,
  arrayIndexForObject,
  isRootNode,
}: BeforeObjectSeaNode): ObjectSeaNode => {
  return {
    id: nodeId,
    type: NodeType.Object,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType: JsonDataType.Object,
      stringifiedJson: '', // Optimized: No longer stringifying object to avoid O(N^2)
      parentNodePathIds,
      obj,
      arrayIndexForObject,
      isRootNode,
    },
  };
}
```

## Docstring

_No docstring provided._

## Source

```
const convertObjectToNode = ({
  nodeId,
  depth,
  obj,
  parentNodePathIds,
  arrayIndexForObject,
  isRootNode,
}: BeforeObjectSeaNode): ObjectSeaNode => {
  return {
    id: nodeId,
    type: NodeType.Object,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType: JsonDataType.Object,
      stringifiedJson: '', // Optimized: No longer stringifying object to avoid O(N^2)
      parentNodePathIds,
      obj,
      arrayIndexForObject,
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
