# useNodePath.getNodePath

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\hooks\useNodePath.ts` (lines 36-131)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(jsonTree: JsonTree, selfNodeId: string | null): NodePath => {
  if (isNull(selfNodeId)) {
    return ROOT_NODE_PATH;
  }

  const { seaNodeEntities, edges } = jsonTree;
  const selfNode = seaNodeEntities[selfNodeId];

  /**
   * [Unknown Issue]
   * If empty [] or {} json code is entered, 'n1' selfNodeId is passed for some reason.
   * (Only root node is rendered)
   */
  if (selfNode === undefined) {
    return ROOT_NODE_PATH;
  }

  const isRootSelfNode = (isObjectSeaNode(selfNode) || isArraySeaNode(selfNode)) && selfNode.data.isRootNode;

  if (isRootSelfNode) {
    return ROOT_NODE_PATH;
  }

  const fullNodePathIds = selfNode.data.parentNodePathIds.concat([selfNodeId]);

  const fullNodeIdNames = fullNodePathIds
    .reverse()
    .reduce((acc: NodeIdName[], nodeId: string, index: number, _fullNodePathIds: string[]) => {
      const node: SeaNode = seaNodeEntities[nodeId];

      const parentNodeId = index + 1 <= _fullNodePathIds.length ? _fullNodePathIds[index + 1] : undefined;
      const parentNode: SeaNode | undefined = parentNodeId !== undefined ? seaNodeEntities[parentNodeId] : undefined;

      const isParentObjectNode = parentNode !== undefined && isObjectSeaNode(parentNode);
      const isParentArrayNode = parentNode !== undefined && isArraySeaNode(parentNode);

      let nodeName = '';

      if (isObjectSeaNode(node)) {
        if (node.data.isRootNode) {
          nodeName = CURLY_ROOT_NODE_NAME;
        } else {
          const objectSegment = isNumber(node.data.arrayIndexForObject)
            ? encloseSquareBrackets(node.data.arrayIndexForObject)
            : '';

          if (isParentObjectNode) {
            const propertyK = getObjectPropertyK({ edges, source: parentNode.id, target: node.id }) as string;
            nodeName = `.${propertyK}${objectSegment}`;
          }

          if (isParentArrayNode) {
            nodeName = objectSegment;
          }
        }
      }

      if (isArraySeaNode(node)) {
        const arraySegment = encloseSquareBrackets(node.data.arrayIndex); // e.g. `[0]`, `[32]`, `[128]`, ....

        if (node.data.isRootNode) {
          nodeName = CURLY_ROOT_NODE_NAME;
        } else {
          if (isParentObjectNode) {
            const propertyK = getObjectPropertyK({ edges, source: parentNode.id, target: node.id }) as string;
            nodeName = `.${propertyK}${arraySegment}`;
          }

          if (isParentArrayNode) {
            nodeName = arraySegment;
          }
        }
      }

      if (isPrimitiveSeaNode(node)) {
        const primitiveSegment = encloseSquareBrackets(node.data.arrayIndex); // e.g. `[0]`, `[32]`, `[128]`, ....

        if (isParentObjectNode) {
          const propertyK = getObjectPropertyK({ edges, source: parentNode.id, target: node.id }) as string;
          nodeName = `.${propertyK}${primitiveSegment}`;
        }

        if (isParentArrayNode) {
          nodeName = primitiveSegment;
        }
      }

      return [{ nodeId, nodeName } satisfies NodeIdName, ...acc];
    }, [] satisfies NodeIdName[]);

  return {
    fullNodeIdNames,
    fullNodePath: fullNodeIdNames.map(({ nodeName }) => nodeName).join(''), // e.g. `{root}.array[3][2].field_3[4]`
    selfNodePath: fullNodeIdNames.at(-1)?.nodeName ?? '', // e.g. 'root', `.field_3[4]`
  };
}
```

## Docstring

