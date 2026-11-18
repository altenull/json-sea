# Module: DetailArray

**File:** `\src\node-detail\components\DetailArray.tsx`

## Overview

Module `DetailArray` contains 1 analyzed entities.

```
import { CardBody, CardHeader } from "@heroui/card";
import { ReactElement, isValidElement, memo, useMemo } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { formatCounting } from '../../utils/string.util';
import { ArrayInspector } from '../array/components/ArrayInspector';
import { DataTypeText } from './DataTypeText';

type Props = {
  chip?: ReactElement;
  array: any[];
};

const _DetailArray = ({ chip, array }: Props) => {
  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(array);
    const counting: string = formatCounting(array.length, 'item', 'items');

    return `${jsonDataType} ${counting}`;
  }, [array]);

  return (
    <>
      <CardHeader>
        <div className="flex flex-col gap-1">
          {isValidElement(chip) && chip}
          <DataTypeText value={dataTypeText} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-2">
        <ArrayInspector array={array} />
      </CardBody>
    </>
  );
};

export const DetailArray = memo(_DetailArray);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `DetailArray._DetailArray` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
