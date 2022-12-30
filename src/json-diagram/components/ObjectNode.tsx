import { memo, useCallback } from 'react';
import { NodeProps, useEdges } from 'reactflow';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ObjectNodeData } from '../../store/json-engine/types/sea-node.type';
import { NodeShell } from './NodeShell';
import { ObjectNodeProperty } from './ObjectNodeProperty';
import { TargetHandle } from './TargetHandle';

/**
 * ObjectNode `<Handle>` Details
 *
 * source: impossible to have.
 * target: always have except for RootNode.
 */
const _ObjectNode = ({ id, data }: NodeProps<ObjectNodeData>) => {
  const { obj, isRootNode } = data;

  const edges = useEdges();

  const renderProperties = useCallback(() => {
    return Object.entries(obj).map(([propertyK, propertyV]) => {
      const hasChildNode: boolean = edges.some((edge) => edge.source === id && edge.sourceHandle === propertyK);

      return (
        <ObjectNodeProperty key={propertyK} propertyK={propertyK} propertyV={propertyV} hasChildNode={hasChildNode} />
      );
    });
  }, [obj, edges, id]);

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Object}>
      {!isRootNode && <TargetHandle id={id} />}

      {renderProperties()}
    </NodeShell>
  );
};

export const ObjectNode = memo(_ObjectNode);
