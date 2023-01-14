import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { jsonTreeSelector } from '../../../store/json-engine/json-engine.selector';
import { useHoverNodeDetails } from '../../../store/node-detail-view/hooks/useHoverNodeDetails';
import { getParentNodeId } from '../../../utils/reactflow.util';
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

  const parentNodeId: string = useMemo(() => getParentNodeId(edges, nodeId), [edges, nodeId]);

  const { getArrayItemName } = useArrayItemNameTracer();

  return (
    <NodeDetailCard
      ref={cardRef}
      badge={<ArrayItemNameBadge arrayItemName={getArrayItemName(parentNodeId, nodeId, arrayItemIndex)} />}
      value={value}
      childObjectNodeId={null}
    />
  );
};

export const ArrayItemPrimitiveCard = memo(_ArrayItemPrimitiveCard);
