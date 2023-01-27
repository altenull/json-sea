import { NodeType } from '../enums/node-type.enum';
import { ArraySeaNode, ObjectSeaNode, PrimitiveSeaNode, SeaNode } from '../types/sea-node.type';

export const isObjectSeaNode = (node: SeaNode): node is ObjectSeaNode => {
  return node.type === NodeType.Object;
};

export const isArraySeaNode = (node: SeaNode): node is ArraySeaNode => {
  return node.type === NodeType.Array;
};

export const isPrimitiveSeaNode = (node: SeaNode): node is PrimitiveSeaNode => {
  return node.type === NodeType.Primitive;
};
