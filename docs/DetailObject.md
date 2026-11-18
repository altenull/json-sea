# Module: DetailObject

**File:** `\src\node-detail\components\DetailObject.tsx`

## Overview

Module `DetailObject` contains 1 analyzed entities.

```
import { Button } from "@heroui/button";
import { CardBody, CardHeader } from "@heroui/card";
import { ReactElement, isValidElement, memo, useMemo } from 'react';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { formatCounting } from '../../utils/string.util';
import { DataTypeText } from './DataTypeText';

type Props = {
  chip?: ReactElement;
  obj: object;
  childObjectNodeId: string;
};

const _DetailObject = ({ chip, obj, childObjectNodeId }: Props) => {
  const selectNode = useJsonDiagramViewStore((state) => state.selectNode);

  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(obj);
    const counting: string = formatCounting(Object.keys(obj).length, 'property', 'properties');

    return `${jsonDataType} ${counting}`;
  }, [obj]);

  return (
    <>
      <CardHeader>
        <div className="flex flex-col gap-1">
          {isValidElement(chip) && chip}
          <DataTypeText value={dataTypeText} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-0">
        <Button variant="flat" size="sm" color="primary" onPress={() => selectNode(childObjectNodeId)}>
          View object
        </Button>
      </CardBody>
    </>
  );
};

export const DetailObject = memo(_DetailObject);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `DetailObject._DetailObject` | function | No description |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
