import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { styled } from '../../../stitches.config';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { ObjectNodeData } from '../../store/json-engine/types/node-data.type';
import { NodeShell } from './NodeShell';
import { TargetHandle } from './TargetHandle';

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
      <TargetHandle id={id} />

      <StyledNodeHeader>
        I{`'`}m ObjectNode (id: {id})
      </StyledNodeHeader>

      {Object.entries(data.value).map(([propertyK, propertyV]) => {
        const { isPrimitiveData } = validateJsonDataType(propertyV);

        return (
          <StyledField key={propertyK}>
            <span style={{ color: 'blueviolet' }}>
              {`"`}
              {propertyK}
              {`"`}
            </span>
            {isPrimitiveData && <span>{JSON.stringify(propertyV)}</span>}
            <Handle id={propertyK} type="source" position={Position.Right} style={{ background: '#ff0' }} />
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