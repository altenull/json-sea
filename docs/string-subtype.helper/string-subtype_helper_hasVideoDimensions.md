# string-subtype.helper.hasVideoDimensions

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts` (lines 57-59)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(target: HTMLVideoElement): boolean => {
  return target.videoWidth > 0 && target.videoHeight > 0;
}
```

## Docstring

_No docstring provided._

## Source

```
const hasVideoDimensions = (target: HTMLVideoElement): boolean => {
  return target.videoWidth > 0 && target.videoHeight > 0;
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
