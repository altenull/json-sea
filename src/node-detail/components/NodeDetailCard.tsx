import { Button, Card, Grid } from '@nextui-org/react';
import { memo } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { isArray, isString } from '../../utils/json.util';
import { ArrayInspector } from '../array/components/ArrayInspector';
import { PrimitiveInspector } from '../primitive/components/PrimitiveInspector';
import { JsonDataTypeText } from './JsonDataTypeText';

type Props = {
  badge: React.ReactElement;
  value: any;
  childObjectNodeId: string | null;
};

const _NodeDetailCard = ({ badge, value, childObjectNodeId }: Props) => {
  const setSelectedNodeId = useSetRecoilState(selectedNodeIdAtom);

  return (
    <Card>
      <Card.Header>
        <Grid.Container direction="column">
          <Grid>{badge}</Grid>
          <Grid>
            <JsonDataTypeText value={value} />
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ paddingTop: '$sm' }}>
        {isString(childObjectNodeId) ? (
          <Button flat size="sm" color="primary" onClick={() => setSelectedNodeId(childObjectNodeId)}>
            View object
          </Button>
        ) : isArray(value) ? (
          <ArrayInspector array={value} />
        ) : (
          <PrimitiveInspector value={value} />
        )}
      </Card.Body>
    </Card>
  );
};

export const NodeDetailCard = memo(_NodeDetailCard);
