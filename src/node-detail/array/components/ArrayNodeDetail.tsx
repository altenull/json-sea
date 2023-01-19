import { memo } from 'react';
import { Edge } from 'reactflow';
import { useRecoilValue } from 'recoil';
import { NodeType } from '../../../store/json-engine/enums/node-type.enum';
import { jsonTreeSelector } from '../../../store/json-engine/json-engine.selector';
import { ArrayNodeData } from '../../../store/json-engine/types/sea-node.type';
import { isEmptyArray } from '../../../utils/array.util';
import { EmptyNodeMessage } from '../../components/EmptyNodeMessage';
import { NodeDetailList } from '../../components/NodeDetailList';
import { ArrayItemCard } from './ArrayItemCard';

type Props = {
  nodeId: string;
  nodeData: ArrayNodeData;
};

const getArrayItemNodeId = (edges: Edge[], parentNodeId: string, index: number): string => {
  const connectedNodeIds: string[] = edges.filter(({ source }) => source === parentNodeId).map(({ target }) => target);
  const uniqConnectedNodeIds: string[] = Array.from(new Set(connectedNodeIds));

  return uniqConnectedNodeIds[index];
};

const _ArrayNodeDetail = ({ nodeId, nodeData }: Props) => {
  const { edges } = useRecoilValue(jsonTreeSelector);
  const { items } = nodeData;

  const parentNodeId: string = nodeId; // On each `ArrayItemCard` perspective, their parentNodeId is nodeId.

  return (
    <NodeDetailList>
      {isEmptyArray(items) ? (
        <EmptyNodeMessage nodeType={NodeType.Array} />
      ) : (
        items.map((value: any, index: number) => (
          <ArrayItemCard
            key={index}
            parentNodeId={parentNodeId}
            selfNodeId={getArrayItemNodeId(edges, parentNodeId, index)}
            arrayItemIndex={index}
            value={value}
          />
        ))
      )}
    </NodeDetailList>
  );
};

export const ArrayNodeDetail = memo(_ArrayNodeDetail);
