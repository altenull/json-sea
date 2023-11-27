import { Chip } from '@nextui-org/chip';
import { memo, useCallback } from 'react';
import { Text } from '../../../ui/components/Text';
import { isNull } from '../../../utils/json.util';
import { useCopyToClipboard } from '../../../utils/react-hooks/useCopyToClipboard';
import { useHover } from '../../../utils/react-hooks/useHover';

type Props = {
  text: string;
};

const _TextCopyBox = ({ text }: Props) => {
  const [hostRef, isHostHovered] = useHover<HTMLDivElement>();
  const { copiedText, copyToClipboard } = useCopyToClipboard();

  const copyText = useCallback(() => {
    copyToClipboard(text);
  }, [copyToClipboard, text]);

  return (
    <div
      ref={hostRef}
      className="relative flex-1 cursor-pointer rounded-lg p-2 hover:bg-default-100"
      onClick={copyText}
    >
      {isHostHovered && (
        <Chip
          className="absolute left-2 top-1/2 -translate-y-1/2 text-xs opacity-100"
          variant="faded"
          color="success"
          size="sm"
        >
          {isNull(copiedText) ? 'Copy?' : 'Copied!'}
        </Chip>
      )}

      <Text className="overflow-x-auto whitespace-nowrap break-all text-right font-medium">{text}</Text>
    </div>
  );
};

export const TextCopyBox = memo(_TextCopyBox);
