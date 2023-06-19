import { Badge, styled, Text } from '@nextui-org/react';
import { memo, useCallback, useEffect } from 'react';
import { isNull } from '../../../utils/json.util';
import useCopyToClipboard from '../../../utils/react-hooks/useCopyToClipboard';
import { useHover } from '../../../utils/react-hooks/useHover';

type Props = {
  text: string;
};

const _TextCopyBox = ({ text }: Props) => {
  const [hostRef, isHostHovered] = useHover<HTMLDivElement>();
  const { copiedText, copyToClipboard, clearClipboard } = useCopyToClipboard();

  const copyText = useCallback(() => {
    copyToClipboard(text);
  }, [copyToClipboard, text]);

  useEffect(() => {
    if (!isHostHovered) {
      clearClipboard();
    }
  }, [clearClipboard, isHostHovered]);

  return (
    <S_Host ref={hostRef} onClick={copyText}>
      {isHostHovered && (
        <S_Badge variant="flat" color="success" size="xs">
          {isNull(copiedText) ? 'Copy?' : 'Copied!'}
        </S_Badge>
      )}

      <Text
        css={{ overflowX: 'auto', whiteSpace: 'nowrap', wordBreak: 'break-all', textAlign: 'right' }}
        weight="medium"
      >
        {text}
      </Text>
    </S_Host>
  );
};

const S_Host = styled('div', {
  position: 'relative',
  padding: '$4',
  borderRadius: '$xs',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray100',
  },
});

const S_Badge = styled(Badge, {
  position: 'absolute',
  left: '$4',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const TextCopyBox = memo(_TextCopyBox);
