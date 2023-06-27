import Editor from '@monaco-editor/react';
import { styled, useTheme } from '@nextui-org/react';
import { useCallback } from 'react';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { DEFAULT_STRINGIFIED_JSON } from '../../store/json-engine/json-engine.constant';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { isValidJson } from '../../utils/json.util';
import { JsonEditorConsole } from './JsonEditorConsole';
import { JsonValidityStatus } from './JsonValidityStatus';

// TODO: useDefferedValue hook to optimize?
const _JsonEditor = () => {
  const [stringifiedJson, setStringifiedJson] = useJsonEngineStore((state) => [
    state.stringifiedJson,
    state.setStringifiedJson,
  ]);
  const resetSelectedNode = useJsonDiagramViewStore((state) => state.resetSelectedNode);

  const { theme, isDark } = useTheme();

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      if (value === undefined) return;

      setStringifiedJson(value);

      if (isValidJson(value)) {
        resetSelectedNode();
      }
    },
    [setStringifiedJson, resetSelectedNode]
  );

  return (
    <S_Host>
      <Editor
        theme={isDark ? 'vs-dark' : 'light'}
        defaultLanguage="json"
        options={{
          minimap: {
            enabled: false,
          },
          scrollbar: {
            horizontal: 'hidden',
          },
          overviewRulerLanes: 0,
        }}
        defaultValue={DEFAULT_STRINGIFIED_JSON}
        value={stringifiedJson}
        onChange={handleEditorChange}
      />

      <JsonValidityStatus
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          borderBottomLeftRadius: theme?.radii.xs.value,
        }}
      />

      <JsonEditorConsole
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </S_Host>
  );
};

const S_Host = styled('div', {
  position: 'relative',
  borderRight: '1px solid $border',
  width: '100%',
  height: '100%',
});

export const JsonEditor = _JsonEditor;
