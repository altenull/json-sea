import { CSS, Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { NodeProps } from 'reactflow';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { addPrefixChain } from '../../store/json-engine/helpers/json-parser.helper';
import { PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';
import { useNodeDetailViewStore } from '../../store/node-detail-view/node-detail-view.store';
import { BooleanBadge } from '../../ui/components/BooleanBadge';
import { NullBadge } from '../../ui/components/NullBadge';
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
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);

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
      <ChainHandle id={addPrefixChain(id)} type="target" />

      <Text css={textCss} color={data.dataType === JsonDataType.Number ? '$green800' : undefined}>
        {data.dataType === JsonDataType.String && data.stringifiedJson}

        {data.dataType === JsonDataType.Number && data.value}

        {data.dataType === JsonDataType.Boolean && <BooleanBadge value={data.value as boolean} size="xs" />}

        {data.dataType === JsonDataType.Null && <NullBadge size="xs" />}
      </Text>

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
      <ChainHandle id={addPrefixChain(id)} type="source" />
    </NodeShell>
  );
};

export const PrimitiveNode = memo(_PrimitiveNode);
