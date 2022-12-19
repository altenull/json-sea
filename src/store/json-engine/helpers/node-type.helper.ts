import { Node } from 'reactflow';
import { isObject } from '../../../utils/json.util';
import { NodeType } from '../enums/node-type.enum';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData } from '../types/node-data.type';

export const isObjectNode = (v: unknown): v is Node<ObjectNodeData> => {
  return isObject(v) && (v as any).type === NodeType.Object;
};

export const isArrayNode = (v: unknown): v is Node<ArrayNodeData> => {
  return isObject(v) && (v as any).type === NodeType.Array;
};

export const isPrimitiveNode = (v: unknown): v is Node<PrimitiveNodeData> => {
  return isObject(v) && (v as any).type === NodeType.Primitive;
};
