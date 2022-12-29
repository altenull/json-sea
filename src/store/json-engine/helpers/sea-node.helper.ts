import { NodeType } from '../enums/node-type.enum';
import { ArraySeaNode, ObjectSeaNode, PrimitiveSeaNode, SeaNode } from '../types/sea-node.type';

export const isObjectSeaNode = (v: SeaNode): v is ObjectSeaNode => {
  return v.type === NodeType.Object;
};

export const isArraySeaNode = (v: SeaNode): v is ArraySeaNode => {
  return v.type === NodeType.Array;
};

export const isPrimitiveSeaNode = (v: SeaNode): v is PrimitiveSeaNode => {
  return v.type === NodeType.Primitive;
};
