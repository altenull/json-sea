import { semanticColors } from "@heroui/react";
import { memo } from 'react';
import { EdgeProps, getStraightPath } from 'reactflow';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';

const _ChainEdge = ({ id, sourceX, sourceY, targetX, targetY, style = {}, markerEnd }: EdgeProps) => {
  const { theme } = useCustomTheme();
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const strokeWidth = 3;

  return (
    <path
      id={id}
      style={{
        ...style,
        stroke: semanticColors[theme].primary[200],
        strokeWidth,
        transform: `translateX(-${strokeWidth / 2}px)`,
      }}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      strokeDasharray="5 8"
    />
  );
};

/**
 * @reference https://reactflow.dev/docs/examples/edges/custom-edge/
 */
export const ChainEdge = memo(_ChainEdge);
