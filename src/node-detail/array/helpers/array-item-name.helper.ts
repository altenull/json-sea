import { Edge } from 'reactflow';
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
      (edge) => edge.source === parentNodeId && edge.target === selfNodeId
    )?.sourceHandle as string;

    foreArrayItemName = `${propertyK}${foreArrayItemName}`;
  }

  if (isArraySeaNode(parentNode)) {
    const grandparentNodeId: string | undefined = edges.find((edge) => edge.target === parentNodeId)?.source as string;

    foreArrayItemName = getForeArrayItemName({
      seaNodeEntities,
      edges,
      parentNodeId: grandparentNodeId,
      selfNodeId: parentNode.id,
    })
      .concat(encloseSquareBrackets(parentNode.data.arrayIndex))
      .concat(foreArrayItemName);
  }

  return foreArrayItemName;
};
