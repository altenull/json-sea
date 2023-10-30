'use client';

import { Resizable } from 're-resizable';
import { useJsonEditorViewStore } from '../../store/json-editor-view/json-editor-view.store';
import { JsonEditor } from './JsonEditor';

const _ResizableJsonEditor = () => {
  const isJsonEditorVisible = useJsonEditorViewStore((state) => state.isJsonEditorVisible);

  return (
    <Resizable
      style={{
        overflow: 'hidden',
        display: isJsonEditorVisible ? 'initial' : 'none',
      }}
      defaultSize={{
        width: 320,
        height: '100%',
      }}
      minWidth={272}
      maxWidth={560}
      enable={{
        right: true,
      }}
    >
      <JsonEditor />
    </Resizable>
  );
};

export const ResizableJsonEditor = _ResizableJsonEditor;
