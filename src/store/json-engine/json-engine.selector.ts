import { Edge } from 'reactflow';
import { selector } from 'recoil';
import { arrayToEntities, Entities } from '../../utils/array.util';
import { isValidJson } from '../../utils/json.util';
import { jsonParser } from './helpers/json-parser.helper';
import { getLayoutedSeaNodes } from './helpers/sea-node-position.helper';
import { JSON_ENGINE_PREFIX, latestValidStringifiedJsonAtom, stringifiedJsonAtom } from './json-engine.atom';
import { SeaNode } from './types/sea-node.type';

export const isValidJsonSelector = selector<boolean>({
  key: `${JSON_ENGINE_PREFIX}/isValidJsonSelector`,
  get: ({ get }) => {
    const stringifiedJson: string = get(stringifiedJsonAtom);
    return isValidJson(stringifiedJson);
  },
});

export const latestValidJsonSelector = selector<object | any[]>({
  key: `${JSON_ENGINE_PREFIX}/latestValidJsonSelector`,
  get: ({ get }) => {
    const latestValidStringifiedJson: string = get(latestValidStringifiedJsonAtom);
    return JSON.parse(latestValidStringifiedJson);
  },
});

export type JsonTree = {
  seaNodes: SeaNode[];
  seaNodeEntities: Entities<SeaNode>;
  edges: Edge[];
};

export const jsonTreeSelector = selector<JsonTree>({
  key: `${JSON_ENGINE_PREFIX}/jsonTreeSelector`,
  get: ({ get }) => {
    const latestValidJson: object | any[] = get(latestValidJsonSelector);

    const { seaNodes, edges } = jsonParser(latestValidJson);
    const layoutedSeaNodes: SeaNode[] = getLayoutedSeaNodes(seaNodes, edges);
    const seaNodeEntities: Entities<SeaNode> = arrayToEntities<SeaNode>(layoutedSeaNodes, 'id');

    return { seaNodes: layoutedSeaNodes, seaNodeEntities, edges };
  },
});
