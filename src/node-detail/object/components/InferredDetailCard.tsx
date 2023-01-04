import { Card, Grid } from '@nextui-org/react';
import { Fragment, memo, useCallback } from 'react';
import { InferredDataTypeText } from './InferredDataTypeText';
import { PropertyKeyBadge } from './PropertyKeyBadge';
import { InferredDataType } from '../enums/inferred-data-type.enum';

type Props = {
  propertyKeys: string[];
  inferredDataType: InferredDataType;
  children: React.ReactNode;
};

const _InferredDetailCard = ({ propertyKeys, inferredDataType, children }: Props) => {
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
    <Card variant="bordered">
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

export const InferredDetailCard = memo(_InferredDetailCard);
