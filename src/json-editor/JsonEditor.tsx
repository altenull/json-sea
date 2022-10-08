import Editor from '@monaco-editor/react';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { jsonCodeAtom, latestValidJsonCodeAtom } from '../../store/json-engine/json-engine.atoms';
import { DEFAULT_JSON_CODE } from '../../store/json-engine/json-engine.constants';
import { isValidJson } from '../utils/json.utils';

const JsonEditor = () => {
  const [jsonCode, setJsonCode] = useRecoilState(jsonCodeAtom);
  const [, setLatestValidJsonCode] = useRecoilState(latestValidJsonCodeAtom);

  const handleChange = useCallback((value: string | undefined) => {
    if (value === undefined) return;

    setJsonCode(value);

    if (isValidJson(value)) {
      setLatestValidJsonCode(value);
    }
  }, []);

  return (
    <Editor
      width="480px"
      height="100vh"
      theme="vs-dark"
      defaultLanguage="json"
      onChange={handleChange}
      defaultValue={DEFAULT_JSON_CODE}
      value={jsonCode}
    />
  );
};

export default JsonEditor;
