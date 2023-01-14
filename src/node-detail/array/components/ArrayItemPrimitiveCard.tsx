import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { jsonTreeSelector } from '../../../store/json-engine/json-engine.selector';
import { useHoverNodeDetails } from '../../../store/node-detail-view/hooks/useHoverNodeDetails';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { useArrayItemNameTracer } from '../hooks/useArrayItemNameTracer';
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
  const { edges } = useRecoilValue(jsonTreeSelector);

  const { cardRef } = useHoverNodeDetails([{ nodeId }]);

  const parentNodeId: string = useMemo(
    () => edges.find((edge) => edge.target === nodeId)?.source as string,
    [edges, nodeId]
  );

  const arrayItemName: string = useArrayItemNameTracer({
    parentNodeId,
    selfNodeId: nodeId,
    lastArrayItemIndex: arrayItemIndex,
  });

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
