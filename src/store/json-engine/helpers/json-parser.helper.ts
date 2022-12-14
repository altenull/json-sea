import { Edge } from 'reactflow';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';
import { JsonNode, PrimitiveJsonDataType } from '../types/json-node.type';
import { ArrayIndex, Primitive } from '../types/node-data.type';
import { getJsonDataType, validateJsonDataType } from './json-data-type.helper';

// from 'reactflow'
// type XYPosition = {
//   x: number;
//   y: number;
// };

// object 내의 필드는 node가 아니라 handle만 있어도 됨 -> handle만 있어도 edge를 그릴 수 있기 때문에

const formatNodeId = (nodeSequence: number): string => `n${nodeSequence}`;
const formatEdgeId = (from: string, to: string): string => `e${from}-${to}`;

const convertObjectToJsonNode = ({
  obj,
  nodeSequence,
  depth,
}: {
  obj: object;
  nodeSequence: number;
  depth: number;
}): JsonNode => {
  return {
    id: formatNodeId(nodeSequence),
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
  nodeSequence,
  depth,
}: {
  arrayIndex: ArrayIndex;
  nodeSequence: number;
  depth: number;
}): JsonNode => {
  return {
    id: formatNodeId(nodeSequence),
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
  nodeSequence,
  depth,
}: {
  value: Primitive;
  nodeSequence: number;
  depth: number;
}): JsonNode => {
  return {
    id: formatNodeId(nodeSequence),
    depth,
    nodeType: NodeType.Primitive,
    dataType: getJsonDataType(value) as PrimitiveJsonDataType,
    data: {
      stringifiedJson: JSON.stringify(value),
      value,
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

  // TODO: Handling array..
  const traverse = ({ obj, depth }: { obj: object; depth: number }): JsonNode[] => {
    let jsonNodes: JsonNode[] = [convertObjectToJsonNode({ obj, nodeSequence, depth })];
    const nextDepth: number = depth + 1;

    Object.values(obj).forEach((objValue) => {
      const objValueValidator = validateJsonDataType(objValue);

      /**
       * Case 1: `object` field of object.
       * Case 2: `array` field of object.
       * Exception 1: `primitive` field of object should be skipped.
       *              (These are treated as just fields, not a Node)
       */
      if (objValueValidator.isObjectData) {
        // Case 1
        nodeSequence++;

        jsonNodes = jsonNodes.concat(
          traverse({
            obj: objValue as object,
            depth: nextDepth,
          })
        );
      } else if (objValueValidator.isArrayData) {
        // Case 2
        (objValue as any[]).forEach((arrayItem: any, arrayIndex: number) => {
          const arrayItemValidator = validateJsonDataType(arrayItem);

          nodeSequence++;

          if (arrayItemValidator.isObjectData) {
            jsonNodes = jsonNodes.concat(
              traverse({
                obj: arrayItem as object,
                depth: nextDepth,
              })
            );
          } else if (arrayItemValidator.isArrayData) {
            jsonNodes = jsonNodes.concat(
              convertArrayToJsonNode({
                arrayIndex,
                nodeSequence,
                depth: nextDepth,
              })
            );
            // TODO: array node 1개 추가한 후에 내부 array를 또 loop 해야함. -> 재귀호출 필요.
          } else if (arrayItemValidator.isPrimitiveData) {
            jsonNodes = jsonNodes.concat(
              convertPrimitiveToJsonNode({
                value: arrayItem as Primitive,
                nodeSequence,
                depth: nextDepth,
              })
            );
          }
        });
      }
    });

    return jsonNodes;
  };

  return {
    // In JSON root node is always object, so starts with `traverse` function with depth 0.
    nodes: traverse({ obj: jsonObj, depth: 0 }),
    edges: [], // TODO: getEdges
  };
};

// 2. 생성된 배열을 통해 nodes 생성 -> 바로 node 생성하는 편이 loop를 덜 수행하니까 2번 단계는 없애는 쪽으로
// 3. 생성된 node를 통해 edges 생성
