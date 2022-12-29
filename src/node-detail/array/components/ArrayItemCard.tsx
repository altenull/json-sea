import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { seaNodesAndEdgesSelector } from '../../../store/json-engine/json-engine.selector';
import { isObject } from '../../../utils/json.util';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { ArrayItemNameBadge } from './ArrayItemNameBadge';

type Props = {
  parentNodeId: string;
  arrayItemIndex: number;
  arrayItemName: string; // e.g. 'something[0]', 'array[3][2]', ...
  value: any;
};

const _ArrayItemCard = ({ parentNodeId, arrayItemIndex, arrayItemName, value }: Props) => {
  const [, edges] = useRecoilValue(seaNodesAndEdgesSelector);

  const childObjectNodeId: string | null = useMemo(() => {
    if (!isObject(value)) {
      return null;
    }

    const connectedNodeIds: string[] = edges.filter((edge) => edge.source === parentNodeId).map((edge) => edge.target);
    const uniqConnectedNodeIds: string[] = Array.from(new Set(connectedNodeIds));

    return uniqConnectedNodeIds[arrayItemIndex];
  }, [value, edges, parentNodeId, arrayItemIndex]);

  return (
    <NodeDetailCard
      badge={<ArrayItemNameBadge arrayItemName={arrayItemName} />}
      value={value}
      childObjectNodeId={childObjectNodeId}
    />
  );
};

export const ArrayItemCard = memo(_ArrayItemCard);
