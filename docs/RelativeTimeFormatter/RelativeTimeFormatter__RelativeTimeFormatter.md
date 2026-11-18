# RelativeTimeFormatter._RelativeTimeFormatter

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\RelativeTimeFormatter.tsx` (lines 9-13)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ unixTimestamp }: Props) => {
  useIntervallyForceUpdate(1000);

  return <>{format(unixTimestamp)}</>;
}
```

## Docstring

_No docstring provided._

## Source

```
const _RelativeTimeFormatter = ({ unixTimestamp }: Props) => {
  useIntervallyForceUpdate(1000);

  return <>{format(unixTimestamp)}</>;
};
```

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
