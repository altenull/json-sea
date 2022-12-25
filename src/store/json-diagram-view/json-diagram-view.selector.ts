import { selector } from 'recoil';
import { isNull } from '../../utils/json.util';
import { SeaNodeEntities, seaNodeEntitiesSelector } from '../json-engine/json-engine.selector';
import { SeaNode } from '../json-engine/types/sea-node.type';
import { JSON_DIAGRAM_VIEW_PREFIX, selectedNodeIdAtom } from './json-diagram-view.atom';

export const selectedSeaNodeSelector = selector<SeaNode | null>({
  key: `${JSON_DIAGRAM_VIEW_PREFIX}/selectedSeaNodeSelector`,
  get: ({ get }) => {
    const selectedNodeId: string | null = get(selectedNodeIdAtom);
    const seaNodeEntities: SeaNodeEntities = get(seaNodeEntitiesSelector);

    return isNull(selectedNodeId) ? null : seaNodeEntities[selectedNodeId] ?? null;
  },
});
