import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { styled } from '../../../stitches.config';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ArrayNodeData } from '../../store/json-engine/types/node-data.type';
import { NodeShell } from './NodeShell';
import { TargetHandle } from './TargetHandle';

/**
 * ArrayNode `<Handle>` Details
 *
 * source: can have if array includes at least one item.
 * target: always have.
 */
const _ArrayNode = ({ id, data }: NodeProps<ArrayNodeData>) => {
  const { arrayIndex, items } = data;

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Array}>
      <TargetHandle id={id} />

      <StyledNodeHeader>
        I{`'`}m ArrayNode (id: {id})
      </StyledNodeHeader>

      <StyledArrayIndex>{arrayIndex}</StyledArrayIndex>

      {items.length > 0 && <Handle id={id} type="source" position={Position.Right} style={{ background: '#555' }} />}
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
