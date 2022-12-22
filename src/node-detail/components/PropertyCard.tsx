import { Button, Card, Grid } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { seaNodesAndEdgesSelector } from '../../store/json-engine/json-engine.selector';
import { isArray, isString } from '../../utils/json.util';
import { JsonDataTypeText } from './JsonDataTypeText';
import { PrimitiveInspector } from './PrimitiveInspector';
import { PropertyKeyBadge } from './PropertyKeyBadge';

type Props = {
  nodeId: string;
  propertyK: string;
  propertyV: any;
};

const _PropertyCard = ({ nodeId, propertyK, propertyV }: Props) => {
  const [, edges] = useRecoilValue(seaNodesAndEdgesSelector);
  const setSelectedNodeId = useSetRecoilState(selectedNodeIdAtom);

  const childObjectNodeId: string | null = useMemo(() => {
    const { isObjectData } = validateJsonDataType(propertyV);

    if (!isObjectData) {
      return null;
    }

    return edges.find((edge) => edge.source === nodeId && edge.sourceHandle === propertyK)?.target ?? null;
  }, [edges, nodeId, propertyK, propertyV]);

  return (
    <Card>
      <Card.Header>
        <Grid.Container direction="column">
          <Grid>
            <PropertyKeyBadge propertyK={propertyK} />
          </Grid>
          <Grid>
            <JsonDataTypeText value={propertyV} />
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ paddingTop: '$sm' }}>
        {isString(childObjectNodeId) ? (
          <Button flat size="sm" color="primary" onClick={() => setSelectedNodeId(childObjectNodeId)}>
            View object
          </Button>
        ) : isArray(propertyV) ? (
          <span>{JSON.stringify(propertyV)}</span>
        ) : (
          <PrimitiveInspector value={propertyV} />
        )}
      </Card.Body>
    </Card>
  );
};

export const PropertyCard = memo(_PropertyCard);
