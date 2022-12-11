import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { NodeShell } from './NodeShell';

/**
 * ArrayNode `<Handle>` Details
 *
 * source: can have if array includes at least one item.
 * target: always have.
 */
const _ArrayNode = ({ id, data, type }: NodeProps) => {
  return (
    <NodeShell>
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} isConnectable={false} />
      <p>I'm ArrayNode</p>
      <p>id: {id}</p>
      <p>data: {data.label}</p>
      <p>type: {type}</p>
      {/* TODO: Check whether array includes at least one item or not. */}
      <Handle type="source" position={Position.Right} style={{ background: '#555' }} isConnectable={false} />
    </NodeShell>
  );
};

export const ArrayNode = memo(_ArrayNode);
