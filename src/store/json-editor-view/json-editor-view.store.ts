import { create } from 'zustand';

type State = {
  isJsonEditorVisible: boolean;
};

type Actions = {
  toggleJsonEditor: () => void;
  resetJsonEditorViewStore: () => void;
};

const initialState: State = {
  isJsonEditorVisible: true,
};

export const useJsonEditorViewStore = create<State & Actions>((set, get) => ({
  ...initialState,
  toggleJsonEditor: () => {
    const prev = get().isJsonEditorVisible;

    set(() => ({
      isJsonEditorVisible: !prev,
    }));
  },
  resetJsonEditorViewStore: () => set(initialState),
}));
