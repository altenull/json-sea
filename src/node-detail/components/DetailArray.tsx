import { Card, Grid } from '@nextui-org/react';
import { isValidElement, memo, ReactElement, useMemo } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { formatCounting } from '../../utils/string.util';
import { ArrayInspector } from '../array/components/ArrayInspector';
import { DataTypeText } from './DataTypeText';

type Props = {
  badge?: ReactElement;
  array: any[];
};

const _DetailArray = ({ badge, array }: Props) => {
  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(array);
    const counting: string = formatCounting(array.length, 'item', 'items');

    return `${jsonDataType} ${counting}`;
  }, [array]);

  return (
    <>
      <Card.Header>
        <Grid.Container direction="column">
          {isValidElement(badge) && <Grid>{badge}</Grid>}

          <Grid>
            <DataTypeText>{dataTypeText}</DataTypeText>
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ paddingTop: 0, paddingBottom: '$sm' }}>
        <ArrayInspector array={array} />
      </Card.Body>
    </>
  );
};

export const DetailArray = memo(_DetailArray);
