'use client';

import { useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { EdgeProps, getBezierPath } from 'reactflow';
import { useHighlightedEdges } from '../hooks/useHighlightedEdges';

const _DefaultEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  source,
  /**
   * [2023-02-01] `sourceHandle` property seems to be transformed to `sourceHandleId` internally.
   * [2023-07-05] It seems that `sourceHandle` and `sourceHandleId` are same.
   */
  sourceHandleId,
  target,
}: EdgeProps) => {
  const { theme } = useTheme();
  const { highlightedEdgeIds } = useHighlightedEdges();

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const dynamicStyle = highlightedEdgeIds.includes(id)
    ? {
        ...style,
        stroke: theme?.colors.primary.value,
        strokeWidth: 3,
      }
    : style;

  return <path id={id} style={dynamicStyle} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} />;
};

/**
 * @reference https://reactflow.dev/docs/examples/edges/custom-edge/
 */
export const DefaultEdge = memo(_DefaultEdge);
