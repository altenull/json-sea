import { Card, Grid } from '@nextui-org/react';
import { memo } from 'react';
import { JsonDataTypeText } from '../../components/JsonDataTypeText';
import { PrimitiveInspector } from '../../primitive/components/PrimitiveInspector';
import { ArrayItemNameBadge } from './ArrayItemNameBadge';

type Props = {
  arrayItemName: string; // e.g. 'something[0]', 'array[3][2]', ...
  value: string | number | boolean | null;
};

const _ArrayItemCard = ({ arrayItemName, value }: Props) => {
  return (
    <Card>
      <Card.Header>
        <Grid.Container direction="column">
          <Grid>
            <ArrayItemNameBadge arrayItemName={arrayItemName} />
          </Grid>
          <Grid>
            <JsonDataTypeText value={value} />
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ paddingTop: '$sm' }}>
        <PrimitiveInspector value={value} />
      </Card.Body>
    </Card>
  );
};

export const ArrayItemCard = memo(_ArrayItemCard);
