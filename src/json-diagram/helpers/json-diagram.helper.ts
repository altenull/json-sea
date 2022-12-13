import { Edge, Node, Position } from 'reactflow';
import { JsonDiagramLayout } from '../../store/json-diagram-view/enums/json-diagram-layout.enum';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { JsonNode } from '../../store/json-engine/types/json-node.type';

// const initialNodes = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'Node 0' },
//     position: { x: 250, y: 5 },
//     className: 'light',
//   },
//   {
//     id: '2',
//     data: { label: 'Group A' },
//     position: { x: 100, y: 100 },
//     className: 'light',
//     style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 200 },
//   },
//   {
//     id: '2a',
//     data: { label: 'Node A.1' },
//     position: { x: 10, y: 50 },
//     parentNode: '2',
//   },
//   { id: '3', data: { label: 'Node 1' }, position: { x: 320, y: 100 }, className: 'light' },
//   {
//     id: '4',
//     data: { label: 'Group B' },
//     position: { x: 320, y: 200 },
//     className: 'light',
//     style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 300, height: 300 },
//   },
//   {
//     id: '4a',
//     data: { label: 'Node B.1' },
//     position: { x: 15, y: 65 },
//     className: 'light',
//     parentNode: '4',
//     extent: 'parent',
//   },
//   {
//     id: '4b',
//     data: { label: 'Group B.A' },
//     position: { x: 15, y: 120 },
//     className: 'light',
//     style: { backgroundColor: 'rgba(255, 0, 255, 0.2)', height: 150, width: 270 },
//     parentNode: '4',
//   },
//   {
//     id: '4b1',
//     data: { label: 'Node B.A.1' },
//     position: { x: 20, y: 40 },
//     className: 'light',
//     parentNode: '4b',
//   },
//   {
//     id: '4b2',
//     data: { label: 'Node B.A.2' },
//     position: { x: 100, y: 100 },
//     className: 'light',
//     parentNode: '4b',
//   },
// ];

// const initialEdges = [
//   { id: 'e1-2', source: '1', target: '2', animated: true },
//   { id: 'e1-3', source: '1', target: '3' },
//   { id: 'e2a-4a', source: '2a', target: '4a' },
//   { id: 'e3-4', source: '3', target: '4' },
//   { id: 'e3-4b', source: '3', target: '4b' },
//   { id: 'e4a-4b1', source: '4a', target: '4b1' },
//   { id: 'e4a-4b2', source: '4a', target: '4b2' },
//   { id: 'e4b1-4b2', source: '4b1', target: '4b2' },
// ];

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

export const generateNodes = (jsonNodes: JsonNode[]): Node[] => {
  return jsonNodes.map(({ id, depth, nodeType, dataType, data }) => {
    return {
      id,
      type: nodeType,
      data,
      position: { x: depth * 200, y: 50 },
    };
  });
};

// TODO: Implement generateEdges function.
export const generateEdges = (json: object): Edge[] => {
  // return [{ id: '1-2', source: '1', target: '2', animated: true }];
  return [];
};
