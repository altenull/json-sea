import { Node } from 'reactflow';
import { JsonDataType } from '../enums/json-data-type.enum';
import { NodeType } from '../enums/node-type.enum';

type SharedNodeData = {
  depth: number; // The depth starts from 0. (depth of root node is 0)
  stringifiedJson: string;
};

export type ObjectNodeData = SharedNodeData & {
  dataType: JsonDataType.Object;
  /**
   * Will be set if parent of `ObjectNode` is an array, so nullable.
   */
  arrayIndexForObject: number | null;
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
  /**
   * `PrimitiveNode` is always an item of specific array.
   * It means that the parent is always an `ArrayNode`.
   */
  arrayIndex: number;
  value: string | number | boolean | null;
};

export type ObjectSeaNode = Node<ObjectNodeData, NodeType.Object>;
export type ArraySeaNode = Node<ArrayNodeData, NodeType.Array>;
export type PrimitiveSeaNode = Node<PrimitiveNodeData, NodeType.Primitive>;

export type SeaNode = ObjectSeaNode | ArraySeaNode | PrimitiveSeaNode;
