import { Edge, MarkerType } from 'reactflow';
import { isString } from '../../../utils/json.util';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';
import {
  ArrayJsonNode,
  JsonNode,
  ObjectJsonNode,
  PrimitiveJsonDataType,
  PrimitiveJsonNode,
} from '../types/json-node.type';
import { ArrayIndex, Primitive } from '../types/node-data.type';
import { getJsonDataType, validateJsonDataType } from './json-data-type.helper';

// from 'reactflow'
// type XYPosition = {
//   x: number;
//   y: number;
// };

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

const convertObjectToJsonNode = ({
  obj,
  nodeId,
  depth,
}: {
  obj: object;
  nodeId: string;
  depth: number;
}): ObjectJsonNode => {
  return {
    id: nodeId,
    depth,
    nodeType: NodeType.Object,
    dataType: JsonDataType.Object,
    data: {
      stringifiedJson: JSON.stringify(obj),
      value: obj,
    },
  };
};

const convertArrayToJsonNode = ({
  arrayIndex,
  nodeId,
  depth,
}: {
  arrayIndex: ArrayIndex;
  nodeId: string;
  depth: number;
}): ArrayJsonNode => {
  return {
    id: nodeId,
    depth,
    nodeType: NodeType.Array,
    dataType: JsonDataType.Array,
    data: {
      stringifiedJson: JSON.stringify(arrayIndex),
      value: arrayIndex,
    },
  };
};

const convertPrimitiveToJsonNode = ({
  value,
  nodeId,
  depth,
}: {
  value: Primitive;
  nodeId: string;
  depth: number;
}): PrimitiveJsonNode => {
  return {
    id: nodeId,
    depth,
    nodeType: NodeType.Primitive,
    dataType: getJsonDataType(value) as PrimitiveJsonDataType,
    data: {
      stringifiedJson: JSON.stringify(value),
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
  nodes: JsonNode[];
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
  ): JsonNode[] => {
    let jsonNodes: JsonNode[] = [];

    const currentNodeId: string = formatNodeId(nodeSequence);
    const source: string = currentNodeId;
    const nextDepth: number = depth + 1;

    const traverseTargetValidator = validateJsonDataType(traverseTarget);

    if (traverseTargetValidator.isObjectData) {
      jsonNodes = jsonNodes.concat(convertObjectToJsonNode({ obj: traverseTarget, nodeId: currentNodeId, depth }));

      /**
       * Root node doesn't have `sourceSet.source` value as string.
       * If `sourceSet.source` is string, it means that it is not Root node.
       */
      if (isString(sourceSet.source)) {
        edges = edges.concat(
          getEdge({
            source: sourceSet.source,
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

          jsonNodes = jsonNodes.concat(
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
              jsonNodes = jsonNodes.concat(
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
              jsonNodes = jsonNodes.concat(
                convertArrayToJsonNode({
                  arrayIndex,
                  nodeId: nextNodeId,
                  depth: nextDepth,
                })
              );
              edges = edges.concat(
                getEdge({
                  source,
                  target,
                  sourceHandle,
                })
              );

              const isEmptyArray: boolean = (arrayItem as any[]).length === 0;

              if (!isEmptyArray) {
                jsonNodes = jsonNodes.concat(
                  traverse(arrayItem as any[], nextDepth, {
                    source,
                    sourceHandle,
                  })
                );
              }
            } else if (arrayItemValidator.isPrimitiveData) {
              // Object > Array > Primitive
              jsonNodes = jsonNodes.concat(
                convertPrimitiveToJsonNode({
                  value: arrayItem as Primitive,
                  nodeId: nextNodeId,
                  depth: nextDepth,
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
          jsonNodes = jsonNodes.concat(traverse(arrayItem as object, nextDepth, { source: currentNodeId }));
          edges = edges.concat(
            getEdge({
              source,
              target,
            })
          );
        } else if (arrayItemValidator.isArrayData) {
          // Array > Array
          jsonNodes = jsonNodes.concat(
            convertArrayToJsonNode({
              arrayIndex,
              nodeId: nextNodeId,
              depth: nextDepth,
            })
          );
          edges = edges.concat(
            getEdge({
              source,
              target,
            })
          );

          const isEmptyArray: boolean = (arrayItem as any[]).length === 0;

          if (!isEmptyArray) {
            jsonNodes = jsonNodes.concat(
              traverse(arrayItem as any[], nextDepth, {
                source,
              })
            );
          }
        } else if (arrayItemValidator.isPrimitiveData) {
          // Array > Primitive
          jsonNodes = jsonNodes.concat(
            convertPrimitiveToJsonNode({
              value: arrayItem as Primitive,
              nodeId: nextNodeId,
              depth: nextDepth,
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

    return jsonNodes;
  };

  return {
    /**
     * In JSON, root node is always object.
     * So starts with `traverse` function with depth 0.
     */
    nodes: traverse(jsonObj, 0, {}),
    edges,
  };
};
