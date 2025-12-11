import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs';
import { useNodePath } from '../../node-detail/hooks/useNodePath';
import { useSelectedNode } from '../../node-detail/hooks/useSelectedNode';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { isNull } from '../../utils/json.util';
import { isEmptyArray } from '../../utils/array.util';

export const NodePathBreadcrumbs = () => {
  const selectNode = useJsonDiagramViewStore((state) => state.selectNode);
  const selectedNode: SeaNode | null = useSelectedNode();
  const { fullNodeIdNames } = useNodePath(selectedNode?.id ?? null);

  if (isNull(selectedNode) || isEmptyArray(fullNodeIdNames)) {
    return null;
  }

  return (
    <Breadcrumbs
      classNames={{
        base: 'absolute left-1/2 top-2 z-10 -translate-x-1/2',
        list: 'px-3',
      }}
      variant="solid"
      radius="sm"
      color="primary"
      maxItems={7}
      itemsBeforeCollapse={1}
      itemsAfterCollapse={2}
    >
      {fullNodeIdNames.map(({ nodeId, nodeName }, index, array) => {
        const isLast = index === array.length - 1;

        return (
          <BreadcrumbItem key={nodeId} isCurrent={isLast} onPress={() => selectNode(nodeId)}>
            {nodeName}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
