import { useEffect } from 'react';
import { useHover } from '../../../utils/react-hooks/useHover';
import { HoveredNodeDetail, useNodeDetailViewStore } from '../node-detail-view.store';

export const useHoverNodeDetails = (hoveredNodeDetails: HoveredNodeDetail[]) => {
  const [setHoveredNodeDetails, resetHoveredNodeDetails] = useNodeDetailViewStore((state) => [
    state.setHoveredNodeDetails,
    state.resetHoveredNodeDetails,
  ]);

  const [cardRef, isCardHovered] = useHover<HTMLDivElement>();

  useEffect(() => {
    isCardHovered ? setHoveredNodeDetails(hoveredNodeDetails) : resetHoveredNodeDetails();
  }, [isCardHovered]);

  return { cardRef };
};
