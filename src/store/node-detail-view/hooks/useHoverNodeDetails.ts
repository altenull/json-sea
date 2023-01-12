import { useEffect } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useHover } from '../../../utils/react-hooks/useHover';
import { HoveredNodeDetail, hoveredNodeDetailsAtom } from '../node-detail-view.atom';

export const useHoverNodeDetails = (hoveredNodeDetails: HoveredNodeDetail[]) => {
  const setter = useSetRecoilState(hoveredNodeDetailsAtom);
  const resetter = useResetRecoilState(hoveredNodeDetailsAtom);

  const [cardRef, isCardHovered] = useHover<HTMLDivElement>();

  useEffect(() => {
    isCardHovered ? setter(hoveredNodeDetails) : resetter();
  }, [isCardHovered, hoveredNodeDetails, setter, resetter]);

  return { cardRef };
};
