import { memo, useMemo } from 'react';
import { useHoverNodeDetails } from '../../../store/node-detail-view/hooks/useHoverNodeDetails';
import { isObject } from '../../../utils/json.util';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { useNodePath } from '../../hooks/useNodePath';
import { ArrayItemNameChip } from './ArrayItemNameChip';

type Props = {
  selfNodeId: string;
  value: any;
};

const _ArrayItemCard = ({ selfNodeId, value }: Props) => {
  const { cardRef } = useHoverNodeDetails([{ nodeId: selfNodeId }]);
  const { selfNodePath } = useNodePath(selfNodeId);

  const objectNodeId: string | null = useMemo(() => (isObject(value) ? selfNodeId : null), [value, selfNodeId]);

  return (
    <NodeDetailCard
      ref={cardRef}
      chip={<ArrayItemNameChip arrayItemName={selfNodePath} />}
      value={value}
      childObjectNodeId={objectNodeId}
    />
  );
};

export const ArrayItemCard = memo(_ArrayItemCard);
