# CustomMiniMap._CustomMiniMap

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-diagram\components\CustomMiniMap.tsx` (lines 12-54)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
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
}
```

## Docstring

_No docstring provided._

## Source

```
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
```

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 1
- Features: 4

## Callers

None

## Callees

None
