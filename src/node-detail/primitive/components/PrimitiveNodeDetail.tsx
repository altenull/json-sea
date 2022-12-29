import { memo } from 'react';
import { PrimitiveNodeData } from '../../../store/json-engine/types/sea-node.type';
import { ArrayItemPrimitiveCard } from '../../array/components/ArrayItemPrimitiveCard';

type Props = {
  nodeId: string;
  nodeData: PrimitiveNodeData;
};

const _PrimitiveNodeDetail = ({ nodeId, nodeData }: Props) => {
  const { arrayIndex, value } = nodeData;

  return <ArrayItemPrimitiveCard nodeId={nodeId} arrayItemIndex={arrayIndex} value={value} />;
};

export const PrimitiveNodeDetail = memo(_PrimitiveNodeDetail);
