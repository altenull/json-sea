import { Entities, arrayToEntities } from '../../../utils/array.util';
import { JsonTree } from '../json-engine.store';
import { SeaNode } from '../types/sea-node.type';
import { jsonParser } from './json-parser.helper';
import { getLayoutedSeaNodes } from './sea-node-position.helper';

export const convertJsonTree = (json: object | unknown[]): JsonTree => {
  const { seaNodes, edges } = jsonParser(json);
  const layoutedSeaNodes: SeaNode[] = getLayoutedSeaNodes(seaNodes, edges);
  const seaNodeEntities: Entities<SeaNode> = arrayToEntities<SeaNode>(layoutedSeaNodes, 'id');

  return { seaNodes: layoutedSeaNodes, seaNodeEntities, edges };
};
