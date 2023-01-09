'use client';

import { useEffect } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useHover } from '../../../utils/react-hooks/useHover';
import { HoveredNodeDetailCard, hoveredNodeDetailCardAtom } from '../node-detail-view.atom';

export const useHoverNodeDetailCard = ({ nodeId, propertyK }: HoveredNodeDetailCard) => {
  const setHoveredNodeDetailCard = useSetRecoilState(hoveredNodeDetailCardAtom);
  const resetHoveredNodeDetailCard = useResetRecoilState(hoveredNodeDetailCardAtom);

  const [cardRef, isCardHovered] = useHover<HTMLDivElement>();

  useEffect(() => {
    if (isCardHovered) {
      setHoveredNodeDetailCard({
        nodeId,
        propertyK,
      });
    } else {
      resetHoveredNodeDetailCard();
    }
  }, [isCardHovered, nodeId, propertyK, setHoveredNodeDetailCard, resetHoveredNodeDetailCard]);

  return { cardRef };
};
