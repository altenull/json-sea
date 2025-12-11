import { Spacer } from '@heroui/react';
import { memo } from 'react';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { useSettingsStore } from '../../store/settings/settings.store';
import { Text } from '../../ui/components/Text';
import { nodeTypeToTextMap } from '../array/helpers/node-type.helper';
import { useNodePath } from '../hooks/useNodePath';
import { NodeDetailChip } from './NodeDetailChip';
import { NodePathCard } from './NodePathCard';

type Props = {
  selectedNode: SeaNode;
};

const _NodeDetailPanelHeader = ({ selectedNode }: Props) => {
  const isNodePathOn = useSettingsStore((state) => state.isNodePathOn);
  const { fullNodePath, selfNodePath } = useNodePath(selectedNode.id);

  return (
    <div>
      <div className="flex justify-between">
        <Text h3>{selectedNode.type !== undefined && nodeTypeToTextMap[selectedNode.type]}</Text>
        <NodeDetailChip value={selfNodePath} />
      </div>

      <Spacer y={2} />

      {isNodePathOn && (
        <>
          <NodePathCard fullNodePath={fullNodePath} />
          <Spacer y={6} />
        </>
      )}
    </div>
  );
};

export const NodeDetailPanelHeader = memo(_NodeDetailPanelHeader);
