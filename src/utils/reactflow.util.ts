import { Edge } from 'reactflow';

export const findParentNodeId = (edges: Edge[], selfNodeId: string): string => {
  return edges.find(({ target }) => target === selfNodeId)?.source as string;
};
