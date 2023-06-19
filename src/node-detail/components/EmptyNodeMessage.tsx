import { styled, Text } from '@nextui-org/react';
import Image from 'next/image';
import { memo, useMemo } from 'react';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { nodeTypeToTextMap } from '../array/helpers/node-type.helper';

type Props = {
  nodeType: NodeType.Object | NodeType.Array;
};

const _EmptyNodeMessage = ({ nodeType }: Props) => {
  const nodeTypeToSyntaxMap: Record<NodeType.Object | NodeType.Array, string> = useMemo(() => {
    return { [NodeType.Object]: '{ }', [NodeType.Array]: '[ ]' };
  }, []);

  return (
    <S_Host>
      <Image src="/oceania.png" alt="oceania" width="200" height="200" />
      <Text weight="medium" size="$lg" css={{ color: '$gray600' }}>
        {nodeTypeToSyntaxMap[nodeType]}
      </Text>
      <Text weight="semibold">You have just selected an empty {nodeTypeToTextMap[nodeType].toLowerCase()}.</Text>
    </S_Host>
  );
};

const S_Host = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '25vh',
});

export const EmptyNodeMessage = memo(_EmptyNodeMessage);
