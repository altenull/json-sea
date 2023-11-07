import { Chip } from '@nextui-org/chip';
import { semanticColors } from '@nextui-org/theme';
import { nodeTypeToAcronymMap } from '../../node-detail/array/helpers/node-type.helper';
import { useNodePath } from '../../node-detail/hooks/useNodePath';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { useSettingsStore } from '../../store/settings/settings.store';
import { Text } from '../../ui/components/Text';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';
import { useEnv } from '../../utils/react-hooks/useEnv';

type Props = {
  nodeId: string;
  nodeType: NodeType;
  isHighlight: boolean;
  children: React.ReactNode;
};

const hostClassNames: Record<NodeType, string> = {
  [NodeType.Object]: 'group node-shell-base node-shell-object',
  [NodeType.Array]: 'group node-shell-base node-shell-array',
  [NodeType.Primitive]: 'group node-shell-base node-shell-primitive',
};

const _NodeShell = ({ nodeId, nodeType, isHighlight, children }: Props) => {
  const [selectedNodeId, selectNode] = useJsonDiagramViewStore((state) => [state.selectedNodeId, state.selectNode]);
  const isNodePathOn = useSettingsStore((state) => state.isNodePathOn);

  const { fullNodePath } = useNodePath(nodeId);
  const { theme } = useCustomTheme();
  const { isLocalhost } = useEnv();

  const isSelected = nodeId === selectedNodeId;

  return (
    <div
      style={{
        backgroundColor: isSelected ? semanticColors[theme].primary[50] : undefined,
        borderColor: isHighlight ? (semanticColors[theme].primary as any).DEFAULT : undefined,
      }}
      className={hostClassNames[nodeType]}
      onClick={() => selectNode(nodeId)}
    >
      {isLocalhost && (
        <Text className="text-warning" h4>
          {nodeTypeToAcronymMap[nodeType]} ({nodeId})
        </Text>
      )}

      {nodeType === NodeType.Object && (
        <span
          style={{
            borderRightColor: isHighlight ? (semanticColors[theme].primary as any).DEFAULT : undefined,
          }}
          className="absolute left-[-24px] top-1/2 min-h-[24px] min-w-[24px] -translate-y-1/2 border-b-[12px] border-r-[10px] border-t-[12px] border-solid border-b-transparent border-r-default-200 border-t-transparent group-hover:border-r-default-300"
        />
      )}

      {children}

      {isNodePathOn && (
        <Chip
          color="primary"
          size="sm"
          radius="sm"
          className="invisible absolute -bottom-8 left-1/2 -translate-x-1/2 group-hover:visible"
        >
          {fullNodePath}
        </Chip>
      )}
    </div>
  );
};

export const NodeShell = _NodeShell;
