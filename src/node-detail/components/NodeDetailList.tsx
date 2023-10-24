import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const _NodeDetailList = ({ children }: Props) => {
  return <div className="flex flex-col gap-10">{children}</div>;
};

export const NodeDetailList = memo(_NodeDetailList);
