import Editor from '@monaco-editor/react';
import { Card, useTheme } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  array: any[];
};

const _ArrayInspector = ({ array }: Props) => {
  const { isDark } = useTheme();

  return (
    <Card variant="bordered" css={{ height: '160px' }}>
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
          readOnly: true,
        }}
        defaultValue={JSON.stringify(array, null, 2)}
      />
    </Card>
  );
};

export const ArrayInspector = memo(_ArrayInspector);
