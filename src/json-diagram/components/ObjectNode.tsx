import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { styled } from '../../../stitches.config';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { ObjectNodeData } from '../../store/json-engine/types/node-data.type';
import { NodeShell } from './NodeShell';

/**
 * ObjectNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have except for RootNode.
 */
const _ObjectNode = ({ id, data }: NodeProps<ObjectNodeData>) => {
  return (
    <NodeShell>
      {/* TODO: RootNode doesn't have any Handle. */}
      {/* TODO: Handle empty object ({}) */}
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} isConnectable={false} />

      <StyledNodeHeader>
        I{`'`}m ObjectNode (id: {id})
      </StyledNodeHeader>

      {Object.entries(data.value).map(([key, value]) => {
        const { isStringType, isNumberType, isBooleanType, isNullType } = validateJsonDataType(value);
        const canRenderValue: boolean = isStringType || isNumberType || isBooleanType || isNullType;

        return (
          <StyledField key={key}>
            <span style={{ color: 'blueviolet' }}>
              {`"`}
              {key}
              {`"`}
            </span>
            {canRenderValue && <span>{value === null ? 'null' : value}</span>}
          </StyledField>
        );
      })}
    </NodeShell>
  );
};

const StyledNodeHeader = styled('h4', {
  fontSize: '22px',
});

const StyledField = styled('div', {
  border: '1px solid $gray400',
  padding: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ObjectNode = memo(_ObjectNode);
