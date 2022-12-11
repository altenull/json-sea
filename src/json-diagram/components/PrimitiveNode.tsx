import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { NodeShell } from './NodeShell';

/**
 * PrimitiveNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have.
 */
const _PrimitiveNode = ({ id, data, type }: NodeProps) => {
  return (
    <NodeShell>
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} isConnectable={false} />
      <p>I'm PrimitiveNode</p>
      <p>id: {id}</p>
      <p>data: {data.label}</p>
      <p>type: {type}</p>
    </NodeShell>
  );
};

export const PrimitiveNode = memo(_PrimitiveNode);
