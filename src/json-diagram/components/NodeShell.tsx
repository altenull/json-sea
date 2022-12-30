import { styled } from '@nextui-org/react';
import { useRecoilState } from 'recoil';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { sizes } from '../../ui/constants/sizes.constant';
import { useEnv } from '../../utils/react-hooks/useEnv';

type Props = {
  nodeId: string;
  nodeType: NodeType;
  children: React.ReactNode;
};

const _NodeShell = ({ nodeId, nodeType, children }: Props) => {
  const [selectedNodeId, setSelectedNodeId] = useRecoilState(selectedNodeIdAtom);
  const { isLocalhost } = useEnv();

  return (
    <StyledHost isSelected={nodeId === selectedNodeId} nodeType={nodeType} onClick={() => setSelectedNodeId(nodeId)}>
      {isLocalhost && (
        <StyledNodeHeader>
          {nodeType} Node (nodeId: {nodeId})
        </StyledNodeHeader>
      )}

      {nodeType === NodeType.Object && <StyledLeftCenterTip />}

      {children}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$background',
  border: '2px solid $gray400',
  maxWidth: sizes.nodeMaxWidth,

  '&:hover': {
    border: '2px solid $gray500',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$blue50',
      },
    },
    nodeType: {
      [NodeType.Object]: {
        minWidth: sizes.primitiveNodeMinWidth,
        borderTopLeftRadius: '$3xl',
        borderBottomLeftRadius: '$3xl',
        padding: `${sizes.nodePadding} 0 ${sizes.nodePadding} ${sizes.nodePadding}`,
      },
      [NodeType.Array]: {
        borderRadius: '50%',
        padding: '0',
        minWidth: sizes.arrayNodeSize,
        minHeight: sizes.arrayNodeSize,
        maxWidth: sizes.arrayNodeSize,
        maxHeight: sizes.arrayNodeSize,
      },
      [NodeType.Primitive]: {
        minWidth: sizes.primitiveNodeMinWidth,
        borderTopLeftRadius: '9999px',
        borderBottomLeftRadius: '9999px',
        padding: `${sizes.nodePadding} 0 ${sizes.nodePadding} ${sizes.nodePadding}`,
      },
    },
  },
});

const StyledNodeHeader = styled('h4', {
  fontSize: '22px',
});

const StyledLeftCenterTip = styled('span', {
  position: 'absolute',
  left: '-24px',
  top: '50%',
  transform: 'translateY(-50%)',
  minWidth: '24px',
  minHeight: '24px',
  borderTop: '12px solid transparent',
  borderBottom: '12px solid transparent',
  borderRight: '10px solid $gray400',
});

export const NodeShell = _NodeShell;
