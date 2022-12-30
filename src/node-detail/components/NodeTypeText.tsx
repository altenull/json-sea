import { Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
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
      {isRootNode && ' (root)'}
    </Text>
  );
};

export const NodeTypeText = memo(_NodeTypeText);
