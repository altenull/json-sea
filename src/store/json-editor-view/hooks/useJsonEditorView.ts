import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { isJsonEditorVisibleAtom } from '../json-editor-view.atom';

export const useJsonEditorView = () => {
  const [isJsonEditorVisible, setIsJsonEditorVisible] = useRecoilState(isJsonEditorVisibleAtom);

  const toggleJsonEditor = useCallback(() => {
    setIsJsonEditorVisible((prev: boolean) => !prev);
  }, [setIsJsonEditorVisible]);

  return {
    isJsonEditorVisible,
    toggleJsonEditor,
  };
};
