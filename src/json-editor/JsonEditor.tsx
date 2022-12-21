'use client';

import Editor from '@monaco-editor/react';
import { styled } from '@nextui-org/react';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { latestValidStringifiedJsonAtom, stringifiedJsonAtom } from '../store/json-engine/json-engine.atom';
import { DEFAULT_STRINGIFIED_JSON } from '../store/json-engine/json-engine.constant';
import { sizes } from '../ui/constants/sizes.constant';
import { isValidJson } from '../utils/json.util';

// TODO: useDefferedValue hook to opt?
const _JsonEditor = () => {
  const [stringifiedJson, setStringifiedJson] = useRecoilState(stringifiedJsonAtom);
  const [, setLatestValidStringifiedJson] = useRecoilState(latestValidStringifiedJsonAtom);

  const handleChange = useCallback((value: string | undefined) => {
    if (value === undefined) return;

    setStringifiedJson(value);

    if (isValidJson(value)) {
      setLatestValidStringifiedJson(value);
    }
  }, []);

  return (
    <StyledHost>
      <Editor
        theme="light" //  'vs-dark' | 'light'
        defaultLanguage="json"
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleChange}
        defaultValue={DEFAULT_STRINGIFIED_JSON}
        value={stringifiedJson}
      />
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  minWidth: sizes.jsonEditorWidth,
  height: '100%',
});

export const JsonEditor = _JsonEditor;
