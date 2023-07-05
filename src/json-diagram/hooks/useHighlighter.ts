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

export const useHighlighter = () => {
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);
  const edges = useEdges();

  const highlightedEdges: Edge[] = edges.filter((edge) => isConnectedEdgeToHovered(edge, hoveredNodeDetails));

  const isHighlightEdge = (edgeId: string) => highlightedEdges.some(({ id }) => id === edgeId);

  /**
   * If the left edge is highlighted, the node connected to left edge should also be highlighted.
   * Therefore, check `target` value.
   */
  const isHighlightNode = (nodeId: string) => highlightedEdges.some(({ target }) => target === nodeId);

  return { isHighlightEdge, isHighlightNode } as const;
};
