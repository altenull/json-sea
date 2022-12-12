import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData } from './node-data.type';

export type SharedBaseNode = {
  id: string;
  depth: number; // The depth of root node is 0.
};
export type ObjectBaseNode = SharedBaseNode & {
  nodeType: NodeType.Object;
  jsonDataType: JsonDataType.Object;
  data: ObjectNodeData;
};
export type ArrayBaseNode = SharedBaseNode & {
  nodeType: NodeType.Array;
  jsonDataType: JsonDataType.Array;
  data: ArrayNodeData;
};
export type PrimitiveBaseNode = SharedBaseNode & {
  nodeType: NodeType.Primitive;
  jsonDataType: JsonDataType.String | JsonDataType.Number | JsonDataType.Boolean | JsonDataType.Null;
  data: PrimitiveNodeData;
};

export type BaseNode = ObjectBaseNode | ArrayBaseNode | PrimitiveBaseNode;
