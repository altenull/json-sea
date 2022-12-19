import { Node } from 'reactflow';
import { selector } from 'recoil';
import { NodeEntities, nodeEntitiesSelector } from '../json-engine/json-engine.selector';
import { JSON_DIAGRAM_VIEW_PREFIX, selectedNodeIdAtom } from './json-diagram-view.atom';

export const selectedNodeSelector = selector<Node | null>({
  key: `${JSON_DIAGRAM_VIEW_PREFIX}/selectedNodeSelector`,
  get: ({ get }) => {
    const selectedNodeId: string | null = get(selectedNodeIdAtom);
    const nodeEntities: NodeEntities = get(nodeEntitiesSelector);

    return selectedNodeId === null ? null : nodeEntities[selectedNodeId] ?? null;
  },
});
