import { Edge } from 'reactflow';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';
import { JsonNode } from '../types/json-node.type';
import { validateJsonDataType } from './json-data-type.helper';

// TODO: NodeProps는 이렇게만 필요할 듯.
// 1. id(required)
// 2. position(required)
// 3. data(required)

// from 'reactflow'
// type XYPosition = {
//   x: number;
//   y: number;
// };

// object 내의 필드는 node가 아니라 handle만 있어도 됨 -> handle만 있어도 edge를 그릴 수 있기 때문에

const formatNodeId = (nodeSequence: number): string => `node${nodeSequence}`;

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

export const jsonParser = (
  jsonObj: object
): {
  nodes: JsonNode[];
  edges: Edge[];
} => {
  let nodeSequence = 0;

  // TODO: 재귀함수이니까 object, array를 한번에 처리해야 할수도..?
  const traverseObject = ({ obj, depth }: { obj: object; depth: number }): JsonNode[] => {
    let jsonNodes: JsonNode[] = [convertObjectToJsonNode({ obj, nodeSequence, depth })];

    Object.entries(obj).forEach(([key, value]) => {
      const { isObjectType, isArrayType } = validateJsonDataType(value);

      if (isObjectType) {
        nodeSequence++;

        jsonNodes = jsonNodes.concat(
          traverseObject({
            obj: value as object,
            depth: depth + 1,
          })
        );
      } else if (isArrayType) {
        // TODO: traverseArray() 호출?
        console.log(`${key} field is (Array).`);
      }
    });

    return jsonNodes;
  };

  return {
    // Root node is always object, so starts with `traverseObject` function with root depth(0).
    nodes: traverseObject({ obj: jsonObj, depth: 0 }),
    edges: [], // TODO: getEdges
  };
};

// 2. 생성된 배열을 통해 nodes 생성 -> 바로 node 생성하는 편이 loop를 덜 수행하니까 2번 단계는 없애는 쪽으로
// 3. 생성된 node를 통해 edges 생성
