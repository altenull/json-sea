import { useMemo } from 'react';
import { Edge } from 'reactflow';
import { useRecoilValue } from 'recoil';
import { ROOT_NODE_NAME } from '../../../json-diagram/constants/root-node.constant';
import { isArraySeaNode, isObjectSeaNode } from '../../../store/json-engine/helpers/sea-node.helper';
import { jsonTreeSelector } from '../../../store/json-engine/json-engine.selector';
import { SeaNode } from '../../../store/json-engine/types/sea-node.type';
import { Entities } from '../../../utils/array.util';
import { encloseSquareBrackets } from '../../../utils/string.util';

/**
 * @returns e.g. 'something[0]', 'array[3][2]', ...
 */
const traceArrayItemName = ({
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

      foreArrayItemName = traceArrayItemName({
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

type UseArrayItemNameTracerParam = {
  parentNodeId: string;
  selfNodeId: string;
  lastArrayItemIndex: number;
};

export const useArrayItemNameTracer = ({
  parentNodeId,
  selfNodeId,
  lastArrayItemIndex,
}: UseArrayItemNameTracerParam) => {
  const jsonTree = useRecoilValue(jsonTreeSelector);

  const arrayItemName: string = useMemo(() => {
    const { seaNodeEntities, edges } = jsonTree;

    const foreArrayItemName: string = traceArrayItemName({
      seaNodeEntities,
      edges,
      parentNodeId,
      selfNodeId,
    });

    return foreArrayItemName.concat(encloseSquareBrackets(lastArrayItemIndex));
  }, [jsonTree, parentNodeId, selfNodeId, lastArrayItemIndex]);

  return arrayItemName;
};
