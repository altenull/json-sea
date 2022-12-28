import { Node } from 'reactflow';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';

type SharedNodeData = {
  depth: number; // The depth of root node is 0.
  stringifiedJson: string;
};

export type ObjectNodeData = SharedNodeData & {
  dataType: JsonDataType.Object;
  obj: object;
  isRootNode: boolean;
};

export type ArrayNodeData = SharedNodeData & {
  dataType: JsonDataType.Array;
  arrayIndex: number;
  items: any[];
};

export type PrimitiveNodeData = SharedNodeData & {
  dataType: JsonDataType.String | JsonDataType.Number | JsonDataType.Boolean | JsonDataType.Null;
  arrayIndex: number;
  value: string | number | boolean | null;
};

/**
 * @property data: ObjectNodeData | ArrayNodeData | PrimitiveNodeData;
 */
export type SeaNode = Node<ObjectNodeData | ArrayNodeData | PrimitiveNodeData> & { type: NodeType };
