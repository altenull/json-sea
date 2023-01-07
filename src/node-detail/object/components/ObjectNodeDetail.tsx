import { Text } from '@nextui-org/react';
import { Fragment, memo, useCallback } from 'react';
import { ObjectNodeData } from '../../../store/json-engine/types/sea-node.type';
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
    const InferredLatLngMapCardProps: InferredLatLngMapCardProps[] = inferMap(nodeData.obj);

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

  const isEmpty: boolean = Object.keys(nodeData.obj).length < 1;

  return (
    <NodeDetailList>
      {isEmpty ? (
        // TODO: Styling empty object.
        <Text h4>This is empty object.</Text>
      ) : (
        renderPropertyCards()
      )}
    </NodeDetailList>
  );
};

export const ObjectNodeDetail = memo(_ObjectNodeDetail);
