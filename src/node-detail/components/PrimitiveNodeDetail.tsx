import { memo } from 'react';
import { PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';

type Props = {
  data: PrimitiveNodeData;
};

const _PrimitiveNodeDetail = ({ data }: Props) => {
  return <div>value: {data.stringifiedJson}</div>;
};

export const PrimitiveNodeDetail = memo(_PrimitiveNodeDetail);
