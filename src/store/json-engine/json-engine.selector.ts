import { Edge } from 'reactflow';
import { selector } from 'recoil';
import { isValidJson } from '../../utils/json.util';
import { jsonParser } from './helpers/json-parser.helper';
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

export type SeaNodeEntities = { [nodeId: string]: SeaNode };

export const seaNodesAndEdgesSelector = selector<{
  seaNodes: SeaNode[];
  seaNodeEntities: SeaNodeEntities;
  edges: Edge[];
}>({
  key: `${JSON_ENGINE_PREFIX}/seaNodesAndEdgesSelector`,
  get: ({ get }) => {
    const latestValidJson: object | any[] = get(latestValidJsonSelector);
    const { seaNodes, edges } = jsonParser(latestValidJson);
    const seaNodeEntities = seaNodes.reduce(
      (acc: SeaNodeEntities, seaNode: SeaNode) => ({
        ...acc,
        [seaNode.id]: seaNode,
      }),
      {}
    );

    return { seaNodes, seaNodeEntities, edges };
  },
});
