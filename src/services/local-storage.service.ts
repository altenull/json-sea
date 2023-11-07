import { isString } from '../utils/json.util';

type LocalStorageKey = 'settings:minimap' | 'settings:nodePath';

type KeyToValueTypeMap<K extends LocalStorageKey> = {
  'settings:minimap': boolean;
  'settings:nodePath': boolean;
}[K];

type DefaultValueMap = {
  [K in LocalStorageKey]: KeyToValueTypeMap<K>;
};

const defaultValueMap: DefaultValueMap = {
  'settings:minimap': true,
  'settings:nodePath': true,
};

export const localStorageService = {
  setItem: <K extends LocalStorageKey>(key: K, value: KeyToValueTypeMap<K>) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  getItem: <K extends LocalStorageKey>(key: K): KeyToValueTypeMap<K> => {
    if (typeof window !== 'undefined') {
      const storedValue: string | null = localStorage.getItem(key);

      if (isString(storedValue)) {
        return JSON.parse(storedValue) as KeyToValueTypeMap<K>;
      } else {
        return defaultValueMap[key];
      }
    } else {
      return defaultValueMap[key];
    }
  },

  removeItem: (key: LocalStorageKey) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  },
};
