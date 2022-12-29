import { memo } from 'react';
import { ObjectNodeData } from '../../../store/json-engine/types/sea-node.type';
import { NodeDetailList } from '../../components/NodeDetailList';
import { PropertyCard } from './PropertyCard';

type Props = {
  nodeId: string;
  nodeData: ObjectNodeData;
};

const _ObjectNodeDetail = ({ nodeId, nodeData }: Props) => {
  return (
    <NodeDetailList>
      {Object.entries(nodeData.obj).map(([propertyK, propertyV]) => (
        <PropertyCard key={propertyK} nodeId={nodeId} propertyK={propertyK} propertyV={propertyV} />
      ))}
    </NodeDetailList>
  );
};

export const ObjectNodeDetail = memo(_ObjectNodeDetail);
