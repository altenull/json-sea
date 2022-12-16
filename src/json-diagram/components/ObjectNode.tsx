import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { styled } from '../../../stitches.config';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
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
    <NodeShell nodeType={NodeType.Object}>
      {/* TODO: RootNode doesn't have any Handle. */}
      {/* TODO: Handle empty object ({}) */}
      <Handle id={id} type="target" position={Position.Left} style={{ background: '#555' }} />

      <StyledNodeHeader>
        I{`'`}m ObjectNode (id: {id})
      </StyledNodeHeader>

      {Object.entries(data.value).map(([objKey, objValue]) => {
        const { isPrimitiveData } = validateJsonDataType(objValue);

        return (
          <StyledField key={objKey}>
            <span style={{ color: 'blueviolet' }}>
              {`"`}
              {objKey}
              {`"`}
            </span>
            {isPrimitiveData && <span>{JSON.stringify(objValue)}</span>}
            <Handle id={objKey} type="source" position={Position.Right} style={{ background: '#ff0' }} />
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
  position: 'relative',
  border: '1px solid $gray400',
  padding: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ObjectNode = memo(_ObjectNode);
