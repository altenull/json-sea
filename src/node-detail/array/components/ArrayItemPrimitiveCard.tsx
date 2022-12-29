import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import {
  SeaNodeEntities,
  seaNodeEntitiesSelector,
  seaNodesAndEdgesSelector,
} from '../../../store/json-engine/json-engine.selector';
import { encloseSquareBrackets } from '../../../utils/string.util';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { getForeArrayItemName } from '../helpers/array-item-name.helper';
import { ArrayItemNameBadge } from './ArrayItemNameBadge';

type Props = {
  nodeId: string;
  arrayItemIndex: number;
  value: string | number | boolean | null;
};

/**
 * Parent node is always a ArrayNode.
 */
const _ArrayItemPrimitiveCard = ({ nodeId, arrayItemIndex, value }: Props) => {
  const [, edges] = useRecoilValue(seaNodesAndEdgesSelector);
  const seaNodeEntities: SeaNodeEntities = useRecoilValue(seaNodeEntitiesSelector);

  const parentNodeId: string = useMemo(
    () => edges.find((edge) => edge.target === nodeId)?.source as string,
    [edges, nodeId]
  );

  const arrayItemName: string = useMemo(() => {
    const foreArrayItemName: string = getForeArrayItemName({
      seaNodeEntities,
      edges,
      parentNodeId,
      selfNodeId: nodeId,
    });

    return `${foreArrayItemName}${encloseSquareBrackets(arrayItemIndex)}`;
  }, [seaNodeEntities, edges, parentNodeId, nodeId, arrayItemIndex]);

  return (
    <NodeDetailCard
      badge={<ArrayItemNameBadge arrayItemName={arrayItemName} />}
      value={value}
      childObjectNodeId={null}
    />
  );
};

export const ArrayItemPrimitiveCard = memo(_ArrayItemPrimitiveCard);
