import { Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';

type Props = {
  nodeType: NodeType;
};

const _NodeTypeText = ({ nodeType }: Props) => {
  const nodeTypeToTextMap: Record<NodeType, string> = useMemo(
    () => ({
      [NodeType.Object]: 'Object',
      [NodeType.Array]: 'Array',
      [NodeType.Primitive]: 'Array item',
    }),
    []
  );

  return <Text h3>{nodeTypeToTextMap[nodeType]}</Text>;
};

export const NodeTypeText = memo(_NodeTypeText);
