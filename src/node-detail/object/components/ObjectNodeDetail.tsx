import { styled } from '@nextui-org/react';
import { memo } from 'react';
import { ObjectNodeData } from '../../../store/json-engine/types/sea-node.type';
import { PropertyCard } from './PropertyCard';

type Props = {
  nodeId: string;
  nodeData: ObjectNodeData;
};

const _ObjectNodeDetail = ({ nodeId, nodeData }: Props) => {
  return (
    <StyledHost>
      {Object.entries(nodeData.obj).map(([propertyK, propertyV]) => (
        <PropertyCard key={propertyK} nodeId={nodeId} propertyK={propertyK} propertyV={propertyV} />
      ))}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
});

export const ObjectNodeDetail = memo(_ObjectNodeDetail);
