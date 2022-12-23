'use client';

import { useState } from 'react';

type CopiedText = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success
type ClearFn = () => Promise<boolean>; // Return success

const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<CopiedText>(null);

  const copyToClipboard: CopyFn = async (text) => {
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

  const clearClipboard: ClearFn = async () => {
    try {
      await navigator.clipboard.writeText('');
      setCopiedText(null);
      return true;
    } catch (error) {
      console.warn('Clear failed', error);
      setCopiedText(null);
      return false;
    }
  };

  return { copiedText, copyToClipboard, clearClipboard };
};

export default useCopyToClipboard;
