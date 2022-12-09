import { atom } from 'recoil';
import { DEFAULT_STRINGIFIED_JSON } from './json-engine.constant';

export const JSON_ENGINE_PREFIX = '@json-engine';

export const stringifiedJsonAtom = atom<string>({
  key: `${JSON_ENGINE_PREFIX}/jsonCodeAtom`,
  default: DEFAULT_STRINGIFIED_JSON,
});

export const latestValidStringifiedJsonAtom = atom<string>({
  key: `${JSON_ENGINE_PREFIX}/latestValidStringifiedJsonAtom`,
  default: DEFAULT_STRINGIFIED_JSON,
});
