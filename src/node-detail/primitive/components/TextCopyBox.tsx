import { Badge, styled, Text } from '@nextui-org/react';
import { memo, useCallback, useEffect } from 'react';
import useCopyToClipboard from '../../../utils/react-hooks/useCopyToClipboard';
import { useHover } from '../../../utils/react-hooks/useHover';

type Props = {
  text: string;
};

const _TextCopyBox = ({ text }: Props) => {
  const [hostRef, isHostHovered] = useHover();
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
          {copiedText === null ? 'Copy?' : 'Copied!'}
        </StyledBadge>
      )}

      <Text css={{ overflowX: 'auto', textAlign: 'right' }} weight="medium">
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
