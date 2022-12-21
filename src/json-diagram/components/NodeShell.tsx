import { styled } from '@nextui-org/react';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';

type Props = {
  nodeId: string;
  nodeType: NodeType;
  children: React.ReactNode;
};

const _NodeShell = ({ nodeId, nodeType, children }: Props) => {
  const [selectedNodeId, setSelectedNodeId] = useRecoilState(selectedNodeIdAtom);

  const handleClick = useCallback(() => {
    setSelectedNodeId(nodeId);
  }, [nodeId, setSelectedNodeId]);

  return (
    <StyledHost isSelected={nodeId === selectedNodeId} nodeType={nodeType} onClick={handleClick}>
      {children}
    </StyledHost>
  );
};

// TODO: Styling
const StyledHost = styled('div', {
  position: 'relative',
  backgroundColor: '$white',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$gray400',
  padding: '8px',

  '&:hover': {
    borderColor: '$gray500',
    backgroundColor: '$gray700',
  },

  variants: {
    isSelected: {
      true: {
        borderWidth: 2,
        borderColor: '$yellow700',
      },
    },
    nodeType: {
      [NodeType.Object]: {
        borderRadius: '4px',
      },
      [NodeType.Array]: {
        borderRadius: '50%',
      },
      [NodeType.Primitive]: {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
      },
    },
  },
});

export const NodeShell = _NodeShell;
