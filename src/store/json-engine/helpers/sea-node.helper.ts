import { NodeType } from '../enums/node-type.enum';
import { ArraySeaNode, ObjectSeaNode, PrimitiveSeaNode, SeaNode } from '../types/sea-node.type';

export const isObjectSeaNode = (n: SeaNode): n is ObjectSeaNode => {
  return n.type === NodeType.Object;
};

export const isArraySeaNode = (n: SeaNode): n is ArraySeaNode => {
  return n.type === NodeType.Array;
};

export const isPrimitiveSeaNode = (n: SeaNode): n is PrimitiveSeaNode => {
  return n.type === NodeType.Primitive;
};
