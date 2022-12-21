import { Node, Position } from 'reactflow';
import { JsonDiagramLayout } from '../../store/json-diagram-view/enums/json-diagram-layout.enum';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';

export const generateNodesLegacy = ({
  json,
  jsonDiagramLayout,
}: {
  json: object;
  jsonDiagramLayout: JsonDiagramLayout;
}): Node[] => {
  const isHorizontalLayout: boolean = jsonDiagramLayout === JsonDiagramLayout.Horizontal;

  /**
   * TODO: If horizontal layout,
   * 1. Root -> 'sourcePosition: Position.Right',
   * 2. Middel level -> 'sourcePosition: Position.Right' and 'targetPosition: Position.Left'.
   * 2. Lowest level -> 'targetPosition: Position.Left'.
   */
  return [
    {
      id: '1',
      type: NodeType.Object,
      data: { label: 'Node 1' },
      position: { x: 100, y: 40 },
      ...(isHorizontalLayout && { sourcePosition: Position.Right }),
    },
    {
      id: '2',
      type: NodeType.Array,
      data: { label: 'Node 2' },
      position: { x: 300, y: 40 },
      ...(isHorizontalLayout && { targetPosition: Position.Left }),
    },
    {
      id: '3',
      type: NodeType.Primitive,
      data: { label: 'Node 3' },
      position: { x: 500, y: 40 },
      ...(isHorizontalLayout && { targetPosition: Position.Left }),
    },
  ];
};
