import { isString } from '../utils/json.util';

type LocalStorageKey = 'settings:minimap';

type KeyToValueTypeMap<K extends LocalStorageKey> = {
  'settings:minimap': boolean;
}[K];

type DefaultValueMap = {
  [K in LocalStorageKey]: KeyToValueTypeMap<K>;
};

const defaultValueMap: DefaultValueMap = {
  'settings:minimap': true,
};

export const localStorageService = {
  setItem: <K extends LocalStorageKey>(key: K, value: KeyToValueTypeMap<K>) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getItem: <K extends LocalStorageKey>(key: K): KeyToValueTypeMap<K> => {
    const storedValue: string | null = localStorage.getItem(key);

    if (isString(storedValue)) {
      return JSON.parse(storedValue) as KeyToValueTypeMap<K>;
    } else {
      return defaultValueMap[key];
    }
  },

  removeItem: (key: LocalStorageKey) => {
    localStorage.removeItem(key);
  },
};
