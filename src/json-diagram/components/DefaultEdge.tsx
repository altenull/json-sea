'use client';

import { useTheme } from '@nextui-org/react';
import { CSSProperties, memo, useMemo } from 'react';
import { EdgeProps, getBezierPath } from 'reactflow';
import { useRecoilValue } from 'recoil';
import { hoveredNodeDetailsAtom } from '../../store/node-detail-view/node-detail-view.atom';
import { isString } from '../../utils/json.util';

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
   */
  sourceHandleId,
  target,
}: EdgeProps) => {
  const hoveredNodeDetails = useRecoilValue(hoveredNodeDetailsAtom);
  const { theme } = useTheme();

  const dynamicStyle: CSSProperties = useMemo(() => {
    const isConnectedToHovered: boolean = hoveredNodeDetails.some(({ nodeId, propertyK }) => {
      if (isString(propertyK)) {
        return nodeId === source && propertyK === sourceHandleId; // Hovered from `ObjectNode`
      } else {
        return nodeId === target; // Hovered from `ArrayNode` or `PrimitiveNode`
      }
    });

    return isConnectedToHovered
      ? {
          ...style,
          stroke: theme?.colors.primary.value,
        }
      : style;
  }, [style, source, sourceHandleId, target, hoveredNodeDetails, theme]);

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return <path id={id} style={dynamicStyle} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} />;
};

/**
 * @reference https://reactflow.dev/docs/examples/edges/custom-edge/
 */
export const DefaultEdge = memo(_DefaultEdge);
