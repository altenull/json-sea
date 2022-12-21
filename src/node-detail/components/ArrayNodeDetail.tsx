import { memo } from 'react';
import { ArrayNodeData } from '../../store/json-engine/types/sea-node.type';

type Props = {
  nodeData: ArrayNodeData;
};

const _ArrayNodeDetail = ({ nodeData }: Props) => {
  // TODO: render data.items
  return <div>Index {nodeData.arrayIndex}</div>;
};

export const ArrayNodeDetail = memo(_ArrayNodeDetail);
