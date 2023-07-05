import { Edge, useEdges } from 'reactflow';
import { HoveredNodeDetail, useNodeDetailViewStore } from '../../store/node-detail-view/node-detail-view.store';
import { isString } from '../../utils/json.util';

const isConnectedEdgeToHovered = (edge: Edge, hoveredNodeDetails: HoveredNodeDetail[]): boolean => {
  const { source, sourceHandle, target } = edge;

  return hoveredNodeDetails.some(({ nodeId, propertyK }) => {
    if (isString(propertyK)) {
      return nodeId === source && propertyK === sourceHandle; // Hovered from `ObjectNodeDetail`
    } else {
      return nodeId === target; // Hovered from `ArrayNodeDetail` or `PrimitiveNodeDetail`
    }
  });
};

export const useHighlightedEdges = () => {
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);
  const edges = useEdges();

  const highlightedEdgeIds: string[] = edges
    .filter((edge) => isConnectedEdgeToHovered(edge, hoveredNodeDetails))
    .map(({ id }) => id);

  return { highlightedEdgeIds } as const;
};
