import { memo } from 'react';
import { ArrayNodeData } from '../../store/json-engine/types/node-data.type';

type Props = {
  data: ArrayNodeData;
};

const _ArrayNodeDetail = ({ data }: Props) => {
  // TODO: render data.items
  return <div>Index {data.arrayIndex}</div>;
};

export const ArrayNodeDetail = memo(_ArrayNodeDetail);
