import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { seaNodesAndEdgesSelector } from '../../../store/json-engine/json-engine.selector';
import { useHoverNodeDetailCard } from '../../../store/node-detail-view/hooks/useHoverNodeDetailCard';
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
  const { seaNodeEntities, edges } = useRecoilValue(seaNodesAndEdgesSelector);

  const { cardRef } = useHoverNodeDetailCard({ nodeId });

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
      ref={cardRef}
      badge={<ArrayItemNameBadge arrayItemName={arrayItemName} />}
      value={value}
      childObjectNodeId={null}
    />
  );
};

export const ArrayItemPrimitiveCard = memo(_ArrayItemPrimitiveCard);
