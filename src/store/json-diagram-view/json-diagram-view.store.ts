import { Node } from 'reactflow';
import { create } from 'zustand';

type State = {
  selectedNodeId: string | null;
};

type Action = {
  selectNode: (nodeId: Node['id']) => void;
  resetSelectedNode: () => void;
};

export const useJsonDiagramViewStore = create<State & Action>((set) => ({
  selectedNodeId: null,
  selectNode: (nodeId: Node['id']) => set(() => ({ selectedNodeId: nodeId })),
  // TODO: Find out the way of calling `resetSelectedNode` when another store's state changed.
  resetSelectedNode: () => set(() => ({ selectedNodeId: null })),
}));
