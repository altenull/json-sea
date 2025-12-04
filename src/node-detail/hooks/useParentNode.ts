import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { isNull, isString } from '../../utils/json.util';

/**
 * Returns the parent node of the currently selected node if exists.
 * @returns {SeaNode | null}
 */
export const useParentNode = () => {
  const selectedNodeId = useJsonDiagramViewStore((state) => state.selectedNodeId);
  const { seaNodeEntities } = useJsonEngineStore((state) => state.jsonTree);

  const selectedNode = isNull(selectedNodeId) ? null : (seaNodeEntities[selectedNodeId] ?? null);

  if (isNull(selectedNode)) {
    return null;
  }

  const parentId = selectedNode.data.parentNodePathIds.at(-1);

  if (!isString(parentId)) {
    return null;
  }

  return seaNodeEntities[parentId];
};
