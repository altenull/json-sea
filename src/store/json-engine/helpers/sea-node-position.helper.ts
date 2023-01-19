import dagre from 'dagre';
import { Edge, XYPosition } from 'reactflow';
import { sizes } from '../../../ui/constants/sizes.constant';
import { SeaNode } from '../types/sea-node.type';
import { isArraySeaNode, isObjectSeaNode, isPrimitiveSeaNode } from './sea-node.helper';

/**
 * In `getXYPosition` function, only will set position 'x' with depth.
 * Position 'y' will be calculated with `dagre` library later.
 */
export const getXYPosition = (depth: number): XYPosition => {
  const x: number = depth * sizes.nodeMaxWidth + depth * sizes.nodeGap;
  return { x, y: 0 } as XYPosition;
};

export const getSeaNodeHeight = (seaNode: SeaNode): number => {
  const TOP_BOTTOM_PADDING: number = sizes.nodePadding * 2;

  if (isObjectSeaNode(seaNode)) {
    return TOP_BOTTOM_PADDING + sizes.nodeContentHeight * Object.keys(seaNode.data.obj).length;
  } else if (isArraySeaNode(seaNode)) {
    return sizes.arrayNodeSize;
  } else if (isPrimitiveSeaNode(seaNode)) {
    return TOP_BOTTOM_PADDING + sizes.nodeContentHeight * 1;
  } else {
    return 0;
  }
};

/**
 * @reference https://reactflow.dev/docs/examples/layout/dagre/
 */
export const getLayoutedSeaNodes = (seaNodes: SeaNode[], edges: Edge[]): SeaNode[] => {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'LR' }); // Left to Right direction.

  seaNodes.forEach((node: SeaNode) => {
    dagreGraph.setNode(node.id, { width: sizes.nodeMaxWidth, height: getSeaNodeHeight(node) });
  });

  edges
    .filter(({ type }) => type === 'default') // Do not consider 'chain' edge.
    .forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

  dagre.layout(dagreGraph);

  return seaNodes.map((node: SeaNode) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const nodeHeight: number = getSeaNodeHeight(node);

    /**
     * Position 'x' is already set at this moment.
     */
    return {
      ...node,
      position: {
        ...node.position,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });
};
