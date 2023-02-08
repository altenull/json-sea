export const downloadAsFile = (dataUrl: string, fileName: string) => {
  const anchor: HTMLAnchorElement = document.createElement('a');

  anchor.style.display = 'none';
  anchor.setAttribute('download', fileName);
  anchor.setAttribute('href', dataUrl);

  anchor.click();
  anchor.remove();
};
