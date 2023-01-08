import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { Edge } from 'reactflow';
import { useRecoilValue } from 'recoil';
import { seaNodesAndEdgesSelector } from '../../../store/json-engine/json-engine.selector';
import { ArrayNodeData } from '../../../store/json-engine/types/sea-node.type';
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
  const { edges } = useRecoilValue(seaNodesAndEdgesSelector);
  const { items } = nodeData;

  const isEmpty: boolean = items.length < 1;
  const parentNodeId: string = nodeId;

  return (
    <NodeDetailList>
      {isEmpty ? (
        // TODO: Styling empty items.
        <Text h4>This is empty array.</Text>
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
