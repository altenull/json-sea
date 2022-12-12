type StringifiedJson = {
  stringifiedJson: string;
};

export type ObjectNodeData = StringifiedJson & {
  value: {
    [key: string]: any;
  };
};
export type ArrayNodeData = StringifiedJson & {
  value: number; // It means array item index.
};
export type PrimitiveNodeData = StringifiedJson & {
  value: string | number | boolean | null;
};
