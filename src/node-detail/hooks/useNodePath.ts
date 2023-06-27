import { useCallback } from 'react';
import { Edge } from 'reactflow';
import { ROOT_NODE_NAME } from '../../json-diagram/constants/root-node.constant';
import { isArraySeaNode, isObjectSeaNode } from '../../store/json-engine/helpers/sea-node.helper';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { Entities } from '../../utils/array.util';
import { isNumber } from '../../utils/json.util';
import { encloseSquareBrackets } from '../../utils/string.util';

/**
 * @returns e.g. 'field_1', 'something[0]', 'array[3][2]', ...
 */
const tracePath = ({
  seaNodeEntities,
  edges,
  parentNodeId,
  selfNodeId,
}: {
  seaNodeEntities: Entities<SeaNode>;
  edges: Edge[];
  parentNodeId: string;
  selfNodeId: string;
}): string => {
  let path: string = '';

  const parentNode: SeaNode = seaNodeEntities[parentNodeId];

  if (isObjectSeaNode(parentNode)) {
    const propertyK: string | undefined = edges.find(
      ({ source, target }) => source === parentNodeId && target === selfNodeId
    )?.sourceHandle as string;

    path = `${propertyK}${path}`;
  }

  if (isArraySeaNode(parentNode)) {
    if (parentNode.data.isRootNode) {
      path = ROOT_NODE_NAME.concat(path);
    } else {
      const grandparentNodeId: string | undefined = edges.find(({ target }) => target === parentNodeId)
        ?.source as string;

      path = tracePath({
        seaNodeEntities,
        edges,
        parentNodeId: grandparentNodeId,
        selfNodeId: parentNode.id,
      })
        .concat(encloseSquareBrackets(parentNode.data.arrayIndex))
        .concat(path);
    }
  }

  return path;
};

export const useNodePath = () => {
  const jsonTree = useJsonEngineStore((state) => state.jsonTree);

  const getNodePath = useCallback(
    (parentNodeId: string, selfNodeId: string, lastArrayItemIndex: number | null): string => {
      const { seaNodeEntities, edges } = jsonTree;

      const nodePath: string = tracePath({
        seaNodeEntities,
        edges,
        parentNodeId,
        selfNodeId,
      });

      return isNumber(lastArrayItemIndex) ? nodePath.concat(encloseSquareBrackets(lastArrayItemIndex)) : nodePath;
    },
    [jsonTree]
  );

  return { getNodePath };
};
