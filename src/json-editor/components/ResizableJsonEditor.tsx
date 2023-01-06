'use client';

import { Resizable } from 're-resizable';
import { useJsonEditorView } from '../../store/json-editor-view/hooks/useJsonEditorView';
import { sizes } from '../../ui/constants/sizes.constant';
import { JsonEditor } from './JsonEditor';

const _ResizableJsonEditor = () => {
  const { isJsonEditorVisible } = useJsonEditorView();

  return (
    <Resizable
      style={{
        overflow: 'hidden',
        display: isJsonEditorVisible ? 'initial' : 'none',
      }}
      defaultSize={{
        width: sizes.jsonEditorWidth,
        height: '100%',
      }}
      minWidth={sizes.jsonEditorMinWidth}
      maxWidth={sizes.jsonEditorMaxWidth}
      enable={{
        right: true,
      }}
    >
      <JsonEditor />
    </Resizable>
  );
};

export const ResizableJsonEditor = _ResizableJsonEditor;
