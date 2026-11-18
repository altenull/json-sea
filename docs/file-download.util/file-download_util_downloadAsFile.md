# file-download.util.downloadAsFile

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\file-download.util.ts` (lines 1-10)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(dataUrl: string, fileName: string) => {
  const anchor: HTMLAnchorElement = document.createElement('a');

  anchor.style.display = 'none';
  anchor.setAttribute('download', fileName);
  anchor.setAttribute('href', dataUrl);

  anchor.click();
  anchor.remove();
}
```

## Docstring

_No docstring provided._

## Source

```
export const downloadAsFile = (dataUrl: string, fileName: string) => {
  const anchor: HTMLAnchorElement = document.createElement('a');

  anchor.style.display = 'none';
  anchor.setAttribute('download', fileName);
  anchor.setAttribute('href', dataUrl);

  anchor.click();
  anchor.remove();
};
```

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
