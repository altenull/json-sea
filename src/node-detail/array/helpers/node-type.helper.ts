import { NodeType } from '../../../store/json-engine/enums/node-type.enum';

export const nodeTypeToTextMap: Record<NodeType, string> = {
  [NodeType.Object]: 'Object',
  [NodeType.Array]: 'Array',
  [NodeType.Primitive]: 'Primitive',
};

export const nodeTypeToAcronymMap: Record<NodeType, string> = {
  [NodeType.Object]: 'O',
  [NodeType.Array]: 'A',
  [NodeType.Primitive]: 'P',
};
