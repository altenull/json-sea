import Editor from '@monaco-editor/react';
import { Card, useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { formatJsonLikeData } from '../../../utils/json.util';

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
        defaultValue={formatJsonLikeData(array)}
      />
    </Card>
  );
};

export const ArrayInspector = memo(_ArrayInspector);
