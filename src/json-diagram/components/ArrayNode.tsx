import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { addPrefixChain } from '../../store/json-engine/helpers/json-parser.helper';
import { ArrayNodeData } from '../../store/json-engine/types/sea-node.type';
import { useNodeDetailViewStore } from '../../store/node-detail-view/node-detail-view.store';
import { Text } from '../../ui/components/Text';
import { isEmptyArray } from '../../utils/array.util';
import { encloseSquareBrackets } from '../../utils/string.util';
import { ROOT_NODE_NAME } from '../constants/root-node.constant';
import { useHighlighter } from '../hooks/useHighlighter';
import { ChainHandle } from './ChainHandle';
import { DefaultHandle } from './DefaultHandle';
import { HoveringBlueDot } from './HoveringBlueDot';
import { NodeShell } from './NodeShell';

/**
 * ArrayNode `<Handle>` Details
 *
 * source: can have if array includes at least one item.
 * target: always have except for RootNode.
 */
const _ArrayNode = ({ id, data }: NodeProps<ArrayNodeData>) => {
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);
  const { isHighlightNode } = useHighlighter();

  const { arrayIndex, items, isRootNode } = data;

  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(({ nodeId }) => nodeId === id);

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Array} isHighlight={isHighlightNode(id)}>
      {!isRootNode && <DefaultHandle id={id} type="target" />}
      <ChainHandle id={addPrefixChain(id)} type="target" />

      <Text className="m-auto">{isRootNode ? ROOT_NODE_NAME : encloseSquareBrackets(arrayIndex)}</Text>

      {!isEmptyArray(items) && <DefaultHandle id={id} type="source" />}

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
      <ChainHandle id={addPrefixChain(id)} type="source" />
    </NodeShell>
  );
};

export const ArrayNode = memo(_ArrayNode);
