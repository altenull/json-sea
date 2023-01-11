export const openLinkAsNewTab = (url: string): void => {
  window?.open(url, '_blank', 'noopener,noreferrer');
};
