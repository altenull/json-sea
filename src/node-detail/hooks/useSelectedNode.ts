import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { isNull } from '../../utils/json.util';

/**
 * Returns the currently selectedd node if exists.
 * @returns {SeaNode | null}
 */
export const useSelectedNode = () => {
  const selectedNodeId = useJsonDiagramViewStore((state) => state.selectedNodeId);
  const { seaNodeEntities } = useJsonEngineStore((state) => state.jsonTree);

  if (isNull(selectedNodeId)) {
    return null;
  }

  return seaNodeEntities[selectedNodeId] ?? null;
};
