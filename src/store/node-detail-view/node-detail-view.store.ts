import { create } from 'zustand';

export type HoveredNodeDetail = {
  nodeId: string;
  propertyK?: string; // Will be set when a `PropertyCard` component is hovered. (`PropertyCard` is used for Object)
};

type State = {
  hoveredNodeDetails: HoveredNodeDetail[];
};

type Actions = {
  setHoveredNodeDetails: (hoveredNodeDetails: HoveredNodeDetail[]) => void;
  resetHoveredNodeDetails: () => void;
  resetNodeDetailViewStore: () => void;
};

const initialState: State = {
  hoveredNodeDetails: [],
};

export const useNodeDetailViewStore = create<State & Actions>((set) => ({
  ...initialState,
  setHoveredNodeDetails: (hoveredNodeDetails: HoveredNodeDetail[]) => set(() => ({ hoveredNodeDetails })),
  resetHoveredNodeDetails: () => set(() => ({ hoveredNodeDetails: initialState.hoveredNodeDetails })),
  resetNodeDetailViewStore: () => {
    set(initialState);
  },
}));
