import Editor from '@monaco-editor/react';
import { Card, styled, Text, useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { formatJsonLikeData } from '../../../utils/json.util';

type Props = {
  array: any[];
};

const _ArrayInspector = ({ array }: Props) => {
  const { isDark, theme } = useTheme();

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

      {array.length >= 1 && (
        <StyledItemsTotal>
          <Text i size="$xs" weight="medium" color={theme?.colors.accents6.value}>
            {array.length} {array.length === 1 ? 'item' : 'items'}
          </Text>
        </StyledItemsTotal>
      )}
    </Card>
  );
};

const StyledItemsTotal = styled('span', {
  position: 'absolute',
  right: 0,
  top: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$4',
  backgroundColor: '$backgroundAlpha',
  borderBottomLeftRadius: '$xs',
});

export const ArrayInspector = memo(_ArrayInspector);
