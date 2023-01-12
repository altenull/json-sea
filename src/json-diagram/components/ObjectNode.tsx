import { memo, useCallback } from 'react';
import { NodeProps, useEdges } from 'reactflow';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ObjectNodeData } from '../../store/json-engine/types/sea-node.type';
import { HoveringBlueDot } from './HoveringBlueDot';
import { NodeShell } from './NodeShell';
import { ObjectNodeProperty } from './ObjectNodeProperty';
import { TargetHandle } from './TargetHandle';
import { useRecoilValue } from 'recoil';
import { hoveredNodeDetailsAtom } from '../../store/node-detail-view/node-detail-view.atom';

/**
 * ObjectNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have except for RootNode.
 */
const _ObjectNode = ({ id, data }: NodeProps<ObjectNodeData>) => {
  const hoveredNodeDetails = useRecoilValue(hoveredNodeDetailsAtom);
  const edges = useEdges();

  const { obj, isRootNode } = data;

  const renderProperties = useCallback(() => {
    return Object.entries(obj).map(([propertyK, propertyV]) => {
      const hasChildNode: boolean = edges.some((edge) => edge.source === id && edge.sourceHandle === propertyK);

      return (
        <ObjectNodeProperty
          key={propertyK}
          nodeId={id}
          propertyK={propertyK}
          propertyV={propertyV}
          hasChildNode={hasChildNode}
        />
      );
    });
  }, [obj, edges, id]);

  /**
   * undefined `propertyK` means a `ArrayItemCard` is hovered, not `PropertyCard`.
   */
  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(
    ({ nodeId, propertyK }) => nodeId === id && propertyK === undefined
  );

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Object}>
      {!isRootNode && <TargetHandle id={id} />}

      {renderProperties()}

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
    </NodeShell>
  );
};

export const ObjectNode = memo(_ObjectNode);
