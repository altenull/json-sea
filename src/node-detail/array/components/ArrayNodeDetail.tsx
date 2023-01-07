import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { ArrayNodeData } from '../../../store/json-engine/types/sea-node.type';
import { NodeDetailList } from '../../components/NodeDetailList';
import { ArrayItemCard } from './ArrayItemCard';

type Props = {
  nodeId: string;
  nodeData: ArrayNodeData;
};

const _ArrayNodeDetail = ({ nodeId, nodeData }: Props) => {
  const { items } = nodeData;
  const isEmpty: boolean = items.length < 1;

  return (
    <NodeDetailList>
      {isEmpty ? (
        // TODO: Styling empty items.
        <Text h4>This is empty array.</Text>
      ) : (
        items.map((value: any, index: number) => (
          <ArrayItemCard key={index} parentNodeId={nodeId} arrayItemIndex={index} value={value} />
        ))
      )}
    </NodeDetailList>
  );
};

export const ArrayNodeDetail = memo(_ArrayNodeDetail);
