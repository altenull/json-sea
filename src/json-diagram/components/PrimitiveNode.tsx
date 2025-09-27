import { semanticColors } from "@heroui/theme";
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { JsonDataType } from '../../store/json-engine/enums/json-data-type.enum';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { addPrefixChain } from '../../store/json-engine/helpers/json-parser.helper';
import { PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';
import { useNodeDetailViewStore } from '../../store/node-detail-view/node-detail-view.store';
import { BooleanChip } from '../../ui/components/BooleanChip';
import { NullChip } from '../../ui/components/NullChip';
import { Text } from '../../ui/components/Text';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';
import { useHighlighter } from '../hooks/useHighlighter';
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
  const { isHighlightNode } = useHighlighter();
  const { theme } = useCustomTheme();

  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(({ nodeId }) => nodeId === id);

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Primitive} isHighlight={isHighlightNode(id)}>
      <DefaultHandle id={id} type="target" />
      <ChainHandle id={addPrefixChain(id)} type="target" />

      <Text
        style={{
          color: data.dataType === JsonDataType.Number ? semanticColors[theme].success[600] : undefined,
        }}
        className="overflow-hidden text-ellipsis whitespace-nowrap pr-4 text-center"
      >
        {data.dataType === JsonDataType.String && data.stringifiedJson}

        {data.dataType === JsonDataType.Number && data.value}

        {data.dataType === JsonDataType.Boolean && <BooleanChip value={data.value as boolean} size="sm" />}

        {data.dataType === JsonDataType.Null && <NullChip size="sm" />}
      </Text>

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
      <ChainHandle id={addPrefixChain(id)} type="source" />
    </NodeShell>
  );
};

export const PrimitiveNode = memo(_PrimitiveNode);
