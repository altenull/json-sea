import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { ROOT_NODE_NAME } from '../../json-diagram/constants/root-node.constant';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { nodeTypeToTextMap } from '../array/helpers/node-type.helper';

type Props = {
  nodeType: NodeType;
  isRootNode: boolean;
};

const _NodeTypeText = ({ nodeType, isRootNode }: Props) => {
  return (
    <Text h3>
      {nodeTypeToTextMap[nodeType]}
      {isRootNode && ` (${ROOT_NODE_NAME})`}
    </Text>
  );
};

export const NodeTypeText = memo(_NodeTypeText);
