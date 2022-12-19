import { memo } from 'react';
import { ObjectNodeData } from '../../store/json-engine/types/node-data.type';
import { PropertyInspector } from './PropertyInspector';

type Props = {
  data: ObjectNodeData;
};

const _ObjectNodeDetail = ({ data }: Props) => {
  return (
    <>
      {Object.entries(data.obj).map(([propertyK, propertyV]) => (
        <PropertyInspector key={propertyK} propertyK={propertyK} propertyV={propertyV} />
      ))}
    </>
  );
};

export const ObjectNodeDetail = memo(_ObjectNodeDetail);
