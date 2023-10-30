import { memo } from 'react';

type Props = {
  color: string;
};

const _PreviewColor = ({ color }: Props) => {
  return <div style={{ backgroundColor: color }} className="h-[24px] w-full rounded-full" />;
};

export const PreviewColor = memo(_PreviewColor);
