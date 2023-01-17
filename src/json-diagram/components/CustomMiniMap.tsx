import { CSS, styled, useTheme } from '@nextui-org/react';
import { memo, useCallback, useMemo } from 'react';
import { GetMiniMapNodeAttribute, MiniMap } from 'reactflow';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';
import { sizes } from '../../ui/constants/sizes.constant';

const nodeClassNames = {
  object: 'object-node',
  array: 'array-node',
  primitive: 'primitive-node',
};

const _CustomMiniMap = () => {
  const { isDark } = useTheme();

  const memoizedMiniMapCss: CSS = useMemo(
    () => ({
      backgroundColor: '$backgroundContrast',
      ...(isDark && {
        '.react-flow__minimap-mask': {
          fill: 'rgba(15, 15, 15, 0.7)',
        },
      }),
    }),
    [isDark]
  );

  const nodeClassName: GetMiniMapNodeAttribute<ObjectNodeData | ArrayNodeData | PrimitiveNodeData> = useCallback(
    (node) => {
      const nodeTypeToClassNameMap: Record<NodeType, string> = {
        [NodeType.Object]: nodeClassNames.object,
        [NodeType.Array]: nodeClassNames.array,
        [NodeType.Primitive]: nodeClassNames.primitive,
      };

      return nodeTypeToClassNameMap[node.type as NodeType];
    },
    []
  );

  return (
    <StyledMiniMap css={memoizedMiniMapCss} position="bottom-left" pannable zoomable nodeClassName={nodeClassName} />
  );
};

const StyledMiniMap = styled(MiniMap, {
  // `border-radius` is not supported in <rect> tag.
  [`.${nodeClassNames.object}`]: {
    rx: 8,
    ry: 8,
  },
  [`.${nodeClassNames.array}`]: {
    rx: sizes.arrayNodeSize / 2,
    ry: sizes.arrayNodeSize / 2,
  },
  [`.${nodeClassNames.primitive}`]: {
    rx: 8,
    ry: 8,
  },
});

export const CustomMiniMap = memo(_CustomMiniMap);
