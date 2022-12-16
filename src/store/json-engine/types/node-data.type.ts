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

// handle

// Object
//   target - Root이면 존재 안함
//   source - 필드에 존재 가능

// Array
//   target - 항상 존재
//   source - empty면 존재 안함

// Primitive (OK)
//   target - 항상 존재
//   source - 항상 존재 안함

// 고려해야할 것
// Object
//   (OK) 1. target - Root이면 존재 안함
//   2. source - 필드에 존재 가능 -> 음...

// Array
//   (OK) 3. source - empty면 존재 안함
