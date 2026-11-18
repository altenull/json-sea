# Module: InferredDetailCard

**File:** `\src\node-detail\object\components\InferredDetailCard.tsx`

## Overview

Module `InferredDetailCard` contains 1 analyzed entities.

```
import { Card, CardBody, CardHeader } from "@heroui/card";
import { ForwardedRef, Fragment, forwardRef, memo, useCallback } from 'react';
import { InferredDataType } from '../enums/inferred-data-type.enum';
import { InferredDataTypeText } from './InferredDataTypeText';
import { PropertyKeyChip } from './PropertyKeyChip';

type Props = {
  propertyKeys: string[];
  inferredDataType: InferredDataType;
  children: React.ReactNode;
};

const _InferredDetailCard = (
  { propertyKeys, inferredDataType, children }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const renderPropertyKeyChips = useCallback(() => {
    return propertyKeys.map((propertyK: string, index: number, selfArray: string[]) => {
      const isLast: boolean = index === selfArray.length - 1;

      return (
        <Fragment key={propertyK}>
          <PropertyKeyChip inferred value={propertyK} />
          {!isLast && ` + `}
        </Fragment>
      );
    });
  }, [propertyKeys]);

  return (
    <Card ref={ref} fullWidth shadow="sm" className="group">
      <span className="blue-dot-for-card invisible group-hover:visible" />

      <CardHeader>
        <div className="flex flex-col gap-1">
          <div>{renderPropertyKeyChips()}</div>
          <InferredDataTypeText dataType={inferredDataType} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-0">{children}</CardBody>
    </Card>
  );
};

export const InferredDetailCard = memo(forwardRef<HTMLDivElement, Props>(_InferredDetailCard));
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `InferredDetailCard._InferredDetailCard` | function | No description |

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
