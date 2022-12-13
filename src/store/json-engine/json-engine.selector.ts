import { selector } from 'recoil';
import { isValidJson } from '../../utils/json.util';
import { jsonParser } from './helpers/json-parser.helper';
import { JSON_ENGINE_PREFIX, latestValidStringifiedJsonAtom, stringifiedJsonAtom } from './json-engine.atom';
import { JsonNode } from './types/json-node.type';

export const isValidJsonSelector = selector<boolean>({
  key: `${JSON_ENGINE_PREFIX}/isValidJsonSelector`,
  get: ({ get }) => {
    const stringifiedJson: string = get(stringifiedJsonAtom);
    return isValidJson(stringifiedJson);
  },
});

export const latestValidJsonSelector = selector<object>({
  key: `${JSON_ENGINE_PREFIX}/latestValidJsonSelector`,
  get: ({ get }) => {
    const latestValidStringifiedJson: string = get(latestValidStringifiedJsonAtom);
    return JSON.parse(latestValidStringifiedJson);
  },
});

export const jsonNodesSelector = selector<JsonNode[]>({
  key: `${JSON_ENGINE_PREFIX}/jsonNodesSelector`,
  get: ({ get }) => {
    const latestValidJson: object = get(latestValidJsonSelector);
    return jsonParser(latestValidJson);
  },
});
