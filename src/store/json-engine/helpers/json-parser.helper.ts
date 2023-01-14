import { nanoid } from 'nanoid';
import { Edge, MarkerType } from 'reactflow';
import { ARRAY_ROOT_NODE_INDEX } from '../../../json-diagram/constants/root-node.constant';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';
import { SeaNode } from '../types/sea-node.type';
import { getJsonDataType, validateJsonDataType } from './json-data-type.helper';
import { getXYPosition } from './sea-node-position.helper';

const formatNodeId = (nodeSequence: number): string => `n${nodeSequence}`;

// const formatEdgeId = ({
//   source,
//   target,
//   sourceHandle,
// }: {
//   source: string;
//   target: string;
//   sourceHandle?: string;
// }): string => {
//   const concatenatedSource: string = `${source}${isString(sourceHandle) ? `_${sourceHandle}` : ''}`;

//   return `e--${concatenatedSource}--${target}`;
// };

const convertObjectToNode = ({
  nodeId,
  depth,
  obj,
  arrayIndexForObject,
  isRootNode,
}: {
  nodeId: string;
  depth: number;
  obj: object;
  arrayIndexForObject: number | null;
  isRootNode: boolean;
}): SeaNode => {
  return {
    id: nodeId,
    type: NodeType.Object,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType: JsonDataType.Object,
      stringifiedJson: JSON.stringify(obj),
      obj,
      arrayIndexForObject,
      isRootNode,
    },
  };
};

const convertArrayToNode = ({
  nodeId,
  depth,
  arrayIndex,
  items,
  isRootNode,
}: {
  nodeId: string;
  depth: number;
  arrayIndex: number;
  items: any[];
  isRootNode: boolean;
}): SeaNode => {
  return {
    id: nodeId,
    type: NodeType.Array,
    position: getXYPosition(depth),
    data: {
      depth,
      dataType: JsonDataType.Array,
      stringifiedJson: JSON.stringify(arrayIndex),
      arrayIndex,
      items,
      isRootNode,
    },
  };
};

const convertPrimitiveToNode = ({
  nodeId,
  depth,
  arrayIndex,
  value,
}: {
  nodeId: string;
  depth: number;
  arrayIndex: number;
  value: string | number | boolean | null;
}): SeaNode => {
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
      arrayIndex,
      value,
    },
  };
};

const getEdge = ({ source, target, sourceHandle }: { source: string; target: string; sourceHandle?: string }): Edge => {
  return {
    /**
     * @bugfix
     * If the same edge id remains in `JsonDiagram` after update, the following bug occurs.
     * Use `nanoid()` to resolve it.
     * https://stackoverflow.com/questions/70114700/react-flow-renderer-edges-remain-in-ui-without-any-parents
     */
    id: nanoid(),
    // id: formatEdgeId({
    //   source,
    //   target,
    //   sourceHandle,
    // }),
    type: 'default',
    source,
    target,
    sourceHandle,
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
    },
  };
};

type TraverseParams = {
  traverseTarget: object | any[];
  depth: number;
  arrayIndexForObject: number | null;
  sourceSet: { source?: string; sourceHandle?: string };
};

