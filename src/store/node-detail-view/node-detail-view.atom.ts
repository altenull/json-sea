import { atom } from 'recoil';

export const NODE_DETAIL_VIEW_PREFIX = '@node-detail-view';

export type HoveredNodeDetail = {
  nodeId: string;
  propertyK?: string; // Will be set when a `PropertyCard` component is hovered. (`PropertyCard` is used for Object)
};

export const hoveredNodeDetailsAtom = atom<HoveredNodeDetail[]>({
  key: `${NODE_DETAIL_VIEW_PREFIX}/hoveredNodeDetailsAtom`,
  default: [],
});
