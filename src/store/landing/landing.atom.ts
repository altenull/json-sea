import { atom } from 'recoil';

export const LANDING_PREFIX = '@landing';

export const isAppInitalizedAtom = atom<boolean>({
  key: `${LANDING_PREFIX}/isAppInitalizedAtom`,
  default: false,
});
