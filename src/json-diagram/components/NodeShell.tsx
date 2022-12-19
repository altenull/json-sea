import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from '../../../stitches.config';
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
  backgroundColor: '#ffffff',
  border: '1px solid #1a192b',
  padding: '8px',

  '&:hover': {
    border: '1px solid green',
  },

  variants: {
    isSelected: {
      true: {
        border: '2px solid blue',
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
