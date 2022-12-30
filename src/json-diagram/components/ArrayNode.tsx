import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ArrayNodeData } from '../../store/json-engine/types/sea-node.type';
import { handleStyle } from '../styles/handle.style';
import { NodeShell } from './NodeShell';
import { TargetHandle } from './TargetHandle';

/**
 * ArrayNode `<Handle>` Details
 *
 * source: can have if array includes at least one item.
 * target: always have.
 */
const _ArrayNode = ({ id, data }: NodeProps<ArrayNodeData>) => {
  const { arrayIndex, items } = data;

  const isEmpty: boolean = items.length < 1;

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Array}>
      <TargetHandle id={id} />

      <Text css={{ margin: 'auto' }}>{arrayIndex}</Text>

      {!isEmpty && <Handle style={handleStyle} id={id} type="source" position={Position.Right} />}
    </NodeShell>
  );
};

export const ArrayNode = memo(_ArrayNode);
