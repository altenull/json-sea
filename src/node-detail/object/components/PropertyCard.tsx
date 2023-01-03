import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { seaNodesAndEdgesSelector } from '../../../store/json-engine/json-engine.selector';
import { isObject } from '../../../utils/json.util';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { PropertyKeyBadge } from './PropertyKeyBadge';

type Props = {
  nodeId: string;
  propertyK: string;
  propertyV: any;
};

const _PropertyCard = ({ nodeId, propertyK, propertyV }: Props) => {
  const { edges } = useRecoilValue(seaNodesAndEdgesSelector);

  const childObjectNodeId: string | null = useMemo(() => {
    if (!isObject(propertyV)) {
      return null;
    }

    return edges.find((edge) => edge.source === nodeId && edge.sourceHandle === propertyK)?.target ?? null;
  }, [edges, nodeId, propertyK, propertyV]);

  return (
    <NodeDetailCard
      badge={<PropertyKeyBadge propertyK={propertyK} />}
      value={propertyV}
      childObjectNodeId={childObjectNodeId}
    />
  );
};

export const PropertyCard = memo(_PropertyCard);
