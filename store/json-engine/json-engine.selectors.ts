import { selector } from 'recoil';
import { isValidJson } from '../../src/utils/json.utils';
import { jsonCodeAtom, JSON_ENGINE_PREFIX } from './json-engine.atoms';

export const isValidJsonCodeSelector = selector<boolean>({
  key: `${JSON_ENGINE_PREFIX}/is-valid-json-code-selector`,
  get: ({ get }) => {
    const jsonCode: string = get(jsonCodeAtom);
    return isValidJson(jsonCode);
  },
});
