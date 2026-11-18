# json.util.isValidJson

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\json.util.ts` (lines 55-62)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(code: string): boolean => {
  try {
    const parsedCode = JSON.parse(code);
    return isObject(parsedCode) || isArray(parsedCode);
  } catch (error) {
    return false;
  }
}
```

## Docstring

_No docstring provided._

## Source

```
export const isValidJson = (code: string): boolean => {
  try {
    const parsedCode = JSON.parse(code);
    return isObject(parsedCode) || isArray(parsedCode);
  } catch (error) {
    return false;
  }
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
