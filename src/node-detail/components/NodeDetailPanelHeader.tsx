import { Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { ROOT_NODE_NAME } from '../../json-diagram/constants/root-node.constant';
import { isArraySeaNode, isObjectSeaNode, isPrimitiveSeaNode } from '../../store/json-engine/helpers/sea-node.helper';
import { jsonTreeSelector } from '../../store/json-engine/json-engine.selector';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { findParentNodeId } from '../../utils/reactflow.util';
import { nodeTypeToTextMap } from '../array/helpers/node-type.helper';
import { useNodePath } from '../hooks/useNodePath';
import { NodeDetailBadge } from './NodeDetailBadge';

type Props = {
  selectedNode: SeaNode;
};

const _NodeDetailPanelHeader = ({ selectedNode }: Props) => {
  const { edges } = useRecoilValue(jsonTreeSelector);
  const { getNodePath } = useNodePath();

  const isRootNode: boolean = useMemo(
    () => (isObjectSeaNode(selectedNode) || isArraySeaNode(selectedNode)) && selectedNode.data.isRootNode,
    [selectedNode]
  );

  const parentNodeId: string | null = useMemo(
    () => (isRootNode ? null : findParentNodeId(edges, selectedNode.id)),
    [edges, isRootNode, selectedNode.id]
  );

  return (
    <Text css={{ display: 'flex', justifyContent: 'space-between' }} h3>
      {/* Left */}
      {nodeTypeToTextMap[selectedNode.type]}

      {/* Right */}
      {isRootNode ? (
        <NodeDetailBadge value={ROOT_NODE_NAME} />
      ) : (
        <>
          {isObjectSeaNode(selectedNode) && (
            <NodeDetailBadge
              value={getNodePath(parentNodeId!, selectedNode.id, selectedNode.data.arrayIndexForObject)}
            />
          )}
          {isArraySeaNode(selectedNode) && (
            <NodeDetailBadge value={getNodePath(parentNodeId!, selectedNode.id, selectedNode.data.arrayIndex)} />
          )}
          {isPrimitiveSeaNode(selectedNode) && (
            <NodeDetailBadge value={getNodePath(parentNodeId!, selectedNode.id, selectedNode.data.arrayIndex)} />
          )}
        </>
      )}
    </Text>
  );
};

export const NodeDetailPanelHeader = memo(_NodeDetailPanelHeader);
