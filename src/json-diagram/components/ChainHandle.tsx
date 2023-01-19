import { memo, useMemo } from 'react';
import { Handle, HandleProps, HandleType, Position } from 'reactflow';
import { sizes } from '../../ui/constants/sizes.constant';
import { hiddenHandleStyle } from '../styles/handle.style';

type Props = Pick<HandleProps, 'id' | 'type'>;

const _ChainHandle = ({ id, type }: Props) => {
  const handleTypeToPositionMap: Record<HandleType, Position> = useMemo(
    () => ({
      source: Position.Bottom,
      target: Position.Top,
    }),
    []
  );

  return (
    <Handle
      style={{ ...hiddenHandleStyle, left: sizes.arrayNodeSize / 2 }}
      id={id}
      type={type}
      position={handleTypeToPositionMap[type]}
    />
  );
};

export const ChainHandle = memo(_ChainHandle);
