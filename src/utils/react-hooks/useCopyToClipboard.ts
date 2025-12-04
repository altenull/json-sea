'use client';

import { useState } from 'react';

type CopiedText = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<CopiedText>(null);

  const copyToClipboard: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  const reset = () => setCopiedText(null);

  return { copiedText, copyToClipboard, reset };
};
