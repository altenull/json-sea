# string-subtype.helper.isValidEmail

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts` (lines 19-24)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(dirtyEmail: string): boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(dirtyEmail.toLowerCase());
}
```

## Docstring

_No docstring provided._

## Source

```
const isValidEmail = (dirtyEmail: string): boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(dirtyEmail.toLowerCase());
};
```

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
