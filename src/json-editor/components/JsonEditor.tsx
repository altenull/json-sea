'use client';

import Editor from '@monaco-editor/react';
import { styled, useTheme } from '@nextui-org/react';
import { relative } from 'node:path/win32';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { latestValidStringifiedJsonAtom, stringifiedJsonAtom } from '../../store/json-engine/json-engine.atom';
import { DEFAULT_STRINGIFIED_JSON } from '../../store/json-engine/json-engine.constant';
import { sizes } from '../../ui/constants/sizes.constant';
import { isValidJson } from '../../utils/json.util';
import { JsonEditorConsole } from './JsonEditorConsole';

// TODO: useDefferedValue hook to opt?
const _JsonEditor = () => {
  const [stringifiedJson, setStringifiedJson] = useRecoilState(stringifiedJsonAtom);
  const [, setLatestValidStringifiedJson] = useRecoilState(latestValidStringifiedJsonAtom);

  const { isDark } = useTheme();

  const handleChange = useCallback(
    (value: string | undefined) => {
      if (value === undefined) return;

      setStringifiedJson(value);

      if (isValidJson(value)) {
        setLatestValidStringifiedJson(value);
      }
    },
    [setStringifiedJson, setLatestValidStringifiedJson]
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
        onChange={handleChange}
        defaultValue={DEFAULT_STRINGIFIED_JSON}
        value={stringifiedJson}
      />

      <JsonEditorConsole />
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
