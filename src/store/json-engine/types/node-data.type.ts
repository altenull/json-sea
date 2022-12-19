type StringifiedJson = {
  stringifiedJson: string;
};

export type ObjectNodeData = StringifiedJson & {
  obj: object;
  isRootNode: boolean;
};

export type ArrayNodeData = StringifiedJson & {
  arrayIndex: number;
  items: any[];
};

export type Primitive = string | number | boolean | null;
export type PrimitiveNodeData = StringifiedJson & {
  value: Primitive;
};
