import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { styled } from '../../../stitches.config';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { PrimitiveNodeData } from '../../store/json-engine/types/node-data.type';
import { NodeShell } from './NodeShell';

/**
 * PrimitiveNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have.
 */
const _PrimitiveNode = ({ id, data }: NodeProps<PrimitiveNodeData>) => {
  return (
    <NodeShell nodeType={NodeType.Primitive}>
      <Handle id={id} type="target" position={Position.Left} style={{ background: '#555' }} />

      <StyledNodeHeader>
        I{`'`}m PrimitiveNode (id: {id})
      </StyledNodeHeader>

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
