import { Edge } from 'reactflow';

export const getParentNodeId = (edges: Edge[], selfNodeId: string): string => {
  return edges.find(({ target }) => target === selfNodeId)?.source as string;
};
