import { atom } from 'recoil';

export const JSON_DIAGRAM_VIEW_PREFIX = '@json-diagram-view';

export const selectedNodeIdAtom = atom<string | null>({
  key: `${JSON_DIAGRAM_VIEW_PREFIX}/selectedNodeIdAtom`,
  default: null,
});
