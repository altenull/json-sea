import { CSS, Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { NodeProps } from 'reactflow';
import { useRecoilValue } from 'recoil';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { addPrefixChainEdge } from '../../store/json-engine/helpers/json-parser.helper';
import { PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';
import { hoveredNodeDetailsAtom } from '../../store/node-detail-view/node-detail-view.atom';
import { ChainHandle } from './ChainHandle';
import { DefaultHandle } from './DefaultHandle';
import { HoveringBlueDot } from './HoveringBlueDot';
import { NodeShell } from './NodeShell';

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
      <DefaultHandle id={id} type="target" />
      <ChainHandle id={addPrefixChainEdge(id)} type="target" />

      <Text css={textCss}>{data.stringifiedJson}</Text>

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
      <ChainHandle id={addPrefixChainEdge(id)} type="source" />
    </NodeShell>
  );
};

export const PrimitiveNode = memo(_PrimitiveNode);
