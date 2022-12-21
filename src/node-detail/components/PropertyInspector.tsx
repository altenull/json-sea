import { Badge, Button, styled, Text } from '@nextui-org/react';
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
    <StyledHost>
      <Badge variant="flat" color="secondary" size="md">
        {`"`}
        {propertyK}
        {`"`}
      </Badge>

      <Text
        h6
        size="$xs"
        css={{
          color: '$gray800',
          marginBottom: '$4',
        }}
      >
        {getJsonDataType(propertyV)}
      </Text>

      {isString(childObjectNodeId) ? (
        <Button flat size="sm" color="primary" onClick={() => setSelectedNodeId(childObjectNodeId)}>
          View
        </Button>
      ) : isArray(propertyV) ? (
        <span>{JSON.stringify(propertyV)}</span>
      ) : (
        <PrimitiveInspector value={propertyV} />
      )}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid #ced4da',
  paddingTop: '16px',
  paddingBottom: '80px',
});

export const PropertyInspector = memo(_PropertyInspector);
