import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { styled } from '../../../stitches.config';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ArrayNodeData } from '../../store/json-engine/types/node-data.type';
import { NodeShell } from './NodeShell';

/**
 * ArrayNode `<Handle>` Details
 *
 * source: can have if array includes at least one item.
 * target: always have.
 */
const _ArrayNode = ({ id, data }: NodeProps<ArrayNodeData>) => {
  return (
    <NodeShell nodeType={NodeType.Array}>
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} isConnectable={false} />

      <StyledNodeHeader>
        I{`'`}m ArrayNode (id: {id})
      </StyledNodeHeader>

      <StyledArrayIndex>{data.value}</StyledArrayIndex>

      {/* TODO: Check whether array includes at least one item or not. */}
      <Handle type="source" position={Position.Right} style={{ background: '#555' }} isConnectable={false} />
    </NodeShell>
  );
};

const StyledNodeHeader = styled('h4', {
  fontSize: '22px',
});

const StyledArrayIndex = styled('div', {
  border: '1px solid $gray400',
  padding: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ArrayNode = memo(_ArrayNode);
