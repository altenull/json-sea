import { memo, useMemo } from 'react';
import { useJsonEngineStore } from '../../../store/json-engine/json-engine.store';
import { useHoverNodeDetails } from '../../../store/node-detail-view/hooks/useHoverNodeDetails';
import { isObject } from '../../../utils/json.util';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { PropertyKeyBadge } from './PropertyKeyBadge';

type Props = {
  nodeId: string;
  propertyK: string;
  propertyV: any;
};

const _PropertyCard = ({ nodeId, propertyK, propertyV }: Props) => {
  const { edges } = useJsonEngineStore((state) => state.jsonTree);

  const { cardRef } = useHoverNodeDetails([{ nodeId, propertyK }]);

  const childObjectNodeId: string | null = useMemo(() => {
    if (!isObject(propertyV)) {
      return null;
    }

    return edges.find(({ source, sourceHandle }) => source === nodeId && sourceHandle === propertyK)?.target ?? null;
  }, [edges, nodeId, propertyK, propertyV]);

  return (
    <NodeDetailCard
      ref={cardRef}
      badge={<PropertyKeyBadge propertyK={propertyK} />}
      value={propertyV}
      childObjectNodeId={childObjectNodeId}
    />
  );
};

export const PropertyCard = memo(_PropertyCard);
