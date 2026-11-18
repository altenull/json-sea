# json-parser.helper.traverse

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-parser.helper.ts` (lines 226-423)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({
    traverseTarget,
    depth,
    arrayIndexForObject,
    sourceSet,
    parentNodePathIds,
  }: TraverseParams): void => {
    const traverseObject = ({ _obj, _nextDepth, _parentNodePathIds, _source, _sourceHandle }: TraverseObjectParams) => {
      nodeSequence++;
      const nextNodeId: string = formatNodeId(nodeSequence);
      const target: string = nextNodeId;

      traverse({
        traverseTarget: _obj,
        depth: _nextDepth,
        arrayIndexForObject: null,
        sourceSet: {
          source: _source,
          sourceHandle: _sourceHandle,
        },
        parentNodePathIds: _parentNodePathIds,
      });

      addDefaultEdge({
        source: _source,
        target,
        sourceHandle: _sourceHandle,
      });
    };

    const traverseArray = ({ _array, _nextDepth, _parentNodePathIds, _source, _sourceHandle }: TraverseArrayParams) => {
      let sourceOfChainEdge: string | undefined;

      _array.forEach((arrayItem: any, arrayIndex: number, selfArray: any[]) => {
        const arrayItemValidator = validateJsonDataType(arrayItem);

        nodeSequence++;
        const nextNodeId = formatNodeId(nodeSequence);
        const target: string = nextNodeId;

        /**
         * If an array has multiple items, a chain edge should be added.
         * The chain edge is a blue-dash line which connects between first and last item of array.
         */
        if (selfArray.length > 1) {
          if (arrayIndex === 0) {
            sourceOfChainEdge = target;
          }

          if (isLastItemOfArray(arrayIndex, selfArray) && isString(sourceOfChainEdge)) {
            edges.push(
              createChainEdge({
                source: sourceOfChainEdge,
                target,
              }),
            );
          }
        }

        if (arrayItemValidator.isObjectData) {
          // Array > Object
          traverse({
            traverseTarget: arrayItem as object,
            depth: _nextDepth,
            arrayIndexForObject: arrayIndex,
            sourceSet: {
              source: _source,
              sourceHandle: _sourceHandle,
            },
            parentNodePathIds: _parentNodePathIds,
          });

          addDefaultEdge({
            source: _source,
            target,
            sourceHandle: _sourceHandle,
          });
        } else if (arrayItemValidator.isArrayData) {
          // Array > Array
          const items: any[] = arrayItem as any[];

          seaNodes.push(
            convertArrayToNode({
              nodeId: nextNodeId,
              depth: _nextDepth,
              arrayIndex,
              items,
              parentNodePathIds: _parentNodePathIds,
              isRootNode: false,
            }),
          );

          addDefaultEdge({
            source: _source,
            target,
            sourceHandle: _sourceHandle,
          });

          const isEmptyArray: boolean = items.length === 0;

          if (!isEmptyArray) {
            traverse({
              traverseTarget: items,
              depth: _nextDepth,
              arrayIndexForObject: null,
              sourceSet: {
                source: _source,
                sourceHandle: _sourceHandle,
              },
              parentNodePathIds: _parentNodePathIds,
            });
          }
        } else if (arrayItemValidator.isPrimitiveData) {
          // Array > Primitive
          seaNodes.push(
            convertPrimitiveToNode({
              nodeId: nextNodeId,
              depth: _nextDepth,
              arrayIndex,
              value: arrayItem as string | number | boolean | null,
              parentNodePathIds: _parentNodePathIds,
            }),
          );

          addDefaultEdge({
            source: _source,
            target,
            sourceHandle: _sourceHandle,
          });
        }
      });
    };

    const currentNodeId: string = formatNodeId(nodeSequence);
    const source: string = currentNodeId;
    const nextDepth: number = depth + 1;
    const nextParentNodePathIds: string[] = parentNodePathIds.concat([currentNodeId]);
    const isRootNode: boolean = sourceSet.source === undefined;

    if (isObject(traverseTarget)) {
      seaNodes.push(
        convertObjectToNode({
          nodeId: currentNodeId,
          depth,
          obj: traverseTarget,
          parentNodePathIds,
          arrayIndexForObject,
          isRootNode,
        }),
      );

      Object.entries(traverseTarget).forEach(([propertyK, propertyV]) => {
        const sourceHandle: string = propertyK;

        if (isObject(propertyV)) {
          traverseObject({
            _obj: propertyV,
            _nextDepth: nextDepth,
            _parentNodePathIds: nextParentNodePathIds,
            _source: source,
            _sourceHandle: sourceHandle,
          });
        } else if (isArray(propertyV)) {
          traverseArray({
            _array: propertyV,
            _nextDepth: nextDepth,
            _parentNodePathIds: nextParentNodePathIds,
            _source: source,
            _sourceHandle: sourceHandle,
          });
        }
      });
    } else if (isArray(traverseTarget)) {
      /**
       * Unlike 'object' JSON code, 'array' JSON code needs to add an extra node if root node.
       */
      if (isRootNode) {
        seaNodes.push(
          convertArrayToNode({
            nodeId: currentNodeId,
            depth,
            arrayIndex: ARRAY_ROOT_NODE_INDEX,
            items: traverseTarget,
            parentNodePathIds: ROOT_PARENT_NODE_PATH_IDS,
            isRootNode,
          }),
        );
      }

      traverseArray({
        _array: traverseTarget,
        _nextDepth: nextDepth,
        _parentNodePathIds: nextParentNodePathIds,
        _source: source,
        _sourceHandle: undefined,
      });
    }
  }
```

