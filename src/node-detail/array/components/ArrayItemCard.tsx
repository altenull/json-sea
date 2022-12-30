import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import {
  SeaNodeEntities,
  seaNodeEntitiesSelector,
  seaNodesAndEdgesSelector,
} from '../../../store/json-engine/json-engine.selector';
import { isObject } from '../../../utils/json.util';
import { encloseSquareBrackets } from '../../../utils/string.util';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { getForeArrayItemName } from '../helpers/array-item-name.helper';
import { ArrayItemNameBadge } from './ArrayItemNameBadge';

type Props = {
  parentNodeId: string;
  arrayItemIndex: number;
  value: any;
};

const _ArrayItemCard = ({ parentNodeId, arrayItemIndex, value }: Props) => {
  const [, edges] = useRecoilValue(seaNodesAndEdgesSelector);
  const seaNodeEntities: SeaNodeEntities = useRecoilValue(seaNodeEntitiesSelector);

  const selfNodeId: string = useMemo(() => {
    const connectedNodeIds: string[] = edges.filter((edge) => edge.source === parentNodeId).map((edge) => edge.target);
    const uniqConnectedNodeIds: string[] = Array.from(new Set(connectedNodeIds));

    return uniqConnectedNodeIds[arrayItemIndex];
  }, [edges, parentNodeId, arrayItemIndex]);

  const arrayItemName: string = useMemo(() => {
    const foreArrayItemName: string = getForeArrayItemName({
      seaNodeEntities,
      edges,
      parentNodeId,
      selfNodeId,
    });

    return foreArrayItemName.concat(encloseSquareBrackets(arrayItemIndex));
  }, [seaNodeEntities, edges, parentNodeId, selfNodeId, arrayItemIndex]);

  const objectNodeId: string | null = useMemo(() => (isObject(value) ? selfNodeId : null), [value, selfNodeId]);

  return (
    <NodeDetailCard
      badge={<ArrayItemNameBadge arrayItemName={arrayItemName} />}
      value={value}
      childObjectNodeId={objectNodeId}
    />
  );
};

export const ArrayItemCard = memo(_ArrayItemCard);
