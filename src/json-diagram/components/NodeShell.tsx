import { styled } from '../../../stitches.config';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';

type Props = {
  nodeType: NodeType;
  children: React.ReactNode;
};

const _NodeShell = ({ nodeType, children }: Props) => {
  return <StyledHost nodeType={nodeType}>{children}</StyledHost>;
};

// TODO: Styling
const StyledHost = styled('div', {
  position: 'relative',
  backgroundColor: '#ffffff',
  border: '1px solid #1a192b',
  padding: '8px',
  variants: {
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
