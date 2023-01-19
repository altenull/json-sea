import { useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { EdgeProps, getStraightPath } from 'reactflow';

const _ChainEdge = ({ id, sourceX, sourceY, targetX, targetY, style = {}, markerEnd }: EdgeProps) => {
  const { theme } = useTheme();
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  // TODO: Styling
  return (
    <path
      id={id}
      style={{ ...style, stroke: theme?.colors.blue300.value }}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
};

/**
 * @reference https://reactflow.dev/docs/examples/edges/custom-edge/
 */
export const ChainEdge = memo(_ChainEdge);
