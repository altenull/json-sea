# Module: NodeShell

**File:** `\src\json-diagram\components\NodeShell.tsx`

## Overview

Module `NodeShell` contains 0 analyzed entities.

```
import { Chip } from "@heroui/chip";
import { semanticColors } from "@heroui/theme";
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

```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 10
- Authors: 1
- Bug fixes: 2
- Features: 4

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
