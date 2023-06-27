import { create } from 'zustand';
import { localStorageService } from '../../services/local-storage.service';

type State = {
  isMinimapOn: boolean;
};

type Actions = {
  toggleMinimap: () => void;
  resetSettingsStore: () => void;
};

const initialState: State = {
  isMinimapOn: localStorageService.getItem('settings:minimap'),
};

export const useSettingsStore = create<State & Actions>((set, get) => ({
  ...initialState,
  toggleMinimap: () => {
    const prev = get().isMinimapOn;

    set(() => ({
      isMinimapOn: !prev,
    }));
    localStorageService.setItem('settings:minimap', !prev);
  },
  resetSettingsStore: () => set(initialState),
}));
