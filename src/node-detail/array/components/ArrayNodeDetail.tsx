import { styled } from '@nextui-org/react';
import { memo } from 'react';
import { ArrayNodeData } from '../../../store/json-engine/types/sea-node.type';
import { ArrayItemCard } from './ArrayItemCard';

type Props = {
  nodeId: string;
  nodeData: ArrayNodeData;
};

const _ArrayNodeDetail = ({ nodeId, nodeData }: Props) => {
  const { arrayIndex, items } = nodeData;

  return (
    <StyledHost>
      {/* TODO: Display arrayIndex. */}
      {/* TODO: Handle if items is empty. */}
      {items.map((value: any, index: number) => (
        <ArrayItemCard
          key={index}
          parentNodeId={nodeId}
          arrayItemIndex={index}
          arrayItemName={`something[${index}]`}
          value={value}
        />
      ))}
    </StyledHost>
  );
};

// TODO: Refactoring (ObjectNodeDetail's StyledHost)
const StyledHost = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
});

export const ArrayNodeDetail = memo(_ArrayNodeDetail);
