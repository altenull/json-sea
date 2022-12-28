import { memo } from 'react';
import { PrimitiveNodeData } from '../../../store/json-engine/types/sea-node.type';
import { ArrayItemCard } from '../../array/components/ArrayItemCard';

type Props = {
  nodeData: PrimitiveNodeData;
};

const _PrimitiveNodeDetail = ({ nodeData }: Props) => {
  // TODO: get arrayItemName.
  return <ArrayItemCard arrayItemName={`something[${nodeData.arrayIndex}]`} value={nodeData.value} />;
};

export const PrimitiveNodeDetail = memo(_PrimitiveNodeDetail);
