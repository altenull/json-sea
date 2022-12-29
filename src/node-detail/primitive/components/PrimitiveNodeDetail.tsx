import { memo } from 'react';
import { PrimitiveNodeData } from '../../../store/json-engine/types/sea-node.type';
import { ArrayItemCard } from '../../array/components/ArrayItemCard';

type Props = {
  nodeId: string;
  nodeData: PrimitiveNodeData;
};

const _PrimitiveNodeDetail = ({ nodeId, nodeData }: Props) => {
  const { arrayIndex, value } = nodeData;

  return (
    <ArrayItemCard
      parentNodeId={nodeId}
      arrayItemIndex={arrayIndex}
      arrayItemName={`something[${arrayIndex}]`}
      value={value}
    />
  );
};

export const PrimitiveNodeDetail = memo(_PrimitiveNodeDetail);
