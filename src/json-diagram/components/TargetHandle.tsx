import { memo } from 'react';
import { Handle, HandleProps, Position } from 'reactflow';
import { handleStyle } from '../styles/handle.style';

type Props = Pick<HandleProps, 'id'>;

const _TargetHandle = ({ id }: Props) => {
  return <Handle id={id} type="target" position={Position.Left} style={handleStyle} />;
};

export const TargetHandle = memo(_TargetHandle);
