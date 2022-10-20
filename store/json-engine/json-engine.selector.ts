import { selector } from 'recoil';
import { isValidJson } from '../../src/utils/json.util';
import { JSON_ENGINE_PREFIX, latestValidStringifiedJsonAtom, stringifiedJsonAtom } from './json-engine.atom';

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
