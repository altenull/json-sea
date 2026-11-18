# string-subtype.helper.validateStringSubtype

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts` (lines 97-158)
- **Role:** internal
- **Stability:** unknown

## Signature

```
async (v: string): Promise<StringSubtypeValidator> => {
  if (isValidColor(v)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isColor: true,
    };
  }

  if (isValidDate(v)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isDatetime: true,
    };
  }

  if (isValidEmail(v)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isEmail: true,
    };
  }

  const isHttpUri: boolean = isValidHttpUri(v);

  if (await isValidImage(v, isHttpUri)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isImageUri: isHttpUri,
      isImage: !isHttpUri,
    };
  }

  /**
   * @important
   * `isValidVideo` function should be called before `isValidAudio`.
   * Because video and audio are compatible with each otehr.
   */
  if (await isValidVideo(v, isHttpUri)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isVideoUri: isHttpUri,
      isVideo: !isHttpUri,
    };
  }

  if (await isValidAudio(v, isHttpUri)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isAudioUri: isHttpUri,
      isAudio: !isHttpUri,
    };
  }

  if (isHttpUri) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isHttpUri,
    };
  }

  return ALL_FALSE_STRING_SUBTYPE_VALIDATOR;
}
```

## Docstring

_No docstring provided._

## Source

```
export const validateStringSubtype = async (v: string): Promise<StringSubtypeValidator> => {
  if (isValidColor(v)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isColor: true,
    };
  }

  if (isValidDate(v)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isDatetime: true,
    };
  }

  if (isValidEmail(v)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isEmail: true,
    };
  }

  const isHttpUri: boolean = isValidHttpUri(v);

  if (await isValidImage(v, isHttpUri)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isImageUri: isHttpUri,
      isImage: !isHttpUri,
    };
  }

  /**
   * @important
   * `isValidVideo` function should be called before `isValidAudio`.
   * Because video and audio are compatible with each otehr.
   */
  if (await isValidVideo(v, isHttpUri)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isVideoUri: isHttpUri,
      isVideo: !isHttpUri,
    };
  }

  if (await isValidAudio(v, isHttpUri)) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isAudioUri: isHttpUri,
      isAudio: !isHttpUri,
    };
  }

  if (isHttpUri) {
    return {
      ...ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
      isHttpUri,
    };
  }

  return ALL_FALSE_STRING_SUBTYPE_VALIDATOR;
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
