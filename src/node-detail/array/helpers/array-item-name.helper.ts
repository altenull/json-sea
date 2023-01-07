import { Edge } from 'reactflow';
import { ROOT_NODE_NAME } from '../../../json-diagram/constants/root-node.constant';
import { isArraySeaNode, isObjectSeaNode } from '../../../store/json-engine/helpers/sea-node.helper';
import { SeaNodeEntities } from '../../../store/json-engine/json-engine.selector';
import { SeaNode } from '../../../store/json-engine/types/sea-node.type';
import { encloseSquareBrackets } from '../../../utils/string.util';

/**
 * @returns e.g. 'something[0]', 'array[3][2]', ...
 */
export const getForeArrayItemName = ({
  seaNodeEntities,
  edges,
  parentNodeId,
  selfNodeId,
}: {
  seaNodeEntities: SeaNodeEntities;
  edges: Edge[];
  parentNodeId: string;
  selfNodeId: string;
}): string => {
  let foreArrayItemName: string = '';

  const parentNode: SeaNode = seaNodeEntities[parentNodeId];

  if (isObjectSeaNode(parentNode)) {
    const propertyK: string | undefined = edges.find(
      ({ source, target }) => source === parentNodeId && target === selfNodeId
    )?.sourceHandle as string;

    foreArrayItemName = `${propertyK}${foreArrayItemName}`;
  }

  if (isArraySeaNode(parentNode)) {
    if (parentNode.data.isRootNode) {
      foreArrayItemName = ROOT_NODE_NAME.concat(foreArrayItemName);
    } else {
      const grandparentNodeId: string | undefined = edges.find(({ target }) => target === parentNodeId)
        ?.source as string;

      foreArrayItemName = getForeArrayItemName({
        seaNodeEntities,
        edges,
        parentNodeId: grandparentNodeId,
        selfNodeId: parentNode.id,
      })
        .concat(encloseSquareBrackets(parentNode.data.arrayIndex))
        .concat(foreArrayItemName);
    }
  }

  return foreArrayItemName;
};
