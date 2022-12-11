import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { NodeShell } from './NodeShell';

/**
 * ObjectNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have except for RootNode.
 */
const _ObjectNode = ({ id, data, type }: NodeProps) => {
  return (
    <NodeShell>
      {/* TODO: RootNode doesn't have any Handle. */}
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} isConnectable={false} />
      <p>I'm ObjectNode</p>
      <p>id: {id}</p>
      <p>data: {data.label}</p>
      <p>type: {type}</p>
    </NodeShell>
  );
};

export const ObjectNode = memo(_ObjectNode);
