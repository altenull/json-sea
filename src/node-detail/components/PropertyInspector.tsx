import { Badge, Button, Card, Grid, Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { getJsonDataType, validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { seaNodesAndEdgesSelector } from '../../store/json-engine/json-engine.selector';
import { isArray, isString } from '../../utils/json.util';
import { PrimitiveInspector } from './PrimitiveInspector';

type Props = {
  nodeId: string;
  propertyK: string;
  propertyV: any;
};

const _PropertyInspector = ({ nodeId, propertyK, propertyV }: Props) => {
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
            <Badge variant="flat" color="secondary" size="md">
              {`"`}
              {propertyK}
              {`"`}
            </Badge>
          </Grid>
          <Grid>
            <Text
              h6
              size="$xs"
              css={{
                color: '$gray800',
                margin: 0,
              }}
            >
              {getJsonDataType(propertyV)}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body>
        {isString(childObjectNodeId) ? (
          <Button flat size="sm" color="primary" onClick={() => setSelectedNodeId(childObjectNodeId)}>
            View
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

export const PropertyInspector = memo(_PropertyInspector);
