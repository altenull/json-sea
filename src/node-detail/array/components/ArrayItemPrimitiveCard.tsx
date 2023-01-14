import { memo } from 'react';
import { useHoverNodeDetails } from '../../../store/node-detail-view/hooks/useHoverNodeDetails';
import { NodeDetailCard } from '../../components/NodeDetailCard';

type Props = {
  nodeId: string;
  arrayItemIndex: number;
  value: string | number | boolean | null;
};

/**
 * Parent node is always a ArrayNode.
 */
const _ArrayItemPrimitiveCard = ({ nodeId, arrayItemIndex, value }: Props) => {
  const { cardRef } = useHoverNodeDetails([{ nodeId }]);

  return <NodeDetailCard ref={cardRef} value={value} childObjectNodeId={null} />;
};

export const ArrayItemPrimitiveCard = memo(_ArrayItemPrimitiveCard);
