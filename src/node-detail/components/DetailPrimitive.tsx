import { Card, Grid } from '@nextui-org/react';
import { isValidElement, memo, ReactElement, useMemo } from 'react';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { PrimitiveInspector } from '../primitive/components/PrimitiveInspector';
import { DataTypeText } from './DataTypeText';
import { StringSubtypeText } from './StringSubtypeText';

type Props = {
  badge?: ReactElement;
  value: string | number | boolean | null;
};

const _DetailPrimitive = ({ badge, value }: Props) => {
  const dataTypeText: ReactElement = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(value);

    if (jsonDataType === JsonDataType.String) {
      return (
        <>
          {jsonDataType}
          <StringSubtypeText value={value as string} />
        </>
      );
    } else {
      return <>{jsonDataType}</>;
    }
  }, [value]);

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
        <PrimitiveInspector value={value} />

        {/* <>
          {isString(value) && <StringInspector value={value} />}
          {isNumber(value) && <NumberInspector value={value} />}
          {(isBoolean(value) || isNull(value)) && (
            <Badge css={{ marginLeft: 'auto' }} isSquared variant="flat">
              {JSON.stringify(value)}
            </Badge>
          )}
        </> */}
      </Card.Body>
    </>
  );
};

export const DetailPrimitive = memo(_DetailPrimitive);
