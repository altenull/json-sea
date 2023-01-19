import { Fragment, memo, useCallback } from 'react';
import { NodeType } from '../../../store/json-engine/enums/node-type.enum';
import { ObjectNodeData } from '../../../store/json-engine/types/sea-node.type';
import { isEmptyObject } from '../../../utils/object.util';
import { EmptyNodeMessage } from '../../components/EmptyNodeMessage';
import { NodeDetailList } from '../../components/NodeDetailList';
import { inferMap } from '../helpers/infer-map.helper';
import { InferredLatLngMapCard, InferredLatLngMapCardProps } from './InferredLatLngMapCard';
import { PropertyCard } from './PropertyCard';

type Props = {
  nodeId: string;
  nodeData: ObjectNodeData;
};

const _ObjectNodeDetail = ({ nodeId, nodeData }: Props) => {
  const renderPropertyCards = useCallback(() => {
    const InferredLatLngMapCardProps: InferredLatLngMapCardProps[] = inferMap(nodeData.obj, nodeId);

    return Object.entries(nodeData.obj).map(([propertyK, propertyV]) => {
      // Compare with `lngPropertyK` in order to insert `InferredMapCard` after kind of longitude property.
      const inferredMapCardPropsIndex: number = InferredLatLngMapCardProps.findIndex(
        ({ lngPropertyK }) => lngPropertyK === propertyK
      );
      const shouldInsert: boolean = inferredMapCardPropsIndex !== -1;

      return (
        <Fragment key={propertyK}>
          <PropertyCard nodeId={nodeId} propertyK={propertyK} propertyV={propertyV} />
          {shouldInsert && <InferredLatLngMapCard {...InferredLatLngMapCardProps[inferredMapCardPropsIndex]} />}
        </Fragment>
      );
    });
  }, [nodeId, nodeData]);

  return (
    <NodeDetailList>
      {isEmptyObject(nodeData.obj) ? <EmptyNodeMessage nodeType={NodeType.Object} /> : renderPropertyCards()}
    </NodeDetailList>
  );
};

export const ObjectNodeDetail = memo(_ObjectNodeDetail);
