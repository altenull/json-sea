import { CSS, Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { NodeProps } from 'reactflow';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';
import { NodeShell } from './NodeShell';
import { TargetHandle } from './TargetHandle';

/**
 * PrimitiveNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have.
 */
const _PrimitiveNode = ({ id, data }: NodeProps<PrimitiveNodeData>) => {
  const textCss: CSS = useMemo(
    () => ({
      textAlign: 'center',
      paddingRight: '$2',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    }),
    []
  );

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Primitive}>
      <TargetHandle id={id} />

      <Text css={textCss}>{data.stringifiedJson}</Text>
    </NodeShell>
  );
};

export const PrimitiveNode = memo(_PrimitiveNode);
