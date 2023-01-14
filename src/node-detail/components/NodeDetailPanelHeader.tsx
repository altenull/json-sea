import { Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { ROOT_NODE_NAME } from '../../json-diagram/constants/root-node.constant';
import { isArraySeaNode, isObjectSeaNode } from '../../store/json-engine/helpers/sea-node.helper';
import { jsonTreeSelector } from '../../store/json-engine/json-engine.selector';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { isNumber } from '../../utils/json.util';
import { getParentNodeId } from '../../utils/reactflow.util';
import { nodeTypeToTextMap } from '../array/helpers/node-type.helper';
import { useArrayItemNameTracer } from '../array/hooks/useArrayItemNameTracer';
import { NodeDetailBadge } from './NodeDetailBadge';

type Props = {
  selectedNode: SeaNode;
};

const _NodeDetailPanelHeader = ({ selectedNode }: Props) => {
  const { edges } = useRecoilValue(jsonTreeSelector);
  const { getArrayItemName } = useArrayItemNameTracer();

  const isRootNode: boolean = useMemo(
    () => (isObjectSeaNode(selectedNode) || isArraySeaNode(selectedNode)) && selectedNode.data.isRootNode,
    [selectedNode]
  );

  const parentNodeId: string | null = useMemo(
    () => (isRootNode ? null : getParentNodeId(edges, selectedNode.id)),
    [edges, isRootNode, selectedNode.id]
  );

  return (
    <Text css={{ display: 'flex', justifyContent: 'space-between' }} h3>
      {nodeTypeToTextMap[selectedNode.type]}

      {isRootNode && <NodeDetailBadge value={ROOT_NODE_NAME} />}

      {!isRootNode && isObjectSeaNode(selectedNode) && isNumber(selectedNode.data.arrayIndexForObject) && (
        <NodeDetailBadge
          value={getArrayItemName(parentNodeId!, selectedNode.id, selectedNode.data.arrayIndexForObject)}
        />
      )}
      {!isRootNode && isArraySeaNode(selectedNode) && (
        <NodeDetailBadge value={getArrayItemName(parentNodeId!, selectedNode.id, selectedNode.data.arrayIndex)} />
      )}
    </Text>
  );
};

export const NodeDetailPanelHeader = memo(_NodeDetailPanelHeader);
