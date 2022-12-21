import { memo } from 'react';
import { ObjectNodeData } from '../../store/json-engine/types/sea-node.type';
import { PropertyInspector } from './PropertyInspector';

type Props = {
  nodeId: string;
  nodeData: ObjectNodeData;
};

const _ObjectNodeDetail = ({ nodeId, nodeData }: Props) => {
  return (
    <>
      {Object.entries(nodeData.obj).map(([propertyK, propertyV]) => (
        <PropertyInspector key={propertyK} nodeId={nodeId} propertyK={propertyK} propertyV={propertyV} />
      ))}
    </>
  );
};

export const ObjectNodeDetail = memo(_ObjectNodeDetail);
