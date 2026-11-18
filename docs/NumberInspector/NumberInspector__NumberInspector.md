# NumberInspector._NumberInspector

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\NumberInspector.tsx` (lines 10-19)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ value }: Props) => {
  const { intlNumberFormat } = useIntlNumberFormat();

  return (
    <>
      <TextCopyBox text={`${value}`} />
      <Text className="pr-2 text-right text-sm font-light text-default-400">{intlNumberFormat.format(value)}</Text>
    </>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _NumberInspector = ({ value }: Props) => {
  const { intlNumberFormat } = useIntlNumberFormat();

  return (
    <>
      <TextCopyBox text={`${value}`} />
      <Text className="pr-2 text-right text-sm font-light text-default-400">{intlNumberFormat.format(value)}</Text>
    </>
  );
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Callers

None

## Callees

None
