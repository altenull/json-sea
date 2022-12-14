type StringifiedJson = {
  stringifiedJson: string;
};

export type ObjectNodeData = StringifiedJson & {
  value: object;
};

export type ArrayIndex = number;
export type ArrayNodeData = StringifiedJson & {
  value: ArrayIndex;
};

export type Primitive = string | number | boolean | null;
export type PrimitiveNodeData = StringifiedJson & {
  value: Primitive;
};
