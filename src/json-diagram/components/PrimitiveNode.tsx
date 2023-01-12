import { CSS, Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { NodeProps } from 'reactflow';
import { useRecoilValue } from 'recoil';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';
import { hoveredNodeDetailsAtom } from '../../store/node-detail-view/node-detail-view.atom';
import { HoveringBlueDot } from './HoveringBlueDot';
import { NodeShell } from './NodeShell';
import { TargetHandle } from './TargetHandle';

/**
 * PrimitiveNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have.
 */
const _PrimitiveNode = ({ id, data }: NodeProps<PrimitiveNodeData>) => {
  const hoveredNodeDetails = useRecoilValue(hoveredNodeDetailsAtom);

  const textCss: CSS = useMemo(
    () => ({
      textAlign: 'center',
      paddingRight: '$4',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    }),
    []
  );

  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(({ nodeId }) => nodeId === id);

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Primitive}>
      <TargetHandle id={id} />

      <Text css={textCss}>{data.stringifiedJson}</Text>

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
    </NodeShell>
  );
};

export const PrimitiveNode = memo(_PrimitiveNode);
