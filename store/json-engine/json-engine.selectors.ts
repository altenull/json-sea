import { selector } from 'recoil';
import { jsonCodeAtom, JSON_ENGINE_PREFIX } from './json-engine.atoms';

const isValidJson = (code: string): boolean => {
  try {
    return typeof JSON.parse(code) === 'object';
  } catch (error) {
    return false;
  }
};

export const isValidJsonCodeSelector = selector<boolean>({
  key: `${JSON_ENGINE_PREFIX}/isValidJsonCodeSelector`,
  get: ({ get }) => {
    const jsonCode: string = get(jsonCodeAtom);
    return isValidJson(jsonCode);
  },
});
