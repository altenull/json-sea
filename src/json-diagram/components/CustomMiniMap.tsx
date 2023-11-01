import { CSSProperties, ComponentProps, memo, useCallback, useMemo } from 'react';
import { GetMiniMapNodeAttribute, MiniMap } from 'reactflow';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';

type MinimapTheme = {
  backgroundColor: CSSProperties['backgroundColor'];
  maskColor: ComponentProps<typeof MiniMap>['maskColor'];
};

const _CustomMiniMap = () => {
  const { isDarkMode } = useCustomTheme();

  const nodeClassName: GetMiniMapNodeAttribute<ObjectNodeData | ArrayNodeData | PrimitiveNodeData> = useCallback(
    (node) => {
      const nodeTypeToClassNameMap: Record<NodeType, string> = {
        [NodeType.Object]: 'object-node',
        [NodeType.Array]: 'array-node',
        [NodeType.Primitive]: 'primitive-node',
      };

      return nodeTypeToClassNameMap[node.type as NodeType];
    },
    [],
  );

  const minimapTheme = useMemo(() => {
    const lightMinimapTheme: MinimapTheme = {
      backgroundColor: '#ffffff', // backgroundContrast
      maskColor: undefined,
    };
    const darkMinimapTheme: MinimapTheme = {
      backgroundColor: '#16181A', // backgroundContrast
      maskColor: 'rgba(15, 15, 15, 0.7)',
    };

    return isDarkMode ? darkMinimapTheme : lightMinimapTheme;
  }, [isDarkMode]);

  return (
    <MiniMap
      style={{
        backgroundColor: minimapTheme.backgroundColor,
        margin: '0 0 8px 8px',
      }}
      maskColor={minimapTheme.maskColor}
      position="bottom-left"
      pannable
      zoomable
      nodeClassName={nodeClassName}
    />
  );
};

export const CustomMiniMap = memo(_CustomMiniMap);
