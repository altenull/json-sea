import { Edge, MarkerType, XYPosition } from 'reactflow';
import { sizes } from '../../../ui/constants/sizes.constant';
import { isString } from '../../../utils/json.util';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';
import { SeaNode } from '../types/sea-node.type';
import { getJsonDataType, validateJsonDataType } from './json-data-type.helper';

const formatNodeId = (nodeSequence: number): string => `n${nodeSequence}`;
const formatEdgeId = ({
  source,
  target,
  sourceHandle,
}: {
  source: string;
  target: string;
  sourceHandle?: string;
}): string => {
  const concatenatedSource: string = `${source}${isString(sourceHandle) ? `_${sourceHandle}` : ''}`;

  return `e--${concatenatedSource}--${target}`;
};

const getXYPosition = (depth: number): XYPosition => {
  return { x: depth * sizes.nodeMaxWidth + depth * sizes.nodeGap, y: 50 } as XYPosition;
};

const convertObjectToNode = ({
  nodeId,
  depth,
  obj,
  isRootNode,
}: {
  nodeId: string;
  depth: number;
  obj: object;
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
      isRootNode,
    },
  };
};

const convertArrayToNode = ({
  nodeId,
  depth,
  arrayIndex,
  items,
}: {
  nodeId: string;
  depth: number;
  arrayIndex: number;
  items: any[];
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
    id: formatEdgeId({
      source,
      target,
      sourceHandle,
    }),
    source,
    target,
    sourceHandle,
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
    },
  };
};

export const jsonParser = (
  jsonObj: object
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
  const traverse = (
    traverseTarget: object | any[],
    depth: number,
    sourceSet: { source?: string; sourceHandle?: string }
  ): SeaNode[] => {
    let seaNodes: SeaNode[] = [];

    const currentNodeId: string = formatNodeId(nodeSequence);
    const source: string = currentNodeId;
    const nextDepth: number = depth + 1;

    const traverseTargetValidator = validateJsonDataType(traverseTarget);

    if (traverseTargetValidator.isObjectData) {
      const isRootNode: boolean = sourceSet.source === undefined;

      seaNodes = seaNodes.concat(
        convertObjectToNode({ nodeId: currentNodeId, depth, obj: traverseTarget, isRootNode })
      );

      if (!isRootNode) {
        edges = edges.concat(
          getEdge({
            source: sourceSet.source as string,
            target: currentNodeId,
            sourceHandle: sourceSet.sourceHandle,
          })
        );
      }

      Object.entries(traverseTarget as object).forEach(([propertyK, propertyV]) => {
        const propertyVValidator = validateJsonDataType(propertyV);

        const sourceHandle: string = propertyK;

        if (propertyVValidator.isObjectData) {
          // Object > Object
          nodeSequence++;
          const nextNodeId = formatNodeId(nodeSequence);
          const target: string = nextNodeId;

          seaNodes = seaNodes.concat(
            traverse(propertyV as object, nextDepth, {
              source,
              sourceHandle,
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
                traverse(arrayItem as object, nextDepth, {
                  source,
                  sourceHandle,
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
                  traverse(items, nextDepth, {
                    source,
                    sourceHandle,
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
      (traverseTarget as any[]).forEach((arrayItem: any, arrayIndex: number) => {
        const arrayItemValidator = validateJsonDataType(arrayItem);

        nodeSequence++;
        const nextNodeId = formatNodeId(nodeSequence);
        const target: string = nextNodeId;

        if (arrayItemValidator.isObjectData) {
          // Array > Object
          seaNodes = seaNodes.concat(traverse(arrayItem as object, nextDepth, { source: currentNodeId }));
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
              traverse(items, nextDepth, {
                source,
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
     * In JSON, root node is always object.
     * So starts with `traverse` function with depth 0.
     */
    seaNodes: traverse(jsonObj, 0, {}),
    edges,
  };
};
