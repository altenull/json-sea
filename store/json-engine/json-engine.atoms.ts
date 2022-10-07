import { atom } from 'recoil';
import { DEFAULT_JSON_CODE } from './json-engine.constants';

export const JSON_ENGINE_PREFIX = '@json-engine';

export const jsonCodeAtom = atom<string>({
  key: `${JSON_ENGINE_PREFIX}/jsonCodeAtom`,
  default: DEFAULT_JSON_CODE,
});

// TODO: Find out how to update latestValidJsonCodeAtom smartly
export const latestValidJsonCodeAtom = atom<string>({
  key: `${JSON_ENGINE_PREFIX}/latestValidJsonCodeAtom`,
  default: DEFAULT_JSON_CODE,
});
