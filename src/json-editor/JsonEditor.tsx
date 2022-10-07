import Editor from '@monaco-editor/react';
import { useRecoilState } from 'recoil';
import { jsonCodeAtom } from '../../store/json-engine/json-engine.atoms';
import { DEFAULT_JSON_CODE } from '../../store/json-engine/json-engine.constants';

const JsonEditor = () => {
  const [jsonCode, setJsonCode] = useRecoilState(jsonCodeAtom);

  return (
    <Editor
      width="480px"
      height="100vh"
      theme="vs-dark"
      defaultLanguage="json"
      onChange={(value: string | undefined) => setJsonCode(value as string)}
      defaultValue={DEFAULT_JSON_CODE}
      value={jsonCode}
    />
  );
};

export default JsonEditor;
