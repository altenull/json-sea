# Module: DetailPrimitive

**File:** `\src\node-detail\components\DetailPrimitive.tsx`

## Overview

Module `DetailPrimitive` contains 1 analyzed entities.

```
'use client';

import { CardBody, CardHeader } from "@heroui/card";
import { ReactElement, isValidElement, memo, useEffect, useMemo, useState } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { BooleanChip } from '../../ui/components/BooleanChip';
import { NullChip } from '../../ui/components/NullChip';
import { isBoolean, isNull, isNumber, isString } from '../../utils/json.util';
import { NumberInspector } from '../primitive/components/NumberInspector';
import { StringInspector } from '../primitive/components/StringInspector';
import { ALL_FALSE_STRING_SUBTYPE_VALIDATOR } from '../primitive/constants/string-subtype.constant';
import { StringSubtypeValidator, validateStringSubtype } from '../primitive/helpers/string-subtype.helper';
import { DataTypeText } from './DataTypeText';

type Props = {
  chip?: ReactElement;
  value: string | number | boolean | null;
};

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

const _DetailPrimitive = ({ chip, value }: Props) => {
  const [isStringSubtypeLoading, setIsStringSubtypeLoading] = useState<boolean>(isString(value));
  const [stringSubtypeValidator, setStringSubtypeValidator] = useState<StringSubtypeValidator>(
    ALL_FALSE_STRING_SUBTYPE_VALIDATOR,
  );

  
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `DetailPrimitive.getStringSubtypeText` | function | No description |

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
