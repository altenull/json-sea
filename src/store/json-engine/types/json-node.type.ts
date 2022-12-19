import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData } from './node-data.type';

export type SharedJsonNode = {
  id: string;
  depth: number; // The depth of root node is 0.
};

export type ObjectJsonNode = SharedJsonNode & {
  nodeType: NodeType.Object;
  data: ObjectNodeData;
};

export type ArrayJsonNode = SharedJsonNode & {
  nodeType: NodeType.Array;
  data: ArrayNodeData;
};

export type PrimitiveJsonDataType =
  | JsonDataType.String
  | JsonDataType.Number
  | JsonDataType.Boolean
  | JsonDataType.Null;
export type PrimitiveJsonNode = SharedJsonNode & {
  nodeType: NodeType.Primitive;
  data: PrimitiveNodeData;
};

export type JsonNode = ObjectJsonNode | ArrayJsonNode | PrimitiveJsonNode;
