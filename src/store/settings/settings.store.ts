import { create } from 'zustand';
import { localStorageService } from '../../services/local-storage.service';

type State = {
  isMinimapOn: boolean;
  isNodePathOn: boolean;
};

type Actions = {
  toggleMinimap: () => void;
  toggleNodePath: () => void;
  resetSettingsStore: () => void;
};

const initialState: State = {
  isMinimapOn: localStorageService.getItem('settings:minimap'),
  isNodePathOn: localStorageService.getItem('settings:nodePath'),
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
  toggleNodePath: () => {
    const prev = get().isNodePathOn;

    set(() => ({
      isNodePathOn: !prev,
    }));
    localStorageService.setItem('settings:nodePath', !prev);
  },
  resetSettingsStore: () => set(initialState),
}));
