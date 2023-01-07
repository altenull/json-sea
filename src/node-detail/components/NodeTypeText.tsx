import { Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { ROOT_NODE_NAME } from '../../json-diagram/constants/root-node.constant';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';

type Props = {
  nodeType: NodeType;
  isRootNode: boolean;
};

const _NodeTypeText = ({ nodeType, isRootNode }: Props) => {
  const nodeTypeToTextMap: Record<NodeType, string> = useMemo(
    () => ({
      [NodeType.Object]: 'Object',
      [NodeType.Array]: 'Array',
      [NodeType.Primitive]: 'Array item',
    }),
    []
  );

  return (
    <Text h3>
      {nodeTypeToTextMap[nodeType]}
      {isRootNode && ` (${ROOT_NODE_NAME})`}
    </Text>
  );
};

export const NodeTypeText = memo(_NodeTypeText);
