import { atom } from 'recoil';

export const NODE_DETAIL_VIEW_PREFIX = '@node-detail-view';

export type HoveredNodeDetailCard = {
  nodeId: string;
  propertyK?: string; // Will be set when a `PropertyCard` component is hovered. (`PropertyCard` is used for Object)
};

export const hoveredNodeDetailCardAtom = atom<HoveredNodeDetailCard | null>({
  key: `${NODE_DETAIL_VIEW_PREFIX}/hoveredNodeDetailCardAtom`,
  default: null,
});