## Docstring

_No docstring provided._

## Source

```
  const traverse = ({
    traverseTarget,
    depth,
    arrayIndexForObject,
    sourceSet,
    parentNodePathIds,
  }: TraverseParams): void => {
    const traverseObject = ({ _obj, _nextDepth, _parentNodePathIds, _source, _sourceHandle }: TraverseObjectParams) => {
      nodeSequence++;
      const nextNodeId: string = formatNodeId(nodeSequence);
      const target: string = nextNodeId;

      traverse({
        traverseTarget: _obj,
        depth: _nextDepth,
        arrayIndexForObject: null,
        sourceSet: {
          source: _source,
          sourceHandle: _sourceHandle,
        },
        parentNodePathIds: _parentNodePathIds,
      });

      addDefaultEdge({
        source: _source,
        target,
        sourceHandle: _sourceHandle,
      });
    };

    const traverseArray = ({ _array, _nextDepth, _parentNodePathIds, _source, _sourceHandle }: TraverseArrayParams) => {
      let sourceOfChainEdge: string | undefined;

      _array.forEach((arrayItem: any, arrayIndex: number, selfArray: any[]) => {
        const arrayItemValidator = validateJsonDataType(arrayItem);

        nodeSequence++;
        const nextNodeId = formatNodeId(nodeSequence);
        const target: string = nextNodeId;

        /**
         * If an array has multiple items, a chain edge should be added.
         * The chain edge is a blue-dash line which connects between first and last item of array.
         */
        if (selfArray.length > 1) {
          if (arrayIndex === 0) {
            sourceOfChainEdge = target;
          }

          if (isLastItemOfArray(arrayIndex, selfArray) && isString(sourceOfChainEdge)) {
            edges.push(
              createChainEdge({
                source: sourceOfChainEdge,
                target,
              }),
            );
          }
        }

        if (arrayItemValidator.isObjectData) {
          // Array > Object
          traverse({
            traverseTarget: arrayItem as object,
            depth: _nextDepth,
            arrayIndexForObject: arrayIndex,
            sourceSet: {
              source: _source,
              sourceHandle: _sourceHandle,
            },
            parentNodePathIds: _parentNodePathIds,
          });

          addDefaultEdge({
            source: _source,
            target,
            sourceHandle: _sourceHandle,
          });
        } else if (arrayItemValidator.isArrayData) {
          // Array > Array
          const items: any[] = arrayItem as any[];

          seaNodes.push(
            convertArrayToNode({
              nodeId: nextNodeId,
              depth: _nextDepth,
              arrayIndex,
              items,
              parentNodePathIds: _parentNodePathIds,
              isRootNode: false,
            }),
          );

          addDefaultEdge({
            source: _source,
            target,
            sourceHandle: _sourceHandle,
          });

          const isEmptyArray: boolean = items.length === 0;

... (truncated)
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
