import { atom } from 'recoil';

export const JSON_EDITOR_VIEW_PREFIX = '@json-editor-view';

export const isJsonEditorVisibleAtom = atom<boolean>({
  key: `${JSON_EDITOR_VIEW_PREFIX}/isJsonEditorVisibleAtom`,
  default: true,
});
