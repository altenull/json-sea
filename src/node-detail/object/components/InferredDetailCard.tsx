import { Card, CardBody, CardHeader } from '@nextui-org/card';
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
