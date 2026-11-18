# UriTable._UriTable

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\UriTable.tsx` (lines 25-39)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ httpUri }: Props) => {
  const getUriTableRows = useCallback((httpUri: HttpUri): PropertyValueTableRow[] => {
    const httpUrlObject: URL = new URL(httpUri);

    return DISPLAY_TARGET_URL_PROPERTIES.filter((urlProperty) => httpUrlObject[urlProperty].length > 0).map(
      (urlProperty) =>
        ({
          property: urlProperty,
          value: httpUrlObject[urlProperty],
        } as PropertyValueTableRow)
    );
  }, []);

  return <PropertyValueTable rows={getUriTableRows(httpUri)} ariaLabel="URL table" />;
}
```

## Docstring

_No docstring provided._

## Source

```
const _UriTable = ({ httpUri }: Props) => {
  const getUriTableRows = useCallback((httpUri: HttpUri): PropertyValueTableRow[] => {
    const httpUrlObject: URL = new URL(httpUri);

    return DISPLAY_TARGET_URL_PROPERTIES.filter((urlProperty) => httpUrlObject[urlProperty].length > 0).map(
      (urlProperty) =>
        ({
          property: urlProperty,
          value: httpUrlObject[urlProperty],
        } as PropertyValueTableRow)
    );
  }, []);

  return <PropertyValueTable rows={getUriTableRows(httpUri)} ariaLabel="URL table" />;
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 1
- Features: 0

## Callers

None

## Callees

None
