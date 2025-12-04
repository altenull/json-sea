import { nanoid } from 'nanoid';
import { Edge } from 'reactflow';
import {
  ARRAY_ROOT_NODE_INDEX,
  ROOT_NODE_DEPTH,
  ROOT_PARENT_NODE_PATH_IDS,
} from '../../../json-diagram/constants/root-node.constant';
import { isLastItemOfArray } from '../../../utils/array.util';
import { isArray, isObject, isString } from '../../../utils/json.util';
import { EdgeType } from '../enums/edge-type.enum';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';
import { ArraySeaNode, ObjectSeaNode, PrimitiveSeaNode, SeaNode } from '../types/sea-node.type';
import { getJsonDataType, validateJsonDataType } from './json-data-type.helper';
import { getXYPosition } from './sea-node-position.helper';

const formatNodeId = (nodeSequence: number): string => `n${nodeSequence}`;

export const addPrefixChain = (v: string): string => `chain-${v}`;

type BeforeObjectSeaNode = {
  nodeId: string;
  depth: number;
  obj: object;
  parentNodePathIds: string[];
  arrayIndexForObject: number | null;
  isRootNode: boolean;
};

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

type BeforeArraySeaNode = {
  nodeId: string;
  depth: number;
  arrayIndex: number;
  items: any[];
  parentNodePathIds: string[];
  isRootNode: boolean;
};

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

type BeforePrimitiveSeaNode = {
  nodeId: string;
  depth: number;
  arrayIndex: number;
  value: string | number | boolean | null;
  parentNodePathIds: string[];
};

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

type SourceTarget = Pick<Edge, 'source' | 'target'>;
type DefaultEdgeParams = SourceTarget & Pick<Edge, 'sourceHandle'>;

const createDefaultEdge = ({ source, target, sourceHandle }: DefaultEdgeParams): Edge => {
  return {
    /**
     * @bugfix If the same edge id remains in `JsonDiagram` after update, the following bug occurs.
     *         https://stackoverflow.com/questions/70114700/react-flow-renderer-edges-remain-in-ui-without-any-parents
     * @solution Use `nanoid()` for id.
     */
    id: nanoid(),
    type: 'default',
    source,
    target,
    sourceHandle,
    animated: true,
    style: {
      strokeWidth: 2,
    },
  };
};

const createChainEdge = ({ source, target }: SourceTarget): Edge => {
  return {
    id: nanoid(),
    type: EdgeType.Chain,
    source,
    target,
    sourceHandle: addPrefixChain(source),
    targetHandle: addPrefixChain(target),
  };
};

type TraverseParams = {
  traverseTarget: object | any[];
  depth: number;
  arrayIndexForObject: number | null;
  sourceSet: { source?: string; sourceHandle?: string };
  parentNodePathIds: string[];
};
type TraverseObjectParams = {
  _obj: object;
  _nextDepth: number;
  _parentNodePathIds: string[];
  _source: string;
  _sourceHandle: string;
};
type TraverseArrayParams = {
  _array: any[];
  _nextDepth: number;
  _parentNodePathIds: string[];
  _source: string;
  _sourceHandle?: string;
};

export const jsonParser = (
  json: object | any[],
): {
  seaNodes: SeaNode[];
  edges: Edge[];
} => {
  /**
   * `nodeSequence` will be transformed to `nodeId`.
   */
  let nodeSequence: number = 0;
  const seaNodes: SeaNode[] = [];
  const edges: Edge[] = [];

  const addDefaultEdge = ({ source, target, sourceHandle }: DefaultEdgeParams): void => {
    edges.push(
      createDefaultEdge({
        source,
        target,
        sourceHandle,
      }),
    );
  };

  /**
   *  2023-01-30 Suprisingly, ChatGPT helps to refactor complex `traverse` code into smaller.
   *
   * `traverse` function follows `preorder traversal`
   
   *  @implements
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
  };

  traverse({
    traverseTarget: json,
    depth: ROOT_NODE_DEPTH,
    parentNodePathIds: ROOT_PARENT_NODE_PATH_IDS,
    arrayIndexForObject: null,
    sourceSet: {},
  });

  return {
    seaNodes,
    edges,
  };
};