_No docstring provided._

## Source

```
const getNodePath = (jsonTree: JsonTree, selfNodeId: string | null): NodePath => {
  if (isNull(selfNodeId)) {
    return ROOT_NODE_PATH;
  }

  const { seaNodeEntities, edges } = jsonTree;
  const selfNode = seaNodeEntities[selfNodeId];

  /**
   * [Unknown Issue]
   * If empty [] or {} json code is entered, 'n1' selfNodeId is passed for some reason.
   * (Only root node is rendered)
   */
  if (selfNode === undefined) {
    return ROOT_NODE_PATH;
  }

  const isRootSelfNode = (isObjectSeaNode(selfNode) || isArraySeaNode(selfNode)) && selfNode.data.isRootNode;

  if (isRootSelfNode) {
    return ROOT_NODE_PATH;
  }

  const fullNodePathIds = selfNode.data.parentNodePathIds.concat([selfNodeId]);

  const fullNodeIdNames = fullNodePathIds
    .reverse()
    .reduce((acc: NodeIdName[], nodeId: string, index: number, _fullNodePathIds: string[]) => {
      const node: SeaNode = seaNodeEntities[nodeId];

      const parentNodeId = index + 1 <= _fullNodePathIds.length ? _fullNodePathIds[index + 1] : undefined;
      const parentNode: SeaNode | undefined = parentNodeId !== undefined ? seaNodeEntities[parentNodeId] : undefined;

      const isParentObjectNode = parentNode !== undefined && isObjectSeaNode(parentNode);
      const isParentArrayNode = parentNode !== undefined && isArraySeaNode(parentNode);

      let nodeName = '';

      if (isObjectSeaNode(node)) {
        if (node.data.isRootNode) {
          nodeName = CURLY_ROOT_NODE_NAME;
        } else {
          const objectSegment = isNumber(node.data.arrayIndexForObject)
            ? encloseSquareBrackets(node.data.arrayIndexForObject)
            : '';

          if (isParentObjectNode) {
            const propertyK = getObjectPropertyK({ edges, source: parentNode.id, target: node.id }) as string;
            nodeName = `.${propertyK}${objectSegment}`;
          }

          if (isParentArrayNode) {
            nodeName = objectSegment;
          }
        }
      }

      if (isArraySeaNode(node)) {
        const arraySegment = encloseSquareBrackets(node.data.arrayIndex); // e.g. `[0]`, `[32]`, `[128]`, ....

        if (node.data.isRootNode) {
          nodeName = CURLY_ROOT_NODE_NAME;
        } else {
          if (isParentObjectNode) {
            const propertyK = getObjectPropertyK({ edges, source: parentNode.id, target: node.id }) as string;
            nodeName = `.${propertyK}${arraySegment}`;
          }

          if (isParentArrayNode) {
            nodeName = arraySegment;
          }
        }
      }

      if (isPrimitiveSeaNode(node)) {
        const primitiveSegment = encloseSquareBrackets(node.data.arrayIndex); // e.g. `[0]`, `[32]`, `[128]`, ....

        if (isParentObjectNode) {
          const propertyK = getObjectPropertyK({ edges, source: parentNode.id, target: node.id }) as string;
          nodeName = `.${propertyK}${primitiveSegment}`;
        }

        if (isParentArrayNode) {
          nodeName = primitiveSegment;
        }
      }

      return [{ nodeId, nodeName } satisfies NodeIdName, ...acc];
    }, [] satisfies NodeIdName[]);

  return {
    fullNodeIdNames,
    fullNodePath: fullNodeIdNames.map(({ nodeName }) => nodeName).join(''), // e.g. `{root}.array[3][2].field_3[4]`
    selfNodePath: fullNodeIdNames.at(-1)?.nodeName ?? '', // e.g. 'root', `.field_3[4]`
  };
};
```

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 1
- Features: 2

## Callers

None

## Callees

None
