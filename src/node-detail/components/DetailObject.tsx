import { Button, Card, Grid } from '@nextui-org/react';
import { isValidElement, memo, ReactElement, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { getJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { formatCounting } from '../../utils/string.util';
import { DataTypeText } from './DataTypeText';

type Props = {
  badge?: ReactElement;
  obj: object;
  childObjectNodeId: string;
};

const _DetailObject = ({ badge, obj, childObjectNodeId }: Props) => {
  const setSelectedNodeId = useSetRecoilState(selectedNodeIdAtom);

  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(obj);
    const counting: string = formatCounting(Object.keys(obj).length, 'property', 'properties');

    return `${jsonDataType} ${counting}`;
  }, [obj]);

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
        <Button flat size="sm" color="primary" onPress={() => setSelectedNodeId(childObjectNodeId)}>
          View object
        </Button>
      </Card.Body>
    </>
  );
};

export const DetailObject = memo(_DetailObject);
