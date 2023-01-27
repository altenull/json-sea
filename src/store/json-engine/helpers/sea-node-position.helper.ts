import dagre from 'dagre';
import { Edge, XYPosition } from 'reactflow';
import { sizes } from '../../../ui/constants/sizes.constant';
import { SeaNode } from '../types/sea-node.type';
import { isArraySeaNode, isObjectSeaNode, isPrimitiveSeaNode } from './sea-node.helper';

export const getXYPosition = (depth: number): XYPosition => {
  const x: number = depth * sizes.nodeMaxWidth + depth * sizes.nodeGap;
  const y: number = 0; // y will be calculated in `getLayoutedSeaNodes` function with `dagre` library later.

  return { x, y } as XYPosition;
};

const calculateSeaNodeHeight = (seaNode: SeaNode): number => {
  if (isArraySeaNode(seaNode)) {
    return sizes.arrayNodeSize;
  }

  const NODE_TOP_BOTTOM_PADDING: number = sizes.nodePadding * 2;

  if (isObjectSeaNode(seaNode)) {
    return NODE_TOP_BOTTOM_PADDING + sizes.nodeContentHeight * Object.keys(seaNode.data.obj).length;
  }

  if (isPrimitiveSeaNode(seaNode)) {
    return NODE_TOP_BOTTOM_PADDING + sizes.nodeContentHeight * 1;
  }

  return 0;
};

/**
 * @reference https://reactflow.dev/docs/examples/layout/dagre/
 */
export const getLayoutedSeaNodes = (seaNodes: SeaNode[], edges: Edge[]): SeaNode[] => {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'LR' }); // 'LR' is Left to Right direction.

  seaNodes.forEach((node: SeaNode) => {
    dagreGraph.setNode(node.id, { width: sizes.nodeMaxWidth, height: calculateSeaNodeHeight(node) });
  });

  edges
    .filter(({ type }) => type === 'default') // Do not consider 'chain' edge.
    .forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

  dagre.layout(dagreGraph);

  return seaNodes.map((node: SeaNode) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const nodeHeight: number = calculateSeaNodeHeight(node);

    return {
      ...node,
      // 'x' is already set at this moment because of `getXYPosition` function.
      position: {
        ...node.position,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });
};
