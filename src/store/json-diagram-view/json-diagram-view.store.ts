import { Node } from 'reactflow';
import { create } from 'zustand';

type State = {
  selectedNodeId: string | null;
};

type Actions = {
  selectNode: (nodeId: Node['id']) => void;
  resetSelectedNode: () => void;
  resetJsonDiagramViewStore: () => void;
};

const initialState: State = {
  selectedNodeId: null,
};

export const useJsonDiagramViewStore = create<State & Actions>((set) => ({
  ...initialState,
  selectNode: (nodeId: Node['id']) => set(() => ({ selectedNodeId: nodeId })),
  // TODO: Find out the way of calling `resetSelectedNode` when another store's state changed.
  resetSelectedNode: () => set(() => ({ selectedNodeId: initialState.selectedNodeId })),
  resetJsonDiagramViewStore: () => set(initialState),
}));
