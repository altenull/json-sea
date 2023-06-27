import { Edge } from 'reactflow';
import { create } from 'zustand';
import { Entities } from '../../utils/array.util';
import { isValidJson } from '../../utils/json.util';
import { convertJsonTree } from './helpers/json-engine.helper';
import { DEFAULT_STRINGIFIED_JSON } from './json-engine.constant';
import { SeaNode } from './types/sea-node.type';

export type JsonTree = {
  seaNodes: SeaNode[];
  seaNodeEntities: Entities<SeaNode>;
  edges: Edge[];
};

type State = {
  stringifiedJson: string;
  isValidJson: boolean;
  latestValidStringifiedJson: string;
  jsonTree: JsonTree;
};

type Action = {
  setStringifiedJson: (json: string) => void;
};

export const useJsonEngineStore = create<State & Action>((set) => ({
  stringifiedJson: DEFAULT_STRINGIFIED_JSON,
  isValidJson: isValidJson(DEFAULT_STRINGIFIED_JSON),
  latestValidStringifiedJson: DEFAULT_STRINGIFIED_JSON,
  jsonTree: convertJsonTree(JSON.parse(DEFAULT_STRINGIFIED_JSON)),
  setStringifiedJson: (stringifiedJson: string) => {
    set(() =>
      isValidJson(stringifiedJson)
        ? {
            stringifiedJson,
            isValidJson: true,
            latestValidStringifiedJson: stringifiedJson,
            jsonTree: convertJsonTree(JSON.parse(stringifiedJson)),
          }
        : {
            stringifiedJson,
            isValidJson: false,
          }
    );
  },
}));
