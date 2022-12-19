import { JsonDataType } from '../enums/json-data-type.enum';
import { PrimitiveJsonDataType } from './json-node.type';

type StringifiedJson = {
  stringifiedJson: string;
};

export type ObjectNodeData = StringifiedJson & {
  dataType: JsonDataType.Object;
  obj: object;
  isRootNode: boolean;
};

export type ArrayNodeData = StringifiedJson & {
  dataType: JsonDataType.Array;
  arrayIndex: number;
  items: any[];
};

export type Primitive = string | number | boolean | null;
export type PrimitiveNodeData = StringifiedJson & {
  dataType: PrimitiveJsonDataType;
  value: Primitive;
};