export const jsonParser = (
  json: object | any[]
): {
  seaNodes: SeaNode[];
  edges: Edge[];
} => {
  let nodeSequence = 0;
  let edges: Edge[] = [];

  /**
   * `traverse` function flow
   * - if object
   *   - add node(object)
   *   - loop object
   *     - if object field -> traverse
   *     - if array field
   *       - loop array field
   *         - if object item -> traverse
   *         - if array item -> add node(array) & traverse(if not empty)
   *         - if primitive item -> add node(primitive)
   * - if array
   *   - loop array
   *     - if object item -> traverse
   *     - if array item -> add node(array) & traverse(if not empty)
   *     - if primitive item -> add node(primitive)
   *
   * @param sourceSet
   * - [source, sourceHandle]
   * - [undefined, undefined] -> No parent, {traverseTarget} is root node.
   * - [string, undefined] -> Parent is array node
   * - [string, string] -> Parent is object node (arrow is from object field)
   */
  const traverse = ({ traverseTarget, depth, arrayIndexForObject, sourceSet }: TraverseParams): SeaNode[] => {
    let seaNodes: SeaNode[] = [];

    const currentNodeId: string = formatNodeId(nodeSequence);
    const source: string = currentNodeId;
    const nextDepth: number = depth + 1;

    const traverseTargetValidator = validateJsonDataType(traverseTarget);

    if (traverseTargetValidator.isObjectData) {
      const isObjectRootNode: boolean = sourceSet.source === undefined;

      seaNodes = seaNodes.concat(
        convertObjectToNode({
          nodeId: currentNodeId,
          depth,
          obj: traverseTarget,
          arrayIndexForObject,
          isRootNode: isObjectRootNode,
        })
      );

      // if (!isRootNode) {
      //   edges = edges.concat(
      //     getEdge({
      //       source: sourceSet.source as string,
      //       target: currentNodeId,
      //       sourceHandle: sourceSet.sourceHandle,
      //     })
      //   );
      // }

      Object.entries(traverseTarget as object).forEach(([propertyK, propertyV]) => {
        const propertyVValidator = validateJsonDataType(propertyV);

        const sourceHandle: string = propertyK;

        if (propertyVValidator.isObjectData) {
          // Object > Object
          nodeSequence++;
          const nextNodeId = formatNodeId(nodeSequence);
          const target: string = nextNodeId;

          seaNodes = seaNodes.concat(
            traverse({
              traverseTarget: propertyV as object,
              depth: nextDepth,
              arrayIndexForObject,
              sourceSet: {
                source,
                sourceHandle,
              },
            })
          );
          edges = edges.concat(
            getEdge({
              source,
              target,
              sourceHandle,
            })
          );
        } else if (propertyVValidator.isArrayData) {
          // Object > Array
          (propertyV as any[]).forEach((arrayItem: any, arrayIndex: number) => {
            const arrayItemValidator = validateJsonDataType(arrayItem);

            nodeSequence++;
            const nextNodeId = formatNodeId(nodeSequence);
            const target: string = nextNodeId;

            if (arrayItemValidator.isObjectData) {
              // Object > Array > Object
              seaNodes = seaNodes.concat(
                traverse({
                  traverseTarget: arrayItem as object,
                  depth: nextDepth,
                  arrayIndexForObject: arrayIndex,
                  sourceSet: {
                    source,
                    sourceHandle,
                  },
                })
              );
              edges = edges.concat(
                getEdge({
                  source,
                  target,
                  sourceHandle,
                })
              );
            } else if (arrayItemValidator.isArrayData) {
              // Object > Array > Array
              const items: any[] = arrayItem as any[];

              seaNodes = seaNodes.concat(
                convertArrayToNode({
                  nodeId: nextNodeId,
                  depth: nextDepth,
                  arrayIndex,
                  items,
                  isRootNode: false,
                })
              );
              edges = edges.concat(
                getEdge({
                  source,
                  target,
                  sourceHandle,
                })
              );

              const isEmptyArray: boolean = items.length === 0;

              if (!isEmptyArray) {
                seaNodes = seaNodes.concat(
                  traverse({
                    traverseTarget: items,
                    depth: nextDepth,
                    arrayIndexForObject: arrayIndex,
                    sourceSet: {
                      source,
                      sourceHandle,
                    },
                  })
                );
              }
            } else if (arrayItemValidator.isPrimitiveData) {
              // Object > Array > Primitive
              seaNodes = seaNodes.concat(
                convertPrimitiveToNode({
                  nodeId: nextNodeId,
                  depth: nextDepth,
                  arrayIndex,
                  value: arrayItem as string | number | boolean | null,
                })
              );
              edges = edges.concat(
                getEdge({
                  source,
                  target,
                  sourceHandle,
                })
              );
            }
          });
        }
      });
    } else if (traverseTargetValidator.isArrayData) {
      const isArrayRootNode: boolean = sourceSet.source === undefined;

      if (isArrayRootNode) {
        seaNodes = seaNodes.concat(
          convertArrayToNode({
            nodeId: currentNodeId,
            depth,
            arrayIndex: ARRAY_ROOT_NODE_INDEX,
            items: traverseTarget as any[],
            isRootNode: true,
          })
        );
      }

      (traverseTarget as any[]).forEach((arrayItem: any, arrayIndex: number) => {
        const arrayItemValidator = validateJsonDataType(arrayItem);

        nodeSequence++;
        const nextNodeId = formatNodeId(nodeSequence);
        const target: string = nextNodeId;

        if (arrayItemValidator.isObjectData) {
          // Array > Object
          seaNodes = seaNodes.concat(
            traverse({
              traverseTarget: arrayItem as object,
              depth: nextDepth,
              arrayIndexForObject: arrayIndex,
              sourceSet: { source: currentNodeId },
            })
          );
          edges = edges.concat(
            getEdge({
              source,
              target,
            })
          );
        } else if (arrayItemValidator.isArrayData) {
          // Array > Array
          const items: any[] = arrayItem as any[];

          seaNodes = seaNodes.concat(
            convertArrayToNode({
              nodeId: nextNodeId,
              depth: nextDepth,
              arrayIndex,
              items,
              isRootNode: false,
            })
          );
          edges = edges.concat(
            getEdge({
              source,
              target,
            })
          );

          const isEmptyArray: boolean = items.length === 0;

          if (!isEmptyArray) {
            seaNodes = seaNodes.concat(
              traverse({
                traverseTarget: items,
                depth: nextDepth,
                arrayIndexForObject: arrayIndex,
                sourceSet: {
                  source,
                },
              })
            );
          }
        } else if (arrayItemValidator.isPrimitiveData) {
          // Array > Primitive
          seaNodes = seaNodes.concat(
            convertPrimitiveToNode({
              nodeId: nextNodeId,
              depth: nextDepth,
              arrayIndex,
              value: arrayItem as string | number | boolean | null,
            })
          );
          edges = edges.concat(
            getEdge({
              source,
              target,
            })
          );
        }
      });
    }

    return seaNodes;
  };

  return {
    /**
     * In JSON, root node can be object or array.
     * So starts with `traverse` function with depth 0.
     */
    seaNodes: traverse({
      traverseTarget: json,
      depth: 0,
      arrayIndexForObject: null,
      sourceSet: {},
    }),
    edges,
  };
};
