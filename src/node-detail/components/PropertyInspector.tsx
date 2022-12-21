import { Button } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from '../../../stitches.config';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { seaNodesAndEdgesSelector } from '../../store/json-engine/json-engine.selector';
import { isString } from '../../utils/json.util';

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
      <span>{propertyK} :</span>

      {isString(childObjectNodeId) ? (
        <Button flat size="sm" color="primary" onClick={() => setSelectedNodeId(childObjectNodeId)}>
          View
        </Button>
      ) : (
        <span>{JSON.stringify(propertyV)}</span>
      )}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid gray',
  fontSize: '13px',
});

export const PropertyInspector = memo(_PropertyInspector);
