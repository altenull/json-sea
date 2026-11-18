# DetailPrimitive.getStringSubtypeText

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\components\DetailPrimitive.tsx` (lines 21-34)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(stringSubtypeValidator: StringSubtypeValidator): string => {
  if (stringSubtypeValidator.isColor) return '/color';
  if (stringSubtypeValidator.isDatetime) return '/datetime';
  if (stringSubtypeValidator.isEmail) return '/email';
  if (stringSubtypeValidator.isHttpUri) return '/uri';
  if (stringSubtypeValidator.isImage) return '/image';
  if (stringSubtypeValidator.isImageUri) return '/imageUri';
  if (stringSubtypeValidator.isAudio) return '/audio';
  if (stringSubtypeValidator.isAudioUri) return '/audioUri';
  if (stringSubtypeValidator.isVideo) return '/video';
  if (stringSubtypeValidator.isVideoUri) return '/videoUri';

  return '';
}
```

## Docstring

_No docstring provided._

## Source

```
const getStringSubtypeText = (stringSubtypeValidator: StringSubtypeValidator): string => {
  if (stringSubtypeValidator.isColor) return '/color';
  if (stringSubtypeValidator.isDatetime) return '/datetime';
  if (stringSubtypeValidator.isEmail) return '/email';
  if (stringSubtypeValidator.isHttpUri) return '/uri';
  if (stringSubtypeValidator.isImage) return '/image';
  if (stringSubtypeValidator.isImageUri) return '/imageUri';
  if (stringSubtypeValidator.isAudio) return '/audio';
  if (stringSubtypeValidator.isAudioUri) return '/audioUri';
  if (stringSubtypeValidator.isVideo) return '/video';
  if (stringSubtypeValidator.isVideoUri) return '/videoUri';

  return '';
};
```

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
