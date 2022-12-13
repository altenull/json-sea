type StringifiedJson = {
  stringifiedJson: string;
};

export type ObjectNodeData = StringifiedJson & {
  value: object;
};

export type ArrayNodeData = StringifiedJson & {
  value: number; // It means array item index.
};

export type PrimitiveNodeData = StringifiedJson & {
  value: string | number | boolean | null;
};
