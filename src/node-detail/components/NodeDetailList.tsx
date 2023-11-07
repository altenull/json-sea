import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const _NodeDetailList = ({ children }: Props) => {
  return <div className="flex flex-1 flex-col gap-6">{children}</div>;
};

export const NodeDetailList = memo(_NodeDetailList);
