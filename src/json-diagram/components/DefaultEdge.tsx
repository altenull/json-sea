'use client';

import { semanticColors } from "@heroui/react";
import { memo } from 'react';
import { EdgeProps, getBezierPath } from 'reactflow';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';
import { useHighlighter } from '../hooks/useHighlighter';

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
  const { theme } = useCustomTheme();
  const { isHighlightEdge } = useHighlighter();

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const dynamicStyle = isHighlightEdge(id)
    ? {
        ...style,
        stroke: (semanticColors[theme].primary as any).DEFAULT,
        strokeWidth: 3,
      }
    : style;

  return <path id={id} style={dynamicStyle} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} />;
};

/**
 * @reference https://reactflow.dev/docs/examples/edges/custom-edge/
 */
export const DefaultEdge = memo(_DefaultEdge);
