'use client';

import { memo } from 'react';
import { Node } from 'reactflow';
import { useRecoilValue } from 'recoil';
import { styled } from '../../../stitches.config';
import { selectedNodeSelector } from '../../store/json-diagram-view/json-diagram-view.selector';
import { isArrayNode, isObjectNode, isPrimitiveNode } from '../../store/json-engine/helpers/node-type.helper';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData } from '../../store/json-engine/types/node-data.type';

const _NodeDetailFixedPanel = () => {
  const selectedNode: Node<ObjectNodeData | ArrayNodeData | PrimitiveNodeData> | null =
    useRecoilValue(selectedNodeSelector);

  if (selectedNode === null) {
    return null;
  }

  return (
    <StyledHost>
      <p>Node type ({selectedNode.type})</p>

      <br />

      {isObjectNode(selectedNode) && <>{JSON.stringify(selectedNode.data.obj)}</>}
      {isArrayNode(selectedNode) && <>{JSON.stringify(selectedNode.data.arrayIndex)}</>}
      {isPrimitiveNode(selectedNode) && <>{JSON.stringify(selectedNode.data.value)}</>}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  position: 'fixed',
  left: 380,
  top: 48,
  bottom: 0,
  width: 320,
  padding: 16,
  overflow: 'auto',
  backgroundColor: 'aliceblue',
});

export const NodeDetailFixedPanel = memo(_NodeDetailFixedPanel);
