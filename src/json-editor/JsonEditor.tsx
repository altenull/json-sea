import Editor from '@monaco-editor/react';

const JsonEditor = () => {
  return (
    <Editor
      width="30vw"
      height="100vh"
      theme="vs-dark"
      defaultLanguage="json"
      onChange={(value) => {
        console.log('value', value);
      }}
      defaultValue="// some comment"
    />
  );
};

export default JsonEditor;
