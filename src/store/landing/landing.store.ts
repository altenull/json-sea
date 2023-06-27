/**
 * [2023-02-02]
 * According to the NextUI official guide, the NextUI currently only works in client-side components.
 * It means that `Server Components` feature introduced from Next.js 13 isn't available.
 * @see https://nextui.org/docs/guide/nextui-plus-nextjs#next.js-13
 *
 * Due to above, the CLS(Cumulative Layout Shift) is seriously poor..
 * So I decided to show loading spinner until app UI is stable.
 * @HACK Determine whether to initialize app with `onInit` event of `ReactFlow` component.
 */

import { create } from 'zustand';

type State = {
  isAppInitalized: boolean;
};

type Actions = {
  initApp: () => void;
  resetLandingStore: () => void;
};

const initialState: State = {
  isAppInitalized: false,
};

export const useLandingStore = create<State & Actions>((set) => ({
  ...initialState,
  initApp: () => set(() => ({ isAppInitalized: true })),
  resetLandingStore: () => set(initialState),
}));
