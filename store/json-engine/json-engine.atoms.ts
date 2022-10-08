import { atom } from 'recoil';
import { DEFAULT_JSON_CODE } from './json-engine.constants';

export const JSON_ENGINE_PREFIX = '@json-engine';

export const jsonCodeAtom = atom<string>({
  key: `${JSON_ENGINE_PREFIX}/json-code-atom`,
  default: DEFAULT_JSON_CODE,
});

export const latestValidJsonCodeAtom = atom<string>({
  key: `${JSON_ENGINE_PREFIX}/latest-valid-json-code-atom`,
  default: DEFAULT_JSON_CODE,
});
