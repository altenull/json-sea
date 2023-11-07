import { Edge } from 'reactflow';
import { CURLY_ROOT_NODE_NAME, ROOT_NODE_NAME } from '../../json-diagram/constants/root-node.constant';
import { isArraySeaNode, isObjectSeaNode, isPrimitiveSeaNode } from '../../store/json-engine/helpers/sea-node.helper';
import { JsonTree, useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { isEmptyArray } from '../../utils/array.util';
import { isNumber } from '../../utils/json.util';
import { encloseSquareBrackets } from '../../utils/string.util';

type NodePath = {
  fullNodePath: string; // e.g. `{root}`, `{root}.field_1`, `{root}.something[0].field_2`, `{root}.array[3][2].field_3[4]`, `{root}[1][2]`, ...
  selfNodePath: string; // e.g. `{root}`, `field_1`, `field_2`, `field_3[4]`, `{root}[1][2]`, ...
};

const getObjectPropertyK = ({
  edges,
  source,
  target,
}: {
  edges: Edge[];
  source: string;
  target: string;
}): string | null | undefined => edges.find((edge) => edge.source === source && edge.target === target)?.sourceHandle;

const getNodePath = (jsonTree: JsonTree, selfNodeId: string): NodePath => {
  const { seaNodeEntities, edges } = jsonTree;

  const selfNode = seaNodeEntities[selfNodeId];
  const isRootSelfNode = isEmptyArray(selfNode.data.parentNodePathIds);

  if (isRootSelfNode) {
    return {
      fullNodePath: CURLY_ROOT_NODE_NAME,
      selfNodePath: ROOT_NODE_NAME,
    };
  }

  const fullNodePathIds = selfNode.data.parentNodePathIds.concat([selfNodeId]);

  const fullNodePath = fullNodePathIds
    .reverse()
    .reduce((acc: string, nodeId: string, index: number, _fullNodePathIds: string[]) => {
      const node: SeaNode = seaNodeEntities[nodeId];

      const parentNodeId = index + 1 <= _fullNodePathIds.length ? _fullNodePathIds[index + 1] : undefined;
      const parentNode: SeaNode | undefined = parentNodeId !== undefined ? seaNodeEntities[parentNodeId] : undefined;

      const isParentObjectNode = parentNode !== undefined && isObjectSeaNode(parentNode);
      const isParentArrayNode = parentNode !== undefined && isArraySeaNode(parentNode);

      let segment = '';

      if (isObjectSeaNode(node)) {
        if (node.data.isRootNode) {
          segment = CURLY_ROOT_NODE_NAME;
        } else {
          const objectSegment = isNumber(node.data.arrayIndexForObject)
            ? encloseSquareBrackets(node.data.arrayIndexForObject)
            : '';

          if (isParentObjectNode) {
            const propertyK = getObjectPropertyK({ edges, source: parentNode.id, target: node.id }) as string;
            segment = `.${propertyK}${objectSegment}`;
          }

          if (isParentArrayNode) {
            segment = objectSegment;
          }
        }
      }

      if (isArraySeaNode(node)) {
        const arraySegment = encloseSquareBrackets(node.data.arrayIndex); // e.g. `[0]`, `[32]`, `[128]`, ....

        if (node.data.isRootNode) {
          segment = CURLY_ROOT_NODE_NAME;
        } else {
          if (isParentObjectNode) {
            const propertyK = getObjectPropertyK({ edges, source: parentNode.id, target: node.id }) as string;
            segment = `.${propertyK}${arraySegment}`;
          }

          if (isParentArrayNode) {
            segment = arraySegment;
          }
        }
      }

      if (isPrimitiveSeaNode(node)) {
        const primitiveSegment = encloseSquareBrackets(node.data.arrayIndex); // e.g. `[0]`, `[32]`, `[128]`, ....

        if (isParentObjectNode) {
          const propertyK = getObjectPropertyK({ edges, source: parentNode.id, target: node.id }) as string;
          segment = `.${propertyK}${primitiveSegment}`;
        }

        if (isParentArrayNode) {
          segment = primitiveSegment;
        }
      }

      return `${segment}${acc}`;
    }, '');

  return {
    fullNodePath, // e.g. `{root}.array[3][2].field_3[4]`
    selfNodePath: fullNodePath.split('.').pop() ?? '', // e.g. `field_3[4]`
  };
};

export const useNodePath = (nodeId: string): NodePath => {
  const jsonTree = useJsonEngineStore((state) => state.jsonTree);

  return getNodePath(jsonTree, nodeId);
};
