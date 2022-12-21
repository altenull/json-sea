import { memo } from 'react';
import { PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';

type Props = {
  nodeData: PrimitiveNodeData;
};

const _PrimitiveNodeDetail = ({ nodeData }: Props) => {
  return <div>value: {nodeData.stringifiedJson}</div>;
};

export const PrimitiveNodeDetail = memo(_PrimitiveNodeDetail);
