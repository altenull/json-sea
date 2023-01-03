'use client';

import Editor from '@monaco-editor/react';
import { styled, useTheme } from '@nextui-org/react';
import { useCallback } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { latestValidStringifiedJsonAtom, stringifiedJsonAtom } from '../../store/json-engine/json-engine.atom';
import { DEFAULT_STRINGIFIED_JSON } from '../../store/json-engine/json-engine.constant';
import { sizes } from '../../ui/constants/sizes.constant';
import { isValidJson } from '../../utils/json.util';
import { JsonEditorConsole } from './JsonEditorConsole';

// TODO: useDefferedValue hook to opt?
const _JsonEditor = () => {
  const [stringifiedJson, setStringifiedJson] = useRecoilState(stringifiedJsonAtom);
  const setLatestValidStringifiedJson = useSetRecoilState(latestValidStringifiedJsonAtom);
  const resetSelectedNodeId = useResetRecoilState(selectedNodeIdAtom);

  const { isDark } = useTheme();

  const handleChange = useCallback(
    (value: string | undefined) => {
      if (value === undefined) return;

      setStringifiedJson(value);

      if (isValidJson(value)) {
        setLatestValidStringifiedJson(value);
        resetSelectedNodeId();
      }
    },
    [setStringifiedJson, setLatestValidStringifiedJson, resetSelectedNodeId]
  );

  return (
    <StyledHost>
      <Editor
        theme={isDark ? 'vs-dark' : 'light'}
        defaultLanguage="json"
        options={{
          minimap: {
            enabled: false,
          },
          scrollbar: {
            horizontal: 'hidden',
            vertical: 'hidden',
          },
          overviewRulerLanes: 0,
        }}
        defaultValue={DEFAULT_STRINGIFIED_JSON}
        value={stringifiedJson}
        onChange={handleChange}
      />

      <JsonEditorConsole
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  position: 'relative',
  borderRight: '1px solid $border',
  minWidth: sizes.jsonEditorWidth,
  height: '100%',
});

export const JsonEditor = _JsonEditor;
