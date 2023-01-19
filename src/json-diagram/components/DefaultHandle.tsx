import { memo, useMemo } from 'react';
import { Handle, HandleProps, HandleType, Position } from 'reactflow';
import { hiddenHandleStyle } from '../styles/handle.style';

type Props = Pick<HandleProps, 'id' | 'type'> & {
  style?: React.CSSProperties;
};

const _DefaultHandle = ({ id, type, style = {} }: Props) => {
  const handleTypeToPositionMap: Record<HandleType, Position> = useMemo(
    () => ({
      source: Position.Right,
      target: Position.Left,
    }),
    []
  );

  return (
    <Handle style={{ ...hiddenHandleStyle, ...style }} id={id} type={type} position={handleTypeToPositionMap[type]} />
  );
};

export const DefaultHandle = memo(_DefaultHandle);
