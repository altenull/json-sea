import { Button, Card, Grid } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedNodeIdAtom } from '../../../store/json-diagram-view/json-diagram-view.atom';
import { seaNodesAndEdgesSelector } from '../../../store/json-engine/json-engine.selector';
import { isArray, isObject, isString } from '../../../utils/json.util';
import { JsonDataTypeText } from '../../components/JsonDataTypeText';
import { PrimitiveInspector } from '../../primitive/components/PrimitiveInspector';
import { ArrayInspector } from './ArrayInspector';
import { ArrayItemNameBadge } from './ArrayItemNameBadge';

type Props = {
  parentNodeId: string;
  arrayItemIndex: number;
  arrayItemName: string; // e.g. 'something[0]', 'array[3][2]', ...
  value: any;
};

// TODO: Refactoring (PropertyCard)
const _ArrayItemCard = ({ parentNodeId, arrayItemIndex, arrayItemName, value }: Props) => {
  const [, edges] = useRecoilValue(seaNodesAndEdgesSelector);
  const setSelectedNodeId = useSetRecoilState(selectedNodeIdAtom);

  const childObjectNodeId: string | null = useMemo(() => {
    if (!isObject(value)) {
      return null;
    }

    const connectedNodeIds: string[] = edges.filter((edge) => edge.source === parentNodeId).map((edge) => edge.target);
    const uniqConnectedNodeIds: string[] = Array.from(new Set(connectedNodeIds));

    return uniqConnectedNodeIds[arrayItemIndex];
  }, [value, edges, parentNodeId, arrayItemIndex]);

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

export const ArrayItemCard = memo(_ArrayItemCard);
