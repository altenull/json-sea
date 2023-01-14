import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { jsonTreeSelector } from '../../../store/json-engine/json-engine.selector';
import { useHoverNodeDetails } from '../../../store/node-detail-view/hooks/useHoverNodeDetails';
import { isObject } from '../../../utils/json.util';
import { encloseSquareBrackets } from '../../../utils/string.util';
import { NodeDetailCard } from '../../components/NodeDetailCard';
import { getForeArrayItemName } from '../helpers/array-item-name.helper';
import { ArrayItemNameBadge } from './ArrayItemNameBadge';

type Props = {
  parentNodeId: string;
  selfNodeId: string;
  arrayItemIndex: number;
  value: any;
};

const _ArrayItemCard = ({ parentNodeId, selfNodeId, arrayItemIndex, value }: Props) => {
  const { seaNodeEntities, edges } = useRecoilValue(jsonTreeSelector);

  const { cardRef } = useHoverNodeDetails([{ nodeId: selfNodeId }]);

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
      ref={cardRef}
      badge={<ArrayItemNameBadge arrayItemName={arrayItemName} />}
      value={value}
      childObjectNodeId={objectNodeId}
    />
  );
};

export const ArrayItemCard = memo(_ArrayItemCard);
