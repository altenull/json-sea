import { memo } from 'react';

type Props = {
  color: string;
};

const _PreviewColor = ({ color }: Props) => {
  return <div className={`h-[24px] w-full rounded-lg bg-[${color}]`} />;
};

export const PreviewColor = memo(_PreviewColor);
