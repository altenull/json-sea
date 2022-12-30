import { styled } from '@nextui-org/react';
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';
import { useEnv } from '../../utils/react-hooks/useEnv';
import { NodeShell } from './NodeShell';
import { TargetHandle } from './TargetHandle';

/**
 * PrimitiveNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have.
 */
const _PrimitiveNode = ({ id, data }: NodeProps<PrimitiveNodeData>) => {
  const { isLocalhost } = useEnv();

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Primitive}>
      <TargetHandle id={id} />

      {isLocalhost && (
        <StyledNodeHeader>
          I{`'`}m PrimitiveNode (id: {id})
        </StyledNodeHeader>
      )}

      <StyledPrimitive>{data.stringifiedJson}</StyledPrimitive>
    </NodeShell>
  );
};

const StyledNodeHeader = styled('h4', {
  fontSize: '22px',
});

const StyledPrimitive = styled('div', {
  border: '1px solid $gray400',
  padding: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const PrimitiveNode = memo(_PrimitiveNode);
