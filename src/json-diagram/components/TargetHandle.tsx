import { memo } from 'react';
import { Handle, HandleProps, Position } from 'reactflow';

type Props = Pick<HandleProps, 'id'>;

const _TargetHandle = ({ id }: Props) => {
  return <Handle id={id} type="target" position={Position.Left} style={{ background: '#555' }} />;
};

export const TargetHandle = memo(_TargetHandle);
