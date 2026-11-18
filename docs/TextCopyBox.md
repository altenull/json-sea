# Module: TextCopyBox

**File:** `\src\node-detail\primitive\components\TextCopyBox.tsx`

## Overview

Module `TextCopyBox` contains 0 analyzed entities.

```
import { Chip } from "@heroui/chip";
import { memo, useCallback, useEffect } from 'react';
import { Text } from '../../../ui/components/Text';
import { isNull } from '../../../utils/json.util';
import { useCopyToClipboard } from '../../../utils/react-hooks/useCopyToClipboard';
import { useHover } from '../../../utils/react-hooks/useHover';

type Props = {
  text: string;
};

const _TextCopyBox = ({ text }: Props) => {
  const [hostRef, isHostHovered] = useHover<HTMLDivElement>();
  const { copiedText, copyToClipboard, reset } = useCopyToClipboard();

  const copyText = useCallback(() => {
    copyToClipboard(text);
  }, [copyToClipboard, text]);

  useEffect(() => {
    if (!isHostHovered) {
      reset();
    }
  }, [isHostHovered, reset]);

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
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 7
- Authors: 1
- Bug fixes: 3
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
