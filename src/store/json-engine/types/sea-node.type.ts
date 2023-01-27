import { Node } from 'reactflow';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';

type SharedNodeData = {
  depth: number; // The depth starts from 0. (depth of root node is 0)
  stringifiedJson: string;
};

export type ObjectNodeData = SharedNodeData & {
  dataType: JsonDataType.Object;
  arrayIndexForObject: number | null; // Array can includes `Object` type item.
  obj: object;
  isRootNode: boolean;
};

export type ArrayNodeData = SharedNodeData & {
  dataType: JsonDataType.Array;
  arrayIndex: number;
  items: any[];
  isRootNode: boolean;
};

export type PrimitiveNodeData = SharedNodeData & {
  dataType: JsonDataType.String | JsonDataType.Number | JsonDataType.Boolean | JsonDataType.Null;
  arrayIndex: number;
  value: string | number | boolean | null;
};

/**
 * @property data: ObjectNodeData | ArrayNodeData | PrimitiveNodeData;
 */
export type ObjectSeaNode = Node<ObjectNodeData> & { type: NodeType };
export type ArraySeaNode = Node<ArrayNodeData> & { type: NodeType };
export type PrimitiveSeaNode = Node<PrimitiveNodeData> & { type: NodeType };

export type SeaNode = ObjectSeaNode | ArraySeaNode | PrimitiveSeaNode;
