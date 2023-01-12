import { Card, Grid } from '@nextui-org/react';
import { ForwardedRef, forwardRef, Fragment, memo, useCallback } from 'react';
import { InferredDataType } from '../enums/inferred-data-type.enum';
import { InferredDataTypeText } from './InferredDataTypeText';
import { PropertyKeyBadge } from './PropertyKeyBadge';

type Props = {
  propertyKeys: string[];
  inferredDataType: InferredDataType;
  children: React.ReactNode;
};

const _InferredDetailCard = (
  { propertyKeys, inferredDataType, children }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const renderPropertyKeyBadges = useCallback(() => {
    return propertyKeys.map((propertyK: string, index: number, selfArray: string[]) => {
      const isLast: boolean = index === selfArray.length - 1;

      return (
        <Fragment key={propertyK}>
          <PropertyKeyBadge inferred propertyK={propertyK} />
          {!isLast && ` + `}
        </Fragment>
      );
    });
  }, [propertyKeys]);

  return (
    <Card ref={ref} variant="bordered" isHoverable>
      <Card.Header>
        <Grid.Container direction="column">
          <Grid>{renderPropertyKeyBadges()}</Grid>
          <Grid>
            <InferredDataTypeText dataType={inferredDataType} />
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ paddingTop: 0, paddingBottom: '$sm' }}>{children}</Card.Body>
    </Card>
  );
};

export const InferredDetailCard = memo(forwardRef<HTMLDivElement, Props>(_InferredDetailCard));
