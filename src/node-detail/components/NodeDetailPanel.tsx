'use client';

import { memo } from 'react';
import { Node } from 'reactflow';
import { useRecoilValue } from 'recoil';
import { styled } from '../../../stitches.config';
import { selectedNodeSelector } from '../../store/json-diagram-view/json-diagram-view.selector';
import { isArrayNode, isObjectNode, isPrimitiveNode } from '../../store/json-engine/helpers/node-type.helper';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData } from '../../store/json-engine/types/node-data.type';
import { ArrayNodeDetail } from './ArrayNodeDetail';
import { ObjectNodeDetail } from './ObjectNodeDetail';
import { PrimitiveNodeDetail } from './PrimitiveNodeDetail';

const _NodeDetailPanel = () => {
  const selectedNode: Node<ObjectNodeData | ArrayNodeData | PrimitiveNodeData> | null =
    useRecoilValue(selectedNodeSelector);

  return (
    <StyledHost>
      {selectedNode === null ? (
        <h3>No selected node.</h3>
      ) : (
        <>
          <h3>Node type ({selectedNode.type})</h3>
          <br />

          <p>
            {isObjectNode(selectedNode) && <ObjectNodeDetail data={selectedNode.data} />}
            {isArrayNode(selectedNode) && <ArrayNodeDetail data={selectedNode.data} />}
            {isPrimitiveNode(selectedNode) && <PrimitiveNodeDetail data={selectedNode.data} />}
          </p>
        </>
      )}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  width: 320,
  minWidth: 320,
  minHeight: '100%',
  padding: 16,
  overflow: 'auto',
  backgroundColor: 'aliceblue',
});

export const NodeDetailPanel = memo(_NodeDetailPanel);
