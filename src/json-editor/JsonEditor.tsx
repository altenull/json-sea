'use client';

import Editor from '@monaco-editor/react';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { latestValidStringifiedJsonAtom, stringifiedJsonAtom } from '../store/json-engine/json-engine.atom';
import { DEFAULT_STRINGIFIED_JSON } from '../store/json-engine/json-engine.constant';
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
    <Editor
      width="540px"
      height="100vh"
      theme="vs-dark"
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
  );
};

export const JsonEditor = _JsonEditor;
