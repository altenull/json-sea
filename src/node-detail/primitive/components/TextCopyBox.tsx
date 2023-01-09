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
    <StyledHost ref={hostRef} onClick={copyText}>
      {isHostHovered && (
        <StyledBadge variant="flat" color="success" size="xs">
          {isNull(copiedText) ? 'Copy?' : 'Copied!'}
        </StyledBadge>
      )}

      <Text
        css={{ overflowX: 'auto', whiteSpace: 'nowrap', wordBreak: 'break-all', textAlign: 'right' }}
        weight="medium"
      >
        {text}
      </Text>
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  position: 'relative',
  padding: '$4',
  borderRadius: '$xs',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray100',
  },
});

const StyledBadge = styled(Badge, {
  position: 'absolute',
  left: '$4',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const TextCopyBox = memo(_TextCopyBox);
